// modules/video_calls/native/components/UserVideoFailed.tsx
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.VideoToggleState;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot5 = var6;
    var6 = var3.Fragment;
    var _closure1_slot6 = var6;
    var3 = var3.jsxs;
    var _closure1_slot7 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'alignItems': 'center',
        'justifyContent': 'center',
        'backgroundColor': null,
        'padding': 8
    };
    var9 = 'center';
    var10 = 4;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.unsafe_rawColors;
    var10 = var10.PRIMARY_700;
    var8.backgroundColor = var10;
    var3.container = var8;
    var8 = {
        'marginBottom': 8,
        'width': '100%',
        'resizeMode': 'contain'
    };
    var3.placeholderImage = var8;
    var8 = {};
    var8.textAlign = var9;
    var3.placeholderText = var8;
    var8 = {
        'marginTop': 16,
        'alignSelf': 'center'
    };
    var3.button = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot8 = var3;
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/video_calls/native/components/UserVideoFailed.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun111292: for (var _fun111292_ip = 0;;) switch (_fun111292_ip) {
            case 0:
                var3 = arg0;
                var0 = var3.userId;
                var _closure2_slot0 = var0;
                var5 = var3.style;
                var2 = var3.avError;
                var8 = var3.removeRetryButton;
                var4 = var3.removeSplashImage;
                var1 = {
                    'userId': 0,
                    'style': 0,
                    'avError': 0,
                    'removeRetryButton': 0,
                    'removeSplashImage': 0
                };
                var23 = null;
                var24 = var1;
                var0 = silentSetPrototypeOf(var24, var23);
                var24 = {};
                var23 = var3;
                var22 = var1;
                var23 = copyDataProperties(var24, var23, var22);
                var0 = _closure1_slot8;
                var3 = undefined;
                var10 = var0.bind(var3)();
                var1 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 5;
                var0 = var7[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.getErrorInfo;
                var0 = var0.bind(var1)(var2);
                var16 = var0.errorCode;
                var2 = _closure1_slot7;
                var1 = _closure1_slot3;
                var0 = {};
                var24 = var0;
                var6 = copyDataProperties(var24, var23);
                var7 = var10.container;
                var6 = new Array(2);
                var6[0] = var7;
                var6[1] = var5;
                var5 = 'style';
                var0[var5] = var6;
                var6 = _closure1_slot6;
                var5 = {};
                var4 = !var4;
                if (!var4) {
                    _fun111292_ip = 225;
                    continue _fun111292
                }
            case 177:
                var13 = _closure1_slot5;
                var11 = _closure1_slot0;
                var14 = _closure1_slot2;
                var7 = 6;
                var7 = var14[var7];
                var7 = var11.bind(var3)(var7);
                var11 = var7.StreamFailed;
                var7 = {};
                var14 = var10.placeholderImage;
                var7.style = var14;
                var4 = var13.bind(var3)(var11, var7);
            case 225:
                var14 = new Array(2);
                var14[0] = var4;
                var7 = _closure1_slot5;
                var13 = _closure1_slot0;
                var11 = _closure1_slot2;
                var4 = 7;
                var15 = var11[var4];
                var15 = var13.bind(var3)(var15);
                var18 = var15.Text;
                var15 = {
                    'variant': 'text-md/semibold',
                    'color': 'text-strong'
                };
                var17 = 8;
                var19 = var11[var17];
                var19 = var13.bind(var3)(var19);
                var21 = var19.intl;
                var20 = var21.string;
                var19 = var11[var17];
                var19 = var13.bind(var3)(var19);
                var19 = var19.t;
                var19 = var19["z+mxvo"];
                var19 = var20.bind(var21)(var19);
                var15.children = var19;
                var15 = var7.bind(var3)(var18, var15);
                var14[1] = var15;
                var5.children = var14;
                var6 = var2.bind(var3)(var6, var5);
                var5 = new Array(3);
                var5[0] = var6;
                var4 = var11[var4];
                var4 = var13.bind(var3)(var4);
                var6 = var4.Text;
                var4 = {
                    'variant': 'text-sm/semibold',
                    'color': 'text-muted',
                    'selectable': true
                };
                var14 = var11[var17];
                var14 = var13.bind(var3)(var14);
                var15 = var14.intl;
                var14 = var15.formatToPlainString;
                var11 = var11[var17];
                var11 = var13.bind(var3)(var11);
                var11 = var11.t;
                var13 = var11.ejOT95;
                var11 = {};
                var11.errorCode = var16;
                var11 = var14.bind(var15)(var13, var11);
                var4.children = var11;
                var4 = var7.bind(var3)(var6, var4);
                var5[1] = var4;
                var6 = _closure1_slot3;
                var4 = {};
                var10 = var10.button;
                var4.style = var10;
                var8 = !var8;
                if (!var8) {
                    _fun111292_ip = 580;
                    continue _fun111292
                }
            case 473:
                var11 = _closure1_slot5;
                var16 = _closure1_slot0;
                var13 = _closure1_slot2;
                var9 = 9;
                var9 = var13[var9];
                var9 = var16.bind(var3)(var9);
                var10 = var9.Button;
                var9 = {};
                var14 = 'secondary';
                var9.variant = var14;
                var14 = var13[var17];
                var14 = var16.bind(var3)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var13 = var13[var17];
                var13 = var16.bind(var3)(var13);
                var13 = var13.t;
                var13 = var13["hxmQ/e"];
                var13 = var14.bind(var15)(var13);
                var9.text = var13;
                var12 = function() {
                    var2 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var0 = 10;
                    var1 = var7[var0];
                    var0 = undefined;
                    var8 = var2.bind(var0)(var1);
                    var5 = var8.clearVideoStreamTimeout;
                    var1 = 11;
                    var4 = var7[var1];
                    var4 = var2.bind(var0)(var4);
                    var4 = var4.MediaEngineContextTypes;
                    var4 = var4.DEFAULT;
                    var6 = _closure2_slot0;
                    var4 = var5.bind(var8)(var4, var6);
                    var5 = _closure1_slot1;
                    var4 = 12;
                    var4 = var7[var4];
                    var5 = var5.bind(var0)(var4);
                    var4 = var5.setDisableLocalVideo;
                    var3 = _closure1_slot4;
                    var11 = var3.DISABLED;
                    var1 = var7[var1];
                    var1 = var2.bind(var0)(var1);
                    var1 = var1.MediaEngineContextTypes;
                    var10 = var1.DEFAULT;
                    var9 = false;
                    var13 = var5;
                    var12 = var6;
                    var1 = var13[var4](var12, var11, var10, var9, var8);
                    var1 = global;
                    var3 = var1.setTimeout;
                    var2 = function() { // Environment: var1
                        var3 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var0 = 12;
                        var2 = var7[var0];
                        var0 = undefined;
                        var6 = var3.bind(var0)(var2);
                        var5 = var6.setDisableLocalVideo;
                        var4 = _closure2_slot0;
                        var2 = _closure1_slot4;
                        var10 = var2.MANUAL_ENABLED;
                        var2 = _closure1_slot0;
                        var1 = 11;
                        var1 = var7[var1];
                        var1 = var2.bind(var0)(var1);
                        var1 = var1.MediaEngineContextTypes;
                        var9 = var1.DEFAULT;
                        var8 = false;
                        var12 = var6;
                        var11 = var4;
                        var1 = var12[var5](var11, var10, var9, var8, var7);
                        return var0;
                    };
                    var1 = 1000;
                    var1 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var9.onPress = var12;
                var8 = var11.bind(var3)(var10, var9);
            case 580:
                var4.children = var8;
                var4 = var7.bind(var3)(var6, var4);
                var5[2] = var4;
                var4 = 'children';
                var0[var4] = var5;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 660, 33, 1297, 671, 7967, 7972, 3900, 1234, 4043, 7997, 3592, 8169, 2]);