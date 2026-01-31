// modules/media_viewer/native/components/MediaModal.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var8 = metroImportAll;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var8;
    var _closure1_slot3 = var5;
    var0 = global;
    var9 = var0.Object;
    var6 = var9.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var9)(var2, var0, var3);
    var3 = 0;
    var6 = var5[var3];
    var0 = undefined;
    var6 = var8.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var6 = 1;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var8 = var6.Image;
    var _closure1_slot5 = var8;
    var8 = var6.Modal;
    var _closure1_slot6 = var8;
    var8 = var6.StyleSheet;
    var _closure1_slot7 = var8;
    var6 = var6.View;
    var _closure1_slot8 = var6;
    var6 = 2;
    var6 = var5[var6];
    var6 = var7.bind(var0)(var6);
    var _closure1_slot9 = var6;
    var6 = 3;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var7 = var6.Base64JPEGPrefix;
    var _closure1_slot10 = var7;
    var7 = var6.Base64GIFPrefix;
    var _closure1_slot11 = var7;
    var6 = var6.AppStates;
    var _closure1_slot12 = var6;
    var6 = 4;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.jsx;
    var _closure1_slot13 = var6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.createElement;
    var _closure1_slot14 = var3;
    var3 = 28;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/media_viewer/native/components/MediaModal.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: MediaModal, environment: var1
        _fun70378: for (var _fun70378_ip = 0;;) switch (_fun70378_ip) {
            case 0:
                var3 = arg0;
                var12 = var3.originLayout;
                var15 = var3.initialIndex;
                var4 = undefined;
                if (!(var15 === var4)) {
                    _fun70378_ip = 25;
                    continue _fun70378
                }
            case 23:
                var15 = 0;
            case 25:
                var1 = var3.isRNModal;
                if (!(var1 === var4)) {
                    _fun70378_ip = 37;
                    continue _fun70378
                }
            case 35:
                var1 = false;
            case 37:
                var11 = var3.swipeVelocityThreshold;
                if (!(var11 === var4)) {
                    _fun70378_ip = 53;
                    continue _fun70378
                }
            case 47:
                var11 = 1000;
            case 53:
                var5 = var3.onClose;
                var20 = var3.shareable;
                if (!(var20 === var4)) {
                    _fun70378_ip = 71;
                    continue _fun70378
                }
            case 69:
                var20 = true;
            case 71:
                var _closure2_slot0 = var20;
                var19 = var3.disableDownload;
                var _closure2_slot1 = var19;
                var18 = var3.disableMediaOverlayButton;
                var _closure2_slot2 = var18;
                var17 = var3.contextName;
                var _closure2_slot3 = var17;
                var2 = var3.contextIcon;
                var _closure2_slot4 = var2;
                var14 = var3.onEndReached;
                var10 = var3.onEndReachedThreshold;
                var _closure2_slot5 = var4;
                var _closure2_slot6 = var4;
                var _closure2_slot7 = var4;
                var _closure2_slot8 = var4;
                var _closure2_slot9 = var4;
                var _closure2_slot10 = var4;
                var _closure2_slot11 = var4;
                var _closure2_slot12 = var4;
                var3 = _closure1_slot0;
                var13 = _closure1_slot3;
                var6 = 5;
                var6 = var13[var6];
                var6 = var3.bind(var4)(var6);
                var9 = var6.MediaViewerSourcesStore;
                var7 = var9.useField;
                var6 = 'sources';
                var16 = var7.bind(var9)(var6);
                var6 = 6;
                var6 = var13[var6];
                var9 = var3.bind(var4)(var6);
                var7 = var9.useMediaViewerSyncer;
                var6 = {};
                var6.sources = var16;
                var6.initialIndex = var15;
                var6.onEndReached = var14;
                var6.onEndReachedThreshold = var10;
                var9 = var7.bind(var9)(var6);
                _closure2_slot5 = var9;
                var6 = 7;
                var6 = var13[var6];
                var10 = var3.bind(var4)(var6);
                var7 = var10.useVideoStateStore;
                var6 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.paused;
                    return var0;
                };
                var14 = var7.bind(var10)(var6);
                _closure2_slot6 = var14;
                var7 = _closure1_slot4;
                var15 = var7.useEffect;
                var10 = function() { // Environment: var0
                    var0 = function() { // Environment: var0
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot3;
                        var0 = 5;
                        var1 = var1[var0];
                        var0 = undefined;
                        var1 = var2.bind(var0)(var1);
                        var2 = var1.MediaViewerSourcesStore;
                        var1 = var2.resetState;
                        var1 = var1.bind(var2)();
                        return var0;
                    };
                    return var0;
                };
                var6 = new Array(0);
                var6 = var15.bind(var7)(var10, var6);
                var6 = 8;
                var6 = var13[var6];
                var16 = var3.bind(var4)(var6);
                var15 = var16.useStateFromStores;
                var6 = _closure1_slot9;
                var10 = new Array(1);
                var10[0] = var6;
                var6 = function() { // Environment: var0
                    var1 = _closure1_slot9;
                    var0 = var1.getState;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var6 = var15.bind(var16)(var10, var6);
                _closure2_slot7 = var6;
                var10 = var7.useRef;
                var10 = var10.bind(var7)(var6);
                _closure2_slot8 = var10;
                var10 = var7.useRef;
                var10 = var10.bind(var7)(var14);
                _closure2_slot9 = var10;
                var15 = var7.useEffect;
                var10 = new Array(2);
                var10[0] = var6;
                var10[1] = var14;
                var6 = function() { // Environment: var0
                    _fun70383: for (var _fun70383_ip = 0;;) switch (_fun70383_ip) {
                        case 0:
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot3;
                            var0 = 9;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var3.bind(var0)(var1);
                            var1 = var3.isIOS;
                            var1 = var1.bind(var3)();
                            if (!var1) {
                                _fun70383_ip = 58;
                                continue _fun70383
                            }
                        case 38:
                            var4 = _closure2_slot8;
                            var4 = var4.current;
                            var3 = _closure2_slot7;
                            var1 = var4 !== var3;
                        case 58:
                            if (!var1) {
                                _fun70383_ip = 278;
                                continue _fun70383
                            }
                        case 64:
                            var4 = _closure2_slot7;
                            var3 = _closure1_slot12;
                            var3 = var3.BACKGROUND;
                            if (!(var4 !== var3)) {
                                _fun70383_ip = 203;
                                continue _fun70383
                            }
                        case 85:
                            var3 = _closure2_slot9;
                            var3 = var3.current;
                            if (var3) {
                                _fun70383_ip = 139;
                                continue _fun70383
                            }
                        case 97:
                            var5 = _closure2_slot7;
                            var4 = _closure1_slot12;
                            var4 = var4.ACTIVE;
                            var4 = var5 !== var4;
                            if (!var4) {
                                _fun70383_ip = 136;
                                continue _fun70383
                            }
                        case 118:
                            var6 = _closure2_slot7;
                            var5 = _closure1_slot12;
                            var5 = var5.INACTIVE;
                            var4 = var6 !== var5;
                        case 136:
                            var3 = var4;
                        case 139:
                            if (var3) {
                                _fun70383_ip = 165;
                                continue _fun70383
                            }
                        case 142:
                            var4 = _closure2_slot8;
                            var5 = var4.current;
                            var4 = _closure1_slot12;
                            var4 = var4.BACKGROUND;
                            var3 = var5 !== var4;
                        case 165:
                            if (var3) {
                                _fun70383_ip = 250;
                                continue _fun70383
                            }
                        case 168:
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot3;
                            var3 = 7;
                            var3 = var5[var3];
                            var5 = var4.bind(var0)(var3);
                            var4 = var5.setPausedState;
                            var3 = false;
                            var3 = var4.bind(var5)(var3);
                            _fun70383_ip = 250;
                            continue _fun70383;
                        case 203:
                            var4 = _closure2_slot9;
                            var3 = _closure2_slot6;
                            var4.current = var3;
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot3;
                            var2 = 7;
                            var2 = var4[var2];
                            var4 = var3.bind(var0)(var2);
                            var3 = var4.setPausedState;
                            var2 = true;
                            var2 = var3.bind(var4)(var2);
                        case 250:
                            var3 = _closure2_slot9;
                            var2 = _closure2_slot6;
                            var3.current = var2;
                            var2 = _closure2_slot8;
                            var1 = _closure2_slot7;
                            var2.current = var1;
                        case 278:
                            return var0;
                    }
                };
                var6 = var15.bind(var7)(var6, var10);
                var10 = var7.useRef;
                var6 = {};
                var6 = var10.bind(var7)(var6);
                _closure2_slot10 = var6;
                var15 = var7.useCallback;
                var10 = function(arg0, arg1) { // Environment: var0
                    _fun70384: for (var _fun70384_ip = 0;;) switch (_fun70384_ip) {
                        case 0:
                            var4 = arg1;
                            var1 = _closure1_slot0;
                            var0 = _closure1_slot3;
                            var9 = 10;
                            var0 = var0[var9];
                            var7 = undefined;
                            var1 = var1.bind(var7)(var0);
                            var0 = var1.getVideoSourceType;
                            var6 = var0.bind(var1)(var4);
                            var0 = global;
                            var0 = var0.HermesInternal;
                            var3 = var0.concat;
                            var2 = '';
                            var1 = '_';
                            var0 = arg0;
                            var3 = var3.bind(var2)(var4, var1, var0);
                            var0 = _closure2_slot10;
                            var0 = var0.current;
                            var0 = var0[var3];
                            var1 = null;
                            if (!(var1 == var0)) {
                                _fun70384_ip = 364;
                                continue _fun70384
                            }
                        case 95:
                            var8 = _closure1_slot0;
                            var1 = _closure1_slot3;
                            var1 = var1[var9];
                            var1 = var8.bind(var7)(var1);
                            var1 = var1.VideoSourceType;
                            var1 = var1.PORTAL;
                            if (!(var1 !== var6)) {
                                _fun70384_ip = 312;
                                continue _fun70384
                            }
                        case 131:
                            var8 = _closure1_slot0;
                            var1 = _closure1_slot3;
                            var1 = var1[var9];
                            var1 = var8.bind(var7)(var1);
                            var1 = var1.VideoSourceType;
                            var1 = var1.TIKTOK_IFRAME;
                            if (!(var1 !== var6)) {
                                _fun70384_ip = 280;
                                continue _fun70384
                            }
                        case 164:
                            var8 = _closure1_slot0;
                            var1 = _closure1_slot3;
                            var1 = var1[var9];
                            var1 = var8.bind(var7)(var1);
                            var1 = var1.VideoSourceType;
                            var1 = var1.WEB_FILE_IFRAME;
                            if (!(var1 !== var6)) {
                                _fun70384_ip = 248;
                                continue _fun70384
                            }
                        case 197:
                            var9 = _closure1_slot0;
                            var10 = _closure1_slot3;
                            var1 = 14;
                            var1 = var10[var1];
                            var8 = var9.bind(var7)(var1);
                            var6 = var8.createVideoControls;
                            var1 = 7;
                            var1 = var10[var1];
                            var1 = var9.bind(var7)(var1);
                            var1 = var1.setPausedState;
                            var1 = var6.bind(var8)(var1);
                            _fun70384_ip = 349;
                            continue _fun70384;
                        case 248:
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot3;
                            var6 = 13;
                            var6 = var9[var6];
                            var8 = var8.bind(var7)(var6);
                            var6 = var8.createWebFileVideoControls;
                            var1 = var6.bind(var8)();
                            _fun70384_ip = 349;
                            continue _fun70384;
                        case 280:
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot3;
                            var6 = 12;
                            var6 = var9[var6];
                            var8 = var8.bind(var7)(var6);
                            var6 = var8.createTiktokVideoControls;
                            var1 = var6.bind(var8)();
                            _fun70384_ip = 349;
                            continue _fun70384;
                        case 312:
                            var6 = _closure1_slot0;
                            var8 = _closure1_slot3;
                            var5 = 11;
                            var5 = var8[var5];
                            var6 = var6.bind(var7)(var5);
                            var5 = var6.createPortalControls;
                            var4 = var4.portal;
                            var1 = var5.bind(var6)(var4);
                        case 349:
                            var2 = _closure2_slot10;
                            var2 = var2.current;
                            var2[var3] = var1;
                            return var1;
                        case 364:
                            return var0;
                    }
                };
                var6 = new Array(0);
                var16 = var15.bind(var7)(var10, var6);
                _closure2_slot11 = var16;
                var15 = var7.useEffect;
                var10 = function() { // Environment: var0
                    var4 = _closure1_slot2;
                    var3 = _closure1_slot3;
                    var1 = 15;
                    var1 = var3[var1];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var1);
                    var1 = var4.clearCurrentFocusAndDismissKeyboard;
                    var1 = var1.bind(var4)();
                    var1 = _closure1_slot0;
                    var0 = 16;
                    var0 = var3[var0];
                    var2 = var1.bind(var2)(var0);
                    var1 = var2.unlockOrientation;
                    var0 = {};
                    var3 = false;
                    var0.unlockAfterRotatingToPreviousLock = var3;
                    var0 = var1.bind(var2)(var0);
                    var0 = function() { // Environment: var0
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot3;
                        var0 = 16;
                        var1 = var1[var0];
                        var0 = undefined;
                        var1 = var2.bind(var0)(var1);
                        var0 = var1.lockOrientationForiOS;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    return var0;
                };
                var6 = new Array(0);
                var6 = var15.bind(var7)(var10, var6);
                var15 = var7.useCallback;
                var10 = new Array(3);
                var10[0] = var19;
                var10[1] = var20;
                var10[2] = var9;
                var6 = function() { // Environment: var0
                    _fun70387: for (var _fun70387_ip = 0;;) switch (_fun70387_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            if (!var1) {
                                _fun70387_ip = 200;
                                continue _fun70387
                            }
                        case 13:
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot3;
                            var1 = 10;
                            var1 = var4[var1];
                            var7 = undefined;
                            var4 = var3.bind(var7)(var1);
                            var3 = var4.getSelectedMediaSource;
                            var1 = _closure2_slot5;
                            var5 = var3.bind(var4)(var1);
                            var1 = null;
                            if (!(var1 != var5)) {
                                _fun70387_ip = 200;
                                continue _fun70387
                            }
                        case 62:
                            var6 = _closure1_slot0;
                            var1 = _closure1_slot3;
                            var3 = 17;
                            var3 = var1[var3];
                            var8 = var6.bind(var7)(var3);
                            var4 = var8.triggerHapticFeedback;
                            var3 = _closure1_slot1;
                            var2 = 18;
                            var2 = var1[var2];
                            var2 = var3.bind(var7)(var2);
                            var2 = var2.IMPACT_LIGHT;
                            var2 = var4.bind(var8)(var2);
                            var2 = 19;
                            var2 = var1[var2];
                            var4 = var3.bind(var7)(var2);
                            var3 = var4.openLazy;
                            var2 = 21;
                            var2 = var1[var2];
                            var6 = var6.bind(var7)(var2);
                            var2 = 20;
                            var2 = var1[var2];
                            var1 = var1.paths;
                            var2 = var6.bind(var7)(var2, var1);
                            var1 = {};
                            var1.source = var5;
                            var5 = _closure2_slot1;
                            var1.disableDownload = var5;
                            var0 = _closure2_slot0;
                            var1.shareable = var0;
                            var0 = 'MediaShareActionSheet';
                            var0 = var3.bind(var4)(var2, var0, var1);
                        case 200:
                            var0 = undefined;
                            return var0;
                    }
                };
                var10 = var15.bind(var7)(var6, var10);
                var15 = var7.useCallback;
                var6 = new Array(7);
                var6[0] = var9;
                var6[1] = var16;
                var6[2] = var20;
                var6[3] = var19;
                var6[4] = var18;
                var6[5] = var17;
                var6[6] = var2;
                var2 = function(arg0, arg1) { // Environment: var0
                    var3 = _closure1_slot13;
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var0 = 22;
                    var0 = var2[var0];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = {};
                    var5 = _closure2_slot5;
                    var0.syncer = var5;
                    var5 = _closure2_slot11;
                    var0.getVideoControls = var5;
                    var5 = arg0;
                    var0.onClose = var5;
                    var5 = _closure2_slot0;
                    var0.shareable = var5;
                    var5 = _closure2_slot1;
                    var0.disableDownload = var5;
                    var5 = _closure2_slot2;
                    var0.disableMediaOverlayButton = var5;
                    var5 = _closure2_slot3;
                    var0.contextName = var5;
                    var4 = _closure2_slot4;
                    var0.contextIcon = var4;
                    var4 = arg1;
                    var0.overlayEnabled = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var6 = var15.bind(var7)(var2, var6);
                var2 = 23;
                var2 = var13[var2];
                var15 = var3.bind(var4)(var2);
                var3 = var15.useMediaPlayerMutedStore;
                var2 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.isMuted;
                    return var0;
                };
                var15 = var3.bind(var15)(var2);
                _closure2_slot12 = var15;
                var3 = var7.useCallback;
                var2 = new Array(3);
                var2[0] = var16;
                var2[1] = var15;
                var2[2] = var14;
                var0 = function(arg0) { // Environment: var0
                    _fun70390: for (var _fun70390_ip = 0;;) switch (_fun70390_ip) {
                        case 0:
                            var4 = arg0;
                            var6 = var4.source;
                            var5 = var4.index;
                            var10 = var4.key;
                            var9 = var4.visible;
                            var0 = var4.hasSpoiler;
                            var15 = var4.pointerEvents;
                            var3 = {
                                'source': 0,
                                'index': 0,
                                'key': 0,
                                'visible': 0,
                                'hasSpoiler': 0,
                                'pointerEvents': 0
                            };
                            var2 = null;
                            var20 = var3;
                            var19 = null;
                            var1 = silentSetPrototypeOf(var20, var19);
                            var20 = {};
                            var19 = var4;
                            var18 = var3;
                            var7 = copyDataProperties(var20, var19, var18);
                            var14 = !var9;
                            if (var14) {
                                _fun70390_ip = 82;
                                continue _fun70390
                            }
                        case 79:
                            var14 = var0;
                        case 82:
                            if (var14) {
                                _fun70390_ip = 92;
                                continue _fun70390
                            }
                        case 85:
                            var14 = _closure2_slot6;
                        case 92:
                            var13 = _closure2_slot12;
                            if (var13) {
                                _fun70390_ip = 114;
                                continue _fun70390
                            }
                        case 102:
                            var1 = var6.isGIFV;
                            var0 = true;
                            var13 = var0 === var1;
                        case 114:
                            var11 = _closure1_slot0;
                            var12 = _closure1_slot3;
                            var1 = 10;
                            var8 = var12[var1];
                            var3 = undefined;
                            var16 = var11.bind(var3)(var8);
                            var8 = var16.getVideoSourceType;
                            var8 = var8.bind(var16)(var6);
                            var1 = var12[var1];
                            var1 = var11.bind(var3)(var1);
                            var1 = var1.VideoSourceType;
                            var1 = var1.WEB_FILE_IFRAME;
                            if (!(var8 === var1)) {
                                _fun70390_ip = 188;
                                continue _fun70390
                            }
                        case 175:
                            var1 = var6.videoURI;
                            if (!(var2 == var1)) {
                                _fun70390_ip = 1170;
                                continue _fun70390
                            }
                        case 188:
                            var1 = var6.portal;
                            if (!(var2 != var1)) {
                                _fun70390_ip = 333;
                                continue _fun70390
                            }
                        case 201:
                            var8 = _closure1_slot0;
                            var1 = _closure1_slot3;
                            var12 = 11;
                            var1 = var1[var12];
                            var11 = var8.bind(var3)(var1);
                            var8 = var11.isPortalExpired;
                            var1 = var6.portal;
                            var1 = var8.bind(var11)(var1);
                            if (var1) {
                                _fun70390_ip = 333;
                                continue _fun70390
                            }
                        case 241:
                            var11 = _closure1_slot14;
                            var8 = _closure1_slot1;
                            var1 = _closure1_slot3;
                            var1 = var1[var12];
                            var8 = var8.bind(var3)(var1);
                            var1 = {};
                            var20 = var1;
                            var19 = var7;
                            var12 = copyDataProperties(var20, var19);
                            var12 = 'key';
                            var1[var12] = var10;
                            var12 = 'pointerEvents';
                            var1[var12] = var15;
                            var16 = var6.portal;
                            var12 = 'portal';
                            var1[var12] = var16;
                            var12 = 'paused';
                            var1[var12] = var14;
                            var12 = 'muted';
                            var1[var12] = var13;
                            var1 = var11.bind(var3)(var8, var1);
                            return var1;
                        case 333:
                            var1 = var6.embedURI;
                            if (!(var2 != var1)) {
                                _fun70390_ip = 638;
                                continue _fun70390
                            }
                        case 346:
                            var1 = var6.isGIFV;
                            if (var1) {
                                _fun70390_ip = 638;
                                continue _fun70390
                            }
                        case 358:
                            var8 = var6.embedProviderName;
                            var1 = 'TikTok';
                            if (!(var1 !== var8)) {
                                _fun70390_ip = 504;
                                continue _fun70390
                            }
                        case 377:
                            var1 = 'YouTube';
                            if (!(var1 !== var8)) {
                                _fun70390_ip = 389;
                                continue _fun70390
                            }
                        case 387:
                            return var2;
                        case 389:
                            var11 = _closure1_slot14;
                            var8 = _closure1_slot1;
                            var12 = _closure1_slot3;
                            var1 = 24;
                            var1 = var12[var1];
                            var8 = var8.bind(var3)(var1);
                            var1 = {};
                            var20 = var1;
                            var19 = var7;
                            var12 = copyDataProperties(var20, var19);
                            var12 = 'key';
                            var1[var12] = var10;
                            var12 = 'visible';
                            var1[var12] = var9;
                            var16 = var7.style;
                            var12 = 'style';
                            var1[var12] = var16;
                            var16 = {};
                            var12 = var6.embedURI;
                            var16.uri = var12;
                            var12 = var6.width;
                            var16.width = var12;
                            var12 = var6.height;
                            var16.height = var12;
                            var12 = 'source';
                            var1[var12] = var16;
                            var1 = var11.bind(var3)(var8, var1);
                            return var1;
                        case 504:
                            var11 = _closure1_slot14;
                            var8 = _closure1_slot1;
                            var12 = _closure1_slot3;
                            var1 = 12;
                            var1 = var12[var1];
                            var8 = var8.bind(var3)(var1);
                            var1 = {};
                            var20 = var1;
                            var19 = var7;
                            var12 = copyDataProperties(var20, var19);
                            var12 = 'key';
                            var1[var12] = var10;
                            var12 = 'visible';
                            var1[var12] = var9;
                            var16 = var7.style;
                            var12 = 'style';
                            var1[var12] = var16;
                            var16 = {};
                            var12 = var6.embedURI;
                            var16.uri = var12;
                            var12 = var6.width;
                            var16.width = var12;
                            var12 = var6.height;
                            var16.height = var12;
                            var12 = 'source';
                            var1[var12] = var16;
                            var12 = _closure2_slot11;
                            var16 = var12.bind(var3)(var5, var6);
                            var12 = 'controls';
                            var1[var12] = var16;
                            var1 = var11.bind(var3)(var8, var1);
                            return var1;
                        case 638:
                            var1 = var6.videoURI;
                            if (!(var2 == var1)) {
                                _fun70390_ip = 914;
                                continue _fun70390
                            }
                        case 651:
                            var8 = var6.uri;
                            var2 = var8.startsWith;
                            var1 = 'assets-library://';
                            var1 = var2.bind(var8)(var1);
                            if (var1) {
                                _fun70390_ip = 822;
                                continue _fun70390
                            }
                        case 679:
                            var8 = var6.uri;
                            var2 = var8.startsWith;
                            var1 = _closure1_slot10;
                            var1 = var2.bind(var8)(var1);
                            if (var1) {
                                _fun70390_ip = 822;
                                continue _fun70390
                            }
                        case 702:
                            var8 = var6.uri;
                            var2 = var8.startsWith;
                            var1 = _closure1_slot11;
                            var1 = var2.bind(var8)(var1);
                            if (var1) {
                                _fun70390_ip = 822;
                                continue _fun70390
                            }
                        case 725:
                            var8 = _closure1_slot14;
                            var12 = _closure1_slot1;
                            var16 = _closure1_slot3;
                            var1 = 25;
                            var1 = var16[var1];
                            var2 = var12.bind(var3)(var1);
                            var1 = {};
                            var11 = 26;
                            var11 = var16[var11];
                            var11 = var12.bind(var3)(var11);
                            var1.Component = var11;
                            var20 = var1;
                            var19 = var7;
                            var11 = copyDataProperties(var20, var19);
                            var11 = 'key';
                            var1[var11] = var10;
                            var11 = 'source';
                            var1[var11] = var6;
                            var11 = 'index';
                            var1[var11] = var5;
                            var11 = 'pointerEvents';
                            var1[var11] = var15;
                            var1 = var8.bind(var3)(var2, var1);
                            _fun70390_ip = 909;
                            continue _fun70390;
                        case 822:
                            var11 = _closure1_slot14;
                            var8 = _closure1_slot1;
                            var12 = _closure1_slot3;
                            var2 = 25;
                            var2 = var12[var2];
                            var8 = var8.bind(var3)(var2);
                            var2 = {};
                            var12 = _closure1_slot5;
                            var2.Component = var12;
                            var20 = var2;
                            var19 = var7;
                            var12 = copyDataProperties(var20, var19);
                            var12 = 'key';
                            var2[var12] = var10;
                            var12 = 'source';
                            var2[var12] = var6;
                            var12 = 'index';
                            var2[var12] = var5;
                            var12 = 'pointerEvents';
                            var2[var12] = var15;
                            var1 = var11.bind(var3)(var8, var2);
                        case 909:
                            _fun70390_ip = 1168;
                            continue _fun70390;
                        case 914:
                            var11 = _closure1_slot14;
                            var8 = _closure1_slot1;
                            var17 = _closure1_slot3;
                            var2 = 25;
                            var2 = var17[var2];
                            var8 = var8.bind(var3)(var2);
                            var2 = {};
                            var16 = _closure1_slot0;
                            var12 = 14;
                            var12 = var17[var12];
                            var12 = var16.bind(var3)(var12);
                            var12 = var12.VideoComponent;
                            var2.Component = var12;
                            var20 = var2;
                            var19 = var7;
                            var12 = copyDataProperties(var20, var19);
                            var12 = 'key';
                            var2[var12] = var10;
                            var12 = 'pointerEvents';
                            var2[var12] = var15;
                            var12 = 'paused';
                            var2[var12] = var14;
                            var12 = _closure2_slot11;
                            var14 = var12.bind(var3)(var5, var6);
                            var12 = 'controls';
                            var2[var12] = var14;
                            var12 = 'muted';
                            var2[var12] = var13;
                            var12 = 'index';
                            var2[var12] = var5;
                            var13 = {};
                            var12 = var6.videoURI;
                            var13.uri = var12;
                            var12 = var6.width;
                            var13.width = var12;
                            var12 = var6.height;
                            var13.height = var12;
                            var12 = var6.videoURI;
                            var13.videoURI = var12;
                            var12 = var6.messageId;
                            var13.messageId = var12;
                            var12 = var6.channelId;
                            var13.channelId = var12;
                            var12 = var6.mediaIndex;
                            var13.mediaIndex = var12;
                            var12 = var6.description;
                            var13.description = var12;
                            var12 = var6.obscure;
                            var13.obscure = var12;
                            var12 = var6.accessoryType;
                            var13.accessoryType = var12;
                            var12 = var6.attachmentId;
                            var13.attachmentId = var12;
                            var12 = 'source';
                            var2[var12] = var13;
                            var1 = var11.bind(var3)(var8, var2);
                        case 1168:
                            return var1;
                        case 1170:
                            var2 = _closure1_slot14;
                            var1 = _closure1_slot1;
                            var8 = _closure1_slot3;
                            var0 = 13;
                            var0 = var8[var0];
                            var1 = var1.bind(var3)(var0);
                            var0 = {};
                            var20 = var0;
                            var19 = var7;
                            var8 = copyDataProperties(var20, var19);
                            var8 = 'key';
                            var0[var8] = var10;
                            var8 = 'visible';
                            var0[var8] = var9;
                            var8 = var7.style;
                            var7 = 'style';
                            var0[var7] = var8;
                            var8 = {};
                            var7 = var6.videoURI;
                            var8.uri = var7;
                            var7 = var6.width;
                            var8.width = var7;
                            var7 = var6.height;
                            var8.height = var7;
                            var7 = 'source';
                            var0[var7] = var8;
                            var4 = _closure2_slot11;
                            var5 = var4.bind(var3)(var5, var6);
                            var4 = 'controls';
                            var0[var4] = var5;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                    }
                };
                var7 = var3.bind(var7)(var0, var2);
                var3 = _closure1_slot13;
                var2 = _closure1_slot1;
                var0 = 27;
                var0 = var13[var0];
                var2 = var2.bind(var4)(var0);
                var0 = {};
                var0.originLayout = var12;
                var0.swipeVelocityThreshold = var11;
                var0.onClose = var5;
                var0.onLongPress = var10;
                var0.syncer = var9;
                var0.renderMedia = var7;
                var0.renderOverlay = var6;
                var7 = var3.bind(var4)(var2, var0);
                var0 = var7;
                if (!var1) {
                    _fun70378_ip = 769;
                    continue _fun70378
                }
            case 701:
                var3 = _closure1_slot13;
                var2 = _closure1_slot6;
                var1 = {
                    'transparent': true,
                    'animationType': 'none',
                    'visible': true,
                    'onRequestClose': null,
                    'statusBarTranslucent': true
                };
                var1.onRequestClose = var5;
                var6 = _closure1_slot8;
                var5 = {};
                var8 = _closure1_slot7;
                var8 = var8.absoluteFill;
                var5.style = var8;
                var5.children = var7;
                var5 = var3.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 769:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 5246, 660, 33, 8802, 8815, 8808, 566, 478, 8803, 8805, 8818, 8820, 8800, 1582, 7779, 3238, 3239, 3237, 8821, 1307, 9142, 8809, 9697, 9699, 4667, 9701, 2]);