// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun45994: for (var _fun45994_ip = 0;;) switch (_fun45994_ip) {
        case 0:
            var2 = exports;
            var3 = this;
            var0 = var3;
            if (!var0) {
                _fun45994_ip = 20;
                continue _fun45994
            }
        case 14:
            var0 = var3.__extends;
        case 20:
            if (var0) {
                _fun45994_ip = 37;
                continue _fun45994
            }
        case 23:
            var3 = function(arg0, arg1) { // Original name: extendStatics, environment: var1
                _fun45995: for (var _fun45995_ip = 0;;) switch (_fun45995_ip) {
                    case 0:
                        var1 = global;
                        var2 = var1.Object;
                        var3 = var2.setPrototypeOf;
                        if (var3) {
                            _fun45995_ip = 47;
                            continue _fun45995
                        }
                    case 19:
                        var2 = var1.Array;
                        var1 = new Array(0);
                        var1 = Object.create(var1);
                        var1 = var1 instanceof var2;
                        if (!var1) {
                            _fun45995_ip = 44;
                            continue _fun45995
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
                            _fun45995_ip = 55;
                            continue _fun45995
                        }
                    case 50:
                        var3 = function(arg0, arg1) { // Environment: var0
                            _fun45997: for (var _fun45997_ip = 0;;) switch (_fun45997_ip) {
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
                                                _fun45997_ip = 19;
                                                continue _fun45997
                                            }
                                            case 62: var8 = var6[var9];
                                            var7[var9] = var8;
                                            _fun45997_ip = 19;
                                            continue _fun45997;
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
                _fun45998: for (var _fun45998_ip = 0;;) switch (_fun45998_ip) {
                    case 0:
                        var2 = arg0;
                        var3 = arg1;
                        var _closure2_slot0 = var2;
                        var1 = function() { // Original name: __, environment: var0
                            var1 = _closure2_slot0;
                            var0 = this;
                            var0.constructor = var1;
                            var0 = undefined;
                            return var0;
                        };
                        var4 = 'function';
                        var0 = typeof var3;
                        if (!(var4 !== var0)) {
                            _fun45998_ip = 34;
                            continue _fun45998
                        }
                    case 28:
                        var0 = null;
                        if (!(var0 === var3)) {
                            _fun45998_ip = 114;
                            continue _fun45998
                        }
                    case 34:
                        var4 = _closure1_slot0;
                        var0 = undefined;
                        var4 = var4.bind(var0)(var2, var3);
                        var4 = null;
                        if (!(var4 !== var3)) {
                            _fun45998_ip = 88;
                            continue _fun45998
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
                        _fun45998_ip = 106;
                        continue _fun45998;
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
            var3 = arg6;
            var0 = 0;
            var4 = var3[var0];
            var3 = arg1;
            var0 = undefined;
            var3 = var3.bind(var0)(var4);
            var3 = var3.ComponentCompat;
            var1 = function(arg0) { // Environment: var1
                var4 = arg0;
                var _closure2_slot0 = var4;
                var0 = function() { // Original name: BaseViewRenderer, environment: var1
                    _fun46001: for (var _fun46001_ip = 0;;) switch (_fun46001_ip) {
                        case 0:
                            var1 = this;
                            var2 = undefined;
                            var4 = _closure2_slot0;
                            var0 = null;
                            var0 = var0 !== var4;
                            if (!var0) {
                                _fun46001_ip = 38;
                                continue _fun46001
                            }
                        case 21:
                            var4 = _closure2_slot0;
                            var3 = var4.apply;
                            var2 = arguments;
                            var0 = var3.bind(var4)(var1, var2);
                        case 38:
                            if (var0) {
                                _fun46001_ip = 44;
                                continue _fun46001
                            }
                        case 41:
                            var0 = var1;
                        case 44:
                            var1 = true;
                            var0.isRendererMounted = var1;
                            return var0;
                    }
                };
                var3 = _closure1_slot1;
                var2 = undefined;
                var2 = var3.bind(var2)(var0, var4);
                var3 = var0.prototype;
                var2 = function(arg0) { // Environment: var1
                    _fun46002: for (var _fun46002_ip = 0;;) switch (_fun46002_ip) {
                        case 0:
                            var2 = arg0;
                            var10 = this;
                            var0 = var10.props;
                            var1 = var0.x;
                            var0 = var2.x;
                            var3 = var1 !== var0;
                            if (var3) {
                                _fun46002_ip = 47;
                                continue _fun46002
                            }
                        case 28:
                            var0 = var10.props;
                            var1 = var0.y;
                            var0 = var2.y;
                            var3 = var1 !== var0;
                        case 47:
                            var0 = var2.forceNonDeterministicRendering;
                            var1 = !var0;
                            if (!var1) {
                                _fun46002_ip = 103;
                                continue _fun46002
                            }
                        case 59:
                            var0 = var10.props;
                            var4 = var0.width;
                            var0 = var2.width;
                            var0 = var4 !== var0;
                            if (var0) {
                                _fun46002_ip = 100;
                                continue _fun46002
                            }
                        case 81:
                            var4 = var10.props;
                            var5 = var4.height;
                            var4 = var2.height;
                            var0 = var5 !== var4;
                        case 100:
                            var1 = var0;
                        case 103:
                            if (var1) {
                                _fun46002_ip = 127;
                                continue _fun46002
                            }
                        case 106:
                            var0 = var10.props;
                            var4 = var0.layoutProvider;
                            var0 = var2.layoutProvider;
                            var1 = var4 !== var0;
                        case 127:
                            var0 = var10.props;
                            var4 = var0.extendedState;
                            var0 = var2.extendedState;
                            var4 = var4 !== var0;
                            var0 = var10.props;
                            var5 = var0.internalSnapshot;
                            var0 = var2.internalSnapshot;
                            var0 = var5 !== var0;
                            var5 = var10.props;
                            var5 = var5.dataHasChanged;
                            if (!var5) {
                                _fun46002_ip = 215;
                                continue _fun46002
                            }
                        case 183:
                            var9 = var10.props;
                            var8 = var9.dataHasChanged;
                            var6 = var10.props;
                            var7 = var6.data;
                            var6 = var2.data;
                            var5 = var8.bind(var9)(var7, var6);
                        case 215:
                            if (var1) {
                                _fun46002_ip = 221;
                                continue _fun46002
                            }
                        case 218:
                            var1 = var5;
                        case 221:
                            if (var1) {
                                _fun46002_ip = 227;
                                continue _fun46002
                            }
                        case 224:
                            var1 = var4;
                        case 227:
                            if (var1) {
                                _fun46002_ip = 233;
                                continue _fun46002
                            }
                        case 230:
                            var1 = var0;
                        case 233:
                            if (var1) {
                                _fun46002_ip = 314;
                                continue _fun46002
                            }
                        case 236:
                            var0 = var1;
                            if (!var3) {
                                _fun46002_ip = 381;
                                continue _fun46002
                            }
                        case 245:
                            var11 = var2.itemAnimator;
                            var9 = var11.animateShift;
                            var3 = var10.props;
                            var17 = var3.x;
                            var3 = var10.props;
                            var16 = var3.y;
                            var15 = var2.x;
                            var14 = var2.y;
                            var3 = var10.getRef;
                            var13 = var3.bind(var10)();
                            var12 = var2.index;
                            var18 = var11;
                            var3 = var18[var9](var17, var16, var15, var14, var13, var12, var11);
                            var0 = !var3;
                            _fun46002_ip = 381;
                            continue _fun46002;
                        case 314:
                            var9 = var2.itemAnimator;
                            var8 = var9.animateWillUpdate;
                            var3 = var10.props;
                            var17 = var3.x;
                            var3 = var10.props;
                            var16 = var3.y;
                            var15 = var2.x;
                            var14 = var2.y;
                            var3 = var10.getRef;
                            var13 = var3.bind(var10)();
                            var12 = var2.index;
                            var18 = var9;
                            var2 = var18[var8](var17, var16, var15, var14, var13, var12, var11);
                            var0 = var1;
                        case 381:
                            return var0;
                    }
                };
                var3.shouldComponentUpdate = var2;
                var3 = var0.prototype;
                var2 = function() { // Environment: var1
                    var1 = this;
                    var0 = undefined;
                    var1.animatorStyleOverrides = var0;
                    var2 = var1.props;
                    var6 = var2.itemAnimator;
                    var5 = var6.animateDidMount;
                    var2 = var1.props;
                    var10 = var2.x;
                    var2 = var1.props;
                    var9 = var2.y;
                    var2 = var1.getRef;
                    var8 = var2.bind(var1)();
                    var1 = var1.props;
                    var7 = var1.index;
                    var11 = var6;
                    var1 = var11[var5](var10, var9, var8, var7, var6);
                    return var0;
                };
                var3.componentDidMount = var2;
                var3 = var0.prototype;
                var2 = function() { // Environment: var1
                    var1 = this;
                    var0 = var1.props;
                    var5 = var0.itemAnimator;
                    var4 = var5.animateWillMount;
                    var0 = var1.props;
                    var3 = var0.x;
                    var0 = var1.props;
                    var2 = var0.y;
                    var0 = var1.props;
                    var0 = var0.index;
                    var0 = var4.bind(var5)(var3, var2, var0);
                    var1.animatorStyleOverrides = var0;
                    var0 = undefined;
                    return var0;
                };
                var3.componentWillMountCompat = var2;
                var3 = var0.prototype;
                var2 = function() { // Environment: var1
                    var0 = this;
                    var1 = false;
                    var0.isRendererMounted = var1;
                    var1 = var0.props;
                    var5 = var1.itemAnimator;
                    var4 = var5.animateWillUnmount;
                    var1 = var0.props;
                    var9 = var1.x;
                    var1 = var0.props;
                    var8 = var1.y;
                    var1 = var0.getRef;
                    var7 = var1.bind(var0)();
                    var0 = var0.props;
                    var6 = var0.index;
                    var10 = var5;
                    var0 = var10[var4](var9, var8, var7, var6, var5);
                    var0 = undefined;
                    return var0;
                };
                var3.componentWillUnmount = var2;
                var3 = var0.prototype;
                var2 = function() { // Environment: var1
                    var0 = undefined;
                    return var0;
                };
                var3.componentDidUpdate = var2;
                var2 = var0.prototype;
                var1 = function() { // Environment: var1
                    var0 = this;
                    var5 = var0.props;
                    var4 = var5.childRenderer;
                    var1 = var0.props;
                    var9 = var1.layoutType;
                    var1 = var0.props;
                    var8 = var1.data;
                    var1 = var0.props;
                    var7 = var1.index;
                    var0 = var0.props;
                    var6 = var0.extendedState;
                    var10 = var5;
                    var0 = var10[var4](var9, var8, var7, var6, var5);
                    return var0;
                };
                var2.renderChild = var1;
                return var0;
            };
            var1 = var1.bind(var0)(var3);
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [5095]);