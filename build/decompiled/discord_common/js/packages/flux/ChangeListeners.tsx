// ../discord_common/js/packages/flux/ChangeListeners.tsx
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
        var2 = function() {
            var2 = this;
            var _closure3_slot0 = var2;
            var4 = _closure1_slot0;
            var3 = _closure2_slot0;
            var0 = undefined;
            var3 = var4.bind(var0)(var2, var3);
            var3 = global;
            var3 = var3.Set;
            var4 = var3.prototype;
            var4 = Object.create(var4, {
                constructor: {
                    value: var3
                }
            });
            var7 = var4;
            var3 = new var7[var3](var6);
            var3 = var3 instanceof Object ? var3 : var4;
            var2.listeners = var3;
            var3 = function(arg0) { // Environment: var1
                var0 = _closure3_slot0;
                var2 = var0.listeners;
                var1 = var2.add;
                var0 = arg0;
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
            };
            var2.add = var3;
            var3 = function(arg0) { // Environment: var1
                var0 = _closure3_slot0;
                var2 = var0.listeners;
                var1 = var2.delete;
                var0 = arg0;
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
            };
            var2.remove = var3;
            var1 = function(arg0) { // Environment: var1
                _fun6890: for (var _fun6890_ip = 0;;) switch (_fun6890_ip) {
                    case 0:
                        var2 = arg0;
                        var3 = arguments[1];
                        var _closure4_slot0 = var2;
                        var0 = undefined;
                        if (!(var3 === var0)) {
                            _fun6890_ip = 20;
                            continue _fun6890
                        }
                    case 18:
                        var3 = true;
                    case 20:
                        var _closure4_slot1 = var0;
                        if (!var3) {
                            _fun6890_ip = 37;
                            continue _fun6890
                        }
                    case 27:
                        var3 = var2.bind(var0)();
                        var2 = false;
                        if (!(var2 !== var3)) {
                            _fun6890_ip = 63;
                            continue _fun6890
                        }
                    case 37:
                        var3 = function() {
                            _fun6891: for (var _fun6891_ip = 0;;) switch (_fun6891_ip) {
                                case 0:
                                    var2 = _closure4_slot0;
                                    var0 = undefined;
                                    var3 = var2.bind(var0)();
                                    var2 = false;
                                    if (!(var2 === var3)) {
                                        _fun6891_ip = 41;
                                        continue _fun6891
                                    }
                                case 19:
                                    var3 = _closure3_slot0;
                                    var2 = var3.remove;
                                    var1 = _closure4_slot1;
                                    var1 = var2.bind(var3)(var1);
                                case 41:
                                    return var0;
                            }
                        };
                        _closure4_slot1 = var3;
                        var2 = _closure3_slot0;
                        var1 = var2.add;
                        var1 = var1.bind(var2)(var3);
                    case 63:
                        return var0;
                }
            };
            var2.addConditional = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'has';
        var0.key = var1;
        var1 = function arg0() {
            var0 = this;
            var2 = var0.listeners;
            var1 = var2.has;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var1;
        var1 = new Array(3);
        var1[0] = var0;
        var0 = {};
        var5 = 'hasAny';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var0 = var0.listeners;
            var1 = var0.size;
            var0 = 0;
            var0 = var1 > var0;
            return var0;
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'invokeAll';
        var0.key = var5;
        var4 = function() {
            var0 = this;
            var2 = var0.listeners;
            var1 = var2.forEach;
            var0 = function(arg0) { // Environment: var0
                var1 = arg0;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
            };
            var0 = var1.bind(var2)(var0);
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
    var3 = 2;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = '../discord_common/js/packages/flux/ChangeListeners.tsx';
    var3 = var4.bind(var5)(var3);
    var2.ChangeListeners = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 2]);