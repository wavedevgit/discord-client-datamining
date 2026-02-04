// modules/polls/native/EditPollCreationImageAltTextModal.tsx
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
    var11 = 1;
    var6 = var5[var11];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.TouchableOpacity;
    var _closure1_slot5 = var6;
    var3 = var3.View;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.MAX_POLL_ANSWER_LENGTH;
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
    var9 = 6;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BASE_LOW;
    var8.backgroundColor = var12;
    var8.flex = var11;
    var3.container = var8;
    var8 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'justifyContent': 'space-between',
        'padding': 18,
        'paddingTop': 10
    };
    var3.header = var8;
    var8 = {};
    var8.borderBottomWidth = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.INTERACTIVE_BACKGROUND_HOVER;
    var8.borderColor = var11;
    var3.separator = var8;
    var8 = {
        'flex': 1,
        'justifyContent': 'center'
    };
    var3.contentContainer = var8;
    var8 = {
        'borderRadius': null,
        'justifyContent': 'center',
        'alignItems': 'center',
        'alignSelf': 'center',
        'overflow': 'hidden',
        'aspectRatio': 1
    };
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.lg;
    var8.borderRadius = var11;
    var3.imageContainer = var8;
    var8 = {};
    var11 = 16;
    var8.paddingHorizontal = var11;
    var3.formContainer = var8;
    var8 = {};
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.REDESIGN_CHAT_INPUT_BACKGROUND;
    var8.backgroundColor = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.radii;
    var9 = var9.lg;
    var8.borderRadius = var9;
    var3.textInput = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot10 = var3;
    var3 = 19;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/polls/native/EditPollCreationImageAltTextModal.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun108466: for (var _fun108466_ip = 0;;) switch (_fun108466_ip) {
            case 0:
                var2 = arg0;
                var7 = var2.channelId;
                var1 = var2.answer;
                var5 = var2.onSave;
                var _closure2_slot0 = var5;
                var6 = var2.imageSize;
                var3 = undefined;
                var _closure2_slot1 = var3;
                var2 = _closure1_slot10;
                var22 = var2.bind(var3)();
                var4 = _closure1_slot1;
                var8 = _closure1_slot2;
                var2 = 7;
                var2 = var8[var2];
                var4 = var4.bind(var3)(var2);
                var31 = var1.localCreationAnswerId;
                var30 = var1.image;
                var33 = undefined;
                var32 = var7;
                var29 = var6;
                var28 = var6;
                var1 = var33[var4](var32, var31, var30, var29, var28, var27);
                var8 = var1.renderImage;
                var7 = var1.upload;
                var4 = _closure1_slot4;
                var2 = var4.useState;
                var1 = null;
                var9 = var1 == var7;
                var6 = undefined;
                if (var9) {
                    _fun108466_ip = 133;
                    continue _fun108466
                }
            case 128:
                var6 = var7.description;
            case 133:
                var7 = var1 != var6;
                var1 = '';
                if (!var7) {
                    _fun108466_ip = 147;
                    continue _fun108466
                }
            case 144:
                var1 = var6;
            case 147:
                var4 = var2.bind(var4)(var1);
                var2 = _closure1_slot3;
                var1 = 2;
                var2 = var2.bind(var3)(var4, var1);
                var1 = 0;
                var24 = var2[var1];
                _closure2_slot1 = var24;
                var1 = 1;
                var23 = var2[var1];
                var4 = _closure1_slot4;
                var2 = var4.useCallback;
                var1 = new Array(2);
                var1[0] = var5;
                var1[1] = var24;
                var0 = function() { // Environment: var0
                    _fun108467: for (var _fun108467_ip = 0;;) switch (_fun108467_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun108467_ip = 28;
                                continue _fun108467
                            }
                        case 13:
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot1;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                        case 28:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 8;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.closeEditPollCreationImageAltTextModal;
                            var1 = var1.bind(var2)();
                            return var0;
                    }
                };
                var14 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot9;
                var21 = _closure1_slot0;
                var15 = _closure1_slot2;
                var0 = 9;
                var0 = var15[var0];
                var0 = var21.bind(var3)(var0);
                var1 = var0.SafeAreaPaddingView;
                var0 = {};
                var19 = true;
                var0.top = var19;
                var4 = var22.container;
                var0.style = var4;
                var9 = _closure1_slot6;
                var4 = {};
                var5 = var22.header;
                var4.style = var5;
                var13 = _closure1_slot8;
                var7 = _closure1_slot5;
                var5 = {
                    'onPress': null,
                    'activeOpacity': 0.5,
                    'accessibilityRole': 'button'
                };
                var6 = 8;
                var6 = var15[var6];
                var6 = var21.bind(var3)(var6);
                var6 = var6.closeEditPollCreationImageAltTextModal;
                var5.onPress = var6;
                var11 = 0.5;
                var18 = 10;
                var6 = var15[var18];
                var6 = var21.bind(var3)(var6);
                var12 = var6.intl;
                var10 = var12.string;
                var6 = var15[var18];
                var6 = var21.bind(var3)(var6);
                var6 = var6.t;
                var6 = var6.cpT0Cq;
                var6 = var10.bind(var12)(var6);
                var5.accessibilityLabel = var6;
                var12 = _closure1_slot1;
                var6 = 11;
                var6 = var15[var6];
                var10 = var12.bind(var3)(var6);
                var6 = {};
                var16 = 12;
                var16 = var15[var16];
                var16 = var12.bind(var3)(var16);
                var6.source = var16;
                var6 = var13.bind(var3)(var10, var6);
                var5.children = var6;
                var6 = var13.bind(var3)(var7, var5);
                var5 = new Array(3);
                var5[0] = var6;
                var10 = 13;
                var6 = var15[var10];
                var6 = var21.bind(var3)(var6);
                var16 = var6.Text;
                var6 = {
                    'variant': 'redesign/heading-18/bold',
                    'color': 'mobile-text-heading-primary'
                };
                var17 = var15[var18];
                var17 = var21.bind(var3)(var17);
                var26 = var17.intl;
                var25 = var26.string;
                var17 = var15[var18];
                var17 = var21.bind(var3)(var17);
                var17 = var17.t;
                var17 = var17.Cq44Rg;
                var17 = var25.bind(var26)(var17);
                var6.children = var17;
                var6 = var13.bind(var3)(var16, var6);
                var5[1] = var6;
                var6 = {};
                var6.onPress = var14;
                var6.activeOpacity = var11;
                var10 = var15[var10];
                var10 = var21.bind(var3)(var10);
                var11 = var10.Text;
                var10 = {
                    'variant': 'text-md/medium',
                    'color': 'text-brand'
                };
                var14 = var15[var18];
                var14 = var21.bind(var3)(var14);
                var17 = var14.intl;
                var16 = var17.string;
                var14 = var15[var18];
                var14 = var21.bind(var3)(var14);
                var14 = var14.t;
                var14 = var14["R3BPH+"];
                var14 = var16.bind(var17)(var14);
                var10.children = var14;
                var10 = var13.bind(var3)(var11, var10);
                var6.children = var10;
                var6 = var13.bind(var3)(var7, var6);
                var5[2] = var6;
                var4.children = var5;
                var5 = var2.bind(var3)(var9, var4);
                var4 = new Array(3);
                var4[0] = var5;
                var5 = {};
                var6 = var22.separator;
                var5.style = var6;
                var5 = var13.bind(var3)(var9, var5);
                var4[1] = var5;
                var5 = 14;
                var5 = var15[var5];
                var6 = var12.bind(var3)(var5);
                var5 = {};
                var7 = var22.contentContainer;
                var5.style = var7;
                var7 = {};
                var10 = var22.imageContainer;
                var7.style = var10;
                var7.children = var8;
                var8 = var13.bind(var3)(var9, var7);
                var7 = new Array(2);
                var7[0] = var8;
                var8 = {};
                var10 = var22.formContainer;
                var8.style = var10;
                var11 = 15;
                var10 = var15[var11];
                var16 = var12.bind(var3)(var10);
                var10 = {};
                var14 = 27;
                var10.size = var14;
                var16 = var13.bind(var3)(var16, var10);
                var10 = new Array(4);
                var10[0] = var16;
                var16 = 16;
                var16 = var15[var16];
                var17 = var12.bind(var3)(var16);
                var16 = {};
                var25 = var15[var18];
                var25 = var21.bind(var3)(var25);
                var27 = var25.intl;
                var26 = var27.string;
                var25 = var15[var18];
                var25 = var21.bind(var3)(var25);
                var25 = var25.t;
                var25 = var25["/2Gnoa"];
                var25 = var26.bind(var27)(var25);
                var16.children = var25;
                var16 = var13.bind(var3)(var17, var16);
                var10[1] = var16;
                var16 = 17;
                var16 = var15[var16];
                var16 = var21.bind(var3)(var16);
                var17 = var16.FormInput;
                var16 = {
                    'showTopContainer': false,
                    'showBorder': false,
                    'multiline': false
                };
                var16.value = var24;
                var16.onChange = var23;
                var23 = 18;
                var23 = var15[var23];
                var23 = var21.bind(var3)(var23);
                var23 = var23.ClearButtonVisibility;
                var23 = var23.WITH_CONTENT;
                var16.clearButtonVisibility = var23;
                var22 = var22.textInput;
                var16.style = var22;
                var22 = 'none';
                var16.textContentType = var22;
                var20 = _closure1_slot7;
                var16.maxLength = var20;
                var16.autoFocus = var19;
                var16.autoCorrect = var19;
                var19 = var15[var18];
                var19 = var21.bind(var3)(var19);
                var20 = var19.intl;
                var19 = var20.string;
                var18 = var15[var18];
                var18 = var21.bind(var3)(var18);
                var18 = var18.t;
                var18 = var18["/2Gnoa"];
                var18 = var19.bind(var20)(var18);
                var16.accessibilityLabel = var18;
                var16 = var13.bind(var3)(var17, var16);
                var10[2] = var16;
                var11 = var15[var11];
                var12 = var12.bind(var3)(var11);
                var11 = {};
                var11.size = var14;
                var11 = var13.bind(var3)(var12, var11);
                var10[3] = var11;
                var8.children = var10;
                var8 = var2.bind(var3)(var9, var8);
                var7[1] = var8;
                var5.children = var7;
                var5 = var2.bind(var3)(var6, var5);
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 6608, 33, 1297, 671, 13995, 13997, 4734, 1234, 4086, 5323, 3941, 5772, 9282, 5930, 5378, 5407, 2]);