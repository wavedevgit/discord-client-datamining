// modules/guild_settings/roles/GuildSettingsRolesUtils.tsx
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
        _fun115830: for (var _fun115830_ip = 0;;) switch (_fun115830_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun115830_ip = 46;
                    continue _fun115830
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun115830_ip = 55;
                    continue _fun115830
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun115830_ip = 345;
                    continue _fun115830
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun115830_ip = 323;
                    continue _fun115830
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun115830_ip = 283;
                    continue _fun115830
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun115830_ip = 270;
                    continue _fun115830
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
                    _fun115830_ip = 163;
                    continue _fun115830
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun115830_ip = 179;
                    continue _fun115830
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun115830_ip = 249;
                    continue _fun115830
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun115830_ip = 249;
                    continue _fun115830
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun115830_ip = 234;
                    continue _fun115830
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun115830_ip = 247;
                    continue _fun115830
                }
            case 234:
                var8 = _closure1_slot9;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun115830_ip = 265;
                continue _fun115830;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun115830_ip = 283;
                continue _fun115830;
            case 270:
                var6 = _closure1_slot9;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun115830_ip = 323;
                    continue _fun115830
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
                    _fun115830_ip = 330;
                    continue _fun115830
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun115831: for (var _fun115831_ip = 0;;) switch (_fun115831_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun115831_ip = 56;
                                continue _fun115831
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
                            _fun115831_ip = 67;
                            continue _fun115831;
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
    var _closure1_slot8 = var0;
    var0 = function arg0, arg1() {
        _fun115832: for (var _fun115832_ip = 0;;) switch (_fun115832_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun115832_ip = 23;
                    continue _fun115832
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun115832_ip = 33;
                    continue _fun115832
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
                    _fun115832_ip = 70;
                    continue _fun115832
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun115832_ip = 55;
                    continue _fun115832
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var3 = function arg0, arg1() {
        var4 = arg0;
        var6 = arg1;
        var _closure2_slot0 = var4;
        var _closure2_slot1 = var6;
        var5 = _closure1_slot0;
        var7 = _closure1_slot2;
        var2 = 5;
        var8 = var7[var2];
        var3 = undefined;
        var11 = var5.bind(var3)(var8);
        var10 = var11.useStateFromStoresArray;
        var8 = _closure1_slot4;
        var9 = new Array(1);
        var9[0] = var8;
        var8 = new Array(2);
        var8[0] = var4;
        var8[1] = var6;
        var6 = function() { // Environment: var0
            _fun115834: for (var _fun115834_ip = 0;;) switch (_fun115834_ip) {
                case 0:
                    var3 = _closure1_slot4;
                    var2 = var3.getMembers;
                    var0 = _closure2_slot0;
                    var3 = var2.bind(var3)(var0);
                    var4 = _closure2_slot1;
                    var2 = null;
                    var0 = var3;
                    if (!(var2 != var4)) {
                        _fun115834_ip = 52;
                        continue _fun115834
                    }
                case 38:
                    var2 = var3.filter;
                    var1 = _closure2_slot1;
                    var0 = var2.bind(var3)(var1);
                case 52:
                    return var0;
            }
        };
        var6 = var10.bind(var11)(var9, var6, var8);
        var _closure2_slot2 = var6;
        var2 = var7[var2];
        var8 = var5.bind(var3)(var2);
        var7 = var8.useStateFromStoresObject;
        var2 = _closure1_slot5;
        var5 = new Array(1);
        var5[0] = var2;
        var3 = new Array(1);
        var3[0] = var6;
        var2 = function() { // Environment: var0
            var3 = _closure2_slot2;
            var2 = var3.reduce;
            var1 = function(arg0, arg1) { // Environment: var0
                _fun115836: for (var _fun115836_ip = 0;;) switch (_fun115836_ip) {
                    case 0:
                        var0 = arg0;
                        var1 = arg1;
                        var4 = _closure1_slot5;
                        var3 = var4.getUser;
                        var2 = var1.userId;
                        var2 = var3.bind(var4)(var2);
                        var3 = null;
                        if (!(var3 != var2)) {
                            _fun115836_ip = 44;
                            continue _fun115836
                        }
                    case 35:
                        var1 = var1.userId;
                        var0[var1] = var2;
                    case 44:
                        return var0;
                }
            };
            var0 = {};
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var5 = var7.bind(var8)(var5, var2, var3);
        var _closure2_slot3 = var5;
        var3 = _closure1_slot3;
        var2 = var3.useMemo;
        var1 = new Array(3);
        var1[0] = var6;
        var1[1] = var5;
        var1[2] = var4;
        var0 = function() { // Environment: var0
            _fun115837: for (var _fun115837_ip = 0;;) switch (_fun115837_ip) {
                case 0:
                    var0 = new Array(0);
                    var2 = _closure1_slot8;
                    var1 = _closure2_slot2;
                    var8 = undefined;
                    var7 = var2.bind(var8)(var1);
                    var2 = var7.bind(var8)();
                    var1 = var2.done;
                    var6 = 6;
                    var5 = 80;
                    var4 = null;
                    var3 = var2;
                    var2 = undefined;
                    if (var1) {
                        _fun115837_ip = 285;
                        continue _fun115837
                    }
                case 53:
                    var14 = var3.value;
                    var11 = _closure2_slot3;
                    var1 = var14.userId;
                    var13 = var11[var1];
                    if (!(var4 != var13)) {
                        _fun115837_ip = 267;
                        continue _fun115837
                    }
                case 78:
                    var12 = var0.push;
                    var11 = {};
                    var1 = var14.nick;
                    var15 = var1;
                    if (!(var4 == var1)) {
                        _fun115837_ip = 126;
                        continue _fun115837
                    }
                case 98:
                    var17 = _closure1_slot1;
                    var16 = _closure1_slot2;
                    var16 = var16[var6];
                    var17 = var17.bind(var8)(var16);
                    var16 = var17.getName;
                    var15 = var16.bind(var17)(var13);
                case 126:
                    var11.name = var15;
                    var16 = _closure1_slot1;
                    var15 = _closure1_slot2;
                    var15 = var15[var6];
                    var16 = var16.bind(var8)(var15);
                    var15 = var16.getUserTag;
                    var15 = var15.bind(var16)(var13);
                    var11.userTag = var15;
                    var15 = var14.userId;
                    var11.id = var15;
                    var15 = var13.getAvatarSource;
                    var16 = _closure2_slot0;
                    var15 = var15.bind(var13)(var16);
                    var11.avatarSource = var15;
                    var15 = var13.getAvatarURL;
                    var15 = var15.bind(var13)(var16, var5);
                    var11.avatarURL = var15;
                    var15 = var13.bot;
                    var11.bot = var15;
                    var15 = var13.isVerifiedBot;
                    var15 = var15.bind(var13)();
                    var11.verifiedBot = var15;
                    var15 = var14.roles;
                    var11.roles = var15;
                    var14 = var14.userId;
                    var11.key = var14;
                    var11.user = var13;
                    var11 = var12.bind(var0)(var11);
                    var2 = var1;
                case 267:
                    var11 = var7.bind(var8)();
                    var1 = var11.done;
                    var3 = var11;
                    if (!var1) {
                        _fun115837_ip = 53;
                        continue _fun115837
                    }
                case 285:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot10 = var3;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var8 = var6[var0];
    var4 = arg3;
    var0 = undefined;
    var4 = var4.bind(var0)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.GuildSettingsRoleEditSections;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot7 = var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_settings/roles/GuildSettingsRolesUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = 50;
    var2.ADD_MEMBER_QUERY_LIMIT = var4;
    var4 = 1000;
    var2.MAX_PREFETCH_MEMBER_COUNT = var4;
    var2.useGuildMembers = var3;
    var3 = function arg0, arg1, arg2() {
        var3 = arg0;
        var6 = arg1;
        var5 = arg2;
        var _closure2_slot0 = var3;
        var _closure2_slot1 = var6;
        var _closure2_slot2 = var5;
        var4 = _closure1_slot3;
        var2 = var4.useRef;
        var2 = var2.bind(var4)(var5);
        var _closure2_slot3 = var2;
        var5 = _closure1_slot3;
        var4 = var5.useEffect;
        var2 = function() { // Environment: var1
            var1 = _closure2_slot3;
            var0 = _closure2_slot2;
            var1.current = var0;
            var0 = undefined;
            return var0;
        };
        var2 = var4.bind(var5)(var2);
        var7 = _closure1_slot3;
        var5 = var7.useEffect;
        var4 = new Array(2);
        var4[0] = var3;
        var4[1] = var6;
        var2 = function() { // Environment: var1
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 7;
            var1 = var1[var0];
            var0 = undefined;
            var5 = var2.bind(var0)(var1);
            var4 = var5.requestMembersForRole;
            var3 = _closure2_slot0;
            var2 = _closure2_slot1;
            var3 = var4.bind(var5)(var3, var2);
            var2 = var3.catch;
            var1 = _closure2_slot3;
            var1 = var1.current;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var2 = var5.bind(var7)(var2, var4);
        var5 = _closure1_slot3;
        var4 = var5.useCallback;
        var2 = new Array(1);
        var2[0] = var6;
        var1 = function(arg0) { // Environment: var1
            var0 = arg0;
            var2 = var0.roles;
            var1 = var2.includes;
            var0 = _closure2_slot1;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var2 = var4.bind(var5)(var1, var2);
        var1 = _closure1_slot10;
        var0 = undefined;
        var0 = var1.bind(var0)(var3, var2);
        return var0;
    };
    var2.useGuildRoleMembers = var3;
    var3 = function arg0, arg1() {
        var5 = arg0;
        var4 = arg1;
        var _closure2_slot0 = var5;
        var _closure2_slot1 = var4;
        var6 = _closure1_slot3;
        var3 = var6.useRef;
        var2 = false;
        var2 = var3.bind(var6)(var2);
        var _closure2_slot2 = var2;
        var3 = _closure1_slot3;
        var2 = var3.useEffect;
        var1 = new Array(2);
        var1[0] = var5;
        var1[1] = var4;
        var0 = function() { // Environment: var0
            _fun115843: for (var _fun115843_ip = 0;;) switch (_fun115843_ip) {
                case 0:
                    var3 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 8;
                    var1 = var1[var0];
                    var0 = undefined;
                    var7 = var3.bind(var0)(var1);
                    var6 = var7.requestMembers;
                    var5 = _closure2_slot0;
                    var4 = _closure2_slot1;
                    var3 = 200;
                    var3 = var6.bind(var7)(var5, var4, var3);
                    var3 = '';
                    var3 = var3 === var4;
                    if (var3) {
                        _fun115843_ip = 72;
                        continue _fun115843
                    }
                case 63:
                    var4 = _closure2_slot2;
                    var3 = var4.current;
                case 72:
                    if (var3) {
                        _fun115843_ip = 141;
                        continue _fun115843
                    }
                case 75:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 9;
                    var3 = var5[var3];
                    var5 = var4.bind(var0)(var3);
                    var4 = var5.track;
                    var2 = _closure1_slot7;
                    var3 = var2.SEARCH_STARTED;
                    var2 = {};
                    var6 = 'Role Members';
                    var2.search_type = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    var2 = _closure2_slot2;
                    var1 = true;
                    var2.current = var1;
                case 141:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        var0 = undefined;
        return var0;
    };
    var2.useQueryGuildMembers = var3;
    var3 = function arg0, arg1() {
        _fun115844: for (var _fun115844_ip = 0;;) switch (_fun115844_ip) {
            case 0:
                var2 = arg0;
                var1 = arg1;
                var0 = var2.trim;
                var2 = var0.bind(var2)();
                var0 = var2.toLowerCase;
                var4 = var0.bind(var2)();
                var0 = var1.id;
                var0 = var0 === var4;
                if (var0) {
                    _fun115844_ip = 84;
                    continue _fun115844
                }
            case 38:
                var3 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 10;
                var2 = var5[var2];
                var5 = undefined;
                var3 = var3.bind(var5)(var2);
                var6 = var1.name;
                var2 = var6.toLowerCase;
                var2 = var2.bind(var6)();
                var0 = var3.bind(var5)(var4, var2);
            case 84:
                if (var0) {
                    _fun115844_ip = 134;
                    continue _fun115844
                }
            case 87:
                var5 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 10;
                var2 = var3[var2];
                var3 = undefined;
                var2 = var5.bind(var3)(var2);
                var5 = var1.userTag;
                var1 = var5.toLowerCase;
                var1 = var1.bind(var5)();
                var0 = var2.bind(var3)(var4, var1);
            case 134:
                return var0;
        }
    };
    var2.filterFullMembersByQuery = var3;
    var3 = function arg0() {
        _fun115845: for (var _fun115845_ip = 0;;) switch (_fun115845_ip) {
            case 0:
                var3 = arg0;
                var1 = _closure1_slot6;
                var1 = var1.MEMBERS;
                if (!(var1 !== var3)) {
                    _fun115845_ip = 119;
                    continue _fun115845
                }
            case 20:
                var1 = _closure1_slot6;
                var1 = var1.PERMISSIONS;
                if (!(var1 !== var3)) {
                    _fun115845_ip = 113;
                    continue _fun115845
                }
            case 34:
                var1 = _closure1_slot6;
                var1 = var1.DISPLAY;
                if (!(var1 !== var3)) {
                    _fun115845_ip = 105;
                    continue _fun115845
                }
            case 48:
                var1 = _closure1_slot6;
                var1 = var1.VERIFICATIONS;
                if (!(var1 !== var3)) {
                    _fun115845_ip = 97;
                    continue _fun115845
                }
            case 62:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 11;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.assertNever;
                var1 = var1.bind(var2)(var3);
                return var0;
            case 97:
                var0 = 'Connections';
                return var0;
            case 105:
                var0 = 'Role Settings';
                return var0;
            case 113:
                var0 = 'Permissions';
                return var0;
            case 119:
                var0 = 'Members';
                return var0;
        }
    };
    var2.getSectionAnalyticsName = var3;
    var1 = function arg0, arg1() {
        _fun115846: for (var _fun115846_ip = 0;;) switch (_fun115846_ip) {
            case 0:
                var4 = arg1;
                var0 = '';
                var0 = var0 === var4;
                if (var0) {
                    _fun115846_ip = 52;
                    continue _fun115846
                }
            case 14:
                var1 = arg0;
                var2 = var1.name;
                var1 = var2.toLowerCase;
                var3 = var1.bind(var2)();
                var2 = var3.includes;
                var1 = var4.toLowerCase;
                var1 = var1.bind(var4)();
                var0 = var2.bind(var3)(var1);
            case 52:
                return var0;
        }
    };
    var2.filterRole = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1672, 1613, 14708, 660, 566, 3195, 9802, 5566, 795, 5564, 1304, 2]);