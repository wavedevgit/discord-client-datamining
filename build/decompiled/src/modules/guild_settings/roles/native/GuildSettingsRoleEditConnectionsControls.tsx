// modules/guild_settings/roles/native/GuildSettingsRoleEditConnectionsControls.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var5;
    var0 = function arg0, arg1() {
        _fun116054: for (var _fun116054_ip = 0;;) switch (_fun116054_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun116054_ip = 46;
                    continue _fun116054
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun116054_ip = 55;
                    continue _fun116054
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun116054_ip = 345;
                    continue _fun116054
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun116054_ip = 323;
                    continue _fun116054
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun116054_ip = 283;
                    continue _fun116054
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun116054_ip = 270;
                    continue _fun116054
                }
            case 110:
                var6 = {};
                var8 = var6.toString;
                var6 = var8.call;
                var10 = var6.bind(var8)(var2);
                var9 = var10.slice;
                var8 = 8;
                var6 = -1;
                var8 = var9.bind(var10)(var8, var6);
                var6 = 'Object';
                var6 = var6 === var8;
                if (!var6) {
                    _fun116054_ip = 163;
                    continue _fun116054
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun116054_ip = 179;
                    continue _fun116054
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun116054_ip = 249;
                    continue _fun116054
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun116054_ip = 249;
                    continue _fun116054
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun116054_ip = 234;
                    continue _fun116054
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun116054_ip = 247;
                    continue _fun116054
                }
            case 234:
                var8 = _closure1_slot14;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun116054_ip = 265;
                continue _fun116054;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun116054_ip = 283;
                continue _fun116054;
            case 270:
                var6 = _closure1_slot14;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun116054_ip = 323;
                    continue _fun116054
                }
            case 289:
                var6 = var4.TypeError;
                var4 = var6.prototype;
                var5 = Object.create(var4, {
                    constructor: {
                        value: var6
                    }
                });
                var12 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
                var13 = var5;
                var4 = new var13[var6](var12, var11);
                var4 = var4 instanceof Object ? var4 : var5;
                throw var4;
            case 323:
                if (!var3) {
                    _fun116054_ip = 330;
                    continue _fun116054
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun116055: for (var _fun116055_ip = 0;;) switch (_fun116055_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun116055_ip = 56;
                                continue _fun116055
                            }
                        case 20:
                            var0 = {};
                            var1 = false;
                            var0.done = var1;
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot1;
                            var1 = parseFloat(var1);
                            var3 = var1 + 1;
                            _closure2_slot1 = var3;
                            var1 = var2[var1];
                            var0.value = var1;
                            _fun116055_ip = 67;
                            continue _fun116055;
                        case 56:
                            var1 = {};
                            var2 = true;
                            var1.done = var2;
                            var0 = var1;
                        case 67:
                            return var0;
                    }
                };
                return var0;
            case 345:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var0 = function arg0, arg1() {
        _fun116056: for (var _fun116056_ip = 0;;) switch (_fun116056_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun116056_ip = 23;
                    continue _fun116056
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun116056_ip = 33;
                    continue _fun116056
                }
            case 28:
                var1 = var3.length;
            case 33:
                var0 = global;
                var0 = var0.Array;
                var0 = var0.bind(var2)(var1);
                var2 = 0;
                var4 = var2 < var1;
                if (!var4) {
                    _fun116056_ip = 70;
                    continue _fun116056
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun116056_ip = 55;
                    continue _fun116056
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot14 = var0;
    var0 = function arg0, arg1() {
        _fun116057: for (var _fun116057_ip = 0;;) switch (_fun116057_ip) {
            case 0:
                var3 = arg0;
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 9;
                var1 = var4[var1];
                var5 = undefined;
                var1 = var2.bind(var5)(var1);
                var1 = var1.ConnectionConfigurationRuleOperator;
                var2 = var1.AND;
                var1 = arg1;
                if (!(var1 !== var2)) {
                    _fun116057_ip = 108;
                    continue _fun116057
                }
            case 47:
                var1 = global;
                var2 = var1.Object;
                var1 = var2.values;
                var4 = _closure1_slot1;
                var6 = _closure1_slot2;
                var0 = 10;
                var0 = var6[var0];
                var5 = var4.bind(var5)(var0);
                var4 = var5.groupBy;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var4 = var0.connectionType;
                    var3 = var0.applicationId;
                    var0 = global;
                    var0 = var0.HermesInternal;
                    var2 = var0.concat;
                    var1 = '';
                    var0 = ':';
                    var0 = var2.bind(var1)(var4, var0, var3);
                    return var0;
                };
                var0 = var4.bind(var5)(var3, var0);
                var0 = var1.bind(var2)(var0);
                _fun116057_ip = 152;
                continue _fun116057;
            case 108:
                var2 = var3.length;
                var1 = 0;
                if (!(var1 !== var2)) {
                    _fun116057_ip = 145;
                    continue _fun116057
                }
            case 119:
                var2 = new Array(0);
                var9 = var2;
                var8 = var3;
                var7 = 0;
                var1 = arraySpread(var9, var8, var7);
                var1 = new Array(1);
                var1[0] = var2;
                _fun116057_ip = 149;
                continue _fun116057;
            case 145:
                var1 = new Array(0);
            case 149:
                var0 = var1;
            case 152:
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var0 = function arg0() {
        _fun116059: for (var _fun116059_ip = 0;;) switch (_fun116059_ip) {
            case 0:
                var0 = arg0;
                var20 = var0.clearConnections;
                var19 = var0.locked;
                var15 = var0.hasConnections;
                var4 = var0.hasMembers;
                var0 = _closure1_slot12;
                var3 = undefined;
                var10 = var0.bind(var3)();
                var2 = _closure1_slot10;
                var1 = _closure1_slot11;
                var0 = {};
                var5 = null;
                if (!var4) {
                    _fun116059_ip = 279;
                    continue _fun116059
                }
            case 58:
                var7 = _closure1_slot10;
                var6 = _closure1_slot4;
                var4 = {};
                var8 = var10.warningContainer;
                var4.style = var8;
                var11 = _closure1_slot9;
                var18 = _closure1_slot0;
                var21 = _closure1_slot2;
                var8 = 11;
                var8 = var21[var8];
                var8 = var18.bind(var3)(var8);
                var9 = var8.CircleErrorIcon;
                var8 = {};
                var14 = _closure1_slot1;
                var13 = 8;
                var13 = var21[var13];
                var13 = var14.bind(var3)(var13);
                var13 = var13.colors;
                var13 = var13.STATUS_WARNING;
                var8.color = var13;
                var13 = 'sm';
                var8.size = var13;
                var9 = var11.bind(var3)(var9, var8);
                var8 = new Array(2);
                var8[0] = var9;
                var13 = _closure1_slot9;
                var9 = 12;
                var9 = var21[var9];
                var9 = var18.bind(var3)(var9);
                var11 = var9.Text;
                var9 = {};
                var14 = 'text-xs/medium';
                var9.variant = var14;
                var14 = var10.warningText;
                var9.style = var14;
                var14 = 13;
                var16 = var21[var14];
                var16 = var18.bind(var3)(var16);
                var17 = var16.intl;
                var16 = var17.string;
                var14 = var21[var14];
                var14 = var18.bind(var3)(var14);
                var14 = var14.t;
                var14 = var14["2aFeef"];
                var14 = var16.bind(var17)(var14);
                var9.children = var14;
                var9 = var13.bind(var3)(var11, var9);
                var8[1] = var9;
                var4.children = var8;
                var5 = var7.bind(var3)(var6, var4);
            case 279:
                var4 = new Array(3);
                var4[0] = var5;
                var7 = _closure1_slot9;
                var27 = _closure1_slot0;
                var24 = _closure1_slot2;
                var8 = 14;
                var5 = var24[var8];
                var5 = var27.bind(var3)(var5);
                var6 = var5.FormSection;
                var5 = {};
                var13 = _closure1_slot9;
                var8 = var24[var8];
                var8 = var27.bind(var3)(var8);
                var11 = var8.FormRow;
                var9 = {};
                var17 = _closure1_slot9;
                var16 = _closure1_slot4;
                var14 = {};
                var8 = var10.headingContainer;
                var14.style = var8;
                var23 = _closure1_slot9;
                var18 = 12;
                var8 = var24[var18];
                var8 = var27.bind(var3)(var8);
                var22 = var8.Text;
                var21 = {};
                var8 = 'eyebrow';
                var21.variant = var8;
                var8 = 13;
                var25 = var24[var8];
                var25 = var27.bind(var3)(var25);
                var26 = var25.intl;
                var25 = var26.string;
                var24 = var24[var8];
                var24 = var27.bind(var3)(var24);
                var24 = var24.t;
                var24 = var24.nMir27;
                var24 = var25.bind(var26)(var24);
                var21.children = var24;
                var21 = var23.bind(var3)(var22, var21);
                var14.children = var21;
                var14 = var17.bind(var3)(var16, var14);
                var9.label = var14;
                var14 = undefined;
                if (!var15) {
                    _fun116059_ip = 620;
                    continue _fun116059
                }
            case 474:
                var17 = _closure1_slot9;
                var24 = _closure1_slot0;
                var21 = _closure1_slot2;
                var15 = 15;
                var15 = var21[var15];
                var15 = var24.bind(var3)(var15);
                var16 = var15.PressableOpacity;
                var15 = {};
                var22 = 8;
                var15.hitSlop = var22;
                var15.onPress = var20;
                var15.disabled = var19;
                var20 = _closure1_slot9;
                var18 = var21[var18];
                var18 = var24.bind(var3)(var18);
                var19 = var18.Text;
                var18 = {
                    'variant': 'text-sm/medium',
                    'color': 'text-link'
                };
                var22 = var21[var8];
                var22 = var24.bind(var3)(var22);
                var23 = var22.intl;
                var22 = var23.string;
                var21 = var21[var8];
                var21 = var24.bind(var3)(var21);
                var21 = var21.t;
                var21 = var21.ntW1cc;
                var21 = var22.bind(var23)(var21);
                var18.children = var21;
                var18 = var20.bind(var3)(var19, var18);
                var15.children = var18;
                var14 = var17.bind(var3)(var16, var15);
            case 620:
                var9.trailing = var14;
                var9 = var13.bind(var3)(var11, var9);
                var5.children = var9;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var7 = _closure1_slot9;
                var9 = _closure1_slot0;
                var15 = _closure1_slot2;
                var5 = 16;
                var5 = var15[var5];
                var5 = var9.bind(var3)(var5);
                var6 = var5.TextWithIOSLinkWorkaround;
                var5 = {};
                var11 = 'text-sm/medium';
                var5.variant = var11;
                var10 = var10.description;
                var5.style = var10;
                var10 = var15[var8];
                var10 = var9.bind(var3)(var10);
                var11 = var10.intl;
                var10 = var11.format;
                var8 = var15[var8];
                var8 = var9.bind(var3)(var8);
                var8 = var8.t;
                var9 = var8.q5f7tK;
                var8 = {};
                var14 = _closure1_slot1;
                var13 = 17;
                var13 = var15[var13];
                var14 = var14.bind(var3)(var13);
                var13 = var14.getArticleURL;
                var12 = _closure1_slot7;
                var12 = var12.CONNECTION_DETAILS_ADMIN;
                var12 = var13.bind(var14)(var12);
                var8.helpdeskArticleUrl = var12;
                var8 = var10.bind(var11)(var9, var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var0 = function arg0() {
        _fun116060: for (var _fun116060_ip = 0;;) switch (_fun116060_ip) {
            case 0:
                var0 = arg0;
                var14 = var0.locked;
                var11 = var0.currentOperator;
                var2 = var0.roleConnectionConfigurations;
                var _closure2_slot0 = var2;
                var0 = var0.setPendingRoleConfigurations;
                var _closure2_slot1 = var0;
                var0 = _closure1_slot12;
                var3 = undefined;
                var10 = var0.bind(var3)();
                var1 = _closure1_slot15;
                var20 = _closure1_slot0;
                var16 = _closure1_slot2;
                var13 = 9;
                var0 = var16[var13];
                var0 = var20.bind(var3)(var0);
                var0 = var0.ConnectionConfigurationRuleOperator;
                var0 = var0.OR;
                var17 = var1.bind(var3)(var2, var0);
                var2 = _closure1_slot10;
                var5 = 14;
                var0 = var16[var5];
                var0 = var20.bind(var3)(var0);
                var1 = var0.FormSection;
                var0 = {};
                var9 = _closure1_slot9;
                var4 = var16[var5];
                var4 = var20.bind(var3)(var4);
                var7 = var4.FormRow;
                var4 = {};
                var19 = _closure1_slot9;
                var12 = 12;
                var12 = var16[var12];
                var12 = var20.bind(var3)(var12);
                var18 = var12.Text;
                var12 = {};
                var15 = 'eyebrow';
                var12.variant = var15;
                var15 = 13;
                var21 = var16[var15];
                var21 = var20.bind(var3)(var21);
                var23 = var21.intl;
                var22 = var23.string;
                var21 = var16[var15];
                var21 = var20.bind(var3)(var21);
                var21 = var21.t;
                var21 = var21.Xs7PHX;
                var21 = var22.bind(var23)(var21);
                var12.children = var21;
                var12 = var19.bind(var3)(var18, var12);
                var4.label = var12;
                var7 = var9.bind(var3)(var7, var4);
                var4 = new Array(3);
                var4[0] = var7;
                var12 = _closure1_slot9;
                var7 = var16[var5];
                var7 = var20.bind(var3)(var7);
                var9 = var7.FormRadioRow;
                var7 = {};
                var18 = var16[var15];
                var18 = var20.bind(var3)(var18);
                var19 = var18.intl;
                var18 = var19.string;
                var16 = var16[var15];
                var16 = var20.bind(var3)(var16);
                var16 = var16.t;
                var16 = var16.W3iY58;
                var16 = var18.bind(var19)(var16);
                var7.label = var16;
                var16 = var14;
                if (var16) {
                    _fun116060_ip = 336;
                    continue _fun116060
                }
            case 324:
                var18 = var17.length;
                var17 = 2;
                var16 = var18 < var17;
            case 336:
                var7.disabled = var16;
                var17 = _closure1_slot0;
                var16 = _closure1_slot2;
                var18 = var16[var13];
                var18 = var17.bind(var3)(var18);
                var18 = var18.ConnectionConfigurationRuleOperator;
                var18 = var18.OR;
                var18 = var11 === var18;
                var7.selected = var18;
                var16 = var16[var13];
                var16 = var17.bind(var3)(var16);
                var16 = var16.ConnectionConfigurationRuleOperator;
                var16 = var16.OR;
                if (!(var11 !== var16)) {
                    _fun116060_ip = 411;
                    continue _fun116060
                }
            case 403:
                var16 = var10.andOrRowUnselected;
                _fun116060_ip = 417;
                continue _fun116060;
            case 411:
                var16 = var10.andOrRowSelected;
            case 417:
                var7.style = var16;
                var16 = function() {
                    var3 = _closure2_slot1;
                    var2 = _closure2_slot0;
                    var4 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 9;
                    var0 = var1[var0];
                    var1 = undefined;
                    var0 = var4.bind(var1)(var0);
                    var0 = var0.ConnectionConfigurationRuleOperator;
                    var0 = var0.OR;
                    var0 = var3.bind(var1)(var2, var0);
                    return var0;
                };
                var7.onPress = var16;
                var7 = var12.bind(var3)(var9, var7);
                var4[1] = var7;
                var7 = _closure1_slot9;
                var12 = _closure1_slot0;
                var9 = _closure1_slot2;
                var5 = var9[var5];
                var5 = var12.bind(var3)(var5);
                var6 = var5.FormRadioRow;
                var5 = {};
                var16 = var9[var15];
                var16 = var12.bind(var3)(var16);
                var17 = var16.intl;
                var16 = var17.string;
                var15 = var9[var15];
                var15 = var12.bind(var3)(var15);
                var15 = var15.t;
                var15 = var15.gHXS9A;
                var15 = var16.bind(var17)(var15);
                var5.label = var15;
                var5.disabled = var14;
                var14 = var9[var13];
                var14 = var12.bind(var3)(var14);
                var14 = var14.ConnectionConfigurationRuleOperator;
                var14 = var14.AND;
                var14 = var11 === var14;
                var5.selected = var14;
                var9 = var9[var13];
                var9 = var12.bind(var3)(var9);
                var9 = var9.ConnectionConfigurationRuleOperator;
                var9 = var9.AND;
                if (!(var11 !== var9)) {
                    _fun116060_ip = 588;
                    continue _fun116060
                }
            case 580:
                var9 = var10.andOrRowUnselected;
                _fun116060_ip = 594;
                continue _fun116060;
            case 588:
                var9 = var10.andOrRowSelected;
            case 594:
                var5.style = var9;
                var8 = function() {
                    var3 = _closure2_slot1;
                    var2 = _closure2_slot0;
                    var4 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 9;
                    var0 = var1[var0];
                    var1 = undefined;
                    var0 = var4.bind(var1)(var0);
                    var0 = var0.ConnectionConfigurationRuleOperator;
                    var0 = var0.AND;
                    var0 = var3.bind(var1)(var2, var0);
                    return var0;
                };
                var5.onPress = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var0 = function arg0, arg1, arg2, arg3, arg4() {
        _fun116063: for (var _fun116063_ip = 0;;) switch (_fun116063_ip) {
            case 0:
                var13 = arg0;
                var _closure2_slot0 = var13;
                var0 = arg1;
                var _closure2_slot1 = var0;
                var0 = arg2;
                var _closure2_slot2 = var0;
                var0 = arg4;
                var _closure2_slot3 = var0;
                var0 = function arg0, arg1() {
                    _fun116064: for (var _fun116064_ip = 0;;) switch (_fun116064_ip) {
                        case 0:
                            var8 = arg0;
                            var7 = arg1;
                            var5 = new Array(0);
                            var4 = _closure1_slot13;
                            var2 = _closure2_slot0;
                            var0 = undefined;
                            var6 = var4.bind(var0)(var2);
                            var4 = var6.bind(var0)();
                            var2 = var4.done;
                            if (var2) {
                                _fun116064_ip = 84;
                                continue _fun116064
                            }
                        case 45:
                            var11 = var4.value;
                            var9 = var5.push;
                            var2 = {};
                            var12 = var2;
                            var10 = copyDataProperties(var12, var11);
                            var2 = var9.bind(var5)(var2);
                            var9 = var6.bind(var0)();
                            var2 = var9.done;
                            var4 = var9;
                            if (!var2) {
                                _fun116064_ip = 45;
                                continue _fun116064
                            }
                        case 84:
                            var6 = null;
                            if (!(var6 != var8)) {
                                _fun116064_ip = 133;
                                continue _fun116064
                            }
                        case 90:
                            var2 = -1;
                            if (!(var2 !== var7)) {
                                _fun116064_ip = 118;
                                continue _fun116064
                            }
                        case 100:
                            var4 = 0;
                            var2 = var5;
                            if (!(var7 >= var4)) {
                                _fun116064_ip = 215;
                                continue _fun116064
                            }
                        case 109:
                            var5[var7] = var8;
                            var2 = var5;
                            _fun116064_ip = 215;
                            continue _fun116064;
                        case 118:
                            var4 = var5.push;
                            var4 = var4.bind(var5)(var8);
                            var2 = var5;
                            _fun116064_ip = 215;
                            continue _fun116064;
                        case 133:
                            var4 = _closure2_slot0;
                            var4 = var4[var7];
                            var _closure3_slot0 = var4;
                            if (!(var6 !== var4)) {
                                _fun116064_ip = 178;
                                continue _fun116064
                            }
                        case 149:
                            var8 = var4.connectionMetadataField;
                            if (!(var6 == var8)) {
                                _fun116064_ip = 178;
                                continue _fun116064
                            }
                        case 159:
                            var8 = var4.operator;
                            if (!(var6 == var8)) {
                                _fun116064_ip = 178;
                                continue _fun116064
                            }
                        case 169:
                            var4 = var4.value;
                            if (!(var6 != var4)) {
                                _fun116064_ip = 198;
                                continue _fun116064
                            }
                        case 178:
                            var6 = var5.splice;
                            var4 = 1;
                            var4 = var6.bind(var5)(var7, var4);
                            var2 = var5;
                            _fun116064_ip = 215;
                            continue _fun116064;
                        case 198:
                            var4 = var5.filter;
                            var3 = function(arg0) { // Environment: var3
                                _fun116065: for (var _fun116065_ip = 0;;) switch (_fun116065_ip) {
                                    case 0:
                                        var2 = arg0;
                                        var0 = _closure3_slot0;
                                        var3 = var0.applicationId;
                                        var0 = null;
                                        if (!(var0 != var3)) {
                                            _fun116065_ip = 64;
                                            continue _fun116065
                                        }
                                    case 21:
                                        var3 = var2.connectionType;
                                        var0 = _closure3_slot0;
                                        var0 = var0.connectionType;
                                        var0 = var3 !== var0;
                                        if (!var0) {
                                            _fun116065_ip = 62;
                                            continue _fun116065
                                        }
                                    case 44:
                                        var4 = var2.applicationId;
                                        var3 = _closure3_slot0;
                                        var3 = var3.applicationId;
                                        var0 = var4 !== var3;
                                    case 62:
                                        _fun116065_ip = 84;
                                        continue _fun116065;
                                    case 64:
                                        var2 = var2.connectionType;
                                        var1 = _closure3_slot0;
                                        var1 = var1.connectionType;
                                        var0 = var2 !== var1;
                                    case 84:
                                        return var0;
                                }
                            };
                            var2 = var4.bind(var5)(var3);
                        case 215:
                            var1 = _closure2_slot1;
                            var1 = var1.bind(var0)(var2);
                            return var0;
                    }
                };
                var _closure2_slot5 = var0;
                var5 = global;
                var0 = var5.Map;
                var1 = var0.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var0
                    }
                });
                var20 = var1;
                var0 = new var20[var0](var19);
                var8 = var0 instanceof Object ? var0 : var1;
                var _closure2_slot4 = var8;
                var1 = var13.forEach;
                var0 = function(arg0, arg1) { // Environment: var4
                    _fun116066: for (var _fun116066_ip = 0;;) switch (_fun116066_ip) {
                        case 0:
                            var3 = arg0;
                            var4 = arg1;
                            var6 = var3.connectionType;
                            var5 = var3.applicationId;
                            var0 = global;
                            var0 = var0.HermesInternal;
                            var2 = var0.concat;
                            var1 = '';
                            var0 = ':';
                            var2 = var2.bind(var1)(var6, var0, var5);
                            var5 = _closure2_slot4;
                            var0 = var5.has;
                            var0 = var0.bind(var5)(var2);
                            var1 = _closure2_slot4;
                            if (var0) {
                                _fun116066_ip = 101;
                                continue _fun116066
                            }
                        case 69:
                            var5 = var1.set;
                            var6 = {};
                            var6.index = var4;
                            var6.configuration = var3;
                            var0 = new Array(1);
                            var0[0] = var6;
                            var0 = var5.bind(var1)(var2, var0);
                            _fun116066_ip = 138;
                            continue _fun116066;
                        case 101:
                            var0 = var1.get;
                            var2 = var0.bind(var1)(var2);
                            var0 = null;
                            if (!(var0 != var2)) {
                                _fun116066_ip = 138;
                                continue _fun116066
                            }
                        case 117:
                            var1 = var2.push;
                            var0 = {};
                            var0.index = var4;
                            var0.configuration = var3;
                            var0 = var1.bind(var2)(var0);
                        case 138:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var1.bind(var13)(var0);
                var2 = _closure1_slot13;
                var1 = var8.values;
                var1 = var1.bind(var8)();
                var3 = undefined;
                var12 = var2.bind(var3)(var1);
                var2 = var12.bind(var3)();
                var1 = var2.done;
                var11 = 0;
                var10 = 'connectionMetadataField';
                var9 = 'operator';
                var7 = 'value';
                var6 = 1;
                if (var1) {
                    _fun116063_ip = 252;
                    continue _fun116063
                }
            case 142:
                var15 = var2.value;
                var14 = var15.some;
                var1 = function(arg0) { // Environment: var4
                    _fun116067: for (var _fun116067_ip = 0;;) switch (_fun116067_ip) {
                        case 0:
                            var0 = arg0;
                            var1 = var0.configuration;
                            var0 = var1.connectionMetadataField;
                            var2 = null;
                            var0 = var2 == var0;
                            if (!var0) {
                                _fun116067_ip = 34;
                                continue _fun116067
                            }
                        case 24:
                            var3 = var1.operator;
                            var0 = var2 == var3;
                        case 34:
                            if (!var0) {
                                _fun116067_ip = 46;
                                continue _fun116067
                            }
                        case 37:
                            var1 = var1.value;
                            var0 = var2 == var1;
                        case 46:
                            return var0;
                    }
                };
                var1 = var14.bind(var15)(var1);
                if (var1) {
                    _fun116063_ip = 237;
                    continue _fun116063
                }
            case 168:
                var16 = {};
                var1 = var15[var11];
                var18 = var1.configuration;
                var19 = var16;
                var1 = copyDataProperties(var19, var18);
                var16[var10] = var3;
                var16[var9] = var3;
                var16[var7] = var3;
                var1 = var13.push;
                var17 = var1.bind(var13)(var16);
                var14 = var15.push;
                var1 = {};
                var17 = var17 - var6;
                var1.index = var17;
                var1.configuration = var16;
                var1 = var14.bind(var15)(var1);
            case 237:
                var14 = var12.bind(var3)();
                var1 = var14.done;
                var2 = var14;
                if (!var1) {
                    _fun116063_ip = 142;
                    continue _fun116063
                }
            case 252:
                var2 = _closure1_slot9;
                var1 = _closure1_slot4;
                var0 = {};
                var7 = var5.Array;
                var6 = var7.from;
                var5 = var8.values;
                var5 = var5.bind(var8)();
                var6 = var6.bind(var7)(var5);
                var5 = var6.map;
                var4 = function(arg0) { // Environment: var4
                    var6 = arg0;
                    var4 = _closure1_slot9;
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 18;
                    var0 = var2[var0];
                    var3 = undefined;
                    var2 = var1.bind(var3)(var0);
                    var1 = {};
                    var1.configurationItems = var6;
                    var5 = _closure2_slot5;
                    var1.onConfigurationChange = var5;
                    var5 = _closure2_slot2;
                    var1.locked = var5;
                    var0 = _closure2_slot3;
                    var1.integrations = var0;
                    var0 = 0;
                    var5 = var6[var0];
                    var5 = var5.configuration;
                    var7 = var5.connectionType;
                    var5 = ':';
                    var5 = var7 + var5;
                    var0 = var6[var0];
                    var0 = var0.index;
                    var0 = var5 + var0;
                    var0 = var4.bind(var3)(var2, var1, var0);
                    return var0;
                };
                var4 = var5.bind(var6)(var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot18 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var1 = var0.handleConnectionTapped;
        var _closure2_slot0 = var1;
        var1 = var0.excludedConnections;
        var _closure2_slot1 = var1;
        var1 = var0.excludedApplications;
        var _closure2_slot2 = var1;
        var1 = var0.roleId;
        var _closure2_slot3 = var1;
        var1 = var0.integrations;
        var _closure2_slot4 = var1;
        var6 = var0.locked;
        var0 = _closure1_slot12;
        var3 = undefined;
        var8 = var0.bind(var3)();
        var2 = _closure1_slot10;
        var11 = _closure1_slot0;
        var12 = _closure1_slot2;
        var0 = 15;
        var0 = var12[var0];
        var0 = var11.bind(var3)(var0);
        var1 = var0.PressableOpacity;
        var0 = {};
        var0.disabled = var6;
        var6 = var8.addConnectionButton;
        var0.style = var6;
        var4 = function() {
            var4 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 19;
            var3 = var1[var0];
            var0 = undefined;
            var5 = var4.bind(var0)(var3);
            var4 = var5.openLazy;
            var3 = _closure1_slot0;
            var2 = 21;
            var2 = var1[var2];
            var3 = var3.bind(var0)(var2);
            var2 = 20;
            var2 = var1[var2];
            var1 = var1.paths;
            var3 = var3.bind(var0)(var2, var1);
            var8 = _closure2_slot3;
            var1 = global;
            var1 = var1.HermesInternal;
            var2 = var1.concat;
            var1 = 'SelectConnectionActionSheet-';
            var2 = var2.bind(var1)(var8);
            var1 = {};
            var8 = function arg0() {
                var2 = _closure2_slot0;
                var1 = undefined;
                var0 = arg0;
                var0 = var2.bind(var1)(var0, var1);
                return var0;
            };
            var1.addConnection = var8;
            var8 = _closure2_slot1;
            var1.excludedConnections = var8;
            var8 = _closure2_slot2;
            var1.excludedApplications = var8;
            var7 = _closure2_slot4;
            var1.integrations = var7;
            var6 = function arg0() {
                var3 = _closure2_slot0;
                var2 = _closure1_slot8;
                var1 = undefined;
                var0 = arg0;
                var0 = var3.bind(var1)(var2, var0);
                return var0;
            };
            var1.onCompleteApplication = var6;
            var1 = var4.bind(var5)(var3, var2, var1);
            return var0;
        };
        var0.onPress = var4;
        var7 = _closure1_slot9;
        var4 = 22;
        var4 = var12[var4];
        var4 = var11.bind(var3)(var4);
        var6 = var4.CirclePlusIcon;
        var4 = {};
        var9 = 'sm';
        var4.size = var9;
        var10 = _closure1_slot1;
        var9 = 8;
        var9 = var12[var9];
        var9 = var10.bind(var3)(var9);
        var9 = var9.colors;
        var9 = var9.TEXT_LINK;
        var4.color = var9;
        var6 = var7.bind(var3)(var6, var4);
        var4 = new Array(2);
        var4[0] = var6;
        var7 = _closure1_slot9;
        var5 = 12;
        var5 = var12[var5];
        var5 = var11.bind(var3)(var5);
        var6 = var5.Text;
        var5 = {
            'variant': 'text-md/medium',
            'color': 'text-link'
        };
        var8 = var8.addConnectionText;
        var5.style = var8;
        var8 = 13;
        var9 = var12[var8];
        var9 = var11.bind(var3)(var9);
        var10 = var9.intl;
        var9 = var10.string;
        var8 = var12[var8];
        var8 = var11.bind(var3)(var8);
        var8 = var8.t;
        var8 = var8["OSvW5+"];
        var8 = var9.bind(var10)(var8);
        var5.children = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot19 = var0;
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
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.HelpdeskArticles;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.GUILD_ROLE_CONNECTION_APPLICATION_CONNECTION_TYPE;
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot9 = var6;
    var6 = var3.jsxs;
    var _closure1_slot10 = var6;
    var3 = var3.Fragment;
    var _closure1_slot11 = var3;
    var3 = 7;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center',
        'padding': 8,
        'backgroundColor': null,
        'borderColor': null,
        'borderWidth': 1,
        'borderRadius': null,
        'marginHorizontal': 12,
        'marginBottom': 8
    };
    var9 = 8;
    var10 = var5[var9];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_FEEDBACK_WARNING;
    var8.backgroundColor = var10;
    var10 = var5[var9];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.STATUS_WARNING;
    var8.borderColor = var10;
    var10 = var5[var9];
    var10 = var11.bind(var0)(var10);
    var10 = var10.radii;
    var10 = var10.xs;
    var8.borderRadius = var10;
    var3.warningContainer = var8;
    var8 = {
        'flex': 1,
        'marginLeft': 10
    };
    var3.warningText = var8;
    var8 = {
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var3.headingContainer = var8;
    var8 = {
        'paddingHorizontal': 16,
        'paddingBottom': 12
    };
    var3.description = var8;
    var8 = {
        'borderRadius': null,
        'marginHorizontal': 8,
        'marginBottom': 8
    };
    var10 = var5[var9];
    var10 = var11.bind(var0)(var10);
    var10 = var10.radii;
    var10 = var10.xs;
    var8.borderRadius = var10;
    var10 = var5[var9];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_SURFACE_HIGH;
    var8.backgroundColor = var10;
    var3.andOrRowUnselected = var8;
    var8 = {
        'borderRadius': null,
        'marginHorizontal': 8,
        'marginBottom': 8
    };
    var10 = var5[var9];
    var10 = var11.bind(var0)(var10);
    var10 = var10.radii;
    var10 = var10.xs;
    var8.borderRadius = var10;
    var10 = var5[var9];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_BASE_LOWEST;
    var8.backgroundColor = var10;
    var3.andOrRowSelected = var8;
    var8 = {};
    var10 = var5[var9];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.INTERACTIVE_TEXT_DEFAULT;
    var8.color = var10;
    var3.andOrRowLabelUnselected = var8;
    var8 = {};
    var10 = var5[var9];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.INTERACTIVE_TEXT_ACTIVE;
    var8.color = var10;
    var3.andOrRowLabelSelected = var8;
    var8 = {
        'display': 'flex',
        'flexDirection': 'row',
        'justifyContent': 'center',
        'padding': 16,
        'borderRadius': null,
        'borderColor': null,
        'borderWidth': 2,
        'borderStyle': 'dashed',
        'marginHorizontal': 8,
        'marginTop': 16
    };
    var10 = var5[var9];
    var10 = var11.bind(var0)(var10);
    var10 = var10.radii;
    var10 = var10.md;
    var8.borderRadius = var10;
    var10 = var5[var9];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BORDER_MUTED;
    var8.borderColor = var10;
    var3.addConnectionButton = var8;
    var8 = {};
    var8.paddingLeft = var9;
    var3.addConnectionText = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot12 = var3;
    var3 = 25;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_settings/roles/native/GuildSettingsRoleEditConnectionsControls.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun116073: for (var _fun116073_ip = 0;;) switch (_fun116073_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.guild;
                var _closure2_slot0 = var2;
                var10 = var0.role;
                var _closure2_slot1 = var10;
                var8 = var0.locked;
                var1 = var0.onConnectionsChanged;
                var _closure2_slot2 = var1;
                var9 = var0.integrations;
                var3 = undefined;
                var _closure2_slot4 = var3;
                var _closure2_slot5 = var3;
                var1 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 23;
                var6 = var4[var0];
                var12 = var1.bind(var3)(var6);
                var11 = var12.useStateFromStores;
                var6 = _closure1_slot5;
                var7 = new Array(1);
                var7[0] = var6;
                var14 = var10.id;
                var6 = new Array(2);
                var6[0] = var14;
                var2 = var2.id;
                var6[1] = var2;
                var2 = function() { // Environment: var13
                    _fun116074: for (var _fun116074_ip = 0;;) switch (_fun116074_ip) {
                        case 0:
                            var3 = _closure1_slot5;
                            var2 = var3.getRoleMemberCount;
                            var0 = _closure2_slot0;
                            var0 = var0.id;
                            var2 = var2.bind(var3)(var0);
                            var0 = null;
                            var3 = var0 == var2;
                            var0 = undefined;
                            if (var3) {
                                _fun116074_ip = 54;
                                continue _fun116074
                            }
                        case 41:
                            var1 = _closure2_slot1;
                            var1 = var1.id;
                            var0 = var2[var1];
                        case 54:
                            return var0;
                    }
                };
                var2 = var11.bind(var12)(var7, var2, var6);
                var0 = var4[var0];
                var6 = var1.bind(var3)(var0);
                var4 = var6.useStateFromStoresArray;
                var0 = _closure1_slot6;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var13
                    _fun116075: for (var _fun116075_ip = 0;;) switch (_fun116075_ip) {
                        case 0:
                            var1 = _closure1_slot6;
                            var0 = var1.getEditedRoleConnectionConfigurationsMap;
                            var2 = var0.bind(var1)();
                            var1 = var2.get;
                            var0 = _closure2_slot1;
                            var0 = var0.id;
                            var0 = var1.bind(var2)(var0);
                            var1 = null;
                            if (!(var1 == var0)) {
                                _fun116075_ip = 49;
                                continue _fun116075
                            }
                        case 45:
                            var0 = new Array(0);
                        case 49:
                            return var0;
                    }
                };
                var0 = var4.bind(var6)(var1, var0);
                var _closure2_slot3 = var0;
                var4 = var0.length;
                var1 = 1;
                if (!(!(var4 > var1))) {
                    _fun116073_ip = 222;
                    continue _fun116073
                }
            case 188:
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 9;
                var1 = var6[var1];
                var1 = var4.bind(var3)(var1);
                var1 = var1.ConnectionConfigurationRuleOperator;
                var19 = var1.AND;
                _fun116073_ip = 254;
                continue _fun116073;
            case 222:
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 9;
                var1 = var6[var1];
                var1 = var4.bind(var3)(var1);
                var1 = var1.ConnectionConfigurationRuleOperator;
                var19 = var1.OR;
            case 254:
                _closure2_slot4 = var19;
                var6 = _closure1_slot3;
                var4 = var6.useMemo;
                var1 = new Array(2);
                var1[0] = var19;
                var1[1] = var0;
                var0 = function() { // Environment: var13
                    _fun116076: for (var _fun116076_ip = 0;;) switch (_fun116076_ip) {
                        case 0:
                            var2 = _closure2_slot4;
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var0 = 9;
                            var3 = var3[var0];
                            var0 = undefined;
                            var0 = var4.bind(var0)(var3);
                            var0 = var0.ConnectionConfigurationRuleOperator;
                            var0 = var0.OR;
                            if (!(var2 !== var0)) {
                                _fun116076_ip = 89;
                                continue _fun116076
                            }
                        case 48:
                            var2 = _closure2_slot3;
                            var0 = null;
                            if (!(var0 != var2)) {
                                _fun116076_ip = 73;
                                continue _fun116076
                            }
                        case 58:
                            var0 = _closure2_slot3;
                            var0 = var0.length;
                            var3 = 0;
                            if (!(!(var0 > var3))) {
                                _fun116076_ip = 79;
                                continue _fun116076
                            }
                        case 73:
                            var0 = new Array(0);
                            _fun116076_ip = 87;
                            continue _fun116076;
                        case 79:
                            var2 = _closure2_slot3;
                            var0 = var2[var3];
                        case 87:
                            _fun116076_ip = 103;
                            continue _fun116076;
                        case 89:
                            var2 = _closure2_slot3;
                            var1 = var2.flat;
                            var0 = var1.bind(var2)();
                        case 103:
                            return var0;
                    }
                };
                var15 = var4.bind(var6)(var0, var1);
                _closure2_slot5 = var15;
                var4 = var6.useMemo;
                var1 = new Array(1);
                var1[0] = var15;
                var0 = function() { // Environment: var13
                    var0 = global;
                    var2 = var0.Set;
                    var3 = _closure2_slot5;
                    var1 = var3.map;
                    var0 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var0 = var0.connectionType;
                        return var0;
                    };
                    var4 = var1.bind(var3)(var0);
                    var1 = var2.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var2
                        }
                    });
                    var5 = var1;
                    var0 = new var5[var2](var4, var3);
                    var0 = var0 instanceof Object ? var0 : var1;
                    return var0;
                };
                var12 = var4.bind(var6)(var0, var1);
                var4 = var6.useMemo;
                var1 = new Array(1);
                var1[0] = var15;
                var0 = function() { // Environment: var13
                    var1 = global;
                    var2 = var1.Set;
                    var4 = _closure2_slot5;
                    var3 = var4.map;
                    var1 = function(arg0) { // Environment: var0
                        _fun116080: for (var _fun116080_ip = 0;;) switch (_fun116080_ip) {
                            case 0:
                                var0 = arg0;
                                var1 = var0.applicationId;
                                var0 = null;
                                var2 = var0 != var1;
                                var0 = '';
                                if (!var2) {
                                    _fun116080_ip = 24;
                                    continue _fun116080
                                }
                            case 21:
                                var0 = var1;
                            case 24:
                                return var0;
                        }
                    };
                    var3 = var3.bind(var4)(var1);
                    var1 = var3.filter;
                    var0 = function(arg0) { // Environment: var0
                        var1 = '';
                        var0 = arg0;
                        var0 = var1 !== var0;
                        return var0;
                    };
                    var5 = var1.bind(var3)(var0);
                    var1 = var2.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var2
                        }
                    });
                    var6 = var1;
                    var0 = new var6[var2](var5, var4);
                    var0 = var0 instanceof Object ? var0 : var1;
                    return var0;
                };
                var11 = var4.bind(var6)(var0, var1);
                var0 = var12.size;
                var1 = 0;
                var7 = var0 > var1;
                var6 = null;
                var4 = var6 != var2;
                var0 = 0;
                if (!var4) {
                    _fun116073_ip = 373;
                    continue _fun116073
                }
            case 370:
                var0 = var2;
            case 373:
                var17 = var0 > var1;
                var2 = _closure1_slot10;
                var1 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 14;
                var0 = var4[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.Form;
                var0 = {};
                var4 = 'handled';
                var0.keyboardShouldPersistTaps = var4;
                var16 = _closure1_slot9;
                var14 = _closure1_slot16;
                var4 = {};
                var18 = function() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 24;
                    var1 = var1[var0];
                    var0 = undefined;
                    var5 = var2.bind(var0)(var1);
                    var4 = var5.updateRoleConnectionConfigurations;
                    var2 = _closure2_slot1;
                    var3 = var2.id;
                    var2 = new Array(0);
                    var2 = var4.bind(var5)(var3, var2);
                    var1 = _closure2_slot2;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var4.clearConnections = var18;
                var4.locked = var8;
                var4.hasConnections = var7;
                var4.hasMembers = var17;
                var14 = var16.bind(var3)(var14, var4);
                var4 = new Array(4);
                var4[0] = var14;
                var14 = null;
                if (!var7) {
                    _fun116073_ip = 517;
                    continue _fun116073
                }
            case 474:
                var18 = _closure1_slot9;
                var17 = _closure1_slot17;
                var16 = {};
                var16.locked = var8;
                var16.currentOperator = var19;
                var16.roleConnectionConfigurations = var15;
                var19 = function arg0, arg1() {
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 24;
                    var1 = var1[var0];
                    var0 = undefined;
                    var5 = var3.bind(var0)(var1);
                    var4 = var5.updateRoleConnectionConfigurations;
                    var3 = _closure2_slot1;
                    var3 = var3.id;
                    var7 = _closure1_slot15;
                    var6 = arg0;
                    var2 = arg1;
                    var2 = var7.bind(var0)(var6, var2);
                    var2 = var4.bind(var5)(var3, var2);
                    var1 = _closure2_slot2;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var16.setPendingRoleConfigurations = var19;
                var14 = var18.bind(var3)(var17, var16);
            case 517:
                var4[1] = var14;
                var6 = null;
                if (!var7) {
                    _fun116073_ip = 559;
                    continue _fun116073
                }
            case 526:
                var14 = _closure1_slot18;
                var7 = var10.id;
                var24 = function(arg0) { // Environment: var13
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 24;
                    var1 = var1[var0];
                    var0 = undefined;
                    var5 = var3.bind(var0)(var1);
                    var4 = var5.updateRoleConnectionConfigurations;
                    var3 = _closure2_slot1;
                    var3 = var3.id;
                    var7 = _closure1_slot15;
                    var6 = _closure2_slot4;
                    var2 = arg0;
                    var2 = var7.bind(var0)(var2, var6);
                    var2 = var4.bind(var5)(var3, var2);
                    var1 = _closure2_slot2;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var26 = undefined;
                var25 = var15;
                var23 = var8;
                var22 = undefined;
                var21 = var9;
                var6 = var26[var14](var25, var24, var23, var22, var21, var20);
            case 559:
                var4[2] = var6;
                var7 = _closure1_slot9;
                var6 = _closure1_slot19;
                var5 = {};
                var13 = function arg0() {
                    _fun116085: for (var _fun116085_ip = 0;;) switch (_fun116085_ip) {
                        case 0:
                            var4 = arguments[1];
                            var0 = undefined;
                            if (!(var4 === var0)) {
                                _fun116085_ip = 11;
                                continue _fun116085
                            }
                        case 9:
                            var4 = undefined;
                        case 11:
                            var9 = _closure2_slot5;
                            var7 = new Array(0);
                            var8 = 0;
                            var10 = var7;
                            var2 = arraySpread(var10, var9, var8);
                            var3 = var7.push;
                            var2 = {};
                            var5 = arg0;
                            var2.connectionType = var5;
                            var2.connectionMetadataField = var0;
                            var2.applicationId = var4;
                            var2.operator = var0;
                            var2.value = var0;
                            var2 = var3.bind(var7)(var2);
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var3 = 24;
                            var3 = var5[var3];
                            var5 = var4.bind(var0)(var3);
                            var4 = var5.updateRoleConnectionConfigurations;
                            var3 = _closure2_slot1;
                            var3 = var3.id;
                            var6 = _closure1_slot15;
                            var2 = _closure2_slot4;
                            var2 = var6.bind(var0)(var7, var2);
                            var2 = var4.bind(var5)(var3, var2);
                            var1 = _closure2_slot2;
                            var1 = var1.bind(var0)();
                            return var0;
                    }
                };
                var5.handleConnectionTapped = var13;
                var5.excludedConnections = var12;
                var5.excludedApplications = var11;
                var10 = var10.id;
                var5.roleId = var10;
                var5.integrations = var9;
                var5.locked = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[3] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 9899, 14757, 660, 4523, 33, 1297, 671, 4522, 22, 5391, 3941, 1234, 5378, 4902, 5332, 1684, 14784, 3278, 14785, 1307, 10910, 566, 14771, 2]);