// modules/virtual_currency/checkout/native/OrbCheckoutModal.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun86576: for (var _fun86576_ip = 0;;) switch (_fun86576_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.orbBalance;
                var1 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 4;
                var0 = var4[var0];
                var3 = undefined;
                var2 = var1.bind(var3)(var0);
                var0 = var2.useOrbCheckoutModalContext;
                var0 = var0.bind(var2)();
                var13 = var0.orbProductContext;
                var10 = var0.orbRedemptionError;
                var2 = _closure1_slot12;
                var0 = 5;
                var0 = var4[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.Stack;
                var0 = {};
                var11 = null;
                var6 = var11 != var10;
                if (!var6) {
                    _fun86576_ip = 136;
                    continue _fun86576
                }
            case 89:
                var9 = _closure1_slot11;
                var7 = _closure1_slot0;
                var12 = _closure1_slot2;
                var4 = 6;
                var4 = var12[var4];
                var4 = var7.bind(var3)(var4);
                var7 = var4.OrbCheckoutErrorCard;
                var4 = {};
                var10 = var10.message;
                var4.error = var10;
                var6 = var9.bind(var3)(var7, var4);
            case 136:
                var4 = new Array(3);
                var4[0] = var6;
                var10 = _closure1_slot11;
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var9 = 6;
                var6 = var6[var9];
                var6 = var7.bind(var3)(var6);
                var7 = var6.OrbCheckoutOrderSummary;
                var6 = {};
                var14 = var11 == var13;
                var12 = undefined;
                if (var14) {
                    _fun86576_ip = 191;
                    continue _fun86576
                }
            case 185:
                var12 = var13.product;
            case 191:
                var13 = var11 != var12;
                var11 = null;
                if (!var13) {
                    _fun86576_ip = 203;
                    continue _fun86576
                }
            case 200:
                var11 = var12;
            case 203:
                var6.product = var11;
                var6 = var10.bind(var3)(var7, var6);
                var4[1] = var6;
                var7 = _closure1_slot11;
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var9];
                var5 = var6.bind(var3)(var5);
                var6 = var5.OrbCheckoutPaymentSourceDetails;
                var5 = {};
                var5.orbBalance = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var3 = 0;
    var7 = var5[var3];
    var6 = arg3;
    var0 = undefined;
    var6 = var6.bind(var0)(var7);
    var _closure1_slot3 = var6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.useRef;
    var _closure1_slot4 = var6;
    var6 = var3.useEffect;
    var _closure1_slot5 = var6;
    var6 = var3.useCallback;
    var _closure1_slot6 = var6;
    var3 = var3.useMemo;
    var _closure1_slot7 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AnalyticEvents;
    var _closure1_slot8 = var6;
    var3 = var3.CurrencyCodes;
    var _closure1_slot9 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.InternalPaymentGateways;
    var _closure1_slot10 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot11 = var6;
    var3 = var3.jsxs;
    var _closure1_slot12 = var3;
    var3 = {};
    var6 = 'MAIN';
    var3.MAIN = var6;
    var _closure1_slot13 = var3;
    var3 = function arg0() {
        var0 = arg0;
        var8 = var0.onPress;
        var3 = _closure1_slot12;
        var6 = _closure1_slot0;
        var9 = _closure1_slot2;
        var0 = 5;
        var0 = var9[var0];
        var2 = undefined;
        var0 = var6.bind(var2)(var0);
        var1 = var0.Stack;
        var0 = {};
        var11 = _closure1_slot11;
        var5 = 6;
        var4 = var9[var5];
        var4 = var6.bind(var2)(var4);
        var10 = var4.OrbCheckoutLegalFinePrint;
        var4 = {};
        var10 = var11.bind(var2)(var10, var4);
        var4 = new Array(2);
        var4[0] = var10;
        var7 = _closure1_slot11;
        var5 = var9[var5];
        var5 = var6.bind(var2)(var5);
        var6 = var5.OrbCheckoutPurchaseButton;
        var5 = {};
        var5.onPress = var8;
        var5 = var7.bind(var2)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var _closure1_slot14 = var3;
    var3 = function arg0() {
        _fun86578: for (var _fun86578_ip = 0;;) switch (_fun86578_ip) {
            case 0:
                var1 = arg0;
                var6 = var1.startTime;
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 4;
                var1 = var7[var1];
                var3 = undefined;
                var2 = var5.bind(var3)(var1);
                var1 = var2.useOrbCheckoutModalContext;
                var1 = var1.bind(var2)();
                var4 = var1.onRedeemVirtualCurrency;
                var _closure2_slot0 = var4;
                var2 = var1.orbRedemptionError;
                var _closure2_slot1 = var2;
                var1 = function(arg0) { // Environment: var0
                    var6 = arg0;
                    var _closure3_slot0 = var6;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var0 = 4;
                    var0 = var4[var0];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var0);
                    var0 = var3.useOrbCheckoutModalContext;
                    var0 = var0.bind(var3)();
                    var8 = var0.skuId;
                    var _closure3_slot1 = var8;
                    var9 = var0.loadId;
                    var _closure3_slot2 = var9;
                    var7 = var0.analyticsLocations;
                    var _closure3_slot3 = var7;
                    var0 = var0.orbProductContext;
                    var _closure3_slot4 = var0;
                    var5 = _closure1_slot7;
                    var3 = new Array(4);
                    var3[0] = var9;
                    var3[1] = var8;
                    var3[2] = var7;
                    var3[3] = var0;
                    var0 = function() { // Environment: var1
                        _fun86580: for (var _fun86580_ip = 0;;) switch (_fun86580_ip) {
                            case 0:
                                var0 = {};
                                var1 = _closure3_slot2;
                                var0.load_id = var1;
                                var5 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var2 = 7;
                                var2 = var3[var2];
                                var3 = undefined;
                                var6 = var5.bind(var3)(var2);
                                var5 = var6.getApplicationIdForOrbSKU;
                                var2 = _closure3_slot1;
                                var5 = var5.bind(var6)(var2);
                                var0.application_id = var5;
                                var5 = _closure3_slot3;
                                var0.location_stack = var5;
                                var0.sku_id = var2;
                                var2 = _closure1_slot9;
                                var2 = var2.DISCORD_ORB;
                                var0.currency = var2;
                                var1 = _closure1_slot10;
                                var1 = var1.VIRTUAL_CURRENCY;
                                var0.payment_gateway = var1;
                                var1 = _closure3_slot4;
                                var5 = null;
                                var1 = var5 != var1;
                                if (!var1) {
                                    _fun86580_ip = 175;
                                    continue _fun86580
                                }
                            case 116:
                                var2 = {};
                                var6 = _closure3_slot4;
                                var7 = var6.orbPriceAmount;
                                var8 = var5 != var7;
                                var6 = undefined;
                                if (!var8) {
                                    _fun86580_ip = 140;
                                    continue _fun86580
                                }
                            case 137:
                                var6 = var7;
                            case 140:
                                var2.price = var6;
                                var4 = _closure3_slot4;
                                var4 = var4.orbPriceAmount;
                                var5 = var5 != var4;
                                var3 = undefined;
                                if (!var5) {
                                    _fun86580_ip = 167;
                                    continue _fun86580
                                }
                            case 164:
                                var3 = var4;
                            case 167:
                                var2.regular_price = var3;
                                var1 = var2;
                            case 175:
                                var10 = var0;
                                var9 = var1;
                                var1 = copyDataProperties(var10, var9);
                                return var0;
                        }
                    };
                    var5 = var5.bind(var4)(var0, var3);
                    var _closure3_slot5 = var5;
                    var0 = {};
                    var3 = _closure1_slot6;
                    var2 = new Array(2);
                    var2[0] = var6;
                    var2[1] = var5;
                    var1 = function(arg0, arg1) { // Environment: var1
                        _fun86581: for (var _fun86581_ip = 0;;) switch (_fun86581_ip) {
                            case 0:
                                var2 = arg0;
                                var9 = arg1;
                                var0 = global;
                                var1 = var0.Date;
                                var0 = var1.now;
                                var1 = var0.bind(var1)();
                                var0 = _closure3_slot0;
                                var7 = var1 - var0;
                                var1 = _closure1_slot8;
                                var1 = var1.PAYMENT_FLOW_STARTED;
                                if (!(var2 !== var1)) {
                                    _fun86581_ip = 446;
                                    continue _fun86581
                                }
                            case 54:
                                var1 = _closure1_slot8;
                                var1 = var1.PAYMENT_FLOW_COMPLETED;
                                if (!(var2 !== var1)) {
                                    _fun86581_ip = 379;
                                    continue _fun86581
                                }
                            case 71:
                                var1 = _closure1_slot8;
                                var1 = var1.PAYMENT_FLOW_SUCCEEDED;
                                if (!(var2 !== var1)) {
                                    _fun86581_ip = 309;
                                    continue _fun86581
                                }
                            case 88:
                                var1 = _closure1_slot8;
                                var1 = var1.PAYMENT_FLOW_CANCELED;
                                if (!(var2 !== var1)) {
                                    _fun86581_ip = 239;
                                    continue _fun86581
                                }
                            case 105:
                                var1 = _closure1_slot8;
                                var1 = var1.PAYMENT_FLOW_FAILED;
                                if (!(var2 === var1)) {
                                    _fun86581_ip = 518;
                                    continue _fun86581
                                }
                            case 122:
                                var4 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var1 = 9;
                                var2 = var2[var1];
                                var1 = undefined;
                                var5 = var4.bind(var1)(var2);
                                var4 = var5.track;
                                var1 = _closure1_slot8;
                                var2 = var1.PAYMENT_FLOW_FAILED;
                                var1 = {};
                                var11 = _closure3_slot5;
                                var12 = var1;
                                var6 = copyDataProperties(var12, var11);
                                var6 = 'duration_ms';
                                var1[var6] = var7;
                                var6 = null;
                                if (!(var6 == var9)) {
                                    _fun86581_ip = 191;
                                    continue _fun86581
                                }
                            case 187:
                                var6 = {};
                                _fun86581_ip = 218;
                                continue _fun86581;
                            case 191:
                                var8 = {};
                                var10 = var9.code;
                                var8.payment_error_code = var10;
                                var9 = var9.message;
                                var8.error_message = var9;
                                var6 = var8;
                            case 218:
                                var12 = var1;
                                var11 = var6;
                                var6 = copyDataProperties(var12, var11);
                                var1 = var4.bind(var5)(var2, var1);
                                _fun86581_ip = 518;
                                continue _fun86581;
                            case 239:
                                var4 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var1 = 9;
                                var2 = var2[var1];
                                var1 = undefined;
                                var5 = var4.bind(var1)(var2);
                                var4 = var5.track;
                                var1 = _closure1_slot8;
                                var2 = var1.PAYMENT_FLOW_CANCELED;
                                var1 = {};
                                var11 = _closure3_slot5;
                                var12 = var1;
                                var6 = copyDataProperties(var12, var11);
                                var6 = 'duration_ms';
                                var1[var6] = var7;
                                var1 = var4.bind(var5)(var2, var1);
                                _fun86581_ip = 518;
                                continue _fun86581;
                            case 309:
                                var4 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var1 = 9;
                                var2 = var2[var1];
                                var1 = undefined;
                                var5 = var4.bind(var1)(var2);
                                var4 = var5.track;
                                var1 = _closure1_slot8;
                                var2 = var1.PAYMENT_FLOW_SUCCEEDED;
                                var1 = {};
                                var11 = _closure3_slot5;
                                var12 = var1;
                                var6 = copyDataProperties(var12, var11);
                                var6 = 'duration_ms';
                                var1[var6] = var7;
                                var1 = var4.bind(var5)(var2, var1);
                                _fun86581_ip = 518;
                                continue _fun86581;
                            case 379:
                                var4 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var1 = 9;
                                var2 = var2[var1];
                                var1 = undefined;
                                var5 = var4.bind(var1)(var2);
                                var4 = var5.track;
                                var1 = _closure1_slot8;
                                var2 = var1.PAYMENT_FLOW_COMPLETED;
                                var1 = {};
                                var11 = _closure3_slot5;
                                var12 = var1;
                                var6 = copyDataProperties(var12, var11);
                                var6 = 'duration_ms';
                                var1[var6] = var7;
                                var1 = var4.bind(var5)(var2, var1);
                                _fun86581_ip = 518;
                                continue _fun86581;
                            case 446:
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 8;
                                var1 = var1[var0];
                                var0 = undefined;
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.trackPaymentFlowStartedAnalyticsAndCTP;
                                var0 = {};
                                var11 = _closure3_slot5;
                                var12 = var0;
                                var3 = copyDataProperties(var12, var11);
                                var4 = false;
                                var3 = 'has_saved_payment_source';
                                var0[var3] = var4;
                                var4 = null;
                                var3 = 'continue_session_initial_step';
                                var0[var3] = var4;
                                var0 = var1.bind(var2)(var0);
                            case 518:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var1 = var3.bind(var4)(var1, var2);
                    var0.emitOrbCheckoutPaymentFlowEvent = var1;
                    return var0;
                };
                var1 = var1.bind(var3)(var6);
                var6 = var1.emitOrbCheckoutPaymentFlowEvent;
                var _closure2_slot2 = var6;
                var1 = 10;
                var1 = var7[var1];
                var5 = var5.bind(var3)(var1);
                var1 = var5.useVirtualCurrencyBalance;
                var5 = var1.bind(var5)();
                var _closure2_slot3 = var5;
                var1 = _closure1_slot4;
                var1 = var1.bind(var3)(var5);
                var _closure2_slot4 = var1;
                var9 = _closure1_slot5;
                var10 = new Array(1);
                var10[0] = var6;
                var7 = function() { // Environment: var0
                    var2 = _closure2_slot2;
                    var0 = _closure1_slot8;
                    var1 = var0.PAYMENT_FLOW_STARTED;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var7 = var9.bind(var3)(var7, var10);
                var7 = new Array(2);
                var7[0] = var2;
                var7[1] = var6;
                var2 = function() { // Environment: var0
                    _fun86583: for (var _fun86583_ip = 0;;) switch (_fun86583_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var1 = null;
                            var2 = var1 != var2;
                            if (!var2) {
                                _fun86583_ip = 29;
                                continue _fun86583
                            }
                        case 16:
                            var3 = _closure2_slot4;
                            var3 = var3.current;
                            var2 = var1 !== var3;
                        case 29:
                            if (!var2) {
                                _fun86583_ip = 71;
                                continue _fun86583
                            }
                        case 32:
                            var5 = _closure2_slot2;
                            var2 = _closure1_slot8;
                            var4 = var2.PAYMENT_FLOW_FAILED;
                            var3 = _closure2_slot1;
                            var2 = undefined;
                            var2 = var5.bind(var2)(var4, var3);
                            var0 = _closure2_slot4;
                            var0.current = var1;
                        case 71:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var9.bind(var3)(var2, var7);
                var1 = var1.current;
                var2 = null;
                var14 = var5;
                if (!(var2 != var1)) {
                    _fun86578_ip = 194;
                    continue _fun86578
                }
            case 191:
                var14 = var1;
            case 194:
                var2 = _closure1_slot6;
                var1 = new Array(3);
                var1[0] = var6;
                var1[1] = var5;
                var1[2] = var4;
                var0 = function() { // Environment: var0
                    var3 = _closure2_slot2;
                    var0 = _closure1_slot8;
                    var2 = var0.PAYMENT_FLOW_COMPLETED;
                    var0 = undefined;
                    var2 = var3.bind(var0)(var2);
                    var3 = _closure2_slot4;
                    var2 = _closure2_slot3;
                    var3.current = var2;
                    var2 = _closure2_slot0;
                    var1 = function() { // Environment: var1
                        var3 = _closure2_slot2;
                        var0 = _closure1_slot8;
                        var2 = var0.PAYMENT_FLOW_SUCCEEDED;
                        var0 = undefined;
                        var2 = var3.bind(var0)(var2);
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 11;
                        var1 = var3[var1];
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.pop;
                        var1 = var1.bind(var2)();
                        return var0;
                    };
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var11 = var2.bind(var3)(var0, var1);
                var2 = _closure1_slot12;
                var6 = _closure1_slot0;
                var9 = _closure1_slot2;
                var0 = 12;
                var0 = var9[var0];
                var0 = var6.bind(var3)(var0);
                var1 = var0.ModalScreen;
                var0 = {};
                var7 = _closure1_slot11;
                var4 = 13;
                var4 = var9[var4];
                var4 = var6.bind(var3)(var4);
                var5 = var4.ModalContent;
                var4 = {};
                var13 = _closure1_slot11;
                var12 = _closure1_slot16;
                var10 = {};
                var10.orbBalance = var14;
                var10 = var13.bind(var3)(var12, var10);
                var4.children = var10;
                var5 = var7.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot11;
                var5 = 14;
                var5 = var9[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.ModalFooter;
                var5 = {};
                var10 = _closure1_slot11;
                var9 = _closure1_slot14;
                var8 = {};
                var8.onPress = var11;
                var8 = var10.bind(var3)(var9, var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot15 = var3;
    var3 = 20;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/virtual_currency/checkout/native/OrbCheckoutModal.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var0 = arg0;
        var11 = var0.skuId;
        var _closure2_slot0 = var11;
        var1 = var0.onCheckoutSuccess;
        var _closure2_slot1 = var1;
        var9 = var0.analyticsLocations;
        var _closure2_slot2 = var9;
        var2 = _closure1_slot1;
        var6 = _closure1_slot2;
        var1 = 15;
        var1 = var6[var1];
        var3 = undefined;
        var2 = var2.bind(var3)(var1);
        var1 = 'SKU ID is required';
        var1 = var2.bind(var3)(var11, var1);
        var7 = _closure1_slot3;
        var4 = var7.useRef;
        var1 = _closure1_slot0;
        var2 = 16;
        var2 = var6[var2];
        var5 = var1.bind(var3)(var2);
        var2 = var5.v4;
        var2 = var2.bind(var5)();
        var2 = var4.bind(var7)(var2);
        var10 = var2.current;
        var _closure2_slot3 = var10;
        var4 = var7.useRef;
        var2 = global;
        var5 = var2.Date;
        var2 = var5.now;
        var2 = var2.bind(var5)();
        var2 = var4.bind(var7)(var2);
        var2 = var2.current;
        var _closure2_slot4 = var2;
        var12 = var7.useEffect;
        var5 = new Array(2);
        var5[0] = var9;
        var5[1] = var11;
        var4 = function() { // Environment: var8
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var0 = 9;
            var2 = var2[var0];
            var0 = undefined;
            var4 = var3.bind(var0)(var2);
            var3 = var4.track;
            var1 = _closure1_slot8;
            var2 = var1.OPEN_MODAL;
            var1 = {};
            var5 = 'Orb Checkout Modal';
            var1.type = var5;
            var6 = _closure2_slot2;
            var1.location_stack = var6;
            var5 = _closure2_slot0;
            var1.sku_id = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var4 = var12.bind(var7)(var4, var5);
        var5 = var7.useCallback;
        var4 = new Array(4);
        var4[0] = var11;
        var4[1] = var10;
        var4[2] = var9;
        var4[3] = var2;
        var2 = function() { // Environment: var8
            var0 = global;
            var1 = var0.Date;
            var0 = var1.now;
            var8 = var0.bind(var1)();
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var0 = 9;
            var1 = var3[var0];
            var0 = undefined;
            var6 = var2.bind(var0)(var1);
            var5 = var6.track;
            var1 = _closure1_slot8;
            var4 = var1.PAYMENT_FLOW_CANCELED;
            var1 = {};
            var10 = _closure2_slot3;
            var1.load_id = var10;
            var11 = _closure1_slot0;
            var10 = 7;
            var10 = var3[var10];
            var12 = var11.bind(var0)(var10);
            var11 = var12.getApplicationIdForOrbSKU;
            var10 = _closure2_slot0;
            var11 = var11.bind(var12)(var10);
            var1.application_id = var11;
            var11 = _closure2_slot2;
            var1.location_stack = var11;
            var11 = _closure1_slot10;
            var11 = var11.VIRTUAL_CURRENCY;
            var1.payment_gateway = var11;
            var1.sku_id = var10;
            var9 = _closure1_slot9;
            var9 = var9.DISCORD_ORB;
            var1.currency = var9;
            var7 = _closure2_slot4;
            var7 = var8 - var7;
            var1.duration_ms = var7;
            var1 = var5.bind(var6)(var4, var1);
            var1 = 11;
            var1 = var3[var1];
            var2 = var2.bind(var0)(var1);
            var1 = var2.pop;
            var1 = var1.bind(var2)();
            return var0;
        };
        var12 = var5.bind(var7)(var2, var4);
        var5 = {};
        var4 = _closure1_slot13;
        var7 = var4.MAIN;
        var2 = {};
        var9 = 17;
        var10 = var6[var9];
        var10 = var1.bind(var3)(var10);
        var13 = var10.intl;
        var11 = var13.string;
        var10 = var6[var9];
        var10 = var1.bind(var3)(var10);
        var10 = var10.t;
        var10 = var10.q9EGps;
        var10 = var11.bind(var13)(var10);
        var2.title = var10;
        var10 = true;
        var2.headerShown = var10;
        var10 = 18;
        var10 = var6[var10];
        var11 = var1.bind(var3)(var10);
        var10 = var11.getHeaderTextButton;
        var13 = var6[var9];
        var13 = var1.bind(var3)(var13);
        var14 = var13.intl;
        var13 = var14.string;
        var9 = var6[var9];
        var9 = var1.bind(var3)(var9);
        var9 = var9.t;
        var9 = var9["ETE/oC"];
        var9 = var13.bind(var14)(var9);
        var9 = var10.bind(var11)(var9, var12);
        var2.headerLeft = var9;
        var8 = function() {
            var3 = _closure1_slot11;
            var1 = _closure1_slot0;
            var2 = _closure1_slot2;
            var0 = 4;
            var0 = var2[var0];
            var2 = undefined;
            var0 = var1.bind(var2)(var0);
            var1 = var0.OrbCheckoutModalContextProvider;
            var0 = {};
            var5 = _closure2_slot0;
            var0.skuId = var5;
            var5 = _closure2_slot3;
            var0.loadId = var5;
            var5 = _closure2_slot1;
            var0.onCheckoutSuccess = var5;
            var5 = _closure2_slot2;
            var0.analyticsLocations = var5;
            var6 = _closure1_slot11;
            var5 = _closure1_slot15;
            var4 = {};
            var7 = _closure2_slot4;
            var4.startTime = var7;
            var4 = var6.bind(var2)(var5, var4);
            var0.children = var4;
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var2.render = var8;
        var5[var7] = var2;
        var2 = _closure1_slot11;
        var0 = 19;
        var0 = var6[var0];
        var0 = var1.bind(var3)(var0);
        var1 = var0.Modal;
        var0 = {};
        var0.screens = var5;
        var4 = var4.MAIN;
        var0.initialRouteName = var4;
        var4 = 'center';
        var0.headerTitleAlign = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 660, 483, 33, 11161, 4041, 11162, 5243, 7067, 795, 11171, 4527, 6403, 6404, 10398, 44, 491, 1234, 4670, 7466, 2]);