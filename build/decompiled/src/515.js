// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun6579: for (var _fun6579_ip = 0;;) switch (_fun6579_ip) {
        case 0:
            var4 = require;
            var5 = dependencyMap;
            var _closure1_slot0 = var4;
            var _closure1_slot1 = var5;
            var0 = 0;
            var2 = var5[var0];
            var0 = undefined;
            var2 = var4.bind(var0)(var2);
            if (var2) {
                _fun6579_ip = 44;
                continue _fun6579
            }
        case 32:
            var3 = 1;
            var3 = var5[var3];
            var2 = var4.bind(var0)(var3);
        case 44:
            if (var2) {
                _fun6579_ip = 59;
                continue _fun6579
            }
        case 47:
            var3 = 2;
            var3 = var5[var3];
            var2 = var4.bind(var0)(var3);
        case 59:
            var _closure1_slot2 = var2;
            var2 = function() { // Original name: getSideChannel, environment: var1
                var0 = {};
                var2 = function(arg0) { // Original name: assert, environment: var1
                    _fun6581: for (var _fun6581_ip = 0;;) switch (_fun6581_ip) {
                        case 0:
                            var3 = arg0;
                            var1 = _closure2_slot1;
                            var0 = var1.has;
                            var0 = var0.bind(var1)(var3);
                            if (var0) {
                                _fun6581_ip = 97;
                                continue _fun6581
                            }
                        case 23:
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot1;
                            var0 = 3;
                            var0 = var5[var0];
                            var1 = undefined;
                            var2 = var4.bind(var1)(var0);
                            var0 = 4;
                            var0 = var5[var0];
                            var0 = var4.bind(var1)(var0);
                            var1 = var0.bind(var1)(var3);
                            var0 = 'Side channel does not contain ';
                            var6 = var0 + var1;
                            var1 = var2.prototype;
                            var1 = Object.create(var1, {
                                constructor: {
                                    value: var2
                                }
                            });
                            var7 = var1;
                            var0 = new var7[var2](var6, var5);
                            var0 = var0 instanceof Object ? var0 : var1;
                            throw var0;
                        case 97:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0.assert = var2;
                var2 = function(arg0) { // Original name: _delete, environment: var1
                    _fun6582: for (var _fun6582_ip = 0;;) switch (_fun6582_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var2 = !var0;
                            var0 = !var2;
                            if (var2) {
                                _fun6582_ip = 33;
                                continue _fun6582
                            }
                        case 16:
                            var3 = _closure2_slot0;
                            var2 = var3.delete;
                            var1 = arg0;
                            var0 = var2.bind(var3)(var1);
                        case 33:
                            return var0;
                    }
                };
                var0.delete = var2;
                var2 = function(arg0) { // Original name: get, environment: var1
                    _fun6583: for (var _fun6583_ip = 0;;) switch (_fun6583_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            if (!var0) {
                                _fun6583_ip = 27;
                                continue _fun6583
                            }
                        case 10:
                            var3 = _closure2_slot0;
                            var2 = var3.get;
                            var1 = arg0;
                            var0 = var2.bind(var3)(var1);
                        case 27:
                            return var0;
                    }
                };
                var0.get = var2;
                var2 = function(arg0) { // Original name: has, environment: var1
                    _fun6584: for (var _fun6584_ip = 0;;) switch (_fun6584_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var2 = !var0;
                            var0 = !var2;
                            if (var2) {
                                _fun6584_ip = 33;
                                continue _fun6584
                            }
                        case 16:
                            var3 = _closure2_slot0;
                            var2 = var3.has;
                            var1 = arg0;
                            var0 = var2.bind(var3)(var1);
                        case 33:
                            return var0;
                    }
                };
                var0.has = var2;
                var2 = function(arg0, arg1) { // Original name: set, environment: var1
                    _fun6585: for (var _fun6585_ip = 0;;) switch (_fun6585_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            if (var1) {
                                _fun6585_ip = 27;
                                continue _fun6585
                            }
                        case 10:
                            var2 = _closure1_slot2;
                            var1 = undefined;
                            var1 = var2.bind(var1)();
                            var _closure2_slot0 = var1;
                        case 27:
                            var3 = _closure2_slot0;
                            var2 = var3.set;
                            var1 = arg0;
                            var0 = arg1;
                            var0 = var2.bind(var3)(var1, var0);
                            var0 = undefined;
                            return var0;
                    }
                };
                var0.set = var2;
                var _closure2_slot1 = var0;
                return var0;
            };
            var1 = arg4;
            var1.exports = var2;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [516, 554, 555, 518, 552]);