// modules/game_update/native/GameUpdateServerInvite.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot3 = var6;
    var3 = var3.Image;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot5 = var6;
    var3 = var3.jsxs;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = function() { // Environment: var1
        var0 = {};
        var1 = {};
        var4 = _closure1_slot1;
        var5 = _closure1_slot2;
        var2 = 4;
        var6 = var5[var2];
        var3 = undefined;
        var6 = var4.bind(var3)(var6);
        var6 = var6.radii;
        var6 = var6.lg;
        var1.borderRadius = var6;
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.colors;
        var6 = var6.BACKGROUND_SURFACE_HIGH;
        var1.backgroundColor = var6;
        var6 = 'hidden';
        var1.overflow = var6;
        var6 = '100%';
        var1.width = var6;
        var0.container = var1;
        var1 = {
            'position': 'relative',
            'width': '100%',
            'height': 82
        };
        var0.splashContainer = var1;
        var1 = {
            'width': '100%',
            'height': '100%'
        };
        var0.splashImage = var1;
        var1 = {
            'paddingHorizontal': 16,
            'paddingBottom': 16,
            'paddingTop': 44,
            'gap': 12
        };
        var0.contentContainer = var1;
        var1 = {
            'flexDirection': 'row',
            'alignItems': 'center',
            'gap': 4
        };
        var0.guildNameContainer = var1;
        var1 = {
            'flexDirection': 'row',
            'alignItems': 'center',
            'gap': 8
        };
        var0.memberCountContainer = var1;
        var1 = {
            'position': 'absolute',
            'bottom': 4294967264,
            'left': 16,
            'width': 64,
            'height': 64
        };
        var0.iconContainer = var1;
        var1 = {
            'flexDirection': 'row',
            'alignItems': 'center',
            'gap': 3
        };
        var0.memberItemContainer = var1;
        var1 = {
            'width': 8,
            'height': 8
        };
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.radii;
        var6 = var6.round;
        var1.borderRadius = var6;
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.colors;
        var6 = var6.STATUS_POSITIVE;
        var1.backgroundColor = var6;
        var0.onlineDot = var1;
        var1 = {
            'width': 8,
            'height': 8
        };
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.radii;
        var6 = var6.round;
        var1.borderRadius = var6;
        var2 = var5[var2];
        var2 = var4.bind(var3)(var2);
        var2 = var2.colors;
        var2 = var2.ICON_MUTED;
        var1.backgroundColor = var2;
        var0.memberDot = var1;
        return var0;
    };
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = 20;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/game_update/native/GameUpdateServerInvite.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun118300: for (var _fun118300_ip = 0;;) switch (_fun118300_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.invite;
                var5 = var0.onJoinPress;
                var0 = _closure1_slot7;
                var4 = undefined;
                var26 = var0.bind(var4)();
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 5;
                var0 = var2[var0];
                var0 = var1.bind(var4)(var0);
                var3 = var0.bind(var4)();
                var0 = null;
                var2 = var0 == var6;
                var1 = undefined;
                if (var2) {
                    _fun118300_ip = 82;
                    continue _fun118300
                }
            case 63:
                var2 = var6.guild;
                var7 = var0 == var2;
                var1 = undefined;
                if (var7) {
                    _fun118300_ip = 82;
                    continue _fun118300
                }
            case 77:
                var1 = var2.icon;
            case 82:
                var1 = var0 != var1;
                var9 = null;
                if (!var1) {
                    _fun118300_ip = 166;
                    continue _fun118300
                }
            case 91:
                var2 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 6;
                var1 = var7[var1];
                var7 = var2.bind(var4)(var1);
                var2 = var7.getGuildIconURL;
                var1 = {};
                var8 = var6.guild;
                var8 = var8.id;
                var1.id = var8;
                var8 = var6.guild;
                var8 = var8.icon;
                var1.icon = var8;
                var8 = true;
                var1.canAnimate = var8;
                var8 = 64;
                var1.size = var8;
                var9 = var2.bind(var7)(var1);
            case 166:
                var2 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 7;
                var1 = var7[var1];
                var11 = var2.bind(var4)(var1);
                var8 = var11.useToken;
                var10 = _closure1_slot1;
                var1 = 4;
                var1 = var7[var1];
                var1 = var10.bind(var4)(var1);
                var1 = var1.colors;
                var1 = var1.BACKGROUND_BASE_LOWEST;
                var8 = var8.bind(var11)(var1);
                var1 = 8;
                var1 = var7[var1];
                var1 = var10.bind(var4)(var1);
                var8 = var1.bind(var4)(var9, var8);
                var10 = new Array(2);
                var10[0] = var8;
                var1 = 9;
                var1 = var7[var1];
                var2 = var2.bind(var4)(var1);
                var1 = var2.isThemeDark;
                var1 = var1.bind(var2)(var3);
                var3 = _closure1_slot0;
                var7 = _closure1_slot2;
                if (var1) {
                    _fun118300_ip = 320;
                    continue _fun118300
                }
            case 284:
                var1 = 11;
                var1 = var7[var1];
                var9 = var3.bind(var4)(var1);
                var2 = var9.darkenColor;
                var1 = 0.8;
                var1 = var2.bind(var9)(var8, var1);
                _fun118300_ip = 354;
                continue _fun118300;
            case 320:
                var2 = 10;
                var2 = var7[var2];
                var7 = var3.bind(var4)(var2);
                var3 = var7.brightenColor;
                var2 = 0.8;
                var1 = var3.bind(var7)(var8, var2);
            case 354:
                var10[1] = var1;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 12;
                var1 = var3[var1];
                var3 = var2.bind(var4)(var1);
                var2 = var3.useServerInviteDetails;
                var1 = {};
                var1.invite = var6;
                var1.onJoinPress = var5;
                var1 = var2.bind(var3)(var1);
                if (!(var0 != var1)) {
                    _fun118300_ip = 1464;
                    continue _fun118300
                }
            case 408:
                var19 = var1.guild;
                var29 = var1.onlineText;
                var12 = var1.isVerified;
                var14 = var1.isMember;
                var13 = var1.handleJoinPress;
                var11 = var1.splashUrl;
                var28 = var1.memberText;
                var21 = var1.establishedText;
                var3 = _closure1_slot6;
                var2 = _closure1_slot3;
                var1 = {};
                var5 = var26.container;
                var1.style = var5;
                var5 = {};
                var6 = var26.splashContainer;
                var5.style = var6;
                if (!(var0 != var11)) {
                    _fun118300_ip = 536;
                    continue _fun118300
                }
            case 490:
                var8 = _closure1_slot5;
                var7 = _closure1_slot4;
                var6 = {};
                var9 = var26.splashImage;
                var6.style = var9;
                var9 = {};
                var9.uri = var11;
                var6.source = var9;
                var9 = 'cover';
                var6.resizeMode = var9;
                var7 = var8.bind(var4)(var7, var6);
                _fun118300_ip = 614;
                continue _fun118300;
            case 536:
                var9 = _closure1_slot5;
                var8 = _closure1_slot1;
                var11 = _closure1_slot2;
                var6 = 13;
                var6 = var11[var6];
                var8 = var8.bind(var4)(var6);
                var6 = {};
                var11 = var26.splashImage;
                var6.style = var11;
                var11 = {
                    'x': 0,
                    'y': 1
                };
                var6.start = var11;
                var11 = {
                    'x': 1.5,
                    'y': 0
                };
                var6.end = var11;
                var6.colors = var10;
                var7 = var9.bind(var4)(var8, var6);
            case 614:
                var6 = new Array(2);
                var6[0] = var7;
                var17 = _closure1_slot5;
                var8 = _closure1_slot3;
                var7 = {};
                var9 = var26.iconContainer;
                var7.style = var9;
                var10 = _closure1_slot1;
                var11 = _closure1_slot2;
                var18 = 14;
                var9 = var11[var18];
                var10 = var10.bind(var4)(var9);
                var9 = {};
                var9.guild = var19;
                var16 = _closure1_slot0;
                var18 = var11[var18];
                var18 = var16.bind(var4)(var18);
                var18 = var18.GuildIconSizes;
                var18 = var18.XLARGE;
                var9.size = var18;
                var9 = var17.bind(var4)(var10, var9);
                var7.children = var9;
                var7 = var17.bind(var4)(var8, var7);
                var6[1] = var7;
                var5.children = var6;
                var6 = var3.bind(var4)(var2, var5);
                var5 = new Array(2);
                var5[0] = var6;
                var7 = _closure1_slot6;
                var6 = {};
                var9 = var26.contentContainer;
                var6.style = var9;
                var9 = {};
                var10 = {};
                var18 = var26.guildNameContainer;
                var10.style = var18;
                var20 = 15;
                var11 = var11[var20];
                var11 = var16.bind(var4)(var11);
                var16 = var11.Text;
                var11 = {
                    'variant': 'text-md/semibold',
                    'color': 'mobile-text-heading-primary'
                };
                var18 = var19.name;
                var11.children = var18;
                var16 = var17.bind(var4)(var16, var11);
                var11 = new Array(2);
                var11[0] = var16;
                if (!var12) {
                    _fun118300_ip = 886;
                    continue _fun118300
                }
            case 822:
                var18 = _closure1_slot5;
                var23 = _closure1_slot1;
                var24 = _closure1_slot2;
                var16 = 16;
                var16 = var24[var16];
                var17 = var23.bind(var4)(var16);
                var16 = {};
                var16.guild = var19;
                var22 = 17;
                var22 = var24[var22];
                var22 = var23.bind(var4)(var22);
                var22 = var22.Sizes;
                var22 = var22.REFRESH_SMALL_16;
                var16.size = var22;
                var12 = var18.bind(var4)(var17, var16);
            case 886:
                var11[1] = var12;
                var10.children = var11;
                var11 = var7.bind(var4)(var8, var10);
                var10 = new Array(3);
                var10[0] = var11;
                var22 = _closure1_slot6;
                var16 = _closure1_slot3;
                var11 = {};
                var12 = var26.memberCountContainer;
                var11.style = var12;
                var23 = {};
                var12 = var26.memberItemContainer;
                var23.style = var12;
                var12 = _closure1_slot5;
                var17 = {};
                var18 = var26.onlineDot;
                var17.style = var18;
                var17 = var12.bind(var4)(var16, var17);
                var24 = new Array(2);
                var24[0] = var17;
                var18 = _closure1_slot0;
                var17 = _closure1_slot2;
                var25 = var17[var20];
                var25 = var18.bind(var4)(var25);
                var27 = var25.Text;
                var25 = {
                    'variant': 'text-sm/medium',
                    'color': 'text-subtle'
                };
                var25.children = var29;
                var25 = var12.bind(var4)(var27, var25);
                var24[1] = var25;
                var23.children = var24;
                var24 = var22.bind(var4)(var16, var23);
                var23 = new Array(2);
                var23[0] = var24;
                var24 = {};
                var25 = var26.memberItemContainer;
                var24.style = var25;
                var25 = {};
                var26 = var26.memberDot;
                var25.style = var26;
                var26 = var12.bind(var4)(var16, var25);
                var25 = new Array(2);
                var25[0] = var26;
                var26 = var17[var20];
                var26 = var18.bind(var4)(var26);
                var27 = var26.Text;
                var26 = {
                    'variant': 'text-sm/medium',
                    'color': 'text-subtle'
                };
                var26.children = var28;
                var26 = var12.bind(var4)(var27, var26);
                var25[1] = var26;
                var24.children = var25;
                var24 = var22.bind(var4)(var16, var24);
                var23[1] = var24;
                var11.children = var23;
                var11 = var22.bind(var4)(var16, var11);
                var10[1] = var11;
                var11 = {};
                var17 = var17[var20];
                var17 = var18.bind(var4)(var17);
                var18 = var17.Text;
                var17 = {
                    'variant': 'text-sm/medium',
                    'color': 'text-subtle'
                };
                var17.children = var21;
                var17 = var12.bind(var4)(var18, var17);
                var11.children = var17;
                var11 = var12.bind(var4)(var16, var11);
                var10[2] = var11;
                var9.children = var10;
                var10 = var7.bind(var4)(var8, var9);
                var9 = new Array(3);
                var9[0] = var10;
                var10 = var19.description;
                var10 = var0 != var10;
                if (!var10) {
                    _fun118300_ip = 1301;
                    continue _fun118300
                }
            case 1230:
                var16 = _closure1_slot5;
                var12 = _closure1_slot3;
                var11 = {};
                var18 = _closure1_slot0;
                var17 = _closure1_slot2;
                var17 = var17[var20];
                var17 = var18.bind(var4)(var17);
                var18 = var17.Text;
                var17 = {
                    'variant': 'text-sm/medium',
                    'color': 'text-subtle'
                };
                var19 = var19.description;
                var17.children = var19;
                var17 = var16.bind(var4)(var18, var17);
                var11.children = var17;
                var10 = var16.bind(var4)(var12, var11);
            case 1301:
                var9[1] = var10;
                var12 = _closure1_slot5;
                var11 = _closure1_slot0;
                var16 = _closure1_slot2;
                var10 = 18;
                var10 = var16[var10];
                var10 = var11.bind(var4)(var10);
                var11 = var10.Button;
                var10 = {
                    'variant': 'active',
                    'size': 'md'
                };
                var18 = _closure1_slot0;
                var19 = _closure1_slot2;
                var15 = 19;
                var16 = var19[var15];
                var16 = var18.bind(var4)(var16);
                var17 = var16.intl;
                var16 = var17.string;
                var15 = var19[var15];
                var15 = var18.bind(var4)(var15);
                var15 = var15.t;
                if (var14) {
                    _fun118300_ip = 1409;
                    continue _fun118300
                }
            case 1396:
                var14 = var15.XpeFYr;
                var14 = var16.bind(var17)(var14);
                _fun118300_ip = 1420;
                continue _fun118300;
            case 1409:
                var15 = var15.cEnaWx;
                var14 = var16.bind(var17)(var15);
            case 1420:
                var10.text = var14;
                var10.onPress = var13;
                var10 = var12.bind(var4)(var11, var10);
                var9[2] = var10;
                var6.children = var9;
                var6 = var7.bind(var4)(var8, var6);
                var5[1] = var6;
                var1.children = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 1464:
                return var0;
        }
    };
    var2.GameUpdateServerInvite = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 3248, 1417, 3153, 6867, 3159, 3210, 3210, 15099, 4099, 7420, 3943, 7422, 4087, 4085, 1234, 2]);