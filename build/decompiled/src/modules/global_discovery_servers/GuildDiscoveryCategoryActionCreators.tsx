// modules/global_discovery_servers/GuildDiscoveryCategoryActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun103637: for (var _fun103637_ip = 0;;) switch (_fun103637_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun103637_ip = 206;
                            continue _fun103637
                        }
                    case 10:
                        var1 = _closure1_slot4;
                        var5 = var1.locale;
                        var3 = _closure1_slot5;
                        var1 = var3.getFetchedLocale;
                        var1 = var1.bind(var3)();
                        if (!(var5 !== var1)) {
                            _fun103637_ip = 198;
                            continue _fun103637
                        }
                    case 46:
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 4;
                        var1 = var4[var1];
                        var4 = undefined;
                        var1 = var3.bind(var4)(var1);
                        var6 = var1.HTTP;
                        var3 = var6.get;
                        var1 = {};
                        var7 = _closure1_slot6;
                        var7 = var7.GUILD_DISCOVERY_CATEGORIES;
                        var1.url = var7;
                        var8 = {};
                        var8.locale = var5;
                        var7 = false;
                        var8.primary_only = var7;
                        var1.query = var8;
                        var8 = true;
                        var1.oldFormErrors = var8;
                        var1.rejectWithError = var7;
                        var1 = var3.bind(var6)(var1);
                        SaveGenerator(address = 135);
                    case 133:
                        return var1;
                    case 135:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun103637_ip = 203;
                            continue _fun103637
                        }
                    case 141:
                        var3 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var2 = 5;
                        var2 = var6[var2];
                        var4 = var3.bind(var4)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var6 = 'GUILD_DISCOVERY_CATEGORY_FETCH_SUCCESS';
                        var2.type = var6;
                        var6 = var1.body;
                        var2.categories = var6;
                        var2.locale = var5;
                        var2 = var3.bind(var4)(var2);
                    case 198:
                        var2 = undefined;
                        return var2;
                    case 203:
                        return var1;
                    case 206:
                        return var0;
                }
            };
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
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun103640: for (var _fun103640_ip = 0;;) switch (_fun103640_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun103640_ip = 326;
                            continue _fun103640
                        }
                    case 10:
                        var6 = arg0;
                    case 13: // try_start_0
                        var2 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 4;
                        var1 = var4[var1];
                        var5 = undefined;
                        var1 = var2.bind(var5)(var1);
                        var4 = var1.HTTP;
                        var2 = var4.get;
                        var1 = {
                            'url': null,
                            'oldFormErrors': true,
                            'rejectWithError': true
                        };
                        var9 = _closure1_slot6;
                        var8 = var9.GUILD_DISCOVERY_METADATA;
                        var7 = var6;
                        var7 = var8.bind(var9)(var7);
                        var1.url = var7;
                        var1 = var2.bind(var4)(var1);
                        SaveGenerator(address = 91);
                    case 89:
                        return var1;
                    case 91:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun103640_ip = 271;
                            continue _fun103640
                        }
                    case 100:
                        var4 = var1.body;
                        var2 = {};
                        var7 = var4.primary_category_id;
                        var2.primaryCategoryId = var7;
                        var7 = var4.category_ids;
                        var2.secondaryCategoryIds = var7;
                        var7 = var4.keywords;
                        var2.keywords = var7;
                        var7 = var4.emoji_discoverability_enabled;
                        var2.emojiDiscoverabilityEnabled = var7;
                        var7 = var4.partner_actioned_timestamp;
                        var2.partnerActionedTimestamp = var7;
                        var7 = var4.partner_application_timestamp;
                        var2.partnerApplicationTimestamp = var7;
                        var7 = var4.is_published;
                        var2.isPublished = var7;
                        var7 = var4.reasons_to_join;
                        var2.reasonsToJoin = var7;
                        var7 = var4.social_links;
                        var2.socialLinks = var7;
                        var4 = var4.about;
                        var2.about = var4;
                        var4 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var3 = 5;
                        var3 = var7[var3];
                        var5 = var4.bind(var5)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var7 = 'GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER';
                        var3.type = var7;
                        var3.guildId = var6;
                        var3.metadata = var2;
                        var3 = var4.bind(var5)(var3);
                    case 268: // try_end0
                        return var2;
                    case 271:
                        return var1;
                    case 274: // catch_target0
                        CatchBlockStart(arg_register = 1);
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 5;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var5 = 'GUILD_DISCOVERY_METADATA_FETCH_FAIL';
                        var2.type = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    case 326:
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
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun103643: for (var _fun103643_ip = 0;;) switch (_fun103643_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun103643_ip = 214;
                            continue _fun103643
                        }
                    case 10:
                        var4 = arg0;
                    case 13: // try_start_0
                        var3 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var1 = 4;
                        var1 = var5[var1];
                        var5 = undefined;
                        var1 = var3.bind(var5)(var1);
                        var6 = var1.HTTP;
                        var3 = var6.get;
                        var1 = {};
                        var9 = _closure1_slot6;
                        var8 = var9.GUILD_DISCOVERY_SLUG;
                        var7 = var4;
                        var7 = var8.bind(var9)(var7);
                        var1.url = var7;
                        var7 = true;
                        var1.rejectWithError = var7;
                        var1 = var3.bind(var6)(var1);
                        SaveGenerator(address = 87);
                    case 85:
                        return var1;
                    case 87:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun103643_ip = 153;
                            continue _fun103643
                        }
                    case 93:
                        var3 = var1.body;
                        var6 = var3.slug;
                        var3 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var2 = 5;
                        var2 = var7[var2];
                        var5 = var3.bind(var5)(var2);
                        var3 = var5.dispatch;
                        var2 = {};
                        var7 = 'GUILD_DISCOVERY_SLUG_FETCH_SUCCESS';
                        var2.type = var7;
                        var2.slug = var6;
                        var2 = var3.bind(var5)(var2);
                    case 151: // try_end0
                        _fun103643_ip = 209;
                        continue _fun103643;
                    case 153:
                        return var1;
                    case 156: // catch_target0
                        CatchBlockStart(arg_register = 1);
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 5;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.dispatch;
                        var1 = {};
                        var5 = 'GUILD_DISCOVERY_SLUG_FETCH_FAIL';
                        var1.type = var5;
                        var1.guildId = var4;
                        var1 = var2.bind(var3)(var1);
                    case 209:
                        var1 = undefined;
                        return var1;
                    case 214:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot9 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot9 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun103646: for (var _fun103646_ip = 0;;) switch (_fun103646_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun103646_ip = 470;
                            continue _fun103646
                        }
                    case 13:
                        var6 = var1.guildId;
                        var17 = var1.primaryCategoryId;
                        var13 = var1.keywords;
                        var16 = var1.emojiDiscoverabilityEnabled;
                        var15 = var1.partnerActionedTimestamp;
                        var14 = var1.partnerApplicationTimestamp;
                        var12 = var1.isPublished;
                        var11 = var1.reasonsToJoin;
                        var10 = var1.socialLinks;
                        var9 = var1.about;
                        var5 = undefined;
                        SaveGenerator(address = 78);
                    case 76:
                        return var5;
                    case 78:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun103646_ip = 467;
                            continue _fun103646
                        }
                    case 87: // try_start_0
                        var4 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var2 = 4;
                        var2 = var7[var2];
                        var2 = var4.bind(var5)(var2);
                        var7 = var2.HTTP;
                        var4 = var7.patch;
                        var2 = {};
                        var19 = _closure1_slot6;
                        var18 = var19.GUILD_DISCOVERY_METADATA;
                        var8 = var6;
                        var8 = var18.bind(var19)(var8);
                        var2.url = var8;
                        var8 = {};
                        var8.primary_category_id = var17;
                        var8.emoji_discoverability_enabled = var16;
                        var8.partner_actioned_timestamp = var15;
                        var8.partner_application_timestamp = var14;
                        var8.keywords = var13;
                        var8.is_published = var12;
                        var8.reasons_to_join = var11;
                        var8.social_links = var10;
                        var8.about = var9;
                        var2.body = var8;
                        var8 = true;
                        var2.oldFormErrors = var8;
                        var8 = false;
                        var2.rejectWithError = var8;
                        var2 = var4.bind(var7)(var2);
                        SaveGenerator(address = 218);
                    case 216:
                        return var2;
                    case 218:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                        if (var4) {
                            _fun103646_ip = 401;
                            continue _fun103646
                        }
                    case 227:
                        var4 = var2.body;
                        var18 = var4.primary_category_id;
                        var17 = var4.category_ids;
                        var16 = var4.keywords;
                        var15 = var4.emoji_discoverability_enabled;
                        var14 = var4.partner_actioned_timestamp;
                        var13 = var4.partner_application_timestamp;
                        var12 = var4.is_published;
                        var11 = var4.reasons_to_join;
                        var10 = var4.social_links;
                        var9 = var4.about;
                        var4 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var3 = 5;
                        var3 = var7[var3];
                        var7 = var4.bind(var5)(var3);
                        var4 = var7.dispatch;
                        var3 = {};
                        var8 = 'GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER';
                        var3.type = var8;
                        var8 = var6;
                        var3.guildId = var8;
                        var8 = {};
                        var8.primaryCategoryId = var18;
                        var8.secondaryCategoryIds = var17;
                        var8.keywords = var16;
                        var8.emojiDiscoverabilityEnabled = var15;
                        var8.partnerActionedTimestamp = var14;
                        var8.partnerApplicationTimestamp = var13;
                        var8.isPublished = var12;
                        var8.reasonsToJoin = var11;
                        var8.socialLinks = var10;
                        var8.about = var9;
                        var3.metadata = var8;
                        var3 = var4.bind(var7)(var3);
                    case 398: // try_end0
                        return var5;
                    case 401:
                        return var2;
                    case 404: // catch_target0
                        CatchBlockStart(arg_register = 2);
                        var4 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var3 = 5;
                        var3 = var7[var3];
                        var5 = var4.bind(var5)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var7 = 'GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL';
                        var3.type = var7;
                        var3.guildId = var6;
                        var6 = var2.body;
                        var3.errors = var6;
                        var3 = var4.bind(var5)(var3);
                        throw var2;
                    case 467:
                        return var1;
                    case 470:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot10 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot10 = var0;
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
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Endpoints;
    var _closure1_slot6 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/global_discovery_servers/GuildDiscoveryCategoryActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
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
    var2.maybeFetchGuildDiscoveryCategories = var3;
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot8;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.fetchMetadataForGuild = var3;
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot9;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.fetchSlugForGuild = var3;
    var3 = function arg0, arg1() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 5;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'GUILD_UPDATE_DISCOVERY_METADATA';
        var1.type = var4;
        var4 = arg0;
        var1.guildId = var4;
        var4 = arg1;
        var1.primaryCategoryId = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.updateGuildPrimaryCategory = var3;
    var3 = function arg0, arg1() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 5;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'GUILD_UPDATE_DISCOVERY_METADATA';
        var1.type = var4;
        var4 = arg0;
        var1.guildId = var4;
        var4 = arg1;
        var1.keywords = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.updateGuildKeywords = var3;
    var3 = function arg0, arg1() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 5;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'GUILD_UPDATE_DISCOVERY_METADATA';
        var1.type = var4;
        var4 = arg0;
        var1.guildId = var4;
        var4 = arg1;
        var1.emojiDiscoverabilityEnabled = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.updateGuildEmojiDiscoverabilityEnabled = var3;
    var3 = function arg0, arg1() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 5;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'GUILD_UPDATE_DISCOVERY_METADATA';
        var1.type = var4;
        var4 = arg0;
        var1.guildId = var4;
        var4 = arg1;
        var1.isPublished = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.updateGuildDiscoveryMetadataIsPublished = var3;
    var3 = function arg0, arg1() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 5;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'GUILD_UPDATE_DISCOVERY_METADATA';
        var1.type = var4;
        var4 = arg0;
        var1.guildId = var4;
        var4 = arg1;
        var1.about = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.updateGuildDiscoveryMetadataAbout = var3;
    var3 = function arg0, arg1() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 5;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'GUILD_UPDATE_DISCOVERY_METADATA';
        var1.type = var4;
        var4 = arg0;
        var1.guildId = var4;
        var4 = arg1;
        var1.reasonsToJoin = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.updateGuildDiscoveryMetadataReasonsToJoin = var3;
    var3 = function arg0, arg1() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 5;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'GUILD_UPDATE_DISCOVERY_METADATA';
        var1.type = var4;
        var4 = arg0;
        var1.guildId = var4;
        var4 = arg1;
        var1.socialLinks = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.updateGuildDiscoveryMetadataSocialLinks = var3;
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot10;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.saveGuildMetadata = var3;
    var3 = function arg0, arg1() {
        var8 = arg0;
        var7 = arg1;
        var _closure2_slot0 = var8;
        var _closure2_slot1 = var7;
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 4;
        var2 = var2[var0];
        var0 = undefined;
        var2 = var3.bind(var0)(var2);
        var4 = var2.HTTP;
        var3 = var4.put;
        var2 = {
            'url': null,
            'oldFormErrors': true,
            'rejectWithError': false
        };
        var6 = _closure1_slot6;
        var5 = var6.GUILD_DISCOVERY_UPDATE_CATEGORY;
        var5 = var5.bind(var6)(var8, var7);
        var2.url = var5;
        var4 = var3.bind(var4)(var2);
        var3 = var4.then;
        var2 = function() { // Environment: var1
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 5;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.dispatch;
            var1 = {};
            var4 = 'GUILD_DISCOVERY_CATEGORY_ADD';
            var1.type = var4;
            var5 = _closure2_slot0;
            var1.guildId = var5;
            var4 = _closure2_slot1;
            var1.categoryId = var4;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        var2 = var3.catch;
        var1 = function(arg0) { // Environment: var1
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 5;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.dispatch;
            var1 = {};
            var4 = 'GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL';
            var1.type = var4;
            var4 = _closure2_slot0;
            var1.guildId = var4;
            var4 = arg0;
            var4 = var4.body;
            var1.errors = var4;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.addGuildCategory = var3;
    var1 = function arg0, arg1() {
        var8 = arg0;
        var7 = arg1;
        var _closure2_slot0 = var8;
        var _closure2_slot1 = var7;
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 4;
        var2 = var2[var0];
        var0 = undefined;
        var2 = var3.bind(var0)(var2);
        var4 = var2.HTTP;
        var3 = var4.del;
        var2 = {
            'url': null,
            'oldFormErrors': true,
            'rejectWithError': false
        };
        var6 = _closure1_slot6;
        var5 = var6.GUILD_DISCOVERY_UPDATE_CATEGORY;
        var5 = var5.bind(var6)(var8, var7);
        var2.url = var5;
        var4 = var3.bind(var4)(var2);
        var3 = var4.then;
        var2 = function() { // Environment: var1
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 5;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.dispatch;
            var1 = {};
            var4 = 'GUILD_DISCOVERY_CATEGORY_DELETE';
            var1.type = var4;
            var5 = _closure2_slot0;
            var1.guildId = var5;
            var4 = _closure2_slot1;
            var1.categoryId = var4;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        var2 = var3.catch;
        var1 = function(arg0) { // Environment: var1
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 5;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.dispatch;
            var1 = {};
            var4 = 'GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL';
            var1.type = var4;
            var4 = _closure2_slot0;
            var1.guildId = var4;
            var4 = arg0;
            var4 = var4.body;
            var1.errors = var4;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.deleteGuildCategory = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 1685, 13546, 660, 507, 806, 2]);