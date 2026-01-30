// modules/main_tabs_v2/native/shared_components/user_list/useUserListData.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var0 = function(arg0) { // Original name: _toPropertyKey, environment: var4
        _fun87941: for (var _fun87941_ip = 0;;) switch (_fun87941_ip) {
            case 0:
                var6 = arg0;
                var3 = 'object';
                var0 = typeof var6;
                var1 = var6;
                if (!(var3 === var0)) {
                    _fun87941_ip = 119;
                    continue _fun87941
                }
            case 17:
                var1 = var6;
                if (!var1) {
                    _fun87941_ip = 119;
                    continue _fun87941
                }
            case 23:
                var0 = global;
                var2 = var0.Symbol;
                var2 = var2.toPrimitive;
                var5 = var6[var2];
                var4 = undefined;
                if (!(var4 === var5)) {
                    _fun87941_ip = 60;
                    continue _fun87941
                }
            case 47:
                var2 = var0.String;
                var1 = var2.bind(var4)(var6);
                _fun87941_ip = 119;
                continue _fun87941;
            case 60:
                var4 = var5.call;
                var2 = 'string';
                var4 = var4.bind(var5)(var6, var2);
                var2 = typeof var4;
                var1 = var4;
                if (!(var3 === var2)) {
                    _fun87941_ip = 119;
                    continue _fun87941
                }
            case 85:
                var3 = var0.TypeError;
                var0 = var3.prototype;
                var2 = Object.create(var0, {
                    constructor: {
                        value: var3
                    }
                });
                var8 = '@@toPrimitive must return a primitive value.';
                var9 = var2;
                var0 = new var9[var3](var8, var7);
                var0 = var0 instanceof Object ? var0 : var2;
                throw var0;
            case 119:
                var3 = 'symbol';
                var2 = typeof var1;
                var0 = var1;
                if (!(var3 !== var2)) {
                    _fun87941_ip = 136;
                    continue _fun87941
                }
            case 133:
                var0 = '' + var1;
            case 136:
                return var0;
        }
    };
    var _closure1_slot18 = var0;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var4
        _fun87942: for (var _fun87942_ip = 0;;) switch (_fun87942_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun87942_ip = 45;
                    continue _fun87942
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 45:
                if (var1) {
                    _fun87942_ip = 54;
                    continue _fun87942
                }
            case 48:
                var1 = var2["@@iterator"];
            case 54:
                if (var1) {
                    _fun87942_ip = 344;
                    continue _fun87942
                }
            case 60:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun87942_ip = 322;
                    continue _fun87942
                }
            case 85:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun87942_ip = 282;
                    continue _fun87942
                }
            case 95:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun87942_ip = 269;
                    continue _fun87942
                }
            case 109:
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
                    _fun87942_ip = 162;
                    continue _fun87942
                }
            case 157:
                var6 = var2.constructor;
            case 162:
                var9 = var8;
                if (!var6) {
                    _fun87942_ip = 178;
                    continue _fun87942
                }
            case 168:
                var6 = var2.constructor;
                var9 = var6.name;
            case 178:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun87942_ip = 248;
                    continue _fun87942
                }
            case 186:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun87942_ip = 248;
                    continue _fun87942
                }
            case 194:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun87942_ip = 233;
                    continue _fun87942
                }
            case 204:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun87942_ip = 246;
                    continue _fun87942
                }
            case 233:
                var8 = _closure1_slot20;
                var6 = var8.bind(var7)(var2, var7);
            case 246:
                _fun87942_ip = 264;
                continue _fun87942;
            case 248:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 264:
                var5 = var6;
                _fun87942_ip = 282;
                continue _fun87942;
            case 269:
                var6 = _closure1_slot20;
                var5 = var6.bind(var7)(var2, var7);
            case 282:
                var3 = var5;
                if (var3) {
                    _fun87942_ip = 322;
                    continue _fun87942
                }
            case 288:
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
            case 322:
                if (!var3) {
                    _fun87942_ip = 329;
                    continue _fun87942
                }
            case 325:
                _closure2_slot0 = var3;
            case 329:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun87943: for (var _fun87943_ip = 0;;) switch (_fun87943_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun87943_ip = 56;
                                continue _fun87943
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
                            _fun87943_ip = 67;
                            continue _fun87943;
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
            case 344:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot19 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var4
        _fun87944: for (var _fun87944_ip = 0;;) switch (_fun87944_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun87944_ip = 23;
                    continue _fun87944
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun87944_ip = 33;
                    continue _fun87944
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
                    _fun87944_ip = 70;
                    continue _fun87944
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun87944_ip = 55;
                    continue _fun87944
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot20 = var0;
    var0 = function(arg0, arg1, arg2) { // Original name: isMatch, environment: var4
        _fun87945: for (var _fun87945_ip = 0;;) switch (_fun87945_ip) {
            case 0:
                var0 = arg2;
                var1 = arg1;
                var _closure2_slot0 = var1;
                var1 = null;
                if (!(var1 == var0)) {
                    _fun87945_ip = 20;
                    continue _fun87945
                }
            case 18:
                var0 = {};
            case 20:
                var3 = var0.exact;
                var10 = undefined;
                var2 = var10 !== var3;
                if (!var2) {
                    _fun87945_ip = 38;
                    continue _fun87945
                }
            case 35:
                var2 = var3;
            case 38:
                var _closure2_slot1 = var2;
                var2 = var0.contains;
                var0 = var10 !== var2;
                if (!var0) {
                    _fun87945_ip = 58;
                    continue _fun87945
                }
            case 55:
                var0 = var2;
            case 58:
                var _closure2_slot2 = var0;
                var9 = function(arg0) { // Original name: _loop, environment: var11
                    _fun87946: for (var _fun87946_ip = 0;;) switch (_fun87946_ip) {
                        case 0:
                            var2 = arg0;
                            var _closure3_slot0 = var2;
                            var1 = var2.some;
                            var0 = function(arg0) { // Environment: var0
                                _fun87947: for (var _fun87947_ip = 0;;) switch (_fun87947_ip) {
                                    case 0:
                                        var1 = arg0;
                                        var2 = _closure2_slot1;
                                        if (var2) {
                                            _fun87947_ip = 108;
                                            continue _fun87947
                                        }
                                    case 13:
                                        var3 = var1.startsWith;
                                        var2 = _closure2_slot0;
                                        var2 = var3.bind(var1)(var2);
                                        if (var2) {
                                            _fun87947_ip = 104;
                                            continue _fun87947
                                        }
                                    case 31:
                                        var4 = _closure3_slot0;
                                        var3 = var4.join;
                                        var2 = ' ';
                                        var6 = var3.bind(var4)(var2);
                                        var3 = var6.startsWith;
                                        var2 = _closure2_slot0;
                                        var2 = var3.bind(var6)(var2);
                                        var3 = !var2;
                                        var2 = !var3;
                                        if (!var3) {
                                            _fun87947_ip = 102;
                                            continue _fun87947
                                        }
                                    case 78:
                                        var3 = _closure2_slot2;
                                        if (!var3) {
                                            _fun87947_ip = 99;
                                            continue _fun87947
                                        }
                                    case 85:
                                        var5 = var6.includes;
                                        var4 = _closure2_slot0;
                                        var3 = var5.bind(var6)(var4);
                                    case 99:
                                        var2 = var3;
                                    case 102:
                                        return var2;
                                    case 104:
                                        var2 = true;
                                        return var2;
                                    case 108:
                                        var0 = _closure2_slot0;
                                        var0 = var1 === var0;
                                        return var0;
                                }
                            };
                            var0 = var1.bind(var2)(var0);
                            if (var0) {
                                _fun87946_ip = 34;
                                continue _fun87946
                            }
                        case 30:
                            var0 = undefined;
                            return var0;
                        case 34:
                            var0 = {};
                            var1 = _closure2_slot3;
                            var0.v = var1;
                            return var0;
                    }
                };
                var0 = global;
                var3 = var0.Object;
                var2 = var3.entries;
                var0 = arg0;
                var8 = var2.bind(var3)(var0);
                var0 = var8.length;
                var7 = 0;
                var0 = var7 < var0;
                var5 = 2;
                var4 = 1;
                var3 = 0;
                if (!var0) {
                    _fun87945_ip = 162;
                    continue _fun87945
                }
            case 116:
                var2 = var8[var3];
                var0 = _closure1_slot6;
                var0 = var0.bind(var10)(var2, var5);
                var2 = var0[var7];
                var _closure2_slot3 = var2;
                var0 = var0[var4];
                var0 = var9.bind(var10)(var0);
                if (var0) {
                    _fun87945_ip = 164;
                    continue _fun87945
                }
            case 150:
                var3 = var3 + 1;
                var2 = var8.length;
                if (var3 < var2) {
                    _fun87945_ip = 116;
                    continue _fun87945
                }
            case 162:
                return var1;
            case 164:
                var0 = var0.v;
                return var0;
        }
    };
    var _closure1_slot21 = var0;
    var0 = function(arg0, arg1) { // Original name: boostExact, environment: var4
        _fun87948: for (var _fun87948_ip = 0;;) switch (_fun87948_ip) {
            case 0:
                var4 = _closure1_slot21;
                var3 = {};
                var0 = true;
                var3.exact = var0;
                var2 = undefined;
                var1 = arg0;
                var0 = arg1;
                var1 = var4.bind(var2)(var1, var0, var3);
                var0 = null;
                var1 = var0 != var1;
                var0 = 0;
                if (!var1) {
                    _fun87948_ip = 48;
                    continue _fun87948
                }
            case 42:
                var0 = -1000;
            case 48:
                return var0;
        }
    };
    var _closure1_slot22 = var0;
    var1 = function(arg0) { // Original name: parseUserSearchResults, environment: var4
        _fun87949: for (var _fun87949_ip = 0;;) switch (_fun87949_ip) {
            case 0:
                var3 = arg0;
                var13 = var3.data;
                var8 = var3.withGuildMembers;
                var0 = var3.withAffinitySuggestions;
                var2 = var3.withFriends;
                var11 = var3.withFriendSuggestions;
                var21 = var3.withFriendRequests;
                var19 = var3.withFriendRequestsIncoming;
                var17 = var3.withFriendRequestsOutgoing;
                var14 = var3.withFriendRequestsSpam;
                var6 = var3.excludeCurrentUser;
                var5 = undefined;
                if (!(var6 === var5)) {
                    _fun87949_ip = 72;
                    continue _fun87949
                }
            case 70:
                var6 = false;
            case 72:
                var25 = var3.affinitySuggestionsLimit;
                if (!(var25 === var5)) {
                    _fun87949_ip = 85;
                    continue _fun87949
                }
            case 82:
                var25 = 5;
            case 85:
                var _closure2_slot0 = var5;
                var4 = _closure1_slot16;
                var31 = var4.AffinitySuggestions;
                var4 = _closure1_slot16;
                var30 = var4.FriendRequests;
                var4 = _closure1_slot16;
                var29 = var4.FriendRequestsIncoming;
                var4 = _closure1_slot16;
                var28 = var4.FriendRequestsOutgoing;
                var4 = _closure1_slot16;
                var27 = var4.FriendRequestsSpam;
                var4 = _closure1_slot16;
                var26 = var4.FriendSuggestions;
                var4 = _closure1_slot16;
                var15 = var4.Friends;
                var4 = _closure1_slot16;
                var4 = var4.GuildMembers;
                var23 = var13[var31];
                if (!(var5 === var23)) {
                    _fun87949_ip = 184;
                    continue _fun87949
                }
            case 180:
                var23 = new Array(0);
            case 184:
                var20 = var13[var30];
                if (!(var5 === var20)) {
                    _fun87949_ip = 196;
                    continue _fun87949
                }
            case 192:
                var20 = new Array(0);
            case 196:
                var18 = var13[var29];
                if (!(var5 === var18)) {
                    _fun87949_ip = 208;
                    continue _fun87949
                }
            case 204:
                var18 = new Array(0);
            case 208:
                var16 = var13[var28];
                if (!(var5 === var16)) {
                    _fun87949_ip = 220;
                    continue _fun87949
                }
            case 216:
                var16 = new Array(0);
            case 220:
                var12 = var13[var27];
                if (!(var5 === var12)) {
                    _fun87949_ip = 232;
                    continue _fun87949
                }
            case 228:
                var12 = new Array(0);
            case 232:
                var10 = var13[var26];
                if (!(var5 === var10)) {
                    _fun87949_ip = 244;
                    continue _fun87949
                }
            case 240:
                var10 = new Array(0);
            case 244:
                var9 = var13[var15];
                if (!(var5 === var9)) {
                    _fun87949_ip = 256;
                    continue _fun87949
                }
            case 252:
                var9 = new Array(0);
            case 256:
                var22 = var13[var4];
                if (!(var5 === var22)) {
                    _fun87949_ip = 268;
                    continue _fun87949
                }
            case 264:
                var22 = new Array(0);
            case 268:
                var7 = _closure1_slot3;
                var24 = new Array(8);
                var24[0] = var31;
                var24[1] = var30;
                var24[2] = var29;
                var24[3] = var28;
                var24[4] = var27;
                var24[5] = var26;
                var24[6] = var15;
                var24[7] = var4;
                var15 = var24.map;
                var4 = _closure1_slot18;
                var4 = var15.bind(var24)(var4);
                var4 = var7.bind(var5)(var13, var4);
                var13 = _closure1_slot13;
                var7 = var13.getCurrentUser;
                var13 = var7.bind(var13)();
                var15 = null;
                var24 = var15 == var13;
                var7 = undefined;
                if (var24) {
                    _fun87949_ip = 357;
                    continue _fun87949
                }
            case 352:
                var7 = var13.id;
            case 357:
                _closure2_slot0 = var7;
                var7 = var22;
                if (!var6) {
                    _fun87949_ip = 384;
                    continue _fun87949
                }
            case 367:
                var13 = var22.filter;
                var6 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var0 = var0.user;
                    var1 = var0.id;
                    var0 = _closure2_slot0;
                    var0 = var1 !== var0;
                    return var0;
                };
                var7 = var13.bind(var22)(var6);
            case 384:
                var6 = {};
                var27 = _closure1_slot0;
                var22 = _closure1_slot2;
                var13 = 19;
                var24 = var22[var13];
                var24 = var27.bind(var5)(var24);
                var26 = var24.intl;
                var24 = var26.string;
                var22 = var22[var13];
                var22 = var27.bind(var5)(var22);
                var22 = var22.t;
                var22 = var22.HbJ7eD;
                var22 = var24.bind(var26)(var22);
                var6.title = var22;
                if (var0) {
                    _fun87949_ip = 454;
                    continue _fun87949
                }
            case 448:
                var0 = new Array(0);
                _fun87949_ip = 519;
                continue _fun87949;
            case 454:
                var24 = _closure1_slot1;
                var26 = _closure1_slot2;
                var22 = 18;
                var22 = var26[var22];
                var22 = var24.bind(var5)(var22);
                var24 = var22.bind(var5)(var23);
                var23 = var24.sortBy;
                var22 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var0 = var0.affinity;
                    var0 = -var0;
                    return var0;
                };
                var24 = var23.bind(var24)(var22);
                var23 = var24.slice;
                var22 = 0;
                var23 = var23.bind(var24)(var22, var25);
                var22 = var23.value;
                var0 = var22.bind(var23)();
            case 519:
                var6.items = var0;
                var0 = new Array(8);
                var0[0] = var6;
                var6 = {};
                var23 = _closure1_slot0;
                var22 = _closure1_slot2;
                var24 = var22[var13];
                var24 = var23.bind(var5)(var24);
                var25 = var24.intl;
                var24 = var25.formatToPlainString;
                var22 = var22[var13];
                var22 = var23.bind(var5)(var22);
                var22 = var22.t;
                var23 = var22.zsVtft;
                var22 = {};
                var26 = var20.length;
                var22.pendingRequestNumber = var26;
                var22 = var24.bind(var25)(var23, var22);
                var6.title = var22;
                if (var21) {
                    _fun87949_ip = 612;
                    continue _fun87949
                }
            case 608:
                var20 = new Array(0);
            case 612:
                var6.items = var20;
                var0[1] = var6;
                var6 = {};
                var6.title = var15;
                if (var19) {
                    _fun87949_ip = 634;
                    continue _fun87949
                }
            case 630:
                var18 = new Array(0);
            case 634:
                var6.items = var18;
                var0[2] = var6;
                var6 = {};
                var6.title = var15;
                if (var17) {
                    _fun87949_ip = 656;
                    continue _fun87949
                }
            case 652:
                var16 = new Array(0);
            case 656:
                var6.items = var16;
                var0[3] = var6;
                var6 = {};
                var6.title = var15;
                if (var14) {
                    _fun87949_ip = 678;
                    continue _fun87949
                }
            case 674:
                var12 = new Array(0);
            case 678:
                var6.items = var12;
                var0[4] = var6;
                var6 = {};
                var14 = _closure1_slot0;
                var12 = _closure1_slot2;
                var15 = var12[var13];
                var15 = var14.bind(var5)(var15);
                var16 = var15.intl;
                var15 = var16.formatToPlainString;
                var12 = var12[var13];
                var12 = var14.bind(var5)(var12);
                var12 = var12.t;
                var14 = var12["DYMZ/p"];
                var12 = {};
                var17 = var10.length;
                var12.count = var17;
                var12 = var15.bind(var16)(var14, var12);
                var6.title = var12;
                if (var11) {
                    _fun87949_ip = 767;
                    continue _fun87949
                }
            case 763:
                var10 = new Array(0);
            case 767:
                var6.items = var10;
                var0[5] = var6;
                var6 = {};
                var14 = _closure1_slot0;
                var10 = _closure1_slot2;
                var11 = var10[var13];
                var11 = var14.bind(var5)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                var10 = var10[var13];
                var10 = var14.bind(var5)(var10);
                var10 = var10.t;
                var10 = var10.TdEu5X;
                var10 = var11.bind(var12)(var10);
                var6.title = var10;
                if (var2) {
                    _fun87949_ip = 841;
                    continue _fun87949
                }
            case 837:
                var9 = new Array(0);
            case 841:
                var6.items = var9;
                var0[6] = var6;
                var6 = {};
                var12 = _closure1_slot0;
                var9 = _closure1_slot2;
                var10 = var9[var13];
                var10 = var12.bind(var5)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var9 = var9[var13];
                var9 = var12.bind(var5)(var9);
                var9 = var9.t;
                var9 = var9.y29JXs;
                var9 = var10.bind(var11)(var9);
                var6.title = var9;
                if (var8) {
                    _fun87949_ip = 915;
                    continue _fun87949
                }
            case 911:
                var7 = new Array(0);
            case 915:
                var6.items = var7;
                var0[7] = var6;
                if (var2) {
                    _fun87949_ip = 933;
                    continue _fun87949
                }
            case 927:
                var2 = new Array(0);
                _fun87949_ip = 1002;
                continue _fun87949;
            case 933:
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var3 = 18;
                var3 = var7[var3];
                var3 = var6.bind(var5)(var3);
                var5 = var3.bind(var5)(var4);
                var4 = var5.map;
                var3 = function(arg0, arg1) { // Environment: var1
                    var0 = {};
                    var1 = arg1;
                    var0.title = var1;
                    var1 = arg0;
                    var0.items = var1;
                    return var0;
                };
                var4 = var4.bind(var5)(var3);
                var3 = var4.sortBy;
                var1 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var0 = var0.title;
                    return var0;
                };
                var3 = var3.bind(var4)(var1);
                var1 = var3.value;
                var2 = var1.bind(var3)();
            case 1002:
                var32 = 8;
                var34 = var0;
                var33 = var2;
                var1 = arraySpread(var34, var33, var32);
                return var0;
        }
    };
    var _closure1_slot23 = var1;
    var3 = global;
    var10 = var3.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var5);
    var0 = 0;
    var5 = var7[var0];
    var0 = undefined;
    var5 = var8.bind(var0)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot6 = var5;
    var5 = 4;
    var9 = var7[var5];
    var5 = arg3;
    var5 = var5.bind(var0)(var9);
    var _closure1_slot7 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot8 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot9 = var5;
    var5 = 7;
    var5 = var7[var5];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot10 = var5;
    var5 = 8;
    var5 = var7[var5];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot11 = var5;
    var5 = 9;
    var5 = var7[var5];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot12 = var5;
    var5 = 10;
    var5 = var7[var5];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot13 = var5;
    var5 = 11;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var5 = var5.RelationshipTypes;
    var _closure1_slot14 = var5;
    var8 = var3.Set;
    var9 = var5.FRIEND;
    var3 = new Array(4);
    var3[0] = var9;
    var9 = var5.SUGGESTION;
    var3[1] = var9;
    var9 = var5.PENDING_INCOMING;
    var3[2] = var9;
    var5 = var5.PENDING_OUTGOING;
    var3[3] = var5;
    var5 = var8.prototype;
    var5 = Object.create(var5, {
        constructor: {
            value: var8
        }
    });
    var14 = var5;
    var13 = var3;
    var3 = new var14[var8](var13, var12);
    var3 = var3 instanceof Object ? var3 : var5;
    var _closure1_slot15 = var3;
    var3 = {};
    var5 = 'AFFINITY_SUGGESTIONS';
    var3.AffinitySuggestions = var5;
    var5 = 'FRIENDS';
    var3.Friends = var5;
    var5 = 'FRIEND_REQUESTS';
    var3.FriendRequests = var5;
    var5 = 'FRIEND_REQUESTS_INCOMING';
    var3.FriendRequestsIncoming = var5;
    var5 = 'FRIEND_REQUESTS_OUTGOING';
    var3.FriendRequestsOutgoing = var5;
    var5 = 'FRIEND_REQUESTS_SPAM';
    var3.FriendRequestsSpam = var5;
    var5 = 'FRIEND_SUGGESTIONS';
    var3.FriendSuggestions = var5;
    var5 = 'GUILD_MEMBERS';
    var3.GuildMembers = var5;
    var _closure1_slot16 = var3;
    var3 = function() { // Environment: var4
        var3 = _closure1_slot5;
        var2 = function(arg0) { // Original name: UserSearch, environment: var4
            _fun87955: for (var _fun87955_ip = 0;;) switch (_fun87955_ip) {
                case 0:
                    var4 = arguments[1];
                    var3 = this;
                    var _closure3_slot0 = var3;
                    var0 = arg0;
                    var _closure3_slot1 = var0;
                    var0 = undefined;
                    if (!(var4 === var0)) {
                        _fun87955_ip = 27;
                        continue _fun87955
                    }
                case 25:
                    var4 = false;
                case 27:
                    var6 = _closure1_slot4;
                    var5 = _closure2_slot0;
                    var5 = var6.bind(var0)(var3, var5);
                    var5 = '';
                    var3.currentQuery = var5;
                    var5 = {};
                    var3.affinities = var5;
                    var6 = null;
                    var3.userSearchContext = var6;
                    var8 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var7 = 12;
                    var7 = var5[var7];
                    var7 = var8.bind(var0)(var7);
                    var10 = var7.SecondaryIndexMap;
                    var7 = var10.prototype;
                    var8 = Object.create(var7, {
                        constructor: {
                            value: var10
                        }
                    });
                    var12 = function(arg0) { // Environment: var1
                        _fun87956: for (var _fun87956_ip = 0;;) switch (_fun87956_ip) {
                            case 0:
                                var0 = arg0;
                                var5 = var0.names;
                                var3 = var0.affinity;
                                var6 = var0.type;
                                var2 = var0.user;
                                var0 = new Array(0);
                                var4 = _closure1_slot14;
                                var4 = var4.PENDING_INCOMING;
                                if (!(var4 !== var6)) {
                                    _fun87956_ip = 279;
                                    continue _fun87956
                                }
                            case 48:
                                var4 = _closure1_slot14;
                                var4 = var4.PENDING_OUTGOING;
                                if (!(var4 !== var6)) {
                                    _fun87956_ip = 237;
                                    continue _fun87956
                                }
                            case 65:
                                var4 = _closure1_slot14;
                                var4 = var4.SUGGESTION;
                                if (!(var4 !== var6)) {
                                    _fun87956_ip = 215;
                                    continue _fun87956
                                }
                            case 82:
                                var4 = _closure1_slot14;
                                var4 = var4.FRIEND;
                                if (!(var4 === var6)) {
                                    _fun87956_ip = 355;
                                    continue _fun87956
                                }
                            case 99:
                                var6 = 0;
                                if (!(var3 > var6)) {
                                    _fun87956_ip = 125;
                                    continue _fun87956
                                }
                            case 105:
                                var10 = var0.push;
                                var3 = _closure1_slot16;
                                var3 = var3.AffinitySuggestions;
                                var3 = var10.bind(var0)(var3);
                            case 125:
                                var10 = var0.push;
                                var3 = _closure1_slot16;
                                var3 = var3.Friends;
                                var3 = var10.bind(var0)(var3);
                                var8 = var5;
                                for (var3 in var8)
                                    case 159: {
                                        case 171: var4 = var0.push;
                                        var3 = var5[var3];
                                        var5 = var3[var6];
                                        var3 = var5.charAt;
                                        var5 = var3.bind(var5)(var6);
                                        var3 = var5.toLocaleUpperCase;
                                        var3 = var3.bind(var5)();
                                        var3 = var4.bind(var0)(var3);
                                        _fun87956_ip = 355;
                                        continue _fun87956;
                                        case 215: var4 = var0.push;
                                        var3 = _closure1_slot16;
                                        var3 = var3.FriendSuggestions;
                                        var3 = var4.bind(var0)(var3);
                                        _fun87956_ip = 355;
                                        continue _fun87956;
                                        case 237: var4 = var0.push;
                                        var3 = _closure1_slot16;
                                        var3 = var3.FriendRequests;
                                        var3 = var4.bind(var0)(var3);
                                        var4 = var0.push;
                                        var3 = _closure1_slot16;
                                        var3 = var3.FriendRequestsOutgoing;
                                        var3 = var4.bind(var0)(var3);
                                        _fun87956_ip = 355;
                                        continue _fun87956;
                                        case 279: var4 = var0.push;
                                        var3 = _closure1_slot16;
                                        var3 = var3.FriendRequests;
                                        var3 = var4.bind(var0)(var3);
                                        var4 = _closure1_slot12;
                                        var3 = var4.isSpam;
                                        var2 = var2.id;
                                        var3 = var3.bind(var4)(var2);
                                        var2 = var0.push;
                                        var1 = _closure1_slot16;
                                        if (var3) {
                                            _fun87956_ip = 344;
                                            continue _fun87956
                                        }
                                        case 331: var3 = var1.FriendRequestsIncoming;
                                        var3 = var2.bind(var0)(var3);
                                        _fun87956_ip = 355;
                                        continue _fun87956;
                                        case 344: var1 = var1.FriendRequestsSpam;
                                        var1 = var2.bind(var0)(var1);
                                    }
                            case 355:
                                return var0;
                        }
                    };
                    var11 = function(arg0) { // Environment: var1
                        _fun87957: for (var _fun87957_ip = 0;;) switch (_fun87957_ip) {
                            case 0:
                                var0 = arg0;
                                var1 = var0.names;
                                var4 = var1;
                                for (var0 in var4)
                                    case 19: {
                                        case 28: var1 = var1[var0];
                                        var0 = 0;
                                        var0 = var1[var0];
                                        return var0;
                                    }
                            case 40:
                                var0 = '';
                                return var0;
                        }
                    };
                    var13 = var8;
                    var7 = new var13[var10](var12, var11, var10);
                    var7 = var7 instanceof Object ? var7 : var8;
                    var3.indexMap = var7;
                    var3.filteredFriends = var6;
                    var3.filteredGuildMembers = var6;
                    var6 = false;
                    var3.withGameFriends = var6;
                    var6 = function() { // Environment: var1
                        var1 = _closure3_slot0;
                        var0 = var1.initializeUsersFromStores;
                        var0 = var0.bind(var1)();
                        var0 = undefined;
                        return var0;
                    };
                    var3.handlePostConnectionOpen = var6;
                    var6 = function(arg0) { // Environment: var1
                        _fun87959: for (var _fun87959_ip = 0;;) switch (_fun87959_ip) {
                            case 0:
                                var0 = arg0;
                                var1 = var0.relationship;
                                var3 = _closure3_slot0;
                                var2 = var3.updateUser;
                                var1 = var1.id;
                                var1 = var2.bind(var3)(var1);
                                if (!var1) {
                                    _fun87959_ip = 65;
                                    continue _fun87959
                                }
                            case 35:
                                var1 = _closure3_slot0;
                                var2 = var1.onUpdate;
                                var1 = null;
                                if (!(var1 != var2)) {
                                    _fun87959_ip = 65;
                                    continue _fun87959
                                }
                            case 51:
                                var1 = var2.call;
                                var0 = _closure3_slot0;
                                var0 = var1.bind(var2)(var0);
                            case 65:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var3.handleRelationship = var6;
                    var6 = function(arg0) { // Environment: var1
                        _fun87960: for (var _fun87960_ip = 0;;) switch (_fun87960_ip) {
                            case 0:
                                var0 = arg0;
                                var1 = var0.suggestion;
                                var3 = _closure3_slot0;
                                var2 = var3.updateUser;
                                var1 = var1.suggested_user;
                                var1 = var1.id;
                                var1 = var2.bind(var3)(var1);
                                if (!var1) {
                                    _fun87960_ip = 71;
                                    continue _fun87960
                                }
                            case 41:
                                var1 = _closure3_slot0;
                                var2 = var1.onUpdate;
                                var1 = null;
                                if (!(var1 != var2)) {
                                    _fun87960_ip = 71;
                                    continue _fun87960
                                }
                            case 57:
                                var1 = var2.call;
                                var0 = _closure3_slot0;
                                var0 = var1.bind(var2)(var0);
                            case 71:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var3.handleFriendSuggestionCreate = var6;
                    var6 = function(arg0) { // Environment: var1
                        _fun87961: for (var _fun87961_ip = 0;;) switch (_fun87961_ip) {
                            case 0:
                                var0 = arg0;
                                var3 = var0.suggestedUserId;
                                var2 = _closure3_slot0;
                                var1 = var2.updateUser;
                                var1 = var1.bind(var2)(var3);
                                if (!var1) {
                                    _fun87961_ip = 60;
                                    continue _fun87961
                                }
                            case 30:
                                var1 = _closure3_slot0;
                                var2 = var1.onUpdate;
                                var1 = null;
                                if (!(var1 != var2)) {
                                    _fun87961_ip = 60;
                                    continue _fun87961
                                }
                            case 46:
                                var1 = var2.call;
                                var0 = _closure3_slot0;
                                var0 = var1.bind(var2)(var0);
                            case 60:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var3.handleFriendSuggestionDelete = var6;
                    var6 = function(arg0) { // Environment: var1
                        _fun87962: for (var _fun87962_ip = 0;;) switch (_fun87962_ip) {
                            case 0:
                                var0 = arg0;
                                var1 = var0.gameRelationship;
                                var2 = _closure3_slot0;
                                var2 = var2.withGameFriends;
                                if (var2) {
                                    _fun87962_ip = 29;
                                    continue _fun87962
                                }
                            case 25:
                                var2 = false;
                                return var2;
                            case 29:
                                var3 = _closure3_slot0;
                                var2 = var3.updateUser;
                                var1 = var1.id;
                                var1 = var2.bind(var3)(var1);
                                if (!var1) {
                                    _fun87962_ip = 82;
                                    continue _fun87962
                                }
                            case 52:
                                var1 = _closure3_slot0;
                                var2 = var1.onUpdate;
                                var1 = null;
                                if (!(var1 != var2)) {
                                    _fun87962_ip = 82;
                                    continue _fun87962
                                }
                            case 68:
                                var1 = var2.call;
                                var0 = _closure3_slot0;
                                var0 = var1.bind(var2)(var0);
                            case 82:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var3.handleGameRelationshipAdd = var6;
                    var6 = function(arg0) { // Environment: var1
                        _fun87963: for (var _fun87963_ip = 0;;) switch (_fun87963_ip) {
                            case 0:
                                var0 = arg0;
                                var3 = var0.userId;
                                var1 = _closure3_slot0;
                                var1 = var1.withGameFriends;
                                if (var1) {
                                    _fun87963_ip = 28;
                                    continue _fun87963
                                }
                            case 24:
                                var1 = false;
                                return var1;
                            case 28:
                                var2 = _closure3_slot0;
                                var1 = var2.updateUser;
                                var1 = var1.bind(var2)(var3);
                                if (!var1) {
                                    _fun87963_ip = 76;
                                    continue _fun87963
                                }
                            case 46:
                                var1 = _closure3_slot0;
                                var2 = var1.onUpdate;
                                var1 = null;
                                if (!(var1 != var2)) {
                                    _fun87963_ip = 76;
                                    continue _fun87963
                                }
                            case 62:
                                var1 = var2.call;
                                var0 = _closure3_slot0;
                                var0 = var1.bind(var2)(var0);
                            case 76:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var3.handleGameRelationshipRemove = var6;
                    var6 = function(arg0) { // Environment: var1
                        _fun87964: for (var _fun87964_ip = 0;;) switch (_fun87964_ip) {
                            case 0:
                                var0 = arg0;
                                var1 = var0.user;
                                var3 = _closure3_slot0;
                                var2 = var3.updateUser;
                                var1 = var1.id;
                                var1 = var2.bind(var3)(var1);
                                if (!var1) {
                                    _fun87964_ip = 64;
                                    continue _fun87964
                                }
                            case 34:
                                var1 = _closure3_slot0;
                                var2 = var1.onUpdate;
                                var1 = null;
                                if (!(var1 != var2)) {
                                    _fun87964_ip = 64;
                                    continue _fun87964
                                }
                            case 50:
                                var1 = var2.call;
                                var0 = _closure3_slot0;
                                var0 = var1.bind(var2)(var0);
                            case 64:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var3.handleGuildMember = var6;
                    var6 = function(arg0) { // Environment: var1
                        _fun87965: for (var _fun87965_ip = 0;;) switch (_fun87965_ip) {
                            case 0:
                                var0 = arg0;
                                var2 = var0.chunks;
                                var1 = _closure1_slot19;
                                var0 = undefined;
                                var6 = var1.bind(var0)(var2);
                                var4 = var6.bind(var0)();
                                var3 = var4.done;
                                var5 = var4;
                                var4 = false;
                                var2 = false;
                                if (var3) {
                                    _fun87965_ip = 164;
                                    continue _fun87965
                                }
                            case 45:
                                var8 = _closure1_slot19;
                                var3 = var5.value;
                                var3 = var3.members;
                                var11 = var8.bind(var0)(var3);
                                var8 = var11.bind(var0)();
                                var3 = var8.done;
                                var10 = var4;
                                var9 = var8;
                                var8 = var10;
                                if (var3) {
                                    _fun87965_ip = 143;
                                    continue _fun87965
                                }
                            case 86:
                                var3 = var9.value;
                                var13 = _closure3_slot0;
                                var12 = var13.updateUser;
                                var3 = var3.user;
                                var3 = var3.id;
                                var12 = var12.bind(var13)(var3);
                                if (var12) {
                                    _fun87965_ip = 122;
                                    continue _fun87965
                                }
                            case 119:
                                var12 = var10;
                            case 122:
                                var13 = var11.bind(var0)();
                                var3 = var13.done;
                                var10 = var12;
                                var9 = var13;
                                var8 = var10;
                                if (!var3) {
                                    _fun87965_ip = 86;
                                    continue _fun87965
                                }
                            case 143:
                                var9 = var6.bind(var0)();
                                var3 = var9.done;
                                var4 = var8;
                                var5 = var9;
                                var2 = var4;
                                if (!var3) {
                                    _fun87965_ip = 45;
                                    continue _fun87965
                                }
                            case 164:
                                if (!var2) {
                                    _fun87965_ip = 197;
                                    continue _fun87965
                                }
                            case 167:
                                var2 = _closure3_slot0;
                                var3 = var2.onUpdate;
                                var2 = null;
                                if (!(var2 != var3)) {
                                    _fun87965_ip = 197;
                                    continue _fun87965
                                }
                            case 183:
                                var2 = var3.call;
                                var1 = _closure3_slot0;
                                var1 = var2.bind(var3)(var1);
                            case 197:
                                return var0;
                        }
                    };
                    var3.handleGuildMembersChunkBatch = var6;
                    var6 = function() { // Environment: var1
                        _fun87966: for (var _fun87966_ip = 0;;) switch (_fun87966_ip) {
                            case 0:
                                var1 = arguments[0];
                                var0 = undefined;
                                if (!(var1 === var0)) {
                                    _fun87966_ip = 11;
                                    continue _fun87966
                                }
                            case 9:
                                var1 = false;
                            case 11:
                                var4 = _closure1_slot1;
                                var5 = _closure1_slot2;
                                var3 = 13;
                                var3 = var5[var3];
                                var3 = var4.bind(var0)(var3);
                                var3 = var3.shouldUseCache;
                                if (var3) {
                                    _fun87966_ip = 123;
                                    continue _fun87966
                                }
                            case 43:
                                var3 = _closure1_slot10;
                                var2 = var3.getUserAffinities;
                                var4 = var2.bind(var3)();
                                var3 = var4.forEach;
                                var2 = function(arg0) { // Environment: var2
                                    _fun87967: for (var _fun87967_ip = 0;;) switch (_fun87967_ip) {
                                        case 0:
                                            var0 = arg0;
                                            var2 = var0.otherUserId;
                                            var4 = var0.communicationProbability;
                                            var3 = var0.communicationRank;
                                            var1 = _closure3_slot0;
                                            var1 = var1.affinities;
                                            var1[var2] = var4;
                                            var1 = 5;
                                            if (!(var3 <= var1)) {
                                                _fun87967_ip = 60;
                                                continue _fun87967
                                            }
                                        case 45:
                                            var1 = _closure3_slot0;
                                            var0 = var1.updateUser;
                                            var0 = var0.bind(var1)(var2);
                                        case 60:
                                            var0 = undefined;
                                            return var0;
                                    }
                                };
                                var2 = var3.bind(var4)(var2);
                                var3 = undefined;
                                if (var1) {
                                    _fun87966_ip = 103;
                                    continue _fun87966
                                }
                            case 81:
                                var2 = _closure3_slot0;
                                var2 = var2.onUpdate;
                                var4 = null;
                                var1 = var4 == var2;
                                var3 = var2;
                            case 103:
                                if (var1) {
                                    _fun87966_ip = 123;
                                    continue _fun87966
                                }
                            case 106:
                                var2 = var3.call;
                                var1 = _closure3_slot0;
                                var1 = var2.bind(var3)(var1);
                            case 123:
                                return var0;
                        }
                    };
                    var3.handleUserAffinitiesUpdate = var6;
                    var3.withGameFriends = var4;
                    var4 = _closure1_slot1;
                    var2 = 13;
                    var2 = var5[var2];
                    var2 = var4.bind(var0)(var2);
                    var2 = var2.shouldUseCache;
                    if (var2) {
                        _fun87955_ip = 319;
                        continue _fun87955
                    }
                case 307:
                    var2 = var3.initializeUsersFromStores;
                    var2 = var2.bind(var3)();
                    _fun87955_ip = 348;
                    continue _fun87955;
                case 319:
                    var2 = var3.initializeUsersFromCache;
                    var3 = var2.bind(var3)();
                    var2 = var3.then;
                    var1 = function() { // Environment: var1
                        _fun87968: for (var _fun87968_ip = 0;;) switch (_fun87968_ip) {
                            case 0:
                                var2 = _closure3_slot1;
                                var0 = null;
                                var3 = var0 == var2;
                                var2 = undefined;
                                var0 = undefined;
                                if (var3) {
                                    _fun87968_ip = 28;
                                    continue _fun87968
                                }
                            case 20:
                                var1 = _closure3_slot1;
                                var0 = var1.bind(var2)();
                            case 28:
                                return var0;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                case 348:
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'subscribe';
        var0.key = var1;
        var1 = function(arg0) { // Original name: subscribe, environment: var4
            _fun87969: for (var _fun87969_ip = 0;;) switch (_fun87969_ip) {
                case 0:
                    var4 = arguments[1];
                    var1 = this;
                    var _closure3_slot0 = var1;
                    var0 = undefined;
                    if (!(var4 === var0)) {
                        _fun87969_ip = 20;
                        continue _fun87969
                    }
                case 18:
                    var4 = true;
                case 20:
                    var2 = arg0;
                    var1.onUpdate = var2;
                    var2 = null;
                    if (!var4) {
                        _fun87969_ip = 79;
                        continue _fun87969
                    }
                case 34:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 14;
                    var4 = var6[var4];
                    var6 = var5.bind(var0)(var4);
                    var5 = var6.getUserSearchContext;
                    var4 = function(arg0) { // Environment: var3
                        _fun87970: for (var _fun87970_ip = 0;;) switch (_fun87970_ip) {
                            case 0:
                                var0 = arg0;
                                var4 = var0.query;
                                var6 = var0.results;
                                var0 = undefined;
                                var _closure4_slot0 = var0;
                                var3 = _closure3_slot0;
                                var3 = var3.currentQuery;
                                if (!(var3 === var4)) {
                                    _fun87970_ip = 108;
                                    continue _fun87970
                                }
                            case 40:
                                var3 = new Array(0);
                                _closure4_slot0 = var3;
                                var5 = var6.reduce;
                                var4 = function(arg0, arg1) { // Environment: var2
                                    _fun87971: for (var _fun87971_ip = 0;;) switch (_fun87971_ip) {
                                        case 0:
                                            var0 = arg0;
                                            var1 = arg1;
                                            var5 = _closure1_slot1;
                                            var4 = _closure1_slot2;
                                            var2 = 13;
                                            var4 = var4[var2];
                                            var2 = undefined;
                                            var2 = var5.bind(var2)(var4);
                                            var2 = var2.shouldUseCache;
                                            if (var2) {
                                                _fun87971_ip = 181;
                                                continue _fun87971
                                            }
                                        case 43:
                                            var5 = _closure1_slot15;
                                            var4 = var5.has;
                                            var7 = _closure1_slot12;
                                            var6 = var7.getRelationshipType;
                                            var2 = var1.id;
                                            var2 = var6.bind(var7)(var2);
                                            var2 = var4.bind(var5)(var2);
                                            if (var2) {
                                                _fun87971_ip = 179;
                                                continue _fun87971
                                            }
                                        case 80:
                                            var4 = _closure3_slot0;
                                            var4 = var4.withGameFriends;
                                            if (!var4) {
                                                _fun87971_ip = 127;
                                                continue _fun87971
                                            }
                                        case 96:
                                            var5 = _closure1_slot9;
                                            var4 = var5.getGameFriendsForUser;
                                            var3 = var1.id;
                                            var3 = var4.bind(var5)(var3);
                                            var4 = var3.length;
                                            var3 = 0;
                                            if (!(!(var4 > var3))) {
                                                _fun87971_ip = 177;
                                                continue _fun87971
                                            }
                                        case 127:
                                            var3 = _closure3_slot0;
                                            var2 = var3.getItem;
                                            var1 = var1.id;
                                            var4 = var2.bind(var3)(var1);
                                            var2 = null;
                                            var1 = var0;
                                            if (!(var2 != var4)) {
                                                _fun87971_ip = 175;
                                                continue _fun87971
                                            }
                                        case 156:
                                            var3 = _closure4_slot0;
                                            var2 = var3.push;
                                            var2 = var2.bind(var3)(var4);
                                            var1 = true;
                                        case 175:
                                            return var1;
                                        case 177:
                                            return var0;
                                        case 179:
                                            return var0;
                                        case 181:
                                            var0 = false;
                                            return var0;
                                    }
                                };
                                var2 = false;
                                var2 = var5.bind(var6)(var4, var2);
                                if (!var2) {
                                    _fun87970_ip = 108;
                                    continue _fun87970
                                }
                            case 72:
                                var2 = _closure3_slot0;
                                var2.filteredGuildMembers = var3;
                                var3 = var2.onUpdate;
                                var2 = null;
                                if (!(var2 != var3)) {
                                    _fun87970_ip = 108;
                                    continue _fun87970
                                }
                            case 94:
                                var2 = var3.call;
                                var1 = _closure3_slot0;
                                var1 = var2.bind(var3)(var1);
                            case 108:
                                return var0;
                        }
                    };
                    var3 = 20;
                    var2 = var5.bind(var6)(var4, var3);
                case 79:
                    var1.userSearchContext = var2;
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 15;
                    var6 = var5[var3];
                    var9 = var4.bind(var0)(var6);
                    var8 = var9.subscribe;
                    var7 = var1.handlePostConnectionOpen;
                    var6 = 'POST_CONNECTION_OPEN';
                    var6 = var8.bind(var9)(var6, var7);
                    var6 = var5[var3];
                    var9 = var4.bind(var0)(var6);
                    var8 = var9.subscribe;
                    var7 = var1.handleRelationship;
                    var6 = 'RELATIONSHIP_ADD';
                    var6 = var8.bind(var9)(var6, var7);
                    var6 = var5[var3];
                    var9 = var4.bind(var0)(var6);
                    var8 = var9.subscribe;
                    var7 = var1.handleRelationship;
                    var6 = 'RELATIONSHIP_REMOVE';
                    var6 = var8.bind(var9)(var6, var7);
                    var6 = var5[var3];
                    var9 = var4.bind(var0)(var6);
                    var8 = var9.subscribe;
                    var7 = var1.handleRelationship;
                    var6 = 'RELATIONSHIP_UPDATE';
                    var6 = var8.bind(var9)(var6, var7);
                    var6 = var5[var3];
                    var9 = var4.bind(var0)(var6);
                    var8 = var9.subscribe;
                    var7 = var1.handleGameRelationshipAdd;
                    var6 = 'GAME_RELATIONSHIP_ADD';
                    var6 = var8.bind(var9)(var6, var7);
                    var6 = var5[var3];
                    var9 = var4.bind(var0)(var6);
                    var8 = var9.subscribe;
                    var7 = var1.handleGameRelationshipRemove;
                    var6 = 'GAME_RELATIONSHIP_REMOVE';
                    var6 = var8.bind(var9)(var6, var7);
                    var6 = var5[var3];
                    var9 = var4.bind(var0)(var6);
                    var8 = var9.subscribe;
                    var7 = var1.handleFriendSuggestionCreate;
                    var6 = 'FRIEND_SUGGESTION_CREATE';
                    var6 = var8.bind(var9)(var6, var7);
                    var6 = var5[var3];
                    var9 = var4.bind(var0)(var6);
                    var8 = var9.subscribe;
                    var7 = var1.handleFriendSuggestionDelete;
                    var6 = 'FRIEND_SUGGESTION_DELETE';
                    var6 = var8.bind(var9)(var6, var7);
                    var6 = var5[var3];
                    var9 = var4.bind(var0)(var6);
                    var8 = var9.subscribe;
                    var7 = var1.handleGuildMember;
                    var6 = 'GUILD_MEMBER_ADD';
                    var6 = var8.bind(var9)(var6, var7);
                    var6 = var5[var3];
                    var9 = var4.bind(var0)(var6);
                    var8 = var9.subscribe;
                    var7 = var1.handleGuildMember;
                    var6 = 'GUILD_MEMBER_UPDATE';
                    var6 = var8.bind(var9)(var6, var7);
                    var6 = var5[var3];
                    var9 = var4.bind(var0)(var6);
                    var8 = var9.subscribe;
                    var7 = var1.handleGuildMember;
                    var6 = 'GUILD_MEMBER_REMOVE';
                    var6 = var8.bind(var9)(var6, var7);
                    var3 = var5[var3];
                    var6 = var4.bind(var0)(var3);
                    var5 = var6.subscribe;
                    var4 = var1.handleGuildMembersChunkBatch;
                    var3 = 'GUILD_MEMBERS_CHUNK_BATCH';
                    var3 = var5.bind(var6)(var3, var4);
                    var3 = _closure1_slot10;
                    var2 = var3.addChangeListener;
                    var1 = var1.handleUserAffinitiesUpdate;
                    var1 = var2.bind(var3)(var1);
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(10);
        var1[0] = var0;
        var0 = {};
        var5 = 'unsubscribe';
        var0.key = var5;
        var5 = function() { // Original name: unsubscribe, environment: var4
            _fun87972: for (var _fun87972_ip = 0;;) switch (_fun87972_ip) {
                case 0:
                    var1 = this;
                    var0 = undefined;
                    var1.onUpdate = var0;
                    var3 = var1.userSearchContext;
                    var2 = null;
                    if (!(var2 != var3)) {
                        _fun87972_ip = 33;
                        continue _fun87972
                    }
                case 23:
                    var2 = var3.destroy;
                    var2 = var2.bind(var3)();
                case 33:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 15;
                    var6 = var5[var3];
                    var9 = var4.bind(var0)(var6);
                    var8 = var9.unsubscribe;
                    var7 = var1.handlePostConnectionOpen;
                    var6 = 'POST_CONNECTION_OPEN';
                    var6 = var8.bind(var9)(var6, var7);
                    var6 = var5[var3];
                    var9 = var4.bind(var0)(var6);
                    var8 = var9.unsubscribe;
                    var7 = var1.handleRelationship;
                    var6 = 'RELATIONSHIP_ADD';
                    var6 = var8.bind(var9)(var6, var7);
                    var6 = var5[var3];
                    var9 = var4.bind(var0)(var6);
                    var8 = var9.unsubscribe;
                    var7 = var1.handleRelationship;
                    var6 = 'RELATIONSHIP_REMOVE';
                    var6 = var8.bind(var9)(var6, var7);
                    var6 = var5[var3];
                    var9 = var4.bind(var0)(var6);
                    var8 = var9.unsubscribe;
                    var7 = var1.handleRelationship;
                    var6 = 'RELATIONSHIP_UPDATE';
                    var6 = var8.bind(var9)(var6, var7);
                    var6 = var5[var3];
                    var9 = var4.bind(var0)(var6);
                    var8 = var9.unsubscribe;
                    var7 = var1.handleGameRelationshipAdd;
                    var6 = 'GAME_RELATIONSHIP_ADD';
                    var6 = var8.bind(var9)(var6, var7);
                    var6 = var5[var3];
                    var9 = var4.bind(var0)(var6);
                    var8 = var9.unsubscribe;
                    var7 = var1.handleGameRelationshipRemove;
                    var6 = 'GAME_RELATIONSHIP_REMOVE';
                    var6 = var8.bind(var9)(var6, var7);
                    var6 = var5[var3];
                    var9 = var4.bind(var0)(var6);
                    var8 = var9.unsubscribe;
                    var7 = var1.handleFriendSuggestionCreate;
                    var6 = 'FRIEND_SUGGESTION_CREATE';
                    var6 = var8.bind(var9)(var6, var7);
                    var6 = var5[var3];
                    var9 = var4.bind(var0)(var6);
                    var8 = var9.unsubscribe;
                    var7 = var1.handleFriendSuggestionDelete;
                    var6 = 'FRIEND_SUGGESTION_DELETE';
                    var6 = var8.bind(var9)(var6, var7);
                    var6 = var5[var3];
                    var9 = var4.bind(var0)(var6);
                    var8 = var9.unsubscribe;
                    var7 = var1.handleGuildMember;
                    var6 = 'GUILD_MEMBER_ADD';
                    var6 = var8.bind(var9)(var6, var7);
                    var6 = var5[var3];
                    var9 = var4.bind(var0)(var6);
                    var8 = var9.unsubscribe;
                    var7 = var1.handleGuildMember;
                    var6 = 'GUILD_MEMBER_UPDATE';
                    var6 = var8.bind(var9)(var6, var7);
                    var6 = var5[var3];
                    var9 = var4.bind(var0)(var6);
                    var8 = var9.unsubscribe;
                    var7 = var1.handleGuildMember;
                    var6 = 'GUILD_MEMBER_REMOVE';
                    var6 = var8.bind(var9)(var6, var7);
                    var3 = var5[var3];
                    var6 = var4.bind(var0)(var3);
                    var5 = var6.unsubscribe;
                    var4 = var1.handleGuildMembersChunkBatch;
                    var3 = 'GUILD_MEMBERS_CHUNK_BATCH';
                    var3 = var5.bind(var6)(var3, var4);
                    var3 = _closure1_slot10;
                    var2 = var3.removeChangeListener;
                    var1 = var1.handleUserAffinitiesUpdate;
                    var1 = var2.bind(var3)(var1);
                    return var0;
            }
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'fetch';
        var0.key = var5;
        var5 = function(arg0, arg1) { // Original name: fetch, environment: var4
            _fun87973: for (var _fun87973_ip = 0;;) switch (_fun87973_ip) {
                case 0:
                    var1 = this;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var0 = 16;
                    var3 = var3[var0];
                    var0 = undefined;
                    var5 = var4.bind(var0)(var3);
                    var4 = var5.cleanString;
                    var3 = arg0;
                    var5 = var4.bind(var5)(var3);
                    var3 = '';
                    if (!(var3 !== var5)) {
                        _fun87973_ip = 148;
                        continue _fun87973
                    }
                case 50:
                    var3 = arg1;
                    if (!var3) {
                        _fun87973_ip = 90;
                        continue _fun87973
                    }
                case 56:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 17;
                    var2 = var4[var2];
                    var4 = var3.bind(var0)(var2);
                    var3 = var4.requestMembers;
                    var2 = null;
                    var2 = var3.bind(var4)(var2, var5);
                case 90:
                    var4 = var1.userSearchContext;
                    var2 = null;
                    if (!(var2 != var4)) {
                        _fun87973_ip = 170;
                        continue _fun87973
                    }
                case 102:
                    var3 = var4.setQuery;
                    var2 = {};
                    var2.query = var5;
                    var5 = var1.affinities;
                    var2.boosters = var5;
                    var5 = 0.002592;
                    var2.boosterFallback = var5;
                    var2 = var3.bind(var4)(var2);
                    _fun87973_ip = 170;
                    continue _fun87973;
                case 148:
                    var2 = var1.userSearchContext;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun87973_ip = 170;
                        continue _fun87973
                    }
                case 160:
                    var1 = var2.clearQuery;
                    var1 = var1.bind(var2)();
                case 170:
                    return var0;
            }
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'filter';
        var0.key = var5;
        var5 = function(arg0) { // Original name: filter, environment: var4
            _fun87974: for (var _fun87974_ip = 0;;) switch (_fun87974_ip) {
                case 0:
                    var2 = this;
                    var _closure3_slot0 = var2;
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var0 = 16;
                    var0 = var5[var0];
                    var9 = undefined;
                    var5 = var4.bind(var9)(var0);
                    var4 = var5.cleanString;
                    var0 = arg0;
                    var0 = var4.bind(var5)(var0);
                    var _closure3_slot1 = var0;
                    var4 = var2.currentQuery;
                    if (!(var4 !== var0)) {
                        _fun87974_ip = 145;
                        continue _fun87974
                    }
                case 62:
                    var4 = '';
                    if (!(var4 !== var0)) {
                        _fun87974_ip = 125;
                        continue _fun87974
                    }
                case 70:
                    var4 = new Array(0);
                    var2.filteredFriends = var4;
                    var6 = var2.indexMap;
                    var5 = var6.values;
                    var4 = _closure1_slot16;
                    var4 = var4.Friends;
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.forEach;
                    var4 = function(arg0) { // Environment: var3
                        _fun87975: for (var _fun87975_ip = 0;;) switch (_fun87975_ip) {
                            case 0:
                                var4 = arg0;
                                var6 = _closure1_slot21;
                                var5 = var4.names;
                                var3 = _closure3_slot1;
                                var1 = {};
                                var0 = true;
                                var1.contains = var0;
                                var0 = undefined;
                                var5 = var6.bind(var0)(var5, var3, var1);
                                var1 = null;
                                if (!(var1 != var5)) {
                                    _fun87975_ip = 91;
                                    continue _fun87975
                                }
                            case 46:
                                var2 = _closure3_slot0;
                                var3 = var2.filteredFriends;
                                if (!(var1 != var3)) {
                                    _fun87975_ip = 91;
                                    continue _fun87975
                                }
                            case 60:
                                var2 = var3.push;
                                var1 = {};
                                var9 = var1;
                                var8 = var4;
                                var4 = copyDataProperties(var9, var8);
                                var4 = 'firstMatch';
                                var1[var4] = var5;
                                var1 = var2.bind(var3)(var1);
                            case 91:
                                return var0;
                        }
                    };
                    var4 = var5.bind(var6)(var4);
                    _fun87974_ip = 139;
                    continue _fun87974;
                case 125:
                    var4 = null;
                    var2.filteredFriends = var4;
                    var2.filteredGuildMembers = var4;
                case 139:
                    var2.currentQuery = var0;
                case 145:
                    var4 = var2.currentQuery;
                    var0 = '';
                    if (!(var0 !== var4)) {
                        _fun87974_ip = 347;
                        continue _fun87974
                    }
                case 162:
                    var0 = {};
                    var4 = _closure1_slot16;
                    var7 = var4.Friends;
                    var6 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var5 = 18;
                    var4 = var10[var5];
                    var13 = var6.bind(var9)(var4);
                    var12 = var13.sortBy;
                    var4 = var10[var5];
                    var14 = var6.bind(var9)(var4);
                    var11 = var14.uniqBy;
                    var8 = var2.filteredFriends;
                    var4 = function(arg0) { // Environment: var3
                        var0 = arg0;
                        var0 = var0.user;
                        var0 = var0.id;
                        return var0;
                    };
                    var11 = var11.bind(var14)(var8, var4);
                    var8 = function(arg0) { // Environment: var3
                        var0 = arg0;
                        var3 = var0.names;
                        var2 = _closure1_slot22;
                        var1 = _closure3_slot1;
                        var0 = undefined;
                        var0 = var2.bind(var0)(var3, var1);
                        return var0;
                    };
                    var4 = function(arg0) { // Environment: var3
                        var0 = arg0;
                        var0 = var0.affinity;
                        var0 = -var0;
                        return var0;
                    };
                    var4 = var12.bind(var13)(var11, var8, var4);
                    var0[var7] = var4;
                    var4 = _closure1_slot16;
                    var4 = var4.GuildMembers;
                    var7 = var10[var5];
                    var8 = var6.bind(var9)(var7);
                    var7 = var8.sortBy;
                    var5 = var10[var5];
                    var10 = var6.bind(var9)(var5);
                    var9 = var10.uniqBy;
                    var6 = var2.filteredGuildMembers;
                    var5 = function(arg0) { // Environment: var3
                        var0 = arg0;
                        var0 = var0.user;
                        var0 = var0.id;
                        return var0;
                    };
                    var6 = var9.bind(var10)(var6, var5);
                    var5 = function(arg0) { // Environment: var3
                        var0 = arg0;
                        var3 = var0.names;
                        var2 = _closure1_slot22;
                        var1 = _closure3_slot1;
                        var0 = undefined;
                        var0 = var2.bind(var0)(var3, var1);
                        return var0;
                    };
                    var3 = function(arg0) { // Environment: var3
                        var0 = arg0;
                        var0 = var0.affinity;
                        var0 = -var0;
                        return var0;
                    };
                    var3 = var7.bind(var8)(var6, var5, var3);
                    var0[var4] = var3;
                    return var0;
                case 347:
                    var0 = {};
                    var3 = var2.indexMap;
                    var2 = var3.indexes;
                    var16 = var2.bind(var3)();
                    var17 = var0;
                    var2 = copyDataProperties(var17, var16);
                    var1 = _closure1_slot16;
                    var1 = var1.Friends;
                    var1 = delete var0[var1];
                    return var0;
            }
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'initializeUsersFromStores';
        var0.key = var5;
        var5 = function() { // Original name: initializeUsersFromStores, environment: var4
            _fun87982: for (var _fun87982_ip = 0;;) switch (_fun87982_ip) {
                case 0:
                    var3 = this;
                    var _closure3_slot0 = var3;
                    var5 = _closure1_slot19;
                    var4 = _closure1_slot12;
                    var0 = var4.getMutableRelationships;
                    var4 = var0.bind(var4)();
                    var0 = var4.keys;
                    var4 = var0.bind(var4)();
                    var0 = undefined;
                    var6 = var5.bind(var0)(var4);
                    var5 = var6.bind(var0)();
                    var4 = var5.done;
                    if (var4) {
                        _fun87982_ip = 89;
                        continue _fun87982
                    }
                case 58:
                    var7 = var5.value;
                    var4 = var3.updateUser;
                    var4 = var4.bind(var3)(var7);
                    var7 = var6.bind(var0)();
                    var4 = var7.done;
                    var5 = var7;
                    if (!var4) {
                        _fun87982_ip = 58;
                        continue _fun87982
                    }
                case 89:
                    var4 = var3.withGameFriends;
                    if (!var4) {
                        _fun87982_ip = 138;
                        continue _fun87982
                    }
                case 98:
                    var5 = _closure1_slot9;
                    var4 = var5.getGameRelationships;
                    var5 = var4.bind(var5)();
                    var4 = var5.values;
                    var5 = var4.bind(var5)();
                    var4 = var5.forEach;
                    var2 = function(arg0) { // Environment: var2
                        var2 = _closure3_slot0;
                        var1 = var2.updateUser;
                        var0 = arg0;
                        var0 = var0.id;
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    var2 = var4.bind(var5)(var2);
                case 138:
                    var2 = _closure1_slot19;
                    var4 = _closure1_slot8;
                    var1 = var4.getSuggestions;
                    var1 = var1.bind(var4)();
                    var4 = var2.bind(var0)(var1);
                    var2 = var4.bind(var0)();
                    var1 = var2.done;
                    if (var1) {
                        _fun87982_ip = 214;
                        continue _fun87982
                    }
                case 173:
                    var1 = var2.value;
                    var5 = var3.updateUser;
                    var1 = var1.user;
                    var1 = var1.id;
                    var1 = var5.bind(var3)(var1);
                    var5 = var4.bind(var0)();
                    var1 = var5.done;
                    var2 = var5;
                    if (!var1) {
                        _fun87982_ip = 173;
                        continue _fun87982
                    }
                case 214:
                    var2 = var3.handleUserAffinitiesUpdate;
                    var1 = true;
                    var1 = var2.bind(var3)(var1);
                    return var0;
            }
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'initializeUsersFromCache';
        var0.key = var5;
        var5 = function() { // Original name: initializeUsersFromCache, environment: var4
            var1 = this;
            var _closure3_slot0 = var1;
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 13;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var1 = var2.getAll;
            var2 = var1.bind(var2)();
            var1 = var2.then;
            var0 = function(arg0) { // Environment: var0
                _fun87985: for (var _fun87985_ip = 0;;) switch (_fun87985_ip) {
                    case 0:
                        var2 = _closure1_slot19;
                        var0 = undefined;
                        var1 = arg0;
                        var4 = var2.bind(var0)(var1);
                        var2 = var4.bind(var0)();
                        var1 = var2.done;
                        if (var1) {
                            _fun87985_ip = 69;
                            continue _fun87985
                        }
                    case 32:
                        var6 = var2.value;
                        var5 = _closure3_slot0;
                        var1 = var5.updateUserCached;
                        var1 = var1.bind(var5)(var6);
                        var5 = var4.bind(var0)();
                        var1 = var5.done;
                        var2 = var5;
                        if (!var1) {
                            _fun87985_ip = 32;
                            continue _fun87985
                        }
                    case 69:
                        return var0;
                }
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var5;
        var1[5] = var0;
        var0 = {};
        var5 = 'updateUser';
        var0.key = var5;
        var5 = function(arg0) { // Original name: updateUser, environment: var4
            _fun87986: for (var _fun87986_ip = 0;;) switch (_fun87986_ip) {
                case 0:
                    var3 = arg0;
                    var1 = this;
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var2 = 13;
                    var2 = var5[var2];
                    var6 = undefined;
                    var2 = var4.bind(var6)(var2);
                    var2 = var2.shouldUseCache;
                    if (var2) {
                        _fun87986_ip = 198;
                        continue _fun87986
                    }
                case 43:
                    var2 = var1.withGameFriends;
                    if (!var2) {
                        _fun87986_ip = 78;
                        continue _fun87986
                    }
                case 52:
                    var4 = _closure1_slot9;
                    var2 = var4.getGameFriendsForUser;
                    var2 = var2.bind(var4)(var3);
                    var4 = var2.length;
                    var2 = 0;
                    if (!(!(var4 > var2))) {
                        _fun87986_ip = 144;
                        continue _fun87986
                    }
                case 78:
                    var4 = _closure1_slot15;
                    var2 = var4.has;
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var0 = 16;
                    var0 = var7[var0];
                    var5 = var5.bind(var6)(var0);
                    var0 = var5.getRelationshipType;
                    var0 = var0.bind(var5)(var3);
                    var0 = var2.bind(var4)(var0);
                    if (var0) {
                        _fun87986_ip = 144;
                        continue _fun87986
                    }
                case 126:
                    var2 = var1.indexMap;
                    var0 = var2.delete;
                    var0 = var0.bind(var2)(var3);
                    return var0;
                case 144:
                    var0 = var1.getItem;
                    var4 = var0.bind(var1)(var3);
                    var0 = null;
                    if (!(var0 != var4)) {
                        _fun87986_ip = 180;
                        continue _fun87986
                    }
                case 161:
                    var2 = var1.indexMap;
                    var0 = var2.set;
                    var0 = var0.bind(var2)(var3, var4);
                    _fun87986_ip = 196;
                    continue _fun87986;
                case 180:
                    var2 = var1.indexMap;
                    var1 = var2.delete;
                    var0 = var1.bind(var2)(var3);
                case 196:
                    return var0;
                case 198:
                    var0 = false;
                    return var0;
            }
        };
        var0.value = var5;
        var1[6] = var0;
        var0 = {};
        var5 = 'getItem';
        var0.key = var5;
        var5 = function(arg0) { // Original name: getItem, environment: var4
            _fun87987: for (var _fun87987_ip = 0;;) switch (_fun87987_ip) {
                case 0:
                    var5 = arg0;
                    var7 = this;
                    var2 = _closure1_slot13;
                    var0 = var2.getUser;
                    var2 = var0.bind(var2)(var5);
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun87987_ip = 292;
                        continue _fun87987
                    }
                case 33:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var9 = 16;
                    var3 = var3[var9];
                    var8 = undefined;
                    var4 = var4.bind(var8)(var3);
                    var3 = var4.getNames;
                    var3 = var3.bind(var4)(var2);
                    var6 = var3.nick;
                    var12 = var3.names;
                    var4 = {};
                    var4.user = var2;
                    var4.names = var12;
                    var10 = var7.affinities;
                    var3 = var2.id;
                    var11 = var10[var3];
                    var13 = var0 != var11;
                    var3 = 0;
                    var10 = 0;
                    if (!var13) {
                        _fun87987_ip = 116;
                        continue _fun87987
                    }
                case 113:
                    var10 = var11;
                case 116:
                    var4.affinity = var10;
                    var11 = var7.currentQuery;
                    var10 = '';
                    if (!(var10 !== var11)) {
                        _fun87987_ip = 161;
                        continue _fun87987
                    }
                case 135:
                    var11 = _closure1_slot21;
                    var10 = var7.currentQuery;
                    var7 = {};
                    var13 = true;
                    var7.contains = var13;
                    var6 = var11.bind(var8)(var12, var10, var7);
                case 161:
                    var4.firstMatch = var6;
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var6 = var6[var9];
                    var7 = var7.bind(var8)(var6);
                    var6 = var7.getRelationshipType;
                    var2 = var2.id;
                    var6 = var6.bind(var7)(var2);
                    var2 = _closure1_slot14;
                    var2 = var2.FRIEND;
                    if (!(var6 !== var2)) {
                        _fun87987_ip = 237;
                        continue _fun87987
                    }
                case 213:
                    var2 = _closure1_slot9;
                    var1 = var2.getGameFriendsForUser;
                    var2 = var1.bind(var2)(var5);
                    var1 = var2.length;
                    if (!(!(var1 > var3))) {
                        _fun87987_ip = 260;
                        continue _fun87987
                    }
                case 237:
                    var1 = {};
                    var16 = var1;
                    var15 = var4;
                    var5 = copyDataProperties(var16, var15);
                    var5 = 'type';
                    var1[var5] = var6;
                    return var1;
                case 260:
                    var1 = {};
                    var16 = var1;
                    var15 = var4;
                    var4 = copyDataProperties(var16, var15);
                    var2 = var2[var3];
                    var3 = var2.type;
                    var2 = 'type';
                    var1[var2] = var3;
                    return var1;
                case 292:
                    return var0;
            }
        };
        var0.value = var5;
        var1[7] = var0;
        var0 = {};
        var5 = 'updateUserCached';
        var0.key = var5;
        var5 = function(arg0) { // Original name: updateUserCached, environment: var4
            _fun87988: for (var _fun87988_ip = 0;;) switch (_fun87988_ip) {
                case 0:
                    var1 = arg0;
                    var2 = this;
                    var4 = _closure1_slot15;
                    var3 = var4.has;
                    var0 = var1.type;
                    var0 = var3.bind(var4)(var0);
                    if (var0) {
                        _fun87988_ip = 54;
                        continue _fun87988
                    }
                case 31:
                    var4 = var2.indexMap;
                    var3 = var4.delete;
                    var0 = var1.id;
                    var0 = var3.bind(var4)(var0);
                    return var0;
                case 54:
                    var0 = var2.getItemCached;
                    var5 = var0.bind(var2)(var1);
                    var0 = null;
                    if (!(var0 != var5)) {
                        _fun87988_ip = 97;
                        continue _fun87988
                    }
                case 73:
                    var4 = var2.indexMap;
                    var3 = var4.set;
                    var0 = var1.id;
                    var0 = var3.bind(var4)(var0, var5);
                    _fun87988_ip = 118;
                    continue _fun87988;
                case 97:
                    var3 = var2.indexMap;
                    var2 = var3.delete;
                    var1 = var1.id;
                    var0 = var2.bind(var3)(var1);
                case 118:
                    return var0;
            }
        };
        var0.value = var5;
        var1[8] = var0;
        var0 = {};
        var5 = 'getItemCached';
        var0.key = var5;
        var4 = function(arg0) { // Original name: getItemCached, environment: var4
            _fun87989: for (var _fun87989_ip = 0;;) switch (_fun87989_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = null;
                    var1 = var0 == var4;
                    if (var1) {
                        _fun87989_ip = 135;
                        continue _fun87989
                    }
                case 15:
                    var1 = {};
                    var2 = var4.type;
                    var1.type = var2;
                    var7 = _closure1_slot11;
                    var9 = var4.user;
                    var6 = var7.prototype;
                    var6 = Object.create(var6, {
                        constructor: {
                            value: var7
                        }
                    });
                    var10 = var6;
                    var2 = new var10[var7](var9, var8);
                    var2 = var2 instanceof Object ? var2 : var6;
                    var1.user = var2;
                    var2 = var4.names;
                    var1.names = var2;
                    var2 = var4.affinity;
                    var1.affinity = var2;
                    var6 = var3.currentQuery;
                    var2 = '';
                    if (!(var2 === var6)) {
                        _fun87989_ip = 104;
                        continue _fun87989
                    }
                case 96:
                    var2 = var4.nick;
                    _fun87989_ip = 127;
                    continue _fun87989;
                case 104:
                    var6 = _closure1_slot21;
                    var5 = var4.names;
                    var4 = var3.currentQuery;
                    var3 = undefined;
                    var2 = var6.bind(var3)(var5, var4);
                case 127:
                    var1.firstMatch = var2;
                    var0 = var1;
                case 135:
                    return var0;
            }
        };
        var0.value = var4;
        var1[9] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var3 = var3.bind(var0)();
    var _closure1_slot17 = var3;
    var5 = 21;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/main_tabs_v2/native/shared_components/user_list/useUserListData.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function(arg0) { // Original name: useUserListData, environment: var4
        _fun87990: for (var _fun87990_ip = 0;;) switch (_fun87990_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.query;
                var _closure2_slot0 = var1;
                var14 = var2.withGuildMembers;
                var _closure2_slot1 = var14;
                var13 = var2.withAffinitySuggestions;
                var _closure2_slot2 = var13;
                var12 = var2.withFriends;
                var _closure2_slot3 = var12;
                var11 = var2.withGameFriends;
                var _closure2_slot4 = var11;
                var10 = var2.withFriendSuggestions;
                var _closure2_slot5 = var10;
                var9 = var2.withFriendRequests;
                var _closure2_slot6 = var9;
                var8 = var2.withFriendRequestsIncoming;
                var _closure2_slot7 = var8;
                var7 = var2.withFriendRequestsOutgoing;
                var _closure2_slot8 = var7;
                var6 = var2.withFriendRequestsSpam;
                var _closure2_slot9 = var6;
                var5 = var2.excludeCurrentUser;
                var19 = undefined;
                if (!(var5 === var19)) {
                    _fun87990_ip = 119;
                    continue _fun87990
                }
            case 117:
                var5 = false;
            case 119:
                var _closure2_slot10 = var5;
                var4 = var2.affinitySuggestionsLimit;
                if (!(var4 === var19)) {
                    _fun87990_ip = 136;
                    continue _fun87990
                }
            case 133:
                var4 = 5;
            case 136:
                var _closure2_slot11 = var4;
                var _closure2_slot12 = var19;
                var _closure2_slot13 = var19;
                var _closure2_slot14 = var19;
                var _closure2_slot15 = var19;
                var3 = _closure1_slot7;
                var16 = var3.useState;
                var15 = 0;
                var18 = var16.bind(var3)(var15);
                var17 = _closure1_slot6;
                var16 = 2;
                var17 = var17.bind(var19)(var18, var16);
                var16 = var17[var15];
                _closure2_slot12 = var16;
                var18 = 1;
                var17 = var17[var18];
                _closure2_slot13 = var17;
                var21 = var3.useMemo;
                var20 = new Array(2);
                var20[0] = var17;
                var20[1] = var11;
                var17 = function() { // Environment: var0
                    var3 = _closure1_slot17;
                    var4 = _closure2_slot4;
                    var0 = var3.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var3
                        }
                    });
                    var5 = function() { // Environment: var0
                        var2 = _closure2_slot13;
                        var0 = global;
                        var1 = var0.Date;
                        var0 = var1.now;
                        var1 = var0.bind(var1)();
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var6 = var1;
                    var0 = new var6[var3](var5, var4, var3);
                    var0 = var0 instanceof Object ? var0 : var1;
                    return var0;
                };
                var17 = var21.bind(var3)(var17, var20);
                _closure2_slot14 = var17;
                var21 = var3.useMemo;
                var20 = new Array(3);
                var20[0] = var16;
                var20[1] = var17;
                var20[2] = var1;
                var16 = function() { // Environment: var0
                    var3 = _closure2_slot14;
                    var2 = var3.filter;
                    var0 = _closure2_slot0;
                    var2 = var2.bind(var3)(var0);
                    var0 = new Array(2);
                    var0[0] = var2;
                    var1 = _closure2_slot12;
                    var0[1] = var1;
                    return var0;
                };
                var16 = var21.bind(var3)(var16, var20);
                var2 = _closure1_slot6;
                var2 = var2.bind(var19)(var16, var18);
                var15 = var2[var15];
                _closure2_slot15 = var15;
                var18 = var3.useEffect;
                var16 = new Array(2);
                var16[0] = var17;
                var16[1] = var14;
                var2 = function() { // Environment: var0
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 18;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.debounce;
                    var2 = function() { // Environment: var0
                        var2 = _closure2_slot13;
                        var0 = global;
                        var1 = var0.Date;
                        var0 = var1.now;
                        var1 = var0.bind(var1)();
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var1 = 0;
                    var1 = var3.bind(var4)(var2, var1);
                    var _closure3_slot0 = var1;
                    var4 = _closure2_slot14;
                    var3 = var4.subscribe;
                    var2 = _closure2_slot1;
                    var1 = function() { // Environment: var0
                        var1 = _closure3_slot0;
                        var0 = undefined;
                        var1 = var1.bind(var0)();
                        return var0;
                    };
                    var1 = var3.bind(var4)(var1, var2);
                    var0 = function() { // Environment: var0
                        var1 = _closure2_slot14;
                        var0 = var1.unsubscribe;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    return var0;
                };
                var2 = var18.bind(var3)(var2, var16);
                var16 = var3.useEffect;
                var2 = new Array(3);
                var2[0] = var17;
                var2[1] = var1;
                var2[2] = var14;
                var1 = function() { // Environment: var0
                    var3 = _closure2_slot14;
                    var2 = var3.fetch;
                    var1 = _closure2_slot0;
                    var0 = _closure2_slot1;
                    var0 = var2.bind(var3)(var1, var0);
                    var0 = undefined;
                    return var0;
                };
                var1 = var16.bind(var3)(var1, var2);
                var16 = var3.useEffect;
                var2 = function() { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 20;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.fetchUserAffinitiesV2;
                    var1 = var1.bind(var2)();
                    return var0;
                };
                var1 = new Array(0);
                var1 = var16.bind(var3)(var2, var1);
                var2 = var3.useMemo;
                var1 = new Array(12);
                var1[0] = var15;
                var1[1] = var14;
                var1[2] = var13;
                var1[3] = var12;
                var1[4] = var11;
                var1[5] = var10;
                var1[6] = var9;
                var1[7] = var8;
                var1[8] = var7;
                var1[9] = var6;
                var1[10] = var5;
                var1[11] = var4;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot23;
                    var1 = {};
                    var3 = _closure2_slot15;
                    var1.data = var3;
                    var3 = _closure2_slot1;
                    var1.withGuildMembers = var3;
                    var3 = _closure2_slot2;
                    var1.withAffinitySuggestions = var3;
                    var3 = _closure2_slot3;
                    var1.withFriends = var3;
                    var3 = _closure2_slot4;
                    var1.withGameFriends = var3;
                    var3 = _closure2_slot5;
                    var1.withFriendSuggestions = var3;
                    var3 = _closure2_slot6;
                    var1.withFriendRequests = var3;
                    var3 = _closure2_slot7;
                    var1.withFriendRequestsIncoming = var3;
                    var3 = _closure2_slot8;
                    var1.withFriendRequestsOutgoing = var3;
                    var3 = _closure2_slot9;
                    var1.withFriendRequestsSpam = var3;
                    var3 = _closure2_slot10;
                    var1.excludeCurrentUser = var3;
                    var0 = _closure2_slot11;
                    var1.affinitySuggestionsLimit = var0;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var0 = var2.bind(var3)(var0, var1);
                return var0;
        }
    };
    var2.default = var4;
    var2.UserSearch = var3;
    var2.parseUserSearchResults = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [29, 6, 7, 57, 31, 9040, 11178, 6936, 1620, 3059, 1613, 660, 3046, 11319, 6590, 806, 9039, 5565, 22, 1234, 8309, 2]);