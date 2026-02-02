// modules/media_channel/native/MediaPostGridThumbnail.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun89504: for (var _fun89504_ip = 0;;) switch (_fun89504_ip) {
            case 0:
                var1 = arg0;
                var9 = var1.shouldSpoiler;
                var8 = var1.blurTheme;
                var5 = var1.source;
                var6 = var1.androidStyle;
                var0 = var1.backgroundImagesource;
                var13 = var1.resizeMode;
                var1 = null;
                if (!(var1 != var0)) {
                    _fun89504_ip = 220;
                    continue _fun89504
                }
            case 46:
                var3 = _closure1_slot6;
                var2 = _closure1_slot3;
                var1 = {};
                var1.style = var6;
                var1.source = var0;
                var0 = 'cover';
                var1.resizeMode = var0;
                var0 = {};
                var4 = 0.2;
                var0.opacity = var4;
                var1.imageStyle = var0;
                var11 = _closure1_slot5;
                var10 = _closure1_slot1;
                var12 = _closure1_slot2;
                var0 = 4;
                var4 = var12[var0];
                var0 = undefined;
                var10 = var10.bind(var0)(var4);
                var4 = {};
                var14 = _closure1_slot4;
                var14 = var14.absoluteFill;
                var4.style = var14;
                var4.source = var5;
                var4.resizeMode = var13;
                var10 = var11.bind(var0)(var10, var4);
                var4 = new Array(2);
                var4[0] = var10;
                var11 = _closure1_slot5;
                var10 = _closure1_slot0;
                var7 = 3;
                var7 = var12[var7];
                var7 = var10.bind(var0)(var7);
                var10 = var7.ForumPostMediaSpoiler;
                var7 = {};
                var7.shouldSpoiler = var9;
                var7.blurTheme = var8;
                var7 = var11.bind(var0)(var10, var7);
                var4[1] = var7;
                var1.children = var4;
                var0 = var3.bind(var0)(var2, var1);
                _fun89504_ip = 322;
                continue _fun89504;
            case 220:
                var4 = _closure1_slot5;
                var3 = _closure1_slot3;
                var2 = {};
                var2.style = var6;
                var2.source = var5;
                var5 = 0;
                if (!var9) {
                    _fun89504_ip = 249;
                    continue _fun89504
                }
            case 246:
                var5 = 10;
            case 249:
                var2.blurRadius = var5;
                var5 = 'cover';
                var2.resizeMode = var5;
                var7 = _closure1_slot5;
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 3;
                var5 = var5[var1];
                var1 = undefined;
                var5 = var6.bind(var1)(var5);
                var6 = var5.ForumPostMediaSpoiler;
                var5 = {};
                var5.shouldSpoiler = var9;
                var5.blurTheme = var8;
                var5 = var7.bind(var1)(var6, var5);
                var2.children = var5;
                var0 = var4.bind(var1)(var3, var2);
            case 322:
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var0 = function arg0() {
        _fun89505: for (var _fun89505_ip = 0;;) switch (_fun89505_ip) {
            case 0:
                var0 = arg0;
                var10 = var0.shouldSpoiler;
                var9 = var0.blurTheme;
                var13 = var0.source;
                var14 = var0.iosStyle;
                var16 = var0.backgroundImagesource;
                var12 = var0.resizeMode;
                var3 = _closure1_slot6;
                var2 = _closure1_slot7;
                var0 = null;
                if (!(var0 != var16)) {
                    _fun89505_ip = 246;
                    continue _fun89505
                }
            case 57:
                var1 = {};
                var15 = _closure1_slot5;
                var6 = _closure1_slot1;
                var11 = _closure1_slot2;
                var4 = 4;
                var0 = var11[var4];
                var8 = undefined;
                var7 = var6.bind(var8)(var0);
                var0 = {};
                var17 = _closure1_slot4;
                var18 = var17.absoluteFill;
                var17 = new Array(2);
                var17[0] = var18;
                var18 = {};
                var19 = 0.2;
                var18.opacity = var19;
                var17[1] = var18;
                var0.style = var17;
                var0.source = var16;
                var16 = 'cover';
                var0.resizeMode = var16;
                var7 = var15.bind(var8)(var7, var0);
                var0 = new Array(3);
                var0[0] = var7;
                var7 = _closure1_slot5;
                var4 = var11[var4];
                var6 = var6.bind(var8)(var4);
                var4 = {};
                var4.style = var14;
                var4.source = var13;
                var4.resizeMode = var12;
                var4 = var7.bind(var8)(var6, var4);
                var0[1] = var4;
                var7 = _closure1_slot5;
                var6 = _closure1_slot0;
                var4 = 3;
                var4 = var11[var4];
                var4 = var6.bind(var8)(var4);
                var6 = var4.ForumPostMediaSpoiler;
                var4 = {};
                var4.shouldSpoiler = var10;
                var4.blurTheme = var9;
                var4 = var7.bind(var8)(var6, var4);
                var0[2] = var4;
                var1.children = var0;
                _fun89505_ip = 357;
                continue _fun89505;
            case 246:
                var0 = {};
                var7 = _closure1_slot5;
                var6 = _closure1_slot1;
                var11 = _closure1_slot2;
                var4 = 4;
                var4 = var11[var4];
                var8 = undefined;
                var6 = var6.bind(var8)(var4);
                var4 = {};
                var4.style = var14;
                var4.source = var13;
                var4.resizeMode = var12;
                var6 = var7.bind(var8)(var6, var4);
                var4 = new Array(2);
                var4[0] = var6;
                var7 = _closure1_slot5;
                var6 = _closure1_slot0;
                var5 = 3;
                var5 = var11[var5];
                var5 = var6.bind(var8)(var5);
                var6 = var5.ForumPostMediaSpoiler;
                var5 = {};
                var5.shouldSpoiler = var10;
                var5.blurTheme = var9;
                var5 = var7.bind(var8)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var1 = var0;
            case 357:
                var0 = undefined;
                var0 = var3.bind(var0)(var2, var1);
                return var0;
        }
    };
    var _closure1_slot9 = var0;
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
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.ImageBackground;
    var _closure1_slot3 = var6;
    var3 = var3.StyleSheet;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot5 = var6;
    var6 = var3.jsxs;
    var _closure1_slot6 = var6;
    var3 = var3.Fragment;
    var _closure1_slot7 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/media_channel/native/MediaPostGridThumbnail.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun89506: for (var _fun89506_ip = 0;;) switch (_fun89506_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.isPortrait;
                var1 = true;
                var3 = var1 === var2;
                if (!var3) {
                    _fun89506_ip = 30;
                    continue _fun89506
                }
            case 18:
                var2 = var0.shouldSpoiler;
                var1 = false;
                var3 = var1 === var2;
            case 30:
                var4 = undefined;
                var1 = 'cover';
                var2 = undefined;
                if (!var3) {
                    _fun89506_ip = 50;
                    continue _fun89506
                }
            case 41:
                var2 = var0.source;
                var1 = 'contain';
            case 50:
                var5 = {};
                var8 = var5;
                var7 = var0;
                var0 = copyDataProperties(var8, var7);
                var0 = 'backgroundImagesource';
                var5[var0] = var2;
                var0 = 'resizeMode';
                var5[var0] = var1;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 5;
                var0 = var3[var0];
                var2 = var2.bind(var4)(var0);
                var0 = var2.isAndroid;
                var0 = var0.bind(var2)();
                var3 = _closure1_slot5;
                if (var0) {
                    _fun89506_ip = 144;
                    continue _fun89506
                }
            case 120:
                var2 = _closure1_slot9;
                var0 = {};
                var8 = var0;
                var7 = var5;
                var6 = copyDataProperties(var8, var7);
                var0 = var3.bind(var4)(var2, var0);
                _fun89506_ip = 166;
                continue _fun89506;
            case 144:
                var2 = _closure1_slot8;
                var1 = {};
                var8 = var1;
                var7 = var5;
                var5 = copyDataProperties(var8, var7);
                var0 = var3.bind(var4)(var2, var1);
            case 166:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 11582, 4669, 478, 2]);