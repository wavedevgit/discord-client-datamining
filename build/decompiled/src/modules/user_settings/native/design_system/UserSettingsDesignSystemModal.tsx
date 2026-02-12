// modules/user_settings/native/design_system/UserSettingsDesignSystemModal.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var5;
    var0 = function() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 8;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.useNavigatorScreens;
        var1 = function() { // Environment: var0
            var0 = {};
            var2 = _closure1_slot10;
            var8 = var2.START;
            var2 = {};
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 7;
            var9 = var7[var4];
            var5 = undefined;
            var13 = var6.bind(var5)(var9);
            var11 = var13.getHeaderCloseButton;
            var12 = _closure1_slot1;
            var9 = 9;
            var10 = var7[var9];
            var10 = var12.bind(var5)(var10);
            var10 = var10.pop;
            var10 = var11.bind(var13)(var10);
            var2.headerLeft = var10;
            var10 = function() {
                var3 = _closure1_slot7;
                var9 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 10;
                var0 = var6[var0];
                var2 = undefined;
                var0 = var9.bind(var2)(var0);
                var1 = var0.HeaderActionButton;
                var0 = {};
                var5 = 11;
                var7 = var6[var5];
                var7 = var9.bind(var2)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var5 = var6[var5];
                var5 = var9.bind(var2)(var5);
                var5 = var5.t;
                var5 = var5["5Wxrcd"];
                var5 = var7.bind(var8)(var5);
                var0.text = var5;
                var5 = _closure1_slot1;
                var4 = 9;
                var4 = var6[var4];
                var4 = var5.bind(var2)(var4);
                var4 = var4.pop;
                var0.onPress = var4;
                var0 = var3.bind(var2)(var1, var0);
                return var0;
            };
            var2.headerRight = var10;
            var10 = function() {
                var3 = _closure1_slot7;
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 7;
                var0 = var2[var0];
                var2 = undefined;
                var0 = var1.bind(var2)(var0);
                var1 = var0.NavigatorHeader;
                var0 = {};
                var4 = _closure1_slot10;
                var4 = var4.START;
                var0.title = var4;
                var4 = 'I said come on fhqwhgads';
                var0.subtitle = var4;
                var0 = var3.bind(var2)(var1, var0);
                return var0;
            };
            var2.headerTitle = var10;
            var10 = function arg0, arg1() {
                var0 = arg1;
                var _closure4_slot0 = var0;
                var3 = _closure1_slot7;
                var2 = _closure1_slot19;
                var1 = {
                    'title': 'Come on fhqwhgads.',
                    'emoji': '😎',
                    'action': 'Everybody to the limit',
                    'onAction': null,
                    'secondaryAction': 'Maybe later',
                    'onSecondaryAction': null,
                    'disclaimer': 'I said come on fhqwhgads.'
                };
                var4 = function() {
                    var2 = _closure4_slot0;
                    var1 = var2.push;
                    var0 = _closure1_slot10;
                    var0 = var0.WHO_DAT;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1.onAction = var4;
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var0 = 9;
                var4 = var4[var0];
                var0 = undefined;
                var4 = var5.bind(var0)(var4);
                var4 = var4.pop;
                var1.onSecondaryAction = var4;
                var0 = var3.bind(var0)(var2, var1);
                return var0;
            };
            var2.render = var10;
            var0[var8] = var2;
            var2 = _closure1_slot10;
            var8 = var2.WHO_DAT;
            var2 = {};
            var10 = var7[var4];
            var11 = var6.bind(var5)(var10);
            var10 = var11.getHeaderBackButton;
            var10 = var10.bind(var11)();
            var2.headerLeft = var10;
            var10 = var7[var4];
            var13 = var6.bind(var5)(var10);
            var11 = var13.getHeaderCloseButton;
            var10 = var7[var9];
            var10 = var12.bind(var5)(var10);
            var10 = var10.pop;
            var10 = var11.bind(var13)(var10);
            var2.headerRight = var10;
            var10 = function() {
                var3 = _closure1_slot7;
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 7;
                var0 = var2[var0];
                var2 = undefined;
                var0 = var1.bind(var2)(var0);
                var1 = var0.NavigatorHeader;
                var0 = {};
                var4 = _closure1_slot10;
                var4 = var4.WHO_DAT;
                var0.title = var4;
                var0 = var3.bind(var2)(var1, var0);
                return var0;
            };
            var2.headerTitle = var10;
            var10 = function arg0, arg1() {
                var0 = arg1;
                var _closure4_slot0 = var0;
                var3 = _closure1_slot7;
                var2 = _closure1_slot19;
                var1 = {
                    'title': "Who's that?",
                    'emoji': '💿',
                    'action': "It's to the limit"
                };
                var4 = function() {
                    var2 = _closure4_slot0;
                    var1 = var2.push;
                    var0 = _closure1_slot10;
                    var0 = var0.EVERYBODY;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1.onAction = var4;
                var0 = _closure1_slot11;
                var1.children = var0;
                var0 = undefined;
                var0 = var3.bind(var0)(var2, var1);
                return var0;
            };
            var2.render = var10;
            var0[var8] = var2;
            var2 = _closure1_slot10;
            var8 = var2.EVERYBODY;
            var2 = {};
            var10 = var7[var4];
            var11 = var6.bind(var5)(var10);
            var10 = var11.getHeaderBackButton;
            var10 = var10.bind(var11)();
            var2.headerLeft = var10;
            var10 = var7[var4];
            var13 = var6.bind(var5)(var10);
            var11 = var13.getHeaderCloseButton;
            var10 = var7[var9];
            var10 = var12.bind(var5)(var10);
            var10 = var10.pop;
            var10 = var11.bind(var13)(var10);
            var2.headerRight = var10;
            var10 = function() {
                var3 = _closure1_slot7;
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 7;
                var0 = var2[var0];
                var2 = undefined;
                var0 = var1.bind(var2)(var0);
                var1 = var0.NavigatorHeader;
                var0 = {};
                var4 = _closure1_slot10;
                var4 = var4.EVERYBODY;
                var0.title = var4;
                var0 = var3.bind(var2)(var1, var0);
                return var0;
            };
            var2.headerTitle = var10;
            var10 = function arg0, arg1() {
                var1 = arg1;
                var _closure4_slot0 = var1;
                var3 = _closure1_slot7;
                var2 = _closure1_slot20;
                var1 = {};
                var0 = function() {
                    var2 = _closure4_slot0;
                    var1 = var2.push;
                    var0 = _closure1_slot10;
                    var0 = var0.JOCKIN;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1.onAction = var0;
                var0 = undefined;
                var0 = var3.bind(var0)(var2, var1);
                return var0;
            };
            var2.render = var10;
            var0[var8] = var2;
            var2 = _closure1_slot10;
            var8 = var2.JOCKIN;
            var2 = {};
            var10 = var7[var4];
            var11 = var6.bind(var5)(var10);
            var10 = var11.getHeaderBackButton;
            var10 = var10.bind(var11)();
            var2.headerLeft = var10;
            var10 = var7[var4];
            var11 = var6.bind(var5)(var10);
            var10 = var11.getHeaderCloseButton;
            var9 = var7[var9];
            var9 = var12.bind(var5)(var9);
            var9 = var9.pop;
            var9 = var10.bind(var11)(var9);
            var2.headerRight = var9;
            var9 = function() {
                var3 = _closure1_slot7;
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 7;
                var0 = var2[var0];
                var2 = undefined;
                var0 = var1.bind(var2)(var0);
                var1 = var0.NavigatorHeader;
                var0 = {};
                var4 = _closure1_slot10;
                var4 = var4.JOCKIN;
                var0.title = var4;
                var4 = "Tryin' to play like, you know me";
                var0.subtitle = var4;
                var0 = var3.bind(var2)(var1, var0);
                return var0;
            };
            var2.headerTitle = var9;
            var9 = function arg0, arg1() {
                var1 = arg1;
                var _closure4_slot0 = var1;
                var3 = _closure1_slot7;
                var2 = _closure1_slot19;
                var1 = {
                    'title': "I see you jockin' me.",
                    'emoji': '🔥',
                    'action': "I'm like come on fhqwhgads",
                    'onAction': null,
                    'disclaimer': "Tryin' to play like, you know me."
                };
                var0 = function() {
                    var2 = _closure4_slot0;
                    var1 = var2.push;
                    var0 = _closure1_slot10;
                    var0 = var0.LIMIT;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1.onAction = var0;
                var0 = undefined;
                var0 = var3.bind(var0)(var2, var1);
                return var0;
            };
            var2.render = var9;
            var0[var8] = var2;
            var1 = _closure1_slot10;
            var2 = var1.LIMIT;
            var1 = {};
            var4 = var7[var4];
            var5 = var6.bind(var5)(var4);
            var4 = var5.getHeaderBackButton;
            var4 = var4.bind(var5)();
            var1.headerLeft = var4;
            var4 = function() {
                var0 = _closure1_slot12;
                return var0;
            };
            var1.headerRight = var4;
            var4 = function() {
                var3 = _closure1_slot7;
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 7;
                var0 = var2[var0];
                var2 = undefined;
                var0 = var1.bind(var2)(var0);
                var1 = var0.NavigatorHeader;
                var0 = {};
                var4 = _closure1_slot10;
                var4 = var4.LIMIT;
                var0.title = var4;
                var0 = var3.bind(var2)(var1, var0);
                return var0;
            };
            var1.headerTitle = var4;
            var3 = function() {
                var3 = _closure1_slot7;
                var2 = _closure1_slot19;
                var1 = {
                    'title': 'Everybody to the limit.',
                    'emoji': '👏',
                    'action': 'Everybody come on fhqwhgads!',
                    'onAction': null,
                    'secondaryAction': 'Push that fh-h-h-h-wqhgad',
                    'onSecondaryAction': null,
                    'disclaimer': 'The cheat is to the limit.'
                };
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var0 = 9;
                var4 = var4[var0];
                var0 = undefined;
                var4 = var5.bind(var0)(var4);
                var4 = var4.pop;
                var1.onAction = var4;
                var4 = function() {
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 12;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.openURL;
                    var0 = 'https://www.youtube.com/watch?v=votBDwhTu1E';
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1.onSecondaryAction = var4;
                var0 = var3.bind(var0)(var2, var1);
                return var0;
            };
            var1.render = var3;
            var0[var2] = var1;
            return var0;
        };
        var0 = new Array(0);
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot16 = var0;
    var0 = function() {
        var0 = _closure1_slot16;
        var3 = undefined;
        var5 = var0.bind(var3)();
        var2 = _closure1_slot7;
        var1 = _closure1_slot0;
        var6 = _closure1_slot2;
        var0 = 13;
        var0 = var6[var0];
        var0 = var1.bind(var3)(var0);
        var1 = var0.Modal;
        var0 = {};
        var0.screens = var5;
        var4 = _closure1_slot10;
        var4 = var4.START;
        var0.initialRouteName = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot17 = var0;
    var0 = function() {
        var0 = _closure1_slot16;
        var3 = undefined;
        var6 = var0.bind(var3)();
        var5 = _closure1_slot4;
        var2 = var5.useMemo;
        var1 = function() { // Environment: var0
            var0 = _closure1_slot10;
            var2 = var0.START;
            var0 = new Array(5);
            var0[0] = var2;
            var2 = _closure1_slot10;
            var2 = var2.WHO_DAT;
            var0[1] = var2;
            var2 = _closure1_slot10;
            var2 = var2.EVERYBODY;
            var0[2] = var2;
            var2 = _closure1_slot10;
            var2 = var2.JOCKIN;
            var0[3] = var2;
            var1 = _closure1_slot10;
            var1 = var1.LIMIT;
            var0[4] = var1;
            return var0;
        };
        var0 = new Array(0);
        var5 = var2.bind(var5)(var1, var0);
        var2 = _closure1_slot7;
        var1 = _closure1_slot0;
        var7 = _closure1_slot2;
        var0 = 14;
        var0 = var7[var0];
        var0 = var1.bind(var3)(var0);
        var1 = var0.StepModal;
        var0 = {};
        var0.screens = var6;
        var0.steps = var5;
        var4 = _closure1_slot10;
        var4 = var4.START;
        var0.initialRouteName = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot18 = var0;
    var0 = function arg0() {
        _fun87229: for (var _fun87229_ip = 0;;) switch (_fun87229_ip) {
            case 0:
                var0 = arg0;
                var20 = var0.title;
                var25 = var0.emoji;
                var19 = var0.action;
                var18 = var0.onAction;
                var15 = var0.secondaryAction;
                var14 = var0.onSecondaryAction;
                var17 = var0.disclaimer;
                var5 = var0.footer;
                var9 = var0.children;
                var0 = _closure1_slot9;
                var3 = undefined;
                var21 = var0.bind(var3)();
                var2 = _closure1_slot8;
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var0 = 15;
                var0 = var8[var0];
                var0 = var6.bind(var3)(var0);
                var1 = var0.ModalScreen;
                var0 = {};
                var7 = _closure1_slot8;
                var4 = 16;
                var4 = var8[var4];
                var4 = var6.bind(var3)(var4);
                var6 = var4.ModalContent;
                var4 = {};
                var10 = null;
                var12 = var10 != var25;
                if (!var12) {
                    _fun87229_ip = 223;
                    continue _fun87229
                }
            case 132:
                var16 = _closure1_slot7;
                var13 = _closure1_slot5;
                var8 = {};
                var22 = var21.emojiContainer;
                var8.style = var22;
                var24 = _closure1_slot7;
                var23 = _closure1_slot0;
                var26 = _closure1_slot2;
                var22 = 17;
                var22 = var26[var22];
                var22 = var23.bind(var3)(var22);
                var23 = var22.Text;
                var22 = {};
                var26 = 'heading-xxl/medium';
                var22.variant = var26;
                var26 = var21.emoji;
                var22.style = var26;
                var22.children = var25;
                var22 = var24.bind(var3)(var23, var22);
                var8.children = var22;
                var12 = var16.bind(var3)(var13, var8);
            case 223:
                var8 = new Array(3);
                var8[0] = var12;
                var16 = _closure1_slot7;
                var13 = _closure1_slot0;
                var22 = _closure1_slot2;
                var12 = 17;
                var12 = var22[var12];
                var12 = var13.bind(var3)(var12);
                var13 = var12.Text;
                var12 = {
                    'accessibilityRole': 'header',
                    'variant': 'heading-xl/bold',
                    'color': 'mobile-text-heading-primary'
                };
                var21 = var21.title;
                var12.style = var21;
                var12.children = var20;
                var12 = var16.bind(var3)(var13, var12);
                var8[1] = var12;
                var8[2] = var9;
                var4.children = var8;
                var6 = var7.bind(var3)(var6, var4);
                var4 = new Array(2);
                var4[0] = var6;
                if (!(var10 == var5)) {
                    _fun87229_ip = 555;
                    continue _fun87229
                }
            case 326:
                var8 = _closure1_slot8;
                var7 = _closure1_slot0;
                var9 = _closure1_slot2;
                var6 = 18;
                var6 = var9[var6];
                var6 = var7.bind(var3)(var6);
                var7 = var6.ModalFooter;
                var6 = {};
                var12 = var10 != var17;
                if (!var12) {
                    _fun87229_ip = 407;
                    continue _fun87229
                }
            case 365:
                var16 = _closure1_slot7;
                var13 = _closure1_slot0;
                var20 = _closure1_slot2;
                var9 = 19;
                var9 = var20[var9];
                var9 = var13.bind(var3)(var9);
                var13 = var9.ModalDisclaimer;
                var9 = {};
                var9.children = var17;
                var12 = var16.bind(var3)(var13, var9);
            case 407:
                var9 = new Array(3);
                var9[0] = var12;
                var12 = var10 != var19;
                if (!var12) {
                    _fun87229_ip = 476;
                    continue _fun87229
                }
            case 422:
                var17 = _closure1_slot7;
                var16 = _closure1_slot0;
                var20 = _closure1_slot2;
                var13 = 20;
                var13 = var20[var13];
                var13 = var16.bind(var3)(var13);
                var16 = var13.ModalActionButton;
                var13 = {};
                var20 = 'primary';
                var13.variant = var20;
                var13.text = var19;
                var13.onPress = var18;
                var12 = var17.bind(var3)(var16, var13);
            case 476:
                var9[1] = var12;
                var10 = var10 != var15;
                if (!var10) {
                    _fun87229_ip = 541;
                    continue _fun87229
                }
            case 487:
                var13 = _closure1_slot7;
                var12 = _closure1_slot0;
                var16 = _closure1_slot2;
                var11 = 20;
                var11 = var16[var11];
                var11 = var12.bind(var3)(var11);
                var12 = var11.ModalActionButton;
                var11 = {};
                var16 = 'secondary';
                var11.variant = var16;
                var11.text = var15;
                var11.onPress = var14;
                var10 = var13.bind(var3)(var12, var11);
            case 541:
                var9[2] = var10;
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 555:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot19 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var10 = var0.onAction;
        var0 = _closure1_slot9;
        var3 = undefined;
        var8 = var0.bind(var3)();
        var2 = 'I said ooh ah fhqwhgads, I said ooh ah fhqhgads!';
        var1 = var2.split;
        var0 = ' ';
        var6 = var1.bind(var2)(var0);
        var _closure2_slot0 = var6;
        var2 = _closure1_slot4;
        var1 = var2.useState;
        var4 = var6.map;
        var0 = function() { // Environment: var11
            var0 = false;
            return var0;
        };
        var0 = var4.bind(var6)(var0);
        var2 = var1.bind(var2)(var0);
        var1 = _closure1_slot3;
        var0 = 2;
        var1 = var1.bind(var3)(var2, var0);
        var0 = 0;
        var13 = var1[var0];
        var0 = 1;
        var0 = var1[var0];
        var _closure2_slot1 = var0;
        var2 = _closure1_slot8;
        var1 = _closure1_slot19;
        var0 = {
            'title': 'Everybody come on fhqwhgads.',
            'emoji': '👏'
        };
        var7 = _closure1_slot7;
        var9 = _closure1_slot0;
        var12 = _closure1_slot2;
        var4 = 21;
        var4 = var12[var4];
        var4 = var9.bind(var3)(var4);
        var6 = var4.ModalFloatingAction;
        var4 = {};
        var15 = var13.some;
        var14 = function(arg0) { // Environment: var11
            var0 = arg0;
            return var0;
        };
        var14 = var15.bind(var13)(var14);
        var4.isVisible = var14;
        var14 = var8.screen;
        var14 = var14.backgroundColor;
        var4.floatingBackgroundColor = var14;
        var14 = 'Come on fhqwhgads';
        var4.text = var14;
        var4.onPress = var10;
        var4 = var7.bind(var3)(var6, var4);
        var0.footer = var4;
        var7 = _closure1_slot7;
        var6 = _closure1_slot5;
        var4 = {};
        var8 = var8.tableRows;
        var4.style = var8;
        var10 = _closure1_slot7;
        var8 = 22;
        var8 = var12[var8];
        var8 = var9.bind(var3)(var8);
        var9 = var8.TableRowGroup;
        var8 = {};
        var12 = false;
        var8.hasIcons = var12;
        var12 = var13.map;
        var11 = function(arg0, arg1) { // Environment: var11
            var4 = arg1;
            var _closure3_slot0 = var4;
            var3 = _closure1_slot7;
            var1 = _closure1_slot0;
            var2 = _closure1_slot2;
            var0 = 23;
            var0 = var2[var0];
            var2 = undefined;
            var0 = var1.bind(var2)(var0);
            var1 = var0.TableSwitchRow;
            var0 = {};
            var6 = _closure2_slot0;
            var6 = var6[var4];
            var0.label = var6;
            var6 = arg0;
            var0.value = var6;
            var5 = function arg0() {
                var0 = arg0;
                var _closure4_slot0 = var0;
                var2 = _closure2_slot1;
                var0 = undefined;
                var1 = function(arg0) { // Environment: var1
                    var2 = arg0;
                    var1 = var2.map;
                    var0 = function(arg0, arg1) { // Environment: var0
                        _fun87236: for (var _fun87236_ip = 0;;) switch (_fun87236_ip) {
                            case 0:
                                var0 = arg0;
                                var2 = _closure3_slot0;
                                var1 = arg1;
                                if (!(var1 === var2)) {
                                    _fun87236_ip = 24;
                                    continue _fun87236
                                }
                            case 17:
                                var0 = _closure4_slot0;
                            case 24:
                                return var0;
                        }
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1 = var2.bind(var0)(var1);
                return var0;
            };
            var0.onValueChange = var5;
            var0 = var3.bind(var2)(var1, var0, var4);
            return var0;
        };
        var11 = var12.bind(var13)(var11);
        var8.children = var11;
        var8 = var10.bind(var3)(var9, var8);
        var4.children = var8;
        var6 = var7.bind(var3)(var6, var4);
        var4 = new Array(2);
        var4[0] = var6;
        var5 = _closure1_slot13;
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot20 = var0;
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
    var3 = var12.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot5 = var6;
    var3 = var3.ScrollView;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot7 = var7;
    var3 = var3.jsxs;
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var6 = var8.createStyles;
    var3 = {};
    var10 = 16;
    var9 = {
        'flex': 1,
        'alignItems': 'center',
        'padding': 16,
        'gap': 16
    };
    var3.container = var9;
    var9 = {};
    var11 = 5;
    var13 = var5[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOW;
    var9.backgroundColor = var13;
    var3.screen = var9;
    var9 = {
        'alignItems': 'center',
        'justifyContent': 'center',
        'width': 80,
        'height': 80,
        'borderRadius': null,
        'backgroundColor': null,
        'marginBottom': 16
    };
    var13 = var5[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.round;
    var9.borderRadius = var13;
    var11 = var5[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_SURFACE_HIGH;
    var9.backgroundColor = var11;
    var3.emojiContainer = var9;
    var9 = {
        'fontSize': 48,
        'lineHeight': 80
    };
    var3.emoji = var9;
    var9 = {};
    var9.marginBottom = var10;
    var3.title = var9;
    var9 = {};
    var10 = '100%';
    var9.width = var10;
    var3.tableRows = var9;
    var3 = var6.bind(var8)(var3);
    var _closure1_slot9 = var3;
    var3 = {};
    var6 = 'Come on fhqwhgads';
    var3.START = var6;
    var6 = "Who's that?";
    var3.WHO_DAT = var6;
    var6 = 'Everybody come on fhqwhgads';
    var3.EVERYBODY = var6;
    var6 = "I see you jockin' me";
    var3.JOCKIN = var6;
    var6 = 'Everybody to the limit';
    var3.LIMIT = var6;
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.TextInput;
    var3 = {};
    var8 = 'My friend Jake';
    var3.placeholder = var8;
    var3 = var7.bind(var0)(var6, var3);
    var _closure1_slot11 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.HeaderSubmittingIndicator;
    var3 = {};
    var3 = var7.bind(var0)(var6, var3);
    var _closure1_slot12 = var3;
    var3 = 21;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.ModalFloatingActionSpacer;
    var3 = {};
    var3 = var7.bind(var0)(var6, var3);
    var _closure1_slot13 = var3;
    var3 = 24;
    var6 = var5[var3];
    var6 = var4.bind(var0)(var6);
    var8 = var6.Button;
    var6 = {};
    var9 = function() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 9;
        var2 = var2[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.push;
        var1 = _closure1_slot17;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var6.onPress = var9;
    var9 = 'Show Modal';
    var6.text = var9;
    var6 = var7.bind(var0)(var8, var6);
    var _closure1_slot14 = var6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.Button;
    var3 = {};
    var8 = function() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 9;
        var2 = var2[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.push;
        var1 = _closure1_slot18;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var3.onPress = var8;
    var8 = 'Show Stepped Modal';
    var3.text = var8;
    var3 = var7.bind(var0)(var6, var3);
    var _closure1_slot15 = var3;
    var3 = 25;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/design_system/UserSettingsDesignSystemModal.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var0 = _closure1_slot9;
        var3 = undefined;
        var7 = var0.bind(var3)();
        var2 = _closure1_slot7;
        var1 = _closure1_slot6;
        var0 = {};
        var6 = _closure1_slot8;
        var5 = _closure1_slot5;
        var4 = {};
        var7 = var7.container;
        var4.style = var7;
        var9 = _closure1_slot14;
        var7 = new Array(2);
        var7[0] = var9;
        var8 = _closure1_slot15;
        var7[1] = var8;
        var4.children = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 33, 1297, 671, 5464, 5836, 5834, 4567, 5374, 1234, 3146, 7834, 11236, 6528, 6529, 3938, 10318, 11238, 11239, 11240, 5343, 5344, 4090, 2]);