// modules/stickers/native/StickerPickerListEmptyState.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var10 = 0;
    var6 = var5[var10];
    var3 = metroImportAll;
    var0 = undefined;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ScrollView;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.EXPRESSION_FOOTER_HEIGHT;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {
        'padding': 0,
        'flex': 1
    };
    var3.emptyStateContainer = var9;
    var9 = {};
    var11 = 5;
    var13 = var5[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.TEXT_SUBTLE;
    var9.color = var13;
    var3.emptyStateBody = var9;
    var9 = {};
    var11 = var5[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_8;
    var9.marginBottom = var11;
    var9.marginTop = var10;
    var3.emptyStateImage = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot7 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Original name: StickerPickerListEmptyState, environment: var1
        _fun74422: for (var _fun74422_ip = 0;;) switch (_fun74422_ip) {
            case 0:
                var2 = arg0;
                var0 = var2.inActionSheet;
                var7 = var2.insetTop;
                var _closure2_slot0 = var7;
                var8 = var2.insetBottom;
                var _closure2_slot1 = var8;
                var2 = _closure1_slot7;
                var3 = undefined;
                var6 = var2.bind(var3)();
                var5 = _closure1_slot3;
                var4 = var5.useMemo;
                var2 = new Array(2);
                var2[0] = var8;
                var2[1] = var7;
                var1 = function() { // Environment: var1
                    var0 = {};
                    var3 = _closure2_slot1;
                    var2 = _closure1_slot5;
                    var2 = var3 + var2;
                    var0.marginBottom = var2;
                    var1 = _closure2_slot0;
                    var0.marginTop = var1;
                    var1 = 1;
                    var0.flex = var1;
                    return var0;
                };
                var4 = var4.bind(var5)(var1, var2);
                if (var0) {
                    _fun74422_ip = 87;
                    continue _fun74422
                }
            case 81:
                var2 = _closure1_slot4;
                _fun74422_ip = 113;
                continue _fun74422;
            case 87:
                var1 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 6;
                var0 = var5[var0];
                var0 = var1.bind(var3)(var0);
                var2 = var0.BottomSheetScrollView;
            case 113:
                var1 = _closure1_slot6;
                var0 = {};
                var0.contentContainerStyle = var4;
                var4 = 'always';
                var0.keyboardShouldPersistTaps = var4;
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var4 = 7;
                var4 = var8[var4];
                var5 = var7.bind(var3)(var4);
                var4 = {};
                var12 = _closure1_slot0;
                var9 = 8;
                var10 = var8[var9];
                var10 = var12.bind(var3)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var9 = var8[var9];
                var9 = var12.bind(var3)(var9);
                var9 = var9.t;
                var9 = var9.jyiGfc;
                var9 = var10.bind(var11)(var9);
                var4.body = var9;
                var9 = var6.emptyStateBody;
                var4.bodyStyle = var9;
                var9 = var6.emptyStateContainer;
                var4.containerStyle = var9;
                var6 = var6.emptyStateImage;
                var4.imageStyle = var6;
                var6 = 9;
                var6 = var8[var6];
                var6 = var7.bind(var3)(var6);
                var4.source = var6;
                var6 = {};
                var7 = 0;
                var6.marginBottom = var7;
                var4.titleStyle = var6;
                var4 = var1.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var1.bind(var3)(var2, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/stickers/native/StickerPickerListEmptyState.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 660, 33, 1297, 671, 4895, 8316, 1234, 9346, 2]);