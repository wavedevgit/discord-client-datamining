// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var6;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var1
        _fun5808: for (var _fun5808_ip = 0;;) switch (_fun5808_ip) {
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
                _fun5808_ip = 74;
                continue _fun5808;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot11 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = ['tintColor', 'titleColor', 'title'];
    var _closure1_slot3 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 6;
    var4 = var6[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var4);
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.jsx;
    var _closure1_slot10 = var4;
    var3 = var3.Component;
    var1 = function(arg0) { // Environment: var1
        var3 = function() { // Original name: RefreshControl, environment: var5
            _fun5812: for (var _fun5812_ip = 0;;) switch (_fun5812_ip) {
                case 0:
                    var4 = this;
                    var3 = undefined;
                    var9 = undefined;
                    var6 = _closure1_slot5;
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
                        _fun5812_ip = 87;
                        continue _fun5812
                    }
                case 72:
                    var10 = arguments[var2];
                    var8[var2] = var10;
                    var2 = var2 + 1;
                    if (var2 < var6) {
                        _fun5812_ip = 72;
                        continue _fun5812
                    }
                case 87:
                    var2 = _closure2_slot0;
                    var6 = new Array(0);
                    var0 = var6.concat;
                    var6 = var0.bind(var6)(var8);
                    var0 = _closure1_slot8;
                    var9 = var0.bind(var3)(var2);
                    var2 = _closure1_slot7;
                    var0 = _closure1_slot11;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun5812_ip = 142;
                        continue _fun5812
                    }
                case 129:
                    var0 = var9.apply;
                    var0 = var0.bind(var9)(var4, var6);
                    _fun5812_ip = 181;
                    continue _fun5812;
                case 142:
                    var8 = var7.Reflect;
                    var7 = var8.construct;
                    if (var6) {
                        _fun5812_ip = 160;
                        continue _fun5812
                    }
                case 156:
                    var6 = new Array(0);
                case 160:
                    var5 = _closure1_slot8;
                    var5 = var5.bind(var3)(var4);
                    var5 = var5.constructor;
                    var0 = var7.bind(var8)(var9, var6, var5);
                case 181:
                    var0 = var2.bind(var3)(var4, var0);
                    var _closure3_slot0 = var0;
                    var2 = false;
                    var0._lastNativeRefreshing = var2;
                    var2 = function() { // Environment: var1
                        _fun5813: for (var _fun5813_ip = 0;;) switch (_fun5813_ip) {
                            case 0:
                                var2 = _closure3_slot0;
                                var1 = true;
                                var2._lastNativeRefreshing = var1;
                                var1 = _closure3_slot0;
                                var1 = var1.props;
                                var1 = var1.onRefresh;
                                if (!var1) {
                                    _fun5813_ip = 52;
                                    continue _fun5813
                                }
                            case 33:
                                var1 = _closure3_slot0;
                                var2 = var1.props;
                                var1 = var2.onRefresh;
                                var1 = var1.bind(var2)();
                            case 52:
                                var1 = _closure3_slot0;
                                var0 = var1.forceUpdate;
                                var0 = var0.bind(var1)();
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0._onRefresh = var2;
                    var1 = function(arg0) { // Environment: var1
                        var1 = _closure3_slot0;
                        var0 = arg0;
                        var1._nativeRef = var0;
                        var0 = undefined;
                        return var0;
                    };
                    var0._setNativeRef = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot9;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot6;
        var4 = {};
        var0 = 'componentDidMount';
        var4.key = var0;
        var0 = function() { // Original name: componentDidMount, environment: var5
            var1 = this;
            var0 = var1.props;
            var0 = var0.refreshing;
            var1._lastNativeRefreshing = var0;
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'componentDidUpdate';
        var4.key = var6;
        var6 = function(arg0) { // Original name: componentDidUpdate, environment: var5
            _fun5816: for (var _fun5816_ip = 0;;) switch (_fun5816_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.props;
                    var2 = var0.refreshing;
                    var0 = arg0;
                    var0 = var0.refreshing;
                    if (!(var2 === var0)) {
                        _fun5816_ip = 139;
                        continue _fun5816
                    }
                case 27:
                    var0 = var1.props;
                    var2 = var0.refreshing;
                    var0 = var1._lastNativeRefreshing;
                    var0 = var2 !== var0;
                    if (!var0) {
                        _fun5816_ip = 57;
                        continue _fun5816
                    }
                case 51:
                    var0 = var1._nativeRef;
                case 57:
                    if (!var0) {
                        _fun5816_ip = 156;
                        continue _fun5816
                    }
                case 60:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 8;
                    var2 = var2[var0];
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2);
                    var4 = var0.Commands;
                    var3 = var4.setNativeRefreshing;
                    var2 = var1._nativeRef;
                    var0 = var1.props;
                    var0 = var0.refreshing;
                    var0 = var3.bind(var4)(var2, var0);
                    var0 = var1.props;
                    var0 = var0.refreshing;
                    var1._lastNativeRefreshing = var0;
                    _fun5816_ip = 156;
                    continue _fun5816;
                case 139:
                    var0 = var1.props;
                    var0 = var0.refreshing;
                    var1._lastNativeRefreshing = var0;
                case 156:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'render';
        var4.key = var6;
        var5 = function() { // Original name: render, environment: var5
            var0 = this;
            var5 = var0.props;
            var1 = var5.tintColor;
            var1 = var5.titleColor;
            var1 = var5.title;
            var4 = _closure1_slot4;
            var2 = _closure1_slot3;
            var3 = undefined;
            var7 = var4.bind(var3)(var5, var2);
            var2 = _closure1_slot10;
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 8;
            var1 = var5[var1];
            var1 = var4.bind(var3)(var1);
            var4 = global;
            var6 = var4.Object;
            var5 = var6.assign;
            var4 = {};
            var8 = var0._setNativeRef;
            var4.ref = var8;
            var0 = var0._onRefresh;
            var4.onRefresh = var0;
            var0 = {};
            var0 = var5.bind(var6)(var0, var7, var4);
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [29, 6, 7, 15, 17, 18, 31, 33, 411]);