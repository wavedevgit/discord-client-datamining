// modules/messages/native/MessagesUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var8 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var9;
    var0 = function arg0, arg1() {
        _fun73200: for (var _fun73200_ip = 0;;) switch (_fun73200_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun73200_ip = 46;
                    continue _fun73200
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun73200_ip = 55;
                    continue _fun73200
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun73200_ip = 345;
                    continue _fun73200
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun73200_ip = 323;
                    continue _fun73200
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun73200_ip = 283;
                    continue _fun73200
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun73200_ip = 270;
                    continue _fun73200
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
                    _fun73200_ip = 163;
                    continue _fun73200
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun73200_ip = 179;
                    continue _fun73200
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun73200_ip = 249;
                    continue _fun73200
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun73200_ip = 249;
                    continue _fun73200
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun73200_ip = 234;
                    continue _fun73200
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun73200_ip = 247;
                    continue _fun73200
                }
            case 234:
                var8 = _closure1_slot23;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun73200_ip = 265;
                continue _fun73200;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun73200_ip = 283;
                continue _fun73200;
            case 270:
                var6 = _closure1_slot23;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun73200_ip = 323;
                    continue _fun73200
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
                    _fun73200_ip = 330;
                    continue _fun73200
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun73201: for (var _fun73201_ip = 0;;) switch (_fun73201_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun73201_ip = 56;
                                continue _fun73201
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
                            _fun73201_ip = 67;
                            continue _fun73201;
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
    var _closure1_slot22 = var0;
    var0 = function arg0, arg1() {
        _fun73202: for (var _fun73202_ip = 0;;) switch (_fun73202_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun73202_ip = 23;
                    continue _fun73202
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun73202_ip = 33;
                    continue _fun73202
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
                    _fun73202_ip = 70;
                    continue _fun73202
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun73202_ip = 55;
                    continue _fun73202
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot23 = var0;
    var6 = function arg0() {
        _fun73203: for (var _fun73203_ip = 0;;) switch (_fun73203_ip) {
            case 0:
                var0 = arg0;
                var14 = var0.firstVisibleMessageRowIndex;
                var13 = var0.lastVisibleMessageRowIndex;
                var12 = var0.firstVisibleMessagePercentVisible;
                var11 = var0.lastVisibleMessagePercentVisible;
                var10 = var0.chatManager;
                var9 = var0.channelId;
                var8 = null;
                if (!(var8 != var14)) {
                    _fun73203_ip = 344;
                    continue _fun73203
                }
            case 47:
                if (!(var8 != var13)) {
                    _fun73203_ip = 344;
                    continue _fun73203
                }
            case 54:
                var0 = 0;
                if (!(!(var14 < var0))) {
                    _fun73203_ip = 344;
                    continue _fun73203
                }
            case 63:
                if (!(!(var13 < var0))) {
                    _fun73203_ip = 344;
                    continue _fun73203
                }
            case 70:
                var0 = var10._rows;
                if (!(var8 != var0)) {
                    _fun73203_ip = 344;
                    continue _fun73203
                }
            case 83:
                var0 = var10._messages;
                if (!(var8 != var0)) {
                    _fun73203_ip = 344;
                    continue _fun73203
                }
            case 96:
                var0 = new Array(0);
                var15 = var14 >= var13;
                var5 = 1;
                var4 = var14;
                var3 = undefined;
                var2 = undefined;
                var1 = undefined;
                if (!var15) {
                    _fun73203_ip = 342;
                    continue _fun73203
                }
            case 125:
                var15 = var10._rows;
                var18 = var15[var4];
                var17 = var3;
                var16 = var2;
                var15 = var1;
                if (!(var8 != var18)) {
                    _fun73203_ip = 323;
                    continue _fun73203
                }
            case 151:
                var20 = var18.type;
                var19 = _closure1_slot14;
                var19 = var19.MESSAGE;
                var17 = var3;
                var16 = var2;
                var15 = var1;
                if (!(var20 === var19)) {
                    _fun73203_ip = 323;
                    continue _fun73203
                }
            case 182:
                var20 = var18.message;
                var21 = var8 == var20;
                var19 = undefined;
                if (var21) {
                    _fun73203_ip = 201;
                    continue _fun73203
                }
            case 196:
                var19 = var20.id;
            case 201:
                var17 = var20;
                var16 = var2;
                var15 = var1;
                if (!(var8 != var19)) {
                    _fun73203_ip = 323;
                    continue _fun73203
                }
            case 214:
                if (!(var4 === var14)) {
                    _fun73203_ip = 225;
                    continue _fun73203
                }
            case 218:
                var19 = var12;
                if (!(var8 == var19)) {
                    _fun73203_ip = 245;
                    continue _fun73203
                }
            case 225:
                var21 = var4 === var13;
                if (!var21) {
                    _fun73203_ip = 236;
                    continue _fun73203
                }
            case 232:
                var21 = var8 != var11;
            case 236:
                var19 = var5;
                if (!var21) {
                    _fun73203_ip = 245;
                    continue _fun73203
                }
            case 242:
                var19 = var11;
            case 245:
                var18 = var18.message;
                var22 = var18.id;
                var21 = _closure1_slot9;
                var18 = var21.getMessage;
                var18 = var18.bind(var21)(var9, var22);
                var17 = var20;
                var16 = var19;
                var15 = var18;
                if (!(var8 != var15)) {
                    _fun73203_ip = 323;
                    continue _fun73203
                }
            case 284:
                var22 = var0.push;
                var21 = {};
                var21.message = var18;
                var21.percentVisible = var19;
                var23 = var18.state;
                var21.state = var23;
                var21 = var22.bind(var0)(var21);
                var17 = var20;
                var16 = var19;
                var15 = var18;
            case 323:
                var4 = var4 - 1;
                var3 = var17;
                var2 = var16;
                var1 = var15;
                if (var4 >= var13) {
                    _fun73203_ip = 125;
                    continue _fun73203
                }
            case 342:
                return var0;
            case 344:
                var0 = new Array(0);
                return var0;
        }
    };
    var _closure1_slot24 = var6;
    var5 = function arg0, arg1, arg2, arg3() {
        _fun73204: for (var _fun73204_ip = 0;;) switch (_fun73204_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.isForumPost;
                var0 = var0.bind(var1)();
                if (!var0) {
                    _fun73204_ip = 68;
                    continue _fun73204
                }
            case 16:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 33;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.castChannelIdAsMessageId;
                var1 = arg1;
                var2 = var2.bind(var3)(var1);
                var1 = arg2;
                var1 = var1.jumpTargetId;
                var0 = var2 === var1;
            case 68:
                if (!var0) {
                    _fun73204_ip = 77;
                    continue _fun73204
                }
            case 71:
                var1 = arg3;
                var0 = !var1;
            case 77:
                return var0;
        }
    };
    var _closure1_slot25 = var5;
    var4 = function arg0, arg1() {
        _fun73205: for (var _fun73205_ip = 0;;) switch (_fun73205_ip) {
            case 0:
                var1 = arg1;
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 36;
                var2 = var2[var0];
                var0 = undefined;
                var6 = var3.bind(var0)(var2);
                var5 = var6.recordMessageRender;
                var3 = var1.map;
                var2 = function(arg0) { // Environment: var2
                    var0 = arg0;
                    var0 = var0.id;
                    return var0;
                };
                var4 = var3.bind(var1)(var2);
                var3 = var1.hasFetched;
                if (var3) {
                    _fun73205_ip = 83;
                    continue _fun73205
                }
            case 62:
                var2 = var1.ready;
                if (!var2) {
                    _fun73205_ip = 80;
                    continue _fun73205
                }
            case 71:
                var7 = var1.cached;
                var2 = !var7;
            case 80:
                var3 = var2;
            case 83:
                var8 = var1.hasMoreAfter;
                var11 = arg0;
                var12 = var6;
                var10 = var4;
                var9 = var3;
                var1 = var12[var5](var11, var10, var9, var8, var7);
                return var0;
        }
    };
    var _closure1_slot26 = var4;
    var3 = function arg0, arg1() {
        var4 = arg0;
        var1 = arg1;
        var _closure2_slot0 = var1;
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 37;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.find;
        var1 = var4.toArray;
        var1 = var1.bind(var4)();
        var0 = function(arg0) { // Environment: var0
            _fun73208: for (var _fun73208_ip = 0;;) switch (_fun73208_ip) {
                case 0:
                    var0 = arg0;
                    var3 = var0.id;
                    var2 = var0.nonce;
                    var0 = _closure2_slot0;
                    var0 = var3 === var0;
                    if (var0) {
                        _fun73208_ip = 36;
                        continue _fun73208
                    }
                case 28:
                    var1 = _closure2_slot0;
                    var0 = var2 === var1;
                case 36:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot27 = var3;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun73211: for (var _fun73211_ip = 0;;) switch (_fun73211_ip) {
                    case 0:
                        StartGenerator();
                        var2 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun73211_ip = 392;
                            continue _fun73211
                        }
                    case 15:
                        var1 = undefined;
                        var _closure4_slot0 = var1;
                        var _closure4_slot1 = var1;
                        var8 = var2.channel;
                        var10 = var2.useReducedMotion;
                        _closure4_slot0 = var10;
                        var4 = var2.isNearTop;
                        var9 = var2.messages;
                        var7 = var2.findMessageIndex;
                        var5 = var2.scrollToTop;
                        _closure4_slot1 = var5;
                        var2 = var2.chatRef;
                        var5 = var8.isForumPost;
                        var5 = var5.bind(var8)();
                        if (!var5) {
                            _fun73211_ip = 389;
                            continue _fun73211
                        }
                    case 90:
                        if (var4) {
                            _fun73211_ip = 389;
                            continue _fun73211
                        }
                    case 96:
                        var5 = _closure1_slot27;
                        var12 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var11 = 33;
                        var4 = var4[var11];
                        var13 = var12.bind(var1)(var4);
                        var12 = var13.castChannelIdAsMessageId;
                        var4 = var8.id;
                        var4 = var12.bind(var13)(var4);
                        var4 = var5.bind(var1)(var9, var4);
                        var5 = null;
                        if (!(var5 != var4)) {
                            _fun73211_ip = 277;
                            continue _fun73211
                        }
                    case 154:
                        var9 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var4 = var4[var11];
                        var11 = var9.bind(var1)(var4);
                        var9 = var11.castChannelIdAsMessageId;
                        var4 = var8.id;
                        var4 = var9.bind(var11)(var4);
                        var4 = var7.bind(var1)(var4);
                        if (!(var5 != var4)) {
                            _fun73211_ip = 274;
                            continue _fun73211
                        }
                    case 196:
                        var7 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var5 = 41;
                        var5 = var9[var5];
                        var9 = var7.bind(var1)(var5);
                        var7 = var9.scrollTo;
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
                            var2 = _closure4_slot1;
                            var0 = _closure4_slot0;
                            var1 = !var0;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                            return var0;
                        };
                        var2 = var5.bind(var1)(var2, var4);
                        _fun73211_ip = 389;
                        continue _fun73211;
                    case 274:
                        return var1;
                    case 277:
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var2 = 42;
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
                        var6 = _closure1_slot21;
                        var2.limit = var6;
                        var2 = var4.bind(var5)(var2);
                        SaveGenerator(address = 354);
                    case 352:
                        return var2;
                    case 354:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                        if (var4) {
                            _fun73211_ip = 386;
                            continue _fun73211
                        }
                    case 360:
                        var4 = global;
                        var5 = var4.setTimeout;
                        var4 = function() { // Environment: var3
                            var2 = _closure4_slot1;
                            var0 = _closure4_slot0;
                            var1 = !var0;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                            return var0;
                        };
                        var3 = 50;
                        var3 = var5.bind(var1)(var4, var3);
                        _fun73211_ip = 389;
                        continue _fun73211;
                    case 386:
                        return var2;
                    case 389:
                        return var1;
                    case 392:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot28 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot28 = var0;
    var0 = global;
    var12 = var0.Object;
    var11 = var12.defineProperty;
    var7 = {};
    var0 = true;
    var7.value = var0;
    var0 = '__esModule';
    var0 = var11.bind(var12)(var2, var0, var7);
    var0 = 0;
    var7 = var9[var0];
    var0 = undefined;
    var7 = var10.bind(var0)(var7);
    var _closure1_slot3 = var7;
    var7 = 1;
    var7 = var9[var7];
    var7 = var8.bind(var0)(var7);
    var7 = var7.updateShouldShowJumpToPresentButton;
    var _closure1_slot4 = var7;
    var7 = 2;
    var7 = var9[var7];
    var7 = var10.bind(var0)(var7);
    var _closure1_slot5 = var7;
    var7 = 3;
    var7 = var9[var7];
    var7 = var10.bind(var0)(var7);
    var _closure1_slot6 = var7;
    var7 = 4;
    var7 = var9[var7];
    var7 = var10.bind(var0)(var7);
    var _closure1_slot7 = var7;
    var7 = 5;
    var7 = var9[var7];
    var7 = var10.bind(var0)(var7);
    var _closure1_slot8 = var7;
    var7 = 6;
    var7 = var9[var7];
    var7 = var10.bind(var0)(var7);
    var _closure1_slot9 = var7;
    var7 = 7;
    var7 = var9[var7];
    var7 = var10.bind(var0)(var7);
    var _closure1_slot10 = var7;
    var7 = 8;
    var7 = var9[var7];
    var7 = var10.bind(var0)(var7);
    var _closure1_slot11 = var7;
    var7 = 9;
    var7 = var9[var7];
    var7 = var10.bind(var0)(var7);
    var _closure1_slot12 = var7;
    var7 = 10;
    var7 = var9[var7];
    var7 = var10.bind(var0)(var7);
    var _closure1_slot13 = var7;
    var7 = 11;
    var7 = var9[var7];
    var7 = var8.bind(var0)(var7);
    var10 = var7.RowType;
    var _closure1_slot14 = var10;
    var10 = var7.Changeset;
    var _closure1_slot15 = var10;
    var7 = var7.SeparatorType;
    var _closure1_slot16 = var7;
    var7 = 12;
    var7 = var9[var7];
    var7 = var8.bind(var0)(var7);
    var10 = var7.AnalyticEvents;
    var _closure1_slot17 = var10;
    var10 = var7.MessageEmbedTypes;
    var _closure1_slot18 = var10;
    var10 = var7.MessageTypes;
    var _closure1_slot19 = var10;
    var10 = var7.Permissions;
    var _closure1_slot20 = var10;
    var7 = var7.MAX_MESSAGES_PER_CHANNEL;
    var _closure1_slot21 = var7;
    var7 = 48;
    var7 = var9[var7];
    var9 = var8.bind(var0)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/messages/native/MessagesUtils.tsx';
    var7 = var8.bind(var9)(var7);
    var7 = function arg0, arg1, arg2, arg3, arg4() {
        _fun73214: for (var _fun73214_ip = 0;;) switch (_fun73214_ip) {
            case 0:
                var8 = arg0;
                var5 = arg1;
                var0 = arg2;
                var11 = arg3;
                var6 = arg4;
                var3 = var8.type;
                var1 = _closure1_slot19;
                var2 = var1.THREAD_STARTER_MESSAGE;
                var1 = var8;
                if (!(var3 === var2)) {
                    _fun73214_ip = 93;
                    continue _fun73214
                }
            case 42:
                var2 = var8.messageReference;
                var3 = null;
                var1 = var8;
                if (!(var3 != var2)) {
                    _fun73214_ip = 93;
                    continue _fun73214
                }
            case 57:
                var10 = _closure1_slot5;
                var9 = var10.getMessageByReference;
                var2 = var8.messageReference;
                var2 = var9.bind(var10)(var2);
                var2 = var2.message;
                var1 = var8;
                if (!(var3 != var2)) {
                    _fun73214_ip = 93;
                    continue _fun73214
                }
            case 90:
                var1 = var2;
            case 93:
                var2 = 'attachment';
                if (!(var2 !== var0)) {
                    _fun73214_ip = 617;
                    continue _fun73214
                }
            case 104:
                var3 = 'embed';
                if (!(var3 !== var0)) {
                    _fun73214_ip = 342;
                    continue _fun73214
                }
            case 115:
                var9 = 'component';
                if (!(var9 !== var0)) {
                    _fun73214_ip = 127;
                    continue _fun73214
                }
            case 123:
                var0 = null;
                return var0;
            case 127:
                var0 = null;
                if (!(var0 != var11)) {
                    _fun73214_ip = 340;
                    continue _fun73214
                }
            case 136:
                var8 = _closure1_slot0;
                var10 = _closure1_slot2;
                var3 = 14;
                var3 = var10[var3];
                var10 = undefined;
                var12 = var8.bind(var10)(var3);
                var8 = var12.flattenComponents;
                var3 = var1.components;
                var8 = var8.bind(var12)(var3);
                var3 = var8.get;
                var8 = var3.bind(var8)(var11);
                if (!(var0 != var8)) {
                    _fun73214_ip = 338;
                    continue _fun73214
                }
            case 192:
                var11 = var8.type;
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var3 = 15;
                var3 = var13[var3];
                var3 = var12.bind(var10)(var3);
                var3 = var3.ComponentType;
                var3 = var3.MEDIA_GALLERY;
                if (!(var11 !== var3)) {
                    _fun73214_ip = 235;
                    continue _fun73214
                }
            case 233:
                return var0;
            case 235:
                if (!(var0 != var6)) {
                    _fun73214_ip = 336;
                    continue _fun73214
                }
            case 239:
                var3 = var8.items;
                var3 = var3[var6];
                if (!(var0 != var3)) {
                    _fun73214_ip = 334;
                    continue _fun73214
                }
            case 252:
                var6 = var3.media;
                var3 = {};
                var3.sourceType = var9;
                var3.source = var8;
                var9 = _closure1_slot0;
                var11 = _closure1_slot2;
                var8 = 13;
                var8 = var11[var8];
                var10 = var9.bind(var10)(var8);
                var9 = var10.isVideoContentType;
                var8 = var6.contentType;
                var9 = var9.bind(var10)(var8);
                var8 = 'image';
                if (!var9) {
                    _fun73214_ip = 317;
                    continue _fun73214
                }
            case 313:
                var8 = 'video';
            case 317:
                var3.mediaType = var8;
                var6 = var6.url;
                var3.mediaUrl = var6;
                return var3;
            case 334:
                return var0;
            case 336:
                return var0;
            case 338:
                return var0;
            case 340:
                return var0;
            case 342:
                var0 = var1.embeds;
                var3 = var0[var5];
                var _closure2_slot0 = var3;
                var0 = null;
                if (!(var0 != var3)) {
                    _fun73214_ip = 615;
                    continue _fun73214
                }
            case 365:
                var8 = function arg0, arg1, arg2() {
                    var0 = {};
                    var1 = 'embed';
                    var0.sourceType = var1;
                    var1 = _closure2_slot0;
                    var0.source = var1;
                    var1 = arg0;
                    var0.mediaType = var1;
                    var1 = arg1;
                    var0.mediaUrl = var1;
                    var1 = arg2;
                    var0.contentType = var1;
                    return var0;
                };
                var6 = var3.type;
                var4 = _closure1_slot18;
                var4 = var4.IMAGE;
                if (!(var6 === var4)) {
                    _fun73214_ip = 403;
                    continue _fun73214
                }
            case 391:
                var4 = var3.url;
                if (!(var0 == var4)) {
                    _fun73214_ip = 596;
                    continue _fun73214
                }
            case 403:
                var6 = var3.type;
                var4 = _closure1_slot18;
                var4 = var4.GIFV;
                if (!(var6 === var4)) {
                    _fun73214_ip = 434;
                    continue _fun73214
                }
            case 422:
                var4 = var3.url;
                if (!(var0 == var4)) {
                    _fun73214_ip = 577;
                    continue _fun73214
                }
            case 434:
                var6 = var3.type;
                var4 = _closure1_slot18;
                var4 = var4.RICH;
                if (!(var6 === var4)) {
                    _fun73214_ip = 503;
                    continue _fun73214
                }
            case 453:
                var6 = var3.image;
                var9 = var0 == var6;
                var10 = undefined;
                var4 = undefined;
                if (var9) {
                    _fun73214_ip = 475;
                    continue _fun73214
                }
            case 470:
                var4 = var6.url;
            case 475:
                if (!(var0 == var4)) {
                    _fun73214_ip = 541;
                    continue _fun73214
                }
            case 479:
                var6 = var3.video;
                var9 = var0 == var6;
                var4 = undefined;
                if (var9) {
                    _fun73214_ip = 499;
                    continue _fun73214
                }
            case 494:
                var4 = var6.url;
            case 499:
                if (!(var0 == var4)) {
                    _fun73214_ip = 505;
                    continue _fun73214
                }
            case 503:
                return var0;
            case 505:
                var4 = var3.video;
                var9 = var4.url;
                var4 = var3.video;
                var6 = var4.contentType;
                var4 = 'video';
                var4 = var8.bind(var10)(var4, var9, var6);
                return var4;
            case 541:
                var4 = var3.image;
                var9 = var4.url;
                var4 = var3.image;
                var6 = var4.contentType;
                var4 = 'image';
                var4 = var8.bind(var10)(var4, var9, var6);
                return var4;
            case 577:
                var9 = var3.url;
                var6 = undefined;
                var4 = 'video';
                var4 = var8.bind(var6)(var4, var9);
                return var4;
            case 596:
                var6 = var3.url;
                var4 = undefined;
                var3 = 'image';
                var3 = var8.bind(var4)(var3, var6);
                return var3;
            case 615:
                return var0;
            case 617:
                var0 = var1.attachments;
                var3 = var0[var5];
                var4 = null;
                if (!(var4 == var3)) {
                    _fun73214_ip = 665;
                    continue _fun73214
                }
            case 633:
                var0 = var1.getContentMessage;
                var1 = var0.bind(var1)();
                var6 = var4 == var1;
                var0 = undefined;
                if (var6) {
                    _fun73214_ip = 662;
                    continue _fun73214
                }
            case 652:
                var1 = var1.attachments;
                var0 = var1[var5];
            case 662:
                var3 = var0;
            case 665:
                var1 = var4 == var3;
                var0 = null;
                if (var1) {
                    _fun73214_ip = 867;
                    continue _fun73214
                }
            case 677:
                var1 = {};
                var1.sourceType = var2;
                var1.source = var3;
                var6 = _closure1_slot0;
                var2 = _closure1_slot2;
                var9 = 13;
                var5 = var2[var9];
                var2 = undefined;
                var8 = var6.bind(var2)(var5);
                var6 = var8.isVideoFile;
                var5 = var3.filename;
                var6 = var6.bind(var8)(var5);
                var5 = 'video';
                if (var6) {
                    _fun73214_ip = 826;
                    continue _fun73214
                }
            case 734:
                var8 = _closure1_slot0;
                var6 = _closure1_slot2;
                var6 = var6[var9];
                var10 = var8.bind(var2)(var6);
                var8 = var10.isAudioFile;
                var6 = var3.filename;
                var8 = var8.bind(var10)(var6);
                var6 = 'audio';
                if (var8) {
                    _fun73214_ip = 823;
                    continue _fun73214
                }
            case 775:
                var8 = _closure1_slot0;
                var7 = _closure1_slot2;
                var7 = var7[var9];
                var9 = var8.bind(var2)(var7);
                var8 = var9.isImageFile;
                var7 = var3.filename;
                var8 = var8.bind(var9)(var7);
                var7 = 'file';
                if (!var8) {
                    _fun73214_ip = 820;
                    continue _fun73214
                }
            case 816:
                var7 = 'image';
            case 820:
                var6 = var7;
            case 823:
                var5 = var6;
            case 826:
                var1.mediaType = var5;
                var5 = var3.url;
                var1.mediaUrl = var5;
                var3 = var3.content_type;
                var4 = var4 != var3;
                var2 = undefined;
                if (!var4) {
                    _fun73214_ip = 859;
                    continue _fun73214
                }
            case 856:
                var2 = var3;
            case 859:
                var1.contentType = var2;
                var0 = var1;
            case 867:
                return var0;
        }
    };
    var2.getLongPressSelectedMedia = var7;
    var7 = function arg0() {
        _fun73216: for (var _fun73216_ip = 0;;) switch (_fun73216_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.sourceType;
                var0 = 'attachment';
                if (!(var0 !== var1)) {
                    _fun73216_ip = 91;
                    continue _fun73216
                }
            case 17:
                var3 = var2.sourceType;
                var1 = 'embed';
                var0 = null;
                if (!(var1 === var3)) {
                    _fun73216_ip = 89;
                    continue _fun73216
                }
            case 33:
                var1 = {};
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 16;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                var3 = var3.ObscuredMediaTypes;
                var3 = var3.Embed;
                var1.type = var3;
                var3 = var2.source;
                var1.media = var3;
                var0 = var1;
            case 89:
                _fun73216_ip = 147;
                continue _fun73216;
            case 91:
                var1 = {};
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 16;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                var3 = var3.ObscuredMediaTypes;
                var3 = var3.Attachment;
                var1.type = var3;
                var2 = var2.source;
                var1.media = var2;
                var0 = var1;
            case 147:
                return var0;
        }
    };
    var2.toObscuredMedia = var7;
    var7 = function arg0, arg1, arg2() {
        _fun73217: for (var _fun73217_ip = 0;;) switch (_fun73217_ip) {
            case 0:
                var9 = arg0;
                var6 = arg1;
                var8 = arg2;
                var7 = arguments[3];
                var5 = arguments[4];
                var0 = undefined;
                if (!(var7 === var0)) {
                    _fun73217_ip = 23;
                    continue _fun73217
                }
            case 21:
                var7 = false;
            case 23:
                if (!(var5 === var0)) {
                    _fun73217_ip = 62;
                    continue _fun73217
                }
            case 27:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 17;
                var1 = var3[var1];
                var1 = var2.bind(var0)(var1);
                var1 = var1.ReactionLocations;
                var5 = var1.MESSAGE;
            case 62:
                var1 = var6.getGuildId;
                var15 = var1.bind(var6)();
                var2 = _closure1_slot13;
                var1 = var2.getCurrentUser;
                var13 = var1.bind(var2)();
                var1 = null;
                var2 = var1 == var13;
                var14 = undefined;
                if (var2) {
                    _fun73217_ip = 104;
                    continue _fun73217
                }
            case 99:
                var14 = var13.id;
            case 104:
                var10 = var1 != var15;
                if (!var10) {
                    _fun73217_ip = 126;
                    continue _fun73217
                }
            case 111:
                var3 = _closure1_slot8;
                var2 = var3.canChatInGuild;
                var10 = var2.bind(var3)(var15);
            case 126:
                var2 = var1 != var15;
                if (!var2) {
                    _fun73217_ip = 164;
                    continue _fun73217
                }
            case 133:
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var3 = 18;
                var3 = var12[var3];
                var11 = var11.bind(var0)(var3);
                var3 = var11.shouldShowMembershipVerificationGate;
                var2 = var3.bind(var11)(var15);
            case 164:
                var3 = var1 != var15;
                var12 = null;
                if (!var3) {
                    _fun73217_ip = 198;
                    continue _fun73217
                }
            case 173:
                var3 = var1 != var14;
                var12 = null;
                if (!var3) {
                    _fun73217_ip = 198;
                    continue _fun73217
                }
            case 182:
                var11 = _closure1_slot7;
                var3 = var11.getMember;
                var12 = var3.bind(var11)(var15, var14);
            case 198:
                var11 = _closure1_slot0;
                var14 = _closure1_slot2;
                var3 = 19;
                var3 = var14[var3];
                var11 = var11.bind(var0)(var3);
                var3 = var11.isMemberCommunicationDisabled;
                var3 = var3.bind(var11)(var12);
                var11 = var6.isArchivedLockedThread;
                var11 = var11.bind(var6)();
                if (var11) {
                    _fun73217_ip = 752;
                    continue _fun73217
                }
            case 245:
                if (!(var1 == var8)) {
                    _fun73217_ip = 306;
                    continue _fun73217
                }
            case 249:
                var12 = _closure1_slot0;
                var14 = _closure1_slot2;
                var11 = 23;
                var11 = var14[var11];
                var14 = var12.bind(var0)(var11);
                var12 = var14.handleAddNewReactions;
                var11 = {};
                var11.burst = var7;
                var21 = var14;
                var20 = var6;
                var19 = var9;
                var18 = var5;
                var17 = var11;
                var11 = var21[var12](var20, var19, var18, var17, var16);
                _fun73217_ip = 908;
                continue _fun73217;
            case 306:
                if (!var7) {
                    _fun73217_ip = 390;
                    continue _fun73217
                }
            case 309:
                var11 = var8.me_burst;
                var12 = !var11;
                var11 = true;
                if (!(var11 === var12)) {
                    _fun73217_ip = 390;
                    continue _fun73217
                }
            case 324:
                var12 = _closure1_slot0;
                var14 = _closure1_slot2;
                var11 = 24;
                var11 = var14[var11];
                var12 = var12.bind(var0)(var11);
                var11 = var12.isPremium;
                var11 = var11.bind(var12)(var13);
                if (var11) {
                    _fun73217_ip = 390;
                    continue _fun73217
                }
            case 358:
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var11 = 23;
                var11 = var13[var11];
                var12 = var12.bind(var0)(var11);
                var11 = var12.handleOutOfSuperReactions;
                var11 = var11.bind(var12)();
                return var11;
            case 390:
                var11 = var8.me;
                var12 = true;
                if (!(var12 !== var11)) {
                    _fun73217_ip = 631;
                    continue _fun73217
                }
            case 405:
                if (!var7) {
                    _fun73217_ip = 421;
                    continue _fun73217
                }
            case 408:
                var11 = var8.me_burst;
                if (!(var12 !== var11)) {
                    _fun73217_ip = 631;
                    continue _fun73217
                }
            case 421:
                if (var2) {
                    _fun73217_ip = 575;
                    continue _fun73217
                }
            case 427:
                var11 = var6.isPrivate;
                var11 = var11.bind(var6)();
                if (var11) {
                    _fun73217_ip = 446;
                    continue _fun73217
                }
            case 440:
                if (!var10) {
                    _fun73217_ip = 575;
                    continue _fun73217
                }
            case 446:
                if (var3) {
                    _fun73217_ip = 575;
                    continue _fun73217
                }
            case 452:
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var3 = 17;
                var3 = var11[var3];
                var13 = var10.bind(var0)(var3);
                var12 = var13.addReaction;
                var20 = var6.id;
                var18 = var8.emoji;
                var3 = {};
                var3.burst = var7;
                var21 = var13;
                var19 = var9;
                var17 = var5;
                var16 = var3;
                var3 = var21[var12](var20, var19, var18, var17, var16, var15);
                var3 = var7;
                if (var3) {
                    _fun73217_ip = 571;
                    continue _fun73217
                }
            case 518:
                var11 = _closure1_slot0;
                var14 = _closure1_slot2;
                var10 = 25;
                var10 = var14[var10];
                var12 = var11.bind(var0)(var10);
                var11 = var12.triggerHapticFeedback;
                var13 = _closure1_slot1;
                var10 = 26;
                var10 = var14[var10];
                var10 = var13.bind(var0)(var10);
                var10 = var10.IMPACT_LIGHT;
                var3 = var11.bind(var12)(var10);
            case 571:
                var3 = undefined;
                return var3;
            case 575:
                if (!var2) {
                    _fun73217_ip = 908;
                    continue _fun73217
                }
            case 581:
                var2 = var6.getGuildId;
                var3 = var2.bind(var6)();
                if (!(var1 != var3)) {
                    _fun73217_ip = 908;
                    continue _fun73217
                }
            case 598:
                var2 = _closure1_slot0;
                var10 = _closure1_slot2;
                var1 = 27;
                var1 = var10[var1];
                var2 = var2.bind(var0)(var1);
                var1 = var2.openMemberVerificationModal;
                var1 = var1.bind(var2)(var3);
                return var1;
            case 631:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 25;
                var1 = var3[var1];
                var11 = var2.bind(var0)(var1);
                var10 = var11.triggerHapticFeedback;
                var12 = _closure1_slot1;
                var1 = 26;
                var1 = var3[var1];
                var1 = var12.bind(var0)(var1);
                var1 = var1.IMPACT_LIGHT;
                var1 = var10.bind(var11)(var1);
                var1 = 17;
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.removeReaction;
                var1 = {};
                var10 = var6.id;
                var1.channelId = var10;
                var1.messageId = var9;
                var8 = var8.emoji;
                var1.emoji = var8;
                var1.location = var5;
                var5 = {};
                var5.burst = var7;
                var1.options = var5;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            case 752:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 20;
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.open;
                var1 = {};
                var5 = 'ARCHIVED_POST_REACTIONS_DISABLED_TOAST';
                var1.key = var5;
                var5 = var6.isForumPost;
                var5 = var5.bind(var6)();
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var6 = 21;
                var7 = var10[var6];
                var7 = var9.bind(var0)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var6 = var10[var6];
                var6 = var9.bind(var0)(var6);
                var6 = var6.t;
                if (var5) {
                    _fun73217_ip = 862;
                    continue _fun73217
                }
            case 847:
                var5 = var6.X2L3Oa;
                var5 = var7.bind(var8)(var5);
                _fun73217_ip = 875;
                continue _fun73217;
            case 862:
                var6 = var6.EJQrFq;
                var5 = var7.bind(var8)(var6);
            case 875:
                var1.content = var5;
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var4 = 22;
                var4 = var6[var4];
                var4 = var5.bind(var0)(var4);
                var1.icon = var4;
                var1 = var2.bind(var3)(var1);
            case 908:
                return var0;
        }
    };
    var2.handleAddOrRemoveReaction = var7;
    var7 = function arg0, arg1() {
        _fun73218: for (var _fun73218_ip = 0;;) switch (_fun73218_ip) {
            case 0:
                var4 = arg0;
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 25;
                var2 = var3[var0];
                var0 = undefined;
                var6 = var5.bind(var0)(var2);
                var5 = var6.triggerHapticFeedback;
                var2 = _closure1_slot1;
                var1 = 26;
                var1 = var3[var1];
                var1 = var2.bind(var0)(var1);
                var1 = var1.IMPACT_LIGHT;
                var1 = var5.bind(var6)(var1);
                var1 = 28;
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var1 = arg1;
                if (var1) {
                    _fun73218_ip = 99;
                    continue _fun73218
                }
            case 79:
                var2 = var3.joinThread;
                var1 = 'iOS Forum Toolbar';
                var1 = var2.bind(var3)(var4, var1);
                _fun73218_ip = 117;
                continue _fun73218;
            case 99:
                var2 = var3.leaveThread;
                var1 = 'iOS Forum Toolbar';
                var1 = var2.bind(var3)(var4, var1);
            case 117:
                return var0;
        }
    };
    var2.handleToggleFollowForumPost = var7;
    var7 = function arg0, arg1, arg2() {
        _fun73219: for (var _fun73219_ip = 0;;) switch (_fun73219_ip) {
            case 0:
                var8 = arg1;
                var5 = _closure1_slot6;
                var0 = var5.getChannel;
                var7 = var0.bind(var5)(var8);
                var4 = var5.getChannel;
                var2 = null;
                var6 = var2 == var7;
                var0 = undefined;
                var3 = undefined;
                if (var6) {
                    _fun73219_ip = 44;
                    continue _fun73219
                }
            case 38:
                var3 = var7.parent_id;
            case 44:
                var6 = var4.bind(var5)(var3);
                var4 = var2 == var6;
                var3 = undefined;
                if (var4) {
                    _fun73219_ip = 68;
                    continue _fun73219
                }
            case 58:
                var4 = var6.isMediaChannel;
                var3 = var4.bind(var6)();
            case 68:
                var9 = var2 != var3;
                if (!var9) {
                    _fun73219_ip = 78;
                    continue _fun73219
                }
            case 75:
                var9 = var3;
            case 78:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 29;
                var3 = var5[var3];
                var5 = var4.bind(var0)(var3);
                var4 = var5.trackForumPostLinkCopied;
                var3 = {};
                var3.postId = var8;
                var10 = arg2;
                var3.location = var10;
                var3 = var4.bind(var5)(var3);
                if (!var9) {
                    _fun73219_ip = 175;
                    continue _fun73219
                }
            case 126:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 30;
                var3 = var5[var3];
                var10 = var4.bind(var0)(var3);
                var5 = var10.trackWithMetadata;
                var3 = _closure1_slot17;
                var4 = var3.MEDIA_POST_SHARE_PROMPT_CLICKED;
                var3 = {};
                var3.media_post_id = var8;
                var3 = var5.bind(var10)(var4, var3);
            case 175:
                var4 = _closure1_slot0;
                var11 = _closure1_slot2;
                var3 = 25;
                var3 = var11[var3];
                var5 = var4.bind(var0)(var3);
                var4 = var5.triggerHapticFeedback;
                var10 = _closure1_slot1;
                var3 = 26;
                var3 = var11[var3];
                var3 = var10.bind(var0)(var3);
                var3 = var3.IMPACT_LIGHT;
                var3 = var4.bind(var5)(var3);
                if (!(var2 != var7)) {
                    _fun73219_ip = 289;
                    continue _fun73219
                }
            case 232:
                var5 = _closure1_slot0;
                var10 = _closure1_slot2;
                var2 = 31;
                var2 = var10[var2];
                var4 = var5.bind(var0)(var2);
                var3 = var4.copy;
                var2 = 32;
                var2 = var10[var2];
                var5 = var5.bind(var0)(var2);
                var2 = var5.getChannelLinkToCopy;
                var2 = var2.bind(var5)(var7, var6);
                var2 = var3.bind(var4)(var2);
                _fun73219_ip = 387;
                continue _fun73219;
            case 289:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 31;
                var2 = var6[var2];
                var4 = var5.bind(var0)(var2);
                var3 = var4.copy;
                var2 = 32;
                var2 = var6[var2];
                var7 = var5.bind(var0)(var2);
                var6 = var7.getChannelPermalink;
                var2 = true;
                var5 = undefined;
                if (!(var2 === var9)) {
                    _fun73219_ip = 372;
                    continue _fun73219
                }
            case 341:
                var9 = _closure1_slot1;
                var10 = _closure1_slot2;
                var2 = 33;
                var2 = var10[var2];
                var9 = var9.bind(var0)(var2);
                var2 = var9.castChannelIdAsMessageId;
                var5 = var2.bind(var9)(var8);
            case 372:
                var2 = arg0;
                var2 = var6.bind(var7)(var2, var8, var5);
                var2 = var3.bind(var4)(var2);
            case 387:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 34;
                var1 = var3[var1];
                var2 = var2.bind(var0)(var1);
                var1 = var2.presentLinkCopied;
                var1 = var1.bind(var2)();
                return var0;
        }
    };
    var2.handleCopyLinkForumPost = var7;
    var7 = function arg0, arg1() {
        _fun73220: for (var _fun73220_ip = 0;;) switch (_fun73220_ip) {
            case 0:
                var3 = arg1;
                var0 = null;
                if (!(var0 == var3)) {
                    _fun73220_ip = 13;
                    continue _fun73220
                }
            case 9:
                var0 = undefined;
                return var0;
            case 13:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 35;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.findMessageRowIndex;
                var0 = arg0;
                var0 = var1.bind(var2)(var0, var3);
                return var0;
        }
    };
    var2.findMessageIndex = var7;
    var2.getVisibleMessages = var6;
    var2.shouldJumpToOriginalPost = var5;
    var5 = function arg0() {
        _fun73221: for (var _fun73221_ip = 0;;) switch (_fun73221_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.jumpTargetId;
                var2 = null;
                if (!(var2 == var1)) {
                    _fun73221_ip = 63;
                    continue _fun73221
                }
            case 15:
                var1 = var0.oldestUnreadMessageId;
                if (!(var2 == var1)) {
                    _fun73221_ip = 63;
                    continue _fun73221
                }
            case 25:
                var1 = var0.shouldJumpToOriginalPost;
                if (var1) {
                    _fun73221_ip = 63;
                    continue _fun73221
                }
            case 34:
                var3 = var0.tracker;
                var2 = var3.start;
                var1 = {};
                var4 = var0.channelId;
                var1.channelId = var4;
                var1 = var2.bind(var3)(var1);
                _fun73221_ip = 79;
                continue _fun73221;
            case 63:
                var1 = var0.tracker;
                var0 = var1.cancel;
                var0 = var0.bind(var1)();
            case 79:
                var0 = undefined;
                return var0;
        }
    };
    var2.startOrCancelChannelLatestMessagesLoad = var5;
    var2.recordTimings = var4;
    var4 = function arg0, arg1() {
        _fun73222: for (var _fun73222_ip = 0;;) switch (_fun73222_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                if (!(var0 == var3)) {
                    _fun73222_ip = 13;
                    continue _fun73222
                }
            case 9:
                var0 = undefined;
                return var0;
            case 13:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 35;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.findMessageRowIndex;
                var0 = arg1;
                var0 = var1.bind(var2)(var0, var3);
                return var0;
        }
    };
    var2.findMessageIndexInRows = var4;
    var2.getMessage = var3;
    var3 = function arg0, arg1() {
        _fun73223: for (var _fun73223_ip = 0;;) switch (_fun73223_ip) {
            case 0:
                var0 = arg1;
                if (var0) {
                    _fun73223_ip = 10;
                    continue _fun73223
                }
            case 6:
                var0 = false;
                return var0;
            case 10:
                var1 = _closure1_slot22;
                var4 = undefined;
                var0 = arg0;
                var3 = var1.bind(var4)(var0);
                var1 = var3.bind(var4)();
                var0 = var1.done;
                var2 = var1;
                if (var0) {
                    _fun73223_ip = 98;
                    continue _fun73223
                }
            case 42:
                var0 = var2.value;
                var6 = var0.changeType;
                var1 = _closure1_slot15;
                var1 = var1.INSERT;
                if (!(var6 !== var1)) {
                    _fun73223_ip = 84;
                    continue _fun73223
                }
            case 67:
                var6 = var3.bind(var4)();
                var1 = var6.done;
                var2 = var6;
                if (var1) {
                    _fun73223_ip = 98;
                    continue _fun73223
                }
            case 82:
                _fun73223_ip = 42;
                continue _fun73223;
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
    var2.isLoadingAtTop = var3;
    var3 = function arg0, arg1() {
        _fun73224: for (var _fun73224_ip = 0;;) switch (_fun73224_ip) {
            case 0:
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 38;
                var1 = var1[var0];
                var0 = undefined;
                var3 = var3.bind(var0)(var1);
                var1 = var3.isIOS;
                var1 = var1.bind(var3)();
                if (!var1) {
                    _fun73224_ip = 77;
                    continue _fun73224
                }
            case 38:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 39;
                var2 = var4[var2];
                var2 = var3.bind(var0)(var2);
                var2 = var2.KeyboardTypes;
                var3 = var2.SYSTEM;
                var2 = arg1;
                var1 = var2 !== var3;
            case 77:
                if (!var1) {
                    _fun73224_ip = 104;
                    continue _fun73224
                }
            case 80:
                var1 = arg0;
                var2 = var1.current;
                var1 = null;
                if (!(var1 != var2)) {
                    _fun73224_ip = 104;
                    continue _fun73224
                }
            case 94:
                var1 = var2.closeCustomKeyboard;
                var1 = var1.bind(var2)();
            case 104:
                return var0;
        }
    };
    var2.handleTapTableView = var3;
    var3 = function arg0() {
        _fun73225: for (var _fun73225_ip = 0;;) switch (_fun73225_ip) {
            case 0:
                var6 = arg0;
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 40;
                var1 = var1[var0];
                var0 = undefined;
                var4 = var2.bind(var0)(var1);
                var3 = var4.track;
                var1 = _closure1_slot17;
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
                    _fun73225_ip = 149;
                    continue _fun73225
                }
            case 146:
                var8 = var9;
            case 149:
                var1.mime_type = var8;
                var1.file_size = var7;
                var6 = var6.fileDurationSec;
                var1.file_duration_sec = var6;
                var6 = _closure1_slot10;
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
    var2.handleMediaPlayFinishedAnalytics = var3;
    var3 = function arg0, arg1, arg2() {
        _fun73226: for (var _fun73226_ip = 0;;) switch (_fun73226_ip) {
            case 0:
                var4 = arguments[3];
                var0 = undefined;
                if (!(var4 === var0)) {
                    _fun73226_ip = 11;
                    continue _fun73226
                }
            case 9:
                var4 = true;
            case 11:
                var2 = {};
                var1 = true;
                var2.isAtBottom = var1;
                var1 = arg2;
                var1 = var1.bind(var0)(var2);
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 41;
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.scrollToBottom;
                var1 = arg0;
                var1 = var1.current;
                if (!var4) {
                    _fun73226_ip = 74;
                    continue _fun73226
                }
            case 68:
                var5 = arg1;
                var4 = !var5;
            case 74:
                var1 = var2.bind(var3)(var1, var4);
                return var0;
        }
    };
    var2.scrollToBottom = var3;
    var3 = function arg0, arg1() {
        _fun73227: for (var _fun73227_ip = 0;;) switch (_fun73227_ip) {
            case 0:
                var4 = arguments[2];
                var0 = undefined;
                if (!(var4 === var0)) {
                    _fun73227_ip = 11;
                    continue _fun73227
                }
            case 9:
                var4 = true;
            case 11:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 41;
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.scrollToTop;
                var1 = arg0;
                var1 = var1.current;
                if (!var4) {
                    _fun73227_ip = 57;
                    continue _fun73227
                }
            case 51:
                var5 = arg1;
                var4 = !var5;
            case 57:
                var1 = var2.bind(var3)(var1, var4);
                return var0;
        }
    };
    var2.scrollToTop = var3;
    var3 = function arg0, arg1, arg2() {
        _fun73228: for (var _fun73228_ip = 0;;) switch (_fun73228_ip) {
            case 0:
                var5 = arguments[3];
                var0 = undefined;
                if (!(var5 === var0)) {
                    _fun73228_ip = 11;
                    continue _fun73228
                }
            case 9:
                var5 = true;
            case 11:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 41;
                var1 = var3[var1];
                var4 = var2.bind(var0)(var1);
                var3 = var4.scrollToRelativeOffset;
                var1 = arg0;
                var2 = var1.current;
                if (!var5) {
                    _fun73228_ip = 57;
                    continue _fun73228
                }
            case 51:
                var1 = arg1;
                var5 = !var1;
            case 57:
                var1 = arg2;
                var1 = var3.bind(var4)(var2, var1, var5);
                return var0;
        }
    };
    var2.scrollToRelativeOffset = var3;
    var3 = function arg0, arg1() {
        _fun73229: for (var _fun73229_ip = 0;;) switch (_fun73229_ip) {
            case 0:
                var1 = arg1;
                var0 = var1.getPreviousRows;
                var0 = var0.bind(var1)();
                var2 = var0.length;
                var1 = 0;
                if (!(var2 > var1)) {
                    _fun73229_ip = 81;
                    continue _fun73229
                }
            case 24:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 41;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.scrollTo;
                var1 = arg0;
                var1 = var1.current;
                var4 = var0.length;
                var0 = 1;
                var0 = var4 - var0;
                var0 = var2.bind(var3)(var1, var0);
            case 81:
                var0 = undefined;
                return var0;
        }
    };
    var2.scrollToTopMessage = var3;
    var3 = function arg0, arg1() {
        _fun73230: for (var _fun73230_ip = 0;;) switch (_fun73230_ip) {
            case 0:
                var2 = arg0;
                var0 = arg1;
                if (!var0) {
                    _fun73230_ip = 38;
                    continue _fun73230
                }
            case 9:
                var4 = _closure1_slot11;
                var3 = var4.can;
                var1 = _closure1_slot20;
                var1 = var1.ADD_REACTIONS;
                var0 = var3.bind(var4)(var1, var2);
            case 38:
                if (var0) {
                    _fun73230_ip = 51;
                    continue _fun73230
                }
            case 41:
                var1 = var2.isPrivate;
                var0 = var1.bind(var2)();
            case 51:
                return var0;
        }
    };
    var2.canAddNewReactions = var3;
    var3 = function arg0, arg1, arg2() {
        _fun73231: for (var _fun73231_ip = 0;;) switch (_fun73231_ip) {
            case 0:
                var6 = arg1;
                var2 = arg2;
                var0 = undefined;
                var1 = true;
                var1 = var2.bind(var0)(var1);
                var1 = var6.hasMoreBefore;
                if (!var1) {
                    _fun73231_ip = 33;
                    continue _fun73231
                }
            case 24:
                var2 = var6.loadingMore;
                var1 = !var2;
            case 33:
                if (!var1) {
                    _fun73231_ip = 118;
                    continue _fun73231
                }
            case 36:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 42;
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.fetchMessages;
                var1 = {};
                var5 = arg0;
                var1.channelId = var5;
                var5 = var6.first;
                var6 = var5.bind(var6)();
                var5 = null;
                var7 = var5 == var6;
                var5 = undefined;
                if (var7) {
                    _fun73231_ip = 100;
                    continue _fun73231
                }
            case 95:
                var5 = var6.id;
            case 100:
                var1.before = var5;
                var4 = _closure1_slot21;
                var1.limit = var4;
                var1 = var2.bind(var3)(var1);
            case 118:
                return var0;
        }
    };
    var2.loadMoreBefore = var3;
    var3 = function arg0, arg1, arg2() {
        _fun73232: for (var _fun73232_ip = 0;;) switch (_fun73232_ip) {
            case 0:
                var6 = arg1;
                var2 = arg2;
                var0 = undefined;
                var1 = true;
                var1 = var2.bind(var0)(var1);
                var1 = var6.hasMoreAfter;
                if (!var1) {
                    _fun73232_ip = 33;
                    continue _fun73232
                }
            case 24:
                var2 = var6.loadingMore;
                var1 = !var2;
            case 33:
                if (!var1) {
                    _fun73232_ip = 118;
                    continue _fun73232
                }
            case 36:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 42;
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.fetchMessages;
                var1 = {};
                var5 = arg0;
                var1.channelId = var5;
                var5 = var6.last;
                var6 = var5.bind(var6)();
                var5 = null;
                var7 = var5 == var6;
                var5 = undefined;
                if (var7) {
                    _fun73232_ip = 100;
                    continue _fun73232
                }
            case 95:
                var5 = var6.id;
            case 100:
                var1.after = var5;
                var4 = _closure1_slot21;
                var1.limit = var4;
                var1 = var2.bind(var3)(var1);
            case 118:
                return var0;
        }
    };
    var2.loadMoreAfter = var3;
    var3 = function arg0, arg1, arg2, arg3, arg4() {
        var2 = arg1;
        var3 = {
            'animated': false,
            'hasHandledScroll': false,
            'isNearBottom': false,
            'isAtBottom': false,
            'isNearTop': false,
            'decelerating': false,
            'dragging': false,
            'hasMoreMessagesAfterForLastUpdate': false,
            'pendingUpdatesQueue': null,
            '_loaded': false,
            'animatingStickerMessageId': null
        };
        var5 = false;
        var0 = new Array(0);
        var3.pendingUpdatesQueue = var0;
        var1 = arg4;
        var0 = undefined;
        var1 = var1.bind(var0)(var3);
        var1 = var2.clear;
        var1 = var1.bind(var2)();
        var4 = _closure1_slot4;
        var3 = arg2;
        var2 = arg3;
        var2 = var4.bind(var0)(var3, var2, var5);
        var2 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 41;
        var1 = var3[var1];
        var3 = var2.bind(var0)(var1);
        var2 = var3.clearRows;
        var1 = arg0;
        var1 = var1.current;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.clearRows = var3;
    var3 = function arg0, arg1, arg2, arg3, arg4() {
        var2 = {};
        var0 = arg1;
        var2.firstVisibleMessageRowIndex = var0;
        var0 = arg2;
        var2.lastVisibleMessageRowIndex = var0;
        var0 = arg3;
        var2.firstVisibleMessagePercentVisible = var0;
        var0 = arg4;
        var2.lastVisibleMessagePercentVisible = var0;
        var3 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 43;
        var1 = var1[var0];
        var0 = undefined;
        var1 = var3.bind(var0)(var1);
        var1 = var1.QuestsVisibleMessagesChangedSource;
        var1 = var1.FIRST_LAYOUT;
        var2.source = var1;
        var1 = arg0;
        var1 = var1.bind(var0)(var2);
        return var0;
    };
    var2.handleFirstLayout = var3;
    var3 = function arg0, arg1, arg2, arg3, arg4() {
        var2 = {};
        var0 = arg1;
        var2.firstVisibleMessageRowIndex = var0;
        var0 = arg2;
        var2.lastVisibleMessageRowIndex = var0;
        var0 = arg3;
        var2.firstVisibleMessagePercentVisible = var0;
        var0 = arg4;
        var2.lastVisibleMessagePercentVisible = var0;
        var3 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 43;
        var1 = var1[var0];
        var0 = undefined;
        var1 = var3.bind(var0)(var1);
        var1 = var1.QuestsVisibleMessagesChangedSource;
        var1 = var1.VISIBILITY_CHANGED;
        var2.source = var1;
        var1 = arg0;
        var1 = var1.bind(var0)(var2);
        return var0;
    };
    var2.handleMessageVisibilityChanged = var3;
    var3 = function arg0, arg1, arg2() {
        _fun73236: for (var _fun73236_ip = 0;;) switch (_fun73236_ip) {
            case 0:
                var2 = arg0;
                var3 = arg1;
                var0 = global;
                var4 = var0.Set;
                var0 = new Array(1);
                var0[0] = var2;
                var1 = var4.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var4
                    }
                });
                var6 = var1;
                var5 = var0;
                var0 = new var6[var4](var5, var4);
                var1 = var0 instanceof Object ? var0 : var1;
                var0 = null;
                if (!(var0 != var3)) {
                    _fun73236_ip = 61;
                    continue _fun73236
                }
            case 51:
                var4 = var1.add;
                var4 = var4.bind(var1)(var3);
            case 61:
                var0 = null;
                if (!(var3 !== var2)) {
                    _fun73236_ip = 70;
                    continue _fun73236
                }
            case 67:
                var0 = var2;
            case 70:
                var3 = {};
                var2 = true;
                var3.forceRender = var2;
                var3.updateMessageIds = var1;
                var2 = arg2;
                var1 = undefined;
                var1 = var2.bind(var1)(var3);
                return var0;
        }
    };
    var2.handleLongPressSticker = var3;
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot28;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.handleTapNavBar = var3;
    var3 = function arg0, arg1, arg2() {
        _fun73238: for (var _fun73238_ip = 0;;) switch (_fun73238_ip) {
            case 0:
                var0 = arg0;
                var4 = arg1;
                var5 = var0.jumpReturnTargetId;
                var1 = null;
                if (!(var1 != var5)) {
                    _fun73238_ip = 78;
                    continue _fun73238
                }
            case 18:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 42;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.jumpToMessage;
                var1 = {};
                var6 = var4.id;
                var1.channelId = var6;
                var1.messageId = var5;
                var5 = true;
                var1.flash = var5;
                var1 = var2.bind(var3)(var1);
                _fun73238_ip = 176;
                continue _fun73238;
            case 78:
                var1 = var0.loadingMore;
                if (var1) {
                    _fun73238_ip = 176;
                    continue _fun73238
                }
            case 87:
                var0 = var0.hasMoreAfter;
                if (var0) {
                    _fun73238_ip = 107;
                    continue _fun73238
                }
            case 96:
                var1 = arg2;
                var0 = undefined;
                var0 = var1.bind(var0)();
                _fun73238_ip = 176;
                continue _fun73238;
            case 107:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 42;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.fetchMessages;
                var0 = {};
                var4 = var4.id;
                var0.channelId = var4;
                var3 = _closure1_slot21;
                var0.limit = var3;
                var3 = {};
                var4 = true;
                var3.present = var4;
                var0.jump = var3;
                var0 = var1.bind(var2)(var0);
            case 176:
                var0 = undefined;
                return var0;
        }
    };
    var2.jumpToPresent = var3;
    var3 = function arg0() {
        _fun73239: for (var _fun73239_ip = 0;;) switch (_fun73239_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.channel;
                var7 = var0.channelId;
                var10 = var0.messages;
                var6 = var0.hasJumpedToOriginalPost;
                var9 = var0.useReducedMotion;
                var8 = var0.oldestUnreadMessageId;
                var13 = var0.chatManagerRows;
                var4 = var0.findMessageIndex;
                var3 = var0.chatRef;
                var2 = var0.loadMoreBefore;
                var12 = _closure1_slot1;
                var11 = _closure1_slot2;
                var0 = 44;
                var11 = var11[var0];
                var0 = undefined;
                var14 = var12.bind(var0)(var11);
                var12 = var14.getCurrentConfig;
                var11 = {};
                var15 = 'Messages';
                var11.location = var15;
                var11 = var12.bind(var14)(var11);
                var11 = var11.enabled;
                if (var11) {
                    _fun73239_ip = 399;
                    continue _fun73239
                }
            case 118:
                var4 = var4.bind(var0)(var8);
                var8 = null;
                if (!(var8 != var4)) {
                    _fun73239_ip = 494;
                    continue _fun73239
                }
            case 132:
                var14 = var4 + 1;
                var4 = var13.length;
                var8 = var14;
                if (!(var14 < var4)) {
                    _fun73239_ip = 275;
                    continue _fun73239
                }
            case 150:
                var4 = var13[var14];
                var11 = var4.type;
                var4 = _closure1_slot14;
                var4 = var4.SEPARATOR;
                var8 = var14;
                if (!(var11 === var4)) {
                    _fun73239_ip = 275;
                    continue _fun73239
                }
            case 176:
                var4 = var13[var14];
                var11 = var4.id;
                var4 = _closure1_slot16;
                var4 = var4.UNREAD;
                var12 = var14;
                var8 = var12;
                if (!(var11 !== var4)) {
                    _fun73239_ip = 275;
                    continue _fun73239
                }
            case 205:
                var14 = var12 + 1;
                var4 = var13.length;
                var8 = var14;
                if (!(var14 < var4)) {
                    _fun73239_ip = 275;
                    continue _fun73239
                }
            case 220:
                var4 = var13[var14];
                var11 = var4.type;
                var4 = _closure1_slot14;
                var4 = var4.SEPARATOR;
                var8 = var14;
                if (!(var11 === var4)) {
                    _fun73239_ip = 275;
                    continue _fun73239
                }
            case 246:
                var4 = var13[var14];
                var11 = var4.id;
                var4 = _closure1_slot16;
                var4 = var4.UNREAD;
                var12 = var14;
                var8 = var12;
                if (var11 !== var4) {
                    _fun73239_ip = 205;
                    continue _fun73239
                }
            case 275:
                var4 = _closure1_slot25;
                var20 = undefined;
                var19 = var5;
                var18 = var7;
                var17 = var10;
                var16 = var6;
                var4 = var20[var4](var19, var18, var17, var16, var15);
                if (var4) {
                    _fun73239_ip = 393;
                    continue _fun73239
                }
            case 300:
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var4 = 41;
                var4 = var7[var4];
                var7 = var6.bind(var0)(var4);
                var6 = var7.scrollTo;
                var4 = var3.current;
                var3 = {};
                if (var9) {
                    _fun73239_ip = 378;
                    continue _fun73239
                }
            case 336:
                var11 = var10.jumpType;
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var10 = 45;
                var10 = var13[var10];
                var10 = var12.bind(var0)(var10);
                var10 = var10.JumpTypes;
                var10 = var10.INSTANT;
                var9 = var11 === var10;
            case 378:
                var9 = !var9;
                var3.animated = var9;
                var3 = var6.bind(var7)(var4, var8, var3);
            case 393:
                var2 = var2.bind(var0)();
                _fun73239_ip = 494;
                continue _fun73239;
            case 399:
                var4 = _closure1_slot12;
                var3 = var4.ackMessageId;
                var2 = var5.id;
                var4 = var3.bind(var4)(var2);
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 42;
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.jumpToMessage;
                var1 = {};
                var6 = var5.id;
                var1.channelId = var6;
                var6 = null;
                if (!(var6 == var4)) {
                    _fun73239_ip = 467;
                    continue _fun73239
                }
            case 462:
                var4 = var5.id;
            case 467:
                var1.messageId = var4;
                var4 = 1;
                var1.offset = var4;
                var4 = 'Mark As Read';
                var1.context = var4;
                var1 = var2.bind(var3)(var1);
            case 494:
                return var0;
        }
    };
    var2.scrollToNewMessages = var3;
    var3 = function arg0() {
        _fun73240: for (var _fun73240_ip = 0;;) switch (_fun73240_ip) {
            case 0:
                var4 = arg0;
                var3 = var4.messages;
                var _closure2_slot0 = var3;
                var1 = var4.isMessagesReady;
                var8 = var4.oldestUnreadMessageId;
                var _closure2_slot1 = var8;
                var2 = var4.channelId;
                var9 = var4.updateRows;
                var4 = var4.scrollToMessageId;
                var _closure2_slot2 = var4;
                if (var1) {
                    _fun73240_ip = 69;
                    continue _fun73240
                }
            case 55:
                var5 = undefined;
                var1 = {};
                var1 = var9.bind(var5)(var1);
                _fun73240_ip = 256;
                continue _fun73240;
            case 69:
                var6 = {};
                var1 = var3.jumpTargetId;
                var6.scrollToMessageId = var1;
                var1 = var3.jumpTargetId;
                var6.jumpTargetId = var1;
                var11 = _closure1_slot0;
                var1 = _closure1_slot2;
                var7 = 45;
                var10 = var1[var7];
                var1 = undefined;
                var10 = var11.bind(var1)(var10);
                var10 = var10.JumpTypes;
                var10 = var10.INSTANT;
                var6.jumpType = var10;
                var10 = var3.focusTargetId;
                var6.focusTargetId = var10;
                var6 = var9.bind(var1)(var6);
                var9 = var3.jumpTargetId;
                var6 = null;
                if (!(var6 == var9)) {
                    _fun73240_ip = 193;
                    continue _fun73240
                }
            case 163:
                if (!(var6 != var8)) {
                    _fun73240_ip = 256;
                    continue _fun73240
                }
            case 167:
                var6 = global;
                var8 = var6.setTimeout;
                var6 = function() { // Environment: var0
                    var2 = _closure2_slot2;
                    var1 = {};
                    var3 = _closure2_slot1;
                    var1.scrollToMessageId = var3;
                    var0 = _closure2_slot0;
                    var0 = var0.jumpTargetId;
                    var1.jumpTargetId = var0;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var0 = 45;
                    var3 = var3[var0];
                    var0 = undefined;
                    var3 = var4.bind(var0)(var3);
                    var3 = var3.JumpTypes;
                    var3 = var3.INSTANT;
                    var1.jumpType = var3;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var0 = 50;
                var0 = var8.bind(var1)(var6, var0);
                _fun73240_ip = 256;
                continue _fun73240;
            case 193:
                var0 = {};
                var6 = var3.jumpTargetId;
                var0.scrollToMessageId = var6;
                var6 = var3.jumpTargetId;
                var0.jumpTargetId = var6;
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var7];
                var5 = var6.bind(var1)(var5);
                var5 = var5.JumpTypes;
                var5 = var5.INSTANT;
                var0.jumpType = var5;
                var0 = var4.bind(var1)(var0);
            case 256:
                var1 = _closure1_slot26;
                var0 = undefined;
                var1 = var1.bind(var0)(var2, var3);
                return var0;
        }
    };
    var2.syncMessageDisplay = var3;
    var3 = function arg0() {
        var0 = arg0;
        return var0;
    };
    var2.getChatRef = var3;
    var3 = function arg0, arg1() {
        _fun73243: for (var _fun73243_ip = 0;;) switch (_fun73243_ip) {
            case 0:
                var3 = arg0;
                var2 = arg1;
                var _closure2_slot0 = var3;
                var0 = var2.chatRef;
                var _closure2_slot1 = var0;
                var0 = var2.findMessageIndex;
                var _closure2_slot2 = var0;
                var0 = var2.updateRows;
                var _closure2_slot3 = var0;
                var5 = var2.updateRowsEnabled;
                var0 = undefined;
                var4 = var0 !== var5;
                if (!var4) {
                    _fun73243_ip = 60;
                    continue _fun73243
                }
            case 57:
                var4 = var5;
            case 60:
                var _closure2_slot4 = var4;
                var2 = var2.jumpType;
                if (!(var0 === var2)) {
                    _fun73243_ip = 109;
                    continue _fun73243
                }
            case 74:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var4 = 45;
                var4 = var6[var4];
                var4 = var5.bind(var0)(var4);
                var4 = var4.JumpTypes;
                var2 = var4.INSTANT;
            case 109:
                var _closure2_slot5 = var2;
                var2 = null;
                if (!(var2 != var3)) {
                    _fun73243_ip = 143;
                    continue _fun73243
                }
            case 119:
                var2 = global;
                var3 = var2.setTimeout;
                var2 = function() { // Environment: var1
                    _fun73244: for (var _fun73244_ip = 0;;) switch (_fun73244_ip) {
                        case 0:
                            var2 = _closure2_slot2;
                            var1 = _closure2_slot0;
                            var0 = undefined;
                            var5 = var2.bind(var0)(var1);
                            var2 = null;
                            if (!(var2 != var5)) {
                                _fun73244_ip = 231;
                                continue _fun73244
                            }
                        case 27:
                            var1 = _closure2_slot1;
                            var1 = var1.current;
                            if (!(var2 != var1)) {
                                _fun73244_ip = 231;
                                continue _fun73244
                            }
                        case 43:
                            var2 = _closure2_slot4;
                            var1 = false;
                            if (!var2) {
                                _fun73244_ip = 140;
                                continue _fun73244
                            }
                        case 52:
                            var4 = _closure2_slot3;
                            var3 = {};
                            var2 = _closure2_slot0;
                            var3.scrollToMessageId = var2;
                            var3.jumpTargetId = var2;
                            var6 = _closure2_slot5;
                            var3.jumpType = var6;
                            var3.focusTargetId = var2;
                            var6 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var2 = 45;
                            var2 = var8[var2];
                            var2 = var6.bind(var0)(var2);
                            var2 = var2.JumpTypes;
                            var2 = var2.INSTANT;
                            var3.overrideScrollJumpType = var2;
                            var2 = true;
                            var3.isRescrolling = var2;
                            var3 = var4.bind(var0)(var3);
                            var1 = true;
                        case 140:
                            if (var1) {
                                _fun73244_ip = 231;
                                continue _fun73244
                            }
                        case 143:
                            var2 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var1 = 41;
                            var1 = var9[var1];
                            var4 = var2.bind(var0)(var1);
                            var3 = var4.scrollTo;
                            var1 = _closure2_slot1;
                            var2 = var1.current;
                            var1 = {};
                            var7 = _closure2_slot5;
                            var8 = _closure1_slot0;
                            var6 = 45;
                            var6 = var9[var6];
                            var6 = var8.bind(var0)(var6);
                            var6 = var6.JumpTypes;
                            var6 = var6.ANIMATED;
                            var6 = var7 === var6;
                            var1.animated = var6;
                            var1 = var3.bind(var4)(var2, var5, var1);
                        case 231:
                            return var0;
                    }
                };
                var1 = 50;
                var1 = var3.bind(var0)(var2, var1);
            case 143:
                return var0;
        }
    };
    var2.maybeRescrollToMessageId = var3;
    var1 = function arg0() {
        _fun73245: for (var _fun73245_ip = 0;;) switch (_fun73245_ip) {
            case 0:
                var0 = arg0;
                var13 = var0.firstVisibleMessageRowIndex;
                var9 = var0.firstVisibleMessagePercentVisible;
                var12 = var0.lastVisibleMessageRowIndex;
                var8 = var0.lastVisibleMessagePercentVisible;
                var11 = var0.source;
                var7 = var0.chatManager;
                var10 = var0.shouldTrackAnnouncementMessageViews;
                var5 = var0.shouldTrackRichPresenceInviteEmbedViews;
                var4 = var0.guildId;
                var6 = var0.channelId;
                var3 = var0.channel;
                var0 = null;
                if (!(var0 != var13)) {
                    _fun73245_ip = 264;
                    continue _fun73245
                }
            case 74:
                if (!(var0 != var12)) {
                    _fun73245_ip = 264;
                    continue _fun73245
                }
            case 81:
                if (!(var0 != var9)) {
                    _fun73245_ip = 264;
                    continue _fun73245
                }
            case 88:
                if (!(var0 != var8)) {
                    _fun73245_ip = 264;
                    continue _fun73245
                }
            case 95:
                var2 = _closure1_slot24;
                var1 = {};
                var1.firstVisibleMessageRowIndex = var13;
                var1.lastVisibleMessageRowIndex = var12;
                var1.firstVisibleMessagePercentVisible = var9;
                var1.lastVisibleMessagePercentVisible = var8;
                var1.chatManager = var7;
                var1.channelId = var6;
                var6 = undefined;
                var2 = var2.bind(var6)(var1);
                var7 = var2.length;
                var1 = 0;
                if (!(!(var7 <= var1))) {
                    _fun73245_ip = 264;
                    continue _fun73245
                }
            case 151:
                var1 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 46;
                var0 = var7[var0];
                var9 = var1.bind(var6)(var0);
                var8 = var9.questsVisibleMobileMessagesChanged;
                var0 = {};
                var0.visibleMessages = var2;
                var0.source = var11;
                var0 = var8.bind(var9)(var0);
                var0 = 47;
                var8 = var7[var0];
                var9 = var1.bind(var6)(var8);
                var8 = var9.handleAnnouncementMessageViewTracking;
                var18 = var9;
                var17 = var2;
                var16 = var10;
                var15 = var4;
                var14 = var3;
                var8 = var18[var8](var17, var16, var15, var14, var13);
                var0 = var7[var0];
                var1 = var1.bind(var6)(var0);
                var0 = var1.handleRichPresenceInviteEmbedViewTracking;
                var18 = var1;
                var17 = var2;
                var16 = var5;
                var15 = var4;
                var14 = var3;
                var0 = var18[var0](var17, var16, var15, var14, var13);
            case 264:
                var0 = undefined;
                return var0;
        }
    };
    var2.handleVisibleMessagesChange = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 7856, 4232, 1372, 1672, 4198, 4213, 3585, 3050, 3906, 1613, 6479, 660, 3939, 3933, 1636, 4237, 6515, 4787, 3039, 3107, 1234, 9178, 9179, 1628, 3238, 3239, 7405, 6429, 6431, 4266, 5253, 4200, 21, 3106, 9192, 14, 22, 478, 1567, 795, 9193, 6488, 5193, 9197, 4215, 5221, 9198, 2]);