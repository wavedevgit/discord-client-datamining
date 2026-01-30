// components_native/channel_settings/ChannelSettingsPermissionsOverview.tsx
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
    var0 = function(arg0) { // Original name: ChannelPermissionSyncModule, environment: var1
        _fun109675: for (var _fun109675_ip = 0;;) switch (_fun109675_ip) {
            case 0:
                var1 = arg0;
                var6 = var1.channel;
                var _closure2_slot0 = var6;
                var9 = var1.category;
                var _closure2_slot1 = var9;
                var7 = var1.locked;
                var1 = _closure1_slot18;
                var3 = undefined;
                var4 = var1.bind(var3)();
                var5 = _closure1_slot6;
                var2 = var5.useCallback;
                var1 = new Array(2);
                var1[0] = var6;
                var1[1] = var9;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot1;
                    var10 = _closure1_slot3;
                    var0 = 14;
                    var1 = var10[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.show;
                    var1 = {};
                    var9 = _closure1_slot0;
                    var6 = 15;
                    var7 = var10[var6];
                    var7 = var9.bind(var0)(var7);
                    var11 = var7.intl;
                    var8 = var11.string;
                    var7 = var10[var6];
                    var7 = var9.bind(var0)(var7);
                    var7 = var7.t;
                    var7 = var7.YWMtRe;
                    var7 = var8.bind(var11)(var7);
                    var1.title = var7;
                    var7 = var10[var6];
                    var7 = var9.bind(var0)(var7);
                    var12 = var7.intl;
                    var11 = var12.format;
                    var7 = var10[var6];
                    var7 = var9.bind(var0)(var7);
                    var7 = var7.t;
                    var8 = var7["iKW+jY"];
                    var7 = {};
                    var14 = 16;
                    var13 = var10[var14];
                    var20 = var9.bind(var0)(var13);
                    var19 = var20.computeChannelName;
                    var24 = _closure2_slot0;
                    var23 = _closure1_slot13;
                    var22 = _closure1_slot12;
                    var21 = true;
                    var25 = var20;
                    var15 = var25[var19](var24, var23, var22, var21, var20);
                    var7.channelName = var15;
                    var14 = var10[var14];
                    var17 = var9.bind(var0)(var14);
                    var16 = var17.computeChannelName;
                    var15 = _closure2_slot1;
                    var14 = _closure1_slot13;
                    var13 = _closure1_slot12;
                    var13 = var16.bind(var17)(var15, var14, var13);
                    var7.categoryName = var13;
                    var7 = var11.bind(var12)(var8, var7);
                    var1.body = var7;
                    var7 = var10[var6];
                    var7 = var9.bind(var0)(var7);
                    var11 = var7.intl;
                    var8 = var11.string;
                    var7 = var10[var6];
                    var7 = var9.bind(var0)(var7);
                    var7 = var7.t;
                    var7 = var7.eW8Gy4;
                    var7 = var8.bind(var11)(var7);
                    var1.confirmText = var7;
                    var7 = var10[var6];
                    var7 = var9.bind(var0)(var7);
                    var8 = var7.intl;
                    var7 = var8.string;
                    var6 = var10[var6];
                    var6 = var9.bind(var0)(var6);
                    var6 = var6.t;
                    var6 = var6.s4uM3b;
                    var6 = var7.bind(var8)(var6);
                    var1.cancelText = var6;
                    var6 = _closure1_slot5;
                    var5 = function*() { // Environment: var4
                        var0 = function*() { // Original name: ?anon_0_, environment: var0
                            _fun109678: for (var _fun109678_ip = 0;;) switch (_fun109678_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun109678_ip = 252;
                                        continue _fun109678
                                    }
                                case 10:
                                    var2 = _closure2_slot1;
                                    var1 = var2.guild_id;
                                    var9 = {};
                                    var12 = var2.permissionOverwrites;
                                    var13 = var9;
                                    var2 = copyDataProperties(var13, var12);
                                    var5 = null;
                                    var2 = var5 != var1;
                                    if (!var2) {
                                        _fun109678_ip = 54;
                                        continue _fun109678
                                    }
                                case 46:
                                    var4 = var9[var1];
                                    var2 = var5 == var4;
                                case 54:
                                    if (!var2) {
                                        _fun109678_ip = 97;
                                        continue _fun109678
                                    }
                                case 57:
                                    var5 = _closure1_slot2;
                                    var4 = _closure1_slot3;
                                    var2 = 17;
                                    var4 = var4[var2];
                                    var2 = undefined;
                                    var4 = var5.bind(var2)(var4);
                                    var2 = var4.makeEveryoneOverwrite;
                                    var2 = var2.bind(var4)(var1);
                                    var9[var1] = var2;
                                case 97:
                                    var5 = _closure1_slot0;
                                    var4 = _closure1_slot3;
                                    var2 = 18;
                                    var4 = var4[var2];
                                    var2 = undefined;
                                    var8 = var5.bind(var2)(var4);
                                    var6 = var8.checkChattableChannelThresholdMetAfterChannelPermissionDeny;
                                    var5 = _closure2_slot0;
                                    var4 = var9[var1];
                                    var4 = var4.deny;
                                    var1 = var9[var1];
                                    var1 = var1.allow;
                                    var1 = var6.bind(var8)(var5, var4, var1);
                                    SaveGenerator(address = 163);
                                case 161:
                                    return var1;
                                case 163:
                                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                                    if (var4) {
                                        _fun109678_ip = 249;
                                        continue _fun109678
                                    }
                                case 169:
                                    if (!var1) {
                                        _fun109678_ip = 246;
                                        continue _fun109678
                                    }
                                case 172:
                                    var5 = _closure1_slot0;
                                    var10 = _closure1_slot3;
                                    var4 = 19;
                                    var4 = var10[var4];
                                    var6 = var5.bind(var2)(var4);
                                    var5 = var6.saveChannel;
                                    var3 = _closure2_slot0;
                                    var4 = var3.id;
                                    var3 = {};
                                    var8 = _closure1_slot1;
                                    var7 = 20;
                                    var7 = var10[var7];
                                    var8 = var8.bind(var2)(var7);
                                    var7 = var8.values;
                                    var7 = var7.bind(var8)(var9);
                                    var3.permissionOverwrites = var7;
                                    var3 = var5.bind(var6)(var4, var3);
                                case 246:
                                    return var2;
                                case 249:
                                    return var1;
                                case 252:
                                    return var0;
                            }
                        };
                        return var0;
                    };
                    var5 = var6.bind(var0)(var5);
                    var _closure3_slot0 = var5;
                    var4 = function() { // Environment: var4
                        var0 = undefined;
                        var3 = _closure3_slot0;
                        var2 = var3.apply;
                        var0 = arguments;
                        var1 = var0;
                        var0 = this;
                        var0 = var2.bind(var3)(var0, var1);
                        return var0;
                    };
                    var1.onConfirm = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var10 = var2.bind(var5)(var0, var1);
                var5 = _closure1_slot0;
                var8 = _closure1_slot3;
                var0 = 16;
                var0 = var8[var0];
                var6 = var5.bind(var3)(var0);
                var2 = var6.computeChannelName;
                var1 = _closure1_slot13;
                var0 = _closure1_slot12;
                var14 = var2.bind(var6)(var9, var1, var0);
                var2 = _closure1_slot16;
                var1 = _closure1_slot7;
                var0 = {};
                var4 = var4.tableRowGroupContainer;
                var0.style = var4;
                var6 = _closure1_slot16;
                var4 = 21;
                var4 = var8[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.TableRowGroup;
                var4 = {};
                var9 = _closure1_slot0;
                var8 = _closure1_slot3;
                var15 = 15;
                var11 = var8[var15];
                var11 = var9.bind(var3)(var11);
                var13 = var11.intl;
                var11 = var13.formatToPlainString;
                var8 = var8[var15];
                var8 = var9.bind(var3)(var8);
                var8 = var8.t;
                if (var7) {
                    _fun109675_ip = 232;
                    continue _fun109675
                }
            case 209:
                var9 = var8.OIhm0M;
                var7 = {};
                var7.categoryName = var14;
                var7 = var11.bind(var13)(var9, var7);
                _fun109675_ip = 253;
                continue _fun109675;
            case 232:
                var9 = var8.ETJqLl;
                var8 = {};
                var8.categoryName = var14;
                var7 = var11.bind(var13)(var9, var8);
            case 253:
                var4.title = var7;
                var9 = _closure1_slot16;
                var14 = _closure1_slot0;
                var11 = _closure1_slot3;
                var7 = 22;
                var7 = var11[var7];
                var7 = var14.bind(var3)(var7);
                var8 = var7.TableRow;
                var7 = {};
                var16 = _closure1_slot16;
                var12 = 23;
                var12 = var11[var12];
                var12 = var14.bind(var3)(var12);
                var13 = var12.RefreshIcon;
                var12 = {};
                var12 = var16.bind(var3)(var13, var12);
                var7.icon = var12;
                var12 = var11[var15];
                var12 = var14.bind(var3)(var12);
                var13 = var12.intl;
                var12 = var13.string;
                var11 = var11[var15];
                var11 = var14.bind(var3)(var11);
                var11 = var11.t;
                var11 = var11.NVwuHq;
                var11 = var12.bind(var13)(var11);
                var7.label = var11;
                var7.onPress = var10;
                var7 = var9.bind(var3)(var8, var7);
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot19 = var0;
    var0 = function(arg0) { // Original name: CategorySync, environment: var1
        _fun109680: for (var _fun109680_ip = 0;;) switch (_fun109680_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.channel;
                var5 = var0.category;
                var2 = var0.isEditing;
                var1 = var0.locked;
                var3 = null;
                var4 = var3 == var5;
                var0 = null;
                if (var4) {
                    _fun109680_ip = 77;
                    continue _fun109680
                }
            case 37:
                var0 = null;
                if (var2) {
                    _fun109680_ip = 77;
                    continue _fun109680
                }
            case 42:
                var4 = _closure1_slot16;
                var3 = _closure1_slot19;
                var2 = {};
                var2.channel = var6;
                var2.category = var5;
                var2.locked = var1;
                var1 = undefined;
                var0 = var4.bind(var1)(var3, var2);
            case 77:
                return var0;
        }
    };
    var _closure1_slot20 = var0;
    var0 = function(arg0) { // Original name: AddPermission, environment: var1
        _fun109681: for (var _fun109681_ip = 0;;) switch (_fun109681_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.isEditing;
                var3 = undefined;
                var _closure2_slot0 = var3;
                var1 = function(arg0) { // Original name: handleCreatePermissionOverwrite, environment: var11
                    var3 = _closure2_slot0;
                    var2 = var3.push;
                    var0 = _closure1_slot15;
                    var1 = var0.NEW_PERMISSION;
                    var0 = {};
                    var4 = arg0;
                    var0.type = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    var0 = undefined;
                    return var0;
                };
                var _closure2_slot1 = var1;
                var1 = _closure1_slot18;
                var4 = var1.bind(var3)();
                var2 = _closure1_slot0;
                var5 = _closure1_slot3;
                var1 = 24;
                var1 = var5[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.useNavigation;
                var1 = var1.bind(var2)();
                _closure2_slot0 = var1;
                if (var0) {
                    _fun109681_ip = 460;
                    continue _fun109681
                }
            case 79:
                var2 = _closure1_slot16;
                var1 = _closure1_slot7;
                var0 = {};
                var4 = var4.tableRowGroupContainer;
                var0.style = var4;
                var6 = _closure1_slot17;
                var15 = _closure1_slot0;
                var16 = _closure1_slot3;
                var4 = 21;
                var4 = var16[var4];
                var4 = var15.bind(var3)(var4);
                var5 = var4.TableRowGroup;
                var4 = {};
                var12 = 15;
                var7 = var16[var12];
                var7 = var15.bind(var3)(var7);
                var9 = var7.intl;
                var8 = var9.string;
                var7 = var16[var12];
                var7 = var15.bind(var3)(var7);
                var7 = var7.t;
                var7 = var7.vPHdP5;
                var7 = var8.bind(var9)(var7);
                var4.title = var7;
                var10 = _closure1_slot16;
                var8 = 22;
                var7 = var16[var8];
                var7 = var15.bind(var3)(var7);
                var9 = var7.TableRow;
                var7 = {};
                var19 = _closure1_slot16;
                var13 = 25;
                var17 = var16[var13];
                var17 = var15.bind(var3)(var17);
                var18 = var17.PlusMediumIcon;
                var17 = {};
                var17 = var19.bind(var3)(var18, var17);
                var7.icon = var17;
                var17 = var16[var12];
                var17 = var15.bind(var3)(var17);
                var19 = var17.intl;
                var18 = var19.string;
                var17 = var16[var12];
                var17 = var15.bind(var3)(var17);
                var17 = var17.t;
                var17 = var17.fVWxvT;
                var17 = var18.bind(var19)(var17);
                var7.label = var17;
                var17 = function() { // Original name: onPress, environment: var11
                    var2 = _closure2_slot1;
                    var0 = _closure1_slot14;
                    var1 = var0.ROLE;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var7.onPress = var17;
                var9 = var10.bind(var3)(var9, var7);
                var7 = new Array(2);
                var7[0] = var9;
                var10 = _closure1_slot16;
                var8 = var16[var8];
                var8 = var15.bind(var3)(var8);
                var9 = var8.TableRow;
                var8 = {};
                var17 = _closure1_slot16;
                var13 = var16[var13];
                var13 = var15.bind(var3)(var13);
                var14 = var13.PlusMediumIcon;
                var13 = {};
                var13 = var17.bind(var3)(var14, var13);
                var8.icon = var13;
                var13 = var16[var12];
                var13 = var15.bind(var3)(var13);
                var14 = var13.intl;
                var13 = var14.string;
                var12 = var16[var12];
                var12 = var15.bind(var3)(var12);
                var12 = var12.t;
                var12 = var12.riesLt;
                var12 = var13.bind(var14)(var12);
                var8.label = var12;
                var11 = function() { // Original name: onPress, environment: var11
                    var2 = _closure2_slot1;
                    var0 = _closure1_slot14;
                    var1 = var0.MEMBER;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var8.onPress = var11;
                var8 = var10.bind(var3)(var9, var8);
                var7[1] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            case 460:
                var0 = null;
                return var0;
        }
    };
    var _closure1_slot21 = var0;
    var0 = function(arg0) { // Original name: RoleRow, environment: var1
        _fun109685: for (var _fun109685_ip = 0;;) switch (_fun109685_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.role;
                var8 = var0.isEditing;
                var7 = var0.onSelect;
                var5 = var0.onDelete;
                var14 = var1.name;
                var13 = var1.colorString;
                var11 = var1.colorStrings;
                var0 = _closure1_slot8;
                var3 = undefined;
                var6 = var0.bind(var3)(var1);
                var2 = _closure1_slot16;
                var9 = _closure1_slot0;
                var15 = _closure1_slot3;
                var0 = 22;
                var0 = var15[var0];
                var0 = var9.bind(var3)(var0);
                var1 = var0.TableRow;
                var0 = {};
                var10 = _closure1_slot16;
                var4 = 26;
                var4 = var15[var4];
                var4 = var9.bind(var3)(var4);
                var9 = var4.RoleLabel;
                var4 = {};
                var4.name = var14;
                var4.color = var13;
                var4.colors = var11;
                var4 = var10.bind(var3)(var9, var4);
                var0.label = var4;
                var4 = !var8;
                var0.arrow = var4;
                var4 = null;
                if (!var8) {
                    _fun109685_ip = 277;
                    continue _fun109685
                }
            case 152:
                var4 = null;
                if (var6) {
                    _fun109685_ip = 277;
                    continue _fun109685
                }
            case 157:
                var11 = _closure1_slot16;
                var15 = _closure1_slot0;
                var16 = _closure1_slot3;
                var9 = 27;
                var9 = var16[var9];
                var9 = var15.bind(var3)(var9);
                var10 = var9.CircleMinusIcon;
                var9 = {};
                var13 = _closure1_slot1;
                var12 = 13;
                var12 = var16[var12];
                var12 = var13.bind(var3)(var12);
                var12 = var12.colors;
                var12 = var12.ICON_FEEDBACK_CRITICAL;
                var9.color = var12;
                var12 = 15;
                var13 = var16[var12];
                var13 = var15.bind(var3)(var13);
                var14 = var13.intl;
                var13 = var14.string;
                var12 = var16[var12];
                var12 = var15.bind(var3)(var12);
                var12 = var12.t;
                var12 = var12.N86XcP;
                var12 = var13.bind(var14)(var12);
                var9.accessibilityLabel = var12;
                var4 = var11.bind(var3)(var10, var9);
            case 277:
                var0.icon = var4;
                var4 = var7;
                if (!var8) {
                    _fun109685_ip = 296;
                    continue _fun109685
                }
            case 287:
                var4 = var7;
                if (var6) {
                    _fun109685_ip = 296;
                    continue _fun109685
                }
            case 293:
                var4 = var5;
            case 296:
                var0.onPress = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot22 = var0;
    var0 = function(arg0) { // Original name: RoleOverwrites, environment: var1
        _fun109686: for (var _fun109686_ip = 0;;) switch (_fun109686_ip) {
            case 0:
                var2 = arg0;
                var0 = var2.guild;
                var _closure2_slot0 = var0;
                var1 = var2.channel;
                var3 = var2.isEditing;
                var _closure2_slot1 = var3;
                var3 = var2.onSelectRow;
                var _closure2_slot2 = var3;
                var2 = var2.onDeleteRow;
                var _closure2_slot3 = var2;
                var2 = _closure1_slot18;
                var3 = undefined;
                var5 = var2.bind(var3)();
                var6 = _closure1_slot0;
                var8 = _closure1_slot3;
                var2 = 28;
                var2 = var8[var2];
                var9 = var6.bind(var3)(var2);
                var8 = var9.useStateFromStores;
                var2 = _closure1_slot10;
                var6 = new Array(1);
                var6[0] = var2;
                var2 = function() { // Environment: var7
                    var2 = _closure1_slot10;
                    var1 = var2.getSortedRoles;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var2 = var8.bind(var9)(var6, var2);
                var6 = {};
                var14 = var1.permissionOverwrites;
                var15 = var6;
                var1 = copyDataProperties(var15, var14);
                var _closure2_slot4 = var6;
                var1 = var0.id;
                var8 = var6[var1];
                var1 = null;
                if (!(var1 == var8)) {
                    _fun109686_ip = 191;
                    continue _fun109686
                }
            case 146:
                var1 = var0.id;
                var9 = _closure1_slot2;
                var10 = _closure1_slot3;
                var8 = 17;
                var8 = var10[var8];
                var9 = var9.bind(var3)(var8);
                var8 = var9.makeEveryoneOverwrite;
                var0 = var0.id;
                var0 = var8.bind(var9)(var0);
                var6[var1] = var0;
            case 191:
                var1 = var2.filter;
                var0 = function(arg0) { // Environment: var7
                    _fun109688: for (var _fun109688_ip = 0;;) switch (_fun109688_ip) {
                        case 0:
                            var1 = _closure2_slot4;
                            var0 = arg0;
                            var0 = var0.id;
                            var0 = var1[var0];
                            var1 = null;
                            var2 = var1 == var0;
                            var3 = undefined;
                            var1 = undefined;
                            if (var2) {
                                _fun109688_ip = 37;
                                continue _fun109688
                            }
                        case 32:
                            var1 = var0.type;
                        case 37:
                            var2 = _closure1_slot0;
                            var4 = _closure1_slot3;
                            var0 = 29;
                            var0 = var4[var0];
                            var0 = var2.bind(var3)(var0);
                            var0 = var0.PermissionOverwriteType;
                            var0 = var0.ROLE;
                            var0 = var1 === var0;
                            return var0;
                    }
                };
                var9 = var1.bind(var2)(var0);
                var2 = _closure1_slot16;
                var1 = _closure1_slot7;
                var0 = {};
                var5 = var5.tableRowGroupContainer;
                var0.style = var5;
                var6 = _closure1_slot16;
                var12 = _closure1_slot0;
                var13 = _closure1_slot3;
                var4 = 21;
                var4 = var13[var4];
                var4 = var12.bind(var3)(var4);
                var5 = var4.TableRowGroup;
                var4 = {};
                var8 = 15;
                var10 = var13[var8];
                var10 = var12.bind(var3)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var8 = var13[var8];
                var8 = var12.bind(var3)(var8);
                var8 = var8.t;
                var8 = var8["LPJmL/"];
                var8 = var10.bind(var11)(var8);
                var4.title = var8;
                var8 = var9.map;
                var7 = function(arg0) { // Environment: var7
                    var0 = arg0;
                    var _closure3_slot0 = var0;
                    var4 = _closure1_slot16;
                    var3 = _closure1_slot22;
                    var2 = {};
                    var2.role = var0;
                    var5 = _closure2_slot1;
                    var2.isEditing = var5;
                    var5 = function() { // Original name: onSelect, environment: var1
                        var2 = _closure2_slot2;
                        var0 = _closure3_slot0;
                        var1 = var0.id;
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var2.onSelect = var5;
                    var1 = function() { // Original name: onDelete, environment: var1
                        var2 = _closure2_slot3;
                        var0 = _closure3_slot0;
                        var1 = var0.id;
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var2.onDelete = var1;
                    var1 = var0.id;
                    var0 = undefined;
                    var0 = var4.bind(var0)(var3, var2, var1);
                    return var0;
                };
                var7 = var8.bind(var9)(var7);
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot23 = var0;
    var0 = function(arg0) { // Original name: MemberRow, environment: var1
        _fun109692: for (var _fun109692_ip = 0;;) switch (_fun109692_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.guildId;
                var9 = var0.user;
                var5 = var0.isEditing;
                var4 = var0.onSelect;
                var6 = var0.onDelete;
                var3 = _closure1_slot16;
                var1 = _closure1_slot1;
                var2 = _closure1_slot3;
                var0 = 30;
                var0 = var2[var0];
                var2 = undefined;
                var1 = var1.bind(var2)(var0);
                var0 = {};
                var9 = var9.id;
                var0.userId = var9;
                var0.guildId = var7;
                if (!var5) {
                    _fun109692_ip = 81;
                    continue _fun109692
                }
            case 78:
                var4 = var6;
            case 81:
                var0.onPress = var4;
                var4 = !var5;
                var0.arrow = var4;
                var4 = null;
                if (!var5) {
                    _fun109692_ip = 218;
                    continue _fun109692
                }
            case 98:
                var7 = _closure1_slot16;
                var11 = _closure1_slot0;
                var12 = _closure1_slot3;
                var5 = 27;
                var5 = var12[var5];
                var5 = var11.bind(var2)(var5);
                var6 = var5.CircleMinusIcon;
                var5 = {};
                var9 = _closure1_slot1;
                var8 = 13;
                var8 = var12[var8];
                var8 = var9.bind(var2)(var8);
                var8 = var8.colors;
                var8 = var8.ICON_FEEDBACK_CRITICAL;
                var5.color = var8;
                var8 = 15;
                var9 = var12[var8];
                var9 = var11.bind(var2)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var8 = var12[var8];
                var8 = var11.bind(var2)(var8);
                var8 = var8.t;
                var8 = var8.N86XcP;
                var8 = var9.bind(var10)(var8);
                var5.accessibilityLabel = var8;
                var4 = var7.bind(var2)(var6, var5);
            case 218:
                var0.leading = var4;
                var0 = var3.bind(var2)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot24 = var0;
    var0 = function(arg0) { // Original name: MemberOverwrites, environment: var1
        _fun109693: for (var _fun109693_ip = 0;;) switch (_fun109693_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.channel;
                var2 = var1.guild_id;
                var _closure2_slot0 = var2;
                var1 = var1.permissionOverwrites;
                var2 = var0.isEditing;
                var _closure2_slot1 = var2;
                var2 = var0.onSelectRow;
                var _closure2_slot2 = var2;
                var0 = var0.onDeleteRow;
                var _closure2_slot3 = var0;
                var0 = _closure1_slot18;
                var4 = undefined;
                var6 = var0.bind(var4)();
                var2 = _closure1_slot1;
                var7 = _closure1_slot3;
                var0 = 20;
                var0 = var7[var0];
                var0 = var2.bind(var4)(var0);
                var2 = var0.bind(var4)(var1);
                var1 = var2.filter;
                var0 = function(arg0) { // Environment: var8
                    var0 = arg0;
                    var1 = var0.type;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var0 = 29;
                    var2 = var2[var0];
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2);
                    var0 = var0.PermissionOverwriteType;
                    var0 = var0.MEMBER;
                    var0 = var1 === var0;
                    return var0;
                };
                var2 = var1.bind(var2)(var0);
                var1 = var2.map;
                var0 = function(arg0) { // Environment: var8
                    var2 = _closure1_slot13;
                    var1 = var2.getUser;
                    var0 = arg0;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var2 = var1.bind(var2)(var0);
                var1 = var2.filter;
                var3 = _closure1_slot0;
                var0 = 31;
                var0 = var7[var0];
                var0 = var3.bind(var4)(var0);
                var0 = var0.isNotNullish;
                var2 = var1.bind(var2)(var0);
                var1 = var2.sortBy;
                var0 = function(arg0) { // Environment: var8
                    var0 = arg0;
                    var1 = var0.username;
                    var0 = var1.toLowerCase;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var1 = var1.bind(var2)(var0);
                var0 = var1.value;
                var10 = var0.bind(var1)();
                var1 = var10.length;
                var0 = 0;
                var1 = var1 <= var0;
                var0 = null;
                if (var1) {
                    _fun109693_ip = 345;
                    continue _fun109693
                }
            case 205:
                var3 = _closure1_slot16;
                var2 = _closure1_slot7;
                var1 = {};
                var6 = var6.tableRowGroupContainer;
                var1.style = var6;
                var7 = _closure1_slot16;
                var13 = _closure1_slot0;
                var14 = _closure1_slot3;
                var5 = 21;
                var5 = var14[var5];
                var5 = var13.bind(var4)(var5);
                var6 = var5.TableRowGroup;
                var5 = {};
                var9 = 15;
                var11 = var14[var9];
                var11 = var13.bind(var4)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                var9 = var14[var9];
                var9 = var13.bind(var4)(var9);
                var9 = var9.t;
                var9 = var9["9Oq93m"];
                var9 = var11.bind(var12)(var9);
                var5.title = var9;
                var9 = var10.map;
                var8 = function(arg0) { // Environment: var8
                    var0 = arg0;
                    var _closure3_slot0 = var0;
                    var4 = _closure1_slot16;
                    var3 = _closure1_slot24;
                    var2 = {};
                    var6 = _closure2_slot0;
                    var2.guildId = var6;
                    var2.user = var0;
                    var5 = _closure2_slot1;
                    var2.isEditing = var5;
                    var5 = function() { // Original name: onSelect, environment: var1
                        var2 = _closure2_slot2;
                        var0 = _closure3_slot0;
                        var1 = var0.id;
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var2.onSelect = var5;
                    var1 = function() { // Original name: onDelete, environment: var1
                        var2 = _closure2_slot3;
                        var0 = _closure3_slot0;
                        var1 = var0.id;
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var2.onDelete = var1;
                    var1 = var0.id;
                    var0 = undefined;
                    var0 = var4.bind(var0)(var3, var2, var1);
                    return var0;
                };
                var8 = var9.bind(var10)(var8);
                var5.children = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 345:
                return var0;
        }
    };
    var _closure1_slot25 = var0;
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
    var3 = var10.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.isEveryoneRole;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot12 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot13 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.PermissionOverrideType;
    var _closure1_slot14 = var6;
    var3 = var3.ChannelSettingsSections;
    var _closure1_slot15 = var3;
    var3 = 11;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot16 = var6;
    var3 = var3.jsxs;
    var _closure1_slot17 = var3;
    var3 = 12;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 13;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var8.marginBottom = var11;
    var3.tableRowGroupContainer = var8;
    var8 = {};
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_12;
    var8.marginHorizontal = var9;
    var3.tableContainer = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot18 = var3;
    var3 = 35;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'components_native/channel_settings/ChannelSettingsPermissionsOverview.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: ChannelSettingsPermissionsOverview, environment: var1
        _fun109700: for (var _fun109700_ip = 0;;) switch (_fun109700_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.channelId;
                var _closure2_slot0 = var8;
                var4 = undefined;
                var _closure2_slot1 = var4;
                var _closure2_slot5 = var4;
                var _closure2_slot6 = var4;
                var0 = function(arg0, arg1) { // Original name: handlePressRow, environment: var9
                    _fun109701: for (var _fun109701_ip = 0;;) switch (_fun109701_ip) {
                        case 0:
                            var1 = _closure2_slot6;
                            if (var1) {
                                _fun109701_ip = 54;
                                continue _fun109701
                            }
                        case 10:
                            var3 = _closure2_slot1;
                            var2 = var3.push;
                            var0 = _closure1_slot15;
                            var1 = var0.PERMISSION_OVERRIDES;
                            var0 = {};
                            var4 = arg0;
                            var0.type = var4;
                            var4 = arg1;
                            var0.id = var4;
                            var0 = var2.bind(var3)(var1, var0);
                        case 54:
                            var0 = undefined;
                            return var0;
                    }
                };
                var _closure2_slot9 = var0;
                var0 = function(arg0) { // Original name: handleClearPermissionOverwrite, environment: var9
                    _fun109702: for (var _fun109702_ip = 0;;) switch (_fun109702_ip) {
                        case 0:
                            var7 = arg0;
                            var _closure3_slot0 = var7;
                            var0 = _closure2_slot5;
                            var3 = null;
                            var5 = var3 == var0;
                            var0 = undefined;
                            var1 = undefined;
                            if (var5) {
                                _fun109702_ip = 37;
                                continue _fun109702
                            }
                        case 29:
                            var2 = _closure2_slot5;
                            var1 = var2[var7];
                        case 37:
                            var6 = _closure1_slot13;
                            var2 = var6.getUser;
                            var2 = var2.bind(var6)(var7);
                            if (!(var3 == var1)) {
                                _fun109702_ip = 75;
                                continue _fun109702
                            }
                        case 59:
                            var3 = var3 == var2;
                            var12 = undefined;
                            if (var3) {
                                _fun109702_ip = 73;
                                continue _fun109702
                            }
                        case 68:
                            var12 = var2.username;
                        case 73:
                            _fun109702_ip = 80;
                            continue _fun109702;
                        case 75:
                            var12 = var1.name;
                        case 80:
                            var2 = _closure1_slot1;
                            var9 = _closure1_slot3;
                            var1 = 14;
                            var1 = var9[var1];
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.show;
                            var1 = {};
                            var8 = _closure1_slot0;
                            var5 = 15;
                            var6 = var9[var5];
                            var6 = var8.bind(var0)(var6);
                            var11 = var6.intl;
                            var10 = var11.formatToPlainString;
                            var6 = var9[var5];
                            var6 = var8.bind(var0)(var6);
                            var6 = var6.t;
                            var7 = var6.txPV7k;
                            var6 = {};
                            var6.name = var12;
                            var6 = var10.bind(var11)(var7, var6);
                            var1.title = var6;
                            var6 = var9[var5];
                            var6 = var8.bind(var0)(var6);
                            var10 = var6.intl;
                            var7 = var10.string;
                            var6 = var9[var5];
                            var6 = var8.bind(var0)(var6);
                            var6 = var6.t;
                            var6 = var6.gm1Vej;
                            var6 = var7.bind(var10)(var6);
                            var1.cancelText = var6;
                            var6 = var9[var5];
                            var6 = var8.bind(var0)(var6);
                            var7 = var6.intl;
                            var6 = var7.string;
                            var5 = var9[var5];
                            var5 = var8.bind(var0)(var5);
                            var5 = var5.t;
                            var5 = var5.p89ACt;
                            var5 = var6.bind(var7)(var5);
                            var1.confirmText = var5;
                            var4 = function() { // Original name: onConfirm, environment: var4
                                var4 = _closure3_slot0;
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot3;
                                var0 = 34;
                                var1 = var1[var0];
                                var0 = undefined;
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.clearPermissionOverwrite;
                                var1 = _closure2_slot0;
                                var1 = var2.bind(var3)(var1, var4);
                                return var0;
                            };
                            var1.onConfirm = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var _closure2_slot10 = var0;
                var0 = _closure1_slot18;
                var5 = var0.bind(var4)();
                var1 = _closure1_slot0;
                var2 = _closure1_slot3;
                var0 = 24;
                var0 = var2[var0];
                var3 = var1.bind(var4)(var0);
                var0 = var3.useNavigation;
                var7 = var0.bind(var3)();
                _closure2_slot1 = var7;
                var0 = 28;
                var3 = var2[var0];
                var13 = var1.bind(var4)(var3);
                var12 = var13.useStateFromStores;
                var3 = _closure1_slot9;
                var11 = new Array(1);
                var11[0] = var3;
                var10 = new Array(1);
                var10[0] = var8;
                var8 = function() { // Environment: var9
                    var2 = _closure1_slot9;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var11 = var12.bind(var13)(var11, var8, var10);
                var _closure2_slot2 = var11;
                var8 = var2[var0];
                var12 = var1.bind(var4)(var8);
                var10 = var12.useStateFromStores;
                var8 = new Array(1);
                var8[0] = var3;
                var3 = function() { // Environment: var9
                    _fun109705: for (var _fun109705_ip = 0;;) switch (_fun109705_ip) {
                        case 0:
                            var2 = _closure1_slot9;
                            var1 = var2.getChannel;
                            var4 = _closure2_slot2;
                            var0 = null;
                            var4 = var0 == var4;
                            var0 = undefined;
                            if (var4) {
                                _fun109705_ip = 40;
                                continue _fun109705
                            }
                        case 30:
                            var3 = _closure2_slot2;
                            var0 = var3.parent_id;
                        case 40:
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var14 = var10.bind(var12)(var8, var3);
                var _closure2_slot3 = var14;
                var3 = var2[var0];
                var12 = var1.bind(var4)(var3);
                var10 = var12.useStateFromStores;
                var3 = _closure1_slot11;
                var8 = new Array(1);
                var8[0] = var3;
                var3 = function() { // Environment: var9
                    _fun109706: for (var _fun109706_ip = 0;;) switch (_fun109706_ip) {
                        case 0:
                            var2 = _closure1_slot11;
                            var1 = var2.getGuild;
                            var4 = _closure2_slot2;
                            var0 = null;
                            var4 = var0 == var4;
                            var0 = undefined;
                            if (var4) {
                                _fun109706_ip = 39;
                                continue _fun109706
                            }
                        case 30:
                            var3 = _closure2_slot2;
                            var0 = var3.guild_id;
                        case 39:
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var13 = var10.bind(var12)(var8, var3);
                var _closure2_slot4 = var13;
                var0 = var2[var0];
                var3 = var1.bind(var4)(var0);
                var2 = var3.useStateFromStores;
                var0 = _closure1_slot10;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var9
                    _fun109707: for (var _fun109707_ip = 0;;) switch (_fun109707_ip) {
                        case 0:
                            var2 = _closure2_slot4;
                            var0 = null;
                            var2 = var0 != var2;
                            var0 = undefined;
                            if (!var2) {
                                _fun109707_ip = 45;
                                continue _fun109707
                            }
                        case 18:
                            var3 = _closure1_slot10;
                            var2 = var3.getRolesSnapshot;
                            var1 = _closure2_slot4;
                            var1 = var1.id;
                            var0 = var2.bind(var3)(var1);
                        case 45:
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var1, var0);
                _closure2_slot5 = var0;
                var3 = _closure1_slot6;
                var2 = var3.useMemo;
                var1 = new Array(2);
                var1[0] = var11;
                var1[1] = var14;
                var0 = function() { // Environment: var9
                    _fun109708: for (var _fun109708_ip = 0;;) switch (_fun109708_ip) {
                        case 0:
                            var2 = _closure2_slot2;
                            var0 = null;
                            var0 = var0 != var2;
                            if (!var0) {
                                _fun109708_ip = 61;
                                continue _fun109708
                            }
                        case 16:
                            var4 = _closure1_slot2;
                            var3 = _closure1_slot3;
                            var2 = 17;
                            var3 = var3[var2];
                            var2 = undefined;
                            var4 = var4.bind(var2)(var3);
                            var3 = var4.areChannelsLocked;
                            var2 = _closure2_slot2;
                            var1 = _closure2_slot3;
                            var0 = var3.bind(var4)(var2, var1);
                        case 61:
                            return var0;
                    }
                };
                var12 = var2.bind(var3)(var0, var1);
                var2 = _closure1_slot6;
                var1 = var2.useState;
                var0 = false;
                var2 = var1.bind(var2)(var0);
                var1 = _closure1_slot4;
                var0 = 2;
                var1 = var1.bind(var4)(var2, var0);
                var0 = 0;
                var10 = var1[var0];
                _closure2_slot6 = var10;
                var0 = 1;
                var0 = var1[var0];
                var _closure2_slot7 = var0;
                var3 = _closure1_slot6;
                var2 = var3.useCallback;
                var1 = function() { // Environment: var9
                    var2 = _closure2_slot7;
                    var0 = undefined;
                    var1 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var0 = !var0;
                        return var0;
                    };
                    var1 = var2.bind(var0)(var1);
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var1 = 32;
                    var1 = var3[var1];
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.DeprecatedLayoutAnimation;
                    var1 = var1.bind(var2)();
                    return var0;
                };
                var0 = new Array(0);
                var0 = var2.bind(var3)(var1, var0);
                var _closure2_slot8 = var0;
                var3 = _closure1_slot6;
                var2 = var3.useLayoutEffect;
                var1 = new Array(3);
                var1[0] = var7;
                var1[1] = var10;
                var1[2] = var0;
                var0 = function() { // Environment: var9
                    var2 = _closure2_slot1;
                    var1 = var2.setOptions;
                    var0 = {};
                    var3 = function(arg0) { // Original name: headerRight, environment: var3
                        _fun109712: for (var _fun109712_ip = 0;;) switch (_fun109712_ip) {
                            case 0:
                                var3 = _closure1_slot16;
                                var1 = _closure1_slot0;
                                var2 = _closure1_slot3;
                                var0 = 33;
                                var0 = var2[var0];
                                var2 = undefined;
                                var0 = var1.bind(var2)(var0);
                                var1 = var0.HeaderTextButton;
                                var0 = {};
                                var10 = arg0;
                                var11 = var0;
                                var5 = copyDataProperties(var11, var10);
                                var7 = _closure2_slot8;
                                var6 = 'onPress';
                                var0[var6] = var7;
                                var5 = _closure2_slot6;
                                var8 = _closure1_slot0;
                                var9 = _closure1_slot3;
                                var4 = 15;
                                var6 = var9[var4];
                                var6 = var8.bind(var2)(var6);
                                var7 = var6.intl;
                                var6 = var7.string;
                                var4 = var9[var4];
                                var4 = var8.bind(var2)(var4);
                                var4 = var4.t;
                                if (var5) {
                                    _fun109712_ip = 127;
                                    continue _fun109712
                                }
                            case 114:
                                var5 = var4.bt75uw;
                                var5 = var6.bind(var7)(var5);
                                _fun109712_ip = 138;
                                continue _fun109712;
                            case 127:
                                var4 = var4.i4jeWR;
                                var5 = var6.bind(var7)(var4);
                            case 138:
                                var4 = 'label';
                                var0[var4] = var5;
                                var0 = var3.bind(var2)(var1, var0);
                                return var0;
                        }
                    };
                    var0.headerRight = var3;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var0 = var2.bind(var3)(var0, var1);
                var2 = null;
                var1 = var2 == var11;
                var0 = null;
                if (var1) {
                    _fun109700_ip = 662;
                    continue _fun109700
                }
            case 442:
                var1 = var2 == var13;
                var0 = null;
                if (var1) {
                    _fun109700_ip = 662;
                    continue _fun109700
                }
            case 454:
                var3 = _closure1_slot17;
                var2 = _closure1_slot7;
                var1 = {};
                var5 = var5.tableContainer;
                var1.style = var5;
                var8 = _closure1_slot16;
                var7 = _closure1_slot20;
                var5 = {};
                var5.channel = var11;
                var5.category = var14;
                var5.isEditing = var10;
                var5.locked = var12;
                var7 = var8.bind(var4)(var7, var5);
                var5 = new Array(4);
                var5[0] = var7;
                var12 = _closure1_slot16;
                var8 = _closure1_slot21;
                var7 = {};
                var7.isEditing = var10;
                var7 = var12.bind(var4)(var8, var7);
                var5[1] = var7;
                var12 = _closure1_slot16;
                var8 = _closure1_slot23;
                var7 = {};
                var7.guild = var13;
                var7.channel = var11;
                var7.isEditing = var10;
                var13 = function(arg0) { // Original name: onSelectRow, environment: var9
                    var3 = _closure2_slot9;
                    var0 = _closure1_slot14;
                    var2 = var0.ROLE;
                    var0 = undefined;
                    var1 = arg0;
                    var1 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var7.onSelectRow = var13;
                var13 = function(arg0) { // Original name: onDeleteRow, environment: var9
                    var2 = _closure2_slot10;
                    var0 = undefined;
                    var1 = arg0;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var7.onDeleteRow = var13;
                var7 = var12.bind(var4)(var8, var7);
                var5[2] = var7;
                var8 = _closure1_slot16;
                var7 = _closure1_slot25;
                var6 = {};
                var6.channel = var11;
                var6.isEditing = var10;
                var10 = function(arg0) { // Original name: onSelectRow, environment: var9
                    var3 = _closure2_slot9;
                    var0 = _closure1_slot14;
                    var2 = var0.MEMBER;
                    var0 = undefined;
                    var1 = arg0;
                    var1 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var6.onSelectRow = var10;
                var9 = function(arg0) { // Original name: onDeleteRow, environment: var9
                    var2 = _closure2_slot10;
                    var0 = undefined;
                    var1 = arg0;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var6.onDeleteRow = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[3] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 662:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 5, 31, 27, 1666, 1372, 1665, 1410, 3059, 1613, 660, 33, 1297, 671, 3962, 1234, 4754, 3055, 8098, 6426, 22, 5324, 4860, 10665, 1469, 11884, 9229, 10808, 566, 1636, 9092, 1304, 4857, 8848, 3905, 2]);