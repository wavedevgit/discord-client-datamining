// modules/main_tabs_v2/native/utils/getLabelRenderMethod.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function arg0() {
        _fun104535: for (var _fun104535_ip = 0;;) switch (_fun104535_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.focused;
                var7 = var0.color;
                var8 = var0.position;
                var4 = var0.title;
                var1 = _closure1_slot3;
                var3 = undefined;
                var5 = var1.bind(var3)();
                var2 = _closure1_slot2;
                var1 = _closure1_slot0;
                var6 = _closure1_slot1;
                var0 = 3;
                var0 = var6[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.Text;
                var0 = {
                    'variant': 'text-xxs/semibold',
                    'lineClamp': 1,
                    'color': null,
                    'style': null,
                    'maxFontSizeMultiplier': 2
                };
                var6 = 'interactive-text-default';
                if (!var9) {
                    _fun104535_ip = 95;
                    continue _fun104535
                }
            case 89:
                var6 = 'interactive-text-active';
            case 95:
                var0.color = var6;
                var6 = 'beside-icon';
                if (!(var6 !== var8)) {
                    _fun104535_ip = 119;
                    continue _fun104535
                }
            case 111:
                var6 = var5.titleBelow;
                _fun104535_ip = 125;
                continue _fun104535;
            case 119:
                var6 = var5.titleBeside;
            case 125:
                var5 = new Array(2);
                var5[0] = var6;
                var6 = {};
                var6.color = var7;
                var5[1] = var6;
                var0.style = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot4 = var0;
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
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot2 = var3;
    var3 = 2;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = -6;
    var8.marginTop = var9;
    var3.titleBelow = var8;
    var8 = {};
    var9 = 28;
    var8.marginLeft = var9;
    var3.titleBeside = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot3 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/utils/getLabelRenderMethod.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var0 = function(arg0) { // Environment: var0
            var3 = _closure1_slot2;
            var2 = _closure1_slot4;
            var1 = {};
            var5 = arg0;
            var6 = var1;
            var0 = copyDataProperties(var6, var5);
            var4 = _closure2_slot0;
            var0 = 'title';
            var1[var0] = var4;
            var0 = undefined;
            var0 = var3.bind(var0)(var2, var1);
            return var0;
        };
        return var0;
    };
    var2.getTabLabelRenderMethod = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 1297, 3932, 2]);