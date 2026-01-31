// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var0 = function() {
        _fun45528: for (var _fun45528_ip = 0;;) switch (_fun45528_ip) {
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
                _fun45528_ip = 74;
                continue _fun45528;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
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
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var4 = true;
    var3.value = var4;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot1 = var3;
    var3 = 2;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 3;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 4;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 5;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.PureComponent;
    var1 = function(arg0) { // Environment: var1
        var3 = function() {
            _fun45532: for (var _fun45532_ip = 0;;) switch (_fun45532_ip) {
                case 0:
                    var3 = this;
                    var1 = undefined;
                    var8 = undefined;
                    var5 = _closure1_slot0;
                    var2 = _closure2_slot0;
                    var2 = var5.bind(var1)(var3, var2);
                    var5 = arguments.length;
                    var6 = global;
                    var2 = var6.Array;
                    var7 = var2.prototype;
                    var7 = Object.create(var7, {
                        constructor: {
                            value: var2
                        }
                    });
                    var13 = var7;
                    var12 = var5;
                    var2 = new var13[var2](var12, var11);
                    var7 = var2 instanceof Object ? var2 : var7;
                    var2 = 0;
                    var9 = var2 < var5;
                    if (!var9) {
                        _fun45532_ip = 85;
                        continue _fun45532
                    }
                case 70:
                    var9 = arguments[var2];
                    var7[var2] = var9;
                    var2 = var2 + 1;
                    if (var2 < var5) {
                        _fun45532_ip = 70;
                        continue _fun45532
                    }
                case 85:
                    var2 = _closure2_slot0;
                    var5 = new Array(0);
                    var0 = var5.concat;
                    var5 = var0.bind(var5)(var7);
                    var0 = _closure1_slot3;
                    var8 = var0.bind(var1)(var2);
                    var2 = _closure1_slot2;
                    var0 = _closure1_slot5;
                    var0 = var0.bind(var1)();
                    if (var0) {
                        _fun45532_ip = 140;
                        continue _fun45532
                    }
                case 127:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var3, var5);
                    _fun45532_ip = 179;
                    continue _fun45532;
                case 140:
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    if (var5) {
                        _fun45532_ip = 158;
                        continue _fun45532
                    }
                case 154:
                    var5 = new Array(0);
                case 158:
                    var4 = _closure1_slot3;
                    var4 = var4.bind(var1)(var3);
                    var4 = var4.constructor;
                    var0 = var6.bind(var7)(var8, var5, var4);
                case 179:
                    var0 = var2.bind(var1)(var3, var0);
                    var0.overrideEnabled = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot4;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot1;
        var4 = {};
        var0 = 'setEnabled';
        var4.key = var0;
        var0 = function arg0() {
            _fun45533: for (var _fun45533_ip = 0;;) switch (_fun45533_ip) {
                case 0:
                    var0 = arg0;
                    var1 = this;
                    var2 = var1.overrideEnabled;
                    if (!(var0 !== var2)) {
                        _fun45533_ip = 32;
                        continue _fun45533
                    }
                case 16:
                    var1.overrideEnabled = var0;
                    var0 = var1.forceUpdate;
                    var0 = var0.bind(var1)();
                case 32:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(2);
        var0[0] = var4;
        var4 = {};
        var6 = 'render';
        var4.key = var6;
        var5 = function() {
            _fun45534: for (var _fun45534_ip = 0;;) switch (_fun45534_ip) {
                case 0:
                    var2 = this;
                    var1 = var2.overrideEnabled;
                    var0 = undefined;
                    if (!(var0 !== var1)) {
                        _fun45534_ip = 58;
                        continue _fun45534
                    }
                case 15:
                    var0 = var2.overrideEnabled;
                    if (!var0) {
                        _fun45534_ip = 51;
                        continue _fun45534
                    }
                case 24:
                    var4 = var2.props;
                    var3 = var4.renderer;
                    var1 = var2.props;
                    var1 = var1.arg;
                    var0 = var3.bind(var4)(var1);
                case 51:
                    if (var0) {
                        _fun45534_ip = 56;
                        continue _fun45534
                    }
                case 54:
                    var0 = null;
                case 56:
                    _fun45534_ip = 106;
                    continue _fun45534;
                case 58:
                    var1 = var2.props;
                    var1 = var1.enabled;
                    if (!var1) {
                        _fun45534_ip = 98;
                        continue _fun45534
                    }
                case 71:
                    var4 = var2.props;
                    var3 = var4.renderer;
                    var2 = var2.props;
                    var2 = var2.arg;
                    var1 = var3.bind(var4)(var2);
                case 98:
                    if (var1) {
                        _fun45534_ip = 103;
                        continue _fun45534
                    }
                case 101:
                    var1 = null;
                case 103:
                    var0 = var1;
                case 106:
                    return var0;
            }
        };
        var4.value = var5;
        var0[1] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = {};
    var3.enabled = var4;
    var1.defaultProps = var3;
    var2.PureComponentWrapper = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5065, 5066, 5070, 5072, 5073, 31]);