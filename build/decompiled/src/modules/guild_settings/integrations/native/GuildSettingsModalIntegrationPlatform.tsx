// modules/guild_settings/integrations/native/GuildSettingsModalIntegrationPlatform.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = function() {
        _fun115411: for (var _fun115411_ip = 0;;) switch (_fun115411_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 72: // try_end0
                _fun115411_ip = 76;
                continue _fun115411;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot20 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot20 = var0;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var6 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var6 = 6;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var8 = var6.ActivityIndicator;
    var _closure1_slot8 = var8;
    var8 = var6.Image;
    var _closure1_slot9 = var8;
    var8 = var6.StyleSheet;
    var6 = var6.View;
    var _closure1_slot10 = var6;
    var6 = 7;
    var6 = var5[var6];
    var6 = var7.bind(var0)(var6);
    var _closure1_slot11 = var6;
    var6 = 8;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var7 = var6.GuildSettingsSections;
    var _closure1_slot12 = var7;
    var7 = var6.HelpdeskArticles;
    var _closure1_slot13 = var7;
    var7 = var6.PlatformTypes;
    var _closure1_slot14 = var7;
    var6 = var6.UserSettingsSections;
    var _closure1_slot15 = var6;
    var6 = 9;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var7 = var6.jsx;
    var _closure1_slot16 = var7;
    var6 = var6.jsxs;
    var _closure1_slot17 = var6;
    var7 = var8.create;
    var6 = {};
    var9 = {
        'flex': 1,
        'paddingTop': 40
    };
    var6.loadingContainer = var9;
    var9 = {
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var6.trailingWrapper = var9;
    var9 = {
        'width': 24,
        'height': 24
    };
    var6.platformIcon = var9;
    var6 = var7.bind(var8)(var6);
    var _closure1_slot18 = var6;
    var6 = var3.Component;
    var3 = function(arg0) { // Environment: var1
        var4 = function arg0() {
            _fun115415: for (var _fun115415_ip = 0;;) switch (_fun115415_ip) {
                case 0:
                    var4 = this;
                    var12 = 0;
                    var0 = copyRestArgs(var12);
                    var7 = _closure1_slot3;
                    var2 = _closure2_slot0;
                    var3 = undefined;
                    var7 = var7.bind(var3)(var4, var2);
                    var9 = new Array(0);
                    var12 = var9;
                    var11 = var0;
                    var10 = 0;
                    var0 = arraySpread(var12, var11, var10);
                    var0 = _closure1_slot6;
                    var8 = var0.bind(var3)(var2);
                    var2 = _closure1_slot5;
                    var0 = _closure1_slot20;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun115415_ip = 86;
                        continue _fun115415
                    }
                case 73:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun115415_ip = 120;
                    continue _fun115415;
                case 86:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot6;
                    var5 = var5.bind(var3)(var4);
                    var5 = var5.constructor;
                    var0 = var6.bind(var7)(var8, var9, var5);
                case 120:
                    var0 = var2.bind(var3)(var4, var0);
                    var _closure3_slot0 = var0;
                    var2 = {};
                    var3 = var0.props;
                    var3 = var3.integration;
                    var3 = var3.enabled;
                    var2.enabled = var3;
                    var0.state = var2;
                    var1 = function() { // Environment: var1
                        _fun115416: for (var _fun115416_ip = 0;;) switch (_fun115416_ip) {
                            case 0:
                                var1 = _closure3_slot0;
                                var1 = var1.props;
                                var3 = var1.guild;
                                var _closure4_slot0 = var3;
                                var6 = var1.integration;
                                var _closure4_slot1 = var6;
                                var1 = var6.syncing;
                                if (var1) {
                                    _fun115416_ip = 532;
                                    continue _fun115416
                                }
                            case 45:
                                var5 = var6.enabled;
                                var2 = _closure3_slot0;
                                var1 = var2.setState;
                                var0 = {};
                                if (var5) {
                                    _fun115416_ip = 134;
                                    continue _fun115416
                                }
                            case 65:
                                var5 = true;
                                var0.enabled = var5;
                                var5 = var1.bind(var2)(var0);
                                var8 = _closure1_slot1;
                                var7 = _closure1_slot2;
                                var5 = 10;
                                var7 = var7[var5];
                                var5 = undefined;
                                var9 = var8.bind(var5)(var7);
                                var8 = var9.enableIntegration;
                                var7 = var3.id;
                                var5 = var6.type;
                                var3 = var6.id;
                                var3 = var8.bind(var9)(var7, var5, var3);
                                _fun115416_ip = 532;
                                continue _fun115416;
                            case 134:
                                var3 = false;
                                var0.enabled = var3;
                                var0 = var1.bind(var2)(var0);
                                var1 = _closure1_slot1;
                                var8 = _closure1_slot2;
                                var0 = 11;
                                var0 = var8[var0];
                                var5 = undefined;
                                var2 = var1.bind(var5)(var0);
                                var1 = var2.show;
                                var0 = {};
                                var11 = _closure1_slot0;
                                var7 = 12;
                                var9 = var8[var7];
                                var9 = var11.bind(var5)(var9);
                                var10 = var9.intl;
                                var9 = var10.string;
                                var8 = var8[var7];
                                var8 = var11.bind(var5)(var8);
                                var8 = var8.t;
                                var8 = var8.emx3lN;
                                var8 = var9.bind(var10)(var8);
                                var0.title = var8;
                                var8 = var6.type;
                                var6 = 'youtube';
                                if (!(var6 !== var8)) {
                                    _fun115416_ip = 304;
                                    continue _fun115416
                                }
                            case 248:
                                var10 = _closure1_slot0;
                                var6 = _closure1_slot2;
                                var8 = var6[var7];
                                var8 = var10.bind(var5)(var8);
                                var9 = var8.intl;
                                var8 = var9.string;
                                var6 = var6[var7];
                                var6 = var10.bind(var5)(var6);
                                var6 = var6.t;
                                var6 = var6["BW/xtn"];
                                var6 = var8.bind(var9)(var6);
                                _fun115416_ip = 358;
                                continue _fun115416;
                            case 304:
                                var11 = _closure1_slot0;
                                var8 = _closure1_slot2;
                                var9 = var8[var7];
                                var9 = var11.bind(var5)(var9);
                                var10 = var9.intl;
                                var9 = var10.string;
                                var8 = var8[var7];
                                var8 = var11.bind(var5)(var8);
                                var8 = var8.t;
                                var8 = var8.anKQWU;
                                var6 = var9.bind(var10)(var8);
                            case 358:
                                var0.body = var6;
                                var10 = _closure1_slot0;
                                var6 = _closure1_slot2;
                                var8 = var6[var7];
                                var8 = var10.bind(var5)(var8);
                                var11 = var8.intl;
                                var9 = var11.string;
                                var8 = var6[var7];
                                var8 = var10.bind(var5)(var8);
                                var8 = var8.t;
                                var8 = var8.R9GHya;
                                var8 = var9.bind(var11)(var8);
                                var0.confirmText = var8;
                                var8 = var6[var7];
                                var8 = var10.bind(var5)(var8);
                                var9 = var8.intl;
                                var8 = var9.string;
                                var7 = var6[var7];
                                var7 = var10.bind(var5)(var7);
                                var7 = var7.t;
                                var7 = var7["ETE/oC"];
                                var7 = var8.bind(var9)(var7);
                                var0.cancelText = var7;
                                var7 = function() {
                                    var2 = _closure1_slot1;
                                    var1 = _closure1_slot2;
                                    var0 = 10;
                                    var1 = var1[var0];
                                    var0 = undefined;
                                    var3 = var2.bind(var0)(var1);
                                    var2 = var3.disableIntegration;
                                    var1 = _closure4_slot0;
                                    var1 = var1.id;
                                    var0 = _closure4_slot1;
                                    var0 = var0.id;
                                    var0 = var2.bind(var3)(var1, var0);
                                    return var0;
                                };
                                var0.onConfirm = var7;
                                var4 = function() {
                                    var2 = _closure3_slot0;
                                    var1 = var2.setState;
                                    var0 = {};
                                    var3 = true;
                                    var0.enabled = var3;
                                    var0 = var1.bind(var2)(var0);
                                    return var0;
                                };
                                var0.onCancel = var4;
                                var4 = _closure1_slot1;
                                var3 = 13;
                                var3 = var6[var3];
                                var3 = var4.bind(var5)(var3);
                                var3 = var3.Colors;
                                var3 = var3.RED;
                                var0.confirmColor = var3;
                                var0 = var1.bind(var2)(var0);
                            case 532:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.handleToggleEnabled = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg0;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'render';
        var5.key = var1;
        var1 = function() {
            _fun115419: for (var _fun115419_ip = 0;;) switch (_fun115419_ip) {
                case 0:
                    var8 = this;
                    var0 = var8.props;
                    var9 = var0.integration;
                    var _closure3_slot0 = var9;
                    var1 = var0.onPress;
                    var _closure3_slot1 = var1;
                    var16 = var0.theme;
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 14;
                    var0 = var2[var0];
                    var3 = undefined;
                    var0 = var1.bind(var3)(var0);
                    var2 = var0.SUPPORTED_SETTINGS_INTEGRATION_PLATFORMS;
                    var1 = var2.includes;
                    var0 = var9.type;
                    var0 = var1.bind(var2)(var0);
                    if (var0) {
                        _fun115419_ip = 88;
                        continue _fun115419
                    }
                case 84:
                    var0 = null;
                    return var0;
                case 88:
                    var1 = var9.type;
                    var2 = _closure1_slot0;
                    var0 = _closure1_slot2;
                    var4 = 15;
                    var0 = var0[var4];
                    var0 = var2.bind(var3)(var0);
                    var0 = var0.IntegrationTypes;
                    var0 = var0.YOUTUBE;
                    if (!(var0 !== var1)) {
                        _fun115419_ip = 195;
                        continue _fun115419
                    }
                case 129:
                    var2 = _closure1_slot0;
                    var0 = _closure1_slot2;
                    var0 = var0[var4];
                    var0 = var2.bind(var3)(var0);
                    var0 = var0.IntegrationTypes;
                    var0 = var0.TWITCH;
                    var13 = undefined;
                    if (!(var0 === var1)) {
                        _fun115419_ip = 220;
                        continue _fun115419
                    }
                case 164:
                    var2 = var9.name;
                    var0 = global;
                    var0 = var0.HermesInternal;
                    var1 = var0.concat;
                    var0 = 'twitch.tv/';
                    var13 = var1.bind(var0)(var2);
                    _fun115419_ip = 220;
                    continue _fun115419;
                case 195:
                    var1 = var9.account;
                    var0 = null;
                    var2 = var0 == var1;
                    var0 = undefined;
                    if (var2) {
                        _fun115419_ip = 217;
                        continue _fun115419
                    }
                case 212:
                    var0 = var1.name;
                case 217:
                    var13 = var0;
                case 220:
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 16;
                    var0 = var2[var0];
                    var2 = var1.bind(var3)(var0);
                    var1 = var2.get;
                    var0 = var9.type;
                    var10 = var1.bind(var2)(var0);
                    var14 = null;
                    var0 = var14 != var10;
                    var12 = null;
                    if (!var0) {
                        _fun115419_ip = 376;
                        continue _fun115419
                    }
                case 266:
                    var2 = _closure1_slot16;
                    var1 = _closure1_slot9;
                    var0 = {};
                    var15 = _closure1_slot0;
                    var17 = _closure1_slot2;
                    var4 = 17;
                    var4 = var17[var4];
                    var7 = var15.bind(var3)(var4);
                    var5 = var7.makeSource;
                    var4 = 18;
                    var4 = var17[var4];
                    var15 = var15.bind(var3)(var4);
                    var4 = var15.isThemeDark;
                    var4 = var4.bind(var15)(var16);
                    var10 = var10.icon;
                    if (var4) {
                        _fun115419_ip = 341;
                        continue _fun115419
                    }
                case 333:
                    var4 = var10.lightPNG;
                    _fun115419_ip = 347;
                    continue _fun115419;
                case 341:
                    var4 = var10.darkPNG;
                case 347:
                    var4 = var5.bind(var7)(var4);
                    var0.source = var4;
                    var4 = _closure1_slot18;
                    var4 = var4.platformIcon;
                    var0.style = var4;
                    var12 = var2.bind(var3)(var1, var0);
                case 376:
                    var2 = _closure1_slot17;
                    var7 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var5 = 19;
                    var0 = var4[var5];
                    var0 = var7.bind(var3)(var0);
                    var1 = var0.FormSection;
                    var0 = {};
                    var10 = _closure1_slot16;
                    var4 = var4[var5];
                    var4 = var7.bind(var3)(var4);
                    var7 = var4.FormRow;
                    var4 = {};
                    var16 = var9.user;
                    var15 = var14 == var16;
                    var14 = undefined;
                    if (var15) {
                        _fun115419_ip = 452;
                        continue _fun115419
                    }
                case 443:
                    var15 = var16.toString;
                    var14 = var15.bind(var16)();
                case 452:
                    var4.label = var14;
                    var4.subLabel = var13;
                    var15 = _closure1_slot17;
                    var14 = _closure1_slot10;
                    var13 = {};
                    var16 = _closure1_slot18;
                    var16 = var16.trailingWrapper;
                    var13.style = var16;
                    var17 = var9.syncing;
                    if (!var17) {
                        _fun115419_ip = 522;
                        continue _fun115419
                    }
                case 494:
                    var19 = _closure1_slot16;
                    var18 = _closure1_slot8;
                    var16 = {
                        'animating': true,
                        'size': 'small'
                    };
                    var17 = var19.bind(var3)(var18, var16);
                case 522:
                    var16 = new Array(2);
                    var16[0] = var17;
                    var17 = var9.enabled;
                    if (!var17) {
                        _fun115419_ip = 547;
                        continue _fun115419
                    }
                case 538:
                    var18 = var9.syncing;
                    var17 = !var18;
                case 547:
                    if (!var17) {
                        _fun115419_ip = 591;
                        continue _fun115419
                    }
                case 550:
                    var20 = _closure1_slot16;
                    var19 = _closure1_slot0;
                    var18 = _closure1_slot2;
                    var18 = var18[var5];
                    var18 = var19.bind(var3)(var18);
                    var18 = var18.FormRow;
                    var19 = var18.Arrow;
                    var18 = {};
                    var17 = var20.bind(var3)(var19, var18);
                case 591:
                    var16[1] = var17;
                    var13.children = var16;
                    var13 = var15.bind(var3)(var14, var13);
                    var4.trailing = var13;
                    var4.leading = var12;
                    var12 = var9.enabled;
                    var12 = !var12;
                    if (var12) {
                        _fun115419_ip = 632;
                        continue _fun115419
                    }
                case 626:
                    var12 = var9.syncing;
                case 632:
                    var4.disabled = var12;
                    var11 = function() {
                        _fun115420: for (var _fun115420_ip = 0;;) switch (_fun115420_ip) {
                            case 0:
                                var0 = _closure3_slot0;
                                var0 = var0.enabled;
                                if (!var0) {
                                    _fun115420_ip = 30;
                                    continue _fun115420
                                }
                            case 15:
                                var3 = _closure3_slot1;
                                var2 = _closure3_slot0;
                                var1 = undefined;
                                var0 = var3.bind(var1)(var2);
                            case 30:
                                return var0;
                        }
                    };
                    var4.onPress = var11;
                    var7 = var10.bind(var3)(var7, var4);
                    var4 = new Array(2);
                    var4[0] = var7;
                    var7 = _closure1_slot16;
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var5 = var12[var5];
                    var5 = var11.bind(var3)(var5);
                    var6 = var5.FormSwitchRow;
                    var5 = {};
                    var10 = var8.state;
                    var10 = var10.enabled;
                    var5.value = var10;
                    var10 = var9.syncing;
                    var9 = true;
                    var9 = var9 === var10;
                    var5.disabled = var9;
                    var8 = var8.handleToggleEnabled;
                    var5.onValueChange = var8;
                    var8 = 12;
                    var9 = var12[var8];
                    var9 = var11.bind(var3)(var9);
                    var10 = var9.intl;
                    var9 = var10.string;
                    var8 = var12[var8];
                    var8 = var11.bind(var3)(var8);
                    var8 = var8.t;
                    var8 = var8.vQC6vR;
                    var8 = var9.bind(var10)(var8);
                    var5.label = var8;
                    var5 = var7.bind(var3)(var6, var5);
                    var4[1] = var5;
                    var0.children = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
            }
        };
        var5.value = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var5 = {};
        var6 = 'getDerivedStateFromProps';
        var5.key = var6;
        var0 = function arg0, arg1() {
            _fun115421: for (var _fun115421_ip = 0;;) switch (_fun115421_ip) {
                case 0:
                    var0 = arg0;
                    var2 = var0.integration;
                    var0 = arg1;
                    var3 = var0.enabled;
                    var0 = null;
                    if (!var3) {
                        _fun115421_ip = 61;
                        continue _fun115421
                    }
                case 22:
                    var5 = var2.syncing;
                    var1 = false;
                    var0 = null;
                    if (!(var1 === var5)) {
                        _fun115421_ip = 61;
                        continue _fun115421
                    }
                case 36:
                    var1 = var2.enabled;
                    var0 = null;
                    if (!(var1 !== var3)) {
                        _fun115421_ip = 61;
                        continue _fun115421
                    }
                case 47:
                    var1 = {};
                    var2 = var2.enabled;
                    var1.enabled = var2;
                    var0 = var1;
                case 61:
                    return var0;
            }
        };
        var5.value = var0;
        var0 = new Array(1);
        var0[0] = var5;
        var0 = var2.bind(var3)(var4, var1, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var6);
    var _closure1_slot19 = var3;
    var3 = 29;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_settings/integrations/native/GuildSettingsModalIntegrationPlatform.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun115422: for (var _fun115422_ip = 0;;) switch (_fun115422_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.contentContainerStyle;
                var2 = var0.platformType;
                var _closure2_slot0 = var2;
                var0 = var0.closeGuildSettings;
                var _closure2_slot1 = var0;
                var4 = undefined;
                var _closure2_slot7 = var4;
                var6 = _closure1_slot0;
                var11 = _closure1_slot2;
                var0 = 20;
                var0 = var11[var0];
                var1 = var6.bind(var4)(var0);
                var0 = var1.useNavigation;
                var5 = var0.bind(var1)();
                var _closure2_slot2 = var5;
                var3 = 21;
                var0 = var11[var3];
                var13 = var6.bind(var4)(var0);
                var12 = var13.useStateFromStoresObject;
                var0 = _closure1_slot11;
                var10 = new Array(1);
                var10[0] = var0;
                var1 = function() { // Environment: var8
                    var0 = {};
                    var2 = _closure1_slot11;
                    var1 = var2.getGuild;
                    var1 = var1.bind(var2)();
                    var0.guild = var1;
                    var1 = var2.isSubmitting;
                    var1 = var1.bind(var2)();
                    var0.submitting = var1;
                    var1 = var2.hasChanges;
                    var1 = var1.bind(var2)();
                    var0.hasChanges = var1;
                    return var0;
                };
                var1 = var12.bind(var13)(var10, var1);
                var10 = var1.submitting;
                var _closure2_slot3 = var10;
                var12 = var1.hasChanges;
                var _closure2_slot4 = var12;
                var1 = var1.guild;
                var _closure2_slot5 = var1;
                var13 = _closure1_slot1;
                var12 = 22;
                var12 = var11[var12];
                var12 = var13.bind(var4)(var12);
                var12 = var12.bind(var4)();
                var _closure2_slot6 = var12;
                var3 = var11[var3];
                var11 = var6.bind(var4)(var3);
                var6 = var11.useStateFromStores;
                var3 = new Array(1);
                var3[0] = var0;
                var0 = function() { // Environment: var8
                    var1 = _closure1_slot11;
                    var0 = var1.getProps;
                    var0 = var0.bind(var1)();
                    var0 = var0.integrations;
                    return var0;
                };
                var11 = var6.bind(var11)(var3, var0);
                var0 = null;
                var3 = var0 == var11;
                var12 = undefined;
                if (var3) {
                    _fun115422_ip = 235;
                    continue _fun115422
                }
            case 218:
                var6 = var11.filter;
                var3 = function(arg0) { // Environment: var8
                    var0 = arg0;
                    var1 = var0.type;
                    var0 = _closure2_slot0;
                    var0 = var1 === var0;
                    return var0;
                };
                var12 = var6.bind(var11)(var3);
            case 235:
                if (!(var0 != var1)) {
                    _fun115422_ip = 796;
                    continue _fun115422
                }
            case 242:
                var1 = function() {
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 10;
                    var1 = var1[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.saveGuild;
                    var5 = _closure2_slot5;
                    var2 = var5.id;
                    var1 = {};
                    var5 = var5.features;
                    var1.features = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                _closure2_slot7 = var1;
                var3 = var5.setOptions;
                var1 = {};
                var6 = undefined;
                if (!var10) {
                    _fun115422_ip = 273;
                    continue _fun115422
                }
            case 266:
                var6 = function() { // Environment: var8
                    var0 = null;
                    return var0;
                };
            case 273:
                var1.headerLeft = var6;
                var10 = _closure1_slot1;
                var11 = _closure1_slot2;
                var6 = 16;
                var6 = var11[var6];
                var10 = var10.bind(var4)(var6);
                var6 = var10.get;
                var10 = var6.bind(var10)(var2);
                var11 = var0 == var10;
                var6 = undefined;
                if (var11) {
                    _fun115422_ip = 322;
                    continue _fun115422
                }
            case 317:
                var6 = var10.name;
            case 322:
                var1.title = var6;
                var6 = function() {
                    _fun115428: for (var _fun115428_ip = 0;;) switch (_fun115428_ip) {
                        case 0:
                            var0 = _closure2_slot3;
                            if (var0) {
                                _fun115428_ip = 123;
                                continue _fun115428
                            }
                        case 10:
                            var1 = _closure2_slot4;
                            var0 = null;
                            if (!var1) {
                                _fun115428_ip = 121;
                                continue _fun115428
                            }
                        case 19:
                            var4 = _closure1_slot16;
                            var9 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var1 = 24;
                            var1 = var10[var1];
                            var3 = undefined;
                            var1 = var9.bind(var3)(var1);
                            var2 = var1.HeaderActionButton;
                            var1 = {};
                            var6 = 12;
                            var7 = var10[var6];
                            var7 = var9.bind(var3)(var7);
                            var8 = var7.intl;
                            var7 = var8.string;
                            var6 = var10[var6];
                            var6 = var9.bind(var3)(var6);
                            var6 = var6.t;
                            var6 = var6["R3BPH+"];
                            var6 = var7.bind(var8)(var6);
                            var1.text = var6;
                            var5 = _closure2_slot7;
                            var1.onPress = var5;
                            var0 = var4.bind(var3)(var2, var1);
                        case 121:
                            _fun115428_ip = 166;
                            continue _fun115428;
                        case 123:
                            var4 = _closure1_slot16;
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 23;
                            var1 = var3[var1];
                            var3 = undefined;
                            var1 = var2.bind(var3)(var1);
                            var2 = var1.HeaderSubmittingIndicator;
                            var1 = {};
                            var0 = var4.bind(var3)(var2, var1);
                        case 166:
                            return var0;
                    }
                };
                var1.headerRight = var6;
                var1 = var3.bind(var5)(var1);
                var6 = function() {
                    var1 = _closure2_slot1;
                    var0 = undefined;
                    var1 = var1.bind(var0)();
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 25;
                    var1 = var3[var1];
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.openUserSettings;
                    var1 = {};
                    var4 = _closure1_slot15;
                    var4 = var4.CONNECTIONS;
                    var1.screen = var4;
                    var4 = true;
                    var1.isRootScreen = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var1 = _closure1_slot14;
                var1 = var1.YOUTUBE;
                if (!(var1 !== var2)) {
                    _fun115422_ip = 495;
                    continue _fun115422
                }
            case 367:
                var1 = _closure1_slot14;
                var1 = var1.TWITCH;
                var13 = undefined;
                if (!(var1 === var2)) {
                    _fun115422_ip = 602;
                    continue _fun115422
                }
            case 386:
                var2 = _closure1_slot0;
                var14 = _closure1_slot2;
                var1 = 12;
                var3 = var14[var1];
                var3 = var2.bind(var4)(var3);
                var5 = var3.intl;
                var3 = var5.format;
                var1 = var14[var1];
                var1 = var2.bind(var4)(var1);
                var1 = var1.t;
                var2 = var1.ro1jEN;
                var1 = {};
                var1.connectAction = var6;
                var11 = _closure1_slot1;
                var10 = 26;
                var10 = var14[var10];
                var14 = var11.bind(var4)(var10);
                var11 = var14.getArticleURL;
                var10 = _closure1_slot13;
                var10 = var10.TWITCH_INTEGRATION;
                var10 = var11.bind(var14)(var10);
                var1.helpdeskArticle = var10;
                var13 = var3.bind(var5)(var2, var1);
                _fun115422_ip = 602;
                continue _fun115422;
            case 495:
                var2 = _closure1_slot0;
                var11 = _closure1_slot2;
                var1 = 12;
                var3 = var11[var1];
                var3 = var2.bind(var4)(var3);
                var5 = var3.intl;
                var3 = var5.format;
                var1 = var11[var1];
                var1 = var2.bind(var4)(var1);
                var1 = var1.t;
                var2 = var1["4OSAQ9"];
                var1 = {};
                var1.connectAction = var6;
                var10 = _closure1_slot1;
                var6 = 26;
                var6 = var11[var6];
                var11 = var10.bind(var4)(var6);
                var10 = var11.getArticleURL;
                var6 = _closure1_slot13;
                var6 = var6.YOUTUBE_INTEGRATION;
                var6 = var10.bind(var11)(var6);
                var1.helpdeskArticle = var6;
                var13 = var3.bind(var5)(var2, var1);
            case 602:
                var3 = _closure1_slot17;
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 27;
                var1 = var5[var1];
                var1 = var6.bind(var4)(var1);
                var2 = var1.RedesignCompat;
                var1 = {};
                var11 = 19;
                var5 = var5[var11];
                var5 = var6.bind(var4)(var5);
                var6 = var5.Form;
                var5 = {};
                var5.contentContainerStyle = var7;
                var10 = var0 == var12;
                var7 = undefined;
                if (var10) {
                    _fun115422_ip = 685;
                    continue _fun115422
                }
            case 668:
                var10 = var12.map;
                var8 = function(arg0, arg1) { // Environment: var8
                    var0 = arg0;
                    var2 = arg1;
                    var _closure3_slot0 = var2;
                    var4 = _closure1_slot16;
                    var3 = _closure1_slot19;
                    var2 = {};
                    var6 = _closure2_slot5;
                    var2.guild = var6;
                    var5 = _closure2_slot6;
                    var2.theme = var5;
                    var2.integration = var0;
                    var1 = function() {
                        var4 = _closure3_slot0;
                        var3 = _closure2_slot2;
                        var2 = var3.push;
                        var0 = _closure1_slot12;
                        var1 = var0.INTEGRATION_SETTINGS;
                        var0 = {};
                        var0.integrationId = var4;
                        var0 = var2.bind(var3)(var1, var0);
                        var0 = undefined;
                        return var0;
                    };
                    var2.onPress = var1;
                    var1 = var0.id;
                    var0 = undefined;
                    var0 = var4.bind(var0)(var3, var2, var1);
                    return var0;
                };
                var7 = var10.bind(var12)(var8);
            case 685:
                var10 = new Array(2);
                var10[0] = var7;
                var8 = _closure1_slot16;
                var7 = _closure1_slot0;
                var9 = _closure1_slot2;
                var11 = var9[var11];
                var11 = var7.bind(var4)(var11);
                var12 = var11.FormHint;
                var11 = {};
                var11.children = var13;
                var11 = var8.bind(var4)(var12, var11);
                var10[1] = var11;
                var5.children = var10;
                var6 = var3.bind(var4)(var6, var5);
                var5 = new Array(2);
                var5[0] = var6;
                var6 = 28;
                var6 = var9[var6];
                var6 = var7.bind(var4)(var6);
                var7 = var6.NavScrim;
                var6 = {};
                var6 = var8.bind(var4)(var7, var6);
                var5[1] = var6;
                var1.children = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 796:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 31, 27, 8115, 660, 33, 8114, 3895, 1234, 3896, 14668, 14698, 4359, 1417, 3165, 5340, 1469, 566, 3205, 4668, 5284, 5884, 1675, 4860, 5167, 2]);