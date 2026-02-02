// modules/notifications/settings/native/MuteAppDmActionSheet.tsx
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
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot4 = var6;
    var3 = var3.jsxs;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 4;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_BASE_LOWEST;
    var8.backgroundColor = var11;
    var3.sheet = var8;
    var11 = 8;
    var8 = {
        'alignItems': 'center',
        'marginBottom': 8
    };
    var3.iconContainer = var8;
    var8 = {
        'width': 48,
        'height': 48
    };
    var3.iconBackground = var8;
    var8 = {};
    var12 = 16;
    var8.padding = var12;
    var3.content = var8;
    var8 = {
        'textAlign': 'center',
        'marginBottom': 8,
        'paddingHorizontal': 16
    };
    var3.headerText = var8;
    var8 = {
        'textAlign': 'center',
        'marginBottom': 16,
        'paddingHorizontal': 16
    };
    var3.infoText = var8;
    var8 = {
        'marginTop': 8,
        'marginBottom': 16
    };
    var3.form = var8;
    var8 = {};
    var8.marginTop = var11;
    var3.dismissButtonContainer = var8;
    var8 = {
        'borderRadius': null,
        'backgroundColor': null,
        'height': 24,
        'width': 24,
        'padding': 4,
        'alignContent': 'center'
    };
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.round;
    var8.borderRadius = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_FEEDBACK_NOTIFICATION;
    var8.backgroundColor = var9;
    var3.mutedNotificationContainer = var8;
    var8 = {
        'width': 16,
        'height': 16
    };
    var3.mutedNotification = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot6 = var3;
    var3 = 17;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/notifications/settings/native/MuteAppDmActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var0 = _closure1_slot6;
        var3 = undefined;
        var10 = var0.bind(var3)();
        var _closure2_slot0 = var10;
        var0 = arg0;
        var0 = var0.channel;
        var _closure2_slot1 = var0;
        var2 = _closure1_slot4;
        var15 = _closure1_slot0;
        var16 = _closure1_slot2;
        var0 = 5;
        var0 = var16[var0];
        var0 = var15.bind(var3)(var0);
        var1 = var0.BottomSheet;
        var0 = {};
        var12 = true;
        var0.startExpanded = var12;
        var4 = var10.sheet;
        var0.backgroundStyles = var4;
        var6 = _closure1_slot5;
        var5 = _closure1_slot3;
        var4 = {};
        var7 = var10.content;
        var4.style = var7;
        var7 = {};
        var9 = var10.iconContainer;
        var7.style = var9;
        var9 = _closure1_slot1;
        var8 = 6;
        var8 = var16[var8];
        var9 = var9.bind(var3)(var8);
        var8 = {};
        var13 = var10.iconBackground;
        var8.style = var13;
        var13 = 7;
        var13 = var16[var13];
        var13 = var15.bind(var3)(var13);
        var13 = var13.BellIcon;
        var8.IconComponent = var13;
        var8.active = var12;
        var12 = 8;
        var13 = var16[var12];
        var13 = var15.bind(var3)(var13);
        var17 = var13.intl;
        var14 = var17.string;
        var13 = var16[var12];
        var13 = var15.bind(var3)(var13);
        var13 = var13.t;
        var13 = var13.uAmAiL;
        var13 = var14.bind(var17)(var13);
        var8.accessibilityLabel = var13;
        var8 = var2.bind(var3)(var9, var8);
        var7.children = var8;
        var8 = var2.bind(var3)(var5, var7);
        var7 = new Array(5);
        var7[0] = var8;
        var8 = 9;
        var9 = var16[var8];
        var9 = var15.bind(var3)(var9);
        var13 = var9.Text;
        var9 = {
            'variant': 'heading-lg/bold',
            'color': 'mobile-text-heading-primary'
        };
        var14 = var10.headerText;
        var9.style = var14;
        var14 = var16[var12];
        var14 = var15.bind(var3)(var14);
        var18 = var14.intl;
        var17 = var18.string;
        var14 = var16[var12];
        var14 = var15.bind(var3)(var14);
        var14 = var14.t;
        var14 = var14.uAmAiL;
        var14 = var17.bind(var18)(var14);
        var9.children = var14;
        var9 = var2.bind(var3)(var13, var9);
        var7[1] = var9;
        var8 = var16[var8];
        var8 = var15.bind(var3)(var8);
        var9 = var8.Text;
        var8 = {
            'variant': 'text-md/normal',
            'color': 'text-default'
        };
        var13 = var10.infoText;
        var8.style = var13;
        var13 = var16[var12];
        var13 = var15.bind(var3)(var13);
        var17 = var13.intl;
        var14 = var17.string;
        var13 = var16[var12];
        var13 = var15.bind(var3)(var13);
        var13 = var13.t;
        var13 = var13.mscFJU;
        var13 = var14.bind(var17)(var13);
        var8.children = var13;
        var8 = var2.bind(var3)(var9, var8);
        var7[2] = var8;
        var9 = 10;
        var8 = var16[var9];
        var8 = var15.bind(var3)(var8);
        var13 = var8.Button;
        var8 = {};
        var14 = 'destructive';
        var8.variant = var14;
        var14 = var16[var12];
        var14 = var15.bind(var3)(var14);
        var18 = var14.intl;
        var17 = var18.string;
        var14 = var16[var12];
        var14 = var15.bind(var3)(var14);
        var14 = var14.t;
        var14 = var14.uAmAiL;
        var14 = var17.bind(var18)(var14);
        var8.text = var14;
        var14 = function() {
            var2 = _closure1_slot1;
            var8 = _closure1_slot2;
            var0 = 11;
            var3 = var8[var0];
            var0 = undefined;
            var9 = var2.bind(var0)(var3);
            var6 = var9.updateChannelOverrideSettings;
            var3 = _closure2_slot1;
            var12 = var3.id;
            var4 = {};
            var3 = true;
            var4.muted = var3;
            var7 = _closure1_slot0;
            var1 = 12;
            var1 = var8[var1];
            var1 = var7.bind(var0)(var1);
            var1 = var1.NotificationLabels;
            var10 = var1.Muted;
            var13 = null;
            var14 = var9;
            var11 = var4;
            var1 = var14[var6](var13, var12, var11, var10, var9);
            var1 = 13;
            var1 = var8[var1];
            var3 = var2.bind(var0)(var1);
            var1 = var3.hideActionSheet;
            var1 = var1.bind(var3)();
            var1 = 14;
            var1 = var8[var1];
            var3 = var2.bind(var0)(var1);
            var2 = var3.open;
            var1 = {};
            var4 = 'NOTIFICATIONS_MUTED';
            var1.key = var4;
            var4 = 8;
            var5 = var8[var4];
            var5 = var7.bind(var0)(var5);
            var6 = var5.intl;
            var5 = var6.string;
            var4 = var8[var4];
            var4 = var7.bind(var0)(var4);
            var4 = var4.t;
            var4 = var4.EgGpkx;
            var4 = var5.bind(var6)(var4);
            var1.content = var4;
            var4 = function() {
                var3 = _closure1_slot4;
                var2 = _closure1_slot3;
                var1 = {};
                var6 = _closure2_slot0;
                var4 = var6.mutedNotificationContainer;
                var1.style = var4;
                var8 = _closure1_slot1;
                var9 = _closure1_slot2;
                var0 = 15;
                var4 = var9[var0];
                var0 = undefined;
                var5 = var8.bind(var0)(var4);
                var4 = {};
                var7 = 16;
                var7 = var9[var7];
                var7 = var8.bind(var0)(var7);
                var4.source = var7;
                var7 = 4;
                var7 = var9[var7];
                var7 = var8.bind(var0)(var7);
                var7 = var7.unsafe_rawColors;
                var7 = var7.WHITE;
                var4.color = var7;
                var6 = var6.mutedNotification;
                var4.style = var6;
                var4 = var3.bind(var0)(var5, var4);
                var1.children = var4;
                var0 = var3.bind(var0)(var2, var1);
                return var0;
            };
            var1.icon = var4;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var8.onPress = var14;
        var8 = var2.bind(var3)(var13, var8);
        var7[3] = var8;
        var8 = {};
        var10 = var10.dismissButtonContainer;
        var8.style = var10;
        var9 = var16[var9];
        var9 = var15.bind(var3)(var9);
        var10 = var9.Button;
        var9 = {};
        var13 = 'secondary';
        var9.variant = var13;
        var13 = var16[var12];
        var13 = var15.bind(var3)(var13);
        var14 = var13.intl;
        var13 = var14.string;
        var12 = var16[var12];
        var12 = var15.bind(var3)(var12);
        var12 = var12.t;
        var12 = var12.WAI6xu;
        var12 = var13.bind(var14)(var12);
        var9.text = var12;
        var11 = function() {
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 13;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.hideActionSheet;
            var1 = var1.bind(var2)();
            return var0;
        };
        var9.onPress = var11;
        var9 = var2.bind(var3)(var10, var9);
        var8.children = var9;
        var8 = var2.bind(var3)(var5, var8);
        var7[4] = var8;
        var4.children = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 4896, 11681, 8133, 1234, 3902, 4045, 4663, 4660, 3239, 3109, 4047, 6629, 2]);