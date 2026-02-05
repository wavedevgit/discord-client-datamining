// modules/main_tabs_v2/native/sidebar/details/stores/ChannelDetailsStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var0 = function() {
        var0 = {};
        var2 = _closure1_slot2;
        var3 = var0;
        var1 = copyDataProperties(var3, var2);
        return var0;
    };
    var _closure1_slot4 = var0;
    var0 = function arg0, arg1() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var2 = _closure1_slot3;
        var1 = undefined;
        var0 = function(arg0) { // Environment: var0
            _fun71245: for (var _fun71245_ip = 0;;) switch (_fun71245_ip) {
                case 0:
                    var0 = arg0;
                    var3 = var0.states;
                    var2 = var3.get;
                    var1 = _closure2_slot0;
                    var2 = var2.bind(var3)(var1);
                    var1 = null;
                    if (!(var1 == var2)) {
                        _fun71245_ip = 45;
                        continue _fun71245
                    }
                case 32:
                    var3 = _closure1_slot4;
                    var1 = undefined;
                    var2 = var3.bind(var1)();
                case 45:
                    var1 = _closure2_slot1;
                    var0 = undefined;
                    var0 = var1.bind(var0)(var2);
                    return var0;
            }
        };
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var _closure1_slot5 = var0;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var3);
    var0 = {
        'isSearchActive': false,
        'searchActiveSource': 'initial'
    };
    var _closure1_slot2 = var0;
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var7 = var5.bind(var0)(var3);
    var4 = var7.create;
    var3 = function() { // Environment: var1
        var0 = {};
        var1 = global;
        var1 = var1.Map;
        var2 = var1.prototype;
        var2 = Object.create(var2, {
            constructor: {
                value: var1
            }
        });
        var3 = var2;
        var1 = new var3[var1](var2);
        var1 = var1 instanceof Object ? var1 : var2;
        var0.states = var1;
        return var0;
    };
    var3 = var4.bind(var7)(var3);
    var _closure1_slot3 = var3;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/sidebar/details/stores/ChannelDetailsStore.tsx';
    var4 = var5.bind(var6)(var4);
    var2.useChannelDetailsStore = var3;
    var3 = function() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 1;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.batchUpdates;
        var1 = function() { // Environment: var1
            var2 = _closure1_slot3;
            var1 = var2.setState;
            var0 = {};
            var3 = global;
            var3 = var3.Map;
            var4 = var3.prototype;
            var4 = Object.create(var4, {
                constructor: {
                    value: var3
                }
            });
            var6 = var4;
            var3 = new var6[var3](var5);
            var3 = var3 instanceof Object ? var3 : var4;
            var0.states = var3;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.deleteChannelStates = var3;
    var3 = function arg0() {
        var3 = _closure1_slot5;
        var2 = undefined;
        var1 = arg0;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var0 = var0.isSearchActive;
            return var0;
        };
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var2.useIsChannelDetailsSearchActive = var3;
    var3 = function arg0() {
        var3 = _closure1_slot5;
        var2 = undefined;
        var1 = arg0;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var0 = var0.searchActiveSource;
            return var0;
        };
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var2.useChannelDetailsSearchActiveSource = var3;
    var3 = function arg0, arg1, arg2() {
        var3 = {};
        var0 = arg1;
        var3.isSearchActive = var0;
        var0 = arg2;
        var3.searchActiveSource = var0;
        var2 = function arg0, arg1() {
            _fun71254: for (var _fun71254_ip = 0;;) switch (_fun71254_ip) {
                case 0:
                    var5 = arg0;
                    var3 = _closure1_slot3;
                    var2 = var3.getState;
                    var2 = var2.bind(var3)();
                    var6 = var2.states;
                    var2 = var6.get;
                    var2 = var2.bind(var6)(var5);
                    var4 = {};
                    var3 = null;
                    if (!(var3 == var2)) {
                        _fun71254_ip = 56;
                        continue _fun71254
                    }
                case 46:
                    var7 = _closure1_slot4;
                    var3 = undefined;
                    var2 = var7.bind(var3)();
                case 56:
                    var9 = var4;
                    var8 = var2;
                    var2 = copyDataProperties(var9, var8);
                    var8 = arg1;
                    var9 = var4;
                    var2 = copyDataProperties(var9, var8);
                    var2 = global;
                    var2 = var2.Map;
                    var3 = var2.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var2
                        }
                    });
                    var10 = var3;
                    var9 = var6;
                    var2 = new var10[var2](var9, var8);
                    var3 = var2 instanceof Object ? var2 : var3;
                    var _closure3_slot0 = var3;
                    var2 = var3.set;
                    var2 = var2.bind(var3)(var5, var4);
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var0 = 1;
                    var2 = var2[var0];
                    var0 = undefined;
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.batchUpdates;
                    var1 = function() { // Environment: var1
                        var2 = _closure1_slot3;
                        var1 = var2.setState;
                        var0 = {};
                        var3 = _closure3_slot0;
                        var0.states = var3;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var1 = var2.bind(var3)(var1);
                    return var0;
            }
        };
        var0 = undefined;
        var1 = arg0;
        var1 = var2.bind(var0)(var1, var3);
        return var0;
    };
    var2.setIsChannelDetailsSearchActive = var3;
    var3 = function arg0() {
        _fun71256: for (var _fun71256_ip = 0;;) switch (_fun71256_ip) {
            case 0:
                var2 = _closure1_slot3;
                var0 = var2.getState;
                var0 = var0.bind(var2)();
                var3 = var0.states;
                var2 = var3.get;
                var0 = arg0;
                var0 = var2.bind(var3)(var0);
                var2 = null;
                if (!(var2 == var0)) {
                    _fun71256_ip = 52;
                    continue _fun71256
                }
            case 42:
                var2 = _closure1_slot4;
                var1 = undefined;
                var0 = var2.bind(var1)();
            case 52:
                var0 = var0.isSearchActive;
                return var0;
        }
    };
    var2.getIsChannelDetailsSearchActive = var3;
    var1 = function arg0() {
        var3 = _closure1_slot3;
        var2 = var3.getState;
        var2 = var2.bind(var3)();
        var4 = var2.states;
        var3 = var4.delete;
        var2 = arg0;
        var2 = var3.bind(var4)(var2);
        var2 = global;
        var2 = var2.Map;
        var3 = var2.prototype;
        var3 = Object.create(var3, {
            constructor: {
                value: var2
            }
        });
        var6 = var3;
        var5 = var4;
        var2 = new var6[var2](var5, var4);
        var2 = var2 instanceof Object ? var2 : var3;
        var _closure2_slot0 = var2;
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 1;
        var2 = var2[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.batchUpdates;
        var1 = function() { // Environment: var1
            var2 = _closure1_slot3;
            var1 = var2.setState;
            var0 = {};
            var3 = _closure2_slot0;
            var0.states = var3;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.deleteChannelDetailsSearchState = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [629, 802, 2]);