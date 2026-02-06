// modules/user_affinities/maybeSortByProbability.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 1;
    var3 = var3[var0];
    var0 = undefined;
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_affinities/maybeSortByProbability.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1, arg2() {
        _fun56078: for (var _fun56078_ip = 0;;) switch (_fun56078_ip) {
            case 0:
                var5 = arg0;
                var0 = arg1;
                var _closure2_slot0 = var0;
                var4 = _closure1_slot0;
                var0 = _closure1_slot1;
                var3 = 0;
                var1 = var0[var3];
                var0 = undefined;
                var4 = var4.bind(var0)(var1);
                var1 = var4.getVoiceUserAffinitySortType;
                var0 = arg2;
                var4 = var1.bind(var4)(var0);
                var1 = null;
                var0 = var5;
                if (!(var1 != var4)) {
                    _fun56078_ip = 138;
                    continue _fun56078
                }
            case 59:
                var1 = 'vc_probability';
                if (!(var1 !== var4)) {
                    _fun56078_ip = 103;
                    continue _fun56078
                }
            case 69:
                var6 = new Array(0);
                var9 = var6;
                var8 = var5;
                var7 = 0;
                var1 = arraySpread(var9, var8, var7);
                var4 = var6.sort;
                var1 = function(arg0, arg1) { // Environment: var2
                    _fun56080: for (var _fun56080_ip = 0;;) switch (_fun56080_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var1 = var2.get;
                            var0 = arg1;
                            var0 = var0.id;
                            var0 = var1.bind(var2)(var0);
                            var3 = null;
                            var1 = var3 == var0;
                            var5 = undefined;
                            if (var1) {
                                _fun56080_ip = 42;
                                continue _fun56080
                            }
                        case 36:
                            var5 = var0.communicationProbability;
                        case 42:
                            var6 = var3 != var5;
                            var0 = 0;
                            if (!var6) {
                                _fun56080_ip = 54;
                                continue _fun56080
                            }
                        case 51:
                            var0 = var5;
                        case 54:
                            var6 = _closure2_slot0;
                            var5 = var6.get;
                            var4 = arg0;
                            var4 = var4.id;
                            var4 = var5.bind(var6)(var4);
                            var5 = var3 == var4;
                            var2 = undefined;
                            if (var5) {
                                _fun56080_ip = 91;
                                continue _fun56080
                            }
                        case 85:
                            var2 = var4.communicationProbability;
                        case 91:
                            var3 = var3 != var2;
                            var1 = 0;
                            if (!var3) {
                                _fun56080_ip = 103;
                                continue _fun56080
                            }
                        case 100:
                            var1 = var2;
                        case 103:
                            var0 = var0 - var1;
                            return var0;
                    }
                };
                var1 = var4.bind(var6)(var1);
                _fun56078_ip = 135;
                continue _fun56078;
            case 103:
                var4 = new Array(0);
                var9 = var4;
                var8 = var5;
                var7 = 0;
                var3 = arraySpread(var9, var8, var7);
                var3 = var4.sort;
                var2 = function(arg0, arg1) { // Environment: var2
                    _fun56079: for (var _fun56079_ip = 0;;) switch (_fun56079_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var1 = var2.get;
                            var0 = arg1;
                            var0 = var0.id;
                            var0 = var1.bind(var2)(var0);
                            var3 = null;
                            var1 = var3 == var0;
                            var5 = undefined;
                            if (var1) {
                                _fun56079_ip = 42;
                                continue _fun56079
                            }
                        case 36:
                            var5 = var0.vcProbability;
                        case 42:
                            var6 = var3 != var5;
                            var0 = 0;
                            if (!var6) {
                                _fun56079_ip = 54;
                                continue _fun56079
                            }
                        case 51:
                            var0 = var5;
                        case 54:
                            var6 = _closure2_slot0;
                            var5 = var6.get;
                            var4 = arg0;
                            var4 = var4.id;
                            var4 = var5.bind(var6)(var4);
                            var5 = var3 == var4;
                            var2 = undefined;
                            if (var5) {
                                _fun56079_ip = 91;
                                continue _fun56079
                            }
                        case 85:
                            var2 = var4.vcProbability;
                        case 91:
                            var3 = var3 != var2;
                            var1 = 0;
                            if (!var3) {
                                _fun56079_ip = 103;
                                continue _fun56079
                            }
                        case 100:
                            var1 = var2;
                        case 103:
                            var0 = var0 - var1;
                            return var0;
                    }
                };
                var1 = var3.bind(var4)(var2);
            case 135:
                var0 = var1;
            case 138:
                return var0;
        }
    };
    var2.maybeSortByProbability = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6800, 2]);