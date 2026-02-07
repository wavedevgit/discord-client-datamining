// modules/messages/native/createChannelStream.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function arg0, arg1() {
        _fun78255: for (var _fun78255_ip = 0;;) switch (_fun78255_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun78255_ip = 46;
                    continue _fun78255
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun78255_ip = 55;
                    continue _fun78255
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun78255_ip = 345;
                    continue _fun78255
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun78255_ip = 323;
                    continue _fun78255
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun78255_ip = 283;
                    continue _fun78255
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun78255_ip = 270;
                    continue _fun78255
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
                    _fun78255_ip = 163;
                    continue _fun78255
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun78255_ip = 179;
                    continue _fun78255
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun78255_ip = 249;
                    continue _fun78255
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun78255_ip = 249;
                    continue _fun78255
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun78255_ip = 234;
                    continue _fun78255
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun78255_ip = 247;
                    continue _fun78255
                }
            case 234:
                var8 = _closure1_slot11;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun78255_ip = 265;
                continue _fun78255;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun78255_ip = 283;
                continue _fun78255;
            case 270:
                var6 = _closure1_slot11;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun78255_ip = 323;
                    continue _fun78255
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
                    _fun78255_ip = 330;
                    continue _fun78255
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun78256: for (var _fun78256_ip = 0;;) switch (_fun78256_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun78256_ip = 56;
                                continue _fun78256
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
                            _fun78256_ip = 67;
                            continue _fun78256;
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
    var _closure1_slot10 = var0;
    var0 = function arg0, arg1() {
        _fun78257: for (var _fun78257_ip = 0;;) switch (_fun78257_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun78257_ip = 23;
                    continue _fun78257
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun78257_ip = 33;
                    continue _fun78257
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
                    _fun78257_ip = 70;
                    continue _fun78257
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun78257_ip = 55;
                    continue _fun78257
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot11 = var0;
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
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.Changeset;
    var _closure1_slot6 = var6;
    var6 = var3.LoadingType;
    var _closure1_slot7 = var6;
    var6 = var3.RowType;
    var _closure1_slot8 = var6;
    var3 = var3.SeparatorType;
    var _closure1_slot9 = var3;
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/native/createChannelStream.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun78258: for (var _fun78258_ip = 0;;) switch (_fun78258_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.channel;
                var _closure2_slot0 = var1;
                var4 = var0.messages;
                var _closure2_slot1 = var4;
                var9 = var0.uploads;
                var1 = var0.oldestUnreadMessageId;
                var _closure2_slot2 = var1;
                var1 = var0.replyingMessageId;
                var _closure2_slot3 = var1;
                var1 = var0.currentUserId;
                var _closure2_slot4 = var1;
                var1 = var0.canAddNewReactions;
                var _closure2_slot5 = var1;
                var1 = var0.selectedSummary;
                var _closure2_slot6 = var1;
                var1 = var0.chatManager;
                var _closure2_slot7 = var1;
                var5 = var0.roleStyle;
                var _closure2_slot8 = var5;
                var6 = var0.forceRender;
                var _closure2_slot9 = var6;
                var1 = var0.updateMessageIds;
                var _closure2_slot10 = var1;
                var1 = var0.isResourceChannel;
                var _closure2_slot11 = var1;
                var0 = var0.unloadableContentEntryMessageIds;
                var _closure2_slot12 = var0;
                var7 = undefined;
                var _closure2_slot15 = var7;
                var _closure2_slot16 = var7;
                var _closure2_slot17 = var7;
                var _closure2_slot18 = var7;
                var0 = new Array(0);
                var _closure2_slot13 = var0;
                var11 = {};
                var _closure2_slot14 = var11;
                var8 = _closure1_slot10;
                var1 = var9.slice;
                var9 = var1.bind(var9)();
                var1 = var9.reverse;
                var1 = var1.bind(var9)();
                var10 = var8.bind(var7)(var1);
                var8 = var10.bind(var7)();
                var1 = var8.done;
                var9 = null;
                if (var1) {
                    _fun78258_ip = 286;
                    continue _fun78258
                }
            case 217:
                var12 = var8.value;
                var14 = _closure1_slot5;
                var13 = var14.getMessageForFile;
                var1 = var12.id;
                var1 = var13.bind(var14)(var1);
                var14 = var9 == var1;
                var13 = undefined;
                if (var14) {
                    _fun78258_ip = 257;
                    continue _fun78258
                }
            case 251:
                var13 = var1.nonce;
            case 257:
                if (!(var9 != var13)) {
                    _fun78258_ip = 271;
                    continue _fun78258
                }
            case 261:
                var1 = var1.nonce;
                var11[var1] = var12;
            case 271:
                var12 = var10.bind(var7)();
                var1 = var12.done;
                var8 = var12;
                if (!var1) {
                    _fun78258_ip = 217;
                    continue _fun78258
                }
            case 286:
                var1 = function arg0() {
                    _fun78259: for (var _fun78259_ip = 0;;) switch (_fun78259_ip) {
                        case 0:
                            var3 = arg0;
                            var1 = _closure2_slot0;
                            var0 = var1.isForumPost;
                            var0 = var0.bind(var1)();
                            var4 = var3.id;
                            var1 = _closure2_slot2;
                            var4 = var4 === var1;
                            if (var0) {
                                _fun78259_ip = 41;
                                continue _fun78259
                            }
                        case 36:
                            var0 = var4;
                            _fun78259_ip = 104;
                            continue _fun78259;
                        case 41:
                            var1 = var4;
                            if (!var4) {
                                _fun78259_ip = 101;
                                continue _fun78259
                            }
                        case 47:
                            var3 = var3.id;
                            var6 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var4 = 4;
                            var5 = var5[var4];
                            var4 = undefined;
                            var5 = var6.bind(var4)(var5);
                            var4 = var5.castChannelIdAsMessageId;
                            var2 = _closure2_slot0;
                            var2 = var2.id;
                            var2 = var4.bind(var5)(var2);
                            var1 = var3 !== var2;
                        case 101:
                            var0 = var1;
                        case 104:
                            return var0;
                    }
                };
                _closure2_slot15 = var1;
                var1 = new Array(0);
                _closure2_slot16 = var1;
                var8 = function arg0() {
                    _fun78260: for (var _fun78260_ip = 0;;) switch (_fun78260_ip) {
                        case 0:
                            var3 = arg0;
                            var2 = _closure2_slot16;
                            var1 = 0;
                            var2 = var2[var1];
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun78260_ip = 127;
                                continue _fun78260
                            }
                        case 22:
                            var1 = _closure2_slot15;
                            var6 = undefined;
                            var1 = var1.bind(var6)(var3);
                            if (var1) {
                                _fun78260_ip = 127;
                                continue _fun78260
                            }
                        case 36:
                            var4 = var2.length;
                            var1 = 1;
                            var1 = var4 - var1;
                            var5 = var2[var1];
                            var4 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var1 = 5;
                            var1 = var7[var1];
                            var4 = var4.bind(var6)(var1);
                            var1 = _closure2_slot0;
                            var1 = var4.bind(var6)(var1, var5, var3);
                            if (var1) {
                                _fun78260_ip = 102;
                                continue _fun78260
                            }
                        case 89:
                            var1 = var2.unshift;
                            var1 = var1.bind(var2)(var3);
                            _fun78260_ip = 150;
                            continue _fun78260;
                        case 102:
                            var4 = _closure2_slot16;
                            var2 = var4.unshift;
                            var1 = new Array(1);
                            var1[0] = var3;
                            var1 = var2.bind(var4)(var1);
                            _fun78260_ip = 150;
                            continue _fun78260;
                        case 127:
                            var2 = _closure2_slot16;
                            var1 = var2.unshift;
                            var0 = new Array(1);
                            var0[0] = var3;
                            var0 = var1.bind(var2)(var0);
                        case 150:
                            var0 = undefined;
                            return var0;
                    }
                };
                _closure2_slot17 = var8;
                var9 = var4.forEach;
                var8 = function(arg0) { // Environment: var2
                    _fun78261: for (var _fun78261_ip = 0;;) switch (_fun78261_ip) {
                        case 0:
                            var5 = arg0;
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 6;
                            var1 = var1[var0];
                            var0 = undefined;
                            var4 = var2.bind(var0)(var1);
                            var3 = var4.tryCreateInjectedMessage;
                            var1 = _closure2_slot0;
                            var1 = var3.bind(var4)(var5, var1);
                            var3 = null;
                            var4 = var3 != var1;
                            if (!var4) {
                                _fun78261_ip = 69;
                                continue _fun78261
                            }
                        case 56:
                            var7 = var1.position;
                            var6 = 'before';
                            var4 = var6 === var7;
                        case 69:
                            if (!var4) {
                                _fun78261_ip = 113;
                                continue _fun78261
                            }
                        case 72:
                            var6 = _closure2_slot17;
                            var4 = var1.message;
                            var4 = var6.bind(var0)(var4);
                            var6 = _closure2_slot2;
                            var4 = var5.id;
                            if (!(var6 === var4)) {
                                _fun78261_ip = 113;
                                continue _fun78261
                            }
                        case 99:
                            var4 = var1.message;
                            var4 = var4.id;
                            _closure2_slot2 = var4;
                        case 113:
                            var4 = _closure2_slot17;
                            var4 = var4.bind(var0)(var5);
                            var3 = var3 != var1;
                            if (!var3) {
                                _fun78261_ip = 142;
                                continue _fun78261
                            }
                        case 129:
                            var5 = var1.position;
                            var4 = 'after';
                            var3 = var4 === var5;
                        case 142:
                            if (!var3) {
                                _fun78261_ip = 159;
                                continue _fun78261
                            }
                        case 145:
                            var2 = _closure2_slot17;
                            var1 = var1.message;
                            var1 = var2.bind(var0)(var1);
                        case 159:
                            return var0;
                    }
                };
                var8 = var9.bind(var4)(var8);
                var8 = function arg0() {
                    _fun78262: for (var _fun78262_ip = 0;;) switch (_fun78262_ip) {
                        case 0:
                            var3 = arguments[1];
                            var0 = undefined;
                            if (!(var3 === var0)) {
                                _fun78262_ip = 11;
                                continue _fun78262
                            }
                        case 9:
                            var3 = false;
                        case 11:
                            var2 = _closure2_slot7;
                            var1 = var2.determineChangeType;
                            var0 = {};
                            var5 = arg0;
                            var0.message = var5;
                            var5 = _closure2_slot10;
                            var0.updateMessageIds = var5;
                            var4 = _closure2_slot9;
                            var0.forceRender = var4;
                            var0 = var1.bind(var2)(var0, var3);
                            return var0;
                    }
                };
                _closure2_slot18 = var8;
                var8 = var1.forEach;
                var2 = function(arg0, arg1) { // Environment: var2
                    _fun78263: for (var _fun78263_ip = 0;;) switch (_fun78263_ip) {
                        case 0:
                            var10 = arg0;
                            var3 = arg1;
                            var _closure3_slot0 = var10;
                            var0 = var10.length;
                            var19 = 1;
                            var0 = var0 - var19;
                            var8 = var10[var0];
                            var _closure3_slot1 = var8;
                            var0 = _closure2_slot16;
                            var0 = var0.length;
                            var0 = var0 - var19;
                            var11 = var3 === var0;
                            var6 = 0;
                            var0 = var6 === var3;
                            if (!var0) {
                                _fun78263_ip = 71;
                                continue _fun78263
                            }
                        case 61:
                            var1 = _closure2_slot1;
                            var0 = var1.hasMoreAfter;
                        case 71:
                            if (!var0) {
                                _fun78263_ip = 226;
                                continue _fun78263
                            }
                        case 77:
                            var2 = _closure2_slot13;
                            var1 = var2.push;
                            var0 = {};
                            var9 = _closure1_slot7;
                            var9 = var9.LOAD_AFTER;
                            var0.rowType = var9;
                            var9 = _closure2_slot9;
                            var12 = _closure1_slot6;
                            if (var9) {
                                _fun78263_ip = 125;
                                continue _fun78263
                            }
                        case 117:
                            var9 = var12.NOOP;
                            _fun78263_ip = 131;
                            continue _fun78263;
                        case 125:
                            var9 = var12.UPDATE;
                        case 131:
                            var0.changeType = var9;
                            var9 = _closure2_slot8;
                            var0.roleStyle = var9;
                            var9 = _closure2_slot1;
                            var9 = var9.loadingMore;
                            var0.isLoading = var9;
                            var14 = _closure1_slot0;
                            var15 = _closure1_slot2;
                            var7 = 7;
                            var9 = var15[var7];
                            var13 = undefined;
                            var9 = var14.bind(var13)(var9);
                            var12 = var9.intl;
                            var9 = var12.string;
                            var7 = var15[var7];
                            var7 = var14.bind(var13)(var7);
                            var7 = var7.t;
                            var7 = var7.XBlaiC;
                            var7 = var9.bind(var12)(var7);
                            var0.text = var7;
                            var0 = var1.bind(var2)(var0);
                        case 226:
                            var0 = _closure2_slot1;
                            var1 = var0.hasMoreBefore;
                            if (!var1) {
                                _fun78263_ip = 242;
                                continue _fun78263
                            }
                        case 239:
                            var1 = var11;
                        case 242:
                            var2 = _closure2_slot15;
                            var0 = undefined;
                            var2 = var2.bind(var0)(var8);
                            var7 = null;
                            var12 = null;
                            if (var11) {
                                _fun78263_ip = 282;
                                continue _fun78263
                            }
                        case 260:
                            var9 = _closure2_slot16;
                            var3 = var3 + var19;
                            var3 = var9[var3];
                            var3 = var3[var6];
                            var12 = var3.timestamp;
                        case 282:
                            if (var11) {
                                _fun78263_ip = 331;
                                continue _fun78263
                            }
                        case 285:
                            var6 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var3 = 8;
                            var3 = var9[var3];
                            var9 = var6.bind(var0)(var3);
                            var6 = var9.isSameDay;
                            var3 = var8.timestamp;
                            var6 = var6.bind(var9)(var3, var12);
                            var3 = true;
                            if (!var6) {
                                _fun78263_ip = 436;
                                continue _fun78263
                            }
                        case 331:
                            var9 = _closure2_slot0;
                            var6 = var9.isDM;
                            var6 = var6.bind(var9)();
                            if (!var6) {
                                _fun78263_ip = 361;
                                continue _fun78263
                            }
                        case 348:
                            var9 = _closure2_slot1;
                            var9 = var9.hasMoreBefore;
                            var6 = !var9;
                        case 361:
                            if (!var6) {
                                _fun78263_ip = 367;
                                continue _fun78263
                            }
                        case 364:
                            var6 = var11;
                        case 367:
                            if (var6) {
                                _fun78263_ip = 429;
                                continue _fun78263
                            }
                        case 370:
                            var12 = _closure2_slot0;
                            var9 = var12.isThread;
                            var9 = var9.bind(var12)();
                            if (!var9) {
                                _fun78263_ip = 404;
                                continue _fun78263
                            }
                        case 387:
                            var13 = _closure2_slot0;
                            var12 = var13.isForumPost;
                            var12 = var12.bind(var13)();
                            var9 = !var12;
                        case 404:
                            if (!var9) {
                                _fun78263_ip = 420;
                                continue _fun78263
                            }
                        case 407:
                            var12 = _closure2_slot1;
                            var12 = var12.hasMoreBefore;
                            var9 = !var12;
                        case 420:
                            if (!var9) {
                                _fun78263_ip = 426;
                                continue _fun78263
                            }
                        case 423:
                            var9 = var11;
                        case 426:
                            var6 = var9;
                        case 429:
                            var3 = false;
                            if (!var6) {
                                _fun78263_ip = 436;
                                continue _fun78263
                            }
                        case 434:
                            var3 = true;
                        case 436:
                            var4 = function arg0() {
                                _fun78264: for (var _fun78264_ip = 0;;) switch (_fun78264_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var3 = _closure1_slot10;
                                        var2 = _closure3_slot0;
                                        var6 = undefined;
                                        var5 = var3.bind(var6)(var2);
                                        var4 = var5.bind(var6)();
                                        var3 = var4.done;
                                        if (var3) {
                                            _fun78264_ip = 232;
                                            continue _fun78264
                                        }
                                    case 42:
                                        var11 = var4.value;
                                        var3 = _closure2_slot18;
                                        var8 = var3.bind(var6)(var11);
                                        var3 = _closure1_slot6;
                                        var3 = var3.NOOP;
                                        var3 = var8 !== var3;
                                        if (!var3) {
                                            _fun78264_ip = 93;
                                            continue _fun78264
                                        }
                                    case 73:
                                        var9 = var0.changeType;
                                        var8 = _closure1_slot6;
                                        var8 = var8.NOOP;
                                        var3 = var9 === var8;
                                    case 93:
                                        if (!var3) {
                                            _fun78264_ip = 112;
                                            continue _fun78264
                                        }
                                    case 96:
                                        var3 = _closure1_slot6;
                                        var3 = var3.UPDATE;
                                        var0.changeType = var3;
                                    case 112:
                                        var9 = var0.content;
                                        var8 = var9.unshift;
                                        var3 = {};
                                        var10 = _closure1_slot8;
                                        var10 = var10.MESSAGE;
                                        var3.rowType = var10;
                                        var10 = _closure1_slot6;
                                        var10 = var10.NOOP;
                                        var3.changeType = var10;
                                        var10 = _closure2_slot8;
                                        var3.roleStyle = var10;
                                        var3.message = var11;
                                        var12 = _closure2_slot0;
                                        var10 = var12.isSystemDM;
                                        var10 = var10.bind(var12)();
                                        var3.isSystemDM = var10;
                                        var10 = _closure3_slot1;
                                        var10 = var11 === var10;
                                        var3.isFirst = var10;
                                        var10 = _closure2_slot5;
                                        var3.canAddNewReactions = var10;
                                        var3 = var8.bind(var9)(var3);
                                        var8 = var5.bind(var6)();
                                        var3 = var8.done;
                                        var4 = var8;
                                        if (!var3) {
                                            _fun78264_ip = 42;
                                            continue _fun78264
                                        }
                                    case 232:
                                        var1 = _closure3_slot1;
                                        var3 = var1.id;
                                        var2 = _closure2_slot1;
                                        var2 = var2.revealedMessageId;
                                        var2 = var3 === var2;
                                        var0.revealed = var2;
                                        var1 = var1.id;
                                        var0.context = var1;
                                        return var0;
                                }
                            };
                            var11 = {
                                'roleStyle': null,
                                'message': null,
                                'isFirst': true,
                                'content': null,
                                'text': '',
                                'revealed': false
                            };
                            var6 = _closure2_slot8;
                            var11.roleStyle = var6;
                            var11.message = var8;
                            var18 = true;
                            var6 = new Array(0);
                            var11.content = var6;
                            var17 = false;
                            var9 = _closure2_slot13;
                            var6 = var9.length;
                            var6 = var6 - var19;
                            var6 = var9[var6];
                            var9 = var8.blocked;
                            if (var9) {
                                _fun78263_ip = 1531;
                                continue _fun78263
                            }
                        case 516:
                            var9 = var8.ignored;
                            if (var9) {
                                _fun78263_ip = 1295;
                                continue _fun78263
                            }
                        case 528:
                            var9 = _closure1_slot10;
                            var15 = var9.bind(var0)(var10);
                            var10 = var15.bind(var0)();
                            var9 = var10.done;
                            var14 = 11;
                            var13 = 9;
                            var12 = 10;
                            if (var9) {
                                _fun78263_ip = 1759;
                                continue _fun78263
                            }
                        case 564:
                            var23 = var10.value;
                            var28 = var23 !== var8;
                            var22 = _closure1_slot4;
                            var21 = var22.isEditing;
                            var9 = _closure2_slot0;
                            var20 = var9.id;
                            var9 = var23.id;
                            var24 = var21.bind(var22)(var20, var9);
                            if (var24) {
                                _fun78263_ip = 619;
                                continue _fun78263
                            }
                        case 606:
                            var20 = _closure2_slot3;
                            var9 = var23.id;
                            var24 = var20 === var9;
                        case 619:
                            var22 = _closure1_slot3;
                            var21 = var22.getPushFeedback;
                            var20 = var23.channel_id;
                            var9 = var23.id;
                            var27 = var21.bind(var22)(var20, var9);
                            var21 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var20 = var9[var13];
                            var22 = var21.bind(var0)(var20);
                            var21 = var22.canReplyToMessage;
                            var20 = _closure2_slot0;
                            var26 = var21.bind(var22)(var20, var23);
                            var20 = _closure1_slot1;
                            var9 = var9[var12];
                            var20 = var20.bind(var0)(var9);
                            var9 = _closure2_slot4;
                            var25 = var20.bind(var0)(var23, var9);
                            if (!var25) {
                                _fun78263_ip = 741;
                                continue _fun78263
                            }
                        case 706:
                            var20 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var9 = var9[var14];
                            var21 = var20.bind(var0)(var9);
                            var20 = var21.isNonModInLockedThread;
                            var9 = _closure2_slot0;
                            var9 = var20.bind(var21)(var9);
                            var25 = !var9;
                        case 741:
                            var21 = _closure2_slot14;
                            var20 = var21.hasOwnProperty;
                            var9 = var23.id;
                            var9 = var20.bind(var21)(var9);
                            if (var9) {
                                _fun78263_ip = 776;
                                continue _fun78263
                            }
                        case 764:
                            var9 = _closure2_slot18;
                            var22 = var9.bind(var0)(var23, var18);
                            _fun78263_ip = 804;
                            continue _fun78263;
                        case 776:
                            var20 = _closure2_slot14;
                            var9 = var23.id;
                            var21 = var20[var9];
                            var20 = _closure2_slot7;
                            var9 = var20.determineChangeTypeForUploadProgress;
                            var22 = var9.bind(var20)(var21);
                        case 804:
                            var9 = _closure2_slot6;
                            var9 = var7 != var9;
                            if (!var9) {
                                _fun78263_ip = 834;
                                continue _fun78263
                            }
                        case 815:
                            var20 = _closure2_slot6;
                            var21 = var20.endId;
                            var20 = var23.id;
                            var9 = var21 === var20;
                        case 834:
                            if (!var9) {
                                _fun78263_ip = 851;
                                continue _fun78263
                            }
                        case 837:
                            var20 = _closure2_slot6;
                            var20 = var20.count;
                            var9 = var20 > var19;
                        case 851:
                            if (!var9) {
                                _fun78263_ip = 922;
                                continue _fun78263
                            }
                        case 854:
                            var21 = _closure2_slot13;
                            var20 = var21.push;
                            var9 = {};
                            var29 = _closure1_slot9;
                            var29 = var29.SUMMARY;
                            var9.rowType = var29;
                            var29 = _closure2_slot18;
                            var29 = var29.bind(var0)(var23);
                            var9.changeType = var29;
                            var29 = _closure2_slot8;
                            var9.roleStyle = var29;
                            var29 = _closure2_slot6;
                            var9.summary = var29;
                            var9.isBeforeContent = var17;
                            var9 = var20.bind(var21)(var9);
                        case 922:
                            var21 = _closure2_slot13;
                            var20 = var21.push;
                            var9 = {};
                            var29 = _closure2_slot8;
                            var9.roleStyle = var29;
                            var9.message = var23;
                            var30 = _closure2_slot0;
                            var29 = var30.isSystemDM;
                            var29 = var29.bind(var30)();
                            var9.isSystemDM = var29;
                            var29 = var23 === var8;
                            var9.isFirst = var29;
                            var9.isEditing = var24;
                            var24 = !var28;
                            if (var28) {
                                _fun78263_ip = 992;
                                continue _fun78263
                            }
                        case 985:
                            var28 = _closure2_slot11;
                            var24 = !var28;
                        case 992:
                            if (!var24) {
                                _fun78263_ip = 1013;
                                continue _fun78263
                            }
                        case 995:
                            var28 = var3;
                            if (var28) {
                                _fun78263_ip = 1004;
                                continue _fun78263
                            }
                        case 1001:
                            var28 = var2;
                        case 1004:
                            if (var28) {
                                _fun78263_ip = 1010;
                                continue _fun78263
                            }
                        case 1007:
                            var28 = var1;
                        case 1010:
                            var24 = var28;
                        case 1013:
                            var9.separatorBefore = var24;
                            var24 = _closure2_slot5;
                            var9.canAddNewReactions = var24;
                            var24 = _closure2_slot11;
                            var9.renderContentOnly = var24;
                            var28 = var7 == var27;
                            var24 = undefined;
                            if (var28) {
                                _fun78263_ip = 1051;
                                continue _fun78263
                            }
                        case 1045:
                            var24 = var27.pushType;
                        case 1051:
                            var9.pushFeedbackType = var24;
                            var24 = _closure2_slot11;
                            var24 = !var24;
                            if (!var24) {
                                _fun78263_ip = 1069;
                                continue _fun78263
                            }
                        case 1066:
                            var24 = var26;
                        case 1069:
                            var9.canReply = var24;
                            var24 = _closure2_slot11;
                            var24 = !var24;
                            if (!var24) {
                                _fun78263_ip = 1087;
                                continue _fun78263
                            }
                        case 1084:
                            var24 = var25;
                        case 1087:
                            var9.canEdit = var24;
                            var24 = _closure1_slot8;
                            var24 = var24.MESSAGE;
                            var9.rowType = var24;
                            var9.changeType = var22;
                            var22 = _closure2_slot12;
                            var24 = var7 == var22;
                            var22 = undefined;
                            if (var24) {
                                _fun78263_ip = 1144;
                                continue _fun78263
                            }
                        case 1125:
                            var26 = _closure2_slot12;
                            var25 = var26.has;
                            var24 = var23.id;
                            var22 = var25.bind(var26)(var24);
                        case 1144:
                            var9.showContentInventoryEntryFallbackEmbed = var22;
                            var9 = var20.bind(var21)(var9);
                            var9 = _closure2_slot6;
                            var9 = var7 != var9;
                            if (!var9) {
                                _fun78263_ip = 1184;
                                continue _fun78263
                            }
                        case 1165:
                            var20 = _closure2_slot6;
                            var21 = var20.startId;
                            var20 = var23.id;
                            var9 = var21 === var20;
                        case 1184:
                            if (!var9) {
                                _fun78263_ip = 1201;
                                continue _fun78263
                            }
                        case 1187:
                            var20 = _closure2_slot6;
                            var20 = var20.count;
                            var9 = var20 > var19;
                        case 1201:
                            if (!var9) {
                                _fun78263_ip = 1272;
                                continue _fun78263
                            }
                        case 1204:
                            var21 = _closure2_slot13;
                            var20 = var21.push;
                            var9 = {};
                            var22 = _closure1_slot9;
                            var22 = var22.SUMMARY;
                            var9.rowType = var22;
                            var22 = _closure2_slot18;
                            var22 = var22.bind(var0)(var23);
                            var9.changeType = var22;
                            var22 = _closure2_slot8;
                            var9.roleStyle = var22;
                            var22 = _closure2_slot6;
                            var9.summary = var22;
                            var9.isBeforeContent = var18;
                            var9 = var20.bind(var21)(var9);
                        case 1272:
                            var20 = var15.bind(var0)();
                            var9 = var20.done;
                            var10 = var20;
                            if (var9) {
                                _fun78263_ip = 1759;
                                continue _fun78263
                            }
                        case 1290:
                            _fun78263_ip = 564;
                            continue _fun78263;
                        case 1295:
                            if (!(var7 != var6)) {
                                _fun78263_ip = 1325;
                                continue _fun78263
                            }
                        case 1299:
                            var12 = var6.rowType;
                            var9 = _closure1_slot8;
                            var9 = var9.IGNORED_GROUP;
                            var10 = var6;
                            if (!(var12 !== var9)) {
                                _fun78263_ip = 1439;
                                continue _fun78263
                            }
                        case 1325:
                            var9 = _closure2_slot18;
                            var13 = var9.bind(var0)(var8);
                            var9 = _closure1_slot6;
                            var9 = var9.NOOP;
                            var9 = var13 === var9;
                            if (!var9) {
                                _fun78263_ip = 1369;
                                continue _fun78263
                            }
                        case 1354:
                            var15 = _closure2_slot7;
                            var14 = var15.getIgnored;
                            var9 = var14.bind(var15)(var8);
                        case 1369:
                            if (!var9) {
                                _fun78263_ip = 1382;
                                continue _fun78263
                            }
                        case 1372:
                            var9 = _closure1_slot6;
                            var13 = var9.INSERT;
                        case 1382:
                            var9 = {};
                            var32 = var9;
                            var31 = var11;
                            var14 = copyDataProperties(var32, var31);
                            var12 = _closure1_slot8;
                            var14 = var12.IGNORED_GROUP;
                            var12 = 'rowType';
                            var9[var12] = var14;
                            var12 = 'changeType';
                            var9[var12] = var13;
                            var13 = _closure2_slot13;
                            var12 = var13.push;
                            var12 = var12.bind(var13)(var9);
                            var10 = var9;
                        case 1439:
                            var9 = var4.bind(var0)(var10);
                            var12 = _closure1_slot0;
                            var15 = _closure1_slot2;
                            var9 = 7;
                            var13 = var15[var9];
                            var13 = var12.bind(var0)(var13);
                            var14 = var13.intl;
                            var13 = var14.formatToPlainString;
                            var9 = var15[var9];
                            var9 = var12.bind(var0)(var9);
                            var9 = var9.t;
                            var12 = var9["VFWjc+"];
                            var9 = {};
                            var15 = var10.content;
                            var15 = var15.length;
                            var9.count = var15;
                            var9 = var13.bind(var14)(var12, var9);
                            var10.text = var9;
                            _fun78263_ip = 1759;
                            continue _fun78263;
                        case 1531:
                            if (!(var7 != var6)) {
                                _fun78263_ip = 1558;
                                continue _fun78263
                            }
                        case 1535:
                            var9 = var6.rowType;
                            var7 = _closure1_slot8;
                            var7 = var7.BLOCKED_GROUP;
                            if (!(var9 !== var7)) {
                                _fun78263_ip = 1672;
                                continue _fun78263
                            }
                        case 1558:
                            var7 = _closure2_slot18;
                            var10 = var7.bind(var0)(var8);
                            var7 = _closure1_slot6;
                            var7 = var7.NOOP;
                            var7 = var10 === var7;
                            if (!var7) {
                                _fun78263_ip = 1602;
                                continue _fun78263
                            }
                        case 1587:
                            var13 = _closure2_slot7;
                            var12 = var13.getBlocked;
                            var7 = var12.bind(var13)(var8);
                        case 1602:
                            if (!var7) {
                                _fun78263_ip = 1615;
                                continue _fun78263
                            }
                        case 1605:
                            var7 = _closure1_slot6;
                            var10 = var7.INSERT;
                        case 1615:
                            var7 = {};
                            var32 = var7;
                            var31 = var11;
                            var11 = copyDataProperties(var32, var31);
                            var9 = _closure1_slot8;
                            var11 = var9.BLOCKED_GROUP;
                            var9 = 'rowType';
                            var7[var9] = var11;
                            var9 = 'changeType';
                            var7[var9] = var10;
                            var10 = _closure2_slot13;
                            var9 = var10.push;
                            var9 = var9.bind(var10)(var7);
                            var6 = var7;
                        case 1672:
                            var4 = var4.bind(var0)(var6);
                            var7 = _closure1_slot0;
                            var11 = _closure1_slot2;
                            var4 = 7;
                            var9 = var11[var4];
                            var9 = var7.bind(var0)(var9);
                            var10 = var9.intl;
                            var9 = var10.formatToPlainString;
                            var4 = var11[var4];
                            var4 = var7.bind(var0)(var4);
                            var4 = var4.t;
                            var7 = var4["+FcYM/"];
                            var4 = {};
                            var11 = var6.content;
                            var11 = var11.length;
                            var4.count = var11;
                            var4 = var9.bind(var10)(var7, var4);
                            var6.text = var4;
                        case 1759:
                            if (!var3) {
                                _fun78263_ip = 1902;
                                continue _fun78263
                            }
                        case 1765:
                            var3 = _closure2_slot11;
                            if (var3) {
                                _fun78263_ip = 1902;
                                continue _fun78263
                            }
                        case 1775:
                            var3 = _closure2_slot18;
                            var9 = var3.bind(var0)(var8);
                            var3 = _closure1_slot6;
                            var3 = var3.UPDATE;
                            if (!(var9 === var3)) {
                                _fun78263_ip = 1811;
                                continue _fun78263
                            }
                        case 1801:
                            var3 = _closure1_slot6;
                            var9 = var3.NOOP;
                        case 1811:
                            var4 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var3 = 8;
                            var3 = var6[var3];
                            var7 = var4.bind(var0)(var3);
                            var6 = var7.dateFormat;
                            var4 = var8.timestamp;
                            var3 = 'LL';
                            var7 = var6.bind(var7)(var4, var3);
                            var6 = _closure2_slot13;
                            var4 = var6.push;
                            var3 = {};
                            var10 = _closure1_slot9;
                            var10 = var10.DAY;
                            var3.rowType = var10;
                            var3.changeType = var9;
                            var9 = _closure2_slot8;
                            var3.roleStyle = var9;
                            var3.text = var7;
                            var3 = var4.bind(var6)(var3);
                        case 1902:
                            if (!var2) {
                                _fun78263_ip = 1912;
                                continue _fun78263
                            }
                        case 1905:
                            var3 = _closure2_slot11;
                            var2 = !var3;
                        case 1912:
                            if (!var2) {
                                _fun78263_ip = 2046;
                                continue _fun78263
                            }
                        case 1918:
                            var4 = _closure2_slot13;
                            var3 = var4.push;
                            var2 = {};
                            var7 = _closure1_slot9;
                            var7 = var7.UNREAD;
                            var2.rowType = var7;
                            var7 = _closure2_slot18;
                            var7 = var7.bind(var0)(var8);
                            var2.changeType = var7;
                            var7 = _closure2_slot8;
                            var2.roleStyle = var7;
                            var9 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var6 = 7;
                            var7 = var10[var6];
                            var7 = var9.bind(var0)(var7);
                            var8 = var7.intl;
                            var7 = var8.string;
                            var6 = var10[var6];
                            var6 = var9.bind(var0)(var6);
                            var6 = var6.t;
                            var6 = var6.q7hm3m;
                            var7 = var7.bind(var8)(var6);
                            var6 = var7.toUpperCase;
                            var6 = var6.bind(var7)();
                            var2.text = var6;
                            var2 = var3.bind(var4)(var2);
                        case 2046:
                            if (!var1) {
                                _fun78263_ip = 2056;
                                continue _fun78263
                            }
                        case 2049:
                            var2 = _closure2_slot11;
                            var1 = !var2;
                        case 2056:
                            if (!var1) {
                                _fun78263_ip = 2209;
                                continue _fun78263
                            }
                        case 2062:
                            var3 = _closure2_slot13;
                            var2 = var3.push;
                            var1 = {};
                            var6 = _closure1_slot7;
                            var6 = var6.LOAD_BEFORE;
                            var1.rowType = var6;
                            var6 = _closure2_slot9;
                            var7 = _closure1_slot6;
                            if (var6) {
                                _fun78263_ip = 2110;
                                continue _fun78263
                            }
                        case 2102:
                            var6 = var7.NOOP;
                            _fun78263_ip = 2116;
                            continue _fun78263;
                        case 2110:
                            var6 = var7.UPDATE;
                        case 2116:
                            var1.changeType = var6;
                            var6 = _closure2_slot8;
                            var1.roleStyle = var6;
                            var5 = _closure2_slot1;
                            var5 = var5.loadingMore;
                            var1.isLoading = var5;
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var4 = 7;
                            var5 = var8[var4];
                            var5 = var7.bind(var0)(var5);
                            var6 = var5.intl;
                            var5 = var6.string;
                            var4 = var8[var4];
                            var4 = var7.bind(var0)(var4);
                            var4 = var4.t;
                            var4 = var4.XBlaiC;
                            var4 = var5.bind(var6)(var4);
                            var1.text = var4;
                            var1 = var2.bind(var3)(var1);
                        case 2209:
                            return var0;
                    }
                };
                var2 = var8.bind(var1)(var2);
                var2 = var1.length;
                var1 = 0;
                var1 = var1 === var2;
                if (!var1) {
                    _fun78258_ip = 384;
                    continue _fun78258
                }
            case 375:
                var2 = var4.loadingMore;
                var1 = !var2;
            case 384:
                if (!var1) {
                    _fun78258_ip = 405;
                    continue _fun78258
                }
            case 387:
                var2 = var4.hasMoreAfter;
                if (var2) {
                    _fun78258_ip = 402;
                    continue _fun78258
                }
            case 396:
                var2 = var4.hasMoreBefore;
            case 402:
                var1 = var2;
            case 405:
                if (!var1) {
                    _fun78258_ip = 556;
                    continue _fun78258
                }
            case 411:
                var2 = var0.push;
                var1 = {};
                var8 = var4.hasMoreBefore;
                var9 = _closure1_slot7;
                if (var8) {
                    _fun78258_ip = 439;
                    continue _fun78258
                }
            case 431:
                var8 = var9.LOAD_AFTER;
                _fun78258_ip = 445;
                continue _fun78258;
            case 439:
                var8 = var9.LOAD_BEFORE;
            case 445:
                var1.rowType = var8;
                var8 = _closure1_slot6;
                if (var6) {
                    _fun78258_ip = 465;
                    continue _fun78258
                }
            case 457:
                var6 = var8.NOOP;
                _fun78258_ip = 471;
                continue _fun78258;
            case 465:
                var6 = var8.UPDATE;
            case 471:
                var1.changeType = var6;
                var1.roleStyle = var5;
                var4 = var4.loadingMore;
                var1.isLoading = var4;
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var3 = 7;
                var4 = var8[var3];
                var4 = var6.bind(var7)(var4);
                var5 = var4.intl;
                var4 = var5.string;
                var3 = var8[var3];
                var3 = var6.bind(var7)(var3);
                var3 = var3.t;
                var3 = var3.XBlaiC;
                var3 = var4.bind(var5)(var3);
                var1.text = var3;
                var1 = var2.bind(var0)(var1);
            case 556:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [9924, 6600, 6681, 6584, 21, 9946, 9947, 1234, 3134, 9950, 9951, 6764, 2]);