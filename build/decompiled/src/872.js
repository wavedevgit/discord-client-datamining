// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var0 = require;
    var _closure1_slot0 = var0;
    var0 = dependencyMap;
    var _closure1_slot1 = var0;
    var0 = function(arg0) { // Original name: getFilenameToDebugIdMap, environment: var2
        _fun9225: for (var _fun9225_ip = 0;;) switch (_fun9225_ip) {
            case 0:
                var0 = arg0;
                var _closure2_slot0 = var0;
                var3 = _closure1_slot0;
                var5 = _closure1_slot1;
                var2 = 0;
                var6 = var5[var2];
                var4 = undefined;
                var6 = var3.bind(var4)(var6);
                var6 = var6.GLOBAL_OBJ;
                var6 = var6._sentryDebugIds;
                var2 = var5[var2];
                var2 = var3.bind(var4)(var2);
                var2 = var2.GLOBAL_OBJ;
                var3 = var2._debugIds;
                if (var6) {
                    _fun9225_ip = 76;
                    continue _fun9225
                }
            case 69:
                if (var3) {
                    _fun9225_ip = 76;
                    continue _fun9225
                }
            case 72:
                var2 = {};
                return var2;
            case 76:
                if (var6) {
                    _fun9225_ip = 85;
                    continue _fun9225
                }
            case 79:
                var5 = new Array(0);
                _fun9225_ip = 103;
                continue _fun9225;
            case 85:
                var2 = global;
                var7 = var2.Object;
                var2 = var7.keys;
                var5 = var2.bind(var7)(var6);
            case 103:
                if (var3) {
                    _fun9225_ip = 112;
                    continue _fun9225
                }
            case 106:
                var2 = new Array(0);
                _fun9225_ip = 130;
                continue _fun9225;
            case 112:
                var7 = global;
                var8 = var7.Object;
                var7 = var8.keys;
                var2 = var7.bind(var8)(var3);
            case 130:
                var7 = _closure1_slot5;
                if (!var7) {
                    _fun9225_ip = 163;
                    continue _fun9225
                }
            case 137:
                var8 = var5.length;
                var7 = _closure1_slot3;
                if (!(var8 === var7)) {
                    _fun9225_ip = 163;
                    continue _fun9225
                }
            case 150:
                var8 = var2.length;
                var7 = _closure1_slot4;
                if (!(var8 !== var7)) {
                    _fun9225_ip = 229;
                    continue _fun9225
                }
            case 163:
                var7 = var5.length;
                var _closure1_slot3 = var7;
                var7 = var2.length;
                var _closure1_slot4 = var7;
                var7 = {};
                var _closure1_slot5 = var7;
                var7 = _closure1_slot2;
                if (var7) {
                    _fun9225_ip = 200;
                    continue _fun9225
                }
            case 194:
                var7 = {};
                var _closure1_slot2 = var7;
            case 200:
                var1 = function(arg0, arg1) { // Original name: processDebugIds, environment: var1
                    _fun9226: for (var _fun9226_ip = 0;;) switch (_fun9226_ip) {
                        case 0:
                            var8 = arg1;
                            var0 = undefined;
                            var9 = undefined;
                            var10 = undefined;
                            var11 = undefined;
                            var12 = undefined;
                            var13 = undefined;
                            var14 = undefined;
                            var15 = undefined;
                            var16 = undefined;
                            var7 = arg0;
                            var2 = var7[Symbol.iterator];
                            var7 = var2().next;
                            var5 = 0;
                            var3 = 1;
                            var1 = null;
                        case 40:
                            var18 = var7().value;
                            var17 = var2;
                            if (!(var17 !== var0)) {
                                _fun9226_ip = 330;
                                continue _fun9226
                            }
                        case 54: // try_start_0
                            var9 = var18;
                            var17 = var8;
                            var11 = var17[var18];
                            var17 = _closure1_slot2;
                            var10 = var17;
                            var18 = var1 == var17;
                            var17 = undefined;
                            if (var18) {
                                _fun9226_ip = 90;
                                continue _fun9226
                            }
                        case 80:
                            var19 = var10;
                            var18 = var9;
                            var17 = var19[var18];
                        case 90:
                            var12 = var17;
                            if (!var17) {
                                _fun9226_ip = 112;
                                continue _fun9226
                            }
                        case 96:
                            var17 = _closure1_slot5;
                            if (!var17) {
                                _fun9226_ip = 112;
                                continue _fun9226
                            }
                        case 103:
                            var17 = var11;
                            if (var17) {
                                _fun9226_ip = 260;
                                continue _fun9226
                            }
                        case 112:
                            var17 = var11;
                            if (!var17) {
                                _fun9226_ip = 318;
                                continue _fun9226
                            }
                        case 121:
                            var18 = _closure2_slot0;
                            var17 = var9;
                            var17 = var18.bind(var0)(var17);
                            var13 = var17;
                            var17 = var17.length;
                            var17 = var17 - var3;
                            var14 = var17;
                            if (!(var17 >= var5)) {
                                _fun9226_ip = 318;
                                continue _fun9226
                            }
                        case 155:
                            var18 = var13;
                            var17 = var14;
                            var17 = var18[var17];
                            var15 = var17;
                            var18 = var1 == var17;
                            var17 = undefined;
                            if (var18) {
                                _fun9226_ip = 186;
                                continue _fun9226
                            }
                        case 177:
                            var18 = var15;
                            var17 = var18.filename;
                        case 186:
                            var16 = var17;
                            if (!var17) {
                                _fun9226_ip = 206;
                                continue _fun9226
                            }
                        case 192:
                            var17 = _closure1_slot5;
                            if (!var17) {
                                _fun9226_ip = 206;
                                continue _fun9226
                            }
                        case 199:
                            var17 = _closure1_slot2;
                            if (var17) {
                                _fun9226_ip = 221;
                                continue _fun9226
                            }
                        case 206:
                            var17 = var14;
                            var17 = var17 - 1;
                            var14 = var17;
                            if (var17 >= var5) {
                                _fun9226_ip = 155;
                                continue _fun9226
                            }
                        case 219:
                            _fun9226_ip = 318;
                            continue _fun9226;
                        case 221:
                            var17 = _closure1_slot5;
                            var21 = var16;
                            var20 = var11;
                            var17[var21] = var20;
                            var19 = _closure1_slot2;
                            var18 = var9;
                            var17 = new Array(2);
                            var17[0] = var21;
                            var17[1] = var20;
                            var19[var18] = var17;
                            _fun9226_ip = 318;
                            continue _fun9226;
                        case 260:
                            var19 = _closure1_slot5;
                            var17 = var12;
                            var18 = var17[var5];
                            var17 = var11;
                            var19[var18] = var17;
                            var17 = _closure1_slot2;
                            if (!var17) {
                                _fun9226_ip = 318;
                                continue _fun9226
                            }
                        case 285:
                            var19 = _closure1_slot2;
                            var18 = var9;
                            var17 = var12;
                            var20 = var17[var5];
                            var17 = new Array(2);
                            var17[0] = var20;
                            var20 = var11;
                            var17[1] = var20;
                            var19[var18] = var17;
                        case 318: // try_end0
                            _fun9226_ip = 40;
                            continue _fun9226;
                        case 323: // catch_target0
                            CatchBlockStart(arg_register = 1);
                            var2.return();
                            throw var1;
                        case 330:
                            return var0;
                    }
                };
                if (!var6) {
                    _fun9225_ip = 214;
                    continue _fun9225
                }
            case 208:
                var5 = var1.bind(var4)(var5, var6);
            case 214:
                if (!var3) {
                    _fun9225_ip = 223;
                    continue _fun9225
                }
            case 217:
                var1 = var1.bind(var4)(var2, var3);
            case 223:
                var1 = _closure1_slot5;
                return var1;
            case 229:
                var0 = _closure1_slot5;
                return var0;
        }
    };
    var _closure1_slot6 = var0;
    var3 = global;
    var6 = var3.Object;
    var5 = var6.defineProperty;
    var3 = var3.Symbol;
    var4 = var3.toStringTag;
    var3 = {};
    var7 = 'Module';
    var3.value = var7;
    var3 = var5.bind(var6)(var1, var4, var3);
    var2 = function(arg0, arg1) { // Original name: getDebugImagesForResources, environment: var2
        _fun9227: for (var _fun9227_ip = 0;;) switch (_fun9227_ip) {
            case 0:
                var4 = undefined;
                var5 = undefined;
                var0 = undefined;
                var6 = undefined;
                var2 = _closure1_slot6;
                var1 = arg0;
                var2 = var2.bind(var4)(var1);
                var5 = var2;
                var1 = new Array(0);
                if (var2) {
                    _fun9227_ip = 35;
                    continue _fun9227
                }
            case 33:
                return var1;
            case 35:
                var0 = var1;
                var3 = arg1;
                var2 = var3[Symbol.iterator];
                var3 = var2().next;
                var1 = 'sourcemap';
            case 50:
                var8 = var3().value;
                var7 = var2;
                if (!(var7 !== var4)) {
                    _fun9227_ip = 131;
                    continue _fun9227
                }
            case 61: // try_start_0
                var6 = var8;
                var7 = var8;
                if (!var8) {
                    _fun9227_ip = 80;
                    continue _fun9227
                }
            case 70:
                var9 = var5;
                var8 = var6;
                var7 = var9[var8];
            case 80:
                if (!var7) {
                    _fun9227_ip = 122;
                    continue _fun9227
                }
            case 83:
                var9 = var0;
                var8 = var9.push;
                var7 = {};
                var7.type = var1;
                var11 = var6;
                var7.code_file = var11;
                var10 = var5;
                var10 = var10[var11];
                var7.debug_id = var10;
                var7 = var8.bind(var9)(var7);
            case 122: // try_end0
                _fun9227_ip = 50;
                continue _fun9227;
            case 124: // catch_target0
                CatchBlockStart(arg_register = 1);
                var2.return();
                throw var1;
            case 131:
                return var0;
        }
    };
    var1.getDebugImagesForResources = var2;
    var1.getFilenameToDebugIdMap = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [821]);