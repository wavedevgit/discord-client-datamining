// modules/ads/native/AdUserActionCreators.android.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var0 = function() { // Original name: _fetchAdUser, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot2;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun46937: for (var _fun46937_ip = 0;;) switch (_fun46937_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun46937_ip = 815;
                            continue _fun46937
                        }
                    case 10:
                        var9 = arg0;
                        var1 = undefined;
                        var3 = undefined;
                        var11 = undefined;
                        var4 = _closure1_slot3;
                        var4 = var4.adUser;
                        var15 = null;
                        if (!(var15 != var4)) {
                            _fun46937_ip = 166;
                            continue _fun46937
                        }
                    case 41:
                        var4 = _closure1_slot3;
                        var4 = var4.adUser;
                        var4 = var4.advertisingId;
                        if (!(var15 != var4)) {
                            _fun46937_ip = 166;
                            continue _fun46937
                        }
                    case 61:
                        var4 = _closure1_slot3;
                        var12 = var4.adUser;
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot1;
                        var4 = 3;
                        var4 = var7[var4];
                        var8 = var6.bind(var1)(var4);
                        var7 = var8.track;
                        var4 = _closure1_slot4;
                        var6 = var4.AD_IDENTIFIER_FETCHED;
                        var4 = {};
                        var10 = true;
                        var4.has_advertising_id = var10;
                        var12 = var12.advertisingId;
                        var4.android_advertising_id = var12;
                        var12 = var9;
                        var4.location = var12;
                        var4.success = var10;
                        var10 = _closure1_slot3;
                        var10 = var10.lastFetchedAt;
                        var4.last_fetched_timestamp = var10;
                        var4 = var7.bind(var8)(var6, var4);
                        _fun46937_ip = 812;
                        continue _fun46937;
                    case 166:
                        var10 = global;
                        var6 = var10.performance;
                        var4 = var6.now;
                        var3 = var4.bind(var6)();
                    case 183: // try_start_0
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot1;
                        var8 = 4;
                        var4 = var7[var8];
                        var13 = var6.bind(var1)(var4);
                        var12 = var13.dispatch;
                        var4 = {};
                        var14 = 'FETCH_AD_USER_START';
                        var4.type = var14;
                        var4 = var12.bind(var13)(var4);
                        var4 = 5;
                        var4 = var7[var4];
                        var6 = var6.bind(var1)(var4);
                        var4 = var6.getGoogleAdvertisingId;
                        var4 = var4.bind(var6)();
                        SaveGenerator(address = 253);
                    case 251:
                        return var4;
                    case 253:
                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 6);
                        if (var6) {
                            _fun46937_ip = 539;
                            continue _fun46937
                        }
                    case 262:
                        var11 = var4;
                        var7 = var10.performance;
                        var6 = var7.now;
                        var7 = var6.bind(var7)();
                        var6 = var3;
                        var19 = var7 - var6;
                        var7 = _closure1_slot0;
                        var12 = _closure1_slot1;
                        var6 = 3;
                        var13 = var12[var6];
                        var18 = var7.bind(var1)(var13);
                        var17 = var18.track;
                        var13 = _closure1_slot4;
                        var16 = var13.AD_USER_FETCH_DURATION;
                        var13 = {};
                        var14 = _closure1_slot5;
                        var14 = var14.ANDROID;
                        var13.platform = var14;
                        var14 = true;
                        var13.success = var14;
                        var13.duration_ms = var19;
                        var19 = var4.googleAdvertisingId;
                        var19 = var15 != var19;
                        var13.has_advertising_id = var19;
                        var19 = var4.isLimitAdTrackingEnabled;
                        var13.is_limit_ad_tracking_enabled = var19;
                        var13 = var17.bind(var18)(var16, var13);
                        var6 = var12[var6];
                        var13 = var7.bind(var1)(var6);
                        var12 = var13.track;
                        var6 = _closure1_slot4;
                        var7 = var6.AD_IDENTIFIER_FETCHED;
                        var6 = {};
                        var16 = var4.googleAdvertisingId;
                        var16 = var15 != var16;
                        var6.has_advertising_id = var16;
                        var16 = var4.googleAdvertisingId;
                        var16 = var15 != var16;
                        var15 = null;
                        if (!var16) {
                            _fun46937_ip = 450;
                            continue _fun46937
                        }
                    case 441:
                        var16 = var11;
                        var15 = var16.googleAdvertisingId;
                    case 450:
                        var6.android_advertising_id = var15;
                        var15 = var9;
                        var6.location = var15;
                        var6.success = var14;
                        var6 = var12.bind(var13)(var7, var6);
                        var7 = _closure1_slot0;
                        var6 = _closure1_slot1;
                        var6 = var6[var8];
                        var8 = var7.bind(var1)(var6);
                        var7 = var8.dispatch;
                        var6 = {};
                        var12 = 'FETCH_AD_USER_SUCCESS';
                        var6.type = var12;
                        var12 = var11.googleAdvertisingId;
                        var6.advertisingId = var12;
                        var11 = var11.isLimitAdTrackingEnabled;
                        var6.isLimitAdTrackingEnabled = var11;
                        var6 = var7.bind(var8)(var6);
                    case 534: // try_end0
                        _fun46937_ip = 812;
                        continue _fun46937;
                    case 539:
                        return var4;
                    case 542: // catch_target0
                        CatchBlockStart(arg_register = 12);
                        var2 = var12;
                        var6 = var10.performance;
                        var4 = var6.now;
                        var4 = var4.bind(var6)();
                        var11 = var4 - var3;
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot1;
                        var6 = 3;
                        var3 = var3[var6];
                        var8 = var4.bind(var1)(var3);
                        var7 = var8.track;
                        var3 = _closure1_slot4;
                        var4 = var3.AD_USER_FETCH_DURATION;
                        var3 = {};
                        var13 = _closure1_slot5;
                        var13 = var13.ANDROID;
                        var3.platform = var13;
                        var13 = false;
                        var3.success = var13;
                        var3.duration_ms = var11;
                        var11 = var10.Error;
                        var11 = var12 instanceof var11;
                        if (var11) {
                            _fun46937_ip = 659;
                            continue _fun46937
                        }
                    case 643:
                        var11 = var10.String;
                        var10 = var2;
                        var10 = var11.bind(var1)(var10);
                        _fun46937_ip = 667;
                        continue _fun46937;
                    case 659:
                        var11 = var2;
                        var10 = var11.message;
                    case 667:
                        var3.error_message = var10;
                        var3 = var7.bind(var8)(var4, var3);
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot1;
                        var6 = var4[var6];
                        var8 = var3.bind(var1)(var6);
                        var7 = var8.track;
                        var5 = _closure1_slot4;
                        var6 = var5.AD_IDENTIFIER_FETCHED;
                        var5 = {
                            'has_advertising_id': false,
                            'location': null,
                            'success': false
                        };
                        var5.location = var9;
                        var5 = var7.bind(var8)(var6, var5);
                        var5 = 6;
                        var5 = var4[var5];
                        var7 = var3.bind(var1)(var5);
                        var6 = var7.captureException;
                        var5 = var2;
                        var2 = {};
                        var8 = {};
                        var9 = 'FETCH_AD_USER';
                        var8.source = var9;
                        var2.tags = var8;
                        var2 = var6.bind(var7)(var5, var2);
                        var2 = 4;
                        var2 = var4[var2];
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var5 = 'FETCH_AD_USER_FAILURE';
                        var2.type = var5;
                        var2 = var3.bind(var4)(var2);
                    case 812:
                        return var1;
                    case 815:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot6 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot6 = var0;
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
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AnalyticEvents;
    var _closure1_slot4 = var6;
    var3 = var3.Platforms;
    var _closure1_slot5 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/ads/native/AdUserActionCreators.android.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Original name: fetchAdUser, environment: var1
        var0 = undefined;
        var3 = _closure1_slot6;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.fetchAdUser = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 5228, 660, 795, 806, 5231, 1207, 2]);