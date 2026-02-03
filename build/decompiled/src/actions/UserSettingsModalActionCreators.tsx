// actions/UserSettingsModalActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var4.bind(var0)(var1);
    var6 = var1.Endpoints;
    var _closure1_slot3 = var6;
    var6 = var1.DEVICE_TOKEN;
    var _closure1_slot4 = var6;
    var1 = var1.DEVICE_VOIP_TOKEN;
    var _closure1_slot5 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var6 = var1.DEVICE_PUSH_VOIP_PROVIDER;
    var _closure1_slot6 = var6;
    var1 = var1.getDevicePushProvider;
    var _closure1_slot7 = var1;
    var1 = {};
    var6 = function() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'USER_SETTINGS_MODAL_CLOSE';
        var1.type = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.close = var6;
    var6 = function arg0() {
        _fun59113: for (var _fun59113_ip = 0;;) switch (_fun59113_ip) {
            case 0:
                var5 = arguments[1];
                var4 = arguments[2];
                var0 = undefined;
                if (!(var5 === var0)) {
                    _fun59113_ip = 14;
                    continue _fun59113
                }
            case 12:
                var5 = null;
            case 14:
                if (!(var4 === var0)) {
                    _fun59113_ip = 20;
                    continue _fun59113
                }
            case 18:
                var4 = {};
            case 20:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 2;
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.dispatch;
                var1 = {};
                var6 = 'USER_SETTINGS_MODAL_SET_SECTION';
                var1.type = var6;
                var6 = arg0;
                var1.section = var6;
                var1.subsection = var5;
                var8 = var1;
                var7 = var4;
                var4 = copyDataProperties(var8, var7);
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var1.setSection = var6;
    var6 = function arg0() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'USER_SETTINGS_MODAL_CLEAR_SUBSECTION';
        var1.type = var4;
        var4 = arg0;
        var1.forSection = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.clearSubsection = var6;
    var6 = function arg0() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION';
        var1.type = var4;
        var4 = arg0;
        var1.forSection = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.clearScrollPosition = var6;
    var6 = function arg0() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'USER_SETTINGS_MODAL_UPDATE_ACCOUNT';
        var1.type = var4;
        var4 = arg0;
        var1.settings = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.updateAccount = var6;
    var6 = function() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'USER_SETTINGS_MODAL_SUBMIT_COMPLETE';
        var1.type = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.submitComplete = var6;
    var6 = function() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'USER_SETTINGS_MODAL_RESET';
        var1.type = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.reset = var6;
    var3 = function arg0, arg1() {
        _fun59119: for (var _fun59119_ip = 0;;) switch (_fun59119_ip) {
            case 0:
                var2 = arg0;
                var1 = this;
                var _closure2_slot0 = var1;
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 2;
                var1 = var3[var1];
                var3 = undefined;
                var6 = var4.bind(var3)(var1);
                var4 = var6.dispatch;
                var1 = {};
                var7 = 'USER_SETTINGS_MODAL_SUBMIT';
                var1.type = var7;
                var1 = var4.bind(var6)(var1);
                var10 = var2.username;
                var9 = var2.email;
                var8 = var2.emailToken;
                var7 = var2.password;
                var _closure2_slot1 = var7;
                var6 = var2.avatar;
                var _closure2_slot2 = var6;
                var1 = var2.newPassword;
                var _closure2_slot3 = var1;
                var2 = var2.discriminator;
                var4 = arg1;
                var4 = var4.close;
                var _closure2_slot4 = var4;
                var4 = {};
                var4.username = var10;
                var4.email = var9;
                var4.email_token = var8;
                var4.password = var7;
                var4.avatar = var6;
                var4.new_password = var1;
                var6 = null;
                var7 = var6 != var2;
                var1 = undefined;
                if (!var7) {
                    _fun59119_ip = 180;
                    continue _fun59119
                }
            case 167:
                var7 = '';
                var1 = undefined;
                if (!(var7 !== var2)) {
                    _fun59119_ip = 180;
                    continue _fun59119
                }
            case 177:
                var1 = var2;
            case 180:
                var4.discriminator = var1;
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var7 = 3;
                var1 = var1[var7];
                var1 = var2.bind(var3)(var1);
                var8 = var1.Storage;
                var2 = var8.get;
                var1 = _closure1_slot4;
                var1 = var2.bind(var8)(var1);
                var2 = _closure1_slot7;
                var2 = var2.bind(var3)();
                var8 = var6 != var2;
                if (!var8) {
                    _fun59119_ip = 244;
                    continue _fun59119
                }
            case 240:
                var8 = var6 != var1;
            case 244:
                if (!var8) {
                    _fun59119_ip = 259;
                    continue _fun59119
                }
            case 247:
                var4.push_provider = var2;
                var4.push_token = var1;
            case 259:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var7];
                var1 = var2.bind(var3)(var1);
                var7 = var1.Storage;
                var2 = var7.get;
                var1 = _closure1_slot5;
                var1 = var2.bind(var7)(var1);
                var2 = _closure1_slot6;
                var2 = var6 != var2;
                if (!var2) {
                    _fun59119_ip = 311;
                    continue _fun59119
                }
            case 307:
                var2 = var6 != var1;
            case 311:
                if (!var2) {
                    _fun59119_ip = 330;
                    continue _fun59119
                }
            case 314:
                var2 = _closure1_slot6;
                var4.push_voip_provider = var2;
                var4.push_voip_token = var1;
            case 330:
                var2 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 4;
                var1 = var6[var1];
                var1 = var2.bind(var3)(var1);
                var3 = var1.HTTP;
                var2 = var3.patch;
                var1 = {};
                var5 = _closure1_slot3;
                var5 = var5.ME;
                var1.url = var5;
                var5 = true;
                var1.oldFormErrors = var5;
                var1.body = var4;
                var4 = false;
                var1.rejectWithError = var4;
                var3 = var2.bind(var3)(var1);
                var2 = var3.then;
                var1 = function(arg0) { // Environment: var0
                    _fun59120: for (var _fun59120_ip = 0;;) switch (_fun59120_ip) {
                        case 0:
                            var0 = arg0;
                            var5 = var0.body;
                            var10 = var5.token;
                            var1 = delete var5.token;
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var6 = 2;
                            var7 = var2[var6];
                            var4 = undefined;
                            var9 = var3.bind(var4)(var7);
                            var8 = var9.dispatch;
                            var7 = {};
                            var11 = 'UPDATE_TOKEN';
                            var7.type = var11;
                            var7.token = var10;
                            var10 = var5.id;
                            var7.userId = var10;
                            var7 = var8.bind(var9)(var7);
                            var2 = var2[var6];
                            var7 = var3.bind(var4)(var2);
                            var3 = var7.dispatch;
                            var2 = {};
                            var8 = 'CURRENT_USER_UPDATE';
                            var2.type = var8;
                            var2.user = var5;
                            var2 = var3.bind(var7)(var2);
                            var3 = _closure2_slot2;
                            if (!(var4 !== var3)) {
                                _fun59120_ip = 166;
                                continue _fun59120
                            }
                        case 122:
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var3 = 5;
                            var3 = var8[var3];
                            var8 = var7.bind(var4)(var3);
                            var7 = var8.trackUserAvatarUpdated;
                            var3 = {};
                            var9 = var5.avatar;
                            var3.avatarHash = var9;
                            var3 = var7.bind(var8)(var3);
                        case 166:
                            var3 = _closure2_slot3;
                            var8 = null;
                            if (!(var8 != var3)) {
                                _fun59120_ip = 228;
                                continue _fun59120
                            }
                        case 176:
                            var7 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var3 = var3[var6];
                            var9 = var7.bind(var4)(var3);
                            var7 = var9.dispatch;
                            var3 = {};
                            var10 = 'USER_PASSWORD_UPDATE';
                            var3.type = var10;
                            var3.user = var5;
                            var10 = _closure2_slot3;
                            var3.newPassword = var10;
                            var3 = var7.bind(var9)(var3);
                        case 228:
                            var3 = _closure2_slot1;
                            var3 = var8 != var3;
                            if (!var3) {
                                _fun59120_ip = 247;
                                continue _fun59120
                            }
                        case 239:
                            var7 = _closure2_slot3;
                            var3 = var8 != var7;
                        case 247:
                            if (!var3) {
                                _fun59120_ip = 296;
                                continue _fun59120
                            }
                        case 250:
                            var3 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var1 = var1[var6];
                            var4 = var3.bind(var4)(var1);
                            var3 = var4.dispatch;
                            var1 = {};
                            var6 = 'PASSWORD_UPDATED';
                            var1.type = var6;
                            var5 = var5.id;
                            var1.userId = var5;
                            var1 = var3.bind(var4)(var1);
                        case 296:
                            var1 = _closure2_slot4;
                            var2 = _closure2_slot0;
                            if (var1) {
                                _fun59120_ip = 319;
                                continue _fun59120
                            }
                        case 307:
                            var1 = var2.submitComplete;
                            var1 = var1.bind(var2)();
                            _fun59120_ip = 329;
                            continue _fun59120;
                        case 319:
                            var1 = var2.close;
                            var1 = var1.bind(var2)();
                        case 329:
                            return var0;
                    }
                };
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 2;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.dispatch;
                    var1 = {};
                    var4 = 'USER_SETTINGS_MODAL_SUBMIT_FAILURE';
                    var1.type = var4;
                    var4 = var0.body;
                    var1.errors = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1.saveAccountChanges = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'actions/UserSettingsModalActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 4556, 806, 587, 507, 6940, 2]);