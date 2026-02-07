// modules/main_tabs_v2/native/sidebar/details/header_v2/ChannelDetailsNavigationBar.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var5;
    var0 = function arg0, arg1, arg2() {
        var3 = arg0;
        var2 = var3.navigate;
        var1 = {};
        var0 = arg1;
        var1.screen = var0;
        var0 = arg2;
        var1.channelId = var0;
        var0 = 'channel-details-navigation-bar';
        var1.source = var0;
        var0 = 'sidebar';
        var0 = var2.bind(var3)(var0, var1);
        var0 = undefined;
        return var0;
    };
    var _closure1_slot28 = var0;
    var0 = function arg0() {
        var0 = arg0;
        return var0;
    };
    var _closure1_slot29 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = arg3;
    var0 = undefined;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.setIsChannelDetailsSearchActive;
    var _closure1_slot9 = var7;
    var3 = var3.useIsChannelDetailsSearchActive;
    var _closure1_slot10 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.ChannelDetailsButtonTypes;
    var _closure1_slot11 = var7;
    var3 = var3.ChannelDetailsNavigatorScreens;
    var _closure1_slot12 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ChannelSettingsSections;
    var _closure1_slot13 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.SearchEntrypointAnalyticsLocations;
    var _closure1_slot14 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot15 = var7;
    var3 = var3.jsxs;
    var _closure1_slot16 = var3;
    var3 = 11;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {
        'position': 'relative',
        'zIndex': 1
    };
    var13 = 12;
    var10 = var5[var13];
    var10 = var4.bind(var0)(var10);
    var10 = var10.SEARCH_BAR_HEIGHT;
    var9.height = var10;
    var11 = 13;
    var10 = var5[var11];
    var10 = var12.bind(var0)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_8;
    var9.marginTop = var10;
    var3.container = var9;
    var9 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'paddingHorizontal': null,
        'paddingVertical': null,
        'position': 'absolute'
    };
    var10 = var5[var11];
    var10 = var12.bind(var0)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_16;
    var9.paddingHorizontal = var10;
    var10 = var5[var11];
    var10 = var12.bind(var0)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_4;
    var9.paddingVertical = var10;
    var10 = 'absolute';
    var13 = var5[var13];
    var13 = var4.bind(var0)(var13);
    var13 = var13.SEARCH_BAR_HEIGHT;
    var9.height = var13;
    var3.navigationHeader = var9;
    var9 = {
        'flex': 1,
        'flexDirection': 'row',
        'gap': null,
        'justifyContent': 'flex-end'
    };
    var11 = var5[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_12;
    var9.gap = var11;
    var3.buttonsContainer = var9;
    var9 = {};
    var9.position = var10;
    var3.searchHeader = var9;
    var9 = {};
    var9.position = var10;
    var3.navItem = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot17 = var3;
    var3 = {};
    var7 = 'buttons';
    var3.BUTTONS = var7;
    var7 = 'search';
    var3.SEARCH = var7;
    var _closure1_slot18 = var3;
    var3 = function arg0() {
        _fun107570: for (var _fun107570_ip = 0;;) switch (_fun107570_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.channelId;
                var _closure2_slot0 = var8;
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var2 = 14;
                var2 = var11[var2];
                var4 = undefined;
                var6 = var10.bind(var4)(var2);
                var5 = var6.useStateFromStores;
                var2 = _closure1_slot7;
                var3 = new Array(3);
                var3[0] = var2;
                var2 = _closure1_slot6;
                var3[1] = var2;
                var2 = _closure1_slot8;
                var3[2] = var2;
                var2 = function() { // Environment: var1
                    _fun107571: for (var _fun107571_ip = 0;;) switch (_fun107571_ip) {
                        case 0:
                            var2 = _closure1_slot7;
                            var1 = var2.getChannel;
                            var0 = _closure2_slot0;
                            var2 = var1.bind(var2)(var0);
                            var0 = null;
                            var0 = var0 != var2;
                            if (!var0) {
                                _fun107571_ip = 102;
                                continue _fun107571
                            }
                        case 33:
                            var1 = var2.isThread;
                            var1 = var1.bind(var2)();
                            if (var1) {
                                _fun107571_ip = 79;
                                continue _fun107571
                            }
                        case 46:
                            var6 = _closure1_slot8;
                            var5 = var6.isChannelMuted;
                            var1 = var2.getGuildId;
                            var4 = var1.bind(var2)();
                            var1 = var2.id;
                            var1 = var5.bind(var6)(var4, var1);
                            _fun107571_ip = 99;
                            continue _fun107571;
                        case 79:
                            var4 = _closure1_slot6;
                            var3 = var4.isMuted;
                            var2 = var2.id;
                            var1 = var3.bind(var4)(var2);
                        case 99:
                            var0 = var1;
                        case 102:
                            return var0;
                    }
                };
                var5 = var5.bind(var6)(var3, var2);
                var2 = 15;
                var2 = var11[var2];
                var3 = var10.bind(var4)(var2);
                var2 = var3.useNavigation;
                var7 = var2.bind(var3)();
                var _closure2_slot1 = var7;
                var6 = _closure1_slot3;
                var3 = var6.useCallback;
                var2 = new Array(2);
                var2[0] = var8;
                var2[1] = var7;
                var1 = function() { // Environment: var1
                    var4 = _closure1_slot28;
                    var3 = _closure2_slot1;
                    var1 = _closure1_slot12;
                    var2 = var1.MUTE;
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var1 = var4.bind(var0)(var3, var2, var1);
                    return var0;
                };
                var6 = var3.bind(var6)(var1, var2);
                var3 = _closure1_slot15;
                var1 = 16;
                var1 = var11[var1];
                var1 = var10.bind(var4)(var1);
                var2 = var1.IconButton;
                var1 = {};
                var7 = 17;
                var8 = var11[var7];
                var8 = var10.bind(var4)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var7 = var11[var7];
                var7 = var10.bind(var4)(var7);
                var7 = var7.t;
                var7 = var7.w4m945;
                var7 = var8.bind(var9)(var7);
                var1.accessibilityLabel = var7;
                var1.onPress = var6;
                var6 = 'tertiary';
                var1.variant = var6;
                var6 = 'sm';
                var1.size = var6;
                var6 = _closure1_slot1;
                var8 = _closure1_slot2;
                if (var5) {
                    _fun107570_ip = 260;
                    continue _fun107570
                }
            case 251:
                var5 = 19;
                var5 = var8[var5];
                _fun107570_ip = 267;
                continue _fun107570;
            case 260:
                var7 = 18;
                var5 = var8[var7];
            case 267:
                var5 = var6.bind(var4)(var5);
                var1.icon = var5;
                var0 = _closure1_slot11;
                var0 = var0.MUTE;
                var0 = var3.bind(var4)(var2, var1, var0);
                return var0;
        }
    };
    var _closure1_slot19 = var3;
    var3 = function arg0() {
        var0 = arg0;
        var5 = var0.channelId;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot3;
        var3 = var4.useCallback;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() { // Environment: var1
            _fun107574: for (var _fun107574_ip = 0;;) switch (_fun107574_ip) {
                case 0:
                    var6 = _closure1_slot9;
                    var5 = _closure2_slot0;
                    var0 = undefined;
                    var4 = true;
                    var3 = 'action';
                    var3 = var6.bind(var0)(var5, var4, var3);
                    var4 = _closure1_slot7;
                    var3 = var4.getChannel;
                    var3 = var3.bind(var4)(var5);
                    var4 = null;
                    if (!(var4 != var3)) {
                        _fun107574_ip = 183;
                        continue _fun107574
                    }
                case 52:
                    var4 = var3.getGuildId;
                    var7 = var4.bind(var3)();
                    var4 = var3.isThread;
                    var6 = var4.bind(var3)();
                    var5 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var4 = 20;
                    var4 = var8[var4];
                    var5 = var5.bind(var0)(var4);
                    var4 = var5.getChannelDetailsSearchContext;
                    var2 = _closure2_slot0;
                    var5 = var4.bind(var5)(var2, var7, var6);
                    var2 = var3.isPrivate;
                    var3 = var2.bind(var3)();
                    var2 = _closure1_slot14;
                    if (var3) {
                        _fun107574_ip = 134;
                        continue _fun107574
                    }
                case 126:
                    var4 = var2.CHANNEL_DETAILS_HEADER;
                    _fun107574_ip = 140;
                    continue _fun107574;
                case 134:
                    var4 = var2.INDIVIDUAL_DM;
                case 140:
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 21;
                    var1 = var3[var1];
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.trackSearchOpened;
                    var1 = {};
                    var1.searchContext = var5;
                    var1.searchLocation = var4;
                    var1 = var2.bind(var3)(var1);
                case 183:
                    return var0;
            }
        };
        var5 = var3.bind(var4)(var1, var2);
        var4 = _closure1_slot15;
        var10 = _closure1_slot0;
        var7 = _closure1_slot2;
        var1 = 16;
        var1 = var7[var1];
        var3 = undefined;
        var1 = var10.bind(var3)(var1);
        var2 = var1.IconButton;
        var1 = {};
        var6 = 17;
        var8 = var7[var6];
        var8 = var10.bind(var3)(var8);
        var9 = var8.intl;
        var8 = var9.string;
        var6 = var7[var6];
        var6 = var10.bind(var3)(var6);
        var6 = var6.t;
        var6 = var6["5h0QOP"];
        var6 = var8.bind(var9)(var6);
        var1.accessibilityLabel = var6;
        var1.onPress = var5;
        var5 = 'tertiary';
        var1.variant = var5;
        var5 = 'sm';
        var1.size = var5;
        var6 = _closure1_slot1;
        var5 = 22;
        var5 = var7[var5];
        var5 = var6.bind(var3)(var5);
        var1.icon = var5;
        var0 = _closure1_slot11;
        var0 = var0.SEARCH;
        var0 = var4.bind(var3)(var2, var1, var0);
        return var0;
    };
    var _closure1_slot20 = var3;
    var3 = function arg0() {
        var0 = arg0;
        var8 = var0.channel;
        var _closure2_slot0 = var8;
        var10 = _closure1_slot0;
        var7 = _closure1_slot2;
        var2 = 15;
        var2 = var7[var2];
        var4 = undefined;
        var3 = var10.bind(var4)(var2);
        var2 = var3.useNavigation;
        var6 = var2.bind(var3)();
        var _closure2_slot1 = var6;
        var5 = _closure1_slot3;
        var3 = var5.useCallback;
        var2 = new Array(2);
        var2[0] = var8;
        var2[1] = var6;
        var1 = function() { // Environment: var1
            _fun107576: for (var _fun107576_ip = 0;;) switch (_fun107576_ip) {
                case 0:
                    var2 = _closure2_slot0;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun107576_ip = 172;
                        continue _fun107576
                    }
                case 16:
                    var2 = _closure2_slot0;
                    var1 = var2.isDM;
                    var1 = var1.bind(var2)();
                    if (var1) {
                        _fun107576_ip = 127;
                        continue _fun107576
                    }
                case 33:
                    var2 = _closure2_slot0;
                    var1 = var2.isMultiUserDM;
                    var1 = var1.bind(var2)();
                    if (var1) {
                        _fun107576_ip = 127;
                        continue _fun107576
                    }
                case 50:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var1 = 24;
                    var1 = var4[var1];
                    var5 = undefined;
                    var6 = var3.bind(var5)(var1);
                    var4 = var6.init;
                    var1 = _closure2_slot0;
                    var3 = var1.id;
                    var3 = var4.bind(var6)(var3);
                    var4 = _closure1_slot28;
                    var3 = _closure2_slot1;
                    var2 = _closure1_slot13;
                    var2 = var2.OVERVIEW;
                    var1 = var1.id;
                    var1 = var4.bind(var5)(var3, var2, var1);
                    _fun107576_ip = 172;
                    continue _fun107576;
                case 127:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 23;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.openChannelLongPressActionSheet;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                case 172:
                    var0 = undefined;
                    return var0;
            }
        };
        var5 = var3.bind(var5)(var1, var2);
        var3 = _closure1_slot15;
        var1 = 16;
        var1 = var7[var1];
        var1 = var10.bind(var4)(var1);
        var2 = var1.IconButton;
        var1 = {
            'accessibilityLabel': null,
            'onPress': null,
            'accessibilityRole': 'button',
            'variant': 'tertiary',
            'size': 'sm'
        };
        var6 = 17;
        var8 = var7[var6];
        var8 = var10.bind(var4)(var8);
        var9 = var8.intl;
        var8 = var9.string;
        var6 = var7[var6];
        var6 = var10.bind(var4)(var6);
        var6 = var6.t;
        var6 = var6["3D5yo/"];
        var6 = var8.bind(var9)(var6);
        var1.accessibilityLabel = var6;
        var1.onPress = var5;
        var6 = _closure1_slot1;
        var5 = 25;
        var5 = var7[var5];
        var5 = var6.bind(var4)(var5);
        var1.icon = var5;
        var0 = _closure1_slot11;
        var0 = var0.SETTINGS;
        var0 = var3.bind(var4)(var2, var1, var0);
        return var0;
    };
    var _closure1_slot21 = var3;
    var3 = {};
    var7 = "function ChannelDetailsNavigationBarTsx1(){const{isActive,withTiming,Easing,runOnJS,cleanUp,width}=this.__closure;return{pointerEvents:isActive?'auto':'none',opacity:withTiming(isActive?1:0,{duration:200,easing:Easing.bezier(0.25,0.1,0.25,1.0)},'animate-always',function(finished){if(finished)runOnJS(cleanUp)();}),width:width};}";
    var3.code = var7;
    var _closure1_slot22 = var3;
    var3 = {};
    var7 = 'function ChannelDetailsNavigationBarTsx2(finished){const{runOnJS,cleanUp}=this.__closure;if(finished)runOnJS(cleanUp)();}';
    var3.code = var7;
    var _closure1_slot23 = var3;
    var7 = var6.forwardRef;
    var3 = function(arg0, arg1) { // Environment: var1
        var0 = arg0;
        var9 = var0.channel;
        var8 = var0.onSuggestionsLayoutMeasure;
        var7 = var0.suggestionsDismissed;
        var6 = var0.setSuggestionsDismissed;
        var5 = var0.transitionState;
        var13 = var0.width;
        var _closure2_slot0 = var13;
        var14 = var0.cleanUp;
        var _closure2_slot1 = var14;
        var0 = _closure1_slot17;
        var3 = undefined;
        var4 = var0.bind(var3)();
        var16 = _closure1_slot0;
        var10 = _closure1_slot2;
        var0 = 27;
        var0 = var10[var0];
        var0 = var16.bind(var3)(var0);
        var0 = var0.TransitionStates;
        var0 = var0.YEETED;
        var15 = var5 !== var0;
        var _closure2_slot2 = var15;
        var0 = 28;
        var5 = var10[var0];
        var11 = var16.bind(var3)(var5);
        var5 = var11.useAnimatedStyle;
        var2 = function() {
            _fun107578: for (var _fun107578_ip = 0;;) switch (_fun107578_ip) {
                case 0:
                    var0 = {};
                    var3 = _closure2_slot2;
                    var2 = 'none';
                    if (!var3) {
                        _fun107578_ip = 20;
                        continue _fun107578
                    }
                case 16:
                    var2 = 'auto';
                case 20:
                    var0.pointerEvents = var2;
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 29;
                    var3 = var5[var3];
                    var11 = undefined;
                    var7 = var4.bind(var11)(var3);
                    var6 = var7.withTiming;
                    var3 = _closure2_slot2;
                    var5 = 0;
                    if (!var3) {
                        _fun107578_ip = 67;
                        continue _fun107578
                    }
                case 64:
                    var5 = 1;
                case 67:
                    var4 = {};
                    var3 = 200;
                    var4.duration = var3;
                    var10 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var9 = 28;
                    var3 = var12[var9];
                    var3 = var10.bind(var11)(var3);
                    var15 = var3.Easing;
                    var14 = var15.bezier;
                    var13 = 0.25;
                    var18 = 0.1;
                    var16 = 1;
                    var20 = var15;
                    var19 = var13;
                    var17 = var13;
                    var3 = var20[var14](var19, var18, var17, var16, var15);
                    var4.easing = var3;
                    var3 = function arg0() {
                        _fun107579: for (var _fun107579_ip = 0;;) switch (_fun107579_ip) {
                            case 0:
                                var0 = arg0;
                                if (!var0) {
                                    _fun107579_ip = 52;
                                    continue _fun107579
                                }
                            case 6:
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 28;
                                var0 = var1[var0];
                                var1 = undefined;
                                var3 = var2.bind(var1)(var0);
                                var2 = var3.runOnJS;
                                var0 = _closure2_slot1;
                                var0 = var2.bind(var3)(var0);
                                var0 = var0.bind(var1)();
                            case 52:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var8 = {};
                    var9 = var12[var9];
                    var9 = var10.bind(var11)(var9);
                    var9 = var9.runOnJS;
                    var8.runOnJS = var9;
                    var9 = _closure2_slot1;
                    var8.cleanUp = var9;
                    var3.__closure = var8;
                    var8 = 10411737901360.0;
                    var3.__workletHash = var8;
                    var2 = _closure1_slot23;
                    var3.__initData = var2;
                    var17 = 'animate-always';
                    var20 = var7;
                    var19 = var5;
                    var18 = var4;
                    var16 = var3;
                    var2 = var20[var6](var19, var18, var17, var16, var15);
                    var0.opacity = var2;
                    var1 = _closure2_slot0;
                    var0.width = var1;
                    return var0;
            }
        };
        var12 = {};
        var12.isActive = var15;
        var15 = 29;
        var15 = var10[var15];
        var15 = var16.bind(var3)(var15);
        var15 = var15.withTiming;
        var12.withTiming = var15;
        var15 = var10[var0];
        var15 = var16.bind(var3)(var15);
        var15 = var15.Easing;
        var12.Easing = var15;
        var15 = var10[var0];
        var15 = var16.bind(var3)(var15);
        var15 = var15.runOnJS;
        var12.runOnJS = var15;
        var12.cleanUp = var14;
        var12.width = var13;
        var2.__closure = var12;
        var12 = 1270940013897.0;
        var2.__workletHash = var12;
        var12 = _closure1_slot22;
        var2.__initData = var12;
        var11 = var5.bind(var11)(var2);
        var2 = _closure1_slot15;
        var5 = _closure1_slot1;
        var0 = var10[var0];
        var0 = var5.bind(var3)(var0);
        var1 = var0.View;
        var0 = {};
        var12 = var4.searchHeader;
        var4 = new Array(2);
        var4[0] = var12;
        var4[1] = var11;
        var0.style = var4;
        var4 = 30;
        var4 = var10[var4];
        var5 = var5.bind(var3)(var4);
        var4 = {};
        var10 = arg1;
        var4.ref = var10;
        var10 = var9.id;
        var4.channelId = var10;
        var9 = var9.guild_id;
        var4.guildId = var9;
        var4.onSuggestionsLayoutMesure = var8;
        var4.suggestionsDismissed = var7;
        var4.setSuggestionsDismissed = var6;
        var6 = true;
        var4.showBackButton = var6;
        var4 = var2.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var3 = var7.bind(var6)(var3);
    var _closure1_slot24 = var3;
    var3 = {};
    var7 = "function ChannelDetailsNavigationBarTsx3(){const{isActive,withTiming,timingFast,runOnJS,cleanUp,width}=this.__closure;return{pointerEvents:isActive?'auto':'none',opacity:withTiming(isActive?1:0,timingFast,'animate-always',function(finished){if(finished)runOnJS(cleanUp)();}),width:width};}";
    var3.code = var7;
    var _closure1_slot25 = var3;
    var3 = {};
    var7 = 'function ChannelDetailsNavigationBarTsx4(finished){const{runOnJS,cleanUp}=this.__closure;if(finished)runOnJS(cleanUp)();}';
    var3.code = var7;
    var _closure1_slot26 = var3;
    var3 = function arg0() {
        var0 = arg0;
        var12 = var0.channel;
        var _closure2_slot0 = var12;
        var10 = var0.onBackPress;
        var2 = var0.transitionState;
        var13 = var0.width;
        var _closure2_slot1 = var13;
        var15 = var0.cleanUp;
        var _closure2_slot2 = var15;
        var0 = _closure1_slot17;
        var3 = undefined;
        var9 = var0.bind(var3)();
        var11 = _closure1_slot0;
        var14 = _closure1_slot2;
        var0 = 27;
        var0 = var14[var0];
        var0 = var11.bind(var3)(var0);
        var0 = var0.TransitionStates;
        var0 = var0.YEETED;
        var16 = var2 < var0;
        var _closure2_slot3 = var16;
        var0 = var12.guild_id;
        var _closure2_slot4 = var0;
        var2 = 14;
        var2 = var14[var2];
        var7 = var11.bind(var3)(var2);
        var6 = var7.useStateFromStores;
        var2 = _closure1_slot5;
        var4 = new Array(1);
        var4[0] = var2;
        var2 = new Array(1);
        var2[0] = var0;
        var0 = function() { // Environment: var1
            _fun107581: for (var _fun107581_ip = 0;;) switch (_fun107581_ip) {
                case 0:
                    var2 = _closure2_slot4;
                    var0 = null;
                    var0 = var0 != var2;
                    if (!var0) {
                        _fun107581_ip = 38;
                        continue _fun107581
                    }
                case 16:
                    var3 = _closure1_slot5;
                    var2 = var3.isLurking;
                    var1 = _closure2_slot4;
                    var0 = var2.bind(var3)(var1);
                case 38:
                    return var0;
            }
        };
        var8 = var6.bind(var7)(var4, var0, var2);
        var _closure2_slot5 = var8;
        var0 = 28;
        var2 = var14[var0];
        var6 = var11.bind(var3)(var2);
        var4 = var6.useAnimatedStyle;
        var2 = function() {
            _fun107582: for (var _fun107582_ip = 0;;) switch (_fun107582_ip) {
                case 0:
                    var0 = {};
                    var3 = _closure2_slot3;
                    var2 = 'none';
                    if (!var3) {
                        _fun107582_ip = 20;
                        continue _fun107582
                    }
                case 16:
                    var2 = 'auto';
                case 20:
                    var0.pointerEvents = var2;
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 29;
                    var3 = var5[var3];
                    var11 = undefined;
                    var7 = var4.bind(var11)(var3);
                    var6 = var7.withTiming;
                    var3 = _closure2_slot3;
                    var5 = 0;
                    if (!var3) {
                        _fun107582_ip = 67;
                        continue _fun107582
                    }
                case 64:
                    var5 = 1;
                case 67:
                    var10 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var3 = 31;
                    var3 = var12[var3];
                    var3 = var10.bind(var11)(var3);
                    var15 = var3.timingFast;
                    var3 = function arg0() {
                        _fun107583: for (var _fun107583_ip = 0;;) switch (_fun107583_ip) {
                            case 0:
                                var0 = arg0;
                                if (!var0) {
                                    _fun107583_ip = 52;
                                    continue _fun107583
                                }
                            case 6:
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 28;
                                var0 = var1[var0];
                                var1 = undefined;
                                var3 = var2.bind(var1)(var0);
                                var2 = var3.runOnJS;
                                var0 = _closure2_slot2;
                                var0 = var2.bind(var3)(var0);
                                var0 = var0.bind(var1)();
                            case 52:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var8 = {};
                    var9 = 28;
                    var9 = var12[var9];
                    var9 = var10.bind(var11)(var9);
                    var9 = var9.runOnJS;
                    var8.runOnJS = var9;
                    var9 = _closure2_slot2;
                    var8.cleanUp = var9;
                    var3.__closure = var8;
                    var8 = 17272451769590.0;
                    var3.__workletHash = var8;
                    var2 = _closure1_slot26;
                    var3.__initData = var2;
                    var14 = 'animate-always';
                    var17 = var7;
                    var16 = var5;
                    var13 = var3;
                    var2 = var17[var6](var16, var15, var14, var13, var12);
                    var0.opacity = var2;
                    var1 = _closure2_slot1;
                    var0.width = var1;
                    return var0;
            }
        };
        var7 = {};
        var7.isActive = var16;
        var16 = 29;
        var16 = var14[var16];
        var16 = var11.bind(var3)(var16);
        var16 = var16.withTiming;
        var7.withTiming = var16;
        var16 = 31;
        var16 = var14[var16];
        var16 = var11.bind(var3)(var16);
        var16 = var16.timingFast;
        var7.timingFast = var16;
        var16 = var14[var0];
        var16 = var11.bind(var3)(var16);
        var16 = var16.runOnJS;
        var7.runOnJS = var16;
        var7.cleanUp = var15;
        var7.width = var13;
        var2.__closure = var7;
        var7 = 15139742229370.0;
        var2.__workletHash = var7;
        var7 = _closure1_slot25;
        var2.__initData = var7;
        var6 = var4.bind(var6)(var2);
        var7 = _closure1_slot3;
        var4 = var7.useMemo;
        var2 = new Array(2);
        var2[0] = var12;
        var2[1] = var8;
        var1 = function() { // Environment: var1
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 32;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.getChannelDetailsButtons;
            var1 = _closure2_slot0;
            var0 = _closure2_slot5;
            var2 = var2.bind(var3)(var1, var0);
            var1 = var2.map;
            var0 = function(arg0) { // Environment: var0
                _fun107585: for (var _fun107585_ip = 0;;) switch (_fun107585_ip) {
                    case 0:
                        var5 = arg0;
                        var1 = _closure2_slot0;
                        var0 = _closure1_slot11;
                        var0 = var0.SEARCH;
                        if (!(var0 !== var5)) {
                            _fun107585_ip = 173;
                            continue _fun107585
                        }
                    case 30:
                        var0 = _closure1_slot11;
                        var0 = var0.MUTE;
                        if (!(var0 !== var5)) {
                            _fun107585_ip = 143;
                            continue _fun107585
                        }
                    case 44:
                        var0 = _closure1_slot11;
                        var0 = var0.SETTINGS;
                        if (!(var0 !== var5)) {
                            _fun107585_ip = 118;
                            continue _fun107585
                        }
                    case 58:
                        var0 = _closure1_slot11;
                        var3 = var0.MORE;
                        var7 = undefined;
                        var0 = undefined;
                        if (!(var3 === var5)) {
                            _fun107585_ip = 201;
                            continue _fun107585
                        }
                    case 79:
                        var6 = _closure1_slot15;
                        var4 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var3 = 26;
                        var3 = var8[var3];
                        var4 = var4.bind(var7)(var3);
                        var3 = {};
                        var3.channel = var1;
                        var0 = var6.bind(var7)(var4, var3, var5);
                        _fun107585_ip = 201;
                        continue _fun107585;
                    case 118:
                        var7 = _closure1_slot15;
                        var6 = _closure1_slot21;
                        var4 = {};
                        var4.channel = var1;
                        var3 = undefined;
                        var0 = var7.bind(var3)(var6, var4, var5);
                        _fun107585_ip = 201;
                        continue _fun107585;
                    case 143:
                        var7 = _closure1_slot15;
                        var6 = _closure1_slot19;
                        var4 = {};
                        var3 = var1.id;
                        var4.channelId = var3;
                        var3 = undefined;
                        var0 = var7.bind(var3)(var6, var4, var5);
                        _fun107585_ip = 201;
                        continue _fun107585;
                    case 173:
                        var4 = _closure1_slot15;
                        var3 = _closure1_slot20;
                        var2 = {};
                        var1 = var1.id;
                        var2.channelId = var1;
                        var1 = undefined;
                        var0 = var4.bind(var1)(var3, var2, var5);
                    case 201:
                        return var0;
                }
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var8 = var4.bind(var7)(var1, var2);
        var2 = _closure1_slot16;
        var13 = _closure1_slot1;
        var0 = var14[var0];
        var0 = var13.bind(var3)(var0);
        var1 = var0.View;
        var0 = {};
        var7 = var9.navigationHeader;
        var4 = new Array(2);
        var4[0] = var7;
        var4[1] = var6;
        var0.style = var4;
        var7 = _closure1_slot15;
        var4 = 33;
        var4 = var14[var4];
        var4 = var11.bind(var3)(var4);
        var6 = var4.PressableOpacity;
        var4 = {};
        var12 = 17;
        var15 = var14[var12];
        var15 = var11.bind(var3)(var15);
        var16 = var15.intl;
        var15 = var16.string;
        var12 = var14[var12];
        var12 = var11.bind(var3)(var12);
        var12 = var12.t;
        var12 = var12["13/7kX"];
        var12 = var15.bind(var16)(var12);
        var4.accessibilityLabel = var12;
        var4.onPress = var10;
        var10 = 34;
        var10 = var14[var10];
        var10 = var11.bind(var3)(var10);
        var11 = var10.ArrowLargeLeftIcon;
        var10 = {};
        var12 = 13;
        var12 = var14[var12];
        var12 = var13.bind(var3)(var12);
        var12 = var12.colors;
        var12 = var12.INTERACTIVE_TEXT_DEFAULT;
        var10.color = var12;
        var10 = var7.bind(var3)(var11, var10);
        var4.children = var10;
        var6 = var7.bind(var3)(var6, var4);
        var4 = new Array(2);
        var4[0] = var6;
        var6 = _closure1_slot4;
        var5 = {};
        var9 = var9.buttonsContainer;
        var5.style = var9;
        var5.children = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot27 = var3;
    var3 = var6.forwardRef;
    var1 = function(arg0, arg1) { // Environment: var1
        var1 = arg0;
        var13 = arg1;
        var16 = var1.channel;
        var _closure2_slot0 = var16;
        var15 = var1.onBackPress;
        var _closure2_slot1 = var15;
        var6 = var1.componentWidth;
        var12 = var1.onSuggestionsLayoutMeasure;
        var _closure2_slot2 = var12;
        var11 = var1.suggestionsDismissed;
        var _closure2_slot3 = var11;
        var10 = var1.setSuggestionsDismissed;
        var _closure2_slot4 = var10;
        var _closure2_slot5 = var13;
        var1 = _closure1_slot17;
        var3 = undefined;
        var4 = var1.bind(var3)();
        var5 = _closure1_slot0;
        var9 = _closure1_slot2;
        var1 = 35;
        var1 = var9[var1];
        var2 = var5.bind(var3)(var1);
        var1 = var2.useChannelDetailWidth;
        var14 = var1.bind(var2)(var6);
        var _closure2_slot6 = var14;
        var2 = _closure1_slot10;
        var1 = var16.id;
        var1 = var2.bind(var3)(var1);
        var _closure2_slot7 = var1;
        var6 = _closure1_slot3;
        var8 = var6.useMemo;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() { // Environment: var0
            _fun107587: for (var _fun107587_ip = 0;;) switch (_fun107587_ip) {
                case 0:
                    var0 = _closure2_slot7;
                    var1 = _closure1_slot18;
                    if (var0) {
                        _fun107587_ip = 33;
                        continue _fun107587
                    }
                case 17:
                    var2 = var1.BUTTONS;
                    var0 = new Array(1);
                    var0[0] = var2;
                    _fun107587_ip = 50;
                    continue _fun107587;
                case 33:
                    var2 = var1.SEARCH;
                    var1 = new Array(1);
                    var1[0] = var2;
                    var0 = var1;
                case 50:
                    return var0;
            }
        };
        var8 = var8.bind(var6)(var1, var2);
        var2 = var6.useCallback;
        var1 = new Array(7);
        var1[0] = var16;
        var1[1] = var15;
        var1[2] = var14;
        var1[3] = var13;
        var1[4] = var12;
        var1[5] = var11;
        var1[6] = var10;
        var0 = function(arg0, arg1, arg2, arg3) { // Environment: var0
            _fun107588: for (var _fun107588_ip = 0;;) switch (_fun107588_ip) {
                case 0:
                    var4 = arg0;
                    var3 = arg1;
                    var6 = arg2;
                    var0 = arg3;
                    var2 = _closure1_slot18;
                    var2 = var2.BUTTONS;
                    if (!(var2 !== var3)) {
                        _fun107588_ip = 132;
                        continue _fun107588
                    }
                case 29:
                    var2 = _closure1_slot18;
                    var2 = var2.SEARCH;
                    if (!(var2 !== var3)) {
                        _fun107588_ip = 47;
                        continue _fun107588
                    }
                case 43:
                    var2 = undefined;
                    return var2;
                case 47:
                    var7 = _closure1_slot15;
                    var5 = _closure1_slot24;
                    var3 = {};
                    var8 = _closure2_slot5;
                    var3.ref = var8;
                    var8 = _closure2_slot0;
                    var3.channel = var8;
                    var8 = _closure2_slot2;
                    var3.onSuggestionsLayoutMeasure = var8;
                    var8 = _closure2_slot3;
                    var3.suggestionsDismissed = var8;
                    var8 = _closure2_slot4;
                    var3.setSuggestionsDismissed = var8;
                    var3.transitionState = var6;
                    var2 = _closure2_slot6;
                    var3.width = var2;
                    var3.cleanUp = var0;
                    var2 = undefined;
                    var2 = var7.bind(var2)(var5, var3, var4);
                    return var2;
                case 132:
                    var3 = _closure1_slot15;
                    var2 = _closure1_slot27;
                    var1 = {};
                    var7 = _closure2_slot0;
                    var1.channel = var7;
                    var7 = _closure2_slot1;
                    var1.onBackPress = var7;
                    var1.transitionState = var6;
                    var5 = _closure2_slot6;
                    var1.width = var5;
                    var1.cleanUp = var0;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1, var4);
                    return var0;
            }
        };
        var6 = var2.bind(var6)(var0, var1);
        var2 = _closure1_slot15;
        var1 = _closure1_slot4;
        var0 = {};
        var4 = var4.container;
        var0.style = var4;
        var4 = 27;
        var4 = var9[var4];
        var4 = var5.bind(var3)(var4);
        var5 = var4.TransitionGroup;
        var4 = {};
        var4.items = var8;
        var7 = _closure1_slot29;
        var4.getItemKey = var7;
        var4.renderItem = var6;
        var4 = var2.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var3 = var3.bind(var6)(var1);
    var1 = var6.memo;
    var1 = var1.bind(var6)(var3);
    var3 = 36;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/sidebar/details/header_v2/ChannelDetailsNavigationBar.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 3094, 3095, 1372, 4303, 8983, 9071, 660, 8984, 33, 1297, 11755, 671, 566, 1469, 7579, 1234, 8840, 6732, 9047, 9048, 7083, 9182, 6532, 5422, 13898, 4027, 3721, 4097, 13769, 4883, 11860, 4904, 4706, 13767, 2]);