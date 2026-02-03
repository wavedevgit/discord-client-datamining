// modules/forums/native/posts/ForumPostUsername.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun89423: for (var _fun89423_ip = 0;;) switch (_fun89423_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.thread;
                var16 = var1.authorId;
                var11 = var1.authorName;
                var21 = var1.authorColor;
                var20 = var1.authorColors;
                var9 = var1.containerStyle;
                var18 = var1.roleDotStyle;
                var13 = var1.textStyle;
                var10 = var1.suffix;
                var1 = var1.hasUnreads;
                var2 = _closure1_slot8;
                var4 = undefined;
                var12 = var2.bind(var4)();
                var2 = {};
                var2.thread = var0;
                var2 = var2.thread;
                var3 = _closure1_slot5;
                var2 = var2.parent_id;
                var2 = var3.bind(var4)(var2);
                var3 = var2.layoutType;
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 7;
                var2 = var7[var2];
                var2 = var5.bind(var4)(var2);
                var2 = var2.ForumLayout;
                var2 = var2.GRID;
                var7 = 158;
                if (!(var3 === var2)) {
                    _fun89423_ip = 152;
                    continue _fun89423
                }
            case 149:
                var7 = 72;
            case 152:
                var3 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 8;
                var2 = var5[var2];
                var2 = var3.bind(var4)(var2);
                var8 = var2.bind(var4)();
                var3 = _closure1_slot0;
                var2 = 9;
                var2 = var5[var2];
                var2 = var3.bind(var4)(var2);
                var2 = var2.GRID_HORIZONTAL_PADDING;
                var2 = var8 - var2;
                var7 = var2 - var7;
                var2 = 10;
                var2 = var5[var2];
                var8 = var3.bind(var4)(var2);
                var5 = var8.useStateFromStores;
                var2 = _closure1_slot4;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = function() { // Environment: var2
                    var0 = _closure1_slot4;
                    var0 = var0.roleStyle;
                    return var0;
                };
                var8 = var5.bind(var8)(var3, var2);
                var2 = 'username';
                if (!(var2 === var8)) {
                    _fun89423_ip = 264;
                    continue _fun89423
                }
            case 258:
                var2 = null;
                if (!(var2 == var21)) {
                    _fun89423_ip = 268;
                    continue _fun89423
                }
            case 264:
                var14 = {};
                _fun89423_ip = 277;
                continue _fun89423;
            case 268:
                var2 = {};
                var2.color = var21;
                var14 = var2;
            case 277:
                if (var1) {
                    _fun89423_ip = 298;
                    continue _fun89423
                }
            case 280:
                var17 = {};
                var1 = 0.8;
                var17.opacity = var1;
                _fun89423_ip = 300;
                continue _fun89423;
            case 298:
                var17 = {};
            case 300:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 11;
                var5 = var3[var1];
                var15 = var2.bind(var4)(var5);
                var5 = var15.useProcessColorStringsArray;
                var15 = var5.bind(var15)(var20);
                var1 = var3[var1];
                var3 = var2.bind(var4)(var1);
                var2 = var3.useIsRoleStyleAndRoleColorsEligibleForERC;
                var1 = var0.guild_id;
                var5 = null;
                var19 = var5 != var16;
                var0 = undefined;
                if (!var19) {
                    _fun89423_ip = 365;
                    continue _fun89423
                }
            case 362:
                var0 = var16;
            case 365:
                var27 = var3;
                var26 = var1;
                var25 = var0;
                var24 = var8;
                var23 = var15;
                var16 = var27[var2](var26, var25, var24, var23, var22);
                var1 = var5 == var11;
                var0 = null;
                if (var1) {
                    _fun89423_ip = 695;
                    continue _fun89423
                }
            case 396:
                var3 = _closure1_slot7;
                var2 = _closure1_slot3;
                var1 = {};
                var19 = {};
                var19.maxWidth = var7;
                var25 = var12.authorContainer;
                var26 = var19;
                var7 = copyDataProperties(var26, var25);
                var7 = new Array(3);
                var7[0] = var19;
                var7[1] = var17;
                var7[2] = var9;
                var1.style = var7;
                var7 = 'button';
                var1.accessibilityRole = var7;
                var7 = 'dot';
                var7 = var7 === var8;
                if (!var7) {
                    _fun89423_ip = 469;
                    continue _fun89423
                }
            case 465:
                var7 = var5 != var21;
            case 469:
                if (!var7) {
                    _fun89423_ip = 568;
                    continue _fun89423
                }
            case 472:
                var9 = _closure1_slot6;
                var8 = _closure1_slot3;
                var5 = {};
                var19 = var12.roleDotContainer;
                var17 = new Array(2);
                var17[0] = var19;
                var17[1] = var18;
                var5.style = var17;
                var19 = _closure1_slot6;
                var18 = _closure1_slot0;
                var22 = _closure1_slot2;
                var17 = 12;
                var17 = var22[var17];
                var17 = var18.bind(var4)(var17);
                var18 = var17.RoleDot;
                var17 = {};
                var22 = 'small';
                var17.size = var22;
                var17.color = var21;
                var17.colors = var20;
                var17 = var19.bind(var4)(var18, var17);
                var5.children = var17;
                var7 = var9.bind(var4)(var8, var5);
            case 568:
                var5 = new Array(2);
                var5[0] = var7;
                var8 = _closure1_slot7;
                var7 = _closure1_slot0;
                var9 = _closure1_slot2;
                var6 = 13;
                var6 = var9[var6];
                var6 = var7.bind(var4)(var6);
                var7 = var6.Text;
                var6 = {
                    'variant': 'text-sm/semibold',
                    'color': 'mobile-text-heading-primary',
                    'gradientColors': null,
                    'lineClamp': 1
                };
                var9 = undefined;
                if (!var16) {
                    _fun89423_ip = 627;
                    continue _fun89423
                }
            case 624:
                var9 = var15;
            case 627:
                var6.gradientColors = var9;
                var9 = new Array(3);
                var9[0] = var14;
                var9[1] = var13;
                var12 = var12.authorName;
                var9[2] = var12;
                var6.style = var9;
                var9 = new Array(2);
                var9[0] = var11;
                var9[1] = var10;
                var6.children = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[1] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 695:
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var7 = var5[var0];
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.useForumChannelStore;
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot6 = var6;
    var3 = var3.jsxs;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'justifyContent': 'center',
        'marginEnd': 8
    };
    var3.authorContainer = var8;
    var8 = {
        'alignItems': 'center',
        'justifyContent': 'center',
        'marginEnd': 2,
        'marginBottom': 4
    };
    var3.roleDotContainer = var8;
    var8 = {
        'overflow': 'hidden',
        'flexWrap': 'nowrap'
    };
    var3.authorName = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot8 = var3;
    var3 = 14;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/forums/native/posts/ForumPostUsername.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        _fun89425: for (var _fun89425_ip = 0;;) switch (_fun89425_ip) {
            case 0:
                var0 = arg0;
                var15 = var0.thread;
                var5 = var0.hasUnreads;
                var9 = var0.suffix;
                var8 = var0.containerStyle;
                var7 = var0.roleDotStyle;
                var6 = var0.textStyle;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 6;
                var0 = var3[var0];
                var4 = undefined;
                var2 = var2.bind(var4)(var0);
                var0 = var2.useForumPostAuthor;
                var0 = var0.bind(var2)(var15);
                var14 = var0.user;
                var0 = var0.author;
                var13 = null;
                var2 = var13 == var0;
                var12 = undefined;
                if (var2) {
                    _fun89425_ip = 103;
                    continue _fun89425
                }
            case 97:
                var12 = var0.nick;
            case 103:
                if (!(var13 == var12)) {
                    _fun89425_ip = 124;
                    continue _fun89425
                }
            case 107:
                var3 = var13 == var14;
                var2 = undefined;
                if (var3) {
                    _fun89425_ip = 121;
                    continue _fun89425
                }
            case 116:
                var2 = var14.username;
            case 121:
                var12 = var2;
            case 124:
                var2 = var13 == var0;
                var11 = undefined;
                if (var2) {
                    _fun89425_ip = 139;
                    continue _fun89425
                }
            case 133:
                var11 = var0.colorString;
            case 139:
                var2 = var13 == var0;
                var10 = undefined;
                if (var2) {
                    _fun89425_ip = 154;
                    continue _fun89425
                }
            case 148:
                var10 = var0.colorStrings;
            case 154:
                var2 = var13 == var14;
                var0 = null;
                if (var2) {
                    _fun89425_ip = 243;
                    continue _fun89425
                }
            case 163:
                var3 = _closure1_slot6;
                var2 = _closure1_slot9;
                var1 = {};
                var1.thread = var15;
                var15 = var13 == var14;
                var13 = undefined;
                if (var15) {
                    _fun89425_ip = 192;
                    continue _fun89425
                }
            case 187:
                var13 = var14.id;
            case 192:
                var1.authorId = var13;
                var1.authorName = var12;
                var1.authorColor = var11;
                var1.authorColors = var10;
                var1.suffix = var9;
                var1.containerStyle = var8;
                var1.roleDotStyle = var7;
                var1.textStyle = var6;
                var1.hasUnreads = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 243:
                return var0;
        }
    };
    var2.ForumPostAuthor = var3;
    var1 = function arg0() {
        _fun89426: for (var _fun89426_ip = 0;;) switch (_fun89426_ip) {
            case 0:
                var0 = arg0;
                var12 = var0.thread;
                var9 = var0.message;
                var4 = var0.hasUnreads;
                var8 = var0.suffix;
                var7 = var0.containerStyle;
                var6 = var0.roleDotStyle;
                var5 = var0.textStyle;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 6;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = var2.useForumPostMessageAuthor;
                var1 = var1.bind(var2)(var9, var12);
                var11 = var1.authorName;
                var10 = var1.authorColor;
                var9 = var1.authorColors;
                var13 = var1.user;
                var2 = _closure1_slot6;
                var1 = _closure1_slot9;
                var0 = {};
                var0.thread = var12;
                var12 = null;
                var14 = var12 == var13;
                var12 = undefined;
                if (var14) {
                    _fun89426_ip = 135;
                    continue _fun89426
                }
            case 130:
                var12 = var13.id;
            case 135:
                var0.authorId = var12;
                var0.authorName = var11;
                var0.authorColor = var10;
                var0.authorColors = var9;
                var0.suffix = var8;
                var0.containerStyle = var7;
                var0.roleDotStyle = var6;
                var0.textStyle = var5;
                var0.hasUnreads = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.ForumPostMessageAuthor = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1298, 11604, 33, 1297, 8897, 1382, 9847, 11609, 566, 6672, 8187, 3932, 2]);