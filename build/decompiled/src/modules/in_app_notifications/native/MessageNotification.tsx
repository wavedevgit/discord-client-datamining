// modules/in_app_notifications/native/MessageNotification.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var6 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.IN_APP_NOTIFICATION_MAX_HEIGHT;
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
    var9 = {
        'paddingRight': 4,
        'paddingTop': 0
    };
    var3.newContainerRoleDot = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot6 = var3;
    var3 = var6.memo;
    var1 = function arg0() {
        _fun70661: for (var _fun70661_ip = 0;;) switch (_fun70661_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.notification;
                var0 = _closure1_slot6;
                var3 = undefined;
                var10 = var0.bind(var3)();
                var1 = var8.message;
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var14 = 5;
                var0 = var4[var14];
                var5 = var2.bind(var3)(var0);
                var0 = var5.useNullableMessageAuthor;
                var12 = var0.bind(var5)(var1);
                var0 = 6;
                var0 = var4[var0];
                var5 = var2.bind(var3)(var0);
                var4 = var5.useStateFromStores;
                var0 = _closure1_slot3;
                var2 = new Array(1);
                var2[0] = var0;
                var0 = function() { // Environment: var0
                    var0 = _closure1_slot3;
                    var0 = var0.roleStyle;
                    return var0;
                };
                var2 = var4.bind(var5)(var2, var0);
                var9 = null;
                var4 = var9 == var12;
                var0 = undefined;
                if (var4) {
                    _fun70661_ip = 119;
                    continue _fun70661
                }
            case 113:
                var0 = var12.colorString;
            case 119:
                var4 = var9 != var0;
                var11 = undefined;
                if (!var4) {
                    _fun70661_ip = 131;
                    continue _fun70661
                }
            case 128:
                var11 = var0;
            case 131:
                var0 = 'username';
                var4 = undefined;
                if (!(var0 === var2)) {
                    _fun70661_ip = 144;
                    continue _fun70661
                }
            case 141:
                var4 = var11;
            case 144:
                var0 = var9 != var4;
                var5 = undefined;
                if (!var0) {
                    _fun70661_ip = 162;
                    continue _fun70661
                }
            case 153:
                var0 = {};
                var0.color = var4;
                var5 = var0;
            case 162:
                var0 = 'dot';
                var4 = undefined;
                if (!(var0 === var2)) {
                    _fun70661_ip = 250;
                    continue _fun70661
                }
            case 172:
                var4 = undefined;
                if (!(var3 !== var11)) {
                    _fun70661_ip = 250;
                    continue _fun70661
                }
            case 178:
                var6 = _closure1_slot5;
                var2 = _closure1_slot0;
                var13 = _closure1_slot2;
                var0 = 7;
                var0 = var13[var0];
                var0 = var2.bind(var3)(var0);
                var2 = var0.RoleDot;
                var0 = {};
                var0.color = var11;
                var13 = var9 == var12;
                var11 = undefined;
                if (var13) {
                    _fun70661_ip = 229;
                    continue _fun70661
                }
            case 223:
                var11 = var12.colorStrings;
            case 229:
                var0.colors = var11;
                var10 = var10.newContainerRoleDot;
                var0.containerStyles = var10;
                var4 = var6.bind(var3)(var2, var0);
            case 250:
                var2 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 8;
                var0 = var6[var0];
                var11 = var2.bind(var3)(var0);
                var10 = var11.getNotificationTitle;
                var20 = var8.channel;
                var18 = var8.parentChannel;
                var17 = var8.guild;
                var21 = var11;
                var19 = var12;
                var6 = var21[var10](var20, var19, var18, var17, var16);
                var0 = var1.content;
                var2 = var0.length;
                var0 = 0;
                var0 = var0 === var2;
                if (!var0) {
                    _fun70661_ip = 331;
                    continue _fun70661
                }
            case 321:
                var2 = var1.interaction;
                var0 = var9 !== var2;
            case 331:
                if (!var0) {
                    _fun70661_ip = 344;
                    continue _fun70661
                }
            case 334:
                var2 = var1.interaction;
                var0 = var3 !== var2;
            case 344:
                if (!var0) {
                    _fun70661_ip = 357;
                    continue _fun70661
                }
            case 347:
                var2 = var1.activityInstance;
                var0 = var9 !== var2;
            case 357:
                if (!var0) {
                    _fun70661_ip = 370;
                    continue _fun70661
                }
            case 360:
                var2 = var1.activityInstance;
                var0 = var3 !== var2;
            case 370:
                if (!var0) {
                    _fun70661_ip = 498;
                    continue _fun70661
                }
            case 376:
                var13 = _closure1_slot0;
                var12 = _closure1_slot2;
                var0 = 9;
                var2 = var12[var0];
                var2 = var13.bind(var3)(var2);
                var11 = var2.intl;
                var10 = var11.formatToPlainString;
                var0 = var12[var0];
                var0 = var13.bind(var3)(var0);
                var0 = var0.t;
                var2 = var0["7eikg1"];
                var0 = {};
                var12 = var12[var14];
                var15 = var13.bind(var3)(var12);
                var14 = var15.getUserAuthor;
                var12 = var1.interaction;
                var16 = var9 == var12;
                var13 = undefined;
                if (var16) {
                    _fun70661_ip = 465;
                    continue _fun70661
                }
            case 460:
                var13 = var12.user;
            case 465:
                var12 = var8.channel;
                var12 = var14.bind(var15)(var13, var12);
                var12 = var12.nick;
                var0.username = var12;
                var0 = var10.bind(var11)(var2, var0);
                var1.content = var0;
            case 498:
                var2 = _closure1_slot5;
                var1 = _closure1_slot0;
                var10 = _closure1_slot2;
                var0 = 10;
                var0 = var10[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.Notification;
                var0 = {};
                var11 = _closure1_slot1;
                var13 = 11;
                var10 = var10[var13];
                var12 = var11.bind(var3)(var10);
                var11 = {};
                var10 = var8.message;
                var10 = var10.author;
                var11.user = var10;
                var10 = var8.guild;
                var14 = var9 == var10;
                var9 = undefined;
                if (var14) {
                    _fun70661_ip = 582;
                    continue _fun70661
                }
            case 577:
                var9 = var10.id;
            case 582:
                var11.guildId = var9;
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var13 = var10[var13];
                var13 = var9.bind(var3)(var13);
                var13 = var13.AvatarSizes;
                var13 = var13.NORMAL;
                var11.size = var13;
                var11 = var2.bind(var3)(var12, var11);
                var0.icon = var11;
                var0.label = var6;
                var0.labelStyle = var5;
                var0.accessoryLabelNode = var4;
                var6 = _closure1_slot5;
                var4 = 12;
                var4 = var10[var4];
                var4 = var9.bind(var3)(var4);
                var5 = var4.NativeMessageChannelRowPreview;
                var4 = {
                    'channel': null,
                    'message': null,
                    'color': 'text-subtle',
                    'layout': null,
                    'muted': false,
                    'lineClamp': 2
                };
                var11 = var8.channel;
                var4.channel = var11;
                var8 = var8.message;
                var4.message = var8;
                var8 = 13;
                var8 = var10[var8];
                var8 = var9.bind(var3)(var8);
                var8 = var8.ChannelListLayoutTypes;
                var8 = var8.COZY;
                var4.layout = var8;
                var7 = _closure1_slot4;
                var4.maxHeight = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 14;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/in_app_notifications/native/MessageNotification.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1298, 8858, 33, 1297, 3982, 566, 8264, 8818, 1234, 8859, 5504, 8860, 8873, 2]);