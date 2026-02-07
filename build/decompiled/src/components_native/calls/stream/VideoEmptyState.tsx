// components_native/calls/stream/VideoEmptyState.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var1);
    var0 = 0;
    var4 = var6[var0];
    var1 = metroImportAll;
    var0 = undefined;
    var1 = var1.bind(var0)(var4);
    var1 = 1;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var8 = var1.StyleSheet;
    var1 = var1.View;
    var _closure1_slot3 = var1;
    var1 = 2;
    var1 = var6[var1];
    var1 = var11.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 3;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var12 = var1.Fonts;
    var1 = 4;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var4 = var1.jsx;
    var _closure1_slot5 = var4;
    var4 = var1.Fragment;
    var _closure1_slot6 = var4;
    var1 = var1.jsxs;
    var _closure1_slot7 = var1;
    var1 = {};
    var4 = 'NONE';
    var1.NONE = var4;
    var4 = 'STREAM_ENDED';
    var1.STREAM_ENDED = var4;
    var4 = 'STREAM_FAILED';
    var1.STREAM_FAILED = var4;
    var _closure1_slot8 = var1;
    var7 = var8.create;
    var4 = {};
    var9 = {
        'alignItems': 'center',
        'justifyContent': 'center',
        'backgroundColor': null,
        'padding': 8
    };
    var10 = 5;
    var13 = var6[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.unsafe_rawColors;
    var13 = var13.PRIMARY_700;
    var9.backgroundColor = var13;
    var4.container = var9;
    var9 = {
        'marginBottom': 8,
        'width': '100%',
        'resizeMode': 'contain'
    };
    var4.placeholderImage = var9;
    var9 = {
        'color': null,
        'fontFamily': null,
        'fontSize': 16,
        'lineHeight': 20,
        'textAlign': 'center'
    };
    var13 = var6[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.unsafe_rawColors;
    var13 = var13.WHITE;
    var9.color = var13;
    var12 = var12.PRIMARY_SEMIBOLD;
    var9.fontFamily = var12;
    var4.placeholderText = var9;
    var9 = {
        'marginTop': 16,
        'paddingHorizontal': 16,
        'alignSelf': 'center',
        'flexGrow': 0
    };
    var10 = var6[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.radii;
    var10 = var10.round;
    var9.borderRadius = var10;
    var4.button = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot9 = var4;
    var4 = 17;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'components_native/calls/stream/VideoEmptyState.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function arg0() {
        _fun64976: for (var _fun64976_ip = 0;;) switch (_fun64976_ip) {
            case 0:
                var7 = arg0;
                var2 = var7.type;
                var5 = var7.style;
                var11 = var7.avError;
                var14 = var7.removeSplashImage;
                var4 = var7.removeCloseButton;
                var0 = var7.stream;
                var _closure2_slot0 = var0;
                var3 = {
                    'type': 0,
                    'style': 0,
                    'avError': 0,
                    'removeSplashImage': 0,
                    'removeCloseButton': 0,
                    'stream': 0
                };
                var6 = null;
                var26 = var3;
                var25 = null;
                var1 = silentSetPrototypeOf(var26, var25);
                var26 = {};
                var25 = var7;
                var24 = var3;
                var8 = copyDataProperties(var26, var25, var24);
                var3 = undefined;
                var _closure2_slot1 = var3;
                var1 = _closure1_slot8;
                var1 = var1.STREAM_ENDED;
                if (!(var1 !== var2)) {
                    _fun64976_ip = 346;
                    continue _fun64976
                }
            case 106:
                var1 = _closure1_slot8;
                var1 = var1.STREAM_FAILED;
                if (!(var1 !== var2)) {
                    _fun64976_ip = 146;
                    continue _fun64976
                }
            case 120:
                var1 = _closure1_slot8;
                var1 = var1.NONE;
                var7 = undefined;
                if (!(var1 === var2)) {
                    _fun64976_ip = 543;
                    continue _fun64976
                }
            case 139:
                var7 = null;
                _fun64976_ip = 543;
                continue _fun64976;
            case 146:
                var13 = _closure1_slot7;
                var12 = _closure1_slot6;
                var1 = {};
                var16 = !var14;
                if (!var16) {
                    _fun64976_ip = 214;
                    continue _fun64976
                }
            case 162:
                var18 = _closure1_slot5;
                var17 = _closure1_slot0;
                var19 = _closure1_slot2;
                var15 = 9;
                var15 = var19[var15];
                var15 = var17.bind(var3)(var15);
                var17 = var15.StreamFailed;
                var15 = {};
                var19 = _closure1_slot9;
                var19 = var19.placeholderImage;
                var15.style = var19;
                var16 = var18.bind(var3)(var17, var15);
            case 214:
                var15 = new Array(2);
                var15[0] = var16;
                var18 = _closure1_slot5;
                var22 = _closure1_slot0;
                var23 = _closure1_slot2;
                var16 = 7;
                var16 = var23[var16];
                var16 = var22.bind(var3)(var16);
                var17 = var16.LegacyText;
                var16 = {};
                var19 = _closure1_slot9;
                var19 = var19.placeholderText;
                var16.style = var19;
                var19 = 8;
                var20 = var23[var19];
                var20 = var22.bind(var3)(var20);
                var21 = var20.intl;
                var20 = var21.string;
                var19 = var23[var19];
                var19 = var22.bind(var3)(var19);
                var19 = var19.t;
                var19 = var19.rSlOep;
                var19 = var20.bind(var21)(var19);
                var16.children = var19;
                var16 = var18.bind(var3)(var17, var16);
                var15[1] = var16;
                var1.children = var15;
                var7 = var13.bind(var3)(var12, var1);
                _fun64976_ip = 543;
                continue _fun64976;
            case 346:
                var13 = _closure1_slot7;
                var12 = _closure1_slot6;
                var1 = {};
                var15 = !var14;
                if (!var15) {
                    _fun64976_ip = 414;
                    continue _fun64976
                }
            case 362:
                var17 = _closure1_slot5;
                var16 = _closure1_slot0;
                var18 = _closure1_slot2;
                var14 = 6;
                var14 = var18[var14];
                var14 = var16.bind(var3)(var14);
                var16 = var14.StreamEnded;
                var14 = {};
                var18 = _closure1_slot9;
                var18 = var18.placeholderImage;
                var14.style = var18;
                var15 = var17.bind(var3)(var16, var14);
            case 414:
                var14 = new Array(2);
                var14[0] = var15;
                var17 = _closure1_slot5;
                var19 = _closure1_slot0;
                var22 = _closure1_slot2;
                var15 = 7;
                var15 = var22[var15];
                var15 = var19.bind(var3)(var15);
                var16 = var15.LegacyText;
                var15 = {};
                var18 = _closure1_slot9;
                var18 = var18.placeholderText;
                var15.style = var18;
                var18 = 8;
                var20 = var22[var18];
                var20 = var19.bind(var3)(var20);
                var21 = var20.intl;
                var20 = var21.formatToMarkdownString;
                var18 = var22[var18];
                var18 = var19.bind(var3)(var18);
                var18 = var18.t;
                var19 = var18["1Ww0Hi"];
                var18 = {};
                var18 = var20.bind(var21)(var19, var18);
                var15.children = var18;
                var15 = var17.bind(var3)(var16, var15);
                var14[1] = var15;
                var1.children = var14;
                var7 = var13.bind(var3)(var12, var1);
            case 543:
                if (!(var6 == var11)) {
                    _fun64976_ip = 623;
                    continue _fun64976
                }
            case 547:
                var1 = _closure1_slot8;
                var1 = var1.STREAM_FAILED;
                var16 = null;
                if (!(var2 === var1)) {
                    _fun64976_ip = 660;
                    continue _fun64976
                }
            case 563:
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var1 = 10;
                var2 = var14[var1];
                var12 = var13.bind(var3)(var2);
                var2 = var12.getErrorInfo;
                var1 = var14[var1];
                var1 = var13.bind(var3)(var1);
                var1 = var1.AVError;
                var1 = var1.STREAM_FAILED_TO_START;
                var1 = var2.bind(var12)(var1);
                var16 = var1.errorCode;
                _fun64976_ip = 660;
                continue _fun64976;
            case 623:
                var2 = _closure1_slot0;
                var12 = _closure1_slot2;
                var1 = 10;
                var1 = var12[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.getErrorInfo;
                var1 = var1.bind(var2)(var11);
                var16 = var1.errorCode;
            case 660:
                var11 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 11;
                var1 = var2[var1];
                var13 = var11.bind(var3)(var1);
                var12 = var13.useStateFromStores;
                var1 = _closure1_slot4;
                var11 = new Array(1);
                var11[0] = var1;
                var0 = var0.channelId;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var9
                    var2 = _closure1_slot4;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot0;
                    var0 = var0.channelId;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var12.bind(var13)(var11, var0, var1);
                _closure2_slot1 = var0;
                var1 = _closure1_slot1;
                var0 = 12;
                var0 = var2[var0];
                var1 = var1.bind(var3)(var0);
                var0 = function() { // Environment: var9
                    _fun64978: for (var _fun64978_ip = 0;;) switch (_fun64978_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var1 = null;
                            var1 = var1 != var2;
                            if (!var1) {
                                _fun64978_ip = 30;
                                continue _fun64978
                            }
                        case 16:
                            var3 = _closure2_slot1;
                            var2 = var3.isGuildStageVoice;
                            var1 = var2.bind(var3)();
                        case 30:
                            if (!var1) {
                                _fun64978_ip = 96;
                                continue _fun64978
                            }
                        case 33:
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var1 = 13;
                            var1 = var6[var1];
                            var4 = undefined;
                            var2 = var5.bind(var4)(var1);
                            var1 = var2.stopStream;
                            var3 = 14;
                            var3 = var6[var3];
                            var4 = var5.bind(var4)(var3);
                            var3 = var4.encodeStreamKey;
                            var0 = _closure2_slot0;
                            var0 = var3.bind(var4)(var0);
                            var0 = var1.bind(var2)(var0);
                        case 96:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var1.bind(var3)(var0);
                var2 = _closure1_slot7;
                var1 = _closure1_slot3;
                var0 = {};
                var26 = var0;
                var25 = var8;
                var8 = copyDataProperties(var26, var25);
                var8 = _closure1_slot9;
                var11 = var8.container;
                var8 = new Array(2);
                var8[0] = var11;
                var8[1] = var5;
                var5 = 'style';
                var0[var5] = var8;
                var5 = new Array(3);
                var5[0] = var7;
                var6 = var6 != var16;
                if (!var6) {
                    _fun64976_ip = 925;
                    continue _fun64976
                }
            case 817:
                var11 = _closure1_slot5;
                var13 = _closure1_slot0;
                var17 = _closure1_slot2;
                var7 = 15;
                var7 = var17[var7];
                var7 = var13.bind(var3)(var7);
                var8 = var7.Text;
                var7 = {
                    'variant': 'text-sm/semibold',
                    'color': 'text-muted',
                    'selectable': true
                };
                var12 = 8;
                var14 = var17[var12];
                var14 = var13.bind(var3)(var14);
                var15 = var14.intl;
                var14 = var15.formatToPlainString;
                var12 = var17[var12];
                var12 = var13.bind(var3)(var12);
                var12 = var12.t;
                var13 = var12.ejOT95;
                var12 = {};
                var12.errorCode = var16;
                var12 = var14.bind(var15)(var13, var12);
                var7.children = var12;
                var6 = var11.bind(var3)(var8, var7);
            case 925:
                var5[1] = var6;
                var4 = !var4;
                if (!var4) {
                    _fun64976_ip = 1075;
                    continue _fun64976
                }
            case 938:
                var8 = _closure1_slot5;
                var12 = _closure1_slot1;
                var14 = _closure1_slot2;
                var11 = 16;
                var6 = var14[var11];
                var7 = var12.bind(var3)(var6);
                var6 = {};
                var13 = _closure1_slot9;
                var13 = var13.button;
                var6.style = var13;
                var11 = var14[var11];
                var11 = var12.bind(var3)(var11);
                var11 = var11.Colors;
                var11 = var11.GREY;
                var6.color = var11;
                var13 = _closure1_slot0;
                var10 = 8;
                var11 = var14[var10];
                var11 = var13.bind(var3)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                var10 = var14[var10];
                var10 = var13.bind(var3)(var10);
                var10 = var10.t;
                var10 = var10["4EGMWL"];
                var10 = var11.bind(var12)(var10);
                var6.text = var10;
                var9 = function() {
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var0 = 13;
                    var1 = var5[var0];
                    var0 = undefined;
                    var3 = var4.bind(var0)(var1);
                    var2 = var3.stopStream;
                    var1 = 14;
                    var1 = var5[var1];
                    var5 = var4.bind(var0)(var1);
                    var4 = var5.encodeStreamKey;
                    var1 = _closure2_slot0;
                    var1 = var4.bind(var5)(var1);
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var6.onPress = var9;
                var4 = var8.bind(var3)(var7, var6);
            case 1075:
                var5[2] = var4;
                var4 = 'children';
                var0[var4] = var5;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var3;
    var2.VideoEmptyTypes = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1372, 660, 33, 671, 8078, 4878, 1234, 8081, 8076, 566, 4103, 8084, 3506, 3942, 4875, 2]);