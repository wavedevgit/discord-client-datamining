// modules/activities/utils/activityLaunchErrorUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var6;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun64143: for (var _fun64143_ip = 0;;) switch (_fun64143_ip) {
                    case 0:
                        StartGenerator();
                        var10 = arg0;
                        var14 = arg1;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun64143_ip = 1278;
                            continue _fun64143
                        }
                    case 16:
                        var6 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var13 = 3;
                        var3 = var1[var13];
                        var8 = undefined;
                        var3 = var6.bind(var8)(var3);
                        var5 = var3.intl;
                        var4 = var5.string;
                        var3 = var1[var13];
                        var3 = var6.bind(var8)(var3);
                        var3 = var3.t;
                        var3 = var3["IOy+I5"];
                        var11 = var4.bind(var5)(var3);
                        var3 = _closure1_slot1;
                        var17 = 4;
                        var1 = var1[var17];
                        var1 = var3.bind(var8)(var1);
                        var1 = var10 instanceof var1;
                        if (var1) {
                            _fun64143_ip = 827;
                            continue _fun64143
                        }
                    case 102:
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var1 = 7;
                        var1 = var4[var1];
                        var1 = var3.bind(var8)(var1);
                        var3 = var10 instanceof var1;
                        var1 = _closure1_slot7;
                        if (var3) {
                            _fun64143_ip = 749;
                            continue _fun64143
                        }
                    case 136:
                        var15 = var1.ApiError;
                        var12 = var10.status;
                        var9 = var10.code;
                        var16 = var10.code;
                        var3 = _closure1_slot6;
                        var3 = var3.INVALID_ACTIVITY_LAUNCH_NO_ACCESS;
                        if (!(var3 !== var16)) {
                            _fun64143_ip = 683;
                            continue _fun64143
                        }
                    case 174:
                        var3 = _closure1_slot6;
                        var3 = var3.INVALID_ACTIVITY_LAUNCH_PREMIUM_TIER;
                        if (!(var3 !== var16)) {
                            _fun64143_ip = 615;
                            continue _fun64143
                        }
                    case 191:
                        var3 = _closure1_slot6;
                        var3 = var3.INVALID_PERMISSIONS;
                        if (!(var3 !== var16)) {
                            _fun64143_ip = 549;
                            continue _fun64143
                        }
                    case 208:
                        var3 = _closure1_slot6;
                        var3 = var3.INVALID_ACTIVITY_LAUNCH_AFK_CHANNEL;
                        if (!(var3 !== var16)) {
                            _fun64143_ip = 483;
                            continue _fun64143
                        }
                    case 225:
                        var3 = _closure1_slot6;
                        var3 = var3.INVALID_ACTIVITY_LAUNCH_AGE_GATED;
                        if (!(var3 !== var16)) {
                            _fun64143_ip = 417;
                            continue _fun64143
                        }
                    case 242:
                        var3 = _closure1_slot6;
                        var3 = var3.INVALID_ACTIVITY_LAUNCH_DEV_PREVIEW_GUILD_SIZE;
                        if (!(var3 !== var16)) {
                            _fun64143_ip = 351;
                            continue _fun64143
                        }
                    case 256:
                        var3 = _closure1_slot6;
                        var7 = var3.ACTIVITY_CONFIGURATION_DOES_NOT_SUPPORT_PLATFORM;
                        var5 = var15;
                        var4 = var12;
                        var3 = var9;
                        var6 = var11;
                        if (!(var7 === var16)) {
                            _fun64143_ip = 1251;
                            continue _fun64143
                        }
                    case 285:
                        var19 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var16 = var7[var13];
                        var16 = var19.bind(var8)(var16);
                        var18 = var16.intl;
                        var16 = var18.string;
                        var7 = var7[var13];
                        var7 = var19.bind(var8)(var7);
                        var7 = var7.t;
                        var7 = var7.uGDCcw;
                        var6 = var16.bind(var18)(var7);
                        var5 = var15;
                        var4 = var12;
                        var3 = var9;
                        _fun64143_ip = 1251;
                        continue _fun64143;
                    case 351:
                        var19 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var16 = var7[var13];
                        var16 = var19.bind(var8)(var16);
                        var18 = var16.intl;
                        var16 = var18.string;
                        var7 = var7[var13];
                        var7 = var19.bind(var8)(var7);
                        var7 = var7.t;
                        var7 = var7.RvkXdb;
                        var6 = var16.bind(var18)(var7);
                        var5 = var15;
                        var4 = var12;
                        var3 = var9;
                        _fun64143_ip = 1251;
                        continue _fun64143;
                    case 417:
                        var19 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var16 = var7[var13];
                        var16 = var19.bind(var8)(var16);
                        var18 = var16.intl;
                        var16 = var18.string;
                        var7 = var7[var13];
                        var7 = var19.bind(var8)(var7);
                        var7 = var7.t;
                        var7 = var7["4WuFRE"];
                        var6 = var16.bind(var18)(var7);
                        var5 = var15;
                        var4 = var12;
                        var3 = var9;
                        _fun64143_ip = 1251;
                        continue _fun64143;
                    case 483:
                        var19 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var16 = var7[var13];
                        var16 = var19.bind(var8)(var16);
                        var18 = var16.intl;
                        var16 = var18.string;
                        var7 = var7[var13];
                        var7 = var19.bind(var8)(var7);
                        var7 = var7.t;
                        var7 = var7.j29zCr;
                        var6 = var16.bind(var18)(var7);
                        var5 = var15;
                        var4 = var12;
                        var3 = var9;
                        _fun64143_ip = 1251;
                        continue _fun64143;
                    case 549:
                        var19 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var16 = var7[var13];
                        var16 = var19.bind(var8)(var16);
                        var18 = var16.intl;
                        var16 = var18.string;
                        var7 = var7[var13];
                        var7 = var19.bind(var8)(var7);
                        var7 = var7.t;
                        var7 = var7.hHGrWz;
                        var6 = var16.bind(var18)(var7);
                        var5 = var15;
                        var4 = var12;
                        var3 = var9;
                        _fun64143_ip = 1251;
                        continue _fun64143;
                    case 615:
                        var19 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var16 = var7[var13];
                        var16 = var19.bind(var8)(var16);
                        var18 = var16.intl;
                        var16 = var18.string;
                        var7 = var7[var13];
                        var7 = var19.bind(var8)(var7);
                        var7 = var7.t;
                        var7 = var7.zxv7EF;
                        var6 = var16.bind(var18)(var7);
                        var5 = var15;
                        var4 = var12;
                        var3 = var9;
                        _fun64143_ip = 1251;
                        continue _fun64143;
                    case 683:
                        var19 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var16 = var7[var13];
                        var16 = var19.bind(var8)(var16);
                        var18 = var16.intl;
                        var16 = var18.string;
                        var7 = var7[var13];
                        var7 = var19.bind(var8)(var7);
                        var7 = var7.t;
                        var7 = var7.GyzcrS;
                        var6 = var16.bind(var18)(var7);
                        var5 = var15;
                        var4 = var12;
                        var3 = var9;
                        _fun64143_ip = 1251;
                        continue _fun64143;
                    case 749:
                        var9 = var1.CallbackError;
                        var7 = var10.reason;
                        var12 = _closure1_slot0;
                        var15 = _closure1_slot2;
                        var1 = 8;
                        var1 = var15[var1];
                        var15 = var12.bind(var8)(var1);
                        var12 = var15.interactionCallbackErrorReason;
                        var1 = var10.reason;
                        var12 = var12.bind(var15)(var1, var14);
                        var15 = null;
                        var1 = var11;
                        if (!(var15 != var12)) {
                            _fun64143_ip = 811;
                            continue _fun64143
                        }
                    case 808:
                        var1 = var12;
                    case 811:
                        var6 = var1;
                        var5 = var9;
                        var4 = undefined;
                        var3 = var7;
                        _fun64143_ip = 1251;
                        continue _fun64143;
                    case 827:
                        var1 = _closure1_slot7;
                        var9 = var1.ClientError;
                        var7 = var10.reason;
                        var12 = _closure1_slot4;
                        var1 = var12.getFetchState;
                        var15 = var1.bind(var12)();
                        var12 = _closure1_slot0;
                        var16 = _closure1_slot2;
                        var1 = 5;
                        var1 = var16[var1];
                        var1 = var12.bind(var8)(var1);
                        var12 = var1.DeveloperMode;
                        var1 = var12.getSetting;
                        var1 = var1.bind(var12)();
                        if (!var1) {
                            _fun64143_ip = 910;
                            continue _fun64143
                        }
                    case 896:
                        var12 = _closure1_slot5;
                        var12 = var12.LOADED;
                        var1 = var15 !== var12;
                    case 910:
                        if (!var1) {
                            _fun64143_ip = 956;
                            continue _fun64143
                        }
                    case 913:
                        var12 = _closure1_slot0;
                        var15 = _closure1_slot2;
                        var1 = 6;
                        var1 = var15[var1];
                        var12 = var12.bind(var8)(var1);
                        var1 = var12.fetchDeveloperApplications;
                        var1 = var1.bind(var12)();
                        SaveGenerator(address = 947);
                    case 945:
                        return var1;
                    case 947:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 12);
                        if (var12) {
                            _fun64143_ip = 1275;
                            continue _fun64143
                        }
                    case 956:
                        var15 = var10.reason;
                        var16 = _closure1_slot1;
                        var12 = _closure1_slot2;
                        var12 = var12[var17];
                        var12 = var16.bind(var8)(var12);
                        var12 = var12.Reasons;
                        var12 = var12.PRIMARY_APP_COMMAND_NOT_FOUND;
                        if (!(var12 !== var15)) {
                            _fun64143_ip = 1160;
                            continue _fun64143
                        }
                    case 998:
                        var16 = _closure1_slot1;
                        var12 = _closure1_slot2;
                        var12 = var12[var17];
                        var12 = var16.bind(var8)(var12);
                        var12 = var12.Reasons;
                        var12 = var12.INVALID_CHANNEL;
                        if (!(var12 !== var15)) {
                            _fun64143_ip = 1098;
                            continue _fun64143
                        }
                    case 1031:
                        var16 = _closure1_slot1;
                        var12 = _closure1_slot2;
                        var12 = var12[var17];
                        var12 = var16.bind(var8)(var12);
                        var12 = var12.Reasons;
                        var12 = var12.LEGACY_LAUNCH_CLIENT_VALIDATION_FAILED;
                        var5 = var9;
                        var4 = undefined;
                        var3 = var7;
                        var6 = var11;
                        if (!(var12 === var15)) {
                            _fun64143_ip = 1251;
                            continue _fun64143
                        }
                    case 1078:
                        var4 = var10.detailCode;
                        var5 = var9;
                        var3 = var7;
                        var6 = var11;
                        _fun64143_ip = 1251;
                        continue _fun64143;
                    case 1098:
                        var16 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var12 = var10[var13];
                        var12 = var16.bind(var8)(var12);
                        var15 = var12.intl;
                        var12 = var15.string;
                        var10 = var10[var13];
                        var10 = var16.bind(var8)(var10);
                        var10 = var10.t;
                        var10 = var10.j29zCr;
                        var6 = var12.bind(var15)(var10);
                        var5 = var9;
                        var4 = undefined;
                        var3 = var7;
                        _fun64143_ip = 1251;
                        continue _fun64143;
                    case 1160:
                        var12 = _closure1_slot4;
                        var10 = var12.inDevModeForApplication;
                        var10 = var10.bind(var12)(var14);
                        var5 = var9;
                        var4 = undefined;
                        var3 = var7;
                        var6 = var11;
                        if (!var10) {
                            _fun64143_ip = 1251;
                            continue _fun64143
                        }
                    case 1189:
                        var12 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var10 = var2[var13];
                        var10 = var12.bind(var8)(var10);
                        var11 = var10.intl;
                        var10 = var11.string;
                        var2 = var2[var13];
                        var2 = var12.bind(var8)(var2);
                        var2 = var2.t;
                        var2 = var2.hXRXfz;
                        var6 = var10.bind(var11)(var2);
                        var5 = var9;
                        var4 = undefined;
                        var3 = var7;
                    case 1251:
                        var2 = {};
                        var2.message = var6;
                        var2.errorType = var5;
                        var2.errorStatus = var4;
                        var2.errorCode = var3;
                        return var2;
                    case 1275:
                        return var1;
                    case 1278:
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
    var9 = 0;
    var3 = var6[var9];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var8 = 1;
    var3 = var6[var8];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = var6[var8];
    var3 = var5.bind(var0)(var3);
    var3 = var3.DevShelfFetchState;
    var _closure1_slot5 = var3;
    var7 = 2;
    var3 = var6[var7];
    var3 = var5.bind(var0)(var3);
    var3 = var3.AbortCodes;
    var _closure1_slot6 = var3;
    var3 = {};
    var3.ClientError = var9;
    var4 = 'ClientError';
    var3[var9] = var4;
    var3.CallbackError = var8;
    var4 = 'CallbackError';
    var3[var8] = var4;
    var3.ApiError = var7;
    var4 = 'ApiError';
    var3[var7] = var4;
    var _closure1_slot7 = var3;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/utils/activityLaunchErrorUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2.ActivityLaunchFailErrorType = var3;
    var1 = function() {
        var0 = undefined;
        var3 = _closure1_slot8;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.getActivityLaunchErrorInfo = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 7243, 660, 1234, 7980, 1348, 7934, 6820, 6817, 2]);