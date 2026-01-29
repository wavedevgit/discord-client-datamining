// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot5;
        var2 = function(arg0) { // Original name: CellRenderMask, environment: var4
            _fun4799: for (var _fun4799_ip = 0;;) switch (_fun4799_ip) {
                case 0:
                    var4 = arg0;
                    var2 = this;
                    var5 = _closure1_slot4;
                    var3 = _closure2_slot0;
                    var0 = undefined;
                    var3 = var5.bind(var0)(var2, var3);
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var1 = 4;
                    var1 = var5[var1];
                    var6 = var3.bind(var0)(var1);
                    var1 = 0;
                    var5 = var4 >= var1;
                    var3 = 'CellRenderMask must contain a non-negative number os cells';
                    var3 = var6.bind(var0)(var5, var3);
                    var2._numCells = var4;
                    if (!(var1 !== var4)) {
                        _fun4799_ip = 109;
                        continue _fun4799
                    }
                case 76:
                    var3 = {
                        'first': 0,
                        'last': null,
                        'isSpacer': true
                    };
                    var1 = 1;
                    var1 = var4 - var1;
                    var3.last = var1;
                    var1 = new Array(1);
                    var1[0] = var3;
                    _fun4799_ip = 113;
                    continue _fun4799;
                case 109:
                    var1 = new Array(0);
                case 113:
                    var2._regions = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'enumerateRegions';
        var0.key = var1;
        var1 = function() { // Original name: enumerateRegions, environment: var4
            var0 = this;
            var0 = var0._regions;
            return var0;
        };
        var0.value = var1;
        var1 = new Array(5);
        var1[0] = var0;
        var0 = {};
        var5 = 'addCells';
        var0.key = var5;
        var5 = function(arg0) { // Original name: addCells, environment: var4
            _fun4801: for (var _fun4801_ip = 0;;) switch (_fun4801_ip) {
                case 0:
                    var14 = arg0;
                    var2 = this;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var0 = 4;
                    var3 = var3[var0];
                    var0 = undefined;
                    var6 = var4.bind(var0)(var3);
                    var3 = var14.first;
                    var5 = 0;
                    var4 = var3 >= var5;
                    if (!var4) {
                        _fun4801_ip = 62;
                        continue _fun4801
                    }
                case 46:
                    var7 = var14.first;
                    var3 = var2._numCells;
                    var4 = var7 < var3;
                case 62:
                    if (!var4) {
                        _fun4801_ip = 81;
                        continue _fun4801
                    }
                case 65:
                    var7 = var14.last;
                    var3 = -1;
                    var4 = var7 >= var3;
                case 81:
                    if (!var4) {
                        _fun4801_ip = 100;
                        continue _fun4801
                    }
                case 84:
                    var7 = var14.last;
                    var3 = var2._numCells;
                    var4 = var7 < var3;
                case 100:
                    if (!var4) {
                        _fun4801_ip = 126;
                        continue _fun4801
                    }
                case 103:
                    var7 = var14.last;
                    var8 = var14.first;
                    var3 = 1;
                    var3 = var8 - var3;
                    var4 = var7 >= var3;
                case 126:
                    var3 = 'CellRenderMask.addCells called with invalid cell range';
                    var3 = var6.bind(var0)(var4, var3);
                    var4 = var14.last;
                    var3 = var14.first;
                    if (!(!(var4 < var3))) {
                        _fun4801_ip = 538;
                        continue _fun4801
                    }
                case 157:
                    var4 = var2._findRegion;
                    var3 = var14.first;
                    var3 = var4.bind(var2)(var3);
                    var7 = _closure1_slot3;
                    var6 = 2;
                    var3 = var7.bind(var0)(var3, var6);
                    var12 = var3[var5];
                    var4 = 1;
                    var8 = var3[var4];
                    var9 = var2._findRegion;
                    var3 = var14.last;
                    var3 = var9.bind(var2)(var3);
                    var3 = var7.bind(var0)(var3, var6);
                    var7 = var3[var5];
                    var3 = var3[var4];
                    if (!(var8 === var3)) {
                        _fun4801_ip = 245;
                        continue _fun4801
                    }
                case 233:
                    var5 = var12.isSpacer;
                    if (!var5) {
                        _fun4801_ip = 538;
                        continue _fun4801
                    }
                case 245:
                    var10 = new Array(0);
                    var9 = new Array(0);
                    var5 = global;
                    var13 = var5.Object;
                    var11 = var13.assign;
                    var6 = {};
                    var5 = false;
                    var6.isSpacer = var5;
                    var5 = {};
                    var11 = var11.bind(var13)(var5, var14, var6);
                    var6 = var12.first;
                    var5 = var11.first;
                    if (!(var6 < var5)) {
                        _fun4801_ip = 368;
                        continue _fun4801
                    }
                case 300:
                    var5 = var12.isSpacer;
                    if (var5) {
                        _fun4801_ip = 323;
                        continue _fun4801
                    }
                case 309:
                    var5 = var12.first;
                    var11.first = var5;
                    _fun4801_ip = 368;
                    continue _fun4801;
                case 323:
                    var6 = var10.push;
                    var5 = {};
                    var12 = var12.first;
                    var5.first = var12;
                    var12 = var11.first;
                    var12 = var12 - var4;
                    var5.last = var12;
                    var12 = true;
                    var5.isSpacer = var12;
                    var5 = var6.bind(var10)(var5);
                case 368:
                    var6 = var7.last;
                    var5 = var11.last;
                    if (!(var6 > var5)) {
                        _fun4801_ip = 452;
                        continue _fun4801
                    }
                case 384:
                    var5 = var7.isSpacer;
                    if (var5) {
                        _fun4801_ip = 407;
                        continue _fun4801
                    }
                case 393:
                    var5 = var7.last;
                    var11.last = var5;
                    _fun4801_ip = 452;
                    continue _fun4801;
                case 407:
                    var6 = var9.push;
                    var5 = {};
                    var12 = var11.last;
                    var12 = var12 + var4;
                    var5.first = var12;
                    var7 = var7.last;
                    var5.last = var7;
                    var7 = true;
                    var5.isSpacer = var7;
                    var5 = var6.bind(var9)(var5);
                case 452:
                    var7 = new Array(0);
                    var6 = var7.concat;
                    var5 = new Array(1);
                    var5[0] = var11;
                    var7 = var6.bind(var7)(var10, var5, var9);
                    var3 = var3 - var8;
                    var5 = var3 + var4;
                    var4 = var2._regions;
                    var3 = var4.splice;
                    var2 = var3.apply;
                    var6 = new Array(2);
                    var6[0] = var8;
                    var6[1] = var5;
                    var5 = var6.concat;
                    var1 = _closure1_slot2;
                    var1 = var1.bind(var0)(var7);
                    var1 = var5.bind(var6)(var1);
                    var1 = var2.bind(var3)(var4, var1);
                case 538:
                    return var0;
            }
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'numCells';
        var0.key = var5;
        var5 = function() { // Original name: numCells, environment: var4
            var0 = this;
            var0 = var0._numCells;
            return var0;
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'equals';
        var0.key = var5;
        var5 = function(arg0) { // Original name: equals, environment: var4
            _fun4803: for (var _fun4803_ip = 0;;) switch (_fun4803_ip) {
                case 0:
                    var3 = arg0;
                    var2 = this;
                    var _closure3_slot0 = var3;
                    var4 = var2._numCells;
                    var0 = var3._numCells;
                    var0 = var4 === var0;
                    if (!var0) {
                        _fun4803_ip = 57;
                        continue _fun4803
                    }
                case 31:
                    var4 = var2._regions;
                    var4 = var4.length;
                    var3 = var3._regions;
                    var3 = var3.length;
                    var0 = var4 === var3;
                case 57:
                    if (!var0) {
                        _fun4803_ip = 82;
                        continue _fun4803
                    }
                case 60:
                    var3 = var2._regions;
                    var2 = var3.every;
                    var1 = function(arg0, arg1) { // Environment: var1
                        _fun4804: for (var _fun4804_ip = 0;;) switch (_fun4804_ip) {
                            case 0:
                                var2 = arg0;
                                var3 = arg1;
                                var4 = var2.first;
                                var0 = _closure3_slot0;
                                var0 = var0._regions;
                                var0 = var0[var3];
                                var0 = var0.first;
                                var0 = var4 === var0;
                                if (!var0) {
                                    _fun4804_ip = 72;
                                    continue _fun4804
                                }
                            case 42:
                                var5 = var2.last;
                                var4 = _closure3_slot0;
                                var4 = var4._regions;
                                var4 = var4[var3];
                                var4 = var4.last;
                                var0 = var5 === var4;
                            case 72:
                                if (!var0) {
                                    _fun4804_ip = 105;
                                    continue _fun4804
                                }
                            case 75:
                                var2 = var2.isSpacer;
                                var1 = _closure3_slot0;
                                var1 = var1._regions;
                                var1 = var1[var3];
                                var1 = var1.isSpacer;
                                var0 = var2 === var1;
                            case 105:
                                return var0;
                        }
                    };
                    var0 = var2.bind(var3)(var1);
                case 82:
                    return var0;
            }
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = '_findRegion';
        var0.key = var5;
        var4 = function(arg0) { // Original name: _findRegion, environment: var4
            _fun4805: for (var _fun4805_ip = 0;;) switch (_fun4805_ip) {
                case 0:
                    var6 = arg0;
                    var8 = this;
                    var0 = var8._regions;
                    var0 = var0.length;
                    var7 = 1;
                    var5 = var0 - var7;
                    var3 = global;
                    var0 = 2;
                    var4 = 0;
                    if (!(var4 <= var5)) {
                        _fun4805_ip = 142;
                        continue _fun4805
                    }
                case 35:
                    var9 = var3.Math;
                    var2 = var9.floor;
                    var1 = var4 + var5;
                    var1 = var1 / var0;
                    var1 = var2.bind(var9)(var1);
                    var2 = var8._regions;
                    var2 = var2[var1];
                    var9 = var2.first;
                    if (!(var6 >= var9)) {
                        _fun4805_ip = 90;
                        continue _fun4805
                    }
                case 80:
                    var9 = var2.last;
                    if (!(!(var6 <= var9))) {
                        _fun4805_ip = 199;
                        continue _fun4805
                    }
                case 90:
                    var9 = var2.first;
                    if (!(!(var6 < var9))) {
                        _fun4805_ip = 125;
                        continue _fun4805
                    }
                case 100:
                    var11 = var2.last;
                    var10 = var4;
                    var9 = var5;
                    if (!(var6 > var11)) {
                        _fun4805_ip = 132;
                        continue _fun4805
                    }
                case 116:
                    var10 = var1 + var7;
                    var9 = var5;
                    _fun4805_ip = 132;
                    continue _fun4805;
                case 125:
                    var9 = var1 - var7;
                    var10 = var4;
                case 132:
                    var4 = var10;
                    var5 = var9;
                    if (var4 <= var5) {
                        _fun4805_ip = 35;
                        continue _fun4805
                    }
                case 142:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var0 = 4;
                    var4 = var4[var0];
                    var0 = undefined;
                    var5 = var5.bind(var0)(var4);
                    var3 = var3.HermesInternal;
                    var4 = var3.concat;
                    var3 = 'A region was not found containing cellIdx ';
                    var4 = var4.bind(var3)(var6);
                    var3 = false;
                    var3 = var5.bind(var0)(var3, var4);
                    return var0;
                case 199:
                    var0 = new Array(2);
                    var0[0] = var2;
                    var0[1] = var1;
                    return var0;
            }
        };
        var0.value = var4;
        var1[4] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var2.CellRenderMask = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [65, 57, 6, 7, 44]);