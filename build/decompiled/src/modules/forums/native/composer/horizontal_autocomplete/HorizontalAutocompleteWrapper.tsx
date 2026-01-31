// modules/forums/native/composer/horizontal_autocomplete/HorizontalAutocompleteWrapper.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
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
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.FlatList;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AutoCompleteResultTypes;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot6 = var3;
    var3 = {};
    var6 = 'function HorizontalAutocompleteWrapperTsx1(){const{withTiming,toValue}=this.__closure;return{opacity:withTiming(toValue)};}';
    var3.code = var6;
    var _closure1_slot7 = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/forums/native/composer/horizontal_autocomplete/HorizontalAutocompleteWrapper.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: HorizontalAutocompleteWrapper, environment: var1
        _fun74471: for (var _fun74471_ip = 0;;) switch (_fun74471_ip) {
            case 0:
                var0 = arg0;
                var10 = var0.style;
                var1 = var0.channel;
                var _closure2_slot0 = var1;
                var11 = var0.onPressAutocompleteItem;
                var _closure2_slot1 = var11;
                var7 = var0.text;
                var6 = var0.selection;
                var3 = undefined;
                var _closure2_slot5 = var3;
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 4;
                var0 = var5[var0];
                var5 = var2.bind(var3)(var0);
                var2 = var5.useHorizontalAutocompleteResults;
                var0 = {};
                var0.channel = var1;
                var0.text = var7;
                var0.selection = var6;
                var0 = var2.bind(var5)(var0);
                var7 = var0.results;
                var9 = var0.autocompleteSelectionStart;
                var _closure2_slot2 = var9;
                var0 = var0.query;
                var _closure2_slot3 = var0;
                var5 = _closure1_slot3;
                var6 = var5.useCallback;
                var2 = new Array(3);
                var2[0] = var11;
                var2[1] = var9;
                var2[2] = var0;
                var0 = function(arg0, arg1) { // Environment: var8
                    _fun74472: for (var _fun74472_ip = 0;;) switch (_fun74472_ip) {
                        case 0:
                            var1 = arg0;
                            var0 = var1.stopPropagation;
                            var0 = var0.bind(var1)();
                            var4 = _closure2_slot1;
                            var1 = _closure2_slot2;
                            var2 = null;
                            var1 = var2 != var1;
                            var3 = 0;
                            if (!var1) {
                                _fun74472_ip = 39;
                                continue _fun74472
                            }
                        case 35:
                            var3 = _closure2_slot2;
                        case 39:
                            var1 = _closure2_slot3;
                            var1 = var2 != var1;
                            var2 = '';
                            if (!var1) {
                                _fun74472_ip = 58;
                                continue _fun74472
                            }
                        case 54:
                            var2 = _closure2_slot3;
                        case 58:
                            var0 = undefined;
                            var1 = arg1;
                            var1 = var4.bind(var0)(var1, var3, var2);
                            return var0;
                    }
                };
                var0 = var6.bind(var5)(var0, var2);
                var _closure2_slot4 = var0;
                var2 = var5.useCallback;
                var6 = var1.guild_id;
                var1 = new Array(2);
                var1[0] = var6;
                var1[1] = var0;
                var0 = function(arg0) { // Environment: var8
                    _fun74473: for (var _fun74473_ip = 0;;) switch (_fun74473_ip) {
                        case 0:
                            var0 = arg0;
                            var5 = var0.item;
                            var _closure3_slot0 = var5;
                            var2 = var5.type;
                            var1 = _closure1_slot5;
                            var1 = var1.USER;
                            if (!(var1 !== var2)) {
                                _fun74473_ip = 313;
                                continue _fun74473
                            }
                        case 39:
                            var1 = _closure1_slot5;
                            var1 = var1.ROLE;
                            if (!(var1 !== var2)) {
                                _fun74473_ip = 224;
                                continue _fun74473
                            }
                        case 56:
                            var1 = _closure1_slot5;
                            var1 = var1.CHANNEL;
                            if (!(var1 !== var2)) {
                                _fun74473_ip = 156;
                                continue _fun74473
                            }
                        case 70:
                            var1 = _closure1_slot5;
                            var1 = var1.EMOJI;
                            if (!(var1 !== var2)) {
                                _fun74473_ip = 88;
                                continue _fun74473
                            }
                        case 84:
                            var1 = null;
                            return var1;
                        case 88:
                            var6 = _closure1_slot6;
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 5;
                            var1 = var3[var1];
                            var3 = undefined;
                            var1 = var2.bind(var3)(var1);
                            var2 = var1.Emoji;
                            var1 = {};
                            var10 = var1;
                            var9 = var5;
                            var7 = copyDataProperties(var10, var9);
                            var8 = function(arg0) { // Original name: onPress, environment: var4
                                var3 = _closure2_slot4;
                                var2 = _closure3_slot0;
                                var1 = undefined;
                                var0 = arg0;
                                var0 = var3.bind(var1)(var0, var2);
                                return var0;
                            };
                            var7 = 'onPress';
                            var1[var7] = var8;
                            var1 = var6.bind(var3)(var2, var1);
                            return var1;
                        case 156:
                            var6 = _closure1_slot6;
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 5;
                            var1 = var3[var1];
                            var3 = undefined;
                            var1 = var2.bind(var3)(var1);
                            var2 = var1.Channel;
                            var1 = {};
                            var10 = var1;
                            var9 = var5;
                            var7 = copyDataProperties(var10, var9);
                            var8 = function(arg0) { // Original name: onPress, environment: var4
                                var3 = _closure2_slot4;
                                var2 = _closure3_slot0;
                                var1 = undefined;
                                var0 = arg0;
                                var0 = var3.bind(var1)(var0, var2);
                                return var0;
                            };
                            var7 = 'onPress';
                            var1[var7] = var8;
                            var1 = var6.bind(var3)(var2, var1);
                            return var1;
                        case 224:
                            var6 = _closure1_slot6;
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 5;
                            var1 = var3[var1];
                            var3 = undefined;
                            var1 = var2.bind(var3)(var1);
                            var2 = var1.Role;
                            var1 = {};
                            var10 = var1;
                            var9 = var5;
                            var7 = copyDataProperties(var10, var9);
                            var7 = _closure2_slot0;
                            var8 = var7.guild_id;
                            var7 = 'guildId';
                            var1[var7] = var8;
                            var8 = function(arg0) { // Original name: onPress, environment: var4
                                var3 = _closure2_slot4;
                                var2 = _closure3_slot0;
                                var1 = undefined;
                                var0 = arg0;
                                var0 = var3.bind(var1)(var0, var2);
                                return var0;
                            };
                            var7 = 'onPress';
                            var1[var7] = var8;
                            var1 = var6.bind(var3)(var2, var1);
                            return var1;
                        case 313:
                            var3 = _closure1_slot6;
                            var1 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 5;
                            var0 = var2[var0];
                            var2 = undefined;
                            var0 = var1.bind(var2)(var0);
                            var1 = var0.User;
                            var0 = {};
                            var10 = var0;
                            var9 = var5;
                            var5 = copyDataProperties(var10, var9);
                            var5 = _closure2_slot0;
                            var6 = var5.guild_id;
                            var5 = 'guildId';
                            var0[var5] = var6;
                            var5 = function(arg0) { // Original name: onPress, environment: var4
                                var3 = _closure2_slot4;
                                var2 = _closure3_slot0;
                                var1 = undefined;
                                var0 = arg0;
                                var0 = var3.bind(var1)(var0, var2);
                                return var0;
                            };
                            var4 = 'onPress';
                            var0[var4] = var5;
                            var0 = var3.bind(var2)(var1, var0);
                            return var0;
                    }
                };
                var6 = var2.bind(var5)(var0, var1);
                var0 = var7.length;
                var12 = 0;
                var0 = var0 > var12;
                if (!var0) {
                    _fun74471_ip = 215;
                    continue _fun74471
                }
            case 212:
                var12 = 1;
            case 215:
                _closure2_slot5 = var12;
                var14 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 6;
                var1 = var5[var0];
                var9 = var14.bind(var3)(var1);
                var2 = var9.useAnimatedStyle;
                var1 = function() { // Original name: _, environment: var8
                    var0 = {};
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 7;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.withTiming;
                    var1 = _closure2_slot5;
                    var1 = var2.bind(var3)(var1);
                    var0.opacity = var1;
                    return var0;
                };
                var11 = {};
                var13 = 7;
                var13 = var5[var13];
                var13 = var14.bind(var3)(var13);
                var13 = var13.withTiming;
                var11.withTiming = var13;
                var11.toValue = var12;
                var1.__closure = var11;
                var11 = 7895652904738.0;
                var1.__workletHash = var11;
                var11 = _closure1_slot7;
                var1.__initData = var11;
                var9 = var2.bind(var9)(var1);
                var2 = _closure1_slot6;
                var1 = _closure1_slot1;
                var0 = var5[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.View;
                var0 = {};
                var5 = new Array(2);
                var5[0] = var10;
                var5[1] = var9;
                var0.style = var5;
                var5 = _closure1_slot4;
                var4 = {
                    'keyboardShouldPersistTaps': 'always',
                    'horizontal': true
                };
                var8 = function(arg0, arg1) { // Original name: keyExtractor, environment: var8
                    var0 = global;
                    var2 = var0.String;
                    var1 = undefined;
                    var0 = arg1;
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var4.keyExtractor = var8;
                var4.data = var7;
                var4.renderItem = var6;
                var4 = var2.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 660, 33, 9351, 9354, 3679, 4056, 2]);