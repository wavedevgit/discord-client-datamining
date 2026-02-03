// modules/explicit_media_redaction/native/ExplicitMediaSettingsActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
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
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot5 = var6;
    var3 = var3.jsxs;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 4;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_24;
    var8.marginTop = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_16;
    var8.paddingHorizontal = var9;
    var3.content = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/explicit_media_redaction/native/ExplicitMediaSettingsActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun81664: for (var _fun81664_ip = 0;;) switch (_fun81664_ip) {
            case 0:
                var0 = arg0;
                var16 = var0.title;
                var6 = var0.subtitle;
                var12 = var0.options;
                var _closure2_slot0 = var12;
                var13 = var0.currentValue;
                var0 = _closure1_slot7;
                var3 = undefined;
                var8 = var0.bind(var3)();
                var4 = _closure1_slot3;
                var2 = var4.useCallback;
                var1 = new Array(1);
                var1[0] = var12;
                var0 = function(arg0) { // Environment: var10
                    _fun81665: for (var _fun81665_ip = 0;;) switch (_fun81665_ip) {
                        case 0:
                            var1 = arg0;
                            var _closure3_slot0 = var1;
                            var2 = _closure2_slot0;
                            var1 = var2.find;
                            var0 = function(arg0) { // Environment: var0
                                var0 = arg0;
                                var1 = var0.value;
                                var0 = _closure3_slot0;
                                var0 = var1 === var0;
                                return var0;
                            };
                            var1 = var1.bind(var2)(var0);
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun81665_ip = 83;
                                continue _fun81665
                            }
                        case 39:
                            var0 = var1.onPress;
                            var0 = var0.bind(var1)();
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 5;
                            var1 = var1[var0];
                            var0 = undefined;
                            var1 = var2.bind(var0)(var1);
                            var0 = var1.hideActionSheet;
                            var0 = var0.bind(var1)();
                        case 83:
                            var0 = undefined;
                            return var0;
                    }
                };
                var11 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot6;
                var9 = _closure1_slot0;
                var15 = _closure1_slot2;
                var0 = 6;
                var0 = var15[var0];
                var0 = var9.bind(var3)(var0);
                var1 = var0.BottomSheet;
                var0 = {};
                var4 = true;
                var0.startExpanded = var4;
                var7 = _closure1_slot5;
                var4 = 7;
                var4 = var15[var4];
                var4 = var9.bind(var3)(var4);
                var5 = var4.BottomSheetTitleHeader;
                var4 = {};
                var4.title = var16;
                var4.subtitle = var6;
                var5 = var7.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var6 = _closure1_slot4;
                var5 = {};
                var8 = var8.content;
                var5.style = var8;
                var8 = 8;
                var8 = var15[var8];
                var8 = var9.bind(var3)(var8);
                var9 = var8.TableRadioGroup;
                var8 = {};
                var15 = null;
                if (!(var15 == var13)) {
                    _fun81664_ip = 233;
                    continue _fun81664
                }
            case 201:
                var15 = _closure1_slot0;
                var16 = _closure1_slot2;
                var14 = 9;
                var14 = var16[var14];
                var14 = var15.bind(var3)(var14);
                var14 = var14.ExplicitContentRedaction;
                var13 = var14.SHOW;
            case 233:
                var8.defaultValue = var13;
                var8.onChange = var11;
                var11 = var12.map;
                var10 = function(arg0) { // Environment: var10
                    var0 = arg0;
                    var4 = _closure1_slot5;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 10;
                    var1 = var3[var1];
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.TableRadioRow;
                    var1 = {};
                    var5 = var0.label;
                    var1.label = var5;
                    var5 = var0.value;
                    var1.value = var5;
                    var0 = var0.value;
                    var0 = var4.bind(var3)(var2, var1, var0);
                    return var0;
                };
                var10 = var11.bind(var12)(var10);
                var8.children = var10;
                var8 = var7.bind(var3)(var9, var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 3269, 4926, 5206, 5417, 1311, 5416, 2]);