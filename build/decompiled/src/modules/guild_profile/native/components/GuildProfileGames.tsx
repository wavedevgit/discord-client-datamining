// modules/guild_profile/native/components/GuildProfileGames.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var0 = function arg0() {
        var0 = arg0;
        var8 = var0.game;
        var10 = var0.activityLevel;
        var0 = _closure1_slot7;
        var3 = undefined;
        var4 = var0.bind(var3)();
        var2 = _closure1_slot6;
        var1 = _closure1_slot4;
        var0 = {};
        var4 = var4.favoriteGame;
        var0.style = var4;
        var7 = _closure1_slot5;
        var6 = _closure1_slot1;
        var9 = _closure1_slot2;
        var4 = 5;
        var4 = var9[var4];
        var6 = var6.bind(var3)(var4);
        var4 = {};
        var4.game = var8;
        var4.activityLevel = var10;
        var6 = var7.bind(var3)(var6, var4);
        var4 = new Array(2);
        var4[0] = var6;
        var7 = _closure1_slot5;
        var6 = _closure1_slot0;
        var5 = 6;
        var5 = var9[var5];
        var5 = var6.bind(var3)(var5);
        var6 = var5.Text;
        var5 = {
            'variant': 'text-sm/medium',
            'color': 'text-subtle'
        };
        var8 = var8.name;
        var5.children = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot8 = var0;
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
    var1 = arg3;
    var0 = undefined;
    var1 = var1.bind(var0)(var4);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.View;
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var4 = var1.jsx;
    var _closure1_slot5 = var4;
    var1 = var1.jsxs;
    var _closure1_slot6 = var1;
    var1 = 3;
    var1 = var6[var1];
    var7 = var5.bind(var0)(var1);
    var4 = var7.createStyles;
    var1 = {};
    var8 = {
        'display': 'flex',
        'flexDirection': 'row',
        'gap': 8
    };
    var1.container = var8;
    var8 = {
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center',
        'gap': 8
    };
    var1.favoriteGame = var8;
    var8 = {
        'position': 'relative',
        'width': 32,
        'height': 32
    };
    var1.lastItem = var8;
    var8 = {
        'position': 'absolute',
        'top': 0,
        'left': 0,
        'right': 0,
        'bottom': 0
    };
    var9 = 'absolute';
    var10 = 4;
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_SCRIM;
    var8.backgroundColor = var12;
    var10 = var6[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.radii;
    var10 = var10.xs;
    var8.borderRadius = var10;
    var1.lastItemOverlay = var8;
    var8 = {};
    var8.position = var9;
    var1.lastItemImage = var8;
    var8 = {
        'display': 'flex',
        'justifyContent': 'center',
        'alignItems': 'center',
        'width': 32,
        'height': 32
    };
    var1.lastItemText = var8;
    var1 = var4.bind(var7)(var1);
    var _closure1_slot7 = var1;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_profile/native/components/GuildProfileGames.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function arg0() {
        _fun59846: for (var _fun59846_ip = 0;;) switch (_fun59846_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.profile;
                var _closure2_slot0 = var0;
                var1 = _closure1_slot7;
                var5 = undefined;
                var7 = var1.bind(var5)();
                var _closure2_slot1 = var7;
                var10 = var0.gameActivity;
                var _closure2_slot2 = var10;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 7;
                var1 = var3[var1];
                var1 = var2.bind(var5)(var1);
                var1 = var1.bind(var5)(var0);
                var11 = var1.gamesToDisplay;
                var2 = var1.lastGameToDisplay;
                var _closure2_slot3 = var2;
                var1 = var1.remainingGames;
                var _closure2_slot4 = var1;
                var4 = _closure1_slot3;
                var9 = var4.useMemo;
                var3 = new Array(4);
                var3[0] = var2;
                var3[1] = var1;
                var3[2] = var10;
                var3[3] = var7;
                var2 = function() { // Environment: var8
                    _fun59847: for (var _fun59847_ip = 0;;) switch (_fun59847_ip) {
                        case 0:
                            var0 = _closure2_slot3;
                            var2 = null;
                            var1 = var2 == var0;
                            var0 = null;
                            if (var1) {
                                _fun59847_ip = 398;
                                continue _fun59847
                            }
                        case 21:
                            var4 = _closure2_slot3;
                            var3 = var4.getIconURL;
                            var1 = 24;
                            var1 = var3.bind(var4)(var1);
                            var1 = var2 == var1;
                            var0 = null;
                            if (var1) {
                                _fun59847_ip = 398;
                                continue _fun59847
                            }
                        case 51:
                            var1 = _closure2_slot4;
                            var2 = var1.length;
                            var1 = 0;
                            if (!(var1 !== var2)) {
                                _fun59847_ip = 331;
                                continue _fun59847
                            }
                        case 69:
                            var4 = _closure1_slot6;
                            var3 = _closure1_slot4;
                            var2 = {};
                            var11 = _closure2_slot1;
                            var1 = var11.lastItem;
                            var2.style = var1;
                            var8 = _closure1_slot5;
                            var6 = _closure1_slot1;
                            var13 = _closure1_slot2;
                            var1 = 5;
                            var5 = var13[var1];
                            var1 = undefined;
                            var6 = var6.bind(var1)(var5);
                            var5 = {};
                            var9 = var11.lastItemImage;
                            var5.style = var9;
                            var9 = _closure2_slot3;
                            var5.game = var9;
                            var12 = _closure2_slot2;
                            var9 = var9.id;
                            var9 = var12[var9];
                            var5.activityLevel = var9;
                            var6 = var8.bind(var1)(var6, var5);
                            var5 = new Array(3);
                            var5[0] = var6;
                            var9 = _closure1_slot5;
                            var8 = _closure1_slot4;
                            var6 = {};
                            var12 = var11.lastItemOverlay;
                            var6.style = var12;
                            var6 = var9.bind(var1)(var8, var6);
                            var5[1] = var6;
                            var9 = _closure1_slot5;
                            var8 = _closure1_slot4;
                            var6 = {};
                            var11 = var11.lastItemText;
                            var6.style = var11;
                            var12 = _closure1_slot5;
                            var11 = _closure1_slot0;
                            var10 = 6;
                            var10 = var13[var10];
                            var10 = var11.bind(var1)(var10);
                            var11 = var10.Text;
                            var10 = {
                                'variant': 'text-xs/medium',
                                'color': 'always-white'
                            };
                            var13 = _closure2_slot4;
                            var15 = var13.length;
                            var13 = global;
                            var13 = var13.HermesInternal;
                            var14 = var13.concat;
                            var13 = '+';
                            var13 = var14.bind(var13)(var15);
                            var10.children = var13;
                            var10 = var12.bind(var1)(var11, var10);
                            var6.children = var10;
                            var6 = var9.bind(var1)(var8, var6);
                            var5[2] = var6;
                            var2.children = var5;
                            var1 = var4.bind(var1)(var3, var2);
                            _fun59847_ip = 395;
                            continue _fun59847;
                        case 331:
                            var5 = _closure1_slot5;
                            var3 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var2 = 5;
                            var2 = var4[var2];
                            var4 = undefined;
                            var3 = var3.bind(var4)(var2);
                            var2 = {};
                            var6 = _closure2_slot3;
                            var2.game = var6;
                            var7 = _closure2_slot2;
                            var6 = var6.id;
                            var6 = var7[var6];
                            var2.activityLevel = var6;
                            var1 = var5.bind(var4)(var3, var2);
                        case 395:
                            var0 = var1;
                        case 398:
                            return var0;
                    }
                };
                var12 = var9.bind(var4)(var2, var3);
                var9 = var4.useCallback;
                var3 = function(arg0) { // Environment: var8
                    var4 = arg0;
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 8;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.open;
                    var1 = {};
                    var7 = var4.id;
                    var5 = global;
                    var5 = var5.HermesInternal;
                    var6 = var5.concat;
                    var5 = 'profile-game-';
                    var5 = var6.bind(var5)(var7);
                    var1.key = var5;
                    var4 = var4.name;
                    var1.content = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var2 = new Array(0);
                var2 = var9.bind(var4)(var3, var2);
                var _closure2_slot5 = var2;
                var1 = var1.length;
                var9 = 0;
                var1 = var1 > var9;
                var3 = var4.useCallback;
                var2 = new Array(1);
                var2[0] = var0;
                var0 = function() { // Environment: var8
                    var4 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 9;
                    var3 = var1[var0];
                    var0 = undefined;
                    var6 = var4.bind(var0)(var3);
                    var5 = var6.openLazy;
                    var3 = _closure1_slot0;
                    var2 = 11;
                    var2 = var1[var2];
                    var3 = var3.bind(var0)(var2);
                    var2 = 10;
                    var2 = var1[var2];
                    var1 = var1.paths;
                    var10 = var3.bind(var0)(var2, var1);
                    var3 = {};
                    var1 = _closure2_slot0;
                    var3.profile = var1;
                    var9 = 'GuildProfileGamesActionSheet{profile.id}';
                    var7 = 'stack';
                    var11 = var6;
                    var8 = var3;
                    var1 = var11[var5](var10, var9, var8, var7, var6);
                    return var0;
                };
                var13 = var3.bind(var4)(var0, var2);
                var3 = null;
                var2 = var3 == var11;
                var0 = null;
                if (var2) {
                    _fun59846_ip = 451;
                    continue _fun59846
                }
            case 206:
                var2 = var11.length;
                var0 = null;
                if (!(var9 !== var2)) {
                    _fun59846_ip = 451;
                    continue _fun59846
                }
            case 220:
                var3 = var11.length;
                var2 = 1;
                if (!(var2 !== var3)) {
                    _fun59846_ip = 376;
                    continue _fun59846
                }
            case 235:
                var4 = _closure1_slot6;
                if (var1) {
                    _fun59846_ip = 296;
                    continue _fun59846
                }
            case 242:
                var2 = _closure1_slot4;
                var1 = {};
                var3 = var7.container;
                var1.style = var3;
                var14 = var11.map;
                var3 = function(arg0) { // Environment: var8
                    var0 = arg0;
                    var4 = _closure1_slot5;
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 5;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var1.game = var0;
                    var7 = _closure2_slot2;
                    var6 = var0.id;
                    var6 = var7[var6];
                    var1.activityLevel = var6;
                    var5 = _closure2_slot5;
                    var1.onPress = var5;
                    var0 = var0.id;
                    var0 = var4.bind(var3)(var2, var1, var0);
                    return var0;
                };
                var14 = var14.bind(var11)(var3);
                var3 = new Array(2);
                var3[0] = var14;
                var3[1] = var12;
                var1.children = var3;
                var1 = var4.bind(var5)(var2, var1);
                _fun59846_ip = 374;
                continue _fun59846;
            case 296:
                var3 = _closure1_slot0;
                var14 = _closure1_slot2;
                var2 = 12;
                var2 = var14[var2];
                var2 = var3.bind(var5)(var2);
                var3 = var2.PressableHighlight;
                var2 = {};
                var14 = var7.container;
                var2.style = var14;
                var2.onPress = var13;
                var13 = var11.map;
                var8 = function(arg0) { // Environment: var8
                    var0 = arg0;
                    var4 = _closure1_slot5;
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 5;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var1.game = var0;
                    var6 = _closure2_slot2;
                    var5 = var0.id;
                    var5 = var6[var5];
                    var1.activityLevel = var5;
                    var0 = var0.id;
                    var0 = var4.bind(var3)(var2, var1, var0);
                    return var0;
                };
                var13 = var13.bind(var11)(var8);
                var8 = new Array(2);
                var8[0] = var13;
                var8[1] = var12;
                var2.children = var8;
                var1 = var4.bind(var5)(var3, var2);
            case 374:
                _fun59846_ip = 448;
                continue _fun59846;
            case 376:
                var4 = _closure1_slot5;
                var3 = _closure1_slot4;
                var2 = {};
                var7 = var7.container;
                var2.style = var7;
                var8 = _closure1_slot5;
                var7 = _closure1_slot8;
                var6 = {};
                var12 = var11[var9];
                var6.game = var12;
                var9 = var11[var9];
                var9 = var9.id;
                var9 = var10[var9];
                var6.activityLevel = var9;
                var6 = var8.bind(var5)(var7, var6);
                var2.children = var6;
                var1 = var4.bind(var5)(var3, var2);
            case 448:
                var0 = var1;
            case 451:
                return var0;
        }
    };
    var2.default = var3;
    var2.useStyles = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 7401, 3932, 7405, 3139, 3269, 7406, 1307, 4897, 2]);