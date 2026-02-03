// modules/guild_antiraid/GuildAntiRaidActionCreators.tsx
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
                _fun79411: for (var _fun79411_ip = 0;;) switch (_fun79411_ip) {
                    case 0:
                        StartGenerator();
                        var3 = arg0;
                        var4 = arg1;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun79411_ip = 240;
                            continue _fun79411
                        }
                    case 16:
                        var1 = global;
                        var5 = var1.Set;
                        var10 = var3.features;
                        var2 = var5.prototype;
                        var2 = Object.create(var2, {
                            constructor: {
                                value: var5
                            }
                        });
                        var11 = var2;
                        var1 = new var11[var5](var10, var9);
                        var1 = var1 instanceof Object ? var1 : var2;
                        var6 = var1.has;
                        var5 = _closure1_slot7;
                        var5 = var5.COMMUNITY;
                        var5 = var6.bind(var1)(var5);
                        if (var5) {
                            _fun79411_ip = 123;
                            continue _fun79411
                        }
                    case 76:
                        if (var4) {
                            _fun79411_ip = 101;
                            continue _fun79411
                        }
                    case 79:
                        var6 = var1.delete;
                        var5 = _closure1_slot7;
                        var5 = var5.NON_COMMUNITY_RAID_ALERTS;
                        var5 = var6.bind(var1)(var5);
                        _fun79411_ip = 168;
                        continue _fun79411;
                    case 101:
                        var6 = var1.add;
                        var5 = _closure1_slot7;
                        var5 = var5.NON_COMMUNITY_RAID_ALERTS;
                        var5 = var6.bind(var1)(var5);
                        _fun79411_ip = 168;
                        continue _fun79411;
                    case 123:
                        if (var4) {
                            _fun79411_ip = 148;
                            continue _fun79411
                        }
                    case 126:
                        var5 = var1.add;
                        var4 = _closure1_slot7;
                        var4 = var4.RAID_ALERTS_DISABLED;
                        var4 = var5.bind(var1)(var4);
                        _fun79411_ip = 168;
                        continue _fun79411;
                    case 148:
                        var5 = var1.delete;
                        var4 = _closure1_slot7;
                        var4 = var4.RAID_ALERTS_DISABLED;
                        var4 = var5.bind(var1)(var4);
                    case 168:
                        var5 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var2 = 5;
                        var4 = var4[var2];
                        var2 = undefined;
                        var6 = var5.bind(var2)(var4);
                        var5 = var6.saveGuild;
                        var4 = var3.id;
                        var3 = {};
                        var3.features = var1;
                        var1 = {};
                        var7 = true;
                        var1.throwErr = var7;
                        var1 = var5.bind(var6)(var4, var3, var1);
                        SaveGenerator(address = 228);
                    case 226:
                        return var1;
                    case 228:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun79411_ip = 237;
                            continue _fun79411
                        }
                    case 234:
                        return var2;
                    case 237:
                        return var1;
                    case 240:
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
        var2 = function*(arg0, arg1, arg2, arg3) { // Environment: var2
            var0 = function*(arg0, arg1, arg2, arg3) { // Original name: ?anon_0_, environment: var0
                _fun79414: for (var _fun79414_ip = 0;;) switch (_fun79414_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun79414_ip = 187;
                            continue _fun79414
                        }
                    case 10:
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 6;
                        var1 = var3[var1];
                        var3 = undefined;
                        var1 = var2.bind(var3)(var1);
                        var6 = var1.bind(var3)();
                        var4 = var6.add;
                        var2 = arg3;
                        var1 = 'hours';
                        var2 = var4.bind(var6)(var2, var1);
                        var1 = var2.toISOString;
                        var2 = var1.bind(var2)();
                        var4 = {};
                        var7 = arg1;
                        var6 = null;
                        if (!var7) {
                            _fun79414_ip = 80;
                            continue _fun79414
                        }
                    case 77:
                        var6 = var2;
                    case 80:
                        var4.invites_disabled_until = var6;
                        var6 = arg2;
                        var1 = null;
                        if (!var6) {
                            _fun79414_ip = 96;
                            continue _fun79414
                        }
                    case 93:
                        var1 = var2;
                    case 96:
                        var4.dms_disabled_until = var1;
                        var2 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var1 = 7;
                        var1 = var6[var1];
                        var1 = var2.bind(var3)(var1);
                        var3 = var1.HTTP;
                        var2 = var3.put;
                        var1 = {};
                        var7 = _closure1_slot6;
                        var6 = var7.GUILD_INCIDENT_ACTIONS;
                        var5 = arg0;
                        var5 = var6.bind(var7)(var5);
                        var1.url = var5;
                        var1.body = var4;
                        var4 = false;
                        var1.rejectWithError = var4;
                        var1 = var2.bind(var3)(var1);
                        SaveGenerator(address = 175);
                    case 173:
                        return var1;
                    case 175:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun79414_ip = 184;
                            continue _fun79414
                        }
                    case 181:
                        return var1;
                    case 184:
                        return var1;
                    case 187:
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
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1, arg2) { // Environment: var2
            var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                _fun79417: for (var _fun79417_ip = 0;;) switch (_fun79417_ip) {
                    case 0:
                        StartGenerator();
                        var7 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun79417_ip = 185;
                            continue _fun79417
                        }
                    case 13:
                        var2 = _closure1_slot4;
                        var1 = var2.getGuild;
                        var6 = var1.bind(var2)(var7);
                        var1 = null;
                        var3 = var1 != var6;
                        var2 = null;
                        if (!var3) {
                            _fun79417_ip = 68;
                            continue _fun79417
                        }
                    case 41:
                        var8 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var3 = 8;
                        var3 = var4[var3];
                        var4 = undefined;
                        var3 = var8.bind(var4)(var3);
                        var2 = var3.bind(var4)(var6);
                    case 68:
                        var2 = var1 == var2;
                        var1 = null;
                        if (var2) {
                            _fun79417_ip = 182;
                            continue _fun79417
                        }
                    case 77:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 7;
                        var3 = var3[var2];
                        var2 = undefined;
                        var2 = var4.bind(var2)(var3);
                        var4 = var2.HTTP;
                        var3 = var4.post;
                        var2 = {};
                        var6 = _closure1_slot6;
                        var5 = var6.GUILD_INCIDENT_REPORT_FALSE_ALARM;
                        var5 = var5.bind(var6)(var7);
                        var2.url = var5;
                        var5 = {};
                        var6 = arg1;
                        var5.alert_message_id = var6;
                        var6 = arg2;
                        var5.reason = var6;
                        var2.body = var5;
                        var5 = false;
                        var2.rejectWithError = var5;
                        var2 = var3.bind(var4)(var2);
                        SaveGenerator(address = 170);
                    case 168:
                        return var2;
                    case 170:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                        var1 = var2;
                        if (!var3) {
                            _fun79417_ip = 182;
                            continue _fun79417
                        }
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
        _closure1_slot10 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot10 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun79420: for (var _fun79420_ip = 0;;) switch (_fun79420_ip) {
                    case 0:
                        StartGenerator();
                        var7 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun79420_ip = 161;
                            continue _fun79420
                        }
                    case 13:
                        var2 = _closure1_slot4;
                        var1 = var2.getGuild;
                        var6 = var1.bind(var2)(var7);
                        var1 = null;
                        var3 = var1 != var6;
                        var2 = null;
                        if (!var3) {
                            _fun79420_ip = 68;
                            continue _fun79420
                        }
                    case 41:
                        var8 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var3 = 8;
                        var3 = var4[var3];
                        var4 = undefined;
                        var3 = var8.bind(var4)(var3);
                        var2 = var3.bind(var4)(var6);
                    case 68:
                        var2 = var1 == var2;
                        var1 = null;
                        if (var2) {
                            _fun79420_ip = 158;
                            continue _fun79420
                        }
                    case 77:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 7;
                        var3 = var3[var2];
                        var2 = undefined;
                        var2 = var4.bind(var2)(var3);
                        var4 = var2.HTTP;
                        var3 = var4.post;
                        var2 = {};
                        var6 = _closure1_slot6;
                        var5 = var6.GUILD_INCIDENT_REPORT_RAID;
                        var5 = var5.bind(var6)(var7);
                        var2.url = var5;
                        var5 = false;
                        var2.rejectWithError = var5;
                        var2 = var3.bind(var4)(var2);
                        SaveGenerator(address = 146);
                    case 144:
                        return var2;
                    case 146:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                        var1 = var2;
                        if (!var3) {
                            _fun79420_ip = 158;
                            continue _fun79420
                        }
                    case 155:
                        return var2;
                    case 158:
                        return var1;
                    case 161:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot11 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot11 = var0;
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
    var6 = var3.AnalyticEvents;
    var _closure1_slot5 = var6;
    var6 = var3.Endpoints;
    var _closure1_slot6 = var6;
    var3 = var3.GuildFeatures;
    var _closure1_slot7 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_antiraid/GuildAntiRaidActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        _fun79421: for (var _fun79421_ip = 0;;) switch (_fun79421_ip) {
            case 0:
                var7 = arg0;
                var6 = arguments[1];
                var0 = undefined;
                if (!(var6 === var0)) {
                    _fun79421_ip = 16;
                    continue _fun79421
                }
            case 12:
                var6 = new Array(0);
            case 16:
                var2 = var6.length;
                var1 = 0;
                if (!(var1 !== var2)) {
                    _fun79421_ip = 127;
                    continue _fun79421
                }
            case 27:
                var2 = _closure1_slot1;
                var9 = _closure1_slot2;
                var1 = 3;
                var1 = var9[var1];
                var4 = var2.bind(var0)(var1);
                var3 = var4.track;
                var1 = _closure1_slot5;
                var2 = var1.GUILD_RAID_REPORTED;
                var1 = {};
                var8 = _closure1_slot0;
                var5 = 4;
                var5 = var9[var5];
                var8 = var8.bind(var0)(var5);
                var5 = var8.collectGuildAnalyticsMetadata;
                var10 = var5.bind(var8)(var7);
                var11 = var1;
                var5 = copyDataProperties(var11, var10);
                var5 = 'guild_id';
                var1[var5] = var7;
                var5 = 'raid_types';
                var1[var5] = var6;
                var1 = var3.bind(var4)(var2, var1);
            case 127:
                return var0;
        }
    };
    var2.trackReportRaidViewed = var3;
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
    var2.setGuildRaidAlerts = var3;
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
    var2.setGuildIncidentActions = var3;
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot10;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.handleResolveRaid = var3;
    var1 = function() {
        var0 = undefined;
        var3 = _closure1_slot11;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.handleReportRaid = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 1410, 660, 795, 4302, 8152, 3045, 507, 8746, 2]);