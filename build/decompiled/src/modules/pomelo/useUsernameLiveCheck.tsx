// modules/pomelo/useUsernameLiveCheck.tsx
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
    var7 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/pomelo/useUsernameLiveCheck.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Environment: var1
        _fun81370: for (var _fun81370_ip = 0;;) switch (_fun81370_ip) {
            case 0:
                var6 = arg0;
                var8 = arguments[1];
                var9 = arguments[2];
                var1 = arguments[3];
                var _closure2_slot0 = var6;
                var10 = undefined;
                if (!(var8 === var10)) {
                    _fun81370_ip = 26;
                    continue _fun81370
                }
            case 24:
                var8 = true;
            case 26:
                var _closure2_slot1 = var8;
                if (!(var9 === var10)) {
                    _fun81370_ip = 36;
                    continue _fun81370
                }
            case 34:
                var9 = false;
            case 36:
                var _closure2_slot2 = var9;
                if (!(var1 === var10)) {
                    _fun81370_ip = 46;
                    continue _fun81370
                }
            case 44:
                var1 = false;
            case 46:
                var _closure2_slot3 = var1;
                var _closure2_slot4 = var10;
                var _closure2_slot5 = var10;
                var _closure2_slot6 = var10;
                var _closure2_slot7 = var10;
                var5 = _closure1_slot0;
                var11 = _closure1_slot2;
                var7 = 2;
                var3 = var11[var7];
                var15 = var5.bind(var10)(var3);
                var14 = var15.useStateFromStores;
                var3 = _closure1_slot4;
                var13 = new Array(1);
                var13[0] = var3;
                var12 = new Array(1);
                var12[0] = var6;
                var4 = function() { // Environment: var0
                    var2 = _closure1_slot4;
                    var1 = var2.validate;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var4 = var14.bind(var15)(var13, var4, var12);
                _closure2_slot4 = var4;
                var7 = var11[var7];
                var13 = var5.bind(var10)(var7);
                var12 = var13.useStateFromStores;
                var7 = new Array(1);
                var7[0] = var3;
                var3 = function() { // Environment: var0
                    var1 = _closure1_slot4;
                    var0 = var1.isRateLimited;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var7 = var12.bind(var13)(var7, var3);
                _closure2_slot5 = var7;
                var3 = 3;
                var3 = var11[var3];
                var5 = var5.bind(var10)(var3);
                var3 = var5.usePomeloDebounceDelay;
                var10 = var3.bind(var5)();
                _closure2_slot6 = var10;
                var3 = _closure1_slot3;
                var5 = var3.useMemo;
                var2 = new Array(3);
                var2[0] = var10;
                var2[1] = var9;
                var2[2] = var1;
                var1 = function() { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 4;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.debounce;
                    var1 = _closure2_slot6;
                    var0 = function(arg0) { // Environment: var0
                        _fun81374: for (var _fun81374_ip = 0;;) switch (_fun81374_ip) {
                            case 0:
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var0 = 5;
                                var1 = var1[var0];
                                var0 = undefined;
                                var5 = var2.bind(var0)(var1);
                                var4 = var5.attemptPomelo;
                                var1 = _closure2_slot2;
                                var3 = 'modal';
                                if (!var1) {
                                    _fun81374_ip = 49;
                                    continue _fun81374
                                }
                            case 45:
                                var3 = 'registration';
                            case 49:
                                var7 = _closure2_slot2;
                                var6 = _closure2_slot3;
                                var9 = arg0;
                                var10 = var5;
                                var8 = var3;
                                var0 = var10[var4](var9, var8, var7, var6, var5);
                                return var0;
                        }
                    };
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                var1 = var5.bind(var3)(var1, var2);
                _closure2_slot7 = var1;
                var5 = var3.useEffect;
                var2 = new Array(5);
                var2[0] = var8;
                var2[1] = var7;
                var2[2] = var4;
                var2[3] = var6;
                var2[4] = var1;
                var1 = function() { // Environment: var0
                    _fun81375: for (var _fun81375_ip = 0;;) switch (_fun81375_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            if (!var1) {
                                _fun81375_ip = 17;
                                continue _fun81375
                            }
                        case 10:
                            var2 = _closure2_slot5;
                            var1 = !var2;
                        case 17:
                            if (!var1) {
                                _fun81375_ip = 30;
                                continue _fun81375
                            }
                        case 20:
                            var3 = _closure2_slot4;
                            var2 = null;
                            var1 = var2 == var3;
                        case 30:
                            if (!var1) {
                                _fun81375_ip = 45;
                                continue _fun81375
                            }
                        case 33:
                            var3 = _closure2_slot0;
                            var2 = '';
                            var1 = var2 !== var3;
                        case 45:
                            if (!var1) {
                                _fun81375_ip = 63;
                                continue _fun81375
                            }
                        case 48:
                            var2 = _closure2_slot7;
                            var1 = _closure2_slot0;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                        case 63:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var5.bind(var3)(var1, var2);
                var2 = var3.useMemo;
                var1 = new Array(1);
                var1[0] = var4;
                var0 = function() { // Environment: var0
                    _fun81376: for (var _fun81376_ip = 0;;) switch (_fun81376_ip) {
                        case 0:
                            var2 = _closure2_slot4;
                            var0 = null;
                            var2 = var0 != var2;
                            var4 = undefined;
                            var0 = undefined;
                            if (!var2) {
                                _fun81376_ip = 58;
                                continue _fun81376
                            }
                        case 20:
                            var3 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var2 = 6;
                            var2 = var5[var2];
                            var3 = var3.bind(var4)(var2);
                            var2 = var3.formatUsernameLiveCheckValidation;
                            var1 = _closure2_slot4;
                            var0 = var2.bind(var3)(var1);
                        case 58:
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var0, var1);
                return var0;
        }
    };
    var2.useUsernameLiveCheck = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 10355, 632, 10359, 22, 10360, 10356, 2]);