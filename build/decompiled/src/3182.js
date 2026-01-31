// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun27803: for (var _fun27803_ip = 0;;) switch (_fun27803_ip) {
        case 0:
            var3 = global;
            var5 = require;
            var6 = dependencyMap;
            var7 = function(arg0) { // Original name: _interopDefaultLegacy, environment: var1
                _fun27804: for (var _fun27804_ip = 0;;) switch (_fun27804_ip) {
                    case 0:
                        var2 = arg0;
                        if (!var2) {
                            _fun27804_ip = 31;
                            continue _fun27804
                        }
                    case 6:
                        var1 = 'object';
                        var0 = typeof var2;
                        if (!(var1 === var0)) {
                            _fun27804_ip = 31;
                            continue _fun27804
                        }
                    case 17:
                        var0 = 'default';
                        var1 = var0 in var2;
                        var0 = var2;
                        if (var1) {
                            _fun27804_ip = 40;
                            continue _fun27804
                        }
                    case 31:
                        var1 = {};
                        var1.default = var2;
                        var0 = var1;
                    case 40:
                        return var0;
                }
            };
            var0 = 0;
            var2 = var6[var0];
            var0 = undefined;
            var2 = var5.bind(var0)(var2);
            var _closure1_slot0 = var2;
            var4 = 1;
            var4 = var6[var4];
            var4 = var5.bind(var0)(var4);
            var2 = var7.bind(var0)(var2);
            var4 = var7.bind(var0)(var4);
            var _closure1_slot1 = var4;
            var4 = 2;
            var4 = var6[var4];
            var4 = var5.bind(var0)(var4);
            var4 = var7.bind(var0)(var4);
            var _closure1_slot2 = var4;
            var4 = 3;
            var4 = var6[var4];
            var4 = var5.bind(var0)(var4);
            var4 = global;
            var5 = var4.globalThis;
            var6 = 'undefined';
            var5 = typeof var5;
            if (!(var6 === var5)) {
                _fun27803_ip = 139;
                continue _fun27803
            }
        case 111:
            var5 = var4.window;
            var5 = typeof var5;
            if (!(var6 === var5)) {
                _fun27803_ip = 131;
                continue _fun27803
            }
        case 123:
            if (!(var0 === var3)) {
                _fun27803_ip = 129;
                continue _fun27803
            }
        case 127:
            var3 = {};
        case 129:
            _fun27803_ip = 137;
            continue _fun27803;
        case 131:
            var3 = var4.window;
        case 137:
            _fun27803_ip = 145;
            continue _fun27803;
        case 139:
            var3 = var4.globalThis;
        case 145:
            var _closure1_slot3 = var3;
            var2 = var2.default;
            var2 = var2.createContext;
            if (var2) {
                _fun27803_ip = 168;
                continue _fun27803
            }
        case 163:
            var2 = function(arg0, arg1) { // Original name: createReactContext, environment: var1
                _fun27805: for (var _fun27805_ip = 0;;) switch (_fun27805_ip) {
                    case 0:
                        var1 = arg0;
                        var _closure2_slot0 = var1;
                        var1 = arg1;
                        var _closure2_slot1 = var1;
                        var1 = _closure1_slot3;
                        var4 = var1.__global_unique_id__;
                        if (var4) {
                            _fun27805_ip = 34;
                            continue _fun27805
                        }
                    case 32:
                        var4 = 0;
                    case 34:
                        var2 = 1;
                        var2 = var4 + var2;
                        var1.__global_unique_id__ = var2;
                        var1 = '__create-react-context-';
                        var2 = var1 + var2;
                        var1 = '__';
                        var4 = var2 + var1;
                        var _closure2_slot2 = var4;
                        var1 = _closure1_slot0;
                        var6 = var1.Component;
                        var2 = function(arg0) { // Environment: var0
                            var4 = arg0;
                            var _closure3_slot0 = var4;
                            var0 = function() { // Original name: Provider, environment: var1
                                _fun27807: for (var _fun27807_ip = 0;;) switch (_fun27807_ip) {
                                    case 0:
                                        var1 = this;
                                        var3 = undefined;
                                        var0 = undefined;
                                        var4 = _closure3_slot0;
                                        var2 = var4.apply;
                                        var0 = arguments;
                                        var0 = var2.bind(var4)(var1, var0);
                                        if (var0) {
                                            _fun27807_ip = 33;
                                            continue _fun27807
                                        }
                                    case 30:
                                        var0 = var1;
                                    case 33:
                                        var1 = var0.props;
                                        var2 = var1.value;
                                        var1 = function(arg0) { // Original name: createEventEmitter, environment: var1
                                            var0 = arg0;
                                            var _closure5_slot0 = var0;
                                            var0 = new Array(0);
                                            var _closure5_slot1 = var0;
                                            var0 = {};
                                            var2 = function(arg0) { // Original name: on, environment: var1
                                                var2 = _closure5_slot1;
                                                var1 = var2.push;
                                                var0 = arg0;
                                                var0 = var1.bind(var2)(var0);
                                                var0 = undefined;
                                                return var0;
                                            };
                                            var0.on = var2;
                                            var2 = function(arg0) { // Original name: off, environment: var1
                                                var1 = arg0;
                                                var _closure6_slot0 = var1;
                                                var3 = _closure5_slot1;
                                                var2 = var3.filter;
                                                var0 = function(arg0) { // Environment: var0
                                                    var1 = _closure6_slot0;
                                                    var0 = arg0;
                                                    var0 = var0 !== var1;
                                                    return var0;
                                                };
                                                var0 = var2.bind(var3)(var0);
                                                _closure5_slot1 = var0;
                                                var0 = undefined;
                                                return var0;
                                            };
                                            var0.off = var2;
                                            var2 = function() { // Original name: get, environment: var1
                                                var0 = _closure5_slot0;
                                                return var0;
                                            };
                                            var0.get = var2;
                                            var1 = function(arg0, arg1) { // Original name: set, environment: var1
                                                var1 = arg1;
                                                var _closure6_slot0 = var1;
                                                var2 = arg0;
                                                _closure5_slot0 = var2;
                                                var2 = _closure5_slot1;
                                                var1 = var2.forEach;
                                                var0 = function(arg0) { // Environment: var0
                                                    var3 = _closure5_slot0;
                                                    var2 = _closure6_slot0;
                                                    var1 = arg0;
                                                    var0 = undefined;
                                                    var0 = var1.bind(var0)(var3, var2);
                                                    return var0;
                                                };
                                                var0 = var1.bind(var2)(var0);
                                                var0 = undefined;
                                                return var0;
                                            };
                                            var0.set = var1;
                                            return var0;
                                        };
                                        var1 = var1.bind(var3)(var2);
                                        var0.emitter = var1;
                                        return var0;
                                }
                            };
                            var3 = _closure1_slot1;
                            var2 = var3.default;
                            var2 = var2.bind(var3)(var0, var4);
                            var2 = var0.prototype;
                            var3 = function() { // Original name: getChildContext, environment: var1
                                var0 = {};
                                var2 = _closure2_slot2;
                                var1 = this;
                                var1 = var1.emitter;
                                var0[var2] = var1;
                                return var0;
                            };
                            var2.getChildContext = var3;
                            var3 = function(arg0) { // Original name: componentWillReceiveProps, environment: var1
                                _fun27816: for (var _fun27816_ip = 0;;) switch (_fun27816_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var1 = this;
                                        var2 = var1.props;
                                        var3 = var2.value;
                                        var2 = var0.value;
                                        if (!(var3 !== var2)) {
                                            _fun27816_ip = 157;
                                            continue _fun27816
                                        }
                                    case 28:
                                        var2 = var1.props;
                                        var6 = var2.value;
                                        var5 = var0.value;
                                        if (!(var6 !== var5)) {
                                            _fun27816_ip = 60;
                                            continue _fun27816
                                        }
                                    case 47:
                                        var2 = var6 != var6;
                                        if (!var2) {
                                            _fun27816_ip = 58;
                                            continue _fun27816
                                        }
                                    case 54:
                                        var2 = var5 != var5;
                                    case 58:
                                        _fun27816_ip = 87;
                                        continue _fun27816;
                                    case 60:
                                        var3 = 0;
                                        var3 = var3 !== var6;
                                        if (var3) {
                                            _fun27816_ip = 84;
                                            continue _fun27816
                                        }
                                    case 69:
                                        var4 = 1;
                                        var7 = var4 / var6;
                                        var4 = var4 / var5;
                                        var3 = var7 === var4;
                                    case 84:
                                        var2 = var3;
                                    case 87:
                                        if (var2) {
                                            _fun27816_ip = 157;
                                            continue _fun27816
                                        }
                                    case 90:
                                        var4 = _closure2_slot1;
                                        var2 = 1073741823;
                                        var7 = 'function';
                                        var4 = typeof var4;
                                        if (!(var7 === var4)) {
                                            _fun27816_ip = 126;
                                            continue _fun27816
                                        }
                                    case 114:
                                        var4 = _closure2_slot1;
                                        var3 = undefined;
                                        var2 = var4.bind(var3)(var6, var5);
                                    case 126:
                                        var3 = var2 | 0;
                                        var2 = 0;
                                        if (!(var2 !== var3)) {
                                            _fun27816_ip = 157;
                                            continue _fun27816
                                        }
                                    case 135:
                                        var2 = var1.emitter;
                                        var1 = var2.set;
                                        var0 = var0.value;
                                        var0 = var1.bind(var2)(var0, var3);
                                    case 157:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var2.componentWillReceiveProps = var3;
                            var1 = function() { // Original name: render, environment: var1
                                var0 = this;
                                var0 = var0.props;
                                var0 = var0.children;
                                return var0;
                            };
                            var2.render = var1;
                            return var0;
                        };
                        var5 = undefined;
                        var2 = var2.bind(var5)(var6);
                        var6 = {};
                        var3 = _closure1_slot2;
                        var7 = var3.default;
                        var7 = var7.object;
                        var7 = var7.isRequired;
                        var6[var4] = var7;
                        var2.childContextTypes = var6;
                        var1 = var1.Component;
                        var0 = function(arg0) { // Environment: var0
                            var4 = arg0;
                            var _closure3_slot0 = var4;
                            var0 = function() { // Original name: Consumer, environment: var1
                                _fun27819: for (var _fun27819_ip = 0;;) switch (_fun27819_ip) {
                                    case 0:
                                        var2 = this;
                                        var0 = undefined;
                                        var4 = _closure3_slot0;
                                        var3 = var4.apply;
                                        var0 = arguments;
                                        var0 = var3.bind(var4)(var2, var0);
                                        if (var0) {
                                            _fun27819_ip = 33;
                                            continue _fun27819
                                        }
                                    case 30:
                                        var0 = var2;
                                    case 33:
                                        var _closure4_slot0 = var0;
                                        var2 = {};
                                        var3 = var0.getValue;
                                        var3 = var3.bind(var0)();
                                        var2.value = var3;
                                        var0.state = var2;
                                        var1 = function(arg0, arg1) { // Environment: var1
                                            _fun27820: for (var _fun27820_ip = 0;;) switch (_fun27820_ip) {
                                                case 0:
                                                    var0 = _closure4_slot0;
                                                    var0 = var0.observedBits;
                                                    var1 = var0 | 0;
                                                    var0 = arg1;
                                                    var0 = var1 & var0;
                                                    if (!var0) {
                                                        _fun27820_ip = 61;
                                                        continue _fun27820
                                                    }
                                                case 26:
                                                    var2 = _closure4_slot0;
                                                    var1 = var2.setState;
                                                    var0 = {};
                                                    var4 = _closure4_slot0;
                                                    var3 = var4.getValue;
                                                    var3 = var3.bind(var4)();
                                                    var0.value = var3;
                                                    var0 = var1.bind(var2)(var0);
                                                case 61:
                                                    var0 = undefined;
                                                    return var0;
                                            }
                                        };
                                        var0.onUpdate = var1;
                                        return var0;
                                }
                            };
                            var3 = _closure1_slot1;
                            var2 = var3.default;
                            var2 = var2.bind(var3)(var0, var4);
                            var2 = var0.prototype;
                            var3 = function(arg0) { // Original name: componentWillReceiveProps, environment: var1
                                _fun27821: for (var _fun27821_ip = 0;;) switch (_fun27821_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var1 = var0.observedBits;
                                        var0 = null;
                                        if (!(var0 == var1)) {
                                            _fun27821_ip = 21;
                                            continue _fun27821
                                        }
                                    case 15:
                                        var1 = 1073741823;
                                    case 21:
                                        var0 = this;
                                        var0.observedBits = var1;
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var2.componentWillReceiveProps = var3;
                            var3 = function() { // Original name: componentDidMount, environment: var1
                                _fun27822: for (var _fun27822_ip = 0;;) switch (_fun27822_ip) {
                                    case 0:
                                        var1 = this;
                                        var3 = var1.context;
                                        var2 = _closure2_slot2;
                                        var2 = var3[var2];
                                        if (!var2) {
                                            _fun27822_ip = 52;
                                            continue _fun27822
                                        }
                                    case 22:
                                        var2 = var1.context;
                                        var0 = _closure2_slot2;
                                        var3 = var2[var0];
                                        var2 = var3.on;
                                        var0 = var1.onUpdate;
                                        var0 = var2.bind(var3)(var0);
                                    case 52:
                                        var0 = var1.props;
                                        var0 = var0.observedBits;
                                        var2 = null;
                                        if (!(var2 == var0)) {
                                            _fun27822_ip = 75;
                                            continue _fun27822
                                        }
                                    case 69:
                                        var0 = 1073741823;
                                    case 75:
                                        var1.observedBits = var0;
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var2.componentDidMount = var3;
                            var3 = function() { // Original name: componentWillUnmount, environment: var1
                                _fun27823: for (var _fun27823_ip = 0;;) switch (_fun27823_ip) {
                                    case 0:
                                        var0 = this;
                                        var3 = var0.context;
                                        var2 = _closure2_slot2;
                                        var2 = var3[var2];
                                        if (!var2) {
                                            _fun27823_ip = 52;
                                            continue _fun27823
                                        }
                                    case 22:
                                        var2 = var0.context;
                                        var1 = _closure2_slot2;
                                        var2 = var2[var1];
                                        var1 = var2.off;
                                        var0 = var0.onUpdate;
                                        var0 = var1.bind(var2)(var0);
                                    case 52:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var2.componentWillUnmount = var3;
                            var3 = function() { // Original name: getValue, environment: var1
                                _fun27824: for (var _fun27824_ip = 0;;) switch (_fun27824_ip) {
                                    case 0:
                                        var2 = this;
                                        var3 = var2.context;
                                        var0 = _closure2_slot2;
                                        var0 = var3[var0];
                                        if (var0) {
                                            _fun27824_ip = 28;
                                            continue _fun27824
                                        }
                                    case 22:
                                        var0 = _closure2_slot0;
                                        _fun27824_ip = 50;
                                        continue _fun27824;
                                    case 28:
                                        var2 = var2.context;
                                        var1 = _closure2_slot2;
                                        var2 = var2[var1];
                                        var1 = var2.get;
                                        var0 = var1.bind(var2)();
                                    case 50:
                                        return var0;
                                }
                            };
                            var2.getValue = var3;
                            var1 = function() { // Original name: render, environment: var1
                                _fun27825: for (var _fun27825_ip = 0;;) switch (_fun27825_ip) {
                                    case 0:
                                        var0 = this;
                                        var1 = var0.props;
                                        var3 = var1.children;
                                        var1 = global;
                                        var2 = var1.Array;
                                        var1 = var2.isArray;
                                        var1 = var1.bind(var2)(var3);
                                        var2 = var3;
                                        if (!var1) {
                                            _fun27825_ip = 43;
                                            continue _fun27825
                                        }
                                    case 37:
                                        var1 = 0;
                                        var2 = var3[var1];
                                    case 43:
                                        var0 = var0.state;
                                        var1 = var0.value;
                                        var0 = undefined;
                                        var0 = var2.bind(var0)(var1);
                                        return var0;
                                }
                            };
                            var2.render = var1;
                            return var0;
                        };
                        var1 = var0.bind(var5)(var1);
                        var0 = {};
                        var3 = var3.default;
                        var3 = var3.object;
                        var0[var4] = var3;
                        var1.contextTypes = var0;
                        var0 = {};
                        var0.Provider = var2;
                        var0.Consumer = var1;
                        return var0;
                }
            };
        case 168:
            var1 = arg4;
            var1.exports = var2;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 3183, 3179, 1227]);