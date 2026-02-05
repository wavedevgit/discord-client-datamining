// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var2 = global;
    var5 = var2.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var2 = true;
    var3.value = var2;
    var2 = '__esModule';
    var2 = var4.bind(var5)(var1, var2, var3);
    var0 = function arg0() {
        var0 = arg0;
        var _closure2_slot0 = var0;
        var0 = function arg0() {
            _fun98963: for (var _fun98963_ip = 0;;) switch (_fun98963_ip) {
                case 0:
                    var3 = _closure2_slot1;
                    var2 = var3.splice;
                    var1 = var3.indexOf;
                    var0 = arg0;
                    var1 = var1.bind(var3)(var0);
                    var0 = 1;
                    var1 = var2.bind(var3)(var1, var0);
                    var0 = 0;
                    var0 = var1[var0];
                    if (var0) {
                        _fun98963_ip = 66;
                        continue _fun98963
                    }
                case 45:
                    var1 = global;
                    var3 = var1.Promise;
                    var2 = var3.resolve;
                    var1 = undefined;
                    var0 = var2.bind(var3)(var1);
                case 66:
                    return var0;
            }
        };
        var _closure2_slot2 = var0;
        var2 = new Array(0);
        var _closure2_slot1 = var2;
        var0 = {};
        var0.$ = var2;
        var2 = function arg0() {
            _fun98964: for (var _fun98964_ip = 0;;) switch (_fun98964_ip) {
                case 0:
                    var0 = _closure2_slot0;
                    var3 = undefined;
                    var0 = var3 === var0;
                    if (var0) {
                        _fun98964_ip = 35;
                        continue _fun98964
                    }
                case 18:
                    var4 = _closure2_slot1;
                    var5 = var4.length;
                    var4 = _closure2_slot0;
                    var0 = var5 < var4;
                case 35:
                    if (var0) {
                        _fun98964_ip = 117;
                        continue _fun98964
                    }
                case 38:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var0 = 0;
                    var0 = var7[var0];
                    var5 = var6.bind(var3)(var0);
                    var4 = var5.rejectedSyncPromise;
                    var0 = 1;
                    var0 = var7[var0];
                    var0 = var6.bind(var3)(var0);
                    var7 = var0.SentryError;
                    var0 = var7.prototype;
                    var6 = Object.create(var0, {
                        constructor: {
                            value: var7
                        }
                    });
                    var9 = 'Not adding Promise because buffer limit was reached.';
                    var10 = var6;
                    var0 = new var10[var7](var9, var8);
                    var0 = var0 instanceof Object ? var0 : var6;
                    var0 = var4.bind(var5)(var0);
                    return var0;
                case 117:
                    var0 = arg0;
                    var0 = var0.bind(var3)();
                    var _closure3_slot0 = var0;
                    var4 = _closure2_slot1;
                    var3 = var4.indexOf;
                    var4 = var3.bind(var4)(var0);
                    var3 = -1;
                    if (!(var3 === var4)) {
                        _fun98964_ip = 167;
                        continue _fun98964
                    }
                case 153:
                    var3 = _closure2_slot1;
                    var2 = var3.push;
                    var2 = var2.bind(var3)(var0);
                case 167:
                    var3 = var0.then;
                    var2 = function() { // Environment: var1
                        var2 = _closure2_slot2;
                        var1 = _closure3_slot0;
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var4 = var3.bind(var0)(var2);
                    var3 = var4.then;
                    var2 = null;
                    var1 = function() { // Environment: var1
                        var2 = _closure2_slot2;
                        var1 = _closure3_slot0;
                        var0 = undefined;
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.then;
                        var1 = null;
                        var0 = function() { // Environment: var0
                            var0 = undefined;
                            return var0;
                        };
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                    };
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
            }
        };
        var0.add = var2;
        var1 = function arg0() {
            var1 = arg0;
            var _closure3_slot0 = var1;
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 0;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var2 = var1.SyncPromise;
            var1 = var2.prototype;
            var1 = Object.create(var1, {
                constructor: {
                    value: var2
                }
            });
            var4 = function(arg0, arg1) { // Environment: var0
                _fun98969: for (var _fun98969_ip = 0;;) switch (_fun98969_ip) {
                    case 0:
                        var4 = arg0;
                        var _closure4_slot0 = var4;
                        var0 = arg1;
                        var _closure4_slot1 = var0;
                        var0 = _closure2_slot1;
                        var0 = var0.length;
                        var _closure4_slot2 = var0;
                        if (var0) {
                            _fun98969_ip = 46;
                            continue _fun98969
                        }
                    case 35:
                        var3 = undefined;
                        var0 = true;
                        var0 = var4.bind(var3)(var0);
                        return var0;
                    case 46:
                        var0 = global;
                        var5 = var0.setTimeout;
                        var4 = _closure3_slot0;
                        var0 = undefined;
                        var3 = function() { // Environment: var1
                            _fun98970: for (var _fun98970_ip = 0;;) switch (_fun98970_ip) {
                                case 0:
                                    var0 = _closure3_slot0;
                                    if (!var0) {
                                        _fun98970_ip = 20;
                                        continue _fun98970
                                    }
                                case 10:
                                    var2 = _closure3_slot0;
                                    var1 = 0;
                                    var0 = var2 > var1;
                                case 20:
                                    if (!var0) {
                                        _fun98970_ip = 39;
                                        continue _fun98970
                                    }
                                case 23:
                                    var2 = _closure4_slot0;
                                    var1 = undefined;
                                    var0 = false;
                                    var0 = var2.bind(var1)(var0);
                                case 39:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var3 = var5.bind(var0)(var3, var4);
                        var _closure4_slot3 = var3;
                        var3 = _closure2_slot1;
                        var2 = var3.forEach;
                        var1 = function(arg0) { // Environment: var1
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot1;
                            var0 = 0;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.resolvedSyncPromise;
                            var1 = arg0;
                            var4 = var2.bind(var3)(var1);
                            var3 = var4.then;
                            var2 = _closure4_slot1;
                            var1 = function() { // Environment: var1
                                _fun98972: for (var _fun98972_ip = 0;;) switch (_fun98972_ip) {
                                    case 0:
                                        var1 = _closure4_slot2;
                                        var1 = var1 - 1;
                                        _closure4_slot2 = var1;
                                        if (var1) {
                                            _fun98972_ip = 47;
                                            continue _fun98972
                                        }
                                    case 17:
                                        var1 = global;
                                        var3 = var1.clearTimeout;
                                        var1 = _closure4_slot3;
                                        var2 = undefined;
                                        var1 = var3.bind(var2)(var1);
                                        var1 = _closure4_slot0;
                                        var0 = true;
                                        var0 = var1.bind(var2)(var0);
                                    case 47:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var1 = var3.bind(var4)(var1, var2);
                            return var0;
                        };
                        var1 = var2.bind(var3)(var1);
                        return var0;
                }
            };
            var5 = var1;
            var0 = new var5[var2](var4, var3);
            var0 = var0 instanceof Object ? var0 : var1;
            return var0;
        };
        var0.drain = var1;
        return var0;
    };
    var1.makePromiseBuffer = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [12916, 12898]);