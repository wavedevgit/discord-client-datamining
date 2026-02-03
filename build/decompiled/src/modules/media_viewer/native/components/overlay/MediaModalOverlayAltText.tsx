// modules/media_viewer/native/components/overlay/MediaModalOverlayAltText.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
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
    var6 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = function(arg0) { // Environment: var1
        var0 = {};
        var1 = {};
        var4 = _closure1_slot1;
        var5 = _closure1_slot2;
        var2 = 3;
        var6 = var5[var2];
        var3 = undefined;
        var6 = var4.bind(var3)(var6);
        var6 = var6.colors;
        var6 = var6.CONTROL_OVERLAY_SECONDARY_BACKGROUND_ACTIVE;
        var1.backgroundColor = var6;
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.spacing;
        var6 = var6.PX_8;
        var1.marginVertical = var6;
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.spacing;
        var6 = var6.PX_8;
        var1.marginHorizontal = var6;
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.spacing;
        var7 = var6.PX_8;
        var6 = arg0;
        var6 = var7 + var6;
        var1.marginRight = var6;
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.spacing;
        var6 = var6.PX_8;
        var1.paddingHorizontal = var6;
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.spacing;
        var6 = var6.PX_4;
        var1.paddingVertical = var6;
        var2 = var5[var2];
        var2 = var4.bind(var3)(var2);
        var2 = var2.radii;
        var2 = var2.sm;
        var1.borderRadius = var2;
        var2 = 'flex-end';
        var1.alignSelf = var2;
        var0.container = var1;
        return var0;
    };
    var3 = var7.bind(var8)(var3);
    var _closure1_slot4 = var3;
    var3 = var6.memo;
    var1 = function arg0() {
        _fun73328: for (var _fun73328_ip = 0;;) switch (_fun73328_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.description;
                var4 = undefined;
                var _closure2_slot0 = var4;
                var3 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 4;
                var2 = var6[var2];
                var2 = var3.bind(var4)(var2);
                var2 = var2.bind(var4)();
                var3 = _closure1_slot4;
                var2 = var2.right;
                var6 = var3.bind(var4)(var2);
                var7 = null;
                var3 = var7 != var0;
                var2 = '';
                if (!var3) {
                    _fun73328_ip = 73;
                    continue _fun73328
                }
            case 70:
                var2 = var0;
            case 73:
                _closure2_slot0 = var2;
                var3 = _closure1_slot0;
                var8 = _closure1_slot2;
                var0 = 5;
                var0 = var8[var0];
                var0 = var3.bind(var4)(var0);
                var3 = var0.ViewImageDescriptions;
                var0 = var3.useSetting;
                var3 = var0.bind(var3)();
                var0 = null;
                if (!var3) {
                    _fun73328_ip = 308;
                    continue _fun73328
                }
            case 121:
                var3 = var2.length;
                var2 = 0;
                var0 = null;
                if (!(var2 !== var3)) {
                    _fun73328_ip = 308;
                    continue _fun73328
                }
            case 137:
                var3 = _closure1_slot3;
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var1 = 6;
                var1 = var11[var1];
                var1 = var10.bind(var4)(var1);
                var2 = var1.PressableOpacity;
                var1 = {};
                var6 = var6.container;
                var1.style = var6;
                var5 = function() {
                    _fun73329: for (var _fun73329_ip = 0;;) switch (_fun73329_ip) {
                        case 0:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 7;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = {};
                            var5 = _closure2_slot0;
                            var3 = null;
                            var5 = var3 != var5;
                            var3 = '';
                            if (!var5) {
                                _fun73329_ip = 51;
                                continue _fun73329
                            }
                        case 47:
                            var3 = _closure2_slot0;
                        case 51:
                            var1.description = var3;
                            var1 = var2.bind(var0)(var1);
                            return var0;
                    }
                };
                var1.onPress = var5;
                var5 = {
                    'top': 6,
                    'bottom': 6,
                    'left': 6,
                    'right': 6
                };
                var1.hitSlop = var5;
                var5 = 8;
                var5 = var11[var5];
                var5 = var10.bind(var4)(var5);
                var6 = var5.Text;
                var5 = {
                    'variant': 'text-xs/semibold',
                    'color': 'white'
                };
                var7 = 9;
                var8 = var11[var7];
                var8 = var10.bind(var4)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var7 = var11[var7];
                var7 = var10.bind(var4)(var7);
                var7 = var7.t;
                var7 = var7.Q5VqrN;
                var7 = var8.bind(var9)(var7);
                var5.children = var7;
                var5 = var3.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 308:
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/media_viewer/native/components/overlay/MediaModalOverlayAltText.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 1297, 671, 1568, 1348, 4902, 9218, 3941, 1234, 2]);