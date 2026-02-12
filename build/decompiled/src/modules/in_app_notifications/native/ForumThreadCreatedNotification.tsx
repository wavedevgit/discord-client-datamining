// modules/in_app_notifications/native/ForumThreadCreatedNotification.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
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
    var3 = var3.jsx;
    var _closure1_slot3 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/in_app_notifications/native/ForumThreadCreatedNotification.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun73163: for (var _fun73163_ip = 0;;) switch (_fun73163_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.notification;
                var8 = var0.thread;
                var9 = var0.threadCreator;
                var1 = var0.parentChannel;
                var10 = var0.guild;
                var2 = _closure1_slot1;
                var0 = _closure1_slot2;
                var4 = 2;
                var0 = var0[var4];
                var3 = undefined;
                var0 = var2.bind(var3)(var0);
                var13 = var0.bind(var3)(var1);
                var0 = null;
                if (!(var0 == var13)) {
                    _fun73163_ip = 123;
                    continue _fun73163
                }
            case 68:
                var7 = _closure1_slot0;
                var11 = _closure1_slot2;
                var1 = 3;
                var2 = var11[var1];
                var2 = var7.bind(var3)(var2);
                var5 = var2.intl;
                var2 = var5.string;
                var1 = var11[var1];
                var1 = var7.bind(var3)(var1);
                var1 = var1.t;
                var1 = var1["/YzI63"];
                var13 = var2.bind(var5)(var1);
            case 123:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var1 = var1[var4];
                var1 = var2.bind(var3)(var1);
                var7 = var1.bind(var3)(var8);
                if (!(var0 == var7)) {
                    _fun73163_ip = 204;
                    continue _fun73163
                }
            case 149:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 3;
                var1 = var5[var0];
                var1 = var4.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var5[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0["/YzI63"];
                var7 = var1.bind(var2)(var0);
            case 204:
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var0 = 3;
                var1 = var12[var0];
                var1 = var11.bind(var3)(var1);
                var5 = var1.intl;
                var4 = var5.formatToPlainString;
                var1 = var12[var0];
                var1 = var11.bind(var3)(var1);
                var1 = var1.t;
                var2 = var1["2IGVl5"];
                var1 = {};
                var1.channelName = var13;
                var10 = var10.name;
                var1.guildName = var10;
                var5 = var4.bind(var5)(var2, var1);
                var1 = var12[var0];
                var1 = var11.bind(var3)(var1);
                var4 = var1.intl;
                var2 = var4.formatToPlainString;
                var0 = var12[var0];
                var0 = var11.bind(var3)(var0);
                var0 = var0.t;
                var1 = var0.jPhTvT;
                var0 = {};
                var0.channelName = var7;
                var7 = var9.toString;
                var7 = var7.bind(var9)();
                var0.userUsername = var7;
                var4 = var2.bind(var4)(var1, var0);
                var2 = _closure1_slot3;
                var0 = 4;
                var0 = var12[var0];
                var0 = var11.bind(var3)(var0);
                var1 = var0.Notification;
                var0 = {};
                var7 = _closure1_slot1;
                var10 = 5;
                var6 = var12[var10];
                var7 = var7.bind(var3)(var6);
                var6 = {};
                var10 = var12[var10];
                var10 = var11.bind(var3)(var10);
                var10 = var10.AvatarSizes;
                var10 = var10.NORMAL;
                var6.size = var10;
                var6.user = var9;
                var8 = var8.guild_id;
                var6.guildId = var8;
                var6 = var2.bind(var3)(var7, var6);
                var0.icon = var6;
                var0.label = var5;
                var0.textChildren = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 4768, 1234, 9146, 5512, 2]);