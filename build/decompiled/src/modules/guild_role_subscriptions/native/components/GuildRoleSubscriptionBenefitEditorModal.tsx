// modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionBenefitEditorModal.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var16 = metroImportDefault;
    var7 = metroImportAll;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var16;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        var0 = arg0;
        var4 = var0.onDelete;
        var0 = _closure1_slot13;
        var3 = undefined;
        var8 = var0.bind(var3)();
        var10 = _closure1_slot1;
        var12 = _closure1_slot2;
        var0 = 11;
        var0 = var12[var0];
        var0 = var10.bind(var3)(var0);
        var6 = var0.bind(var3)();
        var2 = _closure1_slot12;
        var11 = _closure1_slot0;
        var0 = 12;
        var0 = var12[var0];
        var0 = var11.bind(var3)(var0);
        var1 = var0.PressableOpacity;
        var0 = {};
        var7 = var6.textInput;
        var6 = new Array(2);
        var6[0] = var7;
        var7 = var8.deleteButton;
        var6[1] = var7;
        var0.style = var6;
        var6 = 'button';
        var0.accessibilityRole = var6;
        var0.onPress = var4;
        var7 = _closure1_slot11;
        var4 = 13;
        var4 = var12[var4];
        var4 = var11.bind(var3)(var4);
        var6 = var4.TrashIcon;
        var4 = {};
        var9 = var8.deleteIcon;
        var4.style = var9;
        var9 = 9;
        var9 = var12[var9];
        var9 = var10.bind(var3)(var9);
        var9 = var9.unsafe_rawColors;
        var9 = var9.RED_400;
        var4.color = var9;
        var9 = 'custom';
        var4.size = var9;
        var6 = var7.bind(var3)(var6, var4);
        var4 = new Array(2);
        var4[0] = var6;
        var7 = _closure1_slot11;
        var5 = 14;
        var5 = var12[var5];
        var5 = var11.bind(var3)(var5);
        var6 = var5.LegacyText;
        var5 = {};
        var8 = var8.deleteLabel;
        var5.style = var8;
        var8 = 15;
        var9 = var12[var8];
        var9 = var11.bind(var3)(var9);
        var10 = var9.intl;
        var9 = var10.string;
        var8 = var12[var8];
        var8 = var11.bind(var3)(var8);
        var8 = var8.t;
        var8 = var8.p4Bh7f;
        var8 = var9.bind(var10)(var8);
        var5.children = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot14 = var0;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var16.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var11 = 1;
    var3 = var5[var11];
    var3 = var16.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var6 = var7.bind(var0)(var3);
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var8 = var3.View;
    var _closure1_slot5 = var8;
    var3 = var3.ScrollView;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.GuildRoleSubscriptionBenefitTypes;
    var _closure1_slot8 = var7;
    var7 = var3.MAX_SUBSCRIPTION_BENEFIT_DESCRIPTION_LENGTH;
    var _closure1_slot9 = var7;
    var3 = var3.MAX_SUBSCRIPTION_BENEFIT_NAME_LENGTH;
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var13 = var3.Fonts;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot11 = var7;
    var3 = var3.jsxs;
    var _closure1_slot12 = var3;
    var12 = 8;
    var3 = var5[var12];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {
        'backgroundColor': null,
        'display': 'flex',
        'flexDirection': 'column',
        'justifyContent': 'space-between',
        'height': '100%'
    };
    var10 = 9;
    var14 = var5[var10];
    var14 = var16.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_BASE_LOW;
    var9.backgroundColor = var14;
    var3.container = var9;
    var9 = {};
    var9.flexGrow = var11;
    var3.scrollContainer = var9;
    var15 = 16;
    var9 = {
        'flexDirection': 'row',
        'marginTop': 16,
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var3.deleteButton = var9;
    var11 = 20;
    var9 = {
        'width': 20,
        'height': 20
    };
    var3.deleteIcon = var9;
    var9 = {};
    var14 = 10;
    var14 = var5[var14];
    var14 = var16.bind(var0)(var14);
    var13 = var13.PRIMARY_SEMIBOLD;
    var10 = var5[var10];
    var10 = var16.bind(var0)(var10);
    var10 = var10.unsafe_rawColors;
    var10 = var10.RED_400;
    var18 = var14.bind(var0)(var13, var10, var15);
    var19 = var9;
    var10 = copyDataProperties(var19, var18);
    var10 = 'marginStart';
    var9[var10] = var12;
    var10 = 'lineHeight';
    var9[var10] = var11;
    var3.deleteLabel = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot13 = var3;
    var3 = var6.forwardRef;
    var1 = function(arg0) { // Environment: var1
        _fun116822: for (var _fun116822_ip = 0;;) switch (_fun116822_ip) {
            case 0:
                var11 = arg0;
                var _closure2_slot0 = var11;
                var0 = _closure1_slot13;
                var3 = undefined;
                var8 = var0.bind(var3)();
                var2 = _closure1_slot1;
                var0 = _closure1_slot2;
                var1 = 11;
                var1 = var0[var1];
                var1 = var2.bind(var3)(var1);
                var19 = var1.bind(var3)();
                var12 = _closure1_slot7;
                var1 = var12.useNameState;
                var1 = var1.bind(var12)();
                var9 = _closure1_slot4;
                var6 = 2;
                var4 = var9.bind(var3)(var1, var6);
                var1 = 0;
                var15 = var4[var1];
                var _closure2_slot1 = var15;
                var7 = 1;
                var5 = var4[var7];
                var _closure2_slot2 = var5;
                var4 = var12.useEmojiIdState;
                var4 = var4.bind(var12)();
                var4 = var9.bind(var3)(var4, var6);
                var28 = var4[var1];
                var _closure2_slot3 = var28;
                var4 = var4[var7];
                var _closure2_slot4 = var4;
                var4 = var12.useEmojiNameState;
                var4 = var4.bind(var12)();
                var4 = var9.bind(var3)(var4, var6);
                var27 = var4[var1];
                var _closure2_slot5 = var27;
                var4 = var4[var7];
                var _closure2_slot6 = var4;
                var4 = var12.useDescriptionState;
                var4 = var4.bind(var12)();
                var4 = var9.bind(var3)(var4, var6);
                var18 = var4[var1];
                var _closure2_slot7 = var18;
                var17 = var4[var7];
                var4 = var12.useRefIdState;
                var4 = var4.bind(var12)();
                var6 = var9.bind(var3)(var4, var6);
                var4 = var6[var1];
                var _closure2_slot8 = var4;
                var6 = var6[var7];
                var _closure2_slot9 = var6;
                var22 = 16;
                var0 = var0[var22];
                var0 = var2.bind(var3)(var0);
                var0 = var0.bind(var3)();
                var24 = var0.bottom;
                var9 = null;
                var0 = var9 == var28;
                var2 = undefined;
                if (var0) {
                    _fun116822_ip = 255;
                    continue _fun116822
                }
            case 250:
                var2 = var28.length;
            case 255:
                var6 = var9 != var2;
                var0 = 0;
                if (!var6) {
                    _fun116822_ip = 267;
                    continue _fun116822
                }
            case 264:
                var0 = var2;
            case 267:
                var12 = var0 > var1;
                if (var12) {
                    _fun116822_ip = 304;
                    continue _fun116822
                }
            case 274:
                var0 = var9 == var27;
                var2 = undefined;
                if (var0) {
                    _fun116822_ip = 288;
                    continue _fun116822
                }
            case 283:
                var2 = var27.length;
            case 288:
                var6 = var9 != var2;
                var0 = 0;
                if (!var6) {
                    _fun116822_ip = 300;
                    continue _fun116822
                }
            case 297:
                var0 = var2;
            case 300:
                var12 = var0 > var1;
            case 304:
                if (!var12) {
                    _fun116822_ip = 366;
                    continue _fun116822
                }
            case 307:
                var2 = var11.benefitType;
                var0 = _closure1_slot8;
                var0 = var0.CHANNEL;
                if (!(var2 !== var0)) {
                    _fun116822_ip = 359;
                    continue _fun116822
                }
            case 327:
                var0 = var9 == var15;
                var2 = undefined;
                if (var0) {
                    _fun116822_ip = 341;
                    continue _fun116822
                }
            case 336:
                var2 = var15.length;
            case 341:
                var6 = var9 != var2;
                var0 = 0;
                if (!var6) {
                    _fun116822_ip = 353;
                    continue _fun116822
                }
            case 350:
                var0 = var2;
            case 353:
                var0 = var0 > var1;
                _fun116822_ip = 363;
                continue _fun116822;
            case 359:
                var0 = var9 != var4;
            case 363:
                var12 = var0;
            case 366:
                var0 = function() { // Environment: var25
                    var3 = _closure1_slot3;
                    var2 = undefined;
                    var1 = function*() { // Environment: var0
                        var0 = function*() { // Original name: ?anon_0_, environment: var0
                            _fun116825: for (var _fun116825_ip = 0;;) switch (_fun116825_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun116825_ip = 190;
                                        continue _fun116825
                                    }
                                case 10:
                                    var1 = _closure2_slot3;
                                    var3 = null;
                                    if (!(var3 == var1)) {
                                        _fun116825_ip = 34;
                                        continue _fun116825
                                    }
                                case 23:
                                    var1 = _closure2_slot5;
                                    if (!(var3 != var1)) {
                                        _fun116825_ip = 185;
                                        continue _fun116825
                                    }
                                case 34:
                                    var1 = _closure2_slot0;
                                    var4 = var1.benefitType;
                                    var1 = _closure1_slot8;
                                    var1 = var1.CHANNEL;
                                    if (!(var4 === var1)) {
                                        _fun116825_ip = 69;
                                        continue _fun116825
                                    }
                                case 61:
                                    var1 = _closure2_slot8;
                                    if (!(var3 != var1)) {
                                        _fun116825_ip = 185;
                                        continue _fun116825
                                    }
                                case 69: // try_start_0
                                    var4 = {};
                                    var1 = _closure2_slot1;
                                    var4.name = var1;
                                    var1 = _closure2_slot3;
                                    var4.emoji_id = var1;
                                    var1 = _closure2_slot5;
                                    var4.emoji_name = var1;
                                    var5 = _closure2_slot7;
                                    var3 = '';
                                    var1 = undefined;
                                    if (!(var3 !== var5)) {
                                        _fun116825_ip = 115;
                                        continue _fun116825
                                    }
                                case 111:
                                    var1 = _closure2_slot7;
                                case 115:
                                    var4.description = var1;
                                    var3 = _closure2_slot0;
                                    var1 = var3.benefitType;
                                    var4.ref_type = var1;
                                    var1 = _closure2_slot8;
                                    var4.ref_id = var1;
                                    var1 = var3.onSave;
                                    var1 = var1.bind(var3)(var4);
                                    SaveGenerator(address = 158);
                                case 156:
                                    return var1;
                                case 158:
                                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                    if (var3) {
                                        _fun116825_ip = 180;
                                        continue _fun116825
                                    }
                                case 164:
                                    var3 = _closure2_slot0;
                                    var2 = var3.onClose;
                                    var2 = var2.bind(var3)();
                                case 178: // try_end0
                                    _fun116825_ip = 185;
                                    continue _fun116825;
                                case 180:
                                    return var1;
                                case 183: // catch_target0
                                    CatchBlockStart(arg_register = 1);
                                case 185:
                                    var1 = undefined;
                                    return var1;
                                case 190:
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
                var7 = var0.bind(var3)();
                var0 = function() { // Environment: var25
                    var3 = _closure1_slot3;
                    var2 = undefined;
                    var1 = function*() { // Environment: var0
                        var0 = function*() { // Original name: ?anon_0_, environment: var0
                            _fun116829: for (var _fun116829_ip = 0;;) switch (_fun116829_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun116829_ip = 81;
                                        continue _fun116829
                                    }
                                case 7: // try_start_0
                                    var1 = _closure2_slot0;
                                    var3 = var1.onDelete;
                                    var1 = null;
                                    var3 = var1 == var3;
                                    var1 = undefined;
                                    if (var3) {
                                        _fun116829_ip = 45;
                                        continue _fun116829
                                    }
                                case 31:
                                    var4 = _closure2_slot0;
                                    var3 = var4.onDelete;
                                    var1 = var3.bind(var4)();
                                case 45:
                                    SaveGenerator(address = 49);
                                case 47:
                                    return var1;
                                case 49:
                                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                    if (var3) {
                                        _fun116829_ip = 71;
                                        continue _fun116829
                                    }
                                case 55:
                                    var3 = _closure2_slot0;
                                    var2 = var3.onClose;
                                    var2 = var2.bind(var3)();
                                case 69: // try_end0
                                    _fun116829_ip = 76;
                                    continue _fun116829;
                                case 71:
                                    return var1;
                                case 74: // catch_target0
                                    CatchBlockStart(arg_register = 1);
                                case 76:
                                    var1 = undefined;
                                    return var1;
                                case 81:
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
                var13 = var0.bind(var3)();
                var1 = var11.benefitType;
                var0 = _closure1_slot8;
                var0 = var0.CHANNEL;
                if (!(var1 !== var0)) {
                    _fun116822_ip = 467;
                    continue _fun116822
                }
            case 408:
                var6 = _closure1_slot0;
                var14 = _closure1_slot2;
                var0 = 15;
                var1 = var14[var0];
                var1 = var6.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var14[var0];
                var0 = var6.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0["0rVUnI"];
                var21 = var1.bind(var2)(var0);
                _fun116822_ip = 524;
                continue _fun116822;
            case 467:
                var6 = _closure1_slot0;
                var14 = _closure1_slot2;
                var0 = 15;
                var1 = var14[var0];
                var1 = var6.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var14[var0];
                var0 = var6.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0.Odqwp9;
                var21 = var1.bind(var2)(var0);
            case 524:
                var1 = var11.benefitType;
                var0 = _closure1_slot8;
                var0 = var0.CHANNEL;
                if (!(var1 !== var0)) {
                    _fun116822_ip = 601;
                    continue _fun116822
                }
            case 544:
                var6 = _closure1_slot0;
                var14 = _closure1_slot2;
                var0 = 15;
                var1 = var14[var0];
                var1 = var6.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var14[var0];
                var0 = var6.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0["kV54/Y"];
                var23 = var1.bind(var2)(var0);
                _fun116822_ip = 656;
                continue _fun116822;
            case 601:
                var6 = _closure1_slot0;
                var14 = _closure1_slot2;
                var0 = 15;
                var1 = var14[var0];
                var1 = var6.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var14[var0];
                var0 = var6.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0.GK18KJ;
                var23 = var1.bind(var2)(var0);
            case 656:
                var1 = var11.benefitType;
                var0 = _closure1_slot8;
                var0 = var0.CHANNEL;
                if (!(var1 !== var0)) {
                    _fun116822_ip = 735;
                    continue _fun116822
                }
            case 676:
                var6 = _closure1_slot0;
                var14 = _closure1_slot2;
                var0 = 15;
                var1 = var14[var0];
                var1 = var6.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var14[var0];
                var0 = var6.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0.NNqncc;
                var16 = var1.bind(var2)(var0);
                _fun116822_ip = 792;
                continue _fun116822;
            case 735:
                var6 = _closure1_slot0;
                var14 = _closure1_slot2;
                var0 = 15;
                var1 = var14[var0];
                var1 = var6.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var14[var0];
                var0 = var6.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0["DDUpp+"];
                var16 = var1.bind(var2)(var0);
            case 792:
                var1 = var11.benefitType;
                var0 = _closure1_slot8;
                var0 = var0.CHANNEL;
                if (!(var1 !== var0)) {
                    _fun116822_ip = 981;
                    continue _fun116822
                }
            case 815:
                var2 = _closure1_slot11;
                var6 = _closure1_slot0;
                var14 = _closure1_slot2;
                var0 = 18;
                var0 = var14[var0];
                var0 = var6.bind(var3)(var0);
                var1 = var0.FormInput;
                var0 = {
                    'style': null,
                    'showTopContainer': false,
                    'multiline': false
                };
                var20 = var19.textInput;
                var0.style = var20;
                var20 = _closure1_slot10;
                var0.maxLength = var20;
                var0.value = var15;
                var15 = 15;
                var20 = var14[var15];
                var20 = var6.bind(var3)(var20);
                var26 = var20.intl;
                var20 = var26.string;
                var15 = var14[var15];
                var15 = var6.bind(var3)(var15);
                var15 = var15.t;
                var15 = var15["kV54/Y"];
                var15 = var20.bind(var26)(var15);
                var0.placeholder = var15;
                var0.onChange = var5;
                var5 = true;
                var0.autoFocus = var5;
                var5 = 19;
                var5 = var14[var5];
                var5 = var6.bind(var3)(var5);
                var5 = var5.ClearButtonVisibility;
                var5 = var5.WITH_CONTENT;
                var0.clearButtonVisibility = var5;
                var14 = var2.bind(var3)(var1, var0);
                _fun116822_ip = 1038;
                continue _fun116822;
            case 981:
                var2 = _closure1_slot11;
                var1 = _closure1_slot1;
                var5 = _closure1_slot2;
                var0 = 17;
                var0 = var5[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var0.channelId = var4;
                var4 = var11.guildId;
                var0.guildId = var4;
                var4 = function arg0() {
                    var1 = arg0;
                    var4 = _closure2_slot9;
                    var3 = var1.id;
                    var0 = undefined;
                    var3 = var4.bind(var0)(var3);
                    var2 = _closure2_slot2;
                    var1 = var1.name;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var0.onChange = var4;
                var14 = var2.bind(var3)(var1, var0);
            case 1038:
                var2 = _closure1_slot12;
                var1 = _closure1_slot5;
                var0 = {};
                var4 = var8.container;
                var0.style = var4;
                var6 = _closure1_slot11;
                var15 = _closure1_slot1;
                var20 = _closure1_slot2;
                var4 = 20;
                var4 = var20[var4];
                var5 = var15.bind(var3)(var4);
                var4 = {};
                var4.title = var21;
                var21 = var11.onClose;
                var4.onClose = var21;
                var4.canSave = var12;
                var4.onSave = var7;
                var7 = var11.listingId;
                var4.listingId = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot12;
                var6 = _closure1_slot6;
                var5 = {
                    'keyboardShouldPersistTaps': 'handled',
                    'showsVerticalScrollIndicator': false,
                    'alwaysBounceVertical': false
                };
                var12 = var8.scrollContainer;
                var8 = new Array(2);
                var8[0] = var12;
                var12 = {};
                var21 = 32;
                var21 = var24 + var21;
                var21 = var21 + var22;
                var12.paddingBottom = var21;
                var8[1] = var12;
                var5.contentContainerStyle = var8;
                var22 = _closure1_slot11;
                var12 = 21;
                var8 = var20[var12];
                var21 = var15.bind(var3)(var8);
                var8 = {};
                var24 = var19.header;
                var8.style = var24;
                var8.children = var23;
                var21 = var22.bind(var3)(var21, var8);
                var8 = new Array(7);
                var8[0] = var21;
                var8[1] = var14;
                var24 = _closure1_slot11;
                var14 = var20[var12];
                var23 = var15.bind(var3)(var14);
                var21 = {};
                var14 = var19.header;
                var21.style = var14;
                var14 = _closure1_slot0;
                var22 = 15;
                var26 = var20[var22];
                var26 = var14.bind(var3)(var26);
                var30 = var26.intl;
                var29 = var30.string;
                var26 = var20[var22];
                var26 = var14.bind(var3)(var26);
                var26 = var26.t;
                var26 = var26.sMOuuS;
                var26 = var29.bind(var30)(var26);
                var21.children = var26;
                var21 = var24.bind(var3)(var23, var21);
                var8[2] = var21;
                var24 = _closure1_slot11;
                var21 = 22;
                var21 = var20[var21];
                var23 = var15.bind(var3)(var21);
                var21 = {};
                var26 = {};
                var26.emojiId = var28;
                var26.emojiName = var27;
                var21.emoji = var26;
                var26 = var11.guildId;
                var21.guildId = var26;
                var25 = function arg0() {
                    var1 = arg0;
                    var4 = _closure2_slot4;
                    var3 = var1.emojiId;
                    var0 = undefined;
                    var3 = var4.bind(var0)(var3);
                    var2 = _closure2_slot6;
                    var1 = var1.emojiName;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var21.onChange = var25;
                var21 = var24.bind(var3)(var23, var21);
                var8[3] = var21;
                var21 = _closure1_slot11;
                var12 = var20[var12];
                var15 = var15.bind(var3)(var12);
                var12 = {};
                var23 = var19.header;
                var12.style = var23;
                var23 = var20[var22];
                var23 = var14.bind(var3)(var23);
                var24 = var23.intl;
                var23 = var24.string;
                var22 = var20[var22];
                var22 = var14.bind(var3)(var22);
                var22 = var22.t;
                var22 = var22["74JctW"];
                var22 = var23.bind(var24)(var22);
                var12.children = var22;
                var12 = var21.bind(var3)(var15, var12);
                var8[4] = var12;
                var15 = _closure1_slot11;
                var12 = 18;
                var12 = var20[var12];
                var12 = var14.bind(var3)(var12);
                var14 = var12.FormInput;
                var12 = {
                    'style': null,
                    'showTopContainer': false,
                    'multiline': true,
                    'maxLength': null,
                    'numberOfLines': 3
                };
                var19 = var19.textInput;
                var12.style = var19;
                var19 = _closure1_slot9;
                var12.maxLength = var19;
                var12.value = var18;
                var12.onChange = var17;
                var12.placeholder = var16;
                var12 = var15.bind(var3)(var14, var12);
                var8[5] = var12;
                var11 = var11.onDelete;
                var11 = var9 == var11;
                var9 = null;
                if (var11) {
                    _fun116822_ip = 1600;
                    continue _fun116822
                }
            case 1579:
                var12 = _closure1_slot11;
                var11 = _closure1_slot14;
                var10 = {};
                var10.onDelete = var13;
                var9 = var12.bind(var3)(var11, var10);
            case 1600:
                var8[6] = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 23;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionBenefitEditorModal.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 27, 14902, 5635, 660, 33, 1297, 671, 4682, 12564, 4902, 3269, 4876, 1234, 1568, 14904, 5378, 5407, 14906, 5930, 14907, 2]);