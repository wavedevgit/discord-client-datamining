// modules/settings/native/renderer/hooks/useAutoScrollToSetting.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportDefault;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.NodeType;
    var _closure1_slot4 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/settings/native/renderer/hooks/useAutoScrollToSetting.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0, arg1, arg2) { // Original name: useAutoScrollToSearchResultSetting, environment: var1
        _fun89221: for (var _fun89221_ip = 0;;) switch (_fun89221_ip) {
            case 0:
                var7 = arg0;
                var9 = arg1;
                var _closure2_slot0 = var7;
                var _closure2_slot1 = var9;
                var4 = _closure1_slot3;
                var3 = var4.useField;
                var0 = 'selected';
                var5 = var3.bind(var4)(var0);
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 5;
                var3 = var3[var0];
                var0 = undefined;
                var4 = var4.bind(var0)(var3);
                var3 = var4.useNavigation;
                var6 = var3.bind(var4)();
                var _closure2_slot2 = var6;
                var8 = _closure1_slot2;
                var4 = var8.useRef;
                var3 = arg2;
                var4 = var4.bind(var8)(var3);
                var _closure2_slot3 = var4;
                var3 = null;
                if (!(var3 == var5)) {
                    _fun89221_ip = 106;
                    continue _fun89221
                }
            case 101:
                var5 = var4.current;
            case 106:
                var _closure2_slot4 = var5;
                var3 = var3 == var5;
                var8 = false;
                if (var3) {
                    _fun89221_ip = 221;
                    continue _fun89221
                }
            case 119:
                var4 = _closure1_slot0;
                var11 = _closure1_slot1;
                var3 = 3;
                var3 = var11[var3];
                var3 = var4.bind(var0)(var3);
                var3 = var3.SETTING_RENDERER_CONFIG;
                var3 = var3[var5];
                var4 = var3.type;
                var3 = _closure1_slot4;
                var3 = var3.ROUTE;
                var8 = false;
                if (!(var4 !== var3)) {
                    _fun89221_ip = 221;
                    continue _fun89221
                }
            case 170:
                var4 = _closure1_slot0;
                var10 = _closure1_slot1;
                var3 = 4;
                var3 = var10[var3];
                var4 = var4.bind(var0)(var3);
                var3 = var4.getInitialScrollIndex;
                var10 = var3.bind(var4)(var5, var9);
                var3 = 0;
                var3 = var3 !== var10;
                if (!var3) {
                    _fun89221_ip = 218;
                    continue _fun89221
                }
            case 211:
                var4 = 1;
                var3 = var4 !== var10;
            case 218:
                var8 = var3;
            case 221:
                var _closure2_slot5 = var8;
                var4 = _closure1_slot2;
                var3 = var4.useEffect;
                var2 = new Array(5);
                var2[0] = var9;
                var2[1] = var8;
                var2[2] = var7;
                var2[3] = var6;
                var2[4] = var5;
                var1 = function() { // Environment: var1
                    var4 = _closure2_slot2;
                    var3 = var4.addListener;
                    var2 = 'transitionEnd';
                    var1 = function() { // Environment: var0
                        _fun89223: for (var _fun89223_ip = 0;;) switch (_fun89223_ip) {
                            case 0:
                                var0 = _closure2_slot5;
                                if (!var0) {
                                    _fun89223_ip = 124;
                                    continue _fun89223
                                }
                            case 10:
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot1;
                                var0 = 4;
                                var2 = var2[var0];
                                var0 = undefined;
                                var5 = var3.bind(var0)(var2);
                                var4 = var5.getInitialScrollIndex;
                                var3 = _closure2_slot4;
                                var2 = _closure2_slot1;
                                var5 = var4.bind(var5)(var3, var2);
                                var6 = null;
                                if (!(var6 != var5)) {
                                    _fun89223_ip = 138;
                                    continue _fun89223
                                }
                            case 61:
                                var2 = _closure2_slot0;
                                var2 = var6 == var2;
                                var4 = undefined;
                                if (var2) {
                                    _fun89223_ip = 90;
                                    continue _fun89223
                                }
                            case 74:
                                var3 = _closure2_slot0;
                                var3 = var3.current;
                                var2 = var6 == var3;
                                var4 = var3;
                            case 90:
                                if (var2) {
                                    _fun89223_ip = 124;
                                    continue _fun89223
                                }
                            case 93:
                                var3 = var4.scrollToIndex;
                                var2 = {
                                    'index': null,
                                    'animated': false,
                                    'viewOffset': 300
                                };
                                var2.index = var5;
                                var2 = var3.bind(var4)(var2);
                            case 124:
                                var2 = _closure2_slot3;
                                var1 = undefined;
                                var2.current = var1;
                                return var1;
                            case 138:
                                return var0;
                        }
                    };
                    var1 = var3.bind(var4)(var2, var1);
                    var _closure3_slot0 = var1;
                    var0 = function() { // Environment: var0
                        var1 = _closure3_slot0;
                        var0 = undefined;
                        var1 = var1.bind(var0)();
                        var3 = _closure1_slot3;
                        var2 = var3.setState;
                        var1 = {};
                        var4 = null;
                        var1.selected = var4;
                        var1 = var2.bind(var3)(var1);
                        var1 = _closure2_slot3;
                        var1.current = var0;
                        return var0;
                    };
                    return var0;
                };
                var1 = var3.bind(var4)(var1, var2);
                return var0;
        }
    };
    var2.useAutoScrollToSearchResultSetting = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 10090, 8944, 10094, 10093, 1469, 2]);