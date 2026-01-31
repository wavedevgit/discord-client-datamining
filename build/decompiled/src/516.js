// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun6586: for (var _fun6586_ip = 0;;) switch (_fun6586_ip) {
        case 0:
            var3 = require;
            var4 = dependencyMap;
            var _closure1_slot0 = var3;
            var _closure1_slot1 = var4;
            var0 = 0;
            var2 = var4[var0];
            var0 = undefined;
            var5 = var3.bind(var0)(var2);
            var2 = '%WeakMap%';
            var7 = true;
            var2 = var5.bind(var0)(var2, var7);
            var _closure1_slot2 = var2;
            var5 = 1;
            var6 = var4[var5];
            var8 = var3.bind(var0)(var6);
            var6 = 'WeakMap.prototype.get';
            var6 = var8.bind(var0)(var6, var7);
            var _closure1_slot3 = var6;
            var6 = var4[var5];
            var8 = var3.bind(var0)(var6);
            var6 = 'WeakMap.prototype.set';
            var6 = var8.bind(var0)(var6, var7);
            var _closure1_slot4 = var6;
            var6 = var4[var5];
            var8 = var3.bind(var0)(var6);
            var6 = 'WeakMap.prototype.has';
            var6 = var8.bind(var0)(var6, var7);
            var _closure1_slot5 = var6;
            var5 = var4[var5];
            var6 = var3.bind(var0)(var5);
            var5 = 'WeakMap.prototype.delete';
            var5 = var6.bind(var0)(var5, var7);
            var _closure1_slot6 = var5;
            if (var2) {
                _fun6586_ip = 165;
                continue _fun6586
            }
        case 151:
            var2 = 4;
            var2 = var4[var2];
            var2 = var3.bind(var0)(var2);
            _fun6586_ip = 170;
            continue _fun6586;
        case 165:
            var2 = function() {
                var0 = {};
                var2 = function arg0() {
                    _fun6588: for (var _fun6588_ip = 0;;) switch (_fun6588_ip) {
                        case 0:
                            var3 = arg0;
                            var1 = _closure2_slot2;
                            var0 = var1.has;
                            var0 = var0.bind(var1)(var3);
                            if (var0) {
                                _fun6588_ip = 97;
                                continue _fun6588
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
                    _fun6589: for (var _fun6589_ip = 0;;) switch (_fun6589_ip) {
                        case 0:
                            var3 = arg0;
                            var0 = _closure1_slot2;
                            if (!var0) {
                                _fun6589_ip = 35;
                                continue _fun6589
                            }
                        case 13:
                            if (!var3) {
                                _fun6589_ip = 35;
                                continue _fun6589
                            }
                        case 16:
                            var2 = typeof var3;
                            var0 = 'object';
                            if (!(var0 !== var2)) {
                                _fun6589_ip = 86;
                                continue _fun6589
                            }
                        case 27:
                            var0 = 'function';
                            if (!(var0 !== var2)) {
                                _fun6589_ip = 86;
                                continue _fun6589
                            }
                        case 35:
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var0 = 4;
                            var2 = var2[var0];
                            var0 = undefined;
                            var0 = var4.bind(var0)(var2);
                            if (!var0) {
                                _fun6589_ip = 96;
                                continue _fun6589
                            }
                        case 60:
                            var2 = _closure2_slot1;
                            if (!var2) {
                                _fun6589_ip = 96;
                                continue _fun6589
                            }
                        case 70:
                            var2 = _closure2_slot1;
                            var0 = var2.delete;
                            var0 = var0.bind(var2)(var3);
                            return var0;
                        case 86:
                            var2 = _closure2_slot0;
                            if (var2) {
                                _fun6589_ip = 100;
                                continue _fun6589
                            }
                        case 96:
                            var2 = false;
                            return var2;
                        case 100:
                            var2 = _closure1_slot6;
                            var1 = _closure2_slot0;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1, var3);
                            return var0;
                    }
                };
                var0.delete = var2;
                var2 = function arg0() {
                    _fun6590: for (var _fun6590_ip = 0;;) switch (_fun6590_ip) {
                        case 0:
                            var4 = arg0;
                            var0 = _closure1_slot2;
                            if (!var0) {
                                _fun6590_ip = 45;
                                continue _fun6590
                            }
                        case 13:
                            if (!var4) {
                                _fun6590_ip = 45;
                                continue _fun6590
                            }
                        case 16:
                            var1 = typeof var4;
                            var0 = 'object';
                            if (!(var0 !== var1)) {
                                _fun6590_ip = 35;
                                continue _fun6590
                            }
                        case 27:
                            var0 = 'function';
                            if (!(var0 === var1)) {
                                _fun6590_ip = 45;
                                continue _fun6590
                            }
                        case 35:
                            var0 = _closure2_slot0;
                            if (var0) {
                                _fun6590_ip = 71;
                                continue _fun6590
                            }
                        case 45:
                            var0 = _closure2_slot1;
                            if (!var0) {
                                _fun6590_ip = 69;
                                continue _fun6590
                            }
                        case 55:
                            var5 = _closure2_slot1;
                            var3 = var5.get;
                            var0 = var3.bind(var5)(var4);
                        case 69:
                            _fun6590_ip = 87;
                            continue _fun6590;
                        case 71:
                            var3 = _closure1_slot3;
                            var2 = _closure2_slot0;
                            var1 = undefined;
                            var0 = var3.bind(var1)(var2, var4);
                        case 87:
                            return var0;
                    }
                };
                var0.get = var2;
                var2 = function arg0() {
                    _fun6591: for (var _fun6591_ip = 0;;) switch (_fun6591_ip) {
                        case 0:
                            var4 = arg0;
                            var0 = _closure1_slot2;
                            if (!var0) {
                                _fun6591_ip = 45;
                                continue _fun6591
                            }
                        case 13:
                            if (!var4) {
                                _fun6591_ip = 45;
                                continue _fun6591
                            }
                        case 16:
                            var1 = typeof var4;
                            var0 = 'object';
                            if (!(var0 !== var1)) {
                                _fun6591_ip = 35;
                                continue _fun6591
                            }
                        case 27:
                            var0 = 'function';
                            if (!(var0 === var1)) {
                                _fun6591_ip = 45;
                                continue _fun6591
                            }
                        case 35:
                            var0 = _closure2_slot0;
                            if (var0) {
                                _fun6591_ip = 77;
                                continue _fun6591
                            }
                        case 45:
                            var0 = _closure2_slot1;
                            var5 = !var0;
                            var0 = !var5;
                            if (var5) {
                                _fun6591_ip = 75;
                                continue _fun6591
                            }
                        case 61:
                            var5 = _closure2_slot1;
                            var3 = var5.has;
                            var0 = var3.bind(var5)(var4);
                        case 75:
                            _fun6591_ip = 93;
                            continue _fun6591;
                        case 77:
                            var3 = _closure1_slot5;
                            var2 = _closure2_slot0;
                            var1 = undefined;
                            var0 = var3.bind(var1)(var2, var4);
                        case 93:
                            return var0;
                    }
                };
                var0.has = var2;
                var2 = function arg0, arg1() {
                    _fun6592: for (var _fun6592_ip = 0;;) switch (_fun6592_ip) {
                        case 0:
                            var4 = arg0;
                            var3 = arg1;
                            var0 = _closure1_slot2;
                            if (!var0) {
                                _fun6592_ip = 38;
                                continue _fun6592
                            }
                        case 16:
                            if (!var4) {
                                _fun6592_ip = 38;
                                continue _fun6592
                            }
                        case 19:
                            var2 = typeof var4;
                            var0 = 'object';
                            if (!(var0 !== var2)) {
                                _fun6592_ip = 115;
                                continue _fun6592
                            }
                        case 30:
                            var0 = 'function';
                            if (!(var0 !== var2)) {
                                _fun6592_ip = 115;
                                continue _fun6592
                            }
                        case 38:
                            var2 = _closure1_slot0;
                            var0 = _closure1_slot1;
                            var7 = 4;
                            var0 = var0[var7];
                            var5 = undefined;
                            var0 = var2.bind(var5)(var0);
                            if (!var0) {
                                _fun6592_ip = 170;
                                continue _fun6592
                            }
                        case 63:
                            var2 = _closure2_slot1;
                            if (var2) {
                                _fun6592_ip = 98;
                                continue _fun6592
                            }
                        case 73:
                            var6 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var2 = var2[var7];
                            var2 = var6.bind(var5)(var2);
                            var2 = var2.bind(var5)();
                            var _closure2_slot1 = var2;
                        case 98:
                            var2 = _closure2_slot1;
                            var0 = var2.set;
                            var0 = var0.bind(var2)(var4, var3);
                            _fun6592_ip = 170;
                            continue _fun6592;
                        case 115:
                            var2 = _closure2_slot0;
                            if (var2) {
                                _fun6592_ip = 153;
                                continue _fun6592
                            }
                        case 125:
                            var2 = _closure1_slot2;
                            var5 = var2.prototype;
                            var5 = Object.create(var5, {
                                constructor: {
                                    value: var2
                                }
                            });
                            var11 = var5;
                            var2 = new var11[var2](var10);
                            var2 = var2 instanceof Object ? var2 : var5;
                            var _closure2_slot0 = var2;
                        case 153:
                            var2 = _closure1_slot4;
                            var1 = _closure2_slot0;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1, var4, var3);
                        case 170:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0.set = var2;
                var _closure2_slot2 = var0;
                return var0;
            };
        case 170:
            var1 = arg4;
            var1.exports = var2;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [517, 551, 518, 552, 554]);