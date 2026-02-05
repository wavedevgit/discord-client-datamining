// modules/notifications/native/NotificationTokenManager.tsx
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
        _fun97829: for (var _fun97829_ip = 0;;) switch (_fun97829_ip) {
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
            case 72: // try_end0
                _fun97829_ip = 76;
                continue _fun97829;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot11 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot11 = var0;
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
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.NativeModules;
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 13;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var3 = function arg0() {
            _fun97833: for (var _fun97833_ip = 0;;) switch (_fun97833_ip) {
                case 0:
                    var4 = this;
                    var12 = 0;
                    var0 = copyRestArgs(var12);
                    var7 = _closure1_slot3;
                    var2 = _closure2_slot0;
                    var3 = undefined;
                    var7 = var7.bind(var3)(var4, var2);
                    var9 = new Array(0);
                    var12 = var9;
                    var11 = var0;
                    var10 = 0;
                    var0 = arraySpread(var12, var11, var10);
                    var0 = _closure1_slot6;
                    var8 = var0.bind(var3)(var2);
                    var2 = _closure1_slot5;
                    var0 = _closure1_slot11;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun97833_ip = 86;
                        continue _fun97833
                    }
                case 73:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun97833_ip = 120;
                    continue _fun97833;
                case 86:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot6;
                    var5 = var5.bind(var3)(var4);
                    var5 = var5.constructor;
                    var0 = var6.bind(var7)(var8, var9, var5);
                case 120:
                    var0 = var2.bind(var3)(var4, var0);
                    var _closure3_slot0 = var0;
                    var2 = null;
                    var0.token = var2;
                    var3 = false;
                    var0.hasRegisterEventListener = var3;
                    var0.postConnectionOpenTimeoutID = var2;
                    var2 = function(arg0) { // Environment: var1
                        _fun97834: for (var _fun97834_ip = 0;;) switch (_fun97834_ip) {
                            case 0:
                                var1 = _closure3_slot0;
                                var2 = arg0;
                                var1.token = var2;
                                var1 = var1.canSync;
                                if (!var1) {
                                    _fun97834_ip = 39;
                                    continue _fun97834
                                }
                            case 25:
                                var1 = _closure3_slot0;
                                var0 = var1.registerToken;
                                var0 = var0.bind(var1)();
                            case 39:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.handleToken = var2;
                    var2 = function() { // Environment: var1
                        _fun97835: for (var _fun97835_ip = 0;;) switch (_fun97835_ip) {
                            case 0:
                                var1 = _closure3_slot0;
                                var2 = var1.token;
                                var1 = null;
                                if (!(var1 != var2)) {
                                    _fun97835_ip = 279;
                                    continue _fun97835
                                }
                            case 22:
                                var2 = _closure1_slot8;
                                var9 = var2.DCDNotificationCategoryUtils;
                                var8 = var9.registerNotificationReplyCategories;
                                var11 = _closure1_slot0;
                                var12 = _closure1_slot2;
                                var4 = 8;
                                var5 = var12[var4];
                                var3 = undefined;
                                var5 = var11.bind(var3)(var5);
                                var7 = var5.intl;
                                var6 = var7.string;
                                var5 = var12[var4];
                                var5 = var11.bind(var3)(var5);
                                var5 = var5.t;
                                var5 = var5.TBA5Xg;
                                var7 = var6.bind(var7)(var5);
                                var5 = var12[var4];
                                var5 = var11.bind(var3)(var5);
                                var10 = var5.intl;
                                var6 = var10.string;
                                var5 = var12[var4];
                                var5 = var11.bind(var3)(var5);
                                var5 = var5.t;
                                var5 = var5.TXNS7S;
                                var15 = var6.bind(var10)(var5);
                                var5 = var12[var4];
                                var5 = var11.bind(var3)(var5);
                                var10 = var5.intl;
                                var5 = var10.string;
                                var4 = var12[var4];
                                var4 = var11.bind(var3)(var4);
                                var4 = var4.t;
                                var4 = var4.TBA5Xg;
                                var14 = var5.bind(var10)(var4);
                                var13 = function() { // Environment: var4
                                    var0 = undefined;
                                    return var0;
                                };
                                var17 = var9;
                                var16 = var7;
                                var4 = var17[var8](var16, var15, var14, var13, var12);
                                var2 = var2.PushNotificationAndroid;
                                if (!var2) {
                                    _fun97835_ip = 238;
                                    continue _fun97835
                                }
                            case 216:
                                var2 = _closure1_slot8;
                                var4 = var2.PushNotificationAndroid;
                                var2 = var4.onRegisterNotificationToken;
                                var2 = var2.bind(var4)();
                            case 238:
                                var2 = _closure1_slot1;
                                var4 = _closure1_slot2;
                                var1 = 9;
                                var1 = var4[var1];
                                var2 = var2.bind(var3)(var1);
                                var1 = var2.registerDevice;
                                var0 = _closure3_slot0;
                                var0 = var0.token;
                                var0 = var1.bind(var2)(var0);
                            case 279:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.registerToken = var2;
                    var2 = function() { // Environment: var1
                        var1 = _closure3_slot0;
                        var0 = var1.handleSyncNoMultiAccount;
                        var0 = var0.bind(var1)();
                        var0 = undefined;
                        return var0;
                    };
                    var0.handleSyncNoMultiAccountOnLoginSuccess = var2;
                    var2 = function() { // Environment: var1
                        _fun97838: for (var _fun97838_ip = 0;;) switch (_fun97838_ip) {
                            case 0:
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 10;
                                var1 = var1[var0];
                                var0 = undefined;
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.shouldRegisterDevicePostConnectionOpen;
                                var1 = 'notification_token_manager';
                                var1 = var2.bind(var3)(var1);
                                var2 = _closure3_slot0;
                                if (var1) {
                                    _fun97838_ip = 64;
                                    continue _fun97838
                                }
                            case 52:
                                var1 = var2.handleSyncNoMultiAccount;
                                var1 = var1.bind(var2)();
                                _fun97838_ip = 96;
                                continue _fun97838;
                            case 64:
                                var1 = global;
                                var4 = var1.setTimeout;
                                var3 = var2.handleSyncNoMultiAccountOnPostConnectionOpen;
                                var1 = 5000;
                                var1 = var4.bind(var0)(var3, var1);
                                var2.postConnectionOpenTimeoutID = var1;
                            case 96:
                                return var0;
                        }
                    };
                    var0.handleSyncNoMultiAccountOnRegisterSuccess = var2;
                    var2 = function() { // Environment: var1
                        _fun97839: for (var _fun97839_ip = 0;;) switch (_fun97839_ip) {
                            case 0:
                                var0 = _closure3_slot0;
                                var2 = var0.postConnectionOpenTimeoutID;
                                var0 = null;
                                if (!(var0 != var2)) {
                                    _fun97839_ip = 60;
                                    continue _fun97839
                                }
                            case 19:
                                var2 = global;
                                var4 = var2.clearTimeout;
                                var1 = _closure3_slot0;
                                var3 = var1.postConnectionOpenTimeoutID;
                                var2 = undefined;
                                var2 = var4.bind(var2)(var3);
                                var1.postConnectionOpenTimeoutID = var0;
                                var0 = var1.handleSyncNoMultiAccount;
                                var0 = var0.bind(var1)();
                            case 60:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.handleSyncNoMultiAccountOnPostConnectionOpen = var2;
                    var2 = function() { // Environment: var1
                        _fun97840: for (var _fun97840_ip = 0;;) switch (_fun97840_ip) {
                            case 0:
                                var1 = _closure3_slot0;
                                var1 = var1.canSync;
                                if (!var1) {
                                    _fun97840_ip = 32;
                                    continue _fun97840
                                }
                            case 16:
                                var2 = _closure1_slot9;
                                var2 = var2.canUseMultiAccountNotifications;
                                var1 = !var2;
                            case 32:
                                if (!var1) {
                                    _fun97840_ip = 49;
                                    continue _fun97840
                                }
                            case 35:
                                var1 = _closure3_slot0;
                                var0 = var1.registerToken;
                                var0 = var0.bind(var1)();
                            case 49:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.handleSyncNoMultiAccount = var2;
                    var1 = function() { // Environment: var1
                        _fun97841: for (var _fun97841_ip = 0;;) switch (_fun97841_ip) {
                            case 0:
                                var1 = _closure3_slot0;
                                var1 = var1.canSync;
                                if (!var1) {
                                    _fun97841_ip = 29;
                                    continue _fun97841
                                }
                            case 16:
                                var2 = _closure1_slot9;
                                var1 = var2.canUseMultiAccountNotifications;
                            case 29:
                                if (!var1) {
                                    _fun97841_ip = 46;
                                    continue _fun97841
                                }
                            case 32:
                                var1 = _closure3_slot0;
                                var0 = var1.registerToken;
                                var0 = var0.bind(var1)();
                            case 46:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.handleSyncWithMultiAccount = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = '_initialize';
        var4.key = var0;
        var0 = function() {
            _fun97842: for (var _fun97842_ip = 0;;) switch (_fun97842_ip) {
                case 0:
                    var1 = this;
                    var2 = var1.token;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun97842_ip = 32;
                        continue _fun97842
                    }
                case 15:
                    var2 = var1.handleToken;
                    var0 = var1.token;
                    var0 = var2.bind(var1)(var0);
                case 32:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 11;
                    var5 = var4[var2];
                    var0 = undefined;
                    var8 = var3.bind(var0)(var5);
                    var7 = var8.subscribe;
                    var6 = var1.handleSyncNoMultiAccountOnLoginSuccess;
                    var5 = 'LOGIN_SUCCESS';
                    var5 = var7.bind(var8)(var5, var6);
                    var5 = var4[var2];
                    var8 = var3.bind(var0)(var5);
                    var7 = var8.subscribe;
                    var6 = var1.handleSyncNoMultiAccountOnRegisterSuccess;
                    var5 = 'REGISTER_SUCCESS';
                    var5 = var7.bind(var8)(var5, var6);
                    var5 = var4[var2];
                    var7 = var3.bind(var0)(var5);
                    var6 = var7.subscribe;
                    var5 = var1.handleSyncNoMultiAccountOnPostConnectionOpen;
                    var8 = 'POST_CONNECTION_OPEN';
                    var5 = var6.bind(var7)(var8, var5);
                    var5 = var4[var2];
                    var7 = var3.bind(var0)(var5);
                    var6 = var7.subscribe;
                    var5 = var1.handleSyncWithMultiAccount;
                    var5 = var6.bind(var7)(var8, var5);
                    var2 = var4[var2];
                    var4 = var3.bind(var0)(var2);
                    var3 = var4.subscribe;
                    var2 = var1.handleSyncWithMultiAccount;
                    var1 = 'MULTI_ACCOUNT_REMOVE_ACCOUNT';
                    var1 = var3.bind(var4)(var1, var2);
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(6);
        var0[0] = var4;
        var4 = {};
        var6 = '_terminate';
        var4.key = var6;
        var6 = function() {
            var1 = this;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 11;
            var5 = var4[var2];
            var0 = undefined;
            var8 = var3.bind(var0)(var5);
            var7 = var8.unsubscribe;
            var6 = var1.handleSyncNoMultiAccountOnLoginSuccess;
            var5 = 'LOGIN_SUCCESS';
            var5 = var7.bind(var8)(var5, var6);
            var5 = var4[var2];
            var8 = var3.bind(var0)(var5);
            var7 = var8.unsubscribe;
            var6 = var1.handleSyncNoMultiAccountOnRegisterSuccess;
            var5 = 'REGISTER_SUCCESS';
            var5 = var7.bind(var8)(var5, var6);
            var5 = var4[var2];
            var7 = var3.bind(var0)(var5);
            var6 = var7.unsubscribe;
            var5 = var1.handleSyncNoMultiAccountOnPostConnectionOpen;
            var8 = 'POST_CONNECTION_OPEN';
            var5 = var6.bind(var7)(var8, var5);
            var5 = var4[var2];
            var7 = var3.bind(var0)(var5);
            var6 = var7.unsubscribe;
            var5 = var1.handleSyncWithMultiAccount;
            var5 = var6.bind(var7)(var8, var5);
            var2 = var4[var2];
            var4 = var3.bind(var0)(var2);
            var3 = var4.unsubscribe;
            var2 = var1.handleSyncWithMultiAccount;
            var1 = 'MULTI_ACCOUNT_REMOVE_ACCOUNT';
            var1 = var3.bind(var4)(var1, var2);
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'registerListener';
        var4.key = var6;
        var6 = function() {
            _fun97844: for (var _fun97844_ip = 0;;) switch (_fun97844_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.hasRegisterEventListener;
                    if (var0) {
                        _fun97844_ip = 64;
                        continue _fun97844
                    }
                case 12:
                    var0 = true;
                    var1.hasRegisterEventListener = var0;
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 12;
                    var2 = var2[var0];
                    var0 = undefined;
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.addRegisterEventListener;
                    var1 = var1.handleToken;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                case 64:
                    var0 = global;
                    var2 = var0.Error;
                    var0 = var2.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var2
                        }
                    });
                    var4 = 'Device token listener already registered.';
                    var5 = var1;
                    var0 = new var5[var2](var4, var3);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'registerNotificationCategories';
        var4.key = var6;
        var6 = function() {
            _fun97845: for (var _fun97845_ip = 0;;) switch (_fun97845_ip) {
                case 0:
                    var1 = _closure1_slot8;
                    var2 = var1.DCDNotificationCategoryUtils;
                    var4 = var2.registerNotificationCategories;
                    var1 = var1.DCDNotificationCategoryUtils;
                    var3 = var1.registerNotificationCategoriesAndGroups;
                    var1 = null;
                    if (!(var1 == var3)) {
                        _fun97845_ip = 676;
                        continue _fun97845
                    }
                case 42:
                    if (!(var1 != var4)) {
                        _fun97845_ip = 1657;
                        continue _fun97845
                    }
                case 49:
                    var2 = {};
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var5 = 8;
                    var6 = var9[var5];
                    var1 = undefined;
                    var6 = var8.bind(var1)(var6);
                    var10 = var6.intl;
                    var7 = var10.string;
                    var6 = var9[var5];
                    var6 = var8.bind(var1)(var6);
                    var6 = var6.t;
                    var6 = var6.JJogjm;
                    var6 = var7.bind(var10)(var6);
                    var2.calls = var6;
                    var6 = var9[var5];
                    var6 = var8.bind(var1)(var6);
                    var10 = var6.intl;
                    var7 = var10.string;
                    var6 = var9[var5];
                    var6 = var8.bind(var1)(var6);
                    var6 = var6.t;
                    var6 = var6.K3lovD;
                    var6 = var7.bind(var10)(var6);
                    var2.mediaConnections = var6;
                    var6 = var9[var5];
                    var6 = var8.bind(var1)(var6);
                    var10 = var6.intl;
                    var7 = var10.string;
                    var6 = var9[var5];
                    var6 = var8.bind(var1)(var6);
                    var6 = var6.t;
                    var6 = var6.OIgYlQ;
                    var6 = var7.bind(var10)(var6);
                    var2.messages = var6;
                    var6 = var9[var5];
                    var6 = var8.bind(var1)(var6);
                    var10 = var6.intl;
                    var7 = var10.string;
                    var6 = var9[var5];
                    var6 = var8.bind(var1)(var6);
                    var6 = var6.t;
                    var6 = var6.YUU0RF;
                    var6 = var7.bind(var10)(var6);
                    var2.directMessages = var6;
                    var6 = var9[var5];
                    var6 = var8.bind(var1)(var6);
                    var10 = var6.intl;
                    var7 = var10.string;
                    var6 = var9[var5];
                    var6 = var8.bind(var1)(var6);
                    var6 = var6.t;
                    var6 = var6.TdEu5X;
                    var6 = var7.bind(var10)(var6);
                    var2.social = var6;
                    var6 = var9[var5];
                    var6 = var8.bind(var1)(var6);
                    var10 = var6.intl;
                    var7 = var10.string;
                    var6 = var9[var5];
                    var6 = var8.bind(var1)(var6);
                    var6 = var6.t;
                    var6 = var6["A/4saf"];
                    var6 = var7.bind(var10)(var6);
                    var2.gameDetection = var6;
                    var6 = var9[var5];
                    var6 = var8.bind(var1)(var6);
                    var10 = var6.intl;
                    var7 = var10.string;
                    var6 = var9[var5];
                    var6 = var8.bind(var1)(var6);
                    var6 = var6.t;
                    var6 = var6.qGRagm;
                    var6 = var7.bind(var10)(var6);
                    var2.stageLive = var6;
                    var6 = var9[var5];
                    var6 = var8.bind(var1)(var6);
                    var10 = var6.intl;
                    var7 = var10.string;
                    var6 = var9[var5];
                    var6 = var8.bind(var1)(var6);
                    var6 = var6.t;
                    var6 = var6.MfGr0a;
                    var6 = var7.bind(var10)(var6);
                    var2.guildEventLive = var6;
                    var6 = var9[var5];
                    var6 = var8.bind(var1)(var6);
                    var10 = var6.intl;
                    var7 = var10.string;
                    var6 = var9[var5];
                    var6 = var8.bind(var1)(var6);
                    var6 = var6.t;
                    var6 = var6.p5jg9S;
                    var6 = var7.bind(var10)(var6);
                    var2.guildHighlights = var6;
                    var6 = var9[var5];
                    var6 = var8.bind(var1)(var6);
                    var10 = var6.intl;
                    var7 = var10.string;
                    var6 = var9[var5];
                    var6 = var8.bind(var1)(var6);
                    var6 = var6.t;
                    var6 = var6.dl57ho;
                    var6 = var7.bind(var10)(var6);
                    var2.forumThreadCreated = var6;
                    var6 = var9[var5];
                    var6 = var8.bind(var1)(var6);
                    var10 = var6.intl;
                    var7 = var10.string;
                    var6 = var9[var5];
                    var6 = var8.bind(var1)(var6);
                    var6 = var6.t;
                    var6 = var6.BcZTKu;
                    var6 = var7.bind(var10)(var6);
                    var2.other = var6;
                    var6 = var9[var5];
                    var6 = var8.bind(var1)(var6);
                    var7 = var6.intl;
                    var6 = var7.string;
                    var5 = var9[var5];
                    var5 = var8.bind(var1)(var5);
                    var5 = var5.t;
                    var5 = var5.bcv3rp;
                    var5 = var6.bind(var7)(var5);
                    var2.otherHighPriority = var5;
                    var1 = var4.bind(var1)(var2);
                    _fun97845_ip = 1657;
                    continue _fun97845;
                case 676:
                    var2 = {};
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var4 = 8;
                    var0 = var8[var4];
                    var1 = undefined;
                    var0 = var7.bind(var1)(var0);
                    var6 = var0.intl;
                    var5 = var6.string;
                    var0 = var8[var4];
                    var0 = var7.bind(var1)(var0);
                    var0 = var0.t;
                    var0 = var0["IUH/Oe"];
                    var0 = var5.bind(var6)(var0);
                    var2.calls = var0;
                    var0 = var8[var4];
                    var0 = var7.bind(var1)(var0);
                    var6 = var0.intl;
                    var5 = var6.string;
                    var0 = var8[var4];
                    var0 = var7.bind(var1)(var0);
                    var0 = var0.t;
                    var0 = var0.VeBD1N;
                    var0 = var5.bind(var6)(var0);
                    var2.mediaConnections = var0;
                    var0 = var8[var4];
                    var0 = var7.bind(var1)(var0);
                    var6 = var0.intl;
                    var5 = var6.string;
                    var0 = var8[var4];
                    var0 = var7.bind(var1)(var0);
                    var0 = var0.t;
                    var0 = var0.OIgYlQ;
                    var0 = var5.bind(var6)(var0);
                    var2.messages = var0;
                    var0 = var8[var4];
                    var0 = var7.bind(var1)(var0);
                    var6 = var0.intl;
                    var5 = var6.string;
                    var0 = var8[var4];
                    var0 = var7.bind(var1)(var0);
                    var0 = var0.t;
                    var0 = var0.NGdNZb;
                    var0 = var5.bind(var6)(var0);
                    var2.directMessages = var0;
                    var0 = var8[var4];
                    var0 = var7.bind(var1)(var0);
                    var6 = var0.intl;
                    var5 = var6.string;
                    var0 = var8[var4];
                    var0 = var7.bind(var1)(var0);
                    var0 = var0.t;
                    var0 = var0.NxgGZA;
                    var0 = var5.bind(var6)(var0);
                    var2.friendRequests = var0;
                    var0 = var8[var4];
                    var0 = var7.bind(var1)(var0);
                    var6 = var0.intl;
                    var5 = var6.string;
                    var0 = var8[var4];
                    var0 = var7.bind(var1)(var0);
                    var0 = var0.t;
                    var0 = var0.MOjygY;
                    var0 = var5.bind(var6)(var0);
                    var2.polls = var0;
                    var0 = var8[var4];
                    var0 = var7.bind(var1)(var0);
                    var6 = var0.intl;
                    var5 = var6.string;
                    var0 = var8[var4];
                    var0 = var7.bind(var1)(var0);
                    var0 = var0.t;
                    var0 = var0.jGVzY5;
                    var0 = var5.bind(var6)(var0);
                    var2.social = var0;
                    var0 = var8[var4];
                    var0 = var7.bind(var1)(var0);
                    var6 = var0.intl;
                    var5 = var6.string;
                    var0 = var8[var4];
                    var0 = var7.bind(var1)(var0);
                    var0 = var0.t;
                    var0 = var0["4n388K"];
                    var0 = var5.bind(var6)(var0);
                    var2.stageLive = var0;
                    var0 = var8[var4];
                    var0 = var7.bind(var1)(var0);
                    var6 = var0.intl;
                    var5 = var6.string;
                    var0 = var8[var4];
                    var0 = var7.bind(var1)(var0);
                    var0 = var0.t;
                    var0 = var0["40TIqW"];
                    var0 = var5.bind(var6)(var0);
                    var2.guildEventLive = var0;
                    var0 = var8[var4];
                    var0 = var7.bind(var1)(var0);
                    var6 = var0.intl;
                    var5 = var6.string;
                    var0 = var8[var4];
                    var0 = var7.bind(var1)(var0);
                    var0 = var0.t;
                    var0 = var0.p5jg9S;
                    var0 = var5.bind(var6)(var0);
                    var2.guildHighlights = var0;
                    var0 = var8[var4];
                    var0 = var7.bind(var1)(var0);
                    var6 = var0.intl;
                    var5 = var6.string;
                    var0 = var8[var4];
                    var0 = var7.bind(var1)(var0);
                    var0 = var0.t;
                    var0 = var0.HibKoy;
                    var0 = var5.bind(var6)(var0);
                    var2.forumThreadCreated = var0;
                    var0 = var8[var4];
                    var0 = var7.bind(var1)(var0);
                    var6 = var0.intl;
                    var5 = var6.string;
                    var0 = var8[var4];
                    var0 = var7.bind(var1)(var0);
                    var0 = var0.t;
                    var0 = var0.zJlwvV;
                    var0 = var5.bind(var6)(var0);
                    var2.systemMessages = var0;
                    var0 = var8[var4];
                    var0 = var7.bind(var1)(var0);
                    var6 = var0.intl;
                    var5 = var6.string;
                    var0 = var8[var4];
                    var0 = var7.bind(var1)(var0);
                    var0 = var0.t;
                    var0 = var0.kIrLfg;
                    var0 = var5.bind(var6)(var0);
                    var2.other = var0;
                    var0 = var8[var4];
                    var0 = var7.bind(var1)(var0);
                    var6 = var0.intl;
                    var5 = var6.string;
                    var0 = var8[var4];
                    var0 = var7.bind(var1)(var0);
                    var0 = var0.t;
                    var0 = var0.BcZTKu;
                    var0 = var5.bind(var6)(var0);
                    var2.default = var0;
                    var0 = var8[var4];
                    var0 = var7.bind(var1)(var0);
                    var6 = var0.intl;
                    var5 = var6.string;
                    var0 = var8[var4];
                    var0 = var7.bind(var1)(var0);
                    var0 = var0.t;
                    var0 = var0.gHp0C4;
                    var0 = var5.bind(var6)(var0);
                    var2.reactions = var0;
                    var0 = {};
                    var5 = var8[var4];
                    var5 = var7.bind(var1)(var5);
                    var9 = var5.intl;
                    var6 = var9.string;
                    var5 = var8[var4];
                    var5 = var7.bind(var1)(var5);
                    var5 = var5.t;
                    var5 = var5.S5cB9e;
                    var5 = var6.bind(var9)(var5);
                    var0.realtime = var5;
                    var5 = var8[var4];
                    var5 = var7.bind(var1)(var5);
                    var9 = var5.intl;
                    var6 = var9.string;
                    var5 = var8[var4];
                    var5 = var7.bind(var1)(var5);
                    var5 = var5.t;
                    var5 = var5.jGVzY5;
                    var5 = var6.bind(var9)(var5);
                    var0.social = var5;
                    var5 = var8[var4];
                    var5 = var7.bind(var1)(var5);
                    var9 = var5.intl;
                    var6 = var9.string;
                    var5 = var8[var4];
                    var5 = var7.bind(var1)(var5);
                    var5 = var5.t;
                    var5 = var5["5qyruI"];
                    var5 = var6.bind(var9)(var5);
                    var0.server = var5;
                    var5 = var8[var4];
                    var5 = var7.bind(var1)(var5);
                    var6 = var5.intl;
                    var5 = var6.string;
                    var4 = var8[var4];
                    var4 = var7.bind(var1)(var4);
                    var4 = var4.t;
                    var4 = var4.BcZTKu;
                    var4 = var5.bind(var6)(var4);
                    var0.other = var4;
                    var0 = var3.bind(var1)(var2, var0);
                case 1657:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getToken';
        var4.key = var6;
        var6 = function() {
            var0 = this;
            var0 = var0.token;
            return var0;
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'canSync';
        var4.key = var6;
        var5 = function() {
            _fun97847: for (var _fun97847_ip = 0;;) switch (_fun97847_ip) {
                case 0:
                    var0 = this;
                    var0 = var0.isInitialized;
                    if (!var0) {
                        _fun97847_ip = 29;
                        continue _fun97847
                    }
                case 12:
                    var2 = _closure1_slot10;
                    var1 = var2.isAuthenticated;
                    var0 = var1.bind(var2)();
                case 29:
                    if (!var0) {
                        _fun97847_ip = 48;
                        continue _fun97847
                    }
                case 32:
                    var1 = _closure1_slot9;
                    var1 = var1.isSwitchingAccount;
                    var0 = !var1;
                case 48:
                    return var0;
            }
        };
        var4.get = var5;
        var0[5] = var4;
        var0 = var1.bind(var2)(var3, var0);
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
    var3 = 14;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/notifications/native/NotificationTokenManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 27, 10299, 1216, 1234, 11041, 12795, 806, 8646, 4017, 2]);