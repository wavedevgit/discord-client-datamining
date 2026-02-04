// modules/video_calls/native/components/ScreenshareTile.tsx
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
    var6 = var3.View;
    var _closure1_slot3 = var6;
    var3 = var3.Image;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.NOOP;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot6 = var6;
    var3 = var3.jsxs;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'alignItems': 'center',
        'justifyContent': 'center',
        'backgroundColor': null,
        'overflow': 'hidden',
        'flex': 1
    };
    var9 = 5;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BLACK;
    var8.backgroundColor = var9;
    var3.container = var8;
    var8 = {
        'marginBottom': 8,
        'width': 60,
        'height': 40
    };
    var3.image = var8;
    var8 = {
        'lineHeight': 18,
        'textAlign': 'center'
    };
    var3.label = var8;
    var8 = {
        'position': 'absolute',
        'top': 8,
        'right': 8,
        'zIndex': 2
    };
    var3.liveContainer = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot8 = var3;
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/video_calls/native/components/ScreenshareTile.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun64433: for (var _fun64433_ip = 0;;) switch (_fun64433_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.onSingleTap;
                var3 = undefined;
                if (!(var4 === var3)) {
                    _fun64433_ip = 22;
                    continue _fun64433
                }
            case 15:
                var4 = _closure1_slot5;
            case 22:
                var2 = var0.onDoubleTap;
                if (!(var2 === var3)) {
                    _fun64433_ip = 39;
                    continue _fun64433
                }
            case 32:
                var2 = _closure1_slot5;
            case 39:
                var0 = _closure1_slot8;
                var10 = var0.bind(var3)();
                var12 = _closure1_slot1;
                var14 = _closure1_slot2;
                var0 = 6;
                var0 = var14[var0];
                var1 = var12.bind(var3)(var0);
                var0 = {};
                var0.onSingleTapStart = var4;
                var0.onDoubleTapStart = var2;
                var4 = var1.bind(var3)(var0);
                var2 = _closure1_slot6;
                var13 = _closure1_slot0;
                var0 = 7;
                var0 = var14[var0];
                var0 = var13.bind(var3)(var0);
                var1 = var0.GestureDetector;
                var0 = {};
                var0.gesture = var4;
                var6 = _closure1_slot7;
                var5 = _closure1_slot3;
                var4 = {};
                var7 = var10.container;
                var4.style = var7;
                var7 = {};
                var9 = var10.liveContainer;
                var7.style = var9;
                var9 = 8;
                var9 = var14[var9];
                var11 = var12.bind(var3)(var9);
                var9 = {};
                var9 = var2.bind(var3)(var11, var9);
                var7.children = var9;
                var9 = var2.bind(var3)(var5, var7);
                var7 = new Array(3);
                var7[0] = var9;
                var9 = _closure1_slot4;
                var8 = {};
                var11 = 9;
                var11 = var14[var11];
                var11 = var12.bind(var3)(var11);
                var8.source = var11;
                var11 = var10.image;
                var8.style = var11;
                var11 = 'contain';
                var8.resizeMode = var11;
                var8 = var2.bind(var3)(var9, var8);
                var7[1] = var8;
                var8 = 10;
                var8 = var14[var8];
                var8 = var13.bind(var3)(var8);
                var9 = var8.Text;
                var8 = {
                    'style': null,
                    'variant': 'text-xs/bold',
                    'color': 'always-white'
                };
                var10 = var10.label;
                var8.style = var10;
                var10 = 11;
                var11 = var14[var10];
                var11 = var13.bind(var3)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                var10 = var14[var10];
                var10 = var13.bind(var3)(var10);
                var10 = var10.t;
                var10 = var10.G84gtR;
                var10 = var11.bind(var12)(var10);
                var8.children = var10;
                var8 = var2.bind(var3)(var9, var8);
                var7[2] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 660, 33, 1297, 671, 8002, 4961, 8003, 8004, 3941, 1234, 2]);