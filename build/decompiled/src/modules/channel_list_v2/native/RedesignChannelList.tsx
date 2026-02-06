// modules/channel_list_v2/native/RedesignChannelList.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var5;
    var0 = function arg0, arg1, arg2() {
        _fun101831: for (var _fun101831_ip = 0;;) switch (_fun101831_ip) {
            case 0:
                var2 = arg0;
                var4 = arg2;
                var1 = var2.getSectionRowsFromChannel;
                var0 = arg1;
                var3 = var1.bind(var2)(var0);
                var2 = _closure1_slot3;
                var0 = undefined;
                var1 = 1;
                var1 = var2.bind(var0)(var3, var1);
                var3 = 0;
                var2 = var1[var3];
                var5 = null;
                if (!(var5 != var2)) {
                    _fun101831_ip = 112;
                    continue _fun101831
                }
            case 50:
                var1 = var2.row;
                if (!(var5 != var1)) {
                    _fun101831_ip = 112;
                    continue _fun101831
                }
            case 60:
                var1 = var2.row;
                if (!(!(var1 < var3))) {
                    _fun101831_ip = 112;
                    continue _fun101831
                }
            case 70:
                var1 = var2.section;
                if (!(!(var1 < var3))) {
                    _fun101831_ip = 112;
                    continue _fun101831
                }
            case 79:
                var1 = 'section';
                if (!(var1 !== var4)) {
                    _fun101831_ip = 105;
                    continue _fun101831
                }
            case 87:
                var3 = 'item';
                var1 = undefined;
                if (!(var3 === var4)) {
                    _fun101831_ip = 103;
                    continue _fun101831
                }
            case 97:
                var1 = var2.row;
            case 103:
                _fun101831_ip = 110;
                continue _fun101831;
            case 105:
                var1 = var2.section;
            case 110:
                return var1;
            case 112:
                return var0;
        }
    };
    var _closure1_slot18 = var0;
    var0 = function arg0() {
        _fun101832: for (var _fun101832_ip = 0;;) switch (_fun101832_ip) {
            case 0:
                var5 = arg0;
                var _closure2_slot0 = var5;
                var6 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 37;
                var2 = var3[var2];
                var4 = undefined;
                var7 = var6.bind(var4)(var2);
                var2 = var5.guild;
                var2 = var7.bind(var4)(var2);
                var _closure2_slot1 = var2;
                var2 = 38;
                var2 = var3[var2];
                var6 = var6.bind(var4)(var2);
                var2 = var5.guild;
                var2 = var6.bind(var4)(var2);
                var _closure2_slot2 = var2;
                var2 = _closure1_slot0;
                var6 = 39;
                var6 = var3[var6];
                var8 = var2.bind(var4)(var6);
                var7 = var8.useStateFromStoresObject;
                var9 = _closure1_slot7;
                var6 = new Array(1);
                var6[0] = var9;
                var0 = function() { // Environment: var0
                    var3 = _closure1_slot7;
                    var2 = var3.getGuild;
                    var0 = _closure2_slot0;
                    var0 = var0.guild;
                    var1 = var0.id;
                    var0 = {};
                    var5 = _closure2_slot1;
                    var0.guildActionRows = var5;
                    var4 = _closure2_slot2;
                    var0.channelNoticeRows = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var0 = var7.bind(var8)(var6, var0);
                var7 = var0.guildChannels;
                var6 = var0.guildChannelsVersion;
                var0 = 40;
                var0 = var3[var0];
                var2 = var2.bind(var4)(var0);
                var0 = var2.useShouldRenderChannelList;
                var2 = var0.bind(var2)();
                var0 = null;
                if (!var2) {
                    _fun101832_ip = 204;
                    continue _fun101832
                }
            case 160:
                var3 = _closure1_slot14;
                var2 = _closure1_slot17;
                var1 = {};
                var11 = var1;
                var10 = var5;
                var5 = copyDataProperties(var11, var10);
                var5 = 'guildChannels';
                var1[var5] = var7;
                var5 = 'guildChannelsVersion';
                var1[var5] = var6;
                var0 = var3.bind(var4)(var2, var1);
            case 204:
                return var0;
        }
    };
    var _closure1_slot19 = var0;
    var0 = function arg0() {
        _fun101834: for (var _fun101834_ip = 0;;) switch (_fun101834_ip) {
            case 0:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 41;
                var0 = var3[var0];
                var4 = undefined;
                var5 = var2.bind(var4)(var0);
                var0 = var5.useFavoritesServerChannelList;
                var6 = var0.bind(var5)();
                var0 = 40;
                var0 = var3[var0];
                var2 = var2.bind(var4)(var0);
                var0 = var2.useShouldRenderChannelList;
                var2 = var0.bind(var2)();
                var0 = null;
                if (!var2) {
                    _fun101834_ip = 108;
                    continue _fun101834
                }
            case 62:
                var3 = _closure1_slot14;
                var2 = _closure1_slot17;
                var1 = {};
                var7 = arg0;
                var8 = var1;
                var5 = copyDataProperties(var8, var7);
                var5 = 'guildChannels';
                var1[var5] = var6;
                var6 = 0;
                var5 = 'guildChannelsVersion';
                var1[var5] = var6;
                var0 = var3.bind(var4)(var2, var1);
            case 108:
                return var0;
        }
    };
    var _closure1_slot20 = var0;
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
    var3 = var12.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var10 = 1;
    var6 = var5[var10];
    var3 = arg3;
    var7 = var3.bind(var0)(var6);
    var _closure1_slot4 = var7;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.EMPTY_NUX_SERVER;
    var _closure1_slot10 = var6;
    var3 = var3.FAVORITES;
    var _closure1_slot11 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.FAVORITES_RAW_GUILD_ID;
    var _closure1_slot12 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.useYouBarTotalHeight;
    var _closure1_slot13 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot14 = var6;
    var3 = var3.jsxs;
    var _closure1_slot15 = var3;
    var3 = 14;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var6 = var8.createStyles;
    var3 = {};
    var9 = {
        'flex': 1,
        'position': 'relative',
        'overflow': 'hidden'
    };
    var11 = 15;
    var11 = var5[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.PANEL_BG;
    var9.backgroundColor = var11;
    var3.container = var9;
    var9 = {};
    var9.flex = var10;
    var3.listWrapper = var9;
    var3 = var6.bind(var8)(var3);
    var _closure1_slot16 = var3;
    var6 = var7.memo;
    var3 = function(arg0) { // Environment: var1
        _fun101835: for (var _fun101835_ip = 0;;) switch (_fun101835_ip) {
            case 0:
                var1 = arg0;
                var11 = var1.contentInset;
                var _closure2_slot0 = var11;
                var17 = var1.guild;
                var _closure2_slot1 = var17;
                var23 = var1.guildChannels;
                var _closure2_slot2 = var23;
                var22 = var1.selectedChannelId;
                var _closure2_slot3 = var22;
                var2 = var1.selectedVoiceChannelId;
                var _closure2_slot4 = var2;
                var10 = var1.style;
                var _closure2_slot5 = var10;
                var1 = _closure1_slot16;
                var3 = undefined;
                var12 = var1.bind(var3)();
                var _closure2_slot6 = var12;
                var15 = _closure1_slot1;
                var18 = _closure1_slot2;
                var1 = 16;
                var4 = var18[var1];
                var4 = var15.bind(var3)(var4);
                var4 = var4.bind(var3)(var17);
                var16 = var4.bannerHeight;
                var _closure2_slot7 = var16;
                var14 = var4.bannerWidth;
                var _closure2_slot8 = var14;
                var6 = var4.headerHeight;
                var _closure2_slot9 = var6;
                var7 = var4.fontScale;
                var _closure2_slot10 = var7;
                var36 = var4.listTop;
                var35 = var4.listBottom;
                var34 = var4.listPaddingBottom;
                var24 = var4.listViewportHeight;
                var _closure2_slot11 = var24;
                var4 = _closure1_slot4;
                var8 = var4.useRef;
                var5 = null;
                var38 = var8.bind(var4)(var5);
                var _closure2_slot12 = var38;
                var9 = var4.useEffect;
                var8 = new Array(2);
                var8[0] = var38;
                var8[1] = var23;
                var5 = function() { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 17;
                    var1 = var1[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.registerFastListChannelVisibilityMethod;
                    var2 = _closure2_slot12;
                    var1 = _closure2_slot2;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var5 = var9.bind(var4)(var5, var8);
                var8 = var23.getSections;
                var5 = false;
                var31 = var8.bind(var23)(var5);
                var _closure2_slot13 = var31;
                var19 = var17.id;
                var5 = _closure1_slot0;
                var8 = 18;
                var8 = var18[var8];
                var13 = var5.bind(var3)(var8);
                var9 = var13.useExternalScrollEventHandler;
                var8 = {};
                var8.id = var19;
                var8 = var9.bind(var13)(var8);
                var _closure2_slot14 = var8;
                var13 = var4.useCallback;
                var9 = new Array(1);
                var9[0] = var8;
                var8 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.nativeEvent;
                    var4 = _closure2_slot14;
                    var1 = var0.contentOffset;
                    var3 = var1.y;
                    var1 = var0.contentSize;
                    var2 = var1.height;
                    var0 = var0.layoutMeasurement;
                    var1 = var0.height;
                    var0 = undefined;
                    var1 = var4.bind(var0)(var3, var2, var1);
                    return var0;
                };
                var13 = var13.bind(var4)(var8, var9);
                var19 = var4.useCallback;
                var9 = new Array(3);
                var9[0] = var23;
                var9[1] = var17;
                var9[2] = var6;
                var8 = function(arg0) { // Environment: var0
                    var3 = _closure1_slot14;
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 19;
                    var0 = var2[var0];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = {};
                    var4 = arg0;
                    var0.fastList = var4;
                    var5 = _closure2_slot2;
                    var0.guildChannels = var5;
                    var5 = _closure2_slot1;
                    var0.guild = var5;
                    var4 = _closure2_slot9;
                    var0.headerHeight = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var32 = var19.bind(var4)(var8, var9);
                var9 = var4.useCallback;
                var8 = new Array(4);
                var8[0] = var17;
                var8[1] = var16;
                var8[2] = var14;
                var8[3] = var6;
                var6 = function(arg0) { // Environment: var0
                    var4 = _closure1_slot14;
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 20;
                    var0 = var2[var0];
                    var3 = undefined;
                    var2 = var1.bind(var3)(var0);
                    var1 = {};
                    var0 = _closure2_slot1;
                    var1.guild = var0;
                    var6 = arg0;
                    var6 = var6.scrollPosValue;
                    var1.scrollPosition = var6;
                    var6 = _closure2_slot7;
                    var1.bannerHeight = var6;
                    var6 = _closure2_slot8;
                    var1.bannerWidth = var6;
                    var5 = _closure2_slot9;
                    var1.headerHeight = var5;
                    var0 = var0.id;
                    var0 = var4.bind(var3)(var2, var1, var0);
                    return var0;
                };
                var37 = var9.bind(var4)(var6, var8);
                var9 = var4.useCallback;
                var8 = function() { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 21;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.logChannelListEndReached;
                    var1 = var1.bind(var2)();
                    return var0;
                };
                var6 = new Array(0);
                var33 = var9.bind(var4)(var8, var6);
                var6 = 22;
                var6 = var18[var6];
                var8 = var5.bind(var3)(var6);
                var6 = var8.useMobileQuestDockHeight;
                var6 = var6.bind(var8)();
                var _closure2_slot15 = var6;
                var9 = var4.useMemo;
                var8 = new Array(4);
                var8[0] = var11;
                var8[1] = var10;
                var8[2] = var12;
                var8[3] = var6;
                var6 = function() { // Environment: var0
                    _fun101841: for (var _fun101841_ip = 0;;) switch (_fun101841_ip) {
                        case 0:
                            var0 = _closure2_slot6;
                            var2 = var0.container;
                            var0 = new Array(3);
                            var0[0] = var2;
                            var2 = {};
                            var3 = _closure2_slot0;
                            var5 = null;
                            var3 = var5 == var3;
                            var7 = undefined;
                            if (var3) {
                                _fun101841_ip = 46;
                                continue _fun101841
                            }
                        case 37:
                            var3 = _closure2_slot0;
                            var7 = var3.top;
                        case 46:
                            var8 = var5 != var7;
                            var6 = 0;
                            if (!var8) {
                                _fun101841_ip = 58;
                                continue _fun101841
                            }
                        case 55:
                            var6 = var7;
                        case 58:
                            var2.marginTop = var6;
                            var6 = _closure2_slot0;
                            var7 = var5 == var6;
                            var6 = undefined;
                            if (var7) {
                                _fun101841_ip = 84;
                                continue _fun101841
                            }
                        case 75:
                            var7 = _closure2_slot0;
                            var6 = var7.bottom;
                        case 84:
                            var8 = var5 != var6;
                            var7 = 0;
                            if (!var8) {
                                _fun101841_ip = 96;
                                continue _fun101841
                            }
                        case 93:
                            var7 = var6;
                        case 96:
                            var6 = _closure2_slot15;
                            var6 = var7 + var6;
                            var2.paddingBottom = var6;
                            var6 = _closure2_slot0;
                            var6 = var5 == var6;
                            var7 = undefined;
                            if (var6) {
                                _fun101841_ip = 131;
                                continue _fun101841
                            }
                        case 122:
                            var6 = _closure2_slot0;
                            var7 = var6.left;
                        case 131:
                            var8 = var5 != var7;
                            var6 = 0;
                            if (!var8) {
                                _fun101841_ip = 143;
                                continue _fun101841
                            }
                        case 140:
                            var6 = var7;
                        case 143:
                            var2.marginLeft = var6;
                            var6 = _closure2_slot0;
                            var6 = var5 == var6;
                            var4 = undefined;
                            if (var6) {
                                _fun101841_ip = 170;
                                continue _fun101841
                            }
                        case 161:
                            var6 = _closure2_slot0;
                            var4 = var6.right;
                        case 170:
                            var5 = var5 != var4;
                            var3 = 0;
                            if (!var5) {
                                _fun101841_ip = 182;
                                continue _fun101841
                            }
                        case 179:
                            var3 = var4;
                        case 182:
                            var2.marginRight = var3;
                            var0[1] = var2;
                            var1 = _closure2_slot5;
                            var0[2] = var1;
                            return var0;
                    }
                };
                var10 = var9.bind(var4)(var6, var8);
                var6 = 23;
                var6 = var18[var6];
                var8 = var5.bind(var3)(var6);
                var6 = var8.useRecentlyActiveChannelsEnabled;
                var14 = var6.bind(var8)();
                var _closure2_slot16 = var14;
                var6 = 24;
                var6 = var18[var6];
                var8 = var15.bind(var3)(var6);
                var6 = var17.id;
                var8 = var8.bind(var3)(var6);
                var _closure2_slot17 = var8;
                var6 = 25;
                var6 = var18[var6];
                var11 = var5.bind(var3)(var6);
                var9 = var11.useOptInEnabledForGuild;
                var6 = var17.id;
                var9 = var9.bind(var11)(var6);
                var _closure2_slot18 = var9;
                var6 = 26;
                var6 = var18[var6];
                var16 = var5.bind(var3)(var6);
                var11 = var16.useGuildLiveChannelNoticeInfo;
                var6 = var17.id;
                var16 = var11.bind(var16)(var6);
                var6 = 27;
                var6 = var18[var6];
                var11 = var5.bind(var3)(var6);
                var6 = var11.getScaledLiveChannelNoticeHeight;
                var11 = var6.bind(var11)(var7, var16);
                var _closure2_slot19 = var11;
                var6 = function arg0() {
                    var5 = arg0;
                    var _closure3_slot0 = var5;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var0 = 11;
                    var3 = var3[var0];
                    var0 = undefined;
                    var4 = var4.bind(var0)(var3);
                    var3 = var4.useNavigation;
                    var6 = var3.bind(var4)();
                    var _closure3_slot1 = var6;
                    var4 = _closure1_slot4;
                    var3 = var4.useEffect;
                    var2 = new Array(2);
                    var2[0] = var6;
                    var2[1] = var5;
                    var1 = function() { // Environment: var1
                        var1 = -1;
                        var _closure4_slot0 = var1;
                        var4 = _closure3_slot1;
                        var3 = var4.addListener;
                        var2 = 'tabPress';
                        var1 = function(arg0) { // Environment: var0
                            _fun101844: for (var _fun101844_ip = 0;;) switch (_fun101844_ip) {
                                case 0:
                                    var0 = arg0;
                                    var _closure5_slot0 = var0;
                                    var4 = _closure1_slot0;
                                    var6 = _closure1_slot2;
                                    var0 = 12;
                                    var3 = var6[var0];
                                    var0 = undefined;
                                    var4 = var4.bind(var0)(var3);
                                    var3 = var4.coerceGuildsRoute;
                                    var5 = _closure1_slot1;
                                    var2 = 13;
                                    var2 = var6[var2];
                                    var2 = var5.bind(var0)(var2);
                                    var2 = var2.bind(var0)();
                                    var3 = var3.bind(var4)(var2);
                                    var2 = null;
                                    if (!(var2 != var3)) {
                                        _fun101844_ip = 157;
                                        continue _fun101844
                                    }
                                case 71:
                                    var4 = _closure4_slot0;
                                    var3 = -1;
                                    if (!(var3 !== var4)) {
                                        _fun101844_ip = 111;
                                        continue _fun101844
                                    }
                                case 88:
                                    var4 = global;
                                    var5 = var4.clearTimeout;
                                    var4 = _closure4_slot0;
                                    var4 = var5.bind(var0)(var4);
                                    _closure4_slot0 = var3;
                                    _fun101844_ip = 157;
                                    continue _fun101844;
                                case 111:
                                    var3 = global;
                                    var5 = var3.clearTimeout;
                                    var4 = _closure4_slot0;
                                    var4 = var5.bind(var0)(var4);
                                    var4 = var3.setTimeout;
                                    var3 = function() { // Environment: var1
                                        var2 = global;
                                        var5 = var2.clearTimeout;
                                        var3 = _closure4_slot0;
                                        var0 = undefined;
                                        var3 = var5.bind(var0)(var3);
                                        var3 = -1;
                                        _closure4_slot0 = var3;
                                        var4 = _closure3_slot1;
                                        var3 = var4.isFocused;
                                        var3 = var3.bind(var4)();
                                        var _closure6_slot0 = var3;
                                        var2 = var2.requestAnimationFrame;
                                        var1 = function() { // Environment: var1
                                            _fun101846: for (var _fun101846_ip = 0;;) switch (_fun101846_ip) {
                                                case 0:
                                                    var0 = _closure1_slot6;
                                                    var0 = var0.useReducedMotion;
                                                    var1 = _closure6_slot0;
                                                    if (!var1) {
                                                        _fun101846_ip = 39;
                                                        continue _fun101846
                                                    }
                                                case 23:
                                                    var2 = _closure5_slot0;
                                                    var2 = var2.defaultPrevented;
                                                    var1 = !var2;
                                                case 39:
                                                    if (!var1) {
                                                        _fun101846_ip = 60;
                                                        continue _fun101846
                                                    }
                                                case 42:
                                                    var2 = _closure3_slot0;
                                                    var3 = var2.current;
                                                    var2 = null;
                                                    var1 = var2 != var3;
                                                case 60:
                                                    if (!var1) {
                                                        _fun101846_ip = 89;
                                                        continue _fun101846
                                                    }
                                                case 63:
                                                    var1 = _closure3_slot0;
                                                    var2 = var1.current;
                                                    var1 = var2.scrollToTop;
                                                    var0 = !var0;
                                                    var0 = var1.bind(var2)(var0);
                                                case 89:
                                                    var0 = undefined;
                                                    return var0;
                                            }
                                        };
                                        var1 = var2.bind(var0)(var1);
                                        return var0;
                                    };
                                    var1 = 300;
                                    var1 = var4.bind(var0)(var3, var1);
                                    _closure4_slot0 = var1;
                                case 157:
                                    return var0;
                            }
                        };
                        var1 = var3.bind(var4)(var2, var1);
                        var _closure4_slot1 = var1;
                        var0 = function() { // Environment: var0
                            var1 = _closure4_slot1;
                            var0 = undefined;
                            var1 = var1.bind(var0)();
                            return var0;
                        };
                        return var0;
                    };
                    var1 = var3.bind(var4)(var1, var2);
                    return var0;
                };
                var6 = var6.bind(var3)(var38);
                var19 = var4.useCallback;
                var16 = new Array(2);
                var16[0] = var23;
                var16[1] = var31;
                var6 = function(arg0) { // Environment: var0
                    _fun101848: for (var _fun101848_ip = 0;;) switch (_fun101848_ip) {
                        case 0:
                            var2 = arg0;
                            var7 = 1;
                            var8 = var2 - var7;
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var0 = 28;
                            var0 = var3[var0];
                            var3 = undefined;
                            var0 = var4.bind(var3)(var0);
                            var0 = var0.SECTION_INDEX_FIRST_NAMED_CATEGORY;
                            var4 = var8;
                            if (!(var2 <= var0)) {
                                _fun101848_ip = 107;
                                continue _fun101848
                            }
                        case 48:
                            var6 = 0;
                            var4 = var8;
                            if (!(var8 >= var6)) {
                                _fun101848_ip = 107;
                                continue _fun101848
                            }
                        case 57:
                            var0 = _closure2_slot13;
                            var0 = var0[var8];
                            var2 = var8;
                            var4 = var2;
                            if (!(!(var0 > var6))) {
                                _fun101848_ip = 107;
                                continue _fun101848
                            }
                        case 78:
                            var8 = var2 - var7;
                            var4 = var8;
                            if (!(var4 >= var6)) {
                                _fun101848_ip = 107;
                                continue _fun101848
                            }
                        case 89:
                            var0 = _closure2_slot13;
                            var0 = var0[var8];
                            var2 = var8;
                            var4 = var2;
                            if (!(var0 > var6)) {
                                _fun101848_ip = 78;
                                continue _fun101848
                            }
                        case 107:
                            var0 = -1;
                            var0 = var0 !== var4;
                            if (!var0) {
                                _fun101848_ip = 162;
                                continue _fun101848
                            }
                        case 120:
                            var2 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var1 = 29;
                            var1 = var5[var1];
                            var3 = var2.bind(var3)(var1);
                            var2 = var3.getChannelListSectionHasFooterDivider;
                            var1 = _closure2_slot2;
                            var1 = var2.bind(var3)(var1, var4);
                            var0 = !var1;
                        case 162:
                            return var0;
                    }
                };
                var6 = var19.bind(var4)(var6, var16);
                var _closure2_slot20 = var6;
                var19 = var4.useCallback;
                var16 = new Array(5);
                var16[0] = var23;
                var16[1] = var7;
                var16[2] = var8;
                var16[3] = var11;
                var16[4] = var24;
                var11 = function(arg0, arg1) { // Environment: var0
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 29;
                    var1 = var4[var1];
                    var2 = undefined;
                    var5 = var3.bind(var2)(var1);
                    var3 = var5.getChannelListItemSize;
                    var1 = {};
                    var7 = _closure2_slot2;
                    var1.guildChannels = var7;
                    var7 = arg0;
                    var1.section = var7;
                    var7 = arg1;
                    var1.row = var7;
                    var7 = _closure2_slot10;
                    var1.fontScale = var7;
                    var7 = _closure2_slot17;
                    var1.voiceStates = var7;
                    var7 = _closure2_slot19;
                    var1.liveChannelNoticeHeight = var7;
                    var6 = _closure2_slot11;
                    var1.listViewportHeight = var6;
                    var1 = var3.bind(var5)(var1);
                    var3 = _closure1_slot1;
                    var0 = 30;
                    var0 = var4[var0];
                    var0 = var3.bind(var2)(var0);
                    var0 = var0.bind(var2)(var1);
                    return var0;
                };
                var27 = var19.bind(var4)(var11, var16);
                var19 = var4.useCallback;
                var16 = new Array(3);
                var16[0] = var23;
                var16[1] = var22;
                var16[2] = var17;
                var11 = function(arg0, arg1) { // Environment: var0
                    var3 = _closure1_slot14;
                    var2 = _closure1_slot5;
                    var1 = {};
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var0 = 29;
                    var4 = var4[var0];
                    var0 = undefined;
                    var6 = var5.bind(var0)(var4);
                    var5 = var6.renderChannelListItem;
                    var4 = {};
                    var8 = _closure2_slot2;
                    var4.guildChannels = var8;
                    var8 = arg0;
                    var4.section = var8;
                    var8 = arg1;
                    var4.row = var8;
                    var8 = _closure2_slot3;
                    var4.selectedChannelId = var8;
                    var7 = _closure2_slot1;
                    var4.guild = var7;
                    var4 = var5.bind(var6)(var4);
                    var1.children = var4;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var28 = var19.bind(var4)(var11, var16);
                var16 = var4.useCallback;
                var11 = new Array(3);
                var11[0] = var23;
                var11[1] = var7;
                var11[2] = var6;
                var7 = function(arg0) { // Environment: var0
                    var8 = arg0;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 29;
                    var1 = var4[var1];
                    var2 = undefined;
                    var7 = var3.bind(var2)(var1);
                    var6 = var7.getChannelListSectionHeaderSize;
                    var5 = _closure2_slot2;
                    var10 = _closure2_slot10;
                    var1 = _closure2_slot20;
                    var9 = var1.bind(var2)(var8);
                    var13 = var7;
                    var12 = var5;
                    var11 = var8;
                    var1 = var13[var6](var12, var11, var10, var9, var8);
                    var3 = _closure1_slot1;
                    var0 = 30;
                    var0 = var4[var0];
                    var0 = var3.bind(var2)(var0);
                    var0 = var0.bind(var2)(var1);
                    return var0;
                };
                var29 = var16.bind(var4)(var7, var11);
                var11 = var4.useCallback;
                var7 = new Array(3);
                var7[0] = var23;
                var7[1] = var14;
                var7[2] = var6;
                var6 = function(arg0) { // Environment: var0
                    var7 = arg0;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 29;
                    var1 = var3[var1];
                    var3 = undefined;
                    var6 = var2.bind(var3)(var1);
                    var5 = var6.renderChannelListSectionHeader;
                    var4 = _closure2_slot2;
                    var9 = _closure2_slot16;
                    var1 = _closure2_slot20;
                    var8 = var1.bind(var3)(var7);
                    var12 = var6;
                    var11 = var4;
                    var10 = var7;
                    var4 = var12[var5](var11, var10, var9, var8, var7);
                    var2 = _closure1_slot14;
                    var1 = _closure1_slot5;
                    var0 = {};
                    var0.children = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var30 = var11.bind(var4)(var6, var7);
                var11 = var4.useCallback;
                var7 = new Array(5);
                var7[0] = var23;
                var7[1] = var9;
                var7[2] = var8;
                var7[3] = var22;
                var7[4] = var2;
                var6 = function(arg0) { // Environment: var0
                    var7 = arg0;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 29;
                    var5 = var4[var1];
                    var2 = undefined;
                    var9 = var3.bind(var2)(var5);
                    var8 = var9.calculateVoiceSummary;
                    var5 = {};
                    var6 = _closure2_slot2;
                    var5.guildChannels = var6;
                    var5.section = var7;
                    var11 = _closure2_slot18;
                    var5.optInChannelsEnabled = var11;
                    var11 = _closure2_slot17;
                    var5.voiceStates = var11;
                    var11 = _closure2_slot3;
                    var5.selectedChannelId = var11;
                    var10 = _closure2_slot4;
                    var5.selectedVoiceChannelId = var10;
                    var5 = var8.bind(var9)(var5);
                    var1 = var4[var1];
                    var3 = var3.bind(var2)(var1);
                    var1 = var3.getChannelListSectionFooterSize;
                    var1 = var1.bind(var3)(var6, var7, var5);
                    var3 = _closure1_slot1;
                    var0 = 30;
                    var0 = var4[var0];
                    var0 = var3.bind(var2)(var0);
                    var0 = var0.bind(var2)(var1);
                    return var0;
                };
                var25 = var11.bind(var4)(var6, var7);
                var7 = var4.useCallback;
                var6 = new Array(5);
                var6[0] = var23;
                var6[1] = var9;
                var6[2] = var8;
                var6[3] = var22;
                var6[4] = var2;
                var2 = function(arg0) { // Environment: var0
                    var7 = arg0;
                    var4 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 29;
                    var1 = var8[var2];
                    var3 = undefined;
                    var10 = var4.bind(var3)(var1);
                    var9 = var10.calculateVoiceSummary;
                    var5 = {};
                    var6 = _closure2_slot2;
                    var5.guildChannels = var6;
                    var5.section = var7;
                    var11 = _closure2_slot18;
                    var5.optInChannelsEnabled = var11;
                    var11 = _closure2_slot17;
                    var5.voiceStates = var11;
                    var11 = _closure2_slot3;
                    var5.selectedChannelId = var11;
                    var11 = _closure2_slot4;
                    var5.selectedVoiceChannelId = var11;
                    var12 = var9.bind(var10)(var5);
                    var2 = var8[var2];
                    var4 = var4.bind(var3)(var2);
                    var2 = var4.renderChannelListSectionFooter;
                    var13 = _closure2_slot12;
                    var16 = var4;
                    var15 = var6;
                    var14 = var7;
                    var4 = var16[var2](var15, var14, var13, var12, var11);
                    var2 = _closure1_slot14;
                    var1 = _closure1_slot5;
                    var0 = {};
                    var0.children = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var26 = var7.bind(var4)(var2, var6);
                var7 = var4.useMemo;
                var6 = new Array(1);
                var6[0] = var31;
                var2 = function() { // Environment: var0
                    var3 = _closure2_slot13;
                    var2 = var3.reduce;
                    var0 = function(arg0, arg1) { // Environment: var0
                        var1 = arg0;
                        var0 = arg1;
                        var0 = var1 + var0;
                        return var0;
                    };
                    var1 = 0;
                    var0 = var2.bind(var3)(var0, var1);
                    var0 = var1 === var0;
                    return var0;
                };
                var14 = var7.bind(var4)(var2, var6);
                var6 = var4.useCallback;
                var2 = new Array(1);
                var2[0] = var23;
                var0 = function(arg0, arg1, arg2) { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 29;
                    var1 = var1[var0];
                    var0 = undefined;
                    var5 = var2.bind(var0)(var1);
                    var4 = var5.getFastListRecyclerKey;
                    var9 = _closure2_slot2;
                    var8 = arg0;
                    var7 = arg1;
                    var6 = arg2;
                    var10 = var5;
                    var0 = var10[var4](var9, var8, var7, var6, var5);
                    return var0;
                };
                var21 = var6.bind(var4)(var0, var2);
                var2 = var4.useContext;
                var0 = 31;
                var0 = var18[var0];
                var0 = var15.bind(var3)(var0);
                var39 = var2.bind(var4)(var0);
                var0 = _closure1_slot13;
                var40 = var0.bind(var3)(var1);
                var2 = _closure1_slot14;
                var4 = 32;
                var0 = var18[var4];
                var1 = var15.bind(var3)(var0);
                var0 = {};
                var4 = var18[var4];
                var4 = var5.bind(var3)(var4);
                var4 = var4.Profiles;
                var4 = var4.Channels;
                var0.profile = var4;
                var6 = _closure1_slot14;
                var4 = 33;
                var4 = var18[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.LayerScope;
                var4 = {};
                var9 = _closure1_slot14;
                var8 = _closure1_slot5;
                var7 = {};
                var7.style = var10;
                var11 = _closure1_slot15;
                var10 = {};
                var12 = var12.listWrapper;
                var10.style = var12;
                var16 = _closure1_slot14;
                var12 = 34;
                var12 = var18[var12];
                var15 = var15.bind(var3)(var12);
                var12 = {};
                var12.guild = var17;
                var15 = var16.bind(var3)(var15, var12);
                var12 = new Array(2);
                var12[0] = var15;
                var16 = _closure1_slot14;
                var15 = _closure1_slot1;
                var18 = _closure1_slot2;
                if (var14) {
                    _fun101835_ip = 1317;
                    continue _fun101835
                }
            case 1116:
                var14 = 36;
                var14 = var18[var14];
                var19 = var15.bind(var3)(var14);
                var14 = {};
                var14.insetEnd = var40;
                var14.waitFor = var39;
                var14.ref = var38;
                var14.chunkBase = var24;
                var24 = true;
                var14.stickyHeaderFooter = var24;
                var14.renderHeader = var37;
                var14.headerSize = var36;
                var36 = var35 + var34;
                var14.footerSize = var36;
                var34 = var35 + var34;
                var14.endReachedThreshold = var34;
                var14.onEndReached = var33;
                var14.renderAccessory = var32;
                var14.disableContentWrappers = var24;
                var14.sections = var31;
                var31 = 'disabled';
                var14.stickySectionsVariant = var31;
                var14.renderSection = var30;
                var14.sectionSize = var29;
                var14.renderItem = var28;
                var14.itemSize = var27;
                var14.renderSectionFooter = var26;
                var14.sectionFooterSize = var25;
                var14.optimizeListItemRender = var24;
                var14.getRecyclerKey = var21;
                var21 = _closure1_slot18;
                var20 = 'section';
                var20 = var21.bind(var3)(var23, var22, var20);
                var14.initialScrollSection = var20;
                var20 = 'item';
                var20 = var21.bind(var3)(var23, var22, var20);
                var14.initialScrollItem = var20;
                var20 = 'center';
                var14.initialScrollOrientation = var20;
                var14.onScroll = var13;
                var13 = var17.id;
                var13 = var16.bind(var3)(var19, var14, var13);
                _fun101835_ip = 1341;
                continue _fun101835;
            case 1317:
                var14 = 35;
                var14 = var18[var14];
                var15 = var15.bind(var3)(var14);
                var14 = {};
                var14.guild = var17;
                var13 = var16.bind(var3)(var15, var14);
            case 1341:
                var12[1] = var13;
                var10.children = var12;
                var10 = var11.bind(var3)(var8, var10);
                var7.children = var10;
                var7 = var9.bind(var3)(var8, var7);
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var3 = var6.bind(var7)(var3);
    var _closure1_slot17 = var3;
    var3 = 45;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/channel_list_v2/native/RedesignChannelList.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun101858: for (var _fun101858_ip = 0;;) switch (_fun101858_ip) {
            case 0:
                var4 = arg0;
                var5 = var4.selectedGuildId;
                var _closure2_slot0 = var5;
                var10 = var4.selectedChannelId;
                var0 = null;
                var3 = Object.create(var0);
                var1 = 0;
                var3.selectedGuildId = var1;
                var3.selectedChannelId = var1;
                var16 = {};
                var15 = var4;
                var14 = var3;
                var6 = copyDataProperties(var16, var15, var14);
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var3 = 39;
                var9 = var8[var3];
                var4 = undefined;
                var13 = var7.bind(var4)(var9);
                var12 = var13.useStateFromStores;
                var9 = _closure1_slot8;
                var11 = new Array(1);
                var11[0] = var9;
                var9 = function() { // Environment: var2
                    var2 = _closure1_slot8;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var11 = var12.bind(var13)(var11, var9);
                var3 = var8[var3];
                var8 = var7.bind(var4)(var3);
                var7 = var8.useStateFromStores;
                var9 = _closure1_slot9;
                var3 = new Array(1);
                var3[0] = var9;
                var2 = function() { // Environment: var2
                    var1 = _closure1_slot9;
                    var0 = var1.getVoiceChannelId;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var9 = var7.bind(var8)(var3, var2);
                if (!(var0 != var11)) {
                    _fun101858_ip = 371;
                    continue _fun101858
                }
            case 151:
                var0 = _closure1_slot10;
                if (!(var5 !== var0)) {
                    _fun101858_ip = 371;
                    continue _fun101858
                }
            case 162:
                var0 = _closure1_slot12;
                if (!(var5 !== var0)) {
                    _fun101858_ip = 316;
                    continue _fun101858
                }
            case 173:
                var0 = _closure1_slot11;
                if (!(var5 !== var0)) {
                    _fun101858_ip = 316;
                    continue _fun101858
                }
            case 184:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 43;
                var0 = var3[var0];
                var2 = var2.bind(var4)(var0);
                var0 = var2.shouldNSFWGateGuild;
                var0 = var0.bind(var2)(var5);
                var7 = _closure1_slot14;
                if (var0) {
                    _fun101858_ip = 273;
                    continue _fun101858
                }
            case 222:
                var2 = _closure1_slot19;
                var0 = {};
                var16 = var0;
                var15 = var6;
                var3 = copyDataProperties(var16, var15);
                var3 = 'guild';
                var0[var3] = var11;
                var3 = 'selectedChannelId';
                var0[var3] = var10;
                var3 = 'selectedVoiceChannelId';
                var0[var3] = var9;
                var0 = var7.bind(var4)(var2, var0);
                _fun101858_ip = 314;
                continue _fun101858;
            case 273:
                var3 = _closure1_slot1;
                var8 = _closure1_slot2;
                var2 = 44;
                var2 = var8[var2];
                var3 = var3.bind(var4)(var2);
                var2 = {};
                var8 = var6.style;
                var2.style = var8;
                var2.guildId = var5;
                var0 = var7.bind(var4)(var3, var2);
            case 314:
                _fun101858_ip = 369;
                continue _fun101858;
            case 316:
                var7 = _closure1_slot14;
                var3 = _closure1_slot20;
                var2 = {};
                var16 = var2;
                var15 = var6;
                var8 = copyDataProperties(var16, var15);
                var8 = 'guild';
                var2[var8] = var11;
                var8 = 'selectedChannelId';
                var2[var8] = var10;
                var8 = 'selectedVoiceChannelId';
                var2[var8] = var9;
                var0 = var7.bind(var4)(var3, var2);
            case 369:
                _fun101858_ip = 417;
                continue _fun101858;
            case 371:
                var3 = _closure1_slot14;
                var2 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 42;
                var1 = var7[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var6 = var6.style;
                var1.style = var6;
                var1.selectedGuildId = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 417:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1298, 4550, 1410, 1670, 660, 1612, 5227, 33, 1472, 3921, 7764, 1297, 671, 13294, 13218, 5262, 13299, 13295, 13301, 5230, 4591, 13302, 4580, 13303, 13307, 4570, 13308, 13153, 9875, 11858, 5208, 13442, 13455, 6480, 13458, 13459, 566, 13460, 13461, 13462, 9072, 13464, 2]);