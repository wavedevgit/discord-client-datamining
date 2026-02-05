// modules/oauth2/native/IntegrationTypeSelector.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var1);
    var0 = 0;
    var4 = var6[var0];
    var1 = metroImportAll;
    var0 = undefined;
    var1 = var1.bind(var0)(var4);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var4 = var1.View;
    var _closure1_slot4 = var4;
    var13 = var1.StyleSheet;
    var1 = 2;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var4 = var1.jsx;
    var _closure1_slot5 = var4;
    var1 = var1.jsxs;
    var _closure1_slot6 = var1;
    var1 = 3;
    var1 = var6[var1];
    var8 = var5.bind(var0)(var1);
    var7 = var8.createStyles;
    var1 = {};
    var4 = {
        'alignItems': 'center',
        'flexDirection': 'column'
    };
    var1.container = var4;
    var4 = 16;
    var12 = '100%';
    var9 = {
        'justifyContent': 'center',
        'alignItems': 'center',
        'gap': 16,
        'marginTop': 24,
        'marginBottom': 32,
        'width': '100%'
    };
    var1.header = var9;
    var9 = {};
    var10 = 'stretch';
    var9.alignSelf = var10;
    var10 = 4;
    var14 = var6[var10];
    var14 = var11.bind(var0)(var14);
    var14 = var14.radii;
    var14 = var14.sm;
    var9.borderRadius = var14;
    var1.rows = var9;
    var9 = {};
    var14 = var13.hairlineWidth;
    var9.height = var14;
    var14 = var6[var10];
    var14 = var11.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.BORDER_SUBTLE;
    var9.backgroundColor = var14;
    var14 = var13.hairlineWidth;
    var13 = -1;
    var13 = var13 * var14;
    var9.marginTop = var13;
    var1.divider = var9;
    var9 = {};
    var9.marginVertical = var4;
    var1.learnMore = var9;
    var9 = {};
    var13 = var6[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.CARD_BACKGROUND_DEFAULT;
    var9.backgroundColor = var13;
    var9.width = var12;
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.sm;
    var9.borderRadius = var12;
    var1.descriptionContainer = var9;
    var9 = {};
    var12 = 8;
    var9.padding = var12;
    var1.descriptionMainContainer = var9;
    var9 = {
        'backgroundColor': null,
        'bottom': 8,
        'right': 8
    };
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.CARD_BACKGROUND_DEFAULT;
    var9.backgroundColor = var12;
    var1.expandDescriptionCTA = var9;
    var9 = {
        'height': 82,
        'width': 82
    };
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.xl;
    var9.borderRadius = var12;
    var1.appIcon = var9;
    var9 = {};
    var9.padding = var10;
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.xl;
    var12 = var12 + var10;
    var9.borderRadius = var12;
    var1.appIconMask = var9;
    var9 = {};
    var10 = var6[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_MOD_MUTED;
    var9.backgroundColor = var10;
    var1.loadingIcon = var9;
    var1 = var7.bind(var8)(var1);
    var _closure1_slot7 = var1;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/oauth2/native/IntegrationTypeSelector.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function arg0() {
        _fun47972: for (var _fun47972_ip = 0;;) switch (_fun47972_ip) {
            case 0:
                var0 = arg0;
                var14 = var0.application;
                var _closure2_slot0 = var14;
                var0 = var0.onSelect;
                var _closure2_slot1 = var0;
                var0 = _closure1_slot7;
                var3 = undefined;
                var9 = var0.bind(var3)();
                var5 = _closure1_slot3;
                var2 = var5.useMemo;
                var0 = var14.icon;
                var1 = new Array(2);
                var1[0] = var0;
                var0 = var14.id;
                var1[1] = var0;
                var0 = function() { // Environment: var10
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 5;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.getApplicationIconSource;
                    var0 = {};
                    var3 = _closure2_slot0;
                    var4 = var3.id;
                    var0.id = var4;
                    var3 = var3.icon;
                    var0.icon = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var4 = var2.bind(var5)(var0, var1);
                var2 = var5.useMemo;
                var0 = var14.integrationTypesConfig;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var10
                    var0 = {};
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var4 = 6;
                    var1 = var8[var4];
                    var6 = undefined;
                    var1 = var7.bind(var6)(var1);
                    var1 = var1.ApplicationIntegrationType;
                    var1 = var1.USER_INSTALL;
                    var0.type = var1;
                    var1 = 7;
                    var1 = var8[var1];
                    var1 = var7.bind(var6)(var1);
                    var1 = var1.UserPlusIcon;
                    var0.icon = var1;
                    var3 = 8;
                    var1 = var8[var3];
                    var1 = var7.bind(var6)(var1);
                    var5 = var1.intl;
                    var2 = var5.string;
                    var1 = var8[var3];
                    var1 = var7.bind(var6)(var1);
                    var1 = var1.t;
                    var1 = var1.aCg60P;
                    var1 = var2.bind(var5)(var1);
                    var0.label = var1;
                    var1 = var8[var3];
                    var1 = var7.bind(var6)(var1);
                    var5 = var1.intl;
                    var2 = var5.string;
                    var1 = var8[var3];
                    var1 = var7.bind(var6)(var1);
                    var1 = var1.t;
                    var1 = var1.YeiIUZ;
                    var1 = var2.bind(var5)(var1);
                    var0.subLabel = var1;
                    var1 = false;
                    var0.beta = var1;
                    var2 = new Array(2);
                    var2[0] = var0;
                    var0 = {};
                    var4 = var8[var4];
                    var4 = var7.bind(var6)(var4);
                    var4 = var4.ApplicationIntegrationType;
                    var4 = var4.GUILD_INSTALL;
                    var0.type = var4;
                    var4 = 9;
                    var4 = var8[var4];
                    var4 = var7.bind(var6)(var4);
                    var4 = var4.ServerIcon;
                    var0.icon = var4;
                    var4 = var8[var3];
                    var4 = var7.bind(var6)(var4);
                    var9 = var4.intl;
                    var5 = var9.string;
                    var4 = var8[var3];
                    var4 = var7.bind(var6)(var4);
                    var4 = var4.t;
                    var4 = var4.E64YCz;
                    var4 = var5.bind(var9)(var4);
                    var0.label = var4;
                    var4 = var8[var3];
                    var4 = var7.bind(var6)(var4);
                    var5 = var4.intl;
                    var4 = var5.string;
                    var3 = var8[var3];
                    var3 = var7.bind(var6)(var3);
                    var3 = var3.t;
                    var3 = var3.bbtoKm;
                    var3 = var4.bind(var5)(var3);
                    var0.subLabel = var3;
                    var0.beta = var1;
                    var2[1] = var0;
                    var1 = var2.filter;
                    var0 = function(arg0) { // Environment: var0
                        _fun47975: for (var _fun47975_ip = 0;;) switch (_fun47975_ip) {
                            case 0:
                                var0 = _closure2_slot0;
                                var3 = var0.integrationTypesConfig;
                                var1 = null;
                                var2 = var1 == var3;
                                var0 = undefined;
                                if (var2) {
                                    _fun47975_ip = 51;
                                    continue _fun47975
                                }
                            case 24:
                                var2 = arg0;
                                var2 = var2.type;
                                var2 = var3[var2];
                                var3 = var1 == var2;
                                var0 = undefined;
                                if (var3) {
                                    _fun47975_ip = 51;
                                    continue _fun47975
                                }
                            case 45:
                                var0 = var2.oauth2InstallParams;
                            case 51:
                                var0 = var1 != var0;
                                return var0;
                        }
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var12 = var2.bind(var5)(var0, var1);
                var _closure2_slot2 = var12;
                var7 = null;
                if (!(var7 == var4)) {
                    _fun47972_ip = 165;
                    continue _fun47972
                }
            case 119:
                var2 = _closure1_slot5;
                var1 = _closure1_slot4;
                var0 = {};
                var6 = var9.appIcon;
                var5 = new Array(2);
                var5[0] = var6;
                var6 = var9.loadingIcon;
                var5[1] = var6;
                var0.style = var5;
                var6 = var2.bind(var3)(var1, var0);
                _fun47972_ip = 211;
                continue _fun47972;
            case 165:
                var2 = _closure1_slot5;
                var1 = _closure1_slot1;
                var5 = _closure1_slot2;
                var0 = 10;
                var0 = var5[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var5 = var9.appIcon;
                var0.style = var5;
                var0.source = var4;
                var6 = var2.bind(var3)(var1, var0);
            case 211:
                var2 = _closure1_slot6;
                var1 = _closure1_slot4;
                var0 = {};
                var4 = var9.container;
                var0.style = var4;
                var4 = {};
                var5 = var9.header;
                var4.style = var5;
                var13 = _closure1_slot5;
                var5 = {};
                var11 = var9.appIconMask;
                var5.style = var11;
                var5.children = var6;
                var6 = var13.bind(var3)(var1, var5);
                var5 = new Array(3);
                var5[0] = var6;
                var11 = _closure1_slot0;
                var15 = _closure1_slot2;
                var6 = 11;
                var6 = var15[var6];
                var6 = var11.bind(var3)(var6);
                var11 = var6.Text;
                var6 = {
                    'variant': 'heading-lg/bold',
                    'color': 'mobile-text-heading-primary'
                };
                var15 = var14.name;
                var6.children = var15;
                var6 = var13.bind(var3)(var11, var6);
                var5[1] = var6;
                var6 = var14.description;
                var6 = var7 != var6;
                if (!var6) {
                    _fun47972_ip = 421;
                    continue _fun47972
                }
            case 345:
                var13 = _closure1_slot5;
                var11 = _closure1_slot1;
                var15 = _closure1_slot2;
                var7 = 12;
                var7 = var15[var7];
                var11 = var11.bind(var3)(var7);
                var7 = {};
                var15 = true;
                var7.hideName = var15;
                var7.application = var14;
                var14 = var9.descriptionContainer;
                var7.viewContainerStyle = var14;
                var14 = var9.descriptionMainContainer;
                var7.mainContainerStyle = var14;
                var14 = var9.expandDescriptionCTA;
                var7.expandDescriptionCTAStyle = var14;
                var6 = var13.bind(var3)(var11, var7);
            case 421:
                var5[2] = var6;
                var4.children = var5;
                var5 = var2.bind(var3)(var1, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot5;
                var6 = _closure1_slot4;
                var5 = {};
                var9 = var9.rows;
                var5.style = var9;
                var9 = _closure1_slot0;
                var11 = _closure1_slot2;
                var8 = 13;
                var8 = var11[var8];
                var8 = var9.bind(var3)(var8);
                var9 = var8.TableRowGroup;
                var8 = {};
                var11 = var12.map;
                var10 = function(arg0, arg1) { // Environment: var10
                    _fun47976: for (var _fun47976_ip = 0;;) switch (_fun47976_ip) {
                        case 0:
                            var0 = arg0;
                            var7 = arg1;
                            var _closure3_slot0 = var0;
                            var4 = _closure1_slot5;
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 14;
                            var1 = var3[var1];
                            var3 = undefined;
                            var1 = var2.bind(var3)(var1);
                            var2 = var1.TableRow;
                            var1 = {};
                            var9 = var0.icon;
                            var8 = {};
                            var10 = 'interactive-text-default';
                            var8.color = var10;
                            var8 = var4.bind(var3)(var9, var8);
                            var1.icon = var8;
                            var8 = var0.label;
                            var1.label = var8;
                            var8 = var0.subLabel;
                            var1.subLabel = var8;
                            var5 = function() {
                                var2 = _closure2_slot1;
                                var0 = _closure3_slot0;
                                var1 = var0.type;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var1.onPress = var5;
                            var5 = 0;
                            var5 = var5 === var7;
                            var1.start = var5;
                            var5 = _closure2_slot2;
                            var8 = var5.length;
                            var5 = 1;
                            var5 = var8 - var5;
                            var5 = var7 === var5;
                            var1.end = var5;
                            var5 = true;
                            var1.arrow = var5;
                            var7 = var0.beta;
                            var5 = undefined;
                            if (!var7) {
                                _fun47976_ip = 192;
                                continue _fun47976
                            }
                        case 160:
                            var8 = _closure1_slot5;
                            var7 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var6 = 15;
                            var6 = var9[var6];
                            var7 = var7.bind(var3)(var6);
                            var6 = {};
                            var5 = var8.bind(var3)(var7, var6);
                        case 192:
                            var1.trailing = var5;
                            var0 = var0.type;
                            var0 = var4.bind(var3)(var2, var1, var0);
                            return var0;
                    }
                };
                var10 = var11.bind(var12)(var10);
                var8.children = var10;
                var8 = var7.bind(var3)(var9, var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var3;
    var2.useStyles = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 1417, 5354, 3248, 1234, 5362, 4704, 3941, 5364, 5367, 4900, 5368, 2]);