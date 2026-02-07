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
        _fun48753: for (var _fun48753_ip = 0;;) switch (_fun48753_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.children;
                var4 = var0.value;
                var16 = var0.defaultValue;
                var1 = var0.onChange;
                var _closure2_slot0 = var1;
                var11 = var0.title;
                var10 = var0.description;
                var8 = var0.hasIcons;
                var3 = undefined;
                if (!(var8 === var3)) {
                    _fun48753_ip = 55;
                    continue _fun48753
                }
            case 53:
                var8 = true;
            case 55:
                var12 = var0.groupRef;
                var _closure2_slot2 = var3;
                var _closure2_slot3 = var3;
                var _closure2_slot4 = var3;
                var _closure2_slot5 = var3;
                var14 = var3 !== var4;
                var _closure2_slot1 = var14;
                var7 = _closure1_slot3;
                var5 = var7.useState;
                var13 = null;
                var2 = null;
                if (var14) {
                    _fun48753_ip = 119;
                    continue _fun48753
                }
            case 104:
                var17 = var13 != var16;
                var15 = null;
                if (!var17) {
                    _fun48753_ip = 116;
                    continue _fun48753
                }
            case 113:
                var15 = var16;
            case 116:
                var2 = var15;
            case 119:
                var7 = var5.bind(var7)(var2);
                var5 = _closure1_slot2;
                var2 = 2;
                var7 = var5.bind(var3)(var7, var2);
                var2 = 0;
                var2 = var7[var2];
                var5 = 1;
                var5 = var7[var5];
                _closure2_slot2 = var5;
                if (!var14) {
                    _fun48753_ip = 160;
                    continue _fun48753
                }
            case 157:
                var2 = var4;
            case 160:
                var4 = var13 != var2;
                var13 = null;
                if (!var4) {
                    _fun48753_ip = 172;
                    continue _fun48753
                }
            case 169:
                var13 = var2;
            case 172:
                _closure2_slot3 = var13;
                var7 = _closure1_slot3;
                var5 = var7.useImperativeHandle;
                var4 = new Array(3);
                var4[0] = var14;
                var4[1] = var1;
                var4[2] = var13;
                var2 = function() { // Environment: var6
                    var0 = {};
                    var2 = function arg0() {
                        _fun48755: for (var _fun48755_ip = 0;;) switch (_fun48755_ip) {
                            case 0:
                                var2 = arg0;
                                var1 = _closure2_slot1;
                                if (var1) {
                                    _fun48755_ip = 24;
                                    continue _fun48755
                                }
                            case 13:
                                var3 = _closure2_slot2;
                                var1 = undefined;
                                var1 = var3.bind(var1)(var2);
                            case 24:
                                var3 = _closure2_slot0;
                                var1 = null;
                                if (!(var1 != var3)) {
                                    _fun48755_ip = 45;
                                    continue _fun48755
                                }
                            case 34:
                                var1 = _closure2_slot0;
                                var0 = undefined;
                                var0 = var1.bind(var0)(var2);
                            case 45:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.setValue = var2;
                    var1 = function() {
                        var0 = _closure2_slot3;
                        return var0;
                    };
                    var0.getValue = var1;
                    return var0;
                };
                var2 = var5.bind(var7)(var12, var2, var4);
                var4 = var7.useContext;
                var5 = _closure1_slot0;
                var12 = _closure1_slot1;
                var2 = 4;
                var2 = var12[var2];
                var2 = var5.bind(var3)(var2);
                var2 = var2.RedesignCompatContext;
                var2 = var4.bind(var7)(var2);
                _closure2_slot4 = var2;
                var4 = var7.useCallback;
                var2 = new Array(2);
                var2[0] = var14;
                var2[1] = var1;
                var1 = function(arg0) { // Environment: var6
                    _fun48757: for (var _fun48757_ip = 0;;) switch (_fun48757_ip) {
                        case 0:
                            var2 = arg0;
                            var1 = _closure2_slot1;
                            if (var1) {
                                _fun48757_ip = 24;
                                continue _fun48757
                            }
                        case 13:
                            var3 = _closure2_slot2;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                        case 24:
                            var3 = _closure2_slot0;
                            var1 = null;
                            if (!(var1 != var3)) {
                                _fun48757_ip = 45;
                                continue _fun48757
                            }
                        case 34:
                            var1 = _closure2_slot0;
                            var0 = undefined;
                            var0 = var1.bind(var0)(var2);
                        case 45:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var4.bind(var7)(var1, var2);
                _closure2_slot5 = var1;
                var4 = var7.useMemo;
                var2 = new Array(2);
                var2[0] = var13;
                var2[1] = var1;
                var1 = function() { // Environment: var6
                    var0 = {};
                    var2 = _closure2_slot3;
                    var0.selectedValue = var2;
                    var1 = _closure2_slot5;
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
                var4 = var12[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.TableRowGroup;
                var4 = {};
                var12 = 'radiogroup';
                var4.accessibilityRole = var12;
                var4.title = var11;
                var4.description = var10;
                var4.hasIcons = var8;
                var8 = var7.Children;
                var7 = var8.map;
                var6 = function(arg0) { // Environment: var6
                    _fun48759: for (var _fun48759_ip = 0;;) switch (_fun48759_ip) {
                        case 0:
                            var1 = arg0;
                            var3 = _closure1_slot3;
                            var2 = var3.isValidElement;
                            var2 = var2.bind(var3)(var1);
                            if (!var2) {
                                _fun48759_ip = 61;
                                continue _fun48759
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
                                _fun48759_ip = 73;
                                continue _fun48759
                            }
                        case 61:
                            var2 = _closure2_slot4;
                            var0 = null;
                            if (!var2) {
                                _fun48759_ip = 76;
                                continue _fun48759
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 660, 33, 4899, 5415, 5473, 2]);