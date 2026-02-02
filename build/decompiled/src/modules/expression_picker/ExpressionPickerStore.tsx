// modules/expression_picker/ExpressionPickerStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var2 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var8;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var4);
    var0 = 0;
    var4 = var8[var0];
    var0 = undefined;
    var4 = var7.bind(var0)(var4);
    var4 = var4.ExpressionPickerViewType;
    var _closure1_slot2 = var4;
    var5 = var1.Object;
    var4 = var5.freeze;
    var1 = {
        'activeView': null,
        'lastActiveView': null,
        'activeViewType': null,
        'activeChannelId': null,
        'searchQuery': '',
        'isSearchSuggestion': false,
        'pickerId': null,
        'isNitroLockedSectionVisible': false,
        'areOnlyNitroLockedSectionsVisible': false
    };
    var6 = 1;
    var9 = var8[var6];
    var6 = metroImportDefault;
    var9 = var6.bind(var0)(var9);
    var6 = 'uid_';
    var6 = var9.bind(var0)(var6);
    var1.pickerId = var6;
    var1 = var4.bind(var5)(var1);
    var _closure1_slot3 = var1;
    var1 = 2;
    var1 = var8[var1];
    var4 = var7.bind(var0)(var1);
    var1 = var4.createWithEqualityFn;
    var4 = var1.bind(var4)();
    var1 = 3;
    var1 = var8[var1];
    var9 = var7.bind(var0)(var1);
    var6 = var9.persist;
    var5 = {};
    var1 = 'expression-picker-last-active-view';
    var5.name = var1;
    var1 = function arg0() {
        var0 = {};
        var1 = arg0;
        var1 = var1.lastActiveView;
        var0.lastActiveView = var1;
        return var0;
    };
    var5.partialize = var1;
    var1 = function() { // Environment: var3
        var0 = _closure1_slot3;
        return var0;
    };
    var1 = var6.bind(var9)(var1, var5);
    var1 = var4.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var5 = function arg0, arg1, arg2() {
        var0 = arg0;
        var _closure2_slot0 = var0;
        var0 = arg1;
        var _closure2_slot1 = var0;
        var0 = arg2;
        var _closure2_slot2 = var0;
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 4;
        var2 = var2[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.batchUpdates;
        var1 = function() { // Environment: var1
            var2 = _closure1_slot4;
            var1 = var2.setState;
            var0 = {};
            var4 = _closure2_slot0;
            var0.activeView = var4;
            var4 = _closure2_slot1;
            var0.activeViewType = var4;
            var3 = _closure2_slot2;
            var0.activeChannelId = var3;
            var3 = var2.getState;
            var3 = var3.bind(var2)();
            var3 = var3.activeView;
            var0.lastActiveView = var3;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var _closure1_slot5 = var5;
    var4 = function arg0, arg1() {
        _fun68145: for (var _fun68145_ip = 0;;) switch (_fun68145_ip) {
            case 0:
                var6 = arg0;
                var7 = arg1;
                var3 = _closure1_slot4;
                var0 = var3.getState;
                var3 = var0.bind(var3)();
                var _closure2_slot0 = var3;
                var0 = undefined;
                var4 = var0 !== var6;
                if (!var4) {
                    _fun68145_ip = 48;
                    continue _fun68145
                }
            case 38:
                var5 = var3.activeViewType;
                var4 = var6 !== var5;
            case 48:
                if (var4) {
                    _fun68145_ip = 71;
                    continue _fun68145
                }
            case 51:
                var5 = var0 !== var7;
                if (!var5) {
                    _fun68145_ip = 68;
                    continue _fun68145
                }
            case 58:
                var6 = var3.activeChannelId;
                var5 = var7 !== var6;
            case 68:
                var4 = var5;
            case 71:
                if (var4) {
                    _fun68145_ip = 124;
                    continue _fun68145
                }
            case 74:
                var4 = var3.activeView;
                var3 = null;
                if (!(var3 !== var4)) {
                    _fun68145_ip = 124;
                    continue _fun68145
                }
            case 86:
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 4;
                var2 = var4[var2];
                var3 = var3.bind(var0)(var2);
                var2 = var3.batchUpdates;
                var1 = function() { // Environment: var1
                    var2 = _closure1_slot4;
                    var1 = var2.setState;
                    var0 = {
                        'activeView': null,
                        'activeViewType': null,
                        'activeChannelId': null
                    };
                    var3 = _closure2_slot0;
                    var3 = var3.activeView;
                    var0.lastActiveView = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1 = var2.bind(var3)(var1);
            case 124:
                return var0;
        }
    };
    var _closure1_slot6 = var4;
    var6 = 5;
    var6 = var8[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/expression_picker/ExpressionPickerStore.tsx';
    var6 = var7.bind(var8)(var6);
    var2.openExpressionPicker = var5;
    var2.closeExpressionPicker = var4;
    var4 = function(arg0, arg1) { // Environment: var3
        _fun68147: for (var _fun68147_ip = 0;;) switch (_fun68147_ip) {
            case 0:
                var2 = _closure1_slot4;
                var1 = var2.getState;
                var2 = var1.bind(var2)();
                var3 = var2.activeView;
                var1 = null;
                if (!(var1 != var3)) {
                    _fun68147_ip = 41;
                    continue _fun68147
                }
            case 29:
                var4 = _closure1_slot6;
                var3 = undefined;
                var3 = var4.bind(var3)();
                _fun68147_ip = 80;
                continue _fun68147;
            case 41:
                var4 = _closure1_slot5;
                var3 = var2.lastActiveView;
                if (!(var1 == var3)) {
                    _fun68147_ip = 65;
                    continue _fun68147
                }
            case 55:
                var0 = _closure1_slot2;
                var3 = var0.EMOJI;
            case 65:
                var2 = undefined;
                var1 = arg0;
                var0 = arg1;
                var0 = var4.bind(var2)(var3, var1, var0);
            case 80:
                var0 = undefined;
                return var0;
        }
    };
    var2.toggleMultiExpressionPicker = var4;
    var4 = function(arg0, arg1, arg2) { // Environment: var3
        _fun68148: for (var _fun68148_ip = 0;;) switch (_fun68148_ip) {
            case 0:
                var5 = arg0;
                var2 = _closure1_slot4;
                var1 = var2.getState;
                var1 = var1.bind(var2)();
                var1 = var1.activeView;
                if (!(var1 !== var5)) {
                    _fun68148_ip = 51;
                    continue _fun68148
                }
            case 30:
                var4 = _closure1_slot5;
                var3 = undefined;
                var2 = arg1;
                var1 = arg2;
                var1 = var4.bind(var3)(var5, var2, var1);
                _fun68148_ip = 61;
                continue _fun68148;
            case 51:
                var1 = _closure1_slot6;
                var0 = undefined;
                var0 = var1.bind(var0)();
            case 61:
                var0 = undefined;
                return var0;
        }
    };
    var2.toggleExpressionPicker = var4;
    var4 = function(arg0) { // Environment: var3
        var0 = arg0;
        var _closure2_slot0 = var0;
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 4;
        var2 = var2[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.batchUpdates;
        var1 = function() { // Environment: var1
            var2 = _closure1_slot4;
            var1 = var2.setState;
            var0 = {};
            var3 = _closure2_slot0;
            var0.activeView = var3;
            var3 = var2.getState;
            var3 = var3.bind(var2)();
            var3 = var3.activeView;
            var0.lastActiveView = var3;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.setExpressionPickerView = var4;
    var3 = function(arg0) { // Environment: var3
        _fun68151: for (var _fun68151_ip = 0;;) switch (_fun68151_ip) {
            case 0:
                var2 = arguments[1];
                var0 = arg0;
                var _closure2_slot0 = var0;
                var0 = undefined;
                if (!(var2 === var0)) {
                    _fun68151_ip = 20;
                    continue _fun68151
                }
            case 18:
                var2 = false;
            case 20:
                var _closure2_slot1 = var2;
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 4;
                var2 = var4[var2];
                var3 = var3.bind(var0)(var2);
                var2 = var3.batchUpdates;
                var1 = function() { // Environment: var1
                    var2 = _closure1_slot4;
                    var1 = var2.setState;
                    var0 = {};
                    var4 = _closure2_slot0;
                    var0.searchQuery = var4;
                    var3 = _closure2_slot1;
                    var0.isSearchSuggestion = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var2.setSearchQuery = var3;
    var2.useExpressionPickerStore = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1565, 4528, 797, 3878, 802, 2]);