// modules/directory_channels/native/components/GuildDirectory.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var7 = metroImportAll;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var7;
    var _closure1_slot3 = var5;
    var0 = function(arg0) { // Original name: GuildDirectoryHeaderRowItem, environment: var1
        var0 = arg0;
        var4 = var0.children;
        var1 = _closure1_slot23;
        var3 = undefined;
        var5 = var1.bind(var3)();
        var2 = _closure1_slot19;
        var1 = _closure1_slot0;
        var6 = _closure1_slot3;
        var0 = 15;
        var0 = var6[var0];
        var0 = var1.bind(var3)(var0);
        var1 = var0.Text;
        var0 = {
            'style': null,
            'variant': 'text-md/semibold',
            'color': 'mobile-text-heading-primary'
        };
        var5 = var5.categorySectionText;
        var0.style = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot28 = var0;
    var3 = global;
    var9 = var3.Object;
    var8 = var9.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var6);
    var0 = 0;
    var6 = var5[var0];
    var0 = undefined;
    var6 = var7.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var6 = 1;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var7 = var6.View;
    var _closure1_slot5 = var7;
    var7 = var6.Image;
    var _closure1_slot6 = var7;
    var9 = var6.StyleSheet;
    var6 = var6.SectionList;
    var _closure1_slot7 = var6;
    var6 = 2;
    var6 = var5[var6];
    var6 = var10.bind(var0)(var6);
    var _closure1_slot8 = var6;
    var6 = 3;
    var6 = var5[var6];
    var6 = var10.bind(var0)(var6);
    var _closure1_slot9 = var6;
    var6 = 4;
    var6 = var5[var6];
    var6 = var10.bind(var0)(var6);
    var _closure1_slot10 = var6;
    var6 = 5;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.DirectoryEntryCategories;
    var _closure1_slot11 = var6;
    var6 = 6;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var11 = var6.GUILD_DIRECTORY_BASE_HEADER_HEIGHT;
    var _closure1_slot12 = var11;
    var7 = var6.GUILD_DIRECTORY_PROGRESS_BAR_HEIGHT;
    var _closure1_slot13 = var7;
    var6 = var6.DirectoryChannelScrollBehavior;
    var _closure1_slot14 = var6;
    var6 = 7;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var7 = var6.AnalyticsObjectTypes;
    var _closure1_slot15 = var7;
    var7 = var6.AnalyticsObjects;
    var _closure1_slot16 = var7;
    var7 = var6.AnalyticEvents;
    var _closure1_slot17 = var7;
    var6 = var6.GuildFeatures;
    var _closure1_slot18 = var6;
    var6 = 8;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var7 = var6.jsx;
    var _closure1_slot19 = var7;
    var7 = var6.jsxs;
    var _closure1_slot20 = var7;
    var6 = var6.Fragment;
    var _closure1_slot21 = var6;
    var6 = var3.Array;
    var3 = 20;
    var7 = var6.bind(var0)(var3);
    var6 = var7.fill;
    var3 = null;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot22 = var3;
    var3 = 9;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = var9.hairlineWidth;
    var8.height = var9;
    var9 = 10;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BASE_LOWEST;
    var8.backgroundColor = var12;
    var3.border = var8;
    var8 = {};
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BASE_LOW;
    var8.backgroundColor = var12;
    var3.list = var8;
    var8 = {};
    var12 = 'hidden';
    var8.overflow = var12;
    var8.height = var11;
    var3.headerWrapper = var8;
    var8 = {
        'resizeMode': 'cover',
        'width': '100%'
    };
    var3.backgroundImage = var8;
    var8 = {
        'position': 'absolute',
        'bottom': 0,
        'left': 0,
        'right': 0,
        'padding': 16,
        'alignContent': 'center'
    };
    var3.textWrapper = var8;
    var8 = {
        'textAlign': 'center',
        'marginBottom': 8
    };
    var3.headerTitle = var8;
    var8 = {
        'lineHeight': 18,
        'textAlign': 'center',
        'paddingHorizontal': 20,
        'marginBottom': 72
    };
    var3.headerDescription = var8;
    var8 = {
        'flexDirection': 'row',
        'padding': 16,
        'alignItems': 'center'
    };
    var3.footer = var8;
    var8 = {
        'marginRight': 16,
        'height': 40,
        'width': 40,
        'alignItems': 'center',
        'justifyContent': 'center',
        'borderRadius': 20
    };
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_BASE_LOWEST;
    var8.backgroundColor = var9;
    var3.addIcon = var8;
    var8 = {
        'padding': 16,
        'paddingBottom': 4
    };
    var3.categorySectionText = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot23 = var3;
    var3 = function(arg0, arg1) { // Original name: keyExtractor, environment: var1
        _fun91617: for (var _fun91617_ip = 0;;) switch (_fun91617_ip) {
            case 0:
                var1 = arg0;
                var2 = arg1;
                var0 = null;
                var4 = var0 == var1;
                var3 = undefined;
                var5 = undefined;
                if (var4) {
                    _fun91617_ip = 24;
                    continue _fun91617
                }
            case 19:
                var5 = var1.type;
            case 24:
                var6 = _closure1_slot0;
                var7 = _closure1_slot3;
                var4 = 12;
                var4 = var7[var4];
                var4 = var6.bind(var3)(var4);
                var4 = var4.RowType;
                var4 = var4.ENTRY;
                if (!(var5 !== var4)) {
                    _fun91617_ip = 111;
                    continue _fun91617
                }
            case 63:
                var0 = var0 == var1;
                var4 = undefined;
                if (var0) {
                    _fun91617_ip = 77;
                    continue _fun91617
                }
            case 72:
                var4 = var1.type;
            case 77:
                var0 = var2.toString;
                var3 = var0.bind(var2)();
                var0 = global;
                var0 = var0.HermesInternal;
                var2 = var0.concat;
                var0 = '';
                var0 = var2.bind(var0)(var4, var3);
                _fun91617_ip = 122;
                continue _fun91617;
            case 111:
                var1 = var1.entry;
                var0 = var1.guildId;
            case 122:
                return var0;
        }
    };
    var _closure1_slot24 = var3;
    var3 = function(arg0) { // Original name: renderItem, environment: var1
        _fun91618: for (var _fun91618_ip = 0;;) switch (_fun91618_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.item;
                var0 = null;
                var0 = var0 == var4;
                var3 = undefined;
                var2 = undefined;
                if (var0) {
                    _fun91618_ip = 26;
                    continue _fun91618
                }
            case 21:
                var2 = var4.type;
            case 26:
                var5 = _closure1_slot0;
                var1 = _closure1_slot3;
                var6 = 12;
                var1 = var1[var6];
                var1 = var5.bind(var3)(var1);
                var1 = var1.RowType;
                var1 = var1.HEADER;
                if (!(var1 !== var2)) {
                    _fun91618_ip = 177;
                    continue _fun91618
                }
            case 65:
                var5 = _closure1_slot0;
                var1 = _closure1_slot3;
                var1 = var1[var6];
                var1 = var5.bind(var3)(var1);
                var1 = var1.RowType;
                var1 = var1.ENTRY;
                if (!(var1 !== var2)) {
                    _fun91618_ip = 132;
                    continue _fun91618
                }
            case 98:
                var5 = _closure1_slot19;
                var2 = _closure1_slot1;
                var6 = _closure1_slot3;
                var1 = 14;
                var1 = var6[var1];
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var1 = var5.bind(var3)(var2, var1);
                return var1;
            case 132:
                var5 = _closure1_slot19;
                var2 = _closure1_slot1;
                var6 = _closure1_slot3;
                var1 = 13;
                var1 = var6[var1];
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var6 = var4.entry;
                var1.entry = var6;
                var1 = var5.bind(var3)(var2, var1);
                return var1;
            case 177:
                var2 = _closure1_slot19;
                var1 = _closure1_slot28;
                var0 = {};
                var4 = var4.header;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot25 = var3;
    var3 = function(arg0) { // Original name: GuildDirectoryHeader, environment: var1
        _fun91619: for (var _fun91619_ip = 0;;) switch (_fun91619_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.guild;
                var17 = var0.onPressSearch;
                var0 = _closure1_slot23;
                var3 = undefined;
                var19 = var0.bind(var3)();
                var2 = var9.features;
                var1 = var2.has;
                var0 = _closure1_slot18;
                var0 = var0.HUB;
                var7 = var1.bind(var2)(var0);
                var2 = _closure1_slot20;
                var1 = _closure1_slot21;
                var0 = {};
                var5 = _closure1_slot5;
                var4 = {};
                var8 = var19.headerWrapper;
                var4.style = var8;
                var11 = _closure1_slot19;
                var10 = _closure1_slot6;
                var8 = {};
                var13 = _closure1_slot0;
                var15 = _closure1_slot3;
                var12 = 16;
                var12 = var15[var12];
                var12 = var13.bind(var3)(var12);
                var8.source = var12;
                var12 = var19.backgroundImage;
                var8.style = var12;
                var10 = var11.bind(var3)(var10, var8);
                var8 = new Array(2);
                var8[0] = var10;
                var10 = {};
                var11 = var19.textWrapper;
                var10.style = var11;
                var16 = _closure1_slot19;
                var12 = 15;
                var11 = var15[var12];
                var11 = var13.bind(var3)(var11);
                var14 = var11.Text;
                var11 = {
                    'style': null,
                    'variant': 'heading-xl/extrabold',
                    'color': 'always-white'
                };
                var18 = var19.headerTitle;
                var11.style = var18;
                var18 = 17;
                var20 = var15[var18];
                var20 = var13.bind(var3)(var20);
                var22 = var20.intl;
                var21 = var22.string;
                var20 = var15[var18];
                var20 = var13.bind(var3)(var20);
                var20 = var20.t;
                var20 = var20.IT7qoC;
                var20 = var21.bind(var22)(var20);
                var11.children = var20;
                var14 = var16.bind(var3)(var14, var11);
                var11 = new Array(4);
                var11[0] = var14;
                var16 = _closure1_slot19;
                var12 = var15[var12];
                var12 = var13.bind(var3)(var12);
                var14 = var12.Text;
                var12 = {
                    'style': null,
                    'variant': 'text-sm/medium',
                    'color': 'always-white'
                };
                var20 = var19.headerDescription;
                var19 = new Array(1);
                var19[0] = var20;
                var12.style = var19;
                var19 = var15[var18];
                var19 = var13.bind(var3)(var19);
                var21 = var19.intl;
                var20 = var21.string;
                var19 = var15[var18];
                var19 = var13.bind(var3)(var19);
                var19 = var19.t;
                var19 = var19["5PoYts"];
                var19 = var20.bind(var21)(var19);
                var12.children = var19;
                var12 = var16.bind(var3)(var14, var12);
                var11[1] = var12;
                var16 = _closure1_slot19;
                var12 = 18;
                var12 = var15[var12];
                var12 = var13.bind(var3)(var12);
                var14 = var12.Button;
                var12 = {};
                var19 = 'primary-overlay';
                var12.variant = var19;
                var21 = _closure1_slot19;
                var19 = 19;
                var19 = var15[var19];
                var19 = var13.bind(var3)(var19);
                var20 = var19.MagnifyingGlassIcon;
                var19 = {
                    'size': 'sm',
                    'color': 'text-strong'
                };
                var19 = var21.bind(var3)(var20, var19);
                var12.icon = var19;
                var19 = var15[var18];
                var19 = var13.bind(var3)(var19);
                var20 = var19.intl;
                var19 = var20.string;
                var18 = var15[var18];
                var18 = var13.bind(var3)(var18);
                var18 = var18.t;
                var18 = var18.nL2wKD;
                var18 = var19.bind(var20)(var18);
                var12.text = var18;
                var12.onPress = var17;
                var12 = var16.bind(var3)(var14, var12);
                var11[2] = var12;
                var14 = _closure1_slot19;
                var12 = 20;
                var12 = var15[var12];
                var12 = var13.bind(var3)(var12);
                var13 = var12.TTIFirstContentfulPaint;
                var12 = {};
                var15 = 'hub_directory';
                var12.label = var15;
                var12 = var14.bind(var3)(var13, var12);
                var11[3] = var12;
                var10.children = var11;
                var10 = var2.bind(var3)(var5, var10);
                var8[1] = var10;
                var4.children = var8;
                var5 = var2.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var5 = null;
                if (!var7) {
                    _fun91619_ip = 641;
                    continue _fun91619
                }
            case 598:
                var8 = _closure1_slot19;
                var7 = _closure1_slot1;
                var10 = _closure1_slot3;
                var6 = 21;
                var6 = var10[var6];
                var7 = var7.bind(var3)(var6);
                var6 = {};
                var6.guild = var9;
                var9 = true;
                var6.onDirectoryPage = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 641:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot26 = var3;
    var3 = function(arg0) { // Original name: GuildDirectoryFooter, environment: var1
        _fun91620: for (var _fun91620_ip = 0;;) switch (_fun91620_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.guild;
                var _closure2_slot0 = var1;
                var3 = var0.channel;
                var _closure2_slot1 = var3;
                var1 = var0.hideFooter;
                var0 = _closure1_slot23;
                var4 = undefined;
                var11 = var0.bind(var4)();
                var2 = _closure1_slot0;
                var6 = _closure1_slot3;
                var0 = 22;
                var0 = var6[var0];
                var2 = var2.bind(var4)(var0);
                var0 = var2.useCanCreateOrAddGuildInDirectory;
                var3 = var0.bind(var2)(var3);
                var0 = null;
                if (!var3) {
                    _fun91620_ip = 388;
                    continue _fun91620
                }
            case 81:
                var0 = null;
                if (var1) {
                    _fun91620_ip = 388;
                    continue _fun91620
                }
            case 89:
                var3 = _closure1_slot19;
                var15 = _closure1_slot0;
                var16 = _closure1_slot3;
                var1 = 23;
                var1 = var16[var1];
                var1 = var15.bind(var4)(var1);
                var2 = var1.PressableOpacity;
                var1 = {};
                var6 = 'button';
                var1.accessibilityRole = var6;
                var12 = 17;
                var6 = var16[var12];
                var6 = var15.bind(var4)(var6);
                var8 = var6.intl;
                var7 = var8.string;
                var6 = var16[var12];
                var6 = var15.bind(var4)(var6);
                var6 = var6.t;
                var6 = var6.H9jxS1;
                var6 = var7.bind(var8)(var6);
                var1.accessibilityLabel = var6;
                var5 = function() { // Original name: onPress, environment: var5
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot3;
                    var0 = 24;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.open;
                    var0 = {};
                    var4 = _closure2_slot0;
                    var5 = var4.name;
                    var0.directoryGuildName = var5;
                    var4 = var4.id;
                    var0.directoryGuildId = var4;
                    var3 = _closure2_slot1;
                    var3 = var3.id;
                    var0.directoryChannelId = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1.onPress = var5;
                var7 = _closure1_slot20;
                var6 = _closure1_slot5;
                var5 = {};
                var8 = var11.footer;
                var5.style = var8;
                var10 = _closure1_slot19;
                var8 = {};
                var11 = var11.addIcon;
                var8.style = var11;
                var14 = _closure1_slot19;
                var11 = 25;
                var11 = var16[var11];
                var11 = var15.bind(var4)(var11);
                var13 = var11.PlusMediumIcon;
                var11 = {};
                var11 = var14.bind(var4)(var13, var11);
                var8.children = var11;
                var10 = var10.bind(var4)(var6, var8);
                var8 = new Array(2);
                var8[0] = var10;
                var11 = _closure1_slot19;
                var9 = 15;
                var9 = var16[var9];
                var9 = var15.bind(var4)(var9);
                var10 = var9.Text;
                var9 = {
                    'variant': 'text-md/semibold',
                    'color': 'mobile-text-heading-primary'
                };
                var13 = var16[var12];
                var13 = var15.bind(var4)(var13);
                var14 = var13.intl;
                var13 = var14.string;
                var12 = var16[var12];
                var12 = var15.bind(var4)(var12);
                var12 = var12.t;
                var12 = var12.H9jxS1;
                var12 = var13.bind(var14)(var12);
                var9.children = var12;
                var9 = var11.bind(var4)(var10, var9);
                var8[1] = var9;
                var5.children = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 388:
                return var0;
        }
    };
    var _closure1_slot27 = var3;
    var3 = 37;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/directory_channels/native/components/GuildDirectory.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: _default, environment: var1
        _fun91622: for (var _fun91622_ip = 0;;) switch (_fun91622_ip) {
            case 0:
                var0 = arg0;
                var17 = var0.channel;
                var _closure2_slot0 = var17;
                var0 = var0.guildId;
                var _closure2_slot1 = var0;
                var5 = undefined;
                var _closure2_slot14 = var5;
                var0 = _closure1_slot23;
                var10 = var0.bind(var5)();
                var7 = _closure1_slot0;
                var16 = _closure1_slot3;
                var1 = 26;
                var0 = var16[var1];
                var4 = var7.bind(var5)(var0);
                var3 = var4.useStateFromStores;
                var0 = _closure1_slot8;
                var2 = new Array(1);
                var2[0] = var0;
                var0 = function() { // Environment: var8
                    var2 = _closure1_slot8;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot1;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var15 = var3.bind(var4)(var2, var0);
                var _closure2_slot2 = var15;
                var14 = _closure1_slot4;
                var2 = var14.useRef;
                var0 = null;
                var2 = var2.bind(var14)(var0);
                var _closure2_slot3 = var2;
                var3 = _closure1_slot1;
                var2 = 27;
                var2 = var16[var2];
                var2 = var3.bind(var5)(var2);
                var2 = var2.bind(var5)();
                var13 = var2.bottom;
                var2 = 11;
                var3 = var16[var2];
                var4 = var7.bind(var5)(var3);
                var3 = var4.useHubProgressBarCompletedSteps;
                var4 = var3.bind(var4)(var15);
                var2 = var16[var2];
                var3 = var7.bind(var5)(var2);
                var2 = var3.getNextHubProgressStep;
                var2 = var2.bind(var3)(var4);
                if (!(var0 != var2)) {
                    _fun91622_ip = 200;
                    continue _fun91622
                }
            case 186:
                var3 = _closure1_slot13;
                var2 = _closure1_slot12;
                var2 = var3 + var2;
                _fun91622_ip = 204;
                continue _fun91622;
            case 200:
                var2 = _closure1_slot12;
            case 204:
                var _closure2_slot4 = var2;
                var1 = var16[var1];
                var4 = var7.bind(var5)(var1);
                var3 = var4.useStateFromStoresObject;
                var1 = _closure1_slot10;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var8
                    _fun91624: for (var _fun91624_ip = 0;;) switch (_fun91624_ip) {
                        case 0:
                            var7 = _closure1_slot10;
                            var4 = var7.getCurrentCategoryId;
                            var2 = _closure2_slot0;
                            var3 = var2.id;
                            var4 = var4.bind(var7)(var3);
                            var5 = var7.getDirectoryEntries;
                            var3 = var2.id;
                            var2 = _closure1_slot11;
                            var8 = var2.ALL;
                            var6 = null;
                            var2 = null;
                            if (!(var4 !== var8)) {
                                _fun91624_ip = 62;
                                continue _fun91624
                            }
                        case 59:
                            var2 = var4;
                        case 62:
                            var5 = var5.bind(var7)(var3, var2);
                            var7 = _closure1_slot10;
                            var2 = var7.getDirectoryAllEntriesCount;
                            var0 = _closure2_slot0;
                            var1 = var0.id;
                            var2 = var2.bind(var7)(var1);
                            var1 = var7.getDirectoryCategoryCounts;
                            var0 = var0.id;
                            var1 = var1.bind(var7)(var0);
                            var0 = {};
                            var0.currentCategoryId = var4;
                            var0.directoryEntries = var5;
                            var3 = var7.isFetching;
                            var3 = var3.bind(var7)();
                            if (var3) {
                                _fun91624_ip = 151;
                                continue _fun91624
                            }
                        case 137:
                            var4 = var6 === var4;
                            if (!var4) {
                                _fun91624_ip = 148;
                                continue _fun91624
                            }
                        case 144:
                            var4 = var6 == var5;
                        case 148:
                            var3 = var4;
                        case 151:
                            var0.directoryIsFetching = var3;
                            var0.allEntriesCount = var2;
                            var0.categoryCounts = var1;
                            return var0;
                    }
                };
                var6 = var3.bind(var4)(var2, var1);
                var4 = var6.currentCategoryId;
                var _closure2_slot5 = var4;
                var1 = var6.directoryEntries;
                var _closure2_slot6 = var1;
                var3 = var6.directoryIsFetching;
                var _closure2_slot7 = var3;
                var2 = var6.allEntriesCount;
                var _closure2_slot8 = var2;
                var6 = var6.categoryCounts;
                var _closure2_slot9 = var6;
                var12 = var14.useEffect;
                var11 = new Array(2);
                var11[0] = var1;
                var11[1] = var3;
                var6 = function() { // Environment: var8
                    _fun91625: for (var _fun91625_ip = 0;;) switch (_fun91625_ip) {
                        case 0:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var0 = 28;
                            var2 = var3[var0];
                            var0 = undefined;
                            var4 = var4.bind(var0)(var2);
                            var2 = var4.trackAppUIViewed;
                            var2 = var2.bind(var4)();
                            var2 = _closure1_slot1;
                            var1 = 29;
                            var1 = var3[var1];
                            var4 = var2.bind(var0)(var1);
                            var3 = var4.recordRender;
                            var1 = global;
                            var6 = var1.Object;
                            var5 = var6.keys;
                            var7 = _closure2_slot6;
                            var2 = null;
                            if (!(var2 == var7)) {
                                _fun91625_ip = 87;
                                continue _fun91625
                            }
                        case 83:
                            var2 = {};
                            _fun91625_ip = 91;
                            continue _fun91625;
                        case 87:
                            var2 = _closure2_slot6;
                        case 91:
                            var2 = var5.bind(var6)(var2);
                            var2 = var2.length;
                            var1 = _closure2_slot7;
                            var1 = !var1;
                            var1 = var3.bind(var4)(var2, var1);
                            return var0;
                    }
                };
                var6 = var12.bind(var14)(var6, var11);
                var12 = var14.useEffect;
                var6 = var17.id;
                var11 = new Array(1);
                var11[0] = var6;
                var6 = function() { // Environment: var8
                    var0 = function() { // Environment: var0
                        _fun91627: for (var _fun91627_ip = 0;;) switch (_fun91627_ip) {
                            case 0:
                                var4 = _closure1_slot9;
                                var3 = var4.lastMessageId;
                                var2 = _closure2_slot0;
                                var2 = var2.id;
                                var5 = var3.bind(var4)(var2);
                                var2 = null;
                                if (!(var2 != var5)) {
                                    _fun91627_ip = 122;
                                    continue _fun91627
                                }
                            case 36:
                                var4 = _closure1_slot0;
                                var3 = _closure1_slot3;
                                var2 = 30;
                                var3 = var3[var2];
                                var2 = undefined;
                                var4 = var4.bind(var2)(var3);
                                var3 = var4.ack;
                                var1 = _closure2_slot0;
                                var11 = var1.id;
                                var1 = {};
                                var6 = _closure1_slot16;
                                var6 = var6.ACK_GUILD_DIRECTORY_CHANNEL_VIEWED;
                                var1.object = var6;
                                var0 = _closure1_slot15;
                                var0 = var0.ACK_AUTOMATIC;
                                var1.objectType = var0;
                                var12 = var4;
                                var10 = var1;
                                var9 = true;
                                var8 = true;
                                var7 = var5;
                                var0 = var12[var3](var11, var10, var9, var8, var7, var6);
                            case 122:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    return var0;
                };
                var6 = var12.bind(var14)(var6, var11);
                var11 = var14.useMemo;
                var6 = new Array(3);
                var6[0] = var3;
                var6[1] = var1;
                var6[2] = var4;
                var1 = function() { // Environment: var8
                    _fun91628: for (var _fun91628_ip = 0;;) switch (_fun91628_ip) {
                        case 0:
                            var0 = _closure2_slot7;
                            if (var0) {
                                _fun91628_ip = 96;
                                continue _fun91628
                            }
                        case 10:
                            var2 = _closure2_slot6;
                            var0 = null;
                            if (!(var0 == var2)) {
                                _fun91628_ip = 26;
                                continue _fun91628
                            }
                        case 20:
                            var0 = new Array(0);
                            _fun91628_ip = 94;
                            continue _fun91628;
                        case 26:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var2 = 12;
                            var3 = var3[var2];
                            var2 = undefined;
                            var5 = var4.bind(var2)(var3);
                            var4 = var5.generateDirectoryRows;
                            var3 = _closure2_slot7;
                            var2 = global;
                            var7 = var2.Object;
                            var6 = var7.values;
                            var2 = _closure2_slot6;
                            var2 = var6.bind(var7)(var2);
                            var1 = _closure2_slot5;
                            var0 = var4.bind(var5)(var3, var2, var1);
                        case 94:
                            _fun91628_ip = 103;
                            continue _fun91628;
                        case 96:
                            var0 = _closure1_slot22;
                        case 103:
                            return var0;
                    }
                };
                var11 = var11.bind(var14)(var1, var6);
                var1 = var14.useRef;
                var12 = var1.bind(var14)(var0);
                var _closure2_slot10 = var12;
                var6 = var14.useRef;
                var1 = 0;
                var6 = var6.bind(var14)(var1);
                var _closure2_slot11 = var6;
                var6 = 31;
                var18 = var16[var6];
                var19 = var7.bind(var5)(var18);
                var18 = var19.useLocation;
                var18 = var18.bind(var19)();
                var _closure2_slot12 = var18;
                var6 = var16[var6];
                var7 = var7.bind(var5)(var6);
                var6 = var7.useHistory;
                var6 = var6.bind(var7)();
                var _closure2_slot13 = var6;
                var16 = var14.useEffect;
                var7 = new Array(2);
                var7[0] = var18;
                var7[1] = var6;
                var6 = function() { // Environment: var8
                    _fun91629: for (var _fun91629_ip = 0;;) switch (_fun91629_ip) {
                        case 0:
                            var0 = _closure2_slot12;
                            var3 = var0.state;
                            var2 = null;
                            var5 = var2 == var3;
                            var0 = undefined;
                            var4 = undefined;
                            if (var5) {
                                _fun91629_ip = 31;
                                continue _fun91629
                            }
                        case 25:
                            var4 = var3.scrollBehavior;
                        case 31:
                            var3 = _closure1_slot14;
                            var3 = var3.GUILD_LIST_TOP;
                            if (!(var4 === var3)) {
                                _fun91629_ip = 108;
                                continue _fun91629
                            }
                        case 48:
                            var3 = _closure2_slot10;
                            var4 = var3.current;
                            if (!(var2 != var4)) {
                                _fun91629_ip = 86;
                                continue _fun91629
                            }
                        case 61:
                            var3 = var4.scrollToLocation;
                            var2 = {
                                'sectionIndex': 0,
                                'itemIndex': 0,
                                'animated': true,
                                'viewOffset': 0
                            };
                            var2 = var3.bind(var4)(var2);
                        case 86:
                            var3 = _closure2_slot13;
                            var2 = var3.replace;
                            var1 = {};
                            var4 = {};
                            var1.state = var4;
                            var1 = var2.bind(var3)(var1);
                        case 108:
                            return var0;
                    }
                };
                var6 = var16.bind(var14)(var6, var7);
                var16 = var14.useEffect;
                var6 = var17.id;
                var7 = new Array(1);
                var7[0] = var6;
                var6 = function() { // Environment: var8
                    var3 = _closure1_slot2;
                    var4 = _closure1_slot3;
                    var2 = 32;
                    var1 = var4[var2];
                    var0 = undefined;
                    var7 = var3.bind(var0)(var1);
                    var6 = var7.fetchDirectoryEntries;
                    var1 = _closure2_slot0;
                    var5 = var1.id;
                    var5 = var6.bind(var7)(var5);
                    var2 = var4[var2];
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.fetchDirectoryCounts;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var6 = var16.bind(var14)(var6, var7);
                var7 = var14.useEffect;
                var6 = var0 == var15;
                var16 = undefined;
                if (var6) {
                    _fun91622_ip = 552;
                    continue _fun91622
                }
            case 547:
                var16 = var15.id;
            case 552:
                var6 = new Array(3);
                var6[0] = var16;
                var16 = var17.id;
                var6[1] = var16;
                var6[2] = var4;
                var4 = function() { // Environment: var8
                    _fun91631: for (var _fun91631_ip = 0;;) switch (_fun91631_ip) {
                        case 0:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot3;
                            var0 = 33;
                            var2 = var2[var0];
                            var0 = undefined;
                            var4 = var3.bind(var0)(var2);
                            var3 = var4.track;
                            var1 = _closure1_slot17;
                            var2 = var1.GUILD_DIRECTORY_CHANNEL_VIEWED;
                            var1 = {};
                            var6 = _closure2_slot0;
                            var6 = var6.id;
                            var1.directory_channel_id = var6;
                            var7 = _closure2_slot2;
                            var6 = null;
                            var7 = var6 == var7;
                            var6 = undefined;
                            if (var7) {
                                _fun91631_ip = 83;
                                continue _fun91631
                            }
                        case 74:
                            var7 = _closure2_slot2;
                            var6 = var7.id;
                        case 83:
                            var1.directory_guild_id = var6;
                            var5 = _closure2_slot5;
                            var1.primary_category_id = var5;
                            var1 = var3.bind(var4)(var2, var1);
                            return var0;
                    }
                };
                var4 = var7.bind(var14)(var4, var6);
                var14 = _closure1_slot4;
                var7 = var14.useEffect;
                var6 = new Array(1);
                var6[0] = var11;
                var4 = function() { // Environment: var8
                    _fun91632: for (var _fun91632_ip = 0;;) switch (_fun91632_ip) {
                        case 0:
                            var1 = _closure2_slot3;
                            var1 = var1.current;
                            if (!var1) {
                                _fun91632_ip = 65;
                                continue _fun91632
                            }
                        case 15:
                            var1 = _closure2_slot10;
                            var4 = var1.current;
                            var1 = null;
                            if (!(var1 != var4)) {
                                _fun91632_ip = 55;
                                continue _fun91632
                            }
                        case 30:
                            var3 = var4.scrollToLocation;
                            var2 = {
                                'sectionIndex': 0,
                                'itemIndex': 0,
                                'animated': true,
                                'viewOffset': 0
                            };
                            var2 = var3.bind(var4)(var2);
                        case 55:
                            var0 = _closure2_slot3;
                            var0.current = var1;
                        case 65:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4 = var7.bind(var14)(var4, var6);
                var4 = function() { // Original name: handleTapCategory, environment: var8
                    _fun91633: for (var _fun91633_ip = 0;;) switch (_fun91633_ip) {
                        case 0:
                            var1 = _closure2_slot11;
                            var2 = var1.current;
                            var1 = _closure2_slot4;
                            if (!(var2 >= var1)) {
                                _fun91633_ip = 32;
                                continue _fun91633
                            }
                        case 20:
                            var1 = _closure2_slot3;
                            var0 = true;
                            var1.current = var0;
                        case 32:
                            var0 = undefined;
                            return var0;
                    }
                };
                _closure2_slot14 = var4;
                var4 = var0 == var15;
                var0 = null;
                if (var4) {
                    _fun91622_ip = 1018;
                    continue _fun91622
                }
            case 639:
                if (var3) {
                    _fun91622_ip = 810;
                    continue _fun91622
                }
            case 645:
                if (!(var1 === var2)) {
                    _fun91622_ip = 810;
                    continue _fun91622
                }
            case 652:
                var3 = _closure1_slot20;
                var2 = _closure1_slot5;
                var1 = {};
                var4 = {};
                var4.paddingBottom = var13;
                var1.style = var4;
                var6 = _closure1_slot19;
                var4 = {};
                var7 = var10.border;
                var4.style = var7;
                var6 = var6.bind(var5)(var2, var4);
                var4 = new Array(3);
                var4[0] = var6;
                var14 = _closure1_slot19;
                var7 = _closure1_slot1;
                var16 = _closure1_slot3;
                var6 = 34;
                var6 = var16[var6];
                var7 = var7.bind(var5)(var6);
                var6 = {};
                var6.guild = var15;
                var6.channel = var17;
                var6 = var14.bind(var5)(var7, var6);
                var4[1] = var6;
                var14 = _closure1_slot19;
                var7 = _closure1_slot0;
                var6 = 20;
                var6 = var16[var6];
                var6 = var7.bind(var5)(var6);
                var7 = var6.TTIFirstContentfulPaint;
                var6 = {};
                var16 = 'guild_directory_empty';
                var6.label = var16;
                var6 = var14.bind(var5)(var7, var6);
                var4[2] = var6;
                var1.children = var4;
                var1 = var3.bind(var5)(var2, var1);
                _fun91622_ip = 1015;
                continue _fun91622;
            case 810:
                var4 = _closure1_slot19;
                var3 = _closure1_slot5;
                var2 = {};
                var7 = _closure1_slot7;
                var6 = {};
                var6.ref = var12;
                var12 = function(arg0) { // Original name: onScroll, environment: var8
                    var0 = arg0;
                    var0 = var0.nativeEvent;
                    var0 = var0.contentOffset;
                    var1 = var0.y;
                    var0 = _closure2_slot11;
                    var0.current = var1;
                    var0 = undefined;
                    return var0;
                };
                var6.onScroll = var12;
                var12 = 16;
                var6.scrollEventThrottle = var12;
                var12 = {};
                var12.paddingBottom = var13;
                var6.contentContainerStyle = var12;
                var12 = 10;
                var6.windowSize = var12;
                var14 = _closure1_slot19;
                var13 = _closure1_slot26;
                var12 = {};
                var12.guild = var15;
                var15 = function() { // Original name: onPressSearch, environment: var8
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot3;
                    var0 = 35;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.open;
                    var1 = {};
                    var4 = _closure2_slot0;
                    var1.channel = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var12.onPressSearch = var15;
                var12 = var14.bind(var5)(var13, var12);
                var6.ListHeaderComponent = var12;
                var12 = {};
                var12.data = var11;
                var11 = new Array(1);
                var11[0] = var12;
                var6.sections = var11;
                var11 = true;
                var6.stickySectionHeadersEnabled = var11;
                var10 = var10.list;
                var6.style = var10;
                var10 = {};
                var11 = 1;
                var10.right = var11;
                var6.scrollIndicatorInsets = var10;
                var10 = _closure1_slot24;
                var6.keyExtractor = var10;
                var9 = _closure1_slot25;
                var6.renderItem = var9;
                var9 = function() { // Original name: renderSectionHeader, environment: var8
                    var3 = _closure1_slot19;
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var0 = 36;
                    var0 = var2[var0];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = {};
                    var5 = _closure2_slot14;
                    var0.onCategorySelected = var5;
                    var5 = _closure2_slot0;
                    var0.channel = var5;
                    var5 = _closure2_slot9;
                    var0.categoryCounts = var5;
                    var4 = _closure2_slot8;
                    var0.allEntriesCount = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var6.renderSectionHeader = var9;
                var8 = function() { // Original name: ListFooterComponent, environment: var8
                    var3 = _closure1_slot19;
                    var2 = _closure1_slot27;
                    var1 = {};
                    var4 = _closure2_slot2;
                    var1.guild = var4;
                    var0 = _closure2_slot0;
                    var1.channel = var0;
                    var0 = false;
                    var1.hideFooter = var0;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var6.ListFooterComponent = var8;
                var6 = var4.bind(var5)(var7, var6);
                var2.children = var6;
                var1 = var4.bind(var5)(var3, var2);
            case 1015:
                var0 = var1;
            case 1018:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1410, 3901, 8880, 8873, 8878, 660, 33, 1297, 671, 11856, 11857, 8912, 8913, 3895, 11858, 1234, 4037, 6970, 9649, 11859, 8875, 4858, 8876, 11862, 566, 1568, 4321, 14, 4531, 3177, 8884, 795, 11864, 8868, 11868, 2]);