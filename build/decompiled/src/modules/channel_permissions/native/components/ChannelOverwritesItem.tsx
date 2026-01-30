// modules/channel_permissions/native/components/ChannelOverwritesItem.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var7 = metroImportAll;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var7;
    var _closure1_slot3 = var5;
    var0 = function(arg0) { // Original name: RemoveIcon, environment: var1
        _fun65609: for (var _fun65609_ip = 0;;) switch (_fun65609_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.item;
                var _closure2_slot0 = var8;
                var1 = var0.channelId;
                var _closure2_slot1 = var1;
                var0 = var0.onRemove;
                var _closure2_slot2 = var0;
                var0 = _closure1_slot9;
                var4 = undefined;
                var9 = var0.bind(var4)();
                var0 = null;
                var1 = var0 == var1;
                if (var1) {
                    _fun65609_ip = 229;
                    continue _fun65609
                }
            case 58:
                var3 = _closure1_slot7;
                var6 = _closure1_slot0;
                var10 = _closure1_slot3;
                var1 = 11;
                var1 = var10[var1];
                var1 = var6.bind(var4)(var1);
                var2 = var1.PressableOpacity;
                var1 = {};
                var11 = var8.disabled;
                var1.disabled = var11;
                var11 = 'button';
                var1.accessibilityRole = var11;
                var11 = 7;
                var12 = var10[var11];
                var12 = var6.bind(var4)(var12);
                var13 = var12.intl;
                var12 = var13.string;
                var11 = var10[var11];
                var11 = var6.bind(var4)(var11);
                var11 = var11.t;
                var11 = var11.N86XcP;
                var11 = var12.bind(var13)(var11);
                var1.accessibilityLabel = var11;
                var7 = function() { // Original name: onPress, environment: var7
                    _fun65610: for (var _fun65610_ip = 0;;) switch (_fun65610_ip) {
                        case 0:
                            var2 = _closure2_slot2;
                            var1 = null;
                            if (!(var1 == var2)) {
                                _fun65610_ip = 51;
                                continue _fun65610
                            }
                        case 13:
                            var1 = _closure2_slot0;
                            var5 = var1.id;
                            var4 = var1.name;
                            var3 = _closure2_slot1;
                            var2 = function(arg0, arg1, arg2) { // Original name: removeMemberOrRole, environment: var1
                                var12 = arg1;
                                var0 = arg0;
                                var _closure4_slot0 = var0;
                                var _closure4_slot1 = var12;
                                var0 = arg2;
                                var _closure4_slot2 = var0;
                                var2 = _closure1_slot1;
                                var6 = _closure1_slot3;
                                var0 = 6;
                                var1 = var6[var0];
                                var0 = undefined;
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.show;
                                var1 = {};
                                var5 = _closure1_slot0;
                                var7 = 7;
                                var8 = var6[var7];
                                var8 = var5.bind(var0)(var8);
                                var10 = var8.intl;
                                var9 = var10.string;
                                var8 = var6[var7];
                                var8 = var5.bind(var0)(var8);
                                var8 = var8.t;
                                var8 = var8.GuPYQB;
                                var8 = var9.bind(var10)(var8);
                                var1.title = var8;
                                var8 = var6[var7];
                                var8 = var5.bind(var0)(var8);
                                var11 = var8.intl;
                                var10 = var11.format;
                                var8 = var6[var7];
                                var8 = var5.bind(var0)(var8);
                                var8 = var8.t;
                                var9 = var8.xERCnZ;
                                var8 = {};
                                var8.name = var12;
                                var8 = var10.bind(var11)(var9, var8);
                                var1.body = var8;
                                var8 = var6[var7];
                                var8 = var5.bind(var0)(var8);
                                var10 = var8.intl;
                                var9 = var10.string;
                                var8 = var6[var7];
                                var8 = var5.bind(var0)(var8);
                                var8 = var8.t;
                                var8 = var8["ETE/oC"];
                                var8 = var9.bind(var10)(var8);
                                var1.cancelText = var8;
                                var8 = var6[var7];
                                var8 = var5.bind(var0)(var8);
                                var9 = var8.intl;
                                var8 = var9.string;
                                var7 = var6[var7];
                                var7 = var5.bind(var0)(var7);
                                var7 = var7.t;
                                var7 = var7.fKxYb0;
                                var7 = var8.bind(var9)(var7);
                                var1.confirmText = var7;
                                var4 = function() { // Original name: onConfirm, environment: var4
                                    var2 = _closure1_slot1;
                                    var1 = _closure1_slot3;
                                    var0 = 8;
                                    var1 = var1[var0];
                                    var0 = undefined;
                                    var4 = var2.bind(var0)(var1);
                                    var3 = var4.clearPermissionOverwrite;
                                    var2 = _closure4_slot2;
                                    var1 = _closure4_slot0;
                                    var3 = var3.bind(var4)(var2, var1);
                                    var2 = var3.then;
                                    var1 = function() { // Environment: var1
                                        var2 = _closure1_slot0;
                                        var1 = _closure1_slot3;
                                        var0 = 9;
                                        var1 = var1[var0];
                                        var0 = undefined;
                                        var3 = var2.bind(var0)(var1);
                                        var2 = var3.memberOrRoleRemovedToast;
                                        var1 = _closure4_slot1;
                                        var1 = var2.bind(var3)(var1);
                                        return var0;
                                    };
                                    var1 = var2.bind(var3)(var1);
                                    return var0;
                                };
                                var1.onConfirm = var4;
                                var4 = false;
                                var1.hideActionSheet = var4;
                                var4 = 10;
                                var4 = var6[var4];
                                var4 = var5.bind(var0)(var4);
                                var4 = var4.ButtonColors;
                                var4 = var4.RED;
                                var1.confirmColor = var4;
                                var1 = var2.bind(var3)(var1);
                                return var0;
                            };
                            var1 = undefined;
                            var2 = var2.bind(var1)(var5, var4, var3);
                            return var1;
                        case 51:
                            var2 = _closure2_slot2;
                            var1 = _closure2_slot0;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                            return var0;
                    }
                };
                var1.onPress = var7;
                var7 = _closure1_slot7;
                var5 = 12;
                var5 = var10[var5];
                var5 = var6.bind(var4)(var5);
                var6 = var5.CircleXIcon;
                var5 = {};
                var10 = var8.disabled;
                var8 = undefined;
                if (!var10) {
                    _fun65609_ip = 209;
                    continue _fun65609
                }
            case 203:
                var8 = var9.rowRemoveIconDisabled;
            case 209:
                var5.style = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 229:
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var0 = function(arg0) { // Original name: RoleItem, environment: var1
        _fun65614: for (var _fun65614_ip = 0;;) switch (_fun65614_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.disabled;
                var11 = var0.item;
                var13 = var0.subLabel;
                var10 = var0.channelId;
                var14 = var0.showType;
                var8 = var0.showRemove;
                var12 = var0.start;
                var9 = var0.end;
                var6 = var0.trailing;
                var5 = var0.onPress;
                var3 = _closure1_slot7;
                var16 = _closure1_slot0;
                var18 = _closure1_slot3;
                var0 = 13;
                var0 = var18[var0];
                var2 = undefined;
                var0 = var16.bind(var2)(var0);
                var1 = var0.TableRow;
                var0 = {};
                var17 = _closure1_slot7;
                var15 = 14;
                var15 = var18[var15];
                var15 = var16.bind(var2)(var15);
                var16 = var15.ShieldUserIcon;
                var15 = {};
                var18 = 'lg';
                var15.size = var18;
                var18 = var11.colorString;
                var15.color = var18;
                var15 = var17.bind(var2)(var16, var15);
                var0.icon = var15;
                var15 = var11.name;
                var0.label = var15;
                if (!var14) {
                    _fun65614_ip = 195;
                    continue _fun65614
                }
            case 158:
                var15 = _closure1_slot2;
                var16 = _closure1_slot3;
                var14 = 15;
                var14 = var16[var14];
                var16 = var15.bind(var2)(var14);
                var15 = var16.getRowTypeLabel;
                var14 = var11.rowType;
                var13 = var15.bind(var16)(var14);
            case 195:
                var0.subLabel = var13;
                var0.start = var12;
                var0.end = var9;
                if (!var8) {
                    _fun65614_ip = 235;
                    continue _fun65614
                }
            case 211:
                var9 = _closure1_slot7;
                var8 = _closure1_slot10;
                var7 = {};
                var7.item = var11;
                var7.channelId = var10;
                var6 = var9.bind(var2)(var8, var7);
            case 235:
                var0.trailing = var6;
                var0.onPress = var5;
                var0.disabled = var4;
                var0 = var3.bind(var2)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = function(arg0) { // Original name: MemberItem, environment: var1
        _fun65615: for (var _fun65615_ip = 0;;) switch (_fun65615_ip) {
            case 0:
                var0 = arg0;
                var12 = var0.item;
                var11 = var0.channelId;
                var8 = var0.showRemove;
                var10 = var0.onRemove;
                var22 = var0.guildId;
                var13 = var0.start;
                var9 = var0.end;
                var6 = var0.trailing;
                var5 = var0.onPress;
                var4 = var0.disabled;
                var0 = _closure1_slot9;
                var3 = undefined;
                var20 = var0.bind(var3)();
                var2 = _closure1_slot8;
                var1 = _closure1_slot4;
                var0 = {};
                var14 = var20.nameWrapper;
                var0.style = var14;
                var16 = _closure1_slot7;
                var15 = _closure1_slot0;
                var17 = _closure1_slot3;
                var14 = 16;
                var14 = var17[var14];
                var14 = var15.bind(var3)(var14);
                var15 = var14.Text;
                var14 = {
                    'style': null,
                    'lineClamp': 1,
                    'variant': 'text-md/semibold',
                    'color': 'interactive-text-active'
                };
                var18 = var20.name;
                var17 = new Array(2);
                var17[0] = var18;
                var18 = var20.memberName;
                var17[1] = var18;
                var14.style = var17;
                var17 = var12.name;
                var14.children = var17;
                var15 = var16.bind(var3)(var15, var14);
                var14 = new Array(2);
                var14[0] = var15;
                var17 = var12.rowType;
                var15 = _closure1_slot6;
                var16 = var15.OWNER;
                var18 = null;
                var15 = null;
                if (!(var17 === var16)) {
                    _fun65615_ip = 298;
                    continue _fun65615
                }
            case 208:
                var19 = _closure1_slot7;
                var23 = _closure1_slot1;
                var24 = _closure1_slot3;
                var21 = 17;
                var16 = var24[var21];
                var17 = var23.bind(var3)(var16);
                var16 = {};
                var21 = var24[var21];
                var21 = var23.bind(var3)(var21);
                var21 = var21.Sizes;
                var21 = var21.REFRESH_SMALL_16;
                var16.size = var21;
                var21 = 18;
                var21 = var24[var21];
                var21 = var23.bind(var3)(var21);
                var16.source = var21;
                var21 = true;
                var16.disableColor = var21;
                var20 = var20.ownerIcon;
                var16.style = var20;
                var15 = var19.bind(var3)(var17, var16);
            case 298:
                var14[1] = var15;
                var0.children = var14;
                var14 = var2.bind(var3)(var1, var0);
                var2 = _closure1_slot7;
                var1 = _closure1_slot0;
                var15 = _closure1_slot3;
                var0 = 13;
                var0 = var15[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.TableRow;
                var0 = {};
                var17 = _closure1_slot7;
                var16 = _closure1_slot1;
                var20 = 19;
                var15 = var15[var20];
                var16 = var16.bind(var3)(var15);
                var15 = {};
                var23 = _closure1_slot5;
                var21 = var23.getUser;
                var19 = var12.id;
                var21 = var21.bind(var23)(var19);
                var19 = var18 == var21;
                var18 = undefined;
                if (var19) {
                    _fun65615_ip = 406;
                    continue _fun65615
                }
            case 395:
                var19 = var21.getAvatarSource;
                var18 = var19.bind(var21)(var22);
            case 406:
                var15.source = var18;
                var19 = _closure1_slot0;
                var18 = _closure1_slot3;
                var18 = var18[var20];
                var18 = var19.bind(var3)(var18);
                var18 = var18.AvatarSizes;
                var18 = var18.SMALL;
                var15.size = var18;
                var15 = var17.bind(var3)(var16, var15);
                var0.icon = var15;
                var0.label = var14;
                var14 = var12.username;
                var0.subLabel = var14;
                var0.start = var13;
                var0.end = var9;
                if (!var8) {
                    _fun65615_ip = 507;
                    continue _fun65615
                }
            case 478:
                var9 = _closure1_slot7;
                var8 = _closure1_slot10;
                var7 = {};
                var7.item = var12;
                var7.channelId = var11;
                var7.onRemove = var10;
                var6 = var9.bind(var3)(var8, var7);
            case 507:
                var0.trailing = var6;
                var0.onPress = var5;
                var0.disabled = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = function(arg0) { // Original name: EmptyRoleItem, environment: var1
        var0 = arg0;
        var4 = var0.item;
        var0 = _closure1_slot9;
        var3 = undefined;
        var8 = var0.bind(var3)();
        var2 = _closure1_slot7;
        var10 = _closure1_slot0;
        var11 = _closure1_slot3;
        var0 = 13;
        var0 = var11[var0];
        var0 = var10.bind(var3)(var0);
        var1 = var0.TableRow;
        var0 = {};
        var7 = _closure1_slot7;
        var13 = _closure1_slot1;
        var9 = 17;
        var5 = var11[var9];
        var6 = var13.bind(var3)(var5);
        var5 = {};
        var12 = 20;
        var12 = var11[var12];
        var12 = var13.bind(var3)(var12);
        var5.source = var12;
        var12 = var4.colorString;
        var5.color = var12;
        var9 = var11[var9];
        var9 = var10.bind(var3)(var9);
        var9 = var9.IconSizes;
        var9 = var9.MEDIUM;
        var5.size = var9;
        var8 = var8.roleIcon;
        var5.style = var8;
        var5 = var7.bind(var3)(var6, var5);
        var0.icon = var5;
        var4 = var4.name;
        var0.label = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot13 = var0;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var9 = 1;
    var3 = var5[var9];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.RowType;
    var _closure1_slot6 = var3;
    var10 = 4;
    var3 = var5[var10];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot7 = var6;
    var3 = var3.jsxs;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'flexDirection': 'row',
        'alignItems': 'flex-end',
        'marginRight': 16
    };
    var3.nameWrapper = var8;
    var8 = {};
    var8.paddingRight = var10;
    var3.name = var8;
    var8 = {};
    var8.flexShrink = var9;
    var3.memberName = var8;
    var8 = {};
    var9 = 'center';
    var8.alignSelf = var9;
    var3.ownerIcon = var8;
    var8 = {
        'height': 30,
        'width': 30
    };
    var3.roleIcon = var8;
    var8 = {};
    var9 = 0.3;
    var8.opacity = var9;
    var3.rowRemoveIconDisabled = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot9 = var3;
    var3 = 21;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/channel_permissions/native/components/ChannelOverwritesItem.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: ChannelOverwritesItem, environment: var1
        _fun65617: for (var _fun65617_ip = 0;;) switch (_fun65617_ip) {
            case 0:
                var3 = arg0;
                var4 = var3.item;
                var2 = null;
                var1 = Object.create(var2);
                var0 = 0;
                var1.item = var0;
                var9 = {};
                var8 = var3;
                var7 = var1;
                var0 = copyDataProperties(var9, var8, var7);
                var5 = var4.rowType;
                var3 = _closure1_slot6;
                var3 = var3.ADMINISTRATOR;
                if (!(var3 !== var5)) {
                    _fun65617_ip = 183;
                    continue _fun65617
                }
            case 57:
                var3 = _closure1_slot6;
                var3 = var3.ROLE;
                if (!(var3 !== var5)) {
                    _fun65617_ip = 183;
                    continue _fun65617
                }
            case 71:
                var3 = _closure1_slot6;
                var3 = var3.OWNER;
                if (!(var3 !== var5)) {
                    _fun65617_ip = 149;
                    continue _fun65617
                }
            case 85:
                var3 = _closure1_slot6;
                var3 = var3.MEMBER;
                if (!(var3 !== var5)) {
                    _fun65617_ip = 149;
                    continue _fun65617
                }
            case 99:
                var3 = _closure1_slot6;
                var3 = var3.EMPTY_STATE;
                if (!(var3 !== var5)) {
                    _fun65617_ip = 115;
                    continue _fun65617
                }
            case 113:
                return var2;
            case 115:
                var6 = _closure1_slot7;
                var5 = _closure1_slot13;
                var3 = {};
                var3.item = var4;
                var9 = var3;
                var8 = var0;
                var2 = copyDataProperties(var9, var8);
                var2 = undefined;
                var2 = var6.bind(var2)(var5, var3);
                return var2;
            case 149:
                var6 = _closure1_slot7;
                var5 = _closure1_slot12;
                var3 = {};
                var3.item = var4;
                var9 = var3;
                var8 = var0;
                var2 = copyDataProperties(var9, var8);
                var2 = undefined;
                var2 = var6.bind(var2)(var5, var3);
                return var2;
            case 183:
                var3 = _closure1_slot7;
                var2 = _closure1_slot11;
                var1 = {};
                var1.item = var4;
                var9 = var1;
                var8 = var0;
                var0 = copyDataProperties(var9, var8);
                var0 = undefined;
                var0 = var3.bind(var0)(var2, var1);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1613, 5880, 33, 1297, 3962, 1234, 3905, 3106, 4835, 4864, 5334, 4860, 8102, 8096, 3901, 4045, 8103, 5413, 8104, 2]);