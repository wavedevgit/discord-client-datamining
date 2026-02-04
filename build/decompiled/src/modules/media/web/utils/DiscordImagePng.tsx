// modules/media/web/utils/DiscordImagePng.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var1 = function() { // Environment: var1
        var4 = function arg0, arg1() {
            var2 = this;
            var3 = _closure1_slot4;
            var1 = _closure2_slot1;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            var1 = arg0;
            var2.img = var1;
            var1 = arg1;
            var2.originalBuffer = var1;
            return var0;
        };
        var _closure2_slot1 = var4;
        var3 = _closure1_slot5;
        var5 = {};
        var2 = 'hasTransparency';
        var5.key = var2;
        var2 = function() {
            _fun37980: for (var _fun37980_ip = 0;;) switch (_fun37980_ip) {
                case 0:
                    var0 = this;
                    var1 = var0.img;
                    var1 = var1.ctype;
                    var4 = 4;
                    if (!(var4 !== var1)) {
                        _fun37980_ip = 41;
                        continue _fun37980
                    }
                case 22:
                    var1 = var0.img;
                    var2 = var1.ctype;
                    var1 = 6;
                    if (!(var1 === var2)) {
                        _fun37980_ip = 161;
                        continue _fun37980
                    }
                case 41:
                    var5 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var3 = 3;
                    var2 = var1[var3];
                    var1 = undefined;
                    var2 = var5.bind(var1)(var2);
                    var1 = var2.toRGBA8;
                    var0 = var0.img;
                    var1 = var1.bind(var2)(var0);
                    var0 = global;
                    var2 = var0.Uint8Array;
                    var0 = 0;
                    var6 = var1[var0];
                    var1 = var2.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var2
                        }
                    });
                    var7 = var1;
                    var0 = new var7[var2](var6, var5);
                    var2 = var0 instanceof Object ? var0 : var1;
                    var0 = var2.length;
                    var0 = var3 < var0;
                    var1 = 255;
                    if (!var0) {
                        _fun37980_ip = 153;
                        continue _fun37980
                    }
                case 132:
                    var0 = var2[var3];
                    if (!(!(var0 < var1))) {
                        _fun37980_ip = 157;
                        continue _fun37980
                    }
                case 140:
                    var3 = var3 + var4;
                    var0 = var2.length;
                    if (var3 < var0) {
                        _fun37980_ip = 132;
                        continue _fun37980
                    }
                case 153:
                    var0 = false;
                    return var0;
                case 157:
                    var0 = true;
                    return var0;
                case 161:
                    var0 = false;
                    return var0;
            }
        };
        var5.value = var2;
        var2 = new Array(5);
        var2[0] = var5;
        var5 = {};
        var6 = 'isAnimated';
        var5.key = var6;
        var6 = function() {
            var0 = this;
            var0 = var0.img;
            var0 = var0.tabs;
            var1 = var0.acTL;
            var0 = null;
            var0 = var0 != var1;
            return var0;
        };
        var5.value = var6;
        var2[1] = var5;
        var5 = {};
        var6 = 'isPng8';
        var5.key = var6;
        var6 = function() {
            _fun37982: for (var _fun37982_ip = 0;;) switch (_fun37982_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.img;
                    var2 = var0.ctype;
                    var0 = 3;
                    var0 = var0 === var2;
                    if (!var0) {
                        _fun37982_ip = 44;
                        continue _fun37982
                    }
                case 25:
                    var1 = var1.img;
                    var2 = var1.depth;
                    var1 = 8;
                    var0 = var2 <= var1;
                case 44:
                    return var0;
            }
        };
        var5.value = var6;
        var2[2] = var5;
        var5 = {};
        var6 = 'hasSrgbIccProfile';
        var5.key = var6;
        var7 = _closure1_slot3;
        var1 = undefined;
        var6 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun37984: for (var _fun37984_ip = 0;;) switch (_fun37984_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun37984_ip = 266;
                            continue _fun37984
                        }
                    case 10:
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 4;
                        var1 = var3[var1];
                        var12 = undefined;
                        var5 = var2.bind(var12)(var1);
                        var4 = var5.load;
                        var1 = this;
                        var3 = var1.originalBuffer;
                        var2 = true;
                        var1 = {
                            'async': true,
                            'expanded': true,
                            'includeUnknown': true
                        };
                        var1 = var4.bind(var5)(var3, var1);
                        SaveGenerator(address = 76);
                    case 74:
                        return var1;
                    case 76:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun37984_ip = 263;
                            continue _fun37984
                        }
                    case 85:
                        var3 = var1.icc;
                        var11 = null;
                        if (!(var11 != var3)) {
                            _fun37984_ip = 260;
                            continue _fun37984
                        }
                    case 100:
                        var4 = var1.icc;
                        var3 = global;
                        var5 = var3.Object;
                        var3 = var5.keys;
                        var10 = var3.bind(var5)(var4);
                        var3 = var10.length;
                        var9 = 0;
                        var3 = var9 < var3;
                        var8 = '';
                        var7 = 'ICC Description';
                        var6 = undefined;
                        if (!var3) {
                            _fun37984_ip = 211;
                            continue _fun37984
                        }
                    case 150:
                        var3 = var10[var9];
                        if (!(var7 === var3)) {
                            _fun37984_ip = 199;
                            continue _fun37984
                        }
                    case 158:
                        var13 = var4[var3];
                        var14 = var11 == var13;
                        var5 = undefined;
                        if (var14) {
                            _fun37984_ip = 176;
                            continue _fun37984
                        }
                    case 171:
                        var5 = var13.description;
                    case 176:
                        var6 = var13;
                        if (!(var11 != var5)) {
                            _fun37984_ip = 199;
                            continue _fun37984
                        }
                    case 183:
                        var5 = var4[var3];
                        var5 = var5.description;
                        var6 = var13;
                        if (!(var8 === var5)) {
                            _fun37984_ip = 216;
                            continue _fun37984
                        }
                    case 199:
                        var9 = var9 + 1;
                        var5 = var10.length;
                        if (var9 < var5) {
                            _fun37984_ip = 150;
                            continue _fun37984
                        }
                    case 211:
                        var5 = false;
                        return var5;
                    case 216:
                        var3 = var4[var3];
                        var4 = var3.description;
                        var3 = var4.toLowerCase;
                        var5 = var3.bind(var4)();
                        var4 = var5.includes;
                        var3 = 'srgb';
                        var3 = var4.bind(var5)(var3);
                        var3 = !var3;
                        var3 = !var3;
                        return var3;
                    case 260:
                        return var2;
                    case 263:
                        return var1;
                    case 266:
                        return var0;
                }
            };
            return var0;
        };
        var6 = var7.bind(var1)(var6);
        var _closure2_slot0 = var6;
        var6 = function() {
            var0 = undefined;
            var3 = _closure2_slot0;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var5.value = var6;
        var2[3] = var5;
        var5 = {};
        var6 = 'getBuffer';
        var5.key = var6;
        var6 = function() {
            var0 = this;
            var0 = var0.originalBuffer;
            return var0;
        };
        var5.value = var6;
        var2[4] = var5;
        var5 = {};
        var6 = 'create';
        var5.key = var6;
        var0 = function arg0() {
            _fun37987: for (var _fun37987_ip = 0;;) switch (_fun37987_ip) {
                case 0:
                    var3 = arg0;
                    var0 = null;
                case 5: // try_start_0
                    var4 = _closure2_slot1;
                    var5 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 3;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var5.bind(var1)(var2);
                    var1 = var2.decode;
                    var7 = var1.bind(var2)(var3);
                    var2 = var4.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var4
                        }
                    });
                    var8 = var2;
                    var6 = var3;
                    var1 = new var8[var4](var7, var6, var5);
                    var0 = var1 instanceof Object ? var1 : var2;
                case 71: // try_end0
                    _fun37987_ip = 75;
                    continue _fun37987;
                case 73: // catch_target0
                    CatchBlockStart(arg_register = 1);
                case 75:
                    return var0;
            }
        };
        var5.value = var0;
        var0 = new Array(1);
        var0[0] = var5;
        var0 = var3.bind(var1)(var4, var2, var0);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/media/web/utils/DiscordImagePng.tsx';
    var3 = var4.bind(var5)(var3);
    var2.DiscordImagePng = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 6, 7, 1642, 4163, 2]);