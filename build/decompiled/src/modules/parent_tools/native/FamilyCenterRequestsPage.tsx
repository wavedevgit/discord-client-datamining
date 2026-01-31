// modules/parent_tools/native/FamilyCenterRequestsPage.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
    var0 = function() { // Original name: FamilyCenterMaxConnectionsBlurb, environment: var1
        _fun81979: for (var _fun81979_ip = 0;;) switch (_fun81979_ip) {
            case 0:
                var0 = _closure1_slot9;
                var4 = undefined;
                var6 = var0.bind(var4)();
                var1 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 7;
                var0 = var3[var0];
                var1 = var1.bind(var4)(var0);
                var0 = var1.useHasMaxConnections;
                var1 = var0.bind(var1)();
                var2 = _closure1_slot1;
                var0 = 8;
                var0 = var3[var0];
                var0 = var2.bind(var4)(var0);
                var0 = var0.bind(var4)();
                if (var0) {
                    _fun81979_ip = 72;
                    continue _fun81979
                }
            case 66:
                var11 = _closure1_slot5;
                _fun81979_ip = 76;
                continue _fun81979;
            case 72:
                var11 = _closure1_slot4;
            case 76:
                var10 = _closure1_slot0;
                var12 = _closure1_slot2;
                var0 = 9;
                var0 = var12[var0];
                var7 = var10.bind(var4)(var0);
                var3 = var7.useAgeSpecificText;
                var9 = 10;
                var0 = var12[var9];
                var0 = var10.bind(var4)(var0);
                var15 = var0.intl;
                var14 = var15.formatToPlainString;
                var8 = _closure1_slot1;
                var0 = 11;
                var2 = var12[var0];
                var2 = var8.bind(var4)(var2);
                var13 = var2["1/PzIj"];
                var2 = {};
                var2.maxConnections = var11;
                var2 = var14.bind(var15)(var13, var2);
                var9 = var12[var9];
                var9 = var10.bind(var4)(var9);
                var10 = var9.intl;
                var9 = var10.formatToPlainString;
                var0 = var12[var0];
                var0 = var8.bind(var4)(var0);
                var8 = var0.RcTgiE;
                var0 = {};
                var0.maxConnections = var11;
                var0 = var9.bind(var10)(var8, var0);
                var8 = var3.bind(var7)(var2, var0);
                var0 = null;
                if (!var1) {
                    _fun81979_ip = 303;
                    continue _fun81979
                }
            case 221:
                var3 = _closure1_slot7;
                var2 = _closure1_slot3;
                var1 = {};
                var6 = var6.container;
                var1.style = var6;
                var7 = _closure1_slot7;
                var6 = _closure1_slot0;
                var9 = _closure1_slot2;
                var5 = 12;
                var5 = var9[var5];
                var5 = var6.bind(var4)(var5);
                var6 = var5.Text;
                var5 = {
                    'variant': 'text-xxs/medium',
                    'color': 'text-muted'
                };
                var5.children = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 303:
                return var0;
        }
    };
    var _closure1_slot13 = var0;
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
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var13 = 1;
    var3 = var5[var13];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.MAX_PARENT_TO_TEEN_ACTIVE_CONNECTIONS;
    var _closure1_slot4 = var6;
    var3 = var3.MAX_TEEN_TO_PARENT_ACTIVE_CONNECTIONS;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.THROUGHLINE_URL;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot7 = var6;
    var3 = var3.jsxs;
    var _closure1_slot8 = var3;
    var3 = 5;
    var6 = var5[var3];
    var8 = var4.bind(var0)(var6);
    var7 = var8.createStyles;
    var6 = {};
    var11 = {};
    var12 = 'flex';
    var11.display = var12;
    var9 = 6;
    var14 = var5[var9];
    var14 = var10.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_12;
    var11.paddingTop = var14;
    var14 = var5[var9];
    var14 = var10.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_12;
    var11.marginTop = var14;
    var14 = var5[var9];
    var14 = var10.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.BORDER_SUBTLE;
    var11.borderTopColor = var14;
    var11.borderTopWidth = var13;
    var6.container = var11;
    var6 = var7.bind(var8)(var6);
    var _closure1_slot9 = var6;
    var6 = var5[var3];
    var8 = var4.bind(var0)(var6);
    var7 = var8.createStyles;
    var6 = {};
    var11 = {};
    var11.display = var12;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var11.marginTop = var12;
    var6.container = var11;
    var11 = {};
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_4;
    var11.marginBottom = var12;
    var6.supportHeader = var11;
    var6 = var7.bind(var8)(var6);
    var _closure1_slot10 = var6;
    var6 = function() { // Original name: FamilyCenterHelpLineInfo, environment: var1
        _fun81980: for (var _fun81980_ip = 0;;) switch (_fun81980_ip) {
            case 0:
                var0 = _closure1_slot10;
                var4 = undefined;
                var12 = var0.bind(var4)();
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 13;
                var1 = var3[var0];
                var5 = var2.bind(var4)(var1);
                var1 = var5.useShouldShowHelplineLink;
                var1 = var1.bind(var5)();
                var0 = var3[var0];
                var2 = var2.bind(var4)(var0);
                var0 = var2.useShouldShowThroughlineLink;
                var0 = var0.bind(var2)();
                if (var1) {
                    _fun81980_ip = 143;
                    continue _fun81980
                }
            case 65:
                var9 = null;
                if (!var0) {
                    _fun81980_ip = 141;
                    continue _fun81980
                }
            case 70:
                var1 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 10;
                var0 = var5[var0];
                var0 = var1.bind(var4)(var0);
                var3 = var0.intl;
                var2 = var3.format;
                var1 = _closure1_slot1;
                var0 = 11;
                var0 = var5[var0];
                var0 = var1.bind(var4)(var0);
                var1 = var0["6tsC8u"];
                var0 = {};
                var5 = _closure1_slot6;
                var0.helpLink = var5;
                var9 = var2.bind(var3)(var1, var0);
            case 141:
                _fun81980_ip = 216;
                continue _fun81980;
            case 143:
                var1 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 10;
                var0 = var5[var0];
                var0 = var1.bind(var4)(var0);
                var3 = var0.intl;
                var2 = var3.format;
                var1 = _closure1_slot1;
                var0 = 11;
                var0 = var5[var0];
                var0 = var1.bind(var4)(var0);
                var1 = var0["KOwsf/"];
                var0 = {};
                var5 = 'https://support.discord.com/hc/articles/7925648993943-Crisis-Text-Line';
                var0.helpLink = var5;
                var9 = var2.bind(var3)(var1, var0);
            case 216:
                var0 = null;
                var1 = var0 == var9;
                if (var1) {
                    _fun81980_ip = 427;
                    continue _fun81980
                }
            case 228:
                var3 = _closure1_slot8;
                var2 = _closure1_slot3;
                var1 = {};
                var5 = var12.container;
                var1.style = var5;
                var11 = _closure1_slot7;
                var7 = _closure1_slot0;
                var10 = _closure1_slot2;
                var5 = 12;
                var5 = var10[var5];
                var5 = var7.bind(var4)(var5);
                var8 = var5.Text;
                var5 = {};
                var12 = var12.supportHeader;
                var5.style = var12;
                var12 = 'heading-sm/semibold';
                var5.variant = var12;
                var12 = 10;
                var12 = var10[var12];
                var12 = var7.bind(var4)(var12);
                var14 = var12.intl;
                var13 = var14.string;
                var15 = _closure1_slot1;
                var12 = 11;
                var12 = var10[var12];
                var12 = var15.bind(var4)(var12);
                var12 = var12["7/tVhv"];
                var12 = var13.bind(var14)(var12);
                var5.children = var12;
                var8 = var11.bind(var4)(var8, var5);
                var5 = new Array(2);
                var5[0] = var8;
                var8 = _closure1_slot7;
                var6 = 14;
                var6 = var10[var6];
                var6 = var7.bind(var4)(var6);
                var7 = var6.TextWithIOSLinkWorkaround;
                var6 = {
                    'variant': 'text-xs/medium',
                    'color': 'text-muted'
                };
                var6.children = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[1] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 427:
                return var0;
        }
    };
    var _closure1_slot11 = var6;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_16;
    var8.paddingHorizontal = var9;
    var3.container = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot12 = var3;
    var3 = 18;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/parent_tools/native/FamilyCenterRequestsPage.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Original name: FamilyCenterRequestsPage, environment: var1
        var0 = _closure1_slot12;
        var3 = undefined;
        var4 = var0.bind(var3)();
        var2 = _closure1_slot8;
        var1 = _closure1_slot3;
        var0 = {};
        var4 = var4.container;
        var0.style = var4;
        var8 = _closure1_slot7;
        var7 = _closure1_slot1;
        var9 = _closure1_slot2;
        var4 = 15;
        var4 = var9[var4];
        var6 = var7.bind(var3)(var4);
        var4 = {};
        var6 = var8.bind(var3)(var6, var4);
        var4 = new Array(5);
        var4[0] = var6;
        var10 = _closure1_slot7;
        var6 = 16;
        var6 = var9[var6];
        var8 = var7.bind(var3)(var6);
        var6 = {};
        var6 = var10.bind(var3)(var8, var6);
        var4[1] = var6;
        var8 = _closure1_slot7;
        var6 = 17;
        var6 = var9[var6];
        var7 = var7.bind(var3)(var6);
        var6 = {};
        var6 = var8.bind(var3)(var7, var6);
        var4[2] = var6;
        var8 = _closure1_slot7;
        var7 = _closure1_slot13;
        var6 = {};
        var6 = var8.bind(var3)(var7, var6);
        var4[3] = var6;
        var7 = _closure1_slot7;
        var6 = _closure1_slot11;
        var5 = {};
        var5 = var7.bind(var3)(var6, var5);
        var4[4] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 4558, 9005, 33, 1297, 671, 6471, 6472, 10401, 1234, 1849, 3900, 9008, 5294, 10442, 10444, 10453, 2]);