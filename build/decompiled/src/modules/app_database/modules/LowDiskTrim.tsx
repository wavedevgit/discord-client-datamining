// modules/app_database/modules/LowDiskTrim.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var4[var0];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot3;
        var2 = function() { // Original name: LowDiskTrim, environment: var4
            var4 = this;
            var _closure3_slot0 = var4;
            var5 = _closure1_slot2;
            var3 = _closure2_slot0;
            var0 = undefined;
            var3 = var5.bind(var0)(var4, var3);
            var3 = false;
            var4.isLowDisk = var3;
            var3 = {};
            var5 = function() { // Original name: POST_CONNECTION_OPEN, environment: var1
                var1 = _closure3_slot0;
                var0 = var1.handlePostConnectionOpen;
                var0 = var0.bind(var1)();
                return var0;
            };
            var3.POST_CONNECTION_OPEN = var5;
            var4.actions = var3;
            var3 = _closure1_slot4;
            var2 = var3.addChangeListener;
            var1 = function() { // Environment: var1
                var1 = _closure3_slot0;
                var0 = var1.handleFileSystemStoreChanged;
                var0 = var0.bind(var1)();
                return var0;
            };
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'handlePostConnectionOpen';
        var0.key = var1;
        var1 = function() { // Original name: value, environment: var4
            var1 = this;
            var0 = false;
            var1.isLowDisk = var0;
            var0 = var1.handleFileSystemStoreChanged;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var0.value = var1;
        var1 = new Array(3);
        var1[0] = var0;
        var0 = {};
        var5 = 'handleFileSystemStoreChanged';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            _fun93260: for (var _fun93260_ip = 0;;) switch (_fun93260_ip) {
                case 0:
                    var1 = this;
                    var0 = _closure1_slot4;
                    var0 = var0.isLowDisk;
                    var3 = var0;
                    if (!var3) {
                        _fun93260_ip = 32;
                        continue _fun93260
                    }
                case 22:
                    var4 = var1.isLowDisk;
                    var3 = var4 !== var0;
                case 32:
                    if (!var3) {
                        _fun93260_ip = 83;
                        continue _fun93260
                    }
                case 35:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 3;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.database;
                    var3 = var2.bind(var3)();
                    var2 = null;
                    if (!(var2 != var3)) {
                        _fun93260_ip = 83;
                        continue _fun93260
                    }
                case 73:
                    var2 = var3.incrementalVacuum;
                    var2 = var2.bind(var3)();
                case 83:
                    var1.isLowDisk = var0;
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'resetInMemoryState';
        var0.key = var5;
        var4 = function() { // Original name: value, environment: var4
            var0 = undefined;
            return var0;
        };
        var0.value = var4;
        var1[2] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = var1.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var1
        }
    });
    var11 = var3;
    var1 = new var11[var1](var10);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 4;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_database/modules/LowDiskTrim.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 4332, 1637, 2]);