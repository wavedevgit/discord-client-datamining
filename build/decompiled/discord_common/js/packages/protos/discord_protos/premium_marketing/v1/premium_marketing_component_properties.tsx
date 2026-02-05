// ../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/premium_marketing_component_properties.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() {
        _fun57941: for (var _fun57941_ip = 0;;) switch (_fun57941_ip) {
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
                _fun57941_ip = 74;
                continue _fun57941;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot8 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 19;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.MessageType;
    var1 = function(arg0) { // Environment: var1
        var3 = function() {
            _fun57945: for (var _fun57945_ip = 0;;) switch (_fun57945_ip) {
                case 0:
                    var3 = this;
                    var0 = _closure1_slot3;
                    var1 = _closure2_slot0;
                    var2 = undefined;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = new Array(15);
                    var5 = {
                        'no': 1,
                        'name': 'placeholder',
                        'kind': 'scalar',
                        'oneof': 'properties',
                        'T': 9
                    };
                    var0[0] = var5;
                    var5 = {
                        'no': 2,
                        'name': 'announcement_modal_variant_1',
                        'kind': 'message',
                        'oneof': 'properties'
                    };
                    var7 = function() {
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var0 = 6;
                        var1 = var1[var0];
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        var0 = var0.AnnouncementModalVariant1Properties;
                        return var0;
                    };
                    var5.T = var7;
                    var0[1] = var5;
                    var5 = {
                        'no': 4,
                        'name': 'premium_tab',
                        'kind': 'message',
                        'oneof': 'properties'
                    };
                    var7 = function() {
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var0 = 7;
                        var1 = var1[var0];
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        var0 = var0.PremiumTab;
                        return var0;
                    };
                    var5.T = var7;
                    var0[2] = var5;
                    var5 = {
                        'no': 5,
                        'name': 'marketing_page_banner',
                        'kind': 'message',
                        'oneof': 'properties'
                    };
                    var7 = function() {
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var0 = 8;
                        var1 = var1[var0];
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        var0 = var0.MarketingPageBanner;
                        return var0;
                    };
                    var5.T = var7;
                    var0[3] = var5;
                    var5 = {
                        'no': 6,
                        'name': 'payment_modal_banner',
                        'kind': 'message',
                        'oneof': 'properties'
                    };
                    var7 = function() {
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var0 = 9;
                        var1 = var1[var0];
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        var0 = var0.PaymentModalBanner;
                        return var0;
                    };
                    var5.T = var7;
                    var0[4] = var5;
                    var5 = {
                        'no': 7,
                        'name': 'mobile_bottom_sheet',
                        'kind': 'message',
                        'oneof': 'properties'
                    };
                    var7 = function() {
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var0 = 10;
                        var1 = var1[var0];
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        var0 = var0.MobileBottomSheet;
                        return var0;
                    };
                    var5.T = var7;
                    var0[5] = var5;
                    var5 = {
                        'no': 8,
                        'name': 'gift_icon',
                        'kind': 'message',
                        'oneof': 'properties'
                    };
                    var7 = function() {
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var0 = 11;
                        var1 = var1[var0];
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        var0 = var0.GiftIcon;
                        return var0;
                    };
                    var5.T = var7;
                    var0[6] = var5;
                    var5 = {
                        'no': 9,
                        'name': 'gift_icon_coachmark',
                        'kind': 'message',
                        'oneof': 'properties'
                    };
                    var7 = function() {
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var0 = 12;
                        var1 = var1[var0];
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        var0 = var0.GiftIconCoachmark;
                        return var0;
                    };
                    var5.T = var7;
                    var0[7] = var5;
                    var5 = {
                        'no': 10,
                        'name': 'gift_plan_selection_card_banner',
                        'kind': 'message',
                        'oneof': 'properties'
                    };
                    var7 = function() {
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var0 = 13;
                        var1 = var1[var0];
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        var0 = var0.GiftPlanSelectionCardBanner;
                        return var0;
                    };
                    var5.T = var7;
                    var0[8] = var5;
                    var5 = {
                        'no': 11,
                        'name': 'gift_customization_banner',
                        'kind': 'message',
                        'oneof': 'properties'
                    };
                    var7 = function() {
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var0 = 14;
                        var1 = var1[var0];
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        var0 = var0.GiftCustomizationBanner;
                        return var0;
                    };
                    var5.T = var7;
                    var0[9] = var5;
                    var5 = {
                        'no': 12,
                        'name': 'billing_settings_nitro_gift_banner',
                        'kind': 'message',
                        'oneof': 'properties'
                    };
                    var7 = function() {
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var0 = 15;
                        var1 = var1[var0];
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        var0 = var0.BillingSettingsNitroGiftBanner;
                        return var0;
                    };
                    var5.T = var7;
                    var0[10] = var5;
                    var5 = {
                        'no': 13,
                        'name': 'gift_reminder_nagbar',
                        'kind': 'message',
                        'oneof': 'properties'
                    };
                    var7 = function() {
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var0 = 16;
                        var1 = var1[var0];
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        var0 = var0.GiftReminderNagbar;
                        return var0;
                    };
                    var5.T = var7;
                    var0[11] = var5;
                    var5 = {
                        'no': 14,
                        'name': 'gift_reminder_coachmark',
                        'kind': 'message',
                        'oneof': 'properties'
                    };
                    var7 = function() {
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var0 = 17;
                        var1 = var1[var0];
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        var0 = var0.GiftReminderCoachmark;
                        return var0;
                    };
                    var5.T = var7;
                    var0[12] = var5;
                    var5 = {
                        'no': 15,
                        'name': 'premium_tab_tooltip',
                        'kind': 'message',
                        'oneof': 'properties'
                    };
                    var6 = function() {
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var0 = 18;
                        var1 = var1[var0];
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        var0 = var0.PremiumTabTooltip;
                        return var0;
                    };
                    var5.T = var6;
                    var0[13] = var5;
                    var5 = {
                        'no': 3,
                        'name': 'content_identifier',
                        'kind': 'scalar',
                        'T': 9
                    };
                    var0[14] = var5;
                    var8 = ['discord_protos.premium_marketing.v1.PremiumMarketingComponentProperties'];
                    var8[1] = var0;
                    var0 = _closure1_slot6;
                    var7 = var0.bind(var2)(var1);
                    var1 = _closure1_slot5;
                    var0 = _closure1_slot8;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun57945_ip = 465;
                        continue _fun57945
                    }
                case 452:
                    var0 = var7.apply;
                    var0 = var0.bind(var7)(var3, var8);
                    _fun57945_ip = 499;
                    continue _fun57945;
                case 465:
                    var5 = global;
                    var6 = var5.Reflect;
                    var5 = var6.construct;
                    var4 = _closure1_slot6;
                    var4 = var4.bind(var2)(var3);
                    var4 = var4.constructor;
                    var0 = var5.bind(var6)(var7, var8, var4);
                case 499:
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'create';
        var4.key = var0;
        var0 = function arg0() {
            _fun57959: for (var _fun57959_ip = 0;;) switch (_fun57959_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = {};
                    var1 = {};
                    var5 = undefined;
                    var1.oneofKind = var5;
                    var0.properties = var1;
                    var1 = '';
                    var0.contentIdentifier = var1;
                    var1 = global;
                    var1 = var1.globalThis;
                    var9 = var1.Object;
                    var8 = var9.defineProperty;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var6 = 19;
                    var2 = var2[var6];
                    var2 = var7.bind(var5)(var2);
                    var7 = var2.MESSAGE_TYPE;
                    var2 = {};
                    var10 = false;
                    var2.enumerable = var10;
                    var2.value = var3;
                    var2 = var8.bind(var9)(var0, var7, var2);
                    if (!(var5 !== var4)) {
                        _fun57959_ip = 131;
                        continue _fun57959
                    }
                case 101:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.reflectionMergePartial;
                    var1 = var1.bind(var2)(var3, var0, var4);
                case 131:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'internalBinaryRead';
        var4.key = var6;
        var6 = function arg0, arg1, arg2, arg3() {
            _fun57960: for (var _fun57960_ip = 0;;) switch (_fun57960_ip) {
                case 0:
                    var45 = arg0;
                    var44 = arg2;
                    var0 = arg3;
                    var1 = this;
                    var2 = null;
                    if (!(var2 == var0)) {
                        _fun57960_ip = 27;
                        continue _fun57960
                    }
                case 18:
                    var2 = var1.create;
                    var0 = var2.bind(var1)();
                case 27:
                    var3 = var45.pos;
                    var2 = arg1;
                    var43 = var3 + var2;
                    var2 = var45.pos;
                    var2 = var2 < var43;
                    var42 = undefined;
                    var40 = 19;
                    var39 = true;
                    var38 = false;
                    var37 = 'throw';
                    var36 = 'placeholder';
                    var35 = 'announcementModalVariant1';
                    var34 = 6;
                    var33 = 'premiumTab';
                    var32 = 7;
                    var31 = 'marketingPageBanner';
                    var30 = 8;
                    var29 = 'paymentModalBanner';
                    var28 = 9;
                    var27 = 'mobileBottomSheet';
                    var26 = 10;
                    var25 = 'giftIcon';
                    var24 = 11;
                    var23 = 'giftIconCoachmark';
                    var22 = 12;
                    var21 = 'giftPlanSelectionCardBanner';
                    var20 = 13;
                    var19 = 'giftCustomizationBanner';
                    var18 = 14;
                    var17 = 'billingSettingsNitroGiftBanner';
                    var16 = 15;
                    var15 = 'giftReminderNagbar';
                    var14 = 16;
                    var13 = 'giftReminderCoachmark';
                    var12 = 17;
                    var11 = 'premiumTabTooltip';
                    var10 = 18;
                    var9 = 2;
                    var8 = 0;
                    var5 = 1;
                    var4 = undefined;
                    var3 = undefined;
                    if (!var2) {
                        _fun57960_ip = 1607;
                        continue _fun57960
                    }
                case 177:
                    var2 = var45.tag;
                    var6 = var2.bind(var45)();
                    var2 = _closure1_slot2;
                    var2 = var2.bind(var42)(var6, var9);
                    var7 = var2[var8];
                    var6 = var2[var5];
                    SwitchImm(value_reg = 7, jump_table_address = 1689, default_jump_address = 1492, unsigned_min_value = 1, unsigned_max_value = 15) // Switch table: [1457, 1364, 222, 1271, 1178, 1085, 992, 899, 806, 713, 620, 527, 434, 341, 248];
                case 222:
                    var2 = var45.string;
                    var2 = var2.bind(var45)();
                    var0.contentIdentifier = var2;
                    var47 = var4;
                    var46 = var3;
                    _fun57960_ip = 1589;
                    continue _fun57960;
                case 248:
                    var2 = {};
                    var2.oneofKind = var11;
                    var49 = _closure1_slot0;
                    var48 = _closure1_slot1;
                    var48 = var48[var10];
                    var48 = var49.bind(var42)(var48);
                    var51 = var48.PremiumTabTooltip;
                    var50 = var51.internalBinaryRead;
                    var48 = var45.uint32;
                    var55 = var48.bind(var45)();
                    var48 = var0.properties;
                    var53 = var48.premiumTabTooltip;
                    var57 = var51;
                    var56 = var45;
                    var54 = var44;
                    var48 = var57[var50](var56, var55, var54, var53, var52);
                    var2.premiumTabTooltip = var48;
                    var0.properties = var2;
                    var47 = var4;
                    var46 = var3;
                    _fun57960_ip = 1589;
                    continue _fun57960;
                case 341:
                    var2 = {};
                    var2.oneofKind = var13;
                    var49 = _closure1_slot0;
                    var48 = _closure1_slot1;
                    var48 = var48[var12];
                    var48 = var49.bind(var42)(var48);
                    var51 = var48.GiftReminderCoachmark;
                    var50 = var51.internalBinaryRead;
                    var48 = var45.uint32;
                    var55 = var48.bind(var45)();
                    var48 = var0.properties;
                    var53 = var48.giftReminderCoachmark;
                    var57 = var51;
                    var56 = var45;
                    var54 = var44;
                    var48 = var57[var50](var56, var55, var54, var53, var52);
                    var2.giftReminderCoachmark = var48;
                    var0.properties = var2;
                    var47 = var4;
                    var46 = var3;
                    _fun57960_ip = 1589;
                    continue _fun57960;
                case 434:
                    var2 = {};
                    var2.oneofKind = var15;
                    var49 = _closure1_slot0;
                    var48 = _closure1_slot1;
                    var48 = var48[var14];
                    var48 = var49.bind(var42)(var48);
                    var51 = var48.GiftReminderNagbar;
                    var50 = var51.internalBinaryRead;
                    var48 = var45.uint32;
                    var55 = var48.bind(var45)();
                    var48 = var0.properties;
                    var53 = var48.giftReminderNagbar;
                    var57 = var51;
                    var56 = var45;
                    var54 = var44;
                    var48 = var57[var50](var56, var55, var54, var53, var52);
                    var2.giftReminderNagbar = var48;
                    var0.properties = var2;
                    var47 = var4;
                    var46 = var3;
                    _fun57960_ip = 1589;
                    continue _fun57960;
                case 527:
                    var2 = {};
                    var2.oneofKind = var17;
                    var49 = _closure1_slot0;
                    var48 = _closure1_slot1;
                    var48 = var48[var16];
                    var48 = var49.bind(var42)(var48);
                    var51 = var48.BillingSettingsNitroGiftBanner;
                    var50 = var51.internalBinaryRead;
                    var48 = var45.uint32;
                    var55 = var48.bind(var45)();
                    var48 = var0.properties;
                    var53 = var48.billingSettingsNitroGiftBanner;
                    var57 = var51;
                    var56 = var45;
                    var54 = var44;
                    var48 = var57[var50](var56, var55, var54, var53, var52);
                    var2.billingSettingsNitroGiftBanner = var48;
                    var0.properties = var2;
                    var47 = var4;
                    var46 = var3;
                    _fun57960_ip = 1589;
                    continue _fun57960;
                case 620:
                    var2 = {};
                    var2.oneofKind = var19;
                    var49 = _closure1_slot0;
                    var48 = _closure1_slot1;
                    var48 = var48[var18];
                    var48 = var49.bind(var42)(var48);
                    var51 = var48.GiftCustomizationBanner;
                    var50 = var51.internalBinaryRead;
                    var48 = var45.uint32;
                    var55 = var48.bind(var45)();
                    var48 = var0.properties;
                    var53 = var48.giftCustomizationBanner;
                    var57 = var51;
                    var56 = var45;
                    var54 = var44;
                    var48 = var57[var50](var56, var55, var54, var53, var52);
                    var2.giftCustomizationBanner = var48;
                    var0.properties = var2;
                    var47 = var4;
                    var46 = var3;
                    _fun57960_ip = 1589;
                    continue _fun57960;
                case 713:
                    var2 = {};
                    var2.oneofKind = var21;
                    var49 = _closure1_slot0;
                    var48 = _closure1_slot1;
                    var48 = var48[var20];
                    var48 = var49.bind(var42)(var48);
                    var51 = var48.GiftPlanSelectionCardBanner;
                    var50 = var51.internalBinaryRead;
                    var48 = var45.uint32;
                    var55 = var48.bind(var45)();
                    var48 = var0.properties;
                    var53 = var48.giftPlanSelectionCardBanner;
                    var57 = var51;
                    var56 = var45;
                    var54 = var44;
                    var48 = var57[var50](var56, var55, var54, var53, var52);
                    var2.giftPlanSelectionCardBanner = var48;
                    var0.properties = var2;
                    var47 = var4;
                    var46 = var3;
                    _fun57960_ip = 1589;
                    continue _fun57960;
                case 806:
                    var2 = {};
                    var2.oneofKind = var23;
                    var49 = _closure1_slot0;
                    var48 = _closure1_slot1;
                    var48 = var48[var22];
                    var48 = var49.bind(var42)(var48);
                    var51 = var48.GiftIconCoachmark;
                    var50 = var51.internalBinaryRead;
                    var48 = var45.uint32;
                    var55 = var48.bind(var45)();
                    var48 = var0.properties;
                    var53 = var48.giftIconCoachmark;
                    var57 = var51;
                    var56 = var45;
                    var54 = var44;
                    var48 = var57[var50](var56, var55, var54, var53, var52);
                    var2.giftIconCoachmark = var48;
                    var0.properties = var2;
                    var47 = var4;
                    var46 = var3;
                    _fun57960_ip = 1589;
                    continue _fun57960;
                case 899:
                    var2 = {};
                    var2.oneofKind = var25;
                    var49 = _closure1_slot0;
                    var48 = _closure1_slot1;
                    var48 = var48[var24];
                    var48 = var49.bind(var42)(var48);
                    var51 = var48.GiftIcon;
                    var50 = var51.internalBinaryRead;
                    var48 = var45.uint32;
                    var55 = var48.bind(var45)();
                    var48 = var0.properties;
                    var53 = var48.giftIcon;
                    var57 = var51;
                    var56 = var45;
                    var54 = var44;
                    var48 = var57[var50](var56, var55, var54, var53, var52);
                    var2.giftIcon = var48;
                    var0.properties = var2;
                    var47 = var4;
                    var46 = var3;
                    _fun57960_ip = 1589;
                    continue _fun57960;
                case 992:
                    var2 = {};
                    var2.oneofKind = var27;
                    var49 = _closure1_slot0;
                    var48 = _closure1_slot1;
                    var48 = var48[var26];
                    var48 = var49.bind(var42)(var48);
                    var51 = var48.MobileBottomSheet;
                    var50 = var51.internalBinaryRead;
                    var48 = var45.uint32;
                    var55 = var48.bind(var45)();
                    var48 = var0.properties;
                    var53 = var48.mobileBottomSheet;
                    var57 = var51;
                    var56 = var45;
                    var54 = var44;
                    var48 = var57[var50](var56, var55, var54, var53, var52);
                    var2.mobileBottomSheet = var48;
                    var0.properties = var2;
                    var47 = var4;
                    var46 = var3;
                    _fun57960_ip = 1589;
                    continue _fun57960;
                case 1085:
                    var2 = {};
                    var2.oneofKind = var29;
                    var49 = _closure1_slot0;
                    var48 = _closure1_slot1;
                    var48 = var48[var28];
                    var48 = var49.bind(var42)(var48);
                    var51 = var48.PaymentModalBanner;
                    var50 = var51.internalBinaryRead;
                    var48 = var45.uint32;
                    var55 = var48.bind(var45)();
                    var48 = var0.properties;
                    var53 = var48.paymentModalBanner;
                    var57 = var51;
                    var56 = var45;
                    var54 = var44;
                    var48 = var57[var50](var56, var55, var54, var53, var52);
                    var2.paymentModalBanner = var48;
                    var0.properties = var2;
                    var47 = var4;
                    var46 = var3;
                    _fun57960_ip = 1589;
                    continue _fun57960;
                case 1178:
                    var2 = {};
                    var2.oneofKind = var31;
                    var49 = _closure1_slot0;
                    var48 = _closure1_slot1;
                    var48 = var48[var30];
                    var48 = var49.bind(var42)(var48);
                    var51 = var48.MarketingPageBanner;
                    var50 = var51.internalBinaryRead;
                    var48 = var45.uint32;
                    var55 = var48.bind(var45)();
                    var48 = var0.properties;
                    var53 = var48.marketingPageBanner;
                    var57 = var51;
                    var56 = var45;
                    var54 = var44;
                    var48 = var57[var50](var56, var55, var54, var53, var52);
                    var2.marketingPageBanner = var48;
                    var0.properties = var2;
                    var47 = var4;
                    var46 = var3;
                    _fun57960_ip = 1589;
                    continue _fun57960;
                case 1271:
                    var2 = {};
                    var2.oneofKind = var33;
                    var49 = _closure1_slot0;
                    var48 = _closure1_slot1;
                    var48 = var48[var32];
                    var48 = var49.bind(var42)(var48);
                    var51 = var48.PremiumTab;
                    var50 = var51.internalBinaryRead;
                    var48 = var45.uint32;
                    var55 = var48.bind(var45)();
                    var48 = var0.properties;
                    var53 = var48.premiumTab;
                    var57 = var51;
                    var56 = var45;
                    var54 = var44;
                    var48 = var57[var50](var56, var55, var54, var53, var52);
                    var2.premiumTab = var48;
                    var0.properties = var2;
                    var47 = var4;
                    var46 = var3;
                    _fun57960_ip = 1589;
                    continue _fun57960;
                case 1364:
                    var2 = {};
                    var2.oneofKind = var35;
                    var49 = _closure1_slot0;
                    var48 = _closure1_slot1;
                    var48 = var48[var34];
                    var48 = var49.bind(var42)(var48);
                    var51 = var48.AnnouncementModalVariant1Properties;
                    var50 = var51.internalBinaryRead;
                    var48 = var45.uint32;
                    var55 = var48.bind(var45)();
                    var48 = var0.properties;
                    var53 = var48.announcementModalVariant1;
                    var57 = var51;
                    var56 = var45;
                    var54 = var44;
                    var48 = var57[var50](var56, var55, var54, var53, var52);
                    var2.announcementModalVariant1 = var48;
                    var0.properties = var2;
                    var47 = var4;
                    var46 = var3;
                    _fun57960_ip = 1589;
                    continue _fun57960;
                case 1457:
                    var2 = {};
                    var2.oneofKind = var36;
                    var48 = var45.string;
                    var48 = var48.bind(var45)();
                    var2.placeholder = var48;
                    var0.properties = var2;
                    var47 = var4;
                    var46 = var3;
                    _fun57960_ip = 1589;
                    continue _fun57960;
                case 1492:
                    var48 = var44.readUnknownField;
                    if (!(var37 !== var48)) {
                        _fun57960_ip = 1609;
                        continue _fun57960
                    }
                case 1502:
                    var2 = var45.skip;
                    var2 = var2.bind(var45)(var6);
                    var47 = var48;
                    var46 = var2;
                    if (!(var38 !== var48)) {
                        _fun57960_ip = 1589;
                        continue _fun57960
                    }
                case 1523:
                    var50 = var48;
                    if (!(var39 === var48)) {
                        _fun57960_ip = 1559;
                        continue _fun57960
                    }
                case 1530:
                    var51 = _closure1_slot0;
                    var49 = _closure1_slot1;
                    var49 = var49[var40];
                    var49 = var51.bind(var42)(var49);
                    var49 = var49.UnknownFieldHandler;
                    var50 = var49.onRead;
                case 1559:
                    var56 = var1.typeName;
                    var57 = undefined;
                    var55 = var0;
                    var54 = var7;
                    var53 = var6;
                    var52 = var2;
                    var49 = var57[var50](var56, var55, var54, var53, var52, var51);
                    var47 = var48;
                    var46 = var2;
                case 1589:
                    var2 = var45.pos;
                    var4 = var47;
                    var3 = var46;
                    if (var2 < var43) {
                        _fun57960_ip = 177;
                        continue _fun57960
                    }
                case 1607:
                    return var0;
                case 1609:
                    var0 = global;
                    var2 = var0.globalThis;
                    var2 = var2.Error;
                    var52 = var1.typeName;
                    var0 = var0.HermesInternal;
                    var4 = var0.concat;
                    var57 = 'Unknown field ';
                    var55 = ' (wire type ';
                    var53 = ') for ';
                    var56 = var7;
                    var54 = var6;
                    var56 = var57[var4](var56, var55, var54, var53, var52, var51);
                    var1 = var2.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var2
                        }
                    });
                    var57 = var1;
                    var0 = new var57[var2](var56, var55);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'internalBinaryWrite';
        var4.key = var6;
        var5 = function arg0, arg1, arg2() {
            _fun57961: for (var _fun57961_ip = 0;;) switch (_fun57961_ip) {
                case 0:
                    var4 = arg0;
                    var0 = arg1;
                    var1 = arg2;
                    var2 = var4.properties;
                    var3 = var2.oneofKind;
                    var2 = 'placeholder';
                    if (!(var2 === var3)) {
                        _fun57961_ip = 101;
                        continue _fun57961
                    }
                case 29:
                    var5 = var0.tag;
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 19;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var6.bind(var2)(var3);
                    var2 = var2.WireType;
                    var3 = var2.LengthDelimited;
                    var2 = 1;
                    var5 = var5.bind(var0)(var2, var3);
                    var3 = var5.string;
                    var2 = var4.properties;
                    var2 = var2.placeholder;
                    var2 = var3.bind(var5)(var2);
                case 101:
                    var2 = var4.properties;
                    var3 = var2.oneofKind;
                    var2 = 'announcementModalVariant1';
                    if (!(var2 === var3)) {
                        _fun57961_ip = 233;
                        continue _fun57961
                    }
                case 121:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot1;
                    var2 = 6;
                    var2 = var10[var2];
                    var7 = undefined;
                    var2 = var9.bind(var7)(var2);
                    var6 = var2.AnnouncementModalVariant1Properties;
                    var5 = var6.internalBinaryWrite;
                    var2 = var4.properties;
                    var3 = var2.announcementModalVariant1;
                    var8 = var0.tag;
                    var2 = 19;
                    var2 = var10[var2];
                    var2 = var9.bind(var7)(var2);
                    var2 = var2.WireType;
                    var7 = var2.LengthDelimited;
                    var2 = 2;
                    var7 = var8.bind(var0)(var2, var7);
                    var2 = var7.fork;
                    var2 = var2.bind(var7)();
                    var3 = var5.bind(var6)(var3, var2, var1);
                    var2 = var3.join;
                    var2 = var2.bind(var3)();
                case 233:
                    var2 = var4.properties;
                    var3 = var2.oneofKind;
                    var2 = 'premiumTab';
                    if (!(var2 === var3)) {
                        _fun57961_ip = 365;
                        continue _fun57961
                    }
                case 253:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot1;
                    var2 = 7;
                    var2 = var10[var2];
                    var7 = undefined;
                    var2 = var9.bind(var7)(var2);
                    var6 = var2.PremiumTab;
                    var5 = var6.internalBinaryWrite;
                    var2 = var4.properties;
                    var3 = var2.premiumTab;
                    var8 = var0.tag;
                    var2 = 19;
                    var2 = var10[var2];
                    var2 = var9.bind(var7)(var2);
                    var2 = var2.WireType;
                    var7 = var2.LengthDelimited;
                    var2 = 4;
                    var7 = var8.bind(var0)(var2, var7);
                    var2 = var7.fork;
                    var2 = var2.bind(var7)();
                    var3 = var5.bind(var6)(var3, var2, var1);
                    var2 = var3.join;
                    var2 = var2.bind(var3)();
                case 365:
                    var2 = var4.properties;
                    var3 = var2.oneofKind;
                    var2 = 'marketingPageBanner';
                    if (!(var2 === var3)) {
                        _fun57961_ip = 497;
                        continue _fun57961
                    }
                case 385:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot1;
                    var2 = 8;
                    var2 = var10[var2];
                    var7 = undefined;
                    var2 = var9.bind(var7)(var2);
                    var6 = var2.MarketingPageBanner;
                    var5 = var6.internalBinaryWrite;
                    var2 = var4.properties;
                    var3 = var2.marketingPageBanner;
                    var8 = var0.tag;
                    var2 = 19;
                    var2 = var10[var2];
                    var2 = var9.bind(var7)(var2);
                    var2 = var2.WireType;
                    var7 = var2.LengthDelimited;
                    var2 = 5;
                    var7 = var8.bind(var0)(var2, var7);
                    var2 = var7.fork;
                    var2 = var2.bind(var7)();
                    var3 = var5.bind(var6)(var3, var2, var1);
                    var2 = var3.join;
                    var2 = var2.bind(var3)();
                case 497:
                    var2 = var4.properties;
                    var3 = var2.oneofKind;
                    var2 = 'paymentModalBanner';
                    if (!(var2 === var3)) {
                        _fun57961_ip = 629;
                        continue _fun57961
                    }
                case 517:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot1;
                    var2 = 9;
                    var2 = var10[var2];
                    var7 = undefined;
                    var2 = var9.bind(var7)(var2);
                    var6 = var2.PaymentModalBanner;
                    var5 = var6.internalBinaryWrite;
                    var2 = var4.properties;
                    var3 = var2.paymentModalBanner;
                    var8 = var0.tag;
                    var2 = 19;
                    var2 = var10[var2];
                    var2 = var9.bind(var7)(var2);
                    var2 = var2.WireType;
                    var7 = var2.LengthDelimited;
                    var2 = 6;
                    var7 = var8.bind(var0)(var2, var7);
                    var2 = var7.fork;
                    var2 = var2.bind(var7)();
                    var3 = var5.bind(var6)(var3, var2, var1);
                    var2 = var3.join;
                    var2 = var2.bind(var3)();
                case 629:
                    var2 = var4.properties;
                    var3 = var2.oneofKind;
                    var2 = 'mobileBottomSheet';
                    if (!(var2 === var3)) {
                        _fun57961_ip = 761;
                        continue _fun57961
                    }
                case 649:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot1;
                    var2 = 10;
                    var2 = var10[var2];
                    var7 = undefined;
                    var2 = var9.bind(var7)(var2);
                    var6 = var2.MobileBottomSheet;
                    var5 = var6.internalBinaryWrite;
                    var2 = var4.properties;
                    var3 = var2.mobileBottomSheet;
                    var8 = var0.tag;
                    var2 = 19;
                    var2 = var10[var2];
                    var2 = var9.bind(var7)(var2);
                    var2 = var2.WireType;
                    var7 = var2.LengthDelimited;
                    var2 = 7;
                    var7 = var8.bind(var0)(var2, var7);
                    var2 = var7.fork;
                    var2 = var2.bind(var7)();
                    var3 = var5.bind(var6)(var3, var2, var1);
                    var2 = var3.join;
                    var2 = var2.bind(var3)();
                case 761:
                    var2 = var4.properties;
                    var3 = var2.oneofKind;
                    var2 = 'giftIcon';
                    if (!(var2 === var3)) {
                        _fun57961_ip = 893;
                        continue _fun57961
                    }
                case 781:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot1;
                    var2 = 11;
                    var2 = var10[var2];
                    var7 = undefined;
                    var2 = var9.bind(var7)(var2);
                    var6 = var2.GiftIcon;
                    var5 = var6.internalBinaryWrite;
                    var2 = var4.properties;
                    var3 = var2.giftIcon;
                    var8 = var0.tag;
                    var2 = 19;
                    var2 = var10[var2];
                    var2 = var9.bind(var7)(var2);
                    var2 = var2.WireType;
                    var7 = var2.LengthDelimited;
                    var2 = 8;
                    var7 = var8.bind(var0)(var2, var7);
                    var2 = var7.fork;
                    var2 = var2.bind(var7)();
                    var3 = var5.bind(var6)(var3, var2, var1);
                    var2 = var3.join;
                    var2 = var2.bind(var3)();
                case 893:
                    var2 = var4.properties;
                    var3 = var2.oneofKind;
                    var2 = 'giftIconCoachmark';
                    if (!(var2 === var3)) {
                        _fun57961_ip = 1025;
                        continue _fun57961
                    }
                case 913:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot1;
                    var2 = 12;
                    var2 = var10[var2];
                    var7 = undefined;
                    var2 = var9.bind(var7)(var2);
                    var6 = var2.GiftIconCoachmark;
                    var5 = var6.internalBinaryWrite;
                    var2 = var4.properties;
                    var3 = var2.giftIconCoachmark;
                    var8 = var0.tag;
                    var2 = 19;
                    var2 = var10[var2];
                    var2 = var9.bind(var7)(var2);
                    var2 = var2.WireType;
                    var7 = var2.LengthDelimited;
                    var2 = 9;
                    var7 = var8.bind(var0)(var2, var7);
                    var2 = var7.fork;
                    var2 = var2.bind(var7)();
                    var3 = var5.bind(var6)(var3, var2, var1);
                    var2 = var3.join;
                    var2 = var2.bind(var3)();
                case 1025:
                    var2 = var4.properties;
                    var3 = var2.oneofKind;
                    var2 = 'giftPlanSelectionCardBanner';
                    if (!(var2 === var3)) {
                        _fun57961_ip = 1157;
                        continue _fun57961
                    }
                case 1045:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot1;
                    var2 = 13;
                    var2 = var10[var2];
                    var7 = undefined;
                    var2 = var9.bind(var7)(var2);
                    var6 = var2.GiftPlanSelectionCardBanner;
                    var5 = var6.internalBinaryWrite;
                    var2 = var4.properties;
                    var3 = var2.giftPlanSelectionCardBanner;
                    var8 = var0.tag;
                    var2 = 19;
                    var2 = var10[var2];
                    var2 = var9.bind(var7)(var2);
                    var2 = var2.WireType;
                    var7 = var2.LengthDelimited;
                    var2 = 10;
                    var7 = var8.bind(var0)(var2, var7);
                    var2 = var7.fork;
                    var2 = var2.bind(var7)();
                    var3 = var5.bind(var6)(var3, var2, var1);
                    var2 = var3.join;
                    var2 = var2.bind(var3)();
                case 1157:
                    var2 = var4.properties;
                    var3 = var2.oneofKind;
                    var2 = 'giftCustomizationBanner';
                    if (!(var2 === var3)) {
                        _fun57961_ip = 1289;
                        continue _fun57961
                    }
                case 1177:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot1;
                    var2 = 14;
                    var2 = var10[var2];
                    var7 = undefined;
                    var2 = var9.bind(var7)(var2);
                    var6 = var2.GiftCustomizationBanner;
                    var5 = var6.internalBinaryWrite;
                    var2 = var4.properties;
                    var3 = var2.giftCustomizationBanner;
                    var8 = var0.tag;
                    var2 = 19;
                    var2 = var10[var2];
                    var2 = var9.bind(var7)(var2);
                    var2 = var2.WireType;
                    var7 = var2.LengthDelimited;
                    var2 = 11;
                    var7 = var8.bind(var0)(var2, var7);
                    var2 = var7.fork;
                    var2 = var2.bind(var7)();
                    var3 = var5.bind(var6)(var3, var2, var1);
                    var2 = var3.join;
                    var2 = var2.bind(var3)();
                case 1289:
                    var2 = var4.properties;
                    var3 = var2.oneofKind;
                    var2 = 'billingSettingsNitroGiftBanner';
                    if (!(var2 === var3)) {
                        _fun57961_ip = 1421;
                        continue _fun57961
                    }
                case 1309:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot1;
                    var2 = 15;
                    var2 = var10[var2];
                    var7 = undefined;
                    var2 = var9.bind(var7)(var2);
                    var6 = var2.BillingSettingsNitroGiftBanner;
                    var5 = var6.internalBinaryWrite;
                    var2 = var4.properties;
                    var3 = var2.billingSettingsNitroGiftBanner;
                    var8 = var0.tag;
                    var2 = 19;
                    var2 = var10[var2];
                    var2 = var9.bind(var7)(var2);
                    var2 = var2.WireType;
                    var7 = var2.LengthDelimited;
                    var2 = 12;
                    var7 = var8.bind(var0)(var2, var7);
                    var2 = var7.fork;
                    var2 = var2.bind(var7)();
                    var3 = var5.bind(var6)(var3, var2, var1);
                    var2 = var3.join;
                    var2 = var2.bind(var3)();
                case 1421:
                    var2 = var4.properties;
                    var3 = var2.oneofKind;
                    var2 = 'giftReminderNagbar';
                    if (!(var2 === var3)) {
                        _fun57961_ip = 1553;
                        continue _fun57961
                    }
                case 1441:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot1;
                    var2 = 16;
                    var2 = var10[var2];
                    var7 = undefined;
                    var2 = var9.bind(var7)(var2);
                    var6 = var2.GiftReminderNagbar;
                    var5 = var6.internalBinaryWrite;
                    var2 = var4.properties;
                    var3 = var2.giftReminderNagbar;
                    var8 = var0.tag;
                    var2 = 19;
                    var2 = var10[var2];
                    var2 = var9.bind(var7)(var2);
                    var2 = var2.WireType;
                    var7 = var2.LengthDelimited;
                    var2 = 13;
                    var7 = var8.bind(var0)(var2, var7);
                    var2 = var7.fork;
                    var2 = var2.bind(var7)();
                    var3 = var5.bind(var6)(var3, var2, var1);
                    var2 = var3.join;
                    var2 = var2.bind(var3)();
                case 1553:
                    var2 = var4.properties;
                    var3 = var2.oneofKind;
                    var2 = 'giftReminderCoachmark';
                    if (!(var2 === var3)) {
                        _fun57961_ip = 1685;
                        continue _fun57961
                    }
                case 1573:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot1;
                    var2 = 17;
                    var2 = var10[var2];
                    var7 = undefined;
                    var2 = var9.bind(var7)(var2);
                    var6 = var2.GiftReminderCoachmark;
                    var5 = var6.internalBinaryWrite;
                    var2 = var4.properties;
                    var3 = var2.giftReminderCoachmark;
                    var8 = var0.tag;
                    var2 = 19;
                    var2 = var10[var2];
                    var2 = var9.bind(var7)(var2);
                    var2 = var2.WireType;
                    var7 = var2.LengthDelimited;
                    var2 = 14;
                    var7 = var8.bind(var0)(var2, var7);
                    var2 = var7.fork;
                    var2 = var2.bind(var7)();
                    var3 = var5.bind(var6)(var3, var2, var1);
                    var2 = var3.join;
                    var2 = var2.bind(var3)();
                case 1685:
                    var2 = var4.properties;
                    var3 = var2.oneofKind;
                    var2 = 'premiumTabTooltip';
                    if (!(var2 === var3)) {
                        _fun57961_ip = 1817;
                        continue _fun57961
                    }
                case 1705:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot1;
                    var2 = 18;
                    var2 = var10[var2];
                    var7 = undefined;
                    var2 = var9.bind(var7)(var2);
                    var6 = var2.PremiumTabTooltip;
                    var5 = var6.internalBinaryWrite;
                    var2 = var4.properties;
                    var3 = var2.premiumTabTooltip;
                    var8 = var0.tag;
                    var2 = 19;
                    var2 = var10[var2];
                    var2 = var9.bind(var7)(var2);
                    var2 = var2.WireType;
                    var7 = var2.LengthDelimited;
                    var2 = 15;
                    var7 = var8.bind(var0)(var2, var7);
                    var2 = var7.fork;
                    var2 = var2.bind(var7)();
                    var3 = var5.bind(var6)(var3, var2, var1);
                    var2 = var3.join;
                    var2 = var2.bind(var3)();
                case 1817:
                    var3 = var4.contentIdentifier;
                    var2 = '';
                    if (!(var2 !== var3)) {
                        _fun57961_ip = 1897;
                        continue _fun57961
                    }
                case 1831:
                    var5 = var0.tag;
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 19;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var6.bind(var2)(var3);
                    var2 = var2.WireType;
                    var3 = var2.LengthDelimited;
                    var2 = 3;
                    var5 = var5.bind(var0)(var2, var3);
                    var3 = var5.string;
                    var2 = var4.contentIdentifier;
                    var2 = var3.bind(var5)(var2);
                case 1897:
                    var3 = var1.writeUnknownFields;
                    var1 = false;
                    if (!(var1 !== var3)) {
                        _fun57961_ip = 1971;
                        continue _fun57961
                    }
                case 1909:
                    var1 = 1;
                    if (!(var1 == var3)) {
                        _fun57961_ip = 1953;
                        continue _fun57961
                    }
                case 1916:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 19;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                    var1 = var1.UnknownFieldHandler;
                    var3 = var1.onWrite;
                case 1953:
                    var1 = this;
                    var2 = var1.typeName;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2, var4, var0);
                case 1971:
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = var1.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var1
        }
    });
    var12 = var3;
    var1 = new var12[var1](var11);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 20;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = '../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/premium_marketing_component_properties.tsx';
    var3 = var4.bind(var5)(var3);
    var2.PremiumMarketingComponentProperties = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 6, 7, 15, 17, 18, 7100, 7101, 7102, 7103, 7104, 7105, 7107, 7109, 7110, 7111, 7112, 7113, 7114, 1313, 2]);