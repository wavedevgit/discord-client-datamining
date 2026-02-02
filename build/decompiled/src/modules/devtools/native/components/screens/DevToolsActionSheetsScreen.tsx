// modules/devtools/native/components/screens/DevToolsActionSheetsScreen.tsx
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
        var1 = var0.selectedType;
        var _closure2_slot0 = var1;
        var0 = var0.onSelect;
        var _closure2_slot1 = var0;
        var3 = _closure1_slot4;
        var2 = var3.useCallback;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = function(arg0) { // Environment: var10
            var2 = arg0;
            var3 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 12;
            var1 = var1[var0];
            var0 = undefined;
            var4 = var3.bind(var0)(var1);
            var3 = var4.hideActionSheet;
            var1 = 'action-sheet-selector';
            var1 = var3.bind(var4)(var1);
            var3 = _closure2_slot1;
            var1 = var2.type;
            var1 = var3.bind(var0)(var1);
            var1 = var2.show;
            var1 = var1.bind(var2)();
            return var0;
        };
        var0 = var2.bind(var3)(var0, var1);
        var _closure2_slot2 = var0;
        var3 = _closure1_slot7;
        var8 = _closure1_slot0;
        var12 = _closure1_slot2;
        var0 = 13;
        var0 = var12[var0];
        var2 = undefined;
        var0 = var8.bind(var2)(var0);
        var1 = var0.BottomSheet;
        var0 = {};
        var6 = _closure1_slot7;
        var4 = 14;
        var4 = var12[var4];
        var4 = var8.bind(var2)(var4);
        var5 = var4.BottomSheetTitleHeader;
        var4 = {};
        var7 = 'Select Action Sheet';
        var4.title = var7;
        var7 = _closure1_slot10;
        var14 = var7.length;
        var7 = global;
        var7 = var7.HermesInternal;
        var13 = var7.concat;
        var9 = '';
        var7 = ' options';
        var7 = var13.bind(var9)(var14, var7);
        var4.subtitle = var7;
        var4 = var6.bind(var2)(var5, var4);
        var0.header = var4;
        var6 = _closure1_slot7;
        var5 = _closure1_slot5;
        var4 = {};
        var7 = {};
        var13 = _closure1_slot1;
        var9 = 5;
        var9 = var12[var9];
        var9 = var13.bind(var2)(var9);
        var9 = var9.spacing;
        var9 = var9.PX_12;
        var7.paddingHorizontal = var9;
        var4.style = var7;
        var9 = _closure1_slot7;
        var7 = 15;
        var7 = var12[var7];
        var7 = var8.bind(var2)(var7);
        var8 = var7.TableRowGroup;
        var7 = {};
        var12 = true;
        var7.hasIcons = var12;
        var12 = _closure1_slot10;
        var11 = var12.map;
        var10 = function(arg0, arg1) { // Environment: var10
            _fun87444: for (var _fun87444_ip = 0;;) switch (_fun87444_ip) {
                case 0:
                    var0 = arg0;
                    var6 = arg1;
                    var _closure3_slot0 = var0;
                    var4 = _closure1_slot7;
                    var9 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var1 = 16;
                    var1 = var11[var1];
                    var3 = undefined;
                    var1 = var9.bind(var3)(var1);
                    var2 = var1.TableRow;
                    var1 = {};
                    var10 = _closure1_slot7;
                    var8 = 17;
                    var8 = var11[var8];
                    var8 = var9.bind(var3)(var8);
                    var9 = var8.WarningIcon;
                    var8 = {};
                    var11 = 'md';
                    var8.size = var11;
                    var8 = var10.bind(var3)(var9, var8);
                    var1.icon = var8;
                    var8 = var0.label;
                    var1.label = var8;
                    var8 = var0.description;
                    var1.subLabel = var8;
                    var7 = function() {
                        var2 = _closure2_slot2;
                        var1 = _closure3_slot0;
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var1.onPress = var7;
                    var9 = _closure2_slot0;
                    var8 = var0.type;
                    var7 = undefined;
                    if (!(var9 === var8)) {
                        _fun87444_ip = 189;
                        continue _fun87444
                    }
                case 139:
                    var10 = _closure1_slot7;
                    var9 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var8 = 18;
                    var8 = var11[var8];
                    var8 = var9.bind(var3)(var8);
                    var9 = var8.CheckmarkLargeIcon;
                    var8 = {
                        'size': 'md',
                        'color': 'text-feedback-positive'
                    };
                    var7 = var10.bind(var3)(var9, var8);
                case 189:
                    var1.trailing = var7;
                    var7 = 0;
                    var7 = var7 === var6;
                    var1.start = var7;
                    var5 = _closure1_slot10;
                    var7 = var5.length;
                    var5 = 1;
                    var5 = var7 - var5;
                    var5 = var6 === var5;
                    var1.end = var5;
                    var0 = var0.type;
                    var0 = var4.bind(var3)(var2, var1, var0);
                    return var0;
            }
        };
        var10 = var11.bind(var12)(var10);
        var7.children = var10;
        var7 = var9.bind(var2)(var8, var7);
        var4.children = var7;
        var4 = var6.bind(var2)(var5, var4);
        var0.children = var4;
        var0 = var3.bind(var2)(var1, var0);
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
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var10.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var11 = 1;
    var6 = var5[var11];
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
    var6 = var3.jsx;
    var _closure1_slot7 = var6;
    var3 = var3.jsxs;
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 5;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BASE_LOW;
    var8.backgroundColor = var12;
    var8.flex = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_12;
    var8.paddingHorizontal = var11;
    var3.wrap = var8;
    var8 = {};
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_16;
    var8.paddingVertical = var9;
    var3.contentContainer = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot9 = var3;
    var6 = {
        'type': 'blocked-domain',
        'label': 'Blocked Domain',
        'description': 'Shows a warning for potentially malicious domains'
    };
    var3 = function() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 6;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.show;
        var0 = 'https://example-phishing-site.com/malicious-page';
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var6.show = var3;
    var3 = new Array(4);
    var3[0] = var6;
    var6 = {
        'type': 'suspicious-download',
        'label': 'Suspicious Download',
        'description': 'Warns users about potentially dangerous file downloads'
    };
    var7 = function() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 7;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.show;
        var0 = 'https://suspicious-file.com/dangerous-file.exe';
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var6.show = var7;
    var3[1] = var6;
    var6 = {
        'type': 'link-not-discord',
        'label': 'Link Not Discord',
        'description': 'Warns when clicking external links that leave Discord'
    };
    var7 = function() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 8;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.show;
        var0 = 'https://external-website.com/some-page';
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var6.show = var7;
    var3[2] = var6;
    var6 = {
        'type': 'inappropriate-conversation',
        'label': 'Inappropriate Conversation',
        'description': 'Shows safety warning for inappropriate conversations'
    };
    var7 = function() {
        var3 = _closure1_slot1;
        var0 = _closure1_slot2;
        var2 = 9;
        var2 = var0[var2];
        var5 = undefined;
        var4 = var3.bind(var5)(var2);
        var3 = var4.pushLazy;
        var2 = _closure1_slot0;
        var1 = 11;
        var1 = var0[var1];
        var2 = var2.bind(var5)(var1);
        var1 = 10;
        var1 = var0[var1];
        var0 = var0.paths;
        var2 = var2.bind(var5)(var1, var0);
        var1 = {
            'warningId': 'test-warning-123',
            'warningType': 'inappropriate_conversation',
            'senderId': '123456789',
            'channelId': '987654321'
        };
        var0 = 'INAPPROPRIATE_CONVERSATION_TAKEOVER_MODAL';
        var0 = var3.bind(var4)(var2, var1, var0);
        return var0;
    };
    var6.show = var7;
    var3[3] = var6;
    var _closure1_slot10 = var3;
    var3 = 22;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/devtools/native/components/screens/DevToolsActionSheetsScreen.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var1 = _closure1_slot9;
        var3 = undefined;
        var4 = var1.bind(var3)();
        var5 = _closure1_slot4;
        var2 = var5.useState;
        var1 = 'blocked-domain';
        var5 = var2.bind(var5)(var1);
        var2 = _closure1_slot3;
        var1 = 2;
        var2 = var2.bind(var3)(var5, var1);
        var1 = 0;
        var6 = var2[var1];
        var _closure2_slot0 = var6;
        var1 = 1;
        var1 = var2[var1];
        var _closure2_slot1 = var1;
        var5 = _closure1_slot10;
        var2 = var5.find;
        var1 = function(arg0) { // Environment: var0
            var0 = arg0;
            var1 = var0.type;
            var0 = _closure2_slot0;
            var0 = var1 === var0;
            return var0;
        };
        var18 = var2.bind(var5)(var1);
        var5 = _closure1_slot4;
        var2 = var5.useCallback;
        var1 = new Array(1);
        var1[0] = var6;
        var0 = function() { // Environment: var0
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 12;
            var1 = var1[var0];
            var0 = undefined;
            var5 = var2.bind(var0)(var1);
            var4 = var5.openLazy;
            var1 = global;
            var3 = var1.Promise;
            var2 = var3.resolve;
            var1 = {};
            var6 = _closure1_slot11;
            var1.default = var6;
            var3 = var2.bind(var3)(var1);
            var2 = {};
            var6 = _closure2_slot0;
            var2.selectedType = var6;
            var1 = _closure2_slot1;
            var2.onSelect = var1;
            var1 = 'action-sheet-selector';
            var1 = var4.bind(var5)(var3, var1, var2);
            return var0;
        };
        var17 = var2.bind(var5)(var0, var1);
        var2 = _closure1_slot7;
        var1 = _closure1_slot6;
        var0 = {};
        var5 = var4.wrap;
        var0.style = var5;
        var4 = var4.contentContainer;
        var0.contentContainerStyle = var4;
        var6 = _closure1_slot7;
        var15 = _closure1_slot0;
        var19 = _closure1_slot2;
        var4 = 19;
        var4 = var19[var4];
        var4 = var15.bind(var3)(var4);
        var5 = var4.Stack;
        var4 = {};
        var14 = 16;
        var4.spacing = var14;
        var9 = _closure1_slot8;
        var7 = 20;
        var7 = var19[var7];
        var7 = var15.bind(var3)(var7);
        var8 = var7.Card;
        var7 = {};
        var12 = _closure1_slot7;
        var10 = 21;
        var10 = var19[var10];
        var10 = var15.bind(var3)(var10);
        var11 = var10.Text;
        var10 = {
            'variant': 'heading-lg/medium',
            'children': 'Action Sheets'
        };
        var11 = var12.bind(var3)(var11, var10);
        var10 = new Array(2);
        var10[0] = var11;
        var13 = _closure1_slot7;
        var11 = 15;
        var11 = var19[var11];
        var11 = var15.bind(var3)(var11);
        var12 = var11.TableRowGroup;
        var11 = {};
        var20 = 'Tap an option to launch the action sheet immediately';
        var11.description = var20;
        var16 = _closure1_slot7;
        var14 = var19[var14];
        var14 = var15.bind(var3)(var14);
        var15 = var14.TableRow;
        var14 = {};
        var19 = var18.label;
        var14.label = var19;
        var18 = var18.description;
        var14.subLabel = var18;
        var18 = true;
        var14.arrow = var18;
        var14.onPress = var17;
        var14 = var16.bind(var3)(var15, var14);
        var11.children = var14;
        var11 = var13.bind(var3)(var12, var11);
        var10[1] = var11;
        var7.children = var10;
        var7 = var9.bind(var3)(var8, var7);
        var4.children = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 33, 1297, 671, 11272, 11276, 11278, 4527, 11280, 1307, 3239, 4896, 5176, 5327, 4863, 6408, 3223, 4041, 4865, 3902, 2]);