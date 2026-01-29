// modules/guild_progress/native/GuildProgressUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var3 = function(arg0) { // Original name: useIOSCompletionStates, environment: var1
        _fun79951: for (var _fun79951_ip = 0;;) switch (_fun79951_ip) {
            case 0:
                var11 = arg0;
                var _closure2_slot0 = var11;
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var10 = 10;
                var0 = var6[var10];
                var3 = undefined;
                var8 = var4.bind(var3)(var0);
                var7 = var8.useStateFromStores;
                var0 = _closure1_slot5;
                var2 = new Array(1);
                var2[0] = var0;
                var0 = function() { // Environment: var1
                    var3 = _closure1_slot5;
                    var2 = var3.can;
                    var0 = _closure1_slot9;
                    var1 = var0.ADMINISTRATOR;
                    var0 = _closure2_slot0;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var0 = var7.bind(var8)(var2, var0);
                var2 = 11;
                var7 = var6[var2];
                var8 = var4.bind(var3)(var7);
                var7 = var8.useGuildPersonalized;
                var8 = var7.bind(var8)(var11);
                var7 = var6[var2];
                var9 = var4.bind(var3)(var7);
                var7 = var9.useGuildPopulated;
                var9 = var7.bind(var9)(var11);
                var7 = var6[var10];
                var13 = var4.bind(var3)(var7);
                var12 = var13.useStateFromStores;
                var7 = _closure1_slot3;
                var11 = new Array(1);
                var11[0] = var7;
                var7 = function() { // Environment: var1
                    var2 = _closure1_slot3;
                    var1 = var2.getDefaultChannel;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var12 = var12.bind(var13)(var11, var7);
                var2 = var6[var2];
                var7 = var4.bind(var3)(var2);
                var6 = var7.useChannelsMessaged;
                var4 = null;
                if (!(var4 == var12)) {
                    _fun79951_ip = 173;
                    continue _fun79951
                }
            case 167:
                var2 = new Array(0);
                _fun79951_ip = 184;
                continue _fun79951;
            case 173:
                var11 = new Array(1);
                var11[0] = var12;
                var2 = var11;
            case 184:
                var6 = var6.bind(var7)(var2);
                var7 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var10];
                var12 = var7.bind(var3)(var2);
                var11 = var12.useStateFromStores;
                var2 = _closure1_slot6;
                var7 = new Array(1);
                var7[0] = var2;
                var2 = function() { // Environment: var1
                    _fun79954: for (var _fun79954_ip = 0;;) switch (_fun79954_ip) {
                        case 0:
                            var3 = _closure1_slot6;
                            var1 = var3.getProgress;
                            var0 = _closure2_slot0;
                            var0 = var0.id;
                            var4 = var1.bind(var3)(var0);
                            var0 = null;
                            var3 = var0 == var4;
                            var1 = undefined;
                            if (var3) {
                                _fun79954_ip = 61;
                                continue _fun79954
                            }
                        case 41:
                            var3 = var4.has;
                            var2 = _closure1_slot7;
                            var2 = var2.MESSAGE;
                            var1 = var3.bind(var4)(var2);
                        case 61:
                            var0 = var0 != var1;
                            if (!var0) {
                                _fun79954_ip = 71;
                                continue _fun79954
                            }
                        case 68:
                            var0 = var1;
                        case 71:
                            return var0;
                    }
                };
                var2 = var11.bind(var12)(var7, var2);
                if (var6) {
                    _fun79951_ip = 242;
                    continue _fun79951
                }
            case 239:
                var6 = var2;
            case 242:
                var7 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var10];
                var11 = var7.bind(var3)(var2);
                var10 = var11.useStateFromStores;
                var2 = _closure1_slot6;
                var7 = new Array(1);
                var7[0] = var2;
                var2 = function() { // Environment: var1
                    var2 = _closure1_slot6;
                    var1 = var2.getProgress;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var7 = var10.bind(var11)(var7, var2);
                if (var0) {
                    _fun79951_ip = 308;
                    continue _fun79951
                }
            case 292:
                var0 = {
                    'guildPopulated': false,
                    'guildPersonalized': false,
                    'guildMessaged': false,
                    'guildChannelCreated': false,
                    'completed': true,
                    'dismissed': true,
                    'numFinished': 0,
                    'totalSteps': 0
                };
                return var0;
            case 308:
                var0 = new Array(3);
                var0[0] = var9;
                var0[1] = var8;
                var0[2] = var6;
                var2 = var0.filter;
                var1 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    return var0;
                };
                var1 = var2.bind(var0)(var1);
                var2 = var1.length;
                var1 = var0.length;
                var0 = var4 == var7;
                var3 = undefined;
                if (var0) {
                    _fun79951_ip = 380;
                    continue _fun79951
                }
            case 360:
                var10 = var7.has;
                var0 = _closure1_slot7;
                var0 = var0.COMPLETED;
                var3 = var10.bind(var7)(var0);
            case 380:
                if (var3) {
                    _fun79951_ip = 387;
                    continue _fun79951
                }
            case 383:
                var3 = var2 === var1;
            case 387:
                var0 = {};
                var0.guildPopulated = var9;
                var0.guildPersonalized = var8;
                var0.guildMessaged = var6;
                var0.completed = var3;
                var4 = var4 == var7;
                if (var4) {
                    _fun79951_ip = 436;
                    continue _fun79951
                }
            case 416:
                var6 = var7.has;
                var5 = _closure1_slot7;
                var5 = var5.DISMISSED;
                var4 = var6.bind(var7)(var5);
            case 436:
                var0.dismissed = var4;
                if (!var3) {
                    _fun79951_ip = 447;
                    continue _fun79951
                }
            case 444:
                var2 = var1;
            case 447:
                var0.numFinished = var2;
                var0.totalSteps = var1;
                return var0;
        }
    };
    var _closure1_slot10 = var3;
    var0 = global;
    var9 = var0.Object;
    var5 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var7[var0];
    var0 = undefined;
    var4 = var8.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var8.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var8.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var5 = var7[var4];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var5 = var5.Steps;
    var _closure1_slot7 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var8 = var5.WELCOME_OLD_GUILD_AGE_THRESHOLD;
    var _closure1_slot8 = var8;
    var5 = var5.Permissions;
    var _closure1_slot9 = var5;
    var5 = 14;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guild_progress/native/GuildProgressUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var2.MIN_PROGRESS_PERCENT = var4;
    var4 = 'rgba(78, 93, 148, 0.3)';
    var2.PROGRESS_BACKGROUND_COLOR = var4;
    var4 = function(arg0) { // Original name: openActionSheet, environment: var1
        var6 = arg0;
        var4 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 6;
        var3 = var1[var0];
        var0 = undefined;
        var5 = var4.bind(var0)(var3);
        var4 = var5.openLazy;
        var3 = _closure1_slot0;
        var2 = 8;
        var2 = var1[var2];
        var3 = var3.bind(var0)(var2);
        var2 = 7;
        var2 = var1[var2];
        var1 = var1.paths;
        var3 = var3.bind(var0)(var2, var1);
        var7 = var6.id;
        var1 = global;
        var1 = var1.HermesInternal;
        var2 = var1.concat;
        var1 = 'guild-progress-';
        var2 = var2.bind(var1)(var7);
        var1 = {};
        var1.guild = var6;
        var1 = var4.bind(var5)(var3, var2, var1);
        return var0;
    };
    var2.openActionSheet = var4;
    var4 = function(arg0) { // Original name: hideActionSheet, environment: var1
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 6;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.hideActionSheet;
        var1 = global;
        var1 = var1.HermesInternal;
        var5 = var1.concat;
        var4 = 'guild-progress-';
        var1 = arg0;
        var1 = var5.bind(var4)(var1);
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.hideActionSheet = var4;
    var4 = function(arg0) { // Original name: createGuildProgress, environment: var1
        _fun79959: for (var _fun79959_ip = 0;;) switch (_fun79959_ip) {
            case 0:
                var2 = arg0;
                var3 = _closure1_slot4;
                var1 = var3.getGuild;
                var3 = var1.bind(var3)(var2);
                var1 = null;
                if (!(var1 != var3)) {
                    _fun79959_ip = 59;
                    continue _fun79959
                }
            case 26:
                var3 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 9;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var3.bind(var0)(var1);
                var0 = var1.createProgress;
                var0 = var0.bind(var1)(var2);
            case 59:
                var0 = undefined;
                return var0;
        }
    };
    var2.createGuildProgress = var4;
    var2.useIOSCompletionStates = var3;
    var3 = function(arg0) { // Original name: useGuildProgressStep, environment: var1
        _fun79960: for (var _fun79960_ip = 0;;) switch (_fun79960_ip) {
            case 0:
                var1 = _closure1_slot10;
                var9 = undefined;
                var0 = arg0;
                var4 = var1.bind(var9)(var0);
                var0 = var4.guildPopulated;
                var6 = var4.guildPersonalized;
                var2 = var4.guildMessaged;
                var1 = var4.completed;
                var8 = var4.totalSteps;
                var12 = _closure1_slot0;
                var5 = _closure1_slot2;
                var11 = 12;
                var4 = var5[var11];
                var4 = var12.bind(var9)(var4);
                var10 = var4.intl;
                var7 = var10.string;
                var4 = var5[var11];
                var4 = var12.bind(var9)(var4);
                var4 = var4.t;
                var4 = var4.q9n0Ta;
                var7 = var7.bind(var10)(var4);
                var4 = new Array(3);
                var4[0] = var7;
                var7 = var5[var11];
                var7 = var12.bind(var9)(var7);
                var13 = var7.intl;
                var10 = var13.string;
                var7 = var5[var11];
                var7 = var12.bind(var9)(var7);
                var7 = var7.t;
                var7 = var7.DWB2YZ;
                var7 = var10.bind(var13)(var7);
                var4[1] = var7;
                var7 = var5[var11];
                var7 = var12.bind(var9)(var7);
                var10 = var7.intl;
                var7 = var10.string;
                var5 = var5[var11];
                var5 = var12.bind(var9)(var5);
                var5 = var5.t;
                var5 = var5.dNktpr;
                var5 = var7.bind(var10)(var5);
                var4[2] = var5;
                var7 = 0;
                var5 = 0;
                if (!var0) {
                    _fun79960_ip = 222;
                    continue _fun79960
                }
            case 213:
                var0 = null;
                var4[var7] = var0;
                var5 = 1;
            case 222:
                var0 = var5;
                if (!var6) {
                    _fun79960_ip = 240;
                    continue _fun79960
                }
            case 228:
                var0 = var5 + 1;
                var7 = null;
                var6 = 1;
                var4[var6] = var7;
            case 240:
                var10 = var0;
                if (!var2) {
                    _fun79960_ip = 258;
                    continue _fun79960
                }
            case 246:
                var10 = var0 + 1;
                var5 = null;
                var2 = 3;
                var4[var2] = var5;
            case 258:
                var2 = var4.find;
                var0 = function(arg0) { // Environment: var0
                    var1 = null;
                    var0 = arg0;
                    var0 = var1 != var0;
                    return var0;
                };
                var7 = var2.bind(var4)(var0);
                var0 = null;
                if (!(var0 == var7)) {
                    _fun79960_ip = 335;
                    continue _fun79960
                }
            case 283:
                var5 = _closure1_slot0;
                var0 = _closure1_slot2;
                var2 = var0[var11];
                var2 = var5.bind(var9)(var2);
                var4 = var2.intl;
                var2 = var4.string;
                var0 = var0[var11];
                var0 = var5.bind(var9)(var0);
                var0 = var0.t;
                var0 = var0["+Gyklt"];
                var7 = var2.bind(var4)(var0);
            case 335:
                var0 = {};
                var2 = global;
                var6 = var2.Math;
                var5 = var6.max;
                var2 = 100;
                var2 = var2 * var10;
                var4 = var2 / var8;
                var2 = 3;
                var2 = var5.bind(var6)(var2, var4);
                var0.percentComplete = var2;
                if (!(!(var10 < var8))) {
                    _fun79960_ip = 433;
                    continue _fun79960
                }
            case 379:
                var6 = _closure1_slot0;
                var2 = _closure1_slot2;
                var4 = var2[var11];
                var4 = var6.bind(var9)(var4);
                var5 = var4.intl;
                var4 = var5.string;
                var2 = var2[var11];
                var2 = var6.bind(var9)(var2);
                var2 = var2.t;
                var2 = var2["+Gyklt"];
                var2 = var4.bind(var5)(var2);
                _fun79960_ip = 514;
                continue _fun79960;
            case 433:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var5 = var3[var11];
                var5 = var4.bind(var9)(var5);
                var6 = var5.intl;
                var5 = var6.formatToPlainString;
                var3 = var3[var11];
                var3 = var4.bind(var9)(var3);
                var3 = var3.t;
                var4 = var3.zhHW5c;
                var3 = {};
                var9 = 1;
                var9 = var10 + var9;
                var3.currStep = var9;
                var3.total = var8;
                var3.step = var7;
                var2 = var5.bind(var6)(var4, var3);
            case 514:
                var0.subtitle = var2;
                var0.completed = var1;
                return var0;
        }
    };
    var2.useGuildProgressStep = var3;
    var1 = function(arg0) { // Original name: useIsEligibleForGuildProgress, environment: var1
        _fun79962: for (var _fun79962_ip = 0;;) switch (_fun79962_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 10;
                var3 = var6[var3];
                var5 = undefined;
                var7 = var4.bind(var5)(var3);
                var4 = var7.useStateFromStores;
                var8 = _closure1_slot5;
                var3 = new Array(1);
                var3[0] = var8;
                var0 = function() { // Environment: var0
                    var3 = _closure1_slot5;
                    var2 = var3.can;
                    var0 = _closure1_slot9;
                    var1 = var0.ADMINISTRATOR;
                    var0 = _closure2_slot0;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var0 = var4.bind(var7)(var3, var0);
                var4 = _closure1_slot1;
                var3 = 13;
                var3 = var6[var3];
                var4 = var4.bind(var5)(var3);
                var3 = var4.extractTimestamp;
                var2 = var2.id;
                var2 = var3.bind(var4)(var2);
                var3 = global;
                var4 = var3.Date;
                var3 = var4.now;
                var3 = var3.bind(var4)();
                var1 = _closure1_slot8;
                var1 = var3 - var1;
                var1 = var2 < var1;
                if (!var0) {
                    _fun79962_ip = 131;
                    continue _fun79962
                }
            case 128:
                var0 = !var1;
            case 131:
                return var0;
        }
    };
    var2.useIsEligibleForGuildProgress = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1662, 1410, 3050, 10143, 10144, 660, 3237, 10145, 1307, 10146, 566, 10155, 1234, 21, 2]);