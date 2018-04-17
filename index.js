var Web3 = require('web3');
var Tx = require('ethereumjs-tx');

var fysicalContractAbi = [{
    "constant": true,
    "inputs": [],
    "name": "getAgreementCount",
    "outputs": [{"name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "source", "type": "address"}, {"name": "destination", "type": "address"}, {
        "name": "tokenCount",
        "type": "uint256"
    }],
    "name": "createTokenTransfer",
    "outputs": [{"name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "getUriCount",
    "outputs": [{"name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "name",
    "outputs": [{"name": "", "type": "string"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "uniqueAgreementIdsSortedAscending", "type": "uint256[]"}],
    "name": "createAgreementSet",
    "outputs": [{"name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "_spender", "type": "address"}, {"name": "_value", "type": "uint256"}],
    "name": "approve",
    "outputs": [{"name": "", "type": "bool"}],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "getEncryptionAlgorithmCount",
    "outputs": [{"name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{"name": "id", "type": "uint256"}],
    "name": "getAgreementSetById",
    "outputs": [{"name": "", "type": "uint256[]"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "totalSupply",
    "outputs": [{"name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "getPublicKeyCount",
    "outputs": [{"name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "uniqueTokenTransferIdsSortedAscending", "type": "uint256[]"}],
    "name": "createTokenTransferSet",
    "outputs": [{"name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "getAgreementSetCount",
    "outputs": [{"name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "_from", "type": "address"}, {"name": "_to", "type": "address"}, {
        "name": "_value",
        "type": "uint256"
    }],
    "name": "transferFrom",
    "outputs": [{"name": "", "type": "bool"}],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "getTokenTransferSetCount",
    "outputs": [{"name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "getResourceSetCount",
    "outputs": [{"name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "NULL_ENCRYPTION_ALGORITHM_ID",
    "outputs": [{"name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "decimals",
    "outputs": [{"name": "", "type": "uint8"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{"name": "id", "type": "uint256"}],
    "name": "getChecksumPairById",
    "outputs": [{"name": "", "type": "uint256"}, {"name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "minimumBlockNumberForWithdrawal", "type": "uint256"}, {
        "name": "creatorPublicKeyId",
        "type": "uint256"
    }, {"name": "acceptanceEncryptionAlgorithmId", "type": "uint256"}, {
        "name": "resourceSetId",
        "type": "uint256"
    }, {"name": "agreementSetId", "type": "uint256"}, {"name": "tokenTransferSetId", "type": "uint256"}],
    "name": "createProposal",
    "outputs": [{"name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{"name": "id", "type": "uint256"}],
    "name": "getProposalById",
    "outputs": [{"name": "", "type": "uint256"}, {"name": "", "type": "address"}, {
        "name": "",
        "type": "uint256"
    }, {"name": "", "type": "uint256"}, {"name": "", "type": "uint256"}, {"name": "", "type": "uint256"}, {
        "name": "",
        "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{"name": "proposalId", "type": "uint256"}, {"name": "resourceId", "type": "uint256"}],
    "name": "getEncryptedResourceDecryptionKey",
    "outputs": [{"name": "", "type": "bytes"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "uriSetId", "type": "uint256"}, {"name": "checksumPairId", "type": "uint256"}],
    "name": "createAgreement",
    "outputs": [{"name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "getChecksumAlgorithmCount",
    "outputs": [{"name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{"name": "id", "type": "uint256"}],
    "name": "getTokenTransferSetById",
    "outputs": [{"name": "", "type": "uint256[]"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "encryptedChecksumId", "type": "uint256"}, {"name": "decryptedChecksumId", "type": "uint256"}],
    "name": "createChecksumPair",
    "outputs": [{"name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "getChecksumCount",
    "outputs": [{"name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{"name": "id", "type": "uint256"}],
    "name": "getAgreementById",
    "outputs": [{"name": "", "type": "uint256"}, {"name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "ONE_BILLION",
    "outputs": [{"name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "EMPTY_RESOURCE_SET_ID",
    "outputs": [{"name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "_spender", "type": "address"}, {"name": "_subtractedValue", "type": "uint256"}],
    "name": "decreaseApproval",
    "outputs": [{"name": "", "type": "bool"}],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{"name": "id", "type": "uint256"}],
    "name": "getChecksumAlgorithmById",
    "outputs": [{"name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "algorithmId", "type": "uint256"}, {
        "name": "resourceByteCount",
        "type": "uint256"
    }, {"name": "value", "type": "bytes"}],
    "name": "createChecksum",
    "outputs": [{"name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{"name": "_owner", "type": "address"}],
    "name": "balanceOf",
    "outputs": [{"name": "balance", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "uriSetId", "type": "uint256"}, {
        "name": "encryptionAlgorithmId",
        "type": "uint256"
    }, {"name": "metaResourceSetId", "type": "uint256"}],
    "name": "createResource",
    "outputs": [{"name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{"name": "proposalId", "type": "uint256"}],
    "name": "getStateByProposalId",
    "outputs": [{"name": "", "type": "uint8"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "descriptionUriSetId", "type": "uint256"}],
    "name": "createEncryptionAlgorithm",
    "outputs": [{"name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{"name": "id", "type": "uint256"}],
    "name": "getUriById",
    "outputs": [{"name": "", "type": "string"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{"name": "id", "type": "uint256"}],
    "name": "getUriSetById",
    "outputs": [{"name": "", "type": "uint256[]"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{"name": "id", "type": "uint256"}],
    "name": "getTokenTransferById",
    "outputs": [{"name": "", "type": "address"}, {"name": "", "type": "address"}, {"name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{"name": "id", "type": "uint256"}],
    "name": "getResourceSetById",
    "outputs": [{"name": "", "type": "address"}, {"name": "", "type": "uint256"}, {
        "name": "",
        "type": "uint256"
    }, {"name": "", "type": "uint256[]"}, {"name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "uniqueUriIdsSortedAscending", "type": "uint256[]"}],
    "name": "createUriSet",
    "outputs": [{"name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "symbol",
    "outputs": [{"name": "", "type": "string"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "MAXIMUM_64_BIT_SIGNED_INTEGER_VALUE",
    "outputs": [{"name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "descriptionUriSetId", "type": "uint256"}],
    "name": "createChecksumAlgorithm",
    "outputs": [{"name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{"name": "id", "type": "uint256"}],
    "name": "getEncryptionAlgorithmById",
    "outputs": [{"name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "getResourceCount",
    "outputs": [{"name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "value", "type": "bytes"}],
    "name": "createPublicKey",
    "outputs": [{"name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "_to", "type": "address"}, {"name": "_value", "type": "uint256"}],
    "name": "transfer",
    "outputs": [{"name": "", "type": "bool"}],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "getUriSetCount",
    "outputs": [{"name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "NULL_ENCRYPTION_ALGORITHM_DESCRIPTION_URI_ID",
    "outputs": [{"name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "ONE_QUINTILLION",
    "outputs": [{"name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "proposalId", "type": "uint256"}],
    "name": "rejectProposal",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{"name": "id", "type": "uint256"}],
    "name": "getChecksumById",
    "outputs": [{"name": "", "type": "uint256"}, {"name": "", "type": "uint256"}, {"name": "", "type": "bytes"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "getProposalCount",
    "outputs": [{"name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{"name": "address_", "type": "address"}, {"name": "resourceId", "type": "uint256"}],
    "name": "hasAddressAssignedResourceChecksumPair",
    "outputs": [{"name": "", "type": "bool"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{"name": "id", "type": "uint256"}],
    "name": "getResourceById",
    "outputs": [{"name": "", "type": "uint256"}, {"name": "", "type": "uint256"}, {"name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "value", "type": "string"}],
    "name": "createUri",
    "outputs": [{"name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{"name": "assigner", "type": "address"}, {"name": "resourceId", "type": "uint256"}],
    "name": "getChecksumPairIdByAssignerAndResourceId",
    "outputs": [{"name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "getChecksumPairCount",
    "outputs": [{"name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "_spender", "type": "address"}, {"name": "_addedValue", "type": "uint256"}],
    "name": "increaseApproval",
    "outputs": [{"name": "", "type": "bool"}],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{"name": "_owner", "type": "address"}, {"name": "_spender", "type": "address"}],
    "name": "allowance",
    "outputs": [{"name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{"name": "id", "type": "uint256"}],
    "name": "getPublicKeyById",
    "outputs": [{"name": "", "type": "bytes"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "proposalId", "type": "uint256"}],
    "name": "withdrawProposal",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "EMPTY_PUBLIC_KEY_ID",
    "outputs": [{"name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "creatorPublicKeyId", "type": "uint256"}, {
        "name": "proposalEncryptionAlgorithmId",
        "type": "uint256"
    }, {"name": "uniqueResourceIdsSortedAscending", "type": "uint256[]"}, {
        "name": "metaResourceSetId",
        "type": "uint256"
    }],
    "name": "createResourceSet",
    "outputs": [{"name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "resourceId", "type": "uint256"}, {"name": "checksumPairId", "type": "uint256"}],
    "name": "assignResourceChecksumPair",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "NULL_ENCRYPTION_ALGORITHM_DESCRIPTION_URI_SET_ID",
    "outputs": [{"name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "proposalId", "type": "uint256"}, {
        "name": "concatenatedResourceDecryptionKeys",
        "type": "bytes"
    }, {"name": "concatenatedResourceDecryptionKeyLengths", "type": "uint256[]"}],
    "name": "acceptProposal",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "getTokenTransferCount",
    "outputs": [{"name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {"inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor"}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "name": "owner", "type": "address"}, {
        "indexed": true,
        "name": "spender",
        "type": "address"
    }, {"indexed": false, "name": "value", "type": "uint256"}],
    "name": "Approval",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "name": "from", "type": "address"}, {
        "indexed": true,
        "name": "to",
        "type": "address"
    }, {"indexed": false, "name": "value", "type": "uint256"}],
    "name": "Transfer",
    "type": "event"
}];

var FysicalAccessor = function
    (jsonRpcEndpoint,
     fysicalContractEthereumAddress,
     userEthereumAddress,
     userEthereumAddressPrivateKey,
     gasPriceInGwei,
     enableLogging) {

    var web3 = new Web3(jsonRpcEndpoint);

    var log = function (s) {
            if (enableLogging) {
                console.log(s);
            }
        },
        handleErrorCondition = function (error) {
            throw new Error("FysicalAccessorError", error);
        },
        arraysEqual = function (arr1, arr2) {
            if (arr1.length !== arr2.length)
                return false;
            for (var i = arr1.length; i--;) {
                if (arr1[i] != arr2[i]) {
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
        };

    var privateKeyHex = new Buffer(userEthereumAddressPrivateKey, 'hex');

    var fysicalAccessor = {

        contract: new web3.eth.Contract(fysicalContractAbi, fysicalContractEthereumAddress),

        entity: {
            URI: "Uri",
            URI_SET: "UriSet",
            RESOURCE: "Resource",
            RESOURCE_SET: "ResourceSet",
            AGREEMENT: "Agreement",
            AGREEMENT_SET: "AgreementSet",
            TOKEN_TRANSFER: "TokenTransfer",
            TOKEN_TRANSFER_SET: "TokenTransferSet",
            CHECKSUM: "Checksum",
            CHECKSUM_PAIR: "ChecksumPair",
            CHECKSUM_ALGORITHM: "ChecksumAlgorithm",
            ENCRYPTION_ALGORITHM: "EncryptionAlgorithm",
            PUBLIC_KEY: "PublicKey",
            PROPOSAL: "Proposal"
        },

        executeFysicalTransaction: function (fysicalMethod, callback) {

            web3.eth.getTransactionCount(userEthereumAddress, function (error, publicAddressTxCount) {
                if (error) {
                    handleErrorCondition(error);
                } else {
                    var rawTx = {
                        nonce: publicAddressTxCount,
                        gasPrice: gasPriceInGwei * 1000000000,
                        gasLimit: 4000000,
                        to: fysicalContractEthereumAddress,
                        value: 0,
                        data: fysicalMethod.encodeABI()
                    };

                    var tx = new Tx(rawTx);
                    tx.sign(privateKeyHex);
                    var serializedTx = tx.serialize();
                    var serializedTxHex = '0x' + serializedTx.toString('hex');

                    web3.eth.sendSignedTransaction(serializedTxHex, callback);
                }
            });

        },
        getFromFysical: function (fysicalMethod, callback) {
            fysicalMethod.call({}, callback);
        },
        createUri: function (uri, callback) {
            log("creating uri: " + uri);
            fysicalAccessor.executeFysicalTransaction(fysicalAccessor.contract.methods.createUri(uri), callback);
        },
        getUriById: function (id, callback) {
            log("getting uriById: " + id);
            fysicalAccessor.getFromFysical(fysicalAccessor.contract.methods.getUriById(id), callback);
        },
        getIdByUri: function (uri, callback) {
            log("getting idByUri: " + uri);
            fysicalAccessor.getFromFysical(fysicalAccessor.contract.methods.getUriCount(), function (error, uriCount) {
                if (error) {
                    handleErrorCondition(error);
                } else {
                    if (uriCount === '0') {
                        log("no uris exist");
                        callback(null, null);
                    } else {
                        var getById = function (id) {
                            fysicalAccessor.getUriById(id, function (error, uriById) {
                                if (uriById === uri) {
                                    callback(null, id);
                                } else {
                                    if (++id < uriCount) {
                                        getById(id);
                                    } else {
                                        callback(null, null);
                                    }
                                }
                            });
                        };
                        getById(0);
                    }
                }
            });
        },
        createUriSet: function (uriSetSortedAscending, callback) {
            log("creating uriSet: " + uriSetSortedAscending);
            fysicalAccessor.executeFysicalTransaction(fysicalAccessor.contract.methods.createUriSet(uriSetSortedAscending), callback);
        },
        getUriSetById: function (id, callback) {
            log("getting uriSetById: " + id);
            fysicalAccessor.getFromFysical(fysicalAccessor.contract.methods.getUriSetById(id), callback);
        },
        getIdByUriSet: function (uriSetSortedAscending, callback) {
            log("getting idByUriSet: " + uriSetSortedAscending);
            fysicalAccessor.getFromFysical(fysicalAccessor.contract.methods.getUriSetCount(), function (error, uriSetCount) {
                if (error) {
                    handleErrorCondition(error);
                } else {
                    if (uriSetCount === '0') {
                        log("no uri sets exist");
                        callback(null, null);
                    } else {
                        var getById = function (id) {
                            fysicalAccessor.getUriSetById(id, function (error, uriSetById) {
                                if (arraysEqual(uriSetById, uriSetSortedAscending)) {
                                    callback(null, id);
                                } else {
                                    if (++id < uriSetCount) {
                                        getById(id);
                                    } else {
                                        callback(null, null);
                                    }
                                }
                            });
                        };
                        getById(0);
                    }
                }
            });
        },
        createEncryptionAlgorithm: function (uriSetId, callback) {
            log("creating encryptionAlgorithm: " + uriSetId);
            fysicalAccessor.executeFysicalTransaction(fysicalAccessor.contract.methods.createEncryptionAlgorithm(uriSetId), callback);
        },
        getEncryptionAlgorithmById: function (id, callback) {
            fysicalAccessor.getFromFysical(fysicalAccessor.contract.methods.getEncryptionAlgorithmById(id), callback);
        },
        getIdByEncryptionAlgorithm: function (uriSetId, callback) {
            log("getting encryptionAlgorithmIdByUriSetId: " + uriSetId);
            fysicalAccessor.getFromFysical(fysicalAccessor.contract.methods.getEncryptionAlgorithmCount(), function (error, encryptionAlgorithmCount) {
                if (error) {
                    handleErrorCondition(error);
                } else {
                    if (encryptionAlgorithmCount === '0') {
                        log("no encryption algorithms exist");
                        callback(null, null);
                    } else {
                        var getById = function (id) {
                            fysicalAccessor.getEncryptionAlgorithmById(id, function (error, encryptionAlgorithmUriSetById) {
                                if (encryptionAlgorithmUriSetById == uriSetId) {
                                    callback(null, id);
                                } else {
                                    if (++id < encryptionAlgorithmCount) {
                                        getById(id);
                                    } else {
                                        callback(null, null);
                                    }
                                }
                            });
                        };
                        getById(0);
                    }
                }
            });
        },
        createResource: function (uriSetId, encryptionAlgorithmId, metaResourceSetId, callback) {
            log("creating resource: " + uriSetId + " " + encryptionAlgorithmId + " " + metaResourceSetId);
            fysicalAccessor.executeFysicalTransaction(fysicalAccessor.contract.methods.createResource(uriSetId, encryptionAlgorithmId, metaResourceSetId), callback);
        },
        getResourceById: function (id, callback) {
            log("getting resourceById " + id);
            fysicalAccessor.getFromFysical(fysicalAccessor.contract.methods.getResourceById(id), callback);
        },
        getIdByResource: function (uriSetId, encryptionAlgorithmId, metaResourceSetId, callback) {
            log("getting idByResource: " + uriSetId + " " + encryptionAlgorithmId + " " + metaResourceSetId);
            fysicalAccessor.getFromFysical(fysicalAccessor.contract.methods.getResourceCount(), function (error, resourceCount) {
                if (error) {
                    handleErrorCondition(error);
                } else {
                    if (resourceCount === '0') {
                        log("no resources exist");
                        callback(null, null);
                    } else {
                        var getById = function (id) {
                            fysicalAccessor.getResourceById(id, function (error, resourceById) {
                                if (error) {
                                    handleErrorCondition(error);
                                } else {
                                    if (
                                        resourceById['0'] == uriSetId
                                        &&
                                        resourceById['1'] == encryptionAlgorithmId
                                        &&
                                        resourceById['2'] == metaResourceSetId
                                    ) {
                                        callback(null, id);
                                    } else {
                                        if (++id < resourceCount) {
                                            getById(id);
                                        } else {
                                            callback(null, null);
                                        }
                                    }
                                }
                            });
                        };
                        getById(0);
                    }
                }
            });
        },
        createResourceSet: function (creatorPublicKeyId, proposalEncryptionAlgorithmId, uniqueResourceIdsSortedAscending, metaResourceSetId, callback) {
            log("creating resourceSet" + creatorPublicKeyId + " " + proposalEncryptionAlgorithmId + " " + uniqueResourceIdsSortedAscending + " " + metaResourceSetId);
            fysicalAccessor.executeFysicalTransaction(fysicalAccessor.contract.methods.createResourceSet(
                creatorPublicKeyId,
                proposalEncryptionAlgorithmId,
                uniqueResourceIdsSortedAscending,
                metaResourceSetId
                ),
                callback
            );
        },
        getResourceSetById: function (id, callback) {
            log("getting resourceSetById " + id);
            fysicalAccessor.getFromFysical(fysicalAccessor.contract.methods.getResourceSetById(id), callback);
        },
        getIdByResourceSet: function (creatorPublicKeyId, proposalEncryptionAlgorithmId, uniqueResourceIdsSortedAscending, metaResourceSetId, callback) {
            log("getting idByResourceSet: " + creatorPublicKeyId + " " + proposalEncryptionAlgorithmId + " " + uniqueResourceIdsSortedAscending + " " + metaResourceSetId);
            fysicalAccessor.getFromFysical(fysicalAccessor.contract.methods.getResourceSetCount(), function (error, resourceSetCount) {
                if (error) {
                    handleErrorCondition(error);
                } else {
                    if (resourceSetCount === '0') {
                        log("no resource sets exist");
                        callback(null, null);
                    } else {
                        var getById = function (id) {
                            fysicalAccessor.getResourceSetById(id, function (error, resourceSetById) {
                                if (error) {
                                    handleErrorCondition(error);
                                } else {
                                    // resourceSetById['0'] == case sensitive ethereum public address that created this resourceSet;
                                    if (
                                        resourceSetById['1'] == creatorPublicKeyId
                                        &&
                                        resourceSetById['2'] == proposalEncryptionAlgorithmId
                                        &&
                                        arraysEqual(resourceSetById['3'], uniqueResourceIdsSortedAscending)
                                        &&
                                        resourceSetById['4'] == metaResourceSetId
                                    ) {
                                        callback(null, id);
                                    } else {
                                        if (++id < resourceSetCount) {
                                            getById(id);
                                        } else {
                                            callback(null, null);
                                        }
                                    }
                                }
                            });
                        };
                        getById(0);
                    }
                }
            });
        },
        createPublicKey: function (publicKeyBytes, callback) {
            log("creating publicKey");
            fysicalAccessor.executeFysicalTransaction(fysicalAccessor.contract.methods.createPublicKey(publicKeyBytes), callback);
        },
        getPublicKeyById: function (id, callback) {
            log("getting publicKeyById " + id);
            fysicalAccessor.getFromFysical(fysicalAccessor.contract.methods.getPublicKeyById(id), callback);
        },
        getIdByPublicKey: function (publicKeyBytes, callback) {
            log("getting idByPublicKey " + publicKeyBytes);
            fysicalAccessor.getFromFysical(fysicalAccessor.contract.methods.getPublicKeyCount(), function (error, publicKeyCount) {
                if (error) {
                    handleErrorCondition(error);
                } else {
                    if (publicKeyCount === '0') {
                        log("no public keys exist");
                        callback(null, null);
                    } else {
                        var getById = function (id) {
                            fysicalAccessor.getPublicKeyById(id, function (error, publicKeyBytesById) {
                                if (publicKeyBytesById === publicKeyBytes) {
                                    callback(null, id);
                                } else {
                                    if (++id < publicKeyCount) {
                                        getById(id);
                                    } else {
                                        callback(null, null);
                                    }
                                }
                            });
                        };
                        getById(0);
                    }
                }
            });
        },
        createProposal: function (minimumBlockNumberForWithdrawal, creatorPublicKeyId, acceptanceEncryptionAlgorithmId, resourceSetId, agreementSetId, tokenTransferSetId, callback) {
            log("creating proposal");
            fysicalAccessor.executeFysicalTransaction(fysicalAccessor.contract.methods.createProposal(
                minimumBlockNumberForWithdrawal,
                creatorPublicKeyId,
                acceptanceEncryptionAlgorithmId,
                resourceSetId,
                agreementSetId,
                tokenTransferSetId
                ),
                callback
            );
        },
        getProposalById: function (id, callback) {
            log("getting proposal by id " + id);
            fysicalAccessor.getFromFysical(fysicalAccessor.contract.methods.getProposalById(id), callback);
        },
        getIdByProposal: function (minimumBlockNumberForWithdrawal, creatorPublicKeyId, acceptanceEncryptionAlgorithmId, resourceSetId, agreementSetId, tokenTransferSetId, callback) {
            fysicalAccessor.getFromFysical(fysicalAccessor.contract.methods.getProposalCount(), function (error, proposalCount) {
                if (error) {
                    handleErrorCondition(error);
                } else {
                    if (proposalCount === '0') {
                        log("no proposals exist");
                        callback(null, null);
                    } else {
                        var getById = function (id) {
                            fysicalAccessor.getProposalById(id, function (error, proposalById) {
                                if (error) {
                                    handleErrorCondition(error);
                                } else {
                                    if (
                                        minimumBlockNumberForWithdrawal == proposalById[0]
                                        &&
                                        userEthereumAddress.toLowerCase() == proposalById[1].toLowerCase()
                                        &&
                                        creatorPublicKeyId == proposalById[2]
                                        &&
                                        acceptanceEncryptionAlgorithmId == proposalById[3]
                                        &&
                                        resourceSetId == proposalById[4]
                                        &&
                                        agreementSetId == proposalById[5]
                                        &&
                                        tokenTransferSetId == proposalById[6]
                                    ) {
                                        callback(null, id);
                                    } else {
                                        if (--id >= 0) {
                                            getById(id);
                                        } else {
                                            callback(null, null);
                                        }
                                    }
                                }
                            });
                        };
                        getById(proposalCount - 1);
                    }
                }
            });
        },
        acceptProposal: function (proposalId, concatenatedResourceDecryptionKeyBytes, concatenatedResourceDecryptionKeyLengthsArray, callback) {
            fysicalAccessor.executeFysicalTransaction(fysicalAccessor.contract.methods.acceptProposal(proposalId, concatenatedResourceDecryptionKeyBytes, concatenatedResourceDecryptionKeyLengthsArray), callback);
        },
        createAgreement: function (uriSetId, checksumPairId, callback) {
            log("creating agreement " + uriSetId + " " + checksumPairId);
            fysicalAccessor.executeFysicalTransaction(fysicalAccessor.contract.methods.createAgreement(uriSetId, checksumPairId), callback);
        },
        getAgreementById: function (id, callback) {
            fysicalAccessor.getFromFysical(fysicalAccessor.contract.methods.getAgreementById(id), callback);
        },
        getIdByAgreement: function (uriSetId, checksumPairId, callback) {
            log("getting id by agreement " + uriSetId + " " + checksumPairId);
            fysicalAccessor.getFromFysical(fysicalAccessor.contract.methods.getAgreementCount(), function (error, agreementCount) {
                if (error) {
                    handleErrorCondition(error);
                } else {
                    if (agreementCount === '0') {
                        log("no agreements exist");
                        callback(null, null);
                    } else {
                        var getById = function (id) {
                            fysicalAccessor.getAgreementById(id, function (error, agreementById) {
                                if (error) {
                                    handleErrorCondition(error);
                                } else {
                                    if (
                                        agreementById[0] == uriSetId
                                        &&
                                        agreementById[1] == checksumPairId
                                    ) {
                                        callback(null, id);
                                    } else {
                                        if (++id < agreementCount) {
                                            getById(id);
                                        } else {
                                            callback(null, null);
                                        }
                                    }
                                }
                            });
                        };
                        getById(0);
                    }
                }
            });
        },
        createAgreementSet: function (uniqueAgreementIdsSortedAscending, callback) {
            log("creating agreement set " + uniqueAgreementIdsSortedAscending);
            fysicalAccessor.executeFysicalTransaction(fysicalAccessor.contract.methods.createAgreementSet(uniqueAgreementIdsSortedAscending), callback);
        },
        getAgreementSetById: function (id, callback) {
            log("getting agreement set by id " + id);
            fysicalAccessor.getFromFysical(fysicalAccessor.contract.methods.getAgreementSetById(id), callback);
        },
        getIdByAgreementSet: function (uniqueAgreementIdsSortedAscending, callback) {
            log("getting id by agreement set " + uniqueAgreementIdsSortedAscending);
            fysicalAccessor.getFromFysical(fysicalAccessor.contract.methods.getAgreementSetCount(), function (error, agreementSetCount) {
                if (error) {
                    handleErrorCondition(error);
                } else {
                    if (agreementSetCount === '0') {
                        log("no agreement sets exist");
                        callback(null, null);
                    } else {
                        var getById = function (id) {
                            fysicalAccessor.getAgreementSetById(id, function (error, agreementSetById) {
                                if (error) {
                                    handleErrorCondition(error);
                                } else {
                                    if (arraysEqual(agreementSetById, uniqueAgreementIdsSortedAscending)) {
                                        callback(null, id);
                                    } else {
                                        if (++id < agreementSetCount) {
                                            getById(id);
                                        } else {
                                            callback(null, null);
                                        }
                                    }
                                }
                            });
                        };
                        getById(0);
                    }
                }
            });
        },
        createTokenTransferSet: function (uniqueTokenTransferIdsSortedAscending, callback) {
            log("creating token transfer set");
            fysicalAccessor.executeFysicalTransaction(fysicalAccessor.contract.methods.createTokenTransferSet(uniqueTokenTransferIdsSortedAscending), callback);
        },
        getTokenTransferSetById: function (id, callback) {
            log("getting token transfer set by id " + id);
            fysicalAccessor.getFromFysical(fysicalAccessor.contract.methods.getTokenTransferSetById(id), callback);
        },
        getIdByTokenTransferSet: function (uniqueTokenTransferIdsSortedAscending, callback) {
            log("getting id by token transfer set " + uniqueTokenTransferIdsSortedAscending);
            fysicalAccessor.getFromFysical(fysicalAccessor.contract.methods.getTokenTransferSetCount(), function (error, tokenTransferSetCount) {
                if (error) {
                    handleErrorCondition(error);
                } else {
                    if (tokenTransferSetCount === '0') {
                        log("no token transfer sets exist");
                        callback(null, null);
                    } else {
                        var getById = function (id) {
                            fysicalAccessor.getTokenTransferSetById(id, function (error, tokenTransferSetById) {
                                if (error) {
                                    handleErrorCondition(error);
                                } else {
                                    if (arraysEqual(tokenTransferSetById, uniqueTokenTransferIdsSortedAscending)) {
                                        callback(null, id);
                                    } else {
                                        if (++id < tokenTransferSetCount) {
                                            getById(id);
                                        } else {
                                            callback(null, null);
                                        }
                                    }
                                }
                            });
                        };
                        getById(0);
                    }
                }
            });
        },
        createTokenTransfer: function (sourceAddress, destinationAddress, numberOfFysicalTokensWithoutADecimalPlace, callback) {
            log("creating token transfer" + sourceAddress + " " + destinationAddress + " " + numberOfFysicalTokensWithoutADecimalPlace);
            fysicalAccessor.executeFysicalTransaction(fysicalAccessor.contract.methods.createTokenTransfer(sourceAddress, destinationAddress, numberOfFysicalTokensWithoutADecimalPlace), callback);
        },
        getTokenTransferById: function (id, callback) {
            log("getting token transfer by id " + id);
            fysicalAccessor.getFromFysical(fysicalAccessor.contract.methods.getTokenTransferById(id), callback);
        },
        getIdByTokenTransfer: function (sourceAddress, destinationAddress, numberOfFysicalTokensWithoutADecimalPlace, callback) {
            log("getting id by token transfer" + sourceAddress + " " + destinationAddress + " " + numberOfFysicalTokensWithoutADecimalPlace);
            fysicalAccessor.getFromFysical(fysicalAccessor.contract.methods.getTokenTransferCount(), function (error, tokenTransferCount) {
                if (error) {
                    handleErrorCondition(error);
                } else {
                    if (tokenTransferCount === '0') {
                        log('no token transfers exist');
                        callback(null, null);
                    } else {
                        var getById = function (id) {
                            fysicalAccessor.getTokenTransferById(id, function (error, tokenTransferById) {
                                if (error) {
                                    handleErrorCondition(error)
                                } else {
                                    if (
                                        sourceAddress.toLowerCase() == tokenTransferById[0].toLowerCase()
                                        &&
                                        destinationAddress.toLowerCase() == tokenTransferById[1].toLowerCase()
                                        &&
                                        numberOfFysicalTokensWithoutADecimalPlace == tokenTransferById[2]
                                    ) {
                                        callback(null, id);
                                    } else {
                                        if (--id >= 0) {
                                            getById(id);
                                        } else {
                                            callback(null, null);
                                        }
                                    }
                                }
                            });
                        };
                        getById(tokenTransferCount - 1);
                    }
                }
            });
        },
        createChecksumAlgorithm: function (descriptionUriSetId, callback) {
            log("createChecksumAlgorithm " + descriptionUriSetId);
            fysicalAccessor.executeFysicalTransaction(fysicalAccessor.contract.methods.createChecksumAlgorithm(descriptionUriSetId), callback);
        },
        getChecksumAlgorithmById: function (id, callback) {
            log("getChecksumAlgorithmById " + id);
            fysicalAccessor.getFromFysical(fysicalAccessor.contract.methods.getChecksumAlgorithmById(id), callback);
        },
        getIdByChecksumAlgorithm: function (descriptionUriSetId, callback) {
            log("getIdByChecksumAlgorithm " + descriptionUriSetId);
            fysicalAccessor.getFromFysical(fysicalAccessor.contract.methods.getChecksumAlgorithmCount(), function (error, checksumAlgorithmCount) {
                if (error) {
                    handleErrorCondition(error);
                } else {
                    if (checksumAlgorithmCount === '0') {
                        log("no checksum algorithms exist");
                        callback(null, null);
                    } else {
                        var getById = function (id) {
                            fysicalAccessor.getChecksumAlgorithmById(id, function (error, checksumAlgorithmById) {
                                if (error) {
                                    handleErrorCondition(error)
                                } else {
                                    if (
                                        checksumAlgorithmById[0] == descriptionUriSetId
                                    ) {
                                        callback(null, id);
                                    } else {
                                        if (++id < checksumAlgorithmCount) {
                                            getById(id);
                                        } else {
                                            callback(null, null);
                                        }
                                    }
                                }
                            });
                        };
                        getById(0);
                    }
                }
            });
        },
        createChecksum: function (checksumAlgorithmId, resourceByteCount, valueInBytes, callback) {
            log("createChecksum " + checksumAlgorithmId + " " + resourceByteCount + " " + valueInBytes);
            fysicalAccessor.executeFysicalTransaction(fysicalAccessor.contract.methods.createChecksum(checksumAlgorithmId, resourceByteCount, valueInBytes), callback);
        },
        getChecksumById: function (id, callback) {
            log("getChecksumById " + id);
            fysicalAccessor.getFromFysical(fysicalAccessor.contract.methods.getChecksumById(id), callback);
        },
        getIdByChecksum: function (checksumAlgorithmId, resourceByteCount, valueInBytes, callback) {
            log("getIdByChecksum " + checksumAlgorithmId + " " + resourceByteCount + " " + valueInBytes);
            fysicalAccessor.getFromFysical(fysicalAccessor.contract.methods.getChecksumCount(), function (error, checksumCount) {
                if (error) {
                    handleErrorCondition(error);
                } else {
                    if (checksumCount === '0') {
                        log("no checksums exist");
                        callback(null, null);
                    } else {
                        var getById = function (id) {
                            fysicalAccessor.getChecksumById(id, function (error, checksumById) {
                                if (error) {
                                    handleErrorCondition(error)
                                } else {
                                    if (
                                        checksumById[0] == checksumAlgorithmId
                                        &&
                                        checksumById[1] == resourceByteCount
                                        &&
                                        checksumById[2] == valueInBytes
                                    ) {
                                        callback(null, id);
                                    } else {
                                        if (++id < checksumCount) {
                                            getById(id);
                                        } else {
                                            callback(null, null);
                                        }
                                    }
                                }
                            });
                        };
                        getById(0);
                    }
                }
            });
        },
        createChecksumPair: function (encryptedChecksumId, decryptedChecksumId, callback) {
            log("createChecksumPair " + " " + encryptedChecksumId + " " + decryptedChecksumId);
            fysicalAccessor.executeFysicalTransaction(fysicalAccessor.contract.methods.createChecksumPair(encryptedChecksumId, decryptedChecksumId), callback);
        },
        getChecksumPairById: function (id, callback) {
            log("getChecksumPairById " + id);
            fysicalAccessor.getFromFysical(fysicalAccessor.contract.methods.getChecksumPairById(id), callback);
        },
        getIdByChecksumPair: function (encryptedChecksumId, decryptedChecksumId, callback) {
            log("getIdByChecksumPair " + " " + encryptedChecksumId + " " + decryptedChecksumId);
            fysicalAccessor.getFromFysical(fysicalAccessor.contract.methods.getChecksumPairCount(), function (error, checksumPairCount) {
                if (error) {
                    handleErrorCondition(error);
                } else {
                    if (checksumPairCount === '0') {
                        log('no checksum pairs exist');
                        callback(null, null);
                    } else {
                        var getById = function (id) {
                            fysicalAccessor.getChecksumPairById(id, function (error, checksumPairById) {
                                if (error) {
                                    handleErrorCondition(error)
                                } else {
                                    if (
                                        checksumPairById[0] == encryptedChecksumId
                                        &&
                                        checksumPairById[1] == decryptedChecksumId
                                    ) {
                                        callback(null, id);
                                    } else {
                                        if (++id < checksumPairCount) {
                                            getById(id);
                                        } else {
                                            callback(null, null);
                                        }
                                    }
                                }
                            });
                        };
                        getById(0);
                    }
                }
            });
        },
        getEmptyResourceSetId: function (callback) {
            fysicalAccessor.getFromFysical(fysicalAccessor.contract.methods.EMPTY_RESOURCE_SET_ID(), callback);
        },
        getEmptyPublicKeyId: function (callback) {
            fysicalAccessor.getFromFysical(fysicalAccessor.contract.methods.EMPTY_PUBLIC_KEY_ID(), callback);
        },
        getTransactionDetails: function (txHash, callback) {
            log("getting tx details " + txHash);
            web3.eth.getTransaction(txHash, callback);
        },
        getEntityMap: function (entity, callback) {
            var map = {};
            fysicalAccessor.contract.methods["get" + entity + "Count"]().call({}, function (error, count) {
                if (error) {
                    handleErrorCondition(error);
                } else {
                    if (count === '0') {
                        callback(null, map);
                    } else {
                        var getById = function (id) {
                            fysicalAccessor.contract.methods["get" + entity + "ById"](id).call({}, function (error, result) {
                                if (error) {
                                    handleErrorCondition(error);
                                } else {
                                    log(id+" "+result);
                                    map[id] = result;
                                    if (++id < count) {
                                        getById(id);
                                    } else {
                                        callback(null, map);
                                    }
                                }
                            })
                        };
                        getById(0);
                    }
                }
            });
        },
        getOrCreateFysicalEntityAndCallbackWithId: function (entity, methodArgumentArray, callback) {
            var getMethod = fysicalAccessor["getIdBy" + entity];
            var createMethod = fysicalAccessor["create" + entity];
            var handleGetMethodAttempt = function (error, identifier) {
                if (error) {
                    handleErrorCondition(error);
                } else {
                    if (identifier !== null) {
                        callback(null, identifier);
                    } else {
                        var handleCreateMethodAttempt = function (error, createMethodTxHash) {
                            if (error) {
                                handleErrorCondition(error);
                            } else {
                                var getTransactionDetails = function () {
                                    fysicalAccessor.getTransactionDetails(
                                        createMethodTxHash,
                                        function (error, response) {
                                            if (error) {
                                                handleErrorCondition(error);
                                            } else {
                                                if (response.blockNumber) {
                                                    clearInterval(getTransactionDetailsInterval);
                                                    var getMethodArguments = cloneArray(methodArgumentArray);
                                                    getMethodArguments.push(callback);
                                                    getMethod.apply(null, getMethodArguments);
                                                } else {
                                                    log("awaiting transaction to be mined");
                                                }
                                            }
                                        }
                                    );
                                };
                                var getTransactionDetailsInterval = setInterval(getTransactionDetails, 5000);
                            }
                        };
                        var createMethodArguments = cloneArray(methodArgumentArray);
                        createMethodArguments.push(handleCreateMethodAttempt);
                        createMethod.apply(null, createMethodArguments);
                    }
                }
            };
            var getMethodArguments = cloneArray(methodArgumentArray);
            getMethodArguments.push(handleGetMethodAttempt);
            getMethod.apply(null, getMethodArguments);
        },
        stringToHex: function (s) {
            return web3.utils.stringToHex(s);
        },
        hexToString: function (h) {
            return web3.utils.hexToString(h);
        }
    };

    return fysicalAccessor;
};

module.exports = FysicalAccessor;