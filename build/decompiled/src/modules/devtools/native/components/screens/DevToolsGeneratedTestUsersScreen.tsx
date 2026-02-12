// modules/devtools/native/components/screens/DevToolsGeneratedTestUsersScreen.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun85748: for (var _fun85748_ip = 0;;) switch (_fun85748_ip) {
            case 0:
                var1 = arg0;
                var7 = var1.onSubmit;
                var _closure2_slot0 = var7;
                var1 = _closure1_slot14;
                var3 = undefined;
                var4 = var1.bind(var3)();
                var2 = _closure1_slot5;
                var1 = var2.useState;
                var9 = '';
                var2 = var1.bind(var2)(var9);
                var1 = _closure1_slot4;
                var8 = 2;
                var1 = var1.bind(var3)(var2, var8);
                var12 = 0;
                var10 = var1[var12];
                var _closure2_slot1 = var10;
                var2 = 1;
                var17 = var1[var2];
                var _closure2_slot2 = var17;
                var6 = _closure1_slot5;
                var1 = var6.useState;
                var6 = var1.bind(var6)(var9);
                var1 = _closure1_slot4;
                var1 = var1.bind(var3)(var6, var8);
                var11 = var1[var12];
                var _closure2_slot3 = var11;
                var16 = var1[var2];
                var _closure2_slot4 = var16;
                var9 = _closure1_slot5;
                var6 = var9.useState;
                var1 = false;
                var6 = var6.bind(var9)(var1);
                var1 = _closure1_slot4;
                var1 = var1.bind(var3)(var6, var8);
                var9 = var1[var12];
                var1 = var1[var2];
                var _closure2_slot5 = var1;
                var6 = _closure1_slot5;
                var2 = var6.useCallback;
                var1 = _closure1_slot3;
                var0 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun85750: for (var _fun85750_ip = 0;;) switch (_fun85750_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun85750_ip = 136;
                                    continue _fun85750
                                }
                            case 10:
                                var1 = _closure2_slot1;
                                var3 = var1.length;
                                var1 = 0;
                                if (!(var1 !== var3)) {
                                    _fun85750_ip = 102;
                                    continue _fun85750
                                }
                            case 28:
                                var3 = _closure2_slot5;
                                var4 = undefined;
                                var1 = true;
                                var1 = var3.bind(var4)(var1);
                            case 41: // try_start_0
                                var5 = _closure2_slot0;
                                var3 = _closure2_slot1;
                                var1 = _closure2_slot3;
                                var1 = var5.bind(var4)(var3, var1);
                                SaveGenerator(address = 63);
                            case 61:
                                return var1;
                            case 63:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                if (var3) {
                                    _fun85750_ip = 107;
                                    continue _fun85750
                                }
                            case 69:
                                var3 = _closure2_slot2;
                                var5 = '';
                                var3 = var3.bind(var4)(var5);
                                var3 = _closure2_slot4;
                                var3 = var3.bind(var4)(var5);
                            case 91: // try_end0
                                var5 = _closure2_slot5;
                                var3 = false;
                                var3 = var5.bind(var4)(var3);
                            case 102:
                                var3 = undefined;
                                return var3;
                            case 107:
                                var5 = _closure2_slot5;
                                var3 = false;
                                var3 = var5.bind(var4)(var3);
                                return var1;
                            case 121: // catch_target0
                                CatchBlockStart(arg_register = 1);
                                var3 = _closure2_slot5;
                                var2 = false;
                                var2 = var3.bind(var4)(var2);
                                throw var1;
                            case 136:
                                return var0;
                        }
                    };
                    return var0;
                };
                var1 = var1.bind(var3)(var0);
                var0 = new Array(3);
                var0[0] = var10;
                var0[1] = var11;
                var0[2] = var7;
                var8 = var2.bind(var6)(var1, var0);
                var2 = _closure1_slot11;
                var6 = _closure1_slot0;
                var13 = _closure1_slot2;
                var0 = 28;
                var0 = var13[var0];
                var0 = var6.bind(var3)(var0);
                var1 = var0.Stack;
                var0 = {};
                var7 = 4;
                var0.spacing = var7;
                var4 = var4.inputContainer;
                var0.style = var4;
                var15 = _closure1_slot10;
                var7 = 29;
                var4 = var13[var7];
                var4 = var6.bind(var3)(var4);
                var14 = var4.TextInput;
                var4 = {
                    'size': 'md',
                    'placeholder': 'Enter Pool ID',
                    'onChange': null,
                    'autoCapitalize': 'none',
                    'autoCorrect': false,
                    'autoComplete': 'off',
                    'isClearable': true
                };
                var4.onChange = var17;
                var14 = var15.bind(var3)(var14, var4);
                var4 = new Array(3);
                var4[0] = var14;
                var15 = _closure1_slot10;
                var7 = var13[var7];
                var7 = var6.bind(var3)(var7);
                var14 = var7.TextInput;
                var7 = {
                    'size': 'md',
                    'secureTextEntry': true,
                    'placeholder': 'Enter Password',
                    'onChange': null,
                    'autoCapitalize': 'none',
                    'autoCorrect': false,
                    'autoComplete': 'off',
                    'isClearable': true
                };
                var7.onChange = var16;
                var7 = var15.bind(var3)(var14, var7);
                var4[1] = var7;
                var7 = _closure1_slot10;
                var5 = 30;
                var5 = var13[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.Button;
                var5 = {
                    'size': 'md',
                    'variant': 'primary',
                    'text': 'Get Pool'
                };
                var10 = var10.length;
                var10 = var12 === var10;
                if (var10) {
                    _fun85748_ip = 416;
                    continue _fun85748
                }
            case 407:
                var11 = var11.length;
                var10 = var12 === var11;
            case 416:
                if (var10) {
                    _fun85748_ip = 422;
                    continue _fun85748
                }
            case 419:
                var10 = var9;
            case 422:
                var5.disabled = var10;
                var5.loading = var9;
                var5.onPress = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot18 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var9 = var0.pool;
        var _closure2_slot0 = var9;
        var2 = _closure1_slot8;
        var1 = var2.getUsersForPool;
        var0 = var9.id;
        var12 = var1.bind(var2)(var0);
        var _closure2_slot1 = var12;
        var1 = _closure1_slot9;
        var0 = var1.getId;
        var0 = var0.bind(var1)();
        var _closure2_slot2 = var0;
        var3 = _closure1_slot5;
        var2 = var3.useCallback;
        var0 = var9.id;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = function(arg0) { // Environment: var10
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var0 = 32;
            var2 = var3[var0];
            var0 = undefined;
            var5 = var4.bind(var0)(var2);
            var4 = var5.hideActionSheet;
            var2 = 'generated-test-users';
            var2 = var4.bind(var5)(var2);
            var2 = _closure1_slot0;
            var1 = 33;
            var1 = var3[var1];
            var4 = var2.bind(var0)(var1);
            var3 = var4.loginAsGeneratedUser;
            var1 = _closure2_slot0;
            var2 = var1.id;
            var1 = arg0;
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var0 = var2.bind(var3)(var0, var1);
        var _closure2_slot3 = var0;
        var3 = _closure1_slot10;
        var8 = _closure1_slot0;
        var11 = _closure1_slot2;
        var0 = 34;
        var0 = var11[var0];
        var2 = undefined;
        var0 = var8.bind(var2)(var0);
        var1 = var0.BottomSheet;
        var0 = {};
        var6 = _closure1_slot10;
        var4 = 35;
        var4 = var11[var4];
        var4 = var8.bind(var2)(var4);
        var5 = var4.BottomSheetTitleHeader;
        var4 = {};
        var9 = var9.summary;
        var4.title = var9;
        var15 = var12.length;
        var9 = global;
        var9 = var9.HermesInternal;
        var14 = var9.concat;
        var13 = '';
        var9 = ' users';
        var9 = var14.bind(var13)(var15, var9);
        var4.subtitle = var9;
        var4 = var6.bind(var2)(var5, var4);
        var0.header = var4;
        var6 = _closure1_slot10;
        var5 = _closure1_slot6;
        var4 = {};
        var9 = {};
        var14 = _closure1_slot1;
        var13 = 27;
        var13 = var11[var13];
        var13 = var14.bind(var2)(var13);
        var13 = var13.spacing;
        var13 = var13.PX_12;
        var9.paddingHorizontal = var13;
        var4.style = var9;
        var9 = _closure1_slot10;
        var7 = 36;
        var7 = var11[var7];
        var7 = var8.bind(var2)(var7);
        var8 = var7.TableRowGroup;
        var7 = {
            'title': 'Select User to Login As',
            'hasIcons': true
        };
        var11 = var12.map;
        var10 = function(arg0, arg1) { // Environment: var10
            _fun85753: for (var _fun85753_ip = 0;;) switch (_fun85753_ip) {
                case 0:
                    var0 = arg0;
                    var6 = arg1;
                    var _closure3_slot0 = var0;
                    var2 = var0.id;
                    var1 = _closure2_slot2;
                    var9 = var2 === var1;
                    var4 = _closure1_slot10;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 37;
                    var1 = var3[var1];
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.TableRow;
                    var1 = {};
                    var10 = _closure1_slot15;
                    var1.icon = var10;
                    var10 = var0.username;
                    var1.label = var10;
                    var10 = var0.email;
                    var1.subLabel = var10;
                    var7 = function() {
                        var2 = _closure2_slot3;
                        var0 = _closure3_slot0;
                        var1 = var0.id;
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var1.onPress = var7;
                    var1.disabled = var9;
                    var7 = undefined;
                    if (!var9) {
                        _fun85753_ip = 117;
                        continue _fun85753
                    }
                case 113:
                    var7 = _closure1_slot16;
                case 117:
                    var1.trailing = var7;
                    var7 = 0;
                    var7 = var7 === var6;
                    var1.start = var7;
                    var5 = _closure2_slot1;
                    var7 = var5.length;
                    var5 = 1;
                    var5 = var7 - var5;
                    var5 = var6 === var5;
                    var1.end = var5;
                    var0 = var0.id;
                    var0 = var4.bind(var3)(var2, var1, var0);
                    return var0;
            }
        };
        var10 = var11.bind(var12)(var10);
        var7.children = var10;
        var7 = var9.bind(var2)(var8, var7);
        var4.children = var7;
        var4 = var6.bind(var2)(var5, var4);
        var0.children = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var _closure1_slot19 = var0;
    var0 = function arg0() {
        var1 = arg0;
        var11 = var1.pool;
        var _closure2_slot0 = var11;
        var5 = var1.start;
        var4 = var1.end;
        var6 = var11.id;
        var9 = var11.summary;
        var2 = _closure1_slot8;
        var1 = var2.getUsersForPool;
        var8 = var1.bind(var2)(var6);
        var2 = _closure1_slot12;
        var7 = global;
        var1 = var7.Number;
        var3 = undefined;
        var12 = var1.bind(var3)(var6);
        var1 = _closure1_slot12;
        var1 = var1.length;
        var1 = var12 % var1;
        var12 = var2[var1];
        var2 = _closure1_slot13;
        var1 = var7.Number;
        var6 = var1.bind(var3)(var6);
        var1 = _closure1_slot13;
        var1 = var1.length;
        var1 = var6 % var1;
        var13 = var2[var1];
        var6 = _closure1_slot5;
        var2 = var6.useCallback;
        var1 = new Array(1);
        var1[0] = var11;
        var0 = function() { // Environment: var0
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 32;
            var1 = var1[var0];
            var0 = undefined;
            var5 = var2.bind(var0)(var1);
            var4 = var5.openLazy;
            var1 = global;
            var3 = var1.Promise;
            var2 = var3.resolve;
            var1 = {};
            var6 = _closure1_slot19;
            var1.default = var6;
            var3 = var2.bind(var3)(var1);
            var2 = {};
            var1 = _closure2_slot0;
            var2.pool = var1;
            var1 = 'generated-test-users';
            var1 = var4.bind(var5)(var3, var1, var2);
            return var0;
        };
        var6 = var2.bind(var6)(var0, var1);
        var2 = _closure1_slot10;
        var1 = _closure1_slot0;
        var11 = _closure1_slot2;
        var0 = 37;
        var0 = var11[var0];
        var0 = var1.bind(var3)(var0);
        var1 = var0.TableRow;
        var0 = {};
        var11 = _closure1_slot10;
        var10 = {};
        var14 = 'md';
        var10.size = var14;
        var10.color = var13;
        var10 = var11.bind(var3)(var12, var10);
        var0.icon = var10;
        var0.label = var9;
        var10 = var8.length;
        var7 = var7.HermesInternal;
        var9 = var7.concat;
        var8 = '';
        var7 = ' users';
        var7 = var9.bind(var8)(var10, var7);
        var0.subLabel = var7;
        var7 = true;
        var0.arrow = var7;
        var0.onPress = var6;
        var0.start = var5;
        var0.end = var4;
        var0 = var2.bind(var3)(var1, var0);
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var12.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var13 = 1;
    var3 = var5[var13];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var6 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot6 = var6;
    var3 = var3.ScrollView;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot10 = var7;
    var3 = var3.jsxs;
    var _closure1_slot11 = var3;
    var3 = 7;
    var6 = var5[var3];
    var6 = var4.bind(var0)(var6);
    var8 = var6.UserIcon;
    var6 = new Array(19);
    var6[0] = var8;
    var8 = 8;
    var8 = var5[var8];
    var8 = var4.bind(var0)(var8);
    var8 = var8.ShieldIcon;
    var6[1] = var8;
    var8 = 9;
    var8 = var5[var8];
    var8 = var4.bind(var0)(var8);
    var8 = var8.GiftIcon;
    var6[2] = var8;
    var8 = 10;
    var8 = var5[var8];
    var8 = var4.bind(var0)(var8);
    var8 = var8.AchievementsIcon;
    var6[3] = var8;
    var8 = 11;
    var8 = var5[var8];
    var8 = var4.bind(var0)(var8);
    var8 = var8.PiggyBankIcon;
    var6[4] = var8;
    var8 = 12;
    var8 = var5[var8];
    var8 = var4.bind(var0)(var8);
    var8 = var8.TreehouseIcon;
    var6[5] = var8;
    var8 = 13;
    var8 = var5[var8];
    var8 = var4.bind(var0)(var8);
    var8 = var8.SpeedometerIcon;
    var6[6] = var8;
    var8 = 14;
    var8 = var5[var8];
    var8 = var4.bind(var0)(var8);
    var8 = var8.CompassIcon;
    var6[7] = var8;
    var8 = 15;
    var8 = var5[var8];
    var8 = var4.bind(var0)(var8);
    var8 = var8.SignPostIcon;
    var6[8] = var8;
    var8 = 16;
    var8 = var5[var8];
    var8 = var4.bind(var0)(var8);
    var8 = var8.CarIcon;
    var6[9] = var8;
    var8 = 17;
    var8 = var5[var8];
    var8 = var4.bind(var0)(var8);
    var8 = var8.TrainIcon;
    var6[10] = var8;
    var8 = 18;
    var8 = var5[var8];
    var8 = var4.bind(var0)(var8);
    var8 = var8.TeacupIcon;
    var6[11] = var8;
    var8 = 19;
    var8 = var5[var8];
    var8 = var4.bind(var0)(var8);
    var8 = var8.InventoryIcon;
    var6[12] = var8;
    var8 = 20;
    var8 = var5[var8];
    var8 = var4.bind(var0)(var8);
    var8 = var8.FoodIcon;
    var6[13] = var8;
    var8 = 21;
    var8 = var5[var8];
    var8 = var4.bind(var0)(var8);
    var8 = var8.BurgerIcon;
    var6[14] = var8;
    var8 = 22;
    var8 = var5[var8];
    var8 = var4.bind(var0)(var8);
    var8 = var8.MagicDoorIcon;
    var6[15] = var8;
    var8 = 23;
    var8 = var5[var8];
    var8 = var4.bind(var0)(var8);
    var8 = var8.PawPrintIcon;
    var6[16] = var8;
    var8 = 24;
    var8 = var5[var8];
    var8 = var4.bind(var0)(var8);
    var8 = var8.RecordPlayerIcon;
    var6[17] = var8;
    var8 = 25;
    var8 = var5[var8];
    var8 = var4.bind(var0)(var8);
    var8 = var8.SettingsIcon;
    var6[18] = var8;
    var _closure1_slot12 = var6;
    var6 = ['text-default', 'text-feedback-positive', 'text-feedback-warning', 'text-feedback-critical', 'text-link', 'text-brand'];
    var _closure1_slot13 = var6;
    var6 = 26;
    var6 = var5[var6];
    var9 = var4.bind(var0)(var6);
    var8 = var9.createStyles;
    var6 = {};
    var10 = {};
    var11 = 27;
    var14 = var5[var11];
    var14 = var12.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_BASE_LOW;
    var10.backgroundColor = var14;
    var10.flex = var13;
    var6.container = var10;
    var10 = {};
    var13 = var5[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var10.padding = var13;
    var6.contentContainer = var10;
    var10 = {};
    var11 = var5[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var10.marginBottom = var11;
    var6.inputContainer = var10;
    var6 = var8.bind(var9)(var6);
    var _closure1_slot14 = var6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.UserIcon;
    var3 = {};
    var8 = 'md';
    var3.size = var8;
    var3 = var7.bind(var0)(var6, var3);
    var _closure1_slot15 = var3;
    var3 = 31;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.CheckmarkLargeIcon;
    var3 = {
        'size': 'md',
        'color': 'text-feedback-positive'
    };
    var3 = var7.bind(var0)(var6, var3);
    var _closure1_slot16 = var3;
    var3 = 37;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.TableRow;
    var3 = {};
    var8 = 'No pools available.';
    var3.label = var8;
    var3 = var7.bind(var0)(var6, var3);
    var _closure1_slot17 = var3;
    var3 = 40;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/devtools/native/components/screens/DevToolsGeneratedTestUsersScreen.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun85757: for (var _fun85757_ip = 0;;) switch (_fun85757_ip) {
            case 0:
                var0 = _closure1_slot14;
                var3 = undefined;
                var7 = var0.bind(var3)();
                var12 = _closure1_slot0;
                var16 = _closure1_slot2;
                var0 = 38;
                var0 = var16[var0];
                var4 = var12.bind(var3)(var0);
                var2 = var4.useStateFromStoresArray;
                var0 = _closure1_slot8;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var15
                    _fun85758: for (var _fun85758_ip = 0;;) switch (_fun85758_ip) {
                        case 0:
                            var1 = _closure1_slot8;
                            var0 = var1.getPools;
                            var0 = var0.bind(var1)();
                            var1 = null;
                            if (!(var1 == var0)) {
                                _fun85758_ip = 29;
                                continue _fun85758
                            }
                        case 25:
                            var0 = new Array(0);
                        case 29:
                            return var0;
                    }
                };
                var17 = var2.bind(var4)(var1, var0);
                var _closure2_slot0 = var17;
                var11 = _closure1_slot1;
                var0 = 39;
                var0 = var16[var0];
                var1 = var11.bind(var3)(var0);
                var0 = {};
                var2 = true;
                var0.includeKeyboardHeight = var2;
                var0 = var1.bind(var3)(var0);
                var9 = var0.insets;
                var4 = _closure1_slot5;
                var2 = var4.useCallback;
                var0 = function() { // Environment: var15
                    var3 = _closure1_slot3;
                    var2 = undefined;
                    var1 = function*(arg0, arg1) { // Environment: var0
                        var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                            _fun85761: for (var _fun85761_ip = 0;;) switch (_fun85761_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun85761_ip = 66;
                                        continue _fun85761
                                    }
                                case 7:
                                    var3 = _closure1_slot0;
                                    var2 = _closure1_slot2;
                                    var1 = 33;
                                    var1 = var2[var1];
                                    var2 = undefined;
                                    var5 = var3.bind(var2)(var1);
                                    var4 = var5.getGeneratedPoolById;
                                    var3 = arg0;
                                    var1 = arg1;
                                    var1 = var4.bind(var5)(var3, var1);
                                    SaveGenerator(address = 54);
                                case 52:
                                    return var1;
                                case 54:
                                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                    if (var3) {
                                        _fun85761_ip = 63;
                                        continue _fun85761
                                    }
                                case 60:
                                    return var2;
                                case 63:
                                    return var1;
                                case 66:
                                    return var0;
                            }
                        };
                        return var0;
                    };
                    var1 = var3.bind(var2)(var1);
                    var _closure3_slot0 = var1;
                    var0 = function() { // Environment: var0
                        var0 = undefined;
                        var3 = _closure3_slot0;
                        var2 = var3.apply;
                        var0 = arguments;
                        var1 = var0;
                        var0 = this;
                        var0 = var2.bind(var3)(var0, var1);
                        return var0;
                    };
                    return var0;
                };
                var1 = var0.bind(var3)();
                var0 = new Array(0);
                var18 = var2.bind(var4)(var1, var0);
                var2 = _closure1_slot10;
                var1 = _closure1_slot6;
                var0 = {};
                var4 = var7.container;
                var0.style = var4;
                var6 = _closure1_slot10;
                var5 = _closure1_slot7;
                var4 = {};
                var8 = var7.contentContainer;
                var7 = new Array(2);
                var7[0] = var8;
                var8 = {};
                var10 = 27;
                var10 = var16[var10];
                var10 = var11.bind(var3)(var10);
                var10 = var10.spacing;
                var10 = var10.PX_16;
                var9 = var9.bottom;
                var9 = var10 + var9;
                var8.paddingBottom = var9;
                var7[1] = var8;
                var4.contentContainerStyle = var7;
                var9 = _closure1_slot11;
                var7 = 28;
                var7 = var16[var7];
                var7 = var12.bind(var3)(var7);
                var8 = var7.Stack;
                var7 = {};
                var10 = 16;
                var7.spacing = var10;
                var13 = _closure1_slot10;
                var11 = _closure1_slot18;
                var10 = {};
                var10.onSubmit = var18;
                var11 = var13.bind(var3)(var11, var10);
                var10 = new Array(2);
                var10[0] = var11;
                var13 = _closure1_slot11;
                var11 = 36;
                var11 = var16[var11];
                var11 = var12.bind(var3)(var11);
                var12 = var11.TableRowGroup;
                var11 = {};
                var16 = 'Generated Test User Pools';
                var11.title = var16;
                var18 = var17.length;
                var16 = 0;
                var16 = var16 === var18;
                if (!var16) {
                    _fun85757_ip = 338;
                    continue _fun85757
                }
            case 334:
                var16 = _closure1_slot17;
            case 338:
                var14 = new Array(2);
                var14[0] = var16;
                var16 = var17.map;
                var15 = function(arg0, arg1) { // Environment: var15
                    var0 = arg0;
                    var5 = arg1;
                    var4 = _closure1_slot10;
                    var3 = _closure1_slot20;
                    var2 = {};
                    var2.pool = var0;
                    var1 = 0;
                    var1 = var1 === var5;
                    var2.start = var1;
                    var1 = _closure2_slot0;
                    var6 = var1.length;
                    var1 = 1;
                    var1 = var6 - var1;
                    var1 = var5 === var1;
                    var2.end = var1;
                    var1 = var0.id;
                    var0 = undefined;
                    var0 = var4.bind(var0)(var3, var2, var1);
                    return var0;
                };
                var15 = var16.bind(var17)(var15);
                var14[1] = var15;
                var11.children = var14;
                var11 = var13.bind(var3)(var12, var11);
                var10[1] = var11;
                var7.children = var10;
                var7 = var9.bind(var3)(var8, var7);
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 27, 11006, 1216, 33, 10050, 5509, 8885, 11007, 11009, 11011, 11013, 11015, 11017, 11019, 11021, 11023, 11025, 8482, 11027, 8480, 11029, 11031, 5434, 1297, 671, 4086, 5464, 4090, 3263, 3279, 11033, 4907, 5237, 5343, 4876, 566, 4871, 2]);