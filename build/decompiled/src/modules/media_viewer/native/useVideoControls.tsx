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
    var3 = var4.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot6 = var3;
    var3 = 4;
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
    var4 = 7;
    var4 = var6[var4];
    var8 = var5.bind(var0)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 8;
    var9.marginBottom = var10;
    var4.slider = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot8 = var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_viewer/native/useVideoControls.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function arg0, arg1, arg2() {
        _fun71043: for (var _fun71043_ip = 0;;) switch (_fun71043_ip) {
            case 0:
                var12 = arg0;
                var10 = arg1;
                var8 = arg2;
                var _closure2_slot0 = var12;
                var _closure2_slot1 = var8;
                var1 = _closure1_slot8;
                var4 = undefined;
                var9 = var1.bind(var4)();
                var5 = _closure1_slot0;
                var1 = _closure1_slot2;
                var2 = 8;
                var2 = var1[var2];
                var11 = var5.bind(var4)(var2);
                var7 = var11.useStateFromStores;
                var2 = _closure1_slot5;
                var6 = new Array(1);
                var6[0] = var2;
                var2 = function() { // Environment: var3
                    var0 = _closure1_slot5;
                    var0 = var0.useReducedMotion;
                    return var0;
                };
                var16 = var7.bind(var11)(var6, var2);
                var _closure2_slot2 = var16;
                var7 = _closure1_slot4;
                var6 = var7.useState;
                var2 = false;
                var7 = var6.bind(var7)(var2);
                var6 = _closure1_slot3;
                var2 = 2;
                var6 = var6.bind(var4)(var7, var2);
                var2 = 0;
                var7 = var6[var2];
                var2 = 1;
                var6 = var6[var2];
                var _closure2_slot3 = var6;
                var2 = 9;
                var2 = var1[var2];
                var2 = var5.bind(var4)(var2);
                var11 = var2.MediaViewerSourcesStore;
                var5 = var11.useState;
                var2 = function(arg0) { // Environment: var3
                    var0 = arg0;
                    var2 = var0.spoilerIndexes;
                    var1 = var2.has;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var14 = var5.bind(var11)(var2);
                var _closure2_slot4 = var14;
                var2 = _closure1_slot1;
                var13 = 10;
                var1 = var1[var13];
                var1 = var2.bind(var4)(var1);
                var5 = var1.bind(var4)(var12);
                var _closure2_slot5 = var5;
                var11 = null;
                var1 = var11 != var8;
                if (!var1) {
                    _fun71043_ip = 236;
                    continue _fun71043
                }
            case 205:
                var15 = _closure1_slot0;
                var17 = _closure1_slot2;
                var2 = 11;
                var2 = var17[var2];
                var15 = var15.bind(var4)(var2);
                var2 = var15.supportOverlayVideoControls;
                var1 = var2.bind(var15)(var10);
            case 236:
                var2 = var10.portal;
                if (!(var11 == var2)) {
                    _fun71043_ip = 252;
                    continue _fun71043
                }
            case 246:
                var2 = var10.videoURI;
            case 252:
                var _closure2_slot6 = var2;
                var11 = _closure1_slot1;
                var10 = _closure1_slot2;
                var10 = var10[var13];
                var10 = var11.bind(var4)(var10);
                var15 = var10.bind(var4)(var2);
                var _closure2_slot7 = var15;
                var11 = _closure1_slot4;
                var13 = var11.useEffect;
                var10 = new Array(7);
                var10[0] = var8;
                var10[1] = var2;
                var10[2] = var16;
                var10[3] = var15;
                var10[4] = var14;
                var10[5] = var5;
                var10[6] = var12;
                var5 = function() { // Environment: var3
                    _fun71046: for (var _fun71046_ip = 0;;) switch (_fun71046_ip) {
                        case 0:
                            var2 = _closure2_slot5;
                            var1 = _closure2_slot0;
                            if (!(var2 !== var1)) {
                                _fun71046_ip = 99;
                                continue _fun71046
                            }
                        case 15:
                            var1 = _closure2_slot5;
                            var2 = null;
                            if (!(var2 != var1)) {
                                _fun71046_ip = 99;
                                continue _fun71046
                            }
                        case 25:
                            var1 = _closure2_slot6;
                            if (!(var2 != var1)) {
                                _fun71046_ip = 99;
                                continue _fun71046
                            }
                        case 33:
                            var2 = _closure2_slot7;
                            var1 = _closure2_slot6;
                            if (!(var2 !== var1)) {
                                _fun71046_ip = 99;
                                continue _fun71046
                            }
                        case 45:
                            var3 = _closure2_slot1;
                            var2 = var3.seek;
                            var1 = 0;
                            var1 = var2.bind(var3)(var1);
                            var2 = _closure2_slot4;
                            if (var2) {
                                _fun71046_ip = 73;
                                continue _fun71046
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
                var5 = var13.bind(var11)(var5, var10);
                var10 = var11.useCallback;
                var5 = new Array(1);
                var5[0] = var12;
                var3 = function() { // Environment: var3
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
                var5 = var10.bind(var11)(var3, var5);
                var3 = var2;
                if (var1) {
                    _fun71043_ip = 370;
                    continue _fun71043
                }
            case 368:
                return var4;
            case 370:
                var2 = _closure1_slot6;
                var1 = _closure1_slot1;
                var10 = _closure1_slot2;
                var0 = 12;
                var0 = var10[var0];
                var1 = var1.bind(var4)(var0);
                var0 = {};
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
        var0 = 5;
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
        var0 = 5;
        var2 = var2[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.batchUpdates;
        var1 = function() { // Environment: var1
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 6;
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
        var0 = 5;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.batchUpdates;
        var1 = function() { // Environment: var1
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 6;
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
        var0 = 5;
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
        var0 = 5;
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
        _fun71059: for (var _fun71059_ip = 0;;) switch (_fun71059_ip) {
            case 0:
                var1 = _closure1_slot7;
                var0 = var1.getState;
                var0 = var0.bind(var1)();
                var2 = var0.controls;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun71059_ip = 42;
                    continue _fun71059
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
        _fun71060: for (var _fun71060_ip = 0;;) switch (_fun71060_ip) {
            case 0:
                var1 = _closure1_slot7;
                var0 = var1.getState;
                var0 = var0.bind(var1)();
                var1 = var0.paused;
                var0 = undefined;
                var3 = undefined;
                if (var1) {
                    _fun71060_ip = 59;
                    continue _fun71060
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
                    _fun71060_ip = 75;
                    continue _fun71060
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 1298, 33, 629, 803, 8923, 1297, 566, 8916, 5365, 8917, 8924, 2]);