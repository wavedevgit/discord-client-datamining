// modules/guild_automod/native/AutomodSubmitFeedbackModal.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        var0 = arg0;
        var11 = var0.onClose;
        var0 = _closure1_slot9;
        var3 = undefined;
        var7 = var0.bind(var3)();
        var2 = _closure1_slot7;
        var16 = _closure1_slot0;
        var12 = _closure1_slot2;
        var0 = 7;
        var0 = var12[var0];
        var0 = var16.bind(var3)(var0);
        var1 = var0.SafeAreaPaddingView;
        var0 = {};
        var4 = true;
        var0.top = var4;
        var4 = var7.header;
        var0.style = var4;
        var6 = _closure1_slot7;
        var5 = _closure1_slot5;
        var4 = {};
        var7 = var7.closeButtonContainer;
        var4.style = var7;
        var9 = _closure1_slot7;
        var7 = 8;
        var7 = var12[var7];
        var7 = var16.bind(var3)(var7);
        var8 = var7.HeaderActionButton;
        var7 = {};
        var13 = 9;
        var14 = var12[var13];
        var14 = var16.bind(var3)(var14);
        var15 = var14.intl;
        var14 = var15.string;
        var13 = var12[var13];
        var13 = var16.bind(var3)(var13);
        var13 = var13.t;
        var13 = var13.cpT0Cq;
        var13 = var14.bind(var15)(var13);
        var7.accessibilityLabel = var13;
        var7.onPress = var11;
        var11 = _closure1_slot1;
        var10 = 10;
        var10 = var12[var10];
        var10 = var11.bind(var3)(var10);
        var7.source = var10;
        var7 = var9.bind(var3)(var8, var7);
        var4.children = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot10 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var1 = var0.feedback;
        var _closure2_slot0 = var1;
        var1 = var0.onChange;
        var _closure2_slot1 = var1;
        var11 = var0.onSubmit;
        var0 = _closure1_slot9;
        var3 = undefined;
        var9 = var0.bind(var3)();
        var _closure2_slot2 = var9;
        var15 = _closure1_slot0;
        var16 = _closure1_slot2;
        var0 = 11;
        var0 = var16[var0];
        var1 = var15.bind(var3)(var0);
        var0 = var1.generateFeedbackOptions;
        var18 = var0.bind(var1)();
        var _closure2_slot3 = var18;
        var14 = _closure1_slot1;
        var0 = 12;
        var0 = var16[var0];
        var0 = var14.bind(var3)(var0);
        var0 = var0.bind(var3)();
        var17 = var0.bottom;
        var0 = function arg0() {
            var3 = _closure1_slot7;
            var1 = _closure1_slot0;
            var2 = _closure1_slot2;
            var0 = 13;
            var0 = var2[var0];
            var2 = undefined;
            var0 = var1.bind(var2)(var0);
            var1 = var0.Text;
            var0 = {
                'style': null,
                'variant': 'text-md/semibold',
                'color': 'interactive-text-active'
            };
            var4 = _closure2_slot2;
            var4 = var4.formRow;
            var0.style = var4;
            var4 = arg0;
            var0.children = var4;
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var _closure2_slot4 = var0;
        var2 = _closure1_slot8;
        var1 = _closure1_slot5;
        var0 = {};
        var4 = var9.container;
        var0.style = var4;
        var6 = _closure1_slot7;
        var4 = 14;
        var4 = var16[var4];
        var4 = var15.bind(var3)(var4);
        var5 = var4.LegacyText;
        var4 = {};
        var7 = var9.headerTitle;
        var4.style = var7;
        var12 = 9;
        var7 = var16[var12];
        var7 = var15.bind(var3)(var7);
        var19 = var7.intl;
        var13 = var19.string;
        var7 = var16[var12];
        var7 = var15.bind(var3)(var7);
        var7 = var7.t;
        var7 = var7["7bdzNo"];
        var7 = var13.bind(var19)(var7);
        var4.children = var7;
        var5 = var6.bind(var3)(var5, var4);
        var4 = new Array(4);
        var4[0] = var5;
        var7 = _closure1_slot7;
        var5 = 13;
        var5 = var16[var5];
        var5 = var15.bind(var3)(var5);
        var6 = var5.Text;
        var5 = {
            'style': null,
            'variant': 'text-sm/medium',
            'color': 'text-default'
        };
        var13 = var9.headerSubtitle;
        var5.style = var13;
        var13 = var16[var12];
        var13 = var15.bind(var3)(var13);
        var20 = var13.intl;
        var19 = var20.string;
        var13 = var16[var12];
        var13 = var15.bind(var3)(var13);
        var13 = var13.t;
        var13 = var13.Lbpk6m;
        var13 = var19.bind(var20)(var13);
        var5.children = var13;
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var7 = _closure1_slot7;
        var6 = _closure1_slot5;
        var5 = {};
        var13 = var9.formBody;
        var5.style = var13;
        var13 = var18.map;
        var10 = function(arg0, arg1) { // Environment: var10
            _fun79197: for (var _fun79197_ip = 0;;) switch (_fun79197_ip) {
                case 0:
                    var0 = arg0;
                    var12 = var0.name;
                    var4 = var0.value;
                    var _closure3_slot0 = var4;
                    var3 = _closure1_slot8;
                    var0 = _closure1_slot4;
                    var2 = var0.Fragment;
                    var1 = {};
                    var9 = _closure1_slot7;
                    var11 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var10 = 15;
                    var5 = var13[var10];
                    var0 = undefined;
                    var5 = var11.bind(var0)(var5);
                    var8 = var5.FormRow;
                    var5 = {};
                    var6 = function() {
                        var2 = _closure2_slot1;
                        var1 = _closure3_slot0;
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var5.onPress = var6;
                    var14 = _closure1_slot7;
                    var6 = 16;
                    var6 = var13[var6];
                    var6 = var11.bind(var0)(var6);
                    var13 = var6.RadioIndicator;
                    var11 = {};
                    var15 = _closure2_slot0;
                    var15 = var15 === var4;
                    var11.active = var15;
                    var15 = _closure2_slot2;
                    var15 = var15.radioIndicator;
                    var11.style = var15;
                    var11 = var14.bind(var0)(var13, var11);
                    var5.trailing = var11;
                    var11 = _closure2_slot4;
                    var11 = var11.bind(var0)(var12);
                    var5.label = var11;
                    var8 = var9.bind(var0)(var8, var5);
                    var5 = new Array(2);
                    var5[0] = var8;
                    var6 = _closure2_slot3;
                    var8 = var6.length;
                    var6 = 1;
                    var8 = var8 - var6;
                    var6 = arg1;
                    var6 = var6 < var8;
                    if (!var6) {
                        _fun79197_ip = 236;
                        continue _fun79197
                    }
                case 201:
                    var9 = _closure1_slot7;
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var7 = var7[var10];
                    var7 = var8.bind(var0)(var7);
                    var8 = var7.FormDivider;
                    var7 = {};
                    var6 = var9.bind(var0)(var8, var7);
                case 236:
                    var5[1] = var6;
                    var1.children = var5;
                    var0 = var3.bind(var0)(var2, var1, var4);
                    return var0;
            }
        };
        var10 = var13.bind(var18)(var10);
        var5.children = var10;
        var5 = var7.bind(var3)(var6, var5);
        var4[2] = var5;
        var7 = _closure1_slot7;
        var6 = _closure1_slot5;
        var5 = {};
        var10 = var9.submitButtonContainer;
        var9 = new Array(2);
        var9[0] = var10;
        var10 = {};
        var13 = 16;
        var13 = var17 + var13;
        var10.paddingBottom = var13;
        var9[1] = var10;
        var5.style = var9;
        var10 = _closure1_slot7;
        var13 = 17;
        var8 = var16[var13];
        var9 = var14.bind(var3)(var8);
        var8 = {};
        var13 = var16[var13];
        var13 = var14.bind(var3)(var13);
        var13 = var13.Sizes;
        var13 = var13.MEDIUM;
        var8.size = var13;
        var13 = var16[var12];
        var13 = var15.bind(var3)(var13);
        var14 = var13.intl;
        var13 = var14.string;
        var12 = var16[var12];
        var12 = var15.bind(var3)(var12);
        var12 = var12.t;
        var12 = var12.Z6DZZ6;
        var12 = var13.bind(var14)(var12);
        var8.text = var12;
        var8.onPress = var11;
        var8 = var10.bind(var3)(var9, var8);
        var5.children = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[3] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot11 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var11 = 0;
    var3 = var5[var11];
    var0 = undefined;
    var3 = var10.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var12 = 2;
    var3 = var5[var12];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AnalyticEvents;
    var _closure1_slot6 = var6;
    var14 = var3.Fonts;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot7 = var6;
    var3 = var3.jsxs;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'flex': 1,
        'paddingHorizontal': 16,
        'paddingVertical': 0,
        'backgroundColor': null,
        'flexDirection': 'column',
        'height': '100%',
        'paddingTop': 8
    };
    var9 = 6;
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOW;
    var8.backgroundColor = var13;
    var3.container = var8;
    var8 = {
        'flexDirection': 'row',
        'justifyContent': 'flex-end',
        'paddingVertical': 8
    };
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOW;
    var8.backgroundColor = var13;
    var3.header = var8;
    var8 = {
        'fontSize': 24,
        'fontFamily': null,
        'textAlign': 'center',
        'color': null,
        'lineHeight': 30
    };
    var13 = 24;
    var14 = var14.PRIMARY_BOLD;
    var8.fontFamily = var14;
    var14 = var5[var9];
    var14 = var10.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.MOBILE_TEXT_HEADING_PRIMARY;
    var8.color = var14;
    var3.headerTitle = var8;
    var8 = {
        'textAlign': 'center',
        'marginTop': 8
    };
    var3.headerSubtitle = var8;
    var8 = {};
    var14 = 14;
    var8.marginVertical = var14;
    var3.closeButtonContainer = var8;
    var8 = {};
    var8.marginTop = var13;
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.sm;
    var8.borderRadius = var13;
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_SURFACE_HIGH;
    var8.backgroundColor = var13;
    var3.formBody = var8;
    var8 = {};
    var8.paddingVertical = var12;
    var3.formRow = var8;
    var8 = {};
    var8.marginRight = var11;
    var3.radioIndicator = var8;
    var8 = {
        'position': 'absolute',
        'bottom': 0,
        'left': 0,
        'right': 0,
        'paddingHorizontal': 16,
        'paddingVertical': 16
    };
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_BASE_LOW;
    var8.backgroundColor = var9;
    var3.submitButtonContainer = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot9 = var3;
    var3 = 20;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_automod/native/AutomodSubmitFeedbackModal.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var0 = arg0;
        var10 = var0.onCloseModal;
        var _closure2_slot0 = var10;
        var9 = var0.automodDecision;
        var _closure2_slot1 = var9;
        var4 = _closure1_slot1;
        var6 = _closure1_slot2;
        var1 = 12;
        var1 = var6[var1];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var1 = var1.bind(var3)();
        var4 = var1.top;
        var8 = _closure1_slot4;
        var7 = var8.useState;
        var1 = _closure1_slot0;
        var5 = 11;
        var5 = var6[var5];
        var5 = var1.bind(var3)(var5);
        var5 = var5.Feedback;
        var5 = var5.BUG;
        var8 = var7.bind(var8)(var5);
        var7 = _closure1_slot3;
        var5 = 2;
        var7 = var7.bind(var3)(var8, var5);
        var5 = 0;
        var11 = var7[var5];
        var _closure2_slot2 = var11;
        var5 = 1;
        var5 = var7[var5];
        var _closure2_slot3 = var5;
        var8 = _closure1_slot4;
        var7 = var8.useMemo;
        var5 = new Array(3);
        var5[0] = var11;
        var5[1] = var10;
        var5[2] = var9;
        var2 = function() { // Environment: var2
            var2 = {};
            var3 = _closure2_slot0;
            var2.onCloseModal = var3;
            var1 = _closure2_slot2;
            var2.feedback = var1;
            var1 = function arg0() {
                var2 = _closure2_slot3;
                var0 = undefined;
                var1 = arg0;
                var1 = var2.bind(var0)(var1);
                return var0;
            };
            var2.onChange = var1;
            var1 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 18;
                var2 = var2[var0];
                var0 = undefined;
                var5 = var3.bind(var0)(var2);
                var4 = var5.trackWithMetadata;
                var1 = _closure1_slot6;
                var3 = var1.GUILD_AUTOMOD_FEEDBACK;
                var2 = {};
                var6 = _closure2_slot2;
                var2.feedback_type = var6;
                var6 = _closure2_slot1;
                var7 = var6.messageId;
                var2.message_id = var7;
                var7 = var6.messageContent;
                var2.content = var7;
                var6 = var6.decisionId;
                var2.decision_id = var6;
                var2 = var4.bind(var5)(var3, var2);
                var1 = _closure2_slot0;
                var1 = var1.bind(var0)();
                return var0;
            };
            var2.onSubmit = var1;
            var1 = function arg0() {
                var0 = arg0;
                var2 = var0.onCloseModal;
                var _closure4_slot0 = var2;
                var2 = var0.feedback;
                var _closure4_slot1 = var2;
                var2 = var0.onChange;
                var _closure4_slot2 = var2;
                var0 = var0.onSubmit;
                var _closure4_slot3 = var0;
                var0 = {};
                var2 = {
                    'ignoreKeyboard': true,
                    'title': ''
                };
                var3 = function() {
                    var3 = _closure1_slot7;
                    var2 = _closure1_slot10;
                    var1 = {};
                    var0 = _closure4_slot0;
                    var1.onClose = var0;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var2.customNavbar = var3;
                var3 = function() {
                    var0 = null;
                    return var0;
                };
                var2.headerLeft = var3;
                var1 = function() {
                    var3 = _closure1_slot7;
                    var2 = _closure1_slot11;
                    var1 = {};
                    var4 = _closure4_slot1;
                    var1.feedback = var4;
                    var4 = _closure4_slot2;
                    var1.onChange = var4;
                    var0 = _closure4_slot3;
                    var1.onSubmit = var0;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var2.render = var1;
                var1 = 'SUBMIT_FEEDBACK';
                var0[var1] = var2;
                return var0;
            };
            var0 = undefined;
            var0 = var1.bind(var0)(var2);
            return var0;
        };
        var5 = var7.bind(var8)(var2, var5);
        var2 = _closure1_slot7;
        var0 = 19;
        var0 = var6[var0];
        var0 = var1.bind(var3)(var0);
        var1 = var0.Navigator;
        var0 = {};
        var0.screens = var5;
        var5 = 'SUBMIT_FEEDBACK';
        var0.initialRouteName = var5;
        var0.headerStatusBarHeight = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 660, 33, 1297, 671, 4699, 5286, 1234, 5287, 4506, 1568, 3902, 4841, 5342, 7103, 4838, 4268, 5750, 2]);