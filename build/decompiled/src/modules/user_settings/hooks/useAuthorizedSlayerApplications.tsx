// modules/user_settings/hooks/useAuthorizedSlayerApplications.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var6 = var7.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.FetchState;
    var _closure1_slot5 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/hooks/useAuthorizedSlayerApplications.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        _fun88360: for (var _fun88360_ip = 0;;) switch (_fun88360_ip) {
            case 0:
                var8 = arg1;
                var1 = arg0;
                var _closure2_slot0 = var1;
                var _closure2_slot1 = var8;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var4 = 2;
                var1 = var7[var4];
                var5 = undefined;
                var11 = var6.bind(var5)(var1);
                var10 = var11.useStateFromStores;
                var1 = _closure1_slot4;
                var9 = new Array(1);
                var9[0] = var1;
                var3 = function() { // Environment: var0
                    var1 = _closure1_slot4;
                    var0 = var1.getFetchState;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var3 = var10.bind(var11)(var9, var3);
                var4 = var7[var4];
                var6 = var6.bind(var5)(var4);
                var5 = var6.useStateFromStores;
                var4 = new Array(1);
                var4[0] = var1;
                var1 = function() { // Environment: var0
                    _fun88362: for (var _fun88362_ip = 0;;) switch (_fun88362_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var2 = _closure1_slot4;
                            if (var0) {
                                _fun88362_ip = 29;
                                continue _fun88362
                            }
                        case 17:
                            var0 = var2.getNewestTokens;
                            var0 = var0.bind(var2)();
                            _fun88362_ip = 39;
                            continue _fun88362;
                        case 29:
                            var1 = var2.getNewestTokensForNonChildrenApplications;
                            var0 = var1.bind(var2)();
                        case 39:
                            return var0;
                    }
                };
                var4 = var5.bind(var6)(var4, var1);
                var _closure2_slot2 = var4;
                var7 = _closure1_slot3;
                var6 = var7.useMemo;
                var5 = new Array(1);
                var5[0] = var4;
                var1 = function() { // Environment: var0
                    _fun88363: for (var _fun88363_ip = 0;;) switch (_fun88363_ip) {
                        case 0:
                            var3 = _closure2_slot2;
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun88363_ip = 55;
                                continue _fun88363
                            }
                        case 15:
                            var3 = _closure2_slot2;
                            var2 = var3.filter;
                            var1 = function(arg0) { // Environment: var0
                                var1 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var0 = 3;
                                var0 = var2[var0];
                                var2 = undefined;
                                var1 = var1.bind(var2)(var0);
                                var0 = arg0;
                                var0 = var0.application;
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var2 = var2.bind(var3)(var1);
                            var1 = var2.map;
                            var0 = function(arg0) { // Environment: var0
                                var0 = arg0;
                                var0 = var0.application;
                                return var0;
                            };
                            var0 = var1.bind(var2)(var0);
                            _fun88363_ip = 59;
                            continue _fun88363;
                        case 55:
                            var0 = new Array(0);
                        case 59:
                            return var0;
                    }
                };
                var1 = var6.bind(var7)(var1, var5);
                var6 = var7.useEffect;
                var5 = new Array(1);
                var5[0] = var8;
                var0 = function() { // Environment: var0
                    _fun88366: for (var _fun88366_ip = 0;;) switch (_fun88366_ip) {
                        case 0:
                            var0 = _closure2_slot1;
                            if (var0) {
                                _fun88366_ip = 45;
                                continue _fun88366
                            }
                        case 10:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 4;
                            var1 = var1[var0];
                            var0 = undefined;
                            var1 = var2.bind(var0)(var1);
                            var0 = var1.fetch;
                            var0 = var0.bind(var1)();
                        case 45:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var6.bind(var7)(var0, var5);
                var0 = {};
                var2 = _closure1_slot5;
                var2 = var2.FETCHED;
                var2 = var3 !== var2;
                if (!var2) {
                    _fun88360_ip = 208;
                    continue _fun88360
                }
            case 185:
                var3 = null;
                var3 = var3 == var4;
                if (var3) {
                    _fun88360_ip = 205;
                    continue _fun88360
                }
            case 194:
                var5 = var4.length;
                var4 = 0;
                var3 = var4 === var5;
            case 205:
                var2 = var3;
            case 208:
                var0.showLoadingIndicator = var2;
                var0.slayerSdkApplications = var1;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 4552, 566, 10472, 5315, 2]);