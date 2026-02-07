// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var3 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var0 = require;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var3;
    var _closure1_slot2 = var4;
    var9 = function arg0, arg1() {
        _fun38420: for (var _fun38420_ip = 0;;) switch (_fun38420_ip) {
            case 0:
                var7 = arg0;
                var6 = arg1;
                var0 = new Array(0);
                var3 = undefined;
                var2 = 8;
                var1 = 24;
                var5 = 0;
            case 23:
                var9 = var0.push;
                var10 = _closure1_slot5;
                var8 = var6 + var5;
                var8 = var10.bind(var3)(var7, var8);
                var8 = var9.bind(var0)(var8);
                var5 = var5 + var2;
                if (var5 < var1) {
                    _fun38420_ip = 23;
                    continue _fun38420
                }
            case 55:
                return var0;
        }
    };
    var0 = function arg0, arg1() {
        var5 = arg0;
        var6 = arg1;
        var4 = _closure1_slot6;
        var3 = undefined;
        var2 = 8;
        var1 = var4.bind(var3)(var5, var6, var2);
        var0 = 4;
        var0 = var6 + var0;
        var2 = var4.bind(var3)(var5, var0, var2);
        var0 = new Array(2);
        var0[0] = var2;
        var0[1] = var1;
        return var0;
    };
    var _closure1_slot5 = var0;
    var0 = function arg0, arg1, arg2() {
        _fun38422: for (var _fun38422_ip = 0;;) switch (_fun38422_ip) {
            case 0:
                var6 = arg2;
                var1 = _closure1_slot1;
                var3 = _closure1_slot2;
                var0 = 3;
                var0 = var3[var0];
                var9 = undefined;
                var4 = var1.bind(var9)(var0);
                var3 = var4.getLongAt;
                var1 = arg0;
                var0 = arg1;
                var3 = var3.bind(var4)(var1, var0);
                var0 = 31;
                var4 = var3 >>> var0;
                var1 = -1;
                var0 = 0;
                if (!(var4 === var0)) {
                    _fun38422_ip = 68;
                    continue _fun38422
                }
            case 65:
                var1 = 1;
            case 68:
                var0 = 2130706432;
                var5 = var0 & var3;
                var0 = 32;
                var4 = var0 - var6;
                var11 = var5 >>> var4;
                var4 = global;
                var5 = var4.parseInt;
                var8 = _closure1_slot0;
                var7 = _closure1_slot2;
                var4 = 2;
                var2 = var7[var4];
                var13 = var8.bind(var9)(var2);
                var12 = var13.strRepeat;
                var10 = var0 - var6;
                var2 = '1';
                var2 = var12.bind(var13)(var2, var10);
                var2 = var5.bind(var9)(var2, var4);
                var10 = var3 & var2;
                var2 = var7[var4];
                var3 = var8.bind(var9)(var2);
                var2 = var3.parseFloatRadix;
                var5 = var11.toString;
                var11 = var5.bind(var11)(var4);
                var5 = '.';
                var5 = var11 + var5;
                var7 = var7[var4];
                var9 = var8.bind(var9)(var7);
                var8 = var9.padStart;
                var7 = var10.toString;
                var7 = var7.bind(var10)(var4);
                var6 = var0 - var6;
                var0 = '0';
                var0 = var8.bind(var9)(var7, var6, var0);
                var0 = var5 + var0;
                var0 = var2.bind(var3)(var0, var4);
                var0 = var1 * var0;
                return var0;
        }
    };
    var _closure1_slot6 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var1);
    var0 = 0;
    var1 = var4[var0];
    var0 = undefined;
    var8 = var3.bind(var0)(var1);
    var1 = 1;
    var1 = var4[var1];
    var1 = var3.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = {
        'CLOSED_SUBPATH_LENGTH': 0,
        'CLOSED_SUBPATH_BEZIER_LINKED': 1,
        'CLOSED_SUBPATH_BEZIER_UNLINKED': 2,
        'OPEN_SUBPATH_LENGTH': 3,
        'OPEN_SUBPATH_BEZIER_LINKED': 4,
        'OPEN_SUBPATH_BEZIER_UNLINKED': 5,
        'FILL_RULE': 6,
        'CLIPBOARD': 7,
        'INITIAL_FILL_RULE': 8
    };
    var3 = {};
    var4 = {};
    var6 = 'PathInformation';
    var4.name = var6;
    var6 = function arg0() {
        _fun38423: for (var _fun38423_ip = 0;;) switch (_fun38423_ip) {
            case 0:
                var9 = arg0;
                var4 = {};
                var3 = new Array(0);
                var0 = var9.byteLength;
                var8 = 0;
                var0 = var8 < var0;
                var7 = 26;
                var5 = 2;
                var2 = 3;
                var1 = undefined;
                if (!var0) {
                    _fun38423_ip = 167;
                    continue _fun38423
                }
            case 41:
                var10 = _closure1_slot1;
                var0 = _closure1_slot2;
                var0 = var0[var2];
                var10 = var10.bind(var1)(var0);
                var0 = var10.getShortAt;
                var13 = var0.bind(var10)(var9, var8);
                var0 = _closure1_slot4;
                var10 = var0[var13];
                var0 = var8;
                if (!var10) {
                    _fun38423_ip = 153;
                    continue _fun38423
                }
            case 84:
                var10 = var4[var13];
                if (var10) {
                    _fun38423_ip = 108;
                    continue _fun38423
                }
            case 91:
                var10 = _closure1_slot4;
                var10 = var10[var13];
                var10 = var10.description;
                var4[var13] = var10;
            case 108:
                var11 = var3.push;
                var10 = {};
                var10.type = var13;
                var12 = _closure1_slot4;
                var14 = var12[var13];
                var13 = var14.path;
                var12 = var0 + var5;
                var12 = var13.bind(var14)(var9, var12);
                var10.path = var12;
                var10 = var11.bind(var3)(var10);
            case 153:
                var8 = var0 + var7;
                var0 = var9.byteLength;
                if (var8 < var0) {
                    _fun38423_ip = 41;
                    continue _fun38423
                }
            case 167:
                var0 = global;
                var2 = var0.JSON;
                var1 = var2.stringify;
                var0 = {};
                var0.types = var4;
                var0.paths = var3;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var4.description = var6;
    var3[2000] = var4;
    var4 = {};
    var6 = 'ClippingPathName';
    var4.name = var6;
    var6 = function arg0() {
        var4 = _closure1_slot0;
        var1 = _closure1_slot2;
        var3 = 2;
        var1 = var1[var3];
        var2 = undefined;
        var6 = var4.bind(var2)(var1);
        var5 = var6.getPascalStringFromDataView;
        var4 = arg0;
        var1 = 0;
        var1 = var5.bind(var6)(var4, var1);
        var0 = _closure1_slot3;
        var1 = var0.bind(var2)(var1, var3);
        var0 = 1;
        var0 = var1[var0];
        return var0;
    };
    var4.description = var6;
    var3[2999] = var4;
    var7 = var1.CLOSED_SUBPATH_LENGTH;
    var6 = {};
    var4 = 'Closed subpath length';
    var6.description = var4;
    var4 = function arg0, arg1() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.getShortAt;
        var1 = arg0;
        var0 = arg1;
        var1 = var2.bind(var3)(var1, var0);
        var0 = new Array(1);
        var0[0] = var1;
        return var0;
    };
    var6.path = var4;
    var4 = {};
    var7 = var8.bind(var0)(var4, var7, var6);
    var6 = var1.CLOSED_SUBPATH_BEZIER_LINKED;
    var4 = {};
    var10 = 'Closed subpath Bezier knot, linked';
    var4.description = var10;
    var4.path = var9;
    var7 = var8.bind(var0)(var7, var6, var4);
    var6 = var1.CLOSED_SUBPATH_BEZIER_UNLINKED;
    var4 = {};
    var10 = 'Closed subpath Bezier knot, unlinked';
    var4.description = var10;
    var4.path = var9;
    var7 = var8.bind(var0)(var7, var6, var4);
    var6 = var1.OPEN_SUBPATH_LENGTH;
    var4 = {};
    var10 = 'Open subpath length';
    var4.description = var10;
    var10 = function arg0, arg1() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.getShortAt;
        var1 = arg0;
        var0 = arg1;
        var1 = var2.bind(var3)(var1, var0);
        var0 = new Array(1);
        var0[0] = var1;
        return var0;
    };
    var4.path = var10;
    var7 = var8.bind(var0)(var7, var6, var4);
    var6 = var1.OPEN_SUBPATH_BEZIER_LINKED;
    var4 = {};
    var10 = 'Open subpath Bezier knot, linked';
    var4.description = var10;
    var4.path = var9;
    var7 = var8.bind(var0)(var7, var6, var4);
    var6 = var1.OPEN_SUBPATH_BEZIER_UNLINKED;
    var4 = {};
    var10 = 'Open subpath Bezier knot, unlinked';
    var4.description = var10;
    var4.path = var9;
    var7 = var8.bind(var0)(var7, var6, var4);
    var6 = var1.FILL_RULE;
    var4 = {};
    var9 = 'Path fill rule';
    var4.description = var9;
    var9 = function() {
        var0 = new Array(0);
        return var0;
    };
    var4.path = var9;
    var7 = var8.bind(var0)(var7, var6, var4);
    var6 = var1.INITIAL_FILL_RULE;
    var4 = {};
    var9 = 'Initial fill rule';
    var4.description = var9;
    var9 = function arg0, arg1() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.getShortAt;
        var1 = arg0;
        var0 = arg1;
        var1 = var2.bind(var3)(var1, var0);
        var0 = new Array(1);
        var0[0] = var1;
        return var0;
    };
    var4.path = var9;
    var7 = var8.bind(var0)(var7, var6, var4);
    var6 = var1.CLIPBOARD;
    var4 = {};
    var9 = 'Clipboard';
    var4.description = var9;
    var9 = function arg0, arg1() {
        var5 = arg0;
        var6 = arg1;
        var4 = _closure1_slot6;
        var3 = undefined;
        var2 = 8;
        var0 = var4.bind(var3)(var5, var6, var2);
        var1 = new Array(4);
        var1[0] = var0;
        var0 = 4;
        var0 = var6 + var0;
        var0 = var4.bind(var3)(var5, var0, var2);
        var1[1] = var0;
        var0 = var6 + var2;
        var0 = var4.bind(var3)(var5, var0, var2);
        var1[2] = var0;
        var0 = 12;
        var0 = var6 + var0;
        var0 = var4.bind(var3)(var5, var0, var2);
        var1[3] = var0;
        var0 = new Array(2);
        var0[0] = var1;
        var1 = 16;
        var1 = var6 + var1;
        var1 = var4.bind(var3)(var5, var1, var2);
        var0[1] = var1;
        return var0;
    };
    var4.path = var9;
    var4 = var8.bind(var0)(var7, var6, var4);
    var _closure1_slot4 = var4;
    var2.default = var3;
    var2.PathRecordTypes = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [77, 57, 4165, 4182]);