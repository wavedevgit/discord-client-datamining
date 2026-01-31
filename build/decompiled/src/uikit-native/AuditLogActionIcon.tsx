// uikit-native/AuditLogActionIcon.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var5;
    var0 = function(arg0) { // Original name: AuditIcons, environment: var1
        _fun115165: for (var _fun115165_ip = 0;;) switch (_fun115165_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.action;
                var0 = _closure1_slot10;
                var3 = undefined;
                var9 = var0.bind(var3)();
                var0 = _closure1_slot5;
                var1 = var0.bind(var3)(var2);
                var0 = _closure1_slot6;
                var0 = var0.CREATE;
                if (!(var0 !== var1)) {
                    _fun115165_ip = 118;
                    continue _fun115165
                }
            case 44:
                var0 = _closure1_slot6;
                var0 = var0.UPDATE;
                if (!(var0 !== var1)) {
                    _fun115165_ip = 96;
                    continue _fun115165
                }
            case 58:
                var0 = _closure1_slot6;
                var0 = var0.DELETE;
                var8 = null;
                if (!(var0 === var1)) {
                    _fun115165_ip = 138;
                    continue _fun115165
                }
            case 74:
                var1 = _closure1_slot1;
                var4 = _closure1_slot2;
                var0 = 28;
                var0 = var4[var0];
                var8 = var1.bind(var3)(var0);
                _fun115165_ip = 138;
                continue _fun115165;
            case 96:
                var1 = _closure1_slot1;
                var4 = _closure1_slot2;
                var0 = 27;
                var0 = var4[var0];
                var8 = var1.bind(var3)(var0);
                _fun115165_ip = 138;
                continue _fun115165;
            case 118:
                var1 = _closure1_slot1;
                var4 = _closure1_slot2;
                var0 = 26;
                var0 = var4[var0];
                var8 = var1.bind(var3)(var0);
            case 138:
                var0 = _closure1_slot4;
                var1 = var0.bind(var3)(var2);
                var0 = _closure1_slot7;
                var0 = var0.MESSAGE_DELETE;
                if (!(var2 !== var0)) {
                    _fun115165_ip = 255;
                    continue _fun115165
                }
            case 161:
                var0 = _closure1_slot7;
                var0 = var0.AUTO_MODERATION_BLOCK_MESSAGE;
                if (!(var2 !== var0)) {
                    _fun115165_ip = 227;
                    continue _fun115165
                }
            case 175:
                var0 = _closure1_slot7;
                var0 = var0.AUTO_MODERATION_FLAG_TO_CHANNEL;
                if (!(var2 !== var0)) {
                    _fun115165_ip = 227;
                    continue _fun115165
                }
            case 189:
                var0 = _closure1_slot7;
                var0 = var0.AUTO_MODERATION_USER_COMMUNICATION_DISABLED;
                if (!(var2 !== var0)) {
                    _fun115165_ip = 227;
                    continue _fun115165
                }
            case 203:
                var0 = _closure1_slot7;
                var0 = var0.AUTO_MODERATION_QUARANTINE_USER;
                if (!(var2 !== var0)) {
                    _fun115165_ip = 227;
                    continue _fun115165
                }
            case 217:
                var0 = _closure1_slot11;
                var7 = var0[var1];
                _fun115165_ip = 253;
                continue _fun115165;
            case 227:
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 25;
                var0 = var2[var0];
                var0 = var1.bind(var3)(var0);
                var7 = var0.RobotIcon;
            case 253:
                _fun115165_ip = 281;
                continue _fun115165;
            case 255:
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 24;
                var0 = var2[var0];
                var0 = var1.bind(var3)(var0);
                var7 = var0.ChatIcon;
            case 281:
                var2 = _closure1_slot9;
                var1 = _closure1_slot3;
                var0 = {};
                var4 = var9.actionImageContainer;
                var0.style = var4;
                var6 = _closure1_slot8;
                var4 = {};
                var10 = 'custom';
                var4.size = var10;
                var10 = var9.iconComponent;
                var4.style = var10;
                var6 = var6.bind(var3)(var7, var4);
                var4 = new Array(3);
                var4[0] = var6;
                var10 = _closure1_slot8;
                var7 = _closure1_slot3;
                var6 = {};
                var12 = var9.actionImageOverlay;
                var11 = new Array(2);
                var11[0] = var12;
                var12 = var9.actionImage;
                var11[1] = var12;
                var6.style = var11;
                var6 = var10.bind(var3)(var7, var6);
                var4[1] = var6;
                var7 = _closure1_slot8;
                var6 = _closure1_slot1;
                var10 = _closure1_slot2;
                var5 = 29;
                var5 = var10[var5];
                var6 = var6.bind(var3)(var5);
                var5 = {};
                var9 = var9.actionImage;
                var5.style = var9;
                var5.source = var8;
                var8 = true;
                var5.disableColor = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot12 = var0;
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
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.getTargetType;
    var _closure1_slot4 = var6;
    var3 = var3.getActionType;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AuditLogTargetTypes;
    var7 = var3.AuditLogActionTypes;
    var _closure1_slot6 = var7;
    var3 = var3.AuditLogActions;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot8 = var7;
    var3 = var3.jsxs;
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var5[var3];
    var10 = var4.bind(var0)(var3);
    var8 = var10.createStyles;
    var3 = {};
    var7 = {
        'height': 24,
        'width': 24
    };
    var3.actionImageContainer = var7;
    var7 = {
        'borderRadius': null,
        'width': 13,
        'height': 13,
        'bottom': 0,
        'right': 0
    };
    var11 = 6;
    var9 = var5[var11];
    var9 = var12.bind(var0)(var9);
    var9 = var9.radii;
    var9 = var9.round;
    var7.borderRadius = var9;
    var9 = 13;
    var11 = var5[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_SURFACE_HIGH;
    var7.backgroundColor = var11;
    var3.actionImageOverlay = var7;
    var7 = 22;
    var11 = {
        'width': 22,
        'height': 22
    };
    var3.iconComponent = var11;
    var11 = {};
    var12 = 'absolute';
    var11.position = var12;
    var3.actionImage = var11;
    var3 = var8.bind(var10)(var3);
    var _closure1_slot10 = var3;
    var3 = {};
    var10 = var6.ALL;
    var8 = 7;
    var8 = var5[var8];
    var8 = var4.bind(var0)(var8);
    var8 = var8.ListBulletsIcon;
    var3[var10] = var8;
    var11 = var6.CHANNEL;
    var8 = 8;
    var10 = var5[var8];
    var10 = var4.bind(var0)(var10);
    var10 = var10.ChannelListIcon;
    var3[var11] = var10;
    var11 = var6.CHANNEL_OVERWRITE;
    var10 = var5[var8];
    var10 = var4.bind(var0)(var10);
    var10 = var10.ChannelListIcon;
    var3[var11] = var10;
    var11 = var6.EMOJI;
    var10 = 9;
    var10 = var5[var10];
    var10 = var4.bind(var0)(var10);
    var10 = var10.ReactionIcon;
    var3[var11] = var10;
    var12 = var6.GUILD;
    var10 = 10;
    var11 = var5[var10];
    var11 = var4.bind(var0)(var11);
    var11 = var11.CircleInformationIcon;
    var3[var12] = var11;
    var11 = var6.GUILD_PROFILE;
    var10 = var5[var10];
    var10 = var4.bind(var0)(var10);
    var10 = var10.CircleInformationIcon;
    var3[var11] = var10;
    var11 = var6.INTEGRATION;
    var10 = 11;
    var10 = var5[var10];
    var10 = var4.bind(var0)(var10);
    var10 = var10.PuzzlePieceIcon;
    var3[var11] = var10;
    var11 = var6.INVITE;
    var10 = 12;
    var10 = var5[var10];
    var10 = var4.bind(var0)(var10);
    var10 = var10.LinkIcon;
    var3[var11] = var10;
    var10 = var6.ROLE;
    var9 = var5[var9];
    var9 = var4.bind(var0)(var9);
    var9 = var9.FlagIcon;
    var3[var10] = var9;
    var11 = var6.USER;
    var9 = 14;
    var10 = var5[var9];
    var10 = var4.bind(var0)(var10);
    var10 = var10.GroupIcon;
    var3[var11] = var10;
    var12 = var6.WEBHOOK;
    var10 = 15;
    var11 = var5[var10];
    var11 = var4.bind(var0)(var11);
    var11 = var11.WebhookIcon;
    var3[var12] = var11;
    var12 = var6.STAGE_INSTANCE;
    var11 = 16;
    var11 = var5[var11];
    var11 = var4.bind(var0)(var11);
    var11 = var11.StageIcon;
    var3[var12] = var11;
    var13 = var6.GUILD_SCHEDULED_EVENT;
    var11 = 17;
    var12 = var5[var11];
    var12 = var4.bind(var0)(var12);
    var12 = var12.CalendarIcon;
    var3[var13] = var12;
    var12 = var6.GUILD_SCHEDULED_EVENT_EXCEPTION;
    var11 = var5[var11];
    var11 = var4.bind(var0)(var11);
    var11 = var11.CalendarIcon;
    var3[var12] = var11;
    var12 = var6.THREAD;
    var11 = 18;
    var11 = var5[var11];
    var11 = var4.bind(var0)(var11);
    var11 = var11.ThreadIcon;
    var3[var12] = var11;
    var12 = var6.STICKER;
    var11 = 19;
    var11 = var5[var11];
    var11 = var4.bind(var0)(var11);
    var11 = var11.StickerIcon;
    var3[var12] = var11;
    var12 = var6.APPLICATION_COMMAND;
    var11 = 20;
    var11 = var5[var11];
    var11 = var4.bind(var0)(var11);
    var11 = var11.SlashBoxIcon;
    var3[var12] = var11;
    var11 = var6.AUTO_MODERATION_RULE;
    var10 = var5[var10];
    var10 = var4.bind(var0)(var10);
    var10 = var10.WebhookIcon;
    var3[var11] = var10;
    var11 = var6.GUILD_SOUNDBOARD;
    var10 = 21;
    var10 = var5[var10];
    var10 = var4.bind(var0)(var10);
    var10 = var10.SoundboardIcon;
    var3[var11] = var10;
    var11 = var6.ONBOARDING_PROMPT;
    var10 = var5[var9];
    var10 = var4.bind(var0)(var10);
    var10 = var10.GroupIcon;
    var3[var11] = var10;
    var11 = var6.GUILD_ONBOARDING;
    var10 = var5[var9];
    var10 = var4.bind(var0)(var10);
    var10 = var10.GroupIcon;
    var3[var11] = var10;
    var11 = var6.HOME_SETTINGS;
    var10 = var5[var9];
    var10 = var4.bind(var0)(var10);
    var10 = var10.GroupIcon;
    var3[var11] = var10;
    var10 = var6.GUILD_MEMBER_VERIFICATION;
    var9 = var5[var9];
    var9 = var4.bind(var0)(var9);
    var9 = var9.GroupIcon;
    var3[var10] = var9;
    var9 = var6.VOICE_CHANNEL_STATUS;
    var8 = var5[var8];
    var8 = var4.bind(var0)(var8);
    var8 = var8.ChannelListIcon;
    var3[var9] = var8;
    var8 = var6.GUILD_HOME;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var7 = var7.HomeIcon;
    var3[var8] = var7;
    var7 = var6.UNKNOWN;
    var6 = 23;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.CircleQuestionIcon;
    var3[var7] = var6;
    var _closure1_slot11 = var3;
    var3 = 30;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'uikit-native/AuditLogActionIcon.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: AuditLogActionIcon, environment: var1
        var0 = _closure1_slot10;
        var3 = undefined;
        var5 = var0.bind(var3)();
        var0 = arg0;
        var7 = var0.action;
        var2 = _closure1_slot8;
        var1 = _closure1_slot3;
        var0 = {};
        var5 = var5.actionImageContainer;
        var0.style = var5;
        var6 = _closure1_slot8;
        var5 = _closure1_slot12;
        var4 = {};
        var4.action = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 14644, 660, 33, 1297, 671, 14657, 14627, 7638, 3225, 10488, 3213, 8890, 4816, 13785, 4823, 8142, 4803, 8741, 7687, 11889, 14659, 9511, 4801, 5409, 14660, 14661, 14662, 4045, 2]);