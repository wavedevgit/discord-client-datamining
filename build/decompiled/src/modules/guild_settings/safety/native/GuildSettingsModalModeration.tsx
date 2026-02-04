// modules/guild_settings/safety/native/GuildSettingsModalModeration.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = function() {
        _fun114715: for (var _fun114715_ip = 0;;) switch (_fun114715_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 72: // try_end0
                _fun114715_ip = 76;
                continue _fun114715;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot21 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot21 = var0;
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
    var3 = var7.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var6 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot8 = var3;
    var6 = 6;
    var6 = var5[var6];
    var6 = var7.bind(var0)(var6);
    var _closure1_slot9 = var6;
    var6 = 7;
    var6 = var5[var6];
    var6 = var7.bind(var0)(var6);
    var _closure1_slot10 = var6;
    var6 = 8;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var7 = var6.GuildFeatures;
    var _closure1_slot11 = var7;
    var7 = var6.HelpdeskArticles;
    var _closure1_slot12 = var7;
    var7 = var6.Permissions;
    var _closure1_slot13 = var7;
    var6 = var6.GuildNSFWContentLevel;
    var _closure1_slot14 = var6;
    var6 = 9;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.TitleStyleType;
    var _closure1_slot15 = var6;
    var6 = 10;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var7 = var6.jsx;
    var _closure1_slot16 = var7;
    var7 = var6.jsxs;
    var _closure1_slot17 = var7;
    var6 = var6.Fragment;
    var _closure1_slot18 = var6;
    var6 = function arg0() {
        _fun114718: for (var _fun114718_ip = 0;;) switch (_fun114718_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.guild;
                var3 = var1.nsfwLevel;
                var0 = null;
                if (!(var0 == var3)) {
                    _fun114718_ip = 33;
                    continue _fun114718
                }
            case 20:
                var2 = _closure1_slot14;
                var3 = var2.DEFAULT;
            case 33:
                var10 = var1.ownerConfiguredContentLevel;
                if (!(var0 == var10)) {
                    _fun114718_ip = 56;
                    continue _fun114718
                }
            case 43:
                var1 = _closure1_slot14;
                var10 = var1.DEFAULT;
            case 56:
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 11;
                var1 = var4[var1];
                var5 = undefined;
                var2 = var2.bind(var5)(var1);
                var1 = var2.useUserIsTeen;
                var1 = var1.bind(var2)();
                var2 = _closure1_slot14;
                var2 = var2.AGE_RESTRICTED;
                var7 = var3 === var2;
                if (!var7) {
                    _fun114718_ip = 122;
                    continue _fun114718
                }
            case 108:
                var2 = _closure1_slot14;
                var2 = var2.AGE_RESTRICTED;
                var7 = var10 !== var2;
            case 122:
                var6 = _closure1_slot8;
                var4 = var6.useCallback;
                var3 = function(arg0) { // Environment: var2
                    _fun114719: for (var _fun114719_ip = 0;;) switch (_fun114719_ip) {
                        case 0:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 12;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.updateGuild;
                            var1 = {};
                            var5 = _closure1_slot14;
                            var4 = arg0;
                            if (var4) {
                                _fun114719_ip = 51;
                                continue _fun114719
                            }
                        case 43:
                            var4 = var5.DEFAULT;
                            _fun114719_ip = 57;
                            continue _fun114719;
                        case 51:
                            var4 = var5.AGE_RESTRICTED;
                        case 57:
                            var1.ownerConfiguredContentLevel = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var2 = new Array(0);
                var8 = var4.bind(var6)(var3, var2);
                var0 = null;
                if (var1) {
                    _fun114718_ip = 490;
                    continue _fun114718
                }
            case 158:
                var4 = _closure1_slot16;
                var14 = _closure1_slot0;
                var15 = _closure1_slot2;
                var1 = 13;
                var2 = var15[var1];
                var2 = var14.bind(var5)(var2);
                var3 = var2.FormSection;
                var2 = {};
                var11 = 14;
                var6 = var15[var11];
                var6 = var14.bind(var5)(var6);
                var13 = var6.intl;
                var12 = var13.string;
                var6 = var15[var11];
                var6 = var14.bind(var5)(var6);
                var6 = var6.t;
                var6 = var6.YJlvBM;
                var6 = var12.bind(var13)(var6);
                var2.title = var6;
                var6 = var15[var1];
                var6 = var14.bind(var5)(var6);
                var13 = var6.FormHint;
                var12 = {};
                var6 = var15[var11];
                var6 = var14.bind(var5)(var6);
                var18 = var6.intl;
                var17 = var18.format;
                var6 = var15[var11];
                var6 = var14.bind(var5)(var6);
                var6 = var6.t;
                var16 = var6.iyQQ62;
                var6 = {};
                var20 = _closure1_slot1;
                var19 = 15;
                var19 = var15[var19];
                var21 = var20.bind(var5)(var19);
                var20 = var21.getArticleURL;
                var19 = _closure1_slot12;
                var19 = var19.NSFW_SERVER_AGE_RESTRICTION;
                var19 = var20.bind(var21)(var19);
                var6.helpArticleLink = var19;
                var6 = var17.bind(var18)(var16, var6);
                var12.children = var6;
                var6 = 'filter-hint';
                var6 = var4.bind(var5)(var13, var12, var6);
                var2.hint = var6;
                var1 = var15[var1];
                var1 = var14.bind(var5)(var1);
                var6 = var1.FormSwitchRow;
                var1 = {};
                var12 = var15[var11];
                var12 = var14.bind(var5)(var12);
                var13 = var12.intl;
                var12 = var13.string;
                var11 = var15[var11];
                var11 = var14.bind(var5)(var11);
                var11 = var11.t;
                var11 = var11.N9xEJF;
                var11 = var12.bind(var13)(var11);
                var1.label = var11;
                var9 = _closure1_slot14;
                var9 = var9.AGE_RESTRICTED;
                var9 = var10 === var9;
                var1.value = var9;
                var1.onValueChange = var8;
                var1.disabled = var7;
                var1 = var4.bind(var5)(var6, var1);
                var2.children = var1;
                var1 = 'filter-section';
                var0 = var4.bind(var5)(var3, var2, var1);
            case 490:
                return var0;
        }
    };
    var _closure1_slot19 = var6;
    var6 = var3.PureComponent;
    var3 = function(arg0) { // Environment: var1
        var3 = function arg0() {
            _fun114721: for (var _fun114721_ip = 0;;) switch (_fun114721_ip) {
                case 0:
                    var4 = this;
                    var12 = 0;
                    var0 = copyRestArgs(var12);
                    var7 = _closure1_slot3;
                    var2 = _closure2_slot0;
                    var3 = undefined;
                    var7 = var7.bind(var3)(var4, var2);
                    var9 = new Array(0);
                    var12 = var9;
                    var11 = var0;
                    var10 = 0;
                    var0 = arraySpread(var12, var11, var10);
                    var0 = _closure1_slot6;
                    var8 = var0.bind(var3)(var2);
                    var2 = _closure1_slot5;
                    var0 = _closure1_slot21;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun114721_ip = 86;
                        continue _fun114721
                    }
                case 73:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun114721_ip = 120;
                    continue _fun114721;
                case 86:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot6;
                    var5 = var5.bind(var3)(var4);
                    var5 = var5.constructor;
                    var0 = var6.bind(var7)(var8, var9, var5);
                case 120:
                    var0 = var2.bind(var3)(var4, var0);
                    var _closure3_slot0 = var0;
                    var1 = function() { // Environment: var1
                        var0 = _closure3_slot0;
                        var0 = var0.props;
                        var5 = var0.guild;
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 12;
                        var1 = var1[var0];
                        var0 = undefined;
                        var4 = var2.bind(var0)(var1);
                        var3 = var4.saveGuild;
                        var2 = var5.id;
                        var1 = {};
                        var6 = var5.verificationLevel;
                        var1.verificationLevel = var6;
                        var6 = var5.explicitContentFilter;
                        var1.explicitContentFilter = var6;
                        var5 = var5.ownerConfiguredContentLevel;
                        var1.ownerConfiguredContentLevel = var5;
                        var1 = var3.bind(var4)(var2, var1);
                        return var0;
                    };
                    var0.handleSaveChanges = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'componentDidMount';
        var4.key = var0;
        var0 = function() {
            var1 = this;
            var0 = var1.updateNavigation;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(9);
        var0[0] = var4;
        var4 = {};
        var6 = 'componentDidUpdate';
        var4.key = var6;
        var6 = function arg0() {
            var2 = this;
            var1 = var2.updateNavigation;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'updateNavigation';
        var4.key = var6;
        var6 = function arg0() {
            _fun114725: for (var _fun114725_ip = 0;;) switch (_fun114725_ip) {
                case 0:
                    var1 = arg0;
                    var0 = this;
                    var _closure3_slot0 = var0;
                    var0 = var0.props;
                    var6 = var0.submitting;
                    var5 = var0.hasChanges;
                    var2 = var0.navigation;
                    var0 = null;
                    var0 = var0 != var1;
                    if (!var0) {
                        _fun114725_ip = 54;
                        continue _fun114725
                    }
                case 44:
                    var3 = var1.submitting;
                    var0 = var6 === var3;
                case 54:
                    if (!var0) {
                        _fun114725_ip = 67;
                        continue _fun114725
                    }
                case 57:
                    var1 = var1.hasChanges;
                    var0 = var5 === var1;
                case 67:
                    if (var0) {
                        _fun114725_ip = 129;
                        continue _fun114725
                    }
                case 70:
                    var1 = var2.setOptions;
                    var0 = {};
                    var7 = undefined;
                    if (!var6) {
                        _fun114725_ip = 90;
                        continue _fun114725
                    }
                case 83:
                    var7 = function() { // Environment: var4
                        var0 = null;
                        return var0;
                    };
                case 90:
                    var0.headerLeft = var7;
                    if (var6) {
                        _fun114725_ip = 112;
                        continue _fun114725
                    }
                case 98:
                    var3 = undefined;
                    if (!var5) {
                        _fun114725_ip = 110;
                        continue _fun114725
                    }
                case 103:
                    var3 = function() { // Environment: var4
                        var3 = _closure1_slot16;
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var0 = 17;
                        var0 = var8[var0];
                        var2 = undefined;
                        var0 = var7.bind(var2)(var0);
                        var1 = var0.HeaderActionButton;
                        var0 = {};
                        var4 = _closure3_slot0;
                        var4 = var4.handleSaveChanges;
                        var0.onPress = var4;
                        var4 = 14;
                        var5 = var8[var4];
                        var5 = var7.bind(var2)(var5);
                        var6 = var5.intl;
                        var5 = var6.string;
                        var4 = var8[var4];
                        var4 = var7.bind(var2)(var4);
                        var4 = var4.t;
                        var4 = var4["R3BPH+"];
                        var4 = var5.bind(var6)(var4);
                        var0.text = var4;
                        var0 = var3.bind(var2)(var1, var0);
                        return var0;
                    };
                case 110:
                    _fun114725_ip = 119;
                    continue _fun114725;
                case 112:
                    var3 = function() { // Environment: var4
                        var3 = _closure1_slot16;
                        var1 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 16;
                        var0 = var2[var0];
                        var2 = undefined;
                        var0 = var1.bind(var2)(var0);
                        var1 = var0.HeaderSubmittingIndicator;
                        var0 = {};
                        var0 = var3.bind(var2)(var1, var0);
                        return var0;
                    };
                case 119:
                    var0.headerRight = var3;
                    var0 = var1.bind(var2)(var0);
                case 129:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'renderVerificationLevelSection';
        var4.key = var6;
        var6 = function() {
            var0 = this;
            var _closure3_slot0 = var0;
            var0 = var0.props;
            var2 = var0.guild;
            var _closure3_slot1 = var2;
            var0 = new Array(0);
            var _closure3_slot2 = var0;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 18;
            var3 = var9[var3];
            var4 = undefined;
            var5 = var8.bind(var4)(var3);
            var3 = var5.generateVerificationLevelOptions;
            var10 = var2.features;
            var7 = var10.has;
            var2 = _closure1_slot11;
            var2 = var2.COMMUNITY;
            var2 = var7.bind(var10)(var2);
            var3 = var3.bind(var5)(var2);
            var2 = var3.map;
            var1 = function(arg0) { // Environment: var1
                _fun114730: for (var _fun114730_ip = 0;;) switch (_fun114730_ip) {
                    case 0:
                        var0 = arg0;
                        var15 = var0.name;
                        var7 = var0.desc;
                        var18 = var0.color;
                        var8 = var0.value;
                        var _closure4_slot0 = var8;
                        var6 = var0.disabled;
                        var4 = _closure3_slot2;
                        var3 = var4.push;
                        var12 = _closure1_slot16;
                        var14 = _closure1_slot0;
                        var13 = _closure1_slot2;
                        var9 = 13;
                        var10 = var13[var9];
                        var0 = undefined;
                        var10 = var14.bind(var0)(var10);
                        var11 = var10.FormRow;
                        var10 = {};
                        var13 = var13[var9];
                        var13 = var14.bind(var0)(var13);
                        var13 = var13.FormRow;
                        var14 = var13.Label;
                        var13 = {};
                        var16 = null;
                        var17 = var16 != var18;
                        if (!var17) {
                            _fun114730_ip = 125;
                            continue _fun114730
                        }
                    case 116:
                        var17 = {};
                        var17.color = var18;
                        var16 = var17;
                    case 125:
                        var13.style = var16;
                        var13.text = var15;
                        var13 = var12.bind(var0)(var14, var13);
                        var10.label = var13;
                        var10.subLabel = var7;
                        var2 = function() {
                            var2 = _closure3_slot0;
                            var1 = var2.handleVerificationLevelChange;
                            var0 = _closure4_slot0;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var10.onPress = var2;
                        var2 = _closure3_slot0;
                        var2 = var2.props;
                        var2 = var2.canManageGuild;
                        var2 = !var2;
                        if (var2) {
                            _fun114730_ip = 183;
                            continue _fun114730
                        }
                    case 180:
                        var2 = var6;
                    case 183:
                        var10.disabled = var2;
                        var2 = 'radio';
                        var10.accessibilityRole = var2;
                        var2 = {};
                        var13 = _closure3_slot1;
                        var5 = var13.verificationLevel;
                        var5 = var8 === var5;
                        var2.selected = var5;
                        var10.accessibilityState = var2;
                        var7 = _closure1_slot16;
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var1 = var5[var9];
                        var1 = var6.bind(var0)(var1);
                        var1 = var1.FormRow;
                        var2 = var1.Radio;
                        var1 = {};
                        var13 = var13.verificationLevel;
                        var13 = var8 === var13;
                        var1.selected = var13;
                        var1 = var7.bind(var0)(var2, var1);
                        var10.leading = var1;
                        var1 = global;
                        var2 = var1.HermesInternal;
                        var13 = var2.concat;
                        var2 = 'level-';
                        var2 = var13.bind(var2)(var8);
                        var2 = var12.bind(var0)(var11, var10, var2);
                        var5 = var5[var9];
                        var5 = var6.bind(var0)(var5);
                        var6 = var5.FormDivider;
                        var1 = var1.HermesInternal;
                        var5 = var1.concat;
                        var1 = 'level-divider-';
                        var5 = var5.bind(var1)(var8);
                        var1 = {};
                        var1 = var7.bind(var0)(var6, var1, var5);
                        var1 = var3.bind(var4)(var2, var1);
                        return var0;
                }
            };
            var1 = var2.bind(var3)(var1);
            var1 = var0.pop;
            var1 = var1.bind(var0)();
            var3 = _closure1_slot16;
            var5 = 13;
            var1 = var9[var5];
            var1 = var8.bind(var4)(var1);
            var2 = var1.FormSection;
            var1 = {};
            var5 = var9[var5];
            var5 = var8.bind(var4)(var5);
            var11 = var5.FormHint;
            var10 = {};
            var5 = 14;
            var7 = var9[var5];
            var7 = var8.bind(var4)(var7);
            var14 = var7.intl;
            var13 = var14.format;
            var7 = var9[var5];
            var7 = var8.bind(var4)(var7);
            var7 = var7.t;
            var12 = var7.iuRk2j;
            var7 = {};
            var7 = var13.bind(var14)(var12, var7);
            var10.children = var7;
            var7 = 'level-hint';
            var7 = var3.bind(var4)(var11, var10, var7);
            var1.hint = var7;
            var6 = _closure1_slot15;
            var6 = var6.ANDROID_NO_BORDER;
            var1.titleStyleType = var6;
            var6 = var9[var5];
            var6 = var8.bind(var4)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var5 = var9[var5];
            var5 = var8.bind(var4)(var5);
            var5 = var5.t;
            var5 = var5.DpRdYK;
            var5 = var6.bind(var7)(var5);
            var1.title = var5;
            var1.children = var0;
            var0 = 'level-section';
            var1 = var3.bind(var4)(var2, var1, var0);
            var0 = new Array(1);
            var0[0] = var1;
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'renderExplicitContentFilter';
        var4.key = var6;
        var6 = function() {
            var0 = this;
            var _closure3_slot0 = var0;
            var0 = var0.props;
            var2 = var0.guild;
            var _closure3_slot1 = var2;
            var0 = new Array(0);
            var _closure3_slot2 = var0;
            var8 = _closure1_slot0;
            var14 = _closure1_slot2;
            var3 = 18;
            var3 = var14[var3];
            var4 = undefined;
            var5 = var8.bind(var4)(var3);
            var3 = var5.generateContentFilterOptions;
            var7 = var2.features;
            var6 = var7.has;
            var2 = _closure1_slot11;
            var2 = var2.COMMUNITY;
            var2 = var6.bind(var7)(var2);
            var3 = var3.bind(var5)(var2);
            var2 = var3.map;
            var1 = function(arg0) { // Environment: var1
                _fun114733: for (var _fun114733_ip = 0;;) switch (_fun114733_ip) {
                    case 0:
                        var0 = arg0;
                        var13 = var0.name;
                        var7 = var0.desc;
                        var8 = var0.value;
                        var _closure4_slot0 = var8;
                        var6 = var0.disabled;
                        var4 = _closure3_slot2;
                        var3 = var4.push;
                        var12 = _closure1_slot16;
                        var11 = _closure1_slot0;
                        var0 = _closure1_slot2;
                        var9 = 13;
                        var10 = var0[var9];
                        var0 = undefined;
                        var10 = var11.bind(var0)(var10);
                        var11 = var10.FormRow;
                        var10 = {};
                        var10.label = var13;
                        var10.subLabel = var7;
                        var2 = function() {
                            var2 = _closure3_slot0;
                            var1 = var2.handleExplicitContentFilterChange;
                            var0 = _closure4_slot0;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var10.onPress = var2;
                        var2 = _closure3_slot0;
                        var2 = var2.props;
                        var2 = var2.canManageGuild;
                        var2 = !var2;
                        if (var2) {
                            _fun114733_ip = 123;
                            continue _fun114733
                        }
                    case 120:
                        var2 = var6;
                    case 123:
                        var10.disabled = var2;
                        var2 = 'radio';
                        var10.accessibilityRole = var2;
                        var2 = {};
                        var13 = _closure3_slot1;
                        var5 = var13.explicitContentFilter;
                        var5 = var8 === var5;
                        var2.selected = var5;
                        var10.accessibilityState = var2;
                        var7 = _closure1_slot16;
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var1 = var5[var9];
                        var1 = var6.bind(var0)(var1);
                        var1 = var1.FormRow;
                        var2 = var1.Radio;
                        var1 = {};
                        var13 = var13.explicitContentFilter;
                        var13 = var8 === var13;
                        var1.selected = var13;
                        var1 = var7.bind(var0)(var2, var1);
                        var10.leading = var1;
                        var1 = global;
                        var2 = var1.HermesInternal;
                        var13 = var2.concat;
                        var2 = 'filter-';
                        var2 = var13.bind(var2)(var8);
                        var2 = var12.bind(var0)(var11, var10, var2);
                        var5 = var5[var9];
                        var5 = var6.bind(var0)(var5);
                        var6 = var5.FormDivider;
                        var1 = var1.HermesInternal;
                        var5 = var1.concat;
                        var1 = 'filter-divider-';
                        var5 = var5.bind(var1)(var8);
                        var1 = {};
                        var1 = var7.bind(var0)(var6, var1, var5);
                        var1 = var3.bind(var4)(var2, var1);
                        return var0;
                }
            };
            var1 = var2.bind(var3)(var1);
            var1 = var0.pop;
            var1 = var1.bind(var0)();
            var3 = _closure1_slot16;
            var6 = 13;
            var1 = var14[var6];
            var1 = var8.bind(var4)(var1);
            var2 = var1.FormSection;
            var1 = {};
            var5 = 14;
            var7 = var14[var5];
            var7 = var8.bind(var4)(var7);
            var10 = var7.intl;
            var9 = var10.string;
            var7 = var14[var5];
            var7 = var8.bind(var4)(var7);
            var7 = var7.t;
            var7 = var7.bPgfJz;
            var7 = var9.bind(var10)(var7);
            var1.title = var7;
            var6 = var14[var6];
            var6 = var8.bind(var4)(var6);
            var7 = var6.FormHint;
            var6 = {};
            var9 = var14[var5];
            var9 = var8.bind(var4)(var9);
            var10 = var9.intl;
            var9 = var10.format;
            var5 = var14[var5];
            var5 = var8.bind(var4)(var5);
            var5 = var5.t;
            var8 = var5.BI4ukC;
            var5 = {};
            var13 = _closure1_slot1;
            var12 = 15;
            var12 = var14[var12];
            var13 = var13.bind(var4)(var12);
            var12 = var13.getArticleURL;
            var11 = _closure1_slot12;
            var11 = var11.SAFE_DIRECT_MESSAGING;
            var11 = var12.bind(var13)(var11);
            var5.helpdeskArticle = var11;
            var5 = var9.bind(var10)(var8, var5);
            var6.children = var5;
            var5 = 'filter-hint';
            var5 = var3.bind(var4)(var7, var6, var5);
            var1.hint = var5;
            var1.children = var0;
            var0 = 'filter-section';
            var1 = var3.bind(var4)(var2, var1, var0);
            var0 = new Array(1);
            var0[0] = var1;
            return var0;
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'render';
        var4.key = var6;
        var6 = function() {
            _fun114735: for (var _fun114735_ip = 0;;) switch (_fun114735_ip) {
                case 0:
                    var10 = this;
                    var0 = var10.props;
                    var8 = var0.canManageGuild;
                    var13 = var0.guild;
                    var12 = var0.hasChanges;
                    var3 = _closure1_slot17;
                    var2 = _closure1_slot18;
                    var1 = {};
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var0 = 13;
                    var4 = var4[var0];
                    var0 = undefined;
                    var4 = var6.bind(var0)(var4);
                    var6 = var4.Form;
                    var4 = {};
                    var7 = var10.props;
                    var7 = var7.contentContainerStyle;
                    var4.contentContainerStyle = var7;
                    var7 = var10.renderVerificationLevelSection;
                    var9 = var7.bind(var10)();
                    var7 = new Array(3);
                    var7[0] = var9;
                    var9 = var10.renderExplicitContentFilter;
                    var9 = var9.bind(var10)();
                    var7[1] = var9;
                    if (!var8) {
                        _fun114735_ip = 148;
                        continue _fun114735
                    }
                case 123:
                    var11 = _closure1_slot16;
                    var10 = _closure1_slot19;
                    var9 = {};
                    var9.guild = var13;
                    var9.hasChanges = var12;
                    var8 = var11.bind(var0)(var10, var9);
                case 148:
                    var7[2] = var8;
                    var4.children = var7;
                    var6 = var3.bind(var0)(var6, var4);
                    var4 = new Array(2);
                    var4[0] = var6;
                    var7 = _closure1_slot16;
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var5 = 19;
                    var5 = var8[var5];
                    var5 = var6.bind(var0)(var5);
                    var6 = var5.NavScrim;
                    var5 = {};
                    var5 = var7.bind(var0)(var6, var5);
                    var4[1] = var5;
                    var1.children = var4;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
            }
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'componentWillUnmount';
        var4.key = var6;
        var6 = function() {
            _fun114736: for (var _fun114736_ip = 0;;) switch (_fun114736_ip) {
                case 0:
                    var0 = this;
                    var1 = var0.props;
                    var1 = var1.hasChanges;
                    if (!var1) {
                        _fun114736_ip = 68;
                        continue _fun114736
                    }
                case 17:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 12;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.cancelChanges;
                    var0 = var0.props;
                    var0 = var0.guild;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                case 68:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'handleVerificationLevelChange';
        var4.key = var6;
        var6 = function arg0() {
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 12;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.updateGuild;
            var1 = {};
            var4 = arg0;
            var1.verificationLevel = var4;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'handleExplicitContentFilterChange';
        var4.key = var6;
        var5 = function arg0() {
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 12;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.updateGuild;
            var1 = {};
            var4 = arg0;
            var1.explicitContentFilter = var4;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var4.value = var5;
        var0[8] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var6);
    var _closure1_slot20 = var3;
    var3 = 23;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_settings/safety/native/GuildSettingsModalModeration.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun114739: for (var _fun114739_ip = 0;;) switch (_fun114739_ip) {
            case 0:
                var1 = arg0;
                var7 = var1.contentContainerStyle;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 20;
                var1 = var3[var1];
                var4 = undefined;
                var6 = var2.bind(var4)(var1);
                var1 = var6.useNavigation;
                var12 = var1.bind(var6)();
                var1 = 21;
                var6 = var3[var1];
                var10 = var2.bind(var4)(var6);
                var9 = var10.useStateFromStoresObject;
                var6 = _closure1_slot10;
                var8 = new Array(1);
                var8[0] = var6;
                var6 = function() { // Environment: var0
                    var1 = _closure1_slot10;
                    var0 = var1.getProps;
                    var3 = var0.bind(var1)();
                    var2 = var3.submitting;
                    var1 = var3.hasChanges;
                    var0 = {};
                    var3 = var3.guild;
                    var0.guild = var3;
                    var0.submitting = var2;
                    var0.hasChanges = var1;
                    return var0;
                };
                var6 = var9.bind(var10)(var8, var6);
                var11 = var6.guild;
                var _closure2_slot0 = var11;
                var10 = var6.submitting;
                var9 = var6.hasChanges;
                var1 = var3[var1];
                var3 = var2.bind(var4)(var1);
                var2 = var3.useStateFromStores;
                var6 = _closure1_slot9;
                var1 = new Array(1);
                var1[0] = var6;
                var0 = function() { // Environment: var0
                    var3 = _closure1_slot9;
                    var2 = var3.can;
                    var0 = _closure1_slot13;
                    var1 = var0.MANAGE_GUILD;
                    var0 = _closure2_slot0;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var8 = var2.bind(var3)(var1, var0);
                var0 = null;
                var1 = var0 != var11;
                if (!var1) {
                    _fun114739_ip = 241;
                    continue _fun114739
                }
            case 158:
                var3 = _closure1_slot16;
                var2 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 22;
                var1 = var6[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.RedesignCompat;
                var1 = {};
                var6 = _closure1_slot20;
                var5 = {};
                var5.navigation = var12;
                var5.guild = var11;
                var5.submitting = var10;
                var5.hasChanges = var9;
                var5.canManageGuild = var8;
                var5.contentContainerStyle = var7;
                var5 = var3.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 241:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 31, 3091, 8156, 660, 4874, 33, 6508, 8155, 5378, 1234, 1684, 4705, 5322, 10446, 5204, 1469, 566, 4897, 2]);