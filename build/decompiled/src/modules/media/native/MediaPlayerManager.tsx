// modules/media/native/MediaPlayerManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var0 = function() {
        _fun98549: for (var _fun98549_ip = 0;;) switch (_fun98549_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 72: // try_end0
                _fun98549_ip = 76;
                continue _fun98549;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot21 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot21 = var0;
    var1 = function arg0() {
        _fun98552: for (var _fun98552_ip = 0;;) switch (_fun98552_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.duration;
                var1 = 0;
                if (!(!(var2 <= var1))) {
                    _fun98552_ip = 42;
                    continue _fun98552
                }
            case 14:
                var1 = var0.duration;
                var0 = var0.time;
                var1 = var1 - var0;
                var0 = _closure1_slot16;
                var0 = var1 <= var0;
                return var0;
            case 42:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot22 = var1;
    var0 = global;
    var9 = var0.Object;
    var5 = var9.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var9)(var2, var0, var3);
    var0 = 0;
    var3 = var7[var0];
    var0 = undefined;
    var3 = var8.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var7[var3];
    var3 = var8.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var7[var3];
    var3 = var8.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var7[var3];
    var3 = var8.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var7[var3];
    var3 = var8.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var7[var3];
    var3 = var6.bind(var0)(var3);
    var5 = var3.NativeEventEmitter;
    var _closure1_slot8 = var5;
    var3 = var3.NativeModules;
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var7[var3];
    var3 = var8.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 7;
    var3 = var7[var3];
    var3 = var8.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 8;
    var3 = var7[var3];
    var3 = var8.bind(var0)(var3);
    var _closure1_slot12 = var3;
    var3 = 9;
    var3 = var7[var3];
    var3 = var8.bind(var0)(var3);
    var _closure1_slot13 = var3;
    var3 = 10;
    var3 = var7[var3];
    var3 = var8.bind(var0)(var3);
    var _closure1_slot14 = var3;
    var3 = 11;
    var3 = var7[var3];
    var3 = var6.bind(var0)(var3);
    var3 = var3.ActivityPanelModes;
    var _closure1_slot15 = var3;
    var3 = 12;
    var3 = var7[var3];
    var3 = var6.bind(var0)(var3);
    var5 = var3.PLAYBACK_COMPLETION_DETECTION_TOLERANCE;
    var _closure1_slot16 = var5;
    var3 = var3.PLAYBACK_PROGRESS_UPDATE_INTERVAL;
    var _closure1_slot17 = var3;
    var3 = 13;
    var3 = var7[var3];
    var3 = var6.bind(var0)(var3);
    var3 = var3.Permissions;
    var _closure1_slot18 = var3;
    var3 = 14;
    var3 = var7[var3];
    var9 = var8.bind(var0)(var3);
    var3 = var9.prototype;
    var5 = Object.create(var3, {
        constructor: {
            value: var9
        }
    });
    var12 = 'MediaPlayerManager';
    var13 = var5;
    var3 = new var13[var9](var12, var11);
    var3 = var3 instanceof Object ? var3 : var5;
    var _closure1_slot19 = var3;
    var3 = 15;
    var3 = var7[var3];
    var9 = var6.bind(var0)(var3);
    var5 = var9.create;
    var3 = function(arg0) { // Environment: var4
        var0 = arg0;
        var _closure2_slot0 = var0;
        var0 = {
            'activeMediaPlayerSource': null,
            'mediaSourceMessage': null,
            'canAccessMedia': true,
            'isPlaying': false,
            'wasPipClosedByUser': false,
            'progress': null,
            'rate': 0,
            'showPip': false
        };
        var1 = undefined;
        var0.activeMediaPlayerSource = var1;
        var0.mediaSourceMessage = var1;
        var0.progress = var1;
        var2 = function() {
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 16;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.batchUpdates;
            var1 = function() { // Environment: var1
                var2 = _closure2_slot0;
                var1 = {};
                var0 = false;
                var1.showPip = var0;
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                return var0;
            };
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0.closePip = var2;
        var2 = {};
        var0.displayedMediaItemIdsPerChannel = var2;
        var0.currentlyDisplayedChannelId = var1;
        return var0;
    };
    var3 = var5.bind(var9)(var3);
    var _closure1_slot20 = var3;
    var5 = 22;
    var5 = var7[var5];
    var5 = var8.bind(var0)(var5);
    var4 = function(arg0) { // Environment: var4
        var3 = function() {
            _fun98557: for (var _fun98557_ip = 0;;) switch (_fun98557_ip) {
                case 0:
                    var3 = this;
                    var0 = _closure1_slot3;
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var0 = var0.bind(var1)(var3, var2);
                    var0 = _closure1_slot6;
                    var8 = var0.bind(var1)(var2);
                    var2 = _closure1_slot5;
                    var0 = _closure1_slot21;
                    var0 = var0.bind(var1)();
                    if (var0) {
                        _fun98557_ip = 62;
                        continue _fun98557
                    }
                case 49:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var3, var1);
                    _fun98557_ip = 100;
                    continue _fun98557;
                case 62:
                    var5 = global;
                    var7 = var5.Reflect;
                    var6 = var7.construct;
                    var4 = _closure1_slot6;
                    var4 = var4.bind(var1)(var3);
                    var5 = var4.constructor;
                    var4 = new Array(0);
                    var0 = var6.bind(var7)(var8, var4, var5);
                case 100:
                    var0 = var2.bind(var1)(var3, var0);
                    var2 = new Array(0);
                    var0.subscriptions = var2;
                    var0.voicePanelStoreUnsubscribe = var1;
                    var2 = var0.pauseAndClosePip;
                    var1 = var2.bind;
                    var1 = var1.bind(var2)(var0);
                    var0.pauseAndClosePip = var1;
                    var2 = var0.handleVoicePanelStateUpdated;
                    var1 = var2.bind;
                    var1 = var1.bind(var2)(var0);
                    var0.handleVoicePanelStateUpdated = var1;
                    var2 = var0.handleEmbeddedActivitiesUpdated;
                    var1 = var2.bind;
                    var1 = var1.bind(var2)(var0);
                    var0.handleEmbeddedActivitiesUpdated = var1;
                    var2 = var0.handleMediaPlayerPlaybackRateChanged;
                    var1 = var2.bind;
                    var1 = var1.bind(var2)(var0);
                    var0.handleMediaPlayerPlaybackRateChanged = var1;
                    var2 = var0.handleMediaPlayerPlaybackSourceChanged;
                    var1 = var2.bind;
                    var1 = var1.bind(var2)(var0);
                    var0.handleMediaPlayerPlaybackSourceChanged = var1;
                    var2 = var0.handleMediaPlayerViewWillAppear;
                    var1 = var2.bind;
                    var1 = var1.bind(var2)(var0);
                    var0.handleMediaPlayerViewWillAppear = var1;
                    var2 = var0.handleMediaPlayerViewDidDisappear;
                    var1 = var2.bind;
                    var1 = var1.bind(var2)(var0);
                    var0.handleMediaPlayerViewDidDisappear = var1;
                    var2 = var0.updateDisplayState;
                    var1 = var2.bind;
                    var1 = var1.bind(var2)(var0);
                    var0.updateDisplayState = var1;
                    var2 = var0.updateMediaPermissions;
                    var1 = var2.bind;
                    var1 = var1.bind(var2)(var0);
                    var0.updateMediaPermissions = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = '_initialize';
        var4.key = var0;
        var0 = function() {
            _fun98558: for (var _fun98558_ip = 0;;) switch (_fun98558_ip) {
                case 0:
                    var2 = this;
                    var5 = _closure1_slot8;
                    var0 = _closure1_slot9;
                    var9 = var0.MediaPlayerManager;
                    var4 = var5.prototype;
                    var4 = Object.create(var4, {
                        constructor: {
                            value: var5
                        }
                    });
                    var10 = var4;
                    var3 = new var10[var5](var9, var8);
                    var7 = var3 instanceof Object ? var3 : var4;
                    var5 = var7.addListener;
                    var4 = var2.handleMediaPlayerPlaybackSourceChanged;
                    var3 = 'MediaPlayerPlaybackSourceChanged';
                    var4 = var5.bind(var7)(var3, var4);
                    var3 = new Array(5);
                    var3[0] = var4;
                    var6 = var7.addListener;
                    var5 = var2.handleMediaPlayerPlaybackProgressUpdated;
                    var4 = 'MediaPlayerPlaybackProgressUpdated';
                    var4 = var6.bind(var7)(var4, var5);
                    var3[1] = var4;
                    var6 = var7.addListener;
                    var5 = var2.handleMediaPlayerPlaybackRateChanged;
                    var4 = 'MediaPlayerPlaybackRateChanged';
                    var4 = var6.bind(var7)(var4, var5);
                    var3[2] = var4;
                    var6 = var7.addListener;
                    var5 = var2.handleMediaPlayerViewWillAppear;
                    var4 = 'MediaPlayerViewWillAppear';
                    var4 = var6.bind(var7)(var4, var5);
                    var3[3] = var4;
                    var6 = var7.addListener;
                    var5 = var2.handleMediaPlayerViewDidDisappear;
                    var4 = 'MediaPlayerViewDidDisappear';
                    var4 = var6.bind(var7)(var4, var5);
                    var3[4] = var4;
                    var2.subscriptions = var3;
                    var3 = var0.MediaPlayerManager;
                    var0 = var3.subscribeToPlaybackEvents;
                    var0 = var0.bind(var3)();
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var0 = 17;
                    var3 = var3[var0];
                    var0 = undefined;
                    var4 = var4.bind(var0)(var3);
                    var3 = var4.getRootNavigationRef;
                    var6 = var3.bind(var4)();
                    var3 = null;
                    if (!(var3 != var6)) {
                        _fun98558_ip = 270;
                        continue _fun98558
                    }
                case 248:
                    var5 = var6.addListener;
                    var4 = var2.updateDisplayState;
                    var3 = 'state';
                    var3 = var5.bind(var6)(var3, var4);
                case 270:
                    var5 = _closure1_slot11;
                    var4 = var5.subscribe;
                    var3 = var2.handleVoicePanelStateUpdated;
                    var3 = var4.bind(var5)(var3);
                    var2.voicePanelStoreUnsubscribe = var3;
                    var5 = _closure1_slot10;
                    var4 = var5.addChangeListener;
                    var3 = var2.handleEmbeddedActivitiesUpdated;
                    var3 = var4.bind(var5)(var3);
                    var5 = _closure1_slot12;
                    var4 = var5.addChangeListener;
                    var3 = var2.updateMediaPermissions;
                    var3 = var4.bind(var5)(var3);
                    var5 = _closure1_slot14;
                    var4 = var5.addChangeListener;
                    var3 = var2.updateMediaPermissions;
                    var3 = var4.bind(var5)(var3);
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 18;
                    var3 = var5[var3];
                    var5 = var4.bind(var0)(var3);
                    var4 = var5.subscribe;
                    var3 = var2.userDidClosePip;
                    var2 = 'LOGOUT';
                    var2 = var4.bind(var5)(var2, var3);
                    var3 = _closure1_slot19;
                    var2 = var3.verbose;
                    var1 = 'Initialized and subscribed to playback events';
                    var1 = var2.bind(var3)(var1);
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(17);
        var0[0] = var4;
        var4 = {};
        var6 = 'updateMediaPermissions';
        var4.key = var6;
        var6 = function() {
            var0 = this;
            var _closure3_slot0 = var0;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var0 = 16;
            var2 = var2[var0];
            var0 = undefined;
            var3 = var3.bind(var0)(var2);
            var2 = var3.batchUpdates;
            var1 = function() { // Environment: var1
                _fun98560: for (var _fun98560_ip = 0;;) switch (_fun98560_ip) {
                    case 0:
                        var2 = _closure1_slot20;
                        var0 = var2.getState;
                        var0 = var0.bind(var2)();
                        var3 = var0.activeMediaPlayerSource;
                        var5 = _closure1_slot12;
                        var4 = var5.getChannel;
                        var2 = null;
                        var7 = var2 == var3;
                        var0 = undefined;
                        var6 = undefined;
                        if (var7) {
                            _fun98560_ip = 50;
                            continue _fun98560
                        }
                    case 45:
                        var6 = var3.channelId;
                    case 50:
                        var7 = var2 != var6;
                        var3 = null;
                        if (!var7) {
                            _fun98560_ip = 62;
                            continue _fun98560
                        }
                    case 59:
                        var3 = var6;
                    case 62:
                        var5 = var4.bind(var5)(var3);
                        if (!(var2 != var5)) {
                            _fun98560_ip = 156;
                            continue _fun98560
                        }
                    case 71:
                        var2 = var5.isPrivate;
                        var2 = var2.bind(var5)();
                        if (var2) {
                            _fun98560_ip = 156;
                            continue _fun98560
                        }
                    case 84:
                        var4 = _closure1_slot14;
                        var3 = var4.can;
                        var2 = _closure1_slot18;
                        var2 = var2.VIEW_CHANNEL;
                        var2 = var3.bind(var4)(var2, var5);
                        if (var2) {
                            _fun98560_ip = 156;
                            continue _fun98560
                        }
                    case 113:
                        var4 = _closure1_slot20;
                        var3 = var4.setState;
                        var2 = {};
                        var5 = false;
                        var2.canAccessMedia = var5;
                        var2 = var3.bind(var4)(var2);
                        var3 = _closure3_slot0;
                        var2 = var3.pauseCurrentPlayer;
                        var2 = var2.bind(var3)();
                        _fun98560_ip = 180;
                        continue _fun98560;
                    case 156:
                        var3 = _closure1_slot20;
                        var2 = var3.setState;
                        var1 = {};
                        var4 = true;
                        var1.canAccessMedia = var4;
                        var1 = var2.bind(var3)(var1);
                    case 180:
                        return var0;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = '_terminate';
        var4.key = var6;
        var6 = function() {
            _fun98561: for (var _fun98561_ip = 0;;) switch (_fun98561_ip) {
                case 0:
                    var1 = this;
                    var3 = var1.subscriptions;
                    var2 = var3.forEach;
                    var0 = function(arg0) { // Environment: var0
                        var1 = arg0;
                        var0 = var1.remove;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var0 = var2.bind(var3)(var0);
                    var0 = new Array(0);
                    var1.subscriptions = var0;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var0 = 17;
                    var3 = var3[var0];
                    var0 = undefined;
                    var4 = var4.bind(var0)(var3);
                    var3 = var4.getRootNavigationRef;
                    var7 = var3.bind(var4)();
                    var3 = null;
                    if (!(var3 != var7)) {
                        _fun98561_ip = 101;
                        continue _fun98561
                    }
                case 79:
                    var6 = var7.removeListener;
                    var5 = var1.updateDisplayState;
                    var4 = 'state';
                    var4 = var6.bind(var7)(var4, var5);
                case 101:
                    var4 = var1.voicePanelStoreUnsubscribe;
                    if (!(var3 != var4)) {
                        _fun98561_ip = 121;
                        continue _fun98561
                    }
                case 111:
                    var3 = var4.call;
                    var3 = var3.bind(var4)(var1);
                case 121:
                    var5 = _closure1_slot10;
                    var4 = var5.removeChangeListener;
                    var3 = var1.handleEmbeddedActivitiesUpdated;
                    var3 = var4.bind(var5)(var3);
                    var5 = _closure1_slot12;
                    var4 = var5.removeChangeListener;
                    var3 = var1.updateMediaPermissions;
                    var3 = var4.bind(var5)(var3);
                    var5 = _closure1_slot14;
                    var4 = var5.removeChangeListener;
                    var3 = var1.updateMediaPermissions;
                    var3 = var4.bind(var5)(var3);
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 18;
                    var2 = var4[var2];
                    var4 = var3.bind(var0)(var2);
                    var3 = var4.unsubscribe;
                    var2 = var1.userDidClosePip;
                    var1 = 'LOGOUT';
                    var1 = var3.bind(var4)(var1, var2);
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'pauseCurrentPlayer';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot9;
            var1 = var0.MediaPlayerManager;
            var0 = var1.pauseCurrentPlayer;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'playCurrentPlayer';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot9;
            var1 = var0.MediaPlayerManager;
            var0 = var1.playCurrentPlayer;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'userDidClosePip';
        var4.key = var6;
        var6 = function() {
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 16;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.batchUpdates;
            var1 = function() { // Environment: var1
                var2 = _closure1_slot20;
                var1 = var2.setState;
                var0 = {
                    'wasPipClosedByUser': true,
                    'showPip': false
                };
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'pauseAndClosePip';
        var4.key = var6;
        var6 = function() {
            var0 = this;
            var _closure3_slot0 = var0;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var0 = 16;
            var2 = var2[var0];
            var0 = undefined;
            var3 = var3.bind(var0)(var2);
            var2 = var3.batchUpdates;
            var1 = function() { // Environment: var1
                var1 = _closure3_slot0;
                var0 = var1.pauseCurrentPlayer;
                var0 = var0.bind(var1)();
                var2 = _closure1_slot20;
                var1 = var2.setState;
                var0 = {
                    'wasPipClosedByUser': true,
                    'showPip': false
                };
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
            };
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'handleVoicePanelStateUpdated';
        var4.key = var6;
        var6 = function() {
            _fun98569: for (var _fun98569_ip = 0;;) switch (_fun98569_ip) {
                case 0:
                    var1 = this;
                    var2 = _closure1_slot11;
                    var0 = var2.getState;
                    var2 = var0.bind(var2)();
                    var0 = var2.isVoicePanelFullscreen;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun98569_ip = 50;
                        continue _fun98569
                    }
                case 33:
                    var2 = var2.voicePanelsPIP;
                    var3 = var2.size;
                    var2 = 0;
                    var0 = var3 > var2;
                case 50:
                    if (!var0) {
                        _fun98569_ip = 63;
                        continue _fun98569
                    }
                case 53:
                    var0 = var1.pauseAndClosePip;
                    var0 = var0.bind(var1)();
                case 63:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'handleEmbeddedActivitiesUpdated';
        var4.key = var6;
        var6 = function() {
            _fun98570: for (var _fun98570_ip = 0;;) switch (_fun98570_ip) {
                case 0:
                    var1 = this;
                    var3 = _closure1_slot10;
                    var2 = var3.getActivityPanelMode;
                    var2 = var2.bind(var3)();
                    var0 = _closure1_slot15;
                    var0 = var0.PIP;
                    if (!(var2 === var0)) {
                        _fun98570_ip = 44;
                        continue _fun98570
                    }
                case 34:
                    var0 = var1.pauseAndClosePip;
                    var0 = var0.bind(var1)();
                case 44:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'handleMediaPlayerPlaybackRateChanged';
        var4.key = var6;
        var6 = function arg0() {
            var0 = arg0;
            var2 = this;
            var _closure3_slot0 = var2;
            var2 = var0.source;
            var _closure3_slot1 = var2;
            var0 = var0.rate;
            var _closure3_slot2 = var0;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var0 = 16;
            var2 = var2[var0];
            var0 = undefined;
            var3 = var3.bind(var0)(var2);
            var2 = var3.batchUpdates;
            var1 = function() { // Environment: var1
                _fun98572: for (var _fun98572_ip = 0;;) switch (_fun98572_ip) {
                    case 0:
                        var0 = _closure3_slot1;
                        var8 = null;
                        if (!(var8 == var0)) {
                            _fun98572_ip = 45;
                            continue _fun98572
                        }
                    case 13:
                        var3 = _closure1_slot20;
                        var2 = var3.setState;
                        var0 = {
                            'rate': 0,
                            'isPlaying': false
                        };
                        var0 = var2.bind(var3)(var0);
                    case 45:
                        var5 = _closure1_slot19;
                        var4 = var5.verbose;
                        var10 = _closure3_slot2;
                        var0 = _closure3_slot1;
                        var3 = var8 == var0;
                        var0 = undefined;
                        var9 = undefined;
                        if (var3) {
                            _fun98572_ip = 86;
                            continue _fun98572
                        }
                    case 77:
                        var3 = _closure3_slot1;
                        var9 = var3.id;
                    case 86:
                        var3 = global;
                        var3 = var3.HermesInternal;
                        var7 = var3.concat;
                        var6 = 'Playback rate changed to ';
                        var3 = ': ';
                        var3 = var7.bind(var6)(var10, var3, var9);
                        var3 = var4.bind(var5)(var3);
                        var4 = _closure1_slot20;
                        var3 = var4.getState;
                        var3 = var3.bind(var4)();
                        var5 = var3.activeMediaPlayerSource;
                        var7 = var3.isPlaying;
                        var6 = var3.wasPipClosedByUser;
                        var4 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var3 = 19;
                        var3 = var9[var3];
                        var4 = var4.bind(var0)(var3);
                        var3 = _closure3_slot1;
                        var8 = var8 != var3;
                        var3 = undefined;
                        if (!var8) {
                            _fun98572_ip = 192;
                            continue _fun98572
                        }
                    case 188:
                        var3 = _closure3_slot1;
                    case 192:
                        var3 = var4.bind(var0)(var5, var3);
                        if (var3) {
                            _fun98572_ip = 256;
                            continue _fun98572
                        }
                    case 201:
                        var5 = _closure3_slot0;
                        var4 = var5.handleMediaPlayerPlaybackSourceChanged;
                        var3 = {};
                        var8 = _closure3_slot1;
                        var3.source = var8;
                        var3 = var4.bind(var5)(var3);
                        var4 = var5.handleMediaPlayerPlaybackRateChanged;
                        var3 = {};
                        var3.source = var8;
                        var8 = _closure3_slot2;
                        var3.rate = var8;
                        var3 = var4.bind(var5)(var3);
                        var3 = undefined;
                        return var3;
                    case 256:
                        var4 = _closure1_slot20;
                        var3 = var4.setState;
                        var2 = {};
                        var5 = _closure3_slot2;
                        var2.rate = var5;
                        var8 = 0;
                        var5 = var8 !== var5;
                        var2.isPlaying = var5;
                        var5 = false;
                        var7 = var5 === var7;
                        if (!var7) {
                            _fun98572_ip = 305;
                            continue _fun98572
                        }
                    case 297:
                        var5 = _closure3_slot2;
                        var7 = var5 > var8;
                    case 305:
                        var5 = !var7;
                        if (var7) {
                            _fun98572_ip = 314;
                            continue _fun98572
                        }
                    case 311:
                        var5 = var6;
                    case 314:
                        var2.wasPipClosedByUser = var5;
                        var2 = var3.bind(var4)(var2);
                        var2 = _closure3_slot0;
                        var1 = var2.updateDisplayState;
                        var1 = var1.bind(var2)();
                        return var0;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var4.value = var6;
        var0[9] = var4;
        var4 = {};
        var6 = 'handleMediaPlayerPlaybackProgressUpdated';
        var4.key = var6;
        var6 = function arg0() {
            var0 = arg0;
            var2 = var0.source;
            var _closure3_slot0 = var2;
            var2 = var0.time;
            var _closure3_slot1 = var2;
            var0 = var0.duration;
            var _closure3_slot2 = var0;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var0 = 16;
            var2 = var2[var0];
            var0 = undefined;
            var3 = var3.bind(var0)(var2);
            var2 = var3.batchUpdates;
            var1 = function() { // Environment: var1
                _fun98574: for (var _fun98574_ip = 0;;) switch (_fun98574_ip) {
                    case 0:
                        var2 = _closure1_slot20;
                        var0 = var2.getState;
                        var2 = var0.bind(var2)();
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var0 = 19;
                        var3 = var3[var0];
                        var0 = undefined;
                        var7 = var4.bind(var0)(var3);
                        var4 = var2.activeMediaPlayerSource;
                        var3 = _closure3_slot0;
                        var5 = null;
                        var8 = var5 != var3;
                        var3 = undefined;
                        if (!var8) {
                            _fun98574_ip = 67;
                            continue _fun98574
                        }
                    case 63:
                        var3 = _closure3_slot0;
                    case 67:
                        var3 = var7.bind(var0)(var4, var3);
                        if (!var3) {
                            _fun98574_ip = 308;
                            continue _fun98574
                        }
                    case 79:
                        var4 = var2.currentlyDisplayedChannelId;
                        var3 = var2.showPip;
                        if (var3) {
                            _fun98574_ip = 130;
                            continue _fun98574
                        }
                    case 94:
                        if (!(var5 != var4)) {
                            _fun98574_ip = 308;
                            continue _fun98574
                        }
                    case 101:
                        var3 = _closure3_slot0;
                        var7 = var5 == var3;
                        var3 = undefined;
                        if (var7) {
                            _fun98574_ip = 123;
                            continue _fun98574
                        }
                    case 114:
                        var7 = _closure3_slot0;
                        var3 = var7.channelId;
                    case 123:
                        if (!(var4 === var3)) {
                            _fun98574_ip = 308;
                            continue _fun98574
                        }
                    case 130:
                        var4 = _closure3_slot2;
                        var3 = 0;
                        var3 = var4 > var3;
                        var4 = undefined;
                        if (!var3) {
                            _fun98574_ip = 202;
                            continue _fun98574
                        }
                    case 145:
                        var3 = {};
                        var9 = _closure3_slot1;
                        var3.time = var9;
                        var8 = _closure3_slot2;
                        var3.duration = var8;
                        var7 = _closure1_slot22;
                        var6 = {};
                        var6.time = var9;
                        var6.duration = var8;
                        var7 = var7.bind(var0)(var6);
                        var6 = var5 != var7;
                        if (!var6) {
                            _fun98574_ip = 194;
                            continue _fun98574
                        }
                    case 191:
                        var6 = var7;
                    case 194:
                        var3.isCompleted = var6;
                        var4 = var3;
                    case 202:
                        var3 = var2.progress;
                        var2 = var5 != var3;
                        if (!var2) {
                            _fun98574_ip = 219;
                            continue _fun98574
                        }
                    case 215:
                        var2 = var5 != var4;
                    case 219:
                        if (!var2) {
                            _fun98574_ip = 265;
                            continue _fun98574
                        }
                    case 222:
                        var5 = global;
                        var6 = var5.Math;
                        var5 = var6.abs;
                        var7 = var4.time;
                        var3 = var3.time;
                        var3 = var7 - var3;
                        var5 = var5.bind(var6)(var3);
                        var3 = _closure1_slot17;
                        var2 = var5 < var3;
                    case 265:
                        if (!var2) {
                            _fun98574_ip = 283;
                            continue _fun98574
                        }
                    case 268:
                        var5 = var4.time;
                        var3 = var4.duration;
                        var2 = var5 !== var3;
                    case 283:
                        if (var2) {
                            _fun98574_ip = 308;
                            continue _fun98574
                        }
                    case 286:
                        var3 = _closure1_slot20;
                        var2 = var3.setState;
                        var1 = {};
                        var1.progress = var4;
                        var1 = var2.bind(var3)(var1);
                    case 308:
                        return var0;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var4.value = var6;
        var0[10] = var4;
        var4 = {};
        var6 = 'handleMediaPlayerPlaybackSourceChanged';
        var4.key = var6;
        var6 = function arg0() {
            var0 = this;
            var _closure3_slot0 = var0;
            var0 = arg0;
            var0 = var0.source;
            var _closure3_slot1 = var0;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var0 = 16;
            var2 = var2[var0];
            var0 = undefined;
            var3 = var3.bind(var0)(var2);
            var2 = var3.batchUpdates;
            var1 = function() { // Environment: var1
                _fun98576: for (var _fun98576_ip = 0;;) switch (_fun98576_ip) {
                    case 0:
                        var1 = _closure1_slot20;
                        var0 = var1.getState;
                        var3 = var0.bind(var1)();
                        var7 = _closure1_slot19;
                        var5 = var7.verbose;
                        var0 = _closure3_slot1;
                        var6 = null;
                        var4 = var6 == var0;
                        var0 = undefined;
                        var9 = undefined;
                        if (var4) {
                            _fun98576_ip = 56;
                            continue _fun98576
                        }
                    case 47:
                        var4 = _closure3_slot1;
                        var9 = var4.id;
                    case 56:
                        var4 = global;
                        var4 = var4.HermesInternal;
                        var8 = var4.concat;
                        var4 = 'Playback source changed: ';
                        var4 = var8.bind(var4)(var9);
                        var4 = var5.bind(var7)(var4);
                        var5 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var4 = 19;
                        var4 = var7[var4];
                        var5 = var5.bind(var0)(var4);
                        var3 = var3.activeMediaPlayerSource;
                        var7 = var6 != var3;
                        var4 = undefined;
                        if (!var7) {
                            _fun98576_ip = 123;
                            continue _fun98576
                        }
                    case 120:
                        var4 = var3;
                    case 123:
                        var3 = _closure3_slot1;
                        var7 = var6 != var3;
                        var3 = undefined;
                        if (!var7) {
                            _fun98576_ip = 140;
                            continue _fun98576
                        }
                    case 136:
                        var3 = _closure3_slot1;
                    case 140:
                        var3 = var5.bind(var0)(var4, var3);
                        if (var3) {
                            _fun98576_ip = 274;
                            continue _fun98576
                        }
                    case 152:
                        var4 = _closure1_slot20;
                        var3 = var4.setState;
                        var2 = {
                            'activeMediaPlayerSource': null,
                            'mediaSourceMessage': null,
                            'progress': null,
                            'rate': 0,
                            'isPlaying': false,
                            'wasPipClosedByUser': false
                        };
                        var5 = _closure3_slot1;
                        var7 = var6 != var5;
                        var5 = undefined;
                        if (!var7) {
                            _fun98576_ip = 193;
                            continue _fun98576
                        }
                    case 189:
                        var5 = _closure3_slot1;
                    case 193:
                        var2.activeMediaPlayerSource = var5;
                        var5 = _closure3_slot1;
                        var6 = var6 != var5;
                        var5 = undefined;
                        if (!var6) {
                            _fun98576_ip = 233;
                            continue _fun98576
                        }
                    case 212:
                        var8 = _closure3_slot0;
                        var7 = var8.getOrFetchMediaSourceMessage;
                        var6 = _closure3_slot1;
                        var5 = var7.bind(var8)(var6);
                    case 233:
                        var2.mediaSourceMessage = var5;
                        var2.progress = var0;
                        var2 = var3.bind(var4)(var2);
                        var2 = _closure3_slot0;
                        var1 = var2.updateMediaPermissions;
                        var1 = var1.bind(var2)();
                        var1 = var2.updateDisplayState;
                        var1 = var1.bind(var2)();
                    case 274:
                        return var0;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var4.value = var6;
        var0[11] = var4;
        var4 = {};
        var6 = 'getOrFetchMediaSourceMessage';
        var4.key = var6;
        var6 = function arg0() {
            _fun98577: for (var _fun98577_ip = 0;;) switch (_fun98577_ip) {
                case 0:
                    var0 = arg0;
                    var2 = this;
                    var _closure3_slot0 = var2;
                    var6 = var0.channelId;
                    var5 = var0.messageId;
                    var3 = null;
                    if (!(var3 != var5)) {
                        _fun98577_ip = 32;
                        continue _fun98577
                    }
                case 28:
                    if (!(var3 == var6)) {
                        _fun98577_ip = 36;
                        continue _fun98577
                    }
                case 32:
                    var0 = undefined;
                    return var0;
                case 36:
                    var4 = _closure1_slot13;
                    var0 = var4.getMessage;
                    var0 = var0.bind(var4)(var6, var5);
                    if (!(var3 == var0)) {
                        _fun98577_ip = 119;
                        continue _fun98577
                    }
                case 59:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 20;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.fetchMessage;
                    var2 = {};
                    var2.channelId = var6;
                    var2.messageId = var5;
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.then;
                    var1 = function(arg0) { // Environment: var1
                        _fun98578: for (var _fun98578_ip = 0;;) switch (_fun98578_ip) {
                            case 0:
                                var2 = arg0;
                                var0 = null;
                                if (!(var0 != var2)) {
                                    _fun98578_ip = 29;
                                    continue _fun98578
                                }
                            case 9:
                                var1 = _closure3_slot0;
                                var0 = var1.handleMediaSourceMessageUpdated;
                                var0 = var0.bind(var1)(var2);
                            case 29:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                case 119:
                    return var0;
            }
        };
        var4.value = var6;
        var0[12] = var4;
        var4 = {};
        var6 = 'handleMediaSourceMessageUpdated';
        var4.key = var6;
        var6 = function arg0() {
            var0 = arg0;
            var _closure3_slot0 = var0;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var0 = 16;
            var2 = var2[var0];
            var0 = undefined;
            var3 = var3.bind(var0)(var2);
            var2 = var3.batchUpdates;
            var1 = function() { // Environment: var1
                _fun98580: for (var _fun98580_ip = 0;;) switch (_fun98580_ip) {
                    case 0:
                        var2 = _closure1_slot20;
                        var0 = var2.getState;
                        var0 = var0.bind(var2)();
                        var2 = var0.activeMediaPlayerSource;
                        var0 = null;
                        var4 = var0 == var2;
                        var0 = undefined;
                        var3 = undefined;
                        if (var4) {
                            _fun98580_ip = 41;
                            continue _fun98580
                        }
                    case 36:
                        var3 = var2.messageId;
                    case 41:
                        var2 = _closure3_slot0;
                        var2 = var2.id;
                        if (!(var3 === var2)) {
                            _fun98580_ip = 83;
                            continue _fun98580
                        }
                    case 57:
                        var3 = _closure1_slot20;
                        var2 = var3.setState;
                        var1 = {};
                        var4 = _closure3_slot0;
                        var1.mediaSourceMessage = var4;
                        var1 = var2.bind(var3)(var1);
                    case 83:
                        return var0;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var4.value = var6;
        var0[13] = var4;
        var4 = {};
        var6 = 'handleMediaPlayerViewWillAppear';
        var4.key = var6;
        var6 = function arg0() {
            var0 = arg0;
            var2 = this;
            var _closure3_slot0 = var2;
            var2 = var0.mediaItemIds;
            var _closure3_slot1 = var2;
            var0 = var0.channelId;
            var _closure3_slot2 = var0;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var0 = 16;
            var2 = var2[var0];
            var0 = undefined;
            var3 = var3.bind(var0)(var2);
            var2 = var3.batchUpdates;
            var1 = function() { // Environment: var1
                _fun98582: for (var _fun98582_ip = 0;;) switch (_fun98582_ip) {
                    case 0:
                        var2 = _closure1_slot20;
                        var0 = var2.getState;
                        var0 = var0.bind(var2)();
                        var4 = var0.displayedMediaItemIdsPerChannel;
                        var2 = _closure3_slot2;
                        var6 = var4[var2];
                        var2 = null;
                        if (!(var2 == var6)) {
                            _fun98582_ip = 44;
                            continue _fun98582
                        }
                    case 40:
                        var6 = new Array(0);
                    case 44:
                        var2 = global;
                        var5 = var2.Set;
                        var2 = new Array(0);
                        var7 = 0;
                        var9 = var2;
                        var8 = var6;
                        var7 = arraySpread(var9, var8, var7);
                        var8 = _closure3_slot1;
                        var9 = var2;
                        var3 = arraySpread(var9, var8, var7);
                        var3 = var5.prototype;
                        var3 = Object.create(var3, {
                            constructor: {
                                value: var5
                            }
                        });
                        var10 = var3;
                        var9 = var2;
                        var2 = new var10[var5](var9, var8);
                        var3 = var2 instanceof Object ? var2 : var3;
                        var2 = _closure3_slot2;
                        var4[var2] = var3;
                        var3 = _closure1_slot20;
                        var2 = var3.setState;
                        var1 = {};
                        var1.displayedMediaItemIdsPerChannel = var4;
                        var1 = var2.bind(var3)(var1);
                        var1 = _closure3_slot0;
                        var0 = var1.updateDisplayState;
                        var0 = var0.bind(var1)();
                        var0 = undefined;
                        return var0;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var4.value = var6;
        var0[14] = var4;
        var4 = {};
        var6 = 'handleMediaPlayerViewDidDisappear';
        var4.key = var6;
        var6 = function arg0() {
            var0 = arg0;
            var2 = this;
            var _closure3_slot0 = var2;
            var2 = var0.mediaItemIds;
            var _closure3_slot1 = var2;
            var0 = var0.channelId;
            var _closure3_slot2 = var0;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var0 = 16;
            var2 = var2[var0];
            var0 = undefined;
            var3 = var3.bind(var0)(var2);
            var2 = var3.batchUpdates;
            var1 = function() { // Environment: var1
                _fun98584: for (var _fun98584_ip = 0;;) switch (_fun98584_ip) {
                    case 0:
                        var2 = _closure1_slot20;
                        var0 = var2.getState;
                        var0 = var0.bind(var2)();
                        var4 = var0.displayedMediaItemIdsPerChannel;
                        var3 = global;
                        var6 = var3.Set;
                        var2 = _closure3_slot2;
                        var2 = var4[var2];
                        var5 = null;
                        if (!(var5 == var2)) {
                            _fun98584_ip = 74;
                            continue _fun98584
                        }
                    case 48:
                        var3 = var3.Set;
                        var5 = var3.prototype;
                        var5 = Object.create(var5, {
                            constructor: {
                                value: var3
                            }
                        });
                        var11 = var5;
                        var3 = new var11[var3](var10);
                        var2 = var3 instanceof Object ? var3 : var5;
                    case 74:
                        var7 = new Array(0);
                        var5 = 0;
                        var10 = var7;
                        var9 = var2;
                        var8 = 0;
                        var2 = arraySpread(var10, var9, var8);
                        var3 = var7.filter;
                        var2 = function(arg0) { // Environment: var2
                            var2 = _closure3_slot1;
                            var1 = var2.includes;
                            var0 = arg0;
                            var0 = var1.bind(var2)(var0);
                            var0 = !var0;
                            return var0;
                        };
                        var10 = var3.bind(var7)(var2);
                        var3 = var6.prototype;
                        var3 = Object.create(var3, {
                            constructor: {
                                value: var6
                            }
                        });
                        var11 = var3;
                        var2 = new var11[var6](var10, var9);
                        var3 = var2 instanceof Object ? var2 : var3;
                        var2 = var3.size;
                        if (!(var5 !== var2)) {
                            _fun98584_ip = 150;
                            continue _fun98584
                        }
                    case 140:
                        var2 = _closure3_slot2;
                        var4[var2] = var3;
                        _fun98584_ip = 158;
                        continue _fun98584;
                    case 150:
                        var2 = _closure3_slot2;
                        var2 = delete var4[var2];
                    case 158:
                        var3 = _closure1_slot20;
                        var2 = var3.setState;
                        var1 = {};
                        var1.displayedMediaItemIdsPerChannel = var4;
                        var1 = var2.bind(var3)(var1);
                        var1 = _closure3_slot0;
                        var0 = var1.updateDisplayState;
                        var0 = var0.bind(var1)();
                        var0 = undefined;
                        return var0;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var4.value = var6;
        var0[15] = var4;
        var4 = {};
        var6 = 'updateDisplayState';
        var4.key = var6;
        var5 = function() {
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 16;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.batchUpdates;
            var1 = function() { // Environment: var1
                _fun98587: for (var _fun98587_ip = 0;;) switch (_fun98587_ip) {
                    case 0:
                        var2 = _closure1_slot20;
                        var0 = var2.getState;
                        var2 = var0.bind(var2)();
                        var5 = var2.displayedMediaItemIdsPerChannel;
                        var3 = var2.currentlyDisplayedChannelId;
                        var4 = var2.activeMediaPlayerSource;
                        var0 = undefined;
                        if (!(var0 === var4)) {
                            _fun98587_ip = 43;
                            continue _fun98587
                        }
                    case 41:
                        var4 = {};
                    case 43:
                        var10 = var4.id;
                        var4 = var2.wasPipClosedByUser;
                        var6 = var2.progress;
                        var7 = var2.isPlaying;
                        var2 = var2.showPip;
                        if (var4) {
                            _fun98587_ip = 358;
                            continue _fun98587
                        }
                    case 78:
                        if (var7) {
                            _fun98587_ip = 87;
                            continue _fun98587
                        }
                    case 81:
                        if (!var2) {
                            _fun98587_ip = 382;
                            continue _fun98587
                        }
                    case 87:
                        if (var7) {
                            _fun98587_ip = 114;
                            continue _fun98587
                        }
                    case 90:
                        var2 = null;
                        var2 = var2 != var6;
                        if (!var2) {
                            _fun98587_ip = 111;
                            continue _fun98587
                        }
                    case 99:
                        var4 = _closure1_slot22;
                        var4 = var4.bind(var0)(var6);
                        var2 = !var4;
                    case 111:
                        var7 = var2;
                    case 114:
                        var4 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var2 = 21;
                        var2 = var6[var2];
                        var4 = var4.bind(var0)(var2);
                        var2 = var4.getFocusedChannelId;
                        var6 = var2.bind(var4)();
                        var2 = null;
                        if (!(var2 != var6)) {
                            _fun98587_ip = 187;
                            continue _fun98587
                        }
                    case 150:
                        if (!(var3 !== var6)) {
                            _fun98587_ip = 187;
                            continue _fun98587
                        }
                    case 154:
                        var9 = var5;
                        for (var3 in var9)
                            case 165: {
                                case 174: var12 = var3;
                                if (var12 === var6) {
                                    _fun98587_ip = 165;
                                    continue _fun98587
                                }
                                case 181: var12 = delete var5[var12];
                                _fun98587_ip = 165;
                                continue _fun98587;
                            }
                    case 187:
                        if (!(var2 == var10)) {
                            _fun98587_ip = 228;
                            continue _fun98587
                        }
                    case 191:
                        var8 = _closure1_slot20;
                        var4 = var8.setState;
                        var3 = {};
                        var3.showPip = var7;
                        var3.currentlyDisplayedChannelId = var6;
                        var3.displayedMediaItemIdsPerChannel = var5;
                        var3 = var4.bind(var8)(var3);
                        _fun98587_ip = 382;
                        continue _fun98587;
                    case 228:
                        if (!(var2 == var6)) {
                            _fun98587_ip = 266;
                            continue _fun98587
                        }
                    case 232:
                        var8 = _closure1_slot20;
                        var4 = var8.setState;
                        var3 = {};
                        var3.showPip = var7;
                        var3.currentlyDisplayedChannelId = var6;
                        var3.displayedMediaItemIdsPerChannel = var5;
                        var3 = var4.bind(var8)(var3);
                        _fun98587_ip = 382;
                        continue _fun98587;
                    case 266:
                        var9 = var5[var6];
                        if (!(var2 == var9)) {
                            _fun98587_ip = 308;
                            continue _fun98587
                        }
                    case 274:
                        var4 = _closure1_slot20;
                        var3 = var4.setState;
                        var2 = {};
                        var2.showPip = var7;
                        var2.currentlyDisplayedChannelId = var6;
                        var2.displayedMediaItemIdsPerChannel = var5;
                        var2 = var3.bind(var4)(var2);
                        _fun98587_ip = 382;
                        continue _fun98587;
                    case 308:
                        var4 = _closure1_slot20;
                        var3 = var4.setState;
                        var2 = {};
                        if (!var7) {
                            _fun98587_ip = 336;
                            continue _fun98587
                        }
                    case 323:
                        var8 = var9.has;
                        var8 = var8.bind(var9)(var10);
                        var7 = !var8;
                    case 336:
                        var2.showPip = var7;
                        var2.currentlyDisplayedChannelId = var6;
                        var2.displayedMediaItemIdsPerChannel = var5;
                        var2 = var3.bind(var4)(var2);
                        _fun98587_ip = 382;
                        continue _fun98587;
                    case 358:
                        var3 = _closure1_slot20;
                        var2 = var3.setState;
                        var1 = {};
                        var4 = false;
                        var1.showPip = var4;
                        var1 = var2.bind(var3)(var1);
                    case 382:
                        return var0;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var4.value = var5;
        var0[16] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var4 = var4.bind(var0)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {
        constructor: {
            value: var4
        }
    });
    var13 = var5;
    var4 = new var13[var4](var12);
    var4 = var4 instanceof Object ? var4 : var5;
    var5 = 23;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/media/native/MediaPlayerManager.tsx';
    var5 = var6.bind(var7)(var5);
    var2.default = var4;
    var2.useMediaPlayerManagerStore = var3;
    var2.isPlaybackComplete = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 27, 1371, 7899, 1372, 4249, 3091, 7936, 12867, 483, 3, 629, 802, 3920, 806, 628, 6546, 8760, 4017, 2]);