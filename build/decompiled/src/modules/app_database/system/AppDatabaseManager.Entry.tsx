// modules/app_database/system/AppDatabaseManager.Entry.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
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
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot1 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot1;
        var2 = function arg0, arg1() {
            var2 = this;
            var3 = _closure1_slot0;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            var1 = arg0;
            var2.parent = var1;
            var1 = null;
            var2.module = var1;
            var1 = arg1;
            var2.definition = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'actions';
        var0.key = var1;
        var1 = function() {
            var0 = this;
            var0 = var0.definition;
            var0 = var0.actions;
            return var0;
        };
        var0.get = var1;
        var1 = new Array(5);
        var1[0] = var0;
        var0 = {};
        var5 = 'load';
        var0.key = var5;
        var5 = function() {
            _fun93022: for (var _fun93022_ip = 0;;) switch (_fun93022_ip) {
                case 0:
                    var1 = this;
                    var2 = var1.module;
                    var0 = null;
                    if (!(var0 == var2)) {
                        _fun93022_ip = 37;
                        continue _fun93022
                    }
                case 15:
                    var2 = var1.definition;
                    var0 = var2.require;
                    var0 = var0.bind(var2)();
                    var1.module = var0;
                case 37:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'reset';
        var0.key = var5;
        var5 = function() {
            _fun93023: for (var _fun93023_ip = 0;;) switch (_fun93023_ip) {
                case 0:
                    var0 = this;
                    var1 = var0.module;
                    var0 = null;
                    if (!(var0 != var1)) {
                        _fun93023_ip = 27;
                        continue _fun93023
                    }
                case 15:
                    var0 = var1.resetInMemoryState;
                    var0 = var0.bind(var1)();
                case 27:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'execute';
        var0.key = var5;
        var5 = function arg0, arg1() {
            _fun93024: for (var _fun93024_ip = 0;;) switch (_fun93024_ip) {
                case 0:
                    var4 = arg0;
                    var1 = this;
                    var0 = var1.load;
                    var0 = var0.bind(var1)();
                    var2 = var1.module;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun93024_ip = 68;
                        continue _fun93024
                    }
                case 28:
                    var1 = var1.module;
                    var3 = var1.actions;
                    var1 = var4.type;
                    var2 = var3[var1];
                    if (!(var0 != var2)) {
                        _fun93024_ip = 68;
                        continue _fun93024
                    }
                case 53:
                    var1 = var2.call;
                    var0 = arg1;
                    var0 = var1.bind(var2)(var3, var4, var0);
                case 68:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'validateInDev';
        var0.key = var5;
        var4 = function() {
            var0 = undefined;
            return var0;
        };
        var0.value = var4;
        var1[4] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = 2;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_database/system/AppDatabaseManager.Entry.tsx';
    var3 = var4.bind(var5)(var3);
    var2.Entry = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 2]);