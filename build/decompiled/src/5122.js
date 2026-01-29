// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun45974: for (var _fun45974_ip = 0;;) switch (_fun45974_ip) {
        case 0:
            var4 = require;
            var2 = exports;
            var5 = dependencyMap;
            var3 = this;
            var0 = var3;
            if (!var3) {
                _fun45974_ip = 26;
                continue _fun45974
            }
        case 20:
            var0 = var3.__extends;
        case 26:
            if (var0) {
                _fun45974_ip = 43;
                continue _fun45974
            }
        case 29:
            var6 = function(arg0, arg1) { // Original name: extendStatics, environment: var1
                _fun45975: for (var _fun45975_ip = 0;;) switch (_fun45975_ip) {
                    case 0:
                        var1 = global;
                        var2 = var1.Object;
                        var3 = var2.setPrototypeOf;
                        if (var3) {
                            _fun45975_ip = 47;
                            continue _fun45975
                        }
                    case 19:
                        var2 = var1.Array;
                        var1 = new Array(0);
                        var1 = Object.create(var1);
                        var1 = var1 instanceof var2;
                        if (!var1) {
                            _fun45975_ip = 44;
                            continue _fun45975
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
                            _fun45975_ip = 55;
                            continue _fun45975
                        }
                    case 50:
                        var3 = function(arg0, arg1) { // Environment: var0
                            _fun45977: for (var _fun45977_ip = 0;;) switch (_fun45977_ip) {
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
                                                _fun45977_ip = 19;
                                                continue _fun45977
                                            }
                                            case 62: var8 = var6[var9];
                                            var7[var9] = var8;
                                            _fun45977_ip = 19;
                                            continue _fun45977;
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
            var _closure1_slot0 = var6;
            var0 = function(arg0, arg1) { // Environment: var1
                _fun45978: for (var _fun45978_ip = 0;;) switch (_fun45978_ip) {
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
                            _fun45978_ip = 34;
                            continue _fun45978
                        }
                    case 28:
                        var0 = null;
                        if (!(var0 === var3)) {
                            _fun45978_ip = 114;
                            continue _fun45978
                        }
                    case 34:
                        var4 = _closure1_slot0;
                        var0 = undefined;
                        var4 = var4.bind(var0)(var2, var3);
                        var4 = null;
                        if (!(var4 !== var3)) {
                            _fun45978_ip = 88;
                            continue _fun45978
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
                        _fun45978_ip = 106;
                        continue _fun45978;
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
        case 43:
            var _closure1_slot1 = var0;
            var0 = var3;
            if (!var0) {
                _fun45974_ip = 59;
                continue _fun45974
            }
        case 53:
            var0 = var3.__assign;
        case 59:
            if (var0) {
                _fun45974_ip = 67;
                continue _fun45974
            }
        case 62:
            var0 = function() { // Environment: var1
                _fun45980: for (var _fun45980_ip = 0;;) switch (_fun45980_ip) {
                    case 0:
                        var0 = undefined;
                        var1 = global;
                        var1 = var1.Object;
                        var3 = var1.assign;
                        if (var3) {
                            _fun45980_ip = 25;
                            continue _fun45980
                        }
                    case 18:
                        var3 = function(arg0) { // Environment: var1
                            _fun45981: for (var _fun45981_ip = 0;;) switch (_fun45981_ip) {
                                case 0:
                                    var0 = arg0;
                                    var5 = undefined;
                                    var3 = arguments.length;
                                    var2 = 1;
                                    var6 = var2 < var3;
                                    var1 = global;
                                    var4 = undefined;
                                    if (!var6) {
                                        _fun45981_ip = 112;
                                        continue _fun45981
                                    }
                                case 22:
                                    var8 = arguments[var2];
                                    var11 = var8;
                                    var6 = var4;
                                    var4 = var6;
                                    for (var7 in var11)
                                        case 43: {
                                            var4 = var6;
                                            case 55: var13 = var7;
                                            var14 = var1.Object;
                                            var14 = var14.prototype;
                                            var15 = var14.hasOwnProperty;
                                            var14 = var15.call;
                                            var14 = var14.bind(var15)(var8, var13);
                                            var6 = var13;
                                            if (!var14) {
                                                _fun45981_ip = 43;
                                                continue _fun45981
                                            }
                                            case 92: var14 = var8[var13];
                                            var0[var13] = var14;
                                            var6 = var13;
                                            _fun45981_ip = 43;
                                            continue _fun45981;
                                        }
                                case 105:
                                    var2 = var2 + 1;
                                    if (var2 < var3) {
                                        _fun45981_ip = 22;
                                        continue _fun45981
                                    }
                                case 112:
                                    return var0;
                            }
                        };
                    case 25:
                        _closure1_slot2 = var3;
                        var2 = var3.apply;
                        var0 = arguments;
                        var1 = var0;
                        var0 = this;
                        var0 = var2.bind(var3)(var0, var1);
                        return var0;
                }
            };
        case 67:
            var _closure1_slot2 = var0;
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
            var _closure1_slot3 = var3;
            var3 = 1;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var _closure1_slot4 = var3;
            var3 = 2;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var3 = var3.default;
            var1 = function(arg0) { // Environment: var1
                var4 = arg0;
                var _closure2_slot0 = var4;
                var0 = function() { // Original name: ViewRenderer, environment: var1
                    _fun45983: for (var _fun45983_ip = 0;;) switch (_fun45983_ip) {
                        case 0:
                            var3 = this;
                            var4 = undefined;
                            var0 = _closure2_slot0;
                            var2 = null;
                            var0 = var2 !== var0;
                            if (!var0) {
                                _fun45983_ip = 40;
                                continue _fun45983
                            }
                        case 23:
                            var6 = _closure2_slot0;
                            var5 = var6.apply;
                            var4 = arguments;
                            var0 = var5.bind(var6)(var3, var4);
                        case 40:
                            if (var0) {
                                _fun45983_ip = 46;
                                continue _fun45983
                            }
                        case 43:
                            var0 = var3;
                        case 46:
                            var _closure3_slot0 = var0;
                            var3 = {
                                'width': 0,
                                'height': 0
                            };
                            var0._dim = var3;
                            var0._viewRef = var2;
                            var2 = function(arg0) { // Environment: var1
                                var1 = _closure3_slot0;
                                var0 = arg0;
                                var1._viewRef = var0;
                                var0 = undefined;
                                return var0;
                            };
                            var0._setRef = var2;
                            var2 = function(arg0) { // Environment: var1
                                _fun45985: for (var _fun45985_ip = 0;;) switch (_fun45985_ip) {
                                    case 0:
                                        var1 = arg0;
                                        var3 = global;
                                        var5 = var3.Math;
                                        var4 = var5.abs;
                                        var2 = _closure3_slot0;
                                        var2 = var2.props;
                                        var6 = var2.x;
                                        var2 = var1.nativeEvent;
                                        var2 = var2.layout;
                                        var2 = var2.x;
                                        var2 = var6 - var2;
                                        var2 = var4.bind(var5)(var2);
                                        var5 = var3.Math;
                                        var4 = var5.abs;
                                        var3 = _closure3_slot0;
                                        var3 = var3.props;
                                        var6 = var3.y;
                                        var3 = var1.nativeEvent;
                                        var3 = var3.layout;
                                        var3 = var3.y;
                                        var3 = var6 - var3;
                                        var4 = var4.bind(var5)(var3);
                                        var3 = 1;
                                        var2 = var2 < var3;
                                        if (!var2) {
                                            _fun45985_ip = 126;
                                            continue _fun45985
                                        }
                                    case 122:
                                        var2 = var4 < var3;
                                    case 126:
                                        if (!var2) {
                                            _fun45985_ip = 205;
                                            continue _fun45985
                                        }
                                    case 129:
                                        var3 = _closure3_slot0;
                                        var3 = var3.props;
                                        var4 = var3.height;
                                        var3 = var1.nativeEvent;
                                        var3 = var3.layout;
                                        var3 = var3.height;
                                        var3 = var4 !== var3;
                                        if (var3) {
                                            _fun45985_ip = 202;
                                            continue _fun45985
                                        }
                                    case 167:
                                        var4 = _closure3_slot0;
                                        var4 = var4.props;
                                        var5 = var4.width;
                                        var4 = var1.nativeEvent;
                                        var4 = var4.layout;
                                        var4 = var4.width;
                                        var3 = var5 !== var4;
                                    case 202:
                                        var2 = var3;
                                    case 205:
                                        if (!var2) {
                                            _fun45985_ip = 340;
                                            continue _fun45985
                                        }
                                    case 211:
                                        var2 = _closure3_slot0;
                                        var3 = var2._dim;
                                        var2 = var1.nativeEvent;
                                        var2 = var2.layout;
                                        var2 = var2.height;
                                        var3.height = var2;
                                        var2 = _closure3_slot0;
                                        var2 = var2._dim;
                                        var1 = var1.nativeEvent;
                                        var1 = var1.layout;
                                        var1 = var1.width;
                                        var2.width = var1;
                                        var1 = _closure3_slot0;
                                        var1 = var1.props;
                                        var1 = var1.onSizeChanged;
                                        if (!var1) {
                                            _fun45985_ip = 340;
                                            continue _fun45985
                                        }
                                    case 295:
                                        var1 = _closure3_slot0;
                                        var4 = var1.props;
                                        var3 = var4.onSizeChanged;
                                        var1 = _closure3_slot0;
                                        var2 = var1._dim;
                                        var1 = _closure3_slot0;
                                        var1 = var1.props;
                                        var1 = var1.index;
                                        var1 = var3.bind(var4)(var2, var1);
                                    case 340:
                                        var1 = _closure3_slot0;
                                        var1 = var1.props;
                                        var1 = var1.onItemLayout;
                                        if (!var1) {
                                            _fun45985_ip = 392;
                                            continue _fun45985
                                        }
                                    case 358:
                                        var1 = _closure3_slot0;
                                        var2 = var1.props;
                                        var1 = var2.onItemLayout;
                                        var0 = _closure3_slot0;
                                        var0 = var0.props;
                                        var0 = var0.index;
                                        var0 = var1.bind(var2)(var0);
                                    case 392:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var0._onLayout = var2;
                            var2 = function() { // Environment: var1
                                _fun45986: for (var _fun45986_ip = 0;;) switch (_fun45986_ip) {
                                    case 0:
                                        var2 = _closure3_slot0;
                                        var2 = var2.props;
                                        var2 = var2.forceNonDeterministicRendering;
                                        if (!var2) {
                                            _fun45986_ip = 76;
                                            continue _fun45986
                                        }
                                    case 23:
                                        var4 = _closure1_slot2;
                                        var1 = _closure3_slot0;
                                        var2 = var1._dim;
                                        var3 = undefined;
                                        var1 = {};
                                        var1 = var4.bind(var3)(var1, var2);
                                        var _closure4_slot0 = var1;
                                        var1 = global;
                                        var2 = var1.setTimeout;
                                        var1 = function() { // Environment: var0
                                            var2 = _closure3_slot0;
                                            var1 = var2._forceSizeUpdate;
                                            var0 = _closure4_slot0;
                                            var0 = var1.bind(var2)(var0);
                                            var0 = undefined;
                                            return var0;
                                        };
                                        var0 = 32;
                                        var0 = var2.bind(var3)(var1, var0);
                                    case 76:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var0._scheduleForceSizeUpdateTimer = var2;
                            var1 = function(arg0) { // Environment: var1
                                _fun45988: for (var _fun45988_ip = 0;;) switch (_fun45988_ip) {
                                    case 0:
                                        var2 = arg0;
                                        var3 = var2.width;
                                        var1 = _closure3_slot0;
                                        var1 = var1._dim;
                                        var1 = var1.width;
                                        var1 = var3 === var1;
                                        if (!var1) {
                                            _fun45988_ip = 57;
                                            continue _fun45988
                                        }
                                    case 33:
                                        var3 = var2.height;
                                        var2 = _closure3_slot0;
                                        var2 = var2._dim;
                                        var2 = var2.height;
                                        var1 = var3 === var2;
                                    case 57:
                                        if (!var1) {
                                            _fun45988_ip = 70;
                                            continue _fun45988
                                        }
                                    case 60:
                                        var2 = _closure3_slot0;
                                        var1 = var2.isRendererMounted;
                                    case 70:
                                        if (!var1) {
                                            _fun45988_ip = 88;
                                            continue _fun45988
                                        }
                                    case 73:
                                        var2 = _closure3_slot0;
                                        var2 = var2.props;
                                        var1 = var2.onSizeChanged;
                                    case 88:
                                        if (!var1) {
                                            _fun45988_ip = 136;
                                            continue _fun45988
                                        }
                                    case 91:
                                        var1 = _closure3_slot0;
                                        var3 = var1.props;
                                        var2 = var3.onSizeChanged;
                                        var1 = _closure3_slot0;
                                        var1 = var1._dim;
                                        var0 = _closure3_slot0;
                                        var0 = var0.props;
                                        var0 = var0.index;
                                        var0 = var2.bind(var3)(var1, var0);
                                    case 136:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var0._forceSizeUpdate = var1;
                            return var0;
                    }
                };
                var3 = _closure1_slot1;
                var2 = undefined;
                var2 = var3.bind(var2)(var0, var4);
                var3 = var0.prototype;
                var2 = function() { // Environment: var1
                    _fun45989: for (var _fun45989_ip = 0;;) switch (_fun45989_ip) {
                        case 0:
                            var4 = this;
                            var0 = var4.props;
                            var0 = var0.forceNonDeterministicRendering;
                            if (var0) {
                                _fun45989_ip = 145;
                                continue _fun45989
                            }
                        case 20:
                            var3 = {};
                            var0 = var4._setRef;
                            var3.ref = var0;
                            var5 = _closure1_slot2;
                            var1 = {};
                            var0 = var4.props;
                            var0 = var0.x;
                            var1.left = var0;
                            var0 = 'absolute';
                            var1.position = var0;
                            var0 = var4.props;
                            var0 = var0.y;
                            var1.top = var0;
                            var0 = var4.props;
                            var0 = var0.height;
                            var1.height = var0;
                            var0 = var4.props;
                            var0 = var0.width;
                            var1.width = var0;
                            var0 = var4.props;
                            var0 = var0.styleOverrides;
                            var2 = undefined;
                            var1 = var5.bind(var2)(var1, var0);
                            var0 = var4.animatorStyleOverrides;
                            var0 = var5.bind(var2)(var1, var0);
                            var3.style = var0;
                            _fun45989_ip = 277;
                            continue _fun45989;
                        case 145:
                            var0 = {};
                            var1 = var4._setRef;
                            var0.ref = var1;
                            var1 = var4._onLayout;
                            var0.onLayout = var1;
                            var6 = _closure1_slot2;
                            var2 = {};
                            var1 = var4.props;
                            var5 = var1.isHorizontal;
                            var1 = 'row';
                            if (!var5) {
                                _fun45989_ip = 199;
                                continue _fun45989
                            }
                        case 195:
                            var1 = 'column';
                        case 199:
                            var2.flexDirection = var1;
                            var1 = var4.props;
                            var1 = var1.x;
                            var2.left = var1;
                            var1 = 'absolute';
                            var2.position = var1;
                            var1 = var4.props;
                            var1 = var1.y;
                            var2.top = var1;
                            var1 = var4.props;
                            var1 = var1.styleOverrides;
                            var5 = undefined;
                            var2 = var6.bind(var5)(var2, var1);
                            var1 = var4.animatorStyleOverrides;
                            var1 = var6.bind(var5)(var2, var1);
                            var0.style = var1;
                            var3 = var0;
                        case 277:
                            var2 = var4._renderItemContainer;
                            var1 = var4.props;
                            var0 = var4.renderChild;
                            var0 = var0.bind(var4)();
                            var0 = var2.bind(var4)(var3, var1, var0);
                            return var0;
                    }
                };
                var3.renderCompat = var2;
                var3 = var0.prototype;
                var2 = function() { // Environment: var1
                    _fun45990: for (var _fun45990_ip = 0;;) switch (_fun45990_ip) {
                        case 0:
                            var1 = this;
                            var0 = _closure2_slot0;
                            var0 = var0.prototype;
                            var2 = var0.componentDidUpdate;
                            var0 = var2.call;
                            var0 = var0.bind(var2)(var1);
                            var0 = var1.props;
                            var0 = var0.layoutProvider;
                            if (!var0) {
                                _fun45990_ip = 51;
                                continue _fun45990
                            }
                        case 45:
                            var0 = var1._layoutManagerRef;
                        case 51:
                            if (!var0) {
                                _fun45990_ip = 85;
                                continue _fun45990
                            }
                        case 54:
                            var2 = var1.props;
                            var3 = var2.layoutProvider;
                            var2 = var3.getLayoutManager;
                            var3 = var2.bind(var3)();
                            var2 = var1._layoutManagerRef;
                            var0 = var3 !== var2;
                        case 85:
                            if (!var0) {
                                _fun45990_ip = 125;
                                continue _fun45990
                            }
                        case 88:
                            var0 = var1.props;
                            var2 = var0.layoutProvider;
                            var0 = var2.getLayoutManager;
                            var0 = var0.bind(var2)();
                            var1._layoutManagerRef = var0;
                            var0 = var1._scheduleForceSizeUpdateTimer;
                            var0 = var0.bind(var1)();
                        case 125:
                            var0 = undefined;
                            return var0;
                    }
                };
                var3.componentDidUpdate = var2;
                var3 = var0.prototype;
                var2 = function() { // Environment: var1
                    _fun45991: for (var _fun45991_ip = 0;;) switch (_fun45991_ip) {
                        case 0:
                            var1 = this;
                            var0 = _closure2_slot0;
                            var0 = var0.prototype;
                            var2 = var0.componentDidMount;
                            var0 = var2.call;
                            var0 = var0.bind(var2)(var1);
                            var0 = var1.props;
                            var0 = var0.layoutProvider;
                            if (!var0) {
                                _fun45991_ip = 72;
                                continue _fun45991
                            }
                        case 45:
                            var0 = var1.props;
                            var2 = var0.layoutProvider;
                            var0 = var2.getLayoutManager;
                            var0 = var0.bind(var2)();
                            var1._layoutManagerRef = var0;
                        case 72:
                            var0 = undefined;
                            return var0;
                    }
                };
                var3.componentDidMount = var2;
                var3 = var0.prototype;
                var2 = function() { // Environment: var1
                    var0 = this;
                    var0 = var0._viewRef;
                    return var0;
                };
                var3.getRef = var2;
                var2 = var0.prototype;
                var1 = function(arg0, arg1, arg2) { // Environment: var1
                    _fun45993: for (var _fun45993_ip = 0;;) switch (_fun45993_ip) {
                        case 0:
                            var8 = arg0;
                            var5 = arg2;
                            var1 = this;
                            var0 = var1.props;
                            var0 = var0.renderItemContainer;
                            if (!var0) {
                                _fun45993_ip = 44;
                                continue _fun45993
                            }
                        case 23:
                            var3 = var1.props;
                            var2 = var3.renderItemContainer;
                            var1 = arg1;
                            var0 = var2.bind(var3)(var8, var1, var5);
                        case 44:
                            if (var0) {
                                _fun45993_ip = 90;
                                continue _fun45993
                            }
                        case 47:
                            var4 = _closure1_slot3;
                            var3 = var4.createElement;
                            var2 = _closure1_slot4;
                            var2 = var2.View;
                            var7 = _closure1_slot2;
                            var6 = undefined;
                            var1 = {};
                            var1 = var7.bind(var6)(var1, var8);
                            var0 = var3.bind(var4)(var2, var1, var5);
                        case 90:
                            return var0;
                    }
                };
                var2._renderItemContainer = var1;
                return var0;
            };
            var1 = var1.bind(var0)(var3);
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 5123]);