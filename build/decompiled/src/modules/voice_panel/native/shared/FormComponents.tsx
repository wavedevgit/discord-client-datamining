// modules/voice_panel/native/shared/FormComponents.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun66444: for (var _fun66444_ip = 0;;) switch (_fun66444_ip) {
            case 0:
                var0 = arg0;
                var16 = var0.muteDeafenIconState;
                var13 = var0.videoIconState;
                var0 = _closure1_slot7;
                var3 = undefined;
                var12 = var0.bind(var3)();
                var2 = _closure1_slot6;
                var1 = _closure1_slot1;
                var0 = _closure1_slot2;
                var6 = 5;
                var0 = var0[var6];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var4 = var12.voiceBadgesContainer;
                var0.style = var4;
                var5 = null;
                var4 = var5 != var16;
                var7 = null;
                if (!var4) {
                    _fun66444_ip = 193;
                    continue _fun66444
                }
            case 75:
                var10 = _closure1_slot5;
                var8 = _closure1_slot1;
                var18 = _closure1_slot2;
                var4 = var18[var6];
                var8 = var8.bind(var3)(var4);
                var4 = {};
                var11 = var12.iconWrapper;
                var4.style = var11;
                var15 = _closure1_slot5;
                var17 = _closure1_slot0;
                var11 = 7;
                var11 = var18[var11];
                var11 = var17.bind(var3)(var11);
                var14 = var11.MuteDeafenIcon;
                var11 = {};
                var11.state = var16;
                var16 = 8;
                var16 = var18[var16];
                var16 = var17.bind(var3)(var16);
                var16 = var16.IconSizes;
                var16 = var16.SMALL;
                var11.size = var16;
                var16 = var12.icon;
                var11.style = var16;
                var11 = var15.bind(var3)(var14, var11);
                var4.children = var11;
                var7 = var10.bind(var3)(var8, var4);
            case 193:
                var4 = new Array(2);
                var4[0] = var7;
                var7 = var5 != var13;
                var5 = null;
                if (!var7) {
                    _fun66444_ip = 328;
                    continue _fun66444
                }
            case 210:
                var8 = _closure1_slot5;
                var7 = _closure1_slot1;
                var15 = _closure1_slot2;
                var6 = var15[var6];
                var7 = var7.bind(var3)(var6);
                var6 = {};
                var10 = var12.iconWrapper;
                var6.style = var10;
                var11 = _closure1_slot5;
                var14 = _closure1_slot0;
                var9 = 7;
                var9 = var15[var9];
                var9 = var14.bind(var3)(var9);
                var10 = var9.VideoIcon;
                var9 = {};
                var9.state = var13;
                var13 = 8;
                var13 = var15[var13];
                var13 = var14.bind(var3)(var13);
                var13 = var13.IconSizes;
                var13 = var13.SMALL;
                var9.size = var13;
                var12 = var12.icon;
                var9.style = var12;
                var9 = var11.bind(var3)(var10, var9);
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 328:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot8 = var0;
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
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot5 = var6;
    var3 = var3.jsxs;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 16;
    var8.marginHorizontal = var9;
    var3.container = var8;
    var8 = {};
    var9 = 'row';
    var8.flexDirection = var9;
    var3.voiceBadgesContainer = var8;
    var8 = {
        'marginLeft': 8,
        'padding': 6
    };
    var9 = 4;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_SURFACE_HIGH;
    var8.backgroundColor = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.round;
    var8.borderRadius = var11;
    var3.iconWrapper = var8;
    var8 = {
        'width': 16,
        'height': 16
    };
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.INTERACTIVE_TEXT_DEFAULT;
    var8.tintColor = var9;
    var3.icon = var8;
    var8 = {};
    var9 = 0.5;
    var8.opacity = var9;
    var3.notConnectedAvatar = var8;
    var8 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'gap': 4
    };
    var3.memberRow = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = 27;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/voice_panel/native/shared/FormComponents.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        var2 = arg0;
        var6 = var2.style;
        var0 = null;
        var1 = Object.create(var0);
        var0 = 0;
        var1.style = var0;
        var12 = {};
        var11 = var2;
        var10 = var1;
        var11 = copyDataProperties(var12, var11, var10);
        var0 = _closure1_slot7;
        var3 = undefined;
        var5 = var0.bind(var3)();
        var2 = _closure1_slot5;
        var1 = _closure1_slot1;
        var8 = _closure1_slot2;
        var0 = 5;
        var0 = var8[var0];
        var1 = var1.bind(var3)(var0);
        var0 = {};
        var9 = var5.container;
        var5 = new Array(2);
        var5[0] = var9;
        var5[1] = var6;
        var0.style = var5;
        var6 = _closure1_slot5;
        var5 = _closure1_slot0;
        var4 = 6;
        var4 = var8[var4];
        var4 = var5.bind(var3)(var4);
        var5 = var4.TableRowGroup;
        var4 = {};
        var12 = var4;
        var7 = copyDataProperties(var12, var11);
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.VoicePanelFormSection = var3;
    var1 = function arg0() {
        _fun66446: for (var _fun66446_ip = 0;;) switch (_fun66446_ip) {
            case 0:
                var1 = arg0;
                var16 = var1.user;
                var _closure2_slot0 = var16;
                var20 = var1.channelId;
                var _closure2_slot1 = var20;
                var0 = var1.selfStream;
                var3 = undefined;
                if (!(var0 === var3)) {
                    _fun66446_ip = 37;
                    continue _fun66446
                }
            case 35:
                var0 = false;
            case 37:
                var _closure2_slot2 = var0;
                var15 = var1.nick;
                var24 = var1.guildId;
                var18 = var1.notConnected;
                if (!(var18 === var3)) {
                    _fun66446_ip = 64;
                    continue _fun66446
                }
            case 62:
                var18 = false;
            case 64:
                var5 = var1.showRing;
                var13 = var1.showSecureFramesUI;
                if (!(var13 === var3)) {
                    _fun66446_ip = 82;
                    continue _fun66446
                }
            case 80:
                var13 = false;
            case 82:
                var _closure2_slot3 = var3;
                var _closure2_slot4 = var3;
                var _closure2_slot5 = var3;
                var1 = _closure1_slot7;
                var12 = var1.bind(var3)();
                var17 = _closure1_slot1;
                var23 = _closure1_slot2;
                var1 = 9;
                var1 = var23[var1];
                var1 = var17.bind(var3)(var1);
                var1 = var1.bind(var3)();
                var1 = var1.analyticsLocations;
                _closure2_slot3 = var1;
                var22 = _closure1_slot0;
                var2 = 10;
                var4 = var23[var2];
                var7 = var22.bind(var3)(var4);
                var6 = var7.useMuteDeafenIconState;
                var4 = var16.id;
                var14 = var6.bind(var7)(var4, var24);
                var2 = var23[var2];
                var6 = var22.bind(var3)(var2);
                var4 = var6.useVideoIconState;
                var2 = var16.id;
                var11 = var4.bind(var6)(var2, var24);
                var21 = var16.id;
                _closure2_slot4 = var21;
                var2 = 11;
                var2 = var23[var2];
                var6 = var22.bind(var3)(var2);
                var4 = var6.useIsUserSecureFramesVerified;
                var2 = {};
                var2.userId = var21;
                var2.channelId = var20;
                var10 = var4.bind(var6)(var2);
                var2 = 12;
                var2 = var23[var2];
                var6 = var22.bind(var3)(var2);
                var4 = var6.useCanRing;
                var2 = 'MemberRowItem';
                var4 = var4.bind(var6)(var16, var2);
                var2 = 13;
                var2 = var23[var2];
                var6 = var17.bind(var3)(var2);
                var2 = {};
                var7 = var16.id;
                var2.userId = var7;
                var2.guildId = var24;
                var19 = var6.bind(var3)(var2);
                var2 = 14;
                var2 = var23[var2];
                var7 = var22.bind(var3)(var2);
                var6 = var7.useDisplayNameStylesFont;
                var2 = {};
                var2.displayNameStyles = var19;
                var19 = var6.bind(var7)(var2);
                var6 = _closure1_slot3;
                var7 = var6.useCallback;
                var2 = new Array(3);
                var2[0] = var21;
                var2[1] = var20;
                var2[2] = var1;
                var1 = function() { // Environment: var8
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 15;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = {};
                    var4 = _closure2_slot4;
                    var1.userId = var4;
                    var4 = _closure2_slot1;
                    var1.channelId = var4;
                    var4 = true;
                    var1.isVoiceContext = var4;
                    var3 = _closure2_slot3;
                    var1.sourceAnalyticsLocations = var3;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var7 = var7.bind(var6)(var1, var2);
                var1 = 16;
                var1 = var23[var1];
                var21 = var22.bind(var3)(var1);
                var20 = var21.useStateFromStores;
                var1 = _closure1_slot4;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var8
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.getStreamerActivityByUserId;
                    var1 = _closure2_slot4;
                    var0 = _closure1_slot4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var20 = var20.bind(var21)(var2, var1);
                _closure2_slot5 = var20;
                var2 = var6.useMemo;
                var1 = new Array(2);
                var1[0] = var20;
                var1[1] = var0;
                var0 = function() { // Environment: var8
                    _fun66449: for (var _fun66449_ip = 0;;) switch (_fun66449_ip) {
                        case 0:
                            var1 = _closure2_slot2;
                            var12 = null;
                            var0 = null;
                            if (!var1) {
                                _fun66449_ip = 258;
                                continue _fun66449
                            }
                        case 17:
                            var1 = _closure2_slot5;
                            if (!(var12 == var1)) {
                                _fun66449_ip = 90;
                                continue _fun66449
                            }
                        case 25:
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var1 = 19;
                            var2 = var6[var1];
                            var4 = undefined;
                            var2 = var5.bind(var4)(var2);
                            var3 = var2.intl;
                            var2 = var3.string;
                            var1 = var6[var1];
                            var1 = var5.bind(var4)(var1);
                            var1 = var1.t;
                            var1 = var1.eXan7B;
                            var1 = var2.bind(var3)(var1);
                            _fun66449_ip = 255;
                            continue _fun66449;
                        case 90:
                            var5 = _closure1_slot5;
                            var7 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var2 = 18;
                            var2 = var10[var2];
                            var4 = undefined;
                            var2 = var7.bind(var4)(var2);
                            var3 = var2.Text;
                            var2 = {
                                'variant': 'text-xs/medium',
                                'color': 'text-muted',
                                'lineClamp': 1
                            };
                            var6 = 19;
                            var8 = var10[var6];
                            var8 = var7.bind(var4)(var8);
                            var9 = var8.intl;
                            var8 = var9.format;
                            var6 = var10[var6];
                            var6 = var7.bind(var4)(var6);
                            var6 = var6.t;
                            var7 = var6["0wJXSh"];
                            var6 = {};
                            var10 = _closure2_slot5;
                            var10 = var10.details;
                            if (!(var12 != var10)) {
                                _fun66449_ip = 214;
                                continue _fun66449
                            }
                        case 196:
                            var10 = _closure2_slot5;
                            var12 = var10.details;
                            var10 = '';
                            if (!(var10 === var12)) {
                                _fun66449_ip = 225;
                                continue _fun66449
                            }
                        case 214:
                            var10 = _closure2_slot5;
                            var10 = var10.name;
                            _fun66449_ip = 235;
                            continue _fun66449;
                        case 225:
                            var11 = _closure2_slot5;
                            var10 = var11.details;
                        case 235:
                            var6.name = var10;
                            var6 = var8.bind(var9)(var7, var6);
                            var2.children = var6;
                            var1 = var5.bind(var4)(var3, var2);
                        case 255:
                            var0 = var1;
                        case 258:
                            return var0;
                    }
                };
                var6 = var2.bind(var6)(var0, var1);
                var2 = _closure1_slot5;
                var0 = 20;
                var0 = var23[var0];
                var0 = var22.bind(var3)(var0);
                var1 = var0.TableRow;
                var0 = {};
                var0.onPress = var7;
                var20 = _closure1_slot5;
                var21 = 21;
                var7 = var23[var21];
                var17 = var17.bind(var3)(var7);
                var7 = {};
                var7.user = var16;
                var7.guildId = var24;
                var21 = var23[var21];
                var21 = var22.bind(var3)(var21);
                var21 = var21.AvatarSizes;
                var21 = var21.REFRESH_MEDIUM_32;
                var7.size = var21;
                var21 = undefined;
                if (!var18) {
                    _fun66446_ip = 534;
                    continue _fun66446
                }
            case 528:
                var21 = var12.notConnectedAvatar;
            case 534:
                var7.style = var21;
                var7 = var20.bind(var3)(var17, var7);
                var0.icon = var7;
                var0.subLabel = var6;
                if (!var5) {
                    _fun66446_ip = 559;
                    continue _fun66446
                }
            case 556:
                if (var4) {
                    _fun66446_ip = 602;
                    continue _fun66446
                }
            case 559:
                var4 = null;
                if (!(var4 == var14)) {
                    _fun66446_ip = 574;
                    continue _fun66446
                }
            case 565:
                var5 = var4 != var11;
                var4 = undefined;
                if (!var5) {
                    _fun66446_ip = 600;
                    continue _fun66446
                }
            case 574:
                var7 = _closure1_slot5;
                var6 = _closure1_slot8;
                var5 = {};
                var5.muteDeafenIconState = var14;
                var5.videoIconState = var11;
                var4 = var7.bind(var3)(var6, var5);
            case 600:
                _fun66446_ip = 714;
                continue _fun66446;
            case 602:
                var7 = _closure1_slot5;
                var17 = _closure1_slot0;
                var20 = _closure1_slot2;
                var5 = 22;
                var5 = var20[var5];
                var5 = var17.bind(var3)(var5);
                var6 = var5.Button;
                var5 = {
                    'size': 'sm',
                    'variant': 'secondary'
                };
                var8 = function() {
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 23;
                    var1 = var1[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.ring;
                    var2 = _closure2_slot1;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var1 = new Array(1);
                    var1[0] = var0;
                    var0 = 'voice_panel_floating_cta';
                    var0 = var3.bind(var4)(var2, var1, var0);
                    return var0;
                };
                var5.onPress = var8;
                var8 = 19;
                var11 = var20[var8];
                var11 = var17.bind(var3)(var11);
                var14 = var11.intl;
                var11 = var14.string;
                var8 = var20[var8];
                var8 = var17.bind(var3)(var8);
                var8 = var8.t;
                var8 = var8.bHa9kN;
                var8 = var11.bind(var14)(var8);
                var5.text = var8;
                var4 = var7.bind(var3)(var6, var5);
            case 714:
                var0.trailing = var4;
                var11 = null;
                if (!(var11 == var15)) {
                    _fun66446_ip = 756;
                    continue _fun66446
                }
            case 725:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var4 = 24;
                var4 = var6[var4];
                var5 = var5.bind(var3)(var4);
                var4 = var5.getName;
                var15 = var4.bind(var5)(var16);
            case 756:
                var6 = _closure1_slot6;
                var5 = _closure1_slot1;
                var17 = _closure1_slot2;
                var4 = 5;
                var4 = var17[var4];
                var5 = var5.bind(var3)(var4);
                var4 = {};
                var7 = var12.memberRow;
                var4.style = var7;
                var14 = _closure1_slot5;
                var8 = _closure1_slot0;
                var7 = 18;
                var7 = var17[var7];
                var7 = var8.bind(var3)(var7);
                var8 = var7.Text;
                var7 = {};
                var17 = 'text-md/semibold';
                var7.variant = var17;
                var17 = 'text-default';
                if (!var18) {
                    _fun66446_ip = 842;
                    continue _fun66446
                }
            case 836:
                var17 = 'text-muted';
            case 842:
                var7.color = var17;
                var17 = var11 != var19;
                if (!var17) {
                    _fun66446_ip = 863;
                    continue _fun66446
                }
            case 853:
                var18 = {};
                var18.fontFamily = var19;
                var17 = var18;
            case 863:
                var7.style = var17;
                var7.children = var15;
                var8 = var14.bind(var3)(var8, var7);
                var7 = new Array(3);
                var7[0] = var8;
                var15 = _closure1_slot5;
                var14 = _closure1_slot1;
                var17 = _closure1_slot2;
                var8 = 25;
                var8 = var17[var8];
                var14 = var14.bind(var3)(var8);
                var8 = {};
                var16 = var16.id;
                var8.userId = var16;
                var8 = var15.bind(var3)(var14, var8);
                var7[1] = var8;
                var8 = null;
                if (!var13) {
                    _fun66446_ip = 995;
                    continue _fun66446
                }
            case 935:
                var8 = null;
                if (!var10) {
                    _fun66446_ip = 995;
                    continue _fun66446
                }
            case 940:
                var11 = _closure1_slot5;
                var10 = _closure1_slot0;
                var13 = _closure1_slot2;
                var9 = 26;
                var9 = var13[var9];
                var9 = var10.bind(var3)(var9);
                var10 = var9.ShieldLockIcon;
                var9 = {};
                var13 = 'xs';
                var9.size = var13;
                var12 = var12.icon;
                var9.style = var12;
                var8 = var11.bind(var3)(var10, var9);
            case 995:
                var7[2] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.label = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.MemberRowItem = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 3571, 33, 1297, 671, 6421, 5327, 8194, 4047, 5690, 8195, 8206, 7991, 3945, 6884, 7314, 566, 6506, 3902, 1234, 4863, 5416, 4045, 7982, 3197, 7340, 8251, 2]);