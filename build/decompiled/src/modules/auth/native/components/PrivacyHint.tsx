// modules/auth/native/components/PrivacyHint.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = function(arg0) { // Original name: PrivacyPolicyDescription, environment: var1
        var0 = arg0;
        var4 = var0.style;
        var3 = _closure1_slot8;
        var5 = _closure1_slot0;
        var9 = _closure1_slot2;
        var0 = 7;
        var0 = var9[var0];
        var2 = undefined;
        var0 = var5.bind(var2)(var0);
        var1 = var0.TextWithIOSLinkWorkaround;
        var0 = {
            'style': null,
            'variant': 'text-xs/medium',
            'color': 'text-muted'
        };
        var0.style = var4;
        var4 = 8;
        var6 = var9[var4];
        var6 = var5.bind(var2)(var6);
        var7 = var6.intl;
        var6 = var7.format;
        var4 = var9[var4];
        var4 = var5.bind(var2)(var4);
        var4 = var4.t;
        var5 = var4["KI+BSb"];
        var4 = {};
        var9 = _closure1_slot7;
        var9 = var9.TERMS;
        var4.termsURL = var9;
        var8 = _closure1_slot7;
        var8 = var8.PRIVACY;
        var4.privacyURL = var8;
        var4 = var6.bind(var7)(var5, var4);
        var0.children = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var _closure1_slot11 = var0;
    var0 = function(arg0) { // Original name: PrivacyPolicyCheckbox, environment: var1
        _fun101105: for (var _fun101105_ip = 0;;) switch (_fun101105_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.consent;
                var5 = var0.onToggleConsent;
                var4 = var0.asCheckbox;
                var3 = undefined;
                if (!(var4 === var3)) {
                    _fun101105_ip = 29;
                    continue _fun101105
                }
            case 27:
                var4 = false;
            case 29:
                var0 = _closure1_slot10;
                var10 = var0.bind(var3)();
                var2 = _closure1_slot9;
                var1 = _closure1_slot4;
                var0 = {};
                if (var4) {
                    _fun101105_ip = 61;
                    continue _fun101105
                }
            case 53:
                var6 = var10.radio;
                _fun101105_ip = 67;
                continue _fun101105;
            case 61:
                var6 = var10.checkbox;
            case 67:
                var0.style = var6;
                var6 = {};
                var6.checked = var8;
                var0.accessibilityState = var6;
                var6 = 'checkbox';
                var0.accessibilityRole = var6;
                var11 = _closure1_slot0;
                var6 = _closure1_slot2;
                var13 = 8;
                var7 = var6[var13];
                var7 = var11.bind(var3)(var7);
                var9 = var7.intl;
                var7 = var9.string;
                var6 = var6[var13];
                var6 = var11.bind(var3)(var6);
                var6 = var6.t;
                var6 = var6.Y7Kgvf;
                var6 = var7.bind(var9)(var6);
                var0.accessibilityLabel = var6;
                var0.onPress = var5;
                var5 = {
                    'top': 11,
                    'bottom': 11,
                    'left': 11
                };
                var0.hitSlop = var5;
                var7 = _closure1_slot8;
                var6 = _closure1_slot0;
                var9 = _closure1_slot2;
                if (var4) {
                    _fun101105_ip = 229;
                    continue _fun101105
                }
            case 190:
                var4 = 10;
                var4 = var9[var4];
                var4 = var6.bind(var3)(var4);
                var4 = var4.FormRow;
                var5 = var4.Radio;
                var4 = {};
                var4.selected = var8;
                var5 = var7.bind(var3)(var5, var4);
                _fun101105_ip = 260;
                continue _fun101105;
            case 229:
                var4 = 9;
                var4 = var9[var4];
                var4 = var6.bind(var3)(var4);
                var6 = var4.FormCheckbox;
                var4 = {};
                var4.checked = var8;
                var5 = var7.bind(var3)(var6, var4);
            case 260:
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot8;
                var9 = _closure1_slot0;
                var8 = _closure1_slot2;
                var5 = 7;
                var5 = var8[var5];
                var5 = var9.bind(var3)(var5);
                var6 = var5.TextWithIOSLinkWorkaround;
                var5 = {
                    'variant': 'text-xs/medium',
                    'color': 'text-muted'
                };
                var10 = var10.checkboxLabel;
                var5.style = var10;
                var10 = var8[var13];
                var10 = var9.bind(var3)(var10);
                var11 = var10.intl;
                var10 = var11.format;
                var8 = var8[var13];
                var8 = var9.bind(var3)(var8);
                var8 = var8.t;
                var9 = var8.qMDAP0;
                var8 = {};
                var13 = _closure1_slot7;
                var13 = var13.TERMS;
                var8.termsURL = var13;
                var12 = _closure1_slot7;
                var12 = var12.PRIVACY;
                var8.privacyURL = var12;
                var8 = var10.bind(var11)(var9, var8);
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
    var6 = var5[var0];
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var9 = 1;
    var3 = var5[var9];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot3 = var6;
    var3 = var3.Pressable;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.usePromoEmailConsentStore;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.useRegistrationUIStore;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.MarketingURLs;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot8 = var6;
    var3 = var3.jsxs;
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'flexDirection': 'column',
        'gap': 16
    };
    var3.multiItem = var8;
    var8 = {
        'flexDirection': 'row',
        'alignItems': 'flex-start',
        'gap': 8
    };
    var3.checkbox = var8;
    var8 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'gap': 8
    };
    var3.radio = var8;
    var8 = {};
    var8.flex = var9;
    var3.checkboxLabel = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot10 = var3;
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/auth/native/components/PrivacyHint.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: PrivacyHint, environment: var1
        _fun101106: for (var _fun101106_ip = 0;;) switch (_fun101106_ip) {
            case 0:
                var0 = arg0;
                var11 = var0.consent;
                var1 = var0.consentRequired;
                var10 = var0.onToggleConsent;
                var0 = _closure1_slot10;
                var5 = undefined;
                var6 = var0.bind(var5)();
                var3 = _closure1_slot5;
                var0 = function(arg0) { // Environment: var2
                    var0 = arg0;
                    var0 = var0.required;
                    return var0;
                };
                var0 = var3.bind(var5)(var0);
                var3 = _closure1_slot6;
                var2 = function(arg0) { // Environment: var2
                    var0 = arg0;
                    var0 = var0.registrationOptions;
                    var1 = var0.email;
                    var0 = null;
                    var0 = var0 != var1;
                    return var0;
                };
                var2 = var3.bind(var5)(var2);
                if (!var2) {
                    _fun101106_ip = 74;
                    continue _fun101106
                }
            case 71:
                var2 = var0;
            case 74:
                if (var1) {
                    _fun101106_ip = 175;
                    continue _fun101106
                }
            case 77:
                if (!var2) {
                    _fun101106_ip = 175;
                    continue _fun101106
                }
            case 80:
                var4 = _closure1_slot9;
                var3 = _closure1_slot3;
                var0 = {};
                var8 = var6.multiItem;
                var0.style = var8;
                var12 = _closure1_slot8;
                var9 = _closure1_slot1;
                var13 = _closure1_slot2;
                var8 = 11;
                var8 = var13[var8];
                var9 = var9.bind(var5)(var8);
                var8 = {};
                var9 = var12.bind(var5)(var9, var8);
                var8 = new Array(2);
                var8[0] = var9;
                var13 = _closure1_slot8;
                var12 = _closure1_slot11;
                var9 = {};
                var9 = var13.bind(var5)(var12, var9);
                var8[1] = var9;
                var0.children = var8;
                var0 = var4.bind(var5)(var3, var0);
                _fun101106_ip = 336;
                continue _fun101106;
            case 175:
                if (!var1) {
                    _fun101106_ip = 181;
                    continue _fun101106
                }
            case 178:
                if (var2) {
                    _fun101106_ip = 226;
                    continue _fun101106
                }
            case 181:
                var4 = _closure1_slot8;
                if (var1) {
                    _fun101106_ip = 202;
                    continue _fun101106
                }
            case 188:
                var2 = _closure1_slot11;
                var1 = {};
                var1 = var4.bind(var5)(var2, var1);
                _fun101106_ip = 224;
                continue _fun101106;
            case 202:
                var3 = _closure1_slot12;
                var2 = {};
                var2.consent = var11;
                var2.onToggleConsent = var10;
                var1 = var4.bind(var5)(var3, var2);
            case 224:
                _fun101106_ip = 333;
                continue _fun101106;
            case 226:
                var4 = _closure1_slot9;
                var3 = _closure1_slot3;
                var2 = {};
                var6 = var6.multiItem;
                var2.style = var6;
                var9 = _closure1_slot8;
                var8 = _closure1_slot1;
                var12 = _closure1_slot2;
                var6 = 11;
                var6 = var12[var6];
                var8 = var8.bind(var5)(var6);
                var6 = {};
                var8 = var9.bind(var5)(var8, var6);
                var6 = new Array(2);
                var6[0] = var8;
                var9 = _closure1_slot8;
                var8 = _closure1_slot12;
                var7 = {};
                var7.consent = var11;
                var7.onToggleConsent = var10;
                var10 = true;
                var7.asCheckbox = var10;
                var7 = var9.bind(var5)(var8, var7);
                var6[1] = var7;
                var2.children = var6;
                var1 = var4.bind(var5)(var3, var2);
            case 333:
                var0 = var1;
            case 336:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 4521, 13068, 660, 33, 1297, 5293, 1234, 5401, 5339, 13106, 2]);