// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var5;
    var0 = function arg0() {
        _fun48903: for (var _fun48903_ip = 0;;) switch (_fun48903_ip) {
            case 0:
                var0 = arg0;
                var2 = typeof var0;
                var1 = 'number';
                if (!(var1 !== var2)) {
                    _fun48903_ip = 172;
                    continue _fun48903
                }
            case 17:
                var1 = 'object';
                if (!(var1 === var2)) {
                    _fun48903_ip = 42;
                    continue _fun48903
                }
            case 25:
                var1 = var0.__getAnimatedValue;
                var3 = 'function';
                var1 = typeof var1;
                if (!(var3 !== var1)) {
                    _fun48903_ip = 160;
                    continue _fun48903
                }
            case 42:
                var1 = 'string';
                var4 = var1 === var2;
                if (!var4) {
                    _fun48903_ip = 71;
                    continue _fun48903
                }
            case 53:
                var2 = var0.match;
                var1 = _closure1_slot5;
                var4 = var2.bind(var0)(var1);
            case 71:
                if (var4) {
                    _fun48903_ip = 123;
                    continue _fun48903
                }
            case 74:
                var1 = global;
                var3 = var1.console;
                var2 = var3.warn;
                var1 = var1.HermesInternal;
                var6 = var1.concat;
                var5 = '"';
                var1 = '" is not a valid number or percentage string.';
                var1 = var6.bind(var5)(var0, var1);
                var1 = var2.bind(var3)(var1);
                var1 = 0;
                _fun48903_ip = 158;
                continue _fun48903;
            case 123:
                var2 = 2;
                var2 = var4[var2];
                var3 = 1;
                var3 = var4[var3];
                var4 = var3 - 0;
                if (var2) {
                    _fun48903_ip = 148;
                    continue _fun48903
                }
            case 143:
                var2 = var4;
                _fun48903_ip = 155;
                continue _fun48903;
            case 148:
                var3 = 100;
                var2 = var4 / var3;
            case 155:
                var1 = var2;
            case 158:
                return var1;
            case 160:
                var1 = var0.__getAnimatedValue;
                var1 = var1.bind(var0)();
                return var1;
            case 172:
                return var0;
        }
    };
    var _closure1_slot7 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var3 = 0;
    var7 = var5[var3];
    var6 = arg3;
    var0 = undefined;
    var6 = var6.bind(var0)(var7);
    var _closure1_slot2 = var6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Children;
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.processColor;
    var _closure1_slot4 = var3;
    var3 = /^([+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)(%?)$/;
    var _closure1_slot5 = var3;
    var3 = function arg0, arg1() {
        var0 = arg0;
        var2 = 0;
        var1 = var0[var2];
        var0 = arg1;
        var0 = var0[var2];
        var0 = var1 - var0;
        return var0;
    };
    var _closure1_slot6 = var3;
    var1 = function arg0, arg1() {
        _fun48905: for (var _fun48905_ip = 0;;) switch (_fun48905_ip) {
            case 0:
                var4 = arg0;
                var1 = arg1;
                var _closure2_slot0 = var1;
                var10 = var4.id;
                var7 = var4.children;
                var3 = var4.gradientTransform;
                var5 = var4.transform;
                var9 = var4.gradientUnits;
                if (var10) {
                    _fun48905_ip = 46;
                    continue _fun48905
                }
            case 42:
                var1 = null;
                return var1;
            case 46:
                var13 = new Array(0);
                if (var7) {
                    _fun48905_ip = 59;
                    continue _fun48905
                }
            case 53:
                var6 = new Array(0);
                _fun48905_ip = 82;
                continue _fun48905;
            case 59:
                var2 = _closure1_slot3;
                var1 = var2.map;
                var0 = function(arg0) { // Environment: var0
                    var3 = _closure1_slot2;
                    var2 = var3.cloneElement;
                    var1 = {};
                    var0 = _closure2_slot0;
                    var1.parent = var0;
                    var0 = arg0;
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                var6 = var1.bind(var2)(var7, var0);
            case 82:
                var21 = var6.length;
                var7 = 0;
                var22 = var7 < var21;
                var20 = global;
                var19 = '"';
                var18 = '" is not a valid color or "';
                var17 = '" is not a valid offset';
                var16 = 2;
                var2 = undefined;
                var15 = 255;
                var14 = 16777215;
                var12 = 24;
                var11 = 'number';
                var8 = '#000';
                var0 = 0;
                if (!var22) {
                    _fun48905_ip = 431;
                    continue _fun48905
                }
            case 149:
                var22 = var6[var0];
                var22 = var22.props;
                var23 = var22.style;
                var26 = var22.offset;
                if (!(var2 === var26)) {
                    _fun48905_ip = 188;
                    continue _fun48905
                }
            case 173:
                var24 = var23;
                if (!var23) {
                    _fun48905_ip = 185;
                    continue _fun48905
                }
            case 179:
                var24 = var23.offset;
            case 185:
                var26 = var24;
            case 188:
                var25 = var22.stopColor;
                if (!(var2 === var25)) {
                    _fun48905_ip = 219;
                    continue _fun48905
                }
            case 198:
                var24 = var23;
                if (!var23) {
                    _fun48905_ip = 210;
                    continue _fun48905
                }
            case 204:
                var24 = var23.stopColor;
            case 210:
                if (var24) {
                    _fun48905_ip = 216;
                    continue _fun48905
                }
            case 213:
                var24 = var8;
            case 216:
                var25 = var24;
            case 219:
                var29 = var22.stopOpacity;
                if (!(var2 === var29)) {
                    _fun48905_ip = 244;
                    continue _fun48905
                }
            case 229:
                var22 = var23;
                if (!var22) {
                    _fun48905_ip = 241;
                    continue _fun48905
                }
            case 235:
                var22 = var23.stopOpacity;
            case 241:
                var29 = var22;
            case 244:
                var23 = _closure1_slot7;
                var22 = var26;
                if (var22) {
                    _fun48905_ip = 256;
                    continue _fun48905
                }
            case 254:
                var22 = 0;
            case 256:
                var28 = var23.bind(var2)(var22);
                var27 = var25;
                if (!var27) {
                    _fun48905_ip = 276;
                    continue _fun48905
                }
            case 267:
                var22 = _closure1_slot4;
                var27 = var22.bind(var2)(var25);
            case 276:
                var22 = typeof var27;
                if (!(var11 === var22)) {
                    _fun48905_ip = 375;
                    continue _fun48905
                }
            case 283:
                var22 = var20.isNaN;
                var22 = var22.bind(var2)(var28);
                if (var22) {
                    _fun48905_ip = 375;
                    continue _fun48905
                }
            case 297:
                var24 = var20.Math;
                var23 = var24.round;
                var30 = _closure1_slot0;
                var22 = _closure1_slot1;
                var22 = var22[var16];
                var22 = var30.bind(var2)(var22);
                var22 = var22.bind(var2)(var29);
                var22 = var15 * var22;
                var24 = var23.bind(var24)(var22);
                var23 = var13.push;
                var22 = new Array(2);
                var22[0] = var28;
                var27 = var14 & var27;
                var24 = var24 << var12;
                var24 = var27 | var24;
                var22[1] = var24;
                var22 = var23.bind(var13)(var22);
                _fun48905_ip = 421;
                continue _fun48905;
            case 375:
                var24 = var20.console;
                var23 = var24.warn;
                var22 = var20.HermesInternal;
                var22 = var22.concat;
                var35 = var19;
                var34 = var25;
                var33 = var18;
                var32 = var26;
                var31 = var17;
                var22 = var35[var22](var34, var33, var32, var31, var30);
                var22 = var23.bind(var24)(var22);
            case 421:
                var0 = var0 + 1;
                if (var0 < var21) {
                    _fun48905_ip = 149;
                    continue _fun48905
                }
            case 431:
                var8 = var13.sort;
                var0 = _closure1_slot6;
                var0 = var8.bind(var13)(var0);
                var8 = new Array(0);
                var12 = var13.length;
                var14 = var7 < var12;
                var11 = 1;
                var0 = 0;
                if (!var14) {
                    _fun48905_ip = 497;
                    continue _fun48905
                }
            case 467:
                var14 = var13[var0];
                var16 = var8.push;
                var15 = var14[var7];
                var14 = var14[var11];
                var14 = var16.bind(var8)(var15, var14);
                var0 = var0 + 1;
                if (var0 < var12) {
                    _fun48905_ip = 467;
                    continue _fun48905
                }
            case 497:
                var0 = {};
                var0.name = var10;
                var0.gradient = var8;
                var0.children = var6;
                var6 = var9;
                if (!var6) {
                    _fun48905_ip = 542;
                    continue _fun48905
                }
            case 518:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var8 = 3;
                var8 = var11[var8];
                var8 = var10.bind(var2)(var8);
                var6 = var8[var9];
            case 542:
                if (var6) {
                    _fun48905_ip = 547;
                    continue _fun48905
                }
            case 545:
                var6 = 0;
            case 547:
                var0.gradientUnits = var6;
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var1 = 4;
                var1 = var7[var1];
                var1 = var6.bind(var2)(var1);
                if (var3) {
                    _fun48905_ip = 578;
                    continue _fun48905
                }
            case 575:
                var3 = var5;
            case 578:
                if (var3) {
                    _fun48905_ip = 584;
                    continue _fun48905
                }
            case 581:
                var3 = var4;
            case 584:
                var1 = var1.bind(var2)(var3);
                var0.gradientTransform = var1;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 5466, 5538, 5468]);