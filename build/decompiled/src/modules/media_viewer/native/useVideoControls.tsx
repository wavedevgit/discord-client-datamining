// modules/media_viewer/native/useVideoControls.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var6;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var7 = var6[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var8 = var3.StyleSheet;
    var3 = 3;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var6[var3];
    var7 = var5.bind(var0)(var3);
    var4 = var7.create;
    var3 = function() { // Environment: var1
        var0 = {};
        var1 = undefined;
        var0.controls = var1;
        var1 = false;
        var0.paused = var1;
        return var0;
    };
    var3 = var4.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var7 = var8.create;
    var4 = {};
    var9 = {};
    var10 = 8;
    var9.marginBottom = var10;
    var4.slider = var9;
    var9 = {
        'width': 24,
        'height': 24
    };
    var4.playToggleIcon = var9;
    var9 = {
        'width': 64,
        'height': 64,
        'backgroundColor': 'rgba(0, 0, 0, 0.8)',
        'borderRadius': 32,
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var4.playToggleButton = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot8 = var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_viewer/native/useVideoControls.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function arg0, arg1, arg2() {
        _fun70590: for (var _fun70590_ip = 0;;) switch (_fun70590_ip) {
            case 0:
                var11 = arg0;
                var5 = arg1;
                var8 = arg2;
                var _closure2_slot0 = var11;
                var _closure2_slot1 = var8;
                var3 = _closure1_slot0;
                var0 = _closure1_slot2;
                var1 = 8;
                var1 = var0[var1];
                var4 = undefined;
                var10 = var3.bind(var4)(var1);
                var7 = var10.useStateFromStores;
                var1 = _closure1_slot5;
                var6 = new Array(1);
                var6[0] = var1;
                var1 = function() { // Environment: var2
                    var0 = _closure1_slot5;
                    var0 = var0.useReducedMotion;
                    return var0;
                };
                var15 = var7.bind(var10)(var6, var1);
                var _closure2_slot2 = var15;
                var7 = _closure1_slot4;
                var6 = var7.useState;
                var1 = false;
                var7 = var6.bind(var7)(var1);
                var6 = _closure1_slot3;
                var1 = 2;
                var6 = var6.bind(var4)(var7, var1);
                var1 = 0;
                var7 = var6[var1];
                var1 = 1;
                var6 = var6[var1];
                var _closure2_slot3 = var6;
                var1 = 9;
                var1 = var0[var1];
                var1 = var3.bind(var4)(var1);
                var10 = var1.MediaViewerSourcesStore;
                var3 = var10.useState;
                var1 = function(arg0) { // Environment: var2
                    var0 = arg0;
                    var2 = var0.spoilerIndexes;
                    var1 = var2.has;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var13 = var3.bind(var10)(var1);
                var _closure2_slot4 = var13;
                var1 = _closure1_slot1;
                var12 = 10;
                var0 = var0[var12];
                var0 = var1.bind(var4)(var0);
                var3 = var0.bind(var4)(var11);
                var _closure2_slot5 = var3;
                var10 = null;
                var0 = var10 != var8;
                if (!var0) {
                    _fun70590_ip = 228;
                    continue _fun70590
                }
            case 197:
                var14 = _closure1_slot0;
                var16 = _closure1_slot2;
                var1 = 11;
                var1 = var16[var1];
                var14 = var14.bind(var4)(var1);
                var1 = var14.supportOverlayVideoControls;
                var0 = var1.bind(var14)(var5);
            case 228:
                var1 = var5.portal;
                if (!(var10 == var1)) {
                    _fun70590_ip = 244;
                    continue _fun70590
                }
            case 238:
                var1 = var5.videoURI;
            case 244:
                var _closure2_slot6 = var1;
                var10 = _closure1_slot1;
                var5 = _closure1_slot2;
                var5 = var5[var12];
                var5 = var10.bind(var4)(var5);
                var14 = var5.bind(var4)(var1);
                var _closure2_slot7 = var14;
                var10 = _closure1_slot4;
                var12 = var10.useEffect;
                var5 = new Array(7);
                var5[0] = var8;
                var5[1] = var1;
                var5[2] = var15;
                var5[3] = var14;
                var5[4] = var13;
                var5[5] = var3;
                var5[6] = var11;
                var3 = function() { // Environment: var2
                    _fun70593: for (var _fun70593_ip = 0;;) switch (_fun70593_ip) {
                        case 0:
                            var2 = _closure2_slot5;
                            var1 = _closure2_slot0;
                            if (!(var2 !== var1)) {
                                _fun70593_ip = 99;
                                continue _fun70593
                            }
                        case 15:
                            var1 = _closure2_slot5;
                            var2 = null;
                            if (!(var2 != var1)) {
                                _fun70593_ip = 99;
                                continue _fun70593
                            }
                        case 25:
                            var1 = _closure2_slot6;
                            if (!(var2 != var1)) {
                                _fun70593_ip = 99;
                                continue _fun70593
                            }
                        case 33:
                            var2 = _closure2_slot7;
                            var1 = _closure2_slot6;
                            if (!(var2 !== var1)) {
                                _fun70593_ip = 99;
                                continue _fun70593
                            }
                        case 45:
                            var3 = _closure2_slot1;
                            var2 = var3.seek;
                            var1 = 0;
                            var1 = var2.bind(var3)(var1);
                            var2 = _closure2_slot4;
                            if (var2) {
                                _fun70593_ip = 73;
                                continue _fun70593
                            }
                        case 69:
                            var2 = _closure2_slot2;
                        case 73:
                            var3 = _closure2_slot1;
                            var1 = var3.pause;
                            var1 = var1.bind(var3)(var2);
                            var1 = _closure2_slot3;
                            var0 = undefined;
                            var0 = var1.bind(var0)(var2);
                        case 99:
                            var0 = undefined;
                            return var0;
                    }
                };
                var3 = var12.bind(var10)(var3, var5);
                var5 = var10.useCallback;
                var3 = new Array(1);
                var3[0] = var11;
                var2 = function() { // Environment: var2
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 9;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.removeSpoiler;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var5 = var5.bind(var10)(var2, var3);
                var3 = var1;
                if (var0) {
                    _fun70590_ip = 362;
                    continue _fun70590
                }
            case 360:
                return var4;
            case 362:
                var2 = _closure1_slot6;
                var1 = _closure1_slot1;
                var10 = _closure1_slot2;
                var0 = 12;
                var0 = var10[var0];
                var1 = var1.bind(var4)(var0);
                var0 = {};
                var9 = _closure1_slot8;
                var9 = var9.slider;
                var0.style = var9;
                var0.controls = var8;
                var0.paused = var7;
                var0.setPaused = var6;
                var0.onPlayPress = var5;
                var0 = var2.bind(var4)(var1, var0, var3);
                return var0;
        }
    };
    var2.default = var4;
    var2.useVideoStateStore = var3;
    var3 = function() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 6;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.batchUpdates;
        var1 = function() { // Environment: var1
            var3 = _closure1_slot7;
            var2 = var3.setState;
            var1 = {};
            var0 = undefined;
            var1.controls = var0;
            var4 = false;
            var1.paused = var4;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.initVideoStateStore = var3;
    var3 = function arg0() {
        var0 = arg0;
        var _closure2_slot0 = var0;
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 6;
        var2 = var2[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.batchUpdates;
        var1 = function() { // Environment: var1
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 7;
            var1 = var1[var0];
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            var3 = var1.useMediaPlayerMutedStore;
            var2 = var3.setState;
            var1 = {};
            var4 = _closure2_slot0;
            var1.isMuted = var4;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.setMuted = var3;
    var3 = function() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 6;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.batchUpdates;
        var1 = function() { // Environment: var1
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 7;
            var1 = var1[var0];
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            var3 = var1.useMediaPlayerMutedStore;
            var2 = var3.setState;
            var1 = function(arg0) { // Environment: var1
                var0 = {};
                var1 = arg0;
                var1 = var1.isMuted;
                var1 = !var1;
                var0.isMuted = var1;
                return var0;
            };
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.toggleMuted = var3;
    var3 = function arg0() {
        var0 = arg0;
        var _closure2_slot0 = var0;
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 6;
        var2 = var2[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.batchUpdates;
        var1 = function() { // Environment: var1
            var2 = _closure1_slot7;
            var1 = var2.setState;
            var0 = {};
            var3 = _closure2_slot0;
            var0.controls = var3;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.setVideoStateControls = var3;
    var3 = function arg0() {
        var0 = arg0;
        var _closure2_slot0 = var0;
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 6;
        var2 = var2[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.batchUpdates;
        var1 = function() { // Environment: var1
            var2 = _closure1_slot7;
            var1 = var2.setState;
            var0 = {};
            var3 = _closure2_slot0;
            var0.paused = var3;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.setPausedState = var3;
    var3 = function() {
        _fun70606: for (var _fun70606_ip = 0;;) switch (_fun70606_ip) {
            case 0:
                var1 = _closure1_slot7;
                var0 = var1.getState;
                var0 = var0.bind(var1)();
                var2 = var0.controls;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun70606_ip = 42;
                    continue _fun70606
                }
            case 29:
                var1 = var2.pause;
                var0 = true;
                var0 = var1.bind(var2)(var0);
            case 42:
                var0 = undefined;
                return var0;
        }
    };
    var2.tryPauseCurrentVideo = var3;
    var1 = function() {
        _fun70607: for (var _fun70607_ip = 0;;) switch (_fun70607_ip) {
            case 0:
                var1 = _closure1_slot7;
                var0 = var1.getState;
                var0 = var0.bind(var1)();
                var1 = var0.paused;
                var0 = undefined;
                var3 = undefined;
                if (var1) {
                    _fun70607_ip = 59;
                    continue _fun70607
                }
            case 30:
                var4 = _closure1_slot7;
                var2 = var4.getState;
                var2 = var2.bind(var4)();
                var2 = var2.controls;
                var4 = null;
                var1 = var4 == var2;
                var3 = var2;
            case 59:
                if (var1) {
                    _fun70607_ip = 75;
                    continue _fun70607
                }
            case 62:
                var2 = var3.pause;
                var1 = false;
                var1 = var2.bind(var3)(var1);
            case 75:
                return var0;
        }
    };
    var2.unpauseCurrentVideoIfNeeded = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1298, 33, 629, 802, 8883, 566, 8876, 5310, 8877, 8884, 2]);