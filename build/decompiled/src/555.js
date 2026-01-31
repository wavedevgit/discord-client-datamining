// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = require;
    var _closure1_slot0 = var1;
    var1 = dependencyMap;
    var _closure1_slot1 = var1;
    var1 = function arg0, arg1, arg2() {
        _fun6683: for (var _fun6683_ip = 0;;) switch (_fun6683_ip) {
            case 0:
                var1 = arg0;
                var6 = arg1;
                var5 = var1.next;
                var4 = null;
                var2 = var1;
                if (!(var4 != var5)) {
                    _fun6683_ip = 47;
                    continue _fun6683
                }
            case 20:
                var7 = var5.key;
                var0 = var5;
                var3 = var2;
                if (!(var7 !== var6)) {
                    _fun6683_ip = 51;
                    continue _fun6683
                }
            case 35:
                var5 = var0.next;
                var2 = var0;
                if (var4 != var5) {
                    _fun6683_ip = 20;
                    continue _fun6683
                }
            case 47:
                var2 = undefined;
                return var2;
            case 51:
                var2 = var0.next;
                var3.next = var2;
                var2 = arg2;
                if (var2) {
                    _fun6683_ip = 85;
                    continue _fun6683
                }
            case 68:
                var2 = var1.next;
                var0.next = var2;
                var1.next = var0;
            case 85:
                return var0;
        }
    };
    var _closure1_slot2 = var1;
    var1 = function() {
        var0 = {};
        var2 = function arg0() {
            _fun6685: for (var _fun6685_ip = 0;;) switch (_fun6685_ip) {
                case 0:
                    var3 = arg0;
                    var1 = _closure2_slot1;
                    var0 = var1.has;
                    var0 = var0.bind(var1)(var3);
                    if (var0) {
                        _fun6685_ip = 96;
                        continue _fun6685
                    }
                case 23:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var0 = 0;
                    var0 = var5[var0];
                    var1 = undefined;
                    var2 = var4.bind(var1)(var0);
                    var0 = 1;
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
                case 96:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.assert = var2;
        var2 = function arg0() {
            _fun6686: for (var _fun6686_ip = 0;;) switch (_fun6686_ip) {
                case 0:
                    var4 = _closure2_slot0;
                    if (!var4) {
                        _fun6686_ip = 19;
                        continue _fun6686
                    }
                case 10:
                    var0 = _closure2_slot0;
                    var4 = var0.next;
                case 19:
                    var7 = _closure2_slot0;
                    var1 = undefined;
                    var0 = undefined;
                    if (!var7) {
                        _fun6686_ip = 49;
                        continue _fun6686
                    }
                case 30:
                    var6 = _closure1_slot2;
                    var5 = arg0;
                    var3 = true;
                    var0 = var6.bind(var1)(var7, var5, var3);
                case 49:
                    var3 = var0;
                    if (!var3) {
                        _fun6686_ip = 58;
                        continue _fun6686
                    }
                case 55:
                    var3 = var4;
                case 58:
                    if (!var3) {
                        _fun6686_ip = 65;
                        continue _fun6686
                    }
                case 61:
                    var3 = var4 === var0;
                case 65:
                    if (!var3) {
                        _fun6686_ip = 72;
                        continue _fun6686
                    }
                case 68:
                    var _closure2_slot0 = var1;
                case 72:
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
            }
        };
        var0.delete = var2;
        var2 = function arg0() {
            _fun6687: for (var _fun6687_ip = 0;;) switch (_fun6687_ip) {
                case 0:
                    var4 = _closure2_slot0;
                    var3 = undefined;
                    var0 = undefined;
                    if (!var4) {
                        _fun6687_ip = 44;
                        continue _fun6687
                    }
                case 14:
                    var2 = _closure1_slot2;
                    var1 = arg0;
                    var2 = var2.bind(var3)(var4, var1);
                    var1 = var2;
                    if (!var1) {
                        _fun6687_ip = 41;
                        continue _fun6687
                    }
                case 36:
                    var1 = var2.value;
                case 41:
                    var0 = var1;
                case 44:
                    return var0;
            }
        };
        var0.get = var2;
        var2 = function arg0() {
            _fun6688: for (var _fun6688_ip = 0;;) switch (_fun6688_ip) {
                case 0:
                    var4 = _closure2_slot0;
                    var1 = !var4;
                    var0 = !var1;
                    if (var1) {
                        _fun6688_ip = 40;
                        continue _fun6688
                    }
                case 16:
                    var3 = _closure1_slot2;
                    var2 = undefined;
                    var1 = arg0;
                    var1 = var3.bind(var2)(var4, var1);
                    var1 = !var1;
                    var0 = !var1;
                case 40:
                    return var0;
            }
        };
        var0.has = var2;
        var2 = function arg0, arg1() {
            _fun6689: for (var _fun6689_ip = 0;;) switch (_fun6689_ip) {
                case 0:
                    var5 = arg0;
                    var2 = arg1;
                    var1 = _closure2_slot0;
                    if (var1) {
                        _fun6689_ip = 28;
                        continue _fun6689
                    }
                case 16:
                    var1 = {};
                    var3 = undefined;
                    var1.next = var3;
                    _closure2_slot0 = var1;
                case 28:
                    var4 = _closure2_slot0;
                    var1 = _closure1_slot2;
                    var0 = undefined;
                    var1 = var1.bind(var0)(var4, var5);
                    if (var1) {
                        _fun6689_ip = 77;
                        continue _fun6689
                    }
                case 50:
                    var3 = {};
                    var3.key = var5;
                    var5 = var4.next;
                    var3.next = var5;
                    var3.value = var2;
                    var4.next = var3;
                    _fun6689_ip = 83;
                    continue _fun6689;
                case 77:
                    var1.value = var2;
                case 83:
                    return var0;
            }
        };
        var0.set = var2;
        var _closure2_slot1 = var0;
        return var0;
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [518, 552]);