// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = dependencyMap;
    var0 = 0;
    var3 = var2[var0];
    var2 = require;
    var0 = undefined;
    var2 = var2.bind(var0)(var3);
    var _closure1_slot0 = var2;
    var2 = function(arg0) { // Original name: isIterable, environment: var1
        var0 = global;
        var0 = var0.Symbol;
        var1 = var0.iterator;
        var0 = arg0;
        var0 = var1 in var0;
        return var0;
    };
    var _closure1_slot1 = var2;
    var2 = function(arg0) { // Original name: hasIterableEntries, environment: var1
        var1 = 'entries';
        var0 = arg0;
        var0 = var1 in var0;
        return var0;
    };
    var _closure1_slot2 = var2;
    var2 = function(arg0, arg1) { // Original name: compareEntries, environment: var1
        _fun24477: for (var _fun24477_ip = 0;;) switch (_fun24477_ip) {
            case 0:
                var2 = arg0;
                var3 = arg1;
                var7 = undefined;
                var8 = undefined;
                var9 = undefined;
                var10 = undefined;
                var6 = global;
                var0 = var6.Map;
                var1 = var2 instanceof var0;
                var0 = var2;
                if (var1) {
                    _fun24477_ip = 68;
                    continue _fun24477
                }
            case 32:
                var4 = var6.Map;
                var1 = var2.entries;
                var18 = var1.bind(var2)();
                var2 = var4.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var4
                    }
                });
                var19 = var2;
                var1 = new var19[var4](var18, var17);
                var0 = var1 instanceof Object ? var1 : var2;
            case 68:
                var1 = var6.Map;
                var2 = var3 instanceof var1;
                var1 = var3;
                if (var2) {
                    _fun24477_ip = 120;
                    continue _fun24477
                }
            case 84:
                var4 = var6.Map;
                var2 = var3.entries;
                var18 = var2.bind(var3)();
                var3 = var4.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var4
                    }
                });
                var19 = var3;
                var2 = new var19[var4](var18, var17);
                var1 = var2 instanceof Object ? var2 : var3;
            case 120:
                var8 = var1;
                var2 = var0.size;
                var1 = var1.size;
                if (!(var2 === var1)) {
                    _fun24477_ip = 265;
                    continue _fun24477
                }
            case 140:
                var5 = var0;
                var1 = var5[Symbol.iterator];
                var5 = var1().next;
                var3 = 2;
                var2 = 0;
                var0 = 1;
            case 157:
                var12 = var5().value;
                var11 = var1;
                if (!(var11 !== var7)) {
                    _fun24477_ip = 261;
                    continue _fun24477
                }
            case 168: // try_start_0
                var11 = _closure1_slot0;
                var11 = var11.bind(var7)(var12, var3);
                var13 = var11[var2];
                var9 = var13;
                var10 = var11[var0];
                var12 = var8;
                var11 = var12.has;
                var11 = var11.bind(var12)(var13);
                if (!var11) {
                    _fun24477_ip = 245;
                    continue _fun24477
                }
            case 205:
                var14 = var6.Object;
                var13 = var14.is;
                var12 = var10;
                var16 = var8;
                var15 = var16.get;
                var11 = var9;
                var11 = var15.bind(var16)(var11);
                var11 = var13.bind(var14)(var12, var11);
                if (var11) {
                    _fun24477_ip = 252;
                    continue _fun24477
                }
            case 245: // try_end0
                var1.return();
                var11 = false;
                return var11;
            case 252:
                _fun24477_ip = 157;
                continue _fun24477;
            case 254: // catch_target0
                CatchBlockStart(arg_register = 0);
                var1.return();
                throw var0;
            case 261:
                var0 = true;
                return var0;
            case 265:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot3 = var2;
    var2 = function(arg0, arg1) { // Original name: shallow, environment: var1
        _fun24478: for (var _fun24478_ip = 0;;) switch (_fun24478_ip) {
            case 0:
                var8 = arg0;
                var7 = arg1;
                var _closure2_slot0 = var8;
                var _closure2_slot1 = var7;
                var17 = global;
                var1 = var17.Object;
                var0 = var1.is;
                var0 = var0.bind(var1)(var8, var7);
                var1 = !var0;
                var0 = !var1;
                if (!var1) {
                    _fun24478_ip = 461;
                    continue _fun24478
                }
            case 48:
                var3 = 'object';
                var1 = typeof var8;
                var1 = var3 === var1;
                if (!var1) {
                    _fun24478_ip = 68;
                    continue _fun24478
                }
            case 62:
                var2 = null;
                var1 = var2 !== var8;
            case 68:
                if (!var1) {
                    _fun24478_ip = 78;
                    continue _fun24478
                }
            case 71:
                var2 = typeof var7;
                var1 = var3 === var2;
            case 78:
                if (!var1) {
                    _fun24478_ip = 87;
                    continue _fun24478
                }
            case 81:
                var2 = null;
                var1 = var2 !== var7;
            case 87:
                if (!var1) {
                    _fun24478_ip = 458;
                    continue _fun24478
                }
            case 93:
                var3 = var17.Object;
                var2 = var3.getPrototypeOf;
                var3 = var2.bind(var3)(var8);
                var4 = var17.Object;
                var2 = var4.getPrototypeOf;
                var2 = var2.bind(var4)(var7);
                var2 = var3 === var2;
                if (!var2) {
                    _fun24478_ip = 455;
                    continue _fun24478
                }
            case 137:
                var3 = _closure1_slot1;
                var6 = undefined;
                var3 = var3.bind(var6)(var8);
                if (!var3) {
                    _fun24478_ip = 166;
                    continue _fun24478
                }
            case 154:
                var3 = _closure1_slot1;
                var3 = var3.bind(var6)(var7);
                if (var3) {
                    _fun24478_ip = 205;
                    continue _fun24478
                }
            case 166:
                var9 = _closure1_slot3;
                var4 = {};
                var3 = function() { // Original name: entries, environment: var10
                    var0 = global;
                    var2 = var0.Object;
                    var1 = var2.entries;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var4.entries = var3;
                var3 = {};
                var10 = function() { // Original name: entries, environment: var10
                    var0 = global;
                    var2 = var0.Object;
                    var1 = var2.entries;
                    var0 = _closure2_slot1;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var3.entries = var10;
                var3 = var9.bind(var6)(var4, var3);
                _fun24478_ip = 452;
                continue _fun24478;
            case 205:
                var4 = _closure1_slot2;
                var4 = var4.bind(var6)(var8);
                if (!var4) {
                    _fun24478_ip = 232;
                    continue _fun24478
                }
            case 217:
                var4 = _closure1_slot2;
                var4 = var4.bind(var6)(var7);
                if (var4) {
                    _fun24478_ip = 439;
                    continue _fun24478
                }
            case 232:
                var4 = var17.Symbol;
                var4 = var4.iterator;
                var4 = var8[var4];
                var16 = var4.bind(var8)();
                var4 = var17.Symbol;
                var4 = var4.iterator;
                var4 = var7[var4];
                var15 = var4.bind(var7)();
                var4 = var16.next;
                var18 = var4.bind(var16)();
                var4 = var15.next;
                var11 = var4.bind(var15)();
                var4 = var18.done;
                var9 = var18;
                var10 = var11;
                if (var4) {
                    _fun24478_ip = 409;
                    continue _fun24478
                }
            case 304:
                var4 = var11.done;
                var13 = var18;
                var12 = var11;
                var9 = var13;
                var10 = var12;
                if (var4) {
                    _fun24478_ip = 409;
                    continue _fun24478
                }
            case 324:
                var19 = var17.Object;
                var18 = var19.is;
                var11 = var13.value;
                var4 = var12.value;
                var11 = var18.bind(var19)(var11, var4);
                var4 = false;
                if (!var11) {
                    _fun24478_ip = 437;
                    continue _fun24478
                }
            case 357:
                var11 = var16.next;
                var19 = var11.bind(var16)();
                var11 = var15.next;
                var18 = var11.bind(var15)();
                var11 = var19.done;
                var9 = var19;
                var10 = var18;
                if (var11) {
                    _fun24478_ip = 409;
                    continue _fun24478
                }
            case 389:
                var11 = var18.done;
                var13 = var19;
                var12 = var18;
                var9 = var13;
                var10 = var12;
                if (!var11) {
                    _fun24478_ip = 324;
                    continue _fun24478
                }
            case 409:
                var9 = var9.done;
                var11 = !var9;
                var9 = !var11;
                if (var11) {
                    _fun24478_ip = 434;
                    continue _fun24478
                }
            case 423:
                var10 = var10.done;
                var10 = !var10;
                var9 = !var10;
            case 434:
                var4 = var9;
            case 437:
                _fun24478_ip = 449;
                continue _fun24478;
            case 439:
                var5 = _closure1_slot3;
                var4 = var5.bind(var6)(var8, var7);
            case 449:
                var3 = var4;
            case 452:
                var2 = var3;
            case 455:
                var1 = var2;
            case 458:
                var0 = var1;
            case 461:
                return var0;
        }
    };
    var1 = arg5;
    var1.shallow = var2;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57]);