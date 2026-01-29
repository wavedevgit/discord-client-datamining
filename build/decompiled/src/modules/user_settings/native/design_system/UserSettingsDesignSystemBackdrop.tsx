// modules/user_settings/native/design_system/UserSettingsDesignSystemBackdrop.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function(arg0) { // Original name: BackdropCard, environment: var1
        var0 = arg0;
        var12 = var0.buttonLabel;
        var17 = var0.title;
        var16 = var0.description;
        var1 = var0.blur;
        var _closure2_slot0 = var1;
        var1 = var0.setShowBackdrop;
        var _closure2_slot1 = var1;
        var0 = var0.setBlurAmount;
        var _closure2_slot2 = var0;
        var3 = _closure1_slot5;
        var9 = _closure1_slot0;
        var13 = _closure1_slot1;
        var0 = 5;
        var0 = var13[var0];
        var2 = undefined;
        var0 = var9.bind(var2)(var0);
        var1 = var0.Card;
        var0 = {};
        var6 = _closure1_slot6;
        var4 = 6;
        var4 = var13[var4];
        var4 = var9.bind(var2)(var4);
        var5 = var4.Stack;
        var4 = {};
        var7 = 12;
        var4.spacing = var7;
        var15 = _closure1_slot5;
        var10 = 7;
        var7 = var13[var10];
        var7 = var9.bind(var2)(var7);
        var14 = var7.Text;
        var7 = {};
        var18 = 'heading-lg/bold';
        var7.variant = var18;
        var7.children = var17;
        var14 = var15.bind(var2)(var14, var7);
        var7 = new Array(3);
        var7[0] = var14;
        var15 = _closure1_slot5;
        var10 = var13[var10];
        var10 = var9.bind(var2)(var10);
        var14 = var10.Text;
        var10 = {
            'variant': 'text-md/normal',
            'color': 'text-subtle'
        };
        var10.children = var16;
        var10 = var15.bind(var2)(var14, var10);
        var7[1] = var10;
        var10 = _closure1_slot5;
        var8 = 8;
        var8 = var13[var8];
        var8 = var9.bind(var2)(var8);
        var9 = var8.Button;
        var8 = {};
        var8.text = var12;
        var11 = function() { // Original name: onPress, environment: var11
            var3 = _closure2_slot2;
            var2 = _closure2_slot0;
            var0 = undefined;
            var2 = var3.bind(var0)(var2);
            var2 = _closure2_slot1;
            var1 = true;
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var8.onPress = var11;
        var8 = var10.bind(var2)(var9, var8);
        var7[2] = var8;
        var4.children = var7;
        var4 = var6.bind(var2)(var5, var4);
        var0.children = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var _closure1_slot9 = var0;
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
    var3 = arg2;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var9 = var3.StyleSheet;
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot5 = var6;
    var3 = var3.jsxs;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var10 = 16;
    var8.padding = var10;
    var3.container = var8;
    var8 = {};
    var13 = var9.absoluteFillObject;
    var14 = var8;
    var9 = copyDataProperties(var14, var13);
    var11 = 'stretch';
    var9 = 'alignItems';
    var8[var9] = var11;
    var11 = 'center';
    var9 = 'justifyContent';
    var8[var9] = var11;
    var9 = 'padding';
    var8[var9] = var10;
    var3.backdropContent = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = {};
    var6 = "function UserSettingsDesignSystemBackdropTsx1(){const{withSpring,showBackdrop,SUBTLE_SPRING}=this.__closure;return{opacity:withSpring(showBackdrop?1:0,SUBTLE_SPRING,'animate-always')};}";
    var3.code = var6;
    var _closure1_slot8 = var3;
    var3 = 14;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/design_system/UserSettingsDesignSystemBackdrop.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Original name: UserSettingsDesignSystemBackdrop, environment: var1
        _fun88273: for (var _fun88273_ip = 0;;) switch (_fun88273_ip) {
            case 0:
                var12 = function() { // Original name: handleClose, environment: var0
                    var2 = _closure2_slot1;
                    var0 = undefined;
                    var1 = false;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var1 = _closure1_slot7;
                var3 = undefined;
                var13 = var1.bind(var3)();
                var9 = _closure1_slot3;
                var2 = var9.useState;
                var1 = false;
                var1 = var2.bind(var9)(var1);
                var7 = _closure1_slot2;
                var6 = 2;
                var1 = var7.bind(var3)(var1, var6);
                var4 = 0;
                var5 = var1[var4];
                var _closure2_slot0 = var5;
                var2 = 1;
                var17 = var1[var2];
                var _closure2_slot1 = var17;
                var8 = var9.useState;
                var1 = 'none';
                var1 = var8.bind(var9)(var1);
                var1 = var7.bind(var3)(var1, var6);
                var20 = var1[var4];
                var15 = var1[var2];
                var6 = _closure1_slot0;
                var8 = _closure1_slot1;
                var1 = 9;
                var1 = var8[var1];
                var2 = var6.bind(var3)(var1);
                var1 = var2.useAnimatedStyle;
                var0 = function() { // Original name: n, environment: var0
                    _fun88275: for (var _fun88275_ip = 0;;) switch (_fun88275_ip) {
                        case 0:
                            var0 = {};
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot1;
                            var2 = 10;
                            var2 = var4[var2];
                            var6 = undefined;
                            var5 = var3.bind(var6)(var2);
                            var4 = var5.withSpring;
                            var2 = _closure2_slot0;
                            var3 = 0;
                            if (!var2) {
                                _fun88275_ip = 47;
                                continue _fun88275
                            }
                        case 44:
                            var3 = 1;
                        case 47:
                            var2 = _closure1_slot0;
                            var7 = _closure1_slot1;
                            var1 = 11;
                            var1 = var7[var1];
                            var1 = var2.bind(var6)(var1);
                            var2 = var1.SUBTLE_SPRING;
                            var1 = 'animate-always';
                            var1 = var4.bind(var5)(var3, var2, var1);
                            var0.opacity = var1;
                            return var0;
                    }
                };
                var4 = {};
                var7 = 10;
                var7 = var8[var7];
                var7 = var6.bind(var3)(var7);
                var7 = var7.withSpring;
                var4.withSpring = var7;
                var4.showBackdrop = var5;
                var7 = 11;
                var7 = var8[var7];
                var7 = var6.bind(var3)(var7);
                var7 = var7.SUBTLE_SPRING;
                var4.SUBTLE_SPRING = var7;
                var0.__closure = var4;
                var4 = 1929832617927.0;
                var0.__workletHash = var4;
                var4 = _closure1_slot8;
                var0.__initData = var4;
                var14 = var1.bind(var2)(var0);
                var2 = _closure1_slot6;
                var1 = _closure1_slot4;
                var0 = {};
                var4 = var13.container;
                var0.style = var4;
                var7 = _closure1_slot6;
                var4 = 6;
                var4 = var8[var4];
                var4 = var6.bind(var3)(var4);
                var6 = var4.Stack;
                var4 = {};
                var8 = 24;
                var4.spacing = var8;
                var9 = _closure1_slot5;
                var11 = _closure1_slot9;
                var8 = {
                    'title': 'Backdrop',
                    'description': 'A backdrop is an overlay that appears behind a component to provide separation between the component and the rest of the interface. By default it is a semi-transparent overlay.',
                    'buttonLabel': 'Show Backdrop',
                    'blur': 'none'
                };
                var8.setShowBackdrop = var17;
                var8.setBlurAmount = var15;
                var9 = var9.bind(var3)(var11, var8);
                var8 = new Array(3);
                var8[0] = var9;
                var10 = _closure1_slot5;
                var9 = {
                    'title': 'Subtle Blur',
                    'description': "Backdrop also supports blur. You can use a subtle blur for a lite-touch obfuscation, like for Context Menus that help create seperation but don't completly lift you out of the context",
                    'buttonLabel': 'Show Subtle Blur Backdrop',
                    'blur': 'subtle'
                };
                var9.setShowBackdrop = var17;
                var9.setBlurAmount = var15;
                var9 = var10.bind(var3)(var11, var9);
                var8[1] = var9;
                var10 = _closure1_slot5;
                var9 = {
                    'title': 'Strong Blur',
                    'description': 'You can use a strong blur for places where you want to completly lift the user out of the context, like for modals',
                    'buttonLabel': 'Show Strong Blur Backdrop',
                    'blur': 'strong'
                };
                var9.setShowBackdrop = var17;
                var9.setBlurAmount = var15;
                var9 = var10.bind(var3)(var11, var9);
                var8[2] = var9;
                var4.children = var8;
                var6 = var7.bind(var3)(var6, var4);
                var4 = new Array(2);
                var4[0] = var6;
                if (!var5) {
                    _fun88273_ip = 652;
                    continue _fun88273
                }
            case 417:
                var8 = _closure1_slot6;
                var17 = _closure1_slot0;
                var19 = _closure1_slot1;
                var6 = 12;
                var6 = var19[var6];
                var6 = var17.bind(var3)(var6);
                var7 = var6.Dialog;
                var6 = {};
                var6.onDismiss = var12;
                var11 = _closure1_slot5;
                var9 = 13;
                var9 = var19[var9];
                var9 = var17.bind(var3)(var9);
                var10 = var9.Backdrop;
                var9 = {};
                var9.style = var14;
                var9.blur = var20;
                var9.onDismiss = var12;
                var10 = var11.bind(var3)(var10, var9);
                var9 = new Array(2);
                var9[0] = var10;
                var12 = _closure1_slot5;
                var11 = _closure1_slot4;
                var10 = {};
                var13 = var13.backdropContent;
                var10.style = var13;
                var13 = 'box-none';
                var10.pointerEvents = var13;
                var15 = _closure1_slot5;
                var13 = 5;
                var13 = var19[var13];
                var13 = var17.bind(var3)(var13);
                var14 = var13.Card;
                var13 = {};
                var18 = _closure1_slot6;
                var16 = 7;
                var16 = var19[var16];
                var16 = var17.bind(var3)(var16);
                var17 = var16.Text;
                var16 = {};
                var19 = 'text-md/normal';
                var16.variant = var19;
                var19 = ['blur style: '];
                var19[1] = var20;
                var16.children = var19;
                var16 = var18.bind(var3)(var17, var16);
                var13.children = var16;
                var13 = var15.bind(var3)(var14, var13);
                var10.children = var13;
                var10 = var12.bind(var3)(var11, var10);
                var9[1] = var10;
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 652:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 33, 1297, 4856, 4033, 3895, 4037, 3677, 4034, 4040, 4018, 4024, 2]);