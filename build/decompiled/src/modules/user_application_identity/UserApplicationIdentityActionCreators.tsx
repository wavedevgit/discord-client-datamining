// modules/user_application_identity/UserApplicationIdentityActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var3 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var3;
    var _closure1_slot2 = var6;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var1);
    var0 = 0;
    var1 = var6[var0];
    var0 = undefined;
    var1 = var3.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var6[var1];
    var8 = var3.bind(var0)(var1);
    var _closure1_slot4 = var8;
    var1 = 2;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var3 = var1.Endpoints;
    var _closure1_slot5 = var3;
    var10 = var1.QueryIds;
    var3 = {};
    var1 = function arg0, arg1() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var2 = _closure1_slot3;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun117849: for (var _fun117849_ip = 0;;) switch (_fun117849_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun117849_ip = 310;
                            continue _fun117849
                        }
                    case 10:
                        var3 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var2 = 3;
                        var1 = var1[var2];
                        var4 = undefined;
                        var6 = var3.bind(var4)(var1);
                        var3 = var6.dispatch;
                        var1 = {};
                        var7 = 'USER_APPLICATION_IDENTITY_FETCH_USER_START';
                        var1.type = var7;
                        var7 = _closure2_slot0;
                        var1.userId = var7;
                        var1 = var3.bind(var6)(var1);
                    case 68: // try_start_0
                        var3 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var1 = 4;
                        var1 = var6[var1];
                        var1 = var3.bind(var4)(var1);
                        var6 = var1.HTTP;
                        var3 = var6.get;
                        var1 = {};
                        var10 = _closure1_slot5;
                        var9 = var10.USER_APPLICATION_IDENTITIES;
                        var7 = _closure2_slot0;
                        var7 = var9.bind(var10)(var7);
                        var1.url = var7;
                        var9 = {};
                        var7 = true;
                        var9.with_profiles = var7;
                        var1.query = var9;
                        var1.rejectWithError = var7;
                        var7 = _closure2_slot1;
                        var1.signal = var7;
                        var1 = var3.bind(var6)(var1);
                        SaveGenerator(address = 161);
                    case 159:
                        return var1;
                    case 161:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun117849_ip = 233;
                            continue _fun117849
                        }
                    case 167:
                        var6 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var3 = var3[var2];
                        var7 = var6.bind(var4)(var3);
                        var6 = var7.dispatch;
                        var3 = {};
                        var9 = 'USER_APPLICATION_IDENTITY_FETCH_USER_SUCCESS';
                        var3.type = var9;
                        var9 = _closure2_slot0;
                        var3.userId = var9;
                        var9 = var1.body;
                        var9 = var9.identities;
                        var3.identities = var9;
                        var3 = var6.bind(var7)(var3);
                    case 230: // try_end0
                        return var4;
                    case 233:
                        return var1;
                    case 236: // catch_target0
                        CatchBlockStart(arg_register = 1);
                        var3 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var2 = var5[var2];
                        var7 = var3.bind(var4)(var2);
                        var6 = var7.dispatch;
                        var2 = {};
                        var9 = 'USER_APPLICATION_IDENTITY_FETCH_USER_FAILURE';
                        var2.type = var9;
                        var8 = _closure2_slot0;
                        var2.userId = var8;
                        var2 = var6.bind(var7)(var2);
                        var2 = 5;
                        var2 = var5[var2];
                        var3 = var3.bind(var4)(var2);
                        var2 = var3.captureException;
                        var2 = var2.bind(var3)(var1);
                        throw var1;
                    case 310:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var3.fetchUserApplicationIdentitiesWithProfiles = var1;
    var _closure1_slot6 = var3;
    var1 = 6;
    var1 = var6[var1];
    var7 = var5.bind(var0)(var1);
    var4 = var7.createFetchStore;
    var1 = {};
    var10 = var10.USER_APPLICATION_IDENTITIES;
    var1.getQueryId = var10;
    var10 = function arg0() {
        var2 = _closure1_slot4;
        var1 = var2.getUserIdentities;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.get = var10;
    var9 = function arg0() {
        var2 = _closure1_slot6;
        var1 = var2.fetchUserApplicationIdentitiesWithProfiles;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.load = var9;
    var1 = var4.bind(var7)(var8, var1);
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_application_identity/UserApplicationIdentityActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.useUserApplicationIdentities = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 14985, 660, 806, 507, 1207, 566, 2]);