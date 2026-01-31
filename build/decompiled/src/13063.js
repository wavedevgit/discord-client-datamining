// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun100586: for (var _fun100586_ip = 0;;) switch (_fun100586_ip) {
        case 0:
            var6 = require;
            var10 = exports;
            var7 = dependencyMap;
            var4 = var6;
            var _closure1_slot0 = var6;
            var2 = var10;
            var3 = var7;
            var _closure1_slot1 = var7;
            var0 = ['enabled'];
            var _closure1_slot2 = var0;
            var0 = ['visible', 'children'];
            var _closure1_slot3 = var0;
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
            var _closure1_slot5 = var5;
            var5 = 1;
            var8 = var7[var5];
            var5 = metroImportAll;
            var5 = var5.bind(var0)(var8);
            var5 = 2;
            var5 = var7[var5];
            var5 = var6.bind(var0)(var5);
            var5 = var5.View;
            var _closure1_slot6 = var5;
            var5 = 3;
            var5 = var7[var5];
            var5 = var6.bind(var0)(var5);
            var5 = var5.jsx;
            var _closure1_slot7 = var5;
        case 165: // try_start_0
            var5 = var3;
            var3 = 4;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var _closure1_slot4 = var3;
        case 184: // try_end0
            _fun100586_ip = 188;
            continue _fun100586;
        case 186: // catch_target0
            CatchBlockStart(arg_register = 3);
        case 188:
            var3 = function(arg0) { // Original name: MaybeScreenContainer, environment: var1
                _fun100587: for (var _fun100587_ip = 0;;) switch (_fun100587_ip) {
                    case 0:
                        var3 = arg0;
                        var8 = var3.enabled;
                        var2 = _closure1_slot5;
                        var0 = _closure1_slot2;
                        var4 = undefined;
                        var7 = var2.bind(var4)(var3, var0);
                        var2 = _closure1_slot4;
                        var3 = null;
                        if (!(var3 != var2)) {
                            _fun100587_ip = 60;
                            continue _fun100587
                        }
                    case 37:
                        var0 = var2.screensEnabled;
                        if (!(var3 != var0)) {
                            _fun100587_ip = 60;
                            continue _fun100587
                        }
                    case 47:
                        var0 = var2.screensEnabled;
                        var0 = var0.bind(var2)();
                        if (var0) {
                            _fun100587_ip = 97;
                            continue _fun100587
                        }
                    case 60:
                        var3 = _closure1_slot7;
                        var2 = _closure1_slot6;
                        var0 = global;
                        var6 = var0.Object;
                        var5 = var6.assign;
                        var0 = {};
                        var0 = var5.bind(var6)(var0, var7);
                        var0 = var3.bind(var4)(var2, var0);
                        _fun100587_ip = 142;
                        continue _fun100587;
                    case 97:
                        var3 = _closure1_slot7;
                        var1 = _closure1_slot4;
                        var2 = var1.ScreenContainer;
                        var1 = global;
                        var6 = var1.Object;
                        var5 = var6.assign;
                        var1 = {};
                        var1.enabled = var8;
                        var1 = var5.bind(var6)(var1, var7);
                        var0 = var3.bind(var4)(var2, var1);
                    case 142:
                        return var0;
                }
            };
            var2.MaybeScreenContainer = var3;
            var1 = function(arg0) { // Original name: MaybeScreen, environment: var1
                _fun100588: for (var _fun100588_ip = 0;;) switch (_fun100588_ip) {
                    case 0:
                        var3 = arg0;
                        var10 = var3.visible;
                        var9 = var3.children;
                        var2 = _closure1_slot5;
                        var0 = _closure1_slot3;
                        var4 = undefined;
                        var8 = var2.bind(var4)(var3, var0);
                        var2 = _closure1_slot4;
                        var3 = null;
                        if (!(var3 != var2)) {
                            _fun100588_ip = 66;
                            continue _fun100588
                        }
                    case 43:
                        var0 = var2.screensEnabled;
                        if (!(var3 != var0)) {
                            _fun100588_ip = 66;
                            continue _fun100588
                        }
                    case 53:
                        var0 = var2.screensEnabled;
                        var0 = var0.bind(var2)();
                        if (var0) {
                            _fun100588_ip = 137;
                            continue _fun100588
                        }
                    case 66:
                        var3 = _closure1_slot7;
                        var2 = _closure1_slot0;
                        var5 = _closure1_slot1;
                        var0 = 5;
                        var0 = var5[var0];
                        var0 = var2.bind(var4)(var0);
                        var2 = var0.ResourceSavingView;
                        var0 = global;
                        var7 = var0.Object;
                        var6 = var7.assign;
                        var5 = {};
                        var5.visible = var10;
                        var0 = {};
                        var0.children = var9;
                        var0 = var6.bind(var7)(var5, var8, var0);
                        var0 = var3.bind(var4)(var2, var0);
                        _fun100588_ip = 198;
                        continue _fun100588;
                    case 137:
                        var3 = _closure1_slot7;
                        var1 = _closure1_slot4;
                        var2 = var1.Screen;
                        var1 = global;
                        var7 = var1.Object;
                        var6 = var7.assign;
                        var5 = {};
                        var1 = 0;
                        if (!var10) {
                            _fun100588_ip = 174;
                            continue _fun100588
                        }
                    case 171:
                        var1 = 2;
                    case 174:
                        var5.activityState = var1;
                        var1 = {};
                        var1.children = var9;
                        var1 = var6.bind(var7)(var5, var8, var1);
                        var0 = var3.bind(var4)(var2, var1);
                    case 198:
                        return var0;
                }
            };
            var2.MaybeScreen = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [29, 31, 27, 33, 3990, 4672]);