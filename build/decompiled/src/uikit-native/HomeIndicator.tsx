// uikit-native/HomeIndicator.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var6;
    var0 = function() {
        _fun63391: for (var _fun63391_ip = 0;;) switch (_fun63391_ip) {
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
                _fun63391_ip = 74;
                continue _fun63391;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot10 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var0 = function arg0() {
        var1 = arg0;
        var0 = {};
        var2 = var1.prefersHidden;
        var0.prefersHidden = var2;
        var1 = var1.prefersDeferringSystemGestures;
        var0.prefersDeferringSystemGestures = var1;
        return var0;
    };
    var _closure1_slot11 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var6[var0];
    var0 = undefined;
    var1 = var4.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var6[var1];
    var1 = var4.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var6[var1];
    var1 = var4.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var6[var1];
    var1 = var4.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 4;
    var1 = var6[var1];
    var1 = var4.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 5;
    var4 = var6[var1];
    var1 = arg3;
    var4 = var1.bind(var0)(var4);
    var1 = 6;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.NativeModules;
    var _closure1_slot8 = var1;
    var1 = 7;
    var1 = var6[var1];
    var8 = var5.bind(var0)(var1);
    var7 = var8.create;
    var1 = function() { // Environment: var3
        var0 = {};
        var1 = false;
        var0.autoHideHomeIndicator = var1;
        return var0;
    };
    var1 = var7.bind(var8)(var1);
    var _closure1_slot9 = var1;
    var4 = var4.Component;
    var3 = function(arg0) { // Environment: var3
        var4 = function arg0() {
            _fun63397: for (var _fun63397_ip = 0;;) switch (_fun63397_ip) {
                case 0:
                    var3 = this;
                    var11 = 0;
                    var0 = copyRestArgs(var11);
                    var6 = _closure1_slot3;
                    var1 = _closure2_slot0;
                    var2 = undefined;
                    var6 = var6.bind(var2)(var3, var1);
                    var8 = new Array(0);
                    var11 = var8;
                    var10 = var0;
                    var9 = 0;
                    var0 = arraySpread(var11, var10, var9);
                    var0 = _closure1_slot6;
                    var7 = var0.bind(var2)(var1);
                    var1 = _closure1_slot5;
                    var0 = _closure1_slot10;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun63397_ip = 84;
                        continue _fun63397
                    }
                case 71:
                    var0 = var7.apply;
                    var0 = var0.bind(var7)(var3, var8);
                    _fun63397_ip = 118;
                    continue _fun63397;
                case 84:
                    var5 = global;
                    var6 = var5.Reflect;
                    var5 = var6.construct;
                    var4 = _closure1_slot6;
                    var4 = var4.bind(var2)(var3);
                    var4 = var4.constructor;
                    var0 = var5.bind(var6)(var7, var8, var4);
                case 118:
                    var0 = var1.bind(var2)(var3, var0);
                    var1 = null;
                    var0._stackEntry = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var4;
        var2 = _closure1_slot7;
        var3 = undefined;
        var1 = arg0;
        var1 = var2.bind(var3)(var4, var1);
        var2 = _closure1_slot4;
        var0 = {};
        var1 = 'componentDidMount';
        var0.key = var1;
        var1 = function() {
            var1 = this;
            var3 = _closure2_slot0;
            var2 = var3.pushStackEntry;
            var0 = var1.props;
            var0 = var2.bind(var3)(var0);
            var1._stackEntry = var0;
            var0 = undefined;
            return var0;
        };
        var0.value = var1;
        var1 = new Array(4);
        var1[0] = var0;
        var0 = {};
        var5 = 'componentDidUpdate';
        var0.key = var5;
        var5 = function() {
            var1 = this;
            var4 = _closure2_slot0;
            var3 = var4.replaceStackEntry;
            var2 = var1._stackEntry;
            var0 = var1.props;
            var0 = var3.bind(var4)(var2, var0);
            var1._stackEntry = var0;
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'componentWillUnmount';
        var0.key = var5;
        var5 = function() {
            var1 = this;
            var3 = _closure2_slot0;
            var2 = var3.popStackEntry;
            var0 = var1._stackEntry;
            var0 = var2.bind(var3)(var0);
            var0 = null;
            var1._stackEntry = var0;
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'render';
        var0.key = var5;
        var5 = function() {
            var0 = null;
            return var0;
        };
        var0.value = var5;
        var1[3] = var0;
        var5 = {};
        var0 = 'pushStackEntry';
        var5.key = var0;
        var0 = function arg0() {
            var2 = _closure1_slot11;
            var1 = undefined;
            var0 = arg0;
            var0 = var2.bind(var1)(var0);
            var2 = _closure2_slot0;
            var3 = var2._propsStack;
            var1 = var3.push;
            var1 = var1.bind(var3)(var0);
            var1 = var2._updatePropsStack;
            var1 = var1.bind(var2)();
            return var0;
        };
        var5.value = var0;
        var0 = new Array(4);
        var0[0] = var5;
        var5 = {};
        var7 = 'popStackEntry';
        var5.key = var7;
        var7 = function arg0() {
            _fun63403: for (var _fun63403_ip = 0;;) switch (_fun63403_ip) {
                case 0:
                    var3 = arg0;
                    var0 = null;
                    var1 = var0 != var3;
                    var0 = -1;
                    var4 = var0;
                    if (!var1) {
                        _fun63403_ip = 45;
                        continue _fun63403
                    }
                case 21:
                    var1 = _closure2_slot0;
                    var2 = var1._propsStack;
                    var1 = var2.indexOf;
                    var4 = var1.bind(var2)(var3);
                case 45:
                    if (!(var0 !== var4)) {
                        _fun63403_ip = 87;
                        continue _fun63403
                    }
                case 49:
                    var1 = _closure2_slot0;
                    var3 = var1._propsStack;
                    var2 = var3.splice;
                    var0 = 1;
                    var0 = var2.bind(var3)(var4, var0);
                    var0 = var1._updatePropsStack;
                    var0 = var0.bind(var1)();
                case 87:
                    var0 = undefined;
                    return var0;
            }
        };
        var5.value = var7;
        var0[1] = var5;
        var5 = {};
        var7 = 'replaceStackEntry';
        var5.key = var7;
        var7 = function arg0, arg1() {
            _fun63404: for (var _fun63404_ip = 0;;) switch (_fun63404_ip) {
                case 0:
                    var5 = arg0;
                    var2 = _closure1_slot11;
                    var1 = undefined;
                    var0 = arg1;
                    var0 = var2.bind(var1)(var0);
                    var1 = null;
                    var3 = var1 != var5;
                    var1 = -1;
                    var2 = var1;
                    if (!var3) {
                        _fun63404_ip = 62;
                        continue _fun63404
                    }
                case 38:
                    var3 = _closure2_slot0;
                    var4 = var3._propsStack;
                    var3 = var4.indexOf;
                    var2 = var3.bind(var4)(var5);
                case 62:
                    if (!(var1 !== var2)) {
                        _fun63404_ip = 83;
                        continue _fun63404
                    }
                case 66:
                    var1 = _closure2_slot0;
                    var1 = var1._propsStack;
                    var1[var2] = var0;
                case 83:
                    var2 = _closure2_slot0;
                    var1 = var2._updatePropsStack;
                    var1 = var1.bind(var2)();
                    return var0;
            }
        };
        var5.value = var7;
        var0[2] = var5;
        var5 = {};
        var7 = '_updatePropsStack';
        var5.key = var7;
        var6 = function() {
            var1 = global;
            var4 = var1.clearImmediate;
            var2 = _closure2_slot0;
            var3 = var2._updateImmediate;
            var0 = undefined;
            var3 = var4.bind(var0)(var3);
            var3 = var1.setImmediate;
            var1 = function() { // Environment: var1
                _fun63406: for (var _fun63406_ip = 0;;) switch (_fun63406_ip) {
                    case 0:
                        var0 = _closure2_slot0;
                        var1 = var0._propsStack;
                        var0 = var0._propsStack;
                        var2 = var0.length;
                        var0 = 1;
                        var0 = var2 - var0;
                        var2 = var1[var0];
                        var0 = null;
                        if (!(var0 == var2)) {
                            _fun63406_ip = 45;
                            continue _fun63406
                        }
                    case 43:
                        var2 = {};
                    case 45:
                        var4 = var2.prefersHidden;
                        var0 = undefined;
                        var1 = var0 !== var4;
                        if (!var1) {
                            _fun63406_ip = 63;
                            continue _fun63406
                        }
                    case 60:
                        var1 = var4;
                    case 63:
                        var _closure4_slot0 = var1;
                        var2 = var2.prefersDeferringSystemGestures;
                        var5 = var0 !== var2;
                        if (!var5) {
                            _fun63406_ip = 83;
                            continue _fun63406
                        }
                    case 80:
                        var5 = var2;
                    case 83:
                        var4 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var7 = 8;
                        var7 = var6[var7];
                        var8 = var4.bind(var0)(var7);
                        var7 = var8.batchUpdates;
                        var3 = function() { // Environment: var3
                            var2 = _closure1_slot9;
                            var1 = var2.setState;
                            var0 = {};
                            var3 = _closure4_slot0;
                            var0.autoHideHomeIndicator = var3;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var3 = var7.bind(var8)(var3);
                        var3 = 9;
                        var3 = var6[var3];
                        var4 = var4.bind(var0)(var3);
                        var3 = var4.isAndroid;
                        var3 = var3.bind(var4)();
                        if (var3) {
                            _fun63406_ip = 204;
                            continue _fun63406
                        }
                    case 147:
                        var3 = _closure1_slot8;
                        var3 = var3.DCDHomeIndicator;
                        if (!var3) {
                            _fun63406_ip = 240;
                            continue _fun63406
                        }
                    case 160:
                        var3 = _closure1_slot8;
                        var6 = var3.DCDHomeIndicator;
                        var4 = var6.setPrefersAutoHidden;
                        var4 = var4.bind(var6)(var1);
                        var4 = var3.DCDHomeIndicator;
                        var3 = var4.setPrefersDeferringSystemGestures;
                        var3 = var3.bind(var4)(var5);
                        _fun63406_ip = 240;
                        continue _fun63406;
                    case 204:
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var2 = 10;
                        var2 = var4[var2];
                        var3 = var3.bind(var0)(var2);
                        var2 = var3.setNavigationBarVisible;
                        var1 = !var1;
                        var1 = var2.bind(var3)(var1);
                    case 240:
                        return var0;
                }
            };
            var1 = var3.bind(var0)(var1);
            var2._updateImmediate = var1;
            return var0;
        };
        var5.value = var6;
        var0[3] = var5;
        var0 = var2.bind(var3)(var4, var1, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var4 = {
        'prefersHidden': false,
        'prefersDeferringSystemGestures': false
    };
    var3.defaultProps = var4;
    var4 = new Array(0);
    var3._propsStack = var4;
    var4 = null;
    var3._updateImmediate = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'uikit-native/HomeIndicator.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.useHomeIndicatorStore = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 31, 27, 629, 802, 478, 1580, 2]);