// modules/applications/disclosures.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot2;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun47824: for (var _fun47824_ip = 0;;) switch (_fun47824_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun47824_ip = 158;
                            continue _fun47824
                        }
                    case 10:
                        var4 = _closure1_slot3;
                        var3 = var4.APPLICATION_DISCLOSURES;
                        var2 = arg0;
                        var4 = var3.bind(var4)(var2);
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var1 = 2;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        var3 = var1.HTTP;
                        var2 = var3.get;
                        var1 = {
                            'url': null,
                            'retries': 3,
                            'rejectWithError': false
                        };
                        var1.url = var4;
                        var1 = var2.bind(var3)(var1);
                        SaveGenerator(address = 92);
                    case 90:
                        return var1;
                    case 92:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun47824_ip = 155;
                            continue _fun47824
                        }
                    case 98:
                        var2 = {};
                        var3 = var1.body;
                        var3 = var3.disclosures;
                        var2.disclosures = var3;
                        var3 = var1.body;
                        var3 = var3.acked_disclosures;
                        var2.ackedDisclosures = var3;
                        var3 = var1.body;
                        var3 = var3.all_acked;
                        var2.allAcked = var3;
                        return var2;
                    case 155:
                        return var1;
                    case 158:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot4 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot4 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot2;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun47827: for (var _fun47827_ip = 0;;) switch (_fun47827_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun47827_ip = 108;
                            continue _fun47827
                        }
                    case 7:
                        var4 = _closure1_slot3;
                        var3 = var4.APPLICATION_DISCLOSURES;
                        var2 = arg0;
                        var5 = var3.bind(var4)(var2);
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var1 = 2;
                        var1 = var2[var1];
                        var2 = undefined;
                        var1 = var3.bind(var2)(var1);
                        var4 = var1.HTTP;
                        var3 = var4.post;
                        var1 = {};
                        var1.url = var5;
                        var5 = {};
                        var6 = arg1;
                        var5.disclosures = var6;
                        var1.body = var5;
                        var5 = false;
                        var1.rejectWithError = var5;
                        var1 = var3.bind(var4)(var1);
                        SaveGenerator(address = 96);
                    case 94:
                        return var1;
                    case 96:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun47827_ip = 105;
                            continue _fun47827
                        }
                    case 102:
                        return var2;
                    case 105:
                        return var1;
                    case 108:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot5 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot5 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = arg2;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Endpoints;
    var _closure1_slot3 = var3;
    var3 = 5;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.fileFinishedImporting;
    var3 = 'modules/applications/disclosures.tsx';
    var3 = var6.bind(var7)(var3);
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ApplicationDisclosureType;
    var2.ApplicationDisclosure = var3;
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.getDisclosures = var3;
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot5;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.ackDisclosures = var3;
    var1 = function arg0() {
        _fun47830: for (var _fun47830_ip = 0;;) switch (_fun47830_ip) {
            case 0:
                var2 = arg0;
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var5 = 3;
                var1 = var1[var5];
                var4 = undefined;
                var1 = var3.bind(var4)(var1);
                var1 = var1.ApplicationDisclosureType;
                var1 = var1.IP_LOCATION;
                if (!(var1 !== var2)) {
                    _fun47830_ip = 140;
                    continue _fun47830
                }
            case 44:
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var5];
                var1 = var3.bind(var4)(var1);
                var1 = var1.ApplicationDisclosureType;
                var1 = var1.DISPLAYS_ADVERTISEMENTS;
                if (!(var1 !== var2)) {
                    _fun47830_ip = 81;
                    continue _fun47830
                }
            case 77:
                var1 = null;
                return var1;
            case 81:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 4;
                var2 = var6[var1];
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1["/uOMKZ"];
                var1 = var2.bind(var3)(var1);
                return var1;
            case 140:
                var3 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 4;
                var1 = var5[var0];
                var1 = var3.bind(var4)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var5[var0];
                var0 = var3.bind(var4)(var0);
                var0 = var0.t;
                var0 = var0["6wPmjo"];
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.getTextForDisclosure = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 660, 507, 5348, 1234, 2]);