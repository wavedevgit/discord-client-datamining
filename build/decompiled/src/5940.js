// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var3 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var3.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var3.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var3.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var3 = {};
    var _closure1_slot0 = var3;
    var1 = function(arg0) { // Environment: var4
        var2 = arg0;
        var4 = _closure1_slot3;
        var3 = function arg0() {
            var2 = this;
            var3 = _closure1_slot4;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            var1 = 'integer';
            var2.type = var1;
            var1 = arg0;
            var2.value = var1;
            return var0;
        };
        var _closure2_slot0 = var3;
        var0 = undefined;
        var3 = var4.bind(var0)(var3);
        var2.Integer = var3;
        var3 = function arg0() {
            var2 = this;
            var3 = _closure1_slot4;
            var1 = _closure2_slot1;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            var1 = 'string';
            var2.type = var1;
            var1 = arg0;
            var2.value = var1;
            return var0;
        };
        var _closure2_slot1 = var3;
        var3 = var4.bind(var0)(var3);
        var2.String = var3;
        var3 = function arg0() {
            var2 = this;
            var3 = _closure1_slot4;
            var1 = _closure2_slot2;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            var1 = 'boolean';
            var2.type = var1;
            var1 = arg0;
            var2.value = var1;
            return var0;
        };
        var _closure2_slot2 = var3;
        var3 = var4.bind(var0)(var3);
        var2.Boolean = var3;
        var3 = function arg0() {
            var2 = this;
            var3 = _closure1_slot4;
            var1 = _closure2_slot3;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            var1 = arg0;
            var2.type = var1;
            return var0;
        };
        var _closure2_slot3 = var3;
        var3 = var4.bind(var0)(var3);
        var2.Unknown = var3;
        var1 = function arg0() {
            _fun52150: for (var _fun52150_ip = 0;;) switch (_fun52150_ip) {
                case 0:
                    var0 = arg0;
                    var3 = var0.type;
                    var4 = var0.value;
                    var0 = null;
                    if (!(var0 != var4)) {
                        _fun52150_ip = 280;
                        continue _fun52150
                    }
                case 22:
                    var1 = 'integer';
                    if (!(var1 !== var3)) {
                        _fun52150_ip = 226;
                        continue _fun52150
                    }
                case 33:
                    var1 = 'string';
                    if (!(var1 !== var3)) {
                        _fun52150_ip = 189;
                        continue _fun52150
                    }
                case 44:
                    var1 = 'boolean';
                    if (!(var1 !== var3)) {
                        _fun52150_ip = 136;
                        continue _fun52150
                    }
                case 52:
                    var1 = 'unknown';
                    if (!(var1 !== var3)) {
                        _fun52150_ip = 98;
                        continue _fun52150
                    }
                case 60:
                    var1 = _closure1_slot0;
                    var1 = var1.Unknown;
                    var2 = var1.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var1
                        }
                    });
                    var6 = var2;
                    var5 = var3;
                    var1 = new var6[var1](var5, var4);
                    var1 = var1 instanceof Object ? var1 : var2;
                    return var1;
                case 98:
                    var1 = _closure1_slot0;
                    var1 = var1.Unknown;
                    var2 = var1.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var1
                        }
                    });
                    var6 = var2;
                    var5 = var4;
                    var1 = new var6[var1](var5, var4);
                    var1 = var1 instanceof Object ? var1 : var2;
                    return var1;
                case 136:
                    var1 = _closure1_slot0;
                    var3 = var1.Boolean;
                    var1 = global;
                    var2 = var1.JSON;
                    var1 = var2.parse;
                    var5 = var1.bind(var2)(var4);
                    var2 = var3.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var3
                        }
                    });
                    var6 = var2;
                    var1 = new var6[var3](var5, var4);
                    var1 = var1 instanceof Object ? var1 : var2;
                    return var1;
                case 189:
                    var1 = _closure1_slot0;
                    var1 = var1.String;
                    var2 = var1.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var1
                        }
                    });
                    var6 = var2;
                    var5 = var4;
                    var1 = new var6[var1](var5, var4);
                    var1 = var1 instanceof Object ? var1 : var2;
                    return var1;
                case 226:
                    var1 = _closure1_slot0;
                    var3 = var1.Integer;
                    var1 = global;
                    var2 = var1.Number;
                    var1 = var2.parseInt;
                    var5 = var1.bind(var2)(var4);
                    var2 = var3.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var3
                        }
                    });
                    var6 = var2;
                    var1 = new var6[var3](var5, var4);
                    var1 = var1 instanceof Object ? var1 : var2;
                    return var1;
                case 280:
                    return var0;
            }
        };
        var2.parse = var1;
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var1 = {};
    var _closure1_slot1 = var1;
    var4 = function(arg0) { // Environment: var4
        var2 = arg0;
        var1 = function() {
            var0 = _closure1_slot1;
            var0 = var0.Builder;
            var1 = var0.prototype;
            var1 = Object.create(var1, {
                constructor: {
                    value: var0
                }
            });
            var2 = var1;
            var0 = new var2[var0](var1);
            var0 = var0 instanceof Object ? var0 : var1;
            return var0;
        };
        var2.builder = var1;
        var1 = function() { // Environment: var0
            var3 = _closure1_slot3;
            var2 = function() {
                var2 = this;
                var3 = _closure1_slot4;
                var1 = _closure3_slot0;
                var0 = undefined;
                var1 = var3.bind(var0)(var2, var1);
                var1 = {};
                var2._fields = var1;
                return var0;
            };
            var _closure3_slot0 = var2;
            var0 = {};
            var1 = 'integer';
            var0.key = var1;
            var1 = function arg0, arg1() {
                var0 = this;
                var1 = global;
                var5 = var1.Object;
                var4 = var5.assign;
                var3 = var0._fields;
                var8 = _closure1_slot2;
                var1 = _closure1_slot0;
                var6 = var1.Integer;
                var1 = var6.prototype;
                var2 = Object.create(var1, {
                    constructor: {
                        value: var6
                    }
                });
                var11 = arg1;
                var12 = var2;
                var1 = new var12[var6](var11, var10);
                var7 = var1 instanceof Object ? var1 : var2;
                var6 = undefined;
                var2 = {};
                var1 = arg0;
                var2 = var8.bind(var6)(var2, var1, var7);
                var1 = {};
                var1 = var4.bind(var5)(var1, var3, var2);
                var0._fields = var1;
                return var0;
            };
            var0.value = var1;
            var1 = new Array(4);
            var1[0] = var0;
            var0 = {};
            var5 = 'boolean';
            var0.key = var5;
            var5 = function arg0, arg1() {
                var0 = this;
                var1 = global;
                var5 = var1.Object;
                var4 = var5.assign;
                var3 = var0._fields;
                var8 = _closure1_slot2;
                var1 = _closure1_slot0;
                var6 = var1.Boolean;
                var1 = var6.prototype;
                var2 = Object.create(var1, {
                    constructor: {
                        value: var6
                    }
                });
                var11 = arg1;
                var12 = var2;
                var1 = new var12[var6](var11, var10);
                var7 = var1 instanceof Object ? var1 : var2;
                var6 = undefined;
                var2 = {};
                var1 = arg0;
                var2 = var8.bind(var6)(var2, var1, var7);
                var1 = {};
                var1 = var4.bind(var5)(var1, var3, var2);
                var0._fields = var1;
                return var0;
            };
            var0.value = var5;
            var1[1] = var0;
            var0 = {};
            var5 = 'string';
            var0.key = var5;
            var5 = function arg0, arg1() {
                var0 = this;
                var1 = global;
                var5 = var1.Object;
                var4 = var5.assign;
                var3 = var0._fields;
                var8 = _closure1_slot2;
                var1 = _closure1_slot0;
                var6 = var1.String;
                var1 = var6.prototype;
                var2 = Object.create(var1, {
                    constructor: {
                        value: var6
                    }
                });
                var11 = arg1;
                var12 = var2;
                var1 = new var12[var6](var11, var10);
                var7 = var1 instanceof Object ? var1 : var2;
                var6 = undefined;
                var2 = {};
                var1 = arg0;
                var2 = var8.bind(var6)(var2, var1, var7);
                var1 = {};
                var1 = var4.bind(var5)(var1, var3, var2);
                var0._fields = var1;
                return var0;
            };
            var0.value = var5;
            var1[2] = var0;
            var0 = {};
            var5 = 'build';
            var0.key = var5;
            var4 = function() {
                var0 = this;
                var0 = var0._fields;
                return var0;
            };
            var0.value = var4;
            var1[3] = var0;
            var0 = undefined;
            var0 = var3.bind(var0)(var2, var1);
            return var0;
        };
        var0 = undefined;
        var1 = var1.bind(var0)();
        var2.Builder = var1;
        return var0;
    };
    var4 = var4.bind(var0)(var1);
    var2.InquiryField = var3;
    var2.Fields = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [77, 7, 6]);