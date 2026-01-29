// lib/AutomaticLifecycleManager.tsx
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
    var1 = function() { // Environment: var1
        var3 = _closure1_slot3;
        var2 = function() { // Original name: AutomaticLifecycleManager, environment: var4
            var2 = this;
            var3 = _closure1_slot2;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            var1 = 0;
            var2.initializedCount = var1;
            var1 = {};
            var2.actions = var1;
            var1 = global;
            var1 = var1.Map;
            var3 = var1.prototype;
            var3 = Object.create(var3, {
                constructor: {
                    value: var1
                }
            });
            var6 = var3;
            var1 = new var6[var1](var5);
            var1 = var1 instanceof Object ? var1 : var3;
            var2.stores = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'initialize';
        var0.key = var1;
        var1 = function() { // Original name: value, environment: var4
            _fun39318: for (var _fun39318_ip = 0;;) switch (_fun39318_ip) {
                case 0:
                    var1 = this;
                    var2 = var1.initializedCount;
                    var2 = var2 + 1;
                    var1.initializedCount = var2;
                    var3 = var1.initializedCount;
                    var2 = 1;
                    if (!(!(var3 > var2))) {
                        _fun39318_ip = 104;
                        continue _fun39318
                    }
                case 33:
                    var2 = var1._initialize;
                    var2 = var2.bind(var1)();
                    var2 = global;
                    var4 = var2.Object;
                    var3 = var4.entries;
                    var2 = var1.actions;
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.forEach;
                    var2 = function(arg0) { // Environment: var0
                        _fun39319: for (var _fun39319_ip = 0;;) switch (_fun39319_ip) {
                            case 0:
                                var3 = arg0;
                                var1 = var3[Symbol.iterator];
                                var3 = var1().next;
                                var5 = var3().value;
                                var2 = var1;
                                var0 = undefined;
                                var2 = var2 === var0;
                                var4 = undefined;
                                if (var2) {
                                    _fun39319_ip = 27;
                                    continue _fun39319
                                }
                            case 24:
                                var4 = var5;
                            case 27:
                                var5 = undefined;
                                if (var2) {
                                    _fun39319_ip = 57;
                                    continue _fun39319
                                }
                            case 32:
                                var6 = var3().value;
                                var3 = var1;
                                var3 = var3 === var0;
                                var5 = undefined;
                                var2 = var3;
                                if (var3) {
                                    _fun39319_ip = 57;
                                    continue _fun39319
                                }
                            case 51:
                                var5 = var6;
                                var2 = var3;
                            case 57:
                                if (var2) {
                                    _fun39319_ip = 63;
                                    continue _fun39319
                                }
                            case 60:
                                var1.return();
                            case 63:
                                var2 = _closure1_slot0;
                                var3 = _closure1_slot1;
                                var1 = 2;
                                var1 = var3[var1];
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.subscribe;
                                var7 = 'function';
                                var6 = typeof var5;
                                var1 = var5;
                                if (!(var7 !== var6)) {
                                    _fun39319_ip = 112;
                                    continue _fun39319
                                }
                            case 106:
                                var1 = var5.callback;
                            case 112:
                                var1 = var2.bind(var3)(var4, var1);
                                return var0;
                        }
                    };
                    var2 = var3.bind(var4)(var2);
                    var2 = var1.stores;
                    var1 = var2.forEach;
                    var0 = function(arg0, arg1) { // Environment: var0
                        var1 = arg0;
                        var2 = arg1;
                        var0 = var2.addChangeListener;
                        var0 = var0.bind(var2)(var1);
                        var0 = undefined;
                        var1 = var1.bind(var0)();
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                case 104:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(4);
        var1[0] = var0;
        var0 = {};
        var5 = 'terminate';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var4
            _fun39321: for (var _fun39321_ip = 0;;) switch (_fun39321_ip) {
                case 0:
                    var0 = this;
                    var1 = var0.initializedCount;
                    var2 = 0;
                    if (!(!(var1 <= var2))) {
                        _fun39321_ip = 106;
                        continue _fun39321
                    }
                case 15:
                    var1 = arg0;
                    if (var1) {
                        _fun39321_ip = 38;
                        continue _fun39321
                    }
                case 21:
                    var1 = var0.initializedCount;
                    var1 = var1 - 1;
                    var0.initializedCount = var1;
                    _fun39321_ip = 44;
                    continue _fun39321;
                case 38:
                    var0.initializedCount = var2;
                case 44:
                    var1 = var0.initializedCount;
                    if (!(var2 === var1)) {
                        _fun39321_ip = 106;
                        continue _fun39321
                    }
                case 54:
                    var1 = var0._terminate;
                    var1 = var1.bind(var0)();
                    var1 = global;
                    var2 = var1.Object;
                    var1 = var2.entries;
                    var0 = var0.actions;
                    var2 = var1.bind(var2)(var0);
                    var1 = var2.forEach;
                    var0 = function(arg0) { // Environment: var0
                        _fun39322: for (var _fun39322_ip = 0;;) switch (_fun39322_ip) {
                            case 0:
                                var3 = arg0;
                                var1 = var3[Symbol.iterator];
                                var3 = var1().next;
                                var5 = var3().value;
                                var2 = var1;
                                var0 = undefined;
                                var2 = var2 === var0;
                                var4 = undefined;
                                if (var2) {
                                    _fun39322_ip = 27;
                                    continue _fun39322
                                }
                            case 24:
                                var4 = var5;
                            case 27:
                                var5 = undefined;
                                if (var2) {
                                    _fun39322_ip = 57;
                                    continue _fun39322
                                }
                            case 32:
                                var6 = var3().value;
                                var3 = var1;
                                var3 = var3 === var0;
                                var5 = undefined;
                                var2 = var3;
                                if (var3) {
                                    _fun39322_ip = 57;
                                    continue _fun39322
                                }
                            case 51:
                                var5 = var6;
                                var2 = var3;
                            case 57:
                                if (var2) {
                                    _fun39322_ip = 63;
                                    continue _fun39322
                                }
                            case 60:
                                var1.return();
                            case 63:
                                var2 = _closure1_slot0;
                                var3 = _closure1_slot1;
                                var1 = 2;
                                var1 = var3[var1];
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.unsubscribe;
                                var7 = 'function';
                                var6 = typeof var5;
                                var1 = var5;
                                if (!(var7 !== var6)) {
                                    _fun39322_ip = 112;
                                    continue _fun39322
                                }
                            case 106:
                                var1 = var5.callback;
                            case 112:
                                var1 = var2.bind(var3)(var4, var1);
                                return var0;
                        }
                    };
                    var0 = var1.bind(var2)(var0);
                case 106:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = '_initialize';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = '_terminate';
        var0.key = var5;
        var4 = function() { // Original name: value, environment: var4
            var0 = undefined;
            return var0;
        };
        var0.value = var4;
        var1[3] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = 3;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'lib/AutomaticLifecycleManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 806, 2]);