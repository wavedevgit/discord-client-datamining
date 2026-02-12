// modules/user_settings/native/changelog/UserSettingsSurveyChangelogOverride.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var13 = metroImportDefault;
    var6 = metroImportAll;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var6;
    var _closure1_slot3 = var5;
    var0 = function arg0() {
        var0 = arg0;
        var9 = var0.survey;
        var3 = _closure1_slot9;
        var5 = _closure1_slot0;
        var7 = _closure1_slot3;
        var0 = 10;
        var0 = var7[var0];
        var2 = undefined;
        var0 = var5.bind(var2)(var0);
        var1 = var0.ActionSheet;
        var0 = {};
        var6 = _closure1_slot12;
        var0.header = var6;
        var6 = _closure1_slot9;
        var4 = 11;
        var4 = var7[var4];
        var4 = var5.bind(var2)(var4);
        var4 = var4.ActionSheetRow;
        var5 = var4.Group;
        var4 = {};
        var7 = global;
        var8 = var7.Object;
        var7 = var8.entries;
        var9 = var7.bind(var8)(var9);
        var8 = var9.map;
        var7 = function(arg0) { // Environment: var7
            _fun86647: for (var _fun86647_ip = 0;;) switch (_fun86647_ip) {
                case 0:
                    var2 = arg0;
                    var0 = var2[Symbol.iterator];
                    var2 = var0().next;
                    var6 = var2().value;
                    var1 = var0;
                    var4 = undefined;
                    var1 = var1 === var4;
                    var3 = undefined;
                    if (var1) {
                        _fun86647_ip = 29;
                        continue _fun86647
                    }
                case 26:
                    var3 = var6;
                case 29:
                    var10 = undefined;
                    if (var1) {
                        _fun86647_ip = 59;
                        continue _fun86647
                    }
                case 34:
                    var6 = var2().value;
                    var2 = var0;
                    var2 = var2 === var4;
                    var10 = undefined;
                    var1 = var2;
                    if (var2) {
                        _fun86647_ip = 59;
                        continue _fun86647
                    }
                case 53:
                    var10 = var6;
                    var1 = var2;
                case 59:
                    var _closure3_slot0 = var10;
                    if (var1) {
                        _fun86647_ip = 69;
                        continue _fun86647
                    }
                case 66:
                    var0.return();
                case 69:
                    var2 = _closure1_slot9;
                    var1 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var0 = 11;
                    var0 = var7[var0];
                    var0 = var1.bind(var4)(var0);
                    var1 = var0.ActionSheetRow;
                    var0 = {};
                    var0.label = var3;
                    var7 = null;
                    var8 = var7 != var10;
                    var7 = 'null';
                    if (!var8) {
                        _fun86647_ip = 140;
                        continue _fun86647
                    }
                case 121:
                    var8 = global;
                    var9 = var8.JSON;
                    var8 = var9.stringify;
                    var7 = var8.bind(var9)(var10);
                case 140:
                    var0.subLabel = var7;
                    var6 = _closure1_slot13;
                    var0.icon = var6;
                    var5 = function() {
                        _fun86648: for (var _fun86648_ip = 0;;) switch (_fun86648_ip) {
                            case 0:
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot3;
                                var0 = 12;
                                var1 = var1[var0];
                                var0 = undefined;
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.copy;
                                var5 = _closure3_slot0;
                                var1 = null;
                                var5 = var1 != var5;
                                var1 = 'null';
                                if (!var5) {
                                    _fun86648_ip = 74;
                                    continue _fun86648
                                }
                            case 51:
                                var5 = global;
                                var6 = var5.JSON;
                                var5 = var6.stringify;
                                var4 = _closure3_slot0;
                                var1 = var5.bind(var6)(var4);
                            case 74:
                                var1 = var2.bind(var3)(var1);
                                return var0;
                        }
                    };
                    var0.onPress = var5;
                    var0 = var2.bind(var4)(var1, var0, var3);
                    return var0;
            }
        };
        var7 = var8.bind(var9)(var7);
        var4.children = var7;
        var4 = var6.bind(var2)(var5, var4);
        var0.children = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var _closure1_slot18 = var0;
    var0 = function() {
        _fun86649: for (var _fun86649_ip = 0;;) switch (_fun86649_ip) {
            case 0:
                var2 = _closure1_slot5;
                var1 = var2.useState;
                var0 = function() { // Environment: var8
                    _fun86650: for (var _fun86650_ip = 0;;) switch (_fun86650_ip) {
                        case 0:
                            var1 = _closure1_slot8;
                            var0 = var1.getSurveyOverride;
                            var1 = var0.bind(var1)();
                            var0 = null;
                            var2 = var0 != var1;
                            if (!var2) {
                                _fun86650_ip = 31;
                                continue _fun86650
                            }
                        case 28:
                            var0 = var1;
                        case 31:
                            return var0;
                    }
                };
                var2 = var1.bind(var2)(var0);
                var1 = _closure1_slot4;
                var3 = undefined;
                var0 = 2;
                var1 = var1.bind(var3)(var2, var0);
                var0 = 0;
                var11 = var1[var0];
                var _closure2_slot0 = var11;
                var0 = 1;
                var12 = var1[var0];
                var2 = _closure1_slot10;
                var6 = _closure1_slot0;
                var9 = _closure1_slot3;
                var0 = 10;
                var0 = var9[var0];
                var0 = var6.bind(var3)(var0);
                var1 = var0.ActionSheet;
                var0 = {};
                var4 = _closure1_slot14;
                var0.header = var4;
                var10 = _closure1_slot9;
                var4 = 13;
                var4 = var9[var4];
                var4 = var6.bind(var3)(var4);
                var7 = var4.TextInput;
                var4 = {
                    'label': 'Survey Override',
                    'size': 'md',
                    'placeholder': 'Enter the ID of the Survey you want to test',
                    'onChange': null,
                    'isClearable': true
                };
                var4.onChange = var12;
                var7 = var10.bind(var3)(var7, var4);
                var4 = new Array(2);
                var4[0] = var7;
                var7 = _closure1_slot9;
                var5 = 14;
                var5 = var9[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.Button;
                var5 = {};
                var9 = '';
                var10 = var9 === var11;
                var9 = 'Fetch Survey';
                if (!var10) {
                    _fun86649_ip = 201;
                    continue _fun86649
                }
            case 195:
                var9 = 'Reset Survey Override';
            case 201:
                var5.text = var9;
                var9 = 'destructive';
                if (var10) {
                    _fun86649_ip = 234;
                    continue _fun86649
                }
            case 214:
                var10 = null;
                var11 = var10 == var11;
                var10 = 'primary';
                if (!var11) {
                    _fun86649_ip = 231;
                    continue _fun86649
                }
            case 227:
                var10 = 'secondary';
            case 231:
                var9 = var10;
            case 234:
                var5.variant = var9;
                var8 = function() {
                    _fun86651: for (var _fun86651_ip = 0;;) switch (_fun86651_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var1 = '';
                            if (!(var1 !== var2)) {
                                _fun86651_ip = 57;
                                continue _fun86651
                            }
                        case 15:
                            var3 = _closure1_slot2;
                            var2 = _closure1_slot3;
                            var1 = 15;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            var1 = var2.overrideSurvey;
                            var0 = _closure2_slot0;
                            var0 = var1.bind(var2)(var0);
                            _fun86651_ip = 95;
                            continue _fun86651;
                        case 57:
                            var2 = _closure1_slot2;
                            var1 = _closure1_slot3;
                            var0 = 15;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.overrideSurvey;
                            var0 = null;
                            var0 = var1.bind(var2)(var0);
                        case 95:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot3;
                            var0 = 16;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.hideActionSheet;
                            var1 = 'SurveyOverrideActionSheet';
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var5.onPress = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot19 = var0;
    var0 = function() {
        var3 = _closure1_slot9;
        var5 = _closure1_slot0;
        var7 = _closure1_slot3;
        var0 = 10;
        var0 = var7[var0];
        var2 = undefined;
        var0 = var5.bind(var2)(var0);
        var1 = var0.ActionSheet;
        var0 = {};
        var4 = _closure1_slot15;
        var0.header = var4;
        var6 = _closure1_slot9;
        var4 = 21;
        var4 = var7[var4];
        var4 = var5.bind(var2)(var4);
        var5 = var4.Text;
        var4 = {};
        var7 = 'text-md/semibold';
        var4.variant = var7;
        var7 = global;
        var11 = var7.JSON;
        var10 = var11.stringify;
        var9 = _closure1_slot7;
        var8 = var9.getStateForDebugging;
        var9 = var8.bind(var9)();
        var8 = '\t';
        var9 = var10.bind(var11)(var9, var2, var8);
        var7 = var7.HermesInternal;
        var8 = var7.concat;
        var7 = '';
        var7 = var8.bind(var7)(var9);
        var4.children = var7;
        var4 = var6.bind(var2)(var5, var4);
        var0.children = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var _closure1_slot20 = var0;
    var0 = function() {
        _fun86657: for (var _fun86657_ip = 0;;) switch (_fun86657_ip) {
            case 0:
                var2 = _closure1_slot5;
                var1 = var2.useState;
                var0 = function() { // Environment: var8
                    var1 = _closure1_slot7;
                    var0 = var1.overrideId;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var2 = var1.bind(var2)(var0);
                var1 = _closure1_slot4;
                var3 = undefined;
                var0 = 2;
                var1 = var1.bind(var3)(var2, var0);
                var0 = 0;
                var11 = var1[var0];
                var _closure2_slot0 = var11;
                var0 = 1;
                var12 = var1[var0];
                var2 = _closure1_slot10;
                var6 = _closure1_slot0;
                var9 = _closure1_slot3;
                var0 = 10;
                var0 = var9[var0];
                var0 = var6.bind(var3)(var0);
                var1 = var0.ActionSheet;
                var0 = {};
                var4 = _closure1_slot16;
                var0.header = var4;
                var10 = _closure1_slot9;
                var4 = 13;
                var4 = var9[var4];
                var4 = var6.bind(var3)(var4);
                var7 = var4.TextInput;
                var4 = {
                    'label': 'Changelog Override',
                    'size': 'md',
                    'placeholder': 'Enter the ID of the changelog you want to test',
                    'onChange': null,
                    'isClearable': true
                };
                var4.onChange = var12;
                var7 = var10.bind(var3)(var7, var4);
                var4 = new Array(2);
                var4[0] = var7;
                var7 = _closure1_slot9;
                var5 = 14;
                var5 = var9[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.Button;
                var5 = {};
                var9 = '';
                var10 = var9 === var11;
                var9 = 'Fetch Changelog';
                if (!var10) {
                    _fun86657_ip = 201;
                    continue _fun86657
                }
            case 195:
                var9 = 'Reset Changelog Override';
            case 201:
                var5.text = var9;
                var9 = 'destructive';
                if (var10) {
                    _fun86657_ip = 234;
                    continue _fun86657
                }
            case 214:
                var10 = null;
                var11 = var10 == var11;
                var10 = 'primary';
                if (!var11) {
                    _fun86657_ip = 231;
                    continue _fun86657
                }
            case 227:
                var10 = 'secondary';
            case 231:
                var9 = var10;
            case 234:
                var5.variant = var9;
                var8 = function() {
                    _fun86659: for (var _fun86659_ip = 0;;) switch (_fun86659_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var1 = '';
                            if (!(var1 !== var2)) {
                                _fun86659_ip = 57;
                                continue _fun86659
                            }
                        case 15:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot3;
                            var1 = 22;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            var1 = var2.setChangelogOverride;
                            var0 = _closure2_slot0;
                            var0 = var1.bind(var2)(var0);
                            _fun86659_ip = 95;
                            continue _fun86659;
                        case 57:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot3;
                            var0 = 22;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.setChangelogOverride;
                            var0 = null;
                            var0 = var1.bind(var2)(var0);
                        case 95:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot3;
                            var0 = 16;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.hideActionSheet;
                            var1 = 'ChangelogOverrideActionSheet';
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var5.onPress = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
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
    var3 = var13.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var5[var3];
    var6 = var6.bind(var0)(var3);
    var _closure1_slot5 = var6;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ScrollView;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var13.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var13.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var12 = var3.jsx;
    var _closure1_slot9 = var12;
    var8 = var3.jsxs;
    var _closure1_slot10 = var8;
    var3 = 6;
    var3 = var5[var3];
    var9 = var4.bind(var0)(var3);
    var7 = var9.createStyles;
    var3 = {};
    var10 = {};
    var11 = 7;
    var14 = var5[var11];
    var14 = var13.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_16;
    var10.padding = var14;
    var11 = var5[var11];
    var11 = var13.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_BASE_LOW;
    var10.backgroundColor = var11;
    var3.scrollView = var10;
    var3 = var7.bind(var9)(var3);
    var _closure1_slot11 = var3;
    var3 = 8;
    var7 = var5[var3];
    var7 = var4.bind(var0)(var7);
    var9 = var7.BottomSheetTitleHeader;
    var7 = {};
    var10 = 'Last Survey Data';
    var7.title = var10;
    var7 = var12.bind(var0)(var9, var7);
    var _closure1_slot12 = var7;
    var7 = 9;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var9 = var7.CopyIcon;
    var7 = {};
    var7 = var12.bind(var0)(var9, var7);
    var _closure1_slot13 = var7;
    var7 = var5[var3];
    var7 = var4.bind(var0)(var7);
    var9 = var7.BottomSheetTitleHeader;
    var7 = {};
    var10 = 'Survey Override';
    var7.title = var10;
    var7 = var12.bind(var0)(var9, var7);
    var _closure1_slot14 = var7;
    var7 = var5[var3];
    var7 = var4.bind(var0)(var7);
    var9 = var7.BottomSheetTitleHeader;
    var7 = {};
    var10 = 'Changelog Debugging';
    var7.title = var10;
    var7 = var12.bind(var0)(var9, var7);
    var _closure1_slot15 = var7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.BottomSheetTitleHeader;
    var3 = {};
    var9 = 'Changelog Override';
    var3.title = var9;
    var3 = var12.bind(var0)(var7, var3);
    var _closure1_slot16 = var3;
    var3 = 23;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.Stack;
    var3 = {};
    var9 = 16;
    var3.spacing = var9;
    var10 = function() {
        _fun86652: for (var _fun86652_ip = 0;;) switch (_fun86652_ip) {
            case 0:
                var6 = _closure1_slot0;
                var8 = _closure1_slot3;
                var0 = 17;
                var0 = var8[var0];
                var3 = undefined;
                var4 = var6.bind(var3)(var0);
                var2 = var4.useStateFromStores;
                var0 = _closure1_slot8;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var9
                    var1 = _closure1_slot8;
                    var0 = var1.getCurrentSurvey;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var1 = var2.bind(var4)(var1, var0);
                var2 = _closure1_slot1;
                var0 = 18;
                var0 = var8[var0];
                var0 = var2.bind(var3)(var0);
                var10 = var0.bind(var3)(var1);
                var _closure2_slot0 = var10;
                var2 = _closure1_slot10;
                var0 = 19;
                var0 = var8[var0];
                var0 = var6.bind(var3)(var0);
                var1 = var0.TableRowGroup;
                var0 = {};
                var4 = 'Surveys';
                var0.title = var4;
                var12 = _closure1_slot9;
                var5 = 20;
                var4 = var8[var5];
                var4 = var6.bind(var3)(var4);
                var11 = var4.TableRow;
                var4 = {
                    'label': 'Survey override',
                    'subLabel': 'Force a survey to be shown.',
                    'arrow': true
                };
                var13 = function() {
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot3;
                    var0 = 16;
                    var1 = var1[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.openLazy;
                    var1 = global;
                    var5 = var1.Promise;
                    var2 = var5.resolve;
                    var1 = {};
                    var6 = _closure1_slot19;
                    var1.default = var6;
                    var2 = var2.bind(var5)(var1);
                    var1 = 'SurveyOverrideActionSheet';
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var4.onPress = var13;
                var11 = var12.bind(var3)(var11, var4);
                var4 = new Array(2);
                var4[0] = var11;
                var7 = _closure1_slot9;
                var5 = var8[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.TableRow;
                var5 = {};
                var8 = 'Previous survey data';
                var5.label = var8;
                var8 = null;
                var12 = var8 == var10;
                var11 = undefined;
                if (!var12) {
                    _fun86652_ip = 225;
                    continue _fun86652
                }
            case 219:
                var11 = 'No survey data';
            case 225:
                var5.subLabel = var11;
                var11 = var8 != var10;
                var5.arrow = var11;
                var10 = var8 != var10;
                var8 = undefined;
                if (!var10) {
                    _fun86652_ip = 255;
                    continue _fun86652
                }
            case 248:
                var8 = function() { // Environment: var9
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot3;
                    var0 = 16;
                    var1 = var1[var0];
                    var0 = undefined;
                    var5 = var2.bind(var0)(var1);
                    var4 = var5.openLazy;
                    var1 = global;
                    var3 = var1.Promise;
                    var2 = var3.resolve;
                    var1 = {};
                    var6 = _closure1_slot18;
                    var1.default = var6;
                    var3 = var2.bind(var3)(var1);
                    var2 = {};
                    var1 = _closure2_slot0;
                    var2.survey = var1;
                    var1 = 'SurveyOverrideInfoActionSheet';
                    var1 = var4.bind(var5)(var3, var1, var2);
                    return var0;
                };
            case 255:
                var5.onPress = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var9 = {};
    var10 = var12.bind(var0)(var10, var9);
    var9 = new Array(2);
    var9[0] = var10;
    var11 = function() {
        var3 = _closure1_slot10;
        var6 = _closure1_slot0;
        var9 = _closure1_slot3;
        var0 = 19;
        var0 = var9[var0];
        var2 = undefined;
        var0 = var6.bind(var2)(var0);
        var1 = var0.TableRowGroup;
        var0 = {};
        var4 = 'Changelog';
        var0.title = var4;
        var11 = _closure1_slot9;
        var5 = 20;
        var4 = var9[var5];
        var4 = var6.bind(var2)(var4);
        var10 = var4.TableRow;
        var4 = {
            'label': 'Changelog override',
            'subLabel': 'Force a changelog to be shown.',
            'arrow': true
        };
        var12 = function() {
            var2 = _closure1_slot1;
            var1 = _closure1_slot3;
            var0 = 16;
            var1 = var1[var0];
            var0 = undefined;
            var4 = var2.bind(var0)(var1);
            var3 = var4.openLazy;
            var1 = global;
            var5 = var1.Promise;
            var2 = var5.resolve;
            var1 = {};
            var6 = _closure1_slot21;
            var1.default = var6;
            var2 = var2.bind(var5)(var1);
            var1 = 'ChangelogOverrideActionSheet';
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var4.onPress = var12;
        var10 = var11.bind(var2)(var10, var4);
        var4 = new Array(2);
        var4[0] = var10;
        var7 = _closure1_slot9;
        var5 = var9[var5];
        var5 = var6.bind(var2)(var5);
        var6 = var5.TableRow;
        var5 = {
            'label': 'Changelog debugging',
            'arrow': true
        };
        var8 = function() {
            var2 = _closure1_slot1;
            var1 = _closure1_slot3;
            var0 = 16;
            var1 = var1[var0];
            var0 = undefined;
            var4 = var2.bind(var0)(var1);
            var3 = var4.openLazy;
            var1 = global;
            var5 = var1.Promise;
            var2 = var5.resolve;
            var1 = {};
            var6 = _closure1_slot20;
            var1.default = var6;
            var2 = var2.bind(var5)(var1);
            var1 = 'ChangelogOverrideDebuggingActionSheet';
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var5.onPress = var8;
        var5 = var7.bind(var2)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var10 = {};
    var10 = var12.bind(var0)(var11, var10);
    var9[1] = var10;
    var3.children = var9;
    var3 = var8.bind(var0)(var7, var3);
    var _closure1_slot17 = var3;
    var3 = var6.memo;
    var1 = function() {
        var0 = _closure1_slot11;
        var3 = undefined;
        var5 = var0.bind(var3)();
        var2 = _closure1_slot9;
        var1 = _closure1_slot6;
        var0 = {};
        var5 = var5.scrollView;
        var0.style = var5;
        var4 = _closure1_slot17;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var1 = var3.bind(var6)(var1);
    var3 = 24;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/changelog/UserSettingsSurveyChangelogOverride.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 3943, 11146, 33, 1297, 671, 5237, 3259, 5232, 5342, 5321, 5464, 4090, 11147, 3279, 566, 5335, 5343, 4876, 3938, 6876, 4086, 2]);