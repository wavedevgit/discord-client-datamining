// ../discord_common/js/packages/dynamic-links/DynamicLinkTemplates.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var3 = dependencyMap;
    var0 = 0;
    var4 = var3[var0];
    var3 = require;
    var0 = undefined;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = '../discord_common/js/packages/dynamic-links/DynamicLinkTemplates.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        var0 = global;
        var1 = var0.location;
        var11 = var1.protocol;
        var1 = var0.window;
        var1 = var1.GLOBAL_ENV;
        var9 = var1.INVITE_HOST;
        var0 = var0.HermesInternal;
        var4 = var0.concat;
        var12 = '';
        var10 = '//';
        var8 = '/';
        var7 = arg0;
        var0 = var12[var4](var11, var10, var9, var8, var7, var6);
        return var0;
    };
    var2.getInviteDynamicLinkTemplate = var3;
    var3 = function arg0() {
        var0 = global;
        var1 = var0.location;
        var11 = var1.protocol;
        var1 = var0.window;
        var1 = var1.GLOBAL_ENV;
        var9 = var1.GUILD_TEMPLATE_HOST;
        var0 = var0.HermesInternal;
        var4 = var0.concat;
        var12 = '';
        var10 = '//';
        var8 = '/';
        var7 = arg0;
        var0 = var12[var4](var11, var10, var9, var8, var7, var6);
        return var0;
    };
    var2.getGuildTemplateDynamicLinkTemplate = var3;
    var3 = function() {
        var0 = global;
        var1 = var0.location;
        var9 = var1.protocol;
        var1 = var0.window;
        var1 = var1.GLOBAL_ENV;
        var7 = var1.WEBAPP_ENDPOINT;
        var0 = var0.HermesInternal;
        var3 = var0.concat;
        var10 = '';
        var8 = '//';
        var6 = '/channels/@me';
        var0 = var10[var3](var9, var8, var7, var6, var5);
        return var0;
    };
    var2.getDefaultDynamicLinkTemplate = var3;
    var1 = function arg0() {
        _fun92742: for (var _fun92742_ip = 0;;) switch (_fun92742_ip) {
            case 0:
                var6 = arg0;
                var0 = global;
                var1 = var0.location;
                var5 = var1.protocol;
                var1 = var0.window;
                var1 = var1.GLOBAL_ENV;
                var4 = var1.WEBAPP_ENDPOINT;
                if (var6) {
                    _fun92742_ip = 44;
                    continue _fun92742
                }
            case 38:
                var6 = '@me';
            case 44:
                var0 = var0.HermesInternal;
                var3 = var0.concat;
                var12 = '';
                var10 = '//';
                var8 = '/channels/';
                var11 = var5;
                var9 = var4;
                var7 = var6;
                var0 = var12[var3](var11, var10, var9, var8, var7, var6);
                return var0;
        }
    };
    var2.getChannelDynamicLinkTemplate = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);