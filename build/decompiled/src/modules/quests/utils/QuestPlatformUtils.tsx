// modules/quests/utils/QuestPlatformUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var7;
    var4 = function arg0() {
        _fun47560: for (var _fun47560_ip = 0;;) switch (_fun47560_ip) {
            case 0:
                var0 = new Array(0);
                var1 = global;
                var3 = var1.Object;
                var2 = var3.keys;
                var1 = arg0;
                var1 = var1.config;
                var1 = var1.taskConfigV2;
                var1 = var1.tasks;
                var6 = var2.bind(var3)(var1);
                var1 = var6.length;
                var5 = 0;
                var1 = var5 < var1;
                var3 = 3;
                var2 = undefined;
                if (!var1) {
                    _fun47560_ip = 191;
                    continue _fun47560
                }
            case 67:
                var7 = var6[var5];
                var8 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var3];
                var1 = var8.bind(var2)(var1);
                var1 = var1.FirstPartyQuestTaskTypes;
                var1 = var1.PLAY_ON_XBOX;
                if (!(var1 !== var7)) {
                    _fun47560_ip = 159;
                    continue _fun47560
                }
            case 104:
                var8 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var3];
                var1 = var8.bind(var2)(var1);
                var1 = var1.FirstPartyQuestTaskTypes;
                var1 = var1.PLAY_ON_PLAYSTATION;
                if (!(var1 === var7)) {
                    _fun47560_ip = 179;
                    continue _fun47560
                }
            case 137:
                var7 = var0.push;
                var1 = _closure1_slot5;
                var1 = var1.PLAYSTATION;
                var1 = var7.bind(var0)(var1);
                _fun47560_ip = 179;
                continue _fun47560;
            case 159:
                var7 = var0.push;
                var1 = _closure1_slot5;
                var1 = var1.XBOX;
                var1 = var7.bind(var0)(var1);
            case 179:
                var5 = var5 + 1;
                var1 = var6.length;
                if (var5 < var1) {
                    _fun47560_ip = 67;
                    continue _fun47560
                }
            case 191:
                return var0;
        }
    };
    var _closure1_slot7 = var4;
    var3 = function arg0() {
        _fun47561: for (var _fun47561_ip = 0;;) switch (_fun47561_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.connected_account_type;
                var0 = 'xbox';
                if (!(var0 !== var1)) {
                    _fun47561_ip = 32;
                    continue _fun47561
                }
            case 17:
                var0 = _closure1_slot5;
                var0 = var0.PLAYSTATION;
                _fun47561_ip = 45;
                continue _fun47561;
            case 32:
                var1 = _closure1_slot5;
                var0 = var1.XBOX;
            case 45:
                return var0;
        }
    };
    var _closure1_slot8 = var3;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var5);
    var0 = 0;
    var5 = var7[var0];
    var0 = undefined;
    var5 = var6.bind(var0)(var5);
    var5 = var5.QuestTaskPlatform;
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var8 = var5.ComponentActions;
    var _closure1_slot4 = var8;
    var8 = var5.PlatformTypes;
    var _closure1_slot5 = var8;
    var5 = var5.UserSettingsSections;
    var _closure1_slot6 = var5;
    var5 = 13;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/quests/utils/QuestPlatformUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function arg0() {
        _fun47562: for (var _fun47562_ip = 0;;) switch (_fun47562_ip) {
            case 0:
                var4 = arg0;
                var2 = _closure1_slot0;
                var0 = _closure1_slot2;
                var6 = 2;
                var0 = var0[var6];
                var5 = undefined;
                var3 = var2.bind(var5)(var0);
                var2 = var3.hasPlayOnDesktopTask;
                var0 = {};
                var0.quest = var4;
                var3 = var2.bind(var3)(var0);
                if (var3) {
                    _fun47562_ip = 84;
                    continue _fun47562
                }
            case 49:
                var2 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var6];
                var7 = var2.bind(var5)(var0);
                var2 = var7.hasStreamOnDesktopTask;
                var0 = {};
                var0.quest = var4;
                var3 = var2.bind(var7)(var0);
            case 84:
                var2 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var6];
                var2 = var2.bind(var5)(var0);
                var0 = var2.hasSomeConsoleTasks;
                var2 = var0.bind(var2)(var4);
                var0 = new Array(0);
                if (!var3) {
                    _fun47562_ip = 139;
                    continue _fun47562
                }
            case 119:
                var4 = var0.push;
                var3 = _closure1_slot3;
                var3 = var3.DESKTOP;
                var3 = var4.bind(var0)(var3);
            case 139:
                if (!var2) {
                    _fun47562_ip = 162;
                    continue _fun47562
                }
            case 142:
                var2 = var0.push;
                var1 = _closure1_slot3;
                var1 = var1.CONSOLE;
                var1 = var2.bind(var0)(var1);
            case 162:
                return var0;
        }
    };
    var2.supportedTaskPlatforms = var5;
    var2.supportedConsoles = var4;
    var4 = function arg0() {
        _fun47563: for (var _fun47563_ip = 0;;) switch (_fun47563_ip) {
            case 0:
                var3 = arg0;
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 2;
                var0 = var5[var1];
                var2 = undefined;
                var6 = var4.bind(var2)(var0);
                var0 = var6.hasWatchVideoTasks;
                var0 = var0.bind(var6)(var3);
                var1 = var5[var1];
                var2 = var4.bind(var2)(var1);
                var1 = var2.hasPlayActivityTask;
                var1 = var1.bind(var2)(var3);
                if (var0) {
                    _fun47563_ip = 65;
                    continue _fun47563
                }
            case 62:
                var0 = var1;
            case 65:
                return var0;
        }
    };
    var2.isQuestSupportedOnWeb = var4;
    var2.getPlatformTypeForHintMessage = var3;
    var3 = function arg0, arg1() {
        var0 = arg0;
        var3 = arg1;
        var4 = var0.platformType;
        var8 = var0.quest;
        var6 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 4;
        var2 = var5[var0];
        var0 = undefined;
        var7 = var6.bind(var0)(var2);
        var6 = var7.trackQuestContentClicked;
        var2 = {};
        var8 = var8.id;
        var2.questId = var8;
        var8 = var3.content;
        var2.questContent = var8;
        var8 = var3.sourceQuestContent;
        var2.sourceQuestContent = var8;
        var8 = var3.ctaContent;
        var2.questContentCTA = var8;
        var8 = var3.impressionId;
        var2.impressionId = var8;
        var2 = var6.bind(var7)(var2);
        var2 = _closure1_slot1;
        var1 = 5;
        var1 = var5[var1];
        var2 = var2.bind(var0)(var1);
        var1 = {};
        var1.platformType = var4;
        var3 = var3.ctaContent;
        var1.location = var3;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var2.openAuthorizationConnectionModal = var3;
    var3 = function arg0() {
        _fun47565: for (var _fun47565_ip = 0;;) switch (_fun47565_ip) {
            case 0:
                var2 = _closure1_slot8;
                var3 = undefined;
                var0 = arg0;
                var2 = var2.bind(var3)(var0);
                var0 = _closure1_slot5;
                var0 = var0.XBOX;
                if (!(var2 !== var0)) {
                    _fun47565_ip = 66;
                    continue _fun47565
                }
            case 31:
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 6;
                var0 = var4[var0];
                var0 = var2.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0.iDiwby;
                _fun47565_ip = 99;
                continue _fun47565;
            case 66:
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 6;
                var1 = var4[var1];
                var1 = var2.bind(var3)(var1);
                var1 = var1.t;
                var0 = var1["mytEv+"];
            case 99:
                return var0;
        }
    };
    var2.getExpiredCredentialsHintMessage = var3;
    var3 = function arg0, arg1() {
        _fun47566: for (var _fun47566_ip = 0;;) switch (_fun47566_ip) {
            case 0:
                var9 = arg0;
                var8 = arg1;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 8;
                var2 = var2[var0];
                var0 = undefined;
                var4 = var3.bind(var0)(var2);
                var3 = var4.getCtaLink;
                var2 = var9.config;
                var2 = var3.bind(var4)(var2);
                var3 = var9.config;
                var7 = var3.ctaConfig;
                var4 = null;
                var5 = var4 == var7;
                var3 = null;
                if (var5) {
                    _fun47566_ip = 345;
                    continue _fun47566
                }
            case 72:
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var11 = 7;
                var5 = var5[var11];
                var6 = var6.bind(var0)(var5);
                var5 = var6.isIOS;
                var5 = var5.bind(var6)();
                if (var5) {
                    _fun47566_ip = 140;
                    continue _fun47566
                }
            case 105:
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var11];
                var6 = var6.bind(var0)(var5);
                var5 = var6.getOS;
                var6 = var5.bind(var6)();
                var5 = 'ios';
                if (!(var5 === var6)) {
                    _fun47566_ip = 206;
                    continue _fun47566
                }
            case 140:
                var6 = var7.ios;
                var10 = var4 == var6;
                var5 = undefined;
                if (var10) {
                    _fun47566_ip = 161;
                    continue _fun47566
                }
            case 155:
                var5 = var6.iosAppId;
            case 161:
                if (!(var4 != var5)) {
                    _fun47566_ip = 206;
                    continue _fun47566
                }
            case 165:
                var5 = var7.ios;
                var10 = var5.iosAppId;
                var5 = global;
                var5 = var5.HermesInternal;
                var6 = var5.concat;
                var5 = 'https://apps.apple.com/app/id';
                var5 = var6.bind(var5)(var10);
                _fun47566_ip = 342;
                continue _fun47566;
            case 206:
                var10 = _closure1_slot0;
                var6 = _closure1_slot2;
                var6 = var6[var11];
                var10 = var10.bind(var0)(var6);
                var6 = var10.isAndroid;
                var6 = var6.bind(var10)();
                if (var6) {
                    _fun47566_ip = 273;
                    continue _fun47566
                }
            case 236:
                var10 = _closure1_slot0;
                var6 = _closure1_slot2;
                var6 = var6[var11];
                var10 = var10.bind(var0)(var6);
                var6 = var10.getOS;
                var11 = var6.bind(var10)();
                var10 = 'android';
                var6 = null;
                if (!(var10 === var11)) {
                    _fun47566_ip = 339;
                    continue _fun47566
                }
            case 273:
                var11 = var7.android;
                var12 = var4 == var11;
                var10 = undefined;
                if (var12) {
                    _fun47566_ip = 294;
                    continue _fun47566
                }
            case 288:
                var10 = var11.androidAppId;
            case 294:
                var10 = var4 == var10;
                var6 = null;
                if (var10) {
                    _fun47566_ip = 339;
                    continue _fun47566
                }
            case 303:
                var7 = var7.android;
                var11 = var7.androidAppId;
                var7 = global;
                var7 = var7.HermesInternal;
                var10 = var7.concat;
                var7 = 'https://play.google.com/store/apps/details?id=';
                var6 = var10.bind(var7)(var11);
            case 339:
                var5 = var6;
            case 342:
                var3 = var5;
            case 345:
                if (!(var4 != var3)) {
                    _fun47566_ip = 352;
                    continue _fun47566
                }
            case 349:
                var2 = var3;
            case 352:
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 4;
                var3 = var4[var3];
                var7 = var5.bind(var0)(var3);
                var6 = var7.trackQuestContentClicked;
                var3 = {};
                var9 = var9.id;
                var3.questId = var9;
                var9 = var8.content;
                var3.questContent = var9;
                var9 = var8.ctaContent;
                var3.questContentCTA = var9;
                var9 = var8.position;
                var3.questContentPosition = var9;
                var9 = var8.impressionId;
                var3.impressionId = var9;
                var8 = var8.sourceQuestContent;
                var3.sourceQuestContent = var8;
                var3 = var6.bind(var7)(var3);
                var3 = 9;
                var3 = var4[var3];
                var3 = var5.bind(var0)(var3);
                var6 = var3.ComponentDispatch;
                var5 = var6.dispatch;
                var3 = _closure1_slot4;
                var3 = var3.QUEST_GAME_LINK_OPENED;
                var3 = var5.bind(var6)(var3);
                var3 = _closure1_slot1;
                var1 = 10;
                var1 = var4[var1];
                var1 = var3.bind(var0)(var1);
                var1 = var1.bind(var0)(var2);
                return var0;
        }
    };
    var2.openGameLinkDirectly = var3;
    var3 = function arg0, arg1() {
        var7 = arg1;
        var0 = arg0;
        var8 = var0.quest;
        var2 = _closure1_slot0;
        var4 = _closure1_slot2;
        var0 = 4;
        var1 = var4[var0];
        var0 = undefined;
        var6 = var2.bind(var0)(var1);
        var5 = var6.trackQuestContentClicked;
        var1 = {};
        var8 = var8.id;
        var1.questId = var8;
        var8 = var7.content;
        var1.questContent = var8;
        var8 = var7.position;
        var1.questContentPosition = var8;
        var8 = var7.ctaContent;
        var1.questContentCTA = var8;
        var8 = var7.impressionId;
        var1.impressionId = var8;
        var7 = var7.sourceQuestContent;
        var1.sourceQuestContent = var7;
        var1 = var5.bind(var6)(var1);
        var1 = 11;
        var1 = var4[var1];
        var1 = var2.bind(var0)(var1);
        var2 = var1.openUserSettings;
        var1 = {};
        var3 = _closure1_slot6;
        var3 = var3.CONNECTIONS;
        var1.screen = var3;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var2.openConsoleConnectionSettings = var3;
    var1 = function arg0, arg1() {
        _fun47568: for (var _fun47568_ip = 0;;) switch (_fun47568_ip) {
            case 0:
                var6 = arg1;
                var0 = arg0;
                var3 = var0.quest;
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 4;
                var1 = var2[var1];
                var2 = undefined;
                var5 = var4.bind(var2)(var1);
                var4 = var5.trackQuestContentClicked;
                var1 = {};
                var7 = var3.id;
                var1.questId = var7;
                var7 = var6.content;
                var1.questContent = var7;
                var7 = var6.position;
                var1.questContentPosition = var7;
                var7 = var6.rowIndex;
                var1.questContentRowIndex = var7;
                var7 = var6.ctaContent;
                var1.questContentCTA = var7;
                var7 = var6.impressionId;
                var1.impressionId = var7;
                var6 = var6.sourceQuestContent;
                var1.sourceQuestContent = var6;
                var1 = var4.bind(var5)(var1);
                var1 = _closure1_slot7;
                var5 = var1.bind(var2)(var3);
                var3 = var5.length;
                var1 = 1;
                if (!(var1 !== var3)) {
                    _fun47568_ip = 239;
                    continue _fun47568
                }
            case 145:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 12;
                var1 = var4[var1];
                var4 = var3.bind(var2)(var1);
                var3 = var4.dispatch;
                var1 = {};
                var6 = 'CONNECTIONS_GRID_MODAL_SHOW';
                var1.type = var6;
                var6 = function arg0() {
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 5;
                    var0 = var2[var0];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = {};
                    var3 = arg0;
                    var0.platformType = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1.onComplete = var6;
                var6 = global;
                var6 = var6.Set;
                var7 = var6.prototype;
                var7 = Object.create(var7, {
                    constructor: {
                        value: var6
                    }
                });
                var9 = var7;
                var8 = var5;
                var6 = new var9[var6](var8, var7);
                var6 = var6 instanceof Object ? var6 : var7;
                var1.includedPlatformTypes = var6;
                var1 = var3.bind(var4)(var1);
                return var2;
            case 239:
                var1 = _closure1_slot1;
                var3 = _closure1_slot2;
                var0 = 5;
                var0 = var3[var0];
                var1 = var1.bind(var2)(var0);
                var0 = {};
                var4 = var5.at;
                var3 = 0;
                var3 = var4.bind(var5)(var3);
                var0.platformType = var3;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.openAddConsoleConnectionModal = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5223, 660, 5262, 5229, 5256, 5313, 1234, 478, 5285, 1229, 3129, 5917, 806, 2]);