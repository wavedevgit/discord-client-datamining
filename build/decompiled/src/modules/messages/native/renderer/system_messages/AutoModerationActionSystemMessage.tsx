// modules/messages/native/renderer/system_messages/AutoModerationActionSystemMessage.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var7 = var3.processColor;
    var _closure1_slot3 = var7;
    var3 = var3.Image;
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Permissions;
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.memoize;
    var3 = function(arg0) { // Environment: var1
        _fun55712: for (var _fun55712_ip = 0;;) switch (_fun55712_ip) {
            case 0:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 7;
                var0 = var3[var0];
                var4 = undefined;
                var3 = var2.bind(var4)(var0);
                var2 = var3.isThemeDark;
                var0 = arg0;
                var2 = var2.bind(var3)(var0);
                var3 = _closure1_slot1;
                var5 = _closure1_slot2;
                var0 = 8;
                var0 = var5[var0];
                var0 = var3.bind(var4)(var0);
                var0 = var0.unsafe_rawColors;
                if (var2) {
                    _fun55712_ip = 75;
                    continue _fun55712
                }
            case 67:
                var3 = var0.PRIMARY_630;
                _fun55712_ip = 81;
                continue _fun55712;
            case 75:
                var3 = var0.WHITE;
            case 81:
                var0 = {};
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 9;
                var1 = var5[var1];
                var2 = var2.bind(var4)(var1);
                var1 = var2.processColorOrThrow;
                var1 = var1.bind(var2)(var3);
                var0.defaultUsernameColor = var1;
                return var0;
        }
    };
    var3 = var6.bind(var7)(var3);
    var _closure1_slot10 = var3;
    var3 = 28;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/native/renderer/system_messages/AutoModerationActionSystemMessage.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun55713: for (var _fun55713_ip = 0;;) switch (_fun55713_ip) {
            case 0:
                var22 = arg0;
                var14 = var22.message;
                var37 = var22.theme;
                var20 = var22.roleStyle;
                var0 = _closure1_slot10;
                var8 = undefined;
                var0 = var0.bind(var8)(var37);
                var17 = var0.defaultUsernameColor;
                var1 = _closure1_slot0;
                var0 = _closure1_slot2;
                var16 = 10;
                var0 = var0[var16];
                var1 = var1.bind(var8)(var0);
                var0 = var1.isAutomodMessageRecord;
                var0 = var0.bind(var1)(var14);
                if (var0) {
                    _fun55713_ip = 78;
                    continue _fun55713
                }
            case 74:
                var0 = null;
                return var0;
            case 78:
                var1 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var16];
                var1 = var1.bind(var8)(var0);
                var0 = var1.extractAutomodMessageFields;
                var0 = var0.bind(var1)(var14);
                var13 = var0.ruleName;
                var33 = var0.keyword;
                var27 = var0.embedChannel;
                var6 = var0.content;
                var28 = var0.flaggedMessageId;
                var25 = var0.embedChannelId;
                var15 = var0.quarantineType;
                var7 = var0.interactionUserId;
                var2 = _closure1_slot5;
                var1 = var2.getChannel;
                var0 = var14.getChannelId;
                var0 = var0.bind(var14)();
                var1 = var1.bind(var2)(var0);
                var5 = null;
                var0 = var5 == var1;
                var24 = undefined;
                if (var0) {
                    _fun55713_ip = 198;
                    continue _fun55713
                }
            case 188:
                var0 = var1.getGuildId;
                var24 = var0.bind(var1)();
            case 198:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 11;
                var0 = var1[var0];
                var3 = var2.bind(var8)(var0);
                var0 = var3.getMessageAuthor;
                var0 = var0.bind(var3)(var14);
                var18 = var0.nick;
                var32 = var0.guildMemberAvatar;
                var21 = var0.colorString;
                var30 = var0.iconRoleId;
                var23 = var14.author;
                var9 = _closure1_slot7;
                var3 = var9.can;
                var0 = _closure1_slot9;
                var0 = var0.VIEW_CHANNEL;
                var26 = var3.bind(var9)(var0, var27);
                var0 = var1[var16];
                var3 = var2.bind(var8)(var0);
                var0 = var3.getActionHeaderTextMobile;
                var12 = var0.bind(var3)(var14, var23, var7);
                var9 = 12;
                var3 = var1[var9];
                var3 = var2.bind(var8)(var3);
                var10 = var3.intl;
                var7 = var10.string;
                var3 = var1[var9];
                var3 = var2.bind(var8)(var3);
                var3 = var3.t;
                var3 = var3["94JbM3"];
                var7 = var7.bind(var10)(var3);
                var1 = var1[var16];
                var2 = var2.bind(var8)(var1);
                var1 = var2.isAutomodNotification;
                var3 = var1.bind(var2)(var14);
                var1 = var7;
                var10 = null;
                if (!var3) {
                    _fun55713_ip = 2858;
                    continue _fun55713
                }
            case 387:
                var19 = _closure1_slot0;
                var0 = _closure1_slot2;
                var2 = var0[var16];
                var11 = var19.bind(var8)(var2);
                var2 = var11.extractAutomodNotificationFields;
                var2 = var2.bind(var11)(var14);
                var11 = var2.notificationType;
                var0 = var0[var16];
                var0 = var19.bind(var8)(var0);
                var0 = var0.IS_BACKWARDS_COMPAT_RAID_TYPE;
                if (!(var0 !== var11)) {
                    _fun55713_ip = 2061;
                    continue _fun55713
                }
            case 443:
                var19 = _closure1_slot0;
                var0 = _closure1_slot2;
                var29 = 13;
                var0 = var0[var29];
                var0 = var19.bind(var8)(var0);
                var0 = var0.AutomodNotificationEmbedTypeKeys;
                var0 = var0.RAID;
                if (!(var0 !== var11)) {
                    _fun55713_ip = 2061;
                    continue _fun55713
                }
            case 482:
                var19 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var29];
                var0 = var19.bind(var8)(var0);
                var0 = var0.AutomodNotificationEmbedTypeKeys;
                var0 = var0.MENTION_RAID;
                if (!(var0 !== var11)) {
                    _fun55713_ip = 1654;
                    continue _fun55713
                }
            case 518:
                var19 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var29];
                var0 = var19.bind(var8)(var0);
                var0 = var0.AutomodNotificationEmbedTypeKeys;
                var0 = var0.ACTIVITY_ALERTS_ENABLED;
                if (!(var0 !== var11)) {
                    _fun55713_ip = 900;
                    continue _fun55713
                }
            case 554:
                var0 = {};
                var31 = _closure1_slot0;
                var11 = _closure1_slot2;
                var19 = var11[var9];
                var19 = var31.bind(var8)(var19);
                var34 = var19.intl;
                var29 = var34.string;
                var19 = var11[var9];
                var19 = var31.bind(var8)(var19);
                var19 = var19.t;
                var19 = var19.VdZCcC;
                var19 = var29.bind(var34)(var19);
                var0.header = var19;
                var29 = 9;
                var19 = var11[var29];
                var36 = var31.bind(var8)(var19);
                var35 = var36.processColorOrThrow;
                var38 = _closure1_slot1;
                var19 = 8;
                var34 = var11[var19];
                var34 = var38.bind(var8)(var34);
                var40 = var34.internal;
                var39 = var40.resolveSemanticColor;
                var34 = var11[var19];
                var34 = var38.bind(var8)(var34);
                var34 = var34.colors;
                var34 = var34.TEXT_SUBTLE;
                var34 = var39.bind(var40)(var37, var34);
                var34 = var35.bind(var36)(var34);
                var0.headerColor = var34;
                var36 = _closure1_slot4;
                var35 = var36.resolveAssetSource;
                var34 = 17;
                var34 = var11[var34];
                var40 = var31.bind(var8)(var34);
                var39 = var40.makeSource;
                var34 = 19;
                var34 = var11[var34];
                var34 = var38.bind(var8)(var34);
                var34 = var39.bind(var40)(var34);
                var34 = var35.bind(var36)(var34);
                var34 = var34.uri;
                var0.headerIconURL = var34;
                var29 = var11[var29];
                var34 = var31.bind(var8)(var29);
                var29 = var34.processColorOrThrow;
                var35 = var11[var19];
                var35 = var38.bind(var8)(var35);
                var36 = var35.internal;
                var35 = var36.resolveSemanticColor;
                var19 = var11[var19];
                var19 = var38.bind(var8)(var19);
                var19 = var19.colors;
                var19 = var19.TEXT_SUBTLE;
                var19 = var35.bind(var36)(var37, var19);
                var19 = var29.bind(var34)(var19);
                var0.headerIconColor = var19;
                var19 = var11[var9];
                var19 = var31.bind(var8)(var19);
                var29 = var19.intl;
                var19 = var29.string;
                var11 = var11[var9];
                var11 = var31.bind(var8)(var11);
                var11 = var11.t;
                var11 = var11["NxHYX/"];
                var11 = var19.bind(var29)(var11);
                var0.body = var11;
                var11 = false;
                var0.shouldShowActions = var11;
                var12 = '';
                var1 = var7;
                var10 = var0;
                _fun55713_ip = 2858;
                continue _fun55713;
            case 900:
                var11 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var16];
                var11 = var11.bind(var8)(var0);
                var0 = var11.getUserIdOfAutomodAction;
                var31 = var0.bind(var11)(var14);
                var11 = _closure1_slot8;
                var0 = var11.getUser;
                var29 = var0.bind(var11)(var31);
                var0 = var5 != var31;
                var19 = null;
                if (!var0) {
                    _fun55713_ip = 977;
                    continue _fun55713
                }
            case 952:
                var0 = var5 != var24;
                var19 = null;
                if (!var0) {
                    _fun55713_ip = 977;
                    continue _fun55713
                }
            case 961:
                var11 = _closure1_slot6;
                var0 = var11.getMember;
                var19 = var0.bind(var11)(var24, var31);
            case 977:
                var0 = var5 == var19;
                var11 = undefined;
                if (var0) {
                    _fun55713_ip = 992;
                    continue _fun55713
                }
            case 986:
                var11 = var19.nick;
            case 992:
                if (!(var5 == var11)) {
                    _fun55713_ip = 1013;
                    continue _fun55713
                }
            case 996:
                var31 = var5 == var29;
                var0 = undefined;
                if (var31) {
                    _fun55713_ip = 1010;
                    continue _fun55713
                }
            case 1005:
                var0 = var29.username;
            case 1010:
                var11 = var0;
            case 1013:
                var29 = _closure1_slot0;
                var31 = _closure1_slot2;
                var0 = 20;
                var0 = var31[var0];
                var31 = var29.bind(var8)(var0);
                var29 = var31.ensureAvatarSource;
                var34 = var5 == var19;
                var0 = undefined;
                if (var34) {
                    _fun55713_ip = 1054;
                    continue _fun55713
                }
            case 1048:
                var0 = var19.avatar;
            case 1054:
                if (!(var5 != var0)) {
                    _fun55713_ip = 1062;
                    continue _fun55713
                }
            case 1058:
                if (!(var5 == var24)) {
                    _fun55713_ip = 1082;
                    continue _fun55713
                }
            case 1062:
                var35 = var23.getAvatarSource;
                var34 = false;
                var0 = 16;
                var0 = var35.bind(var23)(var8, var34, var0);
                _fun55713_ip = 1149;
                continue _fun55713;
            case 1082:
                var35 = _closure1_slot0;
                var36 = _closure1_slot2;
                var34 = 17;
                var34 = var36[var34];
                var36 = var35.bind(var8)(var34);
                var35 = var36.getGuildMemberAvatarSource;
                var34 = {};
                var38 = var23.id;
                var34.userId = var38;
                var39 = var5 == var19;
                var38 = undefined;
                if (var39) {
                    _fun55713_ip = 1134;
                    continue _fun55713
                }
            case 1128:
                var38 = var19.avatar;
            case 1134:
                var34.avatar = var38;
                var34.guildId = var24;
                var0 = var35.bind(var36)(var34, var23);
            case 1149:
                var29 = var29.bind(var31)(var0);
                var0 = {};
                var36 = _closure1_slot0;
                var31 = _closure1_slot2;
                var34 = var31[var9];
                var34 = var36.bind(var8)(var34);
                var38 = var34.intl;
                var35 = var38.string;
                var34 = var31[var9];
                var34 = var36.bind(var8)(var34);
                var34 = var34.t;
                var34 = var34.lVLiFp;
                var34 = var35.bind(var38)(var34);
                var0.header = var34;
                var38 = 9;
                var34 = var31[var38];
                var41 = var36.bind(var8)(var34);
                var40 = var41.processColorOrThrow;
                var35 = _closure1_slot1;
                var34 = 8;
                var39 = var31[var34];
                var39 = var35.bind(var8)(var39);
                var43 = var39.internal;
                var42 = var43.resolveSemanticColor;
                var39 = var31[var34];
                var39 = var35.bind(var8)(var39);
                var39 = var39.colors;
                var39 = var39.TEXT_FEEDBACK_POSITIVE;
                var39 = var42.bind(var43)(var37, var39);
                var39 = var40.bind(var41)(var39);
                var0.headerColor = var39;
                var41 = _closure1_slot4;
                var40 = var41.resolveAssetSource;
                var39 = 17;
                var39 = var31[var39];
                var43 = var36.bind(var8)(var39);
                var42 = var43.makeSource;
                var39 = 21;
                var39 = var31[var39];
                var39 = var35.bind(var8)(var39);
                var39 = var42.bind(var43)(var39);
                var39 = var40.bind(var41)(var39);
                var39 = var39.uri;
                var0.headerIconURL = var39;
                var38 = var31[var38];
                var39 = var36.bind(var8)(var38);
                var38 = var39.processColorOrThrow;
                var40 = var31[var34];
                var40 = var35.bind(var8)(var40);
                var41 = var40.internal;
                var40 = var41.resolveSemanticColor;
                var34 = var31[var34];
                var34 = var35.bind(var8)(var34);
                var34 = var34.colors;
                var34 = var34.TEXT_FEEDBACK_POSITIVE;
                var34 = var40.bind(var41)(var37, var34);
                var34 = var38.bind(var39)(var34);
                var0.headerIconColor = var34;
                var34 = var31[var9];
                var34 = var36.bind(var8)(var34);
                var39 = var34.intl;
                var38 = var39.string;
                var34 = var31[var9];
                var34 = var36.bind(var8)(var34);
                var34 = var34.t;
                var34 = var34["QV/8u5"];
                var34 = var38.bind(var39)(var34);
                var0.body = var34;
                var34 = false;
                var0.shouldShowActions = var34;
                var34 = 14;
                var34 = var31[var34];
                var35 = var35.bind(var8)(var34);
                var34 = var14.timestamp;
                var35 = var35.bind(var8)(var34);
                var34 = var35.fromNow;
                var34 = var34.bind(var35)();
                var0.subtitleRight = var34;
                var34 = var31[var9];
                var34 = var36.bind(var8)(var34);
                var35 = var34.intl;
                var34 = var35.string;
                var31 = var31[var9];
                var31 = var36.bind(var8)(var31);
                var31 = var31.t;
                var31 = var31.qlFrXW;
                var31 = var34.bind(var35)(var31);
                var0.subtitleLeft = var31;
                var29 = var29.uri;
                var0.enabledByAvatarURL = var29;
                var0.enabledByUsername = var11;
                var29 = var5 == var19;
                var11 = undefined;
                if (var29) {
                    _fun55713_ip = 1608;
                    continue _fun55713
                }
            case 1602:
                var11 = var19.colorString;
            case 1608:
                var29 = var5 != var11;
                var11 = undefined;
                if (!var29) {
                    _fun55713_ip = 1632;
                    continue _fun55713
                }
            case 1617:
                var29 = _closure1_slot3;
                var19 = var19.colorString;
                var11 = var29.bind(var8)(var19);
            case 1632:
                var0.enabledByColor = var11;
                var12 = '';
                var1 = var7;
                var10 = var0;
                _fun55713_ip = 2858;
                continue _fun55713;
            case 1654:
                var0 = {};
                var11 = var2.raidDatetime;
                var19 = var5 != var11;
                var11 = undefined;
                if (!var19) {
                    _fun55713_ip = 1712;
                    continue _fun55713
                }
            case 1671:
                var29 = _closure1_slot1;
                var31 = _closure1_slot2;
                var19 = 14;
                var19 = var31[var19];
                var29 = var29.bind(var8)(var19);
                var19 = var2.raidDatetime;
                var29 = var29.bind(var8)(var19);
                var19 = var29.fromNow;
                var11 = var19.bind(var29)();
            case 1712:
                var0.subtitleLeft = var11;
                var31 = _closure1_slot0;
                var11 = _closure1_slot2;
                var19 = var11[var9];
                var19 = var31.bind(var8)(var19);
                var34 = var19.intl;
                var29 = var34.string;
                var19 = var11[var9];
                var19 = var31.bind(var8)(var19);
                var19 = var19.t;
                var19 = var19.C2uIXE;
                var19 = var29.bind(var34)(var19);
                var0.header = var19;
                var29 = 9;
                var19 = var11[var29];
                var36 = var31.bind(var8)(var19);
                var35 = var36.processColorOrThrow;
                var38 = _closure1_slot1;
                var19 = 8;
                var34 = var11[var19];
                var34 = var38.bind(var8)(var34);
                var40 = var34.internal;
                var39 = var40.resolveSemanticColor;
                var34 = var11[var19];
                var34 = var38.bind(var8)(var34);
                var34 = var34.colors;
                var34 = var34.TEXT_FEEDBACK_CRITICAL;
                var34 = var39.bind(var40)(var37, var34);
                var34 = var35.bind(var36)(var34);
                var0.headerColor = var34;
                var36 = _closure1_slot4;
                var35 = var36.resolveAssetSource;
                var34 = 17;
                var34 = var11[var34];
                var40 = var31.bind(var8)(var34);
                var39 = var40.makeSource;
                var34 = 19;
                var34 = var11[var34];
                var34 = var38.bind(var8)(var34);
                var34 = var39.bind(var40)(var34);
                var34 = var35.bind(var36)(var34);
                var34 = var34.uri;
                var0.headerIconURL = var34;
                var29 = var11[var29];
                var34 = var31.bind(var8)(var29);
                var29 = var34.processColorOrThrow;
                var35 = var11[var19];
                var35 = var38.bind(var8)(var35);
                var36 = var35.internal;
                var35 = var36.resolveSemanticColor;
                var19 = var11[var19];
                var19 = var38.bind(var8)(var19);
                var19 = var19.colors;
                var19 = var19.TEXT_FEEDBACK_CRITICAL;
                var19 = var35.bind(var36)(var37, var19);
                var19 = var29.bind(var34)(var19);
                var0.headerIconColor = var19;
                var19 = var11[var9];
                var19 = var31.bind(var8)(var19);
                var29 = var19.intl;
                var19 = var29.string;
                var11 = var11[var9];
                var11 = var31.bind(var8)(var11);
                var11 = var11.t;
                var11 = var11.SWIWEV;
                var11 = var19.bind(var29)(var11);
                var0.body = var11;
                var11 = false;
                var0.shouldShowActions = var11;
                var12 = '';
                var1 = var7;
                var10 = var0;
                _fun55713_ip = 2858;
                continue _fun55713;
            case 2061:
                var0 = var2.raidDatetime;
                var0 = var5 != var0;
                var7 = undefined;
                if (!var0) {
                    _fun55713_ip = 2117;
                    continue _fun55713
                }
            case 2076:
                var11 = _closure1_slot1;
                var19 = _closure1_slot2;
                var0 = 14;
                var0 = var19[var0];
                var11 = var11.bind(var8)(var0);
                var0 = var2.raidDatetime;
                var11 = var11.bind(var8)(var0);
                var0 = var11.fromNow;
                var7 = var0.bind(var11)();
            case 2117:
                var11 = var2.raidType;
                var19 = _closure1_slot0;
                var29 = _closure1_slot2;
                var0 = 15;
                var0 = var29[var0];
                var0 = var19.bind(var8)(var0);
                var0 = var0.AutomodRaidAlertTypes;
                var0 = var0.DM_RAID;
                var11 = var11 === var0;
                var0 = var2.raidDatetime;
                var0 = var5 != var0;
                var35 = '';
                if (!var0) {
                    _fun55713_ip = 2268;
                    continue _fun55713
                }
            case 2176:
                var0 = global;
                var29 = var0.Date;
                var46 = var2.raidDatetime;
                var19 = var29.prototype;
                var19 = Object.create(var19, {
                    constructor: {
                        value: var29
                    }
                });
                var47 = var19;
                var0 = new var47[var29](var46, var45);
                var31 = var0 instanceof Object ? var0 : var19;
                var29 = var31.toLocaleString;
                var34 = _closure1_slot0;
                var36 = _closure1_slot2;
                var0 = var36[var9];
                var0 = var34.bind(var8)(var0);
                var0 = var0.intl;
                var19 = var0.currentLocale;
                var0 = 16;
                var0 = var36[var0];
                var0 = var34.bind(var8)(var0);
                var0 = var0.DATE_CONFIG;
                var35 = var29.bind(var31)(var19, var0);
            case 2268:
                var19 = _closure1_slot0;
                var0 = _closure1_slot2;
                var29 = var0[var9];
                var29 = var19.bind(var8)(var29);
                var34 = var29.intl;
                var31 = var34.formatToPlainString;
                var0 = var0[var9];
                var0 = var19.bind(var8)(var0);
                var0 = var0.t;
                if (var11) {
                    _fun55713_ip = 2343;
                    continue _fun55713
                }
            case 2312:
                var29 = var0["4ylIiu"];
                var19 = {};
                var36 = var2.joinAttempts;
                var19.joinCount = var36;
                var19 = var31.bind(var34)(var29, var19);
                _fun55713_ip = 2370;
                continue _fun55713;
            case 2343:
                var29 = var0["5C8Mh3"];
                var0 = {};
                var36 = var2.dmsSent;
                var0.dmsSent = var36;
                var19 = var31.bind(var34)(var29, var0);
            case 2370:
                var0 = {};
                var0.subtitleLeft = var19;
                var0.severity = var19;
                var0.subtitleRight = var7;
                var0.startTime = var7;
                var19 = _closure1_slot0;
                var7 = _closure1_slot2;
                var29 = var7[var9];
                var29 = var19.bind(var8)(var29);
                var31 = var29.intl;
                var29 = var31.string;
                var7 = var7[var9];
                var7 = var19.bind(var8)(var7);
                var19 = var7.t;
                if (var11) {
                    _fun55713_ip = 2451;
                    continue _fun55713
                }
            case 2436:
                var7 = var19.xMwcwV;
                var7 = var29.bind(var31)(var7);
                _fun55713_ip = 2464;
                continue _fun55713;
            case 2451:
                var19 = var19["8+lHUb"];
                var7 = var29.bind(var31)(var19);
            case 2464:
                var0.header = var7;
                var36 = _closure1_slot0;
                var39 = _closure1_slot2;
                var29 = 9;
                var7 = var39[var29];
                var34 = var36.bind(var8)(var7);
                var31 = var34.processColorOrThrow;
                var38 = _closure1_slot1;
                var7 = 8;
                var19 = var39[var7];
                var19 = var38.bind(var8)(var19);
                var41 = var19.internal;
                var40 = var41.resolveSemanticColor;
                var19 = var39[var7];
                var19 = var38.bind(var8)(var19);
                var19 = var19.colors;
                var19 = var19.TEXT_FEEDBACK_CRITICAL;
                var19 = var40.bind(var41)(var37, var19);
                var19 = var31.bind(var34)(var19);
                var0.headerColor = var19;
                var31 = _closure1_slot4;
                var19 = var31.resolveAssetSource;
                var34 = 17;
                var34 = var39[var34];
                var36 = var36.bind(var8)(var34);
                var34 = var36.makeSource;
                var40 = _closure1_slot2;
                if (var11) {
                    _fun55713_ip = 2602;
                    continue _fun55713
                }
            case 2593:
                var11 = 19;
                var11 = var40[var11];
                _fun55713_ip = 2609;
                continue _fun55713;
            case 2602:
                var39 = 18;
                var11 = var40[var39];
            case 2609:
                var11 = var38.bind(var8)(var11);
                var11 = var34.bind(var36)(var11);
                var11 = var19.bind(var31)(var11);
                var11 = var11.uri;
                var0.headerIconURL = var11;
                var19 = _closure1_slot0;
                var11 = _closure1_slot2;
                var29 = var11[var29];
                var31 = var19.bind(var8)(var29);
                var29 = var31.processColorOrThrow;
                var38 = _closure1_slot1;
                var34 = var11[var7];
                var34 = var38.bind(var8)(var34);
                var36 = var34.internal;
                var34 = var36.resolveSemanticColor;
                var7 = var11[var7];
                var7 = var38.bind(var8)(var7);
                var7 = var7.colors;
                var7 = var7.TEXT_FEEDBACK_CRITICAL;
                var7 = var34.bind(var36)(var37, var7);
                var7 = var29.bind(var31)(var7);
                var0.headerIconColor = var7;
                var7 = var11[var9];
                var7 = var19.bind(var8)(var7);
                var34 = var7.intl;
                var31 = var34.formatToPlainString;
                var7 = var11[var9];
                var7 = var19.bind(var8)(var7);
                var7 = var7.t;
                var29 = var7["4QIIZl"];
                var7 = {};
                var7.dateTime = var35;
                var7 = var31.bind(var34)(var29, var7);
                var0.body = var7;
                var7 = true;
                var0.shouldShowActions = var7;
                var7 = var11[var9];
                var7 = var19.bind(var8)(var7);
                var31 = var7.intl;
                var29 = var31.string;
                var7 = var11[var9];
                var7 = var19.bind(var8)(var7);
                var7 = var7.t;
                var7 = var7.ufawcw;
                var12 = var29.bind(var31)(var7);
                var11 = var11[var16];
                var19 = var19.bind(var8)(var11);
                var11 = var19.getRaidAlertResolveCTAText;
                var2 = var2.resolvedReason;
                var1 = var11.bind(var19)(var2);
                var10 = var0;
            case 2858:
                var0 = var5 != var24;
                var7 = null;
                if (!var0) {
                    _fun55713_ip = 2976;
                    continue _fun55713
                }
            case 2867:
                var2 = _closure1_slot0;
                var11 = _closure1_slot2;
                var0 = 20;
                var0 = var11[var0];
                var11 = var2.bind(var8)(var0);
                var2 = var11.ensureAvatarSource;
                if (!(var5 != var32)) {
                    _fun55713_ip = 2901;
                    continue _fun55713
                }
            case 2897:
                if (!(var5 == var24)) {
                    _fun55713_ip = 2914;
                    continue _fun55713
                }
            case 2901:
                var0 = var23.getAvatarSource;
                var0 = var0.bind(var23)(var8);
                _fun55713_ip = 2966;
                continue _fun55713;
            case 2914:
                var29 = _closure1_slot0;
                var31 = _closure1_slot2;
                var19 = 17;
                var19 = var31[var19];
                var31 = var29.bind(var8)(var19);
                var29 = var31.getGuildMemberAvatarSource;
                var19 = {};
                var34 = var23.id;
                var19.userId = var34;
                var19.avatar = var32;
                var19.guildId = var24;
                var0 = var29.bind(var31)(var19, var23);
            case 2966:
                var0 = var2.bind(var11)(var0);
                var7 = var0.uri;
            case 2976:
                var0 = var5 != var24;
                var19 = null;
                if (!var0) {
                    _fun55713_ip = 3006;
                    continue _fun55713
                }
            case 2985:
                var11 = _closure1_slot6;
                var2 = var11.getMember;
                var0 = var23.id;
                var19 = var2.bind(var11)(var24, var0);
            case 3006:
                var0 = var5 != var30;
                var11 = undefined;
                if (!var0) {
                    _fun55713_ip = 3073;
                    continue _fun55713
                }
            case 3015:
                var0 = var5 != var24;
                var11 = undefined;
                if (!var0) {
                    _fun55713_ip = 3073;
                    continue _fun55713
                }
            case 3024:
                var2 = _closure1_slot0;
                var29 = _closure1_slot2;
                var0 = 22;
                var0 = var29[var0];
                var29 = var2.bind(var8)(var0);
                var2 = var29.getRoleIcon;
                var0 = {};
                var0.guildId = var24;
                var0.roleId = var30;
                var30 = 18;
                var0.size = var30;
                var11 = var2.bind(var29)(var0);
            case 3073:
                var0 = {};
                var29 = _closure1_slot1;
                var35 = _closure1_slot2;
                var2 = 23;
                var2 = var35[var2];
                var2 = var29.bind(var8)(var2);
                var45 = var2.bind(var8)(var22);
                var46 = var0;
                var2 = copyDataProperties(var46, var45);
                var2 = 'roleIcon';
                var0[var2] = var11;
                var11 = var23.id;
                var2 = 'authorId';
                var0[var2] = var11;
                var34 = _closure1_slot0;
                var2 = var35[var9];
                var2 = var34.bind(var8)(var2);
                var22 = var2.intl;
                var11 = var22.string;
                var2 = var35[var9];
                var2 = var34.bind(var8)(var2);
                var2 = var2.t;
                var2 = var2.hG1StD;
                var2 = var11.bind(var22)(var2);
                var22 = 'username';
                var0[var22] = var2;
                var2 = 20;
                var11 = var35[var2];
                var30 = var34.bind(var8)(var11);
                var29 = var30.ensureAvatarSource;
                var11 = 17;
                var31 = var35[var11];
                var32 = var34.bind(var8)(var31);
                var31 = var32.makeSource;
                var2 = var35[var2];
                var34 = var34.bind(var8)(var2);
                var2 = var34.getAutomodAvatarURL;
                var2 = var2.bind(var34)();
                var2 = var31.bind(var32)(var2);
                var2 = var29.bind(var30)(var2);
                var29 = var2.uri;
                var2 = 'avatarURL';
                var0[var2] = var29;
                var29 = _closure1_slot3;
                var30 = var5 != var21;
                var2 = undefined;
                if (!var30) {
                    _fun55713_ip = 3282;
                    continue _fun55713
                }
            case 3279:
                var2 = var21;
            case 3282:
                var29 = var29.bind(var8)(var2);
                var2 = 'colorString';
                var0[var2] = var29;
                var2 = {};
                var2.headerText = var12;
                var31 = _closure1_slot0;
                var12 = _closure1_slot2;
                var29 = var12[var9];
                var29 = var31.bind(var8)(var29);
                var30 = var29.intl;
                var29 = var30.string;
                var12 = var12[var9];
                var12 = var31.bind(var8)(var12);
                var12 = var12.t;
                var12 = var12["70CJbT"];
                var12 = var29.bind(var30)(var12);
                var2.headerBadgeText = var12;
                var29 = var5 != var33;
                var12 = '';
                if (!var29) {
                    _fun55713_ip = 3437;
                    continue _fun55713
                }
            case 3375:
                var30 = _closure1_slot0;
                var29 = _closure1_slot2;
                var31 = var29[var9];
                var31 = var30.bind(var8)(var31);
                var32 = var31.intl;
                var31 = var32.formatToPlainString;
                var29 = var29[var9];
                var29 = var30.bind(var8)(var29);
                var29 = var29.t;
                var30 = var29.SYIUTR;
                var29 = {};
                var29.keyword = var33;
                var12 = var31.bind(var32)(var30, var29);
            case 3437:
                var2.keywordDisplayText = var12;
                var12 = {};
                if (!(var5 == var28)) {
                    _fun55713_ip = 3455;
                    continue _fun55713
                }
            case 3450:
                var28 = var14.id;
            case 3455:
                var12.id = var28;
                var29 = var5 == var27;
                var28 = undefined;
                if (var29) {
                    _fun55713_ip = 3473;
                    continue _fun55713
                }
            case 3468:
                var28 = var27.id;
            case 3473:
                if (!(var5 != var28)) {
                    _fun55713_ip = 3480;
                    continue _fun55713
                }
            case 3477:
                var25 = var28;
            case 3480:
                if (!(var5 == var25)) {
                    _fun55713_ip = 3489;
                    continue _fun55713
                }
            case 3484:
                var25 = var14.channel_id;
            case 3489:
                var12.channelId = var25;
                var12.guildId = var24;
                var23 = var23.id;
                var12.userId = var23;
                var23 = undefined;
                if (!var26) {
                    _fun55713_ip = 3549;
                    continue _fun55713
                }
            case 3511:
                var24 = var5 == var15;
                var23 = undefined;
                if (!var24) {
                    _fun55713_ip = 3549;
                    continue _fun55713
                }
            case 3520:
                var25 = _closure1_slot0;
                var24 = _closure1_slot2;
                var24 = var24[var16];
                var25 = var25.bind(var8)(var24);
                var24 = var25.getChannelName;
                var23 = var24.bind(var25)(var27, var26);
            case 3549:
                var12.channelName = var23;
                var12.username = var18;
                var18 = var17;
                if (!(var22 === var20)) {
                    _fun55713_ip = 3596;
                    continue _fun55713
                }
            case 3565:
                var23 = _closure1_slot3;
                var24 = var5 != var21;
                var22 = undefined;
                if (!var24) {
                    _fun55713_ip = 3581;
                    continue _fun55713
                }
            case 3578:
                var22 = var21;
            case 3581:
                var22 = var23.bind(var8)(var22);
                var18 = var17;
                if (!(var5 != var22)) {
                    _fun55713_ip = 3596;
                    continue _fun55713
                }
            case 3593:
                var18 = var22;
            case 3596:
                var12.usernameColor = var18;
                var22 = _closure1_slot3;
                var23 = var5 != var21;
                var18 = undefined;
                if (!var23) {
                    _fun55713_ip = 3617;
                    continue _fun55713
                }
            case 3614:
                var18 = var21;
            case 3617:
                var18 = var22.bind(var8)(var18);
                var12.roleColor = var18;
                var18 = 'dot';
                var18 = var18 === var20;
                if (!var18) {
                    _fun55713_ip = 3642;
                    continue _fun55713
                }
            case 3638:
                var18 = var5 != var21;
            case 3642:
                var12.shouldShowRoleDot = var18;
                var20 = _closure1_slot3;
                var22 = var5 != var21;
                var18 = undefined;
                if (!var22) {
                    _fun55713_ip = 3663;
                    continue _fun55713
                }
            case 3660:
                var18 = var21;
            case 3663:
                var18 = var20.bind(var8)(var18);
                if (!(var5 != var18)) {
                    _fun55713_ip = 3675;
                    continue _fun55713
                }
            case 3672:
                var17 = var18;
            case 3675:
                var12.colorString = var17;
                var12.avatarURL = var7;
                var12.content = var6;
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var17 = 24;
                var17 = var6[var17];
                var18 = var7.bind(var8)(var17);
                var17 = var18.isMemberCommunicationDisabled;
                var17 = var17.bind(var18)(var19);
                var12.communicationDisabled = var17;
                var17 = 25;
                var17 = var6[var17];
                var18 = var7.bind(var8)(var17);
                var17 = var18.accessibilityLabelCalendarFormat;
                var14 = var14.timestamp;
                var14 = var17.bind(var18)(var14);
                var12.timestamp = var14;
                var2.message = var12;
                var2.notification = var10;
                var10 = var6[var9];
                var10 = var7.bind(var8)(var10);
                var12 = var10.intl;
                var10 = var12.formatToPlainString;
                var6 = var6[var9];
                var6 = var7.bind(var8)(var6);
                var6 = var6.t;
                var7 = var6.ZoOyKB;
                var6 = {};
                var6.ruleName = var13;
                var6 = var10.bind(var12)(var7, var6);
                var2.ruleDisplayText = var6;
                var6 = var5 != var15;
                var5 = null;
                if (!var6) {
                    _fun55713_ip = 3920;
                    continue _fun55713
                }
            case 3838:
                var14 = _closure1_slot0;
                var13 = _closure1_slot2;
                var6 = var13[var9];
                var6 = var14.bind(var8)(var6);
                var12 = var6.intl;
                var10 = var12.formatToPlainString;
                var6 = var13[var9];
                var6 = var14.bind(var8)(var6);
                var6 = var6.t;
                var7 = var6["26bB2M"];
                var6 = {};
                var13 = var13[var16];
                var14 = var14.bind(var8)(var13);
                var13 = var14.getQuarantineReasonString;
                var13 = var13.bind(var14)(var15);
                var6.reason = var13;
                var5 = var10.bind(var12)(var7, var6);
            case 3920:
                var2.reasonDisplayText = var5;
                var7 = _closure1_slot4;
                var6 = var7.resolveAssetSource;
                var10 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var11];
                var11 = var10.bind(var8)(var5);
                var10 = var11.makeSource;
                var12 = _closure1_slot1;
                var14 = _closure1_slot2;
                if (var3) {
                    _fun55713_ip = 3980;
                    continue _fun55713
                }
            case 3971:
                var5 = 27;
                var5 = var14[var5];
                _fun55713_ip = 3987;
                continue _fun55713;
            case 3980:
                var13 = 26;
                var5 = var14[var13];
            case 3987:
                var5 = var12.bind(var8)(var5);
                var5 = var10.bind(var11)(var5);
                var5 = var6.bind(var7)(var5);
                var5 = var5.uri;
                var2.actionsIconURL = var5;
                var7 = _closure1_slot0;
                var4 = _closure1_slot2;
                var5 = var4[var9];
                var5 = var7.bind(var8)(var5);
                var6 = var5.intl;
                var5 = var6.string;
                var4 = var4[var9];
                var4 = var7.bind(var8)(var4);
                var4 = var4.t;
                if (var3) {
                    _fun55713_ip = 4071;
                    continue _fun55713
                }
            case 4058:
                var3 = var4.DEoVWZ;
                var3 = var5.bind(var6)(var3);
                _fun55713_ip = 4084;
                continue _fun55713;
            case 4071:
                var4 = var4.UgXhdn;
                var3 = var5.bind(var6)(var4);
            case 4084:
                var2.actionsText = var3;
                var2.feedbackText = var1;
                var1 = 'autoModerationContext';
                var0[var1] = var2;
                return var0;
        }
    };
    var2.createAutoModerationActionSystemMessage = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 1372, 1672, 3050, 1613, 660, 22, 3165, 671, 6482, 4494, 3942, 1234, 6652, 3004, 6690, 6691, 1417, 6694, 5355, 1418, 6695, 6696, 6640, 3039, 3091, 6699, 6700, 2]);