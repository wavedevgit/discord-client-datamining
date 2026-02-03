// modules/app_analytics/AppAnalyticsManager.tsx
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
        _fun112613: for (var _fun112613_ip = 0;;) switch (_fun112613_ip) {
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
                _fun112613_ip = 76;
                continue _fun112613;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot17 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot17 = var0;
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
    var7 = 1;
    var3 = var5[var7];
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot12 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot13 = var3;
    var3 = 11;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var8 = var3.AnalyticEvents;
    var _closure1_slot14 = var8;
    var3 = var3.ActivityTypes;
    var _closure1_slot15 = var3;
    var3 = 12;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var3 = var3.Millis;
    var3 = var3.MINUTE;
    var3 = var7 * var3;
    var _closure1_slot16 = var3;
    var3 = 17;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var3 = function arg0() {
            _fun112617: for (var _fun112617_ip = 0;;) switch (_fun112617_ip) {
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
                    var0 = _closure1_slot17;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun112617_ip = 86;
                        continue _fun112617
                    }
                case 73:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun112617_ip = 120;
                    continue _fun112617;
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
                    var2 = false;
                    var0._currentUserSpeaking = var2;
                    var0._anyoneElseSpeaking = var2;
                    var2 = function() { // Environment: var1
                        _fun112618: for (var _fun112618_ip = 0;;) switch (_fun112618_ip) {
                            case 0:
                                var2 = _closure1_slot10;
                                var1 = var2.getChannelId;
                                var2 = var1.bind(var2)();
                                var3 = _closure3_slot0;
                                var3 = var3._voiceChannelId;
                                if (!(var3 !== var2)) {
                                    _fun112618_ip = 171;
                                    continue _fun112618
                                }
                            case 37:
                                var3 = _closure3_slot0;
                                var3._voiceChannelId = var2;
                                var3 = null;
                                if (!(var3 == var2)) {
                                    _fun112618_ip = 69;
                                    continue _fun112618
                                }
                            case 53:
                                var4 = _closure3_slot0;
                                var2 = var4._reset;
                                var2 = var2.bind(var4)();
                                _fun112618_ip = 171;
                                continue _fun112618;
                            case 69:
                                var2 = _closure3_slot0;
                                var2 = var2._reportInterval;
                                if (!(var3 == var2)) {
                                    _fun112618_ip = 171;
                                    continue _fun112618
                                }
                            case 83:
                                var1 = _closure3_slot0;
                                var4 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var2 = 13;
                                var3 = var3[var2];
                                var2 = undefined;
                                var2 = var4.bind(var2)(var3);
                                var2 = var2.Interval;
                                var3 = var2.prototype;
                                var3 = Object.create(var3, {
                                    constructor: {
                                        value: var2
                                    }
                                });
                                var7 = var3;
                                var2 = new var7[var2](var6);
                                var2 = var2 instanceof Object ? var2 : var3;
                                var1._reportInterval = var2;
                                var3 = var1._reportInterval;
                                var2 = var3.start;
                                var1 = _closure1_slot16;
                                var0 = function() { // Environment: var0
                                    var1 = _closure3_slot0;
                                    var0 = var1._trackStartSpeaking;
                                    var0 = var0.bind(var1)();
                                    var0 = var1._trackStartListening;
                                    var0 = var0.bind(var1)();
                                    var0 = undefined;
                                    return var0;
                                };
                                var0 = var2.bind(var3)(var1, var0);
                            case 171:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0._handleRTCConnectionStoreChanged = var2;
                    var1 = function() { // Environment: var1
                        _fun112620: for (var _fun112620_ip = 0;;) switch (_fun112620_ip) {
                            case 0:
                                var2 = _closure1_slot12;
                                var1 = var2.isCurrentUserSpeaking;
                                var2 = var1.bind(var2)();
                                var3 = _closure3_slot0;
                                var3 = var3._currentUserSpeaking;
                                if (!(var3 !== var2)) {
                                    _fun112620_ip = 54;
                                    continue _fun112620
                                }
                            case 34:
                                var3 = _closure3_slot0;
                                var3._currentUserSpeaking = var2;
                                var2 = var3._trackStartSpeaking;
                                var2 = var2.bind(var3)();
                            case 54:
                                var2 = _closure1_slot12;
                                var0 = var2.isAnyoneElseSpeaking;
                                var0 = var0.bind(var2)();
                                var2 = _closure3_slot0;
                                var2 = var2._anyoneElseSpeaking;
                                if (!(var2 !== var0)) {
                                    _fun112620_ip = 104;
                                    continue _fun112620
                                }
                            case 84:
                                var1 = _closure3_slot0;
                                var1._anyoneElseSpeaking = var0;
                                var0 = var1._trackStartListening;
                                var0 = var0.bind(var1)();
                            case 104:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0._handleSpeakingStoreChanged = var1;
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
            var1 = this;
            var _closure3_slot0 = var1;
            var2 = global;
            var2 = var2.Map;
            var3 = var2.prototype;
            var3 = Object.create(var3, {
                constructor: {
                    value: var2
                }
            });
            var9 = var3;
            var2 = new var9[var2](var8);
            var6 = var2 instanceof Object ? var2 : var3;
            var5 = var6.set;
            var4 = _closure1_slot12;
            var3 = function() { // Environment: var0
                var1 = _closure3_slot0;
                var0 = var1._handleSpeakingStoreChanged;
                var0 = var0.bind(var1)();
                return var0;
            };
            var4 = var5.bind(var6)(var4, var3);
            var3 = var4.set;
            var2 = _closure1_slot10;
            var0 = function() { // Environment: var0
                var1 = _closure3_slot0;
                var0 = var1._handleRTCConnectionStoreChanged;
                var0 = var0.bind(var1)();
                return var0;
            };
            var0 = var3.bind(var4)(var2, var0);
            var1.stores = var0;
            var0 = var1._reset;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(6);
        var0[0] = var4;
        var4 = {};
        var6 = '_reset';
        var4.key = var6;
        var6 = function() {
            _fun112624: for (var _fun112624_ip = 0;;) switch (_fun112624_ip) {
                case 0:
                    var1 = this;
                    var0 = false;
                    var1._currentUserSpeaking = var0;
                    var1._anyoneElseSpeaking = var0;
                    var2 = var1._reportInterval;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun112624_ip = 51;
                        continue _fun112624
                    }
                case 29:
                    var3 = var1._reportInterval;
                    var2 = var3.stop;
                    var2 = var2.bind(var3)();
                    var1._reportInterval = var0;
                case 51:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = '_trackStartSpeaking';
        var4.key = var6;
        var6 = function() {
            _fun112625: for (var _fun112625_ip = 0;;) switch (_fun112625_ip) {
                case 0:
                    var6 = this;
                    var0 = var6._currentUserSpeaking;
                    if (!var0) {
                        _fun112625_ip = 234;
                        continue _fun112625
                    }
                case 15:
                    var5 = _closure1_slot10;
                    var0 = var5.getChannelId;
                    var8 = var0.bind(var5)();
                    var0 = var5.getGuildId;
                    var7 = var0.bind(var5)();
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 14;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.trackWithMetadata;
                    var0 = _closure1_slot14;
                    var1 = var0.START_SPEAKING;
                    var0 = {};
                    var10 = _closure1_slot9;
                    var9 = var10.getMode;
                    var9 = var9.bind(var10)();
                    var0.mode = var9;
                    var10 = _closure1_slot12;
                    var9 = var10.isCurrentUserPrioritySpeaking;
                    var9 = var9.bind(var10)();
                    var0.priority = var9;
                    var0.channel = var8;
                    var0.server = var7;
                    var0.channel_id = var8;
                    var0.guild_id = var7;
                    var7 = var5.getRTCConnectionId;
                    var7 = var7.bind(var5)();
                    var0.rtc_connection_id = var7;
                    var7 = var5.getMediaSessionId;
                    var7 = var7.bind(var5)();
                    var0.media_session_id = var7;
                    var8 = _closure1_slot13;
                    var7 = var8.countVoiceStatesForChannel;
                    var4 = var6._voiceChannelId;
                    var4 = var7.bind(var8)(var4);
                    var0.voice_state_count = var4;
                    var4 = var6.getGameMetadata;
                    var11 = var4.bind(var6)();
                    var12 = var0;
                    var4 = copyDataProperties(var12, var11);
                    var4 = var5.getPacketStats;
                    var11 = var4.bind(var5)();
                    var12 = var0;
                    var4 = copyDataProperties(var12, var11);
                    var0 = var2.bind(var3)(var1, var0);
                case 234:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = '_trackStartListening';
        var4.key = var6;
        var6 = function() {
            _fun112626: for (var _fun112626_ip = 0;;) switch (_fun112626_ip) {
                case 0:
                    var5 = this;
                    var1 = _closure1_slot9;
                    var0 = var1.isDeaf;
                    var0 = var0.bind(var1)();
                    if (var0) {
                        _fun112626_ip = 240;
                        continue _fun112626
                    }
                case 26:
                    var0 = var5._anyoneElseSpeaking;
                    if (!var0) {
                        _fun112626_ip = 240;
                        continue _fun112626
                    }
                case 38:
                    var7 = _closure1_slot10;
                    var0 = var7.getChannelId;
                    var8 = var0.bind(var7)();
                    var0 = var7.getGuildId;
                    var6 = var0.bind(var7)();
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 14;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.trackWithMetadata;
                    var0 = _closure1_slot14;
                    var1 = var0.START_LISTENING;
                    var0 = {};
                    var10 = _closure1_slot9;
                    var9 = var10.isMute;
                    var9 = var9.bind(var10)();
                    var0.mute = var9;
                    var10 = _closure1_slot12;
                    var9 = var10.isAnyonePrioritySpeaking;
                    var9 = var9.bind(var10)();
                    var0.anyone_priority = var9;
                    var0.channel = var8;
                    var0.server = var6;
                    var0.channel_id = var8;
                    var0.guild_id = var6;
                    var6 = var7.getRTCConnectionId;
                    var6 = var6.bind(var7)();
                    var0.rtc_connection_id = var6;
                    var6 = var7.getMediaSessionId;
                    var6 = var6.bind(var7)();
                    var0.media_session_id = var6;
                    var7 = _closure1_slot13;
                    var6 = var7.countVoiceStatesForChannel;
                    var4 = var5._voiceChannelId;
                    var4 = var6.bind(var7)(var4);
                    var0.voice_state_count = var4;
                    var4 = var5.getGameMetadata;
                    var11 = var4.bind(var5)();
                    var12 = var0;
                    var4 = copyDataProperties(var12, var11);
                    var0 = var2.bind(var3)(var1, var0);
                case 240:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = '_terminate';
        var4.key = var6;
        var6 = function() {
            var0 = this;
            var1 = var0._reset;
            var1 = var1.bind(var0)();
            var4 = _closure1_slot12;
            var3 = var4.removeChangeListener;
            var2 = var0._handleSpeakingStoreChanged;
            var2 = var3.bind(var4)(var2);
            var2 = _closure1_slot10;
            var1 = var2.removeChangeListener;
            var0 = var0._handleRTCConnectionStoreChanged;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'getGameMetadata';
        var4.key = var6;
        var5 = function() {
            _fun112628: for (var _fun112628_ip = 0;;) switch (_fun112628_ip) {
                case 0:
                    var3 = _closure1_slot11;
                    var1 = var3.findActivity;
                    var0 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var1 = var0.type;
                        var0 = _closure1_slot15;
                        var0 = var0.PLAYING;
                        var0 = var1 === var0;
                        return var0;
                    };
                    var6 = var1.bind(var3)(var0);
                    var1 = _closure1_slot8;
                    var0 = var1.getCurrentGameForAnalytics;
                    var4 = var0.bind(var1)();
                    var0 = {};
                    var3 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var1 = 15;
                    var1 = var5[var1];
                    var5 = undefined;
                    var1 = var3.bind(var5)(var1);
                    var1 = var1.bind(var5)(var6);
                    var0.game_platform = var1;
                    var1 = null;
                    var7 = var1 != var6;
                    var3 = null;
                    if (!var7) {
                        _fun112628_ip = 91;
                        continue _fun112628
                    }
                case 86:
                    var3 = var6.name;
                case 91:
                    var0.game_name = var3;
                    var7 = var1 != var4;
                    var3 = null;
                    if (!var7) {
                        _fun112628_ip = 111;
                        continue _fun112628
                    }
                case 105:
                    var3 = var4.exeName;
                case 111:
                    var0.game_exe_name = var3;
                    var7 = var1 != var6;
                    var3 = null;
                    if (!var7) {
                        _fun112628_ip = 133;
                        continue _fun112628
                    }
                case 127:
                    var3 = var6.application_id;
                case 133:
                    var0.game_id = var3;
                    var6 = var1 != var4;
                    var3 = null;
                    if (!var6) {
                        _fun112628_ip = 153;
                        continue _fun112628
                    }
                case 147:
                    var3 = var4.distributor;
                case 153:
                    var0.game_distributor = var3;
                    var6 = var1 != var4;
                    var3 = null;
                    if (!var6) {
                        _fun112628_ip = 175;
                        continue _fun112628
                    }
                case 169:
                    var3 = var4.sku;
                case 175:
                    var0.game_distributor_game_id = var3;
                    var3 = var1 != var4;
                    var1 = null;
                    if (!var3) {
                        _fun112628_ip = 222;
                        continue _fun112628
                    }
                case 191:
                    var3 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 16;
                    var2 = var6[var2];
                    var3 = var3.bind(var5)(var2);
                    var2 = var3.getSubgameMetadata;
                    var1 = var2.bind(var3)(var4);
                case 222:
                    var0.game_metadata = var1;
                    return var0;
            }
        };
        var4.value = var5;
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
    var3 = 18;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_analytics/AppAnalyticsManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 3483, 3476, 3518, 5657, 3949, 3526, 660, 667, 3630, 4302, 13835, 3617, 4299, 2]);