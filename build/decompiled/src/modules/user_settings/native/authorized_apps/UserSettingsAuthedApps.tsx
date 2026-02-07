// modules/user_settings/native/authorized_apps/UserSettingsAuthedApps.tsx
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
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot4 = var6;
    var6 = var3.ActivityIndicator;
    var _closure1_slot5 = var6;
    var3 = var3.FlatList;
    var _closure1_slot6 = var3;
    var3 = 2;
    var6 = var5[var3];
    var6 = var7.bind(var0)(var6);
    var _closure1_slot7 = var6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.FetchState;
    var _closure1_slot8 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AnalyticsPages;
    var _closure1_slot9 = var6;
    var3 = var3.UserSettingsSections;
    var _closure1_slot10 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot11 = var6;
    var6 = var3.jsxs;
    var _closure1_slot12 = var6;
    var3 = var3.Fragment;
    var _closure1_slot13 = var3;
    var3 = 5;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var10 = 16;
    var8.padding = var10;
    var3.spinner = var8;
    var8 = {};
    var9 = 24;
    var8.marginTop = var9;
    var3.emptyText = var8;
    var8 = {};
    var8.padding = var10;
    var3.emptyContainer = var8;
    var8 = {
        'paddingHorizontal': 16,
        'paddingVertical': 24
    };
    var3.container = var8;
    var8 = {};
    var10 = 12;
    var8.marginTop = var10;
    var3.headerDescription = var8;
    var8 = {};
    var8.marginTop = var9;
    var3.appListHeader = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot14 = var3;
    var3 = 22;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/authorized_apps/UserSettingsAuthedApps.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function() {
        _fun83049: for (var _fun83049_ip = 0;;) switch (_fun83049_ip) {
            case 0:
                var0 = _closure1_slot14;
                var4 = undefined;
                var5 = var0.bind(var4)();
                var _closure2_slot0 = var5;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var0 = 10;
                var0 = var8[var0];
                var9 = var7.bind(var4)(var0);
                var3 = var9.useStateFromStoresObject;
                var0 = _closure1_slot7;
                var2 = new Array(1);
                var2[0] = var0;
                var0 = function() { // Environment: var6
                    var0 = {};
                    var2 = _closure1_slot7;
                    var1 = var2.getFetchState;
                    var1 = var1.bind(var2)();
                    var0.fetchState = var1;
                    var1 = var2.getNewestTokensForNonChildrenApplications;
                    var1 = var1.bind(var2)();
                    var0.appAuthTokens = var1;
                    return var0;
                };
                var0 = var3.bind(var9)(var2, var0);
                var2 = var0.fetchState;
                var9 = var0.appAuthTokens;
                var _closure2_slot1 = var9;
                var0 = 11;
                var0 = var8[var0];
                var3 = var7.bind(var4)(var0);
                var0 = var3.useNavigation;
                var0 = var0.bind(var3)();
                var _closure2_slot2 = var0;
                var3 = 12;
                var3 = var8[var3];
                var8 = var7.bind(var4)(var3);
                var7 = var8.useFocusEffect;
                var10 = _closure1_slot3;
                var12 = var10.useCallback;
                var11 = function() { // Environment: var6
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 13;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var0 = var1.fetch;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var3 = new Array(0);
                var3 = var12.bind(var10)(var11, var3);
                var3 = var7.bind(var8)(var3);
                var7 = function() {
                    var3 = _closure1_slot12;
                    var2 = _closure1_slot13;
                    var1 = {};
                    var7 = _closure1_slot4;
                    var4 = {};
                    var6 = _closure1_slot11;
                    var13 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var8 = 14;
                    var5 = var14[var8];
                    var0 = undefined;
                    var5 = var13.bind(var0)(var5);
                    var9 = var5.Text;
                    var5 = {
                        'color': 'mobile-text-heading-primary',
                        'variant': 'heading-md/semibold'
                    };
                    var10 = 15;
                    var11 = var14[var10];
                    var11 = var13.bind(var0)(var11);
                    var15 = var11.intl;
                    var12 = var15.string;
                    var11 = var14[var10];
                    var11 = var13.bind(var0)(var11);
                    var11 = var11.t;
                    var11 = var11.HU3RFw;
                    var11 = var12.bind(var15)(var11);
                    var5.children = var11;
                    var9 = var6.bind(var0)(var9, var5);
                    var5 = new Array(2);
                    var5[0] = var9;
                    var8 = var14[var8];
                    var8 = var13.bind(var0)(var8);
                    var11 = var8.Text;
                    var9 = {};
                    var8 = _closure2_slot0;
                    var12 = var8.headerDescription;
                    var9.style = var12;
                    var12 = 'heading-sm/medium';
                    var9.variant = var12;
                    var12 = var14[var10];
                    var12 = var13.bind(var0)(var12);
                    var16 = var12.intl;
                    var15 = var16.string;
                    var12 = var14[var10];
                    var12 = var13.bind(var0)(var12);
                    var12 = var12.t;
                    var12 = var12.Nu5Yi0;
                    var12 = var15.bind(var16)(var12);
                    var9.children = var12;
                    var9 = var6.bind(var0)(var11, var9);
                    var5[1] = var9;
                    var4.children = var5;
                    var5 = var3.bind(var0)(var7, var4);
                    var4 = new Array(2);
                    var4[0] = var5;
                    var5 = {};
                    var8 = var8.appListHeader;
                    var5.style = var8;
                    var8 = 16;
                    var8 = var14[var8];
                    var8 = var13.bind(var0)(var8);
                    var9 = var8.TableRowGroupTitle;
                    var8 = {};
                    var11 = var14[var10];
                    var11 = var13.bind(var0)(var11);
                    var12 = var11.intl;
                    var11 = var12.string;
                    var10 = var14[var10];
                    var10 = var13.bind(var0)(var10);
                    var10 = var10.t;
                    var10 = var10.PHjkRE;
                    var10 = var11.bind(var12)(var10);
                    var8.title = var10;
                    var8 = var6.bind(var0)(var9, var8);
                    var5.children = var8;
                    var5 = var6.bind(var0)(var7, var5);
                    var4[1] = var5;
                    var1.children = var4;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var8 = var10.useCallback;
                var3 = new Array(1);
                var3[0] = var0;
                var0 = function(arg0) { // Environment: var6
                    var1 = arg0;
                    var0 = var1.item;
                    var _closure3_slot0 = var0;
                    var6 = var1.index;
                    var7 = var1.numItems;
                    var9 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var2 = 17;
                    var2 = var11[var2];
                    var4 = undefined;
                    var8 = var9.bind(var4)(var2);
                    var3 = var8.getApplicationIconSource;
                    var2 = {};
                    var10 = var0.application;
                    var10 = var10.id;
                    var2.id = var10;
                    var10 = var0.application;
                    var10 = var10.icon;
                    var2.icon = var10;
                    var10 = var3.bind(var8)(var2);
                    var3 = _closure1_slot11;
                    var2 = _closure1_slot0;
                    var1 = 18;
                    var1 = var11[var1];
                    var1 = var2.bind(var4)(var1);
                    var2 = var1.TableRow;
                    var1 = {};
                    var8 = 19;
                    var8 = var11[var8];
                    var9 = var9.bind(var4)(var8);
                    var8 = {};
                    var8.iconSource = var10;
                    var10 = 6;
                    var8.iconBorderRadius = var10;
                    var8 = var3.bind(var4)(var9, var8);
                    var1.icon = var8;
                    var8 = var0.application;
                    var8 = var8.name;
                    var1.label = var8;
                    var5 = function() {
                        var2 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var0 = 20;
                        var1 = var4[var0];
                        var0 = undefined;
                        var5 = var2.bind(var0)(var1);
                        var3 = var5.setSection;
                        var1 = _closure1_slot10;
                        var2 = var1.AUTHORIZED_APP;
                        var2 = var3.bind(var5)(var2);
                        var3 = _closure1_slot0;
                        var2 = 21;
                        var2 = var4[var2];
                        var4 = var3.bind(var0)(var2);
                        var3 = var4.trackUserSettingsPaneViewed;
                        var2 = {};
                        var5 = var1.AUTHORIZED_APP;
                        var2.destinationPane = var5;
                        var5 = {};
                        var6 = _closure1_slot9;
                        var6 = var6.USER_SETTINGS;
                        var5.page = var6;
                        var2.source = var5;
                        var5 = _closure3_slot0;
                        var6 = var5.application;
                        var6 = var6.id;
                        var2.applicationId = var6;
                        var2 = var3.bind(var4)(var2);
                        var4 = _closure2_slot2;
                        var3 = var4.push;
                        var2 = var1.AUTHORIZED_APP;
                        var1 = {};
                        var1.oauth2Token = var5;
                        var1 = var3.bind(var4)(var2, var1);
                        return var0;
                    };
                    var1.onPress = var5;
                    var5 = true;
                    var1.arrow = var5;
                    var5 = 0;
                    var5 = var5 === var6;
                    var1.start = var5;
                    var5 = 1;
                    var5 = var7 - var5;
                    var5 = var6 === var5;
                    var1.end = var5;
                    var0 = var0.id;
                    var0 = var3.bind(var4)(var2, var1, var0);
                    return var0;
                };
                var0 = var8.bind(var10)(var0, var3);
                var _closure2_slot3 = var0;
                var0 = null;
                if (!(var0 != var9)) {
                    _fun83049_ip = 471;
                    continue _fun83049
                }
            case 207:
                var0 = _closure1_slot8;
                var0 = var0.FETCHED;
                if (!(var2 === var0)) {
                    _fun83049_ip = 471;
                    continue _fun83049
                }
            case 224:
                var2 = var9.length;
                var0 = 0;
                if (!(var0 !== var2)) {
                    _fun83049_ip = 309;
                    continue _fun83049
                }
            case 235:
                var3 = _closure1_slot11;
                var2 = _closure1_slot6;
                var0 = {};
                var8 = var5.container;
                var0.contentContainerStyle = var8;
                var8 = var7.bind(var4)();
                var0.ListHeaderComponent = var8;
                var8 = function arg0() {
                    var0 = arg0;
                    var4 = var0.item;
                    var3 = var0.index;
                    var2 = _closure2_slot3;
                    var1 = {};
                    var1.item = var4;
                    var1.index = var3;
                    var0 = _closure2_slot1;
                    var0 = var0.length;
                    var1.numItems = var0;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var0.renderItem = var8;
                var8 = var9.sort;
                var6 = function(arg0, arg1) { // Environment: var6
                    var0 = global;
                    var2 = var0.Number;
                    var1 = arg1;
                    var1 = var1.id;
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var2 = var0.Number;
                    var0 = arg0;
                    var0 = var0.id;
                    var0 = var2.bind(var3)(var0);
                    var0 = var1 - var0;
                    return var0;
                };
                var6 = var8.bind(var9)(var6);
                var0.data = var6;
                var0 = var3.bind(var4)(var2, var0);
                _fun83049_ip = 469;
                continue _fun83049;
            case 309:
                var6 = _closure1_slot12;
                var3 = _closure1_slot4;
                var2 = {};
                var8 = var5.emptyContainer;
                var2.style = var8;
                var8 = var7.bind(var4)();
                var7 = new Array(2);
                var7[0] = var8;
                var10 = _closure1_slot11;
                var14 = _closure1_slot0;
                var15 = _closure1_slot2;
                var8 = 14;
                var8 = var15[var8];
                var8 = var14.bind(var4)(var8);
                var9 = var8.Text;
                var8 = {
                    'color': 'mobile-text-heading-primary',
                    'style': null,
                    'variant': 'heading-md/extrabold'
                };
                var11 = var5.emptyText;
                var8.style = var11;
                var11 = 15;
                var12 = var15[var11];
                var12 = var14.bind(var4)(var12);
                var13 = var12.intl;
                var12 = var13.string;
                var11 = var15[var11];
                var11 = var14.bind(var4)(var11);
                var11 = var11.t;
                var11 = var11["E+SM6T"];
                var11 = var12.bind(var13)(var11);
                var8.children = var11;
                var8 = var10.bind(var4)(var9, var8);
                var7[1] = var8;
                var2.children = var7;
                var0 = var6.bind(var4)(var3, var2);
            case 469:
                _fun83049_ip = 511;
                continue _fun83049;
            case 471:
                var3 = _closure1_slot11;
                var2 = _closure1_slot5;
                var1 = {
                    'style': null,
                    'animating': true,
                    'size': 'large'
                };
                var5 = var5.spinner;
                var1.style = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 511:
                return var0;
        }
    };
    var2.default = var3;
    var1 = function(arg0) { // Environment: var1
        var1 = arg0;
        var5 = var1.disclosure;
        var _closure2_slot0 = var5;
        var4 = var1.style;
        var _closure2_slot1 = var4;
        var3 = _closure1_slot3;
        var2 = var3.useMemo;
        var1 = new Array(2);
        var1[0] = var5;
        var1[1] = var4;
        var0 = function() { // Environment: var0
            _fun83058: for (var _fun83058_ip = 0;;) switch (_fun83058_ip) {
                case 0:
                    var2 = _closure2_slot0;
                    var5 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var6 = 6;
                    var1 = var1[var6];
                    var3 = undefined;
                    var1 = var5.bind(var3)(var1);
                    var1 = var1.ApplicationDisclosureType;
                    var1 = var1.IP_LOCATION;
                    if (!(var1 !== var2)) {
                        _fun83058_ip = 196;
                        continue _fun83058
                    }
                case 51:
                    var5 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var1 = var1[var6];
                    var1 = var5.bind(var3)(var1);
                    var1 = var1.ApplicationDisclosureType;
                    var1 = var1.DISPLAYS_ADVERTISEMENTS;
                    if (!(var1 !== var2)) {
                        _fun83058_ip = 140;
                        continue _fun83058
                    }
                case 84:
                    var5 = _closure1_slot11;
                    var2 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 9;
                    var1 = var6[var1];
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.CircleInformationIcon;
                    var1 = {};
                    var6 = _closure2_slot1;
                    var1.style = var6;
                    var6 = 'xs';
                    var1.size = var6;
                    var1 = var5.bind(var3)(var2, var1);
                    return var1;
                case 140:
                    var5 = _closure1_slot11;
                    var2 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 8;
                    var1 = var6[var1];
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.EmbedIcon;
                    var1 = {};
                    var6 = _closure2_slot1;
                    var1.style = var6;
                    var6 = 'xs';
                    var1.size = var6;
                    var1 = var5.bind(var3)(var2, var1);
                    return var1;
                case 196:
                    var2 = _closure1_slot11;
                    var1 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var0 = 7;
                    var0 = var5[var0];
                    var0 = var1.bind(var3)(var0);
                    var1 = var0.GlobeEarthIcon;
                    var0 = {};
                    var4 = _closure2_slot1;
                    var0.style = var4;
                    var4 = 'xs';
                    var0.size = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.DisclosureIcon = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 4586, 660, 33, 1297, 5400, 5494, 5496, 3267, 566, 1469, 1470, 5403, 3942, 1234, 5415, 1417, 4900, 10622, 7295, 7296, 2]);