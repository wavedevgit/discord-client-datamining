// stores/ChannelSectionStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var6;
    var0 = function() {
        _fun38438: for (var _fun38438_ip = 0;;) switch (_fun38438_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 70: // try_end0
                _fun38438_ip = 74;
                continue _fun38438;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot28 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot28 = var0;
    var0 = function arg0() {
        _fun38441: for (var _fun38441_ip = 0;;) switch (_fun38441_ip) {
            case 0:
                var5 = arg0;
                var0 = null;
                if (!(var0 != var5)) {
                    _fun38441_ip = 63;
                    continue _fun38441
                }
            case 9:
                var1 = _closure1_slot18;
                var4 = undefined;
                var1 = var1.bind(var4)(var5);
                if (var1) {
                    _fun38441_ip = 28;
                    continue _fun38441
                }
            case 26:
                return var5;
            case 28:
                var3 = _closure1_slot14;
                var1 = var3.getGuildId;
                var3 = var1.bind(var3)();
                var6 = var0 == var3;
                var1 = null;
                if (var6) {
                    _fun38441_ip = 61;
                    continue _fun38441
                }
            case 51:
                var2 = _closure1_slot19;
                var1 = var2.bind(var4)(var5, var3);
            case 61:
                return var1;
            case 63:
                return var0;
        }
    };
    var _closure1_slot29 = var0;
    var0 = function arg0() {
        _fun38442: for (var _fun38442_ip = 0;;) switch (_fun38442_ip) {
            case 0:
                var1 = arg0;
                var4 = _closure1_slot26;
                var3 = false;
                var0 = false;
                if (!var4) {
                    _fun38442_ip = 23;
                    continue _fun38442
                }
            case 17:
                _closure1_slot26 = var3;
                var0 = true;
            case 23:
                var5 = _closure1_slot29;
                var4 = _closure1_slot13;
                var3 = var4.getChannelId;
                var4 = var3.bind(var4)();
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                var4 = null;
                var4 = var4 != var3;
                if (!var4) {
                    _fun38442_ip = 65;
                    continue _fun38442
                }
            case 57:
                var5 = _closure1_slot24;
                var4 = var3 in var5;
            case 65:
                if (!var4) {
                    _fun38442_ip = 78;
                    continue _fun38442
                }
            case 68:
                var2 = _closure1_slot24;
                var2 = delete var2[var3];
                var0 = true;
            case 78:
                if (!var0) {
                    _fun38442_ip = 87;
                    continue _fun38442
                }
            case 81:
                var0 = var1;
                if (var0) {
                    _fun38442_ip = 90;
                    continue _fun38442
                }
            case 87:
                var0 = !var1;
            case 90:
                return var0;
        }
    };
    var _closure1_slot30 = var0;
    var0 = function() {
        _fun38443: for (var _fun38443_ip = 0;;) switch (_fun38443_ip) {
            case 0:
                var11 = _closure1_slot24;
                var2 = false;
                var6 = undefined;
                var4 = null;
                var3 = 16;
                var1 = undefined;
                var0 = false;
                for (var7 in var11)
                    case 31: {
                        var16 = var2;
                        var0 = var16;
                        case 49: var15 = var7;
                        var13 = _closure1_slot24;
                        var13 = var13[var15];
                        var17 = var13.type;
                        var18 = _closure1_slot0;
                        var14 = _closure1_slot2;
                        var14 = var14[var3];
                        var14 = var18.bind(var6)(var14);
                        var14 = var14.SidebarType;
                        var14 = var14.VIEW_THREAD;
                        if (!(var17 !== var14)) {
                            _fun38443_ip = 139;
                            continue _fun38443
                        }
                        case 98: var17 = var13.type;
                        var18 = _closure1_slot0;
                        var14 = _closure1_slot2;
                        var14 = var14[var3];
                        var14 = var18.bind(var6)(var14);
                        var14 = var14.SidebarType;
                        var14 = var14.VIEW_CHANNEL;
                        var2 = var16;
                        if (var17 !== var14) {
                            _fun38443_ip = 31;
                            continue _fun38443
                        }
                        case 139: var17 = _closure1_slot10;
                        var14 = var17.getChannel;
                        var13 = var13.channelId;
                        var13 = var14.bind(var17)(var13);
                        var14 = var4 != var13;
                        if (!var14) {
                            _fun38443_ip = 191;
                            continue _fun38443
                        }
                        case 165: var19 = _closure1_slot12;
                        var18 = var19.can;
                        var17 = _closure1_slot20;
                        var17 = var17.VIEW_CHANNEL;
                        var14 = var18.bind(var19)(var17, var13);
                        case 191: var2 = var16;
                        var1 = var13;
                        if (var14) {
                            _fun38443_ip = 31;
                            continue _fun38443
                        }
                        case 203: var14 = _closure1_slot24;
                        var14 = delete var14[var15];
                        var2 = true;
                        var1 = var13;
                        _fun38443_ip = 31;
                        continue _fun38443;
                    }
            case 221:
                return var0;
        }
    };
    var _closure1_slot31 = var0;
    var0 = function() {
        _fun38444: for (var _fun38444_ip = 0;;) switch (_fun38444_ip) {
            case 0:
                var2 = _closure1_slot27;
                var0 = null;
                var0 = var0 != var2;
                if (!var0) {
                    _fun38444_ip = 37;
                    continue _fun38444
                }
            case 16:
                var4 = _closure1_slot9;
                var3 = var4.hasSearchState;
                var2 = _closure1_slot27;
                var0 = var3.bind(var4)(var2);
            case 37:
                var2 = _closure1_slot26;
                if (!(var0 !== var2)) {
                    _fun38444_ip = 53;
                    continue _fun38444
                }
            case 45:
                _closure1_slot26 = var0;
                var0 = undefined;
                return var0;
            case 53:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot32 = var0;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var3 = {};
    var7 = true;
    var3.value = var7;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 9;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot12 = var3;
    var3 = 10;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot13 = var3;
    var3 = 11;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot14 = var3;
    var3 = 12;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot15 = var3;
    var3 = 13;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var8 = var3.ChannelSections;
    var _closure1_slot16 = var8;
    var3 = var3.ComponentActions;
    var _closure1_slot17 = var3;
    var3 = 14;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var8 = var3.isStaticChannelRoute;
    var _closure1_slot18 = var8;
    var3 = var3.buildGuildStaticChannelId;
    var _closure1_slot19 = var3;
    var3 = 15;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.Permissions;
    var _closure1_slot20 = var3;
    var3 = false;
    var _closure1_slot21 = var3;
    var _closure1_slot22 = var3;
    var _closure1_slot23 = var7;
    var7 = {};
    var _closure1_slot24 = var7;
    var7 = {};
    var _closure1_slot25 = var7;
    var _closure1_slot26 = var3;
    var3 = null;
    var _closure1_slot27 = var3;
    var3 = 20;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.PersistedStore;
    var3 = function(arg0) { // Environment: var1
        var3 = function() {
            _fun38446: for (var _fun38446_ip = 0;;) switch (_fun38446_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot3;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot6;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot5;
                    var0 = _closure1_slot28;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun38446_ip = 69;
                        continue _fun38446
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun38446_ip = 105;
                    continue _fun38446;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot6;
                    var5 = var5.bind(var2)(var3);
                    var5 = var5.constructor;
                    var4 = arguments;
                    var0 = var6.bind(var7)(var8, var4, var5);
                case 105:
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function arg0() {
            _fun38447: for (var _fun38447_ip = 0;;) switch (_fun38447_ip) {
                case 0:
                    var0 = arg0;
                    var9 = this;
                    var2 = null;
                    if (!(var2 != var0)) {
                        _fun38447_ip = 107;
                        continue _fun38447
                    }
                case 12:
                    var1 = var0.isMembersOpen;
                    var3 = var2 != var1;
                    if (!var3) {
                        _fun38447_ip = 28;
                        continue _fun38447
                    }
                case 25:
                    var3 = var1;
                case 28:
                    _closure1_slot21 = var3;
                    var4 = var0.isSummariesOpen;
                    var3 = var2 != var4;
                    if (!var3) {
                        _fun38447_ip = 51;
                        continue _fun38447
                    }
                case 48:
                    var3 = var4;
                case 51:
                    _closure1_slot22 = var3;
                    var4 = var0.isProfileOpen;
                    var3 = var2 == var4;
                    if (var3) {
                        _fun38447_ip = 71;
                        continue _fun38447
                    }
                case 68:
                    var3 = var4;
                case 71:
                    _closure1_slot23 = var3;
                    var3 = var0.sidebars;
                    if (!(var2 == var3)) {
                        _fun38447_ip = 87;
                        continue _fun38447
                    }
                case 85:
                    var3 = {};
                case 87:
                    _closure1_slot24 = var3;
                    var0 = var0.guildSidebars;
                    if (!(var2 == var0)) {
                        _fun38447_ip = 103;
                        continue _fun38447
                    }
                case 101:
                    var0 = {};
                case 103:
                    _closure1_slot25 = var0;
                case 107:
                    var3 = var9.syncWith;
                    var1 = _closure1_slot9;
                    var2 = new Array(1);
                    var2[0] = var1;
                    var1 = _closure1_slot32;
                    var1 = var3.bind(var9)(var2, var1);
                    var3 = var9.syncWith;
                    var1 = _closure1_slot12;
                    var2 = new Array(1);
                    var2[0] = var1;
                    var1 = _closure1_slot31;
                    var1 = var3.bind(var9)(var2, var1);
                    var8 = var9.waitFor;
                    var17 = _closure1_slot10;
                    var16 = _closure1_slot8;
                    var15 = _closure1_slot11;
                    var14 = _closure1_slot12;
                    var13 = _closure1_slot9;
                    var12 = _closure1_slot13;
                    var11 = _closure1_slot14;
                    var10 = _closure1_slot15;
                    var18 = var9;
                    var0 = var18[var8](var17, var16, var15, var14, var13, var12, var11, var10, var9);
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(8);
        var0[0] = var4;
        var4 = {};
        var6 = 'getState';
        var4.key = var6;
        var6 = function() {
            var0 = {};
            var2 = _closure1_slot21;
            var0.isMembersOpen = var2;
            var2 = _closure1_slot22;
            var0.isSummariesOpen = var2;
            var2 = _closure1_slot23;
            var0.isProfileOpen = var2;
            var2 = _closure1_slot24;
            var0.sidebars = var2;
            var1 = _closure1_slot25;
            var0.guildSidebars = var1;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getSection';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun38449: for (var _fun38449_ip = 0;;) switch (_fun38449_ip) {
                case 0:
                    var1 = _closure1_slot26;
                    if (var1) {
                        _fun38449_ip = 125;
                        continue _fun38449
                    }
                case 10:
                    var3 = _closure1_slot29;
                    var2 = undefined;
                    var1 = arg0;
                    var3 = var3.bind(var2)(var1);
                    var2 = null;
                    if (!(var2 != var3)) {
                        _fun38449_ip = 42;
                        continue _fun38449
                    }
                case 30:
                    var1 = _closure1_slot24;
                    var1 = var1[var3];
                    if (!(var2 == var1)) {
                        _fun38449_ip = 113;
                        continue _fun38449
                    }
                case 42:
                    var1 = arg1;
                    if (!var1) {
                        _fun38449_ip = 55;
                        continue _fun38449
                    }
                case 48:
                    var1 = _closure1_slot23;
                    if (var1) {
                        _fun38449_ip = 101;
                        continue _fun38449
                    }
                case 55:
                    var1 = _closure1_slot22;
                    if (var1) {
                        _fun38449_ip = 89;
                        continue _fun38449
                    }
                case 62:
                    var1 = _closure1_slot21;
                    var2 = _closure1_slot16;
                    if (var1) {
                        _fun38449_ip = 81;
                        continue _fun38449
                    }
                case 73:
                    var1 = var2.NONE;
                    _fun38449_ip = 87;
                    continue _fun38449;
                case 81:
                    var1 = var2.MEMBERS;
                case 87:
                    _fun38449_ip = 99;
                    continue _fun38449;
                case 89:
                    var2 = _closure1_slot16;
                    var1 = var2.SUMMARIES;
                case 99:
                    _fun38449_ip = 111;
                    continue _fun38449;
                case 101:
                    var2 = _closure1_slot16;
                    var1 = var2.PROFILE;
                case 111:
                    _fun38449_ip = 123;
                    continue _fun38449;
                case 113:
                    var2 = _closure1_slot16;
                    var1 = var2.SIDEBAR_CHAT;
                case 123:
                    return var1;
                case 125:
                    var0 = _closure1_slot16;
                    var0 = var0.SEARCH;
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getSidebarState';
        var4.key = var6;
        var6 = function arg0() {
            _fun38450: for (var _fun38450_ip = 0;;) switch (_fun38450_ip) {
                case 0:
                    var3 = _closure1_slot29;
                    var0 = undefined;
                    var2 = arg0;
                    var2 = var3.bind(var0)(var2);
                    var3 = null;
                    var3 = var3 == var2;
                    if (var3) {
                        _fun38450_ip = 34;
                        continue _fun38450
                    }
                case 26:
                    var1 = _closure1_slot24;
                    var0 = var1[var2];
                case 34:
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getGuildSidebarState';
        var4.key = var6;
        var6 = function arg0() {
            _fun38451: for (var _fun38451_ip = 0;;) switch (_fun38451_ip) {
                case 0:
                    var2 = arg0;
                    var0 = null;
                    var1 = var0 == var2;
                    var0 = undefined;
                    if (var1) {
                        _fun38451_ip = 25;
                        continue _fun38451
                    }
                case 14:
                    var1 = _closure1_slot25;
                    var0 = var1[var2];
                case 25:
                    return var0;
            }
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'getCurrentSidebarChannelId';
        var4.key = var6;
        var6 = function arg0() {
            _fun38452: for (var _fun38452_ip = 0;;) switch (_fun38452_ip) {
                case 0:
                    var1 = _closure1_slot29;
                    var6 = undefined;
                    var0 = arg0;
                    var3 = var1.bind(var6)(var0);
                    var0 = null;
                    if (!(var0 != var3)) {
                        _fun38452_ip = 187;
                        continue _fun38452
                    }
                case 26:
                    var1 = _closure1_slot26;
                    if (var1) {
                        _fun38452_ip = 185;
                        continue _fun38452
                    }
                case 36:
                    var1 = _closure1_slot24;
                    var3 = var1[var3];
                    var4 = var0 == var3;
                    var1 = null;
                    if (var4) {
                        _fun38452_ip = 183;
                        continue _fun38452
                    }
                case 56:
                    var5 = var3.type;
                    var8 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var7 = 16;
                    var4 = var4[var7];
                    var4 = var8.bind(var6)(var4);
                    var4 = var4.SidebarType;
                    var4 = var4.VIEW_THREAD;
                    if (!(var5 !== var4)) {
                        _fun38452_ip = 175;
                        continue _fun38452
                    }
                case 97:
                    var5 = var3.type;
                    var8 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var7];
                    var4 = var8.bind(var6)(var4);
                    var4 = var4.SidebarType;
                    var4 = var4.VIEW_CHANNEL;
                    if (!(var5 !== var4)) {
                        _fun38452_ip = 175;
                        continue _fun38452
                    }
                case 135:
                    var5 = var3.type;
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var7];
                    var2 = var4.bind(var6)(var2);
                    var2 = var2.SidebarType;
                    var4 = var2.VIEW_MOD_REPORT;
                    var2 = null;
                    if (!(var5 === var4)) {
                        _fun38452_ip = 180;
                        continue _fun38452
                    }
                case 175:
                    var2 = var3.channelId;
                case 180:
                    var1 = var2;
                case 183:
                    return var1;
                case 185:
                    return var0;
                case 187:
                    return var0;
            }
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'getCurrentSidebarMessageId';
        var4.key = var6;
        var6 = function arg0() {
            _fun38453: for (var _fun38453_ip = 0;;) switch (_fun38453_ip) {
                case 0:
                    var1 = _closure1_slot29;
                    var3 = undefined;
                    var0 = arg0;
                    var4 = var1.bind(var3)(var0);
                    var0 = null;
                    if (!(var0 != var4)) {
                        _fun38453_ip = 208;
                        continue _fun38453
                    }
                case 26:
                    var1 = _closure1_slot26;
                    if (var1) {
                        _fun38453_ip = 206;
                        continue _fun38453
                    }
                case 36:
                    var1 = _closure1_slot24;
                    var4 = var1[var4];
                    var5 = var0 == var4;
                    var1 = null;
                    if (var5) {
                        _fun38453_ip = 204;
                        continue _fun38453
                    }
                case 56:
                    var6 = var4.type;
                    var8 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var7 = 16;
                    var5 = var5[var7];
                    var5 = var8.bind(var3)(var5);
                    var5 = var5.SidebarType;
                    var5 = var5.VIEW_THREAD;
                    if (!(var6 !== var5)) {
                        _fun38453_ip = 175;
                        continue _fun38453
                    }
                case 97:
                    var6 = var4.type;
                    var8 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var5 = var5[var7];
                    var5 = var8.bind(var3)(var5);
                    var5 = var5.SidebarType;
                    var5 = var5.VIEW_CHANNEL;
                    if (!(var6 !== var5)) {
                        _fun38453_ip = 175;
                        continue _fun38453
                    }
                case 135:
                    var6 = var4.type;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var7];
                    var2 = var5.bind(var3)(var2);
                    var2 = var2.SidebarType;
                    var5 = var2.VIEW_MOD_REPORT;
                    var2 = null;
                    if (!(var6 === var5)) {
                        _fun38453_ip = 201;
                        continue _fun38453
                    }
                case 175:
                    var4 = var4.details;
                    var5 = var0 == var4;
                    var3 = undefined;
                    if (var5) {
                        _fun38453_ip = 198;
                        continue _fun38453
                    }
                case 190:
                    var3 = var4.initialMessageId;
                case 198:
                    var2 = var3;
                case 201:
                    var1 = var2;
                case 204:
                    return var1;
                case 206:
                    return var0;
                case 208:
                    return var0;
            }
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'getCurrentSearchContextId';
        var4.key = var6;
        var5 = function() {
            var0 = _closure1_slot27;
            return var0;
        };
        var4.value = var5;
        var0[7] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var8 = var3.bind(var0)(var7);
    var3 = 'ChannelSectionStore';
    var8.displayName = var3;
    var3 = 'ChannelSectionStore2';
    var8.persistKey = var3;
    var3 = 21;
    var3 = var6[var3];
    var12 = var4.bind(var0)(var3);
    var3 = {};
    var4 = function arg0() {
        var0 = arg0;
        var1 = var0.searchContextId;
        _closure1_slot27 = var1;
        var1 = _closure1_slot32;
        var0 = undefined;
        var0 = var1.bind(var0)();
        return var0;
    };
    var3.SIDEBAR_SET_SELECTED_SEARCH_CONTEXT = var4;
    var4 = function() {
        _fun38456: for (var _fun38456_ip = 0;;) switch (_fun38456_ip) {
            case 0:
                var0 = _closure1_slot26;
                if (!var0) {
                    _fun38456_ip = 58;
                    continue _fun38456
                }
            case 10:
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 17;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var3.bind(var0)(var1);
                var3 = var0.ComponentDispatch;
                var1 = var3.dispatch;
                var0 = _closure1_slot17;
                var0 = var0.SEARCH_RESULTS_CLOSE;
                var0 = var1.bind(var3)(var0);
            case 58:
                var0 = _closure1_slot22;
                if (!var0) {
                    _fun38456_ip = 84;
                    continue _fun38456
                }
            case 65:
                var3 = _closure1_slot30;
                var1 = _closure1_slot22;
                var0 = undefined;
                var0 = var3.bind(var0)(var1);
                _closure1_slot22 = var0;
            case 84:
                var3 = _closure1_slot30;
                var1 = _closure1_slot21;
                var0 = undefined;
                var1 = var3.bind(var0)(var1);
                _closure1_slot21 = var1;
                return var0;
        }
    };
    var3.CHANNEL_TOGGLE_MEMBERS_SECTION = var4;
    var4 = function() {
        _fun38457: for (var _fun38457_ip = 0;;) switch (_fun38457_ip) {
            case 0:
                var0 = _closure1_slot23;
                if (var0) {
                    _fun38457_ip = 58;
                    continue _fun38457
                }
            case 10:
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 17;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var3.bind(var0)(var1);
                var3 = var0.ComponentDispatch;
                var1 = var3.dispatch;
                var0 = _closure1_slot17;
                var0 = var0.SEARCH_RESULTS_CLOSE;
                var0 = var1.bind(var3)(var0);
            case 58:
                var3 = _closure1_slot30;
                var1 = _closure1_slot23;
                var0 = undefined;
                var1 = var3.bind(var0)(var1);
                _closure1_slot23 = var1;
                return var0;
        }
    };
    var3.USER_PROFILE_SIDEBAR_TOGGLE_SECTION = var4;
    var4 = function() {
        _fun38458: for (var _fun38458_ip = 0;;) switch (_fun38458_ip) {
            case 0:
                var0 = _closure1_slot21;
                if (!var0) {
                    _fun38458_ip = 29;
                    continue _fun38458
                }
            case 10:
                var3 = _closure1_slot30;
                var1 = _closure1_slot21;
                var0 = undefined;
                var0 = var3.bind(var0)(var1);
                _closure1_slot21 = var0;
            case 29:
                var3 = _closure1_slot30;
                var1 = _closure1_slot22;
                var0 = undefined;
                var1 = var3.bind(var0)(var1);
                _closure1_slot22 = var1;
                return var0;
        }
    };
    var3.CHANNEL_TOGGLE_SUMMARIES_SECTION = var4;
    var4 = function arg0() {
        _fun38459: for (var _fun38459_ip = 0;;) switch (_fun38459_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.sidebarType;
                var6 = var0.baseChannelId;
                var4 = var0.channelId;
                var2 = var0.details;
                var0 = false;
                _closure1_slot26 = var0;
                var3 = _closure1_slot29;
                var8 = undefined;
                var3 = var3.bind(var8)(var6);
                var5 = null;
                if (!(var5 != var3)) {
                    _fun38459_ip = 142;
                    continue _fun38459
                }
            case 52:
                var5 = {};
                var5.type = var7;
                var5.channelId = var4;
                var5.details = var2;
                var4 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 16;
                var2 = var9[var2];
                var2 = var4.bind(var8)(var2);
                var2 = var2.SidebarType;
                var4 = var2.VIEW_MOD_REPORT;
                var2 = var5;
                if (!(var7 === var4)) {
                    _fun38459_ip = 130;
                    continue _fun38459
                }
            case 106:
                var4 = {};
                var11 = var4;
                var10 = var5;
                var5 = copyDataProperties(var11, var10);
                var5 = 'baseChannelId';
                var4[var5] = var6;
                var2 = var4;
            case 130:
                var1 = _closure1_slot24;
                var1[var3] = var2;
                var1 = true;
                return var1;
            case 142:
                return var0;
        }
    };
    var3.SIDEBAR_VIEW_CHANNEL = var4;
    var4 = function arg0() {
        _fun38460: for (var _fun38460_ip = 0;;) switch (_fun38460_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.sidebarType;
                var3 = var0.guildId;
                var5 = var0.baseChannelId;
                var4 = var0.details;
                var0 = false;
                _closure1_slot26 = var0;
                var2 = _closure1_slot29;
                var0 = undefined;
                var5 = var2.bind(var0)(var5);
                var0 = null;
                var0 = var0 != var5;
                if (!var0) {
                    _fun38460_ip = 85;
                    continue _fun38460
                }
            case 55:
                var2 = _closure1_slot25;
                var1 = {};
                var1.type = var6;
                var1.baseChannelId = var5;
                var1.guildId = var3;
                var1.details = var4;
                var2[var3] = var1;
                var0 = true;
            case 85:
                return var0;
        }
    };
    var3.SIDEBAR_VIEW_GUILD = var4;
    var4 = function arg0() {
        _fun38461: for (var _fun38461_ip = 0;;) switch (_fun38461_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.parentChannelId;
                var5 = var0.parentMessageId;
                var4 = var0.location;
                var0 = false;
                _closure1_slot26 = var0;
                var1 = _closure1_slot29;
                var0 = undefined;
                var3 = var1.bind(var0)(var6);
                var1 = null;
                if (!(var1 != var3)) {
                    _fun38461_ip = 106;
                    continue _fun38461
                }
            case 46:
                var2 = _closure1_slot24;
                var1 = {};
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var7 = 16;
                var7 = var9[var7];
                var7 = var8.bind(var0)(var7);
                var7 = var7.SidebarType;
                var7 = var7.CREATE_THREAD;
                var1.type = var7;
                var1.parentChannelId = var6;
                var1.parentMessageId = var5;
                var1.location = var4;
                var2[var3] = var1;
            case 106:
                return var0;
        }
    };
    var3.SIDEBAR_CREATE_THREAD = var4;
    var4 = function arg0() {
        _fun38462: for (var _fun38462_ip = 0;;) switch (_fun38462_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.baseChannelId;
                var2 = _closure1_slot29;
                var0 = undefined;
                var2 = var2.bind(var0)(var3);
                var3 = null;
                if (!(var3 != var2)) {
                    _fun38462_ip = 37;
                    continue _fun38462
                }
            case 29:
                var1 = _closure1_slot24;
                var1 = delete var1[var2];
            case 37:
                return var0;
        }
    };
    var3.SIDEBAR_CLOSE = var4;
    var4 = function arg0() {
        _fun38463: for (var _fun38463_ip = 0;;) switch (_fun38463_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.guildId;
                var0 = _closure1_slot25;
                var3 = var0[var2];
                var0 = null;
                var0 = var0 != var3;
                if (!var0) {
                    _fun38463_ip = 38;
                    continue _fun38463
                }
            case 28:
                var1 = _closure1_slot25;
                var1 = delete var1[var2];
                var0 = true;
            case 38:
                return var0;
        }
    };
    var3.SIDEBAR_CLOSE_GUILD = var4;
    var4 = function arg0() {
        _fun38464: for (var _fun38464_ip = 0;;) switch (_fun38464_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.channel;
                var2 = var0.id;
                var1 = _closure1_slot24;
                var2 = var2 in var1;
                var1 = _closure1_slot24;
                if (var2) {
                    _fun38464_ip = 158;
                    continue _fun38464
                }
            case 34:
                var11 = var1;
                var3 = false;
                var6 = 16;
                var5 = undefined;
                var4 = null;
                var2 = false;
                for (var8 in var11)
                    case 56: {
                        var2 = var3;
                        case 68: var15 = var8;
                        var14 = _closure1_slot24;
                        var16 = var14[var15];
                        var14 = var4 != var16;
                        if (!var14) {
                            _fun38464_ip = 124;
                            continue _fun38464
                        }
                        case 86: var18 = var16.type;
                        var19 = _closure1_slot0;
                        var17 = _closure1_slot2;
                        var17 = var17[var6];
                        var17 = var19.bind(var5)(var17);
                        var17 = var17.SidebarType;
                        var17 = var17.VIEW_CHANNEL;
                        var14 = var18 === var17;
                        case 124: if (!var14) {
                            _fun38464_ip = 141;
                            continue _fun38464
                        }
                        case 127: var17 = var16.channelId;
                        var16 = var0.id;
                        var14 = var17 === var16;
                        case 141: if (!var14) {
                            _fun38464_ip = 56;
                            continue _fun38464
                        }
                        case 144: var14 = _closure1_slot24;
                        var14 = delete var14[var15];
                        var3 = true;
                        _fun38464_ip = 56;
                        continue _fun38464;
                    }
            case 156:
                return var2;
            case 158:
                var0 = var0.id;
                var0 = delete var1[var0];
                var0 = true;
                return var0;
        }
    };
    var3.CHANNEL_DELETE = var4;
    var4 = function() {
        _fun38465: for (var _fun38465_ip = 0;;) switch (_fun38465_ip) {
            case 0:
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 19;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var3.bind(var0)(var1);
                var1 = var1.isMobile;
                if (!var1) {
                    _fun38465_ip = 38;
                    continue _fun38465
                }
            case 34:
                var1 = _closure1_slot21;
            case 38:
                if (!var1) {
                    _fun38465_ip = 51;
                    continue _fun38465
                }
            case 41:
                var1 = false;
                _closure1_slot21 = var1;
                _closure1_slot22 = var1;
            case 51:
                return var0;
        }
    };
    var3.CHANNEL_SELECT = var4;
    var4 = function arg0() {
        _fun38466: for (var _fun38466_ip = 0;;) switch (_fun38466_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.channel;
                var3 = var4.ownerId;
                var1 = _closure1_slot15;
                var0 = var1.getCurrentUser;
                var6 = var0.bind(var1)();
                var1 = null;
                var7 = var1 == var6;
                var0 = undefined;
                var2 = undefined;
                if (var7) {
                    _fun38466_ip = 48;
                    continue _fun38466
                }
            case 43:
                var2 = var6.id;
            case 48:
                if (!(var3 !== var2)) {
                    _fun38466_ip = 232;
                    continue _fun38466
                }
            case 55:
                var3 = _closure1_slot24;
                var2 = var4.parent_id;
                var2 = var3[var2];
                var1 = var1 != var2;
                if (!var1) {
                    _fun38466_ip = 117;
                    continue _fun38466
                }
            case 76:
                var6 = var2.type;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var3 = 16;
                var3 = var8[var3];
                var3 = var7.bind(var0)(var3);
                var3 = var3.SidebarType;
                var3 = var3.CREATE_THREAD;
                var1 = var6 === var3;
            case 117:
                if (!var1) {
                    _fun38466_ip = 166;
                    continue _fun38466
                }
            case 120:
                var3 = var2.parentMessageId;
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var2 = 18;
                var2 = var7[var2];
                var7 = var6.bind(var0)(var2);
                var6 = var7.castChannelIdAsMessageId;
                var2 = var4.id;
                var2 = var6.bind(var7)(var2);
                var1 = var3 === var2;
            case 166:
                if (!var1) {
                    _fun38466_ip = 230;
                    continue _fun38466
                }
            case 169:
                var3 = _closure1_slot24;
                var2 = var4.parent_id;
                var1 = {};
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var5 = 16;
                var5 = var7[var5];
                var5 = var6.bind(var0)(var5);
                var5 = var5.SidebarType;
                var5 = var5.VIEW_THREAD;
                var1.type = var5;
                var4 = var4.id;
                var1.channelId = var4;
                var3[var2] = var1;
            case 230:
                return var0;
            case 232:
                var0 = false;
                return var0;
        }
    };
    var3.THREAD_CREATE = var4;
    var4 = function arg0() {
        _fun38467: for (var _fun38467_ip = 0;;) switch (_fun38467_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.channel;
                var3 = _closure1_slot24;
                var0 = var1.parent_id;
                var3 = var3[var0];
                var0 = null;
                if (!(var0 != var3)) {
                    _fun38467_ip = 104;
                    continue _fun38467
                }
            case 31:
                var5 = var3.type;
                var6 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 16;
                var4 = var4[var0];
                var0 = undefined;
                var4 = var6.bind(var0)(var4);
                var4 = var4.SidebarType;
                var4 = var4.VIEW_THREAD;
                if (!(var5 === var4)) {
                    _fun38467_ip = 104;
                    continue _fun38467
                }
            case 74:
                var4 = var3.channelId;
                var3 = var1.id;
                if (!(var4 === var3)) {
                    _fun38467_ip = 104;
                    continue _fun38467
                }
            case 88:
                var2 = _closure1_slot24;
                var1 = var1.parent_id;
                var1 = delete var2[var1];
                return var0;
            case 104:
                var0 = false;
                return var0;
        }
    };
    var3.THREAD_DELETE = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var8
        }
    });
    var13 = var4;
    var11 = var3;
    var3 = new var13[var8](var12, var11, var10);
    var3 = var3 instanceof Object ? var3 : var4;
    var4 = 22;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'stores/ChannelSectionStore.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var3 = 'message_requests';
    var2.MESSAGE_REQUESTS_BASE_CHANNEL_ID = var3;
    var1 = function arg0() {
        var3 = _closure1_slot0;
        var4 = _closure1_slot2;
        var0 = 16;
        var2 = var4[var0];
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        var2 = var2.SidebarType;
        var5 = var2.VIEW_CHANNEL;
        var2 = new Array(4);
        var2[0] = var5;
        var5 = var4[var0];
        var5 = var3.bind(var1)(var5);
        var5 = var5.SidebarType;
        var5 = var5.VIEW_THREAD;
        var2[1] = var5;
        var5 = var4[var0];
        var5 = var3.bind(var1)(var5);
        var5 = var5.SidebarType;
        var5 = var5.VIEW_MESSAGE_REQUEST;
        var2[2] = var5;
        var0 = var4[var0];
        var0 = var3.bind(var1)(var0);
        var0 = var0.SidebarType;
        var0 = var0.VIEW_MOD_REPORT;
        var2[3] = var0;
        var1 = var2.includes;
        var0 = arg0;
        var0 = var0.type;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.isViewChannelSidebar = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1590, 4190, 1372, 1410, 3050, 1661, 3172, 1613, 660, 1379, 483, 4191, 1229, 21, 3319, 566, 806, 2]);