// modules/profile_customization/native/HeaderAvatar.tsx
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
    var3 = var10.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ActivityTypes;
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot7 = var3;
    var3 = 6;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 7;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_SURFACE_HIGH;
    var8.backgroundColor = var9;
    var3.avatarStatusStyle = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot8 = var3;
    var3 = 15;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/profile_customization/native/HeaderAvatar.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun50911: for (var _fun50911_ip = 0;;) switch (_fun50911_ip) {
            case 0:
                var5 = arg0;
                var23 = var5.user;
                var _closure2_slot0 = var23;
                var20 = var5.guildId;
                var _closure2_slot1 = var20;
                var16 = var5.disableStatus;
                var0 = var5.pendingAvatarSrc;
                var _closure2_slot2 = var0;
                var21 = var5.pendingAvatarDecoration;
                var8 = var5.style;
                var13 = var5.statusStyle;
                var7 = var5.onPress;
                var14 = var5.size;
                var4 = undefined;
                if (!(var14 === var4)) {
                    _fun50911_ip = 107;
                    continue _fun50911
                }
            case 72:
                var1 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 8;
                var0 = var3[var0];
                var0 = var1.bind(var4)(var0);
                var0 = var0.AvatarSizes;
                var14 = var0.XXLARGE;
            case 107:
                var9 = var5.animate;
                if (!(var9 === var4)) {
                    _fun50911_ip = 119;
                    continue _fun50911
                }
            case 117:
                var9 = true;
            case 119:
                var3 = {
                    'user': 0,
                    'guildId': 0,
                    'disableStatus': 0,
                    'pendingAvatarSrc': 0,
                    'pendingAvatarDecoration': 0,
                    'style': 0,
                    'statusStyle': 0,
                    'onPress': 0,
                    'size': 0,
                    'animate': 0
                };
                var0 = null;
                var27 = var3;
                var26 = null;
                var1 = silentSetPrototypeOf(var27, var26);
                var27 = {};
                var26 = var5;
                var25 = var3;
                var6 = copyDataProperties(var27, var26, var25);
                var _closure2_slot3 = var4;
                var _closure2_slot4 = var4;
                var _closure2_slot5 = var4;
                var3 = _closure1_slot8;
                var11 = var3.bind(var4)();
                var5 = var23.id;
                _closure2_slot3 = var5;
                var18 = _closure1_slot0;
                var19 = _closure1_slot2;
                var3 = 9;
                var10 = var19[var3];
                var17 = var18.bind(var4)(var10);
                var15 = var17.useStateFromStores;
                var10 = _closure1_slot3;
                var12 = new Array(1);
                var12[0] = var10;
                var10 = function() { // Environment: var2
                    var0 = _closure1_slot3;
                    var0 = var0.useReducedMotion;
                    return var0;
                };
                var10 = var15.bind(var17)(var12, var10);
                _closure2_slot4 = var10;
                var12 = var19[var3];
                var22 = var18.bind(var4)(var12);
                var17 = var22.useStateFromStoresObject;
                var12 = _closure1_slot5;
                var15 = new Array(1);
                var15[0] = var12;
                var12 = new Array(1);
                var12[0] = var5;
                var5 = function() { // Environment: var2
                    var0 = {};
                    var4 = _closure1_slot5;
                    var3 = var4.isMobileOnline;
                    var2 = _closure2_slot3;
                    var2 = var3.bind(var4)(var2);
                    var0.isMobileOnline = var2;
                    var3 = var4.getStatus;
                    var2 = _closure2_slot3;
                    var2 = var3.bind(var4)(var2);
                    var0.status = var2;
                    var3 = var4.getActivities;
                    var2 = _closure2_slot3;
                    var2 = var3.bind(var4)(var2);
                    var0.activities = var2;
                    var3 = var4.findActivity;
                    var2 = _closure2_slot3;
                    var1 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var1 = var0.type;
                        var0 = _closure1_slot6;
                        var0 = var0.CUSTOM_STATUS;
                        var0 = var1 === var0;
                        return var0;
                    };
                    var1 = var3.bind(var4)(var2, var1);
                    var0.customStatusActivity = var1;
                    return var0;
                };
                var5 = var17.bind(var22)(var15, var5, var12);
                var17 = var5.isMobileOnline;
                var15 = var5.status;
                var12 = var5.activities;
                var3 = var19[var3];
                var24 = var18.bind(var4)(var3);
                var22 = var24.useStateFromStores;
                var3 = _closure1_slot4;
                var5 = new Array(1);
                var5[0] = var3;
                var3 = function() { // Environment: var2
                    _fun50915: for (var _fun50915_ip = 0;;) switch (_fun50915_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var0 = null;
                            var2 = var0 != var2;
                            if (!var2) {
                                _fun50915_ip = 43;
                                continue _fun50915
                            }
                        case 16:
                            var4 = _closure1_slot4;
                            var3 = var4.getMember;
                            var2 = _closure2_slot1;
                            var1 = _closure2_slot3;
                            var0 = var3.bind(var4)(var2, var1);
                        case 43:
                            return var0;
                    }
                };
                var22 = var22.bind(var24)(var5, var3);
                var5 = _closure1_slot1;
                var3 = 10;
                var3 = var19[var3];
                var5 = var5.bind(var4)(var3);
                var3 = 11;
                var3 = var19[var3];
                var19 = var18.bind(var4)(var3);
                var18 = var19.getProfilePreviewValue;
                var3 = {};
                var3.pendingValue = var21;
                var24 = var0 == var23;
                var21 = undefined;
                if (var24) {
                    _fun50911_ip = 397;
                    continue _fun50911
                }
            case 391:
                var21 = var23.avatarDecoration;
            case 397:
                var3.userValue = var21;
                var23 = var0 == var22;
                var21 = undefined;
                if (var23) {
                    _fun50911_ip = 417;
                    continue _fun50911
                }
            case 411:
                var21 = var22.avatarDecoration;
            case 417:
                var3.guildValue = var21;
                var3.guildId = var20;
                var3 = var18.bind(var19)(var3);
                var5 = var5.bind(var4)(var3);
                var3 = {};
                var3.isMobileOnline = var17;
                var3.size = var14;
                var14 = null;
                if (var16) {
                    _fun50911_ip = 455;
                    continue _fun50911
                }
            case 452:
                var14 = var15;
            case 455:
                var3.status = var14;
                var14 = var11.avatarStatusStyle;
                var11 = new Array(2);
                var11[0] = var14;
                var11[1] = var13;
                var3.statusStyle = var11;
                var13 = _closure1_slot1;
                var14 = _closure1_slot2;
                var11 = 12;
                var11 = var14[var11];
                var11 = var13.bind(var4)(var11);
                var11 = var11.bind(var4)(var12);
                var3.streaming = var11;
                if (!var9) {
                    _fun50911_ip = 518;
                    continue _fun50911
                }
            case 515:
                var9 = !var10;
            case 518:
                var3.animate = var9;
                var3.avatarDecoration = var5;
                _closure2_slot5 = var3;
                var5 = function arg0() {
                    _fun50916: for (var _fun50916_ip = 0;;) switch (_fun50916_ip) {
                        case 0:
                            var6 = arg0;
                            var3 = _closure1_slot7;
                            var1 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 8;
                            var0 = var2[var0];
                            var2 = undefined;
                            var1 = var1.bind(var2)(var0);
                            var0 = _closure2_slot2;
                            if (!(var2 === var0)) {
                                _fun50916_ip = 78;
                                continue _fun50916
                            }
                        case 43:
                            var0 = {};
                            var4 = _closure2_slot0;
                            var0.user = var4;
                            var4 = _closure2_slot1;
                            var0.guildId = var4;
                            var0.style = var6;
                            var15 = _closure2_slot5;
                            var16 = var0;
                            var4 = copyDataProperties(var16, var15);
                            _fun50916_ip = 151;
                            continue _fun50916;
                        case 78:
                            var4 = {};
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var7 = 13;
                            var7 = var9[var7];
                            var12 = var8.bind(var2)(var7);
                            var11 = var12.getAvatarSource;
                            var16 = _closure2_slot0;
                            var15 = _closure2_slot1;
                            var14 = _closure2_slot2;
                            var13 = _closure2_slot4;
                            var17 = var12;
                            var7 = var17[var11](var16, var15, var14, var13, var12);
                            var4.source = var7;
                            var4.style = var6;
                            var15 = _closure2_slot5;
                            var16 = var4;
                            var5 = copyDataProperties(var16, var15);
                            var0 = var4;
                        case 151:
                            var0 = var3.bind(var2)(var1, var0);
                            return var0;
                    }
                };
                if (!(var0 == var7)) {
                    _fun50911_ip = 548;
                    continue _fun50911
                }
            case 541:
                var0 = var5.bind(var4)(var8);
                _fun50911_ip = 630;
                continue _fun50911;
            case 548:
                var3 = _closure1_slot7;
                var2 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 14;
                var1 = var9[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.PressableOpacity;
                var1 = {};
                var1.style = var8;
                var1.onLongPress = var7;
                var1.onPress = var7;
                var7 = 'button';
                var1.accessibilityRole = var7;
                var27 = var1;
                var26 = var6;
                var6 = copyDataProperties(var27, var26);
                var6 = var5.bind(var4)();
                var5 = 'children';
                var1[var5] = var6;
                var0 = var3.bind(var4)(var2, var1);
            case 630:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1298, 1672, 3601, 660, 33, 1297, 671, 5447, 566, 5730, 5580, 5731, 5732, 4897, 2]);