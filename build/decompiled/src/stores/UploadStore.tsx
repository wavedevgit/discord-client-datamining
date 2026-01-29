// stores/UploadStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var3
        _fun54533: for (var _fun54533_ip = 0;;) switch (_fun54533_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 70: // try_end0
                _fun54533_ip = 74;
                continue _fun54533;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot14 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot14 = var0;
    var0 = function(arg0, arg1) { // Original name: storeLocalUriForUpload, environment: var3
        _fun54536: for (var _fun54536_ip = 0;;) switch (_fun54536_ip) {
            case 0:
                var0 = arg1;
                var _closure2_slot0 = var0;
                var3 = _closure1_slot13;
                var6 = var0.items;
                var1 = null;
                var5 = var1 == var6;
                var0 = undefined;
                var2 = undefined;
                if (var5) {
                    _fun54536_ip = 50;
                    continue _fun54536
                }
            case 35:
                var5 = var6.map;
                var4 = function(arg0) { // Environment: var4
                    _fun54537: for (var _fun54537_ip = 0;;) switch (_fun54537_ip) {
                        case 0:
                            var2 = arg0;
                            var1 = var2.item;
                            var5 = _closure1_slot6;
                            var4 = var5.test;
                            var3 = var1.originalUri;
                            var3 = var4.bind(var5)(var3);
                            if (var3) {
                                _fun54537_ip = 61;
                                continue _fun54537
                            }
                        case 34:
                            var4 = _closure1_slot7;
                            var3 = var4.test;
                            var0 = var1.originalUri;
                            var0 = var3.bind(var4)(var0);
                            if (var0) {
                                _fun54537_ip = 61;
                                continue _fun54537
                            }
                        case 57:
                            var0 = undefined;
                            return var0;
                        case 61:
                            var0 = {};
                            var6 = var1.width;
                            var3 = null;
                            var7 = var3 != var6;
                            var5 = 0;
                            if (!var7) {
                                _fun54537_ip = 82;
                                continue _fun54537
                            }
                        case 79:
                            var5 = var6;
                        case 82:
                            var0.width = var5;
                            var5 = var1.height;
                            var6 = var3 != var5;
                            var4 = 0;
                            if (!var6) {
                                _fun54537_ip = 103;
                                continue _fun54537
                            }
                        case 100:
                            var4 = var5;
                        case 103:
                            var0.height = var4;
                            var5 = var1.originalUri;
                            var6 = var3 != var5;
                            var1 = '';
                            var4 = var1;
                            if (!var6) {
                                _fun54537_ip = 130;
                                continue _fun54537
                            }
                        case 127:
                            var4 = var5;
                        case 130:
                            var0.localUri = var4;
                            var4 = _closure2_slot0;
                            var4 = var4.id;
                            var0.uploaderId = var4;
                            var2 = var2.id;
                            var3 = var3 != var2;
                            if (!var3) {
                                _fun54537_ip = 167;
                                continue _fun54537
                            }
                        case 164:
                            var1 = var2;
                        case 167:
                            var0.uploaderItemId = var1;
                            return var0;
                    }
                };
                var2 = var5.bind(var6)(var4);
            case 50:
                if (!(var1 == var2)) {
                    _fun54536_ip = 58;
                    continue _fun54536
                }
            case 54:
                var2 = new Array(0);
            case 58:
                var1 = arg0;
                var3[var1] = var2;
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var0 = function() { // Original name: clearLocalUriForUpload, environment: var3
        var0 = {};
        _closure1_slot13 = var0;
        var0 = undefined;
        return var0;
    };
    var _closure1_slot16 = var0;
    var0 = function(arg0, arg1) { // Original name: clearFile, environment: var3
        _fun54539: for (var _fun54539_ip = 0;;) switch (_fun54539_ip) {
            case 0:
                var3 = arg0;
                var5 = arg1;
                var _closure2_slot0 = var5;
                var0 = _closure1_slot9;
                var2 = var0[var3];
                var0 = null;
                var0 = var0 != var2;
                if (!var0) {
                    _fun54539_ip = 93;
                    continue _fun54539
                }
            case 32:
                var6 = _closure1_slot9;
                var7 = var2.filter;
                var4 = function(arg0) { // Environment: var4
                    var0 = arg0;
                    var1 = var0.id;
                    var0 = _closure2_slot0;
                    var0 = var1 !== var0;
                    return var0;
                };
                var4 = var7.bind(var2)(var4);
                var6[var3] = var4;
                var4 = _closure1_slot10;
                var4 = delete var4[var5];
                var4 = _closure1_slot11;
                var4 = delete var4[var5];
                var2 = var2.length;
                var1 = _closure1_slot9;
                var1 = var1[var3];
                var1 = var1.length;
                var0 = var2 !== var1;
            case 93:
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var0 = function(arg0, arg1) { // Original name: updateFile, environment: var3
        _fun54541: for (var _fun54541_ip = 0;;) switch (_fun54541_ip) {
            case 0:
                var4 = arg0;
                var3 = arg1;
                var _closure2_slot0 = var3;
                var1 = _closure1_slot9;
                var7 = var1[var4];
                var2 = null;
                if (!(var2 != var7)) {
                    _fun54541_ip = 141;
                    continue _fun54541
                }
            case 29:
                var1 = _closure1_slot9;
                var6 = var7.map;
                var0 = function(arg0) { // Environment: var0
                    _fun54542: for (var _fun54542_ip = 0;;) switch (_fun54542_ip) {
                        case 0:
                            var3 = arg0;
                            var4 = var3.id;
                            var0 = _closure2_slot0;
                            var1 = var0.id;
                            var0 = var3;
                            if (!(var4 === var1)) {
                                _fun54542_ip = 53;
                                continue _fun54542
                            }
                        case 27:
                            var1 = {};
                            var6 = var1;
                            var5 = var3;
                            var3 = copyDataProperties(var6, var5);
                            var5 = _closure2_slot0;
                            var6 = var1;
                            var2 = copyDataProperties(var6, var5);
                            var0 = var1;
                        case 53:
                            return var0;
                    }
                };
                var0 = var6.bind(var7)(var0);
                var1[var4] = var0;
                var1 = _closure1_slot11;
                var0 = var3.id;
                var4 = var1[var0];
                var0 = var2 != var4;
                if (!var0) {
                    _fun54541_ip = 89;
                    continue _fun54541
                }
            case 72:
                var6 = _closure1_slot12;
                var1 = var4.id;
                var1 = var6[var1];
                var0 = var2 != var1;
            case 89:
                if (!var0) {
                    _fun54541_ip = 137;
                    continue _fun54541
                }
            case 92:
                var2 = _closure1_slot12;
                var1 = var4.id;
                var0 = {};
                var5 = _closure1_slot12;
                var4 = var4.id;
                var8 = var5[var4];
                var9 = var0;
                var4 = copyDataProperties(var9, var8);
                var9 = var0;
                var8 = var3;
                var3 = copyDataProperties(var9, var8);
                var2[var1] = var0;
            case 137:
                var0 = undefined;
                return var0;
            case 141:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot18 = var0;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var6);
    var0 = 0;
    var6 = var4[var0];
    var0 = undefined;
    var6 = var5.bind(var0)(var6);
    var _closure1_slot0 = var6;
    var6 = 1;
    var6 = var4[var6];
    var6 = var5.bind(var0)(var6);
    var _closure1_slot1 = var6;
    var6 = 2;
    var6 = var4[var6];
    var6 = var5.bind(var0)(var6);
    var _closure1_slot2 = var6;
    var6 = 3;
    var6 = var4[var6];
    var6 = var5.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var6 = 4;
    var6 = var4[var6];
    var6 = var5.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var6 = 5;
    var6 = var4[var6];
    var6 = var5.bind(var0)(var6);
    var _closure1_slot5 = var6;
    var6 = /^(assets-library|ph|file):\\/\\ //;
    var _closure1_slot6 = var6;
    var6 = /^content:\\/\\ //;
    var _closure1_slot7 = var6;
    var7 = var1.Object;
    var6 = var7.freeze;
    var1 = new Array(0);
    var1 = var6.bind(var7)(var1);
    var _closure1_slot8 = var1;
    var1 = {};
    var _closure1_slot9 = var1;
    var1 = {};
    var _closure1_slot10 = var1;
    var1 = {};
    var _closure1_slot11 = var1;
    var1 = {};
    var _closure1_slot12 = var1;
    var1 = {};
    var _closure1_slot13 = var1;
    var1 = 6;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var6 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() { // Original name: UploadStore, environment: var5
            _fun54544: for (var _fun54544_ip = 0;;) switch (_fun54544_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot0;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot3;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot2;
                    var0 = _closure1_slot14;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun54544_ip = 69;
                        continue _fun54544
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun54544_ip = 105;
                    continue _fun54544;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot3;
                    var5 = var5.bind(var2)(var3);
                    var5 = var5.constructor;
                    var4 = arguments;
                    var0 = var6.bind(var7)(var8, var4, var5);
                case 105:
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot4;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot1;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function() { // Original name: value, environment: var5
            var2 = this;
            var1 = var2.waitFor;
            var0 = _closure1_slot5;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(5);
        var0[0] = var4;
        var4 = {};
        var6 = 'getFiles';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun54546: for (var _fun54546_ip = 0;;) switch (_fun54546_ip) {
                case 0:
                    var2 = _closure1_slot9;
                    var0 = arg0;
                    var0 = var2[var0];
                    var2 = null;
                    if (!(var2 == var0)) {
                        _fun54546_ip = 24;
                        continue _fun54546
                    }
                case 20:
                    var0 = _closure1_slot8;
                case 24:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getMessageForFile';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var1 = _closure1_slot11;
            var0 = arg0;
            var0 = var1[var0];
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getUploaderFileForMessageId';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var1 = _closure1_slot12;
            var0 = arg0;
            var0 = var1[var0];
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getUploadAttachments';
        var4.key = var6;
        var5 = function(arg0) { // Original name: value, environment: var5
            _fun54549: for (var _fun54549_ip = 0;;) switch (_fun54549_ip) {
                case 0:
                    var1 = arg0;
                    var0 = null;
                    if (!(var0 == var1)) {
                        _fun54549_ip = 13;
                        continue _fun54549
                    }
                case 9:
                    var0 = undefined;
                    return var0;
                case 13:
                    var0 = _closure1_slot13;
                    var0 = var0[var1];
                    return var0;
            }
        };
        var4.value = var5;
        var0[4] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var6 = var1.bind(var0)(var6);
    var1 = 'UploadStore';
    var6.displayName = var1;
    var1 = 7;
    var1 = var4[var1];
    var11 = var5.bind(var0)(var1);
    var1 = {};
    var7 = function() { // Original name: handleConnectionOpen, environment: var3
        var1 = _closure1_slot16;
        var0 = undefined;
        var1 = var1.bind(var0)();
        return var0;
    };
    var1.CONNECTION_OPEN = var7;
    var7 = function() { // Original name: handleLogout, environment: var3
        var1 = _closure1_slot16;
        var0 = undefined;
        var1 = var1.bind(var0)();
        return var0;
    };
    var1.LOGOUT = var7;
    var7 = function(arg0) { // Original name: handleUploadStart, environment: var3
        _fun54552: for (var _fun54552_ip = 0;;) switch (_fun54552_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.channelId;
                var3 = var0.file;
                var7 = var0.uploader;
                var0 = var0.message;
                var1 = var7._aborted;
                if (var1) {
                    _fun54552_ip = 207;
                    continue _fun54552
                }
            case 37:
                var1 = var7._errored;
                if (var1) {
                    _fun54552_ip = 207;
                    continue _fun54552
                }
            case 49:
                var2 = _closure1_slot9;
                var8 = var2[var6];
                var4 = null;
                if (!(var4 == var8)) {
                    _fun54552_ip = 70;
                    continue _fun54552
                }
            case 66:
                var8 = _closure1_slot8;
            case 70:
                var5 = _closure1_slot10;
                var2 = var3.id;
                var5[var2] = var7;
                var5 = _closure1_slot9;
                var2 = new Array(1);
                var9 = 0;
                var11 = var2;
                var10 = var8;
                var8 = arraySpread(var11, var10, var9);
                var2[var8] = var3;
                var7 = 1;
                var7 = var8 + var7;
                var5[var6] = var2;
                if (!(var4 != var0)) {
                    _fun54552_ip = 207;
                    continue _fun54552
                }
            case 123:
                var5 = _closure1_slot11;
                var2 = var3.id;
                var5[var2] = var0;
                var8 = var3.items;
                if (!(var4 != var8)) {
                    _fun54552_ip = 180;
                    continue _fun54552
                }
            case 146:
                var6 = _closure1_slot12;
                var5 = var0.id;
                var2 = {};
                var11 = var2;
                var10 = var3;
                var7 = copyDataProperties(var11, var10);
                var7 = 'items';
                var2[var7] = var8;
                var6[var5] = var2;
            case 180:
                var2 = _closure1_slot15;
                var1 = var0.nonce;
                if (!(var4 == var1)) {
                    _fun54552_ip = 199;
                    continue _fun54552
                }
            case 194:
                var1 = var0.id;
            case 199:
                var0 = undefined;
                var0 = var2.bind(var0)(var1, var3);
            case 207:
                var0 = undefined;
                return var0;
        }
    };
    var1.UPLOAD_START = var7;
    var7 = function(arg0) { // Original name: handleUploadCompressionProgress, environment: var3
        var0 = arg0;
        var3 = var0.channelId;
        var2 = var0.file;
        var1 = _closure1_slot18;
        var0 = undefined;
        var1 = var1.bind(var0)(var3, var2);
        return var0;
    };
    var1.UPLOAD_COMPRESSION_PROGRESS = var7;
    var7 = function(arg0) { // Original name: handleUploadProgress, environment: var3
        var0 = arg0;
        var3 = var0.channelId;
        var2 = var0.file;
        var1 = _closure1_slot18;
        var0 = undefined;
        var1 = var1.bind(var0)(var3, var2);
        return var0;
    };
    var1.UPLOAD_PROGRESS = var7;
    var7 = function(arg0) { // Original name: handleUploadComplete, environment: var3
        var0 = arg0;
        var3 = var0.channelId;
        var0 = var0.file;
        var2 = _closure1_slot17;
        var1 = var0.id;
        var0 = undefined;
        var0 = var2.bind(var0)(var3, var1);
        return var0;
    };
    var1.UPLOAD_COMPLETE = var7;
    var7 = function(arg0) { // Original name: handleUploadFail, environment: var3
        var0 = arg0;
        var3 = var0.channelId;
        var0 = var0.file;
        var2 = _closure1_slot17;
        var1 = var0.id;
        var0 = undefined;
        var0 = var2.bind(var0)(var3, var1);
        return var0;
    };
    var1.UPLOAD_FAIL = var7;
    var7 = function(arg0) { // Original name: handleUploadCancel, environment: var3
        _fun54557: for (var _fun54557_ip = 0;;) switch (_fun54557_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.file;
                var2 = _closure1_slot10;
                var0 = var0.id;
                var2 = var2[var0];
                var _closure2_slot0 = var2;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun54557_ip = 59;
                    continue _fun54557
                }
            case 37:
                var0 = global;
                var2 = var0.setImmediate;
                var0 = undefined;
                var1 = function() { // Environment: var1
                    _fun54558: for (var _fun54558_ip = 0;;) switch (_fun54558_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var2 = var0.cancel;
                            var0 = null;
                            var2 = var0 == var2;
                            var0 = undefined;
                            if (var2) {
                                _fun54558_ip = 38;
                                continue _fun54558
                            }
                        case 24:
                            var2 = _closure2_slot0;
                            var1 = var2.cancel;
                            var0 = var1.bind(var2)();
                        case 38:
                            return var0;
                    }
                };
                var1 = var2.bind(var0)(var1);
                return var0;
            case 59:
                var0 = false;
                return var0;
        }
    };
    var1.UPLOAD_CANCEL_REQUEST = var7;
    var7 = function(arg0) { // Original name: handleUploadItemCancel, environment: var3
        _fun54559: for (var _fun54559_ip = 0;;) switch (_fun54559_ip) {
            case 0:
                var2 = arg0;
                var0 = var2.file;
                var2 = var2.itemId;
                var _closure2_slot0 = var2;
                var2 = _closure1_slot10;
                var0 = var0.id;
                var2 = var2[var0];
                var _closure2_slot1 = var2;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun54559_ip = 69;
                    continue _fun54559
                }
            case 47:
                var0 = global;
                var2 = var0.setImmediate;
                var0 = undefined;
                var1 = function() { // Environment: var1
                    var2 = _closure2_slot1;
                    var1 = var2.cancelItem;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1 = var2.bind(var0)(var1);
                return var0;
            case 69:
                var0 = false;
                return var0;
        }
    };
    var1.UPLOAD_ITEM_CANCEL_REQUEST = var7;
    var7 = function(arg0) { // Original name: handleUploadFileUpdate, environment: var3
        _fun54561: for (var _fun54561_ip = 0;;) switch (_fun54561_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.channelId;
                var2 = var0.file;
                var4 = _closure1_slot11;
                var1 = var2.id;
                var1 = var4[var1];
                var6 = null;
                if (!(var6 != var1)) {
                    _fun54561_ip = 63;
                    continue _fun54561
                }
            case 36:
                var5 = _closure1_slot15;
                var4 = var1.nonce;
                if (!(var6 == var4)) {
                    _fun54561_ip = 55;
                    continue _fun54561
                }
            case 50:
                var4 = var1.id;
            case 55:
                var1 = undefined;
                var1 = var5.bind(var1)(var4, var2);
            case 63:
                var1 = _closure1_slot18;
                var0 = undefined;
                var1 = var1.bind(var0)(var3, var2);
                return var0;
        }
    };
    var1.UPLOAD_FILE_UPDATE = var7;
    var3 = function(arg0) { // Original name: restoreFailedUpload, environment: var3
        var0 = arg0;
        var2 = var0.file;
        var1 = var0.messageId;
        var0 = _closure1_slot12;
        var0[var1] = var2;
        var0 = undefined;
        return var0;
    };
    var1.UPLOAD_RESTORE_FAILED_UPLOAD = var3;
    var3 = var6.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var6
        }
    });
    var12 = var3;
    var10 = var1;
    var1 = new var12[var6](var11, var10, var9);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 8;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'stores/UploadStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 4207, 566, 806, 2]);