// modules/app_launcher/native/onboarding/AppLauncherOnboardingChatInputButtonAnimation.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var7 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.View;
    var _closure1_slot3 = var7;
    var3 = var3.StyleSheet;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot6 = var6;
    var6 = var3.jsxs;
    var _closure1_slot7 = var6;
    var3 = var3.Fragment;
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = function() { // Environment: var1
        var3 = _closure1_slot0;
        var6 = _closure1_slot2;
        var0 = 5;
        var1 = var6[var0];
        var5 = undefined;
        var1 = var3.bind(var5)(var1);
        var1 = var1.SMALL_BUTTON_HEIGHT;
        var0 = var6[var0];
        var0 = var3.bind(var5)(var0);
        var0 = var0.SMALL_BUTTON_PADDING;
        var1 = var1 + var0;
        var0 = 2;
        var7 = var1 + var0;
        var0 = {};
        var1 = {
            'zIndex': 3,
            'borderWidth': 1.5,
            'borderColor': null,
            'borderRadius': null,
            'alignItems': 'center',
            'justifyContent': 'center'
        };
        var4 = _closure1_slot1;
        var3 = 6;
        var2 = var6[var3];
        var2 = var4.bind(var5)(var2);
        var2 = var2.colors;
        var2 = var2.BACKGROUND_BRAND;
        var1.borderColor = var2;
        var2 = var6[var3];
        var2 = var4.bind(var5)(var2);
        var2 = var2.radii;
        var2 = var2.round;
        var1.borderRadius = var2;
        var1.width = var7;
        var1.height = var7;
        var2 = 4;
        var1.marginLeft = var2;
        var0.fakeButton = var1;
        var1 = {
            'zIndex': 1,
            'position': 'absolute',
            'borderRadius': null,
            'top': 0,
            'left': 0
        };
        var8 = var6[var3];
        var8 = var4.bind(var5)(var8);
        var8 = var8.radii;
        var8 = var8.round;
        var1.borderRadius = var8;
        var1.width = var7;
        var1.height = var7;
        var3 = var6[var3];
        var3 = var4.bind(var5)(var3);
        var3 = var3.colors;
        var3 = var3.BACKGROUND_BASE_LOW;
        var1.backgroundColor = var3;
        var1.marginLeft = var2;
        var0.glowMask = var1;
        var1 = {
            'width': '150%',
            'height': '150%',
            'position': 'absolute',
            'top': '-25%',
            'left': '-25%',
            'zIndex': 0,
            'opacity': 0.8
        };
        var0.glowLottie = var1;
        var2 = 'none';
        var1 = {
            'zIndex': 4,
            'position': 'absolute',
            'pointerEvents': 'none',
            'width': '175%',
            'height': '175%',
            'top': '-43%',
            'left': '-38%'
        };
        var0.trinketsLottie = var1;
        var1 = {};
        var1.pointerEvents = var2;
        var0.glowAnimation = var1;
        return var0;
    };
    var3 = var6.bind(var7)(var3);
    var _closure1_slot9 = var3;
    var3 = {};
    var6 = 'function EnteringAnimation_AppLauncherOnboardingChatInputButtonAnimationTsx1(){const{withTiming,timingStandard}=this.__closure;const initialValues={opacity:0};const animations={opacity:withTiming(1,timingStandard)};return{initialValues:initialValues,animations:animations};}';
    var3.code = var6;
    var _closure1_slot10 = var3;
    var3 = function() { // Environment: var1
        var0 = function() {
            var0 = {};
            var1 = {};
            var2 = 0;
            var1.opacity = var2;
            var0.initialValues = var1;
            var1 = {};
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 7;
            var2 = var7[var2];
            var3 = undefined;
            var5 = var6.bind(var3)(var2);
            var4 = var5.withTiming;
            var2 = 8;
            var2 = var7[var2];
            var2 = var6.bind(var3)(var2);
            var3 = var2.timingStandard;
            var2 = 1;
            var2 = var4.bind(var5)(var2, var3);
            var1.opacity = var2;
            var0.animations = var1;
            return var0;
        };
        var2 = {};
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var3 = 7;
        var3 = var6[var3];
        var4 = undefined;
        var3 = var5.bind(var4)(var3);
        var3 = var3.withTiming;
        var2.withTiming = var3;
        var3 = 8;
        var3 = var6[var3];
        var3 = var5.bind(var4)(var3);
        var3 = var3.timingStandard;
        var2.timingStandard = var3;
        var0.__closure = var2;
        var2 = 2327377243473.0;
        var0.__workletHash = var2;
        var1 = _closure1_slot10;
        var0.__initData = var1;
        return var0;
    };
    var3 = var3.bind(var0)();
    var _closure1_slot11 = var3;
    var3 = {};
    var6 = 'function ExitingAnimation_AppLauncherOnboardingChatInputButtonAnimationTsx2(){const{withTiming,timingStandard}=this.__closure;const initialValues={opacity:1};const animations={opacity:withTiming(0,timingStandard)};return{initialValues:initialValues,animations:animations};}';
    var3.code = var6;
    var _closure1_slot12 = var3;
    var3 = function() { // Environment: var1
        var0 = function() {
            var0 = {};
            var1 = {};
            var2 = 1;
            var1.opacity = var2;
            var0.initialValues = var1;
            var1 = {};
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 7;
            var2 = var7[var2];
            var3 = undefined;
            var5 = var6.bind(var3)(var2);
            var4 = var5.withTiming;
            var2 = 8;
            var2 = var7[var2];
            var2 = var6.bind(var3)(var2);
            var3 = var2.timingStandard;
            var2 = 0;
            var2 = var4.bind(var5)(var2, var3);
            var1.opacity = var2;
            var0.animations = var1;
            return var0;
        };
        var2 = {};
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var3 = 7;
        var3 = var6[var3];
        var4 = undefined;
        var3 = var5.bind(var4)(var3);
        var3 = var3.withTiming;
        var2.withTiming = var3;
        var3 = 8;
        var3 = var6[var3];
        var3 = var5.bind(var4)(var3);
        var3 = var3.timingStandard;
        var2.timingStandard = var3;
        var0.__closure = var2;
        var2 = 1065249287738.0;
        var0.__workletHash = var2;
        var1 = _closure1_slot12;
        var0.__initData = var1;
        return var0;
    };
    var3 = var3.bind(var0)();
    var _closure1_slot13 = var3;
    var3 = 16;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_launcher/native/onboarding/AppLauncherOnboardingChatInputButtonAnimation.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = 7000;
    var2.APP_LAUNCHER_ONBOARDING_CHAT_INPUT_BUTTON_ANIMATION_DURATION_MS = var3;
    var1 = function arg0() {
        var0 = arg0;
        var2 = var0.channelId;
        var0 = _closure1_slot9;
        var3 = undefined;
        var9 = var0.bind(var3)();
        var10 = _closure1_slot0;
        var11 = _closure1_slot2;
        var0 = 9;
        var0 = var11[var0];
        var5 = var10.bind(var3)(var0);
        var4 = var5.useStateFromStores;
        var0 = _closure1_slot5;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = function() { // Environment: var0
            var0 = _closure1_slot5;
            var0 = var0.useReducedMotion;
            return var0;
        };
        var8 = var4.bind(var5)(var1, var0);
        var0 = 10;
        var0 = var11[var0];
        var1 = var10.bind(var3)(var0);
        var0 = var1.useGradientBottom;
        var18 = var0.bind(var1)();
        var6 = _closure1_slot1;
        var0 = 11;
        var0 = var11[var0];
        var1 = var6.bind(var3)(var0);
        var0 = {};
        var0.channelId = var2;
        var0 = var1.bind(var3)(var0);
        var2 = _closure1_slot7;
        var1 = _closure1_slot8;
        var0 = {};
        var4 = 12;
        var4 = var11[var4];
        var4 = var6.bind(var3)(var4);
        var13 = var4.View;
        var4 = {};
        var5 = _closure1_slot11;
        var4.entering = var5;
        var5 = _closure1_slot13;
        var4.exiting = var5;
        var5 = _closure1_slot4;
        var7 = var5.absoluteFill;
        var5 = new Array(2);
        var5[0] = var7;
        var7 = var9.glowAnimation;
        var5[1] = var7;
        var4.style = var5;
        var12 = false;
        var4.collapsable = var12;
        var7 = _closure1_slot6;
        var5 = 13;
        var14 = var11[var5];
        var16 = var6.bind(var3)(var14);
        var14 = {};
        var14.collapsable = var12;
        var17 = var9.glowLottie;
        var14.style = var17;
        var17 = 14;
        var17 = var11[var17];
        var17 = var10.bind(var3)(var17);
        var14.source = var17;
        var17 = !var8;
        var14.autoPlay = var17;
        var16 = var7.bind(var3)(var16, var14);
        var14 = new Array(3);
        var14[0] = var16;
        var16 = _closure1_slot3;
        var15 = {};
        var15.collapsable = var12;
        var19 = var9.glowMask;
        var17 = new Array(2);
        var17[0] = var19;
        var17[1] = var18;
        var15.style = var17;
        var15 = var7.bind(var3)(var16, var15);
        var14[1] = var15;
        var15 = {};
        var15.collapsable = var12;
        var17 = var9.fakeButton;
        var15.style = var17;
        var15 = var7.bind(var3)(var16, var15);
        var14[2] = var15;
        var4.children = var14;
        var13 = var2.bind(var3)(var13, var4);
        var4 = new Array(2);
        var4[0] = var13;
        var5 = var11[var5];
        var6 = var6.bind(var3)(var5);
        var5 = {};
        var5.collapsable = var12;
        var9 = var9.trinketsLottie;
        var5.style = var9;
        var9 = 15;
        var9 = var11[var9];
        var9 = var10.bind(var3)(var9);
        var5.source = var9;
        var8 = !var8;
        var5.autoPlay = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.AppLauncherOnboardingChatInputButtonAnimation = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1298, 33, 1297, 4088, 671, 4097, 4881, 566, 8910, 11732, 3720, 6599, 11738, 11739, 2]);