// lib/Record.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
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
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot1 = var3;
    var3 = function() { // Environment: var1
        var3 = function() {
            var3 = _closure1_slot0;
            var2 = _closure2_slot0;
            var0 = undefined;
            var1 = this;
            var1 = var3.bind(var0)(var1, var2);
            return var0;
        };
        var _closure2_slot0 = var3;
        var2 = _closure1_slot1;
        var0 = {};
        var1 = 'toJS';
        var0.key = var1;
        var1 = function() {
            var0 = {};
            var2 = this;
            var3 = var0;
            var1 = copyDataProperties(var3, var2);
            return var0;
        };
        var0.value = var1;
        var1 = new Array(4);
        var1[0] = var0;
        var0 = {};
        var5 = 'set';
        var0.key = var5;
        var5 = function arg0, arg1() {
            _fun18145: for (var _fun18145_ip = 0;;) switch (_fun18145_ip) {
                case 0:
                    var5 = arg0;
                    var3 = arg1;
                    var6 = this;
                    var2 = var6[var5];
                    var0 = global;
                    var1 = var0.Date;
                    var1 = var3 instanceof var1;
                    if (!var1) {
                        _fun18145_ip = 68;
                        continue _fun18145
                    }
                case 28:
                    var0 = var0.Date;
                    var0 = var2 instanceof var0;
                    if (!var0) {
                        _fun18145_ip = 68;
                        continue _fun18145
                    }
                case 41:
                    var0 = var3.getTime;
                    var4 = var0.bind(var3)();
                    var0 = var2.getTime;
                    var1 = var0.bind(var2)();
                    var0 = var6;
                    if (!(var4 !== var1)) {
                        _fun18145_ip = 123;
                        continue _fun18145
                    }
                case 68:
                    var1 = var6;
                    if (!(var2 !== var3)) {
                        _fun18145_ip = 120;
                        continue _fun18145
                    }
                case 75:
                    var4 = var6.constructor;
                    var2 = {};
                    var8 = var2;
                    var7 = var6;
                    var6 = copyDataProperties(var8, var7);
                    var2[var5] = var3;
                    var3 = var4.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var4
                        }
                    });
                    var9 = var3;
                    var8 = var2;
                    var2 = new var9[var4](var8, var7);
                    var1 = var2 instanceof Object ? var2 : var3;
                case 120:
                    var0 = var1;
                case 123:
                    return var0;
            }
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'merge';
        var0.key = var5;
        var5 = function arg0() {
            _fun18146: for (var _fun18146_ip = 0;;) switch (_fun18146_ip) {
                case 0:
                    var12 = arg0;
                    var1 = this;
                    var10 = var12;
                    var2 = null;
                    var4 = undefined;
                    var6 = global;
                    var5 = null;
                    var0 = undefined;
                    var3 = null;
                    for (var7 in var10)
                        case 32: {
                            var16 = var5;
                            var3 = var16;
                            case 50: var17 = var7;
                            var13 = var12.hasOwnProperty;
                            var13 = var13.bind(var12)(var17);
                            var5 = var16;
                            if (!var13) {
                                _fun18146_ip = 32;
                                continue _fun18146
                            }
                            case 70: var14 = var1[var17];
                            var13 = var12[var17];
                            var15 = var6.Date;
                            var15 = var13 instanceof var15;
                            if (!var15) {
                                _fun18146_ip = 101;
                                continue _fun18146
                            }
                            case 91: var18 = var6.Date;
                            var15 = var14 instanceof var18;
                            case 101: if (!var15) {
                                _fun18146_ip = 128;
                                continue _fun18146
                            }
                            case 104: var18 = var13.getTime;
                            var19 = var18.bind(var13)();
                            var18 = var14.getTime;
                            var18 = var18.bind(var14)();
                            var15 = var19 === var18;
                            case 128: var5 = var16;
                            var4 = var14;
                            var0 = var13;
                            if (var15) {
                                _fun18146_ip = 32;
                                continue _fun18146
                            }
                            case 140: var5 = var16;
                            if (!(var14 !== var13)) {
                                _fun18146_ip = 180;
                                continue _fun18146
                            }
                            case 147: var15 = var16;
                            if (!(var2 == var16)) {
                                _fun18146_ip = 169;
                                continue _fun18146
                            }
                            case 154: var16 = {};
                            var21 = var16;
                            var20 = var1;
                            var18 = copyDataProperties(var21, var20);
                            var15 = var16;
                            case 169: var16 = var12[var17];
                            var15[var17] = var16;
                            var5 = var15;
                            case 180: var4 = var14;
                            var0 = var13;
                            _fun18146_ip = 32;
                            continue _fun18146;
                        }
                case 191:
                    var0 = var1;
                    if (!(var2 != var3)) {
                        _fun18146_ip = 226;
                        continue _fun18146
                    }
                case 198:
                    var1 = var1.constructor;
                    var2 = var1.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var1
                        }
                    });
                    var22 = var2;
                    var21 = var3;
                    var1 = new var22[var1](var21, var20);
                    var0 = var1 instanceof Object ? var1 : var2;
                case 226:
                    return var0;
            }
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'update';
        var0.key = var5;
        var4 = function arg0, arg1, arg2() {
            _fun18147: for (var _fun18147_ip = 0;;) switch (_fun18147_ip) {
                case 0:
                    var3 = arg0;
                    var0 = arg1;
                    var5 = arg2;
                    var2 = this;
                    var4 = null;
                    var1 = var0;
                    if (!(var4 == var5)) {
                        _fun18147_ip = 26;
                        continue _fun18147
                    }
                case 21:
                    var1 = undefined;
                    var5 = var0;
                case 26:
                    var8 = var2[var3];
                    var0 = _closure2_slot0;
                    var0 = var8 instanceof var0;
                    var4 = var8;
                    if (var0) {
                        _fun18147_ip = 117;
                        continue _fun18147
                    }
                case 47:
                    var0 = global;
                    var6 = var0.Array;
                    var6 = var8 instanceof var6;
                    if (var6) {
                        _fun18147_ip = 95;
                        continue _fun18147
                    }
                case 62:
                    var0 = var0.Object;
                    var6 = var8 instanceof var0;
                    var0 = var8;
                    if (!var6) {
                        _fun18147_ip = 93;
                        continue _fun18147
                    }
                case 78:
                    var6 = {};
                    var11 = var6;
                    var10 = var8;
                    var7 = copyDataProperties(var11, var10);
                    var0 = var6;
                case 93:
                    _fun18147_ip = 114;
                    continue _fun18147;
                case 95:
                    var6 = new Array(0);
                    var9 = 0;
                    var11 = var6;
                    var10 = var8;
                    var7 = arraySpread(var11, var10, var9);
                    var0 = var6;
                case 114:
                    var4 = var0;
                case 117:
                    var0 = undefined;
                    if (!(var0 === var4)) {
                        _fun18147_ip = 126;
                        continue _fun18147
                    }
                case 123:
                    var4 = var1;
                case 126:
                    var1 = var2.set;
                    var0 = var5.bind(var0)(var4);
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
            }
        };
        var0.value = var4;
        var1[3] = var0;
        var0 = undefined;
        var0 = var2.bind(var0)(var3, var1);
        return var0;
    };
    var3 = var3.bind(var0)();
    var _closure1_slot2 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot1;
        var2 = function() {
            var3 = _closure1_slot0;
            var2 = _closure2_slot0;
            var0 = undefined;
            var1 = this;
            var1 = var3.bind(var0)(var1, var2);
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'toJS';
        var0.key = var1;
        var1 = function() {
            var0 = {};
            var2 = this;
            var3 = var0;
            var1 = copyDataProperties(var3, var2);
            return var0;
        };
        var0.value = var1;
        var1 = new Array(4);
        var1[0] = var0;
        var0 = {};
        var5 = 'set';
        var0.key = var5;
        var5 = function arg0, arg1() {
            var2 = this;
            var1 = var2.merge;
            var0 = {};
            var4 = arg1;
            var3 = arg0;
            var0[var3] = var4;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'merge';
        var0.key = var5;
        var5 = function arg0() {
            _fun18152: for (var _fun18152_ip = 0;;) switch (_fun18152_ip) {
                case 0:
                    var9 = arg0;
                    var1 = this;
                    var7 = var9;
                    var2 = null;
                    var0 = null;
                    var3 = null;
                    for (var4 in var7)
                        case 23: {
                            var10 = var0;
                            var3 = var10;
                            case 38: var11 = var4;
                            var12 = var9.hasOwnProperty;
                            var12 = var12.bind(var9)(var11);
                            var0 = var10;
                            if (!var12) {
                                _fun18152_ip = 23;
                                continue _fun18152
                            }
                            case 58: var13 = var9[var11];
                            var12 = var1[var11];
                            var0 = var10;
                            if (var12 === var13) {
                                _fun18152_ip = 23;
                                continue _fun18152
                            }
                            case 73: var0 = var10;
                            if (!(var2 == var10)) {
                                _fun18152_ip = 90;
                                continue _fun18152
                            }
                            case 80: var10 = var1.toJS;
                            var0 = var10.bind(var1)();
                            case 90: var10 = var9[var11];
                            var0[var11] = var10;
                            _fun18152_ip = 23;
                            continue _fun18152;
                        }
                case 100:
                    var0 = var1;
                    if (!(var2 != var3)) {
                        _fun18152_ip = 135;
                        continue _fun18152
                    }
                case 107:
                    var1 = var1.constructor;
                    var2 = var1.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var1
                        }
                    });
                    var15 = var2;
                    var14 = var3;
                    var1 = new var15[var1](var14, var13);
                    var0 = var1 instanceof Object ? var1 : var2;
                case 135:
                    return var0;
            }
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'update';
        var0.key = var5;
        var4 = function arg0, arg1, arg2() {
            _fun18153: for (var _fun18153_ip = 0;;) switch (_fun18153_ip) {
                case 0:
                    var3 = arg0;
                    var0 = arg1;
                    var2 = this;
                    var7 = var2[var3];
                    var1 = _closure1_slot2;
                    var1 = var7 instanceof var1;
                    var5 = var7;
                    if (var1) {
                        _fun18153_ip = 100;
                        continue _fun18153
                    }
                case 30:
                    var1 = global;
                    var4 = var1.Array;
                    var4 = var7 instanceof var4;
                    if (var4) {
                        _fun18153_ip = 78;
                        continue _fun18153
                    }
                case 45:
                    var1 = var1.Object;
                    var4 = var7 instanceof var1;
                    var1 = var7;
                    if (!var4) {
                        _fun18153_ip = 76;
                        continue _fun18153
                    }
                case 61:
                    var4 = {};
                    var10 = var4;
                    var9 = var7;
                    var6 = copyDataProperties(var10, var9);
                    var1 = var4;
                case 76:
                    _fun18153_ip = 97;
                    continue _fun18153;
                case 78:
                    var4 = new Array(0);
                    var8 = 0;
                    var10 = var4;
                    var9 = var7;
                    var6 = arraySpread(var10, var9, var8);
                    var1 = var4;
                case 97:
                    var5 = var1;
                case 100:
                    var4 = undefined;
                    if (!(var4 === var5)) {
                        _fun18153_ip = 109;
                        continue _fun18153
                    }
                case 106:
                    var5 = var0;
                case 109:
                    var1 = var2.set;
                    var0 = arg2;
                    var0 = var0.bind(var4)(var5);
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
            }
        };
        var0.value = var4;
        var1[3] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var4 = 2;
    var5 = var5[var4];
    var4 = arg1;
    var6 = var4.bind(var0)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'lib/Record.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.TypedRecord = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 2]);