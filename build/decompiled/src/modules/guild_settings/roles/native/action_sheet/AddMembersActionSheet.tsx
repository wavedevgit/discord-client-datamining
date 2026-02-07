// modules/guild_settings/roles/native/action_sheet/AddMembersActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var0 = function arg0() {
        _fun116545: for (var _fun116545_ip = 0;;) switch (_fun116545_ip) {
            case 0:
                var6 = arg0;
                var3 = 'object';
                var0 = typeof var6;
                var1 = var6;
                if (!(var3 === var0)) {
                    _fun116545_ip = 119;
                    continue _fun116545
                }
            case 17:
                var1 = var6;
                if (!var1) {
                    _fun116545_ip = 119;
                    continue _fun116545
                }
            case 23:
                var0 = global;
                var2 = var0.Symbol;
                var2 = var2.toPrimitive;
                var5 = var6[var2];
                var4 = undefined;
                if (!(var4 === var5)) {
                    _fun116545_ip = 60;
                    continue _fun116545
                }
            case 47:
                var2 = var0.String;
                var1 = var2.bind(var4)(var6);
                _fun116545_ip = 119;
                continue _fun116545;
            case 60:
                var4 = var5.call;
                var2 = 'string';
                var4 = var4.bind(var5)(var6, var2);
                var2 = typeof var4;
                var1 = var4;
                if (!(var3 === var2)) {
                    _fun116545_ip = 119;
                    continue _fun116545
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
                    _fun116545_ip = 136;
                    continue _fun116545
                }
            case 133:
                var0 = '' + var1;
            case 136:
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var1 = function arg0() {
        _fun116546: for (var _fun116546_ip = 0;;) switch (_fun116546_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.guild;
                var _closure2_slot0 = var0;
                var0 = var1.role;
                var _closure2_slot1 = var0;
                var0 = var1.members;
                var _closure2_slot2 = var0;
                var8 = var1.pendingAdditions;
                var _closure2_slot3 = var8;
                var2 = var1.setPendingAdditions;
                var _closure2_slot4 = var2;
                var22 = var1.autoFocusSearch;
                var20 = var1.inActionSheet;
                var1 = var1.maxCount;
                var _closure2_slot5 = var1;
                var1 = _closure1_slot11;
                var3 = undefined;
                var11 = var1.bind(var3)();
                var _closure2_slot6 = var11;
                var2 = _closure1_slot5;
                var1 = var2.useState;
                var9 = '';
                var4 = var1.bind(var2)(var9);
                var2 = _closure1_slot4;
                var1 = 2;
                var2 = var2.bind(var3)(var4, var1);
                var18 = 0;
                var14 = var2[var18];
                var _closure2_slot7 = var14;
                var1 = 1;
                var1 = var2[var1];
                var _closure2_slot8 = var1;
                var2 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 8;
                var1 = var4[var1];
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var4 = !var20;
                var1.isKeyboardAwareOnAndroid = var4;
                var1 = var2.bind(var3)(var1);
                var19 = var1.insets;
                var4 = _closure1_slot5;
                var2 = var4.useMemo;
                var1 = new Array(2);
                var1[0] = var0;
                var1[1] = var14;
                var0 = function() { // Environment: var13
                    var1 = function arg0() {
                        var0 = global;
                        var3 = var0.RegExp;
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 9;
                        var1 = var1[var0];
                        var0 = undefined;
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.escape;
                        var0 = _closure2_slot7;
                        var5 = var1.bind(var2)(var0);
                        var0 = var3.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var3
                            }
                        });
                        var4 = 'i';
                        var6 = var1;
                        var0 = new var6[var3](var5, var4, var3);
                        var2 = var0 instanceof Object ? var0 : var1;
                        var1 = var2.test;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var _closure3_slot0 = var1;
                    var2 = _closure2_slot2;
                    var1 = var2.filter;
                    var0 = function(arg0) { // Environment: var0
                        _fun116549: for (var _fun116549_ip = 0;;) switch (_fun116549_ip) {
                            case 0:
                                var1 = arg0;
                                var4 = _closure3_slot0;
                                var0 = var1.name;
                                var3 = undefined;
                                var0 = var4.bind(var3)(var0);
                                if (var0) {
                                    _fun116549_ip = 40;
                                    continue _fun116549
                                }
                            case 25:
                                var2 = _closure3_slot0;
                                var1 = var1.userTag;
                                var0 = var2.bind(var3)(var1);
                            case 40:
                                return var0;
                        }
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var12 = var2.bind(var4)(var0, var1);
                var _closure2_slot9 = var12;
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 13;
                var0 = var2[var0];
                var0 = var1.bind(var3)(var0);
                if (var20) {
                    _fun116546_ip = 255;
                    continue _fun116546
                }
            case 247:
                var7 = var0.FlashList;
                _fun116546_ip = 261;
                continue _fun116546;
            case 255:
                var7 = var0.BottomSheetFlashList;
            case 261:
                var2 = _closure1_slot10;
                var1 = _closure1_slot9;
                var0 = {};
                var6 = _closure1_slot8;
                var5 = _closure1_slot6;
                var4 = {};
                var15 = var11.inputContainer;
                var4.style = var15;
                var21 = _closure1_slot8;
                var16 = _closure1_slot1;
                var23 = _closure1_slot2;
                var15 = 14;
                var15 = var23[var15];
                var17 = var16.bind(var3)(var15);
                var16 = {};
                var26 = _closure1_slot0;
                var15 = 15;
                var24 = var23[var15];
                var24 = var26.bind(var3)(var24);
                var25 = var24.intl;
                var24 = var25.string;
                var23 = var23[var15];
                var23 = var26.bind(var3)(var23);
                var23 = var23.t;
                var23 = var23.vMiCaQ;
                var23 = var24.bind(var25)(var23);
                var16.placeholder = var23;
                var23 = global;
                var24 = var23.Object;
                var23 = var24.values;
                var25 = var23.bind(var24)(var8);
                var24 = var25.map;
                var23 = function(arg0) { // Environment: var13
                    var0 = arg0;
                    var3 = var0.display;
                    var0 = var0.row;
                    var2 = var0.id;
                    var0 = {};
                    var4 = var0;
                    var1 = copyDataProperties(var4, var3);
                    var1 = 'id';
                    var0[var1] = var2;
                    return var0;
                };
                var23 = var24.bind(var25)(var23);
                var16.tags = var23;
                var23 = function arg0() {
                    var1 = arg0;
                    var0 = var1.trim;
                    var1 = var0.bind(var1)();
                    var0 = var1.toLowerCase;
                    var2 = var0.bind(var1)();
                    var4 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var0 = 16;
                    var1 = var8[var0];
                    var0 = undefined;
                    var6 = var4.bind(var0)(var1);
                    var5 = var6.requestMembers;
                    var4 = _closure2_slot0;
                    var4 = var4.id;
                    var7 = _closure1_slot0;
                    var3 = 17;
                    var3 = var8[var3];
                    var3 = var7.bind(var0)(var3);
                    var3 = var3.ADD_MEMBER_QUERY_LIMIT;
                    var3 = var5.bind(var6)(var4, var2, var3);
                    var1 = _closure2_slot8;
                    var1 = var1.bind(var0)(var2);
                    return var0;
                };
                var16.onChangeText = var23;
                var23 = function arg0() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 18;
                    var2 = var2[var0];
                    var0 = undefined;
                    var5 = var3.bind(var0)(var2);
                    var4 = var5.keys;
                    var3 = _closure2_slot3;
                    var4 = var4.bind(var5)(var3);
                    var3 = arg0;
                    var3 = var4[var3];
                    var _closure3_slot0 = var3;
                    var2 = _closure2_slot4;
                    var1 = function(arg0) { // Environment: var1
                        var3 = arg0;
                        var1 = _closure3_slot0;
                        var0 = var3[var1];
                        var2 = _closure1_slot3;
                        var4 = new Array(1);
                        var4[0] = var1;
                        var1 = var4.map;
                        var0 = _closure1_slot12;
                        var1 = var1.bind(var4)(var0);
                        var0 = undefined;
                        var0 = var2.bind(var0)(var3, var1);
                        return var0;
                    };
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var16.onRemove = var23;
                var16.autoFocus = var22;
                var16.inActionSheet = var20;
                var16 = var21.bind(var3)(var17, var16);
                var4.children = var16;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var5 = var12.length;
                if (!(var18 !== var5)) {
                    _fun116546_ip = 645;
                    continue _fun116546
                }
            case 485:
                var6 = _closure1_slot8;
                var5 = {};
                var16 = {};
                var21 = _closure1_slot1;
                var22 = _closure1_slot2;
                var17 = 7;
                var23 = var22[var17];
                var23 = var21.bind(var3)(var23);
                var23 = var23.spacing;
                var23 = var23.PX_16;
                var16.paddingHorizontal = var23;
                var23 = var22[var17];
                var23 = var21.bind(var3)(var23);
                var23 = var23.spacing;
                var23 = var23.PX_12;
                var16.paddingTop = var23;
                var17 = var22[var17];
                var17 = var21.bind(var3)(var17);
                var17 = var17.spacing;
                var17 = var17.PX_12;
                var18 = 0;
                if (!var20) {
                    _fun116546_ip = 582;
                    continue _fun116546
                }
            case 577:
                var18 = var19.bottom;
            case 582:
                var17 = var17 + var18;
                var16.paddingBottom = var17;
                var5.contentContainerStyle = var16;
                var13 = function arg0() {
                    _fun116554: for (var _fun116554_ip = 0;;) switch (_fun116554_ip) {
                        case 0:
                            var0 = arg0;
                            var10 = var0.item;
                            var _closure3_slot0 = var10;
                            var13 = var0.index;
                            var2 = var10.roles;
                            var1 = var2.includes;
                            var0 = _closure2_slot1;
                            var0 = var0.id;
                            var6 = var1.bind(var2)(var0);
                            var1 = var10.id;
                            var0 = _closure2_slot3;
                            var8 = var1 in var0;
                            var1 = _closure2_slot5;
                            var0 = null;
                            var7 = var0 != var1;
                            if (!var7) {
                                _fun116554_ip = 108;
                                continue _fun116554
                            }
                        case 73:
                            var0 = global;
                            var2 = var0.Object;
                            var1 = var2.keys;
                            var0 = _closure2_slot3;
                            var0 = var1.bind(var2)(var0);
                            var1 = var0.length;
                            var0 = _closure2_slot5;
                            var7 = var1 >= var0;
                        case 108:
                            var5 = var6;
                            if (var6) {
                                _fun116554_ip = 127;
                                continue _fun116554
                            }
                        case 114:
                            var1 = var10.id;
                            var0 = _closure2_slot3;
                            var5 = var1 in var0;
                        case 127:
                            var3 = _closure1_slot8;
                            var1 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 11;
                            var0 = var2[var0];
                            var2 = undefined;
                            var1 = var1.bind(var2)(var0);
                            var0 = {};
                            var12 = 0;
                            var12 = var12 === var13;
                            var0.start = var12;
                            var12 = _closure2_slot9;
                            var14 = var12.length;
                            var12 = 1;
                            var12 = var14 - var12;
                            var12 = var13 === var12;
                            var0.end = var12;
                            var11 = _closure2_slot0;
                            var11 = var11.id;
                            var0.guildId = var11;
                            var10 = var10.id;
                            var0.userId = var10;
                            var9 = function() {
                                var2 = _closure3_slot0;
                                var1 = function arg0() {
                                    _fun116556: for (var _fun116556_ip = 0;;) switch (_fun116556_ip) {
                                        case 0:
                                            var1 = arg0;
                                            var _closure5_slot0 = var1;
                                            var4 = var1.roles;
                                            var3 = var4.includes;
                                            var2 = _closure2_slot1;
                                            var2 = var2.id;
                                            var2 = var3.bind(var4)(var2);
                                            if (var2) {
                                                _fun116556_ip = 58;
                                                continue _fun116556
                                            }
                                        case 40:
                                            var2 = _closure2_slot4;
                                            var1 = undefined;
                                            var0 = function(arg0) { // Environment: var0
                                                _fun116557: for (var _fun116557_ip = 0;;) switch (_fun116557_ip) {
                                                    case 0:
                                                        var0 = {};
                                                        var10 = arg0;
                                                        var11 = var0;
                                                        var1 = copyDataProperties(var11, var10);
                                                        var1 = _closure5_slot0;
                                                        var1 = var1.id;
                                                        var3 = var1 in var0;
                                                        var1 = _closure5_slot0;
                                                        if (var3) {
                                                            _fun116557_ip = 160;
                                                            continue _fun116557
                                                        }
                                                    case 38:
                                                        var5 = {};
                                                        var3 = var1.name;
                                                        var5.text = var3;
                                                        var7 = _closure1_slot8;
                                                        var4 = _closure1_slot1;
                                                        var6 = _closure1_slot2;
                                                        var3 = 10;
                                                        var3 = var6[var3];
                                                        var6 = undefined;
                                                        var4 = var4.bind(var6)(var3);
                                                        var3 = {};
                                                        var8 = var1.avatarSource;
                                                        var3.source = var8;
                                                        var8 = _closure2_slot6;
                                                        var9 = var8.tagAvatar;
                                                        var3.avatarStyle = var9;
                                                        var8 = var8.tagAvatar;
                                                        var3.style = var8;
                                                        var3 = var7.bind(var6)(var4, var3);
                                                        var5.icon = var3;
                                                        var3 = null;
                                                        if (!(var3 != var5)) {
                                                            _fun116557_ip = 169;
                                                            continue _fun116557
                                                        }
                                                    case 134:
                                                        var4 = _closure5_slot0;
                                                        var3 = var4.id;
                                                        var2 = {};
                                                        var2.display = var5;
                                                        var2.row = var4;
                                                        var0[var3] = var2;
                                                        _fun116557_ip = 169;
                                                        continue _fun116557;
                                                    case 160:
                                                        var1 = var1.id;
                                                        var1 = delete var0[var1];
                                                    case 169:
                                                        return var0;
                                                }
                                            };
                                            var0 = var2.bind(var1)(var0);
                                        case 58:
                                            var0 = undefined;
                                            return var0;
                                    }
                                };
                                var0 = undefined;
                                var1 = var1.bind(var0)(var2);
                                return var0;
                            };
                            var0.onPress = var9;
                            if (var6) {
                                _fun116554_ip = 237;
                                continue _fun116554
                            }
                        case 228:
                            if (!var7) {
                                _fun116554_ip = 234;
                                continue _fun116554
                            }
                        case 231:
                            var7 = !var8;
                        case 234:
                            var6 = var7;
                        case 237:
                            var0.disabled = var6;
                            var7 = _closure1_slot8;
                            var6 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var4 = 12;
                            var4 = var8[var4];
                            var4 = var6.bind(var2)(var4);
                            var6 = var4.FormCheckbox;
                            var4 = {};
                            var4.checked = var5;
                            var4 = var7.bind(var2)(var6, var4);
                            var0.trailing = var4;
                            var4 = 'checkbox';
                            var0.accessibilityRole = var4;
                            var4 = {};
                            var4.checked = var5;
                            var0.accessibilityState = var4;
                            var0 = var3.bind(var2)(var1, var0);
                            return var0;
                    }
                };
                var5.renderItem = var13;
                var5.data = var12;
                var12 = 56;
                var5.estimatedItemSize = var12;
                var5.extraData = var8;
                var8 = 'always';
                var5.keyboardShouldPersistTaps = var8;
                var5 = var6.bind(var3)(var7, var5);
                _fun116546_ip = 837;
                continue _fun116546;
            case 645:
                var8 = _closure1_slot8;
                var7 = _closure1_slot1;
                var16 = _closure1_slot2;
                var6 = 19;
                var6 = var16[var6];
                var7 = var7.bind(var3)(var6);
                var6 = {};
                var13 = _closure1_slot0;
                var12 = 20;
                var12 = var16[var12];
                var12 = var13.bind(var3)(var12);
                var12 = var12.NoResultsAlt;
                var6.Illustration = var12;
                var11 = var11.emptyStateText;
                var6.bodyStyle = var11;
                if (!(var9 === var14)) {
                    _fun116546_ip = 767;
                    continue _fun116546
                }
            case 713:
                var13 = _closure1_slot0;
                var9 = _closure1_slot2;
                var11 = var9[var15];
                var11 = var13.bind(var3)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                var9 = var9[var15];
                var9 = var13.bind(var3)(var9);
                var9 = var9.t;
                var9 = var9.oB9grQ;
                var9 = var11.bind(var12)(var9);
                _fun116546_ip = 827;
                continue _fun116546;
            case 767:
                var11 = _closure1_slot0;
                var10 = _closure1_slot2;
                var12 = var10[var15];
                var12 = var11.bind(var3)(var12);
                var13 = var12.intl;
                var12 = var13.format;
                var10 = var10[var15];
                var10 = var11.bind(var3)(var10);
                var10 = var10.t;
                var11 = var10.ErpIY3;
                var10 = {};
                var10.query = var14;
                var9 = var12.bind(var13)(var11, var10);
            case 827:
                var6.body = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 837:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot13 = var1;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var11.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var12 = 1;
    var4 = var6[var12];
    var4 = var11.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var7 = var6[var4];
    var4 = arg3;
    var4 = var4.bind(var0)(var7);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.View;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.MAX_BULK_ROLE_MEMBERS_ADD;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.jsx;
    var _closure1_slot8 = var7;
    var7 = var4.Fragment;
    var _closure1_slot9 = var7;
    var4 = var4.jsxs;
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var8 = var5.bind(var0)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 7;
    var13 = var6[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOWER;
    var9.backgroundColor = var13;
    var9.flex = var12;
    var4.container = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var9.paddingHorizontal = var12;
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_12;
    var9.paddingTop = var12;
    var4.inputContainer = var9;
    var9 = {
        'width': 16,
        'height': 16
    };
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.sm;
    var9.borderRadius = var12;
    var4.tagAvatar = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.TEXT_DEFAULT;
    var9.color = var12;
    var4.emptyStateText = var9;
    var9 = {};
    var10 = var6[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_16;
    var9.marginHorizontal = var10;
    var4.addMembersDescription = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot11 = var4;
    var4 = 28;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_settings/roles/native/action_sheet/AddMembersActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function arg0() {
        _fun116558: for (var _fun116558_ip = 0;;) switch (_fun116558_ip) {
            case 0:
                var0 = arg0;
                var17 = var0.guild;
                var _closure2_slot0 = var17;
                var16 = var0.role;
                var _closure2_slot1 = var16;
                var0 = _closure1_slot11;
                var3 = undefined;
                var20 = var0.bind(var3)();
                var2 = _closure1_slot5;
                var1 = var2.useState;
                var0 = {};
                var2 = var1.bind(var2)(var0);
                var1 = _closure1_slot4;
                var0 = 2;
                var1 = var1.bind(var3)(var2, var0);
                var2 = 0;
                var14 = var1[var2];
                var _closure2_slot2 = var14;
                var0 = 1;
                var13 = var1[var0];
                var5 = _closure1_slot5;
                var4 = var5.useCallback;
                var0 = var16.id;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function(arg0) { // Environment: var18
                    var0 = arg0;
                    var2 = var0.roles;
                    var1 = var2.includes;
                    var0 = _closure2_slot1;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    var0 = !var0;
                    return var0;
                };
                var7 = var4.bind(var5)(var0, var1);
                var1 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 17;
                var0 = var4[var0];
                var6 = var1.bind(var3)(var0);
                var5 = var6.useGuildMembers;
                var0 = var17.id;
                var15 = var5.bind(var6)(var0, var7);
                var0 = 21;
                var0 = var4[var0];
                var6 = var1.bind(var3)(var0);
                var5 = var6.useSubscribeGuildMembers;
                var4 = {};
                var7 = var17.id;
                var0 = global;
                var9 = var0.Object;
                var1 = var9.keys;
                var1 = var1.bind(var9)(var14);
                var4[var7] = var1;
                var1 = 'AddMembersActionSheet';
                var1 = var5.bind(var6)(var4, var1);
                var4 = var0.Object;
                var1 = var4.keys;
                var1 = var1.bind(var4)(var14);
                var1 = var1.length;
                var12 = var2 === var1;
                if (var12) {
                    _fun116558_ip = 272;
                    continue _fun116558
                }
            case 243:
                var1 = var0.Object;
                var0 = var1.keys;
                var0 = var0.bind(var1)(var14);
                var1 = var0.length;
                var0 = _closure1_slot7;
                var12 = var1 > var0;
            case 272:
                var2 = _closure1_slot8;
                var24 = _closure1_slot0;
                var21 = _closure1_slot2;
                var0 = 22;
                var0 = var21[var0];
                var0 = var24.bind(var3)(var0);
                var1 = var0.BottomSheet;
                var0 = {
                    'scrollable': true,
                    'header': null,
                    'startExpanded': true
                };
                var11 = true;
                var6 = _closure1_slot8;
                var4 = 23;
                var4 = var21[var4];
                var4 = var24.bind(var3)(var4);
                var5 = var4.BottomSheetTitleHeader;
                var4 = {};
                var19 = 15;
                var7 = var21[var19];
                var7 = var24.bind(var3)(var7);
                var10 = var7.intl;
                var9 = var10.string;
                var7 = var21[var19];
                var7 = var24.bind(var3)(var7);
                var7 = var7.t;
                var7 = var7.ZYOK46;
                var7 = var9.bind(var10)(var7);
                var4.title = var7;
                var7 = var16.name;
                var4.subtitle = var7;
                var10 = _closure1_slot8;
                var7 = 24;
                var7 = var21[var7];
                var7 = var24.bind(var3)(var7);
                var9 = var7.Button;
                var7 = {};
                var22 = 'sm';
                var7.size = var22;
                var22 = var21[var19];
                var22 = var24.bind(var3)(var22);
                var23 = var22.intl;
                var22 = var23.string;
                var21 = var21[var19];
                var21 = var24.bind(var3)(var21);
                var21 = var21.t;
                var21 = var21.OYkgVk;
                var21 = var22.bind(var23)(var21);
                var7.text = var21;
                var18 = function() {
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var0 = 25;
                    var1 = var3[var0];
                    var0 = undefined;
                    var7 = var2.bind(var0)(var1);
                    var6 = var7.bulkAddMemberRoles;
                    var4 = _closure2_slot0;
                    var5 = var4.id;
                    var4 = _closure2_slot1;
                    var4 = var4.id;
                    var8 = 18;
                    var8 = var3[var8];
                    var9 = var2.bind(var0)(var8);
                    var8 = var9.keys;
                    var1 = _closure2_slot2;
                    var1 = var8.bind(var9)(var1);
                    var1 = var6.bind(var7)(var5, var4, var1);
                    var1 = 26;
                    var1 = var3[var1];
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.hideActionSheet;
                    var1 = var1.bind(var2)();
                    return var0;
                };
                var7.onPress = var18;
                var18 = 'primary';
                if (!var12) {
                    _fun116558_ip = 505;
                    continue _fun116558
                }
            case 501:
                var18 = 'secondary';
            case 505:
                var7.variant = var18;
                var7.disabled = var12;
                var7 = var10.bind(var3)(var9, var7);
                var4.trailing = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.header = var4;
                var6 = _closure1_slot10;
                var5 = _closure1_slot6;
                var4 = {};
                var7 = var20.container;
                var4.style = var7;
                var10 = _closure1_slot8;
                var18 = _closure1_slot0;
                var12 = _closure1_slot2;
                var7 = 27;
                var7 = var12[var7];
                var7 = var18.bind(var3)(var7);
                var9 = var7.Text;
                var7 = {};
                var21 = 'text-sm/normal';
                var7.variant = var21;
                var20 = var20.addMembersDescription;
                var7.style = var20;
                var20 = var12[var19];
                var20 = var18.bind(var3)(var20);
                var21 = var20.intl;
                var20 = var21.format;
                var12 = var12[var19];
                var12 = var18.bind(var3)(var12);
                var12 = var12.t;
                var19 = var12["3OxP4q"];
                var18 = {};
                var12 = _closure1_slot7;
                var18.numMembers = var12;
                var18 = var20.bind(var21)(var19, var18);
                var7.children = var18;
                var9 = var10.bind(var3)(var9, var7);
                var7 = new Array(2);
                var7[0] = var9;
                var10 = _closure1_slot8;
                var9 = _closure1_slot13;
                var8 = {};
                var8.guild = var17;
                var8.role = var16;
                var8.members = var15;
                var8.pendingAdditions = var14;
                var8.setPendingAdditions = var13;
                var8.autoFocusSearch = var11;
                var8.maxCount = var12;
                var8.inActionSheet = var11;
                var8 = var10.bind(var3)(var9, var8);
                var7[1] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var3;
    var2.AddMembersBody = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [29, 57, 31, 27, 14850, 33, 1297, 671, 4895, 3327, 5504, 9217, 5492, 5804, 8214, 1234, 5655, 14855, 21, 7429, 8217, 7814, 4933, 5261, 4084, 8224, 3279, 3942, 2]);