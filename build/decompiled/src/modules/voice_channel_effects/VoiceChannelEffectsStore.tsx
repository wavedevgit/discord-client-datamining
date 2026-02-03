// modules/voice_channel_effects/VoiceChannelEffectsStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var6;
    var0 = function() {
        _fun64726: for (var _fun64726_ip = 0;;) switch (_fun64726_ip) {
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
            case 70: // try_end0
                _fun64726_ip = 74;
                continue _fun64726;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
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
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.EMOJI_PICKER_EMOJI_TO_SHOW_COUNT;
    var _closure1_slot9 = var3;
    var3 = new Array(0);
    var _closure1_slot10 = var3;
    var3 = {};
    var _closure1_slot11 = var3;
    var3 = new Array(0);
    var _closure1_slot12 = var3;
    var3 = new Array(0);
    var _closure1_slot13 = var3;
    var3 = 7;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Millis;
    var7 = var3.SECOND;
    var3 = 10;
    var3 = var3 * var7;
    var _closure1_slot14 = var3;
    var3 = 8;
    var3 = var6[var3];
    var9 = var5.bind(var0)(var3);
    var8 = var9.debounce;
    var7 = function() { // Environment: var1
        var3 = _closure1_slot0;
        var4 = _closure1_slot2;
        var0 = 9;
        var1 = var4[var0];
        var0 = undefined;
        var6 = var3.bind(var0)(var1);
        var5 = var6.getEffectAnnouncement;
        var1 = _closure1_slot12;
        var5 = var5.bind(var6)(var1);
        var1 = 10;
        var1 = var4[var1];
        var1 = var3.bind(var0)(var1);
        var4 = var1.AccessibilityAnnouncer;
        var3 = var4.announce;
        var1 = 'polite';
        var1 = var3.bind(var4)(var5, var1);
        var1 = new Array(0);
        _closure1_slot12 = var1;
        return var0;
    };
    var3 = 500;
    var3 = var8.bind(var9)(var7, var3);
    var _closure1_slot15 = var3;
    var3 = 11;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.Store;
    var3 = function(arg0) { // Environment: var1
        var3 = function() {
            _fun64731: for (var _fun64731_ip = 0;;) switch (_fun64731_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot4;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot7;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot6;
                    var0 = _closure1_slot16;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun64731_ip = 69;
                        continue _fun64731
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun64731_ip = 105;
                    continue _fun64731;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot7;
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
        var4 = _closure1_slot8;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot5;
        var4 = {};
        var0 = 'recentlyUsedEmojis';
        var4.key = var0;
        var0 = function() {
            var0 = _closure1_slot10;
            return var0;
        };
        var4.get = var0;
        var0 = new Array(4);
        var0[0] = var4;
        var4 = {};
        var6 = 'isOnCooldown';
        var4.key = var6;
        var6 = function() {
            _fun64733: for (var _fun64733_ip = 0;;) switch (_fun64733_ip) {
                case 0:
                    var2 = _closure1_slot3;
                    var0 = null;
                    var0 = var0 != var2;
                    if (!var0) {
                        _fun64733_ip = 52;
                        continue _fun64733
                    }
                case 16:
                    var2 = global;
                    var2 = var2.Date;
                    var3 = var2.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var2
                        }
                    });
                    var4 = var3;
                    var2 = new var4[var2](var3);
                    var2 = var2 instanceof Object ? var2 : var3;
                    var1 = _closure1_slot3;
                    var0 = var2 < var1;
                case 52:
                    return var0;
            }
        };
        var4.get = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'effectCooldownEndTime';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot3;
            return var0;
        };
        var4.get = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getEffectForUserId';
        var4.key = var6;
        var5 = function arg0() {
            var1 = _closure1_slot11;
            var0 = arg0;
            var0 = var1[var0];
            return var0;
        };
        var4.value = var5;
        var0[3] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var8 = var3.bind(var0)(var7);
    var3 = 'VoiceChannelEffectsStore';
    var8.displayName = var3;
    var3 = 6;
    var3 = var6[var3];
    var12 = var4.bind(var0)(var3);
    var3 = {};
    var4 = function arg0() {
        _fun64736: for (var _fun64736_ip = 0;;) switch (_fun64736_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.userId;
                var2 = _closure1_slot11;
                var3 = var2[var1];
                var2 = null;
                if (!(var2 != var3)) {
                    _fun64736_ip = 33;
                    continue _fun64736
                }
            case 25:
                var0 = _closure1_slot11;
                var0 = delete var0[var1];
            case 33:
                var0 = undefined;
                return var0;
        }
    };
    var3.VOICE_CHANNEL_EFFECT_CLEAR = var4;
    var4 = function arg0() {
        _fun64737: for (var _fun64737_ip = 0;;) switch (_fun64737_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.emoji;
                var0 = null;
                if (!(var0 != var3)) {
                    _fun64737_ip = 113;
                    continue _fun64737
                }
            case 15:
                var2 = _closure1_slot10;
                var1 = var2.unshift;
                var1 = var1.bind(var2)(var3);
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 8;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.uniqBy;
                var2 = _closure1_slot10;
                var1 = 'name';
                var1 = var3.bind(var4)(var2, var1);
                _closure1_slot10 = var1;
                var2 = var1.length;
                var3 = _closure1_slot9;
                var1 = 1;
                var1 = var3 + var1;
                if (!(var2 > var1)) {
                    _fun64737_ip = 113;
                    continue _fun64737
                }
            case 99:
                var1 = _closure1_slot10;
                var0 = var1.pop;
                var0 = var0.bind(var1)();
            case 113:
                var0 = undefined;
                return var0;
        }
    };
    var3.VOICE_CHANNEL_EFFECT_RECENT_EMOJI = var4;
    var4 = function arg0() {
        _fun64738: for (var _fun64738_ip = 0;;) switch (_fun64738_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.emoji;
                var4 = var0.userId;
                var3 = var0.animationType;
                var1 = null;
                var0 = var1 != var5;
                if (!var0) {
                    _fun64738_ip = 33;
                    continue _fun64738
                }
            case 29:
                var0 = var1 != var3;
            case 33:
                if (!var0) {
                    _fun64738_ip = 140;
                    continue _fun64738
                }
            case 36:
                var2 = _closure1_slot11;
                var1 = {};
                var1.emoji = var5;
                var6 = global;
                var7 = var6.Date;
                var6 = var7.now;
                var6 = var6.bind(var7)();
                var1.sentAt = var6;
                var1.animationType = var3;
                var2[var4] = var1;
                var9 = _closure1_slot12;
                var1 = new Array(1);
                var8 = 0;
                var10 = var1;
                var3 = arraySpread(var10, var9, var8);
                var2 = {};
                var5 = var5.name;
                var2.emojiName = var5;
                var2.userId = var4;
                var1[var3] = var2;
                var2 = 1;
                var2 = var3 + var2;
                _closure1_slot12 = var1;
                var1 = _closure1_slot15;
                var0 = undefined;
                var0 = var1.bind(var0)();
            case 140:
                var0 = undefined;
                return var0;
        }
    };
    var3.VOICE_CHANNEL_EFFECT_SEND = var4;
    var4 = function() {
        _fun64739: for (var _fun64739_ip = 0;;) switch (_fun64739_ip) {
            case 0:
                var0 = global;
                var1 = var0.Date;
                var2 = var1.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var1
                    }
                });
                var11 = var2;
                var1 = new var11[var1](var10);
                var4 = var1 instanceof Object ? var1 : var2;
                var7 = new Array(1);
                var7[0] = var4;
                var9 = _closure1_slot13;
                var5 = 1;
                var10 = var7;
                var8 = var5;
                var2 = arraySpread(var10, var9, var8);
                var6 = var7.slice;
                var2 = 0;
                var3 = 20;
                var2 = var6.bind(var7)(var2, var3);
                _closure1_slot13 = var2;
                var2 = var2.length;
                if (!(var2 >= var3)) {
                    _fun64739_ip = 186;
                    continue _fun64739
                }
            case 85:
                var3 = _closure1_slot13;
                var2 = var3.length;
                var2 = var2 - var5;
                var5 = var3[var2];
                var2 = var4.getTime;
                var3 = var2.bind(var4)();
                var2 = var5.getTime;
                var2 = var2.bind(var5)();
                var2 = var3 - var2;
                var3 = _closure1_slot14;
                if (!(var2 < var3)) {
                    _fun64739_ip = 186;
                    continue _fun64739
                }
            case 134:
                var3 = var0.Date;
                var0 = var4.getTime;
                var4 = var0.bind(var4)();
                var0 = _closure1_slot14;
                var0 = var4 + var0;
                var10 = var0 - var2;
                var2 = var3.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var3
                    }
                });
                var11 = var2;
                var0 = new var11[var3](var10, var9);
                var0 = var0 instanceof Object ? var0 : var2;
                var _closure1_slot3 = var0;
            case 186:
                var0 = undefined;
                return var0;
        }
    };
    var3.VOICE_CHANNEL_EFFECT_SENT_LOCAL = var4;
    var4 = function arg0() {
        var0 = arg0;
        var1 = var0.cooldownEndsAtMs;
        var0 = global;
        var2 = var0.Date;
        var3 = var0.Date;
        var0 = var3.now;
        var0 = var0.bind(var3)();
        var4 = var0 + var1;
        var1 = var2.prototype;
        var1 = Object.create(var1, {
            constructor: {
                value: var2
            }
        });
        var5 = var1;
        var0 = new var5[var2](var4, var3);
        var1 = var0 instanceof Object ? var0 : var1;
        _closure1_slot3 = var1;
        var0 = undefined;
        return var0;
    };
    var3.VOICE_CHANNEL_EFFECT_UPDATE_TIME_STAMP = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var8
        }
    });
    var13 = var4;
    var11 = var3;
    var3 = new var13[var8](var12, var11, var10);
    var3 = var3 instanceof Object ? var3 : var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_channel_effects/VoiceChannelEffectsStore.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var1 = function(arg0) { // Environment: var1
        _fun64741: for (var _fun64741_ip = 0;;) switch (_fun64741_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                if (!(var0 != var3)) {
                    _fun64741_ip = 60;
                    continue _fun64741
                }
            case 9:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 6;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.dispatch;
                var0 = {};
                var4 = 'VOICE_CHANNEL_EFFECT_CLEAR';
                var0.type = var4;
                var0.userId = var3;
                var0 = var1.bind(var2)(var0);
            case 60:
                var0 = undefined;
                return var0;
        }
    };
    var2.clearVoiceChannelEffectForUser = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 3523, 806, 667, 22, 5694, 3206, 566, 2]);