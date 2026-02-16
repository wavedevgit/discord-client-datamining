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
        _fun103474: for (var _fun103474_ip = 0;;) switch (_fun103474_ip) {
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
                    _fun103475: for (var _fun103475_ip = 0;;) switch (_fun103475_ip) {
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
                                _fun103475_ip = 267;
                                continue _fun103475
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
                                _fun103475_ip = 267;
                                continue _fun103475
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
                                _fun103475_ip = 319;
                                continue _fun103475
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
                            _fun103475_ip = 319;
                            continue _fun103475;
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
                    _fun103474_ip = 251;
                    continue _fun103474
                }
            case 248:
                var10 = 2;
            case 251:
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
    var _closure1_slot43 = var0;
    var0 = function arg0() {
        _fun103477: for (var _fun103477_ip = 0;;) switch (_fun103477_ip) {
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
                    _fun103480: for (var _fun103480_ip = 0;;) switch (_fun103480_ip) {
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
                                _fun103480_ip = 267;
                                continue _fun103480
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
                                _fun103480_ip = 267;
                                continue _fun103480
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
                                _fun103480_ip = 319;
                                continue _fun103480
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
                            _fun103480_ip = 319;
                            continue _fun103480;
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
                    _fun103477_ip = 232;
                    continue _fun103477
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
                    _fun103477_ip = 754;
                    continue _fun103477
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
                    _fun103477_ip = 447;
                    continue _fun103477
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
                var22 = _closure1_slot0;
                var8 = _closure1_slot2;
                var20 = var8[var19];
                var20 = var22.bind(var4)(var20);
                var20 = var20.AVATAR_SIZE_MAP;
                var20 = var20[var11];
                var10.width = var20;
                var20 = var8[var19];
                var20 = var22.bind(var4)(var20);
                var20 = var20.AVATAR_SIZE_MAP;
                var20 = var20[var11];
                var10.height = var20;
                var20 = _closure1_slot16;
                var20 = -var20;
                var10.left = var20;
                var20 = _closure1_slot16;
                var20 = -var20;
                var19 = var8[var19];
                var19 = var22.bind(var4)(var19);
                var21 = var19.AVATAR_SIZE_MAP;
                var19 = var8[var18];
                var19 = var22.bind(var4)(var19);
                var19 = var19.AvatarSizes;
                var19 = var19.XLARGE_72;
                var21 = var21[var19];
                var19 = _closure1_slot15;
                var19 = var21 - var19;
                var19 = var20 - var19;
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
                    _fun103477_ip = 668;
                    continue _fun103477
                }
            case 665:
                var15 = var16;
            case 668:
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
                    _fun103477_ip = 719;
                    continue _fun103477
                }
            case 709:
                var13 = _closure1_slot20;
                var12 = var13.OFFLINE;
            case 719:
                var8.status = var12;
                var8.autoStatusCutout = var11;
                var8 = var10.bind(var4)(var9, var8);
                var5.children = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 754:
                return var0;
        }
    };
    var _closure1_slot44 = var0;
    var0 = function arg0() {
        _fun103482: for (var _fun103482_ip = 0;;) switch (_fun103482_ip) {
            case 0:
                var1 = arg0;
                var15 = var1.selectedGuildId;
                var8 = var1.transitionState;
                var _closure2_slot0 = var8;
                var10 = var1.cleanup;
                var _closure2_slot1 = var10;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 23;
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
                var11 = var7.bind(var9)(var6, var5);
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
                var16 = var6.bind(var7)(var5, var1);
                var1 = 14;
                var5 = var3[var1];
                var7 = var2.bind(var4)(var5);
                var6 = var7.useSharedValue;
                var5 = 0;
                var5 = var6.bind(var7)(var5);
                var _closure2_slot2 = var5;
                var9 = _closure1_slot5;
                var7 = var9.useEffect;
                var6 = new Array(3);
                var6[0] = var8;
                var6[1] = var5;
                var6[2] = var10;
                var0 = function() { // Environment: var0
                    _fun103485: for (var _fun103485_ip = 0;;) switch (_fun103485_ip) {
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
                                _fun103485_ip = 267;
                                continue _fun103485
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
                                _fun103485_ip = 267;
                                continue _fun103485
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
                                _fun103485_ip = 319;
                                continue _fun103485
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
                            var3 = 7499536080407.0;
                            var7.__workletHash = var3;
                            var3 = _closure1_slot32;
                            var7.__initData = var3;
                            var16 = 0;
                            var14 = 'respect-motion-settings';
                            var17 = var10;
                            var13 = var7;
                            var3 = var17[var9](var16, var15, var14, var13, var12);
                            var3 = var4.bind(var5)(var3);
                            _fun103485_ip = 319;
                            continue _fun103485;
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
                var0 = var7.bind(var9)(var0, var6);
                var0 = 24;
                var0 = var3[var0];
                var3 = var2.bind(var4)(var0);
                var2 = var3.useAvatarDecoration;
                var14 = null;
                var6 = var14 != var15;
                var0 = undefined;
                if (!var6) {
                    _fun103482_ip = 224;
                    continue _fun103482
                }
            case 221:
                var0 = var15;
            case 224:
                var13 = var2.bind(var3)(var16, var0);
                var2 = _closure1_slot0;
                var0 = _closure1_slot2;
                var17 = 25;
                var0 = var0[var17];
                var0 = var2.bind(var4)(var0);
                var0 = var0.AvatarSizes;
                var10 = var0.NORMAL;
                var2 = var14 == var16;
                var0 = null;
                if (var2) {
                    _fun103482_ip = 586;
                    continue _fun103482
                }
            case 274:
                var3 = _closure1_slot22;
                var2 = _closure1_slot1;
                var9 = _closure1_slot2;
                var1 = var9[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.View;
                var1 = {};
                var6 = {};
                var7 = _closure1_slot0;
                var18 = 26;
                var19 = var9[var18];
                var19 = var7.bind(var4)(var19);
                var20 = var19.AVATAR_SIZE_MAP;
                var19 = var9[var17];
                var19 = var7.bind(var4)(var19);
                var19 = var19.AvatarSizes;
                var19 = var19.NORMAL;
                var19 = var20[var19];
                var6.height = var19;
                var18 = var9[var18];
                var18 = var7.bind(var4)(var18);
                var19 = var18.AVATAR_SIZE_MAP;
                var18 = var9[var17];
                var18 = var7.bind(var4)(var18);
                var18 = var18.AvatarSizes;
                var18 = var18.NORMAL;
                var18 = var19[var18];
                var6.width = var18;
                var6.opacity = var5;
                var5 = 18;
                var5 = var9[var5];
                var5 = var7.bind(var4)(var5);
                var5 = var5.TransitionStates;
                var7 = var5.YEETED;
                var5 = 'relative';
                if (!(var8 === var7)) {
                    _fun103482_ip = 439;
                    continue _fun103482
                }
            case 435:
                var5 = 'absolute';
            case 439:
                var6.position = var5;
                var5 = new Array(1);
                var5[0] = var6;
                var1.style = var5;
                var7 = _closure1_slot22;
                var6 = _closure1_slot6;
                var5 = {};
                var9 = _closure1_slot1;
                var8 = _closure1_slot2;
                var8 = var8[var17];
                var9 = var9.bind(var4)(var8);
                var8 = {};
                var8.user = var16;
                var16 = var14 != var15;
                var14 = undefined;
                if (!var16) {
                    _fun103482_ip = 500;
                    continue _fun103482
                }
            case 497:
                var14 = var15;
            case 500:
                var8.guildId = var14;
                var8.size = var10;
                var10 = false;
                var8.animate = var10;
                var10 = true;
                var8.needsOffscreenAlphaCompositing = var10;
                var8.avatarDecoration = var13;
                var13 = _closure1_slot20;
                var13 = var13.UNKNOWN;
                if (!(var11 === var13)) {
                    _fun103482_ip = 551;
                    continue _fun103482
                }
            case 541:
                var12 = _closure1_slot20;
                var11 = var12.OFFLINE;
            case 551:
                var8.status = var11;
                var8.autoStatusCutout = var10;
                var8 = var7.bind(var4)(var9, var8);
                var5.children = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 586:
                return var0;
        }
    };
    var _closure1_slot45 = var0;
    var0 = function() {
        _fun103487: for (var _fun103487_ip = 0;;) switch (_fun103487_ip) {
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
                    _fun103491: for (var _fun103491_ip = 0;;) switch (_fun103491_ip) {
                        case 0:
                            var0 = _closure2_slot1;
                            var3 = null;
                            var2 = var3 != var0;
                            var0 = null;
                            if (!var2) {
                                _fun103491_ip = 53;
                                continue _fun103491
                            }
                        case 18:
                            var2 = _closure2_slot0;
                            var2 = var3 != var2;
                            var0 = null;
                            if (!var2) {
                                _fun103491_ip = 53;
                                continue _fun103491
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
                    _fun103487_ip = 312;
                    continue _fun103487
                }
            case 270:
                var2 = null;
                var7 = var2 == var4;
                var5 = undefined;
                if (var7) {
                    _fun103487_ip = 287;
                    continue _fun103487
                }
            case 281:
                var5 = var4.nick;
            case 287:
                var1 = var6;
                if (!(var2 != var5)) {
                    _fun103487_ip = 312;
                    continue _fun103487
                }
            case 294:
                var5 = var2 == var4;
                var2 = undefined;
                if (var5) {
                    _fun103487_ip = 309;
                    continue _fun103487
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
                    _fun103492: for (var _fun103492_ip = 0;;) switch (_fun103492_ip) {
                        case 0:
                            var2 = _closure2_slot2;
                            var0 = null;
                            if (!(var0 == var2)) {
                                _fun103492_ip = 19;
                                continue _fun103492
                            }
                        case 13:
                            var0 = new Array(0);
                            _fun103492_ip = 34;
                            continue _fun103492;
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
                    _fun103493: for (var _fun103493_ip = 0;;) switch (_fun103493_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var0 = null;
                            var2 = var0 == var2;
                            if (var2) {
                                _fun103493_ip = 78;
                                continue _fun103493
                            }
                        case 16:
                            var5 = _closure1_slot22;
                            var4 = _closure1_slot43;
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
                        case 78:
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
                    _fun103487_ip = 520;
                    continue _fun103487
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
                    _fun103487_ip = 663;
                    continue _fun103487
                }
            case 657:
                var8 = var17.emoji;
            case 663:
                var8 = var14 != var8;
                var10 = null;
                if (!var8) {
                    _fun103487_ip = 732;
                    continue _fun103487
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
                    _fun103487_ip = 831;
                    continue _fun103487
                }
            case 826:
                var12 = var17.state;
            case 831:
                if (!(var14 == var12)) {
                    _fun103487_ip = 863;
                    continue _fun103487
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
    var _closure1_slot46 = var0;
    var0 = function() {
        _fun103495: for (var _fun103495_ip = 0;;) switch (_fun103495_ip) {
            case 0:
                var0 = _closure1_slot27;
                var3 = undefined;
                var14 = var0.bind(var3)();
                var4 = _closure1_slot0;
                var0 = _closure1_slot2;
                var1 = 32;
                var1 = var0[var1];
                var5 = var4.bind(var3)(var1);
                var2 = var5.useToken;
                var6 = _closure1_slot1;
                var1 = 13;
                var1 = var0[var1];
                var1 = var6.bind(var3)(var1);
                var1 = var1.colors;
                var1 = var1.BACKGROUND_SURFACE_HIGHEST;
                var17 = var2.bind(var5)(var1);
                var6 = 25;
                var1 = var0[var6];
                var2 = var4.bind(var3)(var1);
                var1 = var2.getStatusSize;
                var0 = var0[var6];
                var0 = var4.bind(var3)(var0);
                var0 = var0.AvatarSizes;
                var0 = var0.NORMAL;
                var0 = var1.bind(var2)(var0);
                var1 = null;
                var1 = var1 != var0;
                var9 = 0;
                if (!var1) {
                    _fun103495_ip = 129;
                    continue _fun103495
                }
            case 126:
                var9 = var0;
            case 129:
                var15 = _closure1_slot0;
                var10 = _closure1_slot2;
                var7 = 26;
                var0 = var10[var7];
                var0 = var15.bind(var3)(var0);
                var1 = var0.AVATAR_SIZE_MAP;
                var0 = var10[var6];
                var0 = var15.bind(var3)(var0);
                var0 = var0.AvatarSizes;
                var0 = var0.NORMAL;
                var18 = var1[var0];
                var1 = 2;
                var2 = var9 / var1;
                var0 = _closure1_slot21;
                var0 = var2 + var0;
                var4 = var18 - var0;
                var2 = 4;
                var2 = var9 / var2;
                var2 = var2 * var1;
                var2 = var4 - var2;
                var12 = {};
                var4 = 17;
                var5 = var10[var4];
                var5 = var15.bind(var3)(var5);
                var5 = var5.CutoutShape;
                var5 = var5.Circle;
                var12.shape = var5;
                var12.x = var2;
                var12.y = var2;
                var0 = var1 * var0;
                var12.size = var0;
                var2 = _closure1_slot23;
                var1 = _closure1_slot6;
                var0 = {};
                var5 = {};
                var11 = var10[var7];
                var11 = var15.bind(var3)(var11);
                var13 = var11.AVATAR_SIZE_MAP;
                var11 = var10[var6];
                var11 = var15.bind(var3)(var11);
                var11 = var11.AvatarSizes;
                var11 = var11.NORMAL;
                var11 = var13[var11];
                var5.height = var11;
                var7 = var10[var7];
                var7 = var15.bind(var3)(var7);
                var7 = var7.AVATAR_SIZE_MAP;
                var6 = var10[var6];
                var6 = var15.bind(var3)(var6);
                var6 = var6.AvatarSizes;
                var6 = var6.NORMAL;
                var6 = var7[var6];
                var5.width = var6;
                var6 = 'relative';
                var5.position = var6;
                var0.style = var5;
                var7 = _closure1_slot22;
                var6 = _closure1_slot1;
                var4 = var10[var4];
                var5 = var6.bind(var3)(var4);
                var4 = {};
                var11 = new Array(1);
                var11[0] = var12;
                var4.cutouts = var11;
                var13 = _closure1_slot22;
                var12 = _closure1_slot6;
                var11 = {};
                var16 = var14.placeholderAvatar;
                var14 = new Array(2);
                var14[0] = var16;
                var16 = {};
                var16.width = var18;
                var16.height = var18;
                var16.backgroundColor = var17;
                var14[1] = var16;
                var11.style = var14;
                var16 = _closure1_slot22;
                var14 = 33;
                var14 = var10[var14];
                var14 = var15.bind(var3)(var14);
                var15 = var14.ReactionIcon;
                var14 = {
                    'size': 'custom',
                    'style': null,
                    'color': 'background-mod-strong'
                };
                var17 = {};
                var17.width = var18;
                var17.height = var18;
                var14.style = var17;
                var14 = var16.bind(var3)(var15, var14);
                var11.children = var14;
                var11 = var13.bind(var3)(var12, var11);
                var4.children = var11;
                var5 = var7.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot22;
                var5 = 34;
                var5 = var10[var5];
                var6 = var6.bind(var3)(var5);
                var5 = {
                    'size': null,
                    'status': null,
                    'isMobileOnline': false,
                    'isVROnline': false,
                    'streaming': false
                };
                var5.size = var9;
                var8 = _closure1_slot20;
                var8 = var8.OFFLINE;
                var5.status = var8;
                var8 = {
                    'position': 'absolute',
                    'right': 4294967293,
                    'bottom': 4294967293
                };
                var5.style = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot47 = var0;
    var0 = function() {
        _fun103496: for (var _fun103496_ip = 0;;) switch (_fun103496_ip) {
            case 0:
                var0 = _closure1_slot27;
                var3 = undefined;
                var17 = var0.bind(var3)();
                var4 = _closure1_slot0;
                var0 = _closure1_slot2;
                var1 = 32;
                var1 = var0[var1];
                var5 = var4.bind(var3)(var1);
                var2 = var5.useToken;
                var6 = _closure1_slot1;
                var1 = 13;
                var1 = var0[var1];
                var1 = var6.bind(var3)(var1);
                var1 = var1.colors;
                var1 = var1.BACKGROUND_SURFACE_HIGHEST;
                var19 = var2.bind(var5)(var1);
                var21 = 25;
                var1 = var0[var21];
                var2 = var4.bind(var3)(var1);
                var1 = var2.getStatusSize;
                var0 = var0[var21];
                var0 = var4.bind(var3)(var0);
                var0 = var0.AvatarSizes;
                var0 = var0.XLARGE_72;
                var0 = var1.bind(var2)(var0);
                var1 = null;
                var1 = var1 != var0;
                var12 = 0;
                if (!var1) {
                    _fun103496_ip = 129;
                    continue _fun103496
                }
            case 126:
                var12 = var0;
            case 129:
                var23 = _closure1_slot0;
                var13 = _closure1_slot2;
                var22 = 26;
                var0 = var13[var22];
                var0 = var23.bind(var3)(var0);
                var1 = var0.AVATAR_SIZE_MAP;
                var0 = var13[var21];
                var0 = var23.bind(var3)(var0);
                var0 = var0.AvatarSizes;
                var0 = var0.XLARGE_72;
                var20 = var1[var0];
                var1 = 2;
                var2 = var12 / var1;
                var0 = _closure1_slot21;
                var0 = var2 + var0;
                var4 = var20 - var0;
                var2 = 4;
                var2 = var12 / var2;
                var2 = var2 * var1;
                var2 = var4 - var2;
                var15 = {};
                var7 = 17;
                var4 = var13[var7];
                var4 = var23.bind(var3)(var4);
                var4 = var4.CutoutShape;
                var4 = var4.Circle;
                var15.shape = var4;
                var15.x = var2;
                var15.y = var2;
                var0 = var1 * var0;
                var15.size = var0;
                var2 = _closure1_slot22;
                var1 = _closure1_slot6;
                var0 = {};
                var4 = {};
                var5 = var13[var22];
                var5 = var23.bind(var3)(var5);
                var6 = var5.AVATAR_SIZE_MAP;
                var5 = var13[var21];
                var5 = var23.bind(var3)(var5);
                var5 = var5.AvatarSizes;
                var5 = var5.NORMAL;
                var5 = var6[var5];
                var4.height = var5;
                var5 = var13[var22];
                var5 = var23.bind(var3)(var5);
                var6 = var5.AVATAR_SIZE_MAP;
                var5 = var13[var21];
                var5 = var23.bind(var3)(var5);
                var5 = var5.AvatarSizes;
                var5 = var5.NORMAL;
                var5 = var6[var5];
                var4.width = var5;
                var5 = 'relative';
                var4.position = var5;
                var0.style = var4;
                var6 = _closure1_slot23;
                var5 = _closure1_slot6;
                var4 = {};
                var8 = {};
                var9 = 'absolute';
                var8.position = var9;
                var8.width = var20;
                var8.height = var20;
                var9 = _closure1_slot16;
                var10 = -var9;
                var9 = var13[var22];
                var9 = var23.bind(var3)(var9);
                var14 = var9.AVATAR_SIZE_MAP;
                var9 = var13[var21];
                var9 = var23.bind(var3)(var9);
                var9 = var9.AvatarSizes;
                var9 = var9.XLARGE_72;
                var14 = var14[var9];
                var9 = _closure1_slot15;
                var9 = var14 - var9;
                var9 = var10 - var9;
                var8.top = var9;
                var9 = _closure1_slot16;
                var9 = -var9;
                var8.left = var9;
                var4.style = var8;
                var10 = _closure1_slot22;
                var9 = _closure1_slot1;
                var7 = var13[var7];
                var8 = var9.bind(var3)(var7);
                var7 = {};
                var14 = new Array(1);
                var14[0] = var15;
                var7.cutouts = var14;
                var16 = _closure1_slot22;
                var15 = _closure1_slot6;
                var14 = {};
                var18 = var17.placeholderAvatar;
                var17 = new Array(2);
                var17[0] = var18;
                var18 = {};
                var18.width = var20;
                var18.height = var20;
                var18.backgroundColor = var19;
                var17[1] = var18;
                var14.style = var17;
                var19 = _closure1_slot22;
                var17 = 33;
                var17 = var13[var17];
                var17 = var23.bind(var3)(var17);
                var18 = var17.ReactionIcon;
                var17 = {
                    'size': 'custom',
                    'style': null,
                    'color': 'background-mod-strong'
                };
                var20 = {};
                var24 = var13[var22];
                var24 = var23.bind(var3)(var24);
                var25 = var24.AVATAR_SIZE_MAP;
                var24 = var13[var21];
                var24 = var23.bind(var3)(var24);
                var24 = var24.AvatarSizes;
                var24 = var24.NORMAL;
                var24 = var25[var24];
                var20.width = var24;
                var22 = var13[var22];
                var22 = var23.bind(var3)(var22);
                var22 = var22.AVATAR_SIZE_MAP;
                var21 = var13[var21];
                var21 = var23.bind(var3)(var21);
                var21 = var21.AvatarSizes;
                var21 = var21.NORMAL;
                var21 = var22[var21];
                var20.height = var21;
                var17.style = var20;
                var17 = var19.bind(var3)(var18, var17);
                var14.children = var17;
                var14 = var16.bind(var3)(var15, var14);
                var7.children = var14;
                var8 = var10.bind(var3)(var8, var7);
                var7 = new Array(2);
                var7[0] = var8;
                var10 = _closure1_slot22;
                var8 = 34;
                var8 = var13[var8];
                var9 = var9.bind(var3)(var8);
                var8 = {
                    'size': null,
                    'status': null,
                    'isMobileOnline': false,
                    'isVROnline': false,
                    'streaming': false
                };
                var8.size = var12;
                var11 = _closure1_slot20;
                var11 = var11.OFFLINE;
                var8.status = var11;
                var11 = {
                    'position': 'absolute',
                    'right': 4294967293,
                    'bottom': 4294967293
                };
                var8.style = var11;
                var8 = var10.bind(var3)(var9, var8);
                var7[1] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot48 = var0;
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
    var16 = 1;
    var3 = var5[var16];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var15 = 2;
    var6 = var5[var15];
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
    var14 = var3.YOU_BAR_HEIGHT;
    var _closure1_slot15 = var14;
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
    var12 = 16;
    var3 = var5[var12];
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
    var13 = 'row';
    var17 = var5[var10];
    var17 = var11.bind(var0)(var17);
    var17 = var17.shadows;
    var19 = var17.SHADOW_TOP_HIGH;
    var20 = var9;
    var17 = copyDataProperties(var20, var19);
    var3.youRow = var9;
    var9 = {};
    var9.borderWidth = var16;
    var17 = var5[var10];
    var17 = var11.bind(var0)(var17);
    var17 = var17.colors;
    var17 = var17.BORDER_MUTED;
    var9.borderColor = var17;
    var17 = var14 / var15;
    var9.borderRadius = var17;
    var3.youRowFloating = var9;
    var9 = {
        'flexDirection': 'row',
        'gap': 8
    };
    var3.youRowRight = var9;
    var9 = {};
    var9.flex = var16;
    var16 = var5[var10];
    var16 = var11.bind(var0)(var16);
    var16 = var16.spacing;
    var16 = var16.PX_12;
    var9.marginRight = var16;
    var16 = var14 / var15;
    var9.borderRadius = var16;
    var3.youPressable = var9;
    var9 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'borderRadius': null,
        'gap': 12
    };
    var14 = var14 / var15;
    var9.borderRadius = var14;
    var3.youButton = var9;
    var9 = {};
    var14 = 32;
    var9.gap = var14;
    var3.youButtonLarge = var9;
    var9 = {
        'flex': 1,
        'flexDirection': 'column',
        'justifyContent': 'center',
        'height': '100%',
        'gap': 2
    };
    var3.userText = var9;
    var9 = {};
    var14 = 'relative';
    var9.position = var14;
    var3.usernameContainer = var9;
    var9 = {};
    var9.flexDirection = var13;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_4;
    var9.gap = var13;
    var3.statusRow = var9;
    var9 = {
        'width': 16,
        'height': 16
    };
    var3.statusEmoji = var9;
    var9 = {
        'position': 'absolute',
        'flexDirection': 'row',
        'alignItems': 'center',
        'overflow': 'visible'
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
    var12 = var12.BACKGROUND_BRAND;
    var9.backgroundColor = var12;
    var3.icymiBadge = var9;
    var9 = {};
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.shadows;
    var19 = var12.SHADOW_MEDIUM;
    var20 = var9;
    var12 = copyDataProperties(var20, var19);
    var3.avatarShadow = var9;
    var9 = {
        'borderRadius': null,
        'justifyContent': 'center',
        'alignItems': 'center'
    };
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.radii;
    var10 = var10.round;
    var9.borderRadius = var10;
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
    var3 = {};
    var7 = 'function YouBarTsx3(){const{runOnJS,cleanup}=this.__closure;runOnJS(cleanup)();}';
    var3.code = var7;
    var _closure1_slot32 = var3;
    var7 = var6.memo;
    var3 = function(arg0) { // Environment: var1
        _fun103497: for (var _fun103497_ip = 0;;) switch (_fun103497_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.isLargeAvatar;
                var _closure2_slot0 = var5;
                var0 = _closure1_slot27;
                var3 = undefined;
                var12 = var0.bind(var3)();
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 27;
                var0 = var2[var0];
                var0 = var1.bind(var3)(var0);
                var6 = var0.YouBarExperiment;
                var4 = var6.useConfig;
                var0 = {};
                var7 = 'YouBar';
                var0.location = var7;
                var0 = var4.bind(var6)(var0);
                var8 = var0.animateBetweenServers;
                var _closure2_slot1 = var8;
                var0 = 23;
                var4 = var2[var0];
                var11 = var1.bind(var3)(var4);
                var7 = var11.useStateFromStores;
                var4 = _closure1_slot12;
                var6 = new Array(1);
                var6[0] = var4;
                var4 = function() { // Environment: var10
                    var1 = _closure1_slot12;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var6 = var7.bind(var11)(var6, var4);
                var _closure2_slot2 = var6;
                var0 = var2[var0];
                var7 = var1.bind(var3)(var0);
                var4 = var7.useStateFromStores;
                var0 = _closure1_slot10;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var10
                    var1 = _closure1_slot10;
                    var0 = var1.getGuildId;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var0 = var4.bind(var7)(var1, var0);
                var _closure2_slot3 = var0;
                var7 = _closure1_slot5;
                var4 = var7.useMemo;
                var1 = new Array(2);
                var1[0] = var8;
                var1[1] = var0;
                var0 = function() { // Environment: var10
                    _fun103500: for (var _fun103500_ip = 0;;) switch (_fun103500_ip) {
                        case 0:
                            var0 = _closure2_slot1;
                            var1 = new Array(1);
                            if (var0) {
                                _fun103500_ip = 25;
                                continue _fun103500
                            }
                        case 14:
                            var0 = undefined;
                            var1[0] = var0;
                            var0 = var1;
                            _fun103500_ip = 36;
                            continue _fun103500;
                        case 25:
                            var2 = _closure2_slot3;
                            var1[0] = var2;
                            var0 = var1;
                        case 36:
                            return var0;
                    }
                };
                var11 = var4.bind(var7)(var0, var1);
                var1 = _closure1_slot1;
                var0 = 28;
                var0 = var2[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.useName;
                var4 = var0.bind(var1)(var6);
                var7 = _closure1_slot5;
                var2 = var7.useCallback;
                var1 = new Array(1);
                var1[0] = var5;
                var0 = function(arg0, arg1, arg2, arg3) { // Environment: var10
                    _fun103501: for (var _fun103501_ip = 0;;) switch (_fun103501_ip) {
                        case 0:
                            var4 = _closure1_slot22;
                            var1 = _closure2_slot0;
                            if (var1) {
                                _fun103501_ip = 23;
                                continue _fun103501
                            }
                        case 17:
                            var3 = _closure1_slot45;
                            _fun103501_ip = 27;
                            continue _fun103501;
                        case 23:
                            var3 = _closure1_slot44;
                        case 27:
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
                    }
                };
                var8 = var2.bind(var7)(var0, var1);
                var2 = _closure1_slot23;
                var1 = _closure1_slot6;
                var0 = null;
                if (!(var0 != var6)) {
                    _fun103497_ip = 422;
                    continue _fun103497
                }
            case 284:
                if (!(var0 != var4)) {
                    _fun103497_ip = 422;
                    continue _fun103497
                }
            case 291:
                var0 = {};
                var6 = var12.youButton;
                var4 = new Array(2);
                var4[0] = var6;
                var6 = undefined;
                if (!var5) {
                    _fun103497_ip = 318;
                    continue _fun103497
                }
            case 312:
                var6 = var12.youButtonLarge;
            case 318:
                var4[1] = var6;
                var0.style = var4;
                var7 = _closure1_slot22;
                var6 = _closure1_slot0;
                var13 = _closure1_slot2;
                var4 = 18;
                var4 = var13[var4];
                var4 = var6.bind(var3)(var4);
                var6 = var4.TransitionGroup;
                var4 = {};
                var4.items = var11;
                var10 = function arg0() {
                    _fun103502: for (var _fun103502_ip = 0;;) switch (_fun103502_ip) {
                        case 0:
                            var2 = _closure2_slot2;
                            var1 = null;
                            var1 = var1 == var2;
                            var2 = undefined;
                            if (var1) {
                                _fun103502_ip = 45;
                                continue _fun103502
                            }
                        case 18:
                            var5 = _closure2_slot2;
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
                var4.getItemKey = var10;
                var4.renderItem = var8;
                var6 = var7.bind(var3)(var6, var4);
                var4 = new Array(2);
                var4[0] = var6;
                var8 = _closure1_slot22;
                var7 = _closure1_slot46;
                var6 = {};
                var6 = var8.bind(var3)(var7, var6);
                var4[1] = var6;
                var0.children = var4;
                _fun103497_ip = 557;
                continue _fun103497;
            case 422:
                var4 = {};
                var7 = var12.youButton;
                var6 = new Array(2);
                var6[0] = var7;
                var7 = undefined;
                if (!var5) {
                    _fun103497_ip = 449;
                    continue _fun103497
                }
            case 443:
                var7 = var12.youButtonLarge;
            case 449:
                var6[1] = var7;
                var4.style = var6;
                var7 = _closure1_slot22;
                if (var5) {
                    _fun103497_ip = 470;
                    continue _fun103497
                }
            case 464:
                var6 = _closure1_slot47;
                _fun103497_ip = 474;
                continue _fun103497;
            case 470:
                var6 = _closure1_slot48;
            case 474:
                var5 = {};
                var6 = var7.bind(var3)(var6, var5);
                var5 = new Array(2);
                var5[0] = var6;
                var8 = _closure1_slot22;
                var7 = _closure1_slot6;
                var6 = {};
                var10 = var12.userText;
                var6.style = var10;
                var11 = _closure1_slot22;
                var10 = _closure1_slot6;
                var9 = {};
                var12 = var12.placeholder;
                var9.style = var12;
                var9 = var11.bind(var3)(var10, var9);
                var6.children = var9;
                var6 = var8.bind(var3)(var7, var6);
                var5[1] = var6;
                var4.children = var5;
                var0 = var4;
            case 557:
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var3 = var7.bind(var6)(var3);
    var _closure1_slot33 = var3;
    var7 = var6.memo;
    var3 = function(arg0) { // Environment: var1
        _fun103503: for (var _fun103503_ip = 0;;) switch (_fun103503_ip) {
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
                    _fun103504: for (var _fun103504_ip = 0;;) switch (_fun103504_ip) {
                        case 0:
                            var1 = arg0;
                            var7 = var1.size;
                            var _closure3_slot0 = var7;
                            var6 = var1.xOffset;
                            var2 = undefined;
                            if (!(var6 === var2)) {
                                _fun103504_ip = 28;
                                continue _fun103504
                            }
                        case 26:
                            var6 = 0;
                        case 28:
                            var _closure3_slot1 = var6;
                            var5 = var1.yOffset;
                            if (!(var5 === var2)) {
                                _fun103504_ip = 44;
                                continue _fun103504
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
                                _fun103505: for (var _fun103505_ip = 0;;) switch (_fun103505_ip) {
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
                                            _fun103505_ip = 51;
                                            continue _fun103505
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
                    _fun103506: for (var _fun103506_ip = 0;;) switch (_fun103506_ip) {
                        case 0:
                            var2 = arg0;
                            var7 = var2.size;
                            var _closure3_slot0 = var7;
                            var6 = var2.badgeSize;
                            var _closure3_slot1 = var6;
                            var4 = var2.xOffset;
                            var1 = undefined;
                            if (!(var4 === var1)) {
                                _fun103506_ip = 38;
                                continue _fun103506
                            }
                        case 36:
                            var4 = 0;
                        case 38:
                            var _closure3_slot2 = var4;
                            var5 = var2.yOffset;
                            if (!(var5 === var1)) {
                                _fun103506_ip = 54;
                                continue _fun103506
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
                    _fun103508: for (var _fun103508_ip = 0;;) switch (_fun103508_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            if (var0) {
                                _fun103508_ip = 16;
                                continue _fun103508
                            }
                        case 10:
                            var0 = new Array(0);
                            _fun103508_ip = 31;
                            continue _fun103508;
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
                    _fun103503_ip = 274;
                    continue _fun103503
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
                    _fun103503_ip = 357;
                    continue _fun103503
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
    var _closure1_slot34 = var3;
    var7 = var6.memo;
    var3 = function(arg0) { // Environment: var1
        _fun103509: for (var _fun103509_ip = 0;;) switch (_fun103509_ip) {
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
                var1 = _closure1_slot34;
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
                    _fun103509_ip = 122;
                    continue _fun103509
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
                    _fun103510: for (var _fun103510_ip = 0;;) switch (_fun103510_ip) {
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
                                _fun103510_ip = 128;
                                continue _fun103510
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
    var _closure1_slot35 = var3;
    var3 = {};
    var7 = 'function YouBarTsx4(){const{withSpring,badgeCount,SPRING_CONFIG,tokens}=this.__closure;return{transform:[{scaleX:withSpring(badgeCount>0?1:0,SPRING_CONFIG)}],marginLeft:withSpring(badgeCount>0?tokens.spacing.PX_4:0,SPRING_CONFIG),opacity:withSpring(badgeCount>0?1:0,SPRING_CONFIG)};}';
    var3.code = var7;
    var _closure1_slot36 = var3;
    var7 = var6.memo;
    var3 = function(arg0) { // Environment: var1
        _fun103511: for (var _fun103511_ip = 0;;) switch (_fun103511_ip) {
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
                    _fun103512: for (var _fun103512_ip = 0;;) switch (_fun103512_ip) {
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
                                _fun103512_ip = 55;
                                continue _fun103512
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
                                _fun103512_ip = 148;
                                continue _fun103512
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
                                _fun103512_ip = 201;
                                continue _fun103512
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
                var4 = 11940471407864.0;
                var0.__workletHash = var4;
                var4 = _closure1_slot36;
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
                    _fun103511_ip = 285;
                    continue _fun103511
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
                    _fun103511_ip = 384;
                    continue _fun103511
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
                    _fun103513: for (var _fun103513_ip = 0;;) switch (_fun103513_ip) {
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
                                _fun103513_ip = 110;
                                continue _fun103513
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
    var _closure1_slot37 = var3;
    var3 = {};
    var7 = 'function YouBarTsx5(){const{withSpring,isPressed,isQuestVisible,SPRING_CONFIG}=this.__closure;return{transform:[{scale:withSpring(isPressed&&!isQuestVisible?0.98:1,SPRING_CONFIG)}]};}';
    var3.code = var7;
    var _closure1_slot38 = var3;
    var3 = {};
    var7 = 'function YouBarTsx6(){const{withSpring,interpolate,isQuestVisible,questDockOffset,YOU_BAR_HEIGHT,Extrapolation,SPRING_CONFIG}=this.__closure;return{borderTopRightRadius:withSpring(interpolate(isQuestVisible?questDockOffset.get():50,[0,50],[0,YOU_BAR_HEIGHT/2],Extrapolation.CLAMP),SPRING_CONFIG),borderTopLeftRadius:withSpring(interpolate(isQuestVisible?questDockOffset.get():50,[0,50],[0,YOU_BAR_HEIGHT/2],Extrapolation.CLAMP),SPRING_CONFIG)};}';
    var3.code = var7;
    var _closure1_slot39 = var3;
    var7 = var6.memo;
    var3 = function() { // Environment: var1
        _fun103514: for (var _fun103514_ip = 0;;) switch (_fun103514_ip) {
            case 0:
                var1 = _closure1_slot27;
                var3 = undefined;
                var11 = var1.bind(var3)();
                var4 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 49;
                var1 = var7[var1];
                var1 = var4.bind(var3)(var1);
                var1 = var1.bind(var3)();
                var6 = var1.width;
                var5 = _closure1_slot0;
                var1 = 27;
                var2 = var7[var1];
                var2 = var5.bind(var3)(var2);
                var12 = var2.YouBarExperiment;
                var8 = var12.useConfig;
                var2 = {};
                var10 = 'YouBar';
                var2.location = var10;
                var2 = var8.bind(var12)(var2);
                var16 = var2.largeAvatarEnabled;
                var2 = 50;
                var8 = var7[var2];
                var12 = var5.bind(var3)(var8);
                var8 = var12.useIsMobileQuestDockVisibleBase;
                var2 = var7[var2];
                var13 = var5.bind(var3)(var2);
                var2 = var13.useMobileQuestDock;
                var2 = var2.bind(var13)();
                var25 = var8.bind(var12)(var2);
                var _closure2_slot0 = var25;
                var2 = 51;
                var2 = var7[var2];
                var5 = var5.bind(var3)(var2);
                var2 = var5.useDrawerWidth;
                var5 = var2.bind(var5)();
                var2 = 52;
                var2 = var7[var2];
                var2 = var4.bind(var3)(var2);
                var2 = var2.bind(var3)();
                var7 = var2.isChatBesideChannelList;
                var2 = _closure1_slot19;
                var2 = var2.bind(var3)();
                var _closure2_slot1 = var2;
                var24 = 2;
                var4 = var24 * var2;
                if (var7) {
                    _fun103514_ip = 213;
                    continue _fun103514
                }
            case 207:
                var22 = var6 - var4;
                _fun103514_ip = 217;
                continue _fun103514;
            case 213:
                var22 = var5 - var4;
            case 217:
                var _closure2_slot2 = var22;
                var4 = _closure1_slot13;
                var7 = var4.bind(var3)();
                var _closure2_slot3 = var7;
                var6 = _closure1_slot5;
                var5 = var6.useMemo;
                var4 = new Array(3);
                var4[0] = var22;
                var4[1] = var7;
                var4[2] = var2;
                var2 = function() { // Environment: var0
                    var0 = {};
                    var2 = _closure2_slot1;
                    var0.marginHorizontal = var2;
                    var3 = _closure1_slot15;
                    var0.height = var3;
                    var3 = _closure2_slot3;
                    var0.marginBottom = var3;
                    var3 = _closure1_slot16;
                    var2 = 1;
                    var2 = var3 - var2;
                    var0.padding = var2;
                    var1 = _closure2_slot2;
                    var0.width = var1;
                    return var0;
                };
                var6 = var5.bind(var6)(var2, var4);
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 53;
                var2 = var5[var2];
                var8 = var4.bind(var3)(var2);
                var7 = var8.useICYMIEnabled;
                var2 = 'TabsNavigator';
                var8 = var7.bind(var8)(var2);
                var1 = var5[var1];
                var1 = var4.bind(var3)(var1);
                var7 = var1.YouBarExperiment;
                var2 = var7.useConfig;
                var1 = {};
                var1.location = var10;
                var1 = var2.bind(var7)(var1);
                var2 = var1.animateBetweenServers;
                var1 = 23;
                var7 = var5[var1];
                var13 = var4.bind(var3)(var7);
                var12 = var13.useStateFromStores;
                var7 = _closure1_slot12;
                var10 = new Array(1);
                var10[0] = var7;
                var7 = function() { // Environment: var0
                    var1 = _closure1_slot12;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var7 = var12.bind(var13)(var10, var7);
                var1 = var5[var1];
                var13 = var4.bind(var3)(var1);
                var12 = var13.useStateFromStores;
                var1 = _closure1_slot10;
                var10 = new Array(1);
                var10[0] = var1;
                var1 = function() { // Environment: var0
                    var1 = _closure1_slot10;
                    var0 = var1.getGuildId;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var10 = var12.bind(var13)(var10, var1);
                var1 = 47;
                var1 = var5[var1];
                var5 = var4.bind(var3)(var1);
                var4 = var5.useNameplate;
                var1 = {};
                var1.user = var7;
                var7 = undefined;
                if (!var2) {
                    _fun103514_ip = 470;
                    continue _fun103514
                }
            case 456:
                var12 = null;
                var12 = var12 != var10;
                var7 = undefined;
                if (!var12) {
                    _fun103514_ip = 470;
                    continue _fun103514
                }
            case 467:
                var7 = var10;
            case 470:
                var1.guildId = var7;
                var21 = var4.bind(var5)(var1);
                var10 = null;
                var12 = var10 != var21;
                var1 = function arg0() {
                    _fun103518: for (var _fun103518_ip = 0;;) switch (_fun103518_ip) {
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
                                _fun103518_ip = 295;
                                continue _fun103518
                            }
                        case 281:
                            var10 = null;
                            var10 = var10 != var9;
                            var8 = undefined;
                            if (!var10) {
                                _fun103518_ip = 295;
                                continue _fun103518
                            }
                        case 292:
                            var8 = var9;
                        case 295:
                            var0.guildId = var8;
                            var0 = var2.bind(var4)(var0);
                            var2 = null;
                            var0 = var2 != var0;
                            if (var0) {
                                _fun103518_ip = 349;
                                continue _fun103518
                            }
                        case 313:
                            if (!(var2 != var1)) {
                                _fun103518_ip = 349;
                                continue _fun103518
                            }
                        case 317:
                            var8 = _closure1_slot17;
                            var4 = var1.id;
                            var4 = var8[var4];
                            if (!(var2 != var4)) {
                                _fun103518_ip = 349;
                                continue _fun103518
                            }
                        case 334:
                            var4 = _closure1_slot17;
                            var1 = var1.id;
                            var1 = var4[var1];
                            _fun103518_ip = 452;
                            continue _fun103518;
                        case 349:
                            var1 = var3;
                            if (var0) {
                                _fun103518_ip = 452;
                                continue _fun103518
                            }
                        case 355:
                            var0 = var2 != var12;
                            var1 = undefined;
                            if (!var0) {
                                _fun103518_ip = 452;
                                continue _fun103518
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
                                _fun103518_ip = 514;
                                continue _fun103518
                            }
                        case 511:
                            var0 = var1;
                        case 514:
                            return var0;
                    }
                };
                var31 = var1.bind(var3)(var2);
                var4 = _closure1_slot5;
                var2 = var4.useState;
                var1 = false;
                var2 = var2.bind(var4)(var1);
                var1 = _closure1_slot4;
                var1 = var1.bind(var3)(var2, var24);
                var23 = 0;
                var7 = var1[var23];
                var _closure2_slot4 = var7;
                var40 = 1;
                var1 = var1[var40];
                var _closure2_slot5 = var1;
                var14 = _closure1_slot0;
                var13 = _closure1_slot2;
                var20 = 14;
                var1 = var13[var20];
                var4 = var14.bind(var3)(var1);
                var2 = var4.useAnimatedStyle;
                var1 = function() {
                    _fun103522: for (var _fun103522_ip = 0;;) switch (_fun103522_ip) {
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
                            var8 = _closure2_slot4;
                            var7 = 1;
                            var3 = var7;
                            if (!var8) {
                                _fun103522_ip = 70;
                                continue _fun103522
                            }
                        case 50:
                            var6 = _closure2_slot0;
                            var3 = var7;
                            if (var6) {
                                _fun103522_ip = 70;
                                continue _fun103522
                            }
                        case 60:
                            var3 = 0.98;
                        case 70:
                            var1 = _closure1_slot28;
                            var1 = var4.bind(var5)(var3, var1);
                            var2.scale = var1;
                            var1 = new Array(1);
                            var1[0] = var2;
                            var0.transform = var1;
                            return var0;
                    }
                };
                var5 = {};
                var17 = 19;
                var15 = var13[var17];
                var15 = var14.bind(var3)(var15);
                var15 = var15.withSpring;
                var5.withSpring = var15;
                var5.isPressed = var7;
                var5.isQuestVisible = var25;
                var7 = _closure1_slot28;
                var5.SPRING_CONFIG = var7;
                var1.__closure = var5;
                var5 = 3244852547054.0;
                var1.__workletHash = var5;
                var5 = _closure1_slot38;
                var1.__initData = var5;
                var5 = var2.bind(var4)(var1);
                var4 = _closure1_slot5;
                var2 = var4.useContext;
                var1 = 54;
                var1 = var13[var1];
                var1 = var14.bind(var3)(var1);
                var1 = var1.QuestDockExternalCoordinationContext;
                var1 = var2.bind(var4)(var1);
                var15 = var1.questDockOffset;
                var _closure2_slot6 = var15;
                var1 = var13[var20];
                var4 = var14.bind(var3)(var1);
                var2 = var4.useAnimatedStyle;
                var1 = function() {
                    _fun103523: for (var _fun103523_ip = 0;;) switch (_fun103523_ip) {
                        case 0:
                            var0 = {};
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var3 = 19;
                            var5 = var2[var3];
                            var10 = undefined;
                            var13 = var4.bind(var10)(var5);
                            var12 = var13.withSpring;
                            var11 = 14;
                            var2 = var2[var11];
                            var17 = var4.bind(var10)(var2);
                            var16 = var17.interpolate;
                            var4 = _closure2_slot0;
                            var9 = 50;
                            var15 = var9;
                            if (!var4) {
                                _fun103523_ip = 79;
                                continue _fun103523
                            }
                        case 66:
                            var5 = _closure2_slot6;
                            var4 = var5.get;
                            var15 = var4.bind(var5)();
                        case 79:
                            var4 = _closure1_slot15;
                            var5 = 2;
                            var4 = var4 / var5;
                            var14 = [0];
                            var14[1] = var4;
                            var7 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var4 = var6[var11];
                            var4 = var7.bind(var10)(var4);
                            var4 = var4.Extrapolation;
                            var18 = var4.CLAMP;
                            var20 = [0, 50];
                            var22 = var17;
                            var21 = var15;
                            var19 = var14;
                            var8 = var22[var16](var21, var20, var19, var18, var17);
                            var4 = _closure1_slot28;
                            var4 = var12.bind(var13)(var8, var4);
                            var0.borderTopRightRadius = var4;
                            var3 = var6[var3];
                            var4 = var7.bind(var10)(var3);
                            var3 = var4.withSpring;
                            var6 = var6[var11];
                            var8 = var7.bind(var10)(var6);
                            var7 = var8.interpolate;
                            var6 = _closure2_slot0;
                            if (!var6) {
                                _fun103523_ip = 220;
                                continue _fun103523
                            }
                        case 207:
                            var6 = _closure2_slot6;
                            var2 = var6.get;
                            var9 = var2.bind(var6)();
                        case 220:
                            var2 = _closure1_slot15;
                            var2 = var2 / var5;
                            var6 = [0];
                            var6[1] = var2;
                            var5 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var2 = var2[var11];
                            var2 = var5.bind(var10)(var2);
                            var2 = var2.Extrapolation;
                            var18 = var2.CLAMP;
                            var20 = [0, 50];
                            var22 = var8;
                            var21 = var9;
                            var19 = var6;
                            var2 = var22[var7](var21, var20, var19, var18, var17);
                            var1 = _closure1_slot28;
                            var1 = var3.bind(var4)(var2, var1);
                            var0.borderTopLeftRadius = var1;
                            return var0;
                    }
                };
                var7 = {};
                var17 = var13[var17];
                var17 = var14.bind(var3)(var17);
                var17 = var17.withSpring;
                var7.withSpring = var17;
                var17 = var13[var20];
                var17 = var14.bind(var3)(var17);
                var17 = var17.interpolate;
                var7.interpolate = var17;
                var7.isQuestVisible = var25;
                var7.questDockOffset = var15;
                var15 = _closure1_slot15;
                var7.YOU_BAR_HEIGHT = var15;
                var13 = var13[var20];
                var13 = var14.bind(var3)(var13);
                var13 = var13.Extrapolation;
                var7.Extrapolation = var13;
                var13 = _closure1_slot28;
                var7.SPRING_CONFIG = var13;
                var1.__closure = var7;
                var7 = 249142698902.0;
                var1.__workletHash = var7;
                var7 = _closure1_slot39;
                var1.__initData = var7;
                var19 = var2.bind(var4)(var1);
                var7 = _closure1_slot5;
                var4 = var7.useCallback;
                var2 = function() { // Environment: var0
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
                    var2 = 55;
                    var2 = var1[var2];
                    var5 = var4.bind(var0)(var2);
                    var4 = var5.openLazy;
                    var2 = 57;
                    var2 = var1[var2];
                    var3 = var3.bind(var0)(var2);
                    var2 = 56;
                    var2 = var1[var2];
                    var1 = var1.paths;
                    var3 = var3.bind(var0)(var2, var1);
                    var2 = {};
                    var1 = true;
                    var2.disableHapticOnOpen = var1;
                    var1 = 'YouBottomSheet';
                    var1 = var4.bind(var5)(var3, var1, var2);
                    var2 = _closure2_slot5;
                    var1 = false;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var1 = new Array(0);
                var14 = var4.bind(var7)(var2, var1);
                var7 = _closure1_slot5;
                var4 = var7.useCallback;
                var2 = _closure1_slot3;
                var1 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun103526: for (var _fun103526_ip = 0;;) switch (_fun103526_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun103526_ip = 90;
                                    continue _fun103526
                                }
                            case 7:
                                var4 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var2 = 57;
                                var3 = var1[var2];
                                var2 = undefined;
                                var4 = var4.bind(var2)(var3);
                                var3 = 58;
                                var3 = var1[var3];
                                var1 = var1.paths;
                                var1 = var4.bind(var2)(var3, var1);
                                SaveGenerator(address = 54);
                            case 52:
                                return var1;
                            case 54:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                if (var3) {
                                    _fun103526_ip = 87;
                                    continue _fun103526
                                }
                            case 60:
                                var3 = var1.showYouAccountActionSheet;
                                var3 = var3.bind(var1)();
                                var4 = _closure2_slot5;
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
                var2 = var2.bind(var3)(var1);
                var1 = new Array(0);
                var13 = var4.bind(var7)(var2, var1);
                var7 = _closure1_slot5;
                var4 = var7.useCallback;
                var2 = function() { // Environment: var0
                    var2 = _closure2_slot5;
                    var0 = undefined;
                    var1 = true;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var1 = new Array(0);
                var17 = var4.bind(var7)(var2, var1);
                var4 = _closure1_slot5;
                var2 = var4.useCallback;
                var1 = function() { // Environment: var0
                    var2 = _closure2_slot5;
                    var0 = undefined;
                    var1 = false;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var0 = new Array(0);
                var15 = var2.bind(var4)(var1, var0);
                if (!var16) {
                    _fun103514_ip = 965;
                    continue _fun103514
                }
            case 962:
                var16 = !var25;
            case 965:
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 26;
                var0 = var4[var0];
                var0 = var2.bind(var3)(var0);
                var1 = var0.AVATAR_SIZE_MAP;
                var0 = 25;
                var0 = var4[var0];
                var0 = var2.bind(var3)(var0);
                var0 = var0.AvatarSizes;
                if (var16) {
                    _fun103514_ip = 1024;
                    continue _fun103514
                }
            case 1012:
                var2 = var0.NORMAL;
                var18 = var1[var2];
                _fun103514_ip = 1034;
                continue _fun103514;
            case 1024:
                var0 = var0.XLARGE_72;
                var18 = var1[var0];
            case 1034:
                var2 = _closure1_slot23;
                var1 = _closure1_slot1;
                var0 = _closure1_slot2;
                var0 = var0[var20];
                var0 = var1.bind(var3)(var0);
                var1 = var0.View;
                var0 = {};
                var7 = var11.youRow;
                var4 = new Array(3);
                var4[0] = var7;
                var4[1] = var6;
                var4[2] = var5;
                var0.style = var4;
                var7 = _closure1_slot22;
                var35 = _closure1_slot1;
                var36 = _closure1_slot2;
                if (var16) {
                    _fun103514_ip = 1207;
                    continue _fun103514
                }
            case 1103:
                var4 = var36[var20];
                var4 = var35.bind(var3)(var4);
                var5 = var4.View;
                var4 = {};
                var26 = {};
                var6 = 'absolute';
                var26.position = var6;
                var6 = new Array(5);
                var6[0] = var26;
                var26 = var11.youRowFloating;
                var6[1] = var26;
                var26 = {};
                var26.width = var22;
                var27 = _closure1_slot15;
                var26.height = var27;
                var26.backgroundColor = var31;
                var6[2] = var26;
                var26 = undefined;
                if (!var25) {
                    _fun103514_ip = 1184;
                    continue _fun103514
                }
            case 1174:
                var26 = {
                    'borderTopRightRadius': 0,
                    'borderTopLeftRadius': 0
                };
            case 1184:
                var6[3] = var26;
                var6[4] = var19;
                var4.style = var6;
                var5 = var7.bind(var3)(var5, var4);
                _fun103514_ip = 1653;
                continue _fun103514;
            case 1207:
                var4 = 59;
                var4 = var36[var4];
                var6 = var35.bind(var3)(var4);
                var4 = {};
                var26 = {};
                var38 = 'absolute';
                var26.position = var38;
                var4.style = var26;
                var28 = _closure1_slot23;
                var27 = _closure1_slot6;
                var26 = {};
                var29 = {};
                var29.width = var22;
                var30 = _closure1_slot15;
                var29.height = var30;
                var30 = 'transparent';
                var29.backgroundColor = var30;
                var26.style = var29;
                var32 = _closure1_slot22;
                var30 = _closure1_slot6;
                var29 = {};
                var33 = {
                    'position': 'absolute',
                    'top': 0,
                    'left': 0,
                    'right': 0,
                    'bottom': null,
                    'backgroundColor': 'black'
                };
                var34 = _closure1_slot15;
                var34 = var34 / var24;
                var33.bottom = var34;
                var29.style = var33;
                var30 = var32.bind(var3)(var30, var29);
                var29 = new Array(3);
                var29[0] = var30;
                var33 = _closure1_slot22;
                var32 = _closure1_slot6;
                var30 = {};
                var34 = {
                    'position': 'absolute',
                    'top': null,
                    'left': null,
                    'right': 0,
                    'bottom': 0,
                    'backgroundColor': 'black'
                };
                var37 = _closure1_slot15;
                var37 = var37 / var24;
                var34.top = var37;
                var37 = 8;
                var39 = var18 + var37;
                var39 = var39 - var40;
                var34.left = var39;
                var30.style = var34;
                var30 = var33.bind(var3)(var32, var30);
                var29[1] = var30;
                var33 = _closure1_slot22;
                var32 = _closure1_slot26;
                var30 = {};
                var34 = {};
                var34.position = var38;
                var38 = _closure1_slot15;
                var38 = var38 / var24;
                var34.top = var38;
                var37 = var18 + var37;
                var34.width = var37;
                var34.left = var23;
                var37 = _closure1_slot15;
                var37 = var37 / var24;
                var34.height = var37;
                var30.style = var34;
                var34 = 48;
                var34 = var36[var34];
                var34 = var35.bind(var3)(var34);
                var35 = '#000000';
                var36 = var34.bind(var3)(var35);
                var34 = var36.alpha;
                var36 = var34.bind(var36)(var23);
                var34 = var36.hex;
                var36 = var34.bind(var36)();
                var34 = new Array(2);
                var34[0] = var36;
                var34[1] = var35;
                var30.colors = var34;
                var34 = {
                    'x': 0,
                    'y': 0
                };
                var30.start = var34;
                var34 = {
                    'x': 1,
                    'y': 0
                };
                var30.end = var34;
                var34 = [0.73, 0.88];
                var30.locations = var34;
                var34 = 'none';
                var30.pointerEvents = var34;
                var30 = var33.bind(var3)(var32, var30);
                var29[2] = var30;
                var26.children = var29;
                var26 = var28.bind(var3)(var27, var26);
                var4.maskElement = var26;
                var28 = _closure1_slot22;
                var27 = _closure1_slot6;
                var26 = {};
                var30 = var11.youRowFloating;
                var29 = new Array(2);
                var29[0] = var30;
                var30 = {};
                var30.width = var22;
                var32 = _closure1_slot15;
                var30.height = var32;
                var30.backgroundColor = var31;
                var29[1] = var30;
                var26.style = var29;
                var26 = var28.bind(var3)(var27, var26);
                var4.children = var26;
                var5 = var7.bind(var3)(var6, var4);
            case 1653:
                var4 = new Array(4);
                var4[0] = var5;
                var7 = _closure1_slot22;
                var6 = _closure1_slot1;
                var5 = _closure1_slot2;
                var5 = var5[var20];
                var5 = var6.bind(var3)(var5);
                var6 = var5.View;
                var5 = {};
                var20 = {
                    'position': 'absolute',
                    'top': 0,
                    'left': null,
                    'right': 4294967295,
                    'bottom': 0
                };
                var20.left = var18;
                var26 = 0;
                if (var25) {
                    _fun103514_ip = 1722;
                    continue _fun103514
                }
            case 1714:
                var27 = _closure1_slot15;
                var26 = var27 / var24;
            case 1722:
                var20.borderTopRightRadius = var26;
                var23 = 0;
                if (var25) {
                    _fun103514_ip = 1740;
                    continue _fun103514
                }
            case 1732:
                var25 = _closure1_slot15;
                var23 = var25 / var24;
            case 1740:
                var20.borderTopLeftRadius = var23;
                var23 = _closure1_slot15;
                var23 = var23 / var24;
                var20.borderBottomRightRadius = var23;
                var23 = _closure1_slot15;
                var23 = var23 / var24;
                var20.borderBottomLeftRadius = var23;
                var23 = 'hidden';
                var20.overflow = var23;
                var18 = var22 - var18;
                var20.width = var18;
                var18 = new Array(2);
                var18[0] = var20;
                var18[1] = var19;
                var5.style = var18;
                var18 = 'none';
                var5.pointerEvents = var18;
                var20 = _closure1_slot22;
                var19 = _closure1_slot1;
                var22 = _closure1_slot2;
                var18 = 60;
                var18 = var22[var18];
                var19 = var19.bind(var3)(var18);
                var18 = {
                    'nameplate': null,
                    'isFocused': true,
                    'animate': false
                };
                var18.nameplate = var21;
                var18 = var20.bind(var3)(var19, var18);
                var5.children = var18;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var7 = _closure1_slot22;
                var6 = _closure1_slot7;
                var5 = {};
                var18 = var11.youPressable;
                var5.style = var18;
                var18 = {};
                var19 = 'transparent';
                var18.color = var19;
                var5.android_ripple = var18;
                var5.onPressIn = var17;
                var5.onPressOut = var15;
                var5.onPress = var14;
                var5.onLongPress = var13;
                var13 = _closure1_slot25;
                var5.hitSlop = var13;
                var15 = _closure1_slot22;
                var14 = _closure1_slot33;
                var13 = {};
                var13.isLargeAvatar = var16;
                var13 = var15.bind(var3)(var14, var13);
                var5.children = var13;
                var5 = var7.bind(var3)(var6, var5);
                var4[2] = var5;
                var7 = _closure1_slot23;
                var6 = _closure1_slot6;
                var5 = {};
                var11 = var11.youRowRight;
                var5.style = var11;
                var10 = null;
                if (!var8) {
                    _fun103514_ip = 2021;
                    continue _fun103514
                }
            case 2000:
                var13 = _closure1_slot22;
                var11 = _closure1_slot35;
                var8 = {};
                var8.hasNameplate = var12;
                var10 = var13.bind(var3)(var11, var8);
            case 2021:
                var8 = new Array(2);
                var8[0] = var10;
                var11 = _closure1_slot22;
                var10 = _closure1_slot37;
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
    var _closure1_slot40 = var3;
    var3 = {};
    var7 = 'function YouBarTsx7(){const{gradientHeight,drawerWidth}=this.__closure;return{height:gradientHeight,opacity:1,width:drawerWidth};}';
    var3.code = var7;
    var _closure1_slot41 = var3;
    var7 = var6.memo;
    var3 = function() { // Environment: var1
        _fun103529: for (var _fun103529_ip = 0;;) switch (_fun103529_ip) {
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
                var10 = 7908678205844.0;
                var1.__workletHash = var10;
                var10 = _closure1_slot41;
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
                    _fun103529_ip = 311;
                    continue _fun103529
                }
            case 294:
                var7 = _closure1_slot18;
                var6 = var0.id;
                var6 = var7[var6];
                if (!(var1 == var6)) {
                    _fun103529_ip = 323;
                    continue _fun103529
                }
            case 311:
                var7 = var4;
                if (!(var1 != var2)) {
                    _fun103529_ip = 336;
                    continue _fun103529
                }
            case 318:
                var7 = var2;
                _fun103529_ip = 336;
                continue _fun103529;
            case 323:
                var2 = _closure1_slot18;
                var0 = var0.id;
                var7 = var2[var0];
            case 336:
                var2 = _closure1_slot0;
                var0 = _closure1_slot2;
                var6 = 61;
                var0 = var0[var6];
                var4 = var2.bind(var3)(var0);
                var2 = var4.hex2rgb;
                var0 = 0.97;
                var0 = var2.bind(var4)(var7, var0);
                var4 = var1 != var0;
                var10 = 'transparent';
                var2 = var10;
                if (!var4) {
                    _fun103529_ip = 395;
                    continue _fun103529
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
                    _fun103529_ip = 439;
                    continue _fun103529
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
    var _closure1_slot42 = var3;
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
        var0 = 62;
        var0 = var6[var0];
        var0 = var1.bind(var3)(var0);
        var1 = var0.ThemeContextProvider;
        var0 = {};
        var0.gradient = var4;
        var7 = _closure1_slot22;
        var6 = _closure1_slot42;
        var4 = {};
        var6 = var7.bind(var3)(var6, var4);
        var4 = new Array(2);
        var4[0] = var6;
        var7 = _closure1_slot22;
        var6 = _closure1_slot40;
        var5 = {};
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var1 = var3.bind(var6)(var1);
    var3 = 63;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/YouBar.tsx';
    var3 = var4.bind(var5)(var3);
    var2.ThemedYouBar = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 27, 3215, 1686, 3219, 5718, 1621, 5282, 660, 5515, 33, 671, 3719, 4106, 1297, 5519, 4025, 4089, 7009, 478, 7769, 566, 3959, 5514, 5516, 5283, 3242, 5728, 3940, 7823, 3158, 7704, 5816, 8941, 8199, 13501, 7885, 3285, 3919, 1235, 13502, 8202, 8675, 3252, 3202, 9138, 669, 1464, 5285, 9873, 3921, 8913, 5318, 3284, 13503, 1307, 13521, 4731, 7000, 668, 3166, 2]);