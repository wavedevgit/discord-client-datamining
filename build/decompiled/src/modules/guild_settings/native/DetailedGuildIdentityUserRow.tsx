// modules/guild_settings/native/DetailedGuildIdentityUserRow.tsx
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
    var7 = var1.bind(var0)(var4);
    var1 = 1;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.View;
    var _closure1_slot3 = var1;
    var1 = 2;
    var1 = var6[var1];
    var1 = var11.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 3;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var4 = var1.jsx;
    var _closure1_slot5 = var4;
    var1 = var1.jsxs;
    var _closure1_slot6 = var1;
    var1 = 4;
    var1 = var6[var1];
    var8 = var5.bind(var0)(var1);
    var4 = var8.createStyles;
    var1 = {};
    var9 = {
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var1.mainIdentity = var9;
    var9 = {};
    var10 = 5;
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_4;
    var9.marginRight = var12;
    var1.primaryAvatar = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.INTERACTIVE_TEXT_DEFAULT;
    var9.color = var12;
    var12 = 12;
    var9.fontSize = var12;
    var1.mainTag = var9;
    var9 = {};
    var10 = var6[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.MOBILE_TEXT_HEADING_PRIMARY;
    var9.color = var10;
    var1.label = var9;
    var1 = var4.bind(var8)(var1);
    var _closure1_slot7 = var1;
    var4 = var7.memo;
    var1 = function(arg0) { // Environment: var3
        _fun73084: for (var _fun73084_ip = 0;;) switch (_fun73084_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.contentHeight;
                var1 = var0.guildId;
                var14 = var0.user;
                var0 = _closure1_slot7;
                var3 = undefined;
                var13 = var0.bind(var3)();
                var2 = _closure1_slot1;
                var4 = _closure1_slot2;
                var0 = 6;
                var0 = var4[var0];
                var2 = var2.bind(var3)(var0);
                var0 = var2.getNickname;
                var5 = var0.bind(var2)(var1, var3, var14);
                var11 = null;
                if (!(var11 == var5)) {
                    _fun73084_ip = 102;
                    continue _fun73084
                }
            case 71:
                var2 = _closure1_slot1;
                var4 = _closure1_slot2;
                var0 = 7;
                var0 = var4[var0];
                var2 = var2.bind(var3)(var0);
                var0 = var2.getGlobalName;
                var5 = var0.bind(var2)(var14);
            case 102:
                var0 = var14.hasAvatarForGuild;
                var9 = var0.bind(var14)(var1);
                var2 = _closure1_slot6;
                var1 = _closure1_slot3;
                var0 = {};
                var4 = {};
                var4.height = var6;
                var0.style = var4;
                var7 = _closure1_slot5;
                var6 = _closure1_slot1;
                var4 = _closure1_slot2;
                var15 = 8;
                var4 = var4[var15];
                var6 = var6.bind(var3)(var4);
                var4 = {};
                var4.user = var14;
                var4.nick = var5;
                var6 = var7.bind(var3)(var6, var4);
                var4 = new Array(2);
                var4[0] = var6;
                if (var9) {
                    _fun73084_ip = 197;
                    continue _fun73084
                }
            case 185:
                var6 = var11 != var5;
                var5 = null;
                if (!var6) {
                    _fun73084_ip = 374;
                    continue _fun73084
                }
            case 197:
                var8 = _closure1_slot6;
                var7 = _closure1_slot3;
                var6 = {};
                var12 = var13.mainIdentity;
                var6.style = var12;
                var11 = null;
                if (!var9) {
                    _fun73084_ip = 301;
                    continue _fun73084
                }
            case 222:
                var16 = _closure1_slot5;
                var12 = _closure1_slot1;
                var19 = _closure1_slot2;
                var17 = 9;
                var9 = var19[var17];
                var12 = var12.bind(var3)(var9);
                var9 = {};
                var18 = _closure1_slot0;
                var17 = var19[var17];
                var17 = var18.bind(var3)(var17);
                var17 = var17.AvatarSizes;
                var17 = var17.SIZE_16;
                var9.size = var17;
                var17 = var13.primaryAvatar;
                var9.style = var17;
                var9.user = var14;
                var9.guildId = var3;
                var11 = var16.bind(var3)(var12, var9);
            case 301:
                var9 = new Array(2);
                var9[0] = var11;
                var12 = _closure1_slot5;
                var11 = _closure1_slot1;
                var10 = _closure1_slot2;
                var10 = var10[var15];
                var11 = var11.bind(var3)(var10);
                var10 = {};
                var10.user = var14;
                var13 = var13.mainTag;
                var10.usernameStyle = var13;
                var13 = true;
                var10.hideBotTag = var13;
                var10 = var12.bind(var3)(var11, var10);
                var9[1] = var10;
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 374:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var4.bind(var7)(var1);
    var _closure1_slot8 = var1;
    var4 = var7.memo;
    var3 = function arg0() {
        _fun73085: for (var _fun73085_ip = 0;;) switch (_fun73085_ip) {
            case 0:
                var2 = arg0;
                var21 = var2.arrow;
                var16 = var2.contentHeight;
                var1 = var2.deprecatedFormRow;
                var5 = undefined;
                if (!(var1 === var5)) {
                    _fun73085_ip = 33;
                    continue _fun73085
                }
            case 31:
                var1 = false;
            case 33:
                var17 = var2.disabled;
                var20 = var2.end;
                var14 = var2.guildId;
                var12 = var2.leading;
                var10 = var2.onPress;
                var8 = var2.trailing;
                var3 = var2.userId;
                var _closure2_slot0 = var3;
                var9 = var2.subLabel;
                var19 = var2.start;
                var7 = var2.accessibilityRole;
                var6 = var2.accessibilityState;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 10;
                var2 = var4[var2];
                var4 = var3.bind(var5)(var2);
                var3 = var4.useStateFromStores;
                var13 = _closure1_slot4;
                var2 = new Array(1);
                var2[0] = var13;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot4;
                    var1 = var2.getUser;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var15 = var3.bind(var4)(var2, var0);
                var13 = null;
                var2 = var13 == var15;
                var0 = null;
                if (var2) {
                    _fun73085_ip = 546;
                    continue _fun73085
                }
            case 163:
                var4 = _closure1_slot5;
                var3 = _closure1_slot0;
                var18 = _closure1_slot2;
                if (var1) {
                    _fun73085_ip = 372;
                    continue _fun73085
                }
            case 181:
                var1 = 12;
                var1 = var18[var1];
                var1 = var3.bind(var5)(var1);
                var2 = var1.TableRow;
                var1 = {};
                var1.arrow = var21;
                var1.disabled = var17;
                var1.end = var20;
                var20 = var12;
                if (!(var13 == var12)) {
                    _fun73085_ip = 297;
                    continue _fun73085
                }
            case 221:
                var23 = _closure1_slot5;
                var22 = _closure1_slot1;
                var26 = _closure1_slot2;
                var24 = 9;
                var21 = var26[var24];
                var22 = var22.bind(var5)(var21);
                var21 = {};
                var25 = var15.getAvatarSource;
                var25 = var25.bind(var15)(var14);
                var21.source = var25;
                var25 = _closure1_slot0;
                var24 = var26[var24];
                var24 = var25.bind(var5)(var24);
                var24 = var24.AvatarSizes;
                var24 = var24.SMALL;
                var21.size = var24;
                var20 = var23.bind(var5)(var22, var21);
            case 297:
                var1.icon = var20;
                var22 = _closure1_slot5;
                var21 = _closure1_slot8;
                var20 = {};
                var20.contentHeight = var16;
                var20.user = var15;
                var20.guildId = var14;
                var20 = var22.bind(var5)(var21, var20);
                var1.label = var20;
                var1.onPress = var10;
                var1.start = var19;
                var1.subLabel = var9;
                var1.trailing = var8;
                var1.accessibilityRole = var7;
                var1.accessibilityState = var6;
                var1 = var4.bind(var5)(var2, var1);
                _fun73085_ip = 543;
                continue _fun73085;
            case 372:
                var2 = 11;
                var2 = var18[var2];
                var2 = var3.bind(var5)(var2);
                var3 = var2.FormRow;
                var2 = {};
                var2.disabled = var17;
                if (!(var13 == var12)) {
                    _fun73085_ip = 476;
                    continue _fun73085
                }
            case 400:
                var18 = _closure1_slot5;
                var17 = _closure1_slot1;
                var21 = _closure1_slot2;
                var19 = 9;
                var13 = var21[var19];
                var17 = var17.bind(var5)(var13);
                var13 = {};
                var20 = var15.getAvatarSource;
                var20 = var20.bind(var15)(var14);
                var13.source = var20;
                var20 = _closure1_slot0;
                var19 = var21[var19];
                var19 = var20.bind(var5)(var19);
                var19 = var19.AvatarSizes;
                var19 = var19.SMALL;
                var13.size = var19;
                var12 = var18.bind(var5)(var17, var13);
            case 476:
                var2.leading = var12;
                var13 = _closure1_slot5;
                var12 = _closure1_slot8;
                var11 = {};
                var11.contentHeight = var16;
                var11.user = var15;
                var11.guildId = var14;
                var11 = var13.bind(var5)(var12, var11);
                var2.label = var11;
                var2.onPress = var10;
                var2.subLabel = var9;
                var2.trailing = var8;
                var2.accessibilityRole = var7;
                var2.accessibilityState = var6;
                var1 = var4.bind(var5)(var3, var2);
            case 543:
                var0 = var1;
            case 546:
                return var0;
        }
    };
    var3 = var4.bind(var7)(var3);
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_settings/native/DetailedGuildIdentityUserRow.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.DetailedGuildIdentityUser = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1621, 33, 1297, 671, 3961, 3238, 8227, 5457, 566, 5383, 4901, 2]);