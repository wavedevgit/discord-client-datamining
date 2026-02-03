// modules/premium/powerups/utils/storeListingToGuildPowerup.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var6 = var3.DEFAULT_SOUND_SLOTS;
    var _closure1_slot0 = var6;
    var3 = var3.DEFAULT_STICKER_SLOTS;
    var _closure1_slot1 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.GuildPowerupType;
    var _closure1_slot2 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.DEFAULT_EMOJI_SLOTS;
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/powerups/utils/storeListingToGuildPowerup.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        _fun78474: for (var _fun78474_ip = 0;;) switch (_fun78474_ip) {
            case 0:
                var16 = arg0;
                var1 = arg1;
                var2 = var1.powerup_metadata;
                var15 = null;
                var3 = var15 == var2;
                var0 = undefined;
                var5 = undefined;
                if (var3) {
                    _fun78474_ip = 35;
                    continue _fun78474
                }
            case 27:
                var5 = var2.category_type;
            case 35:
                if (!(var15 != var5)) {
                    _fun78474_ip = 274;
                    continue _fun78474
                }
            case 42:
                var2 = var1.sku;
                var4 = var15 == var2;
                var3 = undefined;
                if (var4) {
                    _fun78474_ip = 63;
                    continue _fun78474
                }
            case 57:
                var3 = var2.powerup_metadata;
            case 63:
                if (!(var15 != var3)) {
                    _fun78474_ip = 274;
                    continue _fun78474
                }
            case 70:
                var2 = {};
                var4 = var1.summary;
                var2.title = var4;
                var4 = var1.sku;
                var4 = var4.id;
                var2.skuId = var4;
                var3 = var3.boost_price;
                var2.cost = var3;
                var3 = var1.sku;
                var3 = var3.dependent_sku_id;
                if (!(var15 == var3)) {
                    _fun78474_ip = 131;
                    continue _fun78474
                }
            case 125:
                var3 = new Array(0);
                _fun78474_ip = 154;
                continue _fun78474;
            case 131:
                var4 = var1.sku;
                var6 = var4.dependent_sku_id;
                var4 = new Array(1);
                var4[0] = var6;
                var3 = var4;
            case 154:
                var2.dependencies = var3;
                var4 = var1.powerup_metadata;
                var6 = var15 == var4;
                var3 = undefined;
                if (var6) {
                    _fun78474_ip = 182;
                    continue _fun78474
                }
            case 174:
                var3 = var4.animated_image_url;
            case 182:
                var2.animatedImageUrl = var3;
                var4 = var1.powerup_metadata;
                var6 = var15 == var4;
                var3 = undefined;
                if (var6) {
                    _fun78474_ip = 210;
                    continue _fun78474
                }
            case 202:
                var3 = var4.static_image_url;
            case 210:
                var2.staticImageUrl = var3;
                var4 = var1.powerup_metadata;
                var6 = var15 == var4;
                var3 = undefined;
                if (var6) {
                    _fun78474_ip = 238;
                    continue _fun78474
                }
            case 230:
                var3 = var4.store_removal_date;
            case 238:
                var2.storeRemovalDate = var3;
                var4 = _closure1_slot2;
                var4 = var4.LEVEL;
                if (!(var4 !== var5)) {
                    _fun78474_ip = 327;
                    continue _fun78474
                }
            case 260:
                var4 = _closure1_slot2;
                var4 = var4.PERK;
                if (!(var4 !== var5)) {
                    _fun78474_ip = 276;
                    continue _fun78474
                }
            case 274:
                return var0;
            case 276:
                var4 = {};
                var5 = _closure1_slot2;
                var5 = var5.PERK;
                var4.type = var5;
                var6 = var1.description;
                var7 = var15 != var6;
                var5 = '';
                if (!var7) {
                    _fun78474_ip = 311;
                    continue _fun78474
                }
            case 308:
                var5 = var6;
            case 311:
                var4.description = var5;
                var24 = var4;
                var23 = var2;
                var5 = copyDataProperties(var24, var23);
                return var4;
            case 327:
                var4 = var1.sku;
                var5 = var4.powerup_metadata;
                var6 = var15 == var5;
                var4 = undefined;
                if (var6) {
                    _fun78474_ip = 354;
                    continue _fun78474
                }
            case 348:
                var4 = var5.guild_features;
            case 354:
                if (!(var15 != var4)) {
                    _fun78474_ip = 847;
                    continue _fun78474
                }
            case 361:
                var6 = _closure1_slot3;
                var5 = var4.additional_emoji_slots;
                var13 = var6 + var5;
                var6 = _closure1_slot0;
                var5 = var4.additional_sound_slots;
                var12 = var6 + var5;
                var8 = _closure1_slot1;
                var5 = var4.additional_sticker_slots;
                var11 = var8 + var5;
                var1 = var1.sku;
                var1 = var1.dependent_sku_id;
                var _closure2_slot0 = var1;
                var1 = var15 != var1;
                var10 = undefined;
                var9 = undefined;
                var8 = undefined;
                var7 = var13;
                var6 = var12;
                var5 = var11;
                if (!var1) {
                    _fun78474_ip = 775;
                    continue _fun78474
                }
            case 444:
                var18 = var16.find;
                var1 = function(arg0) { // Environment: var17
                    var1 = _closure2_slot0;
                    var0 = arg0;
                    var0 = var0.sku;
                    var0 = var0.id;
                    var0 = var1 === var0;
                    return var0;
                };
                var21 = var18.bind(var16)(var1);
                var1 = var15 == var21;
                var18 = undefined;
                if (var1) {
                    _fun78474_ip = 533;
                    continue _fun78474
                }
            case 470:
                var1 = var21.sku;
                var19 = var15 == var1;
                var10 = var1;
                var18 = undefined;
                if (var19) {
                    _fun78474_ip = 533;
                    continue _fun78474
                }
            case 488:
                var1 = var1.powerup_metadata;
                var19 = var15 == var1;
                var10 = var1;
                var18 = undefined;
                if (var19) {
                    _fun78474_ip = 533;
                    continue _fun78474
                }
            case 506:
                var19 = var1.guild_features;
                var1 = var15 == var19;
                var10 = var19;
                var18 = undefined;
                if (var1) {
                    _fun78474_ip = 533;
                    continue _fun78474
                }
            case 524:
                var18 = var19.additional_emoji_slots;
                var10 = var19;
            case 533:
                var19 = var15 != var18;
                var1 = 0;
                if (!var19) {
                    _fun78474_ip = 545;
                    continue _fun78474
                }
            case 542:
                var1 = var18;
            case 545:
                var20 = var13 + var1;
                var1 = var15 == var21;
                var18 = undefined;
                if (var1) {
                    _fun78474_ip = 621;
                    continue _fun78474
                }
            case 558:
                var1 = var21.sku;
                var19 = var15 == var1;
                var9 = var1;
                var18 = undefined;
                if (var19) {
                    _fun78474_ip = 621;
                    continue _fun78474
                }
            case 576:
                var1 = var1.powerup_metadata;
                var19 = var15 == var1;
                var9 = var1;
                var18 = undefined;
                if (var19) {
                    _fun78474_ip = 621;
                    continue _fun78474
                }
            case 594:
                var19 = var1.guild_features;
                var1 = var15 == var19;
                var9 = var19;
                var18 = undefined;
                if (var1) {
                    _fun78474_ip = 621;
                    continue _fun78474
                }
            case 612:
                var18 = var19.additional_sound_slots;
                var9 = var19;
            case 621:
                var19 = var15 != var18;
                var1 = 0;
                if (!var19) {
                    _fun78474_ip = 633;
                    continue _fun78474
                }
            case 630:
                var1 = var18;
            case 633:
                var19 = var12 + var1;
                var1 = var15 == var21;
                var18 = undefined;
                if (var1) {
                    _fun78474_ip = 709;
                    continue _fun78474
                }
            case 646:
                var1 = var21.sku;
                var22 = var15 == var1;
                var8 = var1;
                var18 = undefined;
                if (var22) {
                    _fun78474_ip = 709;
                    continue _fun78474
                }
            case 664:
                var1 = var1.powerup_metadata;
                var22 = var15 == var1;
                var8 = var1;
                var18 = undefined;
                if (var22) {
                    _fun78474_ip = 709;
                    continue _fun78474
                }
            case 682:
                var22 = var1.guild_features;
                var1 = var15 == var22;
                var8 = var22;
                var18 = undefined;
                if (var1) {
                    _fun78474_ip = 709;
                    continue _fun78474
                }
            case 700:
                var18 = var22.additional_sticker_slots;
                var8 = var22;
            case 709:
                var22 = var15 != var18;
                var1 = 0;
                if (!var22) {
                    _fun78474_ip = 721;
                    continue _fun78474
                }
            case 718:
                var1 = var18;
            case 721:
                var18 = var11 + var1;
                var22 = var15 == var21;
                var1 = undefined;
                if (var22) {
                    _fun78474_ip = 746;
                    continue _fun78474
                }
            case 734:
                var21 = var21.sku;
                var1 = var21.dependent_sku_id;
            case 746:
                _closure2_slot0 = var1;
                var13 = var20;
                var12 = var19;
                var11 = var18;
                var7 = var13;
                var6 = var12;
                var5 = var11;
                if (var15 != var1) {
                    _fun78474_ip = 444;
                    continue _fun78474
                }
            case 775:
                var1 = {};
                var3 = _closure1_slot2;
                var3 = var3.LEVEL;
                var1.type = var3;
                var3 = {};
                var24 = var3;
                var23 = var4;
                var4 = copyDataProperties(var24, var23);
                var4 = 'total_emoji_slots';
                var3[var4] = var7;
                var4 = 'total_sound_slots';
                var3[var4] = var6;
                var4 = 'total_sticker_slots';
                var3[var4] = var5;
                var1.features = var3;
                var24 = var1;
                var23 = var2;
                var2 = copyDataProperties(var24, var23);
                return var1;
            case 847:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1615, 6712, 1616, 2]);