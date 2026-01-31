// ../discord_common/js/packages/flux/connectStores.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function arg0, arg1, arg2() {
        _fun7133: for (var _fun7133_ip = 0;;) switch (_fun7133_ip) {
            case 0:
                var3 = arg0;
                var5 = arg2;
                var1 = _closure1_slot6;
                var2 = undefined;
                var0 = arg1;
                var8 = var1.bind(var2)(var0);
                var1 = _closure1_slot5;
                var0 = _closure1_slot11;
                var0 = var0.bind(var2)();
                if (var0) {
                    _fun7133_ip = 51;
                    continue _fun7133
                }
            case 38:
                var0 = var8.apply;
                var0 = var0.bind(var8)(var3, var5);
                _fun7133_ip = 92;
                continue _fun7133;
            case 51:
                var6 = global;
                var7 = var6.Reflect;
                var6 = var7.construct;
                if (var5) {
                    _fun7133_ip = 71;
                    continue _fun7133
                }
            case 67:
                var5 = new Array(0);
            case 71:
                var4 = _closure1_slot6;
                var4 = var4.bind(var2)(var3);
                var4 = var4.constructor;
                var0 = var6.bind(var7)(var8, var5, var4);
            case 92:
                var0 = var1.bind(var2)(var3, var0);
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var0 = function() {
        _fun7134: for (var _fun7134_ip = 0;;) switch (_fun7134_ip) {
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
                _fun7134_ip = 74;
                continue _fun7134;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
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
    var0 = function arg0() {
        _fun7137: for (var _fun7137_ip = 0;;) switch (_fun7137_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.displayName;
                var0 = null;
                if (!(var0 == var1)) {
                    _fun7137_ip = 19;
                    continue _fun7137
                }
            case 14:
                var1 = var2.name;
            case 19:
                var2 = var0 != var1;
                var0 = '<Unknown>';
                if (!var2) {
                    _fun7137_ip = 35;
                    continue _fun7137
                }
            case 32:
                var0 = var1;
            case 35:
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var _closure2_slot0 = var0;
        var0 = null;
        var _closure2_slot1 = var0;
        var _closure2_slot2 = var0;
        var2 = function arg0() {
            _fun7139: for (var _fun7139_ip = 0;;) switch (_fun7139_ip) {
                case 0:
                    var2 = arg0;
                    var0 = _closure2_slot1;
                    var4 = null;
                    if (!(var4 != var0)) {
                        _fun7139_ip = 62;
                        continue _fun7139
                    }
                case 16:
                    var0 = _closure2_slot2;
                    if (!(var4 != var0)) {
                        _fun7139_ip = 62;
                        continue _fun7139
                    }
                case 24:
                    var3 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var0 = 9;
                    var0 = var5[var0];
                    var5 = undefined;
                    var3 = var3.bind(var5)(var0);
                    var0 = _closure2_slot1;
                    var0 = var3.bind(var5)(var0, var2);
                    if (var0) {
                        _fun7139_ip = 138;
                        continue _fun7139
                    }
                case 62:
                    var0 = _closure2_slot1;
                    var3 = var4 != var0;
                    var0 = null;
                    if (!var3) {
                        _fun7139_ip = 136;
                        continue _fun7139
                    }
                case 75:
                    var3 = _closure2_slot2;
                    var3 = var4 != var3;
                    var0 = null;
                    if (!var3) {
                        _fun7139_ip = 136;
                        continue _fun7139
                    }
                case 88:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 9;
                    var3 = var6[var3];
                    var6 = undefined;
                    var5 = var5.bind(var6)(var3);
                    var3 = _closure2_slot1;
                    var3 = var5.bind(var6)(var3, var2);
                    var0 = null;
                    if (!var3) {
                        _fun7139_ip = 136;
                        continue _fun7139
                    }
                case 128:
                    _closure2_slot1 = var2;
                    var0 = _closure2_slot2;
                case 136:
                    _fun7139_ip = 142;
                    continue _fun7139;
                case 138:
                    var0 = _closure2_slot2;
                case 142:
                    return var0;
            }
        };
        var _closure2_slot3 = var2;
        var0 = function arg0() {
            _fun7140: for (var _fun7140_ip = 0;;) switch (_fun7140_ip) {
                case 0:
                    var4 = arg0;
                    var0 = _closure2_slot3;
                    var3 = undefined;
                    var0 = var0.bind(var3)(var4);
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun7140_ip = 43;
                        continue _fun7140
                    }
                case 23:
                    var1 = _closure2_slot0;
                    _closure2_slot1 = var4;
                    var1 = var1.bind(var3)(var4);
                    _closure2_slot2 = var1;
                    var0 = var1;
                case 43:
                    return var0;
            }
        };
        var0.getCachedResult = var2;
        var1 = function() { // Environment: var1
            var0 = null;
            _closure2_slot1 = var0;
            _closure2_slot2 = var0;
            var0 = undefined;
            return var0;
        };
        var0.clear = var1;
        return var0;
    };
    var _closure1_slot13 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 6;
    var6 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot8 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot9 = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = '../discord_common/js/packages/flux/connectStores.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1, arg2() {
        _fun7142: for (var _fun7142_ip = 0;;) switch (_fun7142_ip) {
            case 0:
                var4 = arg0;
                var3 = arg1;
                var0 = arg2;
                var2 = null;
                if (!(var2 != var0)) {
                    _fun7142_ip = 26;
                    continue _fun7142
                }
            case 17:
                var0 = var0.forwardRef;
                if (var0) {
                    _fun7142_ip = 41;
                    continue _fun7142
                }
            case 26:
                var2 = function arg0, arg1() {
                    var1 = arg0;
                    var _closure3_slot0 = var1;
                    var1 = arg1;
                    var _closure3_slot1 = var1;
                    var0 = function(arg0) { // Environment: var0
                        var4 = arg0;
                        var _closure4_slot0 = var4;
                        var1 = _closure1_slot12;
                        var3 = undefined;
                        var6 = var1.bind(var3)(var4);
                        var1 = global;
                        var1 = var1.HermesInternal;
                        var5 = var1.concat;
                        var4 = 'FluxContainer(';
                        var1 = ')';
                        var1 = var5.bind(var4)(var6, var1);
                        var _closure4_slot1 = var1;
                        var2 = _closure1_slot8;
                        var2 = var2.Component;
                        var0 = function(arg0) { // Environment: var0
                            var3 = function arg0() {
                                var6 = this;
                                var11 = 0;
                                var7 = copyRestArgs(var11);
                                var0 = _closure1_slot3;
                                var4 = _closure5_slot0;
                                var5 = undefined;
                                var0 = var0.bind(var5)(var6, var4);
                                var2 = _closure1_slot10;
                                var0 = new Array(0);
                                var11 = var0;
                                var10 = var7;
                                var9 = 0;
                                var7 = arraySpread(var11, var10, var9);
                                var0 = var2.bind(var5)(var6, var4, var0);
                                var _closure6_slot0 = var0;
                                var6 = _closure1_slot13;
                                var4 = _closure3_slot1;
                                var4 = var6.bind(var5)(var4);
                                var0.memoizedGetStateFromStores = var4;
                                var4 = _closure1_slot0;
                                var6 = _closure1_slot2;
                                var3 = 8;
                                var3 = var6[var3];
                                var3 = var4.bind(var5)(var3);
                                var4 = var3.BatchedStoreListener;
                                var11 = _closure3_slot0;
                                var2 = var4.prototype;
                                var2 = Object.create(var2, {
                                    constructor: {
                                        value: var4
                                    }
                                });
                                var10 = function() { // Environment: var1
                                    _fun7156: for (var _fun7156_ip = 0;;) switch (_fun7156_ip) {
                                        case 0:
                                            var1 = _closure6_slot0;
                                            var3 = var1.memoizedGetStateFromStores;
                                            var2 = var3.getCachedResult;
                                            var1 = var1.props;
                                            var5 = var2.bind(var3)(var1);
                                            var1 = null;
                                            var1 = var1 != var5;
                                            if (!var1) {
                                                _fun7156_ip = 105;
                                                continue _fun7156
                                            }
                                        case 38:
                                            var7 = _closure6_slot0;
                                            var3 = var7.memoizedGetStateFromStores;
                                            var2 = var3.clear;
                                            var2 = var2.bind(var3)();
                                            var3 = _closure1_slot1;
                                            var4 = _closure1_slot2;
                                            var2 = 9;
                                            var2 = var4[var2];
                                            var4 = undefined;
                                            var3 = var3.bind(var4)(var2);
                                            var6 = var7.memoizedGetStateFromStores;
                                            var2 = var7.props;
                                            var2 = var6.bind(var7)(var2);
                                            var1 = var3.bind(var4)(var2, var5);
                                        case 105:
                                            if (var1) {
                                                _fun7156_ip = 122;
                                                continue _fun7156
                                            }
                                        case 108:
                                            var1 = _closure6_slot0;
                                            var0 = var1.forceUpdate;
                                            var0 = var0.bind(var1)();
                                        case 122:
                                            var0 = undefined;
                                            return var0;
                                    }
                                };
                                var12 = var2;
                                var1 = new var12[var4](var11, var10, var9);
                                var1 = var1 instanceof Object ? var1 : var2;
                                var0.listener = var1;
                                return var0;
                            };
                            var _closure5_slot0 = var3;
                            var4 = _closure1_slot7;
                            var2 = undefined;
                            var1 = arg0;
                            var1 = var4.bind(var2)(var3, var1);
                            var1 = _closure1_slot4;
                            var4 = {};
                            var0 = 'componentDidMount';
                            var4.key = var0;
                            var0 = function() {
                                var0 = this;
                                var2 = var0.listener;
                                var1 = var2.attach;
                                var0 = _closure4_slot1;
                                var0 = var1.bind(var2)(var0);
                                var0 = undefined;
                                return var0;
                            };
                            var4.value = var0;
                            var0 = new Array(3);
                            var0[0] = var4;
                            var4 = {};
                            var6 = 'componentWillUnmount';
                            var4.key = var6;
                            var6 = function() {
                                var0 = this;
                                var2 = var0.listener;
                                var1 = var2.detach;
                                var1 = var1.bind(var2)();
                                var1 = var0.memoizedGetStateFromStores;
                                var0 = var1.clear;
                                var0 = var0.bind(var1)();
                                var0 = undefined;
                                return var0;
                            };
                            var4.value = var6;
                            var0[1] = var4;
                            var4 = {};
                            var6 = 'render';
                            var4.key = var6;
                            var5 = function() {
                                var4 = this;
                                var1 = var4.memoizedGetStateFromStores;
                                var0 = var4.props;
                                var0 = var1.bind(var4)(var0);
                                var3 = _closure1_slot9;
                                var2 = _closure4_slot0;
                                var1 = {};
                                var5 = var4.props;
                                var6 = var1;
                                var4 = copyDataProperties(var6, var5);
                                var6 = var1;
                                var5 = var0;
                                var0 = copyDataProperties(var6, var5);
                                var0 = undefined;
                                var0 = var3.bind(var0)(var2, var1);
                                return var0;
                            };
                            var4.value = var5;
                            var0[2] = var4;
                            var0 = var1.bind(var2)(var3, var0);
                            return var0;
                        };
                        var0 = var0.bind(var3)(var2);
                        var0.displayName = var1;
                        return var0;
                    };
                    return var0;
                };
                var0 = undefined;
                var0 = var2.bind(var0)(var4, var3);
                _fun7142_ip = 54;
                continue _fun7142;
            case 41:
                var2 = function arg0, arg1() {
                    var1 = arg0;
                    var _closure3_slot0 = var1;
                    var1 = arg1;
                    var _closure3_slot1 = var1;
                    var0 = function(arg0) { // Environment: var0
                        var3 = arg0;
                        var _closure4_slot0 = var3;
                        var1 = _closure1_slot12;
                        var7 = undefined;
                        var6 = var1.bind(var7)(var3);
                        var1 = global;
                        var3 = var1.HermesInternal;
                        var5 = var3.concat;
                        var3 = 'FluxContainer(';
                        var4 = ')';
                        var3 = var5.bind(var3)(var6, var4);
                        var _closure4_slot1 = var3;
                        var5 = _closure1_slot8;
                        var6 = var5.Component;
                        var2 = function(arg0) { // Environment: var0
                            var3 = function arg0() {
                                var6 = this;
                                var11 = 0;
                                var7 = copyRestArgs(var11);
                                var0 = _closure1_slot3;
                                var4 = _closure5_slot0;
                                var5 = undefined;
                                var0 = var0.bind(var5)(var6, var4);
                                var2 = _closure1_slot10;
                                var0 = new Array(0);
                                var11 = var0;
                                var10 = var7;
                                var9 = 0;
                                var7 = arraySpread(var11, var10, var9);
                                var0 = var2.bind(var5)(var6, var4, var0);
                                var _closure6_slot0 = var0;
                                var6 = _closure1_slot13;
                                var4 = _closure3_slot1;
                                var4 = var6.bind(var5)(var4);
                                var0.memoizedGetStateFromStores = var4;
                                var4 = _closure1_slot0;
                                var6 = _closure1_slot2;
                                var3 = 8;
                                var3 = var6[var3];
                                var3 = var4.bind(var5)(var3);
                                var4 = var3.BatchedStoreListener;
                                var11 = _closure3_slot0;
                                var2 = var4.prototype;
                                var2 = Object.create(var2, {
                                    constructor: {
                                        value: var4
                                    }
                                });
                                var10 = function() { // Environment: var1
                                    _fun7147: for (var _fun7147_ip = 0;;) switch (_fun7147_ip) {
                                        case 0:
                                            var1 = _closure6_slot0;
                                            var3 = var1.memoizedGetStateFromStores;
                                            var2 = var3.getCachedResult;
                                            var1 = var1.props;
                                            var1 = var1.childProps;
                                            var5 = var2.bind(var3)(var1);
                                            var1 = null;
                                            var1 = var1 != var5;
                                            if (!var1) {
                                                _fun7147_ip = 117;
                                                continue _fun7147
                                            }
                                        case 44:
                                            var7 = _closure6_slot0;
                                            var3 = var7.memoizedGetStateFromStores;
                                            var2 = var3.clear;
                                            var2 = var2.bind(var3)();
                                            var3 = _closure1_slot1;
                                            var4 = _closure1_slot2;
                                            var2 = 9;
                                            var2 = var4[var2];
                                            var4 = undefined;
                                            var3 = var3.bind(var4)(var2);
                                            var6 = var7.memoizedGetStateFromStores;
                                            var2 = var7.props;
                                            var2 = var2.childProps;
                                            var2 = var6.bind(var7)(var2);
                                            var1 = var3.bind(var4)(var2, var5);
                                        case 117:
                                            if (var1) {
                                                _fun7147_ip = 134;
                                                continue _fun7147
                                            }
                                        case 120:
                                            var1 = _closure6_slot0;
                                            var0 = var1.forceUpdate;
                                            var0 = var0.bind(var1)();
                                        case 134:
                                            var0 = undefined;
                                            return var0;
                                    }
                                };
                                var12 = var2;
                                var1 = new var12[var4](var11, var10, var9);
                                var1 = var1 instanceof Object ? var1 : var2;
                                var0.listener = var1;
                                return var0;
                            };
                            var _closure5_slot0 = var3;
                            var4 = _closure1_slot7;
                            var2 = undefined;
                            var1 = arg0;
                            var1 = var4.bind(var2)(var3, var1);
                            var1 = _closure1_slot4;
                            var4 = {};
                            var0 = 'componentDidMount';
                            var4.key = var0;
                            var0 = function() {
                                var0 = this;
                                var2 = var0.listener;
                                var1 = var2.attach;
                                var0 = _closure4_slot1;
                                var0 = var1.bind(var2)(var0);
                                var0 = undefined;
                                return var0;
                            };
                            var4.value = var0;
                            var0 = new Array(3);
                            var0[0] = var4;
                            var4 = {};
                            var6 = 'componentWillUnmount';
                            var4.key = var6;
                            var6 = function() {
                                var0 = this;
                                var2 = var0.listener;
                                var1 = var2.detach;
                                var1 = var1.bind(var2)();
                                var1 = var0.memoizedGetStateFromStores;
                                var0 = var1.clear;
                                var0 = var0.bind(var1)();
                                var0 = undefined;
                                return var0;
                            };
                            var4.value = var6;
                            var0[1] = var4;
                            var4 = {};
                            var6 = 'render';
                            var4.key = var6;
                            var5 = function() {
                                var1 = this;
                                var0 = var1.props;
                                var5 = var0.forwardedConnectStoresRef;
                                var4 = var0.childProps;
                                var0 = var1.memoizedGetStateFromStores;
                                var0 = var0.bind(var1)(var4);
                                var3 = _closure1_slot9;
                                var2 = _closure4_slot0;
                                var1 = {};
                                var1.ref = var5;
                                var7 = var1;
                                var6 = var4;
                                var4 = copyDataProperties(var7, var6);
                                var7 = var1;
                                var6 = var0;
                                var0 = copyDataProperties(var7, var6);
                                var0 = undefined;
                                var0 = var3.bind(var0)(var2, var1);
                                return var0;
                            };
                            var4.value = var5;
                            var0[2] = var4;
                            var0 = var1.bind(var2)(var3, var0);
                            return var0;
                        };
                        var2 = var2.bind(var7)(var6);
                        var _closure4_slot2 = var2;
                        var2.displayName = var3;
                        var2 = var5.forwardRef;
                        var0 = function(arg0, arg1) { // Environment: var0
                            var3 = _closure1_slot9;
                            var2 = _closure4_slot2;
                            var1 = {};
                            var0 = arg0;
                            var1.childProps = var0;
                            var0 = arg1;
                            var1.forwardedConnectStoresRef = var0;
                            var0 = undefined;
                            var0 = var3.bind(var0)(var2, var1);
                            return var0;
                        };
                        var0 = var2.bind(var5)(var0);
                        var1 = var1.HermesInternal;
                        var2 = var1.concat;
                        var1 = 'ForwardRef(';
                        var1 = var2.bind(var1)(var3, var4);
                        var0.displayName = var1;
                        return var0;
                    };
                    return var0;
                };
                var1 = undefined;
                var0 = var2.bind(var1)(var4, var3);
            case 54:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [29, 6, 7, 15, 17, 18, 31, 33, 633, 628, 2]);