// modules/avatar/useAvatarColor.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var8;
    var4 = function arg0() {
        var1 = _closure1_slot7;
        var0 = var1.getState;
        var0 = var0.bind(var1)();
        var1 = var0.palette;
        var0 = arg0;
        var1 = var1[var0];
        var0 = null;
        var0 = var0 != var1;
        return var0;
    };
    var _closure1_slot8 = var4;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun56276: for (var _fun56276_ip = 0;;) switch (_fun56276_ip) {
                    case 0:
                        StartGenerator();
                        var3 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun56276_ip = 52;
                            continue _fun56276
                        }
                    case 10:
                        var4 = _closure1_slot8;
                        var1 = undefined;
                        var4 = var4.bind(var1)(var3);
                        if (var4) {
                            _fun56276_ip = 49;
                            continue _fun56276
                        }
                    case 27:
                        var2 = _closure1_slot10;
                        var2 = var2.bind(var1)(var3);
                        SaveGenerator(address = 40);
                    case 38:
                        return var2;
                    case 40:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                        if (!var3) {
                            _fun56276_ip = 49;
                            continue _fun56276
                        }
                    case 46:
                        return var2;
                    case 49:
                        return var1;
                    case 52:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot9 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot9 = var0;
    var0 = function() {
        var0 = undefined;
        var3 = _closure1_slot11;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot10 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun56280: for (var _fun56280_ip = 0;;) switch (_fun56280_ip) {
                    case 0:
                        StartGenerator();
                        var6 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun56280_ip = 255;
                            continue _fun56280
                        }
                    case 15:
                        var4 = var6;
                        var _closure4_slot0 = var6;
                        var1 = undefined;
                        var _closure4_slot1 = var1;
                        var _closure4_slot2 = var1;
                        var7 = _closure1_slot7;
                        var5 = var7.getState;
                        var5 = var5.bind(var7)();
                        var5 = var5.fetching;
                        var5 = var5[var6];
                        if (var5) {
                            _fun56280_ip = 252;
                            continue _fun56280
                        }
                    case 65:
                        var7 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var5 = 5;
                        var6 = var6[var5];
                        var8 = var7.bind(var1)(var6);
                        var7 = var8.batchUpdates;
                        var6 = function() { // Environment: var2
                            var2 = _closure1_slot7;
                            var1 = var2.setState;
                            var0 = function(arg0) { // Environment: var0
                                var0 = {};
                                var1 = {};
                                var2 = arg0;
                                var4 = var2.fetching;
                                var5 = var1;
                                var2 = copyDataProperties(var5, var4);
                                var3 = _closure4_slot0;
                                var2 = true;
                                var1[var3] = var2;
                                var0.fetching = var1;
                                return var0;
                            };
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var6 = var7.bind(var8)(var6);
                    case 101: // try_start_0
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var6 = 6;
                        var6 = var8[var6];
                        var7 = var7.bind(var1)(var6);
                        var6 = var7.getPaletteForAvatar;
                        var4 = var6.bind(var7)(var4);
                        SaveGenerator(address = 136);
                    case 134:
                        return var4;
                    case 136:
                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 6);
                        if (var6) {
                            _fun56280_ip = 214;
                            continue _fun56280
                        }
                    case 142:
                        _closure4_slot1 = var4;
                        var7 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var8 = 7;
                        var8 = var6[var8];
                        var10 = var7.bind(var1)(var8);
                        var9 = var10.getComplimentaryPaletteForColor;
                        var8 = 0;
                        var8 = var4[var8];
                        var8 = var9.bind(var10)(var8);
                        _closure4_slot2 = var8;
                        var6 = var6[var5];
                        var8 = var7.bind(var1)(var6);
                        var7 = var8.batchUpdates;
                        var6 = function() { // Environment: var2
                            var2 = _closure1_slot7;
                            var1 = var2.setState;
                            var0 = function(arg0) { // Environment: var0
                                var2 = arg0;
                                var0 = {};
                                var1 = {};
                                var9 = var2.fetching;
                                var10 = var1;
                                var3 = copyDataProperties(var10, var9);
                                var3 = _closure4_slot0;
                                var5 = false;
                                var1[var3] = var5;
                                var0.fetching = var1;
                                var1 = {};
                                var9 = var2.palette;
                                var10 = var1;
                                var2 = copyDataProperties(var10, var9);
                                var7 = _closure4_slot1;
                                var5 = var7.slice;
                                var6 = 0;
                                var2 = 2;
                                var9 = var5.bind(var7)(var6, var2);
                                var2 = new Array(0);
                                var10 = var2;
                                var8 = 0;
                                var8 = arraySpread(var10, var9, var8);
                                var9 = _closure4_slot2;
                                var10 = var2;
                                var4 = arraySpread(var10, var9, var8);
                                var1[var3] = var2;
                                var0.palette = var1;
                                return var0;
                            };
                            var0 = var1.bind(var2)(var0);
                            var0 = undefined;
                            return var0;
                        };
                        var6 = var7.bind(var8)(var6);
                    case 212: // try_end0
                        _fun56280_ip = 252;
                        continue _fun56280;
                    case 214:
                        return var4;
                    case 217: // catch_target0
                        CatchBlockStart(arg_register = 4);
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var3 = var3[var5];
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.batchUpdates;
                        var2 = function() { // Environment: var2
                            var2 = _closure1_slot7;
                            var1 = var2.setState;
                            var0 = function(arg0) { // Environment: var0
                                var0 = {};
                                var1 = {};
                                var2 = arg0;
                                var4 = var2.fetching;
                                var5 = var1;
                                var2 = copyDataProperties(var5, var4);
                                var3 = _closure4_slot0;
                                var2 = false;
                                var1[var3] = var2;
                                var0.fetching = var1;
                                return var0;
                            };
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var2 = var3.bind(var4)(var2);
                    case 252:
                        return var1;
                    case 255:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot11 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot11 = var0;
    var1 = function arg0, arg1() {
        _fun56287: for (var _fun56287_ip = 0;;) switch (_fun56287_ip) {
            case 0:
                var3 = arg0;
                var2 = arg1;
                var1 = arguments[2];
                var _closure2_slot0 = var3;
                var7 = undefined;
                if (!(var1 === var7)) {
                    _fun56287_ip = 23;
                    continue _fun56287
                }
            case 21:
                var1 = true;
            case 23:
                var _closure2_slot1 = var1;
                var _closure2_slot2 = var7;
                var _closure2_slot3 = var7;
                var5 = _closure1_slot7;
                var4 = function(arg0) { // Environment: var0
                    _fun56288: for (var _fun56288_ip = 0;;) switch (_fun56288_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var0 = null;
                            var2 = var0 == var2;
                            var0 = undefined;
                            if (var2) {
                                _fun56288_ip = 35;
                                continue _fun56288
                            }
                        case 18:
                            var2 = arg0;
                            var2 = var2.palette;
                            var1 = _closure2_slot0;
                            var0 = var2[var1];
                        case 35:
                            return var0;
                    }
                };
                var6 = var5.bind(var7)(var4);
                _closure2_slot2 = var6;
                var5 = _closure1_slot0;
                var8 = _closure1_slot2;
                var4 = 8;
                var4 = var8[var4];
                var8 = var5.bind(var7)(var4);
                var7 = var8.useStateFromStores;
                var4 = _closure1_slot6;
                var5 = new Array(1);
                var5[0] = var4;
                var4 = function() { // Environment: var0
                    _fun56289: for (var _fun56289_ip = 0;;) switch (_fun56289_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var3 = 1;
                            var0 = var3;
                            if (!var1) {
                                _fun56289_ip = 45;
                                continue _fun56289
                            }
                        case 16:
                            var2 = _closure1_slot6;
                            var2 = var2.desaturateUserColors;
                            var0 = var3;
                            if (!var2) {
                                _fun56289_ip = 45;
                                continue _fun56289
                            }
                        case 35:
                            var1 = _closure1_slot6;
                            var0 = var1.saturation;
                        case 45:
                            return var0;
                    }
                };
                var5 = var7.bind(var8)(var5, var4);
                _closure2_slot3 = var5;
                var8 = _closure1_slot5;
                var7 = var8.useEffect;
                var4 = new Array(2);
                var4[0] = var3;
                var4[1] = var6;
                var3 = function() { // Environment: var0
                    _fun56290: for (var _fun56290_ip = 0;;) switch (_fun56290_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            var3 = null;
                            var1 = var3 != var1;
                            if (!var1) {
                                _fun56290_ip = 24;
                                continue _fun56290
                            }
                        case 16:
                            var2 = _closure2_slot2;
                            var1 = var3 == var2;
                        case 24:
                            if (!var1) {
                                _fun56290_ip = 45;
                                continue _fun56290
                            }
                        case 27:
                            var2 = _closure1_slot10;
                            var1 = _closure2_slot0;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                        case 45:
                            var0 = undefined;
                            return var0;
                    }
                };
                var3 = var7.bind(var8)(var3, var4);
                var4 = _closure1_slot5;
                var3 = var4.useMemo;
                var1 = new Array(2);
                var1[0] = var6;
                var1[1] = var5;
                var0 = function() { // Environment: var0
                    _fun56291: for (var _fun56291_ip = 0;;) switch (_fun56291_ip) {
                        case 0:
                            var2 = _closure2_slot2;
                            var0 = null;
                            var2 = var0 == var2;
                            var0 = undefined;
                            if (var2) {
                                _fun56291_ip = 39;
                                continue _fun56291
                            }
                        case 18:
                            var3 = _closure2_slot2;
                            var2 = var3.map;
                            var1 = function(arg0) { // Environment: var1
                                _fun56292: for (var _fun56292_ip = 0;;) switch (_fun56292_ip) {
                                    case 0:
                                        var3 = arg0;
                                        var0 = var3[Symbol.iterator];
                                        var3 = var0().next;
                                        var4 = var3().value;
                                        var1 = var0;
                                        var2 = undefined;
                                        var1 = var1 === var2;
                                        var8 = undefined;
                                        if (var1) {
                                            _fun56292_ip = 27;
                                            continue _fun56292
                                        }
                                    case 24:
                                        var8 = var4;
                                    case 27:
                                        var7 = undefined;
                                        if (var1) {
                                            _fun56292_ip = 57;
                                            continue _fun56292
                                        }
                                    case 32:
                                        var5 = var3().value;
                                        var4 = var0;
                                        var4 = var4 === var2;
                                        var7 = undefined;
                                        var1 = var4;
                                        if (var4) {
                                            _fun56292_ip = 57;
                                            continue _fun56292
                                        }
                                    case 51:
                                        var7 = var5;
                                        var1 = var4;
                                    case 57:
                                        var5 = undefined;
                                        if (var1) {
                                            _fun56292_ip = 87;
                                            continue _fun56292
                                        }
                                    case 62:
                                        var4 = var3().value;
                                        var3 = var0;
                                        var3 = var3 === var2;
                                        var5 = undefined;
                                        var1 = var3;
                                        if (var3) {
                                            _fun56292_ip = 87;
                                            continue _fun56292
                                        }
                                    case 81:
                                        var5 = var4;
                                        var1 = var3;
                                    case 87:
                                        if (var1) {
                                            _fun56292_ip = 93;
                                            continue _fun56292
                                        }
                                    case 90:
                                        var0.return();
                                    case 93:
                                        var1 = _closure1_slot1;
                                        var6 = _closure1_slot2;
                                        var0 = 9;
                                        var3 = var6[var0];
                                        var4 = var1.bind(var2)(var3);
                                        var3 = {};
                                        var3.r = var8;
                                        var3.g = var7;
                                        var3.b = var5;
                                        var4 = var4.bind(var2)(var3);
                                        var3 = var4.toHsl;
                                        var3 = var3.bind(var4)();
                                        var4 = var3.h;
                                        var5 = var3.s;
                                        var3 = var3.l;
                                        var0 = var6[var0];
                                        var1 = var1.bind(var2)(var0);
                                        var0 = {};
                                        var0.h = var4;
                                        var4 = _closure2_slot3;
                                        var4 = var5 * var4;
                                        var0.s = var4;
                                        var0.l = var3;
                                        var1 = var1.bind(var2)(var0);
                                        var0 = var1.toHexString;
                                        var0 = var0.bind(var1)();
                                        return var0;
                                }
                            };
                            var0 = var2.bind(var3)(var1);
                        case 39:
                            return var0;
                    }
                };
                var0 = var3.bind(var4)(var0, var1);
                var1 = null;
                if (!(var1 == var0)) {
                    _fun56287_ip = 193;
                    continue _fun56287
                }
            case 178:
                var1 = new Array(2);
                var1[0] = var2;
                var1[1] = var2;
                var0 = var1;
            case 193:
                return var0;
        }
    };
    var _closure1_slot12 = var1;
    var0 = global;
    var10 = var0.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var5);
    var0 = 0;
    var5 = var8[var0];
    var0 = undefined;
    var5 = var6.bind(var0)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var8[var5];
    var5 = var6.bind(var0)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var9 = var8[var5];
    var5 = arg3;
    var5 = var5.bind(var0)(var9);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var8[var5];
    var5 = var6.bind(var0)(var5);
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var8[var5];
    var9 = var7.bind(var0)(var5);
    var6 = var9.create;
    var5 = function() { // Environment: var3
        var0 = {};
        var1 = {};
        var0.palette = var1;
        var1 = {};
        var0.fetching = var1;
        return var0;
    };
    var5 = var6.bind(var9)(var5);
    var _closure1_slot7 = var5;
    var6 = 10;
    var6 = var8[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/avatar/useAvatarColor.tsx';
    var6 = var7.bind(var8)(var6);
    var6 = function arg0, arg1() {
        _fun56294: for (var _fun56294_ip = 0;;) switch (_fun56294_ip) {
            case 0:
                var5 = arguments[2];
                var3 = undefined;
                if (!(var5 === var3)) {
                    _fun56294_ip = 11;
                    continue _fun56294
                }
            case 9:
                var5 = true;
            case 11:
                var4 = _closure1_slot12;
                var2 = arg0;
                var1 = arg1;
                var2 = var4.bind(var3)(var2, var1, var5);
                var1 = _closure1_slot3;
                var0 = 1;
                var1 = var1.bind(var3)(var2, var0);
                var0 = 0;
                var0 = var1[var0];
                return var0;
        }
    };
    var2.default = var6;
    var2.useColorStore = var5;
    var2.hasFetchedColors = var4;
    var4 = function() {
        var0 = undefined;
        var3 = _closure1_slot9;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.maybeFetchColors = var4;
    var3 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var2 = _closure1_slot7;
        var1 = undefined;
        var0 = function(arg0) { // Environment: var0
            _fun56297: for (var _fun56297_ip = 0;;) switch (_fun56297_ip) {
                case 0:
                    var2 = _closure2_slot0;
                    var0 = null;
                    var0 = var0 != var2;
                    if (!var0) {
                        _fun56297_ip = 33;
                        continue _fun56297
                    }
                case 16:
                    var2 = arg0;
                    var2 = var2.fetching;
                    var1 = _closure2_slot0;
                    var0 = var2[var1];
                case 33:
                    return var0;
            }
        };
        var0 = var2.bind(var1)(var0);
        var0 = !var0;
        return var0;
    };
    var2.useHasFetchedColors = var3;
    var2.useAvatarColors = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 5, 31, 1298, 629, 802, 1461, 3199, 566, 4588, 2]);