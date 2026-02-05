// modules/feedback/native/RequestReviewStore.tsx
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
        _fun95429: for (var _fun95429_ip = 0;;) switch (_fun95429_ip) {
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
                _fun95429_ip = 76;
                continue _fun95429;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
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
    var0 = function() {
        _fun95432: for (var _fun95432_ip = 0;;) switch (_fun95432_ip) {
            case 0:
                var1 = _closure1_slot19;
                var0 = undefined;
                var1 = var1.bind(var0)();
                var1 = _closure1_slot14;
                if (!var1) {
                    _fun95432_ip = 48;
                    continue _fun95432
                }
            case 20:
                var3 = _closure1_slot11;
                var3 = var0 !== var3;
                if (!var3) {
                    _fun95432_ip = 45;
                    continue _fun95432
                }
            case 31:
                var5 = _closure1_slot11;
                var4 = 2300;
                var3 = var5 < var4;
            case 45:
                var1 = var3;
            case 48:
                if (!var1) {
                    _fun95432_ip = 79;
                    continue _fun95432
                }
            case 51:
                var1 = global;
                var4 = var1.setTimeout;
                var3 = _closure1_slot18;
                var1 = 60000;
                var1 = var4.bind(var0)(var3, var1);
                _closure1_slot15 = var1;
            case 79:
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var0 = function() {
        _fun95433: for (var _fun95433_ip = 0;;) switch (_fun95433_ip) {
            case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 9;
                var2 = var2[var0];
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var2 = var3.getRootNavigationRef;
                var8 = var2.bind(var3)();
                var6 = {};
                var3 = null;
                var2 = var3 != var8;
                if (!var2) {
                    _fun95433_ip = 56;
                    continue _fun95433
                }
            case 46:
                var4 = var8.isReady;
                var2 = var4.bind(var8)();
            case 56:
                if (!var2) {
                    _fun95433_ip = 104;
                    continue _fun95433
                }
            case 59:
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var4 = 10;
                var4 = var7[var4];
                var7 = var5.bind(var0)(var4);
                var5 = var7.coerceGuildsRoute;
                var4 = var8.getCurrentRoute;
                var4 = var4.bind(var8)();
                var4 = var5.bind(var7)(var4);
                var2 = var3 != var4;
            case 104:
                var6.isViewingChat = var2;
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 11;
                var2 = var5[var2];
                var4 = var4.bind(var0)(var2);
                var2 = var4.getKeyboardIsOpen;
                var2 = var2.bind(var4)();
                var6.isKeyboardOpen = var2;
                var4 = _closure1_slot9;
                var2 = var4.getVoiceChannelId;
                var2 = var2.bind(var4)();
                var2 = var3 != var2;
                var6.isInVoice = var2;
                var2 = var6.isViewingChat;
                if (!var2) {
                    _fun95433_ip = 279;
                    continue _fun95433
                }
            case 176:
                var2 = var6.isKeyboardOpen;
                if (var2) {
                    _fun95433_ip = 279;
                    continue _fun95433
                }
            case 185:
                var2 = var6.isInVoice;
                if (var2) {
                    _fun95433_ip = 279;
                    continue _fun95433
                }
            case 194:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 14;
                var2 = var4[var2];
                var7 = var3.bind(var0)(var2);
                var5 = var7.track;
                var2 = _closure1_slot10;
                var2 = var2.REVIEW_REQUEST_SHOW_ATTEMPTED;
                var2 = var5.bind(var7)(var2);
                var5 = _closure1_slot13;
                var2 = 1;
                var5.revision = var2;
                var2 = _closure1_slot20;
                var2 = var2.bind(var0)();
                var2 = 8;
                var2 = var4[var2];
                var2 = var3.bind(var0)(var2);
                var2 = var2.bind(var0)();
                var2 = false;
                _closure1_slot14 = var2;
                _fun95433_ip = 369;
                continue _fun95433;
            case 279:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 14;
                var2 = var4[var2];
                var5 = var3.bind(var0)(var2);
                var4 = var5.track;
                var2 = _closure1_slot10;
                var3 = var2.REVIEW_REQUEST_DEFERRED;
                var2 = {};
                var7 = var6.isKeyboardOpen;
                var2.is_keyboard_open = var7;
                var7 = var6.isInVoice;
                var2.is_in_voice = var7;
                var6 = var6.isViewingChat;
                var2.is_viewing_chat = var6;
                var2 = var4.bind(var5)(var3, var2);
                var1 = _closure1_slot17;
                var1 = var1.bind(var0)();
            case 369:
                return var0;
        }
    };
    var _closure1_slot18 = var0;
    var8 = function() {
        var1 = _closure1_slot19;
        var0 = undefined;
        var1 = var1.bind(var0)();
        return var0;
    };
    var0 = function() {
        _fun95435: for (var _fun95435_ip = 0;;) switch (_fun95435_ip) {
            case 0:
                var2 = _closure1_slot15;
                var0 = -1;
                if (!(var0 !== var2)) {
                    _fun95435_ip = 40;
                    continue _fun95435
                }
            case 17:
                var2 = global;
                var4 = var2.clearTimeout;
                var3 = _closure1_slot15;
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                _closure1_slot15 = var0;
            case 40:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot19 = var0;
    var0 = function() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 13;
        var2 = var2[var0];
        var0 = undefined;
        var2 = var3.bind(var0)(var2);
        var4 = var2.Storage;
        var3 = var4.set;
        var2 = _closure1_slot12;
        var1 = _closure1_slot13;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var _closure1_slot20 = var0;
    var0 = global;
    var9 = var0.Object;
    var7 = var9.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var9)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 5;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = 6;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot9 = var1;
    var1 = 7;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.AnalyticEvents;
    var _closure1_slot10 = var1;
    var1 = 'RequestReviewStore';
    var _closure1_slot12 = var1;
    var7 = {
        'revision': 0,
        'firstUse': 0
    };
    var _closure1_slot13 = var7;
    var7 = false;
    var _closure1_slot14 = var7;
    var7 = -1;
    var _closure1_slot15 = var7;
    var7 = 15;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var9 = var7.Store;
    var7 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun95438: for (var _fun95438_ip = 0;;) switch (_fun95438_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot3;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot6;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot5;
                    var0 = _closure1_slot16;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun95438_ip = 69;
                        continue _fun95438
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun95438_ip = 105;
                    continue _fun95438;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot6;
                    var5 = var5.bind(var2)(var3);
                    var5 = var5.constructor;
                    var4 = arguments;
                    var0 = var6.bind(var7)(var8, var4, var5);
                case 105:
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot7;
        var2 = undefined;
        var4 = arg0;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot4;
        var4 = {};
        var5 = 'initialize';
        var4.key = var5;
        var0 = function() {
            _fun95439: for (var _fun95439_ip = 0;;) switch (_fun95439_ip) {
                case 0:
                    var4 = this;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 13;
                    var2 = var2[var0];
                    var0 = undefined;
                    var2 = var3.bind(var0)(var2);
                    var5 = var2.Storage;
                    var3 = var5.get;
                    var2 = _closure1_slot12;
                    var2 = var3.bind(var5)(var2);
                    var3 = null;
                    if (!(var3 == var2)) {
                        _fun95439_ip = 68;
                        continue _fun95439
                    }
                case 54:
                    var2 = {
                        'firstUse': 0,
                        'revision': 0
                    };
                case 68:
                    _closure1_slot13 = var2;
                    var3 = var4.waitFor;
                    var2 = _closure1_slot8;
                    var1 = _closure1_slot9;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(1);
        var0[0] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var7.bind(var0)(var9);
    var7.displayName = var1;
    var1 = 16;
    var1 = var5[var1];
    var12 = var6.bind(var0)(var1);
    var1 = {};
    var9 = function arg0() {
        _fun95440: for (var _fun95440_ip = 0;;) switch (_fun95440_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.user;
                var5 = var0.guilds;
                var2 = _closure1_slot13;
                var3 = var2.firstUse;
                var2 = 0;
                if (!(var2 === var3)) {
                    _fun95440_ip = 70;
                    continue _fun95440
                }
            case 33:
                var3 = _closure1_slot13;
                var2 = global;
                var4 = var2.Date;
                var2 = var4.now;
                var2 = var2.bind(var4)();
                var3.firstUse = var2;
                var3 = _closure1_slot20;
                var2 = undefined;
                var2 = var3.bind(var2)();
            case 70:
                var2 = {};
                var3 = _closure1_slot13;
                var4 = var3.firstUse;
                var3 = global;
                var6 = var3.Date;
                var3 = var6.now;
                var6 = var3.bind(var6)();
                var3 = 864000000;
                var3 = var6 - var3;
                var3 = var4 < var3;
                var2.isInstallOldEnough = var3;
                var4 = var5.some;
                var3 = function(arg0) { // Environment: var3
                    var0 = arg0;
                    var1 = var0.member_count;
                    var0 = 5;
                    var0 = var1 >= var0;
                    return var0;
                };
                var3 = var4.bind(var5)(var3);
                var2.isInLargeEnoughGuild = var3;
                var1 = var1.verified;
                var6 = true;
                var1 = var6 === var1;
                var2.isAccountVerified = var1;
                var1 = _closure1_slot13;
                var3 = var1.revision;
                var1 = 1;
                var1 = var3 < var1;
                var2.isNewRevision = var1;
                var1 = var2.isNewRevision;
                if (!var1) {
                    _fun95440_ip = 282;
                    continue _fun95440
                }
            case 191:
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 14;
                var3 = var3[var1];
                var1 = undefined;
                var5 = var4.bind(var1)(var3);
                var4 = var5.track;
                var1 = _closure1_slot10;
                var3 = var1.REVIEW_REQUEST_ELIGIBILITY_CHECKED;
                var1 = {};
                var1.is_hfu = var6;
                var6 = var2.isInstallOldEnough;
                var1.is_install_old_enough = var6;
                var6 = var2.isInLargeEnoughGuild;
                var1.is_in_large_enough_guild = var6;
                var6 = var2.isAccountVerified;
                var1.is_account_verified = var6;
                var1 = var4.bind(var5)(var3, var1);
            case 282:
                var1 = var2.isInstallOldEnough;
                if (!var1) {
                    _fun95440_ip = 297;
                    continue _fun95440
                }
            case 291:
                var1 = var2.isAccountVerified;
            case 297:
                if (!var1) {
                    _fun95440_ip = 306;
                    continue _fun95440
                }
            case 300:
                var1 = var2.isInLargeEnoughGuild;
            case 306:
                if (!var1) {
                    _fun95440_ip = 315;
                    continue _fun95440
                }
            case 309:
                var1 = var2.isNewRevision;
            case 315:
                _closure1_slot14 = var1;
                var1 = _closure1_slot17;
                var0 = undefined;
                var1 = var1.bind(var0)();
                return var0;
        }
    };
    var1.CONNECTION_OPEN = var9;
    var9 = function() {
        var1 = _closure1_slot17;
        var0 = undefined;
        var1 = var1.bind(var0)();
        return var0;
    };
    var1.CONNECTION_RESUMED = var9;
    var1.CONNECTION_CLOSED = var8;
    var1.CONNECTION_INTERRUPTED = var8;
    var8 = function arg0() {
        var0 = arg0;
        var1 = var0.tti;
        var _closure1_slot11 = var1;
        var1 = _closure1_slot17;
        var0 = undefined;
        var1 = var1.bind(var0)();
        return var0;
    };
    var1.TTI_RECORDED = var8;
    var3 = function arg0() {
        _fun95444: for (var _fun95444_ip = 0;;) switch (_fun95444_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.state;
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 12;
                var2 = var2[var0];
                var0 = undefined;
                var2 = var4.bind(var0)(var2);
                var2 = var2.AppStates;
                var2 = var2.ACTIVE;
                if (!(var3 !== var2)) {
                    _fun95444_ip = 59;
                    continue _fun95444
                }
            case 49:
                var2 = _closure1_slot19;
                var2 = var2.bind(var0)();
                _fun95444_ip = 67;
                continue _fun95444;
            case 59:
                var1 = _closure1_slot17;
                var1 = var1.bind(var0)();
            case 67:
                return var0;
        }
    };
    var1.APP_STATE_UPDATE = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var13 = var3;
    var11 = var1;
    var1 = new var13[var7](var12, var11, var10);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 17;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/feedback/native/RequestReviewStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1590, 1670, 660, 11255, 3920, 3919, 5403, 670, 587, 795, 566, 806, 2]);