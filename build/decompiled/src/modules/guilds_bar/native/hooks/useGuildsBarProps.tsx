// modules/guilds_bar/native/hooks/useGuildsBarProps.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function arg0, arg1() {
        _fun100868: for (var _fun100868_ip = 0;;) switch (_fun100868_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun100868_ip = 46;
                    continue _fun100868
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun100868_ip = 55;
                    continue _fun100868
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun100868_ip = 345;
                    continue _fun100868
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun100868_ip = 323;
                    continue _fun100868
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun100868_ip = 283;
                    continue _fun100868
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun100868_ip = 270;
                    continue _fun100868
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
                    _fun100868_ip = 163;
                    continue _fun100868
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun100868_ip = 179;
                    continue _fun100868
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun100868_ip = 249;
                    continue _fun100868
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun100868_ip = 249;
                    continue _fun100868
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun100868_ip = 234;
                    continue _fun100868
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun100868_ip = 247;
                    continue _fun100868
                }
            case 234:
                var8 = _closure1_slot24;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun100868_ip = 265;
                continue _fun100868;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun100868_ip = 283;
                continue _fun100868;
            case 270:
                var6 = _closure1_slot24;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun100868_ip = 323;
                    continue _fun100868
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
                    _fun100868_ip = 330;
                    continue _fun100868
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun100869: for (var _fun100869_ip = 0;;) switch (_fun100869_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun100869_ip = 56;
                                continue _fun100869
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
                            _fun100869_ip = 67;
                            continue _fun100869;
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
    var _closure1_slot23 = var0;
    var0 = function arg0, arg1() {
        _fun100870: for (var _fun100870_ip = 0;;) switch (_fun100870_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun100870_ip = 23;
                    continue _fun100870
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun100870_ip = 33;
                    continue _fun100870
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
                    _fun100870_ip = 70;
                    continue _fun100870
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun100870_ip = 55;
                    continue _fun100870
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot24 = var0;
    var0 = function arg0() {
        _fun100871: for (var _fun100871_ip = 0;;) switch (_fun100871_ip) {
            case 0:
                var15 = arg0;
                var1 = _closure1_slot23;
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
                    _fun100871_ip = 344;
                    continue _fun100871
                }
            case 70:
                var23 = var10.value;
                var18 = var9 + 1;
                var16 = var23.type;
                var0 = _closure1_slot15;
                var0 = var0.GUILD;
                if (!(var16 === var0)) {
                    _fun100871_ip = 116;
                    continue _fun100871
                }
            case 97:
                var0 = var23.id;
                var4 = var18;
                var2 = 0;
                var1 = true;
                if (!(var0 !== var15)) {
                    _fun100871_ip = 344;
                    continue _fun100871
                }
            case 116:
                var20 = var23.type;
                var0 = _closure1_slot15;
                var0 = var0.FOLDER;
                var17 = 0;
                var16 = var8;
                var19 = var5;
                if (!(var20 === var0)) {
                    _fun100871_ip = 296;
                    continue _fun100871
                }
            case 146:
                var20 = _closure1_slot23;
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
                    _fun100871_ip = 296;
                    continue _fun100871
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
                    _fun100871_ip = 236;
                    continue _fun100871
                }
            case 224:
                var24 = var0.id;
                if (!(var24 !== var15)) {
                    _fun100871_ip = 271;
                    continue _fun100871
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
                    _fun100871_ip = 296;
                    continue _fun100871
                }
            case 269:
                _fun100871_ip = 191;
                continue _fun100871;
            case 271:
                var23 = var23.expanded;
                if (var23) {
                    _fun100871_ip = 282;
                    continue _fun100871
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
                    _fun100871_ip = 344;
                    continue _fun100871
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
                    _fun100871_ip = 70;
                    continue _fun100871
                }
            case 344:
                var0 = null;
                if (!var1) {
                    _fun100871_ip = 376;
                    continue _fun100871
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
    var _closure1_slot25 = var0;
    var0 = function arg0, arg1, arg2() {
        _fun100872: for (var _fun100872_ip = 0;;) switch (_fun100872_ip) {
            case 0:
                var5 = arg2;
                var0 = null;
                var0 = var0 != var5;
                if (!var0) {
                    _fun100872_ip = 50;
                    continue _fun100872
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
    var _closure1_slot26 = var0;
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
    var7 = 2;
    var3 = var5[var7];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot12 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot13 = var3;
    var3 = 11;
    var8 = var5[var3];
    var8 = var6.bind(var0)(var8);
    var _closure1_slot14 = var8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.GuildsNodeType;
    var _closure1_slot15 = var3;
    var3 = 12;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
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
    var8 = var8.jsx;
    var _closure1_slot20 = var8;
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
    var _closure1_slot21 = var8;
    var3 = var7 * var3;
    var3 = var6 + var3;
    var _closure1_slot22 = var3;
    var3 = 43;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guilds_bar/native/hooks/useGuildsBarProps.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun100873: for (var _fun100873_ip = 0;;) switch (_fun100873_ip) {
            case 0:
                var1 = arg0;
                var _closure2_slot0 = var1;
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 31;
                var2 = var6[var2];
                var8 = undefined;
                var2 = var5.bind(var8)(var2);
                var2 = var2.bind(var8)();
                var25 = var2.top;
                var _closure2_slot1 = var25;
                var23 = var2.bottom;
                var _closure2_slot2 = var23;
                var7 = _closure1_slot0;
                var2 = 32;
                var2 = var6[var2];
                var4 = var7.bind(var8)(var2);
                var2 = var4.useMobileQuestDockHeight;
                var24 = var2.bind(var4)();
                var _closure2_slot3 = var24;
                var4 = _closure1_slot19;
                var22 = var4.bind(var8)();
                var _closure2_slot4 = var22;
                var2 = 4;
                var2 = var4.bind(var8)(var2);
                var _closure2_slot5 = var2;
                var11 = _closure1_slot3;
                var10 = var11.useEffect;
                var9 = new Array(3);
                var9[0] = var24;
                var9[1] = var25;
                var9[2] = var22;
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
                var4 = var10.bind(var11)(var4, var9);
                var4 = 33;
                var4 = var6[var4];
                var4 = var7.bind(var8)(var4);
                var10 = var4.IOSInAppEducationExperiment;
                var9 = var10.useExperiment;
                var7 = {};
                var4 = 'Mobile GuildList';
                var7.location = var4;
                var4 = {};
                var11 = true;
                var4.autoTrackExposure = var11;
                var4 = var9.bind(var10)(var7, var4);
                var9 = var4.enabled;
                var _closure2_slot6 = var9;
                var4 = 34;
                var4 = var6[var4];
                var4 = var5.bind(var8)(var4);
                var4 = var4.bind(var8)();
                var18 = 0;
                if (!var4) {
                    _fun100873_ip = 232;
                    continue _fun100873
                }
            case 229:
                var18 = 1;
            case 232:
                var _closure2_slot7 = var18;
                var12 = _closure1_slot0;
                var20 = _closure1_slot2;
                var4 = 35;
                var5 = var20[var4];
                var11 = var12.bind(var8)(var5);
                var10 = var11.useStateFromStoresArray;
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
                    var0 = 36;
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
                var14 = var10.bind(var11)(var7, var6, var5);
                var _closure2_slot8 = var14;
                var5 = 37;
                var5 = var20[var5];
                var5 = var12.bind(var8)(var5);
                var7 = var5.MobileHomeDrawerExperiment;
                var6 = var7.useConfig;
                var5 = {};
                var10 = 'guilds-bar';
                var5.location = var10;
                var5 = var6.bind(var7)(var5);
                var5 = var5.enableHome;
                var _closure2_slot9 = var5;
                var6 = var20[var4];
                var11 = var12.bind(var8)(var6);
                var10 = var11.useStateFromStores;
                var6 = _closure1_slot4;
                var7 = new Array(1);
                var7[0] = var6;
                var6 = function() { // Environment: var0
                    var1 = _closure1_slot4;
                    var0 = var1.isConnected;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var11 = var10.bind(var11)(var7, var6);
                var _closure2_slot10 = var11;
                var6 = var20[var4];
                var13 = var12.bind(var8)(var6);
                var10 = var13.useStateFromStoresArray;
                var6 = _closure1_slot8;
                var7 = new Array(1);
                var7[0] = var6;
                var6 = function() { // Environment: var0
                    var1 = _closure1_slot8;
                    var0 = var1.getGeoRestrictedGuilds;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var13 = var10.bind(var13)(var7, var6);
                var _closure2_slot11 = var13;
                var6 = var20[var4];
                var15 = var12.bind(var8)(var6);
                var10 = var15.useStateFromStores;
                var6 = _closure1_slot5;
                var7 = new Array(1);
                var7[0] = var6;
                var6 = function() { // Environment: var0
                    var1 = _closure1_slot5;
                    var0 = var1.lurkingGuildIds;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var16 = var10.bind(var15)(var7, var6);
                var _closure2_slot12 = var16;
                var6 = var20[var4];
                var15 = var12.bind(var8)(var6);
                var10 = var15.useStateFromStoresArray;
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
                var15 = var10.bind(var15)(var7, var6);
                var _closure2_slot13 = var15;
                var6 = var20[var4];
                var26 = var12.bind(var8)(var6);
                var21 = var26.useStateFromStores;
                var6 = _closure1_slot14;
                var17 = new Array(1);
                var17[0] = var6;
                var19 = _closure1_slot1;
                var6 = 38;
                var6 = var20[var6];
                var27 = var19.bind(var8)(var6);
                var29 = function() { // Environment: var0
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
                var28 = new Array(0);
                var31 = var26;
                var30 = var17;
                var6 = var31[var21](var30, var29, var28, var27, var26);
                var10 = var6.guildsNFolders;
                var _closure2_slot14 = var10;
                var7 = var6.version;
                var6 = 39;
                var6 = var20[var6];
                var6 = var19.bind(var8)(var6);
                var17 = var6.bind(var8)();
                var6 = var17.expanded;
                var _closure2_slot15 = var6;
                var17 = var17.pendingFolderNode;
                var _closure2_slot16 = var17;
                var4 = var20[var4];
                var26 = var12.bind(var8)(var4);
                var21 = var26.useStateFromStores;
                var4 = _closure1_slot9;
                var12 = new Array(1);
                var12[0] = var4;
                var4 = function() { // Environment: var0
                    var0 = _closure1_slot9;
                    var0 = var0.totalUnavailableGuilds;
                    return var0;
                };
                var12 = var21.bind(var26)(var12, var4);
                var _closure2_slot17 = var12;
                var4 = _closure1_slot3;
                var21 = var4.useMemo;
                var3 = new Array(5);
                var3[0] = var25;
                var3[1] = var24;
                var3[2] = var23;
                var3[3] = var22;
                var3[4] = var2;
                var2 = function() { // Environment: var0
                    _fun100883: for (var _fun100883_ip = 0;;) switch (_fun100883_ip) {
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
                                _fun100883_ip = 53;
                                continue _fun100883
                            }
                        case 35:
                            var5 = _closure2_slot2;
                            var4 = _closure1_slot18;
                            var4 = var6 * var4;
                            var4 = var5 + var4;
                            _fun100883_ip = 57;
                            continue _fun100883;
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
                            var1 = 40;
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
                var2 = var21.bind(var4)(var2, var3);
                var _closure2_slot18 = var2;
                var21 = var4.useCallback;
                var22 = var2.insetStart;
                var3 = new Array(3);
                var3[0] = var22;
                var22 = var2.insetEnd;
                var3[1] = var22;
                var3[2] = var1;
                var1 = function(arg0, arg1) { // Environment: var0
                    _fun100884: for (var _fun100884_ip = 0;;) switch (_fun100884_ip) {
                        case 0:
                            var3 = arg0;
                            var1 = null;
                            if (!(var1 == var3)) {
                                _fun100884_ip = 47;
                                continue _fun100884
                            }
                        case 9:
                            var0 = _closure2_slot0;
                            var5 = var0.current;
                            if (!(var1 != var5)) {
                                _fun100884_ip = 155;
                                continue _fun100884
                            }
                        case 28:
                            var4 = var5.scrollTo;
                            var2 = 0;
                            var0 = arg1;
                            var0 = var4.bind(var5)(var2, var0);
                            _fun100884_ip = 155;
                            continue _fun100884;
                        case 47:
                            var2 = _closure1_slot25;
                            var0 = undefined;
                            var5 = var2.bind(var0)(var3);
                            if (!(var1 != var5)) {
                                _fun100884_ip = 159;
                                continue _fun100884
                            }
                        case 65:
                            var2 = _closure2_slot0;
                            var3 = var2.current;
                            if (!(var1 != var3)) {
                                _fun100884_ip = 155;
                                continue _fun100884
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
                            var5 = _closure2_slot18;
                            var6 = var5.insetStart;
                            var5 = 'paddingStart';
                            var1[var5] = var6;
                            var4 = _closure2_slot18;
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
                var3 = var21.bind(var4)(var1, var3);
                var1 = 41;
                var1 = var20[var1];
                var1 = var19.bind(var8)(var1);
                var1 = var1.bind(var8)(var3);
                var8 = var4.useMemo;
                var3 = function() { // Environment: var0
                    _fun100885: for (var _fun100885_ip = 0;;) switch (_fun100885_ip) {
                        case 0:
                            var1 = _closure1_slot13;
                            var0 = var1.getGuildId;
                            var4 = var0.bind(var1)();
                            var2 = null;
                            var5 = var2 != var4;
                            var0 = undefined;
                            var1 = undefined;
                            if (!var5) {
                                _fun100885_ip = 39;
                                continue _fun100885
                            }
                        case 30:
                            var3 = _closure1_slot25;
                            var1 = var3.bind(var0)(var4);
                        case 39:
                            if (!(var2 == var1)) {
                                _fun100885_ip = 45;
                                continue _fun100885
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
                var _closure2_slot19 = var8;
                var3 = var4.useMemo;
                var1 = new Array(14);
                var1[0] = var18;
                var1[1] = var17;
                var1[2] = var16;
                var1[3] = var15;
                var1[4] = var14;
                var1[5] = var13;
                var1[6] = var12;
                var1[7] = var11;
                var1[8] = var10;
                var1[9] = var9;
                var1[10] = var8;
                var1[11] = var7;
                var1[12] = var6;
                var1[13] = var5;
                var0 = function() { // Environment: var0
                    _fun100886: for (var _fun100886_ip = 0;;) switch (_fun100886_ip) {
                        case 0:
                            var0 = _closure2_slot7;
                            var3 = [1];
                            var3[1] = var0;
                            var4 = _closure2_slot16;
                            var0 = null;
                            var4 = var0 == var4;
                            var6 = 0;
                            var0 = 0;
                            if (var4) {
                                _fun100886_ip = 67;
                                continue _fun100886
                            }
                        case 40:
                            var5 = _closure2_slot15;
                            var4 = 1;
                            if (!var5) {
                                _fun100886_ip = 64;
                                continue _fun100886
                            }
                        case 50:
                            var5 = _closure2_slot16;
                            var5 = var5.children;
                            var4 = var5.length;
                        case 64:
                            var0 = var4;
                        case 67:
                            var3[2] = var0;
                            var0 = _closure2_slot12;
                            var0 = var0.length;
                            var3[3] = var0;
                            var0 = _closure2_slot13;
                            var0 = var0.length;
                            var3[4] = var0;
                            var0 = global;
                            var7 = var0.Math;
                            var5 = var7.min;
                            var0 = _closure2_slot8;
                            var4 = var0.length;
                            var0 = 10;
                            var0 = var5.bind(var7)(var4, var0);
                            var3[5] = var0;
                            var9 = 1;
                            var3[6] = var9;
                            var4 = _closure1_slot23;
                            var0 = _closure2_slot14;
                            var7 = undefined;
                            var5 = var4.bind(var7)(var0);
                            var4 = var5.bind(var7)();
                            var0 = var4.done;
                            if (var0) {
                                _fun100886_ip = 275;
                                continue _fun100886
                            }
                        case 169:
                            var0 = var4.value;
                            var11 = var0.type;
                            var10 = _closure1_slot15;
                            var10 = var10.GUILD;
                            if (!(var11 !== var10)) {
                                _fun100886_ip = 250;
                                continue _fun100886
                            }
                        case 193:
                            var11 = var0.type;
                            var10 = _closure1_slot15;
                            var10 = var10.FOLDER;
                            if (!(var11 === var10)) {
                                _fun100886_ip = 260;
                                continue _fun100886
                            }
                        case 212:
                            var11 = var0.expanded;
                            var10 = var3.push;
                            if (var11) {
                                _fun100886_ip = 233;
                                continue _fun100886
                            }
                        case 226:
                            var11 = var10.bind(var3)(var9);
                            _fun100886_ip = 260;
                            continue _fun100886;
                        case 233:
                            var0 = var0.children;
                            var0 = var0.length;
                            var0 = var10.bind(var3)(var0);
                            _fun100886_ip = 260;
                            continue _fun100886;
                        case 250:
                            var0 = var3.push;
                            var0 = var0.bind(var3)(var9);
                        case 260:
                            var10 = var5.bind(var7)();
                            var0 = var10.done;
                            var4 = var10;
                            if (!var0) {
                                _fun100886_ip = 169;
                                continue _fun100886
                            }
                        case 275:
                            var0 = _closure2_slot11;
                            var0 = var0.length;
                            if (!(var0 > var6)) {
                                _fun100886_ip = 307;
                                continue _fun100886
                            }
                        case 288:
                            var4 = var3.push;
                            var0 = _closure2_slot11;
                            var0 = var0.length;
                            var0 = var4.bind(var3)(var0);
                        case 307:
                            var5 = new Array(0);
                            var _closure3_slot0 = var5;
                            var0 = _closure2_slot17;
                            if (!(var0 > var6)) {
                                _fun100886_ip = 339;
                                continue _fun100886
                            }
                        case 323:
                            var4 = var5.push;
                            var0 = 'unavailable-guilds';
                            var0 = var4.bind(var5)(var0);
                        case 339:
                            var0 = _closure2_slot10;
                            if (!var0) {
                                _fun100886_ip = 359;
                                continue _fun100886
                            }
                        case 346:
                            var4 = _closure2_slot14;
                            var4 = var4.length;
                            var0 = var6 === var4;
                        case 359:
                            if (!var0) {
                                _fun100886_ip = 370;
                                continue _fun100886
                            }
                        case 362:
                            var4 = _closure2_slot17;
                            var0 = var6 === var4;
                        case 370:
                            if (!var0) {
                                _fun100886_ip = 389;
                                continue _fun100886
                            }
                        case 373:
                            var4 = var5.push;
                            var0 = 'empty-nux';
                            var0 = var4.bind(var5)(var0);
                        case 389:
                            var0 = _closure2_slot9;
                            if (var0) {
                                _fun100886_ip = 412;
                                continue _fun100886
                            }
                        case 396:
                            var4 = var5.push;
                            var0 = 'create-join-guild';
                            var0 = var4.bind(var5)(var0);
                        case 412:
                            var0 = _closure2_slot6;
                            if (!var0) {
                                _fun100886_ip = 435;
                                continue _fun100886
                            }
                        case 419:
                            var4 = var5.push;
                            var0 = 'app-education';
                            var0 = var4.bind(var5)(var0);
                        case 435:
                            var0 = {};
                            var12 = _closure2_slot19;
                            var13 = var0;
                            var2 = copyDataProperties(var13, var12);
                            var2 = 'sections';
                            var0[var2] = var3;
                            var3 = function arg0() {
                                _fun100887: for (var _fun100887_ip = 0;;) switch (_fun100887_ip) {
                                    case 0:
                                        var4 = arg0;
                                        var3 = _closure2_slot14;
                                        var2 = _closure2_slot16;
                                        var0 = _closure1_slot17;
                                        var0 = var0.PENDING_JOIN_REQUESTS;
                                        if (!(var4 === var0)) {
                                            _fun100887_ip = 37;
                                            continue _fun100887
                                        }
                                    case 31:
                                        var0 = null;
                                        if (!(var0 == var2)) {
                                            _fun100887_ip = 115;
                                            continue _fun100887
                                        }
                                    case 37:
                                        var0 = _closure1_slot17;
                                        var0 = var0.GUILDS;
                                        var2 = var4 >= var0;
                                        var0 = 0;
                                        if (!var2) {
                                            _fun100887_ip = 119;
                                            continue _fun100887
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
                                            _fun100887_ip = 110;
                                            continue _fun100887
                                        }
                                    case 85:
                                        var4 = var3.type;
                                        var3 = _closure1_slot15;
                                        var3 = var3.FOLDER;
                                        var2 = 0;
                                        if (!(var4 === var3)) {
                                            _fun100887_ip = 110;
                                            continue _fun100887
                                        }
                                    case 106:
                                        var2 = _closure1_slot22;
                                    case 110:
                                        var0 = var2;
                                        _fun100887_ip = 119;
                                        continue _fun100887;
                                    case 115:
                                        var0 = _closure1_slot22;
                                    case 119:
                                        return var0;
                                }
                            };
                            var2 = 'sectionSize';
                            var0[var2] = var3;
                            var3 = function arg0, arg1() {
                                _fun100888: for (var _fun100888_ip = 0;;) switch (_fun100888_ip) {
                                    case 0:
                                        var0 = {};
                                        var1 = arg0;
                                        var0.section = var1;
                                        var1 = arg1;
                                        var0.row = var1;
                                        var2 = _closure2_slot14;
                                        var0.guildsNFolders = var2;
                                        var2 = _closure2_slot16;
                                        var0.pendingFolderNode = var2;
                                        var2 = _closure2_slot8;
                                        var0.privateChannelIds = var2;
                                        var1 = _closure2_slot11;
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
                                            _fun100888_ip = 486;
                                            continue _fun100888
                                        }
                                    case 111:
                                        var0 = _closure1_slot17;
                                        var0 = var0.FAVORITES;
                                        if (!(var0 !== var10)) {
                                            _fun100888_ip = 486;
                                            continue _fun100888
                                        }
                                    case 128:
                                        var0 = _closure1_slot17;
                                        var0 = var0.LURKING_GUILDS;
                                        if (!(var0 !== var10)) {
                                            _fun100888_ip = 486;
                                            continue _fun100888
                                        }
                                    case 145:
                                        var0 = _closure1_slot17;
                                        var0 = var0.GUEST_GUILDS;
                                        if (!(var0 !== var10)) {
                                            _fun100888_ip = 486;
                                            continue _fun100888
                                        }
                                    case 162:
                                        var0 = _closure1_slot17;
                                        var0 = var0.UNREAD_PRIVATE_CHANNELS;
                                        if (!(var0 !== var10)) {
                                            _fun100888_ip = 446;
                                            continue _fun100888
                                        }
                                    case 179:
                                        var0 = _closure1_slot17;
                                        var2 = var0.SEPARATOR;
                                        var0 = 9;
                                        if (!(var2 !== var10)) {
                                            _fun100888_ip = 490;
                                            continue _fun100888
                                        }
                                    case 199:
                                        var2 = _closure1_slot17;
                                        var2 = var2.PENDING_JOIN_REQUESTS;
                                        if (!(var2 !== var10)) {
                                            _fun100888_ip = 388;
                                            continue _fun100888
                                        }
                                    case 216:
                                        var8 = null;
                                        var2 = var8 == var5;
                                        var7 = 0;
                                        var0 = 0;
                                        if (var2) {
                                            _fun100888_ip = 490;
                                            continue _fun100888
                                        }
                                    case 232:
                                        var2 = _closure1_slot17;
                                        var2 = var2.GUILDS;
                                        var2 = var10 - var2;
                                        var10 = var6.length;
                                        if (!(var10 >= var2)) {
                                            _fun100888_ip = 263;
                                            continue _fun100888
                                        }
                                    case 255:
                                        var9 = var9[var5];
                                        if (!(var8 == var9)) {
                                            _fun100888_ip = 382;
                                            continue _fun100888
                                        }
                                    case 263:
                                        var6 = var6[var2];
                                        var9 = var8 == var6;
                                        var2 = 0;
                                        if (var9) {
                                            _fun100888_ip = 377;
                                            continue _fun100888
                                        }
                                    case 276:
                                        var10 = var6.type;
                                        var9 = _closure1_slot15;
                                        var9 = var9.ROOT;
                                        var2 = 0;
                                        if (!(var10 !== var9)) {
                                            _fun100888_ip = 377;
                                            continue _fun100888
                                        }
                                    case 297:
                                        var10 = var6.type;
                                        var9 = _closure1_slot15;
                                        var9 = var9.GUILD;
                                        if (!(var10 === var9)) {
                                            _fun100888_ip = 325;
                                            continue _fun100888
                                        }
                                    case 316:
                                        var9 = var5 > var7;
                                        var2 = 0;
                                        if (var9) {
                                            _fun100888_ip = 377;
                                            continue _fun100888
                                        }
                                    case 325:
                                        var10 = var6.type;
                                        var9 = _closure1_slot15;
                                        var9 = var9.FOLDER;
                                        if (!(var10 === var9)) {
                                            _fun100888_ip = 373;
                                            continue _fun100888
                                        }
                                    case 344:
                                        var9 = var6.expanded;
                                        var2 = 0;
                                        if (!var9) {
                                            _fun100888_ip = 377;
                                            continue _fun100888
                                        }
                                    case 355:
                                        var6 = var6.children;
                                        var6 = var6[var5];
                                        var6 = var8 == var6;
                                        var2 = 0;
                                        if (var6) {
                                            _fun100888_ip = 377;
                                            continue _fun100888
                                        }
                                    case 373:
                                        var2 = _closure1_slot22;
                                    case 377:
                                        var0 = var2;
                                        _fun100888_ip = 490;
                                        continue _fun100888;
                                    case 382:
                                        var0 = _closure1_slot22;
                                        _fun100888_ip = 490;
                                        continue _fun100888;
                                    case 388:
                                        var7 = null;
                                        var8 = var7 != var5;
                                        var2 = 0;
                                        if (!var8) {
                                            _fun100888_ip = 441;
                                            continue _fun100888
                                        }
                                    case 399:
                                        var8 = var7 != var3;
                                        var2 = 0;
                                        if (!var8) {
                                            _fun100888_ip = 441;
                                            continue _fun100888
                                        }
                                    case 408:
                                        var8 = var3.expanded;
                                        var2 = 0;
                                        if (!var8) {
                                            _fun100888_ip = 441;
                                            continue _fun100888
                                        }
                                    case 419:
                                        var3 = var3.children;
                                        var3 = var3[var5];
                                        var3 = var7 != var3;
                                        var2 = 0;
                                        if (!var3) {
                                            _fun100888_ip = 441;
                                            continue _fun100888
                                        }
                                    case 437:
                                        var2 = _closure1_slot22;
                                    case 441:
                                        var0 = var2;
                                        _fun100888_ip = 490;
                                        continue _fun100888;
                                    case 446:
                                        var3 = null;
                                        var6 = var3 != var5;
                                        var2 = -1;
                                        if (!var6) {
                                            _fun100888_ip = 464;
                                            continue _fun100888
                                        }
                                    case 461:
                                        var2 = var5;
                                    case 464:
                                        var2 = var4[var2];
                                        var3 = var3 == var2;
                                        var2 = 0;
                                        if (var3) {
                                            _fun100888_ip = 481;
                                            continue _fun100888
                                        }
                                    case 477:
                                        var2 = _closure1_slot22;
                                    case 481:
                                        var0 = var2;
                                        _fun100888_ip = 490;
                                        continue _fun100888;
                                    case 486:
                                        var0 = _closure1_slot22;
                                    case 490:
                                        return var0;
                                }
                            };
                            var2 = 'itemSize';
                            var0[var2] = var3;
                            var3 = function() {
                                _fun100889: for (var _fun100889_ip = 0;;) switch (_fun100889_ip) {
                                    case 0:
                                        var1 = _closure3_slot0;
                                        var0 = _closure1_slot23;
                                        var7 = undefined;
                                        var6 = var0.bind(var7)(var1);
                                        var2 = var6.bind(var7)();
                                        var0 = var2.done;
                                        var5 = 9;
                                        var4 = 'app-education';
                                        var3 = var2;
                                        var2 = 0;
                                        var1 = 0;
                                        if (var0) {
                                            _fun100889_ip = 91;
                                            continue _fun100889
                                        }
                                    case 49:
                                        var0 = var3.value;
                                        var9 = var2;
                                        if (!(var4 === var0)) {
                                            _fun100889_ip = 65;
                                            continue _fun100889
                                        }
                                    case 61:
                                        var9 = var2 + var5;
                                    case 65:
                                        var0 = _closure1_slot22;
                                        var2 = var9 + var0;
                                        var10 = var6.bind(var7)();
                                        var0 = var10.done;
                                        var3 = var10;
                                        var1 = var2;
                                        if (!var0) {
                                            _fun100889_ip = 49;
                                            continue _fun100889
                                        }
                                    case 91:
                                        var0 = 8;
                                        var0 = var1 + var0;
                                        return var0;
                                }
                            };
                            var2 = 'footerSize';
                            var0[var2] = var3;
                            var3 = function arg0() {
                                _fun100890: for (var _fun100890_ip = 0;;) switch (_fun100890_ip) {
                                    case 0:
                                        var4 = arg0;
                                        var3 = _closure2_slot14;
                                        var8 = _closure2_slot16;
                                        var0 = _closure1_slot17;
                                        var0 = var0.GUILDS;
                                        if (!(!(var4 >= var0))) {
                                            _fun100890_ip = 130;
                                            continue _fun100890
                                        }
                                    case 31:
                                        var0 = _closure1_slot17;
                                        var2 = var0.PENDING_JOIN_REQUESTS;
                                        var5 = null;
                                        var0 = null;
                                        if (!(var4 === var2)) {
                                            _fun100890_ip = 251;
                                            continue _fun100890
                                        }
                                    case 52:
                                        var2 = var5 != var8;
                                        var0 = null;
                                        if (!var2) {
                                            _fun100890_ip = 251;
                                            continue _fun100890
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
                                        _fun100890_ip = 251;
                                        continue _fun100890;
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
                                            _fun100890_ip = 251;
                                            continue _fun100890
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
                                _fun100891: for (var _fun100891_ip = 0;;) switch (_fun100891_ip) {
                                    case 0:
                                        var9 = arg0;
                                        var3 = arg1;
                                        var8 = _closure2_slot14;
                                        var5 = _closure2_slot8;
                                        var2 = _closure2_slot12;
                                        var4 = _closure2_slot13;
                                        var7 = _closure2_slot11;
                                        var6 = _closure2_slot16;
                                        var0 = _closure1_slot17;
                                        var0 = var0.MESSAGES;
                                        if (!(var0 !== var9)) {
                                            _fun100891_ip = 778;
                                            continue _fun100891
                                        }
                                    case 53:
                                        var0 = _closure1_slot17;
                                        var0 = var0.FAVORITES;
                                        if (!(var0 !== var9)) {
                                            _fun100891_ip = 742;
                                            continue _fun100891
                                        }
                                    case 70:
                                        var0 = _closure1_slot17;
                                        var0 = var0.LURKING_GUILDS;
                                        if (!(var0 !== var9)) {
                                            _fun100891_ip = 686;
                                            continue _fun100891
                                        }
                                    case 87:
                                        var0 = _closure1_slot17;
                                        var0 = var0.GUEST_GUILDS;
                                        if (!(var0 !== var9)) {
                                            _fun100891_ip = 627;
                                            continue _fun100891
                                        }
                                    case 104:
                                        var0 = _closure1_slot17;
                                        var0 = var0.UNREAD_PRIVATE_CHANNELS;
                                        if (!(var0 !== var9)) {
                                            _fun100891_ip = 568;
                                            continue _fun100891
                                        }
                                    case 121:
                                        var0 = _closure1_slot17;
                                        var0 = var0.SEPARATOR;
                                        if (!(var0 !== var9)) {
                                            _fun100891_ip = 529;
                                            continue _fun100891
                                        }
                                    case 138:
                                        var0 = _closure1_slot17;
                                        var0 = var0.PENDING_JOIN_REQUESTS;
                                        if (!(var0 !== var9)) {
                                            _fun100891_ip = 425;
                                            continue _fun100891
                                        }
                                    case 155:
                                        var0 = _closure1_slot17;
                                        var0 = var0.GUILDS;
                                        var0 = var9 - var0;
                                        var9 = var8.length;
                                        if (!(!(var0 >= var9))) {
                                            _fun100891_ip = 365;
                                            continue _fun100891
                                        }
                                    case 181:
                                        var8 = var8[var0];
                                        var11 = null;
                                        var9 = var11 == var8;
                                        var0 = null;
                                        if (var9) {
                                            _fun100891_ip = 360;
                                            continue _fun100891
                                        }
                                    case 199:
                                        var10 = var8.type;
                                        var9 = _closure1_slot15;
                                        var9 = var9.ROOT;
                                        var0 = null;
                                        if (!(var10 !== var9)) {
                                            _fun100891_ip = 360;
                                            continue _fun100891
                                        }
                                    case 223:
                                        var10 = var8.type;
                                        var9 = _closure1_slot15;
                                        var9 = var9.GUILD;
                                        if (!(var10 === var9)) {
                                            _fun100891_ip = 253;
                                            continue _fun100891
                                        }
                                    case 242:
                                        var9 = 0;
                                        var9 = var3 > var9;
                                        var0 = null;
                                        if (var9) {
                                            _fun100891_ip = 360;
                                            continue _fun100891
                                        }
                                    case 253:
                                        var10 = var8.type;
                                        var9 = _closure1_slot15;
                                        var9 = var9.FOLDER;
                                        var13 = var8;
                                        if (!(var10 === var9)) {
                                            _fun100891_ip = 284;
                                            continue _fun100891
                                        }
                                    case 275:
                                        var8 = var8.children;
                                        var13 = var8[var3];
                                    case 284:
                                        var9 = var11 == var13;
                                        var8 = null;
                                        if (var9) {
                                            _fun100891_ip = 357;
                                            continue _fun100891
                                        }
                                    case 293:
                                        var10 = var13.type;
                                        var9 = _closure1_slot15;
                                        var9 = var9.GUILD;
                                        var8 = null;
                                        if (!(var10 === var9)) {
                                            _fun100891_ip = 357;
                                            continue _fun100891
                                        }
                                    case 314:
                                        var12 = _closure1_slot20;
                                        var10 = _closure1_slot1;
                                        var11 = _closure1_slot2;
                                        var9 = 20;
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
                                        _fun100891_ip = 812;
                                        continue _fun100891;
                                    case 365:
                                        var12 = var7[var3];
                                        var7 = null;
                                        var8 = var7 != var12;
                                        if (!var8) {
                                            _fun100891_ip = 417;
                                            continue _fun100891
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
                                        _fun100891_ip = 812;
                                        continue _fun100891;
                                    case 425:
                                        var9 = null;
                                        var7 = var9 == var6;
                                        var0 = null;
                                        if (var7) {
                                            _fun100891_ip = 812;
                                            continue _fun100891
                                        }
                                    case 439:
                                        var6 = var6.children;
                                        var11 = var6[var3];
                                        var7 = var9 == var11;
                                        var6 = null;
                                        if (var7) {
                                            _fun100891_ip = 521;
                                            continue _fun100891
                                        }
                                    case 457:
                                        var8 = var11.type;
                                        var7 = _closure1_slot15;
                                        var7 = var7.GUILD;
                                        var6 = null;
                                        if (!(var8 === var7)) {
                                            _fun100891_ip = 521;
                                            continue _fun100891
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
                                        _fun100891_ip = 812;
                                        continue _fun100891;
                                    case 529:
                                        var9 = _closure1_slot20;
                                        var7 = _closure1_slot1;
                                        var8 = _closure1_slot2;
                                        var6 = 22;
                                        var6 = var8[var6];
                                        var8 = undefined;
                                        var7 = var7.bind(var8)(var6);
                                        var6 = {};
                                        var0 = var9.bind(var8)(var7, var6);
                                        _fun100891_ip = 812;
                                        continue _fun100891;
                                    case 568:
                                        var10 = var5[var3];
                                        var5 = null;
                                        var6 = var5 == var10;
                                        if (var6) {
                                            _fun100891_ip = 619;
                                            continue _fun100891
                                        }
                                    case 581:
                                        var9 = _closure1_slot20;
                                        var7 = _closure1_slot1;
                                        var8 = _closure1_slot2;
                                        var6 = 21;
                                        var6 = var8[var6];
                                        var8 = undefined;
                                        var7 = var7.bind(var8)(var6);
                                        var6 = {};
                                        var6.channelId = var10;
                                        var5 = var9.bind(var8)(var7, var6);
                                    case 619:
                                        var0 = var5;
                                        _fun100891_ip = 812;
                                        continue _fun100891;
                                    case 627:
                                        var9 = var4[var3];
                                        var4 = null;
                                        var5 = var4 == var9;
                                        if (var5) {
                                            _fun100891_ip = 678;
                                            continue _fun100891
                                        }
                                    case 640:
                                        var8 = _closure1_slot20;
                                        var6 = _closure1_slot1;
                                        var7 = _closure1_slot2;
                                        var5 = 20;
                                        var5 = var7[var5];
                                        var7 = undefined;
                                        var6 = var6.bind(var7)(var5);
                                        var5 = {};
                                        var5.guildId = var9;
                                        var4 = var8.bind(var7)(var6, var5);
                                    case 678:
                                        var0 = var4;
                                        _fun100891_ip = 812;
                                        continue _fun100891;
                                    case 686:
                                        var7 = var2[var3];
                                        var2 = null;
                                        var3 = var2 == var7;
                                        if (var3) {
                                            _fun100891_ip = 737;
                                            continue _fun100891
                                        }
                                    case 699:
                                        var6 = _closure1_slot20;
                                        var4 = _closure1_slot1;
                                        var5 = _closure1_slot2;
                                        var3 = 20;
                                        var3 = var5[var3];
                                        var5 = undefined;
                                        var4 = var4.bind(var5)(var3);
                                        var3 = {};
                                        var3.guildId = var7;
                                        var2 = var6.bind(var5)(var4, var3);
                                    case 737:
                                        var0 = var2;
                                        _fun100891_ip = 812;
                                        continue _fun100891;
                                    case 742:
                                        var5 = _closure1_slot20;
                                        var3 = _closure1_slot1;
                                        var4 = _closure1_slot2;
                                        var2 = 19;
                                        var2 = var4[var2];
                                        var4 = undefined;
                                        var3 = var3.bind(var4)(var2);
                                        var2 = {};
                                        var0 = var5.bind(var4)(var3, var2);
                                        _fun100891_ip = 812;
                                        continue _fun100891;
                                    case 778:
                                        var4 = _closure1_slot20;
                                        var2 = _closure1_slot1;
                                        var3 = _closure1_slot2;
                                        var1 = 18;
                                        var1 = var3[var1];
                                        var3 = undefined;
                                        var2 = var2.bind(var3)(var1);
                                        var1 = {};
                                        var0 = var4.bind(var3)(var2, var1);
                                    case 812:
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
                                        _fun100894: for (var _fun100894_ip = 0;;) switch (_fun100894_ip) {
                                            case 0:
                                                var4 = arg0;
                                                var0 = 'unavailable-guilds';
                                                if (!(var0 !== var4)) {
                                                    _fun100894_ip = 170;
                                                    continue _fun100894
                                                }
                                            case 16:
                                                var0 = 'empty-nux';
                                                if (!(var0 !== var4)) {
                                                    _fun100894_ip = 130;
                                                    continue _fun100894
                                                }
                                            case 26:
                                                var0 = 'create-join-guild';
                                                if (!(var0 !== var4)) {
                                                    _fun100894_ip = 90;
                                                    continue _fun100894
                                                }
                                            case 36:
                                                var0 = 'app-education';
                                                if (!(var0 !== var4)) {
                                                    _fun100894_ip = 50;
                                                    continue _fun100894
                                                }
                                            case 46:
                                                var0 = undefined;
                                                return var0;
                                            case 50:
                                                var3 = _closure1_slot20;
                                                var1 = _closure1_slot1;
                                                var2 = _closure1_slot2;
                                                var0 = 29;
                                                var0 = var2[var0];
                                                var2 = undefined;
                                                var1 = var1.bind(var2)(var0);
                                                var0 = {};
                                                var0 = var3.bind(var2)(var1, var0, var4);
                                                return var0;
                                            case 90:
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
                                            case 130:
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
                                            case 170:
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
                                _fun100895: for (var _fun100895_ip = 0;;) switch (_fun100895_ip) {
                                    case 0:
                                        var2 = arg0;
                                        var3 = arg1;
                                        var4 = arg2;
                                        var6 = _closure1_slot0;
                                        var0 = _closure1_slot2;
                                        var7 = 42;
                                        var1 = var0[var7];
                                        var0 = undefined;
                                        var1 = var6.bind(var0)(var1);
                                        var1 = var1.FastListItemTypes;
                                        var1 = var1.ITEM;
                                        if (!(var1 !== var2)) {
                                            _fun100895_ip = 85;
                                            continue _fun100895
                                        }
                                    case 50:
                                        var6 = _closure1_slot0;
                                        var1 = _closure1_slot2;
                                        var1 = var1[var7];
                                        var1 = var6.bind(var0)(var1);
                                        var1 = var1.FastListItemTypes;
                                        var1 = var1.SECTION;
                                        if (!(var1 !== var2)) {
                                            _fun100895_ip = 85;
                                            continue _fun100895
                                        }
                                    case 83:
                                        return var0;
                                    case 85:
                                        var1 = _closure1_slot17;
                                        var1 = var1.GUILDS;
                                        if (!(!(var3 < var1))) {
                                            _fun100895_ip = 271;
                                            continue _fun100895
                                        }
                                    case 102:
                                        var2 = _closure2_slot14;
                                        var1 = _closure1_slot17;
                                        var1 = var1.GUILDS;
                                        var1 = var3 - var1;
                                        var1 = var2[var1];
                                        var3 = null;
                                        if (!(var3 != var1)) {
                                            _fun100895_ip = 271;
                                            continue _fun100895
                                        }
                                    case 136:
                                        var6 = var1.type;
                                        var2 = _closure1_slot15;
                                        var2 = var2.ROOT;
                                        if (!(var6 !== var2)) {
                                            _fun100895_ip = 271;
                                            continue _fun100895
                                        }
                                    case 155:
                                        var7 = var1.type;
                                        var2 = _closure1_slot15;
                                        var6 = var2.FOLDER;
                                        var2 = var1;
                                        if (!(var7 === var6)) {
                                            _fun100895_ip = 190;
                                            continue _fun100895
                                        }
                                    case 177:
                                        if (!(var3 != var4)) {
                                            _fun100895_ip = 242;
                                            continue _fun100895
                                        }
                                    case 181:
                                        var6 = var1.children;
                                        var2 = var6[var4];
                                    case 190:
                                        var6 = var2.type;
                                        var5 = _closure1_slot15;
                                        var5 = var5.GUILD;
                                        if (!(var6 === var5)) {
                                            _fun100895_ip = 213;
                                            continue _fun100895
                                        }
                                    case 209:
                                        if (!(var3 != var4)) {
                                            _fun100895_ip = 271;
                                            continue _fun100895
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
                                var0 = 30;
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
                                _fun100897: for (var _fun100897_ip = 0;;) switch (_fun100897_ip) {
                                    case 0:
                                        var2 = _closure1_slot16;
                                        var0 = var2.getState;
                                        var0 = var0.bind(var2)();
                                        var0 = var0.dropSpecs;
                                        var3 = null;
                                        if (!(var3 == var0)) {
                                            _fun100897_ip = 53;
                                            continue _fun100897
                                        }
                                    case 29:
                                        var2 = _closure1_slot16;
                                        var0 = var2.getState;
                                        var0 = var0.bind(var2)();
                                        var0 = var0.dragSpecs;
                                        if (!(var3 != var0)) {
                                            _fun100897_ip = 57;
                                            continue _fun100897
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
                                        var2 = _closure2_slot12;
                                        var8.lurkingGuildsIds = var2;
                                        var2 = _closure2_slot13;
                                        var8.guestGuildIds = var2;
                                        var2 = _closure2_slot8;
                                        var8.privateChannelIds = var2;
                                        var2 = _closure2_slot14;
                                        var8.guildsNFolders = var2;
                                        var2 = _closure2_slot16;
                                        var8.pendingFolderNode = var2;
                                        var0 = _closure2_slot11;
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
                                            _fun100897_ip = 784;
                                            continue _fun100897
                                        }
                                    case 193:
                                        var8 = _closure1_slot17;
                                        var8 = var8.FAVORITES;
                                        if (!(var8 !== var10)) {
                                            _fun100897_ip = 772;
                                            continue _fun100897
                                        }
                                    case 210:
                                        var8 = _closure1_slot17;
                                        var8 = var8.PENDING_JOIN_REQUESTS;
                                        if (!(var8 !== var10)) {
                                            _fun100897_ip = 672;
                                            continue _fun100897
                                        }
                                    case 227:
                                        var8 = _closure1_slot17;
                                        var8 = var8.LURKING_GUILDS;
                                        if (!(var8 !== var10)) {
                                            _fun100897_ip = 609;
                                            continue _fun100897
                                        }
                                    case 244:
                                        var8 = _closure1_slot17;
                                        var8 = var8.GUEST_GUILDS;
                                        if (!(var8 !== var10)) {
                                            _fun100897_ip = 543;
                                            continue _fun100897
                                        }
                                    case 261:
                                        var8 = _closure1_slot17;
                                        var8 = var8.UNREAD_PRIVATE_CHANNELS;
                                        if (!(var8 !== var10)) {
                                            _fun100897_ip = 477;
                                            continue _fun100897
                                        }
                                    case 278:
                                        var8 = _closure1_slot17;
                                        var8 = var8.SEPARATOR;
                                        if (!(var8 !== var10)) {
                                            _fun100897_ip = 462;
                                            continue _fun100897
                                        }
                                    case 295:
                                        var8 = _closure1_slot17;
                                        var8 = var8.GUILDS;
                                        var8 = _closure1_slot17;
                                        var8 = var8.GUILDS;
                                        var8 = var10 - var8;
                                        var10 = var0[var8];
                                        if (!(var3 != var10)) {
                                            _fun100897_ip = 363;
                                            continue _fun100897
                                        }
                                    case 327:
                                        if (!(var3 != var5)) {
                                            _fun100897_ip = 356;
                                            continue _fun100897
                                        }
                                    case 331:
                                        var11 = var10.children;
                                        var11 = var11[var5];
                                        var13 = var3 == var11;
                                        var12 = undefined;
                                        if (var13) {
                                            _fun100897_ip = 354;
                                            continue _fun100897
                                        }
                                    case 349:
                                        var12 = var11.id;
                                    case 354:
                                        _fun100897_ip = 361;
                                        continue _fun100897;
                                    case 356:
                                        var12 = var10.id;
                                    case 361:
                                        _fun100897_ip = 410;
                                        continue _fun100897;
                                    case 363:
                                        var0 = var0.length;
                                        var10 = var8 >= var0;
                                        var0 = undefined;
                                        if (!var10) {
                                            _fun100897_ip = 407;
                                            continue _fun100897
                                        }
                                    case 377:
                                        var10 = var3 != var5;
                                        var0 = undefined;
                                        if (!var10) {
                                            _fun100897_ip = 407;
                                            continue _fun100897
                                        }
                                    case 386:
                                        var9 = var9[var5];
                                        var10 = var3 == var9;
                                        var8 = undefined;
                                        if (var10) {
                                            _fun100897_ip = 404;
                                            continue _fun100897
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
                                            _fun100897_ip = 457;
                                            continue _fun100897
                                        }
                                    case 419:
                                        var8 = _closure1_slot21;
                                        var11 = var8.GUILDS;
                                        var8 = global;
                                        var8 = var8.HermesInternal;
                                        var10 = var8.concat;
                                        var9 = '';
                                        var8 = ':';
                                        var0 = var10.bind(var9)(var11, var8, var12);
                                    case 457:
                                        _fun100897_ip = 794;
                                        continue _fun100897;
                                    case 462:
                                        var8 = _closure1_slot21;
                                        var0 = var8.SEPARATOR;
                                        _fun100897_ip = 794;
                                        continue _fun100897;
                                    case 477:
                                        if (!(var3 != var5)) {
                                            _fun100897_ip = 525;
                                            continue _fun100897
                                        }
                                    case 481:
                                        var8 = _closure1_slot21;
                                        var11 = var8.UNREAD_PRIVATE_CHANNELS;
                                        var10 = var7[var5];
                                        var7 = global;
                                        var7 = var7.HermesInternal;
                                        var9 = var7.concat;
                                        var8 = '';
                                        var7 = ':';
                                        var7 = var9.bind(var8)(var11, var7, var10);
                                        _fun100897_ip = 535;
                                        continue _fun100897;
                                    case 525:
                                        var8 = _closure1_slot21;
                                        var7 = var8.UNREAD_PRIVATE_CHANNELS;
                                    case 535:
                                        var0 = var7;
                                        _fun100897_ip = 794;
                                        continue _fun100897;
                                    case 543:
                                        if (!(var3 != var5)) {
                                            _fun100897_ip = 591;
                                            continue _fun100897
                                        }
                                    case 547:
                                        var7 = _closure1_slot21;
                                        var10 = var7.GUEST_GUILDS;
                                        var9 = var6[var5];
                                        var6 = global;
                                        var6 = var6.HermesInternal;
                                        var8 = var6.concat;
                                        var7 = '';
                                        var6 = ':';
                                        var6 = var8.bind(var7)(var10, var6, var9);
                                        _fun100897_ip = 601;
                                        continue _fun100897;
                                    case 591:
                                        var7 = _closure1_slot21;
                                        var6 = var7.GUEST_GUILDS;
                                    case 601:
                                        var0 = var6;
                                        _fun100897_ip = 794;
                                        continue _fun100897;
                                    case 609:
                                        if (!(var3 != var5)) {
                                            _fun100897_ip = 657;
                                            continue _fun100897
                                        }
                                    case 613:
                                        var6 = _closure1_slot21;
                                        var9 = var6.LURKING_GUILDS;
                                        var8 = var2[var5];
                                        var2 = global;
                                        var2 = var2.HermesInternal;
                                        var7 = var2.concat;
                                        var6 = '';
                                        var2 = ':';
                                        var2 = var7.bind(var6)(var9, var2, var8);
                                        _fun100897_ip = 667;
                                        continue _fun100897;
                                    case 657:
                                        var6 = _closure1_slot21;
                                        var2 = var6.LURKING_GUILDS;
                                    case 667:
                                        var0 = var2;
                                        _fun100897_ip = 794;
                                        continue _fun100897;
                                    case 672:
                                        if (!(var3 != var5)) {
                                            _fun100897_ip = 760;
                                            continue _fun100897
                                        }
                                    case 676:
                                        var6 = var3 == var4;
                                        var7 = undefined;
                                        if (var6) {
                                            _fun100897_ip = 708;
                                            continue _fun100897
                                        }
                                    case 685:
                                        var4 = var4.children;
                                        var4 = var4[var5];
                                        var5 = var3 == var4;
                                        var7 = undefined;
                                        if (var5) {
                                            _fun100897_ip = 708;
                                            continue _fun100897
                                        }
                                    case 703:
                                        var7 = var4.id;
                                    case 708:
                                        var3 = var3 != var7;
                                        var2 = undefined;
                                        if (!var3) {
                                            _fun100897_ip = 755;
                                            continue _fun100897
                                        }
                                    case 717:
                                        var3 = _closure1_slot21;
                                        var6 = var3.PENDING_JOIN_REQUESTS;
                                        var3 = global;
                                        var3 = var3.HermesInternal;
                                        var5 = var3.concat;
                                        var4 = '';
                                        var3 = ':';
                                        var2 = var5.bind(var4)(var6, var3, var7);
                                    case 755:
                                        var0 = var2;
                                        _fun100897_ip = 794;
                                        continue _fun100897;
                                    case 760:
                                        var2 = _closure1_slot21;
                                        var0 = var2.PENDING_JOIN_REQUESTS;
                                        _fun100897_ip = 794;
                                        continue _fun100897;
                                    case 772:
                                        var2 = _closure1_slot21;
                                        var0 = var2.FAVORITES;
                                        _fun100897_ip = 794;
                                        continue _fun100897;
                                    case 784:
                                        var1 = _closure1_slot21;
                                        var0 = var1.MESSAGES;
                                    case 794:
                                        return var0;
                                }
                            };
                            var2 = 'getAnchorIdFromIndex';
                            var0[var2] = var3;
                            var2 = function arg0() {
                                _fun100898: for (var _fun100898_ip = 0;;) switch (_fun100898_ip) {
                                    case 0:
                                        var1 = {};
                                        var0 = arg0;
                                        var1.id = var0;
                                        var2 = _closure2_slot12;
                                        var1.lurkingGuildsIds = var2;
                                        var2 = _closure2_slot13;
                                        var1.guestGuildIds = var2;
                                        var2 = _closure2_slot8;
                                        var1.privateChannelIds = var2;
                                        var2 = _closure2_slot14;
                                        var1.guildsNFolders = var2;
                                        var2 = _closure2_slot16;
                                        var1.pendingFolderNode = var2;
                                        var0 = _closure2_slot11;
                                        var1.geoRestrictedGuilds = var0;
                                        var8 = var1.id;
                                        var3 = var1.lurkingGuildsIds;
                                        var4 = var1.guestGuildIds;
                                        var7 = var1.privateChannelIds;
                                        var6 = var1.guildsNFolders;
                                        var0 = var1.pendingFolderNode;
                                        var5 = var1.geoRestrictedGuilds;
                                        var1 = _closure1_slot21;
                                        var1 = var1.MESSAGES;
                                        if (!(var1 !== var8)) {
                                            _fun100898_ip = 1338;
                                            continue _fun100898
                                        }
                                    case 127:
                                        var1 = _closure1_slot21;
                                        var1 = var1.FAVORITES;
                                        if (!(var1 !== var8)) {
                                            _fun100898_ip = 1317;
                                            continue _fun100898
                                        }
                                    case 144:
                                        var1 = _closure1_slot21;
                                        var1 = var1.PENDING_JOIN_REQUESTS;
                                        if (!(var1 !== var8)) {
                                            _fun100898_ip = 1296;
                                            continue _fun100898
                                        }
                                    case 161:
                                        var1 = _closure1_slot21;
                                        var1 = var1.LURKING_GUILDS;
                                        if (!(var1 !== var8)) {
                                            _fun100898_ip = 1275;
                                            continue _fun100898
                                        }
                                    case 178:
                                        var1 = _closure1_slot21;
                                        var1 = var1.GUEST_GUILDS;
                                        if (!(var1 !== var8)) {
                                            _fun100898_ip = 1254;
                                            continue _fun100898
                                        }
                                    case 195:
                                        var1 = _closure1_slot21;
                                        var1 = var1.UNREAD_PRIVATE_CHANNELS;
                                        if (!(var1 !== var8)) {
                                            _fun100898_ip = 1233;
                                            continue _fun100898
                                        }
                                    case 212:
                                        var1 = _closure1_slot21;
                                        var1 = var1.SEPARATOR;
                                        if (!(var1 !== var8)) {
                                            _fun100898_ip = 1209;
                                            continue _fun100898
                                        }
                                    case 229:
                                        var9 = var8.startsWith;
                                        var1 = _closure1_slot21;
                                        var1 = var1.LURKING_GUILDS;
                                        var1 = var9.bind(var8)(var1);
                                        if (var1) {
                                            _fun100898_ip = 1091;
                                            continue _fun100898
                                        }
                                    case 256:
                                        var9 = var8.startsWith;
                                        var1 = _closure1_slot21;
                                        var1 = var1.PENDING_JOIN_REQUESTS;
                                        var1 = var9.bind(var8)(var1);
                                        if (!var1) {
                                            _fun100898_ip = 413;
                                            continue _fun100898
                                        }
                                    case 283:
                                        var1 = null;
                                        if (!(var1 != var0)) {
                                            _fun100898_ip = 413;
                                            continue _fun100898
                                        }
                                    case 292:
                                        var1 = _closure1_slot23;
                                        var0 = var0.children;
                                        var13 = undefined;
                                        var12 = var1.bind(var13)(var0);
                                        var1 = var12.bind(var13)();
                                        var0 = var1.done;
                                        var10 = 0;
                                        var11 = var1;
                                        var9 = 0;
                                        if (var0) {
                                            _fun100898_ip = 413;
                                            continue _fun100898
                                        }
                                    case 327:
                                        var0 = var11.value;
                                        var14 = _closure1_slot26;
                                        var1 = _closure1_slot21;
                                        var1 = var1.PENDING_JOIN_REQUESTS;
                                        var0 = var0.id;
                                        var0 = var14.bind(var13)(var1, var8, var0);
                                        var1 = var9;
                                        if (var0) {
                                            _fun100898_ip = 384;
                                            continue _fun100898
                                        }
                                    case 364:
                                        var9 = var1 + 1;
                                        var14 = var12.bind(var13)();
                                        var0 = var14.done;
                                        var11 = var14;
                                        if (var0) {
                                            _fun100898_ip = 413;
                                            continue _fun100898
                                        }
                                    case 382:
                                        _fun100898_ip = 327;
                                        continue _fun100898;
                                    case 384:
                                        var0 = {};
                                        var9 = _closure1_slot17;
                                        var9 = var9.PENDING_JOIN_REQUESTS;
                                        var9 = var10 + var9;
                                        var0.section = var9;
                                        var0.item = var1;
                                        _fun100898_ip = 1357;
                                        continue _fun100898;
                                    case 413:
                                        var9 = var8.startsWith;
                                        var1 = _closure1_slot21;
                                        var1 = var1.GUEST_GUILDS;
                                        var1 = var9.bind(var8)(var1);
                                        if (var1) {
                                            _fun100898_ip = 973;
                                            continue _fun100898
                                        }
                                    case 440:
                                        var9 = var8.startsWith;
                                        var1 = _closure1_slot21;
                                        var1 = var1.UNREAD_PRIVATE_CHANNELS;
                                        var1 = var9.bind(var8)(var1);
                                        if (!var1) {
                                            _fun100898_ip = 572;
                                            continue _fun100898
                                        }
                                    case 464:
                                        var1 = _closure1_slot23;
                                        var12 = undefined;
                                        var11 = var1.bind(var12)(var7);
                                        var7 = var11.bind(var12)();
                                        var1 = var7.done;
                                        var9 = var7;
                                        var10 = 0;
                                        if (var1) {
                                            _fun100898_ip = 572;
                                            continue _fun100898
                                        }
                                    case 492:
                                        var13 = var9.value;
                                        var7 = _closure1_slot26;
                                        var1 = _closure1_slot21;
                                        var1 = var1.UNREAD_PRIVATE_CHANNELS;
                                        var1 = var7.bind(var12)(var1, var8, var13);
                                        var7 = var10;
                                        if (var1) {
                                            _fun100898_ip = 544;
                                            continue _fun100898
                                        }
                                    case 524:
                                        var10 = var7 + 1;
                                        var13 = var11.bind(var12)();
                                        var1 = var13.done;
                                        var9 = var13;
                                        if (var1) {
                                            _fun100898_ip = 572;
                                            continue _fun100898
                                        }
                                    case 542:
                                        _fun100898_ip = 492;
                                        continue _fun100898;
                                    case 544:
                                        var1 = {};
                                        var9 = _closure1_slot17;
                                        var9 = var9.UNREAD_PRIVATE_CHANNELS;
                                        var1.section = var9;
                                        var1.item = var7;
                                        var0 = var1;
                                        _fun100898_ip = 1357;
                                        continue _fun100898;
                                    case 572:
                                        var7 = var8.startsWith;
                                        var1 = _closure1_slot21;
                                        var1 = var1.GUILDS;
                                        var1 = var7.bind(var8)(var1);
                                        var11 = undefined;
                                        var0 = undefined;
                                        if (!var1) {
                                            _fun100898_ip = 1357;
                                            continue _fun100898
                                        }
                                    case 603:
                                        var1 = _closure1_slot23;
                                        var13 = var1.bind(var11)(var6);
                                        var6 = var13.bind(var11)();
                                        var1 = var6.done;
                                        var12 = var6;
                                        var6 = 0;
                                        var7 = 0;
                                        if (var1) {
                                            _fun100898_ip = 848;
                                            continue _fun100898
                                        }
                                    case 634:
                                        var1 = var12.value;
                                        var15 = _closure1_slot26;
                                        var9 = _closure1_slot21;
                                        var14 = var9.GUILDS;
                                        var9 = var1.id;
                                        var14 = var15.bind(var11)(var14, var8, var9);
                                        var9 = var6;
                                        if (var14) {
                                            _fun100898_ip = 820;
                                            continue _fun100898
                                        }
                                    case 674:
                                        var14 = _closure1_slot23;
                                        var1 = var1.children;
                                        var17 = var14.bind(var11)(var1);
                                        var14 = var17.bind(var11)();
                                        var1 = var14.done;
                                        var16 = 0;
                                        var15 = var14;
                                        if (var1) {
                                            _fun100898_ip = 794;
                                            continue _fun100898
                                        }
                                    case 705:
                                        var1 = var15.value;
                                        var18 = _closure1_slot26;
                                        var14 = _closure1_slot21;
                                        var14 = var14.GUILDS;
                                        var1 = var1.id;
                                        var1 = var18.bind(var11)(var14, var8, var1);
                                        var14 = var16;
                                        if (var1) {
                                            _fun100898_ip = 762;
                                            continue _fun100898
                                        }
                                    case 742:
                                        var16 = var14 + 1;
                                        var18 = var17.bind(var11)();
                                        var1 = var18.done;
                                        var15 = var18;
                                        if (var1) {
                                            _fun100898_ip = 794;
                                            continue _fun100898
                                        }
                                    case 760:
                                        _fun100898_ip = 705;
                                        continue _fun100898;
                                    case 762:
                                        var1 = {};
                                        var15 = _closure1_slot17;
                                        var15 = var15.GUILDS;
                                        var15 = var9 + var15;
                                        var1.section = var15;
                                        var1.item = var14;
                                        var0 = var1;
                                        _fun100898_ip = 1357;
                                        continue _fun100898;
                                    case 794:
                                        var6 = var9 + 1;
                                        var15 = var13.bind(var11)();
                                        var1 = var15.done;
                                        var12 = var15;
                                        var7 = var6;
                                        if (var1) {
                                            _fun100898_ip = 848;
                                            continue _fun100898
                                        }
                                    case 815:
                                        _fun100898_ip = 634;
                                        continue _fun100898;
                                    case 820:
                                        var1 = {};
                                        var6 = _closure1_slot17;
                                        var6 = var6.GUILDS;
                                        var6 = var9 + var6;
                                        var1.section = var6;
                                        var0 = var1;
                                        _fun100898_ip = 1357;
                                        continue _fun100898;
                                    case 848:
                                        var1 = _closure1_slot23;
                                        var9 = var1.bind(var11)(var5);
                                        var5 = var9.bind(var11)();
                                        var1 = var5.done;
                                        var10 = 0;
                                        var6 = var5;
                                        var0 = undefined;
                                        if (var1) {
                                            _fun100898_ip = 1357;
                                            continue _fun100898
                                        }
                                    case 879:
                                        var1 = var6.value;
                                        var12 = _closure1_slot26;
                                        var5 = _closure1_slot21;
                                        var5 = var5.GUILDS;
                                        var1 = var1.id;
                                        var1 = var12.bind(var11)(var5, var8, var1);
                                        var5 = var10;
                                        if (var1) {
                                            _fun100898_ip = 941;
                                            continue _fun100898
                                        }
                                    case 916:
                                        var10 = var5 + 1;
                                        var12 = var9.bind(var11)();
                                        var1 = var12.done;
                                        var6 = var12;
                                        var0 = undefined;
                                        if (var1) {
                                            _fun100898_ip = 1357;
                                            continue _fun100898
                                        }
                                    case 939:
                                        _fun100898_ip = 879;
                                        continue _fun100898;
                                    case 941:
                                        var1 = {};
                                        var6 = _closure1_slot17;
                                        var6 = var6.GUILDS;
                                        var6 = var7 + var6;
                                        var1.section = var6;
                                        var1.item = var5;
                                        var0 = var1;
                                        _fun100898_ip = 1357;
                                        continue _fun100898;
                                    case 973:
                                        var1 = _closure1_slot23;
                                        var9 = undefined;
                                        var7 = var1.bind(var9)(var4);
                                        var4 = var7.bind(var9)();
                                        var1 = var4.done;
                                        var5 = var4;
                                        var6 = 0;
                                        var0 = undefined;
                                        if (var1) {
                                            _fun100898_ip = 1357;
                                            continue _fun100898
                                        }
                                    case 1006:
                                        var10 = var5.value;
                                        var4 = _closure1_slot26;
                                        var1 = _closure1_slot21;
                                        var1 = var1.GUEST_GUILDS;
                                        var1 = var4.bind(var9)(var1, var8, var10);
                                        var4 = var6;
                                        if (var1) {
                                            _fun100898_ip = 1063;
                                            continue _fun100898
                                        }
                                    case 1038:
                                        var6 = var4 + 1;
                                        var10 = var7.bind(var9)();
                                        var1 = var10.done;
                                        var5 = var10;
                                        var0 = undefined;
                                        if (var1) {
                                            _fun100898_ip = 1357;
                                            continue _fun100898
                                        }
                                    case 1061:
                                        _fun100898_ip = 1006;
                                        continue _fun100898;
                                    case 1063:
                                        var1 = {};
                                        var5 = _closure1_slot17;
                                        var5 = var5.GUEST_GUILDS;
                                        var1.section = var5;
                                        var1.item = var4;
                                        var0 = var1;
                                        _fun100898_ip = 1357;
                                        continue _fun100898;
                                    case 1091:
                                        var1 = _closure1_slot23;
                                        var7 = undefined;
                                        var6 = var1.bind(var7)(var3);
                                        var3 = var6.bind(var7)();
                                        var1 = var3.done;
                                        var4 = var3;
                                        var5 = 0;
                                        var0 = undefined;
                                        if (var1) {
                                            _fun100898_ip = 1357;
                                            continue _fun100898
                                        }
                                    case 1124:
                                        var9 = var4.value;
                                        var3 = _closure1_slot26;
                                        var1 = _closure1_slot21;
                                        var1 = var1.LURKING_GUILDS;
                                        var1 = var3.bind(var7)(var1, var8, var9);
                                        var3 = var5;
                                        if (var1) {
                                            _fun100898_ip = 1181;
                                            continue _fun100898
                                        }
                                    case 1156:
                                        var5 = var3 + 1;
                                        var9 = var6.bind(var7)();
                                        var1 = var9.done;
                                        var4 = var9;
                                        var0 = undefined;
                                        if (var1) {
                                            _fun100898_ip = 1357;
                                            continue _fun100898
                                        }
                                    case 1179:
                                        _fun100898_ip = 1124;
                                        continue _fun100898;
                                    case 1181:
                                        var1 = {};
                                        var4 = _closure1_slot17;
                                        var4 = var4.LURKING_GUILDS;
                                        var1.section = var4;
                                        var1.item = var3;
                                        var0 = var1;
                                        _fun100898_ip = 1357;
                                        continue _fun100898;
                                    case 1209:
                                        var1 = {};
                                        var3 = _closure1_slot17;
                                        var3 = var3.SEPARATOR;
                                        var1.section = var3;
                                        var0 = var1;
                                        _fun100898_ip = 1357;
                                        continue _fun100898;
                                    case 1233:
                                        var1 = {};
                                        var3 = _closure1_slot17;
                                        var3 = var3.UNREAD_PRIVATE_CHANNELS;
                                        var1.section = var3;
                                        var0 = var1;
                                        _fun100898_ip = 1357;
                                        continue _fun100898;
                                    case 1254:
                                        var1 = {};
                                        var3 = _closure1_slot17;
                                        var3 = var3.GUEST_GUILDS;
                                        var1.section = var3;
                                        var0 = var1;
                                        _fun100898_ip = 1357;
                                        continue _fun100898;
                                    case 1275:
                                        var1 = {};
                                        var3 = _closure1_slot17;
                                        var3 = var3.LURKING_GUILDS;
                                        var1.section = var3;
                                        var0 = var1;
                                        _fun100898_ip = 1357;
                                        continue _fun100898;
                                    case 1296:
                                        var1 = {};
                                        var3 = _closure1_slot17;
                                        var3 = var3.PENDING_JOIN_REQUESTS;
                                        var1.section = var3;
                                        var0 = var1;
                                        _fun100898_ip = 1357;
                                        continue _fun100898;
                                    case 1317:
                                        var1 = {};
                                        var3 = _closure1_slot17;
                                        var3 = var3.FAVORITES;
                                        var1.section = var3;
                                        var0 = var1;
                                        _fun100898_ip = 1357;
                                        continue _fun100898;
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 3474, 3092, 3964, 3969, 12507, 4002, 1681, 1410, 12514, 3213, 4376, 13131, 13132, 13128, 33, 13142, 13155, 13156, 13159, 13162, 13175, 13178, 13179, 13180, 13182, 13183, 13184, 13186, 13189, 13191, 1568, 5225, 13193, 12385, 566, 12230, 3925, 13194, 13195, 1464, 13197, 6456, 2]);