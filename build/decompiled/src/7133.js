// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var2 = function arg0, arg1() {
        _fun58553: for (var _fun58553_ip = 0;;) switch (_fun58553_ip) {
            case 0:
                var0 = arg0;
                var8 = arg1;
                var9 = undefined;
                var10 = undefined;
                var11 = undefined;
                var1 = var0;
                var _closure2_slot0 = var0;
                var4 = new Array(0);
                var2 = var4;
                var _closure2_slot1 = var4;
                if (!var0) {
                    _fun58553_ip = 47;
                    continue _fun58553
                }
            case 35:
                var0 = var1;
                var0 = var0.tagName;
                if (var0) {
                    _fun58553_ip = 53;
                    continue _fun58553
                }
            case 47:
                var0 = '';
                return var0;
            case 53:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var0 = 0;
                var0 = var6[var0];
                var0 = var5.bind(var9)(var0);
                var0 = var0.GLOBAL_OBJ;
                var0 = var0.HTMLElement;
                if (!var0) {
                    _fun58553_ip = 162;
                    continue _fun58553
                }
            case 90:
                var5 = var1;
                var0 = global;
                var0 = var0.HTMLElement;
                var0 = var5 instanceof var0;
                if (!var0) {
                    _fun58553_ip = 162;
                    continue _fun58553
                }
            case 108:
                var0 = var1;
                var0 = var0.dataset;
                if (!var0) {
                    _fun58553_ip = 162;
                    continue _fun58553
                }
            case 120:
                var0 = var1;
                var0 = var0.dataset;
                var5 = var0.sentryComponent;
                var0 = var1;
                var0 = var0.dataset;
                if (var5) {
                    _fun58553_ip = 606;
                    continue _fun58553
                }
            case 150:
                var5 = var0.sentryElement;
                if (var5) {
                    _fun58553_ip = 592;
                    continue _fun58553
                }
            case 162:
                var7 = var2;
                var6 = var7.push;
                var5 = var1;
                var12 = var5.tagName;
                var5 = var12.toLowerCase;
                var5 = var5.bind(var12)();
                var5 = var6.bind(var7)(var5);
                var5 = null;
                if (!var8) {
                    _fun58553_ip = 239;
                    continue _fun58553
                }
            case 199:
                var6 = var8.length;
                var5 = null;
                if (!var6) {
                    _fun58553_ip = 239;
                    continue _fun58553
                }
            case 209:
                var7 = var8.filter;
                var6 = function(arg0) { // Environment: var3
                    var2 = _closure2_slot0;
                    var1 = var2.getAttribute;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var8 = var7.bind(var8)(var6);
                var7 = var8.map;
                var6 = function(arg0) { // Environment: var3
                    var3 = arg0;
                    var0 = new Array(2);
                    var0[0] = var3;
                    var2 = _closure2_slot0;
                    var1 = var2.getAttribute;
                    var1 = var1.bind(var2)(var3);
                    var0[1] = var1;
                    return var0;
                };
                var5 = var7.bind(var8)(var6);
            case 239:
                if (!var5) {
                    _fun58553_ip = 253;
                    continue _fun58553
                }
            case 242:
                var6 = var5.length;
                if (var6) {
                    _fun58553_ip = 441;
                    continue _fun58553
                }
            case 253:
                var6 = var1;
                var6 = var6.id;
                if (!var6) {
                    _fun58553_ip = 307;
                    continue _fun58553
                }
            case 264:
                var8 = var2;
                var7 = var8.push;
                var6 = var1;
                var13 = var6.id;
                var6 = global;
                var6 = var6.HermesInternal;
                var12 = var6.concat;
                var6 = '#';
                var6 = var12.bind(var6)(var13);
                var6 = var7.bind(var8)(var6);
            case 307:
                var6 = var1;
                var7 = var6.className;
                if (!var7) {
                    _fun58553_ip = 456;
                    continue _fun58553
                }
            case 322:
                var6 = _closure1_slot0;
                var8 = _closure1_slot1;
                var4 = 1;
                var4 = var8[var4];
                var6 = var6.bind(var9)(var4);
                var4 = var6.isString;
                var4 = var4.bind(var6)(var7);
                if (!var4) {
                    _fun58553_ip = 456;
                    continue _fun58553
                }
            case 356:
                var6 = var7.split;
                var4 = /\s+/;
                var4 = var6.bind(var7)(var4);
                var8 = var4;
                var6 = var8[Symbol.iterator];
                var8 = var6().next;
                var7 = global;
                var4 = '.';
            case 392:
                var15 = var8().value;
                var12 = var6;
                if (!(var12 !== var9)) {
                    _fun58553_ip = 456;
                    continue _fun58553
                }
            case 403: // try_start_0
                var14 = var2;
                var13 = var14.push;
                var12 = var7.HermesInternal;
                var12 = var12.concat;
                var12 = var12.bind(var4)(var15);
                var12 = var13.bind(var14)(var12);
            case 432: // try_end0
                _fun58553_ip = 392;
                continue _fun58553;
            case 434: // catch_target0
                CatchBlockStart(arg_register = 4);
                var6.return();
                throw var4;
            case 441:
                var4 = var5.forEach;
                var3 = function(arg0) { // Environment: var3
                    var3 = arg0;
                    var2 = _closure2_slot1;
                    var1 = var2.push;
                    var0 = 0;
                    var11 = var3[var0];
                    var0 = 1;
                    var9 = var3[var0];
                    var0 = global;
                    var0 = var0.HermesInternal;
                    var5 = var0.concat;
                    var12 = '[';
                    var10 = '="';
                    var8 = '"]';
                    var0 = var12[var5](var11, var10, var9, var8, var7);
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var3 = var4.bind(var5)(var3);
            case 456:
                var8 = ['aria-label', 'type', 'name', 'title', 'alt'];
                var4 = var8[Symbol.iterator];
                var8 = var4().next;
                var7 = global;
                var6 = '[';
                var5 = '="';
                var3 = '"]';
            case 487:
                var14 = var8().value;
                var12 = var4;
                if (!(var12 !== var9)) {
                    _fun58553_ip = 573;
                    continue _fun58553
                }
            case 498: // try_start_1
                var10 = var14;
                var13 = var1;
                var12 = var13.getAttribute;
                var12 = var12.bind(var13)(var14);
                var11 = var12;
                if (!var12) {
                    _fun58553_ip = 564;
                    continue _fun58553
                }
            case 521:
                var14 = var2;
                var13 = var14.push;
                var20 = var10;
                var18 = var11;
                var12 = var7.HermesInternal;
                var12 = var12.concat;
                var21 = var6;
                var19 = var5;
                var17 = var3;
                var12 = var21[var12](var20, var19, var18, var17, var16);
                var12 = var13.bind(var14)(var12);
            case 564: // try_end1
                _fun58553_ip = 487;
                continue _fun58553;
            case 566: // catch_target1
                CatchBlockStart(arg_register = 3);
                var4.return();
                throw var3;
            case 573:
                var4 = var2;
                var3 = var4.join;
                var2 = '';
                var2 = var3.bind(var4)(var2);
                return var2;
            case 592:
                var1 = var1.dataset;
                var1 = var1.sentryElement;
                return var1;
            case 606:
                var0 = var0.sentryComponent;
                return var0;
        }
    };
    var _closure1_slot2 = var2;
    var2 = global;
    var5 = var2.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var2 = true;
    var3.value = var2;
    var2 = '__esModule';
    var2 = var4.bind(var5)(var1, var2, var3);
    var2 = function arg0() {
        _fun58557: for (var _fun58557_ip = 0;;) switch (_fun58557_ip) {
            case 0:
                var5 = arg0;
                var2 = _closure1_slot0;
                var0 = _closure1_slot1;
                var4 = 0;
                var1 = var0[var4];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.GLOBAL_OBJ;
                var0 = var0.HTMLElement;
                var3 = 5;
                var2 = global;
                if (var0) {
                    _fun58557_ip = 51;
                    continue _fun58557
                }
            case 47:
                var0 = null;
                return var0;
            case 51:
                var1 = var5;
                if (var1) {
                    _fun58557_ip = 61;
                    continue _fun58557
                }
            case 57:
                var0 = null;
                return var0;
            case 61:
                var0 = var2.HTMLElement;
                var0 = var1 instanceof var0;
                if (!var0) {
                    _fun58557_ip = 104;
                    continue _fun58557
                }
            case 74:
                var0 = var1.dataset;
                var6 = var0.sentryComponent;
                var0 = var1.dataset;
                if (var6) {
                    _fun58557_ip = 135;
                    continue _fun58557
                }
            case 95:
                var6 = var0.sentryElement;
                if (var6) {
                    _fun58557_ip = 121;
                    continue _fun58557
                }
            case 104:
                var5 = var1.parentNode;
                var4 = var4 + 1;
                if (var4 < var3) {
                    _fun58557_ip = 51;
                    continue _fun58557
                }
            case 117:
                var2 = null;
                return var2;
            case 121:
                var1 = var1.dataset;
                var1 = var1.sentryElement;
                return var1;
            case 135:
                var0 = var0.sentryComponent;
                return var0;
        }
    };
    var1.getComponentName = var2;
    var2 = function arg0() {
        _fun58558: for (var _fun58558_ip = 0;;) switch (_fun58558_ip) {
            case 0:
                var2 = _closure1_slot0;
                var0 = _closure1_slot1;
                var4 = 0;
                var0 = var0[var4];
                var3 = undefined;
                var0 = var2.bind(var3)(var0);
                var0 = var0.GLOBAL_OBJ;
                var2 = var0.document;
                var0 = null;
                if (!var2) {
                    _fun58558_ip = 124;
                    continue _fun58558
                }
            case 41:
                var6 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var4];
                var2 = var6.bind(var3)(var2);
                var2 = var2.GLOBAL_OBJ;
                var2 = var2.document;
                var2 = var2.querySelector;
                var0 = null;
                if (!var2) {
                    _fun58558_ip = 124;
                    continue _fun58558
                }
            case 81:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var4];
                var1 = var2.bind(var3)(var1);
                var1 = var1.GLOBAL_OBJ;
                var3 = var1.document;
                var2 = var3.querySelector;
                var1 = arg0;
                var0 = var2.bind(var3)(var1);
            case 124:
                return var0;
        }
    };
    var1.getDomElement = var2;
    var2 = function() {
        _fun58559: for (var _fun58559_ip = 0;;) switch (_fun58559_ip) {
            case 0: // try_start_0
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 0;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.GLOBAL_OBJ;
                var0 = var0.document;
                var0 = var0.location;
                var0 = var0.href;
            case 47: // try_end0
                return var0;
            case 49: // catch_target0
                CatchBlockStart(arg_register = 0);
                var0 = '';
                return var0;
        }
    };
    var1.getLocationHref = var2;
    var0 = function arg0() {
        _fun58560: for (var _fun58560_ip = 0;;) switch (_fun58560_ip) {
            case 0:
                var8 = undefined;
                var4 = undefined;
                var1 = arg0;
                var3 = undefined;
                var9 = undefined;
                var10 = undefined;
                var0 = undefined;
                var11 = undefined;
                var12 = undefined;
                var13 = undefined;
                var14 = undefined;
                var2 = arguments.length;
                var7 = 1;
                if (!(var2 > var7)) {
                    _fun58560_ip = 41;
                    continue _fun58560
                }
            case 33:
                var2 = arguments[var7];
                if (!(var8 === var2)) {
                    _fun58560_ip = 45;
                    continue _fun58560
                }
            case 41:
                var2 = {};
                _fun58560_ip = 49;
                continue _fun58560;
            case 45:
                var2 = arguments[var7];
            case 49:
                var3 = var2;
                var2 = var1;
                if (var2) {
                    _fun58560_ip = 66;
                    continue _fun58560
                }
            case 58:
                var2 = '<unknown>';
                return var2;
            case 66: // try_start_0
                var10 = var1;
                var0 = new Array(0);
                var11 = 0;
                var12 = 0;
                var4 = global;
                var5 = var4.Array;
                var2 = var5.isArray;
                var1 = var3;
                var1 = var2.bind(var5)(var1);
                var2 = var3;
                if (var1) {
                    _fun58560_ip = 112;
                    continue _fun58560
                }
            case 104:
                var1 = var2.keyAttrs;
                _fun58560_ip = 115;
                continue _fun58560;
            case 112:
                var1 = var2;
            case 115:
                var13 = var1;
                var6 = var4.Array;
                var5 = var6.isArray;
                var4 = var3;
                var4 = var5.bind(var6)(var4);
                var4 = !var4;
                var2 = var4;
                if (!var4) {
                    _fun58560_ip = 152;
                    continue _fun58560
                }
            case 146:
                var2 = var3.maxStringLength;
            case 152:
                var1 = var2;
                if (var2) {
                    _fun58560_ip = 161;
                    continue _fun58560
                }
            case 158:
                var1 = 80;
            case 161:
                var14 = var1;
                var1 = var10;
                if (!var1) {
                    _fun58560_ip = 400;
                    continue _fun58560
                }
            case 173:
                var1 = var11;
                var1 = parseFloat(var1);
                var11 = var1 + 1;
                var6 = 5;
                if (!(var1 < var6)) {
                    _fun58560_ip = 400;
                    continue _fun58560
                }
            case 192:
                var3 = _closure1_slot2;
                var2 = var10;
                var1 = var13;
                var1 = var3.bind(var8)(var2, var1);
                var9 = var1;
                var4 = 'html';
                if (!(var4 !== var1)) {
                    _fun58560_ip = 400;
                    continue _fun58560
                }
            case 225:
                var1 = var11;
                var3 = 3;
                if (!(var1 > var7)) {
                    _fun58560_ip = 276;
                    continue _fun58560
                }
            case 235:
                var2 = var12;
                var1 = var0;
                var1 = var1.length;
                var1 = var3 * var1;
                var2 = var2 + var1;
                var1 = var9;
                var1 = var1.length;
                var2 = var2 + var1;
                var1 = var14;
                if (!(!(var2 >= var1))) {
                    _fun58560_ip = 400;
                    continue _fun58560
                }
            case 276:
                var15 = var0;
                var2 = var15.push;
                var1 = var9;
                var2 = var2.bind(var15)(var1);
                var2 = var12;
                var1 = var1.length;
                var12 = var2 + var1;
                var1 = var10;
                var1 = var1.parentNode;
                var10 = var1;
                if (!var1) {
                    _fun58560_ip = 400;
                    continue _fun58560
                }
            case 319:
                var1 = var11;
                var1 = parseFloat(var1);
                var11 = var1 + 1;
                if (!(var1 < var6)) {
                    _fun58560_ip = 400;
                    continue _fun58560
                }
            case 332:
                var15 = _closure1_slot2;
                var2 = var10;
                var1 = var13;
                var1 = var15.bind(var8)(var2, var1);
                var9 = var1;
                if (!(var4 !== var1)) {
                    _fun58560_ip = 400;
                    continue _fun58560
                }
            case 355:
                var1 = var11;
                if (!(var1 > var7)) {
                    _fun58560_ip = 276;
                    continue _fun58560
                }
            case 362:
                var2 = var12;
                var1 = var0;
                var1 = var1.length;
                var1 = var3 * var1;
                var2 = var2 + var1;
                var1 = var9;
                var1 = var1.length;
                var2 = var2 + var1;
                var1 = var14;
                if (!(var2 >= var1)) {
                    _fun58560_ip = 276;
                    continue _fun58560
                }
            case 400:
                var1 = var0;
                var0 = var1.reverse;
                var2 = var0.bind(var1)();
                var1 = var2.join;
                var0 = ' > ';
                var0 = var1.bind(var2)(var0);
            case 429: // try_end0
                return var0;
            case 431: // catch_target0
                CatchBlockStart(arg_register = 0);
                var0 = '<unknown>';
                return var0;
        }
    };
    var1.htmlTreeAsString = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [7134, 7130]);