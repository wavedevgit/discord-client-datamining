// modules/polls/native/PollVotesActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var14 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var14;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        var0 = arg0;
        var7 = var0.style;
        var5 = var0.emoji;
        var _closure2_slot0 = var5;
        var2 = _closure1_slot16;
        var3 = undefined;
        var4 = var2.bind(var3)();
        var6 = _closure1_slot0;
        var8 = _closure1_slot2;
        var2 = 12;
        var2 = var8[var2];
        var9 = var6.bind(var3)(var2);
        var6 = var9.useStateFromStores;
        var10 = _closure1_slot10;
        var2 = new Array(1);
        var2[0] = var10;
        var1 = function() { // Environment: var1
            _fun76278: for (var _fun76278_ip = 0;;) switch (_fun76278_ip) {
                case 0:
                    var0 = _closure2_slot0;
                    var1 = var0.id;
                    var0 = null;
                    if (!(var0 == var1)) {
                        _fun76278_ip = 22;
                        continue _fun76278
                    }
                case 18:
                    var1 = undefined;
                    return var1;
                case 22:
                    var1 = _closure2_slot0;
                    var3 = var1.animated;
                    if (var3) {
                        _fun76278_ip = 90;
                        continue _fun76278
                    }
                case 35:
                    var5 = _closure1_slot10;
                    var2 = var5.getCustomEmojiById;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var2 = var2.bind(var5)(var1);
                    var5 = var0 == var2;
                    var1 = undefined;
                    if (var5) {
                        _fun76278_ip = 77;
                        continue _fun76278
                    }
                case 71:
                    var1 = var2.animated;
                case 77:
                    var0 = var0 != var1;
                    if (!var0) {
                        _fun76278_ip = 87;
                        continue _fun76278
                    }
                case 84:
                    var0 = var1;
                case 87:
                    var3 = var0;
                case 90:
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 13;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.getEmojiURL;
                    var0 = {};
                    var4 = _closure2_slot0;
                    var4 = var4.id;
                    var0.id = var4;
                    var0.animated = var3;
                    var3 = 16;
                    var0.size = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
            }
        };
        var6 = var6.bind(var9)(var2, var1);
        var2 = _closure1_slot14;
        var1 = _closure1_slot1;
        var0 = 14;
        var0 = var8[var0];
        var1 = var1.bind(var3)(var0);
        var0 = {};
        var0.style = var7;
        var0.src = var6;
        var5 = var5.name;
        var0.name = var5;
        var5 = var4.emojiText;
        var0.textEmojiStyle = var5;
        var4 = var4.emojiImage;
        var0.fastImageStyle = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot19 = var0;
    var0 = function arg0() {
        _fun76279: for (var _fun76279_ip = 0;;) switch (_fun76279_ip) {
            case 0:
                var0 = arg0;
                var13 = var0.message;
                var _closure2_slot0 = var13;
                var1 = var0.selectedAnswerId;
                var _closure2_slot1 = var1;
                var0 = var0.setSelectedAnswerId;
                var _closure2_slot2 = var0;
                var0 = _closure1_slot16;
                var4 = undefined;
                var15 = var0.bind(var4)();
                var5 = _closure1_slot5;
                var3 = var5.useMemo;
                var0 = var13.reactions;
                var2 = new Array(1);
                var2[0] = var0;
                var0 = function() { // Environment: var12
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 18;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.getTotalVotes;
                    var0 = _closure2_slot0;
                    var0 = var0.reactions;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var22 = var3.bind(var5)(var0, var2);
                var3 = _closure1_slot5;
                var2 = var3.useRef;
                var0 = null;
                var16 = var2.bind(var3)(var0);
                var _closure2_slot3 = var16;
                var3 = _closure1_slot5;
                var2 = var3.useRef;
                var2 = var2.bind(var3)(var0);
                var _closure2_slot4 = var2;
                var5 = _closure1_slot5;
                var3 = var5.useRef;
                var2 = false;
                var2 = var3.bind(var5)(var2);
                var _closure2_slot5 = var2;
                var5 = _closure1_slot5;
                var3 = var5.useEffect;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var12
                    var0 = global;
                    var3 = var0.setTimeout;
                    var2 = _closure1_slot4;
                    var0 = undefined;
                    var1 = function*() { // Environment: var1
                        var0 = function*() { // Original name: ?anon_0_, environment: var0
                            _fun76283: for (var _fun76283_ip = 0;;) switch (_fun76283_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun76283_ip = 497;
                                        continue _fun76283
                                    }
                                case 12:
                                    var2 = undefined;
                                    var _closure5_slot0 = var2;
                                    var _closure5_slot1 = var2;
                                    var1 = _closure2_slot3;
                                    var6 = var1.current;
                                    _closure5_slot0 = var6;
                                    var1 = _closure2_slot4;
                                    var1 = var1.current;
                                    _closure5_slot1 = var1;
                                    var3 = null;
                                    if (!(var3 != var6)) {
                                        _fun76283_ip = 491;
                                        continue _fun76283
                                    }
                                case 60:
                                    if (!(var3 != var1)) {
                                        _fun76283_ip = 491;
                                        continue _fun76283
                                    }
                                case 67:
                                    var1 = global;
                                    var8 = var1.Promise;
                                    var6 = var8.prototype;
                                    var7 = Object.create(var6, {
                                        constructor: {
                                            value: var8
                                        }
                                    });
                                    var18 = function(arg0) { // Environment: var5
                                        var1 = arg0;
                                        var _closure6_slot0 = var1;
                                        var2 = _closure5_slot0;
                                        var1 = var2.measure;
                                        var0 = function(arg0, arg1, arg2, arg3, arg4) { // Environment: var0
                                            var2 = _closure6_slot0;
                                            var1 = {};
                                            var0 = arg2;
                                            var1.scrollWidth = var0;
                                            var0 = arg4;
                                            var1.scrollPageX = var0;
                                            var0 = undefined;
                                            var0 = var2.bind(var0)(var1);
                                            return var0;
                                        };
                                        var0 = var1.bind(var2)(var0);
                                        var0 = undefined;
                                        return var0;
                                    };
                                    var19 = var7;
                                    var6 = new var19[var8](var18, var17);
                                    var9 = var6 instanceof Object ? var6 : var7;
                                    var8 = var1.Promise;
                                    var6 = var8.prototype;
                                    var7 = Object.create(var6, {
                                        constructor: {
                                            value: var8
                                        }
                                    });
                                    var18 = function(arg0) { // Environment: var5
                                        var1 = arg0;
                                        var _closure6_slot0 = var1;
                                        var2 = _closure5_slot1;
                                        var1 = var2.measure;
                                        var0 = function(arg0, arg1, arg2, arg3, arg4) { // Environment: var0
                                            var2 = _closure6_slot0;
                                            var1 = {};
                                            var0 = arg2;
                                            var1.width = var0;
                                            var0 = arg4;
                                            var1.pageX = var0;
                                            var0 = undefined;
                                            var0 = var2.bind(var0)(var1);
                                            return var0;
                                        };
                                        var0 = var1.bind(var2)(var0);
                                        var0 = undefined;
                                        return var0;
                                    };
                                    var19 = var7;
                                    var6 = new var19[var8](var18, var17);
                                    var8 = var6 instanceof Object ? var6 : var7;
                                    var7 = var1.Promise;
                                    var6 = var7.prototype;
                                    var6 = Object.create(var6, {
                                        constructor: {
                                            value: var7
                                        }
                                    });
                                    var18 = function(arg0) { // Environment: var5
                                        var1 = arg0;
                                        var _closure6_slot0 = var1;
                                        var3 = _closure5_slot1;
                                        var2 = var3.measureLayout;
                                        var1 = _closure5_slot0;
                                        var0 = function(arg0) { // Environment: var0
                                            var2 = _closure6_slot0;
                                            var1 = {};
                                            var0 = arg0;
                                            var1.x = var0;
                                            var0 = undefined;
                                            var0 = var2.bind(var0)(var1);
                                            return var0;
                                        };
                                        var0 = var2.bind(var3)(var1, var0);
                                        var0 = undefined;
                                        return var0;
                                    };
                                    var19 = var6;
                                    var5 = new var19[var7](var18, var17);
                                    var7 = var5 instanceof Object ? var5 : var6;
                                    var6 = var1.Promise;
                                    var5 = var6.all;
                                    var1 = new Array(3);
                                    var1[0] = var9;
                                    var1[1] = var8;
                                    var1[2] = var7;
                                    var1 = var5.bind(var6)(var1);
                                    SaveGenerator(address = 205);
                                case 203:
                                    return var1;
                                case 205:
                                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 5);
                                    if (var5) {
                                        _fun76283_ip = 494;
                                        continue _fun76283
                                    }
                                case 214:
                                    var7 = _closure1_slot3;
                                    var5 = 3;
                                    var9 = var7.bind(var2)(var1, var5);
                                    var7 = 0;
                                    var5 = var9[var7];
                                    var12 = var5.scrollWidth;
                                    var5 = var5.scrollPageX;
                                    var8 = 1;
                                    var8 = var9[var8];
                                    var11 = var8.width;
                                    var8 = var8.pageX;
                                    var15 = 2;
                                    var9 = var9[var15];
                                    var9 = var9.x;
                                    var6 = _closure1_slot9;
                                    var6 = var6.useReducedMotion;
                                    var6 = !var6;
                                    var10 = _closure2_slot5;
                                    var10 = var10.current;
                                    if (var10) {
                                        _fun76283_ip = 373;
                                        continue _fun76283
                                    }
                                case 303:
                                    var10 = _closure2_slot3;
                                    var14 = var10.current;
                                    if (!(var3 != var14)) {
                                        _fun76283_ip = 358;
                                        continue _fun76283
                                    }
                                case 316:
                                    var13 = var14.scrollTo;
                                    var10 = {};
                                    var16 = var11 / var15;
                                    var16 = var9 + var16;
                                    var15 = var12 / var15;
                                    var15 = var16 - var15;
                                    var10.x = var15;
                                    var10.y = var7;
                                    var10.animated = var6;
                                    var10 = var13.bind(var14)(var10);
                                case 358:
                                    var13 = _closure2_slot5;
                                    var10 = true;
                                    var13.current = var10;
                                    return var2;
                                case 373:
                                    if (!(!(var8 < var5))) {
                                        _fun76283_ip = 445;
                                        continue _fun76283
                                    }
                                case 377:
                                    var8 = var8 + var11;
                                    var5 = var5 + var12;
                                    if (!(var8 > var5)) {
                                        _fun76283_ip = 491;
                                        continue _fun76283
                                    }
                                case 389:
                                    var5 = _closure2_slot3;
                                    var10 = var5.current;
                                    if (!(var3 != var10)) {
                                        _fun76283_ip = 491;
                                        continue _fun76283
                                    }
                                case 402:
                                    var8 = var10.scrollTo;
                                    var5 = {};
                                    var11 = var9 + var11;
                                    var12 = var11 - var12;
                                    var11 = 16;
                                    var11 = var12 + var11;
                                    var5.x = var11;
                                    var5.y = var7;
                                    var5.animated = var6;
                                    var5 = var8.bind(var10)(var5);
                                    _fun76283_ip = 491;
                                    continue _fun76283;
                                case 445:
                                    var4 = _closure2_slot3;
                                    var5 = var4.current;
                                    if (!(var3 != var5)) {
                                        _fun76283_ip = 491;
                                        continue _fun76283
                                    }
                                case 458:
                                    var4 = var5.scrollTo;
                                    var3 = {};
                                    var8 = 16;
                                    var8 = var9 - var8;
                                    var3.x = var8;
                                    var3.y = var7;
                                    var3.animated = var6;
                                    var3 = var4.bind(var5)(var3);
                                case 491:
                                    return var2;
                                case 494:
                                    return var1;
                                case 497:
                                    return var0;
                            }
                        };
                        return var0;
                    };
                    var2 = var2.bind(var0)(var1);
                    var1 = 0;
                    var1 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var1 = var3.bind(var5)(var1, var2);
                var5 = _closure1_slot5;
                var3 = var5.useMemo;
                var2 = function() { // Environment: var12
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 19;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    var1 = var0.Gesture;
                    var0 = var1.Native;
                    var2 = var0.bind(var1)();
                    var1 = var2.disallowInterruption;
                    var0 = true;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1 = new Array(0);
                var10 = var3.bind(var5)(var2, var1);
                var1 = var13.poll;
                var1 = var0 == var1;
                if (var1) {
                    _fun76279_ip = 620;
                    continue _fun76279
                }
            case 213:
                var3 = _closure1_slot15;
                var2 = _closure1_slot7;
                var1 = {};
                var8 = _closure1_slot14;
                var17 = _closure1_slot0;
                var18 = _closure1_slot2;
                var6 = 17;
                var5 = var18[var6];
                var5 = var17.bind(var4)(var5);
                var7 = var5.Text;
                var5 = {
                    'style': null,
                    'variant': 'redesign/heading-18/bold',
                    'color': 'mobile-text-heading-primary',
                    'accessibilityRole': 'header'
                };
                var11 = var15.headerText;
                var5.style = var11;
                var11 = var13.poll;
                var11 = var11.question;
                var11 = var11.text;
                var5.children = var11;
                var7 = var8.bind(var4)(var7, var5);
                var5 = new Array(3);
                var5[0] = var7;
                var8 = _closure1_slot14;
                var6 = var18[var6];
                var6 = var17.bind(var4)(var6);
                var7 = var6.Text;
                var6 = {
                    'style': null,
                    'variant': 'text-md/medium',
                    'color': 'text-default'
                };
                var11 = var15.subheaderText;
                var6.style = var11;
                var14 = 15;
                var11 = var18[var14];
                var11 = var17.bind(var4)(var11);
                var21 = var11.intl;
                var20 = var21.format;
                var11 = var18[var14];
                var11 = var17.bind(var4)(var11);
                var11 = var11.t;
                var19 = var11.XRkuof;
                var11 = {};
                var11.count = var22;
                var11 = var20.bind(var21)(var19, var11);
                var6.children = var11;
                var6 = var8.bind(var4)(var7, var6);
                var5[1] = var6;
                var8 = _closure1_slot14;
                var6 = 19;
                var6 = var18[var6];
                var6 = var17.bind(var4)(var6);
                var7 = var6.GestureDetector;
                var6 = {};
                var6.gesture = var10;
                var11 = _closure1_slot14;
                var10 = _closure1_slot8;
                var9 = {
                    'ref': null,
                    'style': null,
                    'contentContainerStyle': null,
                    'horizontal': true,
                    'showsHorizontalScrollIndicator': false,
                    'accessibilityRole': 'tablist'
                };
                var9.ref = var16;
                var16 = var15.answerScroll;
                var9.style = var16;
                var15 = var15.answerScrollContainer;
                var9.contentContainerStyle = var15;
                var15 = var18[var14];
                var15 = var17.bind(var4)(var15);
                var16 = var15.intl;
                var15 = var16.string;
                var14 = var18[var14];
                var14 = var17.bind(var4)(var14);
                var14 = var14.t;
                var14 = var14["qbir+4"];
                var14 = var15.bind(var16)(var14);
                var9.accessibilityLabel = var14;
                var13 = var13.poll;
                var14 = var13.answers;
                var13 = var14.map;
                var12 = function(arg0) { // Environment: var12
                    _fun76291: for (var _fun76291_ip = 0;;) switch (_fun76291_ip) {
                        case 0:
                            var0 = arg0;
                            var2 = _closure2_slot1;
                            var6 = global;
                            var3 = var6.String;
                            var1 = var0.answer_id;
                            var4 = undefined;
                            var1 = var3.bind(var4)(var1);
                            var8 = var2 === var1;
                            var3 = _closure1_slot14;
                            var2 = _closure1_slot17;
                            var1 = {};
                            var9 = undefined;
                            if (!var8) {
                                _fun76291_ip = 57;
                                continue _fun76291
                            }
                        case 53:
                            var9 = _closure2_slot4;
                        case 57:
                            var1.ref = var9;
                            var1.answer = var0;
                            var1.selected = var8;
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var7 = 20;
                            var7 = var9[var7];
                            var9 = var8.bind(var4)(var7);
                            var8 = var9.reactionForId;
                            var7 = _closure2_slot0;
                            var7 = var7.reactions;
                            var10 = var6.String;
                            var6 = var0.answer_id;
                            var6 = var10.bind(var4)(var6);
                            var6 = var8.bind(var9)(var7, var6);
                            var1.reaction = var6;
                            var5 = _closure2_slot2;
                            var1.setSelectedAnswerId = var5;
                            var0 = var0.answer_id;
                            var0 = var3.bind(var4)(var2, var1, var0);
                            return var0;
                    }
                };
                var12 = var13.bind(var14)(var12);
                var9.children = var12;
                var9 = var11.bind(var4)(var10, var9);
                var6.children = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[2] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 620:
                return var0;
        }
    };
    var _closure1_slot20 = var0;
    var0 = function arg0() {
        _fun76292: for (var _fun76292_ip = 0;;) switch (_fun76292_ip) {
            case 0:
                var0 = arg0;
                var13 = var0.channelId;
                var _closure2_slot0 = var13;
                var12 = var0.messageId;
                var _closure2_slot1 = var12;
                var14 = var0.reaction;
                var3 = undefined;
                var _closure2_slot5 = var3;
                var0 = _closure1_slot16;
                var10 = var0.bind(var3)();
                var6 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 21;
                var0 = var2[var0];
                var0 = var6.bind(var3)(var0);
                var0 = var0.bind(var3)();
                var0 = var0.analyticsLocations;
                var _closure2_slot2 = var0;
                var5 = 22;
                var5 = var2[var5];
                var6 = var6.bind(var3)(var5);
                var5 = {};
                var5.channelId = var13;
                var5.messageId = var12;
                var5.reaction = var14;
                var5 = var6.bind(var3)(var5);
                var9 = var5.reactors;
                var _closure2_slot3 = var9;
                var11 = var5.hasMore;
                var5 = _closure1_slot0;
                var6 = 23;
                var6 = var2[var6];
                var8 = var5.bind(var3)(var6);
                var7 = var8.useReactorsOnScrollNative;
                var6 = {};
                var6.channelId = var13;
                var6.messageId = var12;
                var6.reactionSelected = var14;
                var6.reactors = var9;
                var6.reactorsHasMore = var11;
                var11 = 24;
                var11 = var2[var11];
                var11 = var5.bind(var3)(var11);
                var11 = var11.ReactionTypes;
                var11 = var11.VOTE;
                var6.reactionType = var11;
                var7 = var7.bind(var8)(var6);
                var6 = 12;
                var6 = var2[var6];
                var14 = var5.bind(var3)(var6);
                var11 = var14.useStateFromStores;
                var6 = _closure1_slot11;
                var8 = new Array(1);
                var8[0] = var6;
                var6 = function() { // Environment: var1
                    var2 = _closure1_slot11;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var14 = var11.bind(var14)(var8, var6);
                var _closure2_slot4 = var14;
                var11 = _closure1_slot5;
                var8 = var11.useCallback;
                var6 = new Array(5);
                var6[0] = var14;
                var14 = var9.length;
                var6[1] = var14;
                var6[2] = var13;
                var6[3] = var12;
                var6[4] = var0;
                var0 = function(arg0) { // Environment: var1
                    _fun76294: for (var _fun76294_ip = 0;;) switch (_fun76294_ip) {
                        case 0:
                            var0 = arg0;
                            var12 = var0.item;
                            var _closure3_slot0 = var12;
                            var13 = var0.index;
                            var1 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 25;
                            var0 = var2[var0];
                            var3 = undefined;
                            var6 = var1.bind(var3)(var0);
                            var2 = var6.getNickname;
                            var0 = _closure2_slot4;
                            var5 = null;
                            var0 = var5 == var0;
                            var1 = undefined;
                            if (var0) {
                                _fun76294_ip = 77;
                                continue _fun76294
                            }
                        case 68:
                            var0 = _closure2_slot4;
                            var1 = var0.guild_id;
                        case 77:
                            var0 = _closure2_slot4;
                            var7 = var5 == var0;
                            var0 = undefined;
                            if (var7) {
                                _fun76294_ip = 99;
                                continue _fun76294
                            }
                        case 90:
                            var7 = _closure2_slot4;
                            var0 = var7.id;
                        case 99:
                            var7 = var2.bind(var6)(var1, var0, var12);
                            if (!(var5 == var7)) {
                                _fun76294_ip = 141;
                                continue _fun76294
                            }
                        case 110:
                            var1 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 26;
                            var0 = var2[var0];
                            var1 = var1.bind(var3)(var0);
                            var0 = var1.getGlobalName;
                            var7 = var0.bind(var1)(var12);
                        case 141:
                            var10 = _closure1_slot1;
                            var8 = _closure1_slot2;
                            var0 = 26;
                            var0 = var8[var0];
                            var1 = var10.bind(var3)(var0);
                            var0 = var1.getUserTag;
                            var6 = var0.bind(var1)(var12);
                            var2 = _closure1_slot13;
                            var1 = var2.getUser;
                            var0 = var12.id;
                            var14 = var1.bind(var2)(var0);
                            var2 = _closure1_slot14;
                            var1 = _closure1_slot0;
                            var0 = 27;
                            var0 = var8[var0];
                            var0 = var1.bind(var3)(var0);
                            var1 = var0.TableRow;
                            var0 = {};
                            var11 = 0;
                            var11 = var11 === var13;
                            var0.start = var11;
                            var11 = _closure2_slot3;
                            var15 = var11.length;
                            var11 = 1;
                            var11 = var15 - var11;
                            var11 = var11 === var13;
                            var0.end = var11;
                            var11 = _closure1_slot14;
                            var15 = 28;
                            var8 = var8[var15];
                            var10 = var10.bind(var3)(var8);
                            var8 = {};
                            var13 = _closure2_slot4;
                            var17 = var5 == var13;
                            var13 = undefined;
                            if (var17) {
                                _fun76294_ip = 294;
                                continue _fun76294
                            }
                        case 285:
                            var16 = _closure2_slot4;
                            var13 = var16.guild_id;
                        case 294:
                            var8.guildId = var13;
                            var13 = var12;
                            if (!(var5 != var14)) {
                                _fun76294_ip = 308;
                                continue _fun76294
                            }
                        case 305:
                            var13 = var14;
                        case 308:
                            var8.user = var13;
                            var14 = _closure1_slot0;
                            var13 = _closure1_slot2;
                            var13 = var13[var15];
                            var13 = var14.bind(var3)(var13);
                            var13 = var13.AvatarSizes;
                            var13 = var13.SMALL;
                            var8.size = var13;
                            var8 = var11.bind(var3)(var10, var8);
                            var0.icon = var8;
                            var8 = var7;
                            if (!(var5 == var8)) {
                                _fun76294_ip = 398;
                                continue _fun76294
                            }
                        case 362:
                            var11 = _closure1_slot14;
                            var10 = _closure1_slot1;
                            var13 = _closure1_slot2;
                            var9 = 29;
                            var9 = var13[var9];
                            var10 = var10.bind(var3)(var9);
                            var9 = {};
                            var9.user = var12;
                            var8 = var11.bind(var3)(var10, var9);
                        case 398:
                            var0.label = var8;
                            var7 = var5 != var7;
                            var5 = null;
                            if (!var7) {
                                _fun76294_ip = 414;
                                continue _fun76294
                            }
                        case 411:
                            var5 = var6;
                        case 414:
                            var0.subLabel = var5;
                            var4 = function() {
                                var1 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var0 = 30;
                                var0 = var2[var0];
                                var2 = undefined;
                                var1 = var1.bind(var2)(var0);
                                var0 = {};
                                var3 = _closure3_slot0;
                                var4 = var3.id;
                                var0.userId = var4;
                                var0.localUser = var3;
                                var4 = _closure2_slot2;
                                var0.sourceAnalyticsLocations = var4;
                                var4 = _closure2_slot0;
                                var0.channelId = var4;
                                var3 = _closure2_slot1;
                                var0.messageId = var3;
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var0.onPress = var4;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                    }
                };
                var8 = var8.bind(var11)(var0, var6);
                var0 = 31;
                var2 = var2[var0];
                var6 = var5.bind(var3)(var2);
                var5 = var6.useSharedValue;
                var12 = var9.length;
                var2 = 1;
                var11 = 0;
                if (!(var11 === var12)) {
                    _fun76292_ip = 340;
                    continue _fun76292
                }
            case 338:
                var2 = 0;
            case 340:
                var13 = var5.bind(var6)(var2);
                _closure2_slot5 = var13;
                var11 = _closure1_slot5;
                var6 = var11.useEffect;
                var5 = new Array(2);
                var5[0] = var13;
                var2 = var9.length;
                var5[1] = var2;
                var2 = function() { // Environment: var1
                    _fun76296: for (var _fun76296_ip = 0;;) switch (_fun76296_ip) {
                        case 0:
                            var1 = _closure2_slot3;
                            var1 = var1.length;
                            var3 = 0;
                            if (!(var3 === var1)) {
                                _fun76296_ip = 34;
                                continue _fun76296
                            }
                        case 18:
                            var2 = _closure2_slot5;
                            var1 = var2.set;
                            var1 = var1.bind(var2)(var3);
                            _fun76296_ip = 96;
                            continue _fun76296;
                        case 34:
                            var2 = _closure2_slot5;
                            var1 = var2.set;
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var0 = 32;
                            var3 = var3[var0];
                            var0 = undefined;
                            var5 = var4.bind(var0)(var3);
                            var4 = var5.withTiming;
                            var3 = {};
                            var0 = 200;
                            var3.duration = var0;
                            var0 = 1;
                            var0 = var4.bind(var5)(var0, var3);
                            var0 = var1.bind(var2)(var0);
                        case 96:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var6.bind(var11)(var2, var5);
                var5 = _closure1_slot0;
                var11 = _closure1_slot2;
                var2 = var11[var0];
                var6 = var5.bind(var3)(var2);
                var2 = var6.useAnimatedStyle;
                var1 = function() {
                    var0 = {
                        'flex': 1,
                        'opacity': null,
                        'marginBottom': 32
                    };
                    var2 = _closure2_slot5;
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    var0.opacity = var1;
                    return var0;
                };
                var12 = {};
                var12.opacity = var13;
                var1.__closure = var12;
                var12 = 8593850252158.0;
                var1.__workletHash = var12;
                var12 = _closure1_slot18;
                var1.__initData = var12;
                var6 = var2.bind(var6)(var1);
                var2 = _closure1_slot14;
                var1 = _closure1_slot1;
                var0 = var11[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.View;
                var0 = {};
                var0.style = var6;
                var6 = _closure1_slot14;
                var4 = 33;
                var4 = var11[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.BottomSheetFlashList;
                var4 = {};
                var10 = var10.list;
                var4.contentContainerStyle = var10;
                var4.data = var9;
                var4.renderItem = var8;
                var4.onScroll = var7;
                var7 = 79;
                var4.estimatedItemSize = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot21 = var0;
    var0 = function() {
        _fun76298: for (var _fun76298_ip = 0;;) switch (_fun76298_ip) {
            case 0:
                var0 = _closure1_slot16;
                var3 = undefined;
                var9 = var0.bind(var3)();
                var1 = _closure1_slot1;
                var12 = _closure1_slot2;
                var0 = 34;
                var0 = var12[var0];
                var0 = var1.bind(var3)(var0);
                var11 = var0.bind(var3)();
                var2 = _closure1_slot15;
                var1 = _closure1_slot7;
                var0 = {};
                var4 = var9.noResultsContainer;
                var0.style = var4;
                var7 = _closure1_slot14;
                var5 = _closure1_slot6;
                var4 = {};
                var8 = var9.noResultsImage;
                var4.style = var8;
                var10 = _closure1_slot0;
                var8 = 35;
                var8 = var12[var8];
                var10 = var10.bind(var3)(var8);
                var8 = var10.isThemeDark;
                var8 = var8.bind(var10)(var11);
                var11 = _closure1_slot1;
                var12 = _closure1_slot2;
                if (var8) {
                    _fun76298_ip = 129;
                    continue _fun76298
                }
            case 115:
                var8 = 37;
                var8 = var12[var8];
                var8 = var11.bind(var3)(var8);
                _fun76298_ip = 141;
                continue _fun76298;
            case 129:
                var10 = 36;
                var10 = var12[var10];
                var8 = var11.bind(var3)(var10);
            case 141:
                var4.source = var8;
                var5 = var7.bind(var3)(var5, var4);
                var4 = new Array(3);
                var4[0] = var5;
                var13 = _closure1_slot14;
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var5 = 17;
                var7 = var12[var5];
                var7 = var11.bind(var3)(var7);
                var10 = var7.Text;
                var7 = {
                    'style': null,
                    'variant': 'heading-md/bold',
                    'color': 'mobile-text-heading-primary'
                };
                var8 = var9.noResultsTitle;
                var7.style = var8;
                var8 = 15;
                var14 = var12[var8];
                var14 = var11.bind(var3)(var14);
                var16 = var14.intl;
                var15 = var16.string;
                var14 = var12[var8];
                var14 = var11.bind(var3)(var14);
                var14 = var14.t;
                var14 = var14.vhQK3o;
                var14 = var15.bind(var16)(var14);
                var7.children = var14;
                var7 = var13.bind(var3)(var10, var7);
                var4[1] = var7;
                var7 = _closure1_slot14;
                var5 = var12[var5];
                var5 = var11.bind(var3)(var5);
                var6 = var5.Text;
                var5 = {
                    'style': null,
                    'variant': 'text-sm/semibold',
                    'color': 'text-default'
                };
                var9 = var9.noResultsSubtitle;
                var5.style = var9;
                var9 = var12[var8];
                var9 = var11.bind(var3)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var8 = var12[var8];
                var8 = var11.bind(var3)(var8);
                var8 = var8.t;
                var8 = var8.bwytdh;
                var8 = var9.bind(var10)(var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot22 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var14.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var11 = 1;
    var3 = var5[var11];
    var3 = var14.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var6 = var5[var3];
    var3 = arg3;
    var7 = var3.bind(var0)(var6);
    var _closure1_slot5 = var7;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.Image;
    var _closure1_slot6 = var6;
    var6 = var3.View;
    var _closure1_slot7 = var6;
    var3 = var3.ScrollView;
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var14.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var14.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var14.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var14.bind(var0)(var3);
    var _closure1_slot12 = var3;
    var12 = 8;
    var3 = var5[var12];
    var3 = var14.bind(var0)(var3);
    var _closure1_slot13 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot14 = var6;
    var3 = var3.jsxs;
    var _closure1_slot15 = var3;
    var3 = 10;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var6 = var8.createStyles;
    var3 = {};
    var10 = 16;
    var9 = {
        'textAlign': 'center',
        'paddingHorizontal': 16
    };
    var3.headerText = var9;
    var9 = {
        'textAlign': 'center',
        'marginTop': 2,
        'paddingHorizontal': 16
    };
    var3.subheaderText = var9;
    var9 = {};
    var13 = 24;
    var9.marginTop = var13;
    var3.answerScroll = var9;
    var9 = {
        'gap': 4,
        'paddingHorizontal': 16
    };
    var3.answerScrollContainer = var9;
    var9 = {
        'marginTop': 16,
        'marginHorizontal': 16,
        'marginBottom': 8
    };
    var3.answerName = var9;
    var9 = {};
    var9.paddingHorizontal = var10;
    var3.list = var9;
    var9 = {
        'padding': 8,
        'flexDirection': 'row',
        'alignItems': 'center',
        'borderRadius': null,
        'maxWidth': 200
    };
    var13 = 11;
    var15 = var5[var13];
    var15 = var14.bind(var0)(var15);
    var15 = var15.radii;
    var15 = var15.xs;
    var9.borderRadius = var15;
    var3.answerButton = var9;
    var9 = {};
    var13 = var5[var13];
    var13 = var14.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BORDER_SUBTLE;
    var9.backgroundColor = var13;
    var3.answerSelected = var9;
    var9 = {};
    var9.marginRight = var12;
    var3.answerEmoji = var9;
    var9 = {};
    var9.flexShrink = var11;
    var3.answerText = var9;
    var9 = {};
    var9.fontSize = var10;
    var3.emojiText = var9;
    var9 = {
        'height': 16,
        'width': 16,
        'flexShrink': 0
    };
    var3.emojiImage = var9;
    var9 = {
        'flexDirection': 'column',
        'alignItems': 'center',
        'paddingHorizontal': 16
    };
    var3.noResultsContainer = var9;
    var9 = {
        'marginTop': 32,
        'width': 138
    };
    var3.noResultsImage = var9;
    var9 = {
        'marginTop': 16,
        'textAlign': 'center'
    };
    var3.noResultsTitle = var9;
    var9 = {
        'marginTop': 4,
        'textAlign': 'center'
    };
    var3.noResultsSubtitle = var9;
    var3 = var6.bind(var8)(var3);
    var _closure1_slot16 = var3;
    var6 = var7.forwardRef;
    var3 = function(arg0, arg1) { // Environment: var1
        _fun76299: for (var _fun76299_ip = 0;;) switch (_fun76299_ip) {
            case 0:
                var1 = arg0;
                var12 = var1.answer;
                var _closure2_slot0 = var12;
                var2 = var1.reaction;
                var10 = var1.selected;
                var7 = var1.setSelectedAnswerId;
                var _closure2_slot1 = var7;
                var1 = _closure1_slot16;
                var3 = undefined;
                var13 = var1.bind(var3)();
                var6 = null;
                var4 = var6 == var2;
                var1 = undefined;
                if (var4) {
                    _fun76299_ip = 82;
                    continue _fun76299
                }
            case 61:
                var2 = var2.count_details;
                var4 = var6 == var2;
                var1 = undefined;
                if (var4) {
                    _fun76299_ip = 82;
                    continue _fun76299
                }
            case 76:
                var1 = var2.vote;
            case 82:
                var2 = var6 != var1;
                var9 = 0;
                if (!var2) {
                    _fun76299_ip = 94;
                    continue _fun76299
                }
            case 91:
                var9 = var1;
            case 94:
                var4 = _closure1_slot5;
                var2 = var4.useCallback;
                var1 = new Array(2);
                var1[0] = var7;
                var7 = var12.answer_id;
                var1[1] = var7;
                var0 = function() { // Environment: var0
                    var2 = _closure2_slot1;
                    var1 = global;
                    var3 = var1.String;
                    var0 = _closure2_slot0;
                    var1 = var0.answer_id;
                    var0 = undefined;
                    var1 = var3.bind(var0)(var1);
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var7 = var2.bind(var4)(var0, var1);
                var8 = 'text-default';
                if (!var10) {
                    _fun76299_ip = 149;
                    continue _fun76299
                }
            case 143:
                var8 = 'interactive-text-active';
            case 149:
                var1 = _closure1_slot0;
                var11 = _closure1_slot2;
                var0 = 15;
                var2 = var11[var0];
                var2 = var1.bind(var3)(var2);
                var14 = var2.intl;
                var4 = var14.formatToPlainString;
                var0 = var11[var0];
                var0 = var1.bind(var3)(var0);
                var0 = var0.t;
                var2 = var0.wqBc7A;
                var0 = {};
                var0.numVotes = var9;
                var15 = var12.poll_media;
                var15 = var15.text;
                var0.option = var15;
                var4 = var4.bind(var14)(var2, var0);
                var2 = _closure1_slot15;
                var0 = 16;
                var0 = var11[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.PressableHighlight;
                var0 = {};
                var11 = arg1;
                var0.ref = var11;
                var0.onPress = var7;
                var11 = var13.answerButton;
                var7 = new Array(2);
                var7[0] = var11;
                var11 = undefined;
                if (!var10) {
                    _fun76299_ip = 292;
                    continue _fun76299
                }
            case 286:
                var11 = var13.answerSelected;
            case 292:
                var7[1] = var11;
                var0.style = var7;
                var7 = 'tab';
                var0.accessibilityRole = var7;
                var7 = {};
                var7.selected = var10;
                var0.accessibilityState = var7;
                var0.accessibilityLabel = var4;
                var4 = var12.poll_media;
                var4 = var4.emoji;
                var4 = var6 != var4;
                var7 = null;
                if (!var4) {
                    _fun76299_ip = 388;
                    continue _fun76299
                }
            case 345:
                var11 = _closure1_slot14;
                var10 = _closure1_slot19;
                var4 = {};
                var14 = var13.answerEmoji;
                var4.style = var14;
                var14 = var12.poll_media;
                var14 = var14.emoji;
                var4.emoji = var14;
                var7 = var11.bind(var3)(var10, var4);
            case 388:
                var4 = new Array(3);
                var4[0] = var7;
                var7 = var12.poll_media;
                var7 = var7.text;
                var7 = var6 != var7;
                var6 = null;
                if (!var7) {
                    _fun76299_ip = 500;
                    continue _fun76299
                }
            case 416:
                var11 = _closure1_slot14;
                var10 = _closure1_slot0;
                var14 = _closure1_slot2;
                var7 = 17;
                var7 = var14[var7];
                var7 = var10.bind(var3)(var7);
                var10 = var7.Text;
                var7 = {};
                var13 = var13.answerText;
                var7.style = var13;
                var13 = 'text-sm/semibold';
                var7.variant = var13;
                var7.color = var8;
                var13 = 1;
                var7.lineClamp = var13;
                var12 = var12.poll_media;
                var12 = var12.text;
                var7.children = var12;
                var6 = var11.bind(var3)(var10, var7);
            case 500:
                var4[1] = var6;
                var7 = _closure1_slot15;
                var6 = _closure1_slot0;
                var10 = _closure1_slot2;
                var5 = 17;
                var5 = var10[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.Text;
                var5 = {
                    'variant': 'text-sm/semibold',
                    'color': null,
                    'lineClamp': 1
                };
                var5.color = var8;
                var8 = var9.toLocaleString;
                var9 = var8.bind(var9)();
                var8 = [' ', '('];
                var8[2] = var9;
                var9 = ')';
                var8[3] = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var3 = var6.bind(var7)(var3);
    var _closure1_slot17 = var3;
    var3 = {};
    var6 = 'function PollVotesActionSheetTsx1(){const{opacity}=this.__closure;return{flex:1,opacity:opacity.get(),marginBottom:32};}';
    var3.code = var6;
    var _closure1_slot18 = var3;
    var3 = 41;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/polls/native/PollVotesActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun76301: for (var _fun76301_ip = 0;;) switch (_fun76301_ip) {
            case 0:
                var0 = arg0;
                var14 = var0.channelId;
                var _closure2_slot0 = var14;
                var13 = var0.messageId;
                var _closure2_slot1 = var13;
                var7 = var0.initialAnswerId;
                var3 = undefined;
                var _closure2_slot4 = var3;
                var0 = _closure1_slot16;
                var18 = var0.bind(var3)();
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var0 = 21;
                var2 = var6[var0];
                var4 = var5.bind(var3)(var2);
                var2 = 38;
                var2 = var6[var2];
                var2 = var5.bind(var3)(var2);
                var2 = var2.POLL_VOTES;
                var2 = var4.bind(var3)(var2);
                var4 = var2.analyticsLocations;
                var5 = _closure1_slot5;
                var2 = var5.useState;
                var7 = var2.bind(var5)(var7);
                var5 = _closure1_slot3;
                var2 = 2;
                var5 = var5.bind(var3)(var7, var2);
                var10 = 0;
                var22 = var5[var10];
                var _closure2_slot2 = var22;
                var2 = 1;
                var21 = var5[var2];
                var5 = _closure1_slot0;
                var2 = 12;
                var2 = var6[var2];
                var7 = var5.bind(var3)(var2);
                var6 = var7.useStateFromStores;
                var2 = _closure1_slot12;
                var5 = new Array(1);
                var5[0] = var2;
                var2 = function() { // Environment: var1
                    var3 = _closure1_slot12;
                    var2 = var3.getMessage;
                    var1 = _closure2_slot0;
                    var0 = _closure2_slot1;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var23 = var6.bind(var7)(var5, var2);
                var _closure2_slot3 = var23;
                var11 = null;
                var2 = var11 != var23;
                if (!var2) {
                    _fun76301_ip = 208;
                    continue _fun76301
                }
            case 198:
                var5 = var23.poll;
                var2 = var11 != var5;
            case 208:
                _closure2_slot4 = var2;
                var8 = _closure1_slot5;
                var7 = var8.useEffect;
                var6 = new Array(1);
                var6[0] = var2;
                var5 = function() { // Environment: var1
                    _fun76303: for (var _fun76303_ip = 0;;) switch (_fun76303_ip) {
                        case 0:
                            var0 = _closure2_slot4;
                            if (var0) {
                                _fun76303_ip = 52;
                                continue _fun76303
                            }
                        case 10:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 39;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.hideActionSheet;
                            var0 = 'PollVotesActionSheet';
                            var0 = var1.bind(var2)(var0);
                        case 52:
                            var0 = undefined;
                            return var0;
                    }
                };
                var5 = var7.bind(var8)(var5, var6);
                var8 = _closure1_slot5;
                var7 = var8.useMemo;
                var6 = var11 == var23;
                var5 = undefined;
                if (var6) {
                    _fun76301_ip = 266;
                    continue _fun76301
                }
            case 260:
                var5 = var23.reactions;
            case 266:
                var6 = new Array(2);
                var6[0] = var5;
                var6[1] = var22;
                var5 = function() { // Environment: var1
                    _fun76304: for (var _fun76304_ip = 0;;) switch (_fun76304_ip) {
                        case 0:
                            var1 = _closure2_slot3;
                            var2 = null;
                            var4 = var2 == var1;
                            var3 = undefined;
                            var1 = undefined;
                            if (var4) {
                                _fun76304_ip = 30;
                                continue _fun76304
                            }
                        case 20:
                            var4 = _closure2_slot3;
                            var1 = var4.reactions;
                        case 30:
                            if (!(var2 == var1)) {
                                _fun76304_ip = 36;
                                continue _fun76304
                            }
                        case 34:
                            return var3;
                        case 36:
                            var2 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var1 = 20;
                            var1 = var4[var1];
                            var3 = var2.bind(var3)(var1);
                            var2 = var3.reactionForId;
                            var1 = _closure2_slot3;
                            var1 = var1.reactions;
                            var0 = _closure2_slot2;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                    }
                };
                var12 = var7.bind(var8)(var5, var6);
                if (var2) {
                    _fun76301_ip = 296;
                    continue _fun76301
                }
            case 294:
                return var11;
            case 296:
                var2 = var11 == var23;
                var17 = undefined;
                if (var2) {
                    _fun76301_ip = 343;
                    continue _fun76301
                }
            case 305:
                var2 = var23.poll;
                var5 = var11 == var2;
                var17 = undefined;
                if (var5) {
                    _fun76301_ip = 343;
                    continue _fun76301
                }
            case 320:
                var5 = var2.answers;
                var2 = var5.find;
                var1 = function(arg0) { // Environment: var1
                    var0 = global;
                    var2 = var0.String;
                    var0 = arg0;
                    var1 = var0.answer_id;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var0 = _closure2_slot2;
                    var0 = var1 === var0;
                    return var0;
                };
                var17 = var2.bind(var5)(var1);
            case 343:
                var2 = var11 == var12;
                var1 = undefined;
                if (var2) {
                    _fun76301_ip = 373;
                    continue _fun76301
                }
            case 352:
                var2 = var12.count_details;
                var5 = var11 == var2;
                var1 = undefined;
                if (var5) {
                    _fun76301_ip = 373;
                    continue _fun76301
                }
            case 367:
                var1 = var2.vote;
            case 373:
                var2 = var11 != var1;
                var8 = 0;
                if (!var2) {
                    _fun76301_ip = 385;
                    continue _fun76301
                }
            case 382:
                var8 = var1;
            case 385:
                var2 = _closure1_slot14;
                var15 = _closure1_slot0;
                var19 = _closure1_slot2;
                var0 = var19[var0];
                var0 = var15.bind(var3)(var0);
                var1 = var0.AnalyticsLocationProvider;
                var0 = {};
                var0.value = var4;
                var6 = _closure1_slot15;
                var4 = 40;
                var4 = var19[var4];
                var4 = var15.bind(var3)(var4);
                var5 = var4.BottomSheet;
                var4 = {};
                var7 = true;
                var4.scrollable = var7;
                var20 = _closure1_slot14;
                var16 = _closure1_slot20;
                var7 = {};
                var7.message = var23;
                var7.selectedAnswerId = var22;
                var7.setSelectedAnswerId = var21;
                var7 = var20.bind(var3)(var16, var7);
                var4.header = var7;
                var16 = _closure1_slot15;
                var7 = 17;
                var7 = var19[var7];
                var7 = var15.bind(var3)(var7);
                var15 = var7.Text;
                var7 = {
                    'style': null,
                    'variant': 'text-sm/semibold',
                    'color': 'text-default'
                };
                var18 = var18.answerName;
                var7.style = var18;
                var19 = var11 == var17;
                var18 = undefined;
                if (var19) {
                    _fun76301_ip = 550;
                    continue _fun76301
                }
            case 539:
                var17 = var17.poll_media;
                var18 = var17.text;
            case 550:
                var17 = new Array(3);
                var17[0] = var18;
                var18 = ' - ';
                var17[1] = var18;
                var19 = _closure1_slot0;
                var22 = _closure1_slot2;
                var18 = 15;
                var20 = var22[var18];
                var20 = var19.bind(var3)(var20);
                var21 = var20.intl;
                var20 = var21.format;
                var18 = var22[var18];
                var18 = var19.bind(var3)(var18);
                var18 = var18.t;
                var19 = var18["SG/Cyy"];
                var18 = {};
                var18.count = var8;
                var18 = var20.bind(var21)(var19, var18);
                var17[2] = var18;
                var7.children = var17;
                var15 = var16.bind(var3)(var15, var7);
                var7 = new Array(2);
                var7[0] = var15;
                if (!(var11 != var12)) {
                    _fun76301_ip = 663;
                    continue _fun76301
                }
            case 659:
                if (!(!(var8 > var10))) {
                    _fun76301_ip = 681;
                    continue _fun76301
                }
            case 663:
                var11 = _closure1_slot14;
                var10 = _closure1_slot22;
                var8 = {};
                var8 = var11.bind(var3)(var10, var8);
                _fun76301_ip = 710;
                continue _fun76301;
            case 681:
                var11 = _closure1_slot14;
                var10 = _closure1_slot21;
                var9 = {};
                var9.channelId = var14;
                var9.messageId = var13;
                var9.reaction = var12;
                var8 = var11.bind(var3)(var10, var9);
            case 710:
                var7[1] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 5, 31, 27, 1298, 4737, 1372, 4249, 1621, 33, 1297, 671, 566, 1417, 5769, 1234, 4902, 3941, 6551, 4961, 6805, 5726, 9668, 9237, 6554, 3961, 3236, 4898, 5452, 8202, 7353, 3720, 4097, 5753, 3246, 3206, 9669, 9670, 5579, 3278, 4931, 2]);