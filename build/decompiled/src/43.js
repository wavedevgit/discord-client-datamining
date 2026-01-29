// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = metroImportDefault;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var4 = global;
    var6 = var4.Object;
    var5 = var6.defineProperty;
    var3 = {};
    var2 = true;
    var3.value = var2;
    var2 = '__esModule';
    var2 = var5.bind(var6)(var1, var2, var3);
    var3 = {};
    var _closure1_slot2 = var3;
    var2 = {};
    var _closure1_slot3 = var2;
    var5 = var4.Map;
    var6 = var5.prototype;
    var6 = Object.create(var6, {
        constructor: {
            value: var5
        }
    });
    var10 = var6;
    var5 = new var10[var5](var9);
    var5 = var5 instanceof Object ? var5 : var6;
    var _closure1_slot4 = var5;
    var4 = var4.Map;
    var5 = var4.prototype;
    var5 = Object.create(var5, {
        constructor: {
            value: var4
        }
    });
    var10 = var5;
    var4 = new var10[var4](var9);
    var4 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot5 = var4;
    var1.customBubblingEventTypes = var3;
    var1.customDirectEventTypes = var2;
    var2 = function(arg0, arg1) { // Original name: register, environment: var0
        _fun1296: for (var _fun1296_ip = 0;;) switch (_fun1296_ip) {
            case 0:
                var0 = arg0;
                var3 = arg1;
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var2 = 0;
                var6 = var5[var2];
                var7 = undefined;
                var9 = var4.bind(var7)(var6);
                var8 = _closure1_slot4;
                var6 = var8.has;
                var6 = var6.bind(var8)(var0);
                var8 = !var6;
                var6 = 'Tried to register two views with the same name %s';
                var6 = var9.bind(var7)(var8, var6, var0);
                var2 = var5[var2];
                var6 = var4.bind(var7)(var2);
                var4 = typeof var3;
                var5 = 'null';
                var2 = null;
                if (!(var2 !== var3)) {
                    _fun1296_ip = 85;
                    continue _fun1296
                }
            case 82:
                var5 = var4;
            case 85:
                var2 = 'function';
                var13 = var2 === var4;
                var12 = 'View config getter callback for component `%s` must be a function (received `%s`)';
                var14 = undefined;
                var11 = var0;
                var10 = var5;
                var2 = var14[var6](var13, var12, var11, var10, var9);
                var2 = _closure1_slot4;
                var1 = var2.set;
                var1 = var1.bind(var2)(var0, var3);
                return var0;
        }
    };
    var1.register = var2;
    var0 = function(arg0) { // Original name: get, environment: var0
        _fun1297: for (var _fun1297_ip = 0;;) switch (_fun1297_ip) {
            case 0:
                var5 = arg0;
                var1 = _closure1_slot5;
                var0 = var1.get;
                var0 = var0.bind(var1)(var5);
                var4 = null;
                if (!(var4 == var0)) {
                    _fun1297_ip = 360;
                    continue _fun1297
                }
            case 29:
                var3 = _closure1_slot4;
                var1 = var3.get;
                var1 = var1.bind(var3)(var5);
                var6 = typeof var1;
                var3 = 'function';
                if (!(var3 !== var6)) {
                    _fun1297_ip = 171;
                    continue _fun1297
                }
            case 54:
                var8 = _closure1_slot0;
                var7 = _closure1_slot1;
                var3 = 0;
                var7 = var7[var3];
                var10 = undefined;
                var9 = var8.bind(var10)(var7);
                var8 = 'null';
                if (!(var4 !== var1)) {
                    _fun1297_ip = 86;
                    continue _fun1297
                }
            case 83:
                var8 = var6;
            case 86:
                var7 = var5[var3];
                var6 = '';
                var12 = 'string';
                var11 = typeof var7;
                var7 = var6;
                if (!(var12 === var11)) {
                    _fun1297_ip = 148;
                    continue _fun1297
                }
            case 108:
                var12 = /[a-z]/;
                var11 = var12.test;
                var3 = var5[var3];
                var3 = var11.bind(var12)(var3);
                var7 = var6;
                if (!var3) {
                    _fun1297_ip = 148;
                    continue _fun1297
                }
            case 142:
                var7 = ' Make sure to start component names with a capital letter.';
            case 148:
                var19 = false;
                var18 = 'View config getter callback for component `%s` must be a function (received `%s`).%s';
                var20 = undefined;
                var17 = var5;
                var16 = var8;
                var15 = var7;
                var3 = var20[var9](var19, var18, var17, var16, var15, var14);
            case 171:
                var7 = undefined;
                var1 = var1.bind(var7)();
                var6 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 0;
                var3 = var8[var3];
                var6 = var6.bind(var7)(var3);
                var3 = 'View config not found for component `%s`';
                var3 = var6.bind(var7)(var1, var3, var5);
                var11 = var1.bubblingEventTypes;
                var10 = var1.directEventTypes;
                if (!(var4 != var11)) {
                    _fun1297_ip = 274;
                    continue _fun1297
                }
            case 225:
                var8 = var11;
                for (var3 in var8)
                    case 236: {
                        case 245: var14 = var3;
                        var12 = _closure1_slot2;
                        var12 = var12[var14];
                        if (var4 != var12) {
                            _fun1297_ip = 236;
                            continue _fun1297
                        }
                        case 260: var13 = _closure1_slot2;
                        var12 = var11[var14];
                        var13[var14] = var12;
                        _fun1297_ip = 236;
                        continue _fun1297;
                    }
            case 274:
                if (!(var4 != var10)) {
                    _fun1297_ip = 327;
                    continue _fun1297
                }
            case 278:
                var8 = var10;
                for (var3 in var8)
                    case 289: {
                        case 298: var13 = var3;
                        var11 = _closure1_slot3;
                        var11 = var11[var13];
                        if (var4 != var11) {
                            _fun1297_ip = 289;
                            continue _fun1297
                        }
                        case 313: var12 = _closure1_slot3;
                        var11 = var10[var13];
                        var12[var13] = var11;
                        _fun1297_ip = 289;
                        continue _fun1297;
                    }
            case 327:
                var6 = _closure1_slot5;
                var3 = var6.set;
                var3 = var3.bind(var6)(var5, var1);
                var3 = _closure1_slot4;
                var2 = var3.set;
                var2 = var2.bind(var3)(var5, var4);
                var0 = var1;
            case 360:
                return var0;
        }
    };
    var1.get = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [44]);