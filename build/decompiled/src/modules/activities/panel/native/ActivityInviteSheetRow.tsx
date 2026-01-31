// modules/activities/panel/native/ActivityInviteSheetRow.tsx
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
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var6 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.InviteSendStates;
    var _closure1_slot7 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot8 = var3;
    var3 = 7;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {
        'width': 32,
        'height': 32,
        'borderRadius': null,
        'backgroundColor': null,
        'alignItems': 'center',
        'justifyContent': 'center',
        'overflow': 'hidden',
        'marginTop': 0,
        'marginRight': 10,
        'borderColor': null,
        'borderStyle': 'solid',
        'borderWidth': 2
    };
    var10 = 8;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.lg;
    var9.borderRadius = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BASE_LOW;
    var9.backgroundColor = var12;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BORDER_MUTED;
    var9.borderColor = var10;
    var3.acronym = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot9 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Environment: var1
        _fun110437: for (var _fun110437_ip = 0;;) switch (_fun110437_ip) {
            case 0:
                var2 = arg0;
                var14 = var2.end;
                var10 = var2.error;
                var9 = var2.isSubmitting;
                var1 = var2.onInviteSent;
                var _closure2_slot0 = var1;
                var1 = var2.onPressAvatar;
                var _closure2_slot1 = var1;
                var4 = var2.row;
                var _closure2_slot2 = var4;
                var8 = var2.sendState;
                var15 = var2.start;
                var2 = _closure1_slot9;
                var3 = undefined;
                var12 = var2.bind(var3)();
                var2 = var4.item;
                var16 = var2.id;
                var _closure2_slot3 = var16;
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var6 = 9;
                var6 = var2[var6];
                var17 = var5.bind(var3)(var6);
                var13 = var17.useStateFromStores;
                var6 = _closure1_slot4;
                var11 = new Array(1);
                var11[0] = var6;
                var6 = function() { // Environment: var0
                    var2 = _closure1_slot4;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var28 = var13.bind(var17)(var11, var6);
                var11 = _closure1_slot1;
                var6 = 10;
                var6 = var2[var6];
                var6 = var11.bind(var3)(var6);
                var17 = var6.bind(var3)(var28);
                var6 = function() { // Original name: handlePress, environment: var0
                    var2 = _closure2_slot0;
                    var1 = _closure2_slot2;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var4 = var4.type;
                var11 = 11;
                var2 = var2[var11];
                var2 = var5.bind(var3)(var2);
                var2 = var2.RowTypes;
                var2 = var2.DM;
                if (!(var2 !== var4)) {
                    _fun110437_ip = 849;
                    continue _fun110437
                }
            case 203:
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var11];
                var2 = var5.bind(var3)(var2);
                var2 = var2.RowTypes;
                var2 = var2.FRIEND;
                if (!(var2 !== var4)) {
                    _fun110437_ip = 849;
                    continue _fun110437
                }
            case 239:
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var11];
                var2 = var5.bind(var3)(var2);
                var2 = var2.RowTypes;
                var2 = var2.GROUP_DM;
                if (!(var2 !== var4)) {
                    _fun110437_ip = 661;
                    continue _fun110437
                }
            case 275:
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var11];
                var2 = var5.bind(var3)(var2);
                var2 = var2.RowTypes;
                var2 = var2.CHANNEL;
                if (!(var2 !== var4)) {
                    _fun110437_ip = 312;
                    continue _fun110437
                }
            case 308:
                var2 = null;
                return var2;
            case 312:
                var2 = null;
                var5 = var2 == var28;
                var4 = undefined;
                if (var5) {
                    _fun110437_ip = 328;
                    continue _fun110437
                }
            case 323:
                var4 = var28.guild_id;
            case 328:
                var4 = var2 != var4;
                var24 = undefined;
                if (!var4) {
                    _fun110437_ip = 356;
                    continue _fun110437
                }
            case 337:
                var11 = _closure1_slot5;
                var5 = var11.getGuild;
                var4 = var28.guild_id;
                var24 = var5.bind(var11)(var4);
            case 356:
                if (!(var2 != var24)) {
                    _fun110437_ip = 659;
                    continue _fun110437
                }
            case 363:
                var4 = var24.icon;
                if (!(var2 == var4)) {
                    _fun110437_ip = 482;
                    continue _fun110437
                }
            case 372:
                var13 = _closure1_slot0;
                var19 = _closure1_slot2;
                var4 = 18;
                var4 = var19[var4];
                var11 = var13.bind(var3)(var4);
                var5 = var11.getAcronym;
                var4 = var24.name;
                var18 = var5.bind(var11)(var4);
                var11 = _closure1_slot8;
                var5 = _closure1_slot3;
                var4 = {};
                var12 = var12.acronym;
                var4.style = var12;
                var12 = 19;
                var12 = var19[var12];
                var12 = var13.bind(var3)(var12);
                var13 = var12.Text;
                var12 = {};
                var19 = 'text-sm/bold';
                var12.variant = var19;
                var12.children = var18;
                var12 = var11.bind(var3)(var13, var12);
                var4.children = var12;
                var12 = var11.bind(var3)(var5, var4);
                _fun110437_ip = 617;
                continue _fun110437;
            case 482:
                var11 = _closure1_slot8;
                var22 = _closure1_slot1;
                var19 = _closure1_slot2;
                var13 = 13;
                var4 = var19[var13];
                var5 = var22.bind(var3)(var4);
                var4 = {};
                var18 = 17;
                var20 = var19[var18];
                var21 = var22.bind(var3)(var20);
                var20 = var21.makeSource;
                var18 = var19[var18];
                var23 = var22.bind(var3)(var18);
                var22 = var23.getGuildIconURL;
                var18 = {};
                var25 = var24.id;
                var18.id = var25;
                var24 = var24.icon;
                var18.icon = var24;
                var24 = 32;
                var18.size = var24;
                var18 = var22.bind(var23)(var18);
                var18 = var20.bind(var21)(var18);
                var4.source = var18;
                var18 = _closure1_slot0;
                var13 = var19[var13];
                var13 = var18.bind(var3)(var13);
                var13 = var13.AvatarSizes;
                var13 = var13.REFRESH_MEDIUM_32;
                var4.size = var13;
                var12 = var11.bind(var3)(var5, var4);
            case 617:
                var4 = var2 == var17;
                var11 = '';
                if (var4) {
                    _fun110437_ip = 650;
                    continue _fun110437
                }
            case 628:
                var4 = global;
                var4 = var4.HermesInternal;
                var5 = var4.concat;
                var4 = '#';
                var11 = var5.bind(var4)(var17);
            case 650:
                var5 = undefined;
                var4 = undefined;
                _fun110437_ip = 1230;
                continue _fun110437;
            case 659:
                return var2;
            case 661:
                var2 = null;
                var18 = var2 != var28;
                var13 = null;
                if (!var18) {
                    _fun110437_ip = 820;
                    continue _fun110437
                }
            case 675:
                var20 = _closure1_slot8;
                var26 = _closure1_slot1;
                var23 = _closure1_slot2;
                var21 = 13;
                var18 = var23[var21];
                var19 = var26.bind(var3)(var18);
                var18 = {};
                var22 = 17;
                var24 = var23[var22];
                var25 = var26.bind(var3)(var24);
                var24 = var25.makeSource;
                var22 = var23[var22];
                var27 = var26.bind(var3)(var22);
                var26 = var27.getChannelIconURL;
                var22 = {};
                var29 = var28.id;
                var22.id = var29;
                var29 = var28.icon;
                var22.icon = var29;
                var28 = var28.application_id;
                var22.applicationId = var28;
                var28 = 32;
                var22.size = var28;
                var22 = var26.bind(var27)(var22);
                var22 = var24.bind(var25)(var22);
                var18.source = var22;
                var22 = _closure1_slot0;
                var21 = var23[var21];
                var21 = var22.bind(var3)(var21);
                var21 = var21.AvatarSizes;
                var21 = var21.REFRESH_MEDIUM_32;
                var18.size = var21;
                var13 = var20.bind(var3)(var19, var18);
            case 820:
                var18 = var2 != var17;
                var2 = '';
                if (!var18) {
                    _fun110437_ip = 834;
                    continue _fun110437
                }
            case 831:
                var2 = var17;
            case 834:
                var11 = var2;
                var12 = var13;
                var5 = undefined;
                var4 = undefined;
                _fun110437_ip = 1230;
                continue _fun110437;
            case 849:
                var13 = _closure1_slot6;
                var2 = var13.getUser;
                var22 = var2.bind(var13)(var16);
                var16 = _closure1_slot8;
                var13 = _closure1_slot0;
                var17 = _closure1_slot2;
                var2 = 12;
                var2 = var17[var2];
                var2 = var13.bind(var3)(var2);
                var13 = var2.PressableOpacity;
                var2 = {
                    'importantForAccessibility': 'no-hide-descendants',
                    'accessibilityElementsHidden': true
                };
                var18 = function(arg0) { // Original name: onPress, environment: var0
                    _fun110440: for (var _fun110440_ip = 0;;) switch (_fun110440_ip) {
                        case 0:
                            var1 = arg0;
                            var0 = var1.stopPropagation;
                            var0 = var0.bind(var1)();
                            var2 = _closure2_slot1;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun110440_ip = 41;
                                continue _fun110440
                            }
                        case 26:
                            var2 = _closure2_slot1;
                            var1 = _closure2_slot3;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                        case 41:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2.onPress = var18;
                var18 = {
                    'padding': 8,
                    'margin': 4294967288
                };
                var2.style = var18;
                var18 = _closure1_slot1;
                var19 = 13;
                var17 = var17[var19];
                var18 = var18.bind(var3)(var17);
                var17 = {};
                var21 = null;
                var20 = var21 == var22;
                var23 = undefined;
                if (var20) {
                    _fun110437_ip = 977;
                    continue _fun110437
                }
            case 966:
                var20 = var22.getAvatarSource;
                var23 = var20.bind(var22)(var3);
            case 977:
                var24 = var21 != var23;
                var20 = null;
                if (!var24) {
                    _fun110437_ip = 989;
                    continue _fun110437
                }
            case 986:
                var20 = var23;
            case 989:
                var17.source = var20;
                var23 = _closure1_slot0;
                var20 = _closure1_slot2;
                var19 = var20[var19];
                var19 = var23.bind(var3)(var19);
                var19 = var19.AvatarSizes;
                var19 = var19.REFRESH_MEDIUM_32;
                var17.size = var19;
                var17 = var16.bind(var3)(var18, var17);
                var2.children = var17;
                var13 = var16.bind(var3)(var13, var2);
                var17 = _closure1_slot8;
                var19 = _closure1_slot1;
                var2 = 14;
                var2 = var20[var2];
                var16 = var19.bind(var3)(var2);
                var2 = {};
                var18 = 15;
                var18 = var20[var18];
                var19 = var19.bind(var3)(var18);
                var18 = var19.getGlobalName;
                var18 = var18.bind(var19)(var22);
                var2.nick = var18;
                var2.user = var22;
                var2 = var17.bind(var3)(var16, var2);
                var16 = var21 != var1;
                var1 = undefined;
                if (!var16) {
                    _fun110437_ip = 1214;
                    continue _fun110437
                }
            case 1111:
                var17 = {};
                var16 = 'viewProfile';
                var17.name = var16;
                var18 = _closure1_slot0;
                var23 = _closure1_slot2;
                var16 = 16;
                var19 = var23[var16];
                var19 = var18.bind(var3)(var19);
                var20 = var19.intl;
                var19 = var20.formatToPlainString;
                var16 = var23[var16];
                var16 = var18.bind(var3)(var16);
                var16 = var16.t;
                var18 = var16.uCenkh;
                var16 = {};
                var23 = var21 == var22;
                var21 = undefined;
                if (var23) {
                    _fun110437_ip = 1189;
                    continue _fun110437
                }
            case 1184:
                var21 = var22.tag;
            case 1189:
                var16.username = var21;
                var16 = var19.bind(var20)(var18, var16);
                var17.label = var16;
                var16 = new Array(1);
                var16[0] = var17;
                var1 = var16;
            case 1214:
                var4 = function(arg0) { // Original name: I, environment: var0
                    _fun110441: for (var _fun110441_ip = 0;;) switch (_fun110441_ip) {
                        case 0:
                            var0 = arg0;
                            var0 = var0.nativeEvent;
                            var1 = var0.actionName;
                            var0 = 'viewProfile';
                            var0 = var0 === var1;
                            if (!var0) {
                                _fun110441_ip = 41;
                                continue _fun110441
                            }
                        case 28:
                            var2 = _closure2_slot1;
                            var1 = null;
                            var0 = var1 !== var2;
                        case 41:
                            if (!var0) {
                                _fun110441_ip = 72;
                                continue _fun110441
                            }
                        case 44:
                            var2 = _closure2_slot1;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun110441_ip = 72;
                                continue _fun110441
                            }
                        case 57:
                            var2 = _closure2_slot1;
                            var1 = _closure2_slot3;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                        case 72:
                            var0 = undefined;
                            return var0;
                    }
                };
                var5 = var1;
                var12 = var13;
                var11 = var2;
            case 1230:
                var2 = _closure1_slot8;
                var1 = _closure1_slot0;
                var13 = _closure1_slot2;
                var0 = 20;
                var0 = var13[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.TableRow;
                var0 = {};
                var0.start = var15;
                var0.end = var14;
                var0.icon = var12;
                var0.label = var11;
                var12 = _closure1_slot1;
                var11 = 21;
                var11 = var13[var11];
                var12 = var12.bind(var3)(var11);
                var11 = {};
                var11.sendState = var8;
                var11.onPressSend = var6;
                var11 = var2.bind(var3)(var12, var11);
                var0.trailing = var11;
                var0.onPress = var6;
                var6 = null;
                var6 = var6 != var10;
                if (var6) {
                    _fun110437_ip = 1333;
                    continue _fun110437
                }
            case 1330:
                var6 = var9;
            case 1333:
                if (var6) {
                    _fun110437_ip = 1350;
                    continue _fun110437
                }
            case 1336:
                var7 = _closure1_slot7;
                var7 = var7.SENT;
                var6 = var8 === var7;
            case 1350:
                var0.disabled = var6;
                var0.accessibilityActions = var5;
                var0.onAccessibilityAction = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 22;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/activities/panel/native/ActivityInviteSheetRow.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1372, 1410, 1613, 3294, 33, 1297, 671, 566, 4755, 8291, 4865, 5414, 8160, 3195, 1234, 1417, 1607, 3900, 4861, 8359, 2]);