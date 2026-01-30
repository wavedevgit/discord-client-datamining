// modules/channel/getChannelA11yLabel.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var0 = function(arg0) { // Original name: getPremiumChannelIconAllyLabel, environment: var1
        _fun62501: for (var _fun62501_ip = 0;;) switch (_fun62501_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.isSubscriptionGated;
                var0 = var0.needSubscriptionToAccess;
                if (var1) {
                    _fun62501_ip = 22;
                    continue _fun62501
                }
            case 18:
                var1 = undefined;
                return var1;
            case 22:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 4;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                if (var0) {
                    _fun62501_ip = 89;
                    continue _fun62501
                }
            case 74:
                var0 = var1.xI3TQQ;
                var0 = var2.bind(var3)(var0);
                _fun62501_ip = 102;
                continue _fun62501;
            case 89:
                var1 = var1["oj+HOs"];
                var0 = var2.bind(var3)(var1);
            case 102:
                return var0;
        }
    };
    var _closure1_slot7 = var0;
    var3 = function(arg0) { // Original name: getStatusLabel, environment: var1
        _fun62502: for (var _fun62502_ip = 0;;) switch (_fun62502_ip) {
            case 0:
                var2 = arg0;
                var1 = _closure1_slot6;
                var1 = var1.ONLINE;
                if (!(var1 !== var2)) {
                    _fun62502_ip = 209;
                    continue _fun62502
                }
            case 23:
                var1 = _closure1_slot6;
                var1 = var1.IDLE;
                if (!(var1 !== var2)) {
                    _fun62502_ip = 164;
                    continue _fun62502
                }
            case 40:
                var1 = _closure1_slot6;
                var1 = var1.DND;
                if (!(var1 !== var2)) {
                    _fun62502_ip = 119;
                    continue _fun62502
                }
            case 54:
                var1 = _closure1_slot6;
                var1 = var1.INVISIBLE;
                if (!(var1 !== var2)) {
                    _fun62502_ip = 74;
                    continue _fun62502
                }
            case 68:
                var1 = '';
                return var1;
            case 74:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 6;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.humanizeStatus;
                var1 = _closure1_slot6;
                var1 = var1.INVISIBLE;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 119:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 6;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.humanizeStatus;
                var1 = _closure1_slot6;
                var1 = var1.DND;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 164:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 6;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.humanizeStatus;
                var1 = _closure1_slot6;
                var1 = var1.IDLE;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 209:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 6;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.humanizeStatus;
                var0 = _closure1_slot6;
                var0 = var0.ONLINE;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var _closure1_slot8 = var3;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var5.bind(var0)(var4);
    var4 = var4.THREAD_CHANNEL_TYPES;
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.ChannelTypes;
    var _closure1_slot5 = var7;
    var4 = var4.StatusTypes;
    var _closure1_slot6 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/channel/getChannelA11yLabel.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function(arg0) { // Original name: getChannelA11yLabel, environment: var1
        _fun62503: for (var _fun62503_ip = 0;;) switch (_fun62503_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.channel;
                var1 = var0.unread;
                var3 = undefined;
                if (!(var1 === var3)) {
                    _fun62503_ip = 22;
                    continue _fun62503
                }
            case 20:
                var1 = false;
            case 22:
                var8 = var0.mentionCount;
                if (!(var8 === var3)) {
                    _fun62503_ip = 34;
                    continue _fun62503
                }
            case 32:
                var8 = 0;
            case 34:
                var19 = var0.userCount;
                var15 = var0.embeddedActivitiesCount;
                var5 = var0.isSubscriptionGated;
                var4 = var0.needSubscriptionToAccess;
                var7 = _closure1_slot0;
                var9 = _closure1_slot1;
                var2 = 5;
                var2 = var9[var2];
                var10 = var7.bind(var3)(var2);
                var9 = var10.computeChannelName;
                var7 = _closure1_slot4;
                var2 = _closure1_slot3;
                var9 = var9.bind(var10)(var6, var7, var2);
                var7 = var6.type;
                var2 = _closure1_slot5;
                var2 = var2.DM;
                if (!(var2 !== var7)) {
                    _fun62503_ip = 1217;
                    continue _fun62503
                }
            case 124:
                var2 = _closure1_slot5;
                var2 = var2.GROUP_DM;
                if (!(var2 !== var7)) {
                    _fun62503_ip = 1166;
                    continue _fun62503
                }
            case 141:
                var2 = _closure1_slot5;
                var2 = var2.GUILD_STORE;
                if (!(var2 !== var7)) {
                    _fun62503_ip = 1131;
                    continue _fun62503
                }
            case 158:
                var2 = _closure1_slot5;
                var2 = var2.GUILD_DIRECTORY;
                if (!(var2 !== var7)) {
                    _fun62503_ip = 1093;
                    continue _fun62503
                }
            case 175:
                var2 = _closure1_slot5;
                var2 = var2.GUILD_ANNOUNCEMENT;
                if (!(var2 !== var7)) {
                    _fun62503_ip = 998;
                    continue _fun62503
                }
            case 192:
                var2 = _closure1_slot5;
                var2 = var2.GUILD_VOICE;
                if (!(var2 !== var7)) {
                    _fun62503_ip = 466;
                    continue _fun62503
                }
            case 209:
                var2 = _closure1_slot5;
                var2 = var2.GUILD_STAGE_VOICE;
                if (!(var2 !== var7)) {
                    _fun62503_ip = 430;
                    continue _fun62503
                }
            case 226:
                var10 = _closure1_slot2;
                var7 = var10.has;
                var2 = var6.type;
                var7 = var7.bind(var10)(var2);
                var2 = 0;
                if (var7) {
                    _fun62503_ip = 337;
                    continue _fun62503
                }
            case 250:
                if (!(!(var8 > var2))) {
                    _fun62503_ip = 302;
                    continue _fun62503
                }
            case 254:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var7 = 4;
                var7 = var11[var7];
                var7 = var10.bind(var3)(var7);
                var10 = var7.t;
                if (var1) {
                    _fun62503_ip = 292;
                    continue _fun62503
                }
            case 282:
                var7 = var10.s0JADj;
                _fun62503_ip = 300;
                continue _fun62503;
            case 292:
                var7 = var10.smf1CZ;
            case 300:
                _fun62503_ip = 335;
                continue _fun62503;
            case 302:
                var11 = _closure1_slot0;
                var12 = _closure1_slot1;
                var10 = 4;
                var10 = var12[var10];
                var10 = var11.bind(var3)(var10);
                var10 = var10.t;
                var7 = var10.g8ONM0;
            case 335:
                _fun62503_ip = 425;
                continue _fun62503;
            case 337:
                if (!(!(var8 > var2))) {
                    _fun62503_ip = 389;
                    continue _fun62503
                }
            case 341:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var2 = 4;
                var2 = var11[var2];
                var2 = var10.bind(var3)(var2);
                var10 = var2.t;
                if (var1) {
                    _fun62503_ip = 379;
                    continue _fun62503
                }
            case 369:
                var2 = var10["0nZpiF"];
                _fun62503_ip = 387;
                continue _fun62503;
            case 379:
                var2 = var10.YlVvmc;
            case 387:
                _fun62503_ip = 422;
                continue _fun62503;
            case 389:
                var11 = _closure1_slot0;
                var12 = _closure1_slot1;
                var10 = 4;
                var10 = var12[var10];
                var10 = var11.bind(var3)(var10);
                var10 = var10.t;
                var2 = var10["ZL7+I6"];
            case 422:
                var7 = var2;
            case 425:
                _fun62503_ip = 1264;
                continue _fun62503;
            case 430:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var2 = 4;
                var2 = var11[var2];
                var2 = var10.bind(var3)(var2);
                var2 = var2.t;
                var7 = var2.TPPk2T;
                _fun62503_ip = 1264;
                continue _fun62503;
            case 466:
                var10 = _closure1_slot0;
                var2 = _closure1_slot1;
                var16 = 4;
                var11 = var2[var16];
                var11 = var10.bind(var3)(var11);
                var12 = var11.intl;
                var11 = var12.formatToPlainString;
                var2 = var2[var16];
                var2 = var10.bind(var3)(var2);
                var2 = var2.t;
                var10 = var2.bkpadO;
                var2 = {};
                var2.channelName = var9;
                var2 = var11.bind(var12)(var10, var2);
                var10 = new Array(1);
                var10[0] = var2;
                var11 = 0;
                if (!(var8 > var11)) {
                    _fun62503_ip = 617;
                    continue _fun62503
                }
            case 545:
                var12 = var10.push;
                var13 = _closure1_slot0;
                var2 = _closure1_slot1;
                var14 = var2[var16];
                var14 = var13.bind(var3)(var14);
                var17 = var14.intl;
                var14 = var17.formatToPlainString;
                var2 = var2[var16];
                var2 = var13.bind(var3)(var2);
                var2 = var2.t;
                var13 = var2["3l1GOx"];
                var2 = {};
                var2.mentionCount = var8;
                var2 = var14.bind(var17)(var13, var2);
                var2 = var12.bind(var10)(var2);
            case 617:
                if (!var1) {
                    _fun62503_ip = 684;
                    continue _fun62503
                }
            case 620:
                var12 = var10.push;
                var17 = _closure1_slot0;
                var2 = _closure1_slot1;
                var13 = var2[var16];
                var13 = var17.bind(var3)(var13);
                var14 = var13.intl;
                var13 = var14.string;
                var2 = var2[var16];
                var2 = var17.bind(var3)(var2);
                var2 = var2.t;
                var2 = var2.x5zAGZ;
                var2 = var13.bind(var14)(var2);
                var2 = var12.bind(var10)(var2);
            case 684:
                var2 = null;
                if (!(var2 != var19)) {
                    _fun62503_ip = 857;
                    continue _fun62503
                }
            case 693:
                var18 = var6.userLimit;
                if (!(var2 != var18)) {
                    _fun62503_ip = 707;
                    continue _fun62503
                }
            case 703:
                if (!(!(var18 > var11))) {
                    _fun62503_ip = 781;
                    continue _fun62503
                }
            case 707:
                var12 = var10.push;
                var13 = _closure1_slot0;
                var6 = _closure1_slot1;
                var14 = var6[var16];
                var14 = var13.bind(var3)(var14);
                var17 = var14.intl;
                var14 = var17.formatToPlainString;
                var6 = var6[var16];
                var6 = var13.bind(var3)(var6);
                var6 = var6.t;
                var13 = var6.GNIiAA;
                var6 = {};
                var6.userCount = var19;
                var6 = var14.bind(var17)(var13, var6);
                var6 = var12.bind(var10)(var6);
                _fun62503_ip = 857;
                continue _fun62503;
            case 781:
                var12 = var10.push;
                var13 = _closure1_slot0;
                var6 = _closure1_slot1;
                var14 = var6[var16];
                var14 = var13.bind(var3)(var14);
                var17 = var14.intl;
                var14 = var17.formatToPlainString;
                var6 = var6[var16];
                var6 = var13.bind(var3)(var6);
                var6 = var6.t;
                var13 = var6["6qgTOF"];
                var6 = {};
                var6.userCount = var19;
                var6.limit = var18;
                var6 = var14.bind(var17)(var13, var6);
                var6 = var12.bind(var10)(var6);
            case 857:
                var6 = var2 != var15;
                if (!var6) {
                    _fun62503_ip = 868;
                    continue _fun62503
                }
            case 864:
                var6 = var15 > var11;
            case 868:
                if (!var6) {
                    _fun62503_ip = 945;
                    continue _fun62503
                }
            case 871:
                var11 = var10.push;
                var12 = _closure1_slot0;
                var6 = _closure1_slot1;
                var13 = var6[var16];
                var13 = var12.bind(var3)(var13);
                var14 = var13.intl;
                var13 = var14.formatToPlainString;
                var6 = var6[var16];
                var6 = var12.bind(var3)(var6);
                var6 = var6.t;
                var12 = var6.O6PLYd;
                var6 = {};
                var6.activitiesCount = var15;
                var6 = var13.bind(var14)(var12, var6);
                var6 = var11.bind(var10)(var6);
            case 945:
                var11 = _closure1_slot7;
                var6 = {};
                var6.isSubscriptionGated = var5;
                var6.needSubscriptionToAccess = var4;
                var6 = var11.bind(var3)(var6);
                if (!(var2 != var6)) {
                    _fun62503_ip = 980;
                    continue _fun62503
                }
            case 970:
                var2 = var10.push;
                var2 = var2.bind(var10)(var6);
            case 980:
                var6 = var10.join;
                var2 = ', ';
                var2 = var6.bind(var10)(var2);
                return var2;
            case 998:
                var2 = 0;
                if (!(!(var8 > var2))) {
                    _fun62503_ip = 1052;
                    continue _fun62503
                }
            case 1004:
                var6 = _closure1_slot0;
                var10 = _closure1_slot1;
                var2 = 4;
                var2 = var10[var2];
                var2 = var6.bind(var3)(var2);
                var6 = var2.t;
                if (var1) {
                    _fun62503_ip = 1042;
                    continue _fun62503
                }
            case 1032:
                var2 = var6.WJ3MPt;
                _fun62503_ip = 1050;
                continue _fun62503;
            case 1042:
                var2 = var6.VM7z8f;
            case 1050:
                _fun62503_ip = 1085;
                continue _fun62503;
            case 1052:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var6 = 4;
                var6 = var11[var6];
                var6 = var10.bind(var3)(var6);
                var6 = var6.t;
                var2 = var6.sDKIpm;
            case 1085:
                var7 = var2;
                _fun62503_ip = 1264;
                continue _fun62503;
            case 1093:
                var6 = _closure1_slot0;
                var10 = _closure1_slot1;
                var2 = 4;
                var2 = var10[var2];
                var2 = var6.bind(var3)(var2);
                var2 = var2.t;
                var7 = var2["92EAF2"];
                _fun62503_ip = 1264;
                continue _fun62503;
            case 1131:
                var6 = _closure1_slot0;
                var10 = _closure1_slot1;
                var2 = 4;
                var2 = var10[var2];
                var2 = var6.bind(var3)(var2);
                var2 = var2.t;
                var7 = var2.Bo4msg;
                _fun62503_ip = 1264;
                continue _fun62503;
            case 1166:
                var6 = _closure1_slot0;
                var10 = _closure1_slot1;
                var2 = 4;
                var2 = var10[var2];
                var2 = var6.bind(var3)(var2);
                var6 = var2.t;
                if (var1) {
                    _fun62503_ip = 1204;
                    continue _fun62503
                }
            case 1194:
                var2 = var6.lts3Ld;
                _fun62503_ip = 1212;
                continue _fun62503;
            case 1204:
                var2 = var6["fxxUo/"];
            case 1212:
                var7 = var2;
                _fun62503_ip = 1264;
                continue _fun62503;
            case 1217:
                var6 = _closure1_slot0;
                var10 = _closure1_slot1;
                var2 = 4;
                var2 = var10[var2];
                var2 = var6.bind(var3)(var2);
                var2 = var2.t;
                if (var1) {
                    _fun62503_ip = 1253;
                    continue _fun62503
                }
            case 1245:
                var1 = var2.fYqXVY;
                _fun62503_ip = 1261;
                continue _fun62503;
            case 1253:
                var1 = var2.F2MZsu;
            case 1261:
                var7 = var1;
            case 1264:
                var2 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 4;
                var1 = var6[var1];
                var1 = var2.bind(var3)(var1);
                var6 = var1.intl;
                var2 = var6.formatToPlainString;
                var1 = {};
                var1.channelName = var9;
                var1.mentionCount = var8;
                var1 = var2.bind(var6)(var7, var1);
                var2 = new Array(1);
                var2[0] = var1;
                var1 = _closure1_slot7;
                var0 = {};
                var0.isSubscriptionGated = var5;
                var0.needSubscriptionToAccess = var4;
                var1 = var1.bind(var3)(var0);
                var0 = null;
                if (!(var0 != var1)) {
                    _fun62503_ip = 1357;
                    continue _fun62503
                }
            case 1347:
                var0 = var2.push;
                var0 = var0.bind(var2)(var1);
            case 1357:
                var1 = var2.join;
                var0 = ', ';
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.default = var4;
    var2.getStatusLabel = var3;
    var1 = function(arg0) { // Original name: getChannelA11yHint, environment: var1
        _fun62504: for (var _fun62504_ip = 0;;) switch (_fun62504_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.channel;
                var2 = var1.muted;
                var4 = var1.userStatus;
                var1 = true;
                if (!(var1 !== var2)) {
                    _fun62504_ip = 113;
                    continue _fun62504
                }
            case 26:
                var3 = new Array(0);
                var2 = var0.type;
                var1 = _closure1_slot5;
                var1 = var1.DM;
                if (!(var2 === var1)) {
                    _fun62504_ip = 79;
                    continue _fun62504
                }
            case 52:
                var1 = null;
                if (!(var1 != var4)) {
                    _fun62504_ip = 79;
                    continue _fun62504
                }
            case 58:
                var1 = var3.push;
                var2 = _closure1_slot8;
                var0 = undefined;
                var0 = var2.bind(var0)(var4);
                var0 = var1.bind(var3)(var0);
            case 79:
                var1 = var3.length;
                var0 = 0;
                var1 = var1 > var0;
                var0 = undefined;
                if (!var1) {
                    _fun62504_ip = 111;
                    continue _fun62504
                }
            case 95:
                var2 = var3.join;
                var1 = ', ';
                var0 = var2.bind(var3)(var1);
            case 111:
                return var0;
            case 113:
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 4;
                var1 = var5[var0];
                var3 = undefined;
                var1 = var4.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var5[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0.C4zCMb;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.getChannelA11yHint = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1376, 3059, 1613, 660, 1234, 4754, 3195, 2]);