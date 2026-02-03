// modules/experiments/apex/ApexActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot5;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun77615: for (var _fun77615_ip = 0;;) switch (_fun77615_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun77615_ip = 231;
                            continue _fun77615
                        }
                    case 10:
                        var7 = arg0;
                    case 13: // try_start_0
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 4;
                        var1 = var4[var1];
                        var4 = undefined;
                        var1 = var3.bind(var4)(var1);
                        var5 = var1.HTTP;
                        var3 = var5.get;
                        var1 = {};
                        var6 = _closure1_slot7;
                        var6 = var6.APEX_EXPERIMENTS_METADATA;
                        var1.url = var6;
                        var6 = {};
                        var6.surface = var7;
                        var1.query = var6;
                        var6 = true;
                        var1.rejectWithError = var6;
                        var1 = var3.bind(var5)(var1);
                        SaveGenerator(address = 91);
                    case 89:
                        return var1;
                    case 91:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun77615_ip = 174;
                            continue _fun77615
                        }
                    case 97:
                        var3 = var1.body;
                        var6 = var3.experiments;
                        var5 = var6.map;
                        var3 = function(arg0) { // Environment: var3
                            var1 = arg0;
                            var0 = {};
                            var2 = var1.id;
                            var0.id = var2;
                            var2 = var1.name;
                            var0.name = var2;
                            var2 = var1.title;
                            var0.title = var2;
                            var2 = var1.revision;
                            var0.revision = var2;
                            var2 = var1.unit_type;
                            var0.unitType = var2;
                            var3 = var1.variants;
                            var2 = var3.map;
                            var1 = function(arg0) { // Environment: var1
                                var1 = arg0;
                                var0 = {};
                                var2 = var1.id;
                                var0.id = var2;
                                var2 = var1.label;
                                var0.label = var2;
                                var1 = var1.type;
                                var0.type = var1;
                                return var0;
                            };
                            var1 = var2.bind(var3)(var1);
                            var0.variants = var1;
                            return var0;
                        };
                        var5 = var5.bind(var6)(var3);
                        var3 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var2 = 5;
                        var2 = var6[var2];
                        var4 = var3.bind(var4)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var6 = 'APEX_EXPERIMENTS_METADATA_FETCH_SUCCESS';
                        var2.type = var6;
                        var2.experiments = var5;
                        var2 = var3.bind(var4)(var2);
                    case 172: // try_end0
                        _fun77615_ip = 226;
                        continue _fun77615;
                    case 174:
                        return var1;
                    case 177: // catch_target0
                        CatchBlockStart(arg_register = 1);
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 5;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.dispatch;
                        var1 = {};
                        var4 = 'APEX_EXPERIMENTS_METADATA_FETCH_FAILURE';
                        var1.type = var4;
                        var1 = var2.bind(var3)(var1);
                    case 226:
                        var1 = undefined;
                        return var1;
                    case 231:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot8 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot8 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot5;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun77620: for (var _fun77620_ip = 0;;) switch (_fun77620_ip) {
                    case 0:
                        StartGenerator();
                        var6 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun77620_ip = 397;
                            continue _fun77620
                        }
                    case 13:
                        var5 = var6;
                        var1 = undefined;
                        var9 = undefined;
                        var4 = _closure1_slot6;
                        var3 = var4.isFetching;
                        var3 = var3.bind(var4)(var6);
                        if (var3) {
                            _fun77620_ip = 394;
                            continue _fun77620
                        }
                    case 44:
                        var6 = _closure1_slot6;
                        var4 = var6.hasLoaded;
                        var3 = var5;
                        var3 = var4.bind(var6)(var3);
                        if (var3) {
                            _fun77620_ip = 394;
                            continue _fun77620
                        }
                    case 68:
                        var6 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var4 = 5;
                        var3 = var3[var4];
                        var7 = var6.bind(var1)(var3);
                        var6 = var7.dispatch;
                        var3 = {};
                        var8 = 'APEX_EXPERIMENTS_FETCH_START';
                        var3.type = var8;
                        var8 = var5;
                        var3.unitId = var8;
                        var3 = var6.bind(var7)(var3);
                    case 116: // try_start_0
                        var11 = _closure1_slot0;
                        var12 = _closure1_slot2;
                        var3 = 4;
                        var3 = var12[var3];
                        var3 = var11.bind(var1)(var3);
                        var7 = var3.HTTP;
                        var6 = var7.get;
                        var3 = {};
                        var8 = _closure1_slot7;
                        var8 = var8.APEX_EXPERIMENTS;
                        var3.url = var8;
                        var8 = {};
                        var10 = 6;
                        var10 = var12[var10];
                        var10 = var11.bind(var1)(var10);
                        var10 = var10.Experiment_Surface;
                        var10 = var10.APP;
                        var8.surface = var10;
                        var3.query = var8;
                        var8 = false;
                        var3.rejectWithError = var8;
                        var3 = var6.bind(var7)(var3);
                        SaveGenerator(address = 213);
                    case 211:
                        return var3;
                    case 213:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 6);
                        if (var6) {
                            _fun77620_ip = 347;
                            continue _fun77620
                        }
                    case 222:
                        var9 = var3;
                        var7 = null;
                        if (!(var7 != var3)) {
                            _fun77620_ip = 300;
                            continue _fun77620
                        }
                    case 231:
                        var6 = var9;
                        var6 = var6.body;
                        if (!(var7 != var6)) {
                            _fun77620_ip = 300;
                            continue _fun77620
                        }
                    case 243:
                        var7 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var6 = var6[var4];
                        var8 = var7.bind(var1)(var6);
                        var7 = var8.dispatch;
                        var6 = {};
                        var10 = 'APEX_EXPERIMENTS_FETCH_SUCCESS';
                        var6.type = var10;
                        var10 = var5;
                        var6.unitId = var10;
                        var9 = var9.body;
                        var6.experiments = var9;
                        var6 = var7.bind(var8)(var6);
                        _fun77620_ip = 345;
                        continue _fun77620;
                    case 300:
                        var7 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var6 = var6[var4];
                        var8 = var7.bind(var1)(var6);
                        var7 = var8.dispatch;
                        var6 = {};
                        var9 = 'APEX_EXPERIMENTS_FETCH_FAILURE';
                        var6.type = var9;
                        var9 = var5;
                        var6.unitId = var9;
                        var6 = var7.bind(var8)(var6);
                    case 345: // try_end0
                        _fun77620_ip = 394;
                        continue _fun77620;
                    case 347:
                        return var3;
                    case 350: // catch_target0
                        CatchBlockStart(arg_register = 3);
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var2 = var2[var4];
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var6 = 'APEX_EXPERIMENTS_FETCH_FAILURE';
                        var2.type = var6;
                        var2.unitId = var5;
                        var2 = var3.bind(var4)(var2);
                    case 394:
                        return var1;
                    case 397:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot9 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot9 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot5;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun77623: for (var _fun77623_ip = 0;;) switch (_fun77623_ip) {
                    case 0:
                        StartGenerator();
                        var6 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun77623_ip = 556;
                            continue _fun77623
                        }
                    case 15:
                        var1 = undefined;
                        var5 = undefined;
                        var _closure4_slot0 = var1;
                        var _closure4_slot1 = var1;
                        var9 = null;
                        if (!(var9 != var6)) {
                            _fun77623_ip = 57;
                            continue _fun77623
                        }
                    case 33:
                        var3 = _closure1_slot6;
                        var2 = var3.hasLoaded;
                        var2 = var2.bind(var3)(var6);
                        if (var2) {
                            _fun77623_ip = 553;
                            continue _fun77623
                        }
                    case 57:
                        var8 = _closure1_slot6;
                        var3 = var8.isFetching;
                        var10 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var7 = 7;
                        var2 = var2[var7];
                        var2 = var10.bind(var1)(var2);
                        var2 = var2.INSTALLATION_UNIT_ID;
                        var2 = var3.bind(var8)(var2);
                        if (var2) {
                            _fun77623_ip = 553;
                            continue _fun77623
                        }
                    case 107:
                        var8 = _closure1_slot6;
                        var3 = var8.hasLoaded;
                        var10 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var2 = var2[var7];
                        var2 = var10.bind(var1)(var2);
                        var2 = var2.INSTALLATION_UNIT_ID;
                        var2 = var3.bind(var8)(var2);
                        if (var2) {
                            _fun77623_ip = 553;
                            continue _fun77623
                        }
                    case 151:
                        var8 = _closure1_slot1;
                        var11 = _closure1_slot2;
                        var2 = 5;
                        var3 = var11[var2];
                        var10 = var8.bind(var1)(var3);
                        var8 = var10.dispatch;
                        var3 = {};
                        var12 = 'APEX_EXPERIMENTS_FETCH_START';
                        var3.type = var12;
                        var12 = _closure1_slot0;
                        var11 = var11[var7];
                        var11 = var12.bind(var1)(var11);
                        var11 = var11.INSTALLATION_UNIT_ID;
                        var3.unitId = var11;
                        var3 = var8.bind(var10)(var3);
                    case 215: // try_start_0
                        var13 = _closure1_slot0;
                        var14 = _closure1_slot2;
                        var3 = 4;
                        var3 = var14[var3];
                        var3 = var13.bind(var1)(var3);
                        var10 = var3.HTTP;
                        var8 = var10.get;
                        var3 = {};
                        var11 = _closure1_slot7;
                        var11 = var11.APEX_EXPERIMENTS;
                        var3.url = var11;
                        var11 = {};
                        var12 = 6;
                        var12 = var14[var12];
                        var12 = var13.bind(var1)(var12);
                        var12 = var12.Experiment_Surface;
                        var12 = var12.APP;
                        var11.surface = var12;
                        var3.query = var11;
                        var11 = false;
                        var3.rejectWithError = var11;
                        var3 = var8.bind(var10)(var3);
                        SaveGenerator(address = 312);
                    case 310:
                        return var3;
                    case 312:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 8);
                        if (var8) {
                            _fun77623_ip = 487;
                            continue _fun77623
                        }
                    case 321:
                        var5 = var3;
                        var10 = var9 == var3;
                        var8 = undefined;
                        if (var10) {
                            _fun77623_ip = 341;
                            continue _fun77623
                        }
                    case 333:
                        var10 = var5;
                        var8 = var10.body;
                    case 341:
                        if (!(var9 == var8)) {
                            _fun77623_ip = 408;
                            continue _fun77623
                        }
                    case 345:
                        var9 = _closure1_slot1;
                        var11 = _closure1_slot2;
                        var8 = var11[var2];
                        var10 = var9.bind(var1)(var8);
                        var9 = var10.dispatch;
                        var8 = {};
                        var12 = 'APEX_EXPERIMENTS_FETCH_FAILURE';
                        var8.type = var12;
                        var12 = _closure1_slot0;
                        var11 = var11[var7];
                        var11 = var12.bind(var1)(var11);
                        var11 = var11.INSTALLATION_UNIT_ID;
                        var8.unitId = var11;
                        var8 = var9.bind(var10)(var8);
                        _fun77623_ip = 485;
                        continue _fun77623;
                    case 408:
                        var9 = var5.body;
                        var5 = var9.installation;
                        _closure4_slot0 = var5;
                        var8 = _closure1_slot4;
                        var5 = _closure1_slot3;
                        var5 = var8.bind(var1)(var9, var5);
                        _closure4_slot1 = var5;
                        var8 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var5 = 8;
                        var5 = var9[var5];
                        var5 = var8.bind(var1)(var5);
                        var8 = var5.Emitter;
                        var5 = var8.batched;
                        var4 = function() { // Environment: var4
                            _fun77624: for (var _fun77624_ip = 0;;) switch (_fun77624_ip) {
                                case 0:
                                    var0 = _closure4_slot0;
                                    if (!var0) {
                                        _fun77624_ip = 64;
                                        continue _fun77624
                                    }
                                case 10:
                                    var2 = _closure1_slot1;
                                    var1 = _closure1_slot2;
                                    var0 = 5;
                                    var1 = var1[var0];
                                    var0 = undefined;
                                    var2 = var2.bind(var0)(var1);
                                    var1 = var2.dispatch;
                                    var0 = {};
                                    var3 = 'INSTALLATION_ID';
                                    var0.type = var3;
                                    var3 = _closure4_slot0;
                                    var0.installation = var3;
                                    var0 = var1.bind(var2)(var0);
                                case 64:
                                    var2 = _closure1_slot1;
                                    var7 = _closure1_slot2;
                                    var0 = 5;
                                    var1 = var7[var0];
                                    var0 = undefined;
                                    var3 = var2.bind(var0)(var1);
                                    var2 = var3.dispatch;
                                    var1 = {};
                                    var6 = 'APEX_EXPERIMENTS_FETCH_SUCCESS';
                                    var1.type = var6;
                                    var6 = _closure1_slot0;
                                    var5 = 7;
                                    var5 = var7[var5];
                                    var5 = var6.bind(var0)(var5);
                                    var5 = var5.INSTALLATION_UNIT_ID;
                                    var1.unitId = var5;
                                    var4 = _closure4_slot1;
                                    var1.experiments = var4;
                                    var1 = var2.bind(var3)(var1);
                                    return var0;
                            }
                        };
                        var4 = var5.bind(var8)(var4);
                    case 485: // try_end0
                        _fun77623_ip = 553;
                        continue _fun77623;
                    case 487:
                        return var3;
                    case 490: // catch_target0
                        CatchBlockStart(arg_register = 3);
                        var3 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var2 = var5[var2];
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var8 = 'APEX_EXPERIMENTS_FETCH_FAILURE';
                        var2.type = var8;
                        var6 = _closure1_slot0;
                        var5 = var5[var7];
                        var5 = var6.bind(var1)(var5);
                        var5 = var5.INSTALLATION_UNIT_ID;
                        var2.unitId = var5;
                        var2 = var3.bind(var4)(var2);
                    case 553:
                        return var1;
                    case 556:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot10 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot10 = var0;
    var0 = ['installation'];
    var _closure1_slot3 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Endpoints;
    var _closure1_slot7 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/experiments/apex/ApexActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot8;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.fetchApexExperimentsMetadata = var3;
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot9;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.fetchUserExperimentAssignments = var3;
    var1 = function() {
        var0 = undefined;
        var3 = _closure1_slot10;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.fetchInstallationExperiments = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [29, 5, 1211, 660, 507, 806, 3331, 1305, 566, 2]);