// components_native/channel_settings/ChannelSettingsPermissionsList.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var6 = metroImportAll;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var _closure1_slot3 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var11.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var12 = 1;
    var3 = var5[var12];
    var6 = var6.bind(var0)(var3);
    var _closure1_slot5 = var6;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.PermissionOverrideType;
    var _closure1_slot11 = var7;
    var3 = var3.ChannelSettingsSections;
    var _closure1_slot12 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot13 = var7;
    var3 = var3.jsxs;
    var _closure1_slot14 = var3;
    var3 = {};
    var7 = new Array(0);
    var3.rows = var7;
    var7 = new Array(0);
    var3.sections = var7;
    var _closure1_slot15 = var3;
    var3 = 9;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {};
    var10 = 10;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOWER;
    var9.backgroundColor = var13;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_12;
    var9.paddingHorizontal = var13;
    var9.flex = var12;
    var3.container = var9;
    var9 = {};
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_8;
    var9.paddingVertical = var10;
    var3.containerSearchBar = var9;
    var9 = {};
    var10 = 70;
    var9.marginLeft = var10;
    var3.userRowDivider = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot16 = var3;
    var3 = var6.memo;
    var1 = function arg0() {
        _fun109084: for (var _fun109084_ip = 0;;) switch (_fun109084_ip) {
            case 0:
                var1 = arg0;
                var21 = var1.channelId;
                var _closure2_slot0 = var21;
                var17 = var1.type;
                var _closure2_slot1 = var17;
                var3 = undefined;
                var _closure2_slot5 = var3;
                var _closure2_slot6 = var3;
                var _closure2_slot7 = var3;
                var _closure2_slot8 = var3;
                var1 = _closure1_slot16;
                var18 = var1.bind(var3)();
                var5 = _closure1_slot0;
                var7 = _closure1_slot3;
                var1 = 13;
                var1 = var7[var1];
                var2 = var5.bind(var3)(var1);
                var1 = var2.useNavigation;
                var1 = var1.bind(var2)();
                var _closure2_slot2 = var1;
                var6 = _closure1_slot5;
                var4 = var6.useState;
                var2 = '';
                var6 = var4.bind(var6)(var2);
                var4 = _closure1_slot4;
                var2 = 2;
                var8 = var4.bind(var3)(var6, var2);
                var6 = 0;
                var2 = var8[var6];
                var4 = 1;
                var11 = var8[var4];
                var8 = _closure1_slot1;
                var4 = 14;
                var4 = var7[var4];
                var4 = var8.bind(var3)(var4);
                var4 = var4.bind(var3)();
                var10 = var4.bottom;
                var4 = 11;
                var8 = var7[var4];
                var14 = var5.bind(var3)(var8);
                var13 = var14.useStateFromStores;
                var8 = _closure1_slot7;
                var12 = new Array(1);
                var12[0] = var8;
                var8 = function() { // Environment: var0
                    var2 = _closure1_slot7;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var12 = var13.bind(var14)(var12, var8);
                var _closure2_slot3 = var12;
                var4 = var7[var4];
                var13 = var5.bind(var3)(var4);
                var8 = var13.useStateFromStoresObject;
                var4 = _closure1_slot9;
                var7 = new Array(1);
                var7[0] = var4;
                var5 = new Array(1);
                var5[0] = var12;
                var4 = function() { // Environment: var0
                    _fun109086: for (var _fun109086_ip = 0;;) switch (_fun109086_ip) {
                        case 0:
                            var0 = _closure2_slot3;
                            var3 = null;
                            var4 = var3 == var0;
                            var0 = undefined;
                            if (var4) {
                                _fun109086_ip = 32;
                                continue _fun109086
                            }
                        case 18:
                            var4 = _closure2_slot3;
                            var1 = var4.getGuildId;
                            var0 = var1.bind(var4)();
                        case 32:
                            var4 = var3 != var0;
                            var1 = undefined;
                            if (!var4) {
                                _fun109086_ip = 44;
                                continue _fun109086
                            }
                        case 41:
                            var1 = var0;
                        case 44:
                            var0 = {};
                            var3 = var3 != var1;
                            var2 = undefined;
                            if (!var3) {
                                _fun109086_ip = 73;
                                continue _fun109086
                            }
                        case 55:
                            var4 = _closure1_slot9;
                            var3 = var4.getSortedRoles;
                            var2 = var3.bind(var4)(var1);
                        case 73:
                            var0.sortedGuildRoles = var2;
                            var0.guildId = var1;
                            return var0;
                    }
                };
                var4 = var8.bind(var13)(var7, var4, var5);
                var19 = var4.guildId;
                var _closure2_slot4 = var19;
                var7 = var4.sortedGuildRoles;
                var5 = {};
                var4 = _closure1_slot11;
                var4 = var4.MEMBER;
                var4 = var17 === var4;
                var5.enabled = var4;
                var4 = null;
                var8 = var4 == var12;
                var4 = undefined;
                if (var8) {
                    _fun109084_ip = 302;
                    continue _fun109084
                }
            case 296:
                var4 = var12.permissionOverwrites;
            case 302:
                var5.permissionOverwrites = var4;
                var5.guildId = var19;
                var5.searchQuery = var2;
                var4 = function arg0() {
                    var1 = arg0;
                    var8 = var1.enabled;
                    var _closure3_slot0 = var8;
                    var5 = var1.permissionOverwrites;
                    var _closure3_slot1 = var5;
                    var7 = var1.guildId;
                    var _closure3_slot2 = var7;
                    var4 = var1.searchQuery;
                    var _closure3_slot3 = var4;
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var2 = 11;
                    var3 = var3[var2];
                    var2 = undefined;
                    var9 = var6.bind(var2)(var3);
                    var6 = var9.useStateFromStores;
                    var2 = _closure1_slot8;
                    var3 = new Array(1);
                    var3[0] = var2;
                    var2 = function() { // Environment: var0
                        var1 = _closure1_slot8;
                        var0 = var1.getMemberVersion;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var6 = var6.bind(var9)(var3, var2);
                    var3 = _closure1_slot5;
                    var2 = var3.useMemo;
                    var1 = new Array(5);
                    var1[0] = var8;
                    var1[1] = var7;
                    var1[2] = var6;
                    var1[3] = var5;
                    var1[4] = var4;
                    var0 = function() { // Environment: var0
                        _fun109089: for (var _fun109089_ip = 0;;) switch (_fun109089_ip) {
                            case 0:
                                var0 = _closure3_slot0;
                                if (!var0) {
                                    _fun109089_ip = 277;
                                    continue _fun109089
                                }
                            case 13:
                                var0 = _closure3_slot2;
                                var10 = null;
                                if (!(var10 != var0)) {
                                    _fun109089_ip = 277;
                                    continue _fun109089
                                }
                            case 26:
                                var1 = new Array(0);
                                var2 = _closure1_slot8;
                                var0 = var2.getMutableAllGuildsAndMembers;
                                var2 = var0.bind(var2)();
                                var0 = _closure3_slot2;
                                var8 = var2[var0];
                                var3 = 12;
                                var2 = undefined;
                                var0 = 0;
                                for (var4 in var8)
                                    case 73: {
                                        case 85: var16 = var4;
                                        var13 = _closure1_slot10;
                                        var12 = var13.getUser;
                                        var13 = var12.bind(var13)(var16);
                                        var12 = var10 != var13;
                                        if (!var12) {
                                            _fun109089_ip = 135;
                                            continue _fun109089
                                        }
                                        case 110: var14 = _closure3_slot1;
                                        var15 = var10 == var14;
                                        var14 = undefined;
                                        if (var15) {
                                            _fun109089_ip = 131;
                                            continue _fun109089
                                        }
                                        case 123: var15 = _closure3_slot1;
                                        var14 = var15[var16];
                                        case 131: var12 = var10 == var14;
                                        case 135: if (!var12) {
                                            _fun109089_ip = 209;
                                            continue _fun109089
                                        }
                                        case 138: var14 = _closure3_slot3;
                                        var14 = var14.length;
                                        var14 = var0 === var14;
                                        if (var14) {
                                            _fun109089_ip = 206;
                                            continue _fun109089
                                        }
                                        case 154: var16 = _closure1_slot1;
                                        var15 = _closure1_slot3;
                                        var15 = var15[var3];
                                        var17 = var16.bind(var2)(var15);
                                        var16 = _closure3_slot3;
                                        var15 = var16.toLowerCase;
                                        var16 = var15.bind(var16)();
                                        var18 = var13.username;
                                        var15 = var18.toLowerCase;
                                        var15 = var15.bind(var18)();
                                        var14 = var17.bind(var2)(var16, var15);
                                        case 206: var12 = var14;
                                        case 209: if (!var12) {
                                            _fun109089_ip = 73;
                                            continue _fun109089
                                        }
                                        case 215: var12 = var1.push;
                                        var12 = var12.bind(var1)(var13);
                                        _fun109089_ip = 73;
                                        continue _fun109089;
                                    }
                            case 230:
                                var2 = var1.sort;
                                var0 = function(arg0, arg1) { // Environment: var0
                                    var0 = arg0;
                                    var1 = var0.username;
                                    var0 = var1.toLowerCase;
                                    var2 = var0.bind(var1)();
                                    var1 = var2.localeCompare;
                                    var0 = arg1;
                                    var3 = var0.username;
                                    var0 = var3.toLowerCase;
                                    var0 = var0.bind(var3)();
                                    var0 = var1.bind(var2)(var0);
                                    return var0;
                                };
                                var0 = var2.bind(var1)(var0);
                                var0 = {};
                                var0.rows = var1;
                                var2 = var1.length;
                                var1 = new Array(1);
                                var1[0] = var2;
                                var0.sections = var1;
                                return var0;
                            case 277:
                                var0 = _closure1_slot15;
                                return var0;
                        }
                    };
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                var4 = var4.bind(var3)(var5);
                var5 = var4.rows;
                _closure2_slot5 = var5;
                var14 = var4.sections;
                var4 = {};
                var8 = _closure1_slot11;
                var13 = var8.ROLE;
                var13 = var17 === var13;
                var4.enabled = var13;
                var4.channel = var12;
                var4.sortedGuildRoles = var7;
                var4.searchQuery = var2;
                var2 = function arg0() {
                    var1 = arg0;
                    var7 = var1.enabled;
                    var _closure3_slot0 = var7;
                    var6 = var1.channel;
                    var _closure3_slot1 = var6;
                    var5 = var1.sortedGuildRoles;
                    var _closure3_slot2 = var5;
                    var4 = var1.searchQuery;
                    var _closure3_slot3 = var4;
                    var3 = _closure1_slot5;
                    var2 = var3.useMemo;
                    var1 = new Array(4);
                    var1[0] = var7;
                    var1[1] = var6;
                    var1[2] = var5;
                    var1[3] = var4;
                    var0 = function() { // Environment: var0
                        _fun109092: for (var _fun109092_ip = 0;;) switch (_fun109092_ip) {
                            case 0:
                                var1 = _closure3_slot0;
                                if (!var1) {
                                    _fun109092_ip = 78;
                                    continue _fun109092
                                }
                            case 10:
                                var1 = _closure3_slot2;
                                var2 = null;
                                if (!(var2 != var1)) {
                                    _fun109092_ip = 78;
                                    continue _fun109092
                                }
                            case 20:
                                var1 = _closure3_slot1;
                                if (!(var2 != var1)) {
                                    _fun109092_ip = 78;
                                    continue _fun109092
                                }
                            case 28:
                                var2 = _closure3_slot2;
                                var1 = var2.filter;
                                var0 = function(arg0) { // Environment: var0
                                    _fun109093: for (var _fun109093_ip = 0;;) switch (_fun109093_ip) {
                                        case 0:
                                            var1 = arg0;
                                            var0 = _closure3_slot3;
                                            var3 = var0.length;
                                            var0 = 0;
                                            var3 = var0 !== var3;
                                            if (!var3) {
                                                _fun109093_ip = 87;
                                                continue _fun109093
                                            }
                                        case 24:
                                            var4 = _closure1_slot1;
                                            var5 = _closure1_slot3;
                                            var0 = 12;
                                            var0 = var5[var0];
                                            var6 = undefined;
                                            var5 = var4.bind(var6)(var0);
                                            var4 = _closure3_slot3;
                                            var0 = var4.toLowerCase;
                                            var4 = var0.bind(var4)();
                                            var7 = var1.name;
                                            var0 = var7.toLowerCase;
                                            var0 = var0.bind(var7)();
                                            var0 = var5.bind(var6)(var4, var0);
                                            var3 = !var0;
                                        case 87:
                                            var0 = !var3;
                                            if (var3) {
                                                _fun109093_ip = 118;
                                                continue _fun109093
                                            }
                                        case 93:
                                            var2 = _closure3_slot1;
                                            var2 = var2.permissionOverwrites;
                                            var1 = var1.id;
                                            var2 = var2[var1];
                                            var1 = null;
                                            var0 = var1 == var2;
                                        case 118:
                                            return var0;
                                    }
                                };
                                var1 = var1.bind(var2)(var0);
                                var0 = {};
                                var0.rows = var1;
                                var2 = var1.length;
                                var1 = new Array(1);
                                var1[0] = var2;
                                var0.sections = var1;
                                return var0;
                            case 78:
                                var0 = _closure1_slot15;
                                return var0;
                        }
                    };
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                var2 = var2.bind(var3)(var4);
                var7 = var2.rows;
                _closure2_slot6 = var7;
                var15 = var2.sections;
                var24 = _closure1_slot0;
                var20 = _closure1_slot3;
                var2 = 15;
                var2 = var20[var2];
                var4 = var24.bind(var3)(var2);
                var2 = var4.useScaledRowHeightData;
                var2 = var2.bind(var4)();
                var13 = var2.rowHeight;
                var12 = var2.rowContentHeight;
                _closure2_slot7 = var12;
                var4 = _closure1_slot5;
                var16 = var4.useCallback;
                var2 = new Array(3);
                var2[0] = var21;
                var2[1] = var1;
                var2[2] = var17;
                var1 = function(arg0, arg1) { // Environment: var0
                    _fun109094: for (var _fun109094_ip = 0;;) switch (_fun109094_ip) {
                        case 0:
                            var6 = arg0;
                            var _closure3_slot0 = var6;
                            var3 = _closure2_slot0;
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun109094_ip = 140;
                                continue _fun109094
                            }
                        case 22:
                            var3 = _closure1_slot1;
                            var8 = _closure1_slot3;
                            var2 = 16;
                            var2 = var8[var2];
                            var7 = undefined;
                            var4 = var3.bind(var7)(var2);
                            var3 = var4.updatePermissionOverwrite;
                            var2 = _closure2_slot0;
                            var1 = {};
                            var1.id = var6;
                            var6 = arg1;
                            var1.type = var6;
                            var6 = _closure1_slot2;
                            var5 = 17;
                            var9 = var8[var5];
                            var9 = var6.bind(var7)(var9);
                            var9 = var9.NONE;
                            var1.allow = var9;
                            var5 = var8[var5];
                            var5 = var6.bind(var7)(var5);
                            var5 = var5.NONE;
                            var1.deny = var5;
                            var2 = var3.bind(var4)(var2, var1);
                            var1 = var2.then;
                            var0 = function() { // Environment: var0
                                var3 = _closure2_slot2;
                                var2 = var3.push;
                                var0 = _closure1_slot12;
                                var1 = var0.PERMISSION_OVERRIDES;
                                var0 = {};
                                var4 = _closure2_slot1;
                                var0.type = var4;
                                var4 = _closure3_slot0;
                                var0.id = var4;
                                var4 = true;
                                var0.fromCreate = var4;
                                var0 = var2.bind(var3)(var1, var0);
                                var0 = undefined;
                                return var0;
                            };
                            var0 = var1.bind(var2)(var0);
                        case 140:
                            var0 = undefined;
                            return var0;
                    }
                };
                var16 = var16.bind(var4)(var1, var2);
                _closure2_slot8 = var16;
                var2 = var4.useCallback;
                var1 = new Array(6);
                var1[0] = var19;
                var1[1] = var5;
                var1[2] = var7;
                var1[3] = var16;
                var1[4] = var17;
                var1[5] = var12;
                var0 = function(arg0, arg1) { // Environment: var0
                    _fun109096: for (var _fun109096_ip = 0;;) switch (_fun109096_ip) {
                        case 0:
                            var3 = arg1;
                            var0 = 0;
                            var5 = var0 === var3;
                            var4 = _closure2_slot1;
                            var0 = _closure1_slot11;
                            var0 = var0.ROLE;
                            if (!(var4 !== var0)) {
                                _fun109096_ip = 46;
                                continue _fun109096
                            }
                        case 35:
                            var0 = _closure2_slot5;
                            var4 = var0.length;
                            _fun109096_ip = 55;
                            continue _fun109096;
                        case 46:
                            var0 = _closure2_slot6;
                            var4 = var0.length;
                        case 55:
                            var0 = 1;
                            var0 = var4 - var0;
                            var7 = var3 === var0;
                            var4 = _closure2_slot4;
                            var0 = null;
                            if (!(var0 != var4)) {
                                _fun109096_ip = 352;
                                continue _fun109096
                            }
                        case 79:
                            var8 = _closure2_slot1;
                            var4 = _closure1_slot11;
                            var4 = var4.ROLE;
                            if (!(var4 !== var8)) {
                                _fun109096_ip = 213;
                                continue _fun109096
                            }
                        case 97:
                            var4 = _closure1_slot11;
                            var4 = var4.MEMBER;
                            if (!(var4 !== var8)) {
                                _fun109096_ip = 113;
                                continue _fun109096
                            }
                        case 111:
                            return var0;
                        case 113:
                            var4 = _closure2_slot5;
                            var4 = var4[var3];
                            var11 = var4.id;
                            var _closure3_slot1 = var11;
                            var10 = _closure1_slot13;
                            var8 = _closure1_slot1;
                            var9 = _closure1_slot3;
                            var4 = 21;
                            var4 = var9[var4];
                            var9 = undefined;
                            var8 = var8.bind(var9)(var4);
                            var4 = {};
                            var12 = true;
                            var4.arrow = var12;
                            var12 = _closure2_slot7;
                            var4.contentHeight = var12;
                            var4.end = var7;
                            var12 = _closure2_slot4;
                            var4.guildId = var12;
                            var4.userId = var11;
                            var11 = function() {
                                var3 = _closure2_slot8;
                                var2 = _closure3_slot1;
                                var4 = _closure1_slot0;
                                var1 = _closure1_slot3;
                                var0 = 20;
                                var1 = var1[var0];
                                var0 = undefined;
                                var1 = var4.bind(var0)(var1);
                                var1 = var1.PermissionOverwriteType;
                                var1 = var1.MEMBER;
                                var1 = var3.bind(var0)(var2, var1);
                                return var0;
                            };
                            var4.onPress = var11;
                            var4.start = var5;
                            var4 = var10.bind(var9)(var8, var4);
                            return var4;
                        case 213:
                            var2 = _closure2_slot6;
                            var9 = var2[var3];
                            var _closure3_slot0 = var9;
                            var4 = _closure1_slot13;
                            var8 = _closure1_slot0;
                            var10 = _closure1_slot3;
                            var1 = 18;
                            var1 = var10[var1];
                            var3 = undefined;
                            var1 = var8.bind(var3)(var1);
                            var2 = var1.TableRow;
                            var1 = {};
                            var11 = true;
                            var1.arrow = var11;
                            var1.end = var7;
                            var7 = 19;
                            var7 = var10[var7];
                            var7 = var8.bind(var3)(var7);
                            var8 = var7.RoleLabel;
                            var7 = {};
                            var10 = var9.name;
                            var7.name = var10;
                            var10 = var9.colorString;
                            var7.color = var10;
                            var9 = var9.colorStrings;
                            var7.colors = var9;
                            var7 = var4.bind(var3)(var8, var7);
                            var1.label = var7;
                            var6 = function() {
                                var3 = _closure2_slot8;
                                var0 = _closure3_slot0;
                                var2 = var0.id;
                                var4 = _closure1_slot0;
                                var1 = _closure1_slot3;
                                var0 = 20;
                                var1 = var1[var0];
                                var0 = undefined;
                                var1 = var4.bind(var0)(var1);
                                var1 = var1.PermissionOverwriteType;
                                var1 = var1.ROLE;
                                var1 = var3.bind(var0)(var2, var1);
                                return var0;
                            };
                            var1.onPress = var6;
                            var1.start = var5;
                            var1 = var4.bind(var3)(var2, var1);
                            return var1;
                        case 352:
                            return var0;
                    }
                };
                var12 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot14;
                var1 = _closure1_slot6;
                var0 = {};
                var4 = var18.container;
                var0.style = var4;
                var16 = _closure1_slot13;
                var4 = {};
                var18 = var18.containerSearchBar;
                var4.style = var18;
                var18 = 22;
                var18 = var20[var18];
                var18 = var24.bind(var3)(var18);
                var19 = var18.SearchField;
                var18 = {};
                var21 = 'md';
                var18.size = var21;
                var21 = 23;
                var22 = var20[var21];
                var22 = var24.bind(var3)(var22);
                var23 = var22.intl;
                var22 = var23.string;
                var20 = var20[var21];
                var20 = var24.bind(var3)(var20);
                var20 = var20.t;
                var20 = var20["5h0QOP"];
                var20 = var22.bind(var23)(var20);
                var18.placeholder = var20;
                var18.onChange = var11;
                var11 = true;
                var18.isRound = var11;
                var18 = var16.bind(var3)(var19, var18);
                var4.children = var18;
                var16 = var16.bind(var3)(var1, var4);
                var4 = new Array(2);
                var4[0] = var16;
                var8 = var8.ROLE;
                if (!(var17 !== var8)) {
                    _fun109084_ip = 708;
                    continue _fun109084
                }
            case 701:
                var5 = var5.length;
                _fun109084_ip = 713;
                continue _fun109084;
            case 708:
                var5 = var7.length;
            case 713:
                if (!(var6 === var5)) {
                    _fun109084_ip = 1038;
                    continue _fun109084
                }
            case 720:
                var7 = _closure1_slot13;
                var6 = _closure1_slot1;
                var18 = _closure1_slot3;
                var5 = 25;
                var5 = var18[var5];
                var6 = var6.bind(var3)(var5);
                var5 = {};
                var16 = _closure1_slot0;
                var8 = 26;
                var8 = var18[var8];
                var8 = var16.bind(var3)(var8);
                var8 = var8.NoResults;
                var5.Illustration = var8;
                var8 = _closure1_slot11;
                var8 = var8.ROLE;
                if (!(var17 !== var8)) {
                    _fun109084_ip = 841;
                    continue _fun109084
                }
            case 787:
                var19 = _closure1_slot0;
                var8 = _closure1_slot3;
                var16 = var8[var21];
                var16 = var19.bind(var3)(var16);
                var18 = var16.intl;
                var16 = var18.string;
                var8 = var8[var21];
                var8 = var19.bind(var3)(var8);
                var8 = var8.t;
                var8 = var8.pYHobK;
                var8 = var16.bind(var18)(var8);
                _fun109084_ip = 895;
                continue _fun109084;
            case 841:
                var20 = _closure1_slot0;
                var16 = _closure1_slot3;
                var18 = var16[var21];
                var18 = var20.bind(var3)(var18);
                var19 = var18.intl;
                var18 = var19.string;
                var16 = var16[var21];
                var16 = var20.bind(var3)(var16);
                var16 = var16.t;
                var16 = var16.Sojqsr;
                var8 = var18.bind(var19)(var16);
            case 895:
                var5.title = var8;
                var8 = _closure1_slot11;
                var8 = var8.ROLE;
                if (!(var17 !== var8)) {
                    _fun109084_ip = 969;
                    continue _fun109084
                }
            case 913:
                var19 = _closure1_slot0;
                var8 = _closure1_slot3;
                var16 = var8[var21];
                var16 = var19.bind(var3)(var16);
                var18 = var16.intl;
                var16 = var18.string;
                var8 = var8[var21];
                var8 = var19.bind(var3)(var8);
                var8 = var8.t;
                var8 = var8.tuL9TW;
                var8 = var16.bind(var18)(var8);
                _fun109084_ip = 1023;
                continue _fun109084;
            case 969:
                var20 = _closure1_slot0;
                var16 = _closure1_slot3;
                var18 = var16[var21];
                var18 = var20.bind(var3)(var18);
                var19 = var18.intl;
                var18 = var19.string;
                var16 = var16[var21];
                var16 = var20.bind(var3)(var16);
                var16 = var16.t;
                var16 = var16["7gBhmO"];
                var8 = var18.bind(var19)(var16);
            case 1023:
                var5.body = var8;
                var5 = var7.bind(var3)(var6, var5);
                _fun109084_ip = 1190;
                continue _fun109084;
            case 1038:
                var8 = _closure1_slot13;
                var7 = _closure1_slot1;
                var16 = _closure1_slot3;
                var6 = 24;
                var6 = var16[var6];
                var7 = var7.bind(var3)(var6);
                var6 = {};
                var16 = _closure1_slot11;
                var16 = var16.ROLE;
                if (!(var17 === var16)) {
                    _fun109084_ip = 1081;
                    continue _fun109084
                }
            case 1078:
                var14 = var15;
            case 1081:
                var6.sections = var14;
                var6.itemSize = var13;
                var13 = 'windowSize';
                var6.estimatedListSize = var13;
                var6.renderItem = var12;
                var6.wrapChildren = var11;
                var11 = _closure1_slot1;
                var12 = _closure1_slot3;
                var9 = 10;
                var13 = var12[var9];
                var13 = var11.bind(var3)(var13);
                var13 = var13.spacing;
                var13 = var13.PX_8;
                var6.insetStart = var13;
                var9 = var12[var9];
                var9 = var11.bind(var3)(var9);
                var9 = var9.spacing;
                var9 = var9.PX_8;
                var9 = var9 + var10;
                var6.insetEnd = var9;
                var9 = 'always';
                var6.keyboardShouldPersistTaps = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 1190:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 27;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'components_native/channel_settings/ChannelSettingsPermissionsList.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1372, 1681, 1674, 1621, 660, 33, 1297, 671, 566, 5602, 1469, 1568, 7559, 3945, 3096, 4898, 9284, 1645, 9145, 7009, 1234, 7562, 7358, 7359, 2]);