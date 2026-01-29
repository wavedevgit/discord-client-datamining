// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var3 = dependencyMap;
    var0 = metroImportAll;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var3;
    var0 = function(arg0, arg1, arg2, arg3) { // Original name: accumulateDifferences, environment: var1
        _fun1601: for (var _fun1601_ip = 0;;) switch (_fun1601_ip) {
            case 0:
                var17 = arg0;
                var16 = arg1;
                var15 = arg2;
                var14 = arg3;
                var12 = var15;
                var0 = undefined;
                var7 = 'unequal';
                var6 = 1;
                var5 = null;
                var4 = 'missing';
                var3 = undefined;
                var2 = undefined;
                var1 = undefined;
                for (var9 in var12)
                    case 52: {
                        var21 = var1;
                        case 67: var22 = var9;
                        var25 = var15[var22];
                        var18 = var14.hasOwnProperty;
                        var18 = var18.bind(var14)(var22);
                        if (var18) {
                            _fun1601_ip = 151;
                            continue _fun1601
                        }
                        case 88: var19 = var17.push;
                        var18 = {};
                        var26 = new Array(0);
                        var24 = var26.concat;
                        var20 = _closure1_slot2;
                        var23 = var20.bind(var0)(var16);
                        var20 = new Array(1);
                        var20[0] = var22;
                        var20 = var24.bind(var26)(var23, var20);
                        var18.path = var20;
                        var18.type = var4;
                        var18.nativeValue = var25;
                        var18 = var19.bind(var17)(var18);
                        var1 = var21;
                        _fun1601_ip = 52;
                        continue _fun1601;
                        case 151: var20 = var14[var22];
                        var18 = _closure1_slot4;
                        var19 = var18.bind(var0)(var25);
                        if (!(var5 != var19)) {
                            _fun1601_ip = 187;
                            continue _fun1601
                        }
                        case 168: var18 = _closure1_slot4;
                        var18 = var18.bind(var0)(var20);
                        var21 = var18;
                        if (!(var5 == var21)) {
                            _fun1601_ip = 313;
                            continue _fun1601
                        }
                        case 187: var23 = var25 === var20;
                        if (var23) {
                            _fun1601_ip = 221;
                            continue _fun1601
                        }
                        case 194: var26 = _closure1_slot0;
                        var24 = _closure1_slot1;
                        var24 = var24[var6];
                        var26 = var26.bind(var0)(var24);
                        var24 = var26.enableNativeCSSParsing;
                        var23 = var24.bind(var26)();
                        case 221: var3 = var20;
                        var2 = var19;
                        var1 = var21;
                        if (var23) {
                            _fun1601_ip = 52;
                            continue _fun1601
                        }
                        case 236: var24 = var17.push;
                        var23 = {};
                        var29 = new Array(0);
                        var28 = var29.concat;
                        var26 = _closure1_slot2;
                        var27 = var26.bind(var0)(var16);
                        var26 = new Array(1);
                        var26[0] = var22;
                        var26 = var28.bind(var29)(var27, var26);
                        var23.path = var26;
                        var23.type = var7;
                        var23.nativeValue = var25;
                        var23.staticValue = var20;
                        var23 = var24.bind(var17)(var23);
                        var3 = var20;
                        var2 = var19;
                        var1 = var21;
                        _fun1601_ip = 52;
                        continue _fun1601;
                        case 313: var21 = var16.push;
                        var21 = var21.bind(var16)(var22);
                        var21 = _closure1_slot3;
                        var35 = undefined;
                        var34 = var17;
                        var33 = var16;
                        var32 = var19;
                        var31 = var18;
                        var21 = var35[var21](var34, var33, var32, var31, var30);
                        var21 = var16.pop;
                        var21 = var21.bind(var16)();
                        var3 = var20;
                        var2 = var19;
                        var1 = var18;
                        _fun1601_ip = 52;
                        continue _fun1601;
                    }
            case 369:
                return var0;
        }
    };
    var _closure1_slot3 = var0;
    var0 = function(arg0) { // Original name: ifObject, environment: var1
        _fun1602: for (var _fun1602_ip = 0;;) switch (_fun1602_ip) {
            case 0:
                var1 = arg0;
                var4 = 'object';
                var2 = typeof var1;
                var0 = null;
                if (!(var4 === var2)) {
                    _fun1602_ip = 42;
                    continue _fun1602
                }
            case 16:
                var2 = global;
                var4 = var2.Array;
                var2 = var4.isArray;
                var2 = var2.bind(var4)(var1);
                var0 = null;
                if (var2) {
                    _fun1602_ip = 42;
                    continue _fun1602
                }
            case 39:
                var0 = var1;
            case 42:
                return var0;
        }
    };
    var _closure1_slot4 = var0;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var4);
    var0 = 0;
    var4 = var3[var0];
    var3 = arg2;
    var0 = undefined;
    var3 = var3.bind(var0)(var4);
    var _closure1_slot2 = var3;
    var3 = function(arg0, arg1, arg2) { // Original name: validate, environment: var1
        _fun1603: for (var _fun1603_ip = 0;;) switch (_fun1603_ip) {
            case 0:
                var2 = arg1;
                var0 = arg2;
                var1 = new Array(0);
                var5 = _closure1_slot3;
                var4 = {};
                var3 = var2.bubblingEventTypes;
                var4.bubblingEventTypes = var3;
                var3 = var2.directEventTypes;
                var4.directEventTypes = var3;
                var3 = var2.uiViewClassName;
                var4.uiViewClassName = var3;
                var2 = var2.validAttributes;
                var4.validAttributes = var2;
                var3 = {};
                var2 = var0.bubblingEventTypes;
                var3.bubblingEventTypes = var2;
                var2 = var0.directEventTypes;
                var3.directEventTypes = var2;
                var2 = var0.uiViewClassName;
                var3.uiViewClassName = var2;
                var0 = var0.validAttributes;
                var3.validAttributes = var0;
                var10 = undefined;
                var8 = new Array(0);
                var9 = var1;
                var7 = var4;
                var6 = var3;
                var0 = var10[var5](var9, var8, var7, var6, var5);
                var2 = var1.length;
                var0 = 0;
                if (!(var0 !== var2)) {
                    _fun1603_ip = 156;
                    continue _fun1603
                }
            case 139:
                var0 = {};
                var2 = 'invalid';
                var0.type = var2;
                var0.differences = var1;
                _fun1603_ip = 169;
                continue _fun1603;
            case 156:
                var1 = {};
                var2 = 'valid';
                var1.type = var2;
                var0 = var1;
            case 169:
                return var0;
        }
    };
    var2.validate = var3;
    var1 = function(arg0, arg1) { // Original name: stringifyValidationResult, environment: var1
        var0 = arg1;
        var5 = var0.differences;
        var0 = global;
        var0 = var0.HermesInternal;
        var3 = var0.concat;
        var2 = "StaticViewConfigValidator: Invalid static view config for '";
        var1 = arg0;
        var0 = "'.";
        var0 = var3.bind(var2)(var1, var0);
        var3 = new Array(2);
        var3[0] = var0;
        var0 = '';
        var3[1] = var0;
        var2 = var3.concat;
        var4 = _closure1_slot2;
        var1 = var5.map;
        var0 = function(arg0) { // Environment: var0
            _fun1605: for (var _fun1605_ip = 0;;) switch (_fun1605_ip) {
                case 0:
                    var0 = arg0;
                    var1 = var0.type;
                    var2 = var0.path;
                    var0 = 'missing';
                    if (!(var0 !== var1)) {
                        _fun1605_ip = 83;
                        continue _fun1605
                    }
                case 22:
                    var0 = 'unequal';
                    if (!(var0 !== var1)) {
                        _fun1605_ip = 36;
                        continue _fun1605
                    }
                case 32:
                    var0 = undefined;
                    return var0;
                case 36:
                    var1 = var2.join;
                    var0 = '.';
                    var4 = var1.bind(var2)(var0);
                    var0 = global;
                    var0 = var0.HermesInternal;
                    var3 = var0.concat;
                    var1 = "- '";
                    var0 = "' is the wrong value.";
                    var0 = var3.bind(var1)(var4, var0);
                    return var0;
                case 83:
                    var1 = var2.join;
                    var0 = '.';
                    var3 = var1.bind(var2)(var0);
                    var0 = global;
                    var0 = var0.HermesInternal;
                    var2 = var0.concat;
                    var1 = "- '";
                    var0 = "' is missing.";
                    var0 = var2.bind(var1)(var3, var0);
                    return var0;
            }
        };
        var1 = var1.bind(var5)(var0);
        var0 = undefined;
        var1 = var4.bind(var0)(var1);
        var0 = [''];
        var2 = var2.bind(var3)(var1, var0);
        var1 = var2.join;
        var0 = '\n';
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.stringifyValidationResult = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [65, 79]);