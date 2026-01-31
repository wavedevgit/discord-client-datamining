// modules/notification_center/getNotificationCenterItemBody.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function(arg0) { // Original name: getFriendRequestItemBody, environment: var1
        _fun103268: for (var _fun103268_ip = 0;;) switch (_fun103268_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.username;
                var1 = var0.applicationId;
                var _closure2_slot0 = var1;
                var2 = var0.renderApplication;
                var _closure2_slot1 = var2;
                var4 = var0.withApplication;
                var3 = var0.withDefault;
                var0 = null;
                if (!(var0 == var1)) {
                    _fun103268_ip = 96;
                    continue _fun103268
                }
            case 47:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 5;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var2 = var0.intl;
                var1 = var2.format;
                var0 = {};
                var0.username = var6;
                var0 = var1.bind(var2)(var3, var0);
                _fun103268_ip = 155;
                continue _fun103268;
            case 96:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 5;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var3 = var1.intl;
                var2 = var3.format;
                var1 = {};
                var1.username = var6;
                var5 = function() { // Original name: applicationName, environment: var5
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var1.applicationName = var5;
                var0 = var2.bind(var3)(var4, var1);
            case 155:
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var3 = 0;
    var7 = var5[var3];
    var0 = undefined;
    var7 = var6.bind(var0)(var7);
    var _closure1_slot3 = var7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.isGuildEventEnded;
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
    var3 = var4.bind(var0)(var3);
    var6 = var3.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot8 = var6;
    var3 = var3.RelationshipTypes;
    var _closure1_slot9 = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/notification_center/getNotificationCenterItemBody.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: getNotificationCenterItemBody, environment: var1
        _fun103270: for (var _fun103270_ip = 0;;) switch (_fun103270_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.item;
                var8 = var0.renderApplication;
                var _closure2_slot0 = var8;
                var7 = undefined;
                var _closure2_slot1 = var7;
                var0 = var1.other_user;
                var2 = null;
                var3 = var2 == var0;
                var6 = undefined;
                if (var3) {
                    _fun103270_ip = 48;
                    continue _fun103270
                }
            case 43:
                var6 = var0.id;
            case 48:
                if (!(var2 == var6)) {
                    _fun103270_ip = 59;
                    continue _fun103270
                }
            case 52:
                var6 = _closure1_slot8;
            case 59:
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var5 = 6;
                var3 = var3[var5];
                var9 = var4.bind(var7)(var3);
                var4 = var9.getName;
                var11 = _closure1_slot7;
                var10 = var11.getUser;
                var12 = var1.other_user;
                var14 = var2 == var12;
                var3 = undefined;
                if (var14) {
                    _fun103270_ip = 118;
                    continue _fun103270
                }
            case 113:
                var3 = var12.id;
            case 118:
                var3 = var10.bind(var11)(var3);
                var10 = var4.bind(var9)(var3);
                var9 = var1.applicationId;
                _closure2_slot1 = var9;
                var4 = var1.type;
                var11 = _closure1_slot0;
                var3 = _closure1_slot2;
                var12 = 7;
                var3 = var3[var12];
                var3 = var11.bind(var7)(var3);
                var3 = var3.NotificationCenterLocalItems;
                var3 = var3.FRIEND_REQUESTS_GROUPED;
                if (!(var3 !== var4)) {
                    _fun103270_ip = 1620;
                    continue _fun103270
                }
            case 181:
                var11 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var12];
                var3 = var11.bind(var7)(var3);
                var3 = var3.NotificationCenterLocalItems;
                var3 = var3.MOBILE_NATIVE_UPDATE_AVAILABLE;
                if (!(var3 !== var4)) {
                    _fun103270_ip = 1534;
                    continue _fun103270
                }
            case 217:
                var11 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var12];
                var3 = var11.bind(var7)(var3);
                var3 = var3.NotificationCenterItems;
                var3 = var3.FRIEND_SUGGESTION_CREATED;
                if (!(var3 !== var4)) {
                    _fun103270_ip = 1418;
                    continue _fun103270
                }
            case 253:
                var11 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var12];
                var3 = var11.bind(var7)(var3);
                var3 = var3.NotificationCenterItems;
                var3 = var3.GUILD_SCHEDULED_EVENT_STARTED;
                if (!(var3 !== var4)) {
                    _fun103270_ip = 1147;
                    continue _fun103270
                }
            case 289:
                var11 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var12];
                var3 = var11.bind(var7)(var3);
                var3 = var3.NotificationCenterLocalItems;
                var3 = var3.INCOMING_FRIEND_REQUESTS;
                if (!(var3 !== var4)) {
                    _fun103270_ip = 1058;
                    continue _fun103270
                }
            case 325:
                var11 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var12];
                var3 = var11.bind(var7)(var3);
                var3 = var3.NotificationCenterLocalItems;
                var3 = var3.INCOMING_FRIEND_REQUESTS_ACCEPTED;
                if (!(var3 !== var4)) {
                    _fun103270_ip = 969;
                    continue _fun103270
                }
            case 361:
                var11 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var12];
                var3 = var11.bind(var7)(var3);
                var3 = var3.NotificationCenterItems;
                var3 = var3.FRIEND_REQUEST_ACCEPTED;
                if (!(var3 !== var4)) {
                    _fun103270_ip = 878;
                    continue _fun103270
                }
            case 397:
                var11 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var12];
                var3 = var11.bind(var7)(var3);
                var3 = var3.NotificationCenterLocalItems;
                var3 = var3.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED;
                if (!(var3 !== var4)) {
                    _fun103270_ip = 745;
                    continue _fun103270
                }
            case 433:
                var11 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var12];
                var3 = var11.bind(var7)(var3);
                var3 = var3.NotificationCenterLocalItems;
                var3 = var3.INCOMING_GAME_FRIEND_REQUESTS;
                if (!(var3 !== var4)) {
                    _fun103270_ip = 612;
                    continue _fun103270
                }
            case 469:
                var11 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var12];
                var3 = var11.bind(var7)(var3);
                var3 = var3.NotificationCenterItems;
                var3 = var3.GAME_FRIEND_REQUEST_ACCEPTED;
                if (!(var3 !== var4)) {
                    _fun103270_ip = 523;
                    continue _fun103270
                }
            case 502:
                var4 = var1.body;
                var11 = var2 != var4;
                var3 = '';
                if (!var11) {
                    _fun103270_ip = 521;
                    continue _fun103270
                }
            case 518:
                var3 = var4;
            case 521:
                return var3;
            case 523:
                if (!(var2 != var9)) {
                    _fun103270_ip = 605;
                    continue _fun103270
                }
            case 527:
                var4 = _closure1_slot0;
                var14 = _closure1_slot2;
                var3 = 5;
                var11 = var14[var3];
                var11 = var4.bind(var7)(var11);
                var12 = var11.intl;
                var11 = var12.format;
                var3 = var14[var3];
                var3 = var4.bind(var7)(var3);
                var3 = var3.t;
                var4 = var3.Wi64vN;
                var3 = {};
                var3.username = var10;
                var14 = function() { // Original name: applicationName, environment: var13
                    var2 = _closure2_slot0;
                    var1 = _closure2_slot1;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var3.applicationName = var14;
                var3 = var11.bind(var12)(var4, var3);
                _fun103270_ip = 610;
                continue _fun103270;
            case 605:
                var3 = var1.body;
            case 610:
                return var3;
            case 612:
                var4 = _closure1_slot1;
                var14 = _closure1_slot2;
                var3 = 9;
                var3 = var14[var3];
                var11 = var4.bind(var7)(var3);
                var4 = var2 != var9;
                var15 = var1.type;
                var3 = global;
                var3 = var3.HermesInternal;
                var12 = var3.concat;
                var3 = 'Expected application id for ';
                var3 = var12.bind(var3)(var15);
                var3 = var11.bind(var7)(var4, var3);
                var4 = _closure1_slot0;
                var3 = 5;
                var11 = var14[var3];
                var11 = var4.bind(var7)(var11);
                var12 = var11.intl;
                var11 = var12.format;
                var3 = var14[var3];
                var3 = var4.bind(var7)(var3);
                var3 = var3.t;
                var4 = var3["7cqOLI"];
                var3 = {};
                var3.username = var10;
                var14 = function() { // Original name: applicationName, environment: var13
                    var2 = _closure2_slot0;
                    var1 = _closure2_slot1;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var3.applicationName = var14;
                var3 = var11.bind(var12)(var4, var3);
                return var3;
            case 745:
                var4 = _closure1_slot1;
                var14 = _closure1_slot2;
                var3 = 9;
                var3 = var14[var3];
                var11 = var4.bind(var7)(var3);
                var4 = var2 != var9;
                var15 = var1.type;
                var3 = global;
                var3 = var3.HermesInternal;
                var12 = var3.concat;
                var3 = 'Expected application id for ';
                var3 = var12.bind(var3)(var15);
                var3 = var11.bind(var7)(var4, var3);
                var4 = _closure1_slot0;
                var3 = 5;
                var11 = var14[var3];
                var11 = var4.bind(var7)(var11);
                var12 = var11.intl;
                var11 = var12.format;
                var3 = var14[var3];
                var3 = var4.bind(var7)(var3);
                var3 = var3.t;
                var4 = var3["BB/0vn"];
                var3 = {};
                var3.username = var10;
                var13 = function() { // Original name: applicationName, environment: var13
                    var2 = _closure2_slot0;
                    var1 = _closure2_slot1;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var3.applicationName = var13;
                var3 = var11.bind(var12)(var4, var3);
                return var3;
            case 878:
                var4 = _closure1_slot10;
                var3 = {};
                var3.username = var10;
                var3.applicationId = var9;
                var3.renderApplication = var8;
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var11 = 5;
                var14 = var13[var11];
                var14 = var12.bind(var7)(var14);
                var14 = var14.t;
                var14 = var14.jXlYiF;
                var3.withApplication = var14;
                var11 = var13[var11];
                var11 = var12.bind(var7)(var11);
                var11 = var11.t;
                var11 = var11.McYRBk;
                var3.withDefault = var11;
                var3 = var4.bind(var7)(var3);
                return var3;
            case 969:
                var4 = _closure1_slot10;
                var3 = {};
                var3.username = var10;
                var3.applicationId = var9;
                var3.renderApplication = var8;
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var11 = 5;
                var14 = var13[var11];
                var14 = var12.bind(var7)(var14);
                var14 = var14.t;
                var14 = var14.nnC1q9;
                var3.withApplication = var14;
                var11 = var13[var11];
                var11 = var12.bind(var7)(var11);
                var11 = var11.t;
                var11 = var11["5Uzkdp"];
                var3.withDefault = var11;
                var3 = var4.bind(var7)(var3);
                return var3;
            case 1058:
                var4 = _closure1_slot10;
                var3 = {};
                var3.username = var10;
                var3.applicationId = var9;
                var3.renderApplication = var8;
                var9 = _closure1_slot0;
                var11 = _closure1_slot2;
                var8 = 5;
                var12 = var11[var8];
                var12 = var9.bind(var7)(var12);
                var12 = var12.t;
                var12 = var12["9Dgf1L"];
                var3.withApplication = var12;
                var8 = var11[var8];
                var8 = var9.bind(var7)(var8);
                var8 = var8.t;
                var8 = var8.uIomXw;
                var3.withDefault = var8;
                var3 = var4.bind(var7)(var3);
                return var3;
            case 1147:
                var9 = var1.guild_scheduled_event_id;
                var3 = var2 != var9;
                var8 = null;
                if (!var3) {
                    _fun103270_ip = 1177;
                    continue _fun103270
                }
            case 1162:
                var4 = _closure1_slot3;
                var3 = var4.getGuildScheduledEvent;
                var8 = var3.bind(var4)(var9);
            case 1177:
                var3 = var2 == var8;
                var12 = undefined;
                if (var3) {
                    _fun103270_ip = 1191;
                    continue _fun103270
                }
            case 1186:
                var12 = var8.name;
            case 1191:
                var9 = _closure1_slot5;
                var4 = var9.getGuild;
                var11 = var2 == var8;
                var3 = undefined;
                if (var11) {
                    _fun103270_ip = 1214;
                    continue _fun103270
                }
            case 1209:
                var3 = var8.guild_id;
            case 1214:
                var3 = var4.bind(var9)(var3);
                var4 = var2 == var3;
                var11 = undefined;
                if (var4) {
                    _fun103270_ip = 1233;
                    continue _fun103270
                }
            case 1228:
                var11 = var3.name;
            case 1233:
                var4 = _closure1_slot4;
                var9 = var2 != var8;
                var3 = undefined;
                if (!var9) {
                    _fun103270_ip = 1249;
                    continue _fun103270
                }
            case 1246:
                var3 = var8;
            case 1249:
                var3 = var4.bind(var7)(var3);
                var8 = _closure1_slot0;
                var4 = _closure1_slot2;
                var9 = 8;
                var4 = var4[var9];
                var8 = var8.bind(var7)(var4);
                var4 = var8.isNullOrEmpty;
                var4 = var4.bind(var8)(var11);
                if (var4) {
                    _fun103270_ip = 1394;
                    continue _fun103270
                }
            case 1288:
                var8 = _closure1_slot0;
                var4 = _closure1_slot2;
                var4 = var4[var9];
                var8 = var8.bind(var7)(var4);
                var4 = var8.isNullOrEmpty;
                var4 = var4.bind(var8)(var12);
                if (var4) {
                    _fun103270_ip = 1394;
                    continue _fun103270
                }
            case 1319:
                if (!var3) {
                    _fun103270_ip = 1394;
                    continue _fun103270
                }
            case 1322:
                var4 = _closure1_slot0;
                var13 = _closure1_slot2;
                var3 = 5;
                var8 = var13[var3];
                var8 = var4.bind(var7)(var8);
                var9 = var8.intl;
                var8 = var9.format;
                var3 = var13[var3];
                var3 = var4.bind(var7)(var3);
                var3 = var3.t;
                var4 = var3.AyvfXR;
                var3 = {};
                var3.event_name = var12;
                var3.guild_name = var11;
                var3 = var8.bind(var9)(var4, var3);
                _fun103270_ip = 1416;
                continue _fun103270;
            case 1394:
                var8 = var1.body;
                var9 = var2 != var8;
                var4 = '';
                if (!var9) {
                    _fun103270_ip = 1413;
                    continue _fun103270
                }
            case 1410:
                var4 = var8;
            case 1413:
                var3 = var4;
            case 1416:
                return var3;
            case 1418:
                var4 = _closure1_slot6;
                var3 = var4.getRelationshipType;
                var4 = var3.bind(var4)(var6);
                var3 = _closure1_slot9;
                var3 = var3.PENDING_OUTGOING;
                if (!(var4 !== var3)) {
                    _fun103270_ip = 1468;
                    continue _fun103270
                }
            case 1447:
                var4 = var1.body;
                var6 = var2 != var4;
                var3 = '';
                if (!var6) {
                    _fun103270_ip = 1466;
                    continue _fun103270
                }
            case 1463:
                var3 = var4;
            case 1466:
                _fun103270_ip = 1532;
                continue _fun103270;
            case 1468:
                var6 = _closure1_slot0;
                var11 = _closure1_slot2;
                var4 = 5;
                var8 = var11[var4];
                var8 = var6.bind(var7)(var8);
                var9 = var8.intl;
                var8 = var9.format;
                var4 = var11[var4];
                var4 = var6.bind(var7)(var4);
                var4 = var4.t;
                var6 = var4.gZVTy2;
                var4 = {};
                var4.user = var10;
                var3 = var8.bind(var9)(var6, var4);
            case 1532:
                return var3;
            case 1534:
                var8 = var1.local_id;
                var4 = var2 == var8;
                var3 = undefined;
                if (var4) {
                    _fun103270_ip = 1573;
                    continue _fun103270
                }
            case 1549:
                var6 = var8.split;
                var4 = '_';
                var6 = var6.bind(var8)(var4);
                var4 = var6.pop;
                var3 = var4.bind(var6)();
            case 1573:
                var4 = var2 != var3;
                var8 = 'unknown';
                if (!var4) {
                    _fun103270_ip = 1587;
                    continue _fun103270
                }
            case 1584:
                var8 = var3;
            case 1587:
                var3 = global;
                var3 = var3.HermesInternal;
                var6 = var3.concat;
                var4 = 'Update to build ';
                var3 = ' available!';
                var3 = var6.bind(var4)(var8, var3);
                return var3;
            case 1620:
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var3 = var3[var5];
                var6 = var4.bind(var7)(var3);
                var4 = var6.getName;
                var9 = _closure1_slot7;
                var8 = var9.getUser;
                var11 = var1.other_users;
                var10 = var2 == var11;
                var3 = undefined;
                if (var10) {
                    _fun103270_ip = 1688;
                    continue _fun103270
                }
            case 1668:
                var10 = 0;
                var10 = var11[var10];
                var11 = var2 == var10;
                var3 = undefined;
                if (var11) {
                    _fun103270_ip = 1688;
                    continue _fun103270
                }
            case 1683:
                var3 = var10.id;
            case 1688:
                var3 = var8.bind(var9)(var3);
                var6 = var4.bind(var6)(var3);
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var3 = var3[var5];
                var5 = var4.bind(var7)(var3);
                var4 = var5.getName;
                var9 = _closure1_slot7;
                var8 = var9.getUser;
                var11 = var1.other_users;
                var10 = var2 == var11;
                var3 = undefined;
                if (var10) {
                    _fun103270_ip = 1767;
                    continue _fun103270
                }
            case 1746:
                var10 = 1;
                var10 = var11[var10];
                var11 = var2 == var10;
                var3 = undefined;
                if (var11) {
                    _fun103270_ip = 1767;
                    continue _fun103270
                }
            case 1762:
                var3 = var10.id;
            case 1767:
                var3 = var8.bind(var9)(var3);
                var5 = var4.bind(var5)(var3);
                var3 = global;
                var4 = var3.Math;
                var3 = var4.max;
                var8 = var1.other_users;
                var9 = var2 == var8;
                var1 = undefined;
                if (var9) {
                    _fun103270_ip = 1810;
                    continue _fun103270
                }
            case 1805:
                var1 = var8.length;
            case 1810:
                var9 = var2 != var1;
                var2 = 0;
                var8 = 0;
                if (!var9) {
                    _fun103270_ip = 1824;
                    continue _fun103270
                }
            case 1821:
                var8 = var1;
            case 1824:
                var1 = 2;
                var1 = var8 - var1;
                var4 = var3.bind(var4)(var1, var2);
                var1 = _closure1_slot0;
                var8 = _closure1_slot2;
                var0 = 5;
                var2 = var8[var0];
                var2 = var1.bind(var7)(var2);
                var3 = var2.intl;
                var2 = var3.format;
                var0 = var8[var0];
                var0 = var1.bind(var7)(var0);
                var0 = var0.t;
                var1 = var0.g5xyIC;
                var0 = {};
                var0.user = var6;
                var0.user2 = var5;
                var0.count = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3293, 1410, 3059, 1613, 660, 1234, 3195, 3930, 1607, 44, 2]);