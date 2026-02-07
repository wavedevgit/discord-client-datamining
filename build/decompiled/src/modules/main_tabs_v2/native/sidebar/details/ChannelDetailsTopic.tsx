// modules/main_tabs_v2/native/sidebar/details/ChannelDetailsTopic.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun107614: for (var _fun107614_ip = 0;;) switch (_fun107614_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.channel;
                var _closure2_slot0 = var1;
                var31 = var2.textAlign;
                var2 = _closure1_slot14;
                var3 = undefined;
                var17 = var2.bind(var3)();
                var12 = _closure1_slot0;
                var18 = _closure1_slot2;
                var2 = 8;
                var2 = var18[var2];
                var5 = var12.bind(var3)(var2);
                var4 = var5.useToken;
                var6 = _closure1_slot1;
                var2 = 9;
                var2 = var18[var2];
                var2 = var6.bind(var3)(var2);
                var2 = var2.colors;
                var2 = var2.BACKGROUND_BASE_LOWER;
                var2 = var4.bind(var5)(var2);
                var _closure2_slot1 = var2;
                var6 = _closure1_slot4;
                var5 = var6.useMemo;
                var4 = new Array(1);
                var4[0] = var2;
                var2 = function() { // Environment: var0
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 10;
                    var0 = var2[var0];
                    var2 = undefined;
                    var0 = var1.bind(var2)(var0);
                    var1 = _closure2_slot1;
                    var3 = var0.bind(var2)(var1);
                    var2 = var3.alpha;
                    var0 = 0;
                    var2 = var2.bind(var3)(var0);
                    var0 = var2.hex;
                    var2 = var0.bind(var2)();
                    var0 = new Array(2);
                    var0[0] = var2;
                    var0[1] = var1;
                    return var0;
                };
                var15 = var5.bind(var6)(var2, var4);
                var5 = _closure1_slot4;
                var4 = var5.useState;
                var2 = true;
                var4 = var4.bind(var5)(var2);
                var2 = _closure1_slot3;
                var7 = 2;
                var2 = var2.bind(var3)(var4, var7);
                var5 = 0;
                var29 = var2[var5];
                var _closure2_slot2 = var29;
                var4 = 1;
                var2 = var2[var4];
                var _closure2_slot3 = var2;
                var8 = _closure1_slot4;
                var6 = var8.useState;
                var2 = false;
                var6 = var6.bind(var8)(var2);
                var2 = _closure1_slot3;
                var2 = var2.bind(var3)(var6, var7);
                var28 = var2[var5];
                var _closure2_slot4 = var28;
                var2 = var2[var4];
                var _closure2_slot5 = var2;
                var9 = 11;
                var2 = var18[var9];
                var4 = var12.bind(var3)(var2);
                var2 = var4.useSharedValue;
                var6 = var2.bind(var4)(var3);
                var _closure2_slot6 = var6;
                var2 = var18[var9];
                var4 = var12.bind(var3)(var2);
                var2 = var4.useSharedValue;
                var5 = var2.bind(var4)(var3);
                var _closure2_slot7 = var5;
                var2 = var18[var9];
                var7 = var12.bind(var3)(var2);
                var4 = var7.useSharedValue;
                var2 = _closure1_slot16;
                var2 = var2.HIDDEN;
                var2 = var4.bind(var7)(var2);
                var _closure2_slot8 = var2;
                var4 = var18[var9];
                var8 = var12.bind(var3)(var4);
                var7 = var8.useAnimatedStyle;
                var4 = function() {
                    _fun107616: for (var _fun107616_ip = 0;;) switch (_fun107616_ip) {
                        case 0:
                            var1 = _closure2_slot7;
                            var0 = var1.get;
                            var5 = var0.bind(var1)();
                            var1 = _closure2_slot6;
                            var0 = var1.get;
                            var2 = var0.bind(var1)();
                            var0 = null;
                            if (!(var0 != var2)) {
                                _fun107616_ip = 97;
                                continue _fun107616
                            }
                        case 35:
                            if (!(var0 != var5)) {
                                _fun107616_ip = 97;
                                continue _fun107616
                            }
                        case 39:
                            var0 = {};
                            var7 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var3 = 12;
                            var4 = var4[var3];
                            var3 = undefined;
                            var4 = var7.bind(var3)(var4);
                            var3 = var4.withSpring;
                            var6 = _closure2_slot4;
                            if (!var6) {
                                _fun107616_ip = 81;
                                continue _fun107616
                            }
                        case 78:
                            var2 = var5;
                        case 81:
                            var1 = _closure1_slot9;
                            var1 = var3.bind(var4)(var2, var1);
                            var0.height = var1;
                            _fun107616_ip = 104;
                            continue _fun107616;
                        case 97:
                            var0 = _closure1_slot15;
                        case 104:
                            return var0;
                    }
                };
                var10 = {};
                var10.expandedHeight = var5;
                var10.truncatedHeight = var6;
                var11 = _closure1_slot15;
                var10.EMPTY_STYLE = var11;
                var11 = 12;
                var13 = var18[var11];
                var13 = var12.bind(var3)(var13);
                var13 = var13.withSpring;
                var10.withSpring = var13;
                var10.expanded = var28;
                var13 = _closure1_slot9;
                var10.SPRING_CHANNEL_DETAILS = var13;
                var4.__closure = var10;
                var10 = 11932535786068.0;
                var4.__workletHash = var10;
                var10 = _closure1_slot17;
                var4.__initData = var10;
                var14 = var7.bind(var8)(var4);
                var4 = var18[var9];
                var8 = var12.bind(var3)(var4);
                var7 = var8.useAnimatedStyle;
                var4 = function() {
                    _fun107617: for (var _fun107617_ip = 0;;) switch (_fun107617_ip) {
                        case 0:
                            var2 = _closure2_slot7;
                            var0 = var2.get;
                            var2 = var0.bind(var2)();
                            var0 = null;
                            if (!(var0 != var2)) {
                                _fun107617_ip = 43;
                                continue _fun107617
                            }
                        case 22:
                            var0 = {};
                            var2 = _closure2_slot7;
                            var1 = var2.get;
                            var1 = var1.bind(var2)();
                            var0.height = var1;
                            _fun107617_ip = 50;
                            continue _fun107617;
                        case 43:
                            var0 = _closure1_slot15;
                        case 50:
                            return var0;
                    }
                };
                var10 = {};
                var10.expandedHeight = var5;
                var13 = _closure1_slot15;
                var10.EMPTY_STYLE = var13;
                var4.__closure = var10;
                var10 = 13643982891313.0;
                var4.__workletHash = var10;
                var10 = _closure1_slot18;
                var4.__initData = var10;
                var13 = var7.bind(var8)(var4);
                var4 = var18[var9];
                var8 = var12.bind(var3)(var4);
                var7 = var8.useAnimatedStyle;
                var4 = function() {
                    var0 = {};
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 12;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.withSpring;
                    var5 = _closure2_slot8;
                    var2 = var5.get;
                    var2 = var2.bind(var5)();
                    var1 = _closure1_slot9;
                    var1 = var3.bind(var4)(var2, var1);
                    var0.opacity = var1;
                    return var0;
                };
                var10 = {};
                var11 = var18[var11];
                var11 = var12.bind(var3)(var11);
                var11 = var11.withSpring;
                var10.withSpring = var11;
                var10.gradient = var2;
                var11 = _closure1_slot9;
                var10.SPRING_CHANNEL_DETAILS = var11;
                var4.__closure = var10;
                var10 = 12423301233362.0;
                var4.__workletHash = var10;
                var10 = _closure1_slot19;
                var4.__initData = var10;
                var19 = var7.bind(var8)(var4);
                var10 = _closure1_slot4;
                var8 = var10.useCallback;
                var7 = new Array(1);
                var7[0] = var2;
                var4 = function(arg0) { // Environment: var0
                    _fun107619: for (var _fun107619_ip = 0;;) switch (_fun107619_ip) {
                        case 0:
                            var0 = arg0;
                            var0 = var0.nativeEvent;
                            var0 = var0.lines;
                            var1 = var0.length;
                            var0 = _closure1_slot8;
                            var1 = var1 > var0;
                            var3 = _closure2_slot3;
                            var0 = undefined;
                            var3 = var3.bind(var0)(var1);
                            var3 = _closure2_slot8;
                            var2 = var3.set;
                            var4 = _closure1_slot16;
                            if (var1) {
                                _fun107619_ip = 69;
                                continue _fun107619
                            }
                        case 61:
                            var1 = var4.HIDDEN;
                            _fun107619_ip = 75;
                            continue _fun107619;
                        case 69:
                            var1 = var4.VISIBLE;
                        case 75:
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var22 = var8.bind(var10)(var4, var7);
                var10 = _closure1_slot4;
                var8 = var10.useCallback;
                var7 = new Array(1);
                var7[0] = var5;
                var4 = function(arg0) { // Environment: var0
                    var2 = _closure2_slot7;
                    var1 = var2.set;
                    var0 = arg0;
                    var0 = var0.nativeEvent;
                    var0 = var0.layout;
                    var0 = var0.height;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var21 = var8.bind(var10)(var4, var7);
                var8 = _closure1_slot4;
                var7 = var8.useMemo;
                var4 = new Array(3);
                var4[0] = var29;
                var4[1] = var28;
                var4[2] = var2;
                var2 = function() { // Environment: var0
                    _fun107621: for (var _fun107621_ip = 0;;) switch (_fun107621_ip) {
                        case 0:
                            var0 = _closure2_slot2;
                            if (var0) {
                                _fun107621_ip = 14;
                                continue _fun107621
                            }
                        case 10:
                            var0 = undefined;
                            return var0;
                        case 14:
                            var0 = function() { // Environment: var0
                                _fun107622: for (var _fun107622_ip = 0;;) switch (_fun107622_ip) {
                                    case 0:
                                        var0 = _closure2_slot4;
                                        var1 = !var0;
                                        var3 = _closure2_slot5;
                                        var0 = undefined;
                                        var3 = var3.bind(var0)(var1);
                                        var3 = _closure2_slot8;
                                        var2 = var3.set;
                                        var4 = _closure1_slot16;
                                        if (var1) {
                                            _fun107622_ip = 48;
                                            continue _fun107622
                                        }
                                    case 40:
                                        var1 = var4.VISIBLE;
                                        _fun107622_ip = 54;
                                        continue _fun107622;
                                    case 48:
                                        var1 = var4.HIDDEN;
                                    case 54:
                                        var1 = var2.bind(var3)(var1);
                                        return var0;
                                }
                            };
                            return var0;
                    }
                };
                var20 = var7.bind(var8)(var2, var4);
                var8 = _closure1_slot4;
                var7 = var8.useCallback;
                var4 = new Array(1);
                var4[0] = var6;
                var2 = function(arg0) { // Environment: var0
                    var2 = _closure2_slot6;
                    var1 = var2.set;
                    var0 = arg0;
                    var0 = var0.nativeEvent;
                    var0 = var0.layout;
                    var0 = var0.height;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var30 = var7.bind(var8)(var2, var4);
                var8 = _closure1_slot4;
                var7 = var8.useMemo;
                var2 = var1.id;
                var4 = new Array(2);
                var4[0] = var2;
                var2 = var1.topic;
                var4[1] = var2;
                var2 = function() { // Environment: var0
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 13;
                    var1 = var1[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.parseTopic;
                    var0 = _closure2_slot0;
                    var5 = var0.topic;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var2 = var1.concat;
                    var1 = '';
                    var6 = var2.bind(var1)(var5);
                    var5 = var6.replace;
                    var2 = /(\r\n|\n|\r)/gm;
                    var1 = ' ';
                    var2 = var5.bind(var6)(var2, var1);
                    var1 = {};
                    var0 = var0.id;
                    var1.channelId = var0;
                    var0 = true;
                    var0 = var3.bind(var4)(var2, var0, var1);
                    return var0;
                };
                var26 = var7.bind(var8)(var2, var4);
                var8 = _closure1_slot4;
                var7 = var8.useMemo;
                var2 = var1.id;
                var4 = new Array(2);
                var4[0] = var2;
                var2 = var1.topic;
                var4[1] = var2;
                var2 = function() { // Environment: var0
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 13;
                    var1 = var1[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.parseTopic;
                    var0 = _closure2_slot0;
                    var2 = var0.topic;
                    var1 = {};
                    var0 = var0.id;
                    var1.channelId = var0;
                    var0 = true;
                    var0 = var3.bind(var4)(var2, var0, var1);
                    return var0;
                };
                var27 = var7.bind(var8)(var2, var4);
                var4 = _closure1_slot4;
                var2 = var4.useEffect;
                var7 = var1.id;
                var1 = new Array(3);
                var1[0] = var7;
                var1[1] = var6;
                var1[2] = var5;
                var0 = function() { // Environment: var0
                    var3 = _closure2_slot6;
                    var2 = var3.set;
                    var0 = undefined;
                    var2 = var2.bind(var3)(var0);
                    var3 = _closure2_slot7;
                    var2 = var3.set;
                    var2 = var2.bind(var3)(var0);
                    var2 = _closure2_slot5;
                    var1 = false;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var0 = var2.bind(var4)(var0, var1);
                var0 = null;
                if (!(var0 != var20)) {
                    _fun107614_ip = 881;
                    continue _fun107614
                }
            case 853:
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 14;
                var0 = var2[var0];
                var0 = var1.bind(var3)(var0);
                var18 = var0.PressableOpacity;
                _fun107614_ip = 885;
                continue _fun107614;
            case 881:
                var18 = _closure1_slot5;
            case 885:
                var2 = _closure1_slot12;
                var1 = _closure1_slot13;
                var0 = {};
                var6 = _closure1_slot11;
                var5 = _closure1_slot5;
                var4 = {
                    'style': null,
                    'pointerEvents': 'none',
                    'importantForAccessibility': 'no-hide-descendants',
                    'accessibilityElementsHidden': true
                };
                var7 = var17.hidden;
                var4.style = var7;
                var12 = 'none';
                var11 = _closure1_slot11;
                var10 = _closure1_slot0;
                var8 = _closure1_slot2;
                var32 = 15;
                var7 = var8[var32];
                var7 = var10.bind(var3)(var7);
                var10 = var7.Text;
                var7 = {};
                var23 = 'heading-sm/normal';
                var7.variant = var23;
                var7.onTextLayout = var22;
                var7.onLayout = var21;
                var7.children = var27;
                var7 = var11.bind(var3)(var10, var7);
                var4.children = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot12;
                var10 = _closure1_slot1;
                var5 = var8[var9];
                var5 = var10.bind(var3)(var5);
                var6 = var5.View;
                var5 = {};
                var21 = var17.topic;
                var11 = new Array(2);
                var11[0] = var21;
                var11[1] = var14;
                var5.style = var11;
                var11 = _closure1_slot11;
                var8 = var8[var9];
                var8 = var10.bind(var3)(var8);
                var10 = var8.View;
                var8 = {};
                var8.style = var13;
                var14 = _closure1_slot11;
                var13 = {};
                var13.onPress = var20;
                var20 = 0.7;
                var13.activeOpacity = var20;
                var22 = _closure1_slot11;
                var21 = _closure1_slot5;
                var20 = {};
                if (var28) {
                    _fun107614_ip = 1126;
                    continue _fun107614
                }
            case 1120:
                var23 = var12;
                if (var29) {
                    _fun107614_ip = 1128;
                    continue _fun107614
                }
            case 1126:
                var23 = undefined;
            case 1128:
                var20.pointerEvents = var23;
                var25 = _closure1_slot11;
                var24 = _closure1_slot0;
                var23 = _closure1_slot2;
                var23 = var23[var32];
                var23 = var24.bind(var3)(var23);
                var24 = var23.Text;
                var23 = {
                    'color': 'interactive-text-default',
                    'variant': 'heading-sm/normal'
                };
                var23.onLayout = var30;
                var30 = undefined;
                if (var28) {
                    _fun107614_ip = 1187;
                    continue _fun107614
                }
            case 1183:
                var30 = _closure1_slot8;
            case 1187:
                var23.lineClamp = var30;
                if (var28) {
                    _fun107614_ip = 1204;
                    continue _fun107614
                }
            case 1195:
                if (!var29) {
                    _fun107614_ip = 1204;
                    continue _fun107614
                }
            case 1198:
                var30 = _closure1_slot15;
                _fun107614_ip = 1210;
                continue _fun107614;
            case 1204:
                var30 = var17.expanded;
            case 1210:
                var29 = new Array(2);
                var29[0] = var30;
                var30 = {};
                var30.textAlign = var31;
                var29[1] = var30;
                var23.style = var29;
                if (!var28) {
                    _fun107614_ip = 1238;
                    continue _fun107614
                }
            case 1235:
                var26 = var27;
            case 1238:
                var23.children = var26;
                var23 = var25.bind(var3)(var24, var23);
                var20.children = var23;
                var20 = var22.bind(var3)(var21, var20);
                var13.children = var20;
                var13 = var14.bind(var3)(var18, var13);
                var8.children = var13;
                var10 = var11.bind(var3)(var10, var8);
                var8 = new Array(2);
                var8[0] = var10;
                var11 = _closure1_slot11;
                var13 = _closure1_slot1;
                var18 = _closure1_slot2;
                var9 = var18[var9];
                var9 = var13.bind(var3)(var9);
                var10 = var9.View;
                var9 = {};
                var14 = _closure1_slot6;
                var20 = var14.absoluteFill;
                var14 = new Array(2);
                var14[0] = var20;
                var14[1] = var19;
                var9.style = var14;
                var9.pointerEvents = var12;
                var14 = _closure1_slot11;
                var12 = 16;
                var12 = var18[var12];
                var13 = var13.bind(var3)(var12);
                var12 = {};
                var17 = var17.gradient;
                var12.style = var17;
                var17 = _closure1_slot10;
                var17 = var17.START;
                var12.start = var17;
                var16 = _closure1_slot10;
                var16 = var16.END;
                var12.end = var16;
                var12.colors = var15;
                var12 = var14.bind(var3)(var13, var12);
                var9.children = var12;
                var9 = var11.bind(var3)(var10, var9);
                var8[1] = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot20 = var0;
    var0 = function arg0() {
        _fun107627: for (var _fun107627_ip = 0;;) switch (_fun107627_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.channel;
                var _closure2_slot0 = var2;
                var7 = var1.textAlign;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 17;
                var2 = var4[var2];
                var4 = undefined;
                var5 = var3.bind(var4)(var2);
                var3 = var5.useStateFromStores;
                var6 = _closure1_slot7;
                var2 = new Array(1);
                var2[0] = var6;
                var0 = function() { // Environment: var0
                    _fun107628: for (var _fun107628_ip = 0;;) switch (_fun107628_ip) {
                        case 0:
                            var3 = _closure1_slot7;
                            var2 = var3.getUser;
                            var4 = _closure2_slot0;
                            var0 = var4.getRecipientId;
                            var0 = var0.bind(var4)();
                            var3 = var2.bind(var3)(var0);
                            var0 = null;
                            if (!(var0 != var3)) {
                                _fun107628_ip = 52;
                                continue _fun107628
                            }
                        case 41:
                            var2 = var3.isProvisional;
                            var0 = null;
                            if (var2) {
                                _fun107628_ip = 85;
                                continue _fun107628
                            }
                        case 52:
                            var4 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 18;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var4.bind(var1)(var2);
                            var1 = var2.getUserTag;
                            var0 = var1.bind(var2)(var3);
                        case 85:
                            return var0;
                    }
                };
                var5 = var3.bind(var5)(var2, var0);
                var0 = null;
                var2 = var0 == var5;
                if (var2) {
                    _fun107627_ip = 146;
                    continue _fun107627
                }
            case 83:
                var3 = _closure1_slot11;
                var2 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 15;
                var1 = var6[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.Text;
                var1 = {
                    'variant': 'heading-sm/normal',
                    'color': 'interactive-text-default'
                };
                var6 = {};
                var6.textAlign = var7;
                var1.style = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 146:
                return var0;
        }
    };
    var _closure1_slot21 = var0;
    var0 = function arg0() {
        _fun107629: for (var _fun107629_ip = 0;;) switch (_fun107629_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.channel;
                var _closure2_slot0 = var2;
                var7 = var1.textAlign;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 17;
                var2 = var4[var2];
                var4 = undefined;
                var5 = var3.bind(var4)(var2);
                var3 = var5.useStateFromStores;
                var6 = _closure1_slot7;
                var2 = new Array(1);
                var2[0] = var6;
                var0 = function() { // Environment: var0
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 19;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.getPrivateChannelUserTagsString;
                    var1 = _closure2_slot0;
                    var1 = var1.recipients;
                    var0 = _closure1_slot7;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var5 = var3.bind(var5)(var2, var0);
                var0 = null;
                var2 = var0 == var5;
                if (var2) {
                    _fun107629_ip = 146;
                    continue _fun107629
                }
            case 83:
                var3 = _closure1_slot11;
                var2 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 15;
                var1 = var6[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.Text;
                var1 = {
                    'variant': 'heading-sm/normal',
                    'color': 'interactive-text-default'
                };
                var6 = {};
                var6.textAlign = var7;
                var1.style = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 146:
                return var0;
        }
    };
    var _closure1_slot22 = var0;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var9 = 0;
    var3 = var5[var9];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var8 = 1;
    var6 = var5[var8];
    var3 = arg3;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var10 = var3.View;
    var _closure1_slot5 = var10;
    var3 = var3.StyleSheet;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.CHANNEL_TOPIC_LINE_CLAMP;
    var _closure1_slot8 = var7;
    var3 = var3.SPRING_CHANNEL_DETAILS;
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.VerticalGradient;
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot11 = var7;
    var7 = var3.jsxs;
    var _closure1_slot12 = var7;
    var3 = var3.Fragment;
    var _closure1_slot13 = var3;
    var3 = 7;
    var3 = var5[var3];
    var10 = var4.bind(var0)(var3);
    var7 = var10.createStyles;
    var3 = {};
    var11 = {
        'flex': 1,
        'flexGrow': 1,
        'position': 'absolute',
        'opacity': 0
    };
    var3.hidden = var11;
    var11 = {};
    var12 = 'hidden';
    var11.overflow = var12;
    var3.topic = var11;
    var11 = {
        'flex': 1,
        'flexGrow': 1
    };
    var3.gradient = var11;
    var11 = {};
    var12 = 'center';
    var11.textAlign = var12;
    var3.expanded = var11;
    var3 = var7.bind(var10)(var3);
    var _closure1_slot14 = var3;
    var3 = {};
    var _closure1_slot15 = var3;
    var3 = {};
    var3.HIDDEN = var9;
    var7 = 'HIDDEN';
    var3[var9] = var7;
    var3.VISIBLE = var8;
    var7 = 'VISIBLE';
    var3[var8] = var7;
    var _closure1_slot16 = var3;
    var3 = {};
    var7 = 'function ChannelDetailsTopicTsx1(){const{expandedHeight,truncatedHeight,EMPTY_STYLE,withSpring,expanded,SPRING_CHANNEL_DETAILS}=this.__closure;const _expandedHeight=expandedHeight.get();const _truncatedHeight=truncatedHeight.get();if(_truncatedHeight==null||_expandedHeight==null)return EMPTY_STYLE;return{height:withSpring(expanded?_expandedHeight:_truncatedHeight,SPRING_CHANNEL_DETAILS)};}';
    var3.code = var7;
    var _closure1_slot17 = var3;
    var3 = {};
    var7 = 'function ChannelDetailsTopicTsx2(){const{expandedHeight,EMPTY_STYLE}=this.__closure;if(expandedHeight.get()==null)return EMPTY_STYLE;return{height:expandedHeight.get()};}';
    var3.code = var7;
    var _closure1_slot18 = var3;
    var3 = {};
    var7 = 'function ChannelDetailsTopicTsx3(){const{withSpring,gradient,SPRING_CHANNEL_DETAILS}=this.__closure;return{opacity:withSpring(gradient.get(),SPRING_CHANNEL_DETAILS)};}';
    var3.code = var7;
    var _closure1_slot19 = var3;
    var3 = var6.memo;
    var1 = function arg0() {
        _fun107631: for (var _fun107631_ip = 0;;) switch (_fun107631_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.channel;
                var6 = var0.containerStyle;
                var3 = var0.textAlign;
                var4 = undefined;
                if (!(var3 === var4)) {
                    _fun107631_ip = 29;
                    continue _fun107631
                }
            case 25:
                var3 = 'center';
            case 29:
                var0 = var7.isDM;
                var0 = var0.bind(var7)();
                if (var0) {
                    _fun107631_ip = 157;
                    continue _fun107631
                }
            case 42:
                var0 = var7.isGroupDM;
                var0 = var0.bind(var7)();
                if (var0) {
                    _fun107631_ip = 128;
                    continue _fun107631
                }
            case 55:
                var1 = var7.topic;
                var0 = null;
                var0 = var0 != var1;
                if (!var0) {
                    _fun107631_ip = 94;
                    continue _fun107631
                }
            case 70:
                var2 = var7.topic;
                var1 = var2.trim;
                var2 = var1.bind(var2)();
                var1 = '';
                var0 = var1 !== var2;
            case 94:
                var5 = undefined;
                if (!var0) {
                    _fun107631_ip = 184;
                    continue _fun107631
                }
            case 99:
                var2 = _closure1_slot11;
                var1 = _closure1_slot20;
                var0 = {};
                var0.channel = var7;
                var0.textAlign = var3;
                var5 = var2.bind(var4)(var1, var0);
                _fun107631_ip = 184;
                continue _fun107631;
            case 128:
                var2 = _closure1_slot11;
                var1 = _closure1_slot22;
                var0 = {};
                var0.channel = var7;
                var0.textAlign = var3;
                var5 = var2.bind(var4)(var1, var0);
                _fun107631_ip = 184;
                continue _fun107631;
            case 157:
                var2 = _closure1_slot11;
                var1 = _closure1_slot21;
                var0 = {};
                var0.channel = var7;
                var0.textAlign = var3;
                var5 = var2.bind(var4)(var1, var0);
            case 184:
                var0 = null;
                var1 = var0 == var5;
                if (var1) {
                    _fun107631_ip = 220;
                    continue _fun107631
                }
            case 193:
                var3 = _closure1_slot11;
                var2 = _closure1_slot5;
                var1 = {};
                var1.style = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 220:
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 20;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/sidebar/details/ChannelDetailsTopic.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1621, 9071, 660, 33, 1297, 3153, 671, 669, 3721, 4081, 4783, 4904, 3942, 4098, 566, 3237, 4236, 2]);