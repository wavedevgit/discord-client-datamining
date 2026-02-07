// modules/messages/native/renderer/row_data/embeds/coded_links/GuildTemplateEmbed.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.Image;
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.GuildTemplateStates;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.InviteTypes;
    var _closure1_slot6 = var3;
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/native/renderer/row_data/embeds/coded_links/GuildTemplateEmbed.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        _fun92931: for (var _fun92931_ip = 0;;) switch (_fun92931_ip) {
            case 0:
                var10 = arg1;
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 4;
                var0 = var2[var0];
                var9 = undefined;
                var0 = var1.bind(var9)(var0);
                var0 = var0.bind(var9)(var10);
                var4 = var0.colors;
                var2 = var0.baseColors;
                var5 = _closure1_slot4;
                var1 = var5.getGuildTemplate;
                var0 = arg0;
                var6 = var1.bind(var5)(var0);
                var0 = null;
                if (!(var0 != var6)) {
                    _fun92931_ip = 957;
                    continue _fun92931
                }
            case 71:
                var5 = var6.state;
                var1 = _closure1_slot5;
                var1 = var1.RESOLVING;
                if (!(var5 !== var1)) {
                    _fun92931_ip = 835;
                    continue _fun92931
                }
            case 93:
                var5 = var6.state;
                var1 = _closure1_slot5;
                var1 = var1.EXPIRED;
                if (!(var5 !== var1)) {
                    _fun92931_ip = 508;
                    continue _fun92931
                }
            case 115:
                var8 = _closure1_slot0;
                var11 = _closure1_slot2;
                var5 = 5;
                var1 = var11[var5];
                var1 = var8.bind(var9)(var1);
                var13 = var1.intl;
                var12 = var13.formatToPlainString;
                var1 = var11[var5];
                var1 = var8.bind(var9)(var1);
                var1 = var1.t;
                var7 = var1.L8Awgh;
                var1 = {};
                var15 = var6.usageCount;
                var14 = var15.toString;
                var14 = var14.bind(var15)();
                var1.usageCount = var14;
                var7 = var12.bind(var13)(var7, var1);
                var1 = {};
                var17 = var1;
                var16 = var2;
                var12 = copyDataProperties(var17, var16);
                var12 = var11[var5];
                var12 = var8.bind(var9)(var12);
                var14 = var12.intl;
                var13 = var14.string;
                var12 = var11[var5];
                var12 = var8.bind(var9)(var12);
                var12 = var12.t;
                var12 = var12.kAvFkO;
                var13 = var13.bind(var14)(var12);
                var12 = var13.toUpperCase;
                var13 = var12.bind(var13)();
                var12 = 'headerText';
                var1[var12] = var13;
                var13 = var4.headerColor;
                var12 = 'headerColor';
                var1[var12] = var13;
                var12 = var6.name;
                var6 = 'titleText';
                var1[var6] = var12;
                var12 = var4.titleColor;
                var6 = 'titleColor';
                var1[var6] = var12;
                var6 = 'subtitle';
                var1[var6] = var7;
                var7 = var4.subtitleColor;
                var6 = 'subtitleColor';
                var1[var6] = var7;
                var12 = _closure1_slot3;
                var7 = var12.resolveAssetSource;
                var13 = _closure1_slot1;
                var6 = 11;
                var6 = var11[var6];
                var6 = var13.bind(var9)(var6);
                var6 = var7.bind(var12)(var6);
                var7 = var6.uri;
                var6 = 'thumbnailUrl';
                var1[var6] = var7;
                var7 = var4.acceptLabelGreenColor;
                var6 = 'acceptLabelColor';
                var1[var6] = var7;
                var7 = var4.acceptLabelGreenBackgroundColor;
                var6 = 'acceptLabelBackgroundColor';
                var1[var6] = var7;
                var6 = var11[var5];
                var6 = var8.bind(var9)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var5 = var11[var5];
                var5 = var8.bind(var9)(var5);
                var5 = var5.t;
                var5 = var5["a3Gl+e"];
                var6 = var6.bind(var7)(var5);
                var5 = 'acceptLabelText';
                var1[var5] = var6;
                var6 = true;
                var5 = 'embedCanBeTapped';
                var1[var5] = var6;
                var5 = _closure1_slot6;
                var6 = var5.GUILD;
                var5 = 'type';
                var1[var5] = var6;
                return var1;
            case 508:
                var1 = {};
                var17 = var1;
                var16 = var2;
                var5 = copyDataProperties(var17, var16);
                var8 = _closure1_slot0;
                var11 = _closure1_slot2;
                var5 = 5;
                var6 = var11[var5];
                var6 = var8.bind(var9)(var6);
                var12 = var6.intl;
                var7 = var12.string;
                var6 = var11[var5];
                var6 = var8.bind(var9)(var6);
                var6 = var6.t;
                var6 = var6.C7ZRNw;
                var7 = var7.bind(var12)(var6);
                var6 = var7.toUpperCase;
                var7 = var6.bind(var7)();
                var6 = 'headerText';
                var1[var6] = var7;
                var6 = 6;
                var6 = var11[var6];
                var12 = var8.bind(var9)(var6);
                var7 = var12.processColorOrThrow;
                var13 = _closure1_slot1;
                var6 = 7;
                var6 = var11[var6];
                var6 = var13.bind(var9)(var6);
                var6 = var6.unsafe_rawColors;
                var6 = var6.RED_400;
                var7 = var7.bind(var12)(var6);
                var6 = 'titleColor';
                var1[var6] = var7;
                var6 = var11[var5];
                var6 = var8.bind(var9)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var5 = var11[var5];
                var5 = var8.bind(var9)(var5);
                var5 = var5.t;
                var5 = var5.A6MwXE;
                var6 = var6.bind(var7)(var5);
                var5 = 'titleText';
                var1[var5] = var6;
                var7 = _closure1_slot3;
                var6 = var7.resolveAssetSource;
                var5 = 8;
                var5 = var11[var5];
                var8 = var8.bind(var9)(var5);
                var5 = var8.isThemeDark;
                var5 = var5.bind(var8)(var10);
                var10 = _closure1_slot1;
                var11 = _closure1_slot2;
                if (var5) {
                    _fun92931_ip = 768;
                    continue _fun92931
                }
            case 754:
                var5 = 10;
                var5 = var11[var5];
                var5 = var10.bind(var9)(var5);
                _fun92931_ip = 780;
                continue _fun92931;
            case 768:
                var8 = 9;
                var8 = var11[var8];
                var5 = var10.bind(var9)(var8);
            case 780:
                var5 = var6.bind(var7)(var5);
                var6 = var5.uri;
                var5 = 'thumbnailUrl';
                var1[var5] = var6;
                var6 = var4.thumbnailBackgroundColor;
                var5 = 'thumbnailBackgroundColor';
                var1[var5] = var6;
                var5 = _closure1_slot6;
                var6 = var5.GUILD;
                var5 = 'type';
                var1[var5] = var6;
                return var1;
            case 835:
                var1 = {};
                var8 = _closure1_slot0;
                var10 = _closure1_slot2;
                var5 = 5;
                var6 = var10[var5];
                var6 = var8.bind(var9)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var5 = var10[var5];
                var5 = var8.bind(var9)(var5);
                var5 = var5.t;
                var5 = var5.Xj87Yf;
                var6 = var6.bind(var7)(var5);
                var5 = var6.toUpperCase;
                var5 = var5.bind(var6)();
                var1.headerText = var5;
                var5 = var4.resolvingGradientEnd;
                var1.resolvingGradientEnd = var5;
                var4 = var4.resolvingGradientStart;
                var1.resolvingGradientStart = var4;
                var3 = _closure1_slot6;
                var3 = var3.GUILD;
                var1.type = var3;
                var17 = var1;
                var16 = var2;
                var2 = copyDataProperties(var17, var16);
                return var1;
            case 957:
                return var0;
        }
    };
    var2.createGuildTemplateEmbed = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 6595, 6557, 3336, 10149, 1234, 6587, 671, 3207, 10150, 10151, 12121, 2]);