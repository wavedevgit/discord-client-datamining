// modules/safety_hub/native/SafetyHubPage.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var7 = metroImportAll;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var7;
    var _closure1_slot3 = var5;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.View;
    var _closure1_slot5 = var7;
    var8 = var3.ActivityIndicator;
    var3 = var3.ScrollView;
    var _closure1_slot6 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AgeCheckStatus;
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.AnalyticEvents;
    var _closure1_slot9 = var7;
    var3 = var3.Routes;
    var _closure1_slot10 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot11 = var7;
    var3 = var3.jsxs;
    var _closure1_slot12 = var3;
    var3 = 11;
    var3 = var5[var3];
    var10 = var4.bind(var0)(var3);
    var9 = var10.createStyles;
    var3 = {};
    var11 = {};
    var12 = 12;
    var13 = var5[var12];
    var13 = var6.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_12;
    var11.paddingHorizontal = var13;
    var13 = var5[var12];
    var13 = var6.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_12;
    var11.paddingVertical = var13;
    var3.container = var11;
    var11 = {
        'display': 'flex',
        'justifyContent': 'center',
        'alignItems': 'center'
    };
    var3.loadingIndicator = var11;
    var11 = {};
    var12 = var5[var12];
    var12 = var6.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var11.gap = var12;
    var3.body = var11;
    var3 = var9.bind(var10)(var3);
    var _closure1_slot13 = var3;
    var3 = {
        'animating': true,
        'size': 'large'
    };
    var3 = var7.bind(var0)(var8, var3);
    var _closure1_slot14 = var3;
    var8 = function() {
        _fun87995: for (var _fun87995_ip = 0;;) switch (_fun87995_ip) {
            case 0:
                var3 = _closure1_slot0;
                var4 = _closure1_slot3;
                var2 = 10;
                var2 = var4[var2];
                var4 = undefined;
                var6 = var3.bind(var4)(var2);
                var5 = var6.useStateFromStores;
                var2 = _closure1_slot7;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = function() { // Environment: var0
                    var1 = _closure1_slot7;
                    var0 = var1.getAgeCheckStatus;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var2 = var5.bind(var6)(var3, var2);
                var0 = function arg0() {
                    _fun87996: for (var _fun87996_ip = 0;;) switch (_fun87996_ip) {
                        case 0:
                            var2 = arg0;
                            var0 = _closure1_slot8;
                            var0 = var0.SUCCESS;
                            if (!(var0 !== var2)) {
                                _fun87996_ip = 372;
                                continue _fun87996
                            }
                        case 23:
                            var0 = _closure1_slot8;
                            var0 = var0.ERROR;
                            if (!(var0 !== var2)) {
                                _fun87996_ip = 277;
                                continue _fun87996
                            }
                        case 40:
                            var0 = _closure1_slot8;
                            var0 = var0.FAILURE;
                            if (!(var0 !== var2)) {
                                _fun87996_ip = 182;
                                continue _fun87996
                            }
                        case 57:
                            var0 = _closure1_slot8;
                            var0 = var0.LOADING;
                            if (!(var0 !== var2)) {
                                _fun87996_ip = 87;
                                continue _fun87996
                            }
                        case 71:
                            var0 = {
                                'message': null,
                                'type': null
                            };
                            return var0;
                        case 87:
                            var0 = {};
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot3;
                            var2 = 6;
                            var6 = var5[var2];
                            var3 = undefined;
                            var6 = var4.bind(var3)(var6);
                            var7 = var6.intl;
                            var6 = var7.string;
                            var2 = var5[var2];
                            var2 = var4.bind(var3)(var2);
                            var2 = var2.t;
                            var2 = var2["nhhy/R"];
                            var2 = var6.bind(var7)(var2);
                            var0.message = var2;
                            var2 = 9;
                            var2 = var5[var2];
                            var2 = var4.bind(var3)(var2);
                            var2 = var2.HelpMessageTypes;
                            var2 = var2.INFO;
                            var0.type = var2;
                            return var0;
                        case 182:
                            var0 = {};
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot3;
                            var2 = 6;
                            var6 = var5[var2];
                            var3 = undefined;
                            var6 = var4.bind(var3)(var6);
                            var7 = var6.intl;
                            var6 = var7.string;
                            var2 = var5[var2];
                            var2 = var4.bind(var3)(var2);
                            var2 = var2.t;
                            var2 = var2["40R63o"];
                            var2 = var6.bind(var7)(var2);
                            var0.message = var2;
                            var2 = 9;
                            var2 = var5[var2];
                            var2 = var4.bind(var3)(var2);
                            var2 = var2.HelpMessageTypes;
                            var2 = var2.ERROR;
                            var0.type = var2;
                            return var0;
                        case 277:
                            var0 = {};
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot3;
                            var2 = 6;
                            var6 = var5[var2];
                            var3 = undefined;
                            var6 = var4.bind(var3)(var6);
                            var7 = var6.intl;
                            var6 = var7.string;
                            var2 = var5[var2];
                            var2 = var4.bind(var3)(var2);
                            var2 = var2.t;
                            var2 = var2["4sILBU"];
                            var2 = var6.bind(var7)(var2);
                            var0.message = var2;
                            var2 = 9;
                            var2 = var5[var2];
                            var2 = var4.bind(var3)(var2);
                            var2 = var2.HelpMessageTypes;
                            var2 = var2.ERROR;
                            var0.type = var2;
                            return var0;
                        case 372:
                            var0 = {};
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot3;
                            var1 = 6;
                            var5 = var4[var1];
                            var2 = undefined;
                            var5 = var3.bind(var2)(var5);
                            var7 = var5.intl;
                            var6 = var7.format;
                            var1 = var4[var1];
                            var1 = var3.bind(var2)(var1);
                            var1 = var1.t;
                            var5 = var1.hyh4ls;
                            var1 = {};
                            var8 = function arg0() {
                                var3 = _closure1_slot11;
                                var1 = _closure1_slot0;
                                var2 = _closure1_slot3;
                                var0 = 7;
                                var0 = var2[var0];
                                var2 = undefined;
                                var0 = var1.bind(var2)(var0);
                                var1 = var0.Text;
                                var0 = {
                                    'variant': 'text-sm/medium',
                                    'color': 'text-link'
                                };
                                var4 = function() {
                                    var3 = _closure1_slot1;
                                    var2 = _closure1_slot3;
                                    var1 = 8;
                                    var2 = var2[var1];
                                    var1 = undefined;
                                    var3 = var3.bind(var1)(var2);
                                    var2 = var3.logout;
                                    var0 = _closure1_slot10;
                                    var1 = var0.LOGIN;
                                    var0 = 'safety_hub_page_appeal_success';
                                    var0 = var2.bind(var3)(var0, var1);
                                    return var0;
                                };
                                var0.onPress = var4;
                                var4 = arg0;
                                var0.children = var4;
                                var0 = var3.bind(var2)(var1, var0);
                                return var0;
                            };
                            var1.loginHook = var8;
                            var1 = var6.bind(var7)(var5, var1);
                            var0.message = var1;
                            var1 = 9;
                            var1 = var4[var1];
                            var1 = var3.bind(var2)(var1);
                            var1 = var1.HelpMessageTypes;
                            var1 = var1.SUCCESS;
                            var0.type = var1;
                            return var0;
                    }
                };
                var0 = var0.bind(var4)(var2);
                var5 = var0.message;
                var6 = var0.type;
                var0 = null;
                var2 = var0 == var6;
                if (var2) {
                    _fun87995_ip = 129;
                    continue _fun87995
                }
            case 88:
                var3 = _closure1_slot11;
                var2 = _closure1_slot1;
                var7 = _closure1_slot3;
                var1 = 9;
                var1 = var7[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var1.messageType = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 129:
                return var0;
        }
    };
    var3 = {};
    var3 = var7.bind(var0)(var8, var3);
    var _closure1_slot15 = var3;
    var3 = 13;
    var3 = var5[var3];
    var6 = var6.bind(var0)(var3);
    var3 = {};
    var3 = var7.bind(var0)(var6, var3);
    var _closure1_slot16 = var3;
    var3 = 14;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.ConnectedSafetyHubViolationsContainer;
    var3 = {};
    var3 = var7.bind(var0)(var6, var3);
    var _closure1_slot17 = var3;
    var3 = 27;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/safety_hub/native/SafetyHubPage.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun88000: for (var _fun88000_ip = 0;;) switch (_fun88000_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.visible;
                var _closure2_slot0 = var9;
                var0 = _closure1_slot13;
                var4 = undefined;
                var7 = var0.bind(var4)();
                var6 = _closure1_slot1;
                var8 = _closure1_slot3;
                var0 = 15;
                var0 = var8[var0];
                var0 = var6.bind(var4)(var0);
                var0 = var0.bind(var4)();
                var3 = _closure1_slot0;
                var1 = 16;
                var1 = var8[var1];
                var10 = var3.bind(var4)(var1);
                var1 = var10.useSafetyHubInitialized;
                var1 = var1.bind(var10)();
                var _closure2_slot1 = var1;
                var1 = 17;
                var1 = var8[var1];
                var10 = var3.bind(var4)(var1);
                var1 = var10.useSafetyHubAccountStanding;
                var1 = var1.bind(var10)();
                var _closure2_slot2 = var1;
                var1 = 18;
                var1 = var8[var1];
                var3 = var3.bind(var4)(var1);
                var1 = var3.useSafetyHubFetchError;
                var1 = var1.bind(var3)();
                var _closure2_slot3 = var1;
                var3 = 19;
                var3 = var8[var3];
                var6 = var6.bind(var4)(var3);
                var3 = function() { // Environment: var2
                    _fun88001: for (var _fun88001_ip = 0;;) switch (_fun88001_ip) {
                        case 0:
                            var2 = _closure1_slot2;
                            var1 = _closure1_slot3;
                            var0 = 20;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.getSafetyHubData;
                            var1 = var1.bind(var2)();
                            var1 = _closure2_slot1;
                            if (!var1) {
                                _fun88001_ip = 159;
                                continue _fun88001
                            }
                        case 45:
                            var2 = _closure1_slot1;
                            var6 = _closure1_slot3;
                            var1 = 21;
                            var1 = var6[var1];
                            var7 = var2.bind(var0)(var1);
                            var5 = var7.track;
                            var1 = _closure1_slot9;
                            var3 = var1.SAFETY_HUB_VIEWED;
                            var1 = {};
                            var8 = _closure2_slot2;
                            var8 = var8.state;
                            var1.account_standing = var8;
                            var1 = var5.bind(var7)(var3, var1);
                            var1 = 22;
                            var1 = var6[var1];
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.increment;
                            var1 = {};
                            var5 = _closure1_slot0;
                            var4 = 23;
                            var4 = var6[var4];
                            var4 = var5.bind(var0)(var4);
                            var4 = var4.MetricEvents;
                            var4 = var4.SAFETY_HUB_VIEW;
                            var1.name = var4;
                            var1 = var2.bind(var3)(var1);
                        case 159:
                            return var0;
                    }
                };
                var3 = var6.bind(var4)(var3);
                var8 = _closure1_slot4;
                var6 = var8.useEffect;
                var3 = new Array(2);
                var3[0] = var1;
                var3[1] = var9;
                var2 = function() { // Environment: var2
                    _fun88002: for (var _fun88002_ip = 0;;) switch (_fun88002_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            if (!var1) {
                                _fun88002_ip = 20;
                                continue _fun88002
                            }
                        case 10:
                            var1 = _closure2_slot3;
                            var0 = null;
                            if (!(var0 == var1)) {
                                _fun88002_ip = 64;
                                continue _fun88002
                            }
                        case 20:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot3;
                            var0 = 24;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.hideActionSheet;
                            var0 = 'SafetyHubErrorActionSheet';
                            var0 = var1.bind(var2)(var0);
                            _fun88002_ip = 144;
                            continue _fun88002;
                        case 64:
                            var3 = _closure1_slot1;
                            var0 = _closure1_slot3;
                            var2 = 24;
                            var2 = var0[var2];
                            var5 = undefined;
                            var4 = var3.bind(var5)(var2);
                            var3 = var4.openLazy;
                            var2 = _closure1_slot0;
                            var1 = 26;
                            var1 = var0[var1];
                            var2 = var2.bind(var5)(var1);
                            var1 = 25;
                            var1 = var0[var1];
                            var0 = var0.paths;
                            var2 = var2.bind(var5)(var1, var0);
                            var1 = 'SafetyHubErrorActionSheet';
                            var0 = {};
                            var0 = var3.bind(var4)(var2, var1, var0);
                        case 144:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var6.bind(var8)(var2, var3);
                if (var0) {
                    _fun88000_ip = 296;
                    continue _fun88000
                }
            case 195:
                var0 = null;
                var1 = var0 != var1;
                if (var1) {
                    _fun88000_ip = 294;
                    continue _fun88000
                }
            case 204:
                var3 = _closure1_slot12;
                var2 = _closure1_slot6;
                var1 = {};
                var6 = var7.container;
                var1.style = var6;
                var8 = _closure1_slot5;
                var6 = {};
                var9 = var7.body;
                var6.style = var9;
                var10 = _closure1_slot15;
                var9 = new Array(2);
                var9[0] = var10;
                var10 = _closure1_slot16;
                var9[1] = var10;
                var6.children = var9;
                var8 = var3.bind(var4)(var8, var6);
                var6 = new Array(2);
                var6[0] = var8;
                var8 = _closure1_slot17;
                var6[1] = var8;
                var1.children = var6;
                var0 = var3.bind(var4)(var2, var1);
            case 294:
                _fun88000_ip = 347;
                continue _fun88000;
            case 296:
                var3 = _closure1_slot11;
                var2 = _closure1_slot5;
                var1 = {};
                var8 = var7.container;
                var6 = new Array(2);
                var6[0] = var8;
                var7 = var7.loadingIndicator;
                var6[1] = var7;
                var1.style = var6;
                var5 = _closure1_slot14;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 347:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 10083, 6018, 660, 33, 1234, 3938, 4563, 6531, 566, 1297, 671, 11373, 11375, 11378, 11379, 10091, 11380, 4109, 10090, 795, 4269, 4274, 3279, 11381, 1307, 2]);