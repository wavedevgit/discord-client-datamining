// modules/main_tabs_v2/native/friends/components/ContactSuggestionActions.tsx
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
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot5 = var6;
    var3 = var3.jsxs;
    var _closure1_slot6 = var3;
    var3 = {};
    var6 = 200;
    var3.duration = var6;
    var6 = 3;
    var7 = var5[var6];
    var7 = var4.bind(var0)(var7);
    var9 = var7.Easing;
    var8 = var9.in;
    var7 = var5[var6];
    var7 = var4.bind(var0)(var7);
    var7 = var7.Easing;
    var7 = var7.quad;
    var7 = var8.bind(var9)(var7);
    var3.easing = var7;
    var _closure1_slot7 = var3;
    var3 = {};
    var7 = 250;
    var3.duration = var7;
    var8 = var5[var6];
    var8 = var4.bind(var0)(var8);
    var11 = var8.Easing;
    var9 = var11.in;
    var8 = var5[var6];
    var8 = var4.bind(var0)(var8);
    var8 = var8.Easing;
    var8 = var8.quad;
    var8 = var9.bind(var11)(var8);
    var3.easing = var8;
    var _closure1_slot8 = var3;
    var3 = {};
    var3.duration = var7;
    var8 = var5[var6];
    var8 = var4.bind(var0)(var8);
    var11 = var8.Easing;
    var9 = var11.in;
    var8 = var5[var6];
    var8 = var4.bind(var0)(var8);
    var8 = var8.Easing;
    var8 = var8.quad;
    var8 = var9.bind(var11)(var8);
    var3.easing = var8;
    var _closure1_slot9 = var3;
    var3 = {};
    var3.duration = var7;
    var7 = var5[var6];
    var7 = var4.bind(var0)(var7);
    var8 = var7.Easing;
    var7 = var8.out;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.Easing;
    var6 = var6.quad;
    var6 = var7.bind(var8)(var6);
    var3.easing = var6;
    var _closure1_slot10 = var3;
    var3 = {
        'mass': 1,
        'stiffness': 172,
        'damping': 17.3
    };
    var _closure1_slot11 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'position': 'absolute',
        'top': 4,
        'zIndex': 2,
        'color': null,
        'opacity': 0
    };
    var9 = 5;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.INTERACTIVE_TEXT_DEFAULT;
    var8.color = var9;
    var3.icon = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot12 = var3;
    var3 = {};
    var6 = 'function ContactSuggestionActionsTsx1(){const{right,opacity,scale}=this.__closure;return{right:right.get(),opacity:opacity.get(),transform:[{scale:scale.get()}]};}';
    var3.code = var6;
    var _closure1_slot13 = var3;
    var3 = {};
    var6 = 'function ContactSuggestionActionsTsx2(){const{buttonOpacity}=this.__closure;return{opacity:buttonOpacity.get()};}';
    var3.code = var6;
    var _closure1_slot14 = var3;
    var3 = {};
    var6 = 'function ContactSuggestionActionsTsx3(){const{added}=this.__closure;return added.get();}';
    var3.code = var6;
    var _closure1_slot15 = var3;
    var3 = {};
    var6 = "function ContactSuggestionActionsTsx4(added){const{animate,runOnJS,finishAnimationCallback,scale,withTiming,SCALE_CONFIG,opacity,OPACITY_CONFIG,buttonOpacity,right,withSpring,SPRING_CONFIG,withDelay,OPACITY_OUT_CONFIG,TRANSLATE_OUT_CONFIG}=this.__closure;if(!animate){runOnJS(finishAnimationCallback)();return;}if(added){scale.set(withTiming(1,SCALE_CONFIG));opacity.set(withTiming(1,OPACITY_CONFIG));buttonOpacity.set(withTiming(0,OPACITY_CONFIG));right.set(withSpring(12,SPRING_CONFIG,'respect-motion-settings',function(finished){if(!finished)return;opacity.set(withDelay(1000,withTiming(0,OPACITY_OUT_CONFIG)));scale.set(withDelay(1000,withTiming(0.5,SCALE_CONFIG)));right.set(withDelay(1000,withTiming(-8,TRANSLATE_OUT_CONFIG,'respect-motion-settings',function(finished){if(finished)runOnJS(finishAnimationCallback)();})));}));}else{buttonOpacity.set(1);scale.set(0.5);opacity.set(0);right.set(30);}}";
    var3.code = var6;
    var _closure1_slot16 = var3;
    var3 = {};
    var6 = "function ContactSuggestionActionsTsx5(finished){const{opacity,withDelay,withTiming,OPACITY_OUT_CONFIG,scale,SCALE_CONFIG,right,TRANSLATE_OUT_CONFIG,runOnJS,finishAnimationCallback}=this.__closure;if(!finished)return;opacity.set(withDelay(1000,withTiming(0,OPACITY_OUT_CONFIG)));scale.set(withDelay(1000,withTiming(0.5,SCALE_CONFIG)));right.set(withDelay(1000,withTiming(-8,TRANSLATE_OUT_CONFIG,'respect-motion-settings',function(finished){if(finished)runOnJS(finishAnimationCallback)();})));}";
    var3.code = var6;
    var _closure1_slot17 = var3;
    var3 = {};
    var6 = 'function ContactSuggestionActionsTsx6(finished){const{runOnJS,finishAnimationCallback}=this.__closure;if(finished)runOnJS(finishAnimationCallback)();}';
    var3.code = var6;
    var _closure1_slot18 = var3;
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/friends/components/ContactSuggestionActions.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: ContactSuggestionActions, environment: var1
        _fun103950: for (var _fun103950_ip = 0;;) switch (_fun103950_ip) {
            case 0:
                var4 = arg0;
                var1 = var4.user;
                var _closure2_slot0 = var1;
                var21 = var4.added;
                var _closure2_slot1 = var21;
                var10 = var4.onAddSuggestion;
                var _closure2_slot2 = var10;
                var2 = var4.onFinishAnimation;
                var _closure2_slot3 = var2;
                var11 = var4.size;
                var3 = undefined;
                if (!(var11 === var3)) {
                    _fun103950_ip = 59;
                    continue _fun103950
                }
            case 55:
                var11 = 'sm';
            case 59:
                var20 = var4.animate;
                var _closure2_slot4 = var20;
                var _closure2_slot5 = var3;
                var _closure2_slot6 = var3;
                var _closure2_slot7 = var3;
                var _closure2_slot8 = var3;
                var _closure2_slot9 = var3;
                var5 = _closure1_slot12;
                var16 = var5.bind(var3)();
                var14 = _closure1_slot0;
                var15 = _closure1_slot2;
                var5 = 3;
                var6 = var15[var5];
                var8 = var14.bind(var3)(var6);
                var7 = var8.useSharedValue;
                var6 = 30;
                var9 = var7.bind(var8)(var6);
                _closure2_slot5 = var9;
                var6 = var15[var5];
                var8 = var14.bind(var3)(var6);
                var7 = var8.useSharedValue;
                var6 = 0.5;
                var18 = var7.bind(var8)(var6);
                _closure2_slot6 = var18;
                var6 = var15[var5];
                var8 = var14.bind(var3)(var6);
                var7 = var8.useSharedValue;
                var6 = 0;
                var17 = var7.bind(var8)(var6);
                _closure2_slot7 = var17;
                var6 = var15[var5];
                var8 = var14.bind(var3)(var6);
                var7 = var8.useSharedValue;
                var6 = 1;
                var12 = var7.bind(var8)(var6);
                _closure2_slot8 = var12;
                var7 = _closure1_slot3;
                var8 = var7.useCallback;
                var6 = new Array(2);
                var6[0] = var2;
                var6[1] = var1;
                var2 = function() { // Environment: var0
                    _fun103951: for (var _fun103951_ip = 0;;) switch (_fun103951_ip) {
                        case 0:
                            var1 = _closure2_slot3;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun103951_ip = 44;
                                continue _fun103951
                            }
                        case 13:
                            var0 = global;
                            var3 = var0.setTimeout;
                            var2 = undefined;
                            var1 = function() { // Environment: var0
                                var2 = _closure2_slot3;
                                var1 = _closure2_slot0;
                                var0 = undefined;
                                var1 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var0 = 1000;
                            var0 = var3.bind(var2)(var1, var0);
                        case 44:
                            var0 = undefined;
                            return var0;
                    }
                };
                var19 = var8.bind(var7)(var2, var6);
                _closure2_slot9 = var19;
                var2 = var15[var5];
                var8 = var14.bind(var3)(var2);
                var6 = var8.useAnimatedStyle;
                var2 = function() { // Original name: b, environment: var0
                    var0 = {};
                    var3 = _closure2_slot5;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    var0.right = var2;
                    var3 = _closure2_slot7;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    var0.opacity = var2;
                    var2 = {};
                    var3 = _closure2_slot6;
                    var1 = var3.get;
                    var1 = var1.bind(var3)();
                    var2.scale = var1;
                    var1 = new Array(1);
                    var1[0] = var2;
                    var0.transform = var1;
                    return var0;
                };
                var13 = {};
                var13.right = var9;
                var13.opacity = var17;
                var13.scale = var18;
                var2.__closure = var13;
                var13 = 13774422449074.0;
                var2.__workletHash = var13;
                var13 = _closure1_slot13;
                var2.__initData = var13;
                var13 = var6.bind(var8)(var2);
                var2 = var15[var5];
                var8 = var14.bind(var3)(var2);
                var6 = var8.useAnimatedStyle;
                var2 = function() { // Original name: E, environment: var0
                    var0 = {};
                    var2 = _closure2_slot8;
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    var0.opacity = var1;
                    return var0;
                };
                var22 = {};
                var22.buttonOpacity = var12;
                var2.__closure = var22;
                var22 = 4378005846847.0;
                var2.__workletHash = var22;
                var22 = _closure1_slot14;
                var2.__initData = var22;
                var8 = var6.bind(var8)(var2);
                var6 = var7.useCallback;
                var2 = new Array(8);
                var2[0] = var10;
                var2[1] = var1;
                var2[2] = var21;
                var2[3] = var20;
                var2[4] = var9;
                var2[5] = var17;
                var2[6] = var18;
                var2[7] = var12;
                var1 = function() { // Environment: var0
                    _fun103955: for (var _fun103955_ip = 0;;) switch (_fun103955_ip) {
                        case 0:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 6;
                            var1 = var1[var0];
                            var0 = undefined;
                            var4 = var2.bind(var0)(var1);
                            var2 = var4.addContactSuggestion;
                            var3 = _closure2_slot0;
                            var2 = var2.bind(var4)(var3);
                            var2 = _closure2_slot2;
                            var2 = var2.bind(var0)(var3);
                            var4 = _closure2_slot1;
                            var3 = var4.set;
                            var2 = true;
                            var2 = var3.bind(var4)(var2);
                            var2 = _closure2_slot4;
                            if (var2) {
                                _fun103955_ip = 139;
                                continue _fun103955
                            }
                        case 75:
                            var4 = _closure2_slot5;
                            var3 = var4.set;
                            var2 = 12;
                            var2 = var3.bind(var4)(var2);
                            var3 = _closure2_slot7;
                            var2 = var3.set;
                            var4 = 1;
                            var2 = var2.bind(var3)(var4);
                            var3 = _closure2_slot6;
                            var2 = var3.set;
                            var2 = var2.bind(var3)(var4);
                            var3 = _closure2_slot8;
                            var2 = var3.set;
                            var1 = 0;
                            var1 = var2.bind(var3)(var1);
                        case 139:
                            return var0;
                    }
                };
                var10 = var6.bind(var7)(var1, var2);
                var1 = var15[var5];
                var6 = var14.bind(var3)(var1);
                var2 = var6.useAnimatedReaction;
                var1 = function() { // Original name: k, environment: var0
                    var1 = _closure2_slot1;
                    var0 = var1.get;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var7 = {};
                var7.added = var21;
                var1.__closure = var7;
                var7 = 15816115253403.0;
                var1.__workletHash = var7;
                var7 = _closure1_slot15;
                var1.__initData = var7;
                var0 = function(arg0) { // Original name: D, environment: var0
                    _fun103957: for (var _fun103957_ip = 0;;) switch (_fun103957_ip) {
                        case 0:
                            var0 = _closure2_slot4;
                            if (var0) {
                                _fun103957_ip = 58;
                                continue _fun103957
                            }
                        case 10:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 3;
                            var0 = var1[var0];
                            var1 = undefined;
                            var3 = var2.bind(var1)(var0);
                            var2 = var3.runOnJS;
                            var0 = _closure2_slot9;
                            var0 = var2.bind(var3)(var0);
                            var0 = var0.bind(var1)();
                            _fun103957_ip = 487;
                            continue _fun103957;
                        case 58:
                            var0 = arg0;
                            if (var0) {
                                _fun103957_ip = 143;
                                continue _fun103957
                            }
                        case 64:
                            var2 = _closure2_slot8;
                            var1 = var2.set;
                            var0 = 1;
                            var0 = var1.bind(var2)(var0);
                            var2 = _closure2_slot6;
                            var1 = var2.set;
                            var0 = 0.5;
                            var0 = var1.bind(var2)(var0);
                            var2 = _closure2_slot7;
                            var1 = var2.set;
                            var0 = 0;
                            var0 = var1.bind(var2)(var0);
                            var2 = _closure2_slot5;
                            var1 = var2.set;
                            var0 = 30;
                            var0 = var1.bind(var2)(var0);
                            _fun103957_ip = 487;
                            continue _fun103957;
                        case 143:
                            var3 = _closure2_slot6;
                            var2 = var3.set;
                            var11 = _closure1_slot0;
                            var12 = _closure1_slot2;
                            var14 = 7;
                            var1 = var12[var14];
                            var10 = undefined;
                            var4 = var11.bind(var10)(var1);
                            var1 = var4.withTiming;
                            var13 = _closure1_slot9;
                            var5 = 1;
                            var1 = var1.bind(var4)(var5, var13);
                            var1 = var2.bind(var3)(var1);
                            var3 = _closure2_slot7;
                            var2 = var3.set;
                            var1 = var12[var14];
                            var4 = var11.bind(var10)(var1);
                            var1 = var4.withTiming;
                            var6 = _closure1_slot7;
                            var1 = var1.bind(var4)(var5, var6);
                            var1 = var2.bind(var3)(var1);
                            var3 = _closure2_slot8;
                            var2 = var3.set;
                            var1 = var12[var14];
                            var5 = var11.bind(var10)(var1);
                            var4 = var5.withTiming;
                            var1 = 0;
                            var1 = var4.bind(var5)(var1, var6);
                            var1 = var2.bind(var3)(var1);
                            var2 = _closure2_slot5;
                            var1 = var2.set;
                            var3 = 8;
                            var3 = var12[var3];
                            var7 = var11.bind(var10)(var3);
                            var6 = var7.withSpring;
                            var18 = _closure1_slot11;
                            var4 = function(arg0) { // Original name: n, environment: var3
                                _fun103958: for (var _fun103958_ip = 0;;) switch (_fun103958_ip) {
                                    case 0:
                                        var0 = arg0;
                                        if (!var0) {
                                            _fun103958_ip = 312;
                                            continue _fun103958
                                        }
                                    case 9:
                                        var3 = _closure2_slot7;
                                        var2 = var3.set;
                                        var14 = _closure1_slot0;
                                        var15 = _closure1_slot2;
                                        var12 = 3;
                                        var1 = var15[var12];
                                        var13 = undefined;
                                        var7 = var14.bind(var13)(var1);
                                        var4 = var7.withDelay;
                                        var6 = 7;
                                        var1 = var15[var6];
                                        var9 = var14.bind(var13)(var1);
                                        var8 = var9.withTiming;
                                        var5 = _closure1_slot8;
                                        var1 = 0;
                                        var1 = var8.bind(var9)(var1, var5);
                                        var5 = 1000;
                                        var1 = var4.bind(var7)(var5, var1);
                                        var1 = var2.bind(var3)(var1);
                                        var3 = _closure2_slot6;
                                        var2 = var3.set;
                                        var1 = var15[var12];
                                        var7 = var14.bind(var13)(var1);
                                        var4 = var7.withDelay;
                                        var1 = var15[var6];
                                        var10 = var14.bind(var13)(var1);
                                        var9 = var10.withTiming;
                                        var8 = _closure1_slot9;
                                        var1 = 0.5;
                                        var1 = var9.bind(var10)(var1, var8);
                                        var1 = var4.bind(var7)(var5, var1);
                                        var1 = var2.bind(var3)(var1);
                                        var2 = _closure2_slot5;
                                        var1 = var2.set;
                                        var3 = var15[var12];
                                        var4 = var14.bind(var13)(var3);
                                        var3 = var4.withDelay;
                                        var6 = var15[var6];
                                        var10 = var14.bind(var13)(var6);
                                        var9 = var10.withTiming;
                                        var18 = _closure1_slot10;
                                        var7 = function(arg0) { // Original name: n, environment: var6
                                            _fun103959: for (var _fun103959_ip = 0;;) switch (_fun103959_ip) {
                                                case 0:
                                                    var0 = arg0;
                                                    if (!var0) {
                                                        _fun103959_ip = 52;
                                                        continue _fun103959
                                                    }
                                                case 6:
                                                    var2 = _closure1_slot0;
                                                    var1 = _closure1_slot2;
                                                    var0 = 3;
                                                    var0 = var1[var0];
                                                    var1 = undefined;
                                                    var3 = var2.bind(var1)(var0);
                                                    var2 = var3.runOnJS;
                                                    var0 = _closure2_slot9;
                                                    var0 = var2.bind(var3)(var0);
                                                    var0 = var0.bind(var1)();
                                                case 52:
                                                    var0 = undefined;
                                                    return var0;
                                            }
                                        };
                                        var6 = {};
                                        var12 = var15[var12];
                                        var12 = var14.bind(var13)(var12);
                                        var12 = var12.runOnJS;
                                        var6.runOnJS = var12;
                                        var11 = _closure2_slot9;
                                        var6.finishAnimationCallback = var11;
                                        var7.__closure = var6;
                                        var6 = 5242616772399.0;
                                        var7.__workletHash = var6;
                                        var0 = _closure1_slot18;
                                        var7.__initData = var0;
                                        var19 = -8;
                                        var17 = 'respect-motion-settings';
                                        var20 = var10;
                                        var16 = var7;
                                        var0 = var20[var9](var19, var18, var17, var16, var15);
                                        var0 = var3.bind(var4)(var5, var0);
                                        var0 = var1.bind(var2)(var0);
                                    case 312:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var3 = {};
                            var9 = _closure2_slot7;
                            var3.opacity = var9;
                            var9 = 3;
                            var15 = var12[var9];
                            var15 = var11.bind(var10)(var15);
                            var15 = var15.withDelay;
                            var3.withDelay = var15;
                            var14 = var12[var14];
                            var14 = var11.bind(var10)(var14);
                            var14 = var14.withTiming;
                            var3.withTiming = var14;
                            var14 = _closure1_slot8;
                            var3.OPACITY_OUT_CONFIG = var14;
                            var14 = _closure2_slot6;
                            var3.scale = var14;
                            var3.SCALE_CONFIG = var13;
                            var13 = _closure2_slot5;
                            var3.right = var13;
                            var13 = _closure1_slot10;
                            var3.TRANSLATE_OUT_CONFIG = var13;
                            var9 = var12[var9];
                            var9 = var11.bind(var10)(var9);
                            var9 = var9.runOnJS;
                            var3.runOnJS = var9;
                            var8 = _closure2_slot9;
                            var3.finishAnimationCallback = var8;
                            var4.__closure = var3;
                            var3 = 9570116008915.0;
                            var4.__workletHash = var3;
                            var0 = _closure1_slot17;
                            var4.__initData = var0;
                            var19 = 12;
                            var17 = 'respect-motion-settings';
                            var20 = var7;
                            var16 = var4;
                            var0 = var20[var6](var19, var18, var17, var16, var15);
                            var0 = var1.bind(var2)(var0);
                        case 487:
                            var0 = undefined;
                            return var0;
                    }
                };
                var7 = {};
                var7.animate = var20;
                var20 = var15[var5];
                var20 = var14.bind(var3)(var20);
                var20 = var20.runOnJS;
                var7.runOnJS = var20;
                var7.finishAnimationCallback = var19;
                var7.scale = var18;
                var18 = 7;
                var18 = var15[var18];
                var18 = var14.bind(var3)(var18);
                var18 = var18.withTiming;
                var7.withTiming = var18;
                var18 = _closure1_slot9;
                var7.SCALE_CONFIG = var18;
                var7.opacity = var17;
                var17 = _closure1_slot7;
                var7.OPACITY_CONFIG = var17;
                var7.buttonOpacity = var12;
                var7.right = var9;
                var9 = 8;
                var9 = var15[var9];
                var9 = var14.bind(var3)(var9);
                var9 = var9.withSpring;
                var7.withSpring = var9;
                var9 = _closure1_slot11;
                var7.SPRING_CONFIG = var9;
                var9 = var15[var5];
                var9 = var14.bind(var3)(var9);
                var9 = var9.withDelay;
                var7.withDelay = var9;
                var9 = _closure1_slot8;
                var7.OPACITY_OUT_CONFIG = var9;
                var9 = _closure1_slot10;
                var7.TRANSLATE_OUT_CONFIG = var9;
                var0.__closure = var7;
                var7 = 6602847520399.0;
                var0.__workletHash = var7;
                var7 = _closure1_slot16;
                var0.__initData = var7;
                var0 = var2.bind(var6)(var1, var0);
                var2 = _closure1_slot6;
                var1 = _closure1_slot4;
                var0 = {};
                var7 = _closure1_slot5;
                var6 = _closure1_slot1;
                var4 = var15[var5];
                var4 = var6.bind(var3)(var4);
                var9 = var4.View;
                var4 = {};
                var12 = 'none';
                var4.pointerEvents = var12;
                var17 = var16.icon;
                var12 = new Array(2);
                var12[0] = var17;
                var12[1] = var13;
                var4.style = var12;
                var12 = 9;
                var12 = var15[var12];
                var13 = var6.bind(var3)(var12);
                var12 = {};
                var17 = 10;
                var17 = var15[var17];
                var17 = var6.bind(var3)(var17);
                var12.source = var17;
                var16 = var16.icon;
                var16 = var16.color;
                var12.color = var16;
                var12 = var7.bind(var3)(var13, var12);
                var4.children = var12;
                var9 = var7.bind(var3)(var9, var4);
                var4 = new Array(2);
                var4[0] = var9;
                var5 = var15[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.View;
                var5 = {};
                var5.style = var8;
                var8 = 11;
                var8 = var15[var8];
                var8 = var14.bind(var3)(var8);
                var9 = var8.Button;
                var8 = {
                    'variant': 'secondary',
                    'size': null,
                    'grow': false
                };
                var8.size = var11;
                var11 = 12;
                var12 = var15[var11];
                var12 = var14.bind(var3)(var12);
                var13 = var12.intl;
                var12 = var13.string;
                var11 = var15[var11];
                var11 = var14.bind(var3)(var11);
                var11 = var11.t;
                var11 = var11.OYkgVk;
                var11 = var12.bind(var13)(var11);
                var8.text = var11;
                var8.onPress = var10;
                var8 = var7.bind(var3)(var9, var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.ContactSuggestionActions = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 3679, 1297, 671, 13240, 4056, 4040, 4045, 10046, 4043, 1234, 2]);