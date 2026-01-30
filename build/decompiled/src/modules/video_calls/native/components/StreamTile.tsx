// modules/video_calls/native/components/StreamTile.tsx
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
    var8 = var1.bind(var0)(var4);
    var _closure1_slot3 = var8;
    var14 = 1;
    var1 = var6[var14];
    var1 = var5.bind(var0)(var1);
    var4 = var1.View;
    var _closure1_slot4 = var4;
    var12 = var1.StyleSheet;
    var _closure1_slot5 = var12;
    var1 = 2;
    var1 = var6[var1];
    var1 = var11.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 3;
    var1 = var6[var1];
    var1 = var11.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 4;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.ApplicationStreamStates;
    var _closure1_slot8 = var1;
    var1 = 5;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.MediaEngineContextTypes;
    var _closure1_slot9 = var1;
    var1 = 6;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var4 = var1.jsx;
    var _closure1_slot10 = var4;
    var4 = var1.jsxs;
    var _closure1_slot11 = var4;
    var1 = var1.Fragment;
    var _closure1_slot12 = var1;
    var1 = 7;
    var1 = var6[var1];
    var7 = var5.bind(var0)(var1);
    var4 = var7.createStyles;
    var1 = {};
    var9 = {
        'flex': 1,
        'alignItems': 'center',
        'justifyContent': 'center',
        'overflow': 'hidden',
        'width': '100%'
    };
    var13 = 'center';
    var10 = 8;
    var15 = var6[var10];
    var15 = var11.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.BLACK;
    var9.backgroundColor = var15;
    var1.container = var9;
    var9 = {};
    var18 = var12.absoluteFillObject;
    var19 = var9;
    var12 = copyDataProperties(var19, var18);
    var12 = 'flex';
    var9[var12] = var14;
    var12 = 'padding';
    var9[var12] = var10;
    var12 = 'alignItems';
    var9[var12] = var13;
    var12 = 'justifyContent';
    var9[var12] = var13;
    var12 = 9;
    var13 = var6[var12];
    var16 = var5.bind(var0)(var13);
    var15 = var16.hexWithOpacity;
    var13 = var6[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.unsafe_rawColors;
    var14 = var13.BLACK;
    var13 = 0.7;
    var14 = var15.bind(var16)(var14, var13);
    var13 = 'backgroundColor';
    var9[var13] = var14;
    var1.screenMessageContainer = var9;
    var9 = {};
    var13 = 18;
    var9.lineHeight = var13;
    var1.screenMessageText = var9;
    var9 = {
        'color': null,
        'fontSize': 14,
        'lineHeight': 18,
        'textAlign': 'center'
    };
    var13 = var6[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.unsafe_rawColors;
    var13 = var13.PRIMARY_300;
    var9.color = var13;
    var1.screenMessageSubtext = var9;
    var9 = {
        'position': 'absolute',
        'bottom': 8,
        'right': 8,
        'backgroundColor': null,
        'borderRadius': null,
        'width': 24,
        'height': 24,
        'justifyContent': 'center',
        'alignItems': 'center'
    };
    var12 = var6[var12];
    var15 = var5.bind(var0)(var12);
    var14 = var15.hexWithOpacity;
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.unsafe_rawColors;
    var13 = var12.PRIMARY_700;
    var12 = 0.5;
    var12 = var14.bind(var15)(var13, var12);
    var9.backgroundColor = var12;
    var10 = var6[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.radii;
    var10 = var10.md;
    var9.borderRadius = var10;
    var1.statusWrapper = var9;
    var9 = {
        'position': 'absolute',
        'right': 8,
        'top': 8
    };
    var1.liveTag = var9;
    var1 = var4.bind(var7)(var1);
    var _closure1_slot13 = var1;
    var1 = function(arg0) { // Original name: StreamTextOverlay, environment: var3
        _fun64244: for (var _fun64244_ip = 0;;) switch (_fun64244_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.title;
                var9 = var0.subtext;
                var0 = _closure1_slot13;
                var3 = undefined;
                var10 = var0.bind(var3)();
                var2 = _closure1_slot11;
                var1 = _closure1_slot4;
                var0 = {};
                var4 = var10.screenMessageContainer;
                var0.style = var4;
                var7 = _closure1_slot10;
                var5 = _closure1_slot0;
                var11 = _closure1_slot2;
                var4 = 10;
                var4 = var11[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.Text;
                var4 = {
                    'style': null,
                    'variant': 'text-md/semibold',
                    'color': 'always-white'
                };
                var11 = var10.screenMessageText;
                var4.style = var11;
                var4.children = var8;
                var5 = var7.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var5 = null;
                var7 = var5 != var9;
                if (!var7) {
                    _fun64244_ip = 181;
                    continue _fun64244
                }
            case 129:
                var8 = _closure1_slot10;
                var7 = _closure1_slot0;
                var11 = _closure1_slot2;
                var6 = 11;
                var6 = var11[var6];
                var6 = var7.bind(var3)(var6);
                var7 = var6.LegacyText;
                var6 = {};
                var10 = var10.screenMessageSubtext;
                var6.style = var10;
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 181:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot14 = var1;
    var7 = var8.memo;
    var4 = function(arg0) { // Environment: var3
        _fun64245: for (var _fun64245_ip = 0;;) switch (_fun64245_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.participant;
                var _closure2_slot0 = var0;
                var18 = var1.streamId;
                var13 = var1.user;
                var19 = var1.resizeMode;
                var17 = var1.gestureEnabled;
                var8 = var1.removeEmptyStateButton;
                var6 = var1.removeEmptyStateImage;
                var1 = _closure1_slot13;
                var3 = undefined;
                var1 = var1.bind(var3)();
                var _closure2_slot1 = var1;
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 12;
                var1 = var5[var1];
                var9 = var2.bind(var3)(var1);
                var7 = var9.useStateFromStores;
                var1 = _closure1_slot6;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var16
                    var2 = _closure1_slot6;
                    var1 = var2.getActiveStreamForStreamKey;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var9 = var7.bind(var9)(var2, var1);
                var2 = _closure1_slot1;
                var1 = 13;
                var1 = var5[var1];
                var2 = var2.bind(var3)(var1);
                var1 = _closure1_slot9;
                var1 = var1.STREAM;
                var0 = var0.user;
                var0 = var0.id;
                var5 = var2.bind(var3)(var1, var0);
                var0 = null;
                if (!(var0 == var9)) {
                    _fun64245_ip = 164;
                    continue _fun64245
                }
            case 162:
                return var0;
            case 164:
                var2 = var9.state;
                var1 = _closure1_slot8;
                var1 = var1.FAILED;
                if (!(var1 !== var2)) {
                    _fun64245_ip = 900;
                    continue _fun64245
                }
            case 186:
                var1 = _closure1_slot8;
                var1 = var1.ENDED;
                if (!(var1 !== var2)) {
                    _fun64245_ip = 808;
                    continue _fun64245
                }
            case 203:
                var1 = _closure1_slot8;
                var1 = var1.RECONNECTING;
                if (!(var1 !== var2)) {
                    _fun64245_ip = 411;
                    continue _fun64245
                }
            case 220:
                var1 = _closure1_slot8;
                var1 = var1.PAUSED;
                var10 = null;
                if (!(var1 === var2)) {
                    _fun64245_ip = 486;
                    continue _fun64245
                }
            case 239:
                var7 = _closure1_slot10;
                var2 = _closure1_slot14;
                var1 = {};
                var12 = _closure1_slot0;
                var22 = _closure1_slot2;
                var11 = 15;
                var14 = var22[var11];
                var14 = var12.bind(var3)(var14);
                var20 = var14.intl;
                var15 = var20.string;
                var14 = var22[var11];
                var14 = var12.bind(var3)(var14);
                var14 = var14.t;
                var14 = var14["5q17w5"];
                var14 = var15.bind(var20)(var14);
                var1.title = var14;
                var14 = var22[var11];
                var14 = var12.bind(var3)(var14);
                var15 = var14.intl;
                var14 = var15.formatToPlainString;
                var11 = var22[var11];
                var11 = var12.bind(var3)(var11);
                var11 = var11.t;
                var12 = var11.meVVlb;
                var11 = {};
                var21 = _closure1_slot1;
                var20 = 16;
                var20 = var22[var20];
                var23 = var21.bind(var3)(var20);
                var22 = var23.getName;
                var21 = var9.guildId;
                var20 = var9.channelId;
                var20 = var22.bind(var23)(var21, var20, var13);
                var11.username = var20;
                var11 = var14.bind(var15)(var12, var11);
                var1.subtext = var11;
                var10 = var7.bind(var3)(var2, var1);
                _fun64245_ip = 486;
                continue _fun64245;
            case 411:
                var7 = _closure1_slot10;
                var2 = _closure1_slot14;
                var1 = {};
                var15 = _closure1_slot0;
                var20 = _closure1_slot2;
                var11 = 15;
                var12 = var20[var11];
                var12 = var15.bind(var3)(var12);
                var14 = var12.intl;
                var12 = var14.string;
                var11 = var20[var11];
                var11 = var15.bind(var3)(var11);
                var11 = var11.t;
                var11 = var11["pdFFK+"];
                var11 = var12.bind(var14)(var11);
                var1.title = var11;
                var10 = var7.bind(var3)(var2, var1);
            case 486:
                if (!(var0 == var5)) {
                    _fun64245_ip = 711;
                    continue _fun64245
                }
            case 493:
                var15 = var9.ownerId;
                var1 = _closure1_slot7;
                var0 = var1.getId;
                var14 = var0.bind(var1)();
                var2 = _closure1_slot11;
                var1 = _closure1_slot12;
                var0 = {};
                var12 = _closure1_slot10;
                var11 = _closure1_slot1;
                var20 = _closure1_slot2;
                var7 = 17;
                var7 = var20[var7];
                var11 = var11.bind(var3)(var7);
                var7 = {};
                var7.resizeMode = var19;
                var7.streamId = var18;
                var7.gestureEnabled = var17;
                var16 = function() { // Original name: renderTag, environment: var16
                    var3 = _closure1_slot10;
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 18;
                    var0 = var2[var0];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = {};
                    var5 = _closure2_slot1;
                    var5 = var5.liveTag;
                    var0.style = var5;
                    var4 = _closure2_slot0;
                    var0.participant = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var7.renderTag = var16;
                if (!(var15 !== var14)) {
                    _fun64245_ip = 611;
                    continue _fun64245
                }
            case 577:
                var15 = _closure1_slot0;
                var16 = _closure1_slot2;
                var14 = 19;
                var14 = var16[var14];
                var14 = var15.bind(var3)(var14);
                var14 = var14.VideoSpinnerContext;
                var14 = var14.REMOTE_STREAM;
                _fun64245_ip = 643;
                continue _fun64245;
            case 611:
                var16 = _closure1_slot0;
                var17 = _closure1_slot2;
                var15 = 19;
                var15 = var17[var15];
                var15 = var16.bind(var3)(var15);
                var15 = var15.VideoSpinnerContext;
                var14 = var15.SELF_STREAM;
            case 643:
                var7.videoSpinnerContext = var14;
                var13 = var13.id;
                var7.userId = var13;
                var14 = var9.state;
                var13 = _closure1_slot8;
                var13 = var13.PAUSED;
                var13 = var14 === var13;
                var7.paused = var13;
                var11 = var12.bind(var3)(var11, var7);
                var7 = new Array(2);
                var7[0] = var11;
                var7[1] = var10;
                var0.children = var7;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            case 711:
                var2 = _closure1_slot10;
                var1 = _closure1_slot1;
                var11 = _closure1_slot2;
                var7 = 14;
                var0 = var11[var7];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var0.stream = var9;
                var0.removeCloseButton = var8;
                var0.removeSplashImage = var6;
                var10 = _closure1_slot0;
                var7 = var11[var7];
                var7 = var10.bind(var3)(var7);
                var7 = var7.VideoEmptyTypes;
                var7 = var7.STREAM_FAILED;
                var0.type = var7;
                var7 = _closure1_slot5;
                var7 = var7.absoluteFill;
                var0.style = var7;
                var0.avError = var5;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            case 808:
                var2 = _closure1_slot10;
                var1 = _closure1_slot1;
                var10 = _closure1_slot2;
                var5 = 14;
                var0 = var10[var5];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var0.stream = var9;
                var0.removeCloseButton = var8;
                var0.removeSplashImage = var6;
                var7 = _closure1_slot0;
                var5 = var10[var5];
                var5 = var7.bind(var3)(var5);
                var5 = var5.VideoEmptyTypes;
                var5 = var5.STREAM_ENDED;
                var0.type = var5;
                var5 = _closure1_slot5;
                var5 = var5.absoluteFill;
                var0.style = var5;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            case 900:
                var2 = _closure1_slot10;
                var1 = _closure1_slot1;
                var7 = _closure1_slot2;
                var5 = 14;
                var0 = var7[var5];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var0.stream = var9;
                var0.removeCloseButton = var8;
                var0.removeSplashImage = var6;
                var6 = _closure1_slot0;
                var5 = var7[var5];
                var5 = var6.bind(var3)(var5);
                var5 = var5.VideoEmptyTypes;
                var5 = var5.STREAM_FAILED;
                var0.type = var5;
                var4 = _closure1_slot5;
                var4 = var4.absoluteFill;
                var0.style = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot15 = var4;
    var7 = var8.memo;
    var4 = function(arg0) { // Environment: var3
        var0 = arg0;
        var7 = var0.onFullScreen;
        var6 = var0.style;
        var0 = _closure1_slot13;
        var3 = undefined;
        var5 = var0.bind(var3)();
        var2 = _closure1_slot10;
        var1 = _closure1_slot0;
        var8 = _closure1_slot2;
        var0 = 22;
        var0 = var8[var0];
        var0 = var1.bind(var3)(var0);
        var1 = var0.PressableOpacity;
        var0 = {};
        var9 = 'button';
        var0.accessibilityRole = var9;
        var0.onPress = var7;
        var7 = var5.statusWrapper;
        var5 = new Array(2);
        var5[0] = var7;
        var5[1] = var6;
        var0.style = var5;
        var5 = {
            'top': 4,
            'left': 4,
            'right': 4,
            'bottom': 4
        };
        var0.hitSlop = var5;
        var7 = _closure1_slot1;
        var6 = 23;
        var4 = var8[var6];
        var5 = var7.bind(var3)(var4);
        var4 = {};
        var9 = 24;
        var9 = var8[var9];
        var9 = var7.bind(var3)(var9);
        var4.source = var9;
        var6 = var8[var6];
        var6 = var7.bind(var3)(var6);
        var6 = var6.Sizes;
        var6 = var6.SMALL;
        var4.size = var6;
        var6 = 8;
        var6 = var8[var6];
        var6 = var7.bind(var3)(var6);
        var6 = var6.unsafe_rawColors;
        var6 = var6.WHITE;
        var4.color = var6;
        var4 = var2.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot16 = var4;
    var4 = 25;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/video_calls/native/components/StreamTile.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function(arg0) { // Original name: _default, environment: var3
        _fun64249: for (var _fun64249_ip = 0;;) switch (_fun64249_ip) {
            case 0:
                var2 = arg0;
                var17 = var2.participant;
                var _closure2_slot0 = var17;
                var1 = var2.onSingleTap;
                var _closure2_slot1 = var1;
                var6 = var2.onDoubleTap;
                var _closure2_slot2 = var6;
                var15 = var2.resizeMode;
                var3 = undefined;
                if (!(var15 === var3)) {
                    _fun64249_ip = 81;
                    continue _fun64249
                }
            case 46:
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var4 = 17;
                var4 = var7[var4];
                var4 = var5.bind(var3)(var4);
                var4 = var4.ResizeMode;
                var15 = var4.CONTAIN;
            case 81:
                var14 = var2.gestureEnabled;
                var11 = var2.removeEmptyStateButton;
                var10 = var2.removeEmptyStateImage;
                var13 = var2.onFullScreen;
                var12 = var2.fullscreenIconStyle;
                var8 = var2.style;
                var2 = _closure1_slot13;
                var7 = var2.bind(var3)();
                var5 = _closure1_slot3;
                var4 = var5.useCallback;
                var2 = new Array(2);
                var2[0] = var1;
                var2[1] = var17;
                var1 = function() { // Environment: var0
                    _fun64250: for (var _fun64250_ip = 0;;) switch (_fun64250_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var0 = null;
                            var2 = var0 == var2;
                            var3 = undefined;
                            var0 = undefined;
                            if (var2) {
                                _fun64250_ip = 33;
                                continue _fun64250
                            }
                        case 20:
                            var2 = _closure2_slot1;
                            var1 = _closure2_slot0;
                            var0 = var2.bind(var3)(var1);
                        case 33:
                            return var0;
                    }
                };
                var4 = var4.bind(var5)(var1, var2);
                var2 = var5.useCallback;
                var1 = new Array(2);
                var1[0] = var6;
                var1[1] = var17;
                var0 = function() { // Environment: var0
                    _fun64251: for (var _fun64251_ip = 0;;) switch (_fun64251_ip) {
                        case 0:
                            var2 = _closure2_slot2;
                            var0 = null;
                            var2 = var0 == var2;
                            var3 = undefined;
                            var0 = undefined;
                            if (var2) {
                                _fun64251_ip = 33;
                                continue _fun64251
                            }
                        case 20:
                            var2 = _closure2_slot2;
                            var1 = _closure2_slot0;
                            var0 = var2.bind(var3)(var1);
                        case 33:
                            return var0;
                    }
                };
                var2 = var2.bind(var5)(var0, var1);
                var1 = _closure1_slot1;
                var5 = _closure1_slot2;
                var0 = 20;
                var0 = var5[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var0.onSingleTapStart = var4;
                var0.onDoubleTapStart = var2;
                var4 = var1.bind(var3)(var0);
                var18 = var17.streamId;
                var16 = var17.user;
                var2 = _closure1_slot10;
                var1 = _closure1_slot0;
                var0 = 21;
                var0 = var5[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.GestureDetector;
                var0 = {};
                var0.gesture = var4;
                var6 = _closure1_slot11;
                var5 = _closure1_slot4;
                var4 = {};
                var19 = var7.container;
                var7 = new Array(2);
                var7[0] = var19;
                var7[1] = var8;
                var4.style = var7;
                var8 = _closure1_slot15;
                var7 = {};
                var7.streamId = var18;
                var7.participant = var17;
                var7.user = var16;
                var7.resizeMode = var15;
                var7.gestureEnabled = var14;
                var7.removeEmptyStateButton = var11;
                var7.removeEmptyStateImage = var10;
                var8 = var2.bind(var3)(var8, var7);
                var7 = new Array(2);
                var7[0] = var8;
                var8 = null;
                var8 = var8 != var13;
                if (!var8) {
                    _fun64249_ip = 386;
                    continue _fun64249
                }
            case 361:
                var11 = _closure1_slot10;
                var10 = _closure1_slot16;
                var9 = {};
                var9.onFullScreen = var13;
                var9.style = var12;
                var8 = var11.bind(var3)(var10, var9);
            case 386:
                var7[1] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var3;
    var2.StreamTextOverlay = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 3673, 1216, 660, 3469, 33, 1297, 671, 3199, 3901, 4838, 566, 7966, 7969, 1234, 3921, 7991, 8004, 7993, 7962, 4923, 4864, 4045, 8007, 2]);