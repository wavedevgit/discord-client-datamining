// modules/hang_status/HangStatusManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var1
        _fun113672: for (var _fun113672_ip = 0;;) switch (_fun113672_ip) {
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
                _fun113672_ip = 76;
                continue _fun113672;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot14 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot14 = var0;
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
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.HangStatusTypes;
    var _closure1_slot11 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.ChannelTypes;
    var _closure1_slot12 = var7;
    var3 = var3.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot13 = var3;
    var3 = 15;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var2 = function(arg0) { // Original name: HangStatusManager, environment: var0
            _fun113676: for (var _fun113676_ip = 0;;) switch (_fun113676_ip) {
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
                    var0 = _closure1_slot5;
                    var8 = var0.bind(var3)(var2);
                    var2 = _closure1_slot4;
                    var0 = _closure1_slot14;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun113676_ip = 86;
                        continue _fun113676
                    }
                case 73:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun113676_ip = 120;
                    continue _fun113676;
                case 86:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot5;
                    var5 = var5.bind(var3)(var4);
                    var5 = var5.constructor;
                    var0 = var6.bind(var7)(var8, var9, var5);
                case 120:
                    var0 = var2.bind(var3)(var4, var0);
                    var _closure3_slot0 = var0;
                    var2 = {};
                    var3 = function() { // Original name: POST_CONNECTION_OPEN, environment: var1
                        var1 = _closure3_slot0;
                        var0 = var1.handlePostConnectionOpen;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var2.POST_CONNECTION_OPEN = var3;
                    var3 = function(arg0) { // Original name: VOICE_CHANNEL_SELECT, environment: var1
                        var2 = _closure3_slot0;
                        var1 = var2.handleVoiceChannelSelect;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var2.VOICE_CHANNEL_SELECT = var3;
                    var3 = function(arg0) { // Original name: GUILD_MEMBER_UPDATE, environment: var1
                        var2 = _closure3_slot0;
                        var1 = var2.handleGuildMemberUpdate;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var2.GUILD_MEMBER_UPDATE = var3;
                    var3 = function() { // Original name: LOGOUT, environment: var1
                        var1 = _closure3_slot0;
                        var0 = var1.handleLogout;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var2.LOGOUT = var3;
                    var0.actions = var2;
                    var2 = function() { // Environment: var1
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var0 = 11;
                        var1 = var1[var0];
                        var0 = undefined;
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.deleteInvalidHangStatuses;
                        var1 = var1.bind(var2)();
                        return var0;
                    };
                    var0.handlePostConnectionOpen = var2;
                    var2 = function(arg0) { // Environment: var1
                        _fun113682: for (var _fun113682_ip = 0;;) switch (_fun113682_ip) {
                            case 0:
                                var1 = arg0;
                                var0 = var1.channelId;
                                var4 = var1.guildId;
                                var3 = _closure1_slot0;
                                var5 = _closure1_slot1;
                                var1 = 12;
                                var1 = var5[var1];
                                var6 = undefined;
                                var7 = var3.bind(var6)(var1);
                                var5 = var7.getHangStatusExperiment;
                                var1 = {};
                                var3 = null;
                                var8 = var4;
                                if (!(var3 == var8)) {
                                    _fun113682_ip = 59;
                                    continue _fun113682
                                }
                            case 55:
                                var8 = _closure1_slot13;
                            case 59:
                                var1.guildId = var8;
                                var8 = 'HangStatusManager';
                                var1.location = var8;
                                var1 = var5.bind(var7)(var1);
                                var5 = var1.enableHangStatus;
                                var1 = var1.setDefaultStatus;
                                if (!(var3 == var4)) {
                                    _fun113682_ip = 101;
                                    continue _fun113682
                                }
                            case 94:
                                if (!(var3 != var0)) {
                                    _fun113682_ip = 535;
                                    continue _fun113682
                                }
                            case 101:
                                if (!var5) {
                                    _fun113682_ip = 310;
                                    continue _fun113682
                                }
                            case 107:
                                var7 = _closure3_slot0;
                                var7 = var7.previousVoiceChannelId;
                                if (!(var0 !== var7)) {
                                    _fun113682_ip = 310;
                                    continue _fun113682
                                }
                            case 127:
                                var5 = _closure3_slot0;
                                var5.previousVoiceChannelId = var0;
                                if (!(var3 != var4)) {
                                    _fun113682_ip = 310;
                                    continue _fun113682
                                }
                            case 144:
                                if (!(var3 != var0)) {
                                    _fun113682_ip = 310;
                                    continue _fun113682
                                }
                            case 151:
                                var5 = _closure1_slot8;
                                var4 = var5.getChannel;
                                var8 = var4.bind(var5)(var0);
                                if (!(var3 != var8)) {
                                    _fun113682_ip = 310;
                                    continue _fun113682
                                }
                            case 172:
                                var5 = var8.type;
                                var4 = _closure1_slot12;
                                var4 = var4.GUILD_VOICE;
                                if (!(var5 === var4)) {
                                    _fun113682_ip = 310;
                                    continue _fun113682
                                }
                            case 191:
                                var5 = _closure1_slot0;
                                var7 = _closure1_slot1;
                                var4 = 13;
                                var4 = var7[var4];
                                var7 = var5.bind(var6)(var4);
                                var5 = var7.canSetVoiceChannelStatus;
                                var4 = true;
                                var4 = var5.bind(var7)(var8, var4);
                                if (!var4) {
                                    _fun113682_ip = 310;
                                    continue _fun113682
                                }
                            case 228:
                                var5 = _closure1_slot10;
                                var4 = var5.getCurrentHangStatus;
                                var4 = var4.bind(var5)();
                                if (!(var3 == var4)) {
                                    _fun113682_ip = 310;
                                    continue _fun113682
                                }
                            case 246:
                                var5 = _closure1_slot10;
                                var4 = var5.getCurrentDefaultStatus;
                                var4 = var4.bind(var5)();
                                if (!(var3 == var4)) {
                                    _fun113682_ip = 312;
                                    continue _fun113682
                                }
                            case 266:
                                if (!var1) {
                                    _fun113682_ip = 310;
                                    continue _fun113682
                                }
                            case 269:
                                var7 = _closure1_slot0;
                                var9 = _closure1_slot1;
                                var5 = 11;
                                var5 = var9[var5];
                                var9 = var7.bind(var6)(var5);
                                var7 = var9.updateHangStatus;
                                var5 = _closure1_slot11;
                                var5 = var5.CHILLING;
                                var5 = var7.bind(var9)(var5);
                            case 310:
                                return var6;
                            case 312:
                                var7 = var4.status;
                                var5 = _closure1_slot11;
                                var5 = var5.CUSTOM;
                                if (!(var7 === var5)) {
                                    _fun113682_ip = 341;
                                    continue _fun113682
                                }
                            case 331:
                                var5 = var4.customHangStatus;
                                if (!(var3 == var5)) {
                                    _fun113682_ip = 395;
                                    continue _fun113682
                                }
                            case 341:
                                var5 = var4.status;
                                var7 = var3 != var5;
                                var5 = undefined;
                                if (!var7) {
                                    _fun113682_ip = 393;
                                    continue _fun113682
                                }
                            case 355:
                                var9 = _closure1_slot0;
                                var10 = _closure1_slot1;
                                var7 = 11;
                                var7 = var10[var7];
                                var10 = var9.bind(var6)(var7);
                                var9 = var10.updateHangStatus;
                                var7 = var4.status;
                                var7 = var9.bind(var10)(var7);
                                var5 = undefined;
                            case 393:
                                return var5;
                            case 395:
                                var4 = var4.customHangStatus;
                                var5 = var4.status;
                                var4 = var4.emoji;
                                if (!(var3 != var4)) {
                                    _fun113682_ip = 499;
                                    continue _fun113682
                                }
                            case 416:
                                var7 = _closure1_slot0;
                                var9 = _closure1_slot1;
                                var3 = 14;
                                var3 = var9[var3];
                                var7 = var7.bind(var6)(var3);
                                var3 = var7.canUseEmojiForHangStatus;
                                var3 = var3.bind(var7)(var4, var8);
                                if (var3) {
                                    _fun113682_ip = 499;
                                    continue _fun113682
                                }
                            case 451:
                                if (!var1) {
                                    _fun113682_ip = 495;
                                    continue _fun113682
                                }
                            case 454:
                                var7 = _closure1_slot0;
                                var8 = _closure1_slot1;
                                var3 = 11;
                                var3 = var8[var3];
                                var8 = var7.bind(var6)(var3);
                                var7 = var8.updateHangStatus;
                                var3 = _closure1_slot11;
                                var3 = var3.CHILLING;
                                var1 = var7.bind(var8)(var3);
                            case 495:
                                var1 = undefined;
                                _fun113682_ip = 533;
                                continue _fun113682;
                            case 499:
                                var3 = _closure1_slot0;
                                var7 = _closure1_slot1;
                                var2 = 11;
                                var2 = var7[var2];
                                var3 = var3.bind(var6)(var2);
                                var2 = var3.updateCustomHangStatus;
                                var2 = var2.bind(var3)(var5, var4);
                                var1 = undefined;
                            case 533:
                                return var1;
                            case 535:
                                var1 = _closure3_slot0;
                                var2 = var1.handleDisconnectFromVoiceChannel;
                                var2 = var2.bind(var1)();
                                var1.previousVoiceChannelId = var0;
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.handleVoiceChannelSelect = var2;
                    var2 = function(arg0) { // Environment: var1
                        _fun113683: for (var _fun113683_ip = 0;;) switch (_fun113683_ip) {
                            case 0:
                                var1 = arg0;
                                var0 = var1.user;
                                var3 = var1.guildId;
                                var2 = var0.id;
                                var4 = _closure1_slot7;
                                var1 = var4.getId;
                                var1 = var1.bind(var4)();
                                if (!(var2 === var1)) {
                                    _fun113683_ip = 164;
                                    continue _fun113683
                                }
                            case 42:
                                var2 = _closure1_slot9;
                                var1 = var2.getCurrentClientVoiceChannelId;
                                var3 = var1.bind(var2)(var3);
                                var2 = null;
                                if (!(var2 != var3)) {
                                    _fun113683_ip = 164;
                                    continue _fun113683
                                }
                            case 63:
                                var4 = _closure1_slot10;
                                var1 = var4.getCurrentHangStatus;
                                var1 = var1.bind(var4)();
                                if (!(var2 != var1)) {
                                    _fun113683_ip = 164;
                                    continue _fun113683
                                }
                            case 81:
                                var2 = _closure1_slot8;
                                var1 = var2.getChannel;
                                var5 = var1.bind(var2)(var3);
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot1;
                                var1 = 13;
                                var1 = var2[var1];
                                var2 = undefined;
                                var4 = var3.bind(var2)(var1);
                                var3 = var4.canSetVoiceChannelStatus;
                                var1 = true;
                                var1 = var3.bind(var4)(var5, var1);
                                if (var1) {
                                    _fun113683_ip = 164;
                                    continue _fun113683
                                }
                            case 134:
                                var1 = _closure1_slot0;
                                var3 = _closure1_slot1;
                                var0 = 11;
                                var0 = var3[var0];
                                var1 = var1.bind(var2)(var0);
                                var0 = var1.clearHangStatus;
                                var0 = var0.bind(var1)();
                            case 164:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.handleGuildMemberUpdate = var2;
                    var2 = function() { // Environment: var1
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var0 = 11;
                        var1 = var1[var0];
                        var0 = undefined;
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.clearHangStatus;
                        var1 = var1.bind(var2)();
                        return var0;
                    };
                    var0.handleDisconnectFromVoiceChannel = var2;
                    var1 = function() { // Environment: var1
                        var1 = _closure3_slot0;
                        var0 = var1.handleDisconnectFromVoiceChannel;
                        var0 = var0.bind(var1)();
                        var0 = undefined;
                        return var0;
                    };
                    var0.handleLogout = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var4 = _closure1_slot6;
        var1 = undefined;
        var3 = arg0;
        var3 = var4.bind(var1)(var2, var3);
        var0 = _closure1_slot2;
        var0 = var0.bind(var1)(var2);
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
    var3 = 16;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/hang_status/HangStatusManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [7, 6, 15, 17, 18, 1216, 1372, 3480, 3568, 3569, 660, 14292, 3571, 14284, 14291, 4256, 2]);