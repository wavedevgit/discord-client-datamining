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
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var1
        _fun73170: for (var _fun73170_ip = 0;;) switch (_fun73170_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun73170_ip = 45;
                    continue _fun73170
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 45:
                if (var1) {
                    _fun73170_ip = 54;
                    continue _fun73170
                }
            case 48:
                var1 = var2["@@iterator"];
            case 54:
                if (var1) {
                    _fun73170_ip = 344;
                    continue _fun73170
                }
            case 60:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun73170_ip = 322;
                    continue _fun73170
                }
            case 85:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun73170_ip = 282;
                    continue _fun73170
                }
            case 95:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun73170_ip = 269;
                    continue _fun73170
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
                    _fun73170_ip = 162;
                    continue _fun73170
                }
            case 157:
                var6 = var2.constructor;
            case 162:
                var9 = var8;
                if (!var6) {
                    _fun73170_ip = 178;
                    continue _fun73170
                }
            case 168:
                var6 = var2.constructor;
                var9 = var6.name;
            case 178:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun73170_ip = 248;
                    continue _fun73170
                }
            case 186:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun73170_ip = 248;
                    continue _fun73170
                }
            case 194:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun73170_ip = 233;
                    continue _fun73170
                }
            case 204:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun73170_ip = 246;
                    continue _fun73170
                }
            case 233:
                var8 = _closure1_slot23;
                var6 = var8.bind(var7)(var2, var7);
            case 246:
                _fun73170_ip = 264;
                continue _fun73170;
            case 248:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 264:
                var5 = var6;
                _fun73170_ip = 282;
                continue _fun73170;
            case 269:
                var6 = _closure1_slot23;
                var5 = var6.bind(var7)(var2, var7);
            case 282:
                var3 = var5;
                if (var3) {
                    _fun73170_ip = 322;
                    continue _fun73170
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
                    _fun73170_ip = 329;
                    continue _fun73170
                }
            case 325:
                _closure2_slot0 = var3;
            case 329:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun73171: for (var _fun73171_ip = 0;;) switch (_fun73171_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun73171_ip = 56;
                                continue _fun73171
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
                            _fun73171_ip = 67;
                            continue _fun73171;
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
    var _closure1_slot22 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var1
        _fun73172: for (var _fun73172_ip = 0;;) switch (_fun73172_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun73172_ip = 23;
                    continue _fun73172
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun73172_ip = 33;
                    continue _fun73172
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
                    _fun73172_ip = 70;
                    continue _fun73172
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun73172_ip = 55;
                    continue _fun73172
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot23 = var0;
    var6 = function(arg0) { // Original name: getVisibleMessages, environment: var1
        _fun73173: for (var _fun73173_ip = 0;;) switch (_fun73173_ip) {
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
                    _fun73173_ip = 344;
                    continue _fun73173
                }
            case 47:
                if (!(var8 != var13)) {
                    _fun73173_ip = 344;
                    continue _fun73173
                }
            case 54:
                var0 = 0;
                if (!(!(var14 < var0))) {
                    _fun73173_ip = 344;
                    continue _fun73173
                }
            case 63:
                if (!(!(var13 < var0))) {
                    _fun73173_ip = 344;
                    continue _fun73173
                }
            case 70:
                var0 = var10._rows;
                if (!(var8 != var0)) {
                    _fun73173_ip = 344;
                    continue _fun73173
                }
            case 83:
                var0 = var10._messages;
                if (!(var8 != var0)) {
                    _fun73173_ip = 344;
                    continue _fun73173
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
                    _fun73173_ip = 342;
                    continue _fun73173
                }
            case 125:
                var15 = var10._rows;
                var18 = var15[var4];
                var17 = var3;
                var16 = var2;
                var15 = var1;
                if (!(var8 != var18)) {
                    _fun73173_ip = 323;
                    continue _fun73173
                }
            case 151:
                var20 = var18.type;
                var19 = _closure1_slot14;
                var19 = var19.MESSAGE;
                var17 = var3;
                var16 = var2;
                var15 = var1;
                if (!(var20 === var19)) {
                    _fun73173_ip = 323;
                    continue _fun73173
                }
            case 182:
                var20 = var18.message;
                var21 = var8 == var20;
                var19 = undefined;
                if (var21) {
                    _fun73173_ip = 201;
                    continue _fun73173
                }
            case 196:
                var19 = var20.id;
            case 201:
                var17 = var20;
                var16 = var2;
                var15 = var1;
                if (!(var8 != var19)) {
                    _fun73173_ip = 323;
                    continue _fun73173
                }
            case 214:
                if (!(var4 === var14)) {
                    _fun73173_ip = 225;
                    continue _fun73173
                }
            case 218:
                var19 = var12;
                if (!(var8 == var19)) {
                    _fun73173_ip = 245;
                    continue _fun73173
                }
            case 225:
                var21 = var4 === var13;
                if (!var21) {
                    _fun73173_ip = 236;
                    continue _fun73173
                }
            case 232:
                var21 = var8 != var11;
            case 236:
                var19 = var5;
                if (!var21) {
                    _fun73173_ip = 245;
                    continue _fun73173
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
                    _fun73173_ip = 323;
                    continue _fun73173
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
                    _fun73173_ip = 125;
                    continue _fun73173
                }
            case 342:
                return var0;
            case 344:
                var0 = new Array(0);
                return var0;
        }
    };
    var _closure1_slot24 = var6;
    var5 = function(arg0, arg1, arg2, arg3) { // Original name: shouldJumpToOriginalPost, environment: var1
        _fun73174: for (var _fun73174_ip = 0;;) switch (_fun73174_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.isForumPost;
                var0 = var0.bind(var1)();
                if (!var0) {
                    _fun73174_ip = 68;
                    continue _fun73174
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
                    _fun73174_ip = 77;
                    continue _fun73174
                }
            case 71:
                var1 = arg3;
                var0 = !var1;
            case 77:
                return var0;
        }
    };
    var _closure1_slot25 = var5;
    var4 = function(arg0, arg1) { // Original name: recordTimings, environment: var1
        _fun73175: for (var _fun73175_ip = 0;;) switch (_fun73175_ip) {
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
                    _fun73175_ip = 83;
                    continue _fun73175
                }
            case 62:
                var2 = var1.ready;
                if (!var2) {
                    _fun73175_ip = 80;
                    continue _fun73175
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
    var3 = function(arg0, arg1) { // Original name: getMessage, environment: var1
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
            _fun73178: for (var _fun73178_ip = 0;;) switch (_fun73178_ip) {
                case 0:
                    var0 = arg0;
                    var3 = var0.id;
                    var2 = var0.nonce;
                    var0 = _closure2_slot0;
                    var0 = var3 === var0;
                    if (var0) {
                        _fun73178_ip = 36;
                        continue _fun73178
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
    var0 = function() { // Original name: _handleTapNavBar, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun73181: for (var _fun73181_ip = 0;;) switch (_fun73181_ip) {
                    case 0:
                        StartGenerator();
                        var2 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun73181_ip = 392;
                            continue _fun73181
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
                            _fun73181_ip = 389;
                            continue _fun73181
                        }
                    case 90:
                        if (var4) {
                            _fun73181_ip = 389;
                            continue _fun73181
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
                            _fun73181_ip = 277;
                            continue _fun73181
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
                            _fun73181_ip = 274;
                            continue _fun73181
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
                        _fun73181_ip = 389;
                        continue _fun73181;
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
                            _fun73181_ip = 386;
                            continue _fun73181
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
                        _fun73181_ip = 389;
                        continue _fun73181;
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
    var7 = function(arg0, arg1, arg2, arg3, arg4) { // Original name: getLongPressSelectedMedia, environment: var1
        _fun73184: for (var _fun73184_ip = 0;;) switch (_fun73184_ip) {
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
                    _fun73184_ip = 93;
                    continue _fun73184
                }
            case 42:
                var2 = var8.messageReference;
                var3 = null;
                var1 = var8;
                if (!(var3 != var2)) {
                    _fun73184_ip = 93;
                    continue _fun73184
                }
            case 57:
                var10 = _closure1_slot5;
                var9 = var10.getMessageByReference;
                var2 = var8.messageReference;
                var2 = var9.bind(var10)(var2);
                var2 = var2.message;
                var1 = var8;
                if (!(var3 != var2)) {
                    _fun73184_ip = 93;
                    continue _fun73184
                }
            case 90:
                var1 = var2;
            case 93:
                var2 = 'attachment';
                if (!(var2 !== var0)) {
                    _fun73184_ip = 618;
                    continue _fun73184
                }
            case 104:
                var3 = 'embed';
                if (!(var3 !== var0)) {
                    _fun73184_ip = 343;
                    continue _fun73184
                }
            case 115:
                var9 = 'component';
                if (!(var9 !== var0)) {
                    _fun73184_ip = 127;
                    continue _fun73184
                }
            case 123:
                var0 = null;
                return var0;
            case 127:
                var0 = null;
                if (!(var0 != var11)) {
                    _fun73184_ip = 341;
                    continue _fun73184
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
                    _fun73184_ip = 339;
                    continue _fun73184
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
                    _fun73184_ip = 235;
                    continue _fun73184
                }
            case 233:
                return var0;
            case 235:
                if (!(var0 != var6)) {
                    _fun73184_ip = 337;
                    continue _fun73184
                }
            case 239:
                var3 = var8.items;
                var3 = var3[var6];
                if (!(var0 != var3)) {
                    _fun73184_ip = 335;
                    continue _fun73184
                }
            case 253:
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
                    _fun73184_ip = 318;
                    continue _fun73184
                }
            case 314:
                var8 = 'video';
            case 318:
                var3.mediaType = var8;
                var6 = var6.url;
                var3.mediaUrl = var6;
                return var3;
            case 335:
                return var0;
            case 337:
                return var0;
            case 339:
                return var0;
            case 341:
                return var0;
            case 343:
                var0 = var1.embeds;
                var3 = var0[var5];
                var _closure2_slot0 = var3;
                var0 = null;
                if (!(var0 != var3)) {
                    _fun73184_ip = 616;
                    continue _fun73184
                }
            case 366:
                var8 = function(arg0, arg1, arg2) { // Original name: getEmbedMedia, environment: var4
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
                    _fun73184_ip = 404;
                    continue _fun73184
                }
            case 392:
                var4 = var3.url;
                if (!(var0 == var4)) {
                    _fun73184_ip = 597;
                    continue _fun73184
                }
            case 404:
                var6 = var3.type;
                var4 = _closure1_slot18;
                var4 = var4.GIFV;
                if (!(var6 === var4)) {
                    _fun73184_ip = 435;
                    continue _fun73184
                }
            case 423:
                var4 = var3.url;
                if (!(var0 == var4)) {
                    _fun73184_ip = 578;
                    continue _fun73184
                }
            case 435:
                var6 = var3.type;
                var4 = _closure1_slot18;
                var4 = var4.RICH;
                if (!(var6 === var4)) {
                    _fun73184_ip = 504;
                    continue _fun73184
                }
            case 454:
                var6 = var3.image;
                var9 = var0 == var6;
                var10 = undefined;
                var4 = undefined;
                if (var9) {
                    _fun73184_ip = 476;
                    continue _fun73184
                }
            case 471:
                var4 = var6.url;
            case 476:
                if (!(var0 == var4)) {
                    _fun73184_ip = 542;
                    continue _fun73184
                }
            case 480:
                var6 = var3.video;
                var9 = var0 == var6;
                var4 = undefined;
                if (var9) {
                    _fun73184_ip = 500;
                    continue _fun73184
                }
            case 495:
                var4 = var6.url;
            case 500:
                if (!(var0 == var4)) {
                    _fun73184_ip = 506;
                    continue _fun73184
                }
            case 504:
                return var0;
            case 506:
                var4 = var3.video;
                var9 = var4.url;
                var4 = var3.video;
                var6 = var4.contentType;
                var4 = 'video';
                var4 = var8.bind(var10)(var4, var9, var6);
                return var4;
            case 542:
                var4 = var3.image;
                var9 = var4.url;
                var4 = var3.image;
                var6 = var4.contentType;
                var4 = 'image';
                var4 = var8.bind(var10)(var4, var9, var6);
                return var4;
            case 578:
                var9 = var3.url;
                var6 = undefined;
                var4 = 'video';
                var4 = var8.bind(var6)(var4, var9);
                return var4;
            case 597:
                var6 = var3.url;
                var4 = undefined;
                var3 = 'image';
                var3 = var8.bind(var4)(var3, var6);
                return var3;
            case 616:
                return var0;
            case 618:
                var0 = var1.attachments;
                var3 = var0[var5];
                var4 = null;
                if (!(var4 == var3)) {
                    _fun73184_ip = 666;
                    continue _fun73184
                }
            case 634:
                var0 = var1.getContentMessage;
                var1 = var0.bind(var1)();
                var6 = var4 == var1;
                var0 = undefined;
                if (var6) {
                    _fun73184_ip = 663;
                    continue _fun73184
                }
            case 653:
                var1 = var1.attachments;
                var0 = var1[var5];
            case 663:
                var3 = var0;
            case 666:
                var1 = var4 == var3;
                var0 = null;
                if (var1) {
                    _fun73184_ip = 868;
                    continue _fun73184
                }
            case 678:
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
                    _fun73184_ip = 827;
                    continue _fun73184
                }
            case 735:
                var8 = _closure1_slot0;
                var6 = _closure1_slot2;
                var6 = var6[var9];
                var10 = var8.bind(var2)(var6);
                var8 = var10.isAudioFile;
                var6 = var3.filename;
                var8 = var8.bind(var10)(var6);
                var6 = 'audio';
                if (var8) {
                    _fun73184_ip = 824;
                    continue _fun73184
                }
            case 776:
                var8 = _closure1_slot0;
                var7 = _closure1_slot2;
                var7 = var7[var9];
                var9 = var8.bind(var2)(var7);
                var8 = var9.isImageFile;
                var7 = var3.filename;
                var8 = var8.bind(var9)(var7);
                var7 = 'file';
                if (!var8) {
                    _fun73184_ip = 821;
                    continue _fun73184
                }
            case 817:
                var7 = 'image';
            case 821:
                var6 = var7;
            case 824:
                var5 = var6;
            case 827:
                var1.mediaType = var5;
                var5 = var3.url;
                var1.mediaUrl = var5;
                var3 = var3.content_type;
                var4 = var4 != var3;
                var2 = undefined;
                if (!var4) {
                    _fun73184_ip = 860;
                    continue _fun73184
                }
            case 857:
                var2 = var3;
            case 860:
                var1.contentType = var2;
                var0 = var1;
            case 868:
                return var0;
        }
    };
    var2.getLongPressSelectedMedia = var7;
    var7 = function(arg0) { // Original name: toObscuredMedia, environment: var1
        _fun73186: for (var _fun73186_ip = 0;;) switch (_fun73186_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.sourceType;
                var0 = 'attachment';
                if (!(var0 !== var1)) {
                    _fun73186_ip = 91;
                    continue _fun73186
                }
            case 17:
                var3 = var2.sourceType;
                var1 = 'embed';
                var0 = null;
                if (!(var1 === var3)) {
                    _fun73186_ip = 89;
                    continue _fun73186
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
                _fun73186_ip = 147;
                continue _fun73186;
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
    var7 = function(arg0, arg1, arg2) { // Original name: handleAddOrRemoveReaction, environment: var1
        _fun73187: for (var _fun73187_ip = 0;;) switch (_fun73187_ip) {
            case 0:
                var9 = arg0;
                var6 = arg1;
                var8 = arg2;
                var7 = arguments[3];
                var5 = arguments[4];
                var0 = undefined;
                if (!(var7 === var0)) {
                    _fun73187_ip = 23;
                    continue _fun73187
                }
            case 21:
                var7 = false;
            case 23:
                if (!(var5 === var0)) {
                    _fun73187_ip = 62;
                    continue _fun73187
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
                    _fun73187_ip = 104;
                    continue _fun73187
                }
            case 99:
                var14 = var13.id;
            case 104:
                var10 = var1 != var15;
                if (!var10) {
                    _fun73187_ip = 126;
                    continue _fun73187
                }
            case 111:
                var3 = _closure1_slot8;
                var2 = var3.canChatInGuild;
                var10 = var2.bind(var3)(var15);
            case 126:
                var2 = var1 != var15;
                if (!var2) {
                    _fun73187_ip = 164;
                    continue _fun73187
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
                    _fun73187_ip = 198;
                    continue _fun73187
                }
            case 173:
                var3 = var1 != var14;
                var12 = null;
                if (!var3) {
                    _fun73187_ip = 198;
                    continue _fun73187
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
                    _fun73187_ip = 752;
                    continue _fun73187
                }
            case 245:
                if (!(var1 == var8)) {
                    _fun73187_ip = 306;
                    continue _fun73187
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
                _fun73187_ip = 908;
                continue _fun73187;
            case 306:
                if (!var7) {
                    _fun73187_ip = 390;
                    continue _fun73187
                }
            case 309:
                var11 = var8.me_burst;
                var12 = !var11;
                var11 = true;
                if (!(var11 === var12)) {
                    _fun73187_ip = 390;
                    continue _fun73187
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
                    _fun73187_ip = 390;
                    continue _fun73187
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
                    _fun73187_ip = 631;
                    continue _fun73187
                }
            case 405:
                if (!var7) {
                    _fun73187_ip = 421;
                    continue _fun73187
                }
            case 408:
                var11 = var8.me_burst;
                if (!(var12 !== var11)) {
                    _fun73187_ip = 631;
                    continue _fun73187
                }
            case 421:
                if (var2) {
                    _fun73187_ip = 575;
                    continue _fun73187
                }
            case 427:
                var11 = var6.isPrivate;
                var11 = var11.bind(var6)();
                if (var11) {
                    _fun73187_ip = 446;
                    continue _fun73187
                }
            case 440:
                if (!var10) {
                    _fun73187_ip = 575;
                    continue _fun73187
                }
            case 446:
                if (var3) {
                    _fun73187_ip = 575;
                    continue _fun73187
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
                    _fun73187_ip = 571;
                    continue _fun73187
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
                    _fun73187_ip = 908;
                    continue _fun73187
                }
            case 581:
                var2 = var6.getGuildId;
                var3 = var2.bind(var6)();
                if (!(var1 != var3)) {
                    _fun73187_ip = 908;
                    continue _fun73187
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
                    _fun73187_ip = 862;
                    continue _fun73187
                }
            case 847:
                var5 = var6.X2L3Oa;
                var5 = var7.bind(var8)(var5);
                _fun73187_ip = 875;
                continue _fun73187;
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
    var7 = function(arg0, arg1) { // Original name: handleToggleFollowForumPost, environment: var1
        _fun73188: for (var _fun73188_ip = 0;;) switch (_fun73188_ip) {
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
                    _fun73188_ip = 99;
                    continue _fun73188
                }
            case 79:
                var2 = var3.joinThread;
                var1 = 'iOS Forum Toolbar';
                var1 = var2.bind(var3)(var4, var1);
                _fun73188_ip = 117;
                continue _fun73188;
            case 99:
                var2 = var3.leaveThread;
                var1 = 'iOS Forum Toolbar';
                var1 = var2.bind(var3)(var4, var1);
            case 117:
                return var0;
        }
    };
    var2.handleToggleFollowForumPost = var7;
    var7 = function(arg0, arg1, arg2) { // Original name: handleCopyLinkForumPost, environment: var1
        _fun73189: for (var _fun73189_ip = 0;;) switch (_fun73189_ip) {
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
                    _fun73189_ip = 44;
                    continue _fun73189
                }
            case 38:
                var3 = var7.parent_id;
            case 44:
                var6 = var4.bind(var5)(var3);
                var4 = var2 == var6;
                var3 = undefined;
                if (var4) {
                    _fun73189_ip = 68;
                    continue _fun73189
                }
            case 58:
                var4 = var6.isMediaChannel;
                var3 = var4.bind(var6)();
            case 68:
                var9 = var2 != var3;
                if (!var9) {
                    _fun73189_ip = 78;
                    continue _fun73189
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
                    _fun73189_ip = 175;
                    continue _fun73189
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
                    _fun73189_ip = 289;
                    continue _fun73189
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
                _fun73189_ip = 387;
                continue _fun73189;
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
                    _fun73189_ip = 372;
                    continue _fun73189
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
    var7 = function(arg0, arg1) { // Original name: findMessageIndex, environment: var1
        _fun73190: for (var _fun73190_ip = 0;;) switch (_fun73190_ip) {
            case 0:
                var3 = arg1;
                var0 = null;
                if (!(var0 == var3)) {
                    _fun73190_ip = 13;
                    continue _fun73190
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
    var5 = function(arg0) { // Original name: startOrCancelChannelLatestMessagesLoad, environment: var1
        _fun73191: for (var _fun73191_ip = 0;;) switch (_fun73191_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.jumpTargetId;
                var2 = null;
                if (!(var2 == var1)) {
                    _fun73191_ip = 63;
                    continue _fun73191
                }
            case 15:
                var1 = var0.oldestUnreadMessageId;
                if (!(var2 == var1)) {
                    _fun73191_ip = 63;
                    continue _fun73191
                }
            case 25:
                var1 = var0.shouldJumpToOriginalPost;
                if (var1) {
                    _fun73191_ip = 63;
                    continue _fun73191
                }
            case 34:
                var3 = var0.tracker;
                var2 = var3.start;
                var1 = {};
                var4 = var0.channelId;
                var1.channelId = var4;
                var1 = var2.bind(var3)(var1);
                _fun73191_ip = 79;
                continue _fun73191;
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
    var4 = function(arg0, arg1) { // Original name: findMessageIndexInRows, environment: var1
        _fun73192: for (var _fun73192_ip = 0;;) switch (_fun73192_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                if (!(var0 == var3)) {
                    _fun73192_ip = 13;
                    continue _fun73192
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
    var3 = function(arg0, arg1) { // Original name: isLoadingAtTop, environment: var1
        _fun73193: for (var _fun73193_ip = 0;;) switch (_fun73193_ip) {
            case 0:
                var0 = arg1;
                if (var0) {
                    _fun73193_ip = 10;
                    continue _fun73193
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
                    _fun73193_ip = 98;
                    continue _fun73193
                }
            case 42:
                var0 = var2.value;
                var6 = var0.changeType;
                var1 = _closure1_slot15;
                var1 = var1.INSERT;
                if (!(var6 !== var1)) {
                    _fun73193_ip = 84;
                    continue _fun73193
                }
            case 67:
                var6 = var3.bind(var4)();
                var1 = var6.done;
                var2 = var6;
                if (var1) {
                    _fun73193_ip = 98;
                    continue _fun73193
                }
            case 82:
                _fun73193_ip = 42;
                continue _fun73193;
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
    var3 = function(arg0, arg1) { // Original name: handleTapTableView, environment: var1
        _fun73194: for (var _fun73194_ip = 0;;) switch (_fun73194_ip) {
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
                    _fun73194_ip = 77;
                    continue _fun73194
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
                    _fun73194_ip = 104;
                    continue _fun73194
                }
            case 80:
                var1 = arg0;
                var2 = var1.current;
                var1 = null;
                if (!(var1 != var2)) {
                    _fun73194_ip = 104;
                    continue _fun73194
                }
            case 94:
                var1 = var2.closeCustomKeyboard;
                var1 = var1.bind(var2)();
            case 104:
                return var0;
        }
    };
    var2.handleTapTableView = var3;
    var3 = function(arg0) { // Original name: handleMediaPlayFinishedAnalytics, environment: var1
        _fun73195: for (var _fun73195_ip = 0;;) switch (_fun73195_ip) {
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
                    _fun73195_ip = 149;
                    continue _fun73195
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
    var3 = function(arg0, arg1, arg2) { // Original name: scrollToBottom, environment: var1
        _fun73196: for (var _fun73196_ip = 0;;) switch (_fun73196_ip) {
            case 0:
                var4 = arguments[3];
                var0 = undefined;
                if (!(var4 === var0)) {
                    _fun73196_ip = 11;
                    continue _fun73196
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
                    _fun73196_ip = 74;
                    continue _fun73196
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
    var3 = function(arg0, arg1) { // Original name: scrollToTop, environment: var1
        _fun73197: for (var _fun73197_ip = 0;;) switch (_fun73197_ip) {
            case 0:
                var4 = arguments[2];
                var0 = undefined;
                if (!(var4 === var0)) {
                    _fun73197_ip = 11;
                    continue _fun73197
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
                    _fun73197_ip = 57;
                    continue _fun73197
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
    var3 = function(arg0, arg1, arg2) { // Original name: scrollToRelativeOffset, environment: var1
        _fun73198: for (var _fun73198_ip = 0;;) switch (_fun73198_ip) {
            case 0:
                var5 = arguments[3];
                var0 = undefined;
                if (!(var5 === var0)) {
                    _fun73198_ip = 11;
                    continue _fun73198
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
                    _fun73198_ip = 57;
                    continue _fun73198
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
    var3 = function(arg0, arg1) { // Original name: scrollToTopMessage, environment: var1
        _fun73199: for (var _fun73199_ip = 0;;) switch (_fun73199_ip) {
            case 0:
                var1 = arg1;
                var0 = var1.getPreviousRows;
                var0 = var0.bind(var1)();
                var2 = var0.length;
                var1 = 0;
                if (!(var2 > var1)) {
                    _fun73199_ip = 81;
                    continue _fun73199
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
    var3 = function(arg0, arg1) { // Original name: canAddNewReactions, environment: var1
        _fun73200: for (var _fun73200_ip = 0;;) switch (_fun73200_ip) {
            case 0:
                var2 = arg0;
                var0 = arg1;
                if (!var0) {
                    _fun73200_ip = 38;
                    continue _fun73200
                }
            case 9:
                var4 = _closure1_slot11;
                var3 = var4.can;
                var1 = _closure1_slot20;
                var1 = var1.ADD_REACTIONS;
                var0 = var3.bind(var4)(var1, var2);
            case 38:
                if (var0) {
                    _fun73200_ip = 51;
                    continue _fun73200
                }
            case 41:
                var1 = var2.isPrivate;
                var0 = var1.bind(var2)();
            case 51:
                return var0;
        }
    };
    var2.canAddNewReactions = var3;
    var3 = function(arg0, arg1, arg2) { // Original name: loadMoreBefore, environment: var1
        _fun73201: for (var _fun73201_ip = 0;;) switch (_fun73201_ip) {
            case 0:
                var6 = arg1;
                var2 = arg2;
                var0 = undefined;
                var1 = true;
                var1 = var2.bind(var0)(var1);
                var1 = var6.hasMoreBefore;
                if (!var1) {
                    _fun73201_ip = 33;
                    continue _fun73201
                }
            case 24:
                var2 = var6.loadingMore;
                var1 = !var2;
            case 33:
                if (!var1) {
                    _fun73201_ip = 118;
                    continue _fun73201
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
                    _fun73201_ip = 100;
                    continue _fun73201
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
    var3 = function(arg0, arg1, arg2) { // Original name: loadMoreAfter, environment: var1
        _fun73202: for (var _fun73202_ip = 0;;) switch (_fun73202_ip) {
            case 0:
                var6 = arg1;
                var2 = arg2;
                var0 = undefined;
                var1 = true;
                var1 = var2.bind(var0)(var1);
                var1 = var6.hasMoreAfter;
                if (!var1) {
                    _fun73202_ip = 33;
                    continue _fun73202
                }
            case 24:
                var2 = var6.loadingMore;
                var1 = !var2;
            case 33:
                if (!var1) {
                    _fun73202_ip = 118;
                    continue _fun73202
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
                    _fun73202_ip = 100;
                    continue _fun73202
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
    var3 = function(arg0, arg1, arg2, arg3, arg4) { // Original name: clearRows, environment: var1
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
    var3 = function(arg0, arg1, arg2, arg3, arg4) { // Original name: handleFirstLayout, environment: var1
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
    var3 = function(arg0, arg1, arg2, arg3, arg4) { // Original name: handleMessageVisibilityChanged, environment: var1
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
    var3 = function(arg0, arg1, arg2) { // Original name: handleLongPressSticker, environment: var1
        _fun73206: for (var _fun73206_ip = 0;;) switch (_fun73206_ip) {
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
                    _fun73206_ip = 61;
                    continue _fun73206
                }
            case 51:
                var4 = var1.add;
                var4 = var4.bind(var1)(var3);
            case 61:
                var0 = null;
                if (!(var3 !== var2)) {
                    _fun73206_ip = 70;
                    continue _fun73206
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
    var3 = function() { // Original name: handleTapNavBar, environment: var1
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
    var3 = function(arg0, arg1, arg2) { // Original name: jumpToPresent, environment: var1
        _fun73208: for (var _fun73208_ip = 0;;) switch (_fun73208_ip) {
            case 0:
                var0 = arg0;
                var4 = arg1;
                var5 = var0.jumpReturnTargetId;
                var1 = null;
                if (!(var1 != var5)) {
                    _fun73208_ip = 78;
                    continue _fun73208
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
                _fun73208_ip = 176;
                continue _fun73208;
            case 78:
                var1 = var0.loadingMore;
                if (var1) {
                    _fun73208_ip = 176;
                    continue _fun73208
                }
            case 87:
                var0 = var0.hasMoreAfter;
                if (var0) {
                    _fun73208_ip = 107;
                    continue _fun73208
                }
            case 96:
                var1 = arg2;
                var0 = undefined;
                var0 = var1.bind(var0)();
                _fun73208_ip = 176;
                continue _fun73208;
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
    var3 = function(arg0) { // Original name: scrollToNewMessages, environment: var1
        _fun73209: for (var _fun73209_ip = 0;;) switch (_fun73209_ip) {
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
                    _fun73209_ip = 399;
                    continue _fun73209
                }
            case 118:
                var4 = var4.bind(var0)(var8);
                var8 = null;
                if (!(var8 != var4)) {
                    _fun73209_ip = 494;
                    continue _fun73209
                }
            case 132:
                var14 = var4 + 1;
                var4 = var13.length;
                var8 = var14;
                if (!(var14 < var4)) {
                    _fun73209_ip = 275;
                    continue _fun73209
                }
            case 150:
                var4 = var13[var14];
                var11 = var4.type;
                var4 = _closure1_slot14;
                var4 = var4.SEPARATOR;
                var8 = var14;
                if (!(var11 === var4)) {
                    _fun73209_ip = 275;
                    continue _fun73209
                }
            case 176:
                var4 = var13[var14];
                var11 = var4.id;
                var4 = _closure1_slot16;
                var4 = var4.UNREAD;
                var12 = var14;
                var8 = var12;
                if (!(var11 !== var4)) {
                    _fun73209_ip = 275;
                    continue _fun73209
                }
            case 205:
                var14 = var12 + 1;
                var4 = var13.length;
                var8 = var14;
                if (!(var14 < var4)) {
                    _fun73209_ip = 275;
                    continue _fun73209
                }
            case 220:
                var4 = var13[var14];
                var11 = var4.type;
                var4 = _closure1_slot14;
                var4 = var4.SEPARATOR;
                var8 = var14;
                if (!(var11 === var4)) {
                    _fun73209_ip = 275;
                    continue _fun73209
                }
            case 246:
                var4 = var13[var14];
                var11 = var4.id;
                var4 = _closure1_slot16;
                var4 = var4.UNREAD;
                var12 = var14;
                var8 = var12;
                if (var11 !== var4) {
                    _fun73209_ip = 205;
                    continue _fun73209
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
                    _fun73209_ip = 393;
                    continue _fun73209
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
                    _fun73209_ip = 378;
                    continue _fun73209
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
                _fun73209_ip = 494;
                continue _fun73209;
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
                    _fun73209_ip = 467;
                    continue _fun73209
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
    var3 = function(arg0) { // Original name: syncMessageDisplay, environment: var1
        _fun73210: for (var _fun73210_ip = 0;;) switch (_fun73210_ip) {
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
                    _fun73210_ip = 69;
                    continue _fun73210
                }
            case 55:
                var5 = undefined;
                var1 = {};
                var1 = var9.bind(var5)(var1);
                _fun73210_ip = 256;
                continue _fun73210;
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
                    _fun73210_ip = 193;
                    continue _fun73210
                }
            case 163:
                if (!(var6 != var8)) {
                    _fun73210_ip = 256;
                    continue _fun73210
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
                _fun73210_ip = 256;
                continue _fun73210;
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
    var3 = function(arg0) { // Original name: getChatRef, environment: var1
        var0 = arg0;
        return var0;
    };
    var2.getChatRef = var3;
    var3 = function(arg0, arg1) { // Original name: maybeRescrollToMessageId, environment: var1
        _fun73213: for (var _fun73213_ip = 0;;) switch (_fun73213_ip) {
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
                    _fun73213_ip = 60;
                    continue _fun73213
                }
            case 57:
                var4 = var5;
            case 60:
                var _closure2_slot4 = var4;
                var2 = var2.jumpType;
                if (!(var0 === var2)) {
                    _fun73213_ip = 109;
                    continue _fun73213
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
                    _fun73213_ip = 143;
                    continue _fun73213
                }
            case 119:
                var2 = global;
                var3 = var2.setTimeout;
                var2 = function() { // Environment: var1
                    _fun73214: for (var _fun73214_ip = 0;;) switch (_fun73214_ip) {
                        case 0:
                            var2 = _closure2_slot2;
                            var1 = _closure2_slot0;
                            var0 = undefined;
                            var5 = var2.bind(var0)(var1);
                            var2 = null;
                            if (!(var2 != var5)) {
                                _fun73214_ip = 231;
                                continue _fun73214
                            }
                        case 27:
                            var1 = _closure2_slot1;
                            var1 = var1.current;
                            if (!(var2 != var1)) {
                                _fun73214_ip = 231;
                                continue _fun73214
                            }
                        case 43:
                            var2 = _closure2_slot4;
                            var1 = false;
                            if (!var2) {
                                _fun73214_ip = 140;
                                continue _fun73214
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
                                _fun73214_ip = 231;
                                continue _fun73214
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
    var1 = function(arg0) { // Original name: handleVisibleMessagesChange, environment: var1
        _fun73215: for (var _fun73215_ip = 0;;) switch (_fun73215_ip) {
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
                    _fun73215_ip = 264;
                    continue _fun73215
                }
            case 74:
                if (!(var0 != var12)) {
                    _fun73215_ip = 264;
                    continue _fun73215
                }
            case 81:
                if (!(var0 != var9)) {
                    _fun73215_ip = 264;
                    continue _fun73215
                }
            case 88:
                if (!(var0 != var8)) {
                    _fun73215_ip = 264;
                    continue _fun73215
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
                    _fun73215_ip = 264;
                    continue _fun73215
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 7857, 4231, 1372, 1672, 4198, 4213, 3585, 3050, 3907, 1613, 6478, 660, 3939, 3934, 1636, 4236, 6514, 4786, 3039, 3107, 1234, 9176, 9177, 1628, 3238, 3239, 7406, 6428, 6430, 4265, 5252, 4200, 21, 3106, 9190, 14, 22, 478, 1567, 795, 9191, 6487, 5192, 9195, 4215, 5220, 9196, 2]);