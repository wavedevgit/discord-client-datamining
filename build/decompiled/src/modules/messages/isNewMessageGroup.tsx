// modules/messages/isNewMessageGroup.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var3 = function arg0, arg1, arg2() {
        _fun78010: for (var _fun78010_ip = 0;;) switch (_fun78010_ip) {
            case 0:
                var8 = arg0;
                var6 = arg1;
                var4 = arg2;
                var1 = var4.hasFlag;
                var0 = _closure1_slot5;
                var0 = var0.HAS_THREAD;
                var0 = var1.bind(var4)(var0);
                var1 = !var0;
                if (!var1) {
                    _fun78010_ip = 52;
                    continue _fun78010
                }
            case 39:
                var0 = var4.isCommandType;
                var0 = var0.bind(var4)();
                var1 = !var0;
            case 52:
                var0 = !var1;
                if (!var1) {
                    _fun78010_ip = 696;
                    continue _fun78010
                }
            case 61:
                var2 = var4.type;
                var1 = _closure1_slot3;
                var1 = var1.DEFAULT;
                if (!(!(var2 > var1))) {
                    _fun78010_ip = 638;
                    continue _fun78010
                }
            case 83:
                var2 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 2;
                var1 = var5[var1];
                var12 = undefined;
                var1 = var2.bind(var12)(var1);
                var1 = var1.bind(var12)(var6);
                var2 = !var1;
                var1 = !var2;
                if (!var2) {
                    _fun78010_ip = 636;
                    continue _fun78010
                }
            case 122:
                var2 = var6.author;
                var5 = var2.id;
                var2 = var4.author;
                var2 = var2.id;
                var2 = var5 !== var2;
                if (var2) {
                    _fun78010_ip = 633;
                    continue _fun78010
                }
            case 154:
                var7 = var6.hasFlag;
                var5 = _closure1_slot5;
                var5 = var5.EPHEMERAL;
                var7 = var7.bind(var6)(var5);
                var9 = var4.hasFlag;
                var5 = _closure1_slot5;
                var5 = var5.EPHEMERAL;
                var5 = var9.bind(var4)(var5);
                var5 = var7 !== var5;
                if (var5) {
                    _fun78010_ip = 630;
                    continue _fun78010
                }
            case 206:
                var7 = var4.webhookId;
                var9 = null;
                var7 = var9 != var7;
                if (!var7) {
                    _fun78010_ip = 249;
                    continue _fun78010
                }
            case 221:
                var10 = var6.author;
                var11 = var10.username;
                var10 = var4.author;
                var10 = var10.username;
                var7 = var11 !== var10;
            case 249:
                if (var7) {
                    _fun78010_ip = 627;
                    continue _fun78010
                }
            case 255:
                var9 = var9 == var8;
                if (var9) {
                    _fun78010_ip = 275;
                    continue _fun78010
                }
            case 262:
                var10 = var8.isForumPost;
                var10 = var10.bind(var8)();
                var9 = !var10;
            case 275:
                if (var9) {
                    _fun78010_ip = 323;
                    continue _fun78010
                }
            case 278:
                var10 = var6.id;
                var13 = _closure1_slot1;
                var14 = _closure1_slot2;
                var11 = 3;
                var11 = var14[var11];
                var13 = var13.bind(var12)(var11);
                var11 = var13.castChannelIdAsMessageId;
                var8 = var8.id;
                var8 = var11.bind(var13)(var8);
                var9 = var10 !== var8;
            case 323:
                var8 = !var9;
                if (!var9) {
                    _fun78010_ip = 624;
                    continue _fun78010
                }
            case 332:
                var10 = _closure1_slot0;
                var9 = _closure1_slot2;
                var13 = 4;
                var9 = var9[var13];
                var14 = var10.bind(var12)(var9);
                var11 = var14.isSameDay;
                var10 = var6.timestamp;
                var9 = var4.timestamp;
                var9 = var11.bind(var14)(var10, var9);
                var9 = !var9;
                if (var9) {
                    _fun78010_ip = 621;
                    continue _fun78010
                }
            case 385:
                var11 = _closure1_slot0;
                var10 = _closure1_slot2;
                var10 = var10[var13];
                var14 = var11.bind(var12)(var10);
                var13 = var14.isWithinInterval;
                var12 = var6.timestamp;
                var11 = var4.timestamp;
                var10 = _closure1_slot6;
                var10 = var13.bind(var14)(var12, var11, var10);
                var10 = !var10;
                if (var10) {
                    _fun78010_ip = 618;
                    continue _fun78010
                }
            case 440:
                var12 = var4.hasFlag;
                var11 = _closure1_slot5;
                var11 = var11.SUPPRESS_NOTIFICATIONS;
                var11 = var12.bind(var4)(var11);
                var11 = !var11;
                if (var11) {
                    _fun78010_ip = 488;
                    continue _fun78010
                }
            case 467:
                var13 = var6.hasFlag;
                var12 = _closure1_slot5;
                var12 = var12.SUPPRESS_NOTIFICATIONS;
                var11 = var13.bind(var6)(var12);
            case 488:
                var11 = !var11;
                if (var11) {
                    _fun78010_ip = 615;
                    continue _fun78010
                }
            case 494:
                var13 = var6.hasFlag;
                var12 = _closure1_slot5;
                var12 = var12.SUPPRESS_NOTIFICATIONS;
                var12 = var13.bind(var6)(var12);
                var12 = !var12;
                if (var12) {
                    _fun78010_ip = 542;
                    continue _fun78010
                }
            case 521:
                var14 = var4.hasFlag;
                var13 = _closure1_slot5;
                var13 = var13.SUPPRESS_NOTIFICATIONS;
                var12 = var14.bind(var4)(var13);
            case 542:
                if (var12) {
                    _fun78010_ip = 592;
                    continue _fun78010
                }
            case 545:
                var13 = var4.mentions;
                var13 = var13.length;
                var15 = 0;
                var13 = var13 > var15;
                if (var13) {
                    _fun78010_ip = 580;
                    continue _fun78010
                }
            case 565:
                var14 = var4.mentionRoles;
                var14 = var14.length;
                var13 = var14 > var15;
            case 580:
                if (var13) {
                    _fun78010_ip = 589;
                    continue _fun78010
                }
            case 583:
                var13 = var4.mentionEveryone;
            case 589:
                var12 = !var13;
            case 592:
                var12 = !var12;
                if (var12) {
                    _fun78010_ip = 612;
                    continue _fun78010
                }
            case 598:
                var14 = var4.applicationId;
                var13 = var6.applicationId;
                var12 = var14 !== var13;
            case 612:
                var11 = var12;
            case 615:
                var10 = var11;
            case 618:
                var9 = var10;
            case 621:
                var8 = var9;
            case 624:
                var7 = var8;
            case 627:
                var5 = var7;
            case 630:
                var2 = var5;
            case 633:
                var1 = var2;
            case 636:
                _fun78010_ip = 693;
                continue _fun78010;
            case 638:
                var7 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 2;
                var2 = var5[var2];
                var5 = undefined;
                var2 = var7.bind(var5)(var2);
                var2 = var2.bind(var5)(var6);
                var2 = !var2;
                if (var2) {
                    _fun78010_ip = 690;
                    continue _fun78010
                }
            case 671:
                var4 = var4.type;
                var3 = _closure1_slot3;
                var3 = var3.REPLY;
                var2 = var4 === var3;
            case 690:
                var1 = var2;
            case 693:
                var0 = var1;
            case 696:
                return var0;
        }
    };
    var _closure1_slot7 = var3;
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
    var8 = var4.MessageTypes;
    var _closure1_slot3 = var8;
    var8 = var4.ChannelStreamTypes;
    var _closure1_slot4 = var8;
    var4 = var4.MessageFlags;
    var _closure1_slot5 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var4 = var4.Millis;
    var7 = var4.MINUTE;
    var4 = 7;
    var4 = var4 * var7;
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/isNewMessageGroup.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var1 = function arg0, arg1, arg2() {
        _fun78011: for (var _fun78011_ip = 0;;) switch (_fun78011_ip) {
            case 0:
                var3 = arg1;
                var0 = null;
                var0 = var0 == var3;
                if (var0) {
                    _fun78011_ip = 141;
                    continue _fun78011
                }
            case 15:
                var2 = var3.type;
                var1 = _closure1_slot4;
                var1 = var1.MESSAGE;
                var1 = var2 === var1;
                if (!var1) {
                    _fun78011_ip = 64;
                    continue _fun78011
                }
            case 40:
                var2 = var3.content;
                var5 = var2.id;
                var2 = var3.content;
                var2 = var2.channel_id;
                var1 = var5 === var2;
            case 64:
                if (var1) {
                    _fun78011_ip = 138;
                    continue _fun78011
                }
            case 67:
                var5 = var3.type;
                var2 = _closure1_slot4;
                var2 = var2.MESSAGE;
                var2 = var5 !== var2;
                if (!var2) {
                    _fun78011_ip = 108;
                    continue _fun78011
                }
            case 89:
                var6 = var3.type;
                var5 = _closure1_slot4;
                var5 = var5.THREAD_STARTER_MESSAGE;
                var2 = var6 !== var5;
            case 108:
                if (var2) {
                    _fun78011_ip = 135;
                    continue _fun78011
                }
            case 111:
                var7 = _closure1_slot7;
                var6 = var3.content;
                var5 = undefined;
                var4 = arg0;
                var3 = arg2;
                var2 = var7.bind(var5)(var4, var6, var3);
            case 135:
                var1 = var2;
            case 138:
                var0 = var1;
            case 141:
                return var0;
        }
    };
    var2.isNewGroupItem = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 667, 6752, 21, 3139, 2]);