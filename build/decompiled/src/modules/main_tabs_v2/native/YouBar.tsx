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
    var0 = function arg0() {
        _fun102899: for (var _fun102899_ip = 0;;) switch (_fun102899_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.userId;
                var8 = var0.username;
                var15 = var0.transitionState;
                var _closure2_slot0 = var15;
                var14 = var0.onCleanup;
                var _closure2_slot1 = var14;
                var0 = _closure1_slot27;
                var3 = undefined;
                var4 = var0.bind(var3)();
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var0 = 14;
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
                    _fun102900: for (var _fun102900_ip = 0;;) switch (_fun102900_ip) {
                        case 0:
                            var4 = _closure2_slot0;
                            var5 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var6 = 18;
                            var3 = var0[var6];
                            var0 = undefined;
                            var3 = var5.bind(var0)(var3);
                            var3 = var3.TransitionStates;
                            var3 = var3.ENTERED;
                            if (!(var4 !== var3)) {
                                _fun102900_ip = 267;
                                continue _fun102900
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
                                _fun102900_ip = 267;
                                continue _fun102900
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
                                _fun102900_ip = 319;
                                continue _fun102900
                            }
                        case 131:
                            var5 = _closure2_slot2;
                            var4 = var5.set;
                            var11 = _closure1_slot0;
                            var12 = _closure1_slot2;
                            var3 = 19;
                            var3 = var12[var3];
                            var10 = var11.bind(var0)(var3);
                            var9 = var10.withSpring;
                            var15 = _closure1_slot28;
                            var7 = function() {
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 14;
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
                            var6 = 14;
                            var6 = var12[var6];
                            var6 = var11.bind(var0)(var6);
                            var6 = var6.runOnJS;
                            var3.runOnJS = var6;
                            var6 = _closure2_slot1;
                            var3.onCleanup = var6;
                            var7.__closure = var3;
                            var3 = 15382259463637.0;
                            var7.__workletHash = var3;
                            var3 = _closure1_slot30;
                            var7.__initData = var3;
                            var16 = 0;
                            var14 = 'respect-motion-settings';
                            var17 = var10;
                            var13 = var7;
                            var3 = var17[var9](var16, var15, var14, var13, var12);
                            var3 = var4.bind(var5)(var3);
                            _fun102900_ip = 319;
                            continue _fun102900;
                        case 267:
                            var3 = _closure2_slot2;
                            var2 = var3.set;
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var4 = 19;
                            var4 = var6[var4];
                            var6 = var5.bind(var0)(var4);
                            var5 = var6.withSpring;
                            var4 = _closure1_slot29;
                            var1 = 1;
                            var1 = var5.bind(var6)(var1, var4);
                            var1 = var2.bind(var3)(var1);
                        case 319:
                            return var0;
                    }
                };
                var1 = var6.bind(var7)(var1, var2);
                var2 = _closure1_slot23;
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
                var7 = _closure1_slot22;
                var4 = 20;
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
                var11 = 21;
                var11 = var13[var11];
                var12 = var12.bind(var3)(var11);
                var11 = var12.isAndroid;
                var11 = var11.bind(var12)();
                if (!var11) {
                    _fun102899_ip = 250;
                    continue _fun102899
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
                var7 = _closure1_slot22;
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var5 = 22;
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
    var0 = function arg0() {
        _fun102902: for (var _fun102902_ip = 0;;) switch (_fun102902_ip) {
            case 0:
                var1 = arg0;
                var16 = var1.selectedGuildId;
                var9 = var1.transitionState;
                var _closure2_slot0 = var9;
                var11 = var1.cleanup;
                var _closure2_slot1 = var11;
                var1 = _closure1_slot27;
                var4 = undefined;
                var8 = var1.bind(var4)();
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 23;
                var5 = var3[var1];
                var10 = var2.bind(var4)(var5);
                var7 = var10.useStateFromStores;
                var5 = _closure1_slot11;
                var6 = new Array(1);
                var6[0] = var5;
                var5 = function() { // Environment: var0
                    var1 = _closure1_slot11;
                    var0 = var1.getStatus;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var12 = var7.bind(var10)(var6, var5);
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
                var17 = var6.bind(var7)(var5, var1);
                var1 = 14;
                var5 = var3[var1];
                var7 = var2.bind(var4)(var5);
                var6 = var7.useSharedValue;
                var5 = 0;
                var5 = var6.bind(var7)(var5);
                var _closure2_slot2 = var5;
                var10 = _closure1_slot5;
                var7 = var10.useEffect;
                var6 = new Array(3);
                var6[0] = var9;
                var6[1] = var5;
                var6[2] = var11;
                var0 = function() { // Environment: var0
                    _fun102905: for (var _fun102905_ip = 0;;) switch (_fun102905_ip) {
                        case 0:
                            var4 = _closure2_slot0;
                            var5 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var6 = 18;
                            var3 = var0[var6];
                            var0 = undefined;
                            var3 = var5.bind(var0)(var3);
                            var3 = var3.TransitionStates;
                            var3 = var3.ENTERED;
                            if (!(var4 !== var3)) {
                                _fun102905_ip = 267;
                                continue _fun102905
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
                                _fun102905_ip = 267;
                                continue _fun102905
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
                                _fun102905_ip = 319;
                                continue _fun102905
                            }
                        case 131:
                            var5 = _closure2_slot2;
                            var4 = var5.set;
                            var11 = _closure1_slot0;
                            var12 = _closure1_slot2;
                            var3 = 19;
                            var3 = var12[var3];
                            var10 = var11.bind(var0)(var3);
                            var9 = var10.withSpring;
                            var15 = _closure1_slot28;
                            var7 = function() {
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 14;
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
                            var6 = 14;
                            var6 = var12[var6];
                            var6 = var11.bind(var0)(var6);
                            var6 = var6.runOnJS;
                            var3.runOnJS = var6;
                            var6 = _closure2_slot1;
                            var3.cleanup = var6;
                            var7.__closure = var3;
                            var3 = 16071268952598.0;
                            var7.__workletHash = var3;
                            var3 = _closure1_slot31;
                            var7.__initData = var3;
                            var16 = 0;
                            var14 = 'respect-motion-settings';
                            var17 = var10;
                            var13 = var7;
                            var3 = var17[var9](var16, var15, var14, var13, var12);
                            var3 = var4.bind(var5)(var3);
                            _fun102905_ip = 319;
                            continue _fun102905;
                        case 267:
                            var3 = _closure2_slot2;
                            var2 = var3.set;
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var4 = 19;
                            var4 = var6[var4];
                            var6 = var5.bind(var0)(var4);
                            var5 = var6.withSpring;
                            var4 = _closure1_slot29;
                            var1 = 1;
                            var1 = var5.bind(var6)(var1, var4);
                            var1 = var2.bind(var3)(var1);
                        case 319:
                            return var0;
                    }
                };
                var0 = var7.bind(var10)(var0, var6);
                var0 = 24;
                var0 = var3[var0];
                var3 = var2.bind(var4)(var0);
                var2 = var3.useAvatarDecoration;
                var15 = null;
                var6 = var15 != var16;
                var0 = undefined;
                if (!var6) {
                    _fun102902_ip = 232;
                    continue _fun102902
                }
            case 229:
                var0 = var16;
            case 232:
                var14 = var2.bind(var3)(var17, var0);
                var2 = _closure1_slot0;
                var0 = _closure1_slot2;
                var18 = 25;
                var0 = var0[var18];
                var0 = var2.bind(var4)(var0);
                var0 = var0.AvatarSizes;
                var11 = var0.XLARGE_72;
                var2 = var15 == var17;
                var0 = null;
                if (var2) {
                    _fun102902_ip = 776;
                    continue _fun102902
                }
            case 282:
                var3 = _closure1_slot22;
                var2 = _closure1_slot1;
                var10 = _closure1_slot2;
                var1 = var10[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.View;
                var1 = {};
                var6 = {};
                var7 = _closure1_slot0;
                var19 = 26;
                var20 = var10[var19];
                var20 = var7.bind(var4)(var20);
                var21 = var20.AVATAR_SIZE_MAP;
                var20 = var10[var18];
                var20 = var7.bind(var4)(var20);
                var20 = var20.AvatarSizes;
                var20 = var20.NORMAL;
                var20 = var21[var20];
                var6.height = var20;
                var20 = var10[var19];
                var20 = var7.bind(var4)(var20);
                var21 = var20.AVATAR_SIZE_MAP;
                var20 = var10[var18];
                var20 = var7.bind(var4)(var20);
                var20 = var20.AvatarSizes;
                var20 = var20.NORMAL;
                var20 = var21[var20];
                var6.width = var20;
                var6.opacity = var5;
                var5 = 18;
                var5 = var10[var5];
                var5 = var7.bind(var4)(var5);
                var5 = var5.TransitionStates;
                var7 = var5.YEETED;
                var5 = 'relative';
                if (!(var9 === var7)) {
                    _fun102902_ip = 447;
                    continue _fun102902
                }
            case 443:
                var5 = 'absolute';
            case 447:
                var6.position = var5;
                var5 = new Array(1);
                var5[0] = var6;
                var1.style = var5;
                var7 = _closure1_slot22;
                var6 = _closure1_slot6;
                var5 = {};
                var8 = var8.avatarShadow;
                var9 = new Array(2);
                var9[0] = var8;
                var10 = {};
                var8 = 'absolute';
                var10.position = var8;
                var23 = _closure1_slot0;
                var8 = _closure1_slot2;
                var20 = var8[var19];
                var20 = var23.bind(var4)(var20);
                var20 = var20.AVATAR_SIZE_MAP;
                var20 = var20[var11];
                var21 = 2;
                var20 = var20 + var21;
                var10.width = var20;
                var20 = var8[var19];
                var20 = var23.bind(var4)(var20);
                var20 = var20.AVATAR_SIZE_MAP;
                var20 = var20[var11];
                var20 = var20 + var21;
                var10.height = var20;
                var20 = _closure1_slot16;
                var21 = -var20;
                var20 = 1;
                var21 = var21 - var20;
                var10.left = var21;
                var21 = _closure1_slot16;
                var21 = -var21;
                var19 = var8[var19];
                var19 = var23.bind(var4)(var19);
                var22 = var19.AVATAR_SIZE_MAP;
                var19 = var8[var18];
                var19 = var23.bind(var4)(var19);
                var19 = var19.AvatarSizes;
                var19 = var19.XLARGE_72;
                var22 = var22[var19];
                var19 = _closure1_slot15;
                var19 = var22 - var19;
                var19 = var21 - var19;
                var19 = var19 - var20;
                var10.top = var19;
                var9[1] = var10;
                var5.style = var9;
                var10 = _closure1_slot22;
                var9 = _closure1_slot1;
                var8 = var8[var18];
                var9 = var9.bind(var4)(var8);
                var8 = {};
                var8.user = var17;
                var17 = var15 != var16;
                var15 = undefined;
                if (!var17) {
                    _fun102902_ip = 690;
                    continue _fun102902
                }
            case 687:
                var15 = var16;
            case 690:
                var8.guildId = var15;
                var8.size = var11;
                var11 = false;
                var8.animate = var11;
                var11 = true;
                var8.needsOffscreenAlphaCompositing = var11;
                var8.avatarDecoration = var14;
                var14 = _closure1_slot20;
                var14 = var14.UNKNOWN;
                if (!(var12 === var14)) {
                    _fun102902_ip = 741;
                    continue _fun102902
                }
            case 731:
                var13 = _closure1_slot20;
                var12 = var13.OFFLINE;
            case 741:
                var8.status = var12;
                var8.autoStatusCutout = var11;
                var8 = var10.bind(var4)(var9, var8);
                var5.children = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 776:
                return var0;
        }
    };
    var _closure1_slot42 = var0;
    var0 = function() {
        _fun102907: for (var _fun102907_ip = 0;;) switch (_fun102907_ip) {
            case 0:
                var0 = _closure1_slot27;
                var3 = undefined;
                var19 = var0.bind(var3)();
                var5 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 27;
                var0 = var1[var0];
                var0 = var5.bind(var3)(var0);
                var4 = var0.YouBarExperiment;
                var2 = var4.useConfig;
                var0 = {};
                var6 = 'YouBar';
                var0.location = var6;
                var0 = var2.bind(var4)(var0);
                var2 = var0.animateBetweenServers;
                var4 = 23;
                var0 = var1[var4];
                var8 = var5.bind(var3)(var0);
                var7 = var8.useStateFromStores;
                var0 = _closure1_slot12;
                var6 = new Array(1);
                var6[0] = var0;
                var0 = function() { // Environment: var14
                    var1 = _closure1_slot12;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var0 = var7.bind(var8)(var6, var0);
                var _closure2_slot0 = var0;
                var6 = var1[var4];
                var9 = var5.bind(var3)(var6);
                var8 = var9.useStateFromStores;
                var6 = _closure1_slot11;
                var7 = new Array(1);
                var7[0] = var6;
                var6 = function() { // Environment: var14
                    var1 = _closure1_slot11;
                    var0 = var1.getStatus;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var15 = var8.bind(var9)(var7, var6);
                var6 = var1[var4];
                var9 = var5.bind(var3)(var6);
                var8 = var9.useStateFromStores;
                var6 = _closure1_slot10;
                var7 = new Array(1);
                var7[0] = var6;
                var6 = function() { // Environment: var14
                    var1 = _closure1_slot10;
                    var0 = var1.getGuildId;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var6 = var8.bind(var9)(var7, var6);
                var _closure2_slot1 = var6;
                var4 = var1[var4];
                var7 = var5.bind(var3)(var4);
                var6 = var7.useStateFromStores;
                var4 = _closure1_slot9;
                var5 = new Array(1);
                var5[0] = var4;
                var4 = function() { // Environment: var14
                    _fun102911: for (var _fun102911_ip = 0;;) switch (_fun102911_ip) {
                        case 0:
                            var0 = _closure2_slot1;
                            var3 = null;
                            var2 = var3 != var0;
                            var0 = null;
                            if (!var2) {
                                _fun102911_ip = 53;
                                continue _fun102911
                            }
                        case 18:
                            var2 = _closure2_slot0;
                            var2 = var3 != var2;
                            var0 = null;
                            if (!var2) {
                                _fun102911_ip = 53;
                                continue _fun102911
                            }
                        case 31:
                            var3 = _closure1_slot9;
                            var2 = var3.getSelfMember;
                            var1 = _closure2_slot1;
                            var0 = var2.bind(var3)(var1);
                        case 53:
                            return var0;
                    }
                };
                var4 = var6.bind(var7)(var5, var4);
                var5 = _closure1_slot1;
                var16 = 28;
                var1 = var1[var16];
                var5 = var5.bind(var3)(var1);
                var1 = var5.useName;
                var6 = var1.bind(var5)(var0);
                var1 = var6;
                if (!var2) {
                    _fun102907_ip = 312;
                    continue _fun102907
                }
            case 270:
                var2 = null;
                var7 = var2 == var4;
                var5 = undefined;
                if (var7) {
                    _fun102907_ip = 287;
                    continue _fun102907
                }
            case 281:
                var5 = var4.nick;
            case 287:
                var1 = var6;
                if (!(var2 != var5)) {
                    _fun102907_ip = 312;
                    continue _fun102907
                }
            case 294:
                var5 = var2 == var4;
                var2 = undefined;
                if (var5) {
                    _fun102907_ip = 309;
                    continue _fun102907
                }
            case 303:
                var2 = var4.nick;
            case 309:
                var1 = var2;
            case 312:
                var _closure2_slot2 = var1;
                var5 = _closure1_slot5;
                var4 = var5.useMemo;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var14
                    _fun102912: for (var _fun102912_ip = 0;;) switch (_fun102912_ip) {
                        case 0:
                            var2 = _closure2_slot2;
                            var0 = null;
                            if (!(var0 == var2)) {
                                _fun102912_ip = 19;
                                continue _fun102912
                            }
                        case 13:
                            var0 = new Array(0);
                            _fun102912_ip = 34;
                            continue _fun102912;
                        case 19:
                            var2 = _closure2_slot2;
                            var1 = new Array(1);
                            var1[0] = var2;
                            var0 = var1;
                        case 34:
                            return var0;
                    }
                };
                var20 = var4.bind(var5)(var1, var2);
                var23 = _closure1_slot0;
                var24 = _closure1_slot2;
                var1 = 29;
                var1 = var24[var1];
                var2 = var23.bind(var3)(var1);
                var1 = var2.useCustomStatusActivity;
                var17 = var1.bind(var2)();
                var4 = _closure1_slot5;
                var2 = var4.useCallback;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function(arg0, arg1, arg2, arg3) { // Environment: var14
                    _fun102913: for (var _fun102913_ip = 0;;) switch (_fun102913_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var0 = null;
                            var2 = var0 == var2;
                            if (var2) {
                                _fun102913_ip = 77;
                                continue _fun102913
                            }
                        case 16:
                            var5 = _closure1_slot22;
                            var4 = _closure1_slot41;
                            var3 = {};
                            var2 = arg1;
                            var3.username = var2;
                            var1 = _closure2_slot0;
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
                var12 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot23;
                var1 = _closure1_slot6;
                var0 = {};
                var4 = var19.userText;
                var0.style = var4;
                var6 = _closure1_slot23;
                var5 = _closure1_slot6;
                var4 = {};
                var7 = var19.usernameContainer;
                var4.style = var7;
                var10 = _closure1_slot22;
                var9 = 30;
                var7 = var24[var9];
                var7 = var23.bind(var3)(var7);
                var8 = var7.Text;
                var7 = {
                    'variant': 'heading-md/bold',
                    'color': 'mobile-text-heading-primary',
                    'lineClamp': 1,
                    'maxFontSizeMultiplier': 1.75,
                    'style': null,
                    'children': 'Disquird'
                };
                var18 = 1;
                var11 = {};
                var21 = 0;
                var11.opacity = var21;
                var22 = 21;
                var22 = var24[var22];
                var23 = var23.bind(var3)(var22);
                var22 = var23.isAndroid;
                var22 = var22.bind(var23)();
                if (!var22) {
                    _fun102907_ip = 520;
                    continue _fun102907
                }
            case 517:
                var21 = 2;
            case 520:
                var11.paddingBottom = var21;
                var7.style = var11;
                var8 = var10.bind(var3)(var8, var7);
                var7 = new Array(2);
                var7[0] = var8;
                var11 = _closure1_slot22;
                var10 = _closure1_slot0;
                var21 = _closure1_slot2;
                var8 = 18;
                var8 = var21[var8];
                var8 = var10.bind(var3)(var8);
                var10 = var8.TransitionGroup;
                var8 = {};
                var8.items = var20;
                var14 = function arg0() {
                    var0 = arg0;
                    return var0;
                };
                var8.getItemKey = var14;
                var8.renderItem = var12;
                var8 = var11.bind(var3)(var10, var8);
                var7[1] = var8;
                var4.children = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot23;
                var6 = _closure1_slot6;
                var5 = {};
                var8 = var19.statusRow;
                var5.style = var8;
                var14 = null;
                var10 = var14 == var17;
                var8 = undefined;
                if (var10) {
                    _fun102907_ip = 663;
                    continue _fun102907
                }
            case 657:
                var8 = var17.emoji;
            case 663:
                var8 = var14 != var8;
                var10 = null;
                if (!var8) {
                    _fun102907_ip = 732;
                    continue _fun102907
                }
            case 672:
                var12 = _closure1_slot22;
                var11 = _closure1_slot1;
                var20 = _closure1_slot2;
                var8 = 31;
                var8 = var20[var8];
                var11 = var11.bind(var3)(var8);
                var8 = {};
                var20 = 16;
                var8.size = var20;
                var19 = var19.statusEmoji;
                var8.style = var19;
                var19 = var17.emoji;
                var8.emoji = var19;
                var10 = var12.bind(var3)(var11, var8);
            case 732:
                var8 = new Array(2);
                var8[0] = var10;
                var11 = _closure1_slot22;
                var19 = _closure1_slot0;
                var12 = _closure1_slot2;
                var9 = var12[var9];
                var9 = var19.bind(var3)(var9);
                var10 = var9.Text;
                var9 = {
                    'variant': 'text-xs/medium',
                    'color': 'text-default',
                    'lineClamp': 1,
                    'ellipsizeMode': 'tail',
                    'accessibilityHint': null,
                    'maxFontSizeMultiplier': 1.75
                };
                var12 = var12[var16];
                var19 = var19.bind(var3)(var12);
                var12 = var19.humanizeStatus;
                var12 = var12.bind(var19)(var15);
                var9.accessibilityHint = var12;
                var12 = {};
                var12.flexShrink = var18;
                var9.style = var12;
                var18 = var14 == var17;
                var12 = undefined;
                if (var18) {
                    _fun102907_ip = 831;
                    continue _fun102907
                }
            case 826:
                var12 = var17.state;
            case 831:
                if (!(var14 == var12)) {
                    _fun102907_ip = 863;
                    continue _fun102907
                }
            case 835:
                var14 = _closure1_slot0;
                var13 = _closure1_slot2;
                var13 = var13[var16];
                var14 = var14.bind(var3)(var13);
                var13 = var14.humanizeStatus;
                var12 = var13.bind(var14)(var15);
            case 863:
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
    var12 = 1;
    var3 = var5[var12];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var16 = 2;
    var6 = var5[var16];
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
    var15 = var3.YOU_BAR_HEIGHT;
    var _closure1_slot15 = var15;
    var7 = var3.YOU_BAR_PADDING;
    var _closure1_slot16 = var7;
    var7 = var3.CUSTOM_THEME_COLORS;
    var _closure1_slot17 = var7;
    var7 = var3.CUSTOM_THEME_BACKGROUND_COLORS;
    var _closure1_slot18 = var7;
    var3 = var3.useYouBarHorizontalMargin;
    var _closure1_slot19 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.StatusTypes;
    var _closure1_slot20 = var3;
    var3 = 11;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.STATUS_PADDING;
    var _closure1_slot21 = var3;
    var3 = 12;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot22 = var7;
    var7 = var3.jsxs;
    var _closure1_slot23 = var7;
    var3 = var3.Fragment;
    var _closure1_slot24 = var3;
    var3 = {};
    var10 = 13;
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
    var _closure1_slot25 = var3;
    var3 = 14;
    var3 = var5[var3];
    var8 = var11.bind(var0)(var3);
    var7 = var8.createAnimatedComponent;
    var3 = 15;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var3 = var7.bind(var8)(var3);
    var _closure1_slot26 = var3;
    var13 = 16;
    var3 = var5[var13];
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
        'backgroundColor': 'transparent'
    };
    var14 = 'row';
    var17 = var5[var10];
    var17 = var11.bind(var0)(var17);
    var17 = var17.shadows;
    var19 = var17.SHADOW_TOP_HIGH;
    var20 = var9;
    var17 = copyDataProperties(var20, var19);
    var3.youRow = var9;
    var9 = {};
    var9.borderWidth = var12;
    var17 = var5[var10];
    var17 = var11.bind(var0)(var17);
    var17 = var17.colors;
    var17 = var17.BORDER_MUTED;
    var9.borderColor = var17;
    var17 = var15 / var16;
    var9.borderRadius = var17;
    var3.youRowFloating = var9;
    var9 = {
        'flexDirection': 'row',
        'gap': 8
    };
    var3.youRowRight = var9;
    var9 = {};
    var9.flex = var12;
    var17 = var5[var10];
    var17 = var11.bind(var0)(var17);
    var17 = var17.spacing;
    var17 = var17.PX_12;
    var9.marginRight = var17;
    var17 = var15 / var16;
    var9.borderRadius = var17;
    var3.youPressable = var9;
    var9 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'borderRadius': null,
        'gap': 32
    };
    var15 = var15 / var16;
    var9.borderRadius = var15;
    var3.youButton = var9;
    var9 = {
        'flex': 1,
        'flexDirection': 'column',
        'justifyContent': 'center',
        'height': '100%',
        'gap': 2
    };
    var3.userText = var9;
    var9 = {
        'position': 'relative',
        'overflow': 'hidden'
    };
    var3.usernameContainer = var9;
    var9 = {};
    var9.flexDirection = var14;
    var14 = var5[var10];
    var14 = var11.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_4;
    var9.gap = var14;
    var3.statusRow = var9;
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
    var14 = var5[var10];
    var14 = var11.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_MOD_MUTED;
    var9.backgroundColor = var14;
    var14 = var5[var10];
    var14 = var11.bind(var0)(var14);
    var14 = var14.radii;
    var14 = var14.round;
    var9.borderRadius = var14;
    var9.height = var13;
    var13 = 80;
    var9.width = var13;
    var3.placeholder = var9;
    var9 = {};
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOW;
    var9.backgroundColor = var13;
    var3.youRowClientTheme = var9;
    var9 = {
        'position': 'relative',
        'borderRadius': null,
        'overflow': 'hidden'
    };
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.round;
    var9.borderRadius = var13;
    var3.buttonContainer = var9;
    var9 = {
        'width': 20,
        'height': 20
    };
    var3.largeButtonIcon = var9;
    var9 = {};
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_FEEDBACK_NOTIFICATION;
    var9.backgroundColor = var13;
    var3.settingsBadge = var9;
    var9 = {};
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BRAND;
    var9.backgroundColor = var13;
    var3.icymiBadge = var9;
    var9 = {};
    var9.borderWidth = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BORDER_SUBTLE;
    var9.borderColor = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.round;
    var9.borderRadius = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.shadows;
    var19 = var12.SHADOW_MEDIUM;
    var20 = var9;
    var12 = copyDataProperties(var20, var19);
    var3.avatarShadow = var9;
    var9 = {
        'borderRadius': null,
        'borderWidth': 1,
        'borderColor': null,
        'justifyContent': 'center',
        'alignItems': 'center'
    };
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.round;
    var9.borderRadius = var12;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BORDER_SUBTLE;
    var9.borderColor = var10;
    var3.placeholderAvatar = var9;
    var9 = {
        'position': 'absolute',
        'bottom': 0,
        'left': 0,
        'right': 0
    };
    var3.floatingShade = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot27 = var3;
    var3 = {
        'damping': 10,
        'stiffness': 300,
        'mass': 1,
        'overshootClamping': true,
        'restSpeedThreshold': 0.001,
        'restDisplacementThreshold': 0.001
    };
    var _closure1_slot28 = var3;
    var3 = {
        'damping': 20,
        'stiffness': 200,
        'mass': 1,
        'restSpeedThreshold': 0.001,
        'restDisplacementThreshold': 0.001
    };
    var _closure1_slot29 = var3;
    var3 = {};
    var7 = 'function YouBarTsx1(){const{runOnJS,onCleanup}=this.__closure;runOnJS(onCleanup)();}';
    var3.code = var7;
    var _closure1_slot30 = var3;
    var3 = {};
    var7 = 'function YouBarTsx2(){const{runOnJS,cleanup}=this.__closure;runOnJS(cleanup)();}';
    var3.code = var7;
    var _closure1_slot31 = var3;
    var7 = var6.memo;
    var3 = function() { // Environment: var1
        _fun102915: for (var _fun102915_ip = 0;;) switch (_fun102915_ip) {
            case 0:
                var0 = _closure1_slot27;
                var3 = undefined;
                var11 = var0.bind(var3)();
                var4 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 27;
                var0 = var7[var0];
                var0 = var4.bind(var3)(var0);
                var2 = var0.YouBarExperiment;
                var1 = var2.useConfig;
                var0 = {};
                var5 = 'YouBar';
                var0.location = var5;
                var0 = var1.bind(var2)(var0);
                var9 = var0.animateBetweenServers;
                var _closure2_slot0 = var9;
                var0 = 23;
                var1 = var7[var0];
                var6 = var4.bind(var3)(var1);
                var5 = var6.useStateFromStores;
                var1 = _closure1_slot12;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var10
                    var1 = _closure1_slot12;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var1 = var5.bind(var6)(var2, var1);
                var _closure2_slot1 = var1;
                var0 = var7[var0];
                var6 = var4.bind(var3)(var0);
                var5 = var6.useStateFromStores;
                var0 = _closure1_slot10;
                var2 = new Array(1);
                var2[0] = var0;
                var0 = function() { // Environment: var10
                    var1 = _closure1_slot10;
                    var0 = var1.getGuildId;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var0 = var5.bind(var6)(var2, var0);
                var _closure2_slot2 = var0;
                var6 = _closure1_slot5;
                var5 = var6.useMemo;
                var2 = new Array(2);
                var2[0] = var9;
                var2[1] = var0;
                var0 = function() { // Environment: var10
                    _fun102918: for (var _fun102918_ip = 0;;) switch (_fun102918_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var1 = new Array(1);
                            if (var0) {
                                _fun102918_ip = 25;
                                continue _fun102918
                            }
                        case 14:
                            var0 = undefined;
                            var1[0] = var0;
                            var0 = var1;
                            _fun102918_ip = 36;
                            continue _fun102918;
                        case 25:
                            var2 = _closure2_slot2;
                            var1[0] = var2;
                            var0 = var1;
                        case 36:
                            return var0;
                    }
                };
                var12 = var5.bind(var6)(var0, var2);
                var6 = _closure1_slot1;
                var0 = 28;
                var0 = var7[var0];
                var2 = var6.bind(var3)(var0);
                var0 = var2.useName;
                var0 = var0.bind(var2)(var1);
                var26 = 26;
                var2 = var7[var26];
                var2 = var4.bind(var3)(var2);
                var5 = var2.AVATAR_SIZE_MAP;
                var25 = 25;
                var2 = var7[var25];
                var2 = var4.bind(var3)(var2);
                var2 = var2.AvatarSizes;
                var2 = var2.XLARGE_72;
                var24 = var5[var2];
                var13 = _closure1_slot5;
                var9 = var13.useCallback;
                var5 = function(arg0, arg1, arg2, arg3) { // Environment: var10
                    var4 = _closure1_slot22;
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
                var2 = new Array(0);
                var9 = var9.bind(var13)(var5, var2);
                var2 = 32;
                var2 = var7[var2];
                var5 = var4.bind(var3)(var2);
                var4 = var5.useToken;
                var2 = 13;
                var2 = var7[var2];
                var2 = var6.bind(var3)(var2);
                var2 = var2.colors;
                var2 = var2.BACKGROUND_SURFACE_HIGHEST;
                var23 = var4.bind(var5)(var2);
                var2 = null;
                if (!(var2 != var1)) {
                    _fun102915_ip = 474;
                    continue _fun102915
                }
            case 351:
                if (!(var2 != var0)) {
                    _fun102915_ip = 474;
                    continue _fun102915
                }
            case 355:
                var4 = _closure1_slot23;
                var1 = _closure1_slot6;
                var0 = {};
                var5 = var11.youButton;
                var0.style = var5;
                var7 = _closure1_slot22;
                var6 = _closure1_slot0;
                var13 = _closure1_slot2;
                var5 = 18;
                var5 = var13[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.TransitionGroup;
                var5 = {};
                var5.items = var12;
                var10 = function arg0() {
                    _fun102920: for (var _fun102920_ip = 0;;) switch (_fun102920_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var1 = null;
                            var1 = var1 == var2;
                            var2 = undefined;
                            if (var1) {
                                _fun102920_ip = 45;
                                continue _fun102920
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
                var5.getItemKey = var10;
                var5.renderItem = var9;
                var6 = var7.bind(var3)(var6, var5);
                var5 = new Array(2);
                var5[0] = var6;
                var9 = _closure1_slot22;
                var7 = _closure1_slot43;
                var6 = {};
                var6 = var9.bind(var3)(var7, var6);
                var5[1] = var6;
                var0.children = var5;
                var0 = var4.bind(var3)(var1, var0);
                return var0;
            case 474:
                var4 = _closure1_slot0;
                var0 = _closure1_slot2;
                var1 = var0[var25];
                var1 = var4.bind(var3)(var1);
                var1 = var1.AvatarSizes;
                var1 = var1.XLARGE_72;
                var0 = var0[var25];
                var4 = var4.bind(var3)(var0);
                var0 = var4.getStatusSize;
                var0 = var0.bind(var4)(var1);
                var2 = var2 != var0;
                var16 = 0;
                if (!var2) {
                    _fun102915_ip = 535;
                    continue _fun102915
                }
            case 532:
                var16 = var0;
            case 535:
                var27 = _closure1_slot0;
                var17 = _closure1_slot2;
                var0 = var17[var26];
                var0 = var27.bind(var3)(var0);
                var0 = var0.AVATAR_SIZE_MAP;
                var2 = var0[var1];
                var1 = 2;
                var4 = var16 / var1;
                var0 = _closure1_slot21;
                var0 = var4 + var0;
                var4 = var2 - var0;
                var2 = 4;
                var2 = var16 / var2;
                var2 = var2 * var1;
                var2 = var4 - var2;
                var19 = {};
                var12 = 17;
                var4 = var17[var12];
                var4 = var27.bind(var3)(var4);
                var4 = var4.CutoutShape;
                var4 = var4.Circle;
                var19.shape = var4;
                var19.x = var2;
                var19.y = var2;
                var0 = var1 * var0;
                var19.size = var0;
                var2 = _closure1_slot23;
                var1 = _closure1_slot6;
                var0 = {};
                var4 = var11.youButton;
                var0.style = var4;
                var6 = _closure1_slot22;
                var5 = _closure1_slot6;
                var4 = {};
                var7 = {};
                var9 = var17[var26];
                var9 = var27.bind(var3)(var9);
                var10 = var9.AVATAR_SIZE_MAP;
                var9 = var17[var25];
                var9 = var27.bind(var3)(var9);
                var9 = var9.AvatarSizes;
                var9 = var9.NORMAL;
                var9 = var10[var9];
                var7.height = var9;
                var9 = var17[var26];
                var9 = var27.bind(var3)(var9);
                var10 = var9.AVATAR_SIZE_MAP;
                var9 = var17[var25];
                var9 = var27.bind(var3)(var9);
                var9 = var9.AvatarSizes;
                var9 = var9.NORMAL;
                var9 = var10[var9];
                var7.width = var9;
                var9 = 'relative';
                var7.position = var9;
                var4.style = var7;
                var10 = _closure1_slot23;
                var9 = _closure1_slot6;
                var7 = {};
                var13 = {};
                var14 = 'absolute';
                var13.position = var14;
                var13.width = var24;
                var13.height = var24;
                var14 = _closure1_slot16;
                var15 = -var14;
                var14 = var17[var26];
                var14 = var27.bind(var3)(var14);
                var18 = var14.AVATAR_SIZE_MAP;
                var14 = var17[var25];
                var14 = var27.bind(var3)(var14);
                var14 = var14.AvatarSizes;
                var14 = var14.XLARGE_72;
                var18 = var18[var14];
                var14 = _closure1_slot15;
                var14 = var18 - var14;
                var14 = var15 - var14;
                var13.top = var14;
                var14 = _closure1_slot16;
                var14 = -var14;
                var13.left = var14;
                var7.style = var13;
                var15 = _closure1_slot22;
                var14 = _closure1_slot1;
                var12 = var17[var12];
                var13 = var14.bind(var3)(var12);
                var12 = {};
                var18 = new Array(1);
                var18[0] = var19;
                var12.cutouts = var18;
                var20 = _closure1_slot22;
                var19 = _closure1_slot6;
                var18 = {};
                var22 = var11.placeholderAvatar;
                var21 = new Array(2);
                var21[0] = var22;
                var22 = {};
                var22.width = var24;
                var22.height = var24;
                var22.backgroundColor = var23;
                var21[1] = var22;
                var18.style = var21;
                var23 = _closure1_slot22;
                var21 = 33;
                var21 = var17[var21];
                var21 = var27.bind(var3)(var21);
                var22 = var21.ReactionIcon;
                var21 = {
                    'size': 'custom',
                    'style': null,
                    'color': 'background-mod-strong'
                };
                var24 = {};
                var28 = var17[var26];
                var28 = var27.bind(var3)(var28);
                var29 = var28.AVATAR_SIZE_MAP;
                var28 = var17[var25];
                var28 = var27.bind(var3)(var28);
                var28 = var28.AvatarSizes;
                var28 = var28.NORMAL;
                var28 = var29[var28];
                var24.width = var28;
                var26 = var17[var26];
                var26 = var27.bind(var3)(var26);
                var26 = var26.AVATAR_SIZE_MAP;
                var25 = var17[var25];
                var25 = var27.bind(var3)(var25);
                var25 = var25.AvatarSizes;
                var25 = var25.NORMAL;
                var25 = var26[var25];
                var24.height = var25;
                var21.style = var24;
                var21 = var23.bind(var3)(var22, var21);
                var18.children = var21;
                var18 = var20.bind(var3)(var19, var18);
                var12.children = var18;
                var13 = var15.bind(var3)(var13, var12);
                var12 = new Array(2);
                var12[0] = var13;
                var15 = _closure1_slot22;
                var13 = 34;
                var13 = var17[var13];
                var14 = var14.bind(var3)(var13);
                var13 = {
                    'size': null,
                    'status': null,
                    'isMobileOnline': false,
                    'isVROnline': false,
                    'streaming': false
                };
                var13.size = var16;
                var16 = _closure1_slot20;
                var16 = var16.OFFLINE;
                var13.status = var16;
                var16 = {
                    'position': 'absolute',
                    'right': 4294967293,
                    'bottom': 4294967293
                };
                var13.style = var16;
                var13 = var15.bind(var3)(var14, var13);
                var12[1] = var13;
                var7.children = var12;
                var7 = var10.bind(var3)(var9, var7);
                var4.children = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot22;
                var6 = _closure1_slot6;
                var5 = {};
                var9 = var11.userText;
                var5.style = var9;
                var10 = _closure1_slot22;
                var9 = _closure1_slot6;
                var8 = {};
                var11 = var11.placeholder;
                var8.style = var11;
                var8 = var10.bind(var3)(var9, var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var3 = var7.bind(var6)(var3);
    var _closure1_slot32 = var3;
    var7 = var6.memo;
    var3 = function(arg0) { // Environment: var1
        _fun102921: for (var _fun102921_ip = 0;;) switch (_fun102921_ip) {
            case 0:
                var1 = arg0;
                var11 = var1.hasNameplate;
                var13 = var1.icon;
                var6 = var1.hasBadge;
                var _closure2_slot0 = var6;
                var14 = var1.badgeStyle;
                var8 = var1.onPress;
                var10 = var1.a11yLabel;
                var1 = _closure1_slot27;
                var3 = undefined;
                var4 = var1.bind(var3)();
                var2 = function arg0() {
                    _fun102922: for (var _fun102922_ip = 0;;) switch (_fun102922_ip) {
                        case 0:
                            var1 = arg0;
                            var7 = var1.size;
                            var _closure3_slot0 = var7;
                            var6 = var1.xOffset;
                            var2 = undefined;
                            if (!(var6 === var2)) {
                                _fun102922_ip = 28;
                                continue _fun102922
                            }
                        case 26:
                            var6 = 0;
                        case 28:
                            var _closure3_slot1 = var6;
                            var5 = var1.yOffset;
                            if (!(var5 === var2)) {
                                _fun102922_ip = 44;
                                continue _fun102922
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
                                _fun102923: for (var _fun102923_ip = 0;;) switch (_fun102923_ip) {
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
                                            _fun102923_ip = 51;
                                            continue _fun102923
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
                                        var2 = 17;
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
                var2 = function arg0() {
                    _fun102924: for (var _fun102924_ip = 0;;) switch (_fun102924_ip) {
                        case 0:
                            var2 = arg0;
                            var7 = var2.size;
                            var _closure3_slot0 = var7;
                            var6 = var2.badgeSize;
                            var _closure3_slot1 = var6;
                            var4 = var2.xOffset;
                            var1 = undefined;
                            if (!(var4 === var1)) {
                                _fun102924_ip = 38;
                                continue _fun102924
                            }
                        case 36:
                            var4 = 0;
                        case 38:
                            var _closure3_slot2 = var4;
                            var5 = var2.yOffset;
                            if (!(var5 === var1)) {
                                _fun102924_ip = 54;
                                continue _fun102924
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
                    _fun102926: for (var _fun102926_ip = 0;;) switch (_fun102926_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            if (var0) {
                                _fun102926_ip = 16;
                                continue _fun102926
                            }
                        case 10:
                            var0 = new Array(0);
                            _fun102926_ip = 31;
                            continue _fun102926;
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
                var2 = _closure1_slot23;
                var1 = _closure1_slot6;
                var0 = {};
                var5 = {
                    'position': 'relative',
                    'height': 20,
                    'width': 20
                };
                var0.style = var5;
                var12 = _closure1_slot22;
                var9 = _closure1_slot1;
                var18 = _closure1_slot2;
                var5 = 17;
                var5 = var18[var5];
                var9 = var9.bind(var3)(var5);
                var5 = {};
                var5.cutouts = var17;
                var5.children = var13;
                var9 = var12.bind(var3)(var9, var5);
                var5 = new Array(2);
                var5[0] = var9;
                if (!var6) {
                    _fun102921_ip = 274;
                    continue _fun102921
                }
            case 229:
                var13 = _closure1_slot22;
                var12 = _closure1_slot1;
                var17 = _closure1_slot2;
                var9 = 35;
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
                var2 = _closure1_slot22;
                var1 = _closure1_slot6;
                var0 = {};
                var4 = var4.buttonContainer;
                var0.style = var4;
                var6 = _closure1_slot22;
                var5 = _closure1_slot0;
                var12 = _closure1_slot2;
                var4 = 36;
                var4 = var12[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.IconButton;
                var4 = {};
                var4.accessibilityLabel = var10;
                var10 = 'tertiary';
                if (!var11) {
                    _fun102921_ip = 357;
                    continue _fun102921
                }
            case 351:
                var10 = 'secondary-overlay';
            case 357:
                var4.variant = var10;
                var10 = 'md';
                var4.size = var10;
                var4.icon = var9;
                var4.onPress = var8;
                var7 = _closure1_slot25;
                var4.hitSlop = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var3 = var7.bind(var6)(var3);
    var _closure1_slot33 = var3;
    var7 = var6.memo;
    var3 = function(arg0) { // Environment: var1
        _fun102927: for (var _fun102927_ip = 0;;) switch (_fun102927_ip) {
            case 0:
                var0 = arg0;
                var11 = var0.hasNameplate;
                var0 = _closure1_slot27;
                var3 = undefined;
                var5 = var0.bind(var3)();
                var1 = _closure1_slot1;
                var10 = _closure1_slot2;
                var0 = 37;
                var0 = var10[var0];
                var0 = var1.bind(var3)(var0);
                var0 = var0.bind(var3)();
                var6 = var0.showDot;
                var2 = _closure1_slot22;
                var1 = _closure1_slot33;
                var0 = {};
                var0.hasNameplate = var11;
                var9 = _closure1_slot22;
                var8 = _closure1_slot0;
                var7 = 38;
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
                    _fun102927_ip = 122;
                    continue _fun102927
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
                var5 = function() {
                    _fun102928: for (var _fun102928_ip = 0;;) switch (_fun102928_ip) {
                        case 0:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 39;
                            var4 = var3[var1];
                            var0 = undefined;
                            var5 = var2.bind(var0)(var4);
                            var4 = var5.triggerHapticFeedback;
                            var1 = var3[var1];
                            var1 = var2.bind(var0)(var1);
                            var1 = var1.HapticFeedbackTypes;
                            var1 = var1.IMPACT_LIGHT;
                            var1 = var4.bind(var5)(var1);
                            var1 = 40;
                            var1 = var3[var1];
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.getRootNavigationRef;
                            var4 = var1.bind(var2)();
                            var1 = null;
                            if (!(var1 != var4)) {
                                _fun102928_ip = 128;
                                continue _fun102928
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
                var4 = 41;
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
    var _closure1_slot34 = var3;
    var3 = {};
    var7 = 'function YouBarTsx3(){const{withSpring,badgeCount,SPRING_CONFIG,tokens}=this.__closure;return{transform:[{scaleX:withSpring(badgeCount>0?1:0,SPRING_CONFIG)}],marginLeft:withSpring(badgeCount>0?tokens.spacing.PX_4:0,SPRING_CONFIG),opacity:withSpring(badgeCount>0?1:0,SPRING_CONFIG)};}';
    var3.code = var7;
    var _closure1_slot35 = var3;
    var7 = var6.memo;
    var3 = function(arg0) { // Environment: var1
        _fun102929: for (var _fun102929_ip = 0;;) switch (_fun102929_ip) {
            case 0:
                var0 = arg0;
                var18 = var0.hasNameplate;
                var0 = _closure1_slot27;
                var3 = undefined;
                var17 = var0.bind(var3)();
                var6 = _closure1_slot1;
                var14 = _closure1_slot2;
                var0 = 42;
                var0 = var14[var0];
                var0 = var6.bind(var3)(var0);
                var0 = var0.bind(var3)();
                var19 = var0.value;
                var _closure2_slot0 = var19;
                var12 = _closure1_slot0;
                var13 = 14;
                var0 = var14[var13];
                var2 = var12.bind(var3)(var0);
                var1 = var2.useAnimatedStyle;
                var0 = function() {
                    _fun102930: for (var _fun102930_ip = 0;;) switch (_fun102930_ip) {
                        case 0:
                            var0 = {};
                            var3 = {};
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var7 = 19;
                            var2 = var2[var7];
                            var6 = undefined;
                            var10 = var4.bind(var6)(var2);
                            var9 = var10.withSpring;
                            var2 = _closure2_slot0;
                            var4 = 0;
                            var2 = var2 > var4;
                            var8 = 0;
                            if (!var2) {
                                _fun102930_ip = 55;
                                continue _fun102930
                            }
                        case 52:
                            var8 = 1;
                        case 55:
                            var2 = _closure1_slot28;
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
                                _fun102930_ip = 148;
                                continue _fun102930
                            }
                        case 117:
                            var10 = _closure1_slot1;
                            var11 = _closure1_slot2;
                            var2 = 13;
                            var2 = var11[var2];
                            var2 = var10.bind(var6)(var2);
                            var2 = var2.spacing;
                            var3 = var2.PX_4;
                        case 148:
                            var2 = _closure1_slot28;
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
                                _fun102930_ip = 201;
                                continue _fun102930
                            }
                        case 198:
                            var4 = 1;
                        case 201:
                            var1 = _closure1_slot28;
                            var1 = var2.bind(var3)(var4, var1);
                            var0.opacity = var1;
                            return var0;
                    }
                };
                var4 = {};
                var5 = 19;
                var5 = var14[var5];
                var5 = var12.bind(var3)(var5);
                var5 = var5.withSpring;
                var4.withSpring = var5;
                var4.badgeCount = var19;
                var5 = _closure1_slot28;
                var4.SPRING_CONFIG = var5;
                var5 = 13;
                var5 = var14[var5];
                var5 = var6.bind(var3)(var5);
                var4.tokens = var5;
                var0.__closure = var4;
                var4 = 6363196903679.0;
                var0.__workletHash = var4;
                var4 = _closure1_slot35;
                var0.__initData = var4;
                var16 = var1.bind(var2)(var0);
                var2 = _closure1_slot22;
                var1 = _closure1_slot6;
                var0 = {};
                var4 = var17.buttonContainer;
                var0.style = var4;
                var6 = _closure1_slot22;
                var4 = 36;
                var4 = var14[var4];
                var4 = var12.bind(var3)(var4);
                var5 = var4.IconButton;
                var4 = {};
                var9 = 41;
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
                    _fun102929_ip = 285;
                    continue _fun102929
                }
            case 279:
                var9 = 'secondary-overlay';
            case 285:
                var4.variant = var9;
                var9 = 'md';
                var4.size = var9;
                var11 = _closure1_slot23;
                var10 = _closure1_slot6;
                var9 = {};
                var12 = {
                    'display': 'flex',
                    'flexDirection': 'row',
                    'alignItems': 'center'
                };
                var9.style = var12;
                var15 = _closure1_slot22;
                var14 = _closure1_slot0;
                var20 = _closure1_slot2;
                var12 = 43;
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
                    _fun102929_ip = 384;
                    continue _fun102929
                }
            case 380:
                var17 = 'white';
            case 384:
                var12.color = var17;
                var14 = var15.bind(var3)(var14, var12);
                var12 = new Array(2);
                var12[0] = var14;
                var15 = _closure1_slot22;
                var17 = _closure1_slot1;
                var20 = _closure1_slot2;
                var13 = var20[var13];
                var13 = var17.bind(var3)(var13);
                var14 = var13.View;
                var13 = {};
                var13.style = var16;
                var18 = _closure1_slot22;
                var16 = 44;
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
                var8 = function() {
                    _fun102931: for (var _fun102931_ip = 0;;) switch (_fun102931_ip) {
                        case 0:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 39;
                            var4 = var3[var1];
                            var0 = undefined;
                            var5 = var2.bind(var0)(var4);
                            var4 = var5.triggerHapticFeedback;
                            var1 = var3[var1];
                            var1 = var2.bind(var0)(var1);
                            var1 = var1.HapticFeedbackTypes;
                            var1 = var1.IMPACT_LIGHT;
                            var1 = var4.bind(var5)(var1);
                            var1 = 40;
                            var1 = var3[var1];
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.getRootNavigationRef;
                            var4 = var1.bind(var2)();
                            var1 = null;
                            if (!(var1 != var4)) {
                                _fun102931_ip = 110;
                                continue _fun102931
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
                var7 = _closure1_slot25;
                var4.hitSlop = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var3 = var7.bind(var6)(var3);
    var _closure1_slot36 = var3;
    var3 = {};
    var7 = 'function YouBarTsx4(){const{withSpring,isPressed,SPRING_CONFIG}=this.__closure;return{transform:[{scale:withSpring(isPressed?0.98:1,SPRING_CONFIG)}]};}';
    var3.code = var7;
    var _closure1_slot37 = var3;
    var7 = var6.memo;
    var3 = function() { // Environment: var1
        _fun102932: for (var _fun102932_ip = 0;;) switch (_fun102932_ip) {
            case 0:
                var0 = _closure1_slot27;
                var3 = undefined;
                var11 = var0.bind(var3)();
                var2 = _closure1_slot1;
                var6 = _closure1_slot2;
                var0 = 49;
                var0 = var6[var0];
                var0 = var2.bind(var3)(var0);
                var0 = var0.bind(var3)();
                var5 = var0.width;
                var4 = _closure1_slot0;
                var0 = 50;
                var0 = var6[var0];
                var4 = var4.bind(var3)(var0);
                var0 = var4.useDrawerWidth;
                var4 = var0.bind(var4)();
                var0 = 51;
                var0 = var6[var0];
                var0 = var2.bind(var3)(var0);
                var0 = var0.bind(var3)();
                var6 = var0.isChatBesideChannelList;
                var0 = _closure1_slot19;
                var0 = var0.bind(var3)();
                var _closure2_slot0 = var0;
                var24 = 2;
                var2 = var24 * var0;
                if (var6) {
                    _fun102932_ip = 120;
                    continue _fun102932
                }
            case 114:
                var29 = var5 - var2;
                _fun102932_ip = 124;
                continue _fun102932;
            case 120:
                var29 = var4 - var2;
            case 124:
                var _closure2_slot1 = var29;
                var2 = _closure1_slot13;
                var6 = var2.bind(var3)();
                var _closure2_slot2 = var6;
                var5 = _closure1_slot5;
                var4 = var5.useMemo;
                var2 = new Array(3);
                var2[0] = var29;
                var2[1] = var6;
                var2[2] = var0;
                var0 = function() { // Environment: var1
                    var0 = {};
                    var2 = _closure2_slot0;
                    var0.marginHorizontal = var2;
                    var3 = _closure1_slot15;
                    var0.height = var3;
                    var3 = _closure2_slot2;
                    var0.marginBottom = var3;
                    var3 = _closure1_slot16;
                    var2 = 1;
                    var2 = var3 - var2;
                    var0.padding = var2;
                    var1 = _closure2_slot1;
                    var0.width = var1;
                    return var0;
                };
                var6 = var4.bind(var5)(var0, var2);
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 52;
                var0 = var5[var0];
                var7 = var4.bind(var3)(var0);
                var2 = var7.useICYMIEnabled;
                var0 = 'TabsNavigator';
                var8 = var2.bind(var7)(var0);
                var0 = 27;
                var0 = var5[var0];
                var0 = var4.bind(var3)(var0);
                var7 = var0.YouBarExperiment;
                var2 = var7.useConfig;
                var0 = {};
                var10 = 'YouBar';
                var0.location = var10;
                var0 = var2.bind(var7)(var0);
                var2 = var0.animateBetweenServers;
                var0 = 23;
                var7 = var5[var0];
                var13 = var4.bind(var3)(var7);
                var12 = var13.useStateFromStores;
                var7 = _closure1_slot12;
                var10 = new Array(1);
                var10[0] = var7;
                var7 = function() { // Environment: var1
                    var1 = _closure1_slot12;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var7 = var12.bind(var13)(var10, var7);
                var0 = var5[var0];
                var13 = var4.bind(var3)(var0);
                var12 = var13.useStateFromStores;
                var0 = _closure1_slot10;
                var10 = new Array(1);
                var10[0] = var0;
                var0 = function() { // Environment: var1
                    var1 = _closure1_slot10;
                    var0 = var1.getGuildId;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var10 = var12.bind(var13)(var10, var0);
                var0 = 47;
                var0 = var5[var0];
                var5 = var4.bind(var3)(var0);
                var4 = var5.useNameplate;
                var0 = {};
                var0.user = var7;
                var7 = undefined;
                if (!var2) {
                    _fun102932_ip = 386;
                    continue _fun102932
                }
            case 372:
                var12 = null;
                var12 = var12 != var10;
                var7 = undefined;
                if (!var12) {
                    _fun102932_ip = 386;
                    continue _fun102932
                }
            case 383:
                var7 = var10;
            case 386:
                var0.guildId = var7;
                var21 = var4.bind(var5)(var0);
                var10 = null;
                var12 = var10 != var21;
                var0 = function arg0() {
                    _fun102936: for (var _fun102936_ip = 0;;) switch (_fun102936_ip) {
                        case 0:
                            var9 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var1 = 45;
                            var1 = var4[var1];
                            var6 = undefined;
                            var1 = var9.bind(var6)(var1);
                            var8 = var1.bind(var6)();
                            var7 = 13;
                            var1 = var4[var7];
                            var1 = var9.bind(var6)(var1);
                            var3 = var1.internal;
                            var2 = var3.resolveSemanticColor;
                            var1 = var4[var7];
                            var1 = var9.bind(var6)(var1);
                            var1 = var1.colors;
                            var1 = var1.BACKGROUND_SURFACE_HIGHEST;
                            var3 = var2.bind(var3)(var8, var1);
                            var2 = _closure1_slot0;
                            var9 = 23;
                            var1 = var4[var9];
                            var11 = var2.bind(var6)(var1);
                            var10 = var11.useStateFromStores;
                            var1 = _closure1_slot8;
                            var8 = new Array(1);
                            var8[0] = var1;
                            var1 = function() { // Environment: var0
                                var0 = _closure1_slot8;
                                var0 = var0.gradientPreset;
                                return var0;
                            };
                            var1 = var10.bind(var11)(var8, var1);
                            var8 = 46;
                            var10 = var4[var8];
                            var11 = var2.bind(var6)(var10);
                            var10 = var11.useGradientValue;
                            var8 = var4[var8];
                            var8 = var2.bind(var6)(var8);
                            var8 = var8.GradientPercentage;
                            var8 = var8.END;
                            var12 = var10.bind(var11)(var8);
                            var8 = var4[var9];
                            var13 = var2.bind(var6)(var8);
                            var11 = var13.useStateFromStores;
                            var8 = _closure1_slot12;
                            var10 = new Array(1);
                            var10[0] = var8;
                            var8 = function() { // Environment: var0
                                var1 = _closure1_slot12;
                                var0 = var1.getCurrentUser;
                                var0 = var0.bind(var1)();
                                return var0;
                            };
                            var8 = var11.bind(var13)(var10, var8);
                            var9 = var4[var9];
                            var11 = var2.bind(var6)(var9);
                            var10 = var11.useStateFromStores;
                            var13 = _closure1_slot10;
                            var9 = new Array(1);
                            var9[0] = var13;
                            var0 = function() { // Environment: var0
                                var1 = _closure1_slot10;
                                var0 = var1.getGuildId;
                                var0 = var0.bind(var1)();
                                return var0;
                            };
                            var9 = var10.bind(var11)(var9, var0);
                            var0 = 47;
                            var0 = var4[var0];
                            var4 = var2.bind(var6)(var0);
                            var2 = var4.useNameplate;
                            var0 = {};
                            var0.user = var8;
                            var10 = arg0;
                            var8 = undefined;
                            if (!var10) {
                                _fun102936_ip = 295;
                                continue _fun102936
                            }
                        case 281:
                            var10 = null;
                            var10 = var10 != var9;
                            var8 = undefined;
                            if (!var10) {
                                _fun102936_ip = 295;
                                continue _fun102936
                            }
                        case 292:
                            var8 = var9;
                        case 295:
                            var0.guildId = var8;
                            var0 = var2.bind(var4)(var0);
                            var2 = null;
                            var0 = var2 != var0;
                            if (var0) {
                                _fun102936_ip = 349;
                                continue _fun102936
                            }
                        case 313:
                            if (!(var2 != var1)) {
                                _fun102936_ip = 349;
                                continue _fun102936
                            }
                        case 317:
                            var8 = _closure1_slot17;
                            var4 = var1.id;
                            var4 = var8[var4];
                            if (!(var2 != var4)) {
                                _fun102936_ip = 349;
                                continue _fun102936
                            }
                        case 334:
                            var4 = _closure1_slot17;
                            var1 = var1.id;
                            var1 = var4[var1];
                            _fun102936_ip = 452;
                            continue _fun102936;
                        case 349:
                            var1 = var3;
                            if (var0) {
                                _fun102936_ip = 452;
                                continue _fun102936
                            }
                        case 355:
                            var0 = var2 != var12;
                            var1 = undefined;
                            if (!var0) {
                                _fun102936_ip = 452;
                                continue _fun102936
                            }
                        case 364:
                            var4 = _closure1_slot1;
                            var11 = _closure1_slot2;
                            var0 = 48;
                            var8 = var11[var0];
                            var10 = var4.bind(var6)(var8);
                            var9 = var10.mix;
                            var8 = var11[var0];
                            var8 = var4.bind(var6)(var8);
                            var8 = var8.bind(var6)(var12);
                            var0 = var11[var0];
                            var0 = var4.bind(var6)(var0);
                            var16 = var0.bind(var6)(var3);
                            var15 = 0.8;
                            var14 = 'hsl';
                            var18 = var10;
                            var17 = var8;
                            var3 = var18[var9](var17, var16, var15, var14, var13);
                            var0 = var3.hex;
                            var1 = var0.bind(var3)();
                        case 452:
                            var4 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var3 = 32;
                            var3 = var0[var3];
                            var4 = var4.bind(var6)(var3);
                            var3 = var4.useToken;
                            var5 = _closure1_slot1;
                            var0 = var0[var7];
                            var0 = var5.bind(var6)(var0);
                            var0 = var0.colors;
                            var0 = var0.BACKGROUND_SURFACE_HIGHEST;
                            var0 = var3.bind(var4)(var0);
                            if (!(var2 != var1)) {
                                _fun102936_ip = 514;
                                continue _fun102936
                            }
                        case 511:
                            var0 = var1;
                        case 514:
                            return var0;
                    }
                };
                var28 = var0.bind(var3)(var2);
                var4 = _closure1_slot5;
                var2 = var4.useState;
                var0 = false;
                var2 = var2.bind(var4)(var0);
                var0 = _closure1_slot4;
                var0 = var0.bind(var3)(var2, var24);
                var34 = 0;
                var14 = var0[var34];
                var _closure2_slot3 = var14;
                var36 = 1;
                var0 = var0[var36];
                var _closure2_slot4 = var0;
                var4 = _closure1_slot0;
                var22 = _closure1_slot2;
                var0 = 14;
                var2 = var22[var0];
                var7 = var4.bind(var3)(var2);
                var5 = var7.useAnimatedStyle;
                var2 = function() {
                    _fun102940: for (var _fun102940_ip = 0;;) switch (_fun102940_ip) {
                        case 0:
                            var0 = {};
                            var2 = {};
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var3 = 19;
                            var4 = var4[var3];
                            var3 = undefined;
                            var5 = var5.bind(var3)(var4);
                            var4 = var5.withSpring;
                            var6 = _closure2_slot3;
                            var3 = 1;
                            if (!var6) {
                                _fun102940_ip = 57;
                                continue _fun102940
                            }
                        case 47:
                            var3 = 0.98;
                        case 57:
                            var1 = _closure1_slot28;
                            var1 = var4.bind(var5)(var3, var1);
                            var2.scale = var1;
                            var1 = new Array(1);
                            var1[0] = var2;
                            var0.transform = var1;
                            return var0;
                    }
                };
                var13 = {};
                var15 = 19;
                var15 = var22[var15];
                var15 = var4.bind(var3)(var15);
                var15 = var15.withSpring;
                var13.withSpring = var15;
                var13.isPressed = var14;
                var14 = _closure1_slot28;
                var13.SPRING_CONFIG = var14;
                var2.__closure = var13;
                var13 = 15247686261570.0;
                var2.__workletHash = var13;
                var13 = _closure1_slot37;
                var2.__initData = var13;
                var5 = var5.bind(var7)(var2);
                var14 = _closure1_slot5;
                var13 = var14.useCallback;
                var7 = function() { // Environment: var1
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var4 = 39;
                    var5 = var1[var4];
                    var0 = undefined;
                    var6 = var3.bind(var0)(var5);
                    var5 = var6.triggerHapticFeedback;
                    var4 = var1[var4];
                    var4 = var3.bind(var0)(var4);
                    var4 = var4.HapticFeedbackTypes;
                    var4 = var4.SOFT;
                    var4 = var5.bind(var6)(var4);
                    var4 = _closure1_slot1;
                    var2 = 53;
                    var2 = var1[var2];
                    var5 = var4.bind(var0)(var2);
                    var4 = var5.openLazy;
                    var2 = 55;
                    var2 = var1[var2];
                    var3 = var3.bind(var0)(var2);
                    var2 = 54;
                    var2 = var1[var2];
                    var1 = var1.paths;
                    var3 = var3.bind(var0)(var2, var1);
                    var2 = {};
                    var1 = true;
                    var2.disableHapticOnOpen = var1;
                    var1 = 'YouBottomSheet';
                    var1 = var4.bind(var5)(var3, var1, var2);
                    var2 = _closure2_slot4;
                    var1 = false;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var2 = new Array(0);
                var14 = var13.bind(var14)(var7, var2);
                var15 = _closure1_slot5;
                var13 = var15.useCallback;
                var7 = _closure1_slot3;
                var2 = function*() { // Environment: var1
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun102943: for (var _fun102943_ip = 0;;) switch (_fun102943_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun102943_ip = 90;
                                    continue _fun102943
                                }
                            case 7:
                                var4 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var2 = 55;
                                var3 = var1[var2];
                                var2 = undefined;
                                var4 = var4.bind(var2)(var3);
                                var3 = 56;
                                var3 = var1[var3];
                                var1 = var1.paths;
                                var1 = var4.bind(var2)(var3, var1);
                                SaveGenerator(address = 54);
                            case 52:
                                return var1;
                            case 54:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                if (var3) {
                                    _fun102943_ip = 87;
                                    continue _fun102943
                                }
                            case 60:
                                var3 = var1.showYouAccountActionSheet;
                                var3 = var3.bind(var1)();
                                var4 = _closure2_slot4;
                                var3 = false;
                                var3 = var4.bind(var2)(var3);
                                return var2;
                            case 87:
                                return var1;
                            case 90:
                                return var0;
                        }
                    };
                    return var0;
                };
                var7 = var7.bind(var3)(var2);
                var2 = new Array(0);
                var13 = var13.bind(var15)(var7, var2);
                var16 = _closure1_slot5;
                var15 = var16.useCallback;
                var7 = function() { // Environment: var1
                    var2 = _closure2_slot4;
                    var0 = undefined;
                    var1 = true;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var2 = new Array(0);
                var16 = var15.bind(var16)(var7, var2);
                var15 = _closure1_slot5;
                var7 = var15.useCallback;
                var2 = function() { // Environment: var1
                    var2 = _closure2_slot4;
                    var0 = undefined;
                    var1 = false;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var1 = new Array(0);
                var15 = var7.bind(var15)(var2, var1);
                var1 = 26;
                var1 = var22[var1];
                var1 = var4.bind(var3)(var1);
                var2 = var1.AVATAR_SIZE_MAP;
                var1 = 25;
                var1 = var22[var1];
                var1 = var4.bind(var3)(var1);
                var1 = var1.AvatarSizes;
                var1 = var1.XLARGE_72;
                var23 = var2[var1];
                var2 = _closure1_slot23;
                var19 = _closure1_slot1;
                var0 = var22[var0];
                var0 = var19.bind(var3)(var0);
                var1 = var0.View;
                var0 = {};
                var7 = var11.youRow;
                var4 = new Array(3);
                var4[0] = var7;
                var4[1] = var6;
                var4[2] = var5;
                var0.style = var4;
                var6 = _closure1_slot22;
                var4 = 57;
                var4 = var22[var4];
                var5 = var19.bind(var3)(var4);
                var4 = {};
                var7 = {};
                var33 = 'absolute';
                var7.position = var33;
                var4.style = var7;
                var25 = _closure1_slot23;
                var20 = _closure1_slot6;
                var7 = {};
                var17 = {};
                var17.width = var29;
                var18 = _closure1_slot15;
                var17.height = var18;
                var18 = 'transparent';
                var17.backgroundColor = var18;
                var7.style = var17;
                var27 = _closure1_slot22;
                var26 = _closure1_slot6;
                var17 = {};
                var30 = {
                    'position': 'absolute',
                    'top': 0,
                    'left': 0,
                    'right': 0,
                    'bottom': null,
                    'backgroundColor': 'black'
                };
                var31 = _closure1_slot15;
                var31 = var31 / var24;
                var30.bottom = var31;
                var17.style = var30;
                var17 = var27.bind(var3)(var26, var17);
                var26 = new Array(3);
                var26[0] = var17;
                var30 = _closure1_slot22;
                var27 = _closure1_slot6;
                var17 = {};
                var31 = {
                    'position': 'absolute',
                    'top': null,
                    'left': null,
                    'right': 0,
                    'bottom': 0,
                    'backgroundColor': 'black'
                };
                var32 = _closure1_slot15;
                var32 = var32 / var24;
                var31.top = var32;
                var32 = 8;
                var35 = var23 + var32;
                var35 = var35 - var36;
                var31.left = var35;
                var17.style = var31;
                var17 = var30.bind(var3)(var27, var17);
                var26[1] = var17;
                var31 = _closure1_slot22;
                var30 = _closure1_slot26;
                var27 = {};
                var17 = {};
                var17.position = var33;
                var33 = _closure1_slot15;
                var33 = var33 / var24;
                var17.top = var33;
                var32 = var23 + var32;
                var17.width = var32;
                var17.left = var34;
                var32 = _closure1_slot15;
                var32 = var32 / var24;
                var17.height = var32;
                var27.style = var17;
                var17 = 48;
                var17 = var22[var17];
                var17 = var19.bind(var3)(var17);
                var32 = '#000000';
                var33 = var17.bind(var3)(var32);
                var17 = var33.alpha;
                var33 = var17.bind(var33)(var34);
                var17 = var33.hex;
                var33 = var17.bind(var33)();
                var17 = new Array(2);
                var17[0] = var33;
                var17[1] = var32;
                var27.colors = var17;
                var17 = {
                    'x': 0,
                    'y': 0
                };
                var27.start = var17;
                var17 = {
                    'x': 1,
                    'y': 0
                };
                var27.end = var17;
                var17 = [0.73, 0.88];
                var27.locations = var17;
                var17 = 'none';
                var27.pointerEvents = var17;
                var27 = var31.bind(var3)(var30, var27);
                var26[2] = var27;
                var7.children = var26;
                var7 = var25.bind(var3)(var20, var7);
                var4.maskElement = var7;
                var25 = _closure1_slot22;
                var20 = _closure1_slot6;
                var7 = {};
                var27 = var11.youRowFloating;
                var26 = new Array(2);
                var26[0] = var27;
                var27 = {};
                var27.width = var29;
                var29 = _closure1_slot15;
                var27.height = var29;
                var27.backgroundColor = var28;
                var26[1] = var27;
                var7.style = var26;
                var7 = var25.bind(var3)(var20, var7);
                var4.children = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(4);
                var4[0] = var5;
                var7 = _closure1_slot22;
                var6 = _closure1_slot6;
                var5 = {};
                var20 = {
                    'position': 'absolute',
                    'top': 0,
                    'left': null,
                    'right': 4294967295,
                    'bottom': 0,
                    'borderTopRightRadius': null,
                    'borderBottomRightRadius': null,
                    'overflow': 'hidden'
                };
                var20.left = var23;
                var23 = _closure1_slot15;
                var23 = var23 / var24;
                var20.borderTopRightRadius = var23;
                var23 = _closure1_slot15;
                var23 = var23 / var24;
                var20.borderBottomRightRadius = var23;
                var5.style = var20;
                var5.pointerEvents = var17;
                var20 = _closure1_slot22;
                var17 = 58;
                var17 = var22[var17];
                var19 = var19.bind(var3)(var17);
                var17 = {
                    'nameplate': null,
                    'isFocused': true,
                    'animate': false
                };
                var17.nameplate = var21;
                var17 = var20.bind(var3)(var19, var17);
                var5.children = var17;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var7 = _closure1_slot22;
                var6 = _closure1_slot7;
                var5 = {};
                var17 = var11.youPressable;
                var5.style = var17;
                var17 = {};
                var17.color = var18;
                var5.android_ripple = var17;
                var5.onPressIn = var16;
                var5.onPressOut = var15;
                var5.onPress = var14;
                var5.onLongPress = var13;
                var13 = _closure1_slot25;
                var5.hitSlop = var13;
                var15 = _closure1_slot22;
                var14 = _closure1_slot32;
                var13 = {};
                var13 = var15.bind(var3)(var14, var13);
                var5.children = var13;
                var5 = var7.bind(var3)(var6, var5);
                var4[2] = var5;
                var7 = _closure1_slot23;
                var6 = _closure1_slot6;
                var5 = {};
                var11 = var11.youRowRight;
                var5.style = var11;
                if (!var8) {
                    _fun102932_ip = 1490;
                    continue _fun102932
                }
            case 1469:
                var13 = _closure1_slot22;
                var11 = _closure1_slot34;
                var8 = {};
                var8.hasNameplate = var12;
                var10 = var13.bind(var3)(var11, var8);
            case 1490:
                var8 = new Array(2);
                var8[0] = var10;
                var11 = _closure1_slot22;
                var10 = _closure1_slot36;
                var9 = {};
                var9.hasNameplate = var12;
                var9 = var11.bind(var3)(var10, var9);
                var8[1] = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[3] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var3 = var7.bind(var6)(var3);
    var _closure1_slot38 = var3;
    var3 = {};
    var7 = 'function YouBarTsx5(){const{gradientHeight,drawerWidth}=this.__closure;return{height:gradientHeight,opacity:1,width:drawerWidth};}';
    var3.code = var7;
    var _closure1_slot39 = var3;
    var7 = var6.memo;
    var3 = function() { // Environment: var1
        _fun102946: for (var _fun102946_ip = 0;;) switch (_fun102946_ip) {
            case 0:
                var1 = _closure1_slot27;
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
                var1 = 49;
                var1 = var9[var1];
                var1 = var7.bind(var3)(var1);
                var1 = var1.bind(var3)();
                var11 = var1.width;
                var _closure2_slot1 = var11;
                var4 = _closure1_slot0;
                var1 = 14;
                var1 = var9[var1];
                var6 = var4.bind(var3)(var1);
                var2 = var6.useAnimatedStyle;
                var1 = function() {
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
                var10 = 7452657346454.0;
                var1.__workletHash = var10;
                var10 = _closure1_slot39;
                var1.__initData = var10;
                var11 = var2.bind(var6)(var1);
                var1 = 23;
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
                var1 = 46;
                var2 = var9[var1];
                var6 = var4.bind(var3)(var2);
                var2 = var6.useGradientValue;
                var1 = var9[var1];
                var1 = var4.bind(var3)(var1);
                var1 = var1.GradientPercentage;
                var1 = var1.END;
                var2 = var2.bind(var6)(var1);
                var1 = 32;
                var1 = var9[var1];
                var6 = var4.bind(var3)(var1);
                var4 = var6.useToken;
                var1 = 13;
                var1 = var9[var1];
                var1 = var7.bind(var3)(var1);
                var1 = var1.colors;
                var1 = var1.BACKGROUND_BASE_LOWER;
                var4 = var4.bind(var6)(var1);
                var1 = null;
                if (!(var1 != var0)) {
                    _fun102946_ip = 311;
                    continue _fun102946
                }
            case 294:
                var7 = _closure1_slot18;
                var6 = var0.id;
                var6 = var7[var6];
                if (!(var1 == var6)) {
                    _fun102946_ip = 323;
                    continue _fun102946
                }
            case 311:
                var7 = var4;
                if (!(var1 != var2)) {
                    _fun102946_ip = 336;
                    continue _fun102946
                }
            case 318:
                var7 = var2;
                _fun102946_ip = 336;
                continue _fun102946;
            case 323:
                var2 = _closure1_slot18;
                var0 = var0.id;
                var7 = var2[var0];
            case 336:
                var2 = _closure1_slot0;
                var0 = _closure1_slot2;
                var6 = 59;
                var0 = var0[var6];
                var4 = var2.bind(var3)(var0);
                var2 = var4.hex2rgb;
                var0 = 0.97;
                var0 = var2.bind(var4)(var7, var0);
                var4 = var1 != var0;
                var10 = 'transparent';
                var2 = var10;
                if (!var4) {
                    _fun102946_ip = 395;
                    continue _fun102946
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
                    _fun102946_ip = 439;
                    continue _fun102946
                }
            case 436:
                var10 = var0;
            case 439:
                var2 = _closure1_slot23;
                var1 = _closure1_slot24;
                var0 = {};
                var7 = _closure1_slot22;
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
                var7 = _closure1_slot22;
                var6 = _closure1_slot26;
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
        var0 = 23;
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
        var2 = _closure1_slot23;
        var0 = 60;
        var0 = var6[var0];
        var0 = var1.bind(var3)(var0);
        var1 = var0.ThemeContextProvider;
        var0 = {};
        var0.gradient = var4;
        var7 = _closure1_slot22;
        var6 = _closure1_slot40;
        var4 = {};
        var6 = var7.bind(var3)(var6, var4);
        var4 = new Array(2);
        var4[0] = var6;
        var7 = _closure1_slot22;
        var6 = _closure1_slot38;
        var5 = {};
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var1 = var3.bind(var6)(var1);
    var3 = 61;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/YouBar.tsx';
    var3 = var4.bind(var5)(var3);
    var2.ThemedYouBar = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 27, 3209, 1681, 3213, 5661, 1621, 5226, 660, 5457, 33, 671, 3720, 4098, 1297, 5461, 4027, 4081, 6943, 478, 7762, 566, 3961, 5456, 5458, 5227, 3236, 5671, 3941, 7816, 3151, 7698, 5759, 8928, 7530, 13465, 7878, 3279, 3920, 1234, 13466, 8192, 8663, 3246, 3195, 9123, 669, 1464, 9888, 3922, 8900, 3278, 13467, 1307, 13485, 4724, 6938, 668, 3159, 2]);