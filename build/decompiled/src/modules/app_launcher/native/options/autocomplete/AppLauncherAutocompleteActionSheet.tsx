// modules/app_launcher/native/options/autocomplete/AppLauncherAutocompleteActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
    var0 = function(arg0) { // Original name: Item, environment: var1
        _fun108774: for (var _fun108774_ip = 0;;) switch (_fun108774_ip) {
            case 0:
                var1 = arg0;
                var3 = var1.item;
                var2 = var1.index;
                var _closure2_slot0 = var2;
                var2 = var1.choices;
                var _closure2_slot1 = var2;
                var1 = var1.onChoiceSelect;
                var _closure2_slot2 = var1;
                var5 = undefined;
                var _closure2_slot3 = var5;
                var _closure2_slot4 = var5;
                var _closure2_slot5 = var5;
                var2 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 17;
                var1 = var6[var1];
                var6 = var2.bind(var5)(var1);
                var2 = var3.type;
                var1 = _closure1_slot8;
                var1 = var1.CHOICE;
                var2 = var2 === var1;
                if (var2) {
                    _fun108774_ip = 117;
                    continue _fun108774
                }
            case 98:
                var7 = var3.type;
                var1 = _closure1_slot8;
                var1 = var1.CHOICE_LOADING;
                var2 = var7 === var1;
            case 117:
                if (var2) {
                    _fun108774_ip = 139;
                    continue _fun108774
                }
            case 120:
                var7 = var3.type;
                var1 = _closure1_slot8;
                var1 = var1.LABEL;
                var2 = var7 === var1;
            case 139:
                var1 = 'Invalid autocomplete result type';
                var1 = var6.bind(var5)(var2, var1);
                var1 = _closure1_slot12;
                var1 = var1.bind(var5)();
                _closure2_slot3 = var1;
                var7 = _closure1_slot4;
                var6 = var7.useMemo;
                var2 = function() { // Environment: var0
                    var0 = global;
                    var1 = var0.Math;
                    var0 = var1.random;
                    var1 = var0.bind(var1)();
                    var0 = 100;
                    var1 = var0 * var1;
                    var0 = 50;
                    var0 = var1 + var0;
                    return var0;
                };
                var1 = new Array(0);
                var1 = var6.bind(var7)(var2, var1);
                _closure2_slot4 = var1;
                var1 = function(arg0) { // Original name: ListItem, environment: var0
                    var0 = arg0;
                    var5 = var0.label;
                    var4 = var0.onPress;
                    var3 = _closure1_slot9;
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 18;
                    var0 = var2[var0];
                    var2 = undefined;
                    var0 = var1.bind(var2)(var0);
                    var1 = var0.TableRow;
                    var0 = {};
                    var0.label = var5;
                    var0.onPress = var4;
                    var5 = _closure2_slot0;
                    var6 = 0;
                    var6 = var6 === var5;
                    var0.start = var6;
                    var4 = _closure2_slot1;
                    var6 = var4.length;
                    var4 = 1;
                    var4 = var6 - var4;
                    var4 = var5 === var4;
                    var0.end = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                _closure2_slot5 = var1;
                var2 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 19;
                var1 = var6[var1];
                var2 = var2.bind(var5)(var1);
                var1 = var2.match;
                var5 = var1.bind(var2)(var3);
                var3 = var5.with;
                var2 = {};
                var1 = _closure1_slot8;
                var1 = var1.CHOICE;
                var2.type = var1;
                var1 = function(arg0) { // Environment: var0
                    var7 = arg0;
                    var _closure3_slot0 = var7;
                    var3 = _closure1_slot9;
                    var2 = _closure2_slot5;
                    var1 = {};
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var0 = 20;
                    var5 = var5[var0];
                    var0 = undefined;
                    var5 = var6.bind(var0)(var5);
                    var6 = var5.Text;
                    var5 = {
                        'lineClamp': 1,
                        'variant': 'text-md/normal',
                        'color': 'mobile-text-heading-primary'
                    };
                    var7 = var7.choice;
                    var7 = var7.displayName;
                    var5.children = var7;
                    var5 = var3.bind(var0)(var6, var5);
                    var1.label = var5;
                    var4 = function() { // Original name: onPress, environment: var4
                        _fun108778: for (var _fun108778_ip = 0;;) switch (_fun108778_ip) {
                            case 0:
                                var2 = _closure2_slot2;
                                var1 = null;
                                if (!(var1 != var2)) {
                                    _fun108778_ip = 37;
                                    continue _fun108778
                                }
                            case 13:
                                var2 = _closure2_slot2;
                                var0 = _closure3_slot0;
                                var1 = var0.choice;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                            case 37:
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var0 = 13;
                                var1 = var1[var0];
                                var0 = undefined;
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.hideActionSheet;
                                var1 = var1.bind(var2)();
                                return var0;
                        }
                    };
                    var1.onPress = var4;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var5 = var3.bind(var5)(var2, var1);
                var3 = var5.with;
                var2 = {};
                var1 = _closure1_slot8;
                var1 = var1.LABEL;
                var2.type = var1;
                var1 = function(arg0) { // Environment: var0
                    var8 = arg0;
                    var _closure3_slot0 = var8;
                    var3 = _closure1_slot9;
                    var2 = _closure2_slot5;
                    var1 = {};
                    var7 = _closure1_slot10;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var0 = 20;
                    var5 = var5[var0];
                    var0 = undefined;
                    var5 = var6.bind(var0)(var5);
                    var6 = var5.Text;
                    var5 = {
                        'lineClamp': 1,
                        'variant': 'text-md/normal',
                        'color': 'mobile-text-heading-primary'
                    };
                    var9 = var8.label;
                    var8 = ['"'];
                    var8[1] = var9;
                    var9 = '"';
                    var8[2] = var9;
                    var5.children = var8;
                    var5 = var7.bind(var0)(var6, var5);
                    var1.label = var5;
                    var4 = function() { // Original name: onPress, environment: var4
                        _fun108780: for (var _fun108780_ip = 0;;) switch (_fun108780_ip) {
                            case 0:
                                var2 = _closure2_slot2;
                                var1 = null;
                                if (!(var1 != var2)) {
                                    _fun108780_ip = 60;
                                    continue _fun108780
                                }
                            case 13:
                                var2 = _closure2_slot2;
                                var1 = {};
                                var0 = _closure3_slot0;
                                var3 = var0.label;
                                var1.name = var3;
                                var3 = var0.label;
                                var1.value = var3;
                                var0 = var0.label;
                                var1.displayName = var0;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                            case 60:
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var0 = 13;
                                var1 = var1[var0];
                                var0 = undefined;
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.hideActionSheet;
                                var1 = var1.bind(var2)();
                                return var0;
                        }
                    };
                    var1.onPress = var4;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var3 = var3.bind(var5)(var2, var1);
                var2 = var3.with;
                var1 = {};
                var4 = _closure1_slot8;
                var4 = var4.CHOICE_LOADING;
                var1.type = var4;
                var0 = function() { // Environment: var0
                    var3 = _closure1_slot9;
                    var2 = _closure2_slot5;
                    var1 = {};
                    var5 = _closure1_slot5;
                    var4 = {};
                    var6 = _closure2_slot3;
                    var6 = var6.commandChoiceLoadingContainer;
                    var4.style = var6;
                    var8 = _closure1_slot9;
                    var7 = _closure1_slot5;
                    var6 = {};
                    var0 = _closure2_slot3;
                    var9 = var0.commandChoiceLoadingItem;
                    var0 = new Array(2);
                    var0[0] = var9;
                    var9 = {};
                    var10 = _closure2_slot4;
                    var9.width = var10;
                    var0[1] = var9;
                    var6.style = var0;
                    var0 = undefined;
                    var6 = var8.bind(var0)(var7, var6);
                    var4.children = var6;
                    var4 = var3.bind(var0)(var5, var4);
                    var1.label = var4;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var1 = var2.bind(var3)(var1, var0);
                var0 = var1.exhaustive;
                var0 = var0.bind(var1)();
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var0 = function() { // Original name: AutocompleteFailedEmptyState, environment: var1
        var0 = _closure1_slot12;
        var3 = undefined;
        var5 = var0.bind(var3)();
        var2 = _closure1_slot9;
        var6 = _closure1_slot1;
        var8 = _closure1_slot2;
        var0 = 21;
        var0 = var8[var0];
        var1 = var6.bind(var3)(var0);
        var0 = {};
        var5 = var5.emptyState;
        var0.style = var5;
        var5 = 22;
        var7 = var8[var5];
        var7 = var6.bind(var3)(var7);
        var0.lightSource = var7;
        var5 = var8[var5];
        var5 = var6.bind(var3)(var5);
        var0.darkSource = var5;
        var7 = _closure1_slot0;
        var4 = 16;
        var5 = var8[var4];
        var5 = var7.bind(var3)(var5);
        var6 = var5.intl;
        var5 = var6.string;
        var4 = var8[var4];
        var4 = var7.bind(var3)(var4);
        var4 = var4.t;
        var4 = var4.rTAbPn;
        var4 = var5.bind(var6)(var4);
        var0.title = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot14 = var0;
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
    var3 = var10.bind(var0)(var3);
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
    var3 = var10.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AutoCompleteResultTypes;
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var9 = var3.AUTOCOMPLETE_OPTION_DEBOUNCE_TIME;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot9 = var6;
    var3 = var3.jsxs;
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var5[var3];
    var8 = var10.bind(var0)(var3);
    var7 = var8.debounce;
    var3 = 9;
    var3 = var5[var3];
    var6 = var10.bind(var0)(var3);
    var3 = {
        'leading': true,
        'trailing': true
    };
    var3 = var7.bind(var8)(var6, var9, var3);
    var _closure1_slot11 = var3;
    var3 = 10;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'flex': 1,
        'justifyContent': 'center'
    };
    var3.commandChoiceLoadingContainer = var8;
    var8 = {};
    var9 = 11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_MOD_MUTED;
    var8.backgroundColor = var11;
    var11 = 16;
    var8.height = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.radii;
    var9 = var9.lg;
    var8.borderRadius = var9;
    var9 = 'flex-start';
    var8.alignSelf = var9;
    var3.commandChoiceLoadingItem = var8;
    var8 = {};
    var9 = 'transparent';
    var8.backgroundColor = var9;
    var3.emptyState = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot12 = var3;
    var3 = 23;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_launcher/native/options/autocomplete/AppLauncherAutocompleteActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: AppLauncherAutocompleteActionSheet, environment: var1
        _fun108783: for (var _fun108783_ip = 0;;) switch (_fun108783_ip) {
            case 0:
                var1 = arg0;
                var8 = var1.option;
                var _closure2_slot0 = var8;
                var0 = var1.initChoice;
                var15 = var1.onChoiceSelect;
                var _closure2_slot1 = var15;
                var4 = var1.onDismissAutocompleteSheet;
                var17 = var1.channel;
                var _closure2_slot2 = var17;
                var16 = var1.activeCommand;
                var _closure2_slot3 = var16;
                var1 = var1.optionValues;
                var _closure2_slot4 = var1;
                var3 = undefined;
                var _closure2_slot5 = var3;
                var _closure2_slot6 = var3;
                var _closure2_slot7 = var3;
                var _closure2_slot8 = var3;
                var _closure2_slot9 = var3;
                var5 = _closure1_slot4;
                var2 = var5.useState;
                var9 = null;
                var10 = var9 == var0;
                var7 = undefined;
                if (var10) {
                    _fun108783_ip = 116;
                    continue _fun108783
                }
            case 111:
                var7 = var0.name;
            case 116:
                var10 = var9 != var7;
                var0 = '';
                if (!var10) {
                    _fun108783_ip = 130;
                    continue _fun108783
                }
            case 127:
                var0 = var7;
            case 130:
                var5 = var2.bind(var5)(var0);
                var2 = _closure1_slot3;
                var0 = 2;
                var5 = var2.bind(var3)(var5, var0);
                var7 = 0;
                var0 = var5[var7];
                _closure2_slot5 = var0;
                var2 = 1;
                var10 = var5[var2];
                var5 = _closure1_slot4;
                var2 = var5.useRef;
                var14 = var2.bind(var5)(var9);
                _closure2_slot6 = var14;
                var5 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 12;
                var2 = var9[var2];
                var12 = var5.bind(var3)(var2);
                var11 = var12.useStateFromStoresObject;
                var2 = _closure1_slot6;
                var9 = new Array(1);
                var9[0] = var2;
                var2 = var17.id;
                var5 = new Array(3);
                var5[0] = var2;
                var2 = var8.name;
                var5[1] = var2;
                var5[2] = var0;
                var2 = function() { // Environment: var13
                    var0 = {};
                    var3 = _closure1_slot6;
                    var6 = var3.getAutocompleteChoices;
                    var1 = _closure2_slot2;
                    var5 = var1.id;
                    var4 = _closure2_slot0;
                    var4 = var4.name;
                    var2 = _closure2_slot5;
                    var2 = var6.bind(var3)(var5, var4, var2);
                    var0.autocompleteResults = var2;
                    var2 = var3.getLastErrored;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
                    var0.lastErrored = var1;
                    return var0;
                };
                var5 = var11.bind(var12)(var9, var2, var5);
                var2 = var5.autocompleteResults;
                _closure2_slot7 = var2;
                var5 = var5.lastErrored;
                _closure2_slot8 = var5;
                var12 = _closure1_slot4;
                var11 = var12.useMemo;
                var9 = new Array(3);
                var9[0] = var0;
                var9[1] = var2;
                var9[2] = var5;
                var2 = function() { // Environment: var13
                    _fun108785: for (var _fun108785_ip = 0;;) switch (_fun108785_ip) {
                        case 0:
                            var0 = new Array(0);
                            var3 = _closure2_slot5;
                            var2 = '';
                            if (!(var2 !== var3)) {
                                _fun108785_ip = 56;
                                continue _fun108785
                            }
                        case 19:
                            var3 = var0.push;
                            var2 = {};
                            var4 = _closure1_slot8;
                            var4 = var4.LABEL;
                            var2.type = var4;
                            var4 = _closure2_slot5;
                            var2.label = var4;
                            var2 = var3.bind(var0)(var2);
                        case 56:
                            var2 = _closure2_slot7;
                            var3 = null;
                            if (!(var3 == var2)) {
                                _fun108785_ip = 167;
                                continue _fun108785
                            }
                        case 66:
                            var2 = _closure2_slot8;
                            if (var2) {
                                _fun108785_ip = 167;
                                continue _fun108785
                            }
                        case 73:
                            var4 = var0.push;
                            var2 = global;
                            var6 = var2.Array;
                            var2 = var6.prototype;
                            var5 = Object.create(var2, {
                                constructor: {
                                    value: var6
                                }
                            });
                            var10 = 4;
                            var11 = var5;
                            var2 = new var11[var6](var10, var9);
                            var6 = var2 instanceof Object ? var2 : var5;
                            var5 = var6.fill;
                            var2 = {};
                            var7 = _closure1_slot8;
                            var7 = var7.CHOICE_LOADING;
                            var2.type = var7;
                            var9 = var5.bind(var6)(var2);
                            var2 = new Array(0);
                            var8 = 0;
                            var10 = var2;
                            var5 = arraySpread(var10, var9, var8);
                            var10 = var4;
                            var9 = var2;
                            var8 = var0;
                            var2 = apply(var10, var9, var8);
                            _fun108785_ip = 229;
                            continue _fun108785;
                        case 167:
                            var2 = _closure2_slot7;
                            if (!(var3 != var2)) {
                                _fun108785_ip = 229;
                                continue _fun108785
                            }
                        case 175:
                            var2 = var0.push;
                            var4 = _closure2_slot7;
                            var3 = var4.map;
                            var1 = function(arg0) { // Environment: var1
                                var0 = {};
                                var1 = _closure1_slot8;
                                var1 = var1.CHOICE;
                                var0.type = var1;
                                var1 = arg0;
                                var0.choice = var1;
                                return var0;
                            };
                            var9 = var3.bind(var4)(var1);
                            var1 = new Array(0);
                            var8 = 0;
                            var10 = var1;
                            var3 = arraySpread(var10, var9, var8);
                            var10 = var2;
                            var9 = var1;
                            var8 = var0;
                            var1 = apply(var10, var9, var8);
                        case 229:
                            return var0;
                    }
                };
                var12 = var11.bind(var12)(var2, var9);
                _closure2_slot9 = var12;
                var2 = var12.length;
                var7 = var7 === var2;
                if (!var7) {
                    _fun108783_ip = 338;
                    continue _fun108783
                }
            case 335:
                var7 = !var5;
            case 338:
                var11 = _closure1_slot4;
                var9 = var11.useEffect;
                var2 = new Array(5);
                var2[0] = var17;
                var17 = var8.name;
                var2[1] = var17;
                var2[2] = var16;
                var2[3] = var1;
                var2[4] = var0;
                var1 = function() { // Environment: var13
                    _fun108787: for (var _fun108787_ip = 0;;) switch (_fun108787_ip) {
                        case 0:
                            var4 = _closure1_slot7;
                            var3 = var4.getGuild;
                            var5 = _closure2_slot2;
                            var2 = var5.guild_id;
                            var4 = var3.bind(var4)(var2);
                            var3 = _closure1_slot11;
                            var2 = {};
                            var0 = _closure2_slot3;
                            var2.command = var0;
                            var0 = _closure2_slot4;
                            var2.optionValues = var0;
                            var0 = {};
                            var0.channel = var5;
                            var0.guild = var4;
                            var4 = {};
                            var5 = _closure2_slot0;
                            var5 = var5.name;
                            var4.name = var5;
                            var5 = _closure2_slot5;
                            var4.query = var5;
                            var0.autocomplete = var4;
                            var2.context = var0;
                            var0 = undefined;
                            var2 = var3.bind(var0)(var2);
                            var1 = _closure2_slot6;
                            var3 = var1.current;
                            var1 = null;
                            if (!(var1 != var3)) {
                                _fun108787_ip = 139;
                                continue _fun108787
                            }
                        case 118:
                            var2 = var3.scrollToOffset;
                            var1 = {
                                'offset': 0,
                                'animated': false
                            };
                            var1 = var2.bind(var3)(var1);
                        case 139:
                            return var0;
                    }
                };
                var1 = var9.bind(var11)(var1, var2);
                var11 = _closure1_slot4;
                var9 = var11.useCallback;
                var2 = new Array(2);
                var2[0] = var15;
                var2[1] = var12;
                var1 = function(arg0) { // Environment: var13
                    var0 = arg0;
                    var4 = var0.item;
                    var0 = var0.index;
                    var3 = _closure1_slot9;
                    var2 = _closure1_slot13;
                    var1 = {};
                    var1.item = var4;
                    var1.index = var0;
                    var4 = _closure2_slot1;
                    var1.onChoiceSelect = var4;
                    var0 = _closure2_slot9;
                    var1.choices = var0;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var11 = var9.bind(var11)(var1, var2);
                var9 = _closure1_slot4;
                var2 = var9.useCallback;
                var1 = new Array(2);
                var1[0] = var15;
                var1[1] = var0;
                var0 = function() { // Environment: var13
                    _fun108789: for (var _fun108789_ip = 0;;) switch (_fun108789_ip) {
                        case 0:
                            var2 = _closure2_slot5;
                            var1 = '';
                            if (!(var1 !== var2)) {
                                _fun108789_ip = 97;
                                continue _fun108789
                            }
                        case 15:
                            var2 = _closure2_slot1;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun108789_ip = 62;
                                continue _fun108789
                            }
                        case 25:
                            var2 = _closure2_slot1;
                            var1 = {};
                            var3 = _closure2_slot5;
                            var1.name = var3;
                            var3 = _closure2_slot5;
                            var1.value = var3;
                            var0 = _closure2_slot5;
                            var1.displayName = var0;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                        case 62:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 13;
                            var1 = var1[var0];
                            var0 = undefined;
                            var1 = var2.bind(var0)(var1);
                            var0 = var1.hideActionSheet;
                            var0 = var0.bind(var1)();
                        case 97:
                            var0 = undefined;
                            return var0;
                    }
                };
                var16 = var2.bind(var9)(var0, var1);
                var2 = _closure1_slot10;
                var20 = _closure1_slot0;
                var21 = _closure1_slot2;
                var0 = 14;
                var0 = var21[var0];
                var0 = var20.bind(var3)(var0);
                var1 = var0.AppLauncherCommandOptionActionSheet;
                var0 = {};
                var0.option = var8;
                var0.onDismiss = var4;
                var9 = _closure1_slot9;
                var15 = 15;
                var4 = var21[var15];
                var4 = var20.bind(var3)(var4);
                var8 = var4.AppLauncherListSearchBar;
                var4 = {};
                var17 = 16;
                var18 = var21[var17];
                var18 = var20.bind(var3)(var18);
                var19 = var18.intl;
                var18 = var19.string;
                var17 = var21[var17];
                var17 = var20.bind(var3)(var17);
                var17 = var17.t;
                var17 = var17.Wuie9L;
                var17 = var18.bind(var19)(var17);
                var4.placeholder = var17;
                var4.onChange = var10;
                var10 = true;
                var4.autoFocus = var10;
                var17 = 'done';
                var4.returnKeyType = var17;
                var4.onSubmitEditing = var16;
                var8 = var9.bind(var3)(var8, var4);
                var4 = new Array(4);
                var4[0] = var8;
                if (!var7) {
                    _fun108783_ip = 655;
                    continue _fun108783
                }
            case 620:
                var16 = _closure1_slot9;
                var9 = _closure1_slot0;
                var8 = _closure1_slot2;
                var8 = var8[var15];
                var8 = var9.bind(var3)(var8);
                var9 = var8.AppLauncherListEmptyState;
                var8 = {};
                var7 = var16.bind(var3)(var9, var8);
            case 655:
                var4[1] = var7;
                var9 = _closure1_slot9;
                var8 = _closure1_slot0;
                var7 = _closure1_slot2;
                var7 = var7[var15];
                var7 = var8.bind(var3)(var7);
                var8 = var7.AppLauncherList;
                var7 = {};
                var7.ref = var14;
                var13 = function(arg0, arg1) { // Original name: keyExtractor, environment: var13
                    _fun108790: for (var _fun108790_ip = 0;;) switch (_fun108790_ip) {
                        case 0:
                            var0 = arg0;
                            var2 = var0.type;
                            var1 = _closure1_slot8;
                            var1 = var1.CHOICE;
                            var4 = 'placeholder';
                            if (!(var2 === var1)) {
                                _fun108790_ip = 40;
                                continue _fun108790
                            }
                        case 29:
                            var0 = var0.choice;
                            var4 = var0.name;
                        case 40:
                            var0 = global;
                            var0 = var0.HermesInternal;
                            var3 = var0.concat;
                            var2 = '';
                            var1 = '_';
                            var0 = arg1;
                            var0 = var3.bind(var2)(var4, var1, var0);
                            return var0;
                    }
                };
                var7.keyExtractor = var13;
                var7.data = var12;
                var7.renderItem = var11;
                var7.scrollEnabled = var10;
                var7 = var9.bind(var3)(var8, var7);
                var4[2] = var7;
                if (!var5) {
                    _fun108783_ip = 747;
                    continue _fun108783
                }
            case 731:
                var8 = _closure1_slot9;
                var7 = _closure1_slot14;
                var6 = {};
                var5 = var8.bind(var3)(var7, var6);
            case 747:
                var4[3] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 6444, 1410, 660, 4508, 33, 22, 7947, 1297, 671, 632, 3237, 13773, 13774, 1234, 44, 4860, 3418, 3901, 7321, 13777, 2]);