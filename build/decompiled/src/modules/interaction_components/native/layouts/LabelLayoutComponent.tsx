// modules/interaction_components/native/layouts/LabelLayoutComponent.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
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
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot2 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot3 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/interaction_components/native/layouts/LabelLayoutComponent.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: LabelLayoutComponent, environment: var1
        _fun113416: for (var _fun113416_ip = 0;;) switch (_fun113416_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.label;
                var8 = var0.description;
                var4 = var0.component;
                var3 = var0.renderComponent;
                var5 = _closure1_slot0;
                var10 = _closure1_slot1;
                var0 = 3;
                var0 = var10[var0];
                var2 = undefined;
                var1 = var5.bind(var2)(var0);
                var0 = var1.useComponentError;
                var7 = var0.bind(var1)(var4);
                var1 = var4.type;
                var0 = 4;
                var0 = var10[var0];
                var0 = var5.bind(var2)(var0);
                var0 = var0.ComponentType;
                var0 = var0.CHECKBOX;
                if (!(var1 !== var0)) {
                    _fun113416_ip = 208;
                    continue _fun113416
                }
            case 96:
                var5 = _closure1_slot3;
                var1 = _closure1_slot0;
                var10 = _closure1_slot1;
                var0 = 5;
                var0 = var10[var0];
                var0 = var1.bind(var2)(var0);
                var1 = var0.Input;
                var0 = {};
                var0.label = var9;
                var0.description = var8;
                var8 = var4.required;
                var0.required = var8;
                var0.errorMessage = var7;
                var7 = _closure1_slot2;
                var6 = {};
                var8 = {};
                var9 = '100%';
                var8.width = var9;
                var6.style = var8;
                var8 = 'label-child';
                var8 = var3.bind(var2)(var4, var8);
                var6.children = var8;
                var6 = var5.bind(var2)(var7, var6);
                var0.children = var6;
                var0 = var5.bind(var2)(var1, var0);
                _fun113416_ip = 220;
                continue _fun113416;
            case 208:
                var1 = 'label-child';
                var0 = var3.bind(var2)(var4, var1);
            case 220:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 6784, 1636, 5351, 2]);