// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var0 = ['ref'];
    var _closure1_slot2 = var0;
    var7 = global;
    var8 = var7.Object;
    var3 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var6[var0];
    var0 = undefined;
    var1 = var5.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var3 = var6[var1];
    var1 = metroImportAll;
    var1 = var1.bind(var0)(var3);
    var1 = 2;
    var3 = var6[var1];
    var1 = require;
    var1 = var1.bind(var0)(var3);
    var1 = var1.jsx;
    var _closure1_slot4 = var1;
    var1 = 3;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = function(arg0) { // Original name: Button, environment: var4
        _fun4380: for (var _fun4380_ip = 0;;) switch (_fun4380_ip) {
            case 0:
                var2 = arg0;
                var5 = var2.ref;
                var1 = _closure1_slot3;
                var0 = _closure1_slot2;
                var3 = undefined;
                var2 = var1.bind(var3)(var2, var0);
                var24 = var2.accessibilityLabel;
                var19 = var2.accessibilityState;
                var31 = var2["aria-busy"];
                var30 = var2["aria-checked"];
                var28 = var2["aria-disabled"];
                var10 = var2["aria-expanded"];
                var23 = var2["aria-label"];
                var9 = var2["aria-selected"];
                var20 = var2.importantForAccessibility;
                var32 = var2.color;
                var8 = var2.onPress;
                var6 = var2.touchSoundDisabled;
                var1 = var2.title;
                var18 = var2.hasTVPreferredFocus;
                var17 = var2.nextFocusDown;
                var16 = var2.nextFocusForward;
                var15 = var2.nextFocusLeft;
                var14 = var2.nextFocusRight;
                var13 = var2.nextFocusUp;
                var12 = var2.testID;
                var27 = var2.accessible;
                var26 = var2.accessibilityActions;
                var22 = var2.accessibilityHint;
                var21 = var2.accessibilityLanguage;
                var25 = var2.onAccessibilityAction;
                var0 = _closure1_slot6;
                var0 = var0.button;
                var7 = new Array(1);
                var7[0] = var0;
                var0 = _closure1_slot6;
                var0 = var0.text;
                var11 = new Array(1);
                var11[0] = var0;
                if (!var32) {
                    _fun4380_ip = 226;
                    continue _fun4380
                }
            case 210:
                var29 = var7.push;
                var0 = {};
                var0.backgroundColor = var32;
                var0 = var29.bind(var7)(var0);
            case 226:
                var29 = {};
                var0 = null;
                if (!(var0 == var31)) {
                    _fun4380_ip = 252;
                    continue _fun4380
                }
            case 234:
                var33 = var0 == var19;
                var32 = undefined;
                if (var33) {
                    _fun4380_ip = 249;
                    continue _fun4380
                }
            case 243:
                var32 = var19.busy;
            case 249:
                var31 = var32;
            case 252:
                var29.busy = var31;
                if (!(var0 == var30)) {
                    _fun4380_ip = 279;
                    continue _fun4380
                }
            case 261:
                var32 = var0 == var19;
                var31 = undefined;
                if (var32) {
                    _fun4380_ip = 276;
                    continue _fun4380
                }
            case 270:
                var31 = var19.checked;
            case 276:
                var30 = var31;
            case 279:
                var29.checked = var30;
                if (!(var0 == var28)) {
                    _fun4380_ip = 305;
                    continue _fun4380
                }
            case 288:
                var31 = var0 == var19;
                var30 = undefined;
                if (var31) {
                    _fun4380_ip = 302;
                    continue _fun4380
                }
            case 297:
                var30 = var19.disabled;
            case 302:
                var28 = var30;
            case 305:
                var29.disabled = var28;
                if (!(var0 == var10)) {
                    _fun4380_ip = 331;
                    continue _fun4380
                }
            case 313:
                var30 = var0 == var19;
                var28 = undefined;
                if (var30) {
                    _fun4380_ip = 328;
                    continue _fun4380
                }
            case 322:
                var28 = var19.expanded;
            case 328:
                var10 = var28;
            case 331:
                var29.expanded = var10;
                if (!(var0 == var9)) {
                    _fun4380_ip = 358;
                    continue _fun4380
                }
            case 340:
                var28 = var0 == var19;
                var10 = undefined;
                if (var28) {
                    _fun4380_ip = 355;
                    continue _fun4380
                }
            case 349:
                var10 = var19.selected;
            case 355:
                var9 = var10;
            case 358:
                var29.selected = var9;
                var9 = var2.disabled;
                if (!(var0 == var9)) {
                    _fun4380_ip = 388;
                    continue _fun4380
                }
            case 372:
                var9 = var0 == var29;
                var10 = undefined;
                if (var9) {
                    _fun4380_ip = 386;
                    continue _fun4380
                }
            case 381:
                var10 = var29.disabled;
            case 386:
                _fun4380_ip = 393;
                continue _fun4380;
            case 388:
                var10 = var2.disabled;
            case 393:
                var2 = var0 == var29;
                var0 = undefined;
                if (var2) {
                    _fun4380_ip = 407;
                    continue _fun4380
                }
            case 402:
                var0 = var29.disabled;
            case 407:
                var19 = var29;
                if (!(var10 !== var0)) {
                    _fun4380_ip = 442;
                    continue _fun4380
                }
            case 414:
                var0 = global;
                var28 = var0.Object;
                var9 = var28.assign;
                var2 = {};
                var2.disabled = var10;
                var0 = {};
                var19 = var9.bind(var28)(var0, var29, var2);
            case 442:
                if (!var10) {
                    _fun4380_ip = 485;
                    continue _fun4380
                }
            case 445:
                var2 = var7.push;
                var0 = _closure1_slot6;
                var0 = var0.buttonDisabled;
                var0 = var2.bind(var7)(var0);
                var2 = var11.push;
                var0 = _closure1_slot6;
                var0 = var0.textDisabled;
                var0 = var2.bind(var11)(var0);
            case 485:
                var2 = _closure1_slot0;
                var9 = _closure1_slot1;
                var0 = 4;
                var0 = var9[var0];
                var9 = var2.bind(var3)(var0);
                var2 = 'string';
                var0 = typeof var1;
                var2 = var2 === var0;
                var0 = 'The title prop of a Button must be a string';
                var0 = var9.bind(var3)(var2, var0);
                var0 = var1.toUpperCase;
                var9 = var0.bind(var1)();
                var2 = _closure1_slot4;
                var1 = _closure1_slot5;
                var0 = {};
                var0.accessible = var27;
                var0.accessibilityActions = var26;
                var0.onAccessibilityAction = var25;
                if (var23) {
                    _fun4380_ip = 568;
                    continue _fun4380
                }
            case 565:
                var23 = var24;
            case 568:
                var0.accessibilityLabel = var23;
                var0.accessibilityHint = var22;
                var0.accessibilityLanguage = var21;
                var21 = 'button';
                var0.accessibilityRole = var21;
                var0.accessibilityState = var19;
                var19 = 'no-hide-descendants';
                var21 = 'no';
                if (!(var21 !== var20)) {
                    _fun4380_ip = 612;
                    continue _fun4380
                }
            case 609:
                var19 = var20;
            case 612:
                var0.importantForAccessibility = var19;
                var0.hasTVPreferredFocus = var18;
                var0.nextFocusDown = var17;
                var0.nextFocusForward = var16;
                var0.nextFocusLeft = var15;
                var0.nextFocusRight = var14;
                var0.nextFocusUp = var13;
                var0.testID = var12;
                var0.disabled = var10;
                var0.onPress = var8;
                var0.touchSoundDisabled = var6;
                var0.ref = var5;
                var6 = _closure1_slot4;
                var8 = _closure1_slot0;
                var12 = _closure1_slot1;
                var4 = 5;
                var4 = var12[var4];
                var5 = var8.bind(var3)(var4);
                var4 = {};
                var4.style = var7;
                var7 = 6;
                var7 = var12[var7];
                var8 = var8.bind(var3)(var7);
                var7 = {};
                var7.style = var11;
                var7.disabled = var10;
                var7.children = var9;
                var7 = var6.bind(var3)(var8, var7);
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var3 = 'Button';
    var1.displayName = var3;
    var3 = 7;
    var3 = var6[var3];
    var6 = var5.bind(var0)(var3);
    var5 = var6.create;
    var3 = {};
    var8 = {
        'elevation': 4,
        'backgroundColor': '#2196F3',
        'borderRadius': 2
    };
    var3.button = var8;
    var10 = var7.Object;
    var9 = var10.assign;
    var8 = {
        'textAlign': 'center',
        'margin': 8
    };
    var7 = {
        'color': 'white',
        'fontWeight': '500'
    };
    var7 = var9.bind(var10)(var8, var7);
    var3.text = var7;
    var7 = {
        'elevation': 0,
        'backgroundColor': '#dfdfdf'
    };
    var3.buttonDisabled = var7;
    var7 = {};
    var8 = '#a1a1a1';
    var7.color = var8;
    var3.textDisabled = var7;
    var3 = var5.bind(var6)(var3);
    var _closure1_slot6 = var3;
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [29, 31, 33, 281, 44, 112, 289, 253]);