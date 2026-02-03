// modules/stage_channels/native/create_channel/AddMembersBody.tsx
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
        _fun65797: for (var _fun65797_ip = 0;;) switch (_fun65797_ip) {
            case 0:
                var6 = arg0;
                var3 = 'object';
                var0 = typeof var6;
                var1 = var6;
                if (!(var3 === var0)) {
                    _fun65797_ip = 119;
                    continue _fun65797
                }
            case 17:
                var1 = var6;
                if (!var1) {
                    _fun65797_ip = 119;
                    continue _fun65797
                }
            case 23:
                var0 = global;
                var2 = var0.Symbol;
                var2 = var2.toPrimitive;
                var5 = var6[var2];
                var4 = undefined;
                if (!(var4 === var5)) {
                    _fun65797_ip = 60;
                    continue _fun65797
                }
            case 47:
                var2 = var0.String;
                var1 = var2.bind(var4)(var6);
                _fun65797_ip = 119;
                continue _fun65797;
            case 60:
                var4 = var5.call;
                var2 = 'string';
                var4 = var4.bind(var5)(var6, var2);
                var2 = typeof var4;
                var1 = var4;
                if (!(var3 === var2)) {
                    _fun65797_ip = 119;
                    continue _fun65797
                }
            case 85:
                var3 = var0.TypeError;
                var0 = var3.prototype;
                var2 = Object.create(var0, {
                    constructor: {
                        value: var3
                    }
                });
                var8 = '@@toPrimitive must return a primitive value.';
                var9 = var2;
                var0 = new var9[var3](var8, var7);
                var0 = var0 instanceof Object ? var0 : var2;
                throw var0;
            case 119:
                var3 = 'symbol';
                var2 = typeof var1;
                var0 = var1;
                if (!(var3 !== var2)) {
                    _fun65797_ip = 136;
                    continue _fun65797
                }
            case 133:
                var0 = '' + var1;
            case 136:
                return var0;
        }
    };
    var _closure1_slot20 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var4 = var0.rowType;
        var3 = var0.id;
        var0 = global;
        var0 = var0.HermesInternal;
        var2 = var0.concat;
        var1 = '';
        var0 = ':';
        var0 = var2.bind(var1)(var4, var0, var3);
        return var0;
    };
    var _closure1_slot21 = var0;
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
    var6 = var3.View;
    var _closure1_slot7 = var6;
    var6 = var3.ScrollView;
    var _closure1_slot8 = var6;
    var3 = var3.SectionList;
    var _closure1_slot9 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot12 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.RowType;
    var _closure1_slot13 = var6;
    var3 = var3.MEMBER_REQUEST_COUNT;
    var _closure1_slot14 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Permissions;
    var _closure1_slot15 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot16 = var6;
    var6 = var3.Fragment;
    var _closure1_slot17 = var6;
    var3 = var3.jsxs;
    var _closure1_slot18 = var3;
    var3 = 10;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var8.paddingHorizontal = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_12;
    var8.paddingTop = var11;
    var3.inputContainer = var8;
    var8 = {};
    var11 = 'row';
    var8.flexDirection = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var8.paddingHorizontal = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_12;
    var8.paddingTop = var11;
    var3.inputDescContainer = var8;
    var8 = {
        'flex': 1,
        'textAlign': 'center'
    };
    var3.inputDescText = var8;
    var8 = {
        'height': 12,
        'width': 12
    };
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.round;
    var8.borderRadius = var11;
    var3.tagRoleColor = var8;
    var8 = {
        'width': 16,
        'height': 16
    };
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.sm;
    var8.borderRadius = var11;
    var3.tagAvatar = var8;
    var8 = {
        'backgroundColor': 'transparent',
        'paddingTop': 40
    };
    var3.emptyState = var8;
    var8 = {};
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.TEXT_DEFAULT;
    var8.color = var11;
    var3.emptyStateText = var8;
    var8 = {};
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_BASE_LOW;
    var8.backgroundColor = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_12;
    var8.paddingVertical = var9;
    var3.sectionRowWrapper = var8;
    var8 = {
        'marginHorizontal': 16,
        'marginVertical': 8
    };
    var3.adminWarning = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot19 = var3;
    var3 = 28;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/stage_channels/native/create_channel/AddMembersBody.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun65799: for (var _fun65799_ip = 0;;) switch (_fun65799_ip) {
            case 0:
                var0 = arg0;
                var19 = var0.channel;
                var18 = var0.guild;
                var _closure2_slot0 = var18;
                var11 = var0.pendingAdditions;
                var _closure2_slot1 = var11;
                var1 = var0.setPendingAdditions;
                var _closure2_slot2 = var1;
                var16 = var0.permission;
                var3 = undefined;
                if (!(var16 === var3)) {
                    _fun65799_ip = 80;
                    continue _fun65799
                }
            case 51:
                var2 = _closure1_slot2;
                var4 = _closure1_slot3;
                var1 = 12;
                var1 = var4[var1];
                var1 = var2.bind(var3)(var1);
                var16 = var1.NONE;
            case 80:
                var22 = var0.inputDesc;
                var0 = var0.inActionSheet;
                var _closure2_slot3 = var3;
                var _closure2_slot4 = var3;
                var _closure2_slot5 = var3;
                var _closure2_slot6 = var3;
                var _closure2_slot7 = var3;
                var1 = function arg0, arg1() {
                    _fun65800: for (var _fun65800_ip = 0;;) switch (_fun65800_ip) {
                        case 0:
                            var3 = arg0;
                            var1 = arg1;
                            var0 = var3;
                            if (!var1) {
                                _fun65800_ip = 25;
                                continue _fun65800
                            }
                        case 12:
                            var2 = var3.slice;
                            var1 = 1;
                            var0 = var2.bind(var3)(var1);
                        case 25:
                            return var0;
                    }
                };
                var _closure2_slot8 = var1;
                var9 = function arg0() {
                    var2 = _closure2_slot8;
                    var3 = _closure2_slot6;
                    var1 = var3.trim;
                    var1 = var1.bind(var3)();
                    var0 = _closure2_slot4;
                    var5 = undefined;
                    var4 = var2.bind(var5)(var1, var0);
                    var0 = global;
                    var3 = var0.RegExp;
                    var2 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var1 = 15;
                    var1 = var6[var1];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.escape;
                    var2 = var1.bind(var2)(var4);
                    var0 = var0.HermesInternal;
                    var1 = var0.concat;
                    var0 = '';
                    var8 = var1.bind(var0)(var2);
                    var0 = var3.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var3
                        }
                    });
                    var7 = 'i';
                    var9 = var1;
                    var0 = new var9[var3](var8, var7, var6);
                    var2 = var0 instanceof Object ? var0 : var1;
                    var1 = var2.test;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1 = _closure1_slot19;
                var13 = var1.bind(var3)();
                _closure2_slot3 = var13;
                var2 = _closure1_slot1;
                var17 = _closure1_slot3;
                var1 = 13;
                var1 = var17[var1];
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var4 = !var0;
                var1.isKeyboardAwareOnAndroid = var4;
                var1 = var2.bind(var3)(var1);
                var14 = var1.insets;
                var8 = _closure1_slot0;
                var4 = 14;
                var1 = var17[var4];
                var6 = var8.bind(var3)(var1);
                var5 = var6.useStateFromStores;
                var1 = _closure1_slot11;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var10
                    var2 = _closure1_slot11;
                    var1 = var2.getSortedRoles;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var6 = var5.bind(var6)(var2, var1);
                var23 = _closure1_slot6;
                var2 = var23.useState;
                var1 = false;
                var1 = var2.bind(var23)(var1);
                var21 = _closure1_slot5;
                var15 = 2;
                var5 = var21.bind(var3)(var1, var15);
                var2 = 0;
                var1 = var5[var2];
                _closure2_slot4 = var1;
                var20 = 1;
                var5 = var5[var20];
                _closure2_slot5 = var5;
                var7 = var23.useState;
                var5 = '';
                var7 = var7.bind(var23)(var5);
                var7 = var21.bind(var3)(var7, var15);
                var15 = var7[var2];
                _closure2_slot6 = var15;
                var7 = var7[var20];
                _closure2_slot7 = var7;
                var21 = _closure1_slot2;
                var7 = 12;
                var7 = var17[var7];
                var23 = var21.bind(var3)(var7);
                var21 = var23.canEveryoneRole;
                var7 = _closure1_slot15;
                var7 = var7.ADMINISTRATOR;
                var7 = var21.bind(var23)(var7, var18);
                var4 = var17[var4];
                var21 = var8.bind(var3)(var4);
                var17 = var21.useStateFromStoresArray;
                var4 = _closure1_slot10;
                var8 = new Array(1);
                var8[0] = var4;
                var4 = function() { // Environment: var10
                    var2 = _closure1_slot10;
                    var1 = var2.getMemberIds;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var8 = var17.bind(var21)(var8, var4);
                if (var1) {
                    _fun65799_ip = 517;
                    continue _fun65799
                }
            case 399:
                var4 = _closure1_slot2;
                var1 = _closure1_slot3;
                var17 = 16;
                var1 = var1[var17];
                var4 = var4.bind(var3)(var1);
                var1 = var4.getRolesRowsWithPermissionDisabled;
                var31 = var4;
                var30 = var18;
                var29 = var6;
                var28 = var19;
                var27 = var16;
                var26 = var9;
                var4 = var31[var1](var30, var29, var28, var27, var26, var25);
                var1 = var4.length;
                var1 = var2 === var1;
                if (!var1) {
                    _fun65799_ip = 473;
                    continue _fun65799
                }
            case 459:
                var21 = var15.trim;
                var21 = var21.bind(var15)();
                var1 = var5 === var21;
            case 473:
                if (!var1) {
                    _fun65799_ip = 485;
                    continue _fun65799
                }
            case 476:
                var6 = var6.length;
                var1 = var20 === var6;
            case 485:
                if (!var1) {
                    _fun65799_ip = 521;
                    continue _fun65799
                }
            case 488:
                var6 = _closure1_slot2;
                var1 = _closure1_slot3;
                var1 = var1[var17];
                var6 = var6.bind(var3)(var1);
                var1 = var6.getNoRolesRow;
                var4 = var1.bind(var6)();
                _fun65799_ip = 521;
                continue _fun65799;
            case 517:
                var4 = new Array(0);
            case 521:
                var6 = _closure1_slot2;
                var17 = _closure1_slot3;
                var1 = 16;
                var1 = var17[var1];
                var6 = var6.bind(var3)(var1);
                var1 = var6.getMembersRows;
                var31 = var6;
                var30 = var8;
                var29 = var19;
                var28 = var18;
                var27 = var16;
                var26 = var9;
                var1 = var31[var1](var30, var29, var28, var27, var26, var25);
                var9 = new Array(0);
                var8 = var9.push;
                var6 = {};
                var20 = _closure1_slot0;
                var16 = 19;
                var18 = var17[var16];
                var18 = var20.bind(var3)(var18);
                var21 = var18.intl;
                var19 = var21.string;
                var18 = var17[var16];
                var18 = var20.bind(var3)(var18);
                var18 = var18.t;
                var18 = var18["LPJmL/"];
                var18 = var19.bind(var21)(var18);
                var6.title = var18;
                var6.data = var4;
                var6 = var8.bind(var9)(var6);
                var8 = var9.push;
                var6 = {};
                var18 = var17[var16];
                var18 = var20.bind(var3)(var18);
                var19 = var18.intl;
                var18 = var19.string;
                var17 = var17[var16];
                var17 = var20.bind(var3)(var17);
                var17 = var17.t;
                var17 = var17["9Oq93m"];
                var17 = var18.bind(var19)(var17);
                var6.title = var17;
                var6.data = var1;
                var6 = var8.bind(var9)(var6);
                var6 = global;
                var8 = var6.Object;
                var6 = var8.values;
                var11 = var6.bind(var8)(var11);
                var8 = var11.map;
                var6 = function(arg0) { // Environment: var10
                    var0 = arg0;
                    var3 = var0.display;
                    var1 = var0.row;
                    var0 = {};
                    var4 = var0;
                    var2 = copyDataProperties(var4, var3);
                    var2 = var1.id;
                    var1 = 'id';
                    var0[var1] = var2;
                    return var0;
                };
                var20 = var8.bind(var11)(var6);
                var5 = var5 !== var15;
                if (!var5) {
                    _fun65799_ip = 759;
                    continue _fun65799
                }
            case 750:
                var4 = var4.length;
                var5 = var2 === var4;
            case 759:
                if (!var5) {
                    _fun65799_ip = 771;
                    continue _fun65799
                }
            case 762:
                var1 = var1.length;
                var5 = var2 === var1;
            case 771:
                if (var0) {
                    _fun65799_ip = 780;
                    continue _fun65799
                }
            case 774:
                var8 = _closure1_slot8;
                _fun65799_ip = 806;
                continue _fun65799;
            case 780:
                var2 = _closure1_slot0;
                var4 = _closure1_slot3;
                var1 = 21;
                var1 = var4[var1];
                var1 = var2.bind(var3)(var1);
                var8 = var1.BottomSheetScrollView;
            case 806:
                if (var0) {
                    _fun65799_ip = 815;
                    continue _fun65799
                }
            case 809:
                var6 = _closure1_slot9;
                _fun65799_ip = 841;
                continue _fun65799;
            case 815:
                var1 = _closure1_slot0;
                var2 = _closure1_slot3;
                var0 = 21;
                var0 = var2[var0];
                var0 = var1.bind(var3)(var0);
                var6 = var0.BottomSheetSectionList;
            case 841:
                var2 = _closure1_slot18;
                var1 = _closure1_slot17;
                var0 = {};
                var17 = _closure1_slot16;
                var11 = _closure1_slot7;
                var4 = {};
                var18 = var13.inputContainer;
                var4.style = var18;
                var19 = _closure1_slot1;
                var21 = _closure1_slot3;
                var18 = 22;
                var18 = var21[var18];
                var19 = var19.bind(var3)(var18);
                var18 = {};
                var25 = _closure1_slot0;
                var23 = var21[var16];
                var23 = var25.bind(var3)(var23);
                var24 = var23.intl;
                var23 = var24.string;
                var21 = var21[var16];
                var21 = var25.bind(var3)(var21);
                var21 = var21.t;
                var21 = var21.TVZdKh;
                var21 = var23.bind(var24)(var21);
                var18.placeholder = var21;
                var18.tags = var20;
                var20 = function arg0() {
                    var4 = arg0;
                    var0 = var4.trim;
                    var9 = var0.bind(var4)();
                    var1 = var9.charAt;
                    var0 = 0;
                    var1 = var1.bind(var9)(var0);
                    var0 = '@';
                    var2 = var0 === var1;
                    var5 = _closure1_slot1;
                    var1 = _closure1_slot3;
                    var0 = 23;
                    var1 = var1[var0];
                    var0 = undefined;
                    var8 = var5.bind(var0)(var1);
                    var7 = var8.requestMembers;
                    var5 = _closure2_slot0;
                    var6 = var5.id;
                    var5 = _closure2_slot8;
                    var5 = var5.bind(var0)(var9, var2);
                    var3 = _closure1_slot14;
                    var3 = var7.bind(var8)(var6, var5, var3);
                    var3 = _closure2_slot7;
                    var3 = var3.bind(var0)(var4);
                    var1 = _closure2_slot5;
                    var1 = var1.bind(var0)(var2);
                    return var0;
                };
                var18.onChangeText = var20;
                var20 = function arg0() {
                    var0 = global;
                    var4 = var0.Object;
                    var3 = var4.keys;
                    var2 = _closure2_slot1;
                    var3 = var3.bind(var4)(var2);
                    var2 = arg0;
                    var2 = var3[var2];
                    var _closure3_slot0 = var2;
                    var2 = _closure2_slot2;
                    var0 = undefined;
                    var1 = function(arg0) { // Environment: var1
                        var3 = arg0;
                        var1 = _closure3_slot0;
                        var0 = var3[var1];
                        var2 = _closure1_slot4;
                        var4 = new Array(1);
                        var4[0] = var1;
                        var1 = var4.map;
                        var0 = _closure1_slot20;
                        var1 = var1.bind(var4)(var0);
                        var0 = undefined;
                        var0 = var2.bind(var0)(var3, var1);
                        return var0;
                    };
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var18.onRemove = var20;
                var20 = true;
                var18.autoFocus = var20;
                var18 = var17.bind(var3)(var19, var18);
                var4.children = var18;
                var11 = var17.bind(var3)(var11, var4);
                var4 = new Array(4);
                var4[0] = var11;
                var11 = null;
                var17 = var11 != var22;
                if (!var17) {
                    _fun65799_ip = 1106;
                    continue _fun65799
                }
            case 1015:
                var19 = _closure1_slot16;
                var18 = _closure1_slot7;
                var17 = {};
                var20 = var13.inputDescContainer;
                var17.style = var20;
                var21 = _closure1_slot0;
                var23 = _closure1_slot3;
                var20 = 24;
                var20 = var23[var20];
                var20 = var21.bind(var3)(var20);
                var21 = var20.Text;
                var20 = {
                    'style': null,
                    'variant': 'text-xs/medium',
                    'color': 'text-default'
                };
                var23 = var13.inputDescText;
                var20.style = var23;
                var20.children = var22;
                var20 = var19.bind(var3)(var21, var20);
                var17.children = var20;
                var11 = var19.bind(var3)(var18, var17);
            case 1106:
                var4[1] = var11;
                if (!var7) {
                    _fun65799_ip = 1252;
                    continue _fun65799
                }
            case 1116:
                var18 = _closure1_slot16;
                var17 = _closure1_slot7;
                var11 = {};
                var19 = var13.adminWarning;
                var11.style = var19;
                var20 = _closure1_slot1;
                var21 = _closure1_slot3;
                var22 = 25;
                var19 = var21[var22];
                var20 = var20.bind(var3)(var19);
                var19 = {};
                var24 = _closure1_slot0;
                var22 = var21[var22];
                var22 = var24.bind(var3)(var22);
                var22 = var22.HelpMessageTypes;
                var22 = var22.WARNING;
                var19.messageType = var22;
                var22 = var21[var16];
                var22 = var24.bind(var3)(var22);
                var23 = var22.intl;
                var22 = var23.string;
                var21 = var21[var16];
                var21 = var24.bind(var3)(var21);
                var21 = var21.t;
                var21 = var21["5f3HIC"];
                var21 = var22.bind(var23)(var21);
                var19.children = var21;
                var19 = var18.bind(var3)(var20, var19);
                var11.children = var19;
                var7 = var18.bind(var3)(var17, var11);
            case 1252:
                var4[2] = var7;
                var7 = _closure1_slot16;
                if (var5) {
                    _fun65799_ip = 1391;
                    continue _fun65799
                }
            case 1266:
                var5 = {};
                var11 = {};
                var18 = _closure1_slot1;
                var19 = _closure1_slot3;
                var17 = 11;
                var20 = var19[var17];
                var20 = var18.bind(var3)(var20);
                var20 = var20.spacing;
                var20 = var20.PX_16;
                var11.paddingHorizontal = var20;
                var17 = var19[var17];
                var17 = var18.bind(var3)(var17);
                var17 = var17.spacing;
                var17 = var17.PX_16;
                var14 = var14.bottom;
                var14 = var17 + var14;
                var11.paddingBottom = var14;
                var5.contentContainerStyle = var11;
                var11 = function arg0() {
                    _fun65808: for (var _fun65808_ip = 0;;) switch (_fun65808_ip) {
                        case 0:
                            var0 = arg0;
                            var10 = var0.item;
                            var _closure3_slot0 = var10;
                            var6 = var0.index;
                            var5 = var0.section;
                            var3 = _closure1_slot16;
                            var1 = _closure1_slot1;
                            var2 = _closure1_slot3;
                            var0 = 18;
                            var0 = var2[var0];
                            var2 = undefined;
                            var1 = var1.bind(var2)(var0);
                            var0 = {};
                            var7 = 0;
                            var7 = var7 === var6;
                            if (!var7) {
                                _fun65808_ip = 128;
                                continue _fun65808
                            }
                        case 64:
                            var11 = var5.title;
                            var14 = _closure1_slot0;
                            var15 = _closure1_slot3;
                            var8 = 19;
                            var12 = var15[var8];
                            var12 = var14.bind(var2)(var12);
                            var13 = var12.intl;
                            var12 = var13.string;
                            var8 = var15[var8];
                            var8 = var14.bind(var2)(var8);
                            var8 = var8.t;
                            var8 = var8["LPJmL/"];
                            var8 = var12.bind(var13)(var8);
                            var7 = var11 === var8;
                        case 128:
                            var0.start = var7;
                            var5 = var5.data;
                            var7 = var5.length;
                            var5 = 1;
                            var5 = var7 - var5;
                            var5 = var6 === var5;
                            var0.end = var5;
                            var5 = _closure2_slot0;
                            var5 = var5.id;
                            var0.guildId = var5;
                            var0.item = var10;
                            var5 = var10.disabled;
                            var0.disabled = var5;
                            var4 = function() {
                                var2 = _closure3_slot0;
                                var1 = function arg0() {
                                    _fun65810: for (var _fun65810_ip = 0;;) switch (_fun65810_ip) {
                                        case 0:
                                            var1 = arg0;
                                            var _closure5_slot0 = var1;
                                            var2 = var1.rowType;
                                            var1 = _closure1_slot13;
                                            var1 = var1.EMPTY_STATE;
                                            if (!(var2 !== var1)) {
                                                _fun65810_ip = 53;
                                                continue _fun65810
                                            }
                                        case 32:
                                            var2 = _closure2_slot2;
                                            var1 = undefined;
                                            var0 = function(arg0) { // Environment: var0
                                                _fun65811: for (var _fun65811_ip = 0;;) switch (_fun65811_ip) {
                                                    case 0:
                                                        var0 = {};
                                                        var12 = arg0;
                                                        var13 = var0;
                                                        var1 = copyDataProperties(var13, var12);
                                                        var2 = _closure1_slot21;
                                                        var1 = _closure5_slot0;
                                                        var8 = undefined;
                                                        var1 = var2.bind(var8)(var1);
                                                        var2 = var1 in var0;
                                                        if (var2) {
                                                            _fun65811_ip = 399;
                                                            continue _fun65811
                                                        }
                                                    case 43:
                                                        var2 = _closure5_slot0;
                                                        var4 = var2.rowType;
                                                        var2 = _closure1_slot13;
                                                        var2 = var2.ROLE;
                                                        if (!(var4 !== var2)) {
                                                            _fun65811_ip = 293;
                                                            continue _fun65811
                                                        }
                                                    case 70:
                                                        var2 = _closure5_slot0;
                                                        var4 = var2.rowType;
                                                        var2 = _closure1_slot13;
                                                        var2 = var2.ADMINISTRATOR;
                                                        if (!(var4 !== var2)) {
                                                            _fun65811_ip = 293;
                                                            continue _fun65811
                                                        }
                                                    case 97:
                                                        var2 = _closure5_slot0;
                                                        var4 = var2.rowType;
                                                        var2 = _closure1_slot13;
                                                        var2 = var2.MEMBER;
                                                        if (!(var4 !== var2)) {
                                                            _fun65811_ip = 150;
                                                            continue _fun65811
                                                        }
                                                    case 121:
                                                        var2 = _closure5_slot0;
                                                        var6 = var2.rowType;
                                                        var2 = _closure1_slot13;
                                                        var2 = var2.OWNER;
                                                        var4 = undefined;
                                                        if (!(var6 === var2)) {
                                                            _fun65811_ip = 372;
                                                            continue _fun65811
                                                        }
                                                    case 150:
                                                        var7 = _closure1_slot12;
                                                        var6 = var7.getUser;
                                                        var2 = _closure5_slot0;
                                                        var2 = var2.id;
                                                        var10 = var6.bind(var7)(var2);
                                                        var2 = null;
                                                        var2 = var2 != var10;
                                                        var4 = undefined;
                                                        if (!var2) {
                                                            _fun65811_ip = 372;
                                                            continue _fun65811
                                                        }
                                                    case 188:
                                                        var2 = {};
                                                        var6 = _closure5_slot0;
                                                        var6 = var6.name;
                                                        var2.text = var6;
                                                        var9 = _closure1_slot16;
                                                        var7 = _closure1_slot1;
                                                        var11 = _closure1_slot3;
                                                        var6 = 17;
                                                        var6 = var11[var6];
                                                        var7 = var7.bind(var8)(var6);
                                                        var6 = {};
                                                        var6.user = var10;
                                                        var11 = _closure2_slot0;
                                                        var11 = var11.id;
                                                        var6.guildId = var11;
                                                        var11 = _closure2_slot3;
                                                        var11 = var11.tagAvatar;
                                                        var6.avatarStyle = var11;
                                                        var10 = _closure2_slot3;
                                                        var10 = var10.tagAvatar;
                                                        var6.style = var10;
                                                        var6 = var9.bind(var8)(var7, var6);
                                                        var2.icon = var6;
                                                        var4 = var2;
                                                        _fun65811_ip = 372;
                                                        continue _fun65811;
                                                    case 293:
                                                        var2 = {};
                                                        var11 = _closure5_slot0;
                                                        var6 = var11.name;
                                                        var2.text = var6;
                                                        var7 = _closure1_slot16;
                                                        var6 = _closure1_slot7;
                                                        var5 = {};
                                                        var9 = _closure2_slot3;
                                                        var10 = var9.tagRoleColor;
                                                        var9 = new Array(2);
                                                        var9[0] = var10;
                                                        var10 = {};
                                                        var11 = var11.colorString;
                                                        var10.backgroundColor = var11;
                                                        var9[1] = var10;
                                                        var5.style = var9;
                                                        var5 = var7.bind(var8)(var6, var5);
                                                        var2.icon = var5;
                                                        var4 = var2;
                                                    case 372:
                                                        var2 = null;
                                                        if (!(var2 != var4)) {
                                                            _fun65811_ip = 403;
                                                            continue _fun65811
                                                        }
                                                    case 378:
                                                        var2 = {};
                                                        var2.display = var4;
                                                        var3 = _closure5_slot0;
                                                        var2.row = var3;
                                                        var0[var1] = var2;
                                                        _fun65811_ip = 403;
                                                        continue _fun65811;
                                                    case 399:
                                                        var1 = delete var0[var1];
                                                    case 403:
                                                        return var0;
                                                }
                                            };
                                            var0 = var2.bind(var1)(var0);
                                        case 53:
                                            var0 = undefined;
                                            return var0;
                                    }
                                };
                                var0 = undefined;
                                var1 = var1.bind(var0)(var2);
                                return var0;
                            };
                            var0.onPress = var4;
                            var5 = var10.disabled;
                            var4 = null;
                            if (!var5) {
                                _fun65808_ip = 264;
                                continue _fun65808
                            }
                        case 207:
                            var12 = _closure1_slot0;
                            var13 = _closure1_slot3;
                            var5 = 19;
                            var6 = var13[var5];
                            var6 = var12.bind(var2)(var6);
                            var11 = var6.intl;
                            var6 = var11.string;
                            var5 = var13[var5];
                            var5 = var12.bind(var2)(var5);
                            var5 = var5.t;
                            var5 = var5.MVVOCv;
                            var4 = var6.bind(var11)(var5);
                        case 264:
                            var0.subLabel = var4;
                            var5 = var10.disabled;
                            var4 = null;
                            if (var5) {
                                _fun65808_ip = 361;
                                continue _fun65808
                            }
                        case 279:
                            var6 = var10.rowType;
                            var5 = _closure1_slot13;
                            var5 = var5.EMPTY_STATE;
                            var4 = null;
                            if (!(var6 !== var5)) {
                                _fun65808_ip = 361;
                                continue _fun65808
                            }
                        case 301:
                            var7 = _closure1_slot16;
                            var6 = _closure1_slot0;
                            var11 = _closure1_slot3;
                            var5 = 20;
                            var5 = var11[var5];
                            var5 = var6.bind(var2)(var5);
                            var6 = var5.FormCheckbox;
                            var5 = {};
                            var9 = _closure1_slot21;
                            var9 = var9.bind(var2)(var10);
                            var8 = _closure2_slot1;
                            var8 = var9 in var8;
                            var5.checked = var8;
                            var4 = var7.bind(var2)(var6, var5);
                        case 361:
                            var0.trailing = var4;
                            var0 = var3.bind(var2)(var1, var0);
                            return var0;
                    }
                };
                var5.renderItem = var11;
                var10 = function arg0() {
                    _fun65812: for (var _fun65812_ip = 0;;) switch (_fun65812_ip) {
                        case 0:
                            var0 = arg0;
                            var0 = var0.section;
                            var5 = var0.title;
                            var0 = var0.data;
                            var1 = var0.length;
                            var0 = 0;
                            var1 = var1 > var0;
                            var0 = null;
                            if (!var1) {
                                _fun65812_ip = 111;
                                continue _fun65812
                            }
                        case 34:
                            var4 = _closure1_slot16;
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var1 = 24;
                            var1 = var3[var1];
                            var3 = undefined;
                            var1 = var2.bind(var3)(var1);
                            var2 = var1.Text;
                            var1 = {
                                'style': null,
                                'maxFontSizeMultiplier': 2,
                                'accessibilityRole': 'header',
                                'variant': 'text-sm/semibold',
                                'color': 'interactive-text-default'
                            };
                            var6 = _closure2_slot3;
                            var6 = var6.sectionRowWrapper;
                            var1.style = var6;
                            var1.children = var5;
                            var0 = var4.bind(var3)(var2, var1);
                        case 111:
                            return var0;
                    }
                };
                var5.renderSectionHeader = var10;
                var5.sections = var9;
                var9 = 'always';
                var5.keyboardShouldPersistTaps = var9;
                var5 = var7.bind(var3)(var6, var5);
                _fun65799_ip = 1535;
                continue _fun65799;
            case 1391:
                var6 = {};
                var10 = _closure1_slot1;
                var11 = _closure1_slot3;
                var9 = 26;
                var9 = var11[var9];
                var10 = var10.bind(var3)(var9);
                var9 = {};
                var12 = _closure1_slot0;
                var14 = 27;
                var14 = var11[var14];
                var14 = var12.bind(var3)(var14);
                var14 = var14.NoResultsAlt;
                var9.Illustration = var14;
                var14 = var13.emptyState;
                var9.style = var14;
                var13 = var13.emptyStateText;
                var9.bodyStyle = var13;
                var13 = var11[var16];
                var13 = var12.bind(var3)(var13);
                var14 = var13.intl;
                var13 = var14.format;
                var11 = var11[var16];
                var11 = var12.bind(var3)(var11);
                var11 = var11.t;
                var12 = var11.ErpIY3;
                var11 = {};
                var11.query = var15;
                var11 = var13.bind(var14)(var12, var11);
                var9.body = var11;
                var9 = var7.bind(var3)(var10, var9);
                var6.children = var9;
                var5 = var7.bind(var3)(var8, var6);
            case 1535:
                var4[3] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [29, 57, 31, 27, 1672, 1665, 1613, 5914, 483, 33, 1297, 671, 3087, 4888, 566, 3317, 8128, 5447, 8133, 1234, 5435, 4928, 8137, 5599, 3932, 6437, 7353, 8140, 2]);