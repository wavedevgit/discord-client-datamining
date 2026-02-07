// modules/in_app_reports/ReportModals.tsx
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
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun54256: for (var _fun54256_ip = 0;;) switch (_fun54256_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 3);
                        if (var3) {
                            _fun54256_ip = 135;
                            continue _fun54256
                        }
                    case 10:
                        var1 = arg0;
                        var2 = arg1;
                    case 16: // try_start_0
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var3 = 7;
                        var4 = var9[var3];
                        var3 = undefined;
                        var6 = var8.bind(var3)(var4);
                        var5 = var6.submitHeadlessReport;
                        var4 = {};
                        var7 = 5;
                        var7 = var9[var7];
                        var7 = var8.bind(var3)(var7);
                        var7 = var7.ReportNames;
                        var7 = var7.FIRST_DM;
                        var4.name = var7;
                        var4.record = var1;
                        var1 = {};
                        var7 = '_first_dm_ham_v1';
                        var1.variant = var7;
                        var1 = var5.bind(var6)(var4, var1);
                        SaveGenerator(address = 104);
                    case 102:
                        return var1;
                    case 104:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun54256_ip = 125;
                            continue _fun54256
                        }
                    case 110:
                        var5 = var2;
                        var4 = null;
                        if (!(var4 != var5)) {
                            _fun54256_ip = 123;
                            continue _fun54256
                        }
                    case 119:
                        var2 = var2.bind(var3)();
                    case 123: // try_end0
                        _fun54256_ip = 130;
                        continue _fun54256;
                    case 125:
                        return var1;
                    case 128: // catch_target0
                        CatchBlockStart(arg_register = 1);
                    case 130:
                        var1 = undefined;
                        return var1;
                    case 135:
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
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1, arg2) { // Environment: var2
            var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                _fun54259: for (var _fun54259_ip = 0;;) switch (_fun54259_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 4);
                        if (var4) {
                            _fun54259_ip = 156;
                            continue _fun54259
                        }
                    case 10:
                        var2 = arg0;
                        var3 = arg1;
                        var1 = arg2;
                    case 19: // try_start_0
                        var9 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var4 = 7;
                        var5 = var10[var4];
                        var4 = undefined;
                        var7 = var9.bind(var4)(var5);
                        var6 = var7.submitHeadlessReport;
                        var5 = {};
                        var8 = 5;
                        var8 = var10[var8];
                        var8 = var9.bind(var4)(var8);
                        var8 = var8.ReportNames;
                        var8 = var8.MESSAGE;
                        var5.name = var8;
                        var5.record = var2;
                        var2 = {};
                        var8 = 'safety_alerts_headless_v1';
                        var2.variant = var8;
                        var2 = var6.bind(var7)(var5, var2);
                        SaveGenerator(address = 107);
                    case 105:
                        return var2;
                    case 107:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 5);
                        if (var5) {
                            _fun54259_ip = 128;
                            continue _fun54259
                        }
                    case 113:
                        var6 = var3;
                        var5 = null;
                        if (!(var5 != var6)) {
                            _fun54259_ip = 126;
                            continue _fun54259
                        }
                    case 122:
                        var3 = var3.bind(var4)();
                    case 126: // try_end0
                        _fun54259_ip = 151;
                        continue _fun54259;
                    case 128:
                        return var2;
                    case 131: // catch_target0
                        CatchBlockStart(arg_register = 2);
                        var3 = var1;
                        var2 = null;
                        if (!(var2 != var3)) {
                            _fun54259_ip = 151;
                            continue _fun54259
                        }
                    case 142:
                        var2 = var1;
                        var1 = undefined;
                        var1 = var2.bind(var1)();
                    case 151:
                        var1 = undefined;
                        return var1;
                    case 156:
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
    var0 = function arg0, arg1() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 9;
        var2 = var2[var0];
        var0 = undefined;
        var4 = var3.bind(var0)(var2);
        var3 = var4.trackWithMetadata;
        var1 = _closure1_slot7;
        var2 = var1.IAR_MODAL_OPEN;
        var1 = {};
        var5 = arg0;
        var1.report_type = var5;
        var6 = arg1;
        var7 = var1;
        var5 = copyDataProperties(var7, var6);
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var _closure1_slot10 = var0;
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot7 = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/in_app_reports/ReportModals.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0, arg1() {
        var1 = arg0;
        var5 = _closure1_slot10;
        var6 = _closure1_slot0;
        var7 = _closure1_slot2;
        var2 = 5;
        var3 = var7[var2];
        var0 = undefined;
        var3 = var6.bind(var0)(var3);
        var3 = var3.ReportNames;
        var4 = var3.GUILD;
        var3 = {};
        var8 = var1.id;
        var3.guild_id = var8;
        var3 = var5.bind(var0)(var4, var3);
        var3 = 6;
        var3 = var7[var3];
        var5 = var6.bind(var0)(var3);
        var4 = var5.showReportModal;
        var3 = {};
        var2 = var7[var2];
        var2 = var6.bind(var0)(var2);
        var2 = var2.ReportNames;
        var2 = var2.GUILD;
        var3.name = var2;
        var3.record = var1;
        var2 = {};
        var1 = arg1;
        var2.onSubmit = var1;
        var1 = {};
        var1 = var4.bind(var5)(var3, var1, var2);
        return var0;
    };
    var2.showReportModalForGuild = var3;
    var3 = function arg0, arg1() {
        var1 = arg0;
        var5 = _closure1_slot10;
        var6 = _closure1_slot0;
        var7 = _closure1_slot2;
        var2 = 5;
        var3 = var7[var2];
        var0 = undefined;
        var3 = var6.bind(var0)(var3);
        var3 = var3.ReportNames;
        var4 = var3.GUILD_DIRECTORY_ENTRY;
        var3 = {};
        var8 = var1.channelId;
        var3.channel_id = var8;
        var8 = var1.guildId;
        var3.guild_id = var8;
        var3 = var5.bind(var0)(var4, var3);
        var3 = 6;
        var3 = var7[var3];
        var5 = var6.bind(var0)(var3);
        var4 = var5.showReportModal;
        var3 = {};
        var2 = var7[var2];
        var2 = var6.bind(var0)(var2);
        var2 = var2.ReportNames;
        var2 = var2.GUILD_DIRECTORY_ENTRY;
        var3.name = var2;
        var3.record = var1;
        var2 = {};
        var1 = arg1;
        var2.onSubmit = var1;
        var1 = {};
        var1 = var4.bind(var5)(var3, var1, var2);
        return var0;
    };
    var2.showReportModalForGuildDirectoryEntry = var3;
    var3 = function arg0, arg1, arg2() {
        var1 = arg0;
        var5 = _closure1_slot10;
        var6 = _closure1_slot0;
        var7 = _closure1_slot2;
        var2 = 5;
        var3 = var7[var2];
        var0 = undefined;
        var3 = var6.bind(var0)(var3);
        var3 = var3.ReportNames;
        var4 = var3.MESSAGE;
        var3 = {};
        var8 = var1.id;
        var3.message_id = var8;
        var8 = var1.channel_id;
        var3.channel_id = var8;
        var3 = var5.bind(var0)(var4, var3);
        var3 = 6;
        var3 = var7[var3];
        var5 = var6.bind(var0)(var3);
        var4 = var5.showReportModal;
        var3 = {};
        var2 = var7[var2];
        var2 = var6.bind(var0)(var2);
        var2 = var2.ReportNames;
        var2 = var2.MESSAGE;
        var3.name = var2;
        var3.record = var1;
        var2 = {};
        var1 = arg2;
        var2.onSubmit = var1;
        var1 = {};
        var1 = var4.bind(var5)(var3, var1, var2);
        return var0;
    };
    var2.showReportModalForMessage = var3;
    var3 = function arg0, arg1, arg2() {
        var1 = arg0;
        var5 = _closure1_slot10;
        var6 = _closure1_slot0;
        var7 = _closure1_slot2;
        var2 = 5;
        var3 = var7[var2];
        var0 = undefined;
        var3 = var6.bind(var0)(var3);
        var3 = var3.ReportNames;
        var4 = var3.MESSAGE;
        var3 = {};
        var8 = var1.id;
        var3.message_id = var8;
        var8 = var1.channel_id;
        var3.channel_id = var8;
        var3 = var5.bind(var0)(var4, var3);
        var3 = 6;
        var3 = var7[var3];
        var5 = var6.bind(var0)(var3);
        var4 = var5.showReportModal;
        var3 = {};
        var2 = var7[var2];
        var2 = var6.bind(var0)(var2);
        var2 = var2.ReportNames;
        var2 = var2.MESSAGE;
        var3.name = var2;
        var3.record = var1;
        var2 = {};
        var1 = 'staff';
        var2.variant = var1;
        var1 = {};
        var6 = arg2;
        var1.onSubmit = var6;
        var1 = var4.bind(var5)(var3, var2, var1);
        return var0;
    };
    var2.showStaffTestReportModalForMessage = var3;
    var3 = function arg0, arg1, arg2() {
        var1 = arg0;
        var5 = _closure1_slot10;
        var6 = _closure1_slot0;
        var7 = _closure1_slot2;
        var2 = 5;
        var3 = var7[var2];
        var0 = undefined;
        var3 = var6.bind(var0)(var3);
        var3 = var3.ReportNames;
        var4 = var3.GUILD;
        var3 = {};
        var8 = var1.id;
        var3.guild_id = var8;
        var3 = var5.bind(var0)(var4, var3);
        var3 = 6;
        var3 = var7[var3];
        var5 = var6.bind(var0)(var3);
        var4 = var5.showReportModal;
        var3 = {};
        var2 = var7[var2];
        var2 = var6.bind(var0)(var2);
        var2 = var2.ReportNames;
        var2 = var2.GUILD;
        var3.name = var2;
        var3.record = var1;
        var2 = {};
        var1 = 'staff';
        var2.variant = var1;
        var1 = {};
        var6 = arg2;
        var1.onSubmit = var6;
        var1 = var4.bind(var5)(var3, var2, var1);
        return var0;
    };
    var2.showStaffTestReportModalForGuild = var3;
    var3 = function arg0, arg1() {
        _fun54266: for (var _fun54266_ip = 0;;) switch (_fun54266_ip) {
            case 0:
                var3 = _closure1_slot4;
                var2 = var3.getStageInstanceByChannel;
                var0 = arg0;
                var0 = var0.id;
                var0 = var2.bind(var3)(var0);
                var2 = null;
                if (!(var2 != var0)) {
                    _fun54266_ip = 178;
                    continue _fun54266
                }
            case 35:
                var4 = _closure1_slot10;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 5;
                var2 = var7[var1];
                var5 = undefined;
                var2 = var6.bind(var5)(var2);
                var2 = var2.ReportNames;
                var3 = var2.STAGE_CHANNEL;
                var2 = {};
                var8 = var0.id;
                var2.stage_instance_id = var8;
                var8 = var0.channel_id;
                var2.channel_id = var8;
                var8 = var0.guild_id;
                var2.guild_id = var8;
                var2 = var4.bind(var5)(var3, var2);
                var2 = 6;
                var2 = var7[var2];
                var4 = var6.bind(var5)(var2);
                var3 = var4.showReportModal;
                var2 = {};
                var1 = var7[var1];
                var1 = var6.bind(var5)(var1);
                var1 = var1.ReportNames;
                var1 = var1.STAGE_CHANNEL;
                var2.name = var1;
                var2.record = var0;
                var1 = {};
                var0 = arg1;
                var1.onSubmit = var0;
                var0 = {};
                var0 = var3.bind(var4)(var2, var0, var1);
            case 178:
                var0 = undefined;
                return var0;
        }
    };
    var2.showReportModalForStageChannel = var3;
    var3 = function arg0, arg1() {
        _fun54267: for (var _fun54267_ip = 0;;) switch (_fun54267_ip) {
            case 0:
                var1 = arg0;
                var5 = _closure1_slot10;
                var4 = _closure1_slot0;
                var0 = _closure1_slot2;
                var7 = 5;
                var3 = var0[var7];
                var0 = undefined;
                var3 = var4.bind(var0)(var3);
                var3 = var3.ReportNames;
                var4 = var3.GUILD_SCHEDULED_EVENT;
                var3 = {};
                var6 = var1.id;
                var3.guild_scheduled_event_id = var6;
                var6 = var1.guild_id;
                var3.guild_id = var6;
                var8 = var1.channel_id;
                var6 = null;
                var9 = var6 != var8;
                var6 = undefined;
                if (!var9) {
                    _fun54267_ip = 84;
                    continue _fun54267
                }
            case 81:
                var6 = var8;
            case 84:
                var3.channel_id = var6;
                var3 = var5.bind(var0)(var4, var3);
                var6 = _closure1_slot0;
                var2 = _closure1_slot2;
                var3 = 6;
                var3 = var2[var3];
                var5 = var6.bind(var0)(var3);
                var4 = var5.showReportModal;
                var3 = {};
                var2 = var2[var7];
                var2 = var6.bind(var0)(var2);
                var2 = var2.ReportNames;
                var2 = var2.GUILD_SCHEDULED_EVENT;
                var3.name = var2;
                var3.record = var1;
                var2 = {};
                var1 = arg1;
                var2.onSubmit = var1;
                var1 = {};
                var1 = var4.bind(var5)(var3, var1, var2);
                return var0;
        }
    };
    var2.showReportModalForGuildScheduledEvent = var3;
    var3 = function arg0, arg1() {
        var1 = arg0;
        var5 = _closure1_slot10;
        var6 = _closure1_slot0;
        var7 = _closure1_slot2;
        var2 = 5;
        var3 = var7[var2];
        var0 = undefined;
        var3 = var6.bind(var0)(var3);
        var3 = var3.ReportNames;
        var4 = var3.FIRST_DM;
        var3 = {};
        var8 = var1.id;
        var3.message_id = var8;
        var8 = var1.channel_id;
        var3.channel_id = var8;
        var3 = var5.bind(var0)(var4, var3);
        var3 = 6;
        var3 = var7[var3];
        var5 = var6.bind(var0)(var3);
        var4 = var5.showReportModal;
        var3 = {};
        var2 = var7[var2];
        var2 = var6.bind(var0)(var2);
        var2 = var2.ReportNames;
        var2 = var2.FIRST_DM;
        var3.name = var2;
        var3.record = var1;
        var2 = {};
        var1 = arg1;
        var2.onSubmit = var1;
        var1 = false;
        var2.isEligibleForFeedback = var1;
        var1 = {};
        var1 = var4.bind(var5)(var3, var1, var2);
        return var0;
    };
    var2.showReportModalForFirstDM = var3;
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
    var2.submitHamReportForFirstDM = var3;
    var3 = function arg0, arg1, arg2, arg3() {
        var1 = arg0;
        var5 = _closure1_slot10;
        var6 = _closure1_slot0;
        var7 = _closure1_slot2;
        var2 = 5;
        var3 = var7[var2];
        var0 = undefined;
        var3 = var6.bind(var0)(var3);
        var3 = var3.ReportNames;
        var4 = var3.USER;
        var3 = {};
        var8 = var1.id;
        var3.reported_user_id = var8;
        var3 = var5.bind(var0)(var4, var3);
        var3 = 6;
        var3 = var7[var3];
        var5 = var6.bind(var0)(var3);
        var4 = var5.showReportModal;
        var3 = {};
        var2 = var7[var2];
        var2 = var6.bind(var0)(var2);
        var2 = var2.ReportNames;
        var2 = var2.USER;
        var3.name = var2;
        var3.record = var1;
        var1 = arg1;
        var3.contextualGuildId = var1;
        var2 = {};
        var1 = arg2;
        var2.onSubmit = var1;
        var1 = arg3;
        var2.appContext = var1;
        var1 = {};
        var1 = var4.bind(var5)(var3, var1, var2);
        return var0;
    };
    var2.showReportModalForUser = var3;
    var3 = function arg0, arg1, arg2, arg3() {
        var1 = arg0;
        var5 = _closure1_slot10;
        var6 = _closure1_slot0;
        var7 = _closure1_slot2;
        var2 = 5;
        var3 = var7[var2];
        var0 = undefined;
        var3 = var6.bind(var0)(var3);
        var3 = var3.ReportNames;
        var4 = var3.USER;
        var3 = {};
        var8 = var1.id;
        var3.reported_user_id = var8;
        var3 = var5.bind(var0)(var4, var3);
        var3 = 6;
        var3 = var7[var3];
        var5 = var6.bind(var0)(var3);
        var4 = var5.showReportModal;
        var3 = {};
        var2 = var7[var2];
        var2 = var6.bind(var0)(var2);
        var2 = var2.ReportNames;
        var2 = var2.USER;
        var3.name = var2;
        var3.record = var1;
        var1 = arg1;
        var3.contextualGuildId = var1;
        var2 = {};
        var1 = 'staff';
        var2.variant = var1;
        var1 = {};
        var6 = arg2;
        var1.onSubmit = var6;
        var6 = false;
        var1.isEligibleForFeedback = var6;
        var6 = arg3;
        var1.appContext = var6;
        var1 = var4.bind(var5)(var3, var2, var1);
        return var0;
    };
    var2.showStaffTestReportModalForUser = var3;
    var3 = function arg0, arg1() {
        var3 = _closure1_slot6;
        var1 = var3.prototype;
        var2 = Object.create(var1, {
            constructor: {
                value: var3
            }
        });
        var11 = {};
        var12 = var2;
        var1 = new var12[var3](var11, var10);
        var1 = var1 instanceof Object ? var1 : var2;
        var5 = _closure1_slot10;
        var6 = _closure1_slot0;
        var7 = _closure1_slot2;
        var2 = 5;
        var3 = var7[var2];
        var0 = undefined;
        var3 = var6.bind(var0)(var3);
        var3 = var3.UnauthenticatedReportNames;
        var4 = var3.USER;
        var3 = {};
        var8 = var1.id;
        var3.reported_user_id = var8;
        var3 = var5.bind(var0)(var4, var3);
        var3 = 6;
        var3 = var7[var3];
        var5 = var6.bind(var0)(var3);
        var4 = var5.showReportModal;
        var3 = {};
        var2 = var7[var2];
        var2 = var6.bind(var0)(var2);
        var2 = var2.UnauthenticatedReportNames;
        var2 = var2.USER;
        var3.name = var2;
        var3.record = var1;
        var2 = {
            'onClose': null,
            'isEligibleForFeedback': false,
            'isAuthenticated': false
        };
        var1 = arg1;
        var2.onClose = var1;
        var1 = arg0;
        var2.emailToken = var1;
        var1 = {};
        var1 = var4.bind(var5)(var3, var1, var2);
        return var0;
    };
    var2.showUnauthenticatedReportModalForUser = var3;
    var3 = function arg0, arg1() {
        var6 = _closure1_slot0;
        var7 = _closure1_slot2;
        var0 = 8;
        var1 = var7[var0];
        var0 = undefined;
        var4 = var6.bind(var0)(var1);
        var3 = var4.dangerouslyConstructGuildRecordFromUntypedObject;
        var1 = {};
        var1 = var3.bind(var4)(var1);
        var5 = _closure1_slot10;
        var2 = 5;
        var3 = var7[var2];
        var3 = var6.bind(var0)(var3);
        var3 = var3.UnauthenticatedReportNames;
        var4 = var3.GUILD;
        var3 = {};
        var8 = var1.id;
        var3.guild_id = var8;
        var3 = var5.bind(var0)(var4, var3);
        var3 = 6;
        var3 = var7[var3];
        var5 = var6.bind(var0)(var3);
        var4 = var5.showReportModal;
        var3 = {};
        var2 = var7[var2];
        var2 = var6.bind(var0)(var2);
        var2 = var2.UnauthenticatedReportNames;
        var2 = var2.GUILD;
        var3.name = var2;
        var3.record = var1;
        var2 = {
            'onClose': null,
            'isEligibleForFeedback': false,
            'isAuthenticated': false
        };
        var1 = arg1;
        var2.onClose = var1;
        var1 = arg0;
        var2.emailToken = var1;
        var1 = {};
        var1 = var4.bind(var5)(var3, var1, var2);
        return var0;
    };
    var2.showUnauthenticatedReportModalForGuild = var3;
    var3 = function arg0, arg1() {
        var5 = _closure1_slot10;
        var2 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 5;
        var3 = var6[var1];
        var0 = undefined;
        var3 = var2.bind(var0)(var3);
        var3 = var3.UnauthenticatedReportNames;
        var4 = var3.MEDIA_TAKEDOWN;
        var3 = {};
        var3 = var5.bind(var0)(var4, var3);
        var3 = 6;
        var3 = var6[var3];
        var5 = var2.bind(var0)(var3);
        var4 = var5.showReportModal;
        var3 = {};
        var1 = var6[var1];
        var1 = var2.bind(var0)(var1);
        var1 = var1.UnauthenticatedReportNames;
        var1 = var1.MEDIA_TAKEDOWN;
        var3.name = var1;
        var2 = {
            'onClose': null,
            'isEligibleForFeedback': false,
            'isAuthenticated': false
        };
        var1 = arg1;
        var2.onClose = var1;
        var1 = arg0;
        var2.emailToken = var1;
        var1 = {};
        var1 = var4.bind(var5)(var3, var1, var2);
        return var0;
    };
    var2.showUnauthenticatedReportModalForTida = var3;
    var3 = function arg0, arg1() {
        var3 = _closure1_slot5;
        var1 = var3.prototype;
        var2 = Object.create(var1, {
            constructor: {
                value: var3
            }
        });
        var11 = {};
        var12 = var2;
        var1 = new var12[var3](var11, var10);
        var1 = var1 instanceof Object ? var1 : var2;
        var5 = _closure1_slot10;
        var6 = _closure1_slot0;
        var7 = _closure1_slot2;
        var2 = 5;
        var3 = var7[var2];
        var0 = undefined;
        var3 = var6.bind(var0)(var3);
        var3 = var3.UnauthenticatedReportNames;
        var4 = var3.MESSAGE;
        var3 = {};
        var3.message_id = var0;
        var3.channel_id = var0;
        var3 = var5.bind(var0)(var4, var3);
        var3 = 6;
        var3 = var7[var3];
        var5 = var6.bind(var0)(var3);
        var4 = var5.showReportModal;
        var3 = {};
        var2 = var7[var2];
        var2 = var6.bind(var0)(var2);
        var2 = var2.UnauthenticatedReportNames;
        var2 = var2.MESSAGE;
        var3.name = var2;
        var3.record = var1;
        var2 = {
            'onClose': null,
            'isEligibleForFeedback': false,
            'isAuthenticated': false
        };
        var1 = arg1;
        var2.onClose = var1;
        var1 = arg0;
        var2.emailToken = var1;
        var1 = {};
        var1 = var4.bind(var5)(var3, var1, var2);
        return var0;
    };
    var2.showUnauthenticatedReportModalForMessage = var3;
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
    var2.submitReportForInappropriateConversationSafetyAlert = var3;
    var3 = function arg0, arg1() {
        var1 = arg0;
        var5 = _closure1_slot10;
        var6 = _closure1_slot0;
        var7 = _closure1_slot2;
        var2 = 5;
        var3 = var7[var2];
        var0 = undefined;
        var3 = var6.bind(var0)(var3);
        var3 = var3.ReportNames;
        var4 = var3.MESSAGE;
        var3 = {};
        var8 = var1.id;
        var3.message_id = var8;
        var8 = var1.channel_id;
        var3.channel_id = var8;
        var3 = var5.bind(var0)(var4, var3);
        var3 = 6;
        var3 = var7[var3];
        var5 = var6.bind(var0)(var3);
        var4 = var5.showReportModal;
        var3 = {};
        var2 = var7[var2];
        var2 = var6.bind(var0)(var2);
        var2 = var2.ReportNames;
        var2 = var2.MESSAGE;
        var3.name = var2;
        var3.record = var1;
        var2 = {};
        var1 = 'safety_alerts_v1';
        var2.variant = var1;
        var1 = {};
        var6 = arg1;
        var1.onSubmit = var6;
        var1 = var4.bind(var5)(var3, var2, var1);
        return var0;
    };
    var2.showReportModalForInappropriateConversationSafetyAlert = var3;
    var3 = function arg0, arg1, arg2, arg3() {
        _fun54278: for (var _fun54278_ip = 0;;) switch (_fun54278_ip) {
            case 0:
                var1 = arg1;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 6;
                var2 = var7[var0];
                var0 = undefined;
                var5 = var6.bind(var0)(var2);
                var4 = var5.showReportModal;
                var3 = {};
                var2 = 5;
                var2 = var7[var2];
                var2 = var6.bind(var0)(var2);
                var2 = var2.ReportNames;
                var2 = var2.WIDGET;
                var3.name = var2;
                var6 = var1.id;
                var2 = null;
                var7 = var2 != var6;
                var2 = '';
                if (!var7) {
                    _fun54278_ip = 85;
                    continue _fun54278
                }
            case 82:
                var2 = var6;
            case 85:
                var3.widget_id = var2;
                var2 = arg0;
                var3.user_id = var2;
                var3.widget = var1;
                var2 = {};
                var1 = arg2;
                var2.onSubmit = var1;
                var1 = arg3;
                var2.appContext = var1;
                var1 = {};
                var1 = var4.bind(var5)(var3, var1, var2);
                return var0;
        }
    };
    var2.showReportModalForWidget = var3;
    var3 = function arg0() {
        var0 = arg0;
        var9 = var0.application;
        var2 = var0.entrypoint;
        var8 = var0.contextualGuildId;
        var7 = var0.contextualChannelId;
        var6 = var0.onSubmit;
        var1 = var0.appContext;
        var5 = _closure1_slot1;
        var12 = _closure1_slot2;
        var0 = 9;
        var4 = var12[var0];
        var0 = undefined;
        var11 = var5.bind(var0)(var4);
        var10 = var11.trackWithMetadata;
        var4 = _closure1_slot7;
        var5 = var4.REPORT_APPLICATION_CLICKED;
        var4 = {};
        var13 = var9.id;
        var4.application_id = var13;
        var4.location = var2;
        var4 = var10.bind(var11)(var5, var4);
        var5 = _closure1_slot10;
        var11 = _closure1_slot0;
        var10 = 5;
        var3 = var12[var10];
        var3 = var11.bind(var0)(var3);
        var3 = var3.ReportNames;
        var4 = var3.APPLICATION;
        var3 = {};
        var13 = var9.id;
        var3.application_id = var13;
        var3.guild_id = var8;
        var3.channel_id = var7;
        var3 = var5.bind(var0)(var4, var3);
        var3 = 6;
        var3 = var12[var3];
        var5 = var11.bind(var0)(var3);
        var4 = var5.showReportModal;
        var3 = {};
        var10 = var12[var10];
        var10 = var11.bind(var0)(var10);
        var10 = var10.ReportNames;
        var10 = var10.APPLICATION;
        var3.name = var10;
        var3.record = var9;
        var3.contextualGuildId = var8;
        var3.contextualChannelId = var7;
        var3.entrypoint = var2;
        var2 = {};
        var2.onSubmit = var6;
        var2.appContext = var1;
        var1 = {};
        var1 = var4.bind(var5)(var3, var1, var2);
        return var0;
    };
    var2.showReportModalForApp = var3;
    var1 = function arg0, arg1() {
        var2 = _closure1_slot0;
        var6 = _closure1_slot2;
        var0 = 6;
        var1 = var6[var0];
        var0 = undefined;
        var5 = var2.bind(var0)(var1);
        var4 = var5.showReportModal;
        var3 = {};
        var1 = 5;
        var1 = var6[var1];
        var1 = var2.bind(var0)(var1);
        var1 = var1.ModeratorReportNames;
        var1 = var1.MESSAGE;
        var3.name = var1;
        var1 = arg0;
        var3.record = var1;
        var2 = {};
        var1 = arg1;
        var2.onSubmit = var1;
        var1 = false;
        var2.isEligibleForFeedback = var1;
        var1 = {};
        var1 = var4.bind(var5)(var3, var1, var2);
        return var0;
    };
    var2.showReportToModMessageModal = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 1377, 3103, 1628, 660, 6561, 6562, 6564, 1598, 4302, 2]);