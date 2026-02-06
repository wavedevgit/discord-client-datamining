// modules/guild_settings/roles/native/GuildSettingsRoleEditConnectionConfiguration.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun116288: for (var _fun116288_ip = 0;;) switch (_fun116288_ip) {
            case 0:
                var0 = arg0;
                var13 = var0.theme;
                var16 = var0.platform;
                var17 = var0.integration;
                var9 = var0.onRemove;
                var8 = var0.locked;
                var0 = _closure1_slot14;
                var3 = undefined;
                var10 = var0.bind(var3)();
                var18 = null;
                var1 = var18 == var17;
                var0 = undefined;
                if (var1) {
                    _fun116288_ip = 62;
                    continue _fun116288
                }
            case 57:
                var0 = var17.application;
            case 62:
                if (!(var18 == var0)) {
                    _fun116288_ip = 198;
                    continue _fun116288
                }
            case 69:
                var0 = var18 != var16;
                var4 = undefined;
                if (!var0) {
                    _fun116288_ip = 296;
                    continue _fun116288
                }
            case 81:
                var2 = _closure1_slot11;
                var1 = _closure1_slot1;
                var14 = _closure1_slot2;
                var0 = 9;
                var0 = var14[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var12 = _closure1_slot0;
                var5 = 10;
                var5 = var14[var5];
                var11 = var12.bind(var3)(var5);
                var6 = var11.makeSource;
                var5 = 11;
                var5 = var14[var5];
                var12 = var12.bind(var3)(var5);
                var5 = var12.isThemeDark;
                var5 = var5.bind(var12)(var13);
                var12 = var16.icon;
                if (var5) {
                    _fun116288_ip = 168;
                    continue _fun116288
                }
            case 160:
                var5 = var12.lightPNG;
                _fun116288_ip = 174;
                continue _fun116288;
            case 168:
                var5 = var12.darkPNG;
            case 174:
                var5 = var6.bind(var11)(var5);
                var0.source = var5;
                var5 = true;
                var0.disableColor = var5;
                var4 = var2.bind(var3)(var1, var0);
                _fun116288_ip = 296;
                continue _fun116288;
            case 198:
                var2 = _closure1_slot11;
                var1 = _closure1_slot1;
                var11 = _closure1_slot2;
                var5 = 8;
                var0 = var11[var5];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var6 = _closure1_slot0;
                var5 = var11[var5];
                var5 = var6.bind(var3)(var5);
                var5 = var5.AvatarSizes;
                var5 = var5.XSMALL;
                var0.size = var5;
                var6 = var18 == var17;
                var5 = undefined;
                if (var6) {
                    _fun116288_ip = 282;
                    continue _fun116288
                }
            case 262:
                var6 = var17.application;
                var11 = var18 == var6;
                var5 = undefined;
                if (var11) {
                    _fun116288_ip = 282;
                    continue _fun116288
                }
            case 276:
                var5 = var6.bot;
            case 282:
                var0.user = var5;
                var0.guildId = var3;
                var4 = var2.bind(var3)(var1, var0);
            case 296:
                var2 = _closure1_slot11;
                var12 = _closure1_slot0;
                var11 = _closure1_slot2;
                var0 = 12;
                var0 = var11[var0];
                var0 = var12.bind(var3)(var0);
                var1 = var0.FormRow;
                var0 = {};
                var0.leading = var4;
                var6 = _closure1_slot11;
                var4 = 13;
                var4 = var11[var4];
                var4 = var12.bind(var3)(var4);
                var5 = var4.Text;
                var4 = {};
                var13 = 'text-md/medium';
                var4.variant = var13;
                var10 = var10.headerText;
                var4.style = var10;
                var10 = 14;
                var13 = var11[var10];
                var13 = var12.bind(var3)(var13);
                var14 = var13.intl;
                var13 = var14.format;
                var11 = var11[var10];
                var11 = var12.bind(var3)(var11);
                var11 = var11.t;
                var12 = var11.Nj0a3j;
                var11 = {};
                var19 = var18 == var16;
                var15 = undefined;
                if (var19) {
                    _fun116288_ip = 434;
                    continue _fun116288
                }
            case 429:
                var15 = var16.name;
            case 434:
                if (!(var18 == var15)) {
                    _fun116288_ip = 469;
                    continue _fun116288
                }
            case 438:
                var19 = var18 == var17;
                var16 = undefined;
                if (var19) {
                    _fun116288_ip = 466;
                    continue _fun116288
                }
            case 447:
                var17 = var17.application;
                var18 = var18 == var17;
                var16 = undefined;
                if (var18) {
                    _fun116288_ip = 466;
                    continue _fun116288
                }
            case 461:
                var16 = var17.name;
            case 466:
                var15 = var16;
            case 469:
                var11.platformName = var15;
                var11 = var13.bind(var14)(var12, var11);
                var4.children = var11;
                var4 = var6.bind(var3)(var5, var4);
                var0.label = var4;
                var6 = _closure1_slot11;
                var14 = _closure1_slot0;
                var12 = _closure1_slot2;
                var4 = 15;
                var4 = var12[var4];
                var4 = var14.bind(var3)(var4);
                var5 = var4.PressableOpacity;
                var4 = {};
                var11 = var12[var10];
                var11 = var14.bind(var3)(var11);
                var13 = var11.intl;
                var11 = var13.string;
                var10 = var12[var10];
                var10 = var14.bind(var3)(var10);
                var10 = var10.t;
                var10 = var10.N86XcP;
                var10 = var11.bind(var13)(var10);
                var4['aria-label'] = var10;
                var4.onPress = var9;
                var4.disabled = var8;
                var9 = _closure1_slot11;
                var11 = _closure1_slot1;
                var7 = 9;
                var7 = var12[var7];
                var8 = var11.bind(var3)(var7);
                var7 = {};
                var10 = 16;
                var10 = var12[var10];
                var10 = var11.bind(var3)(var10);
                var7.source = var10;
                var7 = var9.bind(var3)(var8, var7);
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.trailing = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var0 = function arg0() {
        _fun116289: for (var _fun116289_ip = 0;;) switch (_fun116289_ip) {
            case 0:
                var0 = arg0;
                var16 = var0.fieldText;
                var4 = var0.metadataField;
                var _closure2_slot0 = var4;
                var10 = var0.existingPendingConfiguration;
                var _closure2_slot1 = var10;
                var1 = var0.platform;
                var _closure2_slot2 = var1;
                var1 = var0.onConfigurationChange;
                var _closure2_slot3 = var1;
                var9 = var0.locked;
                var1 = var0.applicationId;
                var _closure2_slot4 = var1;
                var0 = var0.operator;
                var3 = undefined;
                var _closure2_slot5 = var3;
                var1 = _closure1_slot14;
                var13 = var1.bind(var3)();
                var11 = null;
                if (!(var11 == var0)) {
                    _fun116289_ip = 105;
                    continue _fun116289
                }
            case 95:
                var1 = _closure1_slot8;
                var0 = var1.EQUAL;
            case 105:
                _closure2_slot5 = var0;
                var2 = _closure1_slot11;
                var6 = _closure1_slot0;
                var12 = _closure1_slot2;
                var5 = 12;
                var0 = var12[var5];
                var0 = var6.bind(var3)(var0);
                var1 = var0.FormRow;
                var0 = {};
                var13 = var13.metadataRow;
                var0.style = var13;
                var15 = _closure1_slot11;
                var13 = 13;
                var13 = var12[var13];
                var13 = var6.bind(var3)(var13);
                var14 = var13.Text;
                var13 = {};
                var17 = 'text-md/normal';
                var13.variant = var17;
                var13.children = var16;
                var13 = var15.bind(var3)(var14, var13);
                var0.label = var13;
                var13 = 'switch';
                var0.accessibilityRole = var13;
                var7 = _closure1_slot11;
                var5 = var12[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.FormSwitch;
                var5 = {};
                var12 = var11 == var10;
                var11 = undefined;
                if (var12) {
                    _fun116289_ip = 247;
                    continue _fun116289
                }
            case 236:
                var10 = var10.configuration;
                var11 = var10.value;
            case 247:
                var10 = '1';
                var10 = var10 === var11;
                var5.value = var10;
                var5.disabled = var9;
                var9 = true;
                var5.renderIosBackground = var9;
                var8 = function arg0() {
                    _fun116290: for (var _fun116290_ip = 0;;) switch (_fun116290_ip) {
                        case 0:
                            var1 = null;
                            var0 = arg0;
                            var3 = null;
                            if (!var0) {
                                _fun116290_ip = 92;
                                continue _fun116290
                            }
                        case 10:
                            var0 = {};
                            var4 = _closure2_slot2;
                            var5 = var1 == var4;
                            var4 = undefined;
                            if (var5) {
                                _fun116290_ip = 37;
                                continue _fun116290
                            }
                        case 28:
                            var5 = _closure2_slot2;
                            var4 = var5.type;
                        case 37:
                            if (!(var1 == var4)) {
                                _fun116290_ip = 48;
                                continue _fun116290
                            }
                        case 41:
                            var4 = _closure1_slot10;
                        case 48:
                            var0.connectionType = var4;
                            var4 = _closure2_slot4;
                            var0.applicationId = var4;
                            var4 = _closure2_slot0;
                            var0.connectionMetadataField = var4;
                            var2 = _closure2_slot5;
                            var0.operator = var2;
                            var2 = '1';
                            var0.value = var2;
                            var3 = var0;
                        case 92:
                            var2 = _closure2_slot3;
                            var0 = _closure2_slot1;
                            var6 = var1 == var0;
                            var0 = undefined;
                            var4 = undefined;
                            if (var6) {
                                _fun116290_ip = 123;
                                continue _fun116290
                            }
                        case 114:
                            var5 = _closure2_slot1;
                            var4 = var5.index;
                        case 123:
                            var5 = var1 != var4;
                            var1 = -1;
                            if (!var5) {
                                _fun116290_ip = 139;
                                continue _fun116290
                            }
                        case 136:
                            var1 = var4;
                        case 139:
                            var1 = var2.bind(var0)(var3, var1);
                            return var0;
                    }
                };
                var5.onValueChange = var8;
                var5 = var7.bind(var3)(var6, var5);
                var0.trailing = var5;
                var0 = var2.bind(var3)(var1, var0, var4);
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var0 = function arg0() {
        _fun116291: for (var _fun116291_ip = 0;;) switch (_fun116291_ip) {
            case 0:
                var0 = arg0;
                var16 = var0.fieldText;
                var11 = var0.fieldTextHook;
                var4 = var0.metadataField;
                var _closure2_slot0 = var4;
                var2 = var0.existingPendingConfiguration;
                var _closure2_slot1 = var2;
                var1 = var0.platform;
                var _closure2_slot2 = var1;
                var1 = var0.onConfigurationChange;
                var _closure2_slot3 = var1;
                var9 = var0.locked;
                var _closure2_slot4 = var9;
                var14 = var0.operator;
                var _closure2_slot5 = var14;
                var0 = var0.applicationId;
                var _closure2_slot6 = var0;
                var3 = undefined;
                var _closure2_slot8 = var3;
                var _closure2_slot9 = var3;
                var _closure2_slot10 = var3;
                var _closure2_slot11 = var3;
                var _closure2_slot12 = var3;
                var _closure2_slot13 = var3;
                var0 = _closure1_slot14;
                var13 = var0.bind(var3)();
                var _closure2_slot7 = var13;
                var1 = null;
                var0 = var1 == var2;
                var5 = undefined;
                if (var0) {
                    _fun116291_ip = 143;
                    continue _fun116291
                }
            case 138:
                var5 = var2.index;
            case 143:
                var6 = var1 != var5;
                var0 = -1;
                if (!var6) {
                    _fun116291_ip = 159;
                    continue _fun116291
                }
            case 156:
                var0 = var5;
            case 159:
                _closure2_slot8 = var0;
                if (!(var1 == var14)) {
                    _fun116291_ip = 177;
                    continue _fun116291
                }
            case 167:
                var0 = _closure1_slot8;
                var14 = var0.GREATER_THAN;
            case 177:
                _closure2_slot9 = var14;
                var6 = global;
                var12 = var6.Math;
                var10 = var12.round;
                var15 = var6.Number;
                var0 = var1 == var2;
                var17 = undefined;
                if (var0) {
                    _fun116291_ip = 229;
                    continue _fun116291
                }
            case 209:
                var0 = var2.configuration;
                var5 = var1 == var0;
                var17 = undefined;
                if (var5) {
                    _fun116291_ip = 229;
                    continue _fun116291
                }
            case 224:
                var17 = var0.value;
            case 229:
                var18 = var1 != var17;
                var0 = 0;
                var5 = 0;
                if (!var18) {
                    _fun116291_ip = 243;
                    continue _fun116291
                }
            case 240:
                var5 = var17;
            case 243:
                var5 = var15.bind(var3)(var5);
                var5 = var10.bind(var12)(var5);
                var10 = _closure1_slot8;
                var10 = var10.GREATER_THAN;
                if (!(var14 !== var10)) {
                    _fun116291_ip = 310;
                    continue _fun116291
                }
            case 267:
                var10 = _closure1_slot8;
                var10 = var10.LESS_THAN;
                var12 = var5;
                if (!(var14 === var10)) {
                    _fun116291_ip = 334;
                    continue _fun116291
                }
            case 284:
                var15 = var6.Math;
                var14 = var15.max;
                var10 = 1;
                var10 = var5 - var10;
                var12 = var14.bind(var15)(var0, var10);
                _fun116291_ip = 334;
                continue _fun116291;
            case 310:
                var14 = var6.Math;
                var10 = var14.max;
                var6 = 1;
                var5 = var5 + var6;
                var12 = var10.bind(var14)(var6, var5);
            case 334:
                var10 = _closure1_slot4;
                var6 = var10.useState;
                var5 = var12.toString;
                var5 = var5.bind(var12)();
                var10 = var6.bind(var10)(var5);
                var6 = _closure1_slot3;
                var5 = 2;
                var5 = var6.bind(var3)(var10, var5);
                var22 = var5[var0];
                _closure2_slot10 = var22;
                var0 = 1;
                var0 = var5[var0];
                _closure2_slot11 = var0;
                var21 = function arg0() {
                    _fun116292: for (var _fun116292_ip = 0;;) switch (_fun116292_ip) {
                        case 0:
                            var2 = arg0;
                            var1 = _closure2_slot1;
                            var8 = null;
                            if (!(var8 != var1)) {
                                _fun116292_ip = 256;
                                continue _fun116292
                            }
                        case 19:
                            var1 = '';
                            if (!(var1 !== var2)) {
                                _fun116292_ip = 245;
                                continue _fun116292
                            }
                        case 30:
                            var1 = global;
                            var6 = var1.Math;
                            var4 = var6.round;
                            var3 = var1.Number;
                            var5 = undefined;
                            var3 = var3.bind(var5)(var2);
                            var3 = var4.bind(var6)(var3);
                            var6 = _closure2_slot9;
                            var4 = _closure1_slot8;
                            var4 = var4.GREATER_THAN;
                            if (!(var6 !== var4)) {
                                _fun116292_ip = 129;
                                continue _fun116292
                            }
                        case 82:
                            var9 = _closure2_slot9;
                            var4 = _closure1_slot8;
                            var4 = var4.LESS_THAN;
                            var6 = var3;
                            if (!(var9 === var4)) {
                                _fun116292_ip = 155;
                                continue _fun116292
                            }
                        case 103:
                            var11 = var1.Math;
                            var10 = var11.max;
                            var9 = 1;
                            var4 = var3 + var9;
                            var6 = var10.bind(var11)(var9, var4);
                            _fun116292_ip = 155;
                            continue _fun116292;
                        case 129:
                            var9 = var1.Math;
                            var4 = var9.max;
                            var1 = 1;
                            var3 = var3 - var1;
                            var1 = 0;
                            var6 = var4.bind(var9)(var1, var3);
                        case 155:
                            var4 = _closure2_slot3;
                            var3 = {};
                            var1 = _closure2_slot2;
                            var9 = var8 == var1;
                            var1 = undefined;
                            if (var9) {
                                _fun116292_ip = 183;
                                continue _fun116292
                            }
                        case 174:
                            var9 = _closure2_slot2;
                            var1 = var9.type;
                        case 183:
                            if (!(var8 == var1)) {
                                _fun116292_ip = 191;
                                continue _fun116292
                            }
                        case 187:
                            var1 = _closure1_slot10;
                        case 191:
                            var3.connectionType = var1;
                            var1 = _closure2_slot6;
                            var3.applicationId = var1;
                            var1 = _closure2_slot0;
                            var3.connectionMetadataField = var1;
                            var1 = _closure2_slot9;
                            var3.operator = var1;
                            var1 = var6.toString;
                            var1 = var1.bind(var6)();
                            var3.value = var1;
                            var1 = _closure2_slot8;
                            var1 = var4.bind(var5)(var3, var1);
                        case 245:
                            var1 = _closure2_slot11;
                            var0 = undefined;
                            var0 = var1.bind(var0)(var2);
                        case 256:
                            var0 = undefined;
                            return var0;
                    }
                };
                _closure2_slot12 = var21;
                var5 = var1 == var2;
                var0 = undefined;
                if (var5) {
                    _fun116291_ip = 415;
                    continue _fun116291
                }
            case 409:
                var0 = var2.configuration;
            case 415:
                var10 = var1 != var0;
                if (!(var3 === var11)) {
                    _fun116291_ip = 637;
                    continue _fun116291
                }
            case 426:
                var12 = undefined;
                if (!(var12 !== var16)) {
                    _fun116291_ip = 793;
                    continue _fun116291
                }
            case 435:
                var2 = _closure1_slot12;
                var1 = _closure1_slot5;
                var0 = {};
                var5 = var13.appNumericalInputContainer;
                var0.style = var5;
                var18 = _closure1_slot11;
                var15 = _closure1_slot5;
                var6 = {};
                var5 = var13.numericalInputContainer;
                var6.style = var5;
                var20 = _closure1_slot11;
                var14 = _closure1_slot0;
                var17 = _closure1_slot2;
                var5 = 18;
                var5 = var17[var5];
                var5 = var14.bind(var3)(var5);
                var19 = var5.TextInput;
                var5 = {};
                var23 = 'numeric';
                var5.keyboardType = var23;
                var23 = var13.appNumericalInput;
                var5.style = var23;
                var23 = !var9;
                var5.editable = var23;
                var5.value = var22;
                var5.onChangeText = var21;
                var5 = var20.bind(var3)(var19, var5, var4);
                var6.children = var5;
                var5 = '_numericalInputContainer';
                var6 = var18.bind(var3)(var15, var6, var5);
                var5 = new Array(2);
                var5[0] = var6;
                var15 = _closure1_slot11;
                var6 = 13;
                var6 = var17[var6];
                var6 = var14.bind(var3)(var6);
                var14 = var6.Text;
                var6 = {};
                var17 = 'text-md/normal';
                var6.variant = var17;
                var6.children = var16;
                var6 = var15.bind(var3)(var14, var6);
                var5[1] = var6;
                var0.children = var5;
                var12 = var2.bind(var3)(var1, var0);
                _fun116291_ip = 793;
                continue _fun116291;
            case 637:
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 17;
                var0 = var2[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.isIOS;
                var0 = var0.bind(var1)();
                if (var0) {
                    _fun116291_ip = 678;
                    continue _fun116291
                }
            case 670:
                var0 = var13.numericalInputContainer;
                _fun116291_ip = 684;
                continue _fun116291;
            case 678:
                var0 = var13.numericalInputContainerIOS;
            case 684:
                _closure2_slot13 = var0;
                var1 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 14;
                var0 = var6[var0];
                var0 = var1.bind(var3)(var0);
                var5 = var0.intl;
                var2 = var5.format;
                var0 = {};
                var14 = function() {
                    var4 = _closure1_slot11;
                    var3 = _closure1_slot5;
                    var2 = {};
                    var6 = _closure2_slot13;
                    var5 = new Array(2);
                    var5[0] = var6;
                    var8 = _closure2_slot7;
                    var6 = var8.numericalInputContainerBase;
                    var5[1] = var6;
                    var2.style = var5;
                    var7 = _closure1_slot11;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 18;
                    var5 = var5[var1];
                    var1 = undefined;
                    var5 = var6.bind(var1)(var5);
                    var6 = var5.TextInput;
                    var5 = {};
                    var9 = 'numeric';
                    var5.keyboardType = var9;
                    var8 = var8.numericalInput;
                    var5.style = var8;
                    var8 = _closure2_slot4;
                    var8 = !var8;
                    var5.editable = var8;
                    var8 = _closure2_slot10;
                    var5.value = var8;
                    var8 = _closure2_slot12;
                    var5.onChangeText = var8;
                    var0 = _closure2_slot0;
                    var0 = var7.bind(var1)(var6, var5, var0);
                    var2.children = var0;
                    var0 = '_numericalInputContainer';
                    var0 = var4.bind(var1)(var3, var2, var0);
                    return var0;
                };
                var0.metadataHook = var14;
                var5 = var2.bind(var5)(var11, var0);
                var2 = _closure1_slot11;
                var0 = 13;
                var0 = var6[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.Text;
                var0 = {};
                var6 = 'text-md/normal';
                var0.variant = var6;
                var6 = var13.metadataRowText;
                var0.style = var6;
                var0.children = var5;
                var12 = var2.bind(var3)(var1, var0);
            case 793:
                var2 = _closure1_slot11;
                var6 = _closure1_slot0;
                var11 = _closure1_slot2;
                var5 = 12;
                var0 = var11[var5];
                var0 = var6.bind(var3)(var0);
                var1 = var0.FormRow;
                var0 = {};
                var13 = var13.metadataRow;
                var0.style = var13;
                var0.label = var12;
                var12 = 'switch';
                var0.accessibilityRole = var12;
                var7 = _closure1_slot11;
                var5 = var11[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.FormSwitch;
                var5 = {};
                var5.value = var10;
                var5.disabled = var9;
                var9 = true;
                var5.renderIosBackground = var9;
                var8 = function arg0() {
                    _fun116294: for (var _fun116294_ip = 0;;) switch (_fun116294_ip) {
                        case 0:
                            var1 = null;
                            var0 = arg0;
                            var3 = null;
                            if (!var0) {
                                _fun116294_ip = 239;
                                continue _fun116294
                            }
                        case 13:
                            var0 = _closure2_slot5;
                            if (!(var1 == var0)) {
                                _fun116294_ip = 39;
                                continue _fun116294
                            }
                        case 24:
                            var0 = _closure1_slot8;
                            var2 = var0.GREATER_THAN;
                            _fun116294_ip = 43;
                            continue _fun116294;
                        case 39:
                            var2 = _closure2_slot5;
                        case 43:
                            var0 = global;
                            var8 = var0.Math;
                            var7 = var8.round;
                            var9 = var0.Number;
                            var4 = _closure2_slot10;
                            var6 = undefined;
                            var4 = var9.bind(var6)(var4);
                            var8 = var7.bind(var8)(var4);
                            var4 = _closure1_slot8;
                            var4 = var4.GREATER_THAN;
                            if (!(var2 !== var4)) {
                                _fun116294_ip = 138;
                                continue _fun116294
                            }
                        case 95:
                            var4 = _closure1_slot8;
                            var9 = var4.LESS_THAN;
                            var4 = var8;
                            if (!(var2 === var9)) {
                                _fun116294_ip = 164;
                                continue _fun116294
                            }
                        case 112:
                            var12 = var0.Math;
                            var11 = var12.max;
                            var10 = 1;
                            var9 = var8 + var10;
                            var4 = var11.bind(var12)(var10, var9);
                            _fun116294_ip = 164;
                            continue _fun116294;
                        case 138:
                            var10 = var0.Math;
                            var9 = var10.max;
                            var0 = 1;
                            var8 = var8 - var0;
                            var0 = 0;
                            var4 = var9.bind(var10)(var0, var8);
                        case 164:
                            var0 = {};
                            var8 = _closure2_slot2;
                            var8 = var1 == var8;
                            var6 = undefined;
                            if (var8) {
                                _fun116294_ip = 188;
                                continue _fun116294
                            }
                        case 179:
                            var8 = _closure2_slot2;
                            var6 = var8.type;
                        case 188:
                            if (!(var1 == var6)) {
                                _fun116294_ip = 196;
                                continue _fun116294
                            }
                        case 192:
                            var6 = _closure1_slot10;
                        case 196:
                            var0.connectionType = var6;
                            var6 = _closure2_slot6;
                            var0.applicationId = var6;
                            var5 = _closure2_slot0;
                            var0.connectionMetadataField = var5;
                            var0.operator = var2;
                            var2 = var4.toString;
                            var2 = var2.bind(var4)();
                            var0.value = var2;
                            var3 = var0;
                        case 239:
                            var2 = _closure2_slot3;
                            var0 = _closure2_slot1;
                            var6 = var1 == var0;
                            var0 = undefined;
                            var4 = undefined;
                            if (var6) {
                                _fun116294_ip = 270;
                                continue _fun116294
                            }
                        case 261:
                            var5 = _closure2_slot1;
                            var4 = var5.index;
                        case 270:
                            var5 = var1 != var4;
                            var1 = -1;
                            if (!var5) {
                                _fun116294_ip = 286;
                                continue _fun116294
                            }
                        case 283:
                            var1 = var4;
                        case 286:
                            var1 = var2.bind(var0)(var3, var1);
                            return var0;
                    }
                };
                var5.onValueChange = var8;
                var5 = var7.bind(var3)(var6, var5);
                var0.trailing = var5;
                var0 = var2.bind(var3)(var1, var0, var4);
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var13 = var0.configMetadataMap;
        var9 = var0.onConfigurationChange;
        var8 = var0.locked;
        var0 = _closure1_slot14;
        var3 = undefined;
        var17 = var0.bind(var3)();
        var1 = _closure1_slot1;
        var15 = _closure1_slot2;
        var0 = 19;
        var0 = var15[var0];
        var2 = var1.bind(var3)(var0);
        var1 = var2.get;
        var0 = _closure1_slot6;
        var0 = var0.BLUESKY;
        var10 = var1.bind(var2)(var0);
        var2 = _closure1_slot12;
        var1 = _closure1_slot13;
        var0 = {};
        var5 = _closure1_slot11;
        var7 = _closure1_slot17;
        var4 = {};
        var14 = _closure1_slot0;
        var12 = 14;
        var6 = var15[var12];
        var6 = var14.bind(var3)(var6);
        var6 = var6.t;
        var6 = var6["REyUZ/"];
        var4.fieldTextHook = var6;
        var6 = _closure1_slot7;
        var6 = var6.CREATED_AT;
        var4.metadataField = var6;
        var16 = var13.get;
        var6 = _closure1_slot7;
        var6 = var6.CREATED_AT;
        var6 = var16.bind(var13)(var6);
        var4.existingPendingConfiguration = var6;
        var4.platform = var10;
        var4.onConfigurationChange = var9;
        var4.locked = var8;
        var5 = var5.bind(var3)(var7, var4);
        var4 = new Array(5);
        var4[0] = var5;
        var18 = _closure1_slot11;
        var5 = 12;
        var6 = var15[var5];
        var6 = var14.bind(var3)(var6);
        var16 = var6.FormDivider;
        var6 = {};
        var19 = var17.divider;
        var6.style = var19;
        var6 = var18.bind(var3)(var16, var6);
        var4[1] = var6;
        var16 = _closure1_slot11;
        var6 = {};
        var18 = var15[var12];
        var18 = var14.bind(var3)(var18);
        var18 = var18.t;
        var18 = var18["/w/EYk"];
        var6.fieldTextHook = var18;
        var18 = _closure1_slot7;
        var18 = var18.BLUESKY_FOLLOWERS_COUNT;
        var6.metadataField = var18;
        var19 = var13.get;
        var18 = _closure1_slot7;
        var18 = var18.BLUESKY_FOLLOWERS_COUNT;
        var18 = var19.bind(var13)(var18);
        var6.existingPendingConfiguration = var18;
        var6.platform = var10;
        var6.onConfigurationChange = var9;
        var6.locked = var8;
        var6 = var16.bind(var3)(var7, var6);
        var4[2] = var6;
        var16 = _closure1_slot11;
        var5 = var15[var5];
        var5 = var14.bind(var3)(var5);
        var6 = var5.FormDivider;
        var5 = {};
        var17 = var17.divider;
        var5.style = var17;
        var5 = var16.bind(var3)(var6, var5);
        var4[3] = var5;
        var6 = _closure1_slot11;
        var5 = {};
        var12 = var15[var12];
        var12 = var14.bind(var3)(var12);
        var12 = var12.t;
        var12 = var12["5I4mVS"];
        var5.fieldTextHook = var12;
        var12 = _closure1_slot7;
        var12 = var12.BLUESKY_STATUSES_COUNT;
        var5.metadataField = var12;
        var12 = var13.get;
        var11 = _closure1_slot7;
        var11 = var11.BLUESKY_STATUSES_COUNT;
        var11 = var12.bind(var13)(var11);
        var5.existingPendingConfiguration = var11;
        var5.platform = var10;
        var5.onConfigurationChange = var9;
        var5.locked = var8;
        var5 = var6.bind(var3)(var7, var5);
        var4[4] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot18 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var13 = var0.configMetadataMap;
        var9 = var0.onConfigurationChange;
        var8 = var0.locked;
        var0 = _closure1_slot14;
        var3 = undefined;
        var17 = var0.bind(var3)();
        var1 = _closure1_slot1;
        var15 = _closure1_slot2;
        var0 = 19;
        var0 = var15[var0];
        var2 = var1.bind(var3)(var0);
        var1 = var2.get;
        var0 = _closure1_slot6;
        var0 = var0.STEAM;
        var10 = var1.bind(var2)(var0);
        var2 = _closure1_slot12;
        var1 = _closure1_slot13;
        var0 = {};
        var5 = _closure1_slot11;
        var7 = _closure1_slot17;
        var4 = {};
        var14 = _closure1_slot0;
        var12 = 14;
        var6 = var15[var12];
        var6 = var14.bind(var3)(var6);
        var6 = var6.t;
        var6 = var6["REyUZ/"];
        var4.fieldTextHook = var6;
        var6 = _closure1_slot7;
        var6 = var6.CREATED_AT;
        var4.metadataField = var6;
        var16 = var13.get;
        var6 = _closure1_slot7;
        var6 = var6.CREATED_AT;
        var6 = var16.bind(var13)(var6);
        var4.existingPendingConfiguration = var6;
        var4.platform = var10;
        var4.onConfigurationChange = var9;
        var4.locked = var8;
        var5 = var5.bind(var3)(var7, var4);
        var4 = new Array(7);
        var4[0] = var5;
        var18 = _closure1_slot11;
        var5 = 12;
        var6 = var15[var5];
        var6 = var14.bind(var3)(var6);
        var16 = var6.FormDivider;
        var6 = {};
        var19 = var17.divider;
        var6.style = var19;
        var6 = var18.bind(var3)(var16, var6);
        var4[1] = var6;
        var16 = _closure1_slot11;
        var6 = {};
        var18 = var15[var12];
        var18 = var14.bind(var3)(var18);
        var18 = var18.t;
        var18 = var18.zVJxqj;
        var6.fieldTextHook = var18;
        var18 = _closure1_slot7;
        var18 = var18.STEAM_GAME_COUNT;
        var6.metadataField = var18;
        var19 = var13.get;
        var18 = _closure1_slot7;
        var18 = var18.STEAM_GAME_COUNT;
        var18 = var19.bind(var13)(var18);
        var6.existingPendingConfiguration = var18;
        var6.platform = var10;
        var6.onConfigurationChange = var9;
        var6.locked = var8;
        var6 = var16.bind(var3)(var7, var6);
        var4[2] = var6;
        var18 = _closure1_slot11;
        var6 = var15[var5];
        var6 = var14.bind(var3)(var6);
        var16 = var6.FormDivider;
        var6 = {};
        var19 = var17.divider;
        var6.style = var19;
        var6 = var18.bind(var3)(var16, var6);
        var4[3] = var6;
        var16 = _closure1_slot11;
        var6 = {};
        var18 = var15[var12];
        var18 = var14.bind(var3)(var18);
        var18 = var18.t;
        var18 = var18["ZCNdD/"];
        var6.fieldTextHook = var18;
        var18 = _closure1_slot7;
        var18 = var18.STEAM_ITEM_COUNT_DOTA2;
        var6.metadataField = var18;
        var19 = var13.get;
        var18 = _closure1_slot7;
        var18 = var18.STEAM_ITEM_COUNT_DOTA2;
        var18 = var19.bind(var13)(var18);
        var6.existingPendingConfiguration = var18;
        var6.platform = var10;
        var6.onConfigurationChange = var9;
        var6.locked = var8;
        var6 = var16.bind(var3)(var7, var6);
        var4[4] = var6;
        var16 = _closure1_slot11;
        var5 = var15[var5];
        var5 = var14.bind(var3)(var5);
        var6 = var5.FormDivider;
        var5 = {};
        var17 = var17.divider;
        var5.style = var17;
        var5 = var16.bind(var3)(var6, var5);
        var4[5] = var5;
        var6 = _closure1_slot11;
        var5 = {};
        var12 = var15[var12];
        var12 = var14.bind(var3)(var12);
        var12 = var12.t;
        var12 = var12["MCHnK+"];
        var5.fieldTextHook = var12;
        var12 = _closure1_slot7;
        var12 = var12.STEAM_ITEM_COUNT_TF2;
        var5.metadataField = var12;
        var12 = var13.get;
        var11 = _closure1_slot7;
        var11 = var11.STEAM_ITEM_COUNT_TF2;
        var11 = var12.bind(var13)(var11);
        var5.existingPendingConfiguration = var11;
        var5.platform = var10;
        var5.onConfigurationChange = var9;
        var5.locked = var8;
        var5 = var6.bind(var3)(var7, var5);
        var4[6] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot19 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var13 = var0.configMetadataMap;
        var9 = var0.onConfigurationChange;
        var8 = var0.locked;
        var0 = _closure1_slot14;
        var3 = undefined;
        var14 = var0.bind(var3)();
        var1 = _closure1_slot1;
        var17 = _closure1_slot2;
        var0 = 19;
        var0 = var17[var0];
        var2 = var1.bind(var3)(var0);
        var1 = var2.get;
        var0 = _closure1_slot6;
        var0 = var0.TWITTER;
        var10 = var1.bind(var2)(var0);
        var2 = _closure1_slot12;
        var1 = _closure1_slot13;
        var0 = {};
        var5 = _closure1_slot11;
        var15 = _closure1_slot17;
        var4 = {};
        var16 = _closure1_slot0;
        var12 = 14;
        var6 = var17[var12];
        var6 = var16.bind(var3)(var6);
        var6 = var6.t;
        var6 = var6["REyUZ/"];
        var4.fieldTextHook = var6;
        var6 = _closure1_slot7;
        var6 = var6.CREATED_AT;
        var4.metadataField = var6;
        var7 = var13.get;
        var6 = _closure1_slot7;
        var6 = var6.CREATED_AT;
        var6 = var7.bind(var13)(var6);
        var4.existingPendingConfiguration = var6;
        var4.platform = var10;
        var4.onConfigurationChange = var9;
        var4.locked = var8;
        var5 = var5.bind(var3)(var15, var4);
        var4 = new Array(7);
        var4[0] = var5;
        var18 = _closure1_slot11;
        var5 = 12;
        var6 = var17[var5];
        var6 = var16.bind(var3)(var6);
        var7 = var6.FormDivider;
        var6 = {};
        var19 = var14.divider;
        var6.style = var19;
        var6 = var18.bind(var3)(var7, var6);
        var4[1] = var6;
        var7 = _closure1_slot11;
        var6 = {};
        var18 = var17[var12];
        var18 = var16.bind(var3)(var18);
        var18 = var18.t;
        var18 = var18["/w/EYk"];
        var6.fieldTextHook = var18;
        var18 = _closure1_slot7;
        var18 = var18.TWITTER_FOLLOWERS_COUNT;
        var6.metadataField = var18;
        var19 = var13.get;
        var18 = _closure1_slot7;
        var18 = var18.TWITTER_FOLLOWERS_COUNT;
        var18 = var19.bind(var13)(var18);
        var6.existingPendingConfiguration = var18;
        var6.platform = var10;
        var6.onConfigurationChange = var9;
        var6.locked = var8;
        var6 = var7.bind(var3)(var15, var6);
        var4[2] = var6;
        var18 = _closure1_slot11;
        var6 = var17[var5];
        var6 = var16.bind(var3)(var6);
        var7 = var6.FormDivider;
        var6 = {};
        var19 = var14.divider;
        var6.style = var19;
        var6 = var18.bind(var3)(var7, var6);
        var4[3] = var6;
        var7 = _closure1_slot11;
        var6 = {};
        var18 = var17[var12];
        var18 = var16.bind(var3)(var18);
        var18 = var18.t;
        var18 = var18["+NFH7k"];
        var6.fieldTextHook = var18;
        var18 = _closure1_slot7;
        var18 = var18.TWITTER_STATUSES_COUNT;
        var6.metadataField = var18;
        var19 = var13.get;
        var18 = _closure1_slot7;
        var18 = var18.TWITTER_STATUSES_COUNT;
        var18 = var19.bind(var13)(var18);
        var6.existingPendingConfiguration = var18;
        var6.platform = var10;
        var6.onConfigurationChange = var9;
        var6.locked = var8;
        var6 = var7.bind(var3)(var15, var6);
        var4[4] = var6;
        var7 = _closure1_slot11;
        var5 = var17[var5];
        var5 = var16.bind(var3)(var5);
        var6 = var5.FormDivider;
        var5 = {};
        var14 = var14.divider;
        var5.style = var14;
        var5 = var7.bind(var3)(var6, var5);
        var4[5] = var5;
        var7 = _closure1_slot11;
        var6 = _closure1_slot16;
        var5 = {};
        var14 = var17[var12];
        var14 = var16.bind(var3)(var14);
        var15 = var14.intl;
        var14 = var15.string;
        var12 = var17[var12];
        var12 = var16.bind(var3)(var12);
        var12 = var12.t;
        var12 = var12.E2iT8K;
        var12 = var14.bind(var15)(var12);
        var5.fieldText = var12;
        var12 = _closure1_slot7;
        var12 = var12.TWITTER_VERIFIED;
        var5.metadataField = var12;
        var12 = var13.get;
        var11 = _closure1_slot7;
        var11 = var11.TWITTER_VERIFIED;
        var11 = var12.bind(var13)(var11);
        var5.existingPendingConfiguration = var11;
        var5.platform = var10;
        var5.onConfigurationChange = var9;
        var5.locked = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[6] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot20 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var13 = var0.configMetadataMap;
        var9 = var0.onConfigurationChange;
        var8 = var0.locked;
        var0 = _closure1_slot14;
        var3 = undefined;
        var15 = var0.bind(var3)();
        var1 = _closure1_slot1;
        var17 = _closure1_slot2;
        var0 = 19;
        var0 = var17[var0];
        var2 = var1.bind(var3)(var0);
        var1 = var2.get;
        var0 = _closure1_slot6;
        var0 = var0.REDDIT;
        var10 = var1.bind(var2)(var0);
        var2 = _closure1_slot12;
        var1 = _closure1_slot13;
        var0 = {};
        var5 = _closure1_slot11;
        var14 = _closure1_slot17;
        var4 = {};
        var16 = _closure1_slot0;
        var12 = 14;
        var6 = var17[var12];
        var6 = var16.bind(var3)(var6);
        var6 = var6.t;
        var6 = var6["REyUZ/"];
        var4.fieldTextHook = var6;
        var6 = _closure1_slot7;
        var6 = var6.CREATED_AT;
        var4.metadataField = var6;
        var7 = var13.get;
        var6 = _closure1_slot7;
        var6 = var6.CREATED_AT;
        var6 = var7.bind(var13)(var6);
        var4.existingPendingConfiguration = var6;
        var4.platform = var10;
        var4.onConfigurationChange = var9;
        var4.locked = var8;
        var5 = var5.bind(var3)(var14, var4);
        var4 = new Array(7);
        var4[0] = var5;
        var18 = _closure1_slot11;
        var5 = 12;
        var6 = var17[var5];
        var6 = var16.bind(var3)(var6);
        var7 = var6.FormDivider;
        var6 = {};
        var19 = var15.divider;
        var6.style = var19;
        var6 = var18.bind(var3)(var7, var6);
        var4[1] = var6;
        var7 = _closure1_slot11;
        var6 = {};
        var18 = var17[var12];
        var18 = var16.bind(var3)(var18);
        var18 = var18.t;
        var18 = var18.TLgZhv;
        var6.fieldTextHook = var18;
        var18 = _closure1_slot7;
        var18 = var18.REDDIT_TOTAL_KARMA;
        var6.metadataField = var18;
        var19 = var13.get;
        var18 = _closure1_slot7;
        var18 = var18.REDDIT_TOTAL_KARMA;
        var18 = var19.bind(var13)(var18);
        var6.existingPendingConfiguration = var18;
        var6.platform = var10;
        var6.onConfigurationChange = var9;
        var6.locked = var8;
        var6 = var7.bind(var3)(var14, var6);
        var4[2] = var6;
        var14 = _closure1_slot11;
        var6 = var17[var5];
        var6 = var16.bind(var3)(var6);
        var7 = var6.FormDivider;
        var6 = {};
        var18 = var15.divider;
        var6.style = var18;
        var6 = var14.bind(var3)(var7, var6);
        var4[3] = var6;
        var14 = _closure1_slot11;
        var7 = _closure1_slot16;
        var6 = {};
        var18 = var17[var12];
        var18 = var16.bind(var3)(var18);
        var20 = var18.intl;
        var19 = var20.string;
        var18 = var17[var12];
        var18 = var16.bind(var3)(var18);
        var18 = var18.t;
        var18 = var18["0cKdka"];
        var18 = var19.bind(var20)(var18);
        var6.fieldText = var18;
        var18 = _closure1_slot7;
        var18 = var18.REDDIT_MOD;
        var6.metadataField = var18;
        var19 = var13.get;
        var18 = _closure1_slot7;
        var18 = var18.REDDIT_MOD;
        var18 = var19.bind(var13)(var18);
        var6.existingPendingConfiguration = var18;
        var6.platform = var10;
        var6.onConfigurationChange = var9;
        var6.locked = var8;
        var6 = var14.bind(var3)(var7, var6);
        var4[4] = var6;
        var14 = _closure1_slot11;
        var5 = var17[var5];
        var5 = var16.bind(var3)(var5);
        var6 = var5.FormDivider;
        var5 = {};
        var15 = var15.divider;
        var5.style = var15;
        var5 = var14.bind(var3)(var6, var5);
        var4[5] = var5;
        var6 = _closure1_slot11;
        var5 = {};
        var14 = var17[var12];
        var14 = var16.bind(var3)(var14);
        var15 = var14.intl;
        var14 = var15.string;
        var12 = var17[var12];
        var12 = var16.bind(var3)(var12);
        var12 = var12.t;
        var12 = var12.kCAN58;
        var12 = var14.bind(var15)(var12);
        var5.fieldText = var12;
        var12 = _closure1_slot7;
        var12 = var12.REDDIT_GOLD;
        var5.metadataField = var12;
        var12 = var13.get;
        var11 = _closure1_slot7;
        var11 = var11.REDDIT_GOLD;
        var11 = var12.bind(var13)(var11);
        var5.existingPendingConfiguration = var11;
        var5.platform = var10;
        var5.onConfigurationChange = var9;
        var5.locked = var8;
        var5 = var6.bind(var3)(var7, var5);
        var4[6] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot21 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var13 = var0.configMetadataMap;
        var9 = var0.onConfigurationChange;
        var8 = var0.locked;
        var0 = _closure1_slot14;
        var3 = undefined;
        var14 = var0.bind(var3)();
        var1 = _closure1_slot1;
        var17 = _closure1_slot2;
        var0 = 19;
        var0 = var17[var0];
        var2 = var1.bind(var3)(var0);
        var1 = var2.get;
        var0 = _closure1_slot6;
        var0 = var0.PAYPAL;
        var10 = var1.bind(var2)(var0);
        var2 = _closure1_slot12;
        var1 = _closure1_slot13;
        var0 = {};
        var6 = _closure1_slot11;
        var5 = _closure1_slot17;
        var4 = {};
        var16 = _closure1_slot0;
        var12 = 14;
        var7 = var17[var12];
        var7 = var16.bind(var3)(var7);
        var7 = var7.t;
        var7 = var7["REyUZ/"];
        var4.fieldTextHook = var7;
        var7 = _closure1_slot7;
        var7 = var7.CREATED_AT;
        var4.metadataField = var7;
        var15 = var13.get;
        var7 = _closure1_slot7;
        var7 = var7.CREATED_AT;
        var7 = var15.bind(var13)(var7);
        var4.existingPendingConfiguration = var7;
        var4.platform = var10;
        var4.onConfigurationChange = var9;
        var4.locked = var8;
        var5 = var6.bind(var3)(var5, var4);
        var4 = new Array(3);
        var4[0] = var5;
        var7 = _closure1_slot11;
        var5 = 12;
        var5 = var17[var5];
        var5 = var16.bind(var3)(var5);
        var6 = var5.FormDivider;
        var5 = {};
        var14 = var14.divider;
        var5.style = var14;
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var7 = _closure1_slot11;
        var6 = _closure1_slot16;
        var5 = {};
        var14 = var17[var12];
        var14 = var16.bind(var3)(var14);
        var15 = var14.intl;
        var14 = var15.string;
        var12 = var17[var12];
        var12 = var16.bind(var3)(var12);
        var12 = var12.t;
        var12 = var12["0JyE8I"];
        var12 = var14.bind(var15)(var12);
        var5.fieldText = var12;
        var12 = _closure1_slot7;
        var12 = var12.PAYPAL_VERIFIED;
        var5.metadataField = var12;
        var12 = var13.get;
        var11 = _closure1_slot7;
        var11 = var11.PAYPAL_VERIFIED;
        var11 = var12.bind(var13)(var11);
        var5.existingPendingConfiguration = var11;
        var5.platform = var10;
        var5.onConfigurationChange = var9;
        var5.locked = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[2] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot22 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var13 = var0.configMetadataMap;
        var9 = var0.onConfigurationChange;
        var8 = var0.locked;
        var0 = _closure1_slot14;
        var3 = undefined;
        var14 = var0.bind(var3)();
        var1 = _closure1_slot1;
        var17 = _closure1_slot2;
        var0 = 19;
        var0 = var17[var0];
        var2 = var1.bind(var3)(var0);
        var1 = var2.get;
        var0 = _closure1_slot6;
        var0 = var0.EBAY;
        var10 = var1.bind(var2)(var0);
        var2 = _closure1_slot12;
        var1 = _closure1_slot13;
        var0 = {};
        var5 = _closure1_slot11;
        var15 = _closure1_slot17;
        var4 = {};
        var16 = _closure1_slot0;
        var12 = 14;
        var6 = var17[var12];
        var6 = var16.bind(var3)(var6);
        var6 = var6.t;
        var6 = var6["REyUZ/"];
        var4.fieldTextHook = var6;
        var6 = _closure1_slot7;
        var6 = var6.CREATED_AT;
        var4.metadataField = var6;
        var7 = var13.get;
        var6 = _closure1_slot7;
        var6 = var6.CREATED_AT;
        var6 = var7.bind(var13)(var6);
        var4.existingPendingConfiguration = var6;
        var4.platform = var10;
        var4.onConfigurationChange = var9;
        var4.locked = var8;
        var5 = var5.bind(var3)(var15, var4);
        var4 = new Array(9);
        var4[0] = var5;
        var18 = _closure1_slot11;
        var5 = 12;
        var6 = var17[var5];
        var6 = var16.bind(var3)(var6);
        var7 = var6.FormDivider;
        var6 = {};
        var19 = var14.divider;
        var6.style = var19;
        var6 = var18.bind(var3)(var7, var6);
        var4[1] = var6;
        var7 = _closure1_slot11;
        var6 = {};
        var18 = var17[var12];
        var18 = var16.bind(var3)(var18);
        var18 = var18.t;
        var18 = var18.oTFOe5;
        var6.fieldTextHook = var18;
        var18 = _closure1_slot7;
        var18 = var18.EBAY_POSITIVE_FEEDBACK_PERCENTAGE;
        var6.metadataField = var18;
        var19 = var13.get;
        var18 = _closure1_slot7;
        var18 = var18.EBAY_POSITIVE_FEEDBACK_PERCENTAGE;
        var18 = var19.bind(var13)(var18);
        var6.existingPendingConfiguration = var18;
        var6.platform = var10;
        var6.onConfigurationChange = var9;
        var6.locked = var8;
        var6 = var7.bind(var3)(var15, var6);
        var4[2] = var6;
        var18 = _closure1_slot11;
        var6 = var17[var5];
        var6 = var16.bind(var3)(var6);
        var7 = var6.FormDivider;
        var6 = {};
        var19 = var14.divider;
        var6.style = var19;
        var6 = var18.bind(var3)(var7, var6);
        var4[3] = var6;
        var7 = _closure1_slot11;
        var6 = {};
        var18 = var17[var12];
        var18 = var16.bind(var3)(var18);
        var18 = var18.t;
        var18 = var18["v5a2+Q"];
        var6.fieldTextHook = var18;
        var18 = _closure1_slot7;
        var18 = var18.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT;
        var6.metadataField = var18;
        var19 = var13.get;
        var18 = _closure1_slot7;
        var18 = var18.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT;
        var18 = var19.bind(var13)(var18);
        var6.existingPendingConfiguration = var18;
        var6.platform = var10;
        var6.onConfigurationChange = var9;
        var6.locked = var8;
        var6 = var7.bind(var3)(var15, var6);
        var4[4] = var6;
        var18 = _closure1_slot11;
        var6 = var17[var5];
        var6 = var16.bind(var3)(var6);
        var7 = var6.FormDivider;
        var6 = {};
        var19 = var14.divider;
        var6.style = var19;
        var6 = var18.bind(var3)(var7, var6);
        var4[5] = var6;
        var7 = _closure1_slot11;
        var6 = {};
        var18 = var17[var12];
        var18 = var16.bind(var3)(var18);
        var18 = var18.t;
        var18 = var18.yYbR2r;
        var6.fieldTextHook = var18;
        var18 = _closure1_slot7;
        var18 = var18.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT;
        var6.metadataField = var18;
        var19 = var13.get;
        var18 = _closure1_slot7;
        var18 = var18.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT;
        var18 = var19.bind(var13)(var18);
        var6.existingPendingConfiguration = var18;
        var6.platform = var10;
        var6.onConfigurationChange = var9;
        var6.locked = var8;
        var18 = _closure1_slot8;
        var18 = var18.LESS_THAN;
        var6.operator = var18;
        var6 = var7.bind(var3)(var15, var6);
        var4[6] = var6;
        var7 = _closure1_slot11;
        var5 = var17[var5];
        var5 = var16.bind(var3)(var5);
        var6 = var5.FormDivider;
        var5 = {};
        var14 = var14.divider;
        var5.style = var14;
        var5 = var7.bind(var3)(var6, var5);
        var4[7] = var5;
        var7 = _closure1_slot11;
        var6 = _closure1_slot16;
        var5 = {};
        var14 = var17[var12];
        var14 = var16.bind(var3)(var14);
        var15 = var14.intl;
        var14 = var15.string;
        var12 = var17[var12];
        var12 = var16.bind(var3)(var12);
        var12 = var12.t;
        var12 = var12["39wASN"];
        var12 = var14.bind(var15)(var12);
        var5.fieldText = var12;
        var12 = _closure1_slot7;
        var12 = var12.EBAY_TOP_RATED_SELLER;
        var5.metadataField = var12;
        var12 = var13.get;
        var11 = _closure1_slot7;
        var11 = var11.EBAY_TOP_RATED_SELLER;
        var11 = var12.bind(var13)(var11);
        var5.existingPendingConfiguration = var11;
        var5.platform = var10;
        var5.onConfigurationChange = var9;
        var5.locked = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[8] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot23 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var13 = var0.configMetadataMap;
        var9 = var0.onConfigurationChange;
        var8 = var0.locked;
        var1 = _closure1_slot1;
        var15 = _closure1_slot2;
        var0 = 19;
        var0 = var15[var0];
        var3 = undefined;
        var2 = var1.bind(var3)(var0);
        var1 = var2.get;
        var0 = _closure1_slot6;
        var0 = var0.TIKTOK;
        var10 = var1.bind(var2)(var0);
        var2 = _closure1_slot12;
        var1 = _closure1_slot13;
        var0 = {};
        var6 = _closure1_slot11;
        var5 = _closure1_slot16;
        var4 = {};
        var14 = _closure1_slot0;
        var12 = 14;
        var7 = var15[var12];
        var7 = var14.bind(var3)(var7);
        var17 = var7.intl;
        var16 = var17.string;
        var7 = var15[var12];
        var7 = var14.bind(var3)(var7);
        var7 = var7.t;
        var7 = var7.E2iT8K;
        var7 = var16.bind(var17)(var7);
        var4.fieldText = var7;
        var7 = _closure1_slot7;
        var7 = var7.TIKTOK_VERIFIED;
        var4.metadataField = var7;
        var16 = var13.get;
        var7 = _closure1_slot7;
        var7 = var7.TIKTOK_VERIFIED;
        var7 = var16.bind(var13)(var7);
        var4.existingPendingConfiguration = var7;
        var4.platform = var10;
        var4.onConfigurationChange = var9;
        var4.locked = var8;
        var5 = var6.bind(var3)(var5, var4);
        var4 = new Array(4);
        var4[0] = var5;
        var6 = _closure1_slot11;
        var7 = _closure1_slot17;
        var5 = {};
        var16 = var15[var12];
        var16 = var14.bind(var3)(var16);
        var16 = var16.t;
        var16 = var16["/w/EYk"];
        var5.fieldTextHook = var16;
        var16 = _closure1_slot7;
        var16 = var16.TIKTOK_FOLLOWER_COUNT;
        var5.metadataField = var16;
        var17 = var13.get;
        var16 = _closure1_slot7;
        var16 = var16.TIKTOK_FOLLOWER_COUNT;
        var16 = var17.bind(var13)(var16);
        var5.existingPendingConfiguration = var16;
        var5.platform = var10;
        var5.onConfigurationChange = var9;
        var5.locked = var8;
        var5 = var6.bind(var3)(var7, var5);
        var4[1] = var5;
        var6 = _closure1_slot11;
        var5 = {};
        var16 = var15[var12];
        var16 = var14.bind(var3)(var16);
        var16 = var16.t;
        var16 = var16.JHEsYw;
        var5.fieldTextHook = var16;
        var16 = _closure1_slot7;
        var16 = var16.TIKTOK_FOLLOWING_COUNT;
        var5.metadataField = var16;
        var17 = var13.get;
        var16 = _closure1_slot7;
        var16 = var16.TIKTOK_FOLLOWING_COUNT;
        var16 = var17.bind(var13)(var16);
        var5.existingPendingConfiguration = var16;
        var5.platform = var10;
        var5.onConfigurationChange = var9;
        var5.locked = var8;
        var5 = var6.bind(var3)(var7, var5);
        var4[2] = var5;
        var6 = _closure1_slot11;
        var5 = {};
        var12 = var15[var12];
        var12 = var14.bind(var3)(var12);
        var12 = var12.t;
        var12 = var12.tEFCYA;
        var5.fieldTextHook = var12;
        var12 = _closure1_slot7;
        var12 = var12.TIKTOK_LIKES_COUNT;
        var5.metadataField = var12;
        var12 = var13.get;
        var11 = _closure1_slot7;
        var11 = var11.TIKTOK_LIKES_COUNT;
        var11 = var12.bind(var13)(var11);
        var5.existingPendingConfiguration = var11;
        var5.platform = var10;
        var5.onConfigurationChange = var9;
        var5.locked = var8;
        var5 = var6.bind(var3)(var7, var5);
        var4[3] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot24 = var0;
    var0 = function arg0() {
        _fun116302: for (var _fun116302_ip = 0;;) switch (_fun116302_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.configMetadataMap;
                var _closure2_slot0 = var2;
                var2 = var0.onConfigurationChange;
                var _closure2_slot1 = var2;
                var2 = var0.locked;
                var _closure2_slot2 = var2;
                var2 = var0.integration;
                var _closure2_slot3 = var2;
                var4 = null;
                var3 = var4 == var2;
                var0 = null;
                if (var3) {
                    _fun116302_ip = 94;
                    continue _fun116302
                }
            case 56:
                var3 = var2.role_connections_metadata;
                var3 = var4 == var3;
                var0 = null;
                if (var3) {
                    _fun116302_ip = 94;
                    continue _fun116302
                }
            case 71:
                var3 = var2.role_connections_metadata;
                var2 = var3.map;
                var1 = function(arg0) { // Environment: var1
                    _fun116303: for (var _fun116303_ip = 0;;) switch (_fun116303_ip) {
                        case 0:
                            var0 = arg0;
                            var3 = var0.type;
                            var2 = _closure1_slot9;
                            var2 = var2.INTEGER_LESS_THAN_EQUAL;
                            if (!(var2 !== var3)) {
                                _fun116303_ip = 169;
                                continue _fun116303
                            }
                        case 28:
                            var2 = _closure1_slot9;
                            var2 = var2.DATETIME_LESS_THAN_EQUAL;
                            if (!(var2 !== var3)) {
                                _fun116303_ip = 169;
                                continue _fun116303
                            }
                        case 45:
                            var2 = _closure1_slot9;
                            var2 = var2.INTEGER_GREATER_THAN_EQUAL;
                            if (!(var2 !== var3)) {
                                _fun116303_ip = 157;
                                continue _fun116303
                            }
                        case 59:
                            var2 = _closure1_slot9;
                            var2 = var2.DATETIME_GREATER_THAN_EQUAL;
                            if (!(var2 !== var3)) {
                                _fun116303_ip = 157;
                                continue _fun116303
                            }
                        case 73:
                            var2 = _closure1_slot9;
                            var2 = var2.INTEGER_EQUAL;
                            if (!(var2 !== var3)) {
                                _fun116303_ip = 145;
                                continue _fun116303
                            }
                        case 87:
                            var2 = _closure1_slot9;
                            var2 = var2.BOOLEAN_EQUAL;
                            if (!(var2 !== var3)) {
                                _fun116303_ip = 145;
                                continue _fun116303
                            }
                        case 101:
                            var2 = _closure1_slot9;
                            var2 = var2.INTEGER_NOT_EQUAL;
                            if (!(var2 !== var3)) {
                                _fun116303_ip = 133;
                                continue _fun116303
                            }
                        case 115:
                            var2 = _closure1_slot9;
                            var2 = var2.BOOLEAN_NOT_EQUAL;
                            if (!(var2 !== var3)) {
                                _fun116303_ip = 133;
                                continue _fun116303
                            }
                        case 129:
                            var2 = null;
                            return var2;
                        case 133:
                            var2 = _closure1_slot8;
                            var6 = var2.NOT_EQUAL;
                            _fun116303_ip = 179;
                            continue _fun116303;
                        case 145:
                            var2 = _closure1_slot8;
                            var6 = var2.EQUAL;
                            _fun116303_ip = 179;
                            continue _fun116303;
                        case 157:
                            var2 = _closure1_slot8;
                            var6 = var2.GREATER_THAN;
                            _fun116303_ip = 179;
                            continue _fun116303;
                        case 169:
                            var2 = _closure1_slot8;
                            var6 = var2.LESS_THAN;
                        case 179:
                            var3 = var0.type;
                            var2 = _closure1_slot9;
                            var2 = var2.INTEGER_LESS_THAN_EQUAL;
                            if (!(var2 !== var3)) {
                                _fun116303_ip = 448;
                                continue _fun116303
                            }
                        case 201:
                            var2 = _closure1_slot9;
                            var2 = var2.INTEGER_GREATER_THAN_EQUAL;
                            if (!(var2 !== var3)) {
                                _fun116303_ip = 448;
                                continue _fun116303
                            }
                        case 218:
                            var2 = _closure1_slot9;
                            var2 = var2.INTEGER_EQUAL;
                            if (!(var2 !== var3)) {
                                _fun116303_ip = 448;
                                continue _fun116303
                            }
                        case 235:
                            var2 = _closure1_slot9;
                            var2 = var2.INTEGER_NOT_EQUAL;
                            if (!(var2 !== var3)) {
                                _fun116303_ip = 448;
                                continue _fun116303
                            }
                        case 252:
                            var2 = _closure1_slot9;
                            var2 = var2.DATETIME_LESS_THAN_EQUAL;
                            if (!(var2 !== var3)) {
                                _fun116303_ip = 448;
                                continue _fun116303
                            }
                        case 269:
                            var2 = _closure1_slot9;
                            var2 = var2.DATETIME_GREATER_THAN_EQUAL;
                            if (!(var2 !== var3)) {
                                _fun116303_ip = 448;
                                continue _fun116303
                            }
                        case 286:
                            var2 = _closure1_slot9;
                            var2 = var2.BOOLEAN_EQUAL;
                            if (!(var2 !== var3)) {
                                _fun116303_ip = 318;
                                continue _fun116303
                            }
                        case 300:
                            var2 = _closure1_slot9;
                            var2 = var2.BOOLEAN_NOT_EQUAL;
                            if (!(var2 !== var3)) {
                                _fun116303_ip = 318;
                                continue _fun116303
                            }
                        case 314:
                            var2 = undefined;
                            return var2;
                        case 318:
                            var7 = _closure1_slot11;
                            var5 = _closure1_slot16;
                            var4 = {};
                            var2 = var0.description;
                            var4.fieldText = var2;
                            var2 = var0.key;
                            var4.metadataField = var2;
                            var9 = _closure2_slot0;
                            var8 = var9.get;
                            var2 = var0.key;
                            var2 = var8.bind(var9)(var2);
                            var4.existingPendingConfiguration = var2;
                            var2 = null;
                            var4.platform = var2;
                            var8 = _closure2_slot1;
                            var4.onConfigurationChange = var8;
                            var8 = _closure2_slot2;
                            var4.locked = var8;
                            var4.operator = var6;
                            var3 = _closure2_slot3;
                            var8 = var3.application;
                            var9 = var2 == var8;
                            var3 = undefined;
                            var2 = undefined;
                            if (var9) {
                                _fun116303_ip = 430;
                                continue _fun116303
                            }
                        case 425:
                            var2 = var8.id;
                        case 430:
                            var4.applicationId = var2;
                            var2 = var0.key;
                            var2 = var7.bind(var3)(var5, var4, var2);
                            return var2;
                        case 448:
                            var4 = _closure1_slot11;
                            var3 = _closure1_slot17;
                            var2 = {};
                            var1 = var0.description;
                            var2.fieldText = var1;
                            var1 = var0.key;
                            var2.metadataField = var1;
                            var8 = _closure2_slot0;
                            var7 = var8.get;
                            var1 = var0.key;
                            var1 = var7.bind(var8)(var1);
                            var2.existingPendingConfiguration = var1;
                            var1 = null;
                            var2.platform = var1;
                            var7 = _closure2_slot1;
                            var2.onConfigurationChange = var7;
                            var7 = _closure2_slot2;
                            var2.locked = var7;
                            var2.operator = var6;
                            var5 = _closure2_slot3;
                            var6 = var5.application;
                            var7 = var1 == var6;
                            var1 = undefined;
                            var5 = undefined;
                            if (var7) {
                                _fun116303_ip = 560;
                                continue _fun116303
                            }
                        case 555:
                            var5 = var6.id;
                        case 560:
                            var2.applicationId = var5;
                            var0 = var0.key;
                            var0 = var4.bind(var1)(var3, var2, var0);
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var1);
            case 94:
                return var0;
        }
    };
    var _closure1_slot25 = var0;
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
    var3 = 1;
    var6 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.PlatformTypes;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.MetadataFields;
    var _closure1_slot7 = var6;
    var6 = var3.OperatorTypes;
    var _closure1_slot8 = var6;
    var6 = var3.MetadataItemTypes;
    var _closure1_slot9 = var6;
    var3 = var3.GUILD_ROLE_CONNECTION_APPLICATION_CONNECTION_TYPE;
    var _closure1_slot10 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot11 = var6;
    var6 = var3.jsxs;
    var _closure1_slot12 = var6;
    var3 = var3.Fragment;
    var _closure1_slot13 = var3;
    var3 = 6;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 16;
    var8.marginHorizontal = var9;
    var3.divider = var8;
    var8 = {};
    var9 = -2;
    var8.marginTop = var9;
    var3.numericalInputContainerIOS = var8;
    var8 = {};
    var9 = -4;
    var8.marginTop = var9;
    var3.numericalInputContainer = var8;
    var8 = {};
    var10 = 7;
    var9 = var5[var10];
    var9 = var11.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_BASE_LOW;
    var8.backgroundColor = var9;
    var9 = var5[var10];
    var9 = var11.bind(var0)(var9);
    var9 = var9.radii;
    var9 = var9.sm;
    var8.borderRadius = var9;
    var3.numericalInputContainerBase = var8;
    var8 = {
        'width': 54,
        'height': 32,
        'borderRadius': null,
        'paddingHorizontal': 4,
        'marginTop': 4294967292
    };
    var9 = 32;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.xs;
    var8.borderRadius = var12;
    var3.numericalInput = var8;
    var8 = {
        'width': 54,
        'height': 32,
        'backgroundColor': null,
        'borderRadius': null,
        'padding': 8,
        'marginRight': 8
    };
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BASE_LOWEST;
    var8.backgroundColor = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.xs;
    var8.borderRadius = var12;
    var3.appNumericalInput = var8;
    var8 = {
        'flexDirection': 'row',
        'marginRight': 22,
        'alignItems': 'center'
    };
    var3.appNumericalInputContainer = var8;
    var8 = {};
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.MOBILE_TEXT_HEADING_PRIMARY;
    var8.color = var10;
    var3.headerText = var8;
    var8 = {
        'marginTop': 4,
        'marginBottom': 4
    };
    var3.metadataRow = var8;
    var8 = {};
    var8.lineHeight = var9;
    var3.metadataRowText = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot14 = var3;
    var3 = 21;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_settings/roles/native/GuildSettingsRoleEditConnectionConfiguration.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun116304: for (var _fun116304_ip = 0;;) switch (_fun116304_ip) {
            case 0:
                var4 = arg0;
                var0 = var4.configurationItems;
                var2 = var0;
                var7 = var4.onConfigurationChange;
                var3 = var7;
                var _closure2_slot0 = var7;
                var10 = var4.locked;
                var20 = var4.integrations;
                var4 = undefined;
                var1 = undefined;
                var11 = undefined;
                var16 = undefined;
                var _closure2_slot1 = var4;
                var14 = undefined;
                var15 = undefined;
                var _closure2_slot2 = var4;
                var _closure2_slot3 = var4;
                var5 = undefined;
                var6 = undefined;
                var7 = _closure1_slot14;
                var11 = var7.bind(var4)();
                var9 = _closure1_slot1;
                var12 = _closure1_slot2;
                var7 = 20;
                var7 = var12[var7];
                var7 = var9.bind(var4)(var7);
                var16 = var7.bind(var4)();
                var7 = var0.length;
                var0 = 1;
                if (!(!(var7 < var0))) {
                    _fun116304_ip = 874;
                    continue _fun116304
                }
            case 117:
                var0 = var2;
                var17 = 0;
                var0 = var0[var17];
                var0 = var0.configuration;
                var7 = var0.applicationId;
                _closure2_slot1 = var7;
                var0 = null;
                var12 = var0 != var7;
                var9 = undefined;
                if (!var12) {
                    _fun116304_ip = 181;
                    continue _fun116304
                }
            case 152:
                var18 = var0 == var20;
                var12 = undefined;
                if (var18) {
                    _fun116304_ip = 178;
                    continue _fun116304
                }
            case 161:
                var19 = var20.find;
                var18 = function(arg0) { // Environment: var13
                    _fun116305: for (var _fun116305_ip = 0;;) switch (_fun116305_ip) {
                        case 0:
                            var0 = arg0;
                            var0 = var0.application;
                            var1 = null;
                            var2 = var1 == var0;
                            var1 = undefined;
                            if (var2) {
                                _fun116305_ip = 24;
                                continue _fun116305
                            }
                        case 19:
                            var1 = var0.id;
                        case 24:
                            var0 = _closure2_slot1;
                            var0 = var1 === var0;
                            return var0;
                    }
                };
                var12 = var19.bind(var20)(var18);
            case 178:
                var9 = var12;
            case 181:
                var14 = var9;
                if (!(var0 != var7)) {
                    _fun116304_ip = 198;
                    continue _fun116304
                }
            case 188:
                var7 = var14;
                if (!(var0 != var7)) {
                    _fun116304_ip = 872;
                    continue _fun116304
                }
            case 198:
                var15 = null;
            case 200: // try_start_0
                var9 = _closure1_slot1;
                var12 = _closure1_slot2;
                var7 = 19;
                var7 = var12[var7];
                var12 = var9.bind(var4)(var7);
                var9 = var12.get;
                var7 = var2;
                var7 = var7[var17];
                var7 = var7.configuration;
                var7 = var7.connectionType;
                var15 = var9.bind(var12)(var7);
            case 249: // try_end0
                _fun116304_ip = 253;
                continue _fun116304;
            case 251: // catch_target0
                CatchBlockStart(arg_register = 7);
            case 253:
                var7 = global;
                var7 = var7.Map;
                var9 = var7.prototype;
                var9 = Object.create(var9, {
                    constructor: {
                        value: var7
                    }
                });
                var23 = var9;
                var7 = new var23[var7](var22);
                var7 = var7 instanceof Object ? var7 : var9;
                _closure2_slot3 = var7;
                var12 = var2;
                var9 = var12.forEach;
                var2 = function(arg0) { // Environment: var13
                    _fun116306: for (var _fun116306_ip = 0;;) switch (_fun116306_ip) {
                        case 0:
                            var3 = arg0;
                            var0 = var3.configuration;
                            var0 = var0.connectionMetadataField;
                            var2 = null;
                            if (!(var2 == var0)) {
                                _fun116306_ip = 86;
                                continue _fun116306
                            }
                        case 21:
                            var0 = var3.configuration;
                            var0 = var0.value;
                            var0 = var2 == var0;
                            if (!var0) {
                                _fun116306_ip = 55;
                                continue _fun116306
                            }
                        case 39:
                            var1 = var3.configuration;
                            var1 = var1.operator;
                            var0 = var2 == var1;
                        case 55:
                            if (!var0) {
                                _fun116306_ip = 74;
                                continue _fun116306
                            }
                        case 58:
                            var1 = var3.configuration;
                            var1 = var1.connectionMetadataField;
                            var0 = var2 == var1;
                        case 74:
                            if (!var0) {
                                _fun116306_ip = 116;
                                continue _fun116306
                            }
                        case 77:
                            _closure2_slot2 = var3;
                            _fun116306_ip = 116;
                            continue _fun116306;
                        case 86:
                            var2 = _closure2_slot3;
                            var1 = var2.set;
                            var0 = var3.configuration;
                            var0 = var0.connectionMetadataField;
                            var0 = var1.bind(var2)(var0, var3);
                        case 116:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var9.bind(var12)(var2);
                var2 = {};
                var2.configMetadataMap = var7;
                var2.onConfigurationChange = var3;
                var3 = var10;
                var2.locked = var3;
                var5 = var2;
                var6 = null;
                var2 = var15;
                var1 = var2;
                var3 = var0 == var2;
                var2 = undefined;
                if (var3) {
                    _fun116304_ip = 350;
                    continue _fun116304
                }
            case 345:
                var2 = var1.type;
            case 350:
                var1 = _closure1_slot6;
                var1 = var1.STEAM;
                if (!(var1 !== var2)) {
                    _fun116304_ip = 680;
                    continue _fun116304
                }
            case 367:
                var1 = _closure1_slot6;
                var1 = var1.TWITTER;
                if (!(var1 !== var2)) {
                    _fun116304_ip = 652;
                    continue _fun116304
                }
            case 384:
                var1 = _closure1_slot6;
                var1 = var1.REDDIT;
                if (!(var1 !== var2)) {
                    _fun116304_ip = 624;
                    continue _fun116304
                }
            case 401:
                var1 = _closure1_slot6;
                var1 = var1.BLUESKY;
                if (!(var1 !== var2)) {
                    _fun116304_ip = 596;
                    continue _fun116304
                }
            case 418:
                var1 = _closure1_slot6;
                var1 = var1.PAYPAL;
                if (!(var1 !== var2)) {
                    _fun116304_ip = 568;
                    continue _fun116304
                }
            case 435:
                var1 = _closure1_slot6;
                var1 = var1.EBAY;
                if (!(var1 !== var2)) {
                    _fun116304_ip = 537;
                    continue _fun116304
                }
            case 449:
                var1 = _closure1_slot6;
                var1 = var1.TIKTOK;
                if (!(var1 !== var2)) {
                    _fun116304_ip = 506;
                    continue _fun116304
                }
            case 463:
                var3 = _closure1_slot11;
                var2 = _closure1_slot25;
                var1 = {};
                var21 = var5;
                var22 = var1;
                var7 = copyDataProperties(var22, var21);
                var9 = var14;
                var7 = 'integration';
                var1[var7] = var9;
                var6 = var3.bind(var4)(var2, var1);
                _fun116304_ip = 706;
                continue _fun116304;
            case 506:
                var3 = _closure1_slot11;
                var2 = _closure1_slot24;
                var1 = {};
                var21 = var5;
                var22 = var1;
                var7 = copyDataProperties(var22, var21);
                var6 = var3.bind(var4)(var2, var1);
                _fun116304_ip = 706;
                continue _fun116304;
            case 537:
                var3 = _closure1_slot11;
                var2 = _closure1_slot23;
                var1 = {};
                var21 = var5;
                var22 = var1;
                var7 = copyDataProperties(var22, var21);
                var6 = var3.bind(var4)(var2, var1);
                _fun116304_ip = 706;
                continue _fun116304;
            case 568:
                var3 = _closure1_slot11;
                var2 = _closure1_slot22;
                var1 = {};
                var21 = var5;
                var22 = var1;
                var7 = copyDataProperties(var22, var21);
                var6 = var3.bind(var4)(var2, var1);
                _fun116304_ip = 706;
                continue _fun116304;
            case 596:
                var3 = _closure1_slot11;
                var2 = _closure1_slot18;
                var1 = {};
                var21 = var5;
                var22 = var1;
                var7 = copyDataProperties(var22, var21);
                var6 = var3.bind(var4)(var2, var1);
                _fun116304_ip = 706;
                continue _fun116304;
            case 624:
                var3 = _closure1_slot11;
                var2 = _closure1_slot21;
                var1 = {};
                var21 = var5;
                var22 = var1;
                var7 = copyDataProperties(var22, var21);
                var6 = var3.bind(var4)(var2, var1);
                _fun116304_ip = 706;
                continue _fun116304;
            case 652:
                var3 = _closure1_slot11;
                var2 = _closure1_slot20;
                var1 = {};
                var21 = var5;
                var22 = var1;
                var7 = copyDataProperties(var22, var21);
                var6 = var3.bind(var4)(var2, var1);
                _fun116304_ip = 706;
                continue _fun116304;
            case 680:
                var3 = _closure1_slot11;
                var2 = _closure1_slot19;
                var1 = {};
                var21 = var5;
                var22 = var1;
                var5 = copyDataProperties(var22, var21);
                var6 = var3.bind(var4)(var2, var1);
            case 706:
                var3 = _closure1_slot12;
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var12 = 12;
                var1 = var1[var12];
                var1 = var2.bind(var4)(var1);
                var2 = var1.FormSection;
                var1 = {};
                var9 = _closure1_slot11;
                var7 = _closure1_slot15;
                var5 = {};
                var5.theme = var16;
                var5.platform = var15;
                var5.integration = var14;
                var13 = function() {
                    var3 = _closure2_slot0;
                    var0 = _closure2_slot2;
                    var2 = var0.index;
                    var1 = undefined;
                    var0 = null;
                    var0 = var3.bind(var1)(var0, var2);
                    return var0;
                };
                var5.onRemove = var13;
                var5.locked = var10;
                var7 = var9.bind(var4)(var7, var5);
                var5 = new Array(3);
                var5[0] = var7;
                var9 = var6;
                var9 = var0 != var9;
                var7 = var9;
                if (!var9) {
                    _fun116304_ip = 852;
                    continue _fun116304
                }
            case 807:
                var10 = _closure1_slot11;
                var9 = _closure1_slot0;
                var8 = _closure1_slot2;
                var8 = var8[var12];
                var8 = var9.bind(var4)(var8);
                var9 = var8.FormDivider;
                var8 = {};
                var11 = var11.divider;
                var8.style = var11;
                var7 = var10.bind(var4)(var9, var8);
            case 852:
                var5[1] = var7;
                var5[2] = var6;
                var1.children = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 872:
                return var0;
            case 874:
                var0 = null;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 660, 4524, 33, 1297, 671, 5457, 4087, 1417, 3208, 5383, 3943, 1234, 4905, 6691, 478, 4879, 4396, 3248, 2]);