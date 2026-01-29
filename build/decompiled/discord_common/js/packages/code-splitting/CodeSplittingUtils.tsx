// ../discord_common/js/packages/code-splitting/CodeSplittingUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun25433: for (var _fun25433_ip = 0;;) switch (_fun25433_ip) {
        case 0:
            var11 = require;
            var2 = exports;
            var10 = dependencyMap;
            var _closure1_slot0 = var11;
            var _closure1_slot1 = var10;
            var0 = global;
            var5 = var0.Object;
            var4 = var5.defineProperty;
            var3 = {};
            var0 = true;
            var3.value = var0;
            var0 = '__esModule';
            var0 = var4.bind(var5)(var2, var0, var3);
            var0 = 0;
            var4 = var10[var0];
            var3 = metroImportDefault;
            var0 = undefined;
            var3 = var3.bind(var0)(var4);
            var _closure1_slot2 = var3;
            var3 = 1;
            var4 = var10[var3];
            var3 = metroImportAll;
            var3 = var3.bind(var0)(var4);
            var _closure1_slot3 = var3;
            var3 = 2;
            var3 = var10[var3];
            var3 = var11.bind(var0)(var3);
            var4 = var3.jsx;
            var _closure1_slot4 = var4;
            var3 = var3.Fragment;
            var _closure1_slot5 = var3;
            var3 = function() { // Original name: loaderMaker, environment: var1
                _fun25434: for (var _fun25434_ip = 0;;) switch (_fun25434_ip) {
                    case 0:
                        var1 = arguments[0];
                        var2 = undefined;
                        if (!(var1 === var2)) {
                            _fun25434_ip = 15;
                            continue _fun25434
                        }
                    case 11:
                        var1 = 'transparent';
                    case 15:
                        var _closure2_slot0 = var1;
                        var0 = function() { // Environment: var0
                            var3 = _closure1_slot4;
                            var2 = {};
                            var0 = {
                                'position': 'absolute',
                                'width': '100%',
                                'height': '100%'
                            };
                            var1 = _closure2_slot0;
                            var0.backgroundColor = var1;
                            var2.style = var0;
                            var1 = undefined;
                            var0 = 'div';
                            var0 = var3.bind(var1)(var0, var2);
                            return var0;
                        };
                        return var0;
                }
            };
            var _closure1_slot6 = var3;
            var4 = 4;
            var4 = var10[var4];
            var12 = var11.bind(var0)(var4);
            var5 = var12.fileFinishedImporting;
            var4 = '../discord_common/js/packages/code-splitting/CodeSplittingUtils.tsx';
            var4 = var5.bind(var12)(var4);
            var5 = 3;
            var4 = var10[var5];
            var8 = var11.bind(var0)(var4);
            for (var4 in var8)
                case 178: {
                    case 187: var13 = var4;
                    var12 = var10[var5];
                    var12 = var11.bind(var0)(var12);
                    var12 = var12[var13];
                    var2[var13] = var12;
                    _fun25433_ip = 178;
                    continue _fun25433;
                }
        case 209:
            var2.loaderMaker = var3;
            var3 = function(arg0) { // Original name: makeLazy, environment: var1
                _fun25436: for (var _fun25436_ip = 0;;) switch (_fun25436_ip) {
                    case 0:
                        var1 = arg0;
                        var2 = var1.createPromise;
                        var _closure2_slot0 = var2;
                        var2 = var1.webpackId;
                        var _closure2_slot1 = var2;
                        var2 = var1.renderLoader;
                        var _closure2_slot2 = var2;
                        var4 = var1.name;
                        var2 = var1.memo;
                        var1 = undefined;
                        if (!(var2 === var1)) {
                            _fun25436_ip = 55;
                            continue _fun25436
                        }
                    case 53:
                        var2 = false;
                    case 55:
                        var _closure2_slot3 = var1;
                        var6 = _closure1_slot3;
                        var5 = var6.lazy;
                        var3 = function() { // Environment: var0
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot1;
                            var0 = 3;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.importWithRetry;
                            var0 = {};
                            var4 = _closure2_slot0;
                            var0.createPromise = var4;
                            var3 = _closure2_slot1;
                            var0.webpackId = var3;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var3 = var5.bind(var6)(var3);
                        _closure2_slot3 = var3;
                        var3 = function(arg0) { // Original name: Wrapper, environment: var0
                            _fun25438: for (var _fun25438_ip = 0;;) switch (_fun25438_ip) {
                                case 0:
                                    var3 = _closure1_slot4;
                                    var0 = _closure1_slot3;
                                    var2 = var0.Suspense;
                                    var1 = {};
                                    var6 = _closure2_slot2;
                                    var5 = null;
                                    if (!(var5 == var6)) {
                                        _fun25438_ip = 48;
                                        continue _fun25438
                                    }
                                case 32:
                                    var5 = _closure1_slot6;
                                    var6 = undefined;
                                    var5 = var5.bind(var6)();
                                    var5 = var5.bind(var6)();
                                    _fun25438_ip = 58;
                                    continue _fun25438;
                                case 48:
                                    var7 = _closure2_slot2;
                                    var6 = undefined;
                                    var5 = var7.bind(var6)();
                                case 58:
                                    var1.fallback = var5;
                                    var6 = _closure1_slot4;
                                    var5 = _closure2_slot3;
                                    var4 = {};
                                    var8 = arg0;
                                    var9 = var4;
                                    var0 = copyDataProperties(var9, var8);
                                    var0 = undefined;
                                    var4 = var6.bind(var0)(var5, var4);
                                    var1.children = var4;
                                    var0 = var3.bind(var0)(var2, var1);
                                    return var0;
                            }
                        };
                        var0 = var3;
                        if (!var2) {
                            _fun25436_ip = 111;
                            continue _fun25436
                        }
                    case 97:
                        var2 = _closure1_slot3;
                        var1 = var2.memo;
                        var0 = var1.bind(var2)(var3);
                    case 111:
                        if (var4) {
                            _fun25436_ip = 118;
                            continue _fun25436
                        }
                    case 114:
                        var4 = 'Unknown';
                    case 118:
                        var1 = global;
                        var1 = var1.HermesInternal;
                        var3 = var1.concat;
                        var2 = 'Suspense(';
                        var1 = ')';
                        var1 = var3.bind(var2)(var4, var1);
                        var0.displayName = var1;
                        return var0;
                }
            };
            var2.makeLazy = var3;
            var1 = function(arg0) { // Original name: LazyLibrary, environment: var1
                _fun25439: for (var _fun25439_ip = 0;;) switch (_fun25439_ip) {
                    case 0:
                        var0 = arg0;
                        var2 = var0.createPromise;
                        var _closure2_slot0 = var2;
                        var2 = var0.webpackId;
                        var _closure2_slot1 = var2;
                        var6 = var0.render;
                        var5 = var0.renderFallback;
                        var9 = _closure1_slot3;
                        var2 = var9.useState;
                        var7 = null;
                        var8 = var2.bind(var9)(var7);
                        var4 = _closure1_slot2;
                        var3 = undefined;
                        var2 = 2;
                        var8 = var4.bind(var3)(var8, var2);
                        var2 = 0;
                        var4 = var8[var2];
                        var2 = 1;
                        var2 = var8[var2];
                        var _closure2_slot2 = var2;
                        var8 = var9.useEffect;
                        var2 = function() { // Environment: var1
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot1;
                            var0 = 3;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.importWithRetry;
                            var1 = {};
                            var5 = _closure2_slot0;
                            var1.createPromise = var5;
                            var4 = _closure2_slot1;
                            var1.webpackId = var4;
                            var3 = var2.bind(var3)(var1);
                            var2 = var3.then;
                            var1 = function(arg0) { // Environment: var1
                                var0 = arg0;
                                var2 = var0.default;
                                var1 = _closure2_slot2;
                                var0 = undefined;
                                var0 = var1.bind(var0)(var2);
                                return var0;
                            };
                            var1 = var2.bind(var3)(var1);
                            return var0;
                        };
                        var1 = new Array(0);
                        var1 = var8.bind(var9)(var2, var1);
                        var2 = _closure1_slot4;
                        var1 = _closure1_slot5;
                        var0 = {};
                        if (!(var7 != var4)) {
                            _fun25439_ip = 129;
                            continue _fun25439
                        }
                    case 122:
                        var4 = var6.bind(var3)(var4);
                        _fun25439_ip = 133;
                        continue _fun25439;
                    case 129:
                        var4 = var5.bind(var3)();
                    case 133:
                        var0.children = var4;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                }
            };
            var2.LazyLibrary = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 33, 3089, 2]);