// modules/activate_device/useUserCodeSubmit.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
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
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.OAuthConstants;
    var _closure1_slot5 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/activate_device/useUserCodeSubmit.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0, arg1, arg2) { // Original name: useUserCodeSubmit, environment: var1
        var7 = arg0;
        var9 = arg1;
        var8 = arg2;
        var _closure2_slot0 = var7;
        var _closure2_slot1 = var9;
        var _closure2_slot2 = var8;
        var6 = _closure1_slot4;
        var2 = var6.useState;
        var1 = false;
        var1 = var2.bind(var6)(var1);
        var12 = _closure1_slot3;
        var10 = undefined;
        var11 = 2;
        var4 = var12.bind(var10)(var1, var11);
        var2 = 0;
        var1 = var4[var2];
        var5 = 1;
        var4 = var4[var5];
        var _closure2_slot3 = var4;
        var13 = var6.useState;
        var4 = null;
        var4 = var13.bind(var6)(var4);
        var4 = var12.bind(var10)(var4, var11);
        var2 = var4[var2];
        var4 = var4[var5];
        var _closure2_slot4 = var4;
        var5 = var6.useCallback;
        var4 = _closure1_slot2;
        var3 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun96672: for (var _fun96672_ip = 0;;) switch (_fun96672_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun96672_ip = 467;
                            continue _fun96672
                        }
                    case 10: // try_start_0
                        var2 = _closure2_slot3;
                        var5 = undefined;
                        var1 = true;
                        var1 = var2.bind(var5)(var1);
                        var2 = _closure1_slot0;
                        var4 = _closure1_slot1;
                        var1 = 5;
                        var1 = var4[var1];
                        var4 = var2.bind(var5)(var1);
                        var2 = var4.verifyUserCode;
                        var1 = _closure2_slot0;
                        var1 = var2.bind(var4)(var1);
                        SaveGenerator(address = 68);
                    case 66:
                        return var1;
                    case 68:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun96672_ip = 158;
                            continue _fun96672
                        }
                    case 74:
                        var4 = _closure2_slot3;
                        var2 = false;
                        var2 = var4.bind(var5)(var2);
                        var4 = _closure2_slot1;
                        var2 = {};
                        var6 = _closure2_slot0;
                        var2.userCode = var6;
                        var6 = var1.body;
                        var6 = var6.client_id;
                        var2.clientId = var6;
                        var6 = var1.body;
                        var6 = var6.scopes;
                        var2.scopes = var6;
                        var6 = var1.body;
                        var6 = var6.two_way_link_code;
                        var2.twoWayLinkCode = var6;
                        var2 = var4.bind(var5)(var2);
                    case 153: // try_end0
                        _fun96672_ip = 462;
                        continue _fun96672;
                    case 158:
                        return var1;
                    case 161: // catch_target0
                        CatchBlockStart(arg_register = 2);
                        var3 = var2;
                        var6 = _closure2_slot4;
                        var5 = null;
                        var4 = var5 == var2;
                        var2 = undefined;
                        var7 = undefined;
                        if (var4) {
                            _fun96672_ip = 194;
                            continue _fun96672
                        }
                    case 186:
                        var4 = var3;
                        var7 = var4.status;
                    case 194:
                        var4 = 429;
                        if (!(var4 !== var7)) {
                            _fun96672_ip = 351;
                            continue _fun96672
                        }
                    case 207:
                        var4 = 404;
                        if (!(var4 !== var7)) {
                            _fun96672_ip = 289;
                            continue _fun96672
                        }
                    case 217:
                        var4 = 400;
                        if (!(var4 !== var7)) {
                            _fun96672_ip = 289;
                            continue _fun96672
                        }
                    case 227:
                        var9 = _closure1_slot0;
                        var10 = _closure1_slot1;
                        var4 = 4;
                        var7 = var10[var4];
                        var7 = var9.bind(var2)(var7);
                        var8 = var7.intl;
                        var7 = var8.string;
                        var4 = var10[var4];
                        var4 = var9.bind(var2)(var4);
                        var4 = var4.t;
                        var4 = var4.JNQRU4;
                        var4 = var7.bind(var8)(var4);
                        _fun96672_ip = 349;
                        continue _fun96672;
                    case 289:
                        var10 = _closure1_slot0;
                        var11 = _closure1_slot1;
                        var7 = 4;
                        var8 = var11[var7];
                        var8 = var10.bind(var2)(var8);
                        var9 = var8.intl;
                        var8 = var9.string;
                        var7 = var11[var7];
                        var7 = var10.bind(var2)(var7);
                        var7 = var7.t;
                        var7 = var7.aWa1Pw;
                        var4 = var8.bind(var9)(var7);
                    case 349:
                        _fun96672_ip = 411;
                        continue _fun96672;
                    case 351:
                        var10 = _closure1_slot0;
                        var11 = _closure1_slot1;
                        var7 = 4;
                        var8 = var11[var7];
                        var8 = var10.bind(var2)(var8);
                        var9 = var8.intl;
                        var8 = var9.string;
                        var7 = var11[var7];
                        var7 = var10.bind(var2)(var7);
                        var7 = var7.t;
                        var7 = var7.BPmZvj;
                        var4 = var8.bind(var9)(var7);
                    case 411:
                        var4 = var6.bind(var2)(var4);
                        var6 = _closure2_slot3;
                        var4 = false;
                        var4 = var6.bind(var2)(var4);
                        var4 = var3;
                        var5 = var5 == var4;
                        var4 = undefined;
                        if (var5) {
                            _fun96672_ip = 444;
                            continue _fun96672
                        }
                    case 439:
                        var4 = var3.status;
                    case 444:
                        var3 = 401;
                        if (!(var3 === var4)) {
                            _fun96672_ip = 462;
                            continue _fun96672
                        }
                    case 454:
                        var1 = _closure2_slot2;
                        var1 = var1.bind(var2)();
                    case 462:
                        var1 = undefined;
                        return var1;
                    case 467:
                        return var0;
                }
            };
            return var0;
        };
        var4 = var4.bind(var10)(var3);
        var3 = new Array(3);
        var3[0] = var7;
        var3[1] = var9;
        var3[2] = var8;
        var3 = var5.bind(var6)(var4, var3);
        var _closure2_slot5 = var3;
        var5 = var6.useEffect;
        var4 = new Array(2);
        var4[0] = var7;
        var4[1] = var3;
        var0 = function() { // Environment: var0
            _fun96673: for (var _fun96673_ip = 0;;) switch (_fun96673_ip) {
                case 0:
                    var1 = _closure2_slot0;
                    var2 = var1.length;
                    var1 = _closure1_slot5;
                    var1 = var1.USER_CODE_LENGTH;
                    if (!(var2 !== var1)) {
                        _fun96673_ip = 44;
                        continue _fun96673
                    }
                case 29:
                    var3 = _closure2_slot4;
                    var2 = undefined;
                    var1 = null;
                    var1 = var3.bind(var2)(var1);
                    _fun96673_ip = 54;
                    continue _fun96673;
                case 44:
                    var1 = _closure2_slot5;
                    var0 = undefined;
                    var0 = var1.bind(var0)();
                case 54:
                    var0 = undefined;
                    return var0;
            }
        };
        var0 = var5.bind(var6)(var0, var4);
        var0 = {};
        var0.manualSubmit = var3;
        var0.error = var2;
        var0.submitting = var1;
        return var0;
    };
    var2.useUserCodeSubmit = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 12540, 1234, 5306, 2]);