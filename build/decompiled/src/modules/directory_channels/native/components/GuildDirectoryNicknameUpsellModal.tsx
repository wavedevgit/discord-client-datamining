// modules/directory_channels/native/components/GuildDirectoryNicknameUpsellModal.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun91123: for (var _fun91123_ip = 0;;) switch (_fun91123_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.guildId;
                var _closure2_slot0 = var1;
                var0 = var0.handleClose;
                var _closure2_slot1 = var0;
                var0 = _closure1_slot12;
                var3 = undefined;
                var9 = var0.bind(var3)();
                var22 = _closure1_slot0;
                var21 = _closure1_slot2;
                var0 = 10;
                var0 = var21[var0];
                var4 = var22.bind(var3)(var0);
                var2 = var4.useStateFromStores;
                var0 = _closure1_slot8;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var10
                    var2 = _closure1_slot8;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var26 = var2.bind(var4)(var1, var0);
                var5 = _closure1_slot1;
                var0 = 11;
                var0 = var21[var0];
                var0 = var5.bind(var3)(var0);
                var0 = var0.bind(var3)();
                var7 = var0.insets;
                var1 = _closure1_slot5;
                var0 = var1.useState;
                var12 = null;
                var1 = var0.bind(var1)(var12);
                var0 = _closure1_slot4;
                var6 = 2;
                var0 = var0.bind(var3)(var1, var6);
                var2 = 0;
                var15 = var0[var2];
                var1 = 1;
                var0 = var0[var1];
                var _closure2_slot2 = var0;
                var11 = _closure1_slot5;
                var4 = var11.useState;
                var0 = '';
                var4 = var4.bind(var11)(var0);
                var0 = _closure1_slot4;
                var0 = var0.bind(var3)(var4, var6);
                var18 = var0[var2];
                var _closure2_slot3 = var18;
                var13 = var0[var1];
                var1 = _closure1_slot5;
                var0 = var1.useRef;
                var4 = var0.bind(var1)(var12);
                var _closure2_slot4 = var4;
                var0 = function() { // Environment: var10
                    var3 = _closure1_slot3;
                    var2 = undefined;
                    var1 = function*() { // Environment: var0
                        var0 = function*() { // Original name: ?anon_0_, environment: var0
                            _fun91127: for (var _fun91127_ip = 0;;) switch (_fun91127_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun91127_ip = 165;
                                        continue _fun91127
                                    }
                                case 10:
                                    var4 = _closure2_slot2;
                                    var1 = undefined;
                                    var3 = null;
                                    var3 = var4.bind(var1)(var3);
                                case 26: // try_start_0
                                    var4 = _closure1_slot0;
                                    var5 = _closure1_slot2;
                                    var3 = 12;
                                    var3 = var5[var3];
                                    var6 = var4.bind(var1)(var3);
                                    var5 = var6.updateGuildSelfMember;
                                    var4 = _closure2_slot0;
                                    var3 = {};
                                    var7 = _closure2_slot3;
                                    var3.nick = var7;
                                    var3 = var5.bind(var6)(var4, var3);
                                    SaveGenerator(address = 80);
                                case 78:
                                    return var3;
                                case 80:
                                    ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 4);
                                    if (var4) {
                                        _fun91127_ip = 96;
                                        continue _fun91127
                                    }
                                case 86:
                                    var4 = _closure2_slot1;
                                    var4 = var4.bind(var1)();
                                case 94: // try_end0
                                    _fun91127_ip = 162;
                                    continue _fun91127;
                                case 96:
                                    return var3;
                                case 99: // catch_target0
                                    CatchBlockStart(arg_register = 5);
                                    var3 = _closure2_slot2;
                                    var4 = _closure1_slot0;
                                    var6 = _closure1_slot2;
                                    var2 = 13;
                                    var2 = var6[var2];
                                    var2 = var4.bind(var1)(var2);
                                    var2 = var2.APIError;
                                    var4 = var2.prototype;
                                    var4 = Object.create(var4, {
                                        constructor: {
                                            value: var2
                                        }
                                    });
                                    var10 = var4;
                                    var9 = var5;
                                    var2 = new var10[var2](var9, var8);
                                    var2 = var2 instanceof Object ? var2 : var4;
                                    var2 = var3.bind(var1)(var2);
                                case 162:
                                    return var1;
                                case 165:
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
                var11 = var0.bind(var3)();
                var2 = _closure1_slot11;
                var1 = _closure1_slot7;
                var0 = {};
                var0.ref = var4;
                var6 = var9.container;
                var4 = new Array(2);
                var4[0] = var6;
                var6 = {};
                var16 = var7.bottom;
                var14 = 9;
                var14 = var21[var14];
                var14 = var5.bind(var3)(var14);
                var14 = var14.spacing;
                var14 = var14.PX_16;
                var14 = var16 + var14;
                var6.paddingBottom = var14;
                var7 = var7.top;
                var6.paddingTop = var7;
                var4[1] = var6;
                var0.contentContainerStyle = var4;
                var6 = _closure1_slot10;
                var7 = 14;
                var4 = var21[var7];
                var5 = var5.bind(var3)(var4);
                var4 = {};
                var14 = var9.guildIcon;
                var4.style = var14;
                var4.guild = var26;
                var7 = var21[var7];
                var7 = var22.bind(var3)(var7);
                var7 = var7.GuildIconSizes;
                var7 = var7.XLARGE;
                var4.size = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(5);
                var4[0] = var5;
                var7 = _closure1_slot11;
                var6 = _closure1_slot6;
                var5 = {};
                var14 = var9.header;
                var5.style = var14;
                var19 = _closure1_slot10;
                var20 = 15;
                var14 = var21[var20];
                var14 = var22.bind(var3)(var14);
                var17 = var14.Text;
                var14 = {
                    'style': null,
                    'accessibilityRole': 'header',
                    'variant': 'heading-xl/extrabold',
                    'color': 'mobile-text-heading-primary'
                };
                var16 = var9.title;
                var14.style = var16;
                var16 = 16;
                var23 = var21[var16];
                var23 = var22.bind(var3)(var23);
                var24 = var23.intl;
                var23 = var24.format;
                var21 = var21[var16];
                var21 = var22.bind(var3)(var21);
                var21 = var21.t;
                var22 = var21["d+6kzl"];
                var21 = {};
                var27 = var12 == var26;
                var25 = undefined;
                if (var27) {
                    _fun91123_ip = 508;
                    continue _fun91123
                }
            case 503:
                var25 = var26.name;
            case 508:
                var21.guildName = var25;
                var21 = var23.bind(var24)(var22, var21);
                var14.children = var21;
                var14 = var19.bind(var3)(var17, var14);
                var19 = new Array(2);
                var19[0] = var14;
                var22 = _closure1_slot10;
                var14 = _closure1_slot0;
                var17 = _closure1_slot2;
                var20 = var17[var20];
                var20 = var14.bind(var3)(var20);
                var21 = var20.Text;
                var20 = {
                    'style': null,
                    'variant': 'text-sm/medium',
                    'color': 'text-default'
                };
                var23 = var9.description;
                var20.style = var23;
                var23 = var17[var16];
                var23 = var14.bind(var3)(var23);
                var25 = var23.intl;
                var24 = var25.string;
                var23 = var17[var16];
                var23 = var14.bind(var3)(var23);
                var23 = var23.t;
                var23 = var23.b3L8yx;
                var23 = var24.bind(var25)(var23);
                var20.children = var23;
                var20 = var22.bind(var3)(var21, var20);
                var19[1] = var20;
                var5.children = var19;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var7 = _closure1_slot10;
                var6 = _closure1_slot1;
                var5 = 17;
                var5 = var17[var5];
                var6 = var6.bind(var3)(var5);
                var5 = {};
                var19 = var17[var16];
                var19 = var14.bind(var3)(var19);
                var21 = var19.intl;
                var20 = var21.string;
                var19 = var17[var16];
                var19 = var14.bind(var3)(var19);
                var19 = var19.t;
                var19 = var19.ilDlmW;
                var19 = var20.bind(var21)(var19);
                var5.label = var19;
                var19 = var17[var16];
                var19 = var14.bind(var3)(var19);
                var21 = var19.intl;
                var20 = var21.string;
                var19 = var17[var16];
                var19 = var14.bind(var3)(var19);
                var19 = var19.t;
                var19 = var19.RfWvWI;
                var19 = var20.bind(var21)(var19);
                var5.placeholder = var19;
                var5.value = var18;
                var5.onChangeText = var13;
                var13 = var9.input;
                var5.style = var13;
                var13 = var9.redesignTextInput;
                var5.textStyle = var13;
                var13 = 18;
                var13 = var17[var13];
                var13 = var14.bind(var3)(var13);
                var13 = var13.ClearButtonVisibility;
                var13 = var13.WITH_CONTENT;
                var5.clearButtonVisibility = var13;
                var13 = var12 == var15;
                var12 = undefined;
                if (var13) {
                    _fun91123_ip = 868;
                    continue _fun91123
                }
            case 853:
                var14 = var15.getFirstFieldErrorMessage;
                var13 = 'name';
                var12 = var14.bind(var15)(var13);
            case 868:
                var5.error = var12;
                var12 = function() {
                    var0 = global;
                    var3 = var0.setTimeout;
                    var0 = undefined;
                    var2 = function() { // Environment: var1
                        _fun91130: for (var _fun91130_ip = 0;;) switch (_fun91130_ip) {
                            case 0:
                                var0 = _closure2_slot4;
                                var1 = var0.current;
                                var0 = null;
                                if (!(var0 != var1)) {
                                    _fun91130_ip = 28;
                                    continue _fun91130
                                }
                            case 18:
                                var0 = var1.scrollToEnd;
                                var0 = var0.bind(var1)();
                            case 28:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var1 = 100;
                    var1 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var5.onFocus = var12;
                var10 = function() {
                    var0 = global;
                    var3 = var0.setTimeout;
                    var0 = undefined;
                    var2 = function() { // Environment: var1
                        _fun91132: for (var _fun91132_ip = 0;;) switch (_fun91132_ip) {
                            case 0:
                                var0 = _closure2_slot4;
                                var1 = var0.current;
                                var0 = null;
                                if (!(var0 != var1)) {
                                    _fun91132_ip = 28;
                                    continue _fun91132
                                }
                            case 18:
                                var0 = var1.scrollToEnd;
                                var0 = var0.bind(var1)();
                            case 28:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var1 = 100;
                    var1 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var5.onBlur = var10;
                var5 = var7.bind(var3)(var6, var5);
                var4[2] = var5;
                var7 = _closure1_slot10;
                var6 = _closure1_slot6;
                var5 = {};
                var10 = var9.redesignGrowSpacing;
                var5.style = var10;
                var5 = var7.bind(var3)(var6, var5);
                var4[3] = var5;
                var7 = _closure1_slot10;
                var6 = _closure1_slot6;
                var5 = {};
                var9 = var9.redesignButtonContainer;
                var5.style = var9;
                var10 = _closure1_slot10;
                var15 = _closure1_slot0;
                var12 = _closure1_slot2;
                var8 = 19;
                var8 = var12[var8];
                var8 = var15.bind(var3)(var8);
                var9 = var8.Button;
                var8 = {};
                var13 = 'lg';
                var8.size = var13;
                var13 = var12[var16];
                var13 = var15.bind(var3)(var13);
                var14 = var13.intl;
                var13 = var14.string;
                var12 = var12[var16];
                var12 = var15.bind(var3)(var12);
                var12 = var12.t;
                var12 = var12.Np4yXU;
                var12 = var13.bind(var14)(var12);
                var8.text = var12;
                var8.onPress = var11;
                var8 = var10.bind(var3)(var9, var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[4] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot13 = var0;
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
    var3 = 1;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var12 = 2;
    var6 = var5[var12];
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
    var3 = var11.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.GuildPrompts;
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot10 = var6;
    var3 = var3.jsxs;
    var _closure1_slot11 = var3;
    var3 = 7;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'flex': 1,
        'flexGrow': 2
    };
    var9 = 8;
    var10 = var5[var9];
    var10 = var4.bind(var0)(var10);
    var10 = var10.NAV_BAR_HEIGHT;
    var8.marginTop = var10;
    var3.container = var8;
    var13 = 'center';
    var10 = 16;
    var8 = {
        'alignSelf': 'center',
        'marginTop': 16
    };
    var3.guildIcon = var8;
    var8 = {
        'marginBottom': 8,
        'textAlign': 'center'
    };
    var3.title = var8;
    var8 = {};
    var8.textAlign = var13;
    var3.description = var8;
    var8 = {
        'alignItems': 'center',
        'justifyContent': 'center',
        'padding': 16
    };
    var3.header = var8;
    var8 = {};
    var8.marginHorizontal = var10;
    var3.input = var8;
    var8 = {};
    var10 = 9;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.lg;
    var8.borderRadius = var13;
    var3.redesignTextInput = var8;
    var8 = {};
    var8.flexGrow = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_24;
    var8.minHeight = var12;
    var3.redesignGrowSpacing = var8;
    var8 = {};
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_16;
    var8.paddingHorizontal = var10;
    var3.redesignButtonContainer = var8;
    var8 = {
        'backgroundColor': 'transparent',
        'borderBottomWidth': 0
    };
    var3.navbar = var8;
    var8 = {};
    var8.marginLeft = var9;
    var3.closeIcon = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot12 = var3;
    var3 = 25;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/directory_channels/native/components/GuildDirectoryNicknameUpsellModal.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var0 = arg0;
        var _closure2_slot0 = var0;
        var3 = _closure1_slot10;
        var1 = _closure1_slot0;
        var7 = _closure1_slot2;
        var0 = 23;
        var0 = var7[var0];
        var2 = undefined;
        var0 = var1.bind(var2)(var0);
        var1 = var0.Navigator;
        var0 = {};
        var6 = _closure1_slot1;
        var5 = 24;
        var5 = var7[var5];
        var5 = var6.bind(var2)(var5);
        var4 = function() { // Environment: var4
            var2 = _closure2_slot0;
            var1 = function arg0() {
                var0 = arg0;
                var2 = var0.guildId;
                var _closure4_slot0 = var2;
                var0 = var0.onHide;
                var _closure4_slot1 = var0;
                var5 = function() {
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var0 = 20;
                    var4 = var3[var0];
                    var0 = undefined;
                    var7 = var2.bind(var0)(var4);
                    var6 = var7.viewPrompt;
                    var1 = _closure1_slot9;
                    var5 = var1.REAL_NAME_PROMPT;
                    var4 = _closure4_slot0;
                    var4 = var6.bind(var7)(var5, var4);
                    var1 = _closure4_slot1;
                    var1 = var1.bind(var0)();
                    var1 = 21;
                    var1 = var3[var1];
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.close;
                    var1 = var1.bind(var2)();
                    return var0;
                };
                var _closure4_slot2 = var5;
                var0 = {};
                var2 = {};
                var3 = true;
                var2.fullscreen = var3;
                var6 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 22;
                var4 = var4[var3];
                var3 = undefined;
                var4 = var6.bind(var3)(var4);
                var3 = var4.getHeaderCloseButton;
                var3 = var3.bind(var4)(var5);
                var2.headerLeft = var3;
                var3 = function() {
                    var0 = null;
                    return var0;
                };
                var2.headerTitle = var3;
                var1 = function() {
                    var3 = _closure1_slot10;
                    var2 = _closure1_slot13;
                    var1 = {};
                    var4 = _closure4_slot0;
                    var1.guildId = var4;
                    var0 = _closure4_slot2;
                    var1.handleClose = var0;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var2.render = var1;
                var1 = 'UPSELL_SCREEN_KEY';
                var0[var1] = var2;
                return var0;
            };
            var0 = undefined;
            var0 = var1.bind(var0)(var2);
            return var0;
        };
        var4 = var5.bind(var2)(var4);
        var0.screens = var4;
        var4 = 'UPSELL_SCREEN_KEY';
        var0.initialRouteName = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 27, 1410, 11825, 33, 1297, 4698, 671, 566, 4888, 4694, 3341, 7388, 3932, 1234, 5877, 5402, 4075, 11826, 11833, 4700, 5781, 4923, 2]);