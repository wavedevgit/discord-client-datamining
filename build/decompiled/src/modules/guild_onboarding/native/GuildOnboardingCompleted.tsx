// modules/guild_onboarding/native/GuildOnboardingCompleted.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var5;
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
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var12 = var3.StyleSheet;
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot10 = var6;
    var3 = var3.jsxs;
    var _closure1_slot11 = var3;
    var13 = 8;
    var3 = var5[var13];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'flex': 1,
        'position': 'relative'
    };
    var3.screen = var8;
    var9 = 24;
    var8 = {
        'backgroundColor': 'rgba(0, 0, 0, 0.5)',
        'paddingHorizontal': 24,
        'display': 'flex',
        'justifyContent': 'center',
        'flexGrow': 1
    };
    var3.container = var8;
    var8 = {};
    var10 = 9;
    var14 = var5[var10];
    var14 = var11.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_BASE_LOWEST;
    var8.backgroundColor = var14;
    var3.containerWithoutSplash = var8;
    var8 = {
        'position': 'absolute',
        'width': '100%',
        'height': '100%'
    };
    var3.backgroundImage = var8;
    var8 = {};
    var3.title = var8;
    var8 = {};
    var14 = 16;
    var8.marginTop = var14;
    var3.subtitle = var8;
    var8 = {
        'marginTop': 24,
        'padding': 16,
        'paddingBottom': 32
    };
    var15 = var5[var10];
    var15 = var11.bind(var0)(var15);
    var15 = var15.radii;
    var15 = var15.sm;
    var8.borderRadius = var15;
    var15 = var5[var10];
    var15 = var11.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_SURFACE_HIGH;
    var8.backgroundColor = var15;
    var3.card = var8;
    var8 = {};
    var8.marginTop = var14;
    var3.username = var8;
    var8 = {};
    var8.marginTop = var13;
    var3.rolesHeader = var8;
    var8 = {
        'marginTop': 12,
        'display': 'flex',
        'flexDirection': 'row',
        'flexWrap': 'wrap'
    };
    var3.roles = var8;
    var8 = {};
    var8.marginRight = var13;
    var3.role = var8;
    var8 = {
        'paddingHorizontal': 8,
        'height': 28,
        'borderRadius': null,
        'display': 'flex',
        'justifyContent': 'center'
    };
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.xs;
    var8.borderRadius = var13;
    var12 = var12.hairlineWidth;
    var8.borderWidth = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BORDER_SUBTLE;
    var8.borderColor = var12;
    var3.roleOverflow = var8;
    var8 = {
        'marginTop': 24,
        'borderColor': null,
        'borderWidth': 2,
        'borderRadius': null,
        'padding': 12,
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BORDER_SUBTLE;
    var8.borderColor = var12;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.radii;
    var10 = var10.sm;
    var8.borderRadius = var10;
    var3.animation = var8;
    var8 = {};
    var10 = {};
    var10.translateX = var9;
    var9 = new Array(2);
    var9[0] = var10;
    var10 = {};
    var11 = '5deg';
    var10.rotate = var11;
    var9[1] = var10;
    var8.transform = var9;
    var3.wave = var8;
    var8 = {
        'flexGrow': 1,
        'marginLeft': 8
    };
    var3.animationText = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot12 = var3;
    var3 = {};
    var6 = "function GuildOnboardingCompletedTsx1(){const{withSequence,withTiming,withDelay,ANIMATION_DURATION,Easing,useReducedMotion}=this.__closure;const opacity=withSequence(withTiming(0,{duration:0}),withDelay(ANIMATION_DURATION,withTiming(0.5,{duration:ANIMATION_DURATION})),withTiming(1,{duration:ANIMATION_DURATION,easing:Easing.out(Easing.ease)}));const scale=withSequence(withTiming(1,{duration:0}),withDelay(ANIMATION_DURATION,withTiming(1.5,{duration:ANIMATION_DURATION,easing:Easing.out(Easing.ease)})),withTiming(1,{duration:useReducedMotion?1:ANIMATION_DURATION,easing:Easing.out(Easing.ease)}));const rawRotation=withSequence(withTiming('0deg',{duration:0}),withDelay(ANIMATION_DURATION,withTiming('-2deg',{duration:ANIMATION_DURATION})),withTiming('-5deg',{duration:ANIMATION_DURATION}));return{opacity:opacity,transform:[{rotate:rawRotation},{scale:scale}]};}";
    var3.code = var6;
    var _closure1_slot13 = var3;
    var3 = 29;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_onboarding/native/GuildOnboardingCompleted.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun92903: for (var _fun92903_ip = 0;;) switch (_fun92903_ip) {
            case 0:
                var0 = arg0;
                var30 = var0.guildId;
                var _closure2_slot0 = var30;
                var10 = var0.prompts;
                var9 = var0.completeOnboarding;
                var _closure2_slot1 = var9;
                var2 = var0.onClose;
                var _closure2_slot2 = var2;
                var4 = undefined;
                var _closure2_slot7 = var4;
                var _closure2_slot8 = var4;
                var _closure2_slot9 = var4;
                var _closure2_slot10 = var4;
                var0 = _closure1_slot12;
                var24 = var0.bind(var4)();
                var _closure2_slot3 = var24;
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 10;
                var0 = var7[var0];
                var1 = var5.bind(var4)(var0);
                var0 = var1.useNavigation;
                var3 = var0.bind(var1)();
                var _closure2_slot4 = var3;
                var1 = 11;
                var0 = var7[var1];
                var11 = var5.bind(var4)(var0);
                var8 = var11.useStateFromStores;
                var0 = _closure1_slot8;
                var6 = new Array(1);
                var6[0] = var0;
                var0 = function() { // Environment: var23
                    var1 = _closure1_slot8;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var25 = var8.bind(var11)(var6, var0);
                var0 = var7[var1];
                var11 = var5.bind(var4)(var0);
                var8 = var11.useStateFromStores;
                var0 = _closure1_slot7;
                var6 = new Array(1);
                var6[0] = var0;
                var0 = function() { // Environment: var23
                    var2 = _closure1_slot7;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var35 = var8.bind(var11)(var6, var0);
                var _closure2_slot5 = var35;
                var6 = _closure1_slot1;
                var0 = 12;
                var0 = var7[var0];
                var0 = var6.bind(var4)(var0);
                var12 = var0.bind(var4)(var30);
                var _closure2_slot6 = var12;
                var0 = 13;
                var0 = var7[var0];
                var6 = var5.bind(var4)(var0);
                var0 = var6.useThemeContext;
                var0 = var0.bind(var6)();
                var6 = var0.theme;
                var0 = 14;
                var0 = var7[var0];
                var5 = var5.bind(var4)(var0);
                var0 = var5.useProfileThemeValues;
                var6 = var0.bind(var5)(var6);
                var32 = {};
                var0 = null;
                var7 = var0 == var6;
                var5 = undefined;
                if (var7) {
                    _fun92903_ip = 287;
                    continue _fun92903
                }
            case 281:
                var5 = var6.rolePillBackgroundColor;
            case 287:
                var32.backgroundColor = var5;
                var5 = var0 != var35;
                var18 = null;
                if (!var5) {
                    _fun92903_ip = 383;
                    continue _fun92903
                }
            case 300:
                var11 = _closure1_slot1;
                var13 = _closure1_slot2;
                var5 = 15;
                var5 = var13[var5];
                var7 = var11.bind(var4)(var5);
                var6 = var7.getGuildSplashURL;
                var5 = {};
                var8 = var35.id;
                var5.id = var8;
                var8 = var35.splash;
                var5.splash = var8;
                var8 = 16;
                var8 = var13[var8];
                var8 = var11.bind(var4)(var8);
                var11 = var8.bind(var4)();
                var8 = 400;
                var8 = var8 * var11;
                var5.size = var8;
                var18 = var6.bind(var7)(var5);
            case 383:
                var8 = _closure1_slot0;
                var7 = _closure1_slot2;
                var5 = var7[var1];
                var14 = var8.bind(var4)(var5);
                var13 = var14.useStateFromStoresArray;
                var5 = _closure1_slot9;
                var11 = new Array(1);
                var11[0] = var5;
                var6 = new Array(1);
                var6[0] = var30;
                var5 = function() { // Environment: var23
                    var2 = _closure1_slot9;
                    var1 = var2.getOnboardingResponses;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var5 = var13.bind(var14)(var11, var5, var6);
                _closure2_slot7 = var5;
                var6 = var10.map;
                var5 = function(arg0) { // Environment: var23
                    var0 = arg0;
                    var0 = var0.options;
                    return var0;
                };
                var6 = var6.bind(var10)(var5);
                var5 = var6.flat;
                var10 = var5.bind(var6)();
                var6 = var10.filter;
                var5 = function(arg0) { // Environment: var23
                    var2 = _closure2_slot7;
                    var1 = var2.includes;
                    var0 = arg0;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var5 = var6.bind(var10)(var5);
                _closure2_slot8 = var5;
                var6 = _closure1_slot3;
                var11 = var6.useMemo;
                var10 = new Array(2);
                var10[0] = var12;
                var10[1] = var5;
                var5 = function() { // Environment: var23
                    _fun92909: for (var _fun92909_ip = 0;;) switch (_fun92909_ip) {
                        case 0:
                            var4 = _closure2_slot8;
                            var1 = var4.map;
                            var0 = function(arg0) { // Environment: var3
                                var0 = arg0;
                                var0 = var0.roleIds;
                                return var0;
                            };
                            var1 = var1.bind(var4)(var0);
                            var0 = var1.flat;
                            var4 = var0.bind(var1)();
                            var1 = var4.filter;
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var0 = 17;
                            var5 = var5[var0];
                            var0 = undefined;
                            var0 = var6.bind(var0)(var5);
                            var0 = var0.isNotNullish;
                            var1 = var1.bind(var4)(var0);
                            var0 = {};
                            var4 = _closure2_slot6;
                            var2 = null;
                            var4 = var2 != var4;
                            var7 = 0;
                            var2 = 0;
                            if (!var4) {
                                _fun92909_ip = 166;
                                continue _fun92909
                            }
                        case 96:
                            var4 = var1.length;
                            var4 = var4 > var7;
                            var2 = 0;
                            if (!var4) {
                                _fun92909_ip = 166;
                                continue _fun92909
                            }
                        case 110:
                            var4 = global;
                            var5 = var4.Math;
                            var4 = var5.max;
                            var6 = var1.map;
                            var3 = function(arg0) { // Environment: var3
                                _fun92911: for (var _fun92911_ip = 0;;) switch (_fun92911_ip) {
                                    case 0:
                                        var1 = _closure2_slot6;
                                        var0 = arg0;
                                        var1 = var1[var0];
                                        var0 = null;
                                        var2 = var0 != var1;
                                        var0 = 0;
                                        if (!var2) {
                                            _fun92911_ip = 28;
                                            continue _fun92911
                                        }
                                    case 25:
                                        var0 = var1;
                                    case 28:
                                        return var0;
                                }
                            };
                            var9 = var6.bind(var1)(var3);
                            var3 = new Array(0);
                            var10 = var3;
                            var8 = 0;
                            var6 = arraySpread(var10, var9, var8);
                            var10 = var4;
                            var9 = var3;
                            var8 = var5;
                            var2 = apply(var10, var9, var8);
                        case 166:
                            var0.numSharedRoleMembers = var2;
                            var0.allSelectedRoleIds = var1;
                            return var0;
                    }
                };
                var5 = var11.bind(var6)(var5, var10);
                var38 = var5.numSharedRoleMembers;
                var5 = var5.allSelectedRoleIds;
                _closure2_slot9 = var5;
                var10 = var7[var1];
                var13 = var8.bind(var4)(var10);
                var12 = var13.useStateFromStoresArray;
                var10 = _closure1_slot6;
                var11 = new Array(1);
                var11[0] = var10;
                var10 = new Array(2);
                var10[0] = var5;
                var10[1] = var30;
                var5 = function() { // Environment: var23
                    var3 = _closure1_slot6;
                    var2 = var3.getManyRoles;
                    var1 = _closure2_slot0;
                    var0 = _closure2_slot9;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var29 = var12.bind(var13)(var11, var5, var10);
                var10 = var6.useLayoutEffect;
                var5 = new Array(1);
                var5[0] = var3;
                var3 = function() { // Environment: var23
                    var2 = _closure2_slot4;
                    var1 = var2.setOptions;
                    var0 = {};
                    var3 = function() {
                        var0 = null;
                        return var0;
                    };
                    var0.headerLeft = var3;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var3 = var10.bind(var6)(var3, var5);
                var5 = var6.useEffect;
                var3 = new Array(2);
                var3[0] = var9;
                var3[1] = var2;
                var2 = function() { // Environment: var23
                    var0 = global;
                    var3 = var0.setTimeout;
                    var0 = undefined;
                    var2 = function() { // Environment: var1
                        var2 = _closure2_slot1;
                        var0 = undefined;
                        var2 = var2.bind(var0)();
                        var1 = _closure2_slot2;
                        var1 = var1.bind(var0)();
                        return var0;
                    };
                    var1 = 3600;
                    var1 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var2 = var5.bind(var6)(var2, var3);
                var1 = var7[var1];
                var5 = var8.bind(var4)(var1);
                var3 = var5.useStateFromStores;
                var1 = _closure1_slot5;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var23
                    var0 = _closure1_slot5;
                    var0 = var0.useReducedMotion;
                    return var0;
                };
                var6 = var3.bind(var5)(var2, var1);
                _closure2_slot10 = var6;
                var17 = 18;
                var1 = var7[var17];
                var3 = var8.bind(var4)(var1);
                var2 = var3.useAnimatedStyle;
                var1 = function() {
                    _fun92918: for (var _fun92918_ip = 0;;) switch (_fun92918_ip) {
                        case 0:
                            var9 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var4 = 18;
                            var1 = var0[var4];
                            var10 = undefined;
                            var12 = var9.bind(var10)(var1);
                            var7 = var12.withSequence;
                            var11 = 19;
                            var1 = var0[var11];
                            var3 = var9.bind(var10)(var1);
                            var2 = var3.withTiming;
                            var1 = {};
                            var5 = 0;
                            var1.duration = var5;
                            var6 = var2.bind(var3)(var5, var1);
                            var1 = var0[var4];
                            var13 = var9.bind(var10)(var1);
                            var3 = var13.withDelay;
                            var1 = var0[var11];
                            var16 = var9.bind(var10)(var1);
                            var15 = var16.withTiming;
                            var14 = {};
                            var1 = 400;
                            var14.duration = var1;
                            var2 = 0.5;
                            var2 = var15.bind(var16)(var2, var14);
                            var3 = var3.bind(var13)(var1, var2);
                            var2 = var0[var11];
                            var14 = var9.bind(var10)(var2);
                            var13 = var14.withTiming;
                            var2 = {};
                            var2.duration = var1;
                            var15 = var0[var4];
                            var15 = var9.bind(var10)(var15);
                            var17 = var15.Easing;
                            var16 = var17.out;
                            var15 = var0[var4];
                            var15 = var9.bind(var10)(var15);
                            var15 = var15.Easing;
                            var15 = var15.ease;
                            var15 = var16.bind(var17)(var15);
                            var2.easing = var15;
                            var15 = 1;
                            var2 = var13.bind(var14)(var15, var2);
                            var2 = var7.bind(var12)(var6, var3, var2);
                            var3 = var0[var4];
                            var12 = var9.bind(var10)(var3);
                            var7 = var12.withSequence;
                            var3 = var0[var11];
                            var13 = var9.bind(var10)(var3);
                            var6 = var13.withTiming;
                            var3 = {};
                            var3.duration = var5;
                            var6 = var6.bind(var13)(var15, var3);
                            var3 = var0[var4];
                            var14 = var9.bind(var10)(var3);
                            var13 = var14.withDelay;
                            var3 = var0[var11];
                            var18 = var9.bind(var10)(var3);
                            var17 = var18.withTiming;
                            var16 = {};
                            var16.duration = var1;
                            var3 = var0[var4];
                            var3 = var9.bind(var10)(var3);
                            var20 = var3.Easing;
                            var19 = var20.out;
                            var3 = var0[var4];
                            var3 = var9.bind(var10)(var3);
                            var3 = var3.Easing;
                            var3 = var3.ease;
                            var3 = var19.bind(var20)(var3);
                            var16.easing = var3;
                            var3 = 1.5;
                            var3 = var17.bind(var18)(var3, var16);
                            var3 = var13.bind(var14)(var1, var3);
                            var0 = var0[var11];
                            var14 = var9.bind(var10)(var0);
                            var13 = var14.withTiming;
                            var0 = {};
                            var16 = _closure2_slot10;
                            var9 = var15;
                            if (var16) {
                                _fun92918_ip = 395;
                                continue _fun92918
                            }
                        case 392:
                            var9 = var1;
                        case 395:
                            var0.duration = var9;
                            var9 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var16 = var8[var4];
                            var16 = var9.bind(var10)(var16);
                            var18 = var16.Easing;
                            var17 = var18.out;
                            var16 = var8[var4];
                            var16 = var9.bind(var10)(var16);
                            var16 = var16.Easing;
                            var16 = var16.ease;
                            var16 = var17.bind(var18)(var16);
                            var0.easing = var16;
                            var0 = var13.bind(var14)(var15, var0);
                            var3 = var7.bind(var12)(var6, var3, var0);
                            var0 = {};
                            var0.opacity = var2;
                            var2 = {};
                            var6 = var8[var4];
                            var7 = var9.bind(var10)(var6);
                            var6 = var7.withSequence;
                            var12 = var8[var11];
                            var14 = var9.bind(var10)(var12);
                            var13 = var14.withTiming;
                            var12 = {};
                            var12.duration = var5;
                            var5 = '0deg';
                            var5 = var13.bind(var14)(var5, var12);
                            var4 = var8[var4];
                            var13 = var9.bind(var10)(var4);
                            var12 = var13.withDelay;
                            var4 = var8[var11];
                            var16 = var9.bind(var10)(var4);
                            var15 = var16.withTiming;
                            var14 = {};
                            var14.duration = var1;
                            var4 = '-2deg';
                            var4 = var15.bind(var16)(var4, var14);
                            var4 = var12.bind(var13)(var1, var4);
                            var8 = var8[var11];
                            var10 = var9.bind(var10)(var8);
                            var9 = var10.withTiming;
                            var8 = {};
                            var8.duration = var1;
                            var1 = '-5deg';
                            var1 = var9.bind(var10)(var1, var8);
                            var1 = var6.bind(var7)(var5, var4, var1);
                            var2.rotate = var1;
                            var1 = new Array(2);
                            var1[0] = var2;
                            var2 = {};
                            var2.scale = var3;
                            var1[1] = var2;
                            var0.transform = var1;
                            return var0;
                    }
                };
                var5 = {};
                var9 = var7[var17];
                var9 = var8.bind(var4)(var9);
                var9 = var9.withSequence;
                var5.withSequence = var9;
                var9 = 19;
                var9 = var7[var9];
                var9 = var8.bind(var4)(var9);
                var9 = var9.withTiming;
                var5.withTiming = var9;
                var9 = var7[var17];
                var9 = var8.bind(var4)(var9);
                var9 = var9.withDelay;
                var5.withDelay = var9;
                var9 = 400;
                var5.ANIMATION_DURATION = var9;
                var7 = var7[var17];
                var7 = var8.bind(var4)(var7);
                var7 = var7.Easing;
                var5.Easing = var7;
                var5.useReducedMotion = var6;
                var1.__closure = var5;
                var5 = 8282245217026.0;
                var1.__workletHash = var5;
                var5 = _closure1_slot13;
                var1.__initData = var5;
                var22 = var2.bind(var3)(var1);
                if (!(var0 != var25)) {
                    _fun92903_ip = 2272;
                    continue _fun92903
                }
            case 863:
                if (!(var0 != var35)) {
                    _fun92903_ip = 2272;
                    continue _fun92903
                }
            case 870:
                var1 = var29.length;
                var27 = 3;
                var36 = var1 - var27;
                var3 = _closure1_slot11;
                var2 = _closure1_slot4;
                var1 = {};
                var5 = var24.screen;
                var1.style = var5;
                var5 = var0 != var18;
                var6 = null;
                if (!var5) {
                    _fun92903_ip = 963;
                    continue _fun92903
                }
            case 911:
                var8 = _closure1_slot10;
                var7 = _closure1_slot1;
                var9 = _closure1_slot2;
                var5 = 20;
                var5 = var9[var5];
                var7 = var7.bind(var4)(var5);
                var5 = {};
                var9 = {};
                var9.uri = var18;
                var5.source = var9;
                var9 = var24.backgroundImage;
                var5.style = var9;
                var6 = var8.bind(var4)(var7, var5);
            case 963:
                var5 = new Array(2);
                var5[0] = var6;
                var8 = _closure1_slot10;
                var7 = _closure1_slot0;
                var9 = _closure1_slot2;
                var6 = 21;
                var6 = var9[var6];
                var6 = var7.bind(var4)(var6);
                var7 = var6.SafeAreaPaddingView;
                var6 = {};
                var9 = true;
                var6.bottom = var9;
                var10 = var24.container;
                var9 = new Array(2);
                var9[0] = var10;
                var11 = var0 == var18;
                var10 = null;
                if (!var11) {
                    _fun92903_ip = 1037;
                    continue _fun92903
                }
            case 1031:
                var10 = var24.containerWithoutSplash;
            case 1037:
                var9[1] = var10;
                var6.style = var9;
                var11 = _closure1_slot11;
                var10 = _closure1_slot4;
                var9 = {};
                var19 = _closure1_slot10;
                var13 = _closure1_slot0;
                var12 = _closure1_slot2;
                var28 = 22;
                var12 = var12[var28];
                var12 = var13.bind(var4)(var12);
                var15 = var12.Text;
                var12 = {
                    'style': null,
                    'accessibilityRole': 'header',
                    'variant': 'heading-xxl/extrabold'
                };
                var13 = var24.title;
                var12.style = var13;
                var14 = var0 == var18;
                var16 = 'always-white';
                var13 = var16;
                if (!var14) {
                    _fun92903_ip = 1131;
                    continue _fun92903
                }
            case 1125:
                var13 = 'mobile-text-heading-primary';
            case 1131:
                var12.color = var13;
                var14 = _closure1_slot0;
                var13 = _closure1_slot2;
                var31 = 23;
                var20 = var13[var31];
                var20 = var14.bind(var4)(var20);
                var33 = var20.intl;
                var26 = var33.string;
                var20 = var13[var31];
                var20 = var14.bind(var4)(var20);
                var20 = var20.t;
                var20 = var20.PFWIYe;
                var20 = var26.bind(var33)(var20);
                var12.children = var20;
                var15 = var19.bind(var4)(var15, var12);
                var12 = new Array(3);
                var12[0] = var15;
                var15 = _closure1_slot10;
                var13 = var13[var28];
                var13 = var14.bind(var4)(var13);
                var14 = var13.Text;
                var13 = {
                    'style': null,
                    'accessibilityRole': 'header',
                    'variant': 'text-md/medium'
                };
                var19 = var24.subtitle;
                var13.style = var19;
                var18 = var0 == var18;
                if (!var18) {
                    _fun92903_ip = 1267;
                    continue _fun92903
                }
            case 1261:
                var16 = 'text-muted';
            case 1267:
                var13.color = var16;
                var19 = _closure1_slot0;
                var18 = _closure1_slot2;
                var16 = var18[var31];
                var16 = var19.bind(var4)(var16);
                var26 = var16.intl;
                var20 = var26.string;
                var16 = var18[var31];
                var16 = var19.bind(var4)(var16);
                var16 = var16.t;
                var16 = var16.og4NNr;
                var16 = var20.bind(var26)(var16);
                var13.children = var16;
                var13 = var15.bind(var4)(var14, var13);
                var12[1] = var13;
                var15 = _closure1_slot11;
                var14 = _closure1_slot4;
                var13 = {};
                var16 = var24.card;
                var13.style = var16;
                var20 = _closure1_slot10;
                var26 = _closure1_slot1;
                var33 = 24;
                var16 = var18[var33];
                var26 = var26.bind(var4)(var16);
                var16 = {};
                var33 = var18[var33];
                var33 = var19.bind(var4)(var33);
                var33 = var33.AvatarSizes;
                var33 = var33.XXLARGE;
                var16.size = var33;
                var16.user = var25;
                var16.guildId = var30;
                var30 = false;
                var16.animate = var30;
                var26 = var20.bind(var4)(var26, var16);
                var16 = new Array(5);
                var16[0] = var26;
                var18 = var18[var28];
                var18 = var19.bind(var4)(var18);
                var19 = var18.Text;
                var18 = {
                    'style': null,
                    'variant': 'heading-xl/semibold',
                    'color': 'mobile-text-heading-primary'
                };
                var26 = var24.username;
                var18.style = var26;
                var25 = var25.username;
                var18.children = var25;
                var18 = var20.bind(var4)(var19, var18);
                var16[1] = var18;
                var26 = 0;
                var19 = var38 > var26;
                var18 = null;
                if (!var19) {
                    _fun92903_ip = 1620;
                    continue _fun92903
                }
            case 1504:
                var25 = _closure1_slot10;
                var33 = _closure1_slot0;
                var30 = _closure1_slot2;
                var19 = var30[var28];
                var19 = var33.bind(var4)(var19);
                var20 = var19.Text;
                var19 = {
                    'style': null,
                    'variant': 'text-sm/normal',
                    'color': 'text-muted'
                };
                var34 = var24.rolesHeader;
                var19.style = var34;
                var34 = var30[var31];
                var34 = var33.bind(var4)(var34);
                var37 = var34.intl;
                var34 = var37.format;
                var30 = var30[var31];
                var30 = var33.bind(var4)(var30);
                var30 = var30.t;
                var33 = var30.l1Jc1n;
                var30 = {};
                var30.numSharedRoleMembers = var38;
                var30 = var34.bind(var37)(var33, var30);
                var19.children = var30;
                var18 = var25.bind(var4)(var20, var19);
            case 1620:
                var16[2] = var18;
                var20 = _closure1_slot11;
                var19 = _closure1_slot4;
                var18 = {};
                var25 = var24.roles;
                var18.style = var25;
                var25 = var29.slice;
                var27 = var25.bind(var29)(var26, var27);
                var25 = var27.map;
                var23 = function(arg0) { // Environment: var23
                    var0 = arg0;
                    var4 = _closure1_slot10;
                    var3 = _closure1_slot4;
                    var2 = {};
                    var5 = _closure2_slot3;
                    var5 = var5.role;
                    var2.style = var5;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 25;
                    var5 = var5[var1];
                    var1 = undefined;
                    var5 = var6.bind(var1)(var5);
                    var6 = var5.RoleItem;
                    var5 = {};
                    var5.role = var0;
                    var7 = _closure2_slot5;
                    var7 = var7.id;
                    var5.guildId = var7;
                    var7 = true;
                    var5.disableInteraction = var7;
                    var5 = var4.bind(var1)(var6, var5);
                    var2.children = var5;
                    var0 = var0.id;
                    var0 = var4.bind(var1)(var3, var2, var0);
                    return var0;
                };
                var25 = var25.bind(var27)(var23);
                var23 = new Array(2);
                var23[0] = var25;
                var25 = null;
                if (!(var36 > var26)) {
                    _fun92903_ip = 1796;
                    continue _fun92903
                }
            case 1686:
                var29 = _closure1_slot10;
                var27 = _closure1_slot4;
                var26 = {};
                var33 = var24.roleOverflow;
                var30 = new Array(2);
                var30[0] = var33;
                var30[1] = var32;
                var26.style = var30;
                var32 = _closure1_slot0;
                var30 = _closure1_slot2;
                var30 = var30[var28];
                var30 = var32.bind(var4)(var30);
                var32 = var30.Text;
                var30 = {
                    'variant': 'heading-deprecated-12/semibold',
                    'color': 'mobile-text-heading-primary'
                };
                var33 = global;
                var33 = var33.HermesInternal;
                var34 = var33.concat;
                var33 = '+';
                var33 = var34.bind(var33)(var36);
                var30.children = var33;
                var30 = var29.bind(var4)(var32, var30);
                var26.children = var30;
                var25 = var29.bind(var4)(var27, var26);
            case 1796:
                var23[1] = var25;
                var18.children = var23;
                var18 = var20.bind(var4)(var19, var18);
                var16[3] = var18;
                var19 = _closure1_slot11;
                var26 = _closure1_slot1;
                var27 = _closure1_slot2;
                var17 = var27[var17];
                var17 = var26.bind(var4)(var17);
                var18 = var17.View;
                var17 = {};
                var23 = var24.animation;
                var20 = new Array(2);
                var20[0] = var23;
                var20[1] = var22;
                var17.style = var20;
                var23 = _closure1_slot10;
                var25 = 26;
                var20 = var27[var25];
                var22 = var26.bind(var4)(var20);
                var20 = {};
                var20.guild = var35;
                var29 = _closure1_slot0;
                var25 = var27[var25];
                var25 = var29.bind(var4)(var25);
                var25 = var25.GuildIconSizes;
                var25 = var25.LARGE;
                var20.size = var25;
                var22 = var23.bind(var4)(var22, var20);
                var20 = new Array(3);
                var20[0] = var22;
                var22 = _closure1_slot4;
                var21 = {};
                var25 = var24.animationText;
                var21.style = var25;
                var25 = var27[var28];
                var25 = var29.bind(var4)(var25);
                var30 = var25.Text;
                var25 = {
                    'variant': 'text-sm/medium',
                    'color': 'mobile-text-heading-primary'
                };
                var32 = var27[var31];
                var32 = var29.bind(var4)(var32);
                var34 = var32.intl;
                var33 = var34.format;
                var31 = var27[var31];
                var31 = var29.bind(var4)(var31);
                var31 = var31.t;
                var32 = var31.FXREhf;
                var31 = {};
                var35 = var35.name;
                var31.guildName = var35;
                var31 = var33.bind(var34)(var32, var31);
                var25.children = var31;
                var30 = var23.bind(var4)(var30, var25);
                var25 = new Array(2);
                var25[0] = var30;
                var28 = var27[var28];
                var28 = var29.bind(var4)(var28);
                var29 = var28.Text;
                var28 = {
                    'variant': 'text-xs/normal',
                    'color': 'text-muted'
                };
                var30 = 27;
                var30 = var27[var30];
                var30 = var26.bind(var4)(var30);
                var32 = var30.bind(var4)();
                var31 = var32.format;
                var30 = 'LL';
                var32 = var31.bind(var32)(var30);
                var30 = global;
                var30 = var30.HermesInternal;
                var31 = var30.concat;
                var30 = '';
                var30 = var31.bind(var30)(var32);
                var28.children = var30;
                var28 = var23.bind(var4)(var29, var28);
                var25[1] = var28;
                var21.children = var25;
                var21 = var19.bind(var4)(var22, var21);
                var20[1] = var21;
                var21 = 20;
                var21 = var27[var21];
                var22 = var26.bind(var4)(var21);
                var21 = {};
                var25 = 28;
                var25 = var27[var25];
                var25 = var26.bind(var4)(var25);
                var21.source = var25;
                var24 = var24.wave;
                var21.style = var24;
                var21 = var23.bind(var4)(var22, var21);
                var20[2] = var21;
                var17.children = var20;
                var17 = var19.bind(var4)(var18, var17);
                var16[4] = var17;
                var13.children = var16;
                var13 = var15.bind(var4)(var14, var13);
                var12[2] = var13;
                var9.children = var12;
                var9 = var11.bind(var4)(var10, var9);
                var6.children = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[1] = var6;
                var1.children = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 2272:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1298, 1665, 1410, 1613, 4653, 33, 1297, 671, 1469, 566, 9802, 3120, 5349, 1417, 1586, 1304, 3681, 4058, 4669, 4699, 3902, 1234, 5416, 11895, 7357, 3006, 12148, 2]);