// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var0 = module;
    var1 = function(arg0, arg1) { // Original name: _iterableToArrayLimit, environment: var1
        _fun1398: for (var _fun1398_ip = 0;;) switch (_fun1398_ip) {
            case 0:
                var8 = arg0;
                var7 = var8;
                var11 = arg1;
                var3 = undefined;
                var4 = undefined;
                var12 = undefined;
                var0 = undefined;
                var13 = undefined;
                var1 = undefined;
                var5 = undefined;
                var2 = undefined;
                var6 = null;
                var9 = var6 == var8;
                var8 = null;
                if (var9) {
                    _fun1398_ip = 91;
                    continue _fun1398
                }
            case 36:
                var10 = global;
                var9 = var10.Symbol;
                var14 = 'undefined';
                var9 = typeof var9;
                var9 = var14 !== var9;
                if (!var9) {
                    _fun1398_ip = 76;
                    continue _fun1398
                }
            case 57:
                var14 = var7;
                var10 = var10.Symbol;
                var10 = var10.iterator;
                var9 = var14[var10];
            case 76:
                if (var9) {
                    _fun1398_ip = 88;
                    continue _fun1398
                }
            case 79:
                var10 = var7;
                var9 = var10["@@iterator"];
            case 88:
                var8 = var9;
            case 91:
                var4 = var8;
                if (!(var6 == var8)) {
                    _fun1398_ip = 100;
                    continue _fun1398
                }
            case 98:
                return var3;
            case 100:
                var1 = new Array(0);
                var5 = true;
                var2 = false;
            case 108: // try_start_0 // try_start_1
                var14 = var4;
                var10 = var14.call;
                var7 = var10.bind(var14)(var7);
                var4 = var7;
                var13 = var7.next;
                var10 = var11;
                var7 = 0;
                if (!(var7 !== var10)) {
                    _fun1398_ip = 274;
                    continue _fun1398
                }
            case 141:
                var14 = var13;
                var10 = var14.call;
                var7 = var4;
                var7 = var10.bind(var14)(var7);
                var12 = var7;
                var7 = var7.done;
                var5 = var7;
                if (var7) {
                    _fun1398_ip = 296;
                    continue _fun1398
                }
            case 174:
                var7 = var1;
                var14 = var7.push;
                var10 = var12;
                var10 = var10.value;
                var10 = var14.bind(var7)(var10);
                var10 = var7.length;
                var7 = var11;
                if (!(var10 !== var7)) {
                    _fun1398_ip = 296;
                    continue _fun1398
                }
            case 207:
                var5 = true;
                var14 = var13;
                var10 = var14.call;
                var7 = var4;
                var7 = var10.bind(var14)(var7);
                var12 = var7;
                var7 = var7.done;
                var5 = var7;
                if (var7) {
                    _fun1398_ip = 296;
                    continue _fun1398
                }
            case 239:
                var7 = var1;
                var14 = var7.push;
                var10 = var12;
                var10 = var10.value;
                var10 = var14.bind(var7)(var10);
                var10 = var7.length;
                var7 = var11;
                if (var10 !== var7) {
                    _fun1398_ip = 207;
                    continue _fun1398
                }
            case 272:
                _fun1398_ip = 296;
                continue _fun1398;
            case 274:
                var7 = global;
                var10 = var7.Object;
                var11 = var4;
                var10 = var10.bind(var3)(var11);
                if (!(var10 === var11)) {
                    _fun1398_ip = 298;
                    continue _fun1398
                }
            case 294:
                var5 = false;
            case 296: // try_end0
                _fun1398_ip = 390;
                continue _fun1398;
            case 298: // try_start_2 // try_end1
                var9 = var5;
                if (var9) {
                    _fun1398_ip = 358;
                    continue _fun1398
                }
            case 304:
                var9 = var4;
                var9 = var9.return;
                if (!(var6 != var9)) {
                    _fun1398_ip = 358;
                    continue _fun1398
                }
            case 317:
                var10 = var4;
                var9 = var10.return;
                var9 = var9.bind(var10)();
                var7 = var7.Object;
                var7 = var7.bind(var3)(var9);
                if (!(var7 !== var9)) {
                    _fun1398_ip = 358;
                    continue _fun1398
                }
            case 345: // try_end2
                var7 = var2;
                if (var7) {
                    _fun1398_ip = 353;
                    continue _fun1398
                }
            case 351:
                return var3;
            case 353:
                var7 = var0;
                throw var7;
            case 358:
                var7 = var2;
                if (var7) {
                    _fun1398_ip = 366;
                    continue _fun1398
                }
            case 364:
                return var3;
            case 366:
                var7 = var0;
                throw var7;
            case 371: // catch_target2
                CatchBlockStart(arg_register = 7);
                var9 = var2;
                if (var9) {
                    _fun1398_ip = 381;
                    continue _fun1398
                }
            case 379:
                throw var7;
            case 381:
                var7 = var0;
                throw var7;
            case 386: // try_start_3 // catch_target0
                CatchBlockStart(arg_register = 0);
                var2 = true;
            case 390: // try_start_4 // try_end3
                var7 = var5;
                if (var7) {
                    _fun1398_ip = 452;
                    continue _fun1398
                }
            case 396:
                var7 = var4;
                var7 = var7.return;
                if (!(var6 != var7)) {
                    _fun1398_ip = 452;
                    continue _fun1398
                }
            case 409:
                var8 = var4;
                var7 = var8.return;
                var8 = var7.bind(var8)();
                var7 = global;
                var7 = var7.Object;
                var7 = var7.bind(var3)(var8);
                if (!(var7 !== var8)) {
                    _fun1398_ip = 452;
                    continue _fun1398
                }
            case 439: // try_end4
                var7 = var2;
                if (var7) {
                    _fun1398_ip = 447;
                    continue _fun1398
                }
            case 445:
                return var3;
            case 447:
                var7 = var0;
                throw var7;
            case 452:
                var7 = var2;
                if (var7) {
                    _fun1398_ip = 460;
                    continue _fun1398
                }
            case 458:
                return var1;
            case 460:
                var1 = var0;
                throw var1;
            case 465: // catch_target4
                CatchBlockStart(arg_register = 1);
                var7 = var2;
                if (var7) {
                    _fun1398_ip = 475;
                    continue _fun1398
                }
            case 473:
                throw var1;
            case 475:
                var1 = var0;
                throw var1;
            case 480: // catch_target1 // catch_target3
                CatchBlockStart(arg_register = 1);
            case 482: // try_start_5
                if (var5) {
                    _fun1398_ip = 541;
                    continue _fun1398
                }
            case 485:
                var5 = var4;
                var5 = var5.return;
                if (!(var6 != var5)) {
                    _fun1398_ip = 541;
                    continue _fun1398
                }
            case 498:
                var5 = var4;
                var4 = var5.return;
                var5 = var4.bind(var5)();
                var4 = global;
                var4 = var4.Object;
                var4 = var4.bind(var3)(var5);
                if (!(var4 !== var5)) {
                    _fun1398_ip = 541;
                    continue _fun1398
                }
            case 528: // try_end5
                var4 = var2;
                if (var4) {
                    _fun1398_ip = 536;
                    continue _fun1398
                }
            case 534:
                return var3;
            case 536:
                var3 = var0;
                throw var3;
            case 541:
                var3 = var2;
                if (var3) {
                    _fun1398_ip = 549;
                    continue _fun1398
                }
            case 547:
                throw var1;
            case 549:
                var1 = var0;
                throw var1;
            case 554: // catch_target5
                CatchBlockStart(arg_register = 1);
                if (var2) {
                    _fun1398_ip = 561;
                    continue _fun1398
                }
            case 559:
                throw var1;
            case 561:
                throw var0;
        }
    };
    var0.exports = var1;
    var2 = var0.exports;
    var1 = true;
    var2.__esModule = var1;
    var1 = var0.exports;
    var0 = var0.exports;
    var1.default = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);