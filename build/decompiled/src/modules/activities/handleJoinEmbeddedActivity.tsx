// modules/activities/handleJoinEmbeddedActivity.tsx
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
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun63962: for (var _fun63962_ip = 0;;) switch (_fun63962_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun63962_ip = 932;
                            continue _fun63962
                        }
                    case 13:
                        var21 = var1.applicationId;
                        var22 = var1.activityChannelId;
                        var18 = var1.locationObject;
                        var19 = var1.analyticsLocations;
                        var17 = var1.componentId;
                        var16 = var1.sectionName;
                        var15 = var1.source;
                        var14 = var1.inviterUserId;
                        var13 = var1.customId;
                        var12 = var1.referrerId;
                        var5 = undefined;
                        SaveGenerator(address = 77);
                    case 75:
                        return var5;
                    case 77:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun63962_ip = 929;
                            continue _fun63962
                        }
                    case 86:
                        var4 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var2 = 8;
                        var2 = var6[var2];
                        var2 = var4.bind(var5)(var2);
                        var20 = var2.bind(var5)();
                        var4 = _closure1_slot5;
                        var2 = var4.getChannel;
                        var23 = var2.bind(var4)(var22);
                        var9 = null;
                        var2 = var9 == var23;
                        var4 = undefined;
                        if (var2) {
                            _fun63962_ip = 148;
                            continue _fun63962
                        }
                    case 138:
                        var2 = var23.getGuildId;
                        var4 = var2.bind(var23)();
                    case 148:
                        var6 = _closure1_slot7;
                        var2 = var6.getCurrentUser;
                        var24 = var2.bind(var6)();
                        if (!(var9 != var24)) {
                            _fun63962_ip = 924;
                            continue _fun63962
                        }
                    case 168:
                        if (!(var9 != var23)) {
                            _fun63962_ip = 900;
                            continue _fun63962
                        }
                    case 175:
                        if (!(var9 != var4)) {
                            _fun63962_ip = 187;
                            continue _fun63962
                        }
                    case 179:
                        var2 = '';
                        if (!(var2 === var4)) {
                            _fun63962_ip = 203;
                            continue _fun63962
                        }
                    case 187:
                        var2 = var23.isPrivate;
                        var2 = var2.bind(var23)();
                        if (!var2) {
                            _fun63962_ip = 900;
                            continue _fun63962
                        }
                    case 203:
                        if (!(var9 != var22)) {
                            _fun63962_ip = 900;
                            continue _fun63962
                        }
                    case 210:
                        var6 = _closure1_slot8;
                        var2 = var6.getCurrentEmbeddedActivity;
                        var2 = var2.bind(var6)();
                        var7 = var9 == var2;
                        var6 = undefined;
                        if (var7) {
                            _fun63962_ip = 238;
                            continue _fun63962
                        }
                    case 233:
                        var6 = var2.applicationId;
                    case 238:
                        var6 = var9 != var6;
                        var11 = undefined;
                        if (!var6) {
                            _fun63962_ip = 276;
                            continue _fun63962
                        }
                    case 247:
                        var8 = _closure1_slot4;
                        var7 = var8.getApplication;
                        var10 = var9 == var2;
                        var6 = undefined;
                        if (var10) {
                            _fun63962_ip = 271;
                            continue _fun63962
                        }
                    case 266:
                        var6 = var2.applicationId;
                    case 271:
                        var11 = var7.bind(var8)(var6);
                    case 276:
                        var7 = _closure1_slot6;
                        var6 = var7.getVoiceChannelId;
                        var6 = var6.bind(var7)();
                        if (!(var6 === var22)) {
                            _fun63962_ip = 364;
                            continue _fun63962
                        }
                    case 294:
                        if (!(var9 != var2)) {
                            _fun63962_ip = 364;
                            continue _fun63962
                        }
                    case 298:
                        var6 = var2.applicationId;
                        if (!(var6 === var21)) {
                            _fun63962_ip = 364;
                            continue _fun63962
                        }
                    case 307:
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var6 = 9;
                        var6 = var8[var6];
                        var8 = var7.bind(var5)(var6);
                        var7 = var8.getEmbeddedActivityLocationChannelId;
                        var6 = var2.location;
                        var7 = var7.bind(var8)(var6);
                        var8 = _closure1_slot6;
                        var6 = var8.getVoiceChannelId;
                        var6 = var6.bind(var8)();
                        if (!(var7 !== var6)) {
                            _fun63962_ip = 845;
                            continue _fun63962
                        }
                    case 364:
                        var7 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var6 = 11;
                        var6 = var8[var6];
                        var6 = var7.bind(var5)(var6);
                        var6 = var6.bind(var5)(var21, var22);
                        SaveGenerator(address = 394);
                    case 392:
                        return var6;
                    case 394:
                        ResumeGenerator(result_out_reg = 6, return_bool_out_reg = 7);
                        if (var7) {
                            _fun63962_ip = 842;
                            continue _fun63962
                        }
                    case 403:
                        var8 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var7 = 12;
                        var7 = var10[var7];
                        var10 = var8.bind(var5)(var7);
                        var8 = var10.confirmActivityLaunchChecks;
                        var7 = {};
                        var7.applicationId = var21;
                        var7.application = var6;
                        var7.channel = var23;
                        var7.currentEmbeddedApplication = var11;
                        var7.embeddedActivitiesManager = var20;
                        var7.user = var24;
                        var7 = var8.bind(var10)(var7);
                        SaveGenerator(address = 466);
                    case 464:
                        return var7;
                    case 466:
                        ResumeGenerator(result_out_reg = 7, return_bool_out_reg = 8);
                        if (var8) {
                            _fun63962_ip = 839;
                            continue _fun63962
                        }
                    case 475:
                        if (var7) {
                            _fun63962_ip = 483;
                            continue _fun63962
                        }
                    case 478:
                        var8 = false;
                        return var8;
                    case 483:
                        if (!(var9 == var23)) {
                            _fun63962_ip = 499;
                            continue _fun63962
                        }
                    case 487:
                        if (!(var9 == var23)) {
                            _fun63962_ip = 659;
                            continue _fun63962
                        }
                    case 494:
                        var8 = false;
                        return var8;
                    case 499:
                        var10 = _closure1_slot1;
                        var24 = _closure1_slot2;
                        var8 = 13;
                        var8 = var24[var8];
                        var10 = var10.bind(var5)(var8);
                        var8 = var23.id;
                        var10 = var10.bind(var5)(var8);
                        var25 = _closure1_slot9;
                        var24 = var25.includes;
                        var8 = var23.type;
                        var8 = var24.bind(var25)(var8);
                        if (var10) {
                            _fun63962_ip = 593;
                            continue _fun63962
                        }
                    case 551:
                        var24 = _closure1_slot0;
                        var25 = _closure1_slot2;
                        var10 = 15;
                        var10 = var25[var10];
                        var24 = var24.bind(var5)(var10);
                        var10 = var24.isActivitiesInTextEnabled;
                        var10 = var10.bind(var24)(var23);
                        if (!var10) {
                            _fun63962_ip = 588;
                            continue _fun63962
                        }
                    case 585:
                        if (var8) {
                            _fun63962_ip = 659;
                            continue _fun63962
                        }
                    case 588:
                        var8 = false;
                        return var8;
                    case 593:
                        var10 = _closure1_slot1;
                        var24 = _closure1_slot2;
                        var8 = 14;
                        var8 = var24[var8];
                        var10 = var10.bind(var5)(var8);
                        var8 = {};
                        var23 = var23.id;
                        var8.channelId = var23;
                        var11 = var9 != var11;
                        var8.bypassChangeModal = var11;
                        var8 = var10.bind(var5)(var8);
                        SaveGenerator(address = 642);
                    case 640:
                        return var8;
                    case 642:
                        ResumeGenerator(result_out_reg = 8, return_bool_out_reg = 10);
                        if (var10) {
                            _fun63962_ip = 836;
                            continue _fun63962
                        }
                    case 651:
                        if (var8) {
                            _fun63962_ip = 659;
                            continue _fun63962
                        }
                    case 654:
                        var10 = false;
                        return var10;
                    case 659:
                        if (!(var9 != var22)) {
                            _fun63962_ip = 688;
                            continue _fun63962
                        }
                    case 663:
                        var11 = _closure1_slot1;
                        var23 = _closure1_slot2;
                        var10 = 16;
                        var10 = var23[var10];
                        var10 = var11.bind(var5)(var10);
                        var10 = var10.bind(var5)(var22);
                    case 688:
                        if (!(var9 != var2)) {
                            _fun63962_ip = 728;
                            continue _fun63962
                        }
                    case 692:
                        var10 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var9 = 17;
                        var9 = var11[var9];
                        var11 = var10.bind(var5)(var9);
                        var10 = var11.maybeDisconnectFromCurrentActivity;
                        var9 = var2.location;
                        var9 = var10.bind(var11)(var9);
                    case 728:
                        var10 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var9 = 17;
                        var9 = var11[var9];
                        var11 = var10.bind(var5)(var9);
                        var10 = var11.runPrimaryAppCommandOrJoinEmbeddedActivity;
                        var9 = {};
                        var9.channelId = var22;
                        var9.applicationId = var21;
                        var21 = false;
                        var9.isStart = var21;
                        var9.embeddedActivitiesManager = var20;
                        var9.analyticsLocations = var19;
                        var9.locationObject = var18;
                        var9.componentId = var17;
                        var9.sectionName = var16;
                        var9.source = var15;
                        var9.inviterUserId = var14;
                        var9.customId = var13;
                        var9.referrerId = var12;
                        var9 = var10.bind(var11)(var9);
                        SaveGenerator(address = 824);
                    case 822:
                        return var9;
                    case 824:
                        ResumeGenerator(result_out_reg = 9, return_bool_out_reg = 10);
                        if (var10) {
                            _fun63962_ip = 833;
                            continue _fun63962
                        }
                    case 830:
                        return var9;
                    case 833:
                        return var9;
                    case 836:
                        return var8;
                    case 839:
                        return var7;
                    case 842:
                        return var6;
                    case 845:
                        var6 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var3 = 10;
                        var3 = var7[var3];
                        var3 = var6.bind(var5)(var3);
                        var2 = var2.location;
                        var2 = var3.bind(var5)(var4, var2);
                        var2 = global;
                        var4 = var2.Promise;
                        var3 = var4.resolve;
                        var2 = true;
                        var2 = var3.bind(var4)(var2);
                        return var2;
                    case 900:
                        var2 = global;
                        var4 = var2.Promise;
                        var3 = var4.resolve;
                        var2 = false;
                        var2 = var3.bind(var4)(var2);
                        return var2;
                    case 924:
                        var2 = false;
                        return var2;
                    case 929:
                        return var1;
                    case 932:
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.SUPPORTED_ACTIVITY_IN_TEXT_CHANNEL_TYPES;
    var _closure1_slot9 = var3;
    var3 = 18;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/activities/handleJoinEmbeddedActivity.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 7;
        var2 = var6[var1];
        var4 = undefined;
        var3 = var5.bind(var4)(var2);
        var2 = var3.wrapPreemptiveActivityPopout;
        var1 = var6[var1];
        var4 = var5.bind(var4)(var1);
        var1 = var4.shouldOpenActivityInPopoutWindow;
        var1 = var1.bind(var4)();
        var0 = function() { // Environment: var0
            var2 = _closure2_slot0;
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
            var0 = undefined;
            var0 = var1.bind(var0)(var2);
            return var0;
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 3413, 1372, 1661, 1613, 1371, 3416, 7926, 7904, 3040, 7927, 7929, 7931, 7918, 7938, 6781, 7939, 7874, 2]);