// modules/icymi/useICYMIItems.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function arg0, arg1, arg2() {
        _fun103919: for (var _fun103919_ip = 0;;) switch (_fun103919_ip) {
            case 0:
                var4 = arg0;
                var7 = arg1;
                var3 = arg2;
                var2 = var7.type;
                var8 = _closure1_slot0;
                var1 = _closure1_slot2;
                var6 = 2;
                var1 = var1[var6];
                var5 = undefined;
                var1 = var8.bind(var5)(var1);
                var1 = var1.ICYMIItemTypes;
                var1 = var1.MESSAGE;
                if (!(var2 !== var1)) {
                    _fun103919_ip = 688;
                    continue _fun103919
                }
            case 58:
                var2 = var7.type;
                var8 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var6];
                var1 = var8.bind(var5)(var1);
                var1 = var1.ICYMIItemTypes;
                var1 = var1.ACTIVITY;
                if (!(var2 !== var1)) {
                    _fun103919_ip = 577;
                    continue _fun103919
                }
            case 99:
                var2 = var7.type;
                var8 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var6];
                var1 = var8.bind(var5)(var1);
                var1 = var1.ICYMIItemTypes;
                var1 = var1.CUSTOM_STATUS;
                if (!(var2 !== var1)) {
                    _fun103919_ip = 577;
                    continue _fun103919
                }
            case 140:
                var2 = var7.type;
                var8 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var6];
                var1 = var8.bind(var5)(var1);
                var1 = var1.ICYMIItemTypes;
                var1 = var1.GUILD_EVENT;
                if (!(var2 !== var1)) {
                    _fun103919_ip = 470;
                    continue _fun103919
                }
            case 181:
                var2 = var7.type;
                var8 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var6];
                var1 = var8.bind(var5)(var1);
                var1 = var1.ICYMIItemTypes;
                var1 = var1.RECOMMENDED_GUILDS;
                if (!(var2 !== var1)) {
                    _fun103919_ip = 372;
                    continue _fun103919
                }
            case 222:
                var2 = var7.type;
                var1 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var6];
                var0 = var1.bind(var5)(var0);
                var0 = var0.ICYMIItemTypes;
                var1 = var0.GENERATED_CANDIDATE;
                var0 = null;
                if (!(var2 === var1)) {
                    _fun103919_ip = 370;
                    continue _fun103919
                }
            case 262:
                var1 = {};
                var2 = var4.id;
                var1.id = var2;
                var2 = global;
                var6 = var2.Date;
                var5 = var6.now;
                var5 = var5.bind(var6)();
                var1.timestamp = var5;
                var5 = {};
                var6 = 'generatedCandidate';
                var5.kind = var6;
                var6 = var7.candidate;
                var5.item = var6;
                var1.data = var5;
                var5 = var4.score;
                var1.score = var5;
                var6 = var2.JSON;
                var5 = var6.stringify;
                var2 = var4.score_components;
                var2 = var5.bind(var6)(var2);
                var1.debugScore = var2;
                var1.unread = var3;
                var0 = var1;
            case 370:
                _fun103919_ip = 468;
                continue _fun103919;
            case 372:
                var1 = {};
                var2 = var4.id;
                var1.id = var2;
                var2 = global;
                var6 = var2.Date;
                var5 = var6.now;
                var5 = var5.bind(var6)();
                var1.timestamp = var5;
                var5 = {};
                var6 = 'recommendedGuilds';
                var5.kind = var6;
                var1.data = var5;
                var5 = var4.score;
                var1.score = var5;
                var6 = var2.JSON;
                var5 = var6.stringify;
                var2 = var4.score_components;
                var2 = var5.bind(var6)(var2);
                var1.debugScore = var2;
                var1.unread = var3;
                var0 = var1;
            case 468:
                _fun103919_ip = 575;
                continue _fun103919;
            case 470:
                var1 = {};
                var2 = var4.id;
                var1.id = var2;
                var2 = global;
                var6 = var2.Date;
                var5 = var6.now;
                var5 = var5.bind(var6)();
                var1.timestamp = var5;
                var5 = {};
                var6 = 'guildEvent';
                var5.kind = var6;
                var6 = var7.event_id;
                var5.eventId = var6;
                var1.data = var5;
                var5 = var4.score;
                var1.score = var5;
                var6 = var2.JSON;
                var5 = var6.stringify;
                var2 = var4.score_components;
                var2 = var5.bind(var6)(var2);
                var1.debugScore = var2;
                var1.unread = var3;
                var0 = var1;
            case 575:
                _fun103919_ip = 683;
                continue _fun103919;
            case 577:
                var1 = {};
                var2 = var4.id;
                var1.id = var2;
                var2 = global;
                var6 = var2.Date;
                var5 = var6.now;
                var5 = var5.bind(var6)();
                var1.timestamp = var5;
                var5 = {};
                var6 = 'contentInventory';
                var5.kind = var6;
                var6 = var7.activity;
                var5.content = var6;
                var1.data = var5;
                var5 = var4.score;
                var1.score = var5;
                var6 = var2.JSON;
                var5 = var6.stringify;
                var2 = var4.score_components;
                var2 = var5.bind(var6)(var2);
                var1.debugScore = var2;
                var1.unread = var3;
                var0 = var1;
            case 683:
                _fun103919_ip = 1015;
                continue _fun103919;
            case 688:
                var1 = var7.message;
                var2 = var1.id;
                var1 = var7.message;
                var1 = var1.channel_id;
                if (!(var2 === var1)) {
                    _fun103919_ip = 727;
                    continue _fun103919
                }
            case 712:
                var2 = var7.threadChannel;
                var1 = null;
                if (!(var1 == var2)) {
                    _fun103919_ip = 880;
                    continue _fun103919
                }
            case 727:
                var1 = {};
                var2 = var4.id;
                var1.id = var2;
                var2 = global;
                var6 = var2.Date;
                var5 = var6.now;
                var5 = var5.bind(var6)();
                var1.timestamp = var5;
                var5 = var4.data;
                var5 = var5.channel_type;
                var1.channelType = var5;
                var5 = {};
                var6 = 'message';
                var5.kind = var6;
                var6 = var7.message;
                var5.message = var6;
                var6 = var4.data;
                var6 = var6.has_mention;
                var5.mentioned = var6;
                var6 = var4.data;
                var6 = var6.message_context;
                var5.messageContext = var6;
                var1.data = var5;
                var5 = var4.score;
                var1.score = var5;
                var6 = var2.JSON;
                var5 = var6.stringify;
                var2 = var4.score_components;
                var2 = var5.bind(var6)(var2);
                var1.debugScore = var2;
                var1.unread = var3;
                _fun103919_ip = 1012;
                continue _fun103919;
            case 880:
                var2 = {};
                var5 = var4.id;
                var2.id = var5;
                var5 = global;
                var8 = var5.Date;
                var6 = var8.now;
                var6 = var6.bind(var8)();
                var2.timestamp = var6;
                var6 = var4.data;
                var6 = var6.channel_type;
                var2.channelType = var6;
                var6 = {};
                var8 = 'forumThread';
                var6.kind = var8;
                var8 = var7.message;
                var6.message = var8;
                var7 = var7.threadChannel;
                var6.threadChannel = var7;
                var2.data = var6;
                var6 = var4.score;
                var2.score = var6;
                var6 = var5.JSON;
                var5 = var6.stringify;
                var4 = var4.score_components;
                var4 = var5.bind(var6)(var4);
                var2.debugScore = var4;
                var2.unread = var3;
                var1 = var2;
            case 1012:
                var0 = var1;
            case 1015:
                return var0;
        }
    };
    var _closure1_slot5 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var7 = var5[var0];
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/icymi/useICYMIItems.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun103920: for (var _fun103920_ip = 0;;) switch (_fun103920_ip) {
            case 0:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var4 = 3;
                var1 = var6[var4];
                var16 = undefined;
                var8 = var5.bind(var16)(var1);
                var7 = var8.useStateFromStores;
                var3 = _closure1_slot4;
                var2 = new Array(1);
                var2[0] = var3;
                var1 = function() { // Environment: var0
                    var1 = _closure1_slot4;
                    var0 = var1.getUnreadDisplayItems;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var1 = var7.bind(var8)(var2, var1);
                var2 = var6[var4];
                var9 = var5.bind(var16)(var2);
                var8 = var9.useStateFromStores;
                var7 = new Array(1);
                var7[0] = var3;
                var2 = function() { // Environment: var0
                    var1 = _closure1_slot4;
                    var0 = var1.getReadDisplayItems;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var15 = var8.bind(var9)(var7, var2);
                var _closure2_slot0 = var15;
                var2 = var6[var4];
                var9 = var5.bind(var16)(var2);
                var8 = var9.useStateFromStores;
                var7 = new Array(1);
                var7[0] = var3;
                var2 = function() { // Environment: var0
                    var1 = _closure1_slot4;
                    var0 = var1.getNextIndexToHydrate;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var2 = var8.bind(var9)(var7, var2);
                var7 = var6[var4];
                var10 = var5.bind(var16)(var7);
                var9 = var10.useStateFromStoresObject;
                var8 = new Array(1);
                var8[0] = var3;
                var7 = function() { // Environment: var0
                    var1 = _closure1_slot4;
                    var0 = var1.getHydratedItems;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var14 = var9.bind(var10)(var8, var7);
                var4 = var6[var4];
                var6 = var5.bind(var16)(var4);
                var5 = var6.useStateFromStores;
                var4 = new Array(1);
                var4[0] = var3;
                var3 = function() { // Environment: var0
                    var1 = _closure1_slot4;
                    var0 = var1.getMissingItems;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var13 = var5.bind(var6)(var4, var3);
                var5 = _closure1_slot3;
                var4 = var5.useEffect;
                var3 = new Array(1);
                var3[0] = var15;
                var0 = function() { // Environment: var0
                    var0 = global;
                    var2 = var0.Date;
                    var0 = var2.now;
                    var2 = var0.bind(var2)();
                    var6 = _closure2_slot0;
                    var0 = var6.length;
                    var0 = var2 + var0;
                    var _closure3_slot0 = var0;
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 4;
                    var2 = var2[var0];
                    var0 = undefined;
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.ackGravityItems;
                    var5 = var6.map;
                    var4 = function(arg0) { // Environment: var1
                        var0 = {};
                        var1 = arg0;
                        var1 = var1.id;
                        var0.id = var1;
                        var1 = _closure3_slot0;
                        var1 = parseFloat(var1);
                        var2 = var1 - 1;
                        _closure3_slot0 = var2;
                        var0.timestamp = var1;
                        return var0;
                    };
                    var1 = true;
                    var1 = var5.bind(var6)(var4, var1);
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var0 = var4.bind(var5)(var0, var3);
                var4 = new Array(0);
                var3 = new Array(0);
                var0 = var1.length;
                var12 = 0;
                var0 = var12 < var0;
                var19 = true;
                var11 = null;
                var10 = 2;
                var18 = 0;
                var8 = 0;
                var7 = undefined;
                var6 = undefined;
                var5 = undefined;
                var9 = 0;
                if (!var0) {
                    _fun103920_ip = 505;
                    continue _fun103920
                }
            case 276:
                var9 = var18;
                if (!(!(var9 >= var2))) {
                    _fun103920_ip = 505;
                    continue _fun103920
                }
            case 286:
                var24 = var1[var8];
                var20 = var18 + 1;
                var0 = var24.id;
                var0 = var13[var0];
                var22 = var7;
                var21 = var5;
                if (var0) {
                    _fun103920_ip = 478;
                    continue _fun103920
                }
            case 314:
                var0 = var24.id;
                var23 = var14[var0];
                var0 = var11 == var23;
                if (!var0) {
                    _fun103920_ip = 368;
                    continue _fun103920
                }
            case 330:
                var26 = var24.type;
                var27 = _closure1_slot0;
                var25 = _closure1_slot2;
                var25 = var25[var10];
                var25 = var27.bind(var16)(var25);
                var25 = var25.ICYMIItemTypes;
                var25 = var25.MESSAGE;
                var0 = var26 === var25;
            case 368:
                if (!var0) {
                    _fun103920_ip = 404;
                    continue _fun103920
                }
            case 371:
                var25 = var24.data;
                var25 = var25.message_context;
                var27 = var11 == var25;
                var26 = undefined;
                if (var27) {
                    _fun103920_ip = 397;
                    continue _fun103920
                }
            case 391:
                var26 = var25.reference_message_id;
            case 397:
                var0 = var11 != var26;
                var7 = var25;
            case 404:
                if (!var0) {
                    _fun103920_ip = 422;
                    continue _fun103920
                }
            case 407:
                var0 = var24.data;
                var0 = var0.message_id;
                var23 = var14[var0];
            case 422:
                var22 = var7;
                var21 = var5;
                var6 = var23;
                if (!(var11 != var6)) {
                    _fun103920_ip = 478;
                    continue _fun103920
                }
            case 435:
                var0 = _closure1_slot5;
                var0 = var0.bind(var16)(var24, var23, var19);
                var22 = var7;
                var6 = var23;
                var21 = var0;
                if (!(var11 != var21)) {
                    _fun103920_ip = 478;
                    continue _fun103920
                }
            case 459:
                var24 = var4.push;
                var24 = var24.bind(var4)(var0);
                var22 = var7;
                var6 = var23;
                var21 = var0;
            case 478:
                var8 = var8 + 1;
                var0 = var1.length;
                var7 = var22;
                var5 = var21;
                var18 = var20;
                var9 = var18;
                if (var8 < var0) {
                    _fun103920_ip = 276;
                    continue _fun103920
                }
            case 505:
                var0 = var15.length;
                var0 = var12 < var0;
                var8 = false;
                var12 = 0;
                var7 = undefined;
                var6 = undefined;
                var5 = undefined;
                if (!var0) {
                    _fun103920_ip = 750;
                    continue _fun103920
                }
            case 530:
                if (!(!(var9 >= var2))) {
                    _fun103920_ip = 750;
                    continue _fun103920
                }
            case 537:
                var21 = var15[var12];
                var9 = var9 + 1;
                var0 = var21.id;
                var0 = var13[var0];
                var19 = var7;
                var18 = var5;
                if (var0) {
                    _fun103920_ip = 729;
                    continue _fun103920
                }
            case 565:
                var0 = var21.id;
                var20 = var14[var0];
                var0 = var11 == var20;
                if (!var0) {
                    _fun103920_ip = 619;
                    continue _fun103920
                }
            case 581:
                var23 = var21.type;
                var24 = _closure1_slot0;
                var22 = _closure1_slot2;
                var22 = var22[var10];
                var22 = var24.bind(var16)(var22);
                var22 = var22.ICYMIItemTypes;
                var22 = var22.MESSAGE;
                var0 = var23 === var22;
            case 619:
                if (!var0) {
                    _fun103920_ip = 655;
                    continue _fun103920
                }
            case 622:
                var22 = var21.data;
                var22 = var22.message_context;
                var24 = var11 == var22;
                var23 = undefined;
                if (var24) {
                    _fun103920_ip = 648;
                    continue _fun103920
                }
            case 642:
                var23 = var22.reference_message_id;
            case 648:
                var0 = var11 != var23;
                var7 = var22;
            case 655:
                if (!var0) {
                    _fun103920_ip = 673;
                    continue _fun103920
                }
            case 658:
                var0 = var21.data;
                var0 = var0.message_id;
                var20 = var14[var0];
            case 673:
                var19 = var7;
                var18 = var5;
                var6 = var20;
                if (!(var11 != var6)) {
                    _fun103920_ip = 729;
                    continue _fun103920
                }
            case 686:
                var0 = _closure1_slot5;
                var0 = var0.bind(var16)(var21, var20, var8);
                var19 = var7;
                var6 = var20;
                var18 = var0;
                if (!(var11 != var18)) {
                    _fun103920_ip = 729;
                    continue _fun103920
                }
            case 710:
                var21 = var3.push;
                var21 = var21.bind(var3)(var0);
                var19 = var7;
                var6 = var20;
                var18 = var0;
            case 729:
                var12 = var12 + 1;
                var0 = var15.length;
                var7 = var19;
                var5 = var18;
                if (var12 < var0) {
                    _fun103920_ip = 530;
                    continue _fun103920
                }
            case 750:
                var0 = {};
                var0.unreadItems = var4;
                var0.readItems = var3;
                var1 = var1.length;
                var1 = var2 >= var1;
                var0.allUnreadItemsHydrated = var1;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 8822, 6583, 566, 8832, 2]);