// stores/VideoSpeakerStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = function() {
        _fun62982: for (var _fun62982_ip = 0;;) switch (_fun62982_ip) {
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
                _fun62982_ip = 74;
                continue _fun62982;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot18 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot18 = var0;
    var11 = function() {
        _fun62985: for (var _fun62985_ip = 0;;) switch (_fun62985_ip) {
            case 0:
                var2 = arguments[0];
                var0 = undefined;
                if (!(var2 === var0)) {
                    _fun62985_ip = 13;
                    continue _fun62985
                }
            case 11:
                var2 = true;
            case 13:
                var _closure2_slot0 = var0;
                var _closure2_slot1 = var0;
                var3 = _closure1_slot3;
                var6 = null;
                var5 = var6 == var3;
                var3 = null;
                if (var5) {
                    _fun62985_ip = 609;
                    continue _fun62985
                }
            case 42:
                var8 = _closure1_slot10;
                var7 = var8.getSelectedParticipantId;
                var5 = _closure1_slot3;
                var7 = var7.bind(var8)(var5);
                var5 = var6 != var7;
                if (!var5) {
                    _fun62985_ip = 88;
                    continue _fun62985
                }
            case 68:
                var10 = _closure1_slot10;
                var9 = var10.isParticipantPoppedOut;
                var8 = _closure1_slot3;
                var5 = var9.bind(var10)(var8, var7);
            case 88:
                if (!var5) {
                    _fun62985_ip = 93;
                    continue _fun62985
                }
            case 91:
                var7 = null;
            case 93:
                var8 = _closure1_slot11;
                var5 = var8.getLastActiveStream;
                var13 = var5.bind(var8)();
                var5 = var6 != var7;
                var9 = null;
                if (!var5) {
                    _fun62985_ip = 136;
                    continue _fun62985
                }
            case 116:
                var10 = _closure1_slot10;
                var8 = var10.getParticipant;
                var5 = _closure1_slot3;
                var9 = var8.bind(var10)(var5, var7);
            case 136:
                var5 = var6 == var9;
                var8 = undefined;
                if (var5) {
                    _fun62985_ip = 150;
                    continue _fun62985
                }
            case 145:
                var8 = var9.type;
            case 150:
                var5 = _closure1_slot15;
                var5 = var5.ACTIVITY;
                var5 = var8 !== var5;
                if (!var5) {
                    _fun62985_ip = 223;
                    continue _fun62985
                }
            case 167:
                var8 = var6 == var9;
                var10 = undefined;
                if (var8) {
                    _fun62985_ip = 181;
                    continue _fun62985
                }
            case 176:
                var10 = var9.type;
            case 181:
                var8 = _closure1_slot15;
                var8 = var8.USER;
                var8 = var10 !== var8;
                if (var8) {
                    _fun62985_ip = 220;
                    continue _fun62985
                }
            case 198:
                var10 = var9.voiceState;
                var9 = var6 != var10;
                if (!var9) {
                    _fun62985_ip = 217;
                    continue _fun62985
                }
            case 211:
                var9 = var10.selfVideo;
            case 217:
                var8 = var9;
            case 220:
                var5 = var8;
            case 223:
                var9 = var7;
                if (var5) {
                    _fun62985_ip = 231;
                    continue _fun62985
                }
            case 229:
                var9 = null;
            case 231:
                var5 = var9;
                if (!(var6 != var13)) {
                    _fun62985_ip = 346;
                    continue _fun62985
                }
            case 238:
                var5 = var9;
                if (!(var6 == var9)) {
                    _fun62985_ip = 346;
                    continue _fun62985
                }
            case 245:
                var11 = _closure1_slot10;
                var10 = var11.getParticipant;
                var8 = _closure1_slot3;
                var12 = _closure1_slot0;
                var14 = _closure1_slot2;
                var7 = 11;
                var7 = var14[var7];
                var12 = var12.bind(var0)(var7);
                var7 = var12.encodeStreamKey;
                var7 = var7.bind(var12)(var13);
                var8 = var10.bind(var11)(var8, var7);
                var10 = var6 == var8;
                var7 = undefined;
                if (var10) {
                    _fun62985_ip = 310;
                    continue _fun62985
                }
            case 305:
                var7 = var8.id;
            case 310:
                var8 = var6 == var7;
                if (var8) {
                    _fun62985_ip = 337;
                    continue _fun62985
                }
            case 317:
                var12 = _closure1_slot10;
                var11 = var12.isParticipantPoppedOut;
                var10 = _closure1_slot3;
                var8 = var11.bind(var12)(var10, var7);
            case 337:
                var5 = var9;
                if (var8) {
                    _fun62985_ip = 346;
                    continue _fun62985
                }
            case 343:
                var5 = var7;
            case 346:
                var3 = var5;
                if (!(var6 == var3)) {
                    _fun62985_ip = 609;
                    continue _fun62985
                }
            case 356:
                var7 = _closure1_slot12;
                var5 = var7.getId;
                var5 = var5.bind(var7)();
                _closure2_slot0 = var5;
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var5 = 12;
                var5 = var8[var5];
                var7 = var7.bind(var0)(var5);
                var9 = _closure1_slot10;
                var8 = var9.getVideoParticipants;
                var5 = _closure1_slot3;
                var5 = var8.bind(var9)(var5);
                var8 = var7.bind(var0)(var5);
                var7 = var8.filter;
                var5 = function(arg0) { // Environment: var4
                    _fun62986: for (var _fun62986_ip = 0;;) switch (_fun62986_ip) {
                        case 0:
                            var1 = arg0;
                            var3 = var1.type;
                            var0 = _closure1_slot15;
                            var0 = var0.USER;
                            var0 = var3 === var0;
                            if (!var0) {
                                _fun62986_ip = 49;
                                continue _fun62986
                            }
                        case 28:
                            var3 = var1.user;
                            var4 = var3.id;
                            var3 = _closure2_slot0;
                            var0 = var4 !== var3;
                        case 49:
                            if (!var0) {
                                _fun62986_ip = 80;
                                continue _fun62986
                            }
                        case 52:
                            var5 = _closure1_slot13;
                            var4 = var5.isLocalVideoDisabled;
                            var3 = var1.user;
                            var3 = var3.id;
                            var3 = var4.bind(var5)(var3);
                            var0 = !var3;
                        case 80:
                            if (!var0) {
                                _fun62986_ip = 111;
                                continue _fun62986
                            }
                        case 83:
                            var4 = _closure1_slot10;
                            var3 = var4.isParticipantPoppedOut;
                            var2 = _closure1_slot3;
                            var1 = var1.id;
                            var1 = var3.bind(var4)(var2, var1);
                            var0 = !var1;
                        case 111:
                            return var0;
                    }
                };
                var5 = var7.bind(var8)(var5);
                var8 = var5.map;
                var7 = function(arg0) { // Environment: var4
                    var0 = arg0;
                    var0 = var0.user;
                    var0 = var0.id;
                    return var0;
                };
                var8 = var8.bind(var5)(var7);
                var7 = global;
                var9 = var7.Date;
                var7 = var9.now;
                var7 = var7.bind(var9)();
                _closure2_slot1 = var7;
                var9 = var5.map;
                var7 = function(arg0) { // Environment: var4
                    var1 = arg0;
                    var0 = var1.user;
                    var2 = var0.id;
                    var0 = new Array(2);
                    var0[0] = var2;
                    var4 = _closure1_slot14;
                    var3 = var4.getSpeakingDuration;
                    var1 = var1.user;
                    var2 = var1.id;
                    var1 = _closure2_slot1;
                    var1 = var3.bind(var4)(var2, var1);
                    var0[1] = var1;
                    return var0;
                };
                var10 = var9.bind(var5)(var7);
                var9 = var10.filter;
                var7 = function(arg0) { // Environment: var4
                    _fun62989: for (var _fun62989_ip = 0;;) switch (_fun62989_ip) {
                        case 0:
                            var3 = arg0;
                            var0 = var3[Symbol.iterator];
                            var3 = var0().next;
                            var1 = var3().value;
                            var1 = var0;
                            var5 = undefined;
                            var2 = var1 === var5;
                            var1 = undefined;
                            if (var2) {
                                _fun62989_ip = 49;
                                continue _fun62989
                            }
                        case 24:
                            var4 = var3().value;
                            var3 = var0;
                            var3 = var3 === var5;
                            var1 = undefined;
                            var2 = var3;
                            if (var3) {
                                _fun62989_ip = 49;
                                continue _fun62989
                            }
                        case 43:
                            var1 = var4;
                            var2 = var3;
                        case 49:
                            if (var2) {
                                _fun62989_ip = 55;
                                continue _fun62989
                            }
                        case 52:
                            var0.return();
                        case 55:
                            var0 = 0;
                            var0 = var0 !== var1;
                            return var0;
                    }
                };
                var9 = var9.bind(var10)(var7);
                var7 = var9.maxBy;
                var4 = function(arg0) { // Environment: var4
                    _fun62990: for (var _fun62990_ip = 0;;) switch (_fun62990_ip) {
                        case 0:
                            var3 = arg0;
                            var1 = var3[Symbol.iterator];
                            var3 = var1().next;
                            var0 = var3().value;
                            var0 = var1;
                            var5 = undefined;
                            var2 = var0 === var5;
                            var0 = undefined;
                            if (var2) {
                                _fun62990_ip = 49;
                                continue _fun62990
                            }
                        case 24:
                            var4 = var3().value;
                            var3 = var1;
                            var3 = var3 === var5;
                            var0 = undefined;
                            var2 = var3;
                            if (var3) {
                                _fun62990_ip = 49;
                                continue _fun62990
                            }
                        case 43:
                            var0 = var4;
                            var2 = var3;
                        case 49:
                            if (var2) {
                                _fun62990_ip = 55;
                                continue _fun62990
                            }
                        case 52:
                            var1.return();
                        case 55:
                            var0 = -var0;
                            return var0;
                    }
                };
                var9 = var7.bind(var9)(var4);
                var7 = var6 == var9;
                var4 = undefined;
                if (var7) {
                    _fun62985_ip = 530;
                    continue _fun62985
                }
            case 524:
                var7 = 0;
                var4 = var9[var7];
            case 530:
                var3 = var4;
                if (!(var6 == var3)) {
                    _fun62985_ip = 609;
                    continue _fun62985
                }
            case 537:
                var4 = _closure1_slot4;
                if (!(var6 != var4)) {
                    _fun62985_ip = 562;
                    continue _fun62985
                }
            case 545:
                var7 = var8.has;
                var4 = _closure1_slot4;
                var4 = var7.bind(var8)(var4);
                if (var4) {
                    _fun62985_ip = 605;
                    continue _fun62985
                }
            case 562:
                var4 = var5.first;
                var5 = var4.bind(var5)();
                var7 = var6 == var5;
                var4 = undefined;
                if (var7) {
                    _fun62985_ip = 600;
                    continue _fun62985
                }
            case 581:
                var5 = var5.user;
                var6 = var6 == var5;
                var4 = undefined;
                if (var6) {
                    _fun62985_ip = 600;
                    continue _fun62985
                }
            case 595:
                var4 = var5.id;
            case 600:
                var3 = var4;
                _fun62985_ip = 609;
                continue _fun62985;
            case 605:
                var3 = _closure1_slot4;
            case 609:
                var4 = _closure1_slot4;
                if (!(var4 !== var3)) {
                    _fun62985_ip = 638;
                    continue _fun62985
                }
            case 617:
                var _closure1_slot4 = var3;
                if (!var2) {
                    _fun62985_ip = 638;
                    continue _fun62985
                }
            case 624:
                var2 = _closure1_slot17;
                var1 = var2.emitChange;
                var1 = var1.bind(var2)();
            case 638:
                return var0;
        }
    };
    var _closure1_slot19 = var11;
    var6 = function() {
        var1 = _closure1_slot16;
        var0 = undefined;
        var0 = var1.bind(var0)();
        var0 = false;
        return var0;
    };
    var _closure1_slot20 = var6;
    var0 = global;
    var10 = var0.Object;
    var9 = var10.defineProperty;
    var8 = {};
    var1 = true;
    var8.value = var1;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var8);
    var0 = 0;
    var8 = var5[var0];
    var0 = undefined;
    var8 = var7.bind(var0)(var8);
    var _closure1_slot5 = var8;
    var8 = 1;
    var8 = var5[var8];
    var8 = var7.bind(var0)(var8);
    var _closure1_slot6 = var8;
    var8 = 2;
    var8 = var5[var8];
    var8 = var7.bind(var0)(var8);
    var _closure1_slot7 = var8;
    var8 = 3;
    var8 = var5[var8];
    var8 = var7.bind(var0)(var8);
    var _closure1_slot8 = var8;
    var8 = 4;
    var8 = var5[var8];
    var8 = var7.bind(var0)(var8);
    var _closure1_slot9 = var8;
    var8 = 5;
    var8 = var5[var8];
    var8 = var7.bind(var0)(var8);
    var _closure1_slot10 = var8;
    var8 = 6;
    var8 = var5[var8];
    var8 = var7.bind(var0)(var8);
    var _closure1_slot11 = var8;
    var8 = 7;
    var8 = var5[var8];
    var8 = var7.bind(var0)(var8);
    var _closure1_slot12 = var8;
    var8 = 8;
    var8 = var5[var8];
    var8 = var7.bind(var0)(var8);
    var _closure1_slot13 = var8;
    var8 = 9;
    var8 = var5[var8];
    var8 = var7.bind(var0)(var8);
    var _closure1_slot14 = var8;
    var8 = 10;
    var8 = var5[var8];
    var8 = var4.bind(var0)(var8);
    var8 = var8.ParticipantTypes;
    var _closure1_slot15 = var8;
    var8 = 12;
    var8 = var5[var8];
    var10 = var7.bind(var0)(var8);
    var9 = var10.throttle;
    var8 = {};
    var8.trailing = var1;
    var1 = 300;
    var1 = var9.bind(var10)(var11, var1, var8);
    var _closure1_slot16 = var1;
    var1 = 13;
    var1 = var5[var1];
    var1 = var7.bind(var0)(var1);
    var8 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun62993: for (var _fun62993_ip = 0;;) switch (_fun62993_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot5;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot8;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot7;
                    var0 = _closure1_slot18;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun62993_ip = 69;
                        continue _fun62993
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun62993_ip = 105;
                    continue _fun62993;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot8;
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
        var4 = _closure1_slot9;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot6;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function() {
            var3 = this;
            var7 = var3.waitFor;
            var12 = _closure1_slot10;
            var11 = _closure1_slot12;
            var10 = _closure1_slot14;
            var9 = _closure1_slot11;
            var8 = _closure1_slot13;
            var13 = var3;
            var1 = var13[var7](var12, var11, var10, var9, var8, var7);
            var2 = var3.syncWith;
            var4 = _closure1_slot10;
            var1 = new Array(2);
            var1[0] = var4;
            var4 = _closure1_slot11;
            var1[1] = var4;
            var0 = _closure1_slot20;
            var0 = var2.bind(var3)(var1, var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(2);
        var0[0] = var4;
        var4 = {};
        var6 = 'getSpeaker';
        var4.key = var6;
        var5 = function arg0() {
            _fun62995: for (var _fun62995_ip = 0;;) switch (_fun62995_ip) {
                case 0:
                    var0 = arg0;
                    var2 = _closure1_slot3;
                    if (!(var2 !== var0)) {
                        _fun62995_ip = 31;
                        continue _fun62995
                    }
                case 14:
                    var _closure1_slot3 = var0;
                    var3 = _closure1_slot19;
                    var2 = undefined;
                    var0 = false;
                    var0 = var3.bind(var2)(var0);
                case 31:
                    var2 = _closure1_slot4;
                    var0 = null;
                    if (!(var0 == var2)) {
                        _fun62995_ip = 57;
                        continue _fun62995
                    }
                case 41:
                    var2 = _closure1_slot12;
                    var0 = var2.getId;
                    var0 = var0.bind(var2)();
                    _fun62995_ip = 61;
                    continue _fun62995;
                case 57:
                    var0 = _closure1_slot4;
                case 61:
                    return var0;
            }
        };
        var4.value = var5;
        var0[1] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var8 = var1.bind(var0)(var8);
    var1 = 'VideoSpeakerStore';
    var8.displayName = var1;
    var1 = 14;
    var1 = var5[var1];
    var14 = var7.bind(var0)(var1);
    var1 = {};
    var1.AUDIO_SET_LOCAL_VIDEO_DISABLED = var6;
    var6 = var8.prototype;
    var6 = Object.create(var6, {
        constructor: {
            value: var8
        }
    });
    var15 = var6;
    var13 = var1;
    var1 = new var15[var8](var14, var13, var12);
    var1 = var1 instanceof Object ? var1 : var6;
    var _closure1_slot17 = var1;
    var3 = 15;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'stores/VideoSpeakerStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 3948, 3714, 1216, 3476, 3949, 3523, 3505, 22, 566, 806, 2]);