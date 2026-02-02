// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
    var0 = dependencyMap;
    var _closure1_slot1 = var0;
    var0 = function arg0, arg1() {
        _fun38152: for (var _fun38152_ip = 0;;) switch (_fun38152_ip) {
            case 0:
                var3 = arg0;
                var6 = arg1;
                var1 = var3.getUint32;
                var0 = false;
                var1 = var1.bind(var3)(var6, var0);
                var0 = 943868237;
                if (!(var0 === var1)) {
                    _fun38152_ip = 148;
                    continue _fun38152
                }
            case 30:
                var2 = var3.getUint8;
                var1 = 4;
                var0 = var6 + var1;
                var5 = 2;
                var0 = var0 + var5;
                var4 = var2.bind(var3)(var0);
                var7 = var4 % var5;
                var0 = 0;
                var2 = var4;
                if (!(var7 === var0)) {
                    _fun38152_ip = 75;
                    continue _fun38152
                }
            case 68:
                var0 = 1;
                var2 = var4 + var0;
            case 75:
                var0 = 1;
                var4 = var2 + var0;
                var0 = {};
                var2 = 6;
                var2 = var2 + var4;
                var2 = var2 + var1;
                var0.headerSize = var2;
                var7 = var3.getUint16;
                var2 = var6 + var1;
                var2 = var7.bind(var3)(var2);
                var0.type = var2;
                var2 = var3.getUint32;
                var1 = var6 + var1;
                var1 = var1 + var5;
                var1 = var1 + var4;
                var1 = var2.bind(var3)(var1);
                var0.size = var1;
                return var0;
            case 148:
                var0 = global;
                var2 = var0.Error;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var9 = 'Not an IPTC resource block.';
                var10 = var1;
                var0 = new var10[var2](var9, var8);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var _closure1_slot2 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var1 = var0.type;
        var0 = 1028;
        var0 = var0 === var1;
        return var0;
    };
    var _closure1_slot3 = var0;
    var0 = function arg0() {
        _fun38154: for (var _fun38154_ip = 0;;) switch (_fun38154_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.size;
                var0 = 2;
                var1 = var1 % var0;
                var0 = 0;
                if (!(var1 !== var0)) {
                    _fun38154_ip = 24;
                    continue _fun38154
                }
            case 21:
                var0 = 1;
            case 24:
                return var0;
        }
    };
    var _closure1_slot4 = var0;
    var0 = function arg0, arg1, arg2, arg3() {
        _fun38155: for (var _fun38155_ip = 0;;) switch (_fun38155_ip) {
            case 0:
                var12 = arg0;
                var11 = arg2;
                var10 = arg3;
                var0 = {};
                var1 = arg1;
                var1 = var1.size;
                var9 = var11 + var1;
                if (!(var11 < var9)) {
                    _fun38155_ip = 378;
                    continue _fun38155
                }
            case 30:
                var1 = var12.byteLength;
                var1 = var11 < var1;
                var8 = undefined;
                var7 = 5;
                var6 = global;
                var5 = 'encoding';
                var3 = null;
                var2 = undefined;
                if (!var1) {
                    _fun38155_ip = 378;
                    continue _fun38155
                }
            case 64:
                var1 = _closure1_slot6;
                var25 = undefined;
                var24 = var12;
                var23 = var11;
                var22 = var0;
                var21 = var2;
                var20 = var10;
                var1 = var25[var1](var24, var23, var22, var21, var20, var19);
                var17 = var1.tag;
                var1 = var1.tagSize;
                var13 = var11;
                var14 = var2;
                if (!(var3 !== var17)) {
                    _fun38155_ip = 378;
                    continue _fun38155
                }
            case 113:
                var2 = var14;
                if (!var17) {
                    _fun38155_ip = 353;
                    continue _fun38155
                }
            case 122:
                var15 = var5 in var17;
                if (!var15) {
                    _fun38155_ip = 135;
                    continue _fun38155
                }
            case 129:
                var14 = var17.encoding;
            case 135:
                var15 = var17.name;
                var15 = var0[var15];
                if (!(var8 !== var15)) {
                    _fun38155_ip = 312;
                    continue _fun38155
                }
            case 151:
                var15 = var17.repeatable;
                if (!(var8 !== var15)) {
                    _fun38155_ip = 312;
                    continue _fun38155
                }
            case 164:
                var15 = var17.name;
                var16 = var0[var15];
                var15 = var6.Array;
                var15 = var16 instanceof var15;
                if (var15) {
                    _fun38155_ip = 259;
                    continue _fun38155
                }
            case 186:
                var16 = var17.name;
                var18 = {};
                var15 = var17.name;
                var15 = var0[var15];
                var15 = var15.id;
                var18.id = var15;
                var15 = var17.name;
                var15 = var0[var15];
                var15 = var15.value;
                var18.value = var15;
                var15 = var17.name;
                var15 = var0[var15];
                var15 = var15.description;
                var18.description = var15;
                var15 = new Array(1);
                var15[0] = var18;
                var0[var16] = var15;
            case 259:
                var15 = var17.name;
                var18 = var0[var15];
                var16 = var18.push;
                var15 = {};
                var19 = var17.id;
                var15.id = var19;
                var19 = var17.value;
                var15.value = var19;
                var19 = var17.description;
                var15.description = var19;
                var15 = var16.bind(var18)(var15);
                var2 = var14;
                _fun38155_ip = 353;
                continue _fun38155;
            case 312:
                var16 = var17.name;
                var15 = {};
                var18 = var17.id;
                var15.id = var18;
                var18 = var17.value;
                var15.value = var18;
                var17 = var17.description;
                var15.description = var17;
                var0[var16] = var15;
                var2 = var14;
            case 353:
                var1 = var7 + var1;
                var11 = var13 + var1;
                if (!(var11 < var9)) {
                    _fun38155_ip = 378;
                    continue _fun38155
                }
            case 365:
                var1 = var12.byteLength;
                if (var11 < var1) {
                    _fun38155_ip = 64;
                    continue _fun38155
                }
            case 378:
                return var0;
        }
    };
    var _closure1_slot5 = var0;
    var0 = function arg0, arg1, arg2, arg3, arg4() {
        _fun38156: for (var _fun38156_ip = 0;;) switch (_fun38156_ip) {
            case 0:
                var5 = arg0;
                var2 = arg1;
                var0 = var5.getUint8;
                var1 = var0.bind(var5)(var2);
                var0 = 28;
                if (!(var1 === var0)) {
                    _fun38156_ip = 465;
                    continue _fun38156
                }
            case 27:
                var1 = var5.getUint16;
                var0 = 1;
                var0 = var2 + var0;
                var3 = var1.bind(var5)(var0);
                var1 = var5.getUint16;
                var0 = 3;
                var0 = var2 + var0;
                var1 = var1.bind(var5)(var0);
                var0 = arg4;
                if (var0) {
                    _fun38156_ip = 119;
                    continue _fun38156
                }
            case 69:
                var6 = _closure1_slot0;
                var4 = _closure1_slot1;
                var0 = 0;
                var0 = var4[var0];
                var4 = undefined;
                var0 = var6.bind(var4)(var0);
                var0 = var0.iptc;
                var0 = var0[var3];
                if (var0) {
                    _fun38156_ip = 119;
                    continue _fun38156
                }
            case 106:
                var0 = {};
                var0.tag = var4;
                var0.tagSize = var1;
                return var0;
            case 119:
                var0 = 5;
                var2 = var2 + var0;
                var4 = new Array(0);
                var7 = 0;
                var6 = var7 < var1;
                var0 = 0;
                if (!var6) {
                    _fun38156_ip = 173;
                    continue _fun38156
                }
            case 141:
                var8 = var4.push;
                var9 = var5.getUint8;
                var6 = var2 + var0;
                var6 = var9.bind(var5)(var6);
                var6 = var8.bind(var4)(var6);
                var0 = var0 + 1;
                if (var0 < var1) {
                    _fun38156_ip = 141;
                    continue _fun38156
                }
            case 173:
                var2 = {};
                var2.id = var3;
                var10 = _closure1_slot7;
                var8 = _closure1_slot0;
                var5 = _closure1_slot1;
                var9 = var5[var7];
                var6 = undefined;
                var9 = var8.bind(var6)(var9);
                var9 = var9.iptc;
                var9 = var9[var3];
                var9 = var10.bind(var6)(var9, var3, var4);
                var2.name = var9;
                var2.value = var4;
                var12 = _closure1_slot8;
                var9 = var5[var7];
                var9 = var8.bind(var6)(var9);
                var9 = var9.iptc;
                var16 = var9[var3];
                var14 = arg2;
                var13 = arg3;
                var17 = undefined;
                var15 = var4;
                var9 = var17[var12](var16, var15, var14, var13, var12);
                var2.description = var9;
                var5 = var5[var7];
                var5 = var8.bind(var6)(var5);
                var5 = var5.iptc;
                var5 = var5[var3];
                if (!var5) {
                    _fun38156_ip = 327;
                    continue _fun38156
                }
            case 294:
                var9 = _closure1_slot0;
                var8 = _closure1_slot1;
                var8 = var8[var7];
                var8 = var9.bind(var6)(var8);
                var8 = var8.iptc;
                var8 = var8[var3];
                var5 = var8.repeatable;
            case 327:
                if (!var5) {
                    _fun38156_ip = 338;
                    continue _fun38156
                }
            case 330:
                var5 = true;
                var2.repeatable = var5;
            case 338:
                var8 = _closure1_slot0;
                var5 = _closure1_slot1;
                var5 = var5[var7];
                var5 = var8.bind(var6)(var5);
                var5 = var5.iptc;
                var5 = var5[var3];
                if (!var5) {
                    _fun38156_ip = 405;
                    continue _fun38156
                }
            case 368:
                var9 = _closure1_slot0;
                var8 = _closure1_slot1;
                var8 = var8[var7];
                var8 = var9.bind(var6)(var8);
                var8 = var8.iptc;
                var8 = var8[var3];
                var8 = var8.encoding_name;
                var5 = var6 !== var8;
            case 405:
                if (!var5) {
                    _fun38156_ip = 452;
                    continue _fun38156
                }
            case 408:
                var5 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var7];
                var0 = var5.bind(var6)(var0);
                var0 = var0.iptc;
                var3 = var0[var3];
                var0 = var3.encoding_name;
                var0 = var0.bind(var3)(var4);
                var2.encoding = var0;
            case 452:
                var0 = {};
                var0.tag = var2;
                var0.tagSize = var1;
                return var0;
            case 465:
                var0 = {
                    'tag': null,
                    'tagSize': 0
                };
                return var0;
        }
    };
    var _closure1_slot6 = var0;
    var0 = function arg0, arg1, arg2() {
        _fun38157: for (var _fun38157_ip = 0;;) switch (_fun38157_ip) {
            case 0:
                var5 = arg0;
                if (var5) {
                    _fun38157_ip = 35;
                    continue _fun38157
                }
            case 6:
                var0 = global;
                var0 = var0.HermesInternal;
                var2 = var0.concat;
                var1 = 'undefined-';
                var0 = arg1;
                var0 = var2.bind(var1)(var0);
                _fun38157_ip = 91;
                continue _fun38157;
            case 35:
                var3 = 'string';
                var2 = typeof var5;
                var1 = var5;
                if (!(var3 !== var2)) {
                    _fun38157_ip = 88;
                    continue _fun38157
                }
            case 49:
                var2 = var5.name;
                var3 = 'function';
                var2 = typeof var2;
                if (!(var3 !== var2)) {
                    _fun38157_ip = 72;
                    continue _fun38157
                }
            case 65:
                var2 = var5.name;
                _fun38157_ip = 85;
                continue _fun38157;
            case 72:
                var4 = var5.name;
                var3 = arg2;
                var2 = var4.bind(var5)(var3);
            case 85:
                var1 = var2;
            case 88:
                var0 = var1;
            case 91:
                return var0;
        }
    };
    var _closure1_slot7 = var0;
    var0 = function arg0, arg1, arg2, arg3() {
        _fun38158: for (var _fun38158_ip = 0;;) switch (_fun38158_ip) {
            case 0:
                var4 = arg0;
                var0 = var4;
                var1 = arg1;
                var2 = arg2;
                var3 = var4;
                if (!var3) {
                    _fun38158_ip = 29;
                    continue _fun38158
                }
            case 18:
                var5 = var4.description;
                var4 = undefined;
                var3 = var4 !== var5;
            case 29:
                if (!var3) {
                    _fun38158_ip = 53;
                    continue _fun38158
                }
            case 32: // try_start_0
                var5 = var0;
                var4 = var5.description;
                var3 = var1;
                var2 = var4.bind(var5)(var3, var2);
            case 49: // try_end0
                return var2;
            case 51: // catch_target0
                CatchBlockStart(arg_register = 2);
            case 53:
                var3 = var1;
                if (!var0) {
                    _fun38158_ip = 71;
                    continue _fun38158
                }
            case 59:
                var2 = global;
                var2 = var2.Array;
                var0 = var3 instanceof var2;
            case 71:
                if (var0) {
                    _fun38158_ip = 79;
                    continue _fun38158
                }
            case 74:
                var0 = var1;
                _fun38158_ip = 122;
                continue _fun38158;
            case 79:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 1;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.decode;
                var2 = var1;
                var1 = arg3;
                var0 = var3.bind(var4)(var1, var2);
            case 122:
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var1, var0, var3);
    var0 = {};
    var2 = function arg0, arg1, arg2() {
        _fun38159: for (var _fun38159_ip = 0;;) switch (_fun38159_ip) {
            case 0:
                var1 = arg0;
                var3 = arg1;
                var0 = arg2;
            case 9: // try_start_0
                var2 = global;
                var6 = var2.Array;
                var5 = var6.isArray;
                var4 = var1;
                var4 = var5.bind(var6)(var4);
                if (var4) {
                    _fun38159_ip = 221;
                    continue _fun38159
                }
            case 36:
                var8 = var1;
                var11 = var3;
                var10 = 12;
                var5 = var11 + var10;
                var3 = var8.byteLength;
                var7 = undefined;
                if (!(var5 <= var3)) {
                    _fun38159_ip = 135;
                    continue _fun38159
                }
            case 64:
                var3 = _closure1_slot2;
                var5 = var3.bind(var7)(var8, var11);
                var3 = _closure1_slot3;
                var3 = var3.bind(var7)(var5);
                var6 = var11;
                if (var3) {
                    _fun38159_ip = 169;
                    continue _fun38159
                }
            case 89:
                var9 = var5.headerSize;
                var3 = var5.size;
                var9 = var9 + var3;
                var3 = _closure1_slot4;
                var3 = var3.bind(var7)(var5);
                var3 = var9 + var3;
                var11 = var6 + var3;
                var9 = var8.byteLength;
                var3 = var11 + var10;
                if (var3 <= var9) {
                    _fun38159_ip = 64;
                    continue _fun38159
                }
            case 135:
                var10 = var2.Error;
                var3 = var10.prototype;
                var9 = Object.create(var3, {
                    constructor: {
                        value: var10
                    }
                });
                var15 = 'No IPTC NAA resource block.';
                var16 = var9;
                var3 = new var16[var10](var15, var14);
                var3 = var3 instanceof Object ? var3 : var9;
                throw var3;
            case 169:
                var3 = {};
                var3.naaBlock = var5;
                var5 = var5.headerSize;
                var5 = var6 + var5;
                var3.dataOffset = var5;
                var6 = _closure1_slot5;
                var14 = var3.naaBlock;
                var13 = var3.dataOffset;
                var12 = var0;
                var16 = undefined;
                var15 = var8;
                var3 = var16[var6](var15, var14, var13, var12, var11);
            case 219: // try_end0
                return var3;
            case 221: // try_start_1
                var5 = _closure1_slot5;
                var4 = var2.DataView;
                var3 = var2.Uint8Array;
                var2 = var3.from;
                var2 = var2.bind(var3)(var1);
                var15 = var2.buffer;
                var3 = var4.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var4
                    }
                });
                var16 = var3;
                var2 = new var16[var4](var15, var14);
                var15 = var2 instanceof Object ? var2 : var3;
                var3 = {};
                var1 = var1.length;
                var3.size = var1;
                var12 = var0;
                var16 = undefined;
                var13 = 0;
                var14 = var3;
                var0 = var16[var5](var15, var14, var13, var12, var11);
            case 301: // try_end1
                return var0;
            case 303: // catch_target0 // catch_target1
                CatchBlockStart(arg_register = 0);
                var0 = {};
                return var0;
        }
    };
    var0.read = var2;
    var1.default = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4163, 4164]);