// modules/game_detection/RunningGameStore.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var1
        _fun30478: for (var _fun30478_ip = 0;;) switch (_fun30478_ip) {
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
            case 70: // try_end0
                _fun30478_ip = 74;
                continue _fun30478;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot9 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot9 = var0;
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
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 6;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 8;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.Store;
    var3 = function(arg0) { // Environment: var1
        var3 = function() { // Original name: RunningGameStore, environment: var5
            _fun30482: for (var _fun30482_ip = 0;;) switch (_fun30482_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot2;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot5;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot4;
                    var0 = _closure1_slot9;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun30482_ip = 69;
                        continue _fun30482
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun30482_ip = 105;
                    continue _fun30482;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot5;
                    var5 = var5.bind(var2)(var3);
                    var5 = var5.constructor;
                    var4 = arguments;
                    var0 = var6.bind(var7)(var8, var4, var5);
                case 105:
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot6;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot3;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function() { // Original name: value, environment: var5
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(31);
        var0[0] = var4;
        var4 = {};
        var6 = 'getVisibleGame';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = null;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getCurrentGameForAnalytics';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = null;
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getCurrentNonGameForAnalytics';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = null;
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getVisibleRunningGames';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = new Array(0);
            return var0;
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'getRunningGames';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = new Array(0);
            return var0;
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'getRunningNonGames';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = new Array(0);
            return var0;
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'getRunningDiscordApplicationIds';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = new Array(0);
            return var0;
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'getRunningVerifiedApplicationIds';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = new Array(0);
            return var0;
        };
        var4.value = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'getGameForPID';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = null;
            return var0;
        };
        var4.value = var6;
        var0[9] = var4;
        var4 = {};
        var6 = 'getGameForName';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = null;
            return var0;
        };
        var4.value = var6;
        var0[10] = var4;
        var4 = {};
        var6 = 'getGameOrTransformedSubgameForPID';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = null;
            return var0;
        };
        var4.value = var6;
        var0[11] = var4;
        var4 = {};
        var6 = 'getLauncherForPID';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = null;
            return var0;
        };
        var4.value = var6;
        var0[12] = var4;
        var4 = {};
        var6 = 'getOverlayOptionsForPID';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = null;
            return var0;
        };
        var4.value = var6;
        var0[13] = var4;
        var4 = {};
        var6 = 'shouldElevateProcessForPID';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = false;
            return var0;
        };
        var4.value = var6;
        var0[14] = var4;
        var4 = {};
        var6 = 'shouldContinueWithoutElevatedProcessForPID';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = false;
            return var0;
        };
        var4.value = var6;
        var0[15] = var4;
        var4 = {};
        var6 = 'getCandidateGames';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = new Array(0);
            return var0;
        };
        var4.value = var6;
        var0[16] = var4;
        var4 = {};
        var6 = 'isGamesSeenLoaded';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = true;
            return var0;
        };
        var4.value = var6;
        var0[17] = var4;
        var4 = {};
        var6 = 'getGamesSeen';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = new Array(0);
            return var0;
        };
        var4.value = var6;
        var0[18] = var4;
        var4 = {};
        var6 = 'getSeenGameByName';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = null;
            return var0;
        };
        var4.value = var6;
        var0[19] = var4;
        var4 = {};
        var6 = 'isObservedAppRunning';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = false;
            return var0;
        };
        var4.value = var6;
        var0[20] = var4;
        var4 = {};
        var6 = 'getOverlayEnabledForGame';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = false;
            return var0;
        };
        var4.value = var6;
        var0[21] = var4;
        var4 = {};
        var6 = 'getOverrides';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = new Array(0);
            return var0;
        };
        var4.value = var6;
        var0[22] = var4;
        var4 = {};
        var6 = 'getOverrideForGame';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = null;
            return var0;
        };
        var4.value = var6;
        var0[23] = var4;
        var4 = {};
        var6 = 'getGameOverlayStatus';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = null;
            return var0;
        };
        var4.value = var6;
        var0[24] = var4;
        var4 = {};
        var6 = 'getObservedAppNameForWindow';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = null;
            return var0;
        };
        var4.value = var6;
        var0[25] = var4;
        var4 = {};
        var6 = 'canShowAdminWarning';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            var0 = false;
            return var0;
        };
        var4.get = var6;
        var0[26] = var4;
        var4 = {};
        var6 = 'isDetectionEnabled';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = false;
            return var0;
        };
        var4.value = var6;
        var0[27] = var4;
        var4 = {};
        var6 = 'addExecutableTrackedByAnalytics';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[28] = var4;
        var4 = {};
        var6 = 'getSystemServiceStatus';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = {};
            var1 = 'unknown';
            var0.state = var1;
            return var0;
        };
        var4.value = var6;
        var0[29] = var4;
        var4 = {};
        var6 = 'isSystemServiceInitialized';
        var4.key = var6;
        var5 = function() { // Original name: value, environment: var5
            var0 = false;
            return var0;
        };
        var4.value = var5;
        var0[30] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var8 = var3.bind(var0)(var7);
    var3 = 'RunningGameStore';
    var8.displayName = var3;
    var3 = 9;
    var3 = var6[var3];
    var11 = var4.bind(var0)(var3);
    var3 = var8.prototype;
    var4 = Object.create(var3, {
        constructor: {
            value: var8
        }
    });
    var10 = {};
    var12 = var4;
    var3 = new var12[var8](var11, var10, var9);
    var3 = var3 instanceof Object ? var3 : var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/game_detection/RunningGameStore.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var3 = function() { // Original name: gameKey, environment: var1
        var0 = '';
        return var0;
    };
    var2.gameKey = var3;
    var3 = function() { // Original name: getRawOverlayGameStatus, environment: var1
        _fun30515: for (var _fun30515_ip = 0;;) switch (_fun30515_ip) {
            case 0:
                var0 = arguments[1];
                var3 = undefined;
                if (!(var0 === var3)) {
                    _fun30515_ip = 32;
                    continue _fun30515
                }
            case 9:
                var2 = _closure1_slot7;
                var1 = new Array(2);
                var1[0] = var2;
                var0 = _closure1_slot8;
                var1[1] = var0;
            case 32:
                var0 = {
                    'source': null,
                    'enabledOOP': false,
                    'enabledLegacy': false,
                    'overlayMethod': null,
                    'reason': 'Dummy implementation'
                };
                var2 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 7;
                var5 = var4[var1];
                var5 = var2.bind(var3)(var5);
                var5 = var5.OverlayGameStatusSource;
                var5 = var5.UNKNOWN;
                var0.source = var5;
                var1 = var4[var1];
                var1 = var2.bind(var3)(var1);
                var1 = var1.OverlayMethod;
                var1 = var1.Disabled;
                var0.overlayMethod = var1;
                return var0;
        }
    };
    var2.getRawOverlayGameStatus = var3;
    var3 = function() { // Original name: isDetectionEnabled, environment: var1
        var0 = false;
        return var0;
    };
    var2.isDetectionEnabled = var3;
    var3 = function(arg0) { // Original name: maybeTransformSubgame, environment: var1
        var0 = arg0;
        return var0;
    };
    var2.maybeTransformSubgame = var3;
    var1 = function(arg0) { // Original name: transformForGameSettings, environment: var1
        var0 = {};
        var3 = arg0;
        var4 = var0;
        var1 = copyDataProperties(var4, var3);
        var2 = '';
        var1 = 'played';
        var0[var1] = var2;
        var2 = false;
        var1 = 'overlay';
        var0[var1] = var2;
        var1 = 'verified';
        var0[var1] = var2;
        var1 = 'detectable';
        var0[var1] = var2;
        return var0;
    };
    var2.transformForGameSettings = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 3443, 3448, 3459, 566, 806, 2]);