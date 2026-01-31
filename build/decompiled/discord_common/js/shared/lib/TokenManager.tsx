// ../discord_common/js/shared/lib/TokenManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun8629: for (var _fun8629_ip = 0;;) switch (_fun8629_ip) {
        case 0:
            var7 = require;
            var2 = exports;
            var8 = dependencyMap;
            var _closure1_slot0 = var7;
            var _closure1_slot1 = var8;
            var0 = function(arg0) { // Original name: fromEntries, environment: var3
                var3 = new Array(0);
                var5 = arg0;
                var4 = 0;
                var6 = var3;
                var0 = arraySpread(var6, var5, var4);
                var2 = var3.reduce;
                var1 = function(arg0, arg1) { // Environment: var0
                    _fun8631: for (var _fun8631_ip = 0;;) switch (_fun8631_ip) {
                        case 0:
                            var0 = arg0;
                            var5 = arg1;
                            var3 = var5[Symbol.iterator];
                            var5 = var3().next;
                            var1 = var5().value;
                            var2 = var3;
                            var7 = undefined;
                            var4 = var2 === var7;
                            var2 = undefined;
                            if (var4) {
                                _fun8631_ip = 30;
                                continue _fun8631
                            }
                        case 27:
                            var2 = var1;
                        case 30:
                            var1 = undefined;
                            if (var4) {
                                _fun8631_ip = 60;
                                continue _fun8631
                            }
                        case 35:
                            var6 = var5().value;
                            var5 = var3;
                            var5 = var5 === var7;
                            var1 = undefined;
                            var4 = var5;
                            if (var5) {
                                _fun8631_ip = 60;
                                continue _fun8631
                            }
                        case 54:
                            var1 = var6;
                            var4 = var5;
                        case 60:
                            if (var4) {
                                _fun8631_ip = 66;
                                continue _fun8631
                            }
                        case 63:
                            var3.return();
                        case 66:
                            var0[var2] = var1;
                            return var0;
                    }
                };
                var0 = {};
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var _closure1_slot13 = var0;
            var0 = function() { // Original name: storeTokens, environment: var3
                _fun8632: for (var _fun8632_ip = 0;;) switch (_fun8632_ip) {
                    case 0:
                        var1 = _closure1_slot11;
                        if (var1) {
                            _fun8632_ip = 164;
                            continue _fun8632
                        }
                    case 13:
                        var2 = _closure1_slot7;
                        var1 = null;
                        if (!(var1 == var2)) {
                            _fun8632_ip = 68;
                            continue _fun8632
                        }
                    case 23:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var1 = 1;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        var3 = var1.Storage;
                        var2 = var3.remove;
                        var1 = _closure1_slot3;
                        var1 = var2.bind(var3)(var1);
                        _fun8632_ip = 115;
                        continue _fun8632;
                    case 68:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var1 = 1;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        var4 = var1.Storage;
                        var3 = var4.set;
                        var2 = _closure1_slot3;
                        var1 = _closure1_slot7;
                        var1 = var3.bind(var4)(var2, var1);
                    case 115:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var1 = 1;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        var5 = var2.Storage;
                        var4 = var5.set;
                        var3 = _closure1_slot2;
                        var2 = _closure1_slot10;
                        var2 = var4.bind(var5)(var3, var2);
                        return var1;
                    case 164:
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot1;
                        var1 = 1;
                        var5 = var4[var1];
                        var2 = undefined;
                        var5 = var3.bind(var2)(var5);
                        var7 = var5.Storage;
                        var6 = var7.remove;
                        var5 = _closure1_slot3;
                        var5 = var6.bind(var7)(var5);
                        var1 = var4[var1];
                        var1 = var3.bind(var2)(var1);
                        var2 = var1.Storage;
                        var1 = var2.remove;
                        var0 = _closure1_slot2;
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                }
            };
            var _closure1_slot14 = var0;
            var0 = function(arg0) { // Original name: maybeDecryptToken, environment: var3
                _fun8633: for (var _fun8633_ip = 0;;) switch (_fun8633_ip) {
                    case 0:
                        var6 = arg0;
                        var0 = null;
                        if (!(var0 != var6)) {
                            _fun8633_ip = 126;
                            continue _fun8633
                        }
                    case 9:
                        var2 = var6.length;
                        var1 = 0;
                        if (!(var1 !== var2)) {
                            _fun8633_ip = 126;
                            continue _fun8633
                        }
                    case 20:
                        var1 = _closure1_slot5;
                        if (!(var0 != var1)) {
                            _fun8633_ip = 62;
                            continue _fun8633
                        }
                    case 31:
                        var0 = var1.isEncryptionAvailable;
                        var0 = var0.bind(var1)();
                        if (!var0) {
                            _fun8633_ip = 62;
                            continue _fun8633
                        }
                    case 44:
                        var1 = var6.startsWith;
                        var0 = _closure1_slot4;
                        var0 = var1.bind(var6)(var0);
                        if (var0) {
                            _fun8633_ip = 78;
                            continue _fun8633
                        }
                    case 62:
                        var0 = {};
                        var0.decryptedToken = var6;
                        var1 = false;
                        var0.wasEncrypted = var1;
                        _fun8633_ip = 124;
                        continue _fun8633;
                    case 78:
                        var1 = {};
                        var4 = _closure1_slot5;
                        var3 = var4.decryptString;
                        var5 = var6.substring;
                        var2 = 12;
                        var2 = var5.bind(var6)(var2);
                        var2 = var3.bind(var4)(var2);
                        var1.decryptedToken = var2;
                        var2 = true;
                        var1.wasEncrypted = var2;
                        var0 = var1;
                    case 124:
                        _fun8633_ip = 136;
                        continue _fun8633;
                    case 126:
                        var0 = {
                            'decryptedToken': null,
                            'wasEncrypted': false
                        };
                    case 136:
                        return var0;
                }
            };
            var _closure1_slot15 = var0;
            var0 = function(arg0) { // Original name: maybeEncryptToken, environment: var3
                _fun8634: for (var _fun8634_ip = 0;;) switch (_fun8634_ip) {
                    case 0:
                        var3 = arg0;
                        var4 = _closure1_slot5;
                        var2 = null;
                        var0 = var3;
                        if (!(var2 != var4)) {
                            _fun8634_ip = 98;
                            continue _fun8634
                        }
                    case 19:
                        var2 = var4.isEncryptionAvailable;
                        var2 = var2.bind(var4)();
                        var0 = var3;
                        if (!var2) {
                            _fun8634_ip = 98;
                            continue _fun8634
                        }
                    case 35:
                        var4 = var3.startsWith;
                        var2 = _closure1_slot4;
                        var2 = var4.bind(var3)(var2);
                        var0 = var3;
                        if (var2) {
                            _fun8634_ip = 98;
                            continue _fun8634
                        }
                    case 56:
                        var4 = _closure1_slot4;
                        var2 = _closure1_slot5;
                        var1 = var2.encryptString;
                        var3 = var1.bind(var2)(var3);
                        var1 = global;
                        var1 = var1.HermesInternal;
                        var2 = var1.concat;
                        var1 = '';
                        var0 = var2.bind(var1)(var4, var3);
                    case 98:
                        return var0;
                }
            };
            var _closure1_slot16 = var0;
            var5 = function(arg0) { // Original name: getToken, environment: var3
                _fun8635: for (var _fun8635_ip = 0;;) switch (_fun8635_ip) {
                    case 0:
                        var2 = arg0;
                        var0 = null;
                        if (!(var0 == var2)) {
                            _fun8635_ip = 18;
                            continue _fun8635
                        }
                    case 9:
                        var0 = _closure1_slot6;
                        _fun8635_ip = 29;
                        continue _fun8635;
                    case 18:
                        var1 = _closure1_slot9;
                        var0 = var1[var2];
                    case 29:
                        return var0;
                }
            };
            var _closure1_slot17 = var5;
            var0 = function(arg0, arg1) { // Original name: setSecondaryToken, environment: var3
                _fun8636: for (var _fun8636_ip = 0;;) switch (_fun8636_ip) {
                    case 0:
                        var2 = arg1;
                        var0 = null;
                        if (!(var0 != var2)) {
                            _fun8636_ip = 23;
                            continue _fun8636
                        }
                    case 9:
                        var1 = _closure1_slot9;
                        var0 = arg0;
                        var1[var2] = var0;
                    case 23:
                        var1 = _closure1_slot8;
                        if (var1) {
                            _fun8636_ip = 61;
                            continue _fun8636
                        }
                    case 33:
                        var1 = _closure1_slot6;
                        var _closure1_slot7 = var1;
                        var1 = _closure1_slot9;
                        _closure1_slot10 = var1;
                        var2 = _closure1_slot14;
                        var1 = undefined;
                        var1 = var2.bind(var1)();
                        _fun8636_ip = 71;
                        continue _fun8636;
                    case 61:
                        var1 = _closure1_slot20;
                        var0 = undefined;
                        var0 = var1.bind(var0)();
                    case 71:
                        var0 = undefined;
                        return var0;
                }
            };
            var _closure1_slot18 = var0;
            var4 = function(arg0) { // Original name: removeToken, environment: var3
                _fun8637: for (var _fun8637_ip = 0;;) switch (_fun8637_ip) {
                    case 0:
                        var5 = arg0;
                        var1 = _closure1_slot6;
                        var0 = null;
                        if (!(var0 != var5)) {
                            _fun8637_ip = 40;
                            continue _fun8637
                        }
                    case 16:
                        var3 = _closure1_slot9;
                        var1 = var3[var5];
                        var4 = _closure1_slot9;
                        var4 = delete var4[var5];
                        var4 = _closure1_slot10;
                        var4 = delete var4[var5];
                    case 40:
                        var3 = _closure1_slot6;
                        if (!(var1 === var3)) {
                            _fun8637_ip = 56;
                            continue _fun8637
                        }
                    case 48:
                        var _closure1_slot6 = var0;
                        _closure1_slot7 = var0;
                    case 56:
                        var3 = _closure1_slot14;
                        var2 = undefined;
                        var2 = var3.bind(var2)();
                        var0 = var0 != var1;
                        return var0;
                }
            };
            var _closure1_slot19 = var4;
            var1 = function() { // Original name: encryptAndStoreTokens, environment: var3
                _fun8638: for (var _fun8638_ip = 0;;) switch (_fun8638_ip) {
                    case 0:
                        var3 = _closure1_slot5;
                        var2 = null;
                        if (!(var2 != var3)) {
                            _fun8638_ip = 26;
                            continue _fun8638
                        }
                    case 13:
                        var1 = var3.isEncryptionAvailable;
                        var1 = var1.bind(var3)();
                        if (var1) {
                            _fun8638_ip = 44;
                            continue _fun8638
                        }
                    case 26:
                        var1 = _closure1_slot6;
                        _closure1_slot7 = var1;
                        var1 = _closure1_slot9;
                        _closure1_slot10 = var1;
                        _fun8638_ip = 132;
                        continue _fun8638;
                    case 44:
                        var1 = _closure1_slot6;
                        if (!(var2 != var1)) {
                            _fun8638_ip = 71;
                            continue _fun8638
                        }
                    case 52:
                        var3 = _closure1_slot16;
                        var2 = _closure1_slot6;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        _closure1_slot7 = var1;
                    case 71:
                        var3 = _closure1_slot13;
                        var1 = global;
                        var4 = var1.Object;
                        var2 = var4.entries;
                        var1 = _closure1_slot9;
                        var4 = var2.bind(var4)(var1);
                        var2 = var4.map;
                        var1 = function(arg0) { // Environment: var1
                            _fun8639: for (var _fun8639_ip = 0;;) switch (_fun8639_ip) {
                                case 0:
                                    var5 = arg0;
                                    var0 = var5[Symbol.iterator];
                                    var5 = var0().next;
                                    var2 = var5().value;
                                    var1 = var0;
                                    var3 = undefined;
                                    var4 = var1 === var3;
                                    var1 = undefined;
                                    if (var4) {
                                        _fun8639_ip = 27;
                                        continue _fun8639
                                    }
                                case 24:
                                    var1 = var2;
                                case 27:
                                    var2 = undefined;
                                    if (var4) {
                                        _fun8639_ip = 57;
                                        continue _fun8639
                                    }
                                case 32:
                                    var6 = var5().value;
                                    var5 = var0;
                                    var5 = var5 === var3;
                                    var2 = undefined;
                                    var4 = var5;
                                    if (var5) {
                                        _fun8639_ip = 57;
                                        continue _fun8639
                                    }
                                case 51:
                                    var2 = var6;
                                    var4 = var5;
                                case 57:
                                    if (var4) {
                                        _fun8639_ip = 63;
                                        continue _fun8639
                                    }
                                case 60:
                                    var0.return();
                                case 63:
                                    var0 = new Array(2);
                                    var0[0] = var1;
                                    var1 = _closure1_slot16;
                                    var1 = var1.bind(var3)(var2);
                                    var0[1] = var1;
                                    return var0;
                            }
                        };
                        var2 = var2.bind(var4)(var1);
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        _closure1_slot10 = var1;
                        var1 = true;
                        _closure1_slot8 = var1;
                    case 132:
                        var1 = _closure1_slot14;
                        var0 = undefined;
                        var1 = var1.bind(var0)();
                        return var0;
                }
            };
            var _closure1_slot20 = var1;
            var6 = global;
            var11 = var6.Object;
            var10 = var11.defineProperty;
            var9 = {};
            var0 = true;
            var9.value = var0;
            var0 = '__esModule';
            var0 = var10.bind(var11)(var2, var0, var9);
            var0 = 0;
            var9 = var8[var0];
            var0 = undefined;
            var9 = var7.bind(var0)(var9);
            var10 = var9.TOKENS_KEY;
            var _closure1_slot2 = var10;
            var9 = var9.TOKEN_KEY;
            var _closure1_slot3 = var9;
            var9 = 'dQw4w9WgXcQ:';
            var _closure1_slot4 = var9;
            var9 = null;
            var _closure1_slot5 = var9;
            var6 = var6.window;
            var6 = var6.DiscordNative;
            if (!(var9 != var6)) {
                _fun8629_ip = 198;
                continue _fun8629
            }
        case 188:
            var6 = var6.safeStorage;
            _closure1_slot5 = var6;
        case 198:
            var6 = false;
            var _closure1_slot8 = var6;
            var9 = {};
            var _closure1_slot9 = var9;
            var9 = {};
            var _closure1_slot10 = var9;
            var _closure1_slot11 = var6;
            var _closure1_slot12 = var6;
            var6 = 2;
            var6 = var8[var6];
            var8 = var7.bind(var0)(var6);
            var7 = var8.fileFinishedImporting;
            var6 = '../discord_common/js/shared/lib/TokenManager.tsx';
            var6 = var7.bind(var8)(var6);
            var6 = function() { // Original name: init, environment: var3
                _fun8640: for (var _fun8640_ip = 0;;) switch (_fun8640_ip) {
                    case 0:
                        var2 = _closure1_slot12;
                        if (var2) {
                            _fun8640_ip = 204;
                            continue _fun8640
                        }
                    case 15:
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot1;
                        var2 = 1;
                        var6 = var5[var2];
                        var3 = undefined;
                        var6 = var4.bind(var3)(var6);
                        var8 = var6.Storage;
                        var7 = var8.get;
                        var6 = _closure1_slot3;
                        var6 = var7.bind(var8)(var6);
                        _closure1_slot7 = var6;
                        var2 = var5[var2];
                        var2 = var4.bind(var3)(var2);
                        var5 = var2.Storage;
                        var4 = var5.get;
                        var2 = _closure1_slot2;
                        var2 = var4.bind(var5)(var2);
                        if (var2) {
                            _fun8640_ip = 95;
                            continue _fun8640
                        }
                    case 93:
                        var2 = {};
                    case 95:
                        _closure1_slot10 = var2;
                        var4 = _closure1_slot15;
                        var2 = _closure1_slot7;
                        var4 = var4.bind(var3)(var2);
                        var2 = var4.decryptedToken;
                        var4 = var4.wasEncrypted;
                        _closure1_slot8 = var4;
                        _closure1_slot6 = var2;
                        var2 = _closure1_slot13;
                        var4 = global;
                        var6 = var4.Object;
                        var5 = var6.entries;
                        var4 = _closure1_slot10;
                        var6 = var5.bind(var6)(var4);
                        var5 = var6.map;
                        var4 = function(arg0) { // Environment: var0
                            _fun8641: for (var _fun8641_ip = 0;;) switch (_fun8641_ip) {
                                case 0:
                                    var5 = arg0;
                                    var0 = var5[Symbol.iterator];
                                    var5 = var0().next;
                                    var1 = var5().value;
                                    var2 = var0;
                                    var4 = undefined;
                                    var3 = var2 === var4;
                                    var2 = undefined;
                                    if (var3) {
                                        _fun8641_ip = 27;
                                        continue _fun8641
                                    }
                                case 24:
                                    var2 = var1;
                                case 27:
                                    var1 = undefined;
                                    if (var3) {
                                        _fun8641_ip = 57;
                                        continue _fun8641
                                    }
                                case 32:
                                    var6 = var5().value;
                                    var5 = var0;
                                    var5 = var5 === var4;
                                    var1 = undefined;
                                    var3 = var5;
                                    if (var5) {
                                        _fun8641_ip = 57;
                                        continue _fun8641
                                    }
                                case 51:
                                    var1 = var6;
                                    var3 = var5;
                                case 57:
                                    if (var3) {
                                        _fun8641_ip = 63;
                                        continue _fun8641
                                    }
                                case 60:
                                    var0.return();
                                case 63:
                                    var0 = _closure1_slot15;
                                    var0 = var0.bind(var4)(var1);
                                    var1 = var0.decryptedToken;
                                    var0 = var0.wasEncrypted;
                                    if (var0) {
                                        _fun8641_ip = 94;
                                        continue _fun8641
                                    }
                                case 90:
                                    var0 = _closure1_slot8;
                                case 94:
                                    _closure1_slot8 = var0;
                                    var0 = new Array(2);
                                    var0[0] = var2;
                                    var0[1] = var1;
                                    return var0;
                            }
                        };
                        var5 = var5.bind(var6)(var4);
                        var4 = var5.filter;
                        var0 = function(arg0) { // Environment: var0
                            _fun8642: for (var _fun8642_ip = 0;;) switch (_fun8642_ip) {
                                case 0:
                                    var3 = arg0;
                                    var0 = var3[Symbol.iterator];
                                    var3 = var0().next;
                                    var1 = var3().value;
                                    var1 = var0;
                                    var5 = undefined;
                                    var2 = var1 === var5;
                                    var1 = undefined;
                                    if (var2) {
                                        _fun8642_ip = 49;
                                        continue _fun8642
                                    }
                                case 24:
                                    var4 = var3().value;
                                    var3 = var0;
                                    var3 = var3 === var5;
                                    var1 = undefined;
                                    var2 = var3;
                                    if (var3) {
                                        _fun8642_ip = 49;
                                        continue _fun8642
                                    }
                                case 43:
                                    var1 = var4;
                                    var2 = var3;
                                case 49:
                                    if (var2) {
                                        _fun8642_ip = 55;
                                        continue _fun8642
                                    }
                                case 52:
                                    var0.return();
                                case 55:
                                    var0 = null;
                                    var0 = var0 != var1;
                                    return var0;
                            }
                        };
                        var0 = var4.bind(var5)(var0);
                        var0 = var2.bind(var3)(var0);
                        _closure1_slot9 = var0;
                        var0 = true;
                        _closure1_slot12 = var0;
                    case 204:
                        var0 = undefined;
                        return var0;
                }
            };
            var2.init = var6;
            var6 = function() { // Original name: getAnalyticsToken, environment: var3
                var2 = _closure1_slot17;
                var1 = undefined;
                var0 = '__analytics__';
                var0 = var2.bind(var1)(var0);
                return var0;
            };
            var2.getAnalyticsToken = var6;
            var2.getToken = var5;
            var5 = function(arg0) { // Original name: setAnalyticsToken, environment: var3
                _fun8644: for (var _fun8644_ip = 0;;) switch (_fun8644_ip) {
                    case 0:
                        var3 = arg0;
                        var0 = null;
                        if (!(var0 == var3)) {
                            _fun8644_ip = 31;
                            continue _fun8644
                        }
                    case 9:
                        var2 = _closure1_slot19;
                        var1 = undefined;
                        var0 = '__analytics__';
                        var0 = var2.bind(var1)(var0);
                        _fun8644_ip = 52;
                        continue _fun8644;
                    case 31:
                        var2 = _closure1_slot18;
                        var1 = undefined;
                        var0 = '__analytics__';
                        var0 = var2.bind(var1)(var3, var0);
                    case 52:
                        var0 = undefined;
                        return var0;
                }
            };
            var2.setAnalyticsToken = var5;
            var5 = function(arg0, arg1) { // Original name: setToken, environment: var3
                _fun8645: for (var _fun8645_ip = 0;;) switch (_fun8645_ip) {
                    case 0:
                        var3 = arg0;
                        var2 = arg1;
                        var0 = null;
                        if (!(var0 == var3)) {
                            _fun8645_ip = 28;
                            continue _fun8645
                        }
                    case 12:
                        var1 = _closure1_slot19;
                        var0 = undefined;
                        var0 = var1.bind(var0)(var2);
                        _fun8645_ip = 47;
                        continue _fun8645;
                    case 28:
                        _closure1_slot6 = var3;
                        var1 = _closure1_slot18;
                        var0 = undefined;
                        var0 = var1.bind(var0)(var3, var2);
                    case 47:
                        var0 = undefined;
                        return var0;
                }
            };
            var2.setToken = var5;
            var5 = function() { // Original name: hideToken, environment: var3
                _fun8646: for (var _fun8646_ip = 0;;) switch (_fun8646_ip) {
                    case 0:
                        var1 = _closure1_slot11;
                        if (var1) {
                            _fun8646_ip = 26;
                            continue _fun8646
                        }
                    case 10:
                        var1 = true;
                        _closure1_slot11 = var1;
                        var1 = _closure1_slot14;
                        var0 = undefined;
                        var0 = var1.bind(var0)();
                    case 26:
                        var0 = undefined;
                        return var0;
                }
            };
            var2.hideToken = var5;
            var5 = function() { // Original name: showToken, environment: var3
                _fun8647: for (var _fun8647_ip = 0;;) switch (_fun8647_ip) {
                    case 0:
                        var1 = _closure1_slot11;
                        if (!var1) {
                            _fun8647_ip = 26;
                            continue _fun8647
                        }
                    case 10:
                        var1 = false;
                        _closure1_slot11 = var1;
                        var1 = _closure1_slot14;
                        var0 = undefined;
                        var0 = var1.bind(var0)();
                    case 26:
                        var0 = undefined;
                        return var0;
                }
            };
            var2.showToken = var5;
            var2.removeToken = var4;
            var3 = function() { // Original name: removeAnalyticsToken, environment: var3
                var2 = _closure1_slot19;
                var1 = undefined;
                var0 = '__analytics__';
                var0 = var2.bind(var1)(var0);
                return var0;
            };
            var2.removeAnalyticsToken = var3;
            var2.encryptAndStoreTokens = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [483, 587, 2]);