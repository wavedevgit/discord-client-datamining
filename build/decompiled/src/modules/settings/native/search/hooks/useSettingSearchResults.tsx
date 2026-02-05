// modules/settings/native/search/hooks/useSettingSearchResults.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function arg0, arg1() {
        _fun89065: for (var _fun89065_ip = 0;;) switch (_fun89065_ip) {
            case 0:
                var2 = arg0;
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var0 = 6;
                var0 = var4[var0];
                var4 = undefined;
                var5 = var3.bind(var4)(var0);
                var3 = var5.isBlocked;
                var0 = arg1;
                var0 = var3.bind(var5)(var2, var0);
                var0 = !var0;
                if (!var0) {
                    _fun89065_ip = 88;
                    continue _fun89065
                }
            case 49:
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 7;
                var1 = var5[var1];
                var1 = var3.bind(var4)(var1);
                var1 = var1.SETTING_RENDERER_CONFIG;
                var1 = var1[var2];
                var1 = var1.unsearchable;
                var0 = !var1;
            case 88:
                return var0;
        }
    };
    var _closure1_slot10 = var0;
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
    var7 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.EMPTY_SETTINGS_LIST;
    var _closure1_slot8 = var3;
    var3 = new Array(0);
    var _closure1_slot9 = var3;
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/settings/native/search/hooks/useSettingSearchResults.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var9 = arg0;
        var _closure2_slot0 = var9;
        var7 = _closure1_slot5;
        var4 = var7.useMemo;
        var3 = function() { // Environment: var0
            var2 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 8;
            var1 = var4[var1];
            var3 = undefined;
            var2 = var2.bind(var3)(var1);
            var1 = _closure1_slot0;
            var0 = 9;
            var0 = var4[var0];
            var1 = var1.bind(var3)(var0);
            var0 = var1.getSettingSearchableTitles;
            var5 = var0.bind(var1)();
            var1 = var2.prototype;
            var1 = Object.create(var1, {
                constructor: {
                    value: var2
                }
            });
            var6 = var1;
            var0 = new var6[var2](var5, var4);
            var0 = var0 instanceof Object ? var0 : var1;
            return var0;
        };
        var1 = new Array(0);
        var5 = var4.bind(var7)(var3, var1);
        var _closure2_slot1 = var5;
        var3 = var7.useState;
        var1 = _closure1_slot9;
        var1 = var3.bind(var7)(var1);
        var12 = _closure1_slot4;
        var11 = undefined;
        var10 = 2;
        var4 = var12.bind(var11)(var1, var10);
        var1 = 0;
        var3 = var4[var1];
        var8 = 1;
        var4 = var4[var8];
        var _closure2_slot2 = var4;
        var4 = var7.useState;
        var2 = _closure1_slot8;
        var2 = var4.bind(var7)(var2);
        var2 = var12.bind(var11)(var2, var10);
        var4 = var2[var1];
        var2 = var2[var8];
        var _closure2_slot3 = var2;
        var6 = var7.useState;
        var2 = false;
        var2 = var6.bind(var7)(var2);
        var6 = var12.bind(var11)(var2, var10);
        var2 = var6[var1];
        var6 = var6[var8];
        var _closure2_slot4 = var6;
        var13 = var7.useState;
        var6 = 10;
        var6 = var13.bind(var7)(var6);
        var6 = var12.bind(var11)(var6, var10);
        var1 = var6[var1];
        var6 = var6[var8];
        var _closure2_slot5 = var6;
        var8 = var7.useMemo;
        var6 = new Array(2);
        var6[0] = var9;
        var6[1] = var5;
        var5 = function() { // Environment: var0
            _fun89068: for (var _fun89068_ip = 0;;) switch (_fun89068_ip) {
                case 0:
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 10;
                    var0 = var2[var0];
                    var3 = undefined;
                    var2 = var1.bind(var3)(var0);
                    var0 = function() { // Environment: var0
                        var3 = _closure1_slot3;
                        var2 = undefined;
                        var1 = function*(arg0) { // Environment: var0
                            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                                _fun89071: for (var _fun89071_ip = 0;;) switch (_fun89071_ip) {
                                    case 0:
                                        StartGenerator();
                                        var6 = arg0;
                                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                        if (var1) {
                                            _fun89071_ip = 232;
                                            continue _fun89071
                                        }
                                    case 15:
                                        var1 = undefined;
                                        var _closure6_slot0 = var1;
                                        var5 = _closure1_slot7;
                                        var4 = var5.getField;
                                        var2 = 'blocklist';
                                        var2 = var4.bind(var5)(var2);
                                        _closure6_slot0 = var2;
                                        var4 = _closure2_slot0;
                                        var5 = _closure2_slot1;
                                        if (var4) {
                                            _fun89071_ip = 123;
                                            continue _fun89071
                                        }
                                    case 61:
                                        var7 = var5.search;
                                        var4 = var6.trim;
                                        var4 = var4.bind(var6)();
                                        var4 = var7.bind(var5)(var4);
                                        SaveGenerator(address = 86);
                                    case 84:
                                        return var4;
                                    case 86:
                                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 7);
                                        if (var7) {
                                            _fun89071_ip = 120;
                                            continue _fun89071
                                        }
                                    case 92:
                                        var8 = var4.filter;
                                        var7 = function(arg0) { // Environment: var3
                                            var3 = _closure1_slot10;
                                            var2 = _closure6_slot0;
                                            var1 = undefined;
                                            var0 = arg0;
                                            var0 = var3.bind(var1)(var0, var2);
                                            return var0;
                                        };
                                        var8 = var8.bind(var4)(var7);
                                        var7 = _closure2_slot3;
                                        var7 = var7.bind(var1)(var8);
                                        _fun89071_ip = 218;
                                        continue _fun89071;
                                    case 120:
                                        return var4;
                                    case 123:
                                        var4 = var5.getScoredSearchResults;
                                        var5 = var4.bind(var5)(var6);
                                        var4 = var5.filter;
                                        var3 = function(arg0) { // Environment: var3
                                            var0 = arg0;
                                            var3 = var0.setting;
                                            var2 = _closure1_slot10;
                                            var1 = _closure6_slot0;
                                            var0 = undefined;
                                            var0 = var2.bind(var0)(var3, var1);
                                            return var0;
                                        };
                                        var3 = var4.bind(var5)(var3);
                                        var4 = _closure2_slot2;
                                        var4 = var4.bind(var1)(var3);
                                        var4 = global;
                                        var6 = var4.Math;
                                        var5 = var6.max;
                                        var8 = var4.Math;
                                        var7 = var8.min;
                                        var4 = var3.length;
                                        var3 = 10;
                                        var4 = var7.bind(var8)(var4, var3);
                                        var3 = 5;
                                        var4 = var5.bind(var6)(var4, var3);
                                        var3 = _closure2_slot5;
                                        var3 = var3.bind(var1)(var4);
                                    case 218:
                                        var3 = _closure2_slot4;
                                        var2 = false;
                                        var2 = var3.bind(var1)(var2);
                                        return var1;
                                    case 232:
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
                    var1 = var0.bind(var3)();
                    var4 = _closure2_slot0;
                    var0 = 0;
                    if (!var4) {
                        _fun89068_ip = 56;
                        continue _fun89068
                    }
                case 50:
                    var0 = 350;
                case 56:
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
            }
        };
        var8 = var8.bind(var7)(var5, var6);
        var _closure2_slot6 = var8;
        var6 = var7.useEffect;
        var5 = new Array(1);
        var5[0] = var8;
        var0 = function() { // Environment: var0
            var5 = _closure1_slot6;
            var4 = var5.subscribe;
            var3 = {};
            var1 = function arg0, arg1() {
                var1 = arg0;
                var0 = arg1;
                var0 = var1 === var0;
                return var0;
            };
            var3.equalityFn = var1;
            var2 = function(arg0) { // Environment: var0
                var0 = arg0;
                var1 = var0.query;
                var0 = var1.trim;
                var0 = var0.bind(var1)();
                return var0;
            };
            var1 = function(arg0) { // Environment: var0
                _fun89077: for (var _fun89077_ip = 0;;) switch (_fun89077_ip) {
                    case 0:
                        var2 = arg0;
                        var0 = '';
                        if (!(var0 !== var2)) {
                            _fun89077_ip = 38;
                            continue _fun89077
                        }
                    case 11:
                        var4 = _closure2_slot4;
                        var1 = undefined;
                        var3 = true;
                        var3 = var4.bind(var1)(var3);
                        var0 = _closure2_slot6;
                        var0 = var0.bind(var1)(var2);
                        _fun89077_ip = 72;
                        continue _fun89077;
                    case 38:
                        var4 = _closure2_slot2;
                        var3 = _closure1_slot9;
                        var2 = undefined;
                        var3 = var4.bind(var2)(var3);
                        var1 = _closure2_slot3;
                        var0 = _closure1_slot8;
                        var0 = var1.bind(var2)(var0);
                    case 72:
                        var0 = undefined;
                        return var0;
                }
            };
            var1 = var4.bind(var5)(var2, var1, var3);
            var _closure3_slot0 = var1;
            var0 = function() { // Environment: var0
                _fun89079: for (var _fun89079_ip = 0;;) switch (_fun89079_ip) {
                    case 0:
                        var1 = _closure3_slot0;
                        var0 = undefined;
                        var1 = var1.bind(var0)();
                        var2 = _closure2_slot6;
                        var3 = var2.cancel;
                        var2 = null;
                        if (!(var2 != var3)) {
                            _fun89079_ip = 46;
                            continue _fun89079
                        }
                    case 32:
                        var2 = _closure2_slot6;
                        var1 = var2.cancel;
                        var1 = var1.bind(var2)();
                    case 46:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var6.bind(var7)(var0, var5);
        var0 = {};
        var0.settings = var4;
        var0.settingsWithScores = var3;
        var0.isLoading = var2;
        var0.placeholderCount = var1;
        return var0;
    };
    var2.useSettingSearchResults = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 10211, 10212, 7028, 11576, 10215, 11584, 10214, 5691, 2]);