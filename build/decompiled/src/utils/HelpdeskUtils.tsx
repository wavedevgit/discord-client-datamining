// utils/HelpdeskUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var0 = function arg0() {
        _fun19132: for (var _fun19132_ip = 0;;) switch (_fun19132_ip) {
            case 0:
                var1 = arguments[1];
                var0 = undefined;
                if (!(var1 === var0)) {
                    _fun19132_ip = 16;
                    continue _fun19132
                }
            case 9:
                var1 = _closure1_slot5;
            case 16:
                var0 = arg0;
                var0 = var1 + var0;
                return var0;
        }
    };
    var _closure1_slot7 = var0;
    var0 = function() {
        var0 = _closure1_slot3;
        var1 = var0.locale;
        var0 = var1.toLowerCase;
        var0 = var0.bind(var1)();
        return var0;
    };
    var _closure1_slot8 = var0;
    var3 = global;
    var9 = var3.Object;
    var8 = var9.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var1);
    var0 = 0;
    var1 = var6[var0];
    var0 = undefined;
    var1 = var7.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var7 = var1.LocalizedLinks;
    var _closure1_slot4 = var7;
    var9 = var1.SUPPORT_DOMAIN;
    var8 = var1.SUPPORT_DEV_DOMAIN;
    var1 = var3.HermesInternal;
    var1 = var1.concat;
    var7 = 'https://';
    var1 = var1.bind(var7)(var9);
    var _closure1_slot5 = var1;
    var3 = var3.HermesInternal;
    var3 = var3.concat;
    var3 = var3.bind(var7)(var8);
    var _closure1_slot6 = var3;
    var3 = {};
    var7 = function arg0() {
        var2 = _closure1_slot7;
        var0 = _closure1_slot8;
        var1 = undefined;
        var6 = var0.bind(var1)();
        var0 = global;
        var0 = var0.HermesInternal;
        var5 = var0.concat;
        var4 = '/hc/';
        var3 = '/articles/';
        var0 = arg0;
        var0 = var5.bind(var4)(var6, var3, var0);
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var3.getArticleURL = var7;
    var7 = function arg0() {
        var3 = _closure1_slot7;
        var1 = _closure1_slot8;
        var2 = undefined;
        var7 = var1.bind(var2)();
        var1 = global;
        var1 = var1.HermesInternal;
        var6 = var1.concat;
        var5 = '/hc/';
        var4 = '/articles/';
        var1 = arg0;
        var1 = var6.bind(var5)(var7, var4, var1);
        var0 = _closure1_slot6;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var3.getDevArticleURL = var7;
    var7 = function arg0() {
        var3 = _closure1_slot7;
        var0 = _closure1_slot8;
        var2 = undefined;
        var6 = var0.bind(var2)();
        var0 = global;
        var0 = var0.HermesInternal;
        var5 = var0.concat;
        var4 = '/hc/';
        var1 = '/articles/';
        var0 = arg0;
        var1 = var5.bind(var4)(var6, var1, var0);
        var0 = 'https://creator-support.discord.com';
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var3.getCreatorSupportArticleURL = var7;
    var7 = function() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 2;
        var1 = var2[var1];
        var2 = undefined;
        var1 = var3.bind(var2)(var1);
        var0 = _closure1_slot4;
        var0 = var0.TWITTER;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var3.getTwitterURL = var7;
    var7 = function() {
        var2 = _closure1_slot7;
        var0 = _closure1_slot8;
        var1 = undefined;
        var4 = var0.bind(var1)();
        var0 = global;
        var0 = var0.HermesInternal;
        var3 = var0.concat;
        var0 = '/hc/';
        var0 = var3.bind(var0)(var4);
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var3.getCommunityURL = var7;
    var7 = function arg0() {
        _fun19139: for (var _fun19139_ip = 0;;) switch (_fun19139_ip) {
            case 0:
                var5 = arg0;
                var2 = _closure1_slot7;
                var1 = _closure1_slot8;
                var4 = undefined;
                var8 = var1.bind(var4)();
                var1 = global;
                var3 = var1.encodeURIComponent;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 3;
                var0 = var7[var0];
                var6 = var6.bind(var4)(var0);
                var0 = var6.getPlatformName;
                var0 = var0.bind(var6)();
                var7 = var3.bind(var4)(var0);
                var0 = var1.HermesInternal;
                var6 = var0.concat;
                var3 = '/hc/';
                var0 = '/requests/new?platform=';
                var0 = var6.bind(var3)(var8, var0, var7);
                var2 = var2.bind(var4)(var0);
                var3 = null;
                var0 = var2;
                if (!(var3 != var5)) {
                    _fun19139_ip = 144;
                    continue _fun19139
                }
            case 107:
                var3 = var1.encodeURIComponent;
                var4 = var3.bind(var4)(var5);
                var1 = var1.HermesInternal;
                var3 = var1.concat;
                var1 = '&device_info=';
                var1 = var3.bind(var1)(var4);
                var0 = var2 + var1;
            case 144:
                return var0;
        }
    };
    var3.getSubmitRequestURL = var7;
    var7 = function arg0() {
        var0 = global;
        var3 = var0.encodeURIComponent;
        var2 = undefined;
        var1 = arg0;
        var9 = var3.bind(var2)(var1);
        var1 = _closure1_slot7;
        var3 = _closure1_slot8;
        var11 = var3.bind(var2)();
        var0 = var0.HermesInternal;
        var5 = var0.concat;
        var12 = '/hc/';
        var10 = '/search?utf8=%E2%9C%93&query=';
        var8 = '&commit=Search';
        var0 = var12[var5](var11, var10, var9, var8, var7);
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var3.getSearchURL = var7;
    var7 = function() {
        var2 = _closure1_slot7;
        var1 = undefined;
        var0 = '/api/v2/help_center/en-us/articles.json?label_names=featured';
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var3.getFeaturedArticlesJsonURL = var7;
    var4 = function arg0() {
        var3 = _closure1_slot7;
        var0 = _closure1_slot8;
        var2 = undefined;
        var6 = var0.bind(var2)();
        var0 = global;
        var0 = var0.HermesInternal;
        var5 = var0.concat;
        var4 = '/hc/';
        var1 = '/articles/';
        var0 = arg0;
        var1 = var5.bind(var4)(var6, var1, var0);
        var0 = 'https://support-apps.discord.com';
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var3.getAppsSupportURL = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'utils/HelpdeskUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.SUPPORT_LOCATION = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1676, 660, 3034, 478, 2]);