// records/EntitlementRecord.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = function() {
        _fun30667: for (var _fun30667_ip = 0;;) switch (_fun30667_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 70: // try_end0
                _fun30667_ip = 74;
                continue _fun30667;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot11 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var6 = 6;
    var6 = var5[var6];
    var6 = var7.bind(var0)(var6);
    var _closure1_slot8 = var6;
    var6 = 7;
    var6 = var5[var6];
    var6 = var7.bind(var0)(var6);
    var _closure1_slot9 = var6;
    var6 = 8;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.EntitlementTypes;
    var _closure1_slot10 = var6;
    var1 = function(arg0) { // Environment: var1
        var4 = function arg0() {
            _fun30671: for (var _fun30671_ip = 0;;) switch (_fun30671_ip) {
                case 0:
                    var1 = arg0;
                    var4 = this;
                    var0 = _closure1_slot3;
                    var2 = _closure2_slot0;
                    var3 = undefined;
                    var0 = var0.bind(var3)(var4, var2);
                    var0 = _closure1_slot6;
                    var9 = var0.bind(var3)(var2);
                    var2 = _closure1_slot5;
                    var0 = _closure1_slot11;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun30671_ip = 65;
                        continue _fun30671
                    }
                case 52:
                    var0 = var9.apply;
                    var0 = var0.bind(var9)(var4, var3);
                    _fun30671_ip = 103;
                    continue _fun30671;
                case 65:
                    var6 = global;
                    var8 = var6.Reflect;
                    var7 = var8.construct;
                    var5 = _closure1_slot6;
                    var5 = var5.bind(var3)(var4);
                    var6 = var5.constructor;
                    var5 = new Array(0);
                    var0 = var7.bind(var8)(var9, var5, var6);
                case 103:
                    var0 = var2.bind(var3)(var4, var0);
                    var2 = var1.id;
                    var0.id = var2;
                    var2 = var1.skuId;
                    var0.skuId = var2;
                    var2 = var1.applicationId;
                    var0.applicationId = var2;
                    var2 = var1.user;
                    var0.user = var2;
                    var2 = var1.userId;
                    var0.userId = var2;
                    var2 = var1.gifterId;
                    var0.gifterId = var2;
                    var2 = var1.type;
                    var0.type = var2;
                    var2 = var1.branches;
                    var0.branches = var2;
                    var2 = var1.startsAt;
                    var0.startsAt = var2;
                    var2 = var1.endsAt;
                    var0.endsAt = var2;
                    var2 = var1.subscriptionId;
                    var0.subscriptionId = var2;
                    var2 = var1.subscriptionPlanId;
                    var0.subscriptionPlanId = var2;
                    var2 = var1.parentId;
                    var0.parentId = var2;
                    var2 = var1.consumed;
                    var0.consumed = var2;
                    var2 = var1.giftCodeBatchId;
                    var0.giftCodeBatchId = var2;
                    var2 = var1.giftStyle;
                    var0.giftStyle = var2;
                    var2 = var1.guildId;
                    var0.guildId = var2;
                    var2 = var1.deleted;
                    var0.deleted = var2;
                    var2 = var1.sourceType;
                    var0.sourceType = var2;
                    var1 = var1.fulfillmentStatus;
                    var0.fulfillmentStatus = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg0;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'isGiftable';
        var5.key = var1;
        var1 = function() {
            _fun30672: for (var _fun30672_ip = 0;;) switch (_fun30672_ip) {
                case 0:
                    var1 = this;
                    var2 = var1.type;
                    var0 = _closure1_slot10;
                    var0 = var0.USER_GIFT;
                    var0 = var2 === var0;
                    if (!var0) {
                        _fun30672_ip = 40;
                        continue _fun30672
                    }
                case 28:
                    var2 = var1.gifterId;
                    var1 = null;
                    var0 = var1 == var2;
                case 40:
                    return var0;
            }
        };
        var5.get = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var6 = 'isValid';
        var5.key = var6;
        var6 = function arg0, arg1() {
            _fun30673: for (var _fun30673_ip = 0;;) switch (_fun30673_ip) {
                case 0:
                    var6 = arg1;
                    var1 = arguments[2];
                    var0 = this;
                    var4 = undefined;
                    if (!(var1 === var4)) {
                        _fun30673_ip = 17;
                        continue _fun30673
                    }
                case 15:
                    var1 = null;
                case 17:
                    var2 = var0.isGiftable;
                    if (var2) {
                        _fun30673_ip = 280;
                        continue _fun30673
                    }
                case 31:
                    var2 = var0.deleted;
                    if (var2) {
                        _fun30673_ip = 280;
                        continue _fun30673
                    }
                case 43:
                    var5 = var0.type;
                    var3 = _closure1_slot10;
                    var3 = var3.PREMIUM_SUBSCRIPTION;
                    if (!(var5 === var3)) {
                        _fun30673_ip = 141;
                        continue _fun30673
                    }
                case 65:
                    var5 = var6.get;
                    var3 = var0.skuId;
                    var3 = var5.bind(var6)(var3);
                    var5 = null;
                    if (!(var5 != var3)) {
                        _fun30673_ip = 100;
                        continue _fun30673
                    }
                case 87:
                    var3 = var3.premium;
                    if (var3) {
                        _fun30673_ip = 100;
                        continue _fun30673
                    }
                case 96:
                    var3 = false;
                    return var3;
                case 100:
                    var3 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var2 = 9;
                    var2 = var5[var2];
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.canInstallPremiumApplications;
                    var2 = arg0;
                    var2 = var3.bind(var4)(var2);
                    if (var2) {
                        _fun30673_ip = 141;
                        continue _fun30673
                    }
                case 137:
                    var2 = false;
                    return var2;
                case 141:
                    var2 = global;
                    var2 = var2.Date;
                    var3 = var2.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var2
                        }
                    });
                    var8 = var3;
                    var2 = new var8[var2](var7);
                    var4 = var2 instanceof Object ? var2 : var3;
                    var3 = var0.startsAt;
                    var2 = null;
                    if (!(var2 != var3)) {
                        _fun30673_ip = 191;
                        continue _fun30673
                    }
                case 181:
                    var3 = var0.startsAt;
                    if (!(!(var4 < var3))) {
                        _fun30673_ip = 276;
                        continue _fun30673
                    }
                case 191:
                    var3 = var0.endsAt;
                    if (!(var2 != var3)) {
                        _fun30673_ip = 211;
                        continue _fun30673
                    }
                case 201:
                    var3 = var0.endsAt;
                    if (!(!(var4 >= var3))) {
                        _fun30673_ip = 272;
                        continue _fun30673
                    }
                case 211:
                    if (!(var2 != var1)) {
                        _fun30673_ip = 264;
                        continue _fun30673
                    }
                case 215:
                    var2 = var0.branches;
                    var3 = var2.length;
                    var2 = 0;
                    if (!(var2 !== var3)) {
                        _fun30673_ip = 255;
                        continue _fun30673
                    }
                case 232:
                    var3 = var0.branches;
                    var2 = var3.includes;
                    var2 = var2.bind(var3)(var1);
                    if (var2) {
                        _fun30673_ip = 264;
                        continue _fun30673
                    }
                case 251:
                    var2 = false;
                    return var2;
                case 255:
                    var0 = var0.applicationId;
                    if (!(var0 === var1)) {
                        _fun30673_ip = 268;
                        continue _fun30673
                    }
                case 264:
                    var0 = true;
                    return var0;
                case 268:
                    var0 = false;
                    return var0;
                case 272:
                    var0 = false;
                    return var0;
                case 276:
                    var0 = false;
                    return var0;
                case 280:
                    var0 = false;
                    return var0;
            }
        };
        var5.value = var6;
        var1[1] = var5;
        var5 = {};
        var6 = 'isFulfilled';
        var5.key = var6;
        var6 = function() {
            var0 = this;
            var1 = var0.fulfillmentStatus;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var0 = 10;
            var2 = var2[var0];
            var0 = undefined;
            var0 = var3.bind(var0)(var2);
            var0 = var0.EntitlementTenantFulfillmentStatus;
            var0 = var0.FULFILLED;
            var0 = var1 === var0;
            return var0;
        };
        var5.value = var6;
        var1[2] = var5;
        var5 = {};
        var6 = 'createFromServer';
        var5.key = var6;
        var0 = function arg0() {
            _fun30675: for (var _fun30675_ip = 0;;) switch (_fun30675_ip) {
                case 0:
                    var3 = arg0;
                    var2 = _closure2_slot0;
                    var0 = {};
                    var1 = var3.id;
                    var0.id = var1;
                    var1 = var3.sku_id;
                    var0.skuId = var1;
                    var1 = var3.application_id;
                    var0.applicationId = var1;
                    var4 = var3.user;
                    var1 = null;
                    var5 = var1 != var4;
                    var4 = null;
                    if (!var5) {
                        _fun30675_ip = 90;
                        continue _fun30675
                    }
                case 58:
                    var7 = _closure1_slot9;
                    var8 = var3.user;
                    var6 = var7.prototype;
                    var6 = Object.create(var6, {
                        constructor: {
                            value: var7
                        }
                    });
                    var9 = var6;
                    var5 = new var9[var7](var8, var7);
                    var4 = var5 instanceof Object ? var5 : var6;
                case 90:
                    var0.user = var4;
                    var4 = var3.user_id;
                    var0.userId = var4;
                    var4 = var3.gifter_user_id;
                    var0.gifterId = var4;
                    var4 = var3.type;
                    var0.type = var4;
                    var4 = var3.branches;
                    if (!(var1 == var4)) {
                        _fun30675_ip = 138;
                        continue _fun30675
                    }
                case 134:
                    var4 = new Array(0);
                case 138:
                    var0.branches = var4;
                    var4 = var3.starts_at;
                    var5 = var1 != var4;
                    var4 = null;
                    if (!var5) {
                        _fun30675_ip = 192;
                        continue _fun30675
                    }
                case 158:
                    var5 = global;
                    var7 = var5.Date;
                    var8 = var3.starts_at;
                    var6 = var7.prototype;
                    var6 = Object.create(var6, {
                        constructor: {
                            value: var7
                        }
                    });
                    var9 = var6;
                    var5 = new var9[var7](var8, var7);
                    var4 = var5 instanceof Object ? var5 : var6;
                case 192:
                    var0.startsAt = var4;
                    var4 = var3.ends_at;
                    var5 = var1 != var4;
                    var4 = null;
                    if (!var5) {
                        _fun30675_ip = 246;
                        continue _fun30675
                    }
                case 212:
                    var5 = global;
                    var7 = var5.Date;
                    var8 = var3.ends_at;
                    var6 = var7.prototype;
                    var6 = Object.create(var6, {
                        constructor: {
                            value: var7
                        }
                    });
                    var9 = var6;
                    var5 = new var9[var7](var8, var7);
                    var4 = var5 instanceof Object ? var5 : var6;
                case 246:
                    var0.endsAt = var4;
                    var4 = var3.subscription_id;
                    var0.subscriptionId = var4;
                    var4 = var3.subscription_plan;
                    var5 = var1 != var4;
                    var4 = null;
                    if (!var5) {
                        _fun30675_ip = 288;
                        continue _fun30675
                    }
                case 277:
                    var5 = var3.subscription_plan;
                    var4 = var5.id;
                case 288:
                    var0.subscriptionPlanId = var4;
                    var4 = var3.parent_id;
                    var5 = var1 != var4;
                    var4 = null;
                    if (!var5) {
                        _fun30675_ip = 314;
                        continue _fun30675
                    }
                case 308:
                    var4 = var3.parent_id;
                case 314:
                    var0.parentId = var4;
                    var4 = var3.consumed;
                    var5 = var1 != var4;
                    var4 = null;
                    if (!var5) {
                        _fun30675_ip = 340;
                        continue _fun30675
                    }
                case 334:
                    var4 = var3.consumed;
                case 340:
                    var0.consumed = var4;
                    var5 = var3.gift_code_batch_id;
                    var6 = var1 != var5;
                    var4 = null;
                    if (!var6) {
                        _fun30675_ip = 365;
                        continue _fun30675
                    }
                case 362:
                    var4 = var5;
                case 365:
                    var0.giftCodeBatchId = var4;
                    var4 = var3.gift_style;
                    var0.giftStyle = var4;
                    var4 = var3.guild_id;
                    var0.guildId = var4;
                    var4 = var3.deleted;
                    var0.deleted = var4;
                    var4 = var3.sku;
                    var5 = var1 != var4;
                    var4 = null;
                    if (!var5) {
                        _fun30675_ip = 440;
                        continue _fun30675
                    }
                case 416:
                    var7 = _closure1_slot8;
                    var6 = var7.createFromServer;
                    var5 = var3.sku;
                    var4 = var6.bind(var7)(var5);
                case 440:
                    var0.sku = var4;
                    var5 = var3.source_type;
                    var6 = var1 != var5;
                    var4 = null;
                    if (!var6) {
                        _fun30675_ip = 465;
                        continue _fun30675
                    }
                case 462:
                    var4 = var5;
                case 465:
                    var0.sourceType = var4;
                    var3 = var3.fulfillment_status;
                    var4 = var1 != var3;
                    var1 = null;
                    if (!var4) {
                        _fun30675_ip = 490;
                        continue _fun30675
                    }
                case 487:
                    var1 = var3;
                case 490:
                    var0.fulfillmentStatus = var1;
                    var1 = var2.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var2
                        }
                    });
                    var9 = var1;
                    var8 = var0;
                    var0 = new var9[var2](var8, var7);
                    var0 = var0 instanceof Object ? var0 : var1;
                    return var0;
            }
        };
        var5.value = var0;
        var0 = new Array(1);
        var0[0] = var5;
        var0 = var2.bind(var3)(var4, var1, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'records/EntitlementRecord.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1621, 3451, 1620, 660, 3068, 3456, 2]);