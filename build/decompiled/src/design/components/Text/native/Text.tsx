// design/components/Text/native/Text.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var14 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var14;
    var _closure1_slot2 = var6;
    var3 = global;
    var8 = var3.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var0 = 0;
    var7 = var6[var0];
    var4 = metroImportAll;
    var0 = undefined;
    var7 = var4.bind(var0)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var11 = var4.Text;
    var _closure1_slot3 = var11;
    var8 = var4.StyleSheet;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var9 = var4.Fonts;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.jsx;
    var _closure1_slot4 = var4;
    var4 = 4;
    var4 = var6[var4];
    var10 = var14.bind(var0)(var4);
    var4 = var10.createAnimatedComponent;
    var4 = var4.bind(var10)(var11);
    var _closure1_slot5 = var4;
    var11 = var3.Object;
    var10 = var11.fromEntries;
    var13 = var3.Object;
    var12 = var13.keys;
    var4 = 5;
    var4 = var6[var4];
    var4 = var14.bind(var0)(var4);
    var4 = var4.colors;
    var13 = var12.bind(var13)(var4);
    var12 = var13.map;
    var4 = function(arg0) { // Environment: var1
        var1 = arg0;
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 6;
        var2 = var2[var0];
        var0 = undefined;
        var2 = var3.bind(var0)(var2);
        var0 = var2.kebabCase;
        var2 = var0.bind(var2)(var1);
        var0 = new Array(2);
        var0[0] = var2;
        var0[1] = var1;
        return var0;
    };
    var4 = var12.bind(var13)(var4);
    var4 = var10.bind(var11)(var4);
    var _closure1_slot6 = var4;
    var4 = {};
    var10 = var9.DISPLAY_NORMAL;
    var4[400] = var10;
    var10 = var9.DISPLAY_MEDIUM;
    var4[500] = var10;
    var10 = var9.DISPLAY_SEMIBOLD;
    var4[600] = var10;
    var10 = var9.DISPLAY_BOLD;
    var4[700] = var10;
    var10 = var9.DISPLAY_EXTRABOLD;
    var4[800] = var10;
    var _closure1_slot7 = var4;
    var4 = {};
    var10 = var9.PRIMARY_NORMAL;
    var4[400] = var10;
    var10 = var9.PRIMARY_MEDIUM;
    var4[500] = var10;
    var10 = var9.PRIMARY_SEMIBOLD;
    var4[600] = var10;
    var10 = var9.PRIMARY_BOLD;
    var4[700] = var10;
    var _closure1_slot8 = var4;
    var4 = {};
    var9 = var9.GINTO_NORD_EXTRA_BOLD;
    var4[800] = var9;
    var _closure1_slot9 = var4;
    var4 = var8.create;
    var10 = var3.Object;
    var9 = var10.fromEntries;
    var11 = 7;
    var11 = var6[var11];
    var11 = var5.bind(var0)(var11);
    var13 = var11.TextVariantsFlat;
    var12 = var13.map;
    var11 = function(arg0) { // Environment: var1
        _fun35489: for (var _fun35489_ip = 0;;) switch (_fun35489_ip) {
            case 0:
                var4 = arg0;
                var2 = var4.name;
                var7 = null;
                var1 = 'code';
                var0 = null;
                if (!(var1 !== var2)) {
                    _fun35489_ip = 206;
                    continue _fun35489
                }
            case 23:
                var2 = var4.name;
                var1 = new Array(2);
                var1[0] = var2;
                var2 = {};
                var3 = var4.size;
                var2.fontSize = var3;
                var3 = var4.lineHeight;
                var2.lineHeight = var3;
                var5 = var4.uppercase;
                var3 = 'none';
                if (!var5) {
                    _fun35489_ip = 76;
                    continue _fun35489
                }
            case 72:
                var3 = 'uppercase';
            case 76:
                var2.textTransform = var3;
                var6 = var4.fontStack;
                var5 = var4.weight;
                var3 = var5.toString;
                var5 = var3.bind(var5)();
                var3 = {};
                var9 = _closure1_slot9;
                var3.headline = var9;
                var9 = _closure1_slot7;
                var3.display = var9;
                var8 = _closure1_slot8;
                var3.primary = var8;
                var3 = var3[var6];
                var3 = var3[var5];
                var2.fontFamily = var3;
                var3 = false;
                var2.includeFontPadding = var3;
                var3 = 'letterSpacing';
                var5 = var3 in var4;
                var3 = undefined;
                if (!var5) {
                    _fun35489_ip = 194;
                    continue _fun35489
                }
            case 166:
                var5 = var4.letterSpacing;
                var5 = var7 != var5;
                var3 = undefined;
                if (!var5) {
                    _fun35489_ip = 194;
                    continue _fun35489
                }
            case 181:
                var5 = var4.letterSpacing;
                var4 = 10;
                var3 = var5 / var4;
            case 194:
                var2.letterSpacing = var3;
                var1[1] = var2;
                var0 = var1;
            case 206:
                return var0;
        }
    };
    var12 = var12.bind(var13)(var11);
    var11 = var12.filter;
    var3 = var3.Boolean;
    var3 = var11.bind(var12)(var3);
    var3 = var9.bind(var10)(var3);
    var3 = var4.bind(var8)(var3);
    var _closure1_slot10 = var3;
    var4 = 8;
    var4 = var6[var4];
    var9 = var5.bind(var0)(var4);
    var8 = var9.createStyles;
    var4 = function(arg0, arg1) { // Environment: var1
        _fun35490: for (var _fun35490_ip = 0;;) switch (_fun35490_ip) {
            case 0:
                var6 = arg0;
                var0 = {};
                var1 = {};
                var2 = undefined;
                var4 = 'none';
                var3 = undefined;
                if (!(var4 !== var6)) {
                    _fun35490_ip = 108;
                    continue _fun35490
                }
            case 19:
                var4 = 'always-white';
                if (!(var4 !== var6)) {
                    _fun35490_ip = 71;
                    continue _fun35490
                }
            case 29:
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var5 = 5;
                var5 = var8[var5];
                var5 = var7.bind(var2)(var5);
                var5 = var5.colors;
                var4 = _closure1_slot6;
                var4 = var4[var6];
                var4 = var5[var4];
                _fun35490_ip = 105;
                continue _fun35490;
            case 71:
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var5 = 5;
                var5 = var7[var5];
                var5 = var6.bind(var2)(var5);
                var5 = var5.unsafe_rawColors;
                var4 = var5.WHITE;
            case 105:
                var3 = var4;
            case 108:
                var1.color = var3;
                var3 = arg1;
                var2 = undefined;
                if (!var3) {
                    _fun35490_ip = 130;
                    continue _fun35490
                }
            case 120:
                var2 = ['tabular-nums'];
            case 130:
                var1.fontVariant = var2;
                var0.text = var1;
                return var0;
        }
    };
    var4 = var8.bind(var9)(var4);
    var _closure1_slot11 = var4;
    var4 = var7.forwardRef;
    var1 = function(arg0, arg1) { // Environment: var1
        _fun35491: for (var _fun35491_ip = 0;;) switch (_fun35491_ip) {
            case 0:
                var8 = arg0;
                var11 = var8.variant;
                var13 = var8.color;
                var9 = var8.style;
                var7 = var8.lineClamp;
                var6 = var8.ellipsizeMode;
                var12 = var8.tabularNumbers;
                var3 = undefined;
                if (!(var12 === var3)) {
                    _fun35491_ip = 44;
                    continue _fun35491
                }
            case 42:
                var12 = false;
            case 44:
                var0 = var8.animated;
                if (!(var0 === var3)) {
                    _fun35491_ip = 56;
                    continue _fun35491
                }
            case 54:
                var0 = false;
            case 56:
                var1 = var8.experimental_useNativeText;
                if (!(var1 === var3)) {
                    _fun35491_ip = 68;
                    continue _fun35491
                }
            case 66:
                var1 = false;
            case 68:
                var4 = {
                    'variant': 0,
                    'color': 0,
                    'style': 0,
                    'lineClamp': 0,
                    'ellipsizeMode': 0,
                    'tabularNumbers': 0,
                    'animated': 0,
                    'experimental_useNativeText': 0
                };
                var5 = null;
                var17 = var4;
                var16 = null;
                var2 = silentSetPrototypeOf(var17, var16);
                var17 = {};
                var16 = var8;
                var15 = var4;
                var4 = copyDataProperties(var17, var16, var15);
                var10 = _closure1_slot11;
                var14 = var5 != var13;
                var2 = 'text-default';
                if (!var14) {
                    _fun35491_ip = 128;
                    continue _fun35491
                }
            case 125:
                var2 = var13;
            case 128:
                var10 = var10.bind(var3)(var2, var12);
                if (var1) {
                    _fun35491_ip = 152;
                    continue _fun35491
                }
            case 137:
                if (var0) {
                    _fun35491_ip = 146;
                    continue _fun35491
                }
            case 140:
                var2 = _closure1_slot3;
                _fun35491_ip = 150;
                continue _fun35491;
            case 146:
                var2 = _closure1_slot5;
            case 150:
                _fun35491_ip = 178;
                continue _fun35491;
            case 152:
                var1 = _closure1_slot0;
                var12 = _closure1_slot2;
                var0 = 9;
                var0 = var12[var0];
                var0 = var1.bind(var3)(var0);
                var2 = var0.NativeText;
            case 178:
                var1 = _closure1_slot4;
                var0 = {};
                var8 = _closure1_slot10;
                var11 = var8[var11];
                var8 = new Array(3);
                var8[0] = var11;
                var10 = var10.text;
                var8[1] = var10;
                var8[2] = var9;
                var0.style = var8;
                var0.numberOfLines = var7;
                var7 = var5 != var6;
                var5 = 'tail';
                if (!var7) {
                    _fun35491_ip = 236;
                    continue _fun35491
                }
            case 233:
                var5 = var6;
            case 236:
                var0.ellipsizeMode = var5;
                var5 = true;
                var0.allowFontScaling = var5;
                var5 = arg1;
                var0.ref = var5;
                var17 = var0;
                var16 = var4;
                var4 = copyDataProperties(var17, var16);
                var0 = var1.bind(var3)(var2, var0);
                return var0;
        }
    };
    var1 = var4.bind(var7)(var1);
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/Text/native/Text.tsx';
    var4 = var5.bind(var6)(var4);
    var2.TextStyleSheet = var3;
    var2.Text = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 483, 33, 3711, 671, 22, 3933, 1297, 290, 2]);