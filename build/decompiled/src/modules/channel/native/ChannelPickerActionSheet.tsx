// modules/channel/native/ChannelPickerActionSheet.tsx
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot5 = var6;
    var3 = var3.jsxs;
    var _closure1_slot6 = var3;
    var3 = 17;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/channel/native/ChannelPickerActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun76867: for (var _fun76867_ip = 0;;) switch (_fun76867_ip) {
            case 0:
                var4 = arg0;
                var _closure2_slot0 = var4;
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 4;
                var0 = var2[var0];
                var3 = undefined;
                var0 = var1.bind(var3)(var0);
                var0 = var0.bind(var3)();
                var18 = var0.bottom;
                var15 = var4.header;
                var0 = var4.guild;
                var _closure2_slot1 = var0;
                var14 = var4.channels;
                var _closure2_slot2 = var14;
                var0 = var4.onSelect;
                var _closure2_slot3 = var0;
                var16 = var4.selectedChannel;
                var11 = null;
                var0 = var11 != var15;
                var6 = undefined;
                if (!var0) {
                    _fun76867_ip = 214;
                    continue _fun76867
                }
            case 94:
                var7 = var15.title;
                var0 = var15.onClose;
                var _closure2_slot4 = var0;
                var0 = var11 != var0;
                var5 = undefined;
                if (!var0) {
                    _fun76867_ip = 167;
                    continue _fun76867
                }
            case 118:
                var2 = _closure1_slot5;
                var1 = _closure1_slot0;
                var9 = _closure1_slot2;
                var0 = 5;
                var0 = var9[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.ActionSheetCloseButton;
                var0 = {};
                var9 = function() {
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 6;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.hideActionSheet;
                    var1 = var1.bind(var2)();
                    var1 = _closure2_slot4;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var0.onPress = var9;
                var5 = var2.bind(var3)(var1, var0);
            case 167:
                var2 = _closure1_slot5;
                var1 = _closure1_slot0;
                var9 = _closure1_slot2;
                var0 = 7;
                var0 = var9[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.BottomSheetTitleHeader;
                var0 = {};
                var0.title = var7;
                var0.trailing = var5;
                var6 = var2.bind(var3)(var1, var0);
            case 214:
                var0 = var4.noChannelOptionLabel;
                var0 = var11 != var0;
                var13 = undefined;
                if (!var0) {
                    _fun76867_ip = 335;
                    continue _fun76867
                }
            case 229:
                var2 = _closure1_slot5;
                var5 = _closure1_slot0;
                var10 = _closure1_slot2;
                var0 = 8;
                var0 = var10[var0];
                var0 = var5.bind(var3)(var0);
                var1 = var0.TableRadioRow;
                var0 = {};
                var7 = '';
                var0.value = var7;
                var4 = var4.noChannelOptionLabel;
                var0.label = var4;
                var4 = 9;
                var4 = var10[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.TableRowIcon;
                var4 = {};
                var9 = _closure1_slot1;
                var7 = 10;
                var7 = var10[var7];
                var7 = var9.bind(var3)(var7);
                var4.source = var7;
                var4 = var2.bind(var3)(var5, var4);
                var0.icon = var4;
                var13 = var2.bind(var3)(var1, var0);
            case 335:
                var2 = _closure1_slot5;
                var9 = _closure1_slot0;
                var17 = _closure1_slot2;
                var0 = 11;
                var0 = var17[var0];
                var0 = var9.bind(var3)(var0);
                var1 = var0.RedesignCompat;
                var0 = {};
                var4 = 12;
                var4 = var17[var4];
                var4 = var9.bind(var3)(var4);
                var5 = var4.ActionSheet;
                var4 = {};
                var7 = true;
                var4.scrollable = var7;
                var4.header = var6;
                var6 = 13;
                var6 = var17[var6];
                var6 = var9.bind(var3)(var6);
                var7 = var6.BottomSheetScrollView;
                var6 = {};
                var10 = {};
                var10.paddingBottom = var18;
                var6.contentContainerStyle = var10;
                var10 = _closure1_slot6;
                var8 = 14;
                var8 = var17[var8];
                var8 = var9.bind(var3)(var8);
                var9 = var8.TableRadioGroup;
                var8 = {};
                var18 = var11 == var16;
                var17 = undefined;
                if (var18) {
                    _fun76867_ip = 468;
                    continue _fun76867
                }
            case 463:
                var17 = var16.id;
            case 468:
                var18 = var11 != var17;
                var16 = '';
                if (!var18) {
                    _fun76867_ip = 482;
                    continue _fun76867
                }
            case 479:
                var16 = var17;
            case 482:
                var8.defaultValue = var16;
                var16 = var11 == var15;
                var11 = undefined;
                if (var16) {
                    _fun76867_ip = 501;
                    continue _fun76867
                }
            case 496:
                var11 = var15.title;
            case 501:
                var8.accessibilityLabel = var11;
                var11 = function arg0() {
                    _fun76869: for (var _fun76869_ip = 0;;) switch (_fun76869_ip) {
                        case 0:
                            var1 = arg0;
                            var _closure3_slot0 = var1;
                            var0 = '';
                            if (!(var0 === var1)) {
                                _fun76869_ip = 36;
                                continue _fun76869
                            }
                        case 17:
                            var1 = _closure2_slot0;
                            var1 = var1.noChannelOptionLabel;
                            var2 = null;
                            if (!(var2 == var1)) {
                                _fun76869_ip = 114;
                                continue _fun76869
                            }
                        case 36:
                            var5 = _closure2_slot2;
                            var4 = var5.find;
                            var3 = function(arg0) { // Environment: var3
                                var0 = arg0;
                                var1 = var0.id;
                                var0 = _closure3_slot0;
                                var0 = var1 === var0;
                                return var0;
                            };
                            var4 = var4.bind(var5)(var3);
                            var3 = null;
                            if (!(var3 != var4)) {
                                _fun76869_ip = 110;
                                continue _fun76869
                            }
                        case 66:
                            var6 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var3 = 6;
                            var5 = var5[var3];
                            var3 = undefined;
                            var6 = var6.bind(var3)(var5);
                            var5 = var6.hideActionSheet;
                            var5 = var5.bind(var6)();
                            var1 = _closure2_slot3;
                            var1 = var1.bind(var3)(var4);
                        case 110:
                            var1 = undefined;
                            return var1;
                        case 114:
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 6;
                            var3 = var3[var1];
                            var1 = undefined;
                            var3 = var4.bind(var1)(var3);
                            var1 = var3.hideActionSheet;
                            var1 = var1.bind(var3)();
                            var1 = _closure2_slot0;
                            var0 = var1.onSelect;
                            var0 = var0.bind(var1)(var2);
                            var0 = undefined;
                            return var0;
                    }
                };
                var8.onChange = var11;
                var11 = new Array(2);
                var11[0] = var13;
                var13 = var14.map;
                var12 = function(arg0) { // Environment: var12
                    _fun76871: for (var _fun76871_ip = 0;;) switch (_fun76871_ip) {
                        case 0:
                            var0 = arg0;
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var1 = 15;
                            var1 = var8[var1];
                            var4 = undefined;
                            var3 = var7.bind(var4)(var1);
                            var2 = var3.getChannelIconWithGuild;
                            var1 = _closure2_slot1;
                            var9 = var2.bind(var3)(var0, var1);
                            var3 = _closure1_slot5;
                            var1 = 8;
                            var1 = var8[var1];
                            var1 = var7.bind(var4)(var1);
                            var2 = var1.TableRadioRow;
                            var1 = {};
                            var5 = var0.id;
                            var1.value = var5;
                            var5 = 16;
                            var5 = var8[var5];
                            var10 = var7.bind(var4)(var5);
                            var8 = var10.computeChannelName;
                            var7 = _closure1_slot4;
                            var5 = _closure1_slot3;
                            var5 = var8.bind(var10)(var0, var7, var5);
                            var1.label = var5;
                            var5 = null;
                            var7 = var5 != var9;
                            if (!var7) {
                                _fun76871_ip = 168;
                                continue _fun76871
                            }
                        case 126:
                            var8 = _closure1_slot5;
                            var7 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var6 = 9;
                            var6 = var10[var6];
                            var6 = var7.bind(var4)(var6);
                            var7 = var6.TableRowIcon;
                            var6 = {};
                            var6.source = var9;
                            var5 = var8.bind(var4)(var7, var6);
                        case 168:
                            var1.icon = var5;
                            var0 = var0.id;
                            var0 = var3.bind(var4)(var2, var1, var0);
                            return var0;
                    }
                };
                var12 = var13.bind(var14)(var12);
                var11[1] = var12;
                var8.children = var11;
                var8 = var10.bind(var3)(var9, var8);
                var6.children = var8;
                var6 = var2.bind(var3)(var7, var6);
                var4.children = var6;
                var4 = var2.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 3100, 1621, 33, 1568, 5209, 3278, 5211, 5421, 4905, 9787, 4897, 5208, 4933, 5422, 4807, 4792, 2]);