// modules/notifications/settings_unread_notice/UnreadSettingNoticeStore2.tsx
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
        _fun77152: for (var _fun77152_ip = 0;;) switch (_fun77152_ip) {
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
                _fun77152_ip = 76;
                continue _fun77152;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot25 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot25 = var0;
    var0 = function() {
        _fun77155: for (var _fun77155_ip = 0;;) switch (_fun77155_ip) {
            case 0:
                var1 = _closure1_slot21;
                var0 = null;
                if (!(var0 != var1)) {
                    _fun77155_ip = 183;
                    continue _fun77155
                }
            case 16:
                var3 = _closure1_slot29;
                var1 = _closure1_slot21;
                var0 = undefined;
                var1 = var3.bind(var0)(var1);
                if (var1) {
                    _fun77155_ip = 38;
                    continue _fun77155
                }
            case 34:
                var1 = false;
                return var1;
            case 38:
                var3 = _closure1_slot28;
                var1 = _closure1_slot21;
                var4 = var3.bind(var0)(var1);
                var5 = var4.lastActionTime;
                var1 = global;
                var6 = var1.Date;
                var3 = var6.now;
                var6 = var3.bind(var6)();
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var3 = 13;
                var3 = var8[var3];
                var3 = var7.bind(var0)(var3);
                var3 = var3.Millis;
                var3 = var3.DAY;
                var3 = var6 - var3;
                if (!(var5 > var3)) {
                    _fun77155_ip = 128;
                    continue _fun77155
                }
            case 114:
                var5 = var4.viewDuration;
                var3 = _closure1_slot17;
                if (!(!(var5 > var3))) {
                    _fun77155_ip = 179;
                    continue _fun77155
                }
            case 128:
                var3 = var1.Date;
                var1 = var3.now;
                var1 = var1.bind(var3)();
                var4.lastActionTime = var1;
                var5 = var4.viewDuration;
                var3 = _closure1_slot22;
                var3 = var1 - var3;
                var3 = var5 + var3;
                var4.viewDuration = var3;
                _closure1_slot22 = var1;
                return var0;
            case 179:
                var0 = false;
                return var0;
            case 183:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot26 = var0;
    var0 = function() {
        _fun77156: for (var _fun77156_ip = 0;;) switch (_fun77156_ip) {
            case 0:
                var2 = _closure1_slot23;
                var0 = 0;
                if (!(var0 !== var2)) {
                    _fun77156_ip = 36;
                    continue _fun77156
                }
            case 13:
                var2 = global;
                var4 = var2.clearInterval;
                var3 = _closure1_slot23;
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                _closure1_slot23 = var0;
            case 36:
                var0 = _closure1_slot12;
                var0 = var0.useNewNotifications;
                if (!var0) {
                    _fun77156_ip = 117;
                    continue _fun77156
                }
            case 49:
                var0 = global;
                var4 = var0.setInterval;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var0 = 13;
                var0 = var3[var0];
                var3 = undefined;
                var0 = var2.bind(var3)(var0);
                var0 = var0.Millis;
                var2 = var0.SECOND;
                var0 = 15;
                var2 = var0 * var2;
                var0 = function() { // Environment: var0
                    _fun77157: for (var _fun77157_ip = 0;;) switch (_fun77157_ip) {
                        case 0:
                            var2 = _closure1_slot26;
                            var0 = undefined;
                            var2 = var2.bind(var0)();
                            if (!var2) {
                                _fun77157_ip = 30;
                                continue _fun77157
                            }
                        case 16:
                            var2 = _closure1_slot24;
                            var1 = var2.emitChange;
                            var1 = var1.bind(var2)();
                        case 30:
                            return var0;
                    }
                };
                var0 = var4.bind(var3)(var0, var2);
                _closure1_slot23 = var0;
            case 117:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot27 = var0;
    var0 = function arg0() {
        _fun77158: for (var _fun77158_ip = 0;;) switch (_fun77158_ip) {
            case 0:
                var1 = arg0;
                var2 = _closure1_slot19;
                var2 = var2.channels;
                var2 = var1 in var2;
                if (var2) {
                    _fun77158_ip = 51;
                    continue _fun77158
                }
            case 23:
                var2 = _closure1_slot19;
                var3 = var2.channels;
                var2 = {
                    'lastActionTime': 0,
                    'viewDuration': 0,
                    'numSends': 0
                };
                var3[var1] = var2;
            case 51:
                var0 = _closure1_slot19;
                var0 = var0.channels;
                var0 = var0[var1];
                return var0;
        }
    };
    var _closure1_slot28 = var0;
    var0 = function arg0() {
        _fun77159: for (var _fun77159_ip = 0;;) switch (_fun77159_ip) {
            case 0:
                var3 = arg0;
                var0 = _closure1_slot12;
                var0 = var0.useNewNotifications;
                if (var0) {
                    _fun77159_ip = 23;
                    continue _fun77159
                }
            case 19:
                var0 = false;
                return var0;
            case 23:
                var2 = _closure1_slot20;
                var0 = var2.has;
                var0 = var0.bind(var2)(var3);
                if (var0) {
                    _fun77159_ip = 250;
                    continue _fun77159
                }
            case 43:
                var2 = _closure1_slot9;
                var0 = var2.getBasicChannel;
                var0 = var0.bind(var2)(var3);
                var3 = null;
                if (!(var3 != var0)) {
                    _fun77159_ip = 246;
                    continue _fun77159
                }
            case 67:
                var2 = var0.guild_id;
                if (!(var3 != var2)) {
                    _fun77159_ip = 246;
                    continue _fun77159
                }
            case 79:
                var5 = _closure1_slot12;
                var4 = var5.isGuildOrCategoryOrChannelMuted;
                var3 = var0.guild_id;
                var2 = var0.id;
                var2 = var4.bind(var5)(var3, var2);
                if (var2) {
                    _fun77159_ip = 242;
                    continue _fun77159
                }
            case 111:
                var4 = _closure1_slot30;
                var3 = var0.guild_id;
                var2 = var0.id;
                var5 = undefined;
                var2 = var4.bind(var5)(var3, var2);
                if (var2) {
                    _fun77159_ip = 238;
                    continue _fun77159
                }
            case 136:
                var4 = _closure1_slot30;
                var3 = var0.guild_id;
                var2 = var0.parent_id;
                var2 = var4.bind(var5)(var3, var2);
                if (var2) {
                    _fun77159_ip = 234;
                    continue _fun77159
                }
            case 160:
                var3 = _closure1_slot12;
                var2 = var3.resolveUnreadSetting;
                var2 = var2.bind(var3)(var0);
                var5 = _closure1_slot12;
                var4 = var5.getChannelUnreadSetting;
                var3 = var0.guild_id;
                var0 = var0.id;
                var3 = var4.bind(var5)(var3, var0);
                var0 = _closure1_slot14;
                var0 = var0.UNSET;
                var0 = var3 === var0;
                if (!var0) {
                    _fun77159_ip = 232;
                    continue _fun77159
                }
            case 218:
                var1 = _closure1_slot14;
                var1 = var1.ALL_MESSAGES;
                var0 = var2 !== var1;
            case 232:
                return var0;
            case 234:
                var0 = false;
                return var0;
            case 238:
                var0 = false;
                return var0;
            case 242:
                var0 = false;
                return var0;
            case 246:
                var0 = false;
                return var0;
            case 250:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot29 = var0;
    var0 = function arg0, arg1() {
        _fun77160: for (var _fun77160_ip = 0;;) switch (_fun77160_ip) {
            case 0:
                var1 = arg1;
                var5 = null;
                if (!(var5 != var1)) {
                    _fun77160_ip = 166;
                    continue _fun77160
                }
            case 12:
                var4 = _closure1_slot12;
                var2 = var4.getChannelOverrides;
                var0 = arg0;
                var0 = var2.bind(var4)(var0);
                var4 = var0[var1];
                var0 = var5 != var4;
                if (!var0) {
                    _fun77160_ip = 164;
                    continue _fun77160
                }
            case 44:
                var1 = var4.message_notifications;
                var1 = var5 != var1;
                if (!var1) {
                    _fun77160_ip = 77;
                    continue _fun77160
                }
            case 57:
                var6 = var4.message_notifications;
                var2 = _closure1_slot13;
                var2 = var2.NULL;
                var1 = var6 !== var2;
            case 77:
                if (var1) {
                    _fun77160_ip = 161;
                    continue _fun77160
                }
            case 80:
                var2 = var4.flags;
                var2 = var5 == var2;
                if (var2) {
                    _fun77160_ip = 158;
                    continue _fun77160
                }
            case 92:
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var5 = 15;
                var6 = var6[var5];
                var5 = undefined;
                var6 = var7.bind(var5)(var6);
                var5 = var6.hasAnyFlag;
                var4 = var4.flags;
                var7 = _closure1_slot15;
                var7 = var7.UNREADS_ALL_MESSAGES;
                var3 = _closure1_slot15;
                var3 = var3.UNREADS_ONLY_MENTIONS;
                var3 = var7 | var3;
                var3 = var5.bind(var6)(var4, var3);
                var2 = !var3;
            case 158:
                var1 = !var2;
            case 161:
                var0 = var1;
            case 164:
                return var0;
            case 166:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot30 = var0;
    var7 = global;
    var9 = var7.Object;
    var8 = var9.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var1);
    var1 = 0;
    var8 = var5[var1];
    var0 = undefined;
    var8 = var6.bind(var0)(var8);
    var _closure1_slot3 = var8;
    var12 = 1;
    var8 = var5[var12];
    var8 = var6.bind(var0)(var8);
    var _closure1_slot4 = var8;
    var15 = 2;
    var8 = var5[var15];
    var8 = var6.bind(var0)(var8);
    var _closure1_slot5 = var8;
    var8 = 3;
    var8 = var5[var8];
    var8 = var6.bind(var0)(var8);
    var _closure1_slot6 = var8;
    var8 = 4;
    var8 = var5[var8];
    var8 = var6.bind(var0)(var8);
    var _closure1_slot7 = var8;
    var10 = 5;
    var8 = var5[var10];
    var8 = var6.bind(var0)(var8);
    var _closure1_slot8 = var8;
    var8 = 6;
    var8 = var5[var8];
    var8 = var6.bind(var0)(var8);
    var _closure1_slot9 = var8;
    var8 = 7;
    var8 = var5[var8];
    var8 = var6.bind(var0)(var8);
    var _closure1_slot10 = var8;
    var8 = 8;
    var8 = var5[var8];
    var8 = var6.bind(var0)(var8);
    var _closure1_slot11 = var8;
    var8 = 9;
    var8 = var5[var8];
    var8 = var6.bind(var0)(var8);
    var _closure1_slot12 = var8;
    var13 = 10;
    var8 = var5[var13];
    var8 = var4.bind(var0)(var8);
    var8 = var8.UserNotificationSettings;
    var _closure1_slot13 = var8;
    var8 = 11;
    var8 = var5[var8];
    var8 = var4.bind(var0)(var8);
    var8 = var8.UnreadSetting;
    var _closure1_slot14 = var8;
    var8 = 12;
    var8 = var5[var8];
    var8 = var4.bind(var0)(var8);
    var8 = var8.ChannelNotificationSettingsFlags;
    var _closure1_slot15 = var8;
    var9 = {};
    var8 = 13;
    var11 = var5[var8];
    var11 = var6.bind(var0)(var11);
    var11 = var11.Millis;
    var11 = var11.HOUR;
    var11 = var12 * var11;
    var9.timeSinceJoin = var11;
    var9.sends = var12;
    var11 = var5[var8];
    var11 = var6.bind(var0)(var11);
    var11 = var11.Millis;
    var11 = var11.MINUTE;
    var11 = var12 * var11;
    var9.viewTime = var11;
    var11 = new Array(4);
    var11[0] = var9;
    var9 = {};
    var14 = var5[var8];
    var14 = var6.bind(var0)(var14);
    var14 = var14.Millis;
    var14 = var14.DAY;
    var14 = var12 * var14;
    var9.timeSinceJoin = var14;
    var9.sends = var15;
    var14 = var5[var8];
    var14 = var6.bind(var0)(var14);
    var14 = var14.Millis;
    var14 = var14.MINUTE;
    var14 = var15 * var14;
    var9.viewTime = var14;
    var11[1] = var9;
    var9 = {};
    var14 = var5[var8];
    var14 = var6.bind(var0)(var14);
    var14 = var14.Millis;
    var14 = var14.WEEK;
    var14 = var12 * var14;
    var9.timeSinceJoin = var14;
    var9.sends = var10;
    var14 = var5[var8];
    var14 = var6.bind(var0)(var14);
    var14 = var14.Millis;
    var14 = var14.MINUTE;
    var14 = var10 * var14;
    var9.viewTime = var14;
    var11[2] = var9;
    var9 = {};
    var14 = var5[var8];
    var14 = var6.bind(var0)(var14);
    var14 = var14.Millis;
    var14 = var14.DAYS_30;
    var14 = var12 * var14;
    var9.timeSinceJoin = var14;
    var9.sends = var13;
    var13 = var5[var8];
    var13 = var6.bind(var0)(var13);
    var13 = var13.Millis;
    var14 = var13.MINUTE;
    var13 = 30;
    var13 = var13 * var14;
    var9.viewTime = var13;
    var11[3] = var9;
    var _closure1_slot16 = var11;
    var9 = var11.length;
    var9 = var9 - var12;
    var9 = var11[var9];
    var9 = var9.viewTime;
    var9 = var10 * var9;
    var _closure1_slot17 = var9;
    var8 = var5[var8];
    var8 = var6.bind(var0)(var8);
    var8 = var8.Millis;
    var8 = var8.WEEK;
    var _closure1_slot18 = var8;
    var8 = {};
    var9 = {};
    var8.channels = var9;
    var _closure1_slot19 = var8;
    var7 = var7.Set;
    var8 = var7.prototype;
    var8 = Object.create(var8, {
        constructor: {
            value: var7
        }
    });
    var19 = var8;
    var7 = new var19[var7](var18);
    var7 = var7 instanceof Object ? var7 : var8;
    var _closure1_slot20 = var7;
    var7 = null;
    var _closure1_slot21 = var7;
    var _closure1_slot22 = var1;
    var _closure1_slot23 = var1;
    var1 = 17;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.PersistedStore;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun77162: for (var _fun77162_ip = 0;;) switch (_fun77162_ip) {
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
                    var0 = _closure1_slot25;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun77162_ip = 69;
                        continue _fun77162
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun77162_ip = 105;
                    continue _fun77162;
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
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function arg0() {
            _fun77163: for (var _fun77163_ip = 0;;) switch (_fun77163_ip) {
                case 0:
                    var0 = arg0;
                    var6 = this;
                    var1 = null;
                    if (!(var1 != var0)) {
                        _fun77163_ip = 31;
                        continue _fun77163
                    }
                case 12:
                    var1 = _closure1_slot19;
                    var0 = var0.channels;
                    var1.channels = var0;
                case 31:
                    var3 = var6.syncWith;
                    var1 = _closure1_slot12;
                    var2 = new Array(1);
                    var2[0] = var1;
                    var1 = _closure1_slot27;
                    var1 = var3.bind(var6)(var2, var1);
                    var5 = var6.waitFor;
                    var11 = _closure1_slot8;
                    var10 = _closure1_slot9;
                    var9 = _closure1_slot10;
                    var8 = _closure1_slot11;
                    var7 = _closure1_slot12;
                    var12 = var6;
                    var0 = var12[var5](var11, var10, var9, var8, var7, var6);
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(4);
        var0[0] = var4;
        var4 = {};
        var6 = 'getState';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot19;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getLastActionTime';
        var4.key = var6;
        var6 = function arg0() {
            _fun77165: for (var _fun77165_ip = 0;;) switch (_fun77165_ip) {
                case 0:
                    var0 = _closure1_slot19;
                    var1 = var0.channels;
                    var0 = arg0;
                    var2 = var1[var0];
                    var0 = null;
                    var3 = var0 == var2;
                    var1 = undefined;
                    if (var3) {
                        _fun77165_ip = 37;
                        continue _fun77165
                    }
                case 31:
                    var1 = var2.lastActionTime;
                case 37:
                    var2 = var0 != var1;
                    var0 = 0;
                    if (!var2) {
                        _fun77165_ip = 49;
                        continue _fun77165
                    }
                case 46:
                    var0 = var1;
                case 49:
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'maybeAutoUpgradeChannel';
        var4.key = var6;
        var5 = function arg0() {
            _fun77166: for (var _fun77166_ip = 0;;) switch (_fun77166_ip) {
                case 0:
                    var7 = arg0;
                    var0 = _closure1_slot29;
                    var6 = undefined;
                    var0 = var0.bind(var6)(var7);
                    if (var0) {
                        _fun77166_ip = 24;
                        continue _fun77166
                    }
                case 20:
                    var0 = false;
                    return var0;
                case 24:
                    var1 = _closure1_slot9;
                    var0 = var1.getBasicChannel;
                    var3 = var0.bind(var1)(var7);
                    var4 = null;
                    var0 = var4 != var3;
                    if (!var0) {
                        _fun77166_ip = 57;
                        continue _fun77166
                    }
                case 48:
                    var1 = var3.guild_id;
                    var0 = var4 != var1;
                case 57:
                    if (!var0) {
                        _fun77166_ip = 470;
                        continue _fun77166
                    }
                case 63:
                    var8 = _closure1_slot10;
                    var5 = var8.getGuild;
                    var1 = var3.guild_id;
                    var1 = var5.bind(var8)(var1);
                    var5 = var4 == var1;
                    var9 = undefined;
                    if (var5) {
                        _fun77166_ip = 97;
                        continue _fun77166
                    }
                case 91:
                    var9 = var1.joinedAt;
                case 97:
                    if (!(var4 == var9)) {
                        _fun77166_ip = 129;
                        continue _fun77166
                    }
                case 101:
                    var1 = global;
                    var1 = var1.Date;
                    var5 = var1.prototype;
                    var5 = Object.create(var5, {
                        constructor: {
                            value: var1
                        }
                    });
                    var18 = var5;
                    var1 = new var18[var1](var17);
                    var9 = var1 instanceof Object ? var1 : var5;
                case 129:
                    var5 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var1 = 14;
                    var1 = var8[var1];
                    var8 = var5.bind(var6)(var1);
                    var5 = var8.age;
                    var1 = var3.id;
                    var10 = var5.bind(var8)(var1);
                    var1 = global;
                    var8 = var1.Date;
                    var5 = var8.now;
                    var8 = var5.bind(var8)();
                    var5 = var9.getTime;
                    var5 = var5.bind(var9)();
                    var9 = var8 - var5;
                    var8 = var1.Math;
                    var5 = var8.min;
                    var12 = var5.bind(var8)(var10, var9);
                    var5 = _closure1_slot19;
                    var8 = var5.channels;
                    var5 = var3.id;
                    var11 = var8[var5];
                    var5 = var4 == var11;
                    var4 = false;
                    if (var5) {
                        _fun77166_ip = 375;
                        continue _fun77166
                    }
                case 244:
                    var5 = var11.lastActionTime;
                    var8 = var1.Date;
                    var1 = var8.now;
                    var8 = var1.bind(var8)();
                    var1 = _closure1_slot18;
                    var1 = var8 - var1;
                    var1 = var5 < var1;
                    var4 = false;
                    if (var1) {
                        _fun77166_ip = 375;
                        continue _fun77166
                    }
                case 282:
                    var9 = _closure1_slot16;
                    var1 = var9.length;
                    var8 = 0;
                    var1 = var8 < var1;
                    var4 = false;
                    if (!var1) {
                        _fun77166_ip = 375;
                        continue _fun77166
                    }
                case 302:
                    var1 = var9[var8];
                    var13 = var1.timeSinceJoin;
                    if (!(var12 < var13)) {
                        _fun77166_ip = 358;
                        continue _fun77166
                    }
                case 316:
                    var14 = var11.numSends;
                    var13 = var1.sends;
                    var13 = var14 >= var13;
                    var4 = true;
                    if (var13) {
                        _fun77166_ip = 375;
                        continue _fun77166
                    }
                case 337:
                    var13 = var11.viewDuration;
                    var1 = var1.viewTime;
                    var1 = var13 >= var1;
                    var4 = true;
                    if (var1) {
                        _fun77166_ip = 375;
                        continue _fun77166
                    }
                case 358:
                    var8 = var8 + 1;
                    var1 = var9.length;
                    var1 = var8 < var1;
                    var4 = false;
                    if (var1) {
                        _fun77166_ip = 302;
                        continue _fun77166
                    }
                case 375:
                    var1 = !var4;
                    var1 = !var1;
                    if (!var4) {
                        _fun77166_ip = 467;
                        continue _fun77166
                    }
                case 384:
                    var4 = _closure1_slot19;
                    var4 = var4.channels;
                    var4 = delete var4[var7];
                    var5 = _closure1_slot20;
                    var4 = var5.add;
                    var4 = var4.bind(var5)(var7);
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var4 = 16;
                    var4 = var7[var4];
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.updateChannelUnreadSetting;
                    var4 = var3.guild_id;
                    var3 = var3.id;
                    var2 = _closure1_slot14;
                    var2 = var2.ALL_MESSAGES;
                    var2 = var5.bind(var6)(var4, var3, var2);
                    var1 = true;
                case 467:
                    var0 = var1;
                case 470:
                    return var0;
            }
        };
        var4.value = var5;
        var0[3] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var8 = var1.bind(var0)(var7);
    var1 = 'UnreadSettingNoticeStore2';
    var8.displayName = var1;
    var8.persistKey = var1;
    var1 = 18;
    var1 = var5[var1];
    var18 = var6.bind(var0)(var1);
    var1 = {};
    var6 = function() {
        var1 = _closure1_slot26;
        var0 = undefined;
        var0 = var1.bind(var0)();
        var3 = _closure1_slot11;
        var1 = var3.getChannelId;
        var1 = var1.bind(var3)();
        _closure1_slot21 = var1;
        var1 = global;
        var3 = var1.Date;
        var1 = var3.now;
        var1 = var1.bind(var3)();
        _closure1_slot22 = var1;
        return var0;
    };
    var1.CHANNEL_SELECT = var6;
    var6 = function() {
        var3 = _closure1_slot11;
        var0 = var3.getChannelId;
        var0 = var0.bind(var3)();
        _closure1_slot21 = var0;
        var3 = global;
        var4 = var3.Date;
        var0 = var4.now;
        var0 = var0.bind(var4)();
        _closure1_slot22 = var0;
        var4 = _closure1_slot27;
        var0 = undefined;
        var4 = var4.bind(var0)();
        var4 = var3.Date;
        var3 = var4.now;
        var4 = var3.bind(var4)();
        var3 = _closure1_slot18;
        var3 = var4 - var3;
        var _closure2_slot0 = var3;
        var4 = _closure1_slot1;
        var5 = _closure1_slot2;
        var3 = 14;
        var3 = var5[var3];
        var4 = var4.bind(var0)(var3);
        var3 = var4.forEach;
        var2 = _closure1_slot19;
        var2 = var2.channels;
        var1 = function(arg0, arg1) { // Environment: var1
            _fun77169: for (var _fun77169_ip = 0;;) switch (_fun77169_ip) {
                case 0:
                    var0 = arg0;
                    var1 = var0.lastActionTime;
                    var0 = _closure2_slot0;
                    if (!(var1 < var0)) {
                        _fun77169_ip = 40;
                        continue _fun77169
                    }
                case 20:
                    var0 = _closure1_slot19;
                    var1 = var0.channels;
                    var0 = arg1;
                    var0 = delete var1[var0];
                case 40:
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var1.CONNECTION_OPEN = var6;
    var6 = function arg0() {
        _fun77170: for (var _fun77170_ip = 0;;) switch (_fun77170_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.optimistic;
                if (var0) {
                    _fun77170_ip = 156;
                    continue _fun77170
                }
            case 15:
                var0 = var1.isPushNotification;
                if (var0) {
                    _fun77170_ip = 156;
                    continue _fun77170
                }
            case 27:
                var0 = var1.message;
                var2 = var0.author;
                var0 = null;
                var3 = var0 == var2;
                var0 = undefined;
                var4 = undefined;
                if (var3) {
                    _fun77170_ip = 56;
                    continue _fun77170
                }
            case 51:
                var4 = var2.id;
            case 56:
                var5 = _closure1_slot8;
                var3 = var5.getId;
                var3 = var3.bind(var5)();
                if (!(var4 === var3)) {
                    _fun77170_ip = 152;
                    continue _fun77170
                }
            case 77:
                var4 = _closure1_slot29;
                var3 = var1.channelId;
                var3 = var4.bind(var0)(var3);
                if (var3) {
                    _fun77170_ip = 98;
                    continue _fun77170
                }
            case 94:
                var3 = false;
                return var3;
            case 98:
                var2 = _closure1_slot28;
                var1 = var1.channelId;
                var2 = var2.bind(var0)(var1);
                var1 = global;
                var3 = var1.Date;
                var1 = var3.now;
                var1 = var1.bind(var3)();
                var2.lastActionTime = var1;
                var1 = var2.numSends;
                var1 = var1 + 1;
                var2.numSends = var1;
                return var0;
            case 152:
                var0 = false;
                return var0;
            case 156:
                var0 = false;
                return var0;
        }
    };
    var1.MESSAGE_CREATE = var6;
    var6 = var8.prototype;
    var6 = Object.create(var6, {
        constructor: {
            value: var8
        }
    });
    var19 = var6;
    var17 = var1;
    var1 = new var19[var8](var18, var17, var16);
    var1 = var1 instanceof Object ? var1 : var6;
    var _closure1_slot24 = var1;
    var3 = 19;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/notifications/settings_unread_notice/UnreadSettingNoticeStore2.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1216, 1372, 1410, 1670, 4303, 660, 4304, 665, 667, 21, 1384, 8765, 566, 806, 2]);