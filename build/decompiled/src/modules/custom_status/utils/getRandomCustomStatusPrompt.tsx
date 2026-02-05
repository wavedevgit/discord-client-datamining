// modules/custom_status/utils/getRandomCustomStatusPrompt.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var6 = var3.CustomStatusPrompts;
    var _closure1_slot2 = var6;
    var3 = var3.CustomStatusPromptValues;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/custom_status/utils/getRandomCustomStatusPrompt.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun57358: for (var _fun57358_ip = 0;;) switch (_fun57358_ip) {
            case 0:
                var0 = arg0;
                var _closure2_slot0 = var0;
                var1 = null;
                if (!(var1 != var0)) {
                    _fun57358_ip = 26;
                    continue _fun57358
                }
            case 15:
                var1 = var0.size;
                var0 = 0;
                if (!(!(var1 > var0))) {
                    _fun57358_ip = 35;
                    continue _fun57358
                }
            case 26:
                var1 = _closure1_slot2;
                _fun57358_ip = 57;
                continue _fun57358;
            case 35:
                var4 = _closure1_slot2;
                var3 = var4.filter;
                var0 = function(arg0) { // Environment: var2
                    var2 = _closure2_slot0;
                    var1 = var2.has;
                    var0 = arg0;
                    var0 = var0.value;
                    var0 = var1.bind(var2)(var0);
                    var0 = !var0;
                    return var0;
                };
                var1 = var3.bind(var4)(var0);
            case 57:
                var3 = var1.length;
                var0 = 0;
                if (!(var0 !== var3)) {
                    _fun57358_ip = 118;
                    continue _fun57358
                }
            case 68:
                var0 = global;
                var4 = var0.Math;
                var3 = var4.floor;
                var5 = var0.Math;
                var0 = var5.random;
                var5 = var0.bind(var5)();
                var0 = var1.length;
                var0 = var5 * var0;
                var0 = var3.bind(var4)(var0);
                var0 = var1[var0];
                _fun57358_ip = 149;
                continue _fun57358;
            case 118:
                var1 = {};
                var3 = _closure1_slot3;
                var3 = var3.ADD_STATUS;
                var1.value = var3;
                var2 = function() {
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var0 = 1;
                    var1 = var5[var0];
                    var3 = undefined;
                    var1 = var4.bind(var3)(var1);
                    var2 = var1.intl;
                    var1 = var2.string;
                    var0 = var5[var0];
                    var0 = var4.bind(var3)(var0);
                    var0 = var0.t;
                    var0 = var0.Vq4UmS;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1.label = var2;
                var0 = var1;
            case 149:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [7004, 1234, 2]);