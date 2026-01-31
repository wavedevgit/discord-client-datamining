// modules/in_app_reports/showReportModal.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() { // Original name: _showReportModal, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1, arg2) { // Environment: var2
            var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                _fun53619: for (var _fun53619_ip = 0;;) switch (_fun53619_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg2;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun53619_ip = 299;
                            continue _fun53619
                        }
                    case 13:
                        var11 = arg0;
                        var3 = arg1;
                        var10 = var1.onSubmit;
                        var1 = var1.isEligibleForFeedback;
                        var2 = undefined;
                        if (!(var1 === var2)) {
                            _fun53619_ip = 39;
                            continue _fun53619
                        }
                    case 37:
                        var1 = true;
                    case 39:
                        var9 = var1;
                        SaveGenerator(address = 46);
                    case 44:
                        return var2;
                    case 46:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun53619_ip = 296;
                            continue _fun53619
                        }
                    case 55: // try_start_0
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var5 = 1;
                        var5 = var7[var5];
                        var5 = var6.bind(var2)(var5);
                        var5 = var5.ReportMenuTypeSets;
                        var7 = var5.REPORT_TO_MOD;
                        var6 = var7.has;
                        var5 = var11;
                        var5 = var5.name;
                        var5 = var6.bind(var7)(var5);
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var6 = 2;
                        var6 = var8[var6];
                        var7 = var7.bind(var2)(var6);
                        if (var5) {
                            _fun53619_ip = 165;
                            continue _fun53619
                        }
                    case 131:
                        var8 = var7.getReportMenu;
                        var6 = var11;
                        var5 = var3;
                        var5 = var8.bind(var7)(var6, var5);
                        SaveGenerator(address = 153);
                    case 151:
                        return var5;
                    case 153:
                        ResumeGenerator(result_out_reg = 5, return_bool_out_reg = 6);
                        var12 = var5;
                        if (!var6) {
                            _fun53619_ip = 193;
                            continue _fun53619
                        }
                    case 162: // try_end0
                        return var5;
                    case 165: // try_start_1
                        var6 = var7.getReportMenuForModeratorReport;
                        var5 = var11;
                        var3 = var6.bind(var7)(var5, var3);
                        SaveGenerator(address = 184);
                    case 182:
                        return var3;
                    case 184:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 5);
                        var12 = var3;
                        if (var5) {
                            _fun53619_ip = 288;
                            continue _fun53619
                        }
                    case 193:
                        var7 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var6 = 3;
                        var6 = var5[var6];
                        var8 = var7.bind(var2)(var6);
                        var7 = var8.pushLazy;
                        var13 = _closure1_slot0;
                        var6 = 5;
                        var6 = var5[var6];
                        var13 = var13.bind(var2)(var6);
                        var6 = 4;
                        var6 = var5[var6];
                        var5 = var5.paths;
                        var6 = var13.bind(var2)(var6, var5);
                        var5 = {};
                        var5.menu = var12;
                        var5.reportType = var11;
                        var5.afterSubmit = var10;
                        var5.isEligibleForFeedback = var9;
                        var4 = _closure1_slot4;
                        var4 = var7.bind(var8)(var6, var5, var4);
                    case 286: // try_end1
                        _fun53619_ip = 293;
                        continue _fun53619;
                    case 288:
                        return var3;
                    case 291: // catch_target0 // catch_target1
                        CatchBlockStart(arg_register = 3);
                    case 293:
                        return var2;
                    case 296:
                        return var1;
                    case 299:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
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
    var _closure1_slot3 = var3;
    var3 = 'IN_APP_REPORT_MODAL_KEY';
    var _closure1_slot4 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/in_app_reports/showReportModal.native.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function() { // Original name: showReportModal, environment: var1
        var0 = undefined;
        var3 = _closure1_slot5;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.showReportModal = var3;
    var1 = function() { // Original name: hideReportModal, environment: var1
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 3;
        var2 = var2[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.popWithKey;
        var1 = _closure1_slot4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.hideReportModal = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 6458, 6459, 4525, 6460, 1307, 2]);