// modules/user_settings/native/connections/two_way_link/OneWayToTwoWayLinkUpsell.tsx
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
    var11 = var3.Fonts;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ContentDismissActionType;
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot6 = var6;
    var3 = var3.jsxs;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'backgroundColor': null,
        'margin': 16,
        'padding': 12
    };
    var9 = 6;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_MOD_NORMAL;
    var8.backgroundColor = var12;
    var16 = 16;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.sm;
    var8.borderRadius = var12;
    var3.container = var8;
    var8 = {
        'flexDirection': 'row',
        'marginBottom': 4,
        'alignItems': 'center'
    };
    var3.header = var8;
    var8 = {
        'flexGrow': 1,
        'flexShrink': 1
    };
    var3.titleContainer = var8;
    var8 = {};
    var12 = 7;
    var13 = var5[var12];
    var15 = var10.bind(var0)(var13);
    var14 = var11.PRIMARY_SEMIBOLD;
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.TEXT_DEFAULT;
    var18 = var15.bind(var0)(var14, var13, var16);
    var19 = var8;
    var13 = copyDataProperties(var19, var18);
    var3.title = var8;
    var8 = {};
    var12 = var5[var12];
    var12 = var10.bind(var0)(var12);
    var11 = var11.PRIMARY_MEDIUM;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var10 = var9.TEXT_DEFAULT;
    var9 = 14;
    var18 = var12.bind(var0)(var11, var10, var9);
    var19 = var8;
    var9 = copyDataProperties(var19, var18);
    var3.body = var8;
    var8 = {
        'paddingHorizontal': 6,
        'width': 'auto',
        'alignSelf': 'flex-start',
        'marginBottom': 4
    };
    var3.newContainer = var8;
    var8 = {};
    var9 = 8;
    var8.marginTop = var9;
    var3.reconnectButton = var8;
    var8 = {
        'alignSelf': 'center',
        'marginLeft': 16
    };
    var3.upsellImage = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot8 = var3;
    var3 = function arg0() {
        var0 = arg0;
        var7 = var0.markAsDismissed;
        var _closure2_slot0 = var7;
        var2 = _closure1_slot8;
        var3 = undefined;
        var4 = var2.bind(var3)();
        var6 = _closure1_slot3;
        var5 = var6.useEffect;
        var2 = new Array(1);
        var2[0] = var7;
        var1 = function() { // Environment: var1
            var2 = _closure2_slot0;
            var0 = _closure1_slot5;
            var1 = var0.UNKNOWN;
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            return var0;
        };
        var1 = var5.bind(var6)(var1, var2);
        var2 = _closure1_slot6;
        var1 = _closure1_slot1;
        var5 = _closure1_slot2;
        var0 = 8;
        var0 = var5[var0];
        var1 = var1.bind(var3)(var0);
        var0 = {};
        var4 = var4.newContainer;
        var0.containerStyle = var4;
        var4 = 'text-xs/bold';
        var0.variant = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot9 = var3;
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/connections/two_way_link/OneWayToTwoWayLinkUpsell.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Environment: var1
        var0 = arg0;
        var18 = var0.title;
        var11 = var0.body;
        var14 = var0.img;
        var19 = var0.newIndicatorDismissibleContent;
        var _closure2_slot0 = var19;
        var8 = var0.onPress;
        var0 = _closure1_slot8;
        var3 = undefined;
        var9 = var0.bind(var3)();
        var2 = _closure1_slot7;
        var1 = _closure1_slot4;
        var0 = {};
        var4 = var9.container;
        var0.style = var4;
        var4 = {};
        var6 = var9.header;
        var4.style = var6;
        var10 = {};
        var6 = var9.titleContainer;
        var10.style = var6;
        var7 = _closure1_slot6;
        var6 = _closure1_slot1;
        var13 = _closure1_slot2;
        var12 = 9;
        var12 = var13[var12];
        var15 = var6.bind(var3)(var12);
        var12 = {};
        var17 = new Array(1);
        var17[0] = var19;
        var12.contentTypes = var17;
        var16 = function arg0() {
            _fun82308: for (var _fun82308_ip = 0;;) switch (_fun82308_ip) {
                case 0:
                    var0 = arg0;
                    var3 = var0.visibleContent;
                    var1 = var0.markAsDismissed;
                    var2 = _closure2_slot0;
                    var0 = null;
                    if (!(var3 === var2)) {
                        _fun82308_ip = 54;
                        continue _fun82308
                    }
                case 28:
                    var4 = _closure1_slot6;
                    var3 = _closure1_slot9;
                    var2 = {};
                    var2.markAsDismissed = var1;
                    var1 = undefined;
                    var0 = var4.bind(var1)(var3, var2);
                case 54:
                    return var0;
            }
        };
        var12.children = var16;
        var12 = var7.bind(var3)(var15, var12);
        var15 = new Array(2);
        var15[0] = var12;
        var12 = _closure1_slot0;
        var5 = 10;
        var16 = var13[var5];
        var16 = var12.bind(var3)(var16);
        var17 = var16.Text;
        var16 = {};
        var19 = var9.title;
        var16.style = var19;
        var19 = 'text-md/semibold';
        var16.variant = var19;
        var16.children = var18;
        var16 = var7.bind(var3)(var17, var16);
        var15[1] = var16;
        var10.children = var15;
        var15 = var2.bind(var3)(var1, var10);
        var10 = new Array(2);
        var10[0] = var15;
        var10[1] = var14;
        var4.children = var10;
        var10 = var2.bind(var3)(var1, var4);
        var4 = new Array(3);
        var4[0] = var10;
        var5 = var13[var5];
        var5 = var12.bind(var3)(var5);
        var10 = var5.Text;
        var5 = {};
        var14 = var9.body;
        var5.style = var14;
        var14 = 'text-sm/medium';
        var5.variant = var14;
        var5.children = var11;
        var5 = var7.bind(var3)(var10, var5);
        var4[1] = var5;
        var5 = 11;
        var5 = var13[var5];
        var6 = var6.bind(var3)(var5);
        var5 = {};
        var9 = var9.reconnectButton;
        var5.style = var9;
        var9 = 12;
        var10 = var13[var9];
        var10 = var12.bind(var3)(var10);
        var11 = var10.intl;
        var10 = var11.string;
        var9 = var13[var9];
        var9 = var12.bind(var3)(var9);
        var9 = var9.t;
        var9 = var9.vD60Pv;
        var9 = var10.bind(var11)(var9);
        var5.text = var9;
        var9 = true;
        var5.foregroundRipple = var9;
        var5.onPress = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[2] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.OneWayToTwoWayLinkUpsell = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 660, 1369, 33, 1297, 671, 4645, 8141, 5919, 3900, 4836, 1234, 2]);