// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var5 = dependencyMap;
    var0 = metroImportAll;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var5;
    var4 = function arg0, arg1, arg2() {
        _fun4595: for (var _fun4595_ip = 0;;) switch (_fun4595_ip) {
            case 0:
                var14 = arg0;
                var13 = arg1;
                var12 = arg2;
                var2 = undefined;
                var1 = undefined;
                var3 = arguments.length;
                var0 = 3;
                var3 = var3 > var0;
                var11 = 1;
                var10 = var11;
                if (!var3) {
                    _fun4595_ip = 47;
                    continue _fun4595
                }
            case 32:
                var3 = arguments[var0];
                var10 = var11;
                if (!(var2 !== var3)) {
                    _fun4595_ip = 47;
                    continue _fun4595
                }
            case 43:
                var10 = arguments[var0];
            case 47:
                var1 = var13.getItemCount;
                var0 = var13.data;
                var9 = var1.bind(var13)(var0);
                var0 = new Array(0);
                var1 = var14.length;
                var8 = 0;
                var1 = var8 < var1;
                var7 = global;
                var6 = 2;
                var5 = 0;
                var4 = undefined;
                var3 = undefined;
                var2 = undefined;
                if (!var1) {
                    _fun4595_ip = 266;
                    continue _fun4595
                }
            case 97:
                var16 = var14[var5];
                var15 = var9 - var11;
                var1 = 0;
                if (!(var1 <= var15)) {
                    _fun4595_ip = 251;
                    continue _fun4595
                }
            case 114:
                var19 = var7.Math;
                var18 = var19.floor;
                var17 = var15 - var1;
                var17 = var17 / var6;
                var17 = var18.bind(var19)(var17);
                var20 = var1 + var17;
                var17 = var12.getCellMetricsApprox;
                var17 = var17.bind(var12)(var20, var13);
                var18 = var17.offset;
                var19 = var18 * var10;
                var18 = var17.offset;
                var17 = var17.length;
                var17 = var18 + var17;
                var18 = var17 * var10;
                if (!(var8 === var20)) {
                    _fun4595_ip = 192;
                    continue _fun4595
                }
            case 188:
                if (!(!(var16 < var19))) {
                    _fun4595_ip = 225;
                    continue _fun4595
                }
            case 192:
                if (!(var8 !== var20)) {
                    _fun4595_ip = 200;
                    continue _fun4595
                }
            case 196:
                if (!(!(var16 <= var19))) {
                    _fun4595_ip = 225;
                    continue _fun4595
                }
            case 200:
                if (!(!(var16 > var18))) {
                    _fun4595_ip = 219;
                    continue _fun4595
                }
            case 204:
                var0[var5] = var20;
                var4 = var20;
                var3 = var19;
                var2 = var18;
                _fun4595_ip = 251;
                continue _fun4595;
            case 219:
                var17 = var20 + var11;
                _fun4595_ip = 232;
                continue _fun4595;
            case 225:
                var15 = var20 - var11;
                var17 = var1;
            case 232:
                var1 = var17;
                var4 = var20;
                var3 = var19;
                var2 = var18;
                if (var1 <= var15) {
                    _fun4595_ip = 114;
                    continue _fun4595
                }
            case 251:
                var5 = var5 + 1;
                var1 = var14.length;
                if (var5 < var1) {
                    _fun4595_ip = 97;
                    continue _fun4595
                }
            case 266:
                return var0;
        }
    };
    var _closure1_slot3 = var4;
    var3 = function arg0, arg1() {
        var0 = arg0;
        var5 = arg1;
        var2 = var5.last;
        var1 = var5.first;
        var1 = var2 - var1;
        var7 = 1;
        var1 = var1 + var7;
        var6 = global;
        var4 = var6.Math;
        var3 = var4.max;
        var10 = var6.Math;
        var9 = var10.min;
        var8 = var5.last;
        var2 = var0.last;
        var2 = var9.bind(var10)(var8, var2);
        var2 = var7 + var2;
        var7 = var6.Math;
        var6 = var7.max;
        var5 = var5.first;
        var0 = var0.first;
        var0 = var6.bind(var7)(var5, var0);
        var2 = var2 - var0;
        var0 = 0;
        var0 = var3.bind(var4)(var0, var2);
        var0 = var1 - var0;
        return var0;
    };
    var _closure1_slot4 = var3;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var6);
    var0 = 0;
    var6 = var5[var0];
    var5 = arg2;
    var0 = undefined;
    var5 = var5.bind(var0)(var6);
    var _closure1_slot2 = var5;
    var2.elementsThatOverlapOffsets = var4;
    var2.newRangeCount = var3;
    var3 = function arg0, arg1, arg2, arg3, arg4, arg5() {
        _fun4597: for (var _fun4597_ip = 0;;) switch (_fun4597_ip) {
            case 0:
                var11 = arg0;
                var7 = arg1;
                var17 = arg3;
                var10 = arg4;
                var0 = arg5;
                var2 = var11.getItemCount;
                var1 = var11.data;
                var2 = var2.bind(var11)(var1);
                var6 = 0;
                if (!(var6 !== var2)) {
                    _fun4597_ip = 933;
                    continue _fun4597
                }
            case 40:
                var8 = var0.offset;
                var12 = var0.velocity;
                var4 = var0.visibleLength;
                var0 = var0.zoomScale;
                var1 = 1;
                var16 = undefined;
                var9 = var1;
                if (!(var16 !== var0)) {
                    _fun4597_ip = 79;
                    continue _fun4597
                }
            case 76:
                var9 = var0;
            case 79:
                var3 = global;
                var5 = var3.Math;
                var0 = var5.max;
                var14 = var0.bind(var5)(var6, var8);
                var13 = var14 + var4;
                var0 = arg2;
                var0 = var0 - var1;
                var5 = var0 * var4;
                var4 = var12 > var1;
                var8 = 'after';
                var0 = var8;
                if (var4) {
                    _fun4597_ip = 151;
                    continue _fun4597
                }
            case 127:
                var4 = -1;
                var12 = var12 < var4;
                var4 = 'none';
                if (!var12) {
                    _fun4597_ip = 148;
                    continue _fun4597
                }
            case 144:
                var4 = 'before';
            case 148:
                var0 = var4;
            case 151:
                var15 = var3.Math;
                var12 = var15.max;
                var4 = 0.5;
                var4 = var4 * var5;
                var5 = var14 - var4;
                var18 = var12.bind(var15)(var6, var5);
                var12 = var3.Math;
                var5 = var12.max;
                var4 = var13 + var4;
                var12 = var5.bind(var12)(var6, var4);
                var5 = var10.getCellMetricsApprox;
                var4 = var2 - var1;
                var4 = var5.bind(var10)(var4, var11);
                var4 = var4.offset;
                var4 = var4 * var9;
                if (!(!(var4 < var18))) {
                    _fun4597_ip = 890;
                    continue _fun4597
                }
            case 240:
                var5 = _closure1_slot3;
                var4 = new Array(4);
                var4[0] = var18;
                var4[1] = var14;
                var4[2] = var13;
                var4[3] = var12;
                var30 = undefined;
                var29 = var4;
                var28 = var11;
                var27 = var10;
                var26 = var9;
                var9 = var30[var5](var29, var28, var27, var26, var25);
                var5 = _closure1_slot2;
                var4 = 4;
                var11 = var5.bind(var16)(var9, var4);
                var10 = var11[var6];
                var5 = var11[var1];
                var4 = 2;
                var4 = var11[var4];
                var9 = 3;
                var12 = var11[var9];
                var9 = null;
                var11 = var9 == var10;
                var13 = 0;
                if (var11) {
                    _fun4597_ip = 334;
                    continue _fun4597
                }
            case 331:
                var13 = var10;
            case 334:
                if (!(var9 == var12)) {
                    _fun4597_ip = 342;
                    continue _fun4597
                }
            case 338:
                var12 = var2 - var1;
            case 342:
                var11 = {};
                if (!(var9 == var5)) {
                    _fun4597_ip = 365;
                    continue _fun4597
                }
            case 348:
                var14 = var3.Math;
                var10 = var14.max;
                var5 = var10.bind(var14)(var6, var13);
            case 365:
                var11.first = var5;
                if (!(var9 == var4)) {
                    _fun4597_ip = 399;
                    continue _fun4597
                }
            case 374:
                var14 = var3.Math;
                var10 = var14.min;
                var9 = var5 + var7;
                var9 = var9 - var1;
                var4 = var10.bind(var14)(var12, var9);
            case 399:
                var11.last = var4;
                var9 = _closure1_slot4;
                var18 = var9.bind(var16)(var17, var11);
                var9 = 'before';
                var14 = var9 === var0;
                var10 = var8 === var0;
                var9 = var5;
                var8 = var4;
                var0 = var18;
                if (!(var5 <= var13)) {
                    _fun4597_ip = 461;
                    continue _fun4597
                }
            case 439:
                var9 = var5;
                var8 = var4;
                var0 = var18;
                var5 = var9;
                var4 = var8;
                if (!(!(var4 >= var12))) {
                    _fun4597_ip = 749;
                    continue _fun4597
                }
            case 461:
                var19 = var0 >= var7;
                var20 = _closure1_slot0;
                var18 = _closure1_slot1;
                var18 = var18[var1];
                var20 = var20.bind(var16)(var18);
                var18 = var20.fixVirtualizeListCollapseWindowSize;
                var18 = var18.bind(var20)();
                var20 = var17.first;
                var21 = var9 <= var20;
                if (var18) {
                    _fun4597_ip = 546;
                    continue _fun4597
                }
            case 505:
                var20 = var21;
                if (var21) {
                    _fun4597_ip = 521;
                    continue _fun4597
                }
            case 511:
                var18 = var17.last;
                var20 = var9 > var18;
            case 521:
                var18 = var17.last;
                var23 = var8 >= var18;
                if (var23) {
                    _fun4597_ip = 544;
                    continue _fun4597
                }
            case 534:
                var18 = var17.first;
                var23 = var8 < var18;
            case 544:
                _fun4597_ip = 559;
                continue _fun4597;
            case 546:
                var18 = var17.last;
                var23 = var8 >= var18;
                var20 = var21;
            case 559:
                var24 = var9 > var13;
                if (!var24) {
                    _fun4597_ip = 578;
                    continue _fun4597
                }
            case 566:
                var18 = !var19;
                if (!var19) {
                    _fun4597_ip = 575;
                    continue _fun4597
                }
            case 572:
                var18 = !var20;
            case 575:
                var24 = var18;
            case 578:
                var18 = var8 < var12;
                if (!var18) {
                    _fun4597_ip = 597;
                    continue _fun4597
                }
            case 585:
                var21 = !var19;
                if (!var19) {
                    _fun4597_ip = 594;
                    continue _fun4597
                }
            case 591:
                var21 = !var23;
            case 594:
                var18 = var21;
            case 597:
                if (!var19) {
                    _fun4597_ip = 615;
                    continue _fun4597
                }
            case 600:
                if (var24) {
                    _fun4597_ip = 615;
                    continue _fun4597
                }
            case 603:
                var5 = var9;
                var4 = var8;
                if (!var18) {
                    _fun4597_ip = 749;
                    continue _fun4597
                }
            case 615:
                var21 = !var24;
                if (!var24) {
                    _fun4597_ip = 639;
                    continue _fun4597
                }
            case 621:
                var19 = var10;
                if (!var19) {
                    _fun4597_ip = 630;
                    continue _fun4597
                }
            case 627:
                var19 = var18;
            case 630:
                if (!var19) {
                    _fun4597_ip = 636;
                    continue _fun4597
                }
            case 633:
                var19 = var23;
            case 636:
                var21 = var19;
            case 639:
                var19 = var9;
                var22 = var0;
                if (var21) {
                    _fun4597_ip = 663;
                    continue _fun4597
                }
            case 648:
                var21 = var0;
                if (!var20) {
                    _fun4597_ip = 657;
                    continue _fun4597
                }
            case 654:
                var21 = var0 + 1;
            case 657:
                var19 = var9 - 1;
                var22 = var21;
            case 663:
                var21 = !var18;
                if (!var18) {
                    _fun4597_ip = 687;
                    continue _fun4597
                }
            case 669:
                var18 = var14;
                if (!var18) {
                    _fun4597_ip = 678;
                    continue _fun4597
                }
            case 675:
                var18 = var24;
            case 678:
                if (!var18) {
                    _fun4597_ip = 684;
                    continue _fun4597
                }
            case 681:
                var18 = var20;
            case 684:
                var21 = var18;
            case 687:
                var18 = var8;
                var20 = var22;
                if (var21) {
                    _fun4597_ip = 711;
                    continue _fun4597
                }
            case 696:
                var21 = var22;
                if (!var23) {
                    _fun4597_ip = 705;
                    continue _fun4597
                }
            case 702:
                var21 = var22 + 1;
            case 705:
                var18 = var8 + 1;
                var20 = var21;
            case 711:
                var9 = var19;
                var8 = var18;
                var0 = var20;
                if (!(var19 <= var13)) {
                    _fun4597_ip = 461;
                    continue _fun4597
                }
            case 727:
                var9 = var19;
                var8 = var18;
                var0 = var20;
                var5 = var9;
                var4 = var8;
                if (!(var4 >= var12)) {
                    _fun4597_ip = 461;
                    continue _fun4597
                }
            case 749:
                if (!(var4 >= var5)) {
                    _fun4597_ip = 789;
                    continue _fun4597
                }
            case 753:
                if (!(var5 >= var6)) {
                    _fun4597_ip = 789;
                    continue _fun4597
                }
            case 757:
                if (!(var4 < var2)) {
                    _fun4597_ip = 789;
                    continue _fun4597
                }
            case 761:
                if (!(var5 >= var13)) {
                    _fun4597_ip = 789;
                    continue _fun4597
                }
            case 765:
                if (!(var4 <= var12)) {
                    _fun4597_ip = 789;
                    continue _fun4597
                }
            case 769:
                var0 = var11.first;
                if (!(var5 <= var0)) {
                    _fun4597_ip = 789;
                    continue _fun4597
                }
            case 779:
                var0 = var11.last;
                if (!(!(var4 >= var0))) {
                    _fun4597_ip = 876;
                    continue _fun4597
                }
            case 789:
                var9 = var3.Error;
                var10 = var3.JSON;
                var8 = var10.stringify;
                var0 = {};
                var0.first = var5;
                var0.last = var4;
                var0.itemCount = var2;
                var0.overscanFirst = var13;
                var0.overscanLast = var12;
                var0.visible = var11;
                var8 = var8.bind(var10)(var0);
                var0 = 'Bad window calculation ';
                var29 = var0 + var8;
                var8 = var9.prototype;
                var8 = Object.create(var8, {
                    constructor: {
                        value: var9
                    }
                });
                var30 = var8;
                var0 = new var30[var9](var29, var28);
                var0 = var0 instanceof Object ? var0 : var8;
                throw var0;
            case 876:
                var0 = {};
                var0.first = var5;
                var0.last = var4;
                return var0;
            case 890:
                var0 = {};
                var5 = var3.Math;
                var4 = var5.max;
                var3 = var2 - var1;
                var3 = var3 - var7;
                var3 = var4.bind(var5)(var6, var3);
                var0.first = var3;
                var1 = var2 - var1;
                var0.last = var1;
                return var0;
            case 933:
                var0 = {
                    'first': 0,
                    'last': 4294967295
                };
                return var0;
        }
    };
    var2.computeWindowedRenderLimits = var3;
    var1 = function arg0, arg1() {
        _fun4598: for (var _fun4598_ip = 0;;) switch (_fun4598_ip) {
            case 0:
                var1 = arg0;
                var2 = 'object';
                var0 = typeof var1;
                var0 = var2 === var0;
                if (!var0) {
                    _fun4598_ip = 37;
                    continue _fun4598
                }
            case 17:
                var3 = null;
                var4 = var3 == var1;
                var2 = undefined;
                if (var4) {
                    _fun4598_ip = 33;
                    continue _fun4598
                }
            case 28:
                var2 = var1.key;
            case 33:
                if (!(var3 == var2)) {
                    _fun4598_ip = 87;
                    continue _fun4598
                }
            case 37:
                if (!var0) {
                    _fun4598_ip = 60;
                    continue _fun4598
                }
            case 40:
                var2 = null;
                var3 = var2 == var1;
                var0 = undefined;
                if (var3) {
                    _fun4598_ip = 56;
                    continue _fun4598
                }
            case 51:
                var0 = var1.id;
            case 56:
                if (!(var2 == var0)) {
                    _fun4598_ip = 80;
                    continue _fun4598
                }
            case 60:
                var0 = global;
                var3 = var0.String;
                var2 = undefined;
                var0 = arg1;
                var0 = var3.bind(var2)(var0);
                _fun4598_ip = 85;
                continue _fun4598;
            case 80:
                var0 = var1.id;
            case 85:
                _fun4598_ip = 92;
                continue _fun4598;
            case 87:
                var0 = var1.key;
            case 92:
                return var0;
        }
    };
    var2.keyExtractor = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 79]);