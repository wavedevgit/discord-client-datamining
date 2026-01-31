// modules/slayer_storefront/native/SlayerStorefrontGiftPreview.tsx
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
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot4 = var6;
    var3 = var3.jsxs;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var9 = 16;
    var8 = {
        'alignItems': 'center',
        'justifyContent': 'center',
        'gap': 16,
        'marginTop': 20
    };
    var3.container = var8;
    var8 = {
        'textAlign': 'center',
        'paddingHorizontal': 32
    };
    var3.text = var8;
    var8 = {};
    var8.marginHorizontal = var9;
    var3.warningBox = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot6 = var3;
    var3 = function(arg0) { // Original name: WarningBox, environment: var1
        _fun56629: for (var _fun56629_ip = 0;;) switch (_fun56629_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.canStartAuthorization;
                var2 = var0.hasAccountLinked;
                var12 = var0.sku;
                var11 = var0.application;
                var0 = _closure1_slot6;
                var4 = undefined;
                var6 = var0.bind(var4)();
                var10 = null;
                var0 = null;
                if (var2) {
                    _fun56629_ip = 260;
                    continue _fun56629
                }
            case 49:
                var3 = _closure1_slot4;
                var5 = _closure1_slot1;
                var2 = _closure1_slot2;
                var8 = 7;
                var2 = var2[var8];
                var2 = var5.bind(var4)(var2);
                var5 = {};
                var7 = _closure1_slot0;
                var13 = _closure1_slot2;
                var8 = var13[var8];
                var8 = var7.bind(var4)(var8);
                var8 = var8.InfoBoxLooks;
                var8 = var8.WARNING;
                var5.look = var8;
                var6 = var6.warningBox;
                var5.style = var6;
                var6 = 6;
                var8 = var13[var6];
                var8 = var7.bind(var4)(var8);
                var9 = var8.intl;
                if (var1) {
                    _fun56629_ip = 183;
                    continue _fun56629
                }
            case 139:
                var14 = var9.format;
                var1 = var13[var6];
                var1 = var7.bind(var4)(var1);
                var1 = var1.t;
                var8 = var1["3T0cpx"];
                var1 = {};
                var1 = var14.bind(var9)(var8, var1);
                var5.children = var1;
                var1 = var5;
                _fun56629_ip = 254;
                continue _fun56629;
            case 183:
                var8 = var9.formatToPlainString;
                var6 = var13[var6];
                var6 = var7.bind(var4)(var6);
                var6 = var6.t;
                var7 = var6["EgCl+Q"];
                var6 = {};
                var12 = var12.name;
                var6.skuName = var12;
                var12 = var10 == var11;
                var10 = undefined;
                if (var12) {
                    _fun56629_ip = 236;
                    continue _fun56629
                }
            case 231:
                var10 = var11.name;
            case 236:
                var6.applicationName = var10;
                var6 = var8.bind(var9)(var7, var6);
                var5.children = var6;
                var1 = var5;
            case 254:
                var0 = var3.bind(var4)(var2, var1);
            case 260:
                return var0;
        }
    };
    var _closure1_slot7 = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/slayer_storefront/native/SlayerStorefrontGiftPreview.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: SlayerStorefrontGiftPreview, environment: var1
        _fun56630: for (var _fun56630_ip = 0;;) switch (_fun56630_ip) {
            case 0:
                var0 = arg0;
                var10 = var0.sku;
                var9 = var0.application;
                var19 = var0.sender;
                var11 = var0.hasAccountLinked;
                var12 = var0.canStartAuthorization;
                var0 = _closure1_slot6;
                var4 = undefined;
                var14 = var0.bind(var4)();
                var18 = null;
                var1 = var18 == var10;
                var0 = null;
                if (var1) {
                    _fun56630_ip = 316;
                    continue _fun56630
                }
            case 59:
                var3 = _closure1_slot5;
                var2 = _closure1_slot3;
                var1 = {};
                var5 = var14.container;
                var1.style = var5;
                var13 = _closure1_slot4;
                var7 = _closure1_slot1;
                var20 = _closure1_slot2;
                var5 = 4;
                var5 = var20[var5];
                var7 = var7.bind(var4)(var5);
                var5 = {};
                var5.sku = var10;
                var7 = var13.bind(var4)(var7, var5);
                var5 = new Array(3);
                var5[0] = var7;
                var15 = _closure1_slot0;
                var7 = 5;
                var7 = var20[var7];
                var7 = var15.bind(var4)(var7);
                var8 = var7.Text;
                var7 = {
                    'variant': 'heading-md/normal',
                    'color': 'mobile-text-heading-primary'
                };
                var14 = var14.text;
                var7.style = var14;
                var14 = 6;
                var16 = var20[var14];
                var16 = var15.bind(var4)(var16);
                var17 = var16.intl;
                var16 = var17.formatToPlainString;
                var14 = var20[var14];
                var14 = var15.bind(var4)(var14);
                var14 = var14.t;
                var15 = var14["2tBYtA"];
                var14 = {};
                var14.sender = var19;
                var19 = var10.name;
                var14.skuName = var19;
                var19 = var18 == var9;
                var18 = undefined;
                if (var19) {
                    _fun56630_ip = 242;
                    continue _fun56630
                }
            case 237:
                var18 = var9.name;
            case 242:
                var14.applicationName = var18;
                var14 = var16.bind(var17)(var15, var14);
                var7.children = var14;
                var7 = var13.bind(var4)(var8, var7);
                var5[1] = var7;
                var8 = _closure1_slot4;
                var7 = _closure1_slot7;
                var6 = {};
                var6.canStartAuthorization = var12;
                var6.hasAccountLinked = var11;
                var6.sku = var10;
                var6.application = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[2] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 316:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 6851, 3900, 1234, 6853, 2]);