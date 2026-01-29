// modules/main_tabs_v2/native/tabs/guilds/HomePanelContent.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var11 = 1;
    var6 = var5[var11];
    var3 = metroImportAll;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.useYouBarTotalHeight;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var10 = var3.DM_WIDTH;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot7 = var7;
    var3 = var3.jsxs;
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {};
    var9.flex = var11;
    var3.container = var9;
    var9 = {};
    var9.flex = var11;
    var3.guildsListContainerGestured = var9;
    var9 = {};
    var9.flex = var11;
    var9.width = var10;
    var3.guildLisetContainerDefault = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot9 = var3;
    var3 = var6.memo;
    var1 = function() { // Environment: var1
        _fun101092: for (var _fun101092_ip = 0;;) switch (_fun101092_ip) {
            case 0:
                var1 = _closure1_slot9;
                var3 = undefined;
                var10 = var1.bind(var3)();
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 7;
                var1 = var4[var1];
                var1 = var2.bind(var3)(var1);
                var7 = var1.MobileHomeDrawerExperiment;
                var5 = var7.useConfig;
                var1 = {};
                var8 = 'guilds';
                var1.location = var8;
                var1 = var5.bind(var7)(var1);
                var7 = var1.enableHome;
                var _closure2_slot0 = var7;
                var1 = _closure1_slot6;
                var8 = var1.bind(var3)();
                var1 = 8;
                var1 = var4[var1];
                var5 = var2.bind(var3)(var1);
                var1 = var5.useMobileQuestDockHeight;
                var5 = var1.bind(var5)();
                var9 = _closure1_slot1;
                var1 = 9;
                var1 = var4[var1];
                var1 = var9.bind(var3)(var1);
                var1 = var1.spacing;
                var1 = var1.PX_16;
                var1 = var8 + var1;
                var9 = var1 + var5;
                var1 = 10;
                var1 = var4[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.useNavigation;
                var5 = var1.bind(var2)();
                var _closure2_slot1 = var5;
                var4 = _closure1_slot4;
                var2 = var4.useState;
                var1 = false;
                var8 = var2.bind(var4)(var1);
                var2 = _closure1_slot3;
                var1 = 2;
                var2 = var2.bind(var3)(var8, var1);
                var1 = 0;
                var8 = var2[var1];
                var1 = 1;
                var1 = var2[var1];
                var _closure2_slot2 = var1;
                var2 = var4.useEffect;
                var1 = new Array(2);
                var1[0] = var5;
                var1[1] = var7;
                var0 = function() { // Environment: var0
                    _fun101093: for (var _fun101093_ip = 0;;) switch (_fun101093_ip) {
                        case 0:
                            var4 = function(arg0) { // Original name: handleStateChange, environment: var0
                                _fun101094: for (var _fun101094_ip = 0;;) switch (_fun101094_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var0 = var0.data;
                                        var5 = var0.state;
                                        var2 = _closure1_slot0;
                                        var1 = _closure1_slot2;
                                        var0 = 11;
                                        var1 = var1[var0];
                                        var0 = undefined;
                                        var4 = var2.bind(var0)(var1);
                                        var3 = var4.coerceGuildsRoute;
                                        var2 = null;
                                        var6 = var2 == var5;
                                        var1 = undefined;
                                        if (var6) {
                                            _fun101094_ip = 100;
                                            continue _fun101094
                                        }
                                    case 55:
                                        var6 = var5.routes;
                                        var7 = var2 == var6;
                                        var1 = undefined;
                                        if (var7) {
                                            _fun101094_ip = 100;
                                            continue _fun101094
                                        }
                                    case 70:
                                        var8 = var2 == var5;
                                        var7 = undefined;
                                        if (var8) {
                                            _fun101094_ip = 84;
                                            continue _fun101094
                                        }
                                    case 79:
                                        var7 = var5.index;
                                    case 84:
                                        var8 = var2 != var7;
                                        var5 = 0;
                                        if (!var8) {
                                            _fun101094_ip = 96;
                                            continue _fun101094
                                        }
                                    case 93:
                                        var5 = var7;
                                    case 96:
                                        var1 = var6[var5];
                                    case 100:
                                        var1 = var3.bind(var4)(var1);
                                        if (!(var2 != var1)) {
                                            _fun101094_ip = 148;
                                            continue _fun101094
                                        }
                                    case 109:
                                        var1 = var1.params;
                                        var2 = var2 == var1;
                                        var3 = undefined;
                                        if (var2) {
                                            _fun101094_ip = 130;
                                            continue _fun101094
                                        }
                                    case 124:
                                        var3 = var1.drawerOpen;
                                    case 130:
                                        var2 = _closure2_slot2;
                                        var1 = true;
                                        var1 = var1 === var3;
                                        var1 = var2.bind(var0)(var1);
                                    case 148:
                                        return var0;
                                }
                            };
                            var _closure3_slot0 = var4;
                            var2 = _closure2_slot0;
                            if (var2) {
                                _fun101093_ip = 27;
                                continue _fun101093
                            }
                        case 23:
                            var2 = undefined;
                            return var2;
                        case 27:
                            var3 = _closure2_slot1;
                            var2 = var3.addListener;
                            var1 = 'state';
                            var1 = var2.bind(var3)(var1, var4);
                            var0 = function() { // Environment: var0
                                var3 = _closure2_slot1;
                                var2 = var3.removeListener;
                                var1 = _closure3_slot0;
                                var0 = 'state';
                                var0 = var2.bind(var3)(var0, var1);
                                var0 = undefined;
                                return var0;
                            };
                            return var0;
                    }
                };
                var0 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot8;
                var1 = _closure1_slot5;
                var0 = {};
                var4 = var10.container;
                var0.style = var4;
                var5 = _closure1_slot7;
                var4 = {};
                if (var8) {
                    _fun101092_ip = 274;
                    continue _fun101092
                }
            case 266:
                var8 = var10.guildLisetContainerDefault;
                _fun101092_ip = 280;
                continue _fun101092;
            case 274:
                var8 = var10.guildsListContainerGestured;
            case 280:
                var4.style = var8;
                var11 = _closure1_slot7;
                var10 = _closure1_slot1;
                var12 = _closure1_slot2;
                var8 = 12;
                var8 = var12[var8];
                var10 = var10.bind(var3)(var8);
                var8 = {};
                var8.enableHome = var7;
                var8 = var11.bind(var3)(var10, var8);
                var4.children = var8;
                var5 = var5.bind(var3)(var1, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var5 = null;
                if (!var7) {
                    _fun101092_ip = 501;
                    continue _fun101092
                }
            case 347:
                var8 = _closure1_slot7;
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var6 = 13;
                var6 = var12[var6];
                var6 = var11.bind(var3)(var6);
                var7 = var6.FloatingActionButton;
                var6 = {};
                var10 = 14;
                var10 = var12[var10];
                var10 = var11.bind(var3)(var10);
                var13 = var10.PlusLargeIcon;
                var10 = {};
                var14 = 'md';
                var10.size = var14;
                var10 = var8.bind(var3)(var13, var10);
                var6.icon = var10;
                var10 = 15;
                var13 = var12[var10];
                var13 = var11.bind(var3)(var13);
                var14 = var13.intl;
                var13 = var14.string;
                var10 = var12[var10];
                var10 = var11.bind(var3)(var10);
                var10 = var10.t;
                var10 = var10.l5WIbf;
                var10 = var13.bind(var14)(var10);
                var6.accessibilityLabel = var10;
                var10 = 16;
                var10 = var12[var10];
                var10 = var11.bind(var3)(var10);
                var10 = var10.handleCreateJoinGuildPress;
                var6.onPress = var10;
                var6.positionBottom = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 501:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 17;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/tabs/guilds/HomePanelContent.tsx';
    var3 = var4.bind(var5)(var3);
    var2.HomePanelContent = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 13121, 660, 33, 1297, 3878, 5181, 671, 1470, 3872, 13122, 6992, 9100, 1234, 13181, 2]);