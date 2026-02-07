// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
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
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot1 = var3;
    var1 = function() { // Environment: var1
        var4 = function() {
            var2 = this;
            var3 = _closure1_slot0;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            var1 = null;
            var2.thresholds = var1;
            return var0;
        };
        var _closure2_slot0 = var4;
        var3 = _closure1_slot1;
        var0 = {};
        var2 = 'setAgeRangeThresholds';
        var0.key = var2;
        var2 = function arg0() {
            _fun114704: for (var _fun114704_ip = 0;;) switch (_fun114704_ip) {
                case 0:
                    var3 = arg0;
                    var2 = 0;
                    var1 = var3[var2];
                    var0 = undefined;
                    if (!(var0 !== var1)) {
                        _fun114704_ip = 318;
                        continue _fun114704
                    }
                case 18:
                    var4 = var3[var2];
                    var1 = null;
                    if (!(var1 !== var4)) {
                        _fun114704_ip = 318;
                        continue _fun114704
                    }
                case 31:
                    var1 = var3[var2];
                    var4 = 1;
                    if (!(!(var1 < var4))) {
                        _fun114704_ip = 282;
                        continue _fun114704
                    }
                case 45:
                    var5 = var3[var2];
                    var1 = 18;
                    if (!(!(var5 > var1))) {
                        _fun114704_ip = 282;
                        continue _fun114704
                    }
                case 59:
                    var1 = var3.length;
                    var1 = var4 < var1;
                    var5 = var4;
                    if (!var1) {
                        _fun114704_ip = 113;
                        continue _fun114704
                    }
                case 74:
                    var6 = var3[var5];
                    var1 = var5 - var4;
                    var1 = var3[var1];
                    if (!(var0 !== var6)) {
                        _fun114704_ip = 101;
                        continue _fun114704
                    }
                case 90:
                    if (!(var0 !== var1)) {
                        _fun114704_ip = 101;
                        continue _fun114704
                    }
                case 94:
                    if (!(!(var6 <= var1))) {
                        _fun114704_ip = 246;
                        continue _fun114704
                    }
                case 101:
                    var5 = var5 + 1;
                    var1 = var3.length;
                    if (var5 < var1) {
                        _fun114704_ip = 74;
                        continue _fun114704
                    }
                case 113:
                    var1 = var3.length;
                    var5 = var4 < var1;
                    var1 = 2;
                    var6 = var4;
                    if (!var5) {
                        _fun114704_ip = 171;
                        continue _fun114704
                    }
                case 131:
                    var7 = var3[var6];
                    var5 = var6 - var4;
                    var5 = var3[var5];
                    if (!(var0 !== var7)) {
                        _fun114704_ip = 159;
                        continue _fun114704
                    }
                case 147:
                    if (!(var0 !== var5)) {
                        _fun114704_ip = 159;
                        continue _fun114704
                    }
                case 151:
                    var5 = var7 - var5;
                    if (!(!(var5 < var1))) {
                        _fun114704_ip = 210;
                        continue _fun114704
                    }
                case 159:
                    var6 = var6 + 1;
                    var5 = var3.length;
                    if (var6 < var5) {
                        _fun114704_ip = 131;
                        continue _fun114704
                    }
                case 171:
                    var5 = var3[var2];
                    var2 = new Array(3);
                    var2[0] = var5;
                    var4 = var3[var4];
                    var2[1] = var4;
                    var1 = var3[var1];
                    var2[2] = var1;
                    var1 = this;
                    var1.thresholds = var2;
                    return var0;
                case 210:
                    var0 = global;
                    var2 = var0.Error;
                    var0 = var2.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var2
                        }
                    });
                    var9 = 'PlayAgeRangeDeclaration: Age range thresholds must be at least 2 years apart';
                    var10 = var1;
                    var0 = new var10[var2](var9, var8);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
                case 246:
                    var0 = global;
                    var2 = var0.Error;
                    var0 = var2.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var2
                        }
                    });
                    var9 = 'PlayAgeRangeDeclaration: Age range thresholds must be in ascending order';
                    var10 = var1;
                    var0 = new var10[var2](var9, var8);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
                case 282:
                    var0 = global;
                    var2 = var0.Error;
                    var0 = var2.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var2
                        }
                    });
                    var9 = 'PlayAgeRangeDeclaration: setAgeRangeThresholds: Age range thresholds must be between 1 and 18 (inclusive)';
                    var10 = var1;
                    var0 = new var10[var2](var9, var8);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
                case 318:
                    var0 = global;
                    var2 = var0.Error;
                    var0 = var2.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var2
                        }
                    });
                    var9 = 'PlayAgeRangeDeclaration: First threshold age is required';
                    var10 = var1;
                    var0 = new var10[var2](var9, var8);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
            }
        };
        var0.value = var2;
        var2 = new Array(2);
        var2[0] = var0;
        var0 = {};
        var5 = 'getThresholds';
        var0.key = var5;
        var5 = function() {
            _fun114705: for (var _fun114705_ip = 0;;) switch (_fun114705_ip) {
                case 0:
                    var0 = this;
                    var2 = var0.thresholds;
                    var1 = null;
                    if (!(var1 !== var2)) {
                        _fun114705_ip = 23;
                        continue _fun114705
                    }
                case 15:
                    var0 = var0.thresholds;
                    return var0;
                case 23:
                    var0 = global;
                    var2 = var0.Error;
                    var0 = var2.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var2
                        }
                    });
                    var3 = 'PlayAgeRangeDeclaration: ageRangeThresholds not set';
                    var4 = var1;
                    var0 = new var4[var2](var3, var2);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
            }
        };
        var0.value = var5;
        var2[1] = var0;
        var0 = {};
        var5 = 'getInstance';
        var0.key = var5;
        var1 = function() {
            _fun114706: for (var _fun114706_ip = 0;;) switch (_fun114706_ip) {
                case 0:
                    var1 = _closure2_slot0;
                    var1 = var1.instance;
                    if (var1) {
                        _fun114706_ip = 46;
                        continue _fun114706
                    }
                case 16:
                    var2 = _closure2_slot0;
                    var1 = var2.prototype;
                    var3 = Object.create(var1, {
                        constructor: {
                            value: var2
                        }
                    });
                    var4 = var3;
                    var1 = new var4[var2](var3);
                    var1 = var1 instanceof Object ? var1 : var3;
                    var2.instance = var1;
                case 46:
                    var0 = _closure2_slot0;
                    var0 = var0.instance;
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var4, var2, var1);
        return var0;
    };
    var3 = var1.bind(var0)();
    var1 = var3.getInstance;
    var1 = var1.bind(var3)();
    var2.ageRangeThresholdManager = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7]);