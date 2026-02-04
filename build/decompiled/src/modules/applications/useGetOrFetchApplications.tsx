// modules/applications/useGetOrFetchApplications.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var3 = function arg0() {
        _fun56784: for (var _fun56784_ip = 0;;) switch (_fun56784_ip) {
            case 0:
                var7 = arg0;
                var2 = arguments[1];
                var _closure2_slot0 = var7;
                var4 = undefined;
                if (!(var2 === var4)) {
                    _fun56784_ip = 20;
                    continue _fun56784
                }
            case 18:
                var2 = true;
            case 20:
                var _closure2_slot1 = var2;
                var _closure2_slot2 = var4;
                var6 = _closure1_slot3;
                var5 = var6.useRef;
                var3 = new Array(0);
                var3 = var5.bind(var6)(var3);
                _closure2_slot2 = var3;
                var6 = _closure1_slot3;
                var5 = var6.useEffect;
                var3 = new Array(2);
                var3[0] = var7;
                var3[1] = var2;
                var2 = function() { // Environment: var0
                    _fun56785: for (var _fun56785_ip = 0;;) switch (_fun56785_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            if (!var1) {
                                _fun56785_ip = 63;
                                continue _fun56785
                            }
                        case 10:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 2;
                            var3 = var3[var2];
                            var2 = undefined;
                            var5 = var4.bind(var2)(var3);
                            var4 = var5.areArraysShallowEqual;
                            var3 = _closure2_slot0;
                            var2 = _closure2_slot2;
                            var2 = var2.current;
                            var2 = var4.bind(var5)(var3, var2);
                            var1 = !var2;
                        case 63:
                            if (!var1) {
                                _fun56785_ip = 187;
                                continue _fun56785
                            }
                        case 66:
                            var3 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var1 = 3;
                            var1 = var9[var1];
                            var8 = undefined;
                            var5 = var3.bind(var8)(var1);
                            var4 = var5.fetchApplications;
                            var1 = 4;
                            var1 = var9[var1];
                            var3 = var3.bind(var8)(var1);
                            var1 = _closure2_slot0;
                            var6 = var3.bind(var8)(var1);
                            var3 = var6.filter;
                            var7 = _closure1_slot0;
                            var2 = 5;
                            var2 = var9[var2];
                            var2 = var7.bind(var8)(var2);
                            var2 = var2.isNotNullish;
                            var3 = var3.bind(var6)(var2);
                            var2 = var3.uniq;
                            var3 = var2.bind(var3)();
                            var2 = var3.value;
                            var3 = var2.bind(var3)();
                            var2 = false;
                            var2 = var4.bind(var5)(var3, var2);
                            var0 = _closure2_slot2;
                            var0.current = var1;
                        case 187:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var5.bind(var6)(var2, var3);
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 6;
                var2 = var5[var2];
                var3 = var3.bind(var4)(var2);
                var2 = var3.useStateFromStoresArray;
                var4 = _closure1_slot4;
                var1 = new Array(1);
                var1[0] = var4;
                var0 = function() { // Environment: var0
                    var2 = _closure2_slot0;
                    var1 = var2.map;
                    var0 = function(arg0) { // Environment: var0
                        _fun56787: for (var _fun56787_ip = 0;;) switch (_fun56787_ip) {
                            case 0:
                                var3 = arg0;
                                var0 = null;
                                var1 = var0 != var3;
                                var0 = undefined;
                                if (!var1) {
                                    _fun56787_ip = 32;
                                    continue _fun56787
                                }
                            case 14:
                                var2 = _closure1_slot4;
                                var1 = var2.getApplication;
                                var0 = var1.bind(var2)(var3);
                            case 32:
                                return var0;
                        }
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot5 = var3;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var8 = var6[var0];
    var4 = arg3;
    var0 = undefined;
    var4 = var4.bind(var0)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/applications/useGetOrFetchApplications.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var1 = function arg0() {
        _fun56788: for (var _fun56788_ip = 0;;) switch (_fun56788_ip) {
            case 0:
                var5 = arg0;
                var3 = arguments[1];
                var2 = undefined;
                if (!(var3 === var2)) {
                    _fun56788_ip = 14;
                    continue _fun56788
                }
            case 12:
                var3 = true;
            case 14:
                var1 = _closure1_slot5;
                var0 = null;
                if (!(var0 == var5)) {
                    _fun56788_ip = 33;
                    continue _fun56788
                }
            case 27:
                var0 = new Array(0);
                _fun56788_ip = 44;
                continue _fun56788;
            case 33:
                var4 = new Array(1);
                var4[0] = var5;
                var0 = var4;
            case 44:
                var1 = var1.bind(var2)(var0, var3);
                var0 = 0;
                var0 = var1[var0];
                return var0;
        }
    };
    var2.useGetOrFetchApplication = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 3454, 628, 5344, 22, 1304, 566, 2]);