// modules/in_app_reports/ReportUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var10 = require;
    var9 = metroImportDefault;
    var2 = exports;
    var11 = dependencyMap;
    var _closure1_slot0 = var10;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var11;
    var8 = function() {
        var0 = undefined;
        var3 = _closure1_slot12;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot11 = var8;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun53627: for (var _fun53627_ip = 0;;) switch (_fun53627_ip) {
                    case 0:
                        StartGenerator();
                        var7 = arg1;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun53627_ip = 185;
                            continue _fun53627
                        }
                    case 13:
                        var2 = _closure1_slot21;
                        var5 = undefined;
                        var1 = arg0;
                        var8 = var2.bind(var5)(var1);
                        var2 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 5;
                        var1 = var4[var1];
                        var1 = var2.bind(var5)(var1);
                        var4 = var1.HTTP;
                        var2 = var4.get;
                        var1 = {};
                        var6 = _closure1_slot7;
                        var3 = var6.GET_REPORT_MENU;
                        var3 = var3.bind(var6)(var8);
                        var1.url = var3;
                        var3 = null;
                        var8 = var3 == var7;
                        var6 = undefined;
                        if (var8) {
                            _fun53627_ip = 97;
                            continue _fun53627
                        }
                    case 92:
                        var6 = var7.variant;
                    case 97:
                        var6 = var3 != var6;
                        var5 = undefined;
                        if (!var6) {
                            _fun53627_ip = 120;
                            continue _fun53627
                        }
                    case 106:
                        var6 = {};
                        var7 = var7.variant;
                        var6.variant = var7;
                        var5 = var6;
                    case 120:
                        var1.query = var5;
                        var5 = false;
                        var1.rejectWithError = var5;
                        var1 = var2.bind(var4)(var1);
                        SaveGenerator(address = 140);
                    case 138:
                        return var1;
                    case 140:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun53627_ip = 182;
                            continue _fun53627
                        }
                    case 146:
                        var2 = var1.body;
                        if (!(var3 == var2)) {
                            _fun53627_ip = 179;
                            continue _fun53627
                        }
                    case 155:
                        var3 = global;
                        var5 = var3.JSON;
                        var4 = var5.parse;
                        var3 = var1.text;
                        var2 = var4.bind(var5)(var3);
                    case 179:
                        return var2;
                    case 182:
                        return var1;
                    case 185:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot12 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot12 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun53630: for (var _fun53630_ip = 0;;) switch (_fun53630_ip) {
                    case 0:
                        StartGenerator();
                        var7 = arg1;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun53630_ip = 185;
                            continue _fun53630
                        }
                    case 13:
                        var2 = _closure1_slot22;
                        var5 = undefined;
                        var1 = arg0;
                        var8 = var2.bind(var5)(var1);
                        var2 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 5;
                        var1 = var4[var1];
                        var1 = var2.bind(var5)(var1);
                        var4 = var1.HTTP;
                        var2 = var4.get;
                        var1 = {};
                        var6 = _closure1_slot7;
                        var3 = var6.GET_REPORT_MENU;
                        var3 = var3.bind(var6)(var8);
                        var1.url = var3;
                        var3 = null;
                        var8 = var3 == var7;
                        var6 = undefined;
                        if (var8) {
                            _fun53630_ip = 97;
                            continue _fun53630
                        }
                    case 92:
                        var6 = var7.variant;
                    case 97:
                        var6 = var3 != var6;
                        var5 = undefined;
                        if (!var6) {
                            _fun53630_ip = 120;
                            continue _fun53630
                        }
                    case 106:
                        var6 = {};
                        var7 = var7.variant;
                        var6.variant = var7;
                        var5 = var6;
                    case 120:
                        var1.query = var5;
                        var5 = false;
                        var1.rejectWithError = var5;
                        var1 = var2.bind(var4)(var1);
                        SaveGenerator(address = 140);
                    case 138:
                        return var1;
                    case 140:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun53630_ip = 182;
                            continue _fun53630
                        }
                    case 146:
                        var2 = var1.body;
                        if (!(var3 == var2)) {
                            _fun53630_ip = 179;
                            continue _fun53630
                        }
                    case 155:
                        var3 = global;
                        var5 = var3.JSON;
                        var4 = var5.parse;
                        var3 = var1.text;
                        var2 = var4.bind(var5)(var3);
                    case 179:
                        return var2;
                    case 182:
                        return var1;
                    case 185:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot13 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot13 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun53633: for (var _fun53633_ip = 0;;) switch (_fun53633_ip) {
                    case 0:
                        StartGenerator();
                        var7 = arg1;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun53633_ip = 185;
                            continue _fun53633
                        }
                    case 13:
                        var2 = _closure1_slot20;
                        var5 = undefined;
                        var1 = arg0;
                        var8 = var2.bind(var5)(var1);
                        var2 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 5;
                        var1 = var4[var1];
                        var1 = var2.bind(var5)(var1);
                        var4 = var1.HTTP;
                        var2 = var4.get;
                        var1 = {};
                        var6 = _closure1_slot7;
                        var3 = var6.GET_UNAUTHENTICATED_REPORT_MENU;
                        var3 = var3.bind(var6)(var8);
                        var1.url = var3;
                        var3 = null;
                        var8 = var3 == var7;
                        var6 = undefined;
                        if (var8) {
                            _fun53633_ip = 97;
                            continue _fun53633
                        }
                    case 92:
                        var6 = var7.variant;
                    case 97:
                        var6 = var3 != var6;
                        var5 = undefined;
                        if (!var6) {
                            _fun53633_ip = 120;
                            continue _fun53633
                        }
                    case 106:
                        var6 = {};
                        var7 = var7.variant;
                        var6.variant = var7;
                        var5 = var6;
                    case 120:
                        var1.query = var5;
                        var5 = false;
                        var1.rejectWithError = var5;
                        var1 = var2.bind(var4)(var1);
                        SaveGenerator(address = 140);
                    case 138:
                        return var1;
                    case 140:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun53633_ip = 182;
                            continue _fun53633
                        }
                    case 146:
                        var2 = var1.body;
                        if (!(var3 == var2)) {
                            _fun53633_ip = 179;
                            continue _fun53633
                        }
                    case 155:
                        var3 = global;
                        var5 = var3.JSON;
                        var4 = var5.parse;
                        var3 = var1.text;
                        var2 = var4.bind(var5)(var3);
                    case 179:
                        return var2;
                    case 182:
                        return var1;
                    case 185:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot14 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot14 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun53636: for (var _fun53636_ip = 0;;) switch (_fun53636_ip) {
                    case 0:
                        StartGenerator();
                        var8 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun53636_ip = 196;
                            continue _fun53636
                        }
                    case 13:
                        var1 = _closure1_slot21;
                        var3 = undefined;
                        var10 = var1.bind(var3)(var8);
                        var2 = _closure1_slot11;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var8, var1);
                        SaveGenerator(address = 44);
                    case 42:
                        return var1;
                    case 44:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun53636_ip = 193;
                            continue _fun53636
                        }
                    case 53:
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var2 = 5;
                        var2 = var5[var2];
                        var2 = var4.bind(var3)(var2);
                        var5 = var2.HTTP;
                        var4 = var5.post;
                        var2 = {};
                        var9 = _closure1_slot7;
                        var7 = var9.SUBMIT_REPORT_MENU;
                        var7 = var7.bind(var9)(var10);
                        var2.url = var7;
                        var7 = _closure1_slot10;
                        var9 = {};
                        var6 = var1.root_node_id;
                        var9.nodeRef = var6;
                        var10 = var1.success_node_id;
                        var6 = [''];
                        var6[1] = var10;
                        var9.destination = var6;
                        var6 = new Array(1);
                        var6[0] = var9;
                        var6 = var7.bind(var3)(var1, var8, var6);
                        var2.body = var6;
                        var6 = false;
                        var2.rejectWithError = var6;
                        var2 = var4.bind(var5)(var2);
                        SaveGenerator(address = 181);
                    case 179:
                        return var2;
                    case 181:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                        if (var4) {
                            _fun53636_ip = 190;
                            continue _fun53636
                        }
                    case 187:
                        return var3;
                    case 190:
                        return var2;
                    case 193:
                        return var1;
                    case 196:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot15 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot15 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1, arg2) { // Environment: var2
            var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                _fun53639: for (var _fun53639_ip = 0;;) switch (_fun53639_ip) {
                    case 0:
                        StartGenerator();
                        var5 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun53639_ip = 124;
                            continue _fun53639
                        }
                    case 10:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 5;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        var3 = var1.HTTP;
                        var2 = var3.post;
                        var1 = {};
                        var6 = _closure1_slot7;
                        var4 = var6.VERIFY_UNAUTHENTICATED_REPORT;
                        var4 = var4.bind(var6)(var5);
                        var1.url = var4;
                        var4 = {};
                        var4.name = var5;
                        var5 = arg1;
                        var4.email = var5;
                        var5 = arg2;
                        var4.code = var5;
                        var1.body = var4;
                        var4 = false;
                        var1.rejectWithError = var4;
                        var1 = var2.bind(var3)(var1);
                        SaveGenerator(address = 107);
                    case 105:
                        return var1;
                    case 107:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun53639_ip = 121;
                            continue _fun53639
                        }
                    case 113:
                        var2 = var1.body;
                        return var2;
                    case 121:
                        return var1;
                    case 124:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot16 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot16 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun53642: for (var _fun53642_ip = 0;;) switch (_fun53642_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun53642_ip = 85;
                            continue _fun53642
                        }
                    case 7:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 5;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        var3 = var1.HTTP;
                        var2 = var3.get;
                        var1 = {};
                        var4 = _closure1_slot7;
                        var4 = var4.DSA_EXPERIMENT_UNAUTHENTICATED;
                        var1.url = var4;
                        var4 = false;
                        var1.rejectWithError = var4;
                        var1 = var2.bind(var3)(var1);
                        SaveGenerator(address = 73);
                    case 71:
                        return var1;
                    case 73:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun53642_ip = 82;
                            continue _fun53642
                        }
                    case 79:
                        return var1;
                    case 82:
                        return var1;
                    case 85:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot17 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot17 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun53645: for (var _fun53645_ip = 0;;) switch (_fun53645_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun53645_ip = 85;
                            continue _fun53645
                        }
                    case 7:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 5;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        var3 = var1.HTTP;
                        var2 = var3.get;
                        var1 = {};
                        var4 = _closure1_slot7;
                        var4 = var4.DSA_CAPABILITIES;
                        var1.url = var4;
                        var4 = false;
                        var1.rejectWithError = var4;
                        var1 = var2.bind(var3)(var1);
                        SaveGenerator(address = 73);
                    case 71:
                        return var1;
                    case 73:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun53645_ip = 82;
                            continue _fun53645
                        }
                    case 79:
                        return var1;
                    case 82:
                        return var1;
                    case 85:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot18 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot18 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun53648: for (var _fun53648_ip = 0;;) switch (_fun53648_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun53648_ip = 105;
                            continue _fun53648
                        }
                    case 7:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 5;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        var3 = var1.HTTP;
                        var2 = var3.post;
                        var1 = {};
                        var4 = _closure1_slot7;
                        var4 = var4.SUBMIT_REPORT_SECOND_LOOK;
                        var1.url = var4;
                        var4 = {};
                        var5 = arg0;
                        var4.token = var5;
                        var1.body = var4;
                        var4 = false;
                        var1.rejectWithError = var4;
                        var1 = var2.bind(var3)(var1);
                        SaveGenerator(address = 88);
                    case 86:
                        return var1;
                    case 88:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun53648_ip = 102;
                            continue _fun53648
                        }
                    case 94:
                        var2 = var1.body;
                        return var2;
                    case 102:
                        return var1;
                    case 105:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot19 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot19 = var0;
    var7 = function arg0() {
        var5 = arg0;
        var0 = var5.name;
        var3 = _closure1_slot1;
        var9 = _closure1_slot2;
        var1 = 9;
        var1 = var9[var1];
        var4 = undefined;
        var3 = var3.bind(var4)(var1);
        var1 = global;
        var7 = var1.Object;
        var6 = var7.values;
        var8 = _closure1_slot0;
        var2 = 10;
        var2 = var9[var2];
        var2 = var8.bind(var4)(var2);
        var2 = var2.UnauthenticatedReportNames;
        var6 = var6.bind(var7)(var2);
        var2 = var6.includes;
        var2 = var2.bind(var6)(var0);
        var6 = var5.name;
        var1 = var1.HermesInternal;
        var5 = var1.concat;
        var1 = 'Invalid report type ';
        var1 = var5.bind(var1)(var6);
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var _closure1_slot20 = var7;
    var6 = function arg0() {
        var5 = arg0;
        var0 = var5.name;
        var3 = _closure1_slot1;
        var9 = _closure1_slot2;
        var1 = 9;
        var1 = var9[var1];
        var4 = undefined;
        var3 = var3.bind(var4)(var1);
        var1 = global;
        var7 = var1.Object;
        var6 = var7.values;
        var8 = _closure1_slot0;
        var2 = 10;
        var2 = var9[var2];
        var2 = var8.bind(var4)(var2);
        var2 = var2.ReportNames;
        var6 = var6.bind(var7)(var2);
        var2 = var6.includes;
        var2 = var2.bind(var6)(var0);
        var6 = var5.name;
        var1 = var1.HermesInternal;
        var5 = var1.concat;
        var1 = 'Invalid report type ';
        var1 = var5.bind(var1)(var6);
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var _closure1_slot21 = var6;
    var5 = function arg0() {
        var5 = arg0;
        var0 = var5.name;
        var3 = _closure1_slot1;
        var9 = _closure1_slot2;
        var1 = 9;
        var1 = var9[var1];
        var4 = undefined;
        var3 = var3.bind(var4)(var1);
        var1 = global;
        var7 = var1.Object;
        var6 = var7.values;
        var8 = _closure1_slot0;
        var2 = 10;
        var2 = var9[var2];
        var2 = var8.bind(var4)(var2);
        var2 = var2.ModeratorReportNames;
        var6 = var6.bind(var7)(var2);
        var2 = var6.includes;
        var2 = var2.bind(var6)(var0);
        var6 = var5.name;
        var1 = var1.HermesInternal;
        var5 = var1.concat;
        var1 = 'Invalid report type ';
        var1 = var5.bind(var1)(var6);
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var _closure1_slot22 = var5;
    var4 = function arg0() {
        _fun53652: for (var _fun53652_ip = 0;;) switch (_fun53652_ip) {
            case 0:
                var0 = arg0;
                var3 = _closure1_slot1;
                var8 = _closure1_slot2;
                var2 = 9;
                var2 = var8[var2];
                var7 = undefined;
                var9 = var3.bind(var7)(var2);
                var6 = _closure1_slot0;
                var2 = 6;
                var2 = var8[var2];
                var2 = var6.bind(var7)(var2);
                var2 = var2.ReportMenuTypeSets;
                var4 = var2.REPORT_TO_MOD;
                var3 = var4.has;
                var2 = var0.name;
                var4 = var3.bind(var4)(var2);
                var10 = var0.name;
                var2 = global;
                var3 = var2.HermesInternal;
                var3 = var3.concat;
                var5 = 'Invalid report type ';
                var3 = var3.bind(var5)(var10);
                var3 = var9.bind(var7)(var4, var3);
                var4 = var0.name;
                var3 = 10;
                var3 = var8[var3];
                var3 = var6.bind(var7)(var3);
                var3 = var3.ModeratorReportNames;
                var3 = var3.MESSAGE;
                if (!(var4 !== var3)) {
                    _fun53652_ip = 188;
                    continue _fun53652
                }
            case 139:
                var4 = var2.Error;
                var3 = var0.name;
                var2 = var2.HermesInternal;
                var2 = var2.concat;
                var12 = var2.bind(var5)(var3);
                var3 = var4.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var4
                    }
                });
                var13 = var3;
                var2 = new var13[var4](var12, var11);
                var2 = var2 instanceof Object ? var2 : var3;
                throw var2;
            case 188:
                var3 = _closure1_slot7;
                var2 = var3.SUBMIT_MODERATOR_MESSAGE_REPORT;
                var1 = var0.record;
                var1 = var1.channel_id;
                var0 = var0.record;
                var0 = var0.id;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot23 = var4;
    var0 = global;
    var13 = var0.Object;
    var12 = var13.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var12.bind(var13)(var2, var0, var3);
    var0 = 0;
    var3 = var11[var0];
    var0 = undefined;
    var3 = var9.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var12 = var11[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var12);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var11[var3];
    var3 = var9.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var11[var3];
    var3 = var10.bind(var0)(var3);
    var9 = var3.AnalyticEvents;
    var _closure1_slot6 = var9;
    var3 = var3.Endpoints;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var11[var3];
    var3 = var10.bind(var0)(var3);
    var3 = var3.SafetyToastType;
    var _closure1_slot8 = var3;
    var3 = function arg0, arg1, arg2() {
        _fun53653: for (var _fun53653_ip = 0;;) switch (_fun53653_ip) {
            case 0:
                var4 = arg0;
                var1 = arg1;
                var8 = arg2;
                var3 = var4.version;
                var0 = var4.variant;
                var6 = var4.language;
                var4 = {};
                var7 = undefined;
                var4.channel_id = var7;
                var4.message_id = var7;
                var4.guild_id = var7;
                var5 = {};
                var5.version = var3;
                var5.variant = var0;
                var0 = null;
                var9 = var0 != var6;
                var3 = 'en';
                if (!var9) {
                    _fun53653_ip = 72;
                    continue _fun53653
                }
            case 69:
                var3 = var6;
            case 72:
                var5.language = var3;
                var6 = var8.map;
                var3 = function(arg0) { // Environment: var2
                    var0 = arg0;
                    var0 = var0.nodeRef;
                    return var0;
                };
                var3 = var6.bind(var8)(var3);
                var5.breadcrumbs = var3;
                var6 = var8.reduce;
                var3 = function(arg0, arg1) { // Environment: var2
                    _fun53655: for (var _fun53655_ip = 0;;) switch (_fun53655_ip) {
                        case 0:
                            var0 = arg1;
                            var3 = var0.multiSelect;
                            var5 = var0.textInput;
                            var0 = {};
                            var9 = arg0;
                            var10 = var0;
                            var1 = copyDataProperties(var10, var9);
                            var6 = null;
                            var1 = var6 != var3;
                            if (!var1) {
                                _fun53655_ip = 74;
                                continue _fun53655
                            }
                        case 36:
                            var2 = {};
                            var4 = var3.name;
                            var7 = global;
                            var8 = var7.Object;
                            var7 = var8.keys;
                            var3 = var3.state;
                            var3 = var7.bind(var8)(var3);
                            var2[var4] = var3;
                            var1 = var2;
                        case 74:
                            var10 = var0;
                            var9 = var1;
                            var1 = copyDataProperties(var10, var9);
                            var1 = global;
                            var3 = var1.Object;
                            var2 = var3.fromEntries;
                            var4 = var1.Object;
                            var1 = var4.entries;
                            if (!(var6 == var5)) {
                                _fun53655_ip = 116;
                                continue _fun53655
                            }
                        case 114:
                            var5 = {};
                        case 116:
                            var5 = var1.bind(var4)(var5);
                            var4 = var5.map;
                            var1 = function(arg0) { // Environment: var1
                                _fun53656: for (var _fun53656_ip = 0;;) switch (_fun53656_ip) {
                                    case 0:
                                        var6 = arg0;
                                        var1 = var6[Symbol.iterator];
                                        var6 = var1().next;
                                        var8 = undefined;
                                        var2 = undefined;
                                        var5 = undefined;
                                        var7 = var6().value;
                                        var9 = var1;
                                        var9 = var9 === var8;
                                        var2 = var9;
                                        if (var9) {
                                            _fun53656_ip = 32;
                                            continue _fun53656
                                        }
                                    case 29:
                                        var5 = var7;
                                    case 32:
                                        var3 = var5;
                                        var5 = undefined;
                                        var7 = var2;
                                        if (var7) {
                                            _fun53656_ip = 63;
                                            continue _fun53656
                                        }
                                    case 43:
                                        var6 = var6().value;
                                        var7 = var1;
                                        var7 = var7 === var8;
                                        var2 = var7;
                                        if (var7) {
                                            _fun53656_ip = 63;
                                            continue _fun53656
                                        }
                                    case 60:
                                        var5 = var6;
                                    case 63: // try_start_0
                                        var4 = var5.value;
                                    case 68: // try_end0
                                        var5 = var2;
                                        if (var5) {
                                            _fun53656_ip = 77;
                                            continue _fun53656
                                        }
                                    case 74:
                                        var1.return();
                                    case 77:
                                        var5 = var3;
                                        var3 = new Array(2);
                                        var3[0] = var5;
                                        var3[1] = var4;
                                        return var3;
                                    case 94: // catch_target0
                                        CatchBlockStart(arg_register = 0);
                                        _fun53656_ip = 100;
                                        continue _fun53656;
                                    case 98:
                                        CatchBlockStart(arg_register = 0);
                                    case 100:
                                        if (var2) {
                                            _fun53656_ip = 106;
                                            continue _fun53656
                                        }
                                    case 103:
                                        var1.return();
                                    case 106:
                                        throw var0;
                                }
                            };
                            var1 = var4.bind(var5)(var1);
                            var9 = var2.bind(var3)(var1);
                            var10 = var0;
                            var1 = copyDataProperties(var10, var9);
                            return var0;
                    }
                };
                var2 = {};
                var2 = var6.bind(var8)(var3, var2);
                var5.elements = var2;
                var3 = var1.name;
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 10;
                var2 = var8[var2];
                var2 = var6.bind(var7)(var2);
                var2 = var2.ModeratorReportNames;
                var2 = var2.MESSAGE;
                if (!(var3 !== var2)) {
                    _fun53653_ip = 167;
                    continue _fun53653
                }
            case 165:
                return var0;
            case 167:
                var0 = var1.record;
                var3 = var0.channel_id;
                var2 = var0.id;
                var0 = {};
                var11 = var0;
                var10 = var5;
                var5 = copyDataProperties(var11, var10);
                var11 = var0;
                var10 = var4;
                var4 = copyDataProperties(var11, var10);
                var4 = var1.name;
                var1 = 'name';
                var0[var1] = var4;
                var1 = 'channel_id';
                var0[var1] = var3;
                var1 = 'message_id';
                var0[var1] = var2;
                return var0;
        }
    };
    var _closure1_slot9 = var3;
    var3 = function arg0, arg1, arg2, arg3() {
        _fun53657: for (var _fun53657_ip = 0;;) switch (_fun53657_ip) {
            case 0:
                var4 = arg0;
                var1 = arg1;
                var9 = arg2;
                var6 = arg3;
                var3 = var4.version;
                var0 = var4.variant;
                var7 = var4.language;
                var4 = {};
                var8 = undefined;
                var4.channel_id = var8;
                var4.message_id = var8;
                var4.stage_instance_id = var8;
                var4.guild_id = var8;
                var4.guild_scheduled_event_id = var8;
                var4.user_id = var8;
                var4.email_token = var8;
                var4.application_id = var8;
                var4.entrypoint = var8;
                var4.widget_id = var8;
                var5 = {};
                var5.version = var3;
                var5.variant = var0;
                var0 = null;
                var10 = var0 != var7;
                var3 = 'en';
                if (!var10) {
                    _fun53657_ip = 110;
                    continue _fun53657
                }
            case 107:
                var3 = var7;
            case 110:
                var5.language = var3;
                var7 = var9.map;
                var3 = function(arg0) { // Environment: var2
                    var0 = arg0;
                    var0 = var0.nodeRef;
                    return var0;
                };
                var3 = var7.bind(var9)(var3);
                var5.breadcrumbs = var3;
                var7 = var9.reduce;
                var3 = function(arg0, arg1) { // Environment: var2
                    _fun53659: for (var _fun53659_ip = 0;;) switch (_fun53659_ip) {
                        case 0:
                            var0 = arg1;
                            var3 = var0.multiSelect;
                            var5 = var0.textInput;
                            var0 = {};
                            var9 = arg0;
                            var10 = var0;
                            var1 = copyDataProperties(var10, var9);
                            var6 = null;
                            var1 = var6 != var3;
                            if (!var1) {
                                _fun53659_ip = 74;
                                continue _fun53659
                            }
                        case 36:
                            var2 = {};
                            var4 = var3.name;
                            var7 = global;
                            var8 = var7.Object;
                            var7 = var8.keys;
                            var3 = var3.state;
                            var3 = var7.bind(var8)(var3);
                            var2[var4] = var3;
                            var1 = var2;
                        case 74:
                            var10 = var0;
                            var9 = var1;
                            var1 = copyDataProperties(var10, var9);
                            var1 = global;
                            var3 = var1.Object;
                            var2 = var3.fromEntries;
                            var4 = var1.Object;
                            var1 = var4.entries;
                            if (!(var6 == var5)) {
                                _fun53659_ip = 116;
                                continue _fun53659
                            }
                        case 114:
                            var5 = {};
                        case 116:
                            var5 = var1.bind(var4)(var5);
                            var4 = var5.map;
                            var1 = function(arg0) { // Environment: var1
                                _fun53660: for (var _fun53660_ip = 0;;) switch (_fun53660_ip) {
                                    case 0:
                                        var6 = arg0;
                                        var1 = var6[Symbol.iterator];
                                        var6 = var1().next;
                                        var8 = undefined;
                                        var2 = undefined;
                                        var5 = undefined;
                                        var7 = var6().value;
                                        var9 = var1;
                                        var9 = var9 === var8;
                                        var2 = var9;
                                        if (var9) {
                                            _fun53660_ip = 32;
                                            continue _fun53660
                                        }
                                    case 29:
                                        var5 = var7;
                                    case 32:
                                        var3 = var5;
                                        var5 = undefined;
                                        var7 = var2;
                                        if (var7) {
                                            _fun53660_ip = 63;
                                            continue _fun53660
                                        }
                                    case 43:
                                        var6 = var6().value;
                                        var7 = var1;
                                        var7 = var7 === var8;
                                        var2 = var7;
                                        if (var7) {
                                            _fun53660_ip = 63;
                                            continue _fun53660
                                        }
                                    case 60:
                                        var5 = var6;
                                    case 63: // try_start_0
                                        var4 = var5.value;
                                    case 68: // try_end0
                                        var5 = var2;
                                        if (var5) {
                                            _fun53660_ip = 77;
                                            continue _fun53660
                                        }
                                    case 74:
                                        var1.return();
                                    case 77:
                                        var5 = var3;
                                        var3 = new Array(2);
                                        var3[0] = var5;
                                        var3[1] = var4;
                                        return var3;
                                    case 94: // catch_target0
                                        CatchBlockStart(arg_register = 0);
                                        _fun53660_ip = 100;
                                        continue _fun53660;
                                    case 98:
                                        CatchBlockStart(arg_register = 0);
                                    case 100:
                                        if (var2) {
                                            _fun53660_ip = 106;
                                            continue _fun53660
                                        }
                                    case 103:
                                        var1.return();
                                    case 106:
                                        throw var0;
                                }
                            };
                            var1 = var4.bind(var5)(var1);
                            var9 = var2.bind(var3)(var1);
                            var10 = var0;
                            var1 = copyDataProperties(var10, var9);
                            return var0;
                    }
                };
                var2 = {};
                var2 = var7.bind(var9)(var3, var2);
                var5.elements = var2;
                var7 = var1.name;
                var10 = _closure1_slot0;
                var3 = _closure1_slot2;
                var9 = 10;
                var3 = var3[var9];
                var3 = var10.bind(var8)(var3);
                var3 = var3.ReportNames;
                var3 = var3.MESSAGE;
                if (!(var7 !== var3)) {
                    _fun53657_ip = 1460;
                    continue _fun53657
                }
            case 206:
                var7 = var1.name;
                var10 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var9];
                var3 = var10.bind(var8)(var3);
                var3 = var3.ReportNames;
                var3 = var3.FIRST_DM;
                if (!(var7 !== var3)) {
                    _fun53657_ip = 1460;
                    continue _fun53657
                }
            case 247:
                var7 = var1.name;
                var10 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var9];
                var3 = var10.bind(var8)(var3);
                var3 = var3.ReportNames;
                var3 = var3.GUILD;
                if (!(var7 !== var3)) {
                    _fun53657_ip = 1402;
                    continue _fun53657
                }
            case 288:
                var7 = var1.name;
                var10 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var9];
                var3 = var10.bind(var8)(var3);
                var3 = var3.ReportNames;
                var3 = var3.GUILD_DISCOVERY;
                if (!(var7 !== var3)) {
                    _fun53657_ip = 1402;
                    continue _fun53657
                }
            case 329:
                var7 = var1.name;
                var10 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var9];
                var3 = var10.bind(var8)(var3);
                var3 = var3.ReportNames;
                var3 = var3.GUILD_DIRECTORY_ENTRY;
                if (!(var7 !== var3)) {
                    _fun53657_ip = 1330;
                    continue _fun53657
                }
            case 370:
                var7 = var1.name;
                var10 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var9];
                var3 = var10.bind(var8)(var3);
                var3 = var3.ReportNames;
                var3 = var3.STAGE_CHANNEL;
                if (!(var7 !== var3)) {
                    _fun53657_ip = 1244;
                    continue _fun53657
                }
            case 411:
                var7 = var1.name;
                var10 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var9];
                var3 = var10.bind(var8)(var3);
                var3 = var3.ReportNames;
                var3 = var3.GUILD_SCHEDULED_EVENT;
                if (!(var7 !== var3)) {
                    _fun53657_ip = 1172;
                    continue _fun53657
                }
            case 452:
                var7 = var1.name;
                var10 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var9];
                var3 = var10.bind(var8)(var3);
                var3 = var3.ReportNames;
                var3 = var3.USER;
                if (!(var7 !== var3)) {
                    _fun53657_ip = 1096;
                    continue _fun53657
                }
            case 493:
                var7 = var1.name;
                var10 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var9];
                var3 = var10.bind(var8)(var3);
                var3 = var3.UnauthenticatedReportNames;
                var3 = var3.USER;
                if (!(var7 !== var3)) {
                    _fun53657_ip = 1011;
                    continue _fun53657
                }
            case 534:
                var7 = var1.name;
                var10 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var9];
                var3 = var10.bind(var8)(var3);
                var3 = var3.UnauthenticatedReportNames;
                var3 = var3.MESSAGE;
                if (!(var7 !== var3)) {
                    _fun53657_ip = 941;
                    continue _fun53657
                }
            case 575:
                var7 = var1.name;
                var10 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var9];
                var3 = var10.bind(var8)(var3);
                var3 = var3.UnauthenticatedReportNames;
                var3 = var3.GUILD;
                if (!(var7 !== var3)) {
                    _fun53657_ip = 871;
                    continue _fun53657
                }
            case 616:
                var7 = var1.name;
                var10 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var9];
                var3 = var10.bind(var8)(var3);
                var3 = var3.ReportNames;
                var3 = var3.APPLICATION;
                if (!(var7 !== var3)) {
                    _fun53657_ip = 765;
                    continue _fun53657
                }
            case 654:
                var3 = var1.name;
                var7 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var9];
                var2 = var7.bind(var8)(var2);
                var2 = var2.ReportNames;
                var2 = var2.WIDGET;
                var0 = null;
                if (!(var3 === var2)) {
                    _fun53657_ip = 763;
                    continue _fun53657
                }
            case 694:
                var2 = {};
                var12 = var2;
                var11 = var5;
                var3 = copyDataProperties(var12, var11);
                var12 = var2;
                var11 = var4;
                var3 = copyDataProperties(var12, var11);
                var7 = var1.name;
                var3 = 'name';
                var2[var3] = var7;
                var7 = var1.user_id;
                var3 = 'user_id';
                var2[var3] = var7;
                var7 = var1.widget_id;
                var3 = 'widget_id';
                var2[var3] = var7;
                var0 = var2;
            case 763:
                _fun53657_ip = 869;
                continue _fun53657;
            case 765:
                var2 = {};
                var12 = var2;
                var11 = var5;
                var3 = copyDataProperties(var12, var11);
                var12 = var2;
                var11 = var4;
                var3 = copyDataProperties(var12, var11);
                var7 = var1.name;
                var3 = 'name';
                var2[var3] = var7;
                var3 = var1.record;
                var7 = var3.id;
                var3 = 'application_id';
                var2[var3] = var7;
                var7 = var1.contextualGuildId;
                var3 = 'guild_id';
                var2[var3] = var7;
                var7 = var1.contextualChannelId;
                var3 = 'channel_id';
                var2[var3] = var7;
                var7 = var1.entrypoint;
                var3 = 'entrypoint';
                var2[var3] = var7;
                var0 = var2;
            case 869:
                _fun53657_ip = 939;
                continue _fun53657;
            case 871:
                var2 = {};
                var12 = var2;
                var11 = var5;
                var3 = copyDataProperties(var12, var11);
                var12 = var2;
                var11 = var4;
                var3 = copyDataProperties(var12, var11);
                var7 = var1.name;
                var3 = 'name';
                var2[var3] = var7;
                var3 = var1.record;
                var7 = var3.id;
                var3 = 'guild_id';
                var2[var3] = var7;
                var3 = 'email_token';
                var2[var3] = var6;
                var0 = var2;
            case 939:
                _fun53657_ip = 1009;
                continue _fun53657;
            case 941:
                var2 = {};
                var12 = var2;
                var11 = var5;
                var3 = copyDataProperties(var12, var11);
                var12 = var2;
                var11 = var4;
                var3 = copyDataProperties(var12, var11);
                var7 = var1.name;
                var3 = 'name';
                var2[var3] = var7;
                var3 = var1.record;
                var7 = var3.id;
                var3 = 'message_id';
                var2[var3] = var7;
                var3 = 'email_token';
                var2[var3] = var6;
                var0 = var2;
            case 1009:
                _fun53657_ip = 1094;
                continue _fun53657;
            case 1011:
                var2 = {};
                var12 = var2;
                var11 = var5;
                var3 = copyDataProperties(var12, var11);
                var12 = var2;
                var11 = var4;
                var3 = copyDataProperties(var12, var11);
                var7 = var1.name;
                var3 = 'name';
                var2[var3] = var7;
                var3 = var1.record;
                var7 = var3.id;
                var3 = 'user_id';
                var2[var3] = var7;
                var7 = var1.contextualGuildId;
                var3 = 'guild_id';
                var2[var3] = var7;
                var3 = 'email_token';
                var2[var3] = var6;
                var0 = var2;
            case 1094:
                _fun53657_ip = 1170;
                continue _fun53657;
            case 1096:
                var2 = {};
                var12 = var2;
                var11 = var5;
                var3 = copyDataProperties(var12, var11);
                var12 = var2;
                var11 = var4;
                var3 = copyDataProperties(var12, var11);
                var6 = var1.name;
                var3 = 'name';
                var2[var3] = var6;
                var3 = var1.record;
                var6 = var3.id;
                var3 = 'user_id';
                var2[var3] = var6;
                var6 = var1.contextualGuildId;
                var3 = 'guild_id';
                var2[var3] = var6;
                var0 = var2;
            case 1170:
                return var0;
            case 1172:
                var0 = var1.record;
                var3 = var0.id;
                var6 = var0.guild_id;
                var0 = {};
                var12 = var0;
                var11 = var5;
                var2 = copyDataProperties(var12, var11);
                var12 = var0;
                var11 = var4;
                var2 = copyDataProperties(var12, var11);
                var7 = var1.name;
                var2 = 'name';
                var0[var2] = var7;
                var2 = 'guild_id';
                var0[var2] = var6;
                var2 = 'guild_scheduled_event_id';
                var0[var2] = var3;
                return var0;
            case 1244:
                var0 = var1.record;
                var3 = var0.id;
                var6 = var0.guild_id;
                var7 = var0.channel_id;
                var0 = {};
                var12 = var0;
                var11 = var5;
                var2 = copyDataProperties(var12, var11);
                var12 = var0;
                var11 = var4;
                var2 = copyDataProperties(var12, var11);
                var8 = var1.name;
                var2 = 'name';
                var0[var2] = var8;
                var2 = 'channel_id';
                var0[var2] = var7;
                var2 = 'guild_id';
                var0[var2] = var6;
                var2 = 'stage_instance_id';
                var0[var2] = var3;
                return var0;
            case 1330:
                var0 = var1.record;
                var3 = var0.guildId;
                var6 = var0.channelId;
                var0 = {};
                var12 = var0;
                var11 = var5;
                var2 = copyDataProperties(var12, var11);
                var12 = var0;
                var11 = var4;
                var2 = copyDataProperties(var12, var11);
                var7 = var1.name;
                var2 = 'name';
                var0[var2] = var7;
                var2 = 'channel_id';
                var0[var2] = var6;
                var2 = 'guild_id';
                var0[var2] = var3;
                return var0;
            case 1402:
                var0 = var1.record;
                var3 = var0.id;
                var0 = {};
                var12 = var0;
                var11 = var5;
                var2 = copyDataProperties(var12, var11);
                var12 = var0;
                var11 = var4;
                var2 = copyDataProperties(var12, var11);
                var6 = var1.name;
                var2 = 'name';
                var0[var2] = var6;
                var2 = 'guild_id';
                var0[var2] = var3;
                return var0;
            case 1460:
                var0 = var1.record;
                var3 = var0.channel_id;
                var2 = var0.id;
                var0 = {};
                var12 = var0;
                var11 = var5;
                var5 = copyDataProperties(var12, var11);
                var12 = var0;
                var11 = var4;
                var4 = copyDataProperties(var12, var11);
                var4 = var1.name;
                var1 = 'name';
                var0[var1] = var4;
                var1 = 'channel_id';
                var0[var1] = var3;
                var1 = 'message_id';
                var0[var1] = var2;
                return var0;
        }
    };
    var _closure1_slot10 = var3;
    var3 = {};
    var9 = 'SETTINGS_UPSELLS_VIEWED';
    var3.SETTINGS_UPSELLS_VIEWED = var9;
    var9 = 'SETTINGS_UPSELLS_APPLY_CLICKED';
    var3.SETTINGS_UPSELLS_APPLY_CLICKED = var9;
    var9 = 'SETTINGS_UPSELLS_GO_TO_SETTINGS_LINK_CLICKED';
    var3.SETTINGS_UPSELLS_GO_TO_SETTINGS_LINK_CLICKED = var9;
    var9 = 12;
    var9 = var11[var9];
    var11 = var10.bind(var0)(var9);
    var10 = var11.fileFinishedImporting;
    var9 = 'modules/in_app_reports/ReportUtils.tsx';
    var9 = var10.bind(var11)(var9);
    var2.getReportMenu = var8;
    var8 = function() {
        var0 = undefined;
        var3 = _closure1_slot13;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.getReportMenuForModeratorReport = var8;
    var8 = function() {
        var0 = undefined;
        var3 = _closure1_slot14;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.getUnauthenticatedReportMenu = var8;
    var8 = function() {
        var0 = undefined;
        var3 = _closure1_slot15;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.submitHeadlessReport = var8;
    var8 = function arg0, arg1, arg2() {
        _fun53664: for (var _fun53664_ip = 0;;) switch (_fun53664_ip) {
            case 0:
                var5 = arg0;
                var4 = arg1;
                var3 = arg2;
                var2 = _closure1_slot5;
                var1 = var2.get;
                var0 = 'iar_skip_api_report_submit';
                var0 = var1.bind(var2)(var0);
                if (var0) {
                    _fun53664_ip = 195;
                    continue _fun53664
                }
            case 38:
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 6;
                var0 = var2[var0];
                var2 = undefined;
                var0 = var1.bind(var2)(var0);
                var0 = var0.ReportMenuTypeSets;
                var6 = var0.REPORT_TO_MOD;
                var1 = var6.has;
                var0 = var4.name;
                var0 = var1.bind(var6)(var0);
                if (var0) {
                    _fun53664_ip = 179;
                    continue _fun53664
                }
            case 90:
                var1 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 5;
                var0 = var6[var0];
                var0 = var1.bind(var2)(var0);
                var6 = var0.HTTP;
                var1 = var6.post;
                var0 = {};
                var10 = _closure1_slot7;
                var9 = var10.SUBMIT_REPORT_MENU;
                var8 = _closure1_slot21;
                var8 = var8.bind(var2)(var4);
                var8 = var9.bind(var10)(var8);
                var0.url = var8;
                var7 = _closure1_slot10;
                var7 = var7.bind(var2)(var5, var4, var3);
                var0.body = var7;
                var7 = false;
                var0.rejectWithError = var7;
                var0 = var1.bind(var6)(var0);
                _fun53664_ip = 193;
                continue _fun53664;
            case 179:
                var1 = function arg0, arg1, arg2() {
                    var7 = arg1;
                    var3 = _closure1_slot9;
                    var6 = undefined;
                    var2 = arg0;
                    var1 = arg2;
                    var4 = var3.bind(var6)(var2, var7, var1);
                    var _closure3_slot0 = var4;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 5;
                    var1 = var3[var1];
                    var1 = var2.bind(var6)(var1);
                    var3 = var1.HTTP;
                    var2 = var3.post;
                    var1 = {};
                    var5 = _closure1_slot23;
                    var5 = var5.bind(var6)(var7);
                    var1.url = var5;
                    var1.body = var4;
                    var4 = false;
                    var1.rejectWithError = var4;
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.then;
                    var0 = function(arg0) { // Environment: var0
                        _fun53666: for (var _fun53666_ip = 0;;) switch (_fun53666_ip) {
                            case 0:
                                var3 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var1 = 7;
                                var1 = var2[var1];
                                var2 = undefined;
                                var4 = var3.bind(var2)(var1);
                                var3 = var4.showSuccessToast;
                                var1 = _closure1_slot8;
                                var1 = var1.REPORT_TO_MOD_SUCCESS;
                                var1 = var3.bind(var4)(var1);
                                var1 = _closure3_slot0;
                                var5 = null;
                                var4 = var5 == var1;
                                var1 = undefined;
                                if (var4) {
                                    _fun53666_ip = 73;
                                    continue _fun53666
                                }
                            case 64:
                                var4 = _closure3_slot0;
                                var1 = var4.channel_id;
                            case 73:
                                var1 = var5 != var1;
                                if (!var1) {
                                    _fun53666_ip = 107;
                                    continue _fun53666
                                }
                            case 80:
                                var4 = _closure3_slot0;
                                var6 = var5 == var4;
                                var4 = undefined;
                                if (var6) {
                                    _fun53666_ip = 103;
                                    continue _fun53666
                                }
                            case 93:
                                var6 = _closure3_slot0;
                                var4 = var6.message_id;
                            case 103:
                                var1 = var5 != var4;
                            case 107:
                                if (!var1) {
                                    _fun53666_ip = 175;
                                    continue _fun53666
                                }
                            case 110:
                                var1 = _closure1_slot1;
                                var4 = _closure1_slot2;
                                var0 = 8;
                                var0 = var4[var0];
                                var2 = var1.bind(var2)(var0);
                                var1 = var2.dispatch;
                                var0 = {};
                                var4 = 'REPORT_TO_MOD_REPORT_MESSAGE_SUCCESS';
                                var0.type = var4;
                                var3 = _closure3_slot0;
                                var4 = var3.channel_id;
                                var0.channelId = var4;
                                var3 = var3.message_id;
                                var0.messageId = var3;
                                var0 = var1.bind(var2)(var0);
                            case 175:
                                var0 = arg0;
                                return var0;
                        }
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var1.bind(var2)(var5, var4, var3);
            case 193:
                _fun53664_ip = 213;
                continue _fun53664;
            case 195:
                var1 = global;
                var2 = var1.Promise;
                var1 = var2.resolve;
                var0 = var1.bind(var2)();
            case 213:
                return var0;
        }
    };
    var2.submitReport = var8;
    var8 = function arg0, arg1, arg2, arg3() {
        _fun53667: for (var _fun53667_ip = 0;;) switch (_fun53667_ip) {
            case 0:
                var8 = arg1;
                var2 = _closure1_slot5;
                var1 = var2.get;
                var0 = 'iar_skip_api_report_submit';
                var0 = var1.bind(var2)(var0);
                if (var0) {
                    _fun53667_ip = 131;
                    continue _fun53667
                }
            case 29:
                var0 = _closure1_slot20;
                var7 = undefined;
                var6 = var0.bind(var7)(var8);
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 5;
                var0 = var2[var0];
                var0 = var1.bind(var7)(var0);
                var2 = var0.HTTP;
                var1 = var2.post;
                var0 = {};
                var5 = _closure1_slot7;
                var4 = var5.SUBMIT_UNAUTHENTICATED_REPORT_MENU;
                var4 = var4.bind(var5)(var6);
                var0.url = var4;
                var6 = _closure1_slot10;
                var12 = arg0;
                var10 = arg2;
                var9 = arg3;
                var13 = undefined;
                var11 = var8;
                var3 = var13[var6](var12, var11, var10, var9, var8);
                var0.body = var3;
                var3 = false;
                var0.rejectWithError = var3;
                var0 = var1.bind(var2)(var0);
                return var0;
            case 131:
                var0 = global;
                var1 = var0.Promise;
                var0 = var1.resolve;
                var0 = var0.bind(var1)();
                return var0;
        }
    };
    var2.submitUnauthenticatedReport = var8;
    var8 = function arg0, arg1() {
        var4 = arg0;
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 5;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var2 = var0.HTTP;
        var1 = var2.post;
        var0 = {};
        var5 = _closure1_slot7;
        var3 = var5.SEND_UNAUTHENTICATED_REPORT_PINCODE;
        var3 = var3.bind(var5)(var4);
        var0.url = var3;
        var3 = {};
        var3.name = var4;
        var4 = arg1;
        var3.email = var4;
        var0.body = var3;
        var3 = false;
        var0.rejectWithError = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.sendUnauthenticatedReportPincode = var8;
    var8 = function() {
        var0 = undefined;
        var3 = _closure1_slot16;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.verifyUnauthenticatedReport = var8;
    var8 = function() {
        var0 = undefined;
        var3 = _closure1_slot17;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.getDsaExperiment = var8;
    var8 = function() {
        var0 = undefined;
        var3 = _closure1_slot18;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.fetchUrfCapabilities = var8;
    var8 = function() {
        var0 = undefined;
        var3 = _closure1_slot19;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.submitReportSecondLook = var8;
    var2.getUnauthenticatedReportNameSafely = var7;
    var2.getReportNameSafely = var6;
    var2.getModeratorReportNameSafely = var5;
    var2.getModeratorReportEndpointSafely = var4;
    var4 = function arg0, arg1, arg2() {
        _fun53673: for (var _fun53673_ip = 0;;) switch (_fun53673_ip) {
            case 0:
                var6 = arg0;
                var2 = _closure1_slot1;
                var7 = _closure1_slot2;
                var0 = 11;
                var1 = var7[var0];
                var0 = undefined;
                var4 = var2.bind(var0)(var1);
                var3 = var4.trackWithMetadata;
                var1 = _closure1_slot6;
                var2 = var1.IAR_MODAL_CLOSE;
                var1 = {};
                var8 = var6.name;
                var1.report_type = var8;
                var8 = arg2;
                var1.report_id = var8;
                var8 = arg1;
                var1.navigation_history = var8;
                var8 = var6.name;
                var10 = _closure1_slot0;
                var9 = 10;
                var7 = var7[var9];
                var7 = var10.bind(var0)(var7);
                var7 = var7.ReportNames;
                var7 = var7.MESSAGE;
                if (!(var8 !== var7)) {
                    _fun53673_ip = 151;
                    continue _fun53673
                }
            case 111:
                var10 = var6.name;
                var8 = _closure1_slot0;
                var7 = _closure1_slot2;
                var7 = var7[var9];
                var7 = var8.bind(var0)(var7);
                var7 = var7.ReportNames;
                var8 = var7.FIRST_DM;
                var7 = undefined;
                if (!(var10 === var8)) {
                    _fun53673_ip = 162;
                    continue _fun53673
                }
            case 151:
                var8 = var6.record;
                var7 = var8.id;
            case 162:
                var1.message_id = var7;
                var10 = var6.name;
                var8 = _closure1_slot0;
                var7 = _closure1_slot2;
                var7 = var7[var9];
                var7 = var8.bind(var0)(var7);
                var7 = var7.ReportNames;
                var8 = var7.STAGE_CHANNEL;
                var7 = undefined;
                if (!(var10 === var8)) {
                    _fun53673_ip = 218;
                    continue _fun53673
                }
            case 207:
                var8 = var6.record;
                var7 = var8.id;
            case 218:
                var1.stage_instance_id = var7;
                var10 = var6.name;
                var8 = _closure1_slot0;
                var7 = _closure1_slot2;
                var7 = var7[var9];
                var7 = var8.bind(var0)(var7);
                var7 = var7.ReportNames;
                var8 = var7.GUILD_SCHEDULED_EVENT;
                var7 = undefined;
                if (!(var10 === var8)) {
                    _fun53673_ip = 274;
                    continue _fun53673
                }
            case 263:
                var8 = var6.record;
                var7 = var8.id;
            case 274:
                var1.guild_scheduled_event_id = var7;
                var8 = var6.name;
                var10 = _closure1_slot0;
                var7 = _closure1_slot2;
                var7 = var7[var9];
                var7 = var10.bind(var0)(var7);
                var7 = var7.ReportNames;
                var7 = var7.GUILD;
                if (!(var8 !== var7)) {
                    _fun53673_ip = 462;
                    continue _fun53673
                }
            case 320:
                var8 = var6.name;
                var10 = _closure1_slot0;
                var7 = _closure1_slot2;
                var7 = var7[var9];
                var7 = var10.bind(var0)(var7);
                var7 = var7.ReportNames;
                var7 = var7.GUILD_DISCOVERY;
                if (!(var8 !== var7)) {
                    _fun53673_ip = 462;
                    continue _fun53673
                }
            case 358:
                var8 = var6.name;
                var10 = _closure1_slot0;
                var7 = _closure1_slot2;
                var7 = var7[var9];
                var7 = var10.bind(var0)(var7);
                var7 = var7.ReportNames;
                var7 = var7.GUILD_DIRECTORY_ENTRY;
                if (!(var8 !== var7)) {
                    _fun53673_ip = 449;
                    continue _fun53673
                }
            case 396:
                var10 = var6.name;
                var8 = _closure1_slot0;
                var7 = _closure1_slot2;
                var7 = var7[var9];
                var7 = var8.bind(var0)(var7);
                var7 = var7.ReportNames;
                var8 = var7.GUILD_SCHEDULED_EVENT;
                var7 = undefined;
                if (!(var10 === var8)) {
                    _fun53673_ip = 447;
                    continue _fun53673
                }
            case 436:
                var8 = var6.record;
                var7 = var8.guild_id;
            case 447:
                _fun53673_ip = 460;
                continue _fun53673;
            case 449:
                var8 = var6.record;
                var7 = var8.guildId;
            case 460:
                _fun53673_ip = 473;
                continue _fun53673;
            case 462:
                var8 = var6.record;
                var7 = var8.id;
            case 473:
                var1.guild_id = var7;
                var8 = var6.name;
                var10 = _closure1_slot0;
                var7 = _closure1_slot2;
                var7 = var7[var9];
                var7 = var10.bind(var0)(var7);
                var7 = var7.ReportNames;
                var7 = var7.GUILD_SCHEDULED_EVENT;
                if (!(var8 !== var7)) {
                    _fun53673_ip = 568;
                    continue _fun53673
                }
            case 515:
                var10 = var6.name;
                var8 = _closure1_slot0;
                var7 = _closure1_slot2;
                var7 = var7[var9];
                var7 = var8.bind(var0)(var7);
                var7 = var7.ReportNames;
                var8 = var7.GUILD_DIRECTORY_ENTRY;
                var7 = undefined;
                if (!(var10 === var8)) {
                    _fun53673_ip = 566;
                    continue _fun53673
                }
            case 555:
                var8 = var6.record;
                var7 = var8.channelId;
            case 566:
                _fun53673_ip = 579;
                continue _fun53673;
            case 568:
                var8 = var6.record;
                var7 = var8.channel_id;
            case 579:
                var1.channel_id = var7;
                var8 = var6.name;
                var7 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var9];
                var5 = var7.bind(var0)(var5);
                var5 = var5.ReportNames;
                var7 = var5.APPLICATION;
                var5 = undefined;
                if (!(var8 === var7)) {
                    _fun53673_ip = 634;
                    continue _fun53673
                }
            case 623:
                var6 = var6.record;
                var5 = var6.id;
            case 634:
                var1.application_id = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var0;
        }
    };
    var2.trackCloseReportModalAnalytics = var4;
    var4 = function arg0, arg1() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 8;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'IN_APP_REPORTS_SHOW_FEEDBACK';
        var1.type = var4;
        var4 = arg1;
        var1.reportId = var4;
        var4 = arg0;
        var4 = var4.name;
        var1.reportType = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.showInAppReportsFeedbackModal = var4;
    var4 = function arg0, arg1() {
        _fun53675: for (var _fun53675_ip = 0;;) switch (_fun53675_ip) {
            case 0:
                var3 = arg0;
                var0 = arg1;
                var8 = var3.freeTextElements;
                var4 = var3.dropdownElements;
                var1 = var3.multiSelectElement;
                var5 = var3.contentUrlInputElement;
                var7 = var0.textInput;
                var _closure2_slot0 = var7;
                var6 = var0.multiSelect;
                var3 = var8.some;
                var0 = function(arg0) { // Environment: var2
                    _fun53676: for (var _fun53676_ip = 0;;) switch (_fun53676_ip) {
                        case 0:
                            var4 = arg0;
                            var1 = var4.should_submit_data;
                            var0 = true;
                            var0 = var0 === var1;
                            if (!var0) {
                                _fun53676_ip = 149;
                                continue _fun53676
                            }
                        case 21:
                            var1 = _closure2_slot0;
                            var5 = null;
                            var2 = var5 == var1;
                            var1 = undefined;
                            if (var2) {
                                _fun53676_ip = 52;
                                continue _fun53676
                            }
                        case 39:
                            var7 = _closure2_slot0;
                            var2 = var4.name;
                            var1 = var7[var2];
                        case 52:
                            var1 = var5 == var1;
                            if (var1) {
                                _fun53676_ip = 98;
                                continue _fun53676
                            }
                        case 59:
                            var2 = _closure2_slot0;
                            var2 = var5 == var2;
                            var7 = undefined;
                            if (var2) {
                                _fun53676_ip = 90;
                                continue _fun53676
                            }
                        case 72:
                            var8 = _closure2_slot0;
                            var2 = var4.name;
                            var2 = var8[var2];
                            var7 = var2.value;
                        case 90:
                            var2 = '';
                            var1 = var2 === var7;
                        case 98:
                            if (var1) {
                                _fun53676_ip = 146;
                                continue _fun53676
                            }
                        case 101:
                            var2 = _closure2_slot0;
                            var2 = var5 != var2;
                            var3 = undefined;
                            if (!var2) {
                                _fun53676_ip = 134;
                                continue _fun53676
                            }
                        case 114:
                            var6 = _closure2_slot0;
                            var4 = var4.name;
                            var4 = var6[var4];
                            var2 = var5 != var4;
                            var3 = var4;
                        case 134:
                            if (!var2) {
                                _fun53676_ip = 143;
                                continue _fun53676
                            }
                        case 137:
                            var2 = var3.isValid;
                        case 143:
                            var1 = !var2;
                        case 146:
                            var0 = var1;
                        case 149:
                            return var0;
                    }
                };
                var0 = var3.bind(var8)(var0);
                if (var0) {
                    _fun53675_ip = 91;
                    continue _fun53675
                }
            case 75:
                var3 = var4.some;
                var2 = function(arg0) { // Environment: var2
                    _fun53677: for (var _fun53677_ip = 0;;) switch (_fun53677_ip) {
                        case 0:
                            var2 = arg0;
                            var1 = var2.should_submit_data;
                            var0 = true;
                            var0 = var0 === var1;
                            if (!var0) {
                                _fun53677_ip = 98;
                                continue _fun53677
                            }
                        case 18:
                            var1 = _closure2_slot0;
                            var6 = null;
                            var5 = var6 == var1;
                            var1 = undefined;
                            if (var5) {
                                _fun53677_ip = 49;
                                continue _fun53677
                            }
                        case 36:
                            var7 = _closure2_slot0;
                            var5 = var2.name;
                            var1 = var7[var5];
                        case 49:
                            var1 = var6 == var1;
                            if (var1) {
                                _fun53677_ip = 95;
                                continue _fun53677
                            }
                        case 56:
                            var5 = _closure2_slot0;
                            var5 = var6 == var5;
                            var3 = undefined;
                            if (var5) {
                                _fun53677_ip = 87;
                                continue _fun53677
                            }
                        case 69:
                            var4 = _closure2_slot0;
                            var2 = var2.name;
                            var2 = var4[var2];
                            var3 = var2.value;
                        case 87:
                            var2 = '';
                            var1 = var2 === var3;
                        case 95:
                            var0 = var1;
                        case 98:
                            return var0;
                    }
                };
                var0 = var3.bind(var4)(var2);
            case 91:
                if (var0) {
                    _fun53675_ip = 162;
                    continue _fun53675
                }
            case 94:
                var2 = null;
                var4 = var2 == var1;
                var3 = undefined;
                if (var4) {
                    _fun53675_ip = 111;
                    continue _fun53675
                }
            case 105:
                var3 = var1.should_submit_data;
            case 111:
                var1 = true;
                var1 = var1 === var3;
                if (!var1) {
                    _fun53675_ip = 159;
                    continue _fun53675
                }
            case 120:
                var2 = var2 == var6;
                if (var2) {
                    _fun53675_ip = 156;
                    continue _fun53675
                }
            case 127:
                var3 = global;
                var4 = var3.Object;
                var3 = var4.keys;
                var3 = var3.bind(var4)(var6);
                var4 = var3.length;
                var3 = 0;
                var2 = var3 === var4;
            case 156:
                var1 = var2;
            case 159:
                var0 = var1;
            case 162:
                if (var0) {
                    _fun53675_ip = 296;
                    continue _fun53675
                }
            case 168:
                var6 = null;
                var1 = var6 == var5;
                var2 = undefined;
                if (var1) {
                    _fun53675_ip = 185;
                    continue _fun53675
                }
            case 179:
                var2 = var5.should_submit_data;
            case 185:
                var1 = true;
                var1 = var1 === var2;
                if (!var1) {
                    _fun53675_ip = 293;
                    continue _fun53675
                }
            case 194:
                var3 = var6 == var7;
                var2 = undefined;
                if (var3) {
                    _fun53675_ip = 212;
                    continue _fun53675
                }
            case 203:
                var3 = var5.name;
                var2 = var7[var3];
            case 212:
                var2 = var6 == var2;
                if (var2) {
                    _fun53675_ip = 250;
                    continue _fun53675
                }
            case 219:
                var3 = var6 == var7;
                var8 = undefined;
                if (var3) {
                    _fun53675_ip = 242;
                    continue _fun53675
                }
            case 228:
                var3 = var5.name;
                var3 = var7[var3];
                var8 = var3.value;
            case 242:
                var3 = '';
                var2 = var3 === var8;
            case 250:
                if (var2) {
                    _fun53675_ip = 290;
                    continue _fun53675
                }
            case 253:
                var3 = var6 != var7;
                var4 = undefined;
                if (!var3) {
                    _fun53675_ip = 278;
                    continue _fun53675
                }
            case 262:
                var5 = var5.name;
                var5 = var7[var5];
                var3 = var6 != var5;
                var4 = var5;
            case 278:
                if (!var3) {
                    _fun53675_ip = 287;
                    continue _fun53675
                }
            case 281:
                var3 = var4.isValid;
            case 287:
                var2 = !var3;
            case 290:
                var1 = var2;
            case 293:
                var0 = var1;
            case 296:
                return var0;
        }
    };
    var2.areRequiredElementsUnfilled = var4;
    var2.TrackIarSettingsUpsellsActionType = var3;
    var1 = function arg0, arg1, arg2() {
        var5 = arg0;
        var4 = arg1;
        var6 = arg2;
        var _closure2_slot0 = var5;
        var _closure2_slot1 = var4;
        var _closure2_slot2 = var6;
        var3 = _closure1_slot4;
        var2 = var3.useCallback;
        var1 = new Array(3);
        var1[0] = var6;
        var1[1] = var5;
        var1[2] = var4;
        var0 = function(arg0) { // Environment: var0
            var1 = arg0;
            var _closure3_slot0 = var1;
            var0 = function(arg0) { // Environment: var0
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 11;
                var2 = var2[var0];
                var0 = undefined;
                var4 = var3.bind(var0)(var2);
                var3 = var4.trackWithMetadata;
                var1 = _closure1_slot6;
                var2 = var1.IAR_SETTINGS_UPSELLS_ACTION;
                var1 = {};
                var6 = _closure2_slot2;
                var1.report_id = var6;
                var6 = _closure2_slot0;
                var6 = var6.name;
                var1.report_type = var6;
                var5 = _closure2_slot1;
                var1.report_subtype = var5;
                var5 = _closure3_slot0;
                var1.settings_upsells_type = var5;
                var5 = arg0;
                var1.action = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var0;
            };
            return var0;
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.useTrackSettingsUpsellsAction = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 31, 3964, 660, 5879, 507, 6458, 5886, 806, 44, 6456, 4266, 2]);