// modules/search/native/components/list/rows/GuildChannelRow.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        var0 = arg0;
        var9 = var0.channel;
        var0 = _closure1_slot7;
        var3 = undefined;
        var4 = var0.bind(var3)();
        var1 = _closure1_slot1;
        var6 = _closure1_slot2;
        var0 = 6;
        var0 = var6[var0];
        var0 = var1.bind(var3)(var0);
        var7 = var0.bind(var3)(var9);
        var2 = _closure1_slot6;
        var1 = _closure1_slot4;
        var0 = {};
        var4 = var4.content;
        var0.style = var4;
        var5 = _closure1_slot0;
        var4 = 7;
        var4 = var6[var4];
        var6 = var5.bind(var3)(var4);
        var5 = var6.renderChannelContent;
        var4 = {};
        var4.channel = var9;
        var8 = _closure1_slot5;
        var4.layout = var8;
        var4.name = var7;
        var4 = var5.bind(var6)(var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot8 = var0;
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
    var3 = arg3;
    var0 = undefined;
    var6 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.Image;
    var _closure1_slot3 = var7;
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.CHANNEL_LIST_SEARCH_LAYOUT;
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
    var9 = {};
    var12 = 10;
    var9.paddingVertical = var12;
    var3.container = var9;
    var9 = {
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var3.content = var9;
    var9 = {};
    var9.marginRight = var10;
    var3.iconContainer = var9;
    var9 = {
        'width': 20,
        'height': 20,
        'marginRight': 8
    };
    var10 = 5;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.TEXT_MUTED;
    var9.tintColor = var10;
    var3.simpleIcon = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot7 = var3;
    var3 = var6.memo;
    var1 = function arg0() {
        var2 = arg0;
        var11 = var2.channel;
        var8 = var2.subtitle;
        var6 = var2.trailing;
        var5 = var2.extras;
        var7 = var2.onPress;
        var1 = {
            'channel': 0,
            'subtitle': 0,
            'trailing': 0,
            'extras': 0,
            'onPress': 0
        };
        var19 = null;
        var20 = var1;
        var0 = silentSetPrototypeOf(var20, var19);
        var20 = {};
        var19 = var2;
        var18 = var1;
        var13 = copyDataProperties(var20, var19, var18);
        var0 = _closure1_slot7;
        var3 = undefined;
        var9 = var0.bind(var3)();
        var1 = _closure1_slot0;
        var15 = _closure1_slot2;
        var0 = 9;
        var0 = var15[var0];
        var10 = var1.bind(var3)(var0);
        var2 = var10.getChannelAccessibilityProps;
        var0 = {
            'channel': null,
            'unread': false,
            'mentionCount': 0
        };
        var0.channel = var11;
        var14 = var2.bind(var10)(var0);
        var0 = {};
        var12 = _closure1_slot6;
        var10 = _closure1_slot3;
        var2 = {};
        var16 = var9.simpleIcon;
        var2.style = var16;
        var16 = 8;
        var16 = var15[var16];
        var17 = var1.bind(var3)(var16);
        var16 = var17.getSimpleChannelIcon;
        var16 = var16.bind(var17)(var11);
        var2.source = var16;
        var2 = var12.bind(var3)(var10, var2);
        var0.icon = var2;
        var2 = 32;
        var0.iconWidth = var2;
        var12 = var0.icon;
        var10 = var0.iconWidth;
        var2 = _closure1_slot6;
        var0 = 10;
        var0 = var15[var0];
        var0 = var1.bind(var3)(var0);
        var1 = var0.SearchListRow;
        var0 = {};
        var20 = var0;
        var19 = var14;
        var14 = copyDataProperties(var20, var19);
        var20 = var0;
        var19 = var13;
        var13 = copyDataProperties(var20, var19);
        var14 = var9.container;
        var13 = 'containerStyle';
        var0[var13] = var14;
        var13 = var9.iconContainer;
        var9 = 'iconContainerStyle';
        var0[var9] = var13;
        var9 = 'icon';
        var0[var9] = var12;
        var9 = 'iconWidth';
        var0[var9] = var10;
        var10 = _closure1_slot6;
        var9 = _closure1_slot8;
        var4 = {};
        var4.channel = var11;
        var9 = var10.bind(var3)(var9, var4);
        var4 = 'label';
        var0[var4] = var9;
        var4 = 'subLabel';
        var0[var4] = var8;
        var4 = 'onPress';
        var0[var4] = var7;
        var4 = 'trailing';
        var0[var4] = var6;
        var4 = 'extras';
        var0[var4] = var5;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var1 = var3.bind(var6)(var1);
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/search/native/components/list/rows/GuildChannelRow.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 8935, 33, 1297, 671, 4794, 13761, 4809, 13763, 13753, 2]);