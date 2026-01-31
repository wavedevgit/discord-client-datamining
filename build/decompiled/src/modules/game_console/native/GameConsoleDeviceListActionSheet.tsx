// modules/game_console/native/GameConsoleDeviceListActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var14 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var14;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        var0 = arg0;
        var7 = var0.onPress;
        var8 = var0.transferring;
        var0 = _closure1_slot15;
        var3 = undefined;
        var5 = var0.bind(var3)();
        var2 = _closure1_slot12;
        var10 = _closure1_slot0;
        var11 = _closure1_slot2;
        var0 = 9;
        var0 = var11[var0];
        var0 = var10.bind(var3)(var0);
        var1 = var0.SafeAreaPaddingView;
        var0 = {};
        var6 = true;
        var0.bottom = var6;
        var5 = var5.footerContainer;
        var0.style = var5;
        var6 = _closure1_slot12;
        var5 = _closure1_slot1;
        var4 = 10;
        var4 = var11[var4];
        var5 = var5.bind(var3)(var4);
        var4 = {};
        var4.loading = var8;
        var8 = null;
        var8 = var8 == var7;
        var4.disabled = var8;
        var4.onPress = var7;
        var7 = 11;
        var8 = var11[var7];
        var8 = var10.bind(var3)(var8);
        var9 = var8.intl;
        var8 = var9.string;
        var7 = var11[var7];
        var7 = var10.bind(var3)(var7);
        var7 = var7.t;
        var7 = var7.FYi3ry;
        var7 = var8.bind(var9)(var7);
        var4.text = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot16 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var8 = var0.name;
        var0 = var0.platform;
        var0 = _closure1_slot15;
        var3 = undefined;
        var9 = var0.bind(var3)();
        var2 = _closure1_slot13;
        var1 = _closure1_slot7;
        var0 = {};
        var4 = var9.deviceOption;
        var0.style = var4;
        var7 = _closure1_slot12;
        var6 = _closure1_slot8;
        var4 = {};
        var10 = var9.deviceIcon;
        var4.style = var10;
        var12 = _closure1_slot1;
        var10 = _closure1_slot2;
        var11 = 12;
        var11 = var10[var11];
        var11 = var12.bind(var3)(var11);
        var4.source = var11;
        var6 = var7.bind(var3)(var6, var4);
        var4 = new Array(2);
        var4[0] = var6;
        var7 = _closure1_slot12;
        var6 = _closure1_slot0;
        var5 = 13;
        var5 = var10[var5];
        var5 = var6.bind(var3)(var5);
        var6 = var5.Text;
        var5 = {
            'style': null,
            'color': 'mobile-text-heading-primary',
            'variant': 'text-md/bold'
        };
        var9 = var9.deviceText;
        var5.style = var9;
        var5.children = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot17 = var0;
    var0 = function() {
        var0 = _closure1_slot15;
        var3 = undefined;
        var9 = var0.bind(var3)();
        var2 = _closure1_slot13;
        var1 = _closure1_slot7;
        var0 = {};
        var4 = var9.emptyContainer;
        var0.style = var4;
        var7 = _closure1_slot12;
        var5 = _closure1_slot8;
        var4 = {};
        var10 = _closure1_slot1;
        var12 = _closure1_slot2;
        var8 = 14;
        var8 = var12[var8];
        var8 = var10.bind(var3)(var8);
        var4.source = var8;
        var8 = var9.emptyArt;
        var4.style = var8;
        var5 = var7.bind(var3)(var5, var4);
        var4 = new Array(3);
        var4[0] = var5;
        var13 = _closure1_slot12;
        var11 = _closure1_slot0;
        var5 = 13;
        var7 = var12[var5];
        var7 = var11.bind(var3)(var7);
        var10 = var7.Text;
        var7 = {
            'style': null,
            'variant': 'heading-md/extrabold',
            'color': 'mobile-text-heading-primary'
        };
        var8 = var9.emptyHeader;
        var7.style = var8;
        var8 = 11;
        var14 = var12[var8];
        var14 = var11.bind(var3)(var14);
        var16 = var14.intl;
        var15 = var16.string;
        var14 = var12[var8];
        var14 = var11.bind(var3)(var14);
        var14 = var14.t;
        var14 = var14.OkJf1e;
        var14 = var15.bind(var16)(var14);
        var7.children = var14;
        var7 = var13.bind(var3)(var10, var7);
        var4[1] = var7;
        var7 = _closure1_slot12;
        var5 = var12[var5];
        var5 = var11.bind(var3)(var5);
        var6 = var5.Text;
        var5 = {
            'style': null,
            'variant': 'text-md/normal',
            'color': 'text-default'
        };
        var9 = var9.emptyBody;
        var5.style = var9;
        var9 = var12[var8];
        var9 = var11.bind(var3)(var9);
        var10 = var9.intl;
        var9 = var10.string;
        var8 = var12[var8];
        var8 = var11.bind(var3)(var8);
        var8 = var8.t;
        var8 = var8["of/l5Z"];
        var8 = var9.bind(var10)(var8);
        var5.children = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[2] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot18 = var0;
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
    var3 = var14.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var12 = 1;
    var3 = var5[var12];
    var3 = var14.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var6 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.Pressable;
    var _closure1_slot6 = var6;
    var6 = var3.View;
    var _closure1_slot7 = var6;
    var6 = var3.Image;
    var _closure1_slot8 = var6;
    var3 = var3.ActivityIndicator;
    var _closure1_slot9 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var14.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ComponentActions;
    var _closure1_slot11 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot12 = var6;
    var6 = var3.jsxs;
    var _closure1_slot13 = var6;
    var3 = var3.Fragment;
    var _closure1_slot14 = var3;
    var3 = 7;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var11 = 16;
    var10 = 'center';
    var8 = {
        'padding': 16,
        'justifyContent': 'center',
        'paddingBottom': 90
    };
    var3.container = var8;
    var8 = {};
    var9 = 56;
    var8.minHeight = var9;
    var3.loading = var8;
    var8 = {
        'padding': 16,
        'backgroundColor': null,
        'paddingBottom': 16
    };
    var9 = 8;
    var13 = var5[var9];
    var13 = var14.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_SURFACE_HIGH;
    var8.backgroundColor = var13;
    var3.footerContainer = var8;
    var8 = {};
    var13 = var5[var9];
    var13 = var14.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_SURFACE_HIGH;
    var8.backgroundColor = var13;
    var13 = var5[var9];
    var13 = var14.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.xs;
    var8.borderRadius = var13;
    var8.padding = var11;
    var3.radioItem = var8;
    var8 = {
        'marginRight': 16,
        'width': 32,
        'height': 32
    };
    var13 = var5[var9];
    var13 = var14.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.MOBILE_TEXT_HEADING_PRIMARY;
    var8.tintColor = var13;
    var3.deviceIcon = var8;
    var8 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'marginRight': 24
    };
    var3.deviceOption = var8;
    var8 = {};
    var8.flexShrink = var12;
    var3.deviceText = var8;
    var8 = {
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var3.emptyContainer = var8;
    var8 = {};
    var8.marginBottom = var11;
    var3.emptyArt = var8;
    var8 = {
        'marginBottom': 8,
        'textAlign': 'center'
    };
    var3.emptyHeader = var8;
    var8 = {};
    var8.textAlign = var10;
    var3.emptyBody = var8;
    var8 = {};
    var8.marginTop = var9;
    var3.infoBox = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot15 = var3;
    var3 = 26;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/game_console/native/GameConsoleDeviceListActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun66930: for (var _fun66930_ip = 0;;) switch (_fun66930_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.platform;
                var _closure2_slot0 = var1;
                var0 = var0.channel;
                var _closure2_slot1 = var0;
                var3 = undefined;
                var _closure2_slot2 = var3;
                var _closure2_slot4 = var3;
                var _closure2_slot6 = var3;
                var0 = function() {
                    var3 = undefined;
                    var0 = undefined;
                    var2 = _closure1_slot3;
                    var1 = function*() { // Environment: var1
                        var0 = function*() { // Original name: ?anon_0_, environment: var0
                            _fun66933: for (var _fun66933_ip = 0;;) switch (_fun66933_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun66933_ip = 208;
                                        continue _fun66933
                                    }
                                case 10:
                                    var4 = _closure1_slot1;
                                    var6 = _closure1_slot2;
                                    var1 = 17;
                                    var1 = var6[var1];
                                    var2 = undefined;
                                    var7 = var4.bind(var2)(var1);
                                    var5 = _closure2_slot4;
                                    var4 = null;
                                    var5 = var4 != var5;
                                    var4 = 'selectedDeviceId cannot be null';
                                    var4 = var7.bind(var2)(var5, var4);
                                    var5 = _closure2_slot6;
                                    var4 = true;
                                    var4 = var5.bind(var2)(var4);
                                    var5 = _closure2_slot2;
                                    var4 = _closure2_slot4;
                                    var7 = var5[var4];
                                    var5 = _closure1_slot0;
                                    var4 = 18;
                                    var4 = var6[var4];
                                    var6 = var5.bind(var2)(var4);
                                    var5 = var6.transferToPlaystationWithAlert;
                                    var4 = _closure2_slot0;
                                    var1 = _closure2_slot1;
                                    var1 = var5.bind(var6)(var4, var7, var1);
                                    SaveGenerator(address = 124);
                                case 122:
                                    return var1;
                                case 124:
                                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                                    if (var4) {
                                        _fun66933_ip = 205;
                                        continue _fun66933
                                    }
                                case 130:
                                    var5 = _closure1_slot1;
                                    var6 = _closure1_slot2;
                                    var4 = 19;
                                    var4 = var6[var4];
                                    var5 = var5.bind(var2)(var4);
                                    var4 = var5.hideActionSheet;
                                    var4 = var4.bind(var5)();
                                    var5 = _closure1_slot0;
                                    var4 = 20;
                                    var4 = var6[var4];
                                    var4 = var5.bind(var2)(var4);
                                    var5 = var4.ComponentDispatch;
                                    var4 = var5.dispatch;
                                    var3 = _closure1_slot11;
                                    var3 = var3.TOGGLE_CALL_CONTROL_DRAWER;
                                    var3 = var4.bind(var5)(var3);
                                    return var2;
                                case 205:
                                    return var1;
                                case 208:
                                    return var0;
                            }
                        };
                        return var0;
                    };
                    var3 = var2.bind(var3)(var1);
                    _closure2_slot7 = var3;
                    var2 = var3.apply;
                    var0 = arguments;
                    var1 = var0;
                    var0 = this;
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                var _closure2_slot7 = var0;
                var0 = _closure1_slot15;
                var11 = var0.bind(var3)();
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 15;
                var0 = var6[var2];
                var10 = var4.bind(var3)(var0);
                var9 = var10.useStateFromStores;
                var1 = _closure1_slot10;
                var7 = new Array(1);
                var7[0] = var1;
                var0 = function() { // Environment: var5
                    var2 = _closure1_slot10;
                    var1 = var2.getDevicesForPlatform;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var9.bind(var10)(var7, var0);
                _closure2_slot2 = var0;
                var7 = var6[var2];
                var12 = var4.bind(var3)(var7);
                var10 = var12.useStateFromStores;
                var9 = new Array(1);
                var9[0] = var1;
                var7 = function() { // Environment: var5
                    var2 = _closure1_slot10;
                    var1 = var2.getFetchingDevices;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var9 = var10.bind(var12)(var9, var7);
                var2 = var6[var2];
                var6 = var4.bind(var3)(var2);
                var4 = var6.useStateFromStores;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var5
                    var2 = _closure1_slot10;
                    var1 = var2.getLastSelectedDeviceByPlatform;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var2 = var4.bind(var6)(var2, var1);
                var _closure2_slot3 = var2;
                var6 = _closure1_slot5;
                var1 = var6.useState;
                var13 = null;
                var1 = var1.bind(var6)(var13);
                var14 = _closure1_slot4;
                var10 = 2;
                var4 = var14.bind(var3)(var1, var10);
                var1 = 0;
                var12 = var4[var1];
                _closure2_slot4 = var12;
                var7 = 1;
                var4 = var4[var7];
                var _closure2_slot5 = var4;
                var4 = var6.useState;
                var15 = false;
                var4 = var4.bind(var6)(var15);
                var4 = var14.bind(var3)(var4, var10);
                var16 = var4[var1];
                var4 = var4[var7];
                _closure2_slot6 = var4;
                var7 = var6.useEffect;
                var4 = new Array(2);
                var4[0] = var0;
                var4[1] = var2;
                var2 = function() { // Environment: var5
                    _fun66937: for (var _fun66937_ip = 0;;) switch (_fun66937_ip) {
                        case 0:
                            var0 = global;
                            var3 = var0.Object;
                            var2 = var3.values;
                            var1 = _closure2_slot2;
                            var1 = var2.bind(var3)(var1);
                            var3 = var1.length;
                            var2 = 1;
                            if (!(var2 !== var3)) {
                                _fun66937_ip = 64;
                                continue _fun66937
                            }
                        case 37:
                            var3 = _closure2_slot3;
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun66937_ip = 86;
                                continue _fun66937
                            }
                        case 47:
                            var4 = _closure2_slot5;
                            var3 = _closure2_slot3;
                            var2 = undefined;
                            var2 = var4.bind(var2)(var3);
                            _fun66937_ip = 86;
                            continue _fun66937;
                        case 64:
                            var2 = _closure2_slot5;
                            var0 = 0;
                            var0 = var1[var0];
                            var1 = var0.id;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                        case 86:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var7.bind(var6)(var2, var4);
                var4 = var6.useMemo;
                var2 = new Array(1);
                var2[0] = var0;
                var0 = function() { // Environment: var5
                    _fun66938: for (var _fun66938_ip = 0;;) switch (_fun66938_ip) {
                        case 0:
                            var0 = global;
                            var2 = var0.Object;
                            var1 = var2.values;
                            var4 = _closure2_slot2;
                            var0 = null;
                            if (!(var0 == var4)) {
                                _fun66938_ip = 32;
                                continue _fun66938
                            }
                        case 26:
                            var0 = new Array(0);
                            _fun66938_ip = 36;
                            continue _fun66938;
                        case 32:
                            var0 = _closure2_slot2;
                        case 36:
                            var2 = var1.bind(var2)(var0);
                            var1 = var2.map;
                            var0 = function(arg0) { // Environment: var0
                                var0 = arg0;
                                var2 = var0.id;
                                var5 = var0.name;
                                var1 = var0.platform;
                                var0 = {};
                                var0.value = var2;
                                var4 = _closure1_slot12;
                                var3 = _closure1_slot17;
                                var2 = {};
                                var2.name = var5;
                                var2.platform = var1;
                                var1 = undefined;
                                var1 = var4.bind(var1)(var3, var2);
                                var0.name = var1;
                                return var0;
                            };
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var17 = var4.bind(var6)(var0, var2);
                var0 = var17.length;
                if (!(!(var0 > var1))) {
                    _fun66930_ip = 354;
                    continue _fun66930
                }
            case 333:
                var2 = _closure1_slot12;
                var1 = _closure1_slot18;
                var0 = {};
                var7 = var2.bind(var3)(var1, var0);
                _fun66930_ip = 555;
                continue _fun66930;
            case 354:
                var2 = _closure1_slot13;
                var1 = _closure1_slot14;
                var0 = {};
                var14 = _closure1_slot12;
                var10 = _closure1_slot1;
                var20 = _closure1_slot2;
                var4 = 21;
                var4 = var20[var4];
                var6 = var10.bind(var3)(var4);
                var4 = {};
                var18 = var11.radioItem;
                var4.style = var18;
                var4.options = var17;
                var4.value = var12;
                var4.withDividers = var15;
                var15 = true;
                var4.withSpacing = var15;
                var4.disabled = var16;
                var15 = function arg0() {
                    var0 = arg0;
                    var4 = var0.value;
                    var2 = _closure2_slot5;
                    var0 = undefined;
                    var2 = var2.bind(var0)(var4);
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 16;
                    var2 = var5[var2];
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.persistSelectedDeviceId;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1, var4);
                    return var0;
                };
                var4.onChange = var15;
                var6 = var14.bind(var3)(var6, var4);
                var4 = new Array(2);
                var4[0] = var6;
                var14 = _closure1_slot12;
                var6 = 22;
                var6 = var20[var6];
                var10 = var10.bind(var3)(var6);
                var6 = {};
                var15 = var11.infoBox;
                var6.style = var15;
                var19 = _closure1_slot0;
                var15 = 11;
                var17 = var20[var15];
                var17 = var19.bind(var3)(var17);
                var18 = var17.intl;
                var17 = var18.string;
                var15 = var20[var15];
                var15 = var19.bind(var3)(var15);
                var15 = var15.t;
                var15 = var15.dI4HFq;
                var15 = var17.bind(var18)(var15);
                var6.children = var15;
                var6 = var14.bind(var3)(var10, var6);
                var4[1] = var6;
                var0.children = var4;
                var7 = var2.bind(var3)(var1, var0);
            case 555:
                var2 = _closure1_slot12;
                var1 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 23;
                var0 = var4[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.BottomSheet;
                var0 = {};
                var10 = _closure1_slot12;
                var6 = _closure1_slot16;
                var4 = {};
                var4.transferring = var16;
                var13 = var13 != var12;
                var12 = undefined;
                if (!var13) {
                    _fun66930_ip = 618;
                    continue _fun66930
                }
            case 611:
                var12 = function() {
                    var0 = undefined;
                    var3 = _closure2_slot7;
                    var2 = var3.apply;
                    var0 = arguments;
                    var1 = var0;
                    var0 = this;
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
            case 618:
                var4.onPress = var12;
                var4 = var10.bind(var3)(var6, var4);
                var0.footer = var4;
                var12 = _closure1_slot12;
                var15 = _closure1_slot0;
                var10 = _closure1_slot2;
                var4 = 24;
                var4 = var10[var4];
                var4 = var15.bind(var3)(var4);
                var6 = var4.BottomSheetTitleHeader;
                var4 = {};
                var19 = 11;
                var13 = var10[var19];
                var13 = var15.bind(var3)(var13);
                var14 = var13.intl;
                var13 = var14.string;
                var10 = var10[var19];
                var10 = var15.bind(var3)(var10);
                var10 = var10.t;
                var10 = var10.aUuz7W;
                var10 = var13.bind(var14)(var10);
                var4.title = var10;
                var15 = _closure1_slot12;
                var14 = _closure1_slot6;
                var13 = {};
                var10 = var9;
                if (var10) {
                    _fun66930_ip = 737;
                    continue _fun66930
                }
            case 734:
                var10 = var16;
            case 737:
                var13.disabled = var10;
                var5 = function() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 16;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.fetchDevices;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var13.onPress = var5;
                var18 = _closure1_slot12;
                var5 = _closure1_slot0;
                var10 = _closure1_slot2;
                var16 = 13;
                var16 = var10[var16];
                var16 = var5.bind(var3)(var16);
                var17 = var16.Text;
                var16 = {
                    'variant': 'text-md/semibold',
                    'color': 'text-brand'
                };
                var20 = var10[var19];
                var20 = var5.bind(var3)(var20);
                var21 = var20.intl;
                var20 = var21.string;
                var19 = var10[var19];
                var19 = var5.bind(var3)(var19);
                var19 = var19.t;
                var19 = var19.hb12iG;
                var19 = var20.bind(var21)(var19);
                var16.children = var19;
                var16 = var18.bind(var3)(var17, var16);
                var13.children = var16;
                var13 = var15.bind(var3)(var14, var13);
                var4.trailing = var13;
                var4 = var12.bind(var3)(var6, var4);
                var0.header = var4;
                var4 = true;
                var0.scrollable = var4;
                var6 = _closure1_slot12;
                var4 = 25;
                var4 = var10[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.BottomSheetScrollView;
                var4 = {};
                var10 = var11.container;
                var4.contentContainerStyle = var10;
                if (!var9) {
                    _fun66930_ip = 946;
                    continue _fun66930
                }
            case 920:
                var10 = _closure1_slot12;
                var9 = _closure1_slot9;
                var8 = {};
                var11 = var11.loading;
                var8.style = var11;
                var7 = var10.bind(var3)(var9, var8);
            case 946:
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 27, 3478, 660, 33, 1297, 671, 4697, 4836, 1234, 8264, 3900, 8265, 566, 8255, 44, 8262, 3237, 1229, 7101, 6853, 4894, 5174, 4896, 2]);