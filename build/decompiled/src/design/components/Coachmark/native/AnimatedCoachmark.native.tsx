// design/components/Coachmark/native/AnimatedCoachmark.native.tsx
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.StyleSheet;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot6 = var3;
    var3 = function arg0, arg1() {
        _fun57479: for (var _fun57479_ip = 0;;) switch (_fun57479_ip) {
            case 0:
                var8 = arg0;
                var9 = arg1;
                var3 = _closure1_slot6;
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 4;
                var0 = var2[var0];
                var2 = undefined;
                var0 = var1.bind(var2)(var0);
                var1 = var0.View;
                var0 = {};
                var4 = new Array(2);
                var4[0] = var9;
                var6 = _closure1_slot5;
                var6 = var6.absoluteFill;
                var4[1] = var6;
                var0.style = var4;
                var4 = 'box-none';
                var0.pointerEvents = var4;
                var4 = null;
                var6 = var4 != var8;
                if (!var6) {
                    _fun57479_ip = 147;
                    continue _fun57479
                }
            case 88:
                var7 = _closure1_slot6;
                var6 = _closure1_slot0;
                var10 = _closure1_slot2;
                var5 = 5;
                var5 = var10[var5];
                var5 = var6.bind(var2)(var5);
                var6 = var5.CoachmarkContainer;
                var5 = {};
                var12 = var5;
                var11 = var8;
                var8 = copyDataProperties(var12, var11);
                var8 = 'enterExitAnimatedStyles';
                var5[var8] = var9;
                var4 = var7.bind(var2)(var6, var5);
            case 147:
                var0.children = var4;
                var0 = var3.bind(var2)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot7 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'design/components/Coachmark/native/AnimatedCoachmark.native.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Environment: var1
        _fun57480: for (var _fun57480_ip = 0;;) switch (_fun57480_ip) {
            case 0:
                var4 = arg0;
                var11 = var4.visible;
                var _closure2_slot0 = var11;
                var1 = null;
                var3 = Object.create(var1);
                var1 = 0;
                var3.visible = var1;
                var15 = {};
                var14 = var4;
                var13 = var3;
                var7 = copyDataProperties(var15, var14, var13);
                var10 = _closure1_slot4;
                var6 = var10.useContext;
                var2 = _closure1_slot0;
                var9 = _closure1_slot2;
                var3 = 6;
                var5 = var9[var3];
                var3 = undefined;
                var5 = var2.bind(var3)(var5);
                var5 = var5.AccessibilityPreferencesContext;
                var5 = var6.bind(var10)(var5);
                var5 = var5.reducedMotion;
                var6 = var5.enabled;
                var5 = var10.useState;
                var12 = var5.bind(var10)(var11);
                var8 = _closure1_slot3;
                var5 = 2;
                var5 = var8.bind(var3)(var12, var5);
                var8 = var5[var1];
                var1 = 1;
                var1 = var5[var1];
                var _closure2_slot1 = var1;
                var1 = 7;
                var1 = var9[var1];
                var5 = var2.bind(var3)(var1);
                var2 = var5.tooltipEnterExitAnimation;
                var1 = var7.position;
                var5 = var2.bind(var5)(var1);
                var2 = var10.useEffect;
                var1 = new Array(1);
                var1[0] = var11;
                var0 = function() { // Environment: var0
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var0 = var2.bind(var10)(var0, var1);
                var2 = _closure1_slot6;
                var1 = _closure1_slot1;
                var0 = 8;
                var0 = var9[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var0.useReducedMotion = var6;
                var6 = undefined;
                if (!var8) {
                    _fun57480_ip = 221;
                    continue _fun57480
                }
            case 218:
                var6 = var7;
            case 221:
                var0.item = var6;
                var0.entering = var5;
                var0.exiting = var5;
                var4 = _closure1_slot7;
                var0.renderItem = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.AnimatedCoachmark = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 33, 3711, 7019, 3156, 7016, 4925, 2]);