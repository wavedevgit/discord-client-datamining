// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun51350: for (var _fun51350_ip = 0;;) switch (_fun51350_ip) {
        case 0:
            var6 = require;
            var10 = exports;
            var7 = dependencyMap;
            var4 = var6;
            var2 = var10;
            var3 = var7;
            var0 = ['enabled'];
            var _closure1_slot0 = var0;
            var0 = ['enabled', 'active'];
            var _closure1_slot1 = var0;
            var0 = global;
            var9 = var0.Object;
            var8 = var9.defineProperty;
            var5 = {};
            var0 = true;
            var5.value = var0;
            var0 = '__esModule';
            var0 = var8.bind(var9)(var10, var0, var5);
            var0 = 0;
            var8 = var7[var0];
            var5 = metroImportDefault;
            var0 = undefined;
            var5 = var5.bind(var0)(var8);
            var _closure1_slot3 = var5;
            var5 = 1;
            var8 = var7[var5];
            var5 = metroImportAll;
            var5 = var5.bind(var0)(var8);
            var5 = 2;
            var5 = var7[var5];
            var5 = var6.bind(var0)(var5);
            var5 = var5.View;
            var _closure1_slot4 = var5;
            var5 = 3;
            var5 = var7[var5];
            var5 = var6.bind(var0)(var5);
            var5 = var5.jsx;
            var _closure1_slot5 = var5;
        case 157: // try_start_0
            var5 = var3;
            var3 = 4;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var _closure1_slot2 = var3;
        case 176: // try_end0
            _fun51350_ip = 180;
            continue _fun51350;
        case 178: // catch_target0
            CatchBlockStart(arg_register = 3);
        case 180:
            var3 = function arg0() {
                _fun51351: for (var _fun51351_ip = 0;;) switch (_fun51351_ip) {
                    case 0:
                        var3 = arg0;
                        var8 = var3.enabled;
                        var2 = _closure1_slot3;
                        var0 = _closure1_slot0;
                        var4 = undefined;
                        var7 = var2.bind(var4)(var3, var0);
                        var2 = _closure1_slot2;
                        var0 = null;
                        if (!(var0 == var2)) {
                            _fun51351_ip = 74;
                            continue _fun51351
                        }
                    case 37:
                        var3 = _closure1_slot5;
                        var2 = _closure1_slot4;
                        var0 = global;
                        var6 = var0.Object;
                        var5 = var6.assign;
                        var0 = {};
                        var0 = var5.bind(var6)(var0, var7);
                        var0 = var3.bind(var4)(var2, var0);
                        _fun51351_ip = 119;
                        continue _fun51351;
                    case 74:
                        var3 = _closure1_slot5;
                        var1 = _closure1_slot2;
                        var2 = var1.ScreenContainer;
                        var1 = global;
                        var6 = var1.Object;
                        var5 = var6.assign;
                        var1 = {};
                        var1.enabled = var8;
                        var1 = var5.bind(var6)(var1, var7);
                        var0 = var3.bind(var4)(var2, var1);
                    case 119:
                        return var0;
                }
            };
            var2.MaybeScreenContainer = var3;
            var1 = function arg0() {
                _fun51352: for (var _fun51352_ip = 0;;) switch (_fun51352_ip) {
                    case 0:
                        var3 = arg0;
                        var9 = var3.enabled;
                        var8 = var3.active;
                        var2 = _closure1_slot3;
                        var0 = _closure1_slot1;
                        var4 = undefined;
                        var7 = var2.bind(var4)(var3, var0);
                        var2 = _closure1_slot2;
                        var0 = null;
                        if (!(var0 == var2)) {
                            _fun51352_ip = 80;
                            continue _fun51352
                        }
                    case 43:
                        var3 = _closure1_slot5;
                        var2 = _closure1_slot4;
                        var0 = global;
                        var6 = var0.Object;
                        var5 = var6.assign;
                        var0 = {};
                        var0 = var5.bind(var6)(var0, var7);
                        var0 = var3.bind(var4)(var2, var0);
                        _fun51352_ip = 130;
                        continue _fun51352;
                    case 80:
                        var3 = _closure1_slot5;
                        var1 = _closure1_slot2;
                        var2 = var1.Screen;
                        var1 = global;
                        var6 = var1.Object;
                        var5 = var6.assign;
                        var1 = {};
                        var1.enabled = var9;
                        var1.activityState = var8;
                        var1 = var5.bind(var6)(var1, var7);
                        var0 = var3.bind(var4)(var2, var1);
                    case 130:
                        return var0;
                }
            };
            var2.MaybeScreen = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [29, 31, 27, 33, 3992]);