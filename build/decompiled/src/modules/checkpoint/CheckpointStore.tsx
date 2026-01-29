// modules/checkpoint/CheckpointStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var4
        _fun86370: for (var _fun86370_ip = 0;;) switch (_fun86370_ip) {
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
                _fun86370_ip = 76;
                continue _fun86370;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot11 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = function() { // Original name: resetState, environment: var4
        var0 = {};
        _closure1_slot6 = var0;
        var0 = _closure1_slot5;
        var0 = var0.INIT;
        _closure1_slot7 = var0;
        var0 = false;
        _closure1_slot8 = var0;
        var0 = undefined;
        return var0;
    };
    var _closure1_slot12 = var0;
    var0 = global;
    var8 = var0.Object;
    var3 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var8)(var2, var0, var1);
    var12 = 0;
    var1 = var6[var12];
    var0 = undefined;
    var1 = var7.bind(var0)(var1);
    var _closure1_slot0 = var1;
    var11 = 1;
    var1 = var6[var11];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot1 = var1;
    var10 = 2;
    var1 = var6[var10];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var9 = 3;
    var1 = var6[var9];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 4;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 5;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var3 = var1.CheckpointSlides;
    var1 = {};
    var1.INIT = var12;
    var8 = 'INIT';
    var1[var12] = var8;
    var1.FETCHING = var11;
    var8 = 'FETCHING';
    var1[var11] = var8;
    var1.SUCCESS = var10;
    var8 = 'SUCCESS';
    var1[var10] = var8;
    var1.ERROR = var9;
    var8 = 'ERROR';
    var1[var9] = var8;
    var _closure1_slot5 = var1;
    var8 = {};
    var _closure1_slot6 = var8;
    var8 = var1.INIT;
    var _closure1_slot7 = var8;
    var8 = false;
    var _closure1_slot8 = var8;
    var8 = {
        'volume': 1,
        'isMuted': false,
        'highestSlideSeen': null,
        'hasSeenRewatchPopover': false
    };
    var3 = var3.WELCOME;
    var8.highestSlideSeen = var3;
    var _closure1_slot9 = var8;
    var3 = {};
    var15 = var3;
    var14 = var8;
    var8 = copyDataProperties(var15, var14);
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var8 = var3.PersistedStore;
    var3 = function(arg0) { // Environment: var4
        var3 = function() { // Original name: CheckpointStore, environment: var5
            _fun86375: for (var _fun86375_ip = 0;;) switch (_fun86375_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot0;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot3;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot2;
                    var0 = _closure1_slot11;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun86375_ip = 69;
                        continue _fun86375
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun86375_ip = 105;
                    continue _fun86375;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot3;
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
        var4 = _closure1_slot4;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot1;
        var4 = {};
        var0 = 'getState';
        var4.key = var0;
        var0 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot10;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(9);
        var0[0] = var4;
        var4 = {};
        var6 = 'initialize';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun86377: for (var _fun86377_ip = 0;;) switch (_fun86377_ip) {
                case 0:
                    var3 = arg0;
                    var1 = _closure1_slot12;
                    var0 = undefined;
                    var1 = var1.bind(var0)();
                    var1 = null;
                    if (!(var1 != var3)) {
                        _fun86377_ip = 49;
                        continue _fun86377
                    }
                case 22:
                    var1 = {};
                    var5 = _closure1_slot10;
                    var6 = var1;
                    var4 = copyDataProperties(var6, var5);
                    var6 = var1;
                    var5 = var3;
                    var3 = copyDataProperties(var6, var5);
                    _closure1_slot10 = var1;
                case 49:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getCheckpointData';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot6;
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getFetchState';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot7;
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'volume';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            var0 = _closure1_slot10;
            var0 = var0.volume;
            return var0;
        };
        var4.get = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'isMuted';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            var0 = _closure1_slot10;
            var0 = var0.isMuted;
            return var0;
        };
        var4.get = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'highestSlideSeen';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            var0 = _closure1_slot10;
            var0 = var0.highestSlideSeen;
            return var0;
        };
        var4.get = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'hasSeenRewatchPopover';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            var0 = _closure1_slot10;
            var0 = var0.hasSeenRewatchPopover;
            return var0;
        };
        var4.get = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'hasOpenedCheckpointThisSession';
        var4.key = var6;
        var5 = function() { // Original name: get, environment: var5
            var0 = _closure1_slot8;
            return var0;
        };
        var4.get = var5;
        var0[8] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var8 = var3.bind(var0)(var8);
    var3 = 'CheckpointStore';
    var8.displayName = var3;
    var8.persistKey = var3;
    var3 = 7;
    var3 = var6[var3];
    var15 = var7.bind(var0)(var3);
    var3 = {};
    var9 = function() { // Original name: handleCheckpointFetchStart, environment: var4
        var0 = _closure1_slot5;
        var0 = var0.FETCHING;
        _closure1_slot7 = var0;
        var0 = undefined;
        return var0;
    };
    var3.CHECKPOINT_FETCH_START = var9;
    var9 = function(arg0) { // Original name: handleCheckpointFetchSuccess, environment: var4
        var0 = arg0;
        var0 = var0.data;
        _closure1_slot6 = var0;
        var0 = _closure1_slot5;
        var0 = var0.SUCCESS;
        _closure1_slot7 = var0;
        var0 = undefined;
        return var0;
    };
    var3.CHECKPOINT_FETCH_SUCCESS = var9;
    var9 = function() { // Original name: handleCheckpointFetchFailed, environment: var4
        var0 = _closure1_slot5;
        var0 = var0.ERROR;
        _closure1_slot7 = var0;
        var0 = undefined;
        return var0;
    };
    var3.CHECKPOINT_FETCH_FAILED = var9;
    var9 = function(arg0) { // Original name: handleSetVolume, environment: var4
        var1 = _closure1_slot10;
        var0 = arg0;
        var0 = var0.volume;
        var1.volume = var0;
        var0 = undefined;
        return var0;
    };
    var3.CHECKPOINT_SET_VOLUME = var9;
    var9 = function() { // Original name: handleToggleMute, environment: var4
        var1 = _closure1_slot10;
        var0 = var1.isMuted;
        var0 = !var0;
        var1.isMuted = var0;
        var0 = undefined;
        return var0;
    };
    var3.CHECKPOINT_TOGGLE_MUTE = var9;
    var9 = function(arg0) { // Original name: handleSetHighestSlideSeen, environment: var4
        var1 = _closure1_slot10;
        var0 = arg0;
        var0 = var0.slide;
        var1.highestSlideSeen = var0;
        var0 = undefined;
        return var0;
    };
    var3.CHECKPOINT_SET_HIGHEST_SLIDE_SEEN = var9;
    var9 = function() { // Original name: handleClosedCheckpoint, environment: var4
        var0 = true;
        _closure1_slot8 = var0;
        var0 = undefined;
        return var0;
    };
    var3.CHECKPOINT_AFTER_CLOSED = var9;
    var9 = function() { // Original name: handleHasSeenRewatchPopover, environment: var4
        var1 = _closure1_slot10;
        var0 = true;
        var1.hasSeenRewatchPopover = var0;
        var0 = undefined;
        return var0;
    };
    var3.CHECKPOINT_SET_HAS_SEEN_REWATCH_POPOVER = var9;
    var4 = function() { // Original name: handleLogout, environment: var4
        var1 = _closure1_slot12;
        var0 = undefined;
        var1 = var1.bind(var0)();
        var1 = {};
        var4 = _closure1_slot9;
        var5 = var1;
        var3 = copyDataProperties(var5, var4);
        _closure1_slot10 = var1;
        return var0;
    };
    var3.LOGOUT = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var8
        }
    });
    var16 = var4;
    var14 = var3;
    var3 = new var16[var8](var15, var14, var13);
    var3 = var3 instanceof Object ? var3 : var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/checkpoint/CheckpointStore.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.FetchStates = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 9119, 566, 806, 2]);