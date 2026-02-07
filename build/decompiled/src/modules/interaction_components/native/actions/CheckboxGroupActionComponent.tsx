// modules/interaction_components/native/actions/CheckboxGroupActionComponent.tsx
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
    var6 = var3.bind(var0)(var6);
    var _closure1_slot2 = var6;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot3 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Environment: var1
        _fun114088: for (var _fun114088_ip = 0;;) switch (_fun114088_ip) {
            case 0:
                var8 = arg0;
                var1 = var8.type;
                var _closure2_slot0 = var1;
                var6 = var8.options;
                var _closure2_slot1 = var6;
                var0 = var8.maxValues;
                var _closure2_slot2 = var0;
                var7 = _closure1_slot2;
                var5 = var7.useMemo;
                var3 = new Array(1);
                var3[0] = var6;
                var2 = function() { // Environment: var4
                    var3 = _closure2_slot1;
                    var2 = var3.filter;
                    var1 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var0 = var0.default;
                        return var0;
                    };
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.map;
                    var0 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var0 = var0.value;
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var10 = var5.bind(var7)(var2, var3);
                var5 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 2;
                var2 = var3[var2];
                var3 = undefined;
                var7 = var5.bind(var3)(var2);
                var5 = var7.useComponentState;
                var9 = var10.length;
                var2 = 0;
                var9 = var9 > var2;
                var2 = undefined;
                if (!var9) {
                    _fun114088_ip = 123;
                    continue _fun114088
                }
            case 110:
                var9 = {};
                var9.type = var1;
                var9.values = var10;
                var2 = var9;
            case 123:
                var2 = var5.bind(var7)(var8, var2);
                var8 = var2.state;
                var _closure2_slot3 = var8;
                var2 = var2.executeStateUpdate;
                var _closure2_slot4 = var2;
                var7 = _closure1_slot2;
                var5 = var7.useMemo;
                var2 = new Array(2);
                var2[0] = var8;
                var2[1] = var1;
                var1 = function() { // Environment: var4
                    _fun114092: for (var _fun114092_ip = 0;;) switch (_fun114092_ip) {
                        case 0:
                            var2 = _closure2_slot3;
                            var0 = null;
                            var0 = var0 == var2;
                            var2 = undefined;
                            if (var0) {
                                _fun114092_ip = 27;
                                continue _fun114092
                            }
                        case 18:
                            var0 = _closure2_slot3;
                            var2 = var0.type;
                        case 27:
                            var0 = _closure2_slot0;
                            if (!(var2 !== var0)) {
                                _fun114092_ip = 41;
                                continue _fun114092
                            }
                        case 35:
                            var0 = new Array(0);
                            _fun114092_ip = 50;
                            continue _fun114092;
                        case 41:
                            var1 = _closure2_slot3;
                            var0 = var1.values;
                        case 50:
                            return var0;
                    }
                };
                var1 = var5.bind(var7)(var1, var2);
                var _closure2_slot5 = var1;
                var2 = _closure1_slot3;
                var1 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 3;
                var0 = var5[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.TableRowGroup;
                var0 = {};
                var5 = false;
                var0.hasIcons = var5;
                var5 = var6.map;
                var4 = function(arg0) { // Environment: var4
                    _fun114093: for (var _fun114093_ip = 0;;) switch (_fun114093_ip) {
                        case 0:
                            var0 = arg0;
                            var3 = _closure2_slot5;
                            var2 = var3.includes;
                            var1 = var0.value;
                            var6 = var2.bind(var3)(var1);
                            var4 = _closure1_slot3;
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var1 = 4;
                            var1 = var3[var1];
                            var3 = undefined;
                            var1 = var2.bind(var3)(var1);
                            var2 = var1.TableCheckboxRow;
                            var1 = {};
                            var8 = var0.label;
                            var1.label = var8;
                            var8 = var0.description;
                            var1.subLabel = var8;
                            var1.checked = var6;
                            var8 = var0.value;
                            var _closure3_slot0 = var8;
                            var7 = function(arg0) { // Environment: var7
                                _fun114094: for (var _fun114094_ip = 0;;) switch (_fun114094_ip) {
                                    case 0:
                                        var4 = _closure2_slot5;
                                        var0 = arg0;
                                        if (var0) {
                                            _fun114094_ip = 34;
                                            continue _fun114094
                                        }
                                    case 13:
                                        var1 = var4.filter;
                                        var0 = function(arg0) { // Environment: var0
                                            var1 = _closure3_slot0;
                                            var0 = arg0;
                                            var0 = var0 !== var1;
                                            return var0;
                                        };
                                        var0 = var1.bind(var4)(var0);
                                        _fun114094_ip = 72;
                                        continue _fun114094;
                                    case 34:
                                        var1 = new Array(1);
                                        var5 = 0;
                                        var7 = var1;
                                        var6 = var4;
                                        var4 = arraySpread(var7, var6, var5);
                                        var2 = _closure3_slot0;
                                        var1[var4] = var2;
                                        var2 = 1;
                                        var2 = var4 + var2;
                                        var0 = var1;
                                    case 72:
                                        var2 = _closure2_slot4;
                                        var1 = {};
                                        var3 = _closure2_slot0;
                                        var1.type = var3;
                                        var1.values = var0;
                                        var0 = undefined;
                                        var1 = var2.bind(var0)(var1);
                                        return var0;
                                }
                            };
                            var1.onPress = var7;
                            var7 = _closure2_slot5;
                            var7 = var7.length;
                            var5 = _closure2_slot2;
                            var5 = var7 >= var5;
                            if (!var5) {
                                _fun114093_ip = 131;
                                continue _fun114093
                            }
                        case 128:
                            var5 = !var6;
                        case 131:
                            var1.disabled = var5;
                            var0 = var0.value;
                            var0 = var4.bind(var3)(var2, var1, var0);
                            return var0;
                    }
                };
                var4 = var5.bind(var6)(var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/interaction_components/native/actions/CheckboxGroupActionComponent.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 6896, 5415, 8856, 2]);