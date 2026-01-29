// modules/reactions/native/MessageReactionsContent.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var13 = metroImportDefault;
    var8 = metroImportAll;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var8;
    var _closure1_slot3 = var7;
    var4 = function(arg0) { // Original name: useReactors, environment: var1
        _fun73190: for (var _fun73190_ip = 0;;) switch (_fun73190_ip) {
            case 0:
                var2 = arg0;
                var12 = var2.channelId;
                var _closure2_slot0 = var12;
                var1 = var2.messageId;
                var _closure2_slot1 = var1;
                var3 = var2.reaction;
                var _closure2_slot2 = var3;
                var5 = var2.reactionType;
                var _closure2_slot3 = var5;
                var8 = _closure1_slot0;
                var6 = _closure1_slot3;
                var4 = 15;
                var7 = var6[var4];
                var4 = undefined;
                var11 = var8.bind(var4)(var7);
                var10 = var11.useStateFromStores;
                var7 = _closure1_slot13;
                var9 = new Array(1);
                var9[0] = var7;
                var7 = new Array(4);
                var7[0] = var12;
                var7[1] = var1;
                var1 = var3.emoji;
                var7[2] = var1;
                var7[3] = var5;
                var12 = _closure1_slot1;
                var1 = 17;
                var1 = var6[var1];
                var13 = var12.bind(var4)(var1);
                var15 = function() { // Environment: var0
                    _fun73191: for (var _fun73191_ip = 0;;) switch (_fun73191_ip) {
                        case 0:
                            var6 = _closure1_slot13;
                            var5 = var6.getReactions;
                            var11 = _closure2_slot0;
                            var10 = _closure2_slot1;
                            var2 = _closure2_slot2;
                            var9 = var2.emoji;
                            var8 = _closure1_slot15;
                            var7 = _closure2_slot3;
                            var12 = var6;
                            var5 = var12[var5](var11, var10, var9, var8, var7, var6);
                            var0 = global;
                            var2 = var0.Array;
                            var1 = var2.from;
                            var3 = null;
                            var4 = var3 == var5;
                            var0 = undefined;
                            if (var4) {
                                _fun73191_ip = 82;
                                continue _fun73191
                            }
                        case 73:
                            var4 = var5.values;
                            var0 = var4.bind(var5)();
                        case 82:
                            if (!(var3 == var0)) {
                                _fun73191_ip = 90;
                                continue _fun73191
                            }
                        case 86:
                            var0 = new Array(0);
                        case 90:
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var17 = var11;
                var16 = var9;
                var14 = var7;
                var1 = var17[var10](var16, var15, var14, var13, var12);
                var0 = {};
                var0.reactors = var1;
                var7 = 18;
                var6 = var6[var7];
                var6 = var8.bind(var4)(var6);
                var6 = var6.ReactionTypes;
                var6 = var6.VOTE;
                if (!(var5 !== var6)) {
                    _fun73190_ip = 231;
                    continue _fun73190
                }
            case 182:
                var6 = _closure1_slot0;
                var2 = _closure1_slot3;
                var2 = var2[var7];
                var2 = var6.bind(var4)(var2);
                var2 = var2.ReactionTypes;
                var2 = var2.BURST;
                if (!(var5 !== var2)) {
                    _fun73190_ip = 223;
                    continue _fun73190
                }
            case 215:
                var2 = var3.count;
                _fun73190_ip = 229;
                continue _fun73190;
            case 223:
                var2 = var3.burst_count;
            case 229:
                _fun73190_ip = 269;
                continue _fun73190;
            case 231:
                var5 = var3.count_details;
                var3 = null;
                var6 = var3 == var5;
                var4 = undefined;
                if (var6) {
                    _fun73190_ip = 254;
                    continue _fun73190
                }
            case 248:
                var4 = var5.vote;
            case 254:
                var5 = var3 != var4;
                var3 = 0;
                if (!var5) {
                    _fun73190_ip = 266;
                    continue _fun73190
                }
            case 263:
                var3 = var4;
            case 266:
                var2 = var3;
            case 269:
                var1 = var1.length;
                var1 = var2 > var1;
                var0.reactorsHasMore = var1;
                return var0;
        }
    };
    var _closure1_slot27 = var4;
    var3 = function(arg0) { // Original name: useReactorsOnScrollNative, environment: var1
        _fun73192: for (var _fun73192_ip = 0;;) switch (_fun73192_ip) {
            case 0:
                var1 = arg0;
                var11 = var1.channelId;
                var _closure2_slot0 = var11;
                var10 = var1.messageId;
                var _closure2_slot1 = var10;
                var9 = var1.reactionSelected;
                var _closure2_slot2 = var9;
                var5 = var1.reactors;
                var8 = var1.reactorsHasMore;
                var _closure2_slot3 = var8;
                var3 = var1.reactionType;
                var _closure2_slot4 = var3;
                var2 = undefined;
                var _closure2_slot6 = var2;
                var _closure2_slot7 = var2;
                var _closure2_slot8 = var2;
                var _closure2_slot9 = var2;
                var7 = _closure1_slot5;
                var6 = var7.useRef;
                var4 = false;
                var4 = var6.bind(var7)(var4);
                var _closure2_slot5 = var4;
                var6 = var5.length;
                var4 = 0;
                var4 = var6 > var4;
                var7 = null;
                if (!var4) {
                    _fun73192_ip = 137;
                    continue _fun73192
                }
            case 116:
                var6 = var5.length;
                var4 = 1;
                var4 = var6 - var4;
                var4 = var5[var4];
                var7 = var4.id;
            case 137:
                _closure2_slot6 = var7;
                var6 = _closure1_slot5;
                var5 = var6.useCallback;
                var4 = new Array(6);
                var4[0] = var11;
                var4[1] = var10;
                var4[2] = var9;
                var4[3] = var8;
                var4[4] = var7;
                var4[5] = var3;
                var3 = function(arg0, arg1) { // Environment: var0
                    _fun73193: for (var _fun73193_ip = 0;;) switch (_fun73193_ip) {
                        case 0:
                            var1 = arg0;
                            var0 = arg1;
                            var1 = var1 / var0;
                            var0 = 0.75;
                            var0 = var1 > var0;
                            if (!var0) {
                                _fun73193_ip = 34;
                                continue _fun73193
                            }
                        case 27:
                            var0 = _closure2_slot3;
                        case 34:
                            if (!var0) {
                                _fun73193_ip = 52;
                                continue _fun73193
                            }
                        case 37:
                            var1 = _closure2_slot5;
                            var1 = var1.current;
                            var0 = !var1;
                        case 52:
                            if (!var0) {
                                _fun73193_ip = 186;
                                continue _fun73193
                            }
                        case 58:
                            var1 = _closure2_slot5;
                            var0 = true;
                            var1.current = var0;
                            var2 = _closure1_slot2;
                            var1 = _closure1_slot3;
                            var0 = 19;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.getReactors;
                            var0 = {};
                            var5 = _closure2_slot0;
                            var0.channelId = var5;
                            var5 = _closure2_slot1;
                            var0.messageId = var5;
                            var5 = _closure2_slot2;
                            var5 = var5.emoji;
                            var0.emoji = var5;
                            var4 = _closure1_slot15;
                            var0.limit = var4;
                            var4 = _closure2_slot6;
                            var0.after = var4;
                            var3 = _closure2_slot4;
                            var0.type = var3;
                            var2 = var1.bind(var2)(var0);
                            var1 = var2.then;
                            var0 = function() { // Environment: var0
                                var1 = _closure2_slot5;
                                var0 = false;
                                var1.current = var0;
                                var0 = undefined;
                                return var0;
                            };
                            var0 = var1.bind(var2)(var0);
                        case 186:
                            var0 = undefined;
                            return var0;
                    }
                };
                var3 = var5.bind(var6)(var3, var4);
                _closure2_slot7 = var3;
                var5 = _closure1_slot5;
                var4 = var5.useRef;
                var4 = var4.bind(var5)(var3);
                _closure2_slot8 = var4;
                var6 = _closure1_slot5;
                var5 = var6.useEffect;
                var4 = new Array(1);
                var4[0] = var3;
                var3 = function() { // Environment: var0
                    var1 = _closure2_slot8;
                    var0 = _closure2_slot7;
                    var1.current = var0;
                    var0 = undefined;
                    return var0;
                };
                var3 = var5.bind(var6)(var3, var4);
                var3 = _closure1_slot1;
                var4 = _closure1_slot3;
                var1 = 20;
                var5 = var4[var1];
                var6 = var3.bind(var2)(var5);
                var5 = function() { // Environment: var0
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot3;
                    var0 = 21;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.debounce;
                    var1 = function(arg0, arg1) { // Environment: var0
                        var3 = _closure2_slot8;
                        var2 = var3.current;
                        var1 = arg0;
                        var0 = arg1;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                    };
                    var0 = 16;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var5 = var6.bind(var2)(var5);
                _closure2_slot9 = var5;
                var1 = var4[var1];
                var1 = var3.bind(var2)(var1);
                var0 = function() { // Environment: var0
                    var0 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var0 = var0.nativeEvent;
                        var1 = var0.contentOffset;
                        var3 = var1.y;
                        var0 = var0.contentSize;
                        var2 = var0.height;
                        var1 = _closure2_slot9;
                        var0 = undefined;
                        var0 = var1.bind(var0)(var3, var2);
                        return var0;
                    };
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var _closure1_slot28 = var3;
    var0 = function(arg0, arg1) { // Original name: useRenderFooter, environment: var1
        var6 = arg0;
        var5 = arg1;
        var _closure2_slot0 = var6;
        var _closure2_slot1 = var5;
        var3 = _closure1_slot20;
        var2 = undefined;
        var4 = var3.bind(var2)();
        var _closure2_slot2 = var4;
        var3 = _closure1_slot5;
        var2 = var3.useCallback;
        var1 = new Array(3);
        var1[0] = var6;
        var1[1] = var5;
        var1[2] = var4;
        var0 = function() { // Environment: var0
            _fun73201: for (var _fun73201_ip = 0;;) switch (_fun73201_ip) {
                case 0:
                    var0 = _closure2_slot1;
                    if (var0) {
                        _fun73201_ip = 27;
                        continue _fun73201
                    }
                case 10:
                    var0 = _closure2_slot0;
                    var3 = var0.length;
                    var2 = 0;
                    var0 = null;
                    if (!(var2 === var3)) {
                        _fun73201_ip = 70;
                        continue _fun73201
                    }
                case 27:
                    var4 = _closure1_slot17;
                    var3 = _closure1_slot6;
                    var2 = {};
                    var1 = _closure2_slot2;
                    var1 = var1.loadingSpinner;
                    var2.style = var1;
                    var1 = 'large';
                    var2.size = var1;
                    var1 = undefined;
                    var0 = var4.bind(var1)(var3, var2);
                case 70:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot29 = var0;
    var0 = function(arg0, arg1, arg2, arg3, arg4) { // Original name: useRenderItem, environment: var1
        var10 = arg0;
        var7 = arg1;
        var9 = arg2;
        var6 = arg3;
        var8 = arg4;
        var _closure2_slot0 = var10;
        var _closure2_slot1 = var7;
        var _closure2_slot2 = var9;
        var _closure2_slot3 = var6;
        var _closure2_slot4 = var8;
        var2 = _closure1_slot20;
        var3 = undefined;
        var5 = var2.bind(var3)();
        var _closure2_slot5 = var5;
        var4 = _closure1_slot1;
        var11 = _closure1_slot3;
        var2 = 22;
        var2 = var11[var2];
        var2 = var4.bind(var3)(var2);
        var2 = var2.bind(var3)();
        var4 = var2.analyticsLocations;
        var _closure2_slot6 = var4;
        var3 = _closure1_slot5;
        var2 = var3.useCallback;
        var1 = new Array(7);
        var1[0] = var10;
        var1[1] = var9;
        var1[2] = var8;
        var1[3] = var7;
        var1[4] = var6;
        var1[5] = var5;
        var1[6] = var4;
        var0 = function(arg0, arg1) { // Environment: var0
            _fun73203: for (var _fun73203_ip = 0;;) switch (_fun73203_ip) {
                case 0:
                    var8 = arg1;
                    var0 = _closure2_slot0;
                    var17 = var0[var8];
                    var _closure3_slot0 = var17;
                    var2 = var17.id;
                    var _closure3_slot1 = var2;
                    var1 = var0.length;
                    var0 = 1;
                    var7 = var1 - var0;
                    var3 = _closure1_slot11;
                    var1 = var3.getChannel;
                    var0 = _closure2_slot2;
                    var3 = var1.bind(var3)(var0);
                    var5 = null;
                    var0 = var5 != var3;
                    var1 = null;
                    if (!var0) {
                        _fun73203_ip = 83;
                        continue _fun73203
                    }
                case 73:
                    var0 = var3.getGuildId;
                    var1 = var0.bind(var3)();
                case 83:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var0 = 23;
                    var0 = var3[var0];
                    var3 = undefined;
                    var9 = var4.bind(var3)(var0);
                    var4 = var9.getNickname;
                    var0 = _closure2_slot2;
                    var16 = var4.bind(var9)(var1, var0, var17);
                    var19 = var1;
                    if (!(var5 == var16)) {
                        _fun73203_ip = 160;
                        continue _fun73203
                    }
                case 129:
                    var1 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var0 = 24;
                    var0 = var4[var0];
                    var1 = var1.bind(var3)(var0);
                    var0 = var1.getGlobalName;
                    var16 = var0.bind(var1)(var17);
                case 160:
                    var0 = var5 != var19;
                    var21 = null;
                    if (!var0) {
                        _fun73203_ip = 185;
                        continue _fun73203
                    }
                case 169:
                    var1 = _closure1_slot12;
                    var0 = var1.getMember;
                    var21 = var0.bind(var1)(var19, var2);
                case 185:
                    var0 = _closure2_slot3;
                    var1 = var0.burst_count;
                    var0 = 0;
                    if (!(!(var1 > var0))) {
                        _fun73203_ip = 235;
                        continue _fun73203
                    }
                case 201:
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var0 = 18;
                    var0 = var2[var0];
                    var0 = var1.bind(var3)(var0);
                    var0 = var0.ReactionTypes;
                    var0 = var0.NORMAL;
                    _fun73203_ip = 267;
                    continue _fun73203;
                case 235:
                    var2 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var1 = 18;
                    var1 = var4[var1];
                    var1 = var2.bind(var3)(var1);
                    var1 = var1.ReactionTypes;
                    var0 = var1.BURST;
                case 267:
                    var _closure3_slot2 = var0;
                    var2 = _closure1_slot18;
                    var1 = _closure1_slot9;
                    var0 = {};
                    var20 = _closure2_slot5;
                    var4 = var20.listRow;
                    var0.style = var4;
                    var10 = _closure1_slot17;
                    var14 = _closure1_slot1;
                    var22 = _closure1_slot3;
                    var4 = 25;
                    var4 = var22[var4];
                    var9 = var14.bind(var3)(var4);
                    var4 = {};
                    var15 = _closure1_slot17;
                    var18 = 26;
                    var13 = var22[var18];
                    var14 = var14.bind(var3)(var13);
                    var13 = {};
                    var20 = var20.avatar;
                    var13.style = var20;
                    var20 = _closure1_slot0;
                    var18 = var22[var18];
                    var18 = var20.bind(var3)(var18);
                    var18 = var18.AvatarSizes;
                    var18 = var18.SMALL;
                    var13.size = var18;
                    var18 = var17.getAvatarSource;
                    var20 = var18.bind(var17)(var19);
                    var18 = var20;
                    if (!(var5 != var19)) {
                        _fun73203_ip = 450;
                        continue _fun73203
                    }
                case 396:
                    var22 = var5 == var21;
                    var19 = undefined;
                    if (var22) {
                        _fun73203_ip = 411;
                        continue _fun73203
                    }
                case 405:
                    var19 = var21.avatar;
                case 411:
                    var18 = var20;
                    if (!(var5 != var19)) {
                        _fun73203_ip = 450;
                        continue _fun73203
                    }
                case 418:
                    var20 = _closure1_slot1;
                    var22 = _closure1_slot3;
                    var19 = 27;
                    var19 = var22[var19];
                    var20 = var20.bind(var3)(var19);
                    var19 = var20.getGuildMemberAvatarSource;
                    var18 = var19.bind(var20)(var21, var17);
                case 450:
                    var13.source = var18;
                    var13 = var15.bind(var3)(var14, var13);
                    var4.leading = var13;
                    var15 = _closure1_slot17;
                    var14 = _closure1_slot1;
                    var18 = _closure1_slot3;
                    var13 = 28;
                    var13 = var18[var13];
                    var14 = var14.bind(var3)(var13);
                    var13 = {};
                    var13.user = var17;
                    var13.nick = var16;
                    var13 = var15.bind(var3)(var14, var13);
                    var4.label = var13;
                    var13 = _closure2_slot4;
                    var12 = null;
                    if (!var13) {
                        _fun73203_ip = 623;
                        continue _fun73203
                    }
                case 519:
                    var14 = _closure1_slot0;
                    var15 = _closure1_slot3;
                    var13 = 29;
                    var13 = var15[var13];
                    var14 = var14.bind(var3)(var13);
                    var13 = var14.isAndroid;
                    var13 = var13.bind(var14)();
                    var12 = null;
                    if (!var13) {
                        _fun73203_ip = 623;
                        continue _fun73203
                    }
                case 554:
                    var15 = _closure1_slot17;
                    var14 = _closure1_slot8;
                    var13 = {};
                    var16 = function() { // Original name: onPress, environment: var11
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot3;
                        var3 = 19;
                        var0 = var8[var3];
                        var6 = undefined;
                        var2 = var7.bind(var6)(var0);
                        var1 = var2.removeReaction;
                        var0 = {};
                        var5 = _closure2_slot2;
                        var0.channelId = var5;
                        var5 = _closure2_slot1;
                        var0.messageId = var5;
                        var4 = _closure2_slot3;
                        var4 = var4.emoji;
                        var0.emoji = var4;
                        var3 = var8[var3];
                        var3 = var7.bind(var6)(var3);
                        var3 = var3.ReactionLocations;
                        var3 = var3.MESSAGE;
                        var0.location = var3;
                        var3 = _closure3_slot0;
                        var3 = var3.id;
                        var0.userId = var3;
                        var3 = {};
                        var5 = _closure3_slot2;
                        var4 = 18;
                        var4 = var8[var4];
                        var4 = var7.bind(var6)(var4);
                        var4 = var4.ReactionTypes;
                        var4 = var4.BURST;
                        var4 = var5 === var4;
                        var3.burst = var4;
                        var0.options = var3;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var13.onPress = var16;
                    var18 = _closure1_slot17;
                    var17 = _closure1_slot0;
                    var19 = _closure1_slot3;
                    var16 = 30;
                    var16 = var19[var16];
                    var16 = var17.bind(var3)(var16);
                    var17 = var16.XSmallIcon;
                    var16 = {};
                    var16 = var18.bind(var3)(var17, var16);
                    var13.children = var16;
                    var12 = var15.bind(var3)(var14, var13);
                case 623:
                    var4.trailing = var12;
                    var11 = function() { // Original name: onLongPress, environment: var11
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot3;
                        var0 = 31;
                        var1 = var1[var0];
                        var0 = undefined;
                        var2 = var2.bind(var0)(var1);
                        var1 = {};
                        var3 = _closure3_slot1;
                        var1.userId = var3;
                        var5 = _closure2_slot2;
                        var1.channelId = var5;
                        var5 = _closure2_slot1;
                        var1.messageId = var5;
                        var4 = _closure3_slot0;
                        var1.localUser = var4;
                        var3 = _closure2_slot6;
                        var1.sourceAnalyticsLocations = var3;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var4.onLongPress = var11;
                    var9 = var10.bind(var3)(var9, var4);
                    var4 = new Array(2);
                    var4[0] = var9;
                    var5 = null;
                    if (!(var8 !== var7)) {
                        _fun73203_ip = 692;
                        continue _fun73203
                    }
                case 660:
                    var8 = _closure1_slot17;
                    var7 = _closure1_slot1;
                    var9 = _closure1_slot3;
                    var6 = 32;
                    var6 = var9[var6];
                    var7 = var7.bind(var3)(var6);
                    var6 = {};
                    var5 = var8.bind(var3)(var7, var6);
                case 692:
                    var4[1] = var5;
                    var0.children = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot30 = var0;
    var0 = function(arg0, arg1, arg2, arg3) { // Original name: useRenderQuickActions, environment: var1
        var7 = arg0;
        var6 = arg1;
        var5 = arg2;
        var8 = arg3;
        var _closure2_slot0 = var7;
        var _closure2_slot1 = var6;
        var _closure2_slot2 = var5;
        var _closure2_slot3 = var8;
        var3 = _closure1_slot20;
        var2 = undefined;
        var4 = var3.bind(var2)();
        var _closure2_slot4 = var4;
        var3 = _closure1_slot5;
        var2 = var3.useCallback;
        var1 = new Array(5);
        var1[0] = var8;
        var1[1] = var7;
        var1[2] = var6;
        var1[3] = var5;
        var1[4] = var4;
        var0 = function(arg0, arg1) { // Environment: var0
            _fun73207: for (var _fun73207_ip = 0;;) switch (_fun73207_ip) {
                case 0:
                    var2 = _closure2_slot3;
                    var1 = arg1;
                    var1 = var2[var1];
                    var _closure3_slot0 = var1;
                    var1 = _closure2_slot2;
                    var2 = var1.burst_count;
                    var1 = 0;
                    if (!(!(var2 > var1))) {
                        _fun73207_ip = 75;
                        continue _fun73207
                    }
                case 36:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 18;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.ReactionTypes;
                    var1 = var1.NORMAL;
                    _fun73207_ip = 112;
                    continue _fun73207;
                case 75:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var2 = 18;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var2 = var2.ReactionTypes;
                    var1 = var2.BURST;
                case 112:
                    var _closure3_slot1 = var1;
                    var3 = _closure1_slot17;
                    var2 = _closure1_slot9;
                    var1 = {};
                    var0 = _closure2_slot4;
                    var0 = var0.buttonRow;
                    var1.style = var0;
                    var6 = _closure1_slot17;
                    var9 = _closure1_slot1;
                    var10 = _closure1_slot3;
                    var0 = 33;
                    var4 = var10[var0];
                    var0 = undefined;
                    var5 = var9.bind(var0)(var4);
                    var4 = {};
                    var11 = _closure1_slot0;
                    var8 = 34;
                    var12 = var10[var8];
                    var12 = var11.bind(var0)(var12);
                    var13 = var12.intl;
                    var12 = var13.string;
                    var8 = var10[var8];
                    var8 = var11.bind(var0)(var8);
                    var8 = var8.t;
                    var8 = var8.N86XcP;
                    var8 = var12.bind(var13)(var8);
                    var4.title = var8;
                    var8 = 30;
                    var8 = var10[var8];
                    var8 = var11.bind(var0)(var8);
                    var8 = var8.XSmallIcon;
                    var4.IconComponent = var8;
                    var8 = 14;
                    var8 = var10[var8];
                    var8 = var9.bind(var0)(var8);
                    var8 = var8.unsafe_rawColors;
                    var8 = var8.RED_400;
                    var4.color = var8;
                    var7 = function() { // Original name: onPress, environment: var7
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot3;
                        var3 = 19;
                        var0 = var8[var3];
                        var6 = undefined;
                        var2 = var7.bind(var6)(var0);
                        var1 = var2.removeReaction;
                        var0 = {};
                        var5 = _closure2_slot0;
                        var0.channelId = var5;
                        var5 = _closure2_slot1;
                        var0.messageId = var5;
                        var4 = _closure2_slot2;
                        var4 = var4.emoji;
                        var0.emoji = var4;
                        var3 = var8[var3];
                        var3 = var7.bind(var6)(var3);
                        var3 = var3.ReactionLocations;
                        var3 = var3.MESSAGE;
                        var0.location = var3;
                        var3 = _closure3_slot0;
                        var3 = var3.id;
                        var0.userId = var3;
                        var3 = {};
                        var5 = _closure3_slot1;
                        var4 = 18;
                        var4 = var8[var4];
                        var4 = var7.bind(var6)(var4);
                        var4 = var4.ReactionTypes;
                        var4 = var4.BURST;
                        var4 = var5 === var4;
                        var3.burst = var4;
                        var0.options = var3;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var4.onPress = var7;
                    var7 = 48;
                    var4.height = var7;
                    var4 = var6.bind(var0)(var5, var4);
                    var1.children = var4;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot31 = var0;
    var0 = function(arg0) { // Original name: ReactionTab, environment: var1
        _fun73209: for (var _fun73209_ip = 0;;) switch (_fun73209_ip) {
            case 0:
                var0 = arg0;
                var11 = var0.reaction;
                var10 = var0.index;
                var8 = var0.reactionSelectedIndex;
                var0 = _closure1_slot20;
                var4 = undefined;
                var16 = var0.bind(var4)();
                var0 = var11.burst_count;
                var12 = 0;
                var15 = var0 > var12;
                var1 = _closure1_slot0;
                var2 = _closure1_slot3;
                var0 = 35;
                var0 = var2[var0];
                var2 = var1.bind(var4)(var0);
                var1 = var2.useEmojiColorPalette;
                var0 = var11.burst_colors;
                var6 = null;
                if (!(var6 == var0)) {
                    _fun73209_ip = 87;
                    continue _fun73209
                }
            case 83:
                var0 = new Array(0);
            case 87:
                var1 = var1.bind(var2)(var0);
                var2 = var6 == var1;
                var0 = undefined;
                if (var2) {
                    _fun73209_ip = 107;
                    continue _fun73209
                }
            case 101:
                var0 = var1.accentColor;
            case 107:
                var0 = var6 != var0;
                var14 = null;
                if (!var0) {
                    _fun73209_ip = 131;
                    continue _fun73209
                }
            case 116:
                var0 = {};
                var2 = var1.accentColor;
                var0.color = var2;
                var14 = var0;
            case 131:
                var0 = var6 != var1;
                var9 = null;
                if (!var0) {
                    _fun73209_ip = 191;
                    continue _fun73209
                }
            case 140:
                var0 = {};
                var3 = _closure1_slot0;
                var5 = _closure1_slot3;
                var2 = 36;
                var2 = var5[var2];
                var5 = var3.bind(var4)(var2);
                var3 = var5.hexOpacityToRgba;
                var2 = var1.backgroundColor;
                var1 = var1.opacity;
                var1 = var3.bind(var5)(var2, var1);
                var0.backgroundColor = var1;
                var9 = var0;
            case 191:
                var5 = var11.emoji;
                var1 = _closure1_slot0;
                var2 = _closure1_slot3;
                var0 = 15;
                var0 = var2[var0];
                var17 = var1.bind(var4)(var0);
                var13 = var17.useStateFromStores;
                var0 = _closure1_slot10;
                var3 = new Array(1);
                var3[0] = var0;
                var0 = function() { // Environment: var0
                    var0 = _closure1_slot10;
                    var0 = var0.useReducedMotion;
                    return var0;
                };
                var18 = var13.bind(var17)(var3, var0);
                var0 = 37;
                var0 = var2[var0];
                var0 = var1.bind(var4)(var0);
                var1 = var0.AnimateEmoji;
                var0 = var1.useSetting;
                var17 = var0.bind(var1)();
                var0 = var5.id;
                var0 = var6 != var0;
                var13 = undefined;
                if (!var0) {
                    _fun73209_ip = 363;
                    continue _fun73209
                }
            case 291:
                var1 = _closure1_slot1;
                var2 = _closure1_slot3;
                var0 = 27;
                var0 = var2[var0];
                var2 = var1.bind(var4)(var0);
                var1 = var2.getEmojiURL;
                var0 = {};
                var3 = var5.id;
                var0.id = var3;
                var3 = var5.animated;
                if (!var3) {
                    _fun73209_ip = 340;
                    continue _fun73209
                }
            case 337:
                var3 = !var18;
            case 340:
                if (!var3) {
                    _fun73209_ip = 346;
                    continue _fun73209
                }
            case 343:
                var3 = var17;
            case 346:
                var0.animated = var3;
                var3 = 48;
                var0.size = var3;
                var13 = var1.bind(var2)(var0);
            case 363:
                var3 = _closure1_slot18;
                var2 = _closure1_slot9;
                var1 = {};
                var17 = var16.tabContainer;
                var0 = new Array(3);
                var0[0] = var17;
                var17 = var10 === var8;
                var8 = null;
                if (!var17) {
                    _fun73209_ip = 402;
                    continue _fun73209
                }
            case 396:
                var8 = var16.tabContainerSelected;
            case 402:
                var0[1] = var8;
                var8 = null;
                if (!var17) {
                    _fun73209_ip = 419;
                    continue _fun73209
                }
            case 411:
                var8 = null;
                if (!var15) {
                    _fun73209_ip = 419;
                    continue _fun73209
                }
            case 416:
                var8 = var9;
            case 419:
                var0[2] = var8;
                var1.style = var0;
                var0 = true;
                var1.accessible = var0;
                var0 = var5.name;
                var1.accessibilityLabel = var0;
                var0 = {};
                var0.selected = var17;
                var1.accessibilityState = var0;
                var9 = _closure1_slot17;
                var8 = _closure1_slot1;
                var10 = _closure1_slot3;
                var0 = 38;
                var0 = var10[var0];
                var8 = var8.bind(var4)(var0);
                var0 = {};
                var0.src = var13;
                var13 = var5.name;
                var0.name = var13;
                var18 = var16.emoji;
                var13 = new Array(2);
                var13[0] = var18;
                var18 = var16.emojiText;
                var13[1] = var18;
                var0.textEmojiStyle = var13;
                var18 = var16.emoji;
                var13 = new Array(2);
                var13[0] = var18;
                var18 = var16.emojiImage;
                var13[1] = var18;
                var0.fastImageStyle = var13;
                var8 = var9.bind(var4)(var8, var0);
                var0 = new Array(2);
                var0[0] = var8;
                var9 = _closure1_slot17;
                var8 = _closure1_slot0;
                var7 = 12;
                var7 = var10[var7];
                var7 = var8.bind(var4)(var7);
                var8 = var7.Text;
                var7 = {};
                var10 = 'text-md/bold';
                var7.variant = var10;
                var13 = var16.reactionCountText;
                var10 = new Array(3);
                var10[0] = var13;
                var13 = null;
                if (!var17) {
                    _fun73209_ip = 628;
                    continue _fun73209
                }
            case 622:
                var13 = var16.reactionCountTextSelected;
            case 628:
                var10[1] = var13;
                var13 = null;
                if (!var15) {
                    _fun73209_ip = 640;
                    continue _fun73209
                }
            case 637:
                var13 = var14;
            case 640:
                var10[2] = var13;
                var7.style = var10;
                var10 = var11.burst_count;
                if (!(!(var10 > var12))) {
                    _fun73209_ip = 666;
                    continue _fun73209
                }
            case 658:
                var10 = var11.count;
                _fun73209_ip = 672;
                continue _fun73209;
            case 666:
                var10 = var11.burst_count;
            case 672:
                var7.children = var10;
                var7 = var9.bind(var4)(var8, var7);
                var0[1] = var7;
                var1.children = var0;
                var0 = var5.id;
                if (!(var6 == var0)) {
                    _fun73209_ip = 704;
                    continue _fun73209
                }
            case 699:
                var0 = var5.name;
            case 704:
                var0 = var3.bind(var4)(var2, var1, var0);
                return var0;
        }
    };
    var _closure1_slot32 = var0;
    var0 = global;
    var10 = var0.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var5);
    var0 = 0;
    var5 = var7[var0];
    var0 = undefined;
    var5 = var13.bind(var0)(var5);
    var _closure1_slot4 = var5;
    var12 = 1;
    var5 = var7[var12];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot5 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var8 = var5.ActivityIndicator;
    var _closure1_slot6 = var8;
    var8 = var5.Dimensions;
    var _closure1_slot7 = var8;
    var8 = var5.Platform;
    var8 = var5.Pressable;
    var _closure1_slot8 = var8;
    var5 = var5.View;
    var _closure1_slot9 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var13.bind(var0)(var5);
    var _closure1_slot10 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var13.bind(var0)(var5);
    var _closure1_slot11 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var13.bind(var0)(var5);
    var _closure1_slot12 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var13.bind(var0)(var5);
    var _closure1_slot13 = var5;
    var5 = 7;
    var5 = var7[var5];
    var5 = var13.bind(var0)(var5);
    var _closure1_slot14 = var5;
    var14 = 8;
    var5 = var7[var14];
    var5 = var6.bind(var0)(var5);
    var8 = var5.DEFAULT_NUM_REACTION_USERS;
    var _closure1_slot15 = var8;
    var5 = var5.Permissions;
    var _closure1_slot16 = var5;
    var5 = 9;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var15 = var5.ACTION_SHEET_BACKGROUND_COLOR;
    var11 = 10;
    var5 = var7[var11];
    var5 = var6.bind(var0)(var5);
    var8 = var5.jsx;
    var _closure1_slot17 = var8;
    var5 = var5.jsxs;
    var _closure1_slot18 = var5;
    var5 = 11;
    var5 = var7[var5];
    var9 = var13.bind(var0)(var5);
    var8 = var9.createAnimatedComponent;
    var5 = 12;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var5 = var5.Text;
    var5 = var8.bind(var9)(var5);
    var _closure1_slot19 = var5;
    var5 = 13;
    var5 = var7[var5];
    var9 = var6.bind(var0)(var5);
    var8 = var9.createStyles;
    var5 = {};
    var10 = {};
    var10.flex = var12;
    var5.container = var10;
    var10 = {};
    var12 = 32;
    var10.padding = var12;
    var12 = 14;
    var16 = var7[var12];
    var16 = var13.bind(var0)(var16);
    var16 = var16.radii;
    var16 = var16.sm;
    var10.borderTopLeftRadius = var16;
    var16 = var7[var12];
    var16 = var13.bind(var0)(var16);
    var16 = var16.radii;
    var16 = var16.sm;
    var10.borderTopRightRadius = var16;
    var5.containerEmpty = var10;
    var10 = {};
    var16 = 48;
    var10.height = var16;
    var10.backgroundColor = var15;
    var5.listRow = var10;
    var10 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'borderRadius': null,
        'padding': 8,
        'marginTop': 8
    };
    var15 = var7[var12];
    var15 = var13.bind(var0)(var15);
    var15 = var15.radii;
    var15 = var15.sm;
    var10.borderRadius = var15;
    var5.tabContainer = var10;
    var10 = {};
    var15 = var7[var12];
    var15 = var13.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_BASE_LOWEST;
    var10.backgroundColor = var15;
    var5.tabContainerSelected = var10;
    var10 = {
        'padding': 0,
        'marginHorizontal': 8,
        'marginBottom': 8
    };
    var5.tab = var10;
    var10 = {};
    var15 = 'transparent';
    var10.borderBottomColor = var15;
    var5.tabSelected = var10;
    var10 = {};
    var15 = var7[var12];
    var15 = var13.bind(var0)(var15);
    var15 = var15.radii;
    var15 = var15.sm;
    var10.borderRadius = var15;
    var5.tabActive = var10;
    var10 = {
        'display': 'flex',
        'flexDirection': 'column'
    };
    var5.reactionTab = var10;
    var10 = {
        'display': 'flex',
        'flexDirection': 'row',
        'justifyContent': 'space-between',
        'alignItems': 'center'
    };
    var5.removeButtonContainer = var10;
    var10 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'marginRight': null,
        'gap': 2
    };
    var15 = var7[var12];
    var15 = var13.bind(var0)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_16;
    var10.marginRight = var15;
    var5.emojiOptionsButton = var10;
    var10 = {
        'backgroundColor': null,
        'borderRadius': null,
        'height': 32,
        'overflow': 'hidden',
        'minWidth': 42,
        'marginRight': 20,
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center',
        'paddingHorizontal': 12
    };
    var15 = var7[var12];
    var15 = var13.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_FEEDBACK_CRITICAL;
    var10.backgroundColor = var15;
    var15 = var7[var12];
    var15 = var13.bind(var0)(var15);
    var15 = var15.radii;
    var15 = var15.xxl;
    var10.borderRadius = var15;
    var5.removeAllButton = var10;
    var10 = {};
    var15 = var7[var12];
    var15 = var13.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.INTERACTIVE_TEXT_DEFAULT;
    var10.color = var15;
    var5.reactionCountText = var10;
    var10 = {};
    var15 = var7[var12];
    var15 = var13.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.INTERACTIVE_TEXT_ACTIVE;
    var10.color = var15;
    var5.reactionCountTextSelected = var10;
    var10 = {};
    var10.marginRight = var14;
    var5.emoji = var10;
    var10 = {
        'lineHeight': 24,
        'fontSize': 20,
        'textAlign': 'center'
    };
    var12 = var7[var12];
    var12 = var13.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.INTERACTIVE_TEXT_DEFAULT;
    var10.color = var12;
    var5.emojiText = var10;
    var10 = {
        'resizeMode': 'contain',
        'width': 24,
        'height': 24
    };
    var5.emojiImage = var10;
    var10 = {};
    var12 = 16;
    var10.padding = var12;
    var5.emojiTextIdentifier = var10;
    var10 = {};
    var10.marginRight = var11;
    var5.avatar = var10;
    var10 = {
        'flexDirection': 'row',
        'justifyContent': 'flex-end',
        'alignItems': 'center'
    };
    var5.buttonRow = var10;
    var10 = {
        'height': 48,
        'padding': 6
    };
    var5.loadingSpinner = var10;
    var5 = var8.bind(var9)(var5);
    var _closure1_slot20 = var5;
    var5 = {};
    var8 = 'function MessageReactionsContentTsx1(){const{useReducedMotion,buttonWidth,withTiming}=this.__closure;return{maxWidth:useReducedMotion?buttonWidth.get():withTiming(buttonWidth.get(),{duration:200})};}';
    var5.code = var8;
    var _closure1_slot21 = var5;
    var5 = {};
    var8 = "function MessageReactionsContentTsx2(){const{useReducedMotion,textOpacity,withTiming}=this.__closure;return{opacity:useReducedMotion?textOpacity.get():withTiming(textOpacity.get(),{duration:125}),color:'white',fontSize:14,marginLeft:8,textAlignVertical:'center'};}";
    var5.code = var8;
    var _closure1_slot22 = var5;
    var5 = function(arg0) { // Original name: RemoveAllButton, environment: var1
        _fun73211: for (var _fun73211_ip = 0;;) switch (_fun73211_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.reactions;
                var _closure2_slot0 = var0;
                var11 = var1.reactionSelectedIndex;
                var _closure2_slot1 = var11;
                var0 = var1.channelId;
                var _closure2_slot2 = var0;
                var1 = var1.messageId;
                var _closure2_slot3 = var1;
                var1 = _closure1_slot20;
                var4 = undefined;
                var8 = var1.bind(var4)();
                var15 = _closure1_slot0;
                var16 = _closure1_slot3;
                var1 = 15;
                var1 = var16[var1];
                var5 = var15.bind(var4)(var1);
                var3 = var5.useStateFromStores;
                var1 = _closure1_slot11;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var6
                    var2 = _closure1_slot11;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot2;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1 = var3.bind(var5)(var2, var0, var1);
                var2 = _closure1_slot1;
                var0 = 39;
                var0 = var16[var0];
                var0 = var2.bind(var4)(var0);
                var1 = var0.bind(var4)(var1);
                var0 = _closure1_slot10;
                var17 = var0.useReducedMotion;
                var _closure2_slot4 = var17;
                var3 = _closure1_slot5;
                var2 = var3.useState;
                var0 = true;
                var3 = var2.bind(var3)(var0);
                var2 = _closure1_slot4;
                var0 = 2;
                var2 = var2.bind(var4)(var3, var0);
                var3 = 0;
                var0 = var2[var3];
                var _closure2_slot5 = var0;
                var0 = 1;
                var0 = var2[var0];
                var _closure2_slot6 = var0;
                var5 = 11;
                var0 = var16[var5];
                var7 = var15.bind(var4)(var0);
                var2 = var7.useSharedValue;
                var0 = 64;
                var13 = var2.bind(var7)(var0);
                var _closure2_slot7 = var13;
                var0 = var16[var5];
                var7 = var15.bind(var4)(var0);
                var2 = var7.useAnimatedStyle;
                var0 = function() { // Original name: b, environment: var6
                    _fun73213: for (var _fun73213_ip = 0;;) switch (_fun73213_ip) {
                        case 0:
                            var0 = {};
                            var1 = _closure2_slot4;
                            if (var1) {
                                _fun73213_ip = 72;
                                continue _fun73213
                            }
                        case 12:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var1 = 40;
                            var3 = var3[var1];
                            var1 = undefined;
                            var5 = var4.bind(var1)(var3);
                            var4 = var5.withTiming;
                            var3 = _closure2_slot7;
                            var1 = var3.get;
                            var3 = var1.bind(var3)();
                            var1 = {};
                            var6 = 200;
                            var1.duration = var6;
                            var1 = var4.bind(var5)(var3, var1);
                            _fun73213_ip = 85;
                            continue _fun73213;
                        case 72:
                            var3 = _closure2_slot7;
                            var2 = var3.get;
                            var1 = var2.bind(var3)();
                        case 85:
                            var0.maxWidth = var1;
                            return var0;
                    }
                };
                var10 = {};
                var10.useReducedMotion = var17;
                var10.buttonWidth = var13;
                var14 = 40;
                var12 = var16[var14];
                var12 = var15.bind(var4)(var12);
                var12 = var12.withTiming;
                var10.withTiming = var12;
                var0.__closure = var10;
                var10 = 16499689496895.0;
                var0.__workletHash = var10;
                var10 = _closure1_slot21;
                var0.__initData = var10;
                var10 = var2.bind(var7)(var0);
                var0 = var16[var5];
                var2 = var15.bind(var4)(var0);
                var0 = var2.useSharedValue;
                var0 = var0.bind(var2)(var3);
                var _closure2_slot8 = var0;
                var2 = var16[var5];
                var7 = var15.bind(var4)(var2);
                var3 = var7.useAnimatedStyle;
                var2 = function() { // Original name: T, environment: var6
                    _fun73214: for (var _fun73214_ip = 0;;) switch (_fun73214_ip) {
                        case 0:
                            var0 = {
                                'opacity': null,
                                'color': 'white',
                                'fontSize': 14,
                                'marginLeft': 8,
                                'textAlignVertical': 'center'
                            };
                            var1 = _closure2_slot4;
                            if (var1) {
                                _fun73214_ip = 84;
                                continue _fun73214
                            }
                        case 24:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var1 = 40;
                            var3 = var3[var1];
                            var1 = undefined;
                            var5 = var4.bind(var1)(var3);
                            var4 = var5.withTiming;
                            var3 = _closure2_slot8;
                            var1 = var3.get;
                            var3 = var1.bind(var3)();
                            var1 = {};
                            var6 = 125;
                            var1.duration = var6;
                            var1 = var4.bind(var5)(var3, var1);
                            _fun73214_ip = 97;
                            continue _fun73214;
                        case 84:
                            var3 = _closure2_slot8;
                            var2 = var3.get;
                            var1 = var2.bind(var3)();
                        case 97:
                            var0.opacity = var1;
                            return var0;
                    }
                };
                var12 = {};
                var12.useReducedMotion = var17;
                var12.textOpacity = var0;
                var14 = var16[var14];
                var14 = var15.bind(var4)(var14);
                var14 = var14.withTiming;
                var12.withTiming = var14;
                var2.__closure = var12;
                var12 = 8698187840986.0;
                var2.__workletHash = var12;
                var12 = _closure1_slot22;
                var2.__initData = var12;
                var12 = var3.bind(var7)(var2);
                var7 = _closure1_slot5;
                var3 = var7.useCallback;
                var2 = new Array(2);
                var2[0] = var13;
                var2[1] = var0;
                var0 = function() { // Environment: var6
                    var3 = _closure2_slot6;
                    var0 = undefined;
                    var2 = true;
                    var2 = var3.bind(var0)(var2);
                    var4 = _closure2_slot7;
                    var3 = var4.set;
                    var2 = 32;
                    var2 = var3.bind(var4)(var2);
                    var3 = _closure2_slot8;
                    var2 = var3.set;
                    var1 = 0;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var0 = var3.bind(var7)(var0, var2);
                var _closure2_slot9 = var0;
                var7 = _closure1_slot5;
                var3 = var7.useEffect;
                var2 = new Array(2);
                var2[0] = var11;
                var2[1] = var0;
                var0 = function() { // Environment: var6
                    var1 = _closure2_slot9;
                    var0 = undefined;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var0 = var3.bind(var7)(var0, var2);
                var0 = null;
                if (!var1) {
                    _fun73211_ip = 774;
                    continue _fun73211
                }
            case 517:
                var3 = _closure1_slot17;
                var2 = _closure1_slot8;
                var1 = {};
                var6 = function() { // Original name: onPress, environment: var6
                    _fun73217: for (var _fun73217_ip = 0;;) switch (_fun73217_ip) {
                        case 0:
                            var1 = _closure2_slot5;
                            if (var1) {
                                _fun73217_ip = 84;
                                continue _fun73217
                            }
                        case 10:
                            var3 = _closure1_slot2;
                            var2 = _closure1_slot3;
                            var1 = 19;
                            var1 = var2[var1];
                            var2 = undefined;
                            var6 = var3.bind(var2)(var1);
                            var5 = var6.removeEmojiReactions;
                            var4 = _closure2_slot2;
                            var3 = _closure2_slot3;
                            var7 = _closure2_slot0;
                            var1 = _closure2_slot1;
                            var1 = var7[var1];
                            var1 = var1.emoji;
                            var1 = var5.bind(var6)(var4, var3, var1);
                            var1 = _closure2_slot9;
                            var1 = var1.bind(var2)();
                            _fun73217_ip = 154;
                            continue _fun73217;
                        case 84:
                            var3 = _closure2_slot6;
                            var2 = undefined;
                            var1 = false;
                            var1 = var3.bind(var2)(var1);
                            var3 = _closure2_slot7;
                            var2 = var3.set;
                            var5 = _closure1_slot7;
                            var4 = var5.get;
                            var1 = 'window';
                            var1 = var4.bind(var5)(var1);
                            var1 = var1.width;
                            var1 = var2.bind(var3)(var1);
                            var2 = _closure2_slot8;
                            var1 = var2.set;
                            var0 = 1;
                            var0 = var1.bind(var2)(var0);
                        case 154:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1.onPress = var6;
                var7 = _closure1_slot18;
                var14 = _closure1_slot1;
                var16 = _closure1_slot3;
                var5 = var16[var5];
                var5 = var14.bind(var4)(var5);
                var6 = var5.View;
                var5 = {};
                var11 = var8.removeAllButton;
                var8 = new Array(2);
                var8[0] = var11;
                var8[1] = var10;
                var5.style = var8;
                var11 = _closure1_slot17;
                var15 = _closure1_slot0;
                var8 = 41;
                var8 = var16[var8];
                var8 = var15.bind(var4)(var8);
                var10 = var8.TrashIcon;
                var8 = {};
                var13 = 14;
                var13 = var16[var13];
                var13 = var14.bind(var4)(var13);
                var13 = var13.unsafe_rawColors;
                var13 = var13.WHITE;
                var8.color = var13;
                var13 = 'sm';
                var8.size = var13;
                var10 = var11.bind(var4)(var10, var8);
                var8 = new Array(2);
                var8[0] = var10;
                var11 = _closure1_slot17;
                var10 = _closure1_slot19;
                var9 = {
                    'style': null,
                    'variant': 'text-sm/semibold',
                    'color': 'white'
                };
                var9.style = var12;
                var12 = 34;
                var13 = var16[var12];
                var13 = var15.bind(var4)(var13);
                var14 = var13.intl;
                var13 = var14.string;
                var12 = var16[var12];
                var12 = var15.bind(var4)(var12);
                var12 = var12.t;
                var12 = var12["zx/e4P"];
                var12 = var13.bind(var14)(var12);
                var9.children = var12;
                var9 = var11.bind(var4)(var10, var9);
                var8[1] = var9;
                var5.children = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 774:
                return var0;
        }
    };
    var _closure1_slot23 = var5;
    var5 = function(arg0) { // Original name: EmojiOptionsButton, environment: var1
        var3 = arg0;
        var2 = var3.reactions;
        var1 = var3.reactionSelectedIndex;
        var13 = var3.channelId;
        var _closure2_slot0 = var13;
        var12 = var3.messageId;
        var _closure2_slot1 = var12;
        var4 = _closure1_slot20;
        var3 = undefined;
        var4 = var4.bind(var3)();
        var6 = _closure1_slot0;
        var10 = _closure1_slot3;
        var7 = 15;
        var7 = var10[var7];
        var14 = var6.bind(var3)(var7);
        var11 = var14.useStateFromStores;
        var7 = _closure1_slot11;
        var9 = new Array(1);
        var9[0] = var7;
        var8 = new Array(1);
        var8[0] = var13;
        var7 = function() { // Environment: var0
            var2 = _closure1_slot11;
            var1 = var2.getChannel;
            var0 = _closure2_slot0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var8 = var11.bind(var14)(var9, var7, var8);
        var9 = _closure1_slot1;
        var7 = 39;
        var7 = var10[var7];
        var7 = var9.bind(var3)(var7);
        var8 = var7.bind(var3)(var8);
        var _closure2_slot2 = var8;
        var11 = var2[var1];
        var _closure2_slot3 = var11;
        var7 = _closure1_slot5;
        var2 = var7.useCallback;
        var1 = new Array(4);
        var1[0] = var13;
        var1[1] = var12;
        var1[2] = var11;
        var1[3] = var8;
        var0 = function() { // Environment: var0
            var4 = _closure1_slot1;
            var1 = _closure1_slot3;
            var0 = 42;
            var3 = var1[var0];
            var0 = undefined;
            var6 = var4.bind(var0)(var3);
            var5 = var6.openLazy;
            var3 = _closure1_slot0;
            var2 = 44;
            var2 = var1[var2];
            var3 = var3.bind(var0)(var2);
            var2 = 43;
            var2 = var1[var2];
            var1 = var1.paths;
            var10 = var3.bind(var0)(var2, var1);
            var3 = {};
            var2 = _closure2_slot0;
            var3.channelId = var2;
            var2 = _closure2_slot1;
            var3.messageId = var2;
            var2 = _closure2_slot3;
            var3.reaction = var2;
            var1 = _closure2_slot2;
            var3.canRemoveReactions = var1;
            var9 = 'ReactionEmojiOptionsActionSheet';
            var7 = 'stack';
            var11 = var6;
            var8 = var3;
            var1 = var11[var5](var10, var9, var8, var7, var6);
            return var0;
        };
        var7 = var2.bind(var7)(var0, var1);
        var2 = _closure1_slot18;
        var1 = _closure1_slot8;
        var0 = {};
        var0.onPress = var7;
        var4 = var4.emojiOptionsButton;
        var0.style = var4;
        var8 = _closure1_slot17;
        var4 = 12;
        var4 = var10[var4];
        var4 = var6.bind(var3)(var4);
        var7 = var4.Text;
        var4 = {
            'variant': 'text-xs/semibold',
            'color': 'text-subtle'
        };
        var11 = 34;
        var12 = var10[var11];
        var12 = var6.bind(var3)(var12);
        var13 = var12.intl;
        var12 = var13.string;
        var11 = var10[var11];
        var11 = var6.bind(var3)(var11);
        var11 = var11.t;
        var11 = var11.pCaYID;
        var11 = var12.bind(var13)(var11);
        var4.children = var11;
        var7 = var8.bind(var3)(var7, var4);
        var4 = new Array(2);
        var4[0] = var7;
        var7 = _closure1_slot17;
        var5 = 45;
        var5 = var10[var5];
        var5 = var6.bind(var3)(var5);
        var6 = var5.ChevronSmallRightIcon;
        var5 = {};
        var8 = 14;
        var8 = var10[var8];
        var8 = var9.bind(var3)(var8);
        var8 = var8.colors;
        var8 = var8.ICON_SUBTLE;
        var5.color = var8;
        var8 = 'xs';
        var5.size = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot24 = var5;
    var5 = function(arg0) { // Original name: ReactionTabs, environment: var1
        _fun73221: for (var _fun73221_ip = 0;;) switch (_fun73221_ip) {
            case 0:
                var12 = arg0;
                var0 = _closure1_slot20;
                var3 = undefined;
                var19 = var0.bind(var3)();
                var17 = var12.reactions;
                var14 = var12.reactionSelectedIndex;
                var _closure2_slot0 = var14;
                var0 = var12.setReactionSelectedIndex;
                var _closure2_slot1 = var0;
                var6 = _closure1_slot1;
                var18 = _closure1_slot3;
                var0 = 46;
                var0 = var18[var0];
                var4 = var6.bind(var3)(var0);
                var2 = var4.useExperiment;
                var1 = {};
                var0 = 'ReactionTabs';
                var1.location = var0;
                var0 = {};
                var5 = false;
                var0.autoTrackExposure = var5;
                var0 = var2.bind(var4)(var1, var0);
                var10 = var0.tidaWebformEnabled;
                var2 = _closure1_slot18;
                var1 = _closure1_slot9;
                var0 = {};
                var4 = var19.reactionTab;
                var0.style = var4;
                var7 = _closure1_slot17;
                var4 = 47;
                var4 = var18[var4];
                var5 = var6.bind(var3)(var4);
                var4 = {};
                var13 = var17.map;
                var11 = function(arg0, arg1) { // Environment: var8
                    _fun73222: for (var _fun73222_ip = 0;;) switch (_fun73222_ip) {
                        case 0:
                            var0 = arg0;
                            var4 = _closure1_slot17;
                            var3 = _closure1_slot32;
                            var2 = {};
                            var2.reaction = var0;
                            var1 = arg1;
                            var2.index = var1;
                            var1 = _closure2_slot0;
                            var2.reactionSelectedIndex = var1;
                            var1 = var0.emoji;
                            var1 = var1.id;
                            var5 = null;
                            var5 = var5 != var1;
                            var7 = '';
                            var6 = var7;
                            if (!var5) {
                                _fun73222_ip = 70;
                                continue _fun73222
                            }
                        case 67:
                            var6 = var1;
                        case 70:
                            var0 = var0.emoji;
                            var5 = var0.name;
                            var0 = global;
                            var0 = var0.HermesInternal;
                            var1 = var0.concat;
                            var0 = ':';
                            var1 = var1.bind(var7)(var6, var0, var5);
                            var0 = undefined;
                            var0 = var4.bind(var0)(var3, var2, var1);
                            return var0;
                    }
                };
                var11 = var13.bind(var17)(var11);
                var4.tabs = var11;
                var11 = var19.tab;
                var4.tabStyle = var11;
                var11 = var19.tabActive;
                var4.tabStyleActive = var11;
                var11 = var19.tabSelected;
                var4.tabStyleSelected = var11;
                var4.tabIndexSelected = var14;
                var8 = function(arg0) { // Original name: onSelect, environment: var8
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var0 = 48;
                    var2 = var5[var0];
                    var0 = undefined;
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.triggerHapticFeedback;
                    var4 = _closure1_slot1;
                    var1 = 49;
                    var1 = var5[var1];
                    var1 = var4.bind(var0)(var1);
                    var1 = var1.IMPACT_LIGHT;
                    var1 = var2.bind(var3)(var1);
                    var2 = _closure2_slot1;
                    var1 = arg0;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var4.onSelect = var8;
                var16 = _closure1_slot0;
                var15 = 16;
                var8 = var18[var15];
                var8 = var16.bind(var3)(var8);
                var8 = var8.MAX_REACTIONS;
                var4.initialNumTabsToRender = var8;
                var5 = var7.bind(var3)(var5, var4);
                var4 = new Array(3);
                var4[0] = var5;
                var7 = _closure1_slot17;
                var5 = 32;
                var5 = var18[var5];
                var6 = var6.bind(var3)(var5);
                var5 = {};
                var8 = true;
                var5.outer = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var7 = _closure1_slot18;
                var6 = _closure1_slot9;
                var5 = {};
                var8 = var19.removeButtonContainer;
                var5.style = var8;
                var13 = _closure1_slot17;
                var8 = 12;
                var8 = var18[var8];
                var8 = var16.bind(var3)(var8);
                var11 = var8.Text;
                var8 = {
                    'style': null,
                    'variant': 'eyebrow',
                    'color': 'text-default'
                };
                var19 = var19.emojiTextIdentifier;
                var8.style = var19;
                var15 = var18[var15];
                var16 = var16.bind(var3)(var15);
                var15 = var16.getReactionEmojiName;
                var14 = var17[var14];
                var14 = var14.emoji;
                var14 = var15.bind(var16)(var14);
                var8.children = var14;
                var11 = var13.bind(var3)(var11, var8);
                var8 = new Array(2);
                var8[0] = var11;
                var11 = _closure1_slot17;
                if (var10) {
                    _fun73221_ip = 417;
                    continue _fun73221
                }
            case 411:
                var10 = _closure1_slot23;
                _fun73221_ip = 421;
                continue _fun73221;
            case 417:
                var10 = _closure1_slot24;
            case 421:
                var9 = {};
                var21 = var9;
                var20 = var12;
                var12 = copyDataProperties(var21, var20);
                var9 = var11.bind(var3)(var10, var9);
                var8[1] = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot25 = var5;
    var5 = 55;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var10 = var5.Storage;
    var9 = var10.get;
    var8 = 'MessageReactionsContent_SwipableBounced';
    var5 = false;
    var5 = var9.bind(var10)(var8, var5);
    var _closure1_slot26 = var5;
    var5 = 61;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/reactions/native/MessageReactionsContent.tsx';
    var5 = var6.bind(var7)(var5);
    var2.useReactors = var4;
    var2.useReactorsOnScrollNative = var3;
    var3 = function() { // Environment: var1
        var0 = _closure1_slot20;
        var3 = undefined;
        var9 = var0.bind(var3)();
        var8 = _closure1_slot1;
        var14 = _closure1_slot3;
        var0 = 50;
        var0 = var14[var0];
        var0 = var8.bind(var3)(var0);
        var4 = var0.bind(var3)();
        var13 = _closure1_slot0;
        var0 = 51;
        var0 = var14[var0];
        var1 = var13.bind(var3)(var0);
        var0 = var1.useNoResultsSource;
        var10 = var0.bind(var1)();
        var2 = _closure1_slot17;
        var0 = 52;
        var0 = var14[var0];
        var0 = var13.bind(var3)(var0);
        var1 = var0.BottomSheet;
        var0 = {};
        var5 = true;
        var0.scrollable = var5;
        var5 = var4.bottom;
        var4 = 338;
        var4 = var4 + var5;
        var0.startHeight = var4;
        var6 = _closure1_slot17;
        var4 = 53;
        var4 = var14[var4];
        var4 = var13.bind(var3)(var4);
        var5 = var4.BottomSheetView;
        var4 = {};
        var9 = var9.containerEmpty;
        var4.style = var9;
        var9 = _closure1_slot17;
        var7 = 54;
        var7 = var14[var7];
        var8 = var8.bind(var3)(var7);
        var7 = {};
        var7.source = var10;
        var10 = 34;
        var11 = var14[var10];
        var11 = var13.bind(var3)(var11);
        var15 = var11.intl;
        var12 = var15.string;
        var11 = var14[var10];
        var11 = var13.bind(var3)(var11);
        var11 = var11.t;
        var11 = var11.HmPOrp;
        var11 = var12.bind(var15)(var11);
        var7.title = var11;
        var11 = var14[var10];
        var11 = var13.bind(var3)(var11);
        var12 = var11.intl;
        var11 = var12.string;
        var10 = var14[var10];
        var10 = var13.bind(var3)(var10);
        var10 = var10.t;
        var10 = var10["pTJ5J/"];
        var10 = var11.bind(var12)(var10);
        var7.body = var10;
        var7 = var9.bind(var3)(var8, var7);
        var4.children = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.MessageReactionsEmpty = var3;
    var1 = function(arg0) { // Environment: var1
        _fun73225: for (var _fun73225_ip = 0;;) switch (_fun73225_ip) {
            case 0:
                var2 = arg0;
                var14 = var2.channelId;
                var _closure2_slot0 = var14;
                var15 = var2.messageId;
                var5 = var2.emoji;
                var18 = var2.reactions;
                var0 = var2.isSelectedBurst;
                var4 = var2.disableManage;
                var3 = undefined;
                if (!(var4 === var3)) {
                    _fun73225_ip = 53;
                    continue _fun73225
                }
            case 51:
                var4 = false;
            case 53:
                var6 = var2.disableTabs;
                if (!(var6 === var3)) {
                    _fun73225_ip = 67;
                    continue _fun73225
                }
            case 65:
                var6 = false;
            case 67:
                var2 = _closure1_slot20;
                var7 = var2.bind(var3)();
                var2 = {};
                var2.reactions = var18;
                var2.emoji = var5;
                var2.isSelectedBurst = var0;
                var0 = function(arg0) { // Original name: useReactionSelected, environment: var1
                    _fun73226: for (var _fun73226_ip = 0;;) switch (_fun73226_ip) {
                        case 0:
                            var0 = arg0;
                            var3 = var0.reactions;
                            var _closure3_slot0 = var3;
                            var2 = var0.emoji;
                            var _closure3_slot1 = var2;
                            var0 = var0.isSelectedBurst;
                            var4 = undefined;
                            if (!(var0 === var4)) {
                                _fun73226_ip = 39;
                                continue _fun73226
                            }
                        case 37:
                            var0 = false;
                        case 39:
                            var _closure3_slot2 = var0;
                            var5 = _closure1_slot5;
                            var2 = var5.useState;
                            var1 = function() { // Environment: var1
                                _fun73227: for (var _fun73227_ip = 0;;) switch (_fun73227_ip) {
                                    case 0:
                                        var2 = _closure3_slot1;
                                        var1 = null;
                                        if (!(var1 != var2)) {
                                            _fun73227_ip = 51;
                                            continue _fun73227
                                        }
                                    case 13:
                                        var2 = _closure3_slot0;
                                        var1 = var2.findIndex;
                                        var0 = function(arg0) { // Environment: var0
                                            _fun73228: for (var _fun73228_ip = 0;;) switch (_fun73228_ip) {
                                                case 0:
                                                    var1 = arg0;
                                                    var3 = _closure1_slot0;
                                                    var2 = _closure1_slot3;
                                                    var0 = 16;
                                                    var2 = var2[var0];
                                                    var0 = undefined;
                                                    var5 = var3.bind(var0)(var2);
                                                    var4 = var5.emojiEquals;
                                                    var3 = var1.emoji;
                                                    var2 = _closure3_slot1;
                                                    var2 = var4.bind(var5)(var3, var2);
                                                    var4 = var1.burst_count;
                                                    var1 = null;
                                                    var5 = var1 != var4;
                                                    var3 = 0;
                                                    var1 = 0;
                                                    if (!var5) {
                                                        _fun73228_ip = 75;
                                                        continue _fun73228
                                                    }
                                                case 72:
                                                    var1 = var4;
                                                case 75:
                                                    var1 = var1 > var3;
                                                    var0 = _closure3_slot2;
                                                    if (var0) {
                                                        _fun73228_ip = 97;
                                                        continue _fun73228
                                                    }
                                                case 86:
                                                    var0 = !var1;
                                                    if (var1) {
                                                        _fun73228_ip = 95;
                                                        continue _fun73228
                                                    }
                                                case 92:
                                                    var0 = var2;
                                                case 95:
                                                    _fun73228_ip = 106;
                                                    continue _fun73228;
                                                case 97:
                                                    if (!var1) {
                                                        _fun73228_ip = 103;
                                                        continue _fun73228
                                                    }
                                                case 100:
                                                    var1 = var2;
                                                case 103:
                                                    var0 = var1;
                                                case 106:
                                                    return var0;
                                            }
                                        };
                                        var1 = var1.bind(var2)(var0);
                                        var0 = 0;
                                        var2 = var1 >= var0;
                                        if (!var2) {
                                            _fun73227_ip = 49;
                                            continue _fun73227
                                        }
                                    case 46:
                                        var0 = var1;
                                    case 49:
                                        return var0;
                                    case 51:
                                        var0 = 0;
                                        return var0;
                                }
                            };
                            var2 = var2.bind(var5)(var1);
                            var1 = _closure1_slot4;
                            var0 = 2;
                            var0 = var1.bind(var4)(var2, var0);
                            var1 = 0;
                            var5 = var0[var1];
                            var6 = 1;
                            var1 = var0[var6];
                            var0 = global;
                            var4 = var0.Math;
                            var2 = var4.min;
                            var0 = var3.length;
                            var0 = var0 - var6;
                            var2 = var2.bind(var4)(var5, var0);
                            var0 = {};
                            var3 = var3[var2];
                            var0.reactionSelected = var3;
                            var0.reactionSelectedIndex = var2;
                            var0.setReactionSelectedIndex = var1;
                            return var0;
                    }
                };
                var0 = var0.bind(var3)(var2);
                var22 = var0.reactionSelected;
                var17 = var0.reactionSelectedIndex;
                var16 = var0.setReactionSelectedIndex;
                var0 = var22.me_vote;
                var5 = null;
                if (!(var5 == var0)) {
                    _fun73225_ip = 217;
                    continue _fun73225
                }
            case 137:
                var2 = var22.burst_count;
                var0 = 0;
                if (!(!(var2 > var0))) {
                    _fun73225_ip = 183;
                    continue _fun73225
                }
            case 149:
                var2 = _closure1_slot0;
                var8 = _closure1_slot3;
                var0 = 18;
                var0 = var8[var0];
                var0 = var2.bind(var3)(var0);
                var0 = var0.ReactionTypes;
                var21 = var0.NORMAL;
                _fun73225_ip = 215;
                continue _fun73225;
            case 183:
                var2 = _closure1_slot0;
                var8 = _closure1_slot3;
                var0 = 18;
                var0 = var8[var0];
                var0 = var2.bind(var3)(var0);
                var0 = var0.ReactionTypes;
                var21 = var0.BURST;
            case 215:
                _fun73225_ip = 249;
                continue _fun73225;
            case 217:
                var2 = _closure1_slot0;
                var8 = _closure1_slot3;
                var0 = 18;
                var0 = var8[var0];
                var0 = var2.bind(var3)(var0);
                var0 = var0.ReactionTypes;
                var21 = var0.VOTE;
            case 249:
                var2 = _closure1_slot27;
                var0 = {};
                var0.channelId = var14;
                var0.messageId = var15;
                var0.reaction = var22;
                var0.reactionType = var21;
                var0 = var2.bind(var3)(var0);
                var10 = var0.reactors;
                var19 = var0.reactorsHasMore;
                var2 = _closure1_slot0;
                var9 = _closure1_slot3;
                var0 = 15;
                var0 = var9[var0];
                var20 = var2.bind(var3)(var0);
                var13 = var20.useStateFromStores;
                var0 = _closure1_slot11;
                var12 = new Array(1);
                var12[0] = var0;
                var8 = new Array(1);
                var8[0] = var14;
                var0 = function() { // Environment: var1
                    var2 = _closure1_slot11;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var8 = var13.bind(var20)(var12, var0, var8);
                var0 = 56;
                var0 = var9[var0];
                var2 = var2.bind(var3)(var0);
                var0 = var2.useIsActiveChannelOrUnarchivableThread;
                var2 = var0.bind(var2)(var8);
                var8 = _closure1_slot1;
                var0 = 50;
                var0 = var9[var0];
                var0 = var8.bind(var3)(var0);
                var13 = var0.bind(var3)();
                var0 = function(arg0) { // Original name: useCanManageMessages, environment: var1
                    var5 = arg0;
                    var _closure3_slot0 = var5;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var2 = 15;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.useStateFromStores;
                    var1 = _closure1_slot14;
                    var2 = new Array(1);
                    var2[0] = var1;
                    var1 = new Array(1);
                    var1[0] = var5;
                    var0 = function() { // Environment: var0
                        var3 = _closure1_slot14;
                        var2 = var3.canWithPartialContext;
                        var0 = _closure1_slot16;
                        var1 = var0.MANAGE_MESSAGES;
                        var0 = {};
                        var4 = _closure3_slot0;
                        var0.channelId = var4;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                    };
                    var0 = var3.bind(var4)(var2, var0, var1);
                    return var0;
                };
                var0 = var0.bind(var3)(var14);
                if (!var0) {
                    _fun73225_ip = 410;
                    continue _fun73225
                }
            case 407:
                var0 = !var4;
            case 410:
                if (!var0) {
                    _fun73225_ip = 416;
                    continue _fun73225
                }
            case 413:
                var0 = var2;
            case 416:
                var2 = var22.emoji;
                var8 = var2.id;
                if (!(var5 == var8)) {
                    _fun73225_ip = 442;
                    continue _fun73225
                }
            case 431:
                var2 = var22.emoji;
                var8 = var2.name;
            case 442:
                var9 = {};
                var2 = _closure1_slot0;
                var4 = _closure1_slot3;
                var12 = 34;
                var20 = var4[var12];
                var20 = var2.bind(var3)(var20);
                var23 = var20.intl;
                var20 = var23.string;
                var12 = var4[var12];
                var12 = var2.bind(var3)(var12);
                var12 = var12.t;
                var12 = var12.gHp0C4;
                var12 = var20.bind(var23)(var12);
                var9.accessibilityLabel = var12;
                var12 = 48;
                var9.footerSize = var12;
                var13 = var13.bottom;
                var9.insetBottom = var13;
                var20 = _closure1_slot28;
                var13 = {};
                var13.channelId = var14;
                var13.messageId = var15;
                var13.reactionSelected = var22;
                var13.reactors = var10;
                var13.reactorsHasMore = var19;
                var13.reactionType = var21;
                var13 = var20.bind(var3)(var13);
                var9.onScroll = var13;
                var13 = _closure1_slot29;
                var13 = var13.bind(var3)(var10, var19);
                var9.renderFooter = var13;
                var13 = _closure1_slot30;
                var29 = undefined;
                var28 = var10;
                var27 = var15;
                var26 = var14;
                var25 = var22;
                var24 = var0;
                var13 = var29[var13](var28, var27, var26, var25, var24, var23);
                var9.renderItem = var13;
                var13 = _closure1_slot31;
                var28 = var14;
                var27 = var15;
                var26 = var22;
                var25 = var10;
                var13 = var29[var13](var28, var27, var26, var25, var24);
                var9.renderQuickActions = var13;
                var9.itemSize = var12;
                var12 = var10.length;
                var10 = new Array(1);
                var10[0] = var12;
                var9.sections = var10;
                var7 = var7.container;
                var9.style = var7;
                var12 = _closure1_slot5;
                var10 = var12.useCallback;
                var7 = function() { // Environment: var1
                    var4 = true;
                    _closure1_slot26 = var4;
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot3;
                    var0 = 55;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var3 = var1.Storage;
                    var2 = var3.set;
                    var1 = 'MessageReactionsContent_SwipableBounced';
                    var1 = var2.bind(var3)(var1, var4);
                    return var0;
                };
                var1 = new Array(0);
                var10 = var10.bind(var12)(var7, var1);
                var1 = 29;
                var1 = var4[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.isIOS;
                var4 = var1.bind(var2)();
                if (!var4) {
                    _fun73225_ip = 721;
                    continue _fun73225
                }
            case 718:
                var4 = var0;
            case 721:
                var2 = _closure1_slot17;
                var13 = _closure1_slot0;
                var19 = _closure1_slot3;
                var0 = 52;
                var0 = var19[var0];
                var0 = var13.bind(var3)(var0);
                var1 = var0.BottomSheet;
                var0 = {};
                var12 = true;
                var0.scrollable = var12;
                var7 = 57;
                var7 = var19[var7];
                var7 = var13.bind(var3)(var7);
                var7 = var7.BACKDROP_OPACITY;
                var0.backdropOpacity = var7;
                var7 = 18;
                var7 = var19[var7];
                var7 = var13.bind(var3)(var7);
                var7 = var7.ReactionTypes;
                var13 = var7.BURST;
                var7 = null;
                if (!(var21 === var13)) {
                    _fun73225_ip = 869;
                    continue _fun73225
                }
            case 813:
                var20 = _closure1_slot17;
                var19 = _closure1_slot1;
                var23 = _closure1_slot3;
                var13 = 58;
                var13 = var23[var13];
                var19 = var19.bind(var3)(var13);
                var13 = {};
                var22 = var22.emoji;
                var13.emoji = var22;
                var13.reactionType = var21;
                var13.messageId = var15;
                var13.channelId = var14;
                var7 = var20.bind(var3)(var19, var13);
            case 869:
                var0.backdropChildren = var7;
                var5 = null;
                if (!(var12 !== var6)) {
                    _fun73225_ip = 919;
                    continue _fun73225
                }
            case 880:
                var13 = _closure1_slot17;
                var7 = _closure1_slot25;
                var6 = {};
                var6.reactions = var18;
                var6.reactionSelectedIndex = var17;
                var6.setReactionSelectedIndex = var16;
                var6.messageId = var15;
                var6.channelId = var14;
                var5 = var13.bind(var3)(var7, var6);
            case 919:
                var0.header = var5;
                var7 = _closure1_slot17;
                var6 = _closure1_slot1;
                var13 = _closure1_slot3;
                if (var4) {
                    _fun73225_ip = 976;
                    continue _fun73225
                }
            case 938:
                var4 = 60;
                var4 = var13[var4];
                var5 = var6.bind(var3)(var4);
                var4 = {};
                var4.inActionSheet = var12;
                var28 = var4;
                var27 = var9;
                var14 = copyDataProperties(var28, var27);
                var4 = var7.bind(var3)(var5, var4, var8);
                _fun73225_ip = 1029;
                continue _fun73225;
            case 976:
                var5 = 59;
                var5 = var13[var5];
                var6 = var6.bind(var3)(var5);
                var5 = {};
                var5.inActionSheet = var12;
                var11 = _closure1_slot26;
                var11 = !var11;
                var5.bounceFirstRowOnMount = var11;
                var5.onBounceSwipable = var10;
                var28 = var5;
                var27 = var9;
                var9 = copyDataProperties(var28, var27);
                var4 = var7.bind(var3)(var6, var5, var8);
            case 1029:
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.MessageReactionsContent = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1298, 1372, 1672, 6510, 3050, 660, 4888, 33, 3677, 3895, 1297, 671, 566, 3061, 644, 6512, 6511, 4884, 22, 5684, 3915, 3195, 4847, 5409, 1417, 8158, 478, 4688, 7310, 5341, 9175, 1234, 9176, 3199, 1348, 5727, 9177, 4050, 3228, 3237, 9178, 1307, 7700, 8358, 9180, 3238, 3239, 1568, 7319, 4887, 4889, 8313, 587, 6655, 6514, 6554, 9181, 6414, 2]);