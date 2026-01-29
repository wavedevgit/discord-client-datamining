// uikit-native/DiscordTag.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
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
    var8 = {
        'flexGrow': 1,
        'alignItems': 'center',
        'flexDirection': 'row'
    };
    var3.container = var8;
    var8 = {};
    var9 = 4;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_4;
    var8.marginLeft = var9;
    var3.botTag = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot6 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'uikit-native/DiscordTag.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: DiscordTag, environment: var1
        _fun66124: for (var _fun66124_ip = 0;;) switch (_fun66124_ip) {
            case 0:
                var0 = arg0;
                var10 = var0.user;
                var13 = var0.nick;
                var15 = var0.usernameStyle;
                var14 = var0.nicknameStyle;
                var20 = var0.discriminatorStyle;
                var7 = var0.hideBotTag;
                var3 = undefined;
                if (!(var7 === var3)) {
                    _fun66124_ip = 46;
                    continue _fun66124
                }
            case 44:
                var7 = false;
            case 46:
                var0 = _closure1_slot6;
                var9 = var0.bind(var3)();
                var2 = _closure1_slot5;
                var1 = _closure1_slot3;
                var0 = {};
                var4 = var9.container;
                var0.style = var4;
                var8 = null;
                if (!(var8 == var13)) {
                    _fun66124_ip = 269;
                    continue _fun66124
                }
            case 85:
                var4 = var8 != var10;
                var5 = null;
                if (!var4) {
                    _fun66124_ip = 267;
                    continue _fun66124
                }
            case 97:
                var12 = _closure1_slot5;
                var11 = _closure1_slot0;
                var4 = _closure1_slot2;
                var21 = 5;
                var4 = var4[var21];
                var4 = var11.bind(var3)(var4);
                var11 = var4.Text;
                var4 = {
                    'variant': 'text-md/semibold',
                    'style': null,
                    'lineClamp': 1,
                    'maxFontSizeMultiplier': 2
                };
                var4.style = var15;
                var15 = var10.toString;
                var16 = var15.bind(var10)();
                var15 = new Array(2);
                var15[0] = var16;
                var16 = var10.hasUniqueUsername;
                var16 = var16.bind(var10)();
                var16 = !var16;
                if (!var16) {
                    _fun66124_ip = 253;
                    continue _fun66124
                }
            case 179:
                var19 = _closure1_slot5;
                var18 = _closure1_slot0;
                var17 = _closure1_slot2;
                var17 = var17[var21];
                var17 = var18.bind(var3)(var17);
                var18 = var17.Text;
                var17 = {
                    'variant': 'text-md/semibold',
                    'color': 'text-muted'
                };
                var17.style = var20;
                var21 = var10.discriminator;
                var20 = ['#'];
                var20[1] = var21;
                var17.children = var20;
                var16 = var19.bind(var3)(var18, var17);
            case 253:
                var15[1] = var16;
                var4.children = var15;
                var5 = var12.bind(var3)(var11, var4);
            case 267:
                _fun66124_ip = 328;
                continue _fun66124;
            case 269:
                var12 = _closure1_slot4;
                var11 = _closure1_slot0;
                var15 = _closure1_slot2;
                var4 = 5;
                var4 = var15[var4];
                var4 = var11.bind(var3)(var4);
                var11 = var4.Text;
                var4 = {
                    'variant': 'text-md/semibold',
                    'maxFontSizeMultiplier': 2,
                    'style': null,
                    'lineClamp': 1
                };
                var4.style = var14;
                var4.children = var13;
                var5 = var12.bind(var3)(var11, var4);
            case 328:
                var4 = new Array(2);
                var4[0] = var5;
                var5 = var8 == var10;
                var12 = undefined;
                if (var5) {
                    _fun66124_ip = 351;
                    continue _fun66124
                }
            case 345:
                var12 = var10.bot;
            case 351:
                var11 = true;
                var5 = null;
                if (!(var11 === var12)) {
                    _fun66124_ip = 421;
                    continue _fun66124
                }
            case 359:
                var5 = null;
                if (var7) {
                    _fun66124_ip = 421;
                    continue _fun66124
                }
            case 364:
                var8 = _closure1_slot4;
                var7 = _closure1_slot1;
                var11 = _closure1_slot2;
                var6 = 6;
                var6 = var11[var6];
                var7 = var7.bind(var3)(var6);
                var6 = {};
                var9 = var9.botTag;
                var6.style = var9;
                var9 = var10.isVerifiedBot;
                var9 = var9.bind(var10)();
                var6.verified = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 421:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 3895, 5725, 2]);