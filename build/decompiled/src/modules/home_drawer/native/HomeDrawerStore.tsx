// modules/home_drawer/native/HomeDrawerStore.tsx
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
    var3 = var3.DM_WIDTH;
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createWithEqualityFn;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.shallow;
    var1 = function(arg0, arg1) { // Environment: var1
        var0 = arg0;
        var _closure2_slot0 = var0;
        var0 = arg1;
        var _closure2_slot1 = var0;
        var0 = {};
        var5 = _closure1_slot0;
        var6 = _closure1_slot1;
        var3 = 2;
        var2 = var6[var3];
        var4 = undefined;
        var8 = var5.bind(var4)(var2);
        var7 = var8.makeMutable;
        var2 = 0;
        var7 = var7.bind(var8)(var2);
        var0.panelX = var7;
        var3 = var6[var3];
        var5 = var5.bind(var4)(var3);
        var4 = var5.makeMutable;
        var3 = {
            'active': false,
            'initialX': 0,
            'initialY': 0,
            'panelX': 0,
            'requiresPop': true
        };
        var3 = var4.bind(var5)(var3);
        var0.gestureState = var3;
        var0.maxX = var2;
        var2 = function arg0() {
            _fun100674: for (var _fun100674_ip = 0;;) switch (_fun100674_ip) {
                case 0:
                    var1 = _closure2_slot1;
                    var0 = undefined;
                    var1 = var1.bind(var0)();
                    var4 = var1.panelX;
                    var3 = var1.gestureState;
                    var2 = var1.maxX;
                    var5 = 'open';
                    var1 = arg0;
                    if (!(var5 !== var1)) {
                        _fun100674_ip = 56;
                        continue _fun100674
                    }
                case 42:
                    var5 = var4.set;
                    var1 = 0;
                    var1 = var5.bind(var4)(var1);
                    _fun100674_ip = 66;
                    continue _fun100674;
                case 56:
                    var1 = var4.set;
                    var1 = var1.bind(var4)(var2);
                case 66:
                    var2 = var3.set;
                    var1 = {};
                    var4 = var3.get;
                    var6 = var4.bind(var3)();
                    var7 = var1;
                    var4 = copyDataProperties(var7, var6);
                    var5 = false;
                    var4 = 'active';
                    var1[var4] = var5;
                    var1 = var2.bind(var3)(var1);
                    return var0;
            }
        };
        var0.setPanelX = var2;
        var1 = function arg0, arg1() {
            var0 = arg1;
            var1 = arg0;
            var2 = var1.width;
            var1 = var0.left;
            var1 = var2 - var1;
            var0 = var0.right;
            var1 = var1 - var0;
            var0 = _closure1_slot2;
            var0 = var1 - var0;
            var3 = 8;
            var0 = var0 - var3;
            var2 = _closure2_slot0;
            var1 = {};
            var0 = var0 + var3;
            var1.maxX = var0;
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var0.updateMaxX = var1;
        return var0;
    };
    var1 = var6.bind(var7)(var1, var3);
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/home_drawer/native/HomeDrawerStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 797, 3711, 3067, 2]);