// modules/age_gate/native/components/DateInput.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 3;
        var0 = var1[var0];
        var1 = undefined;
        var0 = var2.bind(var1)(var0);
        var1 = var0.bind(var1)();
        var3 = var1.set;
        var0 = var1.year;
        var2 = var0.bind(var1)();
        var0 = arg0;
        var2 = var2 - var0;
        var0 = 'year';
        var0 = var3.bind(var1)(var0, var2);
        var0 = var1.toDate;
        var0 = var0.bind(var1)();
        return var0;
    };
    var _closure1_slot6 = var0;
    var0 = function() {
        var2 = _closure1_slot6;
        var1 = undefined;
        var0 = 10;
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var _closure1_slot7 = var0;
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
    var6 = var3.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Keyboard;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot5 = var3;
    var3 = var6.forwardRef;
    var1 = function(arg0, arg1) { // Environment: var1
        _fun112587: for (var _fun112587_ip = 0;;) switch (_fun112587_ip) {
            case 0:
                var1 = arg0;
                var7 = var1.date;
                var _closure2_slot0 = var7;
                var2 = var1.onChangeDate;
                var _closure2_slot1 = var2;
                var5 = var1.label;
                var _closure2_slot2 = var5;
                var12 = var1.style;
                var4 = var1.error;
                var3 = undefined;
                var _closure2_slot3 = var3;
                var1 = function arg0() {
                    _fun112588: for (var _fun112588_ip = 0;;) switch (_fun112588_ip) {
                        case 0:
                            var3 = _closure2_slot1;
                            var0 = undefined;
                            var2 = arg0;
                            var2 = var3.bind(var0)(var2);
                            var1 = _closure2_slot3;
                            var2 = var1.current;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun112588_ip = 42;
                                continue _fun112588
                            }
                        case 32:
                            var1 = var2.blur;
                            var1 = var1.bind(var2)();
                        case 42:
                            return var0;
                    }
                };
                var _closure2_slot4 = var1;
                var6 = function() {
                    _fun112589: for (var _fun112589_ip = 0;;) switch (_fun112589_ip) {
                        case 0:
                            var2 = _closure1_slot4;
                            var0 = var2.dismiss;
                            var0 = var0.bind(var2)();
                            var4 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 4;
                            var3 = var2[var0];
                            var0 = undefined;
                            var5 = var4.bind(var0)(var3);
                            var4 = var5.openLazy;
                            var6 = _closure1_slot0;
                            var3 = 6;
                            var3 = var2[var3];
                            var6 = var6.bind(var0)(var3);
                            var3 = 5;
                            var3 = var2[var3];
                            var2 = var2.paths;
                            var3 = var6.bind(var0)(var3, var2);
                            var2 = {};
                            var6 = _closure2_slot4;
                            var2.onSubmit = var6;
                            var6 = _closure2_slot2;
                            var2.title = var6;
                            var6 = _closure2_slot0;
                            var7 = null;
                            var9 = var7 == var6;
                            var6 = undefined;
                            if (var9) {
                                _fun112589_ip = 130;
                                continue _fun112589
                            }
                        case 116:
                            var9 = _closure2_slot0;
                            var8 = var9.toDate;
                            var6 = var8.bind(var9)();
                        case 130:
                            if (!(var7 == var6)) {
                                _fun112589_ip = 142;
                                continue _fun112589
                            }
                        case 134:
                            var7 = _closure1_slot7;
                            var6 = var7.bind(var0)();
                        case 142:
                            var2.startDate = var6;
                            var6 = _closure1_slot6;
                            var1 = 3;
                            var1 = var6.bind(var0)(var1);
                            var2.maximumDate = var1;
                            var1 = true;
                            var2.requireDateChanged = var1;
                            var1 = 'DatePicker';
                            var1 = var4.bind(var5)(var3, var1, var2);
                            return var0;
                    }
                };
                var _closure2_slot5 = var6;
                var9 = _closure1_slot3;
                var1 = var9.useRef;
                var8 = null;
                var10 = var1.bind(var9)(var8);
                _closure2_slot3 = var10;
                var2 = var9.useImperativeHandle;
                var1 = arg1;
                var0 = function() { // Environment: var0
                    var0 = {};
                    var1 = function() {
                        var1 = _closure2_slot5;
                        var0 = undefined;
                        var1 = var1.bind(var0)();
                        return var0;
                    };
                    var0.focus = var1;
                    return var0;
                };
                var0 = var2.bind(var9)(var1, var0);
                var1 = var8 == var7;
                var0 = undefined;
                if (var1) {
                    _fun112587_ip = 140;
                    continue _fun112587
                }
            case 126:
                var2 = var7.format;
                var1 = 'L';
                var0 = var2.bind(var7)(var1);
            case 140:
                var1 = var8 != var0;
                var7 = undefined;
                if (!var1) {
                    _fun112587_ip = 152;
                    continue _fun112587
                }
            case 149:
                var7 = var0;
            case 152:
                var1 = _closure1_slot1;
                var13 = _closure1_slot2;
                var0 = 3;
                var0 = var13[var0];
                var2 = var1.bind(var3)(var0);
                var0 = _closure1_slot7;
                var0 = var0.bind(var3)();
                var9 = var2.bind(var3)(var0);
                var2 = var9.format;
                var0 = 'L';
                var9 = var2.bind(var9)(var0);
                var2 = _closure1_slot5;
                var0 = 7;
                var0 = var13[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var0.style = var12;
                var0.ref = var10;
                var13 = var8 != var7;
                var10 = '';
                var12 = var10;
                if (!var13) {
                    _fun112587_ip = 242;
                    continue _fun112587
                }
            case 239:
                var12 = var7;
            case 242:
                var0.value = var12;
                var0.placeholder = var9;
                var12 = 'next';
                var0.returnKeyType = var12;
                var12 = 'none';
                var0.textContentType = var12;
                var0.autoCapitalize = var12;
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var11 = 8;
                var11 = var13[var11];
                var11 = var12.bind(var3)(var11);
                var11 = var11.ClearButtonVisibility;
                var11 = var11.NEVER;
                var0.clearButtonVisibility = var11;
                var11 = false;
                var0.editable = var11;
                var11 = true;
                var0.forceAccessibleContainer = var11;
                if (!(var8 != var7)) {
                    _fun112587_ip = 332;
                    continue _fun112587
                }
            case 329:
                var9 = var7;
            case 332:
                var7 = global;
                var7 = var7.HermesInternal;
                var8 = var7.concat;
                var7 = ', ';
                var7 = var8.bind(var10)(var5, var7, var9);
                var0.accessibilityLabel = var7;
                var0.onPress = var6;
                var0.label = var5;
                var0.error = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/age_gate/native/components/DateInput.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 3045, 3278, 8117, 1307, 5882, 5407, 2]);