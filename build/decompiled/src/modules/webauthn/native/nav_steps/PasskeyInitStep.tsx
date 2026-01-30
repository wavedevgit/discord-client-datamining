// modules/webauthn/native/nav_steps/PasskeyInitStep.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
    var0 = function(arg0) { // Original name: CredentialList, environment: var1
        _fun60623: for (var _fun60623_ip = 0;;) switch (_fun60623_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.navigation;
                var _closure2_slot0 = var0;
                var3 = undefined;
                var _closure2_slot1 = var3;
                var _closure2_slot2 = var3;
                var _closure2_slot3 = var3;
                var0 = function(arg0) { // Original name: credentialTrailer, environment: var4
                    var0 = arg0;
                    var _closure3_slot0 = var0;
                    var3 = _closure1_slot10;
                    var14 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var0 = 12;
                    var0 = var15[var0];
                    var2 = undefined;
                    var0 = var14.bind(var2)(var0);
                    var1 = var0.ButtonGroup;
                    var0 = {};
                    var4 = _closure2_slot1;
                    var4 = var4.iconButtonGroup;
                    var0.style = var4;
                    var7 = _closure1_slot9;
                    var5 = 13;
                    var4 = var15[var5];
                    var4 = var14.bind(var2)(var4);
                    var6 = var4.IconButton;
                    var4 = {};
                    var13 = 'secondary';
                    var4.variant = var13;
                    var16 = _closure1_slot9;
                    var10 = 14;
                    var10 = var15[var10];
                    var10 = var14.bind(var2)(var10);
                    var11 = var10.TrashIcon;
                    var10 = {};
                    var18 = _closure1_slot1;
                    var17 = 7;
                    var17 = var15[var17];
                    var17 = var18.bind(var2)(var17);
                    var17 = var17.colors;
                    var17 = var17.TEXT_FEEDBACK_CRITICAL;
                    var10.color = var17;
                    var10 = var16.bind(var2)(var11, var10);
                    var4.icon = var10;
                    var11 = 11;
                    var10 = var15[var11];
                    var10 = var14.bind(var2)(var10);
                    var17 = var10.intl;
                    var16 = var17.string;
                    var10 = var15[var11];
                    var10 = var14.bind(var2)(var10);
                    var10 = var10.t;
                    var10 = var10.N86XcP;
                    var10 = var16.bind(var17)(var10);
                    var4.accessibilityLabel = var10;
                    var10 = 'sm';
                    var4.size = var10;
                    var16 = _closure2_slot2;
                    var4.disabled = var16;
                    var16 = _closure2_slot2;
                    var4.loading = var16;
                    var16 = function() { // Original name: onPress, environment: var8
                        var3 = _closure1_slot1;
                        var0 = _closure1_slot2;
                        var2 = 15;
                        var2 = var0[var2];
                        var5 = undefined;
                        var4 = var3.bind(var5)(var2);
                        var3 = var4.openLazy;
                        var2 = _closure1_slot0;
                        var1 = 17;
                        var1 = var0[var1];
                        var2 = var2.bind(var5)(var1);
                        var1 = 16;
                        var1 = var0[var1];
                        var0 = var0.paths;
                        var2 = var2.bind(var5)(var1, var0);
                        var1 = {};
                        var0 = _closure3_slot0;
                        var1.credential = var0;
                        var5 = _closure2_slot2;
                        var1.deleting = var5;
                        var0 = _closure2_slot3;
                        var1.setDeleting = var0;
                        var0 = 'WEBAUTHN_DELETE_SHEET_KEY';
                        var0 = var3.bind(var4)(var2, var0, var1);
                        return var0;
                    };
                    var4.onPress = var16;
                    var6 = var7.bind(var2)(var6, var4);
                    var4 = new Array(2);
                    var4[0] = var6;
                    var7 = _closure1_slot9;
                    var5 = var15[var5];
                    var5 = var14.bind(var2)(var5);
                    var6 = var5.IconButton;
                    var5 = {};
                    var5.variant = var13;
                    var16 = _closure1_slot9;
                    var12 = 18;
                    var12 = var15[var12];
                    var12 = var14.bind(var2)(var12);
                    var13 = var12.PencilIcon;
                    var12 = {};
                    var12 = var16.bind(var2)(var13, var12);
                    var5.icon = var12;
                    var12 = var15[var11];
                    var12 = var14.bind(var2)(var12);
                    var13 = var12.intl;
                    var12 = var13.string;
                    var11 = var15[var11];
                    var11 = var14.bind(var2)(var11);
                    var11 = var11.t;
                    var11 = var11.bt75uw;
                    var11 = var12.bind(var13)(var11);
                    var5.accessibilityLabel = var11;
                    var5.size = var10;
                    var10 = _closure2_slot2;
                    var5.disabled = var10;
                    var9 = _closure2_slot2;
                    var5.loading = var9;
                    var8 = function() { // Original name: onPress, environment: var8
                        var3 = _closure2_slot0;
                        var2 = var3.push;
                        var0 = _closure1_slot8;
                        var1 = var0.EDIT;
                        var0 = {};
                        var4 = _closure3_slot0;
                        var0.credential = var4;
                        var0 = var2.bind(var3)(var1, var0);
                        var0 = undefined;
                        return var0;
                    };
                    var5.onPress = var8;
                    var5 = var7.bind(var2)(var6, var5);
                    var4[1] = var5;
                    var0.children = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var _closure2_slot4 = var0;
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 8;
                var0 = var2[var0];
                var6 = var1.bind(var3)(var0);
                var2 = var6.useStateFromStoresObject;
                var0 = _closure1_slot7;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var4
                    var0 = {};
                    var2 = _closure1_slot7;
                    var1 = var2.getCredentials;
                    var1 = var1.bind(var2)();
                    var0.credentials = var1;
                    return var0;
                };
                var0 = var2.bind(var6)(var1, var0);
                var7 = var0.credentials;
                var0 = _closure1_slot11;
                var8 = var0.bind(var3)();
                _closure2_slot1 = var8;
                var2 = _closure1_slot4;
                var1 = var2.useState;
                var0 = false;
                var2 = var1.bind(var2)(var0);
                var1 = _closure1_slot3;
                var0 = 2;
                var2 = var1.bind(var3)(var2, var0);
                var1 = 0;
                var0 = var2[var1];
                _closure2_slot2 = var0;
                var0 = 1;
                var0 = var2[var0];
                _closure2_slot3 = var0;
                var0 = var7.length;
                if (!(var1 !== var0)) {
                    _fun60623_ip = 279;
                    continue _fun60623
                }
            case 167:
                var2 = _closure1_slot9;
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var0 = 19;
                var0 = var12[var0];
                var0 = var11.bind(var3)(var0);
                var1 = var0.TableRowGroup;
                var0 = {};
                var6 = 11;
                var9 = var12[var6];
                var9 = var11.bind(var3)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var6 = var12[var6];
                var6 = var11.bind(var3)(var6);
                var6 = var6.t;
                var6 = var6["4RIqrQ"];
                var6 = var9.bind(var10)(var6);
                var0.title = var6;
                var6 = var7.map;
                var4 = function(arg0) { // Environment: var4
                    _fun60628: for (var _fun60628_ip = 0;;) switch (_fun60628_ip) {
                        case 0:
                            var0 = arg0;
                            var4 = _closure1_slot9;
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 20;
                            var1 = var3[var1];
                            var3 = undefined;
                            var1 = var2.bind(var3)(var1);
                            var2 = var1.TableRow;
                            var1 = {};
                            var5 = var0.name;
                            var1.label = var5;
                            var5 = _closure2_slot4;
                            var5 = var5.bind(var3)(var0);
                            var1.trailing = var5;
                            var7 = var0.last_used;
                            var5 = null;
                            var7 = var5 != var7;
                            if (!var7) {
                                _fun60628_ip = 177;
                                continue _fun60628
                            }
                        case 81:
                            var11 = _closure1_slot0;
                            var12 = _closure1_slot2;
                            var6 = 11;
                            var7 = var12[var6];
                            var7 = var11.bind(var3)(var7);
                            var9 = var7.intl;
                            var8 = var9.format;
                            var6 = var12[var6];
                            var6 = var11.bind(var3)(var6);
                            var6 = var6.t;
                            var7 = var6["7JgxF5"];
                            var6 = {};
                            var10 = 21;
                            var10 = var12[var10];
                            var12 = var11.bind(var3)(var10);
                            var11 = var12.formatDate;
                            var10 = var0.last_used;
                            var10 = var11.bind(var12)(var10);
                            var6.lastUsed = var10;
                            var5 = var8.bind(var9)(var7, var6);
                        case 177:
                            var1.subLabel = var5;
                            var0 = var0.id;
                            var0 = var4.bind(var3)(var2, var1, var0);
                            return var0;
                    }
                };
                var4 = var6.bind(var7)(var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            case 279:
                var2 = _closure1_slot10;
                var1 = _closure1_slot6;
                var0 = {};
                var4 = var8.upsellContainer;
                var0.style = var4;
                var7 = _closure1_slot9;
                var6 = _closure1_slot5;
                var4 = {};
                var10 = _closure1_slot1;
                var12 = _closure1_slot2;
                var9 = 9;
                var9 = var12[var9];
                var9 = var10.bind(var3)(var9);
                var4.source = var9;
                var9 = var8.keychainImage;
                var4.style = var9;
                var6 = var7.bind(var3)(var6, var4);
                var4 = new Array(2);
                var4[0] = var6;
                var7 = _closure1_slot9;
                var11 = _closure1_slot0;
                var5 = 10;
                var5 = var12[var5];
                var5 = var11.bind(var3)(var5);
                var6 = var5.Text;
                var5 = {};
                var9 = 'text-md/normal';
                var5.variant = var9;
                var8 = var8.upsellText;
                var5.style = var8;
                var8 = 11;
                var9 = var12[var8];
                var9 = var11.bind(var3)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var8 = var12[var8];
                var8 = var11.bind(var3)(var8);
                var8 = var8.t;
                var8 = var8.FSNwFW;
                var8 = var9.bind(var10)(var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot12 = var0;
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
    var3 = var10.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.Image;
    var _closure1_slot5 = var6;
    var3 = var3.View;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.WebAuthnScreens;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot9 = var6;
    var3 = var3.jsxs;
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'flex': 1,
        'flexDirection': 'column',
        'alignItems': 'stretch',
        'justifyContent': 'space-between'
    };
    var11 = 'stretch';
    var9 = 7;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var8.marginLeft = var12;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var8.marginRight = var12;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var8.marginTop = var12;
    var3.container = var8;
    var8 = {};
    var8.alignItems = var11;
    var3.row = var8;
    var8 = {};
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var8.marginTop = var11;
    var11 = 'center';
    var8.alignItems = var11;
    var3.upsellContainer = var8;
    var8 = {};
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.TEXT_SUBTLE;
    var8.color = var12;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var8.marginTop = var12;
    var8.textAlign = var11;
    var3.upsellText = var8;
    var8 = {};
    var11 = 'row';
    var8.flexDirection = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_8;
    var8.paddingVertical = var9;
    var3.iconButtonGroup = var8;
    var8 = {
        'height': 125,
        'width': 161
    };
    var3.keychainImage = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot11 = var3;
    var3 = 27;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/webauthn/native/nav_steps/PasskeyInitStep.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: PasskeyInitStep, environment: var1
        _fun60629: for (var _fun60629_ip = 0;;) switch (_fun60629_ip) {
            case 0:
                var1 = arg0;
                var2 = null;
                if (!(var1 != var2)) {
                    _fun60629_ip = 263;
                    continue _fun60629
                }
            case 14:
                var4 = undefined;
                var _closure2_slot0 = var4;
                var _closure2_slot1 = var4;
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 22;
                var3 = var5[var3];
                var6 = var2.bind(var4)(var3);
                var3 = var6.useNavigation;
                var11 = var3.bind(var6)();
                _closure2_slot0 = var11;
                var3 = _closure1_slot11;
                var9 = var3.bind(var4)();
                var3 = 8;
                var3 = var5[var3];
                var10 = var2.bind(var4)(var3);
                var7 = var10.useStateFromStoresObject;
                var3 = _closure1_slot7;
                var6 = new Array(1);
                var6[0] = var3;
                var3 = function() { // Environment: var0
                    var0 = {};
                    var2 = _closure1_slot7;
                    var1 = var2.hasFetchedCredentials;
                    var1 = var1.bind(var2)();
                    var0.hasFetchedCredentials = var1;
                    return var0;
                };
                var3 = var7.bind(var10)(var6, var3);
                var3 = var3.hasFetchedCredentials;
                _closure2_slot1 = var3;
                var10 = _closure1_slot4;
                var7 = var10.useEffect;
                var6 = new Array(1);
                var6[0] = var3;
                var3 = function() { // Environment: var0
                    _fun60631: for (var _fun60631_ip = 0;;) switch (_fun60631_ip) {
                        case 0:
                            var0 = _closure2_slot1;
                            if (var0) {
                                _fun60631_ip = 45;
                                continue _fun60631
                            }
                        case 10:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 23;
                            var1 = var1[var0];
                            var0 = undefined;
                            var1 = var2.bind(var0)(var1);
                            var0 = var1.fetchWebAuthnCredentials;
                            var0 = var0.bind(var1)();
                        case 45:
                            var0 = undefined;
                            return var0;
                    }
                };
                var3 = var7.bind(var10)(var3, var6);
                var7 = _closure1_slot4;
                var6 = var7.useLayoutEffect;
                var3 = new Array(1);
                var3[0] = var11;
                var0 = function() { // Environment: var0
                    var2 = _closure2_slot0;
                    var1 = var2.setOptions;
                    var0 = {};
                    var3 = function() { // Original name: headerRight, environment: var3
                        _fun60633: for (var _fun60633_ip = 0;;) switch (_fun60633_ip) {
                            case 0:
                                var2 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var1 = 24;
                                var1 = var3[var1];
                                var3 = undefined;
                                var1 = var2.bind(var3)(var1);
                                var1 = var1.hasWebAuthn;
                                if (var1) {
                                    _fun60633_ip = 36;
                                    continue _fun60633
                                }
                            case 34:
                                return var3;
                            case 36:
                                var2 = _closure1_slot9;
                                var7 = _closure1_slot0;
                                var8 = _closure1_slot2;
                                var0 = 25;
                                var0 = var8[var0];
                                var0 = var7.bind(var3)(var0);
                                var1 = var0.HeaderActionButton;
                                var0 = {};
                                var4 = 11;
                                var5 = var8[var4];
                                var5 = var7.bind(var3)(var5);
                                var6 = var5.intl;
                                var5 = var6.string;
                                var4 = var8[var4];
                                var4 = var7.bind(var3)(var4);
                                var4 = var4.t;
                                var4 = var4.OYkgVk;
                                var4 = var5.bind(var6)(var4);
                                var0.text = var4;
                                var4 = function() { // Original name: onPress, environment: var4
                                    var2 = _closure2_slot0;
                                    var1 = var2.push;
                                    var0 = _closure1_slot8;
                                    var0 = var0.REGISTER;
                                    var0 = var1.bind(var2)(var0);
                                    var0 = undefined;
                                    return var0;
                                };
                                var0.onPress = var4;
                                var4 = true;
                                var0.foregroundRipple = var4;
                                var0 = var2.bind(var3)(var1, var0);
                                return var0;
                        }
                    };
                    var0.headerRight = var3;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var0 = var6.bind(var7)(var0, var3);
                var3 = _closure1_slot9;
                var0 = 26;
                var0 = var5[var0];
                var0 = var2.bind(var4)(var0);
                var2 = var0.Form;
                var0 = {};
                var7 = _closure1_slot9;
                var6 = _closure1_slot6;
                var5 = {};
                var9 = var9.container;
                var5.style = var9;
                var10 = _closure1_slot9;
                var9 = _closure1_slot12;
                var8 = {};
                var8.navigation = var11;
                var8 = var10.bind(var4)(var9, var8);
                var5.children = var8;
                var5 = var7.bind(var4)(var6, var5);
                var0.children = var5;
                var0 = var3.bind(var4)(var2, var0);
                return var0;
            case 263:
                var12 = "Cannot destructure 'undefined' or 'null'.";
                var13 = var1;
                var0 = throwTypeError(var13, var12);
                var0 = undefined;
                throw var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 7457, 7454, 33, 1297, 671, 566, 7470, 3901, 1234, 6404, 7471, 3228, 3237, 7472, 1307, 7476, 5324, 4860, 7477, 1469, 4528, 7458, 5283, 5339, 2]);