// modules/user_settings/native/changelog/UserSettingsSurveyChangelogOverride.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var6 = metroImportAll;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var _closure1_slot3 = var5;
    var0 = function(arg0) { // Original name: SurveyOverrideInfoActionSheet, environment: var1
        var0 = arg0;
        var9 = var0.survey;
        var3 = _closure1_slot9;
        var5 = _closure1_slot0;
        var7 = _closure1_slot3;
        var0 = 8;
        var0 = var7[var0];
        var2 = undefined;
        var0 = var5.bind(var2)(var0);
        var1 = var0.ActionSheet;
        var0 = {};
        var10 = _closure1_slot9;
        var6 = 9;
        var6 = var7[var6];
        var6 = var5.bind(var2)(var6);
        var8 = var6.BottomSheetTitleHeader;
        var6 = {};
        var11 = 'Last Survey Data';
        var6.title = var11;
        var6 = var10.bind(var2)(var8, var6);
        var0.header = var6;
        var6 = _closure1_slot9;
        var4 = 10;
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
            _fun87426: for (var _fun87426_ip = 0;;) switch (_fun87426_ip) {
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
                        _fun87426_ip = 29;
                        continue _fun87426
                    }
                case 26:
                    var3 = var6;
                case 29:
                    var10 = undefined;
                    if (var1) {
                        _fun87426_ip = 59;
                        continue _fun87426
                    }
                case 34:
                    var6 = var2().value;
                    var2 = var0;
                    var2 = var2 === var4;
                    var10 = undefined;
                    var1 = var2;
                    if (var2) {
                        _fun87426_ip = 59;
                        continue _fun87426
                    }
                case 53:
                    var10 = var6;
                    var1 = var2;
                case 59:
                    var _closure3_slot0 = var10;
                    if (var1) {
                        _fun87426_ip = 69;
                        continue _fun87426
                    }
                case 66:
                    var0.return();
                case 69:
                    var2 = _closure1_slot9;
                    var1 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var0 = 10;
                    var0 = var7[var0];
                    var0 = var1.bind(var4)(var0);
                    var1 = var0.ActionSheetRow;
                    var0 = {};
                    var0.label = var3;
                    var7 = null;
                    var8 = var7 != var10;
                    var7 = 'null';
                    if (!var8) {
                        _fun87426_ip = 140;
                        continue _fun87426
                    }
                case 121:
                    var8 = global;
                    var9 = var8.JSON;
                    var8 = var9.stringify;
                    var7 = var8.bind(var9)(var10);
                case 140:
                    var0.subLabel = var7;
                    var8 = _closure1_slot9;
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var6 = 11;
                    var6 = var9[var6];
                    var6 = var7.bind(var4)(var6);
                    var7 = var6.CopyIcon;
                    var6 = {};
                    var6 = var8.bind(var4)(var7, var6);
                    var0.icon = var6;
                    var5 = function() { // Original name: onPress, environment: var5
                        _fun87427: for (var _fun87427_ip = 0;;) switch (_fun87427_ip) {
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
                                    _fun87427_ip = 74;
                                    continue _fun87427
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
    var _closure1_slot12 = var0;
    var0 = function() { // Original name: SurveyOverrideActionSheet, environment: var1
        _fun87428: for (var _fun87428_ip = 0;;) switch (_fun87428_ip) {
            case 0:
                var2 = _closure1_slot5;
                var1 = var2.useState;
                var0 = function() { // Environment: var8
                    _fun87429: for (var _fun87429_ip = 0;;) switch (_fun87429_ip) {
                        case 0:
                            var1 = _closure1_slot8;
                            var0 = var1.getSurveyOverride;
                            var1 = var0.bind(var1)();
                            var0 = null;
                            var2 = var0 != var1;
                            if (!var2) {
                                _fun87429_ip = 31;
                                continue _fun87429
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
                var0 = 8;
                var0 = var9[var0];
                var0 = var6.bind(var3)(var0);
                var1 = var0.ActionSheet;
                var0 = {};
                var10 = _closure1_slot9;
                var4 = 9;
                var4 = var9[var4];
                var4 = var6.bind(var3)(var4);
                var7 = var4.BottomSheetTitleHeader;
                var4 = {};
                var13 = 'Survey Override';
                var4.title = var13;
                var4 = var10.bind(var3)(var7, var4);
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
                    _fun87428_ip = 237;
                    continue _fun87428
                }
            case 231:
                var9 = 'Reset Survey Override';
            case 237:
                var5.text = var9;
                var9 = 'destructive';
                if (var10) {
                    _fun87428_ip = 270;
                    continue _fun87428
                }
            case 250:
                var10 = null;
                var11 = var10 == var11;
                var10 = 'primary';
                if (!var11) {
                    _fun87428_ip = 267;
                    continue _fun87428
                }
            case 263:
                var10 = 'secondary';
            case 267:
                var9 = var10;
            case 270:
                var5.variant = var9;
                var8 = function() { // Original name: onPress, environment: var8
                    _fun87430: for (var _fun87430_ip = 0;;) switch (_fun87430_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var1 = '';
                            if (!(var1 !== var2)) {
                                _fun87430_ip = 57;
                                continue _fun87430
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
                            _fun87430_ip = 95;
                            continue _fun87430;
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
    var _closure1_slot13 = var0;
    var0 = function() { // Original name: SurveyInfo, environment: var1
        _fun87431: for (var _fun87431_ip = 0;;) switch (_fun87431_ip) {
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
                var13 = function() { // Original name: onPress, environment: var9
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
                    var6 = _closure1_slot13;
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
                    _fun87431_ip = 225;
                    continue _fun87431
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
                    _fun87431_ip = 255;
                    continue _fun87431
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
                    var6 = _closure1_slot12;
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
    var _closure1_slot14 = var0;
    var0 = function() { // Original name: ChangelogOverrideDebuggingActionSheet, environment: var1
        var3 = _closure1_slot9;
        var5 = _closure1_slot0;
        var7 = _closure1_slot3;
        var0 = 8;
        var0 = var7[var0];
        var2 = undefined;
        var0 = var5.bind(var2)(var0);
        var1 = var0.ActionSheet;
        var0 = {};
        var9 = _closure1_slot9;
        var4 = 9;
        var4 = var7[var4];
        var4 = var5.bind(var2)(var4);
        var6 = var4.BottomSheetTitleHeader;
        var4 = {};
        var10 = 'Changelog Debugging';
        var4.title = var10;
        var4 = var9.bind(var2)(var6, var4);
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
    var _closure1_slot15 = var0;
    var0 = function() { // Original name: ChangelogOverrideActionSheet, environment: var1
        _fun87436: for (var _fun87436_ip = 0;;) switch (_fun87436_ip) {
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
                var0 = 8;
                var0 = var9[var0];
                var0 = var6.bind(var3)(var0);
                var1 = var0.ActionSheet;
                var0 = {};
                var10 = _closure1_slot9;
                var4 = 9;
                var4 = var9[var4];
                var4 = var6.bind(var3)(var4);
                var7 = var4.BottomSheetTitleHeader;
                var4 = {};
                var13 = 'Changelog Override';
                var4.title = var13;
                var4 = var10.bind(var3)(var7, var4);
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
                    _fun87436_ip = 237;
                    continue _fun87436
                }
            case 231:
                var9 = 'Reset Changelog Override';
            case 237:
                var5.text = var9;
                var9 = 'destructive';
                if (var10) {
                    _fun87436_ip = 270;
                    continue _fun87436
                }
            case 250:
                var10 = null;
                var11 = var10 == var11;
                var10 = 'primary';
                if (!var11) {
                    _fun87436_ip = 267;
                    continue _fun87436
                }
            case 263:
                var10 = 'secondary';
            case 267:
                var9 = var10;
            case 270:
                var5.variant = var9;
                var8 = function() { // Original name: onPress, environment: var8
                    _fun87438: for (var _fun87438_ip = 0;;) switch (_fun87438_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var1 = '';
                            if (!(var1 !== var2)) {
                                _fun87438_ip = 57;
                                continue _fun87438
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
                            _fun87438_ip = 95;
                            continue _fun87438;
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
    var _closure1_slot16 = var0;
    var0 = function() { // Original name: ChangelogInfo, environment: var1
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
        var12 = function() { // Original name: onPress, environment: var8
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
            var6 = _closure1_slot16;
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
        var8 = function() { // Original name: onPress, environment: var8
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
            var6 = _closure1_slot15;
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
    var _closure1_slot17 = var0;
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
    var3 = var11.bind(var0)(var3);
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
    var3 = var11.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot9 = var7;
    var3 = var3.jsxs;
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {};
    var10 = 7;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var9.padding = var12;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_BASE_LOW;
    var9.backgroundColor = var10;
    var3.scrollView = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot11 = var3;
    var3 = var6.memo;
    var1 = function() { // Original name: UserSettingsSurveyChangelogOverride, environment: var1
        var0 = _closure1_slot11;
        var3 = undefined;
        var4 = var0.bind(var3)();
        var2 = _closure1_slot9;
        var1 = _closure1_slot6;
        var0 = {};
        var4 = var4.scrollView;
        var0.style = var4;
        var6 = _closure1_slot10;
        var5 = _closure1_slot0;
        var7 = _closure1_slot3;
        var4 = 23;
        var4 = var7[var4];
        var4 = var5.bind(var3)(var4);
        var5 = var4.Stack;
        var4 = {};
        var7 = 16;
        var4.spacing = var7;
        var10 = _closure1_slot9;
        var9 = _closure1_slot14;
        var7 = {};
        var9 = var10.bind(var3)(var9, var7);
        var7 = new Array(2);
        var7[0] = var9;
        var10 = _closure1_slot9;
        var9 = _closure1_slot17;
        var8 = {};
        var8 = var10.bind(var3)(var9, var8);
        var7[1] = var8;
        var4.children = var7;
        var4 = var6.bind(var3)(var5, var4);
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 3906, 11190, 33, 1297, 671, 5170, 5173, 7695, 3217, 5252, 5362, 4043, 11191, 3237, 566, 5267, 5324, 4860, 3901, 6737, 4039, 2]);