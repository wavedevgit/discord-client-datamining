// modules/icymi/native/content_inventory/ContentInventoryEntryContainer.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var6;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var0 = 0;
    var7 = var6[var0];
    var1 = metroImportAll;
    var0 = undefined;
    var1 = var1.bind(var0)(var7);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.View;
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var6[var1];
    var1 = var4.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var4 = var1.jsx;
    var _closure1_slot6 = var4;
    var1 = var1.jsxs;
    var _closure1_slot7 = var1;
    var1 = 4;
    var1 = var6[var1];
    var7 = var5.bind(var0)(var1);
    var4 = var7.createICYMIStyles;
    var1 = function(arg0, arg1) { // Environment: var3
        _fun104279: for (var _fun104279_ip = 0;;) switch (_fun104279_ip) {
            case 0:
                var3 = arg0;
                var4 = arg1;
                var0 = {};
                var1 = {};
                var5 = 0;
                if (var4) {
                    _fun104279_ip = 21;
                    continue _fun104279
                }
            case 15:
                var5 = var3.margin;
            case 21:
                var1.marginTop = var5;
                var0.pressable = var1;
                var1 = {};
                var5 = var3.margin;
                var1.marginHorizontal = var5;
                var5 = 0;
                if (var4) {
                    _fun104279_ip = 54;
                    continue _fun104279
                }
            case 48:
                var5 = var3.margin;
            case 54:
                var1.paddingBottom = var5;
                var2 = 0;
                if (!var4) {
                    _fun104279_ip = 70;
                    continue _fun104279
                }
            case 64:
                var2 = var3.margin;
            case 70:
                var1.paddingTop = var2;
                var0.container = var1;
                var1 = {};
                var2 = var3.margin;
                var1.marginBottom = var2;
                var0.screenshotContainer = var1;
                var1 = {
                    'display': 'flex',
                    'flexDirection': 'row',
                    'alignItems': 'center'
                };
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var5 = 5;
                var6 = var8[var5];
                var4 = undefined;
                var6 = var7.bind(var4)(var6);
                var6 = var6.spacing;
                var6 = var6.PX_12;
                var1.gap = var6;
                var3 = var3.margin;
                var1.marginBottom = var3;
                var0.header = var1;
                var1 = {};
                var3 = 1;
                var1.flex = var3;
                var0.headerInfo = var1;
                var1 = {
                    'display': 'flex',
                    'flexDirection': 'row',
                    'alignItems': 'center',
                    'gap': 6,
                    'marginBottom': null,
                    'marginTop': 2
                };
                var6 = 6;
                var7 = _closure1_slot0;
                var6 = var8[var6];
                var7 = var7.bind(var4)(var6);
                var6 = var7.isAndroid;
                var6 = var6.bind(var7)();
                if (!var6) {
                    _fun104279_ip = 227;
                    continue _fun104279
                }
            case 221:
                var3 = -1;
            case 227:
                var1.marginBottom = var3;
                var0.title = var1;
                var1 = {
                    'flexDirection': 'row',
                    'alignItems': 'center'
                };
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var2 = var2[var5];
                var2 = var3.bind(var4)(var2);
                var2 = var2.spacing;
                var2 = var2.PX_8;
                var1.gap = var2;
                var0.subTitleContainer = var1;
                return var0;
        }
    };
    var1 = var4.bind(var7)(var1);
    var _closure1_slot8 = var1;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/icymi/native/content_inventory/ContentInventoryEntryContainer.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function arg0() {
        _fun104280: for (var _fun104280_ip = 0;;) switch (_fun104280_ip) {
            case 0:
                var1 = arg0;
                var9 = var1.contentId;
                var _closure2_slot0 = var9;
                var6 = var1.userId;
                var _closure2_slot1 = var6;
                var11 = var1.children;
                var12 = var1.renderForScreenshot;
                var4 = undefined;
                if (!(var12 === var4)) {
                    _fun104280_ip = 43;
                    continue _fun104280
                }
            case 41:
                var12 = false;
            case 43:
                var17 = var1.title;
                var19 = var1.subtitle;
                var8 = var1.type;
                var _closure2_slot2 = var8;
                var7 = var1.highlight;
                if (!(var7 === var4)) {
                    _fun104280_ip = 75;
                    continue _fun104280
                }
            case 73:
                var7 = false;
            case 75:
                var1 = var1.onPress;
                var _closure2_slot3 = var1;
                var2 = _closure1_slot8;
                var20 = var2.bind(var4)(var12);
                var5 = _closure1_slot3;
                var3 = var5.useCallback;
                var2 = new Array(4);
                var2[0] = var9;
                var2[1] = var8;
                var2[2] = var6;
                var2[3] = var1;
                var1 = function() { // Environment: var0
                    _fun104281: for (var _fun104281_ip = 0;;) switch (_fun104281_ip) {
                        case 0:
                            var2 = _closure2_slot3;
                            var1 = null;
                            if (!(var1 == var2)) {
                                _fun104281_ip = 148;
                                continue _fun104281
                            }
                        case 16:
                            var2 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var1 = 7;
                            var5 = var4[var1];
                            var3 = undefined;
                            var9 = var2.bind(var3)(var5);
                            var6 = var9.itemInteracted;
                            var8 = _closure2_slot0;
                            var7 = _closure2_slot2;
                            var5 = 'open_profile';
                            var5 = var6.bind(var9)(var8, var7, var5);
                            var1 = var4[var1];
                            var6 = var2.bind(var3)(var1);
                            var5 = var6.feedItemActioned;
                            var1 = {};
                            var1.itemId = var8;
                            var1.itemType = var7;
                            var7 = {
                                'actionGestureType': 'press',
                                'actionTargetElement': 'item_container',
                                'actionIntentType': 'open',
                                'actionDestinationType': 'user'
                            };
                            var1.actionParameters = var7;
                            var1 = var5.bind(var6)(var1);
                            var1 = 8;
                            var1 = var4[var1];
                            var2 = var2.bind(var3)(var1);
                            var1 = {};
                            var4 = _closure2_slot1;
                            var1.userId = var4;
                            var1 = var2.bind(var3)(var1);
                            _fun104281_ip = 259;
                            continue _fun104281;
                        case 148:
                            var3 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var2 = 7;
                            var5 = var4[var2];
                            var1 = undefined;
                            var9 = var3.bind(var1)(var5);
                            var8 = var9.itemInteracted;
                            var6 = _closure2_slot0;
                            var5 = _closure2_slot2;
                            var7 = 'press';
                            var7 = var8.bind(var9)(var6, var5, var7);
                            var2 = var4[var2];
                            var4 = var3.bind(var1)(var2);
                            var3 = var4.feedItemActioned;
                            var2 = {};
                            var2.itemId = var6;
                            var2.itemType = var5;
                            var5 = {
                                'actionGestureType': 'press',
                                'actionTargetElement': 'item_container',
                                'actionIntentType': 'open',
                                'actionDestinationType': null
                            };
                            var2.actionParameters = var5;
                            var2 = var3.bind(var4)(var2);
                            var0 = _closure2_slot3;
                            var0 = var0.bind(var1)();
                        case 259:
                            var0 = undefined;
                            return var0;
                    }
                };
                var5 = var3.bind(var5)(var1, var2);
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 9;
                var1 = var3[var1];
                var3 = var2.bind(var4)(var1);
                var2 = var3.useStateFromStores;
                var6 = _closure1_slot5;
                var1 = new Array(1);
                var1[0] = var6;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot5;
                    var1 = var2.getUser;
                    var0 = _closure2_slot1;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var14 = var2.bind(var3)(var1, var0);
                var0 = null;
                var1 = var0 == var14;
                if (var1) {
                    _fun104280_ip = 572;
                    continue _fun104280
                }
            case 200:
                var3 = _closure1_slot6;
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 10;
                var1 = var8[var1];
                var1 = var6.bind(var4)(var1);
                var2 = var1.PressableHighlight;
                var1 = {
                    'unstable_pressDelay': 130,
                    'onPress': null,
                    'accessibilityRole': 'button'
                };
                var1.onPress = var5;
                var5 = var20.pressable;
                var1.style = var5;
                var5 = 11;
                var5 = var8[var5];
                var5 = var6.bind(var4)(var5);
                var6 = var5.SimplePost;
                var5 = {};
                var5.hideDivider = var12;
                var5.highlight = var7;
                var9 = _closure1_slot7;
                var8 = _closure1_slot4;
                var7 = {};
                var13 = var20.container;
                var10 = new Array(2);
                var10[0] = var13;
                if (!var12) {
                    _fun104280_ip = 322;
                    continue _fun104280
                }
            case 316:
                var12 = var20.screenshotContainer;
            case 322:
                var10[1] = var12;
                var7.style = var10;
                var13 = _closure1_slot7;
                var12 = _closure1_slot4;
                var10 = {};
                var15 = var20.header;
                var10.style = var15;
                var18 = _closure1_slot6;
                var16 = _closure1_slot1;
                var23 = _closure1_slot2;
                var21 = 12;
                var15 = var23[var21];
                var16 = var16.bind(var4)(var15);
                var15 = {};
                var24 = true;
                var15.animate = var24;
                var22 = _closure1_slot0;
                var21 = var23[var21];
                var21 = var22.bind(var4)(var21);
                var21 = var21.AvatarSizes;
                var21 = var21.NORMAL;
                var15.size = var21;
                var15.user = var14;
                var15.guildId = var4;
                var14 = var14.id;
                var15 = var18.bind(var4)(var16, var15, var14);
                var14 = new Array(2);
                var14[0] = var15;
                var15 = {};
                var16 = var20.headerInfo;
                var15.style = var16;
                var16 = {};
                var21 = var20.title;
                var16.style = var21;
                var16.children = var17;
                var17 = var18.bind(var4)(var12, var16);
                var16 = new Array(2);
                var16[0] = var17;
                var17 = {};
                var20 = var20.subTitleContainer;
                var17.style = var20;
                var17.children = var19;
                var17 = var18.bind(var4)(var12, var17);
                var16[1] = var17;
                var15.children = var16;
                var15 = var13.bind(var4)(var12, var15);
                var14[1] = var15;
                var10.children = var14;
                var12 = var13.bind(var4)(var12, var10);
                var10 = new Array(2);
                var10[0] = var12;
                var10[1] = var11;
                var7.children = var10;
                var7 = var9.bind(var4)(var8, var7);
                var5.children = var7;
                var5 = var3.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 572:
                return var0;
        }
    };
    var2.default = var3;
    var2.useStyles = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1613, 33, 13488, 671, 478, 8832, 7312, 566, 4865, 13527, 5414, 2]);