// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun96919: for (var _fun96919_ip = 0;;) switch (_fun96919_ip) {
        case 0:
            var8 = require;
            var9 = dependencyMap;
            var _closure1_slot0 = var8;
            var _closure1_slot1 = var9;
            var0 = 2;
            var2 = var9[var0];
            var0 = undefined;
            var2 = var8.bind(var0)(var2);
            if (var2) {
                _fun96919_ip = 134;
                continue _fun96919
            }
        case 33:
            var2 = 3;
            var2 = var9[var2];
            var2 = var8.bind(var0)(var2);
            var2 = var2.state;
            if (var2) {
                _fun96919_ip = 134;
                continue _fun96919
            }
        case 53:
            var2 = 4;
            var2 = var9[var2];
            var3 = var8.bind(var0)(var2);
            var2 = 'state';
            var4 = var3.bind(var0)(var2);
            var _closure1_slot6 = var4;
            var2 = 5;
            var2 = var9[var2];
            var3 = var8.bind(var0)(var2);
            var2 = true;
            var3[var4] = var2;
            var5 = function arg0, arg1() {
                _fun96923: for (var _fun96923_ip = 0;;) switch (_fun96923_ip) {
                    case 0:
                        var5 = arg0;
                        var1 = arg1;
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot1;
                        var2 = 6;
                        var3 = var3[var2];
                        var2 = undefined;
                        var4 = var4.bind(var2)(var3);
                        var3 = _closure1_slot6;
                        var3 = var4.bind(var2)(var5, var3);
                        if (var3) {
                            _fun96923_ip = 83;
                            continue _fun96923
                        }
                    case 44:
                        var1.facade = var5;
                        var4 = _closure1_slot0;
                        var6 = _closure1_slot1;
                        var3 = 7;
                        var3 = var6[var3];
                        var4 = var4.bind(var2)(var3);
                        var3 = _closure1_slot6;
                        var3 = var4.bind(var2)(var5, var3, var1);
                        return var1;
                    case 83:
                        var1 = _closure1_slot0;
                        var3 = _closure1_slot1;
                        var0 = 1;
                        var0 = var3[var0];
                        var0 = var1.bind(var2)(var0);
                        var2 = var0.TypeError;
                        var0 = var2.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var2
                            }
                        });
                        var9 = 'Object already initialized';
                        var10 = var1;
                        var0 = new var10[var2](var9, var8);
                        var0 = var0 instanceof Object ? var0 : var1;
                        throw var0;
                }
            };
            var _closure1_slot2 = var5;
            var4 = function arg0() {
                _fun96924: for (var _fun96924_ip = 0;;) switch (_fun96924_ip) {
                    case 0:
                        var2 = arg0;
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot1;
                        var0 = 6;
                        var0 = var4[var0];
                        var4 = undefined;
                        var3 = var3.bind(var4)(var0);
                        var0 = _closure1_slot6;
                        var0 = var3.bind(var4)(var2, var0);
                        if (var0) {
                            _fun96924_ip = 45;
                            continue _fun96924
                        }
                    case 41:
                        var0 = {};
                        _fun96924_ip = 53;
                        continue _fun96924;
                    case 45:
                        var1 = _closure1_slot6;
                        var0 = var2[var1];
                    case 53:
                        return var0;
                }
            };
            var _closure1_slot3 = var4;
            var3 = function arg0() {
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 6;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = _closure1_slot6;
                var0 = arg0;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            var _closure1_slot4 = var3;
            _fun96919_ip = 289;
            continue _fun96919;
        case 134:
            var2 = 3;
            var6 = var9[var2];
            var6 = var8.bind(var0)(var6);
            var6 = var6.state;
            if (var6) {
                _fun96919_ip = 210;
                continue _fun96919
            }
        case 154:
            var2 = var9[var2];
            var7 = var8.bind(var0)(var2);
            var2 = 1;
            var2 = var9[var2];
            var2 = var8.bind(var0)(var2);
            var2 = var2.WeakMap;
            var8 = var2.prototype;
            var8 = Object.create(var8, {
                constructor: {
                    value: var2
                }
            });
            var11 = var8;
            var2 = new var11[var2](var10);
            var2 = var2 instanceof Object ? var2 : var8;
            var7.state = var2;
            var6 = var2;
        case 210:
            var _closure1_slot5 = var6;
            var2 = var6.get;
            var6.get = var2;
            var2 = var6.has;
            var6.has = var2;
            var2 = var6.set;
            var6.set = var2;
            var7 = function arg0, arg1() {
                _fun96920: for (var _fun96920_ip = 0;;) switch (_fun96920_ip) {
                    case 0:
                        var4 = arg0;
                        var1 = arg1;
                        var3 = _closure1_slot5;
                        var2 = var3.has;
                        var2 = var2.bind(var3)(var4);
                        if (var2) {
                            _fun96920_ip = 49;
                            continue _fun96920
                        }
                    case 26:
                        var1.facade = var4;
                        var3 = _closure1_slot5;
                        var2 = var3.set;
                        var2 = var2.bind(var3)(var4, var1);
                        return var1;
                    case 49:
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var0 = 1;
                        var1 = var1[var0];
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        var2 = var0.TypeError;
                        var0 = var2.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var2
                            }
                        });
                        var6 = 'Object already initialized';
                        var7 = var1;
                        var0 = new var7[var2](var6, var5);
                        var0 = var0 instanceof Object ? var0 : var1;
                        throw var0;
                }
            };
            _closure1_slot2 = var7;
            var6 = function arg0() {
                _fun96921: for (var _fun96921_ip = 0;;) switch (_fun96921_ip) {
                    case 0:
                        var2 = _closure1_slot5;
                        var1 = var2.get;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        if (var0) {
                            _fun96921_ip = 25;
                            continue _fun96921
                        }
                    case 23:
                        var0 = {};
                    case 25:
                        return var0;
                }
            };
            _closure1_slot3 = var6;
            var2 = function arg0() {
                var2 = _closure1_slot5;
                var1 = var2.has;
                var0 = arg0;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            _closure1_slot4 = var2;
            var5 = var7;
            var4 = var6;
            var3 = var2;
        case 289:
            var2 = {};
            var2.set = var5;
            var2.get = var4;
            var2.has = var3;
            var3 = function arg0() {
                _fun96926: for (var _fun96926_ip = 0;;) switch (_fun96926_ip) {
                    case 0:
                        var3 = arg0;
                        var0 = _closure1_slot4;
                        var2 = undefined;
                        var0 = var0.bind(var2)(var3);
                        if (var0) {
                            _fun96926_ip = 34;
                            continue _fun96926
                        }
                    case 20:
                        var4 = _closure1_slot2;
                        var0 = {};
                        var0 = var4.bind(var2)(var3, var0);
                        _fun96926_ip = 43;
                        continue _fun96926;
                    case 34:
                        var1 = _closure1_slot3;
                        var0 = var1.bind(var2)(var3);
                    case 43:
                        return var0;
                }
            };
            var2.enforce = var3;
            var1 = function arg0() {
                var1 = arg0;
                var _closure2_slot0 = var1;
                var0 = function(arg0) { // Environment: var0
                    _fun96928: for (var _fun96928_ip = 0;;) switch (_fun96928_ip) {
                        case 0:
                            var3 = arg0;
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var1 = 0;
                            var1 = var2[var1];
                            var2 = undefined;
                            var1 = var4.bind(var2)(var1);
                            var1 = var1.bind(var2)(var3);
                            if (!var1) {
                                _fun96928_ip = 62;
                                continue _fun96928
                            }
                        case 35:
                            var1 = _closure1_slot3;
                            var1 = var1.bind(var2)(var3);
                            var4 = var1.type;
                            var3 = _closure2_slot0;
                            if (!(var4 === var3)) {
                                _fun96928_ip = 62;
                                continue _fun96928
                            }
                        case 60:
                            return var1;
                        case 62:
                            var1 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var0 = 1;
                            var0 = var3[var0];
                            var0 = var1.bind(var2)(var0);
                            var2 = var0.TypeError;
                            var1 = _closure2_slot0;
                            var0 = 'Incompatible receiver, ';
                            var3 = var0 + var1;
                            var0 = var2.prototype;
                            var1 = Object.create(var0, {
                                constructor: {
                                    value: var2
                                }
                            });
                            var0 = ' required';
                            var5 = var3 + var0;
                            var6 = var1;
                            var0 = new var6[var2](var5, var4);
                            var0 = var0 instanceof Object ? var0 : var1;
                            throw var0;
                    }
                };
                return var0;
            };
            var2.getterFor = var1;
            var1 = arg4;
            var1.exports = var2;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [12620, 12595, 12657, 12611, 12658, 12640, 12618, 12651]);