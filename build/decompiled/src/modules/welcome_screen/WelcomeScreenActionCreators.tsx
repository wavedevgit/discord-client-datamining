// modules/welcome_screen/WelcomeScreenActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var7;
    var0 = global;
    var8 = var0.Object;
    var5 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var7[var0];
    var0 = undefined;
    var1 = var4.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var7[var1];
    var1 = var6.bind(var0)(var1);
    var1 = var1.Endpoints;
    var _closure1_slot4 = var1;
    var1 = function() { // Environment: var3
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function*(arg0) { // Environment: var0
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun91231: for (var _fun91231_ip = 0;;) switch (_fun91231_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun91231_ip = 247;
                            continue _fun91231
                        }
                    case 10:
                        var8 = arg0;
                        var5 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var4 = 2;
                        var3 = var1[var4];
                        var1 = undefined;
                        var6 = var5.bind(var1)(var3);
                        var5 = var6.dispatch;
                        var3 = {};
                        var7 = 'WELCOME_SCREEN_FETCH_START';
                        var3.type = var7;
                        var3 = var5.bind(var6)(var3);
                    case 60: // try_start_0
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var3 = 3;
                        var3 = var6[var3];
                        var3 = var5.bind(var1)(var3);
                        var6 = var3.HTTP;
                        var5 = var6.get;
                        var3 = {
                            'url': null,
                            'oldFormErrors': true,
                            'rejectWithError': true
                        };
                        var10 = _closure1_slot4;
                        var9 = var10.GUILD_WELCOME_SCREEN;
                        var7 = var8;
                        var7 = var9.bind(var10)(var7);
                        var3.url = var7;
                        var3 = var5.bind(var6)(var3);
                        SaveGenerator(address = 133);
                    case 131:
                        return var3;
                    case 133:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 5);
                        if (var5) {
                            _fun91231_ip = 200;
                            continue _fun91231
                        }
                    case 139:
                        var6 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var5 = var5[var4];
                        var7 = var6.bind(var1)(var5);
                        var6 = var7.dispatch;
                        var5 = {};
                        var9 = 'WELCOME_SCREEN_FETCH_SUCCESS';
                        var5.type = var9;
                        var5.guildId = var8;
                        var8 = var3.body;
                        var5.welcomeScreen = var8;
                        var5 = var6.bind(var7)(var5);
                        var5 = var3.body;
                    case 197: // try_end0
                        return var5;
                    case 200:
                        return var3;
                    case 203: // catch_target0
                        CatchBlockStart(arg_register = 3);
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var2 = var2[var4];
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var5 = 'WELCOME_SCREEN_FETCH_FAIL';
                        var2.type = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    case 247:
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
    var4 = var1.bind(var0)();
    var1 = function() { // Environment: var3
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function*(arg0, arg1) { // Environment: var0
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun91235: for (var _fun91235_ip = 0;;) switch (_fun91235_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun91235_ip = 281;
                            continue _fun91235
                        }
                    case 10:
                        var8 = arg0;
                        var9 = arg1;
                        var5 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var4 = 2;
                        var3 = var1[var4];
                        var1 = undefined;
                        var6 = var5.bind(var1)(var3);
                        var5 = var6.dispatch;
                        var3 = {};
                        var7 = 'WELCOME_SCREEN_SUBMIT';
                        var3.type = var7;
                        var3 = var5.bind(var6)(var3);
                    case 63: // try_start_0
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var3 = 3;
                        var3 = var6[var3];
                        var3 = var5.bind(var1)(var3);
                        var6 = var3.HTTP;
                        var5 = var6.patch;
                        var3 = {};
                        var11 = _closure1_slot4;
                        var10 = var11.GUILD_WELCOME_SCREEN;
                        var7 = var8;
                        var7 = var10.bind(var11)(var7);
                        var3.url = var7;
                        var7 = {};
                        var10 = var9.description;
                        var7.description = var10;
                        var10 = var9.channels;
                        var7.welcome_channels = var10;
                        var9 = var9.enabled;
                        var7.enabled = var9;
                        var3.body = var7;
                        var7 = true;
                        var3.oldFormErrors = var7;
                        var3.rejectWithError = var7;
                        var3 = var5.bind(var6)(var3);
                        SaveGenerator(address = 173);
                    case 171:
                        return var3;
                    case 173:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 5);
                        if (var5) {
                            _fun91235_ip = 234;
                            continue _fun91235
                        }
                    case 179:
                        var6 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var5 = var5[var4];
                        var7 = var6.bind(var1)(var5);
                        var6 = var7.dispatch;
                        var5 = {};
                        var9 = 'WELCOME_SCREEN_SUBMIT_SUCCESS';
                        var5.type = var9;
                        var5.guildId = var8;
                        var8 = var3.body;
                        var5.welcomeScreen = var8;
                        var5 = var6.bind(var7)(var5);
                    case 232: // try_end0
                        _fun91235_ip = 278;
                        continue _fun91235;
                    case 234:
                        return var3;
                    case 237: // catch_target0
                        CatchBlockStart(arg_register = 3);
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var2 = var2[var4];
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var5 = 'WELCOME_SCREEN_SUBMIT_FAILURE';
                        var2.type = var5;
                        var2 = var3.bind(var4)(var2);
                    case 278:
                        return var1;
                    case 281:
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
    var1 = var1.bind(var0)();
    var5 = 4;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/welcome_screen/WelcomeScreenActionCreators.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function(arg0) { // Environment: var3
        _fun91237: for (var _fun91237_ip = 0;;) switch (_fun91237_ip) {
            case 0:
                var4 = arguments[1];
                var0 = undefined;
                if (!(var4 === var0)) {
                    _fun91237_ip = 11;
                    continue _fun91237
                }
            case 9:
                var4 = false;
            case 11:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 2;
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.dispatch;
                var1 = {};
                var5 = 'WELCOME_SCREEN_VIEW';
                var1.type = var5;
                var5 = arg0;
                var1.guildId = var5;
                var1.isLurking = var4;
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var2.welcomeScreenViewed = var5;
    var2.fetchWelcomeScreen = var4;
    var4 = function() { // Environment: var3
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'WELCOME_SCREEN_SETTINGS_RESET';
        var1.type = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.resetWelcomeScreen = var4;
    var4 = function() { // Environment: var3
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'WELCOME_SCREEN_SETTINGS_CLEAR';
        var1.type = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.clearWelcomeScreenSettings = var4;
    var3 = function(arg0) { // Environment: var3
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'WELCOME_SCREEN_SETTINGS_UPDATE';
        var1.type = var4;
        var4 = arg0;
        var1.settings = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.updateSettings = var3;
    var2.saveWelcomeScreen = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 660, 806, 507, 2]);