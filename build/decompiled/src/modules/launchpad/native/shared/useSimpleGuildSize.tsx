// modules/launchpad/native/shared/useSimpleGuildSize.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var4 = dependencyMap;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var3);
    var0 = 0;
    var5 = var4[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var5);
    var _closure1_slot0 = var3;
    var3 = 1;
    var4 = var4[var3];
    var3 = require;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/launchpad/native/shared/useSimpleGuildSize.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun110148: for (var _fun110148_ip = 0;;) switch (_fun110148_ip) {
            case 0:
                var1 = arg0;
                var6 = var1.size;
                var _closure2_slot0 = var6;
                var7 = var1.style;
                var _closure2_slot1 = var7;
                var1 = undefined;
                var _closure2_slot2 = var1;
                var _closure2_slot3 = var1;
                var1 = null;
                var1 = var1 != var6;
                var3 = 48;
                if (!var1) {
                    _fun110148_ip = 48;
                    continue _fun110148
                }
            case 45:
                var3 = var6;
            case 48:
                _closure2_slot2 = var3;
                var5 = _closure1_slot0;
                var4 = var5.useMemo;
                var2 = new Array(1);
                var2[0] = var3;
                var1 = function() { // Environment: var0
                    var0 = {};
                    var2 = _closure2_slot2;
                    var0.width = var2;
                    var1 = _closure2_slot2;
                    var0.height = var1;
                    return var0;
                };
                var2 = var4.bind(var5)(var1, var2);
                _closure2_slot3 = var2;
                var4 = var5.useMemo;
                var1 = new Array(3);
                var1[0] = var7;
                var1[1] = var6;
                var1[2] = var2;
                var0 = function() { // Environment: var0
                    _fun110150: for (var _fun110150_ip = 0;;) switch (_fun110150_ip) {
                        case 0:
                            var2 = {};
                            var0 = 'relative';
                            var2.position = var0;
                            var0 = _closure2_slot0;
                            var4 = null;
                            var5 = var4 == var0;
                            var3 = 0;
                            if (!var5) {
                                _fun110150_ip = 31;
                                continue _fun110150
                            }
                        case 28:
                            var3 = 4;
                        case 31:
                            var2.marginLeft = var3;
                            var3 = _closure2_slot0;
                            var3 = var4 == var3;
                            var0 = 0;
                            if (!var3) {
                                _fun110150_ip = 52;
                                continue _fun110150
                            }
                        case 49:
                            var0 = 4;
                        case 52:
                            var2.marginRight = var0;
                            var0 = new Array(3);
                            var0[0] = var2;
                            var2 = _closure2_slot3;
                            var0[1] = var2;
                            var1 = _closure2_slot1;
                            var0[2] = var1;
                            return var0;
                    }
                };
                var1 = var4.bind(var5)(var0, var1);
                var0 = {};
                var0.containerSize = var3;
                var0.containerSizeStyle = var2;
                var0.containerStyles = var1;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 2]);