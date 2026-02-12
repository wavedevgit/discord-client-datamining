// modules/user_profile/native/UserProfileStackedActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
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
    var12 = 1;
    var3 = var5[var12];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot4 = var7;
    var3 = var3.jsxs;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var6 = var8.createStyles;
    var3 = {};
    var9 = {};
    var10 = 'row';
    var9.flexDirection = var10;
    var10 = 4;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var9.marginHorizontal = var13;
    var3.header = var9;
    var9 = {};
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_24;
    var9.width = var13;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_24;
    var9.height = var13;
    var3.headerSpacer = var9;
    var9 = {};
    var9.flex = var12;
    var3.list = var9;
    var9 = {};
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_16;
    var9.marginHorizontal = var10;
    var3.contentContainer = var9;
    var9 = {};
    var10 = 64;
    var9.marginLeft = var10;
    var3.divider = var9;
    var3 = var6.bind(var8)(var3);
    var _closure1_slot6 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.ArrowLargeLeftIcon;
    var3 = {};
    var8 = 'md';
    var3.size = var8;
    var3 = var7.bind(var0)(var6, var3);
    var _closure1_slot7 = var3;
    var3 = 14;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_profile/native/UserProfileStackedActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        _fun68625: for (var _fun68625_ip = 0;;) switch (_fun68625_ip) {
            case 0:
                var3 = arg0;
                var16 = var3.title;
                var5 = var3.children;
                var15 = var3.onBack;
                var2 = {
                    'title': 0,
                    'children': 0,
                    'onBack': 0
                };
                var0 = null;
                var24 = var2;
                var23 = null;
                var1 = silentSetPrototypeOf(var24, var23);
                var24 = {};
                var23 = var3;
                var22 = var2;
                var23 = copyDataProperties(var24, var23, var22);
                var1 = _closure1_slot6;
                var3 = undefined;
                var14 = var1.bind(var3)();
                var10 = var0 != var15;
                var2 = _closure1_slot4;
                var1 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 10;
                var0 = var6[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.BottomSheet;
                var0 = {};
                var24 = var0;
                var4 = copyDataProperties(var24, var23);
                var8 = _closure1_slot5;
                var7 = _closure1_slot3;
                var4 = {};
                var9 = var14.header;
                var6 = new Array(2);
                var6[0] = var9;
                var9 = {};
                var12 = 'center';
                if (!var10) {
                    _fun68625_ip = 150;
                    continue _fun68625
                }
            case 144:
                var12 = 'space-between';
            case 150:
                var9.justifyContent = var12;
                var6[1] = var9;
                var4.style = var6;
                var6 = var10;
                if (!var10) {
                    _fun68625_ip = 277;
                    continue _fun68625
                }
            case 168:
                var13 = _closure1_slot4;
                var20 = _closure1_slot0;
                var21 = _closure1_slot2;
                var9 = 11;
                var9 = var21[var9];
                var9 = var20.bind(var3)(var9);
                var12 = var9.PressableOpacity;
                var9 = {};
                var17 = 'button';
                var9.accessibilityRole = var17;
                var17 = 12;
                var18 = var21[var17];
                var18 = var20.bind(var3)(var18);
                var19 = var18.intl;
                var18 = var19.string;
                var17 = var21[var17];
                var17 = var20.bind(var3)(var17);
                var17 = var17.t;
                var17 = var17["13/7kX"];
                var17 = var18.bind(var19)(var17);
                var9.accessibilityLabel = var17;
                var9.onPress = var15;
                var15 = _closure1_slot7;
                var9.children = var15;
                var6 = var13.bind(var3)(var12, var9);
            case 277:
                var9 = new Array(3);
                var9[0] = var6;
                var15 = _closure1_slot4;
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var6 = 13;
                var6 = var13[var6];
                var6 = var12.bind(var3)(var6);
                var13 = var6.Text;
                var12 = {
                    'variant': 'redesign/heading-18/bold',
                    'color': 'mobile-text-heading-primary',
                    'accessibilityRole': 'header'
                };
                var6 = 'header';
                var12.children = var16;
                var12 = var15.bind(var3)(var13, var12);
                var9[1] = var12;
                if (!var10) {
                    _fun68625_ip = 375;
                    continue _fun68625
                }
            case 349:
                var13 = _closure1_slot4;
                var12 = _closure1_slot3;
                var11 = {};
                var14 = var14.headerSpacer;
                var11.style = var14;
                var10 = var13.bind(var3)(var12, var11);
            case 375:
                var9[2] = var10;
                var4.children = var9;
                var4 = var8.bind(var3)(var7, var4);
                var0[var6] = var4;
                var4 = 'children';
                var0[var4] = var5;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var3;
    var3 = function arg0() {
        _fun68626: for (var _fun68626_ip = 0;;) switch (_fun68626_ip) {
            case 0:
                var2 = arg0;
                var11 = var2.data;
                var _closure2_slot0 = var11;
                var5 = var2.contentContainerStyle;
                var0 = var2.renderItem;
                var _closure2_slot1 = var0;
                var1 = {
                    'data': 0,
                    'contentContainerStyle': 0,
                    'renderItem': 0
                };
                var15 = null;
                var16 = var1;
                var0 = silentSetPrototypeOf(var16, var15);
                var16 = {};
                var15 = var2;
                var14 = var1;
                var15 = copyDataProperties(var16, var15, var14);
                var0 = _closure1_slot6;
                var3 = undefined;
                var6 = var0.bind(var3)();
                var _closure2_slot2 = var6;
                var1 = _closure1_slot1;
                var13 = _closure1_slot2;
                var0 = 5;
                var0 = var13[var0];
                var0 = var1.bind(var3)(var0);
                var0 = var0.bind(var3)();
                var8 = var0.bottom;
                var2 = _closure1_slot4;
                var12 = _closure1_slot0;
                var0 = 6;
                var0 = var13[var0];
                var0 = var12.bind(var3)(var0);
                var1 = var0.BottomSheetFlatList;
                var0 = {};
                var16 = var0;
                var7 = copyDataProperties(var16, var15);
                var7 = 'data';
                var0[var7] = var11;
                var11 = var6.list;
                var7 = 'style';
                var0[var7] = var11;
                var11 = function() {
                    var3 = _closure1_slot4;
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 7;
                    var0 = var2[var0];
                    var2 = undefined;
                    var0 = var1.bind(var2)(var0);
                    var1 = var0.FormDivider;
                    var0 = {};
                    var4 = _closure2_slot2;
                    var4 = var4.divider;
                    var0.style = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var7 = 'ItemSeparatorComponent';
                var0[var7] = var11;
                var7 = var6.contentContainer;
                var6 = new Array(3);
                var6[0] = var7;
                var7 = {};
                var11 = 8;
                var11 = var13[var11];
                var12 = var12.bind(var3)(var11);
                var11 = var12.isAndroid;
                var11 = var11.bind(var12)();
                var9 = 0;
                if (!var11) {
                    _fun68626_ip = 259;
                    continue _fun68626
                }
            case 229:
                var11 = _closure1_slot1;
                var12 = _closure1_slot2;
                var10 = 4;
                var10 = var12[var10];
                var10 = var11.bind(var3)(var10);
                var10 = var10.spacing;
                var9 = var10.PX_16;
            case 259:
                var8 = var8 + var9;
                var7.paddingBottom = var8;
                var6[1] = var7;
                var6[2] = var5;
                var5 = 'contentContainerStyle';
                var0[var5] = var6;
                var5 = function arg0() {
                    var0 = arg0;
                    var4 = var0.item;
                    var3 = var0.index;
                    var2 = _closure2_slot1;
                    var1 = {};
                    var1.item = var4;
                    var1.index = var3;
                    var4 = 0;
                    var4 = var4 === var3;
                    var1.start = var4;
                    var0 = _closure2_slot0;
                    var4 = var0.length;
                    var0 = 1;
                    var0 = var4 - var0;
                    var0 = var3 === var0;
                    var1.end = var0;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var4 = 'renderItem';
                var0[var4] = var5;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.UserProfileStackedActionSheetList = var3;
    var1 = function arg0() {
        var2 = arg0;
        var6 = var2.contentContainerStyle;
        var0 = var2.renderItem;
        var _closure2_slot0 = var0;
        var0 = null;
        var1 = Object.create(var0);
        var0 = 0;
        var1.contentContainerStyle = var0;
        var1.renderItem = var0;
        var10 = {};
        var9 = var2;
        var8 = var1;
        var9 = copyDataProperties(var10, var9, var8);
        var1 = _closure1_slot6;
        var3 = undefined;
        var1 = var1.bind(var3)();
        var _closure2_slot1 = var1;
        var2 = _closure1_slot4;
        var1 = _closure1_slot0;
        var7 = _closure1_slot2;
        var0 = 6;
        var0 = var7[var0];
        var0 = var1.bind(var3)(var0);
        var1 = var0.BottomSheetSectionList;
        var0 = {};
        var10 = var0;
        var5 = copyDataProperties(var10, var9);
        var5 = 'contentContainerStyle';
        var0[var5] = var6;
        var6 = function arg0() {
            var1 = arg0;
            var4 = var1.item;
            var0 = var1.section;
            var3 = var1.index;
            var2 = _closure2_slot0;
            var1 = {};
            var1.item = var4;
            var4 = 0;
            var4 = var4 === var3;
            var1.start = var4;
            var0 = var0.data;
            var4 = var0.length;
            var0 = 1;
            var0 = var4 - var0;
            var0 = var3 === var0;
            var1.end = var0;
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            return var0;
        };
        var5 = 'renderItem';
        var0[var5] = var6;
        var5 = function() {
            var3 = _closure1_slot4;
            var1 = _closure1_slot0;
            var2 = _closure1_slot2;
            var0 = 7;
            var0 = var2[var0];
            var2 = undefined;
            var0 = var1.bind(var2)(var0);
            var1 = var0.FormDivider;
            var0 = {};
            var4 = _closure2_slot1;
            var4 = var4.divider;
            var0.style = var4;
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var4 = 'ItemSeparatorComponent';
        var0[var4] = var5;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.UserProfileStackedActionSheetSectionList = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 1568, 4909, 5441, 478, 5837, 4907, 4880, 1234, 3938, 2]);