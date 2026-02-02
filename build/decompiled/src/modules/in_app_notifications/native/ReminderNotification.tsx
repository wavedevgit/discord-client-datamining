// modules/in_app_notifications/native/ReminderNotification.tsx
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
    var6 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
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
    var7 = var8.createStyles;
    var3 = {};
    var9 = {
        'position': 'absolute',
        'width': 20,
        'height': 20,
        'right': 0,
        'bottom': 0,
        'backgroundColor': null,
        'borderRadius': null,
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var10 = 4;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BRAND;
    var9.backgroundColor = var12;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.radii;
    var10 = var10.round;
    var9.borderRadius = var10;
    var3.cutoutIconContainer = var9;
    var9 = {};
    var10 = 'relative';
    var9.position = var10;
    var3.avatarContainer = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot6 = var3;
    var3 = {
        'direction': null,
        'radius': 12,
        'inset': 4294967294
    };
    var7 = 5;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var7 = var7.CutoutDirection;
    var7 = var7.BOTTOM_RIGHT;
    var3.direction = var7;
    var _closure1_slot7 = var3;
    var3 = function arg0() {
        var0 = arg0;
        var13 = var0.user;
        var8 = var0.guildId;
        var0 = _closure1_slot6;
        var3 = undefined;
        var7 = var0.bind(var3)();
        var2 = _closure1_slot5;
        var1 = _closure1_slot3;
        var0 = {};
        var4 = var7.avatarContainer;
        var0.style = var4;
        var6 = _closure1_slot4;
        var10 = _closure1_slot1;
        var11 = _closure1_slot2;
        var12 = 6;
        var4 = var11[var12];
        var5 = var10.bind(var3)(var4);
        var4 = {};
        var4.user = var13;
        var4.guildId = var8;
        var8 = _closure1_slot0;
        var12 = var11[var12];
        var12 = var8.bind(var3)(var12);
        var12 = var12.AvatarSizes;
        var12 = var12.LARGE_48;
        var4.size = var12;
        var9 = _closure1_slot7;
        var4.cutout = var9;
        var5 = var6.bind(var3)(var5, var4);
        var4 = new Array(2);
        var4[0] = var5;
        var5 = {};
        var7 = var7.cutoutIconContainer;
        var5.style = var7;
        var7 = 7;
        var7 = var11[var7];
        var7 = var8.bind(var3)(var7);
        var8 = var7.ClockIcon;
        var7 = {};
        var9 = 'xxs';
        var7.size = var9;
        var9 = 4;
        var9 = var11[var9];
        var9 = var10.bind(var3)(var9);
        var9 = var9.colors;
        var9 = var9.WHITE;
        var7.color = var9;
        var7 = var6.bind(var3)(var8, var7);
        var5.children = var7;
        var5 = var6.bind(var3)(var1, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot8 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Environment: var1
        var0 = arg0;
        var1 = var0.notification;
        var0 = var1.savedMessage;
        var5 = var1.author;
        var9 = var1.channel;
        var6 = var0.message;
        var2 = _closure1_slot1;
        var8 = _closure1_slot2;
        var1 = 8;
        var1 = var8[var1];
        var3 = undefined;
        var4 = var2.bind(var3)(var1);
        var1 = null;
        var2 = var1 != var6;
        var1 = 'Message in a notification should not be null.';
        var1 = var4.bind(var3)(var2, var1);
        var2 = _closure1_slot4;
        var4 = _closure1_slot8;
        var1 = {};
        var1.user = var5;
        var5 = var9.guild_id;
        var1.guildId = var5;
        var4 = var2.bind(var3)(var4, var1);
        var7 = _closure1_slot0;
        var0 = 9;
        var0 = var8[var0];
        var0 = var7.bind(var3)(var0);
        var1 = var0.Notification;
        var0 = {};
        var0.icon = var4;
        var4 = 10;
        var5 = var8[var4];
        var5 = var7.bind(var3)(var5);
        var10 = var5.intl;
        var5 = var10.string;
        var4 = var8[var4];
        var4 = var7.bind(var3)(var4);
        var4 = var4.t;
        var4 = var4.Whs8tE;
        var4 = var5.bind(var10)(var4);
        var0.label = var4;
        var4 = 11;
        var4 = var8[var4];
        var4 = var7.bind(var3)(var4);
        var5 = var4.ChannelRowPreview;
        var4 = {
            'channel': null,
            'message': null,
            'color': 'text-subtle',
            'layout': null,
            'muted': false,
            'lineClamp': 2
        };
        var4.channel = var9;
        var4.message = var6;
        var6 = 12;
        var6 = var8[var6];
        var6 = var7.bind(var3)(var6);
        var6 = var6.ChannelListLayoutTypes;
        var6 = var6.COZY;
        var4.layout = var6;
        var4 = var2.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var1 = var3.bind(var6)(var1);
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/in_app_notifications/native/ReminderNotification.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 5418, 5416, 3235, 44, 8737, 1234, 8738, 8751, 2]);