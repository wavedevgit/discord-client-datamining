// modules/search/native/components/layout/SearchBar.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var9 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        var3 = arg0;
        var _closure2_slot0 = var3;
        var2 = _closure1_slot9;
        var1 = var2.useState;
        var0 = function(arg0) { // Environment: var0
            _fun105152: for (var _fun105152_ip = 0;;) switch (_fun105152_ip) {
                case 0:
                    var1 = arg0;
                    var0 = var1.getChannelIds;
                    var0 = var0.bind(var1)();
                    var2 = _closure2_slot0;
                    var4 = var2.type;
                    var3 = _closure1_slot14;
                    var3 = var3.GUILD_CHANNEL;
                    if (!(var3 !== var4)) {
                        _fun105152_ip = 406;
                        continue _fun105152
                    }
                case 45:
                    var3 = _closure1_slot14;
                    var3 = var3.GUILD;
                    if (!(var3 !== var4)) {
                        _fun105152_ip = 406;
                        continue _fun105152
                    }
                case 62:
                    var3 = _closure1_slot14;
                    var3 = var3.CHANNEL;
                    if (!(var3 !== var4)) {
                        _fun105152_ip = 213;
                        continue _fun105152
                    }
                case 79:
                    var3 = _closure1_slot14;
                    var3 = var3.DMS;
                    if (!(var3 !== var4)) {
                        _fun105152_ip = 152;
                        continue _fun105152
                    }
                case 93:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 13;
                    var4 = var8[var3];
                    var6 = undefined;
                    var4 = var7.bind(var6)(var4);
                    var5 = var4.intl;
                    var4 = var5.string;
                    var3 = var8[var3];
                    var3 = var7.bind(var6)(var3);
                    var3 = var3.t;
                    var3 = var3["5h0QOP"];
                    var3 = var4.bind(var5)(var3);
                    return var3;
                case 152:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 13;
                    var4 = var8[var3];
                    var6 = undefined;
                    var4 = var7.bind(var6)(var4);
                    var5 = var4.intl;
                    var4 = var5.string;
                    var3 = var8[var3];
                    var3 = var7.bind(var6)(var3);
                    var3 = var3.t;
                    var3 = var3.m7OrlR;
                    var3 = var4.bind(var5)(var3);
                    return var3;
                case 213:
                    var3 = _closure2_slot0;
                    var5 = var3.channelId;
                    var4 = _closure1_slot5;
                    var3 = var4.getChannel;
                    var11 = var3.bind(var4)(var5);
                    var3 = null;
                    if (!(var3 != var11)) {
                        _fun105152_ip = 347;
                        continue _fun105152
                    }
                case 242:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var3 = 14;
                    var3 = var9[var3];
                    var4 = undefined;
                    var10 = var8.bind(var4)(var3);
                    var7 = var10.computeChannelName;
                    var14 = _closure1_slot8;
                    var13 = _closure1_slot7;
                    var12 = true;
                    var16 = var10;
                    var15 = var11;
                    var7 = var16[var7](var15, var14, var13, var12, var11);
                    var3 = 13;
                    var5 = var9[var3];
                    var5 = var8.bind(var4)(var5);
                    var6 = var5.intl;
                    var5 = var6.formatToPlainString;
                    var3 = var9[var3];
                    var3 = var8.bind(var4)(var3);
                    var3 = var3.t;
                    var4 = var3.LDpotA;
                    var3 = {};
                    var3.guildName = var7;
                    var3 = var5.bind(var6)(var4, var3);
                    _fun105152_ip = 404;
                    continue _fun105152;
                case 347:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var4 = 13;
                    var5 = var9[var4];
                    var7 = undefined;
                    var5 = var8.bind(var7)(var5);
                    var6 = var5.intl;
                    var5 = var6.string;
                    var4 = var9[var4];
                    var4 = var8.bind(var7)(var4);
                    var4 = var4.t;
                    var4 = var4["5h0QOP"];
                    var3 = var5.bind(var6)(var4);
                case 404:
                    return var3;
                case 406:
                    var3 = var0.size;
                    var0 = 0;
                    if (!(var0 !== var3)) {
                        _fun105152_ip = 479;
                        continue _fun105152
                    }
                case 417:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var0 = 13;
                    var3 = var7[var0];
                    var5 = undefined;
                    var3 = var6.bind(var5)(var3);
                    var4 = var3.intl;
                    var3 = var4.string;
                    var0 = var7[var0];
                    var0 = var6.bind(var5)(var0);
                    var0 = var0.t;
                    var0 = var0["5h0QOP"];
                    var0 = var3.bind(var4)(var0);
                    _fun105152_ip = 647;
                    continue _fun105152;
                case 479:
                    var1 = _closure2_slot0;
                    var4 = var1.guildId;
                    var3 = _closure1_slot6;
                    var1 = var3.getGuild;
                    var3 = var1.bind(var3)(var4);
                    var1 = null;
                    var4 = var1 == var3;
                    var6 = undefined;
                    var7 = undefined;
                    if (var4) {
                        _fun105152_ip = 520;
                        continue _fun105152
                    }
                case 515:
                    var7 = var3.name;
                case 520:
                    if (!(var1 != var7)) {
                        _fun105152_ip = 589;
                        continue _fun105152
                    }
                case 524:
                    var3 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var1 = 13;
                    var4 = var8[var1];
                    var4 = var3.bind(var6)(var4);
                    var5 = var4.intl;
                    var4 = var5.formatToPlainString;
                    var1 = var8[var1];
                    var1 = var3.bind(var6)(var1);
                    var1 = var1.t;
                    var3 = var1.LDpotA;
                    var1 = {};
                    var1.guildName = var7;
                    var1 = var4.bind(var5)(var3, var1);
                    _fun105152_ip = 644;
                    continue _fun105152;
                case 589:
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 13;
                    var3 = var7[var2];
                    var3 = var5.bind(var6)(var3);
                    var4 = var3.intl;
                    var3 = var4.string;
                    var2 = var7[var2];
                    var2 = var5.bind(var6)(var2);
                    var2 = var2.t;
                    var2 = var2["5h0QOP"];
                    var1 = var3.bind(var4)(var2);
                case 644:
                    var0 = var1;
                case 647:
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var _closure1_slot20 = var0;
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
    var6 = var3.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var13 = 1;
    var3 = var5[var13];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var14 = 2;
    var3 = var5[var14];
    var3 = var9.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var9.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var9.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var9.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var9.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.EMPTY_SEARCH_QUERY_STRING;
    var _closure1_slot10 = var7;
    var11 = var3.SEARCH_BAR_HEIGHT;
    var3 = var3.SearchQueryTagTypes;
    var _closure1_slot11 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.SearchFilterAddLocations;
    var _closure1_slot12 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.HorizontalGradient;
    var _closure1_slot13 = var7;
    var3 = var3.SearchTypes;
    var _closure1_slot14 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot15 = var7;
    var3 = var3.jsxs;
    var _closure1_slot16 = var3;
    var3 = 11;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var10 = {};
    var12 = 12;
    var15 = var5[var12];
    var15 = var9.bind(var0)(var15);
    var15 = var15.radii;
    var15 = var15.round;
    var10.borderRadius = var15;
    var14 = var11 - var14;
    var10.height = var14;
    var14 = 'hidden';
    var10.overflow = var14;
    var10.borderWidth = var13;
    var12 = var5[var12];
    var12 = var9.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BORDER_SUBTLE;
    var10.borderColor = var12;
    var3.searchBar = var10;
    var10 = {
        'width': 32,
        'height': null,
        'justifyContent': 'center',
        'zIndex': 10
    };
    var10.height = var11;
    var3.icon = var10;
    var10 = {
        'position': 'absolute',
        'right': 0
    };
    var10.height = var11;
    var3.gradientContainer = var10;
    var10 = {
        'width': 32,
        'position': 'absolute',
        'left': 0,
        'zIndex': 100
    };
    var10.height = var11;
    var3.gradient = var10;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot17 = var3;
    var3 = 15;
    var3 = var5[var3];
    var8 = var9.bind(var0)(var3);
    var7 = var8.createAnimatedComponent;
    var3 = 16;
    var3 = var5[var3];
    var3 = var9.bind(var0)(var3);
    var3 = var7.bind(var8)(var3);
    var _closure1_slot18 = var3;
    var3 = {};
    var7 = 'function SearchBarTsx1(){const{withSpring,gradientVisible,springStandard}=this.__closure;return{opacity:withSpring(gradientVisible.get()?1:0,springStandard)};}';
    var3.code = var7;
    var _closure1_slot19 = var3;
    var3 = var6.forwardRef;
    var1 = function(arg0, arg1) { // Environment: var1
        var1 = arg0;
        var15 = var1.searchContext;
        var _closure2_slot0 = var15;
        var1 = var1.setSuggestionsDismissed;
        var _closure2_slot1 = var1;
        var2 = _closure1_slot17;
        var3 = undefined;
        var17 = var2.bind(var3)();
        var5 = _closure1_slot9;
        var4 = var5.useState;
        var2 = function(arg0) { // Environment: var0
            var1 = arg0;
            var0 = var1.getTags;
            var0 = var0.bind(var1)();
            return var0;
        };
        var2 = var4.bind(var5)(var15, var2);
        var _closure2_slot2 = var2;
        var13 = _closure1_slot3;
        var5 = var13.useMemo;
        var4 = new Array(1);
        var4[0] = var2;
        var2 = function() { // Environment: var0
            var2 = _closure2_slot2;
            var1 = var2.map;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var0 = 17;
            var3 = var3[var0];
            var0 = undefined;
            var0 = var4.bind(var0)(var3);
            var0 = var0.toSearchBarTag;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var10 = var5.bind(var13)(var2, var4);
        var4 = var13.useRef;
        var2 = null;
        var12 = var4.bind(var13)(var2);
        var _closure2_slot3 = var12;
        var2 = _closure1_slot20;
        var7 = var2.bind(var3)(var15);
        var5 = _closure1_slot9;
        var4 = var5.useState;
        var2 = function(arg0) { // Environment: var0
            var1 = arg0;
            var0 = var1.getPrefixTag;
            var1 = var0.bind(var1)();
            var0 = null;
            var0 = var0 != var1;
            return var0;
        };
        var5 = var4.bind(var5)(var15, var2);
        var _closure2_slot4 = var5;
        var6 = var13.useImperativeHandle;
        var4 = arg1;
        var2 = function() { // Environment: var0
            var0 = {};
            var2 = function arg0() {
                _fun105158: for (var _fun105158_ip = 0;;) switch (_fun105158_ip) {
                    case 0:
                        var0 = _closure2_slot3;
                        var3 = var0.current;
                        var0 = null;
                        var1 = var0 == var3;
                        var0 = undefined;
                        if (var1) {
                            _fun105158_ip = 37;
                            continue _fun105158
                        }
                    case 23:
                        var2 = var3.setText;
                        var1 = arg0;
                        var0 = var2.bind(var3)(var1);
                    case 37:
                        return var0;
                }
            };
            var0.setText = var2;
            var2 = function() {
                _fun105159: for (var _fun105159_ip = 0;;) switch (_fun105159_ip) {
                    case 0:
                        var0 = _closure2_slot3;
                        var3 = var0.current;
                        var0 = null;
                        var2 = var0 == var3;
                        var1 = undefined;
                        if (var2) {
                            _fun105159_ip = 33;
                            continue _fun105159
                        }
                    case 23:
                        var2 = var3.getText;
                        var1 = var2.bind(var3)();
                    case 33:
                        var2 = var0 != var1;
                        var0 = '';
                        if (!var2) {
                            _fun105159_ip = 47;
                            continue _fun105159
                        }
                    case 44:
                        var0 = var1;
                    case 47:
                        return var0;
                }
            };
            var0.getText = var2;
            var2 = function() {
                _fun105160: for (var _fun105160_ip = 0;;) switch (_fun105160_ip) {
                    case 0:
                        var0 = _closure2_slot3;
                        var2 = var0.current;
                        var0 = null;
                        var1 = var0 == var2;
                        var0 = undefined;
                        if (var1) {
                            _fun105160_ip = 33;
                            continue _fun105160
                        }
                    case 23:
                        var1 = var2.blur;
                        var0 = var1.bind(var2)();
                    case 33:
                        return var0;
                }
            };
            var0.blur = var2;
            var2 = function() {
                _fun105161: for (var _fun105161_ip = 0;;) switch (_fun105161_ip) {
                    case 0:
                        var0 = _closure2_slot3;
                        var2 = var0.current;
                        var0 = null;
                        var1 = var0 == var2;
                        var0 = undefined;
                        if (var1) {
                            _fun105161_ip = 33;
                            continue _fun105161
                        }
                    case 23:
                        var1 = var2.focus;
                        var0 = var1.bind(var2)();
                    case 33:
                        return var0;
                }
            };
            var0.focus = var2;
            var2 = function() {
                _fun105162: for (var _fun105162_ip = 0;;) switch (_fun105162_ip) {
                    case 0:
                        var0 = _closure2_slot3;
                        var3 = var0.current;
                        var0 = null;
                        var2 = var0 == var3;
                        var1 = undefined;
                        if (var2) {
                            _fun105162_ip = 33;
                            continue _fun105162
                        }
                    case 23:
                        var2 = var3.isFocused;
                        var1 = var2.bind(var3)();
                    case 33:
                        var0 = var0 != var1;
                        if (!var0) {
                            _fun105162_ip = 43;
                            continue _fun105162
                        }
                    case 40:
                        var0 = var1;
                    case 43:
                        return var0;
                }
            };
            var0.isFocused = var2;
            var2 = function arg0() {
                _fun105163: for (var _fun105163_ip = 0;;) switch (_fun105163_ip) {
                    case 0:
                        var0 = _closure2_slot3;
                        var3 = var0.current;
                        var0 = null;
                        var1 = var0 == var3;
                        var0 = undefined;
                        if (var1) {
                            _fun105163_ip = 37;
                            continue _fun105163
                        }
                    case 23:
                        var2 = var3.measure;
                        var1 = arg0;
                        var0 = var2.bind(var3)(var1);
                    case 37:
                        return var0;
                }
            };
            var0.measure = var2;
            var2 = function arg0() {
                _fun105164: for (var _fun105164_ip = 0;;) switch (_fun105164_ip) {
                    case 0:
                        var0 = _closure2_slot3;
                        var3 = var0.current;
                        var0 = null;
                        var1 = var0 == var3;
                        var0 = undefined;
                        if (var1) {
                            _fun105164_ip = 37;
                            continue _fun105164
                        }
                    case 23:
                        var2 = var3.measureInWindow;
                        var1 = arg0;
                        var0 = var2.bind(var3)(var1);
                    case 37:
                        return var0;
                }
            };
            var0.measureInWindow = var2;
            var1 = function arg0, arg1, arg2() {
                _fun105165: for (var _fun105165_ip = 0;;) switch (_fun105165_ip) {
                    case 0:
                        var0 = _closure2_slot3;
                        var5 = var0.current;
                        var0 = null;
                        var1 = var0 == var5;
                        var0 = undefined;
                        if (var1) {
                            _fun105165_ip = 45;
                            continue _fun105165
                        }
                    case 23:
                        var4 = var5.measureLayout;
                        var3 = arg0;
                        var2 = arg1;
                        var1 = arg2;
                        var0 = var4.bind(var5)(var3, var2, var1);
                    case 45:
                        return var0;
                }
            };
            var0.measureLayout = var1;
            return var0;
        };
        var2 = var6.bind(var13)(var4, var2);
        var6 = var13.useEffect;
        var4 = new Array(1);
        var4[0] = var15;
        var2 = function() { // Environment: var0
            var3 = _closure1_slot9;
            var2 = var3.subscribeTextInputValue;
            var1 = _closure2_slot0;
            var0 = function(arg0, arg1, arg2) { // Environment: var0
                _fun105167: for (var _fun105167_ip = 0;;) switch (_fun105167_ip) {
                    case 0:
                        var3 = arg0;
                        var1 = arg2;
                        if (var1) {
                            _fun105167_ip = 15;
                            continue _fun105167
                        }
                    case 9:
                        var0 = null;
                        var1 = var0 == var3;
                    case 15:
                        var0 = undefined;
                        var2 = undefined;
                        if (var1) {
                            _fun105167_ip = 43;
                            continue _fun105167
                        }
                    case 22:
                        var4 = _closure2_slot3;
                        var4 = var4.current;
                        var5 = null;
                        var1 = var5 == var4;
                        var2 = var4;
                    case 43:
                        if (var1) {
                            _fun105167_ip = 57;
                            continue _fun105167
                        }
                    case 46:
                        var1 = var2.setText;
                        var1 = var1.bind(var2)(var3);
                    case 57:
                        return var0;
                }
            };
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var2 = var6.bind(var13)(var2, var4);
        var6 = var13.useCallback;
        var4 = new Array(1);
        var4[0] = var15;
        var2 = function(arg0) { // Environment: var0
            _fun105168: for (var _fun105168_ip = 0;;) switch (_fun105168_ip) {
                case 0:
                    var4 = arg0;
                    var _closure3_slot0 = var4;
                    var7 = _closure1_slot9;
                    var6 = var7.getState;
                    var5 = _closure2_slot0;
                    var3 = function(arg0) { // Environment: var1
                        var1 = arg0;
                        var0 = var1.getTextInputValue;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var3 = var6.bind(var7)(var5, var3);
                    if (!(var3 !== var4)) {
                        _fun105168_ip = 214;
                        continue _fun105168
                    }
                case 49:
                    var5 = _closure1_slot9;
                    var4 = var5.setState;
                    var8 = _closure2_slot0;
                    var3 = function(arg0) { // Environment: var1
                        var3 = arg0;
                        var2 = var3.setTextInputValue;
                        var1 = _closure3_slot0;
                        var0 = true;
                        var0 = var2.bind(var3)(var1, var0);
                        var0 = undefined;
                        return var0;
                    };
                    var3 = var4.bind(var5)(var8, var3);
                    var6 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var5 = 17;
                    var3 = var3[var5];
                    var4 = undefined;
                    var6 = var6.bind(var4)(var3);
                    var3 = var6.syncAutocompleteDebounced;
                    var3 = var3.bind(var6)(var8);
                    var7 = _closure1_slot9;
                    var6 = var7.getState;
                    var3 = function(arg0) { // Environment: var1
                        var1 = arg0;
                        var0 = var1.isAutocompleteVisible;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var3 = var6.bind(var7)(var8, var3);
                    if (var3) {
                        _fun105168_ip = 214;
                        continue _fun105168
                    }
                case 135:
                    var7 = _closure1_slot9;
                    var6 = var7.getState;
                    var3 = _closure2_slot0;
                    var1 = function(arg0) { // Environment: var1
                        var1 = arg0;
                        var0 = var1.isInitialSearchQuery;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var1 = var6.bind(var7)(var3, var1);
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var2 = var2[var5];
                    var2 = var3.bind(var4)(var2);
                    if (var1) {
                        _fun105168_ip = 199;
                        continue _fun105168
                    }
                case 182:
                    var3 = var2.fetchInitialMessagesDebounced;
                    var1 = _closure2_slot0;
                    var1 = var3.bind(var2)(var1);
                    _fun105168_ip = 214;
                    continue _fun105168;
                case 199:
                    var1 = var2.fetchInitialMessages;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                case 214:
                    var0 = undefined;
                    return var0;
            }
        };
        var9 = var6.bind(var13)(var2, var4);
        var6 = var13.useCallback;
        var4 = new Array(1);
        var4[0] = var15;
        var2 = function(arg0) { // Environment: var0
            _fun105173: for (var _fun105173_ip = 0;;) switch (_fun105173_ip) {
                case 0:
                    var4 = arg0;
                    var _closure3_slot0 = var4;
                    var7 = _closure1_slot9;
                    var6 = var7.getState;
                    var5 = _closure2_slot0;
                    var3 = function(arg0) { // Environment: var1
                        var1 = arg0;
                        var0 = var1.getTags;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var3 = var6.bind(var7)(var5, var3);
                    var7 = var3[var4];
                    var3 = null;
                    if (!(var3 != var7)) {
                        _fun105173_ip = 397;
                        continue _fun105173
                    }
                case 55:
                    var8 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var3 = 18;
                    var3 = var11[var3];
                    var4 = undefined;
                    var3 = var8.bind(var4)(var3);
                    var6 = var3.AccessibilityAnnouncer;
                    var5 = var6.announce;
                    var3 = 13;
                    var9 = var11[var3];
                    var9 = var8.bind(var4)(var9);
                    var10 = var9.intl;
                    var9 = var10.formatToPlainString;
                    var3 = var11[var3];
                    var3 = var8.bind(var4)(var3);
                    var3 = var3.t;
                    var8 = var3.srlxB8;
                    var3 = {};
                    var11 = var7.text;
                    var3.text = var11;
                    var3 = var9.bind(var10)(var8, var3);
                    var3 = var5.bind(var6)(var3);
                    var5 = var7.type;
                    var3 = _closure1_slot11;
                    var3 = var3.COMPLETE;
                    if (!(var5 === var3)) {
                        _fun105173_ip = 249;
                        continue _fun105173
                    }
                case 172:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 19;
                    var3 = var6[var3];
                    var6 = var5.bind(var4)(var3);
                    var5 = var6.trackSearchFilterRemove;
                    var3 = {};
                    var8 = _closure2_slot0;
                    var3.searchContext = var8;
                    var8 = var7.searchTokenType;
                    var3.searchTokenType = var8;
                    var8 = var7.location;
                    var7 = _closure1_slot12;
                    var7 = var7.CLIENT_AUTO_ADD;
                    var7 = var8 === var7;
                    var3.isDefault = var7;
                    var3 = var5.bind(var6)(var3);
                case 249:
                    var6 = _closure1_slot9;
                    var5 = var6.setState;
                    var7 = _closure2_slot0;
                    var3 = function(arg0) { // Environment: var1
                        var2 = arg0;
                        var1 = var2.removeTag;
                        var0 = _closure3_slot0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var3 = var5.bind(var6)(var7, var3);
                    var6 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var5 = 17;
                    var3 = var3[var5];
                    var6 = var6.bind(var4)(var3);
                    var3 = var6.syncAutocompleteDebounced;
                    var3 = var3.bind(var6)(var7);
                    var6 = _closure1_slot9;
                    var3 = var6.getState;
                    var1 = function(arg0) { // Environment: var1
                        var2 = arg0;
                        var0 = {};
                        var1 = var2.getQueryString;
                        var3 = var1.bind(var2)();
                        var1 = var2.getSearchResultsQuery;
                        var1 = var1.bind(var2)();
                        var1 = var3 !== var1;
                        var0.isUpdatedSearchQuery = var1;
                        var1 = var2.isInitialSearchQuery;
                        var1 = var1.bind(var2)();
                        var0.isInitialSearchQuery = var1;
                        return var0;
                    };
                    var1 = var3.bind(var6)(var7, var1);
                    var3 = var1.isUpdatedSearchQuery;
                    var1 = var1.isInitialSearchQuery;
                    if (!var3) {
                        _fun105173_ip = 397;
                        continue _fun105173
                    }
                case 345:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var2 = var2[var5];
                    var2 = var3.bind(var4)(var2);
                    if (var1) {
                        _fun105173_ip = 382;
                        continue _fun105173
                    }
                case 365:
                    var3 = var2.fetchInitialMessagesDebounced;
                    var1 = _closure2_slot0;
                    var1 = var3.bind(var2)(var1);
                    _fun105173_ip = 397;
                    continue _fun105173;
                case 382:
                    var1 = var2.fetchInitialMessages;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                case 397:
                    var0 = undefined;
                    return var0;
            }
        };
        var8 = var6.bind(var13)(var2, var4);
        var4 = var13.useMemo;
        var2 = new Array(3);
        var2[0] = var5;
        var2[1] = var15;
        var2[2] = var1;
        var1 = function() { // Environment: var0
            var0 = function() { // Environment: var0
                _fun105178: for (var _fun105178_ip = 0;;) switch (_fun105178_ip) {
                    case 0:
                        var1 = _closure2_slot1;
                        var0 = undefined;
                        var1 = var1.bind(var0)();
                        var1 = _closure2_slot4;
                        if (!var1) {
                            _fun105178_ip = 185;
                            continue _fun105178
                        }
                    case 25:
                        var7 = _closure1_slot9;
                        var6 = var7.getState;
                        var5 = _closure2_slot0;
                        var4 = function(arg0) { // Environment: var2
                            var2 = arg0;
                            var0 = {};
                            var1 = var2.getPrefixTag;
                            var1 = var1.bind(var2)();
                            var0.prefixTag = var1;
                            var1 = var2.getTextInputValue;
                            var1 = var1.bind(var2)();
                            var0.textInputValue = var1;
                            return var0;
                        };
                        var4 = var6.bind(var7)(var5, var4);
                        var7 = var4.prefixTag;
                        var4 = var4.textInputValue;
                        var _closure4_slot0 = var4;
                        var4 = null;
                        if (!(var4 != var7)) {
                            _fun105178_ip = 187;
                            continue _fun105178
                        }
                    case 77:
                        var5 = _closure1_slot9;
                        var4 = var5.setState;
                        var3 = _closure2_slot0;
                        var2 = function(arg0) { // Environment: var2
                            var2 = arg0;
                            var1 = var2.setTextInputValue;
                            var0 = _closure1_slot10;
                            var0 = var1.bind(var2)(var0);
                            var1 = var2.addTag;
                            var0 = {};
                            var3 = _closure1_slot11;
                            var3 = var3.ANSWER;
                            var0.type = var3;
                            var3 = _closure4_slot0;
                            var0.text = var3;
                            var0 = var1.bind(var2)(var0);
                            var0 = undefined;
                            return var0;
                        };
                        var2 = var4.bind(var5)(var3, var2);
                        var2 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var1 = 19;
                        var1 = var4[var1];
                        var6 = var2.bind(var0)(var1);
                        var5 = var6.trackSearchFilterAdd;
                        var1 = {};
                        var1.searchContext = var3;
                        var8 = var7.searchTokenType;
                        var1.searchTokenType = var8;
                        var7 = var7.location;
                        var1.location = var7;
                        var1 = var5.bind(var6)(var1);
                        var1 = 17;
                        var1 = var4[var1];
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.fetchInitialMessages;
                        var1 = var1.bind(var2)(var3);
                    case 185:
                        return var0;
                    case 187:
                        return var0;
                }
            };
            return var0;
        };
        var6 = var4.bind(var13)(var1, var2);
        var2 = _closure1_slot0;
        var16 = _closure1_slot2;
        var5 = 15;
        var1 = var16[var5];
        var11 = var2.bind(var3)(var1);
        var1 = var11.useSharedValue;
        var4 = false;
        var1 = var1.bind(var11)(var4);
        var _closure2_slot5 = var1;
        var5 = var16[var5];
        var14 = var2.bind(var3)(var5);
        var11 = var14.useAnimatedStyle;
        var5 = function() {
            _fun105181: for (var _fun105181_ip = 0;;) switch (_fun105181_ip) {
                case 0:
                    var0 = {};
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 20;
                    var2 = var4[var2];
                    var6 = undefined;
                    var4 = var3.bind(var6)(var2);
                    var3 = var4.withSpring;
                    var5 = _closure2_slot5;
                    var2 = var5.get;
                    var5 = var2.bind(var5)();
                    var2 = 0;
                    if (!var5) {
                        _fun105181_ip = 56;
                        continue _fun105181
                    }
                case 53:
                    var2 = 1;
                case 56:
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 21;
                    var1 = var7[var1];
                    var1 = var5.bind(var6)(var1);
                    var1 = var1.springStandard;
                    var1 = var3.bind(var4)(var2, var1);
                    var0.opacity = var1;
                    return var0;
            }
        };
        var18 = {};
        var19 = 20;
        var19 = var16[var19];
        var19 = var2.bind(var3)(var19);
        var19 = var19.withSpring;
        var18.withSpring = var19;
        var18.gradientVisible = var1;
        var19 = 21;
        var19 = var16[var19];
        var19 = var2.bind(var3)(var19);
        var19 = var19.springStandard;
        var18.springStandard = var19;
        var5.__closure = var18;
        var18 = 14270272447339.0;
        var5.__workletHash = var18;
        var18 = _closure1_slot19;
        var5.__initData = var18;
        var18 = var11.bind(var14)(var5);
        var11 = var13.useCallback;
        var5 = new Array(1);
        var5[0] = var1;
        var1 = function(arg0) { // Environment: var0
            var2 = _closure2_slot5;
            var1 = var2.set;
            var0 = global;
            var4 = var0.Math;
            var3 = var4.round;
            var0 = arg0;
            var0 = var0.nativeEvent;
            var0 = var0.contentOffset;
            var0 = var0.x;
            var3 = var3.bind(var4)(var0);
            var0 = 5;
            var0 = var3 > var0;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var5 = var11.bind(var13)(var1, var5);
        var1 = 22;
        var1 = var16[var1];
        var11 = var2.bind(var3)(var1);
        var2 = var11.useToken;
        var14 = _closure1_slot1;
        var1 = 12;
        var1 = var16[var1];
        var1 = var14.bind(var3)(var1);
        var1 = var1.colors;
        var1 = var1.BACKGROUND_BASE_LOWEST;
        var1 = var2.bind(var11)(var1);
        var _closure2_slot6 = var1;
        var11 = var13.useMemo;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() { // Environment: var0
            var3 = _closure2_slot6;
            var0 = new Array(2);
            var0[0] = var3;
            var4 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 23;
            var1 = var2[var1];
            var2 = undefined;
            var1 = var4.bind(var2)(var1);
            var3 = var1.bind(var2)(var3);
            var2 = var3.alpha;
            var1 = 0;
            var2 = var2.bind(var3)(var1);
            var1 = var2.hex;
            var1 = var1.bind(var2)();
            var0[1] = var1;
            return var0;
        };
        var19 = var11.bind(var13)(var1, var2);
        var2 = _closure1_slot9;
        var1 = var2.getState;
        var0 = function(arg0) { // Environment: var0
            var1 = arg0;
            var0 = var1.getTextInputValue;
            var0 = var0.bind(var1)();
            return var0;
        };
        var11 = var1.bind(var2)(var15, var0);
        var2 = _closure1_slot15;
        var0 = 24;
        var0 = var16[var0];
        var1 = var14.bind(var3)(var0);
        var0 = {};
        var0.ref = var12;
        var0.defaultValue = var11;
        var11 = var17.searchBar;
        var0.style = var11;
        var0.tags = var10;
        var12 = _closure1_slot16;
        var11 = _closure1_slot4;
        var10 = {};
        var13 = var17.icon;
        var10.style = var13;
        var13 = 25;
        var13 = var16[var13];
        var14 = var14.bind(var3)(var13);
        var13 = {};
        var13.searchContext = var15;
        var14 = var2.bind(var3)(var14, var13);
        var13 = new Array(2);
        var13[0] = var14;
        var14 = {};
        var15 = var17.gradientContainer;
        var14.style = var15;
        var16 = _closure1_slot18;
        var15 = {};
        var20 = _closure1_slot13;
        var21 = var20.START;
        var15.start = var21;
        var20 = var20.END;
        var15.end = var20;
        var15.colors = var19;
        var19 = var17.gradient;
        var17 = new Array(2);
        var17[0] = var19;
        var17[1] = var18;
        var15.style = var17;
        var17 = 'none';
        var15.pointerEvents = var17;
        var15 = var2.bind(var3)(var16, var15);
        var14.children = var15;
        var14 = var2.bind(var3)(var11, var14);
        var13[1] = var14;
        var10.children = var13;
        var10 = var12.bind(var3)(var11, var10);
        var0.icon = var10;
        var0.onChangeText = var9;
        var0.onRemove = var8;
        var0.placeholder = var7;
        var0.onSubmitEditing = var6;
        var0.onScroll = var5;
        var5 = true;
        var0.horizontal = var5;
        var0.autoClearInputOnTagAdd = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var3 = var3.bind(var6)(var1);
    var1 = var6.memo;
    var1 = var1.bind(var6)(var3);
    var3 = 26;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/search/native/components/layout/SearchBar.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1372, 1410, 3100, 1621, 8999, 8935, 8934, 660, 33, 1297, 671, 1234, 4794, 3720, 4098, 11694, 3160, 8998, 4081, 4087, 3151, 669, 8164, 13726, 2]);