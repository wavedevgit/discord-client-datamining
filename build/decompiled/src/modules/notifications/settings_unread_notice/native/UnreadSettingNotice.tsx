// modules/notifications/settings_unread_notice/native/UnreadSettingNotice.tsx
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
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var10 = 1;
    var3 = var5[var10];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var9 = 2;
    var3 = var5[var9];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ChannelNotificationSettingsFlags;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot5 = var6;
    var3 = var3.jsxs;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'display': 'flex',
        'flexDirection': 'row',
        'paddingVertical': null,
        'paddingHorizontal': null,
        'borderBottomWidth': 1
    };
    var11 = 5;
    var13 = var5[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_12;
    var8.paddingVertical = var13;
    var13 = var5[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var8.paddingHorizontal = var13;
    var13 = var5[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BORDER_SUBTLE;
    var8.borderBottomColor = var13;
    var13 = var5[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOW;
    var8.backgroundColor = var13;
    var11 = var5[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.shadows;
    var15 = var11.SHADOW_LOW;
    var16 = var8;
    var11 = copyDataProperties(var16, var15);
    var3.content = var8;
    var8 = {};
    var8.flex = var10;
    var3.informations = var8;
    var8 = {
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center',
        'marginLeft': 16
    };
    var3.actions = var8;
    var8 = {
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var3.inlineTextWithIcon = var8;
    var8 = {};
    var8.marginTop = var9;
    var3.icon = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/notifications/settings_unread_notice/native/UnreadSettingNotice.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: UnreadSettingNoticeConnected, environment: var1
        var8 = arg0;
        var _closure2_slot0 = var8;
        var0 = _closure1_slot7;
        var3 = undefined;
        var12 = var0.bind(var3)();
        var2 = _closure1_slot6;
        var1 = _closure1_slot3;
        var0 = {};
        var4 = var12.content;
        var0.style = var4;
        var6 = _closure1_slot5;
        var5 = _closure1_slot1;
        var15 = _closure1_slot2;
        var4 = 6;
        var4 = var15[var4];
        var5 = var5.bind(var3)(var4);
        var4 = {};
        var8 = var8.channel;
        var8 = var8.id;
        var4.id = var8;
        var5 = var6.bind(var3)(var5, var4);
        var4 = new Array(3);
        var4[0] = var5;
        var5 = {};
        var8 = var12.informations;
        var5.style = var8;
        var14 = _closure1_slot0;
        var9 = 7;
        var7 = var15[var9];
        var7 = var14.bind(var3)(var7);
        var8 = var7.Text;
        var7 = {};
        var11 = 'text-md/semibold';
        var7.variant = var11;
        var11 = 8;
        var13 = var15[var11];
        var13 = var14.bind(var3)(var13);
        var17 = var13.intl;
        var16 = var17.string;
        var13 = var15[var11];
        var13 = var14.bind(var3)(var13);
        var13 = var13.t;
        var13 = var13.i4xQ5o;
        var13 = var16.bind(var17)(var13);
        var7.children = var13;
        var7 = var6.bind(var3)(var8, var7);
        var5.children = var7;
        var5 = var6.bind(var3)(var1, var5);
        var4[1] = var5;
        var5 = {};
        var7 = var12.actions;
        var5.style = var7;
        var7 = 9;
        var7 = var15[var7];
        var7 = var14.bind(var3)(var7);
        var8 = var7.PressableOpacity;
        var7 = {};
        var13 = 'button';
        var7.accessibilityRole = var13;
        var12 = var12.inlineTextWithIcon;
        var7.style = var12;
        var10 = function() { // Original name: onPress, environment: var10
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var0 = 10;
            var2 = var2[var0];
            var0 = undefined;
            var5 = var3.bind(var0)(var2);
            var2 = _closure2_slot0;
            var3 = var2.channel;
            var4 = var3.guild_id;
            var3 = var2.channel;
            var3 = var3.id;
            var1 = _closure1_slot4;
            var1 = var1.UNREADS_ONLY_MENTIONS;
            var1 = var5.bind(var0)(var4, var3, var1);
            var1 = var2.clearUnreadsNotice;
            var1 = var1.bind(var2)();
            return var0;
        };
        var7.onPress = var10;
        var9 = var15[var9];
        var9 = var14.bind(var3)(var9);
        var10 = var9.Text;
        var9 = {
            'variant': 'text-xs/medium',
            'color': 'text-link'
        };
        var12 = var15[var11];
        var12 = var14.bind(var3)(var12);
        var13 = var12.intl;
        var12 = var13.string;
        var11 = var15[var11];
        var11 = var14.bind(var3)(var11);
        var11 = var11.t;
        var11 = var11.KyUKhT;
        var11 = var12.bind(var13)(var11);
        var9.children = var11;
        var9 = var6.bind(var3)(var10, var9);
        var7.children = var9;
        var7 = var6.bind(var3)(var8, var7);
        var5.children = var7;
        var5 = var6.bind(var3)(var1, var5);
        var4[2] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 665, 33, 1297, 671, 11610, 3901, 1234, 4864, 11611, 2]);