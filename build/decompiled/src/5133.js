// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun46091: for (var _fun46091_ip = 0;;) switch (_fun46091_ip) {
        case 0:
            var4 = require;
            var2 = exports;
            var3 = dependencyMap;
            var5 = this;
            var _closure1_slot0 = var4;
            var _closure1_slot1 = var3;
            var0 = var5;
            if (!var5) {
                _fun46091_ip = 34;
                continue _fun46091
            }
        case 28:
            var0 = var5.__extends;
        case 34:
            if (var0) {
                _fun46091_ip = 51;
                continue _fun46091
            }
        case 37:
            var6 = function arg0, arg1() {
                _fun46092: for (var _fun46092_ip = 0;;) switch (_fun46092_ip) {
                    case 0:
                        var1 = global;
                        var2 = var1.Object;
                        var3 = var2.setPrototypeOf;
                        if (var3) {
                            _fun46092_ip = 47;
                            continue _fun46092
                        }
                    case 19:
                        var2 = var1.Array;
                        var1 = new Array(0);
                        var1 = Object.create(var1);
                        var1 = var1 instanceof var2;
                        if (!var1) {
                            _fun46092_ip = 44;
                            continue _fun46092
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
                            _fun46092_ip = 55;
                            continue _fun46092
                        }
                    case 50:
                        var3 = function(arg0, arg1) { // Environment: var0
                            _fun46094: for (var _fun46094_ip = 0;;) switch (_fun46094_ip) {
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
                                                _fun46094_ip = 19;
                                                continue _fun46094
                                            }
                                            case 62: var8 = var6[var9];
                                            var7[var9] = var8;
                                            _fun46094_ip = 19;
                                            continue _fun46094;
                                        }
                                case 72:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                    case 55:
                        _closure1_slot2 = var3;
                        var2 = undefined;
                        var1 = arg0;
                        var0 = arg1;
                        var0 = var3.bind(var2)(var1, var0);
                        return var0;
                }
            };
            var _closure1_slot2 = var6;
            var0 = function(arg0, arg1) { // Environment: var1
                _fun46095: for (var _fun46095_ip = 0;;) switch (_fun46095_ip) {
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
                            _fun46095_ip = 34;
                            continue _fun46095
                        }
                    case 28:
                        var0 = null;
                        if (!(var0 === var3)) {
                            _fun46095_ip = 114;
                            continue _fun46095
                        }
                    case 34:
                        var4 = _closure1_slot2;
                        var0 = undefined;
                        var4 = var4.bind(var0)(var2, var3);
                        var4 = null;
                        if (!(var4 !== var3)) {
                            _fun46095_ip = 88;
                            continue _fun46095
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
                        _fun46095_ip = 106;
                        continue _fun46095;
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
        case 51:
            var _closure1_slot3 = var0;
            var0 = var5;
            if (!var0) {
                _fun46091_ip = 67;
                continue _fun46091
            }
        case 61:
            var0 = var5.__assign;
        case 67:
            if (var0) {
                _fun46091_ip = 75;
                continue _fun46091
            }
        case 70:
            var0 = function() { // Environment: var1
                _fun46097: for (var _fun46097_ip = 0;;) switch (_fun46097_ip) {
                    case 0:
                        var0 = undefined;
                        var1 = global;
                        var1 = var1.Object;
                        var3 = var1.assign;
                        if (var3) {
                            _fun46097_ip = 25;
                            continue _fun46097
                        }
                    case 18:
                        var3 = function(arg0) { // Environment: var1
                            _fun46098: for (var _fun46098_ip = 0;;) switch (_fun46098_ip) {
                                case 0:
                                    var0 = arg0;
                                    var5 = undefined;
                                    var3 = arguments.length;
                                    var2 = 1;
                                    var6 = var2 < var3;
                                    var1 = global;
                                    var4 = undefined;
                                    if (!var6) {
                                        _fun46098_ip = 112;
                                        continue _fun46098
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
                                                _fun46098_ip = 43;
                                                continue _fun46098
                                            }
                                            case 92: var14 = var8[var13];
                                            var0[var13] = var14;
                                            var6 = var13;
                                            _fun46098_ip = 43;
                                            continue _fun46098;
                                        }
                                case 105:
                                    var2 = var2 + 1;
                                    if (var2 < var3) {
                                        _fun46098_ip = 22;
                                        continue _fun46098
                                    }
                                case 112:
                                    return var0;
                            }
                        };
                    case 25:
                        _closure1_slot4 = var3;
                        var2 = var3.apply;
                        var0 = arguments;
                        var1 = var0;
                        var0 = this;
                        var0 = var2.bind(var3)(var0, var1);
                        return var0;
                }
            };
        case 75:
            var _closure1_slot4 = var0;
            var0 = global;
            var7 = var0.Object;
            var6 = var7.defineProperty;
            var5 = {};
            var0 = true;
            var5.value = var0;
            var0 = '__esModule';
            var0 = var6.bind(var7)(var2, var0, var5);
            var0 = 0;
            var3 = var3[var0];
            var0 = undefined;
            var3 = var4.bind(var0)(var3);
            var3 = var3.default;
            var1 = function(arg0) { // Environment: var1
                var5 = arg0;
                var _closure2_slot0 = var5;
                var0 = function() {
                    _fun46100: for (var _fun46100_ip = 0;;) switch (_fun46100_ip) {
                        case 0:
                            var1 = this;
                            var2 = undefined;
                            var4 = _closure2_slot0;
                            var0 = null;
                            var0 = var0 !== var4;
                            if (!var0) {
                                _fun46100_ip = 38;
                                continue _fun46100
                            }
                        case 21:
                            var4 = _closure2_slot0;
                            var3 = var4.apply;
                            var2 = arguments;
                            var0 = var3.bind(var4)(var1, var2);
                        case 38:
                            if (var0) {
                                _fun46100_ip = 44;
                                continue _fun46100
                            }
                        case 41:
                            var0 = var1;
                        case 44:
                            var1 = false;
                            var0.isFirstLayoutComplete = var1;
                            return var0;
                    }
                };
                var3 = _closure1_slot3;
                var4 = undefined;
                var3 = var3.bind(var4)(var0, var5);
                var5 = var0.prototype;
                var3 = function() { // Environment: var2
                    _fun46101: for (var _fun46101_ip = 0;;) switch (_fun46101_ip) {
                        case 0:
                            var2 = this;
                            var0 = _closure2_slot0;
                            var0 = var0.prototype;
                            var1 = var0.componentDidMount;
                            var0 = var1.call;
                            var0 = var0.bind(var1)(var2);
                            var0 = var2.props;
                            var0 = var0.forceNonDeterministicRendering;
                            if (var0) {
                                _fun46101_ip = 66;
                                continue _fun46101
                            }
                        case 45:
                            var1 = var2.updateRenderAheadProgressively;
                            var0 = var2.getCurrentRenderAheadOffset;
                            var0 = var0.bind(var2)();
                            var0 = var1.bind(var2)(var0);
                        case 66:
                            var0 = undefined;
                            return var0;
                    }
                };
                var5.componentDidMount = var3;
                var5 = var0.prototype;
                var3 = function() { // Environment: var2
                    var2 = this;
                    var0 = var2.cancelRenderAheadUpdate;
                    var0 = var0.bind(var2)();
                    var0 = _closure2_slot0;
                    var0 = var0.prototype;
                    var1 = var0.componentWillUnmount;
                    var0 = var1.call;
                    var0 = var0.bind(var1)(var2);
                    var0 = undefined;
                    return var0;
                };
                var5.componentWillUnmount = var3;
                var5 = var0.prototype;
                var3 = function(arg0) { // Environment: var2
                    _fun46103: for (var _fun46103_ip = 0;;) switch (_fun46103_ip) {
                        case 0:
                            var3 = this;
                            var0 = var3.isFirstLayoutComplete;
                            if (var0) {
                                _fun46103_ip = 55;
                                continue _fun46103
                            }
                        case 12:
                            var0 = true;
                            var3.isFirstLayoutComplete = var0;
                            var0 = var3.props;
                            var0 = var0.forceNonDeterministicRendering;
                            if (!var0) {
                                _fun46103_ip = 55;
                                continue _fun46103
                            }
                        case 34:
                            var1 = var3.updateRenderAheadProgressively;
                            var0 = var3.getCurrentRenderAheadOffset;
                            var0 = var0.bind(var3)();
                            var0 = var1.bind(var3)(var0);
                        case 55:
                            var0 = _closure2_slot0;
                            var0 = var0.prototype;
                            var2 = var0.onItemLayout;
                            var1 = var2.call;
                            var0 = arg0;
                            var0 = var1.bind(var2)(var3, var0);
                            var0 = undefined;
                            return var0;
                    }
                };
                var5.onItemLayout = var3;
                var5 = var0.prototype;
                var3 = function(arg0) { // Environment: var2
                    var2 = this;
                    var0 = arg0;
                    var _closure3_slot0 = var0;
                    var _closure3_slot1 = var2;
                    var0 = var2.cancelRenderAheadUpdate;
                    var0 = var0.bind(var2)();
                    var0 = global;
                    var3 = var0.requestAnimationFrame;
                    var0 = undefined;
                    var1 = function() { // Environment: var1
                        _fun46105: for (var _fun46105_ip = 0;;) switch (_fun46105_ip) {
                            case 0:
                                var3 = _closure3_slot1;
                                var2 = var3.updateRenderAheadOffset;
                                var1 = _closure3_slot0;
                                var2 = var2.bind(var3)(var1);
                                var1 = _closure3_slot1;
                                if (var2) {
                                    _fun46105_ip = 46;
                                    continue _fun46105
                                }
                            case 29:
                                var2 = var1.updateRenderAheadProgressively;
                                var0 = _closure3_slot0;
                                var0 = var2.bind(var1)(var0);
                                _fun46105_ip = 56;
                                continue _fun46105;
                            case 46:
                                var0 = var1.incrementRenderAhead;
                                var0 = var0.bind(var1)();
                            case 56:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var1 = var3.bind(var0)(var1);
                    var2.renderAheadUpdateCallbackId = var1;
                    return var0;
                };
                var5.updateRenderAheadProgressively = var3;
                var5 = var0.prototype;
                var3 = function() { // Environment: var2
                    _fun46106: for (var _fun46106_ip = 0;;) switch (_fun46106_ip) {
                        case 0:
                            var2 = this;
                            var0 = var2.props;
                            var0 = var0.maxRenderAhead;
                            if (!var0) {
                                _fun46106_ip = 163;
                                continue _fun46106
                            }
                        case 20:
                            var0 = var2.props;
                            var0 = var0.renderAheadStep;
                            if (!var0) {
                                _fun46106_ip = 163;
                                continue _fun46106
                            }
                        case 37:
                            var0 = var2.getVirtualRenderer;
                            var1 = var0.bind(var2)();
                            var0 = var1.getLayoutManager;
                            var3 = var0.bind(var1)();
                            var0 = var2.getCurrentRenderAheadOffset;
                            var1 = var0.bind(var2)();
                            if (!var3) {
                                _fun46106_ip = 163;
                                continue _fun46106
                            }
                        case 70:
                            var0 = var3.getContentDimension;
                            var3 = var0.bind(var3)();
                            var0 = var2.props;
                            var0 = var0.isHorizontal;
                            if (var0) {
                                _fun46106_ip = 101;
                                continue _fun46106
                            }
                        case 94:
                            var0 = var3.height;
                            _fun46106_ip = 106;
                            continue _fun46106;
                        case 101:
                            var0 = var3.width;
                        case 106:
                            if (!(var1 < var0)) {
                                _fun46106_ip = 125;
                                continue _fun46106
                            }
                        case 110:
                            var0 = var2.props;
                            var0 = var0.maxRenderAhead;
                            if (!(!(var1 < var0))) {
                                _fun46106_ip = 137;
                                continue _fun46106
                            }
                        case 125:
                            var0 = var2.performFinalUpdate;
                            var0 = var0.bind(var2)();
                            _fun46106_ip = 163;
                            continue _fun46106;
                        case 137:
                            var0 = var2.props;
                            var0 = var0.renderAheadStep;
                            var1 = var1 + var0;
                            var0 = var2.updateRenderAheadProgressively;
                            var0 = var0.bind(var2)(var1);
                        case 163:
                            var0 = undefined;
                            return var0;
                    }
                };
                var5.incrementRenderAhead = var3;
                var5 = var0.prototype;
                var3 = function() { // Environment: var2
                    var2 = this;
                    var _closure3_slot0 = var2;
                    var0 = var2.cancelRenderAheadUpdate;
                    var0 = var0.bind(var2)();
                    var0 = global;
                    var3 = var0.requestAnimationFrame;
                    var0 = undefined;
                    var1 = function() { // Environment: var1
                        _fun46108: for (var _fun46108_ip = 0;;) switch (_fun46108_ip) {
                            case 0:
                                var0 = _closure3_slot0;
                                var0 = var0.props;
                                var2 = var0.finalRenderAheadOffset;
                                var0 = undefined;
                                if (!(var0 !== var2)) {
                                    _fun46108_ip = 50;
                                    continue _fun46108
                                }
                            case 24:
                                var3 = _closure3_slot0;
                                var2 = var3.updateRenderAheadOffset;
                                var1 = var3.props;
                                var1 = var1.finalRenderAheadOffset;
                                var1 = var2.bind(var3)(var1);
                            case 50:
                                return var0;
                        }
                    };
                    var1 = var3.bind(var0)(var1);
                    var2.renderAheadUpdateCallbackId = var1;
                    return var0;
                };
                var5.performFinalUpdate = var3;
                var3 = var0.prototype;
                var2 = function() { // Environment: var2
                    _fun46109: for (var _fun46109_ip = 0;;) switch (_fun46109_ip) {
                        case 0:
                            var1 = this;
                            var2 = var1.renderAheadUpdateCallbackId;
                            var0 = undefined;
                            if (!(var0 !== var2)) {
                                _fun46109_ip = 34;
                                continue _fun46109
                            }
                        case 15:
                            var2 = global;
                            var2 = var2.cancelAnimationFrame;
                            var1 = var1.renderAheadUpdateCallbackId;
                            var1 = var2.bind(var0)(var1);
                        case 34:
                            return var0;
                    }
                };
                var3.cancelRenderAheadUpdate = var2;
                var3 = _closure1_slot4;
                var2 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 0;
                var1 = var5[var1];
                var1 = var2.bind(var4)(var1);
                var1 = var1.default;
                var2 = var1.defaultProps;
                var1 = {};
                var2 = var3.bind(var4)(var1, var2);
                var1 = {
                    'maxRenderAhead': null,
                    'renderAheadStep': 300,
                    'renderAheadOffset': 0
                };
                var5 = global;
                var5 = var5.Number;
                var5 = var5.MAX_VALUE;
                var1.maxRenderAhead = var5;
                var1 = var3.bind(var4)(var2, var1);
                var0.defaultProps = var1;
                return var0;
            };
            var1 = var1.bind(var0)(var3);
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [5118]);