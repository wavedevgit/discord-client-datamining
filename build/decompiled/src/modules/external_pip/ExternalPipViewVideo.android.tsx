// modules/external_pip/ExternalPipViewVideo.android.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var16 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var16;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun110879: for (var _fun110879_ip = 0;;) switch (_fun110879_ip) {
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
                if (var8) {
                    _fun110879_ip = 51;
                    continue _fun110879
                }
            case 45:
                var5 = _closure1_slot15;
                _fun110879_ip = 99;
                continue _fun110879;
            case 51:
                var7 = _closure1_slot11;
                var6 = _closure1_slot0;
                var11 = _closure1_slot2;
                var4 = 10;
                var4 = var11[var4];
                var4 = var6.bind(var3)(var4);
                var6 = var4.StreamEnded;
                var4 = {};
                var11 = var10.unavaiableImage;
                var4.style = var11;
                var5 = var7.bind(var3)(var6, var4);
            case 99:
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
                    _fun110879_ip = 224;
                    continue _fun110879
                }
            case 190:
                var11 = var12.string;
                var8 = var13[var9];
                var8 = var10.bind(var3)(var8);
                var8 = var8.t;
                var8 = var8.Nzo5nz;
                var8 = var11.bind(var12)(var8);
                _fun110879_ip = 258;
                continue _fun110879;
            case 224:
                var11 = var12.formatToMarkdownString;
                var9 = var13[var9];
                var9 = var10.bind(var3)(var9);
                var9 = var9.t;
                var10 = var9["1Ww0Hi"];
                var9 = {};
                var8 = var11.bind(var12)(var10, var9);
            case 258:
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var0 = function arg0() {
        _fun110880: for (var _fun110880_ip = 0;;) switch (_fun110880_ip) {
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
                    _fun110882: for (var _fun110882_ip = 0;;) switch (_fun110882_ip) {
                        case 0:
                            var2 = _closure1_slot8;
                            var1 = var2.getChannel;
                            var0 = _closure2_slot1;
                            var1 = var1.bind(var2)(var0);
                            var0 = null;
                            var2 = var0 == var1;
                            var0 = undefined;
                            if (var2) {
                                _fun110882_ip = 40;
                                continue _fun110882
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
                    _fun110880_ip = 249;
                    continue _fun110880
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
    var _closure1_slot17 = var0;
    var0 = function arg0() {
        _fun110883: for (var _fun110883_ip = 0;;) switch (_fun110883_ip) {
            case 0:
                var1 = arg0;
                var14 = var1.streamId;
                var _closure2_slot0 = var14;
                var1 = function arg0() {
                    _fun110884: for (var _fun110884_ip = 0;;) switch (_fun110884_ip) {
                        case 0:
                            var1 = arg0;
                            var _closure3_slot0 = var1;
                            var10 = undefined;
                            var7 = undefined;
                            if (!(var7 === var7)) {
                                _fun110884_ip = 23;
                                continue _fun110884
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
                                _fun110886: for (var _fun110886_ip = 0;;) switch (_fun110886_ip) {
                                    case 0:
                                        var3 = _closure3_slot2;
                                        var2 = null;
                                        if (!(var2 != var3)) {
                                            _fun110886_ip = 30;
                                            continue _fun110886
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
                    _fun110889: for (var _fun110889_ip = 0;;) switch (_fun110889_ip) {
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
                                _fun110889_ip = 41;
                                continue _fun110889
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
                    _fun110890: for (var _fun110890_ip = 0;;) switch (_fun110890_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun110890_ip = 105;
                                continue _fun110890
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
                    _fun110883_ip = 354;
                    continue _fun110883
                }
            case 281:
                var5 = null;
                if (!var6) {
                    _fun110883_ip = 354;
                    continue _fun110883
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
    var _closure1_slot18 = var0;
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
    var3 = var16.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var20 = 1;
    var6 = var5[var20];
    var3 = arg3;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.ActivityIndicator;
    var _closure1_slot5 = var7;
    var17 = var3.StyleSheet;
    var7 = var3.View;
    var _closure1_slot6 = var7;
    var3 = var3.PixelRatio;
    var _closure1_slot7 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var16.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var16.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ParticipantTypes;
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var8 = var3.jsx;
    var _closure1_slot11 = var8;
    var7 = var3.jsxs;
    var _closure1_slot12 = var7;
    var3 = var3.Fragment;
    var _closure1_slot13 = var3;
    var3 = 7;
    var3 = var5[var3];
    var9 = var4.bind(var0)(var3);
    var7 = var9.createStyles;
    var3 = {};
    var10 = {};
    var25 = var17.absoluteFillObject;
    var26 = var10;
    var11 = copyDataProperties(var26, var25);
    var14 = 8;
    var11 = var5[var14];
    var11 = var16.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_MOD_NORMAL;
    var19 = 'backgroundColor';
    var10[var19] = var11;
    var3.container = var10;
    var10 = {};
    var25 = var17.absoluteFillObject;
    var26 = var10;
    var11 = copyDataProperties(var26, var25);
    var3.video = var10;
    var10 = {};
    var25 = var17.absoluteFillObject;
    var26 = var10;
    var11 = copyDataProperties(var26, var25);
    var11 = var5[var14];
    var11 = var16.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var15 = 'margin';
    var10[var15] = var11;
    var11 = var5[var14];
    var11 = var16.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.sm;
    var18 = 'borderRadius';
    var10[var18] = var11;
    var12 = 'center';
    var11 = 'justifyContent';
    var10[var11] = var12;
    var13 = 'alignContent';
    var10[var13] = var12;
    var22 = 'row';
    var13 = 'flexDirection';
    var10[var13] = var22;
    var13 = 'alignItems';
    var10[var13] = var12;
    var21 = 'wrap';
    var23 = 'flexWrap';
    var10[var23] = var21;
    var23 = 'flex';
    var10[var23] = var20;
    var3.videoUnavailableWrap = var10;
    var10 = {};
    var23 = var5[var14];
    var23 = var16.bind(var0)(var23);
    var23 = var23.spacing;
    var23 = var23.PX_16;
    var10.marginTop = var23;
    var3.videoUnavailableSpinner = var10;
    var10 = {};
    var23 = var5[var14];
    var23 = var16.bind(var0)(var23);
    var23 = var23.colors;
    var23 = var23.BACKGROUND_SURFACE_HIGH;
    var10.backgroundColor = var23;
    var23 = var5[var14];
    var23 = var16.bind(var0)(var23);
    var23 = var23.radii;
    var23 = var23.sm;
    var10.borderRadius = var23;
    var23 = var5[var14];
    var23 = var16.bind(var0)(var23);
    var23 = var23.spacing;
    var23 = var23.PX_8;
    var10.padding = var23;
    var23 = var5[var14];
    var23 = var16.bind(var0)(var23);
    var23 = var23.spacing;
    var23 = var23.PX_8;
    var10.margin = var23;
    var10.justifyContent = var12;
    var10.alignContent = var12;
    var10.alignItems = var12;
    var10.flexDirection = var22;
    var10.flexWrap = var21;
    var10.flex = var20;
    var3.unavailable = var10;
    var10 = {};
    var20 = var5[var14];
    var20 = var16.bind(var0)(var20);
    var20 = var20.spacing;
    var20 = var20.PX_4;
    var10.marginLeft = var20;
    var10.textAlign = var12;
    var3.unavailableText = var10;
    var10 = {
        'marginBottom': null,
        'resizeMode': 'contain',
        'aspectRatio': 2.5,
        'width': '80%'
    };
    var20 = var5[var14];
    var20 = var16.bind(var0)(var20);
    var20 = var20.spacing;
    var20 = var20.PX_8;
    var10.marginBottom = var20;
    var3.unavaiableImage = var10;
    var10 = {};
    var25 = var17.absoluteFillObject;
    var26 = var10;
    var17 = copyDataProperties(var26, var25);
    var17 = var5[var14];
    var17 = var16.bind(var0)(var17);
    var17 = var17.colors;
    var17 = var17.BACKGROUND_BASE_LOWEST;
    var10[var19] = var17;
    var17 = var5[var14];
    var17 = var16.bind(var0)(var17);
    var17 = var17.radii;
    var17 = var17.sm;
    var10[var18] = var17;
    var14 = var5[var14];
    var14 = var16.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_8;
    var10[var15] = var14;
    var10[var13] = var12;
    var10[var11] = var12;
    var3.user = var10;
    var3 = var7.bind(var9)(var3);
    var _closure1_slot14 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.CircleInformationIcon;
    var3 = {};
    var3 = var8.bind(var0)(var7, var3);
    var _closure1_slot15 = var3;
    var3 = var6.memo;
    var1 = function() {
        _fun110891: for (var _fun110891_ip = 0;;) switch (_fun110891_ip) {
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
                    _fun110891_ip = 180;
                    continue _fun110891
                }
            case 91:
                if (!(var4 == var12)) {
                    _fun110891_ip = 149;
                    continue _fun110891
                }
            case 95:
                var7 = _closure1_slot11;
                var6 = _closure1_slot16;
                var4 = {};
                var9 = _closure1_slot10;
                var9 = var9.STREAM;
                var9 = var14 === var9;
                if (var9) {
                    _fun110891_ip = 136;
                    continue _fun110891
                }
            case 122:
                var13 = _closure1_slot10;
                var13 = var13.HIDDEN_STREAM;
                var9 = var14 === var13;
            case 136:
                var4.wasStream = var9;
                var4 = var7.bind(var3)(var6, var4);
                _fun110891_ip = 178;
                continue _fun110891;
            case 149:
                var9 = _closure1_slot11;
                var7 = _closure1_slot17;
                var6 = {};
                var6.userId = var12;
                var6.channelId = var11;
                var6.speaking = var10;
                var4 = var9.bind(var3)(var7, var6);
            case 178:
                _fun110891_ip = 201;
                continue _fun110891;
            case 180:
                var7 = _closure1_slot11;
                var6 = _closure1_slot18;
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1372, 1621, 3520, 33, 1297, 671, 3267, 8135, 3938, 1234, 566, 5512, 3153, 14253, 8168, 14254, 2]);