// actions/UserSettingsActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var6;
    var0 = function arg0() {
        _fun61626: for (var _fun61626_ip = 0;;) switch (_fun61626_ip) {
            case 0:
                var2 = arg0;
                var1 = _closure1_slot6;
                var1 = var1.DARK;
                if (!(var1 !== var2)) {
                    _fun61626_ip = 212;
                    continue _fun61626
                }
            case 23:
                var1 = _closure1_slot6;
                var1 = var1.LIGHT;
                if (!(var1 !== var2)) {
                    _fun61626_ip = 176;
                    continue _fun61626
                }
            case 40:
                var1 = _closure1_slot6;
                var1 = var1.DARKER;
                if (!(var1 !== var2)) {
                    _fun61626_ip = 140;
                    continue _fun61626
                }
            case 54:
                var1 = _closure1_slot6;
                var1 = var1.MIDNIGHT;
                if (!(var1 !== var2)) {
                    _fun61626_ip = 104;
                    continue _fun61626
                }
            case 68:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 6;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.Theme;
                var1 = var1.DARK;
                return var1;
            case 104:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 6;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.Theme;
                var1 = var1.MIDNIGHT;
                return var1;
            case 140:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 6;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.Theme;
                var1 = var1.DARKER;
                return var1;
            case 176:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 6;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.Theme;
                var1 = var1.LIGHT;
                return var1;
            case 212:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 6;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.Theme;
                var0 = var0.DARK;
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.ThemeTypes;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var4 = var3.SystemTheme;
    var3 = var3.SystemThemeState;
    var _closure1_slot7 = var3;
    var3 = {};
    var4 = function arg0() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 8;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'USER_SETTINGS_LOCALE_OVERRIDE';
        var1.type = var4;
        var4 = arg0;
        var1.locale = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var3.overrideLocale = var4;
    var4 = function arg0() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 8;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'UNSYNCED_USER_SETTINGS_UPDATE';
        var1.type = var4;
        var4 = arg0;
        var1.settings = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var3.updatedUnsyncedSettings = var4;
    var4 = function arg0() {
        _fun61629: for (var _fun61629_ip = 0;;) switch (_fun61629_ip) {
            case 0:
                var6 = arg0;
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 8;
                var1 = var1[var0];
                var0 = undefined;
                var3 = var2.bind(var0)(var1);
                var2 = var3.dispatch;
                var1 = {};
                var4 = 'SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE';
                var1.type = var4;
                var4 = {};
                var5 = {};
                var5.shouldSync = var6;
                if (var6) {
                    _fun61629_ip = 283;
                    continue _fun61629
                }
            case 58:
                var6 = {};
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var7 = 9;
                var10 = var9[var7];
                var10 = var8.bind(var0)(var10);
                var11 = var10.InlineAttachmentMedia;
                var10 = var11.getSetting;
                var10 = var10.bind(var11)();
                var6.inlineAttachmentMedia = var10;
                var10 = var9[var7];
                var10 = var8.bind(var0)(var10);
                var11 = var10.InlineEmbedMedia;
                var10 = var11.getSetting;
                var10 = var10.bind(var11)();
                var6.inlineEmbedMedia = var10;
                var10 = var9[var7];
                var10 = var8.bind(var0)(var10);
                var11 = var10.RenderEmbeds;
                var10 = var11.getSetting;
                var10 = var10.bind(var11)();
                var6.renderEmbeds = var10;
                var10 = var9[var7];
                var10 = var8.bind(var0)(var10);
                var11 = var10.RenderReactions;
                var10 = var11.getSetting;
                var10 = var10.bind(var11)();
                var6.renderReactions = var10;
                var10 = var9[var7];
                var10 = var8.bind(var0)(var10);
                var11 = var10.AnimateEmoji;
                var10 = var11.getSetting;
                var10 = var10.bind(var11)();
                var6.animateEmoji = var10;
                var10 = var9[var7];
                var10 = var8.bind(var0)(var10);
                var11 = var10.AnimateStickers;
                var10 = var11.getSetting;
                var10 = var10.bind(var11)();
                var6.animateStickers = var10;
                var7 = var9[var7];
                var7 = var8.bind(var0)(var7);
                var8 = var7.GifAutoPlay;
                var7 = var8.getSetting;
                var7 = var7.bind(var8)();
                var6.gifAutoPlay = var7;
                _fun61629_ip = 285;
                continue _fun61629;
            case 283:
                var6 = {};
            case 285:
                var5.settings = var6;
                var4.text = var5;
                var1.changes = var4;
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var3.setShouldSyncTextSettings = var4;
    var4 = function arg0() {
        _fun61630: for (var _fun61630_ip = 0;;) switch (_fun61630_ip) {
            case 0:
                var6 = arg0;
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 8;
                var1 = var1[var0];
                var0 = undefined;
                var3 = var2.bind(var0)(var1);
                var2 = var3.dispatch;
                var1 = {};
                var4 = 'SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE';
                var1.type = var4;
                var4 = {};
                var5 = {};
                var5.shouldSync = var6;
                if (var6) {
                    _fun61630_ip = 153;
                    continue _fun61630
                }
            case 55:
                var6 = {};
                var8 = _closure1_slot5;
                var8 = var8.theme;
                var6.theme = var8;
                var8 = {};
                var9 = _closure1_slot3;
                var10 = var9.gradientPreset;
                var9 = null;
                var11 = var9 == var10;
                var9 = undefined;
                if (var11) {
                    _fun61630_ip = 100;
                    continue _fun61630
                }
            case 95:
                var9 = var10.id;
            case 100:
                var8.backgroundGradientPresetId = var9;
                var6.clientThemeSettings = var8;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var7 = 9;
                var7 = var9[var7];
                var7 = var8.bind(var0)(var7);
                var8 = var7.DeveloperMode;
                var7 = var8.getSetting;
                var7 = var7.bind(var8)();
                var6.developerMode = var7;
                _fun61630_ip = 155;
                continue _fun61630;
            case 153:
                var6 = {};
            case 155:
                var5.settings = var6;
                var4.appearance = var5;
                var1.changes = var4;
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var3.setShouldSyncAppearanceSettings = var4;
    var4 = function arg0() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 8;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'USER_SETTINGS_OVERRIDE_APPLY';
        var1.type = var4;
        var4 = arg0;
        var1.settings = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var3.applySettingsOverride = var4;
    var4 = function arg0() {
        var6 = 0;
        var4 = copyRestArgs(var6);
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 8;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var5 = 'USER_SETTINGS_OVERRIDE_CLEAR';
        var1.type = var5;
        var1.settings = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var3.clearSettingsOverride = var4;
    var4 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 5;
        var3 = var6[var1];
        var2 = undefined;
        var3 = var5.bind(var2)(var3);
        var4 = var3.PreloadedUserSettingsActionCreators;
        var3 = var4.updateAsync;
        var1 = var6[var1];
        var1 = var5.bind(var2)(var1);
        var1 = var1.UserSettingsDelay;
        var2 = var1.INFREQUENT_USER_ACTION;
        var1 = 'localization';
        var0 = function(arg0) { // Environment: var0
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 7;
            var1 = var1[var0];
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            var3 = var1.StringValue;
            var2 = var3.create;
            var1 = {};
            var4 = _closure2_slot0;
            var1.value = var4;
            var2 = var2.bind(var3)(var1);
            var1 = arg0;
            var1.locale = var2;
            return var0;
        };
        var0 = var3.bind(var4)(var1, var0, var2);
        return var0;
    };
    var3.updateLocale = var4;
    var4 = function arg0() {
        _fun61635: for (var _fun61635_ip = 0;;) switch (_fun61635_ip) {
            case 0:
                var9 = arg0;
                var _closure2_slot0 = var9;
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var0 = 8;
                var3 = var3[var0];
                var0 = undefined;
                var5 = var4.bind(var0)(var3);
                var4 = var5.dispatch;
                var3 = {};
                var6 = 'SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE';
                var3.type = var6;
                var6 = {};
                var7 = {};
                var8 = {};
                var8.theme = var9;
                var7.settings = var8;
                var6.appearance = var7;
                var3.changes = var6;
                var3 = var4.bind(var5)(var3);
                var4 = _closure1_slot4;
                var3 = var4.shouldSync;
                var5 = 'appearance';
                var3 = var3.bind(var4)(var5);
                if (!var3) {
                    _fun61635_ip = 167;
                    continue _fun61635
                }
            case 102:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 5;
                var3 = var7[var2];
                var3 = var6.bind(var0)(var3);
                var4 = var3.PreloadedUserSettingsActionCreators;
                var3 = var4.updateAsync;
                var2 = var7[var2];
                var2 = var6.bind(var0)(var2);
                var2 = var2.UserSettingsDelay;
                var2 = var2.INFREQUENT_USER_ACTION;
                var1 = function(arg0) { // Environment: var1
                    var2 = _closure1_slot8;
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = arg0;
                    var1.theme = var2;
                    return var0;
                };
                var1 = var3.bind(var4)(var5, var1, var2);
            case 167:
                return var0;
        }
    };
    var3.updateTheme = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'actions/UserSettingsActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var3 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 5;
        var3 = var6[var1];
        var2 = undefined;
        var3 = var5.bind(var2)(var3);
        var4 = var3.PreloadedUserSettingsActionCreators;
        var3 = var4.updateAsync;
        var1 = var6[var1];
        var1 = var5.bind(var2)(var1);
        var1 = var1.UserSettingsDelay;
        var2 = var1.FREQUENT_USER_ACTION;
        var1 = 'guildFolders';
        var0 = function(arg0) { // Environment: var0
            var2 = _closure2_slot0;
            var1 = var2.map;
            var0 = function(arg0) { // Environment: var0
                _fun61639: for (var _fun61639_ip = 0;;) switch (_fun61639_ip) {
                    case 0:
                        var4 = arg0;
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var0 = 6;
                        var0 = var3[var0];
                        var6 = undefined;
                        var0 = var2.bind(var6)(var0);
                        var3 = var0.GuildFolder;
                        var2 = var3.create;
                        var0 = {};
                        var5 = var4.guildIds;
                        var0.guildIds = var5;
                        var0 = var2.bind(var3)(var0);
                        var2 = var4.folderId;
                        var3 = null;
                        if (!(var3 != var2)) {
                            _fun61639_ip = 136;
                            continue _fun61639
                        }
                    case 69:
                        var5 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var2 = 7;
                        var2 = var7[var2];
                        var2 = var5.bind(var6)(var2);
                        var7 = var2.Int64Value;
                        var5 = var7.create;
                        var2 = {};
                        var8 = global;
                        var9 = var8.String;
                        var8 = var4.folderId;
                        var8 = var9.bind(var6)(var8);
                        var2.value = var8;
                        var2 = var5.bind(var7)(var2);
                        var0.id = var2;
                    case 136:
                        var2 = var4.folderColor;
                        if (!(var3 != var2)) {
                            _fun61639_ip = 213;
                            continue _fun61639
                        }
                    case 146:
                        var5 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var2 = 7;
                        var2 = var7[var2];
                        var2 = var5.bind(var6)(var2);
                        var7 = var2.UInt64Value;
                        var5 = var7.create;
                        var2 = {};
                        var8 = global;
                        var9 = var8.String;
                        var8 = var4.folderColor;
                        var8 = var9.bind(var6)(var8);
                        var2.value = var8;
                        var2 = var5.bind(var7)(var2);
                        var0.color = var2;
                    case 213:
                        var2 = var4.folderName;
                        var2 = var3 != var2;
                        if (!var2) {
                            _fun61639_ip = 240;
                            continue _fun61639
                        }
                    case 226:
                        var5 = var4.folderName;
                        var3 = '';
                        var2 = var3 !== var5;
                    case 240:
                        if (!var2) {
                            _fun61639_ip = 310;
                            continue _fun61639
                        }
                    case 243:
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 7;
                        var1 = var3[var1];
                        var1 = var2.bind(var6)(var1);
                        var3 = var1.StringValue;
                        var2 = var3.create;
                        var1 = {};
                        var5 = global;
                        var5 = var5.String;
                        var4 = var4.folderName;
                        var4 = var5.bind(var6)(var4);
                        var1.value = var4;
                        var1 = var2.bind(var3)(var1);
                        var0.name = var1;
                    case 310:
                        return var0;
                }
            };
            var1 = var1.bind(var2)(var0);
            var0 = arg0;
            var0.folders = var1;
            var0 = undefined;
            return var0;
        };
        var0 = var3.bind(var4)(var1, var0, var2);
        return var0;
    };
    var2.saveGuildFolders = var3;
    var1 = function arg0() {
        _fun61640: for (var _fun61640_ip = 0;;) switch (_fun61640_ip) {
            case 0:
                var1 = arg0;
                var4 = arguments[1];
                var14 = var1.backgroundGradientPresetId;
                var _closure2_slot0 = var14;
                var13 = var1.customUserThemeSettings;
                var _closure2_slot1 = var13;
                var11 = var1.theme;
                var _closure2_slot2 = var11;
                var2 = var1.useSystemTheme;
                var5 = undefined;
                if (!(var4 === var5)) {
                    _fun61640_ip = 85;
                    continue _fun61640
                }
            case 50:
                var3 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 5;
                var1 = var6[var1];
                var1 = var3.bind(var5)(var1);
                var1 = var1.UserSettingsDelay;
                var4 = var1.INFREQUENT_USER_ACTION;
            case 85:
                var1 = 'system';
                var12 = var1 === var11;
                var3 = _closure1_slot7;
                if (var12) {
                    _fun61640_ip = 111;
                    continue _fun61640
                }
            case 103:
                var15 = var3.OFF;
                _fun61640_ip = 117;
                continue _fun61640;
            case 111:
                var15 = var3.ON;
            case 117:
                var3 = null;
                if (!(var3 != var2)) {
                    _fun61640_ip = 126;
                    continue _fun61640
                }
            case 123:
                var15 = var2;
            case 126:
                var3 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 8;
                var7 = var6[var2];
                var9 = var3.bind(var5)(var7);
                var8 = var9.dispatch;
                var7 = {};
                var10 = 'UNSYNCED_USER_SETTINGS_UPDATE';
                var7.type = var10;
                var10 = {};
                var10.useSystemTheme = var15;
                var7.settings = var10;
                var7 = var8.bind(var9)(var7);
                var2 = var6[var2];
                var6 = var3.bind(var5)(var2);
                var3 = var6.dispatch;
                var2 = {};
                var7 = 'SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE';
                var2.type = var7;
                var7 = {};
                var8 = {};
                var9 = {};
                var10 = {};
                var10.backgroundGradientPresetId = var14;
                var10.customUserThemeSettings = var13;
                var9.clientThemeSettings = var10;
                var10 = undefined;
                if (var12) {
                    _fun61640_ip = 233;
                    continue _fun61640
                }
            case 230:
                var10 = var11;
            case 233:
                var9.theme = var10;
                var8.settings = var9;
                var7.appearance = var8;
                var2.changes = var7;
                var2 = var3.bind(var6)(var2);
                var6 = _closure1_slot4;
                var2 = var6.shouldSync;
                var3 = 'appearance';
                var2 = var2.bind(var6)(var3);
                if (var2) {
                    _fun61640_ip = 282;
                    continue _fun61640
                }
            case 280:
                return var5;
            case 282:
                var2 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 5;
                var1 = var6[var1];
                var1 = var2.bind(var5)(var1);
                var2 = var1.PreloadedUserSettingsActionCreators;
                var1 = var2.updateAsync;
                var0 = function(arg0) { // Environment: var0
                    _fun61641: for (var _fun61641_ip = 0;;) switch (_fun61641_ip) {
                        case 0:
                            var2 = arg0;
                            var4 = _closure1_slot8;
                            var3 = _closure2_slot2;
                            var0 = undefined;
                            var3 = var4.bind(var0)(var3);
                            var2.theme = var3;
                            var5 = {};
                            var3 = _closure2_slot0;
                            var5.backgroundGradientPresetId = var3;
                            var1 = _closure2_slot1;
                            var5.customUserThemeSettings = var1;
                            var1 = {};
                            var3 = var5.backgroundGradientPresetId;
                            var4 = null;
                            var7 = var4 != var3;
                            var3 = undefined;
                            if (!var7) {
                                _fun61641_ip = 117;
                                continue _fun61641
                            }
                        case 69:
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var6 = 7;
                            var6 = var8[var6];
                            var6 = var7.bind(var0)(var6);
                            var8 = var6.UInt32Value;
                            var7 = var8.create;
                            var6 = {};
                            var9 = var5.backgroundGradientPresetId;
                            var6.value = var9;
                            var3 = var7.bind(var8)(var6);
                        case 117:
                            var1.backgroundGradientPresetId = var3;
                            var3 = var5.customUserThemeSettings;
                            var4 = var4 != var3;
                            var3 = undefined;
                            if (!var4) {
                                _fun61641_ip = 208;
                                continue _fun61641
                            }
                        case 137:
                            var4 = {};
                            var6 = var5.customUserThemeSettings;
                            var6 = var6.colors;
                            var4.colors = var6;
                            var6 = var5.customUserThemeSettings;
                            var6 = var6.gradientColorStops;
                            var4.gradientColorStops = var6;
                            var6 = var5.customUserThemeSettings;
                            var6 = var6.gradientAngle;
                            var4.gradientAngle = var6;
                            var5 = var5.customUserThemeSettings;
                            var5 = var5.baseMix;
                            var4.baseMix = var5;
                            var3 = var4;
                        case 208:
                            var1.customUserThemeSettings = var3;
                            var2.clientThemeSettings = var1;
                            return var0;
                    }
                };
                var0 = var1.bind(var2)(var3, var0, var4);
                return var0;
        }
    };
    var2.saveClientTheme = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3211, 1354, 3198, 660, 3200, 1355, 1311, 1342, 806, 1348, 2]);