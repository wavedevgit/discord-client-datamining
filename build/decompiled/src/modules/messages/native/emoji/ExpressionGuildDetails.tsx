// modules/messages/native/emoji/ExpressionGuildDetails.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
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
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ExpressionSourceGuildRecord;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot5 = var6;
    var6 = var3.Fragment;
    var _closure1_slot6 = var6;
    var3 = var3.jsxs;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var12 = 'column';
    var8.flexDirection = var12;
    var3.guildDetailsContainer = var8;
    var11 = 8;
    var8 = {
        'flexDirection': 'row',
        'marginTop': 8,
        'alignItems': 'center'
    };
    var3.guildDetailsContent = var8;
    var8 = {
        'width': 40,
        'height': 40,
        'borderRadius': null,
        'marginRight': 12
    };
    var9 = 5;
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.sm;
    var8.borderRadius = var13;
    var3.guildIcon = var8;
    var8 = {};
    var8.flexDirection = var12;
    var3.guildNameAndOnlineMembers = var8;
    var8 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'marginRight': 32
    };
    var3.guildNameWrapper = var8;
    var8 = {};
    var8.marginRight = var11;
    var3.guildPartnerIcon = var8;
    var8 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'marginTop': 4
    };
    var3.guildDescriptionSection = var8;
    var8 = {
        'width': 4,
        'height': 4,
        'borderRadius': null,
        'marginRight': 8,
        'marginLeft': 8
    };
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.xs;
    var8.borderRadius = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_MOD_MUTED;
    var8.backgroundColor = var11;
    var3.dotSeparator = var8;
    var8 = {
        'borderRadius': null,
        'borderColor': null,
        'borderWidth': 1,
        'paddingHorizontal': 4,
        'paddingBottom': 2
    };
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.sm;
    var8.borderRadius = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BORDER_STRONG;
    var8.borderColor = var9;
    var3.joinGuildButton = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot8 = var3;
    var1 = function arg0() {
        _fun74153: for (var _fun74153_ip = 0;;) switch (_fun74153_ip) {
            case 0:
                var0 = arg0;
                var14 = var0.guild;
                var _closure2_slot0 = var14;
                var6 = var0.title;
                var19 = var0.hasJoinedGuild;
                var16 = var0.showingJoinGuildCta;
                var0 = _closure1_slot8;
                var3 = undefined;
                var22 = var0.bind(var3)();
                var1 = _closure1_slot4;
                var0 = var1.createFromGuildType;
                var29 = var0.bind(var1)(var14);
                var0 = var29.isDiscoverable;
                var11 = var0.bind(var29)();
                if (var11) {
                    _fun74153_ip = 182;
                    continue _fun74153
                }
            case 74:
                if (var19) {
                    _fun74153_ip = 182;
                    continue _fun74153
                }
            case 77:
                var1 = _closure1_slot1;
                var5 = _closure1_slot2;
                var0 = 7;
                var0 = var5[var0];
                var4 = var1.bind(var3)(var0);
                var2 = var4.getGuildIconSource;
                var0 = {};
                var7 = var14.id;
                var0.id = var7;
                var7 = var14.icon;
                var0.icon = var7;
                var7 = true;
                var0.canAnimate = var7;
                var7 = 32;
                var0.size = var7;
                var4 = var2.bind(var4)(var0);
                var2 = _closure1_slot5;
                var0 = 8;
                var0 = var5[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var5 = var22.guildIcon;
                var0.style = var5;
                var0.source = var4;
                var7 = var2.bind(var3)(var1, var0);
                _fun74153_ip = 264;
                continue _fun74153;
            case 182:
                var2 = _closure1_slot5;
                var1 = _closure1_slot1;
                var8 = _closure1_slot2;
                var4 = 6;
                var0 = var8[var4];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var5 = var22.guildIcon;
                var0.style = var5;
                var0.guild = var29;
                var5 = _closure1_slot0;
                var4 = var8[var4];
                var4 = var5.bind(var3)(var4);
                var4 = var4.GuildIconSizes;
                var4 = var4.XLARGE;
                var0.size = var4;
                var4 = true;
                var0.animate = var4;
                var7 = var2.bind(var3)(var1, var0);
            case 264:
                var2 = _closure1_slot7;
                var1 = _closure1_slot3;
                var0 = {};
                var4 = var22.guildDetailsContainer;
                var0.style = var4;
                var10 = _closure1_slot5;
                var13 = _closure1_slot0;
                var12 = _closure1_slot2;
                var17 = 9;
                var4 = var12[var17];
                var4 = var13.bind(var3)(var4);
                var5 = var4.Text;
                var4 = {
                    'variant': 'eyebrow',
                    'color': 'text-default'
                };
                var4.children = var6;
                var5 = var10.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var5 = {};
                var6 = var22.guildDetailsContent;
                var5.style = var6;
                var6 = new Array(2);
                var6[0] = var7;
                var7 = {};
                var8 = var22.guildNameAndOnlineMembers;
                var7.style = var8;
                var8 = {};
                var9 = var22.guildNameWrapper;
                var8.style = var9;
                var23 = _closure1_slot1;
                var9 = 13;
                var9 = var12[var9];
                var15 = var23.bind(var3)(var9);
                var9 = {};
                var9.guild = var14;
                var20 = var22.guildPartnerIcon;
                var9.style = var20;
                var20 = 14;
                var20 = var12[var20];
                var20 = var23.bind(var3)(var20);
                var20 = var20.Sizes;
                var20 = var20.REFRESH_SMALL_16;
                var9.size = var20;
                var20 = true;
                var9.disableColor = var20;
                var15 = var10.bind(var3)(var15, var9);
                var9 = new Array(2);
                var9[0] = var15;
                var12 = var12[var17];
                var12 = var13.bind(var3)(var12);
                var13 = var12.Text;
                var12 = {
                    'variant': 'text-md/bold',
                    'color': 'mobile-text-heading-primary'
                };
                var14 = var14.name;
                var12.children = var14;
                var12 = var10.bind(var3)(var13, var12);
                var9[1] = var12;
                var8.children = var9;
                var9 = var2.bind(var3)(var1, var8);
                var8 = new Array(2);
                var8[0] = var9;
                var9 = {};
                var12 = var22.guildDescriptionSection;
                var9.style = var12;
                if (!var11) {
                    _fun74153_ip = 562;
                    continue _fun74153
                }
            case 550:
                var12 = var29.presenceCount;
                var11 = null;
                if (!(var11 == var12)) {
                    _fun74153_ip = 666;
                    continue _fun74153
                }
            case 562:
                var13 = _closure1_slot5;
                var23 = _closure1_slot0;
                var24 = _closure1_slot2;
                var11 = var24[var17];
                var11 = var23.bind(var3)(var11);
                var12 = var11.Text;
                var11 = {
                    'variant': 'text-xs/medium',
                    'color': 'text-default'
                };
                var14 = 10;
                var15 = var24[var14];
                var15 = var23.bind(var3)(var15);
                var20 = var15.intl;
                var15 = var20.string;
                var14 = var24[var14];
                var14 = var23.bind(var3)(var14);
                var14 = var14.t;
                var14 = var14.H29mx4;
                var14 = var15.bind(var20)(var14);
                var11.children = var14;
                var11 = var13.bind(var3)(var12, var11);
                _fun74153_ip = 1090;
                continue _fun74153;
            case 666:
                var14 = _closure1_slot7;
                var13 = _closure1_slot6;
                var12 = {};
                var25 = _closure1_slot5;
                var26 = _closure1_slot0;
                var23 = _closure1_slot2;
                var15 = var23[var17];
                var15 = var26.bind(var3)(var15);
                var20 = var15.Text;
                var15 = {
                    'variant': 'text-xs/medium',
                    'color': 'text-default'
                };
                var24 = 10;
                var27 = var23[var24];
                var27 = var26.bind(var3)(var27);
                var28 = var27.intl;
                var27 = var28.format;
                var23 = var23[var24];
                var23 = var26.bind(var3)(var23);
                var23 = var23.t;
                var26 = var23["LC+S+m"];
                var23 = {};
                var29 = var29.presenceCount;
                var23.membersOnline = var29;
                var23 = var27.bind(var28)(var26, var23);
                var15.children = var23;
                var20 = var25.bind(var3)(var20, var15);
                var15 = new Array(3);
                var15[0] = var20;
                var23 = _closure1_slot3;
                var20 = {};
                var26 = var22.dotSeparator;
                var20.style = var26;
                var20 = var25.bind(var3)(var23, var20);
                var15[1] = var20;
                if (var19) {
                    _fun74153_ip = 980;
                    continue _fun74153
                }
            case 827:
                if (var16) {
                    _fun74153_ip = 980;
                    continue _fun74153
                }
            case 833:
                var20 = _closure1_slot5;
                var27 = _closure1_slot0;
                var23 = _closure1_slot2;
                var16 = 11;
                var16 = var23[var16];
                var16 = var27.bind(var3)(var16);
                var19 = var16.PressableOpacity;
                var16 = {};
                var22 = var22.joinGuildButton;
                var16.style = var22;
                var21 = function() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 12;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.handleJoinGuild;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var16.onPress = var21;
                var21 = var23[var17];
                var21 = var27.bind(var3)(var21);
                var22 = var21.Text;
                var21 = {
                    'variant': 'text-xs/medium',
                    'color': 'text-default'
                };
                var25 = var23[var24];
                var25 = var27.bind(var3)(var25);
                var26 = var25.intl;
                var25 = var26.string;
                var23 = var23[var24];
                var23 = var27.bind(var3)(var23);
                var23 = var23.t;
                var23 = var23.riu2R5;
                var23 = var25.bind(var26)(var23);
                var21.children = var23;
                var21 = var20.bind(var3)(var22, var21);
                var16.children = var21;
                var16 = var20.bind(var3)(var19, var16);
                _fun74153_ip = 1076;
                continue _fun74153;
            case 980:
                var19 = _closure1_slot5;
                var23 = _closure1_slot0;
                var20 = _closure1_slot2;
                var17 = var20[var17];
                var17 = var23.bind(var3)(var17);
                var18 = var17.Text;
                var17 = {
                    'variant': 'text-xs/medium',
                    'color': 'text-default'
                };
                var21 = var20[var24];
                var21 = var23.bind(var3)(var21);
                var22 = var21.intl;
                var21 = var22.string;
                var20 = var20[var24];
                var20 = var23.bind(var3)(var20);
                var20 = var20.t;
                var20 = var20.inyJqO;
                var20 = var21.bind(var22)(var20);
                var17.children = var20;
                var16 = var19.bind(var3)(var18, var17);
            case 1076:
                var15[2] = var16;
                var12.children = var15;
                var11 = var14.bind(var3)(var13, var12);
            case 1090:
                var9.children = var11;
                var9 = var10.bind(var3)(var1, var9);
                var8[1] = var9;
                var7.children = var8;
                var7 = var2.bind(var3)(var1, var7);
                var6[1] = var7;
                var5.children = var6;
                var5 = var2.bind(var3)(var1, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var3 = 15;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/native/emoji/ExpressionGuildDetails.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    var2.ExpressionGuildDetails = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 7389, 33, 1297, 671, 7388, 1417, 4699, 3932, 1234, 4897, 9319, 7447, 4077, 2]);