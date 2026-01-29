// modules/messages/native/Messages.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var1
        _fun89215: for (var _fun89215_ip = 0;;) switch (_fun89215_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun89215_ip = 45;
                    continue _fun89215
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 45:
                if (var1) {
                    _fun89215_ip = 54;
                    continue _fun89215
                }
            case 48:
                var1 = var2["@@iterator"];
            case 54:
                if (var1) {
                    _fun89215_ip = 344;
                    continue _fun89215
                }
            case 60:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun89215_ip = 322;
                    continue _fun89215
                }
            case 85:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun89215_ip = 282;
                    continue _fun89215
                }
            case 95:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun89215_ip = 269;
                    continue _fun89215
                }
            case 109:
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
                    _fun89215_ip = 162;
                    continue _fun89215
                }
            case 157:
                var6 = var2.constructor;
            case 162:
                var9 = var8;
                if (!var6) {
                    _fun89215_ip = 178;
                    continue _fun89215
                }
            case 168:
                var6 = var2.constructor;
                var9 = var6.name;
            case 178:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun89215_ip = 248;
                    continue _fun89215
                }
            case 186:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun89215_ip = 248;
                    continue _fun89215
                }
            case 194:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun89215_ip = 233;
                    continue _fun89215
                }
            case 204:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun89215_ip = 246;
                    continue _fun89215
                }
            case 233:
                var8 = _closure1_slot81;
                var6 = var8.bind(var7)(var2, var7);
            case 246:
                _fun89215_ip = 264;
                continue _fun89215;
            case 248:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 264:
                var5 = var6;
                _fun89215_ip = 282;
                continue _fun89215;
            case 269:
                var6 = _closure1_slot81;
                var5 = var6.bind(var7)(var2, var7);
            case 282:
                var3 = var5;
                if (var3) {
                    _fun89215_ip = 322;
                    continue _fun89215
                }
            case 288:
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
            case 322:
                if (!var3) {
                    _fun89215_ip = 329;
                    continue _fun89215
                }
            case 325:
                _closure2_slot0 = var3;
            case 329:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun89216: for (var _fun89216_ip = 0;;) switch (_fun89216_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun89216_ip = 56;
                                continue _fun89216
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
                            _fun89216_ip = 67;
                            continue _fun89216;
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
            case 344:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot80 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var1
        _fun89217: for (var _fun89217_ip = 0;;) switch (_fun89217_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun89217_ip = 23;
                    continue _fun89217
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun89217_ip = 33;
                    continue _fun89217
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
                    _fun89217_ip = 70;
                    continue _fun89217
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun89217_ip = 55;
                    continue _fun89217
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot81 = var0;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var1
        _fun89218: for (var _fun89218_ip = 0;;) switch (_fun89218_ip) {
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
                _fun89218_ip = 76;
                continue _fun89218;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot82 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot82 = var0;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var6 = var5[var3];
    var3 = arg3;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot10 = var6;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.findNodeHandle;
    var _closure1_slot11 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot12 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot13 = var3;
    var3 = 11;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot14 = var3;
    var3 = 12;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot15 = var3;
    var3 = 13;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot16 = var3;
    var3 = 14;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot17 = var3;
    var3 = 15;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot18 = var3;
    var3 = 16;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.updateShouldShowJumpToPresentButton;
    var _closure1_slot19 = var3;
    var3 = 17;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot20 = var3;
    var3 = 18;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot21 = var3;
    var3 = 19;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot22 = var3;
    var3 = 20;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot23 = var3;
    var3 = 21;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot24 = var3;
    var3 = 22;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot25 = var3;
    var3 = 23;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot26 = var3;
    var3 = 24;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot27 = var3;
    var3 = 25;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot28 = var3;
    var3 = 26;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot29 = var3;
    var3 = 27;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot30 = var3;
    var3 = 28;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot31 = var3;
    var3 = 29;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var8 = var3.useChannelPollInteractions;
    var _closure1_slot32 = var8;
    var3 = var3.useMessagePollInteractions;
    var _closure1_slot33 = var3;
    var3 = 30;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot34 = var3;
    var3 = 31;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot35 = var3;
    var3 = 32;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot36 = var3;
    var3 = 33;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot37 = var3;
    var3 = 34;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot38 = var3;
    var3 = 35;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot39 = var3;
    var3 = 36;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot40 = var3;
    var3 = 37;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot41 = var3;
    var3 = 38;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot42 = var3;
    var3 = 39;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot43 = var3;
    var3 = 40;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot44 = var3;
    var3 = 41;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot45 = var3;
    var3 = 42;
    var8 = var5[var3];
    var8 = var7.bind(var0)(var8);
    var _closure1_slot46 = var8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.getUserCommunicationDisabledVersion;
    var _closure1_slot47 = var3;
    var3 = 43;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot48 = var3;
    var3 = 44;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot49 = var3;
    var3 = 45;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot50 = var3;
    var3 = 46;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot51 = var3;
    var3 = 47;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot52 = var3;
    var3 = 48;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot53 = var3;
    var3 = 49;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot54 = var3;
    var3 = 50;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot55 = var3;
    var3 = 51;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot56 = var3;
    var3 = 52;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot57 = var3;
    var3 = 53;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot58 = var3;
    var3 = 54;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot59 = var3;
    var3 = 55;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot60 = var3;
    var3 = 56;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot61 = var3;
    var3 = 57;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var8 = var3.Changeset;
    var _closure1_slot62 = var8;
    var8 = var3.RowType;
    var _closure1_slot63 = var8;
    var3 = var3.SeparatorType;
    var _closure1_slot64 = var3;
    var3 = 58;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var8 = var3.ActivityActionTypes;
    var _closure1_slot65 = var8;
    var8 = var3.AnalyticEvents;
    var _closure1_slot66 = var8;
    var8 = var3.ChannelTypesSets;
    var _closure1_slot67 = var8;
    var8 = var3.MAX_MESSAGES_PER_CHANNEL;
    var _closure1_slot68 = var8;
    var8 = var3.ME;
    var _closure1_slot69 = var8;
    var8 = var3.MessageFlags;
    var _closure1_slot70 = var8;
    var8 = var3.MessageTypes;
    var _closure1_slot71 = var8;
    var3 = var3.Permissions;
    var _closure1_slot72 = var3;
    var3 = 59;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var8 = var3.PREMIUM_TIER_2_REFERRAL_TRIAL_ID;
    var _closure1_slot73 = var8;
    var3 = var3.PremiumTypes;
    var _closure1_slot74 = var3;
    var3 = 60;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var8 = var3.jsx;
    var _closure1_slot75 = var8;
    var8 = var3.Fragment;
    var _closure1_slot76 = var8;
    var3 = var3.jsxs;
    var _closure1_slot77 = var3;
    var3 = 61;
    var3 = var5[var3];
    var8 = var7.bind(var0)(var3);
    var3 = var8.prototype;
    var7 = Object.create(var3, {
        constructor: {
            value: var8
        }
    });
    var11 = 'Messages';
    var12 = var7;
    var3 = new var12[var8](var11, var10);
    var3 = var3 instanceof Object ? var3 : var7;
    var _closure1_slot78 = var3;
    var7 = var6.Component;
    var3 = function(arg0) { // Environment: var1
        var3 = function(arg0) { // Original name: Messages, environment: var5
            _fun89222: for (var _fun89222_ip = 0;;) switch (_fun89222_ip) {
                case 0:
                    var5 = this;
                    var13 = 0;
                    var0 = copyRestArgs(var13);
                    var7 = _closure1_slot5;
                    var3 = _closure2_slot0;
                    var4 = undefined;
                    var7 = var7.bind(var4)(var5, var3);
                    var10 = new Array(0);
                    var13 = var10;
                    var12 = var0;
                    var11 = 0;
                    var0 = arraySpread(var13, var12, var11);
                    var0 = _closure1_slot8;
                    var9 = var0.bind(var4)(var3);
                    var3 = _closure1_slot7;
                    var0 = _closure1_slot82;
                    var0 = var0.bind(var4)();
                    if (var0) {
                        _fun89222_ip = 86;
                        continue _fun89222
                    }
                case 73:
                    var0 = var9.apply;
                    var0 = var0.bind(var9)(var5, var10);
                    _fun89222_ip = 120;
                    continue _fun89222;
                case 86:
                    var6 = global;
                    var8 = var6.Reflect;
                    var7 = var8.construct;
                    var6 = _closure1_slot8;
                    var6 = var6.bind(var4)(var5);
                    var6 = var6.constructor;
                    var0 = var7.bind(var8)(var9, var10, var6);
                case 120:
                    var0 = var3.bind(var4)(var5, var0);
                    var _closure3_slot0 = var0;
                    var3 = false;
                    var0.animated = var3;
                    var0.hasHandledScroll = var3;
                    var0.isAtBottom = var3;
                    var0.isNearBottom = var3;
                    var0.isNearTop = var3;
                    var0.decelerating = var3;
                    var0.dragging = var3;
                    var0.hasMoreMessagesAfterForLastUpdate = var3;
                    var5 = new Array(0);
                    var0.pendingUpdatesQueue = var5;
                    var5 = null;
                    var0.animatingStickerMessageId = var5;
                    var0._loaded = var3;
                    var0._frozen = var3;
                    var5 = _closure1_slot10;
                    var3 = var5.createRef;
                    var3 = var3.bind(var5)();
                    var0._chatRef = var3;
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 62;
                    var3 = var6[var3];
                    var9 = var5.bind(var4)(var3);
                    var3 = var9.prototype;
                    var7 = Object.create(var3, {
                        constructor: {
                            value: var9
                        }
                    });
                    var13 = function() { // Environment: var1
                        _fun89223: for (var _fun89223_ip = 0;;) switch (_fun89223_ip) {
                            case 0:
                                var0 = _closure3_slot0;
                                var0 = var0._chatRef;
                                var2 = var0.current;
                                var0 = null;
                                if (!(var0 !== var2)) {
                                    _fun89223_ip = 53;
                                    continue _fun89223
                                }
                            case 24:
                                var3 = _closure1_slot11;
                                var1 = _closure3_slot0;
                                var1 = var1._chatRef;
                                var2 = var1.current;
                                var1 = undefined;
                                var0 = var3.bind(var1)(var2);
                            case 53:
                                return var0;
                        }
                    };
                    var12 = function(arg0) { // Environment: var1
                        var2 = _closure3_slot0;
                        var1 = var2.applyNativeRowsUpdate;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    var14 = var7;
                    var3 = new var14[var9](var13, var12, var11);
                    var3 = var3 instanceof Object ? var3 : var7;
                    var0._chatUpdatesQueue = var3;
                    var3 = {
                        'shouldForceRender': false,
                        'hasJumpedToOriginalPost': false
                    };
                    var0.state = var3;
                    var3 = var0.props;
                    var0.prevPropsWhileFrozen = var3;
                    var3 = var0.state;
                    var0.prevStateWhileFrozen = var3;
                    var3 = 63;
                    var3 = var6[var3];
                    var3 = var5.bind(var4)(var3);
                    var7 = var3.prototype;
                    var7 = Object.create(var7, {
                        constructor: {
                            value: var3
                        }
                    });
                    var14 = var7;
                    var3 = new var14[var3](var13);
                    var3 = var3 instanceof Object ? var3 : var7;
                    var0.chatManager = var3;
                    var3 = 64;
                    var3 = var6[var3];
                    var3 = var5.bind(var4)(var3);
                    var7 = var3.prototype;
                    var7 = Object.create(var7, {
                        constructor: {
                            value: var3
                        }
                    });
                    var14 = var7;
                    var3 = new var14[var3](var13);
                    var3 = var3 instanceof Object ? var3 : var7;
                    var0.rowGenerator = var3;
                    var3 = 65;
                    var3 = var6[var3];
                    var7 = var5.bind(var4)(var3);
                    var3 = var7.prototype;
                    var5 = Object.create(var3, {
                        constructor: {
                            value: var7
                        }
                    });
                    var13 = 'Messages';
                    var14 = var5;
                    var3 = new var14[var7](var13, var12);
                    var3 = var3 instanceof Object ? var3 : var5;
                    var0.channelLatestMessageLoadingStatsManager = var3;
                    var3 = function() { // Environment: var1
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 66;
                        var1 = var1[var0];
                        var0 = undefined;
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.startOrCancelChannelLatestMessagesLoad;
                        var1 = {};
                        var4 = _closure3_slot0;
                        var5 = var4.props;
                        var5 = var5.messages;
                        var5 = var5.jumpTargetId;
                        var1.jumpTargetId = var5;
                        var5 = var4.props;
                        var5 = var5.oldestUnreadMessageId;
                        var1.oldestUnreadMessageId = var5;
                        var5 = var4.shouldJumpToOriginalPost;
                        var5 = var5.bind(var4)();
                        var1.shouldJumpToOriginalPost = var5;
                        var5 = var4.props;
                        var5 = var5.channelId;
                        var1.channelId = var5;
                        var4 = var4.channelLatestMessageLoadingStatsManager;
                        var1.tracker = var4;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var0.startOrCancelChannelLatestMessagesLoad = var3;
                    var5 = _closure1_slot0;
                    var3 = 67;
                    var3 = var6[var3];
                    var3 = var5.bind(var4)(var3);
                    var6 = var3.MessagesHandlers;
                    var3 = var6.prototype;
                    var5 = Object.create(var3, {
                        constructor: {
                            value: var6
                        }
                    });
                    var13 = function() { // Environment: var1
                        var0 = {};
                        var1 = _closure3_slot0;
                        var2 = var1.getMessage;
                        var0.getMessage = var2;
                        var2 = var1.props;
                        var2 = var2.chatInputRef;
                        var0.chatInputRef = var2;
                        var2 = var1.props;
                        var2 = var2.channelId;
                        var0.selectedChannelId = var2;
                        var2 = var1.props;
                        var2 = var2.messages;
                        var2 = var2.revealedMessageId;
                        var0.revealedMessageId = var2;
                        var2 = var1.props;
                        var2 = var2.uploads;
                        var0.uploads = var2;
                        var2 = var1.props;
                        var2 = var2.paymentsBlocked;
                        var0.paymentsBlocked = var2;
                        var2 = var1.loadMoreBefore;
                        var0.loadMoreBefore = var2;
                        var1 = var1.loadMoreAfter;
                        var0.loadMoreAfter = var1;
                        return var0;
                    };
                    var14 = var5;
                    var3 = new var14[var6](var13, var12);
                    var3 = var3 instanceof Object ? var3 : var5;
                    var0.handlers = var3;
                    var3 = function(arg0) { // Environment: var1
                        var1 = arg0;
                        var _closure4_slot0 = var1;
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 68;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.find;
                        var1 = _closure3_slot0;
                        var1 = var1.props;
                        var4 = var1.messages;
                        var1 = var4.toArray;
                        var1 = var1.bind(var4)();
                        var0 = function(arg0) { // Environment: var0
                            _fun89228: for (var _fun89228_ip = 0;;) switch (_fun89228_ip) {
                                case 0:
                                    var0 = arg0;
                                    var3 = var0.id;
                                    var2 = var0.nonce;
                                    var0 = _closure4_slot0;
                                    var0 = var3 === var0;
                                    if (var0) {
                                        _fun89228_ip = 36;
                                        continue _fun89228
                                    }
                                case 28:
                                    var1 = _closure4_slot0;
                                    var0 = var2 === var1;
                                case 36:
                                    return var0;
                            }
                        };
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                    };
                    var0.getMessage = var3;
                    var3 = function() { // Environment: var1
                        _fun89229: for (var _fun89229_ip = 0;;) switch (_fun89229_ip) {
                            case 0:
                                var0 = _closure3_slot0;
                                var0 = var0.props;
                                var2 = var0.channel;
                                var0 = var2.isForumPost;
                                var0 = var0.bind(var2)();
                                if (!var0) {
                                    _fun89229_ip = 101;
                                    continue _fun89229
                                }
                            case 30:
                                var4 = _closure1_slot1;
                                var3 = _closure1_slot2;
                                var2 = 69;
                                var3 = var3[var2];
                                var2 = undefined;
                                var5 = var4.bind(var2)(var3);
                                var4 = var5.castChannelIdAsMessageId;
                                var2 = _closure3_slot0;
                                var3 = var2.props;
                                var3 = var3.channelId;
                                var3 = var4.bind(var5)(var3);
                                var2 = var2.props;
                                var2 = var2.messages;
                                var2 = var2.jumpTargetId;
                                var0 = var3 === var2;
                            case 101:
                                if (!var0) {
                                    _fun89229_ip = 122;
                                    continue _fun89229
                                }
                            case 104:
                                var1 = _closure3_slot0;
                                var1 = var1.state;
                                var1 = var1.hasJumpedToOriginalPost;
                                var0 = !var1;
                            case 122:
                                return var0;
                        }
                    };
                    var0.shouldJumpToOriginalPost = var3;
                    var3 = function(arg0) { // Environment: var1
                        _fun89230: for (var _fun89230_ip = 0;;) switch (_fun89230_ip) {
                            case 0:
                                var3 = arg0;
                                var4 = arguments[1];
                                var2 = arguments[2];
                                var _closure4_slot0 = var3;
                                var0 = undefined;
                                if (!(var4 === var0)) {
                                    _fun89230_ip = 23;
                                    continue _fun89230
                                }
                            case 21:
                                var4 = false;
                            case 23:
                                var _closure4_slot1 = var4;
                                if (!(var2 === var0)) {
                                    _fun89230_ip = 66;
                                    continue _fun89230
                                }
                            case 31:
                                var5 = _closure1_slot0;
                                var6 = _closure1_slot2;
                                var4 = 70;
                                var4 = var6[var4];
                                var4 = var5.bind(var0)(var4);
                                var4 = var4.JumpTypes;
                                var2 = var4.INSTANT;
                            case 66:
                                var _closure4_slot2 = var2;
                                var2 = null;
                                if (!(var2 != var3)) {
                                    _fun89230_ip = 100;
                                    continue _fun89230
                                }
                            case 76:
                                var2 = global;
                                var3 = var2.setTimeout;
                                var2 = function() { // Environment: var1
                                    _fun89231: for (var _fun89231_ip = 0;;) switch (_fun89231_ip) {
                                        case 0:
                                            var3 = _closure3_slot0;
                                            var2 = var3.findMessageIndex;
                                            var1 = _closure4_slot0;
                                            var4 = var2.bind(var3)(var1);
                                            var2 = null;
                                            if (!(var2 != var4)) {
                                                _fun89231_ip = 260;
                                                continue _fun89231
                                            }
                                        case 34:
                                            var1 = _closure3_slot0;
                                            var1 = var1._chatRef;
                                            var1 = var1.current;
                                            if (!(var2 != var1)) {
                                                _fun89231_ip = 260;
                                                continue _fun89231
                                            }
                                        case 56:
                                            var2 = _closure4_slot1;
                                            var1 = false;
                                            if (!var2) {
                                                _fun89231_ip = 161;
                                                continue _fun89231
                                            }
                                        case 65:
                                            var7 = _closure3_slot0;
                                            var5 = var7.updateRows;
                                            var3 = {};
                                            var2 = _closure4_slot0;
                                            var3.scrollToMessageId = var2;
                                            var3.jumpTargetId = var2;
                                            var8 = _closure4_slot2;
                                            var3.jumpType = var8;
                                            var3.focusTargetId = var2;
                                            var9 = _closure1_slot0;
                                            var8 = _closure1_slot2;
                                            var2 = 70;
                                            var8 = var8[var2];
                                            var2 = undefined;
                                            var2 = var9.bind(var2)(var8);
                                            var2 = var2.JumpTypes;
                                            var2 = var2.INSTANT;
                                            var3.overrideScrollJumpType = var2;
                                            var2 = true;
                                            var3.isRescrolling = var2;
                                            var3 = var5.bind(var7)(var3);
                                            var1 = true;
                                        case 161:
                                            if (var1) {
                                                _fun89231_ip = 260;
                                                continue _fun89231
                                            }
                                        case 164:
                                            var2 = _closure1_slot1;
                                            var9 = _closure1_slot2;
                                            var1 = 71;
                                            var1 = var9[var1];
                                            var8 = undefined;
                                            var3 = var2.bind(var8)(var1);
                                            var2 = var3.scrollTo;
                                            var0 = _closure3_slot0;
                                            var0 = var0._chatRef;
                                            var1 = var0.current;
                                            var0 = {};
                                            var6 = _closure4_slot2;
                                            var7 = _closure1_slot0;
                                            var5 = 70;
                                            var5 = var9[var5];
                                            var5 = var7.bind(var8)(var5);
                                            var5 = var5.JumpTypes;
                                            var5 = var5.ANIMATED;
                                            var5 = var6 === var5;
                                            var0.animated = var5;
                                            var0 = var2.bind(var3)(var1, var4, var0);
                                        case 260:
                                            var0 = undefined;
                                            return var0;
                                    }
                                };
                                var1 = 50;
                                var1 = var3.bind(var0)(var2, var1);
                            case 100:
                                return var0;
                        }
                    };
                    var0.maybeRescrollToMessageId = var3;
                    var3 = function(arg0) { // Environment: var1
                        _fun89232: for (var _fun89232_ip = 0;;) switch (_fun89232_ip) {
                            case 0:
                                var2 = arg0;
                                var1 = _closure3_slot0;
                                var1 = var1._chatUpdatesQueue;
                                var1 = var1.isBlocking;
                                if (var1) {
                                    _fun89232_ip = 99;
                                    continue _fun89232
                                }
                            case 25:
                                var1 = var2.isLoadingAtTop;
                                if (!var1) {
                                    _fun89232_ip = 60;
                                    continue _fun89232
                                }
                            case 34:
                                var1 = _closure3_slot0;
                                var1 = var1.decelerating;
                                if (var1) {
                                    _fun89232_ip = 77;
                                    continue _fun89232
                                }
                            case 47:
                                var1 = _closure3_slot0;
                                var1 = var1.dragging;
                                if (var1) {
                                    _fun89232_ip = 77;
                                    continue _fun89232
                                }
                            case 60:
                                var3 = _closure3_slot0;
                                var1 = var3.applyNativeRowsUpdate;
                                var1 = var1.bind(var3)(var2);
                                _fun89232_ip = 119;
                                continue _fun89232;
                            case 77:
                                var1 = _closure3_slot0;
                                var3 = var1._chatUpdatesQueue;
                                var1 = var3.add;
                                var1 = var1.bind(var3)(var2);
                                _fun89232_ip = 119;
                                continue _fun89232;
                            case 99:
                                var0 = _closure3_slot0;
                                var1 = var0._chatUpdatesQueue;
                                var0 = var1.add;
                                var0 = var0.bind(var1)(var2);
                            case 119:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.updateNativeRows = var3;
                    var3 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var11 = var0.rows;
                        var2 = var0.hasMoreMessagesAfter;
                        var9 = var0.scrollData;
                        var8 = var0.HACK_iOSForceAnimations;
                        var7 = var0.forceReload;
                        var1 = _closure3_slot0;
                        var4 = var1.isLoadingAtTop;
                        var3 = var0.rows;
                        var0 = var1.hasMoreMessagesAfterForLastUpdate;
                        var10 = var4.bind(var1)(var3, var0);
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var0 = 71;
                        var3 = var3[var0];
                        var0 = undefined;
                        var6 = var4.bind(var0)(var3);
                        var5 = var6.updateRows;
                        var3 = var1._chatRef;
                        var4 = var3.current;
                        var3 = {};
                        var3.rows = var11;
                        var3.isLoadingAtTop = var10;
                        var3.scrollData = var9;
                        var3.HACK_iOSForceAnimations = var8;
                        var3.forceReload = var7;
                        var3 = var5.bind(var6)(var4, var3);
                        var1.hasMoreMessagesAfterForLastUpdate = var2;
                        return var0;
                    };
                    var0.applyNativeRowsUpdate = var3;
                    var3 = function(arg0, arg1) { // Environment: var1
                        _fun89234: for (var _fun89234_ip = 0;;) switch (_fun89234_ip) {
                            case 0:
                                var0 = arg1;
                                if (var0) {
                                    _fun89234_ip = 10;
                                    continue _fun89234
                                }
                            case 6:
                                var0 = false;
                                return var0;
                            case 10:
                                var1 = _closure1_slot80;
                                var4 = undefined;
                                var0 = arg0;
                                var3 = var1.bind(var4)(var0);
                                var1 = var3.bind(var4)();
                                var0 = var1.done;
                                var2 = var1;
                                if (var0) {
                                    _fun89234_ip = 98;
                                    continue _fun89234
                                }
                            case 42:
                                var0 = var2.value;
                                var6 = var0.changeType;
                                var1 = _closure1_slot62;
                                var1 = var1.INSERT;
                                if (!(var6 !== var1)) {
                                    _fun89234_ip = 84;
                                    continue _fun89234
                                }
                            case 67:
                                var6 = var3.bind(var4)();
                                var1 = var6.done;
                                var2 = var6;
                                if (var1) {
                                    _fun89234_ip = 98;
                                    continue _fun89234
                                }
                            case 82:
                                _fun89234_ip = 42;
                                continue _fun89234;
                            case 84:
                                var1 = var0.index;
                                var0 = 1;
                                var0 = var1 <= var0;
                                return var0;
                            case 98:
                                var0 = false;
                                return var0;
                        }
                    };
                    var0.isLoadingAtTop = var3;
                    var3 = function() { // Environment: var1
                        _fun89235: for (var _fun89235_ip = 0;;) switch (_fun89235_ip) {
                            case 0:
                                var2 = arguments[0];
                                var0 = undefined;
                                if (!(var2 === var0)) {
                                    _fun89235_ip = 13;
                                    continue _fun89235
                                }
                            case 11:
                                var2 = {};
                            case 13:
                                var16 = var2.forceRender;
                                if (!(var16 === var0)) {
                                    _fun89235_ip = 25;
                                    continue _fun89235
                                }
                            case 23:
                                var16 = false;
                            case 25:
                                var7 = var2.forceReload;
                                var12 = var2.updateMessageIds;
                                if (!(var12 === var0)) {
                                    _fun89235_ip = 69;
                                    continue _fun89235
                                }
                            case 41:
                                var3 = global;
                                var3 = var3.Set;
                                var4 = var3.prototype;
                                var4 = Object.create(var4, {
                                    constructor: {
                                        value: var3
                                    }
                                });
                                var23 = var4;
                                var3 = new var23[var3](var22);
                                var12 = var3 instanceof Object ? var3 : var4;
                            case 69:
                                var15 = var2.scrollToMessageId;
                                if (!(var15 === var0)) {
                                    _fun89235_ip = 81;
                                    continue _fun89235
                                }
                            case 79:
                                var15 = null;
                            case 81:
                                var14 = var2.jumpTargetId;
                                if (!(var14 === var0)) {
                                    _fun89235_ip = 93;
                                    continue _fun89235
                                }
                            case 91:
                                var14 = null;
                            case 93:
                                var19 = var2.jumpType;
                                if (!(var19 === var0)) {
                                    _fun89235_ip = 138;
                                    continue _fun89235
                                }
                            case 103:
                                var4 = _closure1_slot0;
                                var5 = _closure1_slot2;
                                var3 = 70;
                                var3 = var5[var3];
                                var3 = var4.bind(var0)(var3);
                                var3 = var3.JumpTypes;
                                var19 = var3.ANIMATED;
                            case 138:
                                var9 = var2.focusTargetId;
                                if (!(var9 === var0)) {
                                    _fun89235_ip = 150;
                                    continue _fun89235
                                }
                            case 148:
                                var9 = null;
                            case 150:
                                var10 = var2.ignoreEmbedDescriptionCache;
                                if (!(var10 === var0)) {
                                    _fun89235_ip = 162;
                                    continue _fun89235
                                }
                            case 160:
                                var10 = false;
                            case 162:
                                var8 = var2.messagesNewlyLoaded;
                                if (!(var8 === var0)) {
                                    _fun89235_ip = 174;
                                    continue _fun89235
                                }
                            case 172:
                                var8 = false;
                            case 174:
                                var11 = var2.shouldInitialScroll;
                                if (!(var11 === var0)) {
                                    _fun89235_ip = 186;
                                    continue _fun89235
                                }
                            case 184:
                                var11 = false;
                            case 186:
                                var18 = var2.minimizeScrolling;
                                if (!(var18 === var0)) {
                                    _fun89235_ip = 198;
                                    continue _fun89235
                                }
                            case 196:
                                var18 = false;
                            case 198:
                                var17 = var2.isRescrolling;
                                if (!(var17 === var0)) {
                                    _fun89235_ip = 210;
                                    continue _fun89235
                                }
                            case 208:
                                var17 = false;
                            case 210:
                                var6 = var2.overrideScrollJumpType;
                                var2 = _closure3_slot0;
                                var2 = var2._chatRef;
                                var2 = var2.current;
                                var13 = null;
                                if (!(var13 != var2)) {
                                    _fun89235_ip = 1039;
                                    continue _fun89235
                                }
                            case 243:
                                var2 = _closure3_slot0;
                                var5 = var2.createRows;
                                var4 = {};
                                var4.forceRender = var16;
                                var4.updateMessageIds = var12;
                                var4.ignoreEmbedDescriptionCache = var10;
                                var12 = var5.bind(var2)(var4);
                                var5 = var2._loaded;
                                var2 = var2.props;
                                var2 = var2.selectedSummary;
                                var4 = var13 != var2;
                                var10 = undefined;
                                if (!var4) {
                                    _fun89235_ip = 348;
                                    continue _fun89235
                                }
                            case 301:
                                var2 = var2.startId;
                                var10 = undefined;
                                if (!(var2 === var15)) {
                                    _fun89235_ip = 348;
                                    continue _fun89235
                                }
                            case 313:
                                var4 = _closure1_slot0;
                                var16 = _closure1_slot2;
                                var2 = 71;
                                var2 = var16[var2];
                                var2 = var4.bind(var0)(var2);
                                var2 = var2.ChatScrollPosition;
                                var10 = var2.MIDDLE;
                            case 348:
                                if (!(var13 != var12)) {
                                    _fun89235_ip = 366;
                                    continue _fun89235
                                }
                            case 352:
                                var4 = var12.length;
                                var2 = 0;
                                if (!(!(var4 > var2))) {
                                    _fun89235_ip = 669;
                                    continue _fun89235
                                }
                            case 366:
                                var2 = _closure3_slot0;
                                var2 = var2._loaded;
                                if (!var2) {
                                    _fun89235_ip = 405;
                                    continue _fun89235
                                }
                            case 379:
                                var2 = _closure3_slot0;
                                var4 = var2._chatUpdatesQueue;
                                var2 = var4.hasUpdates;
                                var2 = var2.bind(var4)();
                                if (var2) {
                                    _fun89235_ip = 644;
                                    continue _fun89235
                                }
                            case 405:
                                var2 = _closure3_slot0;
                                var2 = var2._loaded;
                                if (var2) {
                                    _fun89235_ip = 487;
                                    continue _fun89235
                                }
                            case 418:
                                if (!(var13 != var12)) {
                                    _fun89235_ip = 487;
                                    continue _fun89235
                                }
                            case 422:
                                var4 = var12.length;
                                var2 = 0;
                                if (!(var2 === var4)) {
                                    _fun89235_ip = 487;
                                    continue _fun89235
                                }
                            case 433:
                                var4 = _closure1_slot1;
                                var16 = _closure1_slot2;
                                var2 = 71;
                                var2 = var16[var2];
                                var16 = var4.bind(var0)(var2);
                                var4 = var16.fadeIn;
                                var2 = _closure3_slot0;
                                var2 = var2._chatRef;
                                var2 = var2.current;
                                var2 = var4.bind(var16)(var2);
                                _fun89235_ip = 967;
                                continue _fun89235;
                            case 487:
                                if (!(var13 != var15)) {
                                    _fun89235_ip = 560;
                                    continue _fun89235
                                }
                            case 491:
                                var4 = _closure3_slot0;
                                var2 = var4.shouldJumpToOriginalPost;
                                var2 = var2.bind(var4)();
                                if (var2) {
                                    _fun89235_ip = 560;
                                    continue _fun89235
                                }
                            case 508:
                                var16 = _closure3_slot0;
                                var4 = var16.scrollToMessageId;
                                var2 = {};
                                var2.scrollToMessageId = var15;
                                var2.jumpTargetId = var14;
                                var2.jumpType = var19;
                                var2.scrollPosition = var10;
                                var2.minimizeScrolling = var18;
                                var2.isRescrolling = var17;
                                var2 = var4.bind(var16)(var2);
                                _fun89235_ip = 967;
                                continue _fun89235;
                            case 560:
                                if (!(var13 != var9)) {
                                    _fun89235_ip = 967;
                                    continue _fun89235
                                }
                            case 567:
                                var4 = _closure3_slot0;
                                var2 = var4.findMessageIndex;
                                var17 = var2.bind(var4)(var9);
                                if (!(var13 != var17)) {
                                    _fun89235_ip = 967;
                                    continue _fun89235
                                }
                            case 589:
                                var4 = _closure1_slot1;
                                var16 = _closure1_slot2;
                                var2 = 71;
                                var2 = var16[var2];
                                var16 = var4.bind(var0)(var2);
                                var4 = var16.focus;
                                var2 = _closure3_slot0;
                                var2 = var2._chatRef;
                                var2 = var2.current;
                                var2 = var4.bind(var16)(var2, var17);
                                _fun89235_ip = 967;
                                continue _fun89235;
                            case 644:
                                var2 = _closure3_slot0;
                                var4 = var2._chatUpdatesQueue;
                                var2 = var4.tryFlush;
                                var2 = var2.bind(var4)();
                                _fun89235_ip = 967;
                                continue _fun89235;
                            case 669:
                                var4 = _closure1_slot1;
                                var16 = _closure1_slot2;
                                var2 = 72;
                                var2 = var16[var2];
                                var4 = var4.bind(var0)(var2);
                                var2 = {};
                                var16 = _closure3_slot0;
                                var17 = var16.chatManager;
                                var16 = var17.getPreviousRows;
                                var16 = var16.bind(var17)();
                                var2.rows = var16;
                                var2.scrollToMessageId = var15;
                                var2.jumpTargetId = var14;
                                if (!(var13 == var6)) {
                                    _fun89235_ip = 754;
                                    continue _fun89235
                                }
                            case 733:
                                var13 = _closure3_slot0;
                                var13 = var13.props;
                                var13 = var13.messages;
                                var6 = var13.jumpType;
                            case 754:
                                var2.jumpType = var6;
                                var6 = _closure3_slot0;
                                var6 = var6._loaded;
                                var6 = !var6;
                                if (var6) {
                                    _fun89235_ip = 778;
                                    continue _fun89235
                                }
                            case 775:
                                var6 = var11;
                            case 778:
                                var2.shouldInitialScroll = var6;
                                var6 = _closure3_slot0;
                                var11 = var6.animated;
                                var2.animated = var11;
                                var2.scrollPosition = var10;
                                var2.focusTargetId = var9;
                                var9 = function() { // Original name: onComputedScrollToUnread, environment: var1
                                    var2 = _closure1_slot0;
                                    var1 = _closure1_slot2;
                                    var0 = 73;
                                    var1 = var1[var0];
                                    var0 = undefined;
                                    var4 = var2.bind(var0)(var1);
                                    var3 = var4.trackMentionsOnInitialUnreadChannelScroll;
                                    var1 = _closure3_slot0;
                                    var2 = var1.props;
                                    var2 = var2.channel;
                                    var1 = var1.props;
                                    var1 = var1.messages;
                                    var1 = var3.bind(var4)(var2, var1);
                                    return var0;
                                };
                                var2.onComputedScrollToUnread = var9;
                                var9 = var4.bind(var0)(var2);
                                var2 = true;
                                var6._loaded = var2;
                                var4 = var6.updateNativeRows;
                                var2 = {};
                                var2.rows = var12;
                                var10 = var6.props;
                                var10 = var10.messages;
                                var10 = var10.hasMoreAfter;
                                var2.hasMoreMessagesAfter = var10;
                                var11 = var6.isLoadingAtTop;
                                var10 = var6.hasMoreMessagesAfterForLastUpdate;
                                var10 = var11.bind(var6)(var12, var10);
                                var2.isLoadingAtTop = var10;
                                var2.scrollData = var9;
                                var2.HACK_iOSForceAnimations = var8;
                                var2.forceReload = var7;
                                var2 = var4.bind(var6)(var2);
                                if (var5) {
                                    _fun89235_ip = 967;
                                    continue _fun89235
                                }
                            case 914:
                                var7 = _closure3_slot0;
                                var6 = var7.channelLatestMessageLoadingStatsManager;
                                var4 = var6.finish;
                                var2 = {};
                                var8 = var7.props;
                                var8 = var8.channelId;
                                var2.channelId = var8;
                                var7 = var7.props;
                                var7 = var7.isMessagesCached;
                                var2.areMessagesCached = var7;
                                var2 = var4.bind(var6)(var2);
                            case 967:
                                var2 = _closure3_slot0;
                                var2 = var2._loaded;
                                if (!var2) {
                                    _fun89235_ip = 994;
                                    continue _fun89235
                                }
                            case 980:
                                var4 = _closure3_slot0;
                                var4 = var4._loaded;
                                var2 = var4 !== var5;
                            case 994:
                                if (!var2) {
                                    _fun89235_ip = 1012;
                                    continue _fun89235
                                }
                            case 997:
                                var3 = _closure3_slot0;
                                var3 = var3.props;
                                var2 = var3.isResourceChannel;
                            case 1012:
                                if (!var2) {
                                    _fun89235_ip = 1039;
                                    continue _fun89235
                                }
                            case 1015:
                                var2 = global;
                                var3 = var2.setTimeout;
                                var2 = function() { // Environment: var1
                                    var1 = _closure3_slot0;
                                    var0 = var1.scrollToTopMessage;
                                    var0 = var0.bind(var1)();
                                    return var0;
                                };
                                var1 = 100;
                                var1 = var3.bind(var0)(var2, var1);
                            case 1039:
                                return var0;
                        }
                    };
                    var0.updateRows = var3;
                    var3 = function(arg0) { // Environment: var1
                        _fun89238: for (var _fun89238_ip = 0;;) switch (_fun89238_ip) {
                            case 0:
                                var2 = arg0;
                                var9 = var2.scrollToMessageId;
                                var _closure4_slot0 = var9;
                                var8 = var2.jumpTargetId;
                                var0 = undefined;
                                if (!(var8 === var0)) {
                                    _fun89238_ip = 29;
                                    continue _fun89238
                                }
                            case 27:
                                var8 = null;
                            case 29:
                                var _closure4_slot1 = var8;
                                var10 = var2.jumpType;
                                if (!(var10 === var0)) {
                                    _fun89238_ip = 78;
                                    continue _fun89238
                                }
                            case 43:
                                var4 = _closure1_slot0;
                                var5 = _closure1_slot2;
                                var3 = 70;
                                var3 = var5[var3];
                                var3 = var4.bind(var0)(var3);
                                var3 = var3.JumpTypes;
                                var10 = var3.ANIMATED;
                            case 78:
                                var7 = var2.scrollPosition;
                                if (!(var7 === var0)) {
                                    _fun89238_ip = 123;
                                    continue _fun89238
                                }
                            case 88:
                                var4 = _closure1_slot0;
                                var5 = _closure1_slot2;
                                var3 = 71;
                                var3 = var5[var3];
                                var3 = var4.bind(var0)(var3);
                                var3 = var3.ChatScrollPosition;
                                var7 = var3.TOP;
                            case 123:
                                var4 = var2.minimizeScrolling;
                                if (!(var4 === var0)) {
                                    _fun89238_ip = 135;
                                    continue _fun89238
                                }
                            case 133:
                                var4 = false;
                            case 135:
                                var5 = var2.isRescrolling;
                                if (!(var5 === var0)) {
                                    _fun89238_ip = 147;
                                    continue _fun89238
                                }
                            case 145:
                                var5 = false;
                            case 147:
                                var _closure4_slot2 = var0;
                                var _closure4_slot3 = var0;
                                var3 = _closure3_slot0;
                                var3 = var3.props;
                                var3 = var3.useReducedMotion;
                                if (var3) {
                                    _fun89238_ip = 215;
                                    continue _fun89238
                                }
                            case 176:
                                var11 = _closure1_slot0;
                                var12 = _closure1_slot2;
                                var6 = 70;
                                var6 = var12[var6];
                                var6 = var11.bind(var0)(var6);
                                var6 = var6.JumpTypes;
                                var6 = var6.INSTANT;
                                var3 = var10 === var6;
                            case 215:
                                var10 = !var3;
                                _closure4_slot2 = var10;
                                var11 = _closure1_slot0;
                                var12 = _closure1_slot2;
                                var6 = 74;
                                var6 = var12[var6];
                                var11 = var11.bind(var0)(var6);
                                var6 = var11.isIOS;
                                var6 = var6.bind(var11)();
                                if (!var6) {
                                    _fun89238_ip = 325;
                                    continue _fun89238
                                }
                            case 258:
                                if (var5) {
                                    _fun89238_ip = 325;
                                    continue _fun89238
                                }
                            case 261:
                                var12 = _closure3_slot0;
                                var11 = var12.maybeRescrollToMessageId;
                                var6 = _closure1_slot0;
                                var13 = _closure1_slot2;
                                var5 = 70;
                                var5 = var13[var5];
                                var5 = var6.bind(var0)(var5);
                                var5 = var5.JumpTypes;
                                if (var10) {
                                    _fun89238_ip = 308;
                                    continue _fun89238
                                }
                            case 300:
                                var6 = var5.INSTANT;
                                _fun89238_ip = 314;
                                continue _fun89238;
                            case 308:
                                var6 = var5.ANIMATED;
                            case 314:
                                var5 = true;
                                var5 = var11.bind(var12)(var9, var5, var6);
                                _fun89238_ip = 447;
                                continue _fun89238;
                            case 325:
                                var6 = _closure3_slot0;
                                var5 = var6.findMessageIndex;
                                var6 = var5.bind(var6)(var9);
                                _closure4_slot3 = var6;
                                var5 = null;
                                if (!(var5 != var6)) {
                                    _fun89238_ip = 447;
                                    continue _fun89238
                                }
                            case 350:
                                if (var4) {
                                    _fun89238_ip = 423;
                                    continue _fun89238
                                }
                            case 353:
                                var4 = _closure1_slot1;
                                var5 = _closure1_slot2;
                                var3 = 71;
                                var3 = var5[var3];
                                var5 = var4.bind(var0)(var3);
                                var4 = var5.scrollTo;
                                var2 = _closure3_slot0;
                                var2 = var2._chatRef;
                                var3 = var2.current;
                                var2 = {};
                                var2.animated = var10;
                                var8 = var8 === var9;
                                var2.highlight = var8;
                                var2.position = var7;
                                var2 = var4.bind(var5)(var3, var6, var2);
                                _fun89238_ip = 447;
                                continue _fun89238;
                            case 423:
                                var2 = global;
                                var3 = var2.setTimeout;
                                var2 = function() { // Environment: var1
                                    var2 = _closure1_slot1;
                                    var1 = _closure1_slot2;
                                    var0 = 71;
                                    var1 = var1[var0];
                                    var0 = undefined;
                                    var5 = var2.bind(var0)(var1);
                                    var4 = var5.scrollIntoView;
                                    var1 = _closure3_slot0;
                                    var1 = var1._chatRef;
                                    var3 = var1.current;
                                    var2 = _closure4_slot3;
                                    var1 = {};
                                    var7 = _closure4_slot2;
                                    var1.animated = var7;
                                    var7 = _closure4_slot1;
                                    var6 = _closure4_slot0;
                                    var6 = var7 === var6;
                                    var1.highlight = var6;
                                    var1 = var4.bind(var5)(var3, var2, var1);
                                    return var0;
                                };
                                var1 = 5;
                                var1 = var3.bind(var0)(var2, var1);
                            case 447:
                                return var0;
                        }
                    };
                    var0.scrollToMessageId = var3;
                    var3 = function(arg0) { // Environment: var1
                        _fun89240: for (var _fun89240_ip = 0;;) switch (_fun89240_ip) {
                            case 0:
                                var3 = arg0;
                                var0 = null;
                                if (!(var0 == var3)) {
                                    _fun89240_ip = 13;
                                    continue _fun89240
                                }
                            case 9:
                                var0 = undefined;
                                return var0;
                            case 13:
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 72;
                                var1 = var1[var0];
                                var0 = undefined;
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.findMessageRowIndex;
                                var0 = _closure3_slot0;
                                var4 = var0.chatManager;
                                var0 = var4.getPreviousRows;
                                var0 = var0.bind(var4)();
                                var0 = var1.bind(var2)(var0, var3);
                                return var0;
                        }
                    };
                    var0.findMessageIndex = var3;
                    var3 = function(arg0) { // Environment: var1
                        _fun89241: for (var _fun89241_ip = 0;;) switch (_fun89241_ip) {
                            case 0:
                                var0 = arg0;
                                var0 = var0.nativeEvent;
                                var13 = var0.isAtBottom;
                                var12 = var0.isNearBottom;
                                var11 = var0.isNearTop;
                                var10 = var0.dragging;
                                var9 = var0.decelerating;
                                var8 = var0.shouldShowJumpToPresent;
                                var7 = var0.isFirstMessageVisible;
                                var5 = var0.firstVisibleMessageIndex;
                                var16 = var0.firstVisibleMessagePercentVisible;
                                var4 = var0.lastVisibleMessageIndex;
                                var19 = var0.changesetUpdateId;
                                var15 = var0.lastVisibleMessagePercentVisible;
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 75;
                                var1 = var1[var0];
                                var0 = undefined;
                                var6 = var2.bind(var0)(var1);
                                var3 = var6.getChangesetIdForChat;
                                var2 = _closure3_slot0;
                                var2 = var2._chatRef;
                                var2 = var2.current;
                                var18 = var3.bind(var6)(var2);
                                if (!(var19 !== var18)) {
                                    _fun89241_ip = 207;
                                    continue _fun89241
                                }
                            case 139:
                                var2 = _closure3_slot0;
                                var2 = var2.props;
                                var2 = var2.isStaff;
                                if (!var2) {
                                    _fun89241_ip = 379;
                                    continue _fun89241
                                }
                            case 160:
                                var17 = _closure1_slot78;
                                var6 = var17.log;
                                var2 = _closure3_slot0;
                                var2 = var2.props;
                                var22 = var2.channelId;
                                var23 = 'STAFF-ACK-LOG: Ignoring outdated scroll event.';
                                var24 = var17;
                                var21 = var19;
                                var20 = var18;
                                var2 = var24[var6](var23, var22, var21, var20, var19);
                                _fun89241_ip = 379;
                                continue _fun89241;
                            case 207:
                                var6 = _closure3_slot0;
                                var1 = var6.props;
                                var3 = var1.visibleMessagesWindowHandler;
                                var2 = var6.handleVisibleMessagesChange;
                                var1 = {};
                                var1.firstVisibleMessageRowIndex = var5;
                                var1.lastVisibleMessageRowIndex = var4;
                                var1.firstVisibleMessagePercentVisible = var16;
                                var1.lastVisibleMessagePercentVisible = var15;
                                var15 = _closure1_slot0;
                                var16 = _closure1_slot2;
                                var14 = 76;
                                var14 = var16[var14];
                                var14 = var15.bind(var0)(var14);
                                var14 = var14.QuestsVisibleMessagesChangedSource;
                                var14 = var14.SCROLL;
                                var1.source = var14;
                                var1 = var2.bind(var6)(var1);
                                var2 = var6.handleScroll;
                                var1 = {};
                                var1.isAtBottom = var13;
                                var1.isNearBottom = var12;
                                var1.isNearTop = var11;
                                var1.dragging = var10;
                                var1.decelerating = var9;
                                var1.shouldShowJumpToPresent = var8;
                                var1.isFirstMessageVisible = var7;
                                var1 = var2.bind(var6)(var1);
                                var2 = var3.handleScrollPosition;
                                var1 = {};
                                var6 = var6.chatManager;
                                var6 = var6._rows;
                                var1.rows = var6;
                                var1.firstVisibleMessageRowIndex = var5;
                                var1.lastVisibleMessageRowIndex = var4;
                                var1 = var2.bind(var3)(var1);
                            case 379:
                                return var0;
                        }
                    };
                    var0.handleScrollPosition = var3;
                    var3 = function(arg0) { // Environment: var1
                        _fun89242: for (var _fun89242_ip = 0;;) switch (_fun89242_ip) {
                            case 0:
                                var2 = arg0;
                                var7 = var2.isAtBottom;
                                var6 = var2.isNearBottom;
                                var0 = undefined;
                                if (!(var6 === var0)) {
                                    _fun89242_ip = 25;
                                    continue _fun89242
                                }
                            case 23:
                                var6 = false;
                            case 25:
                                var5 = var2.isNearTop;
                                if (!(var5 === var0)) {
                                    _fun89242_ip = 37;
                                    continue _fun89242
                                }
                            case 35:
                                var5 = false;
                            case 37:
                                var4 = var2.dragging;
                                if (!(var4 === var0)) {
                                    _fun89242_ip = 49;
                                    continue _fun89242
                                }
                            case 47:
                                var4 = false;
                            case 49:
                                var3 = var2.decelerating;
                                if (!(var3 === var0)) {
                                    _fun89242_ip = 61;
                                    continue _fun89242
                                }
                            case 59:
                                var3 = false;
                            case 61:
                                var12 = var2.shouldShowJumpToPresent;
                                if (!(var12 === var0)) {
                                    _fun89242_ip = 73;
                                    continue _fun89242
                                }
                            case 71:
                                var12 = false;
                            case 73:
                                var _closure4_slot0 = var12;
                                var11 = var2.isFirstMessageVisible;
                                if (!(var11 === var0)) {
                                    _fun89242_ip = 89;
                                    continue _fun89242
                                }
                            case 87:
                                var11 = false;
                            case 89:
                                var _closure4_slot1 = var0;
                                var10 = _closure3_slot0;
                                var8 = var10.props;
                                var8 = var8.messages;
                                _closure4_slot1 = var8;
                                var9 = var10.handleScrollCallbacks;
                                var8 = {};
                                var8.isAtBottom = var7;
                                var8.isNearBottom = var6;
                                var8.isNearTop = var5;
                                var8.dragging = var4;
                                var8.decelerating = var3;
                                var8.shouldShowJumpToPresent = var12;
                                var8.isFirstMessageVisible = var11;
                                var8 = var9.bind(var10)(var8);
                                if (!var8) {
                                    _fun89242_ip = 241;
                                    continue _fun89242
                                }
                            case 166:
                                var2 = _closure3_slot0;
                                var2.isAtBottom = var7;
                                var2.isNearBottom = var6;
                                var2.isNearTop = var5;
                                var2.dragging = var4;
                                var2.decelerating = var3;
                                var3 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var2 = 77;
                                var2 = var4[var2];
                                var3 = var3.bind(var0)(var2);
                                var2 = var3.batchUpdates;
                                var1 = function() { // Environment: var1
                                    _fun89243: for (var _fun89243_ip = 0;;) switch (_fun89243_ip) {
                                        case 0:
                                            var4 = _closure1_slot19;
                                            var0 = _closure3_slot0;
                                            var1 = var0.props;
                                            var3 = var1.channelId;
                                            var0 = var0.props;
                                            var2 = var0.screenIndex;
                                            var1 = _closure4_slot0;
                                            if (var1) {
                                                _fun89243_ip = 55;
                                                continue _fun89243
                                            }
                                        case 45:
                                            var0 = _closure4_slot1;
                                            var1 = var0.hasMoreAfter;
                                        case 55:
                                            var0 = undefined;
                                            var1 = var4.bind(var0)(var3, var2, var1);
                                            return var0;
                                    }
                                };
                                var1 = var2.bind(var3)(var1);
                            case 241:
                                return var0;
                        }
                    };
                    var0.handleScroll = var3;
                    var3 = function() { // Environment: var1
                        _fun89244: for (var _fun89244_ip = 0;;) switch (_fun89244_ip) {
                            case 0:
                                var2 = _closure3_slot0;
                                var3 = var2.props;
                                var5 = var3.messages;
                                var _closure4_slot0 = var5;
                                var2 = var3.isMessagesReady;
                                var3 = var3.oldestUnreadMessageId;
                                var _closure4_slot1 = var3;
                                var9 = _closure3_slot0;
                                var8 = var9.updateRows;
                                if (var2) {
                                    _fun89244_ip = 62;
                                    continue _fun89244
                                }
                            case 53:
                                var2 = var8.bind(var9)();
                                _fun89244_ip = 259;
                                continue _fun89244;
                            case 62:
                                var2 = {};
                                var4 = var5.jumpTargetId;
                                var2.scrollToMessageId = var4;
                                var4 = var5.jumpTargetId;
                                var2.jumpTargetId = var4;
                                var11 = _closure1_slot0;
                                var6 = _closure1_slot2;
                                var7 = 70;
                                var10 = var6[var7];
                                var6 = undefined;
                                var10 = var11.bind(var6)(var10);
                                var10 = var10.JumpTypes;
                                var10 = var10.INSTANT;
                                var2.jumpType = var10;
                                var10 = var5.focusTargetId;
                                var2.focusTargetId = var10;
                                var2 = var8.bind(var9)(var2);
                                var8 = var5.jumpTargetId;
                                var2 = null;
                                if (!(var2 == var8)) {
                                    _fun89244_ip = 186;
                                    continue _fun89244
                                }
                            case 156:
                                if (!(var2 != var3)) {
                                    _fun89244_ip = 259;
                                    continue _fun89244
                                }
                            case 160:
                                var2 = global;
                                var3 = var2.setTimeout;
                                var2 = function() { // Environment: var1
                                    var2 = _closure3_slot0;
                                    var1 = var2.scrollToMessageId;
                                    var0 = {};
                                    var4 = _closure4_slot1;
                                    var0.scrollToMessageId = var4;
                                    var3 = _closure4_slot0;
                                    var3 = var3.jumpTargetId;
                                    var0.jumpTargetId = var3;
                                    var5 = _closure1_slot0;
                                    var4 = _closure1_slot2;
                                    var3 = 70;
                                    var4 = var4[var3];
                                    var3 = undefined;
                                    var3 = var5.bind(var3)(var4);
                                    var3 = var3.JumpTypes;
                                    var3 = var3.INSTANT;
                                    var0.jumpType = var3;
                                    var0 = var1.bind(var2)(var0);
                                    return var0;
                                };
                                var1 = 50;
                                var1 = var3.bind(var6)(var2, var1);
                                _fun89244_ip = 259;
                                continue _fun89244;
                            case 186:
                                var3 = _closure3_slot0;
                                var2 = var3.scrollToMessageId;
                                var1 = {};
                                var8 = var5.jumpTargetId;
                                var1.scrollToMessageId = var8;
                                var5 = var5.jumpTargetId;
                                var1.jumpTargetId = var5;
                                var5 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var4 = var4[var7];
                                var4 = var5.bind(var6)(var4);
                                var4 = var4.JumpTypes;
                                var4 = var4.INSTANT;
                                var1.jumpType = var4;
                                var1 = var2.bind(var3)(var1);
                            case 259:
                                var1 = _closure3_slot0;
                                var0 = var1.recordTimings;
                                var0 = var0.bind(var1)();
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.syncMessageDisplay = var3;
                    var3 = function() { // Environment: var1
                        _fun89246: for (var _fun89246_ip = 0;;) switch (_fun89246_ip) {
                            case 0:
                                var0 = _closure3_slot0;
                                var1 = true;
                                var0.animated = var1;
                                var0 = var0.props;
                                var5 = var0.channelId;
                                var6 = var0.messages;
                                var0 = var6.hasMoreBefore;
                                if (!var0) {
                                    _fun89246_ip = 49;
                                    continue _fun89246
                                }
                            case 40:
                                var1 = var6.loadingMore;
                                var0 = !var1;
                            case 49:
                                if (!var0) {
                                    _fun89246_ip = 131;
                                    continue _fun89246
                                }
                            case 52:
                                var1 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var0 = 78;
                                var0 = var2[var0];
                                var4 = undefined;
                                var2 = var1.bind(var4)(var0);
                                var1 = var2.fetchMessages;
                                var0 = {};
                                var0.channelId = var5;
                                var5 = var6.first;
                                var5 = var5.bind(var6)();
                                var6 = null;
                                var6 = var6 == var5;
                                if (var6) {
                                    _fun89246_ip = 113;
                                    continue _fun89246
                                }
                            case 108:
                                var4 = var5.id;
                            case 113:
                                var0.before = var4;
                                var3 = _closure1_slot68;
                                var0.limit = var3;
                                var0 = var1.bind(var2)(var0);
                            case 131:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.loadMoreBefore = var3;
                    var3 = function() { // Environment: var1
                        _fun89247: for (var _fun89247_ip = 0;;) switch (_fun89247_ip) {
                            case 0:
                                var0 = _closure3_slot0;
                                var1 = true;
                                var0.animated = var1;
                                var0 = var0.props;
                                var5 = var0.channelId;
                                var6 = var0.messages;
                                var0 = var6.hasMoreAfter;
                                if (!var0) {
                                    _fun89247_ip = 49;
                                    continue _fun89247
                                }
                            case 40:
                                var1 = var6.loadingMore;
                                var0 = !var1;
                            case 49:
                                if (!var0) {
                                    _fun89247_ip = 131;
                                    continue _fun89247
                                }
                            case 52:
                                var1 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var0 = 78;
                                var0 = var2[var0];
                                var4 = undefined;
                                var2 = var1.bind(var4)(var0);
                                var1 = var2.fetchMessages;
                                var0 = {};
                                var0.channelId = var5;
                                var5 = var6.last;
                                var5 = var5.bind(var6)();
                                var6 = null;
                                var6 = var6 == var5;
                                if (var6) {
                                    _fun89247_ip = 113;
                                    continue _fun89247
                                }
                            case 108:
                                var4 = var5.id;
                            case 113:
                                var0.after = var4;
                                var3 = _closure1_slot68;
                                var0.limit = var3;
                                var0 = var1.bind(var2)(var0);
                            case 131:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.loadMoreAfter = var3;
                    var3 = function() { // Environment: var1
                        _fun89248: for (var _fun89248_ip = 0;;) switch (_fun89248_ip) {
                            case 0:
                                var0 = _closure3_slot0;
                                var0 = var0.props;
                                var2 = var0.channel;
                                var0 = var0.canChat;
                                if (!var0) {
                                    _fun89248_ip = 55;
                                    continue _fun89248
                                }
                            case 26:
                                var4 = _closure1_slot53;
                                var3 = var4.can;
                                var1 = _closure1_slot72;
                                var1 = var1.ADD_REACTIONS;
                                var0 = var3.bind(var4)(var1, var2);
                            case 55:
                                if (var0) {
                                    _fun89248_ip = 68;
                                    continue _fun89248
                                }
                            case 58:
                                var1 = var2.isPrivate;
                                var0 = var1.bind(var2)();
                            case 68:
                                return var0;
                        }
                    };
                    var0.canAddNewReactions = var3;
                    var3 = function(arg0) { // Environment: var1
                        _fun89249: for (var _fun89249_ip = 0;;) switch (_fun89249_ip) {
                            case 0:
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 79;
                                var1 = var1[var0];
                                var0 = undefined;
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.getNativeSyntheticEventData;
                                var1 = arg0;
                                var1 = var2.bind(var3)(var1);
                                var5 = var1.messageId;
                                var2 = _closure3_slot0;
                                var6 = var2.animatingStickerMessageId;
                                var2 = global;
                                var4 = var2.Set;
                                var2 = new Array(1);
                                var2[0] = var5;
                                var3 = var4.prototype;
                                var3 = Object.create(var3, {
                                    constructor: {
                                        value: var4
                                    }
                                });
                                var8 = var3;
                                var7 = var2;
                                var2 = new var8[var4](var7, var6);
                                var4 = var2 instanceof Object ? var2 : var3;
                                var3 = null;
                                if (!(var3 != var6)) {
                                    _fun89249_ip = 112;
                                    continue _fun89249
                                }
                            case 102:
                                var2 = var4.add;
                                var2 = var2.bind(var4)(var6);
                            case 112:
                                var2 = _closure3_slot0;
                                var3 = null;
                                if (!(var6 !== var5)) {
                                    _fun89249_ip = 125;
                                    continue _fun89249
                                }
                            case 122:
                                var3 = var5;
                            case 125:
                                var2.animatingStickerMessageId = var3;
                                var3 = _closure3_slot0;
                                var2 = var3.updateRows;
                                var1 = {};
                                var5 = true;
                                var1.forceRender = var5;
                                var1.updateMessageIds = var4;
                                var1 = var2.bind(var3)(var1);
                                return var0;
                        }
                    };
                    var0.handleLongPressSticker = var3;
                    var3 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var0 = var0.nativeEvent;
                        var1 = var0.description;
                        var5 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var0 = 80;
                        var4 = var2[var0];
                        var0 = undefined;
                        var5 = var5.bind(var0)(var4);
                        var4 = var5.openLazy;
                        var6 = _closure1_slot0;
                        var3 = 82;
                        var3 = var2[var3];
                        var6 = var6.bind(var0)(var3);
                        var3 = 81;
                        var3 = var2[var3];
                        var2 = var2.paths;
                        var3 = var6.bind(var0)(var3, var2);
                        var2 = {};
                        var2.description = var1;
                        var1 = true;
                        var2.showBackdrop = var1;
                        var1 = 'MediaViewerAltTextSheet';
                        var1 = var4.bind(var5)(var3, var1, var2);
                        return var0;
                    };
                    var0.handleTapShowAltText = var3;
                    var3 = function() { // Environment: var1
                        _fun89251: for (var _fun89251_ip = 0;;) switch (_fun89251_ip) {
                            case 0:
                                var4 = arguments[0];
                                var0 = undefined;
                                if (!(var4 === var0)) {
                                    _fun89251_ip = 11;
                                    continue _fun89251
                                }
                            case 9:
                                var4 = true;
                            case 11:
                                var1 = _closure3_slot0;
                                var2 = var1.props;
                                var5 = var2.useReducedMotion;
                                var3 = var1.handleScrollCallbacks;
                                var2 = {};
                                var6 = true;
                                var2.isAtBottom = var6;
                                var2 = var3.bind(var1)(var2);
                                var3 = _closure1_slot1;
                                var6 = _closure1_slot2;
                                var2 = 71;
                                var2 = var6[var2];
                                var3 = var3.bind(var0)(var2);
                                var2 = var3.scrollToBottom;
                                var1 = var1._chatRef;
                                var1 = var1.current;
                                if (!var4) {
                                    _fun89251_ip = 95;
                                    continue _fun89251
                                }
                            case 92:
                                var4 = !var5;
                            case 95:
                                var1 = var2.bind(var3)(var1, var4);
                                return var0;
                        }
                    };
                    var0.scrollToBottom = var3;
                    var3 = function() { // Environment: var1
                        _fun89252: for (var _fun89252_ip = 0;;) switch (_fun89252_ip) {
                            case 0:
                                var4 = arguments[0];
                                var0 = undefined;
                                if (!(var4 === var0)) {
                                    _fun89252_ip = 11;
                                    continue _fun89252
                                }
                            case 9:
                                var4 = true;
                            case 11:
                                var1 = _closure3_slot0;
                                var2 = var1.props;
                                var5 = var2.useReducedMotion;
                                var3 = _closure1_slot1;
                                var6 = _closure1_slot2;
                                var2 = 71;
                                var2 = var6[var2];
                                var3 = var3.bind(var0)(var2);
                                var2 = var3.scrollToTop;
                                var1 = var1._chatRef;
                                var1 = var1.current;
                                if (!var4) {
                                    _fun89252_ip = 75;
                                    continue _fun89252
                                }
                            case 72:
                                var4 = !var5;
                            case 75:
                                var1 = var2.bind(var3)(var1, var4);
                                return var0;
                        }
                    };
                    var0.scrollToTop = var3;
                    var3 = function(arg0) { // Environment: var1
                        _fun89253: for (var _fun89253_ip = 0;;) switch (_fun89253_ip) {
                            case 0:
                                var5 = arguments[1];
                                var0 = undefined;
                                if (!(var5 === var0)) {
                                    _fun89253_ip = 11;
                                    continue _fun89253
                                }
                            case 9:
                                var5 = true;
                            case 11:
                                var2 = _closure1_slot1;
                                var3 = _closure1_slot2;
                                var1 = 71;
                                var1 = var3[var1];
                                var4 = var2.bind(var0)(var1);
                                var3 = var4.scrollToRelativeOffset;
                                var2 = _closure3_slot0;
                                var2 = var2._chatRef;
                                var2 = var2.current;
                                if (!var5) {
                                    _fun89253_ip = 79;
                                    continue _fun89253
                                }
                            case 61:
                                var1 = _closure3_slot0;
                                var1 = var1.props;
                                var1 = var1.useReducedMotion;
                                var5 = !var1;
                            case 79:
                                var1 = arg0;
                                var1 = var3.bind(var4)(var2, var1, var5);
                                return var0;
                        }
                    };
                    var0.scrollToRelativeOffset = var3;
                    var3 = function() { // Environment: var1
                        _fun89254: for (var _fun89254_ip = 0;;) switch (_fun89254_ip) {
                            case 0:
                                var0 = _closure3_slot0;
                                var2 = var0.chatManager;
                                var0 = var2.getPreviousRows;
                                var0 = var0.bind(var2)();
                                var3 = var0.length;
                                var2 = 0;
                                if (!(var3 > var2)) {
                                    _fun89254_ip = 98;
                                    continue _fun89254
                                }
                            case 34:
                                var4 = _closure1_slot1;
                                var3 = _closure1_slot2;
                                var2 = 71;
                                var3 = var3[var2];
                                var2 = undefined;
                                var3 = var4.bind(var2)(var3);
                                var2 = var3.scrollTo;
                                var1 = _closure3_slot0;
                                var1 = var1._chatRef;
                                var1 = var1.current;
                                var4 = var0.length;
                                var0 = 1;
                                var0 = var4 - var0;
                                var0 = var2.bind(var3)(var1, var0);
                            case 98:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.scrollToTopMessage = var3;
                    var3 = _closure1_slot4;
                    var2 = function*() { // Environment: var1
                        var0 = function*() { // Original name: ?anon_0_, environment: var0
                            _fun89256: for (var _fun89256_ip = 0;;) switch (_fun89256_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun89256_ip = 398;
                                        continue _fun89256
                                    }
                                case 12:
                                    var1 = undefined;
                                    var _closure5_slot0 = var1;
                                    var4 = _closure3_slot0;
                                    var4 = var4.props;
                                    var8 = var4.channel;
                                    var10 = var4.useReducedMotion;
                                    _closure5_slot0 = var10;
                                    var4 = var8.isForumPost;
                                    var4 = var4.bind(var8)();
                                    if (!var4) {
                                        _fun89256_ip = 395;
                                        continue _fun89256
                                    }
                                case 61:
                                    var4 = _closure3_slot0;
                                    var4 = var4.isNearTop;
                                    if (var4) {
                                        _fun89256_ip = 395;
                                        continue _fun89256
                                    }
                                case 77:
                                    var7 = _closure3_slot0;
                                    var5 = var7.getMessage;
                                    var9 = _closure1_slot1;
                                    var4 = _closure1_slot2;
                                    var12 = 69;
                                    var4 = var4[var12];
                                    var11 = var9.bind(var1)(var4);
                                    var9 = var11.castChannelIdAsMessageId;
                                    var4 = var8.id;
                                    var4 = var9.bind(var11)(var4);
                                    var4 = var5.bind(var7)(var4);
                                    var5 = null;
                                    if (!(var5 != var4)) {
                                        _fun89256_ip = 283;
                                        continue _fun89256
                                    }
                                case 140:
                                    var9 = _closure3_slot0;
                                    var7 = var9.findMessageIndex;
                                    var11 = _closure1_slot1;
                                    var4 = _closure1_slot2;
                                    var4 = var4[var12];
                                    var12 = var11.bind(var1)(var4);
                                    var11 = var12.castChannelIdAsMessageId;
                                    var4 = var8.id;
                                    var4 = var11.bind(var12)(var4);
                                    var4 = var7.bind(var9)(var4);
                                    if (!(var5 != var4)) {
                                        _fun89256_ip = 280;
                                        continue _fun89256
                                    }
                                case 192:
                                    var7 = _closure1_slot1;
                                    var9 = _closure1_slot2;
                                    var5 = 71;
                                    var5 = var9[var5];
                                    var9 = var7.bind(var1)(var5);
                                    var7 = var9.scrollTo;
                                    var2 = _closure3_slot0;
                                    var2 = var2._chatRef;
                                    var5 = var2.current;
                                    var2 = {};
                                    var10 = !var10;
                                    var2.animated = var10;
                                    var2 = var7.bind(var9)(var5, var4, var2);
                                    var2 = global;
                                    var5 = var2.setTimeout;
                                    var2 = 10;
                                    var4 = var2 * var4;
                                    var2 = function() { // Environment: var3
                                        var2 = _closure3_slot0;
                                        var1 = var2.scrollToTop;
                                        var0 = _closure5_slot0;
                                        var0 = !var0;
                                        var0 = var1.bind(var2)(var0);
                                        return var0;
                                    };
                                    var2 = var5.bind(var1)(var2, var4);
                                    _fun89256_ip = 395;
                                    continue _fun89256;
                                case 280:
                                    return var1;
                                case 283:
                                    var4 = _closure1_slot1;
                                    var5 = _closure1_slot2;
                                    var2 = 78;
                                    var2 = var5[var2];
                                    var5 = var4.bind(var1)(var2);
                                    var4 = var5.fetchMessages;
                                    var2 = {};
                                    var7 = var8.id;
                                    var2.channelId = var7;
                                    var7 = {};
                                    var8 = var8.id;
                                    var7.messageId = var8;
                                    var8 = false;
                                    var7.flash = var8;
                                    var2.jump = var7;
                                    var6 = _closure1_slot68;
                                    var2.limit = var6;
                                    var2 = var4.bind(var5)(var2);
                                    SaveGenerator(address = 360);
                                case 358:
                                    return var2;
                                case 360:
                                    ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                                    if (var4) {
                                        _fun89256_ip = 392;
                                        continue _fun89256
                                    }
                                case 366:
                                    var4 = global;
                                    var5 = var4.setTimeout;
                                    var4 = function() { // Environment: var3
                                        var2 = _closure3_slot0;
                                        var1 = var2.scrollToTop;
                                        var0 = _closure5_slot0;
                                        var0 = !var0;
                                        var0 = var1.bind(var2)(var0);
                                        return var0;
                                    };
                                    var3 = 50;
                                    var3 = var5.bind(var1)(var4, var3);
                                    _fun89256_ip = 395;
                                    continue _fun89256;
                                case 392:
                                    return var2;
                                case 395:
                                    return var1;
                                case 398:
                                    return var0;
                            }
                        };
                        return var0;
                    };
                    var2 = var3.bind(var4)(var2);
                    var0.handleTapNavBar = var2;
                    var2 = function() { // Environment: var1
                        _fun89259: for (var _fun89259_ip = 0;;) switch (_fun89259_ip) {
                            case 0:
                                var0 = _closure3_slot0;
                                var0 = var0.props;
                                var1 = var0.chatInputRef;
                                var4 = var0.keyboardType;
                                var5 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var0 = 74;
                                var2 = var2[var0];
                                var0 = undefined;
                                var5 = var5.bind(var0)(var2);
                                var2 = var5.isIOS;
                                var2 = var2.bind(var5)();
                                if (!var2) {
                                    _fun89259_ip = 98;
                                    continue _fun89259
                                }
                            case 62:
                                var5 = _closure1_slot0;
                                var6 = _closure1_slot2;
                                var3 = 83;
                                var3 = var6[var3];
                                var3 = var5.bind(var0)(var3);
                                var3 = var3.KeyboardTypes;
                                var3 = var3.SYSTEM;
                                var2 = var4 !== var3;
                            case 98:
                                if (!var2) {
                                    _fun89259_ip = 122;
                                    continue _fun89259
                                }
                            case 101:
                                var2 = var1.current;
                                var1 = null;
                                if (!(var1 != var2)) {
                                    _fun89259_ip = 122;
                                    continue _fun89259
                                }
                            case 112:
                                var1 = var2.closeCustomKeyboard;
                                var1 = var1.bind(var2)();
                            case 122:
                                return var0;
                        }
                    };
                    var0.handleTapTableView = var2;
                    var2 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var0 = var0.nativeEvent;
                        var6 = var0.firstVisibleMessageIndex;
                        var5 = var0.lastVisibleMessageIndex;
                        var4 = var0.firstVisibleMessagePercentVisible;
                        var0 = var0.lastVisibleMessagePercentVisible;
                        var3 = _closure3_slot0;
                        var2 = var3.handleVisibleMessagesChange;
                        var1 = {};
                        var1.firstVisibleMessageRowIndex = var6;
                        var1.lastVisibleMessageRowIndex = var5;
                        var1.firstVisibleMessagePercentVisible = var4;
                        var1.lastVisibleMessagePercentVisible = var0;
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var0 = 76;
                        var4 = var4[var0];
                        var0 = undefined;
                        var4 = var5.bind(var0)(var4);
                        var4 = var4.QuestsVisibleMessagesChangedSource;
                        var4 = var4.FIRST_LAYOUT;
                        var1.source = var4;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var0.handleFirstLayout = var2;
                    var2 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var0 = var0.nativeEvent;
                        var6 = var0.firstVisibleMessageIndex;
                        var5 = var0.lastVisibleMessageIndex;
                        var4 = var0.firstVisibleMessagePercentVisible;
                        var0 = var0.lastVisibleMessagePercentVisible;
                        var3 = _closure3_slot0;
                        var2 = var3.handleVisibleMessagesChange;
                        var1 = {};
                        var1.firstVisibleMessageRowIndex = var6;
                        var1.lastVisibleMessageRowIndex = var5;
                        var1.firstVisibleMessagePercentVisible = var4;
                        var1.lastVisibleMessagePercentVisible = var0;
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var0 = 76;
                        var4 = var4[var0];
                        var0 = undefined;
                        var4 = var5.bind(var0)(var4);
                        var4 = var4.QuestsVisibleMessagesChangedSource;
                        var4 = var4.VISIBILITY_CHANGED;
                        var1.source = var4;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var0.handleMessageVisibilityChanged = var2;
                    var2 = function(arg0) { // Environment: var1
                        _fun89262: for (var _fun89262_ip = 0;;) switch (_fun89262_ip) {
                            case 0:
                                var0 = arg0;
                                var6 = var0.nativeEvent;
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var0 = 84;
                                var1 = var1[var0];
                                var0 = undefined;
                                var4 = var2.bind(var0)(var1);
                                var3 = var4.track;
                                var1 = _closure1_slot66;
                                var2 = var1.MEDIA_PLAY_FINISHED;
                                var1 = {};
                                var7 = var6.playWallTimeMs;
                                var1.play_time_sec = var7;
                                var7 = var6.playWallTimeMs;
                                var1.play_wall_time_ms = var7;
                                var7 = var6.firstPlayWaitingMs;
                                var1.first_play_waiting_ms = var7;
                                var7 = var6.stallCount;
                                var1.stall_count = var7;
                                var7 = var6.stallMs;
                                var1.stall_ms = var7;
                                var7 = var6.seekCount;
                                var1.seek_count = var7;
                                var7 = null;
                                var1.seek_waiting_ms = var7;
                                var8 = var6.mediaSource;
                                var1.media_source = var8;
                                var9 = var6.mimeType;
                                var10 = var7 != var9;
                                var8 = 'video';
                                if (!var10) {
                                    _fun89262_ip = 155;
                                    continue _fun89262
                                }
                            case 152:
                                var8 = var9;
                            case 155:
                                var1.mime_type = var8;
                                var1.file_size = var7;
                                var6 = var6.fileDurationSec;
                                var1.file_duration_sec = var6;
                                var6 = _closure1_slot52;
                                var5 = var6.getType;
                                var5 = var5.bind(var6)();
                                var1.connection_type = var5;
                                var5 = var6.getEffectiveConnectionSpeed;
                                var5 = var5.bind(var6)();
                                var1.effective_connection_speed = var5;
                                var5 = var6.getServiceProvider;
                                var5 = var5.bind(var6)();
                                var1.service_provider = var5;
                                var1 = var3.bind(var4)(var2, var1);
                                return var0;
                        }
                    };
                    var0.handleMediaPlayFinishedAnalytics = var2;
                    var2 = function() { // Environment: var1
                        _fun89263: for (var _fun89263_ip = 0;;) switch (_fun89263_ip) {
                            case 0:
                                var1 = _closure3_slot0;
                                var2 = var1.props;
                                var1 = var2.messages;
                                var4 = var2.channel;
                                var6 = var1.jumpReturnTargetId;
                                var2 = null;
                                if (!(var2 != var6)) {
                                    _fun89263_ip = 95;
                                    continue _fun89263
                                }
                            case 35:
                                var5 = _closure1_slot1;
                                var3 = _closure1_slot2;
                                var2 = 78;
                                var3 = var3[var2];
                                var2 = undefined;
                                var5 = var5.bind(var2)(var3);
                                var3 = var5.jumpToMessage;
                                var2 = {};
                                var7 = var4.id;
                                var2.channelId = var7;
                                var2.messageId = var6;
                                var6 = true;
                                var2.flash = var6;
                                var2 = var3.bind(var5)(var2);
                                _fun89263_ip = 198;
                                continue _fun89263;
                            case 95:
                                var2 = var1.loadingMore;
                                if (var2) {
                                    _fun89263_ip = 198;
                                    continue _fun89263
                                }
                            case 104:
                                var1 = var1.hasMoreAfter;
                                if (var1) {
                                    _fun89263_ip = 129;
                                    continue _fun89263
                                }
                            case 113:
                                var1 = _closure3_slot0;
                                var0 = var1.scrollToBottom;
                                var0 = var0.bind(var1)();
                                _fun89263_ip = 198;
                                continue _fun89263;
                            case 129:
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var0 = 78;
                                var1 = var1[var0];
                                var0 = undefined;
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.fetchMessages;
                                var0 = {};
                                var4 = var4.id;
                                var0.channelId = var4;
                                var3 = _closure1_slot68;
                                var0.limit = var3;
                                var3 = {};
                                var4 = true;
                                var3.present = var4;
                                var0.jump = var3;
                                var0 = var1.bind(var2)(var0);
                            case 198:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.jumpToPresent = var2;
                    var2 = function() { // Environment: var1
                        _fun89264: for (var _fun89264_ip = 0;;) switch (_fun89264_ip) {
                            case 0:
                                var3 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var0 = 85;
                                var2 = var2[var0];
                                var0 = undefined;
                                var4 = var3.bind(var0)(var2);
                                var3 = var4.getCurrentConfig;
                                var2 = {};
                                var5 = 'Messages';
                                var2.location = var5;
                                var2 = var3.bind(var4)(var2);
                                var4 = var2.enabled;
                                var6 = _closure3_slot0;
                                var2 = var6.props;
                                if (var4) {
                                    _fun89264_ip = 411;
                                    continue _fun89264
                                }
                            case 69:
                                var9 = var2.useReducedMotion;
                                var5 = var2.oldestUnreadMessageId;
                                var7 = var6.chatManager;
                                var4 = var7.getPreviousRows;
                                var7 = var4.bind(var7)();
                                var4 = var6.findMessageIndex;
                                var4 = var4.bind(var6)(var5);
                                var5 = null;
                                if (!(var5 != var4)) {
                                    _fun89264_ip = 511;
                                    continue _fun89264
                                }
                            case 117:
                                var10 = var4 + 1;
                                var4 = var7.length;
                                var8 = var10;
                                if (!(var10 < var4)) {
                                    _fun89264_ip = 260;
                                    continue _fun89264
                                }
                            case 135:
                                var4 = var7[var10];
                                var5 = var4.type;
                                var4 = _closure1_slot63;
                                var4 = var4.SEPARATOR;
                                var8 = var10;
                                if (!(var5 === var4)) {
                                    _fun89264_ip = 260;
                                    continue _fun89264
                                }
                            case 161:
                                var4 = var7[var10];
                                var5 = var4.id;
                                var4 = _closure1_slot64;
                                var4 = var4.UNREAD;
                                var6 = var10;
                                var8 = var6;
                                if (!(var5 !== var4)) {
                                    _fun89264_ip = 260;
                                    continue _fun89264
                                }
                            case 190:
                                var10 = var6 + 1;
                                var4 = var7.length;
                                var8 = var10;
                                if (!(var10 < var4)) {
                                    _fun89264_ip = 260;
                                    continue _fun89264
                                }
                            case 205:
                                var4 = var7[var10];
                                var5 = var4.type;
                                var4 = _closure1_slot63;
                                var4 = var4.SEPARATOR;
                                var8 = var10;
                                if (!(var5 === var4)) {
                                    _fun89264_ip = 260;
                                    continue _fun89264
                                }
                            case 231:
                                var4 = var7[var10];
                                var5 = var4.id;
                                var4 = _closure1_slot64;
                                var4 = var4.UNREAD;
                                var6 = var10;
                                var8 = var6;
                                if (var5 !== var4) {
                                    _fun89264_ip = 190;
                                    continue _fun89264
                                }
                            case 260:
                                var5 = _closure3_slot0;
                                var4 = var5.shouldJumpToOriginalPost;
                                var4 = var4.bind(var5)();
                                if (var4) {
                                    _fun89264_ip = 395;
                                    continue _fun89264
                                }
                            case 277:
                                var5 = _closure1_slot1;
                                var6 = _closure1_slot2;
                                var4 = 71;
                                var4 = var6[var4];
                                var7 = var5.bind(var0)(var4);
                                var6 = var7.scrollTo;
                                var4 = _closure3_slot0;
                                var4 = var4._chatRef;
                                var5 = var4.current;
                                var4 = {};
                                if (var9) {
                                    _fun89264_ip = 380;
                                    continue _fun89264
                                }
                            case 323:
                                var10 = _closure3_slot0;
                                var10 = var10.props;
                                var10 = var10.messages;
                                var11 = var10.jumpType;
                                var12 = _closure1_slot0;
                                var13 = _closure1_slot2;
                                var10 = 70;
                                var10 = var13[var10];
                                var10 = var12.bind(var0)(var10);
                                var10 = var10.JumpTypes;
                                var10 = var10.INSTANT;
                                var9 = var11 === var10;
                            case 380:
                                var9 = !var9;
                                var4.animated = var9;
                                var4 = var6.bind(var7)(var5, var8, var4);
                            case 395:
                                var4 = _closure3_slot0;
                                var3 = var4.loadMoreBefore;
                                var3 = var3.bind(var4)();
                                _fun89264_ip = 511;
                                continue _fun89264;
                            case 411:
                                var5 = var2.channel;
                                var4 = _closure1_slot56;
                                var3 = var4.ackMessageId;
                                var2 = var5.id;
                                var4 = var3.bind(var4)(var2);
                                var2 = _closure1_slot1;
                                var3 = _closure1_slot2;
                                var1 = 78;
                                var1 = var3[var1];
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.jumpToMessage;
                                var1 = {};
                                var6 = var5.id;
                                var1.channelId = var6;
                                var6 = null;
                                if (!(var6 == var4)) {
                                    _fun89264_ip = 484;
                                    continue _fun89264
                                }
                            case 479:
                                var4 = var5.id;
                            case 484:
                                var1.messageId = var4;
                                var4 = 1;
                                var1.offset = var4;
                                var4 = 'Mark As Read';
                                var1.context = var4;
                                var1 = var2.bind(var3)(var1);
                            case 511:
                                return var0;
                        }
                    };
                    var0.scrollToNewMessages = var2;
                    var2 = function() { // Environment: var1
                        var0 = _closure3_slot0;
                        var0 = var0._chatRef;
                        return var0;
                    };
                    var0.getChatRef = var2;
                    var2 = function() { // Environment: var1
                        var1 = _closure3_slot0;
                        var6 = false;
                        var1.animated = var6;
                        var1.hasHandledScroll = var6;
                        var1.isNearBottom = var6;
                        var1.isAtBottom = var6;
                        var1.isNearTop = var6;
                        var1.decelerating = var6;
                        var1.dragging = var6;
                        var1.hasMoreMessagesAfterForLastUpdate = var6;
                        var0 = new Array(0);
                        var1.pendingUpdatesQueue = var0;
                        var1._loaded = var6;
                        var0 = null;
                        var1.animatingStickerMessageId = var0;
                        var2 = var1.chatManager;
                        var0 = var2.clear;
                        var0 = var0.bind(var2)();
                        var5 = _closure1_slot19;
                        var0 = var1.props;
                        var4 = var0.channelId;
                        var0 = var1.props;
                        var3 = var0.screenIndex;
                        var0 = undefined;
                        var3 = var5.bind(var0)(var4, var3, var6);
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var2 = 71;
                        var2 = var4[var2];
                        var3 = var3.bind(var0)(var2);
                        var2 = var3.clearRows;
                        var1 = var1._chatRef;
                        var1 = var1.current;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var0.clearRows = var2;
                    var1 = function(arg0) { // Environment: var1
                        _fun89267: for (var _fun89267_ip = 0;;) switch (_fun89267_ip) {
                            case 0:
                                var0 = arg0;
                                var2 = var0.forceRender;
                                var _closure4_slot0 = var2;
                                var2 = var0.updateMessageIds;
                                var _closure4_slot1 = var2;
                                var0 = var0.ignoreEmbedDescriptionCache;
                                var _closure4_slot2 = var0;
                                var0 = _closure3_slot0;
                                var3 = var0.props;
                                var0 = var3.channel;
                                var _closure4_slot3 = var0;
                                var4 = var3.messages;
                                var _closure4_slot4 = var4;
                                var2 = var3.isMessagesReady;
                                var5 = var3.uploads;
                                var _closure4_slot5 = var5;
                                var5 = var3.roleStyle;
                                var _closure4_slot6 = var5;
                                var5 = var3.oldestUnreadMessageId;
                                var _closure4_slot7 = var5;
                                var5 = var3.replyingMessageId;
                                var _closure4_slot8 = var5;
                                var5 = var3.inlineAttachmentMedia;
                                var _closure4_slot9 = var5;
                                var5 = var3.inlineEmbedMedia;
                                var _closure4_slot10 = var5;
                                var5 = var3.renderEmbeds;
                                var _closure4_slot11 = var5;
                                var5 = var3.renderReactions;
                                var _closure4_slot12 = var5;
                                var5 = var3.animateEmoji;
                                var _closure4_slot13 = var5;
                                var5 = var3.gifAutoPlay;
                                var _closure4_slot14 = var5;
                                var5 = var3.currentUserId;
                                var _closure4_slot15 = var5;
                                var5 = var3.renderCommunicationDisabled;
                                var _closure4_slot16 = var5;
                                var5 = var3.selectedSummary;
                                var _closure4_slot17 = var5;
                                var5 = var3.enableSwipeActions;
                                var _closure4_slot18 = var5;
                                var5 = var3.isResourceChannel;
                                var _closure4_slot19 = var5;
                                var5 = var3.shouldObscureSpoiler;
                                var _closure4_slot20 = var5;
                                var5 = var3.shouldDisableInteractiveComponents;
                                var _closure4_slot21 = var5;
                                var3 = var3.unloadableContentEntryMessageIds;
                                var _closure4_slot22 = var3;
                                var3 = null;
                                var5 = var3 != var0;
                                var0 = null;
                                if (!var5) {
                                    _fun89267_ip = 326;
                                    continue _fun89267
                                }
                            case 263:
                                var4 = var3 != var4;
                                var0 = null;
                                if (!var4) {
                                    _fun89267_ip = 326;
                                    continue _fun89267
                                }
                            case 272:
                                var0 = null;
                                if (!var2) {
                                    _fun89267_ip = 326;
                                    continue _fun89267
                                }
                            case 277:
                                var4 = _closure1_slot1;
                                var3 = _closure1_slot2;
                                var2 = 86;
                                var3 = var3[var2];
                                var2 = undefined;
                                var2 = var4.bind(var2)(var3);
                                var3 = var2.firstRowGenerator;
                                var2 = var3.measure;
                                var1 = function() { // Environment: var1
                                    _fun89268: for (var _fun89268_ip = 0;;) switch (_fun89268_ip) {
                                        case 0:
                                            var6 = _closure3_slot0;
                                            var2 = var6.chatManager;
                                            var1 = var2.setup;
                                            var7 = _closure4_slot4;
                                            var1 = var1.bind(var2)(var7);
                                            var3 = var6.rowGenerator;
                                            var2 = var3.setOptions;
                                            var1 = {};
                                            var4 = _closure4_slot9;
                                            var1.inlineAttachmentMedia = var4;
                                            var4 = _closure4_slot10;
                                            var1.inlineEmbedMedia = var4;
                                            var4 = _closure4_slot11;
                                            var1.renderEmbeds = var4;
                                            var4 = _closure4_slot12;
                                            var1.renderReactions = var4;
                                            var4 = _closure4_slot13;
                                            var1.animateEmoji = var4;
                                            var4 = var6.animatingStickerMessageId;
                                            var1.animatingStickerMessageId = var4;
                                            var4 = var6.props;
                                            var4 = var4.containerWidth;
                                            var1.constrainedWidth = var4;
                                            var4 = _closure4_slot14;
                                            var1.gifAutoPlay = var4;
                                            var4 = _closure4_slot16;
                                            var1.renderCommunicationDisabled = var4;
                                            var4 = _closure4_slot2;
                                            var1.ignoreEmbedDescriptionCache = var4;
                                            var4 = _closure4_slot18;
                                            var1.enableSwipeActions = var4;
                                            var4 = _closure4_slot20;
                                            var1.shouldObscureSpoiler = var4;
                                            var4 = _closure4_slot21;
                                            var1.shouldDisableInteractiveComponents = var4;
                                            var1 = var2.bind(var3)(var1);
                                            var2 = _closure1_slot80;
                                            var3 = _closure1_slot1;
                                            var4 = _closure1_slot2;
                                            var1 = 87;
                                            var1 = var4[var1];
                                            var4 = undefined;
                                            var3 = var3.bind(var4)(var1);
                                            var1 = {};
                                            var8 = _closure4_slot3;
                                            var1.channel = var8;
                                            var1.messages = var7;
                                            var7 = _closure4_slot5;
                                            var1.uploads = var7;
                                            var7 = _closure4_slot7;
                                            var1.oldestUnreadMessageId = var7;
                                            var7 = _closure4_slot8;
                                            var1.replyingMessageId = var7;
                                            var7 = _closure4_slot15;
                                            var1.currentUserId = var7;
                                            var7 = var6.canAddNewReactions;
                                            var7 = var7.bind(var6)();
                                            var1.canAddNewReactions = var7;
                                            var7 = _closure4_slot17;
                                            var1.selectedSummary = var7;
                                            var6 = var6.chatManager;
                                            var1.chatManager = var6;
                                            var6 = _closure4_slot6;
                                            var1.roleStyle = var6;
                                            var6 = _closure4_slot0;
                                            var1.forceRender = var6;
                                            var6 = _closure4_slot1;
                                            var1.updateMessageIds = var6;
                                            var6 = _closure4_slot19;
                                            var1.isResourceChannel = var6;
                                            var5 = _closure4_slot22;
                                            var1.unloadableContentEntryMessageIds = var5;
                                            var1 = var3.bind(var4)(var1);
                                            var3 = var2.bind(var4)(var1);
                                            var2 = var3.bind(var4)();
                                            var1 = var2.done;
                                            if (var1) {
                                                _fun89268_ip = 416;
                                                continue _fun89268
                                            }
                                        case 358:
                                            var7 = var2.value;
                                            var1 = _closure3_slot0;
                                            var6 = var1.rowGenerator;
                                            var5 = var6.generate;
                                            var6 = var5.bind(var6)(var7);
                                            var5 = var1.chatManager;
                                            var1 = var5.createRow;
                                            var1 = var1.bind(var5)(var6);
                                            var5 = var3.bind(var4)();
                                            var1 = var5.done;
                                            var2 = var5;
                                            if (!var1) {
                                                _fun89268_ip = 358;
                                                continue _fun89268
                                            }
                                        case 416:
                                            var0 = _closure3_slot0;
                                            var1 = var0.chatManager;
                                            var0 = var1.createChangeset;
                                            var0 = var0.bind(var1)();
                                            return var0;
                                    }
                                };
                                var0 = var2.bind(var3)(var1);
                            case 326:
                                return var0;
                        }
                    };
                    var0.createRows = var1;
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
        var0 = 'componentDidMount';
        var4.key = var0;
        var0 = function() { // Original name: value, environment: var5
            _fun89269: for (var _fun89269_ip = 0;;) switch (_fun89269_ip) {
                case 0:
                    var4 = this;
                    var1 = var4._frozen;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 88;
                    var2 = var2[var0];
                    var0 = undefined;
                    var5 = var3.bind(var0)(var2);
                    var3 = var5.isScreenIndexFrozen;
                    var2 = var4.props;
                    var2 = var2.screenIndex;
                    var2 = var3.bind(var5)(var2);
                    var4._frozen = var2;
                    if (var1) {
                        _fun89269_ip = 97;
                        continue _fun89269
                    }
                case 65:
                    var1 = var4.startOrCancelChannelLatestMessagesLoad;
                    var1 = var1.bind(var4)();
                    var1 = var4.syncMessageDisplay;
                    var1 = var1.bind(var4)();
                    var1 = var4.recordTimings;
                    var1 = var1.bind(var4)();
                    _fun89269_ip = 121;
                    continue _fun89269;
                case 97:
                    var3 = var4.componentDidUpdate;
                    var2 = var4.prevPropsWhileFrozen;
                    var1 = var4.prevStateWhileFrozen;
                    var1 = var3.bind(var4)(var2, var1);
                case 121:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(8);
        var0[0] = var4;
        var4 = {};
        var6 = 'recordTimings';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            _fun89270: for (var _fun89270_ip = 0;;) switch (_fun89270_ip) {
                case 0:
                    var1 = this;
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 86;
                    var2 = var2[var0];
                    var0 = undefined;
                    var6 = var3.bind(var0)(var2);
                    var5 = var6.recordMessageRender;
                    var2 = var1.props;
                    var4 = var2.channelId;
                    var2 = var1.props;
                    var7 = var2.messages;
                    var3 = var7.map;
                    var2 = function(arg0) { // Environment: var2
                        var0 = arg0;
                        var0 = var0.id;
                        return var0;
                    };
                    var3 = var3.bind(var7)(var2);
                    var2 = var1.props;
                    var2 = var2.messages;
                    var2 = var2.hasFetched;
                    if (var2) {
                        _fun89270_ip = 137;
                        continue _fun89270
                    }
                case 94:
                    var7 = var1.props;
                    var7 = var7.messages;
                    var7 = var7.ready;
                    if (!var7) {
                        _fun89270_ip = 134;
                        continue _fun89270
                    }
                case 114:
                    var8 = var1.props;
                    var8 = var8.messages;
                    var8 = var8.cached;
                    var7 = !var8;
                case 134:
                    var2 = var7;
                case 137:
                    var1 = var1.props;
                    var1 = var1.messages;
                    var9 = var1.hasMoreAfter;
                    var13 = var6;
                    var12 = var4;
                    var11 = var3;
                    var10 = var2;
                    var1 = var13[var5](var12, var11, var10, var9, var8);
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'componentWillUnmount';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            _fun89272: for (var _fun89272_ip = 0;;) switch (_fun89272_ip) {
                case 0:
                    var1 = this;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var0 = 88;
                    var3 = var3[var0];
                    var0 = undefined;
                    var5 = var4.bind(var0)(var3);
                    var4 = var5.isScreenIndexFrozen;
                    var3 = var1.props;
                    var3 = var3.screenIndex;
                    var3 = var4.bind(var5)(var3);
                    var1._frozen = var3;
                    var3 = var1._frozen;
                    if (var3) {
                        _fun89272_ip = 143;
                        continue _fun89272
                    }
                case 65:
                    var4 = var1._chatUpdatesQueue;
                    var3 = var4.cleanup;
                    var3 = var3.bind(var4)();
                    var4 = var1.channelLatestMessageLoadingStatsManager;
                    var3 = var4.cancel;
                    var3 = var3.bind(var4)();
                    var3 = var1.clearRows;
                    var3 = var3.bind(var1)();
                    var5 = _closure1_slot19;
                    var2 = var1.props;
                    var4 = var2.channelId;
                    var2 = var1.props;
                    var3 = var2.screenIndex;
                    var2 = false;
                    var2 = var5.bind(var0)(var4, var3, var2);
                    return var0;
                case 143:
                    var0 = var1.props;
                    var1.prevPropsWhileFrozen = var0;
                    var0 = var1.state;
                    var1.prevStateWhileFrozen = var0;
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'shouldComponentUpdate';
        var4.key = var6;
        var6 = function(arg0, arg1) { // Original name: value, environment: var5
            _fun89273: for (var _fun89273_ip = 0;;) switch (_fun89273_ip) {
                case 0:
                    var2 = arg0;
                    var3 = this;
                    var1 = _closure1_slot1;
                    var0 = _closure1_slot2;
                    var7 = 89;
                    var0 = var0[var7];
                    var5 = undefined;
                    var6 = var1.bind(var5)(var0);
                    var1 = var3.state;
                    var0 = arg1;
                    var0 = var6.bind(var5)(var1, var0);
                    var0 = !var0;
                    if (var0) {
                        _fun89273_ip = 156;
                        continue _fun89273
                    }
                case 51:
                    var6 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var1 = var1[var7];
                    var9 = var6.bind(var5)(var1);
                    var13 = var3.props;
                    var6 = {};
                    var1 = false;
                    var6.shouldWarnLargeObjects = var1;
                    var11 = ['interactionStates'];
                    var14 = undefined;
                    var12 = var2;
                    var10 = var6;
                    var1 = var14[var9](var13, var12, var11, var10, var9);
                    var1 = !var1;
                    if (var1) {
                        _fun89273_ip = 153;
                        continue _fun89273
                    }
                case 110:
                    var6 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var4 = var4[var7];
                    var4 = var6.bind(var5)(var4);
                    var3 = var3.props;
                    var3 = var3.interactionStates;
                    var2 = var2.interactionStates;
                    var2 = var4.bind(var5)(var3, var2);
                    var1 = !var2;
                case 153:
                    var0 = var1;
                case 156:
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'componentDidUpdate';
        var4.key = var6;
        var6 = function(arg0, arg1) { // Original name: value, environment: var5
            _fun89274: for (var _fun89274_ip = 0;;) switch (_fun89274_ip) {
                case 0:
                    var2 = arg0;
                    var1 = this;
                    var _closure3_slot0 = var1;
                    var _closure3_slot1 = var2;
                    var3 = var1.props;
                    var3 = var3.currentUserId;
                    var6 = null;
                    if (!(var6 != var3)) {
                        _fun89274_ip = 3440;
                        continue _fun89274
                    }
                case 36:
                    var3 = var1.props;
                    var3 = var3.messages;
                    var4 = var2.messages;
                    var7 = var2.channelId;
                    var5 = var1.props;
                    var5 = var5.channelId;
                    if (!(var7 !== var5)) {
                        _fun89274_ip = 138;
                        continue _fun89274
                    }
                case 72:
                    var5 = var1.clearRows;
                    var5 = var5.bind(var1)();
                    var8 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var5 = 90;
                    var7 = var7[var5];
                    var5 = undefined;
                    var8 = var8.bind(var5)(var7);
                    var7 = var8.clearChannelDimensions;
                    var5 = var1.props;
                    var5 = var5.channelId;
                    var5 = var7.bind(var8)(var5);
                    var5 = var1.startOrCancelChannelLatestMessagesLoad;
                    var5 = var5.bind(var1)();
                case 138:
                    var5 = var2.isMessagesAckable;
                    var5 = !var5;
                    if (!var5) {
                        _fun89274_ip = 161;
                        continue _fun89274
                    }
                case 150:
                    var7 = var1.props;
                    var5 = var7.isMessagesAckable;
                case 161:
                    if (!var5) {
                        _fun89274_ip = 172;
                        continue _fun89274
                    }
                case 164:
                    var5 = false;
                    var1.hasHandledScroll = var5;
                case 172:
                    var5 = var1.shouldJumpToOriginalPost;
                    var5 = var5.bind(var1)();
                    if (!var5) {
                        _fun89274_ip = 234;
                        continue _fun89274
                    }
                case 185:
                    var7 = var1.scrollToTop;
                    var5 = false;
                    var5 = var7.bind(var1)(var5);
                    var4 = var4.jumpSequenceId;
                    var3 = var3.jumpSequenceId;
                    if (!(var4 === var3)) {
                        _fun89274_ip = 234;
                        continue _fun89274
                    }
                case 214:
                    var4 = var1.setState;
                    var3 = {};
                    var5 = true;
                    var3.hasJumpedToOriginalPost = var5;
                    var3 = var4.bind(var1)(var3);
                case 234:
                    var3 = var1.props;
                    var5 = var3.isMessagesReady;
                    if (!var5) {
                        _fun89274_ip = 262;
                        continue _fun89274
                    }
                case 248:
                    var3 = var1.props;
                    var3 = var3.isMessagesCached;
                    var5 = !var3;
                case 262:
                    if (!var5) {
                        _fun89274_ip = 271;
                        continue _fun89274
                    }
                case 265:
                    var5 = var2.isMessagesCached;
                case 271:
                    var4 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var3 = 91;
                    var3 = var7[var3];
                    var16 = undefined;
                    var7 = var4.bind(var16)(var3);
                    var4 = var1.props;
                    var3 = {};
                    var8 = var1.isAtBottom;
                    var3.isAtBottom = var8;
                    var9 = var1.chatManager;
                    var8 = var9.getPreviousMessages;
                    var8 = var8.bind(var9)();
                    var8 = var6 != var8;
                    var3.hasPreviousMessages = var8;
                    var4 = var7.bind(var16)(var4, var3, var2);
                    var10 = var4.scrollToMessageId;
                    var9 = var4.jumpTargetId;
                    var8 = var4.jumpType;
                    var3 = var4.minimizeScrolling;
                    var7 = var4.focusTargetId;
                    var4 = var4.shouldInitialScroll;
                    var12 = var2.theme;
                    var11 = var1.props;
                    var11 = var11.theme;
                    var12 = var12 !== var11;
                    if (var12) {
                        _fun89274_ip = 427;
                        continue _fun89274
                    }
                case 406:
                    var13 = var2.saturation;
                    var11 = var1.props;
                    var11 = var11.saturation;
                    var12 = var13 !== var11;
                case 427:
                    var13 = var12;
                    if (var13) {
                        _fun89274_ip = 454;
                        continue _fun89274
                    }
                case 433:
                    var15 = var2.inlineAttachmentMedia;
                    var11 = var1.props;
                    var11 = var11.inlineAttachmentMedia;
                    var13 = var15 !== var11;
                case 454:
                    if (var13) {
                        _fun89274_ip = 478;
                        continue _fun89274
                    }
                case 457:
                    var15 = var2.inlineEmbedMedia;
                    var11 = var1.props;
                    var11 = var11.inlineEmbedMedia;
                    var13 = var15 !== var11;
                case 478:
                    if (var13) {
                        _fun89274_ip = 502;
                        continue _fun89274
                    }
                case 481:
                    var15 = var2.renderEmbeds;
                    var11 = var1.props;
                    var11 = var11.renderEmbeds;
                    var13 = var15 !== var11;
                case 502:
                    if (var13) {
                        _fun89274_ip = 526;
                        continue _fun89274
                    }
                case 505:
                    var15 = var2.renderReactions;
                    var11 = var1.props;
                    var11 = var11.renderReactions;
                    var13 = var15 !== var11;
                case 526:
                    if (var13) {
                        _fun89274_ip = 550;
                        continue _fun89274
                    }
                case 529:
                    var15 = var2.animateEmoji;
                    var11 = var1.props;
                    var11 = var11.animateEmoji;
                    var13 = var15 !== var11;
                case 550:
                    if (var13) {
                        _fun89274_ip = 574;
                        continue _fun89274
                    }
                case 553:
                    var15 = var2.animateStickers;
                    var11 = var1.props;
                    var11 = var11.animateStickers;
                    var13 = var15 !== var11;
                case 574:
                    if (var13) {
                        _fun89274_ip = 598;
                        continue _fun89274
                    }
                case 577:
                    var15 = var2.gifAutoPlay;
                    var11 = var1.props;
                    var11 = var11.gifAutoPlay;
                    var13 = var15 !== var11;
                case 598:
                    if (var13) {
                        _fun89274_ip = 622;
                        continue _fun89274
                    }
                case 601:
                    var15 = var2.containerWidth;
                    var11 = var1.props;
                    var11 = var11.containerWidth;
                    var13 = var15 !== var11;
                case 622:
                    if (var13) {
                        _fun89274_ip = 646;
                        continue _fun89274
                    }
                case 625:
                    var15 = var2.guildSystemChannelFlags;
                    var11 = var1.props;
                    var11 = var11.guildSystemChannelFlags;
                    var13 = var15 !== var11;
                case 646:
                    if (var13) {
                        _fun89274_ip = 670;
                        continue _fun89274
                    }
                case 649:
                    var15 = var2.userSettingsLocale;
                    var11 = var1.props;
                    var11 = var11.userSettingsLocale;
                    var13 = var15 !== var11;
                case 670:
                    if (var13) {
                        _fun89274_ip = 694;
                        continue _fun89274
                    }
                case 673:
                    var15 = var2.roleStyle;
                    var11 = var1.props;
                    var11 = var11.roleStyle;
                    var13 = var15 !== var11;
                case 694:
                    if (var13) {
                        _fun89274_ip = 718;
                        continue _fun89274
                    }
                case 697:
                    var15 = var2.canSendMessages;
                    var11 = var1.props;
                    var11 = var11.canSendMessages;
                    var13 = var15 !== var11;
                case 718:
                    if (var13) {
                        _fun89274_ip = 742;
                        continue _fun89274
                    }
                case 721:
                    var15 = var2.showPushFeedback;
                    var11 = var1.props;
                    var11 = var11.showPushFeedback;
                    var13 = var15 !== var11;
                case 742:
                    if (var13) {
                        _fun89274_ip = 766;
                        continue _fun89274
                    }
                case 745:
                    var15 = var2.selectedSummary;
                    var11 = var1.props;
                    var11 = var11.selectedSummary;
                    var13 = var15 !== var11;
                case 766:
                    if (var13) {
                        _fun89274_ip = 790;
                        continue _fun89274
                    }
                case 769:
                    var15 = var2.shouldObscureSpoiler;
                    var11 = var1.props;
                    var11 = var11.shouldObscureSpoiler;
                    var13 = var15 !== var11;
                case 790:
                    if (var13) {
                        _fun89274_ip = 814;
                        continue _fun89274
                    }
                case 793:
                    var15 = var2.explicitMediaFalsePositiveInfo;
                    var11 = var1.props;
                    var11 = var11.explicitMediaFalsePositiveInfo;
                    var13 = var15 !== var11;
                case 814:
                    if (var13) {
                        _fun89274_ip = 838;
                        continue _fun89274
                    }
                case 817:
                    var15 = var2.isStaff;
                    var11 = var1.props;
                    var11 = var11.isStaff;
                    var13 = var15 !== var11;
                case 838:
                    if (var13) {
                        _fun89274_ip = 862;
                        continue _fun89274
                    }
                case 841:
                    var15 = var2.isAgeVerified;
                    var11 = var1.props;
                    var11 = var11.isAgeVerified;
                    var13 = var15 !== var11;
                case 862:
                    if (var13) {
                        _fun89274_ip = 906;
                        continue _fun89274
                    }
                case 865:
                    var11 = arg1;
                    var15 = var11.shouldForceRender;
                    var11 = var1.state;
                    var11 = var11.shouldForceRender;
                    var11 = var15 !== var11;
                    if (!var11) {
                        _fun89274_ip = 903;
                        continue _fun89274
                    }
                case 892:
                    var15 = var1.state;
                    var11 = var15.shouldForceRender;
                case 903:
                    var13 = var11;
                case 906:
                    if (var13) {
                        _fun89274_ip = 930;
                        continue _fun89274
                    }
                case 909:
                    var15 = var2.displayNameStylesEnabled;
                    var11 = var1.props;
                    var11 = var11.displayNameStylesEnabled;
                    var13 = var15 !== var11;
                case 930:
                    var15 = var2.resolvingGiftCodes;
                    var11 = var1.props;
                    var11 = var11.resolvingGiftCodes;
                    var42 = var15 !== var11;
                    if (var42) {
                        _fun89274_ip = 975;
                        continue _fun89274
                    }
                case 954:
                    var15 = var2.resolvedGiftCodes;
                    var11 = var1.props;
                    var11 = var11.resolvedGiftCodes;
                    var42 = var15 !== var11;
                case 975:
                    if (var42) {
                        _fun89274_ip = 999;
                        continue _fun89274
                    }
                case 978:
                    var15 = var2.acceptingGiftCodes;
                    var11 = var1.props;
                    var11 = var11.acceptingGiftCodes;
                    var42 = var15 !== var11;
                case 999:
                    var _closure3_slot2 = var42;
                    var41 = var2.uploads;
                    var11 = var1.props;
                    var40 = var11.uploads;
                    var15 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var17 = 89;
                    var11 = var11[var17];
                    var18 = var15.bind(var16)(var11);
                    var15 = var2.interactionStates;
                    var11 = var1.props;
                    var11 = var11.interactionStates;
                    var11 = var18.bind(var16)(var15, var11);
                    var31 = !var11;
                    var _closure3_slot3 = var31;
                    var15 = var2.channelPolls;
                    var11 = var1.props;
                    var11 = var11.channelPolls;
                    var28 = var15 !== var11;
                    var _closure3_slot4 = var28;
                    var15 = var2.messageReferencePolls;
                    var11 = var1.props;
                    var11 = var11.messageReferencePolls;
                    var27 = var15 !== var11;
                    var _closure3_slot5 = var27;
                    var15 = var2.interactionComponentStatesVersion;
                    var11 = var1.props;
                    var11 = var11.interactionComponentStatesVersion;
                    var30 = var15 !== var11;
                    var _closure3_slot6 = var30;
                    var15 = var2.shouldDisableInteractiveComponents;
                    var11 = var1.props;
                    var11 = var11.shouldDisableInteractiveComponents;
                    var11 = var15 !== var11;
                    var _closure3_slot7 = var11;
                    var15 = var2.communicationDisabledVersion;
                    var11 = var1.props;
                    var11 = var11.communicationDisabledVersion;
                    var37 = var15 !== var11;
                    var _closure3_slot8 = var37;
                    var15 = var2.messageAuthorMembers;
                    var11 = var1.props;
                    var11 = var11.messageAuthorMembers;
                    var36 = var15 !== var11;
                    var _closure3_slot9 = var36;
                    var15 = var2.failedMessagesVersion;
                    var11 = var1.props;
                    var11 = var11.failedMessagesVersion;
                    var35 = var15 !== var11;
                    var _closure3_slot10 = var35;
                    var15 = var2.renderCommunicationDisabled;
                    var11 = var1.props;
                    var11 = var11.renderCommunicationDisabled;
                    var32 = var15 !== var11;
                    var _closure3_slot11 = var32;
                    var34 = var2.forwardGuildsVersion;
                    var11 = var1.props;
                    var33 = var11.forwardGuildsVersion;
                    var11 = var1.props;
                    var15 = var11.channel;
                    var11 = var15.isForumPost;
                    var29 = var11.bind(var15)();
                    if (!var29) {
                        _fun89274_ip = 1331;
                        continue _fun89274
                    }
                case 1310:
                    var15 = var2.isFollowingForumPost;
                    var11 = var1.props;
                    var11 = var11.isFollowingForumPost;
                    var29 = var15 !== var11;
                case 1331:
                    var _closure3_slot12 = var29;
                    var15 = var2.showMediaPostSharePrompt;
                    var11 = var1.props;
                    var11 = var11.showMediaPostSharePrompt;
                    var26 = var15 !== var11;
                    var _closure3_slot13 = var26;
                    var15 = var2.unloadedContentEntryMessageIds;
                    var11 = var1.props;
                    var11 = var11.unloadedContentEntryMessageIds;
                    var25 = var15 !== var11;
                    var _closure3_slot14 = var25;
                    var15 = var2.invalidApplicationIds;
                    var11 = var1.props;
                    var11 = var11.invalidApplicationIds;
                    var11 = var15 !== var11;
                    var _closure3_slot15 = var11;
                    var18 = var2.activityInstanceIds;
                    var15 = var1.props;
                    var15 = var15.activityInstanceIds;
                    var39 = var18 !== var15;
                    if (var39) {
                        _fun89274_ip = 1455;
                        continue _fun89274
                    }
                case 1434:
                    var18 = var2.activityParticipants;
                    var15 = var1.props;
                    var15 = var15.activityParticipants;
                    var39 = var18 !== var15;
                case 1455:
                    if (var39) {
                        _fun89274_ip = 1479;
                        continue _fun89274
                    }
                case 1458:
                    var18 = var2.applicationAssetFetchingIds;
                    var15 = var1.props;
                    var15 = var15.applicationAssetFetchingIds;
                    var39 = var18 !== var15;
                case 1479:
                    if (var39) {
                        _fun89274_ip = 1503;
                        continue _fun89274
                    }
                case 1482:
                    var18 = var2.activityInstancePresenceDetails;
                    var15 = var1.props;
                    var15 = var15.activityInstancePresenceDetails;
                    var39 = var18 !== var15;
                case 1503:
                    if (var39) {
                        _fun89274_ip = 1527;
                        continue _fun89274
                    }
                case 1506:
                    var18 = var2.messagesWithActivitiesLaunching;
                    var15 = var1.props;
                    var15 = var15.messagesWithActivitiesLaunching;
                    var39 = var18 !== var15;
                case 1527:
                    if (var39) {
                        _fun89274_ip = 1533;
                        continue _fun89274
                    }
                case 1530:
                    var39 = var11;
                case 1533:
                    var _closure3_slot16 = var39;
                    var15 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var18 = var11[var17];
                    var21 = var15.bind(var16)(var18);
                    var20 = var21.areArraysShallowEqual;
                    var19 = var2.activityInviteMessageIds;
                    var18 = var1.props;
                    var18 = var18.activityInviteMessageIds;
                    var18 = var20.bind(var21)(var19, var18);
                    var24 = !var18;
                    var _closure3_slot17 = var24;
                    var11 = var11[var17];
                    var18 = var15.bind(var16)(var11);
                    var17 = var18.areArraysShallowEqual;
                    var15 = var2.resolvedReferralTrialOfferIds;
                    var11 = var1.props;
                    var11 = var11.resolvedReferralTrialOfferIds;
                    var11 = var17.bind(var18)(var15, var11);
                    var23 = !var11;
                    if (var23) {
                        _fun89274_ip = 1655;
                        continue _fun89274
                    }
                case 1634:
                    var15 = var2.referralTrialOfferId;
                    var11 = var1.props;
                    var11 = var11.referralTrialOfferId;
                    var23 = var15 !== var11;
                case 1655:
                    if (var23) {
                        _fun89274_ip = 1679;
                        continue _fun89274
                    }
                case 1658:
                    var15 = var2.isPremiumTier2User;
                    var11 = var1.props;
                    var11 = var11.isPremiumTier2User;
                    var23 = var15 !== var11;
                case 1679:
                    var _closure3_slot18 = var23;
                    var15 = var2.guildInviteColorsFetched;
                    var11 = var1.props;
                    var11 = var11.guildInviteColorsFetched;
                    var22 = var15 !== var11;
                    var _closure3_slot19 = var22;
                    var15 = var2.guildEmojis;
                    var11 = var1.props;
                    var11 = var11.guildEmojis;
                    var21 = var15 !== var11;
                    var _closure3_slot20 = var21;
                    var15 = var2.selfActivities;
                    var11 = var1.props;
                    var11 = var11.selfActivities;
                    var20 = var15 !== var11;
                    var _closure3_slot21 = var20;
                    var15 = var2.currentClientVoiceChannelId;
                    var11 = var1.props;
                    var11 = var11.currentClientVoiceChannelId;
                    var38 = var15 !== var11;
                    var _closure3_slot22 = var38;
                    var15 = var2.voiceStatePrivateChannelId;
                    var11 = var1.props;
                    var11 = var11.voiceStatePrivateChannelId;
                    var15 = var15 !== var11;
                    var17 = var2.activityLaunchJoinStates;
                    var11 = var1.props;
                    var11 = var11.activityLaunchJoinStates;
                    var19 = var17 !== var11;
                    var _closure3_slot23 = var19;
                    var18 = var2.displayNameStylesEnabled;
                    var11 = var1.props;
                    var17 = var11.displayNameStylesEnabled;
                    var11 = var2.currentUserDisplayNameStyles;
                    var44 = var6 == var11;
                    var43 = undefined;
                    if (var44) {
                        _fun89274_ip = 1867;
                        continue _fun89274
                    }
                case 1861:
                    var43 = var11.fontId;
                case 1867:
                    var11 = var1.props;
                    var44 = var11.currentUserDisplayNameStyles;
                    var45 = var6 == var44;
                    var11 = undefined;
                    if (var45) {
                        _fun89274_ip = 1893;
                        continue _fun89274
                    }
                case 1887:
                    var11 = var44.fontId;
                case 1893:
                    var11 = var43 !== var11;
                    var _closure3_slot24 = var11;
                    if (var13) {
                        _fun89274_ip = 2809;
                        continue _fun89274
                    }
                case 1907:
                    if (var42) {
                        _fun89274_ip = 2809;
                        continue _fun89274
                    }
                case 1913:
                    if (!(var41 === var40)) {
                        _fun89274_ip = 2809;
                        continue _fun89274
                    }
                case 1920:
                    if (var39) {
                        _fun89274_ip = 2809;
                        continue _fun89274
                    }
                case 1926:
                    var40 = var2.messages;
                    var39 = var1.props;
                    var39 = var39.messages;
                    if (!(var40 === var39)) {
                        _fun89274_ip = 2809;
                        continue _fun89274
                    }
                case 1950:
                    var40 = var2.editingMessageId;
                    var39 = var1.props;
                    var39 = var39.editingMessageId;
                    if (!(var40 === var39)) {
                        _fun89274_ip = 2809;
                        continue _fun89274
                    }
                case 1974:
                    var40 = var2.replyingMessageId;
                    var39 = var1.props;
                    var39 = var39.replyingMessageId;
                    if (!(var40 === var39)) {
                        _fun89274_ip = 2809;
                        continue _fun89274
                    }
                case 1998:
                    if (var15) {
                        _fun89274_ip = 2809;
                        continue _fun89274
                    }
                case 2004:
                    var40 = var2.messageAuthorActivities;
                    var39 = var1.props;
                    var39 = var39.messageAuthorActivities;
                    if (!(var40 === var39)) {
                        _fun89274_ip = 2809;
                        continue _fun89274
                    }
                case 2028:
                    var40 = var2.oldestUnreadMessageId;
                    var39 = var1.props;
                    var39 = var39.oldestUnreadMessageId;
                    if (!(var40 === var39)) {
                        _fun89274_ip = 2809;
                        continue _fun89274
                    }
                case 2052:
                    var40 = var2.invites;
                    var39 = var1.props;
                    var39 = var39.invites;
                    if (!(var40 === var39)) {
                        _fun89274_ip = 2809;
                        continue _fun89274
                    }
                case 2076:
                    var40 = var2.appDirectoryEmbedApplications;
                    var39 = var1.props;
                    var39 = var39.appDirectoryEmbedApplications;
                    if (!(var40 === var39)) {
                        _fun89274_ip = 2809;
                        continue _fun89274
                    }
                case 2100:
                    var40 = var2.invalidAppDirectoryEmbedApplicationIds;
                    var39 = var1.props;
                    var39 = var39.invalidAppDirectoryEmbedApplicationIds;
                    if (!(var40 === var39)) {
                        _fun89274_ip = 2809;
                        continue _fun89274
                    }
                case 2124:
                    var40 = var2.appDirectoryEmbedApplicationFetchStates;
                    var39 = var1.props;
                    var39 = var39.appDirectoryEmbedApplicationFetchStates;
                    if (!(var40 === var39)) {
                        _fun89274_ip = 2809;
                        continue _fun89274
                    }
                case 2148:
                    var40 = var2.guildTemplates;
                    var39 = var1.props;
                    var39 = var39.guildTemplates;
                    if (!(var40 === var39)) {
                        _fun89274_ip = 2809;
                        continue _fun89274
                    }
                case 2172:
                    var40 = var2.buildOverrides;
                    var39 = var1.props;
                    var39 = var39.buildOverrides;
                    if (!(var40 === var39)) {
                        _fun89274_ip = 2809;
                        continue _fun89274
                    }
                case 2196:
                    var40 = var2.experimentEmbeds;
                    var39 = var1.props;
                    var39 = var39.experimentEmbeds;
                    if (!(var40 === var39)) {
                        _fun89274_ip = 2809;
                        continue _fun89274
                    }
                case 2220:
                    var40 = var2.quests;
                    var39 = var1.props;
                    var39 = var39.quests;
                    if (!(var40 === var39)) {
                        _fun89274_ip = 2809;
                        continue _fun89274
                    }
                case 2244:
                    var40 = var2.isFetchingCurrentQuests;
                    var39 = var1.props;
                    var39 = var39.isFetchingCurrentQuests;
                    if (!(var40 === var39)) {
                        _fun89274_ip = 2809;
                        continue _fun89274
                    }
                case 2268:
                    var40 = var2.participantsLength;
                    var39 = var1.props;
                    var39 = var39.participantsLength;
                    if (!(var40 === var39)) {
                        _fun89274_ip = 2809;
                        continue _fun89274
                    }
                case 2292:
                    var40 = var2.isMessagesReady;
                    var39 = var1.props;
                    var39 = var39.isMessagesReady;
                    if (!(var40 === var39)) {
                        _fun89274_ip = 2809;
                        continue _fun89274
                    }
                case 2316:
                    var40 = var2.channelThreadsVersion;
                    var39 = var1.props;
                    var39 = var39.channelThreadsVersion;
                    if (!(var40 === var39)) {
                        _fun89274_ip = 2809;
                        continue _fun89274
                    }
                case 2340:
                    var40 = var2.rsvpVersion;
                    var39 = var1.props;
                    var39 = var39.rsvpVersion;
                    if (!(var40 === var39)) {
                        _fun89274_ip = 2809;
                        continue _fun89274
                    }
                case 2364:
                    var40 = var2.repliedIds;
                    var39 = var1.props;
                    var39 = var39.repliedIds;
                    if (!(var40 === var39)) {
                        _fun89274_ip = 2809;
                        continue _fun89274
                    }
                case 2388:
                    var40 = var2.hasLoadedExperiments;
                    var39 = var1.props;
                    var39 = var39.hasLoadedExperiments;
                    if (!(var40 === var39)) {
                        _fun89274_ip = 2809;
                        continue _fun89274
                    }
                case 2412:
                    var40 = var2.isMessageRequest;
                    var39 = var1.props;
                    var39 = var39.isMessageRequest;
                    if (!(var40 === var39)) {
                        _fun89274_ip = 2809;
                        continue _fun89274
                    }
                case 2436:
                    var40 = var2.isSpamMessageRequest;
                    var39 = var1.props;
                    var39 = var39.isSpamMessageRequest;
                    if (!(var40 === var39)) {
                        _fun89274_ip = 2809;
                        continue _fun89274
                    }
                case 2460:
                    var40 = var2.currentUserCommunicationDisabled;
                    var39 = var1.props;
                    var39 = var39.currentUserCommunicationDisabled;
                    if (!(var40 === var39)) {
                        _fun89274_ip = 2809;
                        continue _fun89274
                    }
                case 2484:
                    var40 = var2.userSettingsLocale;
                    var39 = var1.props;
                    var39 = var39.userSettingsLocale;
                    if (!(var40 === var39)) {
                        _fun89274_ip = 2809;
                        continue _fun89274
                    }
                case 2508:
                    var40 = var2.selectedSummary;
                    var39 = var1.props;
                    var39 = var39.selectedSummary;
                    if (!(var40 === var39)) {
                        _fun89274_ip = 2809;
                        continue _fun89274
                    }
                case 2532:
                    var40 = var2.showPushFeedback;
                    var39 = var1.props;
                    var39 = var39.showPushFeedback;
                    if (!(var40 === var39)) {
                        _fun89274_ip = 2809;
                        continue _fun89274
                    }
                case 2556:
                    var40 = var2.cacheStoreLoaded;
                    var39 = var1.props;
                    var39 = var39.cacheStoreLoaded;
                    if (!(var40 === var39)) {
                        _fun89274_ip = 2809;
                        continue _fun89274
                    }
                case 2580:
                    if (var38) {
                        _fun89274_ip = 2809;
                        continue _fun89274
                    }
                case 2586:
                    if (var37) {
                        _fun89274_ip = 2809;
                        continue _fun89274
                    }
                case 2592:
                    if (var36) {
                        _fun89274_ip = 2809;
                        continue _fun89274
                    }
                case 2598:
                    if (var35) {
                        _fun89274_ip = 2809;
                        continue _fun89274
                    }
                case 2604:
                    if (!(var34 === var33)) {
                        _fun89274_ip = 2809;
                        continue _fun89274
                    }
                case 2611:
                    if (var32) {
                        _fun89274_ip = 2809;
                        continue _fun89274
                    }
                case 2617:
                    if (var31) {
                        _fun89274_ip = 2809;
                        continue _fun89274
                    }
                case 2623:
                    if (var30) {
                        _fun89274_ip = 2809;
                        continue _fun89274
                    }
                case 2629:
                    if (var29) {
                        _fun89274_ip = 2809;
                        continue _fun89274
                    }
                case 2635:
                    if (!(var6 == var9)) {
                        _fun89274_ip = 2809;
                        continue _fun89274
                    }
                case 2642:
                    if (!(var6 == var7)) {
                        _fun89274_ip = 2809;
                        continue _fun89274
                    }
                case 2649:
                    var30 = var2.androidKeyboardHeight;
                    var29 = var1.props;
                    var29 = var29.androidKeyboardHeight;
                    if (!(var30 === var29)) {
                        _fun89274_ip = 2809;
                        continue _fun89274
                    }
                case 2673:
                    var30 = var2.mediaPostPreviewEmbeds;
                    var29 = var1.props;
                    var29 = var29.mediaPostPreviewEmbeds;
                    if (!(var30 === var29)) {
                        _fun89274_ip = 2809;
                        continue _fun89274
                    }
                case 2694:
                    var30 = var2.shouldObscureSpoiler;
                    var29 = var1.props;
                    var29 = var29.shouldObscureSpoiler;
                    if (!(var30 === var29)) {
                        _fun89274_ip = 2809;
                        continue _fun89274
                    }
                case 2715:
                    var30 = var2.shouldDisableInteractiveComponents;
                    var29 = var1.props;
                    var29 = var29.shouldDisableInteractiveComponents;
                    if (!(var30 === var29)) {
                        _fun89274_ip = 2809;
                        continue _fun89274
                    }
                case 2736:
                    if (var28) {
                        _fun89274_ip = 2809;
                        continue _fun89274
                    }
                case 2739:
                    if (var27) {
                        _fun89274_ip = 2809;
                        continue _fun89274
                    }
                case 2742:
                    if (var26) {
                        _fun89274_ip = 2809;
                        continue _fun89274
                    }
                case 2745:
                    var27 = var2.threadStartingReferenceMessage;
                    var26 = var1.props;
                    var26 = var26.threadStartingReferenceMessage;
                    if (!(var27 === var26)) {
                        _fun89274_ip = 2809;
                        continue _fun89274
                    }
                case 2766:
                    if (var25) {
                        _fun89274_ip = 2809;
                        continue _fun89274
                    }
                case 2769:
                    if (var24) {
                        _fun89274_ip = 2809;
                        continue _fun89274
                    }
                case 2772:
                    if (var23) {
                        _fun89274_ip = 2809;
                        continue _fun89274
                    }
                case 2775:
                    if (var22) {
                        _fun89274_ip = 2809;
                        continue _fun89274
                    }
                case 2778:
                    if (var21) {
                        _fun89274_ip = 2809;
                        continue _fun89274
                    }
                case 2781:
                    if (var20) {
                        _fun89274_ip = 2809;
                        continue _fun89274
                    }
                case 2784:
                    if (var19) {
                        _fun89274_ip = 2809;
                        continue _fun89274
                    }
                case 2787:
                    if (!(var18 === var17)) {
                        _fun89274_ip = 2809;
                        continue _fun89274
                    }
                case 2791:
                    if (var11) {
                        _fun89274_ip = 2809;
                        continue _fun89274
                    }
                case 2794:
                    var11 = var1.recordTimings;
                    var11 = var11.bind(var1)();
                    _fun89274_ip = 3440;
                    continue _fun89274;
                case 2809:
                    var11 = global;
                    var11 = var11.Set;
                    var17 = var11.prototype;
                    var17 = Object.create(var17, {
                        constructor: {
                            value: var11
                        }
                    });
                    var49 = var17;
                    var11 = new var49[var11](var48);
                    var11 = var11 instanceof Object ? var11 : var17;
                    var _closure3_slot25 = var11;
                    var18 = var2.editingMessageId;
                    var17 = var1.props;
                    var17 = var17.editingMessageId;
                    if (!(var18 !== var17)) {
                        _fun89274_ip = 2924;
                        continue _fun89274
                    }
                case 2862:
                    var17 = var1.props;
                    var17 = var17.editingMessageId;
                    if (!(var6 != var17)) {
                        _fun89274_ip = 2898;
                        continue _fun89274
                    }
                case 2877:
                    var18 = var11.add;
                    var17 = var1.props;
                    var17 = var17.editingMessageId;
                    var17 = var18.bind(var11)(var17);
                case 2898:
                    var17 = var2.editingMessageId;
                    if (!(var6 != var17)) {
                        _fun89274_ip = 2924;
                        continue _fun89274
                    }
                case 2908:
                    var18 = var11.add;
                    var17 = var2.editingMessageId;
                    var17 = var18.bind(var11)(var17);
                case 2924:
                    var18 = var2.replyingMessageId;
                    var17 = var1.props;
                    var17 = var17.replyingMessageId;
                    if (!(var18 !== var17)) {
                        _fun89274_ip = 3007;
                        continue _fun89274
                    }
                case 2945:
                    var17 = var1.props;
                    var17 = var17.replyingMessageId;
                    if (!(var6 != var17)) {
                        _fun89274_ip = 2981;
                        continue _fun89274
                    }
                case 2960:
                    var18 = var11.add;
                    var17 = var1.props;
                    var17 = var17.replyingMessageId;
                    var17 = var18.bind(var11)(var17);
                case 2981:
                    var17 = var2.replyingMessageId;
                    if (!(var6 != var17)) {
                        _fun89274_ip = 3007;
                        continue _fun89274
                    }
                case 2991:
                    var18 = var11.add;
                    var17 = var2.replyingMessageId;
                    var17 = var18.bind(var11)(var17);
                case 3007:
                    var18 = var2.isMessagesReady;
                    var17 = var1.props;
                    var17 = var17.isMessagesReady;
                    if (!(var18 === var17)) {
                        _fun89274_ip = 3073;
                        continue _fun89274
                    }
                case 3028:
                    var18 = var2.isCallActive;
                    var17 = var1.props;
                    var17 = var17.isCallActive;
                    if (!(var18 === var17)) {
                        _fun89274_ip = 3073;
                        continue _fun89274
                    }
                case 3049:
                    if (var15) {
                        _fun89274_ip = 3073;
                        continue _fun89274
                    }
                case 3052:
                    var17 = var2.participantsLength;
                    var15 = var1.props;
                    var15 = var15.participantsLength;
                    if (!(var17 !== var15)) {
                        _fun89274_ip = 3161;
                        continue _fun89274
                    }
                case 3073:
                    var15 = _closure1_slot1;
                    var17 = _closure1_slot2;
                    var14 = 68;
                    var14 = var17[var14];
                    var17 = var15.bind(var16)(var14);
                    var16 = var17.find;
                    var14 = var1.props;
                    var15 = var14.messages;
                    var14 = var15.toArray;
                    var15 = var14.bind(var15)();
                    var14 = var15.reverse;
                    var15 = var14.bind(var15)();
                    var14 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var1 = var0.type;
                        var0 = _closure1_slot71;
                        var0 = var0.CALL;
                        var0 = var1 === var0;
                        return var0;
                    };
                    var14 = var16.bind(var17)(var15, var14);
                    if (!(var6 != var14)) {
                        _fun89274_ip = 3161;
                        continue _fun89274
                    }
                case 3146:
                    var15 = var11.add;
                    var14 = var14.id;
                    var14 = var15.bind(var11)(var14);
                case 3161:
                    var15 = var2.channelThreadsVersion;
                    var14 = var1.props;
                    var14 = var14.channelThreadsVersion;
                    var14 = var15 !== var14;
                    var _closure3_slot26 = var14;
                    var15 = var2.rsvpVersion;
                    var14 = var1.props;
                    var14 = var14.rsvpVersion;
                    var14 = var15 !== var14;
                    var _closure3_slot27 = var14;
                    var15 = var2.repliedIds;
                    var14 = var1.props;
                    var14 = var14.repliedIds;
                    var14 = var15 !== var14;
                    var _closure3_slot28 = var14;
                    var15 = var2.hasLoadedExperiments;
                    var14 = var1.props;
                    var14 = var14.hasLoadedExperiments;
                    var14 = var15 !== var14;
                    var _closure3_slot29 = var14;
                    var14 = var2.communicationDisabledVersion;
                    var15 = var6 != var14;
                    var6 = -1;
                    if (!var15) {
                        _fun89274_ip = 3283;
                        continue _fun89274
                    }
                case 3280:
                    var6 = var14;
                case 3283:
                    var _closure3_slot30 = var6;
                    var2 = var2.cacheStoreLoaded;
                    var6 = !var2;
                    if (!var6) {
                        _fun89274_ip = 3310;
                        continue _fun89274
                    }
                case 3299:
                    var2 = var1.props;
                    var6 = var2.cacheStoreLoaded;
                case 3310:
                    var _closure3_slot31 = var6;
                    var2 = var1.props;
                    var14 = var2.messages;
                    var2 = var14.forEach;
                    var0 = function(arg0) { // Environment: var0
                        _fun89276: for (var _fun89276_ip = 0;;) switch (_fun89276_ip) {
                            case 0:
                                var0 = arg0;
                                var2 = _closure3_slot22;
                                if (!var2) {
                                    _fun89276_ip = 55;
                                    continue _fun89276
                                }
                            case 13:
                                var2 = var0.activity;
                                var3 = null;
                                var4 = var3 == var2;
                                var3 = undefined;
                                if (var4) {
                                    _fun89276_ip = 35;
                                    continue _fun89276
                                }
                            case 30:
                                var3 = var2.type;
                            case 35:
                                var2 = _closure1_slot65;
                                var2 = var2.STREAM_REQUEST;
                                if (!(var3 !== var2)) {
                                    _fun89276_ip = 2101;
                                    continue _fun89276
                                }
                            case 55:
                                var2 = _closure3_slot29;
                                if (!var2) {
                                    _fun89276_ip = 87;
                                    continue _fun89276
                                }
                            case 62:
                                var3 = var0.type;
                                var2 = _closure1_slot71;
                                var2 = var2.USER_JOIN;
                                if (!(var3 !== var2)) {
                                    _fun89276_ip = 2080;
                                    continue _fun89276
                                }
                            case 87:
                                var2 = _closure3_slot28;
                                if (!var2) {
                                    _fun89276_ip = 165;
                                    continue _fun89276
                                }
                            case 94:
                                var3 = var0.type;
                                var2 = _closure1_slot71;
                                var2 = var2.REPLY;
                                if (!(var3 === var2)) {
                                    _fun89276_ip = 165;
                                    continue _fun89276
                                }
                            case 116:
                                var2 = var0.messageReference;
                                var3 = null;
                                if (!(var3 != var2)) {
                                    _fun89276_ip = 165;
                                    continue _fun89276
                                }
                            case 128:
                                var3 = _closure3_slot0;
                                var3 = var3.props;
                                var4 = var3.repliedIds;
                                var3 = var4.has;
                                var2 = var2.message_id;
                                var2 = var3.bind(var4)(var2);
                                if (var2) {
                                    _fun89276_ip = 2057;
                                    continue _fun89276
                                }
                            case 165:
                                var2 = _closure3_slot26;
                                if (!var2) {
                                    _fun89276_ip = 202;
                                    continue _fun89276
                                }
                            case 172:
                                var3 = var0.hasFlag;
                                var2 = _closure1_slot70;
                                var2 = var2.HAS_THREAD;
                                var2 = var3.bind(var0)(var2);
                                if (var2) {
                                    _fun89276_ip = 2036;
                                    continue _fun89276
                                }
                            case 202:
                                var2 = _closure3_slot27;
                                if (!var2) {
                                    _fun89276_ip = 229;
                                    continue _fun89276
                                }
                            case 209:
                                var2 = var0.codedLinks;
                                var3 = var2.length;
                                var2 = 0;
                                if (!(!(var3 > var2))) {
                                    _fun89276_ip = 2015;
                                    continue _fun89276
                                }
                            case 229:
                                var2 = _closure3_slot20;
                                if (!var2) {
                                    _fun89276_ip = 261;
                                    continue _fun89276
                                }
                            case 236:
                                var3 = var0.type;
                                var2 = _closure1_slot71;
                                var2 = var2.EMOJI_ADDED;
                                if (!(var3 !== var2)) {
                                    _fun89276_ip = 1994;
                                    continue _fun89276
                                }
                            case 261:
                                var2 = _closure3_slot11;
                                if (var2) {
                                    _fun89276_ip = 1970;
                                    continue _fun89276
                                }
                            case 271:
                                var2 = _closure3_slot8;
                                if (!var2) {
                                    _fun89276_ip = 349;
                                    continue _fun89276
                                }
                            case 278:
                                var2 = _closure3_slot0;
                                var2 = var2.props;
                                var3 = var2.guildId;
                                var2 = null;
                                if (!(var2 != var3)) {
                                    _fun89276_ip = 349;
                                    continue _fun89276
                                }
                            case 298:
                                var5 = _closure1_slot47;
                                var2 = _closure3_slot0;
                                var2 = var2.props;
                                var4 = var2.guildId;
                                var2 = var0.author;
                                var3 = var2.id;
                                var2 = undefined;
                                var3 = var5.bind(var2)(var4, var3);
                                var2 = _closure3_slot30;
                                if (!(!(var3 > var2))) {
                                    _fun89276_ip = 1970;
                                    continue _fun89276
                                }
                            case 349:
                                var2 = _closure3_slot9;
                                if (!var2) {
                                    _fun89276_ip = 403;
                                    continue _fun89276
                                }
                            case 356:
                                var2 = _closure3_slot0;
                                var2 = var2.props;
                                var2 = var2.guildId;
                                var3 = null;
                                if (!(var3 != var2)) {
                                    _fun89276_ip = 403;
                                    continue _fun89276
                                }
                            case 376:
                                var4 = var0.author;
                                var5 = var3 == var4;
                                var2 = undefined;
                                if (var5) {
                                    _fun89276_ip = 396;
                                    continue _fun89276
                                }
                            case 391:
                                var2 = var4.id;
                            case 396:
                                if (!(var3 == var2)) {
                                    _fun89276_ip = 1884;
                                    continue _fun89276
                                }
                            case 403:
                                var2 = _closure3_slot10;
                                if (!var2) {
                                    _fun89276_ip = 443;
                                    continue _fun89276
                                }
                            case 410:
                                var2 = var0.author;
                                var3 = var2.id;
                                var2 = _closure3_slot0;
                                var2 = var2.props;
                                var2 = var2.currentUserId;
                                if (!(var3 !== var2)) {
                                    _fun89276_ip = 1860;
                                    continue _fun89276
                                }
                            case 443:
                                var2 = _closure3_slot3;
                                if (!var2) {
                                    _fun89276_ip = 500;
                                    continue _fun89276
                                }
                            case 450:
                                var2 = _closure3_slot1;
                                var3 = var2.interactionStates;
                                var2 = var0.id;
                                var3 = var3[var2];
                                var2 = _closure3_slot0;
                                var2 = var2.props;
                                var4 = var2.interactionStates;
                                var2 = var0.id;
                                var2 = var4[var2];
                                if (!(var3 === var2)) {
                                    _fun89276_ip = 1836;
                                    continue _fun89276
                                }
                            case 500:
                                var2 = _closure3_slot6;
                                if (!var2) {
                                    _fun89276_ip = 569;
                                    continue _fun89276
                                }
                            case 507:
                                var2 = _closure3_slot1;
                                var4 = var2.interactionComponentStates;
                                var3 = var4.get;
                                var2 = var0.id;
                                var3 = var3.bind(var4)(var2);
                                var2 = _closure3_slot0;
                                var2 = var2.props;
                                var5 = var2.interactionComponentStates;
                                var4 = var5.get;
                                var2 = var0.id;
                                var2 = var4.bind(var5)(var2);
                                if (!(var3 === var2)) {
                                    _fun89276_ip = 1812;
                                    continue _fun89276
                                }
                            case 569:
                                var2 = _closure3_slot7;
                                if (!var2) {
                                    _fun89276_ip = 596;
                                    continue _fun89276
                                }
                            case 576:
                                var2 = var0.components;
                                var3 = var2.length;
                                var2 = 0;
                                if (!(var2 === var3)) {
                                    _fun89276_ip = 1788;
                                    continue _fun89276
                                }
                            case 596:
                                var2 = _closure3_slot4;
                                if (!var2) {
                                    _fun89276_ip = 653;
                                    continue _fun89276
                                }
                            case 603:
                                var2 = _closure3_slot1;
                                var3 = var2.channelPolls;
                                var2 = var0.id;
                                var3 = var3[var2];
                                var2 = _closure3_slot0;
                                var2 = var2.props;
                                var4 = var2.channelPolls;
                                var2 = var0.id;
                                var2 = var4[var2];
                                if (!(var3 === var2)) {
                                    _fun89276_ip = 1764;
                                    continue _fun89276
                                }
                            case 653:
                                var2 = _closure3_slot5;
                                if (!var2) {
                                    _fun89276_ip = 727;
                                    continue _fun89276
                                }
                            case 660:
                                var3 = var0.messageReference;
                                var2 = null;
                                var5 = var2 == var3;
                                var4 = undefined;
                                if (var5) {
                                    _fun89276_ip = 683;
                                    continue _fun89276
                                }
                            case 677:
                                var4 = var3.message_id;
                            case 683:
                                if (!(var2 != var4)) {
                                    _fun89276_ip = 727;
                                    continue _fun89276
                                }
                            case 687:
                                var2 = _closure3_slot1;
                                var2 = var2.messageReferencePolls;
                                var3 = var2[var4];
                                var2 = _closure3_slot0;
                                var2 = var2.props;
                                var2 = var2.messageReferencePolls;
                                var2 = var2[var4];
                                if (!(var3 === var2)) {
                                    _fun89276_ip = 1741;
                                    continue _fun89276
                                }
                            case 727:
                                var2 = _closure3_slot14;
                                if (!var2) {
                                    _fun89276_ip = 796;
                                    continue _fun89276
                                }
                            case 734:
                                var2 = _closure3_slot1;
                                var4 = var2.unloadedContentEntryMessageIds;
                                var3 = var4.has;
                                var2 = var0.id;
                                var3 = var3.bind(var4)(var2);
                                var2 = _closure3_slot0;
                                var2 = var2.props;
                                var5 = var2.unloadedContentEntryMessageIds;
                                var4 = var5.has;
                                var2 = var0.id;
                                var2 = var4.bind(var5)(var2);
                                if (!(var3 === var2)) {
                                    _fun89276_ip = 1717;
                                    continue _fun89276
                                }
                            case 796:
                                var2 = _closure3_slot0;
                                var2 = var2.props;
                                var3 = var2.channel;
                                var2 = var3.isForumPost;
                                var2 = var2.bind(var3)();
                                if (!var2) {
                                    _fun89276_ip = 899;
                                    continue _fun89276
                                }
                            case 823:
                                var2 = _closure3_slot12;
                                if (var2) {
                                    _fun89276_ip = 837;
                                    continue _fun89276
                                }
                            case 830:
                                var2 = _closure3_slot13;
                                if (!var2) {
                                    _fun89276_ip = 899;
                                    continue _fun89276
                                }
                            case 837:
                                var3 = var0.id;
                                var5 = _closure1_slot1;
                                var4 = _closure1_slot2;
                                var2 = 69;
                                var4 = var4[var2];
                                var2 = undefined;
                                var5 = var5.bind(var2)(var4);
                                var4 = var5.castChannelIdAsMessageId;
                                var2 = _closure3_slot0;
                                var2 = var2.props;
                                var2 = var2.channelId;
                                var2 = var4.bind(var5)(var2);
                                if (!(var3 !== var2)) {
                                    _fun89276_ip = 1693;
                                    continue _fun89276
                                }
                            case 899:
                                var2 = _closure3_slot16;
                                if (!var2) {
                                    _fun89276_ip = 921;
                                    continue _fun89276
                                }
                            case 906:
                                var3 = var0.activityInstance;
                                var2 = null;
                                if (!(var2 == var3)) {
                                    _fun89276_ip = 1669;
                                    continue _fun89276
                                }
                            case 921:
                                var2 = _closure3_slot17;
                                if (!var2) {
                                    _fun89276_ip = 955;
                                    continue _fun89276
                                }
                            case 928:
                                var5 = var0.activity;
                                var4 = null;
                                var6 = var4 == var5;
                                var3 = undefined;
                                if (var6) {
                                    _fun89276_ip = 951;
                                    continue _fun89276
                                }
                            case 945:
                                var3 = var5.party_id;
                            case 951:
                                var2 = var4 != var3;
                            case 955:
                                if (!var2) {
                                    _fun89276_ip = 977;
                                    continue _fun89276
                                }
                            case 958:
                                var4 = _closure3_slot25;
                                var3 = var4.add;
                                var2 = var0.id;
                                var2 = var3.bind(var4)(var2);
                            case 977:
                                var2 = _closure3_slot24;
                                if (!var2) {
                                    _fun89276_ip = 1028;
                                    continue _fun89276
                                }
                            case 984:
                                var2 = var0.author;
                                var3 = null;
                                var4 = var3 == var2;
                                var3 = undefined;
                                if (var4) {
                                    _fun89276_ip = 1006;
                                    continue _fun89276
                                }
                            case 1001:
                                var3 = var2.id;
                            case 1006:
                                var2 = _closure3_slot0;
                                var2 = var2.props;
                                var2 = var2.currentUserId;
                                if (!(var3 !== var2)) {
                                    _fun89276_ip = 1645;
                                    continue _fun89276
                                }
                            case 1028:
                                var2 = var0.author;
                                var3 = null;
                                if (!(var3 != var2)) {
                                    _fun89276_ip = 2120;
                                    continue _fun89276
                                }
                            case 1043:
                                var6 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var7 = 92;
                                var5 = var2[var7];
                                var2 = undefined;
                                var9 = var6.bind(var2)(var5);
                                var8 = var9.messageAuthorActivitiesChanged;
                                var6 = _closure3_slot1;
                                var5 = _closure3_slot0;
                                var5 = var5.props;
                                var5 = var8.bind(var9)(var0, var6, var5);
                                if (var5) {
                                    _fun89276_ip = 1621;
                                    continue _fun89276
                                }
                            case 1100:
                                var6 = _closure1_slot1;
                                var5 = _closure1_slot2;
                                var5 = var5[var7];
                                var9 = var6.bind(var2)(var5);
                                var8 = var9.codedLinksChanged;
                                var6 = _closure3_slot1;
                                var5 = _closure3_slot0;
                                var5 = var5.props;
                                var5 = var8.bind(var9)(var0, var6, var5);
                                if (var5) {
                                    _fun89276_ip = 1621;
                                    continue _fun89276
                                }
                            case 1149:
                                var5 = _closure3_slot2;
                                if (!var5) {
                                    _fun89276_ip = 1205;
                                    continue _fun89276
                                }
                            case 1156:
                                var6 = _closure1_slot1;
                                var5 = _closure1_slot2;
                                var5 = var5[var7];
                                var9 = var6.bind(var2)(var5);
                                var8 = var9.giftCodesChanged;
                                var6 = _closure3_slot1;
                                var5 = _closure3_slot0;
                                var5 = var5.props;
                                var5 = var8.bind(var9)(var0, var6, var5);
                                if (var5) {
                                    _fun89276_ip = 1621;
                                    continue _fun89276
                                }
                            case 1205:
                                var6 = _closure1_slot1;
                                var5 = _closure1_slot2;
                                var5 = var5[var7];
                                var8 = var6.bind(var2)(var5);
                                var7 = var8.mediaPostPreviewEmbedsChanged;
                                var6 = _closure3_slot1;
                                var5 = _closure3_slot0;
                                var5 = var5.props;
                                var5 = var7.bind(var8)(var0, var6, var5);
                                if (var5) {
                                    _fun89276_ip = 1621;
                                    continue _fun89276
                                }
                            case 1254:
                                var5 = _closure3_slot31;
                                if (!var5) {
                                    _fun89276_ip = 1278;
                                    continue _fun89276
                                }
                            case 1261:
                                var6 = var0.embeds;
                                var7 = var6.length;
                                var6 = 0;
                                var5 = var7 > var6;
                            case 1278:
                                if (!var5) {
                                    _fun89276_ip = 1300;
                                    continue _fun89276
                                }
                            case 1281:
                                var7 = _closure3_slot25;
                                var6 = var7.add;
                                var5 = var0.id;
                                var5 = var6.bind(var7)(var5);
                            case 1300:
                                var5 = var0.type;
                                var4 = _closure1_slot71;
                                var4 = var4.THREAD_STARTER_MESSAGE;
                                var4 = var5 === var4;
                                if (!var4) {
                                    _fun89276_ip = 1351;
                                    continue _fun89276
                                }
                            case 1322:
                                var5 = _closure3_slot1;
                                var6 = var5.threadStartingReferenceMessage;
                                var5 = _closure3_slot0;
                                var5 = var5.props;
                                var5 = var5.threadStartingReferenceMessage;
                                var4 = var6 !== var5;
                            case 1351:
                                if (!var4) {
                                    _fun89276_ip = 1373;
                                    continue _fun89276
                                }
                            case 1354:
                                var6 = _closure3_slot25;
                                var5 = var6.add;
                                var4 = var0.id;
                                var4 = var5.bind(var6)(var4);
                            case 1373:
                                var4 = _closure3_slot15;
                                if (!var4) {
                                    _fun89276_ip = 1389;
                                    continue _fun89276
                                }
                            case 1380:
                                var5 = var0.applicationId;
                                var4 = var3 != var5;
                            case 1389:
                                if (!var4) {
                                    _fun89276_ip = 1417;
                                    continue _fun89276
                                }
                            case 1392:
                                var5 = _closure3_slot1;
                                var7 = var5.invalidApplicationIds;
                                var6 = var7.includes;
                                var5 = var0.applicationId;
                                var4 = var6.bind(var7)(var5);
                            case 1417:
                                if (!var4) {
                                    _fun89276_ip = 1439;
                                    continue _fun89276
                                }
                            case 1420:
                                var6 = _closure3_slot25;
                                var5 = var6.add;
                                var4 = var0.id;
                                var4 = var5.bind(var6)(var4);
                            case 1439:
                                var4 = _closure3_slot18;
                                if (!var4) {
                                    _fun89276_ip = 1506;
                                    continue _fun89276
                                }
                            case 1446:
                                var7 = var0.referralTrialOfferId;
                                var4 = var3 != var7;
                                if (!var4) {
                                    _fun89276_ip = 1484;
                                    continue _fun89276
                                }
                            case 1459:
                                var5 = _closure3_slot0;
                                var5 = var5.props;
                                var6 = var5.resolvedReferralTrialOfferIds;
                                var5 = var6.includes;
                                var4 = var5.bind(var6)(var7);
                            case 1484:
                                if (!var4) {
                                    _fun89276_ip = 1506;
                                    continue _fun89276
                                }
                            case 1487:
                                var6 = _closure3_slot25;
                                var5 = var6.add;
                                var4 = var0.id;
                                var4 = var5.bind(var6)(var4);
                            case 1506:
                                var4 = _closure3_slot19;
                                if (!var4) {
                                    _fun89276_ip = 1530;
                                    continue _fun89276
                                }
                            case 1513:
                                var5 = var0.codedLinks;
                                var6 = var5.length;
                                var5 = 0;
                                var4 = var6 > var5;
                            case 1530:
                                if (!var4) {
                                    _fun89276_ip = 1552;
                                    continue _fun89276
                                }
                            case 1533:
                                var6 = _closure3_slot25;
                                var5 = var6.add;
                                var4 = var0.id;
                                var4 = var5.bind(var6)(var4);
                            case 1552:
                                var4 = _closure3_slot21;
                                if (var4) {
                                    _fun89276_ip = 1569;
                                    continue _fun89276
                                }
                            case 1559:
                                var4 = _closure3_slot23;
                                if (!var4) {
                                    _fun89276_ip = 2120;
                                    continue _fun89276
                                }
                            case 1569:
                                var4 = var0.activity;
                                var5 = var3 == var4;
                                var2 = undefined;
                                if (var5) {
                                    _fun89276_ip = 1590;
                                    continue _fun89276
                                }
                            case 1584:
                                var2 = var4.party_id;
                            case 1590:
                                if (!(var3 != var2)) {
                                    _fun89276_ip = 2120;
                                    continue _fun89276
                                }
                            case 1597:
                                var4 = _closure3_slot25;
                                var3 = var4.add;
                                var2 = var0.id;
                                var2 = var3.bind(var4)(var2);
                                _fun89276_ip = 2120;
                                continue _fun89276;
                            case 1621:
                                var4 = _closure3_slot25;
                                var3 = var4.add;
                                var2 = var0.id;
                                var2 = var3.bind(var4)(var2);
                                _fun89276_ip = 2120;
                                continue _fun89276;
                            case 1645:
                                var4 = _closure3_slot25;
                                var3 = var4.add;
                                var2 = var0.id;
                                var2 = var3.bind(var4)(var2);
                                _fun89276_ip = 2120;
                                continue _fun89276;
                            case 1669:
                                var4 = _closure3_slot25;
                                var3 = var4.add;
                                var2 = var0.id;
                                var2 = var3.bind(var4)(var2);
                                _fun89276_ip = 2120;
                                continue _fun89276;
                            case 1693:
                                var4 = _closure3_slot25;
                                var3 = var4.add;
                                var2 = var0.id;
                                var2 = var3.bind(var4)(var2);
                                _fun89276_ip = 2120;
                                continue _fun89276;
                            case 1717:
                                var4 = _closure3_slot25;
                                var3 = var4.add;
                                var2 = var0.id;
                                var2 = var3.bind(var4)(var2);
                                _fun89276_ip = 2120;
                                continue _fun89276;
                            case 1741:
                                var4 = _closure3_slot25;
                                var3 = var4.add;
                                var2 = var0.id;
                                var2 = var3.bind(var4)(var2);
                                var2 = undefined;
                                return var2;
                            case 1764:
                                var4 = _closure3_slot25;
                                var3 = var4.add;
                                var2 = var0.id;
                                var2 = var3.bind(var4)(var2);
                                _fun89276_ip = 2120;
                                continue _fun89276;
                            case 1788:
                                var4 = _closure3_slot25;
                                var3 = var4.add;
                                var2 = var0.id;
                                var2 = var3.bind(var4)(var2);
                                _fun89276_ip = 2120;
                                continue _fun89276;
                            case 1812:
                                var4 = _closure3_slot25;
                                var3 = var4.add;
                                var2 = var0.id;
                                var2 = var3.bind(var4)(var2);
                                _fun89276_ip = 2120;
                                continue _fun89276;
                            case 1836:
                                var4 = _closure3_slot25;
                                var3 = var4.add;
                                var2 = var0.id;
                                var2 = var3.bind(var4)(var2);
                                _fun89276_ip = 2120;
                                continue _fun89276;
                            case 1860:
                                var4 = _closure3_slot25;
                                var3 = var4.add;
                                var2 = var0.id;
                                var2 = var3.bind(var4)(var2);
                                _fun89276_ip = 2120;
                                continue _fun89276;
                            case 1884:
                                var2 = _closure3_slot0;
                                var2 = var2.props;
                                var3 = var2.messageAuthorMembers;
                                var2 = var0.author;
                                var2 = var2.id;
                                var3 = var3[var2];
                                var2 = _closure3_slot1;
                                var4 = var2.messageAuthorMembers;
                                var2 = var0.author;
                                var2 = var2.id;
                                var2 = var4[var2];
                                if (!(var3 !== var2)) {
                                    _fun89276_ip = 2120;
                                    continue _fun89276
                                }
                            case 1946:
                                var4 = _closure3_slot25;
                                var3 = var4.add;
                                var2 = var0.id;
                                var2 = var3.bind(var4)(var2);
                                _fun89276_ip = 2120;
                                continue _fun89276;
                            case 1970:
                                var4 = _closure3_slot25;
                                var3 = var4.add;
                                var2 = var0.id;
                                var2 = var3.bind(var4)(var2);
                                _fun89276_ip = 2120;
                                continue _fun89276;
                            case 1994:
                                var4 = _closure3_slot25;
                                var3 = var4.add;
                                var2 = var0.id;
                                var2 = var3.bind(var4)(var2);
                                _fun89276_ip = 2120;
                                continue _fun89276;
                            case 2015:
                                var4 = _closure3_slot25;
                                var3 = var4.add;
                                var2 = var0.id;
                                var2 = var3.bind(var4)(var2);
                                _fun89276_ip = 2120;
                                continue _fun89276;
                            case 2036:
                                var4 = _closure3_slot25;
                                var3 = var4.add;
                                var2 = var0.id;
                                var2 = var3.bind(var4)(var2);
                                _fun89276_ip = 2120;
                                continue _fun89276;
                            case 2057:
                                var4 = _closure3_slot25;
                                var3 = var4.add;
                                var2 = var0.id;
                                var2 = var3.bind(var4)(var2);
                                var2 = undefined;
                                return var2;
                            case 2080:
                                var4 = _closure3_slot25;
                                var3 = var4.add;
                                var2 = var0.id;
                                var2 = var3.bind(var4)(var2);
                                _fun89276_ip = 2120;
                                continue _fun89276;
                            case 2101:
                                var2 = _closure3_slot25;
                                var1 = var2.add;
                                var0 = var0.id;
                                var0 = var1.bind(var2)(var0);
                            case 2120:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0 = var2.bind(var14)(var0);
                    var2 = var1.updateRows;
                    var0 = {};
                    var0.forceRender = var13;
                    var0.forceReload = var12;
                    var0.updateMessageIds = var11;
                    var0.scrollToMessageId = var10;
                    var0.jumpTargetId = var9;
                    var0.jumpType = var8;
                    var0.focusTargetId = var7;
                    var0.ignoreEmbedDescriptionCache = var6;
                    var0.messagesNewlyLoaded = var5;
                    var0.shouldInitialScroll = var4;
                    var0.minimizeScrolling = var3;
                    var0 = var2.bind(var1)(var0);
                    var2 = var1.setState;
                    var0 = {};
                    var3 = false;
                    var0.shouldForceRender = var3;
                    var0 = var2.bind(var1)(var0);
                    var0 = var1.recordTimings;
                    var0 = var0.bind(var1)();
                case 3440:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'handleScrollCallbacks';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun89277: for (var _fun89277_ip = 0;;) switch (_fun89277_ip) {
                case 0:
                    var2 = arg0;
                    var0 = this;
                    var1 = var2.isAtBottom;
                    var10 = var2.isNearBottom;
                    var3 = undefined;
                    if (!(var10 === var3)) {
                        _fun89277_ip = 26;
                        continue _fun89277
                    }
                case 24:
                    var10 = false;
                case 26:
                    var11 = var2.isNearTop;
                    if (!(var11 === var3)) {
                        _fun89277_ip = 38;
                        continue _fun89277
                    }
                case 36:
                    var11 = false;
                case 38:
                    var12 = var2.dragging;
                    if (!(var12 === var3)) {
                        _fun89277_ip = 50;
                        continue _fun89277
                    }
                case 48:
                    var12 = false;
                case 50:
                    var14 = var2.decelerating;
                    if (!(var14 === var3)) {
                        _fun89277_ip = 62;
                        continue _fun89277
                    }
                case 60:
                    var14 = false;
                case 62:
                    var4 = var2.isFirstMessageVisible;
                    if (!(var4 === var3)) {
                        _fun89277_ip = 74;
                        continue _fun89277
                    }
                case 72:
                    var4 = false;
                case 74:
                    var2 = var0.props;
                    var8 = var2.messages;
                    var5 = var2.channel;
                    var2 = var2.onScroll;
                    var6 = null;
                    if (!(var6 != var5)) {
                        _fun89277_ip = 400;
                        continue _fun89277
                    }
                case 105:
                    var6 = var8.length;
                    var9 = 0;
                    if (!(var9 === var6)) {
                        _fun89277_ip = 128;
                        continue _fun89277
                    }
                case 116:
                    var6 = var8.loadingMore;
                    if (var6) {
                        _fun89277_ip = 400;
                        continue _fun89277
                    }
                case 128:
                    var13 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var7 = 93;
                    var7 = var15[var7];
                    var13 = var13.bind(var3)(var7);
                    var7 = var13.getIsScreenReaderEnabled;
                    var13 = var7.bind(var13)();
                    var7 = var8.loadingMore;
                    var7 = !var7;
                    if (!var7) {
                        _fun89277_ip = 188;
                        continue _fun89277
                    }
                case 173:
                    if (var12) {
                        _fun89277_ip = 179;
                        continue _fun89277
                    }
                case 176:
                    var12 = var14;
                case 179:
                    if (var12) {
                        _fun89277_ip = 185;
                        continue _fun89277
                    }
                case 182:
                    var12 = var13;
                case 185:
                    var7 = var12;
                case 188:
                    if (!var7) {
                        _fun89277_ip = 206;
                        continue _fun89277
                    }
                case 191:
                    var12 = var0.pendingUpdatesQueue;
                    var12 = var12.length;
                    var7 = var9 === var12;
                case 206:
                    var12 = var0.isNearTop;
                    if (var12) {
                        _fun89277_ip = 245;
                        continue _fun89277
                    }
                case 215:
                    if (!var11) {
                        _fun89277_ip = 245;
                        continue _fun89277
                    }
                case 218:
                    var11 = var8.hasMoreBefore;
                    if (!var11) {
                        _fun89277_ip = 245;
                        continue _fun89277
                    }
                case 227:
                    if (!var7) {
                        _fun89277_ip = 245;
                        continue _fun89277
                    }
                case 230:
                    var11 = var0.loadMoreBefore;
                    var11 = var11.bind(var0)();
                    _fun89277_ip = 368;
                    continue _fun89277;
                case 245:
                    var11 = var0.isNearBottom;
                    if (var11) {
                        _fun89277_ip = 281;
                        continue _fun89277
                    }
                case 254:
                    if (!var10) {
                        _fun89277_ip = 281;
                        continue _fun89277
                    }
                case 257:
                    var8 = var8.hasMoreAfter;
                    if (!var8) {
                        _fun89277_ip = 281;
                        continue _fun89277
                    }
                case 266:
                    if (!var7) {
                        _fun89277_ip = 281;
                        continue _fun89277
                    }
                case 269:
                    var7 = var0.loadMoreAfter;
                    var7 = var7.bind(var0)();
                    _fun89277_ip = 368;
                    continue _fun89277;
                case 281:
                    var7 = var0.isAtBottom;
                    var7 = var7 === var1;
                    if (!var7) {
                        _fun89277_ip = 300;
                        continue _fun89277
                    }
                case 294:
                    var7 = var0.hasHandledScroll;
                case 300:
                    if (var7) {
                        _fun89277_ip = 368;
                        continue _fun89277
                    }
                case 303:
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var6 = 90;
                    var6 = var8[var6];
                    var8 = var7.bind(var3)(var6);
                    var7 = var8.updateChannelDimensions;
                    var6 = var5.id;
                    var5 = 0;
                    if (!var1) {
                        _fun89277_ip = 342;
                        continue _fun89277
                    }
                case 339:
                    var5 = 1;
                case 342:
                    var17 = 1;
                    var20 = var8;
                    var19 = var6;
                    var18 = var5;
                    var16 = 0;
                    var1 = var20[var7](var19, var18, var17, var16, var15);
                    var1 = true;
                    var0.hasHandledScroll = var1;
                case 368:
                    var1 = {};
                    var1.isFirstMessageVisible = var4;
                    var1 = var2.bind(var3)(var1);
                    var1 = var0._chatUpdatesQueue;
                    var0 = var1.tryFlush;
                    var0 = var0.bind(var1)();
                    var0 = true;
                    return var0;
                case 400:
                    var0 = false;
                    return var0;
            }
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'handleVisibleMessagesChange';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun89278: for (var _fun89278_ip = 0;;) switch (_fun89278_ip) {
                case 0:
                    var0 = arg0;
                    var1 = this;
                    var10 = var0.firstVisibleMessageRowIndex;
                    var7 = var0.firstVisibleMessagePercentVisible;
                    var9 = var0.lastVisibleMessageRowIndex;
                    var6 = var0.lastVisibleMessagePercentVisible;
                    var8 = var0.source;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var0 = 66;
                    var3 = var3[var0];
                    var0 = undefined;
                    var5 = var4.bind(var0)(var3);
                    var4 = var5.getVisibleMessages;
                    var3 = {};
                    var3.firstVisibleMessageRowIndex = var10;
                    var3.lastVisibleMessageRowIndex = var9;
                    var3.firstVisibleMessagePercentVisible = var7;
                    var3.lastVisibleMessagePercentVisible = var6;
                    var6 = var1.chatManager;
                    var3.chatManager = var6;
                    var6 = var1.props;
                    var6 = var6.channelId;
                    var3.channelId = var6;
                    var6 = var4.bind(var5)(var3);
                    var4 = var6.length;
                    var3 = 0;
                    if (!(!(var4 <= var3))) {
                        _fun89278_ip = 289;
                        continue _fun89278
                    }
                case 132:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 94;
                    var2 = var4[var2];
                    var7 = var3.bind(var0)(var2);
                    var5 = var7.questsVisibleMobileMessagesChanged;
                    var2 = {};
                    var2.visibleMessages = var6;
                    var2.source = var8;
                    var2 = var5.bind(var7)(var2);
                    var2 = 95;
                    var5 = var4[var2];
                    var10 = var3.bind(var0)(var5);
                    var9 = var10.handleAnnouncementMessageViewTracking;
                    var5 = var1.props;
                    var13 = var5.shouldTrackAnnouncementMessageViews;
                    var5 = var1.props;
                    var12 = var5.guildId;
                    var5 = var1.props;
                    var11 = var5.channel;
                    var15 = var10;
                    var14 = var6;
                    var5 = var15[var9](var14, var13, var12, var11, var10);
                    var2 = var4[var2];
                    var5 = var3.bind(var0)(var2);
                    var4 = var5.handleRichPresenceInviteEmbedViewTracking;
                    var2 = var1.props;
                    var13 = var2.shouldTrackRichPresenceInviteEmbedViews;
                    var2 = var1.props;
                    var12 = var2.guildId;
                    var1 = var1.props;
                    var11 = var1.channel;
                    var15 = var5;
                    var14 = var6;
                    var1 = var15[var4](var14, var13, var12, var11, var10);
                case 289:
                    return var0;
            }
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'render';
        var4.key = var6;
        var5 = function() { // Original name: value, environment: var5
            var8 = this;
            var0 = var8.props;
            var12 = var0.animateEmoji;
            var13 = var0.onPressKey;
            var15 = var0.style;
            var11 = var0.children;
            var10 = var0.HACK_fixModalInteraction;
            var14 = var0.alwaysRespectKeyboard;
            var3 = _closure1_slot77;
            var2 = _closure1_slot76;
            var1 = {};
            var7 = _closure1_slot75;
            var6 = _closure1_slot1;
            var9 = _closure1_slot2;
            var0 = 96;
            var4 = var9[var0];
            var0 = undefined;
            var6 = var6.bind(var0)(var4);
            var4 = {};
            var16 = var8._chatRef;
            var4.ref = var16;
            var4.style = var15;
            var15 = true;
            var4.inverted = var15;
            var4.alwaysRespectKeyboard = var14;
            var14 = var8.handleScrollPosition;
            var4.onChatScrollPosition = var14;
            var14 = var8.handlers;
            var14 = var14.handleTapImage;
            var4.onTapImage = var14;
            var14 = var8.handlers;
            var14 = var14.handleTapChannel;
            var4.onTapChannel = var14;
            var14 = var8.handlers;
            var14 = var14.handleLongPressChannel;
            var4.onLongPressChannel = var14;
            var14 = var8.handlers;
            var14 = var14.handleTapAttachmentLink;
            var4.onTapAttachmentLink = var14;
            var14 = var8.handlers;
            var14 = var14.handleLongPressAttachmentLink;
            var4.onLongPressAttachmentLink = var14;
            var14 = var8.handlers;
            var14 = var14.handleTapCall;
            var4.onTapCall = var14;
            var14 = var8.handlers;
            var14 = var14.handleTapMention;
            var4.onTapMention = var14;
            var14 = var8.handlers;
            var14 = var14.handleTapCommandMention;
            var4.onTapCommandMention = var14;
            var14 = var8.handlers;
            var14 = var14.handleLongPressCommandMention;
            var4.onLongPressCommandMention = var14;
            var14 = var8.handlers;
            var14 = var14.handleTapLink;
            var4.onTapLink = var14;
            var14 = var8.handlers;
            var14 = var14.handleLongPressLink;
            var4.onLongPressLink = var14;
            var14 = var8.handlers;
            var14 = var14.handleTapReaction;
            var4.onTapReaction = var14;
            var14 = var8.handlers;
            var14 = var14.handleLongPressReaction;
            var4.onLongPressReaction = var14;
            var14 = var8.handlers;
            var14 = var14.handleTapAvatar;
            var4.onTapAvatar = var14;
            var14 = var8.handlers;
            var14 = var14.handleTapUsername;
            var4.onTapUsername = var14;
            var14 = var8.handlers;
            var14 = var14.handleLongPressUsername;
            var4.onLongPressUsername = var14;
            var14 = var8.handlers;
            var14 = var14.handleOpenSticker;
            var4.onTapSticker = var14;
            var14 = var8.handleLongPressSticker;
            var4.onLongPressSticker = var14;
            var14 = var8.handlers;
            var14 = var14.handleLongPressMessage;
            var4.onLongPressMessage = var14;
            var14 = var8.handlers;
            var14 = var14.handleInitiateReply;
            var4.onInitiateReply = var14;
            var14 = var8.handlers;
            var14 = var14.handleInitiateEdit;
            var4.onInitiateEdit = var14;
            var14 = var8.handlers;
            var14 = var14.handleInitiateThread;
            var4.onInitiateThread = var14;
            var14 = var8.handlers;
            var14 = var14.handleTapMessage;
            var4.onTapMessage = var14;
            var14 = var8.handlers;
            var14 = var14.handleDoubleTapMessage;
            var4.onDoubleTapMessage = var14;
            var14 = var8.handlers;
            var14 = var14.handleTapSeparator;
            var4.onTapSeparator = var14;
            var14 = var8.handlers;
            var14 = var14.handleTapInviteEmbed;
            var4.onTapInviteEmbed = var14;
            var14 = var8.handlers;
            var14 = var14.handleTapInviteEmbedAccept;
            var4.onTapInviteEmbedAccept = var14;
            var14 = var8.handlers;
            var14 = var14.handleTapJoinActivity;
            var4.onTapJoinActivity = var14;
            var14 = var8.handlers;
            var14 = var14.handleTapJoinRichPresence;
            var4.onTapJoinRichPresence = var14;
            var4.onPressKey = var13;
            var4.animateEmoji = var12;
            var12 = var8.handlers;
            var12 = var12.handleTapGiftCodeEmbed;
            var4.onTapGiftCodeEmbed = var12;
            var12 = var8.handlers;
            var12 = var12.handleTapCancelUploadItem;
            var4.onTapCancelUploadItem = var12;
            var12 = var8.handlers;
            var12 = var12.handleTapReply;
            var4.onTapMessageReply = var12;
            var12 = var8.handlers;
            var12 = var12.handleTapSummary;
            var4.onTapSummary = var12;
            var12 = var8.handlers;
            var12 = var12.handleTapSummaryJump;
            var4.onTapSummaryJump = var12;
            var12 = var8.handlers;
            var12 = var12.handleTapGiftCodeAccept;
            var4.onTapGiftCodeAccept = var12;
            var12 = var8.handlers;
            var12 = var12.handleTapReferralRedeem;
            var4.onTapReferralRedeem = var12;
            var12 = var8.handlers;
            var12 = var12.handleTapThreadEmbed;
            var4.onTapThreadEmbed = var12;
            var12 = var8.handlers;
            var12 = var12.handleTapEmoji;
            var4.onTapEmoji = var12;
            var12 = var8.handlers;
            var12 = var12.handleTapTimestamp;
            var4.onTapTimestamp = var12;
            var12 = var8.handlers;
            var12 = var12.handleTapInlineCode;
            var4.onTapInlineCode = var12;
            var12 = var8.handlers;
            var12 = var12.handleTapRoleIcon;
            var4.onTapRoleIcon = var12;
            var12 = var8.handlers;
            var12 = var12.handleTapGameIcon;
            var4.onTapGameIcon = var12;
            var12 = var8.handlers;
            var12 = var12.handleTapSuppressNotificationsIcon;
            var4.onTapSuppressNotificationsIcon = var12;
            var12 = var8.handlers;
            var12 = var12.handleTapConnectionsRoleTag;
            var4.onTapConnectionsRoleTag = var12;
            var12 = var8.handlers;
            var12 = var12.handleTapTimeoutIcon;
            var4.onTapTimeoutIcon = var12;
            var12 = var8.handlers;
            var12 = var12.handleTapButtonActionComponent;
            var4.onTapButtonActionComponent = var12;
            var12 = var8.handlers;
            var12 = var12.handleTapSelectActionComponent;
            var4.onTapSelectActionComponent = var12;
            var12 = var8.handlers;
            var12 = var12.handleTapWelcomeReply;
            var4.onTapWelcomeReply = var12;
            var12 = var8.handlers;
            var12 = var12.handleTapInviteToSpeak;
            var4.onTapInviteToSpeak = var12;
            var12 = var8.handlers;
            var12 = var12.handleTapAutoModerationActions;
            var4.onTapAutoModerationActions = var12;
            var12 = var8.handlers;
            var12 = var12.handleTapAutoModerationFeedback;
            var4.onTapAutoModerationFeedback = var12;
            var12 = var8.handlers;
            var12 = var12.handleTapFollowForumPost;
            var4.onTapFollowForumPost = var12;
            var12 = var8.handlers;
            var12 = var12.handleTapShareForumPost;
            var4.onTapShareForumPost = var12;
            var12 = var8.handlers;
            var12 = var12.handleTapReactionOverflow;
            var4.onTapReactionOverflow = var12;
            var12 = var8.handleTapNavBar;
            var4.onTapNavBar = var12;
            var12 = var8.handlers;
            var12 = var12.handleCopyText;
            var4.onTapCopyText = var12;
            var12 = var8.handlers;
            var12 = var12.handleTapOpTag;
            var4.onTapOpTag = var12;
            var12 = var8.handlers;
            var12 = var12.handleTapTag;
            var4.onTapTag = var12;
            var12 = var8.handlers;
            var12 = var12.handleMediaAttachmentPlaybackEnded;
            var4.onMediaAttachmentPlaybackEnded = var12;
            var12 = var8.handlers;
            var12 = var12.handleMediaAttachmentPlaybackStarted;
            var4.onMediaAttachmentPlaybackStarted = var12;
            var12 = var8.handlers;
            var12 = var12.handleVoiceMessagePlaybackFailed;
            var4.onVoiceMessagePlaybackFailed = var12;
            var12 = var8.handleTapShowAltText;
            var4.onTapShowAltText = var12;
            var12 = var8.handlers;
            var12 = var12.handleTapPostPreviewEmbed;
            var4.onTapPostPreviewEmbed = var12;
            var12 = var8.handlers;
            var12 = var12.handleTapDismissMediaPostSharePrompt;
            var4.onTapDismissMediaPostSharePrompt = var12;
            var12 = var8.handlers;
            var12 = var12.handleTapChannelPromptButton;
            var4.onTapChannelPromptButton = var12;
            var12 = var8.handlers;
            var12 = var12.handleTapObscuredMediaLearnMore;
            var4.onTapObscuredMediaLearnMore = var12;
            var12 = var8.handlers;
            var12 = var12.onTapObscuredMediaToggle;
            var4.onTapObscuredMediaToggle = var12;
            var12 = var8.handlers;
            var12 = var12.handleTapSafetyPolicyNoticeEmbed;
            var4.onTapSafetyPolicyNoticeEmbed = var12;
            var12 = var8.handlers;
            var12 = var12.handleTapSafetySystemNotificationCta;
            var4.onTapSafetySystemNotificationCta = var12;
            var12 = var8.handlers;
            var12 = var12.handleTapPollAnswer;
            var4.onTapPollAnswer = var12;
            var12 = var8.handlers;
            var12 = var12.handleTapPollSubmitVote;
            var4.onTapPollSubmitVote = var12;
            var12 = var8.handlers;
            var12 = var12.handleTapPollAction;
            var4.onTapPollAction = var12;
            var12 = var8.handlers;
            var12 = var12.handleLongPressPollImage;
            var4.onLongPressPollImage = var12;
            var12 = var8.handlers;
            var12 = var12.handleTapCtaButton;
            var4.onTapCtaButton = var12;
            var12 = var8.handlers;
            var12 = var12.handleMessageAccessibilityAction;
            var4.onMessageAccessibilityAction = var12;
            var12 = var8.handlers;
            var12 = var12.handleTapForwardFooter;
            var4.onTapForwardFooter = var12;
            var12 = var8.handlers;
            var12 = var12.handleTapInlineForward;
            var4.onTapInlineForward = var12;
            var12 = var8.handlers;
            var12 = var12.handleTapClanTagChiplet;
            var4.onTapClanTagChiplet = var12;
            var12 = var8.handlers;
            var12 = var12.handleTapContentInventoryEntryEmbed;
            var4.onTapContentInventoryEntryEmbed = var12;
            var12 = var8.handlers;
            var12 = var12.handleTapCheckpointCard;
            var4.onTapCheckpointCard = var12;
            var12 = var8.handlers;
            var12 = var12.handleTapSoundmoji;
            var4.onTapSoundmoji = var12;
            var12 = var8.handlers;
            var12 = var12.handleTapAppMessageEmbed;
            var4.onTapAppMessageEmbed = var12;
            var12 = var8.handlers;
            var12 = var12.handleTapPreviewSharedClientTheme;
            var4.onTapPreviewSharedClientTheme = var12;
            var12 = var8.handlers;
            var12 = var12.handleSharedClientThemeViewed;
            var4.onSharedClientThemeViewed = var12;
            var4.children = var11;
            var4.HACK_fixModalInteraction = var10;
            var10 = var8.handleTapTableView;
            var4.onTapTableView = var10;
            var10 = var8.handleFirstLayout;
            var4.onFirstLayout = var10;
            var10 = var8.handleMediaPlayFinishedAnalytics;
            var4.onMediaPlayFinishedAnalytics = var10;
            var10 = var8.handleMessageVisibilityChanged;
            var4.onMessageVisibilityChanged = var10;
            var6 = var7.bind(var0)(var6, var4);
            var4 = new Array(2);
            var4[0] = var6;
            var6 = _closure1_slot0;
            var5 = 97;
            var5 = var9[var5];
            var5 = var6.bind(var0)(var5);
            var6 = var5.ChatTTITracker;
            var5 = {};
            var8 = var8.props;
            var8 = var8.messages;
            var5.messages = var8;
            var5 = var7.bind(var0)(var6, var5);
            var4[1] = var5;
            var1.children = var4;
            var0 = var3.bind(var0)(var2, var1);
            return var0;
        };
        var4.value = var5;
        var0[7] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var7);
    var _closure1_slot79 = var3;
    var3 = var6.forwardRef;
    var1 = function(arg0, arg1) { // Environment: var1
        _fun89280: for (var _fun89280_ip = 0;;) switch (_fun89280_ip) {
            case 0:
                var8 = arg0;
                var6 = var8.channel;
                var _closure2_slot0 = var6;
                var4 = _closure1_slot0;
                var1 = _closure1_slot2;
                var2 = 98;
                var7 = var1[var2];
                var3 = undefined;
                var12 = var4.bind(var3)(var7);
                var11 = var12.useStateFromStores;
                var7 = _closure1_slot51;
                var10 = new Array(1);
                var10[0] = var7;
                var7 = var6.id;
                var9 = new Array(1);
                var9[0] = var7;
                var7 = function() { // Environment: var0
                    var2 = _closure1_slot51;
                    var1 = var2.getMessages;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var81 = var11.bind(var12)(var10, var7, var9);
                var _closure2_slot1 = var81;
                var92 = var6.id;
                var _closure2_slot2 = var92;
                var7 = var6.getGuildId;
                var94 = var7.bind(var6)();
                var _closure2_slot3 = var94;
                var1 = var1[var2];
                var9 = var4.bind(var3)(var1);
                var7 = var9.useStateFromStores;
                var1 = _closure1_slot48;
                var4 = new Array(1);
                var4[0] = var1;
                var1 = function() { // Environment: var0
                    var2 = _closure1_slot48;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var14 = var7.bind(var9)(var4, var1);
                var _closure2_slot4 = var14;
                var18 = null;
                var1 = var18 == var14;
                var42 = undefined;
                if (var1) {
                    _fun89280_ip = 170;
                    continue _fun89280
                }
            case 164:
                var42 = var14.systemChannelFlags;
            case 170:
                var7 = _closure1_slot0;
                var10 = _closure1_slot2;
                var1 = var10[var2];
                var12 = var7.bind(var3)(var1);
                var11 = var12.useStateFromStores;
                var1 = _closure1_slot43;
                var9 = new Array(1);
                var9[0] = var1;
                var4 = function() { // Environment: var0
                    var1 = _closure1_slot43;
                    var0 = var1.getId;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var1 = new Array(0);
                var93 = var11.bind(var12)(var9, var4, var1);
                var _closure2_slot5 = var93;
                var1 = 101;
                var4 = var10[var1];
                var4 = var7.bind(var3)(var4);
                var9 = var4.InlineAttachmentMedia;
                var4 = var9.useSetting;
                var100 = var4.bind(var9)();
                var4 = var10[var1];
                var4 = var7.bind(var3)(var4);
                var9 = var4.InlineEmbedMedia;
                var4 = var9.useSetting;
                var99 = var4.bind(var9)();
                var4 = var10[var1];
                var4 = var7.bind(var3)(var4);
                var9 = var4.RenderEmbeds;
                var4 = var9.useSetting;
                var98 = var4.bind(var9)();
                var4 = var10[var1];
                var4 = var7.bind(var3)(var4);
                var9 = var4.RenderReactions;
                var4 = var9.useSetting;
                var97 = var4.bind(var9)();
                var4 = var10[var1];
                var4 = var7.bind(var3)(var4);
                var9 = var4.DeveloperMode;
                var4 = var9.useSetting;
                var96 = var4.bind(var9)();
                var4 = var10[var1];
                var4 = var7.bind(var3)(var4);
                var9 = var4.AnimateEmoji;
                var4 = var9.useSetting;
                var104 = var4.bind(var9)();
                var4 = var10[var1];
                var4 = var7.bind(var3)(var4);
                var9 = var4.AnimateStickers;
                var4 = var9.useSetting;
                var103 = var4.bind(var9)();
                var1 = var10[var1];
                var1 = var7.bind(var3)(var1);
                var4 = var1.GifAutoPlay;
                var1 = var4.useSetting;
                var101 = var1.bind(var4)();
                var1 = var10[var2];
                var12 = var7.bind(var3)(var1);
                var11 = var12.useStateFromStores;
                var1 = _closure1_slot42;
                var9 = new Array(1);
                var9[0] = var1;
                var4 = function() { // Environment: var0
                    var0 = _closure1_slot42;
                    var0 = var0.theme;
                    return var0;
                };
                var1 = new Array(0);
                var107 = var11.bind(var12)(var9, var4, var1);
                var1 = 102;
                var1 = var10[var1];
                var4 = var7.bind(var3)(var1);
                var1 = var4.useIsMessageSwipeActionsEnabled;
                var12 = var1.bind(var4)();
                var1 = function(arg0) { // Original name: useMessageAuthorActivities, environment: var0
                    var2 = arg0;
                    var _closure3_slot0 = var2;
                    var5 = _closure1_slot10;
                    var4 = var5.useMemo;
                    var3 = new Array(1);
                    var3[0] = var2;
                    var2 = function() { // Environment: var0
                        var0 = {};
                        var _closure4_slot0 = var0;
                        var3 = _closure3_slot0;
                        var2 = var3.forEach;
                        var1 = function(arg0) { // Environment: var1
                            _fun89287: for (var _fun89287_ip = 0;;) switch (_fun89287_ip) {
                                case 0:
                                    var0 = arg0;
                                    var1 = var0.author;
                                    var2 = null;
                                    var1 = var2 != var1;
                                    if (!var1) {
                                        _fun89287_ip = 28;
                                        continue _fun89287
                                    }
                                case 18:
                                    var3 = var0.activity;
                                    var1 = var2 != var3;
                                case 28:
                                    if (!var1) {
                                        _fun89287_ip = 53;
                                        continue _fun89287
                                    }
                                case 31:
                                    var1 = _closure4_slot0;
                                    var0 = var0.author;
                                    var0 = var0.id;
                                    var1[var0] = var2;
                                case 53:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var5 = var4.bind(var5)(var2, var3);
                    var _closure3_slot1 = var5;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 98;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.useStateFromStoresObject;
                    var1 = _closure1_slot54;
                    var2 = new Array(1);
                    var2[0] = var1;
                    var1 = new Array(1);
                    var1[0] = var5;
                    var0 = function() { // Environment: var0
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 68;
                        var1 = var1[var0];
                        var0 = undefined;
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.mapValues;
                        var1 = _closure3_slot1;
                        var0 = function(arg0, arg1) { // Environment: var0
                            var2 = _closure1_slot54;
                            var1 = var2.getPrimaryActivity;
                            var0 = arg1;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                    };
                    var0 = var3.bind(var4)(var2, var0, var1);
                    return var0;
                };
                var87 = var1.bind(var3)(var81);
                var1 = function(arg0) { // Original name: useFetchMessageApplications, environment: var0
                    var1 = arg0;
                    var _closure3_slot0 = var1;
                    var3 = _closure1_slot10;
                    var4 = var3.useMemo;
                    var2 = new Array(1);
                    var2[0] = var1;
                    var1 = function() { // Environment: var0
                        var0 = global;
                        var2 = var0.Set;
                        var3 = var2.prototype;
                        var3 = Object.create(var3, {
                            constructor: {
                                value: var2
                            }
                        });
                        var6 = var3;
                        var2 = new var6[var2](var5);
                        var2 = var2 instanceof Object ? var2 : var3;
                        var _closure4_slot0 = var2;
                        var4 = _closure3_slot0;
                        var3 = var4.forEach;
                        var1 = function(arg0) { // Environment: var1
                            _fun89292: for (var _fun89292_ip = 0;;) switch (_fun89292_ip) {
                                case 0:
                                    var0 = arg0;
                                    var1 = var0.applicationId;
                                    var3 = null;
                                    var1 = var3 != var1;
                                    if (!var1) {
                                        _fun89292_ip = 26;
                                        continue _fun89292
                                    }
                                case 17:
                                    var2 = var0.application;
                                    var1 = var3 == var2;
                                case 26:
                                    if (!var1) {
                                        _fun89292_ip = 51;
                                        continue _fun89292
                                    }
                                case 29:
                                    var2 = _closure4_slot0;
                                    var1 = var2.add;
                                    var0 = var0.applicationId;
                                    var0 = var1.bind(var2)(var0);
                                case 51:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var1 = var3.bind(var4)(var1);
                        var1 = var0.Array;
                        var0 = var1.from;
                        var0 = var0.bind(var1)(var2);
                        return var0;
                    };
                    var4 = var4.bind(var3)(var1, var2);
                    var _closure3_slot1 = var4;
                    var2 = var3.useRef;
                    var1 = new Array(0);
                    var1 = var2.bind(var3)(var1);
                    var _closure3_slot2 = var1;
                    var2 = var3.useEffect;
                    var1 = new Array(1);
                    var1[0] = var4;
                    var0 = function() { // Environment: var0
                        _fun89293: for (var _fun89293_ip = 0;;) switch (_fun89293_ip) {
                            case 0:
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 89;
                                var1 = var1[var0];
                                var0 = undefined;
                                var6 = var2.bind(var0)(var1);
                                var5 = var6.areArraysShallowEqual;
                                var4 = _closure3_slot1;
                                var2 = _closure3_slot2;
                                var2 = var2.current;
                                var2 = var5.bind(var6)(var4, var2);
                                if (var2) {
                                    _fun89293_ip = 172;
                                    continue _fun89293
                                }
                            case 56:
                                var4 = _closure1_slot1;
                                var9 = _closure1_slot2;
                                var2 = 99;
                                var2 = var9[var2];
                                var6 = var4.bind(var0)(var2);
                                var5 = var6.fetchApplications;
                                var2 = 68;
                                var2 = var9[var2];
                                var4 = var4.bind(var0)(var2);
                                var2 = _closure3_slot1;
                                var7 = var4.bind(var0)(var2);
                                var4 = var7.filter;
                                var8 = _closure1_slot0;
                                var3 = 100;
                                var3 = var9[var3];
                                var3 = var8.bind(var0)(var3);
                                var3 = var3.isNotNullish;
                                var4 = var4.bind(var7)(var3);
                                var3 = var4.uniq;
                                var4 = var3.bind(var4)();
                                var3 = var4.value;
                                var4 = var3.bind(var4)();
                                var3 = false;
                                var3 = var5.bind(var6)(var4, var3);
                                var1 = _closure3_slot2;
                                var1.current = var2;
                            case 172:
                                return var0;
                        }
                    };
                    var0 = var2.bind(var3)(var0, var1);
                    var0 = undefined;
                    return var0;
                };
                var1 = var1.bind(var3)(var81);
                var15 = _closure1_slot1;
                var1 = 103;
                var1 = var10[var1];
                var1 = var15.bind(var3)(var1);
                var1 = var1.bind(var3)(var81, var6);
                var13 = _closure1_slot3;
                var9 = 2;
                var1 = var13.bind(var3)(var1, var9);
                var11 = 0;
                var16 = var1[var11];
                var4 = 1;
                var1 = var1[var4];
                var1 = var10[var2];
                var21 = var7.bind(var3)(var1);
                var20 = var21.useStateFromStores;
                var1 = _closure1_slot50;
                var19 = new Array(1);
                var19[0] = var1;
                var17 = function() { // Environment: var0
                    var1 = _closure1_slot50;
                    var0 = var1.getInvites;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var1 = new Array(0);
                var86 = var20.bind(var21)(var19, var17, var1);
                var1 = var10[var2];
                var21 = var7.bind(var3)(var1);
                var20 = var21.useStateFromStoresObject;
                var1 = _closure1_slot23;
                var19 = new Array(1);
                var19[0] = var1;
                var17 = function() { // Environment: var0
                    var0 = {};
                    var2 = _closure1_slot23;
                    var1 = var2.getApplications;
                    var1 = var1.bind(var2)();
                    var0.appDirectoryEmbedApplications = var1;
                    var1 = var2.getInvalidApplicationIds;
                    var1 = var1.bind(var2)();
                    var0.invalidAppDirectoryEmbedApplicationIds = var1;
                    var1 = var2.getApplicationFetchStates;
                    var1 = var1.bind(var2)();
                    var0.appDirectoryEmbedApplicationFetchStates = var1;
                    return var0;
                };
                var1 = new Array(0);
                var1 = var20.bind(var21)(var19, var17, var1);
                var85 = var1.appDirectoryEmbedApplications;
                var84 = var1.invalidAppDirectoryEmbedApplicationIds;
                var76 = var1.appDirectoryEmbedApplicationFetchStates;
                var1 = var10[var2];
                var20 = var7.bind(var3)(var1);
                var19 = var20.useStateFromStoresArray;
                var1 = _closure1_slot15;
                var17 = new Array(1);
                var17[0] = var1;
                var1 = function() { // Environment: var0
                    var1 = _closure1_slot15;
                    var0 = var1.getFetchingOrFailedFetchingIds;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var83 = var19.bind(var20)(var17, var1);
                var1 = var10[var2];
                var20 = var7.bind(var3)(var1);
                var19 = var20.useStateFromStoresArray;
                var1 = _closure1_slot14;
                var17 = new Array(1);
                var17[0] = var1;
                var1 = function() { // Environment: var0
                    var1 = _closure1_slot14;
                    var0 = var1.getFetchingIds;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var82 = var19.bind(var20)(var17, var1);
                var1 = var10[var2];
                var22 = var7.bind(var3)(var1);
                var21 = var22.useStateFromStoresArray;
                var1 = _closure1_slot13;
                var20 = new Array(1);
                var20[0] = var1;
                var19 = new Array(1);
                var19[0] = var92;
                var17 = function() { // Environment: var0
                    var3 = _closure1_slot13;
                    var2 = var3.getEmbeddedActivitiesForChannel;
                    var1 = _closure2_slot2;
                    var3 = var2.bind(var3)(var1);
                    var2 = var3.map;
                    var1 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var0 = var0.launchId;
                        return var0;
                    };
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.filter;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var0 = 100;
                    var3 = var3[var0];
                    var0 = undefined;
                    var0 = var4.bind(var0)(var3);
                    var0 = var0.isNotNullish;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var79 = var21.bind(var22)(var20, var17, var19);
                var17 = var10[var2];
                var21 = var7.bind(var3)(var17);
                var20 = var21.useStateFromStoresArray;
                var19 = new Array(2);
                var19[0] = var1;
                var17 = _closure1_slot54;
                var19[1] = var17;
                var17 = function() { // Environment: var0
                    _fun89300: for (var _fun89300_ip = 0;;) switch (_fun89300_ip) {
                        case 0:
                            var0 = new Array(0);
                            var _closure3_slot0 = var0;
                            var5 = function(arg0) { // Original name: _loop, environment: var1
                                _fun89301: for (var _fun89301_ip = 0;;) switch (_fun89301_ip) {
                                    case 0:
                                        var4 = arg0;
                                        var _closure4_slot0 = var4;
                                        var3 = _closure1_slot54;
                                        var2 = var3.findActivity;
                                        var5 = var4.userIds;
                                        var1 = var5.values;
                                        var5 = var1.bind(var5)();
                                        var1 = var5.next;
                                        var1 = var1.bind(var5)();
                                        var1 = var1.value;
                                        var0 = function(arg0) { // Environment: var0
                                            var0 = arg0;
                                            var1 = var0.application_id;
                                            var0 = _closure4_slot0;
                                            var0 = var0.applicationId;
                                            var0 = var1 === var0;
                                            return var0;
                                        };
                                        var1 = var2.bind(var3)(var1, var0);
                                        var3 = null;
                                        var5 = var3 == var1;
                                        var0 = undefined;
                                        var2 = undefined;
                                        if (var5) {
                                            _fun89301_ip = 83;
                                            continue _fun89301
                                        }
                                    case 77:
                                        var2 = var1.details;
                                    case 83:
                                        if (!(var3 != var2)) {
                                            _fun89301_ip = 144;
                                            continue _fun89301
                                        }
                                    case 87:
                                        var3 = _closure3_slot0;
                                        var2 = var3.push;
                                        var7 = var4.launchId;
                                        var6 = var1.details;
                                        var1 = global;
                                        var1 = var1.HermesInternal;
                                        var5 = var1.concat;
                                        var4 = '';
                                        var1 = ':';
                                        var1 = var5.bind(var4)(var7, var1, var6);
                                        var1 = var2.bind(var3)(var1);
                                    case 144:
                                        return var0;
                                }
                            };
                            var2 = _closure1_slot80;
                            var4 = _closure1_slot13;
                            var3 = var4.getEmbeddedActivitiesForChannel;
                            var1 = _closure2_slot2;
                            var1 = var3.bind(var4)(var1);
                            var4 = undefined;
                            var3 = var2.bind(var4)(var1);
                            var2 = var3.bind(var4)();
                            var1 = var2.done;
                            if (var1) {
                                _fun89300_ip = 90;
                                continue _fun89300
                            }
                        case 65:
                            var1 = var2.value;
                            var1 = var5.bind(var4)(var1);
                            var6 = var3.bind(var4)();
                            var1 = var6.done;
                            var2 = var6;
                            if (!var1) {
                                _fun89300_ip = 65;
                                continue _fun89300
                            }
                        case 90:
                            return var0;
                    }
                };
                var77 = var20.bind(var21)(var19, var17);
                var17 = var10[var2];
                var21 = var7.bind(var3)(var17);
                var20 = var21.useStateFromStoresArray;
                var19 = new Array(1);
                var19[0] = var1;
                var17 = function() { // Environment: var0
                    var0 = global;
                    var2 = var0.Set;
                    var3 = var2.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var2
                        }
                    });
                    var6 = var3;
                    var2 = new var6[var2](var5);
                    var2 = var2 instanceof Object ? var2 : var3;
                    var _closure3_slot0 = var2;
                    var4 = _closure1_slot13;
                    var3 = var4.getEmbeddedActivitiesByChannel;
                    var4 = var3.bind(var4)();
                    var3 = var4.forEach;
                    var1 = function(arg0, arg1) { // Environment: var1
                        var2 = arg0;
                        var1 = arg1;
                        var _closure4_slot0 = var1;
                        var1 = var2.forEach;
                        var0 = function(arg0) { // Environment: var0
                            var0 = arg0;
                            var2 = var0.userIds;
                            var1 = var2.forEach;
                            var0 = function(arg0) { // Environment: var0
                                var2 = _closure3_slot0;
                                var1 = var2.add;
                                var6 = _closure4_slot0;
                                var0 = global;
                                var0 = var0.HermesInternal;
                                var5 = var0.concat;
                                var4 = '';
                                var3 = ':';
                                var0 = arg0;
                                var0 = var5.bind(var4)(var6, var3, var0);
                                var0 = var1.bind(var2)(var0);
                                var0 = undefined;
                                return var0;
                            };
                            var0 = var1.bind(var2)(var0);
                            var0 = undefined;
                            return var0;
                        };
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    var1 = var3.bind(var4)(var1);
                    var1 = var0.Array;
                    var0 = var1.from;
                    var0 = var0.bind(var1)(var2);
                    return var0;
                };
                var78 = var20.bind(var21)(var19, var17);
                var17 = var10[var2];
                var20 = var7.bind(var3)(var17);
                var19 = var20.useStateFromStoresArray;
                var17 = new Array(1);
                var17[0] = var1;
                var1 = function() { // Environment: var0
                    _fun89307: for (var _fun89307_ip = 0;;) switch (_fun89307_ip) {
                        case 0:
                            var0 = new Array(0);
                            var2 = _closure1_slot80;
                            var3 = _closure1_slot13;
                            var1 = var3.getLaunchStates;
                            var1 = var1.bind(var3)();
                            var8 = undefined;
                            var7 = var2.bind(var8)(var1);
                            var2 = var7.bind(var8)();
                            var1 = var2.done;
                            var6 = 0;
                            var5 = null;
                            var4 = 2;
                            var3 = 1;
                            if (var1) {
                                _fun89307_ip = 148;
                                continue _fun89307
                            }
                        case 54:
                            var10 = var2.value;
                            var1 = _closure1_slot3;
                            var1 = var1.bind(var8)(var10, var4);
                            var10 = var1[var6];
                            var1 = var1[var3];
                            var10 = var1.isLaunching;
                            if (!var10) {
                                _fun89307_ip = 96;
                                continue _fun89307
                            }
                        case 86:
                            var11 = var1.componentId;
                            var10 = var5 != var11;
                        case 96:
                            if (!var10) {
                                _fun89307_ip = 114;
                                continue _fun89307
                            }
                        case 99:
                            var11 = var1.componentId;
                            var11 = var11.length;
                            var10 = var11 > var6;
                        case 114:
                            if (!var10) {
                                _fun89307_ip = 133;
                                continue _fun89307
                            }
                        case 117:
                            var10 = var0.push;
                            var1 = var1.componentId;
                            var1 = var10.bind(var0)(var1);
                        case 133:
                            var10 = var7.bind(var8)();
                            var1 = var10.done;
                            var2 = var10;
                            if (!var1) {
                                _fun89307_ip = 54;
                                continue _fun89307
                            }
                        case 148:
                            return var0;
                    }
                };
                var80 = var19.bind(var20)(var17, var1);
                var1 = var10[var2];
                var20 = var7.bind(var3)(var1);
                var19 = var20.useStateFromStores;
                var1 = _closure1_slot30;
                var17 = new Array(1);
                var17[0] = var1;
                var1 = function() { // Environment: var0
                    var1 = _closure1_slot30;
                    var0 = var1.getMediaPostEmbeds;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var75 = var19.bind(var20)(var17, var1);
                var1 = var10[var2];
                var21 = var7.bind(var3)(var1);
                var20 = var21.useStateFromStores;
                var1 = _closure1_slot27;
                var19 = new Array(1);
                var19[0] = var1;
                var17 = function() { // Environment: var0
                    var1 = _closure1_slot27;
                    var0 = var1.getGuildTemplates;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var1 = new Array(0);
                var74 = var20.bind(var21)(var19, var17, var1);
                var1 = var10[var2];
                var21 = var7.bind(var3)(var1);
                var20 = var21.useStateFromStores;
                var1 = _closure1_slot16;
                var19 = new Array(1);
                var19[0] = var1;
                var17 = function() { // Environment: var0
                    var1 = _closure1_slot16;
                    var0 = var1.getBuildOverrides;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var1 = new Array(0);
                var73 = var20.bind(var21)(var19, var17, var1);
                var1 = 104;
                var1 = var10[var1];
                var17 = var7.bind(var3)(var1);
                var1 = var17.useCodedLinksExperimentEmbeds;
                var72 = var1.bind(var17)();
                var1 = 105;
                var1 = var10[var1];
                var19 = var7.bind(var3)(var1);
                var17 = var19.useQuests;
                var1 = {
                    'fetchPolicy': 'cache-or-network',
                    'callerSource': 'messages_native'
                };
                var1 = var17.bind(var19)(var1);
                var71 = var1.quests;
                var70 = var1.isFetchingCurrentQuests;
                var17 = var81.filter;
                var1 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var1 = var0.type;
                    var0 = _closure1_slot71;
                    var0 = var0.PREMIUM_REFERRAL;
                    var0 = var1 === var0;
                    return var0;
                };
                var19 = var17.bind(var81)(var1);
                var17 = var19.map;
                var1 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.referralTrialOfferId;
                    return var0;
                };
                var19 = var17.bind(var19)(var1);
                var17 = var19.filter;
                var1 = 100;
                var1 = var10[var1];
                var1 = var7.bind(var3)(var1);
                var1 = var1.isNotNullish;
                var1 = var17.bind(var19)(var1);
                var _closure2_slot6 = var1;
                var1 = var10[var2];
                var20 = var7.bind(var3)(var1);
                var19 = var20.useStateFromStoresArray;
                var1 = _closure1_slot34;
                var17 = new Array(1);
                var17[0] = var1;
                var1 = function() { // Environment: var0
                    var2 = _closure2_slot6;
                    var1 = var2.map;
                    var0 = function(arg0) { // Environment: var0
                        _fun89314: for (var _fun89314_ip = 0;;) switch (_fun89314_ip) {
                            case 0:
                                var2 = _closure1_slot34;
                                var1 = var2.getRelevantUserTrialOffer;
                                var0 = arg0;
                                var1 = var1.bind(var2)(var0);
                                var0 = null;
                                var2 = var0 == var1;
                                var0 = undefined;
                                if (var2) {
                                    _fun89314_ip = 37;
                                    continue _fun89314
                                }
                            case 32:
                                var0 = var1.id;
                            case 37:
                                return var0;
                        }
                    };
                    var2 = var1.bind(var2)(var0);
                    var1 = var2.filter;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var0 = 100;
                    var3 = var3[var0];
                    var0 = undefined;
                    var0 = var4.bind(var0)(var3);
                    var0 = var0.isNotNullish;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var20 = var19.bind(var20)(var17, var1);
                var1 = 106;
                var1 = var10[var1];
                var19 = var7.bind(var3)(var1);
                var17 = var19.useTrialOffer;
                var1 = _closure1_slot73;
                var19 = var17.bind(var19)(var1);
                var1 = var10[var2];
                var22 = var7.bind(var3)(var1);
                var21 = var22.useStateFromStores;
                var1 = _closure1_slot59;
                var17 = new Array(1);
                var17[0] = var1;
                var1 = function() { // Environment: var0
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 107;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.isPremiumExactly;
                    var4 = _closure1_slot59;
                    var1 = var4.getCurrentUser;
                    var1 = var1.bind(var4)();
                    var0 = _closure1_slot74;
                    var0 = var0.TIER_2;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var17 = var21.bind(var22)(var17, var1);
                var1 = var10[var2];
                var24 = var7.bind(var3)(var1);
                var23 = var24.useStateFromStores;
                var1 = _closure1_slot44;
                var22 = new Array(1);
                var22[0] = var1;
                var21 = new Array(1);
                var21[0] = var92;
                var1 = function() { // Environment: var0
                    var2 = _closure1_slot44;
                    var1 = var2.getEditingMessageId;
                    var0 = _closure2_slot2;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var69 = var23.bind(var24)(var22, var1, var21);
                var1 = var10[var2];
                var24 = var7.bind(var3)(var1);
                var23 = var24.useStateFromStores;
                var1 = _closure1_slot36;
                var22 = new Array(1);
                var22[0] = var1;
                var21 = new Array(1);
                var21[0] = var92;
                var1 = function() { // Environment: var0
                    _fun89317: for (var _fun89317_ip = 0;;) switch (_fun89317_ip) {
                        case 0:
                            var2 = _closure1_slot36;
                            var1 = var2.getPendingReply;
                            var0 = _closure2_slot2;
                            var1 = var1.bind(var2)(var0);
                            var0 = null;
                            var2 = var0 == var1;
                            var0 = undefined;
                            if (var2) {
                                _fun89317_ip = 46;
                                continue _fun89317
                            }
                        case 36:
                            var1 = var1.message;
                            var0 = var1.id;
                        case 46:
                            return var0;
                    }
                };
                var68 = var23.bind(var24)(var22, var1, var21);
                var1 = var10[var2];
                var24 = var7.bind(var3)(var1);
                var23 = var24.useStateFromStores;
                var1 = _closure1_slot56;
                var22 = new Array(1);
                var22[0] = var1;
                var21 = new Array(1);
                var21[0] = var92;
                var1 = function() { // Environment: var0
                    var2 = _closure1_slot56;
                    var1 = var2.getOldestUnreadMessageId;
                    var0 = _closure2_slot2;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var67 = var23.bind(var24)(var22, var1, var21);
                var1 = var10[var2];
                var24 = var7.bind(var3)(var1);
                var23 = var24.useStateFromStores;
                var1 = _closure1_slot49;
                var22 = new Array(1);
                var22[0] = var1;
                var21 = new Array(1);
                var21[0] = var94;
                var1 = function() { // Environment: var0
                    _fun89319: for (var _fun89319_ip = 0;;) switch (_fun89319_ip) {
                        case 0:
                            var2 = _closure2_slot3;
                            var0 = null;
                            var0 = var0 != var2;
                            if (!var0) {
                                _fun89319_ip = 38;
                                continue _fun89319
                            }
                        case 16:
                            var3 = _closure1_slot49;
                            var2 = var3.canChatInGuild;
                            var1 = _closure2_slot3;
                            var0 = var2.bind(var3)(var1);
                        case 38:
                            return var0;
                    }
                };
                var66 = var23.bind(var24)(var22, var1, var21);
                var1 = var10[var2];
                var24 = var7.bind(var3)(var1);
                var23 = var24.useStateFromStores;
                var1 = _closure1_slot53;
                var22 = new Array(1);
                var22[0] = var1;
                var21 = new Array(1);
                var21[0] = var6;
                var1 = function() { // Environment: var0
                    var3 = _closure1_slot53;
                    var2 = var3.can;
                    var0 = _closure1_slot72;
                    var1 = var0.SEND_MESSAGES;
                    var0 = _closure2_slot0;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var65 = var23.bind(var24)(var22, var1, var21);
                var1 = 108;
                var1 = var10[var1];
                var1 = var15.bind(var3)(var1);
                var64 = var1.bind(var3)(var92);
                var1 = var10[var2];
                var23 = var7.bind(var3)(var1);
                var22 = var23.useStateFromStores;
                var1 = _closure1_slot60;
                var21 = new Array(1);
                var21[0] = var1;
                var15 = new Array(1);
                var15[0] = var93;
                var1 = function() { // Environment: var0
                    var3 = _closure1_slot60;
                    var2 = var3.getUserVoiceChannelId;
                    var1 = _closure1_slot69;
                    var0 = _closure2_slot5;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var63 = var22.bind(var23)(var21, var1, var15);
                var1 = var10[var2];
                var23 = var7.bind(var3)(var1);
                var22 = var23.useStateFromStores;
                var1 = _closure1_slot55;
                var21 = new Array(1);
                var21[0] = var1;
                var15 = function() { // Environment: var0
                    var1 = _closure1_slot55;
                    var0 = var1.getChannelId;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var1 = new Array(0);
                var62 = var22.bind(var23)(var21, var15, var1);
                var1 = var10[var2];
                var24 = var7.bind(var3)(var1);
                var23 = var24.useStateFromStores;
                var1 = _closure1_slot37;
                var22 = new Array(1);
                var22[0] = var1;
                var21 = new Array(1);
                var21[0] = var6;
                var15 = function() { // Environment: var0
                    _fun89323: for (var _fun89323_ip = 0;;) switch (_fun89323_ip) {
                        case 0:
                            var0 = _closure1_slot67;
                            var3 = var0.THREADS;
                            var2 = var3.has;
                            var0 = _closure2_slot0;
                            var0 = var0.type;
                            var2 = var2.bind(var3)(var0);
                            var3 = null;
                            var0 = null;
                            if (!var2) {
                                _fun89323_ip = 116;
                                continue _fun89323
                            }
                        case 42:
                            var2 = _closure2_slot0;
                            var2 = var2.parent_id;
                            var2 = var3 != var2;
                            var0 = null;
                            if (!var2) {
                                _fun89323_ip = 116;
                                continue _fun89323
                            }
                        case 61:
                            var3 = _closure1_slot37;
                            var2 = var3.getMessageByReference;
                            var1 = {};
                            var4 = _closure2_slot0;
                            var5 = var4.parent_id;
                            var1.channel_id = var5;
                            var5 = var4.id;
                            var1.message_id = var5;
                            var4 = var4.guild_id;
                            var1.guild_id = var4;
                            var1 = var2.bind(var3)(var1);
                            var0 = var1.message;
                        case 116:
                            return var0;
                    }
                };
                var23 = var23.bind(var24)(var22, var15, var21);
                var15 = var10[var2];
                var25 = var7.bind(var3)(var15);
                var24 = var25.useStateFromStoresObject;
                var15 = _closure1_slot45;
                var22 = new Array(1);
                var22[0] = var15;
                var21 = function() { // Environment: var0
                    var0 = {};
                    var2 = _closure1_slot45;
                    var1 = var2.getResolvingCodes;
                    var1 = var1.bind(var2)();
                    var0.resolvingGiftCodes = var1;
                    var1 = var2.getResolvedCodes;
                    var1 = var1.bind(var2)();
                    var0.resolvedGiftCodes = var1;
                    var1 = var2.getAcceptingCodes;
                    var1 = var1.bind(var2)();
                    var0.acceptingGiftCodes = var1;
                    return var0;
                };
                var15 = new Array(0);
                var15 = var24.bind(var25)(var22, var21, var15);
                var61 = var15.resolvingGiftCodes;
                var60 = var15.resolvedGiftCodes;
                var59 = var15.acceptingGiftCodes;
                var15 = var10[var2];
                var25 = var7.bind(var3)(var15);
                var24 = var25.useStateFromStores;
                var15 = _closure1_slot18;
                var22 = new Array(1);
                var22[0] = var15;
                var21 = new Array(1);
                var21[0] = var92;
                var15 = function() { // Environment: var0
                    var2 = _closure1_slot18;
                    var1 = var2.getParticipants;
                    var0 = _closure2_slot2;
                    var0 = var1.bind(var2)(var0);
                    var0 = var0.length;
                    return var0;
                };
                var58 = var24.bind(var25)(var22, var15, var21);
                var15 = var10[var2];
                var25 = var7.bind(var3)(var15);
                var24 = var25.useStateFromStores;
                var15 = _closure1_slot58;
                var22 = new Array(1);
                var22[0] = var15;
                var21 = new Array(1);
                var21[0] = var92;
                var15 = function() { // Environment: var0
                    var2 = _closure1_slot58;
                    var1 = var2.getFiles;
                    var0 = _closure2_slot2;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var57 = var24.bind(var25)(var22, var15, var21);
                var15 = var10[var2];
                var24 = var7.bind(var3)(var15);
                var22 = var24.useStateFromStores;
                var21 = new Array(1);
                var21[0] = var1;
                var15 = new Array(1);
                var15[0] = var92;
                var1 = function() { // Environment: var0
                    var2 = _closure1_slot37;
                    var1 = var2.getReplyIdsForChannel;
                    var0 = _closure2_slot2;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var56 = var22.bind(var24)(var21, var1, var15);
                var1 = var10[var2];
                var24 = var7.bind(var3)(var1);
                var22 = var24.useStateFromStoresObject;
                var1 = _closure1_slot12;
                var21 = new Array(1);
                var21[0] = var1;
                var15 = function() { // Environment: var0
                    var0 = {};
                    var1 = _closure1_slot12;
                    var2 = var1.useReducedMotion;
                    var0.useReducedMotion = var2;
                    var2 = var1.roleStyle;
                    var0.roleStyle = var2;
                    var2 = var1.saturation;
                    var0.saturation = var2;
                    var1 = var1.displayNameStylesEnabled;
                    var0.displayNameStylesEnabled = var1;
                    return var0;
                };
                var1 = new Array(0);
                var1 = var22.bind(var24)(var21, var15, var1);
                var55 = var1.useReducedMotion;
                var95 = var1.roleStyle;
                var106 = var1.saturation;
                var54 = var1.displayNameStylesEnabled;
                var1 = var10[var2];
                var24 = var7.bind(var3)(var1);
                var22 = var24.useStateFromStores;
                var1 = _closure1_slot40;
                var21 = new Array(1);
                var21[0] = var1;
                var15 = new Array(1);
                var15[0] = var92;
                var1 = function() { // Environment: var0
                    var2 = _closure1_slot40;
                    var1 = var2.getChannelThreadsVersion;
                    var0 = _closure2_slot2;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var53 = var22.bind(var24)(var21, var1, var15);
                var1 = var10[var2];
                var22 = var7.bind(var3)(var1);
                var21 = var22.useStateFromStoresObject;
                var1 = _closure1_slot29;
                var15 = new Array(1);
                var15[0] = var1;
                var1 = function() { // Environment: var0
                    var1 = _closure1_slot29;
                    var0 = var1.getMessageInteractionStates;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var47 = var21.bind(var22)(var15, var1);
                var1 = var10[var2];
                var25 = var7.bind(var3)(var1);
                var24 = var25.useStateFromStores;
                var1 = _closure1_slot28;
                var22 = new Array(1);
                var22[0] = var1;
                var1 = 109;
                var1 = var10[var1];
                var1 = var7.bind(var3)(var1);
                var111 = var1.isVersionEqual;
                var113 = function() { // Environment: var0
                    var2 = _closure1_slot28;
                    var0 = var2.getInteractionComponentStates;
                    var1 = var0.bind(var2)();
                    var0 = new Array(2);
                    var0[0] = var1;
                    var1 = var2.getInteractionComponentStateVersion;
                    var1 = var1.bind(var2)();
                    var0[1] = var1;
                    return var0;
                };
                var112 = new Array(0);
                var115 = var25;
                var114 = var22;
                var1 = var115[var24](var114, var113, var112, var111, var110);
                var1 = var13.bind(var3)(var1, var9);
                var46 = var1[var11];
                var45 = var1[var4];
                var1 = var10[var2];
                var15 = var7.bind(var3)(var1);
                var13 = var15.useStateFromStores;
                var1 = _closure1_slot21;
                var11 = new Array(1);
                var11[0] = var1;
                var1 = function() { // Environment: var0
                    var0 = _closure1_slot21;
                    var0 = var0.hasLoadedExperiments;
                    return var0;
                };
                var43 = var13.bind(var15)(var11, var1);
                var1 = 110;
                var1 = var10[var1];
                var13 = var7.bind(var3)(var1);
                var11 = var13.useIsSpamMessageRequest;
                var1 = var6.id;
                var88 = var11.bind(var13)(var1);
                var1 = 111;
                var1 = var10[var1];
                var10 = var7.bind(var3)(var1);
                var7 = var10.useIsMessageRequest;
                var1 = var6.id;
                var89 = var7.bind(var10)(var1);
                var44 = var18 != var81;
                if (!var44) {
                    _fun89280_ip = 2245;
                    continue _fun89280
                }
            case 2227:
                var1 = var81.ready;
                if (var1) {
                    _fun89280_ip = 2242;
                    continue _fun89280
                }
            case 2236:
                var1 = var81.cached;
            case 2242:
                var44 = var1;
            case 2245:
                var91 = var18 != var81;
                if (!var91) {
                    _fun89280_ip = 2258;
                    continue _fun89280
                }
            case 2252:
                var91 = var81.cached;
            case 2258:
                var90 = var18 != var81;
                if (!var90) {
                    _fun89280_ip = 2271;
                    continue _fun89280
                }
            case 2265:
                var90 = var81.ready;
            case 2271:
                if (!var90) {
                    _fun89280_ip = 2283;
                    continue _fun89280
                }
            case 2274:
                var1 = var81.loadingMore;
                var90 = !var1;
            case 2283:
                var7 = _closure1_slot0;
                var10 = _closure1_slot2;
                var1 = var10[var2];
                var15 = var7.bind(var3)(var1);
                var13 = var15.useStateFromStores;
                var1 = _closure1_slot26;
                var11 = new Array(1);
                var11[0] = var1;
                var1 = function() { // Environment: var0
                    var1 = _closure1_slot26;
                    var0 = var1.getRsvpVersion;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var52 = var13.bind(var15)(var11, var1);
                var1 = var10[var2];
                var15 = var7.bind(var3)(var1);
                var13 = var15.useStateFromStores;
                var1 = _closure1_slot25;
                var11 = new Array(1);
                var11[0] = var1;
                var1 = function() { // Environment: var0
                    var1 = _closure1_slot25;
                    var0 = var1.getMessagesVersion;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var51 = var13.bind(var15)(var11, var1);
                var1 = var10[var2];
                var21 = var7.bind(var3)(var1);
                var15 = var21.useStateFromStores;
                var1 = _closure1_slot46;
                var13 = new Array(1);
                var13[0] = var1;
                var11 = function() { // Environment: var0
                    var1 = _closure1_slot46;
                    var0 = var1.getCommunicationDisabledVersion;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var50 = var15.bind(var21)(var13, var11);
                var11 = var10[var2];
                var21 = var7.bind(var3)(var11);
                var15 = var21.useStateFromStoresObject;
                var13 = new Array(1);
                var13[0] = var1;
                var11 = new Array(2);
                var11[0] = var94;
                var11[1] = var81;
                var1 = function() { // Environment: var0
                    _fun89336: for (var _fun89336_ip = 0;;) switch (_fun89336_ip) {
                        case 0:
                            var0 = _closure2_slot3;
                            var3 = null;
                            if (!(var3 != var0)) {
                                _fun89336_ip = 52;
                                continue _fun89336
                            }
                        case 15:
                            var0 = _closure2_slot1;
                            if (!(var3 != var0)) {
                                _fun89336_ip = 52;
                                continue _fun89336
                            }
                        case 23:
                            var0 = {};
                            var _closure3_slot0 = var0;
                            var3 = _closure2_slot1;
                            var2 = var3.forEach;
                            var1 = function(arg0) { // Environment: var1
                                _fun89337: for (var _fun89337_ip = 0;;) switch (_fun89337_ip) {
                                    case 0:
                                        var1 = arg0;
                                        var4 = var1.author;
                                        var2 = null;
                                        var5 = var2 == var4;
                                        var0 = undefined;
                                        var3 = undefined;
                                        if (var5) {
                                            _fun89337_ip = 27;
                                            continue _fun89337
                                        }
                                    case 22:
                                        var3 = var4.id;
                                    case 27:
                                        if (!(var2 != var3)) {
                                            _fun89337_ip = 94;
                                            continue _fun89337
                                        }
                                    case 31:
                                        var6 = _closure1_slot46;
                                        var5 = var6.getMember;
                                        var4 = _closure2_slot3;
                                        var3 = var1.author;
                                        var3 = var3.id;
                                        var3 = var5.bind(var6)(var4, var3);
                                        if (!(var2 != var3)) {
                                            _fun89337_ip = 94;
                                            continue _fun89337
                                        }
                                    case 72:
                                        var2 = _closure3_slot0;
                                        var1 = var1.author;
                                        var1 = var1.id;
                                        var2[var1] = var3;
                                    case 94:
                                        return var0;
                                }
                            };
                            var1 = var2.bind(var3)(var1);
                            return var0;
                        case 52:
                            var0 = {};
                            return var0;
                    }
                };
                var49 = var15.bind(var21)(var13, var1, var11);
                var1 = var10[var2];
                var15 = var7.bind(var3)(var1);
                var13 = var15.useStateFromStores;
                var1 = _closure1_slot53;
                var11 = new Array(1);
                var11[0] = var1;
                var1 = function() { // Environment: var0
                    var3 = _closure1_slot53;
                    var2 = var3.can;
                    var0 = _closure1_slot72;
                    var1 = var0.MODERATE_MEMBERS;
                    var0 = _closure2_slot4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var40 = var13.bind(var15)(var11, var1);
                var1 = 112;
                var1 = var10[var1];
                var10 = var7.bind(var3)(var1);
                var7 = var10.useCurrentUserCommunicationDisabled;
                var11 = var18 == var14;
                var1 = undefined;
                if (var11) {
                    _fun89280_ip = 2528;
                    continue _fun89280
                }
            case 2523:
                var1 = var14.id;
            case 2528:
                var7 = var7.bind(var10)(var1);
                var1 = _closure1_slot3;
                var1 = var1.bind(var3)(var7, var9);
                var41 = var1[var4];
                var7 = _closure1_slot0;
                var108 = _closure1_slot2;
                var1 = var108[var2];
                var10 = var7.bind(var3)(var1);
                var9 = var10.useStateFromStores;
                var1 = _closure1_slot41;
                var4 = new Array(1);
                var4[0] = var1;
                var1 = function() { // Environment: var0
                    var0 = _closure1_slot41;
                    var0 = var0.locale;
                    return var0;
                };
                var39 = var9.bind(var10)(var4, var1);
                var1 = _closure1_slot1;
                var4 = 113;
                var4 = var108[var4];
                var11 = var1.bind(var3)(var4);
                var10 = var11.useExperiment;
                var9 = {};
                var4 = '41de6d_2';
                var9.location = var4;
                var4 = {};
                var13 = false;
                var4.autoTrackExposure = var13;
                var4 = var10.bind(var11)(var9, var4);
                var38 = var4.paymentsBlocked;
                var4 = var108[var2];
                var11 = var7.bind(var3)(var4);
                var10 = var11.useStateFromStores;
                var4 = _closure1_slot39;
                var9 = new Array(1);
                var9[0] = var4;
                var4 = function() { // Environment: var0
                    _fun89340: for (var _fun89340_ip = 0;;) switch (_fun89340_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var0 = var2.isForumPost;
                            var0 = var0.bind(var2)();
                            var2 = !var0;
                            var0 = !var2;
                            if (var2) {
                                _fun89340_ip = 48;
                                continue _fun89340
                            }
                        case 26:
                            var3 = _closure1_slot39;
                            var2 = var3.hasJoined;
                            var1 = _closure2_slot2;
                            var0 = var2.bind(var3)(var1);
                        case 48:
                            return var0;
                    }
                };
                var37 = var10.bind(var11)(var9, var4);
                var4 = var108[var2];
                var11 = var7.bind(var3)(var4);
                var10 = var11.useStateFromStores;
                var4 = _closure1_slot31;
                var9 = new Array(1);
                var9[0] = var4;
                var4 = function() { // Environment: var0
                    var2 = _closure1_slot31;
                    var1 = var2.shouldDisplayPrompt;
                    var0 = _closure2_slot2;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var36 = var10.bind(var11)(var9, var4);
                var4 = var108[var2];
                var11 = var7.bind(var3)(var4);
                var10 = var11.useStateFromStores;
                var4 = _closure1_slot35;
                var9 = new Array(1);
                var9[0] = var4;
                var4 = function() { // Environment: var0
                    var1 = _closure1_slot35;
                    var0 = var1.isEligible;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var34 = var10.bind(var11)(var9, var4);
                var4 = var108[var2];
                var11 = var7.bind(var3)(var4);
                var10 = var11.useStateFromStores;
                var4 = _closure1_slot17;
                var9 = new Array(1);
                var9[0] = var4;
                var4 = function() { // Environment: var0
                    var1 = _closure1_slot17;
                    var0 = var1.getLazyCacheStatus;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var35 = var10.bind(var11)(var9, var4);
                var4 = 91;
                var4 = var108[var4];
                var9 = var7.bind(var3)(var4);
                var4 = var9.useMessageJumpAndroidKeyboardHeight;
                var33 = var4.bind(var9)();
                var4 = 114;
                var4 = var108[var4];
                var4 = var1.bind(var3)(var4);
                var31 = var4.bind(var3)();
                var4 = 115;
                var4 = var108[var4];
                var9 = var7.bind(var3)(var4);
                var4 = var9.useChannelSummariesExperiment;
                var4 = var4.bind(var9)(var6);
                var _closure2_slot7 = var4;
                var9 = var108[var2];
                var13 = var7.bind(var3)(var9);
                var11 = var13.useStateFromStores;
                var9 = _closure1_slot38;
                var10 = new Array(1);
                var10[0] = var9;
                var9 = new Array(2);
                var9[0] = var4;
                var4 = var6.id;
                var9[1] = var4;
                var4 = function() { // Environment: var0
                    _fun89344: for (var _fun89344_ip = 0;;) switch (_fun89344_ip) {
                        case 0:
                            var2 = _closure2_slot7;
                            var0 = null;
                            if (!var2) {
                                _fun89344_ip = 39;
                                continue _fun89344
                            }
                        case 12:
                            var3 = _closure1_slot38;
                            var2 = var3.selectedSummary;
                            var1 = _closure2_slot0;
                            var1 = var1.id;
                            var0 = var2.bind(var3)(var1);
                        case 39:
                            return var0;
                    }
                };
                var32 = var11.bind(var13)(var10, var4, var9);
                var11 = _closure1_slot10;
                var10 = var11.useEffect;
                var4 = var6.id;
                var9 = new Array(5);
                var9[0] = var4;
                var4 = var81.hasMoreAfter;
                var9[1] = var4;
                var4 = var81.hasMoreBefore;
                var9[2] = var4;
                var4 = var81.length;
                var9[3] = var4;
                var4 = var81.ready;
                var9[4] = var4;
                var4 = function() { // Environment: var0
                    _fun89345: for (var _fun89345_ip = 0;;) switch (_fun89345_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var1 = var1.ready;
                            var1 = !var1;
                            if (var1) {
                                _fun89345_ip = 34;
                                continue _fun89345
                            }
                        case 19:
                            var2 = _closure2_slot1;
                            var3 = var2.length;
                            var2 = 0;
                            var1 = var2 !== var3;
                        case 34:
                            if (var1) {
                                _fun89345_ip = 47;
                                continue _fun89345
                            }
                        case 37:
                            var2 = _closure2_slot1;
                            var1 = var2.hasMoreBefore;
                        case 47:
                            if (var1) {
                                _fun89345_ip = 60;
                                continue _fun89345
                            }
                        case 50:
                            var2 = _closure2_slot1;
                            var1 = var2.hasMoreAfter;
                        case 60:
                            if (var1) {
                                _fun89345_ip = 121;
                                continue _fun89345
                            }
                        case 63:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 90;
                            var2 = var2[var1];
                            var1 = undefined;
                            var4 = var3.bind(var1)(var2);
                            var3 = var4.updateChannelDimensions;
                            var0 = _closure2_slot0;
                            var8 = var0.id;
                            var1 = 1;
                            var5 = 0;
                            var9 = var4;
                            var7 = var1;
                            var6 = var1;
                            var0 = var9[var3](var8, var7, var6, var5, var4);
                        case 121:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4 = var10.bind(var11)(var4, var9);
                var4 = 95;
                var9 = var108[var4];
                var13 = var7.bind(var3)(var9);
                var10 = var13.useShouldTrackAnnouncementMessageViews;
                var9 = {};
                var9.guild = var14;
                var9.channel = var6;
                var9.messages = var81;
                var9.isMessagesReady = var44;
                var14 = 'Messages';
                var9.location = var14;
                var30 = var10.bind(var13)(var9);
                var4 = var108[var4];
                var10 = var7.bind(var3)(var4);
                var9 = var10.useShouldTrackRichPresenceInviteEmbedViews;
                var4 = {};
                var4.messages = var81;
                var4.isMessagesReady = var44;
                var29 = var9.bind(var10)(var4);
                var4 = 116;
                var4 = var108[var4];
                var9 = var7.bind(var3)(var4);
                var4 = var9.useShouldDisplaySpoilerObscurity;
                var28 = var4.bind(var9)(var6);
                var4 = 117;
                var4 = var108[var4];
                var9 = var7.bind(var3)(var4);
                var4 = var9.useIsAgeVerified;
                var14 = var4.bind(var9)();
                var10 = var11.useEffect;
                var9 = new Array(2);
                var9[0] = var92;
                var9[1] = var94;
                var4 = function() { // Environment: var0
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 118;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var0 = var1.handleChannelSelect;
                    var0 = var0.bind(var1)();
                    var0 = function() { // Environment: var0
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 118;
                        var1 = var1[var0];
                        var0 = undefined;
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.handleChannelSelect;
                        var1 = var1.bind(var2)();
                        return var0;
                    };
                    return var0;
                };
                var4 = var10.bind(var11)(var4, var9);
                var4 = 119;
                var4 = var108[var4];
                var10 = var7.bind(var3)(var4);
                var9 = var10.useShouldDisableInteractiveComponents;
                var4 = var6.id;
                var27 = var9.bind(var10)(var4);
                var9 = _closure1_slot32;
                var4 = var6.id;
                var26 = var9.bind(var3)(var4);
                var9 = new Array(0);
                var _closure2_slot8 = var9;
                var10 = var81.forEach;
                var4 = function(arg0) { // Environment: var0
                    _fun89348: for (var _fun89348_ip = 0;;) switch (_fun89348_ip) {
                        case 0:
                            var0 = arg0;
                            var2 = var0.messageReference;
                            var1 = null;
                            var4 = var1 == var2;
                            var0 = undefined;
                            var3 = undefined;
                            if (var4) {
                                _fun89348_ip = 28;
                                continue _fun89348
                            }
                        case 22:
                            var3 = var2.message_id;
                        case 28:
                            if (!(var1 != var3)) {
                                _fun89348_ip = 49;
                                continue _fun89348
                            }
                        case 32:
                            var2 = _closure2_slot8;
                            var1 = var2.push;
                            var1 = var1.bind(var2)(var3);
                        case 49:
                            return var0;
                    }
                };
                var4 = var10.bind(var81)(var4);
                var4 = _closure1_slot33;
                var25 = var4.bind(var3)(var9);
                var4 = var108[var2];
                var13 = var7.bind(var3)(var4);
                var11 = var13.useStateFromStores;
                var4 = _closure1_slot22;
                var10 = new Array(1);
                var10[0] = var4;
                var9 = new Array(1);
                var9[0] = var92;
                var4 = function() { // Environment: var0
                    var2 = _closure1_slot22;
                    var1 = var2.getChannelFpInfo;
                    var0 = _closure2_slot2;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var24 = var11.bind(var13)(var10, var4, var9);
                var4 = 120;
                var4 = var108[var4];
                var4 = var1.bind(var3)(var4);
                var102 = var4.bind(var3)();
                var4 = 121;
                var4 = var108[var4];
                var4 = var1.bind(var3)(var4);
                var4 = var4.bind(var3)(var81);
                var22 = var4.unloadedContentEntryMessageIds;
                var21 = var4.unloadableContentEntryMessageIds;
                var4 = var108[var2];
                var11 = var7.bind(var3)(var4);
                var10 = var11.useStateFromStores;
                var109 = _closure1_slot59;
                var9 = new Array(1);
                var9[0] = var109;
                var4 = function() { // Environment: var0
                    _fun89350: for (var _fun89350_ip = 0;;) switch (_fun89350_ip) {
                        case 0:
                            var1 = _closure1_slot59;
                            var0 = var1.getCurrentUser;
                            var3 = var0.bind(var1)();
                            var0 = null;
                            var2 = var0 == var3;
                            var1 = undefined;
                            if (var2) {
                                _fun89350_ip = 37;
                                continue _fun89350
                            }
                        case 27:
                            var2 = var3.isStaff;
                            var1 = var2.bind(var3)();
                        case 37:
                            var0 = var0 != var1;
                            if (!var0) {
                                _fun89350_ip = 47;
                                continue _fun89350
                            }
                        case 44:
                            var0 = var1;
                        case 47:
                            return var0;
                    }
                };
                var105 = var10.bind(var11)(var9, var4);
                var4 = var108[var2];
                var11 = var7.bind(var3)(var4);
                var10 = var11.useStateFromStores;
                var4 = _closure1_slot24;
                var9 = new Array(1);
                var9[0] = var4;
                var4 = function() { // Environment: var0
                    var1 = _closure1_slot24;
                    var0 = var1.getVersion;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var48 = var10.bind(var11)(var9, var4);
                var4 = 122;
                var4 = var108[var4];
                var10 = var7.bind(var3)(var4);
                var9 = var10.useColorStore;
                var4 = function(arg0) { // Environment: var0
                    var0 = global;
                    var2 = var0.Object;
                    var1 = var2.keys;
                    var0 = arg0;
                    var0 = var0.palette;
                    var0 = var1.bind(var2)(var0);
                    var0 = var0.length;
                    return var0;
                };
                var15 = var9.bind(var10)(var4);
                var4 = var108[var2];
                var11 = var7.bind(var3)(var4);
                var10 = var11.useStateFromStores;
                var4 = _closure1_slot20;
                var9 = new Array(1);
                var9[0] = var4;
                var4 = function() { // Environment: var0
                    var2 = _closure1_slot20;
                    var1 = var2.getGuildEmoji;
                    var0 = _closure2_slot3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var13 = var10.bind(var11)(var9, var4);
                var4 = var108[var2];
                var11 = var7.bind(var3)(var4);
                var10 = var11.useStateFromStoresArray;
                var4 = _closure1_slot57;
                var9 = new Array(1);
                var9[0] = var4;
                var4 = function() { // Environment: var0
                    var4 = _closure1_slot57;
                    var1 = var4.getRemoteActivities;
                    var6 = var1.bind(var4)();
                    var2 = new Array(0);
                    var5 = 0;
                    var7 = var2;
                    var5 = arraySpread(var7, var6, var5);
                    var1 = var4.getHiddenActivities;
                    var6 = var1.bind(var4)();
                    var7 = var2;
                    var1 = arraySpread(var7, var6, var5);
                    var1 = var2.filter;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var0 = 100;
                    var3 = var3[var0];
                    var0 = undefined;
                    var0 = var4.bind(var0)(var3);
                    var0 = var0.isNotNullish;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var11 = var10.bind(var11)(var9, var4);
                var _closure2_slot9 = var11;
                var4 = var108[var2];
                var110 = var7.bind(var3)(var4);
                var10 = var110.useStateFromStoresObject;
                var4 = _closure1_slot61;
                var9 = new Array(1);
                var9[0] = var4;
                var4 = function() { // Environment: var0
                    var3 = _closure2_slot9;
                    var2 = var3.reduce;
                    var1 = function(arg0, arg1) { // Environment: var0
                        _fun89356: for (var _fun89356_ip = 0;;) switch (_fun89356_ip) {
                            case 0:
                                var0 = arg0;
                                var1 = arg1;
                                var2 = var1.application_id;
                                var3 = null;
                                if (!(var3 != var2)) {
                                    _fun89356_ip = 69;
                                    continue _fun89356
                                }
                            case 18:
                                var6 = _closure1_slot61;
                                var5 = var6.getState;
                                var4 = var1.application_id;
                                var2 = _closure1_slot65;
                                var2 = var2.JOIN;
                                var2 = var5.bind(var6)(var4, var2);
                                if (!(var3 != var2)) {
                                    _fun89356_ip = 67;
                                    continue _fun89356
                                }
                            case 57:
                                var1 = var1.application_id;
                                var0[var1] = var2;
                            case 67:
                                return var0;
                            case 69:
                                return var0;
                        }
                    };
                    var0 = {};
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var10 = var10.bind(var110)(var9, var4);
                var2 = var108[var2];
                var9 = var7.bind(var3)(var2);
                var4 = var9.useStateFromStores;
                var2 = new Array(1);
                var2[0] = var109;
                var0 = function() { // Environment: var0
                    _fun89357: for (var _fun89357_ip = 0;;) switch (_fun89357_ip) {
                        case 0:
                            var1 = _closure1_slot59;
                            var0 = var1.getCurrentUser;
                            var1 = var0.bind(var1)();
                            var0 = null;
                            var2 = var0 == var1;
                            var0 = undefined;
                            if (var2) {
                                _fun89357_ip = 33;
                                continue _fun89357
                            }
                        case 27:
                            var0 = var1.displayNameStyles;
                        case 33:
                            return var0;
                    }
                };
                var9 = var4.bind(var9)(var2, var0);
                var2 = _closure1_slot77;
                var4 = 123;
                var0 = var108[var4];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var4 = var108[var4];
                var4 = var7.bind(var3)(var4);
                var4 = var4.Profiles;
                var4 = var4.Messages;
                var0.profile = var4;
                var4 = var6.isThread;
                var6 = var4.bind(var6)();
                if (!var6) {
                    _fun89280_ip = 3690;
                    continue _fun89280
                }
            case 3651:
                var108 = _closure1_slot75;
                var7 = _closure1_slot1;
                var109 = _closure1_slot2;
                var4 = 124;
                var4 = var109[var4];
                var7 = var7.bind(var3)(var4);
                var4 = {};
                var109 = true;
                var4.absolute = var109;
                var6 = var108.bind(var3)(var7, var4);
            case 3690:
                var4 = new Array(2);
                var4[0] = var6;
                var7 = _closure1_slot75;
                var6 = _closure1_slot79;
                var5 = {};
                var108 = arg1;
                var5.ref = var108;
                var5.theme = var107;
                var5.saturation = var106;
                var5.isStaff = var105;
                var5.animateEmoji = var104;
                var5.animateStickers = var103;
                var5.containerWidth = var102;
                var5.gifAutoPlay = var101;
                var5.inlineAttachmentMedia = var100;
                var5.inlineEmbedMedia = var99;
                var5.renderEmbeds = var98;
                var5.renderReactions = var97;
                var5.developerMode = var96;
                var5.roleStyle = var95;
                var5.guildId = var94;
                var5.currentUserId = var93;
                var5.channelId = var92;
                var5.isMessagesReady = var44;
                var5.isMessagesCached = var91;
                var5.isMessagesAckable = var90;
                var5.isMessageRequest = var89;
                var5.isSpamMessageRequest = var88;
                var5.messageAuthorActivities = var87;
                var5.invites = var86;
                var5.appDirectoryEmbedApplications = var85;
                var5.invalidAppDirectoryEmbedApplicationIds = var84;
                var5.invalidApplicationIds = var83;
                var5.applicationAssetFetchingIds = var82;
                var5.messages = var81;
                var5.messagesWithActivitiesLaunching = var80;
                var5.activityInstanceIds = var79;
                var5.activityParticipants = var78;
                var5.activityInstancePresenceDetails = var77;
                var5.appDirectoryEmbedApplicationFetchStates = var76;
                var5.mediaPostPreviewEmbeds = var75;
                var5.guildTemplates = var74;
                var5.buildOverrides = var73;
                var5.experimentEmbeds = var72;
                var5.quests = var71;
                var5.isFetchingCurrentQuests = var70;
                var5.editingMessageId = var69;
                var5.replyingMessageId = var68;
                var5.oldestUnreadMessageId = var67;
                var5.canChat = var66;
                var5.canSendMessages = var65;
                var5.isCallActive = var64;
                var5.voiceStatePrivateChannelId = var63;
                var5.currentClientVoiceChannelId = var62;
                var5.resolvingGiftCodes = var61;
                var5.resolvedGiftCodes = var60;
                var5.acceptingGiftCodes = var59;
                var5.participantsLength = var58;
                var5.uploads = var57;
                var5.repliedIds = var56;
                var5.useReducedMotion = var55;
                var5.displayNameStylesEnabled = var54;
                var5.channelThreadsVersion = var53;
                var5.rsvpVersion = var52;
                var5.failedMessagesVersion = var51;
                var5.communicationDisabledVersion = var50;
                var5.messageAuthorMembers = var49;
                var5.forwardGuildsVersion = var48;
                var5.interactionStates = var47;
                var5.interactionComponentStates = var46;
                var5.interactionComponentStatesVersion = var45;
                if (!var43) {
                    _fun89280_ip = 4039;
                    continue _fun89280
                }
            case 4036:
                var43 = var44;
            case 4039:
                var5.hasLoadedExperiments = var43;
                var5.guildSystemChannelFlags = var42;
                var5.currentUserCommunicationDisabled = var41;
                var5.renderCommunicationDisabled = var40;
                var5.userSettingsLocale = var39;
                var5.paymentsBlocked = var38;
                var5.isFollowingForumPost = var37;
                var5.showMediaPostSharePrompt = var36;
                var5.showPushFeedback = var34;
                var34 = 'initializing';
                var34 = var34 !== var35;
                var5.cacheStoreLoaded = var34;
                var5.androidKeyboardHeight = var33;
                var5.selectedSummary = var32;
                var5.keyboardType = var31;
                var5.shouldTrackAnnouncementMessageViews = var30;
                var5.shouldTrackRichPresenceInviteEmbedViews = var29;
                var5.shouldObscureSpoiler = var28;
                var5.shouldDisableInteractiveComponents = var27;
                var5.channelPolls = var26;
                var5.messageReferencePolls = var25;
                var5.explicitMediaFalsePositiveInfo = var24;
                var5.threadStartingReferenceMessage = var23;
                var5.unloadedContentEntryMessageIds = var22;
                var5.unloadableContentEntryMessageIds = var21;
                var5.resolvedReferralTrialOfferIds = var20;
                var20 = var18 == var19;
                var18 = undefined;
                if (var20) {
                    _fun89280_ip = 4183;
                    continue _fun89280
                }
            case 4178:
                var18 = var19.id;
            case 4183:
                var5.referralTrialOfferId = var18;
                var5.isPremiumTier2User = var17;
                var5.activityInviteMessageIds = var16;
                var5.guildInviteColorsFetched = var15;
                var5.isAgeVerified = var14;
                var5.guildEmojis = var13;
                var5.enableSwipeActions = var12;
                var5.selfActivities = var11;
                var5.activityLaunchJoinStates = var10;
                var5.currentUserDisplayNameStyles = var9;
                var114 = var5;
                var113 = var8;
                var8 = copyDataProperties(var114, var113);
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 'MessagesConnected';
    var1.displayName = var3;
    var3 = 125;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/native/Messages.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 5, 6, 7, 15, 17, 18, 31, 27, 1298, 1371, 5613, 3413, 9741, 4322, 3902, 7854, 4693, 1590, 4214, 5302, 6628, 6480, 3293, 6486, 6781, 6483, 9742, 6595, 6759, 6600, 9743, 6490, 4225, 9197, 3052, 6431, 1676, 3155, 1216, 6491, 6818, 1672, 1410, 4192, 3282, 4207, 3583, 3050, 3567, 3477, 3901, 3479, 6572, 1613, 3480, 11554, 6475, 660, 1615, 33, 3, 9748, 9764, 6474, 9766, 9170, 9775, 22, 21, 4209, 9186, 9185, 9774, 478, 9189, 5186, 802, 6484, 9169, 3237, 9138, 1307, 1567, 795, 9190, 14, 9767, 3676, 628, 9031, 9759, 11551, 4023, 5214, 9191, 9612, 11552, 566, 5301, 1304, 1348, 9744, 9749, 9753, 5268, 6606, 3068, 6642, 8369, 9757, 9758, 6783, 6825, 3867, 9199, 9760, 4206, 9193, 6780, 9761, 9763, 6795, 11555, 8667, 2]);