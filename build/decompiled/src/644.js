// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var0 = require;
    var _closure1_slot0 = var0;
    var0 = dependencyMap;
    var _closure1_slot1 = var0;
    var0 = function arg0() {
        var1 = null;
        var0 = arg0;
        var0 = var1 == var0;
        return var0;
    };
    var _closure1_slot4 = var0;
    var0 = function arg0() {
        _fun7315: for (var _fun7315_ip = 0;;) switch (_fun7315_ip) {
            case 0:
                var4 = arg0;
                var1 = !var4;
                if (var1) {
                    _fun7315_ip = 20;
                    continue _fun7315
                }
            case 9:
                var2 = 'object';
                var0 = typeof var4;
                var1 = var2 !== var0;
            case 20:
                if (var1) {
                    _fun7315_ip = 39;
                    continue _fun7315
                }
            case 23:
                var0 = var4.length;
                var2 = 'number';
                var0 = typeof var0;
                var1 = var2 !== var0;
            case 39:
                var0 = !var1;
                if (var1) {
                    _fun7315_ip = 115;
                    continue _fun7315
                }
            case 45:
                var1 = var4.copy;
                var3 = 'function';
                var1 = typeof var1;
                var1 = var3 === var1;
                if (!var1) {
                    _fun7315_ip = 77;
                    continue _fun7315
                }
            case 65:
                var2 = var4.slice;
                var2 = typeof var2;
                var1 = var3 === var2;
            case 77:
                if (!var1) {
                    _fun7315_ip = 112;
                    continue _fun7315
                }
            case 80:
                var2 = var4.length;
                var3 = 0;
                var2 = var2 > var3;
                if (!var2) {
                    _fun7315_ip = 109;
                    continue _fun7315
                }
            case 94:
                var3 = var4[var3];
                var4 = 'number';
                var3 = typeof var3;
                var2 = var4 !== var3;
            case 109:
                var1 = !var2;
            case 112:
                var0 = var1;
            case 115:
                return var0;
        }
    };
    var _closure1_slot5 = var0;
    var0 = global;
    var0 = var0.Array;
    var0 = var0.prototype;
    var0 = var0.slice;
    var _closure1_slot2 = var0;
    var0 = function(arg0, arg1, arg2) { // Environment: var1
        _fun7316: for (var _fun7316_ip = 0;;) switch (_fun7316_ip) {
            case 0:
                var3 = arg0;
                var4 = arg1;
                var5 = arg2;
                if (var5) {
                    _fun7316_ip = 14;
                    continue _fun7316
                }
            case 12:
                var5 = {};
            case 14:
                var2 = var3 === var4;
                var0 = var2;
                if (var0) {
                    _fun7316_ip = 738;
                    continue _fun7316
                }
            case 27:
                var1 = global;
                var6 = var1.Date;
                var6 = var3 instanceof var6;
                if (!var6) {
                    _fun7316_ip = 58;
                    continue _fun7316
                }
            case 42:
                var1 = var1.Date;
                var1 = var4 instanceof var1;
                if (var1) {
                    _fun7316_ip = 711;
                    continue _fun7316
                }
            case 58:
                if (!var3) {
                    _fun7316_ip = 693;
                    continue _fun7316
                }
            case 64:
                if (!var4) {
                    _fun7316_ip = 693;
                    continue _fun7316
                }
            case 70:
                var6 = 'object';
                var1 = typeof var3;
                if (!(var6 !== var1)) {
                    _fun7316_ip = 91;
                    continue _fun7316
                }
            case 81:
                var1 = typeof var4;
                if (!(var6 === var1)) {
                    _fun7316_ip = 693;
                    continue _fun7316
                }
            case 91:
                var9 = var3;
                var12 = var4;
                var7 = var5;
                var11 = undefined;
                var15 = undefined;
                var10 = undefined;
                var17 = undefined;
                var1 = _closure1_slot4;
                var6 = var1.bind(var11)(var3);
                var1 = false;
                if (var6) {
                    _fun7316_ip = 691;
                    continue _fun7316
                }
            case 128:
                var13 = _closure1_slot4;
                var6 = var12;
                var6 = var13.bind(var11)(var6);
                var1 = false;
                if (var6) {
                    _fun7316_ip = 691;
                    continue _fun7316
                }
            case 148:
                var6 = var9;
                var13 = var6.prototype;
                var6 = var12;
                var6 = var6.prototype;
                var1 = false;
                if (!(var13 === var6)) {
                    _fun7316_ip = 691;
                    continue _fun7316
                }
            case 173:
                var16 = _closure1_slot0;
                var6 = _closure1_slot1;
                var13 = 0;
                var6 = var6[var13];
                var16 = var16.bind(var11)(var6);
                var6 = var9;
                var6 = var16.bind(var11)(var6);
                if (var6) {
                    _fun7316_ip = 607;
                    continue _fun7316
                }
            case 206:
                var16 = _closure1_slot5;
                var6 = var9;
                var6 = var16.bind(var11)(var6);
                if (var6) {
                    _fun7316_ip = 489;
                    continue _fun7316
                }
            case 224: // try_start_0
                var18 = _closure1_slot0;
                var6 = _closure1_slot1;
                var16 = 1;
                var19 = var6[var16];
                var20 = var18.bind(var11)(var19);
                var19 = var9;
                var10 = var20.bind(var11)(var19);
                var6 = var6[var16];
                var18 = var18.bind(var11)(var6);
                var6 = var12;
                var17 = var18.bind(var11)(var6);
            case 269: // try_end0
                var6 = var10;
                var18 = var6.length;
                var6 = var17;
                var6 = var6.length;
                var6 = var18 != var6;
                var1 = false;
                if (var6) {
                    _fun7316_ip = 691;
                    continue _fun7316
                }
            case 297:
                var6 = var10;
                var18 = var6.sort;
                var18 = var18.bind(var6)();
                var19 = var17;
                var18 = var19.sort;
                var18 = var18.bind(var19)();
                var6 = var6.length;
                var6 = var6 - var16;
                var15 = var6;
                if (!(var6 >= var13)) {
                    _fun7316_ip = 381;
                    continue _fun7316
                }
            case 339:
                var6 = var10;
                var19 = var15;
                var18 = var6[var19];
                var6 = var17;
                var6 = var6[var19];
                var6 = var18 != var6;
                var1 = false;
                if (var6) {
                    _fun7316_ip = 691;
                    continue _fun7316
                }
            case 368:
                var6 = var15;
                var6 = var6 - 1;
                var15 = var6;
                if (var6 >= var13) {
                    _fun7316_ip = 339;
                    continue _fun7316
                }
            case 381:
                var6 = var10;
                var6 = var6.length;
                var6 = var6 - var16;
                var15 = var6;
                if (!(var6 >= var13)) {
                    _fun7316_ip = 459;
                    continue _fun7316
                }
            case 400:
                var16 = var10;
                var6 = var15;
                var16 = var16[var6];
                var18 = _closure1_slot3;
                var6 = var9;
                var17 = var6[var16];
                var6 = var12;
                var16 = var6[var16];
                var6 = var7;
                var6 = var18.bind(var11)(var17, var16, var6);
                var1 = false;
                if (!var6) {
                    _fun7316_ip = 691;
                    continue _fun7316
                }
            case 446:
                var6 = var15;
                var6 = var6 - 1;
                var15 = var6;
                if (var6 >= var13) {
                    _fun7316_ip = 400;
                    continue _fun7316
                }
            case 459:
                var10 = var9;
                var6 = var12;
                var10 = typeof var10;
                var6 = typeof var6;
                var1 = var10 === var6;
                _fun7316_ip = 691;
                continue _fun7316;
            case 480: // catch_target0
                CatchBlockStart(arg_register = 6);
                var1 = false;
                _fun7316_ip = 691;
                continue _fun7316;
            case 489:
                var10 = _closure1_slot5;
                var6 = var12;
                var6 = var10.bind(var11)(var6);
                var1 = false;
                if (!var6) {
                    _fun7316_ip = 691;
                    continue _fun7316
                }
            case 509:
                var6 = var9;
                var10 = var6.length;
                var6 = var12;
                var6 = var6.length;
                var1 = false;
                if (!(var10 === var6)) {
                    _fun7316_ip = 691;
                    continue _fun7316
                }
            case 534:
                var15 = 0;
                var6 = var9;
                var6 = var6.length;
                var6 = var13 < var6;
                var1 = true;
                if (!var6) {
                    _fun7316_ip = 691;
                    continue _fun7316
                }
            case 556:
                var6 = var9;
                var17 = var15;
                var16 = var6[var17];
                var6 = var12;
                var6 = var6[var17];
                var1 = false;
                if (!(var16 === var6)) {
                    _fun7316_ip = 691;
                    continue _fun7316
                }
            case 579:
                var6 = var15;
                var16 = var6 + 1;
                var15 = var16;
                var6 = var9;
                var6 = var6.length;
                var6 = var16 < var6;
                var1 = true;
                if (var6) {
                    _fun7316_ip = 556;
                    continue _fun7316
                }
            case 605:
                _fun7316_ip = 691;
                continue _fun7316;
            case 607:
                var10 = _closure1_slot0;
                var6 = _closure1_slot1;
                var6 = var6[var13];
                var10 = var10.bind(var11)(var6);
                var6 = var12;
                var6 = var10.bind(var11)(var6);
                var10 = !var6;
                var6 = !var10;
                if (var10) {
                    _fun7316_ip = 688;
                    continue _fun7316
                }
            case 641:
                var14 = _closure1_slot2;
                var13 = var14.call;
                var10 = var9;
                var10 = var13.bind(var14)(var10);
                var9 = var10;
                var13 = var14.call;
                var9 = var12;
                var9 = var13.bind(var14)(var9);
                var12 = var9;
                var8 = _closure1_slot3;
                var6 = var8.bind(var11)(var10, var9, var7);
            case 688:
                var1 = var6;
            case 691:
                _fun7316_ip = 709;
                continue _fun7316;
            case 693:
                var5 = var5.strict;
                if (var5) {
                    _fun7316_ip = 706;
                    continue _fun7316
                }
            case 702:
                var2 = var3 == var4;
            case 706:
                var1 = var2;
            case 709:
                _fun7316_ip = 735;
                continue _fun7316;
            case 711:
                var2 = var3.getTime;
                var3 = var2.bind(var3)();
                var2 = var4.getTime;
                var2 = var2.bind(var4)();
                var1 = var3 === var2;
            case 735:
                var0 = var1;
            case 738:
                return var0;
        }
    };
    var2 = arg4;
    var2.exports = var0;
    var _closure1_slot3 = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [645, 646]);