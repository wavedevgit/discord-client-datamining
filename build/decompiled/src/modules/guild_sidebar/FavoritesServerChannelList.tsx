// modules/guild_sidebar/FavoritesServerChannelList.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var0 = function arg0, arg1() {
        _fun102793: for (var _fun102793_ip = 0;;) switch (_fun102793_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun102793_ip = 46;
                    continue _fun102793
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun102793_ip = 55;
                    continue _fun102793
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun102793_ip = 345;
                    continue _fun102793
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun102793_ip = 323;
                    continue _fun102793
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun102793_ip = 283;
                    continue _fun102793
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun102793_ip = 270;
                    continue _fun102793
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
                    _fun102793_ip = 163;
                    continue _fun102793
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun102793_ip = 179;
                    continue _fun102793
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun102793_ip = 249;
                    continue _fun102793
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun102793_ip = 249;
                    continue _fun102793
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun102793_ip = 234;
                    continue _fun102793
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun102793_ip = 247;
                    continue _fun102793
                }
            case 234:
                var8 = _closure1_slot21;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun102793_ip = 265;
                continue _fun102793;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun102793_ip = 283;
                continue _fun102793;
            case 270:
                var6 = _closure1_slot21;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun102793_ip = 323;
                    continue _fun102793
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
                    _fun102793_ip = 330;
                    continue _fun102793
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun102794: for (var _fun102794_ip = 0;;) switch (_fun102794_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun102794_ip = 56;
                                continue _fun102794
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
                            _fun102794_ip = 67;
                            continue _fun102794;
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
    var _closure1_slot20 = var0;
    var0 = function arg0, arg1() {
        _fun102795: for (var _fun102795_ip = 0;;) switch (_fun102795_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun102795_ip = 23;
                    continue _fun102795
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun102795_ip = 33;
                    continue _fun102795
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
                    _fun102795_ip = 70;
                    continue _fun102795
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun102795_ip = 55;
                    continue _fun102795
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot21 = var0;
    var1 = function() {
        _fun102796: for (var _fun102796_ip = 0;;) switch (_fun102796_ip) {
            case 0:
                var0 = function arg0, arg1() {
                    var1 = arg1;
                    var _closure3_slot0 = var1;
                    var2 = var1.isCollapsed;
                    var _closure3_slot1 = var2;
                    var1 = var1.isMuted;
                    var _closure3_slot2 = var1;
                    var3 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var2 = 19;
                    var2 = var6[var2];
                    var5 = undefined;
                    var3 = var3.bind(var5)(var2);
                    var2 = arg0;
                    var4 = var3.bind(var5)(var2);
                    var3 = var4.map;
                    var2 = function(arg0) { // Environment: var0
                        _fun102798: for (var _fun102798_ip = 0;;) switch (_fun102798_ip) {
                            case 0:
                                var2 = arg0;
                                var0 = var2.isPrivate;
                                var0 = var0.bind(var2)();
                                if (var0) {
                                    _fun102798_ip = 52;
                                    continue _fun102798
                                }
                            case 16:
                                var3 = _closure1_slot13;
                                var1 = var3.can;
                                var0 = _closure1_slot18;
                                var0 = var0.VIEW_CHANNEL;
                                var0 = var1.bind(var3)(var0, var2);
                                if (var0) {
                                    _fun102798_ip = 52;
                                    continue _fun102798
                                }
                            case 48:
                                var0 = null;
                                return var0;
                            case 52:
                                var0 = _closure2_slot2;
                                var1 = null;
                                var10 = var1 != var0;
                                if (!var10) {
                                    _fun102798_ip = 105;
                                    continue _fun102798
                                }
                            case 68:
                                var0 = _closure2_slot2;
                                var3 = var0.id;
                                var0 = var2.id;
                                var0 = var3 === var0;
                                if (var0) {
                                    _fun102798_ip = 102;
                                    continue _fun102798
                                }
                            case 89:
                                var4 = _closure2_slot3;
                                var3 = var2.id;
                                var0 = var4 === var3;
                            case 102:
                                var10 = var0;
                            case 105:
                                var0 = _closure2_slot2;
                                var9 = var1 != var0;
                                if (!var9) {
                                    _fun102798_ip = 130;
                                    continue _fun102798
                                }
                            case 116:
                                var3 = _closure2_slot2;
                                var0 = var3.isThread;
                                var9 = var0.bind(var3)();
                            case 130:
                                if (!var9) {
                                    _fun102798_ip = 152;
                                    continue _fun102798
                                }
                            case 133:
                                var0 = _closure2_slot2;
                                var3 = var0.parent_id;
                                var0 = var2.id;
                                var9 = var3 === var0;
                            case 152:
                                if (var10) {
                                    _fun102798_ip = 199;
                                    continue _fun102798
                                }
                            case 155:
                                if (var9) {
                                    _fun102798_ip = 199;
                                    continue _fun102798
                                }
                            case 158:
                                var0 = _closure3_slot1;
                                if (!var0) {
                                    _fun102798_ip = 199;
                                    continue _fun102798
                                }
                            case 168:
                                var5 = _closure1_slot7;
                                var4 = var5.getActiveJoinedUnreadThreadsForParent;
                                var3 = var2.guild_id;
                                var0 = var2.id;
                                var11 = var4.bind(var5)(var3, var0);
                                _fun102798_ip = 228;
                                continue _fun102798;
                            case 199:
                                var5 = _closure1_slot7;
                                var4 = var5.getActiveJoinedRelevantThreadsForParent;
                                var3 = var2.guild_id;
                                var0 = var2.id;
                                var11 = var4.bind(var5)(var3, var0);
                            case 228:
                                if (!(var1 == var11)) {
                                    _fun102798_ip = 234;
                                    continue _fun102798
                                }
                            case 232:
                                var11 = {};
                            case 234:
                                var14 = _closure1_slot0;
                                var16 = _closure1_slot2;
                                var13 = 21;
                                var0 = var16[var13];
                                var7 = undefined;
                                var12 = var14.bind(var7)(var0);
                                var6 = var12.computeThreadIds;
                                var21 = _closure2_slot2;
                                var20 = _closure2_slot3;
                                var19 = _closure2_slot1;
                                var24 = var12;
                                var23 = var2;
                                var22 = var11;
                                var18 = var24[var6](var23, var22, var21, var20, var19, var18);
                                var5 = _closure1_slot12;
                                var3 = var5.isCollapsed;
                                var0 = var2.id;
                                var15 = var3.bind(var5)(var0);
                                var6 = _closure1_slot16;
                                var5 = var6.isChannelMuted;
                                var3 = var2.guild_id;
                                var0 = var2.id;
                                var6 = var5.bind(var6)(var3, var0);
                                var0 = {};
                                var3 = var2.id;
                                var0.id = var3;
                                var0.record = var2;
                                var3 = _closure3_slot0;
                                var0.category = var3;
                                var12 = _closure2_slot0;
                                var3 = var2.id;
                                var3 = var12[var3];
                                var3 = var3.order;
                                var0.position = var3;
                                var0.threadIds = var18;
                                var17 = _closure1_slot1;
                                var12 = 19;
                                var3 = var16[var12];
                                var17 = var17.bind(var7)(var3);
                                var3 = var17.size;
                                var3 = var3.bind(var17)(var18);
                                var0.threadCount = var3;
                                var0.isCollapsed = var15;
                                var0.isMuted = var6;
                                var3 = false;
                                var0.isFirstVoiceChannel = var3;
                                var13 = var16[var13];
                                var14 = var14.bind(var7)(var13);
                                var13 = var14.computeSubtitle;
                                var13 = var13.bind(var14)(var2, var15, var3);
                                var0.subtitle = var13;
                                if (var10) {
                                    _fun102798_ip = 631;
                                    continue _fun102798
                                }
                            case 475:
                                if (var9) {
                                    _fun102798_ip = 631;
                                    continue _fun102798
                                }
                            case 481:
                                var10 = _closure1_slot1;
                                var9 = _closure1_slot2;
                                var9 = var9[var12];
                                var10 = var10.bind(var7)(var9);
                                var9 = var10.isEmpty;
                                var9 = var9.bind(var10)(var11);
                                if (!var9) {
                                    _fun102798_ip = 631;
                                    continue _fun102798
                                }
                            case 512:
                                var11 = _closure1_slot14;
                                var10 = var11.getMentionCount;
                                var9 = var2.id;
                                var10 = var10.bind(var11)(var9);
                                var9 = 0;
                                if (!(!(var10 > var9))) {
                                    _fun102798_ip = 631;
                                    continue _fun102798
                                }
                            case 538:
                                var8 = _closure2_slot1;
                                if (!var8) {
                                    _fun102798_ip = 548;
                                    continue _fun102798
                                }
                            case 545:
                                if (var6) {
                                    _fun102798_ip = 629;
                                    continue _fun102798
                                }
                            case 548:
                                var8 = _closure3_slot1;
                                if (!var8) {
                                    _fun102798_ip = 623;
                                    continue _fun102798
                                }
                            case 555:
                                if (var6) {
                                    _fun102798_ip = 627;
                                    continue _fun102798
                                }
                            case 558:
                                var5 = _closure3_slot2;
                                if (var5) {
                                    _fun102798_ip = 627;
                                    continue _fun102798
                                }
                            case 565:
                                var6 = _closure1_slot9;
                                var5 = var2.type;
                                var5 = var6.bind(var7)(var5);
                                if (var5) {
                                    _fun102798_ip = 627;
                                    continue _fun102798
                                }
                            case 582:
                                var6 = _closure1_slot8;
                                var5 = var2.type;
                                var5 = var6.bind(var7)(var5);
                                if (!var5) {
                                    _fun102798_ip = 623;
                                    continue _fun102798
                                }
                            case 599:
                                var5 = _closure1_slot14;
                                var4 = var5.hasUnread;
                                var2 = var2.id;
                                var2 = var4.bind(var5)(var2);
                                if (!(var3 !== var2)) {
                                    _fun102798_ip = 625;
                                    continue _fun102798
                                }
                            case 623:
                                return var0;
                            case 625:
                                return var1;
                            case 627:
                                return var1;
                            case 629:
                                return var1;
                            case 631:
                                return var0;
                        }
                    };
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.filter;
                    var4 = _closure1_slot0;
                    var1 = 22;
                    var1 = var6[var1];
                    var1 = var4.bind(var5)(var1);
                    var1 = var1.isNotNullish;
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.sortBy;
                    var0 = function(arg0) { // Environment: var0
                        _fun102799: for (var _fun102799_ip = 0;;) switch (_fun102799_ip) {
                            case 0:
                                var0 = arg0;
                                var1 = var0.record;
                                var0 = var1.isGuildVocal;
                                var0 = var0.bind(var1)();
                                var2 = var1.position;
                                if (var0) {
                                    _fun102799_ip = 32;
                                    continue _fun102799
                                }
                            case 27:
                                var0 = var2;
                                _fun102799_ip = 42;
                                continue _fun102799;
                            case 32:
                                var1 = 10000;
                                var0 = var2 + var1;
                            case 42:
                                return var0;
                        }
                    };
                    var1 = var1.bind(var2)(var0);
                    var0 = var1.value;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var _closure2_slot11 = var0;
                var2 = _closure1_slot5;
                var0 = var2.getFavoriteChannels;
                var5 = var0.bind(var2)();
                var _closure2_slot0 = var5;
                var4 = _closure1_slot16;
                var2 = var4.isGuildCollapsed;
                var0 = _closure1_slot17;
                var2 = var2.bind(var4)(var0);
                var _closure2_slot1 = var2;
                var4 = _closure1_slot15;
                var0 = var4.getChannelId;
                var6 = var0.bind(var4)();
                var4 = _closure1_slot11;
                var0 = var4.getChannel;
                var0 = var0.bind(var4)(var6);
                var _closure2_slot2 = var0;
                var4 = _closure1_slot15;
                var0 = var4.getVoiceChannelId;
                var0 = var0.bind(var4)();
                var _closure2_slot3 = var0;
                var14 = new Array(0);
                var _closure2_slot4 = var14;
                var13 = {};
                var _closure2_slot5 = var13;
                var11 = var5;
                var4 = undefined;
                var0 = null;
                var7 = 20;
                var6 = undefined;
                for (var8 in var11)
                    case 144: {
                        case 156: var15 = var8;
                        var16 = var5[var15];
                        var18 = _closure1_slot11;
                        var17 = var18.getChannel;
                        var15 = var16.id;
                        var17 = var17.bind(var18)(var15);
                        if (var0 == var17) {
                            _fun102796_ip = 144;
                            continue _fun102796
                        }
                        case 186: var18 = var16.type;
                        var19 = _closure1_slot0;
                        var15 = _closure1_slot2;
                        var15 = var15[var7];
                        var15 = var19.bind(var4)(var15);
                        var15 = var15.FavoriteChannelType;
                        var15 = var15.CATEGORY;
                        if (var18 === var15) {
                            _fun102796_ip = 144;
                            continue _fun102796
                        }
                        case 224: var15 = _closure1_slot6;
                        var15 = var15.bind(var4)(var5, var16, var17);
                        var17 = var16.parentId;
                        if (!(var0 != var17)) {
                            _fun102796_ip = 258;
                            continue _fun102796
                        }
                        case 245: var17 = var16.parentId;
                        var17 = var17 in var5;
                        if (var17) {
                            _fun102796_ip = 273;
                            continue _fun102796
                        }
                        case 258: var17 = var14.push;
                        var17 = var17.bind(var14)(var15);
                        var6 = var15;
                        _fun102796_ip = 144;
                        continue _fun102796;
                        case 273: var17 = var16.parentId;
                        var17 = var17 in var13;
                        if (var17) {
                            _fun102796_ip = 300;
                            continue _fun102796
                        }
                        case 286: var18 = var16.parentId;
                        var17 = new Array(0);
                        var13[var18] = var17;
                        case 300: var16 = var16.parentId;
                        var17 = var13[var16];
                        var16 = var17.push;
                        var16 = var16.bind(var17)(var15);
                        var6 = var15;
                        _fun102796_ip = 144;
                        continue _fun102796;
                    }
            case 328:
                var _closure2_slot6 = var0;
                var0 = {
                    'isMuted': false,
                    'isCollapsed': false,
                    'position': 0
                };
                var6 = function() {
                    var0 = _closure2_slot4;
                    return var0;
                };
                var0.getChannelRecords = var6;
                var6 = function() {
                    var2 = _closure2_slot4;
                    var1 = var2.map;
                    var0 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var0 = var0.id;
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0.getShownChannelIds = var6;
                var6 = function() {
                    var2 = _closure2_slot4;
                    var1 = var2.map;
                    var0 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var0 = var0.id;
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0.getShownChannelAndThreadIds = var6;
                var6 = function() {
                    var0 = _closure2_slot4;
                    var1 = var0.length;
                    var0 = 0;
                    var0 = var0 === var1;
                    return var0;
                };
                var0.isEmpty = var6;
                var7 = function() {
                    _fun102806: for (var _fun102806_ip = 0;;) switch (_fun102806_ip) {
                        case 0:
                            var2 = _closure2_slot6;
                            var1 = null;
                            if (!(var1 == var2)) {
                                _fun102806_ip = 36;
                                continue _fun102806
                            }
                        case 13:
                            var4 = _closure2_slot11;
                            var3 = _closure2_slot4;
                            var2 = undefined;
                            var1 = this;
                            var1 = var4.bind(var2)(var3, var1);
                            _closure2_slot6 = var1;
                        case 36:
                            var0 = _closure2_slot6;
                            return var0;
                    }
                };
                var6 = 'channelList';
                Object.defineProperty(var0, var6, {
                    get: var7,
                    set: var4,
                    enumerable: true
                });
                var _closure2_slot7 = var0;
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var0 = 19;
                var0 = var7[var0];
                var0 = var6.bind(var4)(var0);
                var4 = var0.bind(var4)(var5);
                var0 = var4.values;
                var5 = var0.bind(var4)();
                var4 = var5.filter;
                var0 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var1 = var0.type;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 20;
                    var2 = var2[var0];
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2);
                    var0 = var0.FavoriteChannelType;
                    var0 = var0.CATEGORY;
                    var0 = var1 === var0;
                    return var0;
                };
                var5 = var4.bind(var5)(var0);
                var4 = var5.sortBy;
                var0 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var0 = var0.order;
                    return var0;
                };
                var5 = var4.bind(var5)(var0);
                var4 = var5.map;
                var0 = function(arg0) { // Environment: var1
                    _fun102809: for (var _fun102809_ip = 0;;) switch (_fun102809_ip) {
                        case 0:
                            var0 = arg0;
                            var4 = var0.id;
                            var2 = var0.order;
                            var3 = undefined;
                            var _closure3_slot0 = var3;
                            var _closure3_slot1 = var3;
                            var5 = _closure1_slot5;
                            var0 = var5.getCategoryRecord;
                            var5 = var0.bind(var5)(var4);
                            var0 = _closure2_slot5;
                            var7 = var0[var4];
                            var0 = null;
                            if (!(var0 == var7)) {
                                _fun102809_ip = 65;
                                continue _fun102809
                            }
                        case 61:
                            var7 = new Array(0);
                        case 65:
                            _closure3_slot0 = var7;
                            var9 = _closure1_slot16;
                            var8 = var9.isChannelMuted;
                            var7 = _closure1_slot17;
                            var7 = var8.bind(var9)(var7, var4);
                            var8 = _closure1_slot10;
                            var6 = var8.isCollapsed;
                            var6 = var6.bind(var8)(var4);
                            _closure3_slot1 = var0;
                            var0 = {};
                            var0.isMuted = var7;
                            var0.isCollapsed = var6;
                            var0.record = var5;
                            var0.id = var4;
                            var0.position = var2;
                            var2 = function() {
                                var0 = _closure3_slot0;
                                return var0;
                            };
                            var0.getChannelRecords = var2;
                            var2 = function() {
                                var2 = _closure3_slot0;
                                var1 = var2.map;
                                var0 = function(arg0) { // Environment: var0
                                    var0 = arg0;
                                    var0 = var0.id;
                                    return var0;
                                };
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var0.getShownChannelIds = var2;
                            var2 = function() {
                                var2 = _closure3_slot0;
                                var1 = var2.map;
                                var0 = function(arg0) { // Environment: var0
                                    var0 = arg0;
                                    var0 = var0.id;
                                    return var0;
                                };
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var0.getShownChannelAndThreadIds = var2;
                            var2 = function() {
                                var0 = _closure3_slot0;
                                var1 = var0.length;
                                var0 = 0;
                                var0 = var0 === var1;
                                return var0;
                            };
                            var0.isEmpty = var2;
                            var2 = function() {
                                _fun102816: for (var _fun102816_ip = 0;;) switch (_fun102816_ip) {
                                    case 0:
                                        var2 = _closure3_slot1;
                                        var1 = null;
                                        if (!(var1 == var2)) {
                                            _fun102816_ip = 39;
                                            continue _fun102816
                                        }
                                    case 13:
                                        var4 = _closure2_slot11;
                                        var3 = _closure3_slot0;
                                        var2 = undefined;
                                        var1 = this;
                                        var1 = var4.bind(var2)(var3, var1);
                                        _closure3_slot1 = var1;
                                    case 39:
                                        var0 = _closure3_slot1;
                                        return var0;
                                }
                            };
                            var1 = 'channelList';
                            Object.defineProperty(var0, var1, {
                                get: var2,
                                set: var3,
                                enumerable: true
                            });
                            return var0;
                    }
                };
                var4 = var4.bind(var5)(var0);
                var0 = var4.value;
                var0 = var0.bind(var4)();
                var _closure2_slot8 = var0;
                var0 = {};
                var4 = function() {
                    var0 = true;
                    return var0;
                };
                var0.isEmpty = var4;
                var4 = function() {
                    var0 = new Array(0);
                    return var0;
                };
                var0.getRows = var4;
                var4 = function() {
                    var0 = null;
                    return var0;
                };
                var0.getRow = var4;
                var _closure2_slot9 = var0;
                var0 = {};
                var4 = function() {
                    var0 = true;
                    return var0;
                };
                var0.isEmpty = var4;
                var4 = function() {
                    var0 = new Array(0);
                    return var0;
                };
                var0.getRows = var4;
                var4 = function() {
                    var0 = null;
                    return var0;
                };
                var0.getRow = var4;
                var _closure2_slot10 = var0;
                var0 = {
                    'id': null,
                    'hideMutedChannels': null,
                    'favoritesSectionNumber': 1,
                    'recentsSectionNumber': 2,
                    'voiceChannelsSectionNumber': 4294966297
                };
                var3 = _closure1_slot17;
                var0.id = var3;
                var0.hideMutedChannels = var2;
                var2 = function() {
                    _fun102823: for (var _fun102823_ip = 0;;) switch (_fun102823_ip) {
                        case 0:
                            var0 = new Array(0);
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var7 = 21;
                            var3 = var1[var7];
                            var6 = undefined;
                            var3 = var2.bind(var6)(var3);
                            var3 = var3.SECTION_INDEX_CHANNEL_NOTICES;
                            var5 = 0;
                            var0[var3] = var5;
                            var3 = var1[var7];
                            var3 = var2.bind(var6)(var3);
                            var3 = var3.SECTION_INDEX_GUILD_ACTIONS;
                            var0[var3] = var5;
                            var3 = var1[var7];
                            var3 = var2.bind(var6)(var3);
                            var3 = var3.SECTION_INDEX_FAVORITES;
                            var0[var3] = var5;
                            var3 = var1[var7];
                            var3 = var2.bind(var6)(var3);
                            var3 = var3.SECTION_INDEX_RECENTS;
                            var0[var3] = var5;
                            var1 = var1[var7];
                            var1 = var2.bind(var6)(var1);
                            var2 = var1.SECTION_INDEX_UNCATEGORIZED_CHANNELS;
                            var1 = _closure2_slot7;
                            var1 = var1.channelList;
                            var1 = var1.length;
                            var0[var2] = var1;
                            var1 = _closure2_slot8;
                            var1 = var1.length;
                            var1 = var5 < var1;
                            var3 = global;
                            var2 = 1;
                            if (!var1) {
                                _fun102823_ip = 239;
                                continue _fun102823
                            }
                        case 156:
                            var9 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var1 = var1[var7];
                            var1 = var9.bind(var6)(var1);
                            var1 = var1.SECTION_INDEX_FIRST_NAMED_CATEGORY;
                            var9 = var1 + var5;
                            var11 = var3.Math;
                            var10 = var11.max;
                            var1 = _closure2_slot8;
                            var1 = var1[var5];
                            var1 = var1.channelList;
                            var1 = var1.length;
                            var1 = var10.bind(var11)(var2, var1);
                            var0[var9] = var1;
                            var5 = var5 + 1;
                            var1 = _closure2_slot8;
                            var1 = var1.length;
                            if (var5 < var1) {
                                _fun102823_ip = 156;
                                continue _fun102823
                            }
                        case 239:
                            return var0;
                    }
                };
                var0.getSections = var2;
                var2 = function arg0, arg1() {
                    _fun102824: for (var _fun102824_ip = 0;;) switch (_fun102824_ip) {
                        case 0:
                            var3 = arg0;
                            var2 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var6 = 21;
                            var0 = var0[var6];
                            var5 = undefined;
                            var0 = var2.bind(var5)(var0);
                            var0 = var0.SECTION_INDEX_FIRST_NAMED_CATEGORY;
                            var2 = var3 < var0;
                            if (var2) {
                                _fun102824_ip = 50;
                                continue _fun102824
                            }
                        case 41:
                            var4 = 0;
                            var0 = arg1;
                            var2 = var4 !== var0;
                        case 50:
                            var0 = !var2;
                            if (var2) {
                                _fun102824_ip = 111;
                                continue _fun102824
                            }
                        case 56:
                            var2 = _closure2_slot8;
                            var4 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var1 = var1[var6];
                            var1 = var4.bind(var5)(var1);
                            var1 = var1.SECTION_INDEX_FIRST_NAMED_CATEGORY;
                            var1 = var3 - var1;
                            var1 = var2[var1];
                            var1 = var1.channelList;
                            var2 = var1.length;
                            var1 = 0;
                            var0 = var1 === var2;
                        case 111:
                            return var0;
                    }
                };
                var0.isPlaceholderRow = var2;
                var2 = function arg0() {
                    _fun102825: for (var _fun102825_ip = 0;;) switch (_fun102825_ip) {
                        case 0:
                            var2 = arg0;
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var5 = 21;
                            var1 = var1[var5];
                            var4 = undefined;
                            var1 = var3.bind(var4)(var1);
                            var1 = var1.SECTION_INDEX_UNCATEGORIZED_CHANNELS;
                            if (!(var2 !== var1)) {
                                _fun102825_ip = 78;
                                continue _fun102825
                            }
                        case 38:
                            var1 = _closure2_slot8;
                            var3 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var0 = var0[var5];
                            var0 = var3.bind(var4)(var0);
                            var0 = var0.SECTION_INDEX_FIRST_NAMED_CATEGORY;
                            var0 = var2 - var0;
                            var0 = var1[var0];
                            _fun102825_ip = 85;
                            continue _fun102825;
                        case 78:
                            var0 = _closure2_slot7;
                        case 85:
                            return var0;
                    }
                };
                var0.getCategoryFromSection = var2;
                var2 = function arg0() {
                    var1 = _closure2_slot8;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 21;
                    var2 = var2[var0];
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2);
                    var2 = var0.SECTION_INDEX_FIRST_NAMED_CATEGORY;
                    var0 = arg0;
                    var0 = var0 - var2;
                    var0 = var1[var0];
                    return var0;
                };
                var0.getNamedCategoryFromSection = var2;
                var2 = function arg0, arg1() {
                    _fun102827: for (var _fun102827_ip = 0;;) switch (_fun102827_ip) {
                        case 0:
                            var3 = arg1;
                            var2 = this;
                            var1 = var2.getCategoryFromSection;
                            var0 = arg0;
                            var2 = var1.bind(var2)(var0);
                            var4 = null;
                            var1 = var4 == var2;
                            var0 = null;
                            if (var1) {
                                _fun102827_ip = 74;
                                continue _fun102827
                            }
                        case 31:
                            var1 = var2.channelList;
                            var1 = var1[var3];
                            var1 = var4 == var1;
                            var0 = null;
                            if (var1) {
                                _fun102827_ip = 74;
                                continue _fun102827
                            }
                        case 50:
                            var1 = {};
                            var1.category = var2;
                            var2 = var2.channelList;
                            var2 = var2[var3];
                            var1.channel = var2;
                            var0 = var1;
                        case 74:
                            return var0;
                    }
                };
                var0.getChannelFromSectionRow = var2;
                var2 = function() {
                    var0 = _closure2_slot9;
                    return var0;
                };
                var0.getGuildActionSection = var2;
                var2 = function() {
                    var0 = _closure2_slot10;
                    return var0;
                };
                var0.getChannelNoticeSection = var2;
                var2 = function() {
                    var0 = null;
                    return var0;
                };
                var0.getFirstVoiceChannel = var2;
                var2 = function arg0() {
                    _fun102831: for (var _fun102831_ip = 0;;) switch (_fun102831_ip) {
                        case 0:
                            var6 = arg0;
                            var1 = _closure2_slot7;
                            var5 = new Array(1);
                            var5[0] = var1;
                            var9 = _closure2_slot8;
                            var8 = 1;
                            var10 = var5;
                            var0 = arraySpread(var10, var9, var8);
                            var0 = var5.length;
                            var4 = 0;
                            var0 = var4 < var0;
                            var2 = 0;
                            if (!var0) {
                                _fun102831_ip = 135;
                                continue _fun102831
                            }
                        case 48:
                            var0 = var5[var2];
                            var0 = var0.channelList;
                            var0 = var0.length;
                            var0 = var4 < var0;
                            var3 = var2;
                            var7 = 0;
                            if (!var0) {
                                _fun102831_ip = 123;
                                continue _fun102831
                            }
                        case 75:
                            var0 = var5[var3];
                            var0 = var0.channelList;
                            var0 = var0[var7];
                            var1 = var0.id;
                            var0 = var7;
                            if (!(var1 !== var6)) {
                                _fun102831_ip = 141;
                                continue _fun102831
                            }
                        case 101:
                            var7 = var0 + 1;
                            var1 = var5[var3];
                            var1 = var1.channelList;
                            var1 = var1.length;
                            if (var7 < var1) {
                                _fun102831_ip = 75;
                                continue _fun102831
                            }
                        case 123:
                            var2 = var3 + 1;
                            var1 = var5.length;
                            if (var2 < var1) {
                                _fun102831_ip = 48;
                                continue _fun102831
                            }
                        case 135:
                            var1 = new Array(0);
                            return var1;
                        case 141:
                            var1 = {};
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var2 = 21;
                            var4 = var4[var2];
                            var2 = undefined;
                            var2 = var5.bind(var2)(var4);
                            var2 = var2.SECTION_INDEX_UNCATEGORIZED_CHANNELS;
                            var2 = var3 + var2;
                            var1.section = var2;
                            var1.row = var0;
                            var0 = new Array(1);
                            var0[0] = var1;
                            return var0;
                    }
                };
                var0.getSectionRowsFromChannel = var2;
                var2 = function arg0() {
                    _fun102832: for (var _fun102832_ip = 0;;) switch (_fun102832_ip) {
                        case 0:
                            var9 = arg0;
                            var1 = _closure2_slot7;
                            var8 = new Array(1);
                            var8[0] = var1;
                            var19 = _closure2_slot8;
                            var18 = 1;
                            var20 = var8;
                            var0 = arraySpread(var20, var19, var18);
                            var0 = var8.length;
                            var7 = 0;
                            var1 = var7 < var0;
                            var0 = undefined;
                            var5 = null;
                            var4 = undefined;
                            var3 = undefined;
                            var2 = undefined;
                            if (!var1) {
                                _fun102832_ip = 242;
                                continue _fun102832
                            }
                        case 62:
                            var10 = _closure1_slot20;
                            var1 = var8[var7];
                            var1 = var1.channelList;
                            var12 = var10.bind(var0)(var1);
                            var10 = var12.bind(var0)();
                            var1 = var10.done;
                            var11 = var10;
                            var10 = var2;
                            var2 = var10;
                            if (var1) {
                                _fun102832_ip = 227;
                                continue _fun102832
                            }
                        case 105:
                            var1 = var11.value;
                            var13 = var1.record;
                            var13 = var9.bind(var0)(var13);
                            var13 = _closure1_slot20;
                            var1 = var1.threadIds;
                            var14 = var13.bind(var0)(var1);
                            var15 = var14.bind(var0)();
                            var1 = var15.done;
                            var13 = var15;
                            var15 = var13;
                            if (var1) {
                                _fun102832_ip = 203;
                                continue _fun102832
                            }
                        case 154:
                            var17 = var13.value;
                            var16 = _closure1_slot11;
                            var1 = var16.getChannel;
                            var16 = var1.bind(var16)(var17);
                            if (!(var5 != var16)) {
                                _fun102832_ip = 182;
                                continue _fun102832
                            }
                        case 177:
                            var1 = var9.bind(var0)(var16);
                        case 182:
                            var17 = var14.bind(var0)();
                            var1 = var17.done;
                            var13 = var17;
                            var15 = var13;
                            var10 = var16;
                            if (!var1) {
                                _fun102832_ip = 154;
                                continue _fun102832
                            }
                        case 203:
                            var16 = var12.bind(var0)();
                            var1 = var16.done;
                            var4 = var15;
                            var11 = var16;
                            var3 = var14;
                            var2 = var10;
                            if (!var1) {
                                _fun102832_ip = 105;
                                continue _fun102832
                            }
                        case 227:
                            var7 = var7 + 1;
                            var1 = var8.length;
                            if (var7 < var1) {
                                _fun102832_ip = 62;
                                continue _fun102832
                            }
                        case 242:
                            return var0;
                    }
                };
                var0.forEachShownChannel = var2;
                var2 = function arg0() {
                    _fun102833: for (var _fun102833_ip = 0;;) switch (_fun102833_ip) {
                        case 0:
                            var5 = arg0;
                            var1 = _closure2_slot7;
                            var4 = new Array(1);
                            var4[0] = var1;
                            var10 = _closure2_slot8;
                            var9 = 1;
                            var11 = var4;
                            var0 = arraySpread(var11, var10, var9);
                            var0 = var4.length;
                            var3 = 0;
                            var1 = var3 < var0;
                            var0 = undefined;
                            if (!var1) {
                                _fun102833_ip = 123;
                                continue _fun102833
                            }
                        case 51:
                            var6 = _closure1_slot20;
                            var7 = var4[var3];
                            var1 = var7.getChannelRecords;
                            var1 = var1.bind(var7)();
                            var7 = var6.bind(var0)(var1);
                            var6 = var7.bind(var0)();
                            var1 = var6.done;
                            if (var1) {
                                _fun102833_ip = 111;
                                continue _fun102833
                            }
                        case 86:
                            var1 = var6.value;
                            var1 = var5.bind(var0)(var1);
                            var8 = var7.bind(var0)();
                            var1 = var8.done;
                            var6 = var8;
                            if (!var1) {
                                _fun102833_ip = 86;
                                continue _fun102833
                            }
                        case 111:
                            var3 = var3 + 1;
                            var1 = var4.length;
                            if (var3 < var1) {
                                _fun102833_ip = 51;
                                continue _fun102833
                            }
                        case 123:
                            return var0;
                    }
                };
                var0.forEachChannel = var2;
                var2 = function arg0() {
                    var0 = new Array(3);
                    var1 = new Array(0);
                    var0[0] = var1;
                    var1 = arg0;
                    var0[1] = var1;
                    var1 = new Array(0);
                    var0[2] = var1;
                    return var0;
                };
                var0.getSlicedChannels = var2;
                var1 = function() {
                    var0 = new Array(0);
                    return var0;
                };
                var0.getChannels = var1;
                return var0;
        }
    };
    var _closure1_slot22 = var1;
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
    var4 = var7.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var8 = var6[var4];
    var4 = arg3;
    var4 = var4.bind(var0)(var8);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var18 = var7.bind(var0)(var4);
    var4 = 3;
    var4 = var6[var4];
    var17 = var7.bind(var0)(var4);
    var _closure1_slot5 = var17;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.createFavoritesChannelRecord;
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var16 = var7.bind(var0)(var4);
    var4 = 6;
    var4 = var6[var4];
    var15 = var7.bind(var0)(var4);
    var _closure1_slot7 = var15;
    var4 = 7;
    var4 = var6[var4];
    var14 = var7.bind(var0)(var4);
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var8 = var4.isGuildReadableType;
    var _closure1_slot8 = var8;
    var4 = var4.isVoiceChannel;
    var _closure1_slot9 = var4;
    var4 = 9;
    var4 = var6[var4];
    var13 = var7.bind(var0)(var4);
    var _closure1_slot10 = var13;
    var4 = 10;
    var4 = var6[var4];
    var12 = var7.bind(var0)(var4);
    var _closure1_slot11 = var12;
    var4 = 11;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot12 = var4;
    var4 = 12;
    var4 = var6[var4];
    var11 = var7.bind(var0)(var4);
    var4 = 13;
    var4 = var6[var4];
    var10 = var7.bind(var0)(var4);
    var _closure1_slot13 = var10;
    var4 = 14;
    var4 = var6[var4];
    var9 = var7.bind(var0)(var4);
    var _closure1_slot14 = var9;
    var4 = 15;
    var4 = var6[var4];
    var8 = var7.bind(var0)(var4);
    var _closure1_slot15 = var8;
    var4 = 16;
    var4 = var6[var4];
    var7 = var7.bind(var0)(var4);
    var _closure1_slot16 = var7;
    var4 = 17;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.FAVORITES_RAW_GUILD_ID;
    var _closure1_slot17 = var4;
    var4 = 18;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.Permissions;
    var _closure1_slot18 = var4;
    var4 = new Array(12);
    var4[0] = var18;
    var4[1] = var17;
    var4[2] = var16;
    var4[3] = var15;
    var4[4] = var14;
    var4[5] = var13;
    var4[6] = var12;
    var4[7] = var11;
    var4[8] = var10;
    var4[9] = var9;
    var4[10] = var8;
    var4[11] = var7;
    var _closure1_slot19 = var4;
    var4 = 23;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_sidebar/FavoritesServerChannelList.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function() {
        var4 = _closure1_slot4;
        var3 = var4.useState;
        var2 = function() { // Environment: var1
            var1 = _closure1_slot22;
            var0 = undefined;
            var0 = var1.bind(var0)();
            return var0;
        };
        var5 = var3.bind(var4)(var2);
        var3 = _closure1_slot3;
        var2 = undefined;
        var0 = 2;
        var3 = var3.bind(var2)(var5, var0);
        var0 = 0;
        var0 = var3[var0];
        var2 = 1;
        var2 = var3[var2];
        var _closure2_slot0 = var2;
        var3 = var4.useEffect;
        var2 = function() { // Environment: var1
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 19;
            var3 = var3[var2];
            var2 = undefined;
            var5 = var4.bind(var2)(var3);
            var4 = var5.throttle;
            var3 = function() { // Environment: var0
                var2 = _closure2_slot0;
                var0 = _closure1_slot22;
                var1 = undefined;
                var0 = var0.bind(var1)();
                var0 = var2.bind(var1)(var0);
                return var0;
            };
            var2 = 100;
            var2 = var4.bind(var5)(var3, var2);
            var _closure3_slot0 = var2;
            var3 = _closure1_slot19;
            var2 = var3.forEach;
            var1 = function(arg0) { // Environment: var0
                var2 = arg0;
                var1 = var2.addChangeListener;
                var0 = _closure3_slot0;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var1 = var2.bind(var3)(var1);
            var0 = function() { // Environment: var0
                var2 = _closure1_slot19;
                var1 = var2.forEach;
                var0 = function(arg0) { // Environment: var0
                    var2 = arg0;
                    var1 = var2.removeChangeListener;
                    var0 = _closure3_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            return var0;
        };
        var1 = new Array(0);
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var2.useFavoritesServerChannelList = var3;
    var2.computeFavoritesState = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 1371, 1375, 3090, 3334, 4550, 3093, 1376, 4567, 1372, 4568, 3484, 3091, 3947, 1670, 4303, 1612, 483, 22, 1311, 4569, 1304, 2]);