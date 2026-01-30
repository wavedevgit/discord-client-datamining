// modules/search/native/hooks/useOnPressSearchItem.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var0 = function(arg0, arg1) { // Original name: addSearchHistoryItem, environment: var1
        _fun105961: for (var _fun105961_ip = 0;;) switch (_fun105961_ip) {
            case 0:
                var1 = arg0;
                var _closure2_slot0 = var1;
                var2 = arg1;
                var _closure2_slot1 = var2;
                var3 = var1.type;
                var2 = _closure1_slot15;
                var2 = var2.DMS;
                if (!(var2 !== var3)) {
                    _fun105961_ip = 52;
                    continue _fun105961
                }
            case 38:
                var2 = _closure1_slot15;
                var2 = var2.GUILD;
                if (!(var2 === var3)) {
                    _fun105961_ip = 92;
                    continue _fun105961
                }
            case 52:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.delayUntilNavigationComplete;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 10;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.addSearchHistoryItem;
                    var1 = _closure2_slot0;
                    var0 = _closure2_slot1;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
            case 92:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var0 = function(arg0) { // Original name: addCurrentSearchQueryToSearchHistory, environment: var1
        var3 = arg0;
        var2 = _closure1_slot6;
        var1 = var2.getState;
        var0 = function(arg0) { // Environment: var0
            var2 = arg0;
            var0 = {};
            var1 = var2.getTextInputValue;
            var1 = var1.bind(var2)();
            var0.text = var1;
            var1 = var2.getTags;
            var1 = var1.bind(var2)();
            var0.tags = var1;
            return var0;
        };
        var1 = var1.bind(var2)(var3, var0);
        var0 = var1.tags;
        var4 = var1.text;
        var2 = _closure1_slot17;
        var1 = {};
        var5 = _closure1_slot8;
        var5 = var5.TEXT;
        var1.type = var5;
        var1.text = var4;
        var1.tags = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var3, var1);
        return var0;
    };
    var _closure1_slot18 = var0;
    var0 = function(arg0, arg1, arg2, arg3) { // Original name: navigateToSearchPreview, environment: var1
        _fun105965: for (var _fun105965_ip = 0;;) switch (_fun105965_ip) {
            case 0:
                var3 = arg0;
                var2 = arg1;
                var1 = arg3;
                var _closure2_slot0 = var2;
                var _closure2_slot1 = var1;
                var5 = {};
                var0 = var2.id;
                var5.channelId = var0;
                var0 = var2.getGuildId;
                var2 = var0.bind(var2)();
                var0 = null;
                if (!(var0 == var2)) {
                    _fun105965_ip = 53;
                    continue _fun105965
                }
            case 46:
                var2 = _closure1_slot14;
            case 53:
                var5.guildId = var2;
                var2 = arg2;
                var5.searchContext = var2;
                if (!(var0 == var1)) {
                    _fun105965_ip = 96;
                    continue _fun105965
                }
            case 69:
                var1 = var3.navigate;
                var0 = _closure1_slot10;
                var0 = var0.SEARCH_CHAT_PREVIEW;
                var0 = var1.bind(var3)(var0, var5);
                _fun105965_ip = 167;
                continue _fun105965;
            case 96:
                var2 = var3.navigate;
                var1 = {};
                var0 = _closure1_slot10;
                var0 = var0.SEARCH_CHAT_PREVIEW;
                var1.screen = var0;
                var0 = {};
                var8 = var0;
                var7 = var5;
                var5 = copyDataProperties(var8, var7);
                var5 = function() { // Original name: onBeforeJumpToMessage, environment: var4
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 19;
                    var2 = var2[var0];
                    var0 = undefined;
                    var2 = var3.bind(var0)(var2);
                    var4 = var2.ComponentDispatch;
                    var3 = var4.dispatch;
                    var1 = _closure1_slot13;
                    var2 = var1.HIDE_CHANNEL_DETAILS;
                    var1 = {};
                    var6 = _closure2_slot0;
                    var6 = var6.id;
                    var1.channelId = var6;
                    var5 = _closure2_slot1;
                    var5 = var5.screenIndex;
                    var1.screenIndex = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var4 = 'onBeforeJumpToMessage';
                var0[var4] = var5;
                var1.params = var0;
                var0 = 'sidebar';
                var0 = var2.bind(var3)(var0, var1);
            case 167:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot19 = var0;
    var3 = function() { // Original name: handleVoiceOrStageChannelConnectPress, environment: var1
        var0 = undefined;
        var3 = _closure1_slot21;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot20 = var3;
    var0 = function() { // Original name: _handleVoiceOrStageChannelConnectPress, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun105970: for (var _fun105970_ip = 0;;) switch (_fun105970_ip) {
                    case 0:
                        StartGenerator();
                        var4 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun105970_ip = 147;
                            continue _fun105970
                        }
                    case 13:
                        var1 = var4.isGuildStageVoice;
                        var3 = var1.bind(var4)();
                        var6 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var2 = 24;
                        var5 = var1[var2];
                        var2 = undefined;
                        var5 = var6.bind(var2)(var5);
                        if (var3) {
                            _fun105970_ip = 102;
                            continue _fun105970
                        }
                    case 51:
                        var3 = 25;
                        var6 = var1[var3];
                        var3 = var1.paths;
                        var3 = var5.bind(var2)(var6, var3);
                        SaveGenerator(address = 73);
                    case 71:
                        return var3;
                    case 73:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 6);
                        if (var6) {
                            _fun105970_ip = 99;
                            continue _fun105970
                        }
                    case 79:
                        var7 = var3.openGuildVoiceModal;
                        var6 = 'Channel List';
                        var6 = var7.bind(var2)(var4, var6);
                        _fun105970_ip = 141;
                        continue _fun105970;
                    case 99:
                        return var3;
                    case 102:
                        var3 = 23;
                        var3 = var1[var3];
                        var1 = var1.paths;
                        var1 = var5.bind(var2)(var3, var1);
                        SaveGenerator(address = 124);
                    case 122:
                        return var1;
                    case 124:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun105970_ip = 144;
                            continue _fun105970
                        }
                    case 130:
                        var3 = var1.connectAndOpen;
                        var3 = var3.bind(var2)(var4);
                    case 141:
                        return var2;
                    case 144:
                        return var1;
                    case 147:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot21 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot21 = var0;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var7.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var8 = var6[var4];
    var4 = arg3;
    var4 = var4.bind(var0)(var8);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.SearchMediaTypes;
    var _closure1_slot7 = var7;
    var7 = var4.SearchHistoryItemTypes;
    var _closure1_slot8 = var7;
    var4 = var4.SearchQueryTagTypes;
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.SearchNavigatorScreens;
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.SearchFilterAddLocations;
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.Routes;
    var _closure1_slot12 = var7;
    var7 = var4.ComponentActions;
    var _closure1_slot13 = var7;
    var7 = var4.ME;
    var _closure1_slot14 = var7;
    var4 = var4.SearchTypes;
    var _closure1_slot15 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.StaticChannelRoute;
    var _closure1_slot16 = var4;
    var4 = 32;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/search/native/hooks/useOnPressSearchItem.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function(arg0) { // Original name: useOnPressSearchLink, environment: var1
        var4 = arg0;
        var _closure2_slot0 = var4;
        var3 = _closure1_slot4;
        var2 = var3.useCallback;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function(arg0, arg1) { // Environment: var0
            _fun105972: for (var _fun105972_ip = 0;;) switch (_fun105972_ip) {
                case 0:
                    var0 = arg1;
                    var _closure3_slot0 = var0;
                    var3 = _closure1_slot18;
                    var2 = _closure2_slot0;
                    var0 = undefined;
                    var2 = var3.bind(var0)(var2);
                    var5 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 11;
                    var3 = var3[var2];
                    var6 = var5.bind(var0)(var3);
                    var5 = var6.safeParseWithQuery;
                    var3 = arg0;
                    var6 = var5.bind(var6)(var3);
                    var5 = null;
                    if (!(var5 != var6)) {
                        _fun105972_ip = 90;
                        continue _fun105972
                    }
                case 70:
                    var3 = var6.protocol;
                    if (!(var5 != var3)) {
                        _fun105972_ip = 90;
                        continue _fun105972
                    }
                case 80:
                    var3 = var6.hostname;
                    if (!(var5 == var3)) {
                        _fun105972_ip = 170;
                        continue _fun105972
                    }
                case 90:
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var3 = 12;
                    var3 = var11[var3];
                    var7 = var10.bind(var0)(var3);
                    var5 = var7.presentFailedToast;
                    var3 = 13;
                    var8 = var11[var3];
                    var8 = var10.bind(var0)(var8);
                    var9 = var8.intl;
                    var8 = var9.string;
                    var3 = var11[var3];
                    var3 = var10.bind(var0)(var3);
                    var3 = var3.t;
                    var3 = var3.XiqzAp;
                    var3 = var8.bind(var9)(var3);
                    var3 = var5.bind(var7)(var3);
                    _fun105972_ip = 259;
                    continue _fun105972;
                case 170:
                    var5 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = var3[var2];
                    var5 = var5.bind(var0)(var2);
                    var2 = var5.format;
                    var5 = var2.bind(var5)(var6);
                    var _closure3_slot1 = var5;
                    var2 = _closure1_slot0;
                    var1 = 14;
                    var1 = var3[var1];
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.handleClick;
                    var1 = {};
                    var1.href = var5;
                    var5 = function() { // Original name: onConfirm, environment: var4
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 15;
                        var1 = var1[var0];
                        var0 = undefined;
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.openURL;
                        var0 = _closure3_slot1;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var1.onConfirm = var5;
                    var4 = function() { // Original name: trusted, environment: var4
                        var0 = _closure3_slot0;
                        return var0;
                    };
                    var1.trusted = var4;
                    var1 = var2.bind(var3)(var1);
                case 259:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.useOnPressSearchLink = var4;
    var4 = function(arg0) { // Original name: useOnPressMessageItem, environment: var1
        var1 = arg0;
        var5 = var1.searchContext;
        var _closure2_slot0 = var5;
        var7 = _closure1_slot0;
        var8 = _closure1_slot2;
        var2 = 16;
        var2 = var8[var2];
        var4 = undefined;
        var3 = var7.bind(var4)(var2);
        var2 = var3.useNavigation;
        var6 = var2.bind(var3)();
        var _closure2_slot1 = var6;
        var3 = _closure1_slot4;
        var2 = var3.useContext;
        var1 = 17;
        var1 = var8[var1];
        var1 = var7.bind(var4)(var1);
        var1 = var1.SwipeForMemberListContext;
        var4 = var2.bind(var3)(var1);
        var _closure2_slot2 = var4;
        var2 = var3.useCallback;
        var1 = new Array(3);
        var1[0] = var6;
        var1[1] = var5;
        var1[2] = var4;
        var0 = function(arg0, arg1) { // Environment: var0
            _fun105976: for (var _fun105976_ip = 0;;) switch (_fun105976_ip) {
                case 0:
                    var7 = arg0;
                    var3 = _closure1_slot5;
                    var2 = var3.getChannel;
                    var3 = var2.bind(var3)(var7);
                    var _closure3_slot0 = var3;
                    var2 = null;
                    if (!(var2 != var3)) {
                        _fun105976_ip = 119;
                        continue _fun105976
                    }
                case 32:
                    var4 = _closure1_slot18;
                    var2 = _closure2_slot0;
                    var3 = undefined;
                    var2 = var4.bind(var3)(var2);
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 18;
                    var2 = var4[var2];
                    var6 = var5.bind(var3)(var2);
                    var5 = var6.fetchMessages;
                    var2 = arg1;
                    var2 = var5.bind(var6)(var7, var2);
                    var2 = _closure1_slot0;
                    var1 = 9;
                    var1 = var4[var1];
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.performKeyboardAwareNavigation;
                    var0 = function() { // Environment: var0
                        var5 = _closure1_slot19;
                        var9 = _closure2_slot1;
                        var8 = _closure3_slot0;
                        var7 = _closure2_slot0;
                        var6 = _closure2_slot2;
                        var0 = undefined;
                        var10 = undefined;
                        var1 = var10[var5](var9, var8, var7, var6, var5);
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                case 119:
                    var0 = undefined;
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.useOnPressMessageItem = var4;
    var4 = function(arg0) { // Original name: useOnPressMediaItem, environment: var1
        var1 = arg0;
        var9 = var1.searchContext;
        var _closure2_slot0 = var9;
        var6 = var1.allMediaResults;
        var _closure2_slot1 = var6;
        var5 = var1.onEndReached;
        var _closure2_slot2 = var5;
        var4 = var1.onEndReachedThreshold;
        var _closure2_slot3 = var4;
        var10 = _closure1_slot0;
        var11 = _closure1_slot2;
        var2 = 16;
        var2 = var11[var2];
        var7 = undefined;
        var3 = var10.bind(var7)(var2);
        var2 = var3.useNavigation;
        var8 = var2.bind(var3)();
        var _closure2_slot4 = var8;
        var3 = _closure1_slot4;
        var2 = var3.useContext;
        var1 = 17;
        var1 = var11[var1];
        var1 = var10.bind(var7)(var1);
        var1 = var1.SwipeForMemberListContext;
        var7 = var2.bind(var3)(var1);
        var _closure2_slot5 = var7;
        var2 = var3.useCallback;
        var1 = new Array(6);
        var1[0] = var9;
        var1[1] = var8;
        var1[2] = var7;
        var1[3] = var6;
        var1[4] = var5;
        var1[5] = var4;
        var0 = function(arg0, arg1) { // Environment: var0
            _fun105979: for (var _fun105979_ip = 0;;) switch (_fun105979_ip) {
                case 0:
                    var3 = arg0;
                    var _closure3_slot0 = var3;
                    var5 = _closure1_slot18;
                    var4 = _closure2_slot0;
                    var0 = undefined;
                    var4 = var5.bind(var0)(var4);
                    var5 = var3.type;
                    var4 = _closure1_slot7;
                    var4 = var4.AUDIO;
                    if (!(var4 !== var5)) {
                        _fun105979_ip = 222;
                        continue _fun105979
                    }
                case 52:
                    var4 = _closure1_slot7;
                    var4 = var4.ATTACHMENT;
                    if (!(var4 !== var5)) {
                        _fun105979_ip = 97;
                        continue _fun105979
                    }
                case 66:
                    var4 = _closure1_slot7;
                    var4 = var4.EMBED;
                    if (!(var4 !== var5)) {
                        _fun105979_ip = 97;
                        continue _fun105979
                    }
                case 80:
                    var4 = _closure1_slot7;
                    var4 = var4.COMPONENT;
                    if (!(var4 === var5)) {
                        _fun105979_ip = 220;
                        continue _fun105979
                    }
                case 97:
                    var4 = 0;
                    var _closure3_slot2 = var4;
                    var _closure3_slot3 = var4;
                    var8 = new Array(0);
                    var _closure3_slot4 = var8;
                    var6 = _closure2_slot1;
                    var5 = var6.forEach;
                    var4 = function(arg0) { // Environment: var1
                        _fun105981: for (var _fun105981_ip = 0;;) switch (_fun105981_ip) {
                            case 0:
                                var2 = arg0;
                                var3 = var2.type;
                                var0 = _closure1_slot7;
                                var0 = var0.ATTACHMENT;
                                var0 = var3 !== var0;
                                if (!var0) {
                                    _fun105981_ip = 47;
                                    continue _fun105981
                                }
                            case 28:
                                var4 = var2.type;
                                var3 = _closure1_slot7;
                                var3 = var3.EMBED;
                                var0 = var4 !== var3;
                            case 47:
                                if (!var0) {
                                    _fun105981_ip = 69;
                                    continue _fun105981
                                }
                            case 50:
                                var3 = var2.type;
                                var1 = _closure1_slot7;
                                var1 = var1.COMPONENT;
                                var0 = var3 !== var1;
                            case 69:
                                if (var0) {
                                    _fun105981_ip = 158;
                                    continue _fun105981
                                }
                            case 72:
                                var4 = _closure3_slot4;
                                var3 = var4.push;
                                var0 = var2.sources;
                                var0 = var3.bind(var4)(var0);
                                var3 = var2.messageId;
                                var0 = _closure3_slot0;
                                var0 = var0.messageId;
                                var0 = var3 === var0;
                                if (!var0) {
                                    _fun105981_ip = 136;
                                    continue _fun105981
                                }
                            case 116:
                                var3 = var2.mediaIndex;
                                var2 = _closure3_slot0;
                                var2 = var2.mediaIndex;
                                var0 = var3 === var2;
                            case 136:
                                if (!var0) {
                                    _fun105981_ip = 147;
                                    continue _fun105981
                                }
                            case 139:
                                var0 = _closure3_slot2;
                                _closure3_slot3 = var0;
                            case 147:
                                var0 = _closure3_slot2;
                                var0 = var0 + 1;
                                _closure3_slot2 = var0;
                            case 158:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var4 = var5.bind(var6)(var4);
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 20;
                    var4 = var6[var4];
                    var6 = var5.bind(var0)(var4);
                    var5 = var6.openMediaModal;
                    var4 = {};
                    var4.initialSources = var8;
                    var8 = _closure3_slot3;
                    var4.initialIndex = var8;
                    var8 = _closure2_slot2;
                    var4.onEndReached = var8;
                    var7 = _closure2_slot3;
                    var4.onEndReachedThreshold = var7;
                    var7 = 'Search';
                    var4.analyticsSource = var7;
                    var7 = arg1;
                    var4.originViewOrOriginLayout = var7;
                    var4 = var5.bind(var6)(var4);
                case 220:
                    return var0;
                case 222:
                    var6 = _closure1_slot5;
                    var5 = var6.getChannel;
                    var4 = var3.channelId;
                    var5 = var5.bind(var6)(var4);
                    var _closure3_slot1 = var5;
                    var4 = null;
                    if (!(var4 != var5)) {
                        _fun105979_ip = 331;
                        continue _fun105979
                    }
                case 251:
                    var6 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var5 = 18;
                    var5 = var4[var5];
                    var7 = var6.bind(var0)(var5);
                    var6 = var7.fetchMessages;
                    var5 = var3.channelId;
                    var3 = var3.messageId;
                    var3 = var6.bind(var7)(var5, var3);
                    var3 = _closure1_slot0;
                    var2 = 9;
                    var2 = var4[var2];
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.performKeyboardAwareNavigation;
                    var1 = function() { // Environment: var1
                        var5 = _closure1_slot19;
                        var9 = _closure2_slot4;
                        var8 = _closure3_slot1;
                        var7 = _closure2_slot0;
                        var6 = _closure2_slot5;
                        var0 = undefined;
                        var10 = undefined;
                        var1 = var10[var5](var9, var8, var7, var6, var5);
                        return var0;
                    };
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                case 331:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.useOnPressMediaItem = var4;
    var4 = function(arg0) { // Original name: useOnPressGroupDMItem, environment: var1
        var1 = arg0;
        var4 = var1.searchContext;
        var _closure2_slot0 = var4;
        var5 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 16;
        var3 = var3[var2];
        var2 = undefined;
        var3 = var5.bind(var2)(var3);
        var2 = var3.useNavigation;
        var5 = var2.bind(var3)();
        var _closure2_slot1 = var5;
        var3 = _closure1_slot4;
        var2 = var3.useCallback;
        var1 = new Array(2);
        var1[0] = var5;
        var1[1] = var4;
        var0 = function(arg0) { // Environment: var0
            _fun105983: for (var _fun105983_ip = 0;;) switch (_fun105983_ip) {
                case 0:
                    var7 = arg0;
                    var _closure3_slot0 = var7;
                    var6 = _closure1_slot17;
                    var5 = _closure2_slot0;
                    var4 = {};
                    var0 = _closure1_slot8;
                    var0 = var0.GROUP_DM;
                    var4.type = var0;
                    var4.channelId = var7;
                    var0 = undefined;
                    var4 = var6.bind(var0)(var5, var4);
                    var4 = _closure2_slot1;
                    var3 = var4.getParent;
                    var4 = var3.bind(var4)();
                    var3 = null;
                    if (!(var3 != var4)) {
                        _fun105983_ip = 81;
                        continue _fun105983
                    }
                case 71:
                    var3 = var4.goBack;
                    var3 = var3.bind(var4)();
                case 81:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var3 = 21;
                    var3 = var4[var3];
                    var6 = var5.bind(var0)(var3);
                    var5 = var6.preload;
                    var3 = _closure1_slot14;
                    var3 = var5.bind(var6)(var3, var7);
                    var3 = _closure1_slot0;
                    var2 = 9;
                    var2 = var4[var2];
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.performKeyboardAwareNavigation;
                    var1 = function() { // Environment: var1
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 22;
                        var1 = var1[var0];
                        var0 = undefined;
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.transitionToChannel;
                        var1 = _closure3_slot0;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var1 = var2.bind(var3)(var1);
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.useOnPressGroupDMItem = var4;
    var4 = function(arg0) { // Original name: useOnPressDMItem, environment: var1
        var1 = arg0;
        var4 = var1.searchContext;
        var _closure2_slot0 = var4;
        var5 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 16;
        var3 = var3[var2];
        var2 = undefined;
        var3 = var5.bind(var2)(var3);
        var2 = var3.useNavigation;
        var5 = var2.bind(var3)();
        var _closure2_slot1 = var5;
        var3 = _closure1_slot4;
        var2 = var3.useCallback;
        var1 = new Array(2);
        var1[0] = var5;
        var1[1] = var4;
        var0 = function(arg0, arg1) { // Environment: var0
            _fun105986: for (var _fun105986_ip = 0;;) switch (_fun105986_ip) {
                case 0:
                    var0 = arg1;
                    var _closure3_slot0 = var0;
                    var7 = _closure1_slot17;
                    var6 = _closure2_slot0;
                    var5 = {};
                    var4 = _closure1_slot8;
                    var4 = var4.DM;
                    var5.type = var4;
                    var4 = arg0;
                    var5.userId = var4;
                    var4 = undefined;
                    var5 = var7.bind(var4)(var6, var5);
                    var5 = _closure2_slot1;
                    var3 = var5.getParent;
                    var5 = var3.bind(var5)();
                    var3 = null;
                    if (!(var3 != var5)) {
                        _fun105986_ip = 84;
                        continue _fun105986
                    }
                case 74:
                    var3 = var5.goBack;
                    var3 = var3.bind(var5)();
                case 84:
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 21;
                    var3 = var5[var3];
                    var7 = var6.bind(var4)(var3);
                    var6 = var7.preload;
                    var3 = _closure1_slot14;
                    var3 = var6.bind(var7)(var3, var0);
                    var3 = _closure1_slot0;
                    var2 = 9;
                    var2 = var5[var2];
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.performKeyboardAwareNavigation;
                    var1 = function() { // Environment: var1
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 22;
                        var1 = var1[var0];
                        var0 = undefined;
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.transitionToChannel;
                        var1 = _closure3_slot0;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var1 = var2.bind(var3)(var1);
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.useOnPressDMItem = var4;
    var4 = function(arg0) { // Original name: useOnPressGuildTextChannel, environment: var1
        var1 = arg0;
        var4 = var1.searchContext;
        var _closure2_slot0 = var4;
        var3 = _closure1_slot4;
        var2 = var3.useCallback;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function(arg0) { // Environment: var0
            _fun105989: for (var _fun105989_ip = 0;;) switch (_fun105989_ip) {
                case 0:
                    var4 = _closure1_slot5;
                    var1 = var4.getChannel;
                    var0 = arg0;
                    var4 = var1.bind(var4)(var0);
                    var _closure3_slot0 = var4;
                    var0 = null;
                    if (!(var0 != var4)) {
                        _fun105989_ip = 157;
                        continue _fun105989
                    }
                case 35:
                    var7 = _closure1_slot17;
                    var6 = _closure2_slot0;
                    var5 = {};
                    var1 = _closure1_slot8;
                    var1 = var1.GUILD_TEXT_CHANNEL;
                    var5.type = var1;
                    var1 = var4.id;
                    var5.channelId = var1;
                    var1 = undefined;
                    var5 = var7.bind(var1)(var6, var5);
                    var7 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var6 = 21;
                    var6 = var5[var6];
                    var8 = var7.bind(var1)(var6);
                    var7 = var8.preload;
                    var6 = var4.guild_id;
                    var4 = var4.id;
                    var4 = var7.bind(var8)(var6, var4);
                    var4 = _closure1_slot0;
                    var3 = 9;
                    var3 = var5[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.performKeyboardAwareNavigation;
                    var2 = function() { // Environment: var2
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 22;
                        var1 = var1[var0];
                        var0 = undefined;
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.transitionToChannel;
                        var0 = _closure3_slot0;
                        var0 = var0.id;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var2 = var3.bind(var4)(var2);
                    return var1;
                case 157:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.useOnPressGuildTextChannel = var4;
    var2.handleVoiceOrStageChannelConnectPress = var3;
    var3 = function(arg0) { // Original name: useOnPressGuildVoiceChannel, environment: var1
        var1 = arg0;
        var4 = var1.searchContext;
        var _closure2_slot0 = var4;
        var5 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 16;
        var2 = var3[var2];
        var3 = undefined;
        var5 = var5.bind(var3)(var2);
        var2 = var5.useNavigation;
        var6 = var2.bind(var5)();
        var _closure2_slot1 = var6;
        var2 = function() { // Original name: useVoiceChannelOnPressHandler, environment: var0
            var3 = _closure1_slot4;
            var2 = var3.useCallback;
            var1 = function() { // Environment: var0
                var3 = _closure1_slot3;
                var2 = undefined;
                var1 = function*(arg0) { // Environment: var0
                    var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                        _fun105995: for (var _fun105995_ip = 0;;) switch (_fun105995_ip) {
                            case 0:
                                StartGenerator();
                                var5 = arg0;
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun105995_ip = 314;
                                    continue _fun105995
                                }
                            case 15:
                                var _closure6_slot0 = var5;
                                var6 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var1 = 26;
                                var3 = var3[var1];
                                var1 = undefined;
                                var7 = var6.bind(var1)(var3);
                                var6 = var7.maybeOpenAgeGateForVoiceChannel;
                                var3 = var5.id;
                                var3 = var6.bind(var7)(var3);
                                if (var3) {
                                    _fun105995_ip = 311;
                                    continue _fun105995
                                }
                            case 66:
                                var6 = _closure1_slot0;
                                var7 = _closure1_slot2;
                                var3 = 27;
                                var3 = var7[var3];
                                var7 = var6.bind(var1)(var3);
                                var6 = var7.getChannelRoleSubscriptionStatus;
                                var3 = var5.id;
                                var3 = var6.bind(var7)(var3);
                                var3 = var3.needSubscriptionToAccess;
                                var6 = var5.getGuildId;
                                var6 = var6.bind(var5)();
                                var7 = null;
                                if (!(var7 != var6)) {
                                    _fun105995_ip = 158;
                                    continue _fun105995
                                }
                            case 124:
                                var8 = _closure1_slot0;
                                var9 = _closure1_slot2;
                                var7 = 28;
                                var7 = var9[var7];
                                var8 = var8.bind(var1)(var7);
                                var7 = var8.shouldShowMembershipVerificationGate;
                                var7 = var7.bind(var8)(var6);
                                if (var7) {
                                    _fun105995_ip = 238;
                                    continue _fun105995
                                }
                            case 158:
                                if (var3) {
                                    _fun105995_ip = 174;
                                    continue _fun105995
                                }
                            case 161:
                                var3 = _closure1_slot20;
                                var3 = var3.bind(var1)(var5);
                                var3 = undefined;
                                _fun105995_ip = 236;
                                continue _fun105995;
                            case 174:
                                var8 = _closure1_slot0;
                                var9 = _closure1_slot2;
                                var7 = 30;
                                var7 = var9[var7];
                                var8 = var8.bind(var1)(var7);
                                var7 = var8.transitionTo;
                                var11 = _closure1_slot12;
                                var10 = var11.CHANNEL;
                                var9 = var5.guild_id;
                                var5 = _closure1_slot16;
                                var5 = var5.ROLE_SUBSCRIPTIONS;
                                var5 = var10.bind(var11)(var9, var5);
                                var3 = var7.bind(var8)(var5);
                            case 236:
                                _fun105995_ip = 305;
                                continue _fun105995;
                            case 238:
                                var7 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var5 = 24;
                                var5 = var2[var5];
                                var7 = var7.bind(var1)(var5);
                                var5 = 29;
                                var5 = var2[var5];
                                var2 = var2.paths;
                                var2 = var7.bind(var1)(var5, var2);
                                SaveGenerator(address = 280);
                            case 278:
                                return var2;
                            case 280:
                                ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 5);
                                if (var5) {
                                    _fun105995_ip = 308;
                                    continue _fun105995
                                }
                            case 286:
                                var5 = var2.openMemberVerificationModal;
                                var4 = function() { // Environment: var4
                                    var2 = _closure1_slot20;
                                    var1 = _closure6_slot0;
                                    var0 = undefined;
                                    var0 = var2.bind(var0)(var1);
                                    return var0;
                                };
                                var3 = var5.bind(var1)(var6, var4);
                            case 305:
                                return var3;
                            case 308:
                                return var2;
                            case 311:
                                return var1;
                            case 314:
                                return var0;
                        }
                    };
                    return var0;
                };
                var1 = var3.bind(var2)(var1);
                var _closure4_slot0 = var1;
                var0 = function() { // Environment: var0
                    var0 = undefined;
                    var3 = _closure4_slot0;
                    var2 = var3.apply;
                    var0 = arguments;
                    var1 = var0;
                    var0 = this;
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                return var0;
            };
            var0 = undefined;
            var1 = var1.bind(var0)();
            var0 = new Array(0);
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var5 = var2.bind(var3)();
        var _closure2_slot2 = var5;
        var3 = _closure1_slot4;
        var2 = var3.useCallback;
        var1 = new Array(3);
        var1[0] = var6;
        var1[1] = var5;
        var1[2] = var4;
        var0 = function(arg0) { // Environment: var0
            _fun105998: for (var _fun105998_ip = 0;;) switch (_fun105998_ip) {
                case 0:
                    var4 = _closure1_slot5;
                    var1 = var4.getChannel;
                    var0 = arg0;
                    var1 = var1.bind(var4)(var0);
                    var _closure3_slot0 = var1;
                    var0 = null;
                    if (!(var0 != var1)) {
                        _fun105998_ip = 144;
                        continue _fun105998
                    }
                case 32:
                    var7 = _closure1_slot17;
                    var6 = _closure2_slot0;
                    var5 = {};
                    var8 = _closure1_slot8;
                    var8 = var8.GUILD_VOICE_CHANNEL;
                    var5.type = var8;
                    var1 = var1.id;
                    var5.channelId = var1;
                    var1 = undefined;
                    var5 = var7.bind(var1)(var6, var5);
                    var5 = _closure2_slot1;
                    var4 = var5.getParent;
                    var5 = var4.bind(var5)();
                    if (!(var0 != var5)) {
                        _fun105998_ip = 104;
                        continue _fun105998
                    }
                case 94:
                    var4 = var5.goBack;
                    var4 = var4.bind(var5)();
                case 104:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 9;
                    var3 = var5[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.performKeyboardAwareNavigation;
                    var2 = function() { // Environment: var2
                        var2 = _closure2_slot2;
                        var1 = _closure3_slot0;
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var2 = var3.bind(var4)(var2);
                    return var1;
                case 144:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.useOnPressGuildVoiceChannel = var3;
    var1 = function(arg0) { // Original name: useOnPressSearchHistoryText, environment: var1
        var1 = arg0;
        var4 = var1.searchContext;
        var _closure2_slot0 = var4;
        var3 = _closure1_slot4;
        var2 = var3.useCallback;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function(arg0, arg1) { // Environment: var0
            _fun106001: for (var _fun106001_ip = 0;;) switch (_fun106001_ip) {
                case 0:
                    var0 = arg0;
                    var3 = arg1;
                    var _closure3_slot0 = var0;
                    var _closure3_slot1 = var3;
                    var6 = _closure1_slot17;
                    var5 = _closure2_slot0;
                    var4 = {};
                    var7 = _closure1_slot8;
                    var7 = var7.TEXT;
                    var4.type = var7;
                    var4.text = var0;
                    var4.tags = var3;
                    var0 = undefined;
                    var4 = var6.bind(var0)(var5, var4);
                    var7 = _closure1_slot6;
                    var6 = var7.setState;
                    var4 = function(arg0) { // Environment: var1
                        _fun106002: for (var _fun106002_ip = 0;;) switch (_fun106002_ip) {
                            case 0:
                                var2 = arg0;
                                var3 = _closure3_slot1;
                                var1 = null;
                                if (!(var1 != var3)) {
                                    _fun106002_ip = 31;
                                    continue _fun106002
                                }
                            case 16:
                                var3 = var2.setTags;
                                var1 = _closure3_slot1;
                                var1 = var3.bind(var2)(var1);
                            case 31:
                                var1 = var2.setTextInputValue;
                                var0 = _closure3_slot0;
                                var0 = var1.bind(var2)(var0);
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var4 = var6.bind(var7)(var5, var4);
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var2 = 9;
                    var2 = var6[var2];
                    var4 = var4.bind(var0)(var2);
                    var2 = var4.fetchInitialMessages;
                    var2 = var2.bind(var4)(var5);
                    var2 = null;
                    if (!(var2 != var3)) {
                        _fun106001_ip = 140;
                        continue _fun106001
                    }
                case 123:
                    var2 = var3.forEach;
                    var1 = function(arg0) { // Environment: var1
                        _fun106003: for (var _fun106003_ip = 0;;) switch (_fun106003_ip) {
                            case 0:
                                var4 = arg0;
                                var1 = var4.type;
                                var0 = _closure1_slot9;
                                var0 = var0.COMPLETE;
                                if (!(var1 === var0)) {
                                    _fun106003_ip = 97;
                                    continue _fun106003
                                }
                            case 25:
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var0 = 31;
                                var1 = var1[var0];
                                var0 = undefined;
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.trackSearchFilterAdd;
                                var0 = {};
                                var5 = _closure2_slot0;
                                var0.searchContext = var5;
                                var4 = var4.searchTokenType;
                                var0.searchTokenType = var4;
                                var3 = _closure1_slot11;
                                var3 = var3.SEARCH_HISTORY;
                                var0.location = var3;
                                var0 = var1.bind(var2)(var0);
                            case 97:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                case 140:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.useOnPressSearchHistoryText = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 31, 1372, 8925, 8861, 13751, 8860, 660, 1379, 11693, 13749, 1457, 3106, 1234, 5851, 3103, 1469, 13726, 13752, 1229, 8801, 3905, 3903, 5872, 1307, 7839, 4514, 4753, 4786, 7406, 1220, 8924, 2]);