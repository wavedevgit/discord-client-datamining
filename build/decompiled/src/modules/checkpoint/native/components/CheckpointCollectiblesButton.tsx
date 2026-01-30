// modules/checkpoint/native/components/CheckpointCollectiblesButton.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
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
    var3 = var10.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 6;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_72;
    var8.marginTop = var9;
    var3.claim = var8;
    var8 = {
        'fontWeight': 800,
        'fontSize': 16,
        'lineHeight': 20,
        'textAlign': 'center'
    };
    var3.buttonCTA = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot8 = var3;
    var3 = 14;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/checkpoint/native/components/CheckpointCollectiblesButton.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: CheckpointCollectiblesButton, environment: var1
        _fun86495: for (var _fun86495_ip = 0;;) switch (_fun86495_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.style;
                var4 = undefined;
                var _closure2_slot2 = var4;
                var0 = _closure1_slot8;
                var10 = var0.bind(var4)();
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 7;
                var1 = var5[var0];
                var11 = var2.bind(var4)(var1);
                var9 = var11.useStateFromStores;
                var1 = _closure1_slot4;
                var3 = new Array(1);
                var3[0] = var1;
                var1 = function() { // Environment: var6
                    var1 = _closure1_slot4;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var3 = var9.bind(var11)(var3, var1);
                var1 = var5[var0];
                var12 = var2.bind(var4)(var1);
                var11 = var12.useStateFromStores;
                var1 = _closure1_slot6;
                var9 = new Array(1);
                var9[0] = var1;
                var1 = function() { // Environment: var6
                    var1 = _closure1_slot6;
                    var0 = var1.getCheckpointData;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var1 = var11.bind(var12)(var9, var1);
                var1 = var1.avatarDecoration;
                var _closure2_slot0 = var1;
                var0 = var5[var0];
                var9 = var2.bind(var4)(var0);
                var5 = var9.useStateFromStoresArray;
                var0 = _closure1_slot5;
                var2 = new Array(1);
                var2[0] = var0;
                var0 = function() { // Environment: var6
                    _fun86498: for (var _fun86498_ip = 0;;) switch (_fun86498_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            var0 = null;
                            var2 = var0 == var1;
                            var1 = undefined;
                            if (var2) {
                                _fun86498_ip = 28;
                                continue _fun86498
                            }
                        case 18:
                            var2 = _closure2_slot0;
                            var1 = var2.skuId;
                        case 28:
                            if (!(var0 != var1)) {
                                _fun86498_ip = 106;
                                continue _fun86498
                            }
                        case 32:
                            var2 = _closure1_slot5;
                            var1 = var2.getForSku;
                            var5 = _closure2_slot0;
                            var5 = var0 == var5;
                            var3 = undefined;
                            if (var5) {
                                _fun86498_ip = 70;
                                continue _fun86498
                            }
                        case 60:
                            var4 = _closure2_slot0;
                            var3 = var4.skuId;
                        case 70:
                            var3 = var1.bind(var2)(var3);
                            if (!(var0 == var3)) {
                                _fun86498_ip = 85;
                                continue _fun86498
                            }
                        case 79:
                            var0 = new Array(0);
                            _fun86498_ip = 104;
                            continue _fun86498;
                        case 85:
                            var1 = new Array(0);
                            var6 = 0;
                            var8 = var1;
                            var7 = var3;
                            var2 = arraySpread(var8, var7, var6);
                            var0 = var1;
                        case 104:
                            return var0;
                        case 106:
                            var0 = new Array(0);
                            return var0;
                    }
                };
                var2 = var5.bind(var9)(var2, var0);
                var0 = 0;
                var2 = var2[var0];
                var0 = null;
                var15 = var0 != var2;
                var _closure2_slot1 = var15;
                var5 = var0 == var3;
                var2 = undefined;
                if (var5) {
                    _fun86495_ip = 212;
                    continue _fun86495
                }
            case 191:
                var3 = var3.avatarDecoration;
                var5 = var0 == var3;
                var2 = undefined;
                if (var5) {
                    _fun86495_ip = 212;
                    continue _fun86495
                }
            case 206:
                var2 = var3.skuId;
            case 212:
                var5 = var0 != var2;
                var3 = null;
                if (!var5) {
                    _fun86495_ip = 224;
                    continue _fun86495
                }
            case 221:
                var3 = var2;
            case 224:
                var9 = var0 != var3;
                if (!var9) {
                    _fun86495_ip = 250;
                    continue _fun86495
                }
            case 231:
                var5 = var0 == var1;
                var2 = undefined;
                if (var5) {
                    _fun86495_ip = 246;
                    continue _fun86495
                }
            case 240:
                var2 = var1.skuId;
            case 246:
                var9 = var3 === var2;
            case 250:
                _closure2_slot2 = var9;
                if (!(var0 != var1)) {
                    _fun86495_ip = 502;
                    continue _fun86495
                }
            case 261:
                var1 = function() { // Environment: var6
                    var3 = _closure1_slot3;
                    var2 = undefined;
                    var1 = function*() { // Environment: var0
                        var0 = function*() { // Original name: ?anon_0_, environment: var0
                            _fun86501: for (var _fun86501_ip = 0;;) switch (_fun86501_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun86501_ip = 92;
                                        continue _fun86501
                                    }
                                case 7:
                                    var1 = _closure2_slot1;
                                    if (!var1) {
                                        _fun86501_ip = 24;
                                        continue _fun86501
                                    }
                                case 17:
                                    var2 = _closure2_slot2;
                                    var1 = !var2;
                                case 24:
                                    if (!var1) {
                                        _fun86501_ip = 84;
                                        continue _fun86501
                                    }
                                case 27:
                                    var3 = _closure1_slot0;
                                    var2 = _closure1_slot2;
                                    var1 = 8;
                                    var2 = var2[var1];
                                    var1 = undefined;
                                    var3 = var3.bind(var1)(var2);
                                    var2 = var3.saveAccountChanges;
                                    var1 = {};
                                    var4 = _closure2_slot0;
                                    var1.avatarDecoration = var4;
                                    var1 = var2.bind(var3)(var1);
                                    SaveGenerator(address = 78);
                                case 76:
                                    return var1;
                                case 78:
                                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                    if (var2) {
                                        _fun86501_ip = 89;
                                        continue _fun86501
                                    }
                                case 84:
                                    var2 = undefined;
                                    return var2;
                                case 89:
                                    return var1;
                                case 92:
                                    return var0;
                            }
                        };
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
                var5 = var1.bind(var4)();
                var3 = _closure1_slot7;
                var2 = _closure1_slot1;
                var11 = _closure1_slot2;
                var1 = 9;
                var1 = var11[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var1.disabled = var9;
                var1.style = var7;
                if (var15) {
                    _fun86495_ip = 316;
                    continue _fun86495
                }
            case 309:
                var5 = function() { // Environment: var6
                    _fun86503: for (var _fun86503_ip = 0;;) switch (_fun86503_ip) {
                        case 0:
                            var0 = _closure2_slot1;
                            if (var0) {
                                _fun86503_ip = 45;
                                continue _fun86503
                            }
                        case 10:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 10;
                            var1 = var1[var0];
                            var0 = undefined;
                            var1 = var2.bind(var0)(var1);
                            var0 = var1.claimAvatarDecoration;
                            var0 = var0.bind(var1)();
                        case 45:
                            var0 = undefined;
                            return var0;
                    }
                };
            case 316:
                var1.onPress = var5;
                var7 = _closure1_slot7;
                var6 = _closure1_slot1;
                var11 = _closure1_slot2;
                var5 = 11;
                var5 = var11[var5];
                var6 = var6.bind(var4)(var5);
                var5 = {
                    'variant': 'eyebrow',
                    'style': null,
                    'adjustsFontSizeToFit': true,
                    'lineClamp': 2
                };
                var10 = var10.buttonCTA;
                var5.style = var10;
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var10 = 12;
                var11 = var14[var10];
                var11 = var13.bind(var4)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                if (var15) {
                    _fun86495_ip = 434;
                    continue _fun86495
                }
            case 403:
                var15 = _closure1_slot1;
                var8 = 13;
                var8 = var14[var8];
                var8 = var15.bind(var4)(var8);
                var8 = var8.mDxM7m;
                var8 = var11.bind(var12)(var8);
                _fun86495_ip = 480;
                continue _fun86495;
            case 434:
                var10 = var14[var10];
                var10 = var13.bind(var4)(var10);
                var10 = var10.t;
                if (var9) {
                    _fun86495_ip = 464;
                    continue _fun86495
                }
            case 451:
                var9 = var10.MAS7uK;
                var9 = var11.bind(var12)(var9);
                _fun86495_ip = 477;
                continue _fun86495;
            case 464:
                var10 = var10["h+WsPb"];
                var9 = var11.bind(var12)(var10);
            case 477:
                var8 = var9;
            case 480:
                var5.children = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 502:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 1613, 4615, 11134, 33, 1297, 671, 566, 5682, 11145, 11135, 11143, 1234, 2267, 2]);