// modules/search/native/components/tabs/pages/messages/MediaScreen.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var3 = 1;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.SearchListItemTypes;
    var _closure1_slot6 = var7;
    var7 = var3.MEDIA_NUM_COLUMNS;
    var _closure1_slot7 = var7;
    var7 = var3.MEDIA_ITEM_GAP_WIDTH;
    var _closure1_slot8 = var7;
    var3 = var3.SearchMediaTypes;
    var _closure1_slot9 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.EMPTY_MEDIA_RESULTS;
    var _closure1_slot10 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.MEDIA_MODAL_KEY;
    var _closure1_slot11 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot12 = var3;
    var3 = var6.memo;
    var1 = function arg0() {
        var0 = arg0;
        var13 = var0.searchContext;
        var _closure2_slot0 = var13;
        var12 = var0.tab;
        var _closure2_slot1 = var12;
        var11 = var0.isFocused;
        var8 = _closure1_slot0;
        var9 = _closure1_slot2;
        var1 = 7;
        var1 = var9[var1];
        var3 = undefined;
        var4 = var8.bind(var3)(var1);
        var1 = var4.useContentContainerStyles;
        var7 = var1.bind(var4)();
        var1 = _closure1_slot1;
        var4 = 8;
        var4 = var9[var4];
        var4 = var1.bind(var3)(var4);
        var10 = var4.bind(var3)();
        var _closure2_slot2 = var10;
        var4 = 9;
        var4 = var9[var4];
        var5 = var8.bind(var3)(var4);
        var4 = var5.useSearchMessages;
        var14 = var4.bind(var5)(var13, var12);
        var _closure2_slot3 = var14;
        var4 = 10;
        var4 = var9[var4];
        var15 = var8.bind(var3)(var4);
        var5 = var15.useSearchMessagesLoadingState;
        var4 = {};
        var4.searchContext = var13;
        var4.tab = var12;
        var4.placeholderHeight = var10;
        var6 = _closure1_slot7;
        var4.numColumns = var6;
        var15 = var5.bind(var15)(var4);
        var5 = var15.isFirstPageLoading;
        var4 = var15.isNextPageLoading;
        var17 = var15.placeholderCount;
        var _closure2_slot4 = var17;
        var16 = _closure1_slot3;
        var19 = var16.useMemo;
        var18 = new Array(2);
        var18[0] = var14;
        var18[1] = var13;
        var15 = function() { // Environment: var2
            _fun105791: for (var _fun105791_ip = 0;;) switch (_fun105791_ip) {
                case 0:
                    var2 = _closure2_slot3;
                    var0 = null;
                    if (!(var0 == var2)) {
                        _fun105791_ip = 22;
                        continue _fun105791
                    }
                case 13:
                    var0 = _closure1_slot10;
                    _fun105791_ip = 67;
                    continue _fun105791;
                case 22:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 11;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.getMedia;
                    var2 = _closure2_slot0;
                    var1 = _closure2_slot3;
                    var0 = var3.bind(var4)(var2, var1);
                case 67:
                    return var0;
            }
        };
        var18 = var19.bind(var16)(var15, var18);
        var _closure2_slot5 = var18;
        var20 = var16.useCallback;
        var19 = new Array(2);
        var19[0] = var13;
        var19[1] = var12;
        var15 = function() { // Environment: var2
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 11;
            var1 = var1[var0];
            var0 = undefined;
            var5 = var2.bind(var0)(var1);
            var4 = var5.fetchNextMessages;
            var3 = _closure2_slot0;
            var2 = _closure2_slot1;
            var1 = function() { // Environment: var1
                _fun105793: for (var _fun105793_ip = 0;;) switch (_fun105793_ip) {
                    case 0:
                        var4 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 12;
                        var2 = var2[var0];
                        var0 = undefined;
                        var5 = var4.bind(var0)(var2);
                        var4 = var5.isModalOpen;
                        var2 = _closure1_slot11;
                        var2 = var4.bind(var5)(var2);
                        if (!var2) {
                            _fun105793_ip = 227;
                            continue _fun105793
                        }
                    case 48:
                        var6 = _closure1_slot5;
                        var5 = var6.getState;
                        var8 = _closure2_slot0;
                        var2 = function(arg0) { // Environment: var1
                            var1 = arg0;
                            var0 = var1.getSearchResultsQuery;
                            var0 = var0.bind(var1)();
                            return var0;
                        };
                        var7 = var5.bind(var6)(var8, var2);
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var2 = 13;
                        var2 = var6[var2];
                        var6 = var5.bind(var0)(var2);
                        var5 = var6.getSearchTabFetchId;
                        var2 = _closure2_slot1;
                        var6 = var5.bind(var6)(var8, var2, var7);
                        var5 = _closure1_slot4;
                        var2 = var5.getMessages;
                        var7 = var2.bind(var5)(var6);
                        var2 = null;
                        if (!(var2 != var7)) {
                            _fun105793_ip = 227;
                            continue _fun105793
                        }
                    case 136:
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var5 = 11;
                        var5 = var3[var5];
                        var6 = var2.bind(var0)(var5);
                        var5 = var6.getMedia;
                        var4 = _closure2_slot0;
                        var6 = var5.bind(var6)(var4, var7);
                        var4 = new Array(0);
                        var _closure4_slot0 = var4;
                        var5 = var6.forEach;
                        var1 = function(arg0) { // Environment: var1
                            _fun105795: for (var _fun105795_ip = 0;;) switch (_fun105795_ip) {
                                case 0:
                                    var0 = arg0;
                                    var3 = var0.type;
                                    var1 = _closure1_slot9;
                                    var1 = var1.ATTACHMENT;
                                    var1 = var3 !== var1;
                                    if (!var1) {
                                        _fun105795_ip = 47;
                                        continue _fun105795
                                    }
                                case 28:
                                    var4 = var0.type;
                                    var3 = _closure1_slot9;
                                    var3 = var3.EMBED;
                                    var1 = var4 !== var3;
                                case 47:
                                    if (!var1) {
                                        _fun105795_ip = 69;
                                        continue _fun105795
                                    }
                                case 50:
                                    var3 = var0.type;
                                    var2 = _closure1_slot9;
                                    var2 = var2.COMPONENT;
                                    var1 = var3 !== var2;
                                case 69:
                                    if (var1) {
                                        _fun105795_ip = 95;
                                        continue _fun105795
                                    }
                                case 72:
                                    var2 = _closure4_slot0;
                                    var1 = var2.push;
                                    var0 = var0.sources;
                                    var0 = var1.bind(var2)(var0);
                                case 95:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var1 = var5.bind(var6)(var1);
                        var1 = 14;
                        var1 = var3[var1];
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.setMediaViewerSources;
                        var1 = {};
                        var1.sources = var4;
                        var1 = var2.bind(var3)(var1);
                    case 227:
                        return var0;
                }
            };
            var1 = var4.bind(var5)(var3, var2, var1);
            return var0;
        };
        var21 = var20.bind(var16)(var15, var19);
        var15 = 15;
        var15 = var9[var15];
        var20 = var8.bind(var3)(var15);
        var19 = var20.useOnPressMediaItem;
        var15 = {};
        var15.searchContext = var13;
        var15.allMediaResults = var18;
        var15.onEndReached = var21;
        var21 = 500;
        var15.onEndReachedThreshold = var21;
        var20 = var19.bind(var20)(var15);
        var _closure2_slot6 = var20;
        var19 = var16.useCallback;
        var15 = new Array(3);
        var15[0] = var20;
        var15[1] = var13;
        var15[2] = var14;
        var14 = function(arg0, arg1) { // Environment: var2
            _fun105796: for (var _fun105796_ip = 0;;) switch (_fun105796_ip) {
                case 0:
                    var0 = arg0;
                    var3 = var0.media;
                    var _closure3_slot0 = var3;
                    var2 = var0.originView;
                    var5 = _closure2_slot3;
                    var0 = null;
                    var5 = var0 == var5;
                    var0 = undefined;
                    var7 = undefined;
                    if (var5) {
                        _fun105796_ip = 62;
                        continue _fun105796
                    }
                case 41:
                    var6 = _closure2_slot3;
                    var5 = var6.find;
                    var4 = function(arg0) { // Environment: var4
                        var0 = arg0;
                        var1 = var0.id;
                        var0 = _closure3_slot0;
                        var0 = var0.messageId;
                        var0 = var1 === var0;
                        return var0;
                    };
                    var7 = var5.bind(var6)(var4);
                case 62:
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var5 = 16;
                    var5 = var8[var5];
                    var6 = var6.bind(var0)(var5);
                    var5 = var6.shouldAgeVerifyForSearchMedia;
                    var5 = var5.bind(var6)(var3, var7);
                    if (var5) {
                        _fun105796_ip = 179;
                        continue _fun105796
                    }
                case 100:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var5 = 19;
                    var5 = var7[var5];
                    var7 = var6.bind(var0)(var5);
                    var6 = var7.trackMessageItemPress;
                    var5 = {};
                    var8 = _closure2_slot0;
                    var5.searchContext = var8;
                    var8 = var3.channelId;
                    var5.channelId = var8;
                    var8 = var3.messageId;
                    var5.messageId = var8;
                    var8 = arg1;
                    var5.index = var8;
                    var5 = var6.bind(var7)(var5);
                    var1 = _closure2_slot6;
                    var1 = var1.bind(var0)(var3, var2);
                    _fun105796_ip = 245;
                    continue _fun105796;
                case 179:
                    var2 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var1 = 17;
                    var1 = var6[var1];
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.showAgeVerificationGetStartedModal;
                    var1 = {};
                    var5 = _closure1_slot0;
                    var4 = 18;
                    var4 = var6[var4];
                    var4 = var5.bind(var0)(var4);
                    var4 = var4.AgeVerificationModalEntryPoint;
                    var4 = var4.SEARCH_MEDIA_PREVIEW;
                    var1.entryPoint = var4;
                    var1 = var2.bind(var3)(var1);
                case 245:
                    return var0;
            }
        };
        var19 = var19.bind(var16)(var14, var15);
        var _closure2_slot7 = var19;
        var15 = var16.useMemo;
        var14 = new Array(4);
        var14[0] = var19;
        var14[1] = var18;
        var14[2] = var10;
        var14[3] = var17;
        var2 = function() { // Environment: var2
            _fun105798: for (var _fun105798_ip = 0;;) switch (_fun105798_ip) {
                case 0:
                    var0 = new Array(0);
                    var _closure3_slot0 = var0;
                    var3 = _closure2_slot5;
                    var2 = var3.forEach;
                    var1 = function(arg0, arg1) { // Environment: var1
                        var10 = arg1;
                        var _closure4_slot0 = var10;
                        var3 = _closure3_slot0;
                        var2 = var3.push;
                        var1 = {};
                        var4 = _closure1_slot6;
                        var4 = var4.MEDIA;
                        var1.type = var4;
                        var4 = {};
                        var5 = arg0;
                        var4.media = var5;
                        var5 = _closure2_slot2;
                        var4.size = var5;
                        var0 = function arg0() {
                            var3 = _closure2_slot7;
                            var2 = _closure4_slot0;
                            var1 = undefined;
                            var0 = arg0;
                            var0 = var3.bind(var1)(var0, var2);
                            return var0;
                        };
                        var4.onPress = var0;
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var0 = 11;
                        var5 = var5[var0];
                        var0 = undefined;
                        var7 = var6.bind(var0)(var5);
                        var6 = var7.getMediaGridItemStyles;
                        var5 = {};
                        var5.itemIndex = var10;
                        var9 = _closure2_slot5;
                        var9 = var9.length;
                        var5.numItems = var9;
                        var9 = _closure1_slot7;
                        var5.numColumns = var9;
                        var9 = _closure1_slot8;
                        var8 = 2;
                        var8 = var9 - var8;
                        var5.spacing = var8;
                        var5 = var6.bind(var7)(var5);
                        var4.containerStyle = var5;
                        var1.props = var4;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var1 = var2.bind(var3)(var1);
                    var1 = _closure2_slot4;
                    var9 = 0;
                    if (!(var1 > var9)) {
                        _fun105798_ip = 292;
                        continue _fun105798
                    }
                case 47:
                    var8 = var0.length;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 20;
                    var1 = var3[var1];
                    var6 = undefined;
                    var3 = var2.bind(var6)(var1);
                    var2 = var3.getAdjustedPlaceholderCount;
                    var1 = {};
                    var4 = _closure1_slot7;
                    var1.numColumns = var4;
                    var1.numResults = var8;
                    var4 = _closure2_slot4;
                    var1.placeholderCount = var4;
                    var5 = var2.bind(var3)(var1);
                    var11 = var9 < var5;
                    var4 = global;
                    var3 = 'media-placeholder-';
                    var2 = 11;
                    var1 = 2;
                    var9 = 0;
                    if (!var11) {
                        _fun105798_ip = 292;
                        continue _fun105798
                    }
                case 139:
                    var12 = var0.push;
                    var11 = {};
                    var13 = _closure1_slot6;
                    var13 = var13.MEDIA_PLACEHOLDER;
                    var11.type = var13;
                    var14 = var8 + var9;
                    var13 = var4.HermesInternal;
                    var13 = var13.concat;
                    var13 = var13.bind(var3)(var14);
                    var11.key = var13;
                    var13 = {};
                    var14 = _closure2_slot2;
                    var13.size = var14;
                    var15 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var14 = var14[var2];
                    var16 = var15.bind(var6)(var14);
                    var15 = var16.getMediaGridItemStyles;
                    var14 = {};
                    var17 = var8 + var9;
                    var14.itemIndex = var17;
                    var17 = _closure2_slot5;
                    var17 = var17.length;
                    var14.numItems = var17;
                    var17 = _closure1_slot7;
                    var14.numColumns = var17;
                    var17 = _closure1_slot8;
                    var17 = var17 - var1;
                    var14.spacing = var17;
                    var14 = var15.bind(var16)(var14);
                    var13.containerStyle = var14;
                    var11.props = var13;
                    var11 = var12.bind(var0)(var11);
                    var9 = var9 + 1;
                    if (var9 < var5) {
                        _fun105798_ip = 139;
                        continue _fun105798
                    }
                case 292:
                    return var0;
            }
        };
        var14 = var15.bind(var16)(var2, var14);
        var2 = _closure1_slot12;
        var0 = 19;
        var0 = var9[var0];
        var1 = var1.bind(var3)(var0);
        var0 = {};
        var0.data = var14;
        var0.searchContext = var13;
        var0.tab = var12;
        var0.isFocused = var11;
        var0.estimatedItemSize = var10;
        var7 = var7.mediaContentContainer;
        var0.contentContainerStyle = var7;
        var7 = 21;
        var7 = var9[var7];
        var7 = var8.bind(var3)(var7);
        var7 = var7.MediaVerticalSeparator;
        var0.ItemSeparatorComponent = var7;
        var0.numColumns = var6;
        var0.isFirstPageLoading = var5;
        var0.isNextPageLoading = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var1 = var3.bind(var6)(var1);
    var3 = 22;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/search/native/components/tabs/pages/messages/MediaScreen.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 4222, 8959, 8895, 11661, 660, 33, 13769, 13712, 13781, 13782, 11660, 3910, 8961, 8836, 13709, 10409, 5927, 4551, 13783, 13787, 13716, 2]);