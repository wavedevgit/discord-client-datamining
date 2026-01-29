// ../discord_common/js/shared/shared-constants/GuildInviteFlags.tsx
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
    var3 = {};
    var4 = 1;
    var3.IS_GUEST_INVITE = var4;
    var1 = 'IS_GUEST_INVITE';
    var3[var4] = var1;
    var4 = 2;
    var3.IS_VIEWED = var4;
    var1 = 'IS_VIEWED';
    var3[var4] = var1;
    var4 = 4;
    var3.IS_ENHANCED = var4;
    var1 = 'IS_ENHANCED';
    var3[var4] = var1;
    var4 = 8;
    var3.IS_APPLICATION_BYPASS = var4;
    var1 = 'IS_APPLICATION_BYPASS';
    var3[var4] = var1;
    var4 = 9;
    var3.ASSIGNABLE_FLAGS_MASK = var4;
    var1 = 'ASSIGNABLE_FLAGS_MASK';
    var3[var4] = var1;
    var1 = {};
    var5 = var0.Set;
    var0 = var5.prototype;
    var4 = Object.create(var0, {
        constructor: {
            value: var5
        }
    });
    var9 = [1, 2, 4];
    var10 = var4;
    var0 = new var10[var5](var9, var8);
    var0 = var0 instanceof Object ? var0 : var4;
    var1.ALL = var0;
    var4 = dependencyMap;
    var0 = 0;
    var5 = var4[var0];
    var4 = require;
    var0 = undefined;
    var6 = var4.bind(var0)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = '../discord_common/js/shared/shared-constants/GuildInviteFlags.tsx';
    var4 = var5.bind(var6)(var4);
    var2.GuildInviteFlags = var3;
    var2.GuildInviteFlagsSets = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);