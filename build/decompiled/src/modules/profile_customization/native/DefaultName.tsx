// modules/profile_customization/native/DefaultName.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun87125: for (var _fun87125_ip = 0;;) switch (_fun87125_ip) {
            case 0:
                var2 = arg0;
                var0 = var2.bot;
                var4 = '';
                var3 = var4;
                if (!var0) {
                    _fun87125_ip = 105;
                    continue _fun87125
                }
            case 19:
                var0 = var2.isSystemUser;
                var5 = var0.bind(var2)();
                var8 = _closure1_slot1;
                var1 = _closure1_slot2;
                var7 = 4;
                var1 = var1[var7];
                var6 = undefined;
                var1 = var8.bind(var6)(var1);
                var1 = var1.Types;
                if (var5) {
                    _fun87125_ip = 71;
                    continue _fun87125
                }
            case 63:
                var5 = var1.BOT;
                _fun87125_ip = 77;
                continue _fun87125;
            case 71:
                var5 = var1.SYSTEM_DM;
            case 77:
                var1 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var7];
                var1 = var1.bind(var6)(var0);
                var0 = var1.getBotLabel;
                var3 = var0.bind(var1)(var5);
            case 105:
                var5 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 5;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var5.bind(var0)(var1);
                var0 = var1.getUserTag;
                var2 = var0.bind(var1)(var2);
                var0 = global;
                var0 = var0.HermesInternal;
                var1 = var0.concat;
                var0 = ', ';
                var0 = var1.bind(var4)(var2, var0, var3);
                return var0;
        }
    };
    var _closure1_slot7 = var0;
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
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var9 = 1;
    var3 = var5[var9];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot4 = var6;
    var3 = var3.jsxs;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var8.flex = var9;
    var3.flex = var8;
    var8 = {
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center',
        'flexWrap': 'wrap',
        'position': 'relative'
    };
    var3.defaultNameContainer = var8;
    var8 = {
        'flexDirection': 'row',
        'flexWrap': 'wrap',
        'alignItems': 'flex-start'
    };
    var3.usernameContainer = var8;
    var8 = {};
    var9 = 6;
    var8.marginRight = var9;
    var3.username = var8;
    var8 = {};
    var9 = 8;
    var8.marginLeft = var9;
    var3.botTag = var8;
    var8 = {
        'flex': 1,
        'flexDirection': 'row',
        'alignItems': 'center',
        'marginTop': 4
    };
    var3.AKAContainer = var8;
    var8 = {
        'position': 'absolute',
        'top': 2,
        'left': 0
    };
    var3.defaultAvatar = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot6 = var3;
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/profile_customization/native/DefaultName.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun87126: for (var _fun87126_ip = 0;;) switch (_fun87126_ip) {
            case 0:
                var4 = arg0;
                var10 = var4.user;
                var7 = var4.guildId;
                var11 = var4.canShowNicknames;
                var1 = var4.showGuildAvatar;
                var13 = var4.onPress;
                var24 = var4.renderRightArrow;
                var8 = var4.accessibilityHint;
                var2 = var4.overrideDiscriminator;
                var0 = var4.forcePomelo;
                var3 = undefined;
                if (!(var0 === var3)) {
                    _fun87126_ip = 62;
                    continue _fun87126
                }
            case 60:
                var0 = false;
            case 62:
                var21 = var4.lineClamp;
                var26 = var4.textVariant;
                if (!(var26 === var3)) {
                    _fun87126_ip = 84;
                    continue _fun87126
                }
            case 78:
                var26 = 'heading-xl/extrabold';
            case 84:
                var20 = var4.hideSubname;
                var4 = _closure1_slot6;
                var9 = var4.bind(var3)();
                var4 = var10.hasAvatarForGuild;
                var12 = var4.bind(var10)(var7);
                if (var12) {
                    _fun87126_ip = 118;
                    continue _fun87126
                }
            case 115:
                var12 = var1;
            case 118:
                var22 = '';
                if (!var12) {
                    _fun87126_ip = 143;
                    continue _fun87126
                }
            case 125:
                var5 = '\xa0';
                var4 = var5.repeat;
                var1 = 5;
                var22 = var4.bind(var5)(var1);
            case 143:
                var1 = var10.hasUniqueUsername;
                var25 = var1.bind(var10)();
                if (var25) {
                    _fun87126_ip = 159;
                    continue _fun87126
                }
            case 156:
                var25 = var0;
            case 159:
                if (var25) {
                    _fun87126_ip = 196;
                    continue _fun87126
                }
            case 162:
                var0 = null;
                if (!(var0 == var2)) {
                    _fun87126_ip = 174;
                    continue _fun87126
                }
            case 168:
                var2 = var10.discriminator;
            case 174:
                var0 = global;
                var0 = var0.HermesInternal;
                var1 = var0.concat;
                var0 = '#';
                var25 = var1.bind(var0)(var2);
            case 196:
                var1 = _closure1_slot1;
                var0 = _closure1_slot2;
                var18 = 4;
                var0 = var0[var18];
                var0 = var1.bind(var3)(var0);
                var0 = var0.Types;
                var17 = var0.BOT;
                var0 = var10.isSystemUser;
                var0 = var0.bind(var10)();
                if (!var0) {
                    _fun87126_ip = 270;
                    continue _fun87126
                }
            case 241:
                var1 = _closure1_slot1;
                var0 = _closure1_slot2;
                var0 = var0[var18];
                var0 = var1.bind(var3)(var0);
                var0 = var0.Types;
                var17 = var0.SYSTEM_DM;
            case 270:
                var2 = _closure1_slot5;
                var1 = _closure1_slot3;
                var0 = {};
                var4 = var9.flex;
                var0.style = var4;
                var5 = _closure1_slot0;
                var14 = _closure1_slot2;
                var4 = 6;
                var4 = var14[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.PressableOpacity;
                var4 = {};
                var14 = var9.defaultNameContainer;
                var4.style = var14;
                var4.onPress = var13;
                var13 = 'header';
                var4.accessibilityRole = var13;
                var13 = _closure1_slot7;
                var13 = var13.bind(var3)(var10);
                var4.accessibilityLabel = var13;
                var4.accessibilityHint = var8;
                var8 = null;
                var13 = null;
                if (!var12) {
                    _fun87126_ip = 450;
                    continue _fun87126
                }
            case 364:
                var15 = _closure1_slot4;
                var14 = _closure1_slot1;
                var23 = _closure1_slot2;
                var16 = 7;
                var12 = var23[var16];
                var14 = var14.bind(var3)(var12);
                var12 = {};
                var19 = _closure1_slot0;
                var16 = var23[var16];
                var16 = var19.bind(var3)(var16);
                var16 = var16.AvatarSizes;
                var16 = var16.XSMALL;
                var12.size = var16;
                var12.user = var10;
                var12.guildId = var3;
                var16 = true;
                var12.animate = var16;
                var16 = var9.defaultAvatar;
                var12.style = var16;
                var13 = var15.bind(var3)(var14, var12);
            case 450:
                var12 = new Array(3);
                var12[0] = var13;
                var15 = _closure1_slot5;
                var14 = _closure1_slot3;
                var13 = {};
                var16 = var9.usernameContainer;
                var13.style = var16;
                var19 = _closure1_slot0;
                var16 = _closure1_slot2;
                var23 = 8;
                var16 = var16[var23];
                var16 = var19.bind(var3)(var16);
                var19 = var16.Text;
                var16 = {};
                var27 = var9.username;
                var16.style = var27;
                var16.variant = var26;
                var26 = 'mobile-text-heading-primary';
                var16.color = var26;
                var16.lineClamp = var21;
                var21 = new Array(2);
                var21[0] = var22;
                var22 = var10.username;
                var21[1] = var22;
                var16.children = var21;
                var19 = var15.bind(var3)(var19, var16);
                var16 = new Array(2);
                var16[0] = var19;
                var19 = null;
                if (var20) {
                    _fun87126_ip = 686;
                    continue _fun87126
                }
            case 573:
                var22 = _closure1_slot5;
                var21 = _closure1_slot0;
                var20 = _closure1_slot2;
                var20 = var20[var23];
                var20 = var21.bind(var3)(var20);
                var21 = var20.Text;
                var20 = {
                    'variant': 'heading-xl/medium',
                    'color': 'text-default'
                };
                var23 = new Array(2);
                var23[0] = var25;
                if (!var24) {
                    _fun87126_ip = 672;
                    continue _fun87126
                }
            case 624:
                var27 = _closure1_slot4;
                var29 = _closure1_slot1;
                var30 = _closure1_slot2;
                var25 = 9;
                var25 = var30[var25];
                var26 = var29.bind(var3)(var25);
                var25 = {};
                var28 = 10;
                var28 = var30[var28];
                var28 = var29.bind(var3)(var28);
                var25.source = var28;
                var24 = var27.bind(var3)(var26, var25);
            case 672:
                var23[1] = var24;
                var20.children = var23;
                var19 = var22.bind(var3)(var21, var20);
            case 686:
                var16[1] = var19;
                var13.children = var16;
                var13 = var15.bind(var3)(var14, var13);
                var12[1] = var13;
                var14 = var10.bot;
                var13 = null;
                if (!var14) {
                    _fun87126_ip = 773;
                    continue _fun87126
                }
            case 715:
                var16 = _closure1_slot4;
                var15 = _closure1_slot1;
                var14 = _closure1_slot2;
                var14 = var14[var18];
                var15 = var15.bind(var3)(var14);
                var14 = {};
                var18 = var9.botTag;
                var14.style = var18;
                var14.type = var17;
                var17 = var10.isVerifiedBot;
                var17 = var17.bind(var10)();
                var14.verified = var17;
                var13 = var16.bind(var3)(var15, var14);
            case 773:
                var12[2] = var13;
                var4.children = var12;
                var5 = var2.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var5 = null;
                if (!var11) {
                    _fun87126_ip = 864;
                    continue _fun87126
                }
            case 800:
                var7 = var8 == var7;
                var5 = null;
                if (!var7) {
                    _fun87126_ip = 864;
                    continue _fun87126
                }
            case 809:
                var7 = var8 != var10;
                var5 = null;
                if (!var7) {
                    _fun87126_ip = 864;
                    continue _fun87126
                }
            case 818:
                var8 = _closure1_slot4;
                var7 = _closure1_slot1;
                var11 = _closure1_slot2;
                var6 = 11;
                var6 = var11[var6];
                var7 = var7.bind(var3)(var6);
                var6 = {};
                var6.user = var10;
                var9 = var9.AKAContainer;
                var6.style = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 864:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 5731, 3197, 4867, 5416, 3902, 4047, 8622, 11229, 2]);