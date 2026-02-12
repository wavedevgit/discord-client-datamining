// modules/voice_panel/native/controls/activities/ActivityShelfItemBackground.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var5;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Image;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var8 = var3.jsx;
    var _closure1_slot5 = var8;
    var3 = 4;
    var3 = var5[var3];
    var10 = var4.bind(var0)(var3);
    var9 = var10.createStyles;
    var3 = function(arg0) { // Environment: var1
        var0 = {};
        var1 = {
            'alignItems': 'center',
            'justifyContent': 'center',
            'backgroundColor': 'black'
        };
        var0.previewImage = var1;
        var1 = {};
        var2 = '100%';
        var1.width = var2;
        var2 = arg0;
        var1.aspectRatio = var2;
        var0.activityImage = var1;
        return var0;
    };
    var3 = var9.bind(var10)(var3);
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var7 = var7.bind(var0)(var3);
    var3 = {};
    var3 = var8.bind(var0)(var7, var3);
    var _closure1_slot7 = var3;
    var3 = var6.memo;
    var1 = function arg0() {
        _fun111355: for (var _fun111355_ip = 0;;) switch (_fun111355_ip) {
            case 0:
                var0 = arg0;
                var11 = var0.imageBackground;
                var1 = var0.aspectRatio;
                var9 = var0.accessibilityLabel;
                var0 = _closure1_slot6;
                var4 = undefined;
                var6 = var0.bind(var4)(var1);
                var2 = _closure1_slot3;
                var1 = var2.useState;
                var0 = false;
                var2 = var1.bind(var2)(var0);
                var1 = _closure1_slot2;
                var0 = 2;
                var2 = var1.bind(var4)(var2, var0);
                var0 = 0;
                var0 = var2[var0];
                var1 = 1;
                var1 = var2[var1];
                var _closure2_slot0 = var1;
                var2 = var11.state;
                var1 = 'not-found';
                if (!(var1 !== var2)) {
                    _fun111355_ip = 303;
                    continue _fun111355
                }
            case 100:
                if (var0) {
                    _fun111355_ip = 303;
                    continue _fun111355
                }
            case 106:
                var1 = var11.state;
                var0 = 'loading';
                if (!(var0 !== var1)) {
                    _fun111355_ip = 259;
                    continue _fun111355
                }
            case 122:
                var0 = var11.url;
                var8 = null;
                if (!(var8 != var0)) {
                    _fun111355_ip = 259;
                    continue _fun111355
                }
            case 136:
                var2 = _closure1_slot5;
                var1 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 6;
                var0 = var3[var0];
                var1 = var1.bind(var4)(var0);
                var0 = {};
                var3 = var6.previewImage;
                var0.style = var3;
                var7 = _closure1_slot4;
                var3 = {};
                var10 = function() {
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var0 = true;
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var3.onError = var10;
                var10 = {};
                var11 = var11.url;
                var10.uri = var11;
                var3.source = var10;
                var10 = var6.activityImage;
                var3.style = var10;
                var10 = 'image';
                var3.accessibilityRole = var10;
                var10 = var8 != var9;
                var8 = '';
                if (!var10) {
                    _fun111355_ip = 237;
                    continue _fun111355
                }
            case 234:
                var8 = var9;
            case 237:
                var3.accessibilityLabel = var8;
                var3 = var2.bind(var4)(var7, var3);
                var0.children = var3;
                var0 = var2.bind(var4)(var1, var0);
                _fun111355_ip = 301;
                continue _fun111355;
            case 259:
                var3 = _closure1_slot5;
                var2 = _closure1_slot0;
                var7 = _closure1_slot1;
                var1 = 6;
                var1 = var7[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var7 = var6.previewImage;
                var1.style = var7;
                var0 = var3.bind(var4)(var2, var1);
            case 301:
                _fun111355_ip = 353;
                continue _fun111355;
            case 303:
                var3 = _closure1_slot5;
                var2 = _closure1_slot0;
                var7 = _closure1_slot1;
                var1 = 6;
                var1 = var7[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var6 = var6.previewImage;
                var1.style = var6;
                var5 = _closure1_slot7;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 353:
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/voice_panel/native/controls/activities/ActivityShelfItemBackground.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 33, 1297, 13948, 6550, 2]);