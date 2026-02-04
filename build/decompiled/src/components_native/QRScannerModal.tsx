// components_native/QRScannerModal.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun82340: for (var _fun82340_ip = 0;;) switch (_fun82340_ip) {
        case 0:
            var4 = require;
            var8 = metroImportDefault;
            var2 = exports;
            var5 = dependencyMap;
            var _closure1_slot0 = var4;
            var _closure1_slot1 = var8;
            var _closure1_slot2 = var5;
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
            var3 = var8.bind(var0)(var3);
            var _closure1_slot3 = var3;
            var3 = 1;
            var6 = var5[var3];
            var3 = metroImportAll;
            var3 = var3.bind(var0)(var6);
            var _closure1_slot4 = var3;
            var3 = 2;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var6 = var3.requireNativeComponent;
            var3 = var3.View;
            var _closure1_slot5 = var3;
            var3 = 3;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var3 = var3.UserSettingsSections;
            var _closure1_slot6 = var3;
            var3 = 4;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var3 = var3.FAMILY_CENTER_LINK_REQUEST_REGEX;
            var _closure1_slot7 = var3;
            var3 = 5;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var7 = var3.jsx;
            var _closure1_slot8 = var7;
            var3 = var3.jsxs;
            var _closure1_slot9 = var3;
            var3 = 6;
            var3 = var5[var3];
            var7 = var4.bind(var0)(var3);
            var3 = var7.isAndroid;
            var3 = var3.bind(var7)();
            if (var3) {
                _fun82340_ip = 233;
                continue _fun82340
            }
        case 220:
            var3 = 'DCDQRScanner';
            var3 = var6.bind(var0)(var3);
            _fun82340_ip = 245;
            continue _fun82340;
        case 233:
            var6 = 7;
            var6 = var5[var6];
            var3 = var8.bind(var0)(var6);
        case 245:
            var _closure1_slot10 = var3;
            var3 = function arg0() {
                var3 = _closure1_slot8;
                var2 = _closure1_slot10;
                var1 = {};
                var4 = arg0;
                var5 = var1;
                var0 = copyDataProperties(var5, var4);
                var0 = undefined;
                var0 = var3.bind(var0)(var2, var1);
                return var0;
            };
            var _closure1_slot11 = var3;
            var3 = {};
            var6 = {
                'position': 'absolute',
                'height': '100%',
                'width': '100%'
            };
            var3.scanner = var6;
            var6 = {};
            var7 = 8;
            var6.marginLeft = var7;
            var3.closeButton = var6;
            var6 = {};
            var9 = var5[var7];
            var9 = var8.bind(var0)(var9);
            var9 = var9.unsafe_rawColors;
            var9 = var9.BLACK;
            var6.backgroundColor = var9;
            var3.emptyView = var6;
            var6 = {
                'marginLeft': 16,
                'marginRight': 16,
                'marginTop': 'auto',
                'borderRadius': 16,
                'backgroundColor': null,
                'paddingTop': 4,
                'paddingBottom': 4,
                'paddingLeft': 16,
                'paddingRight': 16
            };
            var9 = var5[var7];
            var9 = var8.bind(var0)(var9);
            var9 = var9.unsafe_rawColors;
            var9 = var9.BRAND_500;
            var6.backgroundColor = var9;
            var3.showHelp = var6;
            var6 = {};
            var7 = var5[var7];
            var7 = var8.bind(var0)(var7);
            var7 = var7.unsafe_rawColors;
            var7 = var7.WHITE;
            var6.color = var7;
            var7 = 'center';
            var6.textAlign = var7;
            var3.text = var6;
            var _closure1_slot12 = var3;
            var3 = {};
            var6 = 'SUCCEEDED';
            var3.SUCCEEDED = var6;
            var6 = 'FAILED';
            var3.FAILED = var6;
            var _closure1_slot13 = var3;
            var3 = 24;
            var3 = var5[var3];
            var5 = var4.bind(var0)(var3);
            var4 = var5.fileFinishedImporting;
            var3 = 'components_native/QRScannerModal.tsx';
            var3 = var4.bind(var5)(var3);
            var1 = function arg0() {
                _fun82342: for (var _fun82342_ip = 0;;) switch (_fun82342_ip) {
                    case 0:
                        var0 = arg0;
                        var1 = var0.showHelp;
                        var3 = undefined;
                        var8 = var3 !== var1;
                        if (!var8) {
                            _fun82342_ip = 23;
                            continue _fun82342
                        }
                    case 20:
                        var8 = var1;
                    case 23:
                        var0 = var0.onScanSuccess;
                        var _closure2_slot0 = var0;
                        var4 = _closure1_slot4;
                        var1 = var4.useState;
                        var0 = true;
                        var2 = var1.bind(var4)(var0);
                        var1 = _closure1_slot3;
                        var0 = 2;
                        var0 = var1.bind(var3)(var2, var0);
                        var1 = 0;
                        var6 = var0[var1];
                        var5 = 1;
                        var0 = var0[var5];
                        var _closure2_slot1 = var0;
                        var2 = var4.useEffect;
                        var1 = function() { // Environment: var7
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 9;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.runAfterInteractions;
                            var1 = function() { // Environment: var0
                                var2 = _closure2_slot1;
                                var0 = undefined;
                                var1 = false;
                                var1 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var1 = var2.bind(var3)(var1);
                            var _closure3_slot0 = var1;
                            var0 = function() { // Environment: var0
                                var1 = _closure3_slot0;
                                var0 = var1.cancel;
                                var0 = var0.bind(var1)();
                                var0 = undefined;
                                return var0;
                            };
                            return var0;
                        };
                        var0 = new Array(0);
                        var0 = var2.bind(var4)(var1, var0);
                        var1 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var0 = 10;
                        var0 = var2[var0];
                        var0 = var1.bind(var3)(var0);
                        var0 = var0.bind(var3)();
                        var13 = var0.bottom;
                        var17 = var0.top;
                        var2 = _closure1_slot9;
                        var1 = _closure1_slot5;
                        var0 = {};
                        var4 = {};
                        var4.flex = var5;
                        var0.style = var4;
                        var9 = _closure1_slot8;
                        if (var6) {
                            _fun82342_ip = 214;
                            continue _fun82342
                        }
                    case 165:
                        var5 = _closure1_slot11;
                        var4 = {};
                        var10 = _closure1_slot12;
                        var10 = var10.scanner;
                        var4.style = var10;
                        var10 = 'none';
                        var4.pointerEvents = var10;
                        var7 = function arg0() {
                            _fun82346: for (var _fun82346_ip = 0;;) switch (_fun82346_ip) {
                                case 0:
                                    var0 = arg0;
                                    var1 = var0.nativeEvent;
                                    var2 = var1.status;
                                    var1 = _closure1_slot13;
                                    var1 = var1.SUCCEEDED;
                                    if (!(var1 !== var2)) {
                                        _fun82346_ip = 191;
                                        continue _fun82346
                                    }
                                case 34:
                                    var1 = _closure1_slot13;
                                    var1 = var1.FAILED;
                                    var2 = _closure1_slot1;
                                    var10 = _closure1_slot2;
                                    var1 = 19;
                                    var1 = var10[var1];
                                    var9 = undefined;
                                    var3 = var2.bind(var9)(var1);
                                    var2 = var3.show;
                                    var1 = {};
                                    var8 = _closure1_slot0;
                                    var5 = 20;
                                    var6 = var10[var5];
                                    var6 = var8.bind(var9)(var6);
                                    var11 = var6.intl;
                                    var7 = var11.string;
                                    var6 = var10[var5];
                                    var6 = var8.bind(var9)(var6);
                                    var6 = var6.t;
                                    var6 = var6.QOQlWa;
                                    var6 = var7.bind(var11)(var6);
                                    var1.body = var6;
                                    var6 = var10[var5];
                                    var6 = var8.bind(var9)(var6);
                                    var7 = var6.intl;
                                    var6 = var7.string;
                                    var5 = var10[var5];
                                    var5 = var8.bind(var9)(var5);
                                    var5 = var5.t;
                                    var5 = var5["6S318H"];
                                    var5 = var6.bind(var7)(var5);
                                    var1.title = var5;
                                    var1 = var2.bind(var3)(var1);
                                    _fun82346_ip = 388;
                                    continue _fun82346;
                                case 191:
                                    var3 = _closure2_slot0;
                                    var2 = undefined;
                                    if (!(var2 === var3)) {
                                        _fun82346_ip = 626;
                                        continue _fun82346
                                    }
                                case 207:
                                    var5 = _closure1_slot1;
                                    var6 = _closure1_slot2;
                                    var3 = 11;
                                    var3 = var6[var3];
                                    var6 = var5.bind(var2)(var3);
                                    var5 = var6.toURLSafe;
                                    var3 = var0.nativeEvent;
                                    var3 = var3.result;
                                    var5 = var5.bind(var6)(var3);
                                    var3 = null;
                                    if (!(var3 == var5)) {
                                        _fun82346_ip = 258;
                                        continue _fun82346
                                    }
                                case 256:
                                    var5 = {};
                                case 258:
                                    var7 = var5.hostname;
                                    var8 = var5.pathname;
                                    var6 = _closure1_slot0;
                                    var9 = _closure1_slot2;
                                    var5 = 12;
                                    var5 = var9[var5];
                                    var6 = var6.bind(var2)(var5);
                                    var5 = var6.findRemoteAuthFingerprint;
                                    var7 = var5.bind(var6)(var7, var8);
                                    if (!(var3 == var7)) {
                                        _fun82346_ip = 530;
                                        continue _fun82346
                                    }
                                case 309:
                                    var6 = var3 == var8;
                                    var5 = undefined;
                                    if (var6) {
                                        _fun82346_ip = 333;
                                        continue _fun82346
                                    }
                                case 318:
                                    var9 = var8.match;
                                    var6 = _closure1_slot7;
                                    var5 = var9.bind(var8)(var6);
                                case 333:
                                    if (!(var3 != var5)) {
                                        _fun82346_ip = 341;
                                        continue _fun82346
                                    }
                                case 337:
                                    if (!(var3 == var8)) {
                                        _fun82346_ip = 422;
                                        continue _fun82346
                                    }
                                case 341:
                                    var5 = _closure1_slot1;
                                    var6 = _closure1_slot2;
                                    var3 = 18;
                                    var3 = var6[var3];
                                    var9 = var5.bind(var2)(var3);
                                    var6 = var9.openURL;
                                    var3 = var0.nativeEvent;
                                    var5 = var3.result;
                                    var3 = false;
                                    var3 = var6.bind(var9)(var5, var2, var3);
                                case 388:
                                    var6 = _closure1_slot1;
                                    var5 = _closure1_slot2;
                                    var3 = 13;
                                    var5 = var5[var3];
                                    var3 = undefined;
                                    var6 = var6.bind(var3)(var5);
                                    var5 = var6.pop;
                                    var5 = var5.bind(var6)();
                                    return var3;
                                case 422:
                                    var5 = _closure1_slot1;
                                    var6 = _closure1_slot2;
                                    var3 = 13;
                                    var3 = var6[var3];
                                    var5 = var5.bind(var2)(var3);
                                    var3 = var5.pop;
                                    var3 = var3.bind(var5)();
                                    var5 = _closure1_slot0;
                                    var3 = 16;
                                    var3 = var6[var3];
                                    var10 = var5.bind(var2)(var3);
                                    var9 = var10.openUserSettings;
                                    var3 = {};
                                    var11 = _closure1_slot6;
                                    var11 = var11.FAMILY_CENTER;
                                    var3.screen = var11;
                                    var3 = var9.bind(var10)(var3);
                                    var3 = 17;
                                    var3 = var6[var3];
                                    var6 = var5.bind(var2)(var3);
                                    var5 = var6.handleFamilyCenterQRCodeScan;
                                    var3 = 'UserSettingsQRCodeScan';
                                    var3 = var5.bind(var6)(var8, var3);
                                    var3 = undefined;
                                    return var3;
                                case 530:
                                    var6 = _closure1_slot1;
                                    var3 = _closure1_slot2;
                                    var5 = 13;
                                    var8 = var3[var5];
                                    var9 = var6.bind(var2)(var8);
                                    var8 = var9.pop;
                                    var8 = var8.bind(var9)();
                                    var5 = var3[var5];
                                    var6 = var6.bind(var2)(var5);
                                    var5 = var6.pushLazy;
                                    var8 = _closure1_slot0;
                                    var4 = 15;
                                    var4 = var3[var4];
                                    var8 = var8.bind(var2)(var4);
                                    var4 = 14;
                                    var4 = var3[var4];
                                    var3 = var3.paths;
                                    var4 = var8.bind(var2)(var4, var3);
                                    var3 = {};
                                    var3.remoteAuthFingerprint = var7;
                                    var3 = var5.bind(var6)(var4, var3);
                                    var3 = undefined;
                                    return var3;
                                case 626:
                                    var1 = _closure2_slot0;
                                    var0 = var0.nativeEvent;
                                    var0 = var0.result;
                                    var0 = var1.bind(var2)(var0);
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var4.onQRCodeFound = var7;
                        var5 = var9.bind(var3)(var5, var4);
                        _fun82342_ip = 262;
                        continue _fun82342;
                    case 214:
                        var7 = _closure1_slot5;
                        var4 = {};
                        var10 = _closure1_slot12;
                        var11 = var10.scanner;
                        var10 = new Array(2);
                        var10[0] = var11;
                        var11 = _closure1_slot12;
                        var11 = var11.emptyView;
                        var10[1] = var11;
                        var4.style = var10;
                        var5 = var9.bind(var3)(var7, var4);
                    case 262:
                        var4 = new Array(3);
                        var4[0] = var5;
                        var9 = _closure1_slot8;
                        var11 = _closure1_slot1;
                        var14 = _closure1_slot2;
                        var5 = 21;
                        var5 = var14[var5];
                        var7 = var11.bind(var3)(var5);
                        var5 = {};
                        var10 = 'button';
                        var5.accessibilityRole = var10;
                        var19 = _closure1_slot0;
                        var15 = 20;
                        var10 = var14[var15];
                        var10 = var19.bind(var3)(var10);
                        var18 = var10.intl;
                        var16 = var18.string;
                        var10 = var14[var15];
                        var10 = var19.bind(var3)(var10);
                        var10 = var10.t;
                        var10 = var10.cpT0Cq;
                        var10 = var16.bind(var18)(var10);
                        var5.accessibilityLabel = var10;
                        var10 = 22;
                        var10 = var14[var10];
                        var10 = var11.bind(var3)(var10);
                        var5.source = var10;
                        var10 = _closure1_slot12;
                        var16 = var10.closeButton;
                        var10 = new Array(2);
                        var10[0] = var16;
                        var16 = {};
                        var16.marginTop = var17;
                        var10[1] = var16;
                        var5.style = var10;
                        var10 = 13;
                        var10 = var14[var10];
                        var10 = var11.bind(var3)(var10);
                        var10 = var10.pop;
                        var5.onPress = var10;
                        var5 = var9.bind(var3)(var7, var5);
                        var4[1] = var5;
                        var5 = null;
                        if (!var8) {
                            _fun82342_ip = 611;
                            continue _fun82342
                        }
                    case 447:
                        var5 = null;
                        if (var6) {
                            _fun82342_ip = 611;
                            continue _fun82342
                        }
                    case 455:
                        var8 = _closure1_slot8;
                        var7 = _closure1_slot5;
                        var6 = {};
                        var9 = _closure1_slot12;
                        var10 = var9.showHelp;
                        var9 = new Array(2);
                        var9[0] = var10;
                        var10 = {};
                        var11 = 8;
                        var11 = var13 + var11;
                        var10.marginBottom = var11;
                        var9[1] = var10;
                        var6.style = var9;
                        var14 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var9 = 23;
                        var9 = var11[var9];
                        var9 = var14.bind(var3)(var9);
                        var10 = var9.LegacyText;
                        var9 = {};
                        var12 = _closure1_slot12;
                        var12 = var12.text;
                        var9.style = var12;
                        var12 = var11[var15];
                        var12 = var14.bind(var3)(var12);
                        var13 = var12.intl;
                        var12 = var13.string;
                        var11 = var11[var15];
                        var11 = var14.bind(var3)(var11);
                        var11 = var11.t;
                        var11 = var11.dklV0G;
                        var11 = var12.bind(var13)(var11);
                        var9.children = var11;
                        var9 = var8.bind(var3)(var10, var9);
                        var6.children = var9;
                        var5 = var8.bind(var3)(var7, var6);
                    case 611:
                        var4[2] = var5;
                        var0.children = var4;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                }
            };
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 660, 4594, 33, 478, 10507, 671, 5851, 1568, 1457, 3462, 4561, 10508, 1307, 5922, 10497, 3144, 3936, 1234, 6784, 6667, 4876, 2]);