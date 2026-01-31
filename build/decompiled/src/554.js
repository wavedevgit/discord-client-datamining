// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun6675: for (var _fun6675_ip = 0;;) switch (_fun6675_ip) {
        case 0:
            var4 = require;
            var6 = dependencyMap;
            var _closure1_slot0 = var4;
            var _closure1_slot1 = var6;
            var0 = 0;
            var2 = var6[var0];
            var0 = undefined;
            var3 = var4.bind(var0)(var2);
            var2 = '%Map%';
            var5 = true;
            var2 = var3.bind(var0)(var2, var5);
            var _closure1_slot2 = var2;
            var3 = 1;
            var7 = var6[var3];
            var8 = var4.bind(var0)(var7);
            var7 = 'Map.prototype.get';
            var7 = var8.bind(var0)(var7, var5);
            var _closure1_slot3 = var7;
            var7 = var6[var3];
            var8 = var4.bind(var0)(var7);
            var7 = 'Map.prototype.set';
            var7 = var8.bind(var0)(var7, var5);
            var _closure1_slot4 = var7;
            var7 = var6[var3];
            var8 = var4.bind(var0)(var7);
            var7 = 'Map.prototype.has';
            var7 = var8.bind(var0)(var7, var5);
            var _closure1_slot5 = var7;
            var7 = var6[var3];
            var8 = var4.bind(var0)(var7);
            var7 = 'Map.prototype.delete';
            var7 = var8.bind(var0)(var7, var5);
            var _closure1_slot6 = var7;
            var3 = var6[var3];
            var4 = var4.bind(var0)(var3);
            var3 = 'Map.prototype.size';
            var3 = var4.bind(var0)(var3, var5);
            var _closure1_slot7 = var3;
            var3 = !var2;
            var2 = !var3;
            if (var3) {
                _fun6675_ip = 187;
                continue _fun6675
            }
        case 182:
            var2 = function() {
                var0 = {};
                var2 = function arg0() {
                    _fun6677: for (var _fun6677_ip = 0;;) switch (_fun6677_ip) {
                        case 0:
                            var3 = arg0;
                            var1 = _closure2_slot1;
                            var0 = var1.has;
                            var0 = var0.bind(var1)(var3);
                            if (var0) {
                                _fun6677_ip = 97;
                                continue _fun6677
                            }
                        case 23:
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot1;
                            var0 = 2;
                            var0 = var5[var0];
                            var1 = undefined;
                            var2 = var4.bind(var1)(var0);
                            var0 = 3;
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
                var2 = function arg0() {
                    _fun6678: for (var _fun6678_ip = 0;;) switch (_fun6678_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            if (var0) {
                                _fun6678_ip = 14;
                                continue _fun6678
                            }
                        case 10:
                            var0 = false;
                            return var0;
                        case 14:
                            var5 = _closure1_slot6;
                            var4 = _closure2_slot0;
                            var1 = undefined;
                            var0 = arg0;
                            var0 = var5.bind(var1)(var4, var0);
                            var4 = _closure1_slot7;
                            var3 = _closure2_slot0;
                            var4 = var4.bind(var1)(var3);
                            var3 = 0;
                            if (!(var3 === var4)) {
                                _fun6678_ip = 59;
                                continue _fun6678
                            }
                        case 55:
                            var _closure2_slot0 = var1;
                        case 59:
                            return var0;
                    }
                };
                var0.delete = var2;
                var2 = function arg0() {
                    _fun6679: for (var _fun6679_ip = 0;;) switch (_fun6679_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            var3 = undefined;
                            if (var1) {
                                _fun6679_ip = 14;
                                continue _fun6679
                            }
                        case 12:
                            return var3;
                        case 14:
                            var2 = _closure1_slot3;
                            var1 = _closure2_slot0;
                            var0 = arg0;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                    }
                };
                var0.get = var2;
                var2 = function arg0() {
                    _fun6680: for (var _fun6680_ip = 0;;) switch (_fun6680_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var2 = !var0;
                            var0 = !var2;
                            if (var2) {
                                _fun6680_ip = 38;
                                continue _fun6680
                            }
                        case 16:
                            var4 = _closure1_slot5;
                            var3 = _closure2_slot0;
                            var2 = undefined;
                            var1 = arg0;
                            var0 = var4.bind(var2)(var3, var1);
                        case 38:
                            return var0;
                    }
                };
                var0.has = var2;
                var2 = function arg0, arg1() {
                    _fun6681: for (var _fun6681_ip = 0;;) switch (_fun6681_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            if (var1) {
                                _fun6681_ip = 41;
                                continue _fun6681
                            }
                        case 10:
                            var1 = _closure1_slot2;
                            var2 = var1.prototype;
                            var2 = Object.create(var2, {
                                constructor: {
                                    value: var1
                                }
                            });
                            var8 = var2;
                            var1 = new var8[var1](var7);
                            var1 = var1 instanceof Object ? var1 : var2;
                            _closure2_slot0 = var1;
                        case 41:
                            var4 = _closure1_slot4;
                            var3 = _closure2_slot0;
                            var0 = undefined;
                            var2 = arg0;
                            var1 = arg1;
                            var1 = var4.bind(var0)(var3, var2, var1);
                            return var0;
                    }
                };
                var0.set = var2;
                var _closure2_slot1 = var0;
                return var0;
            };
        case 187:
            var1 = arg4;
            var1.exports = var2;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [517, 551, 518, 552]);