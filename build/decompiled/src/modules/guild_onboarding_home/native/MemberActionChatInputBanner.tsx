// modules/guild_onboarding_home/native/MemberActionChatInputBanner.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var0 = function arg0() {
        _fun89677: for (var _fun89677_ip = 0;;) switch (_fun89677_ip) {
            case 0:
                var1 = arg0;
                var1 = var1.action;
                var _closure2_slot0 = var1;
                var1 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 12;
                var2 = var6[var2];
                var3 = undefined;
                var7 = var1.bind(var3)(var2);
                var4 = var7.useStateFromStores;
                var8 = _closure1_slot8;
                var2 = new Array(1);
                var2[0] = var8;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot8;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot0;
                    var0 = var0.channelId;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var4 = var4.bind(var7)(var2, var0);
                var2 = _closure1_slot1;
                var0 = 13;
                var0 = var6[var0];
                var2 = var2.bind(var3)(var0);
                var0 = true;
                var9 = var2.bind(var3)(var4, var0);
                var2 = _closure1_slot12;
                var0 = 14;
                var0 = var6[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.Text;
                var0 = null;
                if (!(var0 != var4)) {
                    _fun89677_ip = 206;
                    continue _fun89677
                }
            case 120:
                var0 = {
                    'variant': 'text-xxs/normal',
                    'color': 'text-default'
                };
                var6 = _closure1_slot0;
                var10 = _closure1_slot2;
                var4 = 15;
                var7 = var10[var4];
                var7 = var6.bind(var3)(var7);
                var8 = var7.intl;
                var7 = var8.format;
                var4 = var10[var4];
                var4 = var6.bind(var3)(var4);
                var4 = var4.t;
                var6 = var4.MkzlDL;
                var4 = {};
                var4.channelName = var9;
                var4 = var7.bind(var8)(var6, var4);
                var0.children = var4;
                _fun89677_ip = 334;
                continue _fun89677;
            case 206:
                var4 = {
                    'variant': 'text-xxs/normal',
                    'color': 'text-default'
                };
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var9 = 15;
                var5 = var13[var9];
                var5 = var12.bind(var3)(var5);
                var8 = var5.intl;
                var7 = var8.format;
                var5 = var13[var9];
                var5 = var12.bind(var3)(var5);
                var5 = var5.t;
                var6 = var5.MkzlDL;
                var5 = {};
                var10 = var13[var9];
                var10 = var12.bind(var3)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var9 = var13[var9];
                var9 = var12.bind(var3)(var9);
                var9 = var9.t;
                var9 = var9.J90oLW;
                var9 = var10.bind(var11)(var9);
                var5.channelName = var9;
                var5 = var7.bind(var8)(var6, var5);
                var4.children = var5;
                var0 = var4;
            case 334:
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot19 = var0;
    var0 = function arg0() {
        _fun89679: for (var _fun89679_ip = 0;;) switch (_fun89679_ip) {
            case 0:
                var1 = arg0;
                var1 = var1.emoji;
                var4 = undefined;
                var _closure2_slot0 = var4;
                var2 = _closure1_slot15;
                var5 = var2.bind(var4)();
                var6 = _closure1_slot12;
                var3 = _closure1_slot5;
                var2 = {};
                var7 = var5.emojiPlaceholder;
                var2.style = var7;
                var10 = _closure1_slot12;
                var12 = _closure1_slot1;
                var13 = _closure1_slot2;
                var11 = 16;
                var7 = var13[var11];
                var8 = var12.bind(var4)(var7);
                var7 = {};
                var11 = var13[var11];
                var11 = var12.bind(var4)(var11);
                var11 = var11.Sizes;
                var11 = var11.REFRESH_SMALL_16;
                var7.size = var11;
                var11 = 17;
                var11 = var13[var11];
                var11 = var12.bind(var4)(var11);
                var7.source = var11;
                var7 = var10.bind(var4)(var8, var7);
                var2.children = var7;
                var3 = var6.bind(var4)(var3, var2);
                var2 = null;
                var6 = var2 == var1;
                var11 = undefined;
                if (var6) {
                    _fun89679_ip = 147;
                    continue _fun89679
                }
            case 142:
                var11 = var1.id;
            case 147:
                _closure2_slot0 = var11;
                var7 = var2 == var1;
                var6 = undefined;
                if (var7) {
                    _fun89679_ip = 165;
                    continue _fun89679
                }
            case 160:
                var6 = var1.name;
            case 165:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 12;
                var1 = var8[var1];
                var10 = var7.bind(var4)(var1);
                var8 = var10.useStateFromStores;
                var1 = _closure1_slot7;
                var7 = new Array(1);
                var7[0] = var1;
                var1 = new Array(1);
                var1[0] = var11;
                var0 = function() { // Environment: var0
                    _fun89680: for (var _fun89680_ip = 0;;) switch (_fun89680_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var0 = null;
                            var2 = var0 != var2;
                            if (!var2) {
                                _fun89680_ip = 38;
                                continue _fun89680
                            }
                        case 16:
                            var3 = _closure1_slot7;
                            var2 = var3.getCustomEmojiById;
                            var1 = _closure2_slot0;
                            var0 = var2.bind(var3)(var1);
                        case 38:
                            return var0;
                    }
                };
                var10 = var8.bind(var10)(var7, var0, var1);
                if (!(var2 == var10)) {
                    _fun89679_ip = 365;
                    continue _fun89679
                }
            case 231:
                var0 = var3;
                if (!(var2 != var6)) {
                    _fun89679_ip = 363;
                    continue _fun89679
                }
            case 241:
                var11 = _closure1_slot1;
                var12 = _closure1_slot2;
                var1 = 20;
                var7 = var12[var1];
                var8 = var11.bind(var4)(var7);
                var7 = var8.getByName;
                var1 = var12[var1];
                var12 = var11.bind(var4)(var1);
                var11 = var12.convertSurrogateToName;
                var1 = false;
                var1 = var11.bind(var12)(var6, var1);
                var1 = var7.bind(var8)(var1);
                var0 = var3;
                if (!(var2 != var1)) {
                    _fun89679_ip = 363;
                    continue _fun89679
                }
            case 302:
                var3 = _closure1_slot12;
                var2 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 14;
                var1 = var7[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.Text;
                var1 = {};
                var7 = var5.textEmoji;
                var1.style = var7;
                var7 = 'heading-lg/normal';
                var1.variant = var7;
                var1.children = var6;
                var0 = var3.bind(var4)(var2, var1);
            case 363:
                _fun89679_ip = 478;
                continue _fun89679;
            case 365:
                var3 = _closure1_slot12;
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var1 = 18;
                var1 = var8[var1];
                var2 = var7.bind(var4)(var1);
                var1 = {};
                var5 = var5.emoji;
                var1.style = var5;
                var5 = {};
                var6 = 19;
                var6 = var8[var6];
                var8 = var7.bind(var4)(var6);
                var7 = var8.getEmojiURL;
                var6 = {};
                var11 = var10.id;
                var6.id = var11;
                var10 = var10.animated;
                var6.animated = var10;
                var9 = _closure1_slot11;
                var6.size = var9;
                var6 = var7.bind(var8)(var6);
                var5.uri = var6;
                var1.source = var5;
                var5 = 'contain';
                var1.resizeMode = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 478:
                return var0;
        }
    };
    var _closure1_slot20 = var0;
    var0 = function arg0() {
        _fun89681: for (var _fun89681_ip = 0;;) switch (_fun89681_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.channel;
                var _closure2_slot0 = var0;
                var4 = undefined;
                var _closure2_slot4 = var4;
                var _closure2_slot5 = var4;
                var _closure2_slot6 = var4;
                var _closure2_slot7 = var4;
                var _closure2_slot8 = var4;
                var _closure2_slot9 = var4;
                var _closure2_slot10 = var4;
                var _closure2_slot11 = var4;
                var _closure2_slot12 = var4;
                var2 = _closure1_slot15;
                var15 = var2.bind(var4)();
                var _closure2_slot1 = var15;
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 21;
                var2 = var6[var3];
                var8 = var5.bind(var4)(var2);
                var7 = var8.useMemberActionsForChannel;
                var2 = var0.guild_id;
                var7 = var7.bind(var8)(var2, var0);
                var2 = var7.channelAction;
                var _closure2_slot2 = var2;
                var8 = var7.completed;
                var _closure2_slot3 = var8;
                var3 = var6[var3];
                var7 = var5.bind(var4)(var3);
                var6 = var7.useNextMemberAction;
                var5 = var0.guild_id;
                var0 = null;
                var9 = var0 == var2;
                var3 = undefined;
                if (var9) {
                    _fun89681_ip = 160;
                    continue _fun89681
                }
            case 155:
                var3 = var2.channelId;
            case 160:
                var7 = var6.bind(var7)(var5, var3);
                _closure2_slot4 = var7;
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 12;
                var3 = var6[var3];
                var9 = var5.bind(var4)(var3);
                var6 = var9.useStateFromStores;
                var3 = _closure1_slot6;
                var5 = new Array(1);
                var5[0] = var3;
                var3 = function() { // Environment: var1
                    var0 = _closure1_slot6;
                    var0 = var0.useReducedMotion;
                    return var0;
                };
                var22 = var6.bind(var9)(var5, var3);
                _closure2_slot5 = var22;
                var3 = var0 == var2;
                var6 = undefined;
                if (var3) {
                    _fun89681_ip = 239;
                    continue _fun89681
                }
            case 233:
                var6 = var2.actionType;
            case 239:
                var16 = _closure1_slot0;
                var13 = _closure1_slot2;
                var3 = 22;
                var5 = var13[var3];
                var5 = var16.bind(var4)(var5);
                var5 = var5.NewMemberActionTypes;
                var5 = var5.VIEW;
                var9 = var6 === var5;
                _closure2_slot6 = var9;
                var10 = _closure1_slot4;
                var6 = var10.useState;
                var5 = var13[var3];
                var5 = var16.bind(var4)(var5);
                var5 = var5.CHANNEL_ACTION_BANNER_HEIGHT;
                var6 = var6.bind(var10)(var5);
                var5 = _closure1_slot3;
                var17 = 2;
                var5 = var5.bind(var4)(var6, var17);
                var12 = 0;
                var10 = var5[var12];
                _closure2_slot7 = var10;
                var14 = 1;
                var5 = var5[var14];
                _closure2_slot8 = var5;
                var18 = _closure1_slot4;
                var6 = var18.useState;
                var3 = var13[var3];
                var3 = var16.bind(var4)(var3);
                var3 = var3.CHANNEL_ACTION_BANNER_HEIGHT;
                var6 = var6.bind(var18)(var3);
                var3 = _closure1_slot3;
                var3 = var3.bind(var4)(var6, var17);
                var6 = var3[var12];
                _closure2_slot9 = var6;
                var3 = var3[var14];
                _closure2_slot10 = var3;
                var17 = 23;
                var14 = var13[var17];
                var18 = var16.bind(var4)(var14);
                var14 = var18.useSharedValue;
                var14 = var14.bind(var18)(var12);
                _closure2_slot11 = var14;
                var13 = var13[var17];
                var16 = var16.bind(var4)(var13);
                var13 = var16.useSharedValue;
                if (!var8) {
                    _fun89681_ip = 445;
                    continue _fun89681
                }
            case 442:
                var12 = var6;
            case 445:
                var21 = var13.bind(var16)(var12);
                _closure2_slot12 = var21;
                var16 = _closure1_slot4;
                var13 = var16.useEffect;
                var12 = new Array(4);
                var12[0] = var14;
                var12[1] = var8;
                var12[2] = var9;
                var12[3] = var10;
                var10 = function() { // Environment: var1
                    _fun89683: for (var _fun89683_ip = 0;;) switch (_fun89683_ip) {
                        case 0:
                            var1 = _closure2_slot3;
                            if (var1) {
                                _fun89683_ip = 37;
                                continue _fun89683
                            }
                        case 10:
                            var1 = _closure2_slot6;
                            if (var1) {
                                _fun89683_ip = 37;
                                continue _fun89683
                            }
                        case 17:
                            var3 = _closure2_slot11;
                            var2 = var3.set;
                            var1 = _closure2_slot7;
                            var1 = var2.bind(var3)(var1);
                            _fun89683_ip = 53;
                            continue _fun89683;
                        case 37:
                            var2 = _closure2_slot11;
                            var1 = var2.set;
                            var0 = 0;
                            var0 = var1.bind(var2)(var0);
                        case 53:
                            var0 = undefined;
                            return var0;
                    }
                };
                var10 = var13.bind(var16)(var10, var12);
                var13 = _closure1_slot4;
                var12 = var13.useEffect;
                var10 = new Array(4);
                var10[0] = var21;
                var10[1] = var8;
                var10[2] = var7;
                var10[3] = var6;
                var6 = function() { // Environment: var1
                    _fun89684: for (var _fun89684_ip = 0;;) switch (_fun89684_ip) {
                        case 0:
                            var1 = _closure2_slot3;
                            if (!var1) {
                                _fun89684_ip = 20;
                                continue _fun89684
                            }
                        case 10:
                            var2 = _closure2_slot4;
                            var1 = null;
                            if (!(var1 == var2)) {
                                _fun89684_ip = 38;
                                continue _fun89684
                            }
                        case 20:
                            var3 = _closure2_slot12;
                            var2 = var3.set;
                            var1 = 0;
                            var1 = var2.bind(var3)(var1);
                            _fun89684_ip = 56;
                            continue _fun89684;
                        case 38:
                            var2 = _closure2_slot12;
                            var1 = var2.set;
                            var0 = _closure2_slot9;
                            var0 = var1.bind(var2)(var0);
                        case 56:
                            var0 = undefined;
                            return var0;
                    }
                };
                var6 = var12.bind(var13)(var6, var10);
                var16 = _closure1_slot0;
                var18 = _closure1_slot2;
                var6 = var18[var17];
                var12 = var16.bind(var4)(var6);
                var10 = var12.useAnimatedStyle;
                var6 = function() {
                    _fun89685: for (var _fun89685_ip = 0;;) switch (_fun89685_ip) {
                        case 0:
                            var0 = _closure2_slot5;
                            var1 = {};
                            if (var0) {
                                _fun89685_ip = 156;
                                continue _fun89685
                            }
                        case 15:
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var3 = 23;
                            var3 = var5[var3];
                            var11 = undefined;
                            var5 = var4.bind(var11)(var3);
                            var4 = var5.withDelay;
                            var6 = _closure2_slot3;
                            var3 = 200;
                            if (!var6) {
                                _fun89685_ip = 62;
                                continue _fun89685
                            }
                        case 56:
                            var3 = 800;
                        case 62:
                            var10 = _closure1_slot0;
                            var12 = _closure1_slot2;
                            var0 = 24;
                            var0 = var12[var0];
                            var8 = var10.bind(var11)(var0);
                            var7 = var8.withTiming;
                            var6 = _closure2_slot11;
                            var0 = var6.get;
                            var6 = var0.bind(var6)();
                            var0 = {};
                            var9 = 400;
                            var0.duration = var9;
                            var9 = 25;
                            var9 = var12[var9];
                            var9 = var10.bind(var11)(var9);
                            var9 = var9.DECELERATED_EASING;
                            var0.easing = var9;
                            var0 = var7.bind(var8)(var6, var0);
                            var0 = var4.bind(var5)(var3, var0);
                            var1.height = var0;
                            var0 = var1;
                            _fun89685_ip = 176;
                            continue _fun89685;
                        case 156:
                            var3 = _closure2_slot11;
                            var2 = var3.get;
                            var2 = var2.bind(var3)();
                            var1.height = var2;
                            var0 = var1;
                        case 176:
                            return var0;
                    }
                };
                var13 = {};
                var13.useReducedMotion = var22;
                var13.height = var14;
                var14 = var18[var17];
                var14 = var16.bind(var4)(var14);
                var14 = var14.withDelay;
                var13.withDelay = var14;
                var13.completed = var8;
                var19 = 24;
                var14 = var18[var19];
                var14 = var16.bind(var4)(var14);
                var14 = var14.withTiming;
                var13.withTiming = var14;
                var14 = 25;
                var20 = var18[var14];
                var20 = var16.bind(var4)(var20);
                var20 = var20.DECELERATED_EASING;
                var13.DECELERATED_EASING = var20;
                var6.__closure = var13;
                var13 = 5585837927201.0;
                var6.__workletHash = var13;
                var13 = _closure1_slot16;
                var6.__initData = var13;
                var20 = var10.bind(var12)(var6);
                var6 = var18[var17];
                var12 = var16.bind(var4)(var6);
                var10 = var12.useAnimatedStyle;
                var6 = function() {
                    _fun89686: for (var _fun89686_ip = 0;;) switch (_fun89686_ip) {
                        case 0:
                            var0 = _closure2_slot5;
                            var1 = {};
                            if (var0) {
                                _fun89686_ip = 164;
                                continue _fun89686
                            }
                        case 15:
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var3 = 23;
                            var3 = var5[var3];
                            var11 = undefined;
                            var5 = var4.bind(var11)(var3);
                            var4 = var5.withDelay;
                            var6 = _closure2_slot6;
                            var3 = 0;
                            if (var6) {
                                _fun89686_ip = 70;
                                continue _fun89686
                            }
                        case 55:
                            var6 = _closure2_slot3;
                            var3 = 0;
                            if (!var6) {
                                _fun89686_ip = 70;
                                continue _fun89686
                            }
                        case 64:
                            var3 = 1200;
                        case 70:
                            var10 = _closure1_slot0;
                            var12 = _closure1_slot2;
                            var0 = 24;
                            var0 = var12[var0];
                            var8 = var10.bind(var11)(var0);
                            var7 = var8.withTiming;
                            var6 = _closure2_slot12;
                            var0 = var6.get;
                            var6 = var0.bind(var6)();
                            var0 = {};
                            var9 = 400;
                            var0.duration = var9;
                            var9 = 25;
                            var9 = var12[var9];
                            var9 = var10.bind(var11)(var9);
                            var9 = var9.DECELERATED_EASING;
                            var0.easing = var9;
                            var0 = var7.bind(var8)(var6, var0);
                            var0 = var4.bind(var5)(var3, var0);
                            var1.height = var0;
                            var0 = var1;
                            _fun89686_ip = 184;
                            continue _fun89686;
                        case 164:
                            var3 = _closure2_slot12;
                            var2 = var3.get;
                            var2 = var2.bind(var3)();
                            var1.height = var2;
                            var0 = var1;
                        case 184:
                            return var0;
                    }
                };
                var13 = {};
                var13.useReducedMotion = var22;
                var13.nextHeight = var21;
                var21 = var18[var17];
                var21 = var16.bind(var4)(var21);
                var21 = var21.withDelay;
                var13.withDelay = var21;
                var13.isViewAction = var9;
                var13.completed = var8;
                var19 = var18[var19];
                var19 = var16.bind(var4)(var19);
                var19 = var19.withTiming;
                var13.withTiming = var19;
                var14 = var18[var14];
                var14 = var16.bind(var4)(var14);
                var14 = var14.DECELERATED_EASING;
                var13.DECELERATED_EASING = var14;
                var6.__closure = var13;
                var13 = 10256555667281.0;
                var6.__workletHash = var13;
                var13 = _closure1_slot17;
                var6.__initData = var13;
                var16 = var10.bind(var12)(var6);
                var12 = _closure1_slot4;
                var10 = var12.useCallback;
                var6 = new Array(1);
                var6[0] = var5;
                var5 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var0 = var0.nativeEvent;
                    var2 = _closure2_slot8;
                    var0 = var0.layout;
                    var1 = var0.height;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var12 = var10.bind(var12)(var5, var6);
                var10 = _closure1_slot4;
                var6 = var10.useCallback;
                var5 = new Array(1);
                var5[0] = var3;
                var3 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var0 = var0.nativeEvent;
                    var2 = _closure2_slot10;
                    var0 = var0.layout;
                    var1 = var0.height;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var18 = var6.bind(var10)(var3, var5);
                if (!(var0 != var2)) {
                    _fun89681_ip = 1211;
                    continue _fun89681
                }
            case 895:
                var13 = function() {
                    _fun89689: for (var _fun89689_ip = 0;;) switch (_fun89689_ip) {
                        case 0:
                            var3 = _closure1_slot13;
                            var2 = _closure1_slot5;
                            var1 = {};
                            var15 = _closure2_slot1;
                            var0 = var15.container;
                            var1.style = var0;
                            var8 = _closure1_slot12;
                            var7 = _closure1_slot20;
                            var4 = {};
                            var14 = _closure2_slot2;
                            var0 = var14.emoji;
                            var4.emoji = var0;
                            var0 = undefined;
                            var7 = var8.bind(var0)(var7, var4);
                            var4 = new Array(3);
                            var4[0] = var7;
                            var9 = _closure1_slot13;
                            var8 = _closure1_slot5;
                            var7 = {};
                            var10 = var15.text;
                            var7.style = var10;
                            var13 = _closure1_slot12;
                            var17 = _closure1_slot0;
                            var18 = _closure1_slot2;
                            var11 = 14;
                            var10 = var18[var11];
                            var10 = var17.bind(var0)(var10);
                            var12 = var10.Text;
                            var10 = {
                                'variant': 'text-sm/medium',
                                'color': 'mobile-text-heading-primary'
                            };
                            var15 = var15.wrap;
                            var10.style = var15;
                            var14 = var14.title;
                            var10.children = var14;
                            var12 = var13.bind(var0)(var12, var10);
                            var10 = new Array(2);
                            var10[0] = var12;
                            var13 = _closure1_slot12;
                            var11 = var18[var11];
                            var11 = var17.bind(var0)(var11);
                            var12 = var11.Text;
                            var11 = {
                                'variant': 'text-xxs/normal',
                                'color': 'text-muted'
                            };
                            var14 = 15;
                            var15 = var18[var14];
                            var15 = var17.bind(var0)(var15);
                            var16 = var15.intl;
                            var15 = var16.string;
                            var14 = var18[var14];
                            var14 = var17.bind(var0)(var14);
                            var14 = var14.t;
                            var14 = var14["ElGg8+"];
                            var14 = var15.bind(var16)(var14);
                            var11.children = var14;
                            var11 = var13.bind(var0)(var12, var11);
                            var10[1] = var11;
                            var7.children = var10;
                            var7 = var9.bind(var0)(var8, var7);
                            var4[1] = var7;
                            var5 = _closure2_slot3;
                            if (!var5) {
                                _fun89689_ip = 361;
                                continue _fun89689
                            }
                        case 281:
                            var8 = _closure1_slot12;
                            var10 = _closure1_slot1;
                            var11 = _closure1_slot2;
                            var9 = 16;
                            var6 = var11[var9];
                            var7 = var10.bind(var0)(var6);
                            var6 = {};
                            var12 = true;
                            var6.disableColor = var12;
                            var9 = var11[var9];
                            var9 = var10.bind(var0)(var9);
                            var9 = var9.Sizes;
                            var9 = var9.MEDIUM;
                            var6.size = var9;
                            var9 = 26;
                            var9 = var11[var9];
                            var9 = var10.bind(var0)(var9);
                            var6.source = var9;
                            var5 = var8.bind(var0)(var7, var6);
                        case 361:
                            var4[2] = var5;
                            var1.children = var4;
                            var0 = var3.bind(var0)(var2, var1);
                            return var0;
                    }
                };
                var14 = function() {
                    _fun89690: for (var _fun89690_ip = 0;;) switch (_fun89690_ip) {
                        case 0:
                            var1 = _closure2_slot4;
                            var0 = null;
                            var1 = var0 == var1;
                            if (var1) {
                                _fun89690_ip = 489;
                                continue _fun89690
                            }
                        case 19:
                            var4 = _closure1_slot13;
                            var17 = _closure1_slot0;
                            var14 = _closure1_slot2;
                            var1 = 27;
                            var1 = var14[var1];
                            var3 = undefined;
                            var1 = var17.bind(var3)(var1);
                            var2 = var1.PressableHighlight;
                            var1 = {};
                            var5 = 'button';
                            var1.accessibilityRole = var5;
                            var15 = 15;
                            var5 = var14[var15];
                            var5 = var17.bind(var3)(var5);
                            var7 = var5.intl;
                            var6 = var7.string;
                            var5 = var14[var15];
                            var5 = var17.bind(var3)(var5);
                            var5 = var5.t;
                            var5 = var5.PDTjLN;
                            var5 = var6.bind(var7)(var5);
                            var1.accessibilityLabel = var5;
                            var12 = _closure2_slot1;
                            var5 = var12.container;
                            var1.style = var5;
                            var5 = function() {
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var1 = 28;
                                var2 = var2[var1];
                                var1 = undefined;
                                var2 = var3.bind(var1)(var2);
                                var1 = var2.transitionTo;
                                var5 = _closure1_slot10;
                                var4 = var5.CHANNEL;
                                var3 = _closure2_slot0;
                                var3 = var3.guild_id;
                                var0 = _closure2_slot4;
                                var0 = var0.channelId;
                                var0 = var4.bind(var5)(var3, var0);
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var1.onPress = var5;
                            var7 = _closure1_slot12;
                            var6 = _closure1_slot20;
                            var5 = {};
                            var8 = _closure2_slot4;
                            var8 = var8.emoji;
                            var5.emoji = var8;
                            var6 = var7.bind(var3)(var6, var5);
                            var5 = new Array(3);
                            var5[0] = var6;
                            var8 = _closure1_slot13;
                            var7 = _closure1_slot5;
                            var6 = {};
                            var10 = var12.text;
                            var6.style = var10;
                            var13 = _closure1_slot12;
                            var10 = 14;
                            var10 = var14[var10];
                            var10 = var17.bind(var3)(var10);
                            var11 = var10.Text;
                            var10 = {
                                'variant': 'text-sm/medium',
                                'color': 'mobile-text-heading-primary'
                            };
                            var18 = var12.wrap;
                            var10.style = var18;
                            var18 = var14[var15];
                            var18 = var17.bind(var3)(var18);
                            var19 = var18.intl;
                            var18 = var19.format;
                            var15 = var14[var15];
                            var15 = var17.bind(var3)(var15);
                            var15 = var15.t;
                            var17 = var15["/beONw"];
                            var15 = {};
                            var20 = _closure2_slot4;
                            var20 = var20.title;
                            var15.step = var20;
                            var15 = var18.bind(var19)(var17, var15);
                            var10.children = var15;
                            var11 = var13.bind(var3)(var11, var10);
                            var10 = new Array(2);
                            var10[0] = var11;
                            var15 = _closure1_slot12;
                            var13 = _closure1_slot19;
                            var11 = {};
                            var16 = _closure2_slot4;
                            var11.action = var16;
                            var11 = var15.bind(var3)(var13, var11);
                            var10[1] = var11;
                            var6.children = var10;
                            var6 = var8.bind(var3)(var7, var6);
                            var5[1] = var6;
                            var8 = _closure1_slot12;
                            var7 = _closure1_slot5;
                            var6 = {};
                            var10 = var12.circle;
                            var6.style = var10;
                            var11 = _closure1_slot12;
                            var13 = _closure1_slot1;
                            var15 = 16;
                            var9 = var14[var15];
                            var10 = var13.bind(var3)(var9);
                            var9 = {};
                            var15 = var14[var15];
                            var15 = var13.bind(var3)(var15);
                            var15 = var15.Sizes;
                            var15 = var15.REFRESH_SMALL_16;
                            var9.size = var15;
                            var12 = var12.icon;
                            var9.style = var12;
                            var12 = 29;
                            var12 = var14[var12];
                            var12 = var13.bind(var3)(var12);
                            var9.source = var12;
                            var9 = var11.bind(var3)(var10, var9);
                            var6.children = var9;
                            var6 = var8.bind(var3)(var7, var6);
                            var5[2] = var6;
                            var1.children = var5;
                            var0 = var4.bind(var3)(var2, var1);
                        case 489:
                            return var0;
                    }
                };
                var3 = _closure1_slot13;
                var2 = _closure1_slot14;
                var1 = {};
                var10 = _closure1_slot12;
                var6 = _closure1_slot5;
                var5 = {};
                var19 = var15.measurement;
                var5.style = var19;
                var5.onLayout = var12;
                var12 = var13.bind(var4)();
                var5.children = var12;
                var6 = var10.bind(var4)(var6, var5);
                var5 = new Array(3);
                var5[0] = var6;
                var6 = !var9;
                if (var9) {
                    _fun89681_ip = 1036;
                    continue _fun89681
                }
            case 972:
                var12 = _closure1_slot12;
                var10 = _closure1_slot1;
                var9 = _closure1_slot2;
                var9 = var9[var17];
                var9 = var10.bind(var4)(var9);
                var10 = var9.View;
                var9 = {};
                var21 = var15.animatedContainer;
                var19 = new Array(2);
                var19[0] = var21;
                var19[1] = var20;
                var9.style = var19;
                var13 = var13.bind(var4)();
                var9.children = var13;
                var6 = var12.bind(var4)(var10, var9);
            case 1036:
                var5[1] = var6;
                var6 = null;
                if (!var8) {
                    _fun89681_ip = 1195;
                    continue _fun89681
                }
            case 1048:
                var7 = var0 != var7;
                var6 = null;
                if (!var7) {
                    _fun89681_ip = 1195;
                    continue _fun89681
                }
            case 1060:
                var9 = _closure1_slot13;
                var8 = _closure1_slot14;
                var7 = {};
                var13 = _closure1_slot12;
                var12 = _closure1_slot5;
                var10 = {};
                var19 = var15.measurement;
                var10.style = var19;
                var10.onLayout = var18;
                var18 = var14.bind(var4)();
                var10.children = var18;
                var12 = var13.bind(var4)(var12, var10);
                var10 = new Array(2);
                var10[0] = var12;
                var13 = _closure1_slot12;
                var12 = _closure1_slot1;
                var11 = _closure1_slot2;
                var11 = var11[var17];
                var11 = var12.bind(var4)(var11);
                var12 = var11.View;
                var11 = {};
                var17 = var15.animatedContainer;
                var15 = new Array(2);
                var15[0] = var17;
                var15[1] = var16;
                var11.style = var15;
                var14 = var14.bind(var4)();
                var11.children = var14;
                var11 = var13.bind(var4)(var12, var11);
                var10[1] = var11;
                var7.children = var10;
                var6 = var9.bind(var4)(var8, var7);
            case 1195:
                var5[2] = var6;
                var1.children = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 1211:
                return var0;
        }
    };
    var _closure1_slot21 = var0;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var11.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var4 = var6[var3];
    var3 = arg3;
    var7 = var3.bind(var0)(var4);
    var _closure1_slot4 = var7;
    var3 = 2;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var6[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var6[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var6[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var6[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.Routes;
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.EMOJI_URL_BASE_SIZE;
    var _closure1_slot11 = var3;
    var3 = 9;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var4 = var3.jsx;
    var _closure1_slot12 = var4;
    var4 = var3.jsxs;
    var _closure1_slot13 = var4;
    var3 = var3.Fragment;
    var _closure1_slot14 = var3;
    var3 = 10;
    var3 = var6[var3];
    var8 = var5.bind(var0)(var3);
    var4 = var8.createStyles;
    var3 = {};
    var9 = {};
    var10 = 'hidden';
    var9.overflow = var10;
    var3.animatedContainer = var9;
    var9 = {
        'opacity': 0,
        'position': 'absolute'
    };
    var3.measurement = var9;
    var9 = {
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center',
        'backgroundColor': null,
        'paddingHorizontal': 12,
        'paddingVertical': 8
    };
    var10 = 11;
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BASE_LOWEST;
    var9.backgroundColor = var12;
    var3.container = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BASE_LOWEST;
    var9.backgroundColor = var12;
    var3.bottomPaddingContainer = var9;
    var9 = {
        'flexGrow': 1,
        'flexShrink': 1,
        'marginLeft': 8
    };
    var3.text = var9;
    var9 = {
        'flexShrink': 1,
        'flexWrap': 'wrap'
    };
    var3.wrap = var9;
    var9 = {
        'width': 24,
        'height': 24
    };
    var3.emoji = var9;
    var9 = {
        'width': 24,
        'textAlign': 'center'
    };
    var3.textEmoji = var9;
    var9 = {
        'width': 24,
        'height': 24,
        'backgroundColor': null,
        'borderRadius': null,
        'display': 'flex',
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_SURFACE_HIGH;
    var9.backgroundColor = var12;
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.md;
    var9.borderRadius = var12;
    var3.emojiPlaceholder = var9;
    var9 = {
        'display': 'flex',
        'alignItems': 'center',
        'justifyContent': 'center',
        'height': 20,
        'width': 20,
        'borderRadius': 15,
        'marginLeft': 8
    };
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BRAND;
    var9.backgroundColor = var12;
    var3.circle = var9;
    var9 = {};
    var10 = var6[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.WHITE;
    var9.tintColor = var10;
    var3.icon = var9;
    var3 = var4.bind(var8)(var3);
    var _closure1_slot15 = var3;
    var3 = {};
    var4 = 'function MemberActionChatInputBannerTsx1(){const{useReducedMotion,height,withDelay,completed,withTiming,DECELERATED_EASING}=this.__closure;if(useReducedMotion){return{height:height.get()};}return{height:withDelay(completed?800:200,withTiming(height.get(),{duration:400,easing:DECELERATED_EASING}))};}';
    var3.code = var4;
    var _closure1_slot16 = var3;
    var3 = {};
    var4 = 'function MemberActionChatInputBannerTsx2(){const{useReducedMotion,nextHeight,withDelay,isViewAction,completed,withTiming,DECELERATED_EASING}=this.__closure;if(useReducedMotion){return{height:nextHeight.get()};}return{height:withDelay(!isViewAction&&completed?1200:0,withTiming(nextHeight.get(),{duration:400,easing:DECELERATED_EASING}))};}';
    var3.code = var4;
    var _closure1_slot17 = var3;
    var4 = var7.memo;
    var3 = function(arg0) { // Environment: var1
        _fun89692: for (var _fun89692_ip = 0;;) switch (_fun89692_ip) {
            case 0:
                var1 = arg0;
                var5 = var1.channel;
                var _closure2_slot0 = var5;
                var3 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 30;
                var2 = var7[var2];
                var4 = undefined;
                var8 = var3.bind(var4)(var2);
                var6 = var8.useCanSeeOnboardingHome;
                var2 = var5.guild_id;
                var2 = var6.bind(var8)(var2);
                var6 = 12;
                var6 = var7[var6];
                var9 = var3.bind(var4)(var6);
                var8 = var9.useStateFromStores;
                var10 = _closure1_slot9;
                var6 = new Array(1);
                var6[0] = var10;
                var0 = function() { // Environment: var0
                    _fun89693: for (var _fun89693_ip = 0;;) switch (_fun89693_ip) {
                        case 0:
                            var2 = _closure1_slot9;
                            var1 = var2.getSelfMember;
                            var0 = _closure2_slot0;
                            var0 = var0.guild_id;
                            var0 = var1.bind(var2)(var0);
                            var1 = null;
                            var2 = var1 == var0;
                            var1 = undefined;
                            if (var2) {
                                _fun89693_ip = 47;
                                continue _fun89693
                            }
                        case 41:
                            var1 = var0.isPending;
                        case 47:
                            var0 = true;
                            var0 = var0 === var1;
                            return var0;
                    }
                };
                var6 = var8.bind(var9)(var6, var0);
                var0 = 21;
                var0 = var7[var0];
                var7 = var3.bind(var4)(var0);
                var3 = var7.useAllActionsCompleted;
                var0 = var5.guild_id;
                var7 = var3.bind(var7)(var0);
                var0 = null;
                if (var7) {
                    _fun89692_ip = 160;
                    continue _fun89692
                }
            case 130:
                var0 = null;
                if (var6) {
                    _fun89692_ip = 160;
                    continue _fun89692
                }
            case 135:
                var0 = null;
                if (!var2) {
                    _fun89692_ip = 160;
                    continue _fun89692
                }
            case 140:
                var3 = _closure1_slot12;
                var2 = _closure1_slot21;
                var1 = {};
                var1.channel = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 160:
                return var0;
        }
    };
    var3 = var4.bind(var7)(var3);
    var _closure1_slot18 = var3;
    var4 = var7.memo;
    var1 = function(arg0) { // Environment: var1
        _fun89694: for (var _fun89694_ip = 0;;) switch (_fun89694_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.channel;
                var3 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 21;
                var0 = var7[var2];
                var4 = undefined;
                var8 = var3.bind(var4)(var0);
                var6 = var8.useMemberActionsForChannel;
                var0 = var5.guild_id;
                var6 = var6.bind(var8)(var0, var5);
                var0 = var6.channelAction;
                var6 = var6.completed;
                var2 = var7[var2];
                var9 = var3.bind(var4)(var2);
                var8 = var9.useNextMemberAction;
                var7 = var5.guild_id;
                var3 = null;
                var10 = var3 == var0;
                var2 = undefined;
                if (var10) {
                    _fun89694_ip = 98;
                    continue _fun89694
                }
            case 93:
                var2 = var0.channelId;
            case 98:
                var2 = var8.bind(var9)(var7, var2);
                var8 = var3 == var0;
                var7 = undefined;
                if (var8) {
                    _fun89694_ip = 119;
                    continue _fun89694
                }
            case 113:
                var7 = var0.actionType;
            case 119:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var0 = 22;
                var0 = var9[var0];
                var0 = var8.bind(var4)(var0);
                var0 = var0.NewMemberActionTypes;
                var0 = var0.VIEW;
                if (!(var7 === var0)) {
                    _fun89694_ip = 169;
                    continue _fun89694
                }
            case 155:
                var0 = null;
                if (!var6) {
                    _fun89694_ip = 189;
                    continue _fun89694
                }
            case 160:
                var2 = var3 != var2;
                var0 = null;
                if (!var2) {
                    _fun89694_ip = 189;
                    continue _fun89694
                }
            case 169:
                var3 = _closure1_slot12;
                var2 = _closure1_slot18;
                var1 = {};
                var1.channel = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 189:
                return var0;
        }
    };
    var1 = var4.bind(var7)(var1);
    var4 = 31;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_onboarding_home/native/MemberActionChatInputBanner.tsx';
    var4 = var5.bind(var6)(var4);
    var2.MemberActionChatInputBannerGuarded = var3;
    var2.MemberActionsChatInputBannerGuardedOuter = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1298, 4700, 1372, 1672, 660, 1616, 33, 1297, 671, 632, 4755, 3900, 1234, 4045, 9972, 4667, 1417, 3063, 11615, 11612, 3679, 4056, 4847, 11616, 4865, 1220, 11613, 4544, 2]);