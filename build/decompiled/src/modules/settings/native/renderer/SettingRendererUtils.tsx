// modules/settings/native/renderer/SettingRendererUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var7;
    var4 = function arg0() {
        _fun80182: for (var _fun80182_ip = 0;;) switch (_fun80182_ip) {
            case 0:
                var2 = arg0;
                var3 = 'string';
                var1 = typeof var2;
                var0 = var2;
                if (!(var3 !== var1)) {
                    _fun80182_ip = 23;
                    continue _fun80182
                }
            case 17:
                var1 = undefined;
                var0 = var2.bind(var1)();
            case 23:
                return var0;
        }
    };
    var _closure1_slot7 = var4;
    var3 = function arg0() {
        var8 = arg0;
        var3 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 7;
        var0 = var5[var0];
        var2 = undefined;
        var0 = var3.bind(var2)(var0);
        var0 = var0.SETTING_RENDERER_CONFIG;
        var0 = var0[var8];
        var4 = _closure1_slot1;
        var3 = 8;
        var3 = var5[var3];
        var5 = var4.bind(var2)(var3);
        var4 = var0.title;
        var3 = null;
        var4 = var3 != var4;
        var3 = global;
        var3 = var3.HermesInternal;
        var7 = var3.concat;
        var6 = 'Setting ';
        var3 = ' is missing a title.';
        var3 = var7.bind(var6)(var8, var3);
        var3 = var5.bind(var2)(var4, var3);
        var1 = _closure1_slot7;
        var0 = var0.title;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot8 = var3;
    var0 = function arg0() {
        _fun80184: for (var _fun80184_ip = 0;;) switch (_fun80184_ip) {
            case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 7;
                var2 = var2[var0];
                var0 = undefined;
                var0 = var3.bind(var0)(var2);
                var2 = var0.SETTING_RENDERER_CONFIG;
                var0 = arg0;
                var0 = var2[var0];
                var2 = var0.type;
                var3 = _closure1_slot4;
                var3 = var3.RADIO;
                if (!(var3 !== var2)) {
                    _fun80184_ip = 92;
                    continue _fun80184
                }
            case 57:
                var3 = _closure1_slot4;
                var3 = var3.VOLUME_SLIDER;
                if (!(var3 !== var2)) {
                    _fun80184_ip = 92;
                    continue _fun80184
                }
            case 71:
                var1 = _closure1_slot4;
                var1 = var1.SLIDER;
                if (!(var1 !== var2)) {
                    _fun80184_ip = 92;
                    continue _fun80184
                }
            case 85:
                var0 = var0.IconComponent;
                return var0;
            case 92:
                var0 = null;
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var0 = function arg0() {
        var2 = _closure1_slot5;
        var1 = var2.has;
        var0 = arg0;
        var0 = var0.type;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot10 = var0;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var5);
    var0 = 0;
    var5 = var7[var0];
    var0 = undefined;
    var5 = var6.bind(var0)(var5);
    var8 = var5.ListItemType;
    var _closure1_slot3 = var8;
    var8 = var5.NodeType;
    var _closure1_slot4 = var8;
    var5 = var5.SUPPORTED_SEARCH_RESULT_NO_PARENT_RENDERER_TYPES;
    var _closure1_slot5 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var5 = var5.AnalyticsPages;
    var _closure1_slot6 = var5;
    var5 = 11;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/settings/native/renderer/SettingRendererUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function arg0() {
        _fun80186: for (var _fun80186_ip = 0;;) switch (_fun80186_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.navigation;
                var _closure2_slot0 = var2;
                var2 = var1.screen;
                var _closure2_slot1 = var2;
                var2 = var1.preNavigationAction;
                var1 = function() {
                    _fun80187: for (var _fun80187_ip = 0;;) switch (_fun80187_ip) {
                        case 0:
                            var3 = function() {
                                var2 = _closure1_slot1;
                                var5 = _closure1_slot2;
                                var0 = 2;
                                var1 = var5[var0];
                                var0 = undefined;
                                var6 = var2.bind(var0)(var1);
                                var4 = var6.setSection;
                                var1 = _closure2_slot1;
                                var3 = var1.route;
                                var3 = var4.bind(var6)(var3);
                                var4 = _closure1_slot0;
                                var3 = 3;
                                var3 = var5[var3];
                                var5 = var4.bind(var0)(var3);
                                var4 = var5.trackUserSettingsPaneViewed;
                                var3 = {};
                                var6 = var1.route;
                                var3.destinationPane = var6;
                                var6 = {};
                                var7 = _closure1_slot6;
                                var7 = var7.USER_SETTINGS;
                                var6.page = var7;
                                var3.source = var6;
                                var3 = var4.bind(var5)(var3);
                                var3 = _closure2_slot0;
                                var2 = var3.navigate;
                                var1 = var1.route;
                                var1 = var2.bind(var3)(var1);
                                return var0;
                            };
                            var _closure3_slot0 = var3;
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var0 = 4;
                            var4 = var4[var0];
                            var0 = undefined;
                            var5 = var5.bind(var0)(var4);
                            var4 = var5.getKeyboardIsOpen;
                            var4 = var4.bind(var5)();
                            if (!var4) {
                                _fun80187_ip = 84;
                                continue _fun80187
                            }
                        case 51:
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var4 = 5;
                            var4 = var6[var4];
                            var5 = var5.bind(var0)(var4);
                            var4 = var5.isIOS;
                            var4 = var4.bind(var5)();
                            if (var4) {
                                _fun80187_ip = 90;
                                continue _fun80187
                            }
                        case 84:
                            var3 = var3.bind(var0)();
                            _fun80187_ip = 144;
                            continue _fun80187;
                        case 90:
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var2 = 6;
                            var2 = var4[var2];
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.dismissGlobalKeyboard;
                            var2 = var2.bind(var3)();
                            var2 = global;
                            var3 = var2.setTimeout;
                            var2 = function() { // Environment: var1
                                var1 = _closure3_slot0;
                                var0 = undefined;
                                var1 = var1.bind(var0)();
                                return var0;
                            };
                            var1 = 100;
                            var1 = var3.bind(var0)(var2, var1);
                        case 144:
                            return var0;
                    }
                };
                var0 = null;
                var4 = var0 == var2;
                var0 = undefined;
                var3 = undefined;
                if (var4) {
                    _fun80186_ip = 56;
                    continue _fun80186
                }
            case 51:
                var3 = var2.bind(var0)(var1);
            case 56:
                var2 = false;
                if (!(var2 !== var3)) {
                    _fun80186_ip = 66;
                    continue _fun80186
                }
            case 62:
                var1 = var1.bind(var0)();
            case 66:
                return var0;
        }
    };
    var2.onRouteSettingOnPress = var5;
    var2.transformSettingTitle = var4;
    var2.getSettingTitle = var3;
    var3 = function() {
        var0 = global;
        var3 = var0.Object;
        var2 = var3.entries;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var0 = 7;
        var4 = var4[var0];
        var0 = undefined;
        var0 = var5.bind(var0)(var4);
        var0 = var0.SETTING_RENDERER_CONFIG;
        var3 = var2.bind(var3)(var0);
        var0 = new Array(0);
        var _closure2_slot0 = var0;
        var2 = var3.forEach;
        var1 = function(arg0) { // Environment: var1
            _fun80191: for (var _fun80191_ip = 0;;) switch (_fun80191_ip) {
                case 0:
                    var5 = arg0;
                    var1 = var5[Symbol.iterator];
                    var5 = var1().next;
                    var2 = var5().value;
                    var3 = var1;
                    var0 = undefined;
                    var3 = var3 === var0;
                    var4 = undefined;
                    if (var3) {
                        _fun80191_ip = 27;
                        continue _fun80191
                    }
                case 24:
                    var4 = var2;
                case 27:
                    var2 = undefined;
                    if (var3) {
                        _fun80191_ip = 57;
                        continue _fun80191
                    }
                case 32:
                    var6 = var5().value;
                    var5 = var1;
                    var5 = var5 === var0;
                    var2 = undefined;
                    var3 = var5;
                    if (var5) {
                        _fun80191_ip = 57;
                        continue _fun80191
                    }
                case 51:
                    var2 = var6;
                    var3 = var5;
                case 57:
                    if (var3) {
                        _fun80191_ip = 63;
                        continue _fun80191
                    }
                case 60:
                    var1.return();
                case 63:
                    var1 = var2.unsearchable;
                    var6 = var2.title;
                    var5 = var2.additionalSearchTerms;
                    if (var1) {
                        _fun80191_ip = 89;
                        continue _fun80191
                    }
                case 83:
                    var2 = null;
                    var1 = var2 == var6;
                case 89:
                    if (var1) {
                        _fun80191_ip = 194;
                        continue _fun80191
                    }
                case 92:
                    var3 = _closure2_slot0;
                    var2 = var3.push;
                    var1 = new Array(2);
                    var1[0] = var4;
                    var4 = _closure1_slot7;
                    var6 = var4.bind(var0)(var6);
                    var4 = new Array(1);
                    var4[0] = var6;
                    var6 = null;
                    if (!(var6 != var5)) {
                        _fun80191_ip = 168;
                        continue _fun80191
                    }
                case 138:
                    var6 = global;
                    var7 = var6.Array;
                    var6 = var7.isArray;
                    var7 = var6.bind(var7)(var5);
                    var6 = var5;
                    if (var7) {
                        _fun80191_ip = 166;
                        continue _fun80191
                    }
                case 162:
                    var6 = var5.bind(var0)();
                case 166:
                    _fun80191_ip = 172;
                    continue _fun80191;
                case 168:
                    var6 = new Array(0);
                case 172:
                    var8 = 1;
                    var10 = var4;
                    var9 = var6;
                    var5 = arraySpread(var10, var9, var8);
                    var1[1] = var4;
                    var1 = var2.bind(var3)(var1);
                case 194:
                    return var0;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.getSettingSearchableTitles = var3;
    var3 = function() {
        var0 = new Array(0);
        var _closure2_slot0 = var0;
        var2 = global;
        var3 = var2.Set;
        var4 = var3.prototype;
        var4 = Object.create(var4, {
            constructor: {
                value: var3
            }
        });
        var8 = var4;
        var3 = new var8[var3](var7);
        var3 = var3 instanceof Object ? var3 : var4;
        var _closure2_slot1 = var3;
        var4 = var2.Object;
        var3 = var4.entries;
        var6 = _closure1_slot0;
        var5 = _closure1_slot2;
        var2 = 7;
        var5 = var5[var2];
        var2 = undefined;
        var2 = var6.bind(var2)(var5);
        var2 = var2.SETTING_RENDERER_CONFIG;
        var3 = var3.bind(var4)(var2);
        var2 = var3.forEach;
        var1 = function(arg0) { // Environment: var1
            _fun80193: for (var _fun80193_ip = 0;;) switch (_fun80193_ip) {
                case 0:
                    var4 = arg0;
                    var2 = var4[Symbol.iterator];
                    var4 = var2().next;
                    var1 = var4().value;
                    var3 = var2;
                    var0 = undefined;
                    var3 = var3 === var0;
                    var6 = undefined;
                    if (var3) {
                        _fun80193_ip = 27;
                        continue _fun80193
                    }
                case 24:
                    var6 = var1;
                case 27:
                    var1 = undefined;
                    if (var3) {
                        _fun80193_ip = 57;
                        continue _fun80193
                    }
                case 32:
                    var5 = var4().value;
                    var4 = var2;
                    var4 = var4 === var0;
                    var1 = undefined;
                    var3 = var4;
                    if (var4) {
                        _fun80193_ip = 57;
                        continue _fun80193
                    }
                case 51:
                    var1 = var5;
                    var3 = var4;
                case 57:
                    if (var3) {
                        _fun80193_ip = 63;
                        continue _fun80193
                    }
                case 60:
                    var2.return();
                case 63:
                    var3 = var1.type;
                    var2 = _closure1_slot4;
                    var2 = var2.ROUTE;
                    if (!(var3 === var2)) {
                        _fun80193_ip = 175;
                        continue _fun80193
                    }
                case 85:
                    var5 = _closure2_slot1;
                    var4 = var5.has;
                    var3 = var1.screen;
                    var3 = var3.route;
                    var3 = var4.bind(var5)(var3);
                    if (var3) {
                        _fun80193_ip = 175;
                        continue _fun80193
                    }
                case 117:
                    var5 = _closure2_slot0;
                    var4 = var5.push;
                    var3 = new Array(2);
                    var3[0] = var6;
                    var6 = var1.screen;
                    var3[1] = var6;
                    var3 = var4.bind(var5)(var3);
                    var3 = _closure2_slot1;
                    var2 = var3.add;
                    var1 = var1.screen;
                    var1 = var1.route;
                    var1 = var2.bind(var3)(var1);
                case 175:
                    return var0;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.getSettingScreens = var3;
    var3 = function arg0, arg1() {
        var0 = arg1;
        var _closure2_slot0 = var0;
        var0 = new Array(0);
        var _closure2_slot1 = var0;
        var2 = arg0;
        var3 = var2.sections;
        var2 = var3.forEach;
        var1 = function(arg0) { // Environment: var1
            _fun80195: for (var _fun80195_ip = 0;;) switch (_fun80195_ip) {
                case 0:
                    var3 = arg0;
                    var4 = var3.settings;
                    var2 = var4.filter;
                    var0 = function(arg0) { // Environment: var1
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 9;
                        var1 = var1[var0];
                        var0 = undefined;
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.isBlocked;
                        var1 = _closure2_slot0;
                        var0 = arg0;
                        var0 = var2.bind(var3)(var0, var1);
                        var0 = !var0;
                        return var0;
                    };
                    var5 = var2.bind(var4)(var0);
                    var _closure3_slot0 = var5;
                    var2 = var5.length;
                    var0 = 0;
                    if (!(var0 !== var2)) {
                        _fun80195_ip = 157;
                        continue _fun80195
                    }
                case 43:
                    var7 = _closure2_slot1;
                    var6 = var7.push;
                    var2 = {};
                    var8 = _closure1_slot3;
                    var8 = var8.SECTION_HEADER;
                    var2.type = var8;
                    var8 = var3.label;
                    var2.label = var8;
                    var2 = var6.bind(var7)(var2);
                    var2 = var5.forEach;
                    var1 = function(arg0, arg1) { // Environment: var1
                        var6 = arg0;
                        var5 = arg1;
                        var3 = _closure2_slot1;
                        var2 = var3.push;
                        var1 = {};
                        var4 = _closure1_slot3;
                        var4 = var4.SECTION_ROW;
                        var1.type = var4;
                        var1.setting = var6;
                        var7 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var0 = 7;
                        var4 = var4[var0];
                        var0 = undefined;
                        var4 = var7.bind(var0)(var4);
                        var4 = var4.SETTING_RENDERER_CONFIG;
                        var4 = var4[var6];
                        var1.settingData = var4;
                        var4 = 0;
                        var4 = var4 === var5;
                        var1.start = var4;
                        var4 = _closure3_slot0;
                        var6 = var4.length;
                        var4 = 1;
                        var4 = var6 - var4;
                        var4 = var5 === var4;
                        var1.end = var4;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var1 = var2.bind(var5)(var1);
                    var2 = var3.subLabel;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun80195_ip = 157;
                        continue _fun80195
                    }
                case 117:
                    var2 = _closure2_slot1;
                    var1 = var2.push;
                    var0 = {};
                    var4 = _closure1_slot3;
                    var4 = var4.SECTION_FOOTER;
                    var0.type = var4;
                    var3 = var3.subLabel;
                    var0.label = var3;
                    var0 = var1.bind(var2)(var0);
                case 157:
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.toSettingListItems = var3;
    var3 = function arg0() {
        var3 = arg0;
        var4 = new Array(0);
        var _closure2_slot0 = var4;
        var2 = var3.forEach;
        var0 = function(arg0) { // Environment: var1
            _fun80199: for (var _fun80199_ip = 0;;) switch (_fun80199_ip) {
                case 0:
                    var5 = arg0;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 7;
                    var2 = var2[var0];
                    var0 = undefined;
                    var2 = var3.bind(var0)(var2);
                    var2 = var2.SETTING_RENDERER_CONFIG;
                    var6 = var2[var5];
                    var3 = var6.parent;
                    var2 = null;
                    if (!(var2 == var3)) {
                        _fun80199_ip = 98;
                        continue _fun80199
                    }
                case 49:
                    var2 = _closure1_slot10;
                    var2 = var2.bind(var0)(var6);
                    if (var2) {
                        _fun80199_ip = 63;
                        continue _fun80199
                    }
                case 61:
                    return var0;
                case 63:
                    var4 = _closure2_slot0;
                    var3 = var4.push;
                    var2 = {};
                    var2.category = var5;
                    var2.setting = var5;
                    var2.data = var6;
                    var2 = var3.bind(var4)(var2);
                    _fun80199_ip = 182;
                    continue _fun80199;
                case 98:
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 9;
                    var4 = var3[var1];
                    var6 = var2.bind(var0)(var4);
                    var4 = var6.getHighestLevelAncestor;
                    var6 = var4.bind(var6)(var5);
                    var1 = var3[var1];
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.getNearestRouteAncestorDataOrSelf;
                    var4 = var1.bind(var2)(var5);
                    var3 = _closure2_slot0;
                    var2 = var3.push;
                    var1 = {};
                    var1.category = var6;
                    var1.setting = var5;
                    var1.data = var4;
                    var1 = var2.bind(var3)(var1);
                case 182:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0);
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 10;
        var2 = var2[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.sortBy;
        var0 = function(arg0) { // Environment: var1
            var0 = arg0;
            var0 = var0.category;
            return var0;
        };
        var3 = var2.bind(var3)(var4, var0);
        var _closure2_slot1 = var3;
        var0 = new Array(0);
        var _closure2_slot2 = var0;
        var2 = global;
        var2 = var2.Set;
        var4 = var2.prototype;
        var4 = Object.create(var4, {
            constructor: {
                value: var2
            }
        });
        var7 = var4;
        var2 = new var7[var2](var6);
        var2 = var2 instanceof Object ? var2 : var4;
        var _closure2_slot3 = var2;
        var2 = var3.forEach;
        var1 = function(arg0, arg1) { // Environment: var1
            _fun80201: for (var _fun80201_ip = 0;;) switch (_fun80201_ip) {
                case 0:
                    var0 = arg0;
                    var9 = var0.category;
                    var5 = var0.setting;
                    var11 = var0.data;
                    var1 = _closure1_slot8;
                    var0 = undefined;
                    var7 = var1.bind(var0)(var5);
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 9;
                    var1 = var3[var1];
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.getBreadcrumbs;
                    var6 = var1.bind(var2)(var5);
                    var2 = _closure2_slot3;
                    var1 = var2.has;
                    var1 = var1.bind(var2)(var9);
                    var10 = !var1;
                    var1 = var2.add;
                    var1 = var1.bind(var2)(var9);
                    var3 = _closure2_slot2;
                    var2 = var3.push;
                    var1 = {};
                    var12 = _closure1_slot3;
                    var12 = var12.SETTING_SEARCH_RESULT;
                    var1.type = var12;
                    var1.settingData = var11;
                    var1.title = var7;
                    var7 = undefined;
                    if (!var10) {
                        _fun80201_ip = 143;
                        continue _fun80201
                    }
                case 134:
                    var8 = _closure1_slot9;
                    var7 = var8.bind(var0)(var9);
                case 143:
                    var1.IconComponent = var7;
                    var1.breadcrumbs = var6;
                    var1.setting = var5;
                    var5 = arg1;
                    var1.index = var5;
                    var4 = _closure2_slot1;
                    var4 = var4.length;
                    var1.total = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.getSettingListSearchResultItems = var3;
    var3 = function arg0, arg1, arg2() {
        _fun80202: for (var _fun80202_ip = 0;;) switch (_fun80202_ip) {
            case 0:
                var7 = arg0;
                var5 = arg2;
                var _closure2_slot0 = var7;
                var0 = new Array(0);
                var _closure2_slot1 = var0;
                var2 = arg1;
                if (var2) {
                    _fun80202_ip = 194;
                    continue _fun80202
                }
            case 29:
                var2 = global;
                var3 = var2.Map;
                var4 = var3.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var3
                    }
                });
                var10 = var4;
                var3 = new var10[var3](var9);
                var3 = var3 instanceof Object ? var3 : var4;
                var _closure2_slot2 = var3;
                var3 = var2.Map;
                var4 = var3.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var3
                    }
                });
                var10 = var4;
                var3 = new var10[var3](var9);
                var6 = var3 instanceof Object ? var3 : var4;
                var _closure2_slot3 = var6;
                var4 = var7.forEach;
                var3 = function(arg0) { // Environment: var1
                    _fun80203: for (var _fun80203_ip = 0;;) switch (_fun80203_ip) {
                        case 0:
                            var0 = arg0;
                            var7 = var0.setting;
                            var2 = var0.score;
                            var3 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 9;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var3.bind(var0)(var1);
                            var1 = var3.getHighestLevelAncestor;
                            var4 = var1.bind(var3)(var7);
                            var6 = var2;
                            if (!(var4 === var7)) {
                                _fun80203_ip = 72;
                                continue _fun80203
                            }
                        case 58:
                            var1 = 0.05;
                            var6 = var2 + var1;
                        case 72:
                            var3 = _closure2_slot3;
                            var2 = var3.get;
                            var3 = var2.bind(var3)(var4);
                            var2 = null;
                            var5 = var2 != var3;
                            var10 = 0;
                            if (!var5) {
                                _fun80203_ip = 103;
                                continue _fun80203
                            }
                        case 100:
                            var10 = var3;
                        case 103:
                            var8 = _closure2_slot3;
                            var5 = var8.set;
                            var3 = global;
                            var9 = var3.Math;
                            var3 = var9.max;
                            var3 = var3.bind(var9)(var10, var6);
                            var3 = var5.bind(var8)(var4, var3);
                            var5 = _closure2_slot2;
                            var3 = var5.get;
                            var3 = var3.bind(var5)(var4);
                            if (!(var2 == var3)) {
                                _fun80203_ip = 159;
                                continue _fun80203
                            }
                        case 155:
                            var3 = new Array(0);
                        case 159:
                            var5 = var3.push;
                            var2 = {};
                            var2.setting = var7;
                            var2.score = var6;
                            var2 = var5.bind(var3)(var2);
                            var2 = _closure2_slot2;
                            var1 = var2.set;
                            var1 = var1.bind(var2)(var4, var3);
                            return var0;
                    }
                };
                var3 = var4.bind(var7)(var3);
                var4 = var2.Array;
                var3 = var4.from;
                var2 = var6.entries;
                var2 = var2.bind(var6)();
                var4 = var3.bind(var4)(var2);
                var3 = var4.sort;
                var2 = function(arg0, arg1) { // Environment: var1
                    var0 = arg1;
                    var2 = 1;
                    var1 = var0[var2];
                    var0 = arg0;
                    var0 = var0[var2];
                    var0 = var1 - var0;
                    return var0;
                };
                var4 = var3.bind(var4)(var2);
                var3 = var4.map;
                var2 = function(arg0) { // Environment: var1
                    _fun80205: for (var _fun80205_ip = 0;;) switch (_fun80205_ip) {
                        case 0:
                            var0 = arg0;
                            var1 = var0[Symbol.iterator];
                            var0 = var1().next;
                            var3 = var0().value;
                            var2 = var1;
                            var0 = undefined;
                            var2 = var2 === var0;
                            if (var2) {
                                _fun80205_ip = 25;
                                continue _fun80205
                            }
                        case 22:
                            var0 = var3;
                        case 25:
                            if (var2) {
                                _fun80205_ip = 31;
                                continue _fun80205
                            }
                        case 28:
                            var1.return();
                        case 31:
                            return var0;
                    }
                };
                var3 = var3.bind(var4)(var2);
                var2 = 0;
                var _closure2_slot4 = var2;
                var2 = var3.forEach;
                var1 = function(arg0) { // Environment: var1
                    _fun80206: for (var _fun80206_ip = 0;;) switch (_fun80206_ip) {
                        case 0:
                            var3 = arg0;
                            var _closure3_slot0 = var3;
                            var2 = _closure2_slot2;
                            var1 = var2.get;
                            var3 = var1.bind(var2)(var3);
                            var1 = null;
                            if (!(var1 != var3)) {
                                _fun80206_ip = 67;
                                continue _fun80206
                            }
                        case 32:
                            var2 = var3.sort;
                            var1 = function(arg0, arg1) { // Environment: var0
                                _fun80207: for (var _fun80207_ip = 0;;) switch (_fun80207_ip) {
                                    case 0:
                                        var2 = arg0;
                                        var3 = arg1;
                                        var5 = var2.setting;
                                        var4 = _closure3_slot0;
                                        var0 = -1;
                                        if (!(var5 !== var4)) {
                                            _fun80207_ip = 65;
                                            continue _fun80207
                                        }
                                    case 29:
                                        var5 = var3.setting;
                                        var4 = _closure3_slot0;
                                        var1 = 1;
                                        if (!(var5 !== var4)) {
                                            _fun80207_ip = 62;
                                            continue _fun80207
                                        }
                                    case 46:
                                        var3 = var3.score;
                                        var2 = var2.score;
                                        var1 = var3 - var2;
                                    case 62:
                                        var0 = var1;
                                    case 65:
                                        return var0;
                                }
                            };
                            var2 = var2.bind(var3)(var1);
                            var1 = var2.forEach;
                            var0 = function(arg0, arg1) { // Environment: var0
                                _fun80208: for (var _fun80208_ip = 0;;) switch (_fun80208_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var1 = var0.setting;
                                        var4 = _closure1_slot0;
                                        var3 = _closure1_slot2;
                                        var0 = 7;
                                        var3 = var3[var0];
                                        var0 = undefined;
                                        var3 = var4.bind(var0)(var3);
                                        var3 = var3.SETTING_RENDERER_CONFIG;
                                        var4 = var3[var1];
                                        var5 = var4.parent;
                                        var3 = null;
                                        if (!(var3 == var5)) {
                                            _fun80208_ip = 72;
                                            continue _fun80208
                                        }
                                    case 55:
                                        var3 = _closure1_slot10;
                                        var3 = var3.bind(var0)(var4);
                                        var6 = var1;
                                        if (var3) {
                                            _fun80208_ip = 123;
                                            continue _fun80208
                                        }
                                    case 70:
                                        return var0;
                                    case 72:
                                        var7 = _closure1_slot1;
                                        var8 = _closure1_slot2;
                                        var3 = 9;
                                        var5 = var8[var3];
                                        var9 = var7.bind(var0)(var5);
                                        var5 = var9.getHighestLevelAncestor;
                                        var6 = var5.bind(var9)(var1);
                                        var3 = var8[var3];
                                        var7 = var7.bind(var0)(var3);
                                        var3 = var7.getNearestRouteAncestorDataOrSelf;
                                        var4 = var3.bind(var7)(var1);
                                    case 123:
                                        var3 = {};
                                        var5 = _closure1_slot3;
                                        var5 = var5.SETTING_SEARCH_RESULT;
                                        var3.type = var5;
                                        var3.settingData = var4;
                                        var4 = _closure1_slot8;
                                        var4 = var4.bind(var0)(var1);
                                        var3.title = var4;
                                        var7 = 0;
                                        var5 = arg1;
                                        var4 = undefined;
                                        if (!(var7 === var5)) {
                                            _fun80208_ip = 177;
                                            continue _fun80208
                                        }
                                    case 168:
                                        var5 = _closure1_slot9;
                                        var4 = var5.bind(var0)(var6);
                                    case 177:
                                        var3.IconComponent = var4;
                                        var4 = _closure1_slot1;
                                        var5 = _closure1_slot2;
                                        var2 = 9;
                                        var2 = var5[var2];
                                        var4 = var4.bind(var0)(var2);
                                        var2 = var4.getBreadcrumbs;
                                        var2 = var2.bind(var4)(var1);
                                        var3.breadcrumbs = var2;
                                        var3.setting = var1;
                                        var2 = _closure2_slot4;
                                        var3.index = var2;
                                        var2 = _closure2_slot0;
                                        var2 = var2.length;
                                        var3.total = var2;
                                        var2 = _closure2_slot4;
                                        var2 = var2 + 1;
                                        _closure2_slot4 = var2;
                                        var2 = _closure2_slot1;
                                        var1 = var2.push;
                                        var1 = var1.bind(var2)(var3);
                                        return var0;
                                }
                            };
                            var0 = var1.bind(var2)(var0);
                        case 67:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var2.bind(var3)(var1);
                return var0;
            case 194:
                var4 = 0;
                var6 = var4 < var5;
                var2 = 1;
                var1 = 0;
                if (!var6) {
                    _fun80202_ip = 264;
                    continue _fun80202
                }
            case 211:
                var7 = var0.push;
                var6 = {};
                var8 = _closure1_slot3;
                var8 = var8.SECTION_ROW_PLACEHOLDER;
                var6.type = var8;
                var8 = var4 === var1;
                var6.start = var8;
                var8 = var5 - var2;
                var8 = var1 === var8;
                var6.end = var8;
                var6 = var7.bind(var0)(var6);
                var1 = var1 + 1;
                if (var1 < var5) {
                    _fun80202_ip = 211;
                    continue _fun80202
                }
            case 264:
                return var0;
        }
    };
    var2.getScoredSettingListSearchResultItems = var3;
    var1 = function arg0, arg1() {
        _fun80209: for (var _fun80209_ip = 0;;) switch (_fun80209_ip) {
            case 0:
                var2 = arg1;
                var1 = arg0;
                var _closure2_slot0 = var1;
                var1 = var2.findLastIndex;
                var0 = function(arg0) { // Environment: var0
                    _fun80210: for (var _fun80210_ip = 0;;) switch (_fun80210_ip) {
                        case 0:
                            var1 = arg0;
                            var2 = var1.type;
                            var0 = _closure1_slot3;
                            var0 = var0.SECTION_ROW;
                            var0 = var2 === var0;
                            if (!var0) {
                                _fun80210_ip = 45;
                                continue _fun80210
                            }
                        case 28:
                            var2 = var1.setting;
                            var1 = _closure2_slot0;
                            var0 = var2 === var1;
                        case 45:
                            return var0;
                    }
                };
                var3 = var1.bind(var2)(var0);
                var0 = 1;
                if (!(var0 === var3)) {
                    _fun80209_ip = 41;
                    continue _fun80209
                }
            case 37:
                var0 = undefined;
                return var0;
            case 41:
                var0 = global;
                var2 = var0.Math;
                var1 = var2.max;
                var0 = 0;
                var0 = var1.bind(var2)(var0, var3);
                return var0;
        }
    };
    var2.getInitialScrollIndex = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [8997, 660, 7224, 7225, 5399, 478, 1582, 10194, 44, 11555, 22, 2]);