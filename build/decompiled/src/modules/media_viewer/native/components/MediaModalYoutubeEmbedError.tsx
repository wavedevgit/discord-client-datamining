// modules/media_viewer/native/components/MediaModalYoutubeEmbedError.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
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
    var6 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot4 = var7;
    var3 = var3.jsxs;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {
        'backgroundColor': null,
        'padding': null,
        'justifyContent': 'center',
        'alignItems': 'center',
        'flex': 1
    };
    var10 = 4;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.VOICE_VIDEO_VIDEO_TILE_BACKGROUND;
    var9.backgroundColor = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_32;
    var9.padding = var12;
    var3.container = var9;
    var9 = {};
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var9.marginBottom = var12;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_16;
    var9.marginTop = var10;
    var3.text = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot6 = var3;
    var3 = var6.memo;
    var1 = function arg0() {
        var0 = arg0;
        var0 = var0.videoId;
        var _closure2_slot0 = var0;
        var0 = _closure1_slot6;
        var3 = undefined;
        var9 = var0.bind(var3)();
        var2 = _closure1_slot5;
        var1 = _closure1_slot3;
        var0 = {};
        var5 = var9.container;
        var0.style = var5;
        var7 = _closure1_slot4;
        var12 = _closure1_slot0;
        var13 = _closure1_slot2;
        var4 = 5;
        var4 = var13[var4];
        var4 = var12.bind(var3)(var4);
        var5 = var4.StreamFailed;
        var4 = {};
        var6 = 'contain';
        var4.resizeMode = var6;
        var5 = var7.bind(var3)(var5, var4);
        var4 = new Array(3);
        var4[0] = var5;
        var5 = 6;
        var5 = var13[var5];
        var5 = var12.bind(var3)(var5);
        var6 = var5.Text;
        var5 = {
            'style': null,
            'variant': 'text-md/semibold',
            'color': 'white'
        };
        var9 = var9.text;
        var5.style = var9;
        var9 = 7;
        var10 = var13[var9];
        var10 = var12.bind(var3)(var10);
        var14 = var10.intl;
        var11 = var14.string;
        var10 = var13[var9];
        var10 = var12.bind(var3)(var10);
        var10 = var10.t;
        var10 = var10.u7vKPs;
        var10 = var11.bind(var14)(var10);
        var5.children = var10;
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var5 = 8;
        var5 = var13[var5];
        var5 = var12.bind(var3)(var5);
        var6 = var5.Button;
        var5 = {
            'text': null,
            'variant': 'primary-overlay',
            'shrink': true,
            'grow': false
        };
        var10 = var13[var9];
        var10 = var12.bind(var3)(var10);
        var11 = var10.intl;
        var10 = var11.string;
        var9 = var13[var9];
        var9 = var12.bind(var3)(var9);
        var9 = var9.t;
        var9 = var9.LLpxJ5;
        var9 = var10.bind(var11)(var9);
        var5.text = var9;
        var8 = function() {
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 9;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.openURL;
            var5 = _closure2_slot0;
            var1 = global;
            var1 = var1.HermesInternal;
            var4 = var1.concat;
            var1 = 'https://youtube.com/watch?v=';
            var1 = var4.bind(var1)(var5);
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var5.onPress = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[2] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var1 = var3.bind(var6)(var1);
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/media_viewer/native/components/MediaModalYoutubeEmbedError.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 8010, 3941, 1234, 4084, 3144, 2]);