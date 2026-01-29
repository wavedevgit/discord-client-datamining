// modules/experiments/apex/ApexExperimentStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var3
        _fun13205: for (var _fun13205_ip = 0;;) switch (_fun13205_ip) {
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
                _fun13205_ip = 74;
                continue _fun13205;
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
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var1);
    var0 = 0;
    var1 = var6[var0];
    var0 = undefined;
    var1 = var8.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var6[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var6[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var6[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 4;
    var1 = var6[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 5;
    var4 = var6[var1];
    var4 = var8.bind(var0)(var4);
    var7 = 6;
    var7 = var6[var7];
    var7 = var8.bind(var0)(var7);
    var _closure1_slot8 = var7;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.ExperimentAssignment;
    var3 = function(arg0) { // Environment: var3
        var3 = function() { // Original name: ApexExperimentStore, environment: var0
            _fun13209: for (var _fun13209_ip = 0;;) switch (_fun13209_ip) {
                case 0:
                    var4 = this;
                    var0 = _closure1_slot3;
                    var2 = _closure2_slot0;
                    var3 = undefined;
                    var0 = var0.bind(var3)(var4, var2);
                    var8 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var0 = 7;
                    var6 = var7[var0];
                    var6 = var8.bind(var3)(var6);
                    var9 = new Array(3);
                    var9[0] = var6;
                    var6 = {};
                    var8 = function(arg0) { // Original name: CONNECTION_OPEN, environment: var1
                        var2 = _closure3_slot0;
                        var1 = var2.setExperimentAssignments;
                        var0 = arg0;
                        var0 = var0.apexExperiments;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var6.CONNECTION_OPEN = var8;
                    var8 = function(arg0) { // Original name: CONNECTION_OPEN_STATE_UPDATE, environment: var1
                        var2 = _closure3_slot0;
                        var1 = var2.setExperimentAssignments;
                        var0 = arg0;
                        var0 = var0.apexExperiments;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var6.CONNECTION_OPEN_STATE_UPDATE = var8;
                    var8 = function(arg0) { // Original name: APEX_EXPERIMENT_OVERRIDE_CREATE, environment: var1
                        var0 = arg0;
                        var3 = _closure3_slot0;
                        var2 = var3.createOverride;
                        var1 = var0.experimentName;
                        var0 = var0.variantId;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                    };
                    var6.APEX_EXPERIMENT_OVERRIDE_CREATE = var8;
                    var8 = function(arg0) { // Original name: APEX_EXPERIMENT_OVERRIDE_DELETE, environment: var1
                        var2 = _closure3_slot0;
                        var1 = var2.deleteOverride;
                        var0 = arg0;
                        var0 = var0.experimentName;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var6.APEX_EXPERIMENT_OVERRIDE_DELETE = var8;
                    var8 = function() { // Original name: APEX_EXPERIMENT_OVERRIDE_CLEAR, environment: var1
                        var1 = _closure3_slot0;
                        var0 = var1.clearAllOverrides;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var6.APEX_EXPERIMENT_OVERRIDE_CLEAR = var8;
                    var8 = function(arg0) { // Original name: APEX_EXPERIMENT_SESSION_OVERRIDE_CREATE, environment: var1
                        var0 = arg0;
                        var3 = _closure3_slot0;
                        var2 = var3.createSessionOverride;
                        var1 = var0.experimentName;
                        var0 = var0.variantId;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                    };
                    var6.APEX_EXPERIMENT_SESSION_OVERRIDE_CREATE = var8;
                    var8 = function(arg0) { // Original name: APEX_EXPERIMENT_SESSION_OVERRIDE_DELETE, environment: var1
                        var2 = _closure3_slot0;
                        var1 = var2.deleteSessionOverride;
                        var0 = arg0;
                        var0 = var0.experimentName;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var6.APEX_EXPERIMENT_SESSION_OVERRIDE_DELETE = var8;
                    var8 = function() { // Original name: APEX_EXPERIMENT_CLEAR_FOR_TESTS, environment: var1
                        var1 = _closure3_slot0;
                        var0 = var1.clearForTests;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var6.APEX_EXPERIMENT_CLEAR_FOR_TESTS = var8;
                    var8 = function(arg0) { // Original name: APEX_EXPERIMENTS_METADATA_FETCH_SUCCESS, environment: var1
                        var2 = _closure3_slot0;
                        var1 = var2.setExperimentsMetadata;
                        var0 = arg0;
                        var0 = var0.experiments;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var6.APEX_EXPERIMENTS_METADATA_FETCH_SUCCESS = var8;
                    var8 = function(arg0) { // Original name: APEX_EXPERIMENTS_FETCH_START, environment: var1
                        var2 = _closure3_slot0;
                        var1 = var2.handleFetchStart;
                        var0 = arg0;
                        var0 = var0.unitId;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var6.APEX_EXPERIMENTS_FETCH_START = var8;
                    var8 = function(arg0) { // Original name: APEX_EXPERIMENTS_FETCH_SUCCESS, environment: var1
                        var0 = arg0;
                        var3 = _closure3_slot0;
                        var2 = var3.handleFetchSuccess;
                        var1 = var0.unitId;
                        var0 = var0.experiments;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                    };
                    var6.APEX_EXPERIMENTS_FETCH_SUCCESS = var8;
                    var8 = function(arg0) { // Original name: APEX_EXPERIMENTS_FETCH_FAILURE, environment: var1
                        var2 = _closure3_slot0;
                        var1 = var2.handleFetchFailure;
                        var0 = arg0;
                        var0 = var0.unitId;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var6.APEX_EXPERIMENTS_FETCH_FAILURE = var8;
                    var8 = function(arg0) { // Original name: LOGOUT, environment: var1
                        var2 = _closure3_slot0;
                        var1 = var2.handleLogout;
                        var0 = arg0;
                        var0 = var0.isSwitchingAccount;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var6.LOGOUT = var8;
                    var9[1] = var6;
                    var6 = _closure1_slot0;
                    var0 = var7[var0];
                    var0 = var6.bind(var3)(var0);
                    var0 = var0.DispatchBand;
                    var0 = var0.Early;
                    var9[2] = var0;
                    var0 = _closure1_slot6;
                    var8 = var0.bind(var3)(var2);
                    var2 = _closure1_slot5;
                    var0 = _closure1_slot9;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun13209_ip = 257;
                        continue _fun13209
                    }
                case 244:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun13209_ip = 291;
                    continue _fun13209;
                case 257:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot6;
                    var5 = var5.bind(var3)(var4);
                    var5 = var5.constructor;
                    var0 = var6.bind(var7)(var8, var9, var5);
                case 291:
                    var0 = var2.bind(var3)(var4, var0);
                    var _closure3_slot0 = var0;
                    var1 = function(arg0) { // Environment: var1
                        var7 = 0;
                        var6 = copyRestArgs(var7);
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 8;
                        var1 = var1[var0];
                        var0 = undefined;
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.track;
                        var0 = new Array(0);
                        var7 = var0;
                        var5 = 0;
                        var3 = arraySpread(var7, var6, var5);
                        var7 = var1;
                        var6 = var0;
                        var5 = var2;
                        var0 = apply(var7, var6, var5);
                        return var0;
                    };
                    var0.track = var1;
                    var1 = 'discord_app';
                    var0.surface = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot7;
        var2 = undefined;
        var4 = arg0;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot4;
        var4 = {};
        var5 = 'initialize';
        var4.key = var5;
        var0 = function(arg0) { // Original name: value, environment: var0
            var4 = this;
            var2 = var4.waitFor;
            var1 = _closure1_slot8;
            var1 = var2.bind(var4)(var1);
            var3 = var4.loadStoredState;
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 9;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.getBuildOverrideExperiments;
            var2 = var1.bind(var2)();
            var1 = arg0;
            var1 = var3.bind(var4)(var1, var2);
            return var0;
        };
        var4.value = var0;
        var0 = new Array(1);
        var0[0] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var12 = var4;
    var3 = new var12[var3](var11);
    var3 = var3 instanceof Object ? var3 : var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/experiments/apex/ApexExperimentStore.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.ExperimentAssignment = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1212, 1216, 806, 795, 1592, 2]);