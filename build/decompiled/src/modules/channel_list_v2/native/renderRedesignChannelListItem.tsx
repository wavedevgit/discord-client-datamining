// modules/channel_list_v2/native/renderRedesignChannelListItem.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var5;
    var0 = function arg0, arg1() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var2 = arg1;
        var _closure2_slot1 = var2;
        var2 = var1.threadIds;
        var1 = var2.map;
        var0 = function(arg0, arg1) { // Environment: var0
            _fun101986: for (var _fun101986_ip = 0;;) switch (_fun101986_ip) {
                case 0:
                    var5 = arg0;
                    var2 = _closure1_slot7;
                    var0 = var2.getChannel;
                    var2 = var0.bind(var2)(var5);
                    var0 = null;
                    var2 = var0 == var2;
                    if (var2) {
                        _fun101986_ip = 124;
                        continue _fun101986
                    }
                case 29:
                    var4 = _closure1_slot20;
                    var3 = _closure1_slot3;
                    var2 = {};
                    var7 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var1 = 34;
                    var6 = var6[var1];
                    var1 = undefined;
                    var7 = var7.bind(var1)(var6);
                    var6 = {};
                    var6.threadId = var5;
                    var8 = arg1;
                    var6.threadIndex = var8;
                    var9 = _closure2_slot0;
                    var9 = var9.threadCount;
                    var6.threadCount = var9;
                    var8 = _closure2_slot1;
                    var8 = var8 === var5;
                    var6.selected = var8;
                    var6 = var4.bind(var1)(var7, var6);
                    var2.children = var6;
                    var0 = var4.bind(var1)(var3, var2, var5);
                case 124:
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot24 = var0;
    var0 = function arg0() {
        _fun101987: for (var _fun101987_ip = 0;;) switch (_fun101987_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.getCategoryFromSection;
                var0 = var2.voiceChannelsSectionNumber;
                var3 = var1.bind(var2)(var0);
                var0 = null;
                var4 = var0 == var3;
                if (var4) {
                    _fun101987_ip = 39;
                    continue _fun101987
                }
            case 29:
                var0 = var3.isEmpty;
                var4 = var0.bind(var3)();
            case 39:
                var2 = false;
                var1 = false;
                if (var4) {
                    _fun101987_ip = 64;
                    continue _fun101987
                }
            case 46:
                var3 = var3.isCollapsed;
                var0 = false;
                if (!var3) {
                    _fun101987_ip = 59;
                    continue _fun101987
                }
            case 57:
                var0 = true;
            case 59:
                var2 = true;
                var1 = var0;
            case 64:
                var0 = {};
                var0.showDivider = var2;
                var0.isCollapsed = var1;
                return var0;
        }
    };
    var _closure1_slot25 = var0;
    var0 = function arg0, arg1() {
        _fun101988: for (var _fun101988_ip = 0;;) switch (_fun101988_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.getCategoryFromSection;
                var0 = arg1;
                var1 = var1.bind(var2)(var0);
                var0 = null;
                if (!(var0 != var1)) {
                    _fun101988_ip = 57;
                    continue _fun101988
                }
            case 23:
                var0 = var1.getHiddenChannelIds;
                var0 = var0.bind(var1)();
                var0 = var0.length;
                var2 = 0;
                if (!(!(var0 > var2))) {
                    _fun101988_ip = 73;
                    continue _fun101988
                }
            case 44:
                var0 = var1.isEmpty;
                var0 = var0.bind(var1)();
                if (!var0) {
                    _fun101988_ip = 73;
                    continue _fun101988
                }
            case 57:
                var0 = {
                    'render': false,
                    'lastShownChannelActive': false
                };
                return var0;
            case 73:
                var0 = var1.getShownChannelIds;
                var0 = var0.bind(var1)();
                var3 = var0.length;
                var0 = var1.getShownChannelIds;
                var1 = var0.bind(var1)();
                var0 = 1;
                var0 = var3 - var0;
                var4 = var1[var0];
                var0 = {};
                var1 = true;
                var0.render = var1;
                var3 = _closure1_slot9;
                var1 = var3.countVoiceStatesForChannel;
                var1 = var1.bind(var3)(var4);
                var1 = var1 > var2;
                var0.lastShownChannelActive = var1;
                return var0;
        }
    };
    var _closure1_slot26 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var8.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.THREADED_CHANNEL_TYPES;
    var _closure1_slot5 = var6;
    var3 = var3.THREAD_CHANNEL_TYPES;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var8.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var8.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var8.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.CATEGORY_MARGIN_TOP;
    var _closure1_slot10 = var6;
    var6 = var3.getScaledCategoryRowHeight;
    var _closure1_slot11 = var6;
    var6 = var3.getScaledChannelRowHeight;
    var _closure1_slot12 = var6;
    var6 = var3.getScaledChannelSubtitleHeight;
    var _closure1_slot13 = var6;
    var3 = var3.STICKY_HEADER_MARGIN_BOTTOM;
    var _closure1_slot14 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.FAVORITES;
    var _closure1_slot15 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.StaticChannelRoute;
    var _closure1_slot16 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.FAVORITES_RAW_GUILD_ID;
    var _closure1_slot17 = var3;
    var3 = 11;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.ChannelListChannelNoticeRow;
    var _closure1_slot18 = var6;
    var3 = var3.ChannelListGuildActionRow;
    var _closure1_slot19 = var3;
    var3 = 12;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot20 = var6;
    var6 = var3.jsxs;
    var _closure1_slot21 = var6;
    var3 = var3.Fragment;
    var _closure1_slot22 = var3;
    var3 = {};
    var6 = {};
    var9 = 16;
    var6.marginHorizontal = var9;
    var3.nonChannelContainer = var6;
    var6 = {};
    var7 = 13;
    var10 = var5[var7];
    var10 = var4.bind(var0)(var10);
    var10 = var10.LIVE_CHANNEL_NOTICE_MARGIN_TOP;
    var6.marginTop = var10;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var7 = var7.LIVE_CHANNEL_NOTICE_MARGIN_BOTTOM;
    var6.marginBottom = var7;
    var6.marginHorizontal = var9;
    var3.liveChannelNotice = var6;
    var6 = {};
    var6.marginHorizontal = var9;
    var7 = 14;
    var10 = var5[var7];
    var10 = var8.bind(var0)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_16;
    var6.marginTop = var10;
    var3.showAllVoiceChannelsButtonLastShownChannelActive = var6;
    var6 = {};
    var6.marginHorizontal = var9;
    var7 = var5[var7];
    var7 = var8.bind(var0)(var7);
    var7 = var7.spacing;
    var7 = var7.PX_8;
    var6.marginTop = var7;
    var3.showAllVoiceChannelsButtonLastShownChannelInactive = var6;
    var _closure1_slot23 = var3;
    var3 = 45;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/channel_list_v2/native/renderRedesignChannelListItem.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0, arg1, arg2, arg3() {
        _fun101989: for (var _fun101989_ip = 0;;) switch (_fun101989_ip) {
            case 0:
                var1 = arg0;
                var4 = arg1;
                var7 = arg2;
                var5 = arg3;
                var6 = _closure1_slot0;
                var0 = _closure1_slot2;
                var8 = 15;
                var2 = var0[var8];
                var0 = undefined;
                var2 = var6.bind(var0)(var2);
                var2 = var2.FastListItemTypes;
                var2 = var2.ITEM;
                if (!(var4 !== var2)) {
                    _fun101989_ip = 125;
                    continue _fun101989
                }
            case 53:
                var6 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var8];
                var2 = var6.bind(var0)(var2);
                var2 = var2.FastListItemTypes;
                var2 = var2.SECTION;
                if (!(var4 !== var2)) {
                    _fun101989_ip = 88;
                    continue _fun101989
                }
            case 86:
                return var0;
            case 88:
                var8 = var1.id;
                var2 = global;
                var2 = var2.HermesInternal;
                var6 = var2.concat;
                var4 = '';
                var2 = ':SECTION:';
                var2 = var6.bind(var4)(var8, var2, var7);
                return var2;
            case 125:
                var2 = null;
                if (!(var2 != var5)) {
                    _fun101989_ip = 329;
                    continue _fun101989
                }
            case 134:
                var8 = _closure1_slot0;
                var4 = _closure1_slot2;
                var6 = 16;
                var4 = var4[var6];
                var4 = var8.bind(var0)(var4);
                var4 = var4.SECTION_INDEX_CHANNEL_NOTICES;
                if (!(var4 !== var7)) {
                    _fun101989_ip = 256;
                    continue _fun101989
                }
            case 164:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var6];
                var3 = var4.bind(var0)(var3);
                var3 = var3.SECTION_INDEX_GUILD_ACTIONS;
                if (!(var3 !== var7)) {
                    _fun101989_ip = 233;
                    continue _fun101989
                }
            case 191:
                var3 = var1.getChannelFromSectionRow;
                var3 = var3.bind(var1)(var7, var5);
                var4 = var2 == var3;
                var6 = undefined;
                if (var4) {
                    _fun101989_ip = 231;
                    continue _fun101989
                }
            case 212:
                var3 = var3.channel;
                var4 = var2 == var3;
                var6 = undefined;
                if (var4) {
                    _fun101989_ip = 231;
                    continue _fun101989
                }
            case 226:
                var6 = var3.id;
            case 231:
                _fun101989_ip = 277;
                continue _fun101989;
            case 233:
                var3 = var1.getGuildActionSection;
                var4 = var3.bind(var1)();
                var3 = var4.getRow;
                var6 = var3.bind(var4)(var5);
                _fun101989_ip = 277;
                continue _fun101989;
            case 256:
                var3 = var1.getChannelNoticeSection;
                var4 = var3.bind(var1)();
                var3 = var4.getRow;
                var6 = var3.bind(var4)(var5);
            case 277:
                if (!(var2 != var6)) {
                    _fun101989_ip = 327;
                    continue _fun101989
                }
            case 281:
                var13 = var1.id;
                var1 = global;
                var1 = var1.HermesInternal;
                var4 = var1.concat;
                var14 = '';
                var12 = ':SECTION:';
                var10 = ':ITEM:';
                var11 = var7;
                var9 = var6;
                var1 = var14[var4](var13, var12, var11, var10, var9, var8);
                return var1;
            case 327:
                return var0;
            case 329:
                return var0;
        }
    };
    var2.getFastListRecyclerKey = var3;
    var3 = function arg0, arg1, arg2, arg3() {
        _fun101990: for (var _fun101990_ip = 0;;) switch (_fun101990_ip) {
            case 0:
                var6 = arg0;
                var8 = arg1;
                var3 = arg3;
                var0 = var6.favoritesSectionNumber;
                if (!(var0 !== var8)) {
                    _fun101990_ip = 491;
                    continue _fun101990
                }
            case 22:
                var0 = var6.recentsSectionNumber;
                if (!(var0 !== var8)) {
                    _fun101990_ip = 351;
                    continue _fun101990
                }
            case 35:
                var0 = var6.voiceChannelsSectionNumber;
                if (!(var0 !== var8)) {
                    _fun101990_ip = 163;
                    continue _fun101990
                }
            case 45:
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 20;
                var0 = var4[var0];
                var5 = undefined;
                var2 = var2.bind(var5)(var0);
                var0 = var2.isNamedCategorySection;
                var2 = var0.bind(var2)(var8);
                var0 = null;
                if (var2) {
                    _fun101990_ip = 88;
                    continue _fun101990
                }
            case 86:
                return var0;
            case 88:
                var2 = var6.getNamedCategoryFromSection;
                var7 = var2.bind(var6)(var8);
                var2 = var0 == var7;
                var0 = null;
                if (var2) {
                    _fun101990_ip = 161;
                    continue _fun101990
                }
            case 108:
                var4 = _closure1_slot20;
                var2 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 17;
                var1 = var9[var1];
                var1 = var2.bind(var5)(var1);
                var2 = var1.CategoryChannel;
                var1 = {};
                var7 = var7.record;
                var1.channel = var7;
                var1.withMarginTop = var3;
                var0 = var4.bind(var5)(var2, var1);
            case 161:
                return var0;
            case 163:
                var0 = _closure1_slot25;
                var4 = undefined;
                var0 = var0.bind(var4)(var6);
                var5 = var0.showDivider;
                var10 = var0.isCollapsed;
                var2 = _closure1_slot21;
                var1 = _closure1_slot3;
                var0 = {};
                var11 = null;
                if (!var5) {
                    _fun101990_ip = 236;
                    continue _fun101990
                }
            case 204:
                var13 = _closure1_slot20;
                var12 = _closure1_slot1;
                var14 = _closure1_slot2;
                var5 = 19;
                var5 = var14[var5];
                var12 = var12.bind(var4)(var5);
                var5 = {};
                var11 = var13.bind(var4)(var12, var5);
            case 236:
                var5 = new Array(2);
                var5[0] = var11;
                var7 = null;
                if (!var10) {
                    _fun101990_ip = 335;
                    continue _fun101990
                }
            case 249:
                var15 = _closure1_slot0;
                var16 = _closure1_slot2;
                var9 = 17;
                var9 = var16[var9];
                var11 = var15.bind(var4)(var9);
                var10 = var11.renderCategoryItem;
                var9 = {};
                var12 = 18;
                var13 = var16[var12];
                var13 = var15.bind(var4)(var13);
                var14 = var13.intl;
                var13 = var14.string;
                var12 = var16[var12];
                var12 = var15.bind(var4)(var12);
                var12 = var12.t;
                var12 = var12["V/u9Dy"];
                var12 = var13.bind(var14)(var12);
                var9.name = var12;
                var7 = var10.bind(var11)(var9);
            case 335:
                var5[1] = var7;
                var0.children = var5;
                var0 = var2.bind(var4)(var1, var0);
                return var0;
            case 351:
                var5 = _closure1_slot20;
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 17;
                var0 = var2[var0];
                var4 = undefined;
                var1 = var1.bind(var4)(var0);
                var0 = arg2;
                if (var0) {
                    _fun101990_ip = 461;
                    continue _fun101990
                }
            case 386:
                var2 = var1.SuggestedCategory;
                var0 = {};
                var7 = var6.id;
                var0.guildId = var7;
                var7 = var6.getCategoryFromSection;
                var10 = var7.bind(var6)(var8);
                var8 = null;
                var9 = var8 == var10;
                var7 = undefined;
                if (var9) {
                    _fun101990_ip = 435;
                    continue _fun101990
                }
            case 425:
                var9 = var10.getShownChannelAndThreadIds;
                var7 = var9.bind(var10)();
            case 435:
                if (!(var8 == var7)) {
                    _fun101990_ip = 443;
                    continue _fun101990
                }
            case 439:
                var7 = new Array(0);
            case 443:
                var0.channelIds = var7;
                var0.withMarginTop = var3;
                var0 = var5.bind(var4)(var2, var0);
                _fun101990_ip = 489;
                continue _fun101990;
            case 461:
                var2 = var1.RecentlyActiveCategory;
                var1 = {};
                var6 = var6.id;
                var1.guildId = var6;
                var1.withMarginTop = var3;
                var0 = var5.bind(var4)(var2, var1);
            case 489:
                return var0;
            case 491:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var0 = 17;
                var0 = var9[var0];
                var7 = undefined;
                var2 = var8.bind(var7)(var0);
                var1 = var2.renderCategoryItem;
                var0 = {};
                var4 = 18;
                var5 = var9[var4];
                var5 = var8.bind(var7)(var5);
                var6 = var5.intl;
                var5 = var6.string;
                var4 = var9[var4];
                var4 = var8.bind(var7)(var4);
                var4 = var4.t;
                var4 = var4.k8fFjp;
                var4 = var5.bind(var6)(var4);
                var0.name = var4;
                var0.withMarginTop = var3;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.renderChannelListSectionHeader = var3;
    var3 = function arg0, arg1, arg2, arg3() {
        _fun101991: for (var _fun101991_ip = 0;;) switch (_fun101991_ip) {
            case 0:
                var4 = arg0;
                var8 = arg1;
                var1 = _closure1_slot11;
                var7 = undefined;
                var0 = arg2;
                var1 = var1.bind(var7)(var0);
                var5 = 0;
                var3 = arg3;
                var0 = 0;
                if (!var3) {
                    _fun101991_ip = 37;
                    continue _fun101991
                }
            case 33:
                var0 = _closure1_slot10;
            case 37:
                var3 = var4.favoritesSectionNumber;
                if (!(var3 !== var8)) {
                    _fun101991_ip = 208;
                    continue _fun101991
                }
            case 50:
                var3 = var4.recentsSectionNumber;
                if (!(var3 !== var8)) {
                    _fun101991_ip = 208;
                    continue _fun101991
                }
            case 63:
                var3 = var4.voiceChannelsSectionNumber;
                if (!(var3 !== var8)) {
                    _fun101991_ip = 140;
                    continue _fun101991
                }
            case 73:
                var6 = _closure1_slot0;
                var9 = _closure1_slot2;
                var3 = 20;
                var3 = var9[var3];
                var6 = var6.bind(var7)(var3);
                var3 = var6.isNamedCategorySection;
                var6 = var3.bind(var6)(var8);
                var3 = 0;
                if (!var6) {
                    _fun101991_ip = 138;
                    continue _fun101991
                }
            case 109:
                var6 = var4.getNamedCategoryFromSection;
                var8 = var6.bind(var4)(var8);
                var6 = null;
                var8 = var6 == var8;
                var6 = 0;
                if (var8) {
                    _fun101991_ip = 135;
                    continue _fun101991
                }
            case 131:
                var6 = var1 + var0;
            case 135:
                var3 = var6;
            case 138:
                return var3;
            case 140:
                var3 = _closure1_slot25;
                var3 = var3.bind(var7)(var4);
                var6 = var3.showDivider;
                var4 = var3.isCollapsed;
                var3 = 0;
                if (!var6) {
                    _fun101991_ip = 196;
                    continue _fun101991
                }
            case 166:
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 19;
                var2 = var8[var2];
                var2 = var6.bind(var7)(var2);
                var2 = var2.DIVIDER_HEIGHT;
                var3 = var5 + var2;
            case 196:
                var2 = var3;
                if (!var4) {
                    _fun101991_ip = 206;
                    continue _fun101991
                }
            case 202:
                var2 = var3 + var1;
            case 206:
                return var2;
            case 208:
                var0 = var1 + var0;
                return var0;
        }
    };
    var2.getChannelListSectionHeaderSize = var3;
    var3 = function arg0, arg1, arg2, arg3() {
        _fun101992: for (var _fun101992_ip = 0;;) switch (_fun101992_ip) {
            case 0:
                var14 = arg0;
                var13 = arg1;
                var5 = arg3;
                var0 = null;
                var1 = var0 != var5;
                var7 = null;
                if (!var1) {
                    _fun101992_ip = 77;
                    continue _fun101992
                }
            case 20:
                var4 = _closure1_slot20;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 17;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var2 = var1.RedesignVoiceUserSummary;
                var1 = {};
                var6 = var14.id;
                var1.guildId = var6;
                var1.channels = var5;
                var7 = var4.bind(var3)(var2, var1);
            case 77:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var5 = 16;
                var2 = var2[var5];
                var4 = undefined;
                var2 = var3.bind(var4)(var2);
                var2 = var2.SECTION_INDEX_CHANNEL_NOTICES;
                if (!(var2 !== var13)) {
                    _fun101992_ip = 413;
                    continue _fun101992
                }
            case 115:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var5];
                var2 = var3.bind(var4)(var2);
                var2 = var2.SECTION_INDEX_GUILD_ACTIONS;
                if (!(var2 !== var13)) {
                    _fun101992_ip = 413;
                    continue _fun101992
                }
            case 145:
                var2 = var14.favoritesSectionNumber;
                if (!(var2 !== var13)) {
                    _fun101992_ip = 379;
                    continue _fun101992
                }
            case 158:
                var2 = var14.recentsSectionNumber;
                if (!(var2 !== var13)) {
                    _fun101992_ip = 379;
                    continue _fun101992
                }
            case 171:
                var2 = var14.voiceChannelsSectionNumber;
                if (!(var2 === var13)) {
                    _fun101992_ip = 206;
                    continue _fun101992
                }
            case 181:
                var2 = _closure1_slot26;
                var3 = var2.bind(var4)(var14, var13);
                var2 = var3.render;
                var10 = var3.lastShownChannelActive;
                if (var2) {
                    _fun101992_ip = 247;
                    continue _fun101992
                }
            case 206:
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 20;
                var2 = var5[var2];
                var3 = var3.bind(var4)(var2);
                var2 = var3.isNamedCategorySection;
                var3 = var2.bind(var3)(var13);
                var2 = null;
                if (!var3) {
                    _fun101992_ip = 245;
                    continue _fun101992
                }
            case 242:
                var2 = var7;
            case 245:
                return var2;
            case 247:
                var5 = _closure1_slot21;
                var3 = _closure1_slot3;
                var2 = {};
                var6 = new Array(2);
                var6[0] = var7;
                var9 = _closure1_slot20;
                var8 = _closure1_slot3;
                var7 = {};
                var11 = _closure1_slot23;
                if (var10) {
                    _fun101992_ip = 290;
                    continue _fun101992
                }
            case 282:
                var10 = var11.showAllVoiceChannelsButtonLastShownChannelInactive;
                _fun101992_ip = 296;
                continue _fun101992;
            case 290:
                var10 = var11.showAllVoiceChannelsButtonLastShownChannelActive;
            case 296:
                var7.style = var10;
                var12 = _closure1_slot20;
                var11 = _closure1_slot1;
                var15 = _closure1_slot2;
                var10 = 21;
                var10 = var15[var10];
                var11 = var11.bind(var4)(var10);
                var10 = {};
                var14 = var14.id;
                var10.guildId = var14;
                var10.section = var13;
                var13 = arg2;
                var10.listRef = var13;
                var10 = var12.bind(var4)(var11, var10);
                var7.children = var10;
                var7 = var9.bind(var4)(var8, var7);
                var6[1] = var7;
                var2.children = var6;
                var2 = var5.bind(var4)(var3, var2);
                return var2;
            case 379:
                var3 = _closure1_slot20;
                var2 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 19;
                var1 = var5[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 413:
                return var0;
        }
    };
    var2.renderChannelListSectionFooter = var3;
    var3 = function arg0, arg1() {
        _fun101993: for (var _fun101993_ip = 0;;) switch (_fun101993_ip) {
            case 0:
                var0 = arg0;
                var2 = arg1;
                var6 = _closure1_slot0;
                var3 = _closure1_slot2;
                var5 = 16;
                var3 = var3[var5];
                var4 = undefined;
                var3 = var6.bind(var4)(var3);
                var3 = var3.SECTION_INDEX_CHANNEL_NOTICES;
                if (!(var3 !== var2)) {
                    _fun101993_ip = 102;
                    continue _fun101993
                }
            case 41:
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var5];
                var1 = var3.bind(var4)(var1);
                var1 = var1.SECTION_INDEX_GUILD_ACTIONS;
                if (!(var1 !== var2)) {
                    _fun101993_ip = 102;
                    continue _fun101993
                }
            case 68:
                var1 = var0.favoritesSectionNumber;
                if (!(var1 !== var2)) {
                    _fun101993_ip = 98;
                    continue _fun101993
                }
            case 78:
                var1 = var0.recentsSectionNumber;
                if (!(var1 !== var2)) {
                    _fun101993_ip = 98;
                    continue _fun101993
                }
            case 88:
                var0 = var0.voiceChannelsSectionNumber;
                var0 = false;
                return var0;
            case 98:
                var0 = true;
                return var0;
            case 102:
                var0 = false;
                return var0;
        }
    };
    var2.getChannelListSectionHasFooterDivider = var3;
    var3 = function arg0, arg1, arg2() {
        _fun101994: for (var _fun101994_ip = 0;;) switch (_fun101994_ip) {
            case 0:
                var5 = arg0;
                var4 = arg1;
                var1 = null;
                var0 = arg2;
                var1 = var1 != var0;
                var0 = 0;
                var6 = 0;
                if (!var1) {
                    _fun101994_ip = 53;
                    continue _fun101994
                }
            case 22:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 22;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var6 = var1.VOICE_USER_SUMMARY_HEIGHT;
            case 53:
                var7 = _closure1_slot0;
                var2 = _closure1_slot2;
                var8 = 16;
                var2 = var2[var8];
                var3 = undefined;
                var2 = var7.bind(var3)(var2);
                var2 = var2.SECTION_INDEX_CHANNEL_NOTICES;
                if (!(var2 !== var4)) {
                    _fun101994_ip = 321;
                    continue _fun101994
                }
            case 91:
                var7 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var8];
                var2 = var7.bind(var3)(var2);
                var2 = var2.SECTION_INDEX_GUILD_ACTIONS;
                if (!(var2 !== var4)) {
                    _fun101994_ip = 321;
                    continue _fun101994
                }
            case 121:
                var2 = var5.favoritesSectionNumber;
                if (!(var2 !== var4)) {
                    _fun101994_ip = 293;
                    continue _fun101994
                }
            case 134:
                var2 = var5.recentsSectionNumber;
                if (!(var2 !== var4)) {
                    _fun101994_ip = 293;
                    continue _fun101994
                }
            case 147:
                var2 = var5.voiceChannelsSectionNumber;
                if (!(var2 !== var4)) {
                    _fun101994_ip = 198;
                    continue _fun101994
                }
            case 157:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 20;
                var2 = var8[var2];
                var7 = var7.bind(var3)(var2);
                var2 = var7.isNamedCategorySection;
                var7 = var2.bind(var7)(var4);
                var2 = 0;
                if (!var7) {
                    _fun101994_ip = 196;
                    continue _fun101994
                }
            case 193:
                var2 = var6;
            case 196:
                return var2;
            case 198:
                var2 = _closure1_slot26;
                var2 = var2.bind(var3)(var5, var4);
                var5 = var2.render;
                var4 = var2.lastShownChannelActive;
                var2 = var6;
                if (!var5) {
                    _fun101994_ip = 291;
                    continue _fun101994
                }
            case 226:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var5 = 23;
                var5 = var8[var5];
                var5 = var7.bind(var3)(var5);
                var5 = var5.SMALL_BUTTON_HEIGHT;
                var5 = var6 + var5;
                var6 = _closure1_slot23;
                if (var4) {
                    _fun101994_ip = 276;
                    continue _fun101994
                }
            case 263:
                var4 = var6.showAllVoiceChannelsButtonLastShownChannelInactive;
                var4 = var4.marginTop;
                _fun101994_ip = 287;
                continue _fun101994;
            case 276:
                var6 = var6.showAllVoiceChannelsButtonLastShownChannelActive;
                var4 = var6.marginTop;
            case 287:
                var2 = var5 + var4;
            case 291:
                return var2;
            case 293:
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 19;
                var1 = var4[var1];
                var1 = var2.bind(var3)(var1);
                var1 = var1.DIVIDER_HEIGHT;
                return var1;
            case 321:
                return var0;
        }
    };
    var2.getChannelListSectionFooterSize = var3;
    var3 = function arg0() {
        _fun101995: for (var _fun101995_ip = 0;;) switch (_fun101995_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.guildChannels;
                var3 = var0.section;
                var2 = var0.row;
                var10 = var0.selectedChannelId;
                var9 = var0.guild;
                var5 = _closure1_slot0;
                var0 = _closure1_slot2;
                var7 = 16;
                var0 = var0[var7];
                var4 = undefined;
                var0 = var5.bind(var4)(var0);
                var0 = var0.SECTION_INDEX_CHANNEL_NOTICES;
                if (!(var0 !== var3)) {
                    _fun101995_ip = 1752;
                    continue _fun101995
                }
            case 69:
                var5 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var7];
                var0 = var5.bind(var4)(var0);
                var0 = var0.SECTION_INDEX_GUILD_ACTIONS;
                if (!(var0 !== var3)) {
                    _fun101995_ip = 908;
                    continue _fun101995
                }
            case 99:
                var0 = {};
                var0.guildChannels = var1;
                var0.section = var3;
                var0.row = var2;
                var0.selectedChannelId = var10;
                var0.guild = var9;
                var3 = var0.guildChannels;
                var7 = var0.section;
                var5 = var0.row;
                var13 = var0.selectedChannelId;
                var11 = var0.guild;
                var0 = var3.getChannelFromSectionRow;
                var8 = var0.bind(var3)(var7, var5);
                var5 = null;
                var12 = var5 == var8;
                var0 = null;
                if (var12) {
                    _fun101995_ip = 906;
                    continue _fun101995
                }
            case 178:
                var12 = var8.channel;
                var8 = var12.record;
                var14 = var8.id;
                var14 = var14 === var13;
                var17 = _closure1_slot5;
                var16 = var17.has;
                var15 = var8.type;
                var15 = var16.bind(var17)(var15);
                var5 = null;
                if (!var15) {
                    _fun101995_ip = 227;
                    continue _fun101995
                }
            case 222:
                var5 = var8.type;
            case 227:
                var15 = var8.type;
                if (!(var5 !== var15)) {
                    _fun101995_ip = 781;
                    continue _fun101995
                }
            case 239:
                var16 = _closure1_slot0;
                var5 = _closure1_slot2;
                var17 = 36;
                var5 = var5[var17];
                var5 = var16.bind(var4)(var5);
                var5 = var5.ChannelTypes;
                var5 = var5.GUILD_VOICE;
                if (!(var5 !== var15)) {
                    _fun101995_ip = 724;
                    continue _fun101995
                }
            case 278:
                var16 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var17];
                var5 = var16.bind(var4)(var5);
                var5 = var5.ChannelTypes;
                var5 = var5.GUILD_STAGE_VOICE;
                if (!(var5 !== var15)) {
                    _fun101995_ip = 678;
                    continue _fun101995
                }
            case 314:
                var16 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var17];
                var5 = var16.bind(var4)(var5);
                var5 = var5.ChannelTypes;
                var5 = var5.DM;
                if (!(var5 !== var15)) {
                    _fun101995_ip = 632;
                    continue _fun101995
                }
            case 350:
                var16 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var17];
                var5 = var16.bind(var4)(var5);
                var5 = var5.ChannelTypes;
                var5 = var5.GROUP_DM;
                if (!(var5 !== var15)) {
                    _fun101995_ip = 632;
                    continue _fun101995
                }
            case 386:
                var5 = var3.voiceChannelsSectionNumber;
                if (!(var7 === var5)) {
                    _fun101995_ip = 412;
                    continue _fun101995
                }
            case 396:
                var5 = var8.isCategory;
                var5 = var5.bind(var8)();
                if (var5) {
                    _fun101995_ip = 575;
                    continue _fun101995
                }
            case 412:
                var7 = var3.id;
                var5 = _closure1_slot17;
                if (!(var7 !== var5)) {
                    _fun101995_ip = 438;
                    continue _fun101995
                }
            case 425:
                var5 = var3.id;
                var3 = _closure1_slot15;
                if (!(var5 === var3)) {
                    _fun101995_ip = 532;
                    continue _fun101995
                }
            case 438:
                var7 = _closure1_slot6;
                var5 = var7.has;
                var3 = var8.type;
                var3 = var5.bind(var7)(var3);
                if (!var3) {
                    _fun101995_ip = 532;
                    continue _fun101995
                }
            case 460:
                var7 = _closure1_slot20;
                var5 = _closure1_slot1;
                var15 = _closure1_slot2;
                var3 = 35;
                var3 = var15[var3];
                var5 = var5.bind(var4)(var3);
                var3 = {};
                var3.channel = var8;
                var3.selected = var14;
                var15 = var12.isMuted;
                var3.muted = var15;
                var15 = var12.subtitle;
                var3.subtitle = var15;
                var15 = false;
                var3.isRulesChannel = var15;
                var3 = var7.bind(var4)(var5, var3);
                _fun101995_ip = 573;
                continue _fun101995;
            case 532:
                var15 = _closure1_slot20;
                var7 = _closure1_slot1;
                var16 = _closure1_slot2;
                var5 = 40;
                var5 = var16[var5];
                var7 = var7.bind(var4)(var5);
                var5 = {};
                var5.channel = var8;
                var5.selected = var14;
                var3 = var15.bind(var4)(var7, var5);
            case 573:
                _fun101995_ip = 624;
                continue _fun101995;
            case 575:
                var15 = _closure1_slot20;
                var7 = _closure1_slot0;
                var16 = _closure1_slot2;
                var5 = 17;
                var5 = var16[var5];
                var5 = var7.bind(var4)(var5);
                var7 = var5.CategoryChannel;
                var5 = {};
                var5.channel = var8;
                var16 = true;
                var5.withMarginTop = var16;
                var3 = var15.bind(var4)(var7, var5);
            case 624:
                var0 = var3;
                _fun101995_ip = 906;
                continue _fun101995;
            case 632:
                var7 = _closure1_slot20;
                var5 = _closure1_slot1;
                var15 = _closure1_slot2;
                var3 = 39;
                var3 = var15[var3];
                var5 = var5.bind(var4)(var3);
                var3 = {};
                var3.channel = var8;
                var3.selected = var14;
                var0 = var7.bind(var4)(var5, var3);
                _fun101995_ip = 906;
                continue _fun101995;
            case 678:
                var7 = _closure1_slot20;
                var5 = _closure1_slot1;
                var15 = _closure1_slot2;
                var3 = 38;
                var3 = var15[var3];
                var5 = var5.bind(var4)(var3);
                var3 = {};
                var3.channel = var8;
                var3.selected = var14;
                var0 = var7.bind(var4)(var5, var3);
                _fun101995_ip = 906;
                continue _fun101995;
            case 724:
                var7 = _closure1_slot20;
                var5 = _closure1_slot1;
                var15 = _closure1_slot2;
                var3 = 37;
                var3 = var15[var3];
                var5 = var5.bind(var4)(var3);
                var3 = {};
                var3.channel = var8;
                var3.selected = var14;
                var15 = var12.subtitle;
                var3.subtitle = var15;
                var0 = var7.bind(var4)(var5, var3);
                _fun101995_ip = 906;
                continue _fun101995;
            case 781:
                var7 = _closure1_slot20;
                var5 = _closure1_slot1;
                var15 = _closure1_slot2;
                var3 = 35;
                var3 = var15[var3];
                var5 = var5.bind(var4)(var3);
                var3 = {};
                var3.channel = var8;
                var3.selected = var14;
                var14 = var12.isMuted;
                var3.muted = var14;
                var14 = var12.subtitle;
                var3.subtitle = var14;
                var11 = var11.rulesChannelId;
                var8 = var8.id;
                var8 = var11 === var8;
                var3.isRulesChannel = var8;
                var11 = var7.bind(var4)(var5, var3);
                var7 = _closure1_slot21;
                var5 = _closure1_slot22;
                var3 = {};
                var8 = new Array(2);
                var8[0] = var11;
                var11 = _closure1_slot24;
                var11 = var11.bind(var4)(var12, var13);
                var8[1] = var11;
                var3.children = var8;
                var0 = var7.bind(var4)(var5, var3);
            case 906:
                return var0;
            case 908:
                var0 = var1.getGuildActionSection;
                var3 = var0.bind(var1)();
                var0 = var3.getRow;
                var7 = var0.bind(var3)(var2);
                var3 = null;
                var5 = var3 == var7;
                var0 = null;
                if (var5) {
                    _fun101995_ip = 1750;
                    continue _fun101995
                }
            case 943:
                var5 = _closure1_slot19;
                var5 = var5.GUILD_ROLE_SUBSCRIPTIONS;
                if (!(var5 !== var7)) {
                    _fun101995_ip = 1695;
                    continue _fun101995
                }
            case 960:
                var5 = _closure1_slot19;
                var5 = var5.GUILD_HOME;
                if (!(var5 !== var7)) {
                    _fun101995_ip = 1638;
                    continue _fun101995
                }
            case 977:
                var5 = _closure1_slot19;
                var5 = var5.CHANNELS_AND_ROLES;
                if (!(var5 !== var7)) {
                    _fun101995_ip = 1558;
                    continue _fun101995
                }
            case 994:
                var5 = _closure1_slot19;
                var5 = var5.GUILD_DIRECTORY;
                if (!(var5 !== var7)) {
                    _fun101995_ip = 1477;
                    continue _fun101995
                }
            case 1011:
                var5 = _closure1_slot19;
                var5 = var5.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR;
                if (!(var5 !== var7)) {
                    _fun101995_ip = 1335;
                    continue _fun101995
                }
            case 1028:
                var5 = _closure1_slot19;
                var5 = var5.GUILD_HUB_HEADER_OPTIONS;
                if (!(var5 !== var7)) {
                    _fun101995_ip = 1294;
                    continue _fun101995
                }
            case 1045:
                var5 = _closure1_slot19;
                var5 = var5.GUILD_MOD_DASH_MEMBER_SAFETY;
                if (!(var5 !== var7)) {
                    _fun101995_ip = 1234;
                    continue _fun101995
                }
            case 1062:
                var5 = _closure1_slot19;
                var5 = var5.GUILD_BOOSTS;
                if (!(var5 !== var7)) {
                    _fun101995_ip = 1188;
                    continue _fun101995
                }
            case 1076:
                var5 = _closure1_slot19;
                var5 = var5.GUILD_SCHEDULED_EVENTS;
                var0 = null;
                if (!(var5 !== var7)) {
                    _fun101995_ip = 1750;
                    continue _fun101995
                }
            case 1095:
                var5 = _closure1_slot19;
                var5 = var5.GUILD_FAVORITES;
                var0 = null;
                if (!(var5 !== var7)) {
                    _fun101995_ip = 1750;
                    continue _fun101995
                }
            case 1114:
                var5 = _closure1_slot19;
                var5 = var5.GUILD_CHANNEL_LIST_OPT_IN_NOTICE;
                var0 = null;
                if (!(var5 !== var7)) {
                    _fun101995_ip = 1750;
                    continue _fun101995
                }
            case 1133:
                var5 = _closure1_slot19;
                var5 = var5.GUILD_SHOP;
                var0 = null;
                if (!(var5 !== var7)) {
                    _fun101995_ip = 1750;
                    continue _fun101995
                }
            case 1152:
                var5 = _closure1_slot19;
                var5 = var5.BROWSE_CHANNELS;
                var0 = null;
                if (!(var5 !== var7)) {
                    _fun101995_ip = 1750;
                    continue _fun101995
                }
            case 1171:
                var5 = _closure1_slot19;
                var5 = var5.GUILD_PREMIUM_PROGRESS_BAR;
                var0 = null;
                _fun101995_ip = 1750;
                continue _fun101995;
            case 1188:
                var7 = _closure1_slot20;
                var5 = _closure1_slot1;
                var8 = _closure1_slot2;
                var3 = 33;
                var3 = var8[var3];
                var5 = var5.bind(var4)(var3);
                var3 = {};
                var8 = var9.id;
                var3.guildId = var8;
                var0 = var7.bind(var4)(var5, var3);
                _fun101995_ip = 1750;
                continue _fun101995;
            case 1234:
                var7 = _closure1_slot20;
                var5 = _closure1_slot1;
                var8 = _closure1_slot2;
                var3 = 32;
                var3 = var8[var3];
                var5 = var5.bind(var4)(var3);
                var3 = {};
                var3.guild = var9;
                var8 = _closure1_slot16;
                var8 = var8.MEMBER_SAFETY;
                var8 = var10 === var8;
                var3.selected = var8;
                var0 = var7.bind(var4)(var5, var3);
                _fun101995_ip = 1750;
                continue _fun101995;
            case 1294:
                var7 = _closure1_slot20;
                var5 = _closure1_slot1;
                var8 = _closure1_slot2;
                var3 = 31;
                var3 = var8[var3];
                var5 = var5.bind(var4)(var3);
                var3 = {};
                var3.guild = var9;
                var0 = var7.bind(var4)(var5, var3);
                _fun101995_ip = 1750;
                continue _fun101995;
            case 1335:
                var7 = _closure1_slot21;
                var5 = _closure1_slot3;
                var3 = {};
                var11 = _closure1_slot20;
                var8 = {};
                var12 = _closure1_slot23;
                var12 = var12.nonChannelContainer;
                var8.style = var12;
                var15 = _closure1_slot20;
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var12 = 30;
                var12 = var14[var12];
                var12 = var13.bind(var4)(var12);
                var13 = var12.NewMemberActionsProgress;
                var12 = {};
                var16 = var9.id;
                var12.guildId = var16;
                var12 = var15.bind(var4)(var13, var12);
                var8.children = var12;
                var11 = var11.bind(var4)(var5, var8);
                var8 = new Array(2);
                var8[0] = var11;
                var13 = _closure1_slot20;
                var12 = _closure1_slot1;
                var11 = 19;
                var11 = var14[var11];
                var12 = var12.bind(var4)(var11);
                var11 = {};
                var11 = var13.bind(var4)(var12, var11);
                var8[1] = var11;
                var3.children = var8;
                var0 = var7.bind(var4)(var5, var3);
                _fun101995_ip = 1750;
                continue _fun101995;
            case 1477:
                var7 = _closure1_slot8;
                var5 = var7.getDirectoryChannelIds;
                var3 = var9.id;
                var5 = var5.bind(var7)(var3);
                var3 = 0;
                var8 = var5[var3];
                var7 = _closure1_slot20;
                var5 = _closure1_slot1;
                var11 = _closure1_slot2;
                var3 = 29;
                var3 = var11[var3];
                var5 = var5.bind(var4)(var3);
                var3 = {};
                var11 = var9.id;
                var3.guildId = var11;
                var8 = var10 === var8;
                var3.selected = var8;
                var0 = var7.bind(var4)(var5, var3);
                _fun101995_ip = 1750;
                continue _fun101995;
            case 1558:
                var7 = _closure1_slot20;
                var5 = _closure1_slot0;
                var8 = _closure1_slot2;
                var3 = 28;
                var3 = var8[var3];
                var3 = var5.bind(var4)(var3);
                var5 = var3.GuildRolesAndChannelsRow;
                var3 = {};
                var3.guild = var9;
                var8 = _closure1_slot16;
                var8 = var8.CHANNEL_BROWSER;
                var8 = var10 === var8;
                if (var8) {
                    _fun101995_ip = 1625;
                    continue _fun101995
                }
            case 1611:
                var11 = _closure1_slot16;
                var11 = var11.CUSTOMIZE_COMMUNITY;
                var8 = var10 === var11;
            case 1625:
                var3.selected = var8;
                var0 = var7.bind(var4)(var5, var3);
                _fun101995_ip = 1750;
                continue _fun101995;
            case 1638:
                var7 = _closure1_slot20;
                var5 = _closure1_slot1;
                var8 = _closure1_slot2;
                var3 = 27;
                var3 = var8[var3];
                var5 = var5.bind(var4)(var3);
                var3 = {};
                var3.guild = var9;
                var8 = _closure1_slot16;
                var8 = var8.GUILD_HOME;
                var8 = var10 === var8;
                var3.selected = var8;
                var0 = var7.bind(var4)(var5, var3);
                _fun101995_ip = 1750;
                continue _fun101995;
            case 1695:
                var7 = _closure1_slot20;
                var5 = _closure1_slot1;
                var8 = _closure1_slot2;
                var3 = 26;
                var3 = var8[var3];
                var5 = var5.bind(var4)(var3);
                var3 = {};
                var3.guild = var9;
                var8 = _closure1_slot16;
                var8 = var8.ROLE_SUBSCRIPTIONS;
                var8 = var10 === var8;
                var3.selected = var8;
                var0 = var7.bind(var4)(var5, var3);
            case 1750:
                return var0;
            case 1752:
                var0 = var1.getChannelNoticeSection;
                var1 = var0.bind(var1)();
                var0 = var1.getRow;
                var2 = var0.bind(var1)(var2);
                var3 = null;
                var1 = var3 == var2;
                var0 = null;
                if (var1) {
                    _fun101995_ip = 2079;
                    continue _fun101995
                }
            case 1787:
                var1 = _closure1_slot18;
                var1 = var1.SPACER;
                if (!(var1 !== var2)) {
                    _fun101995_ip = 2049;
                    continue _fun101995
                }
            case 1804:
                var1 = _closure1_slot18;
                var1 = var1.GUILD_PROGRESS;
                if (!(var1 !== var2)) {
                    _fun101995_ip = 1977;
                    continue _fun101995
                }
            case 1821:
                var1 = _closure1_slot18;
                var1 = var1.MFA_WARNING;
                if (!(var1 !== var2)) {
                    _fun101995_ip = 1909;
                    continue _fun101995
                }
            case 1835:
                var1 = _closure1_slot18;
                var1 = var1.LIVE_CHANNEL_NOTICE;
                var0 = null;
                if (!(var1 === var2)) {
                    _fun101995_ip = 2079;
                    continue _fun101995
                }
            case 1854:
                var3 = _closure1_slot20;
                var2 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 13;
                var1 = var5[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var5 = _closure1_slot23;
                var5 = var5.liveChannelNotice;
                var1.style = var5;
                var1.guild = var9;
                var0 = var3.bind(var4)(var2, var1);
                _fun101995_ip = 2079;
                continue _fun101995;
            case 1909:
                var3 = _closure1_slot20;
                var2 = _closure1_slot3;
                var1 = {};
                var5 = _closure1_slot23;
                var5 = var5.nonChannelContainer;
                var1.style = var5;
                var8 = _closure1_slot20;
                var7 = _closure1_slot1;
                var10 = _closure1_slot2;
                var5 = 25;
                var5 = var10[var5];
                var7 = var7.bind(var4)(var5);
                var5 = {};
                var5 = var8.bind(var4)(var7, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
                _fun101995_ip = 2079;
                continue _fun101995;
            case 1977:
                var3 = _closure1_slot20;
                var2 = _closure1_slot3;
                var1 = {};
                var5 = _closure1_slot23;
                var5 = var5.nonChannelContainer;
                var1.style = var5;
                var8 = _closure1_slot20;
                var7 = _closure1_slot1;
                var10 = _closure1_slot2;
                var5 = 24;
                var5 = var10[var5];
                var7 = var7.bind(var4)(var5);
                var5 = {};
                var5.guild = var9;
                var5 = var8.bind(var4)(var7, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
                _fun101995_ip = 2079;
                continue _fun101995;
            case 2049:
                var3 = _closure1_slot20;
                var2 = _closure1_slot3;
                var1 = {};
                var5 = {};
                var6 = _closure1_slot14;
                var5.height = var6;
                var1.style = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 2079:
                return var0;
        }
    };
    var2.renderChannelListItem = var3;
    var3 = function arg0() {
        _fun101996: for (var _fun101996_ip = 0;;) switch (_fun101996_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.guildChannels;
                var13 = var0.section;
                var6 = var0.row;
                var4 = var0.fontScale;
                var1 = var0.voiceStates;
                var2 = var0.liveChannelNoticeHeight;
                var10 = var0.listViewportHeight;
                var7 = _closure1_slot0;
                var0 = _closure1_slot2;
                var8 = 16;
                var0 = var0[var8];
                var5 = undefined;
                var0 = var7.bind(var5)(var0);
                var0 = var0.SECTION_INDEX_CHANNEL_NOTICES;
                if (!(var0 !== var13)) {
                    _fun101996_ip = 1317;
                    continue _fun101996
                }
            case 82:
                var7 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var8];
                var0 = var7.bind(var5)(var0);
                var0 = var0.SECTION_INDEX_GUILD_ACTIONS;
                if (!(var0 !== var13)) {
                    _fun101996_ip = 990;
                    continue _fun101996
                }
            case 112:
                var0 = _closure1_slot12;
                var8 = var0.bind(var5)(var4);
                var0 = var3.getChannelFromSectionRow;
                var7 = var0.bind(var3)(var13, var6);
                var12 = null;
                var9 = var12 == var7;
                var14 = 0;
                var0 = 0;
                if (var9) {
                    _fun101996_ip = 988;
                    continue _fun101996
                }
            case 149:
                var7 = var7.channel;
                var9 = var7.record;
                var16 = _closure1_slot5;
                var15 = var16.has;
                var11 = var9.type;
                var15 = var15.bind(var16)(var11);
                var11 = null;
                if (!var15) {
                    _fun101996_ip = 189;
                    continue _fun101996
                }
            case 184:
                var11 = var9.type;
            case 189:
                var15 = var9.type;
                if (!(var11 !== var15)) {
                    _fun101996_ip = 974;
                    continue _fun101996
                }
            case 201:
                var16 = _closure1_slot0;
                var11 = _closure1_slot2;
                var18 = 36;
                var11 = var11[var18];
                var11 = var16.bind(var5)(var11);
                var11 = var11.ChannelTypes;
                var11 = var11.GUILD_VOICE;
                if (!(var11 !== var15)) {
                    _fun101996_ip = 604;
                    continue _fun101996
                }
            case 240:
                var16 = _closure1_slot0;
                var11 = _closure1_slot2;
                var11 = var11[var18];
                var11 = var16.bind(var5)(var11);
                var11 = var11.ChannelTypes;
                var11 = var11.GUILD_STAGE_VOICE;
                if (!(var11 !== var15)) {
                    _fun101996_ip = 604;
                    continue _fun101996
                }
            case 276:
                var16 = _closure1_slot0;
                var11 = _closure1_slot2;
                var11 = var11[var18];
                var11 = var16.bind(var5)(var11);
                var11 = var11.ChannelTypes;
                var11 = var11.DM;
                var0 = var8;
                if (!(var11 !== var15)) {
                    _fun101996_ip = 988;
                    continue _fun101996
                }
            case 315:
                var16 = _closure1_slot0;
                var11 = _closure1_slot2;
                var11 = var11[var18];
                var11 = var16.bind(var5)(var11);
                var11 = var11.ChannelTypes;
                var11 = var11.GROUP_DM;
                var0 = var8;
                if (!(var11 !== var15)) {
                    _fun101996_ip = 988;
                    continue _fun101996
                }
            case 354:
                var16 = _closure1_slot0;
                var11 = _closure1_slot2;
                var11 = var11[var18];
                var11 = var16.bind(var5)(var11);
                var11 = var11.ChannelTypes;
                var11 = var11.PUBLIC_THREAD;
                if (!(var11 !== var15)) {
                    _fun101996_ip = 530;
                    continue _fun101996
                }
            case 390:
                var16 = _closure1_slot0;
                var11 = _closure1_slot2;
                var11 = var11[var18];
                var11 = var16.bind(var5)(var11);
                var11 = var11.ChannelTypes;
                var11 = var11.PRIVATE_THREAD;
                if (!(var11 !== var15)) {
                    _fun101996_ip = 530;
                    continue _fun101996
                }
            case 423:
                var11 = var3.voiceChannelsSectionNumber;
                if (!(var13 === var11)) {
                    _fun101996_ip = 446;
                    continue _fun101996
                }
            case 433:
                var11 = var9.isCategory;
                var11 = var11.bind(var9)();
                if (var11) {
                    _fun101996_ip = 505;
                    continue _fun101996
                }
            case 446:
                var13 = var3.id;
                var11 = _closure1_slot17;
                var13 = var13 !== var11;
                if (!var13) {
                    _fun101996_ip = 475;
                    continue _fun101996
                }
            case 462:
                var15 = var3.id;
                var11 = _closure1_slot15;
                var13 = var15 !== var11;
            case 475:
                var11 = var8;
                if (var13) {
                    _fun101996_ip = 522;
                    continue _fun101996
                }
            case 481:
                var16 = _closure1_slot6;
                var15 = var16.has;
                var13 = var9.type;
                var13 = var15.bind(var16)(var13);
                var11 = var8;
                _fun101996_ip = 522;
                continue _fun101996;
            case 505:
                var13 = _closure1_slot11;
                var15 = var13.bind(var5)(var4);
                var13 = _closure1_slot10;
                var11 = var15 + var13;
            case 522:
                var0 = var11;
                _fun101996_ip = 988;
                continue _fun101996;
            case 530:
                var15 = _closure1_slot9;
                var13 = var15.countVoiceStatesForChannel;
                var11 = var9.id;
                var15 = var13.bind(var15)(var11);
                var11 = var8;
                if (!(var15 > var14)) {
                    _fun101996_ip = 596;
                    continue _fun101996
                }
            case 557:
                var16 = _closure1_slot0;
                var17 = _closure1_slot2;
                var13 = 41;
                var13 = var17[var13];
                var16 = var16.bind(var5)(var13);
                var13 = var16.getVoiceUserHeight;
                var13 = var13.bind(var16)(var4);
                var13 = var15 * var13;
                var11 = var8 + var13;
            case 596:
                var0 = var11;
                _fun101996_ip = 988;
                continue _fun101996;
            case 604:
                var11 = var7.subtitle;
                var12 = var12 != var11;
                var11 = 0;
                if (!var12) {
                    _fun101996_ip = 628;
                    continue _fun101996
                }
            case 619:
                var12 = _closure1_slot13;
                var11 = var12.bind(var5)(var4);
            case 628:
                var15 = _closure1_slot0;
                var12 = _closure1_slot2;
                var13 = 41;
                var13 = var12[var13];
                var16 = var15.bind(var5)(var13);
                var13 = var16.getVoiceUserHeight;
                var17 = var13.bind(var16)(var4);
                var13 = var9.type;
                var12 = var12[var18];
                var12 = var15.bind(var5)(var12);
                var12 = var12.ChannelTypes;
                var12 = var12.GUILD_STAGE_VOICE;
                if (!(var13 !== var12)) {
                    _fun101996_ip = 711;
                    continue _fun101996
                }
            case 689:
                var15 = _closure1_slot9;
                var13 = var15.countVoiceStatesForChannel;
                var12 = var9.id;
                var13 = var13.bind(var15)(var12);
                _fun101996_ip = 764;
                continue _fun101996;
            case 711:
                var19 = _closure1_slot4;
                var16 = var19.getParticipantCount;
                var15 = var9.id;
                var20 = _closure1_slot0;
                var21 = _closure1_slot2;
                var12 = 42;
                var12 = var21[var12];
                var12 = var20.bind(var5)(var12);
                var12 = var12.StageChannelParticipantNamedIndex;
                var12 = var12.SPEAKER;
                var13 = var16.bind(var19)(var15, var12);
            case 764:
                var16 = var9.type;
                var15 = _closure1_slot0;
                var12 = _closure1_slot2;
                var12 = var12[var18];
                var12 = var15.bind(var5)(var12);
                var12 = var12.ChannelTypes;
                var15 = var12.GUILD_STAGE_VOICE;
                var12 = 0;
                if (!(var16 === var15)) {
                    _fun101996_ip = 897;
                    continue _fun101996
                }
            case 804:
                var18 = _closure1_slot4;
                var16 = var18.getParticipantCount;
                var15 = var9.id;
                var19 = _closure1_slot0;
                var20 = _closure1_slot2;
                var9 = 42;
                var9 = var20[var9];
                var9 = var19.bind(var5)(var9);
                var9 = var9.StageChannelParticipantNamedIndex;
                var9 = var9.AUDIENCE;
                var9 = var16.bind(var18)(var15, var9);
                var9 = var9 > var14;
                var12 = 0;
                if (!var9) {
                    _fun101996_ip = 897;
                    continue _fun101996
                }
            case 866:
                var15 = _closure1_slot0;
                var16 = _closure1_slot2;
                var9 = 43;
                var9 = var16[var9];
                var15 = var15.bind(var5)(var9);
                var9 = var15.getAudienceItemHeight;
                var12 = var9.bind(var15)(var4);
            case 897:
                var9 = var8;
                if (!(var13 > var14)) {
                    _fun101996_ip = 969;
                    continue _fun101996
                }
            case 904:
                var18 = var8 + var11;
                var14 = _closure1_slot0;
                var15 = _closure1_slot2;
                var11 = 37;
                var16 = var15[var11];
                var16 = var14.bind(var5)(var16);
                var16 = var16.VOICE_USERS_MARGIN_TOP;
                var16 = var18 + var16;
                var13 = var17 * var13;
                var13 = var16 + var13;
                var11 = var15[var11];
                var11 = var14.bind(var5)(var11);
                var11 = var11.VOICE_USERS_MARGIN_BOTTOM;
                var11 = var13 + var11;
                var9 = var11 + var12;
            case 969:
                var0 = var9;
                _fun101996_ip = 988;
                continue _fun101996;
            case 974:
                var7 = var7.threadCount;
                var7 = var7 * var8;
                var0 = var8 + var7;
            case 988:
                return var0;
            case 990:
                var0 = var3.getGuildActionSection;
                var7 = var0.bind(var3)();
                var0 = var7.getRow;
                var9 = var0.bind(var7)(var6);
                var0 = null;
                var8 = var0 == var9;
                var0 = 0;
                if (var8) {
                    _fun101996_ip = 1315;
                    continue _fun101996
                }
            case 1025:
                var8 = _closure1_slot12;
                var11 = var8.bind(var5)(var4);
                var8 = _closure1_slot19;
                var8 = var8.GUILD_ROLE_SUBSCRIPTIONS;
                var0 = var11;
                if (!(var8 !== var9)) {
                    _fun101996_ip = 1315;
                    continue _fun101996
                }
            case 1054:
                var8 = _closure1_slot19;
                var8 = var8.GUILD_HOME;
                var0 = var11;
                if (!(var8 !== var9)) {
                    _fun101996_ip = 1315;
                    continue _fun101996
                }
            case 1074:
                var8 = _closure1_slot19;
                var8 = var8.CHANNELS_AND_ROLES;
                var0 = var11;
                if (!(var8 !== var9)) {
                    _fun101996_ip = 1315;
                    continue _fun101996
                }
            case 1094:
                var8 = _closure1_slot19;
                var8 = var8.GUILD_DIRECTORY;
                var0 = var11;
                if (!(var8 !== var9)) {
                    _fun101996_ip = 1315;
                    continue _fun101996
                }
            case 1114:
                var8 = _closure1_slot19;
                var8 = var8.GUILD_MOD_DASH_MEMBER_SAFETY;
                var0 = var11;
                if (!(var8 !== var9)) {
                    _fun101996_ip = 1315;
                    continue _fun101996
                }
            case 1134:
                var8 = _closure1_slot19;
                var8 = var8.GUILD_BOOSTS;
                var0 = var11;
                if (!(var8 !== var9)) {
                    _fun101996_ip = 1315;
                    continue _fun101996
                }
            case 1154:
                var8 = _closure1_slot19;
                var8 = var8.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR;
                if (!(var8 !== var9)) {
                    _fun101996_ip = 1282;
                    continue _fun101996
                }
            case 1168:
                var8 = _closure1_slot19;
                var8 = var8.GUILD_HUB_HEADER_OPTIONS;
                var0 = var10;
                if (!(var8 !== var9)) {
                    _fun101996_ip = 1315;
                    continue _fun101996
                }
            case 1188:
                var8 = _closure1_slot19;
                var8 = var8.GUILD_SCHEDULED_EVENTS;
                var0 = 0;
                if (!(var8 !== var9)) {
                    _fun101996_ip = 1315;
                    continue _fun101996
                }
            case 1204:
                var8 = _closure1_slot19;
                var8 = var8.GUILD_FAVORITES;
                var0 = 0;
                if (!(var8 !== var9)) {
                    _fun101996_ip = 1315;
                    continue _fun101996
                }
            case 1220:
                var8 = _closure1_slot19;
                var8 = var8.GUILD_CHANNEL_LIST_OPT_IN_NOTICE;
                var0 = 0;
                if (!(var8 !== var9)) {
                    _fun101996_ip = 1315;
                    continue _fun101996
                }
            case 1236:
                var8 = _closure1_slot19;
                var8 = var8.GUILD_SHOP;
                var0 = 0;
                if (!(var8 !== var9)) {
                    _fun101996_ip = 1315;
                    continue _fun101996
                }
            case 1252:
                var8 = _closure1_slot19;
                var8 = var8.BROWSE_CHANNELS;
                var0 = 0;
                if (!(var8 !== var9)) {
                    _fun101996_ip = 1315;
                    continue _fun101996
                }
            case 1268:
                var8 = _closure1_slot19;
                var8 = var8.GUILD_PREMIUM_PROGRESS_BAR;
                var0 = 0;
                _fun101996_ip = 1315;
                continue _fun101996;
            case 1282:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var7 = 19;
                var7 = var9[var7];
                var7 = var8.bind(var5)(var7);
                var8 = var7.DIVIDER_HEIGHT;
                var7 = 48;
                var0 = var7 + var8;
            case 1315:
                return var0;
            case 1317:
                var0 = var3.getChannelNoticeSection;
                var3 = var0.bind(var3)();
                var0 = var3.getRow;
                var6 = var0.bind(var3)(var6);
                var0 = null;
                var3 = var0 == var6;
                var0 = 0;
                if (var3) {
                    _fun101996_ip = 1485;
                    continue _fun101996
                }
            case 1352:
                var3 = _closure1_slot18;
                var3 = var3.SPACER;
                if (!(var3 !== var6)) {
                    _fun101996_ip = 1481;
                    continue _fun101996
                }
            case 1366:
                var3 = _closure1_slot18;
                var3 = var3.GUILD_PROGRESS;
                if (!(var3 !== var6)) {
                    _fun101996_ip = 1448;
                    continue _fun101996
                }
            case 1380:
                var3 = _closure1_slot18;
                var3 = var3.MFA_WARNING;
                if (!(var3 !== var6)) {
                    _fun101996_ip = 1415;
                    continue _fun101996
                }
            case 1394:
                var3 = _closure1_slot18;
                var3 = var3.LIVE_CHANNEL_NOTICE;
                var0 = 0;
                if (!(var3 === var6)) {
                    _fun101996_ip = 1485;
                    continue _fun101996
                }
            case 1410:
                var0 = var2;
                _fun101996_ip = 1485;
                continue _fun101996;
            case 1415:
                var3 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 25;
                var2 = var6[var2];
                var3 = var3.bind(var5)(var2);
                var2 = var3.getScaledGuildMFAWarningHeight;
                var0 = var2.bind(var3)(var4);
                _fun101996_ip = 1485;
                continue _fun101996;
            case 1448:
                var3 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 24;
                var2 = var6[var2];
                var3 = var3.bind(var5)(var2);
                var2 = var3.getScaledGuildProgressButtonHeight;
                var0 = var2.bind(var3)(var4);
                _fun101996_ip = 1485;
                continue _fun101996;
            case 1481:
                var0 = _closure1_slot14;
            case 1485:
                return var0;
        }
    };
    var2.getChannelListItemSize = var3;
    var1 = function arg0() {
        _fun101997: for (var _fun101997_ip = 0;;) switch (_fun101997_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.guildChannels;
                var7 = var0.section;
                var10 = var0.optInChannelsEnabled;
                var4 = var0.voiceStates;
                var6 = var0.selectedChannelId;
                var5 = var0.selectedVoiceChannelId;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 20;
                var0 = var3[var0];
                var3 = undefined;
                var2 = var2.bind(var3)(var0);
                var0 = var2.isVoiceChannelsSection;
                var0 = var0.bind(var2)(var7, var9);
                if (var0) {
                    _fun101997_ip = 112;
                    continue _fun101997
                }
            case 78:
                var2 = _closure1_slot0;
                var8 = _closure1_slot2;
                var0 = 16;
                var0 = var8[var0];
                var0 = var2.bind(var3)(var0);
                var0 = var0.SECTION_INDEX_FIRST_NAMED_CATEGORY;
                if (!(var7 < var0)) {
                    _fun101997_ip = 112;
                    continue _fun101997
                }
            case 108:
                var0 = null;
                return var0;
            case 112:
                var2 = _closure1_slot0;
                var0 = _closure1_slot2;
                var8 = 44;
                var0 = var0[var8];
                var2 = var2.bind(var3)(var0);
                var0 = var2.getSectionFooterConfig;
                var0 = var0.bind(var2)(var9, var10, var7);
                var2 = var0.canHaveVoiceSummary;
                var0 = null;
                if (var2) {
                    _fun101997_ip = 158;
                    continue _fun101997
                }
            case 156:
                return var0;
            case 158:
                var2 = var9.getNamedCategoryFromSection;
                var7 = var2.bind(var9)(var7);
                if (!(var0 != var7)) {
                    _fun101997_ip = 241;
                    continue _fun101997
                }
            case 173:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var8];
                var3 = var2.bind(var3)(var1);
                var2 = var3.getSectionFooterActiveVoiceChannels;
                var1 = {};
                var1.category = var7;
                var1.selectedChannelId = var6;
                var1.selectedVoiceChannelId = var5;
                var1.voiceStates = var4;
                var2 = var2.bind(var3)(var1);
                var4 = var2.length;
                var3 = 0;
                var1 = null;
                if (!(var3 !== var4)) {
                    _fun101997_ip = 239;
                    continue _fun101997
                }
            case 236:
                var1 = var2;
            case 239:
                return var1;
            case 241:
                return var0;
        }
    };
    var2.calculateVoiceSummary = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 4245, 1376, 1372, 1671, 3526, 8803, 660, 1379, 1612, 4578, 33, 13289, 671, 6456, 4569, 13291, 1234, 11672, 13283, 13309, 13307, 4088, 13311, 13313, 13315, 13317, 13318, 13319, 13320, 13321, 13324, 13326, 13293, 13406, 790, 13417, 13419, 13421, 13422, 13303, 5662, 13301, 13423, 2]);