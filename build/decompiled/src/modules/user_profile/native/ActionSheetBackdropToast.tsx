// modules/user_profile/native/ActionSheetBackdropToast.tsx
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
    var6 = var3.View;
    var _closure1_slot4 = var6;
    var9 = var3.StyleSheet;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.ACTION_SHEET_MAX_DYNAMIC_CONTENT_SIZE_RATIO;
    var _closure1_slot5 = var6;
    var3 = var3.ACTION_SHEET_START_HEIGHT_RATIO;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var6 = var4.bind(var0)(var3);
    var3 = var6.isIOS;
    var3 = var3.bind(var6)();
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var13 = var9.absoluteFillObject;
    var14 = var8;
    var9 = copyDataProperties(var14, var13);
    var9 = 'flex';
    var8[var9] = var11;
    var11 = 'center';
    var9 = 'alignItems';
    var8[var9] = var11;
    var9 = 'justifyContent';
    var8[var9] = var11;
    var3.container = var8;
    var8 = {
        'position': 'absolute',
        'bottom': 16,
        'backgroundColor': null,
        'borderRadius': null,
        'paddingTop': 6,
        'paddingBottom': 8,
        'paddingHorizontal': 16
    };
    var9 = 6;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.MOBILE_TOAST_BACKGROUND_DEFAULT;
    var8.backgroundColor = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.radii;
    var9 = var9.round;
    var8.borderRadius = var9;
    var3.toast = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot9 = var3;
    var3 = {};
    var6 = 'function ActionSheetBackdropToastTsx1(){const{isInIOS,isExpanded,maxDynamicContentSize,TOAST_BOTTOM_MARGIN,nonExpandedHeight,ACTION_SHEET_MAX_DYNAMIC_CONTENT_SIZE_RATIO,ACTION_SHEET_START_HEIGHT_RATIO,TOAST_BOTTOM_GAP_EXPANDED,TOAST_BOTTOM_GAP,positionDelta,TOAST_ANIMATION_Y_DELTA,opacity}=this.__closure;return{bottom:(isInIOS?isExpanded?maxDynamicContentSize+TOAST_BOTTOM_MARGIN:nonExpandedHeight+TOAST_BOTTOM_MARGIN:(isExpanded?ACTION_SHEET_MAX_DYNAMIC_CONTENT_SIZE_RATIO:ACTION_SHEET_START_HEIGHT_RATIO)*maxDynamicContentSize+(isExpanded?TOAST_BOTTOM_GAP_EXPANDED:TOAST_BOTTOM_GAP))+ +(1-positionDelta.get())*TOAST_ANIMATION_Y_DELTA,opacity:opacity.get()};}';
    var3.code = var6;
    var _closure1_slot10 = var3;
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_profile/native/ActionSheetBackdropToast.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Environment: var1
        var0 = arg0;
        var8 = var0.text;
        var17 = var0.isExpanded;
        var _closure2_slot0 = var17;
        var2 = _closure1_slot9;
        var3 = undefined;
        var6 = var2.bind(var3)();
        var5 = _closure1_slot1;
        var9 = _closure1_slot2;
        var2 = 7;
        var2 = var9[var2];
        var2 = var5.bind(var3)(var2);
        var2 = var2.bind(var3)();
        var4 = var2.top;
        var2 = 8;
        var2 = var9[var2];
        var2 = var5.bind(var3)(var2);
        var2 = var2.bind(var3)();
        var10 = var2.height;
        var14 = _closure1_slot6;
        var15 = var10 * var14;
        var _closure2_slot1 = var15;
        var7 = _closure1_slot0;
        var2 = 9;
        var2 = var9[var2];
        var2 = var7.bind(var3)(var2);
        var2 = var2.NAV_BAR_HEIGHT_MULTILINE;
        var2 = var10 - var2;
        var16 = var2 - var4;
        var _closure2_slot2 = var16;
        var4 = 10;
        var2 = var9[var4];
        var10 = var7.bind(var3)(var2);
        var2 = var10.useSharedValue;
        var11 = 0;
        var13 = var2.bind(var10)(var11);
        var _closure2_slot3 = var13;
        var2 = var9[var4];
        var10 = var7.bind(var3)(var2);
        var2 = var10.useSharedValue;
        var12 = var2.bind(var10)(var11);
        var _closure2_slot4 = var12;
        var18 = _closure1_slot3;
        var11 = var18.useEffect;
        var10 = new Array(2);
        var10[0] = var13;
        var10[1] = var12;
        var2 = function() { // Environment: var1
            var4 = _closure2_slot3;
            var3 = var4.set;
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var6 = 10;
            var0 = var11[var6];
            var9 = undefined;
            var12 = var10.bind(var9)(var0);
            var8 = var12.withDelay;
            var0 = 11;
            var2 = var11[var0];
            var13 = var10.bind(var9)(var2);
            var7 = var13.withTiming;
            var2 = {};
            var5 = 200;
            var2.duration = var5;
            var5 = var11[var6];
            var5 = var10.bind(var9)(var5);
            var15 = var5.Easing;
            var14 = var15.in;
            var5 = var11[var6];
            var5 = var10.bind(var9)(var5);
            var5 = var5.Easing;
            var5 = var5.ease;
            var5 = var14.bind(var15)(var5);
            var2.easing = var5;
            var5 = 1;
            var7 = var7.bind(var13)(var5, var2);
            var2 = 100;
            var2 = var8.bind(var12)(var2, var7);
            var2 = var3.bind(var4)(var2);
            var2 = _closure2_slot4;
            var1 = var2.set;
            var0 = var11[var0];
            var4 = var10.bind(var9)(var0);
            var3 = var4.withTiming;
            var0 = {};
            var7 = 300;
            var0.duration = var7;
            var7 = var11[var6];
            var7 = var10.bind(var9)(var7);
            var8 = var7.Easing;
            var7 = var8.in;
            var6 = var11[var6];
            var6 = var10.bind(var9)(var6);
            var6 = var6.Easing;
            var6 = var6.linear;
            var6 = var7.bind(var8)(var6);
            var0.easing = var6;
            var0 = var3.bind(var4)(var5, var0);
            var0 = var1.bind(var2)(var0);
            var0 = function() { // Environment: var0
                var5 = _closure2_slot3;
                var4 = var5.set;
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var7 = 10;
                var1 = var11[var7];
                var0 = undefined;
                var12 = var10.bind(var0)(var1);
                var9 = var12.withDelay;
                var1 = 11;
                var3 = var11[var1];
                var8 = var10.bind(var0)(var3);
                var3 = var8.withTiming;
                var6 = 0;
                var3 = var3.bind(var8)(var6);
                var8 = 200;
                var3 = var9.bind(var12)(var8, var3);
                var3 = var4.bind(var5)(var3);
                var3 = _closure2_slot4;
                var2 = var3.set;
                var1 = var11[var1];
                var5 = var10.bind(var0)(var1);
                var4 = var5.withTiming;
                var1 = {};
                var1.duration = var8;
                var8 = var11[var7];
                var8 = var10.bind(var0)(var8);
                var9 = var8.Easing;
                var8 = var9.out;
                var7 = var11[var7];
                var7 = var10.bind(var0)(var7);
                var7 = var7.Easing;
                var7 = var7.exp;
                var7 = var8.bind(var9)(var7);
                var1.easing = var7;
                var1 = var4.bind(var5)(var6, var1);
                var1 = var2.bind(var3)(var1);
                return var0;
            };
            return var0;
        };
        var2 = var11.bind(var18)(var2, var10);
        var2 = var9[var4];
        var10 = var7.bind(var3)(var2);
        var2 = var10.useAnimatedStyle;
        var1 = function() {
            _fun59762: for (var _fun59762_ip = 0;;) switch (_fun59762_ip) {
                case 0:
                    var0 = {};
                    var4 = _closure1_slot8;
                    var2 = _closure2_slot0;
                    if (var4) {
                        _fun59762_ip = 59;
                        continue _fun59762
                    }
                case 19:
                    if (var2) {
                        _fun59762_ip = 28;
                        continue _fun59762
                    }
                case 22:
                    var4 = _closure1_slot6;
                    _fun59762_ip = 32;
                    continue _fun59762;
                case 28:
                    var4 = _closure1_slot5;
                case 32:
                    var3 = _closure2_slot2;
                    var4 = var4 * var3;
                    var5 = _closure2_slot0;
                    var3 = 46;
                    if (!var5) {
                        _fun59762_ip = 53;
                        continue _fun59762
                    }
                case 50:
                    var3 = 72;
                case 53:
                    var3 = var4 + var3;
                    _fun59762_ip = 89;
                    continue _fun59762;
                case 59:
                    if (var2) {
                        _fun59762_ip = 75;
                        continue _fun59762
                    }
                case 62:
                    var4 = _closure2_slot1;
                    var2 = 24;
                    var2 = var4 + var2;
                    _fun59762_ip = 86;
                    continue _fun59762;
                case 75:
                    var5 = _closure2_slot2;
                    var4 = 24;
                    var2 = var5 + var4;
                case 86:
                    var3 = var2;
                case 89:
                    var4 = _closure2_slot3;
                    var2 = var4.get;
                    var4 = var2.bind(var4)();
                    var2 = 1;
                    var4 = var2 - var4;
                    var2 = 15;
                    var2 = var2 * var4;
                    var2 = var3 + var2;
                    var0.bottom = var2;
                    var2 = _closure2_slot4;
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    var0.opacity = var1;
                    return var0;
            }
        };
        var11 = {};
        var18 = _closure1_slot8;
        var11.isInIOS = var18;
        var11.isExpanded = var17;
        var11.maxDynamicContentSize = var16;
        var16 = 24;
        var11.TOAST_BOTTOM_MARGIN = var16;
        var11.nonExpandedHeight = var15;
        var15 = _closure1_slot5;
        var11.ACTION_SHEET_MAX_DYNAMIC_CONTENT_SIZE_RATIO = var15;
        var11.ACTION_SHEET_START_HEIGHT_RATIO = var14;
        var14 = 72;
        var11.TOAST_BOTTOM_GAP_EXPANDED = var14;
        var14 = 46;
        var11.TOAST_BOTTOM_GAP = var14;
        var11.positionDelta = var13;
        var13 = 15;
        var11.TOAST_ANIMATION_Y_DELTA = var13;
        var11.opacity = var12;
        var1.__closure = var11;
        var11 = 4629963124809.0;
        var1.__workletHash = var11;
        var11 = _closure1_slot10;
        var1.__initData = var11;
        var10 = var2.bind(var10)(var1);
        var2 = _closure1_slot7;
        var1 = _closure1_slot4;
        var0 = {};
        var12 = var6.container;
        var11 = new Array(1);
        var11[0] = var12;
        var0.style = var11;
        var4 = var9[var4];
        var4 = var5.bind(var3)(var4);
        var5 = var4.View;
        var4 = {};
        var11 = var6.toast;
        var6 = new Array(2);
        var6[0] = var11;
        var6[1] = var10;
        var4.style = var6;
        var6 = 12;
        var6 = var9[var6];
        var6 = var7.bind(var3)(var6);
        var7 = var6.Text;
        var6 = {
            'variant': 'text-sm/medium',
            'color': 'mobile-text-heading-primary'
        };
        var6.children = var8;
        var6 = var2.bind(var3)(var7, var6);
        var4.children = var6;
        var4 = var2.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.ActionSheetBackdropToast = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 4935, 33, 478, 1297, 671, 1568, 1464, 4704, 3722, 4098, 3943, 2]);