// modules/mfa/native/MFAModal.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var3 = function arg0() {
        var1 = arg0;
        var7 = var1.mfaChallenge;
        var _closure2_slot0 = var7;
        var10 = var1.finish;
        var _closure2_slot1 = var10;
        var9 = var1.cancel;
        var _closure2_slot2 = var9;
        var2 = var1.handleOnClose;
        var _closure2_slot3 = var2;
        var8 = _closure1_slot4;
        var6 = var8.useCallback;
        var1 = function() { // Environment: var0
            var3 = _closure1_slot3;
            var2 = undefined;
            var1 = function*(arg0) { // Environment: var0
                var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                    _fun86659: for (var _fun86659_ip = 0;;) switch (_fun86659_ip) {
                        case 0:
                            StartGenerator();
                            var1 = arg0;
                            ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                            if (var2) {
                                _fun86659_ip = 128;
                                continue _fun86659
                            }
                        case 10:
                            var7 = var1.mfaType;
                            var6 = var1.data;
                            var3 = undefined;
                            SaveGenerator(address = 27);
                        case 25:
                            return var3;
                        case 27:
                            ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                            if (var2) {
                                _fun86659_ip = 125;
                                continue _fun86659
                            }
                        case 33:
                            var4 = _closure2_slot1;
                            var2 = {};
                            var2.mfaType = var7;
                            var2.data = var6;
                            var5 = _closure2_slot0;
                            var5 = var5.ticket;
                            var2.ticket = var5;
                            var2 = var4.bind(var3)(var2);
                            SaveGenerator(address = 75);
                        case 73:
                            return var2;
                        case 75:
                            ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                            if (var4) {
                                _fun86659_ip = 122;
                                continue _fun86659
                            }
                        case 81:
                            var6 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var5 = 4;
                            var5 = var7[var5];
                            var6 = var6.bind(var3)(var5);
                            var5 = var6.popWithKey;
                            var4 = _closure1_slot7;
                            var4 = var5.bind(var6)(var4);
                            return var3;
                        case 122:
                            return var2;
                        case 125:
                            return var1;
                        case 128:
                            return var0;
                    }
                };
                var1 = var0.next;
                var1 = var1.bind(var0)();
                return var0;
            };
            var1 = var3.bind(var2)(var1);
            var _closure3_slot0 = var1;
            var0 = function() { // Environment: var0
                var0 = undefined;
                var3 = _closure3_slot0;
                var2 = var3.apply;
                var0 = arguments;
                var1 = var0;
                var0 = this;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            return var0;
        };
        var3 = undefined;
        var5 = var1.bind(var3)();
        var1 = new Array(2);
        var1[0] = var10;
        var10 = var7.ticket;
        var1[1] = var10;
        var1 = var6.bind(var8)(var5, var1);
        var _closure2_slot4 = var1;
        var8 = _closure1_slot4;
        var6 = var8.useCallback;
        var5 = new Array(2);
        var5[0] = var9;
        var5[1] = var2;
        var2 = function() { // Environment: var0
            _fun86661: for (var _fun86661_ip = 0;;) switch (_fun86661_ip) {
                case 0:
                    var0 = _closure2_slot3;
                    var4 = null;
                    if (!(var4 != var0)) {
                        _fun86661_ip = 28;
                        continue _fun86661
                    }
                case 13:
                    var2 = _closure2_slot3;
                    var0 = undefined;
                    var0 = var2.bind(var0)();
                    _fun86661_ip = 168;
                    continue _fun86661;
                case 28:
                    var5 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 4;
                    var3 = var3[var2];
                    var2 = undefined;
                    var6 = var5.bind(var2)(var3);
                    var5 = var6.popWithKey;
                    var3 = _closure1_slot7;
                    var3 = var5.bind(var6)(var3);
                    var3 = _closure2_slot2;
                    if (!(var4 != var3)) {
                        _fun86661_ip = 168;
                        continue _fun86661
                    }
                case 76:
                    var1 = _closure2_slot2;
                    var3 = global;
                    var4 = var3.Error;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var0 = 5;
                    var3 = var7[var0];
                    var3 = var6.bind(var2)(var3);
                    var5 = var3.intl;
                    var3 = var5.string;
                    var0 = var7[var0];
                    var0 = var6.bind(var2)(var0);
                    var0 = var0.t;
                    var0 = var0.N2yb9a;
                    var8 = var3.bind(var5)(var0);
                    var3 = var4.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var4
                        }
                    });
                    var9 = var3;
                    var0 = new var9[var4](var8, var7);
                    var0 = var0 instanceof Object ? var0 : var3;
                    var0 = var1.bind(var2)(var0);
                case 168:
                    var0 = undefined;
                    return var0;
            }
        };
        var8 = var6.bind(var8)(var2, var5);
        var _closure2_slot5 = var8;
        var6 = _closure1_slot4;
        var5 = var6.useMemo;
        var2 = new Array(2);
        var2[0] = var7;
        var2[1] = var1;
        var1 = function() { // Environment: var0
            _fun86662: for (var _fun86662_ip = 0;;) switch (_fun86662_ip) {
                case 0:
                    var2 = {};
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 6;
                    var0 = var1[var0];
                    var1 = undefined;
                    var0 = var3.bind(var1)(var0);
                    var0 = var0.MfaScreens;
                    var0 = var0.SELECT;
                    var2.name = var0;
                    var4 = {};
                    var0 = _closure2_slot0;
                    var4.mfaChallenge = var0;
                    var5 = _closure2_slot4;
                    var4.finish = var5;
                    var2.params = var4;
                    var4 = var0.methods;
                    var0 = 0;
                    var4 = var4[var0];
                    var0 = null;
                    var5 = var0 == var4;
                    var0 = undefined;
                    if (var5) {
                        _fun86662_ip = 99;
                        continue _fun86662
                    }
                case 94:
                    var0 = var4.type;
                case 99:
                    if (!(var1 !== var0)) {
                        _fun86662_ip = 144;
                        continue _fun86662
                    }
                case 103:
                    var1 = {};
                    var1.name = var0;
                    var0 = {};
                    var4 = _closure2_slot0;
                    var0.mfaChallenge = var4;
                    var3 = _closure2_slot4;
                    var0.finish = var3;
                    var1.params = var0;
                    var0 = new Array(1);
                    var0[0] = var1;
                    _fun86662_ip = 155;
                    continue _fun86662;
                case 144:
                    var1 = new Array(1);
                    var1[0] = var2;
                    var0 = var1;
                case 155:
                    return var0;
            }
        };
        var5 = var5.bind(var6)(var1, var2);
        var6 = _closure1_slot4;
        var2 = var6.useMemo;
        var1 = new Array(2);
        var1[0] = var8;
        var7 = var7.methods;
        var1[1] = var7;
        var0 = function() { // Environment: var0
            _fun86663: for (var _fun86663_ip = 0;;) switch (_fun86663_ip) {
                case 0:
                    var5 = function() {
                        var3 = _closure1_slot6;
                        var9 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var0 = 7;
                        var0 = var6[var0];
                        var2 = undefined;
                        var0 = var9.bind(var2)(var0);
                        var1 = var0.HeaderActionButton;
                        var0 = {};
                        var5 = 5;
                        var7 = var6[var5];
                        var7 = var9.bind(var2)(var7);
                        var8 = var7.intl;
                        var7 = var8.string;
                        var5 = var6[var5];
                        var5 = var9.bind(var2)(var5);
                        var5 = var5.t;
                        var5 = var5.cpT0Cq;
                        var5 = var7.bind(var8)(var5);
                        var0.accessibilityLabel = var5;
                        var5 = _closure2_slot5;
                        var0.onPress = var5;
                        var5 = _closure1_slot1;
                        var4 = 8;
                        var4 = var6[var4];
                        var4 = var5.bind(var2)(var4);
                        var0.source = var4;
                        var0 = var3.bind(var2)(var1, var0);
                        return var0;
                    };
                    var0 = {};
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var7 = 6;
                    var6 = var1[var7];
                    var4 = undefined;
                    var6 = var2.bind(var4)(var6);
                    var6 = var6.MfaScreens;
                    var8 = var6.SELECT;
                    var6 = {
                        'fullscreen': true,
                        'headerTitle': ''
                    };
                    var13 = 9;
                    var9 = var1[var13];
                    var10 = var2.bind(var4)(var9);
                    var9 = var10.getHeaderBackButton;
                    var9 = var9.bind(var10)();
                    var6.headerLeft = var9;
                    var6.headerRight = var5;
                    var9 = function arg0() {
                        var3 = _closure1_slot6;
                        var1 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var0 = 10;
                        var0 = var2[var0];
                        var2 = undefined;
                        var1 = var1.bind(var2)(var0);
                        var0 = {};
                        var5 = arg0;
                        var6 = var0;
                        var4 = copyDataProperties(var6, var5);
                        var0 = var3.bind(var2)(var1, var0);
                        return var0;
                    };
                    var6.render = var9;
                    var0[var8] = var6;
                    var1 = var1[var7];
                    var1 = var2.bind(var4)(var1);
                    var1 = var1.MfaScreens;
                    var2 = var1.WEBAUTHN;
                    var1 = {
                        'fullscreen': true,
                        'headerTitle': ''
                    };
                    var6 = _closure2_slot0;
                    var6 = var6.methods;
                    var9 = 0;
                    var12 = var6[var9];
                    var6 = null;
                    var14 = var6 == var12;
                    var10 = undefined;
                    if (var14) {
                        _fun86663_ip = 181;
                        continue _fun86663
                    }
                case 176:
                    var10 = var12.type;
                case 181:
                    var14 = 'webauthn';
                    if (!(var14 !== var10)) {
                        _fun86663_ip = 218;
                        continue _fun86663
                    }
                case 189:
                    var12 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var10 = var10[var13];
                    var12 = var12.bind(var4)(var10);
                    var10 = var12.getHeaderBackButton;
                    var10 = var10.bind(var12)();
                    _fun86663_ip = 250;
                    continue _fun86663;
                case 218:
                    var15 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var12 = var12[var13];
                    var16 = var15.bind(var4)(var12);
                    var15 = var16.getHeaderCloseButton;
                    var12 = _closure2_slot5;
                    var10 = var15.bind(var16)(var12);
                case 250:
                    var1.headerLeft = var10;
                    var10 = _closure2_slot0;
                    var10 = var10.methods;
                    var10 = var10[var9];
                    var15 = var6 == var10;
                    var12 = undefined;
                    if (var15) {
                        _fun86663_ip = 283;
                        continue _fun86663
                    }
                case 278:
                    var12 = var10.type;
                case 283:
                    var10 = undefined;
                    if (!(var14 !== var12)) {
                        _fun86663_ip = 292;
                        continue _fun86663
                    }
                case 289:
                    var10 = var5;
                case 292:
                    var1.headerRight = var10;
                    var10 = function arg0() {
                        var3 = _closure1_slot6;
                        var1 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var0 = 11;
                        var0 = var2[var0];
                        var2 = undefined;
                        var1 = var1.bind(var2)(var0);
                        var0 = {};
                        var5 = arg0;
                        var6 = var0;
                        var4 = copyDataProperties(var6, var5);
                        var0 = var3.bind(var2)(var1, var0);
                        return var0;
                    };
                    var1.render = var10;
                    var0[var2] = var1;
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var1 = var1[var7];
                    var1 = var2.bind(var4)(var1);
                    var1 = var1.MfaScreens;
                    var2 = var1.TOTP;
                    var1 = {
                        'fullscreen': true,
                        'headerTitle': ''
                    };
                    var10 = _closure2_slot0;
                    var10 = var10.methods;
                    var12 = var10[var9];
                    var14 = var6 == var12;
                    var10 = undefined;
                    if (var14) {
                        _fun86663_ip = 385;
                        continue _fun86663
                    }
                case 380:
                    var10 = var12.type;
                case 385:
                    var14 = 'totp';
                    if (!(var14 !== var10)) {
                        _fun86663_ip = 422;
                        continue _fun86663
                    }
                case 393:
                    var12 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var10 = var10[var13];
                    var12 = var12.bind(var4)(var10);
                    var10 = var12.getHeaderBackButton;
                    var10 = var10.bind(var12)();
                    _fun86663_ip = 454;
                    continue _fun86663;
                case 422:
                    var15 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var12 = var12[var13];
                    var16 = var15.bind(var4)(var12);
                    var15 = var16.getHeaderCloseButton;
                    var12 = _closure2_slot5;
                    var10 = var15.bind(var16)(var12);
                case 454:
                    var1.headerLeft = var10;
                    var10 = _closure2_slot0;
                    var10 = var10.methods;
                    var10 = var10[var9];
                    var15 = var6 == var10;
                    var12 = undefined;
                    if (var15) {
                        _fun86663_ip = 487;
                        continue _fun86663
                    }
                case 482:
                    var12 = var10.type;
                case 487:
                    var10 = undefined;
                    if (!(var14 !== var12)) {
                        _fun86663_ip = 496;
                        continue _fun86663
                    }
                case 493:
                    var10 = var5;
                case 496:
                    var1.headerRight = var10;
                    var10 = function arg0() {
                        var3 = _closure1_slot6;
                        var1 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var0 = 12;
                        var0 = var2[var0];
                        var2 = undefined;
                        var1 = var1.bind(var2)(var0);
                        var0 = {};
                        var5 = arg0;
                        var6 = var0;
                        var4 = copyDataProperties(var6, var5);
                        var0 = var3.bind(var2)(var1, var0);
                        return var0;
                    };
                    var1.render = var10;
                    var0[var2] = var1;
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var1 = var1[var7];
                    var1 = var2.bind(var4)(var1);
                    var1 = var1.MfaScreens;
                    var2 = var1.BACKUP;
                    var1 = {
                        'fullscreen': true,
                        'headerTitle': ''
                    };
                    var10 = _closure2_slot0;
                    var10 = var10.methods;
                    var12 = var10[var9];
                    var14 = var6 == var12;
                    var10 = undefined;
                    if (var14) {
                        _fun86663_ip = 589;
                        continue _fun86663
                    }
                case 584:
                    var10 = var12.type;
                case 589:
                    var14 = 'backup';
                    if (!(var14 !== var10)) {
                        _fun86663_ip = 626;
                        continue _fun86663
                    }
                case 597:
                    var12 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var10 = var10[var13];
                    var12 = var12.bind(var4)(var10);
                    var10 = var12.getHeaderBackButton;
                    var10 = var10.bind(var12)();
                    _fun86663_ip = 658;
                    continue _fun86663;
                case 626:
                    var15 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var12 = var12[var13];
                    var16 = var15.bind(var4)(var12);
                    var15 = var16.getHeaderCloseButton;
                    var12 = _closure2_slot5;
                    var10 = var15.bind(var16)(var12);
                case 658:
                    var1.headerLeft = var10;
                    var10 = _closure2_slot0;
                    var10 = var10.methods;
                    var10 = var10[var9];
                    var15 = var6 == var10;
                    var12 = undefined;
                    if (var15) {
                        _fun86663_ip = 691;
                        continue _fun86663
                    }
                case 686:
                    var12 = var10.type;
                case 691:
                    var10 = undefined;
                    if (!(var14 !== var12)) {
                        _fun86663_ip = 700;
                        continue _fun86663
                    }
                case 697:
                    var10 = var5;
                case 700:
                    var1.headerRight = var10;
                    var10 = function arg0() {
                        var3 = _closure1_slot6;
                        var1 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var0 = 13;
                        var0 = var2[var0];
                        var2 = undefined;
                        var1 = var1.bind(var2)(var0);
                        var0 = {};
                        var5 = arg0;
                        var6 = var0;
                        var4 = copyDataProperties(var6, var5);
                        var0 = var3.bind(var2)(var1, var0);
                        return var0;
                    };
                    var1.render = var10;
                    var0[var2] = var1;
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var1 = var1[var7];
                    var1 = var2.bind(var4)(var1);
                    var1 = var1.MfaScreens;
                    var2 = var1.SMS;
                    var1 = {
                        'fullscreen': true,
                        'headerTitle': ''
                    };
                    var10 = _closure2_slot0;
                    var10 = var10.methods;
                    var12 = var10[var9];
                    var14 = var6 == var12;
                    var10 = undefined;
                    if (var14) {
                        _fun86663_ip = 793;
                        continue _fun86663
                    }
                case 788:
                    var10 = var12.type;
                case 793:
                    var14 = 'sms';
                    if (!(var14 !== var10)) {
                        _fun86663_ip = 830;
                        continue _fun86663
                    }
                case 801:
                    var12 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var10 = var10[var13];
                    var12 = var12.bind(var4)(var10);
                    var10 = var12.getHeaderBackButton;
                    var10 = var10.bind(var12)();
                    _fun86663_ip = 862;
                    continue _fun86663;
                case 830:
                    var15 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var12 = var12[var13];
                    var16 = var15.bind(var4)(var12);
                    var15 = var16.getHeaderCloseButton;
                    var12 = _closure2_slot5;
                    var10 = var15.bind(var16)(var12);
                case 862:
                    var1.headerLeft = var10;
                    var10 = _closure2_slot0;
                    var10 = var10.methods;
                    var10 = var10[var9];
                    var15 = var6 == var10;
                    var12 = undefined;
                    if (var15) {
                        _fun86663_ip = 895;
                        continue _fun86663
                    }
                case 890:
                    var12 = var10.type;
                case 895:
                    var10 = undefined;
                    if (!(var14 !== var12)) {
                        _fun86663_ip = 904;
                        continue _fun86663
                    }
                case 901:
                    var10 = var5;
                case 904:
                    var1.headerRight = var10;
                    var10 = function arg0() {
                        var3 = _closure1_slot6;
                        var1 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var0 = 14;
                        var0 = var2[var0];
                        var2 = undefined;
                        var1 = var1.bind(var2)(var0);
                        var0 = {};
                        var5 = arg0;
                        var6 = var0;
                        var4 = copyDataProperties(var6, var5);
                        var0 = var3.bind(var2)(var1, var0);
                        return var0;
                    };
                    var1.render = var10;
                    var0[var2] = var1;
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var1 = var1[var7];
                    var1 = var2.bind(var4)(var1);
                    var1 = var1.MfaScreens;
                    var2 = var1.PASSWORD;
                    var1 = {
                        'fullscreen': true,
                        'headerTitle': ''
                    };
                    var7 = _closure2_slot0;
                    var7 = var7.methods;
                    var7 = var7[var9];
                    var12 = var6 == var7;
                    var10 = undefined;
                    if (var12) {
                        _fun86663_ip = 997;
                        continue _fun86663
                    }
                case 992:
                    var10 = var7.type;
                case 997:
                    var7 = 'password';
                    if (!(var7 !== var10)) {
                        _fun86663_ip = 1034;
                        continue _fun86663
                    }
                case 1005:
                    var12 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var10 = var10[var13];
                    var12 = var12.bind(var4)(var10);
                    var10 = var12.getHeaderBackButton;
                    var10 = var10.bind(var12)();
                    _fun86663_ip = 1066;
                    continue _fun86663;
                case 1034:
                    var12 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var11 = var11[var13];
                    var13 = var12.bind(var4)(var11);
                    var12 = var13.getHeaderCloseButton;
                    var11 = _closure2_slot5;
                    var10 = var12.bind(var13)(var11);
                case 1066:
                    var1.headerLeft = var10;
                    var8 = _closure2_slot0;
                    var8 = var8.methods;
                    var8 = var8[var9];
                    var9 = var6 == var8;
                    var6 = undefined;
                    if (var9) {
                        _fun86663_ip = 1099;
                        continue _fun86663
                    }
                case 1094:
                    var6 = var8.type;
                case 1099:
                    var4 = undefined;
                    if (!(var7 !== var6)) {
                        _fun86663_ip = 1108;
                        continue _fun86663
                    }
                case 1105:
                    var4 = var5;
                case 1108:
                    var1.headerRight = var4;
                    var3 = function arg0() {
                        var3 = _closure1_slot6;
                        var1 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var0 = 15;
                        var0 = var2[var0];
                        var2 = undefined;
                        var1 = var1.bind(var2)(var0);
                        var0 = {};
                        var5 = arg0;
                        var6 = var0;
                        var4 = copyDataProperties(var6, var5);
                        var0 = var3.bind(var2)(var1, var0);
                        return var0;
                    };
                    var1.render = var3;
                    var0[var2] = var1;
                    return var0;
            }
        };
        var6 = var2.bind(var6)(var0, var1);
        var2 = _closure1_slot6;
        var1 = _closure1_slot0;
        var7 = _closure1_slot2;
        var0 = 16;
        var0 = var7[var0];
        var0 = var1.bind(var3)(var0);
        var1 = var0.Navigator;
        var0 = {};
        var0.screens = var6;
        var0.initialRouteStack = var5;
        var4 = _closure1_slot5;
        var4 = var4.dismiss;
        var0.onWillFocus = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot8 = var3;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var7.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = arg3;
    var4 = var4.bind(var0)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.Keyboard;
    var _closure1_slot5 = var7;
    var8 = var4.LogBox;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.jsx;
    var _closure1_slot6 = var4;
    var7 = var8.ignoreLogs;
    var4 = ['Non-serializable values were found in the navigation state'];
    var4 = var7.bind(var8)(var4);
    var4 = 'MFA_MODAL_KEY';
    var _closure1_slot7 = var4;
    var4 = 18;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/mfa/native/MFAModal.tsx';
    var4 = var5.bind(var6)(var4);
    var2.MFAModal = var3;
    var1 = function arg0, arg1, arg2() {
        var2 = _closure1_slot1;
        var3 = _closure1_slot2;
        var0 = 4;
        var4 = var3[var0];
        var0 = undefined;
        var7 = var2.bind(var0)(var4);
        var6 = var7.push;
        var5 = _closure1_slot8;
        var4 = {};
        var8 = arg0;
        var4.mfaChallenge = var8;
        var8 = arg1;
        var4.finish = var8;
        var8 = arg2;
        var4.cancel = var8;
        var1 = _closure1_slot7;
        var1 = var6.bind(var7)(var5, var4, var1);
        var1 = 17;
        var1 = var3[var1];
        var2 = var2.bind(var0)(var1);
        var1 = var2.close;
        var1 = var1.bind(var2)();
        return var0;
    };
    var2.openMFAModal = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 31, 27, 33, 4557, 1234, 11196, 5317, 5318, 4700, 11197, 11198, 11203, 11206, 11207, 11208, 5781, 3927, 2]);