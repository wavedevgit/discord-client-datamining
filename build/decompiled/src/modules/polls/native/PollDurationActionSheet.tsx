// modules/polls/native/PollDurationActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        var0 = arg0;
        var5 = var0.selectedDuration;
        var1 = var0.onChange;
        var _closure2_slot0 = var1;
        var6 = _closure1_slot1;
        var12 = _closure1_slot2;
        var2 = 2;
        var2 = var12[var2];
        var3 = undefined;
        var2 = var6.bind(var3)(var2);
        var7 = var2.bind(var3)();
        var _closure2_slot1 = var7;
        var8 = _closure1_slot3;
        var6 = var8.useCallback;
        var2 = new Array(2);
        var2[0] = var7;
        var2[1] = var1;
        var1 = function(arg0) { // Environment: var4
            var6 = arg0;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var1.bind(var0)(var6);
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var4 = 3;
            var4 = var3[var4];
            var4 = var5.bind(var0)(var4);
            var5 = var4.AccessibilityAnnouncer;
            var4 = var5.announce;
            var2 = _closure2_slot1;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = _closure1_slot1;
            var1 = 4;
            var1 = var3[var1];
            var2 = var2.bind(var0)(var1);
            var1 = var2.hideActionSheet;
            var1 = var1.bind(var2)();
            return var0;
        };
        var6 = var6.bind(var8)(var1, var2);
        var2 = _closure1_slot4;
        var11 = _closure1_slot0;
        var0 = 5;
        var0 = var12[var0];
        var0 = var11.bind(var3)(var0);
        var1 = var0.TableRadioGroup;
        var0 = {};
        var8 = 6;
        var9 = var12[var8];
        var9 = var11.bind(var3)(var9);
        var10 = var9.intl;
        var9 = var10.string;
        var8 = var12[var8];
        var8 = var11.bind(var3)(var8);
        var8 = var8.t;
        var8 = var8["0ZStp9"];
        var8 = var9.bind(var10)(var8);
        var0.title = var8;
        var8 = false;
        var0.hasIcons = var8;
        var0.onChange = var6;
        var0.defaultValue = var5;
        var5 = global;
        var6 = var5.Object;
        var5 = var6.entries;
        var6 = var5.bind(var6)(var7);
        var5 = var6.map;
        var4 = function(arg0) { // Environment: var4
            _fun108445: for (var _fun108445_ip = 0;;) switch (_fun108445_ip) {
                case 0:
                    var2 = arg0;
                    var0 = var2[Symbol.iterator];
                    var2 = var0().next;
                    var5 = var2().value;
                    var1 = var0;
                    var4 = undefined;
                    var1 = var1 === var4;
                    var3 = undefined;
                    if (var1) {
                        _fun108445_ip = 27;
                        continue _fun108445
                    }
                case 24:
                    var3 = var5;
                case 27:
                    var5 = undefined;
                    if (var1) {
                        _fun108445_ip = 57;
                        continue _fun108445
                    }
                case 32:
                    var6 = var2().value;
                    var2 = var0;
                    var2 = var2 === var4;
                    var5 = undefined;
                    var1 = var2;
                    if (var2) {
                        _fun108445_ip = 57;
                        continue _fun108445
                    }
                case 51:
                    var5 = var6;
                    var1 = var2;
                case 57:
                    if (var1) {
                        _fun108445_ip = 63;
                        continue _fun108445
                    }
                case 60:
                    var0.return();
                case 63:
                    var2 = _closure1_slot4;
                    var1 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var0 = 7;
                    var0 = var6[var0];
                    var0 = var1.bind(var4)(var0);
                    var1 = var0.TableRadioRow;
                    var0 = {};
                    var6 = global;
                    var6 = var6.parseInt;
                    var6 = var6.bind(var4)(var3);
                    var0.value = var6;
                    var0.label = var5;
                    var0 = var2.bind(var4)(var1, var0, var3);
                    return var0;
            }
        };
        var4 = var5.bind(var6)(var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot5 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot4 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/polls/native/PollDurationActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var0 = arg0;
        var8 = var0.selectedDuration;
        var7 = var0.onChange;
        var3 = _closure1_slot4;
        var1 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 8;
        var0 = var2[var0];
        var2 = undefined;
        var0 = var1.bind(var2)(var0);
        var1 = var0.ActionSheet;
        var0 = {};
        var6 = _closure1_slot4;
        var5 = _closure1_slot5;
        var4 = {};
        var4.selectedDuration = var8;
        var4.onChange = var7;
        var4 = var6.bind(var2)(var5, var4);
        var0.children = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 14010, 3162, 3280, 5427, 1234, 5426, 5211, 2]);