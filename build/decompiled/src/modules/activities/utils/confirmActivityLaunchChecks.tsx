// modules/activities/utils/confirmActivityLaunchChecks.tsx
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
        var0 = undefined;
        var3 = _closure1_slot8;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot7 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun64238: for (var _fun64238_ip = 0;;) switch (_fun64238_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun64238_ip = 335;
                            continue _fun64238
                        }
                    case 13:
                        var11 = var1.applicationId;
                        var12 = var1.channelId;
                        var10 = var1.guildId;
                        var2 = undefined;
                        var6 = undefined;
                        SaveGenerator(address = 36);
                    case 34:
                        return var2;
                    case 36:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun64238_ip = 332;
                            continue _fun64238
                        }
                    case 45: // try_start_0
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var3 = 4;
                        var3 = var5[var3];
                        var5 = var4.bind(var2)(var3);
                        var4 = var11;
                        var3 = var12;
                        var3 = var5.bind(var2)(var4, var3);
                        SaveGenerator(address = 84);
                    case 82:
                        return var3;
                    case 84:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 4);
                        if (var4) {
                            _fun64238_ip = 93;
                            continue _fun64238
                        }
                    case 90: // try_end0
                        return var3;
                    case 93:
                        return var3;
                    case 96: // catch_target0
                        CatchBlockStart(arg_register = 7);
                        var3 = var10;
                        var9 = null;
                        if (!(var9 == var3)) {
                            _fun64238_ip = 144;
                            continue _fun64238
                        }
                    case 107:
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var3 = 5;
                        var3 = var5[var3];
                        var3 = var4.bind(var2)(var3);
                        var3 = var3.EmbeddedActivityLocationKind;
                        var3 = var3.PRIVATE_CHANNEL;
                        _fun64238_ip = 179;
                        continue _fun64238;
                    case 144:
                        var5 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var4 = 5;
                        var4 = var8[var4];
                        var4 = var5.bind(var2)(var4);
                        var4 = var4.EmbeddedActivityLocationKind;
                        var3 = var4.GUILD_CHANNEL;
                    case 179:
                        var6 = var3;
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var3 = 6;
                        var3 = var5[var3];
                        var5 = var4.bind(var2)(var3);
                        var4 = var5.dispatch;
                        var3 = {
                            'type': 'EMBEDDED_ACTIVITY_LAUNCH_FAIL',
                            'nonce': ''
                        };
                        var3.applicationId = var11;
                        var11 = var12;
                        var13 = var9 != var11;
                        var11 = null;
                        if (!var13) {
                            _fun64238_ip = 243;
                            continue _fun64238
                        }
                    case 240:
                        var11 = var12;
                    case 243:
                        var3.channelId = var11;
                        var11 = var10;
                        var11 = var9 != var11;
                        var9 = null;
                        if (!var11) {
                            _fun64238_ip = 262;
                            continue _fun64238
                        }
                    case 259:
                        var9 = var10;
                    case 262:
                        var3.guildId = var9;
                        var9 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var8 = 7;
                        var8 = var10[var8];
                        var8 = var9.bind(var2)(var8);
                        var9 = var8.APIError;
                        var15 = var7;
                        var8 = var9.prototype;
                        var8 = Object.create(var8, {
                            constructor: {
                                value: var9
                            }
                        });
                        var16 = var8;
                        var7 = new var16[var9](var15, var14);
                        var7 = var7 instanceof Object ? var7 : var8;
                        var3.error = var7;
                        var3.locationKind = var6;
                        var3 = var4.bind(var5)(var3);
                        return var2;
                    case 332:
                        return var1;
                    case 335:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
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
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun64241: for (var _fun64241_ip = 0;;) switch (_fun64241_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 3);
                        if (var3) {
                            _fun64241_ip = 122;
                            continue _fun64241
                        }
                    case 12:
                        var4 = var1.currentEmbeddedApplication;
                        var _closure4_slot0 = var4;
                        var5 = var1.shouldClosePopoutOnLeaveCurrentEmbeddedApplication;
                        var _closure4_slot1 = var5;
                        var1 = var1.onConfirmActivityLaunchChecksAlertOpen;
                        var _closure4_slot2 = var1;
                        var1 = undefined;
                        SaveGenerator(address = 48);
                    case 46:
                        return var1;
                    case 48:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun64241_ip = 119;
                            continue _fun64241
                        }
                    case 54:
                        var3 = null;
                        if (!(var3 != var4)) {
                            _fun64241_ip = 111;
                            continue _fun64241
                        }
                    case 60:
                        var3 = global;
                        var4 = var3.Promise;
                        var3 = var4.prototype;
                        var3 = Object.create(var3, {
                            constructor: {
                                value: var4
                            }
                        });
                        var6 = function(arg0) { // Environment: var2
                            _fun64242: for (var _fun64242_ip = 0;;) switch (_fun64242_ip) {
                                case 0:
                                    var7 = arg0;
                                    var _closure5_slot0 = var7;
                                    var2 = _closure1_slot5;
                                    var0 = var2.getSelfEmbeddedActivities;
                                    var5 = var0.bind(var2)();
                                    var4 = var5.get;
                                    var0 = _closure4_slot0;
                                    var0 = var0.id;
                                    var4 = var4.bind(var5)(var0);
                                    var _closure5_slot1 = var4;
                                    var6 = _closure1_slot0;
                                    var5 = _closure1_slot2;
                                    var0 = 8;
                                    var5 = var5[var0];
                                    var0 = undefined;
                                    var9 = var6.bind(var0)(var5);
                                    var8 = var9.getEmbeddedActivityLocationChannelId;
                                    var6 = null;
                                    var10 = var6 == var4;
                                    var5 = undefined;
                                    if (var10) {
                                        _fun64242_ip = 96;
                                        continue _fun64242
                                    }
                                case 91:
                                    var5 = var4.location;
                                case 96:
                                    var9 = var8.bind(var9)(var5);
                                    var8 = _closure1_slot4;
                                    var5 = var8.getChannel;
                                    var5 = var5.bind(var8)(var9);
                                    if (!(var6 != var4)) {
                                        _fun64242_ip = 123;
                                        continue _fun64242
                                    }
                                case 119:
                                    if (!(var6 == var5)) {
                                        _fun64242_ip = 132;
                                        continue _fun64242
                                    }
                                case 123:
                                    var4 = true;
                                    var4 = var7.bind(var0)(var4);
                                    _fun64242_ip = 191;
                                    continue _fun64242;
                                case 132:
                                    var4 = _closure4_slot2;
                                    if (!(var6 != var4)) {
                                        _fun64242_ip = 148;
                                        continue _fun64242
                                    }
                                case 140:
                                    var4 = _closure4_slot2;
                                    var4 = var4.bind(var0)();
                                case 148:
                                    var4 = _closure1_slot1;
                                    var6 = _closure1_slot2;
                                    var3 = 9;
                                    var3 = var6[var3];
                                    var4 = var4.bind(var0)(var3);
                                    var14 = _closure4_slot0;
                                    var12 = function() { // Environment: var1
                                        var2 = _closure1_slot1;
                                        var1 = _closure1_slot2;
                                        var0 = 10;
                                        var1 = var1[var0];
                                        var0 = undefined;
                                        var1 = var2.bind(var0)(var1);
                                        var4 = var1.bind(var0)();
                                        var3 = var4.leaveActivity;
                                        var2 = {};
                                        var5 = _closure5_slot1;
                                        var5 = var5.location;
                                        var2.location = var5;
                                        var6 = _closure4_slot0;
                                        var6 = var6.id;
                                        var2.applicationId = var6;
                                        var5 = _closure4_slot1;
                                        var2.shouldClosePopout = var5;
                                        var2 = var3.bind(var4)(var2);
                                        var2 = _closure5_slot0;
                                        var1 = true;
                                        var1 = var2.bind(var0)(var1);
                                        return var0;
                                    };
                                    var11 = function() { // Environment: var1
                                        var2 = _closure5_slot0;
                                        var1 = undefined;
                                        var0 = false;
                                        var0 = var2.bind(var1)(var0);
                                        return var0;
                                    };
                                    var15 = undefined;
                                    var13 = var5;
                                    var1 = var15[var4](var14, var13, var12, var11, var10);
                                case 191:
                                    return var0;
                            }
                        };
                        var7 = var3;
                        var2 = new var7[var4](var6, var5);
                        var2 = var2 instanceof Object ? var2 : var3;
                        SaveGenerator(address = 97);
                    case 95:
                        return var2;
                    case 97:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                        if (var3) {
                            _fun64241_ip = 116;
                            continue _fun64241
                        }
                    case 103:
                        if (var2) {
                            _fun64241_ip = 111;
                            continue _fun64241
                        }
                    case 106:
                        var3 = false;
                        return var3;
                    case 111:
                        var3 = true;
                        return var3;
                    case 116:
                        return var2;
                    case 119:
                        return var1;
                    case 122:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
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
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun64247: for (var _fun64247_ip = 0;;) switch (_fun64247_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 3);
                        if (var3) {
                            _fun64247_ip = 277;
                            continue _fun64247
                        }
                    case 15:
                        var5 = var1.application;
                        var8 = var1.applicationId;
                        var10 = var1.channel;
                        var _closure4_slot0 = var10;
                        var4 = var1.user;
                        var1 = var1.onConfirmActivityLaunchChecksAlertOpen;
                        var _closure4_slot1 = var1;
                        var3 = undefined;
                        var _closure4_slot2 = var3;
                        SaveGenerator(address = 59);
                    case 57:
                        return var3;
                    case 59:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 6);
                        if (var6) {
                            _fun64247_ip = 274;
                            continue _fun64247
                        }
                    case 68:
                        var6 = var4.nsfwAllowed;
                        var4 = null;
                        if (!(var4 == var6)) {
                            _fun64247_ip = 261;
                            continue _fun64247
                        }
                    case 83:
                        if (!(var4 == var5)) {
                            _fun64247_ip = 174;
                            continue _fun64247
                        }
                    case 87:
                        var7 = _closure1_slot7;
                        var6 = {};
                        var6.applicationId = var8;
                        var9 = var4 == var10;
                        var8 = undefined;
                        if (var9) {
                            _fun64247_ip = 114;
                            continue _fun64247
                        }
                    case 109:
                        var8 = var10.id;
                    case 114:
                        var6.channelId = var8;
                        var8 = var4 == var10;
                        var9 = undefined;
                        if (var8) {
                            _fun64247_ip = 137;
                            continue _fun64247
                        }
                    case 127:
                        var8 = var10.getGuildId;
                        var9 = var8.bind(var10)();
                    case 137:
                        var10 = var4 != var9;
                        var8 = undefined;
                        if (!var10) {
                            _fun64247_ip = 149;
                            continue _fun64247
                        }
                    case 146:
                        var8 = var9;
                    case 149:
                        var6.guildId = var8;
                        var6 = var7.bind(var3)(var6);
                        SaveGenerator(address = 162);
                    case 160:
                        return var6;
                    case 162:
                        ResumeGenerator(result_out_reg = 6, return_bool_out_reg = 7);
                        var5 = var6;
                        if (!var7) {
                            _fun64247_ip = 174;
                            continue _fun64247
                        }
                    case 171:
                        return var6;
                    case 174:
                        _closure4_slot2 = var5;
                        if (!(var4 != var5)) {
                            _fun64247_ip = 269;
                            continue _fun64247
                        }
                    case 182:
                        var5 = var5.embeddedActivityConfig;
                        var6 = var4 == var5;
                        var3 = undefined;
                        if (var6) {
                            _fun64247_ip = 203;
                            continue _fun64247
                        }
                    case 197:
                        var3 = var5.requires_age_gate;
                    case 203:
                        if (!(var4 != var3)) {
                            _fun64247_ip = 261;
                            continue _fun64247
                        }
                    case 207:
                        if (!var3) {
                            _fun64247_ip = 261;
                            continue _fun64247
                        }
                    case 210:
                        var3 = global;
                        var4 = var3.Promise;
                        var3 = var4.prototype;
                        var3 = Object.create(var3, {
                            constructor: {
                                value: var4
                            }
                        });
                        var11 = function(arg0) { // Environment: var2
                            _fun64248: for (var _fun64248_ip = 0;;) switch (_fun64248_ip) {
                                case 0:
                                    var0 = arg0;
                                    var _closure5_slot0 = var0;
                                    var0 = _closure4_slot1;
                                    var7 = null;
                                    if (!(var7 != var0)) {
                                        _fun64248_ip = 32;
                                        continue _fun64248
                                    }
                                case 22:
                                    var1 = _closure4_slot1;
                                    var0 = undefined;
                                    var0 = var1.bind(var0)();
                                case 32:
                                    var2 = _closure1_slot0;
                                    var1 = _closure1_slot2;
                                    var0 = 11;
                                    var1 = var1[var0];
                                    var0 = undefined;
                                    var3 = var2.bind(var0)(var1);
                                    var2 = var3.confirmActivityAgeGateAlert;
                                    var1 = {};
                                    var5 = _closure4_slot2;
                                    var1.application = var5;
                                    var5 = _closure4_slot0;
                                    var7 = var7 == var5;
                                    var5 = undefined;
                                    if (var7) {
                                        _fun64248_ip = 95;
                                        continue _fun64248
                                    }
                                case 86:
                                    var6 = _closure4_slot0;
                                    var5 = var6.id;
                                case 95:
                                    var1.channelId = var5;
                                    var5 = function() {
                                        var2 = _closure5_slot0;
                                        var1 = undefined;
                                        var0 = true;
                                        var0 = var2.bind(var1)(var0);
                                        return var0;
                                    };
                                    var1.onAgree = var5;
                                    var4 = function() {
                                        var2 = _closure5_slot0;
                                        var1 = undefined;
                                        var0 = false;
                                        var0 = var2.bind(var1)(var0);
                                        return var0;
                                    };
                                    var1.onDisagree = var4;
                                    var1 = var2.bind(var3)(var1);
                                    return var0;
                            }
                        };
                        var12 = var3;
                        var2 = new var12[var4](var11, var10);
                        var2 = var2 instanceof Object ? var2 : var3;
                        SaveGenerator(address = 247);
                    case 245:
                        return var2;
                    case 247:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                        if (var3) {
                            _fun64247_ip = 266;
                            continue _fun64247
                        }
                    case 253:
                        if (var2) {
                            _fun64247_ip = 261;
                            continue _fun64247
                        }
                    case 256:
                        var3 = false;
                        return var3;
                    case 261:
                        var3 = true;
                        return var3;
                    case 266:
                        return var2;
                    case 269:
                        var2 = false;
                        return var2;
                    case 274:
                        return var1;
                    case 277:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
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
                _fun64253: for (var _fun64253_ip = 0;;) switch (_fun64253_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun64253_ip = 306;
                            continue _fun64253
                        }
                    case 15:
                        var3 = var1.application;
                        var7 = var1.applicationId;
                        var11 = var1.channel;
                        var1 = var1.onConfirmActivityLaunchChecksAlertOpen;
                        var _closure4_slot0 = var1;
                        var9 = undefined;
                        var _closure4_slot1 = var9;
                        SaveGenerator(address = 50);
                    case 48:
                        return var9;
                    case 50:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun64253_ip = 303;
                            continue _fun64253
                        }
                    case 59:
                        var2 = null;
                        if (!(var2 == var3)) {
                            _fun64253_ip = 152;
                            continue _fun64253
                        }
                    case 65:
                        var6 = _closure1_slot7;
                        var4 = {};
                        var4.applicationId = var7;
                        var10 = var2 == var11;
                        var8 = undefined;
                        if (var10) {
                            _fun64253_ip = 92;
                            continue _fun64253
                        }
                    case 87:
                        var8 = var11.id;
                    case 92:
                        var4.channelId = var8;
                        var8 = var2 == var11;
                        var10 = undefined;
                        if (var8) {
                            _fun64253_ip = 115;
                            continue _fun64253
                        }
                    case 105:
                        var8 = var11.getGuildId;
                        var10 = var8.bind(var11)();
                    case 115:
                        var11 = var2 != var10;
                        var8 = undefined;
                        if (!var11) {
                            _fun64253_ip = 127;
                            continue _fun64253
                        }
                    case 124:
                        var8 = var10;
                    case 127:
                        var4.guildId = var8;
                        var4 = var6.bind(var9)(var4);
                        SaveGenerator(address = 140);
                    case 138:
                        return var4;
                    case 140:
                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 6);
                        var3 = var4;
                        if (!var6) {
                            _fun64253_ip = 152;
                            continue _fun64253
                        }
                    case 149:
                        return var4;
                    case 152:
                        _closure4_slot1 = var3;
                        var2 = var2 != var3;
                        if (!var2) {
                            _fun64253_ip = 300;
                            continue _fun64253
                        }
                    case 166:
                        var8 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var6 = 12;
                        var6 = var10[var6];
                        var10 = var8.bind(var9)(var6);
                        var9 = var10.hasFlag;
                        var8 = var3.flags;
                        var6 = _closure1_slot6;
                        var6 = var6.EMBEDDED_RELEASED;
                        var6 = var9.bind(var10)(var8, var6);
                        var6 = !var6;
                        if (!var6) {
                            _fun64253_ip = 231;
                            continue _fun64253
                        }
                    case 222:
                        var3 = var3.isVerified;
                        var6 = !var3;
                    case 231:
                        var3 = !var6;
                        if (!var6) {
                            _fun64253_ip = 297;
                            continue _fun64253
                        }
                    case 237:
                        var6 = _closure1_slot5;
                        var4 = var6.hasActivityEverBeenLaunched;
                        var4 = var4.bind(var6)(var7);
                        var6 = !var4;
                        var4 = !var6;
                        if (!var6) {
                            _fun64253_ip = 294;
                            continue _fun64253
                        }
                    case 261:
                        var6 = global;
                        var7 = var6.Promise;
                        var6 = var7.prototype;
                        var6 = Object.create(var6, {
                            constructor: {
                                value: var7
                            }
                        });
                        var13 = function(arg0) { // Environment: var5
                            _fun64254: for (var _fun64254_ip = 0;;) switch (_fun64254_ip) {
                                case 0:
                                    var0 = arg0;
                                    var _closure5_slot0 = var0;
                                    var1 = _closure4_slot0;
                                    var0 = null;
                                    if (!(var0 != var1)) {
                                        _fun64254_ip = 32;
                                        continue _fun64254
                                    }
                                case 22:
                                    var1 = _closure4_slot0;
                                    var0 = undefined;
                                    var0 = var1.bind(var0)();
                                case 32:
                                    var2 = _closure1_slot0;
                                    var1 = _closure1_slot2;
                                    var0 = 13;
                                    var1 = var1[var0];
                                    var0 = undefined;
                                    var3 = var2.bind(var0)(var1);
                                    var2 = var3.confirmExternalAppLaunchAlert;
                                    var1 = {};
                                    var5 = _closure4_slot1;
                                    var1.application = var5;
                                    var5 = function() {
                                        var2 = _closure5_slot0;
                                        var1 = undefined;
                                        var0 = true;
                                        var0 = var2.bind(var1)(var0);
                                        return var0;
                                    };
                                    var1.onConfirm = var5;
                                    var4 = function() {
                                        var2 = _closure5_slot0;
                                        var1 = undefined;
                                        var0 = false;
                                        var0 = var2.bind(var1)(var0);
                                        return var0;
                                    };
                                    var1.onCancel = var4;
                                    var1 = var2.bind(var3)(var1);
                                    return var0;
                            }
                        };
                        var14 = var6;
                        var5 = new var14[var7](var13, var12);
                        var4 = var5 instanceof Object ? var5 : var6;
                    case 294:
                        var3 = var4;
                    case 297:
                        var2 = var3;
                    case 300:
                        return var2;
                    case 303:
                        return var1;
                    case 306:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
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
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun64259: for (var _fun64259_ip = 0;;) switch (_fun64259_ip) {
                    case 0:
                        StartGenerator();
                        var5 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun64259_ip = 146;
                            continue _fun64259
                        }
                    case 15:
                        var2 = {};
                        var1 = var5.currentEmbeddedApplication;
                        var2.currentEmbeddedApplication = var1;
                        var1 = var5.shouldClosePopoutOnLeaveCurrentEmbeddedApplication;
                        var2.shouldClosePopoutOnLeaveCurrentEmbeddedApplication = var1;
                        var1 = var5.onConfirmActivityLaunchChecksAlertOpen;
                        var2.onConfirmActivityLaunchChecksAlertOpen = var1;
                        var1 = function() {
                            var0 = undefined;
                            var3 = _closure1_slot9;
                            var2 = var3.apply;
                            var0 = arguments;
                            var1 = var0;
                            var0 = this;
                            var0 = var2.bind(var3)(var0, var1);
                            return var0;
                        };
                        var4 = undefined;
                        var1 = var1.bind(var4)(var2);
                        SaveGenerator(address = 66);
                    case 64:
                        return var1;
                    case 66:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun64259_ip = 143;
                            continue _fun64259
                        }
                    case 72:
                        if (var1) {
                            _fun64259_ip = 80;
                            continue _fun64259
                        }
                    case 75:
                        var2 = false;
                        return var2;
                    case 80:
                        var2 = function() {
                            var0 = undefined;
                            var3 = _closure1_slot10;
                            var2 = var3.apply;
                            var0 = arguments;
                            var1 = var0;
                            var0 = this;
                            var0 = var2.bind(var3)(var0, var1);
                            return var0;
                        };
                        var2 = var2.bind(var4)(var5);
                        SaveGenerator(address = 94);
                    case 92:
                        return var2;
                    case 94:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 6);
                        if (var6) {
                            _fun64259_ip = 140;
                            continue _fun64259
                        }
                    case 100:
                        if (var2) {
                            _fun64259_ip = 108;
                            continue _fun64259
                        }
                    case 103:
                        var6 = false;
                        return var6;
                    case 108:
                        var3 = function() {
                            var0 = undefined;
                            var3 = _closure1_slot11;
                            var2 = var3.apply;
                            var0 = arguments;
                            var1 = var0;
                            var0 = this;
                            var0 = var2.bind(var3)(var0, var1);
                            return var0;
                        };
                        var3 = var3.bind(var4)(var5);
                        SaveGenerator(address = 122);
                    case 120:
                        return var3;
                    case 122:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 4);
                        if (var4) {
                            _fun64259_ip = 137;
                            continue _fun64259
                        }
                    case 128:
                        var4 = !var3;
                        var4 = !var4;
                        return var4;
                    case 137:
                        return var3;
                    case 140:
                        return var2;
                    case 143:
                        return var1;
                    case 146:
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.ApplicationFlags;
    var _closure1_slot6 = var3;
    var3 = 14;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/activities/utils/confirmActivityLaunchChecks.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var0 = undefined;
        var3 = _closure1_slot12;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.confirmActivityLaunchChecks = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 1372, 1371, 660, 7994, 7997, 806, 3352, 3083, 7998, 7969, 7999, 1384, 8001, 2]);