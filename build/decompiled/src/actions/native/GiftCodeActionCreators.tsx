// actions/native/GiftCodeActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var9 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var7;
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot7;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun56741: for (var _fun56741_ip = 0;;) switch (_fun56741_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun56741_ip = 654;
                            continue _fun56741
                        }
                    case 13:
                        var13 = var1.code;
                        var6 = var1.options;
                        var2 = undefined;
                        if (!(var6 === var2)) {
                            _fun56741_ip = 36;
                            continue _fun56741
                        }
                    case 29:
                        var6 = _closure1_slot6;
                    case 36:
                        var9 = var1.onRedeemed;
                        var5 = var1.onError;
                        var16 = undefined;
                        var17 = undefined;
                        var10 = undefined;
                        var4 = undefined;
                        SaveGenerator(address = 60);
                    case 58:
                        return var2;
                    case 60:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun56741_ip = 651;
                            continue _fun56741
                        }
                    case 69:
                        var8 = _closure1_slot1;
                        var11 = _closure1_slot2;
                        var7 = 2;
                        var7 = var11[var7];
                        var12 = var8.bind(var2)(var7);
                        var11 = var12.getCurrentConfig;
                        var8 = {};
                        var7 = 'redeemGiftCode';
                        var8.location = var7;
                        var7 = {};
                        var14 = false;
                        var7.autoTrackExposure = var14;
                        var7 = var11.bind(var12)(var8, var7);
                        var7 = var7.paymentsBlocked;
                        if (var7) {
                            _fun56741_ip = 624;
                            continue _fun56741
                        }
                    case 135:
                        var11 = var6.channelId;
                        var7 = null;
                        var8 = null;
                        if (!(var2 !== var11)) {
                            _fun56741_ip = 151;
                            continue _fun56741
                        }
                    case 148:
                        var8 = var11;
                    case 151:
                        var16 = var8;
                        var8 = var6.paymentSource;
                        var6 = null;
                        if (!(var2 !== var8)) {
                            _fun56741_ip = 169;
                            continue _fun56741
                        }
                    case 166:
                        var6 = var8;
                    case 169:
                        var17 = var6;
                        var11 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var6 = 4;
                        var8 = var8[var6];
                        var12 = var11.bind(var2)(var8);
                        var11 = var12.dispatch;
                        var8 = {};
                        var15 = 'GIFT_CODE_REDEEM';
                        var8.type = var15;
                        var15 = var13;
                        var8.code = var15;
                        var8 = var11.bind(var12)(var8);
                    case 219: // try_start_0
                        var11 = _closure1_slot0;
                        var12 = _closure1_slot2;
                        var8 = 5;
                        var8 = var12[var8];
                        var8 = var11.bind(var2)(var8);
                        var12 = var8.HTTP;
                        var11 = var12.post;
                        var8 = {};
                        var19 = _closure1_slot4;
                        var18 = var19.GIFT_CODE_REDEEM;
                        var15 = var13;
                        var15 = var18.bind(var19)(var15);
                        var8.url = var15;
                        var15 = {};
                        var15.channel_id = var16;
                        var16 = var17;
                        var18 = var7 == var16;
                        var16 = undefined;
                        if (var18) {
                            _fun56741_ip = 297;
                            continue _fun56741
                        }
                    case 292:
                        var16 = var17.id;
                    case 297:
                        var15.payment_source_id = var16;
                        var8.body = var15;
                        var15 = true;
                        var8.oldFormErrors = var15;
                        var8.rejectWithError = var14;
                        var8 = var11.bind(var12)(var8);
                        SaveGenerator(address = 326);
                    case 324:
                        return var8;
                    case 326:
                        ResumeGenerator(result_out_reg = 8, return_bool_out_reg = 11);
                        if (var11) {
                            _fun56741_ip = 457;
                            continue _fun56741
                        }
                    case 335:
                        var10 = var8;
                        var12 = _closure1_slot1;
                        var14 = _closure1_slot2;
                        var11 = var14[var6];
                        var16 = var12.bind(var2)(var11);
                        var15 = var16.dispatch;
                        var11 = {};
                        var17 = 'GIFT_CODE_REDEEM_SUCCESS';
                        var11.type = var17;
                        var17 = var13;
                        var11.code = var17;
                        var11 = var15.bind(var16)(var11);
                        var11 = 6;
                        var11 = var14[var11];
                        var15 = var12.bind(var2)(var11);
                        var14 = var15.track;
                        var11 = _closure1_slot5;
                        var12 = var11.OPEN_MODAL;
                        var11 = {};
                        var16 = 'gift_accept';
                        var11.type = var16;
                        var11 = var14.bind(var15)(var12, var11);
                        var11 = var9;
                        if (!(var7 != var11)) {
                            _fun56741_ip = 440;
                            continue _fun56741
                        }
                    case 436:
                        var9 = var9.bind(var2)();
                    case 440:
                        var9 = {};
                        var11 = var13;
                        var9.code = var11;
                        var9.entitlement = var10;
                    case 454: // try_end0
                        return var9;
                    case 457:
                        return var8;
                    case 460: // catch_target0
                        CatchBlockStart(arg_register = 11);
                        var10 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var8 = 7;
                        var8 = var9[var8];
                        var8 = var10.bind(var2)(var8);
                        var8 = var8.BillingError;
                        var10 = var8.prototype;
                        var10 = Object.create(var10, {
                            constructor: {
                                value: var8
                            }
                        });
                        var22 = var10;
                        var21 = var11;
                        var8 = new var22[var8](var21, var20);
                        var12 = var8 instanceof Object ? var8 : var10;
                        var4 = var12;
                        var8 = _closure1_slot1;
                        var6 = var9[var6];
                        var11 = var8.bind(var2)(var6);
                        var10 = var11.dispatch;
                        var6 = {};
                        var14 = 'GIFT_CODE_REDEEM_FAILURE';
                        var6.type = var14;
                        var6.code = var13;
                        var6.error = var12;
                        var6 = var10.bind(var11)(var6);
                        var6 = 6;
                        var6 = var9[var6];
                        var10 = var8.bind(var2)(var6);
                        var9 = var10.track;
                        var6 = _closure1_slot5;
                        var8 = var6.OPEN_MODAL;
                        var6 = {
                            'type': 'gift_accept',
                            'location': null
                        };
                        var6 = var9.bind(var10)(var8, var6);
                        var6 = var5;
                        if (!(var7 != var6)) {
                            _fun56741_ip = 622;
                            continue _fun56741
                        }
                    case 611:
                        var6 = var5;
                        var5 = var4;
                        var5 = var6.bind(var2)(var5);
                    case 622:
                        throw var4;
                    case 624:
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var3 = 3;
                        var3 = var5[var3];
                        var3 = var4.bind(var2)(var3);
                        var3 = var3.bind(var2)();
                        return var2;
                    case 651:
                        return var1;
                    case 654:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
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
    var1 = function arg0() {
        var4 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 8;
        var3 = var1[var0];
        var0 = undefined;
        var5 = var4.bind(var0)(var3);
        var4 = var5.pushLazy;
        var3 = _closure1_slot0;
        var2 = 10;
        var2 = var1[var2];
        var3 = var3.bind(var0)(var2);
        var2 = 9;
        var2 = var1[var2];
        var1 = var1.paths;
        var3 = var3.bind(var0)(var2, var1);
        var2 = {};
        var1 = arg0;
        var2.code = var1;
        var1 = 'GIFT_CODE_REDEEM_MODAL_KEY';
        var1 = var4.bind(var5)(var3, var2, var1);
        return var0;
    };
    var4 = global;
    var11 = var4.Object;
    var10 = var11.defineProperty;
    var8 = {};
    var0 = true;
    var8.value = var0;
    var0 = '__esModule';
    var0 = var10.bind(var11)(var2, var0, var8);
    var0 = 0;
    var8 = var7[var0];
    var0 = undefined;
    var8 = var9.bind(var0)(var8);
    var _closure1_slot3 = var8;
    var8 = 1;
    var8 = var7[var8];
    var8 = var6.bind(var0)(var8);
    var9 = var8.Endpoints;
    var _closure1_slot4 = var9;
    var8 = var8.AnalyticEvents;
    var _closure1_slot5 = var8;
    var9 = var4.Object;
    var8 = var9.freeze;
    var4 = {};
    var4 = var8.bind(var9)(var4);
    var _closure1_slot6 = var4;
    var4 = {};
    var4.redeemGiftCode = var3;
    var4.openGiftCodeRedeemModal = var1;
    var5 = 11;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'actions/native/GiftCodeActionCreators.tsx';
    var5 = var6.bind(var7)(var5);
    var2.default = var4;
    var2.redeemGiftCode = var3;
    var2.openGiftCodeRedeemModal = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 660, 6895, 6899, 806, 507, 795, 3352, 4562, 6904, 1307, 2]);