// modules/video_calls/native/components/ScreenshareParticipant.tsx
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
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot4 = var6;
    var3 = var3.Image;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot6 = var6;
    var3 = var3.jsxs;
    var _closure1_slot7 = var3;
    var3 = 3;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var6 = {};
    var3 = {
        'alignItems': 'center',
        'justifyContent': 'center',
        'flex': 1
    };
    var10 = 4;
    var9 = var5[var10];
    var9 = var11.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_BASE_LOW;
    var3.backgroundColor = var9;
    var6.container = var3;
    var9 = {};
    var3 = 12;
    var9.marginBottom = var3;
    var6.image = var9;
    var9 = {
        'textAlign': 'center',
        'marginBottom': 8
    };
    var6.title = var9;
    var9 = {
        'lineHeight': 18,
        'textAlign': 'center',
        'marginBottom': 16
    };
    var6.description = var9;
    var9 = {
        'paddingHorizontal': 16,
        'alignSelf': 'center',
        'flexGrow': 0
    };
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.radii;
    var10 = var10.round;
    var9.borderRadius = var10;
    var6.button = var9;
    var6 = var7.bind(var8)(var6);
    var _closure1_slot8 = var6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/video_calls/native/components/ScreenshareParticipant.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var2 = arg0;
        var5 = var2.participant;
        var _closure2_slot0 = var5;
        var1 = var2.onSingleTap;
        var _closure2_slot1 = var1;
        var6 = var2.onDoubleTap;
        var _closure2_slot2 = var6;
        var9 = var2.containerStyle;
        var3 = _closure1_slot3;
        var4 = var3.useCallback;
        var2 = new Array(2);
        var2[0] = var1;
        var2[1] = var5;
        var1 = function() { // Environment: var0
            _fun68904: for (var _fun68904_ip = 0;;) switch (_fun68904_ip) {
                case 0:
                    var2 = _closure2_slot1;
                    var0 = null;
                    var2 = var0 == var2;
                    var3 = undefined;
                    var0 = undefined;
                    if (var2) {
                        _fun68904_ip = 33;
                        continue _fun68904
                    }
                case 20:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var0 = var2.bind(var3)(var1);
                case 33:
                    return var0;
            }
        };
        var4 = var4.bind(var3)(var1, var2);
        var2 = var3.useCallback;
        var1 = new Array(2);
        var1[0] = var6;
        var1[1] = var5;
        var0 = function() { // Environment: var0
            _fun68905: for (var _fun68905_ip = 0;;) switch (_fun68905_ip) {
                case 0:
                    var2 = _closure2_slot2;
                    var0 = null;
                    var2 = var0 == var2;
                    var3 = undefined;
                    var0 = undefined;
                    if (var2) {
                        _fun68905_ip = 33;
                        continue _fun68905
                    }
                case 20:
                    var2 = _closure2_slot2;
                    var1 = _closure2_slot0;
                    var0 = var2.bind(var3)(var1);
                case 33:
                    return var0;
            }
        };
        var2 = var2.bind(var3)(var0, var1);
        var14 = _closure1_slot1;
        var12 = _closure1_slot2;
        var0 = 5;
        var0 = var12[var0];
        var3 = undefined;
        var1 = var14.bind(var3)(var0);
        var0 = {};
        var0.onSingleTapStart = var4;
        var0.onDoubleTapStart = var2;
        var4 = var1.bind(var3)(var0);
        var0 = _closure1_slot8;
        var15 = var0.bind(var3)();
        var2 = _closure1_slot6;
        var11 = _closure1_slot0;
        var0 = 6;
        var0 = var12[var0];
        var0 = var11.bind(var3)(var0);
        var1 = var0.GestureDetector;
        var0 = {};
        var0.gesture = var4;
        var6 = _closure1_slot7;
        var5 = _closure1_slot4;
        var4 = {};
        var10 = var15.container;
        var8 = new Array(2);
        var8[0] = var10;
        var8[1] = var9;
        var4.style = var8;
        var8 = _closure1_slot5;
        var7 = {};
        var9 = 7;
        var9 = var12[var9];
        var9 = var14.bind(var3)(var9);
        var7.source = var9;
        var9 = var15.image;
        var7.style = var9;
        var8 = var2.bind(var3)(var8, var7);
        var7 = new Array(4);
        var7[0] = var8;
        var8 = 8;
        var9 = var12[var8];
        var9 = var11.bind(var3)(var9);
        var13 = var9.Text;
        var9 = {
            'style': null,
            'accessibilityRole': 'header',
            'variant': 'heading-lg/extrabold',
            'color': 'mobile-text-heading-primary'
        };
        var10 = var15.title;
        var9.style = var10;
        var10 = 9;
        var16 = var12[var10];
        var16 = var11.bind(var3)(var16);
        var18 = var16.intl;
        var17 = var18.string;
        var16 = var12[var10];
        var16 = var11.bind(var3)(var16);
        var16 = var16.t;
        var16 = var16.gMOwov;
        var16 = var17.bind(var18)(var16);
        var9.children = var16;
        var9 = var2.bind(var3)(var13, var9);
        var7[1] = var9;
        var8 = var12[var8];
        var8 = var11.bind(var3)(var8);
        var9 = var8.Text;
        var8 = {
            'style': null,
            'variant': 'text-sm/medium',
            'color': 'interactive-text-default'
        };
        var13 = var15.description;
        var8.style = var13;
        var13 = var12[var10];
        var13 = var11.bind(var3)(var13);
        var17 = var13.intl;
        var16 = var17.string;
        var13 = var12[var10];
        var13 = var11.bind(var3)(var13);
        var13 = var13.t;
        var13 = var13.dKeLGt;
        var13 = var16.bind(var17)(var13);
        var8.children = var13;
        var8 = var2.bind(var3)(var9, var8);
        var7[2] = var8;
        var13 = 10;
        var8 = var12[var13];
        var9 = var14.bind(var3)(var8);
        var8 = {};
        var15 = var15.button;
        var8.style = var15;
        var13 = var12[var13];
        var13 = var14.bind(var3)(var13);
        var13 = var13.Colors;
        var13 = var13.PRIMARY;
        var8.color = var13;
        var13 = var12[var10];
        var13 = var11.bind(var3)(var13);
        var14 = var13.intl;
        var13 = var14.string;
        var10 = var12[var10];
        var10 = var11.bind(var3)(var10);
        var10 = var10.t;
        var10 = var10.CpkXwZ;
        var10 = var13.bind(var14)(var10);
        var8.text = var10;
        var10 = 11;
        var10 = var12[var10];
        var10 = var11.bind(var3)(var10);
        var10 = var10.stopScreenshare;
        var8.onPress = var10;
        var8 = var2.bind(var3)(var9, var8);
        var7[3] = var8;
        var4.children = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 8026, 4964, 8028, 3943, 1234, 4876, 8483, 2]);