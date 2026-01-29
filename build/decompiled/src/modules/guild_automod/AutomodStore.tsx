// modules/guild_automod/AutomodStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var3 = function(arg0) { // Original name: useSyncAutomodRules, environment: var1
        var7 = arg0;
        var _closure2_slot0 = var7;
        var4 = _closure1_slot4;
        var3 = var4.useState;
        var0 = false;
        var3 = var3.bind(var4)(var0);
        var0 = _closure1_slot2;
        var8 = undefined;
        var9 = 2;
        var0 = var0.bind(var8)(var3, var9);
        var5 = 0;
        var3 = var0[var5];
        var4 = 1;
        var0 = var0[var4];
        var _closure2_slot1 = var0;
        var10 = _closure1_slot8;
        var6 = _closure1_slot0;
        var11 = _closure1_slot1;
        var0 = 10;
        var0 = var11[var0];
        var0 = var6.bind(var8)(var0);
        var6 = var0.shallow;
        var0 = function(arg0) { // Environment: var1
            var1 = arg0;
            var2 = var1.syncRules;
            var0 = new Array(2);
            var0[0] = var2;
            var1 = var1.fetching;
            var0[1] = var1;
            return var0;
        };
        var6 = var10.bind(var8)(var0, var6);
        var0 = _closure1_slot2;
        var0 = var0.bind(var8)(var6, var9);
        var5 = var0[var5];
        var _closure2_slot2 = var5;
        var6 = var0[var4];
        var _closure2_slot3 = var6;
        var0 = new Array(2);
        var0[0] = var3;
        var4 = _closure1_slot4;
        var3 = var4.useCallback;
        var2 = _closure1_slot3;
        var1 = function*() { // Environment: var1
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun115414: for (var _fun115414_ip = 0;;) switch (_fun115414_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun115414_ip = 112;
                            continue _fun115414
                        }
                    case 7:
                        var1 = _closure2_slot3;
                        if (var1) {
                            _fun115414_ip = 107;
                            continue _fun115414
                        }
                    case 17:
                        var3 = _closure2_slot0;
                        var1 = null;
                        if (!(var1 != var3)) {
                            _fun115414_ip = 107;
                            continue _fun115414
                        }
                    case 27: // try_start_0
                        var3 = _closure2_slot1;
                        var5 = undefined;
                        var1 = true;
                        var1 = var3.bind(var5)(var1);
                        var3 = _closure2_slot2;
                        var1 = _closure2_slot0;
                        var1 = var3.bind(var5)(var1);
                        SaveGenerator(address = 57);
                    case 55:
                        return var1;
                    case 57:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun115414_ip = 76;
                            continue _fun115414
                        }
                    case 63: // try_end0
                        var4 = _closure2_slot1;
                        var3 = false;
                        var3 = var4.bind(var5)(var3);
                        _fun115414_ip = 107;
                        continue _fun115414;
                    case 76:
                        var4 = _closure2_slot1;
                        var3 = false;
                        var3 = var4.bind(var5)(var3);
                        return var1;
                    case 90: // catch_target0
                        CatchBlockStart(arg_register = 1);
                        var4 = _closure2_slot1;
                        var3 = undefined;
                        var2 = false;
                        var2 = var4.bind(var3)(var2);
                        throw var1;
                    case 107:
                        var1 = undefined;
                        return var1;
                    case 112:
                        return var0;
                }
            };
            return var0;
        };
        var2 = var2.bind(var8)(var1);
        var1 = new Array(3);
        var1[0] = var7;
        var1[1] = var6;
        var1[2] = var5;
        var1 = var3.bind(var4)(var2, var1);
        var0[1] = var1;
        return var0;
    };
    var _closure1_slot9 = var3;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var7[var0];
    var0 = undefined;
    var4 = var5.bind(var0)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var5 = var7[var4];
    var4 = arg3;
    var4 = var4.bind(var0)(var5);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var6.bind(var0)(var4);
    var4 = var4.AutomodTriggerType;
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var7[var4];
    var4 = var6.bind(var0)(var4);
    var4 = var4.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot6 = var4;
    var4 = {};
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var7[var4];
    var8 = var6.bind(var0)(var4);
    var5 = var8.createWithEqualityFn;
    var4 = function(arg0, arg1) { // Environment: var1
        var0 = arg0;
        var _closure2_slot0 = var0;
        var0 = arg1;
        var _closure2_slot1 = var0;
        var0 = {
            'rules': null,
            'fetching': false,
            'error': null
        };
        var2 = {};
        var0.rules = var2;
        var2 = function(arg0) { // Original name: updateRule, environment: var1
            _fun115416: for (var _fun115416_ip = 0;;) switch (_fun115416_ip) {
                case 0:
                    var3 = arg0;
                    var _closure3_slot0 = var3;
                    var4 = var3.guildId;
                    var _closure3_slot1 = var4;
                    var0 = var3.id;
                    var _closure3_slot2 = var0;
                    var5 = var3.triggerType;
                    var _closure3_slot3 = var5;
                    var2 = _closure2_slot1;
                    var0 = undefined;
                    var2 = var2.bind(var0)();
                    var2 = var2.rules;
                    var _closure3_slot4 = var2;
                    var4 = var2[var4];
                    var2 = null;
                    if (!(var2 == var4)) {
                        _fun115416_ip = 72;
                        continue _fun115416
                    }
                case 70:
                    var4 = {};
                case 72:
                    var _closure3_slot5 = var4;
                    var6 = var4[var5];
                    if (!(var2 == var6)) {
                        _fun115416_ip = 88;
                        continue _fun115416
                    }
                case 84:
                    var6 = new Array(0);
                case 88:
                    var4 = var6.some;
                    var2 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var1 = var0.id;
                        var0 = _closure3_slot2;
                        var0 = var1 === var0;
                        return var0;
                    };
                    var2 = var4.bind(var6)(var2);
                    var5 = var6.filter;
                    var4 = function(arg0) { // Environment: var1
                        _fun115418: for (var _fun115418_ip = 0;;) switch (_fun115418_ip) {
                            case 0:
                                var1 = arg0;
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot1;
                                var0 = 6;
                                var2 = var2[var0];
                                var0 = undefined;
                                var3 = var3.bind(var0)(var2);
                                var2 = var3.isDefaultRuleId;
                                var0 = var1.id;
                                var0 = var2.bind(var3)(var0);
                                var0 = !var0;
                                if (var0) {
                                    _fun115418_ip = 67;
                                    continue _fun115418
                                }
                            case 50:
                                var2 = var1.triggerType;
                                var1 = _closure3_slot3;
                                var0 = var2 !== var1;
                            case 67:
                                return var0;
                        }
                    };
                    var5 = var5.bind(var6)(var4);
                    if (var2) {
                        _fun115416_ip = 156;
                        continue _fun115416
                    }
                case 126:
                    var2 = new Array(1);
                    var7 = 0;
                    var9 = var2;
                    var8 = var5;
                    var4 = arraySpread(var9, var8, var7);
                    var2[var4] = var3;
                    var3 = 1;
                    var3 = var4 + var3;
                    _fun115416_ip = 173;
                    continue _fun115416;
                case 156:
                    var4 = var5.map;
                    var3 = function(arg0) { // Environment: var1
                        _fun115419: for (var _fun115419_ip = 0;;) switch (_fun115419_ip) {
                            case 0:
                                var0 = arg0;
                                var3 = var0.id;
                                var2 = _closure3_slot2;
                                if (!(var3 === var2)) {
                                    _fun115419_ip = 23;
                                    continue _fun115419
                                }
                            case 19:
                                var0 = _closure3_slot0;
                            case 23:
                                return var0;
                        }
                    };
                    var2 = var4.bind(var5)(var3);
                case 173:
                    var _closure3_slot6 = var2;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var2 = 7;
                    var2 = var4[var2];
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.batchUpdates;
                    var1 = function() { // Environment: var1
                        var2 = _closure2_slot0;
                        var1 = {};
                        var0 = {};
                        var7 = _closure3_slot4;
                        var8 = var0;
                        var3 = copyDataProperties(var8, var7);
                        var4 = _closure3_slot1;
                        var3 = {};
                        var7 = _closure3_slot5;
                        var8 = var3;
                        var6 = copyDataProperties(var8, var7);
                        var6 = _closure3_slot3;
                        var5 = _closure3_slot6;
                        var3[var6] = var5;
                        var0[var4] = var3;
                        var1.rules = var0;
                        var0 = null;
                        var1.error = var0;
                        var0 = undefined;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var1 = var2.bind(var3)(var1);
                    return var0;
            }
        };
        var0.updateRule = var2;
        var2 = function(arg0, arg1) { // Original name: removeRule, environment: var1
            var3 = arg1;
            var0 = arg0;
            var _closure3_slot0 = var0;
            var _closure3_slot1 = var3;
            var2 = _closure2_slot1;
            var0 = undefined;
            var2 = var2.bind(var0)();
            var2 = var2.rules;
            var _closure3_slot2 = var2;
            var4 = var2[var3];
            var _closure3_slot3 = var4;
            var2 = global;
            var3 = var2.Object;
            var2 = var3.keys;
            var5 = var2.bind(var3)(var4);
            var4 = var5.reduce;
            var3 = function(arg0, arg1) { // Environment: var1
                _fun115422: for (var _fun115422_ip = 0;;) switch (_fun115422_ip) {
                    case 0:
                        var0 = arg0;
                        var1 = global;
                        var3 = var1.Number;
                        var2 = undefined;
                        var1 = arg1;
                        var2 = var3.bind(var2)(var1);
                        var1 = _closure3_slot3;
                        var4 = var1[var2];
                        var1 = null;
                        if (!(var1 == var4)) {
                            _fun115422_ip = 42;
                            continue _fun115422
                        }
                    case 38:
                        var4 = new Array(0);
                    case 42:
                        var3 = var4.filter;
                        var1 = function(arg0) { // Environment: var1
                            var0 = arg0;
                            var1 = var0.id;
                            var0 = _closure3_slot0;
                            var0 = var1 !== var0;
                            return var0;
                        };
                        var1 = var3.bind(var4)(var1);
                        var0[var2] = var1;
                        return var0;
                }
            };
            var2 = {};
            var2 = var4.bind(var5)(var3, var2);
            var _closure3_slot4 = var2;
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 7;
            var2 = var4[var2];
            var3 = var3.bind(var0)(var2);
            var2 = var3.batchUpdates;
            var1 = function() { // Environment: var1
                var2 = _closure2_slot0;
                var1 = {};
                var0 = {};
                var5 = _closure3_slot2;
                var6 = var0;
                var4 = copyDataProperties(var6, var5);
                var4 = _closure3_slot1;
                var3 = _closure3_slot4;
                var0[var4] = var3;
                var1.rules = var0;
                var0 = null;
                var1.error = var0;
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                return var0;
            };
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0.removeRule = var2;
        var4 = _closure1_slot3;
        var3 = undefined;
        var2 = function*(arg0) { // Environment: var1
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun115426: for (var _fun115426_ip = 0;;) switch (_fun115426_ip) {
                    case 0:
                        StartGenerator();
                        var8 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun115426_ip = 330;
                            continue _fun115426
                        }
                    case 15:
                        var4 = var8;
                        var _closure4_slot0 = var8;
                        var1 = undefined;
                        var _closure4_slot1 = var1;
                        var _closure4_slot2 = var1;
                        var _closure4_slot3 = var1;
                        var5 = global;
                        var6 = var5.Date;
                        var3 = var6.now;
                        var7 = var3.bind(var6)();
                        var6 = _closure1_slot7;
                        var8 = var6[var8];
                        var6 = null;
                        var9 = var6 != var8;
                        var6 = 0;
                        if (!var9) {
                            _fun115426_ip = 78;
                            continue _fun115426
                        }
                    case 75:
                        var6 = var8;
                    case 78:
                        var7 = var7 - var6;
                        var6 = 20000;
                        if (!(var7 > var6)) {
                            _fun115426_ip = 327;
                            continue _fun115426
                        }
                    case 95:
                        var7 = _closure1_slot7;
                        var6 = var4;
                        var8 = var5.Date;
                        var5 = var8.now;
                        var5 = var5.bind(var8)();
                        var7[var6] = var5;
                    case 121: // try_start_0
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot1;
                        var5 = 8;
                        var5 = var7[var5];
                        var6 = var6.bind(var1)(var5);
                        var5 = var6.fetchAutomodRules;
                        var4 = var5.bind(var6)(var4);
                        SaveGenerator(address = 156);
                    case 154:
                        return var4;
                    case 156:
                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 5);
                        if (var5) {
                            _fun115426_ip = 239;
                            continue _fun115426
                        }
                    case 162:
                        var5 = function(arg0) { // Environment: var2
                            var3 = arg0;
                            var0 = {};
                            var2 = _closure1_slot5;
                            var5 = var2.KEYWORD;
                            var4 = new Array(0);
                            var0[var5] = var4;
                            var5 = var2.ML_SPAM;
                            var4 = new Array(0);
                            var0[var5] = var4;
                            var5 = var2.DEFAULT_KEYWORD_LIST;
                            var4 = new Array(0);
                            var0[var5] = var4;
                            var5 = var2.MENTION_SPAM;
                            var4 = new Array(0);
                            var0[var5] = var4;
                            var5 = var2.USER_PROFILE;
                            var4 = new Array(0);
                            var0[var5] = var4;
                            var4 = var2.SERVER_POLICY;
                            var2 = new Array(0);
                            var0[var4] = var2;
                            var _closure5_slot0 = var0;
                            var2 = var3.forEach;
                            var1 = function(arg0) { // Environment: var1
                                _fun115428: for (var _fun115428_ip = 0;;) switch (_fun115428_ip) {
                                    case 0:
                                        var2 = arg0;
                                        var1 = var2.triggerType;
                                        var0 = _closure5_slot0;
                                        var1 = var0[var1];
                                        var0 = null;
                                        if (!(var0 != var1)) {
                                            _fun115428_ip = 36;
                                            continue _fun115428
                                        }
                                    case 26:
                                        var0 = var1.push;
                                        var0 = var0.bind(var1)(var2);
                                    case 36:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var1 = var2.bind(var3)(var1);
                            return var0;
                        };
                        var5 = var5.bind(var1)(var4);
                        _closure4_slot1 = var5;
                        var5 = _closure2_slot1;
                        var5 = var5.bind(var1)();
                        var5 = var5.rules;
                        _closure4_slot2 = var5;
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot1;
                        var5 = 7;
                        var5 = var7[var5];
                        var7 = var6.bind(var1)(var5);
                        var6 = var7.batchUpdates;
                        var5 = function() { // Environment: var2
                            var2 = _closure2_slot0;
                            var1 = {};
                            var0 = {};
                            var5 = _closure4_slot2;
                            var6 = var0;
                            var4 = copyDataProperties(var6, var5);
                            var4 = _closure4_slot0;
                            var3 = _closure4_slot1;
                            var0[var4] = var3;
                            var1.rules = var0;
                            var0 = null;
                            var1.error = var0;
                            var0 = undefined;
                            var1 = var2.bind(var0)(var1);
                            return var0;
                        };
                        var5 = var6.bind(var7)(var5);
                    case 237: // try_end0
                        _fun115426_ip = 327;
                        continue _fun115426;
                    case 239:
                        return var4;
                    case 242: // catch_target0
                        CatchBlockStart(arg_register = 7);
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot1;
                        var3 = 9;
                        var3 = var5[var3];
                        var3 = var4.bind(var1)(var3);
                        var3 = var3.APIError;
                        var6 = var3.prototype;
                        var6 = Object.create(var6, {
                            constructor: {
                                value: var3
                            }
                        });
                        var11 = var6;
                        var10 = var7;
                        var3 = new var11[var3](var10, var9);
                        var3 = var3 instanceof Object ? var3 : var6;
                        _closure4_slot3 = var3;
                        var3 = 7;
                        var3 = var5[var3];
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.batchUpdates;
                        var2 = function() { // Environment: var2
                            var2 = _closure2_slot0;
                            var1 = {};
                            var0 = _closure4_slot3;
                            var1.error = var0;
                            var0 = undefined;
                            var1 = var2.bind(var0)(var1);
                            return var0;
                        };
                        var2 = var3.bind(var4)(var2);
                    case 327:
                        return var1;
                    case 330:
                        return var0;
                }
            };
            return var0;
        };
        var2 = var4.bind(var3)(var2);
        var _closure2_slot2 = var2;
        var1 = function() { // Environment: var1
            var0 = undefined;
            var3 = _closure2_slot2;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var0.syncRules = var1;
        return var0;
    };
    var4 = var5.bind(var8)(var4);
    var _closure1_slot8 = var4;
    var5 = 11;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guild_automod/AutomodStore.tsx';
    var5 = var6.bind(var7)(var5);
    var2.useAutomodStore = var4;
    var4 = function(arg0, arg1) { // Environment: var1
        _fun115432: for (var _fun115432_ip = 0;;) switch (_fun115432_ip) {
            case 0:
                var1 = _closure1_slot8;
                var0 = var1.getState;
                var0 = var0.bind(var1)();
                var1 = var0.rules;
                var0 = arg0;
                var3 = var1[var0];
                var1 = null;
                var2 = var1 == var3;
                var0 = undefined;
                if (var2) {
                    _fun115432_ip = 48;
                    continue _fun115432
                }
            case 41:
                var2 = arg1;
                var0 = var3[var2];
            case 48:
                if (!(var1 == var0)) {
                    _fun115432_ip = 56;
                    continue _fun115432
                }
            case 52:
                var0 = new Array(0);
            case 56:
                var0 = var0.length;
                return var0;
        }
    };
    var2.getRuleCountByTriggerType = var4;
    var2.useSyncAutomodRules = var3;
    var3 = function(arg0) { // Original name: useSyncAutomodRulesEffect, environment: var1
        var6 = arg0;
        var1 = _closure1_slot9;
        var5 = undefined;
        var4 = var1.bind(var5)(var6);
        var2 = _closure1_slot2;
        var1 = 2;
        var4 = var2.bind(var5)(var4, var1);
        var1 = 0;
        var2 = var4[var1];
        var1 = 1;
        var1 = var4[var1];
        var _closure2_slot0 = var1;
        var5 = _closure1_slot4;
        var4 = var5.useEffect;
        var3 = new Array(2);
        var3[0] = var6;
        var3[1] = var1;
        var0 = function() { // Environment: var0
            var2 = _closure1_slot3;
            var0 = undefined;
            var1 = function*() { // Environment: var1
                var0 = function*() { // Original name: ?anon_0_, environment: var0
                    _fun115436: for (var _fun115436_ip = 0;;) switch (_fun115436_ip) {
                        case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                            if (var1) {
                                _fun115436_ip = 36;
                                continue _fun115436
                            }
                        case 7:
                            var1 = _closure2_slot0;
                            var2 = undefined;
                            var1 = var1.bind(var2)();
                            SaveGenerator(address = 24);
                        case 22:
                            return var1;
                        case 24:
                            ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                            if (var3) {
                                _fun115436_ip = 33;
                                continue _fun115436
                            }
                        case 30:
                            return var2;
                        case 33:
                            return var1;
                        case 36:
                            return var0;
                    }
                };
                return var0;
            };
            var1 = var2.bind(var0)(var1);
            var1 = var1.bind(var0)();
            return var0;
        };
        var0 = var4.bind(var5)(var0, var3);
        var0 = new Array(2);
        var0[0] = var2;
        var0[1] = var1;
        return var0;
    };
    var2.useSyncAutomodRulesEffect = var3;
    var1 = function(arg0) { // Original name: useAutomodRulesList, environment: var1
        var1 = arg0;
        var _closure2_slot0 = var1;
        var3 = _closure1_slot8;
        var4 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 10;
        var1 = var2[var1];
        var2 = undefined;
        var1 = var4.bind(var2)(var1);
        var1 = var1.shallow;
        var0 = function(arg0) { // Environment: var0
            _fun115438: for (var _fun115438_ip = 0;;) switch (_fun115438_ip) {
                case 0:
                    var1 = arg0;
                    var0 = {};
                    var4 = var1.rules;
                    var2 = _closure2_slot0;
                    var3 = null;
                    if (!(var3 == var2)) {
                        _fun115438_ip = 33;
                        continue _fun115438
                    }
                case 24:
                    var2 = _closure1_slot6;
                    _fun115438_ip = 37;
                    continue _fun115438;
                case 33:
                    var2 = _closure2_slot0;
                case 37:
                    var2 = var4[var2];
                    if (!(var3 == var2)) {
                        _fun115438_ip = 47;
                        continue _fun115438
                    }
                case 45:
                    var2 = {};
                case 47:
                    var0.rulesByTriggerType = var2;
                    var2 = var1.updateRule;
                    var0.updateRule = var2;
                    var1 = var1.removeRule;
                    var0.removeRule = var1;
                    return var0;
            }
        };
        var0 = var3.bind(var2)(var0, var1);
        return var0;
    };
    var2.useAutomodRulesList = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 5, 31, 10026, 660, 797, 14690, 802, 14691, 3309, 3035, 2]);