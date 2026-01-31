// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun45701: for (var _fun45701_ip = 0;;) switch (_fun45701_ip) {
        case 0:
            var2 = exports;
            var3 = this;
            var0 = var3;
            if (!var0) {
                _fun45701_ip = 20;
                continue _fun45701
            }
        case 14:
            var0 = var3.__extends;
        case 20:
            if (var0) {
                _fun45701_ip = 37;
                continue _fun45701
            }
        case 23:
            var3 = function arg0, arg1() {
                _fun45702: for (var _fun45702_ip = 0;;) switch (_fun45702_ip) {
                    case 0:
                        var1 = global;
                        var2 = var1.Object;
                        var3 = var2.setPrototypeOf;
                        if (var3) {
                            _fun45702_ip = 47;
                            continue _fun45702
                        }
                    case 19:
                        var2 = var1.Array;
                        var1 = new Array(0);
                        var1 = Object.create(var1);
                        var1 = var1 instanceof var2;
                        if (!var1) {
                            _fun45702_ip = 44;
                            continue _fun45702
                        }
                    case 39:
                        var1 = function(arg0, arg1) { // Environment: var0
                            var1 = arg1;
                            var0 = arg0;
                            var0.__proto__ = var1;
                            var0 = undefined;
                            return var0;
                        };
                    case 44:
                        var3 = var1;
                    case 47:
                        if (var3) {
                            _fun45702_ip = 55;
                            continue _fun45702
                        }
                    case 50:
                        var3 = function(arg0, arg1) { // Environment: var0
                            _fun45704: for (var _fun45704_ip = 0;;) switch (_fun45704_ip) {
                                case 0:
                                    var7 = arg0;
                                    var6 = arg1;
                                    var4 = var6;
                                    var0 = global;
                                    for (var1 in var4)
                                        case 19: {
                                            case 28: var9 = var1;
                                            var8 = var0.Object;
                                            var8 = var8.prototype;
                                            var10 = var8.hasOwnProperty;
                                            var8 = var10.call;
                                            var8 = var8.bind(var10)(var6, var9);
                                            if (!var8) {
                                                _fun45704_ip = 19;
                                                continue _fun45704
                                            }
                                            case 62: var8 = var6[var9];
                                            var7[var9] = var8;
                                            _fun45704_ip = 19;
                                            continue _fun45704;
                                        }
                                case 72:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                    case 55:
                        _closure1_slot0 = var3;
                        var2 = undefined;
                        var1 = arg0;
                        var0 = arg1;
                        var0 = var3.bind(var2)(var1, var0);
                        return var0;
                }
            };
            var _closure1_slot0 = var3;
            var0 = function(arg0, arg1) { // Environment: var1
                _fun45705: for (var _fun45705_ip = 0;;) switch (_fun45705_ip) {
                    case 0:
                        var2 = arg0;
                        var3 = arg1;
                        var _closure2_slot0 = var2;
                        var1 = function() {
                            var1 = _closure2_slot0;
                            var0 = this;
                            var0.constructor = var1;
                            var0 = undefined;
                            return var0;
                        };
                        var4 = 'function';
                        var0 = typeof var3;
                        if (!(var4 !== var0)) {
                            _fun45705_ip = 34;
                            continue _fun45705
                        }
                    case 28:
                        var0 = null;
                        if (!(var0 === var3)) {
                            _fun45705_ip = 114;
                            continue _fun45705
                        }
                    case 34:
                        var4 = _closure1_slot0;
                        var0 = undefined;
                        var4 = var4.bind(var0)(var2, var3);
                        var4 = null;
                        if (!(var4 !== var3)) {
                            _fun45705_ip = 88;
                            continue _fun45705
                        }
                    case 55:
                        var4 = var3.prototype;
                        var1.prototype = var4;
                        var4 = var1.prototype;
                        var4 = Object.create(var4, {
                            constructor: {
                                value: var1
                            }
                        });
                        var8 = var4;
                        var1 = new var8[var1](var7);
                        var1 = var1 instanceof Object ? var1 : var4;
                        _fun45705_ip = 106;
                        continue _fun45705;
                    case 88:
                        var4 = global;
                        var5 = var4.Object;
                        var4 = var5.create;
                        var1 = var4.bind(var5)(var3);
                    case 106:
                        var2.prototype = var1;
                        return var0;
                    case 114:
                        var0 = global;
                        var2 = var0.TypeError;
                        var1 = var0.String;
                        var0 = undefined;
                        var1 = var1.bind(var0)(var3);
                        var0 = 'Class extends value ';
                        var3 = var0 + var1;
                        var0 = var2.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var2
                            }
                        });
                        var0 = ' is not a constructor or null';
                        var7 = var3 + var0;
                        var8 = var1;
                        var0 = new var8[var2](var7, var6);
                        var0 = var0 instanceof Object ? var0 : var1;
                        throw var0;
                }
            };
        case 37:
            var _closure1_slot1 = var0;
            var0 = global;
            var5 = var0.Object;
            var4 = var5.defineProperty;
            var3 = {};
            var0 = true;
            var3.value = var0;
            var0 = '__esModule';
            var0 = var4.bind(var5)(var2, var0, var3);
            var0 = undefined;
            var2.ComponentCompat = var0;
            var4 = arg6;
            var3 = 0;
            var4 = var4[var3];
            var3 = arg1;
            var3 = var3.bind(var0)(var4);
            var3 = var3.Component;
            var1 = function(arg0) { // Environment: var1
                var4 = arg0;
                var _closure2_slot0 = var4;
                var0 = function arg0, arg1() {
                    _fun45708: for (var _fun45708_ip = 0;;) switch (_fun45708_ip) {
                        case 0:
                            var1 = this;
                            var4 = _closure2_slot0;
                            var3 = var4.call;
                            var2 = arg0;
                            var0 = arg1;
                            var0 = var3.bind(var4)(var1, var2, var0);
                            if (var0) {
                                _fun45708_ip = 34;
                                continue _fun45708
                            }
                        case 31:
                            var0 = var1;
                        case 34:
                            var1 = false;
                            var0._hasRenderedOnce = var1;
                            var0._didPropsChange = var1;
                            return var0;
                    }
                };
                var3 = _closure1_slot1;
                var2 = undefined;
                var2 = var3.bind(var2)(var0, var4);
                var3 = var0.prototype;
                var2 = function(arg0, arg1) { // Environment: var1
                    _fun45709: for (var _fun45709_ip = 0;;) switch (_fun45709_ip) {
                        case 0:
                            var2 = arg0;
                            var1 = this;
                            var0 = var1.props;
                            if (!(var0 !== var2)) {
                                _fun45709_ip = 26;
                                continue _fun45709
                            }
                        case 15:
                            var0 = var1.componentWillReceivePropsCompat;
                            var0 = var0.bind(var1)(var2);
                        case 26:
                            var0 = true;
                            return var0;
                    }
                };
                var3.shouldComponentUpdate = var2;
                var3 = var0.prototype;
                var2 = function() { // Environment: var1
                    var0 = this;
                    var0 = var0._hasRenderedOnce;
                    return var0;
                };
                var3.getHasRenderedOnce = var2;
                var3 = var0.prototype;
                var2 = function(arg0) { // Environment: var1
                    var0 = undefined;
                    return var0;
                };
                var3.componentWillReceivePropsCompat = var2;
                var3 = var0.prototype;
                var2 = function() { // Environment: var1
                    var0 = undefined;
                    return var0;
                };
                var3.componentWillMountCompat = var2;
                var3 = var0.prototype;
                var2 = function() { // Environment: var1
                    var0 = undefined;
                    return var0;
                };
                var3.componentWillUpdateCompat = var2;
                var2 = var0.prototype;
                var1 = function() { // Environment: var1
                    _fun45714: for (var _fun45714_ip = 0;;) switch (_fun45714_ip) {
                        case 0:
                            var1 = this;
                            var0 = var1._hasRenderedOnce;
                            if (var0) {
                                _fun45714_ip = 32;
                                continue _fun45714
                            }
                        case 12:
                            var0 = true;
                            var1._hasRenderedOnce = var0;
                            var0 = var1.componentWillMountCompat;
                            var0 = var0.bind(var1)();
                            _fun45714_ip = 42;
                            continue _fun45714;
                        case 32:
                            var0 = var1.componentWillUpdateCompat;
                            var0 = var0.bind(var1)();
                        case 42:
                            var0 = var1.renderCompat;
                            var0 = var0.bind(var1)();
                            return var0;
                    }
                };
                var2.render = var1;
                return var0;
            };
            var1 = var1.bind(var0)(var3);
            var2.ComponentCompat = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [31]);