// modules/expression_picker/native/useExpressionPickerTabData.tsx
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
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.ExpressionPickerOrder;
    var _closure1_slot3 = var6;
    var3 = var3.ExpressionPickerViewType;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/expression_picker/native/useExpressionPickerTabData.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun74106: for (var _fun74106_ip = 0;;) switch (_fun74106_ip) {
            case 0:
                var1 = arg0;
                var7 = var1.expressionType;
                var6 = var1.expressionPickerTabs;
                var _closure2_slot0 = var6;
                var3 = _closure1_slot3;
                var2 = var3.indexOf;
                var3 = var2.bind(var3)(var7);
                var2 = 0;
                var3 = var3 >= var2;
                var4 = 0;
                if (!var3) {
                    _fun74106_ip = 65;
                    continue _fun74106
                }
            case 50:
                var5 = _closure1_slot3;
                var3 = var5.indexOf;
                var4 = var3.bind(var5)(var7);
            case 65:
                var5 = _closure1_slot2;
                var3 = var5.useMemo;
                var1 = new Array(1);
                var1[0] = var6;
                var0 = function() { // Environment: var0
                    var3 = {};
                    var0 = {};
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot1;
                    var4 = 2;
                    var2 = var11[var4];
                    var9 = undefined;
                    var2 = var10.bind(var9)(var2);
                    var7 = var2.intl;
                    var6 = var7.string;
                    var2 = var11[var4];
                    var2 = var10.bind(var9)(var2);
                    var2 = var2.t;
                    var2 = var2.Xu3wE3;
                    var2 = var6.bind(var7)(var2);
                    var0.label = var2;
                    var2 = _closure1_slot4;
                    var6 = var2.EMOJI;
                    var0.viewType = var6;
                    var7 = _closure2_slot0;
                    var8 = var7.includes;
                    var6 = var2.EMOJI;
                    var6 = var8.bind(var7)(var6);
                    var0.show = var6;
                    var5 = _closure1_slot3;
                    var8 = var5.indexOf;
                    var6 = var2.EMOJI;
                    var6 = var8.bind(var5)(var6);
                    var0.order = var6;
                    var3.EMOJI = var0;
                    var0 = {};
                    var6 = var11[var4];
                    var6 = var10.bind(var9)(var6);
                    var12 = var6.intl;
                    var8 = var12.string;
                    var6 = var11[var4];
                    var6 = var10.bind(var9)(var6);
                    var6 = var6.t;
                    var6 = var6["6gUTsS"];
                    var6 = var8.bind(var12)(var6);
                    var0.label = var6;
                    var6 = var2.GIF;
                    var0.viewType = var6;
                    var8 = var7.includes;
                    var6 = var2.GIF;
                    var6 = var8.bind(var7)(var6);
                    var0.show = var6;
                    var8 = var5.indexOf;
                    var6 = var2.GIF;
                    var6 = var8.bind(var5)(var6);
                    var0.order = var6;
                    var3.GIF = var0;
                    var0 = {};
                    var6 = var11[var4];
                    var6 = var10.bind(var9)(var6);
                    var8 = var6.intl;
                    var6 = var8.string;
                    var4 = var11[var4];
                    var4 = var10.bind(var9)(var4);
                    var4 = var4.t;
                    var4 = var4.nf1s3u;
                    var4 = var6.bind(var8)(var4);
                    var0.label = var4;
                    var4 = var2.STICKER;
                    var0.viewType = var4;
                    var6 = var7.includes;
                    var4 = var2.STICKER;
                    var4 = var6.bind(var7)(var4);
                    var0.show = var4;
                    var4 = var5.indexOf;
                    var2 = var2.STICKER;
                    var2 = var4.bind(var5)(var2);
                    var0.order = var2;
                    var3.STICKER = var0;
                    var0 = global;
                    var2 = var0.Object;
                    var0 = var2.values;
                    var3 = var0.bind(var2)(var3);
                    var2 = var3.filter;
                    var0 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var0 = var0.show;
                        return var0;
                    };
                    var3 = var2.bind(var3)(var0);
                    var2 = var3.sort;
                    var0 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var0 = var0.order;
                        return var0;
                    };
                    var3 = var2.bind(var3)(var0);
                    var0 = {};
                    var0.expressionPickerTabsSorted = var3;
                    var2 = var3.map;
                    var1 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var0 = var0.label;
                        return var0;
                    };
                    var1 = var2.bind(var3)(var1);
                    var0.expressionPickerTabStrings = var1;
                    return var0;
                };
                var0 = var3.bind(var5)(var0, var1);
                var3 = var0.expressionPickerTabsSorted;
                var1 = var0.expressionPickerTabStrings;
                var0 = {};
                var0.expressionPickerSelectedIndex = var4;
                var5 = var3.length;
                if (!(!(var4 < var5))) {
                    _fun74106_ip = 129;
                    continue _fun74106
                }
            case 123:
                var2 = var3[var2];
                _fun74106_ip = 133;
                continue _fun74106;
            case 129:
                var2 = var3[var4];
            case 133:
                var2 = var2.viewType;
                var0.expressionPickerViewType = var2;
                var0.expressionPickerTabStrings = var1;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1565, 1234, 2]);