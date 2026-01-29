// modules/search/native/components/layout/autocomplete/SearchFilterSuggestions.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var5;
    var0 = function(arg0) { // Original name: SearchFilterPrefixRow, environment: var1
        var4 = arg0;
        var9 = var4.text;
        var _closure2_slot0 = var9;
        var1 = var4.searchTokenType;
        var _closure2_slot1 = var1;
        var7 = var4.onPress;
        var _closure2_slot2 = var7;
        var3 = {
            'text': 0,
            'searchTokenType': 0,
            'onPress': 0
        };
        var13 = null;
        var14 = var3;
        var2 = silentSetPrototypeOf(var14, var13);
        var14 = {};
        var13 = var4;
        var12 = var3;
        var4 = copyDataProperties(var14, var13, var12);
        var8 = _closure1_slot4;
        var5 = var8.useMemo;
        var3 = new Array(1);
        var3[0] = var1;
        var2 = function() { // Environment: var0
            _fun105502: for (var _fun105502_ip = 0;;) switch (_fun105502_ip) {
                case 0:
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var0 = 8;
                    var0 = var3[var0];
                    var4 = undefined;
                    var3 = var2.bind(var4)(var0);
                    var2 = var3.getSearchTokenIcon;
                    var0 = _closure2_slot1;
                    var3 = var2.bind(var3)(var0);
                    var0 = null;
                    var2 = var0 != var3;
                    if (!var2) {
                        _fun105502_ip = 72;
                        continue _fun105502
                    }
                case 52:
                    var2 = _closure1_slot8;
                    var1 = {};
                    var5 = 'sm';
                    var1.size = var5;
                    var0 = var2.bind(var4)(var3, var1);
                case 72:
                    return var0;
            }
        };
        var11 = var5.bind(var8)(var2, var3);
        var5 = _closure1_slot4;
        var3 = var5.useMemo;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() { // Environment: var0
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 8;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.getSearchTokenSubLabel;
            var0 = _closure2_slot1;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var5 = var3.bind(var5)(var1, var2);
        var3 = _closure1_slot4;
        var2 = var3.useCallback;
        var1 = new Array(2);
        var1[0] = var7;
        var1[1] = var9;
        var0 = function() { // Environment: var0
            var2 = _closure2_slot2;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var8 = var2.bind(var3)(var0, var1);
        var3 = _closure1_slot8;
        var7 = _closure1_slot0;
        var10 = _closure1_slot2;
        var0 = 9;
        var0 = var10[var0];
        var2 = undefined;
        var0 = var7.bind(var2)(var0);
        var1 = var0.TableRow;
        var0 = {};
        var0.icon = var11;
        var0.onPress = var8;
        var8 = _closure1_slot8;
        var6 = 10;
        var6 = var10[var6];
        var6 = var7.bind(var2)(var6);
        var7 = var6.Text;
        var6 = {
            'lineClamp': 1,
            'variant': 'text-md/semibold',
            'color': 'mobile-text-heading-primary'
        };
        var6.children = var9;
        var6 = var8.bind(var2)(var7, var6);
        var0.label = var6;
        var0.subLabel = var5;
        var14 = var0;
        var13 = var4;
        var4 = copyDataProperties(var14, var13);
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var _closure1_slot15 = var0;
    var0 = function(arg0) { // Original name: getSuggestionsKey, environment: var1
        var2 = arg0;
        var1 = var2.map;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var0 = var0.text;
            return var0;
        };
        var2 = var1.bind(var2)(var0);
        var1 = var2.join;
        var0 = ' ';
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot16 = var0;
    var0 = function(arg0) { // Original name: AnimatedEnterExitContainer, environment: var1
        var0 = arg0;
        var4 = var0.children;
        var10 = var0.state;
        var _closure2_slot0 = var10;
        var12 = var0.cleanUp;
        var _closure2_slot1 = var12;
        var14 = _closure1_slot0;
        var6 = _closure1_slot2;
        var0 = 11;
        var5 = var6[var0];
        var3 = undefined;
        var8 = var14.bind(var3)(var5);
        var7 = var8.useSharedValue;
        var5 = 0;
        var11 = var7.bind(var8)(var5);
        var _closure2_slot2 = var11;
        var5 = var6[var0];
        var8 = var14.bind(var3)(var5);
        var7 = var8.useAnimatedStyle;
        var5 = function() { // Original name: u, environment: var2
            _fun105508: for (var _fun105508_ip = 0;;) switch (_fun105508_ip) {
                case 0:
                    var0 = {};
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 12;
                    var2 = var5[var3];
                    var7 = undefined;
                    var13 = var4.bind(var7)(var2);
                    var12 = var13.withSpring;
                    var6 = _closure2_slot2;
                    var2 = var6.get;
                    var11 = var2.bind(var6)();
                    var8 = 13;
                    var2 = var5[var8];
                    var2 = var4.bind(var7)(var2);
                    var18 = var2.springStandard;
                    var9 = function(arg0) { // Original name: t, environment: var2
                        _fun105509: for (var _fun105509_ip = 0;;) switch (_fun105509_ip) {
                            case 0:
                                var0 = arg0;
                                if (!var0) {
                                    _fun105509_ip = 54;
                                    continue _fun105509
                                }
                            case 6:
                                var2 = _closure2_slot0;
                                var4 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var1 = 14;
                                var3 = var3[var1];
                                var1 = undefined;
                                var1 = var4.bind(var1)(var3);
                                var1 = var1.TransitionStates;
                                var1 = var1.YEETED;
                                var0 = var2 === var1;
                            case 54:
                                if (!var0) {
                                    _fun105509_ip = 103;
                                    continue _fun105509
                                }
                            case 57:
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 11;
                                var0 = var1[var0];
                                var1 = undefined;
                                var3 = var2.bind(var1)(var0);
                                var2 = var3.runOnJS;
                                var0 = _closure2_slot1;
                                var0 = var2.bind(var3)(var0);
                                var0 = var0.bind(var1)();
                            case 103:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var2 = {};
                    var15 = _closure2_slot0;
                    var2.state = var15;
                    var15 = 14;
                    var15 = var5[var15];
                    var15 = var4.bind(var7)(var15);
                    var15 = var15.TransitionStates;
                    var2.TransitionStates = var15;
                    var15 = 11;
                    var15 = var5[var15];
                    var15 = var4.bind(var7)(var15);
                    var15 = var15.runOnJS;
                    var2.runOnJS = var15;
                    var14 = _closure2_slot1;
                    var2.cleanUp = var14;
                    var9.__closure = var2;
                    var2 = 10696166249954.0;
                    var9.__workletHash = var2;
                    var2 = _closure1_slot11;
                    var9.__initData = var2;
                    var17 = 'respect-motion-settings';
                    var20 = var13;
                    var19 = var11;
                    var16 = var9;
                    var2 = var20[var12](var19, var18, var17, var16, var15);
                    var0.opacity = var2;
                    var2 = {};
                    var3 = var5[var3];
                    var5 = var4.bind(var7)(var3);
                    var4 = var5.withSpring;
                    var3 = var6.get;
                    var9 = var3.bind(var6)();
                    var3 = -15;
                    var6 = 1;
                    if (!(var6 === var9)) {
                        _fun105508_ip = 233;
                        continue _fun105508
                    }
                case 231:
                    var3 = 0;
                case 233:
                    var6 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var1 = var1[var8];
                    var1 = var6.bind(var7)(var1);
                    var1 = var1.springStandard;
                    var1 = var4.bind(var5)(var3, var1);
                    var2.translateY = var1;
                    var1 = new Array(1);
                    var1[0] = var2;
                    var0.transform = var1;
                    return var0;
            }
        };
        var9 = {};
        var13 = 12;
        var13 = var6[var13];
        var13 = var14.bind(var3)(var13);
        var13 = var13.withSpring;
        var9.withSpring = var13;
        var9.opacity = var11;
        var13 = 13;
        var13 = var6[var13];
        var13 = var14.bind(var3)(var13);
        var13 = var13.springStandard;
        var9.springStandard = var13;
        var9.state = var10;
        var13 = 14;
        var13 = var6[var13];
        var13 = var14.bind(var3)(var13);
        var13 = var13.TransitionStates;
        var9.TransitionStates = var13;
        var13 = var6[var0];
        var13 = var14.bind(var3)(var13);
        var13 = var13.runOnJS;
        var9.runOnJS = var13;
        var9.cleanUp = var12;
        var5.__closure = var9;
        var9 = 334512108462.0;
        var5.__workletHash = var9;
        var9 = _closure1_slot10;
        var5.__initData = var9;
        var5 = var7.bind(var8)(var5);
        var9 = _closure1_slot4;
        var8 = var9.useEffect;
        var7 = new Array(2);
        var7[0] = var11;
        var7[1] = var10;
        var2 = function() { // Environment: var2
            _fun105510: for (var _fun105510_ip = 0;;) switch (_fun105510_ip) {
                case 0:
                    var3 = _closure2_slot2;
                    var2 = var3.set;
                    var5 = _closure2_slot0;
                    var4 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 14;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var4.bind(var0)(var1);
                    var1 = var1.TransitionStates;
                    var4 = var1.YEETED;
                    var1 = 1;
                    if (!(var5 === var4)) {
                        _fun105510_ip = 62;
                        continue _fun105510
                    }
                case 60:
                    var1 = 0;
                case 62:
                    var1 = var2.bind(var3)(var1);
                    return var0;
            }
        };
        var2 = var8.bind(var9)(var2, var7);
        var2 = _closure1_slot8;
        var1 = _closure1_slot1;
        var0 = var6[var0];
        var0 = var1.bind(var3)(var0);
        var1 = var0.View;
        var0 = {};
        var0.style = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot17 = var0;
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
    var12 = 1;
    var6 = var5[var12];
    var3 = arg3;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.SearchFilterAddLocations;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {};
    var10 = 7;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_SURFACE_HIGHEST;
    var9.backgroundColor = var13;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.lg;
    var9.borderRadius = var13;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BORDER_SUBTLE;
    var9.borderColor = var13;
    var9.borderWidth = var12;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.shadows;
    var15 = var10.SHADOW_LOW;
    var16 = var9;
    var10 = copyDataProperties(var16, var15);
    var3.card = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot9 = var3;
    var3 = {};
    var7 = "function SearchFilterSuggestionsTsx1(){const{withSpring,opacity,springStandard,state,TransitionStates,runOnJS,cleanUp}=this.__closure;return{opacity:withSpring(opacity.get(),springStandard,'respect-motion-settings',function(finished){if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}}),transform:[{translateY:withSpring(opacity.get()===1?0:-15,springStandard)}]};}";
    var3.code = var7;
    var _closure1_slot10 = var3;
    var3 = {};
    var7 = 'function SearchFilterSuggestionsTsx2(finished){const{state,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}}';
    var3.code = var7;
    var _closure1_slot11 = var3;
    var3 = new Array(0);
    var _closure1_slot12 = var3;
    var3 = {};
    var7 = 'function SearchFilterSuggestionsTsx3(){const{dismissed}=this.__closure;return dismissed.get();}';
    var3.code = var7;
    var _closure1_slot13 = var3;
    var3 = {};
    var7 = 'function SearchFilterSuggestionsTsx4(isDismissed){const{runOnJS,setSuggestions,EMPTY_SEARCH_FILTER_ROWS}=this.__closure;if(isDismissed){runOnJS(setSuggestions)(EMPTY_SEARCH_FILTER_ROWS);}}';
    var3.code = var7;
    var _closure1_slot14 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Original name: SearchFilterSuggestions, environment: var1
        var1 = arg0;
        var8 = var1.searchContext;
        var _closure2_slot0 = var8;
        var5 = var1.onLayoutMeasure;
        var _closure2_slot1 = var5;
        var11 = var1.containerStyle;
        var _closure2_slot2 = var11;
        var13 = var1.dismissed;
        var _closure2_slot3 = var13;
        var1 = _closure1_slot9;
        var3 = undefined;
        var6 = var1.bind(var3)();
        var _closure2_slot4 = var6;
        var1 = _closure1_slot0;
        var7 = _closure1_slot2;
        var2 = 15;
        var2 = var7[var2];
        var9 = var1.bind(var3)(var2);
        var2 = var9.useEligibleFilterTokensSet;
        var15 = var2.bind(var9)(var8);
        var _closure2_slot5 = var15;
        var10 = _closure1_slot4;
        var9 = var10.useState;
        var2 = new Array(0);
        var10 = var9.bind(var10)(var2);
        var9 = _closure1_slot3;
        var2 = 2;
        var10 = var9.bind(var3)(var10, var2);
        var2 = 0;
        var2 = var10[var2];
        var _closure2_slot6 = var2;
        var9 = 1;
        var14 = var10[var9];
        var _closure2_slot7 = var14;
        var12 = _closure1_slot4;
        var10 = var12.useEffect;
        var9 = new Array(3);
        var9[0] = var15;
        var9[1] = var8;
        var9[2] = var14;
        var8 = function() { // Environment: var0
            var4 = _closure1_slot6;
            var3 = var4.subscribeState;
            var2 = _closure2_slot0;
            var1 = function(arg0) { // Environment: var0
                var2 = arg0;
                var0 = {};
                var1 = var2.getTextInputValue;
                var1 = var1.bind(var2)();
                var0.textInputValue = var1;
                var1 = var2.isAutocompleteVisible;
                var1 = var1.bind(var2)();
                var0.isAutocompleteVisible = var1;
                return var0;
            };
            var0 = function(arg0) { // Environment: var0
                _fun105514: for (var _fun105514_ip = 0;;) switch (_fun105514_ip) {
                    case 0:
                        var1 = arg0;
                        var2 = null;
                        if (!(var2 != var1)) {
                            _fun105514_ip = 183;
                            continue _fun105514
                        }
                    case 14:
                        var5 = var1.textInputValue;
                        var1 = var1.isAutocompleteVisible;
                        var2 = var5.trim;
                        var3 = var2.bind(var5)();
                        var2 = '';
                        if (!(var2 !== var3)) {
                            _fun105514_ip = 162;
                            continue _fun105514
                        }
                    case 44:
                        if (var1) {
                            _fun105514_ip = 162;
                            continue _fun105514
                        }
                    case 47:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 8;
                        var3 = var3[var2];
                        var2 = undefined;
                        var4 = var4.bind(var2)(var3);
                        var3 = var4.getSearchFilterSuggestions;
                        var4 = var3.bind(var4)(var5);
                        var _closure4_slot0 = var4;
                        var5 = var4.length;
                        var3 = 0;
                        if (!(var3 === var5)) {
                            _fun105514_ip = 116;
                            continue _fun105514
                        }
                    case 98:
                        var3 = _closure2_slot7;
                        var1 = _closure1_slot12;
                        var1 = var3.bind(var2)(var1);
                        _fun105514_ip = 183;
                        continue _fun105514;
                    case 116:
                        var1 = new Array(0);
                        var _closure4_slot1 = var1;
                        var3 = var4.forEach;
                        var1 = function(arg0, arg1) { // Environment: var0
                            _fun105515: for (var _fun105515_ip = 0;;) switch (_fun105515_ip) {
                                case 0:
                                    var0 = arg0;
                                    var5 = arg1;
                                    var6 = var0.text;
                                    var7 = var0.token;
                                    var1 = _closure2_slot5;
                                    var0 = var1.has;
                                    var0 = var0.bind(var1)(var7);
                                    if (!var0) {
                                        _fun105515_ip = 155;
                                        continue _fun105515
                                    }
                                case 37:
                                    var2 = _closure4_slot1;
                                    var1 = var2.push;
                                    var0 = {};
                                    var0.text = var6;
                                    var0.searchTokenType = var7;
                                    var6 = 0;
                                    var6 = var6 === var5;
                                    var0.start = var6;
                                    var3 = _closure4_slot0;
                                    var6 = var3.length;
                                    var3 = 1;
                                    var3 = var6 - var3;
                                    var3 = var5 === var3;
                                    var0.end = var3;
                                    var8 = _closure1_slot0;
                                    var6 = _closure1_slot2;
                                    var5 = 8;
                                    var6 = var6[var5];
                                    var5 = undefined;
                                    var6 = var8.bind(var5)(var6);
                                    var5 = var6.getSearchTokenPressHandler;
                                    var4 = _closure2_slot0;
                                    var3 = _closure1_slot7;
                                    var3 = var3.SEARCH_INPUT_DROPDOWN;
                                    var3 = var5.bind(var6)(var4, var7, var3);
                                    var0.onPress = var3;
                                    var0 = var1.bind(var2)(var0);
                                case 155:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var1 = var3.bind(var4)(var1);
                        var1 = _closure2_slot7;
                        var0 = function(arg0) { // Environment: var0
                            _fun105516: for (var _fun105516_ip = 0;;) switch (_fun105516_ip) {
                                case 0:
                                    var0 = arg0;
                                    var5 = _closure1_slot16;
                                    var4 = undefined;
                                    var3 = var5.bind(var4)(var0);
                                    var2 = _closure4_slot1;
                                    var2 = var5.bind(var4)(var2);
                                    if (!(var3 !== var2)) {
                                        _fun105516_ip = 37;
                                        continue _fun105516
                                    }
                                case 33:
                                    var0 = _closure4_slot1;
                                case 37:
                                    return var0;
                            }
                        };
                        var0 = var1.bind(var2)(var0);
                        _fun105514_ip = 183;
                        continue _fun105514;
                    case 162:
                        var2 = _closure2_slot7;
                        var1 = _closure1_slot12;
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                    case 183:
                        var0 = undefined;
                        return var0;
                }
            };
            var0 = var3.bind(var4)(var2, var1, var0);
            return var0;
        };
        var8 = var10.bind(var12)(var8, var9);
        var15 = 11;
        var8 = var7[var15];
        var12 = var1.bind(var3)(var8);
        var10 = var12.useAnimatedReaction;
        var9 = function() { // Original name: x, environment: var0
            var1 = _closure2_slot3;
            var0 = var1.get;
            var0 = var0.bind(var1)();
            return var0;
        };
        var8 = {};
        var8.dismissed = var13;
        var9.__closure = var8;
        var8 = 17191989548971.0;
        var9.__workletHash = var8;
        var8 = _closure1_slot13;
        var9.__initData = var8;
        var8 = function(arg0) { // Original name: b, environment: var0
            _fun105518: for (var _fun105518_ip = 0;;) switch (_fun105518_ip) {
                case 0:
                    var0 = arg0;
                    if (!var0) {
                        _fun105518_ip = 57;
                        continue _fun105518
                    }
                case 6:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 11;
                    var1 = var2[var1];
                    var2 = undefined;
                    var4 = var3.bind(var2)(var1);
                    var3 = var4.runOnJS;
                    var1 = _closure2_slot7;
                    var1 = var3.bind(var4)(var1);
                    var0 = _closure1_slot12;
                    var0 = var1.bind(var2)(var0);
                case 57:
                    var0 = undefined;
                    return var0;
            }
        };
        var13 = {};
        var15 = var7[var15];
        var15 = var1.bind(var3)(var15);
        var15 = var15.runOnJS;
        var13.runOnJS = var15;
        var13.setSuggestions = var14;
        var14 = _closure1_slot12;
        var13.EMPTY_SEARCH_FILTER_ROWS = var14;
        var8.__closure = var13;
        var13 = 8991360021943.0;
        var8.__workletHash = var13;
        var13 = _closure1_slot14;
        var8.__initData = var13;
        var8 = var10.bind(var12)(var9, var8);
        var10 = _closure1_slot4;
        var9 = var10.useMemo;
        var8 = new Array(2);
        var8[0] = var11;
        var6 = var6.card;
        var8[1] = var6;
        var6 = function() { // Environment: var0
            var0 = _closure2_slot4;
            var2 = var0.card;
            var0 = new Array(2);
            var0[0] = var2;
            var1 = _closure2_slot2;
            var0[1] = var1;
            return var0;
        };
        var10 = var9.bind(var10)(var6, var8);
        var _closure2_slot8 = var10;
        var9 = _closure1_slot4;
        var8 = var9.useRef;
        var6 = null;
        var6 = var8.bind(var9)(var6);
        var _closure2_slot9 = var6;
        var9 = _closure1_slot4;
        var8 = var9.useCallback;
        var6 = new Array(1);
        var6[0] = var5;
        var5 = function() { // Environment: var0
            var0 = global;
            var2 = var0.setTimeout;
            var0 = undefined;
            var1 = function() { // Environment: var1
                _fun105521: for (var _fun105521_ip = 0;;) switch (_fun105521_ip) {
                    case 0:
                        var0 = _closure2_slot9;
                        var2 = var0.current;
                        var0 = null;
                        if (!(var0 != var2)) {
                            _fun105521_ip = 38;
                            continue _fun105521
                        }
                    case 18:
                        var1 = var2.measure;
                        var0 = function(arg0, arg1, arg2, arg3, arg4, arg5) { // Environment: var0
                            var3 = arg4;
                            var4 = arg5;
                            var2 = _closure2_slot1;
                            var1 = {};
                            var1.top = var4;
                            var0 = arg3;
                            var0 = var4 + var0;
                            var1.bottom = var0;
                            var1.left = var3;
                            var0 = arg2;
                            var0 = var3 + var0;
                            var1.right = var0;
                            var0 = undefined;
                            var1 = var2.bind(var0)(var1);
                            return var0;
                        };
                        var0 = var1.bind(var2)(var0);
                    case 38:
                        var0 = undefined;
                        return var0;
                }
            };
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var9 = var8.bind(var9)(var5, var6);
        var _closure2_slot10 = var9;
        var8 = _closure1_slot4;
        var6 = var8.useMemo;
        var5 = new Array(1);
        var5[0] = var2;
        var2 = function() { // Environment: var0
            _fun105523: for (var _fun105523_ip = 0;;) switch (_fun105523_ip) {
                case 0:
                    var0 = _closure2_slot6;
                    var2 = var0.length;
                    var0 = 0;
                    if (!(!(var2 > var0))) {
                        _fun105523_ip = 24;
                        continue _fun105523
                    }
                case 18:
                    var0 = new Array(0);
                    _fun105523_ip = 39;
                    continue _fun105523;
                case 24:
                    var2 = _closure2_slot6;
                    var1 = new Array(1);
                    var1[0] = var2;
                    var0 = var1;
                case 39:
                    return var0;
            }
        };
        var6 = var6.bind(var8)(var2, var5);
        var8 = _closure1_slot4;
        var5 = var8.useCallback;
        var2 = new Array(2);
        var2[0] = var10;
        var2[1] = var9;
        var0 = function(arg0, arg1, arg2, arg3) { // Environment: var0
            var8 = arg1;
            var4 = _closure1_slot8;
            var3 = _closure1_slot17;
            var2 = {};
            var1 = arg2;
            var2.state = var1;
            var1 = arg3;
            var2.cleanUp = var1;
            var6 = _closure1_slot8;
            var5 = _closure1_slot5;
            var0 = {};
            var7 = _closure2_slot9;
            var0.ref = var7;
            var7 = _closure2_slot8;
            var0.style = var7;
            var7 = false;
            var0.collapsable = var7;
            var1 = _closure2_slot10;
            var0.onLayout = var1;
            var7 = var8.map;
            var1 = function(arg0) { // Environment: var1
                var0 = arg0;
                var4 = _closure1_slot8;
                var3 = _closure1_slot15;
                var2 = {};
                var7 = var2;
                var6 = var0;
                var1 = copyDataProperties(var7, var6);
                var1 = var0.text;
                var0 = undefined;
                var0 = var4.bind(var0)(var3, var2, var1);
                return var0;
            };
            var1 = var7.bind(var8)(var1);
            var0.children = var1;
            var1 = undefined;
            var0 = var6.bind(var1)(var5, var0);
            var2.children = var0;
            var0 = arg0;
            var0 = var4.bind(var1)(var3, var2, var0);
            return var0;
        };
        var5 = var5.bind(var8)(var0, var2);
        var2 = _closure1_slot8;
        var0 = 14;
        var0 = var7[var0];
        var0 = var1.bind(var3)(var0);
        var1 = var0.TransitionGroup;
        var0 = {};
        var0.items = var6;
        var0.renderItem = var5;
        var4 = _closure1_slot16;
        var0.getItemKey = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var1 = var3.bind(var6)(var1);
    var3 = 16;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/search/native/components/layout/autocomplete/SearchFilterSuggestions.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 8921, 8856, 33, 1297, 671, 13709, 4854, 3895, 3677, 4034, 4040, 3981, 13714, 2]);