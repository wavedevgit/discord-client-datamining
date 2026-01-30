// modules/forums/native/ForumChannel.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun91931: for (var _fun91931_ip = 0;;) switch (_fun91931_ip) {
        case 0:
            var4 = require;
            var12 = metroImportDefault;
            var2 = exports;
            var5 = dependencyMap;
            var _closure1_slot0 = var4;
            var _closure1_slot1 = var12;
            var _closure1_slot2 = var5;
            var0 = function() { // Original name: ArchivedSection, environment: var1
                var0 = _closure1_slot21;
                var3 = undefined;
                var7 = var0.bind(var3)();
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var0 = 16;
                var0 = var11[var0];
                var1 = var10.bind(var3)(var0);
                var0 = var1.useClientThemesOverride;
                var6 = var0.bind(var1)();
                var2 = _closure1_slot17;
                var1 = _closure1_slot4;
                var0 = {};
                var8 = var7.section;
                var5 = new Array(2);
                var5[0] = var8;
                var5[1] = var6;
                var0.style = var5;
                var6 = _closure1_slot17;
                var4 = 17;
                var4 = var11[var4];
                var4 = var10.bind(var3)(var4);
                var5 = var4.Text;
                var4 = {
                    'style': null,
                    'variant': 'text-xs/bold',
                    'color': 'text-muted'
                };
                var7 = var7.divider;
                var4.style = var7;
                var7 = 18;
                var8 = var11[var7];
                var8 = var10.bind(var3)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var7 = var11[var7];
                var7 = var10.bind(var3)(var7);
                var7 = var7.t;
                var7 = var7["3+LO1w"];
                var7 = var8.bind(var9)(var7);
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var _closure1_slot25 = var0;
            var0 = function(arg0) { // Original name: SearchSection, environment: var1
                _fun91933: for (var _fun91933_ip = 0;;) switch (_fun91933_ip) {
                    case 0:
                        var0 = arg0;
                        var13 = var0.numPosts;
                        var12 = var0.searchQuery;
                        var0 = _closure1_slot21;
                        var3 = undefined;
                        var7 = var0.bind(var3)();
                        var2 = _closure1_slot17;
                        var1 = _closure1_slot4;
                        var0 = {};
                        var4 = var7.section;
                        var0.style = var4;
                        var6 = _closure1_slot17;
                        var5 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var4 = 17;
                        var4 = var9[var4];
                        var4 = var5.bind(var3)(var4);
                        var5 = var4.Text;
                        var4 = {
                            'style': null,
                            'variant': 'text-xs/bold',
                            'color': 'text-muted'
                        };
                        var7 = var7.divider;
                        var4.style = var7;
                        var7 = 0;
                        if (!(var7 !== var13)) {
                            _fun91933_ip = 180;
                            continue _fun91933
                        }
                    case 108:
                        var9 = _closure1_slot0;
                        var14 = _closure1_slot2;
                        var7 = 18;
                        var10 = var14[var7];
                        var10 = var9.bind(var3)(var10);
                        var11 = var10.intl;
                        var10 = var11.formatToPlainString;
                        var7 = var14[var7];
                        var7 = var9.bind(var3)(var7);
                        var7 = var7.t;
                        var9 = var7["tBz/8b"];
                        var7 = {};
                        var7.numPosts = var13;
                        var7.query = var12;
                        var7 = var10.bind(var11)(var9, var7);
                        _fun91933_ip = 237;
                        continue _fun91933;
                    case 180:
                        var11 = _closure1_slot0;
                        var12 = _closure1_slot2;
                        var8 = 18;
                        var9 = var12[var8];
                        var9 = var11.bind(var3)(var9);
                        var10 = var9.intl;
                        var9 = var10.string;
                        var8 = var12[var8];
                        var8 = var11.bind(var3)(var8);
                        var8 = var8.t;
                        var8 = var8.DbgHxi;
                        var7 = var9.bind(var10)(var8);
                    case 237:
                        var4.children = var7;
                        var4 = var6.bind(var3)(var5, var4);
                        var0.children = var4;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                }
            };
            var _closure1_slot26 = var0;
            var0 = function(arg0) { // Original name: ArchivedMissingReadHistoryPermission, environment: var1
                var0 = arg0;
                var11 = var0.channelName;
                var0 = _closure1_slot21;
                var3 = undefined;
                var7 = var0.bind(var3)();
                var2 = _closure1_slot17;
                var1 = _closure1_slot4;
                var0 = {};
                var5 = var7.missingPermissionContainer;
                var0.style = var5;
                var6 = _closure1_slot17;
                var8 = _closure1_slot0;
                var12 = _closure1_slot2;
                var4 = 17;
                var4 = var12[var4];
                var4 = var8.bind(var3)(var4);
                var5 = var4.Text;
                var4 = {
                    'style': null,
                    'variant': 'text-xs/normal',
                    'color': 'text-muted'
                };
                var7 = var7.missingPermissionText;
                var4.style = var7;
                var7 = 18;
                var9 = var12[var7];
                var9 = var8.bind(var3)(var9);
                var10 = var9.intl;
                var9 = var10.format;
                var7 = var12[var7];
                var7 = var8.bind(var3)(var7);
                var7 = var7.t;
                var8 = var7.TycmzM;
                var7 = {};
                var7.channelName = var11;
                var7 = var9.bind(var10)(var8, var7);
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var _closure1_slot27 = var0;
            var0 = function(arg0) { // Original name: SearchMissingReadHistoryPermission, environment: var1
                var0 = arg0;
                var11 = var0.channelName;
                var0 = _closure1_slot21;
                var3 = undefined;
                var7 = var0.bind(var3)();
                var2 = _closure1_slot17;
                var1 = _closure1_slot4;
                var0 = {};
                var5 = var7.section;
                var0.style = var5;
                var6 = _closure1_slot17;
                var8 = _closure1_slot0;
                var12 = _closure1_slot2;
                var4 = 17;
                var4 = var12[var4];
                var4 = var8.bind(var3)(var4);
                var5 = var4.Text;
                var4 = {
                    'style': null,
                    'variant': 'text-xs/normal',
                    'color': 'text-muted'
                };
                var7 = var7.missingPermissionText;
                var4.style = var7;
                var7 = 18;
                var9 = var12[var7];
                var9 = var8.bind(var3)(var9);
                var10 = var9.intl;
                var9 = var10.format;
                var7 = var12[var7];
                var7 = var8.bind(var3)(var7);
                var7 = var7.t;
                var8 = var7.OWZJdS;
                var7 = {};
                var7.channelName = var11;
                var7 = var9.bind(var10)(var8, var7);
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var _closure1_slot28 = var0;
            var0 = function(arg0) { // Original name: SortAndViewOptions, environment: var1
                _fun91936: for (var _fun91936_ip = 0;;) switch (_fun91936_ip) {
                    case 0:
                        var1 = arg0;
                        var1 = var1.channel;
                        var2 = _closure1_slot21;
                        var3 = undefined;
                        var14 = var2.bind(var3)();
                        var6 = var1.id;
                        var _closure2_slot0 = var6;
                        var5 = _closure1_slot3;
                        var4 = var5.useCallback;
                        var2 = new Array(1);
                        var2[0] = var6;
                        var0 = function() { // Environment: var0
                            var7 = _closure2_slot0;
                            var0 = global;
                            var0 = var0.HermesInternal;
                            var1 = var0.concat;
                            var0 = 'ForumDisplaySettingsActionSheet-';
                            var5 = var1.bind(var0)(var7);
                            var _closure3_slot0 = var5;
                            var4 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 23;
                            var3 = var1[var0];
                            var0 = undefined;
                            var4 = var4.bind(var0)(var3);
                            var3 = var4.openLazy;
                            var8 = _closure1_slot0;
                            var2 = 25;
                            var2 = var1[var2];
                            var8 = var8.bind(var0)(var2);
                            var2 = 24;
                            var2 = var1[var2];
                            var1 = var1.paths;
                            var2 = var8.bind(var0)(var2, var1);
                            var1 = {};
                            var1.channelId = var7;
                            var6 = function() { // Original name: onClose, environment: var6
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var0 = 23;
                                var1 = var1[var0];
                                var0 = undefined;
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.hideActionSheet;
                                var1 = _closure3_slot0;
                                var1 = var2.bind(var3)(var1);
                                return var0;
                            };
                            var1.onClose = var6;
                            var1 = var3.bind(var4)(var2, var5, var1);
                            return var0;
                        };
                        var4 = var4.bind(var5)(var0, var2);
                        var0 = var1.isMediaChannel;
                        var13 = var0.bind(var1)();
                        var2 = _closure1_slot17;
                        var1 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var0 = 26;
                        var0 = var5[var0];
                        var0 = var1.bind(var3)(var0);
                        var1 = var0.PressableOpacity;
                        var0 = {};
                        var5 = 'button';
                        var0.accessibilityRole = var5;
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var18 = 18;
                        var7 = var5[var18];
                        var7 = var6.bind(var3)(var7);
                        var9 = var7.intl;
                        var7 = var9.string;
                        var5 = var5[var18];
                        var5 = var6.bind(var3)(var5);
                        var6 = var5.t;
                        if (var13) {
                            _fun91936_ip = 174;
                            continue _fun91936
                        }
                    case 159:
                        var5 = var6.Iqetyr;
                        var5 = var7.bind(var9)(var5);
                        _fun91936_ip = 187;
                        continue _fun91936;
                    case 174:
                        var6 = var6["kQN/bi"];
                        var5 = var7.bind(var9)(var6);
                    case 187:
                        var0.accessibilityLabel = var5;
                        var5 = _closure1_slot16;
                        var0.androidRippleConfig = var5;
                        var5 = 0.8;
                        var0.activeOpacity = var5;
                        var5 = var14.optionsContainer;
                        var0.style = var5;
                        var0.onPress = var4;
                        var6 = _closure1_slot18;
                        var5 = _closure1_slot4;
                        var4 = {};
                        var7 = var14.optionsPill;
                        var4.style = var7;
                        var12 = _closure1_slot17;
                        var10 = _closure1_slot0;
                        var15 = _closure1_slot2;
                        var7 = 27;
                        var7 = var15[var7];
                        var7 = var10.bind(var3)(var7);
                        var9 = var7.ArrowsUpDownIcon;
                        var7 = {};
                        var11 = 'xs';
                        var7.size = var11;
                        var16 = var14.sortOptionsIcon;
                        var7.style = var16;
                        var9 = var12.bind(var3)(var9, var7);
                        var7 = new Array(3);
                        var7[0] = var9;
                        var12 = _closure1_slot17;
                        var9 = 17;
                        var9 = var15[var9];
                        var9 = var10.bind(var3)(var9);
                        var10 = var9.Text;
                        var9 = {
                            'variant': 'text-sm/medium',
                            'color': 'interactive-text-default'
                        };
                        var14 = var14.sortOptionsText;
                        var9.style = var14;
                        var17 = _closure1_slot0;
                        var14 = _closure1_slot2;
                        var15 = var14[var18];
                        var15 = var17.bind(var3)(var15);
                        var16 = var15.intl;
                        var15 = var16.string;
                        var14 = var14[var18];
                        var14 = var17.bind(var3)(var14);
                        var14 = var14.t;
                        if (var13) {
                            _fun91936_ip = 415;
                            continue _fun91936
                        }
                    case 402:
                        var13 = var14.xyYt8A;
                        var13 = var15.bind(var16)(var13);
                        _fun91936_ip = 428;
                        continue _fun91936;
                    case 415:
                        var14 = var14.JxU0wr;
                        var13 = var15.bind(var16)(var14);
                    case 428:
                        var9.children = var13;
                        var9 = var12.bind(var3)(var10, var9);
                        var7[1] = var9;
                        var10 = _closure1_slot17;
                        var9 = _closure1_slot0;
                        var12 = _closure1_slot2;
                        var8 = 28;
                        var8 = var12[var8];
                        var8 = var9.bind(var3)(var8);
                        var9 = var8.ChevronSmallDownIcon;
                        var8 = {};
                        var8.size = var11;
                        var8 = var10.bind(var3)(var9, var8);
                        var7[2] = var8;
                        var4.children = var7;
                        var4 = var6.bind(var3)(var5, var4);
                        var0.children = var4;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                }
            };
            var _closure1_slot29 = var0;
            var0 = function(arg0) { // Original name: TagFilter, environment: var1
                _fun91939: for (var _fun91939_ip = 0;;) switch (_fun91939_ip) {
                    case 0:
                        var0 = arg0;
                        var0 = var0.channel;
                        var _closure2_slot0 = var0;
                        var1 = _closure1_slot21;
                        var3 = undefined;
                        var15 = var1.bind(var3)();
                        var1 = _closure1_slot11;
                        var0 = var0.id;
                        var0 = var1.bind(var3)(var0);
                        var17 = var0.tagFilter;
                        var2 = _closure1_slot17;
                        var9 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var0 = 26;
                        var0 = var5[var0];
                        var0 = var9.bind(var3)(var0);
                        var1 = var0.PressableOpacity;
                        var0 = {
                            'accessibilityRole': 'button',
                            'accessibilityLabel': null,
                            'activeOpacity': 0.8
                        };
                        var14 = 18;
                        var6 = var5[var14];
                        var6 = var9.bind(var3)(var6);
                        var7 = var6.intl;
                        var6 = var7.string;
                        var5 = var5[var14];
                        var5 = var9.bind(var3)(var5);
                        var5 = var5.t;
                        var5 = var5.TdqRTh;
                        var5 = var6.bind(var7)(var5);
                        var0.accessibilityLabel = var5;
                        var5 = var15.optionsContainer;
                        var0.style = var5;
                        var4 = function() { // Original name: onPress, environment: var4
                            var4 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 23;
                            var3 = var1[var0];
                            var0 = undefined;
                            var5 = var4.bind(var0)(var3);
                            var4 = var5.openLazy;
                            var3 = _closure1_slot0;
                            var2 = 25;
                            var2 = var1[var2];
                            var3 = var3.bind(var0)(var2);
                            var2 = 29;
                            var2 = var1[var2];
                            var1 = var1.paths;
                            var3 = var3.bind(var0)(var2, var1);
                            var2 = {};
                            var1 = _closure2_slot0;
                            var2.channel = var1;
                            var1 = 'ForumTagFilterActionSheet';
                            var1 = var4.bind(var5)(var3, var1, var2);
                            return var0;
                        };
                        var0.onPress = var4;
                        var6 = _closure1_slot18;
                        var5 = _closure1_slot4;
                        var4 = {};
                        var7 = var15.optionsPill;
                        var4.style = var7;
                        var9 = var17.size;
                        var7 = 0;
                        var9 = var9 > var7;
                        if (!var9) {
                            _fun91939_ip = 297;
                            continue _fun91939
                        }
                    case 199:
                        var11 = _closure1_slot17;
                        var10 = _closure1_slot4;
                        var7 = {};
                        var12 = var15.countContainer;
                        var7.style = var12;
                        var16 = _closure1_slot17;
                        var13 = _closure1_slot0;
                        var18 = _closure1_slot2;
                        var12 = 17;
                        var12 = var18[var12];
                        var12 = var13.bind(var3)(var12);
                        var13 = var12.Text;
                        var12 = {
                            'variant': 'text-xs/bold',
                            'color': 'always-white'
                        };
                        var18 = var15.countText;
                        var12.style = var18;
                        var17 = var17.size;
                        var12.children = var17;
                        var12 = var16.bind(var3)(var13, var12);
                        var7.children = var12;
                        var9 = var11.bind(var3)(var10, var7);
                    case 297:
                        var7 = new Array(3);
                        var7[0] = var9;
                        var13 = _closure1_slot17;
                        var9 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var10 = 17;
                        var10 = var11[var10];
                        var10 = var9.bind(var3)(var10);
                        var12 = var10.Text;
                        var10 = {
                            'variant': 'text-sm/medium',
                            'color': 'interactive-text-default'
                        };
                        var15 = var15.sortOptionsText;
                        var10.style = var15;
                        var15 = var11[var14];
                        var15 = var9.bind(var3)(var15);
                        var16 = var15.intl;
                        var15 = var16.string;
                        var14 = var11[var14];
                        var14 = var9.bind(var3)(var14);
                        var14 = var14.t;
                        var14 = var14["112vVE"];
                        var14 = var15.bind(var16)(var14);
                        var10.children = var14;
                        var10 = var13.bind(var3)(var12, var10);
                        var7[1] = var10;
                        var10 = _closure1_slot17;
                        var8 = 28;
                        var8 = var11[var8];
                        var8 = var9.bind(var3)(var8);
                        var9 = var8.ChevronSmallDownIcon;
                        var8 = {};
                        var11 = 'xs';
                        var8.size = var11;
                        var8 = var10.bind(var3)(var9, var8);
                        var7[2] = var8;
                        var4.children = var7;
                        var4 = var6.bind(var3)(var5, var4);
                        var0.children = var4;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                }
            };
            var _closure1_slot30 = var0;
            var0 = function(arg0) { // Original name: onForumViewableItemsChanged, environment: var1
                var0 = arg0;
                var2 = var0.changed;
                var1 = var2.forEach;
                var0 = function(arg0) { // Environment: var0
                    _fun91942: for (var _fun91942_ip = 0;;) switch (_fun91942_ip) {
                        case 0:
                            var0 = arg0;
                            var4 = var0.item;
                            var3 = _closure1_slot20;
                            var2 = var3.has;
                            var2 = var2.bind(var3)(var4);
                            if (var2) {
                                _fun91942_ip = 159;
                                continue _fun91942
                            }
                        case 31:
                            var3 = _closure1_slot8;
                            var2 = var3.getChannel;
                            var6 = var2.bind(var3)(var4);
                            var2 = null;
                            var7 = var2 == var6;
                            var5 = undefined;
                            var3 = undefined;
                            if (var7) {
                                _fun91942_ip = 64;
                                continue _fun91942
                            }
                        case 58:
                            var3 = var6.parent_id;
                        case 64:
                            if (!(var2 != var3)) {
                                _fun91942_ip = 159;
                                continue _fun91942
                            }
                        case 68:
                            var0 = var0.isViewable;
                            var2 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var1 = 30;
                            var1 = var6[var1];
                            var2 = var2.bind(var5)(var1);
                            if (var0) {
                                _fun91942_ip = 129;
                                continue _fun91942
                            }
                        case 97:
                            var1 = var2.markForumPostItemAsUnseen;
                            var0 = global;
                            var5 = var0.Date;
                            var0 = var5.now;
                            var0 = var0.bind(var5)();
                            var0 = var1.bind(var2)(var3, var4, var0);
                            _fun91942_ip = 159;
                            continue _fun91942;
                        case 129:
                            var1 = var2.markForumPostItemAsSeen;
                            var0 = global;
                            var5 = var0.Date;
                            var0 = var5.now;
                            var0 = var0.bind(var5)();
                            var0 = var1.bind(var2)(var3, var4, var0);
                        case 159:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
            };
            var _closure1_slot31 = var0;
            var3 = global;
            var8 = var3.Object;
            var7 = var8.defineProperty;
            var6 = {};
            var0 = true;
            var6.value = var0;
            var0 = '__esModule';
            var0 = var7.bind(var8)(var2, var0, var6);
            var11 = 0;
            var7 = var5[var11];
            var6 = arg3;
            var0 = undefined;
            var7 = var6.bind(var0)(var7);
            var _closure1_slot3 = var7;
            var10 = 1;
            var6 = var5[var10];
            var6 = var4.bind(var0)(var6);
            var8 = var6.View;
            var _closure1_slot4 = var8;
            var6 = var6.FlatList;
            var _closure1_slot5 = var6;
            var6 = 2;
            var6 = var5[var6];
            var6 = var12.bind(var0)(var6);
            var _closure1_slot6 = var6;
            var6 = 3;
            var6 = var5[var6];
            var6 = var12.bind(var0)(var6);
            var _closure1_slot7 = var6;
            var14 = 4;
            var6 = var5[var14];
            var6 = var12.bind(var0)(var6);
            var _closure1_slot8 = var6;
            var6 = 5;
            var6 = var5[var6];
            var6 = var12.bind(var0)(var6);
            var _closure1_slot9 = var6;
            var6 = 6;
            var6 = var5[var6];
            var6 = var12.bind(var0)(var6);
            var _closure1_slot10 = var6;
            var6 = 7;
            var6 = var5[var6];
            var6 = var4.bind(var0)(var6);
            var8 = var6.useForumChannelStore;
            var _closure1_slot11 = var8;
            var6 = var6.useForumChannelStoreApi;
            var _closure1_slot12 = var6;
            var6 = 8;
            var6 = var5[var6];
            var6 = var4.bind(var0)(var6);
            var8 = var6.AnalyticsObjects;
            var _closure1_slot13 = var8;
            var8 = var6.AnalyticsPages;
            var _closure1_slot14 = var8;
            var6 = var6.AnalyticsSections;
            var _closure1_slot15 = var6;
            var6 = 9;
            var6 = var5[var6];
            var6 = var4.bind(var0)(var6);
            var6 = var6.ANDROID_FOREGROUND_RIPPLE;
            var _closure1_slot16 = var6;
            var6 = 10;
            var6 = var5[var6];
            var6 = var4.bind(var0)(var6);
            var15 = var6.Fonts;
            var6 = 11;
            var6 = var5[var6];
            var6 = var4.bind(var0)(var6);
            var8 = var6.jsx;
            var _closure1_slot17 = var8;
            var8 = var6.jsxs;
            var _closure1_slot18 = var8;
            var6 = var6.Fragment;
            var _closure1_slot19 = var6;
            var8 = var3.Set;
            var3 = new Array(5);
            var6 = 'archived_section';
            var3[0] = var6;
            var6 = 'search_section';
            var3[1] = var6;
            var6 = 'missing_permission_search';
            var3[2] = var6;
            var6 = 'missing_permission_archived_threads';
            var3[3] = var6;
            var6 = 'loading_section';
            var3[4] = var6;
            var6 = var8.prototype;
            var6 = Object.create(var6, {
                constructor: {
                    value: var8
                }
            });
            var24 = var6;
            var23 = var3;
            var3 = new var24[var8](var23, var22);
            var3 = var3 instanceof Object ? var3 : var6;
            var _closure1_slot20 = var3;
            var13 = 12;
            var3 = var5[var13];
            var8 = var4.bind(var0)(var3);
            var6 = var8.createStyles;
            var3 = {};
            var9 = {};
            var9.flex = var10;
            var10 = 13;
            var16 = var5[var10];
            var16 = var12.bind(var0)(var16);
            var16 = var16.colors;
            var16 = var16.BACKGROUND_BASE_LOWER;
            var9.backgroundColor = var16;
            var3.background = var9;
            var9 = {
                'display': 'flex',
                'flexDirection': 'row',
                'justifyContent': 'space-between',
                'paddingHorizontal': 12,
                'paddingTop': 8,
                'paddingBottom': 12
            };
            var3.headerRow = var9;
            var9 = {
                'backgroundColor': null,
                'width': '100%',
                'height': 1
            };
            var16 = var5[var10];
            var16 = var12.bind(var0)(var16);
            var16 = var16.colors;
            var16 = var16.BORDER_SUBTLE;
            var9.backgroundColor = var16;
            var3.headerDivider = var9;
            var9 = {
                'flex': 1,
                'alignSelf': 'stretch',
                'alignItems': 'center',
                'position': 'relative'
            };
            var3.container = var9;
            var9 = {};
            var9.height = var11;
            var3.noHeight = var9;
            var9 = {
                'flex': 1,
                'paddingTop': 8,
                'paddingHorizontal': 12,
                'alignSelf': 'stretch',
                'marginBottom': 0
            };
            var3.list = var9;
            var9 = {
                'alignItems': 'flex-start',
                'justifyContent': 'flex-end'
            };
            var3.section = var9;
            var9 = {
                'marginTop': 12,
                'paddingStart': 4
            };
            var11 = 14;
            var16 = var5[var11];
            var19 = var12.bind(var0)(var16);
            var18 = var15.PRIMARY_BOLD;
            var16 = var5[var10];
            var16 = var12.bind(var0)(var16);
            var16 = var16.colors;
            var22 = var16.TEXT_MUTED;
            var20 = {
                'marginBottom': 12,
                'uppercase': true
            };
            var24 = undefined;
            var23 = var18;
            var21 = var13;
            var22 = var24[var19](var23, var22, var21, var20, var19);
            var23 = var9;
            var16 = copyDataProperties(var23, var22);
            var3.divider = var9;
            var9 = {};
            var16 = var5[var10];
            var16 = var12.bind(var0)(var16);
            var16 = var16.colors;
            var16 = var16.TEXT_DEFAULT;
            var9.color = var16;
            var16 = 32;
            var9.marginTop = var16;
            var3.outOfDate = var9;
            var9 = {
                'paddingHorizontal': 8,
                'paddingBottom': 8
            };
            var3.availableTags = var9;
            var9 = {
                'backgroundColor': null,
                'alignItems': 'center',
                'justifyContent': 'center',
                'height': 48
            };
            var16 = var5[var10];
            var16 = var12.bind(var0)(var16);
            var16 = var16.colors;
            var16 = var16.BACKGROUND_BASE_LOWEST;
            var9.backgroundColor = var16;
            var16 = var5[var10];
            var16 = var12.bind(var0)(var16);
            var16 = var16.radii;
            var16 = var16.xs;
            var9.borderRadius = var16;
            var3.missingPermissionContainer = var9;
            var9 = {};
            var16 = var5[var11];
            var17 = var12.bind(var0)(var16);
            var16 = var15.PRIMARY_NORMAL;
            var15 = var5[var10];
            var15 = var12.bind(var0)(var15);
            var15 = var15.colors;
            var15 = var15.TEXT_MUTED;
            var22 = var17.bind(var0)(var16, var15, var13);
            var23 = var9;
            var15 = copyDataProperties(var23, var22);
            var3.missingPermissionText = var9;
            var9 = {};
            var15 = 'hidden';
            var9.overflow = var15;
            var15 = var5[var10];
            var15 = var12.bind(var0)(var15);
            var15 = var15.radii;
            var15 = var15.xl;
            var9.borderRadius = var15;
            var3.optionsContainer = var9;
            var9 = {
                'display': 'flex',
                'flexDirection': 'row',
                'alignItems': 'center',
                'paddingHorizontal': 8,
                'height': 32
            };
            var15 = var5[var10];
            var15 = var12.bind(var0)(var15);
            var15 = var15.colors;
            var15 = var15.BACKGROUND_BASE_LOWEST;
            var9.backgroundColor = var15;
            var3.optionsPill = var9;
            var9 = {};
            var15 = var5[var10];
            var15 = var12.bind(var0)(var15);
            var15 = var15.colors;
            var15 = var15.INTERACTIVE_TEXT_DEFAULT;
            var9.color = var15;
            var9.marginLeft = var14;
            var3.sortOptionsIcon = var9;
            var9 = {};
            var9.marginHorizontal = var14;
            var3.sortOptionsText = var9;
            var9 = {};
            var9.marginRight = var13;
            var13 = var5[var10];
            var13 = var12.bind(var0)(var13);
            var13 = var13.colors;
            var13 = var13.TEXT_DEFAULT;
            var9.color = var13;
            var3.sortOrderIcon = var9;
            var9 = {
                'backgroundColor': null,
                'borderRadius': 20,
                'marginRight': 4,
                'minWidth': 20,
                'height': 20,
                'display': 'flex',
                'alignItems': 'center',
                'justifyContent': 'center'
            };
            var10 = var5[var10];
            var10 = var12.bind(var0)(var10);
            var10 = var10.colors;
            var10 = var10.BACKGROUND_BRAND;
            var9.backgroundColor = var10;
            var3.countContainer = var9;
            var9 = {};
            var10 = 15;
            var10 = var5[var10];
            var12 = var4.bind(var0)(var10);
            var10 = var12.isAndroid;
            var12 = var10.bind(var12)();
            var10 = undefined;
            if (!var12) {
                _fun91931_ip = 1214;
                continue _fun91931
            }
        case 1211:
            var10 = var11;
        case 1214:
            var9.lineHeight = var10;
            var3.countText = var9;
            var3 = var6.bind(var8)(var3);
            var _closure1_slot21 = var3;
            var3 = {
                'waitForInteraction': false,
                'viewAreaCoveragePercentThreshold': 50,
                'minimumViewTime': 100
            };
            var _closure1_slot22 = var3;
            var6 = var7.forwardRef;
            var3 = function(arg0, arg1) { // Environment: var1
                _fun91943: for (var _fun91943_ip = 0;;) switch (_fun91943_ip) {
                    case 0:
                        var0 = arg0;
                        var6 = var0.channel;
                        var _closure2_slot0 = var6;
                        var10 = var0.searchQuery;
                        var _closure2_slot1 = var10;
                        var1 = var0.onScroll;
                        var _closure2_slot2 = var1;
                        var17 = var0.insets;
                        var0 = _closure1_slot21;
                        var4 = undefined;
                        var16 = var0.bind(var4)();
                        var2 = _closure1_slot11;
                        var0 = var6.id;
                        var0 = var2.bind(var4)(var0);
                        var27 = var0.sortOrder;
                        var5 = var0.tagFilter;
                        var25 = var0.tagSetting;
                        var9 = _closure1_slot1;
                        var12 = _closure1_slot2;
                        var0 = 31;
                        var0 = var12[var0];
                        var8 = var9.bind(var4)(var0);
                        var7 = var8.useForumChannelSeenManager;
                        var0 = {};
                        var11 = var6.guild_id;
                        var0.guildId = var11;
                        var11 = var6.id;
                        var0.channelId = var11;
                        var0 = var7.bind(var8)(var0);
                        var0 = function(arg0, arg1, arg2, arg3) { // Original name: useForumData, environment: var13
                            _fun91944: for (var _fun91944_ip = 0;;) switch (_fun91944_ip) {
                                case 0:
                                    var17 = arg0;
                                    var16 = arg1;
                                    var15 = arg2;
                                    var14 = arg3;
                                    var _closure3_slot0 = var17;
                                    var18 = _closure1_slot0;
                                    var19 = _closure1_slot2;
                                    var2 = 19;
                                    var1 = var19[var2];
                                    var10 = undefined;
                                    var4 = var18.bind(var10)(var1);
                                    var3 = var4.useForumActiveThreadIds;
                                    var1 = {};
                                    var1.channel = var17;
                                    var1.sortOrder = var16;
                                    var1.tagFilter = var15;
                                    var1.tagSetting = var14;
                                    var5 = true;
                                    var1.shouldAutomaticallyAck = var5;
                                    var8 = var3.bind(var4)(var1);
                                    var _closure3_slot1 = var8;
                                    var1 = 20;
                                    var1 = var19[var1];
                                    var5 = var18.bind(var10)(var1);
                                    var4 = var5.useStateFromStores;
                                    var1 = _closure1_slot7;
                                    var3 = new Array(2);
                                    var3[0] = var1;
                                    var1 = _closure1_slot6;
                                    var3[1] = var1;
                                    var1 = function() { // Environment: var0
                                        _fun91945: for (var _fun91945_ip = 0;;) switch (_fun91945_ip) {
                                            case 0:
                                                var4 = _closure1_slot7;
                                                var3 = var4.hasLoaded;
                                                var1 = _closure3_slot0;
                                                var0 = var1.guild_id;
                                                var0 = var3.bind(var4)(var0);
                                                var3 = _closure1_slot6;
                                                var2 = var3.isLurking;
                                                var1 = var1.guild_id;
                                                var1 = var2.bind(var3)(var1);
                                                var0 = !var0;
                                                if (!var0) {
                                                    _fun91945_ip = 59;
                                                    continue _fun91945
                                                }
                                            case 56:
                                                var0 = !var1;
                                            case 59:
                                                return var0;
                                        }
                                    };
                                    var4 = var4.bind(var5)(var3, var1);
                                    var _closure3_slot2 = var4;
                                    var12 = !var4;
                                    var1 = var19[var2];
                                    var5 = var18.bind(var10)(var1);
                                    var3 = var5.useForumSearchState;
                                    var1 = {};
                                    var6 = var17.id;
                                    var1.channelId = var6;
                                    var3 = var3.bind(var5)(var1);
                                    var1 = var3.searchResults;
                                    var13 = var3.isSearchLoading;
                                    var3 = var19[var2];
                                    var5 = var18.bind(var10)(var3);
                                    var3 = var5.useAutomaticForumSearch;
                                    var3 = var3.bind(var5)(var17, var15, var14);
                                    var3 = var19[var2];
                                    var5 = var18.bind(var10)(var3);
                                    var3 = var5.useCanViewArchivedPosts;
                                    var11 = var3.bind(var5)(var17);
                                    var3 = 21;
                                    var3 = var19[var3];
                                    var5 = var18.bind(var10)(var3);
                                    var3 = var5.useArchivedThreads;
                                    var24 = var5;
                                    var23 = var17;
                                    var22 = var16;
                                    var21 = var15;
                                    var20 = var14;
                                    var3 = var24[var3](var23, var22, var21, var20, var19);
                                    var7 = var3.threadIds;
                                    var _closure3_slot3 = var7;
                                    var6 = var3.canLoadMore;
                                    var5 = var3.loadMore;
                                    var3 = var3.loading;
                                    var2 = var19[var2];
                                    var10 = var18.bind(var10)(var2);
                                    var2 = var10.useLoadForumUnreadCounts;
                                    var24 = var10;
                                    var23 = var17;
                                    var22 = var16;
                                    var21 = var15;
                                    var20 = var14;
                                    var2 = var24[var2](var23, var22, var21, var20, var19);
                                    var10 = 'Loading';
                                    var2 = var10;
                                    if (var13) {
                                        _fun91944_ip = 435;
                                        continue _fun91944
                                    }
                                case 337:
                                    if (var13) {
                                        _fun91944_ip = 359;
                                        continue _fun91944
                                    }
                                case 340:
                                    var15 = null;
                                    if (!(var15 != var1)) {
                                        _fun91944_ip = 359;
                                        continue _fun91944
                                    }
                                case 346:
                                    var14 = var1.length;
                                    var13 = 0;
                                    var2 = null;
                                    if (!(var13 !== var14)) {
                                        _fun91944_ip = 435;
                                        continue _fun91944
                                    }
                                case 359:
                                    var2 = var10;
                                    if (!var12) {
                                        _fun91944_ip = 435;
                                        continue _fun91944
                                    }
                                case 365:
                                    if (!var12) {
                                        _fun91944_ip = 373;
                                        continue _fun91944
                                    }
                                case 368:
                                    var2 = null;
                                    if (!var11) {
                                        _fun91944_ip = 435;
                                        continue _fun91944
                                    }
                                case 373:
                                    var11 = var8.length;
                                    var12 = 0;
                                    if (!(var12 === var11)) {
                                        _fun91944_ip = 405;
                                        continue _fun91944
                                    }
                                case 384:
                                    var11 = var7.length;
                                    if (!(var12 === var11)) {
                                        _fun91944_ip = 405;
                                        continue _fun91944
                                    }
                                case 393:
                                    var2 = var10;
                                    if (var4) {
                                        _fun91944_ip = 435;
                                        continue _fun91944
                                    }
                                case 399:
                                    var2 = var10;
                                    if (var3) {
                                        _fun91944_ip = 435;
                                        continue _fun91944
                                    }
                                case 405:
                                    var10 = var8.length;
                                    var10 = var12 === var10;
                                    if (!var10) {
                                        _fun91944_ip = 426;
                                        continue _fun91944
                                    }
                                case 417:
                                    var11 = var7.length;
                                    var10 = var12 === var11;
                                case 426:
                                    var2 = null;
                                    if (!var10) {
                                        _fun91944_ip = 435;
                                        continue _fun91944
                                    }
                                case 431:
                                    var2 = 'Empty';
                                case 435:
                                    var11 = _closure1_slot3;
                                    var10 = var11.useEffect;
                                    var12 = var8.length;
                                    var9 = new Array(3);
                                    var9[0] = var12;
                                    var12 = var7.length;
                                    var9[1] = var12;
                                    var9[2] = var4;
                                    var0 = function() { // Environment: var0
                                        var2 = _closure1_slot1;
                                        var1 = _closure1_slot2;
                                        var0 = 22;
                                        var1 = var1[var0];
                                        var0 = undefined;
                                        var4 = var2.bind(var0)(var1);
                                        var3 = var4.recordRender;
                                        var2 = _closure3_slot1;
                                        var5 = var2.length;
                                        var2 = _closure3_slot3;
                                        var2 = var2.length;
                                        var2 = var5 + var2;
                                        var1 = _closure3_slot2;
                                        var1 = !var1;
                                        var1 = var3.bind(var4)(var2, var1);
                                        return var0;
                                    };
                                    var0 = var10.bind(var11)(var0, var9);
                                    var0 = {};
                                    var0.activeThreadIds = var8;
                                    var0.archivedThreadIds = var7;
                                    var0.canLoadMore = var6;
                                    var0.loadMore = var5;
                                    var0.activeThreadsLoading = var4;
                                    var0.archivedThreadsLoading = var3;
                                    var0.emptyStateType = var2;
                                    var0.searchResults = var1;
                                    return var0;
                            }
                        };
                        var29 = undefined;
                        var28 = var6;
                        var26 = var5;
                        var2 = var29[var0](var28, var27, var26, var25, var24);
                        var18 = var2.activeThreadIds;
                        var _closure2_slot3 = var18;
                        var14 = var2.archivedThreadIds;
                        var _closure2_slot4 = var14;
                        var23 = var2.canLoadMore;
                        var _closure2_slot5 = var23;
                        var7 = var2.loadMore;
                        var _closure2_slot6 = var7;
                        var0 = var2.archivedThreadsLoading;
                        var _closure2_slot7 = var0;
                        var15 = var2.activeThreadsLoading;
                        var _closure2_slot8 = var15;
                        var8 = var2.emptyStateType;
                        var _closure2_slot9 = var8;
                        var3 = var2.searchResults;
                        var _closure2_slot10 = var3;
                        var2 = 32;
                        var2 = var12[var2];
                        var2 = var9.bind(var4)(var2);
                        var2 = var2.bind(var4)(var6);
                        var _closure2_slot11 = var2;
                        var11 = _closure1_slot0;
                        var9 = 19;
                        var19 = var12[var9];
                        var20 = var11.bind(var4)(var19);
                        var19 = var20.useCanViewArchivedPosts;
                        var21 = var19.bind(var20)(var6);
                        var _closure2_slot12 = var21;
                        var9 = var12[var9];
                        var19 = var11.bind(var4)(var9);
                        var9 = var19.useCanSearchForumPosts;
                        var20 = var9.bind(var19)(var6);
                        var _closure2_slot13 = var20;
                        var9 = 16;
                        var9 = var12[var9];
                        var11 = var11.bind(var4)(var9);
                        var9 = var11.useClientThemesOverride;
                        var19 = var9.bind(var11)();
                        var22 = _closure1_slot3;
                        var12 = var22.useCallback;
                        var11 = new Array(5);
                        var11[0] = var0;
                        var11[1] = var23;
                        var11[2] = var21;
                        var11[3] = var7;
                        var11[4] = var3;
                        var9 = function() { // Environment: var13
                            _fun91947: for (var _fun91947_ip = 0;;) switch (_fun91947_ip) {
                                case 0:
                                    var2 = _closure2_slot10;
                                    var1 = null;
                                    var1 = var1 == var2;
                                    if (!var1) {
                                        _fun91947_ip = 20;
                                        continue _fun91947
                                    }
                                case 16:
                                    var1 = _closure2_slot12;
                                case 20:
                                    if (!var1) {
                                        _fun91947_ip = 30;
                                        continue _fun91947
                                    }
                                case 23:
                                    var2 = _closure2_slot7;
                                    var1 = !var2;
                                case 30:
                                    if (!var1) {
                                        _fun91947_ip = 37;
                                        continue _fun91947
                                    }
                                case 33:
                                    var1 = _closure2_slot5;
                                case 37:
                                    if (!var1) {
                                        _fun91947_ip = 50;
                                        continue _fun91947
                                    }
                                case 40:
                                    var1 = _closure2_slot6;
                                    var0 = undefined;
                                    var0 = var1.bind(var0)();
                                case 50:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var12 = var12.bind(var22)(var9, var11);
                        var22 = _closure1_slot3;
                        var11 = var22.useCallback;
                        var9 = [976];
                        var9[1] = var0;
                        var9[2] = var23;
                        var9[3] = var21;
                        var9[4] = var7;
                        var9[5] = var3;
                        var7 = function(arg0) { // Environment: var13
                            _fun91948: for (var _fun91948_ip = 0;;) switch (_fun91948_ip) {
                                case 0:
                                    var0 = arg0;
                                    var0 = var0.nativeEvent;
                                    var1 = var0.contentOffset;
                                    var3 = var1.y;
                                    var1 = var0.contentSize;
                                    var4 = var1.height;
                                    var0 = var0.layoutMeasurement;
                                    var2 = var0.height;
                                    var5 = _closure2_slot10;
                                    var1 = null;
                                    var1 = var1 == var5;
                                    if (!var1) {
                                        _fun91948_ip = 62;
                                        continue _fun91948
                                    }
                                case 58:
                                    var1 = _closure2_slot12;
                                case 62:
                                    if (!var1) {
                                        _fun91948_ip = 72;
                                        continue _fun91948
                                    }
                                case 65:
                                    var5 = _closure2_slot7;
                                    var1 = !var5;
                                case 72:
                                    if (!var1) {
                                        _fun91948_ip = 79;
                                        continue _fun91948
                                    }
                                case 75:
                                    var1 = _closure2_slot5;
                                case 79:
                                    if (!var1) {
                                        _fun91948_ip = 100;
                                        continue _fun91948
                                    }
                                case 82:
                                    var3 = var3 + var2;
                                    var2 = 976;
                                    var2 = var4 - var2;
                                    var1 = var3 > var2;
                                case 100:
                                    if (!var1) {
                                        _fun91948_ip = 113;
                                        continue _fun91948
                                    }
                                case 103:
                                    var1 = _closure2_slot6;
                                    var0 = undefined;
                                    var0 = var1.bind(var0)();
                                case 113:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var7 = var11.bind(var22)(var7, var9);
                        var _closure2_slot14 = var7;
                        var11 = _closure1_slot3;
                        var9 = var11.useMemo;
                        var7 = new Array(8);
                        var7[0] = var3;
                        var7[1] = var21;
                        var7[2] = var20;
                        var7[3] = var18;
                        var7[4] = var15;
                        var7[5] = var14;
                        var7[6] = var8;
                        var7[7] = var0;
                        var0 = function() { // Environment: var13
                            _fun91949: for (var _fun91949_ip = 0;;) switch (_fun91949_ip) {
                                case 0:
                                    var0 = new Array(0);
                                    var2 = _closure2_slot10;
                                    var3 = null;
                                    if (!(var3 == var2)) {
                                        _fun91949_ip = 237;
                                        continue _fun91949
                                    }
                                case 20:
                                    var2 = _closure2_slot8;
                                    var4 = var0.push;
                                    if (var2) {
                                        _fun91949_ip = 64;
                                        continue _fun91949
                                    }
                                case 32:
                                    var8 = _closure2_slot3;
                                    var2 = new Array(0);
                                    var7 = 0;
                                    var9 = var2;
                                    var5 = arraySpread(var9, var8, var7);
                                    var9 = var4;
                                    var8 = var2;
                                    var7 = var0;
                                    var2 = apply(var9, var8, var7);
                                    _fun91949_ip = 75;
                                    continue _fun91949;
                                case 64:
                                    var2 = 'loading_section';
                                    var2 = var4.bind(var0)(var2);
                                case 75:
                                    var2 = _closure2_slot12;
                                    if (var2) {
                                        _fun91949_ip = 119;
                                        continue _fun91949
                                    }
                                case 82:
                                    var4 = var0.push;
                                    var2 = 'archived_section';
                                    var2 = var4.bind(var0)(var2);
                                    var4 = var0.push;
                                    var2 = 'missing_permission_archived_threads';
                                    var2 = var4.bind(var0)(var2);
                                    _fun91949_ip = 308;
                                    continue _fun91949;
                                case 119:
                                    var2 = _closure2_slot4;
                                    if (!(var3 != var2)) {
                                        _fun91949_ip = 142;
                                        continue _fun91949
                                    }
                                case 127:
                                    var2 = _closure2_slot4;
                                    var2 = var2.length;
                                    var5 = 0;
                                    if (!(!(var2 > var5))) {
                                        _fun91949_ip = 184;
                                        continue _fun91949
                                    }
                                case 142:
                                    var2 = _closure2_slot9;
                                    var2 = var3 == var2;
                                    if (!var2) {
                                        _fun91949_ip = 157;
                                        continue _fun91949
                                    }
                                case 153:
                                    var2 = _closure2_slot7;
                                case 157:
                                    if (!var2) {
                                        _fun91949_ip = 308;
                                        continue _fun91949
                                    }
                                case 163:
                                    var3 = var0.push;
                                    var2 = 'loading_section';
                                    var2 = var3.bind(var0)(var2);
                                    _fun91949_ip = 308;
                                    continue _fun91949;
                                case 184:
                                    var3 = var0.push;
                                    var2 = 'archived_section';
                                    var2 = var3.bind(var0)(var2);
                                    var3 = var0.push;
                                    var8 = _closure2_slot4;
                                    var2 = new Array(0);
                                    var9 = var2;
                                    var7 = 0;
                                    var4 = arraySpread(var9, var8, var7);
                                    var9 = var3;
                                    var8 = var2;
                                    var7 = var0;
                                    var2 = apply(var9, var8, var7);
                                    _fun91949_ip = 308;
                                    continue _fun91949;
                                case 237:
                                    var3 = var0.push;
                                    var2 = 'search_section';
                                    var2 = var3.bind(var0)(var2);
                                    var3 = _closure2_slot13;
                                    var2 = var0.push;
                                    if (var3) {
                                        _fun91949_ip = 278;
                                        continue _fun91949
                                    }
                                case 265:
                                    var3 = 'missing_permission_search';
                                    var3 = var2.bind(var0)(var3);
                                    _fun91949_ip = 308;
                                    continue _fun91949;
                                case 278:
                                    var8 = _closure2_slot10;
                                    var1 = new Array(0);
                                    var7 = 0;
                                    var9 = var1;
                                    var3 = arraySpread(var9, var8, var7);
                                    var9 = var2;
                                    var8 = var1;
                                    var7 = var0;
                                    var1 = apply(var9, var8, var7);
                                case 308:
                                    return var0;
                            }
                        };
                        var14 = var9.bind(var11)(var0, var7);
                        var9 = _closure1_slot3;
                        var7 = var9.useCallback;
                        var0 = null;
                        var15 = var0 == var3;
                        var11 = undefined;
                        if (var15) {
                            _fun91943_ip = 518;
                            continue _fun91943
                        }
                    case 513:
                        var11 = var3.length;
                    case 518:
                        var3 = new Array(3);
                        var3[0] = var11;
                        var3[1] = var10;
                        var3[2] = var2;
                        var2 = function(arg0) { // Environment: var13
                            _fun91950: for (var _fun91950_ip = 0;;) switch (_fun91950_ip) {
                                case 0:
                                    var0 = arg0;
                                    var4 = var0.item;
                                    var0 = 'archived_section';
                                    if (!(var4 !== var0)) {
                                        _fun91950_ip = 318;
                                        continue _fun91950
                                    }
                                case 21:
                                    var0 = 'search_section';
                                    if (!(var4 !== var0)) {
                                        _fun91950_ip = 227;
                                        continue _fun91950
                                    }
                                case 34:
                                    var0 = 'loading_section';
                                    if (!(var4 !== var0)) {
                                        _fun91950_ip = 181;
                                        continue _fun91950
                                    }
                                case 47:
                                    var0 = 'missing_permission_archived_threads';
                                    if (!(var4 !== var0)) {
                                        _fun91950_ip = 146;
                                        continue _fun91950
                                    }
                                case 57:
                                    var0 = 'missing_permission_search';
                                    if (!(var4 !== var0)) {
                                        _fun91950_ip = 111;
                                        continue _fun91950
                                    }
                                case 67:
                                    var3 = _closure1_slot17;
                                    var1 = _closure1_slot1;
                                    var2 = _closure1_slot2;
                                    var0 = 34;
                                    var0 = var2[var0];
                                    var2 = undefined;
                                    var1 = var1.bind(var2)(var0);
                                    var0 = {};
                                    var0.threadId = var4;
                                    var0 = var3.bind(var2)(var1, var0);
                                    _fun91950_ip = 144;
                                    continue _fun91950;
                                case 111:
                                    var4 = _closure1_slot17;
                                    var3 = _closure1_slot28;
                                    var2 = {};
                                    var1 = _closure2_slot11;
                                    var2.channelName = var1;
                                    var1 = undefined;
                                    var0 = var4.bind(var1)(var3, var2);
                                case 144:
                                    _fun91950_ip = 179;
                                    continue _fun91950;
                                case 146:
                                    var4 = _closure1_slot17;
                                    var3 = _closure1_slot27;
                                    var2 = {};
                                    var1 = _closure2_slot11;
                                    var2.channelName = var1;
                                    var1 = undefined;
                                    var0 = var4.bind(var1)(var3, var2);
                                case 179:
                                    _fun91950_ip = 225;
                                    continue _fun91950;
                                case 181:
                                    var4 = _closure1_slot17;
                                    var2 = _closure1_slot1;
                                    var3 = _closure1_slot2;
                                    var1 = 33;
                                    var1 = var3[var1];
                                    var3 = undefined;
                                    var2 = var2.bind(var3)(var1);
                                    var1 = {};
                                    var5 = false;
                                    var1.fillScreen = var5;
                                    var0 = var4.bind(var3)(var2, var1);
                                case 225:
                                    _fun91950_ip = 316;
                                    continue _fun91950;
                                case 227:
                                    var4 = _closure1_slot17;
                                    var3 = _closure1_slot26;
                                    var2 = {};
                                    var1 = _closure2_slot10;
                                    var7 = null;
                                    var5 = var7 == var1;
                                    var1 = undefined;
                                    var8 = undefined;
                                    if (var5) {
                                        _fun91950_ip = 269;
                                        continue _fun91950
                                    }
                                case 260:
                                    var5 = _closure2_slot10;
                                    var8 = var5.length;
                                case 269:
                                    var9 = var7 != var8;
                                    var5 = 0;
                                    if (!var9) {
                                        _fun91950_ip = 281;
                                        continue _fun91950
                                    }
                                case 278:
                                    var5 = var8;
                                case 281:
                                    var2.numPosts = var5;
                                    var5 = _closure2_slot1;
                                    var7 = var7 != var5;
                                    var5 = '';
                                    if (!var7) {
                                        _fun91950_ip = 305;
                                        continue _fun91950
                                    }
                                case 301:
                                    var5 = _closure2_slot1;
                                case 305:
                                    var2.searchQuery = var5;
                                    var0 = var4.bind(var1)(var3, var2);
                                case 316:
                                    _fun91950_ip = 339;
                                    continue _fun91950;
                                case 318:
                                    var4 = _closure1_slot17;
                                    var3 = _closure1_slot25;
                                    var2 = undefined;
                                    var1 = {};
                                    var0 = var4.bind(var2)(var3, var1);
                                case 339:
                                    return var0;
                            }
                        };
                        var15 = var7.bind(var9)(var2, var3);
                        if (!(var0 == var8)) {
                            _fun91943_ip = 840;
                            continue _fun91943
                        }
                    case 554:
                        var3 = _closure1_slot18;
                        var2 = _closure1_slot19;
                        var0 = {};
                        var10 = _closure1_slot17;
                        var9 = _closure1_slot1;
                        var11 = _closure1_slot2;
                        var7 = 36;
                        var7 = var11[var7];
                        var9 = var9.bind(var4)(var7);
                        var7 = {
                            'absolute': true,
                            'mix': true
                        };
                        var9 = var10.bind(var4)(var9, var7);
                        var7 = new Array(2);
                        var7[0] = var9;
                        var11 = _closure1_slot17;
                        var10 = _closure1_slot5;
                        var9 = {};
                        var20 = arg1;
                        var9.ref = var20;
                        var20 = var16.list;
                        var16 = new Array(2);
                        var16[0] = var20;
                        var16[1] = var19;
                        var9.style = var16;
                        var16 = {};
                        var19 = 0.01;
                        var16.right = var19;
                        var9.scrollIndicatorInsets = var16;
                        var16 = {};
                        var19 = var18.length;
                        var18 = 0;
                        if (!(var18 !== var19)) {
                            _fun91943_ip = 720;
                            continue _fun91943
                        }
                    case 689:
                        var20 = _closure1_slot1;
                        var21 = _closure1_slot2;
                        var19 = 13;
                        var19 = var21[var19];
                        var19 = var20.bind(var4)(var19);
                        var19 = var19.spacing;
                        var18 = var19.PX_8;
                    case 720:
                        var16.paddingTop = var18;
                        var18 = var17.bottom;
                        var19 = _closure1_slot1;
                        var20 = _closure1_slot2;
                        var17 = 13;
                        var17 = var20[var17];
                        var17 = var19.bind(var4)(var17);
                        var17 = var17.spacing;
                        var17 = var17.PX_16;
                        var17 = var18 + var17;
                        var16.paddingBottom = var17;
                        var9.contentContainerStyle = var16;
                        var9.renderItem = var15;
                        var9.data = var14;
                        var13 = function(arg0) { // Original name: onScroll, environment: var13
                            _fun91951: for (var _fun91951_ip = 0;;) switch (_fun91951_ip) {
                                case 0:
                                    var2 = arg0;
                                    var3 = _closure1_slot0;
                                    var1 = _closure1_slot2;
                                    var0 = 37;
                                    var1 = var1[var0];
                                    var0 = undefined;
                                    var5 = var3.bind(var0)(var1);
                                    var4 = var5.trackForumScrolled;
                                    var3 = {};
                                    var6 = _closure2_slot0;
                                    var7 = var6.guild_id;
                                    var3.guildId = var7;
                                    var6 = var6.id;
                                    var3.channelId = var6;
                                    var3 = var4.bind(var5)(var3);
                                    var3 = _closure2_slot14;
                                    var3 = var3.bind(var0)(var2);
                                    var4 = _closure2_slot2;
                                    var3 = null;
                                    if (!(var3 != var4)) {
                                        _fun91951_ip = 94;
                                        continue _fun91951
                                    }
                                case 85:
                                    var1 = _closure2_slot2;
                                    var1 = var1.bind(var0)(var2);
                                case 94:
                                    return var0;
                            }
                        };
                        var9.onScroll = var13;
                        var9.onEndReached = var12;
                        var12 = _closure1_slot31;
                        var9.onViewableItemsChanged = var12;
                        var12 = _closure1_slot22;
                        var9.viewabilityConfig = var12;
                        var9 = var11.bind(var4)(var10, var9);
                        var7[1] = var9;
                        var0.children = var7;
                        var0 = var3.bind(var4)(var2, var0);
                        _fun91943_ip = 908;
                        continue _fun91943;
                    case 840:
                        var3 = _closure1_slot17;
                        var2 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var1 = 35;
                        var1 = var7[var1];
                        var2 = var2.bind(var4)(var1);
                        var1 = {};
                        var7 = 92;
                        var1.topViewHeight = var7;
                        var7 = 'Loading';
                        var7 = var7 === var8;
                        var1.loading = var7;
                        var6 = var6.name;
                        var1.channelName = var6;
                        var1.tagFilter = var5;
                        var0 = var3.bind(var4)(var2, var1);
                    case 908:
                        return var0;
                }
            };
            var3 = var6.bind(var7)(var3);
            var _closure1_slot23 = var3;
            var3 = function() { // Original name: onCreatePostWithoutPermission, environment: var1
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var0 = 38;
                var1 = var6[var0];
                var0 = undefined;
                var3 = var5.bind(var0)(var1);
                var2 = var3.open;
                var1 = {};
                var7 = 'FORUM_NO_POST_PERMISSION_HELP';
                var1.key = var7;
                var9 = _closure1_slot0;
                var4 = 18;
                var7 = var6[var4];
                var7 = var9.bind(var0)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var4 = var6[var4];
                var4 = var9.bind(var0)(var4);
                var4 = var4.t;
                var4 = var4.iyzwnD;
                var4 = var7.bind(var8)(var4);
                var1.content = var4;
                var4 = 39;
                var4 = var6[var4];
                var4 = var5.bind(var0)(var4);
                var1.icon = var4;
                var1 = var2.bind(var3)(var1);
                return var0;
            };
            var _closure1_slot24 = var3;
            var3 = 58;
            var3 = var5[var3];
            var5 = var4.bind(var0)(var3);
            var4 = var5.fileFinishedImporting;
            var3 = 'modules/forums/native/ForumChannel.tsx';
            var3 = var4.bind(var5)(var3);
            var1 = function(arg0) { // Original name: ForumChannel, environment: var1
                _fun91953: for (var _fun91953_ip = 0;;) switch (_fun91953_ip) {
                    case 0:
                        var1 = arg0;
                        var9 = var1.channel;
                        var _closure2_slot0 = var9;
                        var3 = undefined;
                        var _closure2_slot3 = var3;
                        var _closure2_slot4 = var3;
                        var _closure2_slot5 = var3;
                        var _closure2_slot6 = var3;
                        var _closure2_slot7 = var3;
                        var _closure2_slot8 = var3;
                        var _closure2_slot9 = var3;
                        var _closure2_slot10 = var3;
                        var1 = _closure1_slot21;
                        var11 = var1.bind(var3)();
                        var1 = _closure1_slot12;
                        var10 = var1.bind(var3)();
                        var _closure2_slot1 = var10;
                        var2 = _closure1_slot11;
                        var1 = var9.id;
                        var1 = var2.bind(var3)(var1);
                        var12 = var1.scrollPosition;
                        var _closure2_slot2 = var12;
                        var2 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var4 = 20;
                        var1 = var5[var4];
                        var13 = var2.bind(var3)(var1);
                        var8 = var13.useStateFromStores;
                        var1 = _closure1_slot10;
                        var7 = new Array(1);
                        var7[0] = var1;
                        var1 = function() { // Environment: var0
                            var2 = _closure1_slot10;
                            var1 = var2.canChatInGuild;
                            var0 = _closure2_slot0;
                            var0 = var0.guild_id;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var7 = var8.bind(var13)(var7, var1);
                        var1 = 40;
                        var1 = var5[var1];
                        var2 = var2.bind(var3)(var1);
                        var1 = var2.useCanStartThread;
                        var1 = var1.bind(var2)(var9);
                        var2 = var9.topic;
                        var5 = null;
                        var16 = var5 != var2;
                        if (!var16) {
                            _fun91953_ip = 200;
                            continue _fun91953
                        }
                    case 183:
                        var2 = var9.topic;
                        var8 = var2.length;
                        var2 = 0;
                        var16 = var2 !== var8;
                    case 200:
                        _closure2_slot3 = var16;
                        var13 = _closure1_slot1;
                        var15 = _closure1_slot2;
                        var2 = 41;
                        var2 = var15[var2];
                        var8 = var13.bind(var3)(var2);
                        var2 = 42;
                        var2 = var15[var2];
                        var2 = var13.bind(var3)(var2);
                        var2 = var2.FORUM_CHANNEL;
                        var2 = var8.bind(var3)(var2);
                        var17 = var2.analyticsLocations;
                        _closure2_slot4 = var17;
                        var8 = _closure1_slot0;
                        var2 = 19;
                        var2 = var15[var2];
                        var18 = var8.bind(var3)(var2);
                        var14 = var18.useForumSearchState;
                        var2 = {};
                        var19 = var9.id;
                        var2.channelId = var19;
                        var2 = var14.bind(var18)(var2);
                        var19 = var2.searchQuery;
                        _closure2_slot5 = var19;
                        var14 = _closure1_slot3;
                        var2 = var14.useRef;
                        var14 = var2.bind(var14)(var5);
                        _closure2_slot6 = var14;
                        var2 = 43;
                        var2 = var15[var2];
                        var20 = var8.bind(var3)(var2);
                        var18 = var20.useShowMemberVerificationGate;
                        var2 = var9.guild_id;
                        var2 = var18.bind(var20)(var2);
                        _closure2_slot7 = var2;
                        var4 = var15[var4];
                        var21 = var8.bind(var3)(var4);
                        var20 = var21.useStateFromStores;
                        var4 = _closure1_slot9;
                        var18 = new Array(1);
                        var18[0] = var4;
                        var4 = var9.id;
                        var8 = new Array(1);
                        var8[0] = var4;
                        var4 = function() { // Environment: var0
                            var2 = _closure1_slot9;
                            var1 = var2.getThreadSettings;
                            var0 = _closure2_slot0;
                            var0 = var0.id;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var8 = var20.bind(var21)(var18, var4, var8);
                        _closure2_slot8 = var8;
                        var4 = 44;
                        var4 = var15[var4];
                        var4 = var13.bind(var3)(var4);
                        var4 = var4.bind(var3)(var9);
                        var15 = _closure1_slot3;
                        var13 = var15.useRef;
                        var13 = var13.bind(var15)(var5);
                        _closure2_slot9 = var13;
                        var18 = _closure1_slot3;
                        var15 = var18.useEffect;
                        var20 = var9.id;
                        var13 = new Array(2);
                        var13[0] = var20;
                        var13[1] = var12;
                        var12 = function() { // Environment: var0
                            _fun91956: for (var _fun91956_ip = 0;;) switch (_fun91956_ip) {
                                case 0:
                                    var0 = _closure2_slot0;
                                    var1 = var0.id;
                                    var0 = _closure2_slot9;
                                    var0 = var0.current;
                                    if (!(var1 !== var0)) {
                                        _fun91956_ip = 88;
                                        continue _fun91956
                                    }
                                case 25:
                                    var1 = _closure2_slot9;
                                    var0 = _closure2_slot0;
                                    var0 = var0.id;
                                    var1.current = var0;
                                    var0 = _closure2_slot6;
                                    var2 = var0.current;
                                    var0 = null;
                                    if (!(var0 != var2)) {
                                        _fun91956_ip = 88;
                                        continue _fun91956
                                    }
                                case 59:
                                    var1 = var2.scrollToOffset;
                                    var0 = {};
                                    var3 = _closure2_slot2;
                                    var0.offset = var3;
                                    var3 = false;
                                    var0.animated = var3;
                                    var0 = var1.bind(var2)(var0);
                                case 88:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var12 = var15.bind(var18)(var12, var13);
                        var18 = _closure1_slot3;
                        var15 = var18.useEffect;
                        var12 = var9.id;
                        var13 = new Array(1);
                        var13[0] = var12;
                        var12 = function() { // Environment: var0
                            var0 = function() { // Environment: var0
                                _fun91958: for (var _fun91958_ip = 0;;) switch (_fun91958_ip) {
                                    case 0:
                                        var1 = _closure2_slot0;
                                        var2 = var1.id;
                                        var1 = null;
                                        if (!(var1 != var2)) {
                                            _fun91958_ip = 63;
                                            continue _fun91958
                                        }
                                    case 18:
                                        var3 = _closure1_slot1;
                                        var2 = _closure1_slot2;
                                        var1 = 45;
                                        var2 = var2[var1];
                                        var1 = undefined;
                                        var2 = var3.bind(var1)(var2);
                                        var1 = var2.clearForumSearch;
                                        var0 = _closure2_slot0;
                                        var0 = var0.id;
                                        var0 = var1.bind(var2)(var0);
                                    case 63:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            return var0;
                        };
                        var12 = var15.bind(var18)(var12, var13);
                        var15 = _closure1_slot3;
                        var13 = var15.useCallback;
                        var12 = new Array(4);
                        var12[0] = var9;
                        var12[1] = var17;
                        var12[2] = var19;
                        var12[3] = var8;
                        var8 = function(arg0) { // Environment: var0
                            _fun91959: for (var _fun91959_ip = 0;;) switch (_fun91959_ip) {
                                case 0:
                                    var3 = _closure1_slot1;
                                    var0 = _closure1_slot2;
                                    var5 = 46;
                                    var2 = var0[var5];
                                    var0 = undefined;
                                    var7 = var3.bind(var0)(var2);
                                    var6 = var7.changeThreadSettings;
                                    var2 = _closure2_slot0;
                                    var3 = var2.id;
                                    var2 = {};
                                    var8 = false;
                                    var2.isPrivate = var8;
                                    var2 = var6.bind(var7)(var3, var2);
                                    var2 = _closure2_slot8;
                                    var8 = null;
                                    var3 = var8 == var2;
                                    var2 = undefined;
                                    if (var3) {
                                        _fun91959_ip = 82;
                                        continue _fun91959
                                    }
                                case 73:
                                    var3 = _closure2_slot8;
                                    var2 = var3.name;
                                case 82:
                                    var2 = var8 != var2;
                                    if (!var2) {
                                        _fun91959_ip = 150;
                                        continue _fun91959
                                    }
                                case 89:
                                    var3 = _closure2_slot8;
                                    var3 = var8 == var3;
                                    var6 = undefined;
                                    if (var3) {
                                        _fun91959_ip = 144;
                                        continue _fun91959
                                    }
                                case 102:
                                    var3 = _closure2_slot8;
                                    var7 = var3.name;
                                    var3 = var8 == var7;
                                    var6 = undefined;
                                    if (var3) {
                                        _fun91959_ip = 144;
                                        continue _fun91959
                                    }
                                case 120:
                                    var3 = var7.trim;
                                    var3 = var3.bind(var7)();
                                    var7 = var8 == var3;
                                    var6 = undefined;
                                    if (var7) {
                                        _fun91959_ip = 144;
                                        continue _fun91959
                                    }
                                case 139:
                                    var6 = var3.length;
                                case 144:
                                    var3 = 0;
                                    var2 = var3 !== var6;
                                case 150:
                                    if (var2) {
                                        _fun91959_ip = 254;
                                        continue _fun91959
                                    }
                                case 153:
                                    var3 = _closure1_slot1;
                                    var2 = _closure1_slot2;
                                    var2 = var2[var5];
                                    var6 = var3.bind(var0)(var2);
                                    var5 = var6.changeThreadSettings;
                                    var2 = _closure2_slot0;
                                    var3 = var2.id;
                                    var2 = {};
                                    var7 = _closure2_slot5;
                                    var8 = var8 != var7;
                                    var7 = undefined;
                                    if (!var8) {
                                        _fun91959_ip = 244;
                                        continue _fun91959
                                    }
                                case 200:
                                    var9 = _closure2_slot5;
                                    var8 = var9.trim;
                                    var8 = var8.bind(var9)();
                                    var9 = var8.length;
                                    var8 = 0;
                                    var8 = var9 > var8;
                                    var7 = undefined;
                                    if (!var8) {
                                        _fun91959_ip = 244;
                                        continue _fun91959
                                    }
                                case 230:
                                    var9 = _closure2_slot5;
                                    var8 = var9.trim;
                                    var7 = var8.bind(var9)();
                                case 244:
                                    var2.name = var7;
                                    var2 = var5.bind(var6)(var3, var2);
                                case 254:
                                    var2 = _closure1_slot0;
                                    var3 = _closure1_slot2;
                                    var1 = 47;
                                    var1 = var3[var1];
                                    var3 = var2.bind(var0)(var1);
                                    var2 = var3.openCreateForumPostModal;
                                    var1 = {};
                                    var5 = _closure2_slot0;
                                    var6 = var5.guild_id;
                                    var1.guildId = var6;
                                    var5 = var5.id;
                                    var1.parentChannelId = var5;
                                    var5 = arg0;
                                    var1.analyticsLocationObject = var5;
                                    var4 = _closure2_slot4;
                                    var1.analyticsLocations = var4;
                                    var1 = var2.bind(var3)(var1);
                                    return var0;
                            }
                        };
                        var8 = var13.bind(var15)(var8, var12);
                        _closure2_slot10 = var8;
                        var15 = _closure1_slot3;
                        var13 = var15.useCallback;
                        var12 = new Array(4);
                        var12[0] = var9;
                        var12[1] = var2;
                        var12[2] = var16;
                        var12[3] = var8;
                        var8 = function() { // Environment: var0
                            _fun91960: for (var _fun91960_ip = 0;;) switch (_fun91960_ip) {
                                case 0:
                                    var4 = function() { // Original name: startCreateForumPostFlow, environment: var0
                                        _fun91961: for (var _fun91961_ip = 0;;) switch (_fun91961_ip) {
                                            case 0:
                                                var1 = _closure2_slot3;
                                                if (!var1) {
                                                    _fun91961_ip = 114;
                                                    continue _fun91961
                                                }
                                            case 10:
                                                var4 = _closure1_slot1;
                                                var3 = _closure1_slot2;
                                                var2 = 48;
                                                var2 = var3[var2];
                                                var3 = undefined;
                                                var5 = var4.bind(var3)(var2);
                                                var4 = var5.hasSeen;
                                                var2 = _closure2_slot0;
                                                var2 = var2.id;
                                                var2 = var4.bind(var5)(var2);
                                                if (var2) {
                                                    _fun91961_ip = 114;
                                                    continue _fun91961
                                                }
                                            case 58:
                                                var2 = _closure1_slot0;
                                                var4 = _closure1_slot2;
                                                var1 = 51;
                                                var1 = var4[var1];
                                                var3 = var2.bind(var3)(var1);
                                                var2 = var3.openForumGuidelinesActionSheet;
                                                var1 = {};
                                                var4 = _closure2_slot0;
                                                var1.channel = var4;
                                                var4 = function() { // Original name: onPress, environment: var4
                                                    var2 = _closure2_slot10;
                                                    var1 = {};
                                                    var3 = _closure1_slot14;
                                                    var3 = var3.GUILD_CHANNEL;
                                                    var1.page = var3;
                                                    var3 = _closure1_slot15;
                                                    var3 = var3.FORUM_CHANNEL_GUIDELINES;
                                                    var1.section = var3;
                                                    var0 = _closure1_slot13;
                                                    var0 = var0.BUTTON_CTA;
                                                    var1.object = var0;
                                                    var0 = undefined;
                                                    var0 = var2.bind(var0)(var1);
                                                    return var0;
                                                };
                                                var1.onPress = var4;
                                                var1 = var2.bind(var3)(var1);
                                                _fun91961_ip = 227;
                                                continue _fun91961;
                                            case 114:
                                                var4 = _closure1_slot0;
                                                var7 = _closure1_slot2;
                                                var1 = 49;
                                                var1 = var7[var1];
                                                var2 = undefined;
                                                var5 = var4.bind(var2)(var1);
                                                var4 = var5.triggerHapticFeedback;
                                                var6 = _closure1_slot1;
                                                var1 = 50;
                                                var1 = var7[var1];
                                                var1 = var6.bind(var2)(var1);
                                                var1 = var1.IMPACT_LIGHT;
                                                var1 = var4.bind(var5)(var1);
                                                var1 = _closure2_slot10;
                                                var0 = {};
                                                var4 = _closure1_slot14;
                                                var4 = var4.GUILD_CHANNEL;
                                                var0.page = var4;
                                                var4 = _closure1_slot15;
                                                var4 = var4.FORUM_CHANNEL_FOOTER;
                                                var0.section = var4;
                                                var3 = _closure1_slot13;
                                                var3 = var3.BUTTON_CTA;
                                                var0.object = var3;
                                                var0 = var1.bind(var2)(var0);
                                            case 227:
                                                var0 = undefined;
                                                return var0;
                                        }
                                    };
                                    var3 = _closure1_slot0;
                                    var1 = _closure1_slot2;
                                    var0 = 37;
                                    var1 = var1[var0];
                                    var0 = undefined;
                                    var6 = var3.bind(var0)(var1);
                                    var5 = var6.trackForumCreateNewPostClick;
                                    var3 = {};
                                    var7 = _closure2_slot0;
                                    var8 = var7.guild_id;
                                    var3.guildId = var8;
                                    var7 = var7.id;
                                    var3.channelId = var7;
                                    var3 = var5.bind(var6)(var3);
                                    var3 = _closure2_slot7;
                                    if (var3) {
                                        _fun91960_ip = 85;
                                        continue _fun91960
                                    }
                                case 79:
                                    var3 = var4.bind(var0)();
                                    _fun91960_ip = 126;
                                    continue _fun91960;
                                case 85:
                                    var3 = _closure1_slot0;
                                    var5 = _closure1_slot2;
                                    var2 = 52;
                                    var2 = var5[var2];
                                    var3 = var3.bind(var0)(var2);
                                    var2 = var3.openMemberVerificationModal;
                                    var1 = _closure2_slot0;
                                    var1 = var1.guild_id;
                                    var1 = var2.bind(var3)(var1, var4);
                                case 126:
                                    return var0;
                            }
                        };
                        var15 = var13.bind(var15)(var8, var12);
                        var16 = !var7;
                        if (var16) {
                            _fun91953_ip = 627;
                            continue _fun91953
                        }
                    case 615:
                        var1 = !var1;
                        if (!var1) {
                            _fun91953_ip = 624;
                            continue _fun91953
                        }
                    case 621:
                        var1 = !var2;
                    case 624:
                        var16 = var1;
                    case 627:
                        var7 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 53;
                        var1 = var2[var1];
                        var7 = var7.bind(var3)(var1);
                        var1 = {};
                        var12 = true;
                        var1.includeKeyboardHeight = var12;
                        var1 = var7.bind(var3)(var1);
                        var17 = var1.insets;
                        var8 = _closure1_slot3;
                        var7 = var8.useCallback;
                        var13 = var9.id;
                        var1 = new Array(2);
                        var1[0] = var13;
                        var1[1] = var10;
                        var0 = function(arg0) { // Environment: var0
                            var2 = _closure2_slot1;
                            var1 = var2.getState;
                            var3 = var1.bind(var2)();
                            var2 = var3.setScrollPosition;
                            var0 = _closure2_slot0;
                            var1 = var0.id;
                            var0 = arg0;
                            var0 = var0.nativeEvent;
                            var0 = var0.contentOffset;
                            var0 = var0.y;
                            var0 = var2.bind(var3)(var1, var0);
                            var0 = undefined;
                            return var0;
                        };
                        var18 = var7.bind(var8)(var0, var1);
                        var1 = _closure1_slot0;
                        var0 = 16;
                        var0 = var2[var0];
                        var2 = var1.bind(var3)(var0);
                        var1 = var2.useClientThemesOverride;
                        var0 = var11.noHeight;
                        var13 = var1.bind(var2)(var0);
                        var2 = _closure1_slot18;
                        var1 = _closure1_slot4;
                        var0 = {};
                        var7 = var11.background;
                        var0.style = var7;
                        var7 = null;
                        if (!var4) {
                            _fun91953_ip = 811;
                            continue _fun91953
                        }
                    case 764:
                        var10 = _closure1_slot17;
                        var8 = _closure1_slot0;
                        var20 = _closure1_slot2;
                        var4 = 54;
                        var4 = var20[var4];
                        var4 = var8.bind(var3)(var4);
                        var8 = var4.OptInChannelBanner;
                        var4 = {};
                        var4.channel = var9;
                        var4.topBorder = var12;
                        var7 = var10.bind(var3)(var8, var4);
                    case 811:
                        var4 = new Array(5);
                        var4[0] = var7;
                        var10 = _closure1_slot18;
                        var8 = _closure1_slot4;
                        var7 = {};
                        var12 = var11.headerRow;
                        var7.style = var12;
                        var21 = _closure1_slot17;
                        var20 = _closure1_slot29;
                        var12 = {};
                        var12.channel = var9;
                        var20 = var21.bind(var3)(var20, var12);
                        var12 = new Array(2);
                        var12[0] = var20;
                        var20 = var9.availableTags;
                        var21 = var20.length;
                        var20 = 0;
                        var20 = var21 > var20;
                        if (!var20) {
                            _fun91953_ip = 907;
                            continue _fun91953
                        }
                    case 887:
                        var23 = _closure1_slot17;
                        var22 = _closure1_slot30;
                        var21 = {};
                        var21.channel = var9;
                        var20 = var23.bind(var3)(var22, var21);
                    case 907:
                        var12[1] = var20;
                        var7.children = var12;
                        var7 = var10.bind(var3)(var8, var7);
                        var4[1] = var7;
                        var10 = _closure1_slot17;
                        var8 = _closure1_slot4;
                        var7 = {};
                        var20 = var11.headerDivider;
                        var12 = new Array(2);
                        var12[0] = var20;
                        var12[1] = var13;
                        var7.style = var12;
                        var7 = var10.bind(var3)(var8, var7);
                        var4[2] = var7;
                        var10 = _closure1_slot18;
                        var8 = _closure1_slot4;
                        var7 = {};
                        var11 = var11.container;
                        var7.style = var11;
                        var13 = _closure1_slot17;
                        var12 = _closure1_slot23;
                        var11 = {};
                        var11.channel = var9;
                        var11.insets = var17;
                        var11.searchQuery = var19;
                        var11.onScroll = var18;
                        var11.ref = var14;
                        var12 = var13.bind(var3)(var12, var11);
                        var11 = new Array(2);
                        var11[0] = var12;
                        var14 = _closure1_slot17;
                        var23 = _closure1_slot0;
                        var21 = _closure1_slot2;
                        var12 = 55;
                        var12 = var21[var12];
                        var12 = var23.bind(var3)(var12);
                        var13 = var12.FloatingActionButton;
                        var12 = {};
                        var20 = 18;
                        var18 = var21[var20];
                        var18 = var23.bind(var3)(var18);
                        var22 = var18.intl;
                        var19 = var22.string;
                        var18 = var21[var20];
                        var18 = var23.bind(var3)(var18);
                        var18 = var18.t;
                        var18 = var18.TyAuoT;
                        var18 = var19.bind(var22)(var18);
                        var12.accessibilityLabel = var18;
                        var19 = _closure1_slot1;
                        var18 = 56;
                        var18 = var21[var18];
                        var18 = var19.bind(var3)(var18);
                        var12.icon = var18;
                        var12.disabled = var16;
                        var18 = var17.bottom;
                        var17 = 13;
                        var17 = var21[var17];
                        var17 = var19.bind(var3)(var17);
                        var17 = var17.spacing;
                        var17 = var17.PX_16;
                        var17 = var18 + var17;
                        var12.positionBottom = var17;
                        var12.onPress = var15;
                        var15 = _closure1_slot24;
                        var12.onPressDisabled = var15;
                        var15 = undefined;
                        if (!var16) {
                            _fun91953_ip = 1248;
                            continue _fun91953
                        }
                    case 1196:
                        var19 = _closure1_slot0;
                        var16 = _closure1_slot2;
                        var17 = var16[var20];
                        var17 = var19.bind(var3)(var17);
                        var18 = var17.intl;
                        var17 = var18.string;
                        var16 = var16[var20];
                        var16 = var19.bind(var3)(var16);
                        var16 = var16.t;
                        var16 = var16.iyzwnD;
                        var15 = var17.bind(var18)(var16);
                    case 1248:
                        var12.accessibilityHint = var15;
                        var12 = var14.bind(var3)(var13, var12);
                        var11[1] = var12;
                        var7.children = var11;
                        var7 = var10.bind(var3)(var8, var7);
                        var4[3] = var7;
                        var7 = var9.guild_id;
                        var7 = var5 != var7;
                        var5 = null;
                        if (!var7) {
                            _fun91953_ip = 1333;
                            continue _fun91953
                        }
                    case 1291:
                        var8 = _closure1_slot17;
                        var7 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var6 = 57;
                        var6 = var10[var6];
                        var6 = var7.bind(var3)(var6);
                        var7 = var6.MemberActionChatInputBannerGuarded;
                        var6 = {};
                        var6.channel = var9;
                        var5 = var8.bind(var3)(var7, var6);
                    case 1333:
                        var4[4] = var5;
                        var0.children = var4;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                }
            };
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 3051, 4188, 1372, 3960, 4198, 11637, 660, 4836, 483, 33, 1297, 671, 4644, 478, 8857, 3901, 1234, 8863, 566, 11892, 14, 3237, 11894, 1307, 4864, 11018, 7330, 11895, 8867, 11896, 4754, 11897, 11636, 11898, 8671, 6430, 3107, 7254, 6658, 5687, 5540, 4786, 11615, 8865, 6442, 9210, 9228, 3238, 3239, 9226, 7406, 4855, 11613, 6995, 11391, 11679, 2]);