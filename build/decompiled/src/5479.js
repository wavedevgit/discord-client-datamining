// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var1
        _fun48592: for (var _fun48592_ip = 0;;) switch (_fun48592_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 70: // try_end0
                _fun48592_ip = 74;
                continue _fun48592;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot5 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot5 = var0;
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
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var3 = function() { // Original name: FeMergeNode, environment: var0
            _fun48596: for (var _fun48596_ip = 0;;) switch (_fun48596_ip) {
                case 0:
                    var4 = this;
                    var3 = undefined;
                    var9 = undefined;
                    var6 = _closure1_slot0;
                    var2 = _closure2_slot0;
                    var2 = var6.bind(var3)(var4, var2);
                    var6 = arguments.length;
                    var7 = global;
                    var2 = var7.Array;
                    var8 = var2.prototype;
                    var8 = Object.create(var8, {
                        constructor: {
                            value: var2
                        }
                    });
                    var14 = var8;
                    var13 = var6;
                    var2 = new var14[var2](var13, var12);
                    var8 = var2 instanceof Object ? var2 : var8;
                    var2 = 0;
                    var10 = var2 < var6;
                    if (!var10) {
                        _fun48596_ip = 87;
                        continue _fun48596
                    }
                case 72:
                    var10 = arguments[var2];
                    var8[var2] = var10;
                    var2 = var2 + 1;
                    if (var2 < var6) {
                        _fun48596_ip = 72;
                        continue _fun48596
                    }
                case 87:
                    var2 = _closure2_slot0;
                    var6 = new Array(0);
                    var0 = var6.concat;
                    var6 = var0.bind(var6)(var8);
                    var0 = _closure1_slot3;
                    var9 = var0.bind(var3)(var2);
                    var2 = _closure1_slot2;
                    var0 = _closure1_slot5;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun48596_ip = 142;
                        continue _fun48596
                    }
                case 129:
                    var0 = var9.apply;
                    var0 = var0.bind(var9)(var4, var6);
                    _fun48596_ip = 181;
                    continue _fun48596;
                case 142:
                    var8 = var7.Reflect;
                    var7 = var8.construct;
                    if (var6) {
                        _fun48596_ip = 160;
                        continue _fun48596
                    }
                case 156:
                    var6 = new Array(0);
                case 160:
                    var5 = _closure1_slot3;
                    var5 = var5.bind(var3)(var4);
                    var5 = var5.constructor;
                    var0 = var7.bind(var8)(var9, var6, var5);
                case 181:
                    var0 = var2.bind(var3)(var4, var0);
                    var _closure3_slot0 = var0;
                    var1 = function() { // Environment: var1
                        _fun48597: for (var _fun48597_ip = 0;;) switch (_fun48597_ip) {
                            case 0:
                                var0 = _closure3_slot0;
                                var0 = var0.props;
                                var1 = var0.parent;
                                if (!var1) {
                                    _fun48597_ip = 30;
                                    continue _fun48597
                                }
                            case 20:
                                var0 = var1.forceUpdate;
                                var0 = var0.bind(var1)();
                            case 30:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.setNativeProps = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot4;
        var2 = undefined;
        var4 = arg0;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot1;
        var4 = {};
        var5 = 'render';
        var4.key = var5;
        var0 = function() { // Original name: render, environment: var0
            var0 = null;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(1);
        var0[0] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = 'FeMergeNode';
    var1.displayName = var3;
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 5460]);