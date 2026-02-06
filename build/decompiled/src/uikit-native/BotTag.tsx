// uikit-native/BotTag.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = function() {
        _fun51117: for (var _fun51117_ip = 0;;) switch (_fun51117_ip) {
            case 0:
                var2 = arguments[0];
                var5 = undefined;
                if (!(var2 === var5)) {
                    _fun51117_ip = 22;
                    continue _fun51117
                }
            case 9:
                var0 = _closure1_slot4;
                var2 = var0.BOT;
            case 22:
                var0 = _closure1_slot4;
                var0 = var0.SYSTEM_DM;
                if (!(var0 !== var2)) {
                    _fun51117_ip = 197;
                    continue _fun51117
                }
            case 42:
                var0 = _closure1_slot4;
                var0 = var0.OFFICIAL;
                if (!(var0 !== var2)) {
                    _fun51117_ip = 197;
                    continue _fun51117
                }
            case 59:
                var0 = _closure1_slot4;
                var0 = var0.SERVER;
                if (!(var0 !== var2)) {
                    _fun51117_ip = 140;
                    continue _fun51117
                }
            case 73:
                var0 = _closure1_slot4;
                var0 = var0.BOT;
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 6;
                var2 = var6[var0];
                var2 = var4.bind(var5)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var0 = var6[var0];
                var0 = var4.bind(var5)(var0);
                var0 = var0.t;
                var0 = var0["9RNkeF"];
                var0 = var2.bind(var3)(var0);
                _fun51117_ip = 252;
                continue _fun51117;
            case 140:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 6;
                var3 = var7[var2];
                var3 = var6.bind(var5)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2.PuJGuM;
                var0 = var3.bind(var4)(var2);
                _fun51117_ip = 252;
                continue _fun51117;
            case 197:
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 6;
                var2 = var6[var1];
                var2 = var4.bind(var5)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var4.bind(var5)(var1);
                var1 = var1.t;
                var1 = var1.lKQ7Wt;
                var0 = var2.bind(var3)(var1);
            case 252:
                return var0;
        }
    };
    var _closure1_slot8 = var1;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var0 = 0;
    var7 = var6[var0];
    var4 = arg3;
    var0 = undefined;
    var4 = var4.bind(var0)(var7);
    var13 = 1;
    var4 = var6[var13];
    var4 = var5.bind(var0)(var4);
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.BotTagTypes;
    var _closure1_slot4 = var4;
    var7 = 3;
    var7 = var6[var7];
    var7 = var5.bind(var0)(var7);
    var8 = var7.jsx;
    var _closure1_slot5 = var8;
    var7 = var7.jsxs;
    var _closure1_slot6 = var7;
    var7 = 4;
    var7 = var6[var7];
    var9 = var5.bind(var0)(var7);
    var8 = var9.createStyles;
    var7 = {};
    var10 = {
        'paddingLeft': 4,
        'paddingRight': 4,
        'borderRadius': null,
        'display': 'flex',
        'flexDirection': 'row',
        'justifyContent': 'center',
        'alignItems': 'center',
        'gap': 1
    };
    var11 = 5;
    var14 = var6[var11];
    var14 = var12.bind(var0)(var14);
    var14 = var14.radii;
    var14 = var14.xs;
    var10.borderRadius = var14;
    var7.tag = var10;
    var10 = {};
    var10.paddingLeft = var13;
    var7.verifiedTagLeftPadding = var10;
    var10 = {};
    var13 = var6[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BRAND;
    var10.backgroundColor = var13;
    var7.tagNormal = var10;
    var10 = {};
    var13 = var6[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.WHITE;
    var10.backgroundColor = var13;
    var7.tagInverted = var10;
    var10 = {};
    var13 = var6[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.WHITE;
    var10.color = var13;
    var7.tagTextNormal = var10;
    var10 = {};
    var11 = var6[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_BRAND;
    var10.color = var11;
    var7.tagTextInverted = var10;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot7 = var7;
    var3 = function arg0() {
        _fun51118: for (var _fun51118_ip = 0;;) switch (_fun51118_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.invertColor;
                var3 = undefined;
                if (!(var0 === var3)) {
                    _fun51118_ip = 19;
                    continue _fun51118
                }
            case 17:
                var0 = false;
            case 19:
                var6 = var1.type;
                if (!(var6 === var3)) {
                    _fun51118_ip = 41;
                    continue _fun51118
                }
            case 28:
                var2 = _closure1_slot4;
                var6 = var2.BOT;
            case 41:
                var9 = var1.style;
                var1 = var1.verified;
                var2 = _closure1_slot7;
                var4 = var2.bind(var3)();
                var2 = _closure1_slot8;
                var8 = var2.bind(var3)(var6);
                var2 = _closure1_slot4;
                var2 = var2.OFFICIAL;
                var2 = var6 === var2;
                var7 = var6;
                if (var2) {
                    _fun51118_ip = 106;
                    continue _fun51118
                }
            case 92:
                var6 = _closure1_slot4;
                var6 = var6.SYSTEM_DM;
                var2 = var7 === var6;
            case 106:
                if (var1) {
                    _fun51118_ip = 112;
                    continue _fun51118
                }
            case 109:
                var1 = var2;
            case 112:
                var7 = null;
                var6 = null;
                if (!var1) {
                    _fun51118_ip = 196;
                    continue _fun51118
                }
            case 119:
                var10 = _closure1_slot5;
                var2 = _closure1_slot0;
                var13 = _closure1_slot2;
                var1 = 7;
                var1 = var13[var1];
                var1 = var2.bind(var3)(var1);
                var2 = var1.CheckmarkSmallBoldIcon;
                var1 = {};
                var11 = 'xs';
                var1.size = var11;
                var12 = _closure1_slot1;
                var11 = 5;
                var11 = var13[var11];
                var11 = var12.bind(var3)(var11);
                var11 = var11.colors;
                var11 = var11.WHITE;
                var1.color = var11;
                var6 = var10.bind(var3)(var2, var1);
            case 196:
                if (var0) {
                    _fun51118_ip = 207;
                    continue _fun51118
                }
            case 199:
                var11 = var4.tagNormal;
                _fun51118_ip = 213;
                continue _fun51118;
            case 207:
                var11 = var4.tagInverted;
            case 213:
                if (var0) {
                    _fun51118_ip = 224;
                    continue _fun51118
                }
            case 216:
                var10 = var4.tagTextNormal;
                _fun51118_ip = 230;
                continue _fun51118;
            case 224:
                var10 = var4.tagTextInverted;
            case 230:
                var0 = var7 != var6;
                var7 = null;
                if (!var0) {
                    _fun51118_ip = 245;
                    continue _fun51118
                }
            case 239:
                var7 = var4.verifiedTagLeftPadding;
            case 245:
                var2 = _closure1_slot6;
                var1 = _closure1_slot3;
                var0 = {};
                var12 = var4.tag;
                var4 = new Array(4);
                var4[0] = var12;
                var4[1] = var11;
                var4[2] = var9;
                var4[3] = var7;
                var0.style = var4;
                var4 = new Array(2);
                var4[0] = var6;
                var7 = _closure1_slot5;
                var6 = _closure1_slot0;
                var9 = _closure1_slot2;
                var5 = 8;
                var5 = var9[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.Text;
                var5 = {
                    'variant': 'text-xs/semibold',
                    'lineClamp': 1,
                    'maxFontSizeMultiplier': 2
                };
                var9 = new Array(1);
                var9[0] = var10;
                var5.style = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var3.Types = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'uikit-native/BotTag.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.getBotLabel = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 3487, 33, 1297, 671, 1234, 5776, 3943, 2]);