// modules/user_settings/native/privacy_and_safety/SettingsSecureFramesVerificationsScreen.tsx
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
        var3 = arg0;
        var15 = var3.index;
        var2 = var3.userId;
        var _closure2_slot0 = var2;
        var1 = var3.verification;
        var _closure2_slot1 = var1;
        var5 = var3.start;
        var4 = var3.end;
        var8 = _closure1_slot3;
        var6 = var8.useCallback;
        var3 = new Array(2);
        var3[0] = var2;
        var2 = var1.verifiedKey;
        var3[1] = var2;
        var2 = function() { // Environment: var0
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 6;
            var1 = var1[var0];
            var0 = undefined;
            var4 = var2.bind(var0)(var1);
            var3 = var4.deletePersistentVerification;
            var2 = _closure2_slot0;
            var1 = _closure2_slot1;
            var1 = var1.verifiedKey;
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var9 = var6.bind(var8)(var2, var3);
        var3 = _closure1_slot3;
        var2 = var3.useMemo;
        var6 = var1.timestamp;
        var1 = new Array(1);
        var1[0] = var6;
        var0 = function() { // Environment: var0
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 6;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.getSecureFramesUserVerifiedTimestamp;
            var0 = _closure2_slot1;
            var0 = var0.timestamp;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var6 = var2.bind(var3)(var0, var1);
        var3 = _closure1_slot7;
        var8 = _closure1_slot0;
        var10 = _closure1_slot2;
        var0 = 7;
        var0 = var10[var0];
        var2 = undefined;
        var0 = var8.bind(var2)(var0);
        var1 = var0.TableRow;
        var0 = {};
        var11 = 8;
        var12 = var10[var11];
        var12 = var8.bind(var2)(var12);
        var14 = var12.intl;
        var13 = var14.formatToPlainString;
        var11 = var10[var11];
        var11 = var8.bind(var2)(var11);
        var11 = var11.t;
        var12 = var11.N4qBBO;
        var11 = {};
        var11.index = var15;
        var11 = var13.bind(var14)(var12, var11);
        var0.label = var11;
        var0.subLabel = var6;
        var0.start = var5;
        var0.end = var4;
        var6 = _closure1_slot7;
        var4 = 9;
        var4 = var10[var4];
        var4 = var8.bind(var2)(var4);
        var5 = var4.PressableHighlight;
        var4 = {};
        var4.onPress = var9;
        var9 = _closure1_slot7;
        var7 = 10;
        var7 = var10[var7];
        var7 = var8.bind(var2)(var7);
        var8 = var7.XSmallIcon;
        var7 = {};
        var7 = var9.bind(var2)(var8, var7);
        var4.children = var7;
        var4 = var6.bind(var2)(var5, var4);
        var0.trailing = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var _closure1_slot10 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var4 = var0.title;
        var1 = _closure1_slot8;
        var3 = undefined;
        var5 = var1.bind(var3)();
        var2 = _closure1_slot7;
        var1 = _closure1_slot0;
        var6 = _closure1_slot2;
        var0 = 11;
        var0 = var6[var0];
        var0 = var1.bind(var3)(var0);
        var1 = var0.Text;
        var0 = {
            'style': null,
            'variant': 'text-sm/semibold',
            'color': 'text-default'
        };
        var5 = var5.section;
        var0.style = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot11 = var0;
    var0 = function arg0() {
        _fun88763: for (var _fun88763_ip = 0;;) switch (_fun88763_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.item;
                var3 = var0.type;
                var2 = _closure1_slot9;
                var2 = var2.VERIFICATION;
                if (!(var2 !== var3)) {
                    _fun88763_ip = 78;
                    continue _fun88763
                }
            case 30:
                var2 = _closure1_slot9;
                var2 = var2.SECTION;
                if (!(var2 !== var3)) {
                    _fun88763_ip = 48;
                    continue _fun88763
                }
            case 44:
                var2 = undefined;
                return var2;
            case 48:
                var5 = _closure1_slot7;
                var4 = _closure1_slot11;
                var3 = {};
                var7 = var3;
                var6 = var0;
                var2 = copyDataProperties(var7, var6);
                var2 = undefined;
                var2 = var5.bind(var2)(var4, var3);
                return var2;
            case 78:
                var3 = _closure1_slot7;
                var2 = _closure1_slot10;
                var1 = {};
                var7 = var1;
                var6 = var0;
                var0 = copyDataProperties(var7, var6);
                var0 = undefined;
                var0 = var3.bind(var0)(var2, var1);
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var0 = var0.type;
        return var0;
    };
    var _closure1_slot13 = var0;
    var0 = function arg0() {
        _fun88765: for (var _fun88765_ip = 0;;) switch (_fun88765_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.type;
                var3 = _closure1_slot9;
                var3 = var3.VERIFICATION;
                if (!(var3 !== var2)) {
                    _fun88765_ip = 50;
                    continue _fun88765
                }
            case 25:
                var1 = _closure1_slot9;
                var1 = var1.SECTION;
                if (!(var1 !== var2)) {
                    _fun88765_ip = 43;
                    continue _fun88765
                }
            case 39:
                var1 = undefined;
                return var1;
            case 43:
                var1 = var0.title;
                return var1;
            case 50:
                var0 = var0.verification;
                var0 = var0.verifiedKey;
                return var0;
        }
    };
    var _closure1_slot14 = var0;
    var0 = function arg0() {
        var1 = arg0;
        var4 = var1.userId;
        var _closure2_slot0 = var4;
        var3 = _closure1_slot3;
        var2 = var3.useCallback;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 6;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.deleteUserPersistentVerifications;
            var1 = _closure2_slot0;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var4 = var2.bind(var3)(var0, var1);
        var3 = _closure1_slot7;
        var11 = _closure1_slot0;
        var12 = _closure1_slot2;
        var0 = 7;
        var0 = var12[var0];
        var2 = undefined;
        var0 = var11.bind(var2)(var0);
        var1 = var0.TableRow;
        var0 = {};
        var10 = _closure1_slot7;
        var5 = 11;
        var7 = var12[var5];
        var7 = var11.bind(var2)(var7);
        var9 = var7.Text;
        var7 = {
            'variant': 'text-md/semibold',
            'color': 'text-feedback-critical'
        };
        var8 = 8;
        var13 = var12[var8];
        var13 = var11.bind(var2)(var13);
        var15 = var13.intl;
        var14 = var15.string;
        var13 = var12[var8];
        var13 = var11.bind(var2)(var13);
        var13 = var13.t;
        var13 = var13["2xL5lu"];
        var13 = var14.bind(var15)(var13);
        var7.children = var13;
        var7 = var10.bind(var2)(var9, var7);
        var0.label = var7;
        var7 = _closure1_slot7;
        var5 = var12[var5];
        var5 = var11.bind(var2)(var5);
        var6 = var5.Text;
        var5 = {
            'variant': 'text-xs/medium',
            'color': 'text-subtle'
        };
        var9 = var12[var8];
        var9 = var11.bind(var2)(var9);
        var10 = var9.intl;
        var9 = var10.string;
        var8 = var12[var8];
        var8 = var11.bind(var2)(var8);
        var8 = var8.t;
        var8 = var8.kgAfXN;
        var8 = var9.bind(var10)(var8);
        var5.children = var8;
        var5 = var7.bind(var2)(var6, var5);
        var0.subLabel = var5;
        var0.onPress = var4;
        var4 = true;
        var0.start = var4;
        var0.end = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var _closure1_slot15 = var0;
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
    var _closure1_slot3 = var3;
    var9 = 1;
    var3 = var5[var9];
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var8.flexGrow = var9;
    var3.list = var8;
    var9 = 32;
    var8 = {
        'paddingVertical': 32,
        'paddingHorizontal': 16
    };
    var3.listContent = var8;
    var8 = {};
    var8.marginTop = var9;
    var3.listFooter = var8;
    var8 = {};
    var9 = 8;
    var8.marginBottom = var9;
    var3.section = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot8 = var3;
    var3 = {};
    var6 = 'VERIFICATION';
    var3.VERIFICATION = var6;
    var6 = 'SECTION';
    var3.SECTION = var6;
    var _closure1_slot9 = var3;
    var3 = 19;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/privacy_and_safety/SettingsSecureFramesVerificationsScreen.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var1 = _closure1_slot8;
        var3 = undefined;
        var10 = var1.bind(var3)();
        var5 = _closure1_slot0;
        var8 = _closure1_slot2;
        var1 = 12;
        var1 = var8[var1];
        var2 = var5.bind(var3)(var1);
        var1 = var2.useSettingNavigationRoute;
        var1 = var1.bind(var2)();
        var1 = var1.params;
        var12 = var1.userId;
        var _closure2_slot0 = var12;
        var1 = 13;
        var1 = var8[var1];
        var2 = var5.bind(var3)(var1);
        var1 = var2.useNavigation;
        var11 = var1.bind(var2)();
        var _closure2_slot1 = var11;
        var1 = 14;
        var1 = var8[var1];
        var6 = var5.bind(var3)(var1);
        var4 = var6.useStateFromStores;
        var1 = _closure1_slot6;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() { // Environment: var0
            var2 = _closure1_slot6;
            var1 = var2.getUser;
            var0 = _closure2_slot0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var6 = var4.bind(var6)(var2, var1);
        var2 = _closure1_slot1;
        var1 = 15;
        var1 = var8[var1];
        var4 = var2.bind(var3)(var1);
        var2 = var4.getFormattedName;
        var1 = false;
        var1 = var2.bind(var4)(var6, var1);
        var _closure2_slot2 = var1;
        var4 = _closure1_slot3;
        var2 = var4.useLayoutEffect;
        var1 = function() { // Environment: var0
            var3 = _closure2_slot1;
            var2 = var3.setOptions;
            var1 = {};
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var5 = 8;
            var6 = var9[var5];
            var0 = undefined;
            var6 = var8.bind(var0)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var5 = var9[var5];
            var5 = var8.bind(var0)(var5);
            var5 = var5.t;
            var5 = var5["5b3FNI"];
            var13 = var6.bind(var7)(var5);
            var11 = _closure2_slot2;
            var4 = global;
            var4 = var4.HermesInternal;
            var7 = var4.concat;
            var14 = '';
            var12 = ' (';
            var10 = ')';
            var4 = var14[var7](var13, var12, var11, var10, var9);
            var1.title = var4;
            var4 = function() {
                var3 = _closure1_slot7;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var0 = 16;
                var0 = var8[var0];
                var2 = undefined;
                var0 = var7.bind(var2)(var0);
                var1 = var0.GenericHeaderTitle;
                var0 = {};
                var4 = 8;
                var5 = var8[var4];
                var5 = var7.bind(var2)(var5);
                var6 = var5.intl;
                var5 = var6.string;
                var4 = var8[var4];
                var4 = var7.bind(var2)(var4);
                var4 = var4.t;
                var4 = var4["5b3FNI"];
                var4 = var5.bind(var6)(var4);
                var0.title = var4;
                var4 = _closure2_slot2;
                var0.subtitle = var4;
                var0 = var3.bind(var2)(var1, var0);
                return var0;
            };
            var1.headerTitle = var4;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var1 = var2.bind(var4)(var1);
        var1 = 17;
        var1 = var8[var1];
        var2 = var5.bind(var3)(var1);
        var1 = var2.useSecureFramesUserVerifiedKeys;
        var6 = var1.bind(var2)(var12);
        var _closure2_slot3 = var6;
        var7 = _closure1_slot3;
        var4 = var7.useMemo;
        var2 = new Array(2);
        var2[0] = var12;
        var2[1] = var6;
        var1 = function() { // Environment: var0
            var0 = new Array(0);
            var _closure3_slot0 = var0;
            var4 = var0.push;
            var2 = {};
            var5 = _closure1_slot9;
            var5 = var5.SECTION;
            var2.type = var5;
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 8;
            var7 = var9[var3];
            var5 = undefined;
            var7 = var6.bind(var5)(var7);
            var8 = var7.intl;
            var7 = var8.formatToPlainString;
            var3 = var9[var3];
            var3 = var6.bind(var5)(var3);
            var3 = var3.t;
            var6 = var3["/MBjYF"];
            var5 = {};
            var3 = _closure2_slot3;
            var9 = var3.length;
            var5.count = var9;
            var5 = var7.bind(var8)(var6, var5);
            var2.title = var5;
            var2 = var4.bind(var0)(var2);
            var2 = var3.forEach;
            var1 = function(arg0, arg1) { // Environment: var1
                var4 = arg1;
                var2 = _closure3_slot0;
                var1 = var2.push;
                var0 = {};
                var3 = _closure1_slot9;
                var3 = var3.VERIFICATION;
                var0.type = var3;
                var3 = arg0;
                var0.verification = var3;
                var5 = 1;
                var3 = var4 + var5;
                var0.index = var3;
                var6 = _closure2_slot0;
                var0.userId = var6;
                var6 = 0;
                var6 = var6 === var4;
                var0.start = var6;
                var3 = _closure2_slot3;
                var3 = var3.length;
                var3 = var3 - var5;
                var3 = var4 === var3;
                var0.end = var3;
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
            };
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var7 = var4.bind(var7)(var1, var2);
        var4 = _closure1_slot3;
        var2 = var4.useEffect;
        var1 = new Array(2);
        var1[0] = var11;
        var1[1] = var6;
        var0 = function() { // Environment: var0
            _fun88774: for (var _fun88774_ip = 0;;) switch (_fun88774_ip) {
                case 0:
                    var1 = _closure2_slot3;
                    var2 = var1.length;
                    var1 = 0;
                    if (!(var1 === var2)) {
                        _fun88774_ip = 32;
                        continue _fun88774
                    }
                case 18:
                    var1 = _closure2_slot1;
                    var0 = var1.pop;
                    var0 = var0.bind(var1)();
                case 32:
                    var0 = undefined;
                    return var0;
            }
        };
        var0 = var2.bind(var4)(var0, var1);
        var2 = _closure1_slot7;
        var1 = _closure1_slot4;
        var0 = {};
        var4 = var10.list;
        var0.style = var4;
        var6 = _closure1_slot7;
        var4 = 18;
        var4 = var8[var4];
        var4 = var5.bind(var3)(var4);
        var5 = var4.FlashList;
        var4 = {};
        var8 = _closure1_slot14;
        var4.keyExtractor = var8;
        var8 = _closure1_slot13;
        var4.getItemType = var8;
        var8 = _closure1_slot12;
        var4.renderItem = var8;
        var4.data = var7;
        var7 = _closure1_slot5;
        var4.estimatedItemSize = var7;
        var7 = var10.listContent;
        var4.contentContainerStyle = var7;
        var8 = _closure1_slot7;
        var7 = {};
        var10 = var10.listFooter;
        var7.style = var10;
        var11 = _closure1_slot7;
        var10 = _closure1_slot15;
        var9 = {};
        var9.userId = var12;
        var9 = var11.bind(var3)(var10, var9);
        var7.children = var9;
        var7 = var8.bind(var3)(var1, var7);
        var4.ListFooterComponent = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 4873, 1621, 33, 1297, 8290, 4901, 1234, 4905, 4735, 3943, 7576, 1469, 566, 3238, 8928, 11526, 5761, 2]);