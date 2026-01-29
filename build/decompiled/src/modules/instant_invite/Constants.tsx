// modules/instant_invite/Constants.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var1 = true;
    var3.value = var1;
    var1 = '__esModule';
    var1 = var4.bind(var5)(var2, var1, var3);
    var6 = {};
    var1 = 'sending';
    var6.SENDING = var1;
    var1 = 'sent';
    var6.SENT = var1;
    var1 = 'error';
    var6.ERROR = var1;
    var5 = {};
    var7 = 0;
    var5.GUILD = var7;
    var1 = 'GUILD';
    var5[var7] = var1;
    var8 = 1;
    var5.GROUP_DM = var8;
    var1 = 'GROUP_DM';
    var5[var8] = var1;
    var1 = 2;
    var5.FRIEND = var1;
    var3 = 'FRIEND';
    var5[var1] = var3;
    var4 = var0.Set;
    var3 = var5.GUILD;
    var0 = new Array(2);
    var0[0] = var3;
    var3 = var5.GROUP_DM;
    var0[1] = var3;
    var3 = var4.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var4
        }
    });
    var13 = var3;
    var12 = var0;
    var0 = new var13[var4](var12, var11);
    var4 = var0 instanceof Object ? var0 : var3;
    var3 = {};
    var3.STREAM = var8;
    var0 = 'STREAM';
    var3[var8] = var0;
    var3.EMBEDDED_APPLICATION = var1;
    var0 = 'EMBEDDED_APPLICATION';
    var3[var1] = var0;
    var1 = 3;
    var3.ROLE_SUBSCRIPTIONS_PURCHASE = var1;
    var0 = 'ROLE_SUBSCRIPTIONS_PURCHASE';
    var3[var1] = var0;
    var1 = {};
    var0 = 'main';
    var1.MAIN = var0;
    var0 = 'settings';
    var1.SETTINGS = var0;
    var0 = dependencyMap;
    var8 = var0[var7];
    var7 = require;
    var0 = undefined;
    var9 = var7.bind(var0)(var8);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/instant_invite/Constants.tsx';
    var7 = var8.bind(var9)(var7);
    var2.InviteSendStates = var6;
    var2.InviteTypes = var5;
    var2.DESKTOP_APP_REDIRECTABLE_INVITE_TYPES = var4;
    var2.InviteTargetTypes = var3;
    var2.InstantInviteModalPages = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);