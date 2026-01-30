// design/components/Button/native/FloatingActionButton.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var3);
    var9 = 0;
    var4 = var6[var9];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var4);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var6[var3];
    var7 = var5.bind(var0)(var3);
    var4 = var7.createStyles;
    var3 = {};
    var8 = {
        'position': 'absolute',
        'right': 16,
        'bottom': 16
    };
    var10 = 3;
    var10 = var6[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.shadows;
    var13 = var10.SHADOW_HIGH;
    var14 = var8;
    var10 = copyDataProperties(var14, var13);
    var3.button = var8;
    var8 = {};
    var10 = 4;
    var11 = var6[var10];
    var11 = var5.bind(var0)(var11);
    var11 = var11.FAB_BUTTON_SIZE;
    var8.minWidth = var11;
    var10 = var6[var10];
    var10 = var5.bind(var0)(var10);
    var10 = var10.FAB_BUTTON_SIZE;
    var8.minHeight = var10;
    var8.padding = var9;
    var3.iconButtonPill = var8;
    var3 = var4.bind(var7)(var3);
    var _closure1_slot5 = var3;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/Button/native/FloatingActionButton.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2.useStyles = var3;
    var1 = function(arg0) { // Original name: FloatingActionButton, environment: var1
        _fun57386: for (var _fun57386_ip = 0;;) switch (_fun57386_ip) {
            case 0:
                var3 = arg0;
                var10 = var3.icon;
                var9 = var3.positionBottom;
                var _closure2_slot0 = var9;
                var6 = var3.positionRight;
                var _closure2_slot1 = var6;
                var8 = var3.accessibilityLabel;
                var2 = {
                    'icon': 0,
                    'positionBottom': 0,
                    'positionRight': 0,
                    'accessibilityLabel': 0
                };
                var15 = null;
                var16 = var2;
                var1 = silentSetPrototypeOf(var16, var15);
                var16 = {};
                var15 = var3;
                var14 = var2;
                var5 = copyDataProperties(var16, var15, var14);
                var1 = _closure1_slot5;
                var3 = undefined;
                var4 = var1.bind(var3)();
                var _closure2_slot2 = var4;
                var7 = _closure1_slot3;
                var2 = var7.useMemo;
                var1 = new Array(3);
                var1[0] = var4;
                var1[1] = var9;
                var1[2] = var6;
                var0 = function() { // Environment: var0
                    _fun57387: for (var _fun57387_ip = 0;;) switch (_fun57387_ip) {
                        case 0:
                            var0 = _closure2_slot2;
                            var1 = var0.button;
                            var0 = new Array(3);
                            var0[0] = var1;
                            var1 = _closure2_slot0;
                            var4 = null;
                            var5 = var4 != var1;
                            var2 = undefined;
                            if (!var5) {
                                _fun57387_ip = 49;
                                continue _fun57387
                            }
                        case 36:
                            var5 = {};
                            var6 = _closure2_slot0;
                            var5.bottom = var6;
                            var2 = var5;
                        case 49:
                            var0[1] = var2;
                            var2 = _closure2_slot1;
                            var2 = var4 != var2;
                            var1 = undefined;
                            if (!var2) {
                                _fun57387_ip = 79;
                                continue _fun57387
                            }
                        case 66:
                            var2 = {};
                            var3 = _closure2_slot1;
                            var2.right = var3;
                            var1 = var2;
                        case 79:
                            var0[2] = var1;
                            return var0;
                    }
                };
                var6 = var2.bind(var7)(var0, var1);
                var2 = _closure1_slot4;
                var1 = _closure1_slot0;
                var9 = _closure1_slot2;
                var0 = 5;
                var0 = var9[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.BaseIconButton;
                var0 = {};
                var16 = var0;
                var15 = var5;
                var5 = copyDataProperties(var16, var15);
                var5 = 'accessibilityLabel';
                var0[var5] = var8;
                var8 = 'lg';
                var5 = 'size';
                var0[var5] = var8;
                var8 = 'primary';
                var5 = 'variant';
                var0[var5] = var8;
                var5 = var7.isValidElement;
                var5 = var5.bind(var7)(var10);
                var7 = var10;
                if (!var5) {
                    _fun57386_ip = 270;
                    continue _fun57386
                }
            case 217:
                var9 = _closure1_slot3;
                var8 = var9.cloneElement;
                var5 = {};
                var12 = _closure1_slot1;
                var13 = _closure1_slot2;
                var11 = 3;
                var11 = var13[var11];
                var11 = var12.bind(var3)(var11);
                var11 = var11.colors;
                var11 = var11.WHITE;
                var5.color = var11;
                var7 = var8.bind(var9)(var10, var5);
            case 270:
                var5 = 'icon';
                var0[var5] = var7;
                var5 = 'style';
                var0[var5] = var6;
                var5 = var4.iconButtonPill;
                var4 = 'pillStyle';
                var0[var4] = var5;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.FloatingActionButton = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 1297, 671, 4047, 6996, 2]);