// modules/build_overrides/ApplyBuildOverrideUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun79672: for (var _fun79672_ip = 0;;) switch (_fun79672_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun79672_ip = 226;
                            continue _fun79672
                        }
                    case 10:
                        var12 = arg0;
                        var4 = undefined;
                        var9 = undefined;
                        var3 = undefined;
                    case 19: // try_start_0
                        var10 = _closure1_slot0;
                        var11 = _closure1_slot1;
                        var1 = 3;
                        var1 = var11[var1];
                        var1 = var10.bind(var4)(var1);
                        var6 = var1.HTTP;
                        var5 = var6.put;
                        var1 = {};
                        var8 = 4;
                        var7 = var11[var8];
                        var14 = var10.bind(var4)(var7);
                        var13 = var14.getAPIEndpoint;
                        var7 = _closure1_slot5;
                        var7 = var13.bind(var14)(var7);
                        var1.url = var7;
                        var7 = {};
                        var7.overrides = var12;
                        var8 = var11[var8];
                        var8 = var10.bind(var4)(var8);
                        var8 = var8.APP_VERSION;
                        var7.version = var8;
                        var1.body = var7;
                        var7 = {};
                        var10 = _closure1_slot4;
                        var8 = var10.getToken;
                        var10 = var8.bind(var10)();
                        var9 = var10;
                        var8 = null;
                        var10 = var8 != var10;
                        var8 = '';
                        if (!var10) {
                            _fun79672_ip = 152;
                            continue _fun79672
                        }
                    case 149:
                        var8 = var9;
                    case 152:
                        var7.Authorization = var8;
                        var1.headers = var7;
                        var7 = true;
                        var1.oldFormErrors = var7;
                        var7 = false;
                        var1.rejectWithError = var7;
                        var1 = var5.bind(var6)(var1);
                        SaveGenerator(address = 184);
                    case 182:
                        return var1;
                    case 184:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 5);
                        if (var5) {
                            _fun79672_ip = 218;
                            continue _fun79672
                        }
                    case 190:
                        var3 = var1;
                        var2 = _closure1_slot2;
                        var2 = var2.bind(var4)(var1);
                        SaveGenerator(address = 206);
                    case 204:
                        return var2;
                    case 206:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                        if (var4) {
                            _fun79672_ip = 215;
                            continue _fun79672
                        }
                    case 212: // try_end0
                        return var3;
                    case 215:
                        return var2;
                    case 218:
                        return var1;
                    case 221: // catch_target0
                        CatchBlockStart(arg_register = 1);
                        return var1;
                    case 226:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot6 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot6 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun79675: for (var _fun79675_ip = 0;;) switch (_fun79675_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun79675_ip = 200;
                            continue _fun79675
                        }
                    case 10:
                        var11 = arg0;
                        var4 = undefined;
                        var3 = undefined;
                    case 17: // try_start_0
                        var9 = _closure1_slot0;
                        var10 = _closure1_slot1;
                        var1 = 3;
                        var1 = var10[var1];
                        var1 = var9.bind(var4)(var1);
                        var6 = var1.HTTP;
                        var5 = var6.put;
                        var1 = {};
                        var8 = 4;
                        var7 = var10[var8];
                        var13 = var9.bind(var4)(var7);
                        var12 = var13.getAPIEndpoint;
                        var7 = '/__development/link';
                        var7 = var12.bind(var13)(var7);
                        var1.url = var7;
                        var7 = {};
                        var7.payload = var11;
                        var12 = _closure1_slot4;
                        var11 = var12.getToken;
                        var11 = var11.bind(var12)();
                        var7.token = var11;
                        var8 = var10[var8];
                        var8 = var9.bind(var4)(var8);
                        var8 = var8.APP_VERSION;
                        var7.version = var8;
                        var1.body = var7;
                        var7 = true;
                        var1.oldFormErrors = var7;
                        var7 = false;
                        var1.rejectWithError = var7;
                        var1 = var5.bind(var6)(var1);
                        SaveGenerator(address = 158);
                    case 156:
                        return var1;
                    case 158:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 5);
                        if (var5) {
                            _fun79675_ip = 192;
                            continue _fun79675
                        }
                    case 164:
                        var3 = var1;
                        var2 = _closure1_slot2;
                        var2 = var2.bind(var4)(var1);
                        SaveGenerator(address = 180);
                    case 178:
                        return var2;
                    case 180:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                        if (var4) {
                            _fun79675_ip = 189;
                            continue _fun79675
                        }
                    case 186: // try_end0
                        return var3;
                    case 189:
                        return var2;
                    case 192:
                        return var1;
                    case 195: // catch_target0
                        CatchBlockStart(arg_register = 1);
                        return var1;
                    case 200:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot7 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot7 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun79678: for (var _fun79678_ip = 0;;) switch (_fun79678_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun79678_ip = 136;
                            continue _fun79678
                        }
                    case 10:
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot1;
                        var1 = 3;
                        var1 = var8[var1];
                        var3 = undefined;
                        var1 = var7.bind(var3)(var1);
                        var5 = var1.HTTP;
                        var4 = var5.del;
                        var1 = {
                            'url': null,
                            'oldFormErrors': true,
                            'rejectWithError': false
                        };
                        var6 = 4;
                        var6 = var8[var6];
                        var8 = var7.bind(var3)(var6);
                        var7 = var8.getAPIEndpoint;
                        var6 = _closure1_slot5;
                        var6 = var7.bind(var8)(var6);
                        var1.url = var6;
                        var1 = var4.bind(var5)(var1);
                        SaveGenerator(address = 102);
                    case 100:
                        return var1;
                    case 102:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun79678_ip = 133;
                            continue _fun79678
                        }
                    case 108:
                        var2 = _closure1_slot2;
                        var2 = var2.bind(var3)(var1);
                        SaveGenerator(address = 121);
                    case 119:
                        return var2;
                    case 121:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                        if (var3) {
                            _fun79678_ip = 130;
                            continue _fun79678
                        }
                    case 127:
                        return var1;
                    case 130:
                        return var2;
                    case 133:
                        return var1;
                    case 136:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot8 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot8 = var0;
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
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = '/__development/build_overrides';
    var _closure1_slot5 = var3;
    var3 = function() { // Environment: var1
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function*(arg0) { // Environment: var0
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun79681: for (var _fun79681_ip = 0;;) switch (_fun79681_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun79681_ip = 79;
                            continue _fun79681
                        }
                    case 7:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var1 = 2;
                        var1 = var2[var1];
                        var2 = undefined;
                        var1 = var3.bind(var2)(var1);
                        var4 = var1.default;
                        var3 = var4.setBuildOverrideCookieHeader;
                        var1 = arg0;
                        var1 = var1.headers;
                        var1 = var1["set-cookie"];
                        var1 = var3.bind(var4)(var1);
                        SaveGenerator(address = 67);
                    case 65:
                        return var1;
                    case 67:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun79681_ip = 76;
                            continue _fun79681
                        }
                    case 73:
                        return var2;
                    case 76:
                        return var1;
                    case 79:
                        return var0;
                }
            };
            return var0;
        };
        var1 = var3.bind(var2)(var1);
        var _closure2_slot0 = var1;
        var0 = function() { // Environment: var0
            var0 = undefined;
            var3 = _closure2_slot0;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        return var0;
    };
    var3 = var3.bind(var0)();
    var _closure1_slot2 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/build_overrides/ApplyBuildOverrideUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot6;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.applyStaffBuildOverride = var3;
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot7;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.applyPublicBuildOverride = var3;
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot8;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.clearBuildOverride = var3;
    var1 = function arg0() {
        _fun79686: for (var _fun79686_ip = 0;;) switch (_fun79686_ip) {
            case 0:
                var7 = _closure1_slot0;
                var8 = _closure1_slot1;
                var1 = 3;
                var1 = var8[var1];
                var6 = undefined;
                var1 = var7.bind(var6)(var1);
                var3 = var1.HTTP;
                var2 = var3.post;
                var1 = {};
                var4 = 4;
                var4 = var8[var4];
                var7 = var7.bind(var6)(var4);
                var6 = var7.getAPIEndpoint;
                var4 = '/__development/create_build_override_link';
                var4 = var6.bind(var7)(var4);
                var1.url = var4;
                var4 = arg0;
                var1.body = var4;
                var4 = {};
                var6 = _closure1_slot4;
                var5 = var6.getToken;
                var6 = var5.bind(var6)();
                var5 = null;
                var7 = var5 != var6;
                var5 = '';
                if (!var7) {
                    _fun79686_ip = 112;
                    continue _fun79686
                }
            case 109:
                var5 = var6;
            case 112:
                var4.Authorization = var5;
                var1.headers = var4;
                var4 = true;
                var1.oldFormErrors = var4;
                var4 = false;
                var1.rejectWithError = var4;
                var3 = var2.bind(var3)(var1);
                var2 = var3.then;
                var1 = function(arg0) { // Environment: var0
                    var0 = {};
                    var1 = arg0;
                    var1 = var1.body;
                    var1 = var1.url;
                    var0.url = var1;
                    var1 = false;
                    var0.error = var1;
                    return var0;
                };
                var0 = function(arg0) { // Environment: var0
                    _fun79688: for (var _fun79688_ip = 0;;) switch (_fun79688_ip) {
                        case 0:
                            var2 = arg0;
                            var1 = var2.status;
                            var0 = 400;
                            if (!(var0 !== var1)) {
                                _fun79688_ip = 66;
                                continue _fun79688
                            }
                        case 18:
                            var0 = {};
                            var1 = false;
                            var0.url = var1;
                            var5 = var2.status;
                            var1 = global;
                            var1 = var1.HermesInternal;
                            var4 = var1.concat;
                            var3 = 'Error making API request (';
                            var1 = ')';
                            var1 = var4.bind(var3)(var5, var1);
                            var0.error = var1;
                            _fun79688_ip = 86;
                            continue _fun79688;
                        case 66:
                            var1 = {};
                            var3 = false;
                            var1.url = var3;
                            var2 = var2.body;
                            var1.error = var2;
                            var0 = var1;
                        case 86:
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.getPublicBuildOverrideLink = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 1216, 10146, 507, 1592, 2]);