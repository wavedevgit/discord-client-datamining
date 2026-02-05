// uikit-native/modals/AdvancedInstantInvite.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
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
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var9 = 1;
    var3 = var5[var9];
    var3 = var4.bind(var0)(var3);
    var7 = var3.View;
    var _closure1_slot4 = var7;
    var7 = var3.StyleSheet;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot7 = var6;
    var6 = var3.jsxs;
    var _closure1_slot8 = var6;
    var3 = var3.Fragment;
    var _closure1_slot9 = var3;
    var6 = var7.create;
    var3 = {};
    var8 = {};
    var8.flexGrow = var9;
    var3.container = var8;
    var8 = {
        'height': 16,
        'width': 16,
        'marginTop': 2
    };
    var3.channelIcon = var8;
    var8 = {
        'position': 'absolute',
        'left': 32,
        'top': 28,
        'height': 60,
        'width': 60,
        'margin': 0,
        'padding': 0
    };
    var3.sparklesContainer = var8;
    var8 = {
        'height': 60,
        'width': 60
    };
    var3.sparkles = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot10 = var3;
    var3 = 20;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'uikit-native/modals/AdvancedInstantInvite.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun117313: for (var _fun117313_ip = 0;;) switch (_fun117313_ip) {
            case 0:
                var1 = arg0;
                var9 = var1.channel;
                var11 = var1.guild;
                var _closure2_slot0 = var11;
                var5 = var1.style;
                var30 = var1.maxAge;
                var18 = var1.onChangeMaxAge;
                var28 = var1.maxUsesOptions;
                var26 = var1.maxUses;
                var23 = var1.onChangeMaxUses;
                var27 = var1.temporary;
                var24 = var1.onChangeTemporary;
                var25 = var1.flags;
                var _closure2_slot1 = var25;
                var0 = var1.onChangeFlags;
                var _closure2_slot2 = var0;
                var0 = var1.roleIds;
                var _closure2_slot3 = var0;
                var1 = var1.onChangeRoleIds;
                var _closure2_slot4 = var1;
                var3 = undefined;
                var _closure2_slot5 = var3;
                var8 = null;
                var2 = var8 != var9;
                var36 = null;
                if (!var2) {
                    _fun117313_ip = 168;
                    continue _fun117313
                }
            case 134:
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 5;
                var2 = var6[var2];
                var4 = var4.bind(var3)(var2);
                var2 = var4.getChannelIcon;
                var36 = var2.bind(var4)(var9);
            case 168:
                var2 = var8 != var9;
                var17 = ' ';
                if (!var2) {
                    _fun117313_ip = 225;
                    continue _fun117313
                }
            case 181:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var4 = 6;
                var4 = var7[var4];
                var7 = var6.bind(var3)(var4);
                var6 = var7.computeChannelName;
                var4 = _closure1_slot6;
                var2 = _closure1_slot5;
                var17 = var6.bind(var7)(var9, var4, var2);
            case 225:
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 7;
                var2 = var6[var2];
                var7 = var4.bind(var3)(var2);
                var2 = var7.useInviteApplicationBypassInfo;
                var2 = var2.bind(var7)(var11);
                var9 = var2.canCreateApplicationBypassInvites;
                var10 = var2.isManualApprovalGuild;
                var2 = 8;
                var2 = var6[var2];
                var6 = var4.bind(var3)(var2);
                var4 = var6.useMaxAgeOptions;
                var2 = {};
                var13 = var8 == var11;
                var7 = undefined;
                if (var13) {
                    _fun117313_ip = 305;
                    continue _fun117313
                }
            case 300:
                var7 = var11.id;
            case 305:
                var2.guildId = var7;
                var7 = 'AdvancedInstantInvite';
                var2.location = var7;
                var31 = var4.bind(var6)(var2);
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 9;
                var2 = var6[var2];
                var6 = var4.bind(var3)(var2);
                var4 = var6.useInviteRoleAssignment;
                var13 = var8 == var11;
                var2 = undefined;
                if (var13) {
                    _fun117313_ip = 364;
                    continue _fun117313
                }
            case 359:
                var2 = var11.id;
            case 364:
                var2 = var4.bind(var6)(var2, var7);
                var14 = var2.enabled;
                var4 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 10;
                var2 = var6[var2];
                var4 = var4.bind(var3)(var2);
                var6 = var8 != var11;
                var2 = null;
                if (!var6) {
                    _fun117313_ip = 407;
                    continue _fun117313
                }
            case 404:
                var2 = var11;
            case 407:
                var6 = var4.bind(var3)(var2);
                _closure2_slot5 = var6;
                if (!var14) {
                    _fun117313_ip = 430;
                    continue _fun117313
                }
            case 419:
                var4 = var6.length;
                var2 = 0;
                var14 = var4 > var2;
            case 430:
                var4 = _closure1_slot3;
                var7 = var4.useCallback;
                var2 = new Array(4);
                var2[0] = var11;
                var2[1] = var6;
                var2[2] = var0;
                var2[3] = var1;
                var1 = function() { // Environment: var21
                    _fun117314: for (var _fun117314_ip = 0;;) switch (_fun117314_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            var3 = null;
                            var1 = var3 != var1;
                            if (!var1) {
                                _fun117314_ip = 24;
                                continue _fun117314
                            }
                        case 16:
                            var2 = _closure2_slot4;
                            var1 = var3 != var2;
                        case 24:
                            if (!var1) {
                                _fun117314_ip = 141;
                                continue _fun117314
                            }
                        case 27:
                            var4 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var3 = 11;
                            var3 = var1[var3];
                            var6 = undefined;
                            var5 = var4.bind(var6)(var3);
                            var4 = var5.openLazy;
                            var3 = _closure1_slot0;
                            var2 = 13;
                            var2 = var1[var2];
                            var3 = var3.bind(var6)(var2);
                            var2 = 12;
                            var2 = var1[var2];
                            var1 = var1.paths;
                            var10 = var3.bind(var6)(var2, var1);
                            var2 = {};
                            var1 = _closure2_slot5;
                            var2.assignableRoles = var1;
                            var1 = _closure2_slot3;
                            var2.selectedRoleIds = var1;
                            var0 = _closure2_slot4;
                            var2.onSave = var0;
                            var9 = 'SelectInviteRolesActionSheet';
                            var7 = 'stack';
                            var11 = var5;
                            var8 = var2;
                            var0 = var11[var4](var10, var9, var8, var7, var6);
                        case 141:
                            var0 = undefined;
                            return var0;
                    }
                };
                var19 = var7.bind(var4)(var1, var2);
                var2 = var4.useMemo;
                var1 = new Array(2);
                var1[0] = var6;
                var1[1] = var0;
                var0 = function() { // Environment: var21
                    var1 = global;
                    var4 = var1.Set;
                    var5 = _closure2_slot5;
                    var3 = var5.map;
                    var2 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var0 = var0.id;
                        return var0;
                    };
                    var6 = var3.bind(var5)(var2);
                    var3 = var4.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var4
                        }
                    });
                    var7 = var3;
                    var2 = new var7[var4](var6, var5);
                    var2 = var2 instanceof Object ? var2 : var3;
                    var _closure3_slot0 = var2;
                    var2 = _closure2_slot3;
                    var1 = var2.filter;
                    var0 = function(arg0) { // Environment: var0
                        var2 = _closure3_slot0;
                        var1 = var2.has;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    var0 = var0.length;
                    return var0;
                };
                var6 = var2.bind(var4)(var0, var1);
                var0 = 0;
                var22 = undefined;
                if (!(var0 !== var6)) {
                    _fun117313_ip = 575;
                    continue _fun117313
                }
            case 510:
                var1 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 14;
                var2 = var7[var0];
                var2 = var1.bind(var3)(var2);
                var4 = var2.intl;
                var2 = var4.formatToPlainString;
                var0 = var7[var0];
                var0 = var1.bind(var3)(var0);
                var0 = var0.t;
                var1 = var0["eXU3/V"];
                var0 = {};
                var0.count = var6;
                var22 = var2.bind(var4)(var1, var0);
            case 575:
                var2 = _closure1_slot7;
                var1 = _closure1_slot4;
                var0 = {};
                var35 = _closure1_slot10;
                var6 = var35.container;
                var4 = new Array(2);
                var4[0] = var6;
                var4[1] = var5;
                var0.style = var4;
                var6 = _closure1_slot8;
                var32 = _closure1_slot0;
                var29 = _closure1_slot2;
                var13 = 15;
                var4 = var29[var13];
                var4 = var32.bind(var3)(var4);
                var5 = var4.Form;
                var4 = {};
                var7 = var29[var13];
                var7 = var32.bind(var3)(var7);
                var11 = var7.FormSection;
                var7 = {};
                var20 = 14;
                var15 = var29[var20];
                var15 = var32.bind(var3)(var15);
                var33 = var15.intl;
                var16 = var33.string;
                var15 = var29[var20];
                var15 = var32.bind(var3)(var15);
                var15 = var15.t;
                var15 = var15.LUo0Q8;
                var15 = var16.bind(var33)(var15);
                var7.title = var15;
                var15 = var29[var13];
                var15 = var32.bind(var3)(var15);
                var16 = var15.FormRow;
                var15 = {};
                var38 = _closure1_slot1;
                var37 = 16;
                var33 = var29[var37];
                var34 = var38.bind(var3)(var33);
                var33 = {};
                var37 = var29[var37];
                var37 = var38.bind(var3)(var37);
                var37 = var37.Sizes;
                var37 = var37.CUSTOM;
                var33.size = var37;
                var33.source = var36;
                var35 = var35.channelIcon;
                var33.style = var35;
                var33 = var2.bind(var3)(var34, var33);
                var15.leading = var33;
                var15.label = var17;
                var15 = var2.bind(var3)(var16, var15);
                var7.children = var15;
                var11 = var2.bind(var3)(var11, var7);
                var7 = new Array(5);
                var7[0] = var11;
                var11 = var29[var13];
                var11 = var32.bind(var3)(var11);
                var15 = var11.FormSection;
                var11 = {};
                var16 = var29[var20];
                var16 = var32.bind(var3)(var16);
                var33 = var16.intl;
                var17 = var33.string;
                var16 = var29[var20];
                var16 = var32.bind(var3)(var16);
                var16 = var16.t;
                var16 = var16["4QuV7G"];
                var16 = var17.bind(var33)(var16);
                var11.title = var16;
                var16 = var29[var13];
                var16 = var32.bind(var3)(var16);
                var17 = var16.FormSelect;
                var16 = {};
                var33 = var29[var20];
                var33 = var32.bind(var3)(var33);
                var35 = var33.intl;
                var34 = var35.string;
                var33 = var29[var20];
                var33 = var32.bind(var3)(var33);
                var33 = var33.t;
                var33 = var33.gKmKP0;
                var33 = var34.bind(var35)(var33);
                var16.label = var33;
                var16.options = var31;
                var16.value = var30;
                var16.onChange = var18;
                var17 = var2.bind(var3)(var17, var16);
                var16 = new Array(3);
                var16[0] = var17;
                var17 = var29[var13];
                var17 = var32.bind(var3)(var17);
                var18 = var17.FormDivider;
                var17 = {};
                var17 = var2.bind(var3)(var18, var17);
                var16[1] = var17;
                var17 = var29[var13];
                var17 = var32.bind(var3)(var17);
                var18 = var17.FormSelect;
                var17 = {};
                var30 = var29[var20];
                var30 = var32.bind(var3)(var30);
                var31 = var30.intl;
                var30 = var31.string;
                var29 = var29[var20];
                var29 = var32.bind(var3)(var29);
                var29 = var29.t;
                var29 = var29["+3vH1h"];
                var29 = var30.bind(var31)(var29);
                var17.label = var29;
                var17.options = var28;
                var17.value = var26;
                var17.onChange = var23;
                var17 = var2.bind(var3)(var18, var17);
                var16[2] = var17;
                var11.children = var16;
                var11 = var6.bind(var3)(var15, var11);
                var7[1] = var11;
                var11 = null;
                if (!var14) {
                    _fun117313_ip = 1280;
                    continue _fun117313
                }
            case 1125:
                var16 = _closure1_slot7;
                var26 = _closure1_slot0;
                var23 = _closure1_slot2;
                var14 = var23[var13];
                var14 = var26.bind(var3)(var14);
                var15 = var14.FormSection;
                var14 = {};
                var17 = var23[var13];
                var17 = var26.bind(var3)(var17);
                var18 = var17.FormRow;
                var17 = {};
                var28 = var23[var20];
                var28 = var26.bind(var3)(var28);
                var30 = var28.intl;
                var29 = var30.string;
                var28 = var23[var20];
                var28 = var26.bind(var3)(var28);
                var28 = var28.t;
                var28 = var28.rPYJxL;
                var28 = var29.bind(var30)(var28);
                var17.label = var28;
                var23 = var23[var13];
                var23 = var26.bind(var3)(var23);
                var23 = var23.FormRow;
                var26 = var23.Arrow;
                var23 = {};
                var23 = var16.bind(var3)(var26, var23);
                var17.trailing = var23;
                var17.subLabel = var22;
                var17.onPress = var19;
                var17 = var16.bind(var3)(var18, var17);
                var14.children = var17;
                var11 = var16.bind(var3)(var15, var14);
            case 1280:
                var7[2] = var11;
                var10 = !var10;
                if (!var10) {
                    _fun117313_ip = 1294;
                    continue _fun117313
                }
            case 1290:
                var10 = var8 != var24;
            case 1294:
                if (!var10) {
                    _fun117313_ip = 1529;
                    continue _fun117313
                }
            case 1300:
                var15 = _closure1_slot8;
                var14 = _closure1_slot9;
                var11 = {};
                var19 = _closure1_slot7;
                var26 = _closure1_slot0;
                var22 = _closure1_slot2;
                var16 = var22[var13];
                var16 = var26.bind(var3)(var16);
                var17 = var16.FormSection;
                var16 = {};
                var18 = 17;
                var18 = var22[var18];
                var18 = var26.bind(var3)(var18);
                var23 = var18.TableSwitchRow;
                var18 = {};
                var28 = var22[var20];
                var28 = var26.bind(var3)(var28);
                var30 = var28.intl;
                var29 = var30.string;
                var28 = var22[var20];
                var28 = var26.bind(var3)(var28);
                var28 = var28.t;
                var28 = var28.dy1ico;
                var28 = var29.bind(var30)(var28);
                var18.label = var28;
                var18.value = var27;
                var18.onValueChange = var24;
                var18 = var19.bind(var3)(var23, var18);
                var16.children = var18;
                var17 = var19.bind(var3)(var17, var16);
                var16 = new Array(2);
                var16[0] = var17;
                var17 = var22[var13];
                var17 = var26.bind(var3)(var17);
                var18 = var17.FormHint;
                var17 = {};
                var23 = var22[var20];
                var23 = var26.bind(var3)(var23);
                var24 = var23.intl;
                var23 = var24.string;
                var22 = var22[var20];
                var22 = var26.bind(var3)(var22);
                var22 = var22.t;
                var22 = var22.A53l87;
                var22 = var23.bind(var24)(var22);
                var17.children = var22;
                var17 = var19.bind(var3)(var18, var17);
                var16[1] = var17;
                var11.children = var16;
                var10 = var15.bind(var3)(var14, var11);
            case 1529:
                var7[3] = var10;
                var8 = null;
                if (!var9) {
                    _fun117313_ip = 1825;
                    continue _fun117313
                }
            case 1541:
                var11 = _closure1_slot8;
                var10 = _closure1_slot9;
                var9 = {};
                var15 = _closure1_slot7;
                var19 = _closure1_slot0;
                var16 = _closure1_slot2;
                var12 = var16[var13];
                var12 = var19.bind(var3)(var12);
                var14 = var12.FormSection;
                var12 = {};
                var17 = 17;
                var17 = var16[var17];
                var17 = var19.bind(var3)(var17);
                var18 = var17.TableSwitchRow;
                var17 = {};
                var22 = var16[var20];
                var22 = var19.bind(var3)(var22);
                var24 = var22.intl;
                var23 = var24.string;
                var22 = var16[var20];
                var22 = var19.bind(var3)(var22);
                var22 = var22.t;
                var22 = var22["1i1bUl"];
                var22 = var23.bind(var24)(var22);
                var17.label = var22;
                var22 = 18;
                var22 = var16[var22];
                var24 = var19.bind(var3)(var22);
                var23 = var24.hasFlag;
                var22 = 19;
                var22 = var16[var22];
                var22 = var19.bind(var3)(var22);
                var22 = var22.GuildInviteFlags;
                var22 = var22.IS_APPLICATION_BYPASS;
                var22 = var23.bind(var24)(var25, var22);
                var17.value = var22;
                var21 = function arg0() {
                    var2 = _closure2_slot2;
                    var3 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 18;
                    var4 = var7[var1];
                    var1 = undefined;
                    var6 = var3.bind(var1)(var4);
                    var5 = var6.setFlag;
                    var4 = _closure2_slot1;
                    var0 = 19;
                    var0 = var7[var0];
                    var0 = var3.bind(var1)(var0);
                    var0 = var0.GuildInviteFlags;
                    var3 = var0.IS_APPLICATION_BYPASS;
                    var0 = arg0;
                    var0 = var5.bind(var6)(var4, var3, var0);
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var17.onValueChange = var21;
                var17 = var15.bind(var3)(var18, var17);
                var12.children = var17;
                var14 = var15.bind(var3)(var14, var12);
                var12 = new Array(2);
                var12[0] = var14;
                var13 = var16[var13];
                var13 = var19.bind(var3)(var13);
                var14 = var13.FormHint;
                var13 = {};
                var17 = var16[var20];
                var17 = var19.bind(var3)(var17);
                var18 = var17.intl;
                var17 = var18.string;
                var16 = var16[var20];
                var16 = var19.bind(var3)(var16);
                var16 = var16.t;
                var16 = var16["jvd/LF"];
                var16 = var17.bind(var18)(var16);
                var13.children = var16;
                var13 = var15.bind(var3)(var14, var13);
                var12[1] = var13;
                var9.children = var12;
                var8 = var11.bind(var3)(var10, var9);
            case 1825:
                var7[4] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 3100, 1621, 33, 4809, 4794, 14991, 8358, 9167, 14992, 3278, 14993, 1307, 1234, 5382, 4086, 5420, 1384, 5914, 2]);