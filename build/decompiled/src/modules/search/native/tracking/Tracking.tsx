// modules/search/native/tracking/Tracking.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun71793: for (var _fun71793_ip = 0;;) switch (_fun71793_ip) {
            case 0:
                var1 = arg0;
                var2 = _closure1_slot6;
                var2 = var2.FILTER_FROM;
                if (!(var2 !== var1)) {
                    _fun71793_ip = 159;
                    continue _fun71793
                }
            case 23:
                var2 = _closure1_slot6;
                var2 = var2.FILTER_MENTIONS;
                if (!(var2 !== var1)) {
                    _fun71793_ip = 151;
                    continue _fun71793
                }
            case 37:
                var2 = _closure1_slot6;
                var2 = var2.FILTER_IN;
                if (!(var2 !== var1)) {
                    _fun71793_ip = 143;
                    continue _fun71793
                }
            case 51:
                var2 = _closure1_slot6;
                var2 = var2.FILTER_HAS;
                if (!(var2 !== var1)) {
                    _fun71793_ip = 135;
                    continue _fun71793
                }
            case 65:
                var2 = _closure1_slot6;
                var2 = var2.FILTER_ON;
                if (!(var2 !== var1)) {
                    _fun71793_ip = 127;
                    continue _fun71793
                }
            case 79:
                var2 = _closure1_slot6;
                var2 = var2.FILTER_AFTER;
                if (!(var2 !== var1)) {
                    _fun71793_ip = 119;
                    continue _fun71793
                }
            case 93:
                var0 = _closure1_slot6;
                var0 = var0.FILTER_BEFORE;
                if (!(var0 !== var1)) {
                    _fun71793_ip = 111;
                    continue _fun71793
                }
            case 107:
                var0 = null;
                return var0;
            case 111:
                var0 = 'filter_before';
                return var0;
            case 119:
                var0 = 'filter_after';
                return var0;
            case 127:
                var0 = 'filter_on';
                return var0;
            case 135:
                var0 = 'filter_has';
                return var0;
            case 143:
                var0 = 'filter_in';
                return var0;
            case 151:
                var0 = 'filter_mentions';
                return var0;
            case 159:
                var0 = 'filter_from';
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.SEARCH_HISTORY_TO_ANALYTICS_SEARCH_HISTORY;
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var6 = var1.SearchTokenTypes;
    var _closure1_slot6 = var6;
    var1 = var1.AnalyticEvents;
    var _closure1_slot7 = var1;
    var1 = {};
    var6 = function arg0() {
        _fun71794: for (var _fun71794_ip = 0;;) switch (_fun71794_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.searchContext;
                var11 = var0.searchLocation;
                var13 = _closure1_slot1;
                var10 = _closure1_slot2;
                var12 = 4;
                var2 = var10[var12];
                var0 = undefined;
                var3 = var13.bind(var0)(var2);
                var2 = var3.initialize;
                var2 = var2.bind(var3)(var9, var11);
                var8 = _closure1_slot0;
                var7 = 5;
                var2 = var10[var7];
                var3 = var8.bind(var0)(var2);
                var2 = var3.getChannelIdFromSearchContext;
                var5 = var2.bind(var3)(var9);
                var3 = _closure1_slot3;
                var2 = var3.getChannel;
                var6 = var2.bind(var3)(var5);
                var2 = 6;
                var2 = var10[var2];
                var4 = var13.bind(var0)(var2);
                var3 = var4.trackWithMetadata;
                var1 = _closure1_slot7;
                var2 = var1.SEARCH_OPENED_MOBILE;
                var1 = {};
                var12 = var10[var12];
                var13 = var13.bind(var0)(var12);
                var12 = var13.getSessionId;
                var12 = var12.bind(var13)(var9);
                var1.search_session_id = var12;
                var1.search_location = var11;
                var7 = var10[var7];
                var8 = var8.bind(var0)(var7);
                var7 = var8.getGuildIdFromSearchContext;
                var7 = var7.bind(var8)(var9);
                var1.guild_id = var7;
                var1.channel_id = var5;
                var5 = null;
                var7 = var5 == var6;
                var5 = undefined;
                if (var7) {
                    _fun71794_ip = 197;
                    continue _fun71794
                }
            case 192:
                var5 = var6.type;
            case 197:
                var1.channel_type = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var0;
        }
    };
    var1.trackSearchOpened = var6;
    var6 = function arg0() {
        _fun71795: for (var _fun71795_ip = 0;;) switch (_fun71795_ip) {
            case 0:
                var0 = arg0;
                var11 = var0.searchContext;
                var4 = _closure1_slot4;
                var3 = var4.getState;
                var2 = function(arg0) { // Environment: var1
                    var1 = arg0;
                    var0 = var1.isInitialSearchQuery;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var2 = var3.bind(var4)(var11, var2);
                if (var2) {
                    _fun71795_ip = 359;
                    continue _fun71795
                }
            case 43:
                var14 = _closure1_slot1;
                var12 = _closure1_slot2;
                var13 = 4;
                var2 = var12[var13];
                var4 = undefined;
                var3 = var14.bind(var4)(var2);
                var2 = var3.refreshQueryId;
                var2 = var2.bind(var3)(var11);
                var10 = _closure1_slot0;
                var9 = 5;
                var2 = var12[var9];
                var3 = var10.bind(var4)(var2);
                var2 = var3.getChannelIdFromSearchContext;
                var8 = var2.bind(var3)(var11);
                var3 = _closure1_slot3;
                var2 = var3.getChannel;
                var7 = var2.bind(var3)(var8);
                var3 = _closure1_slot4;
                var5 = var3.getState;
                var2 = function(arg0) { // Environment: var1
                    var1 = arg0;
                    var0 = var1.getQueryString;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var6 = var5.bind(var3)(var11, var2);
                var2 = var3.getState;
                var1 = function(arg0) { // Environment: var1
                    var1 = arg0;
                    var0 = var1.getTextInputValue;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var5 = var2.bind(var3)(var11, var1);
                var1 = 6;
                var1 = var12[var1];
                var3 = var14.bind(var4)(var1);
                var2 = var3.trackWithMetadata;
                var0 = _closure1_slot7;
                var1 = var0.SEARCH_STARTED_MOBILE;
                var0 = {};
                var15 = var12[var13];
                var16 = var14.bind(var4)(var15);
                var15 = var16.getSessionId;
                var15 = var15.bind(var16)(var11);
                var0.search_session_id = var15;
                var15 = var12[var13];
                var16 = var14.bind(var4)(var15);
                var15 = var16.getQueryId;
                var15 = var15.bind(var16)(var11);
                var0.search_query_id = var15;
                var13 = var12[var13];
                var14 = var14.bind(var4)(var13);
                var13 = var14.getLocation;
                var13 = var13.bind(var14)(var11);
                var0.search_location = var13;
                var9 = var12[var9];
                var10 = var10.bind(var4)(var9);
                var9 = var10.getGuildIdFromSearchContext;
                var9 = var9.bind(var10)(var11);
                var0.guild_id = var9;
                var0.channel_id = var8;
                var8 = null;
                var8 = var8 == var7;
                if (var8) {
                    _fun71795_ip = 308;
                    continue _fun71795
                }
            case 303:
                var4 = var7.type;
            case 308:
                var0.channel_type = var4;
                var4 = var6.trim;
                var4 = var4.bind(var6)();
                var4 = var4.length;
                var0.search_query_length = var4;
                var4 = var5.trim;
                var4 = var4.bind(var5)();
                var4 = var4.length;
                var0.search_query_content_length = var4;
                var0 = var2.bind(var3)(var1, var0);
            case 359:
                var0 = undefined;
                return var0;
        }
    };
    var1.trackSearchStarted = var6;
    var6 = function arg0() {
        _fun71799: for (var _fun71799_ip = 0;;) switch (_fun71799_ip) {
            case 0:
                var0 = arg0;
                var18 = var0.searchContext;
                var13 = var0.index;
                var9 = var0.messageId;
                var6 = var0.channelId;
                var11 = var0.userId;
                var12 = var0.entityType;
                var4 = _closure1_slot4;
                var3 = var4.getState;
                var2 = function(arg0) { // Environment: var1
                    var1 = arg0;
                    var0 = var1.isInitialSearchQuery;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var2 = var3.bind(var4)(var18, var2);
                if (var2) {
                    _fun71799_ip = 488;
                    continue _fun71799
                }
            case 69:
                var14 = _closure1_slot0;
                var15 = _closure1_slot2;
                var2 = 5;
                var3 = var15[var2];
                var4 = undefined;
                var5 = var14.bind(var4)(var3);
                var3 = var5.getGuildIdFromSearchContext;
                var8 = var3.bind(var5)(var18);
                var2 = var15[var2];
                var3 = var14.bind(var4)(var2);
                var2 = var3.getChannelIdFromSearchContext;
                var7 = var2.bind(var3)(var18);
                var3 = _closure1_slot3;
                var2 = var3.getChannel;
                var5 = var2.bind(var3)(var7);
                var2 = var3.getChannel;
                var10 = var2.bind(var3)(var6);
                var3 = _closure1_slot4;
                var16 = var3.getState;
                var2 = function(arg0) { // Environment: var1
                    var1 = arg0;
                    var0 = var1.getQueryString;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var21 = var16.bind(var3)(var18, var2);
                var2 = var3.getState;
                var1 = function(arg0) { // Environment: var1
                    var1 = arg0;
                    var0 = var1.getTextInputValue;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var20 = var2.bind(var3)(var18, var1);
                var17 = _closure1_slot1;
                var1 = 6;
                var1 = var15[var1];
                var3 = var17.bind(var4)(var1);
                var2 = var3.trackWithMetadata;
                var0 = _closure1_slot7;
                var1 = var0.SEARCH_RESULT_CLICKED_MOBILE;
                var0 = {};
                var16 = 4;
                var19 = var15[var16];
                var22 = var17.bind(var4)(var19);
                var19 = var22.getSessionId;
                var19 = var19.bind(var22)(var18);
                var0.search_session_id = var19;
                var19 = var15[var16];
                var22 = var17.bind(var4)(var19);
                var19 = var22.getLocation;
                var19 = var19.bind(var22)(var18);
                var0.search_location = var19;
                var19 = var15[var16];
                var22 = var17.bind(var4)(var19);
                var19 = var22.getQueryId;
                var19 = var19.bind(var22)(var18);
                var0.search_query_id = var19;
                var19 = var21.trim;
                var19 = var19.bind(var21)();
                var19 = var19.length;
                var0.search_query_length = var19;
                var19 = var20.trim;
                var19 = var19.bind(var20)();
                var19 = var19.length;
                var0.search_query_content_length = var19;
                var16 = var15[var16];
                var17 = var17.bind(var4)(var16);
                var16 = var17.getSelectedTab;
                var16 = var16.bind(var17)(var18);
                var0.search_tab_selected = var16;
                var0.search_result_index = var13;
                var13 = 7;
                var13 = var15[var13];
                var14 = var14.bind(var4)(var13);
                var13 = var14.v4;
                var13 = var13.bind(var14)();
                var0.search_result_click_id = var13;
                var0.search_result_content_entity_type = var12;
                var0.search_result_user_id = var11;
                var0.search_result_message_id = var9;
                var0.search_result_channel_id = var6;
                var0.search_result_guild_id = var8;
                var6 = null;
                var11 = var6 == var10;
                var9 = undefined;
                if (var11) {
                    _fun71799_ip = 450;
                    continue _fun71799
                }
            case 445:
                var9 = var10.type;
            case 450:
                var0.search_result_channel_type = var9;
                var0.guild_id = var8;
                var0.channel_id = var7;
                var6 = var6 == var5;
                var4 = undefined;
                if (var6) {
                    _fun71799_ip = 477;
                    continue _fun71799
                }
            case 472:
                var4 = var5.type;
            case 477:
                var0.channel_type = var4;
                var0 = var2.bind(var3)(var1, var0);
            case 488:
                var0 = undefined;
                return var0;
        }
    };
    var1.trackSearchResultClicked = var6;
    var6 = function arg0() {
        _fun71803: for (var _fun71803_ip = 0;;) switch (_fun71803_ip) {
            case 0:
                var0 = arg0;
                var22 = var0.searchContext;
                var17 = var0.searchResultTotalCount;
                var16 = var0.numMemberTabReturnedResults;
                var15 = var0.numChannelTabReturnedResults;
                var14 = var0.numPeopleTabReturnedResults;
                var13 = var0.numMessageTabReturnedResults;
                var12 = var0.numMediaTabReturnedResults;
                var11 = var0.numFileTabReturnedResults;
                var8 = var0.numLinkTabReturnedResults;
                var4 = _closure1_slot4;
                var3 = var4.getState;
                var2 = function(arg0) { // Environment: var1
                    var1 = arg0;
                    var0 = var1.isInitialSearchQuery;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var2 = var3.bind(var4)(var22, var2);
                if (var2) {
                    _fun71803_ip = 476;
                    continue _fun71803
                }
            case 91:
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var2 = 5;
                var3 = var10[var2];
                var4 = undefined;
                var5 = var9.bind(var4)(var3);
                var3 = var5.getGuildIdFromSearchContext;
                var7 = var3.bind(var5)(var22);
                var2 = var10[var2];
                var3 = var9.bind(var4)(var2);
                var2 = var3.getChannelIdFromSearchContext;
                var6 = var2.bind(var3)(var22);
                var3 = _closure1_slot3;
                var2 = var3.getChannel;
                var5 = var2.bind(var3)(var6);
                var3 = _closure1_slot4;
                var18 = var3.getState;
                var2 = function(arg0) { // Environment: var1
                    var1 = arg0;
                    var0 = var1.getQueryString;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var20 = var18.bind(var3)(var22, var2);
                var2 = var3.getState;
                var1 = function(arg0) { // Environment: var1
                    var1 = arg0;
                    var0 = var1.getTextInputValue;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var19 = var2.bind(var3)(var22, var1);
                var21 = _closure1_slot1;
                var1 = 6;
                var1 = var10[var1];
                var3 = var21.bind(var4)(var1);
                var2 = var3.trackWithMetadata;
                var0 = _closure1_slot7;
                var1 = var0.SEARCH_RESULT_RETURNED_MOBILE;
                var0 = {};
                var18 = 4;
                var23 = var10[var18];
                var24 = var21.bind(var4)(var23);
                var23 = var24.getSessionId;
                var23 = var23.bind(var24)(var22);
                var0.search_session_id = var23;
                var23 = var10[var18];
                var24 = var21.bind(var4)(var23);
                var23 = var24.getLocation;
                var23 = var23.bind(var24)(var22);
                var0.search_location = var23;
                var18 = var10[var18];
                var21 = var21.bind(var4)(var18);
                var18 = var21.getQueryId;
                var18 = var18.bind(var21)(var22);
                var0.search_query_id = var18;
                var18 = var20.trim;
                var18 = var18.bind(var20)();
                var18 = var18.length;
                var0.search_query_length = var18;
                var18 = var19.trim;
                var18 = var18.bind(var19)();
                var18 = var18.length;
                var0.search_query_content_length = var18;
                var0.search_result_total_count = var17;
                var0.num_member_tab_returned_results = var16;
                var0.num_channel_tab_returned_results = var15;
                var0.num_people_tab_returned_results = var14;
                var0.num_message_tab_returned_results = var13;
                var0.num_media_tab_returned_results = var12;
                var0.num_file_tab_returned_results = var11;
                var0.num_link_tab_returned_results = var8;
                var8 = 8;
                var8 = var10[var8];
                var8 = var9.bind(var4)(var8);
                var9 = var8.SearchResultExactCountEnabled;
                var8 = var9.getSetting;
                var8 = var8.bind(var9)();
                var0.exact_search_result_count_setting_enabled = var8;
                var0.guild_id = var7;
                var0.channel_id = var6;
                var6 = null;
                var6 = var6 == var5;
                if (var6) {
                    _fun71803_ip = 465;
                    continue _fun71803
                }
            case 460:
                var4 = var5.type;
            case 465:
                var0.channel_type = var4;
                var0 = var2.bind(var3)(var1, var0);
            case 476:
                var0 = undefined;
                return var0;
        }
    };
    var1.trackSearchResultReturned = var6;
    var6 = function arg0() {
        _fun71807: for (var _fun71807_ip = 0;;) switch (_fun71807_ip) {
            case 0:
                var0 = arg0;
                var12 = var0.searchContext;
                var4 = _closure1_slot4;
                var3 = var4.getState;
                var2 = function(arg0) { // Environment: var1
                    var1 = arg0;
                    var0 = var1.isInitialSearchQuery;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var2 = var3.bind(var4)(var12, var2);
                if (var2) {
                    _fun71807_ip = 337;
                    continue _fun71807
                }
            case 43:
                var3 = _closure1_slot0;
                var13 = _closure1_slot2;
                var2 = 5;
                var5 = var13[var2];
                var4 = undefined;
                var6 = var3.bind(var4)(var5);
                var5 = var6.getGuildIdFromSearchContext;
                var7 = var5.bind(var6)(var12);
                var2 = var13[var2];
                var3 = var3.bind(var4)(var2);
                var2 = var3.getChannelIdFromSearchContext;
                var6 = var2.bind(var3)(var12);
                var3 = _closure1_slot3;
                var2 = var3.getChannel;
                var5 = var2.bind(var3)(var6);
                var3 = _closure1_slot4;
                var8 = var3.getState;
                var2 = function(arg0) { // Environment: var1
                    var1 = arg0;
                    var0 = var1.getQueryString;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var10 = var8.bind(var3)(var12, var2);
                var2 = var3.getState;
                var1 = function(arg0) { // Environment: var1
                    var1 = arg0;
                    var0 = var1.getTextInputValue;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var9 = var2.bind(var3)(var12, var1);
                var11 = _closure1_slot1;
                var1 = 6;
                var1 = var13[var1];
                var3 = var11.bind(var4)(var1);
                var2 = var3.trackWithMetadata;
                var0 = _closure1_slot7;
                var1 = var0.SEARCH_EMPTY_RESULT_MOBILE;
                var0 = {};
                var8 = 4;
                var14 = var13[var8];
                var15 = var11.bind(var4)(var14);
                var14 = var15.getSessionId;
                var14 = var14.bind(var15)(var12);
                var0.search_session_id = var14;
                var14 = var13[var8];
                var15 = var11.bind(var4)(var14);
                var14 = var15.getLocation;
                var14 = var14.bind(var15)(var12);
                var0.search_location = var14;
                var8 = var13[var8];
                var11 = var11.bind(var4)(var8);
                var8 = var11.getQueryId;
                var8 = var8.bind(var11)(var12);
                var0.search_query_id = var8;
                var8 = var10.trim;
                var8 = var8.bind(var10)();
                var8 = var8.length;
                var0.search_query_length = var8;
                var8 = var9.trim;
                var8 = var8.bind(var9)();
                var8 = var8.length;
                var0.search_query_content_length = var8;
                var0.guild_id = var7;
                var0.channel_id = var6;
                var6 = null;
                var6 = var6 == var5;
                if (var6) {
                    _fun71807_ip = 326;
                    continue _fun71807
                }
            case 321:
                var4 = var5.type;
            case 326:
                var0.channel_type = var4;
                var0 = var2.bind(var3)(var1, var0);
            case 337:
                var0 = undefined;
                return var0;
        }
    };
    var1.trackSearchEmptyResult = var6;
    var6 = function arg0() {
        _fun71811: for (var _fun71811_ip = 0;;) switch (_fun71811_ip) {
            case 0:
                var0 = arg0;
                var12 = var0.searchContext;
                var4 = _closure1_slot4;
                var3 = var4.getState;
                var2 = function(arg0) { // Environment: var1
                    var1 = arg0;
                    var0 = var1.isInitialSearchQuery;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var2 = var3.bind(var4)(var12, var2);
                if (var2) {
                    _fun71811_ip = 337;
                    continue _fun71811
                }
            case 43:
                var3 = _closure1_slot0;
                var13 = _closure1_slot2;
                var2 = 5;
                var5 = var13[var2];
                var4 = undefined;
                var6 = var3.bind(var4)(var5);
                var5 = var6.getGuildIdFromSearchContext;
                var7 = var5.bind(var6)(var12);
                var2 = var13[var2];
                var3 = var3.bind(var4)(var2);
                var2 = var3.getChannelIdFromSearchContext;
                var6 = var2.bind(var3)(var12);
                var3 = _closure1_slot3;
                var2 = var3.getChannel;
                var5 = var2.bind(var3)(var6);
                var3 = _closure1_slot4;
                var8 = var3.getState;
                var2 = function(arg0) { // Environment: var1
                    var1 = arg0;
                    var0 = var1.getQueryString;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var10 = var8.bind(var3)(var12, var2);
                var2 = var3.getState;
                var1 = function(arg0) { // Environment: var1
                    var1 = arg0;
                    var0 = var1.getTextInputValue;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var9 = var2.bind(var3)(var12, var1);
                var11 = _closure1_slot1;
                var1 = 6;
                var1 = var13[var1];
                var3 = var11.bind(var4)(var1);
                var2 = var3.trackWithMetadata;
                var0 = _closure1_slot7;
                var1 = var0.SEARCH_EMPTY_MESSAGE_RESULT_MOBILE;
                var0 = {};
                var8 = 4;
                var14 = var13[var8];
                var15 = var11.bind(var4)(var14);
                var14 = var15.getSessionId;
                var14 = var14.bind(var15)(var12);
                var0.search_session_id = var14;
                var14 = var13[var8];
                var15 = var11.bind(var4)(var14);
                var14 = var15.getLocation;
                var14 = var14.bind(var15)(var12);
                var0.search_location = var14;
                var8 = var13[var8];
                var11 = var11.bind(var4)(var8);
                var8 = var11.getQueryId;
                var8 = var8.bind(var11)(var12);
                var0.search_query_id = var8;
                var8 = var10.trim;
                var8 = var8.bind(var10)();
                var8 = var8.length;
                var0.search_query_length = var8;
                var8 = var9.trim;
                var8 = var8.bind(var9)();
                var8 = var8.length;
                var0.search_query_content_length = var8;
                var0.guild_id = var7;
                var0.channel_id = var6;
                var6 = null;
                var6 = var6 == var5;
                if (var6) {
                    _fun71811_ip = 326;
                    continue _fun71811
                }
            case 321:
                var4 = var5.type;
            case 326:
                var0.channel_type = var4;
                var0 = var2.bind(var3)(var1, var0);
            case 337:
                var0 = undefined;
                return var0;
        }
    };
    var1.trackSearchEmptyMessageResult = var6;
    var6 = function arg0() {
        var0 = arg0;
        var3 = var0.searchContext;
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 4;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.terminate;
        var1 = var1.bind(var2)(var3);
        return var0;
    };
    var1.trackSearchClosed = var6;
    var6 = function arg0() {
        var0 = arg0;
        var7 = var0.searchContext;
        var9 = var0.isHistoricalIndexing;
        var5 = var0.documentsIndexed;
        var6 = _closure1_slot1;
        var8 = _closure1_slot2;
        var0 = 6;
        var2 = var8[var0];
        var0 = undefined;
        var4 = var6.bind(var0)(var2);
        var3 = var4.trackWithMetadata;
        var1 = _closure1_slot7;
        var2 = var1.SEARCH_V2_INDEXING_VIEWED;
        var1 = {};
        var1.is_historical_indexing = var9;
        var1.documents_indexed = var5;
        var5 = 4;
        var9 = var8[var5];
        var10 = var6.bind(var0)(var9);
        var9 = var10.getSelectedTab;
        var9 = var9.bind(var10)(var7);
        var1.search_tab_selected = var9;
        var9 = var8[var5];
        var10 = var6.bind(var0)(var9);
        var9 = var10.getLocation;
        var9 = var9.bind(var10)(var7);
        var1.search_location = var9;
        var9 = var8[var5];
        var10 = var6.bind(var0)(var9);
        var9 = var10.getSessionId;
        var9 = var9.bind(var10)(var7);
        var1.search_session_id = var9;
        var5 = var8[var5];
        var6 = var6.bind(var0)(var5);
        var5 = var6.getQueryId;
        var5 = var5.bind(var6)(var7);
        var1.search_query_id = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var1.trackSearchIndexing = var6;
    var6 = function arg0() {
        _fun71817: for (var _fun71817_ip = 0;;) switch (_fun71817_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.searchContext;
                var2 = var0.searchHistoryItemType;
                var4 = var0.channelId;
                var3 = _closure1_slot3;
                var0 = var3.getChannel;
                var7 = var0.bind(var3)(var4);
                var0 = _closure1_slot5;
                var5 = var0[var2];
                var8 = _closure1_slot1;
                var10 = _closure1_slot2;
                var0 = 6;
                var2 = var10[var0];
                var0 = undefined;
                var4 = var8.bind(var0)(var2);
                var3 = var4.trackWithMetadata;
                var1 = _closure1_slot7;
                var2 = var1.SEARCH_V2_HISTORY_CLICKED;
                var1 = {};
                var6 = 4;
                var11 = var10[var6];
                var12 = var8.bind(var0)(var11);
                var11 = var12.getSelectedTab;
                var11 = var11.bind(var12)(var9);
                var1.search_tab_selected = var11;
                var11 = var10[var6];
                var12 = var8.bind(var0)(var11);
                var11 = var12.getLocation;
                var11 = var11.bind(var12)(var9);
                var1.search_location = var11;
                var6 = var10[var6];
                var8 = var8.bind(var0)(var6);
                var6 = var8.getSessionId;
                var6 = var6.bind(var8)(var9);
                var1.search_session_id = var6;
                var6 = null;
                var8 = var6 == var7;
                var6 = undefined;
                if (var8) {
                    _fun71817_ip = 179;
                    continue _fun71817
                }
            case 174:
                var6 = var7.type;
            case 179:
                var1.search_result_channel_type = var6;
                var1.search_history_type = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var0;
        }
    };
    var1.trackSearchHistoryClicked = var6;
    var6 = function arg0() {
        _fun71818: for (var _fun71818_ip = 0;;) switch (_fun71818_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.searchContext;
                var3 = var0.channelId;
                var2 = _closure1_slot3;
                var0 = var2.getChannel;
                var6 = var0.bind(var2)(var3);
                var7 = _closure1_slot1;
                var9 = _closure1_slot2;
                var0 = 6;
                var2 = var9[var0];
                var0 = undefined;
                var4 = var7.bind(var0)(var2);
                var3 = var4.trackWithMetadata;
                var1 = _closure1_slot7;
                var2 = var1.SEARCH_V2_SUGGESTED_CLICKED;
                var1 = {};
                var5 = 4;
                var10 = var9[var5];
                var11 = var7.bind(var0)(var10);
                var10 = var11.getSelectedTab;
                var10 = var10.bind(var11)(var8);
                var1.search_tab_selected = var10;
                var10 = var9[var5];
                var11 = var7.bind(var0)(var10);
                var10 = var11.getLocation;
                var10 = var10.bind(var11)(var8);
                var1.search_location = var10;
                var5 = var9[var5];
                var7 = var7.bind(var0)(var5);
                var5 = var7.getSessionId;
                var5 = var5.bind(var7)(var8);
                var1.search_session_id = var5;
                var5 = null;
                var7 = var5 == var6;
                var5 = undefined;
                if (var7) {
                    _fun71818_ip = 165;
                    continue _fun71818
                }
            case 160:
                var5 = var6.type;
            case 165:
                var1.search_result_channel_type = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var0;
        }
    };
    var1.trackSuggestedSearchClicked = var6;
    var6 = function arg0() {
        var0 = arg0;
        var10 = var0.searchContext;
        var7 = var0.searchTokenType;
        var5 = var0.location;
        var9 = _closure1_slot1;
        var11 = _closure1_slot2;
        var0 = 6;
        var1 = var11[var0];
        var0 = undefined;
        var4 = var9.bind(var0)(var1);
        var3 = var4.trackWithMetadata;
        var1 = _closure1_slot7;
        var2 = var1.SEARCH_V2_FILTER_ADD;
        var1 = {};
        var8 = 4;
        var12 = var11[var8];
        var13 = var9.bind(var0)(var12);
        var12 = var13.getSelectedTab;
        var12 = var12.bind(var13)(var10);
        var1.search_tab_selected = var12;
        var12 = var11[var8];
        var13 = var9.bind(var0)(var12);
        var12 = var13.getLocation;
        var12 = var12.bind(var13)(var10);
        var1.search_location = var12;
        var12 = var11[var8];
        var13 = var9.bind(var0)(var12);
        var12 = var13.getSessionId;
        var12 = var12.bind(var13)(var10);
        var1.search_session_id = var12;
        var8 = var11[var8];
        var9 = var9.bind(var0)(var8);
        var8 = var9.getQueryId;
        var8 = var8.bind(var9)(var10);
        var1.search_query_id = var8;
        var6 = _closure1_slot8;
        var6 = var6.bind(var0)(var7);
        var1.search_filter_type = var6;
        var1.location = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var1.trackSearchFilterAdd = var6;
    var6 = function arg0() {
        var0 = arg0;
        var10 = var0.searchContext;
        var7 = var0.searchTokenType;
        var5 = var0.isDefault;
        var9 = _closure1_slot1;
        var11 = _closure1_slot2;
        var0 = 6;
        var1 = var11[var0];
        var0 = undefined;
        var4 = var9.bind(var0)(var1);
        var3 = var4.trackWithMetadata;
        var1 = _closure1_slot7;
        var2 = var1.SEARCH_V2_FILTER_REMOVE;
        var1 = {};
        var8 = 4;
        var12 = var11[var8];
        var13 = var9.bind(var0)(var12);
        var12 = var13.getSelectedTab;
        var12 = var12.bind(var13)(var10);
        var1.search_tab_selected = var12;
        var12 = var11[var8];
        var13 = var9.bind(var0)(var12);
        var12 = var13.getLocation;
        var12 = var12.bind(var13)(var10);
        var1.search_location = var12;
        var12 = var11[var8];
        var13 = var9.bind(var0)(var12);
        var12 = var13.getSessionId;
        var12 = var12.bind(var13)(var10);
        var1.search_session_id = var12;
        var8 = var11[var8];
        var9 = var9.bind(var0)(var8);
        var8 = var9.getQueryId;
        var8 = var8.bind(var9)(var10);
        var1.search_query_id = var8;
        var6 = _closure1_slot8;
        var6 = var6.bind(var0)(var7);
        var1.search_filter_type = var6;
        var1.is_default_search_filter = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var1.trackSearchFilterRemove = var6;
    var6 = function arg0() {
        var0 = arg0;
        var7 = var0.searchContext;
        var6 = _closure1_slot1;
        var8 = _closure1_slot2;
        var0 = 6;
        var2 = var8[var0];
        var0 = undefined;
        var4 = var6.bind(var0)(var2);
        var3 = var4.trackWithMetadata;
        var1 = _closure1_slot7;
        var2 = var1.SEARCH_V2_TAB_SELECTED;
        var1 = {};
        var5 = 4;
        var9 = var8[var5];
        var10 = var6.bind(var0)(var9);
        var9 = var10.getSessionId;
        var9 = var9.bind(var10)(var7);
        var1.search_session_id = var9;
        var9 = var8[var5];
        var10 = var6.bind(var0)(var9);
        var9 = var10.getQueryId;
        var9 = var9.bind(var10)(var7);
        var1.search_query_id = var9;
        var9 = var8[var5];
        var10 = var6.bind(var0)(var9);
        var9 = var10.getSelectedTab;
        var9 = var9.bind(var10)(var7);
        var1.search_tab_selected = var9;
        var5 = var8[var5];
        var6 = var6.bind(var0)(var5);
        var5 = var6.getLocation;
        var5 = var5.bind(var6)(var7);
        var1.search_location = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var1.trackSearchTabSelected = var6;
    var3 = function arg0() {
        _fun71822: for (var _fun71822_ip = 0;;) switch (_fun71822_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.searchContext;
                var5 = var0.channelId;
                var2 = _closure1_slot3;
                var0 = var2.getChannel;
                var7 = var0.bind(var2)(var5);
                var8 = _closure1_slot1;
                var10 = _closure1_slot2;
                var0 = 6;
                var2 = var10[var0];
                var0 = undefined;
                var4 = var8.bind(var0)(var2);
                var3 = var4.trackWithMetadata;
                var1 = _closure1_slot7;
                var2 = var1.SEARCH_V2_JUMP_TO_MESSAGE;
                var1 = {};
                var6 = 4;
                var11 = var10[var6];
                var12 = var8.bind(var0)(var11);
                var11 = var12.getSelectedTab;
                var11 = var11.bind(var12)(var9);
                var1.search_tab_selected = var11;
                var11 = var10[var6];
                var12 = var8.bind(var0)(var11);
                var11 = var12.getLocation;
                var11 = var11.bind(var12)(var9);
                var1.search_location = var11;
                var11 = var10[var6];
                var12 = var8.bind(var0)(var11);
                var11 = var12.getSessionId;
                var11 = var11.bind(var12)(var9);
                var1.search_session_id = var11;
                var6 = var10[var6];
                var8 = var8.bind(var0)(var6);
                var6 = var8.getQueryId;
                var6 = var6.bind(var8)(var9);
                var1.search_query_id = var6;
                var6 = null;
                var8 = var6 == var7;
                var6 = undefined;
                if (var8) {
                    _fun71822_ip = 190;
                    continue _fun71822
                }
            case 185:
                var6 = var7.type;
            case 190:
                var1.search_result_channel_type = var6;
                var1.search_result_channel_id = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var0;
        }
    };
    var1.trackSearchJumpToMessage = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/search/native/tracking/Tracking.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1372, 9005, 8940, 660, 9019, 9007, 4303, 491, 1348, 2]);