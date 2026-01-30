// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var2 = global;
    var5 = var2.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var2 = true;
    var3.value = var2;
    var2 = '__esModule';
    var2 = var4.bind(var5)(var1, var2, var3);
    var2 = function(arg0) { // Original name: productSk2Map, environment: var0
        var0 = arg0;
        var8 = var0.id;
        var6 = var0.description;
        var3 = var0.displayName;
        var5 = var0.price;
        var1 = var0.currency;
        var2 = var0.displayPrice;
        var0 = {};
        var0.title = var3;
        var3 = global;
        var7 = var3.String;
        var4 = undefined;
        var7 = var7.bind(var4)(var8);
        var0.productId = var7;
        var0.description = var6;
        var6 = 'iap';
        var0.type = var6;
        var3 = var3.String;
        var3 = var3.bind(var4)(var5);
        var0.price = var3;
        var0.localizedPrice = var2;
        var0.currency = var1;
        return var0;
    };
    var1.productSk2Map = var2;
    var2 = function(arg0) { // Original name: subscriptionSk2Map, environment: var0
        _fun58388: for (var _fun58388_ip = 0;;) switch (_fun58388_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.id;
                var6 = var0.description;
                var1 = var0.displayName;
                var7 = var0.price;
                var3 = var0.currency;
                var5 = var0.displayPrice;
                var2 = var0.subscription;
                var0 = {};
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var4 = 0;
                var8 = var8[var4];
                var4 = undefined;
                var8 = var10.bind(var4)(var8);
                var8 = var8.SubscriptionPlatform;
                var8 = var8.ios;
                var0.platform = var8;
                var0.title = var1;
                var1 = global;
                var8 = var1.String;
                var8 = var8.bind(var4)(var9);
                var0.productId = var8;
                var0.description = var6;
                var6 = 'subs';
                var0.type = var6;
                var6 = var1.String;
                var6 = var6.bind(var4)(var7);
                var0.price = var6;
                var0.localizedPrice = var5;
                var0.currency = var3;
                var3 = null;
                var5 = var3 == var2;
                var6 = undefined;
                if (var5) {
                    _fun58388_ip = 176;
                    continue _fun58388
                }
            case 156:
                var5 = var2.subscriptionPeriod;
                var7 = var3 == var5;
                var6 = undefined;
                if (var7) {
                    _fun58388_ip = 176;
                    continue _fun58388
                }
            case 171:
                var6 = var5.value;
            case 176:
                var1 = var1.HermesInternal;
                var5 = var1.concat;
                var1 = '';
                var1 = var5.bind(var1)(var6);
                var0.subscriptionPeriodNumberIOS = var1;
                var5 = var3 == var2;
                var1 = undefined;
                if (var5) {
                    _fun58388_ip = 243;
                    continue _fun58388
                }
            case 212:
                var5 = var2.subscriptionPeriod;
                var6 = var3 == var5;
                var1 = undefined;
                if (var6) {
                    _fun58388_ip = 243;
                    continue _fun58388
                }
            case 227:
                var6 = var5.unit;
                var5 = var6.toUpperCase;
                var1 = var5.bind(var6)();
            case 243:
                var0.subscriptionPeriodUnitIOS = var1;
                var5 = var3 == var2;
                var1 = undefined;
                if (var5) {
                    _fun58388_ip = 280;
                    continue _fun58388
                }
            case 259:
                var5 = var2.introductoryOffer;
                var6 = var3 == var5;
                var1 = undefined;
                if (var6) {
                    _fun58388_ip = 280;
                    continue _fun58388
                }
            case 274:
                var1 = var5.displayPrice;
            case 280:
                var0.introductoryPriceAsAmountIOS = var1;
                var5 = var3 == var2;
                var1 = undefined;
                if (var5) {
                    _fun58388_ip = 327;
                    continue _fun58388
                }
            case 296:
                var5 = var2.introductoryOffer;
                var6 = var3 == var5;
                var1 = undefined;
                if (var6) {
                    _fun58388_ip = 327;
                    continue _fun58388
                }
            case 311:
                var6 = var5.paymentMode;
                var5 = var6.toUpperCase;
                var1 = var5.bind(var6)();
            case 327:
                var0.introductoryPricePaymentModeIOS = var1;
                var5 = var3 == var2;
                var1 = undefined;
                if (var5) {
                    _fun58388_ip = 396;
                    continue _fun58388
                }
            case 343:
                var5 = var2.introductoryOffer;
                var6 = var3 == var5;
                var1 = undefined;
                if (var6) {
                    _fun58388_ip = 396;
                    continue _fun58388
                }
            case 358:
                var5 = var5.period;
                var6 = var3 == var5;
                var1 = undefined;
                if (var6) {
                    _fun58388_ip = 396;
                    continue _fun58388
                }
            case 373:
                var6 = var5.value;
                var5 = var3 == var6;
                var1 = undefined;
                if (var5) {
                    _fun58388_ip = 396;
                    continue _fun58388
                }
            case 387:
                var5 = var6.toString;
                var1 = var5.bind(var6)();
            case 396:
                var0.introductoryPriceNumberOfPeriodsIOS = var1;
                var5 = var3 == var2;
                var1 = undefined;
                if (var5) {
                    _fun58388_ip = 448;
                    continue _fun58388
                }
            case 412:
                var2 = var2.introductoryOffer;
                var5 = var3 == var2;
                var1 = undefined;
                if (var5) {
                    _fun58388_ip = 448;
                    continue _fun58388
                }
            case 427:
                var2 = var2.period;
                var3 = var3 == var2;
                var1 = undefined;
                if (var3) {
                    _fun58388_ip = 448;
                    continue _fun58388
                }
            case 442:
                var1 = var2.unit;
            case 448:
                var0.introductoryPriceSubscriptionPeriodIOS = var1;
                return var0;
        }
    };
    var1.subscriptionSk2Map = var2;
    var2 = function(arg0) { // Original name: transactionSk2ToPurchaseMap, environment: var0
        _fun58389: for (var _fun58389_ip = 0;;) switch (_fun58389_ip) {
            case 0:
                var11 = arg0;
                var10 = undefined;
                var2 = undefined;
                var8 = undefined;
                var4 = undefined;
                var9 = undefined;
                var1 = undefined;
                var7 = undefined;
                var3 = undefined;
                var6 = undefined;
                var5 = undefined;
                var0 = undefined;
                var8 = var11.id;
                var4 = var11.originalPurchaseDate;
                var9 = var11.productID;
                var1 = var11.purchaseDate;
                var7 = var11.purchasedQuantity;
                var3 = var11.originalID;
                var6 = var11.verificationResult;
                var5 = var11.appAccountToken;
                var0 = var11.jsonRepresentation;
            case 92: // try_start_0
                var11 = global;
                var12 = var11.JSON;
                var11 = var12.parse;
                var0 = var11.bind(var12)(var0);
                var2 = var0.transactionReason;
            case 119: // try_end0
                _fun58389_ip = 148;
                continue _fun58389;
            case 121: // catch_target0
                CatchBlockStart(arg_register = 13);
                var0 = global;
                var12 = var0.console;
                var11 = var12.log;
                var0 = 'AppleSK2.ts react-native-iap: Error parsing jsonRepresentation';
                var0 = var11.bind(var12)(var0, var13);
            case 148:
                var0 = {};
                var0.productId = var9;
                var9 = global;
                var9 = var9.String;
                var8 = var9.bind(var10)(var8);
                var0.transactionId = var8;
                var0.transactionDate = var1;
                var1 = '';
                var0.transactionReceipt = var1;
                var0.purchaseToken = var1;
                var0.quantityIOS = var7;
                var0.originalTransactionDateIOS = var4;
                var0.originalTransactionIdentifierIOS = var3;
                var3 = var6;
                var4 = null;
                var7 = var4 != var3;
                var3 = var1;
                if (!var7) {
                    _fun58389_ip = 227;
                    continue _fun58389
                }
            case 224:
                var3 = var6;
            case 227:
                var0.verificationResultIOS = var3;
                var3 = var5;
                var6 = var4 != var3;
                var3 = var1;
                if (!var6) {
                    _fun58389_ip = 248;
                    continue _fun58389
                }
            case 245:
                var3 = var5;
            case 248:
                var0.appAccountToken = var3;
                var3 = var2;
                var3 = var4 != var3;
                if (!var3) {
                    _fun58389_ip = 266;
                    continue _fun58389
                }
            case 263:
                var1 = var2;
            case 266:
                var0.transactionReasonIOS = var1;
                return var0;
        }
    };
    var1.transactionSk2ToPurchaseMap = var2;
    var0 = function(arg0) { // Original name: offerSk2Map, environment: var0
        _fun58390: for (var _fun58390_ip = 0;;) switch (_fun58390_ip) {
            case 0:
                var1 = arg0;
                if (var1) {
                    _fun58390_ip = 10;
                    continue _fun58390
                }
            case 6:
                var0 = undefined;
                return var0;
            case 10:
                var0 = {};
                var2 = var1.identifier;
                var0.offerID = var2;
                var2 = var1.keyIdentifier;
                var0.keyID = var2;
                var2 = var1.nonce;
                var0.nonce = var2;
                var2 = var1.signature;
                var0.signature = var2;
                var2 = var1.timestamp;
                var1 = var2.toString;
                var1 = var1.bind(var2)();
                var0.timestamp = var1;
                return var0;
        }
    };
    var1.offerSk2Map = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [7106]);