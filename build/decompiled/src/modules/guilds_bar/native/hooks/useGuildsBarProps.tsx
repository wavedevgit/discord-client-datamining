// modules/guilds_bar/native/hooks/useGuildsBarProps.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var9 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var5;
    var0 = function arg0, arg1() {
        _fun101584: for (var _fun101584_ip = 0;;) switch (_fun101584_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun101584_ip = 46;
                    continue _fun101584
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun101584_ip = 55;
                    continue _fun101584
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun101584_ip = 345;
                    continue _fun101584
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun101584_ip = 323;
                    continue _fun101584
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun101584_ip = 283;
                    continue _fun101584
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun101584_ip = 270;
                    continue _fun101584
                }
            case 110:
                var6 = {};
                var8 = var6.toString;
                var6 = var8.call;
                var10 = var6.bind(var8)(var2);
                var9 = var10.slice;
                var8 = 8;
                var6 = -1;
                var8 = var9.bind(var10)(var8, var6);
                var6 = 'Object';
                var6 = var6 === var8;
                if (!var6) {
                    _fun101584_ip = 163;
                    continue _fun101584
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun101584_ip = 179;
                    continue _fun101584
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun101584_ip = 249;
                    continue _fun101584
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun101584_ip = 249;
                    continue _fun101584
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun101584_ip = 234;
                    continue _fun101584
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun101584_ip = 247;
                    continue _fun101584
                }
            case 234:
                var8 = _closure1_slot27;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun101584_ip = 265;
                continue _fun101584;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun101584_ip = 283;
                continue _fun101584;
            case 270:
                var6 = _closure1_slot27;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun101584_ip = 323;
                    continue _fun101584
                }
            case 289:
                var6 = var4.TypeError;
                var4 = var6.prototype;
                var5 = Object.create(var4, {
                    constructor: {
                        value: var6
                    }
                });
                var12 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
                var13 = var5;
                var4 = new var13[var6](var12, var11);
                var4 = var4 instanceof Object ? var4 : var5;
                throw var4;
            case 323:
                if (!var3) {
                    _fun101584_ip = 330;
                    continue _fun101584
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun101585: for (var _fun101585_ip = 0;;) switch (_fun101585_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun101585_ip = 56;
                                continue _fun101585
                            }
                        case 20:
                            var0 = {};
                            var1 = false;
                            var0.done = var1;
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot1;
                            var1 = parseFloat(var1);
                            var3 = var1 + 1;
                            _closure2_slot1 = var3;
                            var1 = var2[var1];
                            var0.value = var1;
                            _fun101585_ip = 67;
                            continue _fun101585;
                        case 56:
                            var1 = {};
                            var2 = true;
                            var1.done = var2;
                            var0 = var1;
                        case 67:
                            return var0;
                    }
                };
                return var0;
            case 345:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot26 = var0;
    var0 = function arg0, arg1() {
        _fun101586: for (var _fun101586_ip = 0;;) switch (_fun101586_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun101586_ip = 23;
                    continue _fun101586
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun101586_ip = 33;
                    continue _fun101586
                }
            case 28:
                var1 = var3.length;
            case 33:
                var0 = global;
                var0 = var0.Array;
                var0 = var0.bind(var2)(var1);
                var2 = 0;
                var4 = var2 < var1;
                if (!var4) {
                    _fun101586_ip = 70;
                    continue _fun101586
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun101586_ip = 55;
                    continue _fun101586
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot27 = var0;
    var0 = function arg0() {
        _fun101587: for (var _fun101587_ip = 0;;) switch (_fun101587_ip) {
            case 0:
                var15 = arg0;
                var1 = _closure1_slot26;
                var2 = _closure1_slot14;
                var0 = var2.getFastListGuildFolders;
                var0 = var0.bind(var2)();
                var14 = undefined;
                var13 = var1.bind(var14)(var0);
                var4 = var13.bind(var14)();
                var0 = var4.done;
                var9 = -1;
                var8 = false;
                var10 = var4;
                var7 = undefined;
                var6 = undefined;
                var5 = undefined;
                var4 = var9;
                var2 = 0;
                var1 = false;
                if (var0) {
                    _fun101587_ip = 344;
                    continue _fun101587
                }
            case 70:
                var23 = var10.value;
                var18 = var9 + 1;
                var16 = var23.type;
                var0 = _closure1_slot15;
                var0 = var0.GUILD;
                if (!(var16 === var0)) {
                    _fun101587_ip = 116;
                    continue _fun101587
                }
            case 97:
                var0 = var23.id;
                var4 = var18;
                var2 = 0;
                var1 = true;
                if (!(var0 !== var15)) {
                    _fun101587_ip = 344;
                    continue _fun101587
                }
            case 116:
                var20 = var23.type;
                var0 = _closure1_slot15;
                var0 = var0.FOLDER;
                var17 = 0;
                var16 = var8;
                var19 = var5;
                if (!(var20 === var0)) {
                    _fun101587_ip = 296;
                    continue _fun101587
                }
            case 146:
                var20 = _closure1_slot26;
                var0 = var23.children;
                var20 = var20.bind(var14)(var0);
                var21 = var20.bind(var14)();
                var0 = var21.done;
                var26 = 0;
                var25 = var21;
                var17 = 0;
                var16 = var8;
                var7 = var25;
                var6 = var20;
                var19 = var5;
                if (var0) {
                    _fun101587_ip = 296;
                    continue _fun101587
                }
            case 191:
                var0 = var25.value;
                var27 = var0.type;
                var21 = _closure1_slot15;
                var24 = var21.GUILD;
                var22 = var26;
                var21 = var25;
                var28 = var22;
                if (!(var27 === var24)) {
                    _fun101587_ip = 236;
                    continue _fun101587
                }
            case 224:
                var24 = var0.id;
                if (!(var24 !== var15)) {
                    _fun101587_ip = 271;
                    continue _fun101587
                }
            case 233:
                var28 = var22 + 1;
            case 236:
                var27 = var20.bind(var14)();
                var24 = var27.done;
                var26 = var28;
                var25 = var27;
                var17 = var26;
                var16 = var8;
                var7 = var25;
                var6 = var20;
                var19 = var0;
                if (var24) {
                    _fun101587_ip = 296;
                    continue _fun101587
                }
            case 269:
                _fun101587_ip = 191;
                continue _fun101587;
            case 271:
                var23 = var23.expanded;
                if (var23) {
                    _fun101587_ip = 282;
                    continue _fun101587
                }
            case 280:
                var22 = 0;
            case 282:
                var17 = var22;
                var16 = true;
                var7 = var21;
                var6 = var20;
                var19 = var0;
            case 296:
                var4 = var18;
                var2 = var17;
                var1 = var16;
                if (var1) {
                    _fun101587_ip = 344;
                    continue _fun101587
                }
            case 308:
                var20 = var13.bind(var14)();
                var0 = var20.done;
                var10 = var20;
                var9 = var18;
                var8 = var16;
                var5 = var19;
                var4 = var9;
                var2 = var17;
                var1 = var8;
                if (!var0) {
                    _fun101587_ip = 70;
                    continue _fun101587
                }
            case 344:
                var0 = null;
                if (!var1) {
                    _fun101587_ip = 376;
                    continue _fun101587
                }
            case 349:
                var1 = {};
                var3 = _closure1_slot17;
                var3 = var3.GUILDS;
                var3 = var4 + var3;
                var1.section = var3;
                var1.item = var2;
                var0 = var1;
            case 376:
                return var0;
        }
    };
    var _closure1_slot28 = var0;
    var0 = function arg0, arg1, arg2() {
        _fun101588: for (var _fun101588_ip = 0;;) switch (_fun101588_ip) {
            case 0:
                var5 = arg2;
                var0 = null;
                var0 = var0 != var5;
                if (!var0) {
                    _fun101588_ip = 50;
                    continue _fun101588
                }
            case 12:
                var1 = global;
                var1 = var1.HermesInternal;
                var4 = var1.concat;
                var3 = '';
                var2 = arg0;
                var1 = ':';
                var2 = var4.bind(var3)(var2, var1, var5);
                var1 = arg1;
                var0 = var1 === var2;
            case 50:
                return var0;
        }
    };
    var _closure1_slot29 = var0;
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
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var9.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var7 = 2;
    var3 = var5[var7];
    var3 = var9.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var9.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var9.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var9.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var9.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var9.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var9.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var9.bind(var0)(var3);
    var _closure1_slot12 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var9.bind(var0)(var3);
    var _closure1_slot13 = var3;
    var3 = 11;
    var6 = var5[var3];
    var6 = var9.bind(var0)(var6);
    var _closure1_slot14 = var6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.GuildsNodeType;
    var _closure1_slot15 = var3;
    var3 = 12;
    var3 = var5[var3];
    var3 = var9.bind(var0)(var3);
    var _closure1_slot16 = var3;
    var3 = 13;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.FastListRenderSections;
    var _closure1_slot17 = var6;
    var6 = var3.GUILD_ITEM_SIZE;
    var3 = var3.GUILD_ITEM_MARGIN;
    var _closure1_slot18 = var3;
    var8 = 14;
    var8 = var5[var8];
    var8 = var4.bind(var0)(var8);
    var8 = var8.useYouBarTotalHeight;
    var _closure1_slot19 = var8;
    var8 = 15;
    var8 = var5[var8];
    var8 = var4.bind(var0)(var8);
    var10 = var8.jsx;
    var _closure1_slot20 = var10;
    var8 = 18;
    var8 = var5[var8];
    var11 = var9.bind(var0)(var8);
    var8 = {};
    var8 = var10.bind(var0)(var11, var8);
    var _closure1_slot21 = var8;
    var8 = 19;
    var8 = var5[var8];
    var11 = var9.bind(var0)(var8);
    var8 = {};
    var8 = var10.bind(var0)(var11, var8);
    var _closure1_slot22 = var8;
    var8 = 20;
    var8 = var5[var8];
    var9 = var9.bind(var0)(var8);
    var8 = {};
    var8 = var10.bind(var0)(var9, var8);
    var _closure1_slot23 = var8;
    var8 = {};
    var9 = 'section-messages';
    var8.MESSAGES = var9;
    var9 = 'section-favorites';
    var8.FAVORITES = var9;
    var9 = 'section-pending-join-requests';
    var8.PENDING_JOIN_REQUESTS = var9;
    var9 = 'section-lurking-guilds';
    var8.LURKING_GUILDS = var9;
    var9 = 'section-guest-guilds';
    var8.GUEST_GUILDS = var9;
    var9 = 'section-private-channels';
    var8.UNREAD_PRIVATE_CHANNELS = var9;
    var9 = 'section-separator';
    var8.SEPARATOR = var9;
    var9 = 'section-guilds';
    var8.GUILDS = var9;
    var _closure1_slot24 = var8;
    var3 = var7 * var3;
    var3 = var6 + var3;
    var _closure1_slot25 = var3;
    var3 = 41;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guilds_bar/native/hooks/useGuildsBarProps.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun101589: for (var _fun101589_ip = 0;;) switch (_fun101589_ip) {
            case 0:
                var1 = arg0;
                var _closure2_slot0 = var1;
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 30;
                var2 = var6[var2];
                var8 = undefined;
                var2 = var5.bind(var8)(var2);
                var2 = var2.bind(var8)();
                var24 = var2.top;
                var _closure2_slot1 = var24;
                var22 = var2.bottom;
                var _closure2_slot2 = var22;
                var4 = _closure1_slot0;
                var2 = 31;
                var2 = var6[var2];
                var4 = var4.bind(var8)(var2);
                var2 = var4.useMobileQuestDockHeight;
                var23 = var2.bind(var4)();
                var _closure2_slot3 = var23;
                var4 = _closure1_slot19;
                var21 = var4.bind(var8)();
                var _closure2_slot4 = var21;
                var2 = 4;
                var2 = var4.bind(var8)(var2);
                var _closure2_slot5 = var2;
                var10 = _closure1_slot3;
                var9 = var10.useEffect;
                var7 = new Array(3);
                var7[0] = var23;
                var7[1] = var24;
                var7[2] = var21;
                var4 = function() { // Environment: var0
                    var1 = _closure1_slot16;
                    var0 = var1.getState;
                    var0 = var0.bind(var1)();
                    var2 = var0.listInsets;
                    var1 = var2.set;
                    var0 = {};
                    var4 = _closure2_slot1;
                    var0.start = var4;
                    var4 = _closure2_slot3;
                    var3 = _closure2_slot4;
                    var3 = var4 + var3;
                    var0.end = var3;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var4 = var9.bind(var10)(var4, var7);
                var4 = 32;
                var4 = var6[var4];
                var4 = var5.bind(var8)(var4);
                var4 = var4.bind(var8)();
                var17 = 0;
                if (!var4) {
                    _fun101589_ip = 172;
                    continue _fun101589
                }
            case 169:
                var17 = 1;
            case 172:
                var _closure2_slot6 = var17;
                var11 = _closure1_slot0;
                var19 = _closure1_slot2;
                var4 = 33;
                var5 = var19[var4];
                var10 = var11.bind(var8)(var5);
                var9 = var10.useStateFromStoresArray;
                var5 = _closure1_slot12;
                var7 = new Array(3);
                var7[0] = var5;
                var5 = _closure1_slot6;
                var7[1] = var5;
                var5 = _closure1_slot7;
                var7[2] = var5;
                var6 = function() { // Environment: var0
                    var1 = _closure1_slot12;
                    var0 = var1.getUnreadPrivateChannelIds;
                    var3 = var0.bind(var1)();
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 34;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.filterOutMessageRequestsAndSpamById;
                    var5 = _closure1_slot6;
                    var0 = new Array(2);
                    var0[0] = var5;
                    var4 = _closure1_slot7;
                    var0[1] = var4;
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
                };
                var5 = new Array(0);
                var13 = var9.bind(var10)(var7, var6, var5);
                var _closure2_slot7 = var13;
                var5 = 35;
                var5 = var19[var5];
                var5 = var11.bind(var8)(var5);
                var7 = var5.MobileHomeDrawerExperiment;
                var6 = var7.useConfig;
                var5 = {};
                var9 = 'guilds-bar';
                var5.location = var9;
                var5 = var6.bind(var7)(var5);
                var5 = var5.enableHome;
                var _closure2_slot8 = var5;
                var6 = var19[var4];
                var10 = var11.bind(var8)(var6);
                var9 = var10.useStateFromStores;
                var6 = _closure1_slot4;
                var7 = new Array(1);
                var7[0] = var6;
                var6 = function() { // Environment: var0
                    var1 = _closure1_slot4;
                    var0 = var1.isConnected;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var10 = var9.bind(var10)(var7, var6);
                var _closure2_slot9 = var10;
                var6 = var19[var4];
                var12 = var11.bind(var8)(var6);
                var9 = var12.useStateFromStoresArray;
                var6 = _closure1_slot8;
                var7 = new Array(1);
                var7[0] = var6;
                var6 = function() { // Environment: var0
                    var1 = _closure1_slot8;
                    var0 = var1.getGeoRestrictedGuilds;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var12 = var9.bind(var12)(var7, var6);
                var _closure2_slot10 = var12;
                var6 = var19[var4];
                var14 = var11.bind(var8)(var6);
                var9 = var14.useStateFromStores;
                var6 = _closure1_slot5;
                var7 = new Array(1);
                var7[0] = var6;
                var6 = function() { // Environment: var0
                    var1 = _closure1_slot5;
                    var0 = var1.lurkingGuildIds;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var15 = var9.bind(var14)(var7, var6);
                var _closure2_slot11 = var15;
                var6 = var19[var4];
                var14 = var11.bind(var8)(var6);
                var9 = var14.useStateFromStoresArray;
                var6 = _closure1_slot11;
                var7 = new Array(2);
                var7[0] = var6;
                var6 = _closure1_slot10;
                var7[1] = var6;
                var6 = function() { // Environment: var0
                    var1 = _closure1_slot11;
                    var0 = var1.getGuildIds;
                    var2 = var0.bind(var1)();
                    var1 = var2.filter;
                    var0 = function(arg0) { // Environment: var0
                        var2 = _closure1_slot10;
                        var1 = var2.isCurrentUserGuest;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var14 = var9.bind(var14)(var7, var6);
                var _closure2_slot12 = var14;
                var6 = var19[var4];
                var25 = var11.bind(var8)(var6);
                var20 = var25.useStateFromStores;
                var6 = _closure1_slot14;
                var16 = new Array(1);
                var16[0] = var6;
                var18 = _closure1_slot1;
                var6 = 36;
                var6 = var19[var6];
                var26 = var18.bind(var8)(var6);
                var28 = function() { // Environment: var0
                    var0 = {};
                    var3 = _closure1_slot14;
                    var2 = var3.getFastListGuildFolders;
                    var2 = var2.bind(var3)();
                    var0.guildsNFolders = var2;
                    var2 = _closure1_slot14;
                    var1 = var2.getGuildsTree;
                    var1 = var1.bind(var2)();
                    var1 = var1.version;
                    var0.version = var1;
                    return var0;
                };
                var27 = new Array(0);
                var30 = var25;
                var29 = var16;
                var6 = var30[var20](var29, var28, var27, var26, var25);
                var9 = var6.guildsNFolders;
                var _closure2_slot13 = var9;
                var7 = var6.version;
                var6 = 37;
                var6 = var19[var6];
                var6 = var18.bind(var8)(var6);
                var16 = var6.bind(var8)();
                var6 = var16.expanded;
                var _closure2_slot14 = var6;
                var16 = var16.pendingFolderNode;
                var _closure2_slot15 = var16;
                var4 = var19[var4];
                var25 = var11.bind(var8)(var4);
                var20 = var25.useStateFromStores;
                var4 = _closure1_slot9;
                var11 = new Array(1);
                var11[0] = var4;
                var4 = function() { // Environment: var0
                    var0 = _closure1_slot9;
                    var0 = var0.totalUnavailableGuilds;
                    return var0;
                };
                var11 = var20.bind(var25)(var11, var4);
                var _closure2_slot16 = var11;
                var4 = _closure1_slot3;
                var20 = var4.useMemo;
                var3 = new Array(5);
                var3[0] = var24;
                var3[1] = var23;
                var3[2] = var22;
                var3[3] = var21;
                var3[4] = var2;
                var2 = function() { // Environment: var0
                    _fun101599: for (var _fun101599_ip = 0;;) switch (_fun101599_ip) {
                        case 0:
                            var0 = {};
                            var3 = {};
                            var2 = _closure1_slot18;
                            var6 = 3;
                            var2 = var6 * var2;
                            var3.top = var2;
                            var5 = _closure2_slot4;
                            var4 = 0;
                            if (!(!(var5 > var4))) {
                                _fun101599_ip = 53;
                                continue _fun101599
                            }
                        case 35:
                            var5 = _closure2_slot2;
                            var4 = _closure1_slot18;
                            var4 = var6 * var4;
                            var4 = var5 + var4;
                            _fun101599_ip = 57;
                            continue _fun101599;
                        case 53:
                            var4 = _closure2_slot4;
                        case 57:
                            var3.bottom = var4;
                            var0.scrollIndicatorInsets = var3;
                            var6 = _closure2_slot1;
                            var5 = _closure1_slot18;
                            var3 = 2;
                            var4 = var3 * var5;
                            var4 = var6 + var4;
                            var0.insetStart = var4;
                            var4 = _closure2_slot3;
                            var3 = var3 * var5;
                            var3 = var4 + var3;
                            var2 = _closure2_slot5;
                            var2 = var3 + var2;
                            var0.insetEnd = var2;
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 38;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            var1 = var2.getWindowDimensions;
                            var1 = var1.bind(var2)();
                            var1 = var1.height;
                            var0.chunkBase = var1;
                            return var0;
                    }
                };
                var2 = var20.bind(var4)(var2, var3);
                var _closure2_slot17 = var2;
                var20 = var4.useCallback;
                var21 = var2.insetStart;
                var3 = new Array(3);
                var3[0] = var21;
                var21 = var2.insetEnd;
                var3[1] = var21;
                var3[2] = var1;
                var1 = function(arg0, arg1) { // Environment: var0
                    _fun101600: for (var _fun101600_ip = 0;;) switch (_fun101600_ip) {
                        case 0:
                            var3 = arg0;
                            var1 = null;
                            if (!(var1 == var3)) {
                                _fun101600_ip = 47;
                                continue _fun101600
                            }
                        case 9:
                            var0 = _closure2_slot0;
                            var5 = var0.current;
                            if (!(var1 != var5)) {
                                _fun101600_ip = 155;
                                continue _fun101600
                            }
                        case 28:
                            var4 = var5.scrollTo;
                            var2 = 0;
                            var0 = arg1;
                            var0 = var4.bind(var5)(var2, var0);
                            _fun101600_ip = 155;
                            continue _fun101600;
                        case 47:
                            var2 = _closure1_slot28;
                            var0 = undefined;
                            var5 = var2.bind(var0)(var3);
                            if (!(var1 != var5)) {
                                _fun101600_ip = 159;
                                continue _fun101600
                            }
                        case 65:
                            var2 = _closure2_slot0;
                            var3 = var2.current;
                            if (!(var1 != var3)) {
                                _fun101600_ip = 155;
                                continue _fun101600
                            }
                        case 81:
                            var2 = var3.scrollToLocation;
                            var1 = {};
                            var8 = var1;
                            var7 = var5;
                            var5 = copyDataProperties(var8, var7);
                            var6 = 'visible';
                            var5 = 'orientation';
                            var1[var5] = var6;
                            var5 = _closure2_slot17;
                            var6 = var5.insetStart;
                            var5 = 'paddingStart';
                            var1[var5] = var6;
                            var4 = _closure2_slot17;
                            var5 = var4.insetEnd;
                            var4 = 'paddingEnd';
                            var1[var4] = var5;
                            var1 = var2.bind(var3)(var1);
                        case 155:
                            var1 = undefined;
                            return var1;
                        case 159:
                            return var0;
                    }
                };
                var3 = var20.bind(var4)(var1, var3);
                var1 = 39;
                var1 = var19[var1];
                var1 = var18.bind(var8)(var1);
                var1 = var1.bind(var8)(var3);
                var8 = var4.useMemo;
                var3 = function() { // Environment: var0
                    _fun101601: for (var _fun101601_ip = 0;;) switch (_fun101601_ip) {
                        case 0:
                            var1 = _closure1_slot13;
                            var0 = var1.getGuildId;
                            var4 = var0.bind(var1)();
                            var2 = null;
                            var5 = var2 != var4;
                            var0 = undefined;
                            var1 = undefined;
                            if (!var5) {
                                _fun101601_ip = 39;
                                continue _fun101601
                            }
                        case 30:
                            var3 = _closure1_slot28;
                            var1 = var3.bind(var0)(var4);
                        case 39:
                            if (!(var2 == var1)) {
                                _fun101601_ip = 45;
                                continue _fun101601
                            }
                        case 43:
                            return var0;
                        case 45:
                            var0 = {};
                            var2 = var1.item;
                            var0.initialScrollItem = var2;
                            var1 = var1.section;
                            var0.initialScrollSection = var1;
                            return var0;
                    }
                };
                var1 = new Array(0);
                var8 = var8.bind(var4)(var3, var1);
                var _closure2_slot18 = var8;
                var3 = var4.useMemo;
                var1 = new Array(13);
                var1[0] = var17;
                var1[1] = var16;
                var1[2] = var15;
                var1[3] = var14;
                var1[4] = var13;
                var1[5] = var12;
                var1[6] = var11;
                var1[7] = var10;
                var1[8] = var9;
                var1[9] = var8;
                var1[10] = var7;
                var1[11] = var6;
                var1[12] = var5;
                var0 = function() { // Environment: var0
                    _fun101602: for (var _fun101602_ip = 0;;) switch (_fun101602_ip) {
                        case 0:
                            var0 = _closure2_slot6;
                            var3 = [1];
                            var3[1] = var0;
                            var4 = _closure2_slot15;
                            var0 = null;
                            var4 = var0 == var4;
                            var6 = 0;
                            var0 = 0;
                            if (var4) {
                                _fun101602_ip = 67;
                                continue _fun101602
                            }
                        case 40:
                            var5 = _closure2_slot14;
                            var4 = 1;
                            if (!var5) {
                                _fun101602_ip = 64;
                                continue _fun101602
                            }
                        case 50:
                            var5 = _closure2_slot15;
                            var5 = var5.children;
                            var4 = var5.length;
                        case 64:
                            var0 = var4;
                        case 67:
                            var3[2] = var0;
                            var0 = _closure2_slot11;
                            var0 = var0.length;
                            var3[3] = var0;
                            var0 = _closure2_slot12;
                            var0 = var0.length;
                            var3[4] = var0;
                            var0 = global;
                            var7 = var0.Math;
                            var5 = var7.min;
                            var0 = _closure2_slot7;
                            var4 = var0.length;
                            var0 = 10;
                            var0 = var5.bind(var7)(var4, var0);
                            var3[5] = var0;
                            var9 = 1;
                            var3[6] = var9;
                            var4 = _closure1_slot26;
                            var0 = _closure2_slot13;
                            var7 = undefined;
                            var5 = var4.bind(var7)(var0);
                            var4 = var5.bind(var7)();
                            var0 = var4.done;
                            if (var0) {
                                _fun101602_ip = 275;
                                continue _fun101602
                            }
                        case 169:
                            var0 = var4.value;
                            var11 = var0.type;
                            var10 = _closure1_slot15;
                            var10 = var10.GUILD;
                            if (!(var11 !== var10)) {
                                _fun101602_ip = 250;
                                continue _fun101602
                            }
                        case 193:
                            var11 = var0.type;
                            var10 = _closure1_slot15;
                            var10 = var10.FOLDER;
                            if (!(var11 === var10)) {
                                _fun101602_ip = 260;
                                continue _fun101602
                            }
                        case 212:
                            var11 = var0.expanded;
                            var10 = var3.push;
                            if (var11) {
                                _fun101602_ip = 233;
                                continue _fun101602
                            }
                        case 226:
                            var11 = var10.bind(var3)(var9);
                            _fun101602_ip = 260;
                            continue _fun101602;
                        case 233:
                            var0 = var0.children;
                            var0 = var0.length;
                            var0 = var10.bind(var3)(var0);
                            _fun101602_ip = 260;
                            continue _fun101602;
                        case 250:
                            var0 = var3.push;
                            var0 = var0.bind(var3)(var9);
                        case 260:
                            var10 = var5.bind(var7)();
                            var0 = var10.done;
                            var4 = var10;
                            if (!var0) {
                                _fun101602_ip = 169;
                                continue _fun101602
                            }
                        case 275:
                            var0 = _closure2_slot10;
                            var0 = var0.length;
                            if (!(var0 > var6)) {
                                _fun101602_ip = 307;
                                continue _fun101602
                            }
                        case 288:
                            var4 = var3.push;
                            var0 = _closure2_slot10;
                            var0 = var0.length;
                            var0 = var4.bind(var3)(var0);
                        case 307:
                            var5 = new Array(0);
                            var _closure3_slot0 = var5;
                            var0 = _closure2_slot16;
                            if (!(var0 > var6)) {
                                _fun101602_ip = 339;
                                continue _fun101602
                            }
                        case 323:
                            var4 = var5.push;
                            var0 = 'unavailable-guilds';
                            var0 = var4.bind(var5)(var0);
                        case 339:
                            var0 = _closure2_slot9;
                            if (!var0) {
                                _fun101602_ip = 359;
                                continue _fun101602
                            }
                        case 346:
                            var4 = _closure2_slot13;
                            var4 = var4.length;
                            var0 = var6 === var4;
                        case 359:
                            if (!var0) {
                                _fun101602_ip = 370;
                                continue _fun101602
                            }
                        case 362:
                            var4 = _closure2_slot16;
                            var0 = var6 === var4;
                        case 370:
                            if (!var0) {
                                _fun101602_ip = 389;
                                continue _fun101602
                            }
                        case 373:
                            var4 = var5.push;
                            var0 = 'empty-nux';
                            var0 = var4.bind(var5)(var0);
                        case 389:
                            var0 = _closure2_slot8;
                            if (var0) {
                                _fun101602_ip = 412;
                                continue _fun101602
                            }
                        case 396:
                            var4 = var5.push;
                            var0 = 'create-join-guild';
                            var0 = var4.bind(var5)(var0);
                        case 412:
                            var0 = {};
                            var12 = _closure2_slot18;
                            var13 = var0;
                            var2 = copyDataProperties(var13, var12);
                            var2 = 'sections';
                            var0[var2] = var3;
                            var3 = function arg0() {
                                _fun101603: for (var _fun101603_ip = 0;;) switch (_fun101603_ip) {
                                    case 0:
                                        var4 = arg0;
                                        var3 = _closure2_slot13;
                                        var2 = _closure2_slot15;
                                        var0 = _closure1_slot17;
                                        var0 = var0.PENDING_JOIN_REQUESTS;
                                        if (!(var4 === var0)) {
                                            _fun101603_ip = 37;
                                            continue _fun101603
                                        }
                                    case 31:
                                        var0 = null;
                                        if (!(var0 == var2)) {
                                            _fun101603_ip = 115;
                                            continue _fun101603
                                        }
                                    case 37:
                                        var0 = _closure1_slot17;
                                        var0 = var0.GUILDS;
                                        var2 = var4 >= var0;
                                        var0 = 0;
                                        if (!var2) {
                                            _fun101603_ip = 119;
                                            continue _fun101603
                                        }
                                    case 56:
                                        var2 = _closure1_slot17;
                                        var2 = var2.GUILDS;
                                        var2 = var4 - var2;
                                        var3 = var3[var2];
                                        var2 = null;
                                        var4 = var2 == var3;
                                        var2 = 0;
                                        if (var4) {
                                            _fun101603_ip = 110;
                                            continue _fun101603
                                        }
                                    case 85:
                                        var4 = var3.type;
                                        var3 = _closure1_slot15;
                                        var3 = var3.FOLDER;
                                        var2 = 0;
                                        if (!(var4 === var3)) {
                                            _fun101603_ip = 110;
                                            continue _fun101603
                                        }
                                    case 106:
                                        var2 = _closure1_slot25;
                                    case 110:
                                        var0 = var2;
                                        _fun101603_ip = 119;
                                        continue _fun101603;
                                    case 115:
                                        var0 = _closure1_slot25;
                                    case 119:
                                        return var0;
                                }
                            };
                            var2 = 'sectionSize';
                            var0[var2] = var3;
                            var3 = function arg0, arg1() {
                                _fun101604: for (var _fun101604_ip = 0;;) switch (_fun101604_ip) {
                                    case 0:
                                        var0 = {};
                                        var1 = arg0;
                                        var0.section = var1;
                                        var1 = arg1;
                                        var0.row = var1;
                                        var2 = _closure2_slot13;
                                        var0.guildsNFolders = var2;
                                        var2 = _closure2_slot15;
                                        var0.pendingFolderNode = var2;
                                        var2 = _closure2_slot7;
                                        var0.privateChannelIds = var2;
                                        var1 = _closure2_slot10;
                                        var0.geoRestrictedGuilds = var1;
                                        var10 = var0.section;
                                        var5 = var0.row;
                                        var6 = var0.guildsNFolders;
                                        var3 = var0.pendingFolderNode;
                                        var4 = var0.privateChannelIds;
                                        var9 = var0.geoRestrictedGuilds;
                                        var0 = _closure1_slot17;
                                        var0 = var0.MESSAGES;
                                        if (!(var0 !== var10)) {
                                            _fun101604_ip = 486;
                                            continue _fun101604
                                        }
                                    case 111:
                                        var0 = _closure1_slot17;
                                        var0 = var0.FAVORITES;
                                        if (!(var0 !== var10)) {
                                            _fun101604_ip = 486;
                                            continue _fun101604
                                        }
                                    case 128:
                                        var0 = _closure1_slot17;
                                        var0 = var0.LURKING_GUILDS;
                                        if (!(var0 !== var10)) {
                                            _fun101604_ip = 486;
                                            continue _fun101604
                                        }
                                    case 145:
                                        var0 = _closure1_slot17;
                                        var0 = var0.GUEST_GUILDS;
                                        if (!(var0 !== var10)) {
                                            _fun101604_ip = 486;
                                            continue _fun101604
                                        }
                                    case 162:
                                        var0 = _closure1_slot17;
                                        var0 = var0.UNREAD_PRIVATE_CHANNELS;
                                        if (!(var0 !== var10)) {
                                            _fun101604_ip = 446;
                                            continue _fun101604
                                        }
                                    case 179:
                                        var0 = _closure1_slot17;
                                        var2 = var0.SEPARATOR;
                                        var0 = 9;
                                        if (!(var2 !== var10)) {
                                            _fun101604_ip = 490;
                                            continue _fun101604
                                        }
                                    case 199:
                                        var2 = _closure1_slot17;
                                        var2 = var2.PENDING_JOIN_REQUESTS;
                                        if (!(var2 !== var10)) {
                                            _fun101604_ip = 388;
                                            continue _fun101604
                                        }
                                    case 216:
                                        var8 = null;
                                        var2 = var8 == var5;
                                        var7 = 0;
                                        var0 = 0;
                                        if (var2) {
                                            _fun101604_ip = 490;
                                            continue _fun101604
                                        }
                                    case 232:
                                        var2 = _closure1_slot17;
                                        var2 = var2.GUILDS;
                                        var2 = var10 - var2;
                                        var10 = var6.length;
                                        if (!(var10 >= var2)) {
                                            _fun101604_ip = 263;
                                            continue _fun101604
                                        }
                                    case 255:
                                        var9 = var9[var5];
                                        if (!(var8 == var9)) {
                                            _fun101604_ip = 382;
                                            continue _fun101604
                                        }
                                    case 263:
                                        var6 = var6[var2];
                                        var9 = var8 == var6;
                                        var2 = 0;
                                        if (var9) {
                                            _fun101604_ip = 377;
                                            continue _fun101604
                                        }
                                    case 276:
                                        var10 = var6.type;
                                        var9 = _closure1_slot15;
                                        var9 = var9.ROOT;
                                        var2 = 0;
                                        if (!(var10 !== var9)) {
                                            _fun101604_ip = 377;
                                            continue _fun101604
                                        }
                                    case 297:
                                        var10 = var6.type;
                                        var9 = _closure1_slot15;
                                        var9 = var9.GUILD;
                                        if (!(var10 === var9)) {
                                            _fun101604_ip = 325;
                                            continue _fun101604
                                        }
                                    case 316:
                                        var9 = var5 > var7;
                                        var2 = 0;
                                        if (var9) {
                                            _fun101604_ip = 377;
                                            continue _fun101604
                                        }
                                    case 325:
                                        var10 = var6.type;
                                        var9 = _closure1_slot15;
                                        var9 = var9.FOLDER;
                                        if (!(var10 === var9)) {
                                            _fun101604_ip = 373;
                                            continue _fun101604
                                        }
                                    case 344:
                                        var9 = var6.expanded;
                                        var2 = 0;
                                        if (!var9) {
                                            _fun101604_ip = 377;
                                            continue _fun101604
                                        }
                                    case 355:
                                        var6 = var6.children;
                                        var6 = var6[var5];
                                        var6 = var8 == var6;
                                        var2 = 0;
                                        if (var6) {
                                            _fun101604_ip = 377;
                                            continue _fun101604
                                        }
                                    case 373:
                                        var2 = _closure1_slot25;
                                    case 377:
                                        var0 = var2;
                                        _fun101604_ip = 490;
                                        continue _fun101604;
                                    case 382:
                                        var0 = _closure1_slot25;
                                        _fun101604_ip = 490;
                                        continue _fun101604;
                                    case 388:
                                        var7 = null;
                                        var8 = var7 != var5;
                                        var2 = 0;
                                        if (!var8) {
                                            _fun101604_ip = 441;
                                            continue _fun101604
                                        }
                                    case 399:
                                        var8 = var7 != var3;
                                        var2 = 0;
                                        if (!var8) {
                                            _fun101604_ip = 441;
                                            continue _fun101604
                                        }
                                    case 408:
                                        var8 = var3.expanded;
                                        var2 = 0;
                                        if (!var8) {
                                            _fun101604_ip = 441;
                                            continue _fun101604
                                        }
                                    case 419:
                                        var3 = var3.children;
                                        var3 = var3[var5];
                                        var3 = var7 != var3;
                                        var2 = 0;
                                        if (!var3) {
                                            _fun101604_ip = 441;
                                            continue _fun101604
                                        }
                                    case 437:
                                        var2 = _closure1_slot25;
                                    case 441:
                                        var0 = var2;
                                        _fun101604_ip = 490;
                                        continue _fun101604;
                                    case 446:
                                        var3 = null;
                                        var6 = var3 != var5;
                                        var2 = -1;
                                        if (!var6) {
                                            _fun101604_ip = 464;
                                            continue _fun101604
                                        }
                                    case 461:
                                        var2 = var5;
                                    case 464:
                                        var2 = var4[var2];
                                        var3 = var3 == var2;
                                        var2 = 0;
                                        if (var3) {
                                            _fun101604_ip = 481;
                                            continue _fun101604
                                        }
                                    case 477:
                                        var2 = _closure1_slot25;
                                    case 481:
                                        var0 = var2;
                                        _fun101604_ip = 490;
                                        continue _fun101604;
                                    case 486:
                                        var0 = _closure1_slot25;
                                    case 490:
                                        return var0;
                                }
                            };
                            var2 = 'itemSize';
                            var0[var2] = var3;
                            var3 = function() {
                                var0 = _closure3_slot0;
                                var1 = var0.length;
                                var0 = _closure1_slot25;
                                var1 = var1 * var0;
                                var0 = 8;
                                var0 = var1 + var0;
                                return var0;
                            };
                            var2 = 'footerSize';
                            var0[var2] = var3;
                            var3 = function arg0() {
                                _fun101606: for (var _fun101606_ip = 0;;) switch (_fun101606_ip) {
                                    case 0:
                                        var4 = arg0;
                                        var3 = _closure2_slot13;
                                        var8 = _closure2_slot15;
                                        var0 = _closure1_slot17;
                                        var0 = var0.GUILDS;
                                        if (!(!(var4 >= var0))) {
                                            _fun101606_ip = 130;
                                            continue _fun101606
                                        }
                                    case 31:
                                        var0 = _closure1_slot17;
                                        var2 = var0.PENDING_JOIN_REQUESTS;
                                        var5 = null;
                                        var0 = null;
                                        if (!(var4 === var2)) {
                                            _fun101606_ip = 251;
                                            continue _fun101606
                                        }
                                    case 52:
                                        var2 = var5 != var8;
                                        var0 = null;
                                        if (!var2) {
                                            _fun101606_ip = 251;
                                            continue _fun101606
                                        }
                                    case 64:
                                        var7 = _closure1_slot20;
                                        var5 = _closure1_slot1;
                                        var6 = _closure1_slot2;
                                        var2 = 17;
                                        var2 = var6[var2];
                                        var6 = undefined;
                                        var5 = var5.bind(var6)(var2);
                                        var2 = {};
                                        var9 = var8.id;
                                        var2.id = var9;
                                        var9 = var8.expanded;
                                        var2.expanded = var9;
                                        var8 = var8.children;
                                        var2.childNodes = var8;
                                        var0 = var7.bind(var6)(var5, var2);
                                        _fun101606_ip = 251;
                                        continue _fun101606;
                                    case 130:
                                        var2 = _closure1_slot17;
                                        var2 = var2.GUILDS;
                                        var2 = var4 - var2;
                                        var5 = var3[var2];
                                        var3 = var5.type;
                                        var2 = _closure1_slot15;
                                        var2 = var2.FOLDER;
                                        var0 = null;
                                        if (!(var3 === var2)) {
                                            _fun101606_ip = 251;
                                            continue _fun101606
                                        }
                                    case 169:
                                        var4 = _closure1_slot20;
                                        var2 = _closure1_slot1;
                                        var3 = _closure1_slot2;
                                        var1 = 16;
                                        var1 = var3[var1];
                                        var3 = undefined;
                                        var2 = var2.bind(var3)(var1);
                                        var1 = {};
                                        var6 = var5.id;
                                        var1.id = var6;
                                        var6 = var5.expanded;
                                        var1.expanded = var6;
                                        var6 = var5.name;
                                        var1.name = var6;
                                        var6 = var5.color;
                                        var1.color = var6;
                                        var5 = var5.children;
                                        var1.childNodes = var5;
                                        var0 = var4.bind(var3)(var2, var1);
                                    case 251:
                                        return var0;
                                }
                            };
                            var2 = 'renderSection';
                            var0[var2] = var3;
                            var3 = function arg0, arg1() {
                                _fun101607: for (var _fun101607_ip = 0;;) switch (_fun101607_ip) {
                                    case 0:
                                        var9 = arg0;
                                        var3 = arg1;
                                        var8 = _closure2_slot13;
                                        var5 = _closure2_slot7;
                                        var2 = _closure2_slot11;
                                        var4 = _closure2_slot12;
                                        var7 = _closure2_slot10;
                                        var6 = _closure2_slot15;
                                        var0 = _closure1_slot17;
                                        var0 = var0.MESSAGES;
                                        if (!(var0 !== var9)) {
                                            _fun101607_ip = 712;
                                            continue _fun101607
                                        }
                                    case 53:
                                        var0 = _closure1_slot17;
                                        var0 = var0.FAVORITES;
                                        if (!(var0 !== var9)) {
                                            _fun101607_ip = 706;
                                            continue _fun101607
                                        }
                                    case 70:
                                        var0 = _closure1_slot17;
                                        var0 = var0.LURKING_GUILDS;
                                        if (!(var0 !== var9)) {
                                            _fun101607_ip = 650;
                                            continue _fun101607
                                        }
                                    case 87:
                                        var0 = _closure1_slot17;
                                        var0 = var0.GUEST_GUILDS;
                                        if (!(var0 !== var9)) {
                                            _fun101607_ip = 594;
                                            continue _fun101607
                                        }
                                    case 104:
                                        var0 = _closure1_slot17;
                                        var0 = var0.UNREAD_PRIVATE_CHANNELS;
                                        if (!(var0 !== var9)) {
                                            _fun101607_ip = 538;
                                            continue _fun101607
                                        }
                                    case 121:
                                        var0 = _closure1_slot17;
                                        var0 = var0.SEPARATOR;
                                        if (!(var0 !== var9)) {
                                            _fun101607_ip = 529;
                                            continue _fun101607
                                        }
                                    case 138:
                                        var0 = _closure1_slot17;
                                        var0 = var0.PENDING_JOIN_REQUESTS;
                                        if (!(var0 !== var9)) {
                                            _fun101607_ip = 425;
                                            continue _fun101607
                                        }
                                    case 155:
                                        var0 = _closure1_slot17;
                                        var0 = var0.GUILDS;
                                        var0 = var9 - var0;
                                        var9 = var8.length;
                                        if (!(!(var0 >= var9))) {
                                            _fun101607_ip = 365;
                                            continue _fun101607
                                        }
                                    case 181:
                                        var8 = var8[var0];
                                        var11 = null;
                                        var9 = var11 == var8;
                                        var0 = null;
                                        if (var9) {
                                            _fun101607_ip = 360;
                                            continue _fun101607
                                        }
                                    case 199:
                                        var10 = var8.type;
                                        var9 = _closure1_slot15;
                                        var9 = var9.ROOT;
                                        var0 = null;
                                        if (!(var10 !== var9)) {
                                            _fun101607_ip = 360;
                                            continue _fun101607
                                        }
                                    case 223:
                                        var10 = var8.type;
                                        var9 = _closure1_slot15;
                                        var9 = var9.GUILD;
                                        if (!(var10 === var9)) {
                                            _fun101607_ip = 253;
                                            continue _fun101607
                                        }
                                    case 242:
                                        var9 = 0;
                                        var9 = var3 > var9;
                                        var0 = null;
                                        if (var9) {
                                            _fun101607_ip = 360;
                                            continue _fun101607
                                        }
                                    case 253:
                                        var10 = var8.type;
                                        var9 = _closure1_slot15;
                                        var9 = var9.FOLDER;
                                        var13 = var8;
                                        if (!(var10 === var9)) {
                                            _fun101607_ip = 284;
                                            continue _fun101607
                                        }
                                    case 275:
                                        var8 = var8.children;
                                        var13 = var8[var3];
                                    case 284:
                                        var9 = var11 == var13;
                                        var8 = null;
                                        if (var9) {
                                            _fun101607_ip = 357;
                                            continue _fun101607
                                        }
                                    case 293:
                                        var10 = var13.type;
                                        var9 = _closure1_slot15;
                                        var9 = var9.GUILD;
                                        var8 = null;
                                        if (!(var10 === var9)) {
                                            _fun101607_ip = 357;
                                            continue _fun101607
                                        }
                                    case 314:
                                        var12 = _closure1_slot20;
                                        var10 = _closure1_slot1;
                                        var11 = _closure1_slot2;
                                        var9 = 21;
                                        var9 = var11[var9];
                                        var11 = undefined;
                                        var10 = var10.bind(var11)(var9);
                                        var9 = {};
                                        var13 = var13.id;
                                        var9.guildId = var13;
                                        var8 = var12.bind(var11)(var10, var9);
                                    case 357:
                                        var0 = var8;
                                    case 360:
                                        _fun101607_ip = 716;
                                        continue _fun101607;
                                    case 365:
                                        var12 = var7[var3];
                                        var7 = null;
                                        var8 = var7 != var12;
                                        if (!var8) {
                                            _fun101607_ip = 417;
                                            continue _fun101607
                                        }
                                    case 378:
                                        var11 = _closure1_slot20;
                                        var9 = _closure1_slot1;
                                        var10 = _closure1_slot2;
                                        var8 = 24;
                                        var8 = var10[var8];
                                        var10 = undefined;
                                        var9 = var9.bind(var10)(var8);
                                        var8 = {};
                                        var8.restrictedGuild = var12;
                                        var7 = var11.bind(var10)(var9, var8);
                                    case 417:
                                        var0 = var7;
                                        _fun101607_ip = 716;
                                        continue _fun101607;
                                    case 425:
                                        var9 = null;
                                        var7 = var9 == var6;
                                        var0 = null;
                                        if (var7) {
                                            _fun101607_ip = 716;
                                            continue _fun101607
                                        }
                                    case 439:
                                        var6 = var6.children;
                                        var11 = var6[var3];
                                        var7 = var9 == var11;
                                        var6 = null;
                                        if (var7) {
                                            _fun101607_ip = 521;
                                            continue _fun101607
                                        }
                                    case 457:
                                        var8 = var11.type;
                                        var7 = _closure1_slot15;
                                        var7 = var7.GUILD;
                                        var6 = null;
                                        if (!(var8 === var7)) {
                                            _fun101607_ip = 521;
                                            continue _fun101607
                                        }
                                    case 478:
                                        var10 = _closure1_slot20;
                                        var8 = _closure1_slot1;
                                        var9 = _closure1_slot2;
                                        var7 = 23;
                                        var7 = var9[var7];
                                        var9 = undefined;
                                        var8 = var8.bind(var9)(var7);
                                        var7 = {};
                                        var11 = var11.id;
                                        var7.guildId = var11;
                                        var6 = var10.bind(var9)(var8, var7);
                                    case 521:
                                        var0 = var6;
                                        _fun101607_ip = 716;
                                        continue _fun101607;
                                    case 529:
                                        var0 = _closure1_slot23;
                                        _fun101607_ip = 716;
                                        continue _fun101607;
                                    case 538:
                                        var10 = var5[var3];
                                        var5 = null;
                                        var6 = var5 == var10;
                                        if (var6) {
                                            _fun101607_ip = 589;
                                            continue _fun101607
                                        }
                                    case 551:
                                        var9 = _closure1_slot20;
                                        var7 = _closure1_slot1;
                                        var8 = _closure1_slot2;
                                        var6 = 22;
                                        var6 = var8[var6];
                                        var8 = undefined;
                                        var7 = var7.bind(var8)(var6);
                                        var6 = {};
                                        var6.channelId = var10;
                                        var5 = var9.bind(var8)(var7, var6);
                                    case 589:
                                        var0 = var5;
                                        _fun101607_ip = 716;
                                        continue _fun101607;
                                    case 594:
                                        var9 = var4[var3];
                                        var4 = null;
                                        var5 = var4 == var9;
                                        if (var5) {
                                            _fun101607_ip = 645;
                                            continue _fun101607
                                        }
                                    case 607:
                                        var8 = _closure1_slot20;
                                        var6 = _closure1_slot1;
                                        var7 = _closure1_slot2;
                                        var5 = 21;
                                        var5 = var7[var5];
                                        var7 = undefined;
                                        var6 = var6.bind(var7)(var5);
                                        var5 = {};
                                        var5.guildId = var9;
                                        var4 = var8.bind(var7)(var6, var5);
                                    case 645:
                                        var0 = var4;
                                        _fun101607_ip = 716;
                                        continue _fun101607;
                                    case 650:
                                        var7 = var2[var3];
                                        var2 = null;
                                        var3 = var2 == var7;
                                        if (var3) {
                                            _fun101607_ip = 701;
                                            continue _fun101607
                                        }
                                    case 663:
                                        var6 = _closure1_slot20;
                                        var4 = _closure1_slot1;
                                        var5 = _closure1_slot2;
                                        var3 = 21;
                                        var3 = var5[var3];
                                        var5 = undefined;
                                        var4 = var4.bind(var5)(var3);
                                        var3 = {};
                                        var3.guildId = var7;
                                        var2 = var6.bind(var5)(var4, var3);
                                    case 701:
                                        var0 = var2;
                                        _fun101607_ip = 716;
                                        continue _fun101607;
                                    case 706:
                                        var0 = _closure1_slot22;
                                        _fun101607_ip = 716;
                                        continue _fun101607;
                                    case 712:
                                        var0 = _closure1_slot21;
                                    case 716:
                                        return var0;
                                }
                            };
                            var2 = 'renderItem';
                            var0[var2] = var3;
                            var3 = function() {
                                var2 = _closure3_slot0;
                                var1 = function arg0() {
                                    var6 = arg0;
                                    var3 = _closure1_slot20;
                                    var1 = _closure1_slot1;
                                    var2 = _closure1_slot2;
                                    var0 = 25;
                                    var0 = var2[var0];
                                    var2 = undefined;
                                    var1 = var1.bind(var2)(var0);
                                    var0 = {};
                                    var5 = var6.map;
                                    var4 = function(arg0) { // Environment: var4
                                        _fun101610: for (var _fun101610_ip = 0;;) switch (_fun101610_ip) {
                                            case 0:
                                                var4 = arg0;
                                                var0 = 'unavailable-guilds';
                                                if (!(var0 !== var4)) {
                                                    _fun101610_ip = 117;
                                                    continue _fun101610
                                                }
                                            case 13:
                                                var0 = 'empty-nux';
                                                if (!(var0 !== var4)) {
                                                    _fun101610_ip = 77;
                                                    continue _fun101610
                                                }
                                            case 23:
                                                var0 = 'create-join-guild';
                                                if (!(var0 !== var4)) {
                                                    _fun101610_ip = 37;
                                                    continue _fun101610
                                                }
                                            case 33:
                                                var0 = undefined;
                                                return var0;
                                            case 37:
                                                var3 = _closure1_slot20;
                                                var1 = _closure1_slot1;
                                                var2 = _closure1_slot2;
                                                var0 = 28;
                                                var0 = var2[var0];
                                                var2 = undefined;
                                                var1 = var1.bind(var2)(var0);
                                                var0 = {};
                                                var0 = var3.bind(var2)(var1, var0, var4);
                                                return var0;
                                            case 77:
                                                var3 = _closure1_slot20;
                                                var1 = _closure1_slot1;
                                                var2 = _closure1_slot2;
                                                var0 = 27;
                                                var0 = var2[var0];
                                                var2 = undefined;
                                                var1 = var1.bind(var2)(var0);
                                                var0 = {};
                                                var0 = var3.bind(var2)(var1, var0, var4);
                                                return var0;
                                            case 117:
                                                var3 = _closure1_slot20;
                                                var1 = _closure1_slot1;
                                                var2 = _closure1_slot2;
                                                var0 = 26;
                                                var0 = var2[var0];
                                                var2 = undefined;
                                                var1 = var1.bind(var2)(var0);
                                                var0 = {};
                                                var0 = var3.bind(var2)(var1, var0, var4);
                                                return var0;
                                        }
                                    };
                                    var4 = var5.bind(var6)(var4);
                                    var0.children = var4;
                                    var0 = var3.bind(var2)(var1, var0);
                                    return var0;
                                };
                                var0 = undefined;
                                var0 = var1.bind(var0)(var2);
                                return var0;
                            };
                            var2 = 'renderFooter';
                            var0[var2] = var3;
                            var3 = function arg0, arg1, arg2() {
                                _fun101611: for (var _fun101611_ip = 0;;) switch (_fun101611_ip) {
                                    case 0:
                                        var2 = arg0;
                                        var3 = arg1;
                                        var4 = arg2;
                                        var6 = _closure1_slot0;
                                        var0 = _closure1_slot2;
                                        var7 = 40;
                                        var1 = var0[var7];
                                        var0 = undefined;
                                        var1 = var6.bind(var0)(var1);
                                        var1 = var1.FastListItemTypes;
                                        var1 = var1.ITEM;
                                        if (!(var1 !== var2)) {
                                            _fun101611_ip = 85;
                                            continue _fun101611
                                        }
                                    case 50:
                                        var6 = _closure1_slot0;
                                        var1 = _closure1_slot2;
                                        var1 = var1[var7];
                                        var1 = var6.bind(var0)(var1);
                                        var1 = var1.FastListItemTypes;
                                        var1 = var1.SECTION;
                                        if (!(var1 !== var2)) {
                                            _fun101611_ip = 85;
                                            continue _fun101611
                                        }
                                    case 83:
                                        return var0;
                                    case 85:
                                        var1 = _closure1_slot17;
                                        var1 = var1.GUILDS;
                                        if (!(!(var3 < var1))) {
                                            _fun101611_ip = 271;
                                            continue _fun101611
                                        }
                                    case 102:
                                        var2 = _closure2_slot13;
                                        var1 = _closure1_slot17;
                                        var1 = var1.GUILDS;
                                        var1 = var3 - var1;
                                        var1 = var2[var1];
                                        var3 = null;
                                        if (!(var3 != var1)) {
                                            _fun101611_ip = 271;
                                            continue _fun101611
                                        }
                                    case 136:
                                        var6 = var1.type;
                                        var2 = _closure1_slot15;
                                        var2 = var2.ROOT;
                                        if (!(var6 !== var2)) {
                                            _fun101611_ip = 271;
                                            continue _fun101611
                                        }
                                    case 155:
                                        var7 = var1.type;
                                        var2 = _closure1_slot15;
                                        var6 = var2.FOLDER;
                                        var2 = var1;
                                        if (!(var7 === var6)) {
                                            _fun101611_ip = 190;
                                            continue _fun101611
                                        }
                                    case 177:
                                        if (!(var3 != var4)) {
                                            _fun101611_ip = 242;
                                            continue _fun101611
                                        }
                                    case 181:
                                        var6 = var1.children;
                                        var2 = var6[var4];
                                    case 190:
                                        var6 = var2.type;
                                        var5 = _closure1_slot15;
                                        var5 = var5.GUILD;
                                        if (!(var6 === var5)) {
                                            _fun101611_ip = 213;
                                            continue _fun101611
                                        }
                                    case 209:
                                        if (!(var3 != var4)) {
                                            _fun101611_ip = 271;
                                            continue _fun101611
                                        }
                                    case 213:
                                        var4 = var2.id;
                                        var2 = global;
                                        var2 = var2.HermesInternal;
                                        var3 = var2.concat;
                                        var2 = '';
                                        var2 = var3.bind(var2)(var4);
                                        return var2;
                                    case 242:
                                        var3 = var1.id;
                                        var1 = global;
                                        var1 = var1.HermesInternal;
                                        var2 = var1.concat;
                                        var1 = '';
                                        var1 = var2.bind(var1)(var3);
                                        return var1;
                                    case 271:
                                        return var0;
                                }
                            };
                            var2 = 'getRecyclerKey';
                            var0[var2] = var3;
                            var3 = function arg0() {
                                var3 = _closure1_slot20;
                                var1 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var0 = 29;
                                var0 = var2[var0];
                                var2 = undefined;
                                var1 = var1.bind(var2)(var0);
                                var0 = {};
                                var4 = arg0;
                                var0.fastList = var4;
                                var0 = var3.bind(var2)(var1, var0);
                                return var0;
                            };
                            var2 = 'renderAccessory';
                            var0[var2] = var3;
                            var3 = function arg0, arg1() {
                                _fun101613: for (var _fun101613_ip = 0;;) switch (_fun101613_ip) {
                                    case 0:
                                        var2 = _closure1_slot16;
                                        var0 = var2.getState;
                                        var0 = var0.bind(var2)();
                                        var0 = var0.dropSpecs;
                                        var3 = null;
                                        if (!(var3 == var0)) {
                                            _fun101613_ip = 53;
                                            continue _fun101613
                                        }
                                    case 29:
                                        var2 = _closure1_slot16;
                                        var0 = var2.getState;
                                        var0 = var0.bind(var2)();
                                        var0 = var0.dragSpecs;
                                        if (!(var3 != var0)) {
                                            _fun101613_ip = 57;
                                            continue _fun101613
                                        }
                                    case 53:
                                        var0 = undefined;
                                        return var0;
                                    case 57:
                                        var8 = {};
                                        var0 = arg0;
                                        var8.section = var0;
                                        var0 = arg1;
                                        var8.item = var0;
                                        var2 = _closure2_slot11;
                                        var8.lurkingGuildsIds = var2;
                                        var2 = _closure2_slot12;
                                        var8.guestGuildIds = var2;
                                        var2 = _closure2_slot7;
                                        var8.privateChannelIds = var2;
                                        var2 = _closure2_slot13;
                                        var8.guildsNFolders = var2;
                                        var2 = _closure2_slot15;
                                        var8.pendingFolderNode = var2;
                                        var0 = _closure2_slot10;
                                        var8.geoRestrictedGuilds = var0;
                                        var10 = var8.section;
                                        var5 = var8.item;
                                        var2 = var8.lurkingGuildsIds;
                                        var6 = var8.guestGuildIds;
                                        var7 = var8.privateChannelIds;
                                        var0 = var8.guildsNFolders;
                                        var4 = var8.pendingFolderNode;
                                        var9 = var8.geoRestrictedGuilds;
                                        var8 = _closure1_slot17;
                                        var8 = var8.MESSAGES;
                                        if (!(var8 !== var10)) {
                                            _fun101613_ip = 784;
                                            continue _fun101613
                                        }
                                    case 193:
                                        var8 = _closure1_slot17;
                                        var8 = var8.FAVORITES;
                                        if (!(var8 !== var10)) {
                                            _fun101613_ip = 772;
                                            continue _fun101613
                                        }
                                    case 210:
                                        var8 = _closure1_slot17;
                                        var8 = var8.PENDING_JOIN_REQUESTS;
                                        if (!(var8 !== var10)) {
                                            _fun101613_ip = 672;
                                            continue _fun101613
                                        }
                                    case 227:
                                        var8 = _closure1_slot17;
                                        var8 = var8.LURKING_GUILDS;
                                        if (!(var8 !== var10)) {
                                            _fun101613_ip = 609;
                                            continue _fun101613
                                        }
                                    case 244:
                                        var8 = _closure1_slot17;
                                        var8 = var8.GUEST_GUILDS;
                                        if (!(var8 !== var10)) {
                                            _fun101613_ip = 543;
                                            continue _fun101613
                                        }
                                    case 261:
                                        var8 = _closure1_slot17;
                                        var8 = var8.UNREAD_PRIVATE_CHANNELS;
                                        if (!(var8 !== var10)) {
                                            _fun101613_ip = 477;
                                            continue _fun101613
                                        }
                                    case 278:
                                        var8 = _closure1_slot17;
                                        var8 = var8.SEPARATOR;
                                        if (!(var8 !== var10)) {
                                            _fun101613_ip = 462;
                                            continue _fun101613
                                        }
                                    case 295:
                                        var8 = _closure1_slot17;
                                        var8 = var8.GUILDS;
                                        var8 = _closure1_slot17;
                                        var8 = var8.GUILDS;
                                        var8 = var10 - var8;
                                        var10 = var0[var8];
                                        if (!(var3 != var10)) {
                                            _fun101613_ip = 363;
                                            continue _fun101613
                                        }
                                    case 327:
                                        if (!(var3 != var5)) {
                                            _fun101613_ip = 356;
                                            continue _fun101613
                                        }
                                    case 331:
                                        var11 = var10.children;
                                        var11 = var11[var5];
                                        var13 = var3 == var11;
                                        var12 = undefined;
                                        if (var13) {
                                            _fun101613_ip = 354;
                                            continue _fun101613
                                        }
                                    case 349:
                                        var12 = var11.id;
                                    case 354:
                                        _fun101613_ip = 361;
                                        continue _fun101613;
                                    case 356:
                                        var12 = var10.id;
                                    case 361:
                                        _fun101613_ip = 410;
                                        continue _fun101613;
                                    case 363:
                                        var0 = var0.length;
                                        var10 = var8 >= var0;
                                        var0 = undefined;
                                        if (!var10) {
                                            _fun101613_ip = 407;
                                            continue _fun101613
                                        }
                                    case 377:
                                        var10 = var3 != var5;
                                        var0 = undefined;
                                        if (!var10) {
                                            _fun101613_ip = 407;
                                            continue _fun101613
                                        }
                                    case 386:
                                        var9 = var9[var5];
                                        var10 = var3 == var9;
                                        var8 = undefined;
                                        if (var10) {
                                            _fun101613_ip = 404;
                                            continue _fun101613
                                        }
                                    case 399:
                                        var8 = var9.id;
                                    case 404:
                                        var0 = var8;
                                    case 407:
                                        var12 = var0;
                                    case 410:
                                        var8 = var3 != var12;
                                        var0 = undefined;
                                        if (!var8) {
                                            _fun101613_ip = 457;
                                            continue _fun101613
                                        }
                                    case 419:
                                        var8 = _closure1_slot24;
                                        var11 = var8.GUILDS;
                                        var8 = global;
                                        var8 = var8.HermesInternal;
                                        var10 = var8.concat;
                                        var9 = '';
                                        var8 = ':';
                                        var0 = var10.bind(var9)(var11, var8, var12);
                                    case 457:
                                        _fun101613_ip = 794;
                                        continue _fun101613;
                                    case 462:
                                        var8 = _closure1_slot24;
                                        var0 = var8.SEPARATOR;
                                        _fun101613_ip = 794;
                                        continue _fun101613;
                                    case 477:
                                        if (!(var3 != var5)) {
                                            _fun101613_ip = 525;
                                            continue _fun101613
                                        }
                                    case 481:
                                        var8 = _closure1_slot24;
                                        var11 = var8.UNREAD_PRIVATE_CHANNELS;
                                        var10 = var7[var5];
                                        var7 = global;
                                        var7 = var7.HermesInternal;
                                        var9 = var7.concat;
                                        var8 = '';
                                        var7 = ':';
                                        var7 = var9.bind(var8)(var11, var7, var10);
                                        _fun101613_ip = 535;
                                        continue _fun101613;
                                    case 525:
                                        var8 = _closure1_slot24;
                                        var7 = var8.UNREAD_PRIVATE_CHANNELS;
                                    case 535:
                                        var0 = var7;
                                        _fun101613_ip = 794;
                                        continue _fun101613;
                                    case 543:
                                        if (!(var3 != var5)) {
                                            _fun101613_ip = 591;
                                            continue _fun101613
                                        }
                                    case 547:
                                        var7 = _closure1_slot24;
                                        var10 = var7.GUEST_GUILDS;
                                        var9 = var6[var5];
                                        var6 = global;
                                        var6 = var6.HermesInternal;
                                        var8 = var6.concat;
                                        var7 = '';
                                        var6 = ':';
                                        var6 = var8.bind(var7)(var10, var6, var9);
                                        _fun101613_ip = 601;
                                        continue _fun101613;
                                    case 591:
                                        var7 = _closure1_slot24;
                                        var6 = var7.GUEST_GUILDS;
                                    case 601:
                                        var0 = var6;
                                        _fun101613_ip = 794;
                                        continue _fun101613;
                                    case 609:
                                        if (!(var3 != var5)) {
                                            _fun101613_ip = 657;
                                            continue _fun101613
                                        }
                                    case 613:
                                        var6 = _closure1_slot24;
                                        var9 = var6.LURKING_GUILDS;
                                        var8 = var2[var5];
                                        var2 = global;
                                        var2 = var2.HermesInternal;
                                        var7 = var2.concat;
                                        var6 = '';
                                        var2 = ':';
                                        var2 = var7.bind(var6)(var9, var2, var8);
                                        _fun101613_ip = 667;
                                        continue _fun101613;
                                    case 657:
                                        var6 = _closure1_slot24;
                                        var2 = var6.LURKING_GUILDS;
                                    case 667:
                                        var0 = var2;
                                        _fun101613_ip = 794;
                                        continue _fun101613;
                                    case 672:
                                        if (!(var3 != var5)) {
                                            _fun101613_ip = 760;
                                            continue _fun101613
                                        }
                                    case 676:
                                        var6 = var3 == var4;
                                        var7 = undefined;
                                        if (var6) {
                                            _fun101613_ip = 708;
                                            continue _fun101613
                                        }
                                    case 685:
                                        var4 = var4.children;
                                        var4 = var4[var5];
                                        var5 = var3 == var4;
                                        var7 = undefined;
                                        if (var5) {
                                            _fun101613_ip = 708;
                                            continue _fun101613
                                        }
                                    case 703:
                                        var7 = var4.id;
                                    case 708:
                                        var3 = var3 != var7;
                                        var2 = undefined;
                                        if (!var3) {
                                            _fun101613_ip = 755;
                                            continue _fun101613
                                        }
                                    case 717:
                                        var3 = _closure1_slot24;
                                        var6 = var3.PENDING_JOIN_REQUESTS;
                                        var3 = global;
                                        var3 = var3.HermesInternal;
                                        var5 = var3.concat;
                                        var4 = '';
                                        var3 = ':';
                                        var2 = var5.bind(var4)(var6, var3, var7);
                                    case 755:
                                        var0 = var2;
                                        _fun101613_ip = 794;
                                        continue _fun101613;
                                    case 760:
                                        var2 = _closure1_slot24;
                                        var0 = var2.PENDING_JOIN_REQUESTS;
                                        _fun101613_ip = 794;
                                        continue _fun101613;
                                    case 772:
                                        var2 = _closure1_slot24;
                                        var0 = var2.FAVORITES;
                                        _fun101613_ip = 794;
                                        continue _fun101613;
                                    case 784:
                                        var1 = _closure1_slot24;
                                        var0 = var1.MESSAGES;
                                    case 794:
                                        return var0;
                                }
                            };
                            var2 = 'getAnchorIdFromIndex';
                            var0[var2] = var3;
                            var2 = function arg0() {
                                _fun101614: for (var _fun101614_ip = 0;;) switch (_fun101614_ip) {
                                    case 0:
                                        var1 = {};
                                        var0 = arg0;
                                        var1.id = var0;
                                        var2 = _closure2_slot11;
                                        var1.lurkingGuildsIds = var2;
                                        var2 = _closure2_slot12;
                                        var1.guestGuildIds = var2;
                                        var2 = _closure2_slot7;
                                        var1.privateChannelIds = var2;
                                        var2 = _closure2_slot13;
                                        var1.guildsNFolders = var2;
                                        var2 = _closure2_slot15;
                                        var1.pendingFolderNode = var2;
                                        var0 = _closure2_slot10;
                                        var1.geoRestrictedGuilds = var0;
                                        var8 = var1.id;
                                        var3 = var1.lurkingGuildsIds;
                                        var4 = var1.guestGuildIds;
                                        var7 = var1.privateChannelIds;
                                        var6 = var1.guildsNFolders;
                                        var0 = var1.pendingFolderNode;
                                        var5 = var1.geoRestrictedGuilds;
                                        var1 = _closure1_slot24;
                                        var1 = var1.MESSAGES;
                                        if (!(var1 !== var8)) {
                                            _fun101614_ip = 1338;
                                            continue _fun101614
                                        }
                                    case 127:
                                        var1 = _closure1_slot24;
                                        var1 = var1.FAVORITES;
                                        if (!(var1 !== var8)) {
                                            _fun101614_ip = 1317;
                                            continue _fun101614
                                        }
                                    case 144:
                                        var1 = _closure1_slot24;
                                        var1 = var1.PENDING_JOIN_REQUESTS;
                                        if (!(var1 !== var8)) {
                                            _fun101614_ip = 1296;
                                            continue _fun101614
                                        }
                                    case 161:
                                        var1 = _closure1_slot24;
                                        var1 = var1.LURKING_GUILDS;
                                        if (!(var1 !== var8)) {
                                            _fun101614_ip = 1275;
                                            continue _fun101614
                                        }
                                    case 178:
                                        var1 = _closure1_slot24;
                                        var1 = var1.GUEST_GUILDS;
                                        if (!(var1 !== var8)) {
                                            _fun101614_ip = 1254;
                                            continue _fun101614
                                        }
                                    case 195:
                                        var1 = _closure1_slot24;
                                        var1 = var1.UNREAD_PRIVATE_CHANNELS;
                                        if (!(var1 !== var8)) {
                                            _fun101614_ip = 1233;
                                            continue _fun101614
                                        }
                                    case 212:
                                        var1 = _closure1_slot24;
                                        var1 = var1.SEPARATOR;
                                        if (!(var1 !== var8)) {
                                            _fun101614_ip = 1209;
                                            continue _fun101614
                                        }
                                    case 229:
                                        var9 = var8.startsWith;
                                        var1 = _closure1_slot24;
                                        var1 = var1.LURKING_GUILDS;
                                        var1 = var9.bind(var8)(var1);
                                        if (var1) {
                                            _fun101614_ip = 1091;
                                            continue _fun101614
                                        }
                                    case 256:
                                        var9 = var8.startsWith;
                                        var1 = _closure1_slot24;
                                        var1 = var1.PENDING_JOIN_REQUESTS;
                                        var1 = var9.bind(var8)(var1);
                                        if (!var1) {
                                            _fun101614_ip = 413;
                                            continue _fun101614
                                        }
                                    case 283:
                                        var1 = null;
                                        if (!(var1 != var0)) {
                                            _fun101614_ip = 413;
                                            continue _fun101614
                                        }
                                    case 292:
                                        var1 = _closure1_slot26;
                                        var0 = var0.children;
                                        var13 = undefined;
                                        var12 = var1.bind(var13)(var0);
                                        var1 = var12.bind(var13)();
                                        var0 = var1.done;
                                        var10 = 0;
                                        var11 = var1;
                                        var9 = 0;
                                        if (var0) {
                                            _fun101614_ip = 413;
                                            continue _fun101614
                                        }
                                    case 327:
                                        var0 = var11.value;
                                        var14 = _closure1_slot29;
                                        var1 = _closure1_slot24;
                                        var1 = var1.PENDING_JOIN_REQUESTS;
                                        var0 = var0.id;
                                        var0 = var14.bind(var13)(var1, var8, var0);
                                        var1 = var9;
                                        if (var0) {
                                            _fun101614_ip = 384;
                                            continue _fun101614
                                        }
                                    case 364:
                                        var9 = var1 + 1;
                                        var14 = var12.bind(var13)();
                                        var0 = var14.done;
                                        var11 = var14;
                                        if (var0) {
                                            _fun101614_ip = 413;
                                            continue _fun101614
                                        }
                                    case 382:
                                        _fun101614_ip = 327;
                                        continue _fun101614;
                                    case 384:
                                        var0 = {};
                                        var9 = _closure1_slot17;
                                        var9 = var9.PENDING_JOIN_REQUESTS;
                                        var9 = var10 + var9;
                                        var0.section = var9;
                                        var0.item = var1;
                                        _fun101614_ip = 1357;
                                        continue _fun101614;
                                    case 413:
                                        var9 = var8.startsWith;
                                        var1 = _closure1_slot24;
                                        var1 = var1.GUEST_GUILDS;
                                        var1 = var9.bind(var8)(var1);
                                        if (var1) {
                                            _fun101614_ip = 973;
                                            continue _fun101614
                                        }
                                    case 440:
                                        var9 = var8.startsWith;
                                        var1 = _closure1_slot24;
                                        var1 = var1.UNREAD_PRIVATE_CHANNELS;
                                        var1 = var9.bind(var8)(var1);
                                        if (!var1) {
                                            _fun101614_ip = 572;
                                            continue _fun101614
                                        }
                                    case 464:
                                        var1 = _closure1_slot26;
                                        var12 = undefined;
                                        var11 = var1.bind(var12)(var7);
                                        var7 = var11.bind(var12)();
                                        var1 = var7.done;
                                        var9 = var7;
                                        var10 = 0;
                                        if (var1) {
                                            _fun101614_ip = 572;
                                            continue _fun101614
                                        }
                                    case 492:
                                        var13 = var9.value;
                                        var7 = _closure1_slot29;
                                        var1 = _closure1_slot24;
                                        var1 = var1.UNREAD_PRIVATE_CHANNELS;
                                        var1 = var7.bind(var12)(var1, var8, var13);
                                        var7 = var10;
                                        if (var1) {
                                            _fun101614_ip = 544;
                                            continue _fun101614
                                        }
                                    case 524:
                                        var10 = var7 + 1;
                                        var13 = var11.bind(var12)();
                                        var1 = var13.done;
                                        var9 = var13;
                                        if (var1) {
                                            _fun101614_ip = 572;
                                            continue _fun101614
                                        }
                                    case 542:
                                        _fun101614_ip = 492;
                                        continue _fun101614;
                                    case 544:
                                        var1 = {};
                                        var9 = _closure1_slot17;
                                        var9 = var9.UNREAD_PRIVATE_CHANNELS;
                                        var1.section = var9;
                                        var1.item = var7;
                                        var0 = var1;
                                        _fun101614_ip = 1357;
                                        continue _fun101614;
                                    case 572:
                                        var7 = var8.startsWith;
                                        var1 = _closure1_slot24;
                                        var1 = var1.GUILDS;
                                        var1 = var7.bind(var8)(var1);
                                        var11 = undefined;
                                        var0 = undefined;
                                        if (!var1) {
                                            _fun101614_ip = 1357;
                                            continue _fun101614
                                        }
                                    case 603:
                                        var1 = _closure1_slot26;
                                        var13 = var1.bind(var11)(var6);
                                        var6 = var13.bind(var11)();
                                        var1 = var6.done;
                                        var12 = var6;
                                        var6 = 0;
                                        var7 = 0;
                                        if (var1) {
                                            _fun101614_ip = 848;
                                            continue _fun101614
                                        }
                                    case 634:
                                        var1 = var12.value;
                                        var15 = _closure1_slot29;
                                        var9 = _closure1_slot24;
                                        var14 = var9.GUILDS;
                                        var9 = var1.id;
                                        var14 = var15.bind(var11)(var14, var8, var9);
                                        var9 = var6;
                                        if (var14) {
                                            _fun101614_ip = 820;
                                            continue _fun101614
                                        }
                                    case 674:
                                        var14 = _closure1_slot26;
                                        var1 = var1.children;
                                        var17 = var14.bind(var11)(var1);
                                        var14 = var17.bind(var11)();
                                        var1 = var14.done;
                                        var16 = 0;
                                        var15 = var14;
                                        if (var1) {
                                            _fun101614_ip = 794;
                                            continue _fun101614
                                        }
                                    case 705:
                                        var1 = var15.value;
                                        var18 = _closure1_slot29;
                                        var14 = _closure1_slot24;
                                        var14 = var14.GUILDS;
                                        var1 = var1.id;
                                        var1 = var18.bind(var11)(var14, var8, var1);
                                        var14 = var16;
                                        if (var1) {
                                            _fun101614_ip = 762;
                                            continue _fun101614
                                        }
                                    case 742:
                                        var16 = var14 + 1;
                                        var18 = var17.bind(var11)();
                                        var1 = var18.done;
                                        var15 = var18;
                                        if (var1) {
                                            _fun101614_ip = 794;
                                            continue _fun101614
                                        }
                                    case 760:
                                        _fun101614_ip = 705;
                                        continue _fun101614;
                                    case 762:
                                        var1 = {};
                                        var15 = _closure1_slot17;
                                        var15 = var15.GUILDS;
                                        var15 = var9 + var15;
                                        var1.section = var15;
                                        var1.item = var14;
                                        var0 = var1;
                                        _fun101614_ip = 1357;
                                        continue _fun101614;
                                    case 794:
                                        var6 = var9 + 1;
                                        var15 = var13.bind(var11)();
                                        var1 = var15.done;
                                        var12 = var15;
                                        var7 = var6;
                                        if (var1) {
                                            _fun101614_ip = 848;
                                            continue _fun101614
                                        }
                                    case 815:
                                        _fun101614_ip = 634;
                                        continue _fun101614;
                                    case 820:
                                        var1 = {};
                                        var6 = _closure1_slot17;
                                        var6 = var6.GUILDS;
                                        var6 = var9 + var6;
                                        var1.section = var6;
                                        var0 = var1;
                                        _fun101614_ip = 1357;
                                        continue _fun101614;
                                    case 848:
                                        var1 = _closure1_slot26;
                                        var9 = var1.bind(var11)(var5);
                                        var5 = var9.bind(var11)();
                                        var1 = var5.done;
                                        var10 = 0;
                                        var6 = var5;
                                        var0 = undefined;
                                        if (var1) {
                                            _fun101614_ip = 1357;
                                            continue _fun101614
                                        }
                                    case 879:
                                        var1 = var6.value;
                                        var12 = _closure1_slot29;
                                        var5 = _closure1_slot24;
                                        var5 = var5.GUILDS;
                                        var1 = var1.id;
                                        var1 = var12.bind(var11)(var5, var8, var1);
                                        var5 = var10;
                                        if (var1) {
                                            _fun101614_ip = 941;
                                            continue _fun101614
                                        }
                                    case 916:
                                        var10 = var5 + 1;
                                        var12 = var9.bind(var11)();
                                        var1 = var12.done;
                                        var6 = var12;
                                        var0 = undefined;
                                        if (var1) {
                                            _fun101614_ip = 1357;
                                            continue _fun101614
                                        }
                                    case 939:
                                        _fun101614_ip = 879;
                                        continue _fun101614;
                                    case 941:
                                        var1 = {};
                                        var6 = _closure1_slot17;
                                        var6 = var6.GUILDS;
                                        var6 = var7 + var6;
                                        var1.section = var6;
                                        var1.item = var5;
                                        var0 = var1;
                                        _fun101614_ip = 1357;
                                        continue _fun101614;
                                    case 973:
                                        var1 = _closure1_slot26;
                                        var9 = undefined;
                                        var7 = var1.bind(var9)(var4);
                                        var4 = var7.bind(var9)();
                                        var1 = var4.done;
                                        var5 = var4;
                                        var6 = 0;
                                        var0 = undefined;
                                        if (var1) {
                                            _fun101614_ip = 1357;
                                            continue _fun101614
                                        }
                                    case 1006:
                                        var10 = var5.value;
                                        var4 = _closure1_slot29;
                                        var1 = _closure1_slot24;
                                        var1 = var1.GUEST_GUILDS;
                                        var1 = var4.bind(var9)(var1, var8, var10);
                                        var4 = var6;
                                        if (var1) {
                                            _fun101614_ip = 1063;
                                            continue _fun101614
                                        }
                                    case 1038:
                                        var6 = var4 + 1;
                                        var10 = var7.bind(var9)();
                                        var1 = var10.done;
                                        var5 = var10;
                                        var0 = undefined;
                                        if (var1) {
                                            _fun101614_ip = 1357;
                                            continue _fun101614
                                        }
                                    case 1061:
                                        _fun101614_ip = 1006;
                                        continue _fun101614;
                                    case 1063:
                                        var1 = {};
                                        var5 = _closure1_slot17;
                                        var5 = var5.GUEST_GUILDS;
                                        var1.section = var5;
                                        var1.item = var4;
                                        var0 = var1;
                                        _fun101614_ip = 1357;
                                        continue _fun101614;
                                    case 1091:
                                        var1 = _closure1_slot26;
                                        var7 = undefined;
                                        var6 = var1.bind(var7)(var3);
                                        var3 = var6.bind(var7)();
                                        var1 = var3.done;
                                        var4 = var3;
                                        var5 = 0;
                                        var0 = undefined;
                                        if (var1) {
                                            _fun101614_ip = 1357;
                                            continue _fun101614
                                        }
                                    case 1124:
                                        var9 = var4.value;
                                        var3 = _closure1_slot29;
                                        var1 = _closure1_slot24;
                                        var1 = var1.LURKING_GUILDS;
                                        var1 = var3.bind(var7)(var1, var8, var9);
                                        var3 = var5;
                                        if (var1) {
                                            _fun101614_ip = 1181;
                                            continue _fun101614
                                        }
                                    case 1156:
                                        var5 = var3 + 1;
                                        var9 = var6.bind(var7)();
                                        var1 = var9.done;
                                        var4 = var9;
                                        var0 = undefined;
                                        if (var1) {
                                            _fun101614_ip = 1357;
                                            continue _fun101614
                                        }
                                    case 1179:
                                        _fun101614_ip = 1124;
                                        continue _fun101614;
                                    case 1181:
                                        var1 = {};
                                        var4 = _closure1_slot17;
                                        var4 = var4.LURKING_GUILDS;
                                        var1.section = var4;
                                        var1.item = var3;
                                        var0 = var1;
                                        _fun101614_ip = 1357;
                                        continue _fun101614;
                                    case 1209:
                                        var1 = {};
                                        var3 = _closure1_slot17;
                                        var3 = var3.SEPARATOR;
                                        var1.section = var3;
                                        var0 = var1;
                                        _fun101614_ip = 1357;
                                        continue _fun101614;
                                    case 1233:
                                        var1 = {};
                                        var3 = _closure1_slot17;
                                        var3 = var3.UNREAD_PRIVATE_CHANNELS;
                                        var1.section = var3;
                                        var0 = var1;
                                        _fun101614_ip = 1357;
                                        continue _fun101614;
                                    case 1254:
                                        var1 = {};
                                        var3 = _closure1_slot17;
                                        var3 = var3.GUEST_GUILDS;
                                        var1.section = var3;
                                        var0 = var1;
                                        _fun101614_ip = 1357;
                                        continue _fun101614;
                                    case 1275:
                                        var1 = {};
                                        var3 = _closure1_slot17;
                                        var3 = var3.LURKING_GUILDS;
                                        var1.section = var3;
                                        var0 = var1;
                                        _fun101614_ip = 1357;
                                        continue _fun101614;
                                    case 1296:
                                        var1 = {};
                                        var3 = _closure1_slot17;
                                        var3 = var3.PENDING_JOIN_REQUESTS;
                                        var1.section = var3;
                                        var0 = var1;
                                        _fun101614_ip = 1357;
                                        continue _fun101614;
                                    case 1317:
                                        var1 = {};
                                        var3 = _closure1_slot17;
                                        var3 = var3.FAVORITES;
                                        var1.section = var3;
                                        var0 = var1;
                                        _fun101614_ip = 1357;
                                        continue _fun101614;
                                    case 1338:
                                        var1 = {};
                                        var2 = _closure1_slot17;
                                        var2 = var2.MESSAGES;
                                        var1.section = var2;
                                        var0 = var1;
                                    case 1357:
                                        return var0;
                                }
                            };
                            var1 = 'getAnchorIndexFromId';
                            var0[var1] = var2;
                            return var0;
                    }
                };
                var1 = var3.bind(var4)(var0, var1);
                var0 = {};
                var0.listProps = var2;
                var0.listDataProps = var1;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 3471, 3094, 3959, 3964, 12568, 3997, 1683, 1410, 12575, 3214, 4382, 13163, 13166, 5250, 33, 13164, 13206, 13207, 13209, 13212, 13187, 13213, 13216, 13217, 13219, 13220, 13221, 13223, 13226, 1568, 5253, 12450, 566, 12296, 3922, 13228, 13229, 1464, 13231, 6549, 2]);