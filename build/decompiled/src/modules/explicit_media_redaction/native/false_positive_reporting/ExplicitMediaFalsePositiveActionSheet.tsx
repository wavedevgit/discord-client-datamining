// modules/explicit_media_redaction/native/false_positive_reporting/ExplicitMediaFalsePositiveActionSheet.tsx
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
    var _closure1_slot3 = var3;
    var11 = 1;
    var3 = var5[var11];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot4 = var6;
    var6 = var3.Image;
    var _closure1_slot5 = var6;
    var3 = var3.ScrollView;
    var _closure1_slot6 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot7 = var6;
    var3 = var3.jsxs;
    var _closure1_slot8 = var3;
    var3 = function arg0() {
        _fun62294: for (var _fun62294_ip = 0;;) switch (_fun62294_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.embed;
                var1 = var0.video;
                var4 = undefined;
                if (!(var4 !== var1)) {
                    _fun62294_ip = 36;
                    continue _fun62294
                }
            case 21:
                var2 = var0.type;
                var1 = 'gifv';
                if (!(var1 === var2)) {
                    _fun62294_ip = 60;
                    continue _fun62294
                }
            case 36:
                var1 = var0.thumbnail;
                var2 = null;
                var2 = var2 == var1;
                var5 = undefined;
                if (var2) {
                    _fun62294_ip = 58;
                    continue _fun62294
                }
            case 53:
                var5 = var1.url;
            case 58:
                _fun62294_ip = 71;
                continue _fun62294;
            case 60:
                var0 = var0.video;
                var5 = var0.url;
            case 71:
                var0 = null;
                var1 = var0 == var5;
                if (var1) {
                    _fun62294_ip = 103;
                    continue _fun62294
                }
            case 80:
                var3 = _closure1_slot7;
                var2 = _closure1_slot11;
                var1 = {};
                var1.url = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 103:
                return var0;
        }
    };
    var _closure1_slot9 = var3;
    var3 = function arg0() {
        _fun62295: for (var _fun62295_ip = 0;;) switch (_fun62295_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.attachment;
                var1 = var0.url;
                var0 = null;
                var2 = var0 == var1;
                if (var2) {
                    _fun62295_ip = 48;
                    continue _fun62295
                }
            case 23:
                var4 = _closure1_slot7;
                var3 = _closure1_slot11;
                var2 = {};
                var2.url = var1;
                var1 = undefined;
                var0 = var4.bind(var1)(var3, var2);
            case 48:
                return var0;
        }
    };
    var _closure1_slot10 = var3;
    var3 = function arg0() {
        _fun62296: for (var _fun62296_ip = 0;;) switch (_fun62296_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.url;
                var0 = _closure1_slot12;
                var3 = undefined;
                var8 = var0.bind(var3)();
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 3;
                var0 = var2[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.isVideo;
                var4 = var0.bind(var1)(var9);
                var2 = _closure1_slot7;
                var1 = _closure1_slot4;
                var0 = {};
                var7 = var8.mediaContainer;
                var6 = new Array(2);
                var6[0] = var7;
                var7 = var8.elevationShadow;
                var6[1] = var7;
                var0.style = var6;
                var7 = _closure1_slot7;
                if (var4) {
                    _fun62296_ip = 149;
                    continue _fun62296
                }
            case 97:
                var6 = _closure1_slot5;
                var4 = {};
                var11 = var8.media;
                var10 = new Array(2);
                var10[0] = var11;
                var11 = var8.image;
                var10[1] = var11;
                var4.style = var10;
                var10 = {};
                var10.uri = var9;
                var4.source = var10;
                var4 = var7.bind(var3)(var6, var4);
                _fun62296_ip = 213;
                continue _fun62296;
            case 149:
                var6 = _closure1_slot1;
                var10 = _closure1_slot2;
                var5 = 4;
                var5 = var10[var5];
                var6 = var6.bind(var3)(var5);
                var5 = {
                    'volume': 0,
                    'resizeMode': 'cover',
                    'repeat': true,
                    'style': null,
                    'source': null,
                    'controls': true,
                    'paused': true
                };
                var8 = var8.media;
                var5.style = var8;
                var8 = {};
                var8.uri = var9;
                var5.source = var8;
                var4 = var7.bind(var3)(var6, var5);
            case 213:
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot11 = var3;
    var3 = 5;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 6;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var8.padding = var12;
    var3.content = var8;
    var8 = {
        'justifyContent': 'center',
        'textAlign': 'center',
        'alignItems': 'center'
    };
    var3.contentContainer = var8;
    var8 = {};
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var8.marginBottom = var12;
    var3.heading = var8;
    var8 = {};
    var12 = '100%';
    var8.width = var12;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var8.padding = var12;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_SURFACE_HIGH;
    var8.backgroundColor = var12;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.xs;
    var8.borderRadius = var12;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var8.marginTop = var12;
    var12 = '4 / 3';
    var8.aspectRatio = var12;
    var3.mediaContainer = var8;
    var8 = 7;
    var12 = var5[var8];
    var13 = var4.bind(var0)(var12);
    var12 = var13.generateBoxShadowStyle;
    var8 = var5[var8];
    var8 = var4.bind(var0)(var8);
    var8 = var8.FOUR_DP_ELEVATION_SHADOW_PARAMS;
    var8 = var12.bind(var13)(var8);
    var3.elevationShadow = var8;
    var8 = {};
    var12 = 'contain';
    var8.resizeMode = var12;
    var3.image = var8;
    var8 = {};
    var8.flex = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.xs;
    var8.borderRadius = var11;
    var3.media = var8;
    var8 = {};
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.MOBILE_ACTIONSHEET_GRADIENT_BACKGROUND_DEFAULT;
    var8.backgroundColor = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_12;
    var8.paddingVertical = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var8.paddingHorizontal = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_8;
    var8.gap = var11;
    var3.footer = var8;
    var8 = {};
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_4;
    var8.marginBottom = var9;
    var3.firstButton = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot12 = var3;
    var3 = 18;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/explicit_media_redaction/native/false_positive_reporting/ExplicitMediaFalsePositiveActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        var6 = _closure1_slot1;
        var8 = _closure1_slot2;
        var0 = 8;
        var1 = var8[var0];
        var0 = undefined;
        var3 = var6.bind(var0)(var1);
        var2 = var3.hideActionSheet;
        var1 = arg0;
        var1 = var2.bind(var3)(var1);
        var1 = 9;
        var1 = var8[var1];
        var3 = var6.bind(var0)(var1);
        var2 = var3.open;
        var1 = {};
        var5 = 'explicit_media_report_false_positive_success';
        var1.key = var5;
        var5 = 10;
        var5 = var8[var5];
        var5 = var6.bind(var0)(var5);
        var1.icon = var5;
        var7 = _closure1_slot0;
        var4 = 11;
        var4 = var8[var4];
        var4 = var7.bind(var0)(var4);
        var4 = var4.ShieldIcon;
        var1.IconComponent = var4;
        var4 = 'text-brand';
        var1.iconColor = var4;
        var4 = 12;
        var5 = var8[var4];
        var5 = var7.bind(var0)(var5);
        var6 = var5.intl;
        var5 = var6.string;
        var4 = var8[var4];
        var4 = var7.bind(var0)(var4);
        var4 = var4.t;
        var4 = var4.gFsTKu;
        var4 = var5.bind(var6)(var4);
        var1.content = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.handleSuccess = var3;
    var3 = function() {
        var6 = _closure1_slot0;
        var7 = _closure1_slot2;
        var0 = 13;
        var1 = var7[var0];
        var0 = undefined;
        var3 = var6.bind(var0)(var1);
        var2 = var3.presentError;
        var1 = 12;
        var4 = var7[var1];
        var4 = var6.bind(var0)(var4);
        var5 = var4.intl;
        var4 = var5.string;
        var1 = var7[var1];
        var1 = var6.bind(var0)(var1);
        var1 = var1.t;
        var1 = var1.R0RpRX;
        var1 = var4.bind(var5)(var1);
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.handleError = var3;
    var1 = function arg0() {
        _fun62299: for (var _fun62299_ip = 0;;) switch (_fun62299_ip) {
            case 0:
                var2 = arg0;
                var7 = var2.channelId;
                var _closure2_slot0 = var7;
                var6 = var2.messageId;
                var _closure2_slot1 = var6;
                var18 = var2.isReportFalsePositiveLoading;
                var22 = var2.attachmentPreview;
                var19 = var2.embedPreview;
                var1 = var2.onConfirmPress;
                var _closure2_slot2 = var1;
                var5 = var2.analyticsContext;
                var _closure2_slot3 = var5;
                var2 = _closure1_slot12;
                var3 = undefined;
                var12 = var2.bind(var3)();
                var4 = _closure1_slot3;
                var9 = var4.useCallback;
                var8 = new Array(3);
                var8[0] = var7;
                var8[1] = var6;
                var8[2] = var5;
                var2 = function() { // Environment: var0
                    var7 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var6 = 14;
                    var2 = var3[var6];
                    var0 = undefined;
                    var5 = var7.bind(var0)(var2);
                    var4 = var5.trackMediaRedactionAction;
                    var2 = {};
                    var6 = var3[var6];
                    var6 = var7.bind(var0)(var6);
                    var6 = var6.TrackMediaRedactionActionType;
                    var6 = var6.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CANCEL;
                    var2.action = var6;
                    var7 = _closure2_slot0;
                    var2.channelId = var7;
                    var7 = _closure2_slot1;
                    var2.messageId = var7;
                    var6 = _closure2_slot3;
                    var2.context = var6;
                    var2 = var4.bind(var5)(var2);
                    var2 = _closure1_slot1;
                    var1 = 8;
                    var1 = var3[var1];
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.hideActionSheet;
                    var1 = var1.bind(var2)();
                    return var0;
                };
                var15 = var9.bind(var4)(var2, var8);
                var8 = var4.useCallback;
                var2 = new Array(4);
                var2[0] = var7;
                var2[1] = var6;
                var2[2] = var5;
                var2[3] = var1;
                var1 = function() { // Environment: var0
                    _fun62301: for (var _fun62301_ip = 0;;) switch (_fun62301_ip) {
                        case 0:
                            var1 = _closure2_slot2;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun62301_ip = 23;
                                continue _fun62301
                            }
                        case 13:
                            var1 = _closure2_slot2;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 23:
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var5 = 14;
                            var1 = var7[var5];
                            var0 = undefined;
                            var3 = var6.bind(var0)(var1);
                            var2 = var3.trackMediaRedactionAction;
                            var1 = {};
                            var5 = var7[var5];
                            var5 = var6.bind(var0)(var5);
                            var5 = var5.TrackMediaRedactionActionType;
                            var5 = var5.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CONFIRM;
                            var1.action = var5;
                            var5 = _closure2_slot0;
                            var1.channelId = var5;
                            var5 = _closure2_slot1;
                            var1.messageId = var5;
                            var4 = _closure2_slot3;
                            var1.context = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var17 = var8.bind(var4)(var1, var2);
                var2 = var4.useEffect;
                var1 = new Array(3);
                var1[0] = var7;
                var1[1] = var6;
                var1[2] = var5;
                var0 = function() { // Environment: var0
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 14;
                    var1 = var6[var4];
                    var0 = undefined;
                    var3 = var5.bind(var0)(var1);
                    var2 = var3.trackMediaRedactionAction;
                    var1 = {};
                    var4 = var6[var4];
                    var4 = var5.bind(var0)(var4);
                    var4 = var4.TrackMediaRedactionActionType;
                    var4 = var4.EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED;
                    var1.action = var4;
                    var5 = _closure2_slot0;
                    var1.channelId = var5;
                    var5 = _closure2_slot1;
                    var1.messageId = var5;
                    var4 = _closure2_slot3;
                    var1.context = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var0 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot7;
                var23 = _closure1_slot0;
                var14 = _closure1_slot2;
                var0 = 15;
                var0 = var14[var0];
                var0 = var23.bind(var3)(var0);
                var1 = var0.BottomSheet;
                var0 = {};
                var4 = true;
                var0.startExpanded = var4;
                var6 = _closure1_slot8;
                var5 = _closure1_slot4;
                var4 = {};
                var8 = _closure1_slot6;
                var7 = {};
                var9 = var12.content;
                var7.style = var9;
                var9 = var12.contentContainer;
                var7.contentContainerStyle = var9;
                var10 = 16;
                var9 = var14[var10];
                var9 = var23.bind(var3)(var9);
                var13 = var9.Text;
                var9 = {};
                var16 = var12.heading;
                var9.style = var16;
                var16 = 'heading-lg/bold';
                var9.variant = var16;
                var20 = 12;
                var16 = var14[var20];
                var16 = var23.bind(var3)(var16);
                var24 = var16.intl;
                var21 = var24.string;
                var16 = var14[var20];
                var16 = var23.bind(var3)(var16);
                var16 = var16.t;
                var16 = var16.TPpVkI;
                var16 = var21.bind(var24)(var16);
                var9.children = var16;
                var13 = var2.bind(var3)(var13, var9);
                var9 = new Array(4);
                var9[0] = var13;
                var10 = var14[var10];
                var10 = var23.bind(var3)(var10);
                var13 = var10.Text;
                var10 = {};
                var16 = 'text-sm/normal';
                var10.variant = var16;
                var16 = var14[var20];
                var16 = var23.bind(var3)(var16);
                var21 = var16.intl;
                var16 = var21.string;
                var14 = var14[var20];
                var14 = var23.bind(var3)(var14);
                var14 = var14.t;
                var14 = var14["z4du/I"];
                var14 = var16.bind(var21)(var14);
                var10.children = var14;
                var10 = var2.bind(var3)(var13, var10);
                var9[1] = var10;
                var10 = null;
                var13 = var10 != var22;
                if (!var13) {
                    _fun62299_ip = 475;
                    continue _fun62299
                }
            case 454:
                var21 = _closure1_slot7;
                var16 = _closure1_slot10;
                var14 = {};
                var14.attachment = var22;
                var13 = var21.bind(var3)(var16, var14);
            case 475:
                var9[2] = var13;
                var10 = var10 != var19;
                if (!var10) {
                    _fun62299_ip = 507;
                    continue _fun62299
                }
            case 486:
                var16 = _closure1_slot7;
                var14 = _closure1_slot9;
                var13 = {};
                var13.embed = var19;
                var10 = var16.bind(var3)(var14, var13);
            case 507:
                var9[3] = var10;
                var7.children = var9;
                var8 = var6.bind(var3)(var8, var7);
                var7 = new Array(2);
                var7[0] = var8;
                var10 = _closure1_slot8;
                var9 = _closure1_slot4;
                var8 = {};
                var12 = var12.footer;
                var8.style = var12;
                var14 = _closure1_slot7;
                var19 = _closure1_slot0;
                var16 = _closure1_slot2;
                var12 = 17;
                var11 = var16[var12];
                var11 = var19.bind(var3)(var11);
                var13 = var11.Button;
                var11 = {
                    'variant': 'primary',
                    'size': 'md'
                };
                var11.disabled = var18;
                var11.loading = var18;
                var18 = var16[var20];
                var18 = var19.bind(var3)(var18);
                var22 = var18.intl;
                var21 = var22.string;
                var18 = var16[var20];
                var18 = var19.bind(var3)(var18);
                var18 = var18.t;
                var18 = var18["cY+Oob"];
                var18 = var21.bind(var22)(var18);
                var11.text = var18;
                var11.onPress = var17;
                var13 = var14.bind(var3)(var13, var11);
                var11 = new Array(2);
                var11[0] = var13;
                var12 = var16[var12];
                var12 = var19.bind(var3)(var12);
                var13 = var12.Button;
                var12 = {
                    'variant': 'secondary',
                    'size': 'md'
                };
                var17 = var16[var20];
                var17 = var19.bind(var3)(var17);
                var18 = var17.intl;
                var17 = var18.string;
                var16 = var16[var20];
                var16 = var19.bind(var3)(var16);
                var16 = var16.t;
                var16 = var16["ETE/oC"];
                var16 = var17.bind(var18)(var16);
                var12.text = var16;
                var12.onPress = var15;
                var12 = var14.bind(var3)(var13, var12);
                var11[1] = var12;
                var8.children = var11;
                var8 = var10.bind(var3)(var9, var8);
                var7[1] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.ExplicitMediaFalsePositiveActionSheet = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 4012, 7769, 1297, 671, 4888, 3279, 3150, 5502, 5501, 1234, 3149, 4258, 4933, 3942, 4084, 2]);