var FysicalAccessor = require("../index");

var ethereumAddress = "0x06dad0077f71ff6d7280a3d42b202a861778855d";
var fysicalAccessor = new FysicalAccessor(
    "http://127.0.0.1:58081",
    "0xc51ea03d9953cffbcfe3ba6be897436233fb61bc",
    ethereumAddress,
    "26e9f5ca5edeab1b0ef99fd4736dddf842d44808b3da95e3ea54a473961e062e",
    10,
    true
);

var arraysEqual = function (a, b) {
        if (a.length !== b.length)
            return false;
        for (var i = a.length; i--;) {
            if (a[i] != b[i]) {// can't use !== because ids come back as strings from jsonrpc api
                return false;
            }
        }
        return true;
    },
    cloneArray = function (arr1) {
        var arr2 = [],
            i = arr1.length;
        while (i--) {
            arr2[i] = arr1[i];
        }
        return arr2;
    },
    isEqual = function (a, b) {
        if (a.constructor !== b.constructor) {
            return false;
        }
        switch (a.constructor) {
            case Array:
                return arraysEqual(a, b);
                break;
            case String:
            case Number:
                return a === b;
                break;
            default:
                throw new Error("FysicalAccessor", "unexpected type");
        }
    },
    stringToHex = function (s) {
        return fysicalAccessor.stringToHex(s);
    },
    hexToString = function (h) {
        return fysicalAccessor.hexToString(h);
    };

var testEntity = function (entity, argumentArray, callback) {
    fysicalAccessor.getOrCreateFysicalEntityAndCallbackWithId(
        entity,
        argumentArray,
        function (error, id) {
            var handleResult = function (error, collectedId) {
                if (error) {
                    throw new Error("FysicalAccessor Test", error);
                }
                if (!isEqual(id, collectedId)) {
                    throw new Error("FysicalAccessor Test", "Assertion Failed for entity: " + entity);
                }
                callback(collectedId);
            };
            var argumentArrayWithCallback = cloneArray(argumentArray);
            argumentArrayWithCallback.push(handleResult);
            fysicalAccessor["getIdBy" + entity].apply(null, argumentArrayWithCallback);
        }
    );
};

var getOrCreateSingleUriSetAndCallbackWithId = function (uri, callback) {
    testEntity(
        fysicalAccessor.entity.URI,
        [uri],
        function (uriId) {
            testEntity(
                fysicalAccessor.entity.URI_SET,
                [[uriId]],
                callback
            );
        }
    );
};

var getOrCreateEncryptionAlgorithmAndCallbackWithId = function (uri, callback) {
    getOrCreateSingleUriSetAndCallbackWithId(uri, function (uriSetId) {
            testEntity(
                fysicalAccessor.entity.ENCRYPTION_ALGORITHM,
                [uriSetId],
                callback
            );
        }
    );
};

