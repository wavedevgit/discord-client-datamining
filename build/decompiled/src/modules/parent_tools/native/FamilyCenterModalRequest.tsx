// modules/parent_tools/native/FamilyCenterModalRequest.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var8 = require;
    var14 = metroImportDefault;
    var2 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var14;
    var _closure1_slot2 = var9;
    var4 = function arg0() {
        var1 = arg0;
        var6 = var1.userId;
        var _closure2_slot0 = var6;
        var5 = var1.linkCode;
        var _closure2_slot1 = var5;
        var1 = _closure1_slot13;
        var3 = undefined;
        var11 = var1.bind(var3)();
        var20 = _closure1_slot0;
        var17 = _closure1_slot2;
        var1 = 8;
        var1 = var17[var1];
        var2 = var20.bind(var3)(var1);
        var1 = var2.useNavigation;
        var1 = var1.bind(var2)();
        var _closure2_slot2 = var1;
        var8 = _closure1_slot3;
        var7 = var8.useCallback;
        var4 = new Array(1);
        var4[0] = var1;
        var2 = function() { // Environment: var0
            var2 = _closure2_slot2;
            var1 = var2.push;
            var0 = _closure1_slot12;
            var0 = var0.SENT;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var8 = var7.bind(var8)(var2, var4);
        var7 = _closure1_slot3;
        var4 = var7.useCallback;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function(arg0) { // Environment: var0
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var0 = 9;
            var2 = var2[var0];
            var0 = undefined;
            var4 = var3.bind(var0)(var2);
            var3 = var4.getFailureCodeForAPIError;
            var2 = arg0;
            var5 = var3.bind(var4)(var2);
            var4 = _closure2_slot2;
            var3 = var4.push;
            var1 = _closure1_slot12;
            var2 = var1.ERROR;
            var1 = {};
            var1.failureCode = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var7 = var4.bind(var7)(var1, var2);
        var1 = 10;
        var1 = var17[var1];
        var4 = var20.bind(var3)(var1);
        var2 = var4.useFamilyCenterActions;
        var1 = {};
        var1.onSuccess = var8;
        var1.onError = var7;
        var1 = var2.bind(var4)(var1);
        var7 = var1.requestLink;
        var _closure2_slot3 = var7;
        var22 = var1.isRequestingLink;
        var4 = _closure1_slot3;
        var2 = var4.useCallback;
        var1 = new Array(3);
        var1[0] = var7;
        var1[1] = var6;
        var1[2] = var5;
        var0 = function() { // Environment: var0
            var3 = _closure2_slot3;
            var2 = _closure2_slot0;
            var1 = _closure2_slot1;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            return var0;
        };
        var19 = var2.bind(var4)(var0, var1);
        var2 = _closure1_slot11;
        var0 = 11;
        var0 = var17[var0];
        var0 = var20.bind(var3)(var0);
        var1 = var0.ModalScreen;
        var0 = {};
        var6 = _closure1_slot11;
        var4 = 12;
        var4 = var17[var4];
        var4 = var20.bind(var3)(var4);
        var5 = var4.ModalContent;
        var4 = {};
        var9 = _closure1_slot10;
        var8 = _closure1_slot4;
        var7 = {};
        var10 = var11.art;
        var7.style = var10;
        var16 = _closure1_slot1;
        var10 = 13;
        var10 = var17[var10];
        var10 = var16.bind(var3)(var10);
        var7.source = var10;
        var8 = var9.bind(var3)(var8, var7);
        var7 = new Array(3);
        var7[0] = var8;
        var10 = _closure1_slot10;
        var8 = 14;
        var8 = var17[var8];
        var8 = var20.bind(var3)(var8);
        var9 = var8.Text;
        var8 = {};
        var11 = var11.headerText;
        var8.style = var11;
        var11 = 'text-lg/bold';
        var8.variant = var11;
        var15 = 15;
        var11 = var17[var15];
        var11 = var20.bind(var3)(var11);
        var14 = var11.intl;
        var12 = var14.string;
        var21 = 16;
        var11 = var17[var21];
        var11 = var16.bind(var3)(var11);
        var11 = var11.GH11eI;
        var11 = var12.bind(var14)(var11);
        var8.children = var11;
        var8 = var10.bind(var3)(var9, var8);
        var7[1] = var8;
        var8 = _closure1_slot14;
        var7[2] = var8;
        var4.children = var7;
        var5 = var6.bind(var3)(var5, var4);
        var4 = new Array(2);
        var4[0] = var5;
        var7 = _closure1_slot10;
        var5 = 17;
        var5 = var17[var5];
        var5 = var20.bind(var3)(var5);
        var6 = var5.ModalFooter;
        var5 = {};
        var10 = _closure1_slot11;
        var8 = 18;
        var8 = var17[var8];
        var8 = var20.bind(var3)(var8);
        var9 = var8.ButtonGroup;
        var8 = {};
        var18 = _closure1_slot10;
        var12 = 19;
        var11 = var17[var12];
        var11 = var20.bind(var3)(var11);
        var14 = var11.Button;
        var11 = {};
        var23 = 'primary';
        var11.variant = var23;
        var11.disabled = var22;
        var11.loading = var22;
        var22 = var17[var15];
        var22 = var20.bind(var3)(var22);
        var23 = var22.intl;
        var22 = var23.string;
        var21 = var17[var21];
        var21 = var16.bind(var3)(var21);
        var21 = var21.ISg34l;
        var21 = var22.bind(var23)(var21);
        var11.text = var21;
        var11.onPress = var19;
        var14 = var18.bind(var3)(var14, var11);
        var11 = new Array(2);
        var11[0] = var14;
        var14 = _closure1_slot10;
        var12 = var17[var12];
        var12 = var20.bind(var3)(var12);
        var13 = var12.Button;
        var12 = {};
        var18 = 'tertiary';
        var12.variant = var18;
        var18 = var17[var15];
        var18 = var20.bind(var3)(var18);
        var19 = var18.intl;
        var18 = var19.string;
        var15 = var17[var15];
        var15 = var20.bind(var3)(var15);
        var15 = var15.t;
        var15 = var15["ETE/oC"];
        var15 = var18.bind(var19)(var15);
        var12.text = var15;
        var15 = 20;
        var15 = var17[var15];
        var15 = var16.bind(var3)(var15);
        var15 = var15.pop;
        var12.onPress = var15;
        var12 = var14.bind(var3)(var13, var12);
        var11[1] = var12;
        var8.children = var11;
        var8 = var10.bind(var3)(var9, var8);
        var5.children = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot21 = var4;
    var3 = function() {
        _fun81484: for (var _fun81484_ip = 0;;) switch (_fun81484_ip) {
            case 0:
                var1 = _closure1_slot15;
                var3 = undefined;
                var15 = var1.bind(var3)();
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 23;
                var1 = var6[var1];
                var7 = var5.bind(var3)(var1);
                var4 = var7.useStateFromStores;
                var1 = _closure1_slot6;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var0
                    var1 = _closure1_slot6;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var19 = var4.bind(var7)(var2, var1);
                var1 = 24;
                var2 = var6[var1];
                var4 = var5.bind(var3)(var2);
                var2 = var4.generateBoxShadowStyle;
                var1 = var6[var1];
                var1 = var5.bind(var3)(var1);
                var1 = var1.FOUR_DP_ELEVATION_SHADOW_PARAMS;
                var13 = var2.bind(var4)(var1);
                var4 = _closure1_slot3;
                var2 = var4.useCallback;
                var1 = function() { // Environment: var0
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 20;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.pop;
                    var1 = var1.bind(var2)();
                    return var0;
                };
                var0 = new Array(0);
                var11 = var2.bind(var4)(var1, var0);
                var18 = null;
                if (!(var18 === var19)) {
                    _fun81484_ip = 165;
                    continue _fun81484
                }
            case 135:
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 20;
                var0 = var2[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.pop;
                var0 = var0.bind(var1)();
            case 165:
                var2 = _closure1_slot11;
                var17 = _closure1_slot0;
                var20 = _closure1_slot2;
                var0 = 11;
                var0 = var20[var0];
                var0 = var17.bind(var3)(var0);
                var1 = var0.ModalScreen;
                var0 = {};
                var6 = _closure1_slot11;
                var4 = 12;
                var4 = var20[var4];
                var4 = var17.bind(var3)(var4);
                var5 = var4.ModalContent;
                var4 = {};
                var10 = _closure1_slot10;
                var9 = _closure1_slot5;
                var7 = {};
                var14 = var15.ring;
                var12 = new Array(2);
                var12[0] = var14;
                var12[1] = var13;
                var7.style = var12;
                var14 = _closure1_slot10;
                var13 = _closure1_slot5;
                var12 = {};
                var16 = var15.iconContainer;
                var12.style = var16;
                var16 = _closure1_slot16;
                var12.children = var16;
                var12 = var14.bind(var3)(var13, var12);
                var7.children = var12;
                var9 = var10.bind(var3)(var9, var7);
                var7 = new Array(3);
                var7[0] = var9;
                var21 = _closure1_slot10;
                var9 = 14;
                var10 = var20[var9];
                var10 = var17.bind(var3)(var10);
                var12 = var10.Text;
                var10 = {
                    'variant': 'heading-lg/bold',
                    'color': 'mobile-text-heading-primary'
                };
                var13 = var15.header;
                var10.style = var13;
                var16 = 15;
                var13 = var20[var16];
                var13 = var17.bind(var3)(var13);
                var24 = var13.intl;
                var23 = var24.string;
                var14 = _closure1_slot1;
                var13 = 16;
                var22 = var20[var13];
                var22 = var14.bind(var3)(var22);
                var22 = var22.EpwfZl;
                var22 = var23.bind(var24)(var22);
                var10.children = var22;
                var10 = var21.bind(var3)(var12, var10);
                var7[1] = var10;
                var12 = _closure1_slot10;
                var9 = var20[var9];
                var9 = var17.bind(var3)(var9);
                var10 = var9.Text;
                var9 = {
                    'variant': 'text-sm/medium',
                    'color': 'text-muted'
                };
                var15 = var15.description;
                var9.style = var15;
                var15 = var20[var16];
                var15 = var17.bind(var3)(var15);
                var17 = var15.intl;
                var15 = var17.format;
                var13 = var20[var13];
                var13 = var14.bind(var3)(var13);
                var14 = var13.dVtWId;
                var13 = {};
                var20 = var18 == var19;
                var18 = undefined;
                if (var20) {
                    _fun81484_ip = 508;
                    continue _fun81484
                }
            case 502:
                var18 = var19.email;
            case 508:
                var13.email = var18;
                var13 = var15.bind(var17)(var14, var13);
                var9.children = var13;
                var9 = var12.bind(var3)(var10, var9);
                var7[2] = var9;
                var4.children = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot10;
                var15 = _closure1_slot0;
                var12 = _closure1_slot2;
                var5 = 17;
                var5 = var12[var5];
                var5 = var15.bind(var3)(var5);
                var6 = var5.ModalFooter;
                var5 = {};
                var10 = _closure1_slot10;
                var8 = 19;
                var8 = var12[var8];
                var8 = var15.bind(var3)(var8);
                var9 = var8.Button;
                var8 = {};
                var13 = var12[var16];
                var13 = var15.bind(var3)(var13);
                var14 = var13.intl;
                var13 = var14.string;
                var12 = var12[var16];
                var12 = var15.bind(var3)(var12);
                var12 = var12.t;
                var12 = var12.cpT0Cq;
                var12 = var13.bind(var14)(var12);
                var8.text = var12;
                var8.onPress = var11;
                var8 = var10.bind(var3)(var9, var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = function arg0() {
        _fun81487: for (var _fun81487_ip = 0;;) switch (_fun81487_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.failureCode;
                var1 = _closure1_slot17;
                var3 = undefined;
                var14 = var1.bind(var3)();
                var11 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 23;
                var1 = var5[var1];
                var7 = var11.bind(var3)(var1);
                var6 = var7.useStateFromStores;
                var1 = _closure1_slot6;
                var4 = new Array(1);
                var4[0] = var1;
                var1 = function() { // Environment: var0
                    var1 = _closure1_slot6;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var4 = var6.bind(var7)(var4, var1);
                var1 = _closure1_slot1;
                var6 = 26;
                var6 = var5[var6];
                var6 = var1.bind(var3)(var6);
                var6 = var6.bind(var3)();
                var7 = 24;
                var9 = var5[var7];
                var10 = var11.bind(var3)(var9);
                var9 = var10.generateBoxShadowStyle;
                var7 = var5[var7];
                var7 = var11.bind(var3)(var7);
                var7 = var7.FOUR_DP_ELEVATION_SHADOW_PARAMS;
                var15 = var9.bind(var10)(var7);
                var10 = _closure1_slot3;
                var9 = var10.useCallback;
                var7 = function() { // Environment: var0
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 20;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.pop;
                    var1 = var1.bind(var2)();
                    return var0;
                };
                var0 = new Array(0);
                var11 = var9.bind(var10)(var7, var0);
                var0 = 27;
                var0 = var5[var0];
                var7 = var1.bind(var3)(var0);
                var1 = null;
                var5 = var1 != var4;
                var0 = 'User must be logged in to see this modal.';
                var0 = var7.bind(var3)(var5, var0);
                var0 = _closure1_slot7;
                var0 = var0[var2];
                var2 = {};
                var7 = var1 != var6;
                var5 = undefined;
                if (!var7) {
                    _fun81487_ip = 210;
                    continue _fun81487
                }
            case 207:
                var5 = var6;
            case 210:
                var2.isAdult = var5;
                var4 = var4.email;
                var5 = var1 != var4;
                var1 = undefined;
                if (!var5) {
                    _fun81487_ip = 233;
                    continue _fun81487
                }
            case 230:
                var1 = var4;
            case 233:
                var2.email = var1;
                var1 = var0.header;
                var18 = var1.bind(var0)(var2);
                var1 = var0.description;
                var13 = var1.bind(var0)(var2);
                var19 = var0.icon;
                var0 = _closure1_slot9;
                var20 = var0.CHECK;
                var2 = _closure1_slot11;
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 11;
                var0 = var7[var0];
                var0 = var5.bind(var3)(var0);
                var1 = var0.ModalScreen;
                var0 = {};
                var6 = _closure1_slot11;
                var4 = 12;
                var4 = var7[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.ModalContent;
                var4 = {};
                var10 = _closure1_slot10;
                var9 = _closure1_slot5;
                var7 = {};
                var16 = var14.ring;
                var12 = new Array(2);
                var12[0] = var16;
                var12[1] = var15;
                var7.style = var12;
                var16 = _closure1_slot10;
                var15 = _closure1_slot5;
                var12 = {};
                var21 = var14.iconContainer;
                var17 = new Array(2);
                var17[0] = var21;
                if (!(var19 !== var20)) {
                    _fun81487_ip = 397;
                    continue _fun81487
                }
            case 389:
                var20 = var14.negative;
                _fun81487_ip = 403;
                continue _fun81487;
            case 397:
                var20 = var14.positive;
            case 403:
                var17[1] = var20;
                var12.style = var17;
                var17 = _closure1_slot9;
                var17 = var17.CHECK;
                if (!(var19 !== var17)) {
                    _fun81487_ip = 431;
                    continue _fun81487
                }
            case 425:
                var17 = _closure1_slot19;
                _fun81487_ip = 435;
                continue _fun81487;
            case 431:
                var17 = _closure1_slot18;
            case 435:
                var12.children = var17;
                var12 = var16.bind(var3)(var15, var12);
                var7.children = var12;
                var9 = var10.bind(var3)(var9, var7);
                var7 = new Array(3);
                var7[0] = var9;
                var17 = _closure1_slot10;
                var15 = _closure1_slot0;
                var16 = _closure1_slot2;
                var9 = 14;
                var10 = var16[var9];
                var10 = var15.bind(var3)(var10);
                var12 = var10.Text;
                var10 = {
                    'variant': 'heading-lg/bold',
                    'color': 'mobile-text-heading-primary'
                };
                var19 = var14.header;
                var10.style = var19;
                var10.children = var18;
                var10 = var17.bind(var3)(var12, var10);
                var7[1] = var10;
                var12 = _closure1_slot10;
                var9 = var16[var9];
                var9 = var15.bind(var3)(var9);
                var10 = var9.Text;
                var9 = {
                    'variant': 'text-sm/medium',
                    'color': 'text-muted'
                };
                var14 = var14.description;
                var9.style = var14;
                var9.children = var13;
                var9 = var12.bind(var3)(var10, var9);
                var7[2] = var9;
                var4.children = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot10;
                var5 = 17;
                var5 = var16[var5];
                var5 = var15.bind(var3)(var5);
                var6 = var5.ModalFooter;
                var5 = {};
                var10 = _closure1_slot10;
                var8 = 19;
                var8 = var16[var8];
                var8 = var15.bind(var3)(var8);
                var9 = var8.Button;
                var8 = {};
                var12 = 15;
                var13 = var16[var12];
                var13 = var15.bind(var3)(var13);
                var14 = var13.intl;
                var13 = var14.string;
                var12 = var16[var12];
                var12 = var15.bind(var3)(var12);
                var12 = var12.t;
                var12 = var12.cpT0Cq;
                var12 = var13.bind(var14)(var12);
                var8.text = var12;
                var8.onPress = var11;
                var8 = var10.bind(var3)(var9, var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot22 = var1;
    var5 = global;
    var11 = var5.Object;
    var10 = var11.defineProperty;
    var7 = {};
    var0 = true;
    var7.value = var0;
    var0 = '__esModule';
    var0 = var10.bind(var11)(var2, var0, var7);
    var0 = 0;
    var10 = var9[var0];
    var7 = arg3;
    var0 = undefined;
    var7 = var7.bind(var0)(var10);
    var _closure1_slot3 = var7;
    var7 = 1;
    var7 = var9[var7];
    var7 = var8.bind(var0)(var7);
    var10 = var7.Image;
    var _closure1_slot4 = var10;
    var7 = var7.View;
    var _closure1_slot5 = var7;
    var7 = 2;
    var7 = var9[var7];
    var7 = var14.bind(var0)(var7);
    var _closure1_slot6 = var7;
    var7 = 3;
    var7 = var9[var7];
    var7 = var8.bind(var0)(var7);
    var10 = var7.FAMILY_CENTER_LINK_REQUEST_ERROR_EXPERIENCES;
    var _closure1_slot7 = var10;
    var10 = var7.FamilyCenterFailureCode;
    var _closure1_slot8 = var10;
    var7 = var7.FamilyCenterIconType;
    var _closure1_slot9 = var7;
    var7 = 4;
    var7 = var9[var7];
    var7 = var8.bind(var0)(var7);
    var10 = var7.jsx;
    var _closure1_slot10 = var10;
    var7 = var7.jsxs;
    var _closure1_slot11 = var7;
    var11 = var5.Object;
    var7 = var11.freeze;
    var5 = {
        'REQUEST': 'REQUESTS',
        'SENT': 'SENT',
        'ERROR': 'ERROR',
        'TEEN_SCAN': 'TEEN_SCAN'
    };
    var5 = var7.bind(var11)(var5);
    var _closure1_slot12 = var5;
    var11 = 5;
    var7 = var9[var11];
    var13 = var8.bind(var0)(var7);
    var12 = var13.createStyles;
    var7 = {};
    var15 = {};
    var18 = 6;
    var16 = var9[var18];
    var16 = var14.bind(var0)(var16);
    var16 = var16.spacing;
    var16 = var16.PX_16;
    var15.marginTop = var16;
    var16 = var9[var18];
    var16 = var14.bind(var0)(var16);
    var16 = var16.spacing;
    var16 = var16.PX_16;
    var15.marginBottom = var16;
    var7.headerText = var15;
    var15 = {
        'width': 165,
        'height': 119
    };
    var7.art = var15;
    var7 = var12.bind(var13)(var7);
    var _closure1_slot13 = var7;
    var7 = 7;
    var7 = var9[var7];
    var12 = var14.bind(var0)(var7);
    var7 = {};
    var13 = 'request-modal';
    var7.source = var13;
    var7 = var10.bind(var0)(var12, var7);
    var _closure1_slot14 = var7;
    var7 = var9[var11];
    var13 = var8.bind(var0)(var7);
    var12 = var13.createStyles;
    var7 = {};
    var15 = {};
    var16 = var9[var18];
    var16 = var14.bind(var0)(var16);
    var16 = var16.spacing;
    var16 = var16.PX_8;
    var15.marginBottom = var16;
    var7.header = var15;
    var15 = {};
    var19 = 'center';
    var15.textAlign = var19;
    var7.description = var15;
    var15 = {
        'display': 'flex',
        'justifyContent': 'center',
        'alignItems': 'center',
        'height': 64,
        'width': 64
    };
    var16 = var9[var18];
    var16 = var14.bind(var0)(var16);
    var16 = var16.radii;
    var16 = var16.round;
    var15.borderRadius = var16;
    var16 = var9[var18];
    var16 = var14.bind(var0)(var16);
    var16 = var16.colors;
    var16 = var16.BACKGROUND_SURFACE_HIGH;
    var15.backgroundColor = var16;
    var16 = var9[var18];
    var16 = var14.bind(var0)(var16);
    var16 = var16.spacing;
    var16 = var16.PX_24;
    var15.marginBottom = var16;
    var7.ring = var15;
    var15 = {
        'display': 'flex',
        'justifyContent': 'center',
        'alignItems': 'center',
        'height': 48,
        'width': 48
    };
    var16 = var9[var18];
    var16 = var14.bind(var0)(var16);
    var16 = var16.radii;
    var16 = var16.round;
    var15.borderRadius = var16;
    var16 = var9[var18];
    var16 = var14.bind(var0)(var16);
    var16 = var16.colors;
    var16 = var16.STATUS_POSITIVE;
    var15.backgroundColor = var16;
    var7.iconContainer = var15;
    var7 = var12.bind(var13)(var7);
    var _closure1_slot15 = var7;
    var7 = 21;
    var12 = var9[var7];
    var16 = var14.bind(var0)(var12);
    var13 = {};
    var15 = 22;
    var12 = var9[var15];
    var12 = var14.bind(var0)(var12);
    var13.source = var12;
    var12 = '#FFF';
    var13.color = var12;
    var13 = var10.bind(var0)(var16, var13);
    var _closure1_slot16 = var13;
    var11 = var9[var11];
    var16 = var8.bind(var0)(var11);
    var13 = var16.createStyles;
    var11 = {};
    var17 = {
        'marginBottom': 8,
        'textAlign': 'center'
    };
    var11.header = var17;
    var17 = {};
    var17.textAlign = var19;
    var11.description = var17;
    var17 = {
        'display': 'flex',
        'justifyContent': 'center',
        'alignItems': 'center',
        'height': 64,
        'width': 64,
        'borderRadius': null,
        'backgroundColor': null,
        'marginBottom': 24
    };
    var19 = var9[var18];
    var19 = var14.bind(var0)(var19);
    var19 = var19.radii;
    var19 = var19.round;
    var17.borderRadius = var19;
    var19 = var9[var18];
    var19 = var14.bind(var0)(var19);
    var19 = var19.colors;
    var19 = var19.BACKGROUND_SURFACE_HIGH;
    var17.backgroundColor = var19;
    var11.ring = var17;
    var17 = {
        'display': 'flex',
        'justifyContent': 'center',
        'alignItems': 'center',
        'height': 48,
        'width': 48
    };
    var19 = var9[var18];
    var19 = var14.bind(var0)(var19);
    var19 = var19.radii;
    var19 = var19.round;
    var17.borderRadius = var19;
    var19 = var9[var18];
    var19 = var14.bind(var0)(var19);
    var19 = var19.colors;
    var19 = var19.STATUS_POSITIVE;
    var17.backgroundColor = var19;
    var11.iconContainer = var17;
    var17 = {};
    var19 = var9[var18];
    var19 = var14.bind(var0)(var19);
    var19 = var19.colors;
    var19 = var19.STATUS_POSITIVE;
    var17.backgroundColor = var19;
    var11.positive = var17;
    var17 = {};
    var18 = var9[var18];
    var18 = var14.bind(var0)(var18);
    var18 = var18.colors;
    var18 = var18.BACKGROUND_FEEDBACK_CRITICAL;
    var17.backgroundColor = var18;
    var11.negative = var17;
    var11 = var13.bind(var16)(var11);
    var _closure1_slot17 = var11;
    var11 = var9[var7];
    var13 = var14.bind(var0)(var11);
    var11 = {};
    var15 = var9[var15];
    var15 = var14.bind(var0)(var15);
    var11.source = var15;
    var11.color = var12;
    var11 = var10.bind(var0)(var13, var11);
    var _closure1_slot18 = var11;
    var7 = var9[var7];
    var11 = var14.bind(var0)(var7);
    var7 = {};
    var13 = 25;
    var13 = var9[var13];
    var13 = var14.bind(var0)(var13);
    var7.source = var13;
    var7.color = var12;
    var7 = var10.bind(var0)(var11, var7);
    var _closure1_slot19 = var7;
    var7 = {};
    var7 = var10.bind(var0)(var3, var7);
    var _closure1_slot20 = var7;
    var7 = 30;
    var7 = var9[var7];
    var9 = var8.bind(var0)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/parent_tools/native/FamilyCenterModalRequest.tsx';
    var7 = var8.bind(var9)(var7);
    var6 = function arg0() {
        _fun81490: for (var _fun81490_ip = 0;;) switch (_fun81490_ip) {
            case 0:
                var1 = arg0;
                var8 = var1.userId;
                var _closure2_slot0 = var8;
                var9 = var1.linkCode;
                var _closure2_slot1 = var9;
                var2 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 26;
                var1 = var7[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var6 = var1.bind(var3)();
                var5 = _closure1_slot3;
                var2 = var5.useMemo;
                var1 = new Array(2);
                var1[0] = var9;
                var1[1] = var8;
                var0 = function() { // Environment: var0
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var1 = function arg0, arg1() {
                        var4 = _closure1_slot10;
                        var2 = _closure1_slot21;
                        var0 = {};
                        var5 = arg0;
                        var0.userId = var5;
                        var5 = arg1;
                        var0.linkCode = var5;
                        var8 = undefined;
                        var0 = var4.bind(var8)(var2, var0);
                        var _closure4_slot0 = var0;
                        var0 = {};
                        var2 = _closure1_slot12;
                        var11 = var2.REQUEST;
                        var2 = {};
                        var6 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var5 = 28;
                        var4 = var9[var5];
                        var13 = var6.bind(var8)(var4);
                        var12 = var13.getHeaderCloseButton;
                        var7 = _closure1_slot1;
                        var4 = 20;
                        var10 = var9[var4];
                        var10 = var7.bind(var8)(var10);
                        var10 = var10.pop;
                        var10 = var12.bind(var13)(var10);
                        var2.headerLeft = var10;
                        var10 = true;
                        var2.headerShown = var10;
                        var12 = function() {
                            var0 = null;
                            return var0;
                        };
                        var2.headerTitle = var12;
                        var12 = function() {
                            var0 = _closure4_slot0;
                            return var0;
                        };
                        var2.render = var12;
                        var0[var11] = var2;
                        var2 = _closure1_slot12;
                        var11 = var2.SENT;
                        var2 = {};
                        var2.headerShown = var10;
                        var12 = var9[var5];
                        var14 = var6.bind(var8)(var12);
                        var13 = var14.getHeaderCloseButton;
                        var12 = var9[var4];
                        var12 = var7.bind(var8)(var12);
                        var12 = var12.pop;
                        var12 = var13.bind(var14)(var12);
                        var2.headerLeft = var12;
                        var12 = function() {
                            var0 = null;
                            return var0;
                        };
                        var2.headerTitle = var12;
                        var12 = function() {
                            var0 = _closure1_slot20;
                            return var0;
                        };
                        var2.render = var12;
                        var0[var11] = var2;
                        var2 = _closure1_slot12;
                        var11 = var2.ERROR;
                        var2 = {};
                        var2.headerShown = var10;
                        var12 = var9[var5];
                        var14 = var6.bind(var8)(var12);
                        var13 = var14.getHeaderCloseButton;
                        var12 = var9[var4];
                        var12 = var7.bind(var8)(var12);
                        var12 = var12.pop;
                        var12 = var13.bind(var14)(var12);
                        var2.headerLeft = var12;
                        var12 = function() {
                            var0 = null;
                            return var0;
                        };
                        var2.headerTitle = var12;
                        var12 = function arg0() {
                            var0 = arg0;
                            var0 = var0.failureCode;
                            var3 = _closure1_slot10;
                            var2 = _closure1_slot22;
                            var1 = {};
                            var1.failureCode = var0;
                            var0 = undefined;
                            var0 = var3.bind(var0)(var2, var1);
                            return var0;
                        };
                        var2.render = var12;
                        var0[var11] = var2;
                        var1 = _closure1_slot12;
                        var2 = var1.TEEN_SCAN;
                        var1 = {};
                        var1.fullscreen = var10;
                        var5 = var9[var5];
                        var6 = var6.bind(var8)(var5);
                        var5 = var6.getHeaderCloseButton;
                        var4 = var9[var4];
                        var4 = var7.bind(var8)(var4);
                        var4 = var4.pop;
                        var4 = var5.bind(var6)(var4);
                        var1.headerLeft = var4;
                        var3 = function() {
                            var3 = _closure1_slot10;
                            var2 = _closure1_slot22;
                            var1 = {};
                            var0 = _closure1_slot8;
                            var0 = var0.INELIGIBLE_FOR_FAMILY_CENTER;
                            var1.failureCode = var0;
                            var0 = undefined;
                            var0 = var3.bind(var0)(var2, var1);
                            return var0;
                        };
                        var1.render = var3;
                        var0[var2] = var1;
                        return var0;
                    };
                    var0 = undefined;
                    var0 = var1.bind(var0)(var3, var2);
                    return var0;
                };
                var5 = var2.bind(var5)(var0, var1);
                var2 = _closure1_slot10;
                var1 = _closure1_slot0;
                var0 = 29;
                var0 = var7[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.Modal;
                var0 = {};
                var7 = _closure1_slot12;
                if (var6) {
                    _fun81490_ip = 130;
                    continue _fun81490
                }
            case 122:
                var6 = var7.TEEN_SCAN;
                _fun81490_ip = 136;
                continue _fun81490;
            case 130:
                var6 = var7.REQUEST;
            case 136:
                var0.initialRouteName = var6;
                var0.screens = var5;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var4 = 15;
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
        }
    };
    var2.default = var6;
    var2.FamilyCenterModalRequestSections = var5;
    var2.FamilyCenterModalRequestConfirm = var4;
    var2.FamilyCenterModalRequestSuccess = var3;
    var2.FamilyCenterModalRequestError = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1621, 4600, 33, 1297, 671, 10321, 1469, 4665, 10316, 6528, 6529, 10327, 3938, 1234, 1860, 10318, 6532, 4090, 4567, 4092, 7792, 632, 4862, 5375, 6603, 44, 5836, 7834, 2]);