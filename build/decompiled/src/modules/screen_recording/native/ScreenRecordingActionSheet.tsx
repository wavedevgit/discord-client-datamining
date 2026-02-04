// modules/screen_recording/native/ScreenRecordingActionSheet.tsx
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
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.useScreenRecordingStore;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot5 = var6;
    var3 = var3.jsxs;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'justifyContent': 'center',
        'alignItems': 'center'
    };
    var9 = 5;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var8.gap = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var8.paddingVertical = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_8;
    var8.paddingHorizontal = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.xl;
    var8.borderRadius = var11;
    var3.container = var8;
    var8 = {};
    var11 = 'absolute';
    var8.position = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_8;
    var8.top = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_8;
    var8.right = var11;
    var3.closeButton = var8;
    var8 = {
        'display': 'flex',
        'flexDirection': 'row'
    };
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_8;
    var8.gap = var9;
    var3.buttonContainer = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/screen_recording/native/ScreenRecordingActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun100137: for (var _fun100137_ip = 0;;) switch (_fun100137_ip) {
            case 0:
                var0 = _closure1_slot7;
                var4 = undefined;
                var17 = var0.bind(var4)();
                var2 = _closure1_slot4;
                var0 = function(arg0) { // Environment: var13
                    var0 = arg0;
                    var0 = var0.isUploading;
                    return var0;
                };
                var14 = var2.bind(var4)(var0);
                var0 = function(arg0) { // Environment: var13
                    var0 = arg0;
                    var0 = var0.isCompleted;
                    return var0;
                };
                var3 = var2.bind(var4)(var0);
                var0 = function(arg0) { // Environment: var13
                    var0 = arg0;
                    var0 = var0.currentStep;
                    return var0;
                };
                var7 = var2.bind(var4)(var0);
                var0 = function(arg0) { // Environment: var13
                    var0 = arg0;
                    var0 = var0.currentSurveyConfig;
                    return var0;
                };
                var5 = var2.bind(var4)(var0);
                var0 = function(arg0) { // Environment: var13
                    var0 = arg0;
                    var0 = var0.nextStep;
                    return var0;
                };
                var0 = var2.bind(var4)(var0);
                var _closure2_slot0 = var0;
                var0 = function(arg0) { // Environment: var13
                    var0 = arg0;
                    var0 = var0.completeActionSheet;
                    return var0;
                };
                var0 = var2.bind(var4)(var0);
                var _closure2_slot1 = var0;
                var0 = null;
                var6 = var0 == var5;
                var2 = undefined;
                if (var6) {
                    _fun100137_ip = 116;
                    continue _fun100137
                }
            case 110:
                var2 = var5.steps;
            case 116:
                if (!(var0 == var2)) {
                    _fun100137_ip = 124;
                    continue _fun100137
                }
            case 120:
                var2 = new Array(0);
            case 124:
                var6 = var2.length;
                var6 = var6 > var7;
                var19 = null;
                if (!var6) {
                    _fun100137_ip = 142;
                    continue _fun100137
                }
            case 138:
                var19 = var2[var7];
            case 142:
                var6 = var0 == var5;
                var2 = undefined;
                if (var6) {
                    _fun100137_ip = 162;
                    continue _fun100137
                }
            case 151:
                var6 = var5.useIsStepCompleted;
                var2 = var6.bind(var5)(var7);
            case 162:
                var15 = var0 != var2;
                if (!var15) {
                    _fun100137_ip = 172;
                    continue _fun100137
                }
            case 169:
                var15 = var2;
            case 172:
                var6 = var0 == var5;
                var2 = undefined;
                if (var6) {
                    _fun100137_ip = 189;
                    continue _fun100137
                }
            case 181:
                var2 = var5.completedTitle;
            case 189:
                var6 = var0 != var2;
                var11 = 'Complete';
                if (!var6) {
                    _fun100137_ip = 205;
                    continue _fun100137
                }
            case 202:
                var11 = var2;
            case 205:
                var6 = var0 == var5;
                var2 = undefined;
                if (var6) {
                    _fun100137_ip = 222;
                    continue _fun100137
                }
            case 214:
                var2 = var5.completedInstructions;
            case 222:
                var5 = var0 != var2;
                var18 = 'Thanks for your feedback!';
                if (!var5) {
                    _fun100137_ip = 238;
                    continue _fun100137
                }
            case 235:
                var18 = var2;
            case 238:
                if (!(var0 == var19)) {
                    _fun100137_ip = 249;
                    continue _fun100137
                }
            case 242:
                if (!(var0 != var3)) {
                    _fun100137_ip = 803;
                    continue _fun100137
                }
            case 249:
                var7 = _closure1_slot6;
                var6 = _closure1_slot3;
                var2 = {};
                var5 = var17.container;
                var2.style = var5;
                var10 = _closure1_slot5;
                var12 = _closure1_slot0;
                var16 = _closure1_slot2;
                var9 = 6;
                var5 = var16[var9];
                var5 = var12.bind(var4)(var5);
                var8 = var5.Text;
                var5 = {};
                var22 = 'heading-xl/bold';
                var5.variant = var22;
                var5.children = var11;
                var8 = var10.bind(var4)(var8, var5);
                var5 = new Array(3);
                var5[0] = var8;
                var8 = var16[var9];
                var8 = var12.bind(var4)(var8);
                var11 = var8.Text;
                var8 = {};
                var20 = 'text-md/normal';
                var8.variant = var20;
                var8.children = var18;
                var8 = var10.bind(var4)(var11, var8);
                var5[1] = var8;
                var11 = 7;
                var8 = var16[var11];
                var8 = var12.bind(var4)(var8);
                var18 = var8.Button;
                var8 = {};
                var8.disabled = var14;
                var21 = 'Done';
                var8.text = var21;
                var8.loading = var14;
                var21 = function() {
                    var1 = _closure2_slot1;
                    var0 = undefined;
                    var1 = var1.bind(var0)();
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 8;
                    var1 = var3[var1];
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.hideActionSheet;
                    var1 = var1.bind(var2)();
                    return var0;
                };
                var8.onPress = var21;
                var8 = var10.bind(var4)(var18, var8);
                var5[2] = var8;
                var2.children = var5;
                var2 = var7.bind(var4)(var6, var2);
                var5 = {};
                var8 = var17.container;
                var5.style = var8;
                var8 = 9;
                var8 = var16[var8];
                var8 = var12.bind(var4)(var8);
                var18 = var8.PressableOpacity;
                var8 = {};
                var21 = var17.closeButton;
                var8.style = var21;
                var21 = function() {
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 8;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var0 = var1.hideActionSheet;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var8.onPress = var21;
                var21 = 'close';
                var8.accessibilityLabel = var21;
                var21 = 10;
                var21 = var16[var21];
                var21 = var12.bind(var4)(var21);
                var23 = var21.XSmallIcon;
                var21 = {
                    'size': 'md',
                    'color': 'text-default'
                };
                var21 = var10.bind(var4)(var23, var21);
                var8.children = var21;
                var18 = var10.bind(var4)(var18, var8);
                var8 = new Array(4);
                var8[0] = var18;
                var18 = var16[var9];
                var18 = var12.bind(var4)(var18);
                var21 = var18.Text;
                var18 = {};
                var18.variant = var22;
                var22 = var19.title;
                var18.children = var22;
                var18 = var10.bind(var4)(var21, var18);
                var8[1] = var18;
                var9 = var16[var9];
                var9 = var12.bind(var4)(var9);
                var18 = var9.Text;
                var9 = {};
                var9.variant = var20;
                var21 = _closure1_slot1;
                var20 = 11;
                var20 = var16[var20];
                var21 = var21.bind(var4)(var20);
                var20 = var21.parse;
                var19 = var19.instructions;
                var19 = var20.bind(var21)(var19);
                var9.children = var19;
                var9 = var10.bind(var4)(var18, var9);
                var8[2] = var9;
                var9 = {};
                var17 = var17.buttonContainer;
                var9.style = var17;
                var11 = var16[var11];
                var11 = var12.bind(var4)(var11);
                var12 = var11.Button;
                var11 = {};
                var15 = !var15;
                if (var15) {
                    _fun100137_ip = 695;
                    continue _fun100137
                }
            case 692:
                var15 = var14;
            case 695:
                var11.disabled = var15;
                var15 = 'Next';
                var11.text = var15;
                var11.loading = var14;
                var13 = function() {
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var11.onPress = var13;
                var11 = var10.bind(var4)(var12, var11);
                var9.children = var11;
                var9 = var10.bind(var4)(var6, var9);
                var8[3] = var9;
                var5.children = var8;
                var5 = var7.bind(var4)(var6, var5);
                if (!var3) {
                    _fun100137_ip = 759;
                    continue _fun100137
                }
            case 756:
                var5 = var2;
            case 759:
                var3 = _closure1_slot5;
                var2 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 12;
                var1 = var6[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.ActionSheet;
                var1 = {};
                var1.children = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 803:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 13037, 33, 1297, 671, 3941, 4084, 3278, 4902, 4732, 4781, 5208, 2]);