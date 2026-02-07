// modules/action_sheet/native/ActionSheetActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var3 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var3;
    var _closure1_slot2 = var6;
    var0 = ['impressionName', 'impressionProperties', 'backdropKind', 'disableHapticOnOpen'];
    var _closure1_slot3 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var6[var0];
    var0 = undefined;
    var1 = var3.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 1;
    var3 = var6[var1];
    var1 = metroImportAll;
    var1 = var1.bind(var0)(var3);
    var1 = 2;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.jsx;
    var _closure1_slot5 = var1;
    var1 = function arg0() {
        var0 = arg0;
        var2 = var0.content;
        var _closure2_slot0 = var2;
        var2 = var0.key;
        var _closure2_slot1 = var2;
        var2 = var0.impressionName;
        var _closure2_slot2 = var2;
        var2 = var0.impressionProperties;
        var _closure2_slot3 = var2;
        var2 = var0.backdropKind;
        var _closure2_slot4 = var2;
        var2 = var0.stackingBehavior;
        var _closure2_slot5 = var2;
        var0 = var0.disableHapticOnOpen;
        var _closure2_slot6 = var0;
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 3;
        var2 = var2[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.wait;
        var1 = function() { // Environment: var1
            _fun28287: for (var _fun28287_ip = 0;;) switch (_fun28287_ip) {
                case 0:
                    var0 = _closure2_slot6;
                    if (var0) {
                        _fun28287_ip = 68;
                        continue _fun28287
                    }
                case 10:
                    var2 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 4;
                    var1 = var6[var1];
                    var5 = undefined;
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.triggerHapticFeedback;
                    var3 = _closure1_slot1;
                    var0 = 5;
                    var0 = var6[var0];
                    var0 = var3.bind(var5)(var0);
                    var0 = var0.IMPACT_LIGHT;
                    var0 = var1.bind(var2)(var0);
                case 68:
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 3;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.dispatch;
                    var1 = {};
                    var5 = 'SHOW_ACTION_SHEET';
                    var1.type = var5;
                    var5 = _closure2_slot0;
                    var1.content = var5;
                    var5 = _closure2_slot1;
                    var1.key = var5;
                    var5 = _closure2_slot2;
                    var1.impressionName = var5;
                    var5 = _closure2_slot3;
                    var1.impressionProperties = var5;
                    var5 = _closure2_slot4;
                    var1.backdropKind = var5;
                    var4 = _closure2_slot5;
                    var1.stackingBehavior = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var _closure1_slot6 = var1;
    var3 = {};
    var7 = function arg0, arg1, arg2, arg3() {
        _fun28288: for (var _fun28288_ip = 0;;) switch (_fun28288_ip) {
            case 0:
                var4 = arg0;
                var1 = arg1;
                var _closure2_slot0 = var1;
                var1 = arg2;
                var _closure2_slot1 = var1;
                var1 = arg3;
                var _closure2_slot2 = var1;
                var1 = global;
                var1 = var1.Promise;
                var1 = var4 instanceof var1;
                if (var1) {
                    _fun28288_ip = 49;
                    continue _fun28288
                }
            case 41:
                var1 = undefined;
                var2 = var4.bind(var1)();
                _fun28288_ip = 64;
                continue _fun28288;
            case 49:
                var3 = var4.then;
                var1 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.default;
                    return var0;
                };
                var2 = var3.bind(var4)(var1);
            case 64:
                var1 = var2.then;
                var0 = function(arg0) { // Environment: var0
                    _fun28290: for (var _fun28290_ip = 0;;) switch (_fun28290_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = null;
                            if (!(var0 == var1)) {
                                _fun28290_ip = 17;
                                continue _fun28290
                            }
                        case 13:
                            var9 = {};
                            _fun28290_ip = 21;
                            continue _fun28290;
                        case 17:
                            var9 = _closure2_slot1;
                        case 21:
                            var7 = var9.impressionName;
                            var6 = var9.impressionProperties;
                            var5 = var9.backdropKind;
                            var3 = var9.disableHapticOnOpen;
                            var8 = _closure1_slot4;
                            var2 = _closure1_slot3;
                            var0 = undefined;
                            var10 = var8.bind(var0)(var9, var2);
                            var9 = _closure1_slot5;
                            var8 = {};
                            var11 = var8;
                            var2 = copyDataProperties(var11, var10);
                            var2 = arg0;
                            var8 = var9.bind(var0)(var2, var8);
                            var2 = _closure1_slot6;
                            var1 = {};
                            var1.content = var8;
                            var8 = _closure2_slot0;
                            var1.key = var8;
                            var1.impressionName = var7;
                            var1.impressionProperties = var6;
                            var1.backdropKind = var5;
                            var4 = _closure2_slot2;
                            var1.stackingBehavior = var4;
                            var1.disableHapticOnOpen = var3;
                            var1 = var2.bind(var0)(var1);
                            return var0;
                    }
                };
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
        }
    };
    var3.openLazy = var7;
    var7 = function arg0() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'HIDE_ACTION_SHEET';
        var1.type = var4;
        var4 = arg0;
        var1.key = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var3.hideActionSheet = var7;
    var4 = function() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'HIDE_ALL_ACTION_SHEETS';
        var1.type = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var3.hideAllActionSheets = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/action_sheet/native/ActionSheetActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var3 = 'start';
    var2.ACTION_SHEET_HEIGHT_HALF = var3;
    var3 = 'expanded';
    var2.ACTION_SHEET_HEIGHT_EXPANDED = var3;
    var2.showActionSheet = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [29, 31, 33, 806, 3280, 3281, 2]);