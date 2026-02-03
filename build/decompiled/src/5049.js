// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 0;
    var3 = var3[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.useMemo;
    var _closure1_slot3 = var3;
    var1 = function arg0() {
        var2 = arg0;
        var7 = var2.index;
        var _closure2_slot0 = var7;
        var6 = var2.snapPoints;
        var _closure2_slot1 = var6;
        var0 = var2.enableDynamicSizing;
        var _closure2_slot2 = var0;
        var5 = var2.topInset;
        var _closure2_slot3 = var5;
        var4 = var2.bottomInset;
        var _closure2_slot4 = var4;
        var3 = _closure1_slot3;
        var2 = new Array(5);
        var2[0] = var7;
        var2[1] = var6;
        var2[2] = var5;
        var2[3] = var4;
        var2[4] = var0;
        var0 = undefined;
        var1 = function() { // Environment: var1
            _fun45425: for (var _fun45425_ip = 0;;) switch (_fun45425_ip) {
                case 0:
                    var0 = _closure2_slot1;
                    if (var0) {
                        _fun45425_ip = 16;
                        continue _fun45425
                    }
                case 10:
                    var3 = new Array(0);
                    _fun45425_ip = 52;
                    continue _fun45425;
                case 16:
                    var2 = _closure2_slot1;
                    var0 = 'get';
                    var0 = var0 in var2;
                    var4 = _closure2_slot1;
                    if (var0) {
                        _fun45425_ip = 40;
                        continue _fun45425
                    }
                case 35:
                    var0 = var4;
                    _fun45425_ip = 49;
                    continue _fun45425;
                case 40:
                    var2 = var4.get;
                    var0 = var2.bind(var4)();
                case 49:
                    var3 = var0;
                case 52:
                    var6 = _closure1_slot1;
                    var0 = _closure1_slot2;
                    var5 = 1;
                    var4 = var0[var5];
                    var0 = undefined;
                    var7 = var6.bind(var0)(var4);
                    var6 = var3;
                    if (var6) {
                        _fun45425_ip = 87;
                        continue _fun45425
                    }
                case 83:
                    var6 = _closure2_slot2;
                case 87:
                    var4 = "'snapPoints' was not provided! please provide at least one snap point.";
                    var4 = var7.bind(var0)(var6, var4);
                    var6 = var3.map;
                    var4 = function(arg0) { // Environment: var4
                        _fun45426: for (var _fun45426_ip = 0;;) switch (_fun45426_ip) {
                            case 0:
                                var6 = arg0;
                                var1 = 'number';
                                var0 = typeof var6;
                                var4 = var6;
                                if (!(var1 !== var0)) {
                                    _fun45426_ip = 59;
                                    continue _fun45426
                                }
                            case 17:
                                var0 = global;
                                var3 = var0.Number;
                                var2 = var3.parseInt;
                                var5 = var6.replace;
                                var1 = '%';
                                var0 = '';
                                var1 = var5.bind(var6)(var1, var0);
                                var0 = 10;
                                var4 = var2.bind(var3)(var1, var0);
                            case 59:
                                var3 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var0 = 1;
                                var2 = var2[var0];
                                var0 = undefined;
                                var3 = var3.bind(var0)(var2);
                                var2 = 0;
                                var2 = var4 > var2;
                                if (var2) {
                                    _fun45426_ip = 123;
                                    continue _fun45426
                                }
                            case 93:
                                var5 = _closure1_slot0;
                                var7 = _closure1_slot2;
                                var1 = 2;
                                var1 = var7[var1];
                                var1 = var5.bind(var0)(var1);
                                var1 = var1.INITIAL_SNAP_POINT;
                                var2 = var4 === var1;
                            case 123:
                                var1 = global;
                                var1 = var1.HermesInternal;
                                var5 = var1.concat;
                                var4 = "Snap point '";
                                var1 = "' is invalid. if you want to allow user to close the sheet, Please use 'enablePanDownToClose' prop.";
                                var1 = var5.bind(var4)(var6, var1);
                                var1 = var3.bind(var0)(var2, var1);
                                return var0;
                        }
                    };
                    var4 = var6.bind(var3)(var4);
                    var6 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var4 = var4[var5];
                    var7 = var6.bind(var0)(var4);
                    var4 = 'value';
                    var6 = var4 in var3;
                    if (var6) {
                        _fun45425_ip = 155;
                        continue _fun45425
                    }
                case 144:
                    var8 = var3.length;
                    var4 = 0;
                    var6 = var8 > var4;
                case 155:
                    if (var6) {
                        _fun45425_ip = 162;
                        continue _fun45425
                    }
                case 158:
                    var6 = _closure2_slot2;
                case 162:
                    var4 = "'snapPoints' was provided with no points! please provide at least one snap point.";
                    var4 = var7.bind(var0)(var6, var4);
                    var6 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var4 = var4[var5];
                    var8 = var6.bind(var0)(var4);
                    var6 = _closure2_slot0;
                    var4 = 'number';
                    var6 = typeof var6;
                    var7 = var4 === var6;
                    if (var7) {
                        _fun45425_ip = 217;
                        continue _fun45425
                    }
                case 209:
                    var6 = _closure2_slot0;
                    var7 = var0 === var6;
                case 217:
                    var6 = "'index' was provided but with wrong type ! expected type is a number.";
                    var6 = var8.bind(var0)(var7, var6);
                    var7 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var6 = var6[var5];
                    var7 = var7.bind(var0)(var6);
                    var6 = _closure2_slot2;
                    if (var6) {
                        _fun45425_ip = 264;
                        continue _fun45425
                    }
                case 253:
                    var8 = _closure2_slot0;
                    var8 = typeof var8;
                    var6 = var4 !== var8;
                case 264:
                    if (var6) {
                        _fun45425_ip = 304;
                        continue _fun45425
                    }
                case 267:
                    var9 = _closure2_slot0;
                    var8 = -1;
                    var8 = var9 >= var8;
                    if (!var8) {
                        _fun45425_ip = 301;
                        continue _fun45425
                    }
                case 284:
                    var10 = _closure2_slot0;
                    var9 = var3.length;
                    var9 = var9 - var5;
                    var8 = var10 <= var9;
                case 301:
                    var6 = var8;
                case 304:
                    var3 = var3.length;
                    var8 = var3 - var5;
                    var3 = "'index' was provided but out of the provided snap points range! expected value to be between -1, ";
                    var3 = var3 + var8;
                    var3 = var7.bind(var0)(var6, var3);
                    var6 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var3 = var3[var5];
                    var7 = var6.bind(var0)(var3);
                    var3 = _closure2_slot3;
                    var3 = typeof var3;
                    var6 = var4 === var3;
                    if (var6) {
                        _fun45425_ip = 368;
                        continue _fun45425
                    }
                case 360:
                    var3 = _closure2_slot3;
                    var6 = var0 === var3;
                case 368:
                    var3 = "'topInset' was provided but with wrong type ! expected type is a number.";
                    var3 = var7.bind(var0)(var6, var3);
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var2 = var2[var5];
                    var3 = var3.bind(var0)(var2);
                    var2 = _closure2_slot4;
                    var2 = typeof var2;
                    var2 = var4 === var2;
                    if (var2) {
                        _fun45425_ip = 419;
                        continue _fun45425
                    }
                case 411:
                    var1 = _closure2_slot4;
                    var2 = var0 === var1;
                case 419:
                    var1 = "'bottomInset' was provided but with wrong type ! expected type is a number.";
                    var1 = var3.bind(var0)(var2, var1);
                    return var0;
            }
        };
        var1 = var3.bind(var0)(var1, var2);
        return var0;
    };
    var2.usePropsValidator = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 44, 4937]);