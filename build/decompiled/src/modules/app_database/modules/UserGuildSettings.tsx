// modules/app_database/modules/UserGuildSettings.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var0 = function arg0, arg1() {
        _fun40394: for (var _fun40394_ip = 0;;) switch (_fun40394_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun40394_ip = 46;
                    continue _fun40394
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun40394_ip = 55;
                    continue _fun40394
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun40394_ip = 343;
                    continue _fun40394
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun40394_ip = 323;
                    continue _fun40394
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun40394_ip = 283;
                    continue _fun40394
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun40394_ip = 270;
                    continue _fun40394
                }
            case 110:
                var6 = {};
                var8 = var6.toString;
                var6 = var8.call;
                var10 = var6.bind(var8)(var2);
                var9 = var10.slice;
                var8 = 8;
                var6 = -1;
                var8 = var9.bind(var10)(var8, var6);
                var6 = 'Object';
                var6 = var6 === var8;
                if (!var6) {
                    _fun40394_ip = 163;
                    continue _fun40394
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun40394_ip = 179;
                    continue _fun40394
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun40394_ip = 249;
                    continue _fun40394
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun40394_ip = 249;
                    continue _fun40394
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun40394_ip = 234;
                    continue _fun40394
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun40394_ip = 247;
                    continue _fun40394
                }
            case 234:
                var8 = _closure1_slot9;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun40394_ip = 265;
                continue _fun40394;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun40394_ip = 283;
                continue _fun40394;
            case 270:
                var6 = _closure1_slot9;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun40394_ip = 323;
                    continue _fun40394
                }
            case 289:
                var6 = var4.TypeError;
                var4 = var6.prototype;
                var5 = Object.create(var4, {
                    constructor: {
                        value: var6
                    }
                });
                var12 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
                var13 = var5;
                var4 = new var13[var6](var12, var11);
                var4 = var4 instanceof Object ? var4 : var5;
                throw var4;
            case 323:
                if (!var3) {
                    _fun40394_ip = 330;
                    continue _fun40394
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun40395: for (var _fun40395_ip = 0;;) switch (_fun40395_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun40395_ip = 56;
                                continue _fun40395
                            }
                        case 20:
                            var0 = {};
                            var1 = false;
                            var0.done = var1;
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot1;
                            var1 = parseFloat(var1);
                            var3 = var1 + 1;
                            _closure2_slot1 = var3;
                            var1 = var2[var1];
                            var0.value = var1;
                            _fun40395_ip = 67;
                            continue _fun40395;
                        case 56:
                            var1 = {};
                            var2 = true;
                            var1.done = var2;
                            var0 = var1;
                        case 67:
                            return var0;
                    }
                };
                return var0;
            case 343:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var0 = function arg0, arg1() {
        _fun40396: for (var _fun40396_ip = 0;;) switch (_fun40396_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun40396_ip = 23;
                    continue _fun40396
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun40396_ip = 33;
                    continue _fun40396
                }
            case 28:
                var1 = var3.length;
            case 33:
                var0 = global;
                var0 = var0.Array;
                var0 = var0.bind(var2)(var1);
                var2 = 0;
                var4 = var2 < var1;
                if (!var4) {
                    _fun40396_ip = 70;
                    continue _fun40396
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun40396_ip = 55;
                    continue _fun40396
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.convertChannelOverridesToMap;
    var _closure1_slot5 = var7;
    var3 = var3.getGuildDefaults;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var6.bind(var0)(var3);
    var3 = var7.prototype;
    var6 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var11 = 'ReadStates';
    var12 = var6;
    var3 = new var12[var7](var11, var10);
    var3 = var3 instanceof Object ? var3 : var6;
    var _closure1_slot7 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot4;
        var2 = function() {
            var2 = this;
            var _closure3_slot0 = var2;
            var4 = _closure1_slot3;
            var1 = _closure2_slot1;
            var0 = undefined;
            var1 = var4.bind(var0)(var2, var1);
            var1 = {};
            var4 = function arg0, arg1() {
                var3 = _closure3_slot0;
                var2 = var3.handleConnectionOpen;
                var1 = arg0;
                var0 = arg1;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var1.CONNECTION_OPEN = var4;
            var3 = function arg0, arg1() {
                var3 = _closure3_slot0;
                var2 = var3.handleUserGuildSettingsUpdate;
                var1 = arg0;
                var0 = arg1;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var1.USER_GUILD_SETTINGS_FULL_UPDATE = var3;
            var2.actions = var1;
            return var0;
        };
        var _closure2_slot1 = var2;
        var4 = {};
        var1 = 'getAll';
        var4.key = var1;
        var6 = _closure1_slot2;
        var1 = undefined;
        var0 = function*(arg0) { // Environment: var5
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun40402: for (var _fun40402_ip = 0;;) switch (_fun40402_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun40402_ip = 161;
                            continue _fun40402
                        }
                    case 10:
                        var2 = global;
                        var3 = var2.performance;
                        var1 = var3.now;
                        var6 = var1.bind(var3)();
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot1;
                        var1 = 5;
                        var4 = var4[var1];
                        var1 = undefined;
                        var5 = var5.bind(var1)(var4);
                        var4 = var5.userGuildSettings;
                        var1 = arg0;
                        var4 = var4.bind(var5)(var1);
                        var1 = var4.getMany;
                        var1 = var1.bind(var4)();
                        SaveGenerator(address = 80);
                    case 78:
                        return var1;
                    case 80:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun40402_ip = 158;
                            continue _fun40402
                        }
                    case 86:
                        var5 = var2.performance;
                        var4 = var5.now;
                        var5 = var4.bind(var5)();
                        var4 = _closure1_slot7;
                        var3 = var4.log;
                        var13 = var5 - var6;
                        var11 = var1.length;
                        var2 = var2.HermesInternal;
                        var7 = var2.concat;
                        var14 = 'asynchronously loaded in ';
                        var12 = 'ms (userGuildSettings: ';
                        var10 = ')';
                        var2 = var14[var7](var13, var12, var11, var10, var9);
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    case 158:
                        return var1;
                    case 161:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var6.bind(var1)(var0);
        var _closure2_slot0 = var0;
        var0 = function() {
            var0 = undefined;
            var3 = _closure2_slot0;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var4.value = var0;
        var0 = new Array(5);
        var0[0] = var4;
        var4 = {};
        var6 = 'resetInMemoryState';
        var4.key = var6;
        var6 = function() {
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'handleConnectionOpen';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun40405: for (var _fun40405_ip = 0;;) switch (_fun40405_ip) {
                case 0:
                    var0 = arg0;
                    var4 = arg1;
                    var3 = this;
                    var1 = var0.userGuildSettings;
                    var1 = var1.partial;
                    if (var1) {
                        _fun40405_ip = 69;
                        continue _fun40405
                    }
                case 24:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 5;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var5.bind(var1)(var2);
                    var1 = var2.userGuildSettingsTransaction;
                    var2 = var1.bind(var2)(var4);
                    var1 = var2.delete;
                    var1 = var1.bind(var2)();
                case 69:
                    var2 = var3.write;
                    var1 = var0.userGuildSettings;
                    var1 = var1.entries;
                    var0 = var0.userGuildSettings;
                    var0 = var0.version;
                    var0 = var2.bind(var3)(var1, var0, var4);
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'handleUserGuildSettingsUpdate';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun40406: for (var _fun40406_ip = 0;;) switch (_fun40406_ip) {
                case 0:
                    var1 = arg0;
                    var5 = this;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var0 = 6;
                    var2 = var2[var0];
                    var0 = undefined;
                    var4 = var3.bind(var0)(var2);
                    var3 = var4.max;
                    var7 = var1.userGuildSettings;
                    var6 = var7.map;
                    var2 = function(arg0) { // Environment: var2
                        _fun40407: for (var _fun40407_ip = 0;;) switch (_fun40407_ip) {
                            case 0:
                                var0 = arg0;
                                var1 = var0.version;
                                var0 = null;
                                var2 = var0 != var1;
                                var0 = -1;
                                if (!var2) {
                                    _fun40407_ip = 27;
                                    continue _fun40407
                                }
                            case 24:
                                var0 = var1;
                            case 27:
                                return var0;
                        }
                    };
                    var2 = var6.bind(var7)(var2);
                    var4 = var3.bind(var4)(var2);
                    var2 = null;
                    if (!(var2 != var4)) {
                        _fun40406_ip = 92;
                        continue _fun40406
                    }
                case 70:
                    var3 = var5.write;
                    var2 = var1.userGuildSettings;
                    var1 = arg1;
                    var1 = var3.bind(var5)(var2, var4, var1);
                case 92:
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'write';
        var4.key = var6;
        var5 = function arg0, arg1, arg2() {
            _fun40408: for (var _fun40408_ip = 0;;) switch (_fun40408_ip) {
                case 0:
                    var3 = arg2;
                    var5 = _closure1_slot0;
                    var0 = _closure1_slot1;
                    var4 = 5;
                    var2 = var0[var4];
                    var0 = undefined;
                    var5 = var5.bind(var0)(var2);
                    var2 = var5.userGuildSettingsTransaction;
                    var10 = var2.bind(var5)(var3);
                    var5 = _closure1_slot8;
                    var2 = arg0;
                    var9 = var5.bind(var0)(var2);
                    var5 = var9.bind(var0)();
                    var2 = var5.done;
                    var8 = 'channel_overrides';
                    var7 = null;
                    var6 = 'dm-sentinel';
                    if (var2) {
                        _fun40408_ip = 178;
                        continue _fun40408
                    }
                case 75:
                    var2 = var5.value;
                    var12 = {};
                    var13 = _closure1_slot6;
                    var11 = var2.guild_id;
                    var15 = var13.bind(var0)(var11);
                    var16 = var12;
                    var11 = copyDataProperties(var16, var15);
                    var16 = var12;
                    var15 = var2;
                    var11 = copyDataProperties(var16, var15);
                    var13 = _closure1_slot5;
                    var11 = var2.channel_overrides;
                    var11 = var13.bind(var0)(var11);
                    var12[var8] = var11;
                    var11 = var10.put;
                    var13 = var2.guild_id;
                    var14 = var7 != var13;
                    var2 = var6;
                    if (!var14) {
                        _fun40408_ip = 157;
                        continue _fun40408
                    }
                case 154:
                    var2 = var13;
                case 157:
                    var2 = var11.bind(var10)(var2, var12);
                    var11 = var9.bind(var0)();
                    var2 = var11.done;
                    var5 = var11;
                    if (!var2) {
                        _fun40408_ip = 75;
                        continue _fun40408
                    }
                case 178:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var4];
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.nonGuildVersionsTransaction;
                    var3 = var1.bind(var2)(var3);
                    var2 = var3.put;
                    var1 = {};
                    var4 = 'user_guild_settings_version';
                    var1.id = var4;
                    var4 = arg1;
                    var1.version = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
            }
        };
        var4.value = var5;
        var0[4] = var4;
        var0 = var3.bind(var1)(var2, var0);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = var1.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var1
        }
    });
    var12 = var3;
    var1 = new var12[var1](var11);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_database/modules/UserGuildSettings.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 6, 7, 4303, 3, 1646, 22, 2]);