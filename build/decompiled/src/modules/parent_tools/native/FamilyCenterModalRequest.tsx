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
        var1 = 7;
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
            var0 = 8;
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
        var1 = 9;
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
        var0 = 10;
        var0 = var17[var0];
        var0 = var20.bind(var3)(var0);
        var1 = var0.ModalScreen;
        var0 = {};
        var6 = _closure1_slot11;
        var4 = 11;
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
        var10 = 12;
        var10 = var17[var10];
        var10 = var16.bind(var3)(var10);
        var7.source = var10;
        var8 = var9.bind(var3)(var8, var7);
        var7 = new Array(3);
        var7[0] = var8;
        var10 = _closure1_slot10;
        var8 = 13;
        var8 = var17[var8];
        var8 = var20.bind(var3)(var8);
        var9 = var8.Text;
        var8 = {};
        var11 = var11.headerText;
        var8.style = var11;
        var11 = 'text-lg/bold';
        var8.variant = var11;
        var15 = 14;
        var11 = var17[var15];
        var11 = var20.bind(var3)(var11);
        var14 = var11.intl;
        var12 = var14.string;
        var21 = 15;
        var11 = var17[var21];
        var11 = var16.bind(var3)(var11);
        var11 = var11.GH11eI;
        var11 = var12.bind(var14)(var11);
        var8.children = var11;
        var8 = var10.bind(var3)(var9, var8);
        var7[1] = var8;
        var10 = _closure1_slot10;
        var8 = 16;
        var8 = var17[var8];
        var9 = var16.bind(var3)(var8);
        var8 = {};
        var11 = 'request-modal';
        var8.source = var11;
        var8 = var10.bind(var3)(var9, var8);
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
    var _closure1_slot16 = var4;
    var3 = function() {
        _fun82310: for (var _fun82310_ip = 0;;) switch (_fun82310_ip) {
            case 0:
                var1 = _closure1_slot14;
                var3 = undefined;
                var15 = var1.bind(var3)();
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 21;
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
                var1 = 22;
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
                    _fun82310_ip = 165;
                    continue _fun82310
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
                var0 = 10;
                var0 = var20[var0];
                var0 = var17.bind(var3)(var0);
                var1 = var0.ModalScreen;
                var0 = {};
                var6 = _closure1_slot11;
                var4 = 11;
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
                var16 = _closure1_slot10;
                var13 = _closure1_slot5;
                var12 = {};
                var14 = var15.iconContainer;
                var12.style = var14;
                var23 = _closure1_slot10;
                var14 = _closure1_slot1;
                var21 = 23;
                var21 = var20[var21];
                var22 = var14.bind(var3)(var21);
                var21 = {};
                var24 = 24;
                var24 = var20[var24];
                var24 = var14.bind(var3)(var24);
                var21.source = var24;
                var24 = '#FFF';
                var21.color = var24;
                var21 = var23.bind(var3)(var22, var21);
                var12.children = var21;
                var12 = var16.bind(var3)(var13, var12);
                var7.children = var12;
                var9 = var10.bind(var3)(var9, var7);
                var7 = new Array(3);
                var7[0] = var9;
                var21 = _closure1_slot10;
                var9 = 13;
                var10 = var20[var9];
                var10 = var17.bind(var3)(var10);
                var12 = var10.Text;
                var10 = {
                    'variant': 'heading-lg/bold',
                    'color': 'mobile-text-heading-primary'
                };
                var13 = var15.header;
                var10.style = var13;
                var16 = 14;
                var13 = var20[var16];
                var13 = var17.bind(var3)(var13);
                var24 = var13.intl;
                var23 = var24.string;
                var13 = 15;
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
                    _fun82310_ip = 554;
                    continue _fun82310
                }
            case 548:
                var18 = var19.email;
            case 554:
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
    var _closure1_slot17 = var3;
    var1 = function arg0() {
        _fun82313: for (var _fun82313_ip = 0;;) switch (_fun82313_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.failureCode;
                var1 = _closure1_slot15;
                var3 = undefined;
                var14 = var1.bind(var3)();
                var11 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 21;
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
                var6 = 25;
                var6 = var5[var6];
                var6 = var1.bind(var3)(var6);
                var6 = var6.bind(var3)();
                var7 = 22;
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
                var0 = 26;
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
                    _fun82313_ip = 210;
                    continue _fun82313
                }
            case 207:
                var5 = var6;
            case 210:
                var2.isAdult = var5;
                var4 = var4.email;
                var5 = var1 != var4;
                var1 = undefined;
                if (!var5) {
                    _fun82313_ip = 233;
                    continue _fun82313
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
                var0 = 10;
                var0 = var7[var0];
                var0 = var5.bind(var3)(var0);
                var1 = var0.ModalScreen;
                var0 = {};
                var6 = _closure1_slot11;
                var4 = 11;
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
                    _fun82313_ip = 397;
                    continue _fun82313
                }
            case 389:
                var20 = var14.negative;
                _fun82313_ip = 403;
                continue _fun82313;
            case 397:
                var20 = var14.positive;
            case 403:
                var17[1] = var20;
                var12.style = var17;
                var17 = _closure1_slot9;
                var17 = var17.CHECK;
                if (!(var19 !== var17)) {
                    _fun82313_ip = 485;
                    continue _fun82313
                }
            case 425:
                var20 = _closure1_slot10;
                var22 = _closure1_slot1;
                var23 = _closure1_slot2;
                var17 = 23;
                var17 = var23[var17];
                var19 = var22.bind(var3)(var17);
                var17 = {};
                var21 = 27;
                var21 = var23[var21];
                var21 = var22.bind(var3)(var21);
                var17.source = var21;
                var21 = '#FFF';
                var17.color = var21;
                var17 = var20.bind(var3)(var19, var17);
                _fun82313_ip = 543;
                continue _fun82313;
            case 485:
                var21 = _closure1_slot10;
                var23 = _closure1_slot1;
                var24 = _closure1_slot2;
                var19 = 23;
                var19 = var24[var19];
                var20 = var23.bind(var3)(var19);
                var19 = {};
                var22 = 24;
                var22 = var24[var22];
                var22 = var23.bind(var3)(var22);
                var19.source = var22;
                var22 = '#FFF';
                var19.color = var22;
                var17 = var21.bind(var3)(var20, var19);
            case 543:
                var12.children = var17;
                var12 = var16.bind(var3)(var15, var12);
                var7.children = var12;
                var9 = var10.bind(var3)(var9, var7);
                var7 = new Array(3);
                var7[0] = var9;
                var17 = _closure1_slot10;
                var15 = _closure1_slot0;
                var16 = _closure1_slot2;
                var9 = 13;
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
                var12 = 14;
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
    var _closure1_slot18 = var1;
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
    var10 = var5.Object;
    var7 = var10.freeze;
    var5 = {
        'REQUEST': 'REQUESTS',
        'SENT': 'SENT',
        'ERROR': 'ERROR',
        'TEEN_SCAN': 'TEEN_SCAN'
    };
    var5 = var7.bind(var10)(var5);
    var _closure1_slot12 = var5;
    var7 = 5;
    var10 = var9[var7];
    var12 = var8.bind(var0)(var10);
    var11 = var12.createStyles;
    var10 = {};
    var15 = {};
    var13 = 6;
    var16 = var9[var13];
    var16 = var14.bind(var0)(var16);
    var16 = var16.spacing;
    var16 = var16.PX_16;
    var15.marginTop = var16;
    var16 = var9[var13];
    var16 = var14.bind(var0)(var16);
    var16 = var16.spacing;
    var16 = var16.PX_16;
    var15.marginBottom = var16;
    var10.headerText = var15;
    var15 = {};
    var16 = var9[var13];
    var16 = var14.bind(var0)(var16);
    var16 = var16.spacing;
    var16 = var16.PX_24;
    var15.paddingHorizontal = var16;
    var10.body = var15;
    var15 = {};
    var16 = var9[var13];
    var16 = var14.bind(var0)(var16);
    var16 = var16.spacing;
    var16 = var16.PX_4;
    var15.marginBottom = var16;
    var10.noticeHeader = var15;
    var15 = {};
    var16 = var9[var13];
    var16 = var14.bind(var0)(var16);
    var16 = var16.spacing;
    var16 = var16.PX_4;
    var15.marginBottom = var16;
    var10.button = var15;
    var15 = {};
    var17 = {};
    var16 = '45deg';
    var17.rotate = var16;
    var16 = new Array(1);
    var16[0] = var17;
    var15.transform = var16;
    var16 = var9[var13];
    var16 = var14.bind(var0)(var16);
    var16 = var16.colors;
    var16 = var16.INTERACTIVE_TEXT_DEFAULT;
    var15.tintColor = var16;
    var10.icon = var15;
    var15 = 'center';
    var16 = {
        'display': 'flex',
        'alignItems': 'center',
        'justifyContent': 'center',
        'flex': 1
    };
    var10.spinner = var16;
    var16 = {
        'width': 165,
        'height': 119
    };
    var10.art = var16;
    var10 = var11.bind(var12)(var10);
    var _closure1_slot13 = var10;
    var10 = var9[var7];
    var12 = var8.bind(var0)(var10);
    var11 = var12.createStyles;
    var10 = {};
    var16 = {
        'display': 'flex',
        'alignItems': 'center'
    };
    var10.container = var16;
    var16 = {};
    var17 = var9[var13];
    var17 = var14.bind(var0)(var17);
    var17 = var17.spacing;
    var17 = var17.PX_8;
    var16.marginBottom = var17;
    var10.header = var16;
    var16 = {};
    var16.textAlign = var15;
    var10.description = var16;
    var16 = {
        'display': 'flex',
        'justifyContent': 'center',
        'alignItems': 'center',
        'height': 64,
        'width': 64
    };
    var17 = var9[var13];
    var17 = var14.bind(var0)(var17);
    var17 = var17.radii;
    var17 = var17.round;
    var16.borderRadius = var17;
    var17 = var9[var13];
    var17 = var14.bind(var0)(var17);
    var17 = var17.colors;
    var17 = var17.BACKGROUND_SURFACE_HIGH;
    var16.backgroundColor = var17;
    var17 = var9[var13];
    var17 = var14.bind(var0)(var17);
    var17 = var17.spacing;
    var17 = var17.PX_24;
    var16.marginBottom = var17;
    var10.ring = var16;
    var16 = {
        'display': 'flex',
        'justifyContent': 'center',
        'alignItems': 'center',
        'height': 48,
        'width': 48
    };
    var17 = var9[var13];
    var17 = var14.bind(var0)(var17);
    var17 = var17.radii;
    var17 = var17.round;
    var16.borderRadius = var17;
    var17 = var9[var13];
    var17 = var14.bind(var0)(var17);
    var17 = var17.colors;
    var17 = var17.STATUS_POSITIVE;
    var16.backgroundColor = var17;
    var10.iconContainer = var16;
    var16 = {
        'width': 24,
        'height': 24
    };
    var10.icon = var16;
    var10 = var11.bind(var12)(var10);
    var _closure1_slot14 = var10;
    var7 = var9[var7];
    var11 = var8.bind(var0)(var7);
    var10 = var11.createStyles;
    var7 = {};
    var12 = {
        'display': 'flex',
        'alignItems': 'center'
    };
    var7.container = var12;
    var12 = {
        'marginBottom': 8,
        'textAlign': 'center'
    };
    var7.header = var12;
    var12 = {};
    var12.textAlign = var15;
    var7.description = var12;
    var12 = {
        'display': 'flex',
        'justifyContent': 'center',
        'alignItems': 'center',
        'height': 64,
        'width': 64,
        'borderRadius': null,
        'backgroundColor': null,
        'marginBottom': 24
    };
    var15 = var9[var13];
    var15 = var14.bind(var0)(var15);
    var15 = var15.radii;
    var15 = var15.round;
    var12.borderRadius = var15;
    var15 = var9[var13];
    var15 = var14.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_SURFACE_HIGH;
    var12.backgroundColor = var15;
    var7.ring = var12;
    var12 = {
        'display': 'flex',
        'justifyContent': 'center',
        'alignItems': 'center',
        'height': 48,
        'width': 48
    };
    var15 = var9[var13];
    var15 = var14.bind(var0)(var15);
    var15 = var15.radii;
    var15 = var15.round;
    var12.borderRadius = var15;
    var15 = var9[var13];
    var15 = var14.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.STATUS_POSITIVE;
    var12.backgroundColor = var15;
    var7.iconContainer = var12;
    var12 = {};
    var15 = var9[var13];
    var15 = var14.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.STATUS_POSITIVE;
    var12.backgroundColor = var15;
    var7.positive = var12;
    var12 = {};
    var13 = var9[var13];
    var13 = var14.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_FEEDBACK_CRITICAL;
    var12.backgroundColor = var13;
    var7.negative = var12;
    var12 = {
        'width': 24,
        'height': 24
    };
    var7.icon = var12;
    var7 = var10.bind(var11)(var7);
    var _closure1_slot15 = var7;
    var7 = 30;
    var7 = var9[var7];
    var9 = var8.bind(var0)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/parent_tools/native/FamilyCenterModalRequest.tsx';
    var7 = var8.bind(var9)(var7);
    var6 = function arg0() {
        _fun82316: for (var _fun82316_ip = 0;;) switch (_fun82316_ip) {
            case 0:
                var1 = arg0;
                var8 = var1.userId;
                var _closure2_slot0 = var8;
                var9 = var1.linkCode;
                var _closure2_slot1 = var9;
                var2 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 25;
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
                        var0 = arg0;
                        var _closure4_slot0 = var0;
                        var0 = arg1;
                        var _closure4_slot1 = var0;
                        var0 = {};
                        var2 = _closure1_slot12;
                        var11 = var2.REQUEST;
                        var2 = {};
                        var6 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var5 = 28;
                        var4 = var9[var5];
                        var8 = undefined;
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
                            var3 = _closure1_slot10;
                            var2 = _closure1_slot16;
                            var1 = {};
                            var4 = _closure4_slot0;
                            var1.userId = var4;
                            var0 = _closure4_slot1;
                            var1.linkCode = var0;
                            var0 = undefined;
                            var0 = var3.bind(var0)(var2, var1);
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
                            var3 = _closure1_slot10;
                            var2 = _closure1_slot17;
                            var1 = undefined;
                            var0 = {};
                            var0 = var3.bind(var1)(var2, var0);
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
                            var2 = _closure1_slot18;
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
                            var2 = _closure1_slot18;
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
                    _fun82316_ip = 130;
                    continue _fun82316
                }
            case 122:
                var6 = var7.TEEN_SCAN;
                _fun82316_ip = 136;
                continue _fun82316;
            case 130:
                var6 = var7.REQUEST;
            case 136:
                var0.initialRouteName = var6;
                var0.screens = var5;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var4 = 14;
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1621, 4594, 33, 1297, 671, 1469, 4658, 10494, 6439, 6440, 10499, 3941, 1234, 1858, 10500, 10496, 6443, 4084, 4561, 632, 4886, 4086, 7465, 6510, 44, 5323, 4705, 7505, 2]);