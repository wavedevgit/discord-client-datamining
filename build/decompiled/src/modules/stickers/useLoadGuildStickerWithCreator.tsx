// modules/stickers/useLoadGuildStickerWithCreator.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
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
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var7 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/stickers/useLoadGuildStickerWithCreator.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun115514: for (var _fun115514_ip = 0;;) switch (_fun115514_ip) {
            case 0:
                var0 = arg0;
                var _closure2_slot0 = var0;
                var6 = _closure1_slot4;
                var4 = var6.useState;
                var3 = 'loading';
                var5 = var4.bind(var6)(var3);
                var4 = _closure1_slot3;
                var7 = undefined;
                var3 = 2;
                var5 = var4.bind(var7)(var5, var3);
                var3 = 0;
                var3 = var5[var3];
                var4 = 1;
                var4 = var5[var4];
                var _closure2_slot1 = var4;
                var5 = _closure1_slot0;
                var8 = _closure1_slot1;
                var4 = 5;
                var4 = var8[var4];
                var7 = var5.bind(var7)(var4);
                var5 = var7.useStateFromStores;
                var1 = _closure1_slot6;
                var4 = new Array(1);
                var4[0] = var1;
                var1 = function() { // Environment: var2
                    var2 = _closure1_slot6;
                    var1 = var2.getStickersByGuildId;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var4 = var5.bind(var7)(var4, var1);
                var5 = var6.useEffect;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var2
                    var1 = global;
                    var1 = var1.AbortController;
                    var2 = var1.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var1
                        }
                    });
                    var3 = var2;
                    var1 = new var3[var1](var2);
                    var1 = var1 instanceof Object ? var1 : var2;
                    var _closure3_slot0 = var1;
                    var1 = var1.signal;
                    var _closure3_slot1 = var1;
                    var1 = function() { // Environment: var0
                        var3 = _closure1_slot2;
                        var2 = undefined;
                        var1 = function*() { // Environment: var0
                            var0 = function*() { // Original name: ?anon_0_, environment: var0
                                _fun115519: for (var _fun115519_ip = 0;;) switch (_fun115519_ip) {
                                    case 0:
                                        StartGenerator();
                                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                        if (var1) {
                                            _fun115519_ip = 126;
                                            continue _fun115519
                                        }
                                    case 7: // try_start_0
                                        var2 = _closure1_slot0;
                                        var3 = _closure1_slot1;
                                        var1 = 6;
                                        var1 = var3[var1];
                                        var5 = undefined;
                                        var7 = var2.bind(var5)(var1);
                                        var6 = var7.fetchGuildStickersWithCreator;
                                        var4 = _closure2_slot0;
                                        var1 = _closure3_slot1;
                                        var1 = var6.bind(var7)(var4, var1);
                                        SaveGenerator(address = 62);
                                    case 60:
                                        return var1;
                                    case 62:
                                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                                        if (var4) {
                                            _fun115519_ip = 89;
                                            continue _fun115519
                                        }
                                    case 68:
                                        var4 = _closure2_slot1;
                                        var2 = 'success';
                                        var2 = var4.bind(var5)(var2);
                                        var2 = null;
                                        _closure3_slot0 = var2;
                                    case 87: // try_end0
                                        _fun115519_ip = 121;
                                        continue _fun115519;
                                    case 89:
                                        return var1;
                                    case 92: // catch_target0
                                        CatchBlockStart(arg_register = 1);
                                        var3 = _closure2_slot1;
                                        var2 = undefined;
                                        var1 = 'error';
                                        var1 = var3.bind(var2)(var1);
                                        var1 = null;
                                        _closure3_slot0 = var1;
                                    case 121:
                                        var1 = undefined;
                                        return var1;
                                    case 126:
                                        return var0;
                                }
                            };
                            return var0;
                        };
                        var1 = var3.bind(var2)(var1);
                        var _closure4_slot0 = var1;
                        var0 = function() { // Environment: var0
                            var0 = undefined;
                            var3 = _closure4_slot0;
                            var2 = var3.apply;
                            var0 = arguments;
                            var1 = var0;
                            var0 = this;
                            var0 = var2.bind(var3)(var0, var1);
                            return var0;
                        };
                        return var0;
                    };
                    var2 = undefined;
                    var1 = var1.bind(var2)();
                    var1 = var1.bind(var2)();
                    var0 = function() { // Environment: var0
                        _fun115521: for (var _fun115521_ip = 0;;) switch (_fun115521_ip) {
                            case 0:
                                var2 = _closure2_slot1;
                                var0 = undefined;
                                var1 = 'loading';
                                var1 = var2.bind(var0)(var1);
                                var2 = _closure3_slot0;
                                var1 = null;
                                if (!(var1 != var2)) {
                                    _fun115521_ip = 41;
                                    continue _fun115521
                                }
                            case 31:
                                var1 = var2.abort;
                                var1 = var1.bind(var2)();
                            case 41:
                                return var0;
                        }
                    };
                    return var0;
                };
                var0 = var5.bind(var6)(var0, var1);
                var0 = 'success';
                if (!(var0 !== var3)) {
                    _fun115514_ip = 154;
                    continue _fun115514
                }
            case 146:
                var0 = {};
                var0.status = var3;
                _fun115514_ip = 185;
                continue _fun115514;
            case 154:
                var1 = {};
                var1.status = var3;
                var3 = var4.map;
                var2 = function(arg0) { // Environment: var2
                    _fun115522: for (var _fun115522_ip = 0;;) switch (_fun115522_ip) {
                        case 0:
                            var2 = arg0;
                            var3 = _closure1_slot5;
                            var1 = var3.getUser;
                            var0 = var2.user_id;
                            var3 = var1.bind(var3)(var0);
                            var1 = null;
                            var0 = var2;
                            if (!(var1 != var3)) {
                                _fun115522_ip = 60;
                                continue _fun115522
                            }
                        case 36:
                            var1 = {};
                            var5 = var1;
                            var4 = var2;
                            var2 = copyDataProperties(var5, var4);
                            var2 = 'user';
                            var1[var2] = var3;
                            var0 = var1;
                        case 60:
                            return var0;
                    }
                };
                var2 = var3.bind(var4)(var2);
                var1.stickers = var2;
                var0 = var1;
            case 185:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 1621, 5599, 566, 9393, 2]);