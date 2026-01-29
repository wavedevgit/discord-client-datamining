// modules/stage_channels/native/channel_permissions/AddModeratorsActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var11.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var9 = 1;
    var3 = var5[var9];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.RowType;
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var10 = 8;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_BASE_LOW;
    var8.backgroundColor = var10;
    var8.flex = var9;
    var3.container = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot10 = var3;
    var3 = 22;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/stage_channels/native/channel_permissions/AddModeratorsActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: AddModeratorsActionSheet, environment: var1
        _fun109403: for (var _fun109403_ip = 0;;) switch (_fun109403_ip) {
            case 0:
                var0 = arg0;
                var15 = var0.channel;
                var _closure2_slot0 = var15;
                var7 = var0.canSkip;
                var4 = undefined;
                var _closure2_slot1 = var4;
                var0 = function() { // Original name: _handleAddModeratorsPressed, environment: var17
                    var3 = undefined;
                    var0 = undefined;
                    var2 = _closure1_slot3;
                    var1 = function*() { // Environment: var1
                        var0 = function*() { // Original name: ?anon_0_, environment: var0
                            _fun109406: for (var _fun109406_ip = 0;;) switch (_fun109406_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun109406_ip = 215;
                                        continue _fun109406
                                    }
                                case 12:
                                    var1 = undefined;
                                    var2 = undefined;
                                    var3 = 0;
                                    var _closure5_slot0 = var3;
                                    var _closure5_slot1 = var3;
                                    var3 = global;
                                    var7 = var3.Object;
                                    var6 = var7.values;
                                    var3 = _closure2_slot1;
                                    var7 = var6.bind(var7)(var3);
                                    var6 = var7.filter;
                                    var3 = function(arg0) { // Environment: var4
                                        var0 = arg0;
                                        var0 = var0.row;
                                        var1 = var0.id;
                                        var0 = null;
                                        var0 = var0 != var1;
                                        return var0;
                                    };
                                    var7 = var6.bind(var7)(var3);
                                    var6 = var7.map;
                                    var3 = function(arg0) { // Environment: var4
                                        _fun109408: for (var _fun109408_ip = 0;;) switch (_fun109408_ip) {
                                            case 0:
                                                var0 = arg0;
                                                var1 = var0.row;
                                                var3 = var1.rowType;
                                                var0 = _closure1_slot8;
                                                var0 = var0.ROLE;
                                                if (!(var3 !== var0)) {
                                                    _fun109408_ip = 119;
                                                    continue _fun109408
                                                }
                                            case 32:
                                                var0 = _closure5_slot0;
                                                var0 = var0 + 1;
                                                _closure5_slot0 = var0;
                                                var7 = _closure1_slot0;
                                                var8 = _closure1_slot2;
                                                var0 = 11;
                                                var0 = var8[var0];
                                                var3 = undefined;
                                                var6 = var7.bind(var3)(var0);
                                                var5 = var6.createModeratorOverwrite;
                                                var4 = var1.id;
                                                var0 = 12;
                                                var0 = var8[var0];
                                                var0 = var7.bind(var3)(var0);
                                                var0 = var0.PermissionOverwriteType;
                                                var3 = var0.MEMBER;
                                                var0 = _closure2_slot0;
                                                var0 = var5.bind(var6)(var4, var3, var0);
                                                _fun109408_ip = 204;
                                                continue _fun109408;
                                            case 119:
                                                var3 = _closure5_slot1;
                                                var3 = var3 + 1;
                                                _closure5_slot1 = var3;
                                                var6 = _closure1_slot0;
                                                var7 = _closure1_slot2;
                                                var2 = 11;
                                                var3 = var7[var2];
                                                var2 = undefined;
                                                var5 = var6.bind(var2)(var3);
                                                var4 = var5.createModeratorOverwrite;
                                                var3 = var1.id;
                                                var1 = 12;
                                                var1 = var7[var1];
                                                var1 = var6.bind(var2)(var1);
                                                var1 = var1.PermissionOverwriteType;
                                                var2 = var1.ROLE;
                                                var1 = _closure2_slot0;
                                                var0 = var4.bind(var5)(var3, var2, var1);
                                            case 204:
                                                return var0;
                                        }
                                    };
                                    var2 = var6.bind(var7)(var3);
                                case 85: // try_start_0
                                    var7 = _closure1_slot0;
                                    var8 = _closure1_slot2;
                                    var6 = 13;
                                    var6 = var8[var6];
                                    var7 = var7.bind(var1)(var6);
                                    var6 = var7.savePermissionUpdates;
                                    var5 = _closure2_slot0;
                                    var5 = var5.id;
                                    var2 = var6.bind(var7)(var5, var2);
                                    SaveGenerator(address = 133);
                                case 131:
                                    return var2;
                                case 133:
                                    ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 5);
                                    if (var5) {
                                        _fun109406_ip = 207;
                                        continue _fun109406
                                    }
                                case 139:
                                    var7 = _closure1_slot0;
                                    var5 = _closure1_slot2;
                                    var6 = 14;
                                    var6 = var5[var6];
                                    var8 = var7.bind(var1)(var6);
                                    var7 = var8.memberOrRoleAddedToast;
                                    var6 = _closure5_slot1;
                                    var4 = _closure5_slot0;
                                    var4 = var7.bind(var8)(var6, var4);
                                    var4 = _closure1_slot1;
                                    var3 = 15;
                                    var3 = var5[var3];
                                    var4 = var4.bind(var1)(var3);
                                    var3 = var4.hideActionSheet;
                                    var3 = var3.bind(var4)();
                                case 205: // try_end0
                                    _fun109406_ip = 212;
                                    continue _fun109406;
                                case 207:
                                    return var2;
                                case 210: // catch_target0
                                    CatchBlockStart(arg_register = 2);
                                case 212:
                                    return var1;
                                case 215:
                                    return var0;
                            }
                        };
                        return var0;
                    };
                    var3 = var2.bind(var3)(var1);
                    _closure2_slot2 = var3;
                    var2 = var3.apply;
                    var0 = arguments;
                    var1 = var0;
                    var0 = this;
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                var _closure2_slot2 = var0;
                var0 = _closure1_slot10;
                var8 = var0.bind(var4)();
                var2 = _closure1_slot5;
                var1 = var2.useState;
                var0 = {};
                var2 = var1.bind(var2)(var0);
                var1 = _closure1_slot4;
                var0 = 2;
                var1 = var1.bind(var4)(var2, var0);
                var2 = 0;
                var11 = var1[var2];
                _closure2_slot1 = var11;
                var0 = 1;
                var10 = var1[var0];
                var1 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 9;
                var0 = var3[var0];
                var6 = var1.bind(var4)(var0);
                var5 = var6.useStateFromStores;
                var0 = _closure1_slot7;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var17
                    _fun109409: for (var _fun109409_ip = 0;;) switch (_fun109409_ip) {
                        case 0:
                            var2 = _closure1_slot7;
                            var1 = var2.getGuild;
                            var4 = _closure2_slot0;
                            var0 = null;
                            var4 = var0 == var4;
                            var0 = undefined;
                            if (var4) {
                                _fun109409_ip = 44;
                                continue _fun109409
                            }
                        case 30:
                            var4 = _closure2_slot0;
                            var3 = var4.getGuildId;
                            var0 = var3.bind(var4)();
                        case 44:
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var13 = var5.bind(var6)(var1, var0);
                var1 = _closure1_slot1;
                var0 = 10;
                var0 = var3[var0];
                var0 = var1.bind(var4)(var0);
                var16 = true;
                var1 = var0.bind(var4)(var15, var16);
                var0 = null;
                var3 = var0 != var1;
                var9 = '';
                if (!var3) {
                    _fun109403_ip = 184;
                    continue _fun109403
                }
            case 181:
                var9 = var1;
            case 184:
                if (!(var0 != var13)) {
                    _fun109403_ip = 667;
                    continue _fun109403
                }
            case 191:
                var1 = global;
                var3 = var1.Object;
                var1 = var3.keys;
                var1 = var1.bind(var3)(var11);
                var1 = var1.length;
                var14 = var2 === var1;
                var3 = _closure1_slot9;
                var18 = _closure1_slot0;
                var19 = _closure1_slot2;
                var1 = 16;
                var1 = var19[var1];
                var1 = var18.bind(var4)(var1);
                var2 = var1.BottomSheet;
                var1 = {
                    'scrollable': true,
                    'header': null,
                    'startExpanded': true
                };
                var5 = 17;
                var5 = var19[var5];
                var5 = var18.bind(var4)(var5);
                var6 = var5.BottomSheetTitleHeader;
                var5 = {};
                var22 = 18;
                var20 = var19[var22];
                var20 = var18.bind(var4)(var20);
                var23 = var20.intl;
                var21 = var23.string;
                var20 = var19[var22];
                var20 = var18.bind(var4)(var20);
                var20 = var20.t;
                var20 = var20.n3bcy8;
                var20 = var21.bind(var23)(var20);
                var5.title = var20;
                var5.subtitle = var9;
                var9 = 19;
                var9 = var19[var9];
                var9 = var18.bind(var4)(var9);
                var9 = var9.Button;
                if (!var7) {
                    _fun109403_ip = 362;
                    continue _fun109403
                }
            case 359:
                if (var14) {
                    _fun109403_ip = 445;
                    continue _fun109403
                }
            case 362:
                var7 = {};
                var18 = 'sm';
                var7.size = var18;
                var7.disabled = var14;
                var20 = _closure1_slot0;
                var14 = _closure1_slot2;
                var18 = var14[var22];
                var18 = var20.bind(var4)(var18);
                var19 = var18.intl;
                var18 = var19.string;
                var14 = var14[var22];
                var14 = var20.bind(var4)(var14);
                var14 = var14.t;
                var14 = var14.OYkgVk;
                var14 = var18.bind(var19)(var14);
                var7.text = var14;
                var14 = function() { // Original name: handleAddModeratorsPressed, environment: var17
                    var0 = undefined;
                    var3 = _closure2_slot2;
                    var2 = var3.apply;
                    var0 = arguments;
                    var1 = var0;
                    var0 = this;
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                var7.onPress = var14;
                _fun109403_ip = 525;
                continue _fun109403;
            case 445:
                var14 = {};
                var18 = 'sm';
                var14.size = var18;
                var21 = _closure1_slot0;
                var18 = _closure1_slot2;
                var19 = var18[var22];
                var19 = var21.bind(var4)(var19);
                var20 = var19.intl;
                var19 = var20.string;
                var18 = var18[var22];
                var18 = var21.bind(var4)(var18);
                var18 = var18.t;
                var18 = var18["5Wxrcd"];
                var18 = var19.bind(var20)(var18);
                var14.text = var18;
                var17 = function() { // Original name: handleSkip, environment: var17
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 15;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.hideActionSheet;
                    var1 = var1.bind(var2)();
                    return var0;
                };
                var14.onPress = var17;
                var7 = var14;
            case 525:
                var7 = var3.bind(var4)(var9, var7);
                var5.trailing = var7;
                var5 = var3.bind(var4)(var6, var5);
                var1.header = var5;
                var7 = _closure1_slot9;
                var6 = _closure1_slot6;
                var5 = {};
                var8 = var8.container;
                var5.style = var8;
                var9 = _closure1_slot1;
                var14 = _closure1_slot2;
                var8 = 20;
                var8 = var14[var8];
                var9 = var9.bind(var4)(var8);
                var8 = {};
                var8.inActionSheet = var16;
                var8.channel = var15;
                var8.guild = var13;
                var13 = _closure1_slot0;
                var12 = 21;
                var12 = var14[var12];
                var12 = var13.bind(var4)(var12);
                var12 = var12.MODERATE_STAGE_CHANNEL_PERMISSIONS;
                var8.permission = var12;
                var8.pendingAdditions = var11;
                var8.setPendingAdditions = var10;
                var8 = var7.bind(var4)(var9, var8);
                var5.children = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 667:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 27, 1410, 5877, 33, 1297, 671, 566, 4748, 4200, 1636, 8094, 3106, 3237, 4887, 5167, 1234, 4037, 8109, 1380, 2]);