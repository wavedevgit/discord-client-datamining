// modules/shared_space_warnings/SharedSpacesWarningManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var0 = function() {
        _fun96400: for (var _fun96400_ip = 0;;) switch (_fun96400_ip) {
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
                _fun96400_ip = 76;
                continue _fun96400;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot19 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot19 = var0;
    var0 = function arg0() {
        _fun96403: for (var _fun96403_ip = 0;;) switch (_fun96403_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.channelId;
                var7 = null;
                if (!(var7 != var5)) {
                    _fun96403_ip = 244;
                    continue _fun96403
                }
            case 19:
                var3 = _closure1_slot7;
                var1 = var3.getChannel;
                var1 = var1.bind(var3)(var5);
                if (!(var7 != var1)) {
                    _fun96403_ip = 244;
                    continue _fun96403
                }
            case 43:
                var3 = var1.isGroupDM;
                var3 = var3.bind(var1)();
                if (!var3) {
                    _fun96403_ip = 244;
                    continue _fun96403
                }
            case 59:
                var6 = var1.recipients;
                var4 = var6.filter;
                var3 = function(arg0) { // Environment: var2
                    var2 = _closure1_slot9;
                    var1 = var2.isBlocked;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var4 = var4.bind(var6)(var3);
                var6 = var1.recipients;
                var3 = var6.filter;
                var2 = function(arg0) { // Environment: var2
                    var2 = _closure1_slot9;
                    var1 = var2.isIgnored;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var3 = var3.bind(var6)(var2);
                var2 = var4.length;
                var6 = 0;
                var2 = var2 > var6;
                if (var2) {
                    _fun96403_ip = 128;
                    continue _fun96403
                }
            case 119:
                var8 = var3.length;
                var2 = var8 > var6;
            case 128:
                if (!var2) {
                    _fun96403_ip = 244;
                    continue _fun96403
                }
            case 131:
                var1 = var1.blockedUserWarningDismissed;
                if (var1) {
                    _fun96403_ip = 192;
                    continue _fun96403
                }
            case 140:
                var8 = _closure1_slot10;
                var2 = undefined;
                var2 = var8.bind(var2)(var5);
                var7 = var7 != var2;
                var6 = 0;
                if (!var7) {
                    _fun96403_ip = 163;
                    continue _fun96403
                }
            case 160:
                var6 = var2;
            case 163:
                var2 = global;
                var7 = var2.Date;
                var2 = var7.now;
                var7 = var2.bind(var7)();
                var2 = _closure1_slot16;
                var2 = var7 - var2;
                var1 = var6 > var2;
            case 192:
                if (var1) {
                    _fun96403_ip = 244;
                    continue _fun96403
                }
            case 195:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 11;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.showGdmBlockedUserModal;
                var0 = {};
                var0.channelId = var5;
                var0.blockedUserIds = var4;
                var0.ignoredUserIds = var3;
                var0 = var1.bind(var2)(var0);
            case 244:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot20 = var0;
    var0 = function arg0() {
        _fun96406: for (var _fun96406_ip = 0;;) switch (_fun96406_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.state;
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 12;
                var2 = var2[var0];
                var0 = undefined;
                var2 = var4.bind(var0)(var2);
                var2 = var2.AppStates;
                var2 = var2.ACTIVE;
                if (!(var3 === var2)) {
                    _fun96406_ip = 293;
                    continue _fun96406
                }
            case 52:
                var3 = _closure1_slot8;
                var2 = var3.getChannelId;
                var5 = var2.bind(var3)();
                var2 = null;
                if (!(var2 == var5)) {
                    _fun96406_ip = 85;
                    continue _fun96406
                }
            case 72:
                var2 = _closure1_slot14;
                var2 = var2.bind(var0)();
                _fun96406_ip = 293;
                continue _fun96406;
            case 85:
                var3 = _closure1_slot15;
                var2 = var3.getBlockedUsersForVoiceChannel;
                var7 = var2.bind(var3)(var5);
                var3 = _closure1_slot15;
                var2 = var3.getIgnoredUsersForVoiceChannel;
                var8 = var2.bind(var3)(var5);
                var2 = var7.size;
                var6 = 0;
                if (!(!(var2 > var6))) {
                    _fun96406_ip = 138;
                    continue _fun96406
                }
            case 126:
                var2 = var8.size;
                if (!(var2 > var6)) {
                    _fun96406_ip = 285;
                    continue _fun96406
                }
            case 138:
                var2 = _closure1_slot13;
                var2 = var2.bind(var0)();
                if (!var2) {
                    _fun96406_ip = 285;
                    continue _fun96406
                }
            case 152:
                var3 = _closure1_slot23;
                var2 = global;
                var9 = var2.Set;
                var2 = new Array(0);
                var12 = var2;
                var11 = var7;
                var10 = 0;
                var10 = arraySpread(var12, var11, var10);
                var12 = var2;
                var11 = var8;
                var4 = arraySpread(var12, var11, var10);
                var4 = var9.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var9
                    }
                });
                var13 = var4;
                var12 = var2;
                var2 = new var13[var9](var12, var11);
                var2 = var2 instanceof Object ? var2 : var4;
                var2 = var3.bind(var0)(var2);
                if (var2) {
                    _fun96406_ip = 285;
                    continue _fun96406
                }
            case 221:
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 13;
                var2 = var4[var2];
                var4 = var3.bind(var0)(var2);
                var3 = var4.showVoiceChannelBlockedUserWarning;
                var2 = new Array(0);
                var12 = var2;
                var11 = var7;
                var10 = 0;
                var10 = arraySpread(var12, var11, var10);
                var12 = var2;
                var11 = var8;
                var7 = arraySpread(var12, var11, var10);
                var2 = var2[var6];
                var2 = var3.bind(var4)(var5, var2);
                _fun96406_ip = 293;
                continue _fun96406;
            case 285:
                var1 = _closure1_slot14;
                var1 = var1.bind(var0)();
            case 293:
                return var0;
        }
    };
    var _closure1_slot21 = var0;
    var0 = function() {
        _fun96407: for (var _fun96407_ip = 0;;) switch (_fun96407_ip) {
            case 0:
                var2 = _closure1_slot12;
                var1 = undefined;
                var2 = var2.bind(var1)();
                var1 = null;
                var3 = var1 != var2;
                var1 = 0;
                if (!var3) {
                    _fun96407_ip = 27;
                    continue _fun96407
                }
            case 24:
                var1 = var2;
            case 27:
                var2 = global;
                var3 = var2.Date;
                var2 = var3.now;
                var2 = var2.bind(var3)();
                var0 = _closure1_slot18;
                var0 = var2 - var0;
                var0 = var1 > var0;
                return var0;
        }
    };
    var _closure1_slot22 = var0;
    var3 = function arg0() {
        _fun96408: for (var _fun96408_ip = 0;;) switch (_fun96408_ip) {
            case 0:
                var1 = _closure1_slot22;
                var0 = undefined;
                var0 = var1.bind(var0)();
                if (var0) {
                    _fun96408_ip = 57;
                    continue _fun96408
                }
            case 16:
                var1 = global;
                var3 = var1.Array;
                var2 = var3.from;
                var1 = arg0;
                var3 = var2.bind(var3)(var1);
                var2 = var3.every;
                var1 = function(arg0) { // Environment: var1
                    var3 = _closure1_slot24;
                    var2 = undefined;
                    var1 = arg0;
                    var0 = true;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var0 = var2.bind(var3)(var1);
            case 57:
                return var0;
        }
    };
    var _closure1_slot23 = var3;
    var1 = function arg0() {
        _fun96410: for (var _fun96410_ip = 0;;) switch (_fun96410_ip) {
            case 0:
                var0 = arguments[1];
                var4 = undefined;
                if (!(var0 === var4)) {
                    _fun96410_ip = 11;
                    continue _fun96410
                }
            case 9:
                var0 = false;
            case 11:
                if (var0) {
                    _fun96410_ip = 28;
                    continue _fun96410
                }
            case 14:
                var1 = _closure1_slot22;
                var1 = var1.bind(var4)();
                var0 = !var1;
            case 28:
                var0 = !var0;
                if (var0) {
                    _fun96410_ip = 92;
                    continue _fun96410
                }
            case 34:
                var3 = _closure1_slot11;
                var2 = arg0;
                var3 = var3.bind(var4)(var2);
                var2 = null;
                var4 = var2 != var3;
                var2 = 0;
                if (!var4) {
                    _fun96410_ip = 63;
                    continue _fun96410
                }
            case 60:
                var2 = var3;
            case 63:
                var3 = global;
                var4 = var3.Date;
                var3 = var4.now;
                var3 = var3.bind(var4)();
                var1 = _closure1_slot17;
                var1 = var3 - var1;
                var0 = var2 > var1;
            case 92:
                return var0;
        }
    };
    var _closure1_slot24 = var1;
    var0 = global;
    var10 = var0.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var5);
    var0 = 0;
    var5 = var7[var0];
    var0 = undefined;
    var5 = var8.bind(var0)(var5);
    var _closure1_slot2 = var5;
    var9 = 1;
    var5 = var7[var9];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot3 = var5;
    var11 = 2;
    var5 = var7[var11];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot4 = var5;
    var12 = 3;
    var5 = var7[var12];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot5 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot6 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot7 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot8 = var5;
    var5 = 7;
    var5 = var7[var5];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot9 = var5;
    var5 = 8;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var10 = var5.getChannelDismissTimestamp;
    var _closure1_slot10 = var10;
    var10 = var5.getUserDismissTimestamp;
    var _closure1_slot11 = var10;
    var10 = var5.getGlobalDismissTimestamp;
    var _closure1_slot12 = var10;
    var10 = var5.isBlockedWarningQueued;
    var _closure1_slot13 = var10;
    var5 = var5.dequeueBlockWarning;
    var _closure1_slot14 = var5;
    var5 = 9;
    var5 = var7[var5];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot15 = var5;
    var5 = 10;
    var10 = var7[var5];
    var10 = var8.bind(var0)(var10);
    var10 = var10.Millis;
    var10 = var10.DAY;
    var10 = var12 * var10;
    var _closure1_slot16 = var10;
    var10 = var7[var5];
    var10 = var8.bind(var0)(var10);
    var10 = var10.Millis;
    var10 = var10.DAY;
    var10 = var11 * var10;
    var _closure1_slot17 = var10;
    var5 = var7[var5];
    var5 = var8.bind(var0)(var5);
    var5 = var5.Millis;
    var5 = var5.HOUR;
    var5 = var9 * var5;
    var _closure1_slot18 = var5;
    var5 = 14;
    var5 = var7[var5];
    var5 = var8.bind(var0)(var5);
    var4 = function(arg0) { // Environment: var4
        var3 = function arg0() {
            _fun96412: for (var _fun96412_ip = 0;;) switch (_fun96412_ip) {
                case 0:
                    var4 = this;
                    var12 = 0;
                    var0 = copyRestArgs(var12);
                    var6 = _closure1_slot2;
                    var1 = _closure2_slot0;
                    var3 = undefined;
                    var6 = var6.bind(var3)(var4, var1);
                    var9 = new Array(0);
                    var12 = var9;
                    var11 = var0;
                    var10 = 0;
                    var0 = arraySpread(var12, var11, var10);
                    var0 = _closure1_slot5;
                    var8 = var0.bind(var3)(var1);
                    var1 = _closure1_slot4;
                    var0 = _closure1_slot19;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun96412_ip = 84;
                        continue _fun96412
                    }
                case 71:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun96412_ip = 118;
                    continue _fun96412;
                case 84:
                    var5 = global;
                    var7 = var5.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot5;
                    var5 = var5.bind(var3)(var4);
                    var5 = var5.constructor;
                    var0 = var6.bind(var7)(var8, var9, var5);
                case 118:
                    var0 = var1.bind(var3)(var4, var0);
                    var1 = {};
                    var3 = _closure1_slot20;
                    var1.CHANNEL_SELECT = var3;
                    var2 = _closure1_slot21;
                    var1.APP_STATE_UPDATE = var2;
                    var0.actions = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot6;
        var2 = undefined;
        var4 = arg0;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot3;
        var4 = {};
        var5 = 'handleBlockedOrIgnoredUserVoiceChannelJoin';
        var4.key = var5;
        var0 = function arg0, arg1() {
            _fun96413: for (var _fun96413_ip = 0;;) switch (_fun96413_ip) {
                case 0:
                    var5 = arg0;
                    var3 = arg1;
                    var2 = _closure1_slot8;
                    var1 = var2.getChannelId;
                    var2 = var1.bind(var2)();
                    if (!(var5 === var2)) {
                        _fun96413_ip = 93;
                        continue _fun96413
                    }
                case 27:
                    var4 = _closure1_slot7;
                    var1 = var4.getChannel;
                    var4 = var1.bind(var4)(var5);
                    var1 = null;
                    if (!(var1 != var4)) {
                        _fun96413_ip = 93;
                        continue _fun96413
                    }
                case 47:
                    var1 = _closure1_slot24;
                    var4 = undefined;
                    var1 = var1.bind(var4)(var3);
                    if (var1) {
                        _fun96413_ip = 93;
                        continue _fun96413
                    }
                case 61:
                    var1 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var0 = 13;
                    var0 = var5[var0];
                    var1 = var1.bind(var4)(var0);
                    var0 = var1.showVoiceChannelBlockedUserWarning;
                    var0 = var0.bind(var1)(var2, var3);
                case 93:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(1);
        var0[0] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var4 = var4.bind(var0)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {
        constructor: {
            value: var4
        }
    });
    var16 = var5;
    var4 = new var16[var4](var15);
    var4 = var4 instanceof Object ? var4 : var5;
    var5 = 15;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/shared_space_warnings/SharedSpacesWarningManager.tsx';
    var5 = var6.bind(var7)(var5);
    var2.default = var4;
    var2.voiceBlockedWarningInCooldownForUsers = var3;
    var2.userBlockedWarningInCooldown = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1372, 3519, 3102, 12564, 12562, 667, 12565, 670, 12569, 4299, 2]);