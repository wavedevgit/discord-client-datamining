// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var3 = dependencyMap;
    var0 = require;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var3;
    var0 = function(arg0, arg1, arg2, arg3) { // Original name: addTransformToKeepPosition, environment: var1
        _fun33871: for (var _fun33871_ip = 0;;) switch (_fun33871_ip) {
            case 0:
                var11 = arg0;
                var12 = arg2;
                var13 = arg3;
                var0 = undefined;
                var14 = undefined;
                var15 = undefined;
                var16 = undefined;
                var10 = global;
                var3 = var10.Object;
                var2 = var3.entries;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                var9 = var1;
                var2 = var9[Symbol.iterator];
                var9 = var2().next;
                var8 = '';
                var7 = 49;
                var6 = 50;
                var5 = 2;
                var3 = 0;
                var1 = 1;
            case 66:
                var18 = var9().value;
                var17 = var2;
                if (!(var17 !== var0)) {
                    _fun33871_ip = 245;
                    continue _fun33871
                }
            case 80: // try_start_0
                var17 = _closure1_slot2;
                var17 = var17.bind(var0)(var18, var5);
                var14 = var17[var3];
                var17 = var17[var1];
                var15 = var17;
                var17 = var17.transform;
                if (!(var0 === var17)) {
                    _fun33871_ip = 132;
                    continue _fun33871
                }
            case 110:
                var18 = var15;
                var19 = var12;
                var17 = new Array(1);
                var17[0] = var19;
                var18.transform = var17;
                _fun33871_ip = 154;
                continue _fun33871;
            case 132:
                var17 = var15;
                var19 = var17.transform;
                var18 = var19.unshift;
                var17 = var12;
                var17 = var18.bind(var19)(var17);
            case 154:
                var18 = var10.parseInt;
                var17 = var14;
                var17 = var18.bind(var0)(var17);
                var16 = var17 / var5;
                var19 = var11;
                var17 = var13;
                if (var17) {
                    _fun33871_ip = 190;
                    continue _fun33871
                }
            case 181:
                var17 = var16;
                var18 = var17 + var6;
                _fun33871_ip = 210;
                continue _fun33871;
            case 190:
                var21 = var10.Math;
                var20 = var21.min;
                var17 = var16;
                var18 = var20.bind(var21)(var17, var7);
            case 210:
                var17 = var10.HermesInternal;
                var17 = var17.concat;
                var18 = var17.bind(var8)(var18);
                var17 = var15;
                var19[var18] = var17;
            case 233: // try_end0
                _fun33871_ip = 66;
                continue _fun33871;
            case 238: // catch_target0
                CatchBlockStart(arg_register = 1);
                var2.return();
                throw var1;
            case 245:
                return var0;
        }
    };
    var _closure1_slot3 = var0;
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
    var1 = function(arg0, arg1) { // Original name: EntryExitTransition, environment: var1
        _fun33872: for (var _fun33872_ip = 0;;) switch (_fun33872_ip) {
            case 0:
                var0 = arg1;
                var9 = global;
                var3 = var9.structuredClone;
                var4 = _closure1_slot0;
                var1 = _closure1_slot1;
                var7 = 1;
                var2 = var1[var7];
                var6 = undefined;
                var2 = var4.bind(var6)(var2);
                var5 = var2.AnimationsData;
                var2 = var0.exiting;
                var2 = var5[var2];
                var2 = var3.bind(var6)(var2);
                var3 = var9.structuredClone;
                var1 = var1[var7];
                var1 = var4.bind(var6)(var1);
                var4 = var1.AnimationsData;
                var1 = var0.entering;
                var1 = var4[var1];
                var1 = var3.bind(var6)(var1);
                var10 = {};
                var4 = var0.translateX;
                var3 = var9.HermesInternal;
                var3 = var3.concat;
                var11 = '';
                var5 = 'px';
                var3 = var3.bind(var11)(var4, var5);
                var10.translateX = var3;
                var4 = var0.translateY;
                var3 = var9.HermesInternal;
                var3 = var3.concat;
                var3 = var3.bind(var11)(var4, var5);
                var10.translateY = var3;
                var5 = var0.scaleX;
                var4 = var0.scaleY;
                var0 = var9.HermesInternal;
                var3 = var0.concat;
                var0 = ',';
                var0 = var3.bind(var11)(var5, var0, var4);
                var10.scale = var0;
                var0 = {};
                var3 = arg0;
                var0.name = var3;
                var3 = {};
                var0.style = var3;
                var3 = 300;
                var0.duration = var3;
                var5 = _closure1_slot3;
                var20 = var0.style;
                var19 = var2.style;
                var17 = true;
                var21 = undefined;
                var18 = var10;
                var2 = var21[var5](var20, var19, var18, var17, var16);
                var20 = var0.style;
                var19 = var1.style;
                var18 = {
                    'translateX': '0px',
                    'translateY': '0px',
                    'scale': '1,1'
                };
                var17 = false;
                var1 = var21[var5](var20, var19, var18, var17, var16);
                var2 = var0.style;
                var5 = var2;
                var1 = var9.Map;
                var3 = var1.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var1
                    }
                });
                var21 = var3;
                var1 = new var21[var1](var20);
                var1 = var1 instanceof Object ? var1 : var3;
                var4 = 0;
                var2 = var2[var4];
                var2 = var2.opacity;
                if (!(var6 === var2)) {
                    _fun33872_ip = 355;
                    continue _fun33872
                }
            case 327:
                var3 = var1.set;
                var2 = 48;
                var2 = var3.bind(var1)(var2, var7);
                var3 = var1.set;
                var2 = 49;
                var2 = var3.bind(var1)(var2, var4);
            case 355:
                var2 = var5;
                var3 = 50;
                var2 = var2[var3];
                var2 = var2.opacity;
                if (!(var6 === var2)) {
                    _fun33872_ip = 399;
                    continue _fun33872
                }
            case 374:
                var2 = var1.set;
                var2 = var2.bind(var1)(var3, var4);
                var3 = var1.set;
                var2 = 51;
                var2 = var3.bind(var1)(var2, var7);
            case 399:
                var3 = var1;
                var2 = var3[Symbol.iterator];
                var3 = var2().next;
                var1 = 2;
            case 408:
                var11 = var3().value;
                var10 = var2;
                if (!(var10 !== var6)) {
                    _fun33872_ip = 483;
                    continue _fun33872
                }
            case 419: // try_start_0
                var10 = _closure1_slot2;
                var10 = var10.bind(var6)(var11, var1);
                var12 = var10[var4];
                var10 = var10[var7];
                var11 = var5;
                var16 = var9.Object;
                var15 = var16.assign;
                var14 = var11[var12];
                var13 = {};
                var13.opacity = var10;
                var10 = {};
                var10 = var15.bind(var16)(var10, var14, var13);
                var11[var12] = var10;
            case 474: // try_end0
                _fun33872_ip = 408;
                continue _fun33872;
            case 476: // catch_target0
                CatchBlockStart(arg_register = 1);
                var2.return();
                throw var1;
            case 483:
                return var0;
        }
    };
    var2.EntryExitTransition = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 3736]);