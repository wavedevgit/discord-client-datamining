// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var2 = function arg0, arg1() {
        _fun58538: for (var _fun58538_ip = 0;;) switch (_fun58538_ip) {
            case 0:
                var4 = arg0;
                var3 = arg1;
                var6 = undefined;
                var1 = undefined;
                var2 = arguments.length;
                var0 = 2;
                var2 = var2 > var0;
                if (!var2) {
                    _fun58538_ip = 31;
                    continue _fun58538
                }
            case 23:
                var5 = arguments[var0];
                var2 = var6 !== var5;
            case 31:
                if (!var2) {
                    _fun58538_ip = 38;
                    continue _fun58538
                }
            case 34:
                var2 = arguments[var0];
            case 38:
                var5 = _closure1_slot0;
                var0 = _closure1_slot1;
                var7 = 0;
                var0 = var0[var7];
                var5 = var5.bind(var6)(var0);
                var0 = var5.isString;
                var0 = var0.bind(var5)(var4);
                var5 = !var0;
                var0 = !var5;
                if (var5) {
                    _fun58538_ip = 185;
                    continue _fun58538
                }
            case 80:
                var8 = _closure1_slot0;
                var5 = _closure1_slot1;
                var5 = var5[var7];
                var8 = var8.bind(var6)(var5);
                var5 = var8.isRegExp;
                var5 = var5.bind(var8)(var3);
                if (var5) {
                    _fun58538_ip = 172;
                    continue _fun58538
                }
            case 111:
                var5 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var7];
                var5 = var5.bind(var6)(var1);
                var1 = var5.isString;
                var1 = var1.bind(var5)(var3);
                var5 = !var1;
                var1 = !var5;
                if (var5) {
                    _fun58538_ip = 170;
                    continue _fun58538
                }
            case 148:
                if (var2) {
                    _fun58538_ip = 163;
                    continue _fun58538
                }
            case 151:
                var2 = var4.includes;
                var2 = var2.bind(var4)(var3);
                _fun58538_ip = 167;
                continue _fun58538;
            case 163:
                var2 = var4 === var3;
            case 167:
                var1 = var2;
            case 170:
                _fun58538_ip = 182;
                continue _fun58538;
            case 172:
                var2 = var3.test;
                var1 = var2.bind(var3)(var4);
            case 182:
                var0 = var1;
            case 185:
                return var0;
        }
    };
    var _closure1_slot2 = var2;
    var3 = global;
    var6 = var3.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var3 = true;
    var4.value = var3;
    var3 = '__esModule';
    var3 = var5.bind(var6)(var1, var3, var4);
    var1.isMatchingPattern = var2;
    var2 = function arg0, arg1() {
        _fun58539: for (var _fun58539_ip = 0;;) switch (_fun58539_ip) {
            case 0:
                var3 = arg0;
                var9 = var3;
                var8 = undefined;
                var0 = undefined;
                var10 = undefined;
                var11 = undefined;
                var7 = global;
                var2 = var7.Array;
                var1 = var2.isArray;
                var1 = var1.bind(var2)(var3);
                if (var1) {
                    _fun58539_ip = 41;
                    continue _fun58539
                }
            case 35:
                var1 = '';
                return var1;
            case 41:
                var0 = new Array(0);
                var6 = 0;
                var10 = 0;
                var1 = var9;
                var1 = var1.length;
                var5 = '[value cannot be serialized]';
                var4 = '[VueViewModel]';
                if (!(var6 < var1)) {
                    _fun58539_ip = 192;
                    continue _fun58539
                }
            case 76:
                var2 = var9;
                var1 = var10;
                var11 = var2[var1];
            case 86: // try_start_0
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var6];
                var12 = var2.bind(var8)(var1);
                var2 = var12.isVueViewModel;
                var1 = var11;
                var12 = var2.bind(var12)(var1);
                var2 = var0;
                var1 = var2.push;
                if (var12) {
                    _fun58539_ip = 149;
                    continue _fun58539
                }
            case 128:
                var13 = var7.String;
                var12 = var11;
                var12 = var13.bind(var8)(var12);
                var12 = var1.bind(var2)(var12);
                _fun58539_ip = 154;
                continue _fun58539;
            case 149:
                var1 = var1.bind(var2)(var4);
            case 154: // try_end0
                _fun58539_ip = 171;
                continue _fun58539;
            case 156: // catch_target0
                CatchBlockStart(arg_register = 1);
                var2 = var0;
                var1 = var2.push;
                var1 = var1.bind(var2)(var5);
            case 171:
                var1 = var10;
                var2 = var1 + 1;
                var10 = var2;
                var1 = var9;
                var1 = var1.length;
                if (var2 < var1) {
                    _fun58539_ip = 76;
                    continue _fun58539
                }
            case 192:
                var2 = var0;
                var1 = var2.join;
                var0 = arg1;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var1.safeJoin = var2;
    var2 = function arg0, arg1() {
        _fun58540: for (var _fun58540_ip = 0;;) switch (_fun58540_ip) {
            case 0:
                var0 = arg0;
                var6 = arg1;
                var4 = var0.length;
                var1 = 150;
                if (!(!(var4 <= var1))) {
                    _fun58540_ip = 187;
                    continue _fun58540
                }
            case 21:
                if (!(var6 > var4)) {
                    _fun58540_ip = 28;
                    continue _fun58540
                }
            case 25:
                var6 = var4;
            case 28:
                var1 = global;
                var5 = var1.Math;
                var3 = var5.max;
                var2 = 60;
                var2 = var6 - var2;
                var7 = 0;
                var3 = var3.bind(var5)(var2, var7);
                var6 = 5;
                if (!(var3 < var6)) {
                    _fun58540_ip = 65;
                    continue _fun58540
                }
            case 63:
                var3 = 0;
            case 65:
                var9 = var1.Math;
                var8 = var9.min;
                var5 = 140;
                var2 = var3 + var5;
                var2 = var8.bind(var9)(var2, var4);
                var6 = var4 - var6;
                if (!(var2 > var6)) {
                    _fun58540_ip = 100;
                    continue _fun58540
                }
            case 97:
                var2 = var4;
            case 100:
                if (!(var2 === var4)) {
                    _fun58540_ip = 125;
                    continue _fun58540
                }
            case 104:
                var8 = var1.Math;
                var6 = var8.max;
                var5 = var2 - var5;
                var3 = var6.bind(var8)(var5, var7);
            case 125:
                var5 = var0.slice;
                var6 = var5.bind(var0)(var3, var2);
                var5 = var3;
                var3 = var6;
                if (!(var5 > var7)) {
                    _fun58540_ip = 168;
                    continue _fun58540
                }
            case 146:
                var1 = var1.HermesInternal;
                var5 = var1.concat;
                var1 = "'{snip} ";
                var3 = var5.bind(var1)(var6);
            case 168:
                var1 = var3;
                if (!(var2 < var4)) {
                    _fun58540_ip = 185;
                    continue _fun58540
                }
            case 175:
                var2 = ' {snip}';
                var1 = var3 + var2;
            case 185:
                return var1;
            case 187:
                return var0;
        }
    };
    var1.snipLine = var2;
    var2 = function arg0() {
        _fun58541: for (var _fun58541_ip = 0;;) switch (_fun58541_ip) {
            case 0:
                var4 = undefined;
                var3 = undefined;
                var1 = arg0;
                var _closure2_slot0 = var1;
                var1 = arguments.length;
                var2 = 2;
                var1 = var1 > var2;
                if (!var1) {
                    _fun58541_ip = 34;
                    continue _fun58541
                }
            case 26:
                var5 = arguments[var2];
                var1 = var4 !== var5;
            case 34:
                if (!var1) {
                    _fun58541_ip = 41;
                    continue _fun58541
                }
            case 37:
                var1 = arguments[var2];
            case 41:
                var _closure2_slot1 = var1;
                var2 = arguments.length;
                var1 = 1;
                if (!(var2 > var1)) {
                    _fun58541_ip = 63;
                    continue _fun58541
                }
            case 55:
                var2 = arguments[var1];
                if (!(var4 === var2)) {
                    _fun58541_ip = 69;
                    continue _fun58541
                }
            case 63:
                var2 = new Array(0);
                _fun58541_ip = 73;
                continue _fun58541;
            case 69:
                var2 = arguments[var1];
            case 73:
                var1 = var2.some;
                var0 = function(arg0) { // Environment: var0
                    var4 = _closure1_slot2;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var4.bind(var1)(var3, var0, var2);
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var1.stringMatchesSomePattern = var2;
    var0 = function arg0() {
        _fun58543: for (var _fun58543_ip = 0;;) switch (_fun58543_ip) {
            case 0:
                var4 = arg0;
                var6 = undefined;
                var1 = undefined;
                var2 = arguments.length;
                var0 = 1;
                var5 = var2 > var0;
                var3 = 0;
                var2 = 0;
                if (!var5) {
                    _fun58543_ip = 38;
                    continue _fun58543
                }
            case 24:
                var5 = arguments[var0];
                var2 = 0;
                if (!(var6 !== var5)) {
                    _fun58543_ip = 38;
                    continue _fun58543
                }
            case 34:
                var2 = arguments[var0];
            case 38:
                var5 = 'string';
                var1 = typeof var4;
                var0 = var4;
                if (!(var5 === var1)) {
                    _fun58543_ip = 111;
                    continue _fun58543
                }
            case 52:
                var0 = var4;
                if (!(var3 !== var2)) {
                    _fun58543_ip = 111;
                    continue _fun58543
                }
            case 59:
                var1 = var4.length;
                var0 = var4;
                if (!(!(var1 <= var2))) {
                    _fun58543_ip = 111;
                    continue _fun58543
                }
            case 71:
                var1 = var4.slice;
                var4 = var1.bind(var4)(var3, var2);
                var1 = global;
                var1 = var1.HermesInternal;
                var3 = var1.concat;
                var2 = '';
                var1 = '...';
                var0 = var3.bind(var2)(var4, var1);
            case 111:
                return var0;
        }
    };
    var1.truncate = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [7128]);