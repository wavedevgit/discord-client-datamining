// modules/collectibles/native/DebugLogView.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
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
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot3 = var6;
    var6 = var3.ScrollView;
    var _closure1_slot4 = var6;
    var3 = var3.TouchableOpacity;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.useCollectiblesDebugStore;
    var _closure1_slot7 = var6;
    var3 = var3.addDebugLog;
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsxs;
    var _closure1_slot9 = var6;
    var3 = var3.jsx;
    var _closure1_slot10 = var3;
    var3 = 5;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'backgroundColor': 'rgba(0, 0, 0, 0.8)',
        'padding': 10,
        'maxHeight': 350,
        'width': '100%',
        'position': 'absolute',
        'bottom': 0,
        'left': 0,
        'right': 0,
        'zIndex': 9999,
        'borderTopWidth': 1,
        'borderTopColor': '#ff0000'
    };
    var3.debugLogContainer = var8;
    var8 = {
        'flexDirection': 'row',
        'justifyContent': 'space-between',
        'alignItems': 'center',
        'marginBottom': 5
    };
    var3.debugLogHeader = var8;
    var8 = {
        'color': '#00ff00',
        'fontSize': 12,
        'marginBottom': 2,
        'fontFamily': 'monospace'
    };
    var3.debugLogText = var8;
    var8 = {
        'backgroundColor': '#ff0000',
        'paddingHorizontal': 8,
        'paddingVertical': 2
    };
    var9 = 6;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.radii;
    var9 = var9.xs;
    var8.borderRadius = var9;
    var3.clearButton = var8;
    var8 = {
        'color': '#ffffff',
        'fontSize': 10,
        'fontWeight': 'bold'
    };
    var3.clearButtonText = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot11 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/collectibles/native/DebugLogView.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun88193: for (var _fun88193_ip = 0;;) switch (_fun88193_ip) {
            case 0:
                var1 = _closure1_slot7;
                var3 = undefined;
                var0 = function(arg0) { // Environment: var8
                    var0 = arg0;
                    var0 = var0.logs;
                    return var0;
                };
                var9 = var1.bind(var3)(var0);
                var _closure2_slot0 = var9;
                var0 = function(arg0) { // Environment: var8
                    var0 = arg0;
                    var0 = var0.clearLogs;
                    return var0;
                };
                var0 = var1.bind(var3)(var0);
                var _closure2_slot1 = var0;
                var0 = _closure1_slot11;
                var14 = var0.bind(var3)();
                var _closure2_slot2 = var14;
                var1 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 7;
                var0 = var2[var0];
                var4 = var1.bind(var3)(var0);
                var2 = var4.useStateFromStores;
                var0 = _closure1_slot6;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var8
                    var2 = _closure1_slot6;
                    var1 = var2.get;
                    var0 = 'shop_show_debug_overlay';
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var2.bind(var4)(var1, var0);
                var _closure2_slot3 = var0;
                var6 = _closure1_slot2;
                var4 = var6.useEffect;
                var1 = var9.length;
                var2 = new Array(2);
                var2[0] = var1;
                var2[1] = var0;
                var1 = function() { // Environment: var8
                    _fun88197: for (var _fun88197_ip = 0;;) switch (_fun88197_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var2 = var0.length;
                            var0 = 0;
                            var0 = var0 === var2;
                            if (!var0) {
                                _fun88197_ip = 25;
                                continue _fun88197
                            }
                        case 21:
                            var0 = _closure2_slot3;
                        case 25:
                            if (!var0) {
                                _fun88197_ip = 48;
                                continue _fun88197
                            }
                        case 28:
                            var2 = _closure1_slot8;
                            var1 = undefined;
                            var0 = 'Debug log initialized';
                            var0 = var2.bind(var1)(var0);
                        case 48:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var4.bind(var6)(var1, var2);
                if (!var0) {
                    _fun88193_ip = 517;
                    continue _fun88193
                }
            case 154:
                var0 = var9.length;
                var6 = 0;
                if (!(var6 !== var0)) {
                    _fun88193_ip = 517;
                    continue _fun88193
                }
            case 168:
                var1 = var9.slice;
                var0 = global;
                var4 = var0.Math;
                var2 = var4.max;
                var7 = var9.length;
                var0 = 10;
                var0 = var7 - var0;
                var0 = var2.bind(var4)(var6, var0);
                var10 = var1.bind(var9)(var0);
                var2 = _closure1_slot9;
                var1 = _closure1_slot3;
                var0 = {};
                var4 = var14.debugLogContainer;
                var0.style = var4;
                var4 = {};
                var6 = var14.debugLogHeader;
                var4.style = var6;
                var13 = _closure1_slot0;
                var15 = _closure1_slot1;
                var12 = 8;
                var6 = var15[var12];
                var6 = var13.bind(var3)(var6);
                var7 = var6.Text;
                var6 = {};
                var11 = 'text-xs/normal';
                var6.variant = var11;
                var11 = {};
                var18 = var14.debugLogText;
                var19 = var11;
                var16 = copyDataProperties(var19, var18);
                var17 = '#ffffff';
                var16 = 'color';
                var11[var16] = var17;
                var6.style = var11;
                var11 = var9.length;
                var9 = ['Debug Log ('];
                var9[1] = var11;
                var11 = ' entries)';
                var9[2] = var11;
                var6.children = var9;
                var7 = var2.bind(var3)(var7, var6);
                var6 = new Array(2);
                var6[0] = var7;
                var7 = _closure1_slot10;
                var11 = _closure1_slot5;
                var9 = {};
                var16 = function() {
                    var1 = _closure2_slot1;
                    var0 = undefined;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var9.onPress = var16;
                var16 = var14.clearButton;
                var9.style = var16;
                var12 = var15[var12];
                var12 = var13.bind(var3)(var12);
                var13 = var12.Text;
                var12 = {
                    'variant': 'text-xs/bold',
                    'style': null,
                    'children': 'Clear'
                };
                var14 = var14.clearButtonText;
                var12.style = var14;
                var12 = var7.bind(var3)(var13, var12);
                var9.children = var12;
                var9 = var7.bind(var3)(var11, var9);
                var6[1] = var9;
                var4.children = var6;
                var6 = var2.bind(var3)(var1, var4);
                var4 = new Array(2);
                var4[0] = var6;
                var6 = _closure1_slot4;
                var5 = {};
                var9 = var10.map;
                var8 = function(arg0, arg1) { // Environment: var8
                    var4 = _closure1_slot10;
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var0 = 8;
                    var0 = var2[var0];
                    var3 = undefined;
                    var0 = var1.bind(var3)(var0);
                    var2 = var0.Text;
                    var1 = {};
                    var0 = 'text-xs/normal';
                    var1.variant = var0;
                    var0 = _closure2_slot2;
                    var0 = var0.debugLogText;
                    var1.style = var0;
                    var0 = arg0;
                    var1.children = var0;
                    var0 = arg1;
                    var0 = var4.bind(var3)(var2, var1, var0);
                    return var0;
                };
                var8 = var9.bind(var10)(var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            case 517:
                var0 = null;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 3966, 4581, 33, 1297, 671, 566, 4841, 2]);