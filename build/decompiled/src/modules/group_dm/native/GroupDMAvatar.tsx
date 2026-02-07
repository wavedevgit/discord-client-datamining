// modules/group_dm/native/GroupDMAvatar.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function arg0() {
        _fun72890: for (var _fun72890_ip = 0;;) switch (_fun72890_ip) {
            case 0:
                var1 = arg0;
                var17 = var1.style;
                var4 = var1.size;
                var9 = var1.animate;
                var10 = var1.users;
                var11 = var1.sources;
                var12 = var1.pileSizeOverride;
                var16 = var1.status;
                var6 = var1.accessible;
                var5 = var1.accessibilityLabel;
                var3 = undefined;
                var _closure2_slot1 = var3;
                var1 = _closure1_slot10;
                var13 = var1.bind(var3)();
                var7 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 7;
                var2 = var2[var1];
                var2 = var7.bind(var3)(var2);
                var2 = var2.AVATAR_SIZE_MAP;
                var19 = var2[var4];
                var _closure2_slot0 = var19;
                var14 = _closure1_slot3;
                var8 = var14.useMemo;
                var7 = new Array(1);
                var7[0] = var19;
                var2 = function() { // Environment: var0
                    var0 = {};
                    var1 = _closure2_slot0;
                    var0.width = var1;
                    var0.height = var1;
                    return var0;
                };
                var18 = var8.bind(var14)(var2, var7);
                var8 = null;
                if (!(var8 == var12)) {
                    _fun72890_ip = 149;
                    continue _fun72890
                }
            case 141:
                var2 = _closure1_slot9;
                var12 = var2[var4];
            case 149:
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = var4[var1];
                var1 = var2.bind(var3)(var1);
                var1 = var1.AVATAR_SIZE_MAP;
                var14 = var1[var12];
                _closure2_slot1 = var14;
                var7 = _closure1_slot3;
                var2 = var7.useMemo;
                var1 = new Array(2);
                var1[0] = var19;
                var1[1] = var14;
                var0 = function() { // Environment: var0
                    var0 = _closure2_slot1;
                    var8 = 2;
                    var5 = var0 / var8;
                    var0 = 3;
                    var6 = var5 + var0;
                    var1 = var8 * var6;
                    var0 = global;
                    var7 = var0.Math;
                    var4 = var7.sqrt;
                    var9 = var0.Math;
                    var2 = var9.pow;
                    var2 = var2.bind(var9)(var6, var8);
                    var2 = var8 * var2;
                    var2 = var4.bind(var7)(var2);
                    var4 = _closure2_slot0;
                    var5 = var4 - var5;
                    var4 = _closure2_slot1;
                    var4 = var5 - var4;
                    var7 = var0.Math;
                    var5 = var7.sqrt;
                    var9 = var0.Math;
                    var0 = var9.pow;
                    var0 = var0.bind(var9)(var4, var8);
                    var0 = var8 * var0;
                    var0 = var5.bind(var7)(var0);
                    var5 = -var2;
                    var2 = var6 - var2;
                    var2 = var5 - var2;
                    var2 = var2 - var0;
                    var0 = var0 - var4;
                    var4 = var2 + var0;
                    var0 = {};
                    var2 = {};
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var5 = 8;
                    var6 = var6[var5];
                    var5 = undefined;
                    var5 = var7.bind(var5)(var6);
                    var5 = var5.CutoutShape;
                    var5 = var5.Circle;
                    var2.shape = var5;
                    var5 = _closure2_slot1;
                    var5 = var5 - var1;
                    var5 = var5 - var4;
                    var2.x = var5;
                    var3 = _closure2_slot1;
                    var3 = var3 - var1;
                    var3 = var3 - var4;
                    var2.y = var3;
                    var2.size = var1;
                    var1 = new Array(1);
                    var1[0] = var2;
                    var0.nativeCutouts = var1;
                    return var0;
                };
                var7 = var2.bind(var7)(var0, var1);
                var2 = _closure1_slot8;
                var1 = _closure1_slot4;
                var0 = {};
                var14 = new Array(2);
                var14[0] = var18;
                var14[1] = var17;
                var0.style = var14;
                var0.accessible = var6;
                var0.accessibilityLabel = var5;
                var14 = true;
                var0.accessibilityElementsHidden = var14;
                var5 = 'no-hide-descendants';
                var0.importantForAccessibility = var5;
                var6 = _closure1_slot7;
                var5 = _closure1_slot1;
                var17 = 5;
                var4 = var4[var17];
                var5 = var5.bind(var3)(var4);
                var4 = {};
                var18 = var13.firstFace;
                var4.style = var18;
                var4.size = var12;
                var4.guildId = var3;
                var4.cutout = var7;
                var4.animate = var9;
                if (!(var8 != var10)) {
                    _fun72890_ip = 334;
                    continue _fun72890
                }
            case 320:
                var7 = {};
                var18 = 0;
                var18 = var10[var18];
                var7.user = var18;
                _fun72890_ip = 349;
                continue _fun72890;
            case 334:
                var18 = {};
                var19 = 0;
                var19 = var11[var19];
                var18.source = var19;
                var7 = var18;
            case 349:
                var21 = var4;
                var20 = var7;
                var7 = copyDataProperties(var21, var20);
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot7;
                var6 = _closure1_slot1;
                var5 = _closure1_slot2;
                var5 = var5[var17];
                var6 = var6.bind(var3)(var5);
                var5 = {};
                var5.status = var16;
                var15 = _closure1_slot6;
                var15 = var15.REFRESH_MEDIUM_10;
                var5.statusSizeOverride = var15;
                var5.autoStatusCutout = var14;
                var13 = var13.secondFace;
                var5.style = var13;
                var5.size = var12;
                var5.guildId = var3;
                var5.animate = var9;
                if (!(var8 != var10)) {
                    _fun72890_ip = 462;
                    continue _fun72890
                }
            case 447:
                var8 = {};
                var9 = 1;
                var9 = var10[var9];
                var8.user = var9;
                _fun72890_ip = 478;
                continue _fun72890;
            case 462:
                var9 = {};
                var10 = 1;
                var10 = var11[var10];
                var9.source = var10;
                var8 = var9;
            case 478:
                var21 = var5;
                var20 = var8;
                var8 = copyDataProperties(var21, var20);
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot11 = var1;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var8 = var6[var0];
    var4 = arg3;
    var0 = undefined;
    var4 = var4.bind(var0)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.StatusSizes;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.jsx;
    var _closure1_slot7 = var7;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
    var4 = {};
    var7 = 5;
    var8 = var6[var7];
    var8 = var5.bind(var0)(var8);
    var8 = var8.AvatarSizes;
    var9 = var8.LARGE_48;
    var8 = var6[var7];
    var8 = var5.bind(var0)(var8);
    var8 = var8.AvatarSizes;
    var8 = var8.SMALL;
    var4[var9] = var8;
    var8 = var6[var7];
    var8 = var5.bind(var0)(var8);
    var8 = var8.AvatarSizes;
    var9 = var8.XLARGE;
    var8 = var6[var7];
    var8 = var5.bind(var0)(var8);
    var8 = var8.AvatarSizes;
    var8 = var8.NORMAL;
    var4[var9] = var8;
    var8 = var6[var7];
    var8 = var5.bind(var0)(var8);
    var8 = var8.AvatarSizes;
    var9 = var8.XXLARGE;
    var8 = var6[var7];
    var8 = var5.bind(var0)(var8);
    var8 = var8.AvatarSizes;
    var8 = var8.LARGE;
    var4[var9] = var8;
    var8 = var6[var7];
    var8 = var5.bind(var0)(var8);
    var8 = var8.AvatarSizes;
    var9 = var8.PROFILE;
    var8 = var6[var7];
    var8 = var5.bind(var0)(var8);
    var8 = var8.AvatarSizes;
    var8 = var8.XXLARGE;
    var4[var9] = var8;
    var8 = var6[var7];
    var8 = var5.bind(var0)(var8);
    var8 = var8.AvatarSizes;
    var9 = var8.REFRESH_MEDIUM_32;
    var8 = var6[var7];
    var8 = var5.bind(var0)(var8);
    var8 = var8.AvatarSizes;
    var8 = var8.XSMALL_20;
    var4[var9] = var8;
    var8 = var6[var7];
    var8 = var5.bind(var0)(var8);
    var8 = var8.AvatarSizes;
    var9 = var8.XSMALL;
    var8 = var6[var7];
    var8 = var5.bind(var0)(var8);
    var8 = var8.AvatarSizes;
    var8 = var8.SIZE_16;
    var4[var9] = var8;
    var8 = var6[var7];
    var8 = var5.bind(var0)(var8);
    var8 = var8.AvatarSizes;
    var9 = var8.SIZE_16;
    var8 = var6[var7];
    var8 = var5.bind(var0)(var8);
    var8 = var8.AvatarSizes;
    var8 = var8.XXSMALL_10;
    var4[var9] = var8;
    var8 = var6[var7];
    var8 = var5.bind(var0)(var8);
    var8 = var8.AvatarSizes;
    var8 = var8.NORMAL;
    var7 = var6[var7];
    var7 = var5.bind(var0)(var7);
    var7 = var7.AvatarSizes;
    var7 = var7.XSMALL;
    var4[var8] = var7;
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var8 = var5.bind(var0)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {
        'position': 'absolute',
        'top': 0,
        'left': 0
    };
    var4.firstFace = var9;
    var9 = {
        'position': 'absolute',
        'bottom': 0,
        'right': 0
    };
    var4.secondFace = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot10 = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/group_dm/native/GroupDMAvatar.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function arg0() {
        _fun72893: for (var _fun72893_ip = 0;;) switch (_fun72893_ip) {
            case 0:
                var1 = arg0;
                var10 = var1.style;
                var8 = var1.channel;
                var _closure2_slot0 = var8;
                var9 = var1.size;
                var7 = var1.animate;
                var12 = var1.pileSizeOverride;
                var11 = var1.status;
                var6 = var1.accessible;
                var5 = var1.accessibilityLabel;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 9;
                var2 = var4[var2];
                var4 = undefined;
                var13 = var3.bind(var4)(var2);
                var3 = var13.useStateFromStoresArray;
                var14 = _closure1_slot5;
                var2 = new Array(1);
                var2[0] = var14;
                var0 = function() { // Environment: var0
                    var0 = _closure2_slot0;
                    var2 = var0.recipients;
                    var1 = var2.map;
                    var0 = function(arg0) { // Environment: var0
                        var2 = _closure1_slot5;
                        var1 = var2.getUser;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var2 = var1.bind(var2)(var0);
                    var1 = var2.filter;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var0 = 10;
                    var3 = var3[var0];
                    var0 = undefined;
                    var0 = var4.bind(var0)(var3);
                    var0 = var0.isNotNullish;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var14 = var3.bind(var13)(var2, var0);
                var2 = var8.icon;
                var0 = null;
                if (!(var0 == var2)) {
                    _fun72893_ip = 296;
                    continue _fun72893
                }
            case 121:
                var0 = var8.recipients;
                var0 = var0.length;
                var13 = 0;
                if (!(var13 !== var0)) {
                    _fun72893_ip = 296;
                    continue _fun72893
                }
            case 141:
                var0 = var14.length;
                if (!(var13 !== var0)) {
                    _fun72893_ip = 296;
                    continue _fun72893
                }
            case 153:
                var2 = var14.length;
                var0 = 1;
                if (!(var0 !== var2)) {
                    _fun72893_ip = 218;
                    continue _fun72893
                }
            case 165:
                var3 = _closure1_slot7;
                var2 = _closure1_slot11;
                var0 = {};
                var0.status = var11;
                var0.style = var10;
                var0.size = var9;
                var0.animate = var7;
                var0.users = var14;
                var0.pileSizeOverride = var12;
                var0.accessible = var6;
                var0.accessibilityLabel = var5;
                var0 = var3.bind(var4)(var2, var0);
                _fun72893_ip = 294;
                continue _fun72893;
            case 218:
                var12 = _closure1_slot7;
                var3 = _closure1_slot1;
                var15 = _closure1_slot2;
                var2 = 5;
                var2 = var15[var2];
                var3 = var3.bind(var4)(var2);
                var2 = {};
                var15 = true;
                var2.autoStatusCutout = var15;
                var2.status = var11;
                var2.style = var10;
                var2.size = var9;
                var13 = var14[var13];
                var2.user = var13;
                var2.guildId = var4;
                var2.animate = var7;
                var2.accessible = var6;
                var2.accessibilityLabel = var5;
                var0 = var12.bind(var4)(var3, var2);
            case 294:
                _fun72893_ip = 364;
                continue _fun72893;
            case 296:
                var3 = _closure1_slot7;
                var2 = _closure1_slot1;
                var12 = _closure1_slot2;
                var1 = 5;
                var1 = var12[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var12 = true;
                var1.autoStatusCutout = var12;
                var1.status = var11;
                var1.style = var10;
                var1.size = var9;
                var1.channel = var8;
                var1.animate = var7;
                var1.accessible = var6;
                var1.accessibilityLabel = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 364:
                return var0;
        }
    };
    var2.default = var3;
    var2.FacepileGroupDMAvatar = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1621, 5505, 33, 5504, 1297, 5506, 5509, 566, 1304, 2]);