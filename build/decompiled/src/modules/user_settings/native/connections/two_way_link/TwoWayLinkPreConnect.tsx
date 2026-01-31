// modules/user_settings/native/connections/two_way_link/TwoWayLinkPreConnect.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun47521: for (var _fun47521_ip = 0;;) switch (_fun47521_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun47521_ip = 190;
                            continue _fun47521
                        }
                    case 10:
                        var2 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var1 = 8;
                        var1 = var7[var1];
                        var8 = undefined;
                        var4 = var2.bind(var8)(var1);
                        var3 = var4.authorize;
                        var2 = {};
                        var5 = _closure1_slot0;
                        var1 = 9;
                        var1 = var7[var1];
                        var1 = var5.bind(var8)(var1);
                        var1 = var1.TwoWayLinkType;
                        var1 = var1.MOBILE;
                        var2.twoWayLinkType = var1;
                        var1 = arg0;
                        var1 = var3.bind(var4)(var1, var2);
                        SaveGenerator(address = 89);
                    case 87:
                        return var1;
                    case 89:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun47521_ip = 187;
                            continue _fun47521
                        }
                    case 95:
                        var2 = var1.body;
                        var2 = var2.url;
                        var4 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var3 = 10;
                        var3 = var9[var3];
                        var5 = var4.bind(var8)(var3);
                        var4 = var5.openURL;
                        var7 = _closure1_slot0;
                        var3 = 11;
                        var3 = var9[var3];
                        var7 = var7.bind(var8)(var3);
                        var3 = var7.isAndroid;
                        var3 = var3.bind(var7)();
                        var6 = _closure1_slot8;
                        if (var3) {
                            _fun47521_ip = 172;
                            continue _fun47521
                        }
                    case 164:
                        var3 = var6.IN_APP;
                        _fun47521_ip = 178;
                        continue _fun47521;
                    case 172:
                        var3 = var6.CHROME;
                    case 178:
                        var3 = var4.bind(var5)(var2, var3);
                        return var2;
                    case 187:
                        return var1;
                    case 190:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot13 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot13 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var7 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.Image;
    var _closure1_slot6 = var7;
    var3 = var3.View;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.WebBrowserType;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot9 = var7;
    var3 = var3.jsxs;
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var5[var3];
    var7 = var6.bind(var0)(var3);
    var3 = var7.prototype;
    var6 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var12 = 'TwoWayLink';
    var13 = var6;
    var3 = new var13[var7](var12, var11);
    var3 = var3 instanceof Object ? var3 : var6;
    var _closure1_slot11 = var3;
    var3 = 7;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 32;
    var8.marginBottom = var9;
    var3.image = var8;
    var8 = {};
    var9 = 8;
    var8.marginTop = var9;
    var3.redirect = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot12 = var3;
    var3 = 20;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/connections/two_way_link/TwoWayLinkPreConnect.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun47522: for (var _fun47522_ip = 0;;) switch (_fun47522_ip) {
            case 0:
                var2 = arg0;
                var7 = var2.platformType;
                var _closure2_slot0 = var7;
                var11 = var2.onError;
                var _closure2_slot1 = var11;
                var1 = var2.onNext;
                var _closure2_slot2 = var1;
                var6 = var2.img;
                var17 = var2.imgStyle;
                var20 = var2.title;
                var16 = var2.body;
                var18 = var2.redirectDestination;
                var2 = _closure1_slot12;
                var3 = undefined;
                var14 = var2.bind(var3)();
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 12;
                var2 = var5[var2];
                var4 = var4.bind(var3)(var2);
                var2 = var4.useTwoWayLinkStyles;
                var10 = var2.bind(var4)();
                var4 = _closure1_slot5;
                var5 = var4.useState;
                var2 = false;
                var9 = var5.bind(var4)(var2);
                var5 = _closure1_slot3;
                var2 = 2;
                var5 = var5.bind(var3)(var9, var2);
                var2 = 0;
                var12 = var5[var2];
                var2 = 1;
                var2 = var5[var2];
                var _closure2_slot3 = var2;
                var2 = var4.useRef;
                var2 = var2.bind(var4)(var3);
                var _closure2_slot4 = var2;
                var9 = var4.useCallback;
                var5 = _closure1_slot4;
                var2 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun47524: for (var _fun47524_ip = 0;;) switch (_fun47524_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun47524_ip = 172;
                                    continue _fun47524
                                }
                            case 10:
                                var2 = undefined;
                                var5 = undefined;
                                var4 = _closure2_slot3;
                                var3 = true;
                                var3 = var4.bind(var2)(var3);
                            case 28: // try_start_0
                                var4 = _closure2_slot0;
                                var3 = function() {
                                    var0 = undefined;
                                    var3 = _closure1_slot13;
                                    var2 = var3.apply;
                                    var0 = arguments;
                                    var1 = var0;
                                    var0 = this;
                                    var0 = var2.bind(var3)(var0, var1);
                                    return var0;
                                };
                                var3 = var3.bind(var2)(var4);
                                SaveGenerator(address = 48);
                            case 46:
                                return var3;
                            case 48:
                                ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 4);
                                if (var4) {
                                    _fun47524_ip = 154;
                                    continue _fun47524
                                }
                            case 54:
                                var5 = var3;
                            case 57: // try_end0
                                var6 = _closure2_slot3;
                                var4 = false;
                                var4 = var6.bind(var2)(var4);
                                var8 = _closure1_slot0;
                                var7 = _closure1_slot2;
                                var6 = 13;
                                var6 = var7[var6];
                                var8 = var8.bind(var2)(var6);
                                var6 = var8.getCallbackParamsFromURL;
                                var5 = var6.bind(var8)(var5);
                                var5 = var5.state;
                                var6 = _closure1_slot1;
                                var4 = 14;
                                var4 = var7[var4];
                                var7 = var6.bind(var2)(var4);
                                var4 = null;
                                var6 = var4 != var5;
                                var4 = 'Authorize URL state query parameter must be present';
                                var4 = var7.bind(var2)(var6, var4);
                                var4 = _closure2_slot4;
                                var4.current = var5;
                                return var2;
                            case 154:
                                return var3;
                            case 157: // catch_target0
                                CatchBlockStart(arg_register = 3);
                                var1 = _closure2_slot1;
                                var1 = var1.bind(var2)();
                                var1 = undefined;
                                return var1;
                            case 172:
                                return var0;
                        }
                    };
                    return var0;
                };
                var5 = var5.bind(var3)(var2);
                var2 = new Array(2);
                var2[0] = var11;
                var2[1] = var7;
                var13 = var9.bind(var4)(var5, var2);
                var5 = var4.useCallback;
                var2 = new Array(2);
                var2[0] = var7;
                var2[1] = var1;
                var1 = function(arg0) { // Environment: var0
                    _fun47526: for (var _fun47526_ip = 0;;) switch (_fun47526_ip) {
                        case 0:
                            var0 = arg0;
                            var3 = var0.callbackCode;
                            var0 = var0.callbackState;
                            var2 = _closure2_slot4;
                            var2 = var2.current;
                            if (!(var0 !== var2)) {
                                _fun47526_ip = 83;
                                continue _fun47526
                            }
                        case 31:
                            var5 = _closure1_slot11;
                            var4 = var5.warn;
                            var8 = _closure2_slot0;
                            var2 = global;
                            var2 = var2.HermesInternal;
                            var7 = var2.concat;
                            var6 = '';
                            var2 = ' link: received mismatching callback state!';
                            var2 = var7.bind(var6)(var8, var2);
                            var2 = var4.bind(var5)(var2);
                            _fun47526_ip = 106;
                            continue _fun47526;
                        case 83:
                            var2 = _closure2_slot2;
                            var1 = {};
                            var1.callbackCode = var3;
                            var1.callbackState = var0;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                        case 106:
                            var0 = undefined;
                            return var0;
                    }
                };
                var5 = var5.bind(var4)(var1, var2);
                var _closure2_slot5 = var5;
                var2 = var4.useEffect;
                var1 = new Array(1);
                var1[0] = var5;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 15;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.subscribe;
                    var1 = _closure2_slot5;
                    var0 = 'USER_CONNECTIONS_LINK_CALLBACK';
                    var0 = var2.bind(var3)(var0, var1);
                    var0 = function() { // Environment: var0
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 15;
                        var1 = var1[var0];
                        var0 = undefined;
                        var4 = var2.bind(var0)(var1);
                        var3 = var4.unsubscribe;
                        var2 = _closure2_slot5;
                        var1 = 'USER_CONNECTIONS_LINK_CALLBACK';
                        var1 = var3.bind(var4)(var1, var2);
                        return var0;
                    };
                    return var0;
                };
                var0 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot10;
                var1 = _closure1_slot7;
                var0 = {};
                var4 = var10.container;
                var0.style = var4;
                var4 = {};
                var5 = var10.content;
                var4.style = var5;
                var9 = _closure1_slot9;
                var7 = _closure1_slot6;
                var5 = {};
                var5.source = var6;
                var6 = var14.image;
                var11 = new Array(2);
                var11[0] = var6;
                var6 = null;
                var15 = var6 != var17;
                if (!var15) {
                    _fun47522_ip = 329;
                    continue _fun47522
                }
            case 326:
                var15 = var17;
            case 329:
                var11[1] = var15;
                var5.style = var11;
                var7 = var9.bind(var3)(var7, var5);
                var5 = new Array(4);
                var5[0] = var7;
                var15 = _closure1_slot9;
                var11 = _closure1_slot0;
                var9 = _closure1_slot2;
                var7 = 16;
                var17 = var9[var7];
                var17 = var11.bind(var3)(var17);
                var19 = var17.Text;
                var17 = {
                    'variant': 'heading-xl/bold',
                    'color': 'mobile-text-heading-primary',
                    'style': null,
                    'accessibilityRole': 'header'
                };
                var21 = var10.title;
                var17.style = var21;
                var17.children = var20;
                var17 = var15.bind(var3)(var19, var17);
                var5[1] = var17;
                var9 = var9[var7];
                var9 = var11.bind(var3)(var9);
                var11 = var9.Text;
                var9 = {
                    'variant': 'text-md/medium',
                    'color': 'text-default'
                };
                var17 = var10.body;
                var9.style = var17;
                var9.children = var16;
                var9 = var15.bind(var3)(var11, var9);
                var5[2] = var9;
                var6 = var6 != var18;
                if (!var6) {
                    _fun47522_ip = 596;
                    continue _fun47522
                }
            case 477:
                var11 = _closure1_slot9;
                var15 = _closure1_slot0;
                var19 = _closure1_slot2;
                var7 = var19[var7];
                var7 = var15.bind(var3)(var7);
                var9 = var7.Text;
                var7 = {
                    'style': null,
                    'variant': 'text-sm/medium',
                    'color': 'text-default'
                };
                var14 = var14.redirect;
                var7.style = var14;
                var14 = 17;
                var16 = var19[var14];
                var16 = var15.bind(var3)(var16);
                var17 = var16.intl;
                var16 = var17.format;
                var14 = var19[var14];
                var14 = var15.bind(var3)(var14);
                var14 = var14.t;
                var15 = var14.XhlYYn;
                var14 = {};
                var14.redirectUrl = var18;
                var14 = var16.bind(var17)(var15, var14);
                var7.children = var14;
                var6 = var11.bind(var3)(var9, var7);
            case 596:
                var5[3] = var6;
                var4.children = var5;
                var5 = var2.bind(var3)(var1, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot9;
                var17 = _closure1_slot0;
                var18 = _closure1_slot2;
                var5 = 18;
                var5 = var18[var5];
                var5 = var17.bind(var3)(var5);
                var6 = var5.SafeAreaPaddingView;
                var5 = {};
                var9 = true;
                var5.bottom = var9;
                var9 = var10.footerContainer;
                var5.style = var9;
                var9 = _closure1_slot7;
                var8 = {};
                var10 = var10.footerButton;
                var8.style = var10;
                var10 = 19;
                var10 = var18[var10];
                var10 = var17.bind(var3)(var10);
                var11 = var10.Button;
                var10 = {
                    'variant': 'primary',
                    'size': 'lg'
                };
                var14 = 17;
                var15 = var18[var14];
                var15 = var17.bind(var3)(var15);
                var16 = var15.intl;
                var15 = var16.string;
                var14 = var18[var14];
                var14 = var17.bind(var3)(var14);
                var14 = var14.t;
                var14 = var14["3PatSz"];
                var14 = var15.bind(var16)(var14);
                var10.text = var14;
                var10.onPress = var13;
                var10.loading = var12;
                var10 = var7.bind(var3)(var11, var10);
                var8.children = var10;
                var8 = var7.bind(var3)(var9, var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.TwoWayLinkPreConnect = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 5, 31, 27, 660, 33, 3, 1297, 4485, 5299, 3103, 478, 5293, 4486, 44, 806, 3900, 1234, 4697, 4043, 2]);