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
    var3 = function(arg0, arg1, arg2) { // Original name: isNewMessageGroup, environment: var1
        _fun77171: for (var _fun77171_ip = 0;;) switch (_fun77171_ip) {
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
                    _fun77171_ip = 52;
                    continue _fun77171
                }
            case 39:
                var0 = var4.isCommandType;
                var0 = var0.bind(var4)();
                var1 = !var0;
            case 52:
                var0 = !var1;
                if (!var1) {
                    _fun77171_ip = 694;
                    continue _fun77171
                }
            case 61:
                var2 = var4.type;
                var1 = _closure1_slot3;
                var1 = var1.DEFAULT;
                if (!(!(var2 > var1))) {
                    _fun77171_ip = 636;
                    continue _fun77171
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
                    _fun77171_ip = 634;
                    continue _fun77171
                }
            case 122:
                var2 = var6.author;
                var5 = var2.id;
                var2 = var4.author;
                var2 = var2.id;
                var2 = var5 !== var2;
                if (var2) {
                    _fun77171_ip = 631;
                    continue _fun77171
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
                    _fun77171_ip = 628;
                    continue _fun77171
                }
            case 206:
                var7 = var4.webhookId;
                var9 = null;
                var7 = var9 != var7;
                if (!var7) {
                    _fun77171_ip = 247;
                    continue _fun77171
                }
            case 221:
                var10 = var6.author;
                var11 = var10.username;
                var10 = var4.author;
                var10 = var10.username;
                var7 = var11 !== var10;
            case 247:
                if (var7) {
                    _fun77171_ip = 625;
                    continue _fun77171
                }
            case 253:
                var9 = var9 == var8;
                if (var9) {
                    _fun77171_ip = 273;
                    continue _fun77171
                }
            case 260:
                var10 = var8.isForumPost;
                var10 = var10.bind(var8)();
                var9 = !var10;
            case 273:
                if (var9) {
                    _fun77171_ip = 321;
                    continue _fun77171
                }
            case 276:
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
            case 321:
                var8 = !var9;
                if (!var9) {
                    _fun77171_ip = 622;
                    continue _fun77171
                }
            case 330:
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
                    _fun77171_ip = 619;
                    continue _fun77171
                }
            case 383:
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
                    _fun77171_ip = 616;
                    continue _fun77171
                }
            case 438:
                var12 = var4.hasFlag;
                var11 = _closure1_slot5;
                var11 = var11.SUPPRESS_NOTIFICATIONS;
                var11 = var12.bind(var4)(var11);
                var11 = !var11;
                if (var11) {
                    _fun77171_ip = 486;
                    continue _fun77171
                }
            case 465:
                var13 = var6.hasFlag;
                var12 = _closure1_slot5;
                var12 = var12.SUPPRESS_NOTIFICATIONS;
                var11 = var13.bind(var6)(var12);
            case 486:
                var11 = !var11;
                if (var11) {
                    _fun77171_ip = 613;
                    continue _fun77171
                }
            case 492:
                var13 = var6.hasFlag;
                var12 = _closure1_slot5;
                var12 = var12.SUPPRESS_NOTIFICATIONS;
                var12 = var13.bind(var6)(var12);
                var12 = !var12;
                if (var12) {
                    _fun77171_ip = 540;
                    continue _fun77171
                }
            case 519:
                var14 = var4.hasFlag;
                var13 = _closure1_slot5;
                var13 = var13.SUPPRESS_NOTIFICATIONS;
                var12 = var14.bind(var4)(var13);
            case 540:
                if (var12) {
                    _fun77171_ip = 590;
                    continue _fun77171
                }
            case 543:
                var13 = var4.mentions;
                var13 = var13.length;
                var15 = 0;
                var13 = var13 > var15;
                if (var13) {
                    _fun77171_ip = 578;
                    continue _fun77171
                }
            case 563:
                var14 = var4.mentionRoles;
                var14 = var14.length;
                var13 = var14 > var15;
            case 578:
                if (var13) {
                    _fun77171_ip = 587;
                    continue _fun77171
                }
            case 581:
                var13 = var4.mentionEveryone;
            case 587:
                var12 = !var13;
            case 590:
                var12 = !var12;
                if (var12) {
                    _fun77171_ip = 610;
                    continue _fun77171
                }
            case 596:
                var14 = var4.applicationId;
                var13 = var6.applicationId;
                var12 = var14 !== var13;
            case 610:
                var11 = var12;
            case 613:
                var10 = var11;
            case 616:
                var9 = var10;
            case 619:
                var8 = var9;
            case 622:
                var7 = var8;
            case 625:
                var5 = var7;
            case 628:
                var2 = var5;
            case 631:
                var1 = var2;
            case 634:
                _fun77171_ip = 691;
                continue _fun77171;
            case 636:
                var7 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 2;
                var2 = var5[var2];
                var5 = undefined;
                var2 = var7.bind(var5)(var2);
                var2 = var2.bind(var5)(var6);
                var2 = !var2;
                if (var2) {
                    _fun77171_ip = 688;
                    continue _fun77171
                }
            case 669:
                var4 = var4.type;
                var3 = _closure1_slot3;
                var3 = var3.REPLY;
                var2 = var4 === var3;
            case 688:
                var1 = var2;
            case 691:
                var0 = var1;
            case 694:
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
    var1 = function(arg0, arg1, arg2) { // Original name: isNewGroupItem, environment: var1
        _fun77172: for (var _fun77172_ip = 0;;) switch (_fun77172_ip) {
            case 0:
                var3 = arg1;
                var0 = null;
                var0 = var0 == var3;
                if (var0) {
                    _fun77172_ip = 141;
                    continue _fun77172
                }
            case 15:
                var2 = var3.type;
                var1 = _closure1_slot4;
                var1 = var1.MESSAGE;
                var1 = var2 === var1;
                if (!var1) {
                    _fun77172_ip = 64;
                    continue _fun77172
                }
            case 40:
                var2 = var3.content;
                var5 = var2.id;
                var2 = var3.content;
                var2 = var2.channel_id;
                var1 = var5 === var2;
            case 64:
                if (var1) {
                    _fun77172_ip = 138;
                    continue _fun77172
                }
            case 67:
                var5 = var3.type;
                var2 = _closure1_slot4;
                var2 = var2.MESSAGE;
                var2 = var5 !== var2;
                if (!var2) {
                    _fun77172_ip = 108;
                    continue _fun77172
                }
            case 89:
                var6 = var3.type;
                var5 = _closure1_slot4;
                var5 = var5.THREAD_STARTER_MESSAGE;
                var2 = var6 !== var5;
            case 108:
                if (var2) {
                    _fun77172_ip = 135;
                    continue _fun77172
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 667, 6631, 21, 3091, 2]);