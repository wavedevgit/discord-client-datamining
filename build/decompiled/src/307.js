// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = metroImportDefault;
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
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot3;
        var2 = function() { // Original name: ChildListCollection, environment: var4
            var2 = this;
            var3 = _closure1_slot2;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            var1 = global;
            var3 = var1.Map;
            var4 = var3.prototype;
            var4 = Object.create(var4, {
                constructor: {
                    value: var3
                }
            });
            var7 = var4;
            var3 = new var7[var3](var6);
            var3 = var3 instanceof Object ? var3 : var4;
            var2._cellKeyToChildren = var3;
            var1 = var1.Map;
            var3 = var1.prototype;
            var3 = Object.create(var3, {
                constructor: {
                    value: var1
                }
            });
            var7 = var3;
            var1 = new var7[var1](var6);
            var1 = var1 instanceof Object ? var1 : var3;
            var2._childrenToCellKey = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'add';
        var0.key = var1;
        var1 = function(arg0, arg1) { // Original name: add, environment: var4
            _fun4728: for (var _fun4728_ip = 0;;) switch (_fun4728_ip) {
                case 0:
                    var4 = arg0;
                    var3 = arg1;
                    var1 = this;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var0 = 2;
                    var2 = var2[var0];
                    var0 = undefined;
                    var6 = var5.bind(var0)(var2);
                    var5 = var1._childrenToCellKey;
                    var2 = var5.has;
                    var2 = var2.bind(var5)(var4);
                    var5 = !var2;
                    var2 = 'Trying to add already present child list';
                    var2 = var6.bind(var0)(var5, var2);
                    var5 = var1._cellKeyToChildren;
                    var2 = var5.get;
                    var6 = var2.bind(var5)(var3);
                    var2 = null;
                    if (!(var2 == var6)) {
                        _fun4728_ip = 115;
                        continue _fun4728
                    }
                case 87:
                    var2 = global;
                    var2 = var2.Set;
                    var5 = var2.prototype;
                    var5 = Object.create(var5, {
                        constructor: {
                            value: var2
                        }
                    });
                    var9 = var5;
                    var2 = new var9[var2](var8);
                    var6 = var2 instanceof Object ? var2 : var5;
                case 115:
                    var2 = var6.add;
                    var2 = var2.bind(var6)(var4);
                    var5 = var1._cellKeyToChildren;
                    var2 = var5.set;
                    var2 = var2.bind(var5)(var3, var6);
                    var2 = var1._childrenToCellKey;
                    var1 = var2.set;
                    var1 = var1.bind(var2)(var4, var3);
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(6);
        var1[0] = var0;
        var0 = {};
        var5 = 'remove';
        var0.key = var5;
        var5 = function(arg0) { // Original name: remove, environment: var4
            _fun4729: for (var _fun4729_ip = 0;;) switch (_fun4729_ip) {
                case 0:
                    var5 = arg0;
                    var1 = this;
                    var2 = var1._childrenToCellKey;
                    var0 = var2.get;
                    var3 = var0.bind(var2)(var5);
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var4 = 2;
                    var2 = var7[var4];
                    var0 = undefined;
                    var9 = var6.bind(var0)(var2);
                    var2 = null;
                    var8 = var2 != var3;
                    var2 = 'Trying to remove non-present child list';
                    var2 = var9.bind(var0)(var8, var2);
                    var8 = var1._childrenToCellKey;
                    var2 = var8.delete;
                    var2 = var2.bind(var8)(var5);
                    var8 = var1._cellKeyToChildren;
                    var2 = var8.get;
                    var2 = var2.bind(var8)(var3);
                    var4 = var7[var4];
                    var6 = var6.bind(var0)(var4);
                    var4 = '_cellKeyToChildren should contain cellKey';
                    var4 = var6.bind(var0)(var2, var4);
                    var4 = var2.delete;
                    var4 = var4.bind(var2)(var5);
                    var4 = var2.size;
                    var2 = 0;
                    if (!(var2 === var4)) {
                        _fun4729_ip = 155;
                        continue _fun4729
                    }
                case 139:
                    var2 = var1._cellKeyToChildren;
                    var1 = var2.delete;
                    var1 = var1.bind(var2)(var3);
                case 155:
                    return var0;
            }
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'forEach';
        var0.key = var5;
        var5 = function(arg0) { // Original name: forEach, environment: var4
            _fun4730: for (var _fun4730_ip = 0;;) switch (_fun4730_ip) {
                case 0:
                    var3 = arg0;
                    var0 = this;
                    var1 = var0._cellKeyToChildren;
                    var0 = var1.values;
                    var0 = var0.bind(var1)();
                    var1 = var0;
                    var2 = var1[Symbol.iterator];
                    var1 = var2().next;
                    var0 = undefined;
                case 29:
                    var6 = var1().value;
                    var4 = var2;
                    if (!(var4 !== var0)) {
                        _fun4730_ip = 83;
                        continue _fun4730
                    }
                case 40: // try_start_1
                    var4 = var6;
                    var5 = var4[Symbol.iterator];
                    var4 = var5().next;
                case 46:
                    var7 = var4().value;
                    var6 = var5;
                    if (!(var6 !== var0)) {
                        _fun4730_ip = 74;
                        continue _fun4730
                    }
                case 57: // try_start_0
                    var6 = var3;
                    var6 = var6.bind(var0)(var7);
                case 65: // try_end0
                    _fun4730_ip = 46;
                    continue _fun4730;
                case 67: // catch_target0
                    CatchBlockStart(arg_register = 4);
                    var5.return();
                    throw var4;
                case 74: // try_end1
                    _fun4730_ip = 29;
                    continue _fun4730;
                case 76: // catch_target1
                    CatchBlockStart(arg_register = 1);
                    var2.return();
                    throw var1;
                case 83:
                    return var0;
            }
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'forEachInCell';
        var0.key = var5;
        var5 = function(arg0, arg1) { // Original name: forEachInCell, environment: var4
            _fun4731: for (var _fun4731_ip = 0;;) switch (_fun4731_ip) {
                case 0:
                    var3 = arg1;
                    var0 = this;
                    var2 = var0._cellKeyToChildren;
                    var1 = var2.get;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun4731_ip = 35;
                        continue _fun4731
                    }
                case 31:
                    var0 = new Array(0);
                case 35:
                    var1 = var0;
                    var2 = var1[Symbol.iterator];
                    var1 = var2().next;
                    var0 = undefined;
                case 43:
                    var5 = var1().value;
                    var4 = var2;
                    if (!(var4 !== var0)) {
                        _fun4731_ip = 71;
                        continue _fun4731
                    }
                case 54: // try_start_0
                    var4 = var3;
                    var4 = var4.bind(var0)(var5);
                case 62: // try_end0
                    _fun4731_ip = 43;
                    continue _fun4731;
                case 64: // catch_target0
                    CatchBlockStart(arg_register = 1);
                    var2.return();
                    throw var1;
                case 71:
                    return var0;
            }
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'anyInCell';
        var0.key = var5;
        var5 = function(arg0, arg1) { // Original name: anyInCell, environment: var4
            _fun4732: for (var _fun4732_ip = 0;;) switch (_fun4732_ip) {
                case 0:
                    var3 = arg1;
                    var0 = this;
                    var2 = var0._cellKeyToChildren;
                    var1 = var2.get;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun4732_ip = 35;
                        continue _fun4732
                    }
                case 31:
                    var0 = new Array(0);
                case 35:
                    var2 = var0;
                    var1 = var2[Symbol.iterator];
                    var2 = var1().next;
                    var0 = undefined;
                case 43:
                    var5 = var2().value;
                    var4 = var1;
                    if (!(var4 !== var0)) {
                        _fun4732_ip = 81;
                        continue _fun4732
                    }
                case 54: // try_start_0
                    var4 = var3;
                    var4 = var4.bind(var0)(var5);
                    if (var4) {
                        _fun4732_ip = 67;
                        continue _fun4732
                    }
                case 65: // try_end0
                    _fun4732_ip = 43;
                    continue _fun4732;
                case 67:
                    var1.return();
                    var0 = true;
                    return var0;
                case 74: // catch_target0
                    CatchBlockStart(arg_register = 0);
                    var1.return();
                    throw var0;
                case 81:
                    var0 = false;
                    return var0;
            }
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'size';
        var0.key = var5;
        var4 = function() { // Original name: size, environment: var4
            var0 = this;
            var0 = var0._childrenToCellKey;
            var0 = var0.size;
            return var0;
        };
        var0.value = var4;
        var1[5] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 44]);