// modules/user_settings/native/core/useAutoSettingsSearchSessionAnalytics.tsx
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
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/core/useAutoSettingsSearchSessionAnalytics.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var4 = _closure1_slot0;
        var7 = _closure1_slot2;
        var0 = 3;
        var2 = var7[var0];
        var0 = undefined;
        var6 = var4.bind(var0)(var2);
        var5 = var6.useStateFromStores;
        var2 = _closure1_slot4;
        var4 = new Array(1);
        var4[0] = var2;
        var2 = function() { // Environment: var1
            var2 = _closure1_slot4;
            var1 = var2.getState;
            var1 = var1.bind(var2)();
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var0 = 4;
            var2 = var2[var0];
            var0 = undefined;
            var0 = var3.bind(var0)(var2);
            var0 = var0.AppStates;
            var0 = var0.ACTIVE;
            var0 = var1 === var0;
            return var0;
        };
        var5 = var5.bind(var6)(var4, var2);
        var _closure2_slot0 = var5;
        var6 = _closure1_slot1;
        var2 = 5;
        var2 = var7[var2];
        var2 = var6.bind(var0)(var2);
        var2 = var2.bind(var0)(var5);
        var _closure2_slot1 = var2;
        var4 = 6;
        var4 = var7[var4];
        var6 = var6.bind(var0)(var4);
        var4 = function() { // Environment: var1
            var0 = function() { // Environment: var0
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 7;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                var2 = var1.SettingSearchSessionAnalyticsManager;
                var1 = var2.terminate;
                var1 = var1.bind(var2)();
                return var0;
            };
            return var0;
        };
        var4 = var6.bind(var0)(var4);
        var4 = _closure1_slot3;
        var6 = var4.useEffect;
        var3 = new Array(2);
        var3[0] = var5;
        var3[1] = var2;
        var2 = function() { // Environment: var1
            _fun104444: for (var _fun104444_ip = 0;;) switch (_fun104444_ip) {
                case 0:
                    var4 = _closure1_slot5;
                    var2 = var4.getField;
                    var1 = 'isFocused';
                    var2 = var2.bind(var4)(var1);
                    var3 = var4.getField;
                    var1 = 'query';
                    var1 = var3.bind(var4)(var1);
                    if (var2) {
                        _fun104444_ip = 51;
                        continue _fun104444
                    }
                case 40:
                    var3 = var1.length;
                    var1 = 0;
                    var2 = var3 > var1;
                case 51:
                    var1 = _closure2_slot0;
                    if (!var1) {
                        _fun104444_ip = 68;
                        continue _fun104444
                    }
                case 61:
                    var4 = _closure2_slot1;
                    var1 = !var4;
                case 68:
                    if (!var1) {
                        _fun104444_ip = 74;
                        continue _fun104444
                    }
                case 71:
                    var1 = var2;
                case 74:
                    if (!var1) {
                        _fun104444_ip = 115;
                        continue _fun104444
                    }
                case 77:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 7;
                    var4 = var4[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var4);
                    var4 = var1.SettingSearchSessionAnalyticsManager;
                    var1 = var4.initialize;
                    var1 = var1.bind(var4)();
                case 115:
                    var1 = _closure2_slot0;
                    var1 = !var1;
                    if (!var1) {
                        _fun104444_ip = 129;
                        continue _fun104444
                    }
                case 125:
                    var1 = _closure2_slot1;
                case 129:
                    if (!var1) {
                        _fun104444_ip = 135;
                        continue _fun104444
                    }
                case 132:
                    var1 = var2;
                case 135:
                    if (!var1) {
                        _fun104444_ip = 176;
                        continue _fun104444
                    }
                case 138:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 7;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    var1 = var0.SettingSearchSessionAnalyticsManager;
                    var0 = var1.terminate;
                    var0 = var0.bind(var1)();
                case 176:
                    var0 = undefined;
                    return var0;
            }
        };
        var2 = var6.bind(var4)(var2, var3);
        var6 = var4.useEffect;
        var3 = new Array(1);
        var3[0] = var5;
        var2 = function() { // Environment: var1
            var4 = _closure1_slot5;
            var3 = var4.subscribe;
            var2 = {};
            var1 = function arg0, arg1() {
                var1 = arg0;
                var0 = arg1;
                var0 = var1 === var0;
                return var0;
            };
            var2.equalityFn = var1;
            var1 = function(arg0) { // Environment: var0
                _fun104446: for (var _fun104446_ip = 0;;) switch (_fun104446_ip) {
                    case 0:
                        var1 = arg0;
                        var0 = var1.isFocused;
                        var1 = var1.query;
                        if (var0) {
                            _fun104446_ip = 29;
                            continue _fun104446
                        }
                    case 18:
                        var2 = var1.length;
                        var1 = 0;
                        var0 = var2 > var1;
                    case 29:
                        return var0;
                }
            };
            var0 = function(arg0) { // Environment: var0
                _fun104447: for (var _fun104447_ip = 0;;) switch (_fun104447_ip) {
                    case 0:
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 7;
                        var1 = var1[var0];
                        var0 = undefined;
                        var1 = var2.bind(var0)(var1);
                        var2 = var1.SettingSearchSessionAnalyticsManager;
                        var1 = arg0;
                        if (var1) {
                            _fun104447_ip = 49;
                            continue _fun104447
                        }
                    case 37:
                        var1 = var2.terminate;
                        var1 = var1.bind(var2)();
                        _fun104447_ip = 59;
                        continue _fun104447;
                    case 49:
                        var1 = var2.initialize;
                        var1 = var1.bind(var2)();
                    case 59:
                        return var0;
                }
            };
            var0 = var3.bind(var4)(var1, var0, var2);
            return var0;
        };
        var2 = var6.bind(var4)(var2, var3);
        var3 = var4.useEffect;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() { // Environment: var1
            var4 = _closure1_slot5;
            var3 = var4.subscribe;
            var2 = {};
            var1 = function arg0, arg1() {
                var1 = arg0;
                var0 = arg1;
                var0 = var1 === var0;
                return var0;
            };
            var2.equalityFn = var1;
            var1 = function(arg0) { // Environment: var0
                _fun104450: for (var _fun104450_ip = 0;;) switch (_fun104450_ip) {
                    case 0:
                        var1 = arg0;
                        var0 = var1.isFocused;
                        var1 = var1.query;
                        if (!var0) {
                            _fun104450_ip = 29;
                            continue _fun104450
                        }
                    case 18:
                        var2 = var1.length;
                        var1 = 0;
                        var0 = var2 > var1;
                    case 29:
                        return var0;
                }
            };
            var0 = function(arg0) { // Environment: var0
                _fun104451: for (var _fun104451_ip = 0;;) switch (_fun104451_ip) {
                    case 0:
                        var0 = arg0;
                        if (!var0) {
                            _fun104451_ip = 49;
                            continue _fun104451
                        }
                    case 6:
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 7;
                        var1 = var1[var0];
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        var1 = var0.SettingSearchSessionAnalyticsManager;
                        var0 = var1.maybeTrackSettingSearchQueryEntered;
                        var0 = var0.bind(var1)();
                    case 49:
                        var0 = undefined;
                        return var0;
                }
            };
            var0 = var3.bind(var4)(var1, var0, var2);
            return var0;
        };
        var1 = var3.bind(var4)(var1, var2);
        return var0;
    };
    var2.useAutoSettingsSearchSessionAnalytics = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 5284, 10190, 566, 670, 5306, 4103, 11559, 2]);