// design/components/TableRow/native/TableRadioGroup.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var3);
    var0 = 0;
    var4 = var6[var0];
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var4);
    var _closure1_slot2 = var3;
    var3 = 1;
    var4 = var6[var3];
    var3 = metroImportAll;
    var7 = var3.bind(var0)(var4);
    var _closure1_slot3 = var7;
    var3 = 2;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var8 = var3.NOOP;
    var3 = 3;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot4 = var3;
    var4 = var7.createContext;
    var3 = {};
    var9 = null;
    var3.selectedValue = var9;
    var3.onSelect = var8;
    var3 = var4.bind(var7)(var3);
    var _closure1_slot5 = var3;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/TableRow/native/TableRadioGroup.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2.TableRadioGroupContext = var3;
    var1 = function arg0() {
        _fun48077: for (var _fun48077_ip = 0;;) switch (_fun48077_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.children;
                var4 = var0.defaultValue;
                var1 = var0.onChange;
                var _closure2_slot0 = var1;
                var10 = var0.title;
                var8 = var0.hasIcons;
                var3 = undefined;
                if (!(var8 === var3)) {
                    _fun48077_ip = 45;
                    continue _fun48077
                }
            case 43:
                var8 = true;
            case 45:
                var11 = var0.groupRef;
                var _closure2_slot1 = var3;
                var _closure2_slot2 = var3;
                var _closure2_slot3 = var3;
                var _closure2_slot4 = var3;
                var7 = _closure1_slot3;
                var2 = var7.useState;
                var5 = var2.bind(var7)(var4);
                var4 = _closure1_slot2;
                var2 = 2;
                var4 = var4.bind(var3)(var5, var2);
                var2 = 0;
                var12 = var4[var2];
                _closure2_slot1 = var12;
                var2 = 1;
                var2 = var4[var2];
                _closure2_slot2 = var2;
                var5 = var7.useImperativeHandle;
                var4 = new Array(2);
                var4[0] = var1;
                var4[1] = var12;
                var2 = function() { // Environment: var6
                    var0 = {};
                    var2 = function arg0() {
                        _fun48079: for (var _fun48079_ip = 0;;) switch (_fun48079_ip) {
                            case 0:
                                var2 = arg0;
                                var3 = _closure2_slot2;
                                var0 = undefined;
                                var3 = var3.bind(var0)(var2);
                                var4 = _closure2_slot0;
                                var3 = null;
                                if (!(var3 != var4)) {
                                    _fun48079_ip = 36;
                                    continue _fun48079
                                }
                            case 27:
                                var1 = _closure2_slot0;
                                var1 = var1.bind(var0)(var2);
                            case 36:
                                return var0;
                        }
                    };
                    var0.setValue = var2;
                    var1 = function() {
                        var0 = _closure2_slot1;
                        return var0;
                    };
                    var0.getValue = var1;
                    return var0;
                };
                var2 = var5.bind(var7)(var11, var2, var4);
                var4 = var7.useContext;
                var5 = _closure1_slot0;
                var11 = _closure1_slot1;
                var2 = 4;
                var2 = var11[var2];
                var2 = var5.bind(var3)(var2);
                var2 = var2.RedesignCompatContext;
                var2 = var4.bind(var7)(var2);
                _closure2_slot3 = var2;
                var4 = var7.useCallback;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function(arg0) { // Environment: var6
                    _fun48081: for (var _fun48081_ip = 0;;) switch (_fun48081_ip) {
                        case 0:
                            var2 = arg0;
                            var3 = _closure2_slot2;
                            var0 = undefined;
                            var3 = var3.bind(var0)(var2);
                            var4 = _closure2_slot0;
                            var3 = null;
                            if (!(var3 != var4)) {
                                _fun48081_ip = 36;
                                continue _fun48081
                            }
                        case 27:
                            var1 = _closure2_slot0;
                            var1 = var1.bind(var0)(var2);
                        case 36:
                            return var0;
                    }
                };
                var1 = var4.bind(var7)(var1, var2);
                _closure2_slot4 = var1;
                var4 = var7.useMemo;
                var2 = new Array(2);
                var2[0] = var12;
                var2[1] = var1;
                var1 = function() { // Environment: var6
                    var0 = {};
                    var2 = _closure2_slot1;
                    var0.selectedValue = var2;
                    var1 = _closure2_slot4;
                    var0.onSelect = var1;
                    return var0;
                };
                var4 = var4.bind(var7)(var1, var2);
                var2 = _closure1_slot4;
                var0 = _closure1_slot5;
                var1 = var0.Provider;
                var0 = {};
                var0.value = var4;
                var4 = 5;
                var4 = var11[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.TableRowGroup;
                var4 = {};
                var11 = 'radiogroup';
                var4.accessibilityRole = var11;
                var4.title = var10;
                var4.hasIcons = var8;
                var8 = var7.Children;
                var7 = var8.map;
                var6 = function(arg0) { // Environment: var6
                    _fun48083: for (var _fun48083_ip = 0;;) switch (_fun48083_ip) {
                        case 0:
                            var1 = arg0;
                            var3 = _closure1_slot3;
                            var2 = var3.isValidElement;
                            var2 = var2.bind(var3)(var1);
                            if (!var2) {
                                _fun48083_ip = 61;
                                continue _fun48083
                            }
                        case 24:
                            var2 = var1.type;
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var0 = 6;
                            var3 = var3[var0];
                            var0 = undefined;
                            var0 = var4.bind(var0)(var3);
                            var0 = var0.TableRadioRow;
                            if (!(var2 !== var0)) {
                                _fun48083_ip = 73;
                                continue _fun48083
                            }
                        case 61:
                            var2 = _closure2_slot3;
                            var0 = null;
                            if (!var2) {
                                _fun48083_ip = 76;
                                continue _fun48083
                            }
                        case 73:
                            var0 = var1;
                        case 76:
                            return var0;
                    }
                };
                var6 = var7.bind(var8)(var9, var6);
                var4.children = var6;
                var4 = var2.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.TableRadioGroup = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 660, 33, 4862, 5327, 5385, 2]);