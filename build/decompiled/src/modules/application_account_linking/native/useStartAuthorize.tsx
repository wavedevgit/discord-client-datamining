// modules/application_account_linking/native/useStartAuthorize.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
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
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot5 = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/application_account_linking/native/useStartAuthorize.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun56597: for (var _fun56597_ip = 0;;) switch (_fun56597_ip) {
            case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 3;
                var1 = var2[var1];
                var2 = undefined;
                var4 = var3.bind(var2)(var1);
                var3 = var4.useAuthorizationApp;
                var1 = arg0;
                var1 = var3.bind(var4)(var1);
                var _closure2_slot0 = var1;
                var6 = null;
                var4 = var6 == var1;
                var3 = undefined;
                if (var4) {
                    _fun56597_ip = 62;
                    continue _fun56597
                }
            case 56:
                var3 = var1.connectionEntrypointUrl;
            case 62:
                var3 = var6 != var3;
                var5 = _closure1_slot0;
                var8 = _closure1_slot2;
                var4 = 4;
                var4 = var8[var4];
                var8 = var5.bind(var2)(var4);
                var5 = var8.useAuthorizedAppsToken;
                var9 = var6 == var1;
                var4 = undefined;
                if (var9) {
                    _fun56597_ip = 107;
                    continue _fun56597
                }
            case 101:
                var4 = var1.parentId;
            case 107:
                if (!(var6 == var4)) {
                    _fun56597_ip = 128;
                    continue _fun56597
                }
            case 111:
                var10 = var6 == var1;
                var9 = undefined;
                if (var10) {
                    _fun56597_ip = 125;
                    continue _fun56597
                }
            case 120:
                var9 = var1.id;
            case 125:
                var4 = var9;
            case 128:
                var4 = var5.bind(var8)(var4);
                var5 = var4.token;
                var4 = var4.fetched;
                var8 = _closure1_slot4;
                var7 = var8.useCallback;
                var0 = function() { // Environment: var0
                    var3 = _closure1_slot3;
                    var2 = undefined;
                    var1 = function*(arg0) { // Environment: var0
                        var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                            _fun56600: for (var _fun56600_ip = 0;;) switch (_fun56600_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun56600_ip = 279;
                                        continue _fun56600
                                    }
                                case 10:
                                    var7 = arg0;
                                    var1 = _closure2_slot0;
                                    var4 = null;
                                    var2 = var4 == var1;
                                    var5 = undefined;
                                    var1 = undefined;
                                    if (var2) {
                                        _fun56600_ip = 43;
                                        continue _fun56600
                                    }
                                case 33:
                                    var2 = _closure2_slot0;
                                    var1 = var2.connectionEntrypointUrl;
                                case 43:
                                    if (!(var4 != var1)) {
                                        _fun56600_ip = 274;
                                        continue _fun56600
                                    }
                                case 50: // try_start_0
                                    var3 = _closure1_slot1;
                                    var8 = _closure1_slot2;
                                    var1 = 5;
                                    var1 = var8[var1];
                                    var8 = var3.bind(var5)(var1);
                                    var3 = var8.openURL;
                                    var1 = _closure2_slot0;
                                    var1 = var1.connectionEntrypointUrl;
                                    var1 = var3.bind(var8)(var1);
                                    SaveGenerator(address = 98);
                                case 96:
                                    return var1;
                                case 98:
                                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                    if (var3) {
                                        _fun56600_ip = 264;
                                        continue _fun56600
                                    }
                                case 107:
                                    var3 = var7;
                                    var3 = var3.onConfirm;
                                    if (!(var4 != var3)) {
                                        _fun56600_ip = 133;
                                        continue _fun56600
                                    }
                                case 120:
                                    var4 = var7;
                                    var3 = var4.onConfirm;
                                    var3 = var3.bind(var4)();
                                case 133:
                                    var4 = _closure1_slot1;
                                    var8 = _closure1_slot2;
                                    var3 = 6;
                                    var3 = var8[var3];
                                    var8 = var4.bind(var5)(var3);
                                    var4 = var8.getConfig;
                                    var3 = {};
                                    var9 = 'useStartAuthorize';
                                    var3.location = var9;
                                    var3 = var4.bind(var8)(var3);
                                    var3 = var3.enabled;
                                    if (!var3) {
                                        _fun56600_ip = 259;
                                        continue _fun56600
                                    }
                                case 182:
                                    var4 = _closure1_slot1;
                                    var8 = _closure1_slot2;
                                    var3 = 7;
                                    var3 = var8[var3];
                                    var5 = var4.bind(var5)(var3);
                                    var4 = var5.track;
                                    var2 = _closure1_slot5;
                                    var3 = var2.ON_PLATFORM_ACCOUNT_LINK_FLOW_STARTED;
                                    var2 = {};
                                    var7 = var7.analyticsLocations;
                                    var2.location_stack = var7;
                                    var6 = _closure2_slot0;
                                    var6 = var6.id;
                                    var2.application_id = var6;
                                    var6 = 'web';
                                    var2.flow_type = var6;
                                    var2 = var4.bind(var5)(var3, var2);
                                case 259: // try_end0
                                    var2 = true;
                                    return var2;
                                case 264:
                                    return var1;
                                case 267: // catch_target0
                                    CatchBlockStart(arg_register = 1);
                                    var1 = false;
                                    return var1;
                                case 274:
                                    var1 = false;
                                    return var1;
                                case 279:
                                    return var0;
                            }
                        };
                        return var0;
                    };
                    var1 = var3.bind(var2)(var1);
                    var _closure3_slot0 = var1;
                    var0 = function() { // Environment: var0
                        var0 = undefined;
                        var3 = _closure3_slot0;
                        var2 = var3.apply;
                        var0 = arguments;
                        var1 = var0;
                        var0 = this;
                        var0 = var2.bind(var3)(var0, var1);
                        return var0;
                    };
                    return var0;
                };
                var2 = var0.bind(var2)();
                var0 = new Array(1);
                var0[0] = var1;
                var2 = var7.bind(var8)(var2, var0);
                var0 = {};
                var0.fetched = var4;
                if (!var4) {
                    _fun56597_ip = 191;
                    continue _fun56597
                }
            case 187:
                var4 = var6 != var5;
            case 191:
                var0.hasAlreadyLinked = var4;
                var0.canStartAuthorization = var3;
                var0.startAuthorization = var2;
                var0.connectionApp = var1;
                return var0;
        }
    };
    var2.useStartAuthorize = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 31, 660, 6845, 6846, 3103, 6847, 795, 2]);