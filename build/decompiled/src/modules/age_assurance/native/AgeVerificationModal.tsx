// modules/age_assurance/native/AgeVerificationModal.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
    var0 = function arg0, arg1, arg2, arg3, arg4() {
        var0 = arg1;
        var _closure2_slot0 = var0;
        var0 = arg2;
        var _closure2_slot1 = var0;
        var0 = arg3;
        var _closure2_slot2 = var0;
        var0 = function() {
            var1 = _closure2_slot2;
            var0 = undefined;
            var1 = var1.bind(var0)();
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 9;
            var1 = var3[var1];
            var2 = var2.bind(var0)(var1);
            var1 = var2.pop;
            var1 = var1.bind(var2)();
            return var0;
        };
        var _closure2_slot3 = var0;
        var0 = {};
        var1 = _closure1_slot6;
        var2 = var1.VERIFY_AGE;
        var1 = {};
        var4 = arg0;
        var4 = var4.headerStyle;
        var1.headerStyle = var4;
        var4 = arg4;
        var1.headerTitle = var4;
        var4 = function() {
            var3 = _closure1_slot5;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var0 = 10;
            var0 = var8[var0];
            var2 = undefined;
            var0 = var7.bind(var2)(var0);
            var1 = var0.HeaderActionButton;
            var0 = {};
            var4 = _closure2_slot3;
            var0.onPress = var4;
            var4 = 11;
            var5 = var8[var4];
            var5 = var7.bind(var2)(var5);
            var6 = var5.intl;
            var5 = var6.string;
            var4 = var8[var4];
            var4 = var7.bind(var2)(var4);
            var4 = var4.t;
            var4 = var4.cpT0Cq;
            var4 = var5.bind(var6)(var4);
            var0.text = var4;
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var1.headerLeft = var4;
        var3 = function() {
            var3 = _closure1_slot5;
            var2 = _closure1_slot7;
            var1 = {};
            var4 = _closure2_slot0;
            var1.webviewUrl = var4;
            var4 = _closure2_slot1;
            var1.onComplete = var4;
            var0 = _closure2_slot3;
            var1.onClose = var0;
            var0 = undefined;
            var0 = var3.bind(var0)(var2, var1);
            return var0;
        };
        var1.render = var3;
        var0[var2] = var1;
        return var0;
    };
    var _closure1_slot9 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AGE_VERIFICATION_MODAL_KEY;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot5 = var3;
    var3 = {};
    var6 = 'VERIFY_AGE';
    var3.VERIFY_AGE = var6;
    var _closure1_slot6 = var3;
    var3 = function arg0() {
        var0 = arg0;
        var6 = var0.webviewUrl;
        var11 = var0.onComplete;
        var _closure2_slot0 = var11;
        var2 = var0.onClose;
        var _closure2_slot1 = var2;
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var3 = 3;
        var7 = var5[var3];
        var3 = undefined;
        var8 = var4.bind(var3)(var7);
        var7 = var8.useIsSuspendedUser;
        var8 = var7.bind(var8)();
        var _closure2_slot2 = var8;
        var7 = _closure1_slot3;
        var10 = var7.useCallback;
        var9 = new Array(2);
        var9[0] = var11;
        var9[1] = var2;
        var2 = function() { // Environment: var1
            var2 = _closure2_slot0;
            var0 = undefined;
            var2 = var2.bind(var0)();
            var1 = _closure2_slot1;
            var1 = var1.bind(var0)();
            return var0;
        };
        var9 = var10.bind(var7)(var2, var9);
        var _closure2_slot3 = var9;
        var11 = var7.useCallback;
        var10 = new Array(1);
        var10[0] = var9;
        var2 = function() { // Environment: var1
            _fun52630: for (var _fun52630_ip = 0;;) switch (_fun52630_ip) {
                case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 4;
                    var2 = var2[var0];
                    var0 = undefined;
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.isModalOpen;
                    var1 = _closure1_slot4;
                    var1 = var2.bind(var3)(var1);
                    if (!var1) {
                        _fun52630_ip = 54;
                        continue _fun52630
                    }
                case 43:
                    var1 = _closure2_slot3;
                    var1 = var1.bind(var0)();
                case 54:
                    return var0;
            }
        };
        var10 = var11.bind(var7)(var2, var10);
        var2 = 5;
        var2 = var5[var2];
        var4 = var4.bind(var3)(var2);
        var2 = var4.useWatchAgeVerificationStatusChange;
        var2 = var2.bind(var4)(var10);
        var4 = var7.useCallback;
        var2 = new Array(2);
        var2[0] = var9;
        var2[1] = var8;
        var1 = function(arg0) { // Environment: var1
            _fun52631: for (var _fun52631_ip = 0;;) switch (_fun52631_ip) {
                case 0:
                    var1 = arg0;
                    var2 = var1;
                    var0 = undefined;
                    var3 = undefined;
                    var1 = var1.nativeEvent;
                    var1 = var1.data;
                    var5 = null;
                    if (!(var5 != var1)) {
                        _fun52631_ip = 160;
                        continue _fun52631
                    }
                case 30: // try_start_0
                    var1 = var2;
                    var1 = var1.nativeEvent;
                    var1 = var1.data;
                    var4 = 'string';
                    var1 = typeof var1;
                    if (!(var4 !== var1)) {
                        _fun52631_ip = 71;
                        continue _fun52631
                    }
                case 55:
                    var1 = var2;
                    var1 = var1.nativeEvent;
                    var1 = var1.data;
                    _fun52631_ip = 101;
                    continue _fun52631;
                case 71:
                    var4 = global;
                    var6 = var4.JSON;
                    var4 = var6.parse;
                    var2 = var2.nativeEvent;
                    var2 = var2.data;
                    var1 = var4.bind(var6)(var2);
                case 101:
                    var3 = var1;
                    var4 = _closure2_slot2;
                    var2 = var4;
                    if (!var4) {
                        _fun52631_ip = 145;
                        continue _fun52631
                    }
                case 117:
                    var4 = var3;
                    var5 = var5 == var4;
                    var4 = undefined;
                    if (var5) {
                        _fun52631_ip = 135;
                        continue _fun52631
                    }
                case 129:
                    var4 = var3.eventType;
                case 135:
                    var3 = 'Verification.Result';
                    var2 = var3 === var4;
                case 145:
                    if (!var2) {
                        _fun52631_ip = 156;
                        continue _fun52631
                    }
                case 148:
                    var1 = _closure2_slot3;
                    var1 = var1.bind(var0)();
                case 156: // try_end0
                    _fun52631_ip = 160;
                    continue _fun52631;
                case 158: // catch_target0
                    CatchBlockStart(arg_register = 1);
                case 160:
                    return var0;
            }
        };
        var4 = var4.bind(var7)(var1, var2);
        var2 = _closure1_slot5;
        var1 = _closure1_slot1;
        var0 = 6;
        var0 = var5[var0];
        var1 = var1.bind(var3)(var0);
        var0 = {
            'allowsInlineMediaPlayback': true,
            'javaScriptEnabled': true,
            'source': null,
            'onMessage': null,
            'injectedJavaScript': "\n  window.addEventListener('message', function(event) {\n    window.ReactNativeWebView.postMessage(event.data);\n  }, true);\n"
        };
        var5 = {};
        var5.uri = var6;
        var0.source = var5;
        var0.onMessage = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot7 = var3;
    var3 = 7;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 8;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_BASE_LOWER;
    var8.backgroundColor = var9;
    var3.headerStyle = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot8 = var3;
    var3 = 14;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/age_assurance/native/AgeVerificationModal.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var1 = arg0;
        var12 = var1.webviewUrl;
        var _closure2_slot0 = var12;
        var11 = var1.onComplete;
        var _closure2_slot1 = var11;
        var10 = var1.onClose;
        var _closure2_slot2 = var10;
        var1 = _closure1_slot8;
        var3 = undefined;
        var13 = var1.bind(var3)();
        var _closure2_slot3 = var13;
        var7 = _closure1_slot0;
        var8 = _closure1_slot2;
        var1 = 12;
        var1 = var8[var1];
        var9 = var7.bind(var3)(var1);
        var6 = var9.useUpdatedAgeVerificationString;
        var4 = 11;
        var1 = var8[var4];
        var1 = var7.bind(var3)(var1);
        var14 = var1.intl;
        var2 = var14.string;
        var1 = var8[var4];
        var1 = var7.bind(var3)(var1);
        var1 = var1.t;
        var1 = var1.Mqtf3P;
        var2 = var2.bind(var14)(var1);
        var1 = var8[var4];
        var1 = var7.bind(var3)(var1);
        var15 = var1.intl;
        var14 = var15.string;
        var1 = var8[var4];
        var1 = var7.bind(var3)(var1);
        var1 = var1.t;
        var1 = var1.wJVyYR;
        var1 = var14.bind(var15)(var1);
        var9 = var6.bind(var9)(var2, var1);
        var _closure2_slot4 = var9;
        var6 = _closure1_slot3;
        var2 = var6.useMemo;
        var1 = new Array(5);
        var1[0] = var13;
        var1[1] = var12;
        var1[2] = var11;
        var1[3] = var10;
        var1[4] = var9;
        var0 = function() { // Environment: var0
            var6 = _closure1_slot9;
            var11 = _closure2_slot3;
            var10 = _closure2_slot0;
            var9 = _closure2_slot1;
            var8 = _closure2_slot2;
            var7 = _closure2_slot4;
            var12 = undefined;
            var0 = var12[var6](var11, var10, var9, var8, var7, var6);
            return var0;
        };
        var6 = var2.bind(var6)(var0, var1);
        var2 = _closure1_slot5;
        var0 = 13;
        var0 = var8[var0];
        var0 = var7.bind(var3)(var0);
        var1 = var0.Navigator;
        var0 = {};
        var0.screens = var6;
        var5 = _closure1_slot6;
        var5 = var5.VERIFY_AGE;
        var0.initialRouteName = var5;
        var5 = var8[var4];
        var5 = var7.bind(var3)(var5);
        var6 = var5.intl;
        var5 = var6.string;
        var4 = var8[var4];
        var4 = var7.bind(var3)(var4);
        var4 = var4.t;
        var4 = var4["13/7kX"];
        var4 = var5.bind(var6)(var4);
        var0.headerBackTitle = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 5984, 33, 5991, 3920, 4248, 5994, 1297, 671, 4561, 5374, 1234, 4553, 5837, 2]);