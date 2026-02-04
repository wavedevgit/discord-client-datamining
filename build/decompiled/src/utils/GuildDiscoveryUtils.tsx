// utils/GuildDiscoveryUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var7;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun49768: for (var _fun49768_ip = 0;;) switch (_fun49768_ip) {
                    case 0:
                        StartGenerator();
                        var8 = arg0;
                        var17 = arg1;
                        var6 = arguments[2];
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun49768_ip = 514;
                            continue _fun49768
                        }
                    case 19:
                        var2 = undefined;
                        if (!(var6 === var2)) {
                            _fun49768_ip = 27;
                            continue _fun49768
                        }
                    case 25:
                        var6 = {};
                    case 27:
                        SaveGenerator(address = 31);
                    case 29:
                        return var2;
                    case 31:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun49768_ip = 511;
                            continue _fun49768
                        }
                    case 40:
                        var12 = var6.channelId;
                        var3 = var6.onSuccess;
                        var18 = var6.joinSource;
                        var16 = var6.loadId;
                        var4 = var6.shouldNavigate;
                        var9 = var2 === var4;
                        if (var9) {
                            _fun49768_ip = 81;
                            continue _fun49768
                        }
                    case 78:
                        var9 = var4;
                    case 81:
                        var7 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var4 = 5;
                        var4 = var10[var4];
                        var7 = var7.bind(var2)(var4);
                        var4 = var7.getHistory;
                        var11 = var4.bind(var7)();
                        var7 = _closure1_slot6;
                        var4 = var7.getGuild;
                        var10 = var4.bind(var7)(var8);
                        var7 = {};
                        var4 = {};
                        var4.analyticsSource = var17;
                        var7.state = var4;
                        var4 = null;
                        if (!(var4 != var10)) {
                            _fun49768_ip = 160;
                            continue _fun49768
                        }
                    case 147:
                        var10 = var10.joinedAt;
                        if (!(var4 == var10)) {
                            _fun49768_ip = 379;
                            continue _fun49768
                        }
                    case 160:
                        var13 = _closure1_slot1;
                        var10 = _closure1_slot2;
                        var15 = 8;
                        var10 = var10[var15];
                        var14 = var13.bind(var2)(var10);
                        var13 = var14.joinGuild;
                        var10 = {};
                        var19 = true;
                        var10.lurker = var19;
                        var10.source = var18;
                        var10.loadId = var16;
                        var18 = var4 == var17;
                        var16 = undefined;
                        if (var18) {
                            _fun49768_ip = 219;
                            continue _fun49768
                        }
                    case 213:
                        var16 = var17.page;
                    case 219:
                        var10.lurkLocation = var16;
                        var10 = var13.bind(var14)(var8, var10);
                        SaveGenerator(address = 234);
                    case 232:
                        return var10;
                    case 234:
                        ResumeGenerator(result_out_reg = 10, return_bool_out_reg = 13);
                        if (var13) {
                            _fun49768_ip = 376;
                            continue _fun49768
                        }
                    case 243:
                        if (!var9) {
                            _fun49768_ip = 500;
                            continue _fun49768
                        }
                    case 249:
                        var14 = _closure1_slot1;
                        var13 = _closure1_slot2;
                        var13 = var13[var15];
                        var15 = var14.bind(var2)(var13);
                        var14 = var15.transitionToGuildSync;
                        var13 = {};
                        var23 = var13;
                        var22 = var7;
                        var16 = copyDataProperties(var23, var22);
                        var16 = 'welcomeModalChannelId';
                        var13[var16] = var12;
                        var17 = var4 != var12;
                        var16 = 'navigationReplace';
                        var13[var16] = var17;
                        var17 = var4 != var12;
                        var16 = 'openChannel';
                        var13[var16] = var17;
                        var11 = var11.location;
                        var16 = var11.search;
                        var11 = 'search';
                        var13[var11] = var16;
                        var20 = var6.messageId;
                        var24 = var15;
                        var23 = var8;
                        var22 = var13;
                        var21 = var12;
                        var11 = var24[var14](var23, var22, var21, var20, var19);
                        SaveGenerator(address = 364);
                    case 362:
                        return var11;
                    case 364:
                        ResumeGenerator(result_out_reg = 11, return_bool_out_reg = 13);
                        if (!var13) {
                            _fun49768_ip = 500;
                            continue _fun49768
                        }
                    case 373:
                        return var11;
                    case 376:
                        return var10;
                    case 379:
                        if (!var9) {
                            _fun49768_ip = 500;
                            continue _fun49768
                        }
                    case 382:
                        if (!(var4 != var12)) {
                            _fun49768_ip = 468;
                            continue _fun49768
                        }
                    case 386:
                        var10 = _closure1_slot1;
                        var11 = _closure1_slot2;
                        var9 = 7;
                        var9 = var11[var9];
                        var10 = var10.bind(var2)(var9);
                        var11 = _closure1_slot10;
                        var9 = var11.CHANNEL;
                        var6 = var6.messageId;
                        var9 = var9.bind(var11)(var8, var12, var6);
                        var6 = {};
                        var23 = var6;
                        var22 = var7;
                        var11 = copyDataProperties(var23, var22);
                        var12 = true;
                        var11 = 'navigationReplace';
                        var6[var11] = var12;
                        var11 = 'openChannel';
                        var6[var11] = var12;
                        var6 = var10.bind(var2)(var9, var6);
                        _fun49768_ip = 500;
                        continue _fun49768;
                    case 468:
                        var6 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var5 = 6;
                        var5 = var9[var5];
                        var6 = var6.bind(var2)(var5);
                        var5 = var6.transitionToGuild;
                        var5 = var5.bind(var6)(var8, var7);
                    case 500:
                        if (!(var4 != var3)) {
                            _fun49768_ip = 508;
                            continue _fun49768
                        }
                    case 504:
                        var3 = var3.bind(var2)();
                    case 508:
                        return var2;
                    case 511:
                        return var1;
                    case 514:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot11 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot11 = var0;
    var3 = function arg0() {
        var1 = arg0;
        var0 = {};
        var2 = var1.id;
        var0.id = var2;
        var2 = var1.name;
        var0.name = var2;
        var2 = var1.description;
        var0.description = var2;
        var2 = var1.splash;
        var0.splash = var2;
        var2 = var1.banner;
        var0.banner = var2;
        var2 = var1.icon;
        var0.icon = var2;
        var2 = global;
        var4 = var2.Set;
        var5 = var1.features;
        var3 = var4.prototype;
        var3 = Object.create(var3, {
            constructor: {
                value: var4
            }
        });
        var6 = var3;
        var2 = new var6[var4](var5, var4);
        var2 = var2 instanceof Object ? var2 : var3;
        var0.features = var2;
        var2 = var1.approximate_presence_count;
        var0.presenceCount = var2;
        var2 = var1.approximate_member_count;
        var0.memberCount = var2;
        var2 = var1.premium_subscription_count;
        var0.premiumSubscriptionCount = var2;
        var2 = var1.preferred_locale;
        var0.preferredLocale = var2;
        var2 = var1.discovery_splash;
        var0.discoverySplash = var2;
        var2 = var1.emojis;
        var0.emojis = var2;
        var2 = var1.emoji_count;
        var0.emojiCount = var2;
        var2 = var1.stickers;
        var0.stickers = var2;
        var2 = var1.sticker_count;
        var0.stickerCount = var2;
        var1 = var1.keywords;
        var0.keywords = var1;
        return var0;
    };
    var _closure1_slot12 = var3;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun49772: for (var _fun49772_ip = 0;;) switch (_fun49772_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun49772_ip = 219;
                            continue _fun49772
                        }
                    case 10:
                        var11 = arg0;
                        var5 = undefined;
                        var7 = undefined;
                        var3 = undefined;
                    case 19: // try_start_0
                        var4 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var1 = 10;
                        var1 = var10[var1];
                        var1 = var4.bind(var5)(var1);
                        var6 = var1.HTTP;
                        var4 = var6.get;
                        var1 = {};
                        var8 = _closure1_slot9;
                        var8 = var8.GUILD_DISCOVERY;
                        var1.url = var8;
                        var9 = _closure1_slot1;
                        var8 = 11;
                        var8 = var10[var8];
                        var10 = var9.bind(var5)(var8);
                        var9 = var10.stringify;
                        var8 = {};
                        var8.guild_ids = var11;
                        var8 = var9.bind(var10)(var8);
                        var1.query = var8;
                        var8 = true;
                        var1.oldFormErrors = var8;
                        var1.rejectWithError = var8;
                        var1 = var4.bind(var6)(var1);
                        SaveGenerator(address = 127);
                    case 125:
                        return var1;
                    case 127:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun49772_ip = 209;
                            continue _fun49772
                        }
                    case 133:
                        var4 = var1.body;
                        var7 = var4;
                        var6 = null;
                        var8 = var6 == var4;
                        var4 = undefined;
                        if (var8) {
                            _fun49772_ip = 182;
                            continue _fun49772
                        }
                    case 152:
                        var8 = var7;
                        var8 = var8.guilds;
                        var7 = var8;
                        var8 = var6 == var8;
                        var4 = undefined;
                        if (var8) {
                            _fun49772_ip = 182;
                            continue _fun49772
                        }
                    case 173:
                        var8 = var7;
                        var7 = 0;
                        var4 = var8[var7];
                    case 182:
                        var3 = var4;
                        if (!(var6 != var4)) {
                            _fun49772_ip = 203;
                            continue _fun49772
                        }
                    case 189:
                        var4 = _closure1_slot12;
                        var2 = var3;
                        var2 = var4.bind(var5)(var2);
                        _fun49772_ip = 206;
                        continue _fun49772;
                    case 203:
                        var2 = var3;
                    case 206: // try_end0
                        return var2;
                    case 209:
                        return var1;
                    case 212: // catch_target0
                        CatchBlockStart(arg_register = 1);
                        var1 = null;
                        return var1;
                    case 219:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot13 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot13 = var0;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var7[var0];
    var0 = undefined;
    var4 = var5.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var7[var4];
    var4 = var6.bind(var0)(var4);
    var5 = var4.AnalyticEvents;
    var _closure1_slot7 = var5;
    var5 = var4.SearchTypes;
    var _closure1_slot8 = var5;
    var5 = var4.Endpoints;
    var _closure1_slot9 = var5;
    var4 = var4.Routes;
    var _closure1_slot10 = var4;
    var4 = {};
    var5 = 'Search';
    var4.SEARCH = var5;
    var5 = 'Recommended';
    var4.RECOMMENDED = var5;
    var5 = 'Popular';
    var4.POPULAR = var5;
    var5 = 'Recommended - E3';
    var4.RECOMMENDED_E3 = var5;
    var5 = 'Header';
    var4.HEADER = var5;
    var5 = 'Global Discovery';
    var4.GLOBAL_DISCOVERY = var5;
    var5 = 'Forward Breadcrumb';
    var4.FORWARD_BREADCRUMB = var5;
    var5 = 12;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'utils/GuildDiscoveryUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var2.AnalyticsContexts = var4;
    var4 = '>1000';
    var2.IOS_MINIMUM_MEMBER_COUNT = var4;
    var4 = '>200';
    var2.MINIMUM_MEMBER_COUNT = var4;
    var4 = function() {
        var0 = undefined;
        var3 = _closure1_slot11;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.startLurking = var4;
    var2.makeDiscoverableGuild = var3;
    var3 = function arg0, arg1() {
        _fun49774: for (var _fun49774_ip = 0;;) switch (_fun49774_ip) {
            case 0:
                var5 = arguments[2];
                var0 = undefined;
                if (!(var5 === var0)) {
                    _fun49774_ip = 11;
                    continue _fun49774
                }
            case 9:
                var5 = null;
            case 11:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 9;
                var2 = var4[var2];
                var4 = var3.bind(var0)(var2);
                var3 = var4.track;
                var1 = _closure1_slot7;
                var2 = var1.GUILD_DISCOVERY_EXITED;
                var1 = {};
                var6 = arg0;
                var1.load_id = var6;
                var6 = arg1;
                var1.guild_ids_viewed = var6;
                var1.recommendations_source = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var0;
        }
    };
    var2.trackDiscoveryExited = var3;
    var3 = function arg0() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 9;
        var2 = var2[var0];
        var0 = undefined;
        var4 = var3.bind(var0)(var2);
        var3 = var4.track;
        var1 = _closure1_slot7;
        var2 = var1.SEARCH_CLOSED;
        var1 = {};
        var5 = arg0;
        var1.load_id = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var2.trackSearchClosed = var3;
    var3 = function arg0, arg1() {
        _fun49776: for (var _fun49776_ip = 0;;) switch (_fun49776_ip) {
            case 0:
                var5 = arguments[2];
                var0 = undefined;
                if (!(var5 === var0)) {
                    _fun49776_ip = 11;
                    continue _fun49776
                }
            case 9:
                var5 = {};
            case 11:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 9;
                var1 = var3[var1];
                var4 = var2.bind(var0)(var1);
                var3 = var4.track;
                var1 = _closure1_slot7;
                var2 = var1.SEARCH_STARTED;
                var1 = {};
                var6 = _closure1_slot8;
                var6 = var6.GUILD_DISCOVERY;
                var1.search_type = var6;
                var6 = arg0;
                var1.load_id = var6;
                var5 = var5.location;
                var1.location = var5;
                var5 = arg1;
                var1.category_id = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var0;
        }
    };
    var2.trackSearchStarted = var3;
    var3 = function arg0() {
        var0 = arg0;
        var6 = var0.withCounts;
        var5 = var0.offset;
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 9;
        var2 = var2[var0];
        var0 = undefined;
        var4 = var3.bind(var0)(var2);
        var3 = var4.track;
        var1 = _closure1_slot7;
        var2 = var1.GUILD_DISCOVERY_SEARCH_START;
        var1 = {};
        var1.with_counts = var6;
        var1.offset = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var2.trackGuildDiscoverySearchStart = var3;
    var3 = function arg0() {
        var0 = arg0;
        var8 = var0.categoryId;
        var7 = var0.error;
        var6 = var0.willRequestRetry;
        var5 = var0.isRequestRetry;
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 9;
        var2 = var2[var0];
        var0 = undefined;
        var4 = var3.bind(var0)(var2);
        var3 = var4.track;
        var1 = _closure1_slot7;
        var2 = var1.GUILD_DISCOVERY_SEARCH_FAILED;
        var1 = {};
        var1.category_id = var8;
        var8 = var7.status;
        var1.request_status = var8;
        var7 = var7.code;
        var1.request_error_code = var7;
        var1.will_request_retry = var6;
        var1.is_request_retry = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var2.trackSearchFailed = var3;
    var3 = function arg0() {
        var0 = arg0;
        var5 = var0.categoryId;
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 9;
        var2 = var2[var0];
        var0 = undefined;
        var4 = var3.bind(var0)(var2);
        var3 = var4.track;
        var1 = _closure1_slot7;
        var2 = var1.GUILD_DISCOVERY_GET_FEATURED_GUILDS_FAILED;
        var1 = {};
        var1.category_id = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var2.trackGuildDiscoveryGetFeaturedGuildsFailed = var3;
    var3 = function arg0() {
        _fun49780: for (var _fun49780_ip = 0;;) switch (_fun49780_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.loadId;
                var8 = var0.searchId;
                var7 = var0.query;
                var11 = var0.guildResults;
                var6 = var0.analyticsContext;
                var5 = var0.categoryId;
                var10 = var0.isTagSearch;
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 9;
                var1 = var1[var0];
                var0 = undefined;
                var4 = var2.bind(var0)(var1);
                var3 = var4.track;
                var1 = _closure1_slot7;
                var2 = var1.SEARCH_RESULT_VIEWED;
                var1 = {};
                var12 = _closure1_slot8;
                if (var10) {
                    _fun49780_ip = 106;
                    continue _fun49780
                }
            case 98:
                var10 = var12.GUILD_DISCOVERY;
                _fun49780_ip = 112;
                continue _fun49780;
            case 106:
                var10 = var12.GUILD_DISCOVERY_TAG;
            case 112:
                var1.search_type = var10;
                var1.load_id = var9;
                var1.search_id = var8;
                var9 = var0 !== var11;
                var10 = null;
                if (!var9) {
                    _fun49780_ip = 143;
                    continue _fun49780
                }
            case 138:
                var10 = var11.length;
            case 143:
                var1.total_results = var10;
                var8 = null;
                if (!var9) {
                    _fun49780_ip = 170;
                    continue _fun49780
                }
            case 153:
                var10 = var11.map;
                var9 = function(arg0) { // Environment: var9
                    var0 = arg0;
                    var0 = var0.id;
                    return var0;
                };
                var8 = var10.bind(var11)(var9);
            case 170:
                var1.guild_ids = var8;
                var1.query = var7;
                var6 = var6.location;
                var1.location = var6;
                var1.category_id = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var0;
        }
    };
    var2.trackSearchResultsViewed = var3;
    var3 = function arg0() {
        var7 = arg0;
        var1 = _closure1_slot4;
        var0 = var1.getLoadId;
        var6 = var0.bind(var1)(var7);
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 9;
        var1 = var1[var0];
        var0 = undefined;
        var4 = var2.bind(var0)(var1);
        var3 = var4.track;
        var1 = _closure1_slot7;
        var2 = var1.GUILD_DISCOVERY_GUILD_JOIN_CLICKED;
        var1 = {};
        var1.guild_id = var7;
        var1.load_id = var6;
        var6 = _closure1_slot5;
        var5 = var6.getMemberCount;
        var5 = var5.bind(var6)(var7);
        var1.guild_size = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var2.trackGuildJoinClicked = var3;
    var1 = function() {
        var0 = undefined;
        var3 = _closure1_slot13;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.getDiscoverableGuild = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 3092, 1599, 1410, 660, 1220, 5615, 5617, 4679, 795, 507, 1454, 2]);