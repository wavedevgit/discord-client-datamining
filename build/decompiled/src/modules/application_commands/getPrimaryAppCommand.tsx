// modules/application_commands/getPrimaryAppCommand.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var9 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var10;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot2;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun64270: for (var _fun64270_ip = 0;;) switch (_fun64270_ip) {
                    case 0:
                        StartGenerator();
                        var8 = arg1;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun64270_ip = 181;
                            continue _fun64270
                        }
                    case 13:
                        var4 = _closure1_slot4;
                        var2 = var4.getChannel;
                        var1 = arg0;
                        var9 = var2.bind(var4)(var1);
                        var4 = null;
                        var1 = var4 != var9;
                        var7 = undefined;
                        var2 = undefined;
                        if (!var1) {
                            _fun64270_ip = 77;
                            continue _fun64270
                        }
                    case 46:
                        var6 = _closure1_slot11;
                        var5 = {};
                        var5.channel = var9;
                        var10 = 'channel';
                        var5.type = var10;
                        var5 = var6.bind(var7)(var5, var8);
                        var1 = var4 == var5;
                        var2 = var5;
                    case 77:
                        if (!var1) {
                            _fun64270_ip = 137;
                            continue _fun64270
                        }
                    case 80:
                        var5 = _closure1_slot5;
                        var1 = {};
                        var6 = 'application';
                        var1.type = var6;
                        var1.applicationId = var8;
                        var1 = var5.bind(var7)(var1);
                        SaveGenerator(address = 107);
                    case 105:
                        return var1;
                    case 107:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 5);
                        if (var5) {
                            _fun64270_ip = 178;
                            continue _fun64270
                        }
                    case 113:
                        var6 = _closure1_slot11;
                        var5 = {};
                        var5.channel = var9;
                        var9 = 'channel';
                        var5.type = var9;
                        var2 = var6.bind(var7)(var5, var8);
                    case 137:
                        if (!(var4 == var2)) {
                            _fun64270_ip = 175;
                            continue _fun64270
                        }
                    case 141:
                        var4 = global;
                        var5 = var4.Error;
                        var12 = _closure1_slot8;
                        var4 = var5.prototype;
                        var4 = Object.create(var4, {
                            constructor: {
                                value: var5
                            }
                        });
                        var13 = var4;
                        var3 = new var13[var5](var12, var11);
                        var3 = var3 instanceof Object ? var3 : var4;
                        throw var3;
                    case 175:
                        return var2;
                    case 178:
                        return var1;
                    case 181:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot10 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot10 = var0;
    var6 = function arg0, arg1() {
        var4 = _closure1_slot7;
        var3 = var4.query;
        var2 = {};
        var6 = _closure1_slot0;
        var7 = _closure1_slot1;
        var0 = 4;
        var0 = var7[var0];
        var5 = undefined;
        var0 = var6.bind(var5)(var0);
        var0 = var0.ApplicationCommandType;
        var1 = var0.PRIMARY_ENTRY_POINT;
        var0 = new Array(1);
        var0[0] = var1;
        var2.commandTypes = var0;
        var1 = {
            'placeholderCount': 1,
            'scoreMethod': null,
            'applicationId': null,
            'allowFetch': false,
            'allowApplicationState': true
        };
        var0 = 5;
        var0 = var7[var0];
        var0 = var6.bind(var5)(var0);
        var0 = var0.ScoreMethod;
        var0 = var0.COMMAND_ONLY;
        var1.scoreMethod = var0;
        var0 = arg1;
        var1.applicationId = var0;
        var0 = arg0;
        var0 = var3.bind(var4)(var0, var2, var1);
        var1 = var0.commands;
        var0 = 0;
        var0 = var1[var0];
        return var0;
    };
    var _closure1_slot11 = var6;
    var5 = function arg0, arg1() {
        var7 = arg1;
        var _closure2_slot0 = var7;
        var4 = _closure1_slot13;
        var3 = undefined;
        var0 = arg0;
        var0 = var4.bind(var3)(var0, var7);
        var3 = var0.commands;
        var5 = var0.loading;
        var _closure2_slot1 = var5;
        var0 = 0;
        var0 = var3[var0];
        var3 = null;
        var6 = var3 != var0;
        var _closure2_slot2 = var6;
        var4 = _closure1_slot3;
        var3 = var4.useEffect;
        var2 = new Array(3);
        var2[0] = var7;
        var2[1] = var6;
        var2[2] = var5;
        var1 = function() { // Environment: var1
            _fun64273: for (var _fun64273_ip = 0;;) switch (_fun64273_ip) {
                case 0:
                    var0 = _closure2_slot2;
                    if (var0) {
                        _fun64273_ip = 14;
                        continue _fun64273
                    }
                case 10:
                    var0 = _closure2_slot1;
                case 14:
                    if (var0) {
                        _fun64273_ip = 71;
                        continue _fun64273
                    }
                case 17:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 6;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.requestApplicationCommandIndex;
                    var0 = {};
                    var4 = 'application';
                    var0.type = var4;
                    var3 = _closure2_slot0;
                    var0.applicationId = var3;
                    var0 = var1.bind(var2)(var0);
                case 71:
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var0;
    };
    var _closure1_slot12 = var5;
    var4 = function arg0, arg1() {
        var4 = _closure1_slot6;
        var3 = {};
        var1 = _closure1_slot9;
        var3.commandTypes = var1;
        var2 = {
            'placeholderCount': 1,
            'scoreMethod': null,
            'applicationId': null,
            'allowFetch': false,
            'allowApplicationState': true
        };
        var5 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 5;
        var0 = var1[var0];
        var1 = undefined;
        var0 = var5.bind(var1)(var0);
        var0 = var0.ScoreMethod;
        var0 = var0.COMMAND_ONLY;
        var2.scoreMethod = var0;
        var0 = arg1;
        var2.applicationId = var0;
        var0 = arg0;
        var0 = var4.bind(var1)(var0, var3, var2);
        return var0;
    };
    var _closure1_slot13 = var4;
    var1 = function arg0() {
        _fun64275: for (var _fun64275_ip = 0;;) switch (_fun64275_ip) {
            case 0:
                var2 = arg0;
                var3 = null;
                if (!(var3 != var2)) {
                    _fun64275_ip = 152;
                    continue _fun64275
                }
            case 12:
                var0 = var2.integration_types;
                var0 = var3 != var0;
                if (!var0) {
                    _fun64275_ip = 78;
                    continue _fun64275
                }
            case 25:
                var5 = var2.integration_types;
                var4 = var5.includes;
                var7 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 7;
                var6 = var6[var1];
                var1 = undefined;
                var1 = var7.bind(var1)(var6);
                var1 = var1.ApplicationIntegrationType;
                var1 = var1.USER_INSTALL;
                var0 = var4.bind(var5)(var1);
            case 78:
                var1 = var2.contexts;
                var1 = var3 != var1;
                if (!var1) {
                    _fun64275_ip = 144;
                    continue _fun64275
                }
            case 91:
                var4 = var2.contexts;
                var3 = var4.includes;
                var6 = _closure1_slot0;
                var5 = _closure1_slot1;
                var2 = 4;
                var5 = var5[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var5);
                var2 = var2.InteractionContextType;
                var2 = var2.BOT_DM;
                var1 = var3.bind(var4)(var2);
            case 144:
                if (!var0) {
                    _fun64275_ip = 150;
                    continue _fun64275
                }
            case 147:
                var0 = var1;
            case 150:
                return var0;
            case 152:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot14 = var1;
    var0 = global;
    var12 = var0.Object;
    var11 = var12.defineProperty;
    var7 = {};
    var0 = true;
    var7.value = var0;
    var0 = '__esModule';
    var0 = var11.bind(var12)(var2, var0, var7);
    var0 = 0;
    var7 = var10[var0];
    var0 = undefined;
    var7 = var8.bind(var0)(var7);
    var _closure1_slot2 = var7;
    var7 = 1;
    var11 = var10[var7];
    var7 = arg3;
    var7 = var7.bind(var0)(var11);
    var _closure1_slot3 = var7;
    var7 = 2;
    var7 = var10[var7];
    var7 = var8.bind(var0)(var7);
    var _closure1_slot4 = var7;
    var7 = 3;
    var11 = var10[var7];
    var11 = var9.bind(var0)(var11);
    var12 = var11.getOrFetchApplicationCommandIndexForTarget;
    var _closure1_slot5 = var12;
    var11 = var11.useQueryState;
    var _closure1_slot6 = var11;
    var7 = var10[var7];
    var7 = var8.bind(var0)(var7);
    var _closure1_slot7 = var7;
    var7 = 'no primary app command for application';
    var _closure1_slot8 = var7;
    var8 = 4;
    var8 = var10[var8];
    var8 = var9.bind(var0)(var8);
    var8 = var8.ApplicationCommandType;
    var11 = var8.PRIMARY_ENTRY_POINT;
    var8 = new Array(1);
    var8[0] = var11;
    var _closure1_slot9 = var8;
    var8 = 8;
    var8 = var10[var8];
    var10 = var9.bind(var0)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'modules/application_commands/getPrimaryAppCommand.tsx';
    var8 = var9.bind(var10)(var8);
    var8 = function() {
        var0 = undefined;
        var3 = _closure1_slot10;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.default = var8;
    var2.NO_PRIMARY_APP_COMMAND_ERROR = var7;
    var2.queryForPrimaryAppCommand = var6;
    var2.useGetPrimaryAppCommand = var5;
    var2.useQueryForPrimaryAppCommand = var4;
    var3 = function arg0() {
        _fun64277: for (var _fun64277_ip = 0;;) switch (_fun64277_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.context;
                var1 = var0.applicationId;
                var5 = var0.botUserId;
                var0 = _closure1_slot12;
                var4 = undefined;
                var3 = var0.bind(var4)(var3, var1);
                var1 = null;
                var0 = var1 != var3;
                if (!var0) {
                    _fun64277_ip = 62;
                    continue _fun64277
                }
            case 43:
                var1 = var1 != var5;
                if (!var1) {
                    _fun64277_ip = 59;
                    continue _fun64277
                }
            case 50:
                var2 = _closure1_slot14;
                var1 = var2.bind(var4)(var3);
            case 59:
                var0 = var1;
            case 62:
                return var0;
        }
    };
    var2.useIsPrimaryAppCommandUsableInAppDM = var3;
    var2.isPrimaryAppCommandUsableInAppDM = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 31, 1372, 4674, 1645, 7602, 4678, 5350, 2]);