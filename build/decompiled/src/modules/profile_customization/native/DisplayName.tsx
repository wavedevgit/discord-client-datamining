// modules/profile_customization/native/DisplayName.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
    var0 = function(arg0, arg1) { // Original name: getAccessibilityLabel, environment: var1
        _fun87112: for (var _fun87112_ip = 0;;) switch (_fun87112_ip) {
            case 0:
                var2 = arg0;
                var0 = var2.bot;
                var6 = '';
                var5 = var6;
                if (!var0) {
                    _fun87112_ip = 105;
                    continue _fun87112
                }
            case 19:
                var0 = var2.isSystemUser;
                var3 = var0.bind(var2)();
                var8 = _closure1_slot1;
                var1 = _closure1_slot2;
                var7 = 5;
                var1 = var1[var7];
                var4 = undefined;
                var1 = var8.bind(var4)(var1);
                var1 = var1.Types;
                if (var3) {
                    _fun87112_ip = 71;
                    continue _fun87112
                }
            case 63:
                var3 = var1.BOT;
                _fun87112_ip = 77;
                continue _fun87112;
            case 71:
                var3 = var1.SYSTEM_DM;
            case 77:
                var1 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var7];
                var1 = var1.bind(var4)(var0);
                var0 = var1.getBotLabel;
                var5 = var0.bind(var1)(var3);
            case 105:
                var3 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 6;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var3.bind(var0)(var1);
                var0 = var1.getUserTag;
                var9 = var0.bind(var1)(var2);
                var0 = global;
                var0 = var0.HermesInternal;
                var3 = var0.concat;
                var13 = arg1;
                var12 = ', ';
                var10 = ' ';
                var14 = var6;
                var11 = var5;
                var0 = var14[var3](var13, var12, var11, var10, var9, var8);
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
    var11 = 0;
    var6 = var5[var11];
    var3 = arg3;
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
    var6 = var3.jsx;
    var _closure1_slot4 = var6;
    var3 = var3.jsxs;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var9 = 'relative';
    var8 = {
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center',
        'flexWrap': 'wrap',
        'position': 'relative'
    };
    var3.usernameContainer = var8;
    var8 = {};
    var12 = 6;
    var8.marginRight = var12;
    var3.username = var8;
    var8 = {};
    var8.marginLeft = var11;
    var3.botTag = var8;
    var8 = {
        'position': 'absolute',
        'left': 0,
        'top': 0
    };
    var3.subAvatar = var8;
    var8 = {};
    var8.position = var9;
    var3.subNameContainer = var8;
    var8 = {
        'flex': 1,
        'flexDirection': 'row',
        'alignItems': 'center',
        'marginTop': 8
    };
    var3.AKAContainer = var8;
    var8 = {};
    var9 = 12;
    var8.fontSize = var9;
    var9 = 4;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.unsafe_rawColors;
    var9 = var9.RED_400;
    var8.color = var9;
    var3.errorText = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot6 = var3;
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/profile_customization/native/DisplayName.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: DisplayName, environment: var1
        _fun87113: for (var _fun87113_ip = 0;;) switch (_fun87113_ip) {
            case 0:
                var1 = arg0;
                var13 = var1.user;
                var20 = var1.channelNickname;
                var10 = var1.guildId;
                var0 = var1.showGuildAvatar;
                var5 = var1.onPress;
                var4 = var1.accessibilityHint;
                var14 = var1.canShowNicknames;
                var17 = var1.renderRightArrow;
                var26 = var1.error;
                var22 = var1.lineClamp;
                var3 = undefined;
                if (!(var22 === var3)) {
                    _fun87113_ip = 68;
                    continue _fun87113
                }
            case 65:
                var22 = 2;
            case 68:
                var16 = var1.textVariant;
                if (!(var16 === var3)) {
                    _fun87113_ip = 84;
                    continue _fun87113
                }
            case 78:
                var16 = 'heading-xl/extrabold';
            case 84:
                var15 = var1.hideSubname;
                var1 = _closure1_slot6;
                var12 = var1.bind(var3)();
                var1 = var13.hasAvatarForGuild;
                var18 = var1.bind(var13)(var10);
                if (var18) {
                    _fun87113_ip = 118;
                    continue _fun87113
                }
            case 115:
                var18 = var0;
            case 118:
                var21 = '';
                var23 = var21;
                if (!var18) {
                    _fun87113_ip = 146;
                    continue _fun87113
                }
            case 128:
                var2 = '\xa0';
                var1 = var2.repeat;
                var0 = 9;
                var23 = var1.bind(var2)(var0);
            case 146:
                var1 = _closure1_slot1;
                var0 = _closure1_slot2;
                var27 = 5;
                var0 = var0[var27];
                var0 = var1.bind(var3)(var0);
                var0 = var0.Types;
                var25 = var0.BOT;
                var0 = var13.isSystemUser;
                var0 = var0.bind(var13)();
                if (!var0) {
                    _fun87113_ip = 220;
                    continue _fun87113
                }
            case 191:
                var1 = _closure1_slot1;
                var0 = _closure1_slot2;
                var0 = var0[var27];
                var0 = var1.bind(var3)(var0);
                var0 = var0.Types;
                var25 = var0.SYSTEM_DM;
            case 220:
                var2 = _closure1_slot4;
                var11 = _closure1_slot0;
                var8 = _closure1_slot2;
                var0 = 7;
                var0 = var8[var0];
                var0 = var11.bind(var3)(var0);
                var1 = var0.PressableOpacity;
                var0 = {};
                var6 = 'header';
                var0.accessibilityRole = var6;
                var0.onPress = var5;
                var5 = _closure1_slot7;
                var5 = var5.bind(var3)(var13, var20);
                var0.accessibilityLabel = var5;
                var0.accessibilityHint = var4;
                var6 = _closure1_slot5;
                var5 = _closure1_slot3;
                var4 = {};
                var7 = {};
                var19 = var12.usernameContainer;
                var7.style = var19;
                var19 = 8;
                var8 = var8[var19];
                var8 = var11.bind(var3)(var8);
                var11 = var8.Text;
                var8 = {};
                var24 = var12.username;
                var8.style = var24;
                var8.lineClamp = var22;
                var8.variant = var16;
                var16 = 'mobile-text-heading-primary';
                var8.color = var16;
                var16 = new Array(2);
                var16[0] = var20;
                if (!var17) {
                    _fun87113_ip = 411;
                    continue _fun87113
                }
            case 363:
                var28 = _closure1_slot4;
                var30 = _closure1_slot1;
                var31 = _closure1_slot2;
                var20 = 9;
                var20 = var31[var20];
                var24 = var30.bind(var3)(var20);
                var20 = {};
                var29 = 10;
                var29 = var31[var29];
                var29 = var30.bind(var3)(var29);
                var20.source = var29;
                var17 = var28.bind(var3)(var24, var20);
            case 411:
                var16[1] = var17;
                var8.children = var16;
                var11 = var6.bind(var3)(var11, var8);
                var8 = new Array(2);
                var8[0] = var11;
                var17 = var13.bot;
                var11 = null;
                var16 = null;
                if (!var17) {
                    _fun87113_ip = 504;
                    continue _fun87113
                }
            case 446:
                var24 = _closure1_slot4;
                var20 = _closure1_slot1;
                var17 = _closure1_slot2;
                var17 = var17[var27];
                var20 = var20.bind(var3)(var17);
                var17 = {};
                var27 = var12.botTag;
                var17.style = var27;
                var17.type = var25;
                var25 = var13.isVerifiedBot;
                var25 = var25.bind(var13)();
                var17.verified = var25;
                var16 = var24.bind(var3)(var20, var17);
            case 504:
                var8[1] = var16;
                var7.children = var8;
                var8 = var6.bind(var3)(var5, var7);
                var7 = new Array(3);
                var7[0] = var8;
                var8 = null;
                if (var15) {
                    _fun87113_ip = 841;
                    continue _fun87113
                }
            case 534:
                var17 = _closure1_slot5;
                var16 = _closure1_slot3;
                var15 = {};
                var20 = var12.subNameContainer;
                var15.style = var20;
                var20 = null;
                if (!var18) {
                    _fun87113_ip = 645;
                    continue _fun87113
                }
            case 559:
                var25 = _closure1_slot4;
                var24 = _closure1_slot1;
                var29 = _closure1_slot2;
                var27 = 11;
                var18 = var29[var27];
                var24 = var24.bind(var3)(var18);
                var18 = {};
                var28 = var12.subAvatar;
                var18.style = var28;
                var28 = _closure1_slot0;
                var27 = var29[var27];
                var27 = var28.bind(var3)(var27);
                var27 = var27.AvatarSizes;
                var27 = var27.SIZE_16;
                var18.size = var27;
                var18.user = var13;
                var18.guildId = var3;
                var27 = true;
                var18.animate = var27;
                var20 = var25.bind(var3)(var24, var18);
            case 645:
                var18 = new Array(3);
                var18[0] = var20;
                var24 = var11 != var26;
                var20 = null;
                if (!var24) {
                    _fun87113_ip = 728;
                    continue _fun87113
                }
            case 662:
                var20 = null;
                if (!(var21 !== var26)) {
                    _fun87113_ip = 728;
                    continue _fun87113
                }
            case 668:
                var25 = _closure1_slot4;
                var24 = _closure1_slot0;
                var21 = _closure1_slot2;
                var21 = var21[var19];
                var21 = var24.bind(var3)(var21);
                var24 = var21.Text;
                var21 = {
                    'variant': 'text-xs/normal',
                    'color': 'text-feedback-critical'
                };
                var27 = var12.errorText;
                var21.style = var27;
                var21.children = var26;
                var20 = var25.bind(var3)(var24, var21);
            case 728:
                var18[1] = var20;
                var21 = _closure1_slot5;
                var20 = _closure1_slot0;
                var25 = _closure1_slot2;
                var19 = var25[var19];
                var19 = var20.bind(var3)(var19);
                var20 = var19.Text;
                var19 = {
                    'lineClamp': null,
                    'variant': 'text-xs/normal',
                    'color': 'mobile-text-heading-primary'
                };
                var19.lineClamp = var22;
                var22 = new Array(2);
                var22[0] = var23;
                var24 = _closure1_slot1;
                var23 = 6;
                var23 = var25[var23];
                var24 = var24.bind(var3)(var23);
                var23 = var24.getUserTag;
                var23 = var23.bind(var24)(var13);
                var22[1] = var23;
                var19.children = var22;
                var19 = var21.bind(var3)(var20, var19);
                var18[2] = var19;
                var15.children = var18;
                var8 = var17.bind(var3)(var16, var15);
            case 841:
                var7[1] = var8;
                var8 = null;
                if (!var14) {
                    _fun87113_ip = 914;
                    continue _fun87113
                }
            case 850:
                var10 = var11 == var10;
                var8 = null;
                if (!var10) {
                    _fun87113_ip = 914;
                    continue _fun87113
                }
            case 859:
                var10 = var11 != var13;
                var8 = null;
                if (!var10) {
                    _fun87113_ip = 914;
                    continue _fun87113
                }
            case 868:
                var11 = _closure1_slot4;
                var10 = _closure1_slot1;
                var14 = _closure1_slot2;
                var9 = 12;
                var9 = var14[var9];
                var10 = var10.bind(var3)(var9);
                var9 = {};
                var9.user = var13;
                var12 = var12.AKAContainer;
                var9.style = var12;
                var8 = var11.bind(var3)(var10, var9);
            case 914:
                var7[2] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 5729, 3195, 4865, 3900, 4045, 8620, 5414, 11227, 2]);