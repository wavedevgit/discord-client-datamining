// modules/channel_permissions/native/components/EasyChannelPermissionSettings.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var6 = metroImportAll;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var6;
    var _closure1_slot3 = var5;
    var0 = function arg0() {
        _fun108970: for (var _fun108970_ip = 0;;) switch (_fun108970_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.channel;
                var _closure2_slot0 = var2;
                var22 = var0.privateToggleState;
                var _closure2_slot1 = var22;
                var0 = var0.setPrivateToggleState;
                var _closure2_slot2 = var0;
                var4 = undefined;
                var _closure2_slot6 = var4;
                var _closure2_slot7 = var4;
                var0 = function arg0() {
                    var0 = arg0;
                    var4 = _closure1_slot22;
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var1 = 23;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var1.item = var0;
                    var5 = _closure2_slot0;
                    var6 = var5.id;
                    var1.channelId = var6;
                    var6 = true;
                    var1.showType = var6;
                    var1.showRemove = var6;
                    var5 = var5.guild_id;
                    var1.guildId = var5;
                    var0 = var0.id;
                    var0 = var4.bind(var3)(var2, var1, var0);
                    return var0;
                };
                var _closure2_slot8 = var0;
                var0 = _closure1_slot25;
                var14 = var0.bind(var4)();
                var3 = _closure1_slot0;
                var5 = _closure1_slot3;
                var0 = 16;
                var0 = var5[var0];
                var1 = var3.bind(var4)(var0);
                var0 = var1.useNavigation;
                var0 = var0.bind(var1)();
                var _closure2_slot3 = var0;
                var1 = 17;
                var1 = var5[var1];
                var6 = var3.bind(var4)(var1);
                var5 = var6.useStateFromStoresObject;
                var1 = _closure1_slot13;
                var3 = new Array(2);
                var3[0] = var1;
                var1 = _closure1_slot12;
                var3[1] = var1;
                var1 = function() { // Environment: var9
                    _fun108972: for (var _fun108972_ip = 0;;) switch (_fun108972_ip) {
                        case 0:
                            var2 = _closure1_slot13;
                            var1 = var2.getGuild;
                            var4 = _closure2_slot0;
                            var0 = var4.getGuildId;
                            var0 = var0.bind(var4)();
                            var2 = var1.bind(var2)(var0);
                            var0 = {};
                            var0.guild = var2;
                            var1 = null;
                            var4 = var1 != var2;
                            var1 = undefined;
                            if (!var4) {
                                _fun108972_ip = 71;
                                continue _fun108972
                            }
                        case 51:
                            var4 = _closure1_slot12;
                            var3 = var4.getSortedRoles;
                            var2 = var2.id;
                            var1 = var3.bind(var4)(var2);
                        case 71:
                            var0.sortedGuildRoles = var1;
                            return var0;
                    }
                };
                var1 = var5.bind(var6)(var3, var1);
                var10 = var1.guild;
                var _closure2_slot4 = var10;
                var1 = var1.sortedGuildRoles;
                var _closure2_slot5 = var1;
                var6 = _closure1_slot6;
                var5 = var6.useLayoutEffect;
                var3 = new Array(1);
                var3[0] = var0;
                var0 = function() { // Environment: var9
                    var3 = _closure2_slot3;
                    var2 = var3.setOptions;
                    var1 = {};
                    var0 = undefined;
                    var1.headerRight = var0;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var0 = var5.bind(var6)(var0, var3);
                var6 = _closure1_slot6;
                var5 = var6.useMemo;
                var3 = new Array(3);
                var3[0] = var10;
                var3[1] = var1;
                var3[2] = var2;
                var0 = function() { // Environment: var9
                    _fun108974: for (var _fun108974_ip = 0;;) switch (_fun108974_ip) {
                        case 0:
                            var1 = _closure2_slot4;
                            var2 = null;
                            if (!(var2 != var1)) {
                                _fun108974_ip = 82;
                                continue _fun108974
                            }
                        case 13:
                            var1 = _closure2_slot5;
                            if (!(var2 != var1)) {
                                _fun108974_ip = 82;
                                continue _fun108974
                            }
                        case 21:
                            var3 = _closure1_slot2;
                            var2 = _closure1_slot3;
                            var1 = 18;
                            var2 = var2[var1];
                            var1 = undefined;
                            var5 = var3.bind(var1)(var2);
                            var4 = var5.getExistingRolesRows;
                            var9 = _closure2_slot4;
                            var8 = _closure2_slot5;
                            var1 = _closure2_slot0;
                            var6 = var1.accessPermissions;
                            var10 = var5;
                            var7 = var1;
                            var0 = var10[var4](var9, var8, var7, var6, var5);
                            _fun108974_ip = 86;
                            continue _fun108974;
                        case 82:
                            var0 = new Array(0);
                        case 86:
                            return var0;
                    }
                };
                var17 = var5.bind(var6)(var0, var3);
                var0 = null;
                if (!(var0 != var10)) {
                    _fun108970_ip = 1555;
                    continue _fun108970
                }
            case 248:
                if (!(var0 != var1)) {
                    _fun108970_ip = 1555;
                    continue _fun108970
                }
            case 255:
                var1 = var2.isCategory;
                var23 = var1.bind(var2)();
                var5 = _closure1_slot11;
                var3 = var5.getMemberIds;
                var6 = var0 == var10;
                var1 = undefined;
                if (var6) {
                    _fun108970_ip = 289;
                    continue _fun108970
                }
            case 284:
                var1 = var10.id;
            case 289:
                var12 = var3.bind(var5)(var1);
                var5 = _closure1_slot2;
                var1 = _closure1_slot3;
                var3 = 18;
                var6 = var1[var3];
                var11 = var5.bind(var4)(var6);
                var7 = var11.getExistingMembersRows;
                var28 = var2.accessPermissions;
                var32 = var11;
                var31 = var12;
                var30 = var2;
                var29 = var10;
                var11 = var32[var7](var31, var30, var29, var28, var27);
                var6 = function() { // Environment: var9
                    var3 = _closure1_slot5;
                    var2 = undefined;
                    var1 = function*() { // Environment: var0
                        var0 = function*() { // Original name: ?anon_0_, environment: var0
                            _fun108977: for (var _fun108977_ip = 0;;) switch (_fun108977_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun108977_ip = 257;
                                        continue _fun108977
                                    }
                                case 10:
                                    var5 = _closure1_slot2;
                                    var4 = _closure1_slot3;
                                    var7 = 18;
                                    var1 = var4[var7];
                                    var2 = undefined;
                                    var8 = var5.bind(var2)(var1);
                                    var6 = var8.isPrivateGuildChannel;
                                    var9 = _closure2_slot0;
                                    var6 = var6.bind(var8)(var9);
                                    var8 = var9.accessPermissions;
                                    var4 = var4[var7];
                                    var5 = var5.bind(var2)(var4);
                                    var4 = var5.flipEveryonePermission;
                                    var6 = var4.bind(var5)(var9, var8, var6);
                                    var5 = _closure1_slot15;
                                    var4 = var5.getCurrentUser;
                                    var10 = var4.bind(var5)();
                                    var11 = _closure1_slot14;
                                    var9 = var11.can;
                                    var4 = _closure1_slot18;
                                    var5 = var4.ADMINISTRATOR;
                                    var4 = _closure2_slot4;
                                    var5 = var9.bind(var11)(var5, var4);
                                    var4 = _closure2_slot7;
                                    if (var4) {
                                        _fun108977_ip = 137;
                                        continue _fun108977
                                    }
                                case 131:
                                    var9 = null;
                                    var4 = var9 == var10;
                                case 137:
                                    if (var4) {
                                        _fun108977_ip = 143;
                                        continue _fun108977
                                    }
                                case 140:
                                    var4 = var5;
                                case 143:
                                    if (var4) {
                                        _fun108977_ip = 192;
                                        continue _fun108977
                                    }
                                case 146:
                                    var5 = _closure1_slot2;
                                    var4 = _closure1_slot3;
                                    var4 = var4[var7];
                                    var7 = var5.bind(var2)(var4);
                                    var5 = var7.grantUserChannelAccess;
                                    var4 = _closure2_slot0;
                                    var4 = var5.bind(var7)(var4, var8);
                                    SaveGenerator(address = 183);
                                case 181:
                                    return var4;
                                case 183:
                                    ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 5);
                                    if (!var5) {
                                        _fun108977_ip = 192;
                                        continue _fun108977
                                    }
                                case 189:
                                    return var4;
                                case 192:
                                    var4 = _closure1_slot0;
                                    var5 = _closure1_slot3;
                                    var3 = 19;
                                    var3 = var5[var3];
                                    var5 = var4.bind(var2)(var3);
                                    var4 = var5.savePermissionUpdates;
                                    var1 = _closure2_slot0;
                                    var3 = var1.id;
                                    var1 = new Array(1);
                                    var1[0] = var6;
                                    var1 = var4.bind(var5)(var3, var1);
                                    SaveGenerator(address = 245);
                                case 243:
                                    return var1;
                                case 245:
                                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                    if (var3) {
                                        _fun108977_ip = 254;
                                        continue _fun108977
                                    }
                                case 251:
                                    return var2;
                                case 254:
                                    return var1;
                                case 257:
                                    return var0;
                            }
                        };
                        return var0;
                    };
                    var1 = var3.bind(var2)(var1);
                    var _closure3_slot0 = var1;
                    var0 = function() { // Environment: var0
                        var0 = undefined;
                        var3 = _closure3_slot0;
                        var2 = var3.apply;
                        var0 = arguments;
                        var1 = var0;
                        var0 = this;
                        var0 = var2.bind(var3)(var0, var1);
                        return var0;
                    };
                    return var0;
                };
                var6 = var6.bind(var4)();
                _closure2_slot6 = var6;
                var6 = function() { // Environment: var9
                    var3 = _closure1_slot5;
                    var2 = undefined;
                    var1 = function*() { // Environment: var0
                        var0 = function*() { // Original name: ?anon_0_, environment: var0
                            _fun108981: for (var _fun108981_ip = 0;;) switch (_fun108981_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun108981_ip = 491;
                                        continue _fun108981
                                    }
                                case 10:
                                    var1 = _closure2_slot0;
                                    var2 = var1.guild_id;
                                    var1 = null;
                                    if (!(var1 != var2)) {
                                        _fun108981_ip = 105;
                                        continue _fun108981
                                    }
                                case 28:
                                    var1 = _closure2_slot1;
                                    if (var1) {
                                        _fun108981_ip = 105;
                                        continue _fun108981
                                    }
                                case 35:
                                    var4 = _closure1_slot0;
                                    var3 = _closure1_slot3;
                                    var2 = 20;
                                    var3 = var3[var2];
                                    var2 = undefined;
                                    var6 = var4.bind(var2)(var3);
                                    var4 = var6.checkChattableChannelThresholdMetAfterChannelPermissionDeny;
                                    var3 = _closure2_slot0;
                                    var1 = _closure1_slot18;
                                    var1 = var1.VIEW_CHANNEL;
                                    var1 = var4.bind(var6)(var3, var1);
                                    SaveGenerator(address = 90);
                                case 88:
                                    return var1;
                                case 90:
                                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                    if (var3) {
                                        _fun108981_ip = 102;
                                        continue _fun108981
                                    }
                                case 96:
                                    if (var1) {
                                        _fun108981_ip = 105;
                                        continue _fun108981
                                    }
                                case 99:
                                    return var2;
                                case 102:
                                    return var1;
                                case 105:
                                    var6 = _closure2_slot1;
                                    var8 = _closure1_slot0;
                                    var2 = _closure1_slot3;
                                    var10 = 21;
                                    var3 = var2[var10];
                                    var1 = undefined;
                                    var3 = var8.bind(var1)(var3);
                                    var4 = var3.intl;
                                    var3 = var4.string;
                                    var2 = var2[var10];
                                    var2 = var8.bind(var1)(var2);
                                    var2 = var2.t;
                                    if (var6) {
                                        _fun108981_ip = 176;
                                        continue _fun108981
                                    }
                                case 161:
                                    var6 = var2["47gQYL"];
                                    var9 = var3.bind(var4)(var6);
                                    _fun108981_ip = 189;
                                    continue _fun108981;
                                case 176:
                                    var2 = var2.vw48TT;
                                    var9 = var3.bind(var4)(var2);
                                case 189:
                                    var3 = _closure2_slot1;
                                    var8 = _closure1_slot0;
                                    var2 = _closure1_slot3;
                                    var4 = var2[var10];
                                    var4 = var8.bind(var1)(var4);
                                    var6 = var4.intl;
                                    var4 = var6.format;
                                    var2 = var2[var10];
                                    var2 = var8.bind(var1)(var2);
                                    var2 = var2.t;
                                    if (var3) {
                                        _fun108981_ip = 269;
                                        continue _fun108981
                                    }
                                case 237:
                                    var8 = var2.rKzX1E;
                                    var3 = {};
                                    var11 = _closure2_slot0;
                                    var11 = var11.name;
                                    var3.channelName = var11;
                                    var8 = var4.bind(var6)(var8, var3);
                                    _fun108981_ip = 299;
                                    continue _fun108981;
                                case 269:
                                    var3 = var2.hGzPnx;
                                    var2 = {};
                                    var11 = _closure2_slot0;
                                    var11 = var11.name;
                                    var2.channelName = var11;
                                    var8 = var4.bind(var6)(var3, var2);
                                case 299:
                                    var3 = _closure2_slot2;
                                    var2 = _closure2_slot1;
                                    var2 = !var2;
                                    var2 = var3.bind(var1)(var2);
                                    var3 = _closure1_slot1;
                                    var6 = _closure1_slot3;
                                    var2 = 22;
                                    var2 = var6[var2];
                                    var4 = var3.bind(var1)(var2);
                                    var3 = var4.show;
                                    var2 = {};
                                    var2.title = var9;
                                    var2.body = var8;
                                    var9 = _closure1_slot0;
                                    var7 = var6[var10];
                                    var7 = var9.bind(var1)(var7);
                                    var11 = var7.intl;
                                    var8 = var11.string;
                                    var7 = var6[var10];
                                    var7 = var9.bind(var1)(var7);
                                    var7 = var7.t;
                                    var7 = var7["ETE/oC"];
                                    var7 = var8.bind(var11)(var7);
                                    var2.cancelText = var7;
                                    var7 = var6[var10];
                                    var7 = var9.bind(var1)(var7);
                                    var8 = var7.intl;
                                    var7 = var8.string;
                                    var6 = var6[var10];
                                    var6 = var9.bind(var1)(var6);
                                    var6 = var6.t;
                                    var6 = var6.p89ACt;
                                    var6 = var7.bind(var8)(var6);
                                    var2.confirmText = var6;
                                    var5 = _closure2_slot6;
                                    var2.onConfirm = var5;
                                    var5 = false;
                                    var2.hideActionSheet = var5;
                                    var5 = function() {
                                        var2 = _closure2_slot2;
                                        var4 = _closure1_slot2;
                                        var3 = _closure1_slot3;
                                        var0 = 18;
                                        var3 = var3[var0];
                                        var0 = undefined;
                                        var4 = var4.bind(var0)(var3);
                                        var3 = var4.isPrivateGuildChannel;
                                        var1 = _closure2_slot0;
                                        var1 = var3.bind(var4)(var1);
                                        var1 = var2.bind(var0)(var1);
                                        return var0;
                                    };
                                    var2.onCancel = var5;
                                    var2 = var3.bind(var4)(var2);
                                    return var1;
                                case 491:
                                    return var0;
                            }
                        };
                        return var0;
                    };
                    var1 = var3.bind(var2)(var1);
                    var _closure3_slot0 = var1;
                    var0 = function() { // Environment: var0
                        var0 = undefined;
                        var3 = _closure3_slot0;
                        var2 = var3.apply;
                        var0 = arguments;
                        var1 = var0;
                        var0 = this;
                        var0 = var2.bind(var3)(var0, var1);
                        return var0;
                    };
                    return var0;
                };
                var21 = var6.bind(var4)();
                var3 = var1[var3];
                var6 = var5.bind(var4)(var3);
                var3 = var6.isPrivateGuildChannel;
                var7 = var3.bind(var6)(var2);
                _closure2_slot7 = var7;
                var3 = 24;
                var6 = var1[var3];
                var13 = var5.bind(var4)(var6);
                var12 = var13.canEveryoneRole;
                var6 = _closure1_slot18;
                var6 = var6.VIEW_CHANNEL;
                var12 = var12.bind(var13)(var6, var10);
                var3 = var1[var3];
                var6 = var5.bind(var4)(var3);
                var5 = var6.canEveryoneRole;
                var3 = _closure1_slot18;
                var3 = var3.ADMINISTRATOR;
                var6 = var5.bind(var6)(var3, var10);
                var2 = var2.type;
                var10 = _closure1_slot0;
                var15 = 21;
                var3 = var1[var15];
                var3 = var10.bind(var4)(var3);
                var5 = var3.intl;
                var3 = var5.string;
                var1 = var1[var15];
                var1 = var10.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.hfbjIH;
                var3 = var3.bind(var5)(var1);
                var1 = _closure1_slot17;
                var1 = var1.GUILD_CATEGORY;
                if (!(var2 !== var1)) {
                    _fun108970_ip = 598;
                    continue _fun108970
                }
            case 527:
                var1 = _closure1_slot17;
                var1 = var1.GUILD_VOICE;
                var18 = var3;
                if (!(var2 === var1)) {
                    _fun108970_ip = 650;
                    continue _fun108970
                }
            case 544:
                var5 = _closure1_slot0;
                var1 = _closure1_slot3;
                var2 = var1[var15];
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var1[var15];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.cLjvKg;
                var18 = var2.bind(var3)(var1);
                _fun108970_ip = 650;
                continue _fun108970;
            case 598:
                var5 = _closure1_slot0;
                var1 = _closure1_slot3;
                var2 = var1[var15];
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var1[var15];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.RQUk61;
                var18 = var2.bind(var3)(var1);
            case 650:
                var3 = _closure1_slot23;
                var19 = _closure1_slot0;
                var24 = _closure1_slot3;
                var1 = 25;
                var1 = var24[var1];
                var1 = var19.bind(var4)(var1);
                var2 = var1.Stack;
                var1 = {};
                var13 = {};
                var10 = _closure1_slot1;
                var5 = 15;
                var16 = var24[var5];
                var16 = var10.bind(var4)(var16);
                var16 = var16.spacing;
                var16 = var16.PX_16;
                var13.paddingHorizontal = var16;
                var1.style = var13;
                var5 = var24[var5];
                var5 = var10.bind(var4)(var5);
                var5 = var5.spacing;
                var5 = var5.PX_16;
                var1.spacing = var5;
                var16 = _closure1_slot22;
                var10 = 26;
                var5 = var24[var10];
                var5 = var19.bind(var4)(var5);
                var13 = var5.TableRowGroup;
                var5 = {};
                var5.title = var18;
                var20 = _closure1_slot22;
                var18 = 27;
                var18 = var24[var18];
                var18 = var19.bind(var4)(var18);
                var19 = var18.TableSwitchRow;
                var18 = {};
                var27 = _closure1_slot0;
                var24 = _closure1_slot3;
                var25 = var24[var15];
                var25 = var27.bind(var4)(var25);
                var26 = var25.intl;
                var25 = var26.string;
                var24 = var24[var15];
                var24 = var27.bind(var4)(var24);
                var24 = var24.t;
                if (var23) {
                    _fun108970_ip = 850;
                    continue _fun108970
                }
            case 837:
                var23 = var24.aUI70g;
                var23 = var25.bind(var26)(var23);
                _fun108970_ip = 861;
                continue _fun108970;
            case 850:
                var24 = var24.lEPAZ5;
                var23 = var25.bind(var26)(var24);
            case 861:
                var18.label = var23;
                var18.value = var22;
                var18.onValueChange = var21;
                var18 = var20.bind(var4)(var19, var18);
                var5.children = var18;
                var13 = var16.bind(var4)(var13, var5);
                var5 = new Array(6);
                var5[0] = var13;
                var13 = var6;
                if (!var13) {
                    _fun108970_ip = 1047;
                    continue _fun108970
                }
            case 907:
                var19 = _closure1_slot22;
                var18 = _closure1_slot7;
                var16 = {};
                var20 = var14.adminWarning;
                var16.style = var20;
                var22 = _closure1_slot22;
                var21 = _closure1_slot1;
                var23 = _closure1_slot3;
                var24 = 28;
                var20 = var23[var24];
                var21 = var21.bind(var4)(var20);
                var20 = {};
                var26 = _closure1_slot0;
                var24 = var23[var24];
                var24 = var26.bind(var4)(var24);
                var24 = var24.HelpMessageTypes;
                var24 = var24.WARNING;
                var20.messageType = var24;
                var24 = var23[var15];
                var24 = var26.bind(var4)(var24);
                var25 = var24.intl;
                var24 = var25.string;
                var23 = var23[var15];
                var23 = var26.bind(var4)(var23);
                var23 = var23.t;
                var23 = var23["5f3HIC"];
                var23 = var24.bind(var25)(var23);
                var20.children = var23;
                var20 = var22.bind(var4)(var21, var20);
                var16.children = var20;
                var13 = var19.bind(var4)(var18, var16);
            case 1047:
                var5[1] = var13;
                var6 = !var6;
                if (!var6) {
                    _fun108970_ip = 1060;
                    continue _fun108970
                }
            case 1057:
                var6 = !var12;
            case 1060:
                if (!var6) {
                    _fun108970_ip = 1066;
                    continue _fun108970
                }
            case 1063:
                var6 = !var7;
            case 1066:
                if (!var6) {
                    _fun108970_ip = 1214;
                    continue _fun108970
                }
            case 1072:
                var13 = _closure1_slot22;
                var12 = _closure1_slot7;
                var7 = {};
                var14 = var14.adminWarning;
                var7.style = var14;
                var18 = _closure1_slot22;
                var16 = _closure1_slot1;
                var19 = _closure1_slot3;
                var20 = 28;
                var14 = var19[var20];
                var16 = var16.bind(var4)(var14);
                var14 = {};
                var22 = _closure1_slot0;
                var20 = var19[var20];
                var20 = var22.bind(var4)(var20);
                var20 = var20.HelpMessageTypes;
                var20 = var20.WARNING;
                var14.messageType = var20;
                var20 = var19[var15];
                var20 = var22.bind(var4)(var20);
                var21 = var20.intl;
                var20 = var21.string;
                var19 = var19[var15];
                var19 = var22.bind(var4)(var19);
                var19 = var19.t;
                var19 = var19.ZAk4Q9;
                var19 = var20.bind(var21)(var19);
                var14.children = var19;
                var14 = var18.bind(var4)(var16, var14);
                var7.children = var14;
                var6 = var13.bind(var4)(var12, var7);
            case 1214:
                var5[2] = var6;
                var14 = _closure1_slot22;
                var7 = _closure1_slot0;
                var6 = _closure1_slot3;
                var12 = var6[var10];
                var12 = var7.bind(var4)(var12);
                var13 = var12.TableRowGroup;
                var12 = {};
                var19 = _closure1_slot22;
                var16 = 29;
                var16 = var6[var16];
                var16 = var7.bind(var4)(var16);
                var18 = var16.TableRow;
                var16 = {};
                var20 = true;
                var16.arrow = var20;
                var22 = _closure1_slot22;
                var20 = 30;
                var20 = var6[var20];
                var20 = var7.bind(var4)(var20);
                var21 = var20.CirclePlusIcon;
                var20 = {};
                var20 = var22.bind(var4)(var21, var20);
                var16.icon = var20;
                var20 = var6[var15];
                var20 = var7.bind(var4)(var20);
                var22 = var20.intl;
                var21 = var22.string;
                var20 = var6[var15];
                var20 = var7.bind(var4)(var20);
                var20 = var20.t;
                var20 = var20.dMJ3Y6;
                var20 = var21.bind(var22)(var20);
                var16.label = var20;
                var20 = function() {
                    _fun108984: for (var _fun108984_ip = 0;;) switch (_fun108984_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun108984_ip = 53;
                                continue _fun108984
                            }
                        case 13:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var1 = 31;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            var1 = var2.openAddMembersActionSheet;
                            var0 = _closure2_slot0;
                            var0 = var1.bind(var2)(var0);
                        case 53:
                            var0 = undefined;
                            return var0;
                    }
                };
                var16.onPress = var20;
                var16 = var19.bind(var4)(var18, var16);
                var12.children = var16;
                var12 = var14.bind(var4)(var13, var12);
                var5[3] = var12;
                var14 = _closure1_slot22;
                var12 = var6[var10];
                var12 = var7.bind(var4)(var12);
                var13 = var12.TableRowGroup;
                var12 = {};
                var16 = var6[var15];
                var16 = var7.bind(var4)(var16);
                var18 = var16.intl;
                var16 = var18.string;
                var15 = var6[var15];
                var15 = var7.bind(var4)(var15);
                var15 = var15.t;
                var15 = var15.ES4CC6;
                var15 = var16.bind(var18)(var15);
                var12.title = var15;
                var16 = var17.map;
                var15 = function(arg0) { // Environment: var9
                    var2 = _closure2_slot8;
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var15 = var16.bind(var17)(var15);
                var12.children = var15;
                var12 = var14.bind(var4)(var13, var12);
                var5[4] = var12;
                var8 = _closure1_slot22;
                var6 = var6[var10];
                var6 = var7.bind(var4)(var6);
                var7 = var6.TableRowGroup;
                var6 = {};
                var10 = var11.map;
                var9 = function(arg0) { // Environment: var9
                    var2 = _closure2_slot8;
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var9 = var10.bind(var11)(var9);
                var6.children = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[5] = var6;
                var1.children = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 1555:
                return var0;
        }
    };
    var _closure1_slot26 = var0;
    var0 = function() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot3;
        var0 = 22;
        var1 = var1[var0];
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        var0 = var1.close;
        var0 = var0.bind(var1)();
        var0 = false;
        return var0;
    };
    var _closure1_slot27 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var9 = 0;
    var3 = var5[var9];
    var0 = undefined;
    var3 = var10.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var8 = 1;
    var3 = var5[var8];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var7 = 2;
    var3 = var5[var7];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot7 = var6;
    var3 = var3.ScrollView;
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot12 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot13 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot14 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot15 = var3;
    var3 = 11;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.SettingMode;
    var _closure1_slot16 = var3;
    var3 = 12;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.ChannelTypes;
    var _closure1_slot17 = var6;
    var6 = var3.Permissions;
    var _closure1_slot18 = var6;
    var6 = var3.AnalyticEvents;
    var _closure1_slot19 = var6;
    var6 = var3.ChannelSettingsSections;
    var _closure1_slot20 = var6;
    var3 = var3.SettingsPaneTypes;
    var _closure1_slot21 = var3;
    var3 = 13;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot22 = var6;
    var3 = var3.jsxs;
    var _closure1_slot23 = var3;
    var3 = {};
    var3.BASIC = var9;
    var6 = 'BASIC';
    var3[var9] = var6;
    var3.ADVANCED = var8;
    var6 = 'ADVANCED';
    var3[var8] = var6;
    var3.MODERATORS = var7;
    var6 = 'MODERATORS';
    var3[var7] = var6;
    var _closure1_slot24 = var3;
    var3 = 14;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'flex': 1,
        'paddingTop': 16
    };
    var9 = 15;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_BASE_LOWER;
    var8.backgroundColor = var11;
    var3.container = var8;
    var8 = {
        'marginTop': 16,
        'flex': 1
    };
    var3.content = var8;
    var8 = {};
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_12;
    var8.marginTop = var9;
    var3.adminWarning = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot25 = var3;
    var3 = 38;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/channel_permissions/native/components/EasyChannelPermissionSettings.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun108988: for (var _fun108988_ip = 0;;) switch (_fun108988_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.channelId;
                var _closure2_slot0 = var2;
                var3 = var0.origin;
                var _closure2_slot1 = var3;
                var4 = undefined;
                var _closure2_slot3 = var4;
                var _closure2_slot4 = var4;
                var _closure2_slot5 = var4;
                var2 = _closure1_slot0;
                var5 = _closure1_slot3;
                var0 = 32;
                var0 = var5[var0];
                var7 = var2.bind(var4)(var0);
                var6 = var7.useNavigatorBackPressHandler;
                var0 = _closure1_slot27;
                var0 = var6.bind(var7)(var0);
                var0 = _closure1_slot25;
                var9 = var0.bind(var4)();
                var0 = 17;
                var6 = var5[var0];
                var11 = var2.bind(var4)(var6);
                var8 = var11.useStateFromStores;
                var6 = _closure1_slot10;
                var7 = new Array(1);
                var7[0] = var6;
                var6 = function() { // Environment: var1
                    var2 = _closure1_slot10;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var15 = var8.bind(var11)(var7, var6);
                var _closure2_slot2 = var15;
                var0 = var5[var0];
                var6 = var2.bind(var4)(var0);
                var5 = var6.useStateFromStores;
                var0 = _closure1_slot9;
                var2 = new Array(1);
                var2[0] = var0;
                var0 = function() { // Environment: var1
                    var0 = _closure1_slot9;
                    var0 = var0.advancedMode;
                    return var0;
                };
                var2 = var5.bind(var6)(var2, var0);
                var6 = _closure1_slot6;
                var5 = var6.useState;
                var0 = null;
                if (!(var0 != var15)) {
                    _fun108988_ip = 197;
                    continue _fun108988
                }
            case 184:
                var7 = var15.isGuildStageVoice;
                var7 = var7.bind(var15)();
                if (var7) {
                    _fun108988_ip = 220;
                    continue _fun108988
                }
            case 197:
                var7 = _closure1_slot24;
                if (var2) {
                    _fun108988_ip = 212;
                    continue _fun108988
                }
            case 204:
                var2 = var7.BASIC;
                _fun108988_ip = 218;
                continue _fun108988;
            case 212:
                var2 = var7.ADVANCED;
            case 218:
                _fun108988_ip = 230;
                continue _fun108988;
            case 220:
                var7 = _closure1_slot24;
                var2 = var7.MODERATORS;
            case 230:
                var2 = var5.bind(var6)(var2);
                var12 = _closure1_slot4;
                var8 = 2;
                var2 = var12.bind(var4)(var2, var8);
                var7 = 0;
                var11 = var2[var7];
                _closure2_slot3 = var11;
                var6 = 1;
                var2 = var2[var6];
                _closure2_slot4 = var2;
                var14 = _closure1_slot6;
                var13 = var14.useState;
                var16 = _closure1_slot2;
                var2 = _closure1_slot3;
                var5 = 18;
                var5 = var2[var5];
                var16 = var16.bind(var4)(var5);
                var5 = var16.isPrivateGuildChannel;
                var5 = var5.bind(var16)(var15);
                var5 = var13.bind(var14)(var5);
                var5 = var12.bind(var4)(var5, var8);
                var14 = var5[var7];
                var13 = var5[var6];
                _closure2_slot5 = var13;
                var8 = _closure1_slot6;
                var6 = var8.useEffect;
                var5 = new Array(1);
                var5[0] = var3;
                var3 = function() { // Environment: var1
                    _fun108991: for (var _fun108991_ip = 0;;) switch (_fun108991_ip) {
                        case 0:
                            var8 = _closure2_slot1;
                            var0 = _closure1_slot20;
                            var7 = var0.OVERVIEW;
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot3;
                            var0 = 33;
                            var1 = var1[var0];
                            var0 = undefined;
                            var4 = var2.bind(var0)(var1);
                            var3 = var4.trackWithMetadata;
                            var1 = _closure1_slot19;
                            var2 = var1.SETTINGS_PANE_VIEWED;
                            var1 = {};
                            var6 = 'channel';
                            var1.settings_type = var6;
                            var6 = null;
                            if (!(var8 === var7)) {
                                _fun108991_ip = 85;
                                continue _fun108991
                            }
                        case 75:
                            var7 = _closure1_slot21;
                            var6 = var7.CHANNEL_SETTINGS;
                        case 85:
                            var1.origin_pane = var6;
                            var5 = _closure1_slot20;
                            var5 = var5.PERMISSIONS;
                            var1.destination_pane = var5;
                            var1 = var3.bind(var4)(var2, var1);
                            return var0;
                    }
                };
                var3 = var6.bind(var8)(var3, var5);
                var8 = _closure1_slot6;
                var6 = var8.useCallback;
                var5 = new Array(1);
                var5[0] = var15;
                var3 = function(arg0) { // Environment: var1
                    _fun108992: for (var _fun108992_ip = 0;;) switch (_fun108992_ip) {
                        case 0:
                            var2 = arg0;
                            var1 = _closure1_slot24;
                            var1 = var1.ADVANCED;
                            if (!(var2 !== var1)) {
                                _fun108992_ip = 100;
                                continue _fun108992
                            }
                        case 20:
                            var3 = _closure2_slot5;
                            var7 = _closure1_slot2;
                            var5 = _closure1_slot3;
                            var4 = 18;
                            var6 = var5[var4];
                            var4 = undefined;
                            var7 = var7.bind(var4)(var6);
                            var6 = var7.isPrivateGuildChannel;
                            var1 = _closure2_slot2;
                            var1 = var6.bind(var7)(var1);
                            var1 = var3.bind(var4)(var1);
                            var3 = _closure1_slot0;
                            var1 = 19;
                            var1 = var5[var1];
                            var4 = var3.bind(var4)(var1);
                            var3 = var4.setAdvancedMode;
                            var1 = false;
                            var1 = var3.bind(var4)(var1);
                            _fun108992_ip = 135;
                            continue _fun108992;
                        case 100:
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot3;
                            var0 = 19;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var3.bind(var0)(var1);
                            var1 = var3.setAdvancedMode;
                            var0 = true;
                            var0 = var1.bind(var3)(var0);
                        case 135:
                            var1 = _closure2_slot4;
                            var0 = undefined;
                            var1 = var1.bind(var0)(var2);
                            return var0;
                    }
                };
                var6 = var6.bind(var8)(var3, var5);
                var12 = _closure1_slot0;
                var17 = 21;
                var3 = var2[var17];
                var3 = var12.bind(var4)(var3);
                var8 = var3.intl;
                var5 = var8.string;
                var3 = var2[var17];
                var3 = var12.bind(var4)(var3);
                var3 = var3.t;
                var3 = var3["Mw/UDN"];
                var3 = var5.bind(var8)(var3);
                var8 = new Array(2);
                var8[0] = var3;
                var3 = var2[var17];
                var3 = var12.bind(var4)(var3);
                var5 = var3.intl;
                var3 = var5.string;
                var2 = var2[var17];
                var2 = var12.bind(var4)(var2);
                var2 = var2.t;
                var2 = var2["0a6awf"];
                var2 = var3.bind(var5)(var2);
                var8[1] = var2;
                var2 = var0 == var15;
                var3 = undefined;
                if (var2) {
                    _fun108988_ip = 522;
                    continue _fun108988
                }
            case 512:
                var2 = var15.isGuildStageVoice;
                var3 = var2.bind(var15)();
            case 522:
                var2 = true;
                if (!(var2 === var3)) {
                    _fun108988_ip = 592;
                    continue _fun108988
                }
            case 528:
                var3 = var8.push;
                var16 = _closure1_slot0;
                var2 = _closure1_slot3;
                var5 = var2[var17];
                var5 = var16.bind(var4)(var5);
                var12 = var5.intl;
                var5 = var12.string;
                var2 = var2[var17];
                var2 = var16.bind(var4)(var2);
                var2 = var2.t;
                var2 = var2.YIIUJ3;
                var2 = var5.bind(var12)(var2);
                var2 = var3.bind(var8)(var2);
            case 592:
                var3 = _closure1_slot0;
                var5 = _closure1_slot3;
                var2 = 34;
                var2 = var5[var2];
                var5 = var3.bind(var4)(var2);
                var3 = var5.useSegmentedControlState;
                var2 = {};
                var2.pageWidth = var7;
                var2.defaultIndex = var11;
                var2.onSetActiveIndex = var6;
                var7 = var8.map;
                var6 = function(arg0) { // Environment: var1
                    var1 = arg0;
                    var0 = {};
                    var0.id = var1;
                    var0.label = var1;
                    var1 = null;
                    var0.page = var1;
                    return var0;
                };
                var6 = var7.bind(var8)(var6);
                var2.items = var6;
                var17 = var3.bind(var5)(var2);
                var5 = _closure1_slot6;
                var3 = var5.useEffect;
                var2 = new Array(2);
                var2[0] = var15;
                var2[1] = var11;
                var1 = function() { // Environment: var1
                    _fun108994: for (var _fun108994_ip = 0;;) switch (_fun108994_ip) {
                        case 0:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot3;
                            var0 = 33;
                            var1 = var1[var0];
                            var0 = undefined;
                            var4 = var2.bind(var0)(var1);
                            var3 = var4.trackWithMetadata;
                            var1 = _closure1_slot19;
                            var2 = var1.CHANNEL_PERMISSIONS_PAGE_VIEWED;
                            var1 = {};
                            var8 = _closure2_slot3;
                            var7 = _closure1_slot24;
                            var7 = var7.BASIC;
                            if (!(var8 !== var7)) {
                                _fun108994_ip = 76;
                                continue _fun108994
                            }
                        case 64:
                            var7 = _closure1_slot16;
                            var7 = var7.ADVANCED;
                            _fun108994_ip = 86;
                            continue _fun108994;
                        case 76:
                            var8 = _closure1_slot16;
                            var7 = var8.BASIC;
                        case 86:
                            var1.mode = var7;
                            var7 = _closure1_slot2;
                            var8 = _closure1_slot3;
                            var6 = 18;
                            var6 = var8[var6];
                            var7 = var7.bind(var0)(var6);
                            var6 = var7.isPrivateGuildChannel;
                            var5 = _closure2_slot2;
                            var5 = var6.bind(var7)(var5);
                            var1.channel_is_private = var5;
                            var1 = var3.bind(var4)(var2, var1);
                            return var0;
                    }
                };
                var1 = var3.bind(var5)(var1, var2);
                var1 = var0 != var15;
                var0 = null;
                if (!var1) {
                    _fun108988_ip = 1015;
                    continue _fun108988
                }
            case 707:
                var3 = _closure1_slot23;
                var2 = _closure1_slot7;
                var1 = {};
                var5 = var9.container;
                var1.style = var5;
                var7 = _closure1_slot22;
                var6 = _closure1_slot7;
                var5 = {};
                var8 = {};
                var16 = _closure1_slot1;
                var18 = _closure1_slot3;
                var12 = 15;
                var12 = var18[var12];
                var12 = var16.bind(var4)(var12);
                var12 = var12.spacing;
                var12 = var12.PX_12;
                var8.paddingHorizontal = var12;
                var5.style = var8;
                var16 = _closure1_slot22;
                var12 = _closure1_slot0;
                var8 = 35;
                var8 = var18[var8];
                var8 = var12.bind(var4)(var8);
                var12 = var8.SegmentedControl;
                var8 = {};
                var8.state = var17;
                var8 = var16.bind(var4)(var12, var8);
                var5.children = var8;
                var6 = var7.bind(var4)(var6, var5);
                var5 = new Array(2);
                var5[0] = var6;
                var8 = _closure1_slot22;
                var7 = _closure1_slot8;
                var6 = {};
                var9 = var9.content;
                var6.style = var9;
                var9 = _closure1_slot24;
                var9 = var9.BASIC;
                if (!(var11 !== var9)) {
                    _fun108988_ip = 961;
                    continue _fun108988
                }
            case 866:
                var9 = _closure1_slot24;
                var9 = var9.MODERATORS;
                if (!(var11 !== var9)) {
                    _fun108988_ip = 923;
                    continue _fun108988
                }
            case 880:
                var12 = _closure1_slot22;
                var11 = _closure1_slot1;
                var16 = _closure1_slot3;
                var9 = 37;
                var9 = var16[var9];
                var11 = var11.bind(var4)(var9);
                var9 = {};
                var16 = var15.id;
                var9.channelId = var16;
                var9 = var12.bind(var4)(var11, var9);
                _fun108988_ip = 959;
                continue _fun108988;
            case 923:
                var16 = _closure1_slot22;
                var12 = _closure1_slot1;
                var17 = _closure1_slot3;
                var11 = 36;
                var11 = var17[var11];
                var12 = var12.bind(var4)(var11);
                var11 = {};
                var11.channel = var15;
                var9 = var16.bind(var4)(var12, var11);
            case 959:
                _fun108988_ip = 991;
                continue _fun108988;
            case 961:
                var12 = _closure1_slot22;
                var11 = _closure1_slot26;
                var10 = {};
                var10.channel = var15;
                var10.privateToggleState = var14;
                var10.setPrivateToggleState = var13;
                var9 = var12.bind(var4)(var11, var10);
            case 991:
                var6.children = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[1] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 1015:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 5, 31, 27, 14039, 1372, 1681, 1674, 1410, 3091, 1621, 5919, 660, 33, 1297, 671, 1469, 566, 8136, 8137, 8138, 1234, 4003, 8141, 3096, 4080, 5363, 5416, 6442, 4898, 10913, 11791, 4708, 4302, 7798, 8191, 14040, 14042, 2]);