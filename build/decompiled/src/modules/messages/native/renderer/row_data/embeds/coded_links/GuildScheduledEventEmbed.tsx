// modules/messages/native/renderer/row_data/embeds/coded_links/GuildScheduledEventEmbed.tsx
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
        _fun92427: for (var _fun92427_ip = 0;;) switch (_fun92427_ip) {
            case 0:
                var0 = arg0;
                var28 = var0.channel;
                var1 = var0.guildEvent;
                var21 = var0.userCount;
                var12 = var0.guild;
                var15 = var0.theme;
                var3 = var0.type;
                var33 = var0.recurrenceId;
                var2 = _closure1_slot1;
                var4 = _closure1_slot2;
                var0 = 10;
                var0 = var4[var0];
                var10 = undefined;
                var0 = var2.bind(var10)(var0);
                var0 = var0.bind(var10)(var15);
                var2 = var0.colors;
                var8 = null;
                var4 = var8 == var28;
                var0 = undefined;
                if (var4) {
                    _fun92427_ip = 93;
                    continue _fun92427
                }
            case 88:
                var0 = var28.id;
            case 93:
                var4 = var8 != var12;
                var6 = undefined;
                if (!var4) {
                    _fun92427_ip = 118;
                    continue _fun92427
                }
            case 102:
                var9 = _closure1_slot8;
                var5 = 128;
                var4 = false;
                var6 = var9.bind(var10)(var12, var5, var4);
            case 118:
                var4 = var8 != var6;
                var17 = undefined;
                if (!var4) {
                    _fun92427_ip = 158;
                    continue _fun92427
                }
            case 127:
                var5 = _closure1_slot0;
                var9 = _closure1_slot2;
                var4 = 11;
                var4 = var9[var4];
                var5 = var5.bind(var10)(var4);
                var4 = var5.getAssetUriForEmbed;
                var17 = var4.bind(var5)(var6);
            case 158:
                var6 = _closure1_slot0;
                var9 = _closure1_slot2;
                var4 = 12;
                var4 = var9[var4];
                var5 = var6.bind(var10)(var4);
                var4 = var5.isGuildEventInvitable;
                var14 = var4.bind(var5)(var1);
                var4 = _closure1_slot6;
                var34 = var4.bind(var10)(var1);
                var23 = var1.entity_type;
                var4 = _closure1_slot13;
                var22 = var4.EXTERNAL;
                var11 = _closure1_slot7;
                var5 = var11.isInterestedInEventRecurrence;
                var4 = var1.id;
                var32 = var5.bind(var11)(var4, var33);
                var4 = var1.name;
                var29 = var1.description;
                var18 = var1.entity_type;
                var5 = _closure1_slot13;
                var16 = var5.STAGE_INSTANCE;
                var5 = 13;
                var5 = var9[var5];
                var11 = var6.bind(var10)(var5);
                var5 = var11.getEventSchedule;
                var11 = var5.bind(var11)(var1, var33);
                var5 = 14;
                var5 = var9[var5];
                var9 = var6.bind(var10)(var5);
                var6 = var9.getEventTimeData;
                var13 = var8 == var11;
                var5 = undefined;
                if (var13) {
                    _fun92427_ip = 328;
                    continue _fun92427
                }
            case 312:
                var13 = var11.startTime;
                var11 = var13.toISOString;
                var5 = var11.bind(var13)();
            case 328:
                var19 = var6.bind(var9)(var5);
                var6 = _closure1_slot0;
                var24 = _closure1_slot2;
                var5 = 15;
                var9 = var24[var5];
                var13 = var6.bind(var10)(var9);
                var11 = var13.getGuildScheduledEventHeaderProps;
                var9 = {};
                var9.eventTimeData = var19;
                var16 = var18 === var16;
                var9.isStage = var16;
                var9.theme = var15;
                var9.event = var1;
                var13 = var11.bind(var13)(var9);
                var9 = var13.color;
                var15 = var13.icon;
                var11 = var13.shouldChangeTextColor;
                var13 = var13.text;
                var27 = var8 != var12;
                var19 = {};
                var16 = var2.titleColor;
                var19.titleColor = var16;
                var16 = var2.borderColor;
                var19.borderColor = var16;
                var16 = var2.backgroundColor;
                var19.backgroundColor = var16;
                var19.thumbnailCornerRadius = var5;
                var19.embedCanBeTapped = var27;
                var35 = 16;
                var5 = var24[var35];
                var5 = var6.bind(var10)(var5);
                var18 = var5.intl;
                var16 = var18.string;
                var5 = var24[var35];
                var5 = var6.bind(var10)(var5);
                var5 = var5.t;
                var5 = var5.DlcqlU;
                var31 = var16.bind(var18)(var5);
                var16 = 11;
                var5 = var24[var16];
                var25 = var6.bind(var10)(var5);
                var18 = var25.getAssetUriForEmbed;
                var20 = _closure1_slot1;
                var5 = 17;
                var5 = var24[var5];
                var5 = var20.bind(var10)(var5);
                var30 = var18.bind(var25)(var5);
                var5 = var24[var16];
                var18 = var6.bind(var10)(var5);
                var6 = var18.getAssetUriForEmbed;
                var5 = 18;
                var5 = var24[var5];
                var5 = var20.bind(var10)(var5);
                var18 = var6.bind(var18)(var5);
                if (var27) {
                    _fun92427_ip = 700;
                    continue _fun92427
                }
            case 581:
                var25 = _closure1_slot0;
                var5 = _closure1_slot2;
                var6 = 19;
                var6 = var5[var6];
                var24 = var25.bind(var10)(var6);
                var20 = var24.processColorOrThrow;
                var26 = _closure1_slot1;
                var6 = 20;
                var6 = var5[var6];
                var6 = var26.bind(var10)(var6);
                var6 = var6.unsafe_rawColors;
                var6 = var6.GREEN_360;
                var26 = var20.bind(var24)(var6);
                var6 = var5[var35];
                var6 = var25.bind(var10)(var6);
                var24 = var6.intl;
                var6 = var24.string;
                var5 = var5[var35];
                var5 = var25.bind(var10)(var5);
                var5 = var5.t;
                var5 = var5.XpeFYr;
                var20 = var6.bind(var24)(var5);
                var25 = var2.acceptLabelGreenColor;
                var6 = false;
                var24 = undefined;
                var5 = undefined;
                _fun92427_ip = 943;
                continue _fun92427;
            case 700:
                if (var34) {
                    _fun92427_ip = 804;
                    continue _fun92427
                }
            case 703:
                if (var32) {
                    _fun92427_ip = 735;
                    continue _fun92427
                }
            case 706:
                var26 = var2.acceptLabelActiveBackgroundColor;
                var25 = var2.acceptLabelGreenColor;
                var6 = var32;
                var20 = var31;
                var24 = var30;
                var5 = var18;
                _fun92427_ip = 943;
                continue _fun92427;
            case 735:
                var26 = var2.backgroundColor;
                var34 = _closure1_slot0;
                var39 = _closure1_slot2;
                var30 = var39[var16];
                var37 = var34.bind(var10)(var30);
                var34 = var37.getAssetUriForEmbed;
                var38 = _closure1_slot1;
                var30 = 21;
                var30 = var39[var30];
                var30 = var38.bind(var10)(var30);
                var24 = var34.bind(var37)(var30);
                var25 = var2.acceptLabelDisabledTextColor;
                var6 = var32;
                var20 = var31;
                var5 = var18;
                _fun92427_ip = 943;
                continue _fun92427;
            case 804:
                var31 = var2.acceptLabelActiveBackgroundColor;
                if (!(var23 !== var22)) {
                    _fun92427_ip = 870;
                    continue _fun92427
                }
            case 814:
                var32 = _closure1_slot0;
                var22 = _closure1_slot2;
                var23 = var22[var35];
                var23 = var32.bind(var10)(var23);
                var30 = var23.intl;
                var23 = var30.string;
                var22 = var22[var35];
                var22 = var32.bind(var10)(var22);
                var22 = var22.t;
                var22 = var22.IaYdtW;
                var22 = var23.bind(var30)(var22);
                _fun92427_ip = 924;
                continue _fun92427;
            case 870:
                var34 = _closure1_slot0;
                var23 = _closure1_slot2;
                var30 = var23[var35];
                var30 = var34.bind(var10)(var30);
                var32 = var30.intl;
                var30 = var32.string;
                var23 = var23[var35];
                var23 = var34.bind(var10)(var23);
                var23 = var23.t;
                var23 = var23.GoCQxU;
                var22 = var30.bind(var32)(var23);
            case 924:
                var25 = var2.acceptLabelGreenColor;
                var6 = false;
                var20 = var22;
                var26 = var31;
                var24 = undefined;
                var5 = var18;
            case 943:
                if (var14) {
                    _fun92427_ip = 948;
                    continue _fun92427
                }
            case 946:
                var5 = undefined;
            case 948:
                var14 = var8 != var29;
                var18 = undefined;
                if (!var14) {
                    _fun92427_ip = 1012;
                    continue _fun92427
                }
            case 957:
                var22 = _closure1_slot1;
                var23 = _closure1_slot2;
                var14 = 22;
                var14 = var23[var14];
                var23 = var22.bind(var10)(var14);
                var22 = var23.parseToAST;
                var14 = {
                    'channelId': null,
                    'allowLinks': true,
                    'allowEmojiLinks': true,
                    'allowHeading': true,
                    'allowList': true
                };
                var14.channelId = var0;
                var0 = true;
                var18 = var22.bind(var23)(var29, var0, var14);
            case 1012:
                var14 = _closure1_slot0;
                var22 = _closure1_slot2;
                var0 = 23;
                var0 = var22[var0];
                var14 = var14.bind(var10)(var0);
                var0 = var14.getLocationFromEvent;
                var14 = var0.bind(var14)(var1);
                if (!(var8 == var14)) {
                    _fun92427_ip = 1064;
                    continue _fun92427
                }
            case 1047:
                var22 = var8 == var28;
                var0 = undefined;
                if (var22) {
                    _fun92427_ip = 1061;
                    continue _fun92427
                }
            case 1056:
                var0 = var28.name;
            case 1061:
                var14 = var0;
            case 1064:
                var23 = _closure1_slot0;
                var0 = _closure1_slot2;
                var22 = 24;
                var22 = var0[var22];
                var23 = var23.bind(var10)(var22);
                var22 = var23.getEventLocationIconSource;
                var23 = var22.bind(var23)(var1, var28, var27);
                var28 = _closure1_slot11;
                var27 = var28.getUser;
                var22 = var1.creator_id;
                var22 = var27.bind(var28)(var22);
                var27 = _closure1_slot1;
                var28 = 25;
                var0 = var0[var28];
                var31 = var27.bind(var10)(var0);
                var30 = var31.getGuildEventUserCounts;
                var29 = var1.guild_id;
                var27 = var1.id;
                if (!(var8 == var33)) {
                    _fun92427_ip = 1160;
                    continue _fun92427
                }
            case 1154:
                var0 = new Array(0);
                _fun92427_ip = 1171;
                continue _fun92427;
            case 1160:
                var32 = new Array(1);
                var32[0] = var33;
                var0 = var32;
            case 1171:
                var0 = var30.bind(var31)(var29, var27, var0);
                var27 = _closure1_slot1;
                var0 = _closure1_slot2;
                var0 = var0[var28];
                var28 = var27.bind(var10)(var0);
                var27 = var28.getGuildEventsForCurrentUser;
                var0 = var1.guild_id;
                var0 = var27.bind(var28)(var0);
                var0 = {};
                var42 = var0;
                var41 = var19;
                var19 = copyDataProperties(var42, var41);
                var19 = 'acceptLabelBackgroundColor';
                var0[var19] = var26;
                var26 = undefined;
                if (!var6) {
                    _fun92427_ip = 1245;
                    continue _fun92427
                }
            case 1239:
                var26 = var2.acceptLabelDisabledBorderColor;
            case 1245:
                var19 = 'acceptLabelBorderColor';
                var0[var19] = var26;
                var19 = 'acceptLabelColor';
                var0[var19] = var25;
                var19 = 'acceptLabelIcon';
                var0[var19] = var24;
                var19 = 'acceptLabelText';
                var0[var19] = var20;
                var19 = var8 == var21;
                var20 = undefined;
                if (var19) {
                    _fun92427_ip = 1306;
                    continue _fun92427
                }
            case 1296:
                var19 = var21.toLocaleString;
                var20 = var19.bind(var21)();
            case 1306:
                var19 = 'badgeCount';
                var0[var19] = var20;
                var20 = _closure1_slot0;
                var25 = _closure1_slot2;
                var19 = var25[var16];
                var21 = var20.bind(var10)(var19);
                var20 = var21.getAssetUriForEmbed;
                var24 = _closure1_slot1;
                var19 = 26;
                var19 = var25[var19];
                var19 = var24.bind(var10)(var19);
                var20 = var20.bind(var21)(var19);
                var19 = 'badgeIcon';
                var0[var19] = var20;
                var19 = var8 != var23;
                var20 = undefined;
                if (!var19) {
                    _fun92427_ip = 1405;
                    continue _fun92427
                }
            case 1377:
                var21 = _closure1_slot0;
                var19 = _closure1_slot2;
                var19 = var19[var16];
                var21 = var21.bind(var10)(var19);
                var19 = var21.getAssetUriForEmbed;
                var20 = var19.bind(var21)(var23);
            case 1405:
                var19 = 'channelIcon';
                var0[var19] = var20;
                var20 = var8 != var14;
                var19 = undefined;
                if (!var20) {
                    _fun92427_ip = 1426;
                    continue _fun92427
                }
            case 1423:
                var19 = var14;
            case 1426:
                var14 = 'channelName';
                var0[var14] = var19;
                var14 = 'content';
                var0[var14] = var18;
                var14 = var8 != var22;
                var18 = undefined;
                if (!var14) {
                    _fun92427_ip = 1497;
                    continue _fun92427
                }
            case 1453:
                var19 = _closure1_slot0;
                var14 = _closure1_slot2;
                var14 = var14[var16];
                var20 = var19.bind(var10)(var14);
                var19 = var20.getAssetUriForEmbed;
                var21 = var22.getAvatarSource;
                var14 = var1.guild_id;
                var14 = var21.bind(var22)(var14);
                var18 = var19.bind(var20)(var14);
            case 1497:
                var14 = 'creatorAvatar';
                var0[var14] = var18;
                var14 = _closure1_slot12;
                var18 = var14.GUILD_SCHEDULED_EVENT;
                var14 = 'extendedType';
                var0[var14] = var18;
                var14 = 'guildIcon';
                var0[var14] = var17;
                var17 = var8 == var12;
                var14 = undefined;
                if (var17) {
                    _fun92427_ip = 1550;
                    continue _fun92427
                }
            case 1545:
                var14 = var12.name;
            case 1550:
                var12 = 'guildName';
                var0[var12] = var14;
                var12 = _closure1_slot4;
                var14 = var12.bind(var10)(var9);
                if (!(var8 == var14)) {
                    _fun92427_ip = 1578;
                    continue _fun92427
                }
            case 1572:
                var14 = var2.headerColor;
            case 1578:
                var12 = 'headerColor';
                var0[var12] = var14;
                var14 = _closure1_slot0;
                var12 = _closure1_slot2;
                var12 = var12[var16];
                var14 = var14.bind(var10)(var12);
                var12 = var14.getAssetUriForEmbed;
                var14 = var12.bind(var14)(var15);
                var12 = 'headerIcon';
                var0[var12] = var14;
                var12 = 'headerText';
                var0[var12] = var13;
                if (!var11) {
                    _fun92427_ip = 1649;
                    continue _fun92427
                }
            case 1636:
                var7 = _closure1_slot4;
                var7 = var7.bind(var10)(var9);
                if (!(var8 == var7)) {
                    _fun92427_ip = 1655;
                    continue _fun92427
                }
            case 1649:
                var7 = var2.headerColor;
            case 1655:
                var2 = 'headerTextColor';
                var0[var2] = var7;
                var2 = 'isRsvped';
                var0[var2] = var6;
                var2 = 'secondaryActionIcon';
                var0[var2] = var5;
                var2 = 'titleText';
                var0[var2] = var4;
                var2 = 'type';
                var0[var2] = var3;
                var2 = var1.id;
                var1 = 'guildEventId';
                var0[var1] = var2;
                return var0;
        }
    };
    var _closure1_slot16 = var0;
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.processColor;
    var _closure1_slot4 = var3;
    var3 = 2;
    var7 = var5[var3];
    var7 = var4.bind(var0)(var7);
    var8 = var7.isGuildEventEnded;
    var _closure1_slot5 = var8;
    var7 = var7.isGuildScheduledEventActive;
    var _closure1_slot6 = var7;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.getGuildIconSource;
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.CodedLinkExtendedType;
    var _closure1_slot12 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.GuildScheduledEventEntityTypes;
    var _closure1_slot13 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.InviteTypes;
    var _closure1_slot14 = var3;
    var3 = {};
    var _closure1_slot15 = var3;
    var3 = 29;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/native/renderer/row_data/embeds/coded_links/GuildScheduledEventEmbed.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0, arg1() {
        _fun92428: for (var _fun92428_ip = 0;;) switch (_fun92428_ip) {
            case 0:
                var6 = arg0;
                var4 = _closure1_slot9;
                var3 = var4.getChannel;
                var7 = var6.channel;
                var1 = null;
                var8 = var1 == var7;
                var5 = undefined;
                var0 = undefined;
                if (var8) {
                    _fun92428_ip = 38;
                    continue _fun92428
                }
            case 33:
                var0 = var7.id;
            case 38:
                var10 = var3.bind(var4)(var0);
                var0 = var1 == var10;
                var4 = undefined;
                if (var0) {
                    _fun92428_ip = 57;
                    continue _fun92428
                }
            case 52:
                var4 = var10.guild_id;
            case 57:
                var7 = _closure1_slot7;
                var3 = var7.getGuildScheduledEvent;
                var8 = var6.guild_scheduled_event;
                var9 = var1 == var8;
                var0 = undefined;
                if (var9) {
                    _fun92428_ip = 87;
                    continue _fun92428
                }
            case 82:
                var0 = var8.id;
            case 87:
                var8 = var3.bind(var7)(var0);
                var7 = _closure1_slot7;
                var3 = var7.getUserCount;
                var9 = var6.guild_scheduled_event;
                var11 = var1 == var9;
                var0 = undefined;
                if (var11) {
                    _fun92428_ip = 122;
                    continue _fun92428
                }
            case 117:
                var0 = var9.id;
            case 122:
                var7 = var3.bind(var7)(var0, var1);
                if (!(var1 != var8)) {
                    _fun92428_ip = 318;
                    continue _fun92428
                }
            case 135:
                if (!(var1 != var4)) {
                    _fun92428_ip = 181;
                    continue _fun92428
                }
            case 139:
                var3 = _closure1_slot1;
                var9 = _closure1_slot2;
                var0 = 25;
                var0 = var9[var0];
                var11 = var3.bind(var5)(var0);
                var9 = var11.getGuildEventUserCounts;
                var3 = var8.id;
                var0 = new Array(0);
                var0 = var9.bind(var11)(var4, var3, var0);
            case 181:
                var3 = _closure1_slot16;
                var0 = {};
                var0.channel = var10;
                var0.guildEvent = var8;
                var0.userCount = var7;
                var7 = var6.guild;
                if (!(var1 == var7)) {
                    _fun92428_ip = 240;
                    continue _fun92428
                }
            case 210:
                var9 = _closure1_slot10;
                var8 = var9.getGuild;
                var11 = var1 == var10;
                var7 = undefined;
                if (var11) {
                    _fun92428_ip = 233;
                    continue _fun92428
                }
            case 228:
                var7 = var10.guild_id;
            case 233:
                var7 = var8.bind(var9)(var7);
                _fun92428_ip = 276;
                continue _fun92428;
            case 240:
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var8 = 28;
                var8 = var10[var8];
                var10 = var9.bind(var5)(var8);
                var9 = var10.fromInviteGuild;
                var8 = var6.guild;
                var7 = var9.bind(var10)(var8);
            case 276:
                var0.guild = var7;
                var7 = arg1;
                var0.theme = var7;
                var6 = var6.type;
                if (!(var1 == var6)) {
                    _fun92428_ip = 307;
                    continue _fun92428
                }
            case 297:
                var7 = _closure1_slot14;
                var6 = var7.GUILD;
            case 307:
                var0.type = var6;
                var0 = var3.bind(var5)(var0);
                _fun92428_ip = 360;
                continue _fun92428;
            case 318:
                var3 = var1 != var4;
                var0 = null;
                if (!var3) {
                    _fun92428_ip = 360;
                    continue _fun92428
                }
            case 327:
                var3 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 27;
                var2 = var6[var2];
                var3 = var3.bind(var5)(var2);
                var2 = var3.fetchGuildEventsForGuild;
                var2 = var2.bind(var3)(var4);
                var0 = null;
            case 360:
                return var0;
        }
    };
    var2.createGuildScheduledEventInviteEmbed = var3;
    var1 = function arg0, arg1() {
        _fun92429: for (var _fun92429_ip = 0;;) switch (_fun92429_ip) {
            case 0:
                var3 = arg0;
                var1 = var3.split;
                var0 = '-';
                var4 = var1.bind(var3)(var0);
                var3 = _closure1_slot3;
                var6 = undefined;
                var0 = 3;
                var4 = var3.bind(var6)(var4, var0);
                var0 = 0;
                var3 = var4[var0];
                var _closure2_slot0 = var3;
                var0 = 1;
                var7 = var4[var0];
                var0 = 2;
                var4 = var4[var0];
                var5 = _closure1_slot7;
                var0 = var5.getGuildScheduledEvent;
                var9 = var0.bind(var5)(var7);
                var0 = null;
                if (!(var0 == var4)) {
                    _fun92429_ip = 113;
                    continue _fun92429
                }
            case 82:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var5 = 14;
                var5 = var8[var5];
                var7 = var7.bind(var6)(var5);
                var5 = var7.getNextRecurrenceIdInEvent;
                var4 = var5.bind(var7)(var9);
            case 113:
                var5 = var0 != var4;
                var7 = undefined;
                if (!var5) {
                    _fun92429_ip = 125;
                    continue _fun92429
                }
            case 122:
                var7 = var4;
            case 125:
                if (!(var0 != var9)) {
                    _fun92429_ip = 327;
                    continue _fun92429
                }
            case 132:
                var4 = _closure1_slot5;
                var4 = var4.bind(var6)(var9);
                if (var4) {
                    _fun92429_ip = 327;
                    continue _fun92429
                }
            case 147:
                var5 = _closure1_slot1;
                var8 = _closure1_slot2;
                var4 = 25;
                var4 = var8[var4];
                var10 = var5.bind(var6)(var4);
                var8 = var10.getGuildEventUserCounts;
                var5 = var9.id;
                if (!(var0 == var7)) {
                    _fun92429_ip = 188;
                    continue _fun92429
                }
            case 182:
                var4 = new Array(0);
                _fun92429_ip = 199;
                continue _fun92429;
            case 188:
                var11 = new Array(1);
                var11[0] = var7;
                var4 = var11;
            case 199:
                var4 = var8.bind(var10)(var3, var5, var4);
                var8 = _closure1_slot7;
                var5 = var8.getUserCount;
                var4 = var9.id;
                var8 = var5.bind(var8)(var4, var7);
                var5 = _closure1_slot16;
                var4 = {};
                var12 = _closure1_slot9;
                var11 = var12.getChannel;
                var13 = var0 == var9;
                var10 = undefined;
                if (var13) {
                    _fun92429_ip = 256;
                    continue _fun92429
                }
            case 251:
                var10 = var9.channel_id;
            case 256:
                var10 = var11.bind(var12)(var10);
                var4.channel = var10;
                var4.guildEvent = var9;
                var4.userCount = var8;
                var9 = _closure1_slot10;
                var8 = var9.getGuild;
                var8 = var8.bind(var9)(var3);
                var4.guild = var8;
                var8 = arg1;
                var4.theme = var8;
                var8 = _closure1_slot14;
                var8 = var8.GUILD;
                var4.type = var8;
                var4.recurrenceId = var7;
                var4 = var5.bind(var6)(var4);
                return var4;
            case 327:
                var4 = _closure1_slot15;
                var4 = var4[var3];
                if (var4) {
                    _fun92429_ip = 414;
                    continue _fun92429
                }
            case 338:
                var5 = _closure1_slot1;
                var7 = _closure1_slot2;
                var4 = 27;
                var4 = var7[var4];
                var5 = var5.bind(var6)(var4);
                var4 = var5.fetchGuildEventsForGuild;
                var6 = var4.bind(var5)(var3);
                var5 = var6.then;
                var4 = function() { // Environment: var2
                    var1 = _closure1_slot15;
                    var0 = _closure2_slot0;
                    var0 = delete var1[var0];
                    return var0;
                };
                var5 = var5.bind(var6)(var4);
                var4 = var5.catch;
                var2 = function() { // Environment: var2
                    var1 = _closure1_slot15;
                    var0 = _closure2_slot0;
                    var0 = delete var1[var0];
                    return var0;
                };
                var2 = var4.bind(var5)(var2);
                var2 = _closure1_slot15;
                var1 = true;
                var2[var3] = var1;
            case 414:
                return var0;
        }
    };
    var2.createGuildScheduledEventLinkEmbed = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 27, 3336, 1416, 1372, 1410, 1621, 11615, 1378, 3337, 10104, 6669, 8193, 8114, 8111, 8205, 1234, 6689, 8387, 6544, 671, 7974, 4784, 8130, 8190, 8203, 12070, 8128, 1598, 2]);