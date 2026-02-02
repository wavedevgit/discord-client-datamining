// modules/user_settings/native/appearance/SettingsAppearanceScreen.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var3 = 1;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.DEFAULT_FONT_SCALE_STORE_STATE;
    var _closure1_slot5 = var7;
    var3 = var3.useFontScaleStore;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.MobileSetting;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot8 = var3;
    var3 = var6.memo;
    var1 = function() { // Environment: var1
        var1 = _closure1_slot1;
        var5 = _closure1_slot2;
        var3 = 11;
        var4 = var5[var3];
        var3 = undefined;
        var6 = var1.bind(var3)(var4);
        var4 = function() { // Environment: var2
            _fun84437: for (var _fun84437_ip = 0;;) switch (_fun84437_ip) {
                case 0:
                    var3 = _closure1_slot4;
                    var2 = var3.shouldSync;
                    var1 = 'appearance';
                    var1 = var2.bind(var3)(var1);
                    if (!var1) {
                        _fun84437_ip = 57;
                        continue _fun84437
                    }
                case 25:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 12;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var0 = var1.fetchUserCustomThemes;
                    var0 = var0.bind(var1)();
                case 57:
                    var0 = undefined;
                    return var0;
            }
        };
        var4 = var6.bind(var3)(var4);
        var4 = function() {
            var2 = _closure1_slot6;
            var0 = undefined;
            var2 = var2.bind(var0)();
            var _closure3_slot0 = var2;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var4 = 5;
            var4 = var6[var4];
            var5 = var5.bind(var0)(var4);
            var4 = var5.useNativeStackNavigation;
            var6 = var4.bind(var5)();
            var _closure3_slot1 = var6;
            var4 = _closure1_slot3;
            var5 = var4.useEffect;
            var3 = new Array(5);
            var3[0] = var6;
            var6 = var2.fontScale;
            var3[1] = var6;
            var6 = var2.isClassicChatFontScaleEnabled;
            var3[2] = var6;
            var6 = var2.persistedFontScale;
            var3[3] = var6;
            var2 = var2.persistedIsClassicChatFontScaleEnabled;
            var3[4] = var2;
            var2 = function() { // Environment: var1
                _fun84439: for (var _fun84439_ip = 0;;) switch (_fun84439_ip) {
                    case 0:
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 6;
                        var1 = var1[var0];
                        var0 = undefined;
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.isAndroid;
                        var1 = var1.bind(var2)();
                        if (!var1) {
                            _fun84439_ip = 218;
                            continue _fun84439
                        }
                    case 41:
                        var2 = _closure3_slot0;
                        var3 = var2.persistedFontScale;
                        var2 = var2.fontScale;
                        if (!(var3 === var2)) {
                            _fun84439_ip = 108;
                            continue _fun84439
                        }
                    case 64:
                        var2 = _closure3_slot0;
                        var3 = var2.persistedIsClassicChatFontScaleEnabled;
                        var2 = var2.isClassicChatFontScaleEnabled;
                        if (!(var3 === var2)) {
                            _fun84439_ip = 108;
                            continue _fun84439
                        }
                    case 84:
                        var5 = _closure3_slot1;
                        var3 = var5.setOptions;
                        var2 = {};
                        var2.headerRight = var0;
                        var2 = var3.bind(var5)(var2);
                        _fun84439_ip = 218;
                        continue _fun84439;
                    case 108:
                        var3 = _closure3_slot1;
                        var2 = var3.setOptions;
                        var1 = {};
                        var9 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var4 = 7;
                        var4 = var10[var4];
                        var7 = var9.bind(var0)(var4);
                        var6 = var7.getRenderHeaderTextButton;
                        var4 = 8;
                        var5 = var10[var4];
                        var5 = var9.bind(var0)(var5);
                        var8 = var5.intl;
                        var5 = var8.string;
                        var4 = var10[var4];
                        var4 = var9.bind(var0)(var4);
                        var4 = var4.t;
                        var4 = var4["R3BPH+"];
                        var5 = var5.bind(var8)(var4);
                        var4 = function() { // Environment: var4
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 9;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.setCustomFontScale;
                            var0 = _closure3_slot0;
                            var1 = var0.fontScale;
                            var0 = var0.isClassicChatFontScaleEnabled;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                        };
                        var4 = var6.bind(var7)(var5, var4);
                        var1.headerRight = var4;
                        var1 = var2.bind(var3)(var1);
                    case 218:
                        return var0;
                }
            };
            var2 = var5.bind(var4)(var2, var3);
            var3 = var4.useEffect;
            var2 = function() { // Environment: var1
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 10;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.batchUpdates;
                    var1 = function() { // Environment: var1
                        var2 = _closure1_slot6;
                        var1 = var2.setState;
                        var0 = _closure1_slot5;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                return var0;
            };
            var1 = new Array(0);
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var4 = var4.bind(var3)();
        var7 = _closure1_slot3;
        var6 = var7.useMemo;
        var4 = function() { // Environment: var2
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var0 = 13;
            var0 = var11[var0];
            var9 = undefined;
            var2 = var10.bind(var9)(var0);
            var1 = var2.createList;
            var0 = {};
            var4 = {};
            var6 = 8;
            var5 = var11[var6];
            var5 = var10.bind(var9)(var5);
            var8 = var5.intl;
            var7 = var8.string;
            var5 = var11[var6];
            var5 = var10.bind(var9)(var5);
            var5 = var5.t;
            var5 = var5.Ksh3ik;
            var5 = var7.bind(var8)(var5);
            var4.label = var5;
            var5 = _closure1_slot7;
            var7 = var5.APPEARANCE_THEME_PICKER;
            var3 = new Array(2);
            var3[0] = var7;
            var7 = var5.SYNC_THEME;
            var3[1] = var7;
            var4.settings = var3;
            var3 = new Array(6);
            var3[0] = var4;
            var4 = {};
            var7 = var11[var6];
            var7 = var10.bind(var9)(var7);
            var12 = var7.intl;
            var8 = var12.string;
            var7 = var11[var6];
            var7 = var10.bind(var9)(var7);
            var7 = var7.t;
            var7 = var7.i19n5L;
            var7 = var8.bind(var12)(var7);
            var4.label = var7;
            var8 = var5.ANDROID_FONT_SCALE;
            var7 = new Array(2);
            var7[0] = var8;
            var8 = var5.ANDROID_CLASSIC_CHAT_FONT_SCALE;
            var7[1] = var8;
            var4.settings = var7;
            var3[1] = var4;
            var4 = {};
            var8 = var5.DMS_MESSAGE_PREVIEWS;
            var7 = new Array(1);
            var7[0] = var8;
            var4.settings = var7;
            var3[2] = var4;
            var4 = {};
            var7 = var11[var6];
            var7 = var10.bind(var9)(var7);
            var12 = var7.intl;
            var8 = var12.string;
            var7 = var11[var6];
            var7 = var10.bind(var9)(var7);
            var7 = var7.t;
            var7 = var7.lEde7i;
            var7 = var8.bind(var12)(var7);
            var4.label = var7;
            var8 = var5.DMS_HAPPENING_NOW_CARDS;
            var7 = new Array(1);
            var7[0] = var8;
            var4.settings = var7;
            var3[3] = var4;
            var4 = {};
            var7 = var11[var6];
            var7 = var10.bind(var9)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var6 = var11[var6];
            var6 = var10.bind(var9)(var6);
            var6 = var6.t;
            var6 = var6["5h0QOP"];
            var6 = var7.bind(var8)(var6);
            var4.label = var6;
            var7 = var5.EXACT_SEARCH_RESULT_COUNTS;
            var6 = new Array(1);
            var6[0] = var7;
            var4.settings = var6;
            var3[4] = var4;
            var4 = {};
            var6 = var5.TIMESTAMP_HOUR_CYCLE;
            var5 = new Array(1);
            var5[0] = var6;
            var4.settings = var5;
            var3[5] = var4;
            var0.sections = var3;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var2 = new Array(0);
        var4 = var6.bind(var7)(var4, var2);
        var2 = _closure1_slot8;
        var0 = 14;
        var0 = var5[var0];
        var1 = var1.bind(var3)(var0);
        var0 = {};
        var0.node = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var1 = var3.bind(var6)(var1);
    var3 = 15;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/appearance/SettingsAppearanceScreen.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1354, 4052, 6969, 33, 1469, 478, 8850, 1234, 4053, 802, 4064, 10768, 8945, 10092, 2]);