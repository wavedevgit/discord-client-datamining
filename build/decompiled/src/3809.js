// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var0 = require;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var6;
    var0 = function arg0() {
        var2 = arg0;
        var1 = var2.map;
        var0 = function(arg0) { // Environment: var0
            _fun34046: for (var _fun34046_ip = 0;;) switch (_fun34046_ip) {
                case 0:
                    var13 = undefined;
                    var14 = undefined;
                    var15 = undefined;
                    var0 = {};
                    var12 = global;
                    var3 = var12.Object;
                    var2 = var3.entries;
                    var1 = arg0;
                    var1 = var2.bind(var3)(var1);
                    var11 = var1;
                    var2 = var11[Symbol.iterator];
                    var11 = var2().next;
                    var10 = '';
                    var9 = 'px';
                    var8 = 'number';
                    var7 = 'perspective';
                    var5 = 2;
                    var4 = 0;
                    var3 = 1;
                    var1 = 'translate';
                case 67:
                    var17 = var11().value;
                    var16 = var2;
                    if (!(var16 !== var13)) {
                        _fun34046_ip = 192;
                        continue _fun34046
                    }
                case 78: // try_start_0
                    var16 = _closure1_slot5;
                    var16 = var16.bind(var13)(var17, var5);
                    var17 = var16[var4];
                    var14 = var17;
                    var15 = var16[var3];
                    var16 = var17.includes;
                    var16 = var16.bind(var17)(var1);
                    if (var16) {
                        _fun34046_ip = 128;
                        continue _fun34046
                    }
                case 112:
                    var17 = var14;
                    var16 = var17.includes;
                    var16 = var16.bind(var17)(var7);
                    if (!var16) {
                        _fun34046_ip = 138;
                        continue _fun34046
                    }
                case 128:
                    var16 = var15;
                    var16 = typeof var16;
                    if (!(var8 !== var16)) {
                        _fun34046_ip = 153;
                        continue _fun34046
                    }
                case 138:
                    var18 = var0;
                    var17 = var14;
                    var16 = var15;
                    var18[var17] = var16;
                    _fun34046_ip = 183;
                    continue _fun34046;
                case 153:
                    var18 = var0;
                    var17 = var14;
                    var19 = var15;
                    var16 = var12.HermesInternal;
                    var16 = var16.concat;
                    var16 = var16.bind(var10)(var19, var9);
                    var18[var17] = var16;
                case 183: // try_end0
                    _fun34046_ip = 67;
                    continue _fun34046;
                case 185: // catch_target0
                    CatchBlockStart(arg_register = 1);
                    var2.return();
                    throw var1;
                case 192:
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot7 = var0;
    var0 = function() {
        var0 = _closure1_slot6;
        var1 = parseFloat(var0);
        var0 = var1 + 1;
        _closure1_slot6 = var0;
        var0 = 'REA';
        var0 = var0 + var1;
        return var0;
    };
    var _closure1_slot8 = var0;
    var0 = ['transform'];
    var _closure1_slot2 = var0;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var3);
    var3 = 0;
    var4 = var6[var3];
    var0 = undefined;
    var4 = var5.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var _closure1_slot6 = var3;
    var3 = function arg0() {
        _fun34048: for (var _fun34048_ip = 0;;) switch (_fun34048_ip) {
            case 0:
                var7 = arg0;
                var3 = undefined;
                var5 = undefined;
                var2 = global;
                var1 = var2.Object;
                var0 = var1.values;
                var1 = var0.bind(var1)(var7);
                var0 = var1;
                var4 = var0[Symbol.iterator];
                var0 = var4().next;
            case 34:
                var6 = var0().value;
                var8 = var4;
                if (!(var8 !== var3)) {
                    _fun34048_ip = 88;
                    continue _fun34048
                }
            case 45: // try_start_0
                var5 = var6;
                var6 = var6.transform;
                if (!var6) {
                    _fun34048_ip = 79;
                    continue _fun34048
                }
            case 56:
                var8 = var5;
                var9 = _closure1_slot7;
                var6 = var8.transform;
                var6 = var9.bind(var3)(var6);
                var8.transform = var6;
            case 79: // try_end0
                _fun34048_ip = 34;
                continue _fun34048;
            case 81: // catch_target0
                CatchBlockStart(arg_register = 0);
                var4.return();
                throw var0;
            case 88:
                var0 = {
                    'name': '',
                    'style': null,
                    'duration': 4294967295
                };
                var0.style = var7;
                var4 = _closure1_slot8;
                var4 = var4.bind(var3)();
                var0.name = var4;
                var4 = var2.Object;
                var2 = var4.keys;
                var6 = var2.bind(var4)(var7);
                var2 = var6.length;
                var5 = 1;
                var2 = var5 < var2;
                var4 = var5;
                if (!var2) {
                    _fun34048_ip = 214;
                    continue _fun34048
                }
            case 156:
                var2 = var6[var4];
                var2 = var7[var2];
                var8 = var2.easing;
                if (!var8) {
                    _fun34048_ip = 202;
                    continue _fun34048
                }
            case 173:
                var8 = var4 - var5;
                var8 = var6[var8];
                var9 = var7[var8];
                var8 = var2.easing;
                var9.easing = var8;
                var2 = delete var2.easing;
            case 202:
                var4 = var4 + 1;
                var2 = var6.length;
                if (var4 < var2) {
                    _fun34048_ip = 156;
                    continue _fun34048
                }
            case 214:
                var2 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 3;
                var1 = var5[var1];
                var4 = var2.bind(var3)(var1);
                var1 = var4.convertAnimationObjectToKeyframes;
                var4 = var1.bind(var4)(var0);
                var1 = 4;
                var1 = var5[var1];
                var3 = var2.bind(var3)(var1);
                var2 = var3.insertWebAnimation;
                var1 = var0.name;
                var1 = var2.bind(var3)(var1, var4);
                var0 = var0.name;
                return var0;
        }
    };
    var2.createCustomKeyFrameAnimation = var3;
    var3 = function arg0, arg1() {
        _fun34049: for (var _fun34049_ip = 0;;) switch (_fun34049_ip) {
            case 0:
                var3 = arg0;
                var12 = arg1;
                var4 = undefined;
                var7 = undefined;
                var0 = global;
                var6 = var0.structuredClone;
                var8 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 5;
                var2 = var2[var1];
                var2 = var8.bind(var4)(var2);
                var2 = var2.AnimationsData;
                var2 = var2[var3];
                var2 = var2.style;
                var2 = var6.bind(var4)(var2);
                var6 = 0;
                var8 = var2[var6];
                var11 = var12.transform;
                var10 = _closure1_slot4;
                var9 = _closure1_slot2;
                var10 = var10.bind(var4)(var12, var9);
                if (!var11) {
                    _fun34049_ip = 392;
                    continue _fun34049
                }
            case 92:
                var9 = _closure1_slot7;
                var14 = var9.bind(var4)(var11);
                var9 = var8.transform;
                if (var9) {
                    _fun34049_ip = 120;
                    continue _fun34049
                }
            case 109:
                var8.transform = var14;
                _fun34049_ip = 392;
                continue _fun34049;
            case 120:
                var9 = var0.Map;
                var11 = var9.prototype;
                var11 = Object.create(var11, {
                    constructor: {
                        value: var9
                    }
                });
                var24 = var11;
                var9 = new var24[var9](var23);
                var7 = var9 instanceof Object ? var9 : var11;
                var12 = var8.transform;
                var9 = var12;
                var11 = var9[Symbol.iterator];
                var9 = var11().next;
                var13 = 2;
                var12 = 1;
            case 163:
                var17 = var9().value;
                var15 = var11;
                if (!(var15 !== var4)) {
                    _fun34049_ip = 258;
                    continue _fun34049
                }
            case 174: // try_start_2
                var16 = var0.Object;
                var15 = var16.entries;
                var17 = var15.bind(var16)(var17);
                var15 = var17;
                var16 = var15[Symbol.iterator];
                var15 = var16().next;
            case 197:
                var18 = var15().value;
                var17 = var16;
                if (!(var17 !== var4)) {
                    _fun34049_ip = 249;
                    continue _fun34049
                }
            case 208: // try_start_0
                var17 = _closure1_slot5;
                var17 = var17.bind(var4)(var18, var13);
                var20 = var17[var6];
                var19 = var17[var12];
                var18 = var7;
                var17 = var18.set;
                var17 = var17.bind(var18)(var20, var19);
            case 240: // try_end0
                _fun34049_ip = 197;
                continue _fun34049;
            case 242: // catch_target0
                CatchBlockStart(arg_register = 15);
                var16.return();
                throw var15;
            case 249: // try_end2
                _fun34049_ip = 163;
                continue _fun34049;
            case 251: // catch_target2
                CatchBlockStart(arg_register = 9);
                var11.return();
                throw var9;
            case 258:
                var9 = var14;
                var11 = var9[Symbol.iterator];
                var9 = var11().next;
            case 264:
                var16 = var9().value;
                var14 = var11;
                if (!(var14 !== var4)) {
                    _fun34049_ip = 359;
                    continue _fun34049
                }
            case 275: // try_start_3
                var15 = var0.Object;
                var14 = var15.entries;
                var16 = var14.bind(var15)(var16);
                var14 = var16;
                var15 = var14[Symbol.iterator];
                var14 = var15().next;
            case 298:
                var17 = var14().value;
                var16 = var15;
                if (!(var16 !== var4)) {
                    _fun34049_ip = 350;
                    continue _fun34049
                }
            case 309: // try_start_1
                var16 = _closure1_slot5;
                var16 = var16.bind(var4)(var17, var13);
                var19 = var16[var6];
                var18 = var16[var12];
                var17 = var7;
                var16 = var17.set;
                var16 = var16.bind(var17)(var19, var18);
            case 341: // try_end1
                _fun34049_ip = 298;
                continue _fun34049;
            case 343: // catch_target1
                CatchBlockStart(arg_register = 14);
                var15.return();
                throw var14;
            case 350: // try_end3
                _fun34049_ip = 264;
                continue _fun34049;
            case 352: // catch_target3
                CatchBlockStart(arg_register = 9);
                var11.return();
                throw var9;
            case 359:
                var12 = var0.Array;
                var11 = var12.from;
                var9 = var7;
                var7 = function(arg0) { // Environment: var7
                    var3 = _closure1_slot5;
                    var4 = undefined;
                    var2 = arg0;
                    var1 = 2;
                    var2 = var3.bind(var4)(var2, var1);
                    var1 = 0;
                    var3 = var2[var1];
                    var1 = 1;
                    var2 = var2[var1];
                    var1 = _closure1_slot3;
                    var0 = {};
                    var0 = var1.bind(var4)(var0, var3, var2);
                    return var0;
                };
                var7 = var11.bind(var12)(var9, var7);
                var8.transform = var7;
            case 392:
                var9 = var0.Object;
                var8 = var9.assign;
                var7 = var2[var6];
                var0 = {};
                var0 = var8.bind(var9)(var0, var7, var10);
                var2[var6] = var0;
                var0 = _closure1_slot8;
                var0 = var0.bind(var4)();
                var6 = {};
                var6.name = var0;
                var6.style = var2;
                var2 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = var5[var1];
                var1 = var2.bind(var4)(var1);
                var1 = var1.AnimationsData;
                var1 = var1[var3];
                var1 = var1.duration;
                var6.duration = var1;
                var1 = 3;
                var1 = var5[var1];
                var3 = var2.bind(var4)(var1);
                var1 = var3.convertAnimationObjectToKeyframes;
                var3 = var1.bind(var3)(var6);
                var1 = 4;
                var1 = var5[var1];
                var2 = var2.bind(var4)(var1);
                var1 = var2.insertWebAnimation;
                var1 = var1.bind(var2)(var0, var3);
                return var0;
        }
    };
    var2.createAnimationWithInitialValues = var3;
    var1 = function arg0, arg1() {
        _fun34051: for (var _fun34051_ip = 0;;) switch (_fun34051_ip) {
            case 0:
                var4 = arg0;
                var6 = arg1;
                var1 = _closure1_slot8;
                var5 = undefined;
                var2 = var1.bind(var5)();
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var7 = 5;
                var1 = var1[var7];
                var1 = var3.bind(var5)(var1);
                var1 = var1.TransitionType;
                var1 = var1.LINEAR;
                if (!(var1 !== var4)) {
                    _fun34051_ip = 494;
                    continue _fun34051
                }
            case 58:
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var7];
                var1 = var3.bind(var5)(var1);
                var1 = var1.TransitionType;
                var1 = var1.SEQUENCED;
                if (!(var1 !== var4)) {
                    _fun34051_ip = 458;
                    continue _fun34051
                }
            case 94:
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var7];
                var1 = var3.bind(var5)(var1);
                var1 = var1.TransitionType;
                var1 = var1.FADING;
                if (!(var1 !== var4)) {
                    _fun34051_ip = 422;
                    continue _fun34051
                }
            case 130:
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var7];
                var1 = var3.bind(var5)(var1);
                var1 = var1.TransitionType;
                var1 = var1.JUMPING;
                if (!(var1 !== var4)) {
                    _fun34051_ip = 386;
                    continue _fun34051
                }
            case 166:
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var7];
                var1 = var3.bind(var5)(var1);
                var1 = var1.TransitionType;
                var1 = var1.CURVED;
                if (!(var1 !== var4)) {
                    _fun34051_ip = 278;
                    continue _fun34051
                }
            case 199:
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var7];
                var1 = var3.bind(var5)(var1);
                var1 = var1.TransitionType;
                var3 = var1.ENTRY_EXIT;
                var1 = undefined;
                var7 = undefined;
                if (!(var3 === var4)) {
                    _fun34051_ip = 528;
                    continue _fun34051
                }
            case 239:
                var4 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 11;
                var3 = var8[var3];
                var4 = var4.bind(var5)(var3);
                var3 = var4.EntryExitTransition;
                var7 = var3.bind(var4)(var2, var6);
                var1 = undefined;
                _fun34051_ip = 528;
                continue _fun34051;
            case 278:
                var3 = _closure1_slot8;
                var4 = var3.bind(var5)();
                var9 = _closure1_slot0;
                var11 = _closure1_slot1;
                var3 = 10;
                var3 = var11[var3];
                var8 = var9.bind(var5)(var3);
                var3 = var8.CurvedTransition;
                var8 = var3.bind(var8)(var2, var4, var6);
                var7 = var8.firstKeyframeObj;
                var12 = var8.secondKeyframeObj;
                var8 = 3;
                var8 = var11[var8];
                var10 = var9.bind(var5)(var8);
                var8 = var10.convertAnimationObjectToKeyframes;
                var10 = var8.bind(var10)(var12);
                var8 = 4;
                var8 = var11[var8];
                var9 = var9.bind(var5)(var8);
                var8 = var9.insertWebAnimation;
                var8 = var8.bind(var9)(var4, var10);
                var1 = var4;
                _fun34051_ip = 528;
                continue _fun34051;
            case 386:
                var4 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 9;
                var3 = var8[var3];
                var4 = var4.bind(var5)(var3);
                var3 = var4.JumpingTransition;
                var7 = var3.bind(var4)(var2, var6);
                var1 = undefined;
                _fun34051_ip = 528;
                continue _fun34051;
            case 422:
                var4 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 8;
                var3 = var8[var3];
                var4 = var4.bind(var5)(var3);
                var3 = var4.FadingTransition;
                var7 = var3.bind(var4)(var2, var6);
                var1 = undefined;
                _fun34051_ip = 528;
                continue _fun34051;
            case 458:
                var4 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 7;
                var3 = var8[var3];
                var4 = var4.bind(var5)(var3);
                var3 = var4.SequencedTransition;
                var7 = var3.bind(var4)(var2, var6);
                var1 = undefined;
                _fun34051_ip = 528;
                continue _fun34051;
            case 494:
                var4 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 6;
                var3 = var8[var3];
                var4 = var4.bind(var5)(var3);
                var3 = var4.LinearTransition;
                var7 = var3.bind(var4)(var2, var6);
                var1 = undefined;
            case 528:
                var3 = _closure1_slot0;
                var6 = _closure1_slot1;
                var0 = 3;
                var0 = var6[var0];
                var4 = var3.bind(var5)(var0);
                var0 = var4.convertAnimationObjectToKeyframes;
                var4 = var0.bind(var4)(var7);
                var0 = 4;
                var0 = var6[var0];
                var3 = var3.bind(var5)(var0);
                var0 = var3.insertWebAnimation;
                var0 = var0.bind(var3)(var2, var4);
                var0 = {};
                var0.transitionKeyframeName = var2;
                var0.dummyTransitionKeyframeName = var1;
                return var0;
        }
    };
    var2.TransitionGenerator = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [77, 29, 57, 3779, 3808, 3777, 3810, 3811, 3812, 3813, 3814, 3815]);