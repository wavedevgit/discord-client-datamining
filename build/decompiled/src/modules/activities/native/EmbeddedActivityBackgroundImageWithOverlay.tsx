// modules/activities/native/EmbeddedActivityBackgroundImageWithOverlay.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var10;
    var _closure1_slot1 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var10.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.ImageBackground;
    var _closure1_slot4 = var6;
    var6 = var3.View;
    var _closure1_slot5 = var6;
    var3 = var3.StyleSheet;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'flex': 1,
        'opacity': 0.6
    };
    var9 = 5;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BLACK;
    var8.backgroundColor = var9;
    var3.overlay = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot8 = var3;
    var3 = ['embedded_background'];
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/activities/native/EmbeddedActivityBackgroundImageWithOverlay.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: EmbeddedActivityBackgroundImageWithOverlay, environment: var1
        _fun64705: for (var _fun64705_ip = 0;;) switch (_fun64705_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.application;
                var7 = var0.dimensionsStyle;
                var10 = var0.borderRadius;
                var11 = var0.resizeMode;
                var4 = undefined;
                if (!(var11 === var4)) {
                    _fun64705_ip = 36;
                    continue _fun64705
                }
            case 32:
                var11 = 'contain';
            case 36:
                var _closure2_slot0 = var4;
                var0 = _closure1_slot8;
                var8 = var0.bind(var4)();
                var3 = _closure1_slot3;
                var2 = var3.useState;
                var0 = false;
                var3 = var2.bind(var3)(var0);
                var2 = _closure1_slot2;
                var0 = 2;
                var3 = var2.bind(var4)(var3, var0);
                var0 = 0;
                var2 = var3[var0];
                var0 = 1;
                var0 = var3[var0];
                _closure2_slot0 = var0;
                var3 = _closure1_slot0;
                var9 = _closure1_slot1;
                var0 = 6;
                var0 = var9[var0];
                var3 = var3.bind(var4)(var0);
                var0 = {};
                var9 = null;
                var12 = var9 == var1;
                var13 = undefined;
                if (var12) {
                    _fun64705_ip = 135;
                    continue _fun64705
                }
            case 130:
                var13 = var1.id;
            case 135:
                var14 = var9 != var13;
                var1 = '';
                var12 = var1;
                if (!var14) {
                    _fun64705_ip = 152;
                    continue _fun64705
                }
            case 149:
                var12 = var13;
            case 152:
                var0.applicationId = var12;
                var12 = _closure1_slot9;
                var0.names = var12;
                var12 = 1024;
                var0.size = var12;
                var0 = var3.bind(var4)(var0);
                var13 = var0.url;
                var0 = null;
                if (var2) {
                    _fun64705_ip = 342;
                    continue _fun64705
                }
            case 192:
                var2 = var9 == var13;
                var0 = null;
                if (var2) {
                    _fun64705_ip = 342;
                    continue _fun64705
                }
            case 204:
                var0 = null;
                if (!(var1 !== var13)) {
                    _fun64705_ip = 342;
                    continue _fun64705
                }
            case 213:
                var3 = _closure1_slot7;
                var2 = _closure1_slot4;
                var1 = {};
                var1.resizeMode = var11;
                var11 = {};
                var14 = var9 != var13;
                var12 = undefined;
                if (!var14) {
                    _fun64705_ip = 241;
                    continue _fun64705
                }
            case 238:
                var12 = var13;
            case 241:
                var11.uri = var12;
                var1.source = var11;
                if (!(var9 == var7)) {
                    _fun64705_ip = 263;
                    continue _fun64705
                }
            case 253:
                var9 = _closure1_slot6;
                var7 = var9.absoluteFillObject;
            case 263:
                var1.style = var7;
                var7 = {};
                var7.borderRadius = var10;
                var1.imageStyle = var7;
                var6 = function() { // Original name: onError, environment: var6
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var0 = true;
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var1.onError = var6;
                var7 = _closure1_slot7;
                var6 = _closure1_slot5;
                var5 = {};
                var9 = var8.overlay;
                var8 = new Array(2);
                var8[0] = var9;
                var9 = {};
                var9.borderRadius = var10;
                var8[1] = var9;
                var5.style = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 342:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 33, 1297, 671, 8030, 2]);