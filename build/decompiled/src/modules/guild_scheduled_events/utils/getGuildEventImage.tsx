// modules/guild_scheduled_events/utils/getGuildEventImage.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.Endpoints;
    var _closure1_slot2 = var3;
    var3 = 2;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_scheduled_events/utils/getGuildEventImage.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0, arg1) { // Original name: getGuildEventImageURL, environment: var1
        _fun65936: for (var _fun65936_ip = 0;;) switch (_fun65936_ip) {
            case 0:
                var3 = arg0;
                var5 = arg1;
                var1 = var3.image;
                var0 = null;
                if (!(var0 != var1)) {
                    _fun65936_ip = 296;
                    continue _fun65936
                }
            case 21:
                if (!(var0 == var5)) {
                    _fun65936_ip = 83;
                    continue _fun65936
                }
            case 25:
                var1 = global;
                var1 = var1.window;
                var1 = var1.screen;
                var2 = var1.width;
                var6 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 1;
                var4 = var4[var1];
                var1 = undefined;
                var4 = var6.bind(var1)(var4);
                var1 = var4.getDevicePixelRatio;
                var1 = var1.bind(var4)();
                var5 = var2 * var1;
            case 83:
                var6 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 1;
                var4 = var4[var1];
                var1 = undefined;
                var4 = var6.bind(var1)(var4);
                var1 = var4.getBestMediaProxySize;
                var4 = var1.bind(var4)(var5);
                var1 = global;
                var5 = var1.window;
                var5 = var5.GLOBAL_ENV;
                var12 = var5.CDN_HOST;
                if (!(var0 == var12)) {
                    _fun65936_ip = 215;
                    continue _fun65936
                }
            case 143:
                var5 = var1.location;
                var6 = var5.protocol;
                var5 = var1.window;
                var5 = var5.GLOBAL_ENV;
                var5 = var5.API_ENDPOINT;
                var5 = var6 + var5;
                var9 = _closure1_slot2;
                var8 = var9.GUILD_EVENT_IMAGE;
                var7 = var3.id;
                var6 = var3.image;
                var2 = 'png';
                var2 = var8.bind(var9)(var7, var6, var2);
                var2 = var5 + var2;
                _fun65936_ip = 268;
                continue _fun65936;
            case 215:
                var15 = var3.id;
                var13 = var3.image;
                var3 = var1.HermesInternal;
                var9 = var3.concat;
                var20 = '';
                var19 = 'https:';
                var18 = '//';
                var16 = '/guild-events/';
                var14 = '/';
                var17 = var12;
                var2 = var20[var9](var19, var18, var17, var16, var15, var14, var13, var12);
            case 268:
                var1 = var1.HermesInternal;
                var3 = var1.concat;
                var1 = '?size=';
                var1 = var3.bind(var1)(var4);
                var1 = var2 + var1;
                return var1;
            case 296:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 1443, 2]);