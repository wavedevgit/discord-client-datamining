// modules/media_viewer/native/components/overlay/MediaModalOverlay.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var5;
    var0 = function(arg0) { // Original name: OverlayMuteButton, environment: var1
        _fun72979: for (var _fun72979_ip = 0;;) switch (_fun72979_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.isMuted;
                var8 = var0.onToggleMute;
                var3 = _closure1_slot7;
                var14 = _closure1_slot0;
                var15 = _closure1_slot2;
                var0 = 5;
                var0 = var15[var0];
                var2 = undefined;
                var0 = var14.bind(var2)(var0);
                var1 = var0.SafeAreaPaddingView;
                var0 = {
                    'left': true,
                    'right': true
                };
                var6 = _closure1_slot7;
                var10 = _closure1_slot1;
                var4 = 6;
                var4 = var15[var4];
                var5 = var10.bind(var2)(var4);
                var4 = {};
                var11 = 'button';
                var4.accessibilityRole = var11;
                var11 = 7;
                var12 = var15[var11];
                var12 = var14.bind(var2)(var12);
                var13 = var12.intl;
                var12 = var13.string;
                var11 = var15[var11];
                var11 = var14.bind(var2)(var11);
                var11 = var11.t;
                var11 = var11.w4m945;
                var11 = var12.bind(var13)(var11);
                var4.accessibilityLabel = var11;
                var12 = _closure1_slot2;
                if (var9) {
                    _fun72979_ip = 157;
                    continue _fun72979
                }
            case 148:
                var9 = 9;
                var9 = var12[var9];
                _fun72979_ip = 164;
                continue _fun72979;
            case 157:
                var11 = 8;
                var9 = var12[var11];
            case 164:
                var9 = var10.bind(var2)(var9);
                var4.source = var9;
                var10 = _closure1_slot1;
                var11 = _closure1_slot2;
                var9 = 4;
                var9 = var11[var9];
                var9 = var10.bind(var2)(var9);
                var9 = var9.unsafe_rawColors;
                var9 = var9.WHITE;
                var4.color = var9;
                var4.onPress = var8;
                var8 = _closure1_slot10;
                var8 = var8.overlayButton;
                var4.style = var8;
                var7 = _closure1_slot10;
                var7 = var7.overlayButtonIcon;
                var4.iconStyle = var7;
                var4 = var6.bind(var2)(var5, var4);
                var0.children = var4;
                var0 = var3.bind(var2)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = function(arg0) { // Original name: OverlayObscureToggleButton, environment: var1
        _fun72980: for (var _fun72980_ip = 0;;) switch (_fun72980_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.spoilerActive;
                var8 = var0.onToggleObscure;
                var3 = _closure1_slot7;
                var14 = _closure1_slot0;
                var15 = _closure1_slot2;
                var0 = 5;
                var0 = var15[var0];
                var2 = undefined;
                var0 = var14.bind(var2)(var0);
                var1 = var0.SafeAreaPaddingView;
                var0 = {
                    'left': true,
                    'right': true
                };
                var6 = _closure1_slot7;
                var10 = _closure1_slot1;
                var4 = 6;
                var4 = var15[var4];
                var5 = var10.bind(var2)(var4);
                var4 = {};
                var11 = 'button';
                var4.accessibilityRole = var11;
                var11 = 7;
                var12 = var15[var11];
                var12 = var14.bind(var2)(var12);
                var13 = var12.intl;
                var12 = var13.string;
                var11 = var15[var11];
                var11 = var14.bind(var2)(var11);
                var11 = var11.t;
                var11 = var11.UIsxUw;
                var11 = var12.bind(var13)(var11);
                var4.accessibilityLabel = var11;
                var12 = _closure1_slot2;
                if (var9) {
                    _fun72980_ip = 159;
                    continue _fun72980
                }
            case 150:
                var9 = 11;
                var9 = var12[var9];
                _fun72980_ip = 166;
                continue _fun72980;
            case 159:
                var11 = 10;
                var9 = var12[var11];
            case 166:
                var9 = var10.bind(var2)(var9);
                var4.source = var9;
                var10 = _closure1_slot1;
                var11 = _closure1_slot2;
                var9 = 4;
                var9 = var11[var9];
                var9 = var10.bind(var2)(var9);
                var9 = var9.unsafe_rawColors;
                var9 = var9.WHITE;
                var4.color = var9;
                var4.onPress = var8;
                var8 = _closure1_slot10;
                var8 = var8.overlayButton;
                var4.style = var8;
                var7 = _closure1_slot10;
                var7 = var7.overlayButtonIcon;
                var4.iconStyle = var7;
                var4 = var6.bind(var2)(var5, var4);
                var0.children = var4;
                var0 = var3.bind(var2)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var0 = function(arg0) { // Original name: MediaModalOverlay, environment: var1
        _fun72981: for (var _fun72981_ip = 0;;) switch (_fun72981_ip) {
            case 0:
                var7 = arg0;
                var0 = var7.getVideoControls;
                var4 = var7.source;
                var2 = var7.index;
                var _closure2_slot0 = var2;
                var3 = undefined;
                var11 = var0.bind(var3)(var2, var4);
                var _closure2_slot1 = var11;
                var6 = _closure1_slot1;
                var9 = _closure1_slot2;
                var5 = 21;
                var5 = var9[var5];
                var5 = var6.bind(var3)(var5);
                var8 = var5.bind(var3)(var2, var4, var11);
                var6 = _closure1_slot0;
                var5 = 23;
                var5 = var9[var5];
                var6 = var6.bind(var3)(var5);
                var5 = var6.useMediaItemSpoilerState;
                var9 = var5.bind(var6)(var2);
                var6 = _closure1_slot3;
                var5 = 1;
                var6 = var6.bind(var3)(var9, var5);
                var5 = 0;
                var6 = var6[var5];
                var10 = _closure1_slot4;
                var9 = var10.useCallback;
                var5 = new Array(1);
                var5[0] = var2;
                var2 = function() { // Environment: var1
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 24;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.toggleSpoiler;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var5 = var9.bind(var10)(var2, var5);
                var10 = _closure1_slot4;
                var9 = var10.useEffect;
                var2 = new Array(1);
                var2[0] = var11;
                var1 = function() { // Environment: var1
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 21;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.setVideoStateControls;
                    var1 = _closure2_slot1;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var1 = var9.bind(var10)(var1, var2);
                var2 = _closure1_slot7;
                var1 = _closure1_slot11;
                var0 = {};
                var14 = var0;
                var13 = var7;
                var7 = copyDataProperties(var14, var13);
                var7 = 'slider';
                var0[var7] = var8;
                var7 = 'source';
                var0[var7] = var4;
                var4 = var4.obscure;
                var7 = null;
                var7 = var7 != var4;
                if (!var7) {
                    _fun72981_ip = 229;
                    continue _fun72981
                }
            case 226:
                var7 = var4;
            case 229:
                var4 = 'obscure';
                var0[var4] = var7;
                var4 = 'spoilerActive';
                var0[var4] = var6;
                var4 = 'toggleObscure';
                var0[var4] = var5;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot14 = var0;
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
    var3 = var11.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = arg3;
    var7 = var3.bind(var0)(var6);
    var _closure1_slot4 = var7;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var8 = var3.StyleSheet;
    var _closure1_slot5 = var8;
    var3 = var3.View;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot7 = var6;
    var6 = var3.jsxs;
    var _closure1_slot8 = var6;
    var3 = var3.Fragment;
    var _closure1_slot9 = var3;
    var6 = var8.create;
    var3 = {};
    var9 = {};
    var14 = var8.absoluteFillObject;
    var15 = var9;
    var10 = copyDataProperties(var15, var14);
    var10 = 'top';
    var9[var10] = var0;
    var12 = 'rgba(0, 0, 0, .8)';
    var10 = 'backgroundColor';
    var9[var10] = var12;
    var3.portraitFooterButtons = var9;
    var9 = {
        'width': 18,
        'height': 18,
        'marginRight': 6
    };
    var3.contextIcon = var9;
    var9 = {
        'position': 'absolute',
        'top': 4294967256,
        'right': 8,
        'display': 'flex',
        'flexDirection': 'row'
    };
    var10 = 4;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_4;
    var9.gap = var10;
    var3.overlayIcons = var9;
    var9 = {
        'width': 20,
        'height': 20
    };
    var3.overlayButtonIcon = var9;
    var9 = {
        'width': 32,
        'height': 32,
        'backgroundColor': 'rgba(0, 0, 0, 0.7)',
        'borderRadius': 16
    };
    var3.overlayButton = var9;
    var3 = var6.bind(var8)(var3);
    var _closure1_slot10 = var3;
    var6 = var7.memo;
    var3 = function(arg0) { // Environment: var1
        _fun72984: for (var _fun72984_ip = 0;;) switch (_fun72984_ip) {
            case 0:
                var0 = arg0;
                var17 = var0.slider;
                var14 = var0.onClose;
                var12 = var0.overlayEnabled;
                var16 = var0.syncer;
                var25 = var0.disableDownload;
                var24 = var0.disableMediaOverlayButton;
                var21 = var0.shareable;
                var20 = var0.contextName;
                var19 = var0.contextIcon;
                var15 = var0.source;
                var23 = var0.obscure;
                var27 = var0.spoilerActive;
                var26 = var0.toggleObscure;
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 12;
                var1 = var4[var0];
                var3 = undefined;
                var5 = var2.bind(var3)(var1);
                var1 = var5.useOverlayLayoutDriver;
                var28 = var1.bind(var5)();
                var0 = var4[var0];
                var1 = var2.bind(var3)(var0);
                var0 = var1.useFooterLayoutAnimation;
                var18 = var0.bind(var1)(var28);
                var5 = _closure1_slot4;
                var1 = var5.useState;
                var0 = false;
                var5 = var1.bind(var5)(var0);
                var1 = _closure1_slot3;
                var0 = 2;
                var0 = var1.bind(var3)(var5, var0);
                var1 = 0;
                var7 = var0[var1];
                var6 = 1;
                var13 = var0[var6];
                var0 = 13;
                var0 = var4[var0];
                var5 = var2.bind(var3)(var0);
                var1 = var5.useMediaPlayerMutedStore;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.isMuted;
                    return var0;
                };
                var29 = var1.bind(var5)(var0);
                var0 = 14;
                var1 = var4[var0];
                var5 = var2.bind(var3)(var1);
                var1 = var5.useOrientation;
                var1 = var1.bind(var5)();
                var0 = var4[var0];
                var0 = var2.bind(var3)(var0);
                var0 = var0.OrientationType;
                var0 = var0.LANDSCAPE;
                var10 = var1 === var0;
                var22 = null;
                if (!(var22 == var17)) {
                    _fun72984_ip = 287;
                    continue _fun72984
                }
            case 264:
                var0 = var16.sources;
                var0 = var0.length;
                var0 = var0 > var6;
                var8 = null;
                if (!var0) {
                    _fun72984_ip = 508;
                    continue _fun72984
                }
            case 287:
                var2 = _closure1_slot8;
                var5 = _closure1_slot0;
                var11 = _closure1_slot2;
                var0 = 5;
                var0 = var11[var0];
                var0 = var5.bind(var3)(var0);
                var1 = var0.SafeAreaPaddingView;
                var0 = {
                    'bottom': true,
                    'left': true,
                    'right': true
                };
                var4 = {};
                var30 = 8;
                var4.paddingTop = var30;
                var0.style = var4;
                var4 = 15;
                var4 = var11[var4];
                var5 = var5.bind(var3)(var4);
                var4 = var5.isIOS;
                var5 = var4.bind(var5)();
                if (!var5) {
                    _fun72984_ip = 425;
                    continue _fun72984
                }
            case 370:
                var30 = _closure1_slot7;
                var11 = _closure1_slot1;
                var31 = _closure1_slot2;
                var4 = 16;
                var4 = var31[var4];
                var11 = var11.bind(var3)(var4);
                var4 = {};
                var31 = 'dark';
                var4.blurTheme = var31;
                var31 = _closure1_slot5;
                var31 = var31.absoluteFill;
                var4.style = var31;
                var5 = var30.bind(var3)(var11, var4);
            case 425:
                var4 = new Array(3);
                var4[0] = var5;
                var4[1] = var17;
                var5 = var16.sources;
                var5 = var5.length;
                var6 = var5 > var6;
                var5 = null;
                if (!var6) {
                    _fun72984_ip = 494;
                    continue _fun72984
                }
            case 457:
                var30 = _closure1_slot7;
                var11 = _closure1_slot1;
                var31 = _closure1_slot2;
                var6 = 17;
                var6 = var31[var6];
                var11 = var11.bind(var3)(var6);
                var6 = {};
                var6.syncer = var16;
                var5 = var30.bind(var3)(var11, var6);
            case 494:
                var4[2] = var5;
                var0.children = var4;
                var8 = var2.bind(var3)(var1, var0);
            case 508:
                var2 = _closure1_slot8;
                var1 = _closure1_slot9;
                var0 = {};
                var6 = _closure1_slot7;
                var5 = _closure1_slot0;
                var11 = _closure1_slot2;
                var4 = 18;
                var4 = var11[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.MediaModalOverlayHeader;
                var4 = {};
                var4.animationDriver = var28;
                var4.disableDownload = var25;
                var4.disableMediaOverlayButton = var24;
                var4.source = var15;
                var4.shareable = var21;
                var4.contextName = var20;
                var4.contextIcon = var19;
                var4.onClose = var14;
                var19 = var15.channelId;
                var4.channelId = var19;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var6 = _closure1_slot1;
                var5 = 19;
                var5 = var11[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.View;
                var5 = {};
                var11 = _closure1_slot10;
                var19 = var11.portraitFooterButtons;
                var11 = new Array(3);
                var11[0] = var19;
                var11[1] = var18;
                var18 = {};
                var19 = 'transparent';
                if (!var10) {
                    _fun72984_ip = 681;
                    continue _fun72984
                }
            case 666:
                var20 = _closure1_slot10;
                var20 = var20.portraitFooterButtons;
                var19 = var20.backgroundColor;
            case 681:
                var18.backgroundColor = var19;
                var11[2] = var18;
                var5.style = var11;
                var11 = !var7;
                if (!var11) {
                    _fun72984_ip = 740;
                    continue _fun72984
                }
            case 699:
                var19 = _closure1_slot7;
                var18 = _closure1_slot1;
                var20 = _closure1_slot2;
                var7 = 20;
                var7 = var20[var7];
                var18 = var18.bind(var3)(var7);
                var7 = {};
                var20 = var15.description;
                var7.description = var20;
                var11 = var19.bind(var3)(var18, var7);
            case 740:
                var7 = new Array(3);
                var7[0] = var11;
                if (!(var22 == var17)) {
                    _fun72984_ip = 760;
                    continue _fun72984
                }
            case 752:
                var11 = null;
                if (!var23) {
                    _fun72984_ip = 896;
                    continue _fun72984
                }
            case 760:
                var20 = _closure1_slot8;
                var19 = _closure1_slot6;
                var18 = {};
                var21 = _closure1_slot10;
                var21 = var21.overlayIcons;
                var18.style = var21;
                var24 = var22 != var17;
                if (!var24) {
                    _fun72984_ip = 843;
                    continue _fun72984
                }
            case 791:
                var28 = _closure1_slot7;
                var25 = _closure1_slot12;
                var21 = {};
                var21.isMuted = var29;
                var30 = _closure1_slot0;
                var31 = _closure1_slot2;
                var29 = 21;
                var29 = var31[var29];
                var29 = var30.bind(var3)(var29);
                var29 = var29.toggleMuted;
                var21.onToggleMute = var29;
                var24 = var28.bind(var3)(var25, var21);
            case 843:
                var21 = new Array(2);
                var21[0] = var24;
                var22 = null;
                if (!var23) {
                    _fun72984_ip = 882;
                    continue _fun72984
                }
            case 856:
                var25 = _closure1_slot7;
                var24 = _closure1_slot13;
                var23 = {};
                var23.spoilerActive = var27;
                var23.onToggleObscure = var26;
                var22 = var25.bind(var3)(var24, var23);
            case 882:
                var21[1] = var22;
                var18.children = var21;
                var11 = var20.bind(var3)(var19, var18);
            case 896:
                var7[1] = var11;
                if (var10) {
                    _fun72984_ip = 993;
                    continue _fun72984
                }
            case 903:
                var11 = _closure1_slot7;
                var10 = _closure1_slot0;
                var18 = _closure1_slot2;
                var9 = 22;
                var9 = var18[var9];
                var9 = var10.bind(var3)(var9);
                var10 = var9.MediaModalOverlayFooter;
                var9 = {};
                var9.sliderElement = var17;
                var9.syncer = var16;
                var16 = var15.guildId;
                var9.guildId = var16;
                var16 = var15.channelId;
                var9.channelId = var16;
                var15 = var15.messageId;
                var9.messageId = var15;
                var9.onClose = var14;
                var9.onFullViewToggled = var13;
                var9.overlayEnabled = var12;
                var8 = var11.bind(var3)(var10, var9);
            case 993:
                var7[2] = var8;
                var5.children = var7;
                var5 = var2.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var3 = var6.bind(var7)(var3);
    var _closure1_slot11 = var3;
    var3 = 26;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/media_viewer/native/components/overlay/MediaModalOverlay.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: MediaModalOverlayGuard, environment: var1
        _fun72986: for (var _fun72986_ip = 0;;) switch (_fun72986_ip) {
            case 0:
                var5 = arg0;
                var3 = var5.syncer;
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 25;
                var0 = var4[var0];
                var4 = undefined;
                var2 = var2.bind(var4)(var0);
                var0 = var2.useSelectedMediaSource;
                var3 = var0.bind(var2)(var3);
                var2 = _closure1_slot3;
                var0 = 2;
                var2 = var2.bind(var4)(var3, var0);
                var0 = 0;
                var6 = var2[var0];
                var0 = 1;
                var7 = var2[var0];
                var0 = null;
                var2 = var0 == var7;
                if (var2) {
                    _fun72986_ip = 124;
                    continue _fun72986
                }
            case 80:
                var3 = _closure1_slot7;
                var2 = _closure1_slot14;
                var1 = {};
                var9 = var1;
                var8 = var5;
                var5 = copyDataProperties(var9, var8);
                var5 = 'source';
                var1[var5] = var7;
                var5 = 'index';
                var1[var5] = var6;
                var0 = var3.bind(var4)(var2, var1);
            case 124:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 33, 671, 4697, 6741, 1234, 9143, 8458, 9144, 9145, 9146, 8809, 7779, 478, 4032, 9147, 9149, 3679, 9164, 8808, 9168, 9148, 8802, 8803, 2]);