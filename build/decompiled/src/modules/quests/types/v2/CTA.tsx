// modules/quests/types/v2/CTA.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var2, var0, var1);
    var1 = dependencyMap;
    var0 = 0;
    var3 = var1[var0];
    var1 = require;
    var0 = undefined;
    var4 = var1.bind(var0)(var3);
    var3 = var4.fileFinishedImporting;
    var1 = 'modules/quests/types/v2/CTA.tsx';
    var1 = var3.bind(var4)(var1);
    var1 = function arg0() {
        _fun46841: for (var _fun46841_ip = 0;;) switch (_fun46841_ip) {
            case 0:
                var1 = arg0;
                var0 = {};
                var2 = var1.android;
                var4 = null;
                var5 = var4 != var2;
                var3 = undefined;
                if (!var5) {
                    _fun46841_ip = 46;
                    continue _fun46841
                }
            case 22:
                var5 = {};
                var6 = var1.android;
                var6 = var6.android_app_id;
                var5.androidAppId = var6;
                var3 = var5;
            case 46:
                var0.android = var3;
                var3 = var1.ios;
                var3 = var4 != var3;
                var2 = undefined;
                if (!var3) {
                    _fun46841_ip = 90;
                    continue _fun46841
                }
            case 66:
                var3 = {};
                var4 = var1.ios;
                var4 = var4.ios_app_id;
                var3.iosAppId = var4;
                var2 = var3;
            case 90:
                var0.ios = var2;
                var2 = var1.link;
                var0.link = var2;
                var2 = var1.button_label;
                var0.buttonLabel = var2;
                var1 = var1.subtitle;
                var0.subtitle = var1;
                return var0;
        }
    };
    var2.questCtaConfigFromServer = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);