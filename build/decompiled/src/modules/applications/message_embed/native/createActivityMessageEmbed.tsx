// modules/applications/message_embed/native/createActivityMessageEmbed.tsx
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
    var6 = var5[var0];
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/applications/message_embed/native/createActivityMessageEmbed.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun92464: for (var _fun92464_ip = 0;;) switch (_fun92464_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.theme;
                var6 = var0.appId;
                var7 = var0.embedUrl;
                var5 = var0.message;
                var1 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 1;
                var0 = var3[var0];
                var3 = undefined;
                var4 = var1.bind(var3)(var0);
                var1 = var4.createAppMessageEmbed;
                var0 = {};
                var0.theme = var8;
                var0.appId = var6;
                var0.embedUrl = var7;
                var0.message = var5;
                var1 = var1.bind(var4)(var0);
                var0 = null;
                if (!(var0 != var1)) {
                    _fun92464_ip = 324;
                    continue _fun92464
                }
            case 92:
                var5 = _closure1_slot0;
                var8 = _closure1_slot1;
                var4 = 2;
                var4 = var8[var4];
                var5 = var5.bind(var3)(var4);
                var4 = var5.extractActivityBookmarkParams;
                var4 = var4.bind(var5)(var7);
                var7 = var4.linkId;
                if (!(var0 != var7)) {
                    _fun92464_ip = 322;
                    continue _fun92464
                }
            case 136:
                var5 = _closure1_slot0;
                var8 = _closure1_slot1;
                var4 = 3;
                var4 = var8[var4];
                var5 = var5.bind(var3)(var4);
                var4 = var5.getOrFetchCustomActivityLink;
                var4 = var4.bind(var5)(var6, var7);
                if (!(var0 != var4)) {
                    _fun92464_ip = 320;
                    continue _fun92464
                }
            case 175:
                var5 = _closure1_slot2;
                var2 = var5.getApplication;
                var5 = var2.bind(var5)(var6);
                var2 = {};
                var10 = var2;
                var9 = var1;
                var6 = copyDataProperties(var10, var9);
                var6 = var0 == var5;
                var3 = undefined;
                if (var6) {
                    _fun92464_ip = 216;
                    continue _fun92464
                }
            case 211:
                var3 = var5.name;
            case 216:
                var6 = var0 != var3;
                var5 = null;
                if (!var6) {
                    _fun92464_ip = 228;
                    continue _fun92464
                }
            case 225:
                var5 = var3;
            case 228:
                var3 = 'title';
                var2[var3] = var5;
                var5 = var4.title;
                var3 = 'header';
                var2[var3] = var5;
                var5 = var4.description;
                var3 = 'info';
                var2[var3] = var5;
                var5 = 'bot';
                var3 = 'bannerRatio';
                var2[var3] = var5;
                var3 = var4.getAssetURL;
                var3 = var3.bind(var4)();
                var5 = var0 != var3;
                var4 = null;
                if (!var5) {
                    _fun92464_ip = 300;
                    continue _fun92464
                }
            case 297:
                var4 = var3;
            case 300:
                var3 = 'staticBannerSrc';
                var2[var3] = var4;
                var3 = 'tagline';
                var2[var3] = var0;
                return var2;
            case 320:
                return var0;
            case 322:
                return var1;
            case 324:
                return var0;
        }
    };
    var2.createActivityMessageEmbed = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3456, 11614, 6565, 12080, 2]);