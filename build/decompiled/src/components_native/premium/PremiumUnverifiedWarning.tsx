// components_native/premium/PremiumUnverifiedWarning.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() {
        _fun83209: for (var _fun83209_ip = 0;;) switch (_fun83209_ip) {
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
            case 72: // try_end0
                _fun83209_ip = 76;
                continue _fun83209;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
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
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 5;
    var6 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var6 = 6;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var11 = var6.StyleSheet;
    var6 = 7;
    var6 = var5[var6];
    var9 = var7.bind(var0)(var6);
    var _closure1_slot7 = var9;
    var6 = 8;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.jsx;
    var _closure1_slot8 = var6;
    var10 = var11.create;
    var8 = {};
    var12 = {
        'color': null,
        'fontSize': 12,
        'marginTop': 10
    };
    var6 = 9;
    var6 = var5[var6];
    var6 = var7.bind(var0)(var6);
    var6 = var6.unsafe_rawColors;
    var6 = var6.RED_400;
    var12.color = var6;
    var6 = 12;
    var8.warning = var12;
    var8 = var10.bind(var11)(var8);
    var _closure1_slot9 = var8;
    var8 = var3.PureComponent;
    var3 = function(arg0) { // Environment: var1
        var3 = function() {
            _fun83213: for (var _fun83213_ip = 0;;) switch (_fun83213_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot2;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot5;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot4;
                    var0 = _closure1_slot10;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun83213_ip = 69;
                        continue _fun83213
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun83213_ip = 105;
                    continue _fun83213;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot5;
                    var5 = var5.bind(var2)(var3);
                    var5 = var5.constructor;
                    var4 = arguments;
                    var0 = var6.bind(var7)(var8, var4, var5);
                case 105:
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot6;
        var2 = undefined;
        var4 = arg0;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot3;
        var4 = {};
        var5 = 'render';
        var4.key = var5;
        var0 = function() {
            _fun83214: for (var _fun83214_ip = 0;;) switch (_fun83214_ip) {
                case 0:
                    var0 = this;
                    var0 = var0.props;
                    var1 = var0.verified;
                    var6 = var0.style;
                    var0 = null;
                    if (var1) {
                        _fun83214_ip = 149;
                        continue _fun83214
                    }
                case 27:
                    var4 = _closure1_slot8;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot1;
                    var1 = 10;
                    var1 = var9[var1];
                    var3 = undefined;
                    var1 = var8.bind(var3)(var1);
                    var2 = var1.LegacyText;
                    var1 = {};
                    var5 = _closure1_slot9;
                    var7 = var5.warning;
                    var5 = new Array(2);
                    var5[0] = var7;
                    var5[1] = var6;
                    var1.style = var5;
                    var5 = 11;
                    var6 = var9[var5];
                    var6 = var8.bind(var3)(var6);
                    var7 = var6.intl;
                    var6 = var7.string;
                    var5 = var9[var5];
                    var5 = var8.bind(var3)(var5);
                    var5 = var5.t;
                    var5 = var5["0LgOKH"];
                    var5 = var6.bind(var7)(var5);
                    var1.children = var5;
                    var0 = var4.bind(var3)(var2, var1);
                case 149:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(1);
        var0[0] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var8);
    var6 = var5[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.connectStores;
    var6 = new Array(1);
    var6[0] = var9;
    var1 = function() { // Environment: var1
        _fun83215: for (var _fun83215_ip = 0;;) switch (_fun83215_ip) {
            case 0:
                var0 = {};
                var2 = _closure1_slot7;
                var1 = var2.getCurrentUser;
                var3 = var1.bind(var2)();
                var1 = null;
                var4 = var1 == var3;
                var2 = undefined;
                if (var4) {
                    _fun83215_ip = 35;
                    continue _fun83215
                }
            case 29:
                var2 = var3.verified;
            case 35:
                var1 = var1 != var2;
                if (!var1) {
                    _fun83215_ip = 45;
                    continue _fun83215
                }
            case 42:
                var1 = var2;
            case 45:
                var0.verified = var1;
                return var0;
        }
    };
    var1 = var7.bind(var8)(var6, var1);
    var1 = var1.bind(var0)(var3);
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'components_native/premium/PremiumUnverifiedWarning.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 31, 27, 1621, 33, 671, 4878, 1234, 566, 2]);