// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun29764: for (var _fun29764_ip = 0;;) switch (_fun29764_ip) {
        case 0:
            var4 = require;
            var2 = exports;
            var5 = dependencyMap;
            var _closure1_slot0 = var4;
            var _closure1_slot1 = var5;
            var3 = function arg0() {
                _fun29765: for (var _fun29765_ip = 0;;) switch (_fun29765_ip) {
                    case 0:
                        var1 = arg0;
                        var0 = var1;
                        if (!var1) {
                            _fun29765_ip = 42;
                            continue _fun29765
                        }
                    case 9:
                        var3 = 'object';
                        var2 = typeof var1;
                        var0 = var1;
                        if (!(var3 === var2)) {
                            _fun29765_ip = 42;
                            continue _fun29765
                        }
                    case 23:
                        var2 = 'default';
                        var2 = var2 in var1;
                        var0 = var1;
                        if (!var2) {
                            _fun29765_ip = 42;
                            continue _fun29765
                        }
                    case 37:
                        var0 = var1.default;
                    case 42:
                        return var0;
                }
            };
            var0 = function() {
                _fun29766: for (var _fun29766_ip = 0;;) switch (_fun29766_ip) {
                    case 0:
                        var0 = undefined;
                        var1 = global;
                        var1 = var1.Object;
                        var3 = var1.assign;
                        if (var3) {
                            _fun29766_ip = 25;
                            continue _fun29766
                        }
                    case 18:
                        var3 = function(arg0) { // Environment: var1
                            _fun29767: for (var _fun29767_ip = 0;;) switch (_fun29767_ip) {
                                case 0:
                                    var0 = arg0;
                                    var5 = undefined;
                                    var1 = arguments.length;
                                    var3 = 1;
                                    var1 = var3 < var1;
                                    var2 = global;
                                    var4 = undefined;
                                    if (!var1) {
                                        _fun29767_ip = 115;
                                        continue _fun29767
                                    }
                                case 22:
                                    var11 = arguments[var3];
                                    var9 = var11;
                                    var1 = var4;
                                    var4 = var1;
                                    for (var6 in var9)
                                        case 43: {
                                            var4 = var1;
                                            case 55: var12 = var6;
                                            var13 = var2.Object;
                                            var13 = var13.prototype;
                                            var14 = var13.hasOwnProperty;
                                            var13 = var14.call;
                                            var13 = var13.bind(var14)(var11, var12);
                                            var1 = var12;
                                            if (!var13) {
                                                _fun29767_ip = 43;
                                                continue _fun29767
                                            }
                                            case 92: var13 = var11[var12];
                                            var0[var12] = var13;
                                            var1 = var12;
                                            _fun29767_ip = 43;
                                            continue _fun29767;
                                        }
                                case 105:
                                    var3 = var3 + 1;
                                    var1 = arguments.length;
                                    if (var3 < var1) {
                                        _fun29767_ip = 22;
                                        continue _fun29767
                                    }
                                case 115:
                                    return var0;
                            }
                        };
                    case 25:
                        _closure1_slot12 = var3;
                        var2 = var3.apply;
                        var0 = arguments;
                        var1 = var0;
                        var0 = this;
                        var0 = var2.bind(var3)(var0, var1);
                        return var0;
                }
            };
            var _closure1_slot12 = var0;
            var0 = function arg0, arg1() {
                var1 = arg0;
                var0 = arg1;
                var2 = global;
                var4 = var2.Object;
                var3 = var4.create;
                var2 = var0.prototype;
                var2 = var3.bind(var4)(var2);
                var1.prototype = var2;
                var2 = var1.prototype;
                var2.constructor = var1;
                var1.__proto__ = var0;
                var0 = undefined;
                return var0;
            };
            var _closure1_slot13 = var0;
            var0 = function arg0, arg1() {
                _fun29769: for (var _fun29769_ip = 0;;) switch (_fun29769_ip) {
                    case 0:
                        var6 = arg0;
                        var5 = arg1;
                        var0 = null;
                        if (!(var0 != var6)) {
                            _fun29769_ip = 89;
                            continue _fun29769
                        }
                    case 12:
                        var0 = {};
                        var1 = global;
                        var2 = var1.Object;
                        var1 = var2.keys;
                        var4 = var1.bind(var2)(var6);
                        var1 = var4.length;
                        var3 = 0;
                        var1 = var3 < var1;
                        var2 = 0;
                        if (!var1) {
                            _fun29769_ip = 87;
                            continue _fun29769
                        }
                    case 48:
                        var7 = var4[var2];
                        var1 = var5.indexOf;
                        var1 = var1.bind(var5)(var7);
                        if (!(!(var3 <= var1))) {
                            _fun29769_ip = 75;
                            continue _fun29769
                        }
                    case 67:
                        var1 = var6[var7];
                        var0[var7] = var1;
                    case 75:
                        var2 = var2 + 1;
                        var1 = var4.length;
                        if (var2 < var1) {
                            _fun29769_ip = 48;
                            continue _fun29769
                        }
                    case 87:
                        return var0;
                    case 89:
                        var0 = {};
                        return var0;
                }
            };
            var _closure1_slot14 = var0;
            var7 = global;
            var9 = var7.Object;
            var8 = var9.defineProperty;
            var1 = {};
            var10 = true;
            var1.value = var10;
            var0 = '__esModule';
            var0 = var8.bind(var9)(var2, var0, var1);
            var0 = 0;
            var1 = var5[var0];
            var0 = undefined;
            var1 = var4.bind(var0)(var1);
            var8 = var3.bind(var0)(var1);
            var _closure1_slot2 = var8;
            var1 = 1;
            var1 = var5[var1];
            var1 = var4.bind(var0)(var1);
            var1 = 2;
            var1 = var5[var1];
            var1 = var4.bind(var0)(var1);
            var1 = 3;
            var1 = var5[var1];
            var1 = var4.bind(var0)(var1);
            var1 = var3.bind(var0)(var1);
            var _closure1_slot3 = var1;
            var3 = var8.Component;
            var1 = function(arg0) { // Environment: var6
                var4 = arg0;
                var _closure2_slot0 = var4;
                var0 = function() {
                    _fun29771: for (var _fun29771_ip = 0;;) switch (_fun29771_ip) {
                        case 0:
                            var1 = this;
                            var3 = undefined;
                            var4 = undefined;
                            var2 = arguments.length;
                            var0 = global;
                            var0 = var0.Array;
                            var5 = var0.prototype;
                            var5 = Object.create(var5, {
                                constructor: {
                                    value: var0
                                }
                            });
                            var10 = var5;
                            var9 = var2;
                            var0 = new var10[var0](var9, var8);
                            var7 = var0 instanceof Object ? var0 : var5;
                            var0 = 0;
                            var5 = var0 < var2;
                            if (!var5) {
                                _fun29771_ip = 65;
                                continue _fun29771
                            }
                        case 50:
                            var5 = arguments[var0];
                            var7[var0] = var5;
                            var0 = var0 + 1;
                            if (var0 < var2) {
                                _fun29771_ip = 50;
                                continue _fun29771
                            }
                        case 65:
                            var5 = _closure2_slot0;
                            var4 = var5.call;
                            var2 = var4.apply;
                            var6 = new Array(1);
                            var6[0] = var1;
                            var0 = var6.concat;
                            var0 = var0.bind(var6)(var7);
                            var0 = var2.bind(var4)(var5, var0);
                            if (var0) {
                                _fun29771_ip = 112;
                                continue _fun29771
                            }
                        case 109:
                            var0 = var1;
                        case 112:
                            var2 = _closure1_slot0;
                            var4 = _closure1_slot1;
                            var1 = 4;
                            var1 = var4[var1];
                            var3 = var2.bind(var3)(var1);
                            var2 = var3.createBrowserHistory;
                            var1 = var0.props;
                            var1 = var2.bind(var3)(var1);
                            var0.history = var1;
                            return var0;
                    }
                };
                var3 = _closure1_slot13;
                var2 = undefined;
                var2 = var3.bind(var2)(var0, var4);
                var2 = var0.prototype;
                var1 = function() { // Environment: var1
                    var4 = this;
                    var3 = _closure1_slot2;
                    var2 = var3.createElement;
                    var5 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 5;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var5.bind(var0)(var1);
                    var1 = var0.Router;
                    var0 = {};
                    var5 = var4.history;
                    var0.history = var5;
                    var4 = var4.props;
                    var4 = var4.children;
                    var0.children = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var2.render = var1;
                return var0;
            };
            var5 = var1.bind(var0)(var3);
            var3 = var8.Component;
            var1 = function(arg0) { // Environment: var6
                var4 = arg0;
                var _closure2_slot0 = var4;
                var0 = function() {
                    _fun29774: for (var _fun29774_ip = 0;;) switch (_fun29774_ip) {
                        case 0:
                            var1 = this;
                            var3 = undefined;
                            var4 = undefined;
                            var2 = arguments.length;
                            var0 = global;
                            var0 = var0.Array;
                            var5 = var0.prototype;
                            var5 = Object.create(var5, {
                                constructor: {
                                    value: var0
                                }
                            });
                            var10 = var5;
                            var9 = var2;
                            var0 = new var10[var0](var9, var8);
                            var7 = var0 instanceof Object ? var0 : var5;
                            var0 = 0;
                            var5 = var0 < var2;
                            if (!var5) {
                                _fun29774_ip = 65;
                                continue _fun29774
                            }
                        case 50:
                            var5 = arguments[var0];
                            var7[var0] = var5;
                            var0 = var0 + 1;
                            if (var0 < var2) {
                                _fun29774_ip = 50;
                                continue _fun29774
                            }
                        case 65:
                            var5 = _closure2_slot0;
                            var4 = var5.call;
                            var2 = var4.apply;
                            var6 = new Array(1);
                            var6[0] = var1;
                            var0 = var6.concat;
                            var0 = var0.bind(var6)(var7);
                            var0 = var2.bind(var4)(var5, var0);
                            if (var0) {
                                _fun29774_ip = 112;
                                continue _fun29774
                            }
                        case 109:
                            var0 = var1;
                        case 112:
                            var2 = _closure1_slot0;
                            var4 = _closure1_slot1;
                            var1 = 4;
                            var1 = var4[var1];
                            var3 = var2.bind(var3)(var1);
                            var2 = var3.createHashHistory;
                            var1 = var0.props;
                            var1 = var2.bind(var3)(var1);
                            var0.history = var1;
                            return var0;
                    }
                };
                var3 = _closure1_slot13;
                var2 = undefined;
                var2 = var3.bind(var2)(var0, var4);
                var2 = var0.prototype;
                var1 = function() { // Environment: var1
                    var4 = this;
                    var3 = _closure1_slot2;
                    var2 = var3.createElement;
                    var5 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 5;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var5.bind(var0)(var1);
                    var1 = var0.Router;
                    var0 = {};
                    var5 = var4.history;
                    var0.history = var5;
                    var4 = var4.props;
                    var4 = var4.children;
                    var0.children = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var2.render = var1;
                return var0;
            };
            var4 = var1.bind(var0)(var3);
            var1 = function arg0, arg1() {
                _fun29776: for (var _fun29776_ip = 0;;) switch (_fun29776_ip) {
                    case 0:
                        var3 = arg0;
                        var2 = 'function';
                        var1 = typeof var3;
                        var0 = var3;
                        if (!(var2 === var1)) {
                            _fun29776_ip = 27;
                            continue _fun29776
                        }
                    case 17:
                        var2 = undefined;
                        var1 = arg1;
                        var0 = var3.bind(var2)(var1);
                    case 27:
                        return var0;
                }
            };
            var _closure1_slot4 = var1;
            var1 = function arg0, arg1() {
                _fun29777: for (var _fun29777_ip = 0;;) switch (_fun29777_ip) {
                    case 0:
                        var5 = arg0;
                        var2 = 'string';
                        var1 = typeof var5;
                        var0 = var5;
                        if (!(var2 === var1)) {
                            _fun29777_ip = 65;
                            continue _fun29777
                        }
                    case 17:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var1 = 4;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.createLocation;
                        var6 = arg1;
                        var10 = var4;
                        var9 = var5;
                        var8 = null;
                        var7 = null;
                        var0 = var10[var3](var9, var8, var7, var6, var5);
                    case 65:
                        return var0;
                }
            };
            var _closure1_slot5 = var1;
            var1 = function arg0() {
                var0 = arg0;
                return var0;
            };
            var _closure1_slot6 = var1;
            var3 = var8.forwardRef;
            var _closure1_slot7 = var3;
            if (!(var0 === var3)) {
                _fun29764_ip = 230;
                continue _fun29764
            }
        case 223:
            _closure1_slot7 = var1;
            var3 = var1;
        case 230:
            var1 = function(arg0, arg1) { // Environment: var6
                _fun29779: for (var _fun29779_ip = 0;;) switch (_fun29779_ip) {
                    case 0:
                        var6 = arg0;
                        var4 = arg1;
                        var2 = var6.innerRef;
                        var0 = var6.navigate;
                        var _closure2_slot0 = var0;
                        var0 = var6.onClick;
                        var _closure2_slot1 = var0;
                        var5 = _closure1_slot14;
                        var7 = undefined;
                        var3 = ['innerRef', 'navigate', 'onClick'];
                        var6 = var5.bind(var7)(var6, var3);
                        var3 = var6.target;
                        var _closure2_slot2 = var3;
                        var5 = _closure1_slot12;
                        var3 = {};
                        var1 = function arg0() {
                            _fun29780: for (var _fun29780_ip = 0;;) switch (_fun29780_ip) {
                                case 0:
                                    var1 = arg0;
                                case 3: // try_start_0
                                    var2 = _closure2_slot1;
                                    if (!var2) {
                                        _fun29780_ip = 27;
                                        continue _fun29780
                                    }
                                case 13:
                                    var4 = _closure2_slot1;
                                    var3 = var1;
                                    var2 = undefined;
                                    var2 = var4.bind(var2)(var3);
                                case 27: // try_end0
                                    var5 = var1;
                                    var5 = var5.defaultPrevented;
                                    var4 = var5;
                                    if (var5) {
                                        _fun29780_ip = 57;
                                        continue _fun29780
                                    }
                                case 42:
                                    var5 = var1;
                                    var6 = var5.button;
                                    var5 = 0;
                                    var4 = var5 !== var6;
                                case 57:
                                    var3 = var4;
                                    if (var4) {
                                        _fun29780_ip = 90;
                                        continue _fun29780
                                    }
                                case 63:
                                    var5 = _closure2_slot2;
                                    var4 = var5;
                                    if (!var5) {
                                        _fun29780_ip = 87;
                                        continue _fun29780
                                    }
                                case 73:
                                    var6 = _closure2_slot2;
                                    var5 = '_self';
                                    var4 = var5 !== var6;
                                case 87:
                                    var3 = var4;
                                case 90:
                                    var2 = var3;
                                    if (var3) {
                                        _fun29780_ip = 138;
                                        continue _fun29780
                                    }
                                case 96:
                                    var4 = var1;
                                    var3 = var4.metaKey;
                                    if (var3) {
                                        _fun29780_ip = 114;
                                        continue _fun29780
                                    }
                                case 108:
                                    var3 = var4.altKey;
                                case 114:
                                    if (var3) {
                                        _fun29780_ip = 123;
                                        continue _fun29780
                                    }
                                case 117:
                                    var3 = var4.ctrlKey;
                                case 123:
                                    if (var3) {
                                        _fun29780_ip = 132;
                                        continue _fun29780
                                    }
                                case 126:
                                    var3 = var4.shiftKey;
                                case 132:
                                    var3 = !var3;
                                    var2 = !var3;
                                case 138:
                                    if (var2) {
                                        _fun29780_ip = 164;
                                        continue _fun29780
                                    }
                                case 141:
                                    var3 = var1;
                                    var2 = var3.preventDefault;
                                    var2 = var2.bind(var3)();
                                    var2 = _closure2_slot0;
                                    var0 = undefined;
                                    var0 = var2.bind(var0)();
                                case 164:
                                    var0 = undefined;
                                    return var0;
                                case 168: // catch_target0
                                    CatchBlockStart(arg_register = 0);
                                    var2 = var1;
                                    var1 = var2.preventDefault;
                                    var1 = var1.bind(var2)();
                                    throw var0;
                            }
                        };
                        var3.onClick = var1;
                        var1 = {};
                        var3 = var5.bind(var7)(var1, var6, var3);
                        var5 = _closure1_slot6;
                        var1 = _closure1_slot7;
                        var1 = var5 !== var1;
                        if (!var1) {
                            _fun29779_ip = 112;
                            continue _fun29779
                        }
                    case 109:
                        var1 = var4;
                    case 112:
                        if (var1) {
                            _fun29779_ip = 118;
                            continue _fun29779
                        }
                    case 115:
                        var1 = var2;
                    case 118:
                        var3.ref = var1;
                        var2 = _closure1_slot2;
                        var1 = var2.createElement;
                        var0 = 'a';
                        var0 = var1.bind(var2)(var0, var3);
                        return var0;
                }
            };
            var1 = var3.bind(var0)(var1);
            var _closure1_slot8 = var1;
            var1 = function(arg0, arg1) { // Environment: var6
                _fun29781: for (var _fun29781_ip = 0;;) switch (_fun29781_ip) {
                    case 0:
                        var4 = arg0;
                        var1 = arg1;
                        var _closure2_slot0 = var1;
                        var1 = var4.component;
                        var5 = undefined;
                        if (!(var5 === var1)) {
                            _fun29781_ip = 31;
                            continue _fun29781
                        }
                    case 24:
                        var1 = _closure1_slot8;
                    case 31:
                        var _closure2_slot1 = var1;
                        var1 = var4.replace;
                        var _closure2_slot2 = var1;
                        var1 = var4.to;
                        var _closure2_slot3 = var1;
                        var1 = var4.innerRef;
                        var _closure2_slot4 = var1;
                        var3 = _closure1_slot14;
                        var2 = ['component', 'replace', 'to', 'innerRef'];
                        var2 = var3.bind(var5)(var4, var2);
                        var _closure2_slot5 = var2;
                        var4 = _closure1_slot2;
                        var3 = var4.createElement;
                        var2 = _closure1_slot0;
                        var6 = _closure1_slot1;
                        var1 = 5;
                        var1 = var6[var1];
                        var1 = var2.bind(var5)(var1);
                        var1 = var1.__RouterContext;
                        var2 = var1.Consumer;
                        var1 = null;
                        var0 = function(arg0) { // Environment: var0
                            _fun29782: for (var _fun29782_ip = 0;;) switch (_fun29782_ip) {
                                case 0:
                                    var3 = arg0;
                                    var _closure3_slot0 = var3;
                                    if (var3) {
                                        _fun29782_ip = 28;
                                        continue _fun29782
                                    }
                                case 12:
                                    var4 = _closure1_slot3;
                                    var1 = undefined;
                                    var0 = false;
                                    var0 = var4.bind(var1)(var0);
                                case 28:
                                    var5 = var3.history;
                                    var _closure3_slot1 = var5;
                                    var7 = _closure1_slot5;
                                    var9 = _closure1_slot4;
                                    var8 = _closure2_slot3;
                                    var4 = var3.location;
                                    var6 = undefined;
                                    var4 = var9.bind(var6)(var8, var4);
                                    var3 = var3.location;
                                    var4 = var7.bind(var6)(var4, var3);
                                    var7 = '';
                                    if (!var4) {
                                        _fun29782_ip = 98;
                                        continue _fun29782
                                    }
                                case 87:
                                    var3 = var5.createHref;
                                    var7 = var3.bind(var5)(var4);
                                case 98:
                                    var5 = _closure1_slot12;
                                    var4 = _closure2_slot5;
                                    var3 = {};
                                    var3.href = var7;
                                    var2 = function() {
                                        _fun29783: for (var _fun29783_ip = 0;;) switch (_fun29783_ip) {
                                            case 0:
                                                var5 = _closure1_slot4;
                                                var4 = _closure2_slot3;
                                                var0 = _closure3_slot0;
                                                var2 = var0.location;
                                                var0 = undefined;
                                                var2 = var5.bind(var0)(var4, var2);
                                                var1 = _closure2_slot2;
                                                var3 = _closure3_slot1;
                                                if (var1) {
                                                    _fun29783_ip = 52;
                                                    continue _fun29783
                                                }
                                            case 45:
                                                var1 = var3.push;
                                                _fun29783_ip = 57;
                                                continue _fun29783;
                                            case 52:
                                                var1 = var3.replace;
                                            case 57:
                                                var1 = var1.bind(var0)(var2);
                                                return var0;
                                        }
                                    };
                                    var3.navigate = var2;
                                    var2 = {};
                                    var3 = var5.bind(var6)(var2, var4, var3);
                                    var4 = _closure1_slot6;
                                    var2 = _closure1_slot7;
                                    if (!(var4 === var2)) {
                                        _fun29782_ip = 156;
                                        continue _fun29782
                                    }
                                case 144:
                                    var2 = _closure2_slot4;
                                    var3.innerRef = var2;
                                    _fun29782_ip = 173;
                                    continue _fun29782;
                                case 156:
                                    var2 = _closure2_slot0;
                                    if (var2) {
                                        _fun29782_ip = 167;
                                        continue _fun29782
                                    }
                                case 163:
                                    var2 = _closure2_slot4;
                                case 167:
                                    var3.ref = var2;
                                case 173:
                                    var2 = _closure1_slot2;
                                    var1 = var2.createElement;
                                    var0 = _closure2_slot1;
                                    var0 = var1.bind(var2)(var0, var3);
                                    return var0;
                            }
                        };
                        var0 = var3.bind(var4)(var2, var1, var0);
                        return var0;
                }
            };
            var3 = var3.bind(var0)(var1);
            var _closure1_slot9 = var3;
            var1 = function arg0() {
                var0 = arg0;
                return var0;
            };
            var _closure1_slot10 = var1;
            var8 = var8.forwardRef;
            var _closure1_slot11 = var8;
            if (!(var0 === var8)) {
                _fun29764_ip = 288;
                continue _fun29764
            }
        case 281:
            _closure1_slot11 = var1;
            var8 = var1;
        case 288:
            var1 = function(arg0, arg1) { // Environment: var6
                _fun29785: for (var _fun29785_ip = 0;;) switch (_fun29785_ip) {
                    case 0:
                        var4 = arg0;
                        var1 = arg1;
                        var _closure2_slot0 = var1;
                        var2 = var4["aria-current"];
                        var1 = 'page';
                        var5 = undefined;
                        if (!(var5 !== var2)) {
                            _fun29785_ip = 31;
                            continue _fun29785
                        }
                    case 28:
                        var1 = var2;
                    case 31:
                        var _closure2_slot1 = var1;
                        var2 = var4.activeClassName;
                        var1 = 'active';
                        if (!(var5 !== var2)) {
                            _fun29785_ip = 54;
                            continue _fun29785
                        }
                    case 51:
                        var1 = var2;
                    case 54:
                        var _closure2_slot2 = var1;
                        var1 = var4.activeStyle;
                        var _closure2_slot3 = var1;
                        var1 = var4.className;
                        var _closure2_slot4 = var1;
                        var1 = var4.exact;
                        var _closure2_slot5 = var1;
                        var1 = var4.isActive;
                        var _closure2_slot6 = var1;
                        var1 = var4.location;
                        var _closure2_slot7 = var1;
                        var1 = var4.sensitive;
                        var _closure2_slot8 = var1;
                        var1 = var4.strict;
                        var _closure2_slot9 = var1;
                        var1 = var4.style;
                        var _closure2_slot10 = var1;
                        var1 = var4.to;
                        var _closure2_slot11 = var1;
                        var1 = var4.innerRef;
                        var _closure2_slot12 = var1;
                        var3 = _closure1_slot14;
                        var2 = ['aria-current', 'activeClassName', 'activeStyle', 'className', 'exact', 'isActive', 'location', 'sensitive', 'strict', 'style', 'to', 'innerRef'];
                        var2 = var3.bind(var5)(var4, var2);
                        var _closure2_slot13 = var2;
                        var4 = _closure1_slot2;
                        var3 = var4.createElement;
                        var2 = _closure1_slot0;
                        var6 = _closure1_slot1;
                        var1 = 5;
                        var1 = var6[var1];
                        var1 = var2.bind(var5)(var1);
                        var1 = var1.__RouterContext;
                        var2 = var1.Consumer;
                        var1 = null;
                        var0 = function(arg0) { // Environment: var0
                            _fun29786: for (var _fun29786_ip = 0;;) switch (_fun29786_ip) {
                                case 0:
                                    var0 = arg0;
                                    if (var0) {
                                        _fun29786_ip = 22;
                                        continue _fun29786
                                    }
                                case 6:
                                    var3 = _closure1_slot3;
                                    var2 = undefined;
                                    var1 = false;
                                    var1 = var3.bind(var2)(var1);
                                case 22:
                                    var3 = _closure2_slot7;
                                    if (var3) {
                                        _fun29786_ip = 37;
                                        continue _fun29786
                                    }
                                case 32:
                                    var3 = var0.location;
                                case 37:
                                    var4 = _closure1_slot5;
                                    var6 = _closure1_slot4;
                                    var1 = _closure2_slot11;
                                    var5 = undefined;
                                    var1 = var6.bind(var5)(var1, var3);
                                    var1 = var4.bind(var5)(var1, var3);
                                    var8 = var1.pathname;
                                    var7 = var3;
                                    var11 = var8;
                                    if (!var11) {
                                        _fun29786_ip = 112;
                                        continue _fun29786
                                    }
                                case 81:
                                    var6 = var8.replace;
                                    var4 = /([.+*?=^!:${}()[\]|\/\\])/g;
                                    var3 = '\\$1';
                                    var11 = var6.bind(var8)(var4, var3);
                                case 112:
                                    var6 = null;
                                    if (!var11) {
                                        _fun29786_ip = 189;
                                        continue _fun29786
                                    }
                                case 117:
                                    var4 = _closure1_slot0;
                                    var8 = _closure1_slot1;
                                    var3 = 5;
                                    var3 = var8[var3];
                                    var10 = var4.bind(var5)(var3);
                                    var8 = var10.matchPath;
                                    var4 = var7.pathname;
                                    var3 = {};
                                    var3.path = var11;
                                    var11 = _closure2_slot5;
                                    var3.exact = var11;
                                    var11 = _closure2_slot8;
                                    var3.sensitive = var11;
                                    var11 = _closure2_slot9;
                                    var3.strict = var11;
                                    var6 = var8.bind(var10)(var4, var3);
                                case 189:
                                    var4 = _closure2_slot6;
                                    var3 = var6;
                                    if (!var4) {
                                        _fun29786_ip = 209;
                                        continue _fun29786
                                    }
                                case 199:
                                    var4 = _closure2_slot6;
                                    var3 = var4.bind(var5)(var6, var7);
                                case 209:
                                    var10 = !var3;
                                    var8 = !var10;
                                    var3 = _closure2_slot4;
                                    if (var10) {
                                        _fun29786_ip = 241;
                                        continue _fun29786
                                    }
                                case 222:
                                    var6 = _closure2_slot2;
                                    var4 = function() {
                                        _fun29787: for (var _fun29787_ip = 0;;) switch (_fun29787_ip) {
                                            case 0:
                                                var3 = undefined;
                                                var1 = arguments.length;
                                                var0 = global;
                                                var0 = var0.Array;
                                                var2 = var0.prototype;
                                                var2 = Object.create(var2, {
                                                    constructor: {
                                                        value: var0
                                                    }
                                                });
                                                var6 = var2;
                                                var5 = var1;
                                                var0 = new var6[var0](var5, var4);
                                                var2 = var0 instanceof Object ? var0 : var2;
                                                var0 = 0;
                                                var4 = var0 < var1;
                                                if (!var4) {
                                                    _fun29787_ip = 60;
                                                    continue _fun29787
                                                }
                                            case 45:
                                                var4 = arguments[var0];
                                                var2[var0] = var4;
                                                var0 = var0 + 1;
                                                if (var0 < var1) {
                                                    _fun29787_ip = 45;
                                                    continue _fun29787
                                                }
                                            case 60:
                                                var1 = var2.filter;
                                                var0 = function(arg0) { // Environment: var0
                                                    var0 = arg0;
                                                    return var0;
                                                };
                                                var2 = var1.bind(var2)(var0);
                                                var1 = var2.join;
                                                var0 = ' ';
                                                var0 = var1.bind(var2)(var0);
                                                return var0;
                                        }
                                    };
                                    var7 = var4.bind(var5)(var3, var6);
                                    _fun29786_ip = 244;
                                    continue _fun29786;
                                case 241:
                                    var7 = var3;
                                case 244:
                                    if (var10) {
                                        _fun29786_ip = 271;
                                        continue _fun29786
                                    }
                                case 247:
                                    var12 = _closure1_slot12;
                                    var15 = _closure2_slot10;
                                    var13 = _closure2_slot3;
                                    var16 = {};
                                    var14 = {};
                                    var17 = undefined;
                                    var6 = var17[var12](var16, var15, var14, var13, var12);
                                    _fun29786_ip = 275;
                                    continue _fun29786;
                                case 271:
                                    var6 = _closure2_slot10;
                                case 275:
                                    var4 = _closure1_slot12;
                                    var3 = {};
                                    if (var10) {
                                        _fun29786_ip = 288;
                                        continue _fun29786
                                    }
                                case 284:
                                    var8 = _closure2_slot1;
                                case 288:
                                    if (var8) {
                                        _fun29786_ip = 293;
                                        continue _fun29786
                                    }
                                case 291:
                                    var8 = null;
                                case 293:
                                    var3['aria-current'] = var8;
                                    var3.className = var7;
                                    var3.style = var6;
                                    var3.to = var1;
                                    var1 = _closure2_slot13;
                                    var3 = var4.bind(var5)(var3, var1);
                                    var4 = _closure1_slot10;
                                    var1 = _closure1_slot11;
                                    if (!(var4 === var1)) {
                                        _fun29786_ip = 345;
                                        continue _fun29786
                                    }
                                case 333:
                                    var1 = _closure2_slot12;
                                    var3.innerRef = var1;
                                    _fun29786_ip = 362;
                                    continue _fun29786;
                                case 345:
                                    var1 = _closure2_slot0;
                                    if (var1) {
                                        _fun29786_ip = 356;
                                        continue _fun29786
                                    }
                                case 352:
                                    var1 = _closure2_slot12;
                                case 356:
                                    var3.ref = var1;
                                case 362:
                                    var2 = _closure1_slot2;
                                    var1 = var2.createElement;
                                    var0 = _closure1_slot9;
                                    var0 = var1.bind(var2)(var0, var3);
                                    return var0;
                            }
                        };
                        var0 = var3.bind(var4)(var2, var1, var0);
                        return var0;
                }
            };
            var1 = var8.bind(var0)(var1);
            var12 = var7.Object;
            var11 = var12.defineProperty;
            var9 = {};
            var9.enumerable = var10;
            var8 = function() {
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 5;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.MemoryRouter;
                return var0;
            };
            var9.get = var8;
            var8 = 'MemoryRouter';
            var8 = var11.bind(var12)(var2, var8, var9);
            var12 = var7.Object;
            var11 = var12.defineProperty;
            var9 = {};
            var9.enumerable = var10;
            var8 = function() {
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 5;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.Prompt;
                return var0;
            };
            var9.get = var8;
            var8 = 'Prompt';
            var8 = var11.bind(var12)(var2, var8, var9);
            var12 = var7.Object;
            var11 = var12.defineProperty;
            var9 = {};
            var9.enumerable = var10;
            var8 = function() {
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 5;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.Redirect;
                return var0;
            };
            var9.get = var8;
            var8 = 'Redirect';
            var8 = var11.bind(var12)(var2, var8, var9);
            var12 = var7.Object;
            var11 = var12.defineProperty;
            var9 = {};
            var9.enumerable = var10;
            var8 = function() {
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 5;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.Route;
                return var0;
            };
            var9.get = var8;
            var8 = 'Route';
            var8 = var11.bind(var12)(var2, var8, var9);
            var12 = var7.Object;
            var11 = var12.defineProperty;
            var9 = {};
            var9.enumerable = var10;
            var8 = function() {
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 5;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.Router;
                return var0;
            };
            var9.get = var8;
            var8 = 'Router';
            var8 = var11.bind(var12)(var2, var8, var9);
            var12 = var7.Object;
            var11 = var12.defineProperty;
            var9 = {};
            var9.enumerable = var10;
            var8 = function() {
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 5;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.StaticRouter;
                return var0;
            };
            var9.get = var8;
            var8 = 'StaticRouter';
            var8 = var11.bind(var12)(var2, var8, var9);
            var12 = var7.Object;
            var11 = var12.defineProperty;
            var9 = {};
            var9.enumerable = var10;
            var8 = function() {
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 5;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.Switch;
                return var0;
            };
            var9.get = var8;
            var8 = 'Switch';
            var8 = var11.bind(var12)(var2, var8, var9);
            var12 = var7.Object;
            var11 = var12.defineProperty;
            var9 = {};
            var9.enumerable = var10;
            var8 = function() {
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 5;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.generatePath;
                return var0;
            };
            var9.get = var8;
            var8 = 'generatePath';
            var8 = var11.bind(var12)(var2, var8, var9);
            var12 = var7.Object;
            var11 = var12.defineProperty;
            var9 = {};
            var9.enumerable = var10;
            var8 = function() {
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 5;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.matchPath;
                return var0;
            };
            var9.get = var8;
            var8 = 'matchPath';
            var8 = var11.bind(var12)(var2, var8, var9);
            var12 = var7.Object;
            var11 = var12.defineProperty;
            var9 = {};
            var9.enumerable = var10;
            var8 = function() {
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 5;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.useHistory;
                return var0;
            };
            var9.get = var8;
            var8 = 'useHistory';
            var8 = var11.bind(var12)(var2, var8, var9);
            var12 = var7.Object;
            var11 = var12.defineProperty;
            var9 = {};
            var9.enumerable = var10;
            var8 = function() {
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 5;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.useLocation;
                return var0;
            };
            var9.get = var8;
            var8 = 'useLocation';
            var8 = var11.bind(var12)(var2, var8, var9);
            var12 = var7.Object;
            var11 = var12.defineProperty;
            var9 = {};
            var9.enumerable = var10;
            var8 = function() {
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 5;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.useParams;
                return var0;
            };
            var9.get = var8;
            var8 = 'useParams';
            var8 = var11.bind(var12)(var2, var8, var9);
            var12 = var7.Object;
            var11 = var12.defineProperty;
            var9 = {};
            var9.enumerable = var10;
            var8 = function() {
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 5;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.useRouteMatch;
                return var0;
            };
            var9.get = var8;
            var8 = 'useRouteMatch';
            var8 = var11.bind(var12)(var2, var8, var9);
            var9 = var7.Object;
            var8 = var9.defineProperty;
            var7 = {};
            var7.enumerable = var10;
            var6 = function() {
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 5;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.withRouter;
                return var0;
            };
            var7.get = var6;
            var6 = 'withRouter';
            var6 = var8.bind(var9)(var2, var6, var7);
            var2.BrowserRouter = var5;
            var2.HashRouter = var4;
            var2.Link = var3;
            var2.NavLink = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 3181, 1227, 1228, 1221, 3179]);