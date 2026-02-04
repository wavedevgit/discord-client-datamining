// modules/quests/native/QuestBottomSheet/QuestBottomSheetConsoleConnect.tsx
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
        var0 = arg0;
        var6 = var0.consoles;
        var0 = var0.onConsoleSelect;
        var _closure2_slot0 = var0;
        var3 = _closure1_slot6;
        var1 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 16;
        var0 = var2[var0];
        var2 = undefined;
        var0 = var1.bind(var2)(var0);
        var1 = var0.TableRowGroup;
        var0 = {};
        var5 = var6.map;
        var4 = function(arg0) { // Environment: var4
            var0 = arg0;
            var4 = _closure1_slot6;
            var3 = _closure1_slot8;
            var2 = {};
            var8 = var2;
            var7 = var0;
            var1 = copyDataProperties(var8, var7);
            var5 = _closure2_slot0;
            var1 = 'onPress';
            var2[var1] = var5;
            var1 = var0.type;
            var0 = undefined;
            var0 = var4.bind(var0)(var3, var2, var1);
            return var0;
        };
        var4 = var5.bind(var6)(var4);
        var0.children = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var _closure1_slot7 = var0;
    var0 = function arg0() {
        _fun84158: for (var _fun84158_ip = 0;;) switch (_fun84158_ip) {
            case 0:
                var2 = arg0;
                var0 = var2.onPress;
                var _closure2_slot0 = var0;
                var7 = null;
                var1 = Object.create(var7);
                var0 = 0;
                var1.onPress = var0;
                var16 = {};
                var15 = var2;
                var14 = var1;
                var5 = copyDataProperties(var16, var15, var14);
                var _closure2_slot1 = var5;
                var1 = var5.type;
                var0 = _closure1_slot4;
                var0 = var0.PLAYSTATION;
                if (!(var0 !== var1)) {
                    _fun84158_ip = 299;
                    continue _fun84158
                }
            case 66:
                var0 = _closure1_slot4;
                var0 = var0.XBOX;
                if (!(var0 !== var1)) {
                    _fun84158_ip = 82;
                    continue _fun84158
                }
            case 80:
                return var7;
            case 82:
                var3 = _closure1_slot6;
                var11 = _closure1_slot0;
                var8 = _closure1_slot2;
                var0 = 17;
                var0 = var8[var0];
                var2 = undefined;
                var0 = var11.bind(var2)(var0);
                var1 = var0.TableRow;
                var0 = {};
                var9 = true;
                var0.arrow = var9;
                var12 = _closure1_slot6;
                var9 = 20;
                var9 = var8[var9];
                var9 = var11.bind(var2)(var9);
                var10 = var9.XboxNeutralIcon;
                var9 = {};
                var9 = var12.bind(var2)(var10, var9);
                var0.icon = var9;
                var13 = 19;
                var9 = var8[var13];
                var9 = var11.bind(var2)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var8 = var8[var13];
                var8 = var11.bind(var2)(var8);
                var8 = var8.t;
                var8 = var8.Nfvo72;
                var8 = var9.bind(var10)(var8);
                var0.label = var8;
                var8 = var5.account;
                var9 = var7 != var8;
                var8 = undefined;
                if (!var9) {
                    _fun84158_ip = 275;
                    continue _fun84158
                }
            case 223:
                var12 = _closure1_slot0;
                var9 = _closure1_slot2;
                var10 = var9[var13];
                var10 = var12.bind(var2)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var9 = var9[var13];
                var9 = var12.bind(var2)(var9);
                var9 = var9.t;
                var9 = var9["u30/ut"];
                var8 = var10.bind(var11)(var9);
            case 275:
                var0.subLabel = var8;
                var8 = function() {
                    var2 = _closure2_slot0;
                    var1 = _closure2_slot1;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var0.onPress = var8;
                var0 = var3.bind(var2)(var1, var0);
                return var0;
            case 299:
                var3 = _closure1_slot6;
                var12 = _closure1_slot0;
                var8 = _closure1_slot2;
                var0 = 17;
                var0 = var8[var0];
                var2 = undefined;
                var0 = var12.bind(var2)(var0);
                var1 = var0.TableRow;
                var0 = {};
                var9 = true;
                var0.arrow = var9;
                var11 = _closure1_slot6;
                var9 = 18;
                var9 = var8[var9];
                var9 = var12.bind(var2)(var9);
                var10 = var9.PlaystationNeutralIcon;
                var9 = {};
                var9 = var11.bind(var2)(var10, var9);
                var0.icon = var9;
                var10 = 19;
                var9 = var8[var10];
                var9 = var12.bind(var2)(var9);
                var11 = var9.intl;
                var9 = var11.string;
                var8 = var8[var10];
                var8 = var12.bind(var2)(var8);
                var8 = var8.t;
                var8 = var8.JafL6p;
                var8 = var9.bind(var11)(var8);
                var0.label = var8;
                var5 = var5.account;
                var7 = var7 != var5;
                var5 = undefined;
                if (!var7) {
                    _fun84158_ip = 494;
                    continue _fun84158
                }
            case 442:
                var9 = _closure1_slot0;
                var6 = _closure1_slot2;
                var7 = var6[var10];
                var7 = var9.bind(var2)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var6 = var6[var10];
                var6 = var9.bind(var2)(var6);
                var6 = var6.t;
                var6 = var6["u30/ut"];
                var5 = var7.bind(var8)(var6);
            case 494:
                var0.subLabel = var5;
                var4 = function() {
                    var2 = _closure2_slot0;
                    var1 = _closure2_slot1;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var0.onPress = var4;
                var0 = var3.bind(var2)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot8 = var0;
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
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.PlatformTypes;
    var _closure1_slot4 = var6;
    var3 = var3.UserSettingsSections;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot6 = var6;
    var6 = var3.jsxs;
    var3 = var3.Fragment;
    var9 = 4;
    var3 = var5[var9];
    var3 = var10.bind(var0)(var3);
    var3 = var3.unsafe_rawColors;
    var3 = var3.XBOX;
    var3 = var5[var9];
    var3 = var10.bind(var0)(var3);
    var3 = var3.unsafe_rawColors;
    var3 = var3.PLAYSTATION;
    var3 = 5;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'display': 'flex',
        'flexDirection': 'row',
        'gap': null,
        'justifyContent': 'space-between'
    };
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_16;
    var8.gap = var9;
    var3.platformButtonsContainer = var8;
    var8 = {
        'flex': 1,
        'display': 'flex',
        'justifyContent': 'center',
        'alignItems': 'center'
    };
    var3.platformButton = var8;
    var3 = var6.bind(var7)(var3);
    var3 = 21;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/quests/native/QuestBottomSheet/QuestBottomSheetConsoleConnect.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var0 = arg0;
        var7 = var0.quest;
        var _closure2_slot0 = var7;
        var1 = var0.step;
        var _closure2_slot1 = var1;
        var0 = var0.sourceQuestContent;
        var _closure2_slot2 = var0;
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 6;
        var1 = var6[var1];
        var3 = undefined;
        var2 = var5.bind(var3)(var1);
        var1 = var2.useConnectedAccounts;
        var1 = var1.bind(var2)();
        var1 = var1.xboxAndPlaystationAccounts;
        var _closure2_slot3 = var1;
        var2 = 7;
        var2 = var6[var2];
        var5 = var5.bind(var3)(var2);
        var2 = var5.useTrackQuestContentClickedWithImpression;
        var2 = var2.bind(var5)();
        var _closure2_slot4 = var2;
        var6 = _closure1_slot3;
        var5 = var6.useMemo;
        var2 = new Array(2);
        var2[0] = var7;
        var2[1] = var1;
        var1 = function() { // Environment: var4
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 8;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.supportedConsoles;
            var0 = _closure2_slot0;
            var2 = var1.bind(var2)(var0);
            var1 = var2.map;
            var0 = function(arg0) { // Environment: var0
                var2 = arg0;
                var _closure4_slot0 = var2;
                var0 = {};
                var0.type = var2;
                var3 = _closure2_slot3;
                var2 = var3.find;
                var1 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var1 = var0.type;
                    var0 = _closure4_slot0;
                    var0 = var1 === var0;
                    return var0;
                };
                var1 = var2.bind(var3)(var1);
                var0.account = var1;
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var5 = var5.bind(var6)(var1, var2);
        var1 = function() {
            var4 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 9;
            var3 = var1[var0];
            var0 = undefined;
            var5 = var4.bind(var0)(var3);
            var4 = var5.openLazy;
            var3 = _closure1_slot0;
            var2 = 12;
            var2 = var1[var2];
            var3 = var3.bind(var0)(var2);
            var2 = 11;
            var2 = var1[var2];
            var1 = var1.paths;
            var3 = var3.bind(var0)(var2, var1);
            var2 = {};
            var6 = _closure2_slot0;
            var6 = var6.id;
            var2.questId = var6;
            var6 = _closure2_slot1;
            var2.initialStep = var6;
            var1 = _closure2_slot2;
            var2.sourceQuestContent = var1;
            var1 = 'QuestBottomSheet';
            var1 = var4.bind(var5)(var3, var1, var2);
            return var0;
        };
        var _closure2_slot5 = var1;
        var2 = _closure1_slot6;
        var1 = _closure1_slot7;
        var0 = {};
        var0.consoles = var5;
        var4 = function arg0() {
            _fun84166: for (var _fun84166_ip = 0;;) switch (_fun84166_ip) {
                case 0:
                    var4 = arg0;
                    var1 = var4.account;
                    var0 = null;
                    if (!(var0 == var1)) {
                        _fun84166_ip = 178;
                        continue _fun84166
                    }
                case 18:
                    var6 = _closure2_slot4;
                    var2 = {};
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var2.questId = var0;
                    var8 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var0 = 13;
                    var7 = var5[var0];
                    var0 = undefined;
                    var7 = var8.bind(var0)(var7);
                    var7 = var7.QuestContent;
                    var7 = var7.QUEST_BOTTOM_SHEET;
                    var2.questContent = var7;
                    var7 = 14;
                    var7 = var5[var7];
                    var7 = var8.bind(var0)(var7);
                    var7 = var7.QuestContentCTA;
                    var7 = var7.CONNECT_CONSOLE;
                    var2.questContentCTA = var7;
                    var7 = _closure2_slot2;
                    var2.sourceQuestContent = var7;
                    var2 = var6.bind(var0)(var2);
                    var2 = _closure1_slot1;
                    var1 = 15;
                    var1 = var5[var1];
                    var2 = var2.bind(var0)(var1);
                    var1 = {};
                    var4 = var4.type;
                    var1.platformType = var4;
                    var4 = 'quests';
                    var1.location = var4;
                    var3 = _closure2_slot5;
                    var1.onClose = var3;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                case 178:
                    var5 = _closure2_slot4;
                    var0 = {};
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var0.questId = var1;
                    var2 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 13;
                    var7 = var4[var1];
                    var1 = undefined;
                    var7 = var2.bind(var1)(var7);
                    var7 = var7.QuestContent;
                    var7 = var7.QUEST_BOTTOM_SHEET;
                    var0.questContent = var7;
                    var7 = 14;
                    var7 = var4[var7];
                    var7 = var2.bind(var1)(var7);
                    var7 = var7.QuestContentCTA;
                    var7 = var7.VIEW_CONSOLE_CONNECTIONS;
                    var0.questContentCTA = var7;
                    var6 = _closure2_slot2;
                    var0.sourceQuestContent = var6;
                    var0 = var5.bind(var1)(var0);
                    var5 = _closure1_slot1;
                    var0 = 9;
                    var0 = var4[var0];
                    var5 = var5.bind(var1)(var0);
                    var0 = var5.hideActionSheet;
                    var0 = var0.bind(var5)();
                    var0 = 10;
                    var0 = var4[var0];
                    var2 = var2.bind(var1)(var0);
                    var1 = var2.openUserSettings;
                    var0 = {};
                    var3 = _closure1_slot5;
                    var3 = var3.CONNECTIONS;
                    var0.screen = var3;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
            }
        };
        var0.onConsoleSelect = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 660, 33, 671, 1297, 5313, 5303, 5317, 3278, 5922, 10715, 1307, 5230, 5277, 5318, 5363, 4898, 10770, 1234, 10771, 2]);