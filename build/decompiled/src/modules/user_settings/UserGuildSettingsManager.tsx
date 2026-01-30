// modules/user_settings/UserGuildSettingsManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var1
        _fun43364: for (var _fun43364_ip = 0;;) switch (_fun43364_ip) {
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
                _fun43364_ip = 74;
                continue _fun43364;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot16 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var0 = function() { // Original name: handleConnectionOpen, environment: var1
        var1 = {};
        var3 = _closure1_slot8;
        var2 = var3.getCollapsedCategories;
        var4 = var2.bind(var3)();
        var5 = var1;
        var2 = copyDataProperties(var5, var4);
        _closure1_slot13 = var1;
        var0 = undefined;
        return var0;
    };
    var _closure1_slot17 = var0;
    var0 = function() { // Original name: scheduleSync, environment: var1
        var1 = global;
        var4 = var1.clearTimeout;
        var3 = _closure1_slot14;
        var0 = undefined;
        var3 = var4.bind(var0)(var3);
        var4 = var1.setTimeout;
        var3 = _closure1_slot15;
        var1 = function() { // Environment: var1
            var2 = _closure1_slot21;
            var1 = undefined;
            var0 = {};
            var0 = var2.bind(var1)(var0);
            return var0;
        };
        var1 = var4.bind(var0)(var1, var3);
        _closure1_slot14 = var1;
        return var0;
    };
    var _closure1_slot18 = var0;
    var0 = function() { // Original name: saveUserGuildSettings, environment: var1
        var0 = undefined;
        var3 = _closure1_slot20;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot19 = var0;
    var0 = function() { // Original name: _saveUserGuildSettings, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot7;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun43373: for (var _fun43373_ip = 0;;) switch (_fun43373_ip) {
                    case 0:
                        StartGenerator();
                        var5 = arg0;
                        var4 = arg1;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun43373_ip = 177;
                            continue _fun43373
                        }
                    case 16:
                        var7 = null;
                        if (!(var7 != var5)) {
                            _fun43373_ip = 83;
                            continue _fun43373
                        }
                    case 22:
                        var1 = _closure1_slot12;
                        if (!(var5 !== var1)) {
                            _fun43373_ip = 83;
                            continue _fun43373
                        }
                    case 33:
                        var3 = _closure1_slot21;
                        if (!(var7 == var4)) {
                            _fun43373_ip = 45;
                            continue _fun43373
                        }
                    case 41:
                        var2 = {};
                        _fun43373_ip = 63;
                        continue _fun43373;
                    case 45:
                        var1 = {};
                        if (!(var7 == var5)) {
                            _fun43373_ip = 55;
                            continue _fun43373
                        }
                    case 51:
                        var5 = _closure1_slot12;
                    case 55:
                        var1[var5] = var4;
                        var2 = var1;
                    case 63:
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        SaveGenerator(address = 74);
                    case 72:
                        return var1;
                    case 74:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (!var2) {
                            _fun43373_ip = 169;
                            continue _fun43373
                        }
                    case 80:
                        return var1;
                    case 83:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var1 = 10;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        var3 = var1.HTTP;
                        var2 = var3.patch;
                        var1 = {};
                        var7 = _closure1_slot10;
                        var6 = var7.USER_GUILD_SETTINGS;
                        var5 = _closure1_slot12;
                        var5 = var6.bind(var7)(var5);
                        var1.url = var5;
                        var1.body = var4;
                        var4 = false;
                        var1.rejectWithError = var4;
                        var1 = var2.bind(var3)(var1);
                        SaveGenerator(address = 163);
                    case 161:
                        return var1;
                    case 163:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun43373_ip = 174;
                            continue _fun43373
                        }
                    case 169:
                        var2 = undefined;
                        return var2;
                    case 174:
                        return var1;
                    case 177:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot20 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot20 = var0;
    var0 = function() { // Original name: saveUserGuildSettingsBulk, environment: var1
        var0 = undefined;
        var3 = _closure1_slot22;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot21 = var0;
    var0 = function() { // Original name: _saveUserGuildSettingsBulk, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot7;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun43377: for (var _fun43377_ip = 0;;) switch (_fun43377_ip) {
                    case 0:
                        StartGenerator();
                        var6 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun43377_ip = 522;
                            continue _fun43377
                        }
                    case 13:
                        var1 = global;
                        var3 = var1.clearTimeout;
                        var2 = _closure1_slot14;
                        var4 = undefined;
                        var2 = var3.bind(var4)(var2);
                        var2 = var1.Object;
                        var1 = var2.keys;
                        var1 = var1.bind(var2)(var6);
                        var2 = var1.length;
                        var1 = 0;
                        var1 = var1 !== var2;
                        var3 = _closure1_slot8;
                        var2 = var3.getCollapsedCategories;
                        var3 = var2.bind(var3)();
                        var2 = {};
                        var8 = _closure1_slot8;
                        var7 = var8.getCollapsedCategories;
                        var12 = var7.bind(var8)();
                        var10 = var12;
                        var14 = true;
                        for (var7 in var10)
                            case 105: {
                                case 114: var13 = var7;
                                var16 = var12[var13];
                                var15 = _closure1_slot13;
                                var15 = var15[var13];
                                if (var16 === var15) {
                                    _fun43377_ip = 105;
                                    continue _fun43377
                                }
                                case 133: var2[var13] = var14;
                                _fun43377_ip = 105;
                                continue _fun43377;
                            }
                    case 139:
                        var10 = _closure1_slot13;
                        for (var7 in var10)
                            case 151: {
                                case 160: var13 = var7;
                                var16 = var12[var13];
                                var15 = _closure1_slot13;
                                var15 = var15[var13];
                                if (var16 === var15) {
                                    _fun43377_ip = 151;
                                    continue _fun43377
                                }
                                case 179: var2[var13] = var14;
                                _fun43377_ip = 151;
                                continue _fun43377;
                            }
                    case 185:
                        var12 = var2;
                        var8 = 'collapsed';
                        var7 = null;
                        var2 = var1;
                        var1 = var2;
                        for (var9 in var12)
                            case 211: {
                                var1 = var2;
                                case 226: var17 = var9;
                                var16 = _closure1_slot9;
                                var15 = var16.getChannel;
                                var18 = var15.bind(var16)(var17);
                                var15 = var7 != var18;
                                if (!var15) {
                                    _fun43377_ip = 259;
                                    continue _fun43377
                                }
                                case 250: var16 = var18.guild_id;
                                var15 = var7 != var16;
                                case 259: if (!var15) {
                                    _fun43377_ip = 211;
                                    continue _fun43377
                                }
                                case 262: var15 = var18.guild_id;
                                var15 = var15 in var6;
                                if (var15) {
                                    _fun43377_ip = 285;
                                    continue _fun43377
                                }
                                case 274: var16 = var18.guild_id;
                                var15 = {};
                                var6[var16] = var15;
                                case 285: var15 = var18.guild_id;
                                var15 = var6[var15];
                                var15 = var15.channel_overrides;
                                if (!(var7 == var15)) {
                                    _fun43377_ip = 321;
                                    continue _fun43377
                                }
                                case 304: var15 = var18.guild_id;
                                var16 = var6[var15];
                                var15 = {};
                                var16.channel_overrides = var15;
                                case 321: var15 = var18.guild_id;
                                var15 = var6[var15];
                                var17 = var15.channel_overrides;
                                var16 = var18.id;
                                var15 = {};
                                var19 = var18.guild_id;
                                var19 = var6[var19];
                                var20 = var19.channel_overrides;
                                var19 = var18.id;
                                var21 = var20[var19];
                                var22 = var15;
                                var19 = copyDataProperties(var22, var21);
                                var18 = var18.id;
                                var18 = var18 in var3;
                                var15[var8] = var18;
                                var17[var16] = var15;
                                var2 = true;
                                _fun43377_ip = 211;
                                continue _fun43377;
                            }
                    case 399:
                        if (var1) {
                            _fun43377_ip = 408;
                            continue _fun43377
                        }
                    case 402:
                        var2 = new Array(0);
                        _fun43377_ip = 516;
                        continue _fun43377;
                    case 408:
                        var1 = {};
                        var22 = var1;
                        var21 = var3;
                        var3 = copyDataProperties(var22, var21);
                        _closure1_slot13 = var1;
                        var1 = _closure1_slot11;
                        var1 = delete var6[var1];
                        var3 = _closure1_slot0;
                        var7 = _closure1_slot1;
                        var1 = 10;
                        var1 = var7[var1];
                        var1 = var3.bind(var4)(var1);
                        var4 = var1.HTTP;
                        var3 = var4.patch;
                        var1 = {};
                        var5 = _closure1_slot10;
                        var5 = var5.USER_GUILD_SETTINGS_BULK;
                        var1.url = var5;
                        var5 = {};
                        var5.guilds = var6;
                        var1.body = var5;
                        var5 = false;
                        var1.rejectWithError = var5;
                        var1 = var3.bind(var4)(var1);
                        SaveGenerator(address = 505);
                    case 503:
                        return var1;
                    case 505:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun43377_ip = 519;
                            continue _fun43377
                        }
                    case 511:
                        var2 = var1.body;
                    case 516:
                        return var2;
                    case 519:
                        return var1;
                    case 522:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot22 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot22 = var0;
    var0 = function() { // Original name: handleUserGuildSettingsFullUpdate, environment: var1
        var1 = {};
        var3 = _closure1_slot8;
        var2 = var3.getCollapsedCategories;
        var4 = var2.bind(var3)();
        var5 = var1;
        var2 = copyDataProperties(var5, var4);
        _closure1_slot13 = var1;
        var0 = undefined;
        return var0;
    };
    var _closure1_slot23 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var3 = 0;
    var7 = var5[var3];
    var0 = undefined;
    var7 = var6.bind(var0)(var7);
    var _closure1_slot2 = var7;
    var7 = 1;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot3 = var7;
    var7 = 2;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot4 = var7;
    var7 = 3;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot5 = var7;
    var7 = 4;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot6 = var7;
    var7 = 5;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot7 = var7;
    var7 = 6;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot8 = var7;
    var7 = 7;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot9 = var7;
    var7 = 8;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var8 = var7.Endpoints;
    var _closure1_slot10 = var8;
    var8 = var7.FAVORITES;
    var _closure1_slot11 = var8;
    var7 = var7.ME;
    var _closure1_slot12 = var7;
    var7 = {};
    var _closure1_slot13 = var7;
    var _closure1_slot14 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var3 = var3.Millis;
    var7 = var3.SECOND;
    var3 = 15;
    var3 = var3 * var7;
    var _closure1_slot15 = var3;
    var3 = 11;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var2 = function(arg0) { // Original name: UserGuildSettingsManager, environment: var0
            _fun43380: for (var _fun43380_ip = 0;;) switch (_fun43380_ip) {
                case 0:
                    var4 = this;
                    var12 = 0;
                    var0 = copyRestArgs(var12);
                    var6 = _closure1_slot3;
                    var2 = _closure2_slot0;
                    var3 = undefined;
                    var6 = var6.bind(var3)(var4, var2);
                    var9 = new Array(0);
                    var12 = var9;
                    var11 = var0;
                    var10 = 0;
                    var0 = arraySpread(var12, var11, var10);
                    var0 = _closure1_slot5;
                    var8 = var0.bind(var3)(var2);
                    var2 = _closure1_slot4;
                    var0 = _closure1_slot16;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun43380_ip = 84;
                        continue _fun43380
                    }
                case 71:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun43380_ip = 118;
                    continue _fun43380;
                case 84:
                    var5 = global;
                    var7 = var5.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot5;
                    var5 = var5.bind(var3)(var4);
                    var5 = var5.constructor;
                    var0 = var6.bind(var7)(var8, var9, var5);
                case 118:
                    var0 = var2.bind(var3)(var4, var0);
                    var2 = {};
                    var3 = _closure1_slot18;
                    var2.CATEGORY_COLLAPSE = var3;
                    var2.CATEGORY_EXPAND = var3;
                    var2.CATEGORY_COLLAPSE_ALL = var3;
                    var2.CATEGORY_EXPAND_ALL = var3;
                    var3 = _closure1_slot17;
                    var2.POST_CONNECTION_OPEN = var3;
                    var3 = _closure1_slot23;
                    var2.USER_GUILD_SETTINGS_FULL_UPDATE = var3;
                    var0.actions = var2;
                    var2 = _closure1_slot19;
                    var0.saveUserGuildSettings = var2;
                    var1 = _closure1_slot21;
                    var0.saveUserGuildSettingsBulk = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var4 = _closure1_slot6;
        var1 = undefined;
        var3 = arg0;
        var3 = var4.bind(var1)(var2, var3);
        var0 = _closure1_slot2;
        var0 = var0.bind(var1)(var2);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = var1.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var1
        }
    });
    var12 = var3;
    var1 = new var12[var1](var11);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/UserGuildSettingsManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [7, 6, 15, 17, 18, 5, 4530, 1372, 660, 667, 507, 4262, 2]);