// modules/quests/QuestConstants.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun46588: for (var _fun46588_ip = 0;;) switch (_fun46588_ip) {
        case 0:
            var19 = require;
            var2 = exports;
            var20 = dependencyMap;
            var1 = global;
            var6 = var1.Object;
            var5 = var6.defineProperty;
            var4 = {};
            var0 = true;
            var4.value = var0;
            var0 = '__esModule';
            var0 = var5.bind(var6)(var2, var0, var4);
            var18 = {};
            var0 = 'quests_bar_activity_panel';
            var18.ACTIVITY_PANEL = var0;
            var0 = 'quests_manager';
            var18.QUESTS_MANAGER = var0;
            var0 = 'quests_console_optimistic_updates_manager';
            var18.QUESTS_CONSOLE_OPTIMISTIC_UPDATES_MANAGER = var0;
            var0 = 'user_settings_gift_inventory';
            var18.USER_SETTINGS_GIFT_INVENTORY = var0;
            var0 = 'user_settings_search_gift_inventory';
            var18.USER_SETTINGS_SEARCH_GIFT_INVENTORY = var0;
            var0 = 'use_quests';
            var18.USE_QUESTS = var0;
            var0 = 'stream_source_select';
            var18.STREAM_SOURCE_SELECT = var0;
            var0 = 'members_list';
            var18.MEMBERS_LIST = var0;
            var0 = 'quests_bar';
            var18.QUESTS_BAR = var0;
            var0 = 'quests_bar_mobile';
            var18.QUESTS_BAR_MOBILE = var0;
            var0 = 'reward_code_modal';
            var18.REWARD_CODE_MODAL = var0;
            var0 = 'ingame_reward_modal';
            var18.INGAME_REWARD_MODAL = var0;
            var0 = 'collectible_reward_modal';
            var18.COLLECTIBLE_REWARD_MODAL = var0;
            var0 = 'orbs_reward_modal';
            var18.ORBS_REWARD_MODAL = var0;
            var0 = 'quest_preview_tool';
            var18.QUEST_PREVIEW_TOOL = var0;
            var0 = 'quest_preview_tool_2';
            var18.QUEST_PREVIEW_TOOL_2 = var0;
            var0 = 'QUESTS_MINOR_REWARD_CAPPING_CONFIG';
            var18.QUESTS_MINOR_REWARD_CAPPING_CONFIG = var0;
            var0 = 'quests_card';
            var18.QUESTS_CARD = var0;
            var0 = 'quests_store';
            var18.QUESTS_STORE = var0;
            var0 = 'quests_channel_call_header';
            var18.QUEST_CHANNEL_CALL_HEADER = var0;
            var0 = 'quest_home_desktop';
            var18.QUEST_HOME_DESKTOP = var0;
            var0 = 'quest_home_mobile';
            var18.QUEST_HOME_MOBILE = var0;
            var0 = 'quest_progress_bar';
            var18.QUEST_PROGRESS_BAR = var0;
            var0 = 'embed_mobile';
            var18.EMBED_MOBILE = var0;
            var0 = 'embed_desktop';
            var18.EMBED_DESKTOP = var0;
            var0 = 'context_menu';
            var18.QUEST_CONTEXT_MENU = var0;
            var0 = 'coded_link';
            var18.CODED_LINK = var0;
            var0 = 'quest_disclosure_modal';
            var18.QUEST_DISCLOSURE_MODAL = var0;
            var0 = 'discovery_sidebar';
            var18.DISCOVERY_SIDEBAR = var0;
            var0 = 'discovery_compass';
            var18.DISCOVERY_COMPASS = var0;
            var0 = 'badge';
            var18.BADGE = var0;
            var0 = 'collectibles_shop_header_bar';
            var18.COLLECTIBLES_SHOP_HEADER_BAR = var0;
            var0 = 'orbs_announcement_modal';
            var18.ORBS_ANNOUNCEMENT_MODAL = var0;
            var0 = 'conflict_checks';
            var18.CONFLICT_CHECKS = var0;
            var0 = 'video_modal';
            var18.VIDEO_MODAL = var0;
            var0 = 'video_modal_mobile';
            var18.VIDEO_MODAL_MOBILE = var0;
            var0 = 'game_widgets_popover';
            var18.GAME_WIDGETS_POPOVER = var0;
            var0 = 'private_channels_list';
            var18.PRIVATE_CHANNELS_LIST = var0;
            var0 = 'internal_tooling';
            var18.INTERNAL_TOOLING = var0;
            var0 = 'quest_home_moved_callout';
            var18.QUEST_HOME_MOVED_CALLOUT = var0;
            var0 = 'in_app_navigation';
            var18.IN_APP_NAVIGATION = var0;
            var0 = 'navigate_to_quest_home_util';
            var18.NAVIGATE_TO_QUEST_HOME_UTIL = var0;
            var0 = 'quest_deep_link_util';
            var18.QUEST_DEEP_LINK_UTIL = var0;
            var0 = 'you_tab_profile_header';
            var18.YOU_TAB_PROFILE_HEADER = var0;
            var0 = 'quest_instructions';
            var18.QUEST_INSTRUCTIONS = var0;
            var0 = 'quest_primary_cta';
            var18.QUEST_PRIMARY_CTA = var0;
            var0 = 0;
            var5 = var20[var0];
            var4 = metroImportDefault;
            var0 = undefined;
            var4 = var4.bind(var0)(var5);
            var4 = var4.Millis;
            var5 = var4.MINUTE;
            var4 = 1;
            var4 = var20[var4];
            var4 = var19.bind(var0)(var4);
            var4 = var4.Quests;
            var4 = var4.ConsecutiveHeartbeatPeriodMinutes;
            var17 = var5 * var4;
            var16 = {};
            var4 = 'CONSOLE';
            var16.CONSOLE = var4;
            var4 = 'DESKTOP';
            var16.DESKTOP = var4;
            var4 = 2;
            var4 = var20[var4];
            var5 = var19.bind(var0)(var4);
            var4 = var5.getAPIBaseURL;
            var7 = var4.bind(var5)();
            var5 = var7.indexOf;
            var4 = 'localhost';
            var4 = var5.bind(var7)(var4);
            var5 = -1;
            if (!(var5 === var4)) {
                _fun46588_ip = 789;
                continue _fun46588
            }
        case 762:
            var6 = var7.indexOf;
            var4 = '127.0.0.1';
            var4 = var6.bind(var7)(var4);
            var15 = 'https://cdn.discordapp.com/';
            if (!(var5 !== var4)) {
                _fun46588_ip = 816;
                continue _fun46588
            }
        case 789:
            var4 = var1.HermesInternal;
            var6 = var4.concat;
            var5 = '';
            var4 = '/_cdn_storage/';
            var15 = var6.bind(var5)(var7, var4);
        case 816:
            var4 = 'quests/';
            var14 = var15 + var4;
            var13 = {};
            var4 = 'collapsed';
            var13.COLLAPSED = var4;
            var4 = 'expanded';
            var13.EXPANDED = var4;
            var4 = 'closed';
            var13.CLOSED = var4;
            var4 = 'soft-dismissed';
            var13.SOFT_DISMISSED = var4;
            var4 = 'reset-to-previous';
            var13.RESET_TO_PREVIOUS = var4;
            var12 = {};
            var4 = 'k';
            var12.PLAYBACK = var4;
            var4 = ' ';
            var12.SPACE = var4;
            var4 = 'j';
            var12.SEEK_BACK = var4;
            var4 = 'l';
            var12.SEEK_FORWARD = var4;
            var4 = 'c';
            var12.CAPTION = var4;
            var4 = 'f';
            var12.FULLSCREEN = var4;
            var4 = 'm';
            var12.MUTE = var4;
            var11 = {};
            var4 = 'excluded_quest';
            var11.EXCLUDED_QUEST = var4;
            var4 = 'unknown_quest';
            var11.UNKNOWN_QUEST = var4;
            var4 = 'not_shareable_quest';
            var11.NOT_SHAREABLE_QUEST = var4;
            var6 = var1.Set;
            var5 = 3;
            var4 = var20[var5];
            var4 = var19.bind(var0)(var4);
            var4 = var4.QuestPlacement;
            var7 = var4.DESKTOP_ACCOUNT_PANEL_AREA;
            var4 = new Array(2);
            var4[0] = var7;
            var5 = var20[var5];
            var5 = var19.bind(var0)(var5);
            var5 = var5.QuestPlacement;
            var5 = var5.MOBILE_HOME_DOCK_AREA;
            var4[1] = var5;
            var5 = var6.prototype;
            var5 = Object.create(var5, {
                constructor: {
                    value: var6
                }
            });
            var29 = var5;
            var28 = var4;
            var4 = new var29[var6](var28, var27);
            var10 = var4 instanceof Object ? var4 : var5;
            var7 = var1.Set;
            var5 = 4;
            var4 = var20[var5];
            var4 = var19.bind(var0)(var4);
            var4 = var4.FirstPartyQuestTaskTypes;
            var6 = var4.STREAM_ON_DESKTOP;
            var4 = new Array(6);
            var4[0] = var6;
            var6 = var20[var5];
            var6 = var19.bind(var0)(var6);
            var6 = var6.FirstPartyQuestTaskTypes;
            var6 = var6.PLAY_ON_DESKTOP;
            var4[1] = var6;
            var6 = var20[var5];
            var6 = var19.bind(var0)(var6);
            var6 = var6.FirstPartyQuestTaskTypes;
            var6 = var6.PLAY_ON_XBOX;
            var4[2] = var6;
            var6 = var20[var5];
            var6 = var19.bind(var0)(var6);
            var6 = var6.FirstPartyQuestTaskTypes;
            var6 = var6.PLAY_ON_PLAYSTATION;
            var4[3] = var6;
            var6 = var20[var5];
            var6 = var19.bind(var0)(var6);
            var6 = var6.FirstPartyQuestTaskTypes;
            var6 = var6.PLAY_ON_DESKTOP_V2;
            var4[4] = var6;
            var6 = var20[var5];
            var6 = var19.bind(var0)(var6);
            var6 = var6.FirstPartyQuestTaskTypes;
            var6 = var6.PLAY_ACTIVITY;
            var4[5] = var6;
            var6 = var7.prototype;
            var6 = Object.create(var6, {
                constructor: {
                    value: var7
                }
            });
            var29 = var6;
            var28 = var4;
            var4 = new var29[var7](var28, var27);
            var9 = var4 instanceof Object ? var4 : var6;
            var7 = var1.Set;
            var4 = var20[var5];
            var4 = var19.bind(var0)(var4);
            var4 = var4.FirstPartyQuestTaskTypes;
            var6 = var4.STREAM_ON_DESKTOP;
            var4 = new Array(6);
            var4[0] = var6;
            var6 = var20[var5];
            var6 = var19.bind(var0)(var6);
            var6 = var6.FirstPartyQuestTaskTypes;
            var6 = var6.PLAY_ON_DESKTOP;
            var4[1] = var6;
            var6 = var20[var5];
            var6 = var19.bind(var0)(var6);
            var6 = var6.FirstPartyQuestTaskTypes;
            var6 = var6.PLAY_ON_XBOX;
            var4[2] = var6;
            var6 = var20[var5];
            var6 = var19.bind(var0)(var6);
            var6 = var6.FirstPartyQuestTaskTypes;
            var6 = var6.PLAY_ON_PLAYSTATION;
            var4[3] = var6;
            var6 = var20[var5];
            var6 = var19.bind(var0)(var6);
            var6 = var6.FirstPartyQuestTaskTypes;
            var6 = var6.PLAY_ON_DESKTOP_V2;
            var4[4] = var6;
            var6 = var20[var5];
            var6 = var19.bind(var0)(var6);
            var6 = var6.FirstPartyQuestTaskTypes;
            var6 = var6.PLAY_ACTIVITY;
            var4[5] = var6;
            var6 = var7.prototype;
            var6 = Object.create(var6, {
                constructor: {
                    value: var7
                }
            });
            var29 = var6;
            var28 = var4;
            var4 = new var29[var7](var28, var27);
            var8 = var4 instanceof Object ? var4 : var6;
            var6 = var1.Set;
            var4 = var20[var5];
            var4 = var19.bind(var0)(var4);
            var4 = var4.FirstPartyQuestTaskTypes;
            var7 = var4.STREAM_ON_DESKTOP;
            var4 = new Array(6);
            var4[0] = var7;
            var7 = var20[var5];
            var7 = var19.bind(var0)(var7);
            var7 = var7.FirstPartyQuestTaskTypes;
            var7 = var7.PLAY_ON_DESKTOP;
            var4[1] = var7;
            var7 = var20[var5];
            var7 = var19.bind(var0)(var7);
            var7 = var7.FirstPartyQuestTaskTypes;
            var7 = var7.PLAY_ON_XBOX;
            var4[2] = var7;
            var7 = var20[var5];
            var7 = var19.bind(var0)(var7);
            var7 = var7.FirstPartyQuestTaskTypes;
            var7 = var7.PLAY_ON_PLAYSTATION;
            var4[3] = var7;
            var7 = var20[var5];
            var7 = var19.bind(var0)(var7);
            var7 = var7.FirstPartyQuestTaskTypes;
            var7 = var7.PLAY_ON_DESKTOP_V2;
            var4[4] = var7;
            var5 = var20[var5];
            var5 = var19.bind(var0)(var5);
            var5 = var5.FirstPartyQuestTaskTypes;
            var5 = var5.PLAY_ACTIVITY;
            var4[5] = var5;
            var5 = var6.prototype;
            var5 = Object.create(var5, {
                constructor: {
                    value: var6
                }
            });
            var29 = var5;
            var28 = var4;
            var4 = new var29[var6](var28, var27);
            var7 = var4 instanceof Object ? var4 : var5;
            var6 = {};
            var4 = 'suggested';
            var6.SUGGESTED = var4;
            var4 = 'most_recent';
            var6.MOST_RECENT = var4;
            var4 = 'expiring_soon';
            var6.EXPIRING_SOON = var4;
            var4 = 'recently_enrolled';
            var6.RECENTLY_ENROLLED = var4;
            var5 = {};
            var4 = 'task_video';
            var5.VIDEO = var4;
            var4 = 'task_play';
            var5.PLAY = var4;
            var _closure1_slot0 = var5;
            var4 = {};
            var21 = 'reward_virtual_currency';
            var4.VIRTUAL_CURRENCY = var21;
            var21 = 'reward_collectible';
            var4.COLLECTIBLE = var21;
            var21 = 'reward_in_game';
            var4.IN_GAME = var21;
            var _closure1_slot1 = var4;
            var21 = {};
            var22 = 'task';
            var21.group = var22;
            var23 = var5.PLAY;
            var21.filter = var23;
            var25 = new Array(5);
            var25[0] = var21;
            var21 = {};
            var21.group = var22;
            var22 = var5.VIDEO;
            var21.filter = var22;
            var25[1] = var21;
            var21 = {};
            var22 = 'reward';
            var21.group = var22;
            var23 = var4.VIRTUAL_CURRENCY;
            var21.filter = var23;
            var25[2] = var21;
            var21 = {};
            var21.group = var22;
            var23 = var4.COLLECTIBLE;
            var21.filter = var23;
            var25[3] = var21;
            var21 = {};
            var21.group = var22;
            var22 = var4.IN_GAME;
            var21.filter = var22;
            var25[4] = var21;
            var21 = ['reward', 'task'];
            var _closure1_slot2 = var21;
            var22 = var1.Object;
            var21 = var22.entries;
            var1 = 5;
            var1 = var20[var1];
            var24 = var19.bind(var0)(var1);
            var23 = var24.groupBy;
            var1 = 'group';
            var1 = var23.bind(var24)(var25, var1);
            var22 = var21.bind(var22)(var1);
            var21 = var22.sort;
            var1 = function(arg0, arg1) { // Environment: var3
                _fun46589: for (var _fun46589_ip = 0;;) switch (_fun46589_ip) {
                    case 0:
                        var4 = _closure1_slot2;
                        var3 = var4.indexOf;
                        var2 = arg0;
                        var1 = 0;
                        var2 = var2[var1];
                        var3 = var3.bind(var4)(var2);
                        var4 = _closure1_slot2;
                        var2 = var4.indexOf;
                        var0 = arg1;
                        var0 = var0[var1];
                        var2 = var2.bind(var4)(var0);
                        var4 = var3 < var2;
                        var0 = -1;
                        if (var4) {
                            _fun46589_ip = 77;
                            continue _fun46589
                        }
                    case 62:
                        var2 = var2 < var3;
                        var1 = 0;
                        if (!var2) {
                            _fun46589_ip = 74;
                            continue _fun46589
                        }
                    case 71:
                        var1 = 1;
                    case 74:
                        var0 = var1;
                    case 77:
                        return var0;
                }
            };
            var1 = var21.bind(var22)(var1);
            var21 = 6;
            var21 = var20[var21];
            var23 = var19.bind(var0)(var21);
            var22 = var23.fileFinishedImporting;
            var21 = 'modules/quests/QuestConstants.tsx';
            var21 = var22.bind(var23)(var21);
            var2.QuestsExperimentLocations = var18;
            var18 = 7;
            var18 = var20[var18];
            var18 = var19.bind(var0)(var18);
            var18 = var18.DismissibleQuestContentFlags;
            var2.DismissibleQuestContentFlags = var18;
            var18 = 8;
            var18 = var20[var18];
            var18 = var19.bind(var0)(var18);
            var18 = var18.QuestVariants;
            var2.QuestVariants = var18;
            var18 = 'inventory';
            var2.QUESTS_SETTINGS_SECTION = var18;
            var2.CONSECUTIVE_HEARTBEAT_PERIOD_MS = var17;
            var17 = {
                'tension': 900,
                'friction': 45,
                'clamp': true
            };
            var2.QUEST_BAR_SPRING_CONFIG_QUEST_ACCEPTED = var17;
            var17 = {
                'tension': 360,
                'friction': 30,
                'clamp': true
            };
            var2.QUEST_BAR_SPRING_CONFIG_QUEST_UNACCEPTED = var17;
            var2.QuestTaskPlatform = var16;
            var2.CDN_URL_BASE = var15;
            var2.QUESTS_CDN_URL_BASE = var14;
            var2.QuestDockMode = var13;
            var13 = '545364944258990091';
            var2.DISCORD_APPLICATION_ID = var13;
            var2.VideoKeyBindings = var12;
            var12 = 'QuestRewardCodeClaimBottomSheet';
            var2.QUEST_REWARD_CODE_CLAIM_BOTTOM_SHEET_KEY = var12;
            var12 = 'QuestRewardDetailsBottomSheet';
            var2.QUEST_REWARD_DETAILS_BOTTOM_SHEET_KEY = var12;
            var12 = '{reward_code}';
            var2.REWARD_CODE_PLACEHOLDER = var12;
            var2.QuestEmbedFallbackReason = var11;
            var11 = '1333839522189938740';
            var2.ORBS_INTRO_QUEST_ID = var11;
            var11 = '1410358070831480904';
            var2.MOBILE_ORBS_INTRO_QUEST_ID = var11;
            var11 = '1420556874629251124';
            var2.PLAY_ACTIVITY_CLOUD_GAMING_QUEST_ID = var11;
            var11 = '1402418703554842694';
            var2.PLAY_ACTIVITY_SOCIAL_ENTRY_APPLICATION_ID = var11;
            var2.BILLABLE_PLACEMENTS = var10;
            var2.ACTIVE_NOW_SOCIAL_ENTRY_POINT_ALLOWED_TASK_TYPES = var9;
            var2.CHANNEL_HEADER_SOCIAL_ENTRY_POINT_ALLOWED_TASK_TYPES = var8;
            var2.MEMBER_LIST_SOCIAL_ENTRY_POINT_ALLOWED_TASK_TYPES = var7;
            var7 = {};
            var8 = false;
            var7.is_targeted = var8;
            var2.EMPTY_AD_DECISION_DATA = var7;
            var2.QuestHomeSortMethods = var6;
            var2.TaskFilterTypes = var5;
            var2.RewardFilterTypes = var4;
            var3 = function(arg0) { // Original name: getQuestHomeFilterOptionItem, environment: var3
                _fun46590: for (var _fun46590_ip = 0;;) switch (_fun46590_ip) {
                    case 0:
                        var2 = arg0;
                        var1 = global;
                        var5 = var1.Object;
                        var4 = var5.values;
                        var3 = _closure1_slot0;
                        var4 = var4.bind(var5)(var3);
                        var3 = var4.includes;
                        var3 = var3.bind(var4)(var2);
                        if (var3) {
                            _fun46590_ip = 96;
                            continue _fun46590
                        }
                    case 41:
                        var3 = var1.Object;
                        var1 = var3.values;
                        var0 = _closure1_slot1;
                        var1 = var1.bind(var3)(var0);
                        var0 = var1.includes;
                        var1 = var0.bind(var1)(var2);
                        var0 = null;
                        if (!var1) {
                            _fun46590_ip = 94;
                            continue _fun46590
                        }
                    case 76:
                        var1 = {};
                        var3 = 'reward';
                        var1.group = var3;
                        var1.filter = var2;
                        var0 = var1;
                    case 94:
                        _fun46590_ip = 114;
                        continue _fun46590;
                    case 96:
                        var1 = {};
                        var3 = 'task';
                        var1.group = var3;
                        var1.filter = var2;
                        var0 = var1;
                    case 114:
                        return var0;
                }
            };
            var2.getQuestHomeFilterOptionItem = var3;
            var2.SORTED_QUEST_HOME_FILTER_GROUPS = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [667, 5192, 507, 5193, 5197, 22, 2, 5198, 5199]);