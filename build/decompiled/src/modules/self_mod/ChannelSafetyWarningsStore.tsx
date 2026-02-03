// modules/self_mod/ChannelSafetyWarningsStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var0 = function() {
        _fun72209: for (var _fun72209_ip = 0;;) switch (_fun72209_ip) {
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
                _fun72209_ip = 76;
                continue _fun72209;
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
    var0 = function arg0() {
        _fun72212: for (var _fun72212_ip = 0;;) switch (_fun72212_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.safetyWarnings;
                var3 = null;
                if (!(var3 != var1)) {
                    _fun72212_ip = 90;
                    continue _fun72212
                }
            case 15:
                var5 = _closure1_slot9;
                var2 = var0.id;
                var5[var2] = var1;
                var5 = var1.some;
                var2 = function(arg0) { // Environment: var2
                    _fun72213: for (var _fun72213_ip = 0;;) switch (_fun72213_ip) {
                        case 0:
                            var2 = arg0;
                            var3 = var2.type;
                            var0 = _closure1_slot7;
                            var0 = var0.INAPPROPRIATE_CONVERSATION_TIER_1;
                            var0 = var3 === var0;
                            if (var0) {
                                _fun72213_ip = 47;
                                continue _fun72213
                            }
                        case 28:
                            var4 = var2.type;
                            var3 = _closure1_slot7;
                            var3 = var3.INAPPROPRIATE_CONVERSATION_TIER_2;
                            var0 = var4 === var3;
                        case 47:
                            if (!var0) {
                                _fun72213_ip = 62;
                                continue _fun72213
                            }
                        case 50:
                            var4 = var2.dismiss_timestamp;
                            var3 = null;
                            var0 = var3 != var4;
                        case 62:
                            if (!var0) {
                                _fun72213_ip = 139;
                                continue _fun72213
                            }
                        case 65:
                            var6 = var2.dismiss_timestamp;
                            var3 = global;
                            var2 = var3.Date;
                            var4 = var2.prototype;
                            var4 = Object.create(var4, {
                                constructor: {
                                    value: var2
                                }
                            });
                            var7 = var4;
                            var2 = new var7[var2](var6, var5);
                            var4 = var2 instanceof Object ? var2 : var4;
                            var2 = var4.getTime;
                            var2 = var2.bind(var4)();
                            var4 = var3.Date;
                            var3 = var4.now;
                            var3 = var3.bind(var4)();
                            var1 = _closure1_slot6;
                            var1 = var3 - var1;
                            var1 = var2 > var1;
                            var0 = !var1;
                        case 139:
                            return var0;
                    }
                };
                var2 = var5.bind(var1)(var2);
                var5 = _closure1_slot10;
                if (var2) {
                    _fun72212_ip = 75;
                    continue _fun72212
                }
            case 58:
                var4 = var5.delete;
                var2 = var0.id;
                var2 = var4.bind(var5)(var2);
                _fun72212_ip = 90;
                continue _fun72212;
            case 75:
                var4 = var5.add;
                var2 = var0.id;
                var2 = var4.bind(var5)(var2);
            case 90:
                if (!(var3 == var1)) {
                    _fun72212_ip = 146;
                    continue _fun72212
                }
            case 94:
                var4 = _closure1_slot9;
                var2 = var0.id;
                var2 = var4[var2];
                if (!(var3 != var2)) {
                    _fun72212_ip = 127;
                    continue _fun72212
                }
            case 114:
                var3 = _closure1_slot9;
                var2 = var0.id;
                var2 = delete var3[var2];
            case 127:
                var2 = _closure1_slot10;
                var1 = var2.delete;
                var0 = var0.id;
                var0 = var1.bind(var2)(var0);
            case 146:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var9 = function() {
        var1 = {};
        _closure1_slot9 = var1;
        var1 = global;
        var2 = var1.Object;
        var1 = var2.values;
        var3 = _closure1_slot5;
        var0 = var3.getMutablePrivateChannels;
        var0 = var0.bind(var3)();
        var2 = var1.bind(var2)(var0);
        var1 = var2.forEach;
        var0 = function(arg0) { // Environment: var0
            var2 = _closure1_slot12;
            var0 = undefined;
            var1 = arg0;
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var4 = global;
    var8 = var4.Object;
    var3 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var8)(var2, var0, var1);
    var11 = 0;
    var1 = var6[var11];
    var0 = undefined;
    var1 = var7.bind(var0)(var1);
    var _closure1_slot0 = var1;
    var10 = 1;
    var1 = var6[var10];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot1 = var1;
    var13 = 2;
    var1 = var6[var13];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var12 = 3;
    var1 = var6[var12];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var8 = 4;
    var1 = var6[var8];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var3 = 5;
    var1 = var6[var3];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 6;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var1 = var1.Millis;
    var1 = var1.SECOND;
    var1 = var3 * var1;
    var _closure1_slot6 = var1;
    var3 = {};
    var3.STRANGER_DANGER = var10;
    var1 = 'STRANGER_DANGER';
    var3[var10] = var1;
    var3.INAPPROPRIATE_CONVERSATION_TIER_1 = var13;
    var1 = 'INAPPROPRIATE_CONVERSATION_TIER_1';
    var3[var13] = var1;
    var3.INAPPROPRIATE_CONVERSATION_TIER_2 = var12;
    var1 = 'INAPPROPRIATE_CONVERSATION_TIER_2';
    var3[var12] = var1;
    var3.LIKELY_ATO = var8;
    var1 = 'LIKELY_ATO';
    var3[var8] = var1;
    var _closure1_slot7 = var3;
    var1 = {};
    var1.UPVOTE = var11;
    var8 = 'UPVOTE';
    var1[var11] = var8;
    var1.DOWNVOTE = var10;
    var8 = 'DOWNVOTE';
    var1[var10] = var8;
    var8 = new Array(0);
    var _closure1_slot8 = var8;
    var8 = {};
    var _closure1_slot9 = var8;
    var4 = var4.Set;
    var8 = var4.prototype;
    var8 = Object.create(var8, {
        constructor: {
            value: var4
        }
    });
    var17 = var8;
    var4 = new var17[var4](var16);
    var4 = var4 instanceof Object ? var4 : var8;
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var8 = var4.Store;
    var4 = function(arg0) { // Environment: var5
        var3 = function() {
            _fun72217: for (var _fun72217_ip = 0;;) switch (_fun72217_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot0;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot3;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot2;
                    var0 = _closure1_slot11;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun72217_ip = 69;
                        continue _fun72217
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun72217_ip = 105;
                    continue _fun72217;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot3;
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
        var4 = _closure1_slot4;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot1;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function() {
            var2 = this;
            var1 = var2.waitFor;
            var0 = _closure1_slot5;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(4);
        var0[0] = var4;
        var4 = {};
        var6 = 'getChannelSafetyWarning';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun72219: for (var _fun72219_ip = 0;;) switch (_fun72219_ip) {
                case 0:
                    var0 = arg1;
                    var _closure3_slot0 = var0;
                    var2 = _closure1_slot9;
                    var0 = arg0;
                    var3 = var2[var0];
                    var0 = null;
                    var2 = var0 == var3;
                    var0 = undefined;
                    if (var2) {
                        _fun72219_ip = 51;
                        continue _fun72219
                    }
                case 34:
                    var2 = var3.find;
                    var1 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var1 = var0.id;
                        var0 = _closure3_slot0;
                        var0 = var1 === var0;
                        return var0;
                    };
                    var0 = var2.bind(var3)(var1);
                case 51:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getChannelSafetyWarnings';
        var4.key = var6;
        var6 = function arg0() {
            _fun72221: for (var _fun72221_ip = 0;;) switch (_fun72221_ip) {
                case 0:
                    var2 = _closure1_slot9;
                    var0 = arg0;
                    var0 = var2[var0];
                    var2 = null;
                    if (!(var2 == var0)) {
                        _fun72221_ip = 24;
                        continue _fun72221
                    }
                case 20:
                    var0 = _closure1_slot8;
                case 24:
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'hasShownInitialTooltipForChannel';
        var4.key = var6;
        var5 = function arg0() {
            var2 = _closure1_slot10;
            var1 = var2.has;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var5;
        var0[3] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var8 = var4.bind(var0)(var8);
    var4 = 8;
    var4 = var6[var4];
    var16 = var7.bind(var0)(var4);
    var4 = {};
    var10 = function arg0() {
        var2 = _closure1_slot12;
        var0 = arg0;
        var1 = var0.channel;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var4.CHANNEL_CREATE = var10;
    var10 = function arg0() {
        _fun72224: for (var _fun72224_ip = 0;;) switch (_fun72224_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.channel;
                var3 = _closure1_slot9;
                var2 = var0.id;
                var3 = var3[var2];
                var2 = null;
                if (!(var2 != var3)) {
                    _fun72224_ip = 43;
                    continue _fun72224
                }
            case 30:
                var3 = _closure1_slot9;
                var2 = var0.id;
                var2 = delete var3[var2];
            case 43:
                var2 = _closure1_slot10;
                var1 = var2.delete;
                var0 = var0.id;
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
        }
    };
    var4.CHANNEL_DELETE = var10;
    var10 = function arg0() {
        var0 = arg0;
        var2 = var0.channels;
        var1 = var2.forEach;
        var0 = function(arg0) { // Environment: var0
            var2 = _closure1_slot12;
            var0 = undefined;
            var1 = arg0;
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var4.CHANNEL_UPDATES = var10;
    var4.CONNECTION_OPEN = var9;
    var4.CONNECTION_OPEN_SUPPLEMENTAL = var9;
    var9 = function arg0() {
        _fun72227: for (var _fun72227_ip = 0;;) switch (_fun72227_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.channelId;
                var3 = var1.warningId;
                var _closure2_slot0 = var3;
                var1 = var1.feedbackType;
                var _closure2_slot1 = var1;
                var3 = _closure1_slot9;
                var4 = var3[var2];
                var3 = null;
                if (!(var3 != var4)) {
                    _fun72227_ip = 72;
                    continue _fun72227
                }
            case 47:
                var1 = _closure1_slot9;
                var3 = var4.map;
                var0 = function(arg0) { // Environment: var0
                    _fun72228: for (var _fun72228_ip = 0;;) switch (_fun72228_ip) {
                        case 0:
                            var3 = arg0;
                            var4 = var3.id;
                            var1 = _closure2_slot0;
                            var0 = var3;
                            if (!(var4 === var1)) {
                                _fun72228_ip = 50;
                                continue _fun72228
                            }
                        case 22:
                            var1 = {};
                            var6 = var1;
                            var5 = var3;
                            var3 = copyDataProperties(var6, var5);
                            var3 = _closure2_slot1;
                            var2 = 'feedback_type';
                            var1[var2] = var3;
                            var0 = var1;
                        case 50:
                            return var0;
                    }
                };
                var0 = var3.bind(var4)(var0);
                var1[var2] = var0;
            case 72:
                var0 = undefined;
                return var0;
        }
    };
    var4.CHANNEL_SAFETY_WARNING_FEEDBACK = var9;
    var9 = function arg0() {
        _fun72229: for (var _fun72229_ip = 0;;) switch (_fun72229_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.channelId;
                var1 = _closure1_slot9;
                var4 = var1[var2];
                var3 = _closure1_slot10;
                var1 = var3.delete;
                var1 = var1.bind(var3)(var2);
                var1 = null;
                if (!(var1 != var4)) {
                    _fun72229_ip = 66;
                    continue _fun72229
                }
            case 39:
                var1 = _closure1_slot9;
                var3 = var4.map;
                var0 = function(arg0) { // Environment: var0
                    var0 = {};
                    var3 = arg0;
                    var4 = var0;
                    var1 = copyDataProperties(var4, var3);
                    var2 = undefined;
                    var1 = 'dismiss_timestamp';
                    var0[var1] = var2;
                    return var0;
                };
                var0 = var3.bind(var4)(var0);
                var1[var2] = var0;
            case 66:
                var0 = undefined;
                return var0;
        }
    };
    var4.CLEAR_CHANNEL_SAFETY_WARNINGS = var9;
    var9 = function arg0() {
        _fun72231: for (var _fun72231_ip = 0;;) switch (_fun72231_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.channelId;
                var0 = var0.warningIds;
                var _closure2_slot0 = var0;
                var0 = undefined;
                var _closure2_slot1 = var0;
                var4 = _closure1_slot9;
                var5 = var4[var3];
                var4 = null;
                if (!(var4 != var5)) {
                    _fun72231_ip = 110;
                    continue _fun72231
                }
            case 43:
                var4 = global;
                var4 = var4.Date;
                var6 = var4.prototype;
                var6 = Object.create(var6, {
                    constructor: {
                        value: var4
                    }
                });
                var8 = var6;
                var4 = new var8[var4](var7);
                var6 = var4 instanceof Object ? var4 : var6;
                var4 = var6.toISOString;
                var4 = var4.bind(var6)();
                _closure2_slot1 = var4;
                var2 = _closure1_slot9;
                var4 = var5.map;
                var1 = function(arg0) { // Environment: var1
                    _fun72232: for (var _fun72232_ip = 0;;) switch (_fun72232_ip) {
                        case 0:
                            var3 = arg0;
                            var4 = _closure2_slot0;
                            var1 = var4.includes;
                            var0 = var3.id;
                            var1 = var1.bind(var4)(var0);
                            var0 = var3;
                            if (!var1) {
                                _fun72232_ip = 59;
                                continue _fun72232
                            }
                        case 31:
                            var1 = {};
                            var6 = var1;
                            var5 = var3;
                            var3 = copyDataProperties(var6, var5);
                            var3 = _closure2_slot1;
                            var2 = 'dismiss_timestamp';
                            var1[var2] = var3;
                            var0 = var1;
                        case 59:
                            return var0;
                    }
                };
                var1 = var4.bind(var5)(var1);
                var2[var3] = var1;
            case 110:
                return var0;
        }
    };
    var4.DISMISS_CHANNEL_SAFETY_WARNINGS = var9;
    var5 = function arg0() {
        var0 = arg0;
        var2 = var0.channelId;
        var1 = _closure1_slot10;
        var0 = var1.add;
        var0 = var0.bind(var1)(var2);
        var0 = undefined;
        return var0;
    };
    var4.ACKNOWLEDGE_CHANNEL_SAFETY_WARNING_TOOLTIP = var5;
    var5 = var8.prototype;
    var5 = Object.create(var5, {
        constructor: {
            value: var8
        }
    });
    var17 = var5;
    var15 = var4;
    var4 = new var17[var8](var16, var15, var14);
    var4 = var4 instanceof Object ? var4 : var5;
    var5 = 9;
    var6 = var6[var5];
    var5 = arg1;
    var7 = var5.bind(var0)(var6);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/self_mod/ChannelSafetyWarningsStore.tsx';
    var5 = var6.bind(var7)(var5);
    var2.default = var4;
    var2.SafetyWarningTypes = var3;
    var2.SafetyWarningFeedbackTypes = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1372, 667, 566, 806, 2]);