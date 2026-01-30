// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var6;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var3);
    var0 = 0;
    var4 = var6[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var4 = var3.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var3 = 1;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot4 = var3;
    var3 = var4.memo;
    var1 = function(arg0) { // Original name: Header, environment: var1
        _fun51107: for (var _fun51107_ip = 0;;) switch (_fun51107_ip) {
            case 0:
                var0 = arg0;
                var10 = var0.back;
                var13 = var0.layout;
                var14 = var0.progress;
                var7 = var0.options;
                var15 = var0.route;
                var _closure2_slot0 = var15;
                var12 = var0.navigation;
                var _closure2_slot1 = var12;
                var0 = var0.styleInterpolator;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 2;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = var2.useSafeAreaInsets;
                var1 = var1.bind(var2)();
                var2 = var7.headerBackTitle;
                if (!(var3 === var2)) {
                    _fun51107_ip = 111;
                    continue _fun51107
                }
            case 99:
                var11 = undefined;
                if (!var10) {
                    _fun51107_ip = 117;
                    continue _fun51107
                }
            case 104:
                var11 = var10.title;
                _fun51107_ip = 117;
                continue _fun51107;
            case 111:
                var11 = var7.headerBackTitle;
            case 117:
                var5 = _closure1_slot3;
                var9 = var5.useCallback;
                var8 = _closure1_slot1;
                var2 = _closure1_slot2;
                var6 = 3;
                var6 = var2[var6];
                var16 = var8.bind(var3)(var6);
                var6 = function() { // Environment: var4
                    _fun51108: for (var _fun51108_ip = 0;;) switch (_fun51108_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var1 = var2.isFocused;
                            var1 = var1.bind(var2)();
                            if (!var1) {
                                _fun51108_ip = 34;
                                continue _fun51108
                            }
                        case 20:
                            var3 = _closure2_slot1;
                            var2 = var3.canGoBack;
                            var1 = var2.bind(var3)();
                        case 34:
                            if (!var1) {
                                _fun51108_ip = 129;
                                continue _fun51108
                            }
                        case 37:
                            var2 = _closure2_slot1;
                            var1 = var2.dispatch;
                            var3 = global;
                            var6 = var3.Object;
                            var5 = var6.assign;
                            var7 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var3 = 4;
                            var4 = var4[var3];
                            var3 = undefined;
                            var3 = var7.bind(var3)(var4);
                            var4 = var3.StackActions;
                            var3 = var4.pop;
                            var4 = var3.bind(var4)();
                            var3 = {};
                            var0 = _closure2_slot0;
                            var0 = var0.key;
                            var3.source = var0;
                            var0 = {};
                            var0 = var5.bind(var6)(var0, var4, var3);
                            var0 = var1.bind(var2)(var0);
                        case 129:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4 = 50;
                var6 = var16.bind(var3)(var6, var4);
                var4 = new Array(2);
                var4[0] = var12;
                var12 = var15.key;
                var4[1] = var12;
                var9 = var9.bind(var5)(var6, var4);
                var6 = var5.useContext;
                var4 = 5;
                var4 = var2[var4];
                var4 = var8.bind(var3)(var4);
                var12 = var6.bind(var5)(var4);
                var4 = var5.useContext;
                var6 = _closure1_slot0;
                var18 = 6;
                var2 = var2[var18];
                var2 = var6.bind(var3)(var2);
                var2 = var2.HeaderShownContext;
                var2 = var4.bind(var5)(var2);
                var4 = var7.headerStatusBarHeight;
                if (!(var3 === var4)) {
                    _fun51107_ip = 266;
                    continue _fun51107
                }
            case 249:
                var8 = 0;
                if (var12) {
                    _fun51107_ip = 264;
                    continue _fun51107
                }
            case 254:
                var8 = 0;
                if (var2) {
                    _fun51107_ip = 264;
                    continue _fun51107
                }
            case 259:
                var8 = var1.top;
            case 264:
                _fun51107_ip = 272;
                continue _fun51107;
            case 266:
                var8 = var7.headerStatusBarHeight;
            case 272:
                var2 = _closure1_slot4;
                var4 = _closure1_slot1;
                var16 = _closure1_slot2;
                var1 = 7;
                var1 = var16[var1];
                var1 = var4.bind(var3)(var1);
                var4 = global;
                var6 = var4.Object;
                var5 = var6.assign;
                var4 = {};
                var17 = _closure1_slot0;
                var16 = var16[var18];
                var17 = var17.bind(var3)(var16);
                var16 = var17.getHeaderTitle;
                var15 = var15.name;
                var15 = var16.bind(var17)(var7, var15);
                var4.title = var15;
                var4.progress = var14;
                var4.layout = var13;
                var4.modal = var12;
                var12 = var7.headerBackTitle;
                if (!(var3 !== var12)) {
                    _fun51107_ip = 376;
                    continue _fun51107
                }
            case 370:
                var11 = var7.headerBackTitle;
            case 376:
                var4.headerBackTitle = var11;
                var4.headerStatusBarHeight = var8;
                var8 = undefined;
                if (!var10) {
                    _fun51107_ip = 394;
                    continue _fun51107
                }
            case 391:
                var8 = var9;
            case 394:
                var4.onGoBack = var8;
                var4.styleInterpolator = var0;
                var0 = {};
                var0 = var5.bind(var6)(var0, var7, var4);
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var4)(var1);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 1571, 5781, 1470, 5782, 5756, 5783]);