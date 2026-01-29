// modules/devtools/native/components/screens/DevToolsDataStorageScreen.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var14 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var14;
    var _closure1_slot2 = var5;
    var0 = function(arg0) { // Original name: DevToolsPersistedStoresActionSheet, environment: var1
        var0 = arg0;
        var12 = var0.store;
        var _closure2_slot0 = var12;
        var0 = var0.close;
        var _closure2_slot1 = var0;
        var3 = _closure1_slot8;
        var8 = _closure1_slot0;
        var11 = _closure1_slot2;
        var0 = 22;
        var0 = var11[var0];
        var2 = undefined;
        var0 = var8.bind(var2)(var0);
        var1 = var0.ActionSheet;
        var0 = {};
        var6 = _closure1_slot8;
        var4 = 23;
        var4 = var11[var4];
        var4 = var8.bind(var2)(var4);
        var5 = var4.BottomSheetTitleHeader;
        var4 = {};
        var7 = var12.getName;
        var7 = var7.bind(var12)();
        var4.title = var7;
        var4 = var6.bind(var2)(var5, var4);
        var0.header = var4;
        var6 = _closure1_slot8;
        var7 = 24;
        var4 = var11[var7];
        var4 = var8.bind(var2)(var4);
        var4 = var4.ActionSheetRow;
        var5 = var4.Group;
        var4 = {};
        var9 = _closure1_slot8;
        var7 = var11[var7];
        var7 = var8.bind(var2)(var7);
        var8 = var7.ActionSheetRow;
        var7 = {
            'variant': 'danger',
            'label': 'Clear persisted store',
            'subLabel': 'App restart required to re-init the cleared store'
        };
        var10 = function() { // Original name: onPress, environment: var10
            var2 = _closure2_slot0;
            var0 = var2.clear;
            var0 = var0.bind(var2)();
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var0 = 10;
            var2 = var2[var0];
            var0 = undefined;
            var4 = var3.bind(var0)(var2);
            var3 = var4.open;
            var2 = {
                'key': 'DevToolsPersistedStoresActionSheet',
                'content': 'Store cleared from persisted storage'
            };
            var2 = var3.bind(var4)(var2);
            var1 = _closure2_slot1;
            var1 = var1.bind(var0)();
            return var0;
        };
        var7.onPress = var10;
        var7 = var9.bind(var2)(var8, var7);
        var4.children = var7;
        var4 = var6.bind(var2)(var5, var4);
        var0.children = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var _closure1_slot15 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var9 = 0;
    var3 = var5[var9];
    var0 = undefined;
    var3 = var14.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var8 = 1;
    var6 = var5[var8];
    var3 = arg3;
    var10 = var3.bind(var0)(var6);
    var _closure1_slot4 = var10;
    var7 = 2;
    var3 = var5[var7];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.PersistedStore;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var14.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var11 = var4.bind(var0)(var3);
    var6 = var11.createStyles;
    var3 = {};
    var12 = {};
    var13 = 7;
    var15 = var5[var13];
    var15 = var14.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_BASE_LOW;
    var12.backgroundColor = var15;
    var15 = var5[var13];
    var15 = var14.bind(var0)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_12;
    var12.paddingHorizontal = var15;
    var12.flex = var8;
    var3.container = var12;
    var12 = {
        'backgroundColor': null,
        'verticalAlign': 'middle',
        'flexDirection': 'row',
        'alignItems': 'center',
        'flex': 1
    };
    var13 = var5[var13];
    var13 = var14.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOW;
    var12.backgroundColor = var13;
    var3.sectionHeader = var12;
    var3 = var6.bind(var11)(var3);
    var _closure1_slot9 = var3;
    var6 = var10.memo;
    var3 = function() { // Environment: var1
        var3 = _closure1_slot8;
        var1 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 8;
        var0 = var2[var0];
        var2 = undefined;
        var0 = var1.bind(var2)(var0);
        var1 = var0.TableRow;
        var0 = {
            'label': 'Disable Database',
            'start': true
        };
        var4 = function() { // Original name: onPress, environment: var4
            _fun85800: for (var _fun85800_ip = 0;;) switch (_fun85800_ip) {
                case 0:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 9;
                    var2 = var2[var0];
                    var0 = undefined;
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.database;
                    var4 = var2.bind(var3)();
                    var2 = null;
                    if (!(var2 != var4)) {
                        _fun85800_ip = 103;
                        continue _fun85800
                    }
                case 41:
                    var3 = var4.disable;
                    var2 = 'via UserSettingsDatabaseControls';
                    var2 = var3.bind(var4)(var2);
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 10;
                    var1 = var3[var1];
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.open;
                    var1 = {
                        'key': 'disable_database',
                        'content': 'Database has been disabled.'
                    };
                    var1 = var2.bind(var3)(var1);
                case 103:
                    return var0;
            }
        };
        var0.onPress = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var3 = var6.bind(var10)(var3);
    var _closure1_slot10 = var3;
    var6 = var10.memo;
    var3 = function() { // Environment: var1
        _fun85801: for (var _fun85801_ip = 0;;) switch (_fun85801_ip) {
            case 0:
                var1 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 11;
                var2 = var4[var2];
                var3 = undefined;
                var7 = var1.bind(var3)(var2);
                var6 = var7.useStateFromStores;
                var5 = _closure1_slot1;
                var2 = 12;
                var2 = var4[var2];
                var2 = var5.bind(var3)(var2);
                var5 = new Array(2);
                var5[0] = var2;
                var2 = _closure1_slot7;
                var5[1] = var2;
                var2 = function() { // Environment: var2
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 12;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.database;
                    var3 = _closure1_slot7;
                    var0 = var3.getId;
                    var0 = var0.bind(var3)();
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var5 = var6.bind(var7)(var5, var2);
                var2 = _closure1_slot8;
                var0 = 8;
                var0 = var4[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.TableRow;
                var0 = {
                    'label': null,
                    'start': true,
                    'end': true
                };
                var4 = null;
                var7 = var4 == var5;
                var6 = 'No active database.';
                if (var7) {
                    _fun85801_ip = 133;
                    continue _fun85801
                }
            case 128:
                var6 = var5.name;
            case 133:
                var0.label = var6;
                var6 = var4 != var5;
                var4 = undefined;
                if (!var6) {
                    _fun85801_ip = 178;
                    continue _fun85801
                }
            case 148:
                var7 = var5.handle;
                var5 = global;
                var5 = var5.HermesInternal;
                var6 = var5.concat;
                var5 = 'Handle: ';
                var4 = var6.bind(var5)(var7);
            case 178:
                var0.subLabel = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var3 = var6.bind(var10)(var3);
    var _closure1_slot11 = var3;
    var6 = var10.memo;
    var3 = function() { // Environment: var1
        var3 = _closure1_slot8;
        var1 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 8;
        var0 = var2[var0];
        var2 = undefined;
        var0 = var1.bind(var2)(var0);
        var1 = var0.TableRow;
        var0 = {};
        var4 = 'Disable + Remove Database';
        var0.label = var4;
        var4 = function() { // Original name: onPress, environment: var4
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var0 = 12;
            var1 = var3[var0];
            var0 = undefined;
            var5 = var2.bind(var0)(var1);
            var4 = var5.replaceDisableAllDatabases;
            var1 = 'via UserSettingsDatabaseControls';
            var1 = var4.bind(var5)(var1);
            var1 = 10;
            var1 = var3[var1];
            var3 = var2.bind(var0)(var1);
            var2 = var3.open;
            var1 = {
                'key': 'disable_database_and_remove',
                'content': 'Database has been removed.'
            };
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0.onPress = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var3 = var6.bind(var10)(var3);
    var _closure1_slot12 = var3;
    var6 = var10.memo;
    var3 = function() { // Environment: var1
        var1 = _closure1_slot0;
        var5 = _closure1_slot2;
        var2 = 13;
        var2 = var5[var2];
        var3 = undefined;
        var6 = var1.bind(var3)(var2);
        var2 = var6.useNavigation;
        var2 = var2.bind(var6)();
        var _closure2_slot0 = var2;
        var2 = _closure1_slot8;
        var0 = 8;
        var0 = var5[var0];
        var0 = var1.bind(var3)(var0);
        var1 = var0.TableRow;
        var0 = {
            'label': 'View Cache Stats',
            'end': true
        };
        var4 = function() { // Original name: onPress, environment: var4
            var2 = _closure2_slot0;
            var1 = var2.navigate;
            var0 = 'cacheStats';
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var0.onPress = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var3 = var6.bind(var10)(var3);
    var _closure1_slot13 = var3;
    var3 = {};
    var3.DATABASE_CONTROLS = var9;
    var6 = 'DATABASE_CONTROLS';
    var3[var9] = var6;
    var3.DATABASE_CURRENT = var8;
    var6 = 'DATABASE_CURRENT';
    var3[var8] = var6;
    var3.PERSISTED_STORES = var7;
    var6 = 'PERSISTED_STORES';
    var3[var7] = var6;
    var _closure1_slot14 = var3;
    var3 = 25;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/devtools/native/components/screens/DevToolsDataStorageScreen.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Original name: DevToolsDataStorageScreen, environment: var1
        var2 = _closure1_slot9;
        var3 = undefined;
        var5 = var2.bind(var3)();
        var _closure2_slot0 = var5;
        var12 = _closure1_slot1;
        var13 = _closure1_slot2;
        var2 = 14;
        var2 = var13[var2];
        var4 = var12.bind(var3)(var2);
        var2 = {};
        var6 = true;
        var2.includeKeyboardHeight = var6;
        var2 = var4.bind(var3)(var2);
        var10 = var2.insets;
        var2 = 15;
        var2 = var13[var2];
        var2 = var12.bind(var3)(var2);
        var9 = var2.bind(var3)();
        var2 = 16;
        var2 = var13[var2];
        var2 = var12.bind(var3)(var2);
        var8 = var2.bind(var3)();
        var2 = 17;
        var2 = var13[var2];
        var2 = var12.bind(var3)(var2);
        var7 = var2.bind(var3)();
        var11 = _closure1_slot4;
        var14 = var11.useCallback;
        var4 = function(arg0) { // Environment: var1
            var0 = arg0;
            var _closure3_slot0 = var0;
            var4 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 11;
            var1 = var1[var0];
            var0 = undefined;
            var0 = var4.bind(var0)(var1);
            var1 = var0.PersistedStore;
            var0 = var1.getAll;
            var4 = var0.bind(var1)();
            var1 = var4.filter;
            var0 = function(arg0) { // Environment: var2
                _fun85809: for (var _fun85809_ip = 0;;) switch (_fun85809_ip) {
                    case 0:
                        var2 = arg0;
                        var0 = _closure1_slot6;
                        var0 = var2 instanceof var0;
                        if (!var0) {
                            _fun85809_ip = 64;
                            continue _fun85809
                        }
                    case 17:
                        var1 = var2.getName;
                        var2 = var1.bind(var2)();
                        var1 = var2.toLocaleLowerCase;
                        var3 = var1.bind(var2)();
                        var2 = var3.includes;
                        var4 = _closure3_slot0;
                        var1 = var4.toLocaleLowerCase;
                        var1 = var1.bind(var4)();
                        var0 = var2.bind(var3)(var1);
                    case 64:
                        return var0;
                }
            };
            var1 = var1.bind(var4)(var0);
            var _closure3_slot1 = var1;
            var0 = {};
            var3 = _closure1_slot14;
            var5 = var3.DATABASE_CONTROLS;
            var4 = new Array(3);
            var4[0] = var5;
            var5 = var3.DATABASE_CURRENT;
            var4[1] = var5;
            var3 = var3.PERSISTED_STORES;
            var4[2] = var3;
            var3 = var4.map;
            var2 = function(arg0) { // Environment: var2
                _fun85810: for (var _fun85810_ip = 0;;) switch (_fun85810_ip) {
                    case 0:
                        var1 = arg0;
                        var2 = _closure1_slot14;
                        var2 = var2.DATABASE_CONTROLS;
                        if (!(var2 !== var1)) {
                            _fun85810_ip = 99;
                            continue _fun85810
                        }
                    case 20:
                        var2 = _closure1_slot14;
                        var2 = var2.DATABASE_CURRENT;
                        if (!(var2 !== var1)) {
                            _fun85810_ip = 94;
                            continue _fun85810
                        }
                    case 34:
                        var0 = _closure1_slot14;
                        var0 = var0.PERSISTED_STORES;
                        if (!(var0 !== var1)) {
                            _fun85810_ip = 52;
                            continue _fun85810
                        }
                    case 48:
                        var0 = undefined;
                        return var0;
                    case 52:
                        var0 = _closure3_slot1;
                        var1 = var0.length;
                        var0 = 0;
                        var3 = var1 > var0;
                        var1 = 1;
                        var0 = var1;
                        if (!var3) {
                            _fun85810_ip = 88;
                            continue _fun85810
                        }
                    case 79:
                        var2 = _closure3_slot1;
                        var0 = var2.length;
                    case 88:
                        var0 = var1 + var0;
                        return var0;
                    case 94:
                        var0 = 1;
                        return var0;
                    case 99:
                        var0 = 3;
                        return var0;
                }
            };
            var2 = var3.bind(var4)(var2);
            var0.sections = var2;
            var0.persistedStores = var1;
            return var0;
        };
        var2 = new Array(0);
        var2 = var14.bind(var11)(var4, var2);
        var _closure2_slot1 = var2;
        var14 = var11.useState;
        var4 = function() { // Environment: var1
            var2 = _closure2_slot1;
            var1 = undefined;
            var0 = '';
            var0 = var2.bind(var1)(var0);
            return var0;
        };
        var15 = var14.bind(var11)(var4);
        var14 = _closure1_slot3;
        var4 = 2;
        var14 = var14.bind(var3)(var15, var4);
        var4 = 0;
        var4 = var14[var4];
        var15 = var4.sections;
        var16 = var4.persistedStores;
        var _closure2_slot2 = var16;
        var4 = 1;
        var4 = var14[var4];
        var _closure2_slot3 = var4;
        var14 = var11.useCallback;
        var4 = new Array(2);
        var4[0] = var16;
        var4[1] = var2;
        var2 = function(arg0, arg1) { // Environment: var1
            _fun85812: for (var _fun85812_ip = 0;;) switch (_fun85812_ip) {
                case 0:
                    var3 = arg0;
                    var2 = arg1;
                    var _closure3_slot0 = var2;
                    var1 = _closure1_slot14;
                    var1 = var1.DATABASE_CONTROLS;
                    if (!(var1 !== var3)) {
                        _fun85812_ip = 378;
                        continue _fun85812
                    }
                case 32:
                    var1 = _closure1_slot14;
                    var1 = var1.DATABASE_CURRENT;
                    if (!(var1 !== var3)) {
                        _fun85812_ip = 350;
                        continue _fun85812
                    }
                case 49:
                    var1 = _closure1_slot14;
                    var1 = var1.PERSISTED_STORES;
                    if (!(var1 !== var3)) {
                        _fun85812_ip = 67;
                        continue _fun85812
                    }
                case 63:
                    var1 = null;
                    return var1;
                case 67:
                    var3 = 0;
                    if (!(var3 !== var2)) {
                        _fun85812_ip = 248;
                        continue _fun85812
                    }
                case 76:
                    var7 = 1;
                    if (!(var7 === var2)) {
                        _fun85812_ip = 99;
                        continue _fun85812
                    }
                case 83:
                    var1 = _closure2_slot2;
                    var1 = var1.length;
                    if (!(var3 !== var1)) {
                        _fun85812_ip = 194;
                        continue _fun85812
                    }
                case 99:
                    var5 = _closure1_slot8;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 8;
                    var1 = var4[var1];
                    var4 = undefined;
                    var1 = var3.bind(var4)(var1);
                    var3 = var1.TableRow;
                    var1 = {};
                    var6 = _closure2_slot2;
                    var7 = var2 - var7;
                    var8 = var6[var7];
                    var7 = var8.getName;
                    var7 = var7.bind(var8)();
                    var1.label = var7;
                    var6 = var6.length;
                    var6 = var2 === var6;
                    var1.end = var6;
                    var6 = function() { // Original name: onPress, environment: var9
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 19;
                        var1 = var1[var0];
                        var0 = undefined;
                        var5 = var2.bind(var0)(var1);
                        var4 = var5.openLazy;
                        var1 = global;
                        var3 = var1.Promise;
                        var2 = var3.resolve;
                        var1 = {};
                        var6 = _closure1_slot15;
                        var1.default = var6;
                        var3 = var2.bind(var3)(var1);
                        var2 = {};
                        var6 = _closure2_slot2;
                        var7 = _closure3_slot0;
                        var1 = 1;
                        var1 = var7 - var1;
                        var1 = var6[var1];
                        var2.store = var1;
                        var1 = function() { // Original name: close, environment: var1
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 19;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.hideActionSheet;
                            var0 = 'DevToolsPersistedStoresActionSheet';
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var2.close = var1;
                        var1 = 'DevToolsPersistedStoresActionSheet';
                        var1 = var4.bind(var5)(var3, var1, var2);
                        return var0;
                    };
                    var1.onPress = var6;
                    var1 = var5.bind(var4)(var3, var1);
                    return var1;
                case 194:
                    var5 = _closure1_slot8;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 8;
                    var1 = var4[var1];
                    var4 = undefined;
                    var1 = var3.bind(var4)(var1);
                    var3 = var1.TableRow;
                    var1 = {
                        'label': 'No results found.',
                        'end': true
                    };
                    var1 = var5.bind(var4)(var3, var1);
                    return var1;
                case 248:
                    var5 = _closure1_slot8;
                    var7 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var1 = 8;
                    var1 = var10[var1];
                    var4 = undefined;
                    var1 = var7.bind(var4)(var1);
                    var3 = var1.TableRow;
                    var1 = {};
                    var8 = _closure1_slot8;
                    var6 = 18;
                    var6 = var10[var6];
                    var6 = var7.bind(var4)(var6);
                    var7 = var6.SearchField;
                    var6 = {};
                    var10 = 'md';
                    var6.size = var10;
                    var9 = function(arg0) { // Original name: onChange, environment: var9
                        var2 = _closure2_slot3;
                        var3 = _closure2_slot1;
                        var1 = undefined;
                        var0 = arg0;
                        var0 = var3.bind(var1)(var0);
                        var0 = var2.bind(var1)(var0);
                        return var0;
                    };
                    var6.onChange = var9;
                    var6 = var8.bind(var4)(var7, var6);
                    var1.label = var6;
                    var6 = true;
                    var1.start = var6;
                    var1 = var5.bind(var4)(var3, var1);
                    return var1;
                case 350:
                    var3 = 0;
                    var1 = null;
                    if (!(var3 === var2)) {
                        _fun85812_ip = 376;
                        continue _fun85812
                    }
                case 358:
                    var6 = _closure1_slot8;
                    var5 = _closure1_slot11;
                    var4 = undefined;
                    var3 = {};
                    var1 = var6.bind(var4)(var5, var3);
                case 376:
                    return var1;
                case 378:
                    var1 = 0;
                    if (!(var1 !== var2)) {
                        _fun85812_ip = 442;
                        continue _fun85812
                    }
                case 384:
                    var1 = 1;
                    if (!(var1 !== var2)) {
                        _fun85812_ip = 422;
                        continue _fun85812
                    }
                case 391:
                    var1 = 2;
                    if (!(var1 !== var2)) {
                        _fun85812_ip = 402;
                        continue _fun85812
                    }
                case 398:
                    var1 = null;
                    return var1;
                case 402:
                    var4 = _closure1_slot8;
                    var3 = _closure1_slot13;
                    var2 = undefined;
                    var1 = {};
                    var1 = var4.bind(var2)(var3, var1);
                    return var1;
                case 422:
                    var4 = _closure1_slot8;
                    var3 = _closure1_slot12;
                    var2 = undefined;
                    var1 = {};
                    var1 = var4.bind(var2)(var3, var1);
                    return var1;
                case 442:
                    var3 = _closure1_slot8;
                    var2 = _closure1_slot10;
                    var1 = undefined;
                    var0 = {};
                    var0 = var3.bind(var1)(var2, var0);
                    return var0;
            }
        };
        var14 = var14.bind(var11)(var2, var4);
        var4 = var11.useCallback;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function(arg0) { // Environment: var1
            _fun85816: for (var _fun85816_ip = 0;;) switch (_fun85816_ip) {
                case 0:
                    var6 = arg0;
                    var3 = _closure1_slot8;
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 20;
                    var0 = var2[var0];
                    var2 = undefined;
                    var0 = var1.bind(var2)(var0);
                    var1 = var0.Text;
                    var0 = {
                        'style': null,
                        'variant': 'text-sm/semibold',
                        'color': 'text-default'
                    };
                    var4 = _closure2_slot0;
                    var4 = var4.sectionHeader;
                    var0.style = var4;
                    var4 = _closure1_slot14;
                    var7 = var4.DATABASE_CONTROLS;
                    var4 = 'Database Controls';
                    if (!(var7 !== var6)) {
                        _fun85816_ip = 132;
                        continue _fun85816
                    }
                case 90:
                    var7 = _closure1_slot14;
                    var7 = var7.DATABASE_CURRENT;
                    var4 = 'Database (Current)';
                    if (!(var7 !== var6)) {
                        _fun85816_ip = 132;
                        continue _fun85816
                    }
                case 110:
                    var5 = _closure1_slot14;
                    var5 = var5.PERSISTED_STORES;
                    var4 = undefined;
                    if (!(var5 === var6)) {
                        _fun85816_ip = 132;
                        continue _fun85816
                    }
                case 126:
                    var4 = 'Persisted Stores';
                case 132:
                    var0.children = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
            }
        };
        var11 = var4.bind(var11)(var1, var2);
        var4 = _closure1_slot8;
        var1 = 21;
        var1 = var13[var1];
        var2 = var12.bind(var3)(var1);
        var1 = {};
        var1.sections = var15;
        var1.renderItem = var14;
        var1.renderSectionHeader = var11;
        var11 = var10.bottom;
        var10 = 7;
        var10 = var13[var10];
        var10 = var12.bind(var3)(var10);
        var10 = var10.spacing;
        var10 = var10.PX_16;
        var10 = var11 + var10;
        var1.insetEnd = var10;
        var1.itemSize = var9;
        var1.sectionHeaderSize = var8;
        var8 = 'windowSize';
        var1.estimatedListSize = var8;
        var1.placeholderConfig = var7;
        var1.wrapChildren = var6;
        var4 = var4.bind(var3)(var2, var1);
        var2 = _closure1_slot8;
        var1 = _closure1_slot5;
        var0 = {};
        var5 = var5.container;
        var0.style = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 567, 1216, 33, 1297, 671, 4854, 1637, 3107, 566, 1653, 1470, 4849, 7519, 9042, 9041, 6969, 3237, 3895, 7522, 5164, 5167, 7692, 2]);