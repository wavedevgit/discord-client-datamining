// modules/quests/utils/QuestServerUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var2 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var8;
    var5 = function(arg0) { // Original name: questConfigFromServer, environment: var1
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 1;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.match;
        var0 = arg0;
        var3 = var1.bind(var2)(var0);
        var2 = var3.with;
        var1 = {};
        var0 = 2;
        var1.config_version = var0;
        var0 = function(arg0) { // Environment: var0
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var0 = 2;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.questFromServerV2;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var1 = var2.bind(var3)(var1, var0);
        var0 = var1.exhaustive;
        var0 = var0.bind(var1)();
        return var0;
    };
    var _closure1_slot3 = var5;
    var0 = function(arg0) { // Original name: progressFromServer, environment: var1
        _fun46565: for (var _fun46565_ip = 0;;) switch (_fun46565_ip) {
            case 0:
                var0 = {};
                var1 = global;
                var3 = var1.Object;
                var2 = var3.entries;
                var1 = arg0;
                var9 = var2.bind(var3)(var1);
                var1 = var9.length;
                var8 = 0;
                var1 = var8 < var1;
                var6 = undefined;
                var5 = 2;
                var4 = 1;
                var3 = null;
                var2 = 0;
                if (!var1) {
                    _fun46565_ip = 187;
                    continue _fun46565
                }
            case 56:
                var10 = var9[var2];
                var1 = _closure1_slot2;
                var1 = var1.bind(var6)(var10, var5);
                var10 = var1[var8];
                var11 = var1[var4];
                var1 = {};
                var12 = var11.event_name;
                var1.eventName = var12;
                var12 = var11.value;
                var1.value = var12;
                var12 = var11.updated_at;
                var1.updatedAt = var12;
                var12 = var11.completed_at;
                var1.completedAt = var12;
                var13 = var11.heartbeat;
                var12 = var3 == var13;
                var11 = null;
                if (var12) {
                    _fun46565_ip = 166;
                    continue _fun46565
                }
            case 137:
                var12 = {};
                var14 = var13.last_beat_at;
                var12.lastBeatAt = var14;
                var13 = var13.expires_at;
                var12.expiresAt = var13;
                var11 = var12;
            case 166:
                var1.heartbeat = var11;
                var0[var10] = var1;
                var2 = var2 + 1;
                var1 = var9.length;
                if (var2 < var1) {
                    _fun46565_ip = 56;
                    continue _fun46565
                }
            case 187:
                return var0;
        }
    };
    var _closure1_slot4 = var0;
    var4 = function(arg0) { // Original name: questUserStatusFromServer, environment: var1
        _fun46566: for (var _fun46566_ip = 0;;) switch (_fun46566_ip) {
            case 0:
                var1 = arg0;
                var0 = {};
                var2 = var1.user_id;
                var0.userId = var2;
                var2 = var1.quest_id;
                var0.questId = var2;
                var2 = var1.enrolled_at;
                var0.enrolledAt = var2;
                var2 = var1.completed_at;
                var0.completedAt = var2;
                var2 = var1.claimed_at;
                var0.claimedAt = var2;
                var3 = var1.claimed_tier;
                var2 = null;
                var4 = var2 != var3;
                if (!var4) {
                    _fun46566_ip = 79;
                    continue _fun46566
                }
            case 76:
                var2 = var3;
            case 79:
                var0.claimedTier = var2;
                var2 = var1.last_stream_heartbeat_at;
                var0.lastStreamHeartbeatAt = var2;
                var2 = var1.stream_progress_seconds;
                var0.streamProgressSeconds = var2;
                var2 = var1.dismissed_quest_content;
                var0.dismissedQuestContent = var2;
                var3 = _closure1_slot4;
                var2 = var1.progress;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var0.progress = var1;
                return var0;
        }
    };
    var _closure1_slot5 = var4;
    var0 = function(arg0) { // Original name: getSimpleRewardFromServer, environment: var1
        _fun46567: for (var _fun46567_ip = 0;;) switch (_fun46567_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.type;
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 3;
                var3 = var3[var0];
                var0 = undefined;
                var0 = var4.bind(var0)(var3);
                var0 = var0.QuestRewardTypes;
                var0 = var0.VIRTUAL_CURRENCY;
                if (!(var1 !== var0)) {
                    _fun46567_ip = 126;
                    continue _fun46567
                }
            case 49:
                var0 = {};
                var1 = var2.sku_id;
                var0.skuId = var1;
                var1 = var2.type;
                var0.type = var1;
                var1 = var2.name;
                var0.name = var1;
                var1 = var2.name_with_article;
                var0.nameWithArticle = var1;
                var1 = var2.asset;
                var0.asset = var1;
                var1 = var2.asset_video;
                var0.assetVideo = var1;
                var1 = var2.collectible_product;
                var0.collectibleProduct = var1;
                _fun46567_ip = 193;
                continue _fun46567;
            case 126:
                var1 = {};
                var3 = var2.sku_id;
                var1.skuId = var3;
                var3 = var2.type;
                var1.type = var3;
                var3 = var2.name;
                var1.name = var3;
                var3 = var2.name_with_article;
                var1.nameWithArticle = var3;
                var3 = var2.collectible_product;
                var1.collectibleProduct = var3;
                var2 = var2.orb_quantity;
                var1.orbQuantity = var2;
                var0 = var1;
            case 193:
                return var0;
        }
    };
    var _closure1_slot6 = var0;
    var0 = function(arg0) { // Original name: getClaimedQuestFromServer, environment: var1
        var1 = arg0;
        var0 = {};
        var2 = var1.id;
        var0.id = var2;
        var2 = var1.starts_at;
        var0.startsAt = var2;
        var2 = var1.expires_at;
        var0.expiresAt = var2;
        var2 = var1.features;
        var0.features = var2;
        var2 = {};
        var3 = var1.messages;
        var3 = var3.quest_name;
        var2.questName = var3;
        var3 = var1.messages;
        var3 = var3.game_publisher;
        var2.gamePublisher = var3;
        var3 = var1.messages;
        var3 = var3.game_title;
        var2.gameTitle = var3;
        var0.messages = var2;
        var2 = {};
        var3 = var1.assets;
        var3 = var3.hero;
        var2.hero = var3;
        var3 = var1.assets;
        var3 = var3.hero_video;
        var2.heroVideo = var3;
        var3 = var1.assets;
        var3 = var3.quest_bar_hero;
        var2.questBarHero = var3;
        var3 = var1.assets;
        var3 = var3.quest_bar_hero_video;
        var2.questBarHeroVideo = var3;
        var3 = var1.assets;
        var3 = var3.game_tile;
        var2.gameTile = var3;
        var3 = var1.assets;
        var3 = var3.logotype;
        var2.logotype = var3;
        var3 = var1.assets;
        var3 = var3.logotype_light;
        var2.logotypeLight = var3;
        var3 = var1.assets;
        var3 = var3.logotype_dark;
        var2.logotypeDark = var3;
        var3 = var1.assets;
        var3 = var3.game_tile_light;
        var2.gameTileLight = var3;
        var3 = var1.assets;
        var3 = var3.game_tile_dark;
        var2.gameTileDark = var3;
        var0.assets = var2;
        var2 = {};
        var3 = var1.colors;
        var3 = var3.primary;
        var2.primary = var3;
        var3 = var1.colors;
        var3 = var3.secondary;
        var2.secondary = var3;
        var0.colors = var2;
        var5 = var1.rewards;
        var4 = var5.map;
        var3 = _closure1_slot6;
        var3 = var4.bind(var5)(var3);
        var0.rewards = var3;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 2;
        var3 = var3[var2];
        var2 = undefined;
        var3 = var4.bind(var2)(var3);
        var2 = var3.questCosponsorMetadataFromServer;
        var1 = var1.cosponsor_metadata;
        var1 = var2.bind(var3)(var1);
        var0.cosponsorMetadata = var1;
        return var0;
    };
    var _closure1_slot7 = var0;
    var3 = function(arg0) { // Original name: questsRewardCodeFromServer, environment: var1
        _fun46569: for (var _fun46569_ip = 0;;) switch (_fun46569_ip) {
            case 0:
                var1 = arg0;
                var0 = {};
                var2 = var1.user_id;
                var0.userId = var2;
                var2 = var1.quest_id;
                var0.questId = var2;
                var2 = var1.code;
                var0.code = var2;
                var2 = var1.platform;
                var0.platform = var2;
                var2 = var1.claimed_at;
                var0.claimedAt = var2;
                var2 = var1.tier;
                var1 = null;
                var3 = var1 != var2;
                if (!var3) {
                    _fun46569_ip = 75;
                    continue _fun46569
                }
            case 72:
                var1 = var2;
            case 75:
                var0.tier = var1;
                return var0;
        }
    };
    var _closure1_slot8 = var3;
    var0 = function(arg0) { // Original name: _questsTenantMetadataFromServer, environment: var1
        _fun46570: for (var _fun46570_ip = 0;;) switch (_fun46570_ip) {
            case 0:
                var1 = arg0;
                var0 = null;
                var3 = var0 == var1;
                var7 = undefined;
                var2 = undefined;
                if (var3) {
                    _fun46570_ip = 22;
                    continue _fun46570
                }
            case 16:
                var2 = var1.quest_rewards;
            case 22:
                if (!(var0 != var2)) {
                    _fun46570_ip = 214;
                    continue _fun46570
                }
            case 29:
                var4 = var1.quest_rewards;
                var1 = var4.reward;
                var2 = var1.tag;
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var6 = 3;
                var1 = var1[var6];
                var1 = var3.bind(var7)(var1);
                var1 = var1.QuestRewardTypes;
                var1 = var1.IN_GAME;
                if (!(var1 !== var2)) {
                    _fun46570_ip = 181;
                    continue _fun46570
                }
            case 85:
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var6];
                var1 = var3.bind(var7)(var1);
                var1 = var1.QuestRewardTypes;
                var1 = var1.REWARD_CODE;
                if (!(var1 !== var2)) {
                    _fun46570_ip = 120;
                    continue _fun46570
                }
            case 118:
                return var7;
            case 120:
                var1 = {};
                var2 = {};
                var3 = {};
                var6 = var4.reward;
                var6 = var6.tag;
                var3.tag = var6;
                var6 = _closure1_slot8;
                var5 = var4.reward;
                var5 = var5.reward_code;
                var5 = var6.bind(var7)(var5);
                var3.rewardCode = var5;
                var2.reward = var3;
                var1.questRewards = var2;
                return var1;
            case 181:
                var1 = {};
                var2 = {};
                var3 = {};
                var4 = var4.reward;
                var4 = var4.tag;
                var3.tag = var4;
                var2.reward = var3;
                var1.questRewards = var2;
                return var1;
            case 214:
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var0 = function(arg0) { // Original name: _questsEntitlementFromServer, environment: var1
        var1 = arg0;
        var0 = {};
        var2 = var1.sku_id;
        var0.skuId = var2;
        var4 = _closure1_slot9;
        var3 = var1.tenant_metadata;
        var2 = undefined;
        var2 = var4.bind(var2)(var3);
        var0.tenantMetadata = var2;
        var1 = var1.consumed;
        var0.consumed = var1;
        return var0;
    };
    var _closure1_slot10 = var0;
    var0 = function(arg0) { // Original name: questHomeTakeoverAssetFromServer, environment: var1
        var1 = arg0;
        var0 = {};
        var2 = var1.alt_text;
        var0.altText = var2;
        var2 = var1.asset_type;
        var0.assetType = var2;
        var1 = var1.url;
        var0.url = var1;
        return var0;
    };
    var _closure1_slot11 = var0;
    var0 = function(arg0) { // Original name: questHomeTakeoverCtaQuestFromServer, environment: var1
        var1 = arg0;
        var0 = {};
        var2 = var1.cta_type;
        var0.ctaType = var2;
        var2 = var1.title;
        var0.title = var2;
        var1 = var1.quest_id;
        var0.questId = var1;
        return var0;
    };
    var _closure1_slot12 = var0;
    var0 = global;
    var10 = var0.Object;
    var9 = var10.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var6);
    var0 = 0;
    var9 = var8[var0];
    var6 = arg2;
    var0 = undefined;
    var6 = var6.bind(var0)(var9);
    var _closure1_slot2 = var6;
    var6 = 5;
    var6 = var8[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/quests/utils/QuestServerUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var6 = function(arg0) { // Original name: isQuestWithKnownConfigVersion, environment: var1
        _fun46574: for (var _fun46574_ip = 0;;) switch (_fun46574_ip) {
            case 0:
                var0 = arg0;
            case 3: // try_start_0
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 1;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.match;
                var0 = var0.config;
                var3 = var1.bind(var2)(var0);
                var2 = var3.with;
                var1 = {};
                var0 = 2;
                var1.config_version = var0;
                var0 = function() { // Environment: var0
                    var0 = true;
                    return var0;
                };
                var1 = var2.bind(var3)(var1, var0);
                var0 = var1.exhaustive;
                var0 = var0.bind(var1)();
            case 83: // try_end0
                return var0;
            case 85: // catch_target0
                CatchBlockStart(arg_register = 0);
                var0 = false;
                return var0;
        }
    };
    var2.isQuestWithKnownConfigVersion = var6;
    var2.questConfigFromServer = var5;
    var2.questUserStatusFromServer = var4;
    var4 = function(arg0) { // Original name: questWithUserStatusFromServer, environment: var1
        _fun46576: for (var _fun46576_ip = 0;;) switch (_fun46576_ip) {
            case 0:
                var1 = arg0;
                var0 = {};
                var2 = var1.id;
                var0.id = var2;
                var2 = var1.preview;
                var0.preview = var2;
                var4 = _closure1_slot3;
                var2 = var1.config;
                var5 = undefined;
                var2 = var4.bind(var5)(var2);
                var0.config = var2;
                var4 = var1.user_status;
                var2 = null;
                var4 = var2 == var4;
                if (var4) {
                    _fun46576_ip = 78;
                    continue _fun46576
                }
            case 63:
                var4 = _closure1_slot5;
                var3 = var1.user_status;
                var2 = var4.bind(var5)(var3);
            case 78:
                var0.userStatus = var2;
                var2 = var1.targeted_content;
                var0.targetedContent = var2;
                var2 = var1.traffic_metadata_raw;
                var0.trafficMetadataRaw = var2;
                var1 = var1.traffic_metadata_sealed;
                var0.trafficMetadataSealed = var1;
                return var0;
        }
    };
    var2.questWithUserStatusFromServer = var4;
    var4 = function(arg0) { // Original name: excludedQuestFromServer, environment: var1
        var1 = arg0;
        var0 = {};
        var2 = var1.id;
        var0.id = var2;
        var1 = var1.replacement_id;
        var0.replacementId = var1;
        return var0;
    };
    var2.excludedQuestFromServer = var4;
    var4 = function(arg0) { // Original name: getClaimedQuestWithUserStatusFromServer, environment: var1
        _fun46578: for (var _fun46578_ip = 0;;) switch (_fun46578_ip) {
            case 0:
                var2 = arg0;
                var0 = {};
                var1 = var2.id;
                var0.id = var1;
                var5 = _closure1_slot7;
                var1 = var2.config;
                var4 = undefined;
                var1 = var5.bind(var4)(var1);
                var0.config = var1;
                var5 = var2.user_status;
                var1 = null;
                var5 = var1 == var5;
                if (var5) {
                    _fun46578_ip = 67;
                    continue _fun46578
                }
            case 52:
                var3 = _closure1_slot5;
                var2 = var2.user_status;
                var1 = var3.bind(var4)(var2);
            case 67:
                var0.userStatus = var1;
                return var0;
        }
    };
    var2.getClaimedQuestWithUserStatusFromServer = var4;
    var2.questsRewardCodeFromServer = var3;
    var3 = function(arg0) { // Original name: questsEntitlementsFromServer, environment: var1
        var1 = arg0;
        var0 = {};
        var2 = var1.claimed_at;
        var0.claimedAt = var2;
        var4 = var1.entitlements;
        var3 = var4.map;
        var2 = _closure1_slot10;
        var2 = var3.bind(var4)(var2);
        var0.items = var2;
        var1 = var1.errors;
        var0.errors = var1;
        return var0;
    };
    var2.questsEntitlementsFromServer = var3;
    var1 = function(arg0) { // Original name: questHomeTakeoverConfigFromServer, environment: var1
        _fun46580: for (var _fun46580_ip = 0;;) switch (_fun46580_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.version;
                var1 = 1;
                if (!(var1 === var2)) {
                    _fun46580_ip = 482;
                    continue _fun46580
                }
            case 19:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var7 = 4;
                var1 = var1[var7];
                var5 = undefined;
                var1 = var2.bind(var5)(var1);
                var1 = var1.QuestPlacementType;
                var2 = var1.QUEST_HOME_BANNER;
                var1 = var0.placements;
                var1 = var2 in var1;
                if (var1) {
                    _fun46580_ip = 73;
                    continue _fun46580
                }
            case 69:
                var1 = null;
                return var1;
            case 73:
                var1 = var0.placements;
                var2 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var7];
                var0 = var2.bind(var5)(var0);
                var0 = var0.QuestPlacementType;
                var0 = var0.QUEST_HOME_BANNER;
                var2 = var1[var0];
                var0 = null;
                if (!(var0 != var2)) {
                    _fun46580_ip = 480;
                    continue _fun46580
                }
            case 121:
                var1 = {};
                var6 = _closure1_slot0;
                var4 = _closure1_slot1;
                var4 = var4[var7];
                var4 = var6.bind(var5)(var4);
                var4 = var4.QuestPlacementType;
                var4 = var4.QUEST_HOME_BANNER;
                var1.placementType = var4;
                var4 = var2.campaign_id;
                var1.campaignId = var4;
                var4 = var2.label_title;
                var1.labelTitle = var4;
                var4 = var2.label_subtitle;
                var1.labelSubtitle = var4;
                var6 = _closure1_slot11;
                var4 = var2.asset_hero_image;
                var4 = var6.bind(var5)(var4);
                var1.assetHeroImage = var4;
                var4 = var2.asset_sponsor_image;
                var4 = var6.bind(var5)(var4);
                var1.assetSponsorImage = var4;
                var6 = var2.cta_sponsor_url;
                var4 = {};
                var7 = var6.cta_type;
                var4.ctaType = var7;
                var7 = var6.title;
                var4.title = var7;
                var6 = var6.url;
                var4.url = var6;
                var1.ctaSponsorUrl = var4;
                var7 = var2.cta_quests;
                var6 = var7.map;
                var4 = _closure1_slot12;
                var4 = var6.bind(var7)(var4);
                var1.ctaQuests = var4;
                var4 = var2.starts_at;
                var1.startsAt = var4;
                var4 = var2.expires_at;
                var1.expiresAt = var4;
                var4 = var2.asset_hero_video;
                if (!(var0 != var4)) {
                    _fun46580_ip = 370;
                    continue _fun46580
                }
            case 347:
                var4 = _closure1_slot11;
                var3 = var2.asset_hero_video;
                var3 = var4.bind(var5)(var3);
                var1.assetHeroVideo = var3;
            case 370:
                var3 = var2.quest_home_entrypoint;
                if (!(var0 != var3)) {
                    _fun46580_ip = 478;
                    continue _fun46580
                }
            case 380:
                var3 = var2.quest_home_entrypoint;
                var2 = {};
                var4 = var3.gradient_start;
                var2.gradientStart = var4;
                var4 = var3.gradient_end;
                var2.gradientEnd = var4;
                var4 = var3.entrypoint_asset_image_url;
                var2.entrypointAssetImageUrl = var4;
                var4 = var3.tooltip_asset_image_url;
                var2.tooltipAssetImageUrl = var4;
                var4 = var3.tooltip_title;
                var2.tooltipTitle = var4;
                var3 = var3.tooltip_subtitle;
                var2.tooltipSubtitle = var3;
                var1.questHomeEntrypoint = var2;
            case 478:
                return var1;
            case 480:
                return var0;
            case 482:
                var0 = null;
                return var0;
        }
    };
    var2.questHomeTakeoverConfigFromServer = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 3418, 5198, 5193, 5186, 2]);