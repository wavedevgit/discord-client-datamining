// modules/interaction_components/native/actions/CheckboxActionComponent.tsx
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
    var _closure1_slot3 = var6;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot4 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Environment: var1
        _fun113474: for (var _fun113474_ip = 0;;) switch (_fun113474_ip) {
            case 0:
                var8 = arg0;
                var5 = var8.type;
                var _closure2_slot0 = var5;
                var11 = var8.default;
                var6 = _closure1_slot0;
                var1 = _closure1_slot2;
                var2 = 2;
                var2 = var1[var2];
                var3 = undefined;
                var6 = var6.bind(var3)(var2);
                var2 = var6.useComponentStateContext;
                var7 = var2.bind(var6)();
                var6 = _closure1_slot1;
                var2 = 3;
                var1 = var1[var2];
                var10 = var6.bind(var3)(var1);
                var1 = null;
                var9 = var1 != var7;
                var6 = 'CheckboxActionComponent must be rendered inside a ComponentStateContext';
                var6 = var10.bind(var3)(var9, var6);
                var9 = var7.useComponentState;
                var10 = var1 != var11;
                var6 = undefined;
                if (!var10) {
                    _fun113474_ip = 116;
                    continue _fun113474
                }
            case 103:
                var10 = {};
                var10.type = var5;
                var10.value = var11;
                var6 = var10;
            case 116:
                var6 = var9.bind(var7)(var8, var6);
                var11 = var6.state;
                var _closure2_slot1 = var11;
                var6 = var6.executeStateUpdate;
                var _closure2_slot2 = var6;
                var10 = _closure1_slot3;
                var9 = var10.useMemo;
                var6 = new Array(2);
                var6[0] = var11;
                var6[1] = var5;
                var5 = function() { // Environment: var4
                    _fun113475: for (var _fun113475_ip = 0;;) switch (_fun113475_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var0 = null;
                            var0 = var0 == var2;
                            var2 = undefined;
                            if (var0) {
                                _fun113475_ip = 27;
                                continue _fun113475
                            }
                        case 18:
                            var0 = _closure2_slot1;
                            var2 = var0.type;
                        case 27:
                            var0 = _closure2_slot0;
                            var0 = var2 === var0;
                            if (!var0) {
                                _fun113475_ip = 47;
                                continue _fun113475
                            }
                        case 38:
                            var1 = _closure2_slot1;
                            var0 = var1.value;
                        case 47:
                            return var0;
                    }
                };
                var5 = var9.bind(var10)(var5, var6);
                var6 = var7.getParents;
                var8 = var6.bind(var7)(var8);
                var6 = var1 == var8;
                var7 = undefined;
                if (var6) {
                    _fun113474_ip = 201;
                    continue _fun113474
                }
            case 195:
                var6 = 0;
                var7 = var8[var6];
            case 201:
                var6 = var1 == var7;
                var9 = undefined;
                if (var6) {
                    _fun113474_ip = 215;
                    continue _fun113474
                }
            case 210:
                var9 = var7.type;
            case 215:
                var8 = _closure1_slot0;
                var10 = _closure1_slot2;
                var6 = 4;
                var6 = var10[var6];
                var6 = var8.bind(var3)(var6);
                var6 = var6.ComponentType;
                var8 = var6.LABEL;
                var6 = undefined;
                if (!(var9 === var8)) {
                    _fun113474_ip = 256;
                    continue _fun113474
                }
            case 253:
                var6 = var7;
            case 256:
                var8 = _closure1_slot1;
                var7 = _closure1_slot2;
                var2 = var7[var2];
                var8 = var8.bind(var3)(var2);
                var2 = var1 != var6;
                var1 = 'CheckboxActionComponent must be a child of a Label component';
                var1 = var8.bind(var3)(var2, var1);
                var2 = _closure1_slot4;
                var1 = _closure1_slot0;
                var0 = 5;
                var0 = var7[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.Checkbox;
                var0 = {};
                var7 = var6.label;
                var0.label = var7;
                var6 = var6.description;
                var0.description = var6;
                var0.checked = var5;
                var4 = function arg0() {
                    var2 = _closure2_slot2;
                    var1 = {};
                    var0 = _closure2_slot0;
                    var1.type = var0;
                    var0 = arg0;
                    var1.value = var0;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var0.onToggle = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/interaction_components/native/actions/CheckboxActionComponent.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 6786, 44, 1636, 5403, 2]);