// modules/main_tabs_v2/native/friends/components/ActionStatusSubLabel.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var7 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot3 = var7;
    var3 = var3.jsxs;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = function() { // Environment: var1
        var0 = {};
        var1 = {};
        var2 = 'hidden';
        var1.overflow = var2;
        var0.container = var1;
        var1 = {};
        var2 = 'absolute';
        var1.position = var2;
        var0.actionStatus = var1;
        return var0;
    };
    var3 = var7.bind(var8)(var3);
    var _closure1_slot5 = var3;
    var3 = function arg0() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        var3 = var1.AccessibilityAnnouncer;
        var2 = var3.announce;
        var1 = arg0;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var6.bind(var0)(var3);
    var6 = var7.createAnimatedComponent;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Text;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = {};
    var6 = 'function ActionStatusSubLabelTsx1(){const{hasSecondLine,actioned,lineHeight,fontScale,animate,withTiming,interpolate}=this.__closure;const currentlyHasSecondLine=hasSecondLine&&!actioned.get();const lineHeightValue=lineHeight*fontScale;const currentLineHeightValue=currentlyHasSecondLine?lineHeightValue*2:lineHeightValue;return{height:!animate||!actioned.get()?currentLineHeightValue:withTiming(interpolate(actioned.get()?1:0,[0,1],[currentlyHasSecondLine?lineHeightValue*2:lineHeightValue,lineHeightValue]))};}';
    var3.code = var6;
    var _closure1_slot8 = var3;
    var3 = {};
    var6 = 'function ActionStatusSubLabelTsx2(){const{actioned,lineHeight,fontScale,animate,withTiming,interpolate}=this.__closure;const translateYValue=actioned.get()?lineHeight*fontScale:0;return{transform:[{translateY:!animate?translateYValue:withTiming(interpolate(actioned.get()?1:0,[0,1],[0,translateYValue]))}]};}';
    var3.code = var6;
    var _closure1_slot9 = var3;
    var3 = {};
    var6 = 'function ActionStatusSubLabelTsx3(){const{actioned,lineHeight,fontScale,animate,withTiming,interpolate}=this.__closure;const translateYValue=actioned.get()?0:-lineHeight*fontScale;return{transform:[{translateY:!animate?translateYValue:withTiming(interpolate(actioned.get()?1:0,[0,1],[translateYValue,0]))}],opacity:!animate?actioned.get()?1:0:withTiming(actioned.get()?1:0)};}';
    var3.code = var6;
    var _closure1_slot10 = var3;
    var3 = {};
    var6 = 'function ActionStatusSubLabelTsx4(){const{actioned}=this.__closure;return actioned.get();}';
    var3.code = var6;
    var _closure1_slot11 = var3;
    var3 = {};
    var6 = 'function ActionStatusSubLabelTsx5(actioned,actionedPrev){const{actionStatusAccessibilityLabel,runOnJS,announceActioned}=this.__closure;const isActioned=actioned&&actionedPrev===false;if(!isActioned||actionStatusAccessibilityLabel==null){return;}runOnJS(announceActioned)(actionStatusAccessibilityLabel);}';
    var3.code = var6;
    var _closure1_slot12 = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/friends/components/ActionStatusSubLabel.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun103312: for (var _fun103312_ip = 0;;) switch (_fun103312_ip) {
            case 0:
                var0 = arg0;
                var24 = var0.lineHeight;
                var3 = undefined;
                if (!(var24 === var3)) {
                    _fun103312_ip = 20;
                    continue _fun103312
                }
            case 17:
                var24 = 16;
            case 20:
                var _closure2_slot0 = var24;
                var14 = var0.textVariant;
                if (!(var14 === var3)) {
                    _fun103312_ip = 40;
                    continue _fun103312
                }
            case 34:
                var14 = 'text-xs/medium';
            case 40:
                var21 = var0.actioned;
                var _closure2_slot1 = var21;
                var16 = var0.label;
                var17 = var0.secondaryLabel;
                var8 = var0.actionStatus;
                var19 = var0.actionStatusAccessibilityLabel;
                var _closure2_slot2 = var19;
                var13 = var0.maxFontSizeMultiplier;
                var22 = var0.animate;
                var _closure2_slot3 = var22;
                var _closure2_slot4 = var3;
                var _closure2_slot5 = var3;
                var0 = null;
                var6 = var0 != var17;
                _closure2_slot4 = var6;
                var20 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 6;
                var0 = var4[var0];
                var2 = var20.bind(var3)(var0);
                var0 = var2.useFontScale;
                var23 = var0.bind(var2)();
                _closure2_slot5 = var23;
                var0 = _closure1_slot5;
                var10 = var0.bind(var3)();
                var0 = 4;
                var2 = var4[var0];
                var9 = var20.bind(var3)(var2);
                var7 = var9.useAnimatedStyle;
                var2 = function() {
                    _fun103313: for (var _fun103313_ip = 0;;) switch (_fun103313_ip) {
                        case 0:
                            var5 = _closure2_slot4;
                            if (!var5) {
                                _fun103313_ip = 26;
                                continue _fun103313
                            }
                        case 10:
                            var1 = _closure2_slot1;
                            var0 = var1.get;
                            var0 = var0.bind(var1)();
                            var5 = !var0;
                        case 26:
                            var1 = _closure2_slot0;
                            var0 = _closure2_slot5;
                            var2 = var1 * var0;
                            var4 = var2;
                            if (!var5) {
                                _fun103313_ip = 51;
                                continue _fun103313
                            }
                        case 44:
                            var0 = 2;
                            var4 = var0 * var2;
                        case 51:
                            var0 = {};
                            var3 = _closure2_slot3;
                            var1 = var4;
                            if (!var3) {
                                _fun103313_ip = 201;
                                continue _fun103313
                            }
                        case 66:
                            var7 = _closure2_slot1;
                            var3 = var7.get;
                            var3 = var3.bind(var7)();
                            var1 = var4;
                            if (!var3) {
                                _fun103313_ip = 201;
                                continue _fun103313
                            }
                        case 85:
                            var9 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var3 = 7;
                            var3 = var10[var3];
                            var8 = undefined;
                            var4 = var9.bind(var8)(var3);
                            var3 = var4.withTiming;
                            var7 = 4;
                            var7 = var10[var7];
                            var8 = var9.bind(var8)(var7);
                            var7 = var8.interpolate;
                            var9 = _closure2_slot1;
                            var6 = var9.get;
                            var9 = var6.bind(var9)();
                            var6 = 0;
                            if (!var9) {
                                _fun103313_ip = 154;
                                continue _fun103313
                            }
                        case 151:
                            var6 = 1;
                        case 154:
                            var9 = var2;
                            if (!var5) {
                                _fun103313_ip = 167;
                                continue _fun103313
                            }
                        case 160:
                            var5 = 2;
                            var9 = var5 * var2;
                        case 167:
                            var5 = new Array(2);
                            var5[0] = var9;
                            var5[1] = var2;
                            var2 = [0, 1];
                            var2 = var7.bind(var8)(var6, var2, var5);
                            var1 = var3.bind(var4)(var2);
                        case 201:
                            var0.height = var1;
                            return var0;
                    }
                };
                var11 = {};
                var11.hasSecondLine = var6;
                var11.actioned = var21;
                var11.lineHeight = var24;
                var11.fontScale = var23;
                var11.animate = var22;
                var15 = 7;
                var12 = var4[var15];
                var12 = var20.bind(var3)(var12);
                var12 = var12.withTiming;
                var11.withTiming = var12;
                var12 = var4[var0];
                var12 = var20.bind(var3)(var12);
                var12 = var12.interpolate;
                var11.interpolate = var12;
                var2.__closure = var11;
                var11 = 14210085997091.0;
                var2.__workletHash = var11;
                var11 = _closure1_slot8;
                var2.__initData = var11;
                var7 = var7.bind(var9)(var2);
                var2 = var4[var0];
                var11 = var20.bind(var3)(var2);
                var9 = var11.useAnimatedStyle;
                var2 = function() {
                    _fun103314: for (var _fun103314_ip = 0;;) switch (_fun103314_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = var1.get;
                            var0 = var0.bind(var1)();
                            var3 = 0;
                            if (!var0) {
                                _fun103314_ip = 33;
                                continue _fun103314
                            }
                        case 21:
                            var1 = _closure2_slot0;
                            var0 = _closure2_slot5;
                            var3 = var1 * var0;
                        case 33:
                            var0 = {};
                            var2 = {};
                            var4 = _closure2_slot3;
                            var1 = var3;
                            if (!var4) {
                                _fun103314_ip = 152;
                                continue _fun103314
                            }
                        case 47:
                            var10 = _closure1_slot0;
                            var11 = _closure1_slot2;
                            var4 = 7;
                            var4 = var11[var4];
                            var8 = undefined;
                            var5 = var10.bind(var8)(var4);
                            var4 = var5.withTiming;
                            var7 = 4;
                            var7 = var11[var7];
                            var8 = var10.bind(var8)(var7);
                            var7 = var8.interpolate;
                            var10 = _closure2_slot1;
                            var6 = var10.get;
                            var6 = var6.bind(var10)();
                            var9 = 0;
                            if (!var6) {
                                _fun103314_ip = 116;
                                continue _fun103314
                            }
                        case 113:
                            var9 = 1;
                        case 116:
                            var6 = [0];
                            var6[1] = var3;
                            var3 = [0, 1];
                            var3 = var7.bind(var8)(var9, var3, var6);
                            var1 = var4.bind(var5)(var3);
                        case 152:
                            var2.translateY = var1;
                            var1 = new Array(1);
                            var1[0] = var2;
                            var0.transform = var1;
                            return var0;
                    }
                };
                var12 = {};
                var12.actioned = var21;
                var12.lineHeight = var24;
                var12.fontScale = var23;
                var12.animate = var22;
                var18 = var4[var15];
                var18 = var20.bind(var3)(var18);
                var18 = var18.withTiming;
                var12.withTiming = var18;
                var18 = var4[var0];
                var18 = var20.bind(var3)(var18);
                var18 = var18.interpolate;
                var12.interpolate = var18;
                var2.__closure = var12;
                var12 = 1040596522101.0;
                var2.__workletHash = var12;
                var12 = _closure1_slot9;
                var2.__initData = var12;
                var18 = var9.bind(var11)(var2);
                var2 = var4[var0];
                var11 = var20.bind(var3)(var2);
                var9 = var11.useAnimatedStyle;
                var2 = function() {
                    _fun103315: for (var _fun103315_ip = 0;;) switch (_fun103315_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = var1.get;
                            var0 = var0.bind(var1)();
                            var4 = 0;
                            var3 = 0;
                            if (var0) {
                                _fun103315_ip = 38;
                                continue _fun103315
                            }
                        case 23:
                            var0 = _closure2_slot0;
                            var1 = -var0;
                            var0 = _closure2_slot5;
                            var3 = var1 * var0;
                        case 38:
                            var0 = {};
                            var2 = {};
                            var6 = _closure2_slot3;
                            var1 = var3;
                            if (!var6) {
                                _fun103315_ip = 155;
                                continue _fun103315
                            }
                        case 52:
                            var10 = _closure1_slot0;
                            var11 = _closure1_slot2;
                            var6 = 7;
                            var6 = var11[var6];
                            var9 = undefined;
                            var7 = var10.bind(var9)(var6);
                            var6 = var7.withTiming;
                            var8 = 4;
                            var8 = var11[var8];
                            var11 = var10.bind(var9)(var8);
                            var10 = var11.interpolate;
                            var9 = _closure2_slot1;
                            var8 = var9.get;
                            var8 = var8.bind(var9)();
                            var9 = 0;
                            if (!var8) {
                                _fun103315_ip = 121;
                                continue _fun103315
                            }
                        case 118:
                            var9 = 1;
                        case 121:
                            var8 = new Array(2);
                            var8[0] = var3;
                            var8[1] = var4;
                            var3 = [0, 1];
                            var3 = var10.bind(var11)(var9, var3, var8);
                            var1 = var6.bind(var7)(var3);
                        case 155:
                            var2.translateY = var1;
                            var1 = new Array(1);
                            var1[0] = var2;
                            var0.transform = var1;
                            var1 = _closure2_slot3;
                            if (var1) {
                                _fun103315_ip = 202;
                                continue _fun103315
                            }
                        case 179:
                            var2 = _closure2_slot1;
                            var1 = var2.get;
                            var2 = var1.bind(var2)();
                            var1 = 0;
                            if (!var2) {
                                _fun103315_ip = 200;
                                continue _fun103315
                            }
                        case 197:
                            var1 = 1;
                        case 200:
                            _fun103315_ip = 258;
                            continue _fun103315;
                        case 202:
                            var6 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 7;
                            var3 = var3[var2];
                            var2 = undefined;
                            var3 = var6.bind(var2)(var3);
                            var2 = var3.withTiming;
                            var6 = _closure2_slot1;
                            var5 = var6.get;
                            var5 = var5.bind(var6)();
                            var4 = 0;
                            if (!var5) {
                                _fun103315_ip = 253;
                                continue _fun103315
                            }
                        case 250:
                            var4 = 1;
                        case 253:
                            var1 = var2.bind(var3)(var4);
                        case 258:
                            var0.opacity = var1;
                            return var0;
                    }
                };
                var12 = {};
                var12.actioned = var21;
                var12.lineHeight = var24;
                var12.fontScale = var23;
                var12.animate = var22;
                var15 = var4[var15];
                var15 = var20.bind(var3)(var15);
                var15 = var15.withTiming;
                var12.withTiming = var15;
                var15 = var4[var0];
                var15 = var20.bind(var3)(var15);
                var15 = var15.interpolate;
                var12.interpolate = var15;
                var2.__closure = var12;
                var12 = 2183035188794.0;
                var2.__workletHash = var12;
                var12 = _closure1_slot10;
                var2.__initData = var12;
                var11 = var9.bind(var11)(var2);
                var2 = var4[var0];
                var12 = var20.bind(var3)(var2);
                var9 = var12.useAnimatedReaction;
                var2 = function() {
                    var1 = _closure2_slot1;
                    var0 = var1.get;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var15 = {};
                var15.actioned = var21;
                var2.__closure = var15;
                var15 = 9609826744629.0;
                var2.__workletHash = var15;
                var15 = _closure1_slot11;
                var2.__initData = var15;
                var1 = function arg0, arg1() {
                    _fun103317: for (var _fun103317_ip = 0;;) switch (_fun103317_ip) {
                        case 0:
                            var0 = arg0;
                            if (!var0) {
                                _fun103317_ip = 15;
                                continue _fun103317
                            }
                        case 6:
                            var2 = false;
                            var1 = arg1;
                            var0 = var2 === var1;
                        case 15:
                            if (!var0) {
                                _fun103317_ip = 31;
                                continue _fun103317
                            }
                        case 18:
                            var2 = _closure2_slot2;
                            var1 = null;
                            var0 = var1 != var2;
                        case 31:
                            if (!var0) {
                                _fun103317_ip = 85;
                                continue _fun103317
                            }
                        case 34:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 4;
                            var1 = var2[var1];
                            var2 = undefined;
                            var3 = var3.bind(var2)(var1);
                            var1 = var3.runOnJS;
                            var0 = _closure1_slot6;
                            var1 = var1.bind(var3)(var0);
                            var0 = _closure2_slot2;
                            var0 = var1.bind(var2)(var0);
                        case 85:
                            var0 = undefined;
                            return var0;
                    }
                };
                var15 = {};
                var15.actionStatusAccessibilityLabel = var19;
                var19 = var4[var0];
                var19 = var20.bind(var3)(var19);
                var19 = var19.runOnJS;
                var15.runOnJS = var19;
                var19 = _closure1_slot6;
                var15.announceActioned = var19;
                var1.__closure = var15;
                var15 = 14141240445417.0;
                var1.__workletHash = var15;
                var15 = _closure1_slot12;
                var1.__initData = var15;
                var1 = var9.bind(var12)(var2, var1);
                var2 = _closure1_slot4;
                var1 = _closure1_slot1;
                var0 = var4[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.View;
                var0 = {};
                var9 = var10.container;
                var4 = new Array(2);
                var4[0] = var9;
                var4[1] = var7;
                var0.style = var4;
                var15 = _closure1_slot3;
                var7 = _closure1_slot7;
                var4 = {};
                var4.variant = var14;
                var4.maxFontSizeMultiplier = var13;
                var12 = 'text-default';
                var4.color = var12;
                var4.style = var18;
                var9 = 1;
                var4.lineClamp = var9;
                var4.children = var16;
                var7 = var15.bind(var3)(var7, var4);
                var4 = new Array(3);
                var4[0] = var7;
                if (!var6) {
                    _fun103312_ip = 817;
                    continue _fun103312
                }
            case 775:
                var16 = _closure1_slot3;
                var15 = _closure1_slot7;
                var7 = {};
                var7.variant = var14;
                var7.maxFontSizeMultiplier = var13;
                var7.style = var18;
                var7.color = var12;
                var7.lineClamp = var9;
                var7.children = var17;
                var6 = var16.bind(var3)(var15, var7);
            case 817:
                var4[1] = var6;
                var7 = _closure1_slot3;
                var6 = _closure1_slot7;
                var5 = {};
                var5.variant = var14;
                var5.maxFontSizeMultiplier = var13;
                var5.color = var12;
                var12 = var10.actionStatus;
                var10 = new Array(2);
                var10[0] = var12;
                var10[1] = var11;
                var5.style = var10;
                var5.lineClamp = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.ActionStatusSubLabel = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 1297, 3119, 3679, 3900, 4049, 4056, 2]);