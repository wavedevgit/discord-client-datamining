// modules/auth_sessions/AuthSessionsActionCreators.tsx
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
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun82669: for (var _fun82669_ip = 0;;) switch (_fun82669_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun82669_ip = 191;
                            continue _fun82669
                        }
                    case 10:
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 2;
                        var1 = var4[var1];
                        var4 = undefined;
                        var1 = var3.bind(var4)(var1);
                        var5 = var1.HTTP;
                        var3 = var5.get;
                        var1 = {};
                        var6 = _closure1_slot4;
                        var6 = var6.AUTH_SESSIONS;
                        var1.url = var6;
                        var6 = false;
                        var1.rejectWithError = var6;
                        var1 = var3.bind(var5)(var1);
                        SaveGenerator(address = 76);
                    case 74:
                        return var1;
                    case 76:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun82669_ip = 188;
                            continue _fun82669
                        }
                    case 82:
                        var6 = null;
                        var3 = var6 != var1;
                        if (!var3) {
                            _fun82669_ip = 97;
                            continue _fun82669
                        }
                    case 91:
                        var3 = var1.ok;
                    case 97:
                        if (!var3) {
                            _fun82669_ip = 124;
                            continue _fun82669
                        }
                    case 100:
                        var7 = var1.body;
                        var8 = var6 == var7;
                        var5 = undefined;
                        if (var8) {
                            _fun82669_ip = 120;
                            continue _fun82669
                        }
                    case 114:
                        var5 = var7.user_sessions;
                    case 120:
                        var3 = var6 != var5;
                    case 124:
                        if (!var3) {
                            _fun82669_ip = 185;
                            continue _fun82669
                        }
                    case 127:
                        var3 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var2 = 3;
                        var2 = var5[var2];
                        var4 = var3.bind(var4)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var5 = 'FETCH_AUTH_SESSIONS_SUCCESS';
                        var2.type = var5;
                        var5 = var1.body;
                        var5 = var5.user_sessions;
                        var2.sessions = var5;
                        var2 = var3.bind(var4)(var2);
                    case 185:
                        return var1;
                    case 188:
                        return var1;
                    case 191:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot5 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot5 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun82672: for (var _fun82672_ip = 0;;) switch (_fun82672_ip) {
                    case 0:
                        StartGenerator();
                        var3 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun82672_ip = 223;
                            continue _fun82672
                        }
                    case 13:
                        var1 = global;
                        var2 = var1.Array;
                        var1 = var2.isArray;
                        var1 = var1.bind(var2)(var3);
                        if (var1) {
                            _fun82672_ip = 44;
                            continue _fun82672
                        }
                    case 34:
                        var5 = new Array(1);
                        var5[0] = var3;
                        _fun82672_ip = 61;
                        continue _fun82672;
                    case 44:
                        var2 = var3.length;
                        var1 = 0;
                        var5 = var3;
                        if (!(var1 !== var2)) {
                            _fun82672_ip = 218;
                            continue _fun82672
                        }
                    case 61:
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 2;
                        var1 = var4[var1];
                        var4 = undefined;
                        var1 = var3.bind(var4)(var1);
                        var6 = var1.HTTP;
                        var3 = var6.post;
                        var1 = {};
                        var7 = _closure1_slot4;
                        var7 = var7.AUTH_SESSIONS_LOGOUT;
                        var1.url = var7;
                        var7 = {};
                        var7.session_id_hashes = var5;
                        var1.body = var7;
                        var7 = false;
                        var1.rejectWithError = var7;
                        var1 = var3.bind(var6)(var1);
                        SaveGenerator(address = 141);
                    case 139:
                        return var1;
                    case 141:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun82672_ip = 215;
                            continue _fun82672
                        }
                    case 147:
                        var3 = null;
                        var3 = var3 != var1;
                        if (!var3) {
                            _fun82672_ip = 162;
                            continue _fun82672
                        }
                    case 156:
                        var3 = var1.ok;
                    case 162:
                        if (!var3) {
                            _fun82672_ip = 212;
                            continue _fun82672
                        }
                    case 165:
                        var3 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var2 = 3;
                        var2 = var6[var2];
                        var4 = var3.bind(var4)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var6 = 'LOGOUT_AUTH_SESSIONS_SUCCESS';
                        var2.type = var6;
                        var2.sessionIdHashes = var5;
                        var2 = var3.bind(var4)(var2);
                    case 212:
                        return var1;
                    case 215:
                        return var1;
                    case 218:
                        var1 = undefined;
                        return var1;
                    case 223:
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.Endpoints;
    var _closure1_slot4 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/auth_sessions/AuthSessionsActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot5;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.fetchAuthSessions = var3;
    var3 = function() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'FETCH_AUTH_SESSIONS_SUCCESS';
        var1.type = var4;
        var4 = new Array(0);
        var1.sessions = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.clearAuthSessions = var3;
    var1 = function() {
        var0 = undefined;
        var3 = _closure1_slot6;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.logOutSessions = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 660, 507, 806, 2]);