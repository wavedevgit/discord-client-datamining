// modules/bug_reporter/BugReportUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() { // Original name: _fetchBugReportConfig, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun70124: for (var _fun70124_ip = 0;;) switch (_fun70124_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun70124_ip = 90;
                            continue _fun70124
                        }
                    case 7:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 3;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        var3 = var1.HTTP;
                        var2 = var3.get;
                        var1 = {};
                        var4 = _closure1_slot6;
                        var4 = var4.BUG_REPORTS;
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
                            _fun70124_ip = 87;
                            continue _fun70124
                        }
                    case 79:
                        var2 = var1.body;
                        return var2;
                    case 87:
                        return var1;
                    case 90:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot7 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot7 = var0;
    var0 = function() { // Original name: _submitReport, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1, arg2) { // Environment: var2
            var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                _fun70127: for (var _fun70127_ip = 0;;) switch (_fun70127_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        var10 = arg1;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun70127_ip = 1025;
                            continue _fun70127
                        }
                    case 16:
                        var7 = var1;
                        var8 = arg2;
                        var9 = undefined;
                        var4 = undefined;
                        var6 = undefined;
                        var2 = {};
                        var3 = 'name';
                        var2.name = var3;
                        var3 = var1.name;
                        var2.value = var3;
                        var3 = new Array(4);
                        var3[0] = var2;
                        var5 = {};
                        var2 = 'priority';
                        var5.name = var2;
                        var13 = var1.priority;
                        var11 = global;
                        var2 = var11.HermesInternal;
                        var12 = var2.concat;
                        var2 = '';
                        var12 = var12.bind(var2)(var13);
                        var5.value = var12;
                        var3[1] = var5;
                        var5 = {};
                        var12 = 'override_platform_information';
                        var5.name = var12;
                        var13 = var10.overridePlatformInformation;
                        var12 = var11.HermesInternal;
                        var12 = var12.concat;
                        var12 = var12.bind(var2)(var13);
                        var5.value = var12;
                        var3[2] = var5;
                        var12 = {};
                        var5 = 'theme';
                        var12.name = var5;
                        var13 = _closure1_slot4;
                        var13 = var13.theme;
                        var12.value = var13;
                        var3[3] = var12;
                        var4 = var3;
                        var1 = var1.description;
                        if (!(var2 !== var1)) {
                            _fun70127_ip = 221;
                            continue _fun70127
                        }
                    case 186:
                        var12 = var4;
                        var3 = var12.push;
                        var1 = {};
                        var13 = 'description';
                        var1.name = var13;
                        var13 = var7;
                        var13 = var13.description;
                        var1.value = var13;
                        var1 = var3.bind(var12)(var1);
                    case 221:
                        var1 = var7;
                        var1 = var1.url;
                        if (!(var2 !== var1)) {
                            _fun70127_ip = 270;
                            continue _fun70127
                        }
                    case 233:
                        var12 = var4;
                        var3 = var12.push;
                        var1 = {};
                        var13 = 'external_url';
                        var1.name = var13;
                        var13 = var7;
                        var13 = var13.url;
                        var1.value = var13;
                        var1 = var3.bind(var12)(var1);
                    case 270:
                        var1 = var7;
                        var3 = var1.buildOverride;
                        var1 = null;
                        if (!(var1 != var3)) {
                            _fun70127_ip = 323;
                            continue _fun70127
                        }
                    case 285:
                        var13 = var4;
                        var12 = var13.push;
                        var3 = {};
                        var14 = 'build_override';
                        var3.name = var14;
                        var14 = var7;
                        var14 = var14.buildOverride;
                        var3.value = var14;
                        var3 = var12.bind(var13)(var3);
                    case 323:
                        var3 = var7;
                        var3 = var3.experimentOverrides;
                        if (!(var1 != var3)) {
                            _fun70127_ip = 407;
                            continue _fun70127
                        }
                    case 336:
                        var13 = var4;
                        var12 = var13.push;
                        var3 = {};
                        var14 = 'experiment_overrides';
                        var3.name = var14;
                        var14 = var7;
                        var16 = var14.experimentOverrides;
                        var15 = var16.map;
                        var14 = function(arg0) { // Environment: var14
                            var0 = arg0;
                            var4 = var0.experimentId;
                            var3 = var0.variantId;
                            var0 = global;
                            var0 = var0.HermesInternal;
                            var2 = var0.concat;
                            var1 = '';
                            var0 = ':';
                            var0 = var2.bind(var1)(var4, var0, var3);
                            return var0;
                        };
                        var16 = var15.bind(var16)(var14);
                        var15 = var16.join;
                        var14 = ',';
                        var14 = var15.bind(var16)(var14);
                        var3.value = var14;
                        var3 = var12.bind(var13)(var3);
                    case 407:
                        var3 = var7;
                        var12 = var3.feature;
                        var13 = var1 == var12;
                        var3 = undefined;
                        if (var13) {
                            _fun70127_ip = 431;
                            continue _fun70127
                        }
                    case 425:
                        var3 = var12.asana_inbox_id;
                    case 431:
                        var6 = var3;
                        var3 = var1 != var3;
                        if (!var3) {
                            _fun70127_ip = 448;
                            continue _fun70127
                        }
                    case 441:
                        var12 = var6;
                        var3 = var2 !== var12;
                    case 448:
                        if (!var3) {
                            _fun70127_ip = 497;
                            continue _fun70127
                        }
                    case 451:
                        var13 = var4;
                        var12 = var13.push;
                        var3 = {};
                        var14 = 'asana_inbox_id';
                        var3.name = var14;
                        var15 = var6;
                        var14 = var11.HermesInternal;
                        var14 = var14.concat;
                        var14 = var14.bind(var2)(var15);
                        var3.value = var14;
                        var3 = var12.bind(var13)(var3);
                    case 497:
                        var3 = var7;
                        var3 = var3.feature;
                        var13 = var1 == var3;
                        var12 = undefined;
                        if (var13) {
                            _fun70127_ip = 520;
                            continue _fun70127
                        }
                    case 515:
                        var12 = var3.name;
                    case 520:
                        var1 = var1 != var12;
                        if (!var1) {
                            _fun70127_ip = 531;
                            continue _fun70127
                        }
                    case 527:
                        var1 = var2 !== var12;
                    case 531:
                        if (!var1) {
                            _fun70127_ip = 561;
                            continue _fun70127
                        }
                    case 534:
                        var3 = var4;
                        var2 = var3.push;
                        var1 = {};
                        var13 = 'feature_name';
                        var1.name = var13;
                        var1.value = var12;
                        var1 = var2.bind(var3)(var1);
                    case 561:
                        var1 = var10.overridePlatformInformation;
                        if (!var1) {
                            _fun70127_ip = 804;
                            continue _fun70127
                        }
                    case 573:
                        var3 = var4;
                        var2 = var3.push;
                        var1 = {};
                        var12 = 'device';
                        var1.name = var12;
                        var12 = var10.device;
                        var1.value = var12;
                        var1 = var2.bind(var3)(var1);
                        var2 = var3.push;
                        var1 = {};
                        var12 = 'os';
                        var1.name = var12;
                        var12 = var10.operatingSystem;
                        var1.value = var12;
                        var1 = var2.bind(var3)(var1);
                        var2 = var3.push;
                        var1 = {};
                        var12 = 'os_version';
                        var1.name = var12;
                        var12 = var10.operatingSystemVersion;
                        var1.value = var12;
                        var1 = var2.bind(var3)(var1);
                        var2 = var3.push;
                        var1 = {};
                        var12 = 'client_version';
                        var1.name = var12;
                        var12 = var10.clientVersion;
                        var1.value = var12;
                        var1 = var2.bind(var3)(var1);
                        var2 = var3.push;
                        var1 = {};
                        var12 = 'client_build_number';
                        var1.name = var12;
                        var12 = var10.clientBuildNumber;
                        var1.value = var12;
                        var1 = var2.bind(var3)(var1);
                        var2 = var3.push;
                        var1 = {};
                        var12 = 'release_channel';
                        var1.name = var12;
                        var11 = var11.window;
                        var11 = var11.GLOBAL_ENV;
                        var11 = var11.RELEASE_CHANNEL;
                        var1.value = var11;
                        var1 = var2.bind(var3)(var1);
                        var2 = var3.push;
                        var1 = {};
                        var11 = 'locale';
                        var1.name = var11;
                        var10 = var10.locale;
                        var1.value = var10;
                        var1 = var2.bind(var3)(var1);
                    case 804:
                        var10 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var1 = 5;
                        var1 = var11[var1];
                        var3 = var10.bind(var9)(var1);
                        var2 = var3.uploadDebugLogFiles;
                        var1 = 6;
                        var1 = var11[var1];
                        var10 = var10.bind(var9)(var1);
                        var1 = var10.isIOS;
                        var1 = var1.bind(var10)();
                        var10 = _closure1_slot5;
                        if (var1) {
                            _fun70127_ip = 867;
                            continue _fun70127
                        }
                    case 859:
                        var1 = var10.ANDROID_APP;
                        _fun70127_ip = 873;
                        continue _fun70127;
                    case 867:
                        var1 = var10.IOS_APP;
                    case 873:
                        var1 = var2.bind(var3)(var1);
                    case 878: // try_start_0
                        var2 = _closure1_slot1;
                        var10 = _closure1_slot2;
                        var1 = 7;
                        var1 = var10[var1];
                        var3 = var2.bind(var9)(var1);
                        var2 = var3.post;
                        var1 = {};
                        var11 = _closure1_slot6;
                        var11 = var11.BUG_REPORTS;
                        var1.url = var11;
                        var1.attachments = var8;
                        var1.fields = var4;
                        var4 = {};
                        var8 = _closure1_slot0;
                        var5 = 8;
                        var5 = var10[var5];
                        var5 = var8.bind(var9)(var5);
                        var5 = var5.NetworkActionNames;
                        var5 = var5.BUG_REPORT_SUBMIT;
                        var4.event = var5;
                        var5 = {};
                        var7 = var7.priority;
                        var5.priority = var7;
                        var5.asana_inbox_id = var6;
                        var4.properties = var5;
                        var1.trackedActionData = var4;
                        var4 = false;
                        var1.rejectWithError = var4;
                        var1 = var2.bind(var3)(var1);
                        SaveGenerator(address = 1008);
                    case 1006:
                        return var1;
                    case 1008:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun70127_ip = 1017;
                            continue _fun70127
                        }
                    case 1014: // try_end0
                        return var1;
                    case 1017:
                        return var1;
                    case 1020: // catch_target0
                        CatchBlockStart(arg_register = 1);
                        return var1;
                    case 1025:
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
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.DebugLogCategory;
    var _closure1_slot5 = var6;
    var3 = var3.Endpoints;
    var _closure1_slot6 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/bug_reporter/BugReportUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function() { // Original name: fetchBugReportConfig, environment: var1
        var0 = undefined;
        var3 = _closure1_slot7;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.fetchBugReportConfig = var3;
    var3 = function(arg0) { // Original name: getFeatureId, environment: var1
        _fun70130: for (var _fun70130_ip = 0;;) switch (_fun70130_ip) {
            case 0:
                var2 = arg0;
                var3 = null;
                var4 = var3 == var2;
                var0 = undefined;
                if (var4) {
                    _fun70130_ip = 19;
                    continue _fun70130
                }
            case 14:
                var0 = var2.name;
            case 19:
                if (!(var3 == var0)) {
                    _fun70130_ip = 41;
                    continue _fun70130
                }
            case 23:
                var3 = var3 == var2;
                var1 = undefined;
                if (var3) {
                    _fun70130_ip = 38;
                    continue _fun70130
                }
            case 32:
                var1 = var2.squad;
            case 38:
                var0 = '' + var1;
            case 41:
                return var0;
        }
    };
    var2.getFeatureId = var3;
    var3 = function() { // Original name: getPriorities, environment: var1
        var1 = {};
        var6 = _closure1_slot0;
        var7 = _closure1_slot2;
        var2 = 4;
        var0 = var7[var2];
        var3 = undefined;
        var0 = var6.bind(var3)(var0);
        var5 = var0.intl;
        var4 = var5.string;
        var0 = var7[var2];
        var0 = var6.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0.VwIij9;
        var0 = var4.bind(var5)(var0);
        var1.title = var0;
        var0 = var7[var2];
        var0 = var6.bind(var3)(var0);
        var8 = var0.intl;
        var5 = var8.format;
        var0 = var7[var2];
        var0 = var6.bind(var3)(var0);
        var0 = var0.t;
        var4 = var0.DOP8yY;
        var0 = {};
        var0 = var5.bind(var8)(var4, var0);
        var1.description = var0;
        var0 = '801497159479722084';
        var1.emoji = var0;
        var0 = 0;
        var1.value = var0;
        var0 = new Array(4);
        var0[0] = var1;
        var1 = {};
        var4 = var7[var2];
        var4 = var6.bind(var3)(var4);
        var8 = var4.intl;
        var5 = var8.string;
        var4 = var7[var2];
        var4 = var6.bind(var3)(var4);
        var4 = var4.t;
        var4 = var4.rYfJop;
        var4 = var5.bind(var8)(var4);
        var1.title = var4;
        var4 = var7[var2];
        var4 = var6.bind(var3)(var4);
        var9 = var4.intl;
        var8 = var9.format;
        var4 = var7[var2];
        var4 = var6.bind(var3)(var4);
        var4 = var4.t;
        var5 = var4["+LEfDL"];
        var4 = {};
        var4 = var8.bind(var9)(var5, var4);
        var1.description = var4;
        var4 = '410336837563973632';
        var1.emoji = var4;
        var4 = 1;
        var1.value = var4;
        var0[1] = var1;
        var1 = {};
        var4 = var7[var2];
        var4 = var6.bind(var3)(var4);
        var8 = var4.intl;
        var5 = var8.string;
        var4 = var7[var2];
        var4 = var6.bind(var3)(var4);
        var4 = var4.t;
        var4 = var4["9LSuy3"];
        var4 = var5.bind(var8)(var4);
        var1.title = var4;
        var4 = var7[var2];
        var4 = var6.bind(var3)(var4);
        var9 = var4.intl;
        var8 = var9.format;
        var4 = var7[var2];
        var4 = var6.bind(var3)(var4);
        var4 = var4.t;
        var5 = var4.nC7pvx;
        var4 = {};
        var4 = var8.bind(var9)(var5, var4);
        var1.description = var4;
        var4 = '841420679643529296';
        var1.emoji = var4;
        var4 = 2;
        var1.value = var4;
        var0[2] = var1;
        var1 = {};
        var4 = var7[var2];
        var4 = var6.bind(var3)(var4);
        var8 = var4.intl;
        var5 = var8.string;
        var4 = var7[var2];
        var4 = var6.bind(var3)(var4);
        var4 = var4.t;
        var4 = var4.Ia0ska;
        var4 = var5.bind(var8)(var4);
        var1.title = var4;
        var4 = var7[var2];
        var4 = var6.bind(var3)(var4);
        var5 = var4.intl;
        var4 = var5.format;
        var2 = var7[var2];
        var2 = var6.bind(var3)(var2);
        var2 = var2.t;
        var3 = var2.D4rbgX;
        var2 = {};
        var2 = var4.bind(var5)(var3, var2);
        var1.description = var2;
        var2 = '827645852352512021';
        var1.emoji = var2;
        var2 = 3;
        var1.value = var2;
        var0[3] = var1;
        return var0;
    };
    var2.getPriorities = var3;
    var1 = function() { // Original name: submitReport, environment: var1
        var0 = undefined;
        var3 = _closure1_slot8;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.submitReport = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 3155, 660, 507, 1234, 8773, 478, 4489, 481, 2]);