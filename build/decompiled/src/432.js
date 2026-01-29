// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = metroImportDefault;
    var2 = exports;
    var1 = dependencyMap;
    var0 = require;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var1;
    var0 = ['tintColor', 'cancelButtonTintColor', 'disabledButtonTintColor', 'destructiveButtonIndex'];
    var _closure1_slot3 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 0;
    var1 = var1[var0];
    var0 = undefined;
    var1 = var4.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = {};
    var4 = function(arg0, arg1) { // Original name: showActionSheetWithOptions, environment: var3
        _fun5980: for (var _fun5980_ip = 0;;) switch (_fun5980_ip) {
            case 0:
                var5 = arg0;
                var4 = arg1;
                var3 = _closure1_slot0;
                var0 = _closure1_slot2;
                var13 = 1;
                var1 = var0[var13];
                var0 = undefined;
                var6 = var3.bind(var0)(var1);
                var3 = 'object';
                var1 = typeof var5;
                var3 = var3 === var1;
                if (!var3) {
                    _fun5980_ip = 51;
                    continue _fun5980
                }
            case 45:
                var1 = null;
                var3 = var1 !== var5;
            case 51:
                var1 = 'Options must be a valid object';
                var1 = var6.bind(var0)(var3, var1);
                var6 = _closure1_slot0;
                var1 = _closure1_slot2;
                var3 = var1[var13];
                var8 = var6.bind(var0)(var3);
                var7 = 'function';
                var3 = typeof var4;
                var7 = var7 === var3;
                var3 = 'Must provide a valid callback';
                var3 = var8.bind(var0)(var7, var3);
                var3 = var1[var13];
                var7 = var6.bind(var0)(var3);
                var3 = _closure1_slot1;
                var6 = 2;
                var1 = var1[var6];
                var3 = var3.bind(var0)(var1);
                var1 = "ActionSheetManager doesn't exist";
                var1 = var7.bind(var0)(var3, var1);
                var12 = var5.tintColor;
                var15 = var5.cancelButtonTintColor;
                var14 = var5.disabledButtonTintColor;
                var7 = var5.destructiveButtonIndex;
                var3 = _closure1_slot4;
                var1 = _closure1_slot3;
                var8 = var3.bind(var0)(var5, var1);
                var5 = global;
                var3 = var5.Array;
                var1 = var3.isArray;
                var3 = var1.bind(var3)(var7);
                var1 = var7;
                if (var3) {
                    _fun5980_ip = 226;
                    continue _fun5980
                }
            case 202:
                var1 = null;
                var9 = 'number';
                var3 = typeof var7;
                if (!(var9 === var3)) {
                    _fun5980_ip = 226;
                    continue _fun5980
                }
            case 215:
                var3 = new Array(1);
                var3[0] = var7;
                var1 = var3;
            case 226:
                var7 = _closure1_slot0;
                var3 = _closure1_slot2;
                var9 = 3;
                var10 = var3[var9];
                var11 = var7.bind(var0)(var10);
                var10 = var11.default;
                var11 = var10.bind(var11)(var12);
                var10 = var3[var9];
                var12 = var7.bind(var0)(var10);
                var10 = var12.default;
                var10 = var10.bind(var12)(var15);
                var9 = var3[var9];
                var12 = var7.bind(var0)(var9);
                var9 = var12.default;
                var9 = var9.bind(var12)(var14);
                var3 = var3[var13];
                var14 = var7.bind(var0)(var3);
                var3 = null;
                var12 = var3 == var11;
                if (var12) {
                    _fun5980_ip = 323;
                    continue _fun5980
                }
            case 312:
                var15 = 'number';
                var7 = typeof var11;
                var12 = var15 === var7;
            case 323:
                var7 = 'Unexpected color given for ActionSheetIOS.showActionSheetWithOptions tintColor';
                var7 = var14.bind(var0)(var12, var7);
                var12 = _closure1_slot0;
                var7 = _closure1_slot2;
                var7 = var7[var13];
                var14 = var12.bind(var0)(var7);
                var12 = var3 == var10;
                if (var12) {
                    _fun5980_ip = 370;
                    continue _fun5980
                }
            case 359:
                var15 = 'number';
                var7 = typeof var10;
                var12 = var15 === var7;
            case 370:
                var7 = 'Unexpected color given for ActionSheetIOS.showActionSheetWithOptions cancelButtonTintColor';
                var7 = var14.bind(var0)(var12, var7);
                var12 = _closure1_slot0;
                var7 = _closure1_slot2;
                var7 = var7[var13];
                var12 = var12.bind(var0)(var7);
                var7 = var3 == var9;
                if (var7) {
                    _fun5980_ip = 417;
                    continue _fun5980
                }
            case 406:
                var13 = 'number';
                var3 = typeof var9;
                var7 = var13 === var3;
            case 417:
                var3 = 'Unexpected color given for ActionSheetIOS.showActionSheetWithOptions disabledButtonTintColor';
                var3 = var12.bind(var0)(var7, var3);
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var3 = var3.bind(var0)(var2);
                var2 = var3.showActionSheetWithOptions;
                var7 = var5.Object;
                var6 = var7.assign;
                var5 = {};
                var5.tintColor = var11;
                var5.cancelButtonTintColor = var10;
                var5.disabledButtonTintColor = var9;
                var5.destructiveButtonIndices = var1;
                var1 = {};
                var1 = var6.bind(var7)(var1, var8, var5);
                var1 = var2.bind(var3)(var1, var4);
                return var0;
        }
    };
    var1.showActionSheetWithOptions = var4;
    var4 = function(arg0, arg1, arg2) { // Original name: showShareActionSheetWithOptions, environment: var3
        _fun5981: for (var _fun5981_ip = 0;;) switch (_fun5981_ip) {
            case 0:
                var9 = arg0;
                var5 = arg1;
                var4 = arg2;
                var6 = _closure1_slot0;
                var0 = _closure1_slot2;
                var2 = 1;
                var3 = var0[var2];
                var0 = undefined;
                var7 = var6.bind(var0)(var3);
                var6 = 'object';
                var3 = typeof var9;
                var6 = var6 === var3;
                if (!var6) {
                    _fun5981_ip = 54;
                    continue _fun5981
                }
            case 48:
                var3 = null;
                var6 = var3 !== var9;
            case 54:
                var3 = 'Options must be a valid object';
                var3 = var7.bind(var0)(var6, var3);
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var3 = var11[var2];
                var8 = var10.bind(var0)(var3);
                var6 = 'function';
                var3 = typeof var5;
                var7 = var6 === var3;
                var3 = 'Must provide a valid failureCallback';
                var3 = var8.bind(var0)(var7, var3);
                var3 = var11[var2];
                var7 = var10.bind(var0)(var3);
                var3 = typeof var4;
                var6 = var6 === var3;
                var3 = 'Must provide a valid successCallback';
                var3 = var7.bind(var0)(var6, var3);
                var2 = var11[var2];
                var7 = var10.bind(var0)(var2);
                var2 = _closure1_slot1;
                var1 = 2;
                var3 = var11[var1];
                var6 = var2.bind(var0)(var3);
                var3 = "ActionSheetManager doesn't exist";
                var3 = var7.bind(var0)(var6, var3);
                var1 = var11[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.showShareActionSheetWithOptions;
                var1 = global;
                var8 = var1.Object;
                var7 = var8.assign;
                var6 = {};
                var1 = 3;
                var1 = var11[var1];
                var11 = var10.bind(var0)(var1);
                var10 = var11.default;
                var1 = var9.tintColor;
                var1 = var10.bind(var11)(var1);
                var6.tintColor = var1;
                var1 = {};
                var1 = var7.bind(var8)(var1, var9, var6);
                var1 = var2.bind(var3)(var1, var5, var4);
                return var0;
        }
    };
    var1.showShareActionSheetWithOptions = var4;
    var3 = function() { // Original name: dismissActionSheet, environment: var3
        _fun5982: for (var _fun5982_ip = 0;;) switch (_fun5982_ip) {
            case 0:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 1;
                var3 = var2[var0];
                var0 = undefined;
                var7 = var4.bind(var0)(var3);
                var4 = _closure1_slot1;
                var3 = 2;
                var5 = var2[var3];
                var6 = var4.bind(var0)(var5);
                var5 = "ActionSheetManager doesn't exist";
                var5 = var7.bind(var0)(var6, var5);
                var2 = var2[var3];
                var2 = var4.bind(var0)(var2);
                var2 = var2.dismissActionSheet;
                var4 = 'function';
                var2 = typeof var2;
                if (!(var4 === var2)) {
                    _fun5982_ip = 106;
                    continue _fun5982
                }
            case 79:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var1 = var1[var3];
                var2 = var2.bind(var0)(var1);
                var1 = var2.dismissActionSheet;
                var1 = var1.bind(var2)();
            case 106:
                return var0;
        }
    };
    var1.dismissActionSheet = var3;
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [29, 44, 433, 38]);