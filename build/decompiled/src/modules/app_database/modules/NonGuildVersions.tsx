// modules/app_database/modules/NonGuildVersions.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var6;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var6[var3];
    var7 = var4.bind(var0)(var3);
    var3 = var7.prototype;
    var4 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var11 = 'NonGuildVersions';
    var12 = var4;
    var3 = new var12[var7](var11, var10);
    var3 = var3 instanceof Object ? var3 : var4;
    var _closure1_slot7 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot5;
        var2 = function() {
            _fun93265: for (var _fun93265_ip = 0;;) switch (_fun93265_ip) {
                case 0:
                    var3 = this;
                    var _closure3_slot0 = var3;
                    var5 = _closure1_slot4;
                    var2 = _closure2_slot1;
                    var0 = undefined;
                    var2 = var5.bind(var0)(var3, var2);
                    var2 = {};
                    var5 = function arg0, arg1() {
                        var3 = _closure3_slot0;
                        var2 = var3.handleConnectionOpen;
                        var1 = arg0;
                        var0 = arg1;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                    };
                    var2.CONNECTION_OPEN = var5;
                    var5 = function arg0, arg1() {
                        var3 = _closure3_slot0;
                        var2 = var3.handleConnectionOpen;
                        var1 = arg0;
                        var0 = arg1;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                    };
                    var2.BACKGROUND_SYNC = var5;
                    var3.actions = var2;
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 5;
                    var2 = var5[var2];
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.isCacheEnabled;
                    var2 = var2.bind(var3)();
                    if (!var2) {
                        _fun93265_ip = 181;
                        continue _fun93265
                    }
                case 96:
                    var3 = _closure1_slot6;
                    var2 = var3.addChangeListener;
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var4 = 6;
                    var4 = var8[var4];
                    var6 = var7.bind(var0)(var4);
                    var5 = var6.throttle;
                    var4 = 8;
                    var4 = var8[var4];
                    var4 = var7.bind(var0)(var4);
                    var4 = var4.Millis;
                    var7 = var4.SECOND;
                    var4 = 10;
                    var4 = var4 * var7;
                    var1 = function() { // Environment: var1
                        _fun93268: for (var _fun93268_ip = 0;;) switch (_fun93268_ip) {
                            case 0:
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var0 = 7;
                                var1 = var1[var0];
                                var0 = undefined;
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.database;
                                var3 = var1.bind(var2)();
                                var1 = null;
                                if (!(var1 != var3)) {
                                    _fun93268_ip = 61;
                                    continue _fun93268
                                }
                            case 41:
                                var2 = var3.transaction;
                                var1 = function(arg0) { // Environment: var1
                                    _fun93269: for (var _fun93269_ip = 0;;) switch (_fun93269_ip) {
                                        case 0:
                                            var2 = arg0;
                                            var3 = _closure1_slot6;
                                            var1 = var3.getGuildId;
                                            var5 = var1.bind(var3)();
                                            var1 = null;
                                            if (!(var1 != var5)) {
                                                _fun93269_ip = 114;
                                                continue _fun93269
                                            }
                                        case 26:
                                            var1 = global;
                                            var3 = var1.isNaN;
                                            var1 = var1.Number;
                                            var4 = undefined;
                                            var1 = var1.bind(var4)(var5);
                                            var1 = var3.bind(var4)(var1);
                                            if (var1) {
                                                _fun93269_ip = 114;
                                                continue _fun93269
                                            }
                                        case 55:
                                            var3 = _closure1_slot1;
                                            var6 = _closure1_slot2;
                                            var1 = 7;
                                            var1 = var6[var1];
                                            var3 = var3.bind(var4)(var1);
                                            var1 = var3.nonGuildVersionsTransaction;
                                            var4 = var1.bind(var3)(var2);
                                            var3 = var4.put;
                                            var1 = {};
                                            var6 = 'initial_guild_id';
                                            var1.id = var6;
                                            var1.versionString = var5;
                                            var1 = var3.bind(var4)(var1);
                                            _fun93269_ip = 161;
                                            continue _fun93269;
                                        case 114:
                                            var3 = _closure1_slot1;
                                            var1 = _closure1_slot2;
                                            var0 = 7;
                                            var1 = var1[var0];
                                            var0 = undefined;
                                            var1 = var3.bind(var0)(var1);
                                            var0 = var1.nonGuildVersionsTransaction;
                                            var2 = var0.bind(var1)(var2);
                                            var1 = var2.delete;
                                            var0 = 'initial_guild_id';
                                            var0 = var1.bind(var2)(var0);
                                        case 161:
                                            var0 = undefined;
                                            return var0;
                                    }
                                };
                                var1 = var2.bind(var3)(var1);
                            case 61:
                                return var0;
                        }
                    };
                    var1 = var5.bind(var6)(var1, var4);
                    var1 = var2.bind(var3)(var1);
                case 181:
                    return var0;
            }
        };
        var _closure2_slot1 = var2;
        var4 = {};
        var1 = 'getCommittedVersions';
        var4.key = var1;
        var6 = _closure1_slot3;
        var1 = undefined;
        var0 = function*() { // Environment: var5
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun93271: for (var _fun93271_ip = 0;;) switch (_fun93271_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun93271_ip = 177;
                            continue _fun93271
                        }
                    case 10:
                        var4 = undefined;
                        var1 = undefined;
                        var5 = undefined;
                    case 16: // try_start_0
                        var3 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var2 = 7;
                        var2 = var6[var2];
                        var3 = var3.bind(var4)(var2);
                        var2 = var3.nonGuildVersions;
                        var2 = var2.bind(var3)();
                        var1 = var2;
                        var6 = null;
                        if (!(var6 != var2)) {
                            _fun93271_ip = 141;
                            continue _fun93271
                        }
                    case 58:
                        var2 = var1;
                        var1 = var2.getMany;
                        var1 = var1.bind(var2)();
                        SaveGenerator(address = 75);
                    case 73:
                        return var1;
                    case 75:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun93271_ip = 138;
                            continue _fun93271
                        }
                    case 81:
                        var3 = var1.map;
                        var2 = function(arg0) { // Environment: var2
                            _fun93272: for (var _fun93272_ip = 0;;) switch (_fun93272_ip) {
                                case 0:
                                    var2 = arg0;
                                    var1 = var2.id;
                                    var0 = new Array(2);
                                    var0[0] = var1;
                                    var1 = 'version';
                                    var1 = var1 in var2;
                                    if (var1) {
                                        _fun93272_ip = 35;
                                        continue _fun93272
                                    }
                                case 27:
                                    var1 = var2.versionString;
                                    _fun93272_ip = 41;
                                    continue _fun93272;
                                case 35:
                                    var1 = var2.version;
                                case 41:
                                    var0[1] = var1;
                                    return var0;
                            }
                        };
                        var2 = var3.bind(var1)(var2);
                        var5 = var2;
                        var3 = global;
                        var4 = var3.Object;
                        var3 = var4.fromEntries;
                        if (!(var6 == var2)) {
                            _fun93271_ip = 127;
                            continue _fun93271
                        }
                    case 121:
                        var2 = new Array(0);
                        _fun93271_ip = 130;
                        continue _fun93271;
                    case 127:
                        var2 = var5;
                    case 130:
                        var2 = var3.bind(var4)(var2);
                    case 135: // try_end0
                        return var2;
                    case 138:
                        return var1;
                    case 141:
                        var1 = {};
                        return var1;
                    case 146: // catch_target0
                        CatchBlockStart(arg_register = 4);
                        var3 = _closure1_slot7;
                        var2 = var3.warn;
                        var1 = "couldn't load guild versions";
                        var1 = var2.bind(var3)(var1, var4);
                        var1 = {};
                        return var1;
                    case 177:
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
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'handleConnectionOpen';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun93274: for (var _fun93274_ip = 0;;) switch (_fun93274_ip) {
                case 0:
                    var3 = arg0;
                    var1 = var3.apiCodeVersion;
                    var0 = null;
                    if (!(var0 != var1)) {
                        _fun93274_ip = 86;
                        continue _fun93274
                    }
                case 15:
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 7;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.nonGuildVersionsTransaction;
                    var0 = arg1;
                    var2 = var1.bind(var2)(var0);
                    var1 = var2.put;
                    var0 = {};
                    var4 = 'api_code_version';
                    var0.id = var4;
                    var3 = var3.apiCodeVersion;
                    var0.version = var3;
                    var0 = var1.bind(var2)(var0);
                case 86:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'resetInMemoryState';
        var4.key = var6;
        var5 = function() {
            var0 = undefined;
            return var0;
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var3.bind(var1)(var2, var0);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = var1.prototype;
    var4 = Object.create(var3, {
        constructor: {
            value: var1
        }
    });
    var12 = var4;
    var3 = new var12[var1](var11);
    var3 = var3 instanceof Object ? var3 : var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_database/modules/NonGuildVersions.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.NonGuildVersions = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 6, 7, 3204, 3, 12195, 22, 1637, 667, 2]);