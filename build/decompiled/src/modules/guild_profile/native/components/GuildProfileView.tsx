// modules/guild_profile/native/components/GuildProfileView.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var8;
    var4 = function arg0, arg1() {
        _fun59766: for (var _fun59766_ip = 0;;) switch (_fun59766_ip) {
            case 0:
                var5 = arg1;
                var0 = new Array(2);
                var0[0] = var5;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 5;
                var1 = var4[var1];
                var4 = undefined;
                var6 = var3.bind(var4)(var1);
                var3 = var6.isThemeDark;
                var1 = arg0;
                var1 = var3.bind(var6)(var1);
                var3 = _closure1_slot0;
                var6 = _closure1_slot2;
                if (var1) {
                    _fun59766_ip = 97;
                    continue _fun59766
                }
            case 61:
                var1 = 7;
                var1 = var6[var1];
                var7 = var3.bind(var4)(var1);
                var2 = var7.darkenColor;
                var1 = 0.8;
                var1 = var2.bind(var7)(var5, var1);
                _fun59766_ip = 131;
                continue _fun59766;
            case 97:
                var2 = 6;
                var2 = var6[var2];
                var4 = var3.bind(var4)(var2);
                var3 = var4.brightenColor;
                var2 = 0.8;
                var1 = var3.bind(var4)(var5, var2);
            case 131:
                var0[1] = var1;
                return var0;
        }
    };
    var _closure1_slot12 = var4;
    var0 = function arg0() {
        _fun59767: for (var _fun59767_ip = 0;;) switch (_fun59767_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.guildProfile;
                var _closure2_slot0 = var6;
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 10;
                var2 = var5[var2];
                var3 = undefined;
                var7 = var4.bind(var3)(var2);
                var4 = var7.useStateFromStores;
                var8 = _closure1_slot6;
                var2 = new Array(1);
                var2[0] = var8;
                var1 = function() { // Environment: var1
                    _fun59768: for (var _fun59768_ip = 0;;) switch (_fun59768_ip) {
                        case 0:
                            var4 = _closure1_slot6;
                            var3 = var4.getGuild;
                            var1 = _closure2_slot0;
                            var1 = var1.id;
                            var1 = var3.bind(var4)(var1);
                            var3 = null;
                            if (!(var3 == var1)) {
                                _fun59768_ip = 72;
                                continue _fun59768
                            }
                        case 35:
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var3 = 11;
                            var4 = var4[var3];
                            var3 = undefined;
                            var4 = var5.bind(var3)(var4);
                            var3 = var4.fromGuildProfile;
                            var2 = _closure2_slot0;
                            var1 = var3.bind(var4)(var2);
                        case 72:
                            var2 = var1.features;
                            var1 = var2.has;
                            var0 = _closure1_slot7;
                            var0 = var0.DISCOVERABLE;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var1 = var4.bind(var7)(var2, var1);
                var4 = _closure1_slot1;
                var2 = 12;
                var2 = var5[var2];
                var2 = var4.bind(var3)(var2);
                var2 = var2.bind(var3)();
                var7 = var2.width;
                var2 = _closure1_slot10;
                var5 = var2.bind(var3)();
                if (!var1) {
                    _fun59767_ip = 116;
                    continue _fun59767
                }
            case 104:
                var2 = var6.customBanner;
                var1 = null;
                if (!(var1 == var2)) {
                    _fun59767_ip = 139;
                    continue _fun59767
                }
            case 116:
                var4 = _closure1_slot8;
                var2 = _closure1_slot14;
                var1 = {};
                var1.guildProfile = var6;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            case 139:
                var8 = _closure1_slot1;
                var9 = _closure1_slot2;
                var1 = 13;
                var1 = var9[var1];
                var4 = var8.bind(var3)(var1);
                var2 = var4.getGuildDiscoverySplashSource;
                var1 = {};
                var10 = var6.id;
                var1.id = var10;
                var6 = var6.customBanner;
                var1.splash = var6;
                var6 = 14;
                var6 = var9[var6];
                var6 = var8.bind(var3)(var6);
                var6 = var6.bind(var3)();
                var6 = var6 * var7;
                var1.size = var6;
                var4 = var2.bind(var4)(var1);
                var2 = _closure1_slot8;
                var1 = _closure1_slot5;
                var0 = {};
                var5 = var5.imageBanner;
                var0.style = var5;
                var0.source = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var9 = var0.guildProfile;
        var0 = _closure1_slot10;
        var3 = undefined;
        var7 = var0.bind(var3)();
        var1 = _closure1_slot1;
        var8 = _closure1_slot2;
        var0 = 15;
        var0 = var8[var0];
        var0 = var1.bind(var3)(var0);
        var6 = var0.bind(var3)();
        var2 = _closure1_slot0;
        var0 = 16;
        var0 = var8[var0];
        var10 = var2.bind(var3)(var0);
        var5 = var10.useToken;
        var0 = 9;
        var0 = var8[var0];
        var0 = var1.bind(var3)(var0);
        var0 = var0.colors;
        var0 = var0.BACKGROUND_BASE_LOWEST;
        var5 = var5.bind(var10)(var0);
        var0 = 17;
        var0 = var8[var0];
        var2 = var2.bind(var3)(var0);
        var0 = var2.useProfilePrimaryColor;
        var5 = var0.bind(var2)(var9, var5);
        var2 = _closure1_slot8;
        var0 = 18;
        var0 = var8[var0];
        var1 = var1.bind(var3)(var0);
        var0 = {};
        var7 = var7.colorBanner;
        var0.style = var7;
        var7 = _closure1_slot11;
        var7 = var7.START;
        var0.start = var7;
        var7 = _closure1_slot11;
        var7 = var7.END;
        var0.end = var7;
        var4 = _closure1_slot12;
        var4 = var4.bind(var3)(var6, var5);
        var0.colors = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot14 = var0;
    var1 = global;
    var9 = var1.Object;
    var6 = var9.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var9)(var2, var0, var3);
    var0 = 0;
    var6 = var8[var0];
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var8[var3];
    var3 = var7.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot4 = var6;
    var3 = var3.Image;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var8[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var8[var3];
    var3 = var7.bind(var0)(var3);
    var3 = var3.GuildFeatures;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var8[var3];
    var3 = var7.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot8 = var6;
    var3 = var3.jsxs;
    var _closure1_slot9 = var3;
    var3 = 8;
    var3 = var8[var3];
    var9 = var7.bind(var0)(var3);
    var6 = var9.createStyles;
    var3 = {};
    var10 = {};
    var11 = 9;
    var13 = var8[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOW;
    var10.backgroundColor = var13;
    var3.container = var10;
    var10 = {
        'height': 140,
        'width': '100%'
    };
    var3.colorBanner = var10;
    var10 = {
        'height': 140,
        'width': '100%',
        'objectFit': 'cover'
    };
    var3.imageBanner = var10;
    var10 = {
        'marginTop': 12,
        'paddingHorizontal': 16,
        'gap': 16
    };
    var3.body = var10;
    var10 = {
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center',
        'gap': 8
    };
    var3.error = var10;
    var10 = {};
    var13 = 160;
    var10.marginTop = var13;
    var3.buttonContainer = var10;
    var10 = {
        'paddingHorizontal': 16,
        'marginTop': 4294967264,
        'display': 'flex',
        'flexDirection': 'column',
        'gap': 0
    };
    var3.header = var10;
    var10 = {
        'width': 86,
        'height': 86,
        'borderRadius': 28.666666666666668,
        'backgroundColor': null,
        'display': 'flex',
        'justifyContent': 'center',
        'alignItems': 'center',
        'overflow': 'hidden'
    };
    var11 = var8[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_BASE_LOW;
    var10.backgroundColor = var11;
    var3.avatarBackground = var10;
    var10 = {};
    var11 = 24;
    var10.fontSize = var11;
    var3.restrictedAcronym = var10;
    var3 = var6.bind(var9)(var3);
    var _closure1_slot10 = var3;
    var9 = var1.Object;
    var6 = var9.freeze;
    var1 = {};
    var10 = {
        'x': 0,
        'y': 1
    };
    var1.START = var10;
    var10 = {
        'x': 1.5,
        'y': 0
    };
    var1.END = var10;
    var1 = var6.bind(var9)(var1);
    var _closure1_slot11 = var1;
    var6 = 23;
    var6 = var8[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/guild_profile/native/components/GuildProfileView.tsx';
    var6 = var7.bind(var8)(var6);
    var5 = function arg0() {
        _fun59770: for (var _fun59770_ip = 0;;) switch (_fun59770_ip) {
            case 0:
                var1 = arg0;
                var10 = var1.guildProfile;
                var _closure2_slot0 = var10;
                var1 = _closure1_slot10;
                var3 = undefined;
                var6 = var1.bind(var3)();
                var4 = _closure1_slot3;
                var2 = var4.useMemo;
                var1 = new Array(1);
                var1[0] = var10;
                var0 = function() { // Environment: var0
                    _fun59771: for (var _fun59771_ip = 0;;) switch (_fun59771_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun59771_ip = 107;
                                continue _fun59771
                            }
                        case 13:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 13;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.getGuildIconSource;
                            var1 = {};
                            var4 = _closure2_slot0;
                            var5 = var4.id;
                            var1.id = var5;
                            var4 = var4.icon;
                            var1.icon = var4;
                            var4 = 96;
                            var1.size = var4;
                            var4 = true;
                            var1.canAnimate = var4;
                            var2 = var2.bind(var3)(var1);
                            var4 = 'number';
                            var3 = typeof var2;
                            var1 = null;
                            if (!(var4 !== var3)) {
                                _fun59771_ip = 105;
                                continue _fun59771
                            }
                        case 100:
                            var1 = var2.uri;
                        case 105:
                            return var1;
                        case 107:
                            return var0;
                    }
                };
                var11 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot9;
                var1 = _closure1_slot4;
                var0 = {};
                var4 = var6.container;
                var0.style = var4;
                var8 = _closure1_slot8;
                var5 = _closure1_slot13;
                var4 = {};
                var4.guildProfile = var10;
                var5 = var8.bind(var3)(var5, var4);
                var4 = new Array(3);
                var4[0] = var5;
                var9 = _closure1_slot8;
                var8 = _closure1_slot1;
                var12 = _closure1_slot2;
                var5 = 19;
                var5 = var12[var5];
                var8 = var8.bind(var3)(var5);
                var5 = {};
                var5.profile = var10;
                var5.guildIconSource = var11;
                var5 = var9.bind(var3)(var8, var5);
                var4[1] = var5;
                var5 = {};
                var6 = var6.body;
                var5.style = var6;
                var8 = var10.description;
                var6 = null;
                var8 = var6 != var8;
                if (!var8) {
                    _fun59770_ip = 191;
                    continue _fun59770
                }
            case 175:
                var6 = var10.description;
                var9 = var6.length;
                var6 = 0;
                var8 = var9 > var6;
            case 191:
                if (!var8) {
                    _fun59770_ip = 252;
                    continue _fun59770
                }
            case 194:
                var11 = _closure1_slot8;
                var9 = _closure1_slot0;
                var12 = _closure1_slot2;
                var6 = 20;
                var6 = var12[var6];
                var6 = var9.bind(var3)(var6);
                var9 = var6.Text;
                var6 = {
                    'variant': 'text-md/medium',
                    'color': 'text-subtle'
                };
                var12 = var10.description;
                var6.children = var12;
                var8 = var11.bind(var3)(var9, var6);
            case 252:
                var6 = new Array(3);
                var6[0] = var8;
                var13 = _closure1_slot8;
                var8 = _closure1_slot1;
                var11 = _closure1_slot2;
                var9 = 21;
                var9 = var11[var9];
                var12 = var8.bind(var3)(var9);
                var9 = {};
                var9.profile = var10;
                var9 = var13.bind(var3)(var12, var9);
                var6[1] = var9;
                var9 = _closure1_slot8;
                var7 = 22;
                var7 = var11[var7];
                var8 = var8.bind(var3)(var7);
                var7 = {};
                var7.profile = var10;
                var7 = var9.bind(var3)(var8, var7);
                var6[2] = var7;
                var5.children = var6;
                var5 = var2.bind(var3)(var1, var5);
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var5;
    var2.getBackgroundForProfile = var4;
    var2.useStyles = var3;
    var2.DiagonalGradient = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1410, 660, 33, 3148, 3199, 3199, 1297, 671, 566, 1598, 1464, 1417, 7382, 3237, 3142, 7383, 4089, 7384, 3932, 7400, 7407, 2]);