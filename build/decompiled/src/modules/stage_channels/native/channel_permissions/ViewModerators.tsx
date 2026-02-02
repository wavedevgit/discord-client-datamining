// modules/stage_channels/native/channel_permissions/ViewModerators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var8 = metroImportAll;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var8;
    var _closure1_slot3 = var6;
    var1 = function arg0() {
        _fun109009: for (var _fun109009_ip = 0;;) switch (_fun109009_ip) {
            case 0:
                var7 = arg0;
                var6 = arguments[1];
                var0 = undefined;
                if (!(var6 === var0)) {
                    _fun109009_ip = 14;
                    continue _fun109009
                }
            case 12:
                var6 = false;
            case 14:
                var4 = _closure1_slot1;
                var1 = _closure1_slot3;
                var3 = 8;
                var3 = var1[var3];
                var9 = var4.bind(var0)(var3);
                var8 = var9.track;
                var3 = _closure1_slot8;
                var5 = var3.OPEN_POPOUT;
                var3 = {};
                var10 = 'Grant Channel Access';
                var3.type = var10;
                var3 = var8.bind(var9)(var5, var3);
                var3 = 9;
                var3 = var1[var3];
                var5 = var4.bind(var0)(var3);
                var4 = var5.openLazy;
                var3 = _closure1_slot0;
                var2 = 11;
                var2 = var1[var2];
                var3 = var3.bind(var0)(var2);
                var2 = 10;
                var2 = var1[var2];
                var1 = var1.paths;
                var3 = var3.bind(var0)(var2, var1);
                var8 = var7.id;
                var1 = global;
                var1 = var1.HermesInternal;
                var2 = var1.concat;
                var1 = 'channel-add-moderators-';
                var2 = var2.bind(var1)(var8);
                var1 = {};
                var1.channel = var7;
                var1.canSkip = var6;
                var1 = var4.bind(var5)(var3, var2, var1);
                return var0;
        }
    };
    var _closure1_slot12 = var1;
    var0 = global;
    var10 = var0.Object;
    var9 = var10.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var7.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var8.bind(var0)(var4);
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.RowType;
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.jsx;
    var _closure1_slot10 = var7;
    var4 = var4.jsxs;
    var _closure1_slot11 = var4;
    var4 = 29;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/stage_channels/native/channel_permissions/ViewModerators.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function arg0() {
        _fun109010: for (var _fun109010_ip = 0;;) switch (_fun109010_ip) {
            case 0:
                var0 = arg0;
                var11 = var0.channel;
                var _closure2_slot0 = var11;
                var5 = undefined;
                var _closure2_slot2 = var5;
                var _closure2_slot3 = var5;
                var0 = function arg0() {
                    var0 = arg0;
                    var4 = _closure1_slot10;
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var1 = 24;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var6 = _closure2_slot0;
                    var7 = var6.guild_id;
                    var1.guildId = var7;
                    var1.item = var0;
                    var6 = var6.id;
                    var1.channelId = var6;
                    var6 = true;
                    var1.showType = var6;
                    var6 = _closure2_slot2;
                    var1.showRemove = var6;
                    var5 = _closure2_slot3;
                    var1.onRemove = var5;
                    var0 = var0.id;
                    var0 = var4.bind(var3)(var2, var1, var0);
                    return var0;
                };
                var _closure2_slot4 = var0;
                var1 = _closure1_slot0;
                var2 = _closure1_slot3;
                var0 = 12;
                var0 = var2[var0];
                var3 = var1.bind(var5)(var0);
                var0 = var3.useNavigation;
                var4 = var0.bind(var3)();
                var3 = var4.setOptions;
                var0 = {};
                var7 = function() {
                    var0 = null;
                    return var0;
                };
                var0.headerRight = var7;
                var0 = var3.bind(var4)(var0);
                var0 = var11.getGuildId;
                var0 = var0.bind(var11)();
                var _closure2_slot1 = var0;
                var3 = 13;
                var3 = var2[var3];
                var8 = var1.bind(var5)(var3);
                var7 = var8.useStateFromStoresObject;
                var3 = _closure1_slot7;
                var4 = new Array(2);
                var4[0] = var3;
                var3 = _closure1_slot6;
                var4[1] = var3;
                var3 = new Array(1);
                var3[0] = var0;
                var0 = function() { // Environment: var10
                    _fun109013: for (var _fun109013_ip = 0;;) switch (_fun109013_ip) {
                        case 0:
                            var0 = {};
                            var5 = _closure1_slot7;
                            var1 = var5.getGuild;
                            var4 = _closure2_slot1;
                            var1 = var1.bind(var5)(var4);
                            var0.guild = var1;
                            var1 = null;
                            var4 = var1 != var4;
                            var1 = undefined;
                            if (!var4) {
                                _fun109013_ip = 60;
                                continue _fun109013
                            }
                        case 41:
                            var4 = _closure1_slot6;
                            var3 = var4.getSortedRoles;
                            var2 = _closure2_slot1;
                            var1 = var3.bind(var4)(var2);
                        case 60:
                            var0.sortedGuildRoles = var1;
                            return var0;
                    }
                };
                var0 = var7.bind(var8)(var4, var0, var3);
                var9 = var0.guild;
                var8 = var0.sortedGuildRoles;
                var0 = 14;
                var0 = var2[var0];
                var2 = var1.bind(var5)(var0);
                var1 = var2.useCanUpdateStageChannelModerators;
                var0 = var11.id;
                var17 = var1.bind(var2)(var0);
                _closure2_slot2 = var17;
                var0 = null;
                if (!(var0 != var9)) {
                    _fun109010_ip = 864;
                    continue _fun109010
                }
            case 219:
                if (!(var0 != var8)) {
                    _fun109010_ip = 864;
                    continue _fun109010
                }
            case 226:
                var1 = var11.isGuildStageVoice;
                var1 = var1.bind(var11)();
                var4 = _closure1_slot5;
                var3 = var4.getMemberIds;
                var7 = var0 == var9;
                var2 = undefined;
                if (var7) {
                    _fun109010_ip = 260;
                    continue _fun109010
                }
            case 255:
                var2 = var9.id;
            case 260:
                var16 = var3.bind(var4)(var2);
                var4 = _closure1_slot2;
                var2 = _closure1_slot3;
                var3 = 15;
                var7 = var2[var3];
                var15 = var4.bind(var5)(var7);
                var14 = var15.getExistingMembersRows;
                var13 = _closure1_slot0;
                var7 = 16;
                var12 = var2[var7];
                var12 = var13.bind(var5)(var12);
                var22 = var12.MODERATE_STAGE_CHANNEL_PERMISSIONS;
                var26 = var15;
                var25 = var16;
                var24 = var11;
                var23 = var9;
                var12 = var26[var14](var25, var24, var23, var22, var21);
                var3 = var2[var3];
                var4 = var4.bind(var5)(var3);
                var3 = var4.getExistingRolesRowWithPermissionDisabled;
                var2 = var2[var7];
                var2 = var13.bind(var5)(var2);
                var22 = var2.MODERATE_STAGE_CHANNEL_PERMISSIONS;
                var26 = var4;
                var25 = var9;
                var24 = var8;
                var23 = var11;
                var18 = var26[var3](var25, var24, var23, var22, var21);
                var2 = function arg0() {
                    _fun109014: for (var _fun109014_ip = 0;;) switch (_fun109014_ip) {
                        case 0:
                            var13 = arg0;
                            var _closure3_slot0 = var13;
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot3;
                            var0 = 14;
                            var1 = var1[var0];
                            var0 = undefined;
                            var6 = var2.bind(var0)(var1);
                            var5 = var6.removeModeratorOverwrite;
                            var3 = var13.id;
                            var2 = var13.rowType;
                            var1 = _closure1_slot9;
                            var1 = var1.ROLE;
                            if (!(var2 !== var1)) {
                                _fun109014_ip = 99;
                                continue _fun109014
                            }
                        case 65:
                            var2 = _closure1_slot0;
                            var8 = _closure1_slot3;
                            var1 = 17;
                            var1 = var8[var1];
                            var1 = var2.bind(var0)(var1);
                            var1 = var1.PermissionOverwriteType;
                            var2 = var1.MEMBER;
                            _fun109014_ip = 131;
                            continue _fun109014;
                        case 99:
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot3;
                            var1 = 17;
                            var1 = var9[var1];
                            var1 = var8.bind(var0)(var1);
                            var1 = var1.PermissionOverwriteType;
                            var2 = var1.ROLE;
                        case 131:
                            var1 = _closure2_slot0;
                            var1 = var5.bind(var6)(var3, var2, var1);
                            var _closure3_slot2 = var1;
                            var2 = _closure1_slot1;
                            var6 = _closure1_slot3;
                            var1 = 18;
                            var1 = var6[var1];
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.show;
                            var1 = {};
                            var5 = _closure1_slot0;
                            var8 = 19;
                            var9 = var6[var8];
                            var9 = var5.bind(var0)(var9);
                            var11 = var9.intl;
                            var10 = var11.string;
                            var9 = var6[var8];
                            var9 = var5.bind(var0)(var9);
                            var9 = var9.t;
                            var9 = var9.GuPYQB;
                            var9 = var10.bind(var11)(var9);
                            var1.title = var9;
                            var9 = var6[var8];
                            var9 = var5.bind(var0)(var9);
                            var12 = var9.intl;
                            var11 = var12.format;
                            var9 = var6[var8];
                            var9 = var5.bind(var0)(var9);
                            var9 = var9.t;
                            var10 = var9.xERCnZ;
                            var9 = {};
                            var13 = var13.name;
                            var9.name = var13;
                            var9 = var11.bind(var12)(var10, var9);
                            var1.body = var9;
                            var9 = var6[var8];
                            var9 = var5.bind(var0)(var9);
                            var11 = var9.intl;
                            var10 = var11.string;
                            var9 = var6[var8];
                            var9 = var5.bind(var0)(var9);
                            var9 = var9.t;
                            var9 = var9["ETE/oC"];
                            var9 = var10.bind(var11)(var9);
                            var1.cancelText = var9;
                            var9 = var6[var8];
                            var9 = var5.bind(var0)(var9);
                            var10 = var9.intl;
                            var9 = var10.string;
                            var8 = var6[var8];
                            var8 = var5.bind(var0)(var8);
                            var8 = var8.t;
                            var8 = var8.fKxYb0;
                            var8 = var9.bind(var10)(var8);
                            var1.confirmText = var8;
                            var8 = _closure1_slot4;
                            var7 = function*() { // Environment: var4
                                var0 = function*() { // Original name: ?anon_0_, environment: var0
                                    _fun109016: for (var _fun109016_ip = 0;;) switch (_fun109016_ip) {
                                        case 0:
                                            StartGenerator();
                                            ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                            if (var1) {
                                                _fun109016_ip = 260;
                                                continue _fun109016
                                            }
                                        case 10:
                                            var4 = _closure1_slot0;
                                            var2 = _closure1_slot3;
                                            var1 = 14;
                                            var1 = var2[var1];
                                            var2 = undefined;
                                            var6 = var4.bind(var2)(var1);
                                            var5 = var6.isEmptyOverwrite;
                                            var1 = _closure3_slot2;
                                            var1 = var5.bind(var6)(var1);
                                            if (var1) {
                                                _fun109016_ip = 125;
                                                continue _fun109016
                                            }
                                        case 56:
                                            var5 = _closure1_slot0;
                                            var6 = _closure1_slot3;
                                            var1 = 21;
                                            var1 = var6[var1];
                                            var7 = var5.bind(var2)(var1);
                                            var6 = var7.savePermissionUpdates;
                                            var1 = _closure2_slot0;
                                            var5 = var1.id;
                                            var8 = _closure3_slot2;
                                            var1 = new Array(1);
                                            var1[0] = var8;
                                            var1 = var6.bind(var7)(var5, var1);
                                            SaveGenerator(address = 116);
                                        case 114:
                                            return var1;
                                        case 116:
                                            ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 5);
                                            if (!var5) {
                                                _fun109016_ip = 188;
                                                continue _fun109016
                                            }
                                        case 122:
                                            return var1;
                                        case 125:
                                            var5 = _closure1_slot1;
                                            var6 = _closure1_slot3;
                                            var1 = 20;
                                            var1 = var6[var1];
                                            var7 = var5.bind(var2)(var1);
                                            var6 = var7.clearPermissionOverwrite;
                                            var1 = _closure2_slot0;
                                            var5 = var1.id;
                                            var1 = _closure3_slot2;
                                            var1 = var1.id;
                                            var1 = var6.bind(var7)(var5, var1);
                                            SaveGenerator(address = 182);
                                        case 180:
                                            return var1;
                                        case 182:
                                            ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 5);
                                            if (var5) {
                                                _fun109016_ip = 257;
                                                continue _fun109016
                                            }
                                        case 188:
                                            var7 = _closure1_slot0;
                                            var5 = _closure1_slot3;
                                            var6 = 22;
                                            var6 = var5[var6];
                                            var7 = var7.bind(var2)(var6);
                                            var6 = var7.memberOrRoleRemovedToast;
                                            var4 = _closure3_slot0;
                                            var4 = var4.name;
                                            var4 = var6.bind(var7)(var4);
                                            var4 = _closure1_slot1;
                                            var3 = 9;
                                            var3 = var5[var3];
                                            var4 = var4.bind(var2)(var3);
                                            var3 = var4.hideActionSheet;
                                            var3 = var3.bind(var4)();
                                            return var2;
                                        case 257:
                                            return var1;
                                        case 260:
                                            return var0;
                                    }
                                };
                                return var0;
                            };
                            var7 = var8.bind(var0)(var7);
                            var _closure3_slot1 = var7;
                            var4 = function() { // Environment: var4
                                var0 = undefined;
                                var3 = _closure3_slot1;
                                var2 = var3.apply;
                                var0 = arguments;
                                var1 = var0;
                                var0 = this;
                                var0 = var2.bind(var3)(var0, var1);
                                return var0;
                            };
                            var1.onConfirm = var4;
                            var4 = false;
                            var1.hideActionSheet = var4;
                            var4 = 23;
                            var4 = var6[var4];
                            var4 = var5.bind(var0)(var4);
                            var4 = var4.ButtonColors;
                            var4 = var4.RED;
                            var1.confirmColor = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                _closure2_slot3 = var2;
                if (!var1) {
                    _fun109010_ip = 862;
                    continue _fun109010
                }
            case 392:
                var4 = _closure1_slot11;
                var15 = _closure1_slot0;
                var16 = _closure1_slot3;
                var2 = 25;
                var2 = var16[var2];
                var2 = var15.bind(var5)(var2);
                var3 = var2.Stack;
                var2 = {};
                var8 = {};
                var8.paddingHorizontal = var7;
                var2.style = var8;
                var2.spacing = var7;
                var9 = _closure1_slot10;
                var7 = 26;
                var6 = var16[var7];
                var6 = var15.bind(var5)(var6);
                var8 = var6.TableRowGroup;
                var6 = {};
                var11 = 19;
                var13 = var16[var11];
                var13 = var15.bind(var5)(var13);
                var19 = var13.intl;
                var14 = var19.string;
                var13 = var16[var11];
                var13 = var15.bind(var5)(var13);
                var13 = var13.t;
                var13 = var13.f7VbhF;
                var13 = var14.bind(var19)(var13);
                var6.title = var13;
                var13 = 27;
                var13 = var16[var13];
                var13 = var15.bind(var5)(var13);
                var14 = var13.TableRow;
                var13 = {};
                var19 = 28;
                var19 = var16[var19];
                var19 = var15.bind(var5)(var19);
                var20 = var19.CirclePlusIcon;
                var19 = {};
                var19 = var9.bind(var5)(var20, var19);
                var13.icon = var19;
                var19 = var16[var11];
                var19 = var15.bind(var5)(var19);
                var21 = var19.intl;
                var20 = var21.string;
                var19 = var16[var11];
                var19 = var15.bind(var5)(var19);
                var19 = var19.t;
                var19 = var19.n3bcy8;
                var19 = var20.bind(var21)(var19);
                var13.label = var19;
                var19 = function() {
                    _fun109018: for (var _fun109018_ip = 0;;) switch (_fun109018_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun109018_ip = 31;
                                continue _fun109018
                            }
                        case 13:
                            var2 = _closure1_slot12;
                            var1 = _closure2_slot0;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                        case 31:
                            var0 = undefined;
                            return var0;
                    }
                };
                var13.onPress = var19;
                var17 = !var17;
                var13.disabled = var17;
                var17 = true;
                var13.arrow = var17;
                var13 = var9.bind(var5)(var14, var13);
                var6.children = var13;
                var8 = var9.bind(var5)(var8, var6);
                var6 = new Array(3);
                var6[0] = var8;
                var8 = var16[var7];
                var8 = var15.bind(var5)(var8);
                var13 = var8.TableRowGroup;
                var8 = {};
                var14 = var16[var11];
                var14 = var15.bind(var5)(var14);
                var19 = var14.intl;
                var17 = var19.string;
                var14 = var16[var11];
                var14 = var15.bind(var5)(var14);
                var14 = var14.t;
                var14 = var14.ghdVJL;
                var14 = var17.bind(var19)(var14);
                var8.title = var14;
                var17 = var18.map;
                var14 = function(arg0) { // Environment: var10
                    var2 = _closure2_slot4;
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var14 = var17.bind(var18)(var14);
                var8.children = var14;
                var8 = var9.bind(var5)(var13, var8);
                var6[1] = var8;
                var7 = var16[var7];
                var7 = var15.bind(var5)(var7);
                var8 = var7.TableRowGroup;
                var7 = {};
                var13 = var16[var11];
                var13 = var15.bind(var5)(var13);
                var14 = var13.intl;
                var13 = var14.string;
                var11 = var16[var11];
                var11 = var15.bind(var5)(var11);
                var11 = var11.t;
                var11 = var11.ghdVJL;
                var11 = var13.bind(var14)(var11);
                var7.title = var11;
                var11 = var12.map;
                var10 = function(arg0) { // Environment: var10
                    var2 = _closure2_slot4;
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var10 = var11.bind(var12)(var10);
                var7.children = var10;
                var7 = var9.bind(var5)(var8, var7);
                var6[2] = var7;
                var2.children = var6;
                var1 = var4.bind(var5)(var3, var2);
            case 862:
                return var1;
            case 864:
                return var0;
        }
    };
    var2.default = var3;
    var2.openAddModeratorsActionSheet = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 31, 1672, 1665, 1410, 660, 5883, 33, 795, 3239, 13999, 1307, 1469, 566, 4208, 8097, 1380, 1636, 3897, 1234, 3906, 8098, 3108, 4838, 8102, 4041, 5327, 4863, 10815, 2]);