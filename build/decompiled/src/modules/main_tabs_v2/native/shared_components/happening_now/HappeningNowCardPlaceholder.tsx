// modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardPlaceholder.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
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
    var11 = 1;
    var3 = var5[var11];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var9 = var3.HAPPENING_NOW_CONTENT_HEIGHT;
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
    var8 = {
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var3.placeholderContainer = var8;
    var8 = {};
    var8.height = var9;
    var8.width = var9;
    var9 = 5;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.sm;
    var8.borderRadius = var12;
    var12 = 12;
    var8.marginRight = var12;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BORDER_SUBTLE;
    var8.backgroundColor = var12;
    var3.placeholderIcon = var8;
    var8 = {};
    var8.flex = var11;
    var3.placeholderContent = var8;
    var8 = {
        'height': 12,
        'borderRadius': 5
    };
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BORDER_SUBTLE;
    var8.backgroundColor = var9;
    var3.placeholderText = var8;
    var8 = {};
    var9 = '75%';
    var8.width = var9;
    var3.placeholderTextTop = var8;
    var8 = {
        'width': '50%',
        'marginTop': 8
    };
    var3.placeholderTextBottom = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = {};
    var6 = 'function HappeningNowCardPlaceholderTsx1(){const{opacity,withRepeat,withTiming,endOpacity,duration,Easing}=this.__closure;opacity.set(withRepeat(withTiming(endOpacity,{duration:duration,easing:Easing.ease}),-1,true));}';
    var3.code = var6;
    var _closure1_slot8 = var3;
    var3 = {};
    var6 = 'function HappeningNowCardPlaceholderTsx2(){const{opacity}=this.__closure;return{opacity:opacity.get()};}';
    var3.code = var6;
    var _closure1_slot9 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardPlaceholder.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: HappeningNowCardPlaceholder, environment: var1
        _fun101588: for (var _fun101588_ip = 0;;) switch (_fun101588_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.fullWidth;
                var4 = var0.panelVariant;
                var3 = undefined;
                if (!(var4 === var3)) {
                    _fun101588_ip = 23;
                    continue _fun101588
                }
            case 21:
                var4 = false;
            case 23:
                var0 = _closure1_slot7;
                var14 = var0.bind(var3)();
                var1 = function(arg0) { // Original name: useBlinkStyle, environment: var0
                    var1 = arg0;
                    var11 = var1.duration;
                    var _closure3_slot0 = var11;
                    var7 = var1.endOpacity;
                    var _closure3_slot1 = var7;
                    var9 = var1.startOpacity;
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 6;
                    var5 = var6[var1];
                    var2 = undefined;
                    var8 = var4.bind(var2)(var5);
                    var5 = var8.useSharedValue;
                    var5 = var5.bind(var8)(var9);
                    var _closure3_slot2 = var5;
                    var10 = _closure1_slot3;
                    var9 = var10.useEffect;
                    var8 = new Array(3);
                    var8[0] = var5;
                    var8[1] = var11;
                    var8[2] = var7;
                    var7 = function() { // Environment: var0
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var6 = 6;
                        var1 = var8[var6];
                        var0 = undefined;
                        var3 = var7.bind(var0)(var1);
                        var2 = var3.runOnUI;
                        var1 = function() { // Original name: t, environment: var1
                            var3 = _closure3_slot2;
                            var2 = var3.set;
                            var10 = _closure1_slot0;
                            var11 = _closure1_slot2;
                            var9 = 6;
                            var1 = var11[var9];
                            var0 = undefined;
                            var7 = var10.bind(var0)(var1);
                            var6 = var7.withRepeat;
                            var1 = 7;
                            var1 = var11[var1];
                            var8 = var10.bind(var0)(var1);
                            var5 = var8.withTiming;
                            var4 = _closure3_slot1;
                            var1 = {};
                            var12 = _closure3_slot0;
                            var1.duration = var12;
                            var9 = var11[var9];
                            var9 = var10.bind(var0)(var9);
                            var9 = var9.Easing;
                            var9 = var9.ease;
                            var1.easing = var9;
                            var5 = var5.bind(var8)(var4, var1);
                            var4 = -1;
                            var1 = true;
                            var1 = var6.bind(var7)(var5, var4, var1);
                            var1 = var2.bind(var3)(var1);
                            return var0;
                        };
                        var5 = {};
                        var10 = _closure3_slot2;
                        var5.opacity = var10;
                        var10 = var8[var6];
                        var10 = var7.bind(var0)(var10);
                        var10 = var10.withRepeat;
                        var5.withRepeat = var10;
                        var10 = 7;
                        var10 = var8[var10];
                        var10 = var7.bind(var0)(var10);
                        var10 = var10.withTiming;
                        var5.withTiming = var10;
                        var10 = _closure3_slot1;
                        var5.endOpacity = var10;
                        var9 = _closure3_slot0;
                        var5.duration = var9;
                        var6 = var8[var6];
                        var6 = var7.bind(var0)(var6);
                        var6 = var6.Easing;
                        var5.Easing = var6;
                        var1.__closure = var5;
                        var5 = 14338250108016.0;
                        var1.__workletHash = var5;
                        var4 = _closure1_slot8;
                        var1.__initData = var4;
                        var1 = var2.bind(var3)(var1);
                        var1 = var1.bind(var0)();
                        return var0;
                    };
                    var7 = var9.bind(var10)(var7, var8);
                    var1 = var6[var1];
                    var2 = var4.bind(var2)(var1);
                    var1 = var2.useAnimatedStyle;
                    var0 = function() { // Original name: c, environment: var0
                        var0 = {};
                        var2 = _closure3_slot2;
                        var1 = var2.get;
                        var1 = var1.bind(var2)();
                        var0.opacity = var1;
                        return var0;
                    };
                    var4 = {};
                    var4.opacity = var5;
                    var0.__closure = var4;
                    var4 = 17547739379389.0;
                    var0.__workletHash = var4;
                    var3 = _closure1_slot9;
                    var0.__initData = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = {
                    'duration': 1000,
                    'startOpacity': 0.3,
                    'endOpacity': 0.6
                };
                var9 = var1.bind(var3)(var0);
                var2 = _closure1_slot5;
                var1 = _closure1_slot1;
                var5 = _closure1_slot2;
                var0 = 8;
                var0 = var5[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var5 = 'medium';
                if (!var6) {
                    _fun101588_ip = 99;
                    continue _fun101588
                }
            case 95:
                var5 = 'full';
            case 99:
                var0.width = var5;
                var0.panelVariant = var4;
                var6 = _closure1_slot6;
                var5 = _closure1_slot1;
                var8 = _closure1_slot2;
                var4 = 6;
                var4 = var8[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.View;
                var4 = {};
                var8 = new Array(2);
                var8[0] = var9;
                var9 = var14.placeholderContainer;
                var8[1] = var9;
                var4.style = var8;
                var12 = _closure1_slot5;
                var9 = _closure1_slot4;
                var7 = {};
                var8 = var14.placeholderIcon;
                var7.style = var8;
                var8 = var12.bind(var3)(var9, var7);
                var7 = new Array(2);
                var7[0] = var8;
                var8 = {};
                var10 = var14.placeholderContent;
                var8.style = var10;
                var10 = {};
                var13 = var14.placeholderText;
                var11 = new Array(2);
                var11[0] = var13;
                var13 = var14.placeholderTextTop;
                var11[1] = var13;
                var10.style = var11;
                var11 = var12.bind(var3)(var9, var10);
                var10 = new Array(2);
                var10[0] = var11;
                var11 = {};
                var15 = var14.placeholderText;
                var13 = new Array(2);
                var13[0] = var15;
                var14 = var14.placeholderTextBottom;
                var13[1] = var14;
                var11.style = var13;
                var11 = var12.bind(var3)(var9, var11);
                var10[1] = var11;
                var8.children = var10;
                var8 = var6.bind(var3)(var9, var8);
                var7[1] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.HappeningNowCardPlaceholder = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 10802, 33, 1297, 671, 3679, 4056, 10803, 2]);