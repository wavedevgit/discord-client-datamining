// modules/double_tap_to_react/native/DoubleTapToReactChatInputBanner.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun89761: for (var _fun89761_ip = 0;;) switch (_fun89761_ip) {
        case 0:
            var4 = require;
            var10 = metroImportDefault;
            var2 = exports;
            var5 = dependencyMap;
            var _closure1_slot0 = var4;
            var _closure1_slot1 = var10;
            var _closure1_slot2 = var5;
            var0 = function arg0() {
                _fun89762: for (var _fun89762_ip = 0;;) switch (_fun89762_ip) {
                    case 0:
                        var0 = arg0;
                        var23 = var0.emoji;
                        var12 = var0.handleDismissBanner;
                        var0 = _closure1_slot13;
                        var3 = undefined;
                        var10 = var0.bind(var3)();
                        var1 = _closure1_slot0;
                        var13 = _closure1_slot2;
                        var0 = 10;
                        var0 = var13[var0];
                        var4 = var1.bind(var3)(var0);
                        var2 = var4.useStateFromStores;
                        var0 = _closure1_slot5;
                        var1 = new Array(1);
                        var1[0] = var0;
                        var0 = function() { // Environment: var22
                            var0 = _closure1_slot5;
                            var0 = var0.useReducedMotion;
                            return var0;
                        };
                        var17 = var2.bind(var4)(var1, var0);
                        var2 = _closure1_slot10;
                        var1 = _closure1_slot4;
                        var0 = {};
                        var4 = var10.container;
                        var0.style = var4;
                        var6 = _closure1_slot10;
                        var5 = _closure1_slot4;
                        var4 = {};
                        var7 = var10.emojiContainer;
                        var4.style = var7;
                        var11 = _closure1_slot9;
                        var9 = _closure1_slot1;
                        var7 = 11;
                        var7 = var13[var7];
                        var9 = var9.bind(var3)(var7);
                        var7 = {};
                        var13 = var10.emoji;
                        var7.style = var13;
                        var13 = var10.emoji;
                        var7.fastImageStyle = var13;
                        var13 = var10.textEmoji;
                        var7.textEmojiStyle = var13;
                        var13 = var23.id;
                        var14 = null;
                        var15 = var14 == var13;
                        var13 = '';
                        if (!var15) {
                            _fun89762_ip = 196;
                            continue _fun89762
                        }
                    case 191:
                        var13 = var23.surrogates;
                    case 196:
                        var7.name = var13;
                        var13 = var23.id;
                        if (!(var14 == var13)) {
                            _fun89762_ip = 216;
                            continue _fun89762
                        }
                    case 209:
                        var13 = var23.url;
                        _fun89762_ip = 283;
                        continue _fun89762;
                    case 216:
                        var15 = _closure1_slot1;
                        var16 = _closure1_slot2;
                        var14 = 12;
                        var14 = var16[var14];
                        var16 = var15.bind(var3)(var14);
                        var15 = var16.getEmojiURL;
                        var14 = {};
                        var18 = var23.id;
                        var14.id = var18;
                        var17 = !var17;
                        if (!var17) {
                            _fun89762_ip = 265;
                            continue _fun89762
                        }
                    case 259:
                        var17 = var23.animated;
                    case 265:
                        var14.animated = var17;
                        var17 = _closure1_slot8;
                        var14.size = var17;
                        var13 = var15.bind(var16)(var14);
                    case 283:
                        var7.src = var13;
                        var9 = var11.bind(var3)(var9, var7);
                        var7 = new Array(2);
                        var7[0] = var9;
                        var16 = _closure1_slot9;
                        var9 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var15 = 13;
                        var13 = var11[var15];
                        var13 = var9.bind(var3)(var13);
                        var14 = var13.Text;
                        var13 = {
                            'variant': 'heading-xl/semibold',
                            'color': 'interactive-text-default',
                            'children': '1'
                        };
                        var13 = var16.bind(var3)(var14, var13);
                        var7[1] = var13;
                        var4.children = var7;
                        var5 = var6.bind(var3)(var5, var4);
                        var4 = new Array(3);
                        var4[0] = var5;
                        var7 = _closure1_slot10;
                        var6 = _closure1_slot4;
                        var5 = {};
                        var13 = var10.text;
                        var5.style = var13;
                        var17 = _closure1_slot10;
                        var16 = _closure1_slot4;
                        var14 = {};
                        var13 = var10.header;
                        var14.style = var13;
                        var20 = _closure1_slot9;
                        var13 = var11[var15];
                        var13 = var9.bind(var3)(var13);
                        var19 = var13.Text;
                        var18 = {
                            'variant': 'text-md/semibold',
                            'color': 'mobile-text-heading-primary'
                        };
                        var13 = 14;
                        var21 = var11[var13];
                        var21 = var9.bind(var3)(var21);
                        var25 = var21.intl;
                        var24 = var25.string;
                        var21 = var11[var13];
                        var21 = var9.bind(var3)(var21);
                        var21 = var21.t;
                        var21 = var21["6RUX7d"];
                        var21 = var24.bind(var25)(var21);
                        var18.children = var21;
                        var19 = var20.bind(var3)(var19, var18);
                        var18 = new Array(2);
                        var18[0] = var19;
                        var21 = _closure1_slot9;
                        var19 = 15;
                        var19 = var11[var19];
                        var19 = var9.bind(var3)(var19);
                        var20 = var19.DoubleTapNewBadge;
                        var19 = {};
                        var19 = var21.bind(var3)(var20, var19);
                        var18[1] = var19;
                        var14.children = var18;
                        var16 = var17.bind(var3)(var16, var14);
                        var14 = new Array(2);
                        var14[0] = var16;
                        var17 = _closure1_slot9;
                        var15 = var11[var15];
                        var15 = var9.bind(var3)(var15);
                        var16 = var15.Text;
                        var15 = {
                            'variant': 'text-xs/medium',
                            'color': 'text-subtle'
                        };
                        var18 = var11[var13];
                        var18 = var9.bind(var3)(var18);
                        var21 = var18.intl;
                        var20 = var21.format;
                        var18 = var11[var13];
                        var18 = var9.bind(var3)(var18);
                        var18 = var18.t;
                        var19 = var18["5/l2rR"];
                        var18 = {};
                        var23 = var23.name;
                        var18.emojiName = var23;
                        var23 = function arg0, arg1() {
                            var4 = _closure1_slot9;
                            var1 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 13;
                            var0 = var2[var0];
                            var3 = undefined;
                            var0 = var1.bind(var3)(var0);
                            var2 = var0.Text;
                            var1 = {
                                'variant': 'text-xs/bold',
                                'color': 'text-strong'
                            };
                            var0 = arg0;
                            var1.children = var0;
                            var0 = arg1;
                            var0 = var4.bind(var3)(var2, var1, var0);
                            return var0;
                        };
                        var18.emojiNameHook = var23;
                        var22 = function arg0, arg1() {
                            var4 = _closure1_slot9;
                            var1 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 13;
                            var0 = var2[var0];
                            var3 = undefined;
                            var0 = var1.bind(var3)(var0);
                            var2 = var0.Text;
                            var1 = {
                                'variant': 'text-xs/medium',
                                'color': 'text-brand'
                            };
                            var0 = arg0;
                            var1.children = var0;
                            var0 = arg1;
                            var0 = var4.bind(var3)(var2, var1, var0);
                            return var0;
                        };
                        var18.tapHereHook = var22;
                        var18 = var20.bind(var21)(var19, var18);
                        var15.children = var18;
                        var15 = var17.bind(var3)(var16, var15);
                        var14[1] = var15;
                        var5.children = var14;
                        var5 = var7.bind(var3)(var6, var5);
                        var4[1] = var5;
                        var7 = _closure1_slot9;
                        var5 = 16;
                        var5 = var11[var5];
                        var5 = var9.bind(var3)(var5);
                        var6 = var5.PressableOpacity;
                        var5 = {
                            'hitSlop': 8,
                            'accessibilityRole': 'button'
                        };
                        var14 = var11[var13];
                        var14 = var9.bind(var3)(var14);
                        var15 = var14.intl;
                        var14 = var15.string;
                        var13 = var11[var13];
                        var13 = var9.bind(var3)(var13);
                        var13 = var13.t;
                        var13 = var13.cpT0Cq;
                        var13 = var14.bind(var15)(var13);
                        var5.accessibilityLabel = var13;
                        var5.onPress = var12;
                        var10 = var10.closeButton;
                        var5.style = var10;
                        var10 = _closure1_slot9;
                        var8 = 17;
                        var8 = var11[var8];
                        var8 = var9.bind(var3)(var8);
                        var9 = var8.XSmallIcon;
                        var8 = {};
                        var11 = 'sm';
                        var8.size = var11;
                        var8 = var10.bind(var3)(var9, var8);
                        var5.children = var8;
                        var5 = var7.bind(var3)(var6, var5);
                        var4[2] = var5;
                        var0.children = var4;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                }
            };
            var _closure1_slot15 = var0;
            var0 = global;
            var7 = var0.Object;
            var6 = var7.defineProperty;
            var3 = {};
            var0 = true;
            var3.value = var0;
            var0 = '__esModule';
            var0 = var6.bind(var7)(var2, var0, var3);
            var6 = 0;
            var7 = var5[var6];
            var3 = arg3;
            var0 = undefined;
            var3 = var3.bind(var0)(var7);
            var _closure1_slot3 = var3;
            var3 = 1;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var3 = var3.View;
            var _closure1_slot4 = var3;
            var3 = 2;
            var3 = var5[var3];
            var3 = var10.bind(var0)(var3);
            var _closure1_slot5 = var3;
            var3 = 3;
            var3 = var5[var3];
            var3 = var10.bind(var0)(var3);
            var _closure1_slot6 = var3;
            var3 = 4;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var3 = var3.ContentDismissActionType;
            var _closure1_slot7 = var3;
            var3 = 5;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var3 = var3.EMOJI_URL_BASE_SIZE;
            var _closure1_slot8 = var3;
            var3 = 6;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var7 = var3.jsx;
            var _closure1_slot9 = var7;
            var7 = var3.jsxs;
            var _closure1_slot10 = var7;
            var3 = var3.Fragment;
            var _closure1_slot11 = var3;
            var3 = {};
            var3.cornerRadius = var6;
            var _closure1_slot12 = var3;
            var3 = 7;
            var3 = var5[var3];
            var7 = var4.bind(var0)(var3);
            var6 = var7.createStyles;
            var3 = {};
            var8 = {
                'borderTopWidth': 1,
                'borderColor': null,
                'overflow': 'hidden'
            };
            var9 = 8;
            var11 = var5[var9];
            var11 = var10.bind(var0)(var11);
            var11 = var11.colors;
            var11 = var11.BORDER_SUBTLE;
            var8.borderColor = var11;
            var11 = var5[var9];
            var11 = var10.bind(var0)(var11);
            var11 = var11.colors;
            var11 = var11.BACKGROUND_SURFACE_HIGH;
            var8.backgroundColor = var11;
            var3.animatedContainer = var8;
            var8 = {
                'opacity': 0,
                'position': 'absolute'
            };
            var3.measurement = var8;
            var12 = 'center';
            var8 = {
                'display': 'flex',
                'flexDirection': 'row',
                'alignItems': 'center',
                'paddingVertical': 12,
                'paddingLeft': 16,
                'paddingRight': 12
            };
            var3.container = var8;
            var8 = {};
            var11 = var5[var9];
            var11 = var10.bind(var0)(var11);
            var11 = var11.colors;
            var11 = var11.BACKGROUND_SURFACE_HIGH;
            var8.backgroundColor = var11;
            var3.highlight = var8;
            var8 = {
                'marginHorizontal': 12,
                'flex': 1
            };
            var3.text = var8;
            var8 = {
                'borderWidth': 2,
                'borderColor': null,
                'backgroundColor': null,
                'borderRadius': null,
                'flexDirection': 'row',
                'gap': 8,
                'alignItems': 'center',
                'justifyContent': 'center',
                'padding': 12
            };
            var11 = var5[var9];
            var11 = var10.bind(var0)(var11);
            var11 = var11.colors;
            var11 = var11.BORDER_STRONG;
            var8.borderColor = var11;
            var11 = var5[var9];
            var11 = var10.bind(var0)(var11);
            var11 = var11.colors;
            var11 = var11.CARD_BACKGROUND_DEFAULT;
            var8.backgroundColor = var11;
            var11 = var5[var9];
            var11 = var10.bind(var0)(var11);
            var11 = var11.radii;
            var11 = var11.md;
            var8.borderRadius = var11;
            var3.emojiContainer = var8;
            var14 = 28;
            var8 = {
                'width': 28,
                'height': 28
            };
            var3.emoji = var8;
            var8 = {};
            var11 = 9;
            var13 = var5[var11];
            var15 = var4.bind(var0)(var13);
            var13 = var15.isIOS;
            var15 = var13.bind(var15)();
            var13 = 22;
            if (!var15) {
                _fun89761_ip = 570;
                continue _fun89761
            }
        case 567:
            var13 = var14;
        case 570:
            var8.fontSize = var13;
            var8.textAlign = var12;
            var11 = var5[var11];
            var12 = var4.bind(var0)(var11);
            var11 = var12.isIOS;
            var12 = var11.bind(var12)();
            var11 = undefined;
            if (!var12) {
                _fun89761_ip = 606;
                continue _fun89761
            }
        case 603:
            var11 = 32;
        case 606:
            var8.lineHeight = var11;
            var11 = var5[var9];
            var11 = var10.bind(var0)(var11);
            var11 = var11.colors;
            var11 = var11.INTERACTIVE_TEXT_DEFAULT;
            var8.color = var11;
            var3.textEmoji = var8;
            var8 = {};
            var9 = var5[var9];
            var9 = var10.bind(var0)(var9);
            var9 = var9.colors;
            var9 = var9.WHITE;
            var8.tintColor = var9;
            var3.icon = var8;
            var8 = {
                'flexDirection': 'row',
                'alignItems': 'center',
                'gap': 6
            };
            var3.header = var8;
            var8 = {};
            var9 = 'flex-start';
            var8.alignSelf = var9;
            var3.closeButton = var8;
            var3 = var6.bind(var7)(var3);
            var _closure1_slot13 = var3;
            var3 = {};
            var6 = 'function DoubleTapToReactChatInputBannerTsx1(){const{useReducedMotion,height,withDelay,withTiming,DECELERATED_EASING}=this.__closure;if(useReducedMotion){return{height:height.get()};}return{height:withDelay(200,withTiming(height.get(),{duration:300,easing:DECELERATED_EASING}))};}';
            var3.code = var6;
            var _closure1_slot14 = var3;
            var3 = 29;
            var3 = var5[var3];
            var5 = var4.bind(var0)(var3);
            var4 = var5.fileFinishedImporting;
            var3 = 'modules/double_tap_to_react/native/DoubleTapToReactChatInputBanner.tsx';
            var3 = var4.bind(var5)(var3);
            var1 = function() {
                _fun89766: for (var _fun89766_ip = 0;;) switch (_fun89766_ip) {
                    case 0:
                        var1 = _closure1_slot13;
                        var4 = undefined;
                        var13 = var1.bind(var4)();
                        var10 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var2 = 10;
                        var1 = var11[var2];
                        var6 = var10.bind(var4)(var1);
                        var5 = var6.useStateFromStoresObject;
                        var1 = _closure1_slot6;
                        var3 = new Array(1);
                        var3[0] = var1;
                        var1 = function() { // Environment: var0
                            var0 = {};
                            var1 = _closure1_slot6;
                            var2 = var1.shouldShow;
                            var0.shouldShowBanner = var2;
                            var2 = var1.bannerEmoji;
                            var0.emoji = var2;
                            var1 = var1.bannerHeight;
                            var0.bannerHeight = var1;
                            return var0;
                        };
                        var3 = var5.bind(var6)(var3, var1);
                        var16 = var3.emoji;
                        var _closure2_slot0 = var16;
                        var1 = var3.shouldShowBanner;
                        var _closure2_slot1 = var1;
                        var8 = var3.bannerHeight;
                        var _closure2_slot2 = var8;
                        var2 = var11[var2];
                        var6 = var10.bind(var4)(var2);
                        var5 = var6.useStateFromStores;
                        var2 = _closure1_slot5;
                        var3 = new Array(1);
                        var3[0] = var2;
                        var2 = function() { // Environment: var0
                            var0 = _closure1_slot5;
                            var0 = var0.useReducedMotion;
                            return var0;
                        };
                        var9 = var5.bind(var6)(var3, var2);
                        var _closure2_slot3 = var9;
                        var3 = _closure1_slot1;
                        var2 = 18;
                        var2 = var11[var2];
                        var3 = var3.bind(var4)(var2);
                        var2 = {};
                        var5 = 19;
                        var6 = var11[var5];
                        var6 = var10.bind(var4)(var6);
                        var6 = var6.ImpressionTypes;
                        var6 = var6.VIEW;
                        var2.type = var6;
                        var5 = var11[var5];
                        var5 = var10.bind(var4)(var5);
                        var5 = var5.ImpressionNames;
                        var5 = var5.DOUBLE_TAP_REACT_UPSELL;
                        var2.name = var5;
                        var2 = var3.bind(var4)(var2);
                        var6 = 20;
                        var2 = var11[var6];
                        var5 = var10.bind(var4)(var2);
                        var3 = var5.useSharedValue;
                        var2 = 0;
                        var5 = var3.bind(var5)(var2);
                        var _closure2_slot4 = var5;
                        var3 = _closure1_slot3;
                        var7 = var3.useEffect;
                        var2 = new Array(3);
                        var2[0] = var5;
                        var2[1] = var8;
                        var2[2] = var1;
                        var1 = function() { // Environment: var0
                            _fun89769: for (var _fun89769_ip = 0;;) switch (_fun89769_ip) {
                                case 0:
                                    var3 = _closure2_slot1;
                                    var2 = _closure2_slot4;
                                    var1 = var2.set;
                                    if (var3) {
                                        _fun89769_ip = 28;
                                        continue _fun89769
                                    }
                                case 19:
                                    var3 = 0;
                                    var3 = var1.bind(var2)(var3);
                                    _fun89769_ip = 37;
                                    continue _fun89769;
                                case 28:
                                    var0 = _closure2_slot2;
                                    var0 = var1.bind(var2)(var0);
                                case 37:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var1 = var7.bind(var3)(var1, var2);
                        var1 = var11[var6];
                        var7 = var10.bind(var4)(var1);
                        var2 = var7.useAnimatedStyle;
                        var1 = function() {
                            _fun89770: for (var _fun89770_ip = 0;;) switch (_fun89770_ip) {
                                case 0:
                                    var0 = _closure2_slot3;
                                    var1 = {};
                                    if (var0) {
                                        _fun89770_ip = 132;
                                        continue _fun89770
                                    }
                                case 12:
                                    var10 = _closure1_slot0;
                                    var11 = _closure1_slot2;
                                    var0 = 20;
                                    var0 = var11[var0];
                                    var9 = undefined;
                                    var5 = var10.bind(var9)(var0);
                                    var4 = var5.withDelay;
                                    var0 = 21;
                                    var0 = var11[var0];
                                    var7 = var10.bind(var9)(var0);
                                    var6 = var7.withTiming;
                                    var3 = _closure2_slot4;
                                    var0 = var3.get;
                                    var3 = var0.bind(var3)();
                                    var0 = {};
                                    var8 = 300;
                                    var0.duration = var8;
                                    var8 = 22;
                                    var8 = var11[var8];
                                    var8 = var10.bind(var9)(var8);
                                    var8 = var8.DECELERATED_EASING;
                                    var0.easing = var8;
                                    var3 = var6.bind(var7)(var3, var0);
                                    var0 = 200;
                                    var0 = var4.bind(var5)(var0, var3);
                                    var1.height = var0;
                                    var0 = var1;
                                    _fun89770_ip = 152;
                                    continue _fun89770;
                                case 132:
                                    var3 = _closure2_slot4;
                                    var2 = var3.get;
                                    var2 = var2.bind(var3)();
                                    var1.height = var2;
                                    var0 = var1;
                                case 152:
                                    return var0;
                            }
                        };
                        var8 = {};
                        var8.useReducedMotion = var9;
                        var8.height = var5;
                        var9 = var11[var6];
                        var9 = var10.bind(var4)(var9);
                        var9 = var9.withDelay;
                        var8.withDelay = var9;
                        var9 = 21;
                        var9 = var11[var9];
                        var9 = var10.bind(var4)(var9);
                        var9 = var9.withTiming;
                        var8.withTiming = var9;
                        var9 = 22;
                        var9 = var11[var9];
                        var9 = var10.bind(var4)(var9);
                        var9 = var9.DECELERATED_EASING;
                        var8.DECELERATED_EASING = var9;
                        var1.__closure = var8;
                        var8 = 14971794499123.0;
                        var1.__workletHash = var8;
                        var8 = _closure1_slot14;
                        var1.__initData = var8;
                        var10 = var2.bind(var7)(var1);
                        var7 = var3.useCallback;
                        var2 = function(arg0) { // Environment: var0
                            var0 = arg0;
                            var1 = var0.nativeEvent;
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 23;
                            var2 = var2[var0];
                            var0 = undefined;
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.updateVisibleBannerHeight;
                            var1 = var1.layout;
                            var1 = var1.height;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                        };
                        var1 = new Array(0);
                        var9 = var7.bind(var3)(var2, var1);
                        var7 = var3.useCallback;
                        var2 = new Array(1);
                        var2[0] = var16;
                        var1 = function() { // Environment: var0
                            _fun89772: for (var _fun89772_ip = 0;;) switch (_fun89772_ip) {
                                case 0:
                                    var3 = _closure1_slot0;
                                    var1 = _closure1_slot2;
                                    var0 = 23;
                                    var1 = var1[var0];
                                    var0 = undefined;
                                    var3 = var3.bind(var0)(var1);
                                    var1 = var3.hideChatInputBanner;
                                    var1 = var1.bind(var3)();
                                    var4 = _closure2_slot0;
                                    var3 = null;
                                    if (!(var3 != var4)) {
                                        _fun89772_ip = 155;
                                        continue _fun89772
                                    }
                                case 48:
                                    var4 = _closure1_slot1;
                                    var7 = _closure1_slot2;
                                    var3 = 24;
                                    var3 = var7[var3];
                                    var5 = var4.bind(var0)(var3);
                                    var4 = var5.openLazy;
                                    var6 = _closure1_slot0;
                                    var2 = 26;
                                    var2 = var7[var2];
                                    var8 = var6.bind(var0)(var2);
                                    var2 = 25;
                                    var3 = var7[var2];
                                    var2 = var7.paths;
                                    var3 = var8.bind(var0)(var3, var2);
                                    var2 = {};
                                    var1 = _closure2_slot0;
                                    var2.emoji = var1;
                                    var1 = 27;
                                    var1 = var7[var1];
                                    var1 = var6.bind(var0)(var1);
                                    var1 = var1.markDoubleTapDismissed;
                                    var2.markAsDismissed = var1;
                                    var1 = 'DoubleTapToReactActionSheet';
                                    var1 = var4.bind(var5)(var3, var1, var2);
                                case 155:
                                    return var0;
                            }
                        };
                        var17 = var7.bind(var3)(var1, var2);
                        var2 = var3.useCallback;
                        var1 = new Array(1);
                        var1[0] = var5;
                        var0 = function() { // Environment: var0
                            var2 = _closure2_slot4;
                            var1 = var2.set;
                            var0 = 0;
                            var0 = var1.bind(var2)(var0);
                            var0 = global;
                            var6 = var0.setTimeout;
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var0 = 23;
                            var2 = var4[var0];
                            var0 = undefined;
                            var2 = var3.bind(var0)(var2);
                            var5 = var2.hideChatInputBanner;
                            var2 = 500;
                            var2 = var6.bind(var0)(var5, var2);
                            var2 = 27;
                            var2 = var4[var2];
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.markDoubleTapDismissed;
                            var1 = _closure1_slot7;
                            var1 = var1.USER_DISMISS;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                        };
                        var15 = var2.bind(var3)(var0, var1);
                        var0 = null;
                        var1 = var0 == var16;
                        if (var1) {
                            _fun89766_ip = 738;
                            continue _fun89766
                        }
                    case 502:
                        var3 = _closure1_slot10;
                        var2 = _closure1_slot11;
                        var1 = {};
                        var8 = _closure1_slot9;
                        var7 = _closure1_slot4;
                        var5 = {};
                        var11 = var13.measurement;
                        var5.style = var11;
                        var5.onLayout = var9;
                        var11 = _closure1_slot9;
                        var14 = _closure1_slot15;
                        var9 = {};
                        var9.emoji = var16;
                        var9.handleDismissBanner = var15;
                        var9 = var11.bind(var4)(var14, var9);
                        var5.children = var9;
                        var7 = var8.bind(var4)(var7, var5);
                        var5 = new Array(2);
                        var5[0] = var7;
                        var8 = _closure1_slot9;
                        var7 = _closure1_slot1;
                        var18 = _closure1_slot2;
                        var6 = var18[var6];
                        var6 = var7.bind(var4)(var6);
                        var7 = var6.View;
                        var6 = {};
                        var9 = new Array(2);
                        var9[0] = var10;
                        var10 = var13.animatedContainer;
                        var9[1] = var10;
                        var6.style = var9;
                        var11 = _closure1_slot9;
                        var10 = _closure1_slot0;
                        var9 = 28;
                        var9 = var18[var9];
                        var9 = var10.bind(var4)(var9);
                        var10 = var9.AnimatedPressableHighlight;
                        var9 = {};
                        var9.onPress = var17;
                        var13 = var13.highlight;
                        var9.style = var13;
                        var13 = _closure1_slot12;
                        var9.androidRippleConfig = var13;
                        var13 = _closure1_slot9;
                        var12 = {};
                        var12.emoji = var16;
                        var12.handleDismissBanner = var15;
                        var12 = var13.bind(var4)(var14, var12);
                        var9.children = var12;
                        var9 = var11.bind(var4)(var10, var9);
                        var6.children = var9;
                        var6 = var8.bind(var4)(var7, var6);
                        var5[1] = var6;
                        var1.children = var5;
                        var0 = var3.bind(var4)(var2, var1);
                    case 738:
                        return var0;
                }
            };
            var2.DoubleTapToReactChatInputBanner = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1298, 11601, 1369, 1624, 33, 1297, 671, 478, 632, 5769, 1417, 3941, 1234, 11663, 4902, 4732, 5214, 481, 3720, 4097, 4884, 7006, 3278, 11664, 1307, 6999, 7025, 2]);