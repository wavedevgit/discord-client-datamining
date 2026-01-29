// modules/external_pip/ExternalPipViewVideo.android.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var15 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var15;
    var _closure1_slot2 = var5;
    var0 = function(arg0) { // Original name: ExternalPipViewVideoUnavailable, environment: var1
        _fun110610: for (var _fun110610_ip = 0;;) switch (_fun110610_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.wasStream;
                var0 = _closure1_slot14;
                var3 = undefined;
                var10 = var0.bind(var3)();
                var2 = _closure1_slot12;
                var1 = _closure1_slot6;
                var0 = {};
                var4 = var10.unavailable;
                var0.style = var4;
                var7 = _closure1_slot11;
                var6 = _closure1_slot0;
                var11 = _closure1_slot2;
                if (var8) {
                    _fun110610_ip = 85;
                    continue _fun110610
                }
            case 57:
                var4 = 10;
                var4 = var11[var4];
                var4 = var6.bind(var3)(var4);
                var5 = var4.CircleInformationIcon;
                var4 = {};
                var5 = var7.bind(var3)(var5, var4);
                _fun110610_ip = 121;
                continue _fun110610;
            case 85:
                var4 = 9;
                var4 = var11[var4];
                var4 = var6.bind(var3)(var4);
                var6 = var4.StreamEnded;
                var4 = {};
                var11 = var10.unavaiableImage;
                var4.style = var11;
                var5 = var7.bind(var3)(var6, var4);
            case 121:
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot11;
                var6 = _closure1_slot0;
                var11 = _closure1_slot2;
                var5 = 11;
                var5 = var11[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.Text;
                var5 = {
                    'variant': 'text-md/semibold',
                    'style': null,
                    'lineClamp': 1
                };
                var10 = var10.unavailableText;
                var5.style = var10;
                var10 = _closure1_slot0;
                var13 = _closure1_slot2;
                var9 = 12;
                var11 = var13[var9];
                var11 = var10.bind(var3)(var11);
                var12 = var11.intl;
                if (var8) {
                    _fun110610_ip = 246;
                    continue _fun110610
                }
            case 212:
                var11 = var12.string;
                var8 = var13[var9];
                var8 = var10.bind(var3)(var8);
                var8 = var8.t;
                var8 = var8.Nzo5nz;
                var8 = var11.bind(var12)(var8);
                _fun110610_ip = 280;
                continue _fun110610;
            case 246:
                var11 = var12.formatToMarkdownString;
                var9 = var13[var9];
                var9 = var10.bind(var3)(var9);
                var9 = var9.t;
                var10 = var9["1Ww0Hi"];
                var9 = {};
                var8 = var11.bind(var12)(var10, var9);
            case 280:
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var0 = function(arg0) { // Original name: ExternalPipViewVideoUser, environment: var1
        _fun110611: for (var _fun110611_ip = 0;;) switch (_fun110611_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.userId;
                var _closure2_slot0 = var2;
                var2 = var1.channelId;
                var _closure2_slot1 = var2;
                var8 = var1.speaking;
                var1 = _closure1_slot14;
                var3 = undefined;
                var4 = var1.bind(var3)();
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 13;
                var6 = var5[var1];
                var11 = var2.bind(var3)(var6);
                var9 = var11.useStateFromStores;
                var6 = _closure1_slot9;
                var7 = new Array(1);
                var7[0] = var6;
                var6 = function() { // Environment: var0
                    var2 = _closure1_slot9;
                    var1 = var2.getUser;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var13 = var9.bind(var11)(var7, var6);
                var1 = var5[var1];
                var5 = var2.bind(var3)(var1);
                var2 = var5.useStateFromStores;
                var6 = _closure1_slot8;
                var1 = new Array(1);
                var1[0] = var6;
                var0 = function() { // Environment: var0
                    _fun110613: for (var _fun110613_ip = 0;;) switch (_fun110613_ip) {
                        case 0:
                            var2 = _closure1_slot8;
                            var1 = var2.getChannel;
                            var0 = _closure2_slot1;
                            var1 = var1.bind(var2)(var0);
                            var0 = null;
                            var2 = var0 == var1;
                            var0 = undefined;
                            if (var2) {
                                _fun110613_ip = 40;
                                continue _fun110613
                            }
                        case 35:
                            var0 = var1.guild_id;
                        case 40:
                            return var0;
                    }
                };
                var12 = var2.bind(var5)(var1, var0);
                var2 = _closure1_slot11;
                var1 = _closure1_slot6;
                var0 = {};
                var4 = var4.user;
                var0.style = var4;
                var4 = null;
                var5 = var4 != var13;
                if (!var5) {
                    _fun110611_ip = 249;
                    continue _fun110611
                }
            case 159:
                var7 = _closure1_slot11;
                var6 = _closure1_slot1;
                var11 = _closure1_slot2;
                var9 = 14;
                var5 = var11[var9];
                var6 = var6.bind(var3)(var5);
                var5 = {};
                var5.user = var13;
                var13 = var13.avatarDecoration;
                var5.avatarDecoration = var13;
                var5.guildId = var12;
                var10 = _closure1_slot0;
                var9 = var11[var9];
                var9 = var10.bind(var3)(var9);
                var9 = var9.AvatarSizes;
                var9 = var9.XXLARGE;
                var5.size = var9;
                var5.animate = var8;
                var5.speaking = var8;
                var4 = var7.bind(var3)(var6, var5);
            case 249:
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var0 = function(arg0) { // Original name: ExternalPipViewVideoStream, environment: var1
        _fun110614: for (var _fun110614_ip = 0;;) switch (_fun110614_ip) {
            case 0:
                var1 = arg0;
                var14 = var1.streamId;
                var _closure2_slot0 = var14;
                var1 = function(arg0) { // Original name: useStreamReady, environment: var0
                    _fun110615: for (var _fun110615_ip = 0;;) switch (_fun110615_ip) {
                        case 0:
                            var1 = arg0;
                            var _closure3_slot0 = var1;
                            var10 = undefined;
                            var7 = undefined;
                            if (!(var7 === var7)) {
                                _fun110615_ip = 23;
                                continue _fun110615
                            }
                        case 17:
                            var7 = 300;
                        case 23:
                            var _closure3_slot1 = var7;
                            var _closure3_slot2 = var10;
                            var _closure3_slot3 = var10;
                            var _closure3_slot4 = var10;
                            var3 = _closure1_slot4;
                            var2 = var3.useState;
                            var3 = var2.bind(var3)(var10);
                            var2 = _closure1_slot3;
                            var9 = 2;
                            var5 = var2.bind(var10)(var3, var9);
                            var2 = 0;
                            var3 = var5[var2];
                            _closure3_slot2 = var3;
                            var6 = 1;
                            var5 = var5[var6];
                            _closure3_slot3 = var5;
                            var11 = _closure1_slot4;
                            var8 = var11.useState;
                            var5 = false;
                            var8 = var8.bind(var11)(var5);
                            var5 = _closure1_slot3;
                            var5 = var5.bind(var10)(var8, var9);
                            var2 = var5[var2];
                            var5 = var5[var6];
                            _closure3_slot4 = var5;
                            var8 = _closure1_slot4;
                            var6 = var8.useCallback;
                            var5 = new Array(1);
                            var5[0] = var1;
                            var1 = function() { // Environment: var0
                                var2 = _closure3_slot3;
                                var1 = _closure3_slot0;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var1 = var6.bind(var8)(var1, var5);
                            var6 = _closure1_slot4;
                            var5 = var6.useEffect;
                            var4 = new Array(2);
                            var4[0] = var3;
                            var4[1] = var7;
                            var0 = function() { // Environment: var0
                                _fun110617: for (var _fun110617_ip = 0;;) switch (_fun110617_ip) {
                                    case 0:
                                        var3 = _closure3_slot2;
                                        var2 = null;
                                        if (!(var2 != var3)) {
                                            _fun110617_ip = 30;
                                            continue _fun110617
                                        }
                                    case 15:
                                        var4 = _closure3_slot4;
                                        var2 = undefined;
                                        var3 = false;
                                        var3 = var4.bind(var2)(var3);
                                        return var2;
                                    case 30:
                                        var2 = global;
                                        var4 = var2.setTimeout;
                                        var3 = _closure3_slot1;
                                        var2 = undefined;
                                        var1 = function() { // Environment: var0
                                            var2 = _closure3_slot4;
                                            var0 = undefined;
                                            var1 = true;
                                            var1 = var2.bind(var0)(var1);
                                            return var0;
                                        };
                                        var1 = var4.bind(var2)(var1, var3);
                                        var _closure4_slot0 = var1;
                                        var0 = function() { // Environment: var0
                                            var0 = global;
                                            var2 = var0.clearTimeout;
                                            var1 = _closure4_slot0;
                                            var0 = undefined;
                                            var1 = var2.bind(var0)(var1);
                                            return var0;
                                        };
                                        return var0;
                                }
                            };
                            var0 = var5.bind(var6)(var0, var4);
                            var0 = {};
                            var0.streamReady = var3;
                            var0.streamReadLongTime = var2;
                            var0.streamReadyCallback = var1;
                            return var0;
                    }
                };
                var3 = undefined;
                var1 = var1.bind(var3)(var14);
                var5 = var1.streamReady;
                var _closure2_slot1 = var5;
                var6 = var1.streamReadLongTime;
                var11 = var1.streamReadyCallback;
                var1 = _closure1_slot14;
                var13 = var1.bind(var3)();
                var _closure2_slot2 = var13;
                var7 = _closure1_slot4;
                var4 = var7.useMemo;
                var2 = new Array(2);
                var2[0] = var13;
                var2[1] = var5;
                var1 = function() { // Environment: var0
                    _fun110620: for (var _fun110620_ip = 0;;) switch (_fun110620_ip) {
                        case 0:
                            var0 = _closure2_slot2;
                            var1 = var0.video;
                            var0 = new Array(2);
                            var0[0] = var1;
                            var1 = {};
                            var3 = _closure2_slot1;
                            var2 = null;
                            var3 = var2 == var3;
                            var2 = 1;
                            if (!var3) {
                                _fun110620_ip = 41;
                                continue _fun110620
                            }
                        case 39:
                            var2 = 0;
                        case 41:
                            var1.opacity = var2;
                            var0[1] = var1;
                            return var0;
                    }
                };
                var15 = var4.bind(var7)(var1, var2);
                var2 = _closure1_slot0;
                var16 = _closure1_slot2;
                var1 = 15;
                var1 = var16[var1];
                var4 = var2.bind(var3)(var1);
                var2 = var4.useToken;
                var7 = _closure1_slot1;
                var1 = 8;
                var1 = var16[var1];
                var1 = var7.bind(var3)(var1);
                var1 = var1.colors;
                var1 = var1.TEXT_FEEDBACK_INFO;
                var12 = var2.bind(var4)(var1);
                var2 = _closure1_slot7;
                var1 = var2.get;
                var8 = var1.bind(var2)();
                var _closure2_slot3 = var8;
                var4 = _closure1_slot4;
                var2 = var4.useCallback;
                var1 = new Array(2);
                var1[0] = var14;
                var1[1] = var8;
                var0 = function(arg0) { // Environment: var0
                    _fun110621: for (var _fun110621_ip = 0;;) switch (_fun110621_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun110621_ip = 105;
                                continue _fun110621
                            }
                        case 13:
                            var1 = arg0;
                            var1 = var1.nativeEvent;
                            var1 = var1.layout;
                            var6 = var1.width;
                            var5 = var1.height;
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 16;
                            var2 = var2[var1];
                            var1 = undefined;
                            var4 = var3.bind(var1)(var2);
                            var3 = var4.updateVideoSize;
                            var2 = _closure2_slot0;
                            var1 = {};
                            var0 = _closure2_slot3;
                            var6 = var6 * var0;
                            var1.width = var6;
                            var0 = var5 * var0;
                            var1.height = var0;
                            var0 = 1;
                            var0 = var3.bind(var4)(var2, var1, var0);
                        case 105:
                            var0 = undefined;
                            return var0;
                    }
                };
                var10 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot12;
                var1 = _closure1_slot13;
                var0 = {};
                var8 = _closure1_slot11;
                var4 = 17;
                var4 = var16[var4];
                var7 = var7.bind(var3)(var4);
                var4 = {};
                var4.style = var15;
                var4.streamId = var14;
                var4.onReady = var11;
                var4.onLayout = var10;
                var7 = var8.bind(var3)(var7, var4);
                var4 = new Array(2);
                var4[0] = var7;
                var7 = null;
                var8 = var7 == var5;
                var5 = null;
                if (!var8) {
                    _fun110614_ip = 354;
                    continue _fun110614
                }
            case 281:
                var5 = null;
                if (!var6) {
                    _fun110614_ip = 354;
                    continue _fun110614
                }
            case 286:
                var8 = _closure1_slot11;
                var7 = _closure1_slot6;
                var6 = {};
                var10 = var13.videoUnavailableWrap;
                var6.style = var10;
                var11 = _closure1_slot11;
                var10 = _closure1_slot5;
                var9 = {};
                var13 = var13.videoUnavailableSpinner;
                var9.style = var13;
                var13 = 'large';
                var9.size = var13;
                var9.color = var12;
                var9 = var11.bind(var3)(var10, var9);
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 354:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot17 = var0;
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
    var3 = var15.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var19 = 1;
    var6 = var5[var19];
    var3 = arg3;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.ActivityIndicator;
    var _closure1_slot5 = var7;
    var16 = var3.StyleSheet;
    var7 = var3.View;
    var _closure1_slot6 = var7;
    var3 = var3.PixelRatio;
    var _closure1_slot7 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var15.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var15.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ParticipantTypes;
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot11 = var7;
    var7 = var3.jsxs;
    var _closure1_slot12 = var7;
    var3 = var3.Fragment;
    var _closure1_slot13 = var3;
    var3 = 7;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {};
    var24 = var16.absoluteFillObject;
    var25 = var9;
    var10 = copyDataProperties(var25, var24);
    var13 = 8;
    var10 = var5[var13];
    var10 = var15.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_MOD_NORMAL;
    var18 = 'backgroundColor';
    var9[var18] = var10;
    var3.container = var9;
    var9 = {};
    var24 = var16.absoluteFillObject;
    var25 = var9;
    var10 = copyDataProperties(var25, var24);
    var3.video = var9;
    var9 = {};
    var24 = var16.absoluteFillObject;
    var25 = var9;
    var10 = copyDataProperties(var25, var24);
    var10 = var5[var13];
    var10 = var15.bind(var0)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_16;
    var14 = 'margin';
    var9[var14] = var10;
    var10 = var5[var13];
    var10 = var15.bind(var0)(var10);
    var10 = var10.radii;
    var10 = var10.sm;
    var17 = 'borderRadius';
    var9[var17] = var10;
    var11 = 'center';
    var10 = 'justifyContent';
    var9[var10] = var11;
    var12 = 'alignContent';
    var9[var12] = var11;
    var21 = 'row';
    var12 = 'flexDirection';
    var9[var12] = var21;
    var12 = 'alignItems';
    var9[var12] = var11;
    var20 = 'wrap';
    var22 = 'flexWrap';
    var9[var22] = var20;
    var22 = 'flex';
    var9[var22] = var19;
    var3.videoUnavailableWrap = var9;
    var9 = {};
    var22 = var5[var13];
    var22 = var15.bind(var0)(var22);
    var22 = var22.spacing;
    var22 = var22.PX_16;
    var9.marginTop = var22;
    var3.videoUnavailableSpinner = var9;
    var9 = {};
    var22 = var5[var13];
    var22 = var15.bind(var0)(var22);
    var22 = var22.colors;
    var22 = var22.BACKGROUND_SURFACE_HIGH;
    var9.backgroundColor = var22;
    var22 = var5[var13];
    var22 = var15.bind(var0)(var22);
    var22 = var22.radii;
    var22 = var22.sm;
    var9.borderRadius = var22;
    var22 = var5[var13];
    var22 = var15.bind(var0)(var22);
    var22 = var22.spacing;
    var22 = var22.PX_8;
    var9.padding = var22;
    var22 = var5[var13];
    var22 = var15.bind(var0)(var22);
    var22 = var22.spacing;
    var22 = var22.PX_8;
    var9.margin = var22;
    var9.justifyContent = var11;
    var9.alignContent = var11;
    var9.alignItems = var11;
    var9.flexDirection = var21;
    var9.flexWrap = var20;
    var9.flex = var19;
    var3.unavailable = var9;
    var9 = {};
    var19 = var5[var13];
    var19 = var15.bind(var0)(var19);
    var19 = var19.spacing;
    var19 = var19.PX_4;
    var9.marginLeft = var19;
    var9.textAlign = var11;
    var3.unavailableText = var9;
    var9 = {
        'marginBottom': null,
        'resizeMode': 'contain',
        'aspectRatio': 2.5,
        'width': '80%'
    };
    var19 = var5[var13];
    var19 = var15.bind(var0)(var19);
    var19 = var19.spacing;
    var19 = var19.PX_8;
    var9.marginBottom = var19;
    var3.unavaiableImage = var9;
    var9 = {};
    var24 = var16.absoluteFillObject;
    var25 = var9;
    var16 = copyDataProperties(var25, var24);
    var16 = var5[var13];
    var16 = var15.bind(var0)(var16);
    var16 = var16.colors;
    var16 = var16.BACKGROUND_BASE_LOWEST;
    var9[var18] = var16;
    var16 = var5[var13];
    var16 = var15.bind(var0)(var16);
    var16 = var16.radii;
    var16 = var16.sm;
    var9[var17] = var16;
    var13 = var5[var13];
    var13 = var15.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_8;
    var9[var14] = var13;
    var9[var12] = var11;
    var9[var10] = var11;
    var3.user = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot14 = var3;
    var3 = var6.memo;
    var1 = function() { // Original name: ExternalPipViewVideo, environment: var1
        _fun110622: for (var _fun110622_ip = 0;;) switch (_fun110622_ip) {
            case 0:
                var0 = _closure1_slot14;
                var3 = undefined;
                var4 = var0.bind(var3)();
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 18;
                var0 = var2[var0];
                var0 = var1.bind(var3)(var0);
                var0 = var0.bind(var3)();
                var11 = var0.channelId;
                var8 = var0.selectedParticipantStreamId;
                var12 = var0.selectedParticipantUserId;
                var10 = var0.selectedParticipantSpeaking;
                var14 = var0.focusedParticipantType;
                var2 = _closure1_slot11;
                var1 = _closure1_slot6;
                var0 = {};
                var4 = var4.container;
                var0.style = var4;
                var4 = null;
                if (!(var4 == var8)) {
                    _fun110622_ip = 180;
                    continue _fun110622
                }
            case 91:
                if (!(var4 == var12)) {
                    _fun110622_ip = 149;
                    continue _fun110622
                }
            case 95:
                var7 = _closure1_slot11;
                var6 = _closure1_slot15;
                var4 = {};
                var9 = _closure1_slot10;
                var9 = var9.STREAM;
                var9 = var14 === var9;
                if (var9) {
                    _fun110622_ip = 136;
                    continue _fun110622
                }
            case 122:
                var13 = _closure1_slot10;
                var13 = var13.HIDDEN_STREAM;
                var9 = var14 === var13;
            case 136:
                var4.wasStream = var9;
                var4 = var7.bind(var3)(var6, var4);
                _fun110622_ip = 178;
                continue _fun110622;
            case 149:
                var9 = _closure1_slot11;
                var7 = _closure1_slot16;
                var6 = {};
                var6.userId = var12;
                var6.channelId = var11;
                var6.speaking = var10;
                var4 = var9.bind(var3)(var7, var6);
            case 178:
                _fun110622_ip = 201;
                continue _fun110622;
            case 180:
                var7 = _closure1_slot11;
                var6 = _closure1_slot17;
                var5 = {};
                var5.streamId = var8;
                var4 = var7.bind(var3)(var6, var5);
            case 201:
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 19;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/external_pip/ExternalPipViewVideo.android.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1372, 1613, 3482, 33, 1297, 671, 7967, 3225, 3895, 1234, 566, 5409, 3110, 14196, 7999, 14197, 2]);