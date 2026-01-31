// modules/user_settings/UserSettingsProtoStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() {
        _fun14218: for (var _fun14218_ip = 0;;) switch (_fun14218_ip) {
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
                _fun14218_ip = 74;
                continue _fun14218;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
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
    var8 = function() {
        var1 = _closure1_slot15;
        var0 = undefined;
        var1 = var1.bind(var0)();
        return var0;
    };
    var0 = function() {
        var0 = global;
        var2 = var0.Object;
        var1 = var2.values;
        var0 = _closure1_slot12;
        var2 = var1.bind(var2)(var0);
        var1 = var2.forEach;
        var0 = function(arg0) { // Environment: var0
            _fun14223: for (var _fun14223_ip = 0;;) switch (_fun14223_ip) {
                case 0:
                    var3 = arg0;
                    var0 = var3.editInfo;
                    var1 = var0.timeout;
                    var0 = null;
                    if (!(var0 != var1)) {
                        _fun14223_ip = 150;
                        continue _fun14223
                    }
                case 24:
                    var1 = global;
                    var5 = var1.clearTimeout;
                    var2 = var3.editInfo;
                    var4 = var2.timeout;
                    var2 = undefined;
                    var4 = var5.bind(var2)(var4);
                    var4 = var3.editInfo;
                    var4.timeout = var2;
                    var4 = var3.editInfo;
                    var1 = var1.Number;
                    var1 = var1.MAX_SAFE_INTEGER;
                    var4.timeoutDelay = var1;
                    var4 = var3.editInfo;
                    var1 = false;
                    var4.rateLimited = var1;
                    var1 = var3.editInfo;
                    var3 = var3.proto;
                    var3 = var3.versions;
                    var4 = var0 == var3;
                    if (var4) {
                        _fun14223_ip = 132;
                        continue _fun14223
                    }
                case 126:
                    var2 = var3.dataVersion;
                case 132:
                    var3 = var0 != var2;
                    var0 = 0;
                    if (!var3) {
                        _fun14223_ip = 144;
                        continue _fun14223
                    }
                case 141:
                    var0 = var2;
                case 144:
                    var1.offlineEditDataVersion = var0;
                case 150:
                    var0 = undefined;
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var _closure1_slot15 = var0;
    var0 = function arg0() {
        _fun14224: for (var _fun14224_ip = 0;;) switch (_fun14224_ip) {
            case 0:
                var2 = arg0;
                var0 = var2.editInfo;
                var1 = var0.timeout;
                var0 = null;
                if (!(var0 != var1)) {
                    _fun14224_ip = 48;
                    continue _fun14224
                }
            case 21:
                var0 = global;
                var3 = var0.clearTimeout;
                var0 = var2.editInfo;
                var1 = var0.timeout;
                var0 = undefined;
                var0 = var3.bind(var0)(var1);
            case 48:
                var1 = _closure1_slot9;
                var0 = undefined;
                var1 = var1.bind(var0)();
                var2.editInfo = var1;
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var9 = function arg0() {
        _fun14225: for (var _fun14225_ip = 0;;) switch (_fun14225_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.settings;
                var8 = var1.proto;
                var4 = var1.type;
                var2 = var0.partial;
                var3 = var0.resetEditInfo;
                var0 = var0.local;
                var0 = !var0;
                _closure1_slot13 = var0;
                var0 = _closure1_slot12;
                var0 = var0[var4];
                if (!var3) {
                    _fun14225_ip = 70;
                    continue _fun14225
                }
            case 59:
                var4 = _closure1_slot16;
                var3 = undefined;
                var3 = var4.bind(var3)(var0);
            case 70:
                if (var2) {
                    _fun14225_ip = 160;
                    continue _fun14225
                }
            case 73:
                var0.proto = var8;
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 8;
                var2 = var4[var2];
                var5 = undefined;
                var4 = var3.bind(var5)(var2);
                var2 = var0.proto;
                var3 = 'string';
                var2 = typeof var2;
                var3 = var3 !== var2;
                var2 = 'UserSettingsProto cannot be a string';
                var2 = var4.bind(var5)(var3, var2);
                var3 = var0.editInfo;
                var2 = true;
                var3.loaded = var2;
                var3 = var0.editInfo;
                var2 = false;
                var3.loading = var2;
                _fun14225_ip = 258;
                continue _fun14225;
            case 160:
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 9;
                var2 = var4[var2];
                var3 = undefined;
                var7 = var5.bind(var3)(var2);
                var6 = var7.mergeTopLevelFields;
                var5 = var0.ProtoClass;
                var2 = var0.proto;
                var2 = var6.bind(var7)(var5, var2, var8);
                var0.proto = var2;
                var2 = _closure1_slot1;
                var1 = 8;
                var1 = var4[var1];
                var2 = var2.bind(var3)(var1);
                var0 = var0.proto;
                var1 = 'string';
                var0 = typeof var0;
                var1 = var1 !== var0;
                var0 = 'UserSettingsProto cannot be a string';
                var0 = var2.bind(var3)(var1, var0);
            case 258:
                var0 = undefined;
                return var0;
        }
    };
    var0 = function arg0() {
        _fun14226: for (var _fun14226_ip = 0;;) switch (_fun14226_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var1 = null;
                if (!(var1 != var2)) {
                    _fun14226_ip = 60;
                    continue _fun14226
                }
            case 15:
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 11;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.forEach;
                var1 = _closure1_slot12;
                var0 = function(arg0, arg1) { // Environment: var0
                    _fun14227: for (var _fun14227_ip = 0;;) switch (_fun14227_ip) {
                        case 0:
                            var2 = arg0;
                            var3 = _closure2_slot0;
                            var0 = global;
                            var4 = var0.Number;
                            var0 = undefined;
                            var1 = arg1;
                            var1 = var4.bind(var0)(var1);
                            var1 = var3[var1];
                            var3 = null;
                            if (!(var3 != var1)) {
                                _fun14227_ip = 283;
                                continue _fun14227
                            }
                        case 41:
                            var5 = var3 == var1;
                            var4 = undefined;
                            if (var5) {
                                _fun14227_ip = 56;
                                continue _fun14227
                            }
                        case 50:
                            var4 = var1.proto;
                        case 56:
                            var5 = var3 != var4;
                            var9 = '';
                            if (!var5) {
                                _fun14227_ip = 70;
                                continue _fun14227
                            }
                        case 67:
                            var9 = var4;
                        case 70:
                            var7 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var6 = 9;
                            var5 = var5[var6];
                            var8 = var7.bind(var0)(var5);
                            var7 = var8.b64ToProto;
                            var5 = var2.ProtoClass;
                            var5 = var7.bind(var8)(var5, var9);
                            if (!(var3 != var5)) {
                                _fun14227_ip = 283;
                                continue _fun14227
                            }
                        case 118:
                            var2.proto = var5;
                            var7 = _closure1_slot1;
                            var8 = _closure1_slot2;
                            var5 = 8;
                            var5 = var8[var5];
                            var8 = var7.bind(var0)(var5);
                            var5 = var2.proto;
                            var7 = 'string';
                            var5 = typeof var5;
                            var7 = var7 !== var5;
                            var5 = 'UserSettingsProto cannot be a string';
                            var5 = var8.bind(var0)(var7, var5);
                            var7 = var3 == var1;
                            var5 = undefined;
                            if (var7) {
                                _fun14227_ip = 188;
                                continue _fun14227
                            }
                        case 182:
                            var5 = var1.protoToSave;
                        case 188:
                            var8 = var3 != var5;
                            var7 = null;
                            if (!var8) {
                                _fun14227_ip = 200;
                                continue _fun14227
                            }
                        case 197:
                            var7 = var5;
                        case 200:
                            if (!(var3 != var7)) {
                                _fun14227_ip = 283;
                                continue _fun14227
                            }
                        case 204:
                            var5 = var1.offlineEditDataVersion;
                            if (!(var3 != var5)) {
                                _fun14227_ip = 283;
                                continue _fun14227
                            }
                        case 214:
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var4 = var4[var6];
                            var6 = var5.bind(var0)(var4);
                            var5 = var6.b64ToProto;
                            var4 = var2.ProtoClass;
                            var4 = var5.bind(var6)(var4, var7);
                            if (!(var3 != var4)) {
                                _fun14227_ip = 283;
                                continue _fun14227
                            }
                        case 253:
                            var3 = var2.editInfo;
                            var3.protoToSave = var4;
                            var2 = var2.editInfo;
                            var1 = var1.offlineEditDataVersion;
                            var2.offlineEditDataVersion = var1;
                        case 283:
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var1, var0);
            case 60:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var0 = global;
    var10 = var0.Object;
    var7 = var10.defineProperty;
    var1 = {};
    var12 = true;
    var1.value = var12;
    var0 = '__esModule';
    var0 = var7.bind(var10)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 5;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var10 = var1.UserSettingsTypes;
    var _closure1_slot8 = var10;
    var7 = var1.createEmptyEditInfo;
    var _closure1_slot9 = var7;
    var13 = {};
    var1 = 6;
    var11 = var5[var1];
    var11 = var4.bind(var0)(var11);
    var11 = var11.PreloadedUserSettings;
    var13.ProtoClass = var11;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var11 = var1.PreloadedUserSettings;
    var1 = var11.create;
    var1 = var1.bind(var11)();
    var13.proto = var1;
    var1 = false;
    var13.lazyLoaded = var1;
    var11 = var7.bind(var0)();
    var13.editInfo = var11;
    var _closure1_slot10 = var13;
    var11 = {};
    var14 = 7;
    var15 = var5[var14];
    var15 = var4.bind(var0)(var15);
    var15 = var15.FrecencyUserSettings;
    var11.ProtoClass = var15;
    var14 = var5[var14];
    var14 = var4.bind(var0)(var14);
    var15 = var14.FrecencyUserSettings;
    var14 = var15.create;
    var14 = var14.bind(var15)();
    var11.proto = var14;
    var11.lazyLoaded = var12;
    var7 = var7.bind(var0)();
    var11.editInfo = var7;
    var _closure1_slot11 = var11;
    var7 = {};
    var12 = var10.PRELOADED_USER_SETTINGS;
    var7[var12] = var13;
    var10 = var10.FRECENCY_AND_FAVORITES_SETTINGS;
    var7[var10] = var11;
    var _closure1_slot12 = var7;
    var _closure1_slot13 = var1;
    var1 = 13;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.PersistedStore;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun14229: for (var _fun14229_ip = 0;;) switch (_fun14229_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot3;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot6;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot5;
                    var0 = _closure1_slot14;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun14229_ip = 69;
                        continue _fun14229
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun14229_ip = 105;
                    continue _fun14229;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot6;
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
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function arg0() {
            var2 = _closure1_slot17;
            var0 = undefined;
            var1 = arg0;
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var4.value = var0;
        var0 = new Array(13);
        var0[0] = var4;
        var4 = {};
        var6 = 'getState';
        var4.key = var6;
        var6 = function() {
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'computeState';
        var4.key = var6;
        var6 = function() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 11;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.mapValues;
            var1 = _closure1_slot12;
            var0 = function(arg0) { // Environment: var0
                _fun14233: for (var _fun14233_ip = 0;;) switch (_fun14233_ip) {
                    case 0:
                        var1 = arg0;
                        var0 = {};
                        var6 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var5 = 9;
                        var3 = var3[var5];
                        var4 = undefined;
                        var8 = var6.bind(var4)(var3);
                        var7 = var8.protoToB64;
                        var6 = var1.ProtoClass;
                        var3 = var1.proto;
                        var3 = var7.bind(var8)(var6, var3);
                        var0.proto = var3;
                        var3 = var1.editInfo;
                        var3 = var3.offlineEditDataVersion;
                        var7 = null;
                        var3 = var7 != var3;
                        if (!var3) {
                            _fun14233_ip = 96;
                            continue _fun14233
                        }
                    case 80:
                        var6 = var1.editInfo;
                        var6 = var6.protoToSave;
                        var3 = var7 != var6;
                    case 96:
                        if (!var3) {
                            _fun14233_ip = 170;
                            continue _fun14233
                        }
                    case 99:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var2 = var2[var5];
                        var5 = var3.bind(var4)(var2);
                        var4 = var5.protoToB64;
                        var3 = var1.ProtoClass;
                        var2 = var1.editInfo;
                        var2 = var2.protoToSave;
                        var2 = var4.bind(var5)(var3, var2);
                        var0.protoToSave = var2;
                        var1 = var1.editInfo;
                        var1 = var1.offlineEditDataVersion;
                        var0.offlineEditDataVersion = var1;
                    case 170:
                        return var0;
                }
            };
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'hasLoaded';
        var4.key = var6;
        var6 = function arg0() {
            var1 = _closure1_slot12;
            var0 = arg0;
            var0 = var1[var0];
            var0 = var0.editInfo;
            var0 = var0.loaded;
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'settings';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot10;
            var0 = var0.proto;
            return var0;
        };
        var4.get = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'frecencyWithoutFetchingLatest';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot11;
            var0 = var0.proto;
            return var0;
        };
        var4.get = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'wasMostRecentUpdateFromServer';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot13;
            return var0;
        };
        var4.get = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'getFullState';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot12;
            return var0;
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'getGuildFolders';
        var4.key = var6;
        var6 = function() {
            _fun14239: for (var _fun14239_ip = 0;;) switch (_fun14239_ip) {
                case 0:
                    var0 = _closure1_slot10;
                    var0 = var0.proto;
                    var1 = var0.guildFolders;
                    var0 = null;
                    var2 = var0 == var1;
                    var3 = undefined;
                    if (var2) {
                        _fun14239_ip = 36;
                        continue _fun14239
                    }
                case 30:
                    var3 = var1.folders;
                case 36:
                    var1 = var0 == var3;
                    var0 = null;
                    if (var1) {
                        _fun14239_ip = 62;
                        continue _fun14239
                    }
                case 45:
                    var2 = var3.map;
                    var1 = function(arg0) { // Environment: var1
                        _fun14240: for (var _fun14240_ip = 0;;) switch (_fun14240_ip) {
                            case 0:
                                var2 = arg0;
                                var0 = var2.id;
                                var1 = null;
                                var3 = var1 == var0;
                                var4 = undefined;
                                var7 = undefined;
                                if (var3) {
                                    _fun14240_ip = 26;
                                    continue _fun14240
                                }
                            case 21:
                                var7 = var0.value;
                            case 26:
                                var0 = var2.color;
                                var5 = var1 == var0;
                                var3 = undefined;
                                if (var5) {
                                    _fun14240_ip = 45;
                                    continue _fun14240
                                }
                            case 40:
                                var3 = var0.value;
                            case 45:
                                var0 = {};
                                var5 = var2.guildIds;
                                var0.guildIds = var5;
                                var6 = var1 == var7;
                                var5 = undefined;
                                if (var6) {
                                    _fun14240_ip = 80;
                                    continue _fun14240
                                }
                            case 67:
                                var6 = global;
                                var6 = var6.Number;
                                var5 = var6.bind(var4)(var7);
                            case 80:
                                var0.folderId = var5;
                                var5 = var2.name;
                                var6 = var1 == var5;
                                var2 = undefined;
                                if (var6) {
                                    _fun14240_ip = 104;
                                    continue _fun14240
                                }
                            case 99:
                                var2 = var5.value;
                            case 104:
                                var0.folderName = var2;
                                var2 = var1 == var3;
                                var1 = undefined;
                                if (var2) {
                                    _fun14240_ip = 131;
                                    continue _fun14240
                                }
                            case 118:
                                var2 = global;
                                var2 = var2.Number;
                                var1 = var2.bind(var4)(var3);
                            case 131:
                                var0.folderColor = var1;
                                return var0;
                        }
                    };
                    var0 = var2.bind(var3)(var1);
                case 62:
                    return var0;
            }
        };
        var4.value = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'getGuildRecentsDismissedAt';
        var4.key = var6;
        var6 = function arg0() {
            _fun14241: for (var _fun14241_ip = 0;;) switch (_fun14241_ip) {
                case 0:
                    var2 = arg0;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun14241_ip = 121;
                        continue _fun14241
                    }
                case 9:
                    var1 = this;
                    var1 = var1.settings;
                    var1 = var1.guilds;
                    var5 = var0 == var1;
                    var4 = undefined;
                    var3 = undefined;
                    if (var5) {
                        _fun14241_ip = 60;
                        continue _fun14241
                    }
                case 35:
                    var1 = var1.guilds;
                    var1 = var1[var2];
                    var2 = var0 == var1;
                    var3 = undefined;
                    if (var2) {
                        _fun14241_ip = 60;
                        continue _fun14241
                    }
                case 54:
                    var3 = var1.guildRecentsDismissedAt;
                case 60:
                    var1 = var0 == var3;
                    var0 = 0;
                    if (var1) {
                        _fun14241_ip = 119;
                        continue _fun14241
                    }
                case 69:
                    var2 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 12;
                    var1 = var5[var1];
                    var1 = var2.bind(var4)(var1);
                    var2 = var1.Timestamp;
                    var1 = var2.toDate;
                    var2 = var1.bind(var2)(var3);
                    var1 = var2.getTime;
                    var0 = var1.bind(var2)();
                case 119:
                    return var0;
                case 121:
                    var0 = 0;
                    return var0;
            }
        };
        var4.value = var6;
        var0[9] = var4;
        var4 = {};
        var6 = 'getDismissedGuildContent';
        var4.key = var6;
        var6 = function arg0() {
            _fun14242: for (var _fun14242_ip = 0;;) switch (_fun14242_ip) {
                case 0:
                    var5 = arg0;
                    var3 = null;
                    var1 = var3 == var5;
                    var0 = null;
                    if (var1) {
                        _fun14242_ip = 75;
                        continue _fun14242
                    }
                case 14:
                    var1 = this;
                    var1 = var1.settings;
                    var2 = var1.guilds;
                    var6 = var3 == var2;
                    var1 = undefined;
                    if (var6) {
                        _fun14242_ip = 72;
                        continue _fun14242
                    }
                case 38:
                    var2 = var2.guilds;
                    var6 = var3 == var2;
                    var1 = undefined;
                    if (var6) {
                        _fun14242_ip = 72;
                        continue _fun14242
                    }
                case 53:
                    var2 = var2[var5];
                    var3 = var3 == var2;
                    var1 = undefined;
                    if (var3) {
                        _fun14242_ip = 72;
                        continue _fun14242
                    }
                case 66:
                    var1 = var2.dismissedGuildContent;
                case 72:
                    var0 = var1;
                case 75:
                    return var0;
            }
        };
        var4.value = var6;
        var0[10] = var4;
        var4 = {};
        var6 = 'getGuildDismissedContentState';
        var4.key = var6;
        var6 = function arg0() {
            _fun14243: for (var _fun14243_ip = 0;;) switch (_fun14243_ip) {
                case 0:
                    var0 = this;
                    var0 = var0.settings;
                    var1 = var0.guilds;
                    var2 = null;
                    var4 = var2 == var1;
                    var0 = undefined;
                    if (var4) {
                        _fun14243_ip = 63;
                        continue _fun14243
                    }
                case 26:
                    var4 = var1.guilds;
                    var1 = var2 == var4;
                    var0 = undefined;
                    if (var1) {
                        _fun14243_ip = 63;
                        continue _fun14243
                    }
                case 41:
                    var1 = arg0;
                    var1 = var4[var1];
                    var2 = var2 == var1;
                    var0 = undefined;
                    if (var2) {
                        _fun14243_ip = 63;
                        continue _fun14243
                    }
                case 57:
                    var0 = var1.guildDismissibleContentStates;
                case 63:
                    return var0;
            }
        };
        var4.value = var6;
        var0[11] = var4;
        var4 = {};
        var6 = 'getGuildsProto';
        var4.key = var6;
        var5 = function() {
            _fun14244: for (var _fun14244_ip = 0;;) switch (_fun14244_ip) {
                case 0:
                    var0 = this;
                    var0 = var0.settings;
                    var2 = var0.guilds;
                    var0 = null;
                    var3 = var0 == var2;
                    var1 = undefined;
                    if (var3) {
                        _fun14244_ip = 32;
                        continue _fun14244
                    }
                case 26:
                    var1 = var2.guilds;
                case 32:
                    var2 = var0 != var1;
                    var0 = null;
                    if (!var2) {
                        _fun14244_ip = 44;
                        continue _fun14244
                    }
                case 41:
                    var0 = var1;
                case 44:
                    return var0;
            }
        };
        var4.value = var5;
        var0[12] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'UserSettingsProtoStore';
    var7.displayName = var1;
    var1 = 'UserSettingsProtoStore-Cache';
    var7.persistKey = var1;
    var1 = 14;
    var1 = var5[var1];
    var18 = var6.bind(var0)(var1);
    var1 = {};
    var10 = function arg0() {
        var0 = arg0;
        var2 = var0.userSettings;
        var1 = _closure1_slot17;
        var0 = undefined;
        var1 = var1.bind(var0)(var2);
        return var0;
    };
    var1.CACHE_LOADED = var10;
    var1.USER_SETTINGS_PROTO_UPDATE = var9;
    var1.USER_SETTINGS_PROTO_ENQUEUE_UPDATE = var9;
    var9 = function arg0() {
        var0 = arg0;
        var0 = var0.settings;
        var1 = var0.type;
        var2 = var0.changes;
        var4 = _closure1_slot1;
        var5 = _closure1_slot2;
        var3 = 8;
        var3 = var5[var3];
        var6 = undefined;
        var5 = var4.bind(var6)(var3);
        var4 = true;
        var3 = 'this cannot run in the overlay';
        var3 = var5.bind(var6)(var4, var3);
        var0 = _closure1_slot12;
        var1 = var0[var1];
        var0 = {};
        var7 = var1.editInfo;
        var8 = var0;
        var3 = copyDataProperties(var8, var7);
        var8 = var0;
        var7 = var2;
        var2 = copyDataProperties(var8, var7);
        var1.editInfo = var0;
        var0 = false;
        return var0;
    };
    var1.USER_SETTINGS_PROTO_UPDATE_EDIT_INFO = var9;
    var9 = function arg0() {
        _fun14247: for (var _fun14247_ip = 0;;) switch (_fun14247_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.userSettingsProto;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun14247_ip = 79;
                    continue _fun14247
                }
            case 15:
                var0 = _closure1_slot10;
                var0.proto = var2;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 8;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var0 = var0.proto;
                var1 = 'string';
                var0 = typeof var0;
                var1 = var1 !== var0;
                var0 = 'UserSettingsProto cannot be a string';
                var0 = var2.bind(var3)(var1, var0);
            case 79:
                var3 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 9;
                var2 = var7[var0];
                var0 = undefined;
                var5 = var3.bind(var0)(var2);
                var4 = var5.runMigrations;
                var2 = _closure1_slot10;
                var3 = var2.proto;
                var6 = _closure1_slot1;
                var2 = 10;
                var2 = var7[var2];
                var6 = var6.bind(var0)(var2);
                var2 = _closure1_slot8;
                var2 = var2.PRELOADED_USER_SETTINGS;
                var2 = var6[var2];
                var2 = var4.bind(var5)(var3, var2);
                var3 = var2.proto;
                var5 = var2.isDirty;
                var4 = var2.cleanupFuncs;
                if (!var5) {
                    _fun14247_ip = 190;
                    continue _fun14247
                }
            case 177:
                var6 = _closure1_slot16;
                var2 = _closure1_slot10;
                var2 = var6.bind(var0)(var2);
            case 190:
                var2 = _closure1_slot10;
                var2.proto = var3;
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var3 = 8;
                var3 = var7[var3];
                var7 = var6.bind(var0)(var3);
                var3 = var2.proto;
                var6 = 'string';
                var3 = typeof var3;
                var6 = var6 !== var3;
                var3 = 'UserSettingsProto cannot be a string';
                var3 = var7.bind(var0)(var6, var3);
                var3 = var2.editInfo;
                var3.triggeredMigrations = var5;
                var3 = var2.editInfo;
                var3.cleanupFuncs = var4;
                var3 = var2.editInfo;
                var2 = true;
                var3.loaded = var2;
                var2 = global;
                var4 = var2.Object;
                var3 = var4.values;
                var2 = _closure1_slot12;
                var4 = var3.bind(var4)(var2);
                var3 = var4.forEach;
                var2 = function(arg0) { // Environment: var2
                    _fun14248: for (var _fun14248_ip = 0;;) switch (_fun14248_ip) {
                        case 0:
                            var0 = arg0;
                            var1 = var0.lazyLoaded;
                            if (!var1) {
                                _fun14248_ip = 38;
                                continue _fun14248
                            }
                        case 12:
                            var2 = var0.editInfo;
                            var1 = false;
                            var2.loaded = var1;
                            var0 = var0.editInfo;
                            var0.loading = var1;
                        case 38:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var3.bind(var4)(var2);
                var1 = _closure1_slot15;
                var1 = var1.bind(var0)();
                return var0;
        }
    };
    var1.CONNECTION_OPEN = var9;
    var1.CONNECTION_CLOSED = var8;
    var1.CONNECTION_RESUMED = var8;
    var8 = function arg0() {
        var0 = arg0;
        var6 = var0.userSettingsProto;
        var1 = _closure1_slot10;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var0 = 9;
        var3 = var4[var0];
        var0 = undefined;
        var5 = var5.bind(var0)(var3);
        var3 = var5.b64ToPreloadedUserSettingsProto;
        var3 = var3.bind(var5)(var6);
        var1.proto = var3;
        var3 = _closure1_slot1;
        var2 = 8;
        var2 = var4[var2];
        var3 = var3.bind(var0)(var2);
        var1 = var1.proto;
        var2 = 'string';
        var1 = typeof var1;
        var2 = var2 !== var1;
        var1 = 'UserSettingsProto cannot be a string';
        var1 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1.OVERLAY_INITIALIZE = var8;
    var3 = function() {
        var2 = _closure1_slot15;
        var0 = undefined;
        var2 = var2.bind(var0)();
        var2 = global;
        var3 = var2.Object;
        var2 = var3.values;
        var1 = _closure1_slot12;
        var3 = var2.bind(var3)(var1);
        var2 = var3.forEach;
        var1 = function(arg0) { // Environment: var1
            var2 = arg0;
            var1 = var2.ProtoClass;
            var0 = var1.create;
            var0 = var0.bind(var1)();
            var2.proto = var0;
            var1 = _closure1_slot9;
            var0 = undefined;
            var1 = var1.bind(var0)();
            var2.editInfo = var1;
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.LOGOUT = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var19 = var3;
    var17 = var1;
    var1 = new var19[var7](var18, var17, var16);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 15;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/UserSettingsProtoStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 665, 1311, 1343, 44, 1344, 1345, 22, 1341, 566, 806, 2]);