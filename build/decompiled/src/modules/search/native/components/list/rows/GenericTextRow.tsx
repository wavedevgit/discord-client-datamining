// modules/search/native/components/list/rows/GenericTextRow.tsx
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
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {};
    var10 = 'row';
    var9.flexDirection = var10;
    var3.title = var9;
    var9 = {};
    var10 = 10;
    var9.padding = var10;
    var3.container = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot6 = var3;
    var3 = var6.memo;
    var1 = function arg0() {
        _fun105724: for (var _fun105724_ip = 0;;) switch (_fun105724_ip) {
            case 0:
                var1 = arg0;
                var14 = var1.text;
                var _closure2_slot0 = var14;
                var12 = var1.icon;
                var8 = var1.onPress;
                var _closure2_slot1 = var8;
                var6 = var1.trailing;
                var5 = var1.accessibilityActions;
                var4 = var1.onAccessibilityAction;
                var1 = _closure1_slot6;
                var3 = undefined;
                var15 = var1.bind(var3)();
                var7 = _closure1_slot3;
                var2 = var7.useCallback;
                var1 = _closure1_slot2;
                var0 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun105726: for (var _fun105726_ip = 0;;) switch (_fun105726_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun105726_ip = 41;
                                    continue _fun105726
                                }
                            case 7:
                                var3 = _closure2_slot1;
                                var1 = _closure2_slot0;
                                var2 = undefined;
                                var1 = var3.bind(var2)(var1);
                                SaveGenerator(address = 29);
                            case 27:
                                return var1;
                            case 29:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                if (var3) {
                                    _fun105726_ip = 38;
                                    continue _fun105726
                                }
                            case 35:
                                return var2;
                            case 38:
                                return var1;
                            case 41:
                                return var0;
                        }
                    };
                    return var0;
                };
                var1 = var1.bind(var3)(var0);
                var0 = new Array(2);
                var0[0] = var8;
                var0[1] = var14;
                var7 = var2.bind(var7)(var1, var0);
                var2 = _closure1_slot5;
                var8 = _closure1_slot4;
                var0 = {};
                var1 = var15.title;
                var0.style = var1;
                var1 = _closure1_slot0;
                var9 = _closure1_slot1;
                var11 = 5;
                var11 = var9[var11];
                var11 = var1.bind(var3)(var11);
                var13 = var11.Text;
                var11 = {
                    'lineClamp': 1,
                    'variant': 'text-md/medium',
                    'color': 'mobile-text-heading-primary'
                };
                var15 = var15.container;
                var11.style = var15;
                var11.children = var14;
                var11 = var2.bind(var3)(var13, var11);
                var0.children = var11;
                var8 = var2.bind(var3)(var8, var0);
                var0 = 6;
                var0 = var9[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.SearchListRow;
                var0 = {};
                var9 = null;
                var9 = var9 != var12;
                if (!var9) {
                    _fun105724_ip = 242;
                    continue _fun105724
                }
            case 218:
                var11 = _closure1_slot5;
                var10 = {
                    'size': 'sm',
                    'color': 'mobile-text-heading-primary'
                };
                var9 = var11.bind(var3)(var12, var10);
            case 242:
                var0.icon = var9;
                var0.label = var8;
                var0.onPress = var7;
                var0.trailing = var6;
                var0.accessibilityActions = var5;
                var0.onAccessibilityAction = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/search/native/components/list/rows/GenericTextRow.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 31, 27, 33, 1297, 3943, 13757, 2]);