var runTest = function () {
    getOrCreateSingleUriSetAndCallbackWithId("http://data", function (dataSetUriId) {
        getOrCreateEncryptionAlgorithmAndCallbackWithId("http://encryption", function (encryptionAlgorithmId) {
            fysicalAccessor.getEmptyResourceSetId(function (error, emptyResourceSetId) {
                if (error) {
                    throw new Error("FysicalAccessor", error);
                } else {
                    testEntity(
                        fysicalAccessor.entity.RESOURCE,
                        [
                            dataSetUriId,
                            encryptionAlgorithmId,
                            emptyResourceSetId
                        ],
                        function (resourceId) {
                            var publicKeyHex = stringToHex("some_public_key");
                            testEntity(
                                fysicalAccessor.entity.PUBLIC_KEY,
                                [
                                    publicKeyHex
                                ],
                                function (publicKeyId) {
                                    fysicalAccessor.getEmptyResourceSetId(function (error, emptyResourceSetId) {
                                        if (error) {
                                            throw new Error("FysicalAccessor", error);
                                        } else {
                                            testEntity(
                                                fysicalAccessor.entity.RESOURCE_SET,
                                                [
                                                    publicKeyId,
                                                    encryptionAlgorithmId,
                                                    [resourceId].sort(),
                                                    emptyResourceSetId
                                                ],
                                                function (resourceSetId) {
                                                    getOrCreateSingleUriSetAndCallbackWithId("http://checksum_algorithm", function (checksumAlgorithmUriSetId) {
                                                        testEntity(
                                                            fysicalAccessor.entity.CHECKSUM_ALGORITHM,
                                                            [checksumAlgorithmUriSetId],
                                                            function (checksumAlgorithmId) {

                                                                var decryptedChecksumString = "988881adc9fc3655077dc2d4d757d480b5ea0e11";
                                                                var decryptedChecksumBytes = stringToHex(decryptedChecksumString);

                                                                testEntity(
                                                                    fysicalAccessor.entity.CHECKSUM,
                                                                    [
                                                                        checksumAlgorithmId,
                                                                        decryptedChecksumBytes.length,
                                                                        decryptedChecksumBytes
                                                                    ],
                                                                    function (decryptedChecksumId) {

                                                                        var encryptedChecksumString = "9498a6644ef7b3787d49b3e04792ae040cf81658";
                                                                        var encryptedChecksumBytes = stringToHex(encryptedChecksumString);

                                                                        testEntity(
                                                                            fysicalAccessor.entity.CHECKSUM,
                                                                            [
                                                                                checksumAlgorithmId,
                                                                                encryptedChecksumBytes.length,
                                                                                encryptedChecksumBytes
                                                                            ],
                                                                            function (encryptedChecksumId) {

                                                                                testEntity(
                                                                                    fysicalAccessor.entity.CHECKSUM_PAIR,
                                                                                    [
                                                                                        encryptedChecksumId,
                                                                                        decryptedChecksumId
                                                                                    ],
                                                                                    function (checksumPairId) {

                                                                                        getOrCreateSingleUriSetAndCallbackWithId("http://agreement", function (agreementUriSetId) {

                                                                                            testEntity(
                                                                                                fysicalAccessor.entity.AGREEMENT,
                                                                                                [
                                                                                                    agreementUriSetId,
                                                                                                    checksumPairId
                                                                                                ],
                                                                                                function (agreementId) {

                                                                                                    testEntity(
                                                                                                        fysicalAccessor.entity.AGREEMENT_SET,
                                                                                                        [
                                                                                                            [agreementId].sort()
                                                                                                        ],
                                                                                                        function (agreementSetId) {

                                                                                                            var sourceAddress = ethereumAddress;
                                                                                                            var destinationAddress = "0x7A41E921B95b714EfDF997e46E7e08b58D268902";

                                                                                                            testEntity(
                                                                                                                fysicalAccessor.entity.TOKEN_TRANSFER,
                                                                                                                [sourceAddress, destinationAddress, 10 * 1000000000],
                                                                                                                function (tokenTransferId) {

                                                                                                                    testEntity(
                                                                                                                        fysicalAccessor.entity.TOKEN_TRANSFER_SET,
                                                                                                                        [[tokenTransferId]],
                                                                                                                        function (tokenTransferSetId) {

                                                                                                                            testEntity(
                                                                                                                                fysicalAccessor.entity.PROPOSAL,
                                                                                                                                [
                                                                                                                                    0,
                                                                                                                                    publicKeyId,
                                                                                                                                    encryptionAlgorithmId,
                                                                                                                                    resourceSetId,
                                                                                                                                    agreementSetId,
                                                                                                                                    tokenTransferSetId
                                                                                                                                ],
                                                                                                                                function (proposalId) {
                                                                                                                                    var decryptionKey = stringToHex("some_decryption_key_that_has_been_encrypted_with_buyers_asymmetric_public_key");
                                                                                                                                    var decryptionKeyLengths = [decryptionKey.length];
                                                                                                                                    fysicalAccessor.acceptProposal(proposalId, decryptionKey, decryptionKeyLengths, function (error, acceptProposalTxHash) {
                                                                                                                                        if (error) {
                                                                                                                                            throw new Error("FysicalAccessor", error);
                                                                                                                                        }
                                                                                                                                    });
                                                                                                                                }
                                                                                                                            );
                                                                                                                        }
                                                                                                                    );
                                                                                                                }
                                                                                                            );
                                                                                                        }
                                                                                                    );
                                                                                                }
                                                                                            );
                                                                                        });
                                                                                    }
                                                                                );
                                                                            }
                                                                        );
                                                                    }
                                                                );
                                                            }
                                                        );
                                                    });
                                                }
                                            );
                                        }
                                    });
                                }
                            );
                        }
                    );
                }
            });
        });
    });
};

runTest();