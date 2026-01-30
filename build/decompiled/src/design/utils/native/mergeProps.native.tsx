// design/utils/native/mergeProps.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var3 = function(arg0) { // Original name: chainCallbacks, environment: var1
        var2 = 0;
        var1 = copyRestArgs(var2);
        var _closure2_slot0 = var1;
        var0 = function(arg0) { // Environment: var0
            _fun27226: for (var _fun27226_ip = 0;;) switch (_fun27226_ip) {
                case 0:
                    var6 = 0;
                    var11 = 0;
                    var5 = copyRestArgs(var11);
                    var4 = _closure2_slot0;
                    var0 = var4.length;
                    var1 = var6 < var0;
                    var0 = undefined;
                    var3 = 'function';
                    var2 = 0;
                    if (!var1) {
                        _fun27226_ip = 86;
                        continue _fun27226
                    }
                case 35:
                    var7 = var4[var2];
                    var1 = typeof var7;
                    if (!(var3 === var1)) {
                        _fun27226_ip = 74;
                        continue _fun27226
                    }
                case 46:
                    var1 = new Array(0);
                    var11 = var1;
                    var10 = var5;
                    var9 = 0;
                    var8 = arraySpread(var11, var10, var9);
                    var11 = var7;
                    var10 = var1;
                    var9 = undefined;
                    var1 = apply(var11, var10, var9);
                case 74:
                    var2 = var2 + 1;
                    var1 = var4.length;
                    if (var2 < var1) {
                        _fun27226_ip = 35;
                        continue _fun27226
                    }
                case 86:
                    return var0;
            }
        };
        return var0;
    };
    var _closure1_slot0 = var3;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var4);
    var4 = arg6;
    var0 = 0;
    var5 = var4[var0];
    var4 = arg1;
    var0 = undefined;
    var6 = var4.bind(var0)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/utils/native/mergeProps.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2.chainCallbacks = var3;
    var3 = function(arg0) { // Original name: mergeRefs, environment: var1
        _fun27227: for (var _fun27227_ip = 0;;) switch (_fun27227_ip) {
            case 0:
                var2 = 0;
                var5 = 0;
                var1 = copyRestArgs(var5);
                var _closure2_slot0 = var1;
                var4 = var1.length;
                var3 = 1;
                if (!(var3 !== var4)) {
                    _fun27227_ip = 33;
                    continue _fun27227
                }
            case 26:
                var0 = function(arg0) { // Environment: var0
                    _fun27228: for (var _fun27228_ip = 0;;) switch (_fun27228_ip) {
                        case 0:
                            var6 = arg0;
                            var5 = _closure2_slot0;
                            var0 = var5.length;
                            var4 = 0;
                            var1 = var4 < var0;
                            var0 = undefined;
                            var3 = null;
                            var2 = 'function';
                            if (!var1) {
                                _fun27228_ip = 72;
                                continue _fun27228
                            }
                        case 32:
                            var1 = var5[var4];
                            var7 = typeof var1;
                            if (!(var2 !== var7)) {
                                _fun27228_ip = 55;
                                continue _fun27228
                            }
                        case 43:
                            if (!(var3 != var1)) {
                                _fun27228_ip = 60;
                                continue _fun27228
                            }
                        case 47:
                            var1.current = var6;
                            _fun27228_ip = 60;
                            continue _fun27228;
                        case 55:
                            var1 = var1.bind(var0)(var6);
                        case 60:
                            var4 = var4 + 1;
                            var1 = var5.length;
                            if (var4 < var1) {
                                _fun27228_ip = 32;
                                continue _fun27228
                            }
                        case 72:
                            return var0;
                    }
                };
                _fun27227_ip = 37;
                continue _fun27227;
            case 33:
                var0 = var1[var2];
            case 37:
                return var0;
        }
    };
    var2.mergeRefs = var3;
    var1 = function(arg0) { // Original name: mergeProps, environment: var1
        _fun27229: for (var _fun27229_ip = 0;;) switch (_fun27229_ip) {
            case 0:
                var17 = 0;
                var32 = 0;
                var16 = copyRestArgs(var32);
                var0 = {};
                var31 = var16[var17];
                var32 = var0;
                var1 = copyDataProperties(var32, var31);
                var1 = var16.length;
                var15 = 1;
                var1 = var15 < var1;
                var14 = undefined;
                var12 = 'style';
                var11 = 2;
                var10 = 90;
                var9 = 65;
                var8 = 'n';
                var7 = 'o';
                var6 = 'function';
                var5 = var15;
                var4 = undefined;
                var3 = undefined;
                var2 = undefined;
                if (!var1) {
                    _fun27229_ip = 293;
                    continue _fun27229
                }
            case 78:
                var25 = var16[var5];
                var23 = var25;
                var19 = var4;
                var18 = var3;
                var1 = var2;
                var4 = var19;
                var3 = var18;
                var2 = var1;
                for (var20 in var23)
                    case 114: {
                        var4 = var19;
                        var3 = var18;
                        var2 = var1;
                        case 135: var28 = var20;
                        var27 = var0[var28];
                        var26 = var25[var28];
                        var29 = typeof var27;
                        if (!(var6 === var29)) {
                            _fun27229_ip = 206;
                            continue _fun27229
                        }
                        case 153: var29 = typeof var26;
                        if (!(var6 === var29)) {
                            _fun27229_ip = 206;
                            continue _fun27229
                        }
                        case 160: var29 = var28[var17];
                        if (!(var7 === var29)) {
                            _fun27229_ip = 206;
                            continue _fun27229
                        }
                        case 168: var29 = var28[var15];
                        if (!(var8 === var29)) {
                            _fun27229_ip = 206;
                            continue _fun27229
                        }
                        case 176: var29 = var28.charCodeAt;
                        var29 = var29.bind(var28)(var11);
                        if (!(var29 >= var9)) {
                            _fun27229_ip = 206;
                            continue _fun27229
                        }
                        case 191: var29 = var28.charCodeAt;
                        var29 = var29.bind(var28)(var11);
                        if (!(!(var29 <= var10))) {
                            _fun27229_ip = 250;
                            continue _fun27229
                        }
                        case 206: if (!(var12 !== var28)) {
                            _fun27229_ip = 222;
                            continue _fun27229
                        }
                        case 210: var29 = var27;
                        if (!(var14 !== var26)) {
                            _fun27229_ip = 220;
                            continue _fun27229
                        }
                        case 217: var29 = var26;
                        case 220: _fun27229_ip = 232;
                        continue _fun27229;
                        case 222: var30 = var27.concat;
                        var29 = var30.bind(var27)(var26);
                        case 232: var0[var28] = var29;
                        var19 = var28;
                        var18 = var27;
                        var1 = var26;
                        _fun27229_ip = 114;
                        continue _fun27229;
                        case 250: var29 = _closure1_slot0;
                        var29 = var29.bind(var14)(var27, var26);
                        var0[var28] = var29;
                        var19 = var28;
                        var18 = var27;
                        var1 = var26;
                        _fun27229_ip = 114;
                        continue _fun27229;
                    }
            case 278:
                var5 = var5 + 1;
                var1 = var16.length;
                if (var5 < var1) {
                    _fun27229_ip = 78;
                    continue _fun27229
                }
            case 293:
                return var0;
        }
    };
    var2.mergeProps = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);