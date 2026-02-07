// modules/directory_channels/native/components/GuildDirectoryCreateOrAdd.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var12 = 0;
    var3 = var5[var12];
    var0 = undefined;
    var3 = var11.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var10 = 1;
    var6 = var5[var10];
    var3 = metroImportAll;
    var7 = var3.bind(var0)(var6);
    var _closure1_slot4 = var7;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot5 = var6;
    var6 = var3.ActivityIndicator;
    var _closure1_slot6 = var6;
    var3 = var3.FlatList;
    var _closure1_slot7 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.GuildDirectoryCreate;
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot10 = var6;
    var3 = var3.jsxs;
    var _closure1_slot11 = var3;
    var3 = 6;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var6 = var8.createStyles;
    var3 = {};
    var14 = 'center';
    var9 = {
        'flex': 1,
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var3.loadingContainer = var9;
    var9 = {};
    var9.flex = var10;
    var3.container = var9;
    var9 = {};
    var10 = 7;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.sm;
    var9.borderRadius = var13;
    var3.guildIcon = var9;
    var9 = {};
    var13 = 8;
    var9.height = var13;
    var3.separator = var9;
    var9 = {
        'padding': 16,
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var3.header = var9;
    var9 = {
        'marginBottom': 8,
        'textAlign': 'center'
    };
    var3.title = var9;
    var9 = {};
    var9.textAlign = var14;
    var3.description = var9;
    var9 = {};
    var9.marginLeft = var13;
    var3.closeIcon = var9;
    var9 = {
        'backgroundColor': null,
        'position': 'absolute',
        'bottom': 0,
        'width': '100%'
    };
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOW;
    var9.backgroundColor = var13;
    var3.footerSafeAreaContainer = var9;
    var9 = {
        'paddingHorizontal': 16,
        'height': 110,
        'justifyContent': 'center'
    };
    var3.footerContainer = var9;
    var9 = {
        'alignSelf': 'center',
        'textAlign': 'center',
        'marginBottom': 16
    };
    var3.footerTitle = var9;
    var9 = {};
    var9.flexGrow = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_MOD_SUBTLE;
    var9.backgroundColor = var12;
    var3.footerButton = var9;
    var9 = {
        'paddingHorizontal': null,
        'width': '100%',
        'marginTop': 18
    };
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_12;
    var9.paddingHorizontal = var10;
    var3.segmentedControl = var9;
    var3 = var6.bind(var8)(var3);
    var _closure1_slot12 = var3;
    var6 = var7.memo;
    var3 = function(arg0) { // Environment: var1
        var1 = arg0;
        var11 = var1.guild;
        var _closure2_slot0 = var11;
        var2 = var1.directoryChannelId;
        var _closure2_slot1 = var2;
        var5 = var1.start;
        var4 = var1.end;
        var1 = _closure1_slot12;
        var3 = undefined;
        var12 = var1.bind(var3)();
        var1 = _closure1_slot0;
        var9 = _closure1_slot2;
        var2 = 8;
        var2 = var9[var2];
        var8 = var1.bind(var3)(var2);
        var7 = var8.useStateFromStores;
        var10 = _closure1_slot8;
        var2 = new Array(1);
        var2[0] = var10;
        var0 = function() { // Environment: var0
            var3 = _closure1_slot8;
            var2 = var3.getDirectoryEntry;
            var1 = _closure2_slot1;
            var0 = _closure2_slot0;
            var0 = var0.id;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var8 = var7.bind(var8)(var2, var0);
        var2 = _closure1_slot10;
        var0 = 9;
        var0 = var9[var0];
        var0 = var1.bind(var3)(var0);
        var1 = var0.TableRow;
        var0 = {};
        var7 = var11.name;
        var0.label = var7;
        var7 = _closure1_slot1;
        var6 = 10;
        var6 = var9[var6];
        var10 = var7.bind(var3)(var6);
        var6 = {};
        var12 = var12.guildIcon;
        var6.style = var12;
        var6.guild = var11;
        var6 = var2.bind(var3)(var10, var6);
        var0.icon = var6;
        var6 = 11;
        var6 = var9[var6];
        var7 = var7.bind(var3)(var6);
        var6 = {};
        var6.entry = var8;
        var6 = var2.bind(var3)(var7, var6);
        var0.trailing = var6;
        var0.start = var5;
        var0.end = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var3 = var6.bind(var7)(var3);
    var _closure1_slot13 = var3;
    var6 = var7.memo;
    var3 = function(arg0) { // Environment: var1
        var0 = arg0;
        var11 = var0.guild;
        var _closure2_slot0 = var11;
        var1 = var0.handleItemPress;
        var _closure2_slot1 = var1;
        var5 = var0.start;
        var4 = var0.end;
        var0 = _closure1_slot12;
        var3 = undefined;
        var12 = var0.bind(var3)();
        var2 = _closure1_slot10;
        var7 = _closure1_slot0;
        var8 = _closure1_slot2;
        var6 = 9;
        var0 = var8[var6];
        var0 = var7.bind(var3)(var0);
        var1 = var0.TableRow;
        var0 = {};
        var10 = function() {
            var2 = _closure2_slot1;
            var1 = _closure2_slot0;
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            return var0;
        };
        var0.onPress = var10;
        var10 = var11.name;
        var0.label = var10;
        var10 = _closure1_slot1;
        var9 = 10;
        var9 = var8[var9];
        var10 = var10.bind(var3)(var9);
        var9 = {};
        var12 = var12.guildIcon;
        var9.style = var12;
        var9.guild = var11;
        var9 = var2.bind(var3)(var10, var9);
        var0.icon = var9;
        var6 = var8[var6];
        var6 = var7.bind(var3)(var6);
        var6 = var6.TableRow;
        var7 = var6.Arrow;
        var6 = {};
        var6 = var2.bind(var3)(var7, var6);
        var0.trailing = var6;
        var0.start = var5;
        var0.end = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var3 = var6.bind(var7)(var3);
    var _closure1_slot14 = var3;
    var3 = function arg0() {
        var0 = arg0;
        var17 = var0.directoryGuildName;
        var6 = var0.tabIndex;
        var5 = var0.setTabIndex;
        var0 = _closure1_slot12;
        var3 = undefined;
        var7 = var0.bind(var3)();
        var8 = _closure1_slot0;
        var10 = _closure1_slot2;
        var0 = 12;
        var0 = var10[var0];
        var2 = var8.bind(var3)(var0);
        var1 = var2.useSegmentedControlState;
        var0 = {};
        var9 = 0;
        var0.pageWidth = var9;
        var0.defaultIndex = var6;
        var0.onSetActiveIndex = var5;
        var12 = 13;
        var5 = var10[var12];
        var5 = var8.bind(var3)(var5);
        var9 = var5.intl;
        var6 = var9.string;
        var5 = var10[var12];
        var5 = var8.bind(var3)(var5);
        var5 = var5.t;
        var5 = var5.FTe8HS;
        var5 = var6.bind(var9)(var5);
        var9 = new Array(2);
        var9[0] = var5;
        var5 = var10[var12];
        var5 = var8.bind(var3)(var5);
        var11 = var5.intl;
        var6 = var11.string;
        var5 = var10[var12];
        var5 = var8.bind(var3)(var5);
        var5 = var5.t;
        var5 = var5.epOumr;
        var5 = var6.bind(var11)(var5);
        var9[1] = var5;
        var6 = var9.map;
        var5 = function(arg0) { // Environment: var5
            var1 = arg0;
            var0 = {};
            var0.id = var1;
            var0.label = var1;
            var1 = null;
            var0.page = var1;
            return var0;
        };
        var5 = var6.bind(var9)(var5);
        var0.items = var5;
        var9 = var1.bind(var2)(var0);
        var2 = _closure1_slot11;
        var1 = _closure1_slot5;
        var0 = {};
        var5 = var7.header;
        var0.style = var5;
        var6 = _closure1_slot10;
        var5 = 14;
        var4 = var10[var5];
        var4 = var8.bind(var3)(var4);
        var11 = var4.Text;
        var4 = {
            'style': null,
            'accessibilityRole': 'header',
            'variant': 'heading-xl/extrabold',
            'color': 'mobile-text-heading-primary'
        };
        var13 = var7.title;
        var4.style = var13;
        var13 = var10[var12];
        var13 = var8.bind(var3)(var13);
        var16 = var13.intl;
        var15 = var16.format;
        var13 = var10[var12];
        var13 = var8.bind(var3)(var13);
        var13 = var13.t;
        var14 = var13["9SKJdF"];
        var13 = {};
        var13.guildName = var17;
        var13 = var15.bind(var16)(var14, var13);
        var4.children = var13;
        var11 = var6.bind(var3)(var11, var4);
        var4 = new Array(3);
        var4[0] = var11;
        var5 = var10[var5];
        var5 = var8.bind(var3)(var5);
        var11 = var5.Text;
        var5 = {
            'style': null,
            'variant': 'text-sm/medium',
            'color': 'text-default'
        };
        var13 = var7.description;
        var5.style = var13;
        var13 = var10[var12];
        var13 = var8.bind(var3)(var13);
        var14 = var13.intl;
        var13 = var14.string;
        var12 = var10[var12];
        var12 = var8.bind(var3)(var12);
        var12 = var12.t;
        var12 = var12.pYFZ9p;
        var12 = var13.bind(var14)(var12);
        var5.children = var12;
        var5 = var6.bind(var3)(var11, var5);
        var4[1] = var5;
        var5 = {};
        var7 = var7.segmentedControl;
        var5.style = var7;
        var7 = 15;
        var7 = var10[var7];
        var7 = var8.bind(var3)(var7);
        var8 = var7.SegmentedControl;
        var7 = {};
        var7.state = var9;
        var7 = var6.bind(var3)(var8, var7);
        var5.children = var7;
        var5 = var6.bind(var3)(var1, var5);
        var4[2] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot15 = var3;
    var3 = function arg0() {
        var0 = arg0;
        var9 = var0.handleFooterPress;
        var0 = _closure1_slot12;
        var3 = undefined;
        var8 = var0.bind(var3)();
        var1 = _closure1_slot1;
        var14 = _closure1_slot2;
        var0 = 16;
        var0 = var14[var0];
        var0 = var1.bind(var3)(var0);
        var0 = var0.bind(var3)();
        var7 = var0.bottom;
        var2 = _closure1_slot10;
        var1 = _closure1_slot5;
        var0 = {};
        var5 = var8.footerSafeAreaContainer;
        var4 = new Array(2);
        var4[0] = var5;
        var5 = {};
        var5.paddingBottom = var7;
        var4[1] = var5;
        var0.style = var4;
        var5 = _closure1_slot11;
        var4 = {};
        var7 = var8.footerContainer;
        var4.style = var7;
        var13 = _closure1_slot0;
        var6 = 14;
        var6 = var14[var6];
        var6 = var13.bind(var3)(var6);
        var7 = var6.Text;
        var6 = {
            'style': null,
            'variant': 'heading-lg/semibold',
            'color': 'mobile-text-heading-primary'
        };
        var8 = var8.footerTitle;
        var6.style = var8;
        var10 = 13;
        var8 = var14[var10];
        var8 = var13.bind(var3)(var8);
        var12 = var8.intl;
        var11 = var12.string;
        var8 = var14[var10];
        var8 = var13.bind(var3)(var8);
        var8 = var8.t;
        var8 = var8.pgCZRP;
        var8 = var11.bind(var12)(var8);
        var6.children = var8;
        var7 = var2.bind(var3)(var7, var6);
        var6 = new Array(2);
        var6[0] = var7;
        var7 = 17;
        var7 = var14[var7];
        var7 = var13.bind(var3)(var7);
        var8 = var7.Button;
        var7 = {};
        var11 = 'secondary';
        var7.variant = var11;
        var11 = var14[var10];
        var11 = var13.bind(var3)(var11);
        var12 = var11.intl;
        var11 = var12.string;
        var10 = var14[var10];
        var10 = var13.bind(var3)(var10);
        var10 = var10.t;
        var10 = var10.WqJbLi;
        var10 = var11.bind(var12)(var10);
        var7.text = var10;
        var7.onPress = var9;
        var7 = var2.bind(var3)(var8, var7);
        var6[1] = var7;
        var4.children = var6;
        var4 = var5.bind(var3)(var1, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot16 = var3;
    var3 = 22;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/directory_channels/native/components/GuildDirectoryCreateOrAdd.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun72012: for (var _fun72012_ip = 0;;) switch (_fun72012_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var0 = _closure1_slot12;
                var4 = undefined;
                var6 = var0.bind(var4)();
                var3 = _closure1_slot0;
                var10 = _closure1_slot2;
                var0 = 18;
                var0 = var10[var0];
                var3 = var3.bind(var4)(var0);
                var0 = var3.useNavigation;
                var3 = var0.bind(var3)();
                var _closure2_slot1 = var3;
                var7 = _closure1_slot4;
                var0 = var7.useRef;
                var2 = var0.bind(var7)(var2);
                var _closure2_slot2 = var2;
                var8 = _closure1_slot1;
                var0 = 19;
                var0 = var10[var0];
                var0 = var8.bind(var4)(var0);
                var0 = var0.bind(var4)(var2);
                var9 = var7.useEffect;
                var2 = function() { // Environment: var1
                    var1 = _closure2_slot2;
                    var0 = _closure2_slot0;
                    var1.current = var0;
                    var0 = undefined;
                    return var0;
                };
                var2 = var9.bind(var7)(var2);
                var2 = 20;
                var2 = var10[var2];
                var9 = var8.bind(var4)(var2);
                var2 = var0.directoryGuildId;
                var0 = var0.directoryChannelId;
                var0 = var9.bind(var4)(var2, var0);
                var9 = var0.availableGuilds;
                var _closure2_slot3 = var9;
                var12 = var0.addedGuilds;
                var _closure2_slot4 = var12;
                var0 = var0.loading;
                var2 = 16;
                var2 = var10[var2];
                var2 = var8.bind(var4)(var2);
                var2 = var2.bind(var4)();
                var8 = var2.bottom;
                var _closure2_slot5 = var8;
                var10 = var7.useState;
                var2 = 0;
                var13 = var10.bind(var7)(var2);
                var11 = _closure1_slot3;
                var10 = 2;
                var11 = var11.bind(var4)(var13, var10);
                var2 = var11[var2];
                var _closure2_slot6 = var2;
                var10 = 1;
                var10 = var11[var10];
                var _closure2_slot7 = var10;
                var11 = var7.useMemo;
                var10 = new Array(3);
                var10[0] = var12;
                var10[1] = var9;
                var10[2] = var2;
                var9 = function() { // Environment: var1
                    _fun72014: for (var _fun72014_ip = 0;;) switch (_fun72014_ip) {
                        case 0:
                            var2 = _closure2_slot6;
                            var0 = 0;
                            if (!(var0 !== var2)) {
                                _fun72014_ip = 19;
                                continue _fun72014
                            }
                        case 13:
                            var0 = _closure2_slot4;
                            _fun72014_ip = 23;
                            continue _fun72014;
                        case 19:
                            var0 = _closure2_slot3;
                        case 23:
                            return var0;
                    }
                };
                var15 = var11.bind(var7)(var9, var10);
                var _closure2_slot8 = var15;
                var11 = var7.useCallback;
                var10 = new Array(1);
                var10[0] = var3;
                var9 = function() { // Environment: var1
                    var3 = _closure2_slot1;
                    var2 = var3.push;
                    var0 = _closure1_slot9;
                    var1 = var0.TEMPLATES;
                    var0 = {};
                    var4 = _closure2_slot2;
                    var4 = var4.current;
                    var4 = var4.directoryGuildName;
                    var0.directoryGuildName = var4;
                    var4 = function arg0, arg1, arg2() {
                        var3 = _closure2_slot1;
                        var2 = var3.push;
                        var0 = _closure1_slot9;
                        var1 = var0.DESCRIPTION;
                        var0 = {};
                        var5 = {};
                        var6 = arg0;
                        var5.name = var6;
                        var6 = arg1;
                        var5.icon = var6;
                        var6 = arg2;
                        var5.template = var6;
                        var0.createGuild = var5;
                        var4 = _closure2_slot2;
                        var5 = var4.current;
                        var5 = var5.directoryChannelId;
                        var0.directoryChannelId = var5;
                        var4 = var4.current;
                        var4 = var4.directoryGuildName;
                        var0.directoryGuildName = var4;
                        var0 = var2.bind(var3)(var1, var0);
                        var0 = undefined;
                        return var0;
                    };
                    var0.onHubGuildInfoSet = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    var0 = undefined;
                    return var0;
                };
                var12 = var11.bind(var7)(var9, var10);
                var10 = var7.useCallback;
                var11 = var15.length;
                var9 = new Array(3);
                var9[0] = var11;
                var9[1] = var3;
                var9[2] = var2;
                var3 = function(arg0) { // Environment: var1
                    _fun72017: for (var _fun72017_ip = 0;;) switch (_fun72017_ip) {
                        case 0:
                            var1 = arg0;
                            var0 = var1.item;
                            var3 = var1.index;
                            var5 = {};
                            var5.guild = var0;
                            var0 = 0;
                            var0 = var0 === var3;
                            var5.start = var0;
                            var0 = _closure2_slot8;
                            var0 = var0.length;
                            var2 = 1;
                            var0 = var0 - var2;
                            var0 = var3 === var0;
                            var5.end = var0;
                            var0 = _closure2_slot6;
                            if (!(var2 !== var0)) {
                                _fun72017_ip = 117;
                                continue _fun72017
                            }
                        case 64:
                            var4 = _closure1_slot10;
                            var3 = _closure1_slot14;
                            var2 = {};
                            var8 = var2;
                            var7 = var5;
                            var0 = copyDataProperties(var8, var7);
                            var6 = function arg0() {
                                var3 = _closure2_slot1;
                                var2 = var3.push;
                                var0 = _closure1_slot9;
                                var1 = var0.DESCRIPTION;
                                var0 = {};
                                var5 = arg0;
                                var0.guild = var5;
                                var4 = _closure2_slot2;
                                var5 = var4.current;
                                var5 = var5.directoryChannelId;
                                var0.directoryChannelId = var5;
                                var4 = var4.current;
                                var4 = var4.directoryGuildName;
                                var0.directoryGuildName = var4;
                                var0 = var2.bind(var3)(var1, var0);
                                var0 = undefined;
                                return var0;
                            };
                            var0 = 'handleItemPress';
                            var2[var0] = var6;
                            var0 = undefined;
                            var0 = var4.bind(var0)(var3, var2);
                            _fun72017_ip = 172;
                            continue _fun72017;
                        case 117:
                            var4 = _closure1_slot10;
                            var3 = _closure1_slot13;
                            var2 = {};
                            var8 = var2;
                            var7 = var5;
                            var5 = copyDataProperties(var8, var7);
                            var1 = _closure2_slot2;
                            var1 = var1.current;
                            var5 = var1.directoryChannelId;
                            var1 = 'directoryChannelId';
                            var2[var1] = var5;
                            var1 = undefined;
                            var0 = var4.bind(var1)(var3, var2);
                        case 172:
                            return var0;
                    }
                };
                var13 = var10.bind(var7)(var3, var9);
                var9 = var7.useCallback;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = function() { // Environment: var1
                    var3 = _closure1_slot10;
                    var2 = _closure1_slot15;
                    var1 = {};
                    var4 = _closure2_slot2;
                    var4 = var4.current;
                    var4 = var4.directoryGuildName;
                    var1.directoryGuildName = var4;
                    var4 = _closure2_slot6;
                    var1.tabIndex = var4;
                    var0 = _closure2_slot7;
                    var1.setTabIndex = var0;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var14 = var9.bind(var7)(var2, var3);
                var3 = var7.useMemo;
                var2 = new Array(1);
                var2[0] = var8;
                var1 = function() { // Environment: var1
                    var0 = {};
                    var1 = 16;
                    var0.paddingHorizontal = var1;
                    var2 = _closure2_slot5;
                    var1 = 110;
                    var2 = var1 + var2;
                    var1 = 8;
                    var1 = var2 + var1;
                    var0.paddingBottom = var1;
                    return var0;
                };
                var11 = var3.bind(var7)(var1, var2);
                var3 = _closure1_slot10;
                if (var0) {
                    _fun72012_ip = 531;
                    continue _fun72012
                }
            case 402:
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 21;
                var0 = var2[var0];
                var0 = var1.bind(var4)(var0);
                var1 = var0.GuildDirectoryAddModalScreen;
                var0 = {};
                var8 = _closure1_slot11;
                var7 = _closure1_slot5;
                var2 = {};
                var9 = var6.container;
                var2.style = var9;
                var10 = _closure1_slot7;
                var9 = {};
                var9.data = var15;
                var9.ListHeaderComponent = var14;
                var9.renderItem = var13;
                var9.contentContainerStyle = var11;
                var10 = var3.bind(var4)(var10, var9);
                var9 = new Array(2);
                var9[0] = var10;
                var11 = _closure1_slot16;
                var10 = {};
                var10.handleFooterPress = var12;
                var10 = var3.bind(var4)(var11, var10);
                var9[1] = var10;
                var2.children = var9;
                var2 = var8.bind(var4)(var7, var2);
                var0.children = var2;
                var0 = var3.bind(var4)(var1, var0);
                _fun72012_ip = 569;
                continue _fun72012;
            case 531:
                var2 = _closure1_slot5;
                var1 = {};
                var6 = var6.loadingContainer;
                var1.style = var6;
                var6 = _closure1_slot6;
                var5 = {};
                var5 = var3.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 569:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 9008, 9006, 33, 1297, 671, 566, 4900, 7464, 9009, 7866, 1234, 3942, 8260, 1568, 4084, 1469, 4737, 9018, 9005, 2]);