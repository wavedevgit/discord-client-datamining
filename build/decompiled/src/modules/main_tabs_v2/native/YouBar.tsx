// modules/main_tabs_v2/native/YouBar.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var5;
    var0 = function(arg0) { // Original name: UsernameAnimated, environment: var1
        _fun103497: for (var _fun103497_ip = 0;;) switch (_fun103497_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.userId;
                var8 = var0.username;
                var15 = var0.transitionState;
                var _closure2_slot0 = var15;
                var14 = var0.onCleanup;
                var _closure2_slot1 = var14;
                var0 = _closure1_slot25;
                var3 = undefined;
                var4 = var0.bind(var3)();
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var0 = 12;
                var2 = var13[var0];
                var6 = var12.bind(var3)(var2);
                var2 = var6.useSharedValue;
                var10 = 0;
                var11 = var2.bind(var6)(var10);
                var _closure2_slot2 = var11;
                var7 = _closure1_slot5;
                var6 = var7.useEffect;
                var2 = new Array(3);
                var2[0] = var15;
                var2[1] = var11;
                var2[2] = var14;
                var1 = function() { // Environment: var1
                    _fun103498: for (var _fun103498_ip = 0;;) switch (_fun103498_ip) {
                        case 0:
                            var4 = _closure2_slot0;
                            var5 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var6 = 16;
                            var3 = var0[var6];
                            var0 = undefined;
                            var3 = var5.bind(var0)(var3);
                            var3 = var3.TransitionStates;
                            var3 = var3.ENTERED;
                            if (!(var4 !== var3)) {
                                _fun103498_ip = 267;
                                continue _fun103498
                            }
                        case 51:
                            var4 = _closure2_slot0;
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var3 = var3[var6];
                            var3 = var5.bind(var0)(var3);
                            var3 = var3.TransitionStates;
                            var3 = var3.MOUNTED;
                            if (!(var4 !== var3)) {
                                _fun103498_ip = 267;
                                continue _fun103498
                            }
                        case 91:
                            var4 = _closure2_slot0;
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var3 = var3[var6];
                            var3 = var5.bind(var0)(var3);
                            var3 = var3.TransitionStates;
                            var3 = var3.YEETED;
                            if (!(var4 === var3)) {
                                _fun103498_ip = 319;
                                continue _fun103498
                            }
                        case 131:
                            var5 = _closure2_slot2;
                            var4 = var5.set;
                            var11 = _closure1_slot0;
                            var12 = _closure1_slot2;
                            var3 = 17;
                            var3 = var12[var3];
                            var10 = var11.bind(var0)(var3);
                            var9 = var10.withSpring;
                            var15 = _closure1_slot26;
                            var7 = function() { // Original name: t, environment: var3
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 12;
                                var1 = var1[var0];
                                var0 = undefined;
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.runOnJS;
                                var1 = _closure2_slot1;
                                var1 = var2.bind(var3)(var1);
                                var1 = var1.bind(var0)();
                                return var0;
                            };
                            var3 = {};
                            var6 = 12;
                            var6 = var12[var6];
                            var6 = var11.bind(var0)(var6);
                            var6 = var6.runOnJS;
                            var3.runOnJS = var6;
                            var6 = _closure2_slot1;
                            var3.onCleanup = var6;
                            var7.__closure = var3;
                            var3 = 15382259463637.0;
                            var7.__workletHash = var3;
                            var3 = _closure1_slot28;
                            var7.__initData = var3;
                            var16 = 0;
                            var14 = 'respect-motion-settings';
                            var17 = var10;
                            var13 = var7;
                            var3 = var17[var9](var16, var15, var14, var13, var12);
                            var3 = var4.bind(var5)(var3);
                            _fun103498_ip = 319;
                            continue _fun103498;
                        case 267:
                            var3 = _closure2_slot2;
                            var2 = var3.set;
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var4 = 17;
                            var4 = var6[var4];
                            var6 = var5.bind(var0)(var4);
                            var5 = var6.withSpring;
                            var4 = _closure1_slot27;
                            var1 = 1;
                            var1 = var5.bind(var6)(var1, var4);
                            var1 = var2.bind(var3)(var1);
                        case 319:
                            return var0;
                    }
                };
                var1 = var6.bind(var7)(var1, var2);
                var2 = _closure1_slot21;
                var6 = _closure1_slot1;
                var0 = var13[var0];
                var0 = var6.bind(var3)(var0);
                var1 = var0.View;
                var0 = {};
                var7 = var4.usernameRow;
                var4 = new Array(2);
                var4[0] = var7;
                var7 = {};
                var7.opacity = var11;
                var4[1] = var7;
                var0.style = var4;
                var7 = _closure1_slot20;
                var4 = 18;
                var4 = var13[var4];
                var6 = var6.bind(var3)(var4);
                var4 = {
                    'userId': null,
                    'userName': null,
                    'defaultColor': 'mobile-text-heading-primary',
                    'variant': 'heading-md/bold',
                    'lineClamp': 1,
                    'ellipsizeMode': 'tail',
                    'maxFontSizeMultiplier': 1.75
                };
                var4.userId = var9;
                var4.userName = var8;
                var9 = 1;
                var8 = {};
                var11 = 19;
                var11 = var13[var11];
                var12 = var12.bind(var3)(var11);
                var11 = var12.isAndroid;
                var11 = var11.bind(var12)();
                if (!var11) {
                    _fun103497_ip = 250;
                    continue _fun103497
                }
            case 247:
                var10 = 2;
            case 250:
                var8.paddingBottom = var10;
                var8.flexShrink = var9;
                var4.style = var8;
                var6 = var7.bind(var3)(var6, var4);
                var4 = new Array(2);
                var4[0] = var6;
                var7 = _closure1_slot20;
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var5 = 20;
                var5 = var8[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.ChevronSmallRightIcon;
                var5 = {
                    'size': 'xs',
                    'color': 'text-default'
                };
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot41 = var0;
    var0 = function(arg0) { // Original name: YouAvatarAnimated, environment: var1
        _fun103500: for (var _fun103500_ip = 0;;) switch (_fun103500_ip) {
            case 0:
                var1 = arg0;
                var13 = var1.selectedGuildId;
                var12 = var1.transitionState;
                var _closure2_slot0 = var12;
                var11 = var1.cleanup;
                var _closure2_slot1 = var11;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 21;
                var5 = var3[var1];
                var4 = undefined;
                var9 = var2.bind(var4)(var5);
                var7 = var9.useStateFromStores;
                var5 = _closure1_slot11;
                var6 = new Array(1);
                var6[0] = var5;
                var5 = function() { // Environment: var0
                    var1 = _closure1_slot11;
                    var0 = var1.getStatus;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var9 = var7.bind(var9)(var6, var5);
                var1 = var3[var1];
                var7 = var2.bind(var4)(var1);
                var6 = var7.useStateFromStores;
                var1 = _closure1_slot12;
                var5 = new Array(1);
                var5[0] = var1;
                var1 = function() { // Environment: var0
                    var1 = _closure1_slot12;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var14 = var6.bind(var7)(var5, var1);
                var1 = 12;
                var5 = var3[var1];
                var7 = var2.bind(var4)(var5);
                var6 = var7.useSharedValue;
                var5 = 0;
                var6 = var6.bind(var7)(var5);
                var _closure2_slot2 = var6;
                var10 = _closure1_slot5;
                var7 = var10.useEffect;
                var5 = new Array(3);
                var5[0] = var12;
                var5[1] = var6;
                var5[2] = var11;
                var0 = function() { // Environment: var0
                    _fun103503: for (var _fun103503_ip = 0;;) switch (_fun103503_ip) {
                        case 0:
                            var4 = _closure2_slot0;
                            var5 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var6 = 16;
                            var3 = var0[var6];
                            var0 = undefined;
                            var3 = var5.bind(var0)(var3);
                            var3 = var3.TransitionStates;
                            var3 = var3.ENTERED;
                            if (!(var4 !== var3)) {
                                _fun103503_ip = 267;
                                continue _fun103503
                            }
                        case 51:
                            var4 = _closure2_slot0;
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var3 = var3[var6];
                            var3 = var5.bind(var0)(var3);
                            var3 = var3.TransitionStates;
                            var3 = var3.MOUNTED;
                            if (!(var4 !== var3)) {
                                _fun103503_ip = 267;
                                continue _fun103503
                            }
                        case 91:
                            var4 = _closure2_slot0;
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var3 = var3[var6];
                            var3 = var5.bind(var0)(var3);
                            var3 = var3.TransitionStates;
                            var3 = var3.YEETED;
                            if (!(var4 === var3)) {
                                _fun103503_ip = 319;
                                continue _fun103503
                            }
                        case 131:
                            var5 = _closure2_slot2;
                            var4 = var5.set;
                            var11 = _closure1_slot0;
                            var12 = _closure1_slot2;
                            var3 = 17;
                            var3 = var12[var3];
                            var10 = var11.bind(var0)(var3);
                            var9 = var10.withSpring;
                            var15 = _closure1_slot26;
                            var7 = function() { // Original name: t, environment: var3
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 12;
                                var1 = var1[var0];
                                var0 = undefined;
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.runOnJS;
                                var1 = _closure2_slot1;
                                var1 = var2.bind(var3)(var1);
                                var1 = var1.bind(var0)();
                                return var0;
                            };
                            var3 = {};
                            var6 = 12;
                            var6 = var12[var6];
                            var6 = var11.bind(var0)(var6);
                            var6 = var6.runOnJS;
                            var3.runOnJS = var6;
                            var6 = _closure2_slot1;
                            var3.cleanup = var6;
                            var7.__closure = var3;
                            var3 = 16071268952598.0;
                            var7.__workletHash = var3;
                            var3 = _closure1_slot29;
                            var7.__initData = var3;
                            var16 = 0;
                            var14 = 'respect-motion-settings';
                            var17 = var10;
                            var13 = var7;
                            var3 = var17[var9](var16, var15, var14, var13, var12);
                            var3 = var4.bind(var5)(var3);
                            _fun103503_ip = 319;
                            continue _fun103503;
                        case 267:
                            var3 = _closure2_slot2;
                            var2 = var3.set;
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var4 = 17;
                            var4 = var6[var4];
                            var6 = var5.bind(var0)(var4);
                            var5 = var6.withSpring;
                            var4 = _closure1_slot27;
                            var1 = 1;
                            var1 = var5.bind(var6)(var1, var4);
                            var1 = var2.bind(var3)(var1);
                        case 319:
                            return var0;
                    }
                };
                var0 = var7.bind(var10)(var0, var5);
                var0 = 22;
                var0 = var3[var0];
                var3 = var2.bind(var4)(var0);
                var2 = var3.useAvatarDecoration;
                var11 = null;
                var5 = var11 != var13;
                var0 = undefined;
                if (!var5) {
                    _fun103500_ip = 224;
                    continue _fun103500
                }
            case 221:
                var0 = var13;
            case 224:
                var10 = var2.bind(var3)(var14, var0);
                var2 = var11 == var14;
                var0 = null;
                if (var2) {
                    _fun103500_ip = 447;
                    continue _fun103500
                }
            case 242:
                var3 = _closure1_slot20;
                var2 = _closure1_slot1;
                var15 = _closure1_slot2;
                var1 = var15[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.View;
                var1 = {};
                var5 = {};
                var5.opacity = var6;
                var7 = _closure1_slot0;
                var6 = 16;
                var6 = var15[var6];
                var6 = var7.bind(var4)(var6);
                var6 = var6.TransitionStates;
                var7 = var6.YEETED;
                var6 = 'relative';
                if (!(var12 === var7)) {
                    _fun103500_ip = 316;
                    continue _fun103500
                }
            case 312:
                var6 = 'absolute';
            case 316:
                var5.position = var6;
                var1.style = var5;
                var7 = _closure1_slot20;
                var6 = _closure1_slot1;
                var5 = _closure1_slot2;
                var12 = 23;
                var5 = var5[var12];
                var6 = var6.bind(var4)(var5);
                var5 = {};
                var5.user = var14;
                var14 = var11 != var13;
                var11 = undefined;
                if (!var14) {
                    _fun103500_ip = 366;
                    continue _fun103500
                }
            case 363:
                var11 = var13;
            case 366:
                var5.guildId = var11;
                var11 = _closure1_slot0;
                var8 = _closure1_slot2;
                var8 = var8[var12];
                var8 = var11.bind(var4)(var8);
                var8 = var8.AvatarSizes;
                var8 = var8.NORMAL;
                var5.size = var8;
                var8 = false;
                var5.animate = var8;
                var8 = true;
                var5.needsOffscreenAlphaCompositing = var8;
                var5.avatarDecoration = var10;
                var5.status = var9;
                var5.autoStatusCutout = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 447:
                return var0;
        }
    };
    var _closure1_slot42 = var0;
    var0 = function(arg0) { // Original name: NameplateAnimated, environment: var1
        var0 = arg0;
        var7 = var0.nameplate;
        var12 = var0.transitionState;
        var _closure2_slot0 = var12;
        var9 = var0.barWidth;
        var11 = var0.onCleanup;
        var _closure2_slot1 = var11;
        var5 = _closure1_slot0;
        var8 = _closure1_slot2;
        var0 = 12;
        var2 = var8[var0];
        var3 = undefined;
        var6 = var5.bind(var3)(var2);
        var5 = var6.useSharedValue;
        var2 = 0;
        var10 = var5.bind(var6)(var2);
        var _closure2_slot2 = var10;
        var6 = _closure1_slot5;
        var5 = var6.useEffect;
        var2 = new Array(3);
        var2[0] = var12;
        var2[1] = var10;
        var2[2] = var11;
        var1 = function() { // Environment: var1
            _fun103506: for (var _fun103506_ip = 0;;) switch (_fun103506_ip) {
                case 0:
                    var4 = _closure2_slot0;
                    var5 = _closure1_slot0;
                    var0 = _closure1_slot2;
                    var6 = 16;
                    var3 = var0[var6];
                    var0 = undefined;
                    var3 = var5.bind(var0)(var3);
                    var3 = var3.TransitionStates;
                    var3 = var3.ENTERED;
                    if (!(var4 !== var3)) {
                        _fun103506_ip = 267;
                        continue _fun103506
                    }
                case 51:
                    var4 = _closure2_slot0;
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var6];
                    var3 = var5.bind(var0)(var3);
                    var3 = var3.TransitionStates;
                    var3 = var3.MOUNTED;
                    if (!(var4 !== var3)) {
                        _fun103506_ip = 267;
                        continue _fun103506
                    }
                case 91:
                    var4 = _closure2_slot0;
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var6];
                    var3 = var5.bind(var0)(var3);
                    var3 = var3.TransitionStates;
                    var3 = var3.YEETED;
                    if (!(var4 === var3)) {
                        _fun103506_ip = 319;
                        continue _fun103506
                    }
                case 131:
                    var5 = _closure2_slot2;
                    var4 = var5.set;
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var3 = 17;
                    var3 = var12[var3];
                    var10 = var11.bind(var0)(var3);
                    var9 = var10.withSpring;
                    var15 = _closure1_slot26;
                    var7 = function() { // Original name: t, environment: var3
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 12;
                        var1 = var1[var0];
                        var0 = undefined;
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.runOnJS;
                        var1 = _closure2_slot1;
                        var1 = var2.bind(var3)(var1);
                        var1 = var1.bind(var0)();
                        return var0;
                    };
                    var3 = {};
                    var6 = 12;
                    var6 = var12[var6];
                    var6 = var11.bind(var0)(var6);
                    var6 = var6.runOnJS;
                    var3.runOnJS = var6;
                    var6 = _closure2_slot1;
                    var3.onCleanup = var6;
                    var7.__closure = var3;
                    var3 = 12642314984407.0;
                    var7.__workletHash = var3;
                    var3 = _closure1_slot30;
                    var7.__initData = var3;
                    var16 = 0;
                    var14 = 'respect-motion-settings';
                    var17 = var10;
                    var13 = var7;
                    var3 = var17[var9](var16, var15, var14, var13, var12);
                    var3 = var4.bind(var5)(var3);
                    _fun103506_ip = 319;
                    continue _fun103506;
                case 267:
                    var3 = _closure2_slot2;
                    var2 = var3.set;
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 17;
                    var4 = var6[var4];
                    var6 = var5.bind(var0)(var4);
                    var5 = var6.withSpring;
                    var4 = _closure1_slot27;
                    var1 = 1;
                    var1 = var5.bind(var6)(var1, var4);
                    var1 = var2.bind(var3)(var1);
                case 319:
                    return var0;
            }
        };
        var1 = var5.bind(var6)(var1, var2);
        var2 = _closure1_slot20;
        var5 = _closure1_slot1;
        var0 = var8[var0];
        var0 = var5.bind(var3)(var0);
        var1 = var0.View;
        var0 = {};
        var6 = {
            'opacity': null,
            'position': 'absolute',
            'width': null,
            'left': 4294967295,
            'height': null,
            'top': 4294967295
        };
        var6.opacity = var10;
        var6.width = var9;
        var9 = _closure1_slot15;
        var6.height = var9;
        var0.style = var6;
        var6 = _closure1_slot20;
        var4 = 24;
        var4 = var8[var4];
        var5 = var5.bind(var3)(var4);
        var4 = {
            'nameplate': null,
            'isFocused': true,
            'animate': false
        };
        var4.nameplate = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot43 = var0;
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
    var3 = var11.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var15 = 1;
    var3 = var5[var15];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var14 = 2;
    var6 = var5[var14];
    var3 = arg3;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot5 = var6;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.View;
    var _closure1_slot6 = var7;
    var3 = var3.Pressable;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot12 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.useYouBarBottomMargin;
    var _closure1_slot13 = var7;
    var7 = var3.YOU_BAR_GRADIENT_EXTRA_HEIGHT;
    var _closure1_slot14 = var7;
    var13 = var3.YOU_BAR_HEIGHT;
    var _closure1_slot15 = var13;
    var16 = var3.YOU_BAR_MARGIN;
    var _closure1_slot16 = var16;
    var7 = var3.YOU_BAR_PADDING;
    var _closure1_slot17 = var7;
    var7 = var3.CUSTOM_THEME_COLORS;
    var _closure1_slot18 = var7;
    var3 = var3.CUSTOM_THEME_BACKGROUND_COLORS;
    var _closure1_slot19 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot20 = var7;
    var7 = var3.jsxs;
    var _closure1_slot21 = var7;
    var3 = var3.Fragment;
    var _closure1_slot22 = var3;
    var3 = {};
    var10 = 11;
    var7 = var5[var10];
    var7 = var11.bind(var0)(var7);
    var7 = var7.spacing;
    var7 = var7.PX_16;
    var3.top = var7;
    var7 = var5[var10];
    var7 = var11.bind(var0)(var7);
    var7 = var7.spacing;
    var7 = var7.PX_16;
    var3.bottom = var7;
    var7 = var5[var10];
    var7 = var11.bind(var0)(var7);
    var7 = var7.spacing;
    var7 = var7.PX_16;
    var3.left = var7;
    var7 = var5[var10];
    var7 = var11.bind(var0)(var7);
    var7 = var7.spacing;
    var7 = var7.PX_16;
    var3.right = var7;
    var _closure1_slot23 = var3;
    var3 = 12;
    var3 = var5[var3];
    var8 = var11.bind(var0)(var3);
    var7 = var8.createAnimatedComponent;
    var3 = 13;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var3 = var7.bind(var8)(var3);
    var _closure1_slot24 = var3;
    var3 = 14;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {
        'position': 'absolute',
        'left': 0,
        'right': 0,
        'bottom': 0,
        'flexDirection': 'row',
        'alignItems': 'center',
        'backgroundColor': null,
        'overflow': 'hidden'
    };
    var12 = 'row';
    var17 = var5[var10];
    var17 = var11.bind(var0)(var17);
    var17 = var17.colors;
    var17 = var17.BACKGROUND_SURFACE_HIGHEST;
    var9.backgroundColor = var17;
    var17 = var5[var10];
    var17 = var11.bind(var0)(var17);
    var17 = var17.shadows;
    var19 = var17.SHADOW_TOP_HIGH;
    var20 = var9;
    var17 = copyDataProperties(var20, var19);
    var3.youRow = var9;
    var9 = {};
    var9.marginHorizontal = var16;
    var9.borderWidth = var15;
    var16 = var5[var10];
    var16 = var11.bind(var0)(var16);
    var16 = var16.colors;
    var16 = var16.BORDER_MUTED;
    var9.borderColor = var16;
    var16 = var13 / var14;
    var9.borderRadius = var16;
    var3.youRowFloating = var9;
    var9 = {
        'flexDirection': 'row',
        'gap': 8
    };
    var3.youRowRight = var9;
    var9 = {};
    var9.flex = var15;
    var15 = var5[var10];
    var15 = var11.bind(var0)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_12;
    var9.marginRight = var15;
    var15 = var13 / var14;
    var9.borderRadius = var15;
    var3.youPressable = var9;
    var9 = {
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var13 = var13 / var14;
    var9.borderRadius = var13;
    var3.youButton = var9;
    var9 = {
        'flex': 1,
        'flexDirection': 'column',
        'marginLeft': null,
        'justifyContent': 'center',
        'height': '100%'
    };
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_8;
    var9.marginLeft = var13;
    var3.userText = var9;
    var9 = {
        'position': 'relative',
        'overflow': 'hidden'
    };
    var3.usernameContainer = var9;
    var9 = {};
    var9.flexDirection = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_4;
    var9.gap = var12;
    var3.statusRow = var9;
    var12 = 16;
    var9 = {
        'width': 16,
        'height': 16
    };
    var3.statusEmoji = var9;
    var9 = {
        'position': 'absolute',
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var3.usernameRow = var9;
    var9 = {};
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_MOD_MUTED;
    var9.backgroundColor = var13;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.round;
    var9.borderRadius = var13;
    var9.height = var12;
    var12 = 80;
    var9.width = var12;
    var3.placeholder = var9;
    var9 = {};
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BASE_LOW;
    var9.backgroundColor = var12;
    var3.youRowClientTheme = var9;
    var9 = {
        'position': 'relative',
        'borderRadius': null,
        'overflow': 'hidden'
    };
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.round;
    var9.borderRadius = var12;
    var3.buttonContainer = var9;
    var9 = {
        'width': 20,
        'height': 20
    };
    var3.largeButtonIcon = var9;
    var9 = {};
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_FEEDBACK_NOTIFICATION;
    var9.backgroundColor = var12;
    var3.settingsBadge = var9;
    var9 = {};
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_BRAND;
    var9.backgroundColor = var10;
    var3.icymiBadge = var9;
    var9 = {
        'position': 'absolute',
        'bottom': 0,
        'left': 0,
        'right': 0
    };
    var3.floatingShade = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot25 = var3;
    var3 = {
        'damping': 10,
        'stiffness': 300,
        'mass': 1,
        'overshootClamping': true,
        'restSpeedThreshold': 0.001,
        'restDisplacementThreshold': 0.001
    };
    var _closure1_slot26 = var3;
    var3 = {
        'damping': 20,
        'stiffness': 200,
        'mass': 1,
        'restSpeedThreshold': 0.001,
        'restDisplacementThreshold': 0.001
    };
    var _closure1_slot27 = var3;
    var3 = {};
    var7 = 'function YouBarTsx1(){const{runOnJS,onCleanup}=this.__closure;runOnJS(onCleanup)();}';
    var3.code = var7;
    var _closure1_slot28 = var3;
    var3 = {};
    var7 = 'function YouBarTsx2(){const{runOnJS,cleanup}=this.__closure;runOnJS(cleanup)();}';
    var3.code = var7;
    var _closure1_slot29 = var3;
    var3 = {};
    var7 = 'function YouBarTsx3(){const{runOnJS,onCleanup}=this.__closure;runOnJS(onCleanup)();}';
    var3.code = var7;
    var _closure1_slot30 = var3;
    var7 = var6.memo;
    var3 = function() { // Environment: var1
        _fun103508: for (var _fun103508_ip = 0;;) switch (_fun103508_ip) {
            case 0:
                var0 = _closure1_slot25;
                var3 = undefined;
                var11 = var0.bind(var3)();
                var5 = _closure1_slot0;
                var0 = _closure1_slot2;
                var1 = 25;
                var1 = var0[var1];
                var1 = var5.bind(var3)(var1);
                var4 = var1.YouBarExperiment;
                var2 = var4.useExperiment;
                var1 = {};
                var6 = 'YouBar';
                var1.location = var6;
                var1 = var2.bind(var4)(var1);
                var7 = var1.animateBetweenServers;
                var _closure2_slot0 = var7;
                var2 = 21;
                var1 = var0[var2];
                var8 = var5.bind(var3)(var1);
                var6 = var8.useStateFromStores;
                var1 = _closure1_slot12;
                var4 = new Array(1);
                var4[0] = var1;
                var1 = function() { // Environment: var19
                    var1 = _closure1_slot12;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var4 = var6.bind(var8)(var4, var1);
                var _closure2_slot1 = var4;
                var1 = var0[var2];
                var10 = var5.bind(var3)(var1);
                var8 = var10.useStateFromStores;
                var1 = _closure1_slot11;
                var6 = new Array(1);
                var6[0] = var1;
                var1 = function() { // Environment: var19
                    var1 = _closure1_slot11;
                    var0 = var1.getStatus;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var22 = var8.bind(var10)(var6, var1);
                var1 = var0[var2];
                var10 = var5.bind(var3)(var1);
                var8 = var10.useStateFromStores;
                var1 = _closure1_slot10;
                var6 = new Array(1);
                var6[0] = var1;
                var1 = function() { // Environment: var19
                    var1 = _closure1_slot10;
                    var0 = var1.getGuildId;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var1 = var8.bind(var10)(var6, var1);
                var _closure2_slot2 = var1;
                var2 = var0[var2];
                var8 = var5.bind(var3)(var2);
                var6 = var8.useStateFromStores;
                var2 = _closure1_slot9;
                var5 = new Array(1);
                var5[0] = var2;
                var2 = function() { // Environment: var19
                    _fun103512: for (var _fun103512_ip = 0;;) switch (_fun103512_ip) {
                        case 0:
                            var0 = _closure2_slot2;
                            var3 = null;
                            var2 = var3 != var0;
                            var0 = null;
                            if (!var2) {
                                _fun103512_ip = 53;
                                continue _fun103512
                            }
                        case 18:
                            var2 = _closure2_slot1;
                            var2 = var3 != var2;
                            var0 = null;
                            if (!var2) {
                                _fun103512_ip = 53;
                                continue _fun103512
                            }
                        case 31:
                            var3 = _closure1_slot9;
                            var2 = var3.getSelfMember;
                            var1 = _closure2_slot2;
                            var0 = var2.bind(var3)(var1);
                        case 53:
                            return var0;
                    }
                };
                var5 = var6.bind(var8)(var5, var2);
                var2 = _closure1_slot1;
                var23 = 26;
                var0 = var0[var23];
                var2 = var2.bind(var3)(var0);
                var0 = var2.useName;
                var8 = var0.bind(var2)(var4);
                var0 = var8;
                if (!var7) {
                    _fun103508_ip = 316;
                    continue _fun103508
                }
            case 274:
                var2 = null;
                var10 = var2 == var5;
                var6 = undefined;
                if (var10) {
                    _fun103508_ip = 291;
                    continue _fun103508
                }
            case 285:
                var6 = var5.nick;
            case 291:
                var0 = var8;
                if (!(var2 != var6)) {
                    _fun103508_ip = 316;
                    continue _fun103508
                }
            case 298:
                var6 = var2 == var5;
                var2 = undefined;
                if (var6) {
                    _fun103508_ip = 313;
                    continue _fun103508
                }
            case 307:
                var2 = var5.nick;
            case 313:
                var0 = var2;
            case 316:
                var _closure2_slot3 = var0;
                var8 = _closure1_slot5;
                var6 = var8.useMemo;
                var5 = new Array(1);
                var5[0] = var0;
                var2 = function() { // Environment: var19
                    _fun103513: for (var _fun103513_ip = 0;;) switch (_fun103513_ip) {
                        case 0:
                            var2 = _closure2_slot3;
                            var0 = null;
                            if (!(var0 == var2)) {
                                _fun103513_ip = 19;
                                continue _fun103513
                            }
                        case 13:
                            var0 = new Array(0);
                            _fun103513_ip = 34;
                            continue _fun103513;
                        case 19:
                            var2 = _closure2_slot3;
                            var1 = new Array(1);
                            var1[0] = var2;
                            var0 = var1;
                        case 34:
                            return var0;
                    }
                };
                var26 = var6.bind(var8)(var2, var5);
                var6 = _closure1_slot5;
                var5 = var6.useMemo;
                var2 = new Array(2);
                var2[0] = var7;
                var2[1] = var1;
                var1 = function() { // Environment: var19
                    _fun103514: for (var _fun103514_ip = 0;;) switch (_fun103514_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var1 = new Array(1);
                            if (var0) {
                                _fun103514_ip = 25;
                                continue _fun103514
                            }
                        case 14:
                            var0 = undefined;
                            var1[0] = var0;
                            var0 = var1;
                            _fun103514_ip = 36;
                            continue _fun103514;
                        case 25:
                            var2 = _closure2_slot2;
                            var1[0] = var2;
                            var0 = var1;
                        case 36:
                            return var0;
                    }
                };
                var8 = var5.bind(var6)(var1, var2);
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 27;
                var1 = var6[var1];
                var2 = var5.bind(var3)(var1);
                var1 = var2.useCustomStatusActivity;
                var21 = var1.bind(var2)();
                var1 = 28;
                var1 = var6[var1];
                var1 = var5.bind(var3)(var1);
                var2 = var1.AVATAR_SIZE_MAP;
                var1 = 23;
                var1 = var6[var1];
                var1 = var5.bind(var3)(var1);
                var1 = var1.AvatarSizes;
                var1 = var1.NORMAL;
                var10 = var2[var1];
                var6 = _closure1_slot5;
                var5 = var6.useCallback;
                var2 = function(arg0, arg1, arg2, arg3) { // Environment: var19
                    var4 = _closure1_slot20;
                    var3 = _closure1_slot42;
                    var2 = {};
                    var0 = arg1;
                    var2.selectedGuildId = var0;
                    var0 = arg2;
                    var2.transitionState = var0;
                    var0 = arg3;
                    var2.cleanup = var0;
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var4.bind(var1)(var3, var2, var0);
                    return var0;
                };
                var1 = new Array(0);
                var7 = var5.bind(var6)(var2, var1);
                var6 = _closure1_slot5;
                var5 = var6.useCallback;
                var2 = new Array(1);
                var2[0] = var4;
                var1 = function(arg0, arg1, arg2, arg3) { // Environment: var19
                    _fun103516: for (var _fun103516_ip = 0;;) switch (_fun103516_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var0 = null;
                            var2 = var0 == var2;
                            if (var2) {
                                _fun103516_ip = 77;
                                continue _fun103516
                            }
                        case 16:
                            var5 = _closure1_slot20;
                            var4 = _closure1_slot41;
                            var3 = {};
                            var2 = arg1;
                            var3.username = var2;
                            var1 = _closure2_slot1;
                            var1 = var1.id;
                            var3.userId = var1;
                            var1 = arg2;
                            var3.transitionState = var1;
                            var1 = arg3;
                            var3.onCleanup = var1;
                            var2 = undefined;
                            var1 = arg0;
                            var0 = var5.bind(var2)(var4, var3, var1);
                        case 77:
                            return var0;
                    }
                };
                var18 = var5.bind(var6)(var1, var2);
                var2 = _closure1_slot21;
                var1 = _closure1_slot6;
                var20 = null;
                if (!(var20 != var4)) {
                    _fun103508_ip = 1117;
                    continue _fun103508
                }
            case 533:
                if (!(var20 != var0)) {
                    _fun103508_ip = 1117;
                    continue _fun103508
                }
            case 540:
                var0 = {};
                var4 = var11.youButton;
                var0.style = var4;
                var6 = _closure1_slot20;
                var29 = _closure1_slot0;
                var30 = _closure1_slot2;
                var25 = 16;
                var4 = var30[var25];
                var4 = var29.bind(var3)(var4);
                var5 = var4.TransitionGroup;
                var4 = {};
                var4.items = var8;
                var8 = function(arg0) { // Original name: getItemKey, environment: var19
                    _fun103517: for (var _fun103517_ip = 0;;) switch (_fun103517_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var1 = null;
                            var1 = var1 == var2;
                            var2 = undefined;
                            if (var1) {
                                _fun103517_ip = 45;
                                continue _fun103517
                            }
                        case 18:
                            var5 = _closure2_slot1;
                            var4 = var5.getAvatarURL;
                            var9 = arg0;
                            var8 = 16;
                            var10 = var5;
                            var7 = false;
                            var6 = false;
                            var2 = var10[var4](var9, var8, var7, var6, var5);
                        case 45:
                            var0 = global;
                            var0 = var0.HermesInternal;
                            var1 = var0.concat;
                            var0 = '';
                            var0 = var1.bind(var0)(var2);
                            return var0;
                    }
                };
                var4.getItemKey = var8;
                var4.renderItem = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot21;
                var6 = _closure1_slot6;
                var5 = {};
                var8 = var11.userText;
                var5.style = var8;
                var12 = _closure1_slot21;
                var8 = {};
                var13 = var11.usernameContainer;
                var8.style = var13;
                var15 = _closure1_slot20;
                var16 = 30;
                var13 = var30[var16];
                var13 = var29.bind(var3)(var13);
                var14 = var13.Text;
                var13 = {
                    'variant': 'heading-md/bold',
                    'color': 'mobile-text-heading-primary',
                    'lineClamp': 1,
                    'maxFontSizeMultiplier': 1.75,
                    'style': null,
                    'children': 'Disquird'
                };
                var24 = 1;
                var17 = {};
                var27 = 0;
                var17.opacity = var27;
                var28 = 19;
                var28 = var30[var28];
                var29 = var29.bind(var3)(var28);
                var28 = var29.isAndroid;
                var28 = var28.bind(var29)();
                if (!var28) {
                    _fun103508_ip = 730;
                    continue _fun103508
                }
            case 727:
                var27 = 2;
            case 730:
                var17.paddingBottom = var27;
                var13.style = var17;
                var14 = var15.bind(var3)(var14, var13);
                var13 = new Array(2);
                var13[0] = var14;
                var17 = _closure1_slot20;
                var15 = _closure1_slot0;
                var14 = _closure1_slot2;
                var14 = var14[var25];
                var14 = var15.bind(var3)(var14);
                var15 = var14.TransitionGroup;
                var14 = {};
                var14.items = var26;
                var19 = function(arg0) { // Original name: getItemKey, environment: var19
                    var0 = arg0;
                    return var0;
                };
                var14.getItemKey = var19;
                var14.renderItem = var18;
                var14 = var17.bind(var3)(var15, var14);
                var13[1] = var14;
                var8.children = var13;
                var12 = var12.bind(var3)(var6, var8);
                var8 = new Array(2);
                var8[0] = var12;
                var14 = _closure1_slot21;
                var13 = _closure1_slot6;
                var12 = {};
                var15 = var11.statusRow;
                var12.style = var15;
                var17 = var20 == var21;
                var15 = undefined;
                if (var17) {
                    _fun103508_ip = 869;
                    continue _fun103508
                }
            case 863:
                var15 = var21.emoji;
            case 869:
                var15 = var20 != var15;
                var17 = null;
                if (!var15) {
                    _fun103508_ip = 935;
                    continue _fun103508
                }
            case 878:
                var19 = _closure1_slot20;
                var18 = _closure1_slot1;
                var26 = _closure1_slot2;
                var15 = 31;
                var15 = var26[var15];
                var18 = var18.bind(var3)(var15);
                var15 = {};
                var15.size = var25;
                var25 = var11.statusEmoji;
                var15.style = var25;
                var25 = var21.emoji;
                var15.emoji = var25;
                var17 = var19.bind(var3)(var18, var15);
            case 935:
                var15 = new Array(2);
                var15[0] = var17;
                var18 = _closure1_slot20;
                var25 = _closure1_slot0;
                var19 = _closure1_slot2;
                var16 = var19[var16];
                var16 = var25.bind(var3)(var16);
                var17 = var16.Text;
                var16 = {
                    'variant': 'text-xs/medium',
                    'color': 'text-default',
                    'lineClamp': 1,
                    'ellipsizeMode': 'tail',
                    'accessibilityHint': null,
                    'maxFontSizeMultiplier': 1.75
                };
                var19 = var19[var23];
                var25 = var25.bind(var3)(var19);
                var19 = var25.humanizeStatus;
                var19 = var19.bind(var25)(var22);
                var16.accessibilityHint = var19;
                var19 = {};
                var19.flexShrink = var24;
                var16.style = var19;
                var24 = var20 == var21;
                var19 = undefined;
                if (var24) {
                    _fun103508_ip = 1034;
                    continue _fun103508
                }
            case 1029:
                var19 = var21.state;
            case 1034:
                if (!(var20 == var19)) {
                    _fun103508_ip = 1066;
                    continue _fun103508
                }
            case 1038:
                var21 = _closure1_slot0;
                var20 = _closure1_slot2;
                var20 = var20[var23];
                var21 = var21.bind(var3)(var20);
                var20 = var21.humanizeStatus;
                var19 = var20.bind(var21)(var22);
            case 1066:
                var16.children = var19;
                var16 = var18.bind(var3)(var17, var16);
                var15[1] = var16;
                var12.children = var15;
                var12 = var14.bind(var3)(var13, var12);
                var8[1] = var12;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                _fun103508_ip = 1262;
                continue _fun103508;
            case 1117:
                var4 = {};
                var5 = var11.youButton;
                var4.style = var5;
                var7 = _closure1_slot20;
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var5 = 29;
                var5 = var8[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.ReactionIcon;
                var5 = {};
                var8 = {};
                var8.width = var10;
                var8.height = var10;
                var5.style = var8;
                var8 = 'background-mod-strong';
                var5.color = var8;
                var6 = var7.bind(var3)(var6, var5);
                var5 = new Array(2);
                var5[0] = var6;
                var8 = _closure1_slot20;
                var7 = _closure1_slot6;
                var6 = {};
                var10 = var11.userText;
                var6.style = var10;
                var10 = _closure1_slot20;
                var9 = {};
                var11 = var11.placeholder;
                var9.style = var11;
                var9 = var10.bind(var3)(var7, var9);
                var6.children = var9;
                var6 = var8.bind(var3)(var7, var6);
                var5[1] = var6;
                var4.children = var5;
                var0 = var4;
            case 1262:
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var3 = var7.bind(var6)(var3);
    var _closure1_slot31 = var3;
    var7 = var6.memo;
    var3 = function(arg0) { // Environment: var1
        _fun103519: for (var _fun103519_ip = 0;;) switch (_fun103519_ip) {
            case 0:
                var1 = arg0;
                var11 = var1.hasNameplate;
                var13 = var1.icon;
                var6 = var1.hasBadge;
                var _closure2_slot0 = var6;
                var14 = var1.badgeStyle;
                var8 = var1.onPress;
                var10 = var1.a11yLabel;
                var1 = _closure1_slot25;
                var3 = undefined;
                var4 = var1.bind(var3)();
                var2 = function(arg0) { // Original name: useIconBadgeCutout, environment: var0
                    _fun103520: for (var _fun103520_ip = 0;;) switch (_fun103520_ip) {
                        case 0:
                            var1 = arg0;
                            var7 = var1.size;
                            var _closure3_slot0 = var7;
                            var6 = var1.xOffset;
                            var2 = undefined;
                            if (!(var6 === var2)) {
                                _fun103520_ip = 28;
                                continue _fun103520
                            }
                        case 26:
                            var6 = 0;
                        case 28:
                            var _closure3_slot1 = var6;
                            var5 = var1.yOffset;
                            if (!(var5 === var2)) {
                                _fun103520_ip = 44;
                                continue _fun103520
                            }
                        case 42:
                            var5 = 0;
                        case 44:
                            var _closure3_slot2 = var5;
                            var9 = var1.badgeRadius;
                            var _closure3_slot3 = var9;
                            var4 = var1.badgeWidth;
                            var _closure3_slot4 = var4;
                            var8 = var1.borderWidth;
                            var _closure3_slot5 = var8;
                            var3 = _closure1_slot5;
                            var2 = var3.useMemo;
                            var1 = new Array(6);
                            var1[0] = var9;
                            var1[1] = var8;
                            var1[2] = var7;
                            var1[3] = var6;
                            var1[4] = var5;
                            var1[5] = var4;
                            var0 = function() { // Environment: var0
                                _fun103521: for (var _fun103521_ip = 0;;) switch (_fun103521_ip) {
                                    case 0:
                                        var1 = _closure3_slot3;
                                        var0 = _closure3_slot5;
                                        var5 = var1 + var0;
                                        var6 = 2;
                                        var3 = var6 * var5;
                                        var2 = _closure3_slot4;
                                        var0 = null;
                                        var1 = var3;
                                        if (!(var0 != var2)) {
                                            _fun103521_ip = 51;
                                            continue _fun103521
                                        }
                                    case 35:
                                        var2 = _closure3_slot4;
                                        var0 = _closure3_slot5;
                                        var0 = var6 * var0;
                                        var1 = var2 + var0;
                                    case 51:
                                        var0 = {};
                                        var8 = _closure1_slot0;
                                        var7 = _closure1_slot2;
                                        var2 = 15;
                                        var7 = var7[var2];
                                        var2 = undefined;
                                        var2 = var8.bind(var2)(var7);
                                        var2 = var2.CutoutShape;
                                        var2 = var2.RoundedRect;
                                        var0.shape = var2;
                                        var2 = _closure3_slot0;
                                        var7 = _closure3_slot5;
                                        var8 = var3 - var7;
                                        var9 = var2 - var8;
                                        var8 = _closure3_slot1;
                                        var8 = var9 + var8;
                                        var0.x = var8;
                                        var7 = var3 - var7;
                                        var7 = var2 - var7;
                                        var4 = _closure3_slot2;
                                        var4 = var7 + var4;
                                        var0.y = var4;
                                        var0.width = var1;
                                        var0.height = var3;
                                        var3 = global;
                                        var4 = var3.Math;
                                        var3 = var4.min;
                                        var2 = var2 / var6;
                                        var1 = var1 / var6;
                                        var1 = var3.bind(var4)(var5, var2, var1);
                                        var0.cornerRadius = var1;
                                        return var0;
                                }
                            };
                            var0 = var2.bind(var3)(var0, var1);
                            return var0;
                    }
                };
                var1 = {
                    'size': 20,
                    'badgeRadius': 4,
                    'borderWidth': 2
                };
                var9 = var2.bind(var3)(var1);
                var _closure2_slot1 = var9;
                var15 = 8;
                var2 = function(arg0) { // Original name: useIconContentStyle, environment: var0
                    _fun103522: for (var _fun103522_ip = 0;;) switch (_fun103522_ip) {
                        case 0:
                            var2 = arg0;
                            var7 = var2.size;
                            var _closure3_slot0 = var7;
                            var6 = var2.badgeSize;
                            var _closure3_slot1 = var6;
                            var4 = var2.xOffset;
                            var1 = undefined;
                            if (!(var4 === var1)) {
                                _fun103522_ip = 38;
                                continue _fun103522
                            }
                        case 36:
                            var4 = 0;
                        case 38:
                            var _closure3_slot2 = var4;
                            var5 = var2.yOffset;
                            if (!(var5 === var1)) {
                                _fun103522_ip = 54;
                                continue _fun103522
                            }
                        case 52:
                            var5 = 0;
                        case 54:
                            var _closure3_slot3 = var5;
                            var3 = _closure1_slot5;
                            var2 = var3.useMemo;
                            var1 = new Array(4);
                            var1[0] = var7;
                            var1[1] = var6;
                            var1[2] = var5;
                            var1[3] = var4;
                            var0 = function() { // Environment: var0
                                var0 = {};
                                var1 = 'absolute';
                                var0.position = var1;
                                var3 = _closure3_slot0;
                                var2 = _closure3_slot1;
                                var5 = var3 - var2;
                                var4 = _closure3_slot2;
                                var4 = var5 + var4;
                                var0.left = var4;
                                var2 = var3 - var2;
                                var1 = _closure3_slot3;
                                var1 = var2 + var1;
                                var0.top = var1;
                                var1 = undefined;
                                var0.right = var1;
                                var0.bottom = var1;
                                var0.padding = var1;
                                var0.minWidth = var1;
                                return var0;
                            };
                            var0 = var2.bind(var3)(var0, var1);
                            return var0;
                    }
                };
                var1 = {
                    'size': 20,
                    'badgeSize': 8
                };
                var16 = var2.bind(var3)(var1);
                var5 = _closure1_slot5;
                var2 = var5.useMemo;
                var1 = new Array(2);
                var1[0] = var9;
                var1[1] = var6;
                var0 = function() { // Environment: var0
                    _fun103524: for (var _fun103524_ip = 0;;) switch (_fun103524_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            if (var0) {
                                _fun103524_ip = 16;
                                continue _fun103524
                            }
                        case 10:
                            var0 = new Array(0);
                            _fun103524_ip = 31;
                            continue _fun103524;
                        case 16:
                            var2 = _closure2_slot1;
                            var1 = new Array(1);
                            var1[0] = var2;
                            var0 = var1;
                        case 31:
                            return var0;
                    }
                };
                var17 = var2.bind(var5)(var0, var1);
                var2 = _closure1_slot21;
                var1 = _closure1_slot6;
                var0 = {};
                var5 = {
                    'position': 'relative',
                    'height': 20,
                    'width': 20
                };
                var0.style = var5;
                var12 = _closure1_slot20;
                var9 = _closure1_slot1;
                var18 = _closure1_slot2;
                var5 = 15;
                var5 = var18[var5];
                var9 = var9.bind(var3)(var5);
                var5 = {};
                var5.cutouts = var17;
                var5.children = var13;
                var9 = var12.bind(var3)(var9, var5);
                var5 = new Array(2);
                var5[0] = var9;
                if (!var6) {
                    _fun103519_ip = 274;
                    continue _fun103519
                }
            case 229:
                var13 = _closure1_slot20;
                var12 = _closure1_slot1;
                var17 = _closure1_slot2;
                var9 = 32;
                var9 = var17[var9];
                var12 = var12.bind(var3)(var9);
                var9 = {};
                var9.style = var16;
                var9.size = var15;
                var9.badgeStyle = var14;
                var6 = var13.bind(var3)(var12, var9);
            case 274:
                var5[1] = var6;
                var0.children = var5;
                var9 = var2.bind(var3)(var1, var0);
                var2 = _closure1_slot20;
                var1 = _closure1_slot6;
                var0 = {};
                var4 = var4.buttonContainer;
                var0.style = var4;
                var6 = _closure1_slot20;
                var5 = _closure1_slot0;
                var12 = _closure1_slot2;
                var4 = 33;
                var4 = var12[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.IconButton;
                var4 = {};
                var4.accessibilityLabel = var10;
                var10 = 'tertiary';
                if (!var11) {
                    _fun103519_ip = 357;
                    continue _fun103519
                }
            case 351:
                var10 = 'secondary-overlay';
            case 357:
                var4.variant = var10;
                var10 = 'md';
                var4.size = var10;
                var4.icon = var9;
                var4.onPress = var8;
                var7 = _closure1_slot23;
                var4.hitSlop = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var3 = var7.bind(var6)(var3);
    var _closure1_slot32 = var3;
    var7 = var6.memo;
    var3 = function(arg0) { // Environment: var1
        _fun103525: for (var _fun103525_ip = 0;;) switch (_fun103525_ip) {
            case 0:
                var0 = arg0;
                var11 = var0.hasNameplate;
                var0 = _closure1_slot25;
                var3 = undefined;
                var5 = var0.bind(var3)();
                var1 = _closure1_slot1;
                var10 = _closure1_slot2;
                var0 = 34;
                var0 = var10[var0];
                var0 = var1.bind(var3)(var0);
                var0 = var0.bind(var3)();
                var6 = var0.showDot;
                var2 = _closure1_slot20;
                var1 = _closure1_slot32;
                var0 = {};
                var0.hasNameplate = var11;
                var9 = _closure1_slot20;
                var8 = _closure1_slot0;
                var7 = 35;
                var7 = var10[var7];
                var7 = var8.bind(var3)(var7);
                var8 = var7.FlashIcon;
                var7 = {};
                var10 = 'custom';
                var7.size = var10;
                var10 = var5.largeButtonIcon;
                var7.style = var10;
                var10 = undefined;
                if (!var11) {
                    _fun103525_ip = 122;
                    continue _fun103525
                }
            case 118:
                var10 = 'white';
            case 122:
                var7.color = var10;
                var7 = var9.bind(var3)(var8, var7);
                var0.icon = var7;
                var0.hasBadge = var6;
                var5 = var5.icymiBadge;
                var0.badgeStyle = var5;
                var5 = function() { // Original name: onPress, environment: var5
                    _fun103526: for (var _fun103526_ip = 0;;) switch (_fun103526_ip) {
                        case 0:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 36;
                            var4 = var3[var1];
                            var0 = undefined;
                            var5 = var2.bind(var0)(var4);
                            var4 = var5.triggerHapticFeedback;
                            var1 = var3[var1];
                            var1 = var2.bind(var0)(var1);
                            var1 = var1.HapticFeedbackTypes;
                            var1 = var1.IMPACT_LIGHT;
                            var1 = var4.bind(var5)(var1);
                            var1 = 37;
                            var1 = var3[var1];
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.getRootNavigationRef;
                            var4 = var1.bind(var2)();
                            var1 = null;
                            if (!(var1 != var4)) {
                                _fun103526_ip = 128;
                                continue _fun103526
                            }
                        case 85:
                            var3 = var4.navigate;
                            var2 = {};
                            var1 = 'icymi-screen';
                            var2.screen = var1;
                            var1 = {};
                            var5 = true;
                            var1.inNestedNavigator = var5;
                            var2.params = var1;
                            var1 = 'icymi';
                            var1 = var3.bind(var4)(var1, var2);
                        case 128:
                            return var0;
                    }
                };
                var0.onPress = var5;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var4 = 38;
                var5 = var8[var4];
                var5 = var7.bind(var3)(var5);
                var6 = var5.intl;
                var5 = var6.string;
                var4 = var8[var4];
                var4 = var7.bind(var3)(var4);
                var4 = var4.t;
                var4 = var4.SY4sdZ;
                var4 = var5.bind(var6)(var4);
                var0.a11yLabel = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var3 = var7.bind(var6)(var3);
    var _closure1_slot33 = var3;
    var3 = {};
    var7 = 'function YouBarTsx4(){const{withSpring,badgeCount,SPRING_CONFIG,tokens}=this.__closure;return{transform:[{scaleX:withSpring(badgeCount>0?1:0,SPRING_CONFIG)}],marginLeft:withSpring(badgeCount>0?tokens.spacing.PX_4:0,SPRING_CONFIG),opacity:withSpring(badgeCount>0?1:0,SPRING_CONFIG)};}';
    var3.code = var7;
    var _closure1_slot34 = var3;
    var7 = var6.memo;
    var3 = function(arg0) { // Environment: var1
        _fun103527: for (var _fun103527_ip = 0;;) switch (_fun103527_ip) {
            case 0:
                var0 = arg0;
                var18 = var0.hasNameplate;
                var0 = _closure1_slot25;
                var3 = undefined;
                var17 = var0.bind(var3)();
                var6 = _closure1_slot1;
                var14 = _closure1_slot2;
                var0 = 39;
                var0 = var14[var0];
                var0 = var6.bind(var3)(var0);
                var0 = var0.bind(var3)();
                var19 = var0.value;
                var _closure2_slot0 = var19;
                var12 = _closure1_slot0;
                var13 = 12;
                var0 = var14[var13];
                var2 = var12.bind(var3)(var0);
                var1 = var2.useAnimatedStyle;
                var0 = function() { // Original name: n, environment: var8
                    _fun103528: for (var _fun103528_ip = 0;;) switch (_fun103528_ip) {
                        case 0:
                            var0 = {};
                            var3 = {};
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var7 = 17;
                            var2 = var2[var7];
                            var6 = undefined;
                            var10 = var4.bind(var6)(var2);
                            var9 = var10.withSpring;
                            var2 = _closure2_slot0;
                            var4 = 0;
                            var2 = var2 > var4;
                            var8 = 0;
                            if (!var2) {
                                _fun103528_ip = 55;
                                continue _fun103528
                            }
                        case 52:
                            var8 = 1;
                        case 55:
                            var2 = _closure1_slot26;
                            var2 = var9.bind(var10)(var8, var2);
                            var3.scaleX = var2;
                            var2 = new Array(1);
                            var2[0] = var3;
                            var0.transform = var2;
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var2 = var2[var7];
                            var9 = var3.bind(var6)(var2);
                            var8 = var9.withSpring;
                            var2 = _closure2_slot0;
                            var2 = var2 > var4;
                            var3 = 0;
                            if (!var2) {
                                _fun103528_ip = 148;
                                continue _fun103528
                            }
                        case 117:
                            var10 = _closure1_slot1;
                            var11 = _closure1_slot2;
                            var2 = 11;
                            var2 = var11[var2];
                            var2 = var10.bind(var6)(var2);
                            var2 = var2.spacing;
                            var3 = var2.PX_4;
                        case 148:
                            var2 = _closure1_slot26;
                            var2 = var8.bind(var9)(var3, var2);
                            var0.marginLeft = var2;
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var2 = var2[var7];
                            var3 = var3.bind(var6)(var2);
                            var2 = var3.withSpring;
                            var5 = _closure2_slot0;
                            var5 = var5 > var4;
                            var4 = 0;
                            if (!var5) {
                                _fun103528_ip = 201;
                                continue _fun103528
                            }
                        case 198:
                            var4 = 1;
                        case 201:
                            var1 = _closure1_slot26;
                            var1 = var2.bind(var3)(var4, var1);
                            var0.opacity = var1;
                            return var0;
                    }
                };
                var4 = {};
                var5 = 17;
                var5 = var14[var5];
                var5 = var12.bind(var3)(var5);
                var5 = var5.withSpring;
                var4.withSpring = var5;
                var4.badgeCount = var19;
                var5 = _closure1_slot26;
                var4.SPRING_CONFIG = var5;
                var5 = 11;
                var5 = var14[var5];
                var5 = var6.bind(var3)(var5);
                var4.tokens = var5;
                var0.__closure = var4;
                var4 = 11940471407864.0;
                var0.__workletHash = var4;
                var4 = _closure1_slot34;
                var0.__initData = var4;
                var16 = var1.bind(var2)(var0);
                var2 = _closure1_slot20;
                var1 = _closure1_slot6;
                var0 = {};
                var4 = var17.buttonContainer;
                var0.style = var4;
                var6 = _closure1_slot20;
                var4 = 33;
                var4 = var14[var4];
                var4 = var12.bind(var3)(var4);
                var5 = var4.IconButton;
                var4 = {};
                var9 = 38;
                var10 = var14[var9];
                var10 = var12.bind(var3)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var9 = var14[var9];
                var9 = var12.bind(var3)(var9);
                var9 = var9.t;
                var9 = var9.HcoRu0;
                var9 = var10.bind(var11)(var9);
                var4.accessibilityLabel = var9;
                var9 = 'tertiary';
                if (!var18) {
                    _fun103527_ip = 285;
                    continue _fun103527
                }
            case 279:
                var9 = 'secondary-overlay';
            case 285:
                var4.variant = var9;
                var9 = 'md';
                var4.size = var9;
                var11 = _closure1_slot21;
                var10 = _closure1_slot6;
                var9 = {};
                var12 = {
                    'display': 'flex',
                    'flexDirection': 'row',
                    'alignItems': 'center'
                };
                var9.style = var12;
                var15 = _closure1_slot20;
                var14 = _closure1_slot0;
                var20 = _closure1_slot2;
                var12 = 40;
                var12 = var20[var12];
                var12 = var14.bind(var3)(var12);
                var14 = var12.BellIcon;
                var12 = {};
                var20 = 'custom';
                var12.size = var20;
                var17 = var17.largeButtonIcon;
                var12.style = var17;
                var17 = undefined;
                if (!var18) {
                    _fun103527_ip = 384;
                    continue _fun103527
                }
            case 380:
                var17 = 'white';
            case 384:
                var12.color = var17;
                var14 = var15.bind(var3)(var14, var12);
                var12 = new Array(2);
                var12[0] = var14;
                var15 = _closure1_slot20;
                var17 = _closure1_slot1;
                var20 = _closure1_slot2;
                var13 = var20[var13];
                var13 = var17.bind(var3)(var13);
                var14 = var13.View;
                var13 = {};
                var13.style = var16;
                var18 = _closure1_slot20;
                var16 = 41;
                var16 = var20[var16];
                var17 = var17.bind(var3)(var16);
                var16 = {};
                var16.value = var19;
                var16 = var18.bind(var3)(var17, var16);
                var13.children = var16;
                var13 = var15.bind(var3)(var14, var13);
                var12[1] = var13;
                var9.children = var12;
                var9 = var11.bind(var3)(var10, var9);
                var4.icon = var9;
                var8 = function() { // Original name: onPress, environment: var8
                    _fun103529: for (var _fun103529_ip = 0;;) switch (_fun103529_ip) {
                        case 0:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 36;
                            var4 = var3[var1];
                            var0 = undefined;
                            var5 = var2.bind(var0)(var4);
                            var4 = var5.triggerHapticFeedback;
                            var1 = var3[var1];
                            var1 = var2.bind(var0)(var1);
                            var1 = var1.HapticFeedbackTypes;
                            var1 = var1.IMPACT_LIGHT;
                            var1 = var4.bind(var5)(var1);
                            var1 = 37;
                            var1 = var3[var1];
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.getRootNavigationRef;
                            var4 = var1.bind(var2)();
                            var1 = null;
                            if (!(var1 != var4)) {
                                _fun103529_ip = 110;
                                continue _fun103529
                            }
                        case 85:
                            var3 = var4.navigate;
                            var2 = {};
                            var1 = true;
                            var2.inNestedNavigator = var1;
                            var1 = 'notifications';
                            var1 = var3.bind(var4)(var1, var2);
                        case 110:
                            return var0;
                    }
                };
                var4.onPress = var8;
                var7 = _closure1_slot23;
                var4.hitSlop = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var3 = var7.bind(var6)(var3);
    var _closure1_slot35 = var3;
    var7 = var6.memo;
    var3 = function(arg0) { // Environment: var1
        _fun103530: for (var _fun103530_ip = 0;;) switch (_fun103530_ip) {
            case 0:
                var0 = arg0;
                var10 = var0.hasNameplate;
                var0 = _closure1_slot25;
                var3 = undefined;
                var5 = var0.bind(var3)();
                var2 = _closure1_slot20;
                var1 = _closure1_slot32;
                var0 = {};
                var0.hasNameplate = var10;
                var8 = _closure1_slot20;
                var7 = _closure1_slot0;
                var9 = _closure1_slot2;
                var6 = 42;
                var6 = var9[var6];
                var6 = var7.bind(var3)(var6);
                var7 = var6.UserIcon;
                var6 = {};
                var9 = 'custom';
                var6.size = var9;
                var9 = var5.largeButtonIcon;
                var6.style = var9;
                var9 = undefined;
                if (!var10) {
                    _fun103530_ip = 96;
                    continue _fun103530
                }
            case 92:
                var9 = 'white';
            case 96:
                var6.color = var9;
                var6 = var8.bind(var3)(var7, var6);
                var0.icon = var6;
                var6 = false;
                var0.hasBadge = var6;
                var5 = var5.settingsBadge;
                var0.badgeStyle = var5;
                var5 = function() { // Original name: onPress, environment: var5
                    _fun103531: for (var _fun103531_ip = 0;;) switch (_fun103531_ip) {
                        case 0:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 36;
                            var4 = var3[var1];
                            var0 = undefined;
                            var5 = var2.bind(var0)(var4);
                            var4 = var5.triggerHapticFeedback;
                            var1 = var3[var1];
                            var1 = var2.bind(var0)(var1);
                            var1 = var1.HapticFeedbackTypes;
                            var1 = var1.IMPACT_LIGHT;
                            var1 = var4.bind(var5)(var1);
                            var1 = 37;
                            var1 = var3[var1];
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.getRootNavigationRef;
                            var4 = var1.bind(var2)();
                            var1 = null;
                            if (!(var1 != var4)) {
                                _fun103531_ip = 110;
                                continue _fun103531
                            }
                        case 85:
                            var3 = var4.navigate;
                            var2 = {};
                            var1 = true;
                            var2.inNestedNavigator = var1;
                            var1 = 'you';
                            var1 = var3.bind(var4)(var1, var2);
                        case 110:
                            return var0;
                    }
                };
                var0.onPress = var5;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var4 = 38;
                var5 = var8[var4];
                var5 = var7.bind(var3)(var5);
                var6 = var5.intl;
                var5 = var6.string;
                var4 = var8[var4];
                var4 = var7.bind(var3)(var4);
                var4 = var4.t;
                var4 = var4.LYju5J;
                var4 = var5.bind(var6)(var4);
                var0.a11yLabel = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var3 = var7.bind(var6)(var3);
    var _closure1_slot36 = var3;
    var3 = {};
    var7 = 'function YouBarTsx5(){const{withSpring,isPressed,SPRING_CONFIG}=this.__closure;return{transform:[{scale:withSpring(isPressed?0.98:1,SPRING_CONFIG)}]};}';
    var3.code = var7;
    var _closure1_slot37 = var3;
    var7 = var6.memo;
    var3 = function() { // Environment: var1
        _fun103532: for (var _fun103532_ip = 0;;) switch (_fun103532_ip) {
            case 0:
                var0 = _closure1_slot25;
                var3 = undefined;
                var12 = var0.bind(var3)();
                var _closure2_slot0 = var12;
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var0 = 43;
                var0 = var5[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.bind(var3)();
                var1 = var0.width;
                var2 = _closure1_slot0;
                var0 = 44;
                var0 = var5[var0];
                var2 = var2.bind(var3)(var0);
                var0 = var2.useDrawerWidth;
                var2 = var0.bind(var2)();
                var0 = 45;
                var0 = var5[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.bind(var3)();
                var5 = var0.isChatBesideChannelList;
                var0 = _closure1_slot16;
                var4 = 2;
                var0 = var4 * var0;
                if (var5) {
                    _fun103532_ip = 116;
                    continue _fun103532
                }
            case 110:
                var1 = var1 - var0;
                _fun103532_ip = 120;
                continue _fun103532;
            case 116:
                var1 = var2 - var0;
            case 120:
                var _closure2_slot1 = var1;
                var0 = _closure1_slot13;
                var0 = var0.bind(var3)();
                var _closure2_slot2 = var0;
                var6 = _closure1_slot5;
                var5 = var6.useMemo;
                var2 = new Array(3);
                var2[0] = var1;
                var2[1] = var0;
                var2[2] = var12;
                var0 = function() { // Environment: var18
                    var0 = {};
                    var2 = _closure2_slot0;
                    var5 = var2.youRow;
                    var6 = var0;
                    var3 = copyDataProperties(var6, var5);
                    var5 = var2.youRowFloating;
                    var6 = var0;
                    var2 = copyDataProperties(var6, var5);
                    var4 = _closure1_slot15;
                    var3 = 'height';
                    var0[var3] = var4;
                    var4 = _closure2_slot2;
                    var3 = 'marginBottom';
                    var0[var3] = var4;
                    var3 = _closure1_slot17;
                    var2 = 1;
                    var3 = var3 - var2;
                    var2 = 'padding';
                    var0[var2] = var3;
                    var2 = _closure2_slot1;
                    var1 = 'width';
                    var0[var1] = var2;
                    return var0;
                };
                var6 = var5.bind(var6)(var0, var2);
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 46;
                var0 = var7[var0];
                var8 = var5.bind(var3)(var0);
                var2 = var8.useICYMIEnabled;
                var0 = 'TabsNavigator';
                var8 = var2.bind(var8)(var0);
                var0 = 25;
                var2 = var7[var0];
                var2 = var5.bind(var3)(var2);
                var13 = var2.YouBarExperiment;
                var9 = var13.useExperiment;
                var2 = {};
                var11 = 'YouBar';
                var2.location = var11;
                var2 = var9.bind(var13)(var2);
                var14 = var2.animateBetweenServers;
                var0 = var7[var0];
                var0 = var5.bind(var3)(var0);
                var9 = var0.YouBarExperiment;
                var2 = var9.useExperiment;
                var0 = {};
                var0.location = var11;
                var0 = var2.bind(var9)(var0);
                var11 = var0.profileButton;
                var0 = 21;
                var2 = var7[var0];
                var15 = var5.bind(var3)(var2);
                var13 = var15.useStateFromStores;
                var2 = _closure1_slot12;
                var9 = new Array(1);
                var9[0] = var2;
                var2 = function() { // Environment: var18
                    var1 = _closure1_slot12;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var9 = var13.bind(var15)(var9, var2);
                var2 = var7[var0];
                var16 = var5.bind(var3)(var2);
                var15 = var16.useStateFromStores;
                var2 = _closure1_slot10;
                var13 = new Array(1);
                var13[0] = var2;
                var2 = function() { // Environment: var18
                    var1 = _closure1_slot10;
                    var0 = var1.getGuildId;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var13 = var15.bind(var16)(var13, var2);
                var2 = 47;
                var2 = var7[var2];
                var7 = var5.bind(var3)(var2);
                var5 = var7.useNameplate;
                var2 = {};
                var2.user = var9;
                var9 = undefined;
                if (!var14) {
                    _fun103532_ip = 420;
                    continue _fun103532
                }
            case 406:
                var14 = null;
                var14 = var14 != var13;
                var9 = undefined;
                if (!var14) {
                    _fun103532_ip = 420;
                    continue _fun103532
                }
            case 417:
                var9 = var13;
            case 420:
                var2.guildId = var9;
                var20 = var5.bind(var7)(var2);
                var9 = null;
                var13 = var9 != var20;
                var15 = _closure1_slot1;
                var16 = _closure1_slot2;
                var2 = 48;
                var2 = var16[var2];
                var2 = var15.bind(var3)(var2);
                var14 = var2.bind(var3)();
                var2 = 11;
                var5 = var16[var2];
                var5 = var15.bind(var3)(var5);
                var7 = var5.internal;
                var5 = var7.resolveSemanticColor;
                var2 = var16[var2];
                var2 = var15.bind(var3)(var2);
                var2 = var2.colors;
                var2 = var2.BACKGROUND_SURFACE_HIGHEST;
                var2 = var5.bind(var7)(var14, var2);
                var15 = _closure1_slot0;
                var0 = var16[var0];
                var14 = var15.bind(var3)(var0);
                var7 = var14.useStateFromStores;
                var0 = _closure1_slot8;
                var5 = new Array(1);
                var5[0] = var0;
                var0 = function() { // Environment: var18
                    var0 = _closure1_slot8;
                    var0 = var0.gradientPreset;
                    return var0;
                };
                var0 = var7.bind(var14)(var5, var0);
                var5 = 49;
                var7 = var16[var5];
                var14 = var15.bind(var3)(var7);
                var7 = var14.useGradientValue;
                var5 = var16[var5];
                var5 = var15.bind(var3)(var5);
                var5 = var5.GradientPercentage;
                var5 = var5.END;
                var17 = var7.bind(var14)(var5);
                if (var13) {
                    _fun103532_ip = 635;
                    continue _fun103532
                }
            case 599:
                if (!(var9 != var0)) {
                    _fun103532_ip = 635;
                    continue _fun103532
                }
            case 603:
                var7 = _closure1_slot18;
                var5 = var0.id;
                var5 = var7[var5];
                if (!(var9 != var5)) {
                    _fun103532_ip = 635;
                    continue _fun103532
                }
            case 620:
                var5 = _closure1_slot18;
                var0 = var0.id;
                var19 = var5[var0];
                _fun103532_ip = 738;
                continue _fun103532;
            case 635:
                var19 = var2;
                if (var13) {
                    _fun103532_ip = 738;
                    continue _fun103532
                }
            case 641:
                var0 = var9 != var17;
                var19 = undefined;
                if (!var0) {
                    _fun103532_ip = 738;
                    continue _fun103532
                }
            case 650:
                var5 = _closure1_slot1;
                var16 = _closure1_slot2;
                var0 = 50;
                var7 = var16[var0];
                var15 = var5.bind(var3)(var7);
                var14 = var15.mix;
                var7 = var16[var0];
                var7 = var5.bind(var3)(var7);
                var7 = var7.bind(var3)(var17);
                var0 = var16[var0];
                var0 = var5.bind(var3)(var0);
                var24 = var0.bind(var3)(var2);
                var23 = 0.8;
                var22 = 'hsl';
                var26 = var15;
                var25 = var7;
                var2 = var26[var14](var25, var24, var23, var22, var21);
                var0 = var2.hex;
                var19 = var0.bind(var2)();
            case 738:
                var5 = _closure1_slot5;
                var2 = var5.useState;
                var0 = false;
                var2 = var2.bind(var5)(var0);
                var0 = _closure1_slot4;
                var2 = var0.bind(var3)(var2, var4);
                var0 = 0;
                var15 = var2[var0];
                var _closure2_slot3 = var15;
                var0 = 1;
                var0 = var2[var0];
                var _closure2_slot4 = var0;
                var17 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 12;
                var2 = var4[var0];
                var7 = var17.bind(var3)(var2);
                var5 = var7.useAnimatedStyle;
                var2 = function() { // Original name: X, environment: var18
                    _fun103537: for (var _fun103537_ip = 0;;) switch (_fun103537_ip) {
                        case 0:
                            var0 = {};
                            var2 = {};
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var3 = 17;
                            var4 = var4[var3];
                            var3 = undefined;
                            var5 = var5.bind(var3)(var4);
                            var4 = var5.withSpring;
                            var6 = _closure2_slot3;
                            var3 = 1;
                            if (!var6) {
                                _fun103537_ip = 57;
                                continue _fun103537
                            }
                        case 47:
                            var3 = 0.98;
                        case 57:
                            var1 = _closure1_slot26;
                            var1 = var4.bind(var5)(var3, var1);
                            var2.scale = var1;
                            var1 = new Array(1);
                            var1[0] = var2;
                            var0.transform = var1;
                            return var0;
                    }
                };
                var14 = {};
                var16 = 17;
                var16 = var4[var16];
                var16 = var17.bind(var3)(var16);
                var16 = var16.withSpring;
                var14.withSpring = var16;
                var14.isPressed = var15;
                var15 = _closure1_slot26;
                var14.SPRING_CONFIG = var15;
                var2.__closure = var14;
                var14 = 2650830876227.0;
                var2.__workletHash = var14;
                var14 = _closure1_slot37;
                var2.__initData = var14;
                var5 = var5.bind(var7)(var2);
                var15 = _closure1_slot5;
                var14 = var15.useCallback;
                var7 = function() { // Environment: var18
                    _fun103538: for (var _fun103538_ip = 0;;) switch (_fun103538_ip) {
                        case 0:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 36;
                            var4 = var3[var1];
                            var0 = undefined;
                            var5 = var2.bind(var0)(var4);
                            var4 = var5.triggerHapticFeedback;
                            var1 = var3[var1];
                            var1 = var2.bind(var0)(var1);
                            var1 = var1.HapticFeedbackTypes;
                            var1 = var1.IMPACT_MEDIUM;
                            var1 = var4.bind(var5)(var1);
                            var1 = 37;
                            var1 = var3[var1];
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.getRootNavigationRef;
                            var4 = var1.bind(var2)();
                            var1 = null;
                            if (!(var1 != var4)) {
                                _fun103538_ip = 124;
                                continue _fun103538
                            }
                        case 85:
                            var3 = var4.navigate;
                            var2 = {};
                            var1 = true;
                            var2.inNestedNavigator = var1;
                            var1 = 'you';
                            var1 = var3.bind(var4)(var1, var2);
                            var2 = _closure2_slot4;
                            var1 = false;
                            var1 = var2.bind(var0)(var1);
                        case 124:
                            return var0;
                    }
                };
                var2 = new Array(0);
                var15 = var14.bind(var15)(var7, var2);
                var16 = _closure1_slot5;
                var14 = var16.useCallback;
                var7 = _closure1_slot3;
                var2 = function*() { // Environment: var18
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun103540: for (var _fun103540_ip = 0;;) switch (_fun103540_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun103540_ip = 137;
                                    continue _fun103540
                                }
                            case 10:
                                var4 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var3 = 36;
                                var5 = var1[var3];
                                var2 = undefined;
                                var6 = var4.bind(var2)(var5);
                                var5 = var6.triggerHapticFeedback;
                                var3 = var1[var3];
                                var3 = var4.bind(var2)(var3);
                                var3 = var3.HapticFeedbackTypes;
                                var3 = var3.IMPACT_LIGHT;
                                var3 = var5.bind(var6)(var3);
                                var3 = 52;
                                var3 = var1[var3];
                                var4 = var4.bind(var2)(var3);
                                var3 = 51;
                                var3 = var1[var3];
                                var1 = var1.paths;
                                var1 = var4.bind(var2)(var3, var1);
                                SaveGenerator(address = 101);
                            case 99:
                                return var1;
                            case 101:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                if (var3) {
                                    _fun103540_ip = 134;
                                    continue _fun103540
                                }
                            case 107:
                                var3 = var1.showYouAccountActionSheet;
                                var3 = var3.bind(var1)();
                                var4 = _closure2_slot4;
                                var3 = false;
                                var3 = var4.bind(var2)(var3);
                                return var2;
                            case 134:
                                return var1;
                            case 137:
                                return var0;
                        }
                    };
                    return var0;
                };
                var7 = var7.bind(var3)(var2);
                var2 = new Array(0);
                var14 = var14.bind(var16)(var7, var2);
                var17 = _closure1_slot5;
                var16 = var17.useCallback;
                var7 = function() { // Environment: var18
                    var2 = _closure2_slot4;
                    var0 = undefined;
                    var1 = true;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var2 = new Array(0);
                var17 = var16.bind(var17)(var7, var2);
                var21 = _closure1_slot5;
                var16 = var21.useCallback;
                var7 = function() { // Environment: var18
                    var2 = _closure2_slot4;
                    var0 = undefined;
                    var1 = false;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var2 = new Array(0);
                var16 = var16.bind(var21)(var7, var2);
                var21 = _closure1_slot5;
                var7 = var21.useCallback;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function(arg0, arg1, arg2, arg3) { // Environment: var18
                    var4 = _closure1_slot20;
                    var3 = _closure1_slot43;
                    var2 = {};
                    var0 = arg1;
                    var2.nameplate = var0;
                    var0 = arg2;
                    var2.transitionState = var0;
                    var0 = arg3;
                    var2.onCleanup = var0;
                    var0 = _closure2_slot1;
                    var2.barWidth = var0;
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var4.bind(var1)(var3, var2, var0);
                    return var0;
                };
                var7 = var7.bind(var21)(var1, var2);
                var2 = _closure1_slot21;
                var1 = _closure1_slot1;
                var0 = var4[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.View;
                var0 = {};
                var4 = new Array(3);
                var4[0] = var6;
                var4[1] = var5;
                var6 = var9 != var19;
                var5 = null;
                if (!var6) {
                    _fun103532_ip = 1089;
                    continue _fun103532
                }
            case 1080:
                var6 = {};
                var6.backgroundColor = var19;
                var5 = var6;
            case 1089:
                var4[2] = var5;
                var0.style = var4;
                var6 = _closure1_slot20;
                var5 = _closure1_slot0;
                var19 = _closure1_slot2;
                var4 = 16;
                var4 = var19[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.TransitionGroup;
                var4 = {};
                var19 = new Array(1);
                var19[0] = var20;
                var4.items = var19;
                var18 = function(arg0) { // Original name: getItemKey, environment: var18
                    _fun103544: for (var _fun103544_ip = 0;;) switch (_fun103544_ip) {
                        case 0:
                            var0 = arg0;
                            var1 = null;
                            var1 = var1 == var0;
                            var2 = undefined;
                            if (var1) {
                                _fun103544_ip = 20;
                                continue _fun103544
                            }
                        case 14:
                            var2 = var0.src;
                        case 20:
                            var0 = global;
                            var0 = var0.HermesInternal;
                            var1 = var0.concat;
                            var0 = '';
                            var0 = var1.bind(var0)(var2);
                            return var0;
                    }
                };
                var4.getItemKey = var18;
                var4.renderItem = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(3);
                var4[0] = var5;
                var7 = _closure1_slot20;
                var6 = _closure1_slot7;
                var5 = {};
                var18 = var12.youPressable;
                var5.style = var18;
                var18 = {};
                var19 = 'transparent';
                var18.color = var19;
                var5.android_ripple = var18;
                var5.onPressIn = var17;
                var5.onPressOut = var16;
                var5.onPress = var15;
                var5.onLongPress = var14;
                var14 = _closure1_slot23;
                var5.hitSlop = var14;
                var16 = _closure1_slot20;
                var15 = _closure1_slot31;
                var14 = {};
                var14 = var16.bind(var3)(var15, var14);
                var5.children = var14;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var7 = _closure1_slot21;
                var6 = _closure1_slot6;
                var5 = {};
                var12 = var12.youRowRight;
                var5.style = var12;
                var12 = null;
                if (!var8) {
                    _fun103532_ip = 1312;
                    continue _fun103532
                }
            case 1291:
                var15 = _closure1_slot20;
                var14 = _closure1_slot33;
                var8 = {};
                var8.hasNameplate = var13;
                var12 = var15.bind(var3)(var14, var8);
            case 1312:
                var8 = new Array(3);
                var8[0] = var12;
                var15 = _closure1_slot20;
                var14 = _closure1_slot35;
                var12 = {};
                var12.hasNameplate = var13;
                var12 = var15.bind(var3)(var14, var12);
                var8[1] = var12;
                var9 = null;
                if (!var11) {
                    _fun103532_ip = 1371;
                    continue _fun103532
                }
            case 1350:
                var12 = _closure1_slot20;
                var11 = _closure1_slot36;
                var10 = {};
                var10.hasNameplate = var13;
                var9 = var12.bind(var3)(var11, var10);
            case 1371:
                var8[2] = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var3 = var7.bind(var6)(var3);
    var _closure1_slot38 = var3;
    var3 = {};
    var7 = 'function YouBarTsx6(){const{gradientHeight,drawerWidth}=this.__closure;return{height:gradientHeight,opacity:1,width:drawerWidth};}';
    var3.code = var7;
    var _closure1_slot39 = var3;
    var7 = var6.memo;
    var3 = function() { // Environment: var1
        _fun103545: for (var _fun103545_ip = 0;;) switch (_fun103545_ip) {
            case 0:
                var1 = _closure1_slot25;
                var3 = undefined;
                var8 = var1.bind(var3)();
                var1 = _closure1_slot13;
                var16 = var1.bind(var3)();
                var2 = _closure1_slot15;
                var1 = _closure1_slot14;
                var1 = var2 + var1;
                var12 = var1 + var16;
                var _closure2_slot0 = var12;
                var7 = _closure1_slot1;
                var9 = _closure1_slot2;
                var1 = 43;
                var1 = var9[var1];
                var1 = var7.bind(var3)(var1);
                var1 = var1.bind(var3)();
                var11 = var1.width;
                var _closure2_slot1 = var11;
                var4 = _closure1_slot0;
                var1 = 12;
                var1 = var9[var1];
                var6 = var4.bind(var3)(var1);
                var2 = var6.useAnimatedStyle;
                var1 = function() { // Original name: o, environment: var0
                    var0 = {};
                    var2 = _closure2_slot0;
                    var0.height = var2;
                    var2 = 1;
                    var0.opacity = var2;
                    var1 = _closure2_slot1;
                    var0.width = var1;
                    return var0;
                };
                var10 = {};
                var10.gradientHeight = var12;
                var10.drawerWidth = var11;
                var1.__closure = var10;
                var10 = 13973001753749.0;
                var1.__workletHash = var10;
                var10 = _closure1_slot39;
                var1.__initData = var10;
                var11 = var2.bind(var6)(var1);
                var1 = 21;
                var1 = var9[var1];
                var6 = var4.bind(var3)(var1);
                var2 = var6.useStateFromStores;
                var10 = _closure1_slot8;
                var1 = new Array(1);
                var1[0] = var10;
                var0 = function() { // Environment: var0
                    var0 = _closure1_slot8;
                    var0 = var0.gradientPreset;
                    return var0;
                };
                var0 = var2.bind(var6)(var1, var0);
                var1 = 49;
                var2 = var9[var1];
                var6 = var4.bind(var3)(var2);
                var2 = var6.useGradientValue;
                var1 = var9[var1];
                var1 = var4.bind(var3)(var1);
                var1 = var1.GradientPercentage;
                var1 = var1.END;
                var2 = var2.bind(var6)(var1);
                var1 = 53;
                var1 = var9[var1];
                var6 = var4.bind(var3)(var1);
                var4 = var6.useToken;
                var1 = 11;
                var1 = var9[var1];
                var1 = var7.bind(var3)(var1);
                var1 = var1.colors;
                var1 = var1.BACKGROUND_BASE_LOWEST;
                var4 = var4.bind(var6)(var1);
                var1 = null;
                if (!(var1 != var0)) {
                    _fun103545_ip = 311;
                    continue _fun103545
                }
            case 294:
                var7 = _closure1_slot19;
                var6 = var0.id;
                var6 = var7[var6];
                if (!(var1 == var6)) {
                    _fun103545_ip = 323;
                    continue _fun103545
                }
            case 311:
                var7 = var4;
                if (!(var1 != var2)) {
                    _fun103545_ip = 336;
                    continue _fun103545
                }
            case 318:
                var7 = var2;
                _fun103545_ip = 336;
                continue _fun103545;
            case 323:
                var2 = _closure1_slot19;
                var0 = var0.id;
                var7 = var2[var0];
            case 336:
                var2 = _closure1_slot0;
                var0 = _closure1_slot2;
                var6 = 54;
                var0 = var0[var6];
                var4 = var2.bind(var3)(var0);
                var2 = var4.hex2rgb;
                var0 = 0.97;
                var0 = var2.bind(var4)(var7, var0);
                var4 = var1 != var0;
                var10 = 'transparent';
                var2 = var10;
                if (!var4) {
                    _fun103545_ip = 395;
                    continue _fun103545
                }
            case 392:
                var2 = var0;
            case 395:
                var4 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var6];
                var4 = var4.bind(var3)(var0);
                var0 = var4.hex2rgb;
                var14 = 0;
                var0 = var0.bind(var4)(var2, var14);
                var1 = var1 != var0;
                var9 = var2;
                if (!var1) {
                    _fun103545_ip = 439;
                    continue _fun103545
                }
            case 436:
                var10 = var0;
            case 439:
                var2 = _closure1_slot21;
                var1 = _closure1_slot22;
                var0 = {};
                var7 = _closure1_slot20;
                var6 = _closure1_slot6;
                var4 = {};
                var13 = var8.floatingShade;
                var12 = new Array(3);
                var12[0] = var13;
                var12[1] = var11;
                var13 = {};
                var15 = _closure1_slot15;
                var15 = var15 + var16;
                var13.height = var15;
                var13.opacity = var14;
                var12[2] = var13;
                var4.style = var12;
                var12 = 'box-only';
                var4.pointerEvents = var12;
                var6 = var7.bind(var3)(var6, var4);
                var4 = new Array(2);
                var4[0] = var6;
                var7 = _closure1_slot20;
                var6 = _closure1_slot24;
                var5 = {};
                var12 = var8.floatingShade;
                var8 = new Array(2);
                var8[0] = var12;
                var8[1] = var11;
                var5.style = var8;
                var8 = new Array(3);
                var8[0] = var10;
                var8[1] = var9;
                var8[2] = var9;
                var5.colors = var8;
                var8 = {
                    'x': 0,
                    'y': 0
                };
                var5.start = var8;
                var8 = {
                    'x': 0,
                    'y': 1
                };
                var5.end = var8;
                var8 = [0, 0.7, 1];
                var5.locations = var8;
                var8 = 'none';
                var5.pointerEvents = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var3 = var7.bind(var6)(var3);
    var _closure1_slot40 = var3;
    var3 = var6.memo;
    var1 = function() { // Environment: var1
        var1 = _closure1_slot0;
        var6 = _closure1_slot2;
        var0 = 21;
        var0 = var6[var0];
        var3 = undefined;
        var7 = var1.bind(var3)(var0);
        var4 = var7.useStateFromStores;
        var0 = _closure1_slot8;
        var2 = new Array(1);
        var2[0] = var0;
        var0 = function() { // Environment: var0
            var0 = _closure1_slot8;
            var0 = var0.gradientPreset;
            return var0;
        };
        var4 = var4.bind(var7)(var2, var0);
        var2 = _closure1_slot21;
        var0 = 55;
        var0 = var6[var0];
        var0 = var1.bind(var3)(var0);
        var1 = var0.ThemeContextProvider;
        var0 = {};
        var0.gradient = var4;
        var7 = _closure1_slot20;
        var6 = _closure1_slot40;
        var4 = {};
        var6 = var7.bind(var3)(var6, var4);
        var4 = new Array(2);
        var4[0] = var6;
        var7 = _closure1_slot20;
        var6 = _closure1_slot38;
        var5 = {};
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var1 = var3.bind(var6)(var1);
    var3 = 56;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/YouBar.tsx';
    var3 = var4.bind(var5)(var3);
    var2.ThemedYouBar = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 27, 3168, 1672, 3172, 5618, 1613, 13146, 33, 671, 3679, 4057, 1297, 5418, 3987, 4040, 6881, 478, 7703, 566, 3922, 5413, 6876, 12173, 3195, 5628, 5415, 7639, 3901, 7757, 8854, 7471, 13473, 7819, 3238, 3879, 1234, 13474, 8132, 8589, 9994, 1464, 9767, 3881, 8826, 9049, 3205, 3154, 669, 13475, 1307, 3110, 668, 3118, 2]);