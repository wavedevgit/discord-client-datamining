// modules/video_calls/native/useScreenshareUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var9 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var10;
    var4 = function() { // Original name: getOSRequirement, environment: var1
        var1 = _closure1_slot5;
        var0 = 12;
        var0 = var1 >= var0;
        return var0;
    };
    var _closure1_slot12 = var4;
    var3 = function(arg0, arg1, arg2, arg3) { // Original name: getStreamPressHandler, environment: var1
        _fun67824: for (var _fun67824_ip = 0;;) switch (_fun67824_ip) {
            case 0:
                var1 = arg0;
                var _closure2_slot0 = var1;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 4;
                var2 = var4[var2];
                var5 = undefined;
                var3 = var3.bind(var5)(var2);
                var2 = var3.getVoiceEngine;
                var2 = var2.bind(var3)();
                var3 = var2.platform;
                var2 = 'android';
                if (!(var2 !== var3)) {
                    _fun67824_ip = 64;
                    continue _fun67824
                }
            case 58:
                var3 = _closure1_slot8;
                _fun67824_ip = 68;
                continue _fun67824;
            case 64:
                var3 = _closure1_slot7;
            case 68:
                var2 = arg3;
                if (var2) {
                    _fun67824_ip = 83;
                    continue _fun67824
                }
            case 74:
                var0 = function() { // Original name: S, environment: var0
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var6 = 14;
                    var1 = var3[var6];
                    var0 = undefined;
                    var5 = var2.bind(var0)(var1);
                    var4 = var5.reportAVError;
                    var1 = {};
                    var6 = var3[var6];
                    var6 = var2.bind(var0)(var6);
                    var6 = var6.AVError;
                    var6 = var6.SCREENSHARE_OS_NOT_SUPPORTED;
                    var1.type = var6;
                    var6 = _closure2_slot0;
                    var6 = var6.id;
                    var1.channelId = var6;
                    var1 = var4.bind(var5)(var1);
                    var1 = 5;
                    var1 = var3[var1];
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.showMinOSScreenshareRequirementAlert;
                    var1 = var1.bind(var2)();
                    return var0;
                };
                _fun67824_ip = 130;
                continue _fun67824;
            case 83:
                var2 = arg1;
                if (var2) {
                    _fun67824_ip = 117;
                    continue _fun67824
                }
            case 89:
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 5;
                var2 = var6[var2];
                var2 = var4.bind(var5)(var2);
                var0 = var2.showScreenshareDisabledAlert;
                _fun67824_ip = 130;
                continue _fun67824;
            case 117:
                var2 = arg2;
                var0 = var3;
                if (!var2) {
                    _fun67824_ip = 130;
                    continue _fun67824
                }
            case 126:
                var0 = _closure1_slot10;
            case 130:
                return var0;
        }
    };
    var _closure1_slot13 = var3;
    var7 = global;
    var8 = var7.Object;
    var6 = var8.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var5);
    var0 = 0;
    var5 = var10[var0];
    var0 = undefined;
    var6 = var9.bind(var0)(var5);
    var5 = var6.NativeModules;
    var6 = var6.Platform;
    var8 = 1;
    var8 = var10[var8];
    var8 = var11.bind(var0)(var8);
    var _closure1_slot3 = var8;
    var8 = 2;
    var8 = var10[var8];
    var8 = var9.bind(var0)(var8);
    var8 = var8.ApplicationStreamStates;
    var _closure1_slot4 = var8;
    var8 = var7.parseInt;
    var7 = var6.Version;
    var6 = 10;
    var6 = var8.bind(var0)(var7, var6);
    var _closure1_slot5 = var6;
    var5 = var5.BroadcastUploadManager;
    var _closure1_slot6 = var5;
    var5 = function() { // Original name: startAndroidScreenshare, environment: var1
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.isForegroundServiceRunning;
        var1 = function(arg0) { // Environment: var1
            _fun67827: for (var _fun67827_ip = 0;;) switch (_fun67827_ip) {
                case 0:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = arg0;
                    if (var0) {
                        _fun67827_ip = 43;
                        continue _fun67827
                    }
                case 17:
                    var0 = 5;
                    var3 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var3);
                    var0 = var3.showScreenshareDisabledAlert;
                    var0 = var0.bind(var3)();
                    _fun67827_ip = 79;
                    continue _fun67827;
                case 43:
                    var0 = 4;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var0 = var1.getVoiceEngine;
                    var1 = var0.bind(var1)();
                    var0 = var1.startBroadcast;
                    var0 = var0.bind(var1)();
                case 79:
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var _closure1_slot7 = var5;
    var5 = function() { // Original name: showScreensharePicker, environment: var1
        var1 = _closure1_slot6;
        var0 = var1.showPicker;
        var0 = var0.bind(var1)();
        var0 = undefined;
        return var0;
    };
    var _closure1_slot8 = var5;
    var7 = function() { // Original name: handleCloseScreenshare, environment: var1
        _fun67829: for (var _fun67829_ip = 0;;) switch (_fun67829_ip) {
            case 0:
                var2 = _closure1_slot3;
                var1 = var2.getCurrentUserActiveStream;
                var6 = var1.bind(var2)();
                var3 = null;
                if (!(var3 != var6)) {
                    _fun67829_ip = 79;
                    continue _fun67829
                }
            case 23:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 6;
                var1 = var8[var1];
                var5 = undefined;
                var4 = var7.bind(var5)(var1);
                var2 = var4.stopStream;
                var1 = 7;
                var1 = var8[var1];
                var5 = var7.bind(var5)(var1);
                var1 = var5.encodeStreamKey;
                var1 = var1.bind(var5)(var6);
                var1 = var2.bind(var4)(var1);
            case 79:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 8;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.setGoLiveSource;
                var1 = var1.bind(var2)(var3);
                return var0;
        }
    };
    var _closure1_slot9 = var7;
    var6 = function() { // Original name: stopScreenshare, environment: var1
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 4;
        var2 = var2[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.getVoiceEngine;
        var3 = var2.bind(var3)();
        var2 = var3.stopBroadcast;
        var2 = var2.bind(var3)();
        var1 = _closure1_slot9;
        var1 = var1.bind(var0)();
        return var0;
    };
    var _closure1_slot10 = var6;
    var5 = function(arg0) { // Original name: handleOnboard, environment: var1
        var0 = arg0;
        var _closure2_slot0 = var0;
        var6 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 9;
        var4 = var2[var0];
        var0 = undefined;
        var4 = var6.bind(var0)(var4);
        var8 = var4.Storage;
        var7 = var8.set;
        var4 = 10;
        var4 = var2[var4];
        var4 = var6.bind(var0)(var4);
        var4 = var4.StorageKeys;
        var5 = var4.SCREENSHARE_ONBOARD;
        var4 = true;
        var4 = var7.bind(var8)(var5, var4);
        var4 = _closure1_slot1;
        var3 = 11;
        var3 = var2[var3];
        var5 = var4.bind(var0)(var3);
        var4 = var5.openLazy;
        var3 = 13;
        var3 = var2[var3];
        var6 = var6.bind(var0)(var3);
        var3 = 12;
        var3 = var2[var3];
        var2 = var2.paths;
        var3 = var6.bind(var0)(var3, var2);
        var2 = {};
        var6 = function() { // Original name: onScreensharePress, environment: var1
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var1.bind(var0)();
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 11;
            var1 = var3[var1];
            var2 = var2.bind(var0)(var1);
            var1 = var2.hideActionSheet;
            var1 = var1.bind(var2)();
            return var0;
        };
        var2.onScreensharePress = var6;
        var1 = function() { // Original name: onSkip, environment: var1
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 11;
            var1 = var1[var0];
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            var0 = var1.hideActionSheet;
            var0 = var0.bind(var1)();
            return var0;
        };
        var2.onSkip = var1;
        var1 = 'NUF_SCREENSHARE_ACTIONSHEET';
        var1 = var4.bind(var5)(var3, var1, var2);
        return var0;
    };
    var _closure1_slot11 = var5;
    var8 = 20;
    var8 = var10[var8];
    var10 = var9.bind(var0)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'modules/video_calls/native/useScreenshareUtils.tsx';
    var8 = var9.bind(var10)(var8);
    var8 = function(arg0) { // Original name: _default, environment: var1
        var3 = arg0;
        var _closure2_slot0 = var3;
        var6 = _closure1_slot1;
        var5 = _closure1_slot2;
        var2 = 15;
        var2 = var5[var2];
        var4 = undefined;
        var2 = var6.bind(var4)(var2);
        var2 = var2.bind(var4)(var3);
        var _closure2_slot1 = var2;
        var2 = _closure1_slot12;
        var2 = var2.bind(var4)();
        var _closure2_slot2 = var2;
        var3 = _closure1_slot0;
        var2 = 16;
        var2 = var5[var2];
        var3 = var3.bind(var4)(var2);
        var2 = var3.useStateFromStoresObject;
        var4 = _closure1_slot3;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            _fun67835: for (var _fun67835_ip = 0;;) switch (_fun67835_ip) {
                case 0:
                    var2 = _closure1_slot3;
                    var1 = var2.getCurrentUserActiveStream;
                    var1 = var1.bind(var2)();
                    var2 = null;
                    var4 = var2 != var1;
                    if (!var4) {
                        _fun67835_ip = 45;
                        continue _fun67835
                    }
                case 26:
                    var2 = var1.state;
                    var1 = _closure1_slot4;
                    var1 = var1.ACTIVE;
                    var4 = var2 === var1;
                case 45:
                    var2 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    if (var4) {
                        _fun67835_ip = 65;
                        continue _fun67835
                    }
                case 56:
                    var1 = 18;
                    var1 = var5[var1];
                    _fun67835_ip = 72;
                    continue _fun67835;
                case 65:
                    var3 = 17;
                    var1 = var5[var3];
                case 72:
                    var8 = undefined;
                    var1 = var2.bind(var8)(var1);
                    var3 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 19;
                    var5 = var7[var2];
                    var5 = var3.bind(var8)(var5);
                    var6 = var5.intl;
                    var5 = var6.string;
                    var2 = var7[var2];
                    var2 = var3.bind(var8)(var2);
                    var2 = var2.t;
                    if (var4) {
                        _fun67835_ip = 141;
                        continue _fun67835
                    }
                case 126:
                    var3 = var2.fjBNo1;
                    var3 = var5.bind(var6)(var3);
                    _fun67835_ip = 152;
                    continue _fun67835;
                case 141:
                    var2 = var2.CpkXwZ;
                    var3 = var5.bind(var6)(var2);
                case 152:
                    var7 = _closure1_slot13;
                    var12 = _closure2_slot0;
                    var5 = _closure2_slot1;
                    var9 = _closure2_slot2;
                    var13 = undefined;
                    var11 = var5;
                    var10 = var4;
                    var2 = var13[var7](var12, var11, var10, var9, var8);
                    var0 = {};
                    if (!var5) {
                        _fun67835_ip = 192;
                        continue _fun67835
                    }
                case 188:
                    var5 = _closure2_slot2;
                case 192:
                    var0.isFeatureEnabled = var5;
                    var0.isActive = var4;
                    var0.text = var3;
                    var0.onPress = var2;
                    var0.imgSource = var1;
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var8;
    var2.handleCloseScreenshare = var7;
    var2.stopScreenshare = var6;
    var2.handleOnboard = var5;
    var5 = function() { // Original name: startStream, environment: var1
        _fun67836: for (var _fun67836_ip = 0;;) switch (_fun67836_ip) {
            case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 4;
                var2 = var2[var0];
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var2 = var3.getVoiceEngine;
                var2 = var2.bind(var3)();
                var3 = var2.platform;
                var2 = 'android';
                if (!(var2 !== var3)) {
                    _fun67836_ip = 59;
                    continue _fun67836
                }
            case 49:
                var2 = _closure1_slot8;
                var2 = var2.bind(var0)();
                _fun67836_ip = 67;
                continue _fun67836;
            case 59:
                var1 = _closure1_slot7;
                var1 = var1.bind(var0)();
            case 67:
                return var0;
        }
    };
    var2.startStream = var5;
    var2.getOSRequirement = var4;
    var2.getStreamPressHandler = var3;
    var1 = function(arg0) { // Environment: var1
        _fun67837: for (var _fun67837_ip = 0;;) switch (_fun67837_ip) {
            case 0:
                var0 = arg0;
                var _closure2_slot0 = var0;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 9;
                var2 = var7[var2];
                var5 = undefined;
                var2 = var6.bind(var5)(var2);
                var4 = var2.Storage;
                var3 = var4.get;
                var2 = 10;
                var2 = var7[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var2.StorageKeys;
                var2 = var2.SCREENSHARE_ONBOARD;
                var2 = var3.bind(var4)(var2);
                if (var2) {
                    _fun67837_ip = 84;
                    continue _fun67837
                }
            case 77:
                var0 = function() { // Environment: var1
                    var2 = _closure1_slot11;
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
            case 84:
                return var0;
        }
    };
    var2.handleOnPressWithOnboard = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 3671, 660, 6505, 3437, 8161, 7973, 3464, 8167, 587, 670, 3237, 8414, 1307, 7965, 8408, 566, 8416, 8417, 1234, 2]);