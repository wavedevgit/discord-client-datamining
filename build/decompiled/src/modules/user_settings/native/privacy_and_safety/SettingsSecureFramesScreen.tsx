// modules/user_settings/native/privacy_and_safety/SettingsSecureFramesScreen.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun88718: for (var _fun88718_ip = 0;;) switch (_fun88718_ip) {
            case 0:
                var1 = arg0;
                var12 = var1.userId;
                var _closure2_slot0 = var12;
                var10 = var1.start;
                var9 = var1.end;
                var2 = var1.onPress;
                var _closure2_slot1 = var2;
                var1 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 8;
                var6 = var5[var3];
                var3 = undefined;
                var11 = var1.bind(var3)(var6);
                var8 = var11.useStateFromStores;
                var6 = _closure1_slot6;
                var7 = new Array(1);
                var7[0] = var6;
                var6 = function() { // Environment: var0
                    var2 = _closure1_slot6;
                    var1 = var2.getUser;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var15 = var8.bind(var11)(var7, var6);
                var6 = 9;
                var6 = var5[var6];
                var7 = var1.bind(var3)(var6);
                var6 = var7.useSecureFramesUserVerifiedKeys;
                var16 = var6.bind(var7)(var12);
                var6 = _closure1_slot1;
                var7 = 10;
                var7 = var5[var7];
                var8 = var6.bind(var3)(var7);
                var7 = var8.getFormattedName;
                var11 = var7.bind(var8)(var15);
                var14 = _closure1_slot3;
                var13 = var14.useEffect;
                var8 = new Array(1);
                var8[0] = var12;
                var7 = function() { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 11;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.getUser;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var7 = var13.bind(var14)(var7, var8);
                var13 = _closure1_slot3;
                var8 = var13.useCallback;
                var7 = new Array(2);
                var7[0] = var2;
                var7[1] = var12;
                var2 = function() { // Environment: var0
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var8 = var8.bind(var13)(var2, var7);
                var2 = 12;
                var2 = var5[var2];
                var2 = var6.bind(var3)(var2);
                var2 = var2.bind(var3)();
                var13 = var2.analyticsLocations;
                var _closure2_slot2 = var13;
                var7 = _closure1_slot3;
                var6 = var7.useCallback;
                var2 = new Array(2);
                var2[0] = var13;
                var2[1] = var12;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 13;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = {};
                    var4 = _closure2_slot0;
                    var1.userId = var4;
                    var3 = _closure2_slot2;
                    var1.sourceAnalyticsLocations = var3;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var6 = var6.bind(var7)(var0, var2);
                var2 = _closure1_slot8;
                var0 = 14;
                var0 = var5[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.TableRow;
                var0 = {};
                var5 = null;
                var5 = var5 != var15;
                if (!var5) {
                    _fun88718_ip = 364;
                    continue _fun88718
                }
            case 295:
                var13 = _closure1_slot8;
                var12 = _closure1_slot1;
                var17 = _closure1_slot2;
                var14 = 15;
                var7 = var17[var14];
                var12 = var12.bind(var3)(var7);
                var7 = {};
                var7.user = var15;
                var7.guildId = var3;
                var15 = _closure1_slot0;
                var14 = var17[var14];
                var14 = var15.bind(var3)(var14);
                var14 = var14.AvatarSizes;
                var14 = var14.REFRESH_MEDIUM_32;
                var7.size = var14;
                var5 = var13.bind(var3)(var12, var7);
            case 364:
                var0.icon = var5;
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var12 = 16;
                var13 = var7[var12];
                var13 = var5.bind(var3)(var13);
                var15 = var13.intl;
                var14 = var15.formatToPlainString;
                var12 = var7[var12];
                var12 = var5.bind(var3)(var12);
                var12 = var12.t;
                var13 = var12["/MBjYF"];
                var12 = {};
                var16 = var16.length;
                var12.count = var16;
                var12 = var14.bind(var15)(var13, var12);
                var0.subLabel = var12;
                var0.label = var11;
                var0.start = var10;
                var0.end = var9;
                var0.onPress = var8;
                var0.onLongPress = var6;
                var6 = _closure1_slot8;
                var4 = 17;
                var4 = var7[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.TableRowArrow;
                var4 = {};
                var4 = var6.bind(var3)(var5, var4);
                var0.trailing = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = function arg0() {
        _fun88723: for (var _fun88723_ip = 0;;) switch (_fun88723_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.item;
                var3 = var0.type;
                var2 = _closure1_slot11;
                var2 = var2.USER;
                if (!(var3 !== var2)) {
                    _fun88723_ip = 34;
                    continue _fun88723
                }
            case 30:
                var2 = undefined;
                return var2;
            case 34:
                var3 = _closure1_slot8;
                var2 = _closure1_slot12;
                var1 = {};
                var5 = var1;
                var4 = var0;
                var0 = copyDataProperties(var5, var4);
                var0 = undefined;
                var0 = var3.bind(var0)(var2, var1);
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var0 = var0.type;
        return var0;
    };
    var _closure1_slot14 = var0;
    var0 = function arg0() {
        _fun88725: for (var _fun88725_ip = 0;;) switch (_fun88725_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.type;
                var1 = _closure1_slot11;
                var1 = var1.USER;
                if (!(var2 !== var1)) {
                    _fun88725_ip = 29;
                    continue _fun88725
                }
            case 25:
                var1 = undefined;
                return var1;
            case 29:
                var0 = var0.userId;
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var0 = function() {
        _fun88726: for (var _fun88726_ip = 0;;) switch (_fun88726_ip) {
            case 0:
                var1 = _closure1_slot10;
                var4 = undefined;
                var5 = var1.bind(var4)();
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 18;
                var1 = var3[var1];
                var7 = var2.bind(var4)(var1);
                var1 = var7.useNavigation;
                var1 = var1.bind(var7)();
                var _closure2_slot0 = var1;
                var9 = _closure1_slot3;
                var8 = var9.useCallback;
                var7 = new Array(1);
                var7[0] = var1;
                var1 = function(arg0) { // Environment: var0
                    var3 = _closure2_slot0;
                    var2 = var3.navigate;
                    var0 = _closure1_slot7;
                    var1 = var0.SECURE_FRAMES_VERIFIED_DEVICES;
                    var0 = {};
                    var4 = arg0;
                    var0.userId = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    var0 = undefined;
                    return var0;
                };
                var7 = var8.bind(var9)(var1, var7);
                var _closure2_slot1 = var7;
                var1 = 19;
                var1 = var3[var1];
                var2 = var2.bind(var4)(var1);
                var1 = var2.useSecureFramesVerifiedUserIds;
                var12 = var1.bind(var2)();
                var _closure2_slot2 = var12;
                var3 = _closure1_slot3;
                var2 = var3.useMemo;
                var1 = new Array(2);
                var1[0] = var7;
                var1[1] = var12;
                var0 = function() { // Environment: var0
                    var2 = _closure2_slot2;
                    var1 = var2.map;
                    var0 = function(arg0, arg1) { // Environment: var0
                        var2 = arg1;
                        var0 = {};
                        var1 = _closure1_slot11;
                        var1 = var1.USER;
                        var0.type = var1;
                        var1 = arg0;
                        var0.userId = var1;
                        var3 = _closure2_slot1;
                        var0.onPress = var3;
                        var3 = 0;
                        var3 = var3 === var2;
                        var0.start = var3;
                        var1 = _closure2_slot2;
                        var3 = var1.length;
                        var1 = 1;
                        var1 = var3 - var1;
                        var1 = var2 === var1;
                        var0.end = var1;
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var16 = var2.bind(var3)(var0, var1);
                var2 = var12.length;
                var1 = 0;
                var0 = null;
                if (!(var1 !== var2)) {
                    _fun88726_ip = 541;
                    continue _fun88726
                }
            case 159:
                var3 = _closure1_slot9;
                var2 = _closure1_slot4;
                var1 = {};
                var5 = var5.list;
                var1.style = var5;
                var8 = _closure1_slot8;
                var14 = _closure1_slot0;
                var15 = _closure1_slot2;
                var5 = 20;
                var5 = var15[var5];
                var5 = var14.bind(var4)(var5);
                var7 = var5.Text;
                var5 = {
                    'variant': 'text-sm/semibold',
                    'color': 'text-default'
                };
                var9 = 16;
                var10 = var15[var9];
                var10 = var14.bind(var4)(var10);
                var13 = var10.intl;
                var11 = var13.string;
                var10 = var15[var9];
                var10 = var14.bind(var4)(var10);
                var10 = var10.t;
                var10 = var10["5b3FNI"];
                var10 = var11.bind(var13)(var10);
                var5.children = var10;
                var7 = var8.bind(var4)(var7, var5);
                var5 = new Array(3);
                var5[0] = var7;
                var10 = _closure1_slot8;
                var8 = _closure1_slot4;
                var7 = {};
                var11 = {};
                var13 = var12.length;
                var12 = _closure1_slot5;
                var12 = var13 * var12;
                var11.minHeight = var12;
                var7.style = var11;
                var13 = _closure1_slot8;
                var11 = 21;
                var11 = var15[var11];
                var11 = var14.bind(var4)(var11);
                var12 = var11.FlashList;
                var11 = {};
                var17 = _closure1_slot15;
                var11.keyExtractor = var17;
                var17 = _closure1_slot14;
                var11.getItemType = var17;
                var17 = _closure1_slot13;
                var11.renderItem = var17;
                var11.data = var16;
                var16 = _closure1_slot5;
                var11.estimatedItemSize = var16;
                var11 = var13.bind(var4)(var12, var11);
                var7.children = var11;
                var7 = var10.bind(var4)(var8, var7);
                var5[1] = var7;
                var8 = _closure1_slot8;
                var6 = 22;
                var6 = var15[var6];
                var6 = var14.bind(var4)(var6);
                var7 = var6.TextWithIOSLinkWorkaround;
                var6 = {
                    'variant': 'text-xs/normal',
                    'color': 'text-default'
                };
                var10 = var15[var9];
                var10 = var14.bind(var4)(var10);
                var12 = var10.intl;
                var11 = var12.format;
                var9 = var15[var9];
                var9 = var14.bind(var4)(var9);
                var9 = var9.t;
                var10 = var9["7w9ymD"];
                var9 = {};
                var13 = 23;
                var13 = var15[var13];
                var14 = var14.bind(var4)(var13);
                var13 = var14.getSecureFramesVerifiedDevicesHelpdeskArticle;
                var13 = var13.bind(var14)();
                var9.helpArticle = var13;
                var9 = var11.bind(var12)(var10, var9);
                var6.children = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[2] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 541:
                return var0;
        }
    };
    var _closure1_slot16 = var0;
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
    var _closure1_slot3 = var3;
    var11 = 1;
    var3 = var5[var11];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.TABLE_ROW_HEIGHT;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.UserSettingsSections;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot8 = var6;
    var3 = var3.jsxs;
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var8.flexGrow = var11;
    var9 = 7;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var8.paddingHorizontal = var12;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var8.gap = var12;
    var3.container = var8;
    var8 = {};
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_24;
    var8.marginTop = var12;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var8.gap = var12;
    var3.header = var8;
    var8 = {};
    var8.flexGrow = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_8;
    var8.gap = var9;
    var3.list = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot10 = var3;
    var3 = {};
    var6 = 'USER';
    var3.USER = var6;
    var _closure1_slot11 = var3;
    var3 = 24;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/privacy_and_safety/SettingsSecureFramesScreen.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var0 = _closure1_slot10;
        var3 = undefined;
        var8 = var0.bind(var3)();
        var2 = _closure1_slot9;
        var1 = _closure1_slot4;
        var0 = {};
        var4 = var8.container;
        var0.style = var4;
        var7 = _closure1_slot9;
        var6 = _closure1_slot4;
        var4 = {};
        var8 = var8.header;
        var4.style = var8;
        var10 = _closure1_slot8;
        var17 = _closure1_slot0;
        var18 = _closure1_slot2;
        var8 = 20;
        var8 = var18[var8];
        var8 = var17.bind(var3)(var8);
        var9 = var8.Text;
        var8 = {
            'variant': 'heading-md/semibold',
            'color': 'mobile-text-heading-primary'
        };
        var12 = 16;
        var11 = var18[var12];
        var11 = var17.bind(var3)(var11);
        var14 = var11.intl;
        var13 = var14.string;
        var11 = var18[var12];
        var11 = var17.bind(var3)(var11);
        var11 = var11.t;
        var11 = var11["9Q/PQv"];
        var11 = var13.bind(var14)(var11);
        var8.children = var11;
        var9 = var10.bind(var3)(var9, var8);
        var8 = new Array(2);
        var8[0] = var9;
        var11 = _closure1_slot8;
        var9 = 22;
        var9 = var18[var9];
        var9 = var17.bind(var3)(var9);
        var10 = var9.TextWithIOSLinkWorkaround;
        var9 = {
            'variant': 'text-sm/normal',
            'color': 'text-default'
        };
        var13 = var18[var12];
        var13 = var17.bind(var3)(var13);
        var15 = var13.intl;
        var14 = var15.format;
        var12 = var18[var12];
        var12 = var17.bind(var3)(var12);
        var12 = var12.t;
        var13 = var12["8IwQfG"];
        var12 = {};
        var16 = 23;
        var16 = var18[var16];
        var17 = var17.bind(var3)(var16);
        var16 = var17.getSecureFramesHelpdeskArticle;
        var16 = var16.bind(var17)();
        var12.helpArticle = var16;
        var12 = var14.bind(var15)(var13, var12);
        var9.children = var12;
        var9 = var11.bind(var3)(var10, var9);
        var8[1] = var9;
        var4.children = var8;
        var6 = var7.bind(var3)(var6, var4);
        var4 = new Array(2);
        var4[0] = var6;
        var7 = _closure1_slot8;
        var6 = _closure1_slot16;
        var5 = {};
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 4872, 1621, 660, 33, 1297, 671, 566, 11523, 3236, 6978, 5730, 7372, 4900, 5456, 1234, 4908, 1469, 11521, 3941, 5757, 5336, 8284, 2]);