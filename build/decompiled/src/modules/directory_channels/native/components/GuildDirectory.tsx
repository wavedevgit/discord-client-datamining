// modules/directory_channels/native/components/GuildDirectory.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var8 = metroImportDefault;
    var7 = metroImportAll;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var _closure1_slot3 = var5;
    var0 = function arg0() {
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
    var _closure1_slot33 = var0;
    var3 = global;
    var10 = var3.Object;
    var9 = var10.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var6);
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
    var12 = var6.StyleSheet;
    var6 = var6.SectionList;
    var _closure1_slot7 = var6;
    var6 = 2;
    var6 = var5[var6];
    var6 = var8.bind(var0)(var6);
    var _closure1_slot8 = var6;
    var6 = 3;
    var6 = var5[var6];
    var6 = var8.bind(var0)(var6);
    var _closure1_slot9 = var6;
    var6 = 4;
    var6 = var5[var6];
    var6 = var8.bind(var0)(var6);
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
    var9 = var6.jsxs;
    var _closure1_slot20 = var9;
    var6 = var6.Fragment;
    var _closure1_slot21 = var6;
    var6 = var3.Array;
    var3 = 20;
    var9 = var6.bind(var0)(var3);
    var6 = var9.fill;
    var3 = null;
    var3 = var6.bind(var9)(var3);
    var _closure1_slot22 = var3;
    var3 = 9;
    var3 = var5[var3];
    var10 = var4.bind(var0)(var3);
    var9 = var10.createStyles;
    var6 = {};
    var3 = {};
    var12 = var12.hairlineWidth;
    var3.height = var12;
    var12 = 10;
    var13 = var5[var12];
    var13 = var8.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOWEST;
    var3.backgroundColor = var13;
    var6.border = var3;
    var3 = {};
    var13 = var5[var12];
    var13 = var8.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOW;
    var3.backgroundColor = var13;
    var6.list = var3;
    var3 = {};
    var13 = 'hidden';
    var3.overflow = var13;
    var3.height = var11;
    var6.headerWrapper = var3;
    var3 = {
        'resizeMode': 'cover',
        'width': '100%'
    };
    var6.backgroundImage = var3;
    var3 = 16;
    var11 = {
        'position': 'absolute',
        'bottom': 0,
        'left': 0,
        'right': 0,
        'padding': 16,
        'alignContent': 'center'
    };
    var6.textWrapper = var11;
    var11 = {
        'textAlign': 'center',
        'marginBottom': 8
    };
    var6.headerTitle = var11;
    var11 = {
        'lineHeight': 18,
        'textAlign': 'center',
        'paddingHorizontal': 20,
        'marginBottom': 72
    };
    var6.headerDescription = var11;
    var11 = {
        'flexDirection': 'row',
        'padding': 16,
        'alignItems': 'center'
    };
    var6.footer = var11;
    var11 = {
        'marginRight': 16,
        'height': 40,
        'width': 40,
        'alignItems': 'center',
        'justifyContent': 'center',
        'borderRadius': 20
    };
    var12 = var5[var12];
    var12 = var8.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BASE_LOWEST;
    var11.backgroundColor = var12;
    var6.addIcon = var11;
    var11 = {
        'padding': 16,
        'paddingBottom': 4
    };
    var6.categorySectionText = var11;
    var6 = var9.bind(var10)(var6);
    var _closure1_slot23 = var6;
    var6 = function arg0, arg1() {
        _fun75579: for (var _fun75579_ip = 0;;) switch (_fun75579_ip) {
            case 0:
                var1 = arg0;
                var2 = arg1;
                var0 = null;
                var4 = var0 == var1;
                var3 = undefined;
                var5 = undefined;
                if (var4) {
                    _fun75579_ip = 24;
                    continue _fun75579
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
                    _fun75579_ip = 111;
                    continue _fun75579
                }
            case 63:
                var0 = var0 == var1;
                var4 = undefined;
                if (var0) {
                    _fun75579_ip = 77;
                    continue _fun75579
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
                _fun75579_ip = 122;
                continue _fun75579;
            case 111:
                var1 = var1.entry;
                var0 = var1.guildId;
            case 122:
                return var0;
        }
    };
    var _closure1_slot24 = var6;
    var6 = 13;
    var6 = var5[var6];
    var8 = var8.bind(var0)(var6);
    var6 = {};
    var6 = var7.bind(var0)(var8, var6);
    var _closure1_slot25 = var6;
    var6 = function arg0() {
        _fun75580: for (var _fun75580_ip = 0;;) switch (_fun75580_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.item;
                var0 = null;
                var0 = var0 == var4;
                var3 = undefined;
                var2 = undefined;
                if (var0) {
                    _fun75580_ip = 26;
                    continue _fun75580
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
                    _fun75580_ip = 149;
                    continue _fun75580
                }
            case 65:
                var5 = _closure1_slot0;
                var1 = _closure1_slot3;
                var1 = var1[var6];
                var1 = var5.bind(var3)(var1);
                var1 = var1.RowType;
                var1 = var1.ENTRY;
                if (!(var1 !== var2)) {
                    _fun75580_ip = 104;
                    continue _fun75580
                }
            case 98:
                var1 = _closure1_slot25;
                return var1;
            case 104:
                var5 = _closure1_slot19;
                var2 = _closure1_slot1;
                var6 = _closure1_slot3;
                var1 = 14;
                var1 = var6[var1];
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var6 = var4.entry;
                var1.entry = var6;
                var1 = var5.bind(var3)(var2, var1);
                return var1;
            case 149:
                var2 = _closure1_slot19;
                var1 = _closure1_slot33;
                var0 = {};
                var4 = var4.header;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot26 = var6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.MagnifyingGlassIcon;
    var3 = {
        'size': 'sm',
        'color': 'text-strong'
    };
    var3 = var7.bind(var0)(var6, var3);
    var _closure1_slot27 = var3;
    var3 = 17;
    var6 = var5[var3];
    var6 = var4.bind(var0)(var6);
    var8 = var6.TTIFirstContentfulPaint;
    var6 = {};
    var9 = 'hub_directory';
    var6.label = var9;
    var6 = var7.bind(var0)(var8, var6);
    var _closure1_slot28 = var6;
    var6 = function arg0() {
        _fun75581: for (var _fun75581_ip = 0;;) switch (_fun75581_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.guild;
                var15 = var0.onPressSearch;
                var0 = _closure1_slot23;
                var3 = undefined;
                var17 = var0.bind(var3)();
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
                var8 = var17.headerWrapper;
                var4.style = var8;
                var11 = _closure1_slot19;
                var10 = _closure1_slot6;
                var8 = {};
                var19 = _closure1_slot0;
                var20 = _closure1_slot3;
                var12 = 18;
                var12 = var20[var12];
                var12 = var19.bind(var3)(var12);
                var8.source = var12;
                var12 = var17.backgroundImage;
                var8.style = var12;
                var10 = var11.bind(var3)(var10, var8);
                var8 = new Array(2);
                var8[0] = var10;
                var10 = {};
                var11 = var17.textWrapper;
                var10.style = var11;
                var14 = _closure1_slot19;
                var12 = 15;
                var11 = var20[var12];
                var11 = var19.bind(var3)(var11);
                var13 = var11.Text;
                var11 = {
                    'style': null,
                    'variant': 'heading-xl/extrabold',
                    'color': 'always-white'
                };
                var16 = var17.headerTitle;
                var11.style = var16;
                var16 = 19;
                var18 = var20[var16];
                var18 = var19.bind(var3)(var18);
                var22 = var18.intl;
                var21 = var22.string;
                var18 = var20[var16];
                var18 = var19.bind(var3)(var18);
                var18 = var18.t;
                var18 = var18.IT7qoC;
                var18 = var21.bind(var22)(var18);
                var11.children = var18;
                var13 = var14.bind(var3)(var13, var11);
                var11 = new Array(4);
                var11[0] = var13;
                var14 = _closure1_slot19;
                var12 = var20[var12];
                var12 = var19.bind(var3)(var12);
                var13 = var12.Text;
                var12 = {
                    'style': null,
                    'variant': 'text-sm/medium',
                    'color': 'always-white'
                };
                var18 = var17.headerDescription;
                var17 = new Array(1);
                var17[0] = var18;
                var12.style = var17;
                var17 = var20[var16];
                var17 = var19.bind(var3)(var17);
                var21 = var17.intl;
                var18 = var21.string;
                var17 = var20[var16];
                var17 = var19.bind(var3)(var17);
                var17 = var17.t;
                var17 = var17["5PoYts"];
                var17 = var18.bind(var21)(var17);
                var12.children = var17;
                var12 = var14.bind(var3)(var13, var12);
                var11[1] = var12;
                var14 = _closure1_slot19;
                var12 = 20;
                var12 = var20[var12];
                var12 = var19.bind(var3)(var12);
                var13 = var12.Button;
                var12 = {};
                var17 = 'primary-overlay';
                var12.variant = var17;
                var17 = _closure1_slot27;
                var12.icon = var17;
                var17 = var20[var16];
                var17 = var19.bind(var3)(var17);
                var18 = var17.intl;
                var17 = var18.string;
                var16 = var20[var16];
                var16 = var19.bind(var3)(var16);
                var16 = var16.t;
                var16 = var16.nL2wKD;
                var16 = var17.bind(var18)(var16);
                var12.text = var16;
                var12.onPress = var15;
                var12 = var14.bind(var3)(var13, var12);
                var11[2] = var12;
                var12 = _closure1_slot28;
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
                    _fun75581_ip = 567;
                    continue _fun75581
                }
            case 524:
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
            case 567:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot29 = var6;
    var6 = 22;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var8 = var6.PlusMediumIcon;
    var6 = {};
    var6 = var7.bind(var0)(var8, var6);
    var _closure1_slot30 = var6;
    var6 = function arg0() {
        _fun75582: for (var _fun75582_ip = 0;;) switch (_fun75582_ip) {
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
                var0 = 23;
                var0 = var6[var0];
                var2 = var2.bind(var4)(var0);
                var0 = var2.useCanCreateOrAddGuildInDirectory;
                var3 = var0.bind(var2)(var3);
                var0 = null;
                if (!var3) {
                    _fun75582_ip = 362;
                    continue _fun75582
                }
            case 81:
                var0 = null;
                if (var1) {
                    _fun75582_ip = 362;
                    continue _fun75582
                }
            case 89:
                var3 = _closure1_slot19;
                var15 = _closure1_slot0;
                var16 = _closure1_slot3;
                var1 = 24;
                var1 = var16[var1];
                var1 = var15.bind(var4)(var1);
                var2 = var1.PressableOpacity;
                var1 = {};
                var6 = 'button';
                var1.accessibilityRole = var6;
                var12 = 19;
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
                var5 = function() {
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot3;
                    var0 = 25;
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
                var11 = _closure1_slot30;
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
            case 362:
                return var0;
        }
    };
    var _closure1_slot31 = var6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.TTIFirstContentfulPaint;
    var3 = {};
    var8 = 'guild_directory_empty';
    var3.label = var8;
    var3 = var7.bind(var0)(var6, var3);
    var _closure1_slot32 = var3;
    var3 = 37;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/directory_channels/native/components/GuildDirectory.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun75584: for (var _fun75584_ip = 0;;) switch (_fun75584_ip) {
            case 0:
                var0 = arg0;
                var16 = var0.channel;
                var _closure2_slot0 = var16;
                var0 = var0.guildId;
                var _closure2_slot1 = var0;
                var0 = _closure1_slot23;
                var5 = undefined;
                var10 = var0.bind(var5)();
                var7 = _closure1_slot0;
                var17 = _closure1_slot3;
                var1 = 26;
                var0 = var17[var1];
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
                var3 = _closure1_slot19;
                var2 = _closure1_slot31;
                var0 = {};
                var0.guild = var15;
                var0.channel = var16;
                var4 = false;
                var0.hideFooter = var4;
                var0 = var3.bind(var5)(var2, var0);
                var _closure2_slot3 = var0;
                var14 = _closure1_slot4;
                var2 = var14.useRef;
                var0 = null;
                var2 = var2.bind(var14)(var0);
                var _closure2_slot4 = var2;
                var12 = _closure1_slot1;
                var2 = 27;
                var2 = var17[var2];
                var2 = var12.bind(var5)(var2);
                var2 = var2.bind(var5)();
                var13 = var2.bottom;
                var2 = 11;
                var3 = var17[var2];
                var4 = var7.bind(var5)(var3);
                var3 = var4.useHubProgressBarCompletedSteps;
                var4 = var3.bind(var4)(var15);
                var2 = var17[var2];
                var3 = var7.bind(var5)(var2);
                var2 = var3.getNextHubProgressStep;
                var2 = var2.bind(var3)(var4);
                if (!(var0 != var2)) {
                    _fun75584_ip = 229;
                    continue _fun75584
                }
            case 217:
                var3 = _closure1_slot13;
                var2 = _closure1_slot12;
                var2 = var3 + var2;
            case 229:
                var1 = var17[var1];
                var4 = var7.bind(var5)(var1);
                var3 = var4.useStateFromStoresObject;
                var1 = _closure1_slot10;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var8
                    _fun75586: for (var _fun75586_ip = 0;;) switch (_fun75586_ip) {
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
                                _fun75586_ip = 62;
                                continue _fun75586
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
                                _fun75586_ip = 151;
                                continue _fun75586
                            }
                        case 137:
                            var4 = var6 === var4;
                            if (!var4) {
                                _fun75586_ip = 148;
                                continue _fun75586
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
                var18 = _closure1_slot19;
                var11 = 28;
                var11 = var17[var11];
                var12 = var12.bind(var5)(var11);
                var11 = {};
                var11.onCategorySelected = var5;
                var11.channel = var16;
                var11.categoryCounts = var5;
                var11.allEntriesCount = var2;
                var11 = var18.bind(var5)(var12, var11);
                var _closure2_slot8 = var11;
                var6 = var6.categoryCounts;
                var12 = var14.useEffect;
                var11 = new Array(2);
                var11[0] = var1;
                var11[1] = var3;
                var6 = function() { // Environment: var8
                    _fun75587: for (var _fun75587_ip = 0;;) switch (_fun75587_ip) {
                        case 0:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var0 = 29;
                            var2 = var3[var0];
                            var0 = undefined;
                            var4 = var4.bind(var0)(var2);
                            var2 = var4.trackAppUIViewed;
                            var2 = var2.bind(var4)();
                            var2 = _closure1_slot1;
                            var1 = 30;
                            var1 = var3[var1];
                            var4 = var2.bind(var0)(var1);
                            var3 = var4.recordRender;
                            var1 = global;
                            var6 = var1.Object;
                            var5 = var6.keys;
                            var7 = _closure2_slot6;
                            var2 = null;
                            if (!(var2 == var7)) {
                                _fun75587_ip = 87;
                                continue _fun75587
                            }
                        case 83:
                            var2 = {};
                            _fun75587_ip = 91;
                            continue _fun75587;
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
                var6 = var16.id;
                var11 = new Array(1);
                var11[0] = var6;
                var6 = function() { // Environment: var8
                    var0 = function() { // Environment: var0
                        _fun75589: for (var _fun75589_ip = 0;;) switch (_fun75589_ip) {
                            case 0:
                                var4 = _closure1_slot9;
                                var3 = var4.lastMessageId;
                                var2 = _closure2_slot0;
                                var2 = var2.id;
                                var5 = var3.bind(var4)(var2);
                                var2 = null;
                                if (!(var2 != var5)) {
                                    _fun75589_ip = 122;
                                    continue _fun75589
                                }
                            case 36:
                                var4 = _closure1_slot0;
                                var3 = _closure1_slot3;
                                var2 = 31;
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
                    _fun75590: for (var _fun75590_ip = 0;;) switch (_fun75590_ip) {
                        case 0:
                            var0 = _closure2_slot7;
                            if (var0) {
                                _fun75590_ip = 96;
                                continue _fun75590
                            }
                        case 10:
                            var2 = _closure2_slot6;
                            var0 = null;
                            if (!(var0 == var2)) {
                                _fun75590_ip = 26;
                                continue _fun75590
                            }
                        case 20:
                            var0 = new Array(0);
                            _fun75590_ip = 94;
                            continue _fun75590;
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
                            _fun75590_ip = 103;
                            continue _fun75590;
                        case 96:
                            var0 = _closure1_slot22;
                        case 103:
                            return var0;
                    }
                };
                var11 = var11.bind(var14)(var1, var6);
                var1 = var14.useRef;
                var12 = var1.bind(var14)(var0);
                var _closure2_slot9 = var12;
                var6 = var14.useRef;
                var1 = 0;
                var6 = var6.bind(var14)(var1);
                var _closure2_slot10 = var6;
                var6 = 32;
                var18 = var17[var6];
                var19 = var7.bind(var5)(var18);
                var18 = var19.useLocation;
                var18 = var18.bind(var19)();
                var _closure2_slot11 = var18;
                var6 = var17[var6];
                var7 = var7.bind(var5)(var6);
                var6 = var7.useHistory;
                var6 = var6.bind(var7)();
                var _closure2_slot12 = var6;
                var17 = var14.useEffect;
                var7 = new Array(2);
                var7[0] = var18;
                var7[1] = var6;
                var6 = function() { // Environment: var8
                    _fun75591: for (var _fun75591_ip = 0;;) switch (_fun75591_ip) {
                        case 0:
                            var0 = _closure2_slot11;
                            var3 = var0.state;
                            var2 = null;
                            var5 = var2 == var3;
                            var0 = undefined;
                            var4 = undefined;
                            if (var5) {
                                _fun75591_ip = 31;
                                continue _fun75591
                            }
                        case 25:
                            var4 = var3.scrollBehavior;
                        case 31:
                            var3 = _closure1_slot14;
                            var3 = var3.GUILD_LIST_TOP;
                            if (!(var4 === var3)) {
                                _fun75591_ip = 108;
                                continue _fun75591
                            }
                        case 48:
                            var3 = _closure2_slot9;
                            var4 = var3.current;
                            if (!(var2 != var4)) {
                                _fun75591_ip = 86;
                                continue _fun75591
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
                            var3 = _closure2_slot12;
                            var2 = var3.replace;
                            var1 = {};
                            var4 = {};
                            var1.state = var4;
                            var1 = var2.bind(var3)(var1);
                        case 108:
                            return var0;
                    }
                };
                var6 = var17.bind(var14)(var6, var7);
                var17 = var14.useEffect;
                var6 = var16.id;
                var7 = new Array(1);
                var7[0] = var6;
                var6 = function() { // Environment: var8
                    var3 = _closure1_slot2;
                    var4 = _closure1_slot3;
                    var2 = 33;
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
                var6 = var17.bind(var14)(var6, var7);
                var7 = var14.useEffect;
                var6 = var0 == var15;
                var17 = undefined;
                if (var6) {
                    _fun75584_ip = 612;
                    continue _fun75584
                }
            case 607:
                var17 = var15.id;
            case 612:
                var6 = new Array(3);
                var6[0] = var17;
                var17 = var16.id;
                var6[1] = var17;
                var6[2] = var4;
                var4 = function() { // Environment: var8
                    _fun75593: for (var _fun75593_ip = 0;;) switch (_fun75593_ip) {
                        case 0:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot3;
                            var0 = 34;
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
                                _fun75593_ip = 83;
                                continue _fun75593
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
                    _fun75594: for (var _fun75594_ip = 0;;) switch (_fun75594_ip) {
                        case 0:
                            var1 = _closure2_slot4;
                            var1 = var1.current;
                            if (!var1) {
                                _fun75594_ip = 65;
                                continue _fun75594
                            }
                        case 15:
                            var1 = _closure2_slot9;
                            var4 = var1.current;
                            var1 = null;
                            if (!(var1 != var4)) {
                                _fun75594_ip = 55;
                                continue _fun75594
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
                            var0 = _closure2_slot4;
                            var0.current = var1;
                        case 65:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4 = var7.bind(var14)(var4, var6);
                var4 = var0 == var15;
                var0 = null;
                if (var4) {
                    _fun75584_ip = 1024;
                    continue _fun75584
                }
            case 688:
                if (var3) {
                    _fun75584_ip = 816;
                    continue _fun75584
                }
            case 694:
                if (!(var1 === var2)) {
                    _fun75584_ip = 816;
                    continue _fun75584
                }
            case 698:
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
                var17 = _closure1_slot3;
                var6 = 35;
                var6 = var17[var6];
                var7 = var7.bind(var5)(var6);
                var6 = {};
                var6.guild = var15;
                var6.channel = var16;
                var6 = var14.bind(var5)(var7, var6);
                var4[1] = var6;
                var6 = _closure1_slot32;
                var4[2] = var6;
                var1.children = var4;
                var1 = var3.bind(var5)(var2, var1);
                _fun75584_ip = 1021;
                continue _fun75584;
            case 816:
                var4 = _closure1_slot19;
                var3 = _closure1_slot5;
                var2 = {};
                var7 = _closure1_slot7;
                var6 = {};
                var6.ref = var12;
                var12 = function arg0() {
                    var0 = arg0;
                    var0 = var0.nativeEvent;
                    var0 = var0.contentOffset;
                    var1 = var0.y;
                    var0 = _closure2_slot10;
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
                var13 = _closure1_slot29;
                var12 = {};
                var12.guild = var15;
                var15 = function() {
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot3;
                    var0 = 36;
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
                var9 = _closure1_slot26;
                var6.renderItem = var9;
                var9 = function() {
                    var0 = _closure2_slot8;
                    return var0;
                };
                var6.renderSectionHeader = var9;
                var8 = function() {
                    var0 = _closure2_slot3;
                    return var0;
                };
                var6.ListFooterComponent = var8;
                var6 = var4.bind(var5)(var7, var6);
                var2.children = var6;
                var1 = var4.bind(var5)(var3, var2);
            case 1021:
                var0 = var1;
            case 1024:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1410, 3944, 9555, 9556, 9558, 660, 33, 1297, 671, 9559, 9560, 9561, 9562, 3938, 7108, 9570, 9574, 1234, 4090, 9575, 8812, 9564, 4880, 9692, 566, 1568, 9701, 4370, 14, 4580, 3219, 9567, 795, 9703, 9707, 2]);