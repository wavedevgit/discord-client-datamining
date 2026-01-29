// modules/quests/types/v2/Reward.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var0 = function(arg0) { // Original name: _rewardRedemptionInstructionsFromServer, environment: var1
        _fun46601: for (var _fun46601_ip = 0;;) switch (_fun46601_ip) {
            case 0:
                var8 = arg0;
                var0 = {};
                var7 = global;
                var2 = var7.Object;
                var1 = var2.keys;
                var6 = var1.bind(var2)(var8);
                var1 = var6.length;
                var5 = 0;
                var1 = var5 < var1;
                var4 = undefined;
                var2 = 0;
                if (!var1) {
                    _fun46601_ip = 115;
                    continue _fun46601
                }
            case 44:
                var1 = var6[var2];
                var9 = var7.parseInt;
                var9 = var9.bind(var4)(var1);
                var11 = _closure1_slot0;
                var10 = _closure1_slot1;
                var10 = var10[var5];
                var10 = var11.bind(var4)(var10);
                var11 = var10.QUEST_REWARD_CODE_PLATFORMS_SET;
                var10 = var11.has;
                var10 = var10.bind(var11)(var9);
                if (!var10) {
                    _fun46601_ip = 103;
                    continue _fun46601
                }
            case 95:
                var1 = var8[var1];
                var0[var9] = var1;
            case 103:
                var2 = var2 + 1;
                var1 = var6.length;
                if (var2 < var1) {
                    _fun46601_ip = 44;
                    continue _fun46601
                }
            case 115:
                return var0;
        }
    };
    var _closure1_slot3 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = function(arg0) { // Original name: _questRewardV2FromServer, environment: var1
        _fun46602: for (var _fun46602_ip = 0;;) switch (_fun46602_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.type;
                var4 = _closure1_slot0;
                var0 = _closure1_slot1;
                var6 = 1;
                var0 = var0[var6];
                var5 = undefined;
                var0 = var4.bind(var5)(var0);
                var0 = var0.QuestRewardTypes;
                var0 = var0.REWARD_CODE;
                if (!(var0 !== var2)) {
                    _fun46602_ip = 772;
                    continue _fun46602
                }
            case 52:
                var4 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var6];
                var0 = var4.bind(var5)(var0);
                var0 = var0.QuestRewardTypes;
                var0 = var0.COLLECTIBLE;
                if (!(var0 !== var2)) {
                    _fun46602_ip = 600;
                    continue _fun46602
                }
            case 88:
                var4 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var6];
                var0 = var4.bind(var5)(var0);
                var0 = var0.QuestRewardTypes;
                var0 = var0.VIRTUAL_CURRENCY;
                if (!(var0 !== var2)) {
                    _fun46602_ip = 476;
                    continue _fun46602
                }
            case 124:
                var4 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var6];
                var0 = var4.bind(var5)(var0);
                var0 = var0.QuestRewardTypes;
                var0 = var0.FRACTIONAL_PREMIUM;
                if (!(var0 !== var2)) {
                    _fun46602_ip = 330;
                    continue _fun46602
                }
            case 160:
                var4 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var6];
                var0 = var4.bind(var5)(var0);
                var0 = var0.QuestRewardTypes;
                var0 = var0.IN_GAME;
                if (!(var0 !== var2)) {
                    _fun46602_ip = 195;
                    continue _fun46602
                }
            case 193:
                return var5;
            case 195:
                var0 = {};
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var6];
                var2 = var4.bind(var5)(var2);
                var2 = var2.QuestRewardTypes;
                var2 = var2.IN_GAME;
                var0.type = var2;
                var2 = var1.sku_id;
                var0.skuId = var2;
                var2 = var1.asset;
                var0.asset = var2;
                var2 = var1.asset_video;
                var0.assetVideo = var2;
                var2 = {};
                var7 = _closure1_slot3;
                var4 = var1.messages;
                var4 = var4.redemption_instructions_by_platform;
                var4 = var7.bind(var5)(var4);
                var2.redemptionInstructionsByPlatform = var4;
                var4 = var1.messages;
                var4 = var4.name;
                var2.name = var4;
                var4 = var1.messages;
                var4 = var4.name_with_article;
                var2.nameWithArticle = var4;
                var0.messages = var2;
                return var0;
            case 330:
                var0 = {};
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var6];
                var2 = var4.bind(var5)(var2);
                var2 = var2.QuestRewardTypes;
                var2 = var2.FRACTIONAL_PREMIUM;
                var0.type = var2;
                var2 = var1.sku_id;
                var0.skuId = var2;
                var2 = var1.asset;
                var0.asset = var2;
                var2 = var1.asset_video;
                var0.assetVideo = var2;
                var2 = var1.quantity;
                var0.quantity = var2;
                var2 = {};
                var7 = _closure1_slot3;
                var4 = var1.messages;
                var4 = var4.redemption_instructions_by_platform;
                var4 = var7.bind(var5)(var4);
                var2.redemptionInstructionsByPlatform = var4;
                var4 = var1.messages;
                var4 = var4.name;
                var2.name = var4;
                var4 = var1.messages;
                var4 = var4.name_with_article;
                var2.nameWithArticle = var4;
                var0.messages = var2;
                return var0;
            case 476:
                var0 = {};
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var6];
                var2 = var4.bind(var5)(var2);
                var2 = var2.QuestRewardTypes;
                var2 = var2.VIRTUAL_CURRENCY;
                var0.type = var2;
                var2 = var1.sku_id;
                var0.skuId = var2;
                var2 = {};
                var7 = _closure1_slot3;
                var4 = var1.messages;
                var4 = var4.redemption_instructions_by_platform;
                var4 = var7.bind(var5)(var4);
                var2.redemptionInstructionsByPlatform = var4;
                var4 = var1.messages;
                var4 = var4.name;
                var2.name = var4;
                var4 = var1.messages;
                var4 = var4.name_with_article;
                var2.nameWithArticle = var4;
                var0.messages = var2;
                var2 = var1.orb_quantity;
                var0.orbQuantity = var2;
                return var0;
            case 600:
                var0 = {};
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var6];
                var2 = var4.bind(var5)(var2);
                var2 = var2.QuestRewardTypes;
                var2 = var2.COLLECTIBLE;
                var0.type = var2;
                var2 = var1.sku_id;
                var0.skuId = var2;
                var2 = var1.asset;
                var0.asset = var2;
                var2 = var1.asset_video;
                var0.assetVideo = var2;
                var2 = {};
                var7 = _closure1_slot3;
                var4 = var1.messages;
                var4 = var4.redemption_instructions_by_platform;
                var4 = var7.bind(var5)(var4);
                var2.redemptionInstructionsByPlatform = var4;
                var4 = var1.messages;
                var4 = var4.name;
                var2.name = var4;
                var4 = var1.messages;
                var4 = var4.name_with_article;
                var2.nameWithArticle = var4;
                var0.messages = var2;
                var2 = var1.expires_at;
                var0.expiresAt = var2;
                var2 = var1.expiration_mode;
                var0.expirationMode = var2;
                var2 = var1.expires_at_premium;
                var0.expiresAtPremium = var2;
                return var0;
            case 772:
                var0 = {};
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var6];
                var2 = var4.bind(var5)(var2);
                var2 = var2.QuestRewardTypes;
                var2 = var2.REWARD_CODE;
                var0.type = var2;
                var2 = var1.sku_id;
                var0.skuId = var2;
                var2 = var1.asset;
                var0.asset = var2;
                var2 = var1.asset_video;
                var0.assetVideo = var2;
                var2 = {};
                var4 = _closure1_slot3;
                var3 = var1.messages;
                var3 = var3.redemption_instructions_by_platform;
                var3 = var4.bind(var5)(var3);
                var2.redemptionInstructionsByPlatform = var3;
                var3 = var1.messages;
                var3 = var3.name;
                var2.name = var3;
                var3 = var1.messages;
                var3 = var3.name_with_article;
                var2.nameWithArticle = var3;
                var0.messages = var2;
                var2 = var1.approximate_count;
                var0.approximateCount = var2;
                var1 = var1.redemption_link;
                var0.redemptionLink = var1;
                return var0;
        }
    };
    var _closure1_slot2 = var0;
    var0 = 2;
    var3 = var3[var0];
    var0 = undefined;
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/quests/types/v2/Reward.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Environment: var1
        var1 = arg0;
        var0 = {};
        var2 = var1.assignment_method;
        var0.assignmentMethod = var2;
        var4 = var1.rewards;
        var3 = var4.map;
        var2 = _closure1_slot2;
        var2 = var3.bind(var4)(var2);
        var0.rewards = var2;
        var2 = var1.rewards_expire_at;
        var0.rewardsExpireAt = var2;
        var1 = var1.platforms;
        var0.platforms = var1;
        return var0;
    };
    var2.questRewardsConfigV2FromServer = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5186, 5193, 2]);