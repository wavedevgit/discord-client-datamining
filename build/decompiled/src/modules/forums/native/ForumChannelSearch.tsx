// modules/forums/native/ForumChannelSearch.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var6;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var3);
    var0 = 0;
    var4 = var6[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var7 = var3.bind(var0)(var4);
    var _closure1_slot3 = var7;
    var3 = 1;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var6[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var11 = var3.Fonts;
    var3 = 4;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var6[var3];
    var8 = var5.bind(var0)(var3);
    var4 = var8.createStyles;
    var3 = {};
    var9 = {
        'flexGrow': 1,
        'marginLeft': 8
    };
    var3.inputContainer = var9;
    var12 = {};
    var9 = 6;
    var13 = var6[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.unsafe_rawColors;
    var13 = var13.TRANSPARENT;
    var12.backgroundColor = var13;
    var13 = 16;
    var12.paddingLeft = var13;
    var3.cancelButton = var12;
    var12 = 7;
    var12 = var6[var12];
    var12 = var10.bind(var0)(var12);
    var11 = var11.PRIMARY_SEMIBOLD;
    var9 = var6[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var10 = var9.INTERACTIVE_TEXT_ACTIVE;
    var9 = 14;
    var9 = var12.bind(var0)(var11, var10, var9);
    var3.cancelButtonText = var9;
    var3 = var4.bind(var8)(var3);
    var _closure1_slot7 = var3;
    var4 = var7.memo;
    var3 = function(arg0) { // Environment: var1
        _fun72219: for (var _fun72219_ip = 0;;) switch (_fun72219_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.channelId;
                var _closure2_slot0 = var3;
                var0 = _closure1_slot7;
                var4 = undefined;
                var6 = var0.bind(var4)();
                var1 = _closure1_slot1;
                var8 = _closure1_slot2;
                var0 = 8;
                var0 = var8[var0];
                var0 = var1.bind(var4)(var0);
                var9 = var0.bind(var4)();
                var _closure2_slot1 = var9;
                var2 = _closure1_slot0;
                var0 = 9;
                var0 = var8[var0];
                var1 = var2.bind(var4)(var0);
                var0 = var1.useRoute;
                var0 = var0.bind(var1)();
                var _closure2_slot2 = var0;
                var1 = 10;
                var1 = var8[var1];
                var2 = var2.bind(var4)(var1);
                var1 = var2.useCanSearchForumPostsByChannelId;
                var1 = var1.bind(var2)(var3);
                var8 = _closure1_slot3;
                var3 = var8.useEffect;
                var2 = new Array(2);
                var2[0] = var9;
                var2[1] = var0;
                var0 = function() { // Environment: var5
                    var0 = function() { // Environment: var0
                        _fun72221: for (var _fun72221_ip = 0;;) switch (_fun72221_ip) {
                            case 0:
                                var2 = _closure2_slot1;
                                var1 = null;
                                if (!(var1 != var2)) {
                                    _fun72221_ip = 69;
                                    continue _fun72221
                                }
                            case 13:
                                var2 = _closure2_slot1;
                                var1 = var2.setOptions;
                                var5 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var3 = 11;
                                var4 = var4[var3];
                                var3 = undefined;
                                var4 = var5.bind(var3)(var4);
                                var3 = var4.getDefaultChannelStackHeaderProps;
                                var0 = _closure2_slot2;
                                var0 = var3.bind(var4)(var2, var0);
                                var0 = var1.bind(var2)(var0);
                            case 69:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    return var0;
                };
                var0 = var3.bind(var8)(var0, var2);
                var0 = null;
                if (!var1) {
                    _fun72219_ip = 266;
                    continue _fun72219
                }
            case 147:
                var3 = _closure1_slot6;
                var2 = _closure1_slot1;
                var11 = _closure1_slot2;
                var1 = 12;
                var1 = var11[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var8 = var6.cancelButton;
                var1.style = var8;
                var10 = _closure1_slot0;
                var7 = 13;
                var8 = var11[var7];
                var8 = var10.bind(var4)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var7 = var11[var7];
                var7 = var10.bind(var4)(var7);
                var7 = var7.t;
                var7 = var7["ETE/oC"];
                var7 = var8.bind(var9)(var7);
                var1.text = var7;
                var6 = var6.cancelButtonText;
                var1.textStyle = var6;
                var5 = function() {
                    _fun72222: for (var _fun72222_ip = 0;;) switch (_fun72222_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            var3 = null;
                            if (!(var3 != var1)) {
                                _fun72222_ip = 54;
                                continue _fun72222
                            }
                        case 13:
                            var4 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 14;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var4.bind(var1)(var2);
                            var1 = var2.updateForumSearchQuery;
                            var0 = _closure2_slot0;
                            var0 = var1.bind(var2)(var0, var3);
                        case 54:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1.onPress = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 266:
                return var0;
        }
    };
    var3 = var4.bind(var7)(var3);
    var4 = var7.memo;
    var1 = function(arg0) { // Environment: var1
        _fun72223: for (var _fun72223_ip = 0;;) switch (_fun72223_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.channelId;
                var _closure2_slot0 = var0;
                var2 = var1.guildId;
                var _closure2_slot1 = var2;
                var9 = var1.placeholder;
                var1 = _closure1_slot7;
                var4 = undefined;
                var5 = var1.bind(var4)();
                var3 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 10;
                var1 = var6[var1];
                var2 = var3.bind(var4)(var1);
                var1 = var2.useCanSearchForumPostsByChannelId;
                var1 = var1.bind(var2)(var0);
                var2 = 15;
                var2 = var6[var2];
                var8 = var3.bind(var4)(var2);
                var6 = var8.useStateFromStores;
                var2 = _closure1_slot5;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = new Array(1);
                var2[0] = var0;
                var0 = function() { // Environment: var7
                    _fun72224: for (var _fun72224_ip = 0;;) switch (_fun72224_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var0 = null;
                            var2 = var0 != var2;
                            if (!var2) {
                                _fun72224_ip = 38;
                                continue _fun72224
                            }
                        case 16:
                            var3 = _closure1_slot5;
                            var2 = var3.getSearchQuery;
                            var1 = _closure2_slot0;
                            var0 = var2.bind(var3)(var1);
                        case 38:
                            return var0;
                    }
                };
                var8 = var6.bind(var8)(var3, var0, var2);
                var11 = null;
                var0 = null;
                if (!var1) {
                    _fun72223_ip = 336;
                    continue _fun72223
                }
            case 134:
                var1 = var11 != var8;
                var0 = null;
                if (!var1) {
                    _fun72223_ip = 336;
                    continue _fun72223
                }
            case 146:
                var3 = _closure1_slot6;
                var2 = _closure1_slot4;
                var1 = {};
                var5 = var5.inputContainer;
                var1.style = var5;
                var6 = _closure1_slot0;
                var12 = _closure1_slot2;
                var5 = 16;
                var5 = var12[var5];
                var5 = var6.bind(var4)(var5);
                var6 = var5.SearchField;
                var5 = {};
                var12 = 'sm';
                var5.size = var12;
                var5.defaultValue = var8;
                var12 = function arg0() {
                    _fun72225: for (var _fun72225_ip = 0;;) switch (_fun72225_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun72225_ip = 57;
                                continue _fun72225
                            }
                        case 13:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 14;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.updateForumSearchQuery;
                            var1 = _closure2_slot0;
                            var0 = arg0;
                            var0 = var2.bind(var3)(var1, var0);
                        case 57:
                            var0 = undefined;
                            return var0;
                    }
                };
                var5.onChange = var12;
                if (!(var11 == var9)) {
                    _fun72223_ip = 280;
                    continue _fun72223
                }
            case 223:
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var10 = 13;
                var11 = var14[var10];
                var11 = var13.bind(var4)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                var10 = var14[var10];
                var10 = var13.bind(var4)(var10);
                var10 = var10.t;
                var10 = var10.Iy2gnS;
                var9 = var11.bind(var12)(var10);
            case 280:
                var5.placeholder = var9;
                var9 = var8.length;
                var8 = 0;
                var8 = var8 === var9;
                var5.autoFocus = var8;
                var7 = function() {
                    _fun72226: for (var _fun72226_ip = 0;;) switch (_fun72226_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var2 = null;
                            var1 = var2 != var1;
                            if (!var1) {
                                _fun72226_ip = 24;
                                continue _fun72226
                            }
                        case 16:
                            var3 = _closure2_slot0;
                            var1 = var2 != var3;
                        case 24:
                            if (!var1) {
                                _fun72226_ip = 81;
                                continue _fun72226
                            }
                        case 27:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 17;
                            var3 = var3[var1];
                            var1 = undefined;
                            var4 = var4.bind(var1)(var3);
                            var3 = var4.trackForumSearchCleared;
                            var1 = {};
                            var5 = _closure2_slot1;
                            var1.guildId = var5;
                            var5 = _closure2_slot0;
                            var1.channelId = var5;
                            var1 = var3.bind(var4)(var1);
                        case 81:
                            var1 = _closure2_slot0;
                            if (!(var2 != var1)) {
                                _fun72226_ip = 134;
                                continue _fun72226
                            }
                        case 89:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 14;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.updateForumSearchQuery;
                            var1 = _closure2_slot0;
                            var0 = '';
                            var0 = var2.bind(var3)(var1, var0);
                        case 134:
                            var0 = undefined;
                            return var0;
                    }
                };
                var5.onClear = var7;
                var7 = false;
                var5.grow = var7;
                var5 = var3.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 336:
                return var0;
        }
    };
    var1 = var4.bind(var7)(var1);
    var4 = 18;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/forums/native/ForumChannelSearch.tsx';
    var4 = var5.bind(var6)(var4);
    var2.ForumChannelCloseSearchButton = var3;
    var2.ForumChannelSearchInput = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 6494, 483, 33, 1297, 671, 4683, 9030, 1470, 9031, 8928, 4876, 1234, 8945, 566, 7037, 6493, 2]);