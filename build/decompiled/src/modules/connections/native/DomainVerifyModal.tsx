// modules/connections/native/DomainVerifyModal.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        var1 = arg0;
        var1 = var1.onClose;
        var _closure2_slot0 = var1;
        var1 = _closure1_slot10;
        var3 = undefined;
        var18 = var1.bind(var3)();
        var12 = _closure1_slot0;
        var13 = _closure1_slot2;
        var1 = 7;
        var1 = var13[var1];
        var2 = var12.bind(var3)(var1);
        var1 = var2.useNavigation;
        var1 = var1.bind(var2)();
        var _closure2_slot1 = var1;
        var2 = _closure1_slot4;
        var1 = var2.useState;
        var11 = '';
        var2 = var1.bind(var2)(var11);
        var1 = _closure1_slot3;
        var7 = 2;
        var1 = var1.bind(var3)(var2, var7);
        var4 = 0;
        var10 = var1[var4];
        var _closure2_slot2 = var10;
        var2 = 1;
        var16 = var1[var2];
        var8 = _closure1_slot4;
        var6 = var8.useState;
        var1 = null;
        var6 = var6.bind(var8)(var1);
        var1 = _closure1_slot3;
        var1 = var1.bind(var3)(var6, var7);
        var17 = var1[var4];
        var1 = var1[var2];
        var _closure2_slot3 = var1;
        var8 = _closure1_slot4;
        var6 = var8.useState;
        var1 = false;
        var6 = var6.bind(var8)(var1);
        var1 = _closure1_slot3;
        var1 = var1.bind(var3)(var6, var7);
        var14 = var1[var4];
        var1 = var1[var2];
        var _closure2_slot4 = var1;
        var8 = function() {
            var3 = _closure2_slot4;
            var0 = undefined;
            var2 = true;
            var2 = var3.bind(var0)(var2);
            var3 = _closure2_slot3;
            var2 = null;
            var2 = var3.bind(var0)(var2);
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 8;
            var2 = var4[var2];
            var2 = var3.bind(var0)(var2);
            var4 = var2.HTTP;
            var3 = var4.post;
            var2 = {};
            var8 = _closure1_slot6;
            var7 = var8.CONNECTION;
            var6 = _closure1_slot7;
            var6 = var6.DOMAIN;
            var5 = _closure2_slot2;
            var5 = var7.bind(var8)(var6, var5);
            var2.url = var5;
            var5 = {};
            var2.body = var5;
            var5 = false;
            var2.rejectWithError = var5;
            var4 = var3.bind(var4)(var2);
            var3 = var4.then;
            var2 = function() { // Environment: var1
                var1 = _closure2_slot0;
                var0 = undefined;
                var1 = var1.bind(var0)();
                return var0;
            };
            var4 = var3.bind(var4)(var2);
            var3 = var4.catch;
            var2 = function(arg0) { // Environment: var1
                _fun51596: for (var _fun51596_ip = 0;;) switch (_fun51596_ip) {
                    case 0:
                        var5 = arg0;
                        var0 = var5.body;
                        var3 = null;
                        if (!(var3 != var0)) {
                            _fun51596_ip = 26;
                            continue _fun51596
                        }
                    case 14:
                        var0 = var0.proof;
                        if (var0) {
                            _fun51596_ip = 154;
                            continue _fun51596
                        }
                    case 26:
                        var2 = _closure2_slot3;
                        var4 = var5.body;
                        var6 = var3 == var4;
                        var1 = undefined;
                        var0 = undefined;
                        if (var6) {
                            _fun51596_ip = 114;
                            continue _fun51596
                        }
                    case 49:
                        var4 = var4.errors;
                        var6 = var3 == var4;
                        var0 = undefined;
                        if (var6) {
                            _fun51596_ip = 114;
                            continue _fun51596
                        }
                    case 64:
                        var4 = var4.domain;
                        var6 = var3 == var4;
                        var0 = undefined;
                        if (var6) {
                            _fun51596_ip = 114;
                            continue _fun51596
                        }
                    case 79:
                        var6 = var4._errors;
                        var4 = var3 == var6;
                        var0 = undefined;
                        if (var4) {
                            _fun51596_ip = 114;
                            continue _fun51596
                        }
                    case 94:
                        var4 = 0;
                        var4 = var6[var4];
                        var6 = var3 == var4;
                        var0 = undefined;
                        if (var6) {
                            _fun51596_ip = 114;
                            continue _fun51596
                        }
                    case 109:
                        var0 = var4.message;
                    case 114:
                        if (var0) {
                            _fun51596_ip = 139;
                            continue _fun51596
                        }
                    case 117:
                        var4 = var5.body;
                        var6 = var3 == var4;
                        var3 = undefined;
                        if (var6) {
                            _fun51596_ip = 136;
                            continue _fun51596
                        }
                    case 131:
                        var3 = var4.message;
                    case 136:
                        var0 = var3;
                    case 139:
                        if (var0) {
                            _fun51596_ip = 147;
                            continue _fun51596
                        }
                    case 142:
                        var0 = var5.message;
                    case 147:
                        var0 = var2.bind(var1)(var0);
                        _fun51596_ip = 212;
                        continue _fun51596;
                    case 154:
                        var3 = _closure2_slot1;
                        var2 = var3.push;
                        var0 = _closure1_slot11;
                        var1 = var0.PROOF_DNS;
                        var0 = {};
                        var5 = var5.body;
                        var5 = var5.proof;
                        var0.proof = var5;
                        var4 = _closure2_slot2;
                        var0.domain = var4;
                        var0 = var2.bind(var3)(var1, var0);
                    case 212:
                        var0 = undefined;
                        return var0;
                }
            };
            var3 = var3.bind(var4)(var2);
            var2 = var3.finally;
            var1 = function() { // Environment: var1
                var2 = _closure2_slot4;
                var0 = undefined;
                var1 = false;
                var1 = var2.bind(var0)(var1);
                return var0;
            };
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var2 = _closure1_slot9;
        var0 = 9;
        var0 = var13[var0];
        var0 = var12.bind(var3)(var0);
        var1 = var0.SafeAreaPaddingView;
        var0 = {};
        var19 = true;
        var0.bottom = var19;
        var4 = var18.container;
        var0.style = var4;
        var7 = _closure1_slot8;
        var4 = 10;
        var4 = var13[var4];
        var4 = var12.bind(var3)(var4);
        var6 = var4.Text;
        var4 = {
            'variant': 'text-md/normal',
            'color': 'text-default'
        };
        var9 = var18.description;
        var4.style = var9;
        var9 = 11;
        var15 = var13[var9];
        var15 = var12.bind(var3)(var15);
        var21 = var15.intl;
        var20 = var21.string;
        var15 = var13[var9];
        var15 = var12.bind(var3)(var15);
        var15 = var15.t;
        var15 = var15.NxPUqY;
        var15 = var20.bind(var21)(var15);
        var4.children = var15;
        var6 = var7.bind(var3)(var6, var4);
        var4 = new Array(3);
        var4[0] = var6;
        var15 = _closure1_slot8;
        var7 = _closure1_slot1;
        var6 = 12;
        var6 = var13[var6];
        var7 = var7.bind(var3)(var6);
        var6 = {};
        var6.autoFocus = var19;
        var18 = var18.input;
        var6.style = var18;
        var18 = var13[var9];
        var18 = var12.bind(var3)(var18);
        var20 = var18.intl;
        var19 = var20.string;
        var18 = var13[var9];
        var18 = var12.bind(var3)(var18);
        var18 = var18.t;
        var18 = var18["4jIAa+"];
        var18 = var19.bind(var20)(var18);
        var6.label = var18;
        var18 = 13;
        var18 = var13[var18];
        var18 = var12.bind(var3)(var18);
        var18 = var18.EXAMPLE_DOMAIN;
        var6.placeholder = var18;
        var6.error = var17;
        var17 = 'done';
        var6.returnKeyType = var17;
        var6.onChangeText = var16;
        var6.onSubmitEditing = var8;
        var6 = var15.bind(var3)(var7, var6);
        var4[1] = var6;
        var7 = _closure1_slot8;
        var5 = 14;
        var5 = var13[var5];
        var5 = var12.bind(var3)(var5);
        var6 = var5.Button;
        var5 = {};
        var5.loading = var14;
        var10 = var11 === var10;
        var5.disabled = var10;
        var10 = var13[var9];
        var10 = var12.bind(var3)(var10);
        var11 = var10.intl;
        var10 = var11.string;
        var9 = var13[var9];
        var9 = var12.bind(var3)(var9);
        var9 = var9.t;
        var9 = var9.PDTjLN;
        var9 = var10.bind(var11)(var9);
        var5.text = var9;
        var5.onPress = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[2] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot12 = var0;
    var0 = function arg0() {
        _fun51598: for (var _fun51598_ip = 0;;) switch (_fun51598_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.onClose;
                var _closure2_slot0 = var1;
                var26 = var0.domain;
                var _closure2_slot1 = var26;
                var20 = var0.proof;
                var _closure2_slot2 = var20;
                var0 = _closure1_slot10;
                var3 = undefined;
                var10 = var0.bind(var3)();
                var17 = _closure1_slot0;
                var15 = _closure1_slot2;
                var0 = 7;
                var0 = var15[var0];
                var1 = var17.bind(var3)(var0);
                var0 = var1.useNavigation;
                var0 = var0.bind(var1)();
                var _closure2_slot3 = var0;
                var1 = _closure1_slot4;
                var0 = var1.useState;
                var5 = null;
                var1 = var0.bind(var1)(var5);
                var0 = _closure1_slot3;
                var6 = 2;
                var0 = var0.bind(var3)(var1, var6);
                var2 = 0;
                var12 = var0[var2];
                var1 = 1;
                var0 = var0[var1];
                var _closure2_slot4 = var0;
                var7 = _closure1_slot4;
                var4 = var7.useState;
                var0 = false;
                var4 = var4.bind(var7)(var0);
                var0 = _closure1_slot3;
                var0 = var0.bind(var3)(var4, var6);
                var18 = var0[var2];
                var0 = var0[var1];
                var _closure2_slot5 = var0;
                var2 = _closure1_slot9;
                var0 = 9;
                var0 = var15[var0];
                var0 = var17.bind(var3)(var0);
                var1 = var0.SafeAreaPaddingView;
                var0 = {};
                var4 = true;
                var0.bottom = var4;
                var4 = var10.container;
                var0.style = var4;
                var7 = _closure1_slot8;
                var13 = 10;
                var4 = var15[var13];
                var4 = var17.bind(var3)(var4);
                var6 = var4.Text;
                var4 = {};
                var23 = 'text-md/normal';
                var4.variant = var23;
                var16 = 11;
                var8 = var15[var16];
                var8 = var17.bind(var3)(var8);
                var19 = var8.intl;
                var14 = var19.string;
                var8 = var15[var16];
                var8 = var17.bind(var3)(var8);
                var8 = var8.t;
                var8 = var8.cSURbq;
                var8 = var14.bind(var19)(var8);
                var4.children = var8;
                var6 = var7.bind(var3)(var6, var4);
                var4 = new Array(5);
                var4[0] = var6;
                var8 = _closure1_slot9;
                var7 = _closure1_slot5;
                var6 = {};
                var14 = var10.dns;
                var6.style = var14;
                var21 = _closure1_slot8;
                var14 = var15[var13];
                var14 = var17.bind(var3)(var14);
                var19 = var14.Text;
                var14 = {};
                var14.variant = var23;
                var22 = var15[var16];
                var22 = var17.bind(var3)(var22);
                var25 = var22.intl;
                var24 = var25.string;
                var22 = var15[var16];
                var22 = var17.bind(var3)(var22);
                var22 = var22.t;
                var22 = var22.GL3q7k;
                var22 = var24.bind(var25)(var22);
                var14.children = var22;
                var19 = var21.bind(var3)(var19, var14);
                var14 = new Array(6);
                var14[0] = var19;
                var22 = _closure1_slot8;
                var19 = var15[var13];
                var19 = var17.bind(var3)(var19);
                var21 = var19.Text;
                var19 = {
                    'variant': 'text-md/normal',
                    'selectable': true
                };
                var24 = var10.code;
                var19.style = var24;
                var24 = 13;
                var24 = var15[var24];
                var25 = var17.bind(var3)(var24);
                var24 = var25.getDnsName;
                var24 = var24.bind(var25)(var26);
                var19.children = var24;
                var19 = var22.bind(var3)(var21, var19);
                var14[1] = var19;
                var22 = _closure1_slot8;
                var19 = var15[var13];
                var19 = var17.bind(var3)(var19);
                var21 = var19.Text;
                var19 = {};
                var19.variant = var23;
                var24 = var15[var16];
                var24 = var17.bind(var3)(var24);
                var26 = var24.intl;
                var25 = var26.string;
                var24 = var15[var16];
                var24 = var17.bind(var3)(var24);
                var24 = var24.t;
                var24 = var24.Ccmixu;
                var24 = var25.bind(var26)(var24);
                var19.children = var24;
                var19 = var22.bind(var3)(var21, var19);
                var14[2] = var19;
                var22 = _closure1_slot8;
                var19 = var15[var13];
                var19 = var17.bind(var3)(var19);
                var21 = var19.Text;
                var19 = {
                    'variant': 'text-md/normal',
                    'selectable': true,
                    'style': null,
                    'children': 'TXT'
                };
                var24 = var10.code;
                var19.style = var24;
                var19 = var22.bind(var3)(var21, var19);
                var14[3] = var19;
                var22 = _closure1_slot8;
                var19 = var15[var13];
                var19 = var17.bind(var3)(var19);
                var21 = var19.Text;
                var19 = {};
                var19.variant = var23;
                var23 = var15[var16];
                var23 = var17.bind(var3)(var23);
                var25 = var23.intl;
                var24 = var25.string;
                var23 = var15[var16];
                var23 = var17.bind(var3)(var23);
                var23 = var23.t;
                var23 = var23.PVLriT;
                var23 = var24.bind(var25)(var23);
                var19.children = var23;
                var19 = var22.bind(var3)(var21, var19);
                var14[4] = var19;
                var19 = _closure1_slot8;
                var15 = var15[var13];
                var15 = var17.bind(var3)(var15);
                var17 = var15.Text;
                var15 = {
                    'variant': 'text-md/normal',
                    'selectable': true
                };
                var21 = var10.code;
                var15.style = var21;
                var15.children = var20;
                var15 = var19.bind(var3)(var17, var15);
                var14[5] = var15;
                var6.children = var14;
                var6 = var8.bind(var3)(var7, var6);
                var4[1] = var6;
                var5 = var5 != var12;
                if (!var5) {
                    _fun51598_ip = 843;
                    continue _fun51598
                }
            case 784:
                var8 = _closure1_slot8;
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var6 = var6[var13];
                var6 = var7.bind(var3)(var6);
                var7 = var6.Text;
                var6 = {
                    'variant': 'text-md/normal',
                    'color': 'text-feedback-critical'
                };
                var13 = var10.error;
                var6.style = var13;
                var6.children = var12;
                var5 = var8.bind(var3)(var7, var6);
            case 843:
                var4[2] = var5;
                var7 = _closure1_slot8;
                var6 = _closure1_slot5;
                var5 = {};
                var8 = var10.button;
                var5.style = var8;
                var17 = _closure1_slot8;
                var15 = _closure1_slot0;
                var12 = _closure1_slot2;
                var8 = 14;
                var13 = var12[var8];
                var13 = var15.bind(var3)(var13);
                var14 = var13.Button;
                var13 = {};
                var13.loading = var18;
                var18 = var12[var16];
                var18 = var15.bind(var3)(var18);
                var20 = var18.intl;
                var19 = var20.string;
                var18 = var12[var16];
                var18 = var15.bind(var3)(var18);
                var18 = var18.t;
                var18 = var18["13ofGu"];
                var18 = var19.bind(var20)(var18);
                var13.text = var18;
                var18 = function() {
                    var3 = _closure2_slot5;
                    var0 = undefined;
                    var2 = true;
                    var2 = var3.bind(var0)(var2);
                    var3 = _closure2_slot4;
                    var2 = null;
                    var2 = var3.bind(var0)(var2);
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 8;
                    var2 = var4[var2];
                    var2 = var3.bind(var0)(var2);
                    var4 = var2.HTTP;
                    var3 = var4.post;
                    var2 = {};
                    var8 = _closure1_slot6;
                    var7 = var8.CONNECTION;
                    var6 = _closure1_slot7;
                    var6 = var6.DOMAIN;
                    var5 = _closure2_slot1;
                    var5 = var7.bind(var8)(var6, var5);
                    var2.url = var5;
                    var5 = {};
                    var2.body = var5;
                    var5 = false;
                    var2.rejectWithError = var5;
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.then;
                    var2 = function() { // Environment: var1
                        var1 = _closure2_slot0;
                        var0 = undefined;
                        var1 = var1.bind(var0)();
                        return var0;
                    };
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.catch;
                    var2 = function(arg0) { // Environment: var1
                        _fun51601: for (var _fun51601_ip = 0;;) switch (_fun51601_ip) {
                            case 0:
                                var3 = arg0;
                                var2 = _closure2_slot4;
                                var5 = var3.body;
                                var4 = null;
                                var6 = var4 == var5;
                                var0 = undefined;
                                var1 = undefined;
                                if (var6) {
                                    _fun51601_ip = 93;
                                    continue _fun51601
                                }
                            case 28:
                                var5 = var5.errors;
                                var6 = var4 == var5;
                                var1 = undefined;
                                if (var6) {
                                    _fun51601_ip = 93;
                                    continue _fun51601
                                }
                            case 43:
                                var5 = var5.domain;
                                var6 = var4 == var5;
                                var1 = undefined;
                                if (var6) {
                                    _fun51601_ip = 93;
                                    continue _fun51601
                                }
                            case 58:
                                var6 = var5._errors;
                                var5 = var4 == var6;
                                var1 = undefined;
                                if (var5) {
                                    _fun51601_ip = 93;
                                    continue _fun51601
                                }
                            case 73:
                                var5 = 0;
                                var5 = var6[var5];
                                var6 = var4 == var5;
                                var1 = undefined;
                                if (var6) {
                                    _fun51601_ip = 93;
                                    continue _fun51601
                                }
                            case 88:
                                var1 = var5.message;
                            case 93:
                                if (var1) {
                                    _fun51601_ip = 118;
                                    continue _fun51601
                                }
                            case 96:
                                var5 = var3.body;
                                var6 = var4 == var5;
                                var4 = undefined;
                                if (var6) {
                                    _fun51601_ip = 115;
                                    continue _fun51601
                                }
                            case 110:
                                var4 = var5.message;
                            case 115:
                                var1 = var4;
                            case 118:
                                if (var1) {
                                    _fun51601_ip = 126;
                                    continue _fun51601
                                }
                            case 121:
                                var1 = var3.message;
                            case 126:
                                var1 = var2.bind(var0)(var1);
                                return var0;
                        }
                    };
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.finally;
                    var1 = function() { // Environment: var1
                        var2 = _closure2_slot5;
                        var0 = undefined;
                        var1 = false;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var13.onPress = var18;
                var13 = var17.bind(var3)(var14, var13);
                var5.children = var13;
                var5 = var7.bind(var3)(var6, var5);
                var4[3] = var5;
                var7 = _closure1_slot8;
                var6 = _closure1_slot5;
                var5 = {};
                var10 = var10.button;
                var5.style = var10;
                var10 = _closure1_slot8;
                var8 = var12[var8];
                var8 = var15.bind(var3)(var8);
                var9 = var8.Button;
                var8 = {};
                var13 = 'secondary';
                var8.variant = var13;
                var13 = var12[var16];
                var13 = var15.bind(var3)(var13);
                var14 = var13.intl;
                var13 = var14.string;
                var12 = var12[var16];
                var12 = var15.bind(var3)(var12);
                var12 = var12.t;
                var12 = var12.CkfdNx;
                var12 = var13.bind(var14)(var12);
                var8.text = var12;
                var11 = function() {
                    var3 = _closure2_slot3;
                    var2 = var3.push;
                    var0 = _closure1_slot11;
                    var1 = var0.PROOF_HTTP;
                    var0 = {};
                    var5 = _closure2_slot2;
                    var0.proof = var5;
                    var4 = _closure2_slot1;
                    var0.domain = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    var0 = undefined;
                    return var0;
                };
                var8.onPress = var11;
                var8 = var10.bind(var3)(var9, var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[4] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var0 = function arg0() {
        _fun51604: for (var _fun51604_ip = 0;;) switch (_fun51604_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.onClose;
                var _closure2_slot0 = var1;
                var26 = var0.domain;
                var _closure2_slot1 = var26;
                var20 = var0.proof;
                var0 = _closure1_slot10;
                var3 = undefined;
                var10 = var0.bind(var3)();
                var17 = _closure1_slot0;
                var15 = _closure1_slot2;
                var0 = 7;
                var0 = var15[var0];
                var1 = var17.bind(var3)(var0);
                var0 = var1.useNavigation;
                var0 = var0.bind(var1)();
                var _closure2_slot2 = var0;
                var1 = _closure1_slot4;
                var0 = var1.useState;
                var5 = null;
                var1 = var0.bind(var1)(var5);
                var0 = _closure1_slot3;
                var6 = 2;
                var0 = var0.bind(var3)(var1, var6);
                var2 = 0;
                var12 = var0[var2];
                var1 = 1;
                var0 = var0[var1];
                var _closure2_slot3 = var0;
                var7 = _closure1_slot4;
                var4 = var7.useState;
                var0 = false;
                var4 = var4.bind(var7)(var0);
                var0 = _closure1_slot3;
                var0 = var0.bind(var3)(var4, var6);
                var18 = var0[var2];
                var0 = var0[var1];
                var _closure2_slot4 = var0;
                var2 = _closure1_slot9;
                var0 = 9;
                var0 = var15[var0];
                var0 = var17.bind(var3)(var0);
                var1 = var0.SafeAreaPaddingView;
                var0 = {};
                var4 = true;
                var0.bottom = var4;
                var4 = var10.container;
                var0.style = var4;
                var7 = _closure1_slot8;
                var13 = 10;
                var4 = var15[var13];
                var4 = var17.bind(var3)(var4);
                var6 = var4.Text;
                var4 = {};
                var23 = 'text-md/normal';
                var4.variant = var23;
                var16 = 11;
                var8 = var15[var16];
                var8 = var17.bind(var3)(var8);
                var19 = var8.intl;
                var14 = var19.string;
                var8 = var15[var16];
                var8 = var17.bind(var3)(var8);
                var8 = var8.t;
                var8 = var8.p4ql7y;
                var8 = var14.bind(var19)(var8);
                var4.children = var8;
                var6 = var7.bind(var3)(var6, var4);
                var4 = new Array(5);
                var4[0] = var6;
                var8 = _closure1_slot9;
                var7 = _closure1_slot5;
                var6 = {};
                var14 = var10.dns;
                var6.style = var14;
                var21 = _closure1_slot8;
                var14 = var15[var13];
                var14 = var17.bind(var3)(var14);
                var19 = var14.Text;
                var14 = {};
                var14.variant = var23;
                var22 = var15[var16];
                var22 = var17.bind(var3)(var22);
                var25 = var22.intl;
                var24 = var25.string;
                var22 = var15[var16];
                var22 = var17.bind(var3)(var22);
                var22 = var22.t;
                var22 = var22.GL3q7k;
                var22 = var24.bind(var25)(var22);
                var14.children = var22;
                var19 = var21.bind(var3)(var19, var14);
                var14 = new Array(4);
                var14[0] = var19;
                var22 = _closure1_slot8;
                var19 = var15[var13];
                var19 = var17.bind(var3)(var19);
                var21 = var19.Text;
                var19 = {
                    'variant': 'text-md/normal',
                    'selectable': true
                };
                var24 = var10.code;
                var19.style = var24;
                var24 = 13;
                var24 = var15[var24];
                var25 = var17.bind(var3)(var24);
                var24 = var25.getHttpName;
                var24 = var24.bind(var25)(var26);
                var19.children = var24;
                var19 = var22.bind(var3)(var21, var19);
                var14[1] = var19;
                var22 = _closure1_slot8;
                var19 = var15[var13];
                var19 = var17.bind(var3)(var19);
                var21 = var19.Text;
                var19 = {};
                var19.variant = var23;
                var23 = var15[var16];
                var23 = var17.bind(var3)(var23);
                var25 = var23.intl;
                var24 = var25.string;
                var23 = var15[var16];
                var23 = var17.bind(var3)(var23);
                var23 = var23.t;
                var23 = var23.PVLriT;
                var23 = var24.bind(var25)(var23);
                var19.children = var23;
                var19 = var22.bind(var3)(var21, var19);
                var14[2] = var19;
                var19 = _closure1_slot8;
                var15 = var15[var13];
                var15 = var17.bind(var3)(var15);
                var17 = var15.Text;
                var15 = {
                    'variant': 'text-md/normal',
                    'selectable': true
                };
                var21 = var10.code;
                var15.style = var21;
                var15.children = var20;
                var15 = var19.bind(var3)(var17, var15);
                var14[3] = var15;
                var6.children = var14;
                var6 = var8.bind(var3)(var7, var6);
                var4[1] = var6;
                var5 = var5 != var12;
                if (!var5) {
                    _fun51604_ip = 702;
                    continue _fun51604
                }
            case 643:
                var8 = _closure1_slot8;
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var6 = var6[var13];
                var6 = var7.bind(var3)(var6);
                var7 = var6.Text;
                var6 = {
                    'variant': 'text-md/normal',
                    'color': 'text-feedback-critical'
                };
                var13 = var10.error;
                var6.style = var13;
                var6.children = var12;
                var5 = var8.bind(var3)(var7, var6);
            case 702:
                var4[2] = var5;
                var7 = _closure1_slot8;
                var6 = _closure1_slot5;
                var5 = {};
                var8 = var10.button;
                var5.style = var8;
                var17 = _closure1_slot8;
                var15 = _closure1_slot0;
                var12 = _closure1_slot2;
                var8 = 14;
                var13 = var12[var8];
                var13 = var15.bind(var3)(var13);
                var14 = var13.Button;
                var13 = {};
                var13.loading = var18;
                var18 = var12[var16];
                var18 = var15.bind(var3)(var18);
                var20 = var18.intl;
                var19 = var20.string;
                var18 = var12[var16];
                var18 = var15.bind(var3)(var18);
                var18 = var18.t;
                var18 = var18["13ofGu"];
                var18 = var19.bind(var20)(var18);
                var13.text = var18;
                var18 = function() {
                    var3 = _closure2_slot4;
                    var0 = undefined;
                    var2 = true;
                    var2 = var3.bind(var0)(var2);
                    var3 = _closure2_slot3;
                    var2 = null;
                    var2 = var3.bind(var0)(var2);
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 8;
                    var2 = var4[var2];
                    var2 = var3.bind(var0)(var2);
                    var4 = var2.HTTP;
                    var3 = var4.post;
                    var2 = {};
                    var8 = _closure1_slot6;
                    var7 = var8.CONNECTION;
                    var6 = _closure1_slot7;
                    var6 = var6.DOMAIN;
                    var5 = _closure2_slot1;
                    var5 = var7.bind(var8)(var6, var5);
                    var2.url = var5;
                    var5 = {};
                    var2.body = var5;
                    var5 = false;
                    var2.rejectWithError = var5;
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.then;
                    var2 = function() { // Environment: var1
                        var1 = _closure2_slot0;
                        var0 = undefined;
                        var1 = var1.bind(var0)();
                        return var0;
                    };
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.catch;
                    var2 = function(arg0) { // Environment: var1
                        _fun51607: for (var _fun51607_ip = 0;;) switch (_fun51607_ip) {
                            case 0:
                                var3 = arg0;
                                var2 = _closure2_slot3;
                                var5 = var3.body;
                                var4 = null;
                                var6 = var4 == var5;
                                var0 = undefined;
                                var1 = undefined;
                                if (var6) {
                                    _fun51607_ip = 93;
                                    continue _fun51607
                                }
                            case 28:
                                var5 = var5.errors;
                                var6 = var4 == var5;
                                var1 = undefined;
                                if (var6) {
                                    _fun51607_ip = 93;
                                    continue _fun51607
                                }
                            case 43:
                                var5 = var5.domain;
                                var6 = var4 == var5;
                                var1 = undefined;
                                if (var6) {
                                    _fun51607_ip = 93;
                                    continue _fun51607
                                }
                            case 58:
                                var6 = var5._errors;
                                var5 = var4 == var6;
                                var1 = undefined;
                                if (var5) {
                                    _fun51607_ip = 93;
                                    continue _fun51607
                                }
                            case 73:
                                var5 = 0;
                                var5 = var6[var5];
                                var6 = var4 == var5;
                                var1 = undefined;
                                if (var6) {
                                    _fun51607_ip = 93;
                                    continue _fun51607
                                }
                            case 88:
                                var1 = var5.message;
                            case 93:
                                if (var1) {
                                    _fun51607_ip = 118;
                                    continue _fun51607
                                }
                            case 96:
                                var5 = var3.body;
                                var6 = var4 == var5;
                                var4 = undefined;
                                if (var6) {
                                    _fun51607_ip = 115;
                                    continue _fun51607
                                }
                            case 110:
                                var4 = var5.message;
                            case 115:
                                var1 = var4;
                            case 118:
                                if (var1) {
                                    _fun51607_ip = 126;
                                    continue _fun51607
                                }
                            case 121:
                                var1 = var3.message;
                            case 126:
                                var1 = var2.bind(var0)(var1);
                                return var0;
                        }
                    };
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.finally;
                    var1 = function() { // Environment: var1
                        var2 = _closure2_slot4;
                        var0 = undefined;
                        var1 = false;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var13.onPress = var18;
                var13 = var17.bind(var3)(var14, var13);
                var5.children = var13;
                var5 = var7.bind(var3)(var6, var5);
                var4[3] = var5;
                var7 = _closure1_slot8;
                var6 = _closure1_slot5;
                var5 = {};
                var10 = var10.button;
                var5.style = var10;
                var10 = _closure1_slot8;
                var8 = var12[var8];
                var8 = var15.bind(var3)(var8);
                var9 = var8.Button;
                var8 = {};
                var13 = 'secondary';
                var8.variant = var13;
                var13 = var12[var16];
                var13 = var15.bind(var3)(var13);
                var14 = var13.intl;
                var13 = var14.string;
                var12 = var12[var16];
                var12 = var15.bind(var3)(var12);
                var12 = var12.t;
                var12 = var12.RhJMVQ;
                var12 = var13.bind(var14)(var12);
                var8.text = var12;
                var11 = function() {
                    var1 = _closure2_slot2;
                    var0 = var1.pop;
                    var0 = var0.bind(var1)();
                    var0 = undefined;
                    return var0;
                };
                var8.onPress = var11;
                var8 = var10.bind(var3)(var9, var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[4] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot14 = var0;
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
    var3 = var11.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.Endpoints;
    var _closure1_slot6 = var6;
    var3 = var3.PlatformTypes;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot8 = var6;
    var3 = var3.jsxs;
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 16;
    var8.padding = var9;
    var3.container = var8;
    var8 = {};
    var10 = 'center';
    var8.textAlign = var10;
    var3.description = var8;
    var8 = {
        'paddingHorizontal': 0,
        'paddingVertical': 0,
        'marginVertical': 16
    };
    var3.input = var8;
    var8 = {};
    var10 = 6;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BASE_LOWEST;
    var8.backgroundColor = var12;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.radii;
    var10 = var10.xs;
    var8.borderRadius = var10;
    var10 = 8;
    var8.padding = var10;
    var8.marginTop = var9;
    var3.dns = var8;
    var8 = {};
    var8.marginTop = var9;
    var3.error = var8;
    var8 = {
        'fontFamily': 'monospace',
        'marginBottom': 4
    };
    var3.code = var8;
    var8 = {};
    var8.marginTop = var9;
    var3.button = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot10 = var3;
    var3 = {};
    var6 = 'DOMAIN';
    var3.DOMAIN = var6;
    var6 = 'PROOF_DNS';
    var3.PROOF_DNS = var6;
    var6 = 'PROOF_HTTP';
    var3.PROOF_HTTP = var6;
    var _closure1_slot11 = var3;
    var3 = 18;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/connections/native/DomainVerifyModal.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun51610: for (var _fun51610_ip = 0;;) switch (_fun51610_ip) {
            case 0:
                var1 = arg0;
                var0 = null;
                if (!(var1 != var0)) {
                    _fun51610_ip = 448;
                    continue _fun51610
                }
            case 14:
                var12 = function() {
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 15;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var0 = var1.pop;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var _closure2_slot0 = var12;
                var7 = {};
                var0 = _closure1_slot11;
                var2 = var0.DOMAIN;
                var0 = {};
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var5 = 11;
                var10 = var9[var5];
                var4 = undefined;
                var10 = var8.bind(var4)(var10);
                var13 = var10.intl;
                var11 = var13.string;
                var10 = var9[var5];
                var10 = var8.bind(var4)(var10);
                var10 = var10.t;
                var10 = var10["7lo8+e"];
                var10 = var11.bind(var13)(var10);
                var0.headerTitle = var10;
                var10 = 16;
                var11 = var9[var10];
                var13 = var8.bind(var4)(var11);
                var11 = var13.getHeaderBackButton;
                var11 = var11.bind(var13)(var12);
                var0.headerLeft = var11;
                var11 = function() {
                    var3 = _closure1_slot8;
                    var2 = _closure1_slot12;
                    var1 = {};
                    var0 = _closure2_slot0;
                    var1.onClose = var0;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var0.render = var11;
                var7[var2] = var0;
                var0 = _closure1_slot11;
                var2 = var0.PROOF_DNS;
                var0 = {};
                var11 = var9[var5];
                var11 = var8.bind(var4)(var11);
                var14 = var11.intl;
                var13 = var14.string;
                var11 = var9[var5];
                var11 = var8.bind(var4)(var11);
                var11 = var11.t;
                var11 = var11["7lo8+e"];
                var11 = var13.bind(var14)(var11);
                var0.headerTitle = var11;
                var11 = var9[var10];
                var13 = var8.bind(var4)(var11);
                var11 = var13.getHeaderBackButton;
                var11 = var11.bind(var13)(var12);
                var0.headerLeft = var11;
                var11 = function arg0() {
                    var0 = arg0;
                    var4 = var0.domain;
                    var0 = var0.proof;
                    var3 = _closure1_slot8;
                    var2 = _closure1_slot13;
                    var1 = {};
                    var1.domain = var4;
                    var1.proof = var0;
                    var0 = _closure2_slot0;
                    var1.onClose = var0;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var0.render = var11;
                var7[var2] = var0;
                var0 = _closure1_slot11;
                var2 = var0.PROOF_HTTP;
                var0 = {};
                var11 = var9[var5];
                var11 = var8.bind(var4)(var11);
                var14 = var11.intl;
                var13 = var14.string;
                var11 = var9[var5];
                var11 = var8.bind(var4)(var11);
                var11 = var11.t;
                var11 = var11["7lo8+e"];
                var11 = var13.bind(var14)(var11);
                var0.headerTitle = var11;
                var10 = var9[var10];
                var11 = var8.bind(var4)(var10);
                var10 = var11.getHeaderBackButton;
                var10 = var10.bind(var11)(var12);
                var0.headerLeft = var10;
                var3 = function arg0() {
                    var0 = arg0;
                    var4 = var0.domain;
                    var0 = var0.proof;
                    var3 = _closure1_slot8;
                    var2 = _closure1_slot14;
                    var1 = {};
                    var1.domain = var4;
                    var1.proof = var0;
                    var0 = _closure2_slot0;
                    var1.onClose = var0;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var0.render = var3;
                var7[var2] = var0;
                var3 = _closure1_slot8;
                var0 = 17;
                var0 = var9[var0];
                var0 = var8.bind(var4)(var0);
                var2 = var0.Navigator;
                var0 = {};
                var0.screens = var7;
                var6 = _closure1_slot11;
                var6 = var6.DOMAIN;
                var0.initialRouteName = var6;
                var6 = var9[var5];
                var6 = var8.bind(var4)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var5 = var9[var5];
                var5 = var8.bind(var4)(var5);
                var5 = var5.t;
                var5 = var5["13/7kX"];
                var5 = var6.bind(var7)(var5);
                var0.headerBackTitle = var5;
                var0 = var3.bind(var4)(var2, var0);
                return var0;
            case 448:
                var15 = "Cannot destructure 'undefined' or 'null'.";
                var16 = var1;
                var0 = throwTypeError(var16, var15);
                var0 = undefined;
                throw var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 660, 33, 1297, 671, 1469, 507, 4729, 3932, 1234, 5877, 5882, 4075, 4557, 4700, 5781, 2]);