// modules/voice_overlay/native/MobileVoiceOverlayLifecycleManager.android.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var1
        _fun98428: for (var _fun98428_ip = 0;;) switch (_fun98428_ip) {
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
                _fun98428_ip = 76;
                continue _fun98428;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot26 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot26 = var0;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var1
        _fun98431: for (var _fun98431_ip = 0;;) switch (_fun98431_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun98431_ip = 46;
                    continue _fun98431
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun98431_ip = 55;
                    continue _fun98431
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun98431_ip = 345;
                    continue _fun98431
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun98431_ip = 323;
                    continue _fun98431
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun98431_ip = 283;
                    continue _fun98431
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun98431_ip = 270;
                    continue _fun98431
                }
            case 110:
                var6 = {};
                var8 = var6.toString;
                var6 = var8.call;
                var10 = var6.bind(var8)(var2);
                var9 = var10.slice;
                var8 = 8;
                var6 = -1;
                var8 = var9.bind(var10)(var8, var6);
                var6 = 'Object';
                var6 = var6 === var8;
                if (!var6) {
                    _fun98431_ip = 163;
                    continue _fun98431
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun98431_ip = 179;
                    continue _fun98431
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun98431_ip = 249;
                    continue _fun98431
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun98431_ip = 249;
                    continue _fun98431
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun98431_ip = 234;
                    continue _fun98431
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun98431_ip = 247;
                    continue _fun98431
                }
            case 234:
                var8 = _closure1_slot28;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun98431_ip = 265;
                continue _fun98431;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun98431_ip = 283;
                continue _fun98431;
            case 270:
                var6 = _closure1_slot28;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun98431_ip = 323;
                    continue _fun98431
                }
            case 289:
                var6 = var4.TypeError;
                var4 = var6.prototype;
                var5 = Object.create(var4, {
                    constructor: {
                        value: var6
                    }
                });
                var12 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
                var13 = var5;
                var4 = new var13[var6](var12, var11);
                var4 = var4 instanceof Object ? var4 : var5;
                throw var4;
            case 323:
                if (!var3) {
                    _fun98431_ip = 330;
                    continue _fun98431
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun98432: for (var _fun98432_ip = 0;;) switch (_fun98432_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun98432_ip = 56;
                                continue _fun98432
                            }
                        case 20:
                            var0 = {};
                            var1 = false;
                            var0.done = var1;
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot1;
                            var1 = parseFloat(var1);
                            var3 = var1 + 1;
                            _closure2_slot1 = var3;
                            var1 = var2[var1];
                            var0.value = var1;
                            _fun98432_ip = 67;
                            continue _fun98432;
                        case 56:
                            var1 = {};
                            var2 = true;
                            var1.done = var2;
                            var0 = var1;
                        case 67:
                            return var0;
                    }
                };
                return var0;
            case 345:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot27 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var1
        _fun98433: for (var _fun98433_ip = 0;;) switch (_fun98433_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun98433_ip = 23;
                    continue _fun98433
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun98433_ip = 33;
                    continue _fun98433
                }
            case 28:
                var1 = var3.length;
            case 33:
                var0 = global;
                var0 = var0.Array;
                var0 = var0.bind(var2)(var1);
                var2 = 0;
                var4 = var2 < var1;
                if (!var4) {
                    _fun98433_ip = 70;
                    continue _fun98433
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun98433_ip = 55;
                    continue _fun98433
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot28 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var11 = 0;
    var3 = var5[var11];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var10 = 1;
    var3 = var5[var10];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var9 = 2;
    var3 = var5[var9];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var8 = 3;
    var3 = var5[var8];
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.GUILD_VOCAL_CHANNELS_KEY;
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var5[var3];
    var7 = var6.bind(var0)(var3);
    var _closure1_slot11 = var7;
    var3 = 9;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot12 = var3;
    var3 = 10;
    var3 = var5[var3];
    var12 = var6.bind(var0)(var3);
    var _closure1_slot13 = var12;
    var3 = 11;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot14 = var3;
    var3 = 12;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot15 = var3;
    var3 = 13;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot16 = var3;
    var3 = 14;
    var3 = var5[var3];
    var13 = var6.bind(var0)(var3);
    var _closure1_slot17 = var13;
    var3 = 15;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot18 = var3;
    var3 = 16;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var14 = var3.AnalyticEvents;
    var _closure1_slot19 = var14;
    var3 = var3.Permissions;
    var _closure1_slot20 = var3;
    var3 = 17;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = 18;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = 19;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = 20;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = 21;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = 22;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = 23;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = 24;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = 25;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = new Array(3);
    var3[0] = var13;
    var3[1] = var12;
    var3[2] = var7;
    var _closure1_slot21 = var3;
    var3 = {};
    var3.DISABLED = var11;
    var7 = 'DISABLED';
    var3[var11] = var7;
    var3.NOT_SHOWING = var10;
    var7 = 'NOT_SHOWING';
    var3[var10] = var7;
    var3.WAITING_FOR_SERVICE = var9;
    var7 = 'WAITING_FOR_SERVICE';
    var3[var9] = var7;
    var3.SHOWING = var8;
    var7 = 'SHOWING';
    var3[var8] = var7;
    var _closure1_slot22 = var3;
    var3 = {};
    var7 = 26;
    var8 = var5[var7];
    var8 = var4.bind(var0)(var8);
    var10 = var8.intl;
    var9 = var10.string;
    var8 = var5[var7];
    var8 = var4.bind(var0)(var8);
    var8 = var8.t;
    var8 = var8.CVxXDM;
    var8 = var9.bind(var10)(var8);
    var3.useSpeaker = var8;
    var8 = var5[var7];
    var8 = var4.bind(var0)(var8);
    var10 = var8.intl;
    var9 = var10.string;
    var8 = var5[var7];
    var8 = var4.bind(var0)(var8);
    var8 = var8.t;
    var8 = var8.w4m945;
    var8 = var9.bind(var10)(var8);
    var3.mute = var8;
    var8 = var5[var7];
    var8 = var4.bind(var0)(var8);
    var10 = var8.intl;
    var9 = var10.string;
    var8 = var5[var7];
    var8 = var4.bind(var0)(var8);
    var8 = var8.t;
    var8 = var8["/lEZpt"];
    var8 = var9.bind(var10)(var8);
    var3.disconnectFromVoice = var8;
    var8 = var5[var7];
    var8 = var4.bind(var0)(var8);
    var10 = var8.intl;
    var9 = var10.string;
    var8 = var5[var7];
    var8 = var4.bind(var0)(var8);
    var8 = var8.t;
    var8 = var8.JYzIWe;
    var8 = var9.bind(var10)(var8);
    var3.getInvite = var8;
    var8 = var5[var7];
    var8 = var4.bind(var0)(var8);
    var10 = var8.intl;
    var9 = var10.string;
    var8 = var5[var7];
    var8 = var4.bind(var0)(var8);
    var8 = var8.t;
    var8 = var8.zJvWqU;
    var8 = var9.bind(var10)(var8);
    var3.switchChannels = var8;
    var8 = var5[var7];
    var8 = var4.bind(var0)(var8);
    var10 = var8.intl;
    var9 = var10.string;
    var8 = var5[var7];
    var8 = var4.bind(var0)(var8);
    var8 = var8.t;
    var8 = var8["G/Ez6p"];
    var8 = var9.bind(var10)(var8);
    var3.openDiscord = var8;
    var8 = var5[var7];
    var8 = var4.bind(var0)(var8);
    var10 = var8.intl;
    var9 = var10.string;
    var8 = var5[var7];
    var8 = var4.bind(var0)(var8);
    var8 = var8.t;
    var8 = var8.OhctG7;
    var8 = var9.bind(var10)(var8);
    var3.inviteLinkCopied = var8;
    var8 = var5[var7];
    var8 = var4.bind(var0)(var8);
    var10 = var8.intl;
    var9 = var10.string;
    var8 = var5[var7];
    var8 = var4.bind(var0)(var8);
    var8 = var8.t;
    var8 = var8.r2ptsz;
    var8 = var9.bind(var10)(var8);
    var3.channelSelect = var8;
    var8 = var5[var7];
    var8 = var4.bind(var0)(var8);
    var10 = var8.intl;
    var9 = var10.string;
    var8 = var5[var7];
    var8 = var4.bind(var0)(var8);
    var8 = var8.t;
    var8 = var8.gaifwY;
    var8 = var9.bind(var10)(var8);
    var3.closeWindow = var8;
    var8 = var5[var7];
    var8 = var4.bind(var0)(var8);
    var10 = var8.intl;
    var9 = var10.string;
    var8 = var5[var7];
    var8 = var4.bind(var0)(var8);
    var8 = var8.t;
    var8 = var8.wM7uRI;
    var8 = var9.bind(var10)(var8);
    var3.searchChannels = var8;
    var8 = var5[var7];
    var8 = var4.bind(var0)(var8);
    var9 = var8.intl;
    var8 = var9.string;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var7 = var7.t;
    var7 = var7.wk3qsA;
    var7 = var8.bind(var9)(var7);
    var3.noResults = var7;
    var _closure1_slot23 = var3;
    var3 = function() { // Environment: var1
        var3 = _closure1_slot7;
        var2 = function() { // Original name: MobileVoiceOverlayManager, environment: var4
            var2 = this;
            var _closure3_slot0 = var2;
            var5 = _closure1_slot6;
            var3 = _closure2_slot0;
            var0 = undefined;
            var3 = var5.bind(var0)(var2, var3);
            var3 = null;
            var2.currentVoiceChannelId = var3;
            var2.trashedVoiceChannelId = var3;
            var4 = _closure1_slot22;
            var4 = var4.DISABLED;
            var2.overlayState = var4;
            var4 = new Array(0);
            var2.channelSelectorResults = var4;
            var2.layoutTrashedSubscription = var3;
            var2.channelQueryUpdateSubscription = var3;
            var3 = false;
            var2.isBatchedBridgeInitialized = var3;
            var3 = function() { // Environment: var1
                _fun98436: for (var _fun98436_ip = 0;;) switch (_fun98436_ip) {
                    case 0:
                        var2 = _closure1_slot18;
                        var1 = var2.getEnabled;
                        var2 = var1.bind(var2)();
                        var1 = _closure3_slot0;
                        if (var2) {
                            _fun98436_ip = 133;
                            continue _fun98436
                        }
                    case 27:
                        var2 = var1.unsubscribeFromVoiceStateStoreUpdates;
                        var2 = var2.bind(var1)();
                        var2 = var1.unsubscribeFromNativeEvents;
                        var2 = var2.bind(var1)();
                        var2 = var1.isOverlayShowing;
                        var2 = var2.bind(var1)();
                        var3 = _closure1_slot22;
                        var3 = var3.DISABLED;
                        var1.overlayState = var3;
                        if (!var2) {
                            _fun98436_ip = 143;
                            continue _fun98436
                        }
                    case 76:
                        var5 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var4 = 27;
                        var2 = var2[var4];
                        var3 = undefined;
                        var5 = var5.bind(var3)(var2);
                        var2 = null;
                        if (!(var2 != var5)) {
                            _fun98436_ip = 143;
                            continue _fun98436
                        }
                    case 104:
                        var2 = _closure1_slot1;
                        var0 = _closure1_slot2;
                        var0 = var0[var4];
                        var2 = var2.bind(var3)(var0);
                        var0 = var2.hideOverlay;
                        var0 = var0.bind(var2)();
                        _fun98436_ip = 143;
                        continue _fun98436;
                    case 133:
                        var0 = var1.handleOverlayEnable;
                        var0 = var0.bind(var1)();
                    case 143:
                        var0 = undefined;
                        return var0;
                }
            };
            var2.handleMobileVoiceOverlayStoreUpdate = var3;
            var3 = function() { // Environment: var1
                _fun98437: for (var _fun98437_ip = 0;;) switch (_fun98437_ip) {
                    case 0:
                        var0 = function() { // Original name: handleEnableFail, environment: var1
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 28;
                            var2 = var2[var0];
                            var0 = undefined;
                            var4 = var3.bind(var0)(var2);
                            var3 = var4.setEnabled;
                            var2 = false;
                            var2 = var3.bind(var4)(var2);
                            var2 = _closure3_slot0;
                            var1 = _closure1_slot22;
                            var1 = var1.DISABLED;
                            var2.overlayState = var1;
                            return var0;
                        };
                        var _closure4_slot0 = var0;
                        var5 = _closure1_slot1;
                        var0 = _closure1_slot2;
                        var4 = 27;
                        var3 = var0[var4];
                        var0 = undefined;
                        var5 = var5.bind(var0)(var3);
                        var3 = null;
                        if (!(var3 != var5)) {
                            _fun98437_ip = 108;
                            continue _fun98437
                        }
                    case 44:
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var2 = var2[var4];
                        var3 = var3.bind(var0)(var2);
                        var2 = var3.enableOverlay;
                        var4 = var2.bind(var3)();
                        var3 = var4.then;
                        var2 = function(arg0) { // Environment: var1
                            _fun98439: for (var _fun98439_ip = 0;;) switch (_fun98439_ip) {
                                case 0:
                                    var0 = arg0;
                                    if (var0) {
                                        _fun98439_ip = 21;
                                        continue _fun98439
                                    }
                                case 6:
                                    var1 = _closure4_slot0;
                                    var0 = undefined;
                                    var0 = var1.bind(var0)();
                                    _fun98439_ip = 67;
                                    continue _fun98439;
                                case 21:
                                    var1 = _closure3_slot0;
                                    var0 = var1.subscribeToVoiceStateStoreUpdates;
                                    var0 = var0.bind(var1)();
                                    var0 = var1.subscribeToNativeEvents;
                                    var0 = var0.bind(var1)();
                                    var0 = _closure1_slot22;
                                    var0 = var0.NOT_SHOWING;
                                    var1.overlayState = var0;
                                case 67:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var3 = var3.bind(var4)(var2);
                        var2 = var3.catch;
                        var1 = function() { // Environment: var1
                            var1 = _closure4_slot0;
                            var0 = undefined;
                            var1 = var1.bind(var0)();
                            return var0;
                        };
                        var1 = var2.bind(var3)(var1);
                    case 108:
                        return var0;
                }
            };
            var2.handleOverlayEnable = var3;
            var3 = function() { // Environment: var1
                _fun98441: for (var _fun98441_ip = 0;;) switch (_fun98441_ip) {
                    case 0:
                        var1 = _closure3_slot0;
                        var0 = var1.isSubscribedToVoiceStateStoreUpdates;
                        var0 = var0.bind(var1)();
                        if (var0) {
                            _fun98441_ip = 46;
                            continue _fun98441
                        }
                    case 20:
                        var2 = _closure1_slot21;
                        var1 = var2.forEach;
                        var0 = function(arg0) { // Environment: var0
                            var2 = arg0;
                            var1 = var2.addChangeListener;
                            var0 = _closure3_slot0;
                            var0 = var0.handleOverlayUIStoreUpdate;
                            var0 = var1.bind(var2)(var0);
                            var0 = undefined;
                            return var0;
                        };
                        var0 = var1.bind(var2)(var0);
                    case 46:
                        var0 = undefined;
                        return var0;
                }
            };
            var2.subscribeToVoiceStateStoreUpdates = var3;
            var3 = function() { // Environment: var1
                _fun98443: for (var _fun98443_ip = 0;;) switch (_fun98443_ip) {
                    case 0:
                        var1 = _closure3_slot0;
                        var0 = var1.isSubscribedToVoiceStateStoreUpdates;
                        var0 = var0.bind(var1)();
                        if (!var0) {
                            _fun98443_ip = 46;
                            continue _fun98443
                        }
                    case 20:
                        var2 = _closure1_slot21;
                        var1 = var2.forEach;
                        var0 = function(arg0) { // Environment: var0
                            var2 = arg0;
                            var1 = var2.removeChangeListener;
                            var0 = _closure3_slot0;
                            var0 = var0.handleOverlayUIStoreUpdate;
                            var0 = var1.bind(var2)(var0);
                            var0 = undefined;
                            return var0;
                        };
                        var0 = var1.bind(var2)(var0);
                    case 46:
                        var0 = undefined;
                        return var0;
                }
            };
            var2.unsubscribeFromVoiceStateStoreUpdates = var3;
            var3 = function() { // Environment: var1
                var2 = _closure1_slot21;
                var1 = var2.find;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var2 = var0._changeCallbacks;
                    var1 = var2.has;
                    var0 = _closure3_slot0;
                    var0 = var0.handleOverlayUIStoreUpdate;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var1 = var1.bind(var2)(var0);
                var0 = null;
                var0 = var0 != var1;
                return var0;
            };
            var2.isSubscribedToVoiceStateStoreUpdates = var3;
            var3 = function() { // Environment: var1
                _fun98447: for (var _fun98447_ip = 0;;) switch (_fun98447_ip) {
                    case 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 29;
                        var2 = var2[var0];
                        var0 = undefined;
                        var3 = var3.bind(var0)(var2);
                        var2 = var3.isFabric;
                        var2 = var2.bind(var3)();
                        if (!var2) {
                            _fun98447_ip = 124;
                            continue _fun98447
                        }
                    case 38:
                        var2 = _closure3_slot0;
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var1 = 27;
                        var5 = var4[var1];
                        var7 = var3.bind(var0)(var5);
                        var6 = var7.onLayoutTrashed;
                        var5 = var2.handleLayoutTrashed;
                        var5 = var6.bind(var7)(var5);
                        var2.layoutTrashedSubscription = var5;
                        var1 = var4[var1];
                        var4 = var3.bind(var0)(var1);
                        var3 = var4.onChannelQueryUpdate;
                        var1 = var2.handleChannelQueryUpdate;
                        var1 = var3.bind(var4)(var1);
                        var2.channelQueryUpdateSubscription = var1;
                    case 124:
                        return var0;
                }
            };
            var2.subscribeToNativeEvents = var3;
            var3 = function() { // Environment: var1
                _fun98448: for (var _fun98448_ip = 0;;) switch (_fun98448_ip) {
                    case 0:
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 29;
                        var1 = var1[var0];
                        var0 = undefined;
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.isFabric;
                        var1 = var1.bind(var2)();
                        if (!var1) {
                            _fun98448_ip = 91;
                            continue _fun98448
                        }
                    case 38:
                        var1 = _closure3_slot0;
                        var4 = var1.layoutTrashedSubscription;
                        var1 = null;
                        if (!(var1 != var4)) {
                            _fun98448_ip = 67;
                            continue _fun98448
                        }
                    case 57:
                        var3 = var4.remove;
                        var3 = var3.bind(var4)();
                    case 67:
                        var2 = _closure3_slot0;
                        var2 = var2.channelQueryUpdateSubscription;
                        if (!(var1 != var2)) {
                            _fun98448_ip = 91;
                            continue _fun98448
                        }
                    case 81:
                        var1 = var2.remove;
                        var1 = var1.bind(var2)();
                    case 91:
                        return var0;
                }
            };
            var2.unsubscribeFromNativeEvents = var3;
            var3 = function() { // Environment: var1
                _fun98449: for (var _fun98449_ip = 0;;) switch (_fun98449_ip) {
                    case 0:
                        var0 = _closure3_slot0;
                        var3 = var0.overlayState;
                        var0 = _closure1_slot22;
                        var0 = var0.DISABLED;
                        if (!(var3 !== var0)) {
                            _fun98449_ip = 158;
                            continue _fun98449
                        }
                    case 33:
                        var0 = _closure3_slot0;
                        var3 = var0.getVoiceConnectedGuildAndChannel;
                        var3 = var3.bind(var0)();
                        var3 = var3.currentVoiceChannelId;
                        var0 = var0.currentVoiceChannelId;
                        if (!(var3 !== var0)) {
                            _fun98449_ip = 81;
                            continue _fun98449
                        }
                    case 63:
                        var4 = _closure3_slot0;
                        var4.currentVoiceChannelId = var3;
                        var0 = null;
                        var4.trashedVoiceChannelId = var0;
                    case 81:
                        var0 = null;
                        if (!(var0 != var3)) {
                            _fun98449_ip = 101;
                            continue _fun98449
                        }
                    case 87:
                        var0 = _closure3_slot0;
                        var0 = var0.trashedVoiceChannelId;
                        if (!(var3 === var0)) {
                            _fun98449_ip = 134;
                            continue _fun98449
                        }
                    case 101:
                        var3 = _closure3_slot0;
                        var0 = var3.isOverlayShowing;
                        var0 = var0.bind(var3)();
                        if (!var0) {
                            _fun98449_ip = 158;
                            continue _fun98449
                        }
                    case 118:
                        var3 = _closure3_slot0;
                        var0 = var3.hideOverlay;
                        var0 = var0.bind(var3)();
                        _fun98449_ip = 158;
                        continue _fun98449;
                    case 134:
                        var0 = _closure3_slot0;
                        var3 = var0.overlayState;
                        var0 = _closure1_slot22;
                        var0 = var0.WAITING_FOR_SERVICE;
                        if (!(var3 === var0)) {
                            _fun98449_ip = 162;
                            continue _fun98449
                        }
                    case 158:
                        var0 = undefined;
                        return var0;
                    case 162:
                        var0 = _closure3_slot0;
                        var3 = var0.overlayState;
                        var0 = _closure1_slot22;
                        var0 = var0.NOT_SHOWING;
                        if (!(var3 !== var0)) {
                            _fun98449_ip = 231;
                            continue _fun98449
                        }
                    case 186:
                        var0 = _closure3_slot0;
                        var3 = var0.overlayState;
                        var0 = _closure1_slot22;
                        var0 = var0.SHOWING;
                        var0 = var3 === var0;
                        if (!var0) {
                            _fun98449_ip = 227;
                            continue _fun98449
                        }
                    case 213:
                        var4 = _closure3_slot0;
                        var3 = var4.updateOverlayUI;
                        var0 = var3.bind(var4)();
                    case 227:
                        var0 = undefined;
                        _fun98449_ip = 295;
                        continue _fun98449;
                    case 231:
                        var5 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var3 = 30;
                        var4 = var4[var3];
                        var3 = undefined;
                        var5 = var5.bind(var3)(var4);
                        var4 = var5.isForegroundServiceRunning;
                        var3 = function(arg0) { // Environment: var3
                            _fun98450: for (var _fun98450_ip = 0;;) switch (_fun98450_ip) {
                                case 0:
                                    var1 = _closure3_slot0;
                                    var0 = arg0;
                                    if (var0) {
                                        _fun98450_ip = 34;
                                        continue _fun98450
                                    }
                                case 13:
                                    var0 = _closure1_slot22;
                                    var0 = var0.NOT_SHOWING;
                                    var1.overlayState = var0;
                                    _fun98450_ip = 44;
                                    continue _fun98450;
                                case 34:
                                    var0 = var1.showOverlay;
                                    var0 = var0.bind(var1)();
                                case 44:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var3 = var4.bind(var5)(var3);
                        var2 = _closure3_slot0;
                        var1 = _closure1_slot22;
                        var1 = var1.WAITING_FOR_SERVICE;
                        var2.overlayState = var1;
                        var0 = undefined;
                    case 295:
                        return var0;
                }
            };
            var2.handleOverlayUIStoreUpdate = var3;
            var3 = function() { // Environment: var1
                _fun98451: for (var _fun98451_ip = 0;;) switch (_fun98451_ip) {
                    case 0:
                        var1 = _closure1_slot16;
                        var0 = var1.getCurrentUser;
                        var1 = var0.bind(var1)();
                        var11 = null;
                        var2 = var11 == var1;
                        var0 = undefined;
                        var15 = undefined;
                        if (var2) {
                            _fun98451_ip = 34;
                            continue _fun98451
                        }
                    case 29:
                        var15 = var1.id;
                    case 34:
                        if (!(var11 != var15)) {
                            _fun98451_ip = 735;
                            continue _fun98451
                        }
                    case 41:
                        var2 = _closure3_slot0;
                        var1 = var2.getVoiceConnectedGuildAndChannel;
                        var1 = var1.bind(var2)();
                        var10 = var1.currentGuildId;
                        var9 = var1.currentVoiceChannelId;
                        var2 = _closure1_slot8;
                        var1 = var2.getChannel;
                        var8 = var1.bind(var2)(var9);
                        if (!(var11 != var9)) {
                            _fun98451_ip = 735;
                            continue _fun98451
                        }
                    case 91:
                        if (!(var11 != var8)) {
                            _fun98451_ip = 735;
                            continue _fun98451
                        }
                    case 98:
                        var2 = _closure3_slot0;
                        var1 = var2.getOverlayUser;
                        var2 = var1.bind(var2)(var15);
                        if (!(var11 != var2)) {
                            _fun98451_ip = 735;
                            continue _fun98451
                        }
                    case 120:
                        var3 = _closure1_slot17;
                        var1 = var3.getVoiceStatesForChannel;
                        var6 = var1.bind(var3)(var9);
                        var1 = global;
                        var3 = var1.Object;
                        var1 = var3.keys;
                        var7 = var1.bind(var3)(var6);
                        var1 = var2.speaking;
                        var14 = var2;
                        if (var1) {
                            _fun98451_ip = 241;
                            continue _fun98451
                        }
                    case 165:
                        var1 = _closure1_slot27;
                        var6 = var1.bind(var0)(var7);
                        var3 = var6.bind(var0)();
                        var1 = var3.done;
                        var14 = null;
                        if (var1) {
                            _fun98451_ip = 241;
                            continue _fun98451
                        }
                    case 188:
                        var13 = var3.value;
                        var12 = _closure3_slot0;
                        var1 = var12.getOverlayUser;
                        var12 = var1.bind(var12)(var13);
                        if (!(var11 != var12)) {
                            _fun98451_ip = 224;
                            continue _fun98451
                        }
                    case 212:
                        var1 = var12.speaking;
                        var14 = var12;
                        if (var1) {
                            _fun98451_ip = 241;
                            continue _fun98451
                        }
                    case 224:
                        var12 = var6.bind(var0)();
                        var1 = var12.done;
                        var3 = var12;
                        var14 = null;
                        if (!var1) {
                            _fun98451_ip = 188;
                            continue _fun98451
                        }
                    case 241:
                        if (!(var11 == var14)) {
                            _fun98451_ip = 248;
                            continue _fun98451
                        }
                    case 245:
                        var14 = var2;
                    case 248:
                        var6 = new Array(1);
                        var6[0] = var14;
                        var3 = var14.userId;
                        var1 = var2.userId;
                        if (!(var3 !== var1)) {
                            _fun98451_ip = 280;
                            continue _fun98451
                        }
                    case 270:
                        var1 = var6.push;
                        var1 = var1.bind(var6)(var2);
                    case 280:
                        var1 = var7.length;
                        var13 = 0;
                        var1 = var13 < var1;
                        var12 = 3;
                        var3 = undefined;
                        var2 = undefined;
                        if (!var1) {
                            _fun98451_ip = 401;
                            continue _fun98451
                        }
                    case 301:
                        var18 = var7[var13];
                        var16 = var2;
                        if (!(var18 !== var15)) {
                            _fun98451_ip = 386;
                            continue _fun98451
                        }
                    case 312:
                        var17 = var11 == var14;
                        var1 = undefined;
                        if (var17) {
                            _fun98451_ip = 326;
                            continue _fun98451
                        }
                    case 321:
                        var1 = var14.userId;
                    case 326:
                        var3 = var14;
                        var16 = var2;
                        if (!(var18 !== var1)) {
                            _fun98451_ip = 386;
                            continue _fun98451
                        }
                    case 336:
                        var17 = _closure3_slot0;
                        var1 = var17.getOverlayUser;
                        var17 = var1.bind(var17)(var18);
                        var3 = var14;
                        var16 = var17;
                        if (!(var11 != var16)) {
                            _fun98451_ip = 386;
                            continue _fun98451
                        }
                    case 361:
                        var1 = var6.push;
                        var1 = var1.bind(var6)(var17);
                        var1 = var6.length;
                        var3 = var14;
                        var16 = var17;
                        if (!(!(var1 >= var12))) {
                            _fun98451_ip = 401;
                            continue _fun98451
                        }
                    case 386:
                        var13 = var13 + 1;
                        var1 = var7.length;
                        var2 = var16;
                        if (var13 < var1) {
                            _fun98451_ip = 301;
                            continue _fun98451
                        }
                    case 401:
                        var1 = _closure3_slot0;
                        var2 = var1.overlayState;
                        var1 = _closure1_slot22;
                        var1 = var1.SHOWING;
                        if (!(var2 !== var1)) {
                            _fun98451_ip = 444;
                            continue _fun98451
                        }
                    case 425:
                        var3 = _closure3_slot0;
                        var2 = var3.refreshChannelSelectorResults;
                        var1 = '';
                        var1 = var2.bind(var3)(var1);
                    case 444:
                        var1 = _closure3_slot0;
                        var1.currentVoiceChannelId = var9;
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 27;
                        var2 = var2[var1];
                        var2 = var3.bind(var0)(var2);
                        if (!(var11 != var2)) {
                            _fun98451_ip = 735;
                            continue _fun98451
                        }
                    case 481:
                        var2 = _closure1_slot1;
                        var14 = _closure1_slot2;
                        var1 = var14[var1];
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.setData;
                        var1 = {};
                        var1.users = var6;
                        var13 = _closure1_slot0;
                        var12 = 31;
                        var12 = var14[var12];
                        var15 = var13.bind(var0)(var12);
                        var14 = var15.computeChannelName;
                        var13 = _closure1_slot16;
                        var12 = _closure1_slot14;
                        var12 = var14.bind(var15)(var8, var13, var12);
                        var1.channelName = var12;
                        var13 = _closure1_slot10;
                        var12 = var13.getGuild;
                        var13 = var12.bind(var13)(var10);
                        var14 = var11 == var13;
                        var12 = undefined;
                        if (var14) {
                            _fun98451_ip = 581;
                            continue _fun98451
                        }
                    case 576:
                        var12 = var13.name;
                    case 581:
                        var13 = var11 != var12;
                        var11 = '';
                        if (!var13) {
                            _fun98451_ip = 595;
                            continue _fun98451
                        }
                    case 592:
                        var11 = var12;
                    case 595:
                        var1.guildName = var11;
                        var1.guildId = var10;
                        var1.channelId = var9;
                        var7 = var7.length;
                        var6 = var6.length;
                        var6 = var7 - var6;
                        var1.extraUsers = var6;
                        var7 = _closure1_slot11;
                        var6 = var7.isSelfDeaf;
                        var6 = var6.bind(var7)();
                        var1.deafened = var6;
                        var6 = var7.isSelfMute;
                        var6 = var6.bind(var7)();
                        var1.muted = var6;
                        var7 = _closure1_slot13;
                        var6 = var7.getQuality;
                        var6 = var6.bind(var7)();
                        var1.connectionQuality = var6;
                        var7 = _closure1_slot12;
                        var6 = var7.can;
                        var5 = _closure1_slot20;
                        var5 = var5.CREATE_INSTANT_INVITE;
                        var5 = var6.bind(var7)(var5, var8);
                        var1.canGenerateInvite = var5;
                        var4 = _closure3_slot0;
                        var4 = var4.channelSelectorResults;
                        var1.channelSelectorResults = var4;
                        var1 = var2.bind(var3)(var1);
                    case 735:
                        return var0;
                }
            };
            var2.updateOverlayUI = var3;
            var3 = function() { // Environment: var1
                _fun98452: for (var _fun98452_ip = 0;;) switch (_fun98452_ip) {
                    case 0:
                        var0 = {};
                        var3 = _closure1_slot13;
                        var1 = var3.getGuildId;
                        var4 = var1.bind(var3)();
                        var1 = null;
                        var5 = var1 != var4;
                        var3 = null;
                        if (!var5) {
                            _fun98452_ip = 33;
                            continue _fun98452
                        }
                    case 30:
                        var3 = var4;
                    case 33:
                        var0.currentGuildId = var3;
                        var3 = _closure1_slot13;
                        var2 = var3.getChannelId;
                        var2 = var2.bind(var3)();
                        var3 = var1 != var2;
                        var1 = null;
                        if (!var3) {
                            _fun98452_ip = 64;
                            continue _fun98452
                        }
                    case 61:
                        var1 = var2;
                    case 64:
                        var0.currentVoiceChannelId = var1;
                        return var0;
                }
            };
            var2.getVoiceConnectedGuildAndChannel = var3;
            var3 = function(arg0) { // Environment: var1
                _fun98453: for (var _fun98453_ip = 0;;) switch (_fun98453_ip) {
                    case 0:
                        var8 = arg0;
                        var2 = var8.length;
                        var0 = 0;
                        var6 = null;
                        if (!(var0 === var2)) {
                            _fun98453_ip = 41;
                            continue _fun98453
                        }
                    case 18:
                        var2 = _closure3_slot0;
                        var0 = var2.getVoiceConnectedGuildAndChannel;
                        var0 = var0.bind(var2)();
                        var6 = var0.currentGuildId;
                    case 41:
                        var2 = _closure3_slot0;
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var0 = 32;
                        var3 = var3[var0];
                        var0 = undefined;
                        var5 = var4.bind(var0)(var3);
                        var4 = var5.queryChannels;
                        var3 = {};
                        var3.query = var8;
                        var3.guildId = var6;
                        var6 = 15;
                        var3.limit = var6;
                        var6 = true;
                        var3.fuzzy = var6;
                        var8 = function(arg0) { // Original name: filter, environment: var1
                            _fun98454: for (var _fun98454_ip = 0;;) switch (_fun98454_ip) {
                                case 0:
                                    var2 = arg0;
                                    var1 = var2.id;
                                    var0 = _closure3_slot0;
                                    var0 = var0.currentVoiceChannelId;
                                    var0 = var1 !== var0;
                                    if (!var0) {
                                        _fun98454_ip = 41;
                                        continue _fun98454
                                    }
                                case 28:
                                    var1 = var2.isGuildStageVoice;
                                    var1 = var1.bind(var2)();
                                    var0 = !var1;
                                case 41:
                                    return var0;
                            }
                        };
                        var3.filter = var8;
                        var7 = _closure1_slot9;
                        var3.type = var7;
                        var3.allowEmptyQueries = var6;
                        var4 = var4.bind(var5)(var3);
                        var3 = var4.map;
                        var1 = function(arg0) { // Environment: var1
                            _fun98455: for (var _fun98455_ip = 0;;) switch (_fun98455_ip) {
                                case 0:
                                    var0 = arg0;
                                    var4 = var0.record;
                                    var0 = {};
                                    var1 = var4.id;
                                    var0.channelId = var1;
                                    var1 = var4.guild_id;
                                    var0.guildId = var1;
                                    var1 = var4.name;
                                    var0.channelName = var1;
                                    var3 = _closure1_slot10;
                                    var2 = var3.getGuild;
                                    var1 = var4.guild_id;
                                    var1 = var2.bind(var3)(var1);
                                    var3 = null;
                                    var6 = var3 == var1;
                                    var7 = undefined;
                                    if (var6) {
                                        _fun98455_ip = 77;
                                        continue _fun98455
                                    }
                                case 72:
                                    var7 = var1.name;
                                case 77:
                                    var8 = var3 != var7;
                                    var1 = '';
                                    var6 = var1;
                                    if (!var8) {
                                        _fun98455_ip = 94;
                                        continue _fun98455
                                    }
                                case 91:
                                    var6 = var7;
                                case 94:
                                    var0.guildName = var6;
                                    var6 = _closure1_slot8;
                                    var5 = var6.getChannel;
                                    var4 = var4.parent_id;
                                    var4 = var5.bind(var6)(var4);
                                    var5 = var3 == var4;
                                    var2 = undefined;
                                    if (var5) {
                                        _fun98455_ip = 133;
                                        continue _fun98455
                                    }
                                case 128:
                                    var2 = var4.name;
                                case 133:
                                    var3 = var3 != var2;
                                    if (!var3) {
                                        _fun98455_ip = 143;
                                        continue _fun98455
                                    }
                                case 140:
                                    var1 = var2;
                                case 143:
                                    var0.categoryName = var1;
                                    return var0;
                            }
                        };
                        var1 = var3.bind(var4)(var1);
                        var2.channelSelectorResults = var1;
                        return var0;
                }
            };
            var2.refreshChannelSelectorResults = var3;
            var3 = function() { // Environment: var1
                _fun98456: for (var _fun98456_ip = 0;;) switch (_fun98456_ip) {
                    case 0:
                        var1 = _closure3_slot0;
                        var0 = var1.getVoiceConnectedGuildAndChannel;
                        var0 = var0.bind(var1)();
                        var11 = var0.currentGuildId;
                        var4 = var0.currentVoiceChannelId;
                        var3 = _closure1_slot8;
                        var0 = var3.getChannel;
                        var14 = var0.bind(var3)(var4);
                        var3 = _closure1_slot13;
                        var0 = var3.getRTCConnectionId;
                        var9 = var0.bind(var3)();
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var0 = 33;
                        var5 = var3[var0];
                        var0 = undefined;
                        var8 = var4.bind(var0)(var5);
                        var7 = var8.track;
                        var5 = _closure1_slot19;
                        var6 = var5.MOBILE_OVERLAY_OPENED;
                        var5 = {};
                        var10 = 'voice';
                        var5.type = var10;
                        var5.rtc_connection_id = var9;
                        var10 = _closure1_slot0;
                        var9 = 34;
                        var12 = var3[var9];
                        var13 = var10.bind(var0)(var12);
                        var12 = var13.collectChannelAnalyticsMetadata;
                        var15 = var12.bind(var13)(var14);
                        var16 = var5;
                        var12 = copyDataProperties(var16, var15);
                        var9 = var3[var9];
                        var10 = var10.bind(var0)(var9);
                        var9 = var10.collectGuildAnalyticsMetadata;
                        var15 = var9.bind(var10)(var11);
                        var16 = var5;
                        var9 = copyDataProperties(var16, var15);
                        var5 = var7.bind(var8)(var6, var5);
                        var5 = 27;
                        var3 = var3[var5];
                        var4 = var4.bind(var0)(var3);
                        var3 = null;
                        if (!(var3 != var4)) {
                            _fun98456_ip = 229;
                            continue _fun98456
                        }
                    case 197:
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var3 = var3[var5];
                        var5 = var4.bind(var0)(var3);
                        var4 = var5.showOverlay;
                        var3 = _closure1_slot23;
                        var3 = var4.bind(var5)(var3);
                    case 229:
                        var2 = _closure3_slot0;
                        var3 = var2.updateOverlayUI;
                        var3 = var3.bind(var2)();
                        var1 = _closure1_slot22;
                        var1 = var1.SHOWING;
                        var2.overlayState = var1;
                        return var0;
                }
            };
            var2.showOverlay = var3;
            var3 = function() { // Environment: var1
                _fun98457: for (var _fun98457_ip = 0;;) switch (_fun98457_ip) {
                    case 0:
                        var2 = _closure1_slot13;
                        var0 = var2.getRTCConnectionId;
                        var10 = var0.bind(var2)();
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var5 = 33;
                        var4 = var2[var5];
                        var0 = undefined;
                        var9 = var3.bind(var0)(var4);
                        var8 = var9.track;
                        var4 = _closure1_slot19;
                        var7 = var4.MOBILE_OVERLAY_CLOSED;
                        var6 = {};
                        var11 = 'voice';
                        var6.type = var11;
                        var6.rtc_connection_id = var10;
                        var6 = var8.bind(var9)(var7, var6);
                        var5 = var2[var5];
                        var7 = var3.bind(var0)(var5);
                        var6 = var7.track;
                        var5 = var4.MOBILE_OVERLAY_CLOSED;
                        var4 = {};
                        var4 = var6.bind(var7)(var5, var4);
                        var4 = 27;
                        var2 = var2[var4];
                        var3 = var3.bind(var0)(var2);
                        var2 = null;
                        if (!(var2 != var3)) {
                            _fun98457_ip = 148;
                            continue _fun98457
                        }
                    case 121:
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var2 = var2[var4];
                        var3 = var3.bind(var0)(var2);
                        var2 = var3.hideOverlay;
                        var2 = var2.bind(var3)();
                    case 148:
                        var2 = _closure3_slot0;
                        var1 = _closure1_slot22;
                        var1 = var1.NOT_SHOWING;
                        var2.overlayState = var1;
                        return var0;
                }
            };
            var2.hideOverlay = var3;
            var3 = function() { // Environment: var1
                _fun98458: for (var _fun98458_ip = 0;;) switch (_fun98458_ip) {
                    case 0:
                        var0 = _closure3_slot0;
                        var3 = var0.overlayState;
                        var0 = _closure1_slot22;
                        var0 = var0.SHOWING;
                        var0 = var3 === var0;
                        if (var0) {
                            _fun98458_ip = 57;
                            continue _fun98458
                        }
                    case 33:
                        var2 = _closure3_slot0;
                        var2 = var2.overlayState;
                        var1 = _closure1_slot22;
                        var1 = var1.WAITING_FOR_SERVICE;
                        var0 = var2 === var1;
                    case 57:
                        return var0;
                }
            };
            var2.isOverlayShowing = var3;
            var3 = function(arg0) { // Environment: var1
                _fun98459: for (var _fun98459_ip = 0;;) switch (_fun98459_ip) {
                    case 0:
                        var4 = arg0;
                        var2 = _closure1_slot16;
                        var0 = var2.getUser;
                        var2 = var0.bind(var2)(var4);
                        var0 = null;
                        if (!(var0 != var2)) {
                            _fun98459_ip = 77;
                            continue _fun98459
                        }
                    case 27:
                        var3 = _closure1_slot15;
                        var1 = var3.isSpeaking;
                        var3 = var1.bind(var3)(var4);
                        var1 = {};
                        var1.userId = var4;
                        var4 = var2.avatar;
                        var1.avatar = var4;
                        var1.speaking = var3;
                        var2 = var2.discriminator;
                        var1.discriminator = var2;
                        return var1;
                    case 77:
                        return var0;
                }
            };
            var2.getOverlayUser = var3;
            var3 = function() { // Environment: var1
                var1 = _closure3_slot0;
                var0 = var1.currentVoiceChannelId;
                var1.trashedVoiceChannelId = var0;
                var0 = var1.handleOverlayUIStoreUpdate;
                var0 = var0.bind(var1)();
                var0 = undefined;
                return var0;
            };
            var2.handleLayoutTrashed = var3;
            var1 = function(arg0) { // Environment: var1
                var1 = _closure3_slot0;
                var2 = var1.refreshChannelSelectorResults;
                var0 = arg0;
                var0 = var2.bind(var1)(var0);
                var0 = var1.handleOverlayUIStoreUpdate;
                var0 = var0.bind(var1)();
                var0 = undefined;
                return var0;
            };
            var2.handleChannelQueryUpdate = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'initialize';
        var0.key = var1;
        var1 = function() { // Original name: value, environment: var4
            _fun98462: for (var _fun98462_ip = 0;;) switch (_fun98462_ip) {
                case 0:
                    var1 = this;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var0 = 29;
                    var3 = var3[var0];
                    var0 = undefined;
                    var4 = var4.bind(var0)(var3);
                    var3 = var4.isFabric;
                    var3 = var3.bind(var4)();
                    if (var3) {
                        _fun98462_ip = 47;
                        continue _fun98462
                    }
                case 41:
                    var3 = var1.isBatchedBridgeInitialized;
                case 47:
                    if (var3) {
                        _fun98462_ip = 123;
                        continue _fun98462
                    }
                case 50:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 35;
                    var3 = var5[var3];
                    var6 = var4.bind(var0)(var3);
                    var5 = var6.registerCallableModule;
                    var3 = _closure1_slot25;
                    var4 = var3.prototype;
                    var4 = Object.create(var4, {
                        constructor: {
                            value: var3
                        }
                    });
                    var9 = var4;
                    var8 = var1;
                    var3 = new var9[var3](var8, var7);
                    var4 = var3 instanceof Object ? var3 : var4;
                    var3 = 'MobileVoiceOverlayManager';
                    var3 = var5.bind(var6)(var3, var4);
                    var3 = true;
                    var1.isBatchedBridgeInitialized = var3;
                case 123:
                    var4 = _closure1_slot18;
                    var3 = var4.getEnabled;
                    var3 = var3.bind(var4)();
                    if (!var3) {
                        _fun98462_ip = 150;
                        continue _fun98462
                    }
                case 140:
                    var3 = var1.handleOverlayEnable;
                    var3 = var3.bind(var1)();
                case 150:
                    var3 = _closure1_slot18;
                    var2 = var3.addChangeListener;
                    var1 = var1.handleMobileVoiceOverlayStoreUpdate;
                    var1 = var2.bind(var3)(var1);
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(2);
        var1[0] = var0;
        var0 = {};
        var5 = 'terminate';
        var0.key = var5;
        var4 = function() { // Original name: value, environment: var4
            var1 = this;
            var3 = _closure1_slot18;
            var2 = var3.removeChangeListener;
            var0 = var1.handleMobileVoiceOverlayStoreUpdate;
            var0 = var2.bind(var3)(var0);
            var0 = var1.unsubscribeFromVoiceStateStoreUpdates;
            var0 = var0.bind(var1)();
            var0 = var1.unsubscribeFromNativeEvents;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var0.value = var4;
        var1[1] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var3 = var3.bind(var0)();
    var7 = var3.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var3
        }
    });
    var18 = var7;
    var3 = new var18[var3](var17);
    var3 = var3 instanceof Object ? var3 : var7;
    var _closure1_slot24 = var3;
    var3 = function() { // Environment: var1
        var3 = _closure1_slot7;
        var2 = function(arg0) { // Original name: NativeCallableInterface, environment: var4
            var2 = this;
            var3 = _closure1_slot6;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            var1 = arg0;
            var2.manager = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'onLayoutTrashed';
        var0.key = var1;
        var1 = function() { // Original name: value, environment: var4
            var0 = this;
            var1 = var0.manager;
            var0 = var1.handleLayoutTrashed;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var0.value = var1;
        var1 = new Array(2);
        var1[0] = var0;
        var0 = {};
        var5 = 'onChannelQueryUpdate';
        var0.key = var5;
        var4 = function(arg0) { // Original name: value, environment: var4
            var0 = this;
            var2 = var0.manager;
            var1 = var2.handleChannelQueryUpdate;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var0.value = var4;
        var1[1] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var3 = var3.bind(var0)();
    var _closure1_slot25 = var3;
    var3 = 36;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var3 = function() { // Original name: MobileVoiceOverlayLifecycleManager, environment: var5
            _fun98469: for (var _fun98469_ip = 0;;) switch (_fun98469_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot6;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot4;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot3;
                    var0 = _closure1_slot26;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun98469_ip = 69;
                        continue _fun98469
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun98469_ip = 105;
                    continue _fun98469;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot4;
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
        var4 = _closure1_slot5;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot7;
        var4 = {};
        var0 = '_initialize';
        var4.key = var0;
        var0 = function() { // Original name: value, environment: var5
            var1 = _closure1_slot24;
            var0 = var1.initialize;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(2);
        var0[0] = var4;
        var4 = {};
        var6 = '_terminate';
        var4.key = var6;
        var5 = function() { // Original name: value, environment: var5
            var1 = _closure1_slot24;
            var0 = var1.terminate;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var4.value = var5;
        var0[1] = var4;
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
    var18 = var3;
    var1 = new var18[var1](var17);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 37;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/voice_overlay/native/MobileVoiceOverlayLifecycleManager.android.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [15, 17, 18, 6, 7, 1372, 1662, 1410, 3435, 3050, 3477, 3059, 3908, 1613, 3480, 8427, 660, 12796, 12797, 12798, 12799, 5285, 11864, 12800, 12801, 6425, 1234, 12802, 8437, 3870, 6509, 4755, 5553, 795, 4266, 63, 3977, 2]);