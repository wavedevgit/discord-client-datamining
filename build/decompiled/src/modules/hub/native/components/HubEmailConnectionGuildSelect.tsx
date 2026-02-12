// modules/hub/native/components/HubEmailConnectionGuildSelect.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var1);
    var13 = 0;
    var1 = var6[var13];
    var0 = undefined;
    var1 = var12.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var6[var1];
    var1 = var12.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 2;
    var4 = var6[var1];
    var1 = metroImportAll;
    var1 = var1.bind(var0)(var4);
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var4 = var1.View;
    var _closure1_slot6 = var4;
    var1 = var1.FlatList;
    var _closure1_slot7 = var1;
    var1 = 4;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.HubEmailConnectionSteps;
    var _closure1_slot8 = var1;
    var1 = 5;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var8 = var1.jsx;
    var _closure1_slot9 = var8;
    var1 = var1.jsxs;
    var _closure1_slot10 = var1;
    var1 = 6;
    var1 = var6[var1];
    var9 = var5.bind(var0)(var1);
    var7 = var9.createStyles;
    var4 = {};
    var1 = {
        'marginHorizontal': 16,
        'borderRadius': null,
        'padding': 12
    };
    var11 = 7;
    var10 = var6[var11];
    var10 = var12.bind(var0)(var10);
    var10 = var10.radii;
    var10 = var10.sm;
    var1.borderRadius = var10;
    var10 = var6[var11];
    var10 = var12.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_MOD_NORMAL;
    var1.backgroundColor = var10;
    var4.rowContainer = var1;
    var1 = {};
    var10 = var6[var11];
    var10 = var12.bind(var0)(var10);
    var10 = var10.radii;
    var10 = var10.sm;
    var1.borderRadius = var10;
    var4.guildIcon = var1;
    var10 = {};
    var1 = 8;
    var10.height = var1;
    var4.separator = var10;
    var10 = {
        'padding': 16,
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var4.header = var10;
    var10 = {
        'marginBottom': 8,
        'textAlign': 'center'
    };
    var4.title = var10;
    var10 = {
        'backgroundColor': null,
        'position': 'absolute',
        'bottom': 0,
        'width': '100%'
    };
    var14 = var6[var11];
    var14 = var12.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_BASE_LOW;
    var10.backgroundColor = var14;
    var4.footerSafeAreaContainer = var10;
    var10 = {
        'paddingHorizontal': 16,
        'height': 110,
        'justifyContent': 'center',
        'alignItems': 'center'
    };
    var4.footerContainer = var10;
    var10 = {};
    var10.flexGrow = var13;
    var13 = var6[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_MOD_SUBTLE;
    var10.backgroundColor = var13;
    var4.footerButton = var10;
    var10 = {
        'color': null,
        'alignSelf': 'center',
        'fontSize': 14,
        'marginVertical': 8
    };
    var11 = var6[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.unsafe_rawColors;
    var11 = var11.RED_400;
    var10.color = var11;
    var4.error = var10;
    var4 = var7.bind(var9)(var4);
    var _closure1_slot11 = var4;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.FormRow;
    var4 = var1.Arrow;
    var1 = {};
    var1 = var8.bind(var0)(var4, var1);
    var _closure1_slot12 = var1;
    var1 = function arg0() {
        var0 = arg0;
        var10 = var0.guildInfo;
        var6 = var0.signup;
        var5 = var0.loading;
        var0 = _closure1_slot11;
        var3 = undefined;
        var7 = var0.bind(var3)();
        var2 = _closure1_slot9;
        var8 = _closure1_slot0;
        var9 = _closure1_slot2;
        var0 = 8;
        var0 = var9[var0];
        var0 = var8.bind(var3)(var0);
        var1 = var0.FormRow;
        var0 = {};
        var0.onPress = var6;
        var0.disabled = var5;
        var5 = var7.rowContainer;
        var0.DEPRECATED_style = var5;
        var5 = var10.name;
        var0.label = var5;
        var6 = _closure1_slot1;
        var5 = 9;
        var5 = var9[var5];
        var6 = var6.bind(var3)(var5);
        var5 = {};
        var7 = var7.guildIcon;
        var5.style = var7;
        var7 = 10;
        var7 = var9[var7];
        var9 = var8.bind(var3)(var7);
        var8 = var9.fromGuildBasic;
        var7 = {};
        var13 = var7;
        var12 = var10;
        var10 = copyDataProperties(var13, var12);
        var11 = new Array(0);
        var10 = 'features';
        var7[var10] = var11;
        var7 = var8.bind(var9)(var7);
        var5.guild = var7;
        var5 = var2.bind(var3)(var6, var5);
        var0.leading = var5;
        var4 = _closure1_slot12;
        var0.trailing = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot13 = var1;
    var4 = function arg0() {
        _fun76335: for (var _fun76335_ip = 0;;) switch (_fun76335_ip) {
            case 0:
                var0 = arg0;
                var13 = var0.errors;
                var10 = var0.loading;
                var9 = var0.onFooterButtonPressed;
                var0 = _closure1_slot11;
                var3 = undefined;
                var12 = var0.bind(var3)();
                var7 = _closure1_slot1;
                var16 = _closure1_slot2;
                var0 = 13;
                var0 = var16[var0];
                var0 = var7.bind(var3)(var0);
                var0 = var0.bind(var3)();
                var6 = var0.bottom;
                var2 = _closure1_slot9;
                var1 = _closure1_slot6;
                var0 = {};
                var5 = var12.footerSafeAreaContainer;
                var4 = new Array(2);
                var4[0] = var5;
                var5 = {};
                var5.paddingBottom = var6;
                var4[1] = var5;
                var0.style = var4;
                var5 = _closure1_slot10;
                var4 = {};
                var6 = var12.footerContainer;
                var4.style = var6;
                var6 = 14;
                var6 = var16[var6];
                var7 = var7.bind(var3)(var6);
                var6 = {};
                var6.loading = var10;
                var10 = var12.footerButton;
                var6.style = var10;
                var15 = _closure1_slot0;
                var10 = 12;
                var11 = var16[var10];
                var11 = var15.bind(var3)(var11);
                var14 = var11.intl;
                var11 = var14.string;
                var10 = var16[var10];
                var10 = var15.bind(var3)(var10);
                var10 = var10.t;
                var10 = var10.G3Zk7V;
                var10 = var11.bind(var14)(var10);
                var6.text = var10;
                var6.onPress = var9;
                var7 = var2.bind(var3)(var7, var6);
                var6 = new Array(2);
                var6[0] = var7;
                var11 = null;
                var7 = var11 != var13;
                if (!var7) {
                    _fun76335_ip = 301;
                    continue _fun76335
                }
            case 231:
                var10 = _closure1_slot9;
                var9 = _closure1_slot0;
                var14 = _closure1_slot2;
                var8 = 15;
                var8 = var14[var8];
                var8 = var9.bind(var3)(var8);
                var9 = var8.LegacyText;
                var8 = {};
                var12 = var12.error;
                var8.style = var12;
                var12 = var11 == var13;
                var11 = undefined;
                if (var12) {
                    _fun76335_ip = 291;
                    continue _fun76335
                }
            case 281:
                var12 = var13.getAnyErrorMessage;
                var11 = var12.bind(var13)();
            case 291:
                var8.children = var11;
                var7 = var10.bind(var3)(var9, var8);
            case 301:
                var6[1] = var7;
                var4.children = var6;
                var4 = var5.bind(var3)(var1, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot14 = var4;
    var7 = function() { // Environment: var3
        var0 = _closure1_slot11;
        var3 = undefined;
        var6 = var0.bind(var3)();
        var2 = _closure1_slot9;
        var1 = _closure1_slot6;
        var0 = {};
        var5 = var6.header;
        var0.style = var5;
        var9 = _closure1_slot0;
        var10 = _closure1_slot2;
        var4 = 11;
        var4 = var10[var4];
        var4 = var9.bind(var3)(var4);
        var5 = var4.Text;
        var4 = {
            'style': null,
            'accessibilityRole': 'header',
            'variant': 'heading-xl/extrabold',
            'color': 'mobile-text-heading-primary'
        };
        var6 = var6.title;
        var4.style = var6;
        var6 = 12;
        var7 = var10[var6];
        var7 = var9.bind(var3)(var7);
        var8 = var7.intl;
        var7 = var8.string;
        var6 = var10[var6];
        var6 = var9.bind(var3)(var6);
        var6 = var6.t;
        var6 = var6.mOMeiR;
        var6 = var7.bind(var8)(var6);
        var4.children = var6;
        var4 = var2.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var4 = {};
    var4 = var8.bind(var0)(var7, var4);
    var _closure1_slot15 = var4;
    var4 = 22;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/hub/native/components/HubEmailConnectionGuildSelect.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function arg0() {
        var1 = arg0;
        var0 = var1.onClose;
        var _closure2_slot0 = var0;
        var8 = var1.email;
        var _closure2_slot1 = var8;
        var12 = var1.guildsInfo;
        var _closure2_slot2 = var12;
        var1 = _closure1_slot11;
        var3 = undefined;
        var1 = var1.bind(var3)();
        var _closure2_slot3 = var1;
        var1 = _closure1_slot0;
        var4 = _closure1_slot2;
        var2 = 16;
        var2 = var4[var2];
        var6 = var1.bind(var3)(var2);
        var2 = var6.useNavigation;
        var7 = var2.bind(var6)();
        var _closure2_slot4 = var7;
        var15 = _closure1_slot5;
        var9 = var15.useLayoutEffect;
        var6 = new Array(4);
        var6[0] = var8;
        var6[1] = var12;
        var6[2] = var7;
        var6[3] = var0;
        var2 = function() { // Environment: var11
            var2 = _closure2_slot4;
            var1 = var2.setOptions;
            var0 = {};
            var3 = function() {
                var3 = _closure1_slot9;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var0 = 17;
                var0 = var8[var0];
                var2 = undefined;
                var0 = var7.bind(var2)(var0);
                var1 = var0.HeaderActionButton;
                var0 = {};
                var4 = 18;
                var4 = var8[var4];
                var4 = var7.bind(var2)(var4);
                var4 = var4.MagnifyingGlassIcon;
                var0.IconComponent = var4;
                var4 = function() {
                    var3 = _closure2_slot4;
                    var2 = var3.push;
                    var0 = _closure1_slot8;
                    var1 = var0.SELECT_SCHOOL_SEARCH;
                    var0 = {};
                    var5 = _closure2_slot1;
                    var0.email = var5;
                    var5 = _closure2_slot0;
                    var0.onClose = var5;
                    var4 = _closure2_slot2;
                    var0.guildsInfo = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    var0 = undefined;
                    return var0;
                };
                var0.onPress = var4;
                var4 = 12;
                var5 = var8[var4];
                var5 = var7.bind(var2)(var5);
                var6 = var5.intl;
                var5 = var6.string;
                var4 = var8[var4];
                var4 = var7.bind(var2)(var4);
                var4 = var4.t;
                var4 = var4["5h0QOP"];
                var4 = var5.bind(var6)(var4);
                var0.accessibilityLabel = var4;
                var0 = var3.bind(var2)(var1, var0);
                return var0;
            };
            var0.headerRight = var3;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var2 = var9.bind(var15)(var2, var6);
        var6 = var15.useCallback;
        var2 = new Array(3);
        var2[0] = var8;
        var2[1] = var7;
        var2[2] = var0;
        var0 = function() { // Environment: var11
            var3 = _closure2_slot4;
            var2 = var3.push;
            var0 = _closure1_slot8;
            var1 = var0.SUBMIT_SCHOOL;
            var0 = {};
            var5 = _closure2_slot1;
            var0.email = var5;
            var4 = _closure2_slot0;
            var0.onClose = var4;
            var0 = var2.bind(var3)(var1, var0);
            var0 = undefined;
            return var0;
        };
        var8 = var6.bind(var15)(var0, var2);
        var2 = _closure1_slot1;
        var0 = 13;
        var0 = var4[var0];
        var0 = var2.bind(var3)(var0);
        var0 = var0.bind(var3)();
        var13 = var0.bottom;
        var2 = var15.useState;
        var0 = null;
        var0 = var2.bind(var15)(var0);
        var9 = _closure1_slot4;
        var7 = 2;
        var0 = var9.bind(var3)(var0, var7);
        var6 = 0;
        var10 = var0[var6];
        var2 = 1;
        var0 = var0[var2];
        var _closure2_slot5 = var0;
        var14 = var15.useState;
        var0 = false;
        var0 = var14.bind(var15)(var0);
        var0 = var9.bind(var3)(var0, var7);
        var9 = var0[var6];
        var _closure2_slot6 = var9;
        var0 = var0[var2];
        var _closure2_slot7 = var0;
        var2 = _closure1_slot10;
        var0 = 21;
        var0 = var4[var0];
        var0 = var1.bind(var3)(var0);
        var1 = var0.HubEmailConnectionScreen;
        var0 = {};
        var7 = _closure1_slot9;
        var6 = _closure1_slot7;
        var4 = {};
        var4.data = var12;
        var12 = function() {
            var0 = _closure1_slot15;
            return var0;
        };
        var4.ListHeaderComponent = var12;
        var12 = function arg0() {
            var0 = arg0;
            var5 = var0.item;
            var3 = _closure1_slot9;
            var2 = _closure1_slot13;
            var1 = {};
            var1.guildInfo = var5;
            var5 = var5.id;
            var _closure3_slot0 = var5;
            var5 = _closure1_slot3;
            var0 = undefined;
            var4 = function*() { // Environment: var4
                var0 = function*() { // Original name: ?anon_0_, environment: var0
                    _fun76345: for (var _fun76345_ip = 0;;) switch (_fun76345_ip) {
                        case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                            if (var1) {
                                _fun76345_ip = 255;
                                continue _fun76345
                            }
                        case 10:
                            var3 = _closure2_slot5;
                            var4 = undefined;
                            var1 = null;
                            var1 = var3.bind(var4)(var1);
                            var1 = _closure2_slot7;
                            var9 = true;
                            var1 = var1.bind(var4)(var9);
                        case 37: // try_start_0 // try_start_1
                            var5 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var1 = 19;
                            var1 = var6[var1];
                            var7 = var5.bind(var4)(var1);
                            var6 = var7.sendVerificationEmail;
                            var5 = _closure2_slot1;
                            var1 = _closure3_slot0;
                            var1 = var6.bind(var7)(var5, var9, var1);
                            SaveGenerator(address = 88);
                        case 86:
                            return var1;
                        case 88:
                            ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 5);
                            if (var5) {
                                _fun76345_ip = 149;
                                continue _fun76345
                            }
                        case 94:
                            var7 = _closure2_slot4;
                            var6 = var7.push;
                            var3 = _closure1_slot8;
                            var5 = var3.VERIFY_PIN;
                            var3 = {};
                            var9 = _closure2_slot1;
                            var3.email = var9;
                            var9 = _closure2_slot0;
                            var3.onClose = var9;
                            var8 = _closure3_slot0;
                            var3.guildId = var8;
                            var3 = var6.bind(var7)(var5, var3);
                        case 147: // try_end0
                            _fun76345_ip = 226;
                            continue _fun76345;
                        case 149: // try_end1
                            var5 = _closure2_slot7;
                            var3 = false;
                            var3 = var5.bind(var4)(var3);
                            return var1;
                        case 163: // try_start_2 // catch_target0
                            CatchBlockStart(arg_register = 6);
                            var3 = _closure2_slot5;
                            var5 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var1 = 20;
                            var1 = var7[var1];
                            var1 = var5.bind(var4)(var1);
                            var1 = var1.APIError;
                            var5 = var1.prototype;
                            var5 = Object.create(var5, {
                                constructor: {
                                    value: var1
                                }
                            });
                            var13 = var5;
                            var12 = var6;
                            var1 = new var13[var1](var12, var11);
                            var1 = var1 instanceof Object ? var1 : var5;
                            var1 = var3.bind(var4)(var1);
                        case 226: // try_end2
                            var3 = _closure2_slot7;
                            var1 = false;
                            var1 = var3.bind(var4)(var1);
                            return var4;
                        case 240: // catch_target1 // catch_target2
                            CatchBlockStart(arg_register = 1);
                            var3 = _closure2_slot7;
                            var2 = false;
                            var2 = var3.bind(var4)(var2);
                            throw var1;
                        case 255:
                            return var0;
                    }
                };
                return var0;
            };
            var4 = var5.bind(var0)(var4);
            var1.signup = var4;
            var4 = _closure2_slot6;
            var1.loading = var4;
            var0 = var3.bind(var0)(var2, var1);
            return var0;
        };
        var4.renderItem = var12;
        var11 = function() {
            var3 = _closure1_slot9;
            var2 = _closure1_slot6;
            var1 = {};
            var0 = _closure2_slot3;
            var0 = var0.separator;
            var1.style = var0;
            var0 = undefined;
            var0 = var3.bind(var0)(var2, var1);
            return var0;
        };
        var4.ItemSeparatorComponent = var11;
        var11 = {};
        var12 = 110;
        var13 = var12 + var13;
        var12 = 8;
        var12 = var13 + var12;
        var11.paddingBottom = var12;
        var4.contentContainerStyle = var11;
        var6 = var7.bind(var3)(var6, var4);
        var4 = new Array(2);
        var4[0] = var6;
        var6 = _closure1_slot14;
        var5 = {};
        var5.errors = var10;
        var5.loading = var9;
        var5.onFooterButtonPressed = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var3;
    var2.HubEmailConnectionGuildSelectRow = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 27, 9627, 33, 1297, 671, 5441, 7356, 1598, 3938, 1234, 1568, 4849, 4852, 1469, 5374, 7108, 9632, 3347, 9626, 2]);