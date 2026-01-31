// modules/forums/native/ForumPostTagsActionSheet.tsx
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.MAX_FORUM_POST_TAGS;
    var _closure1_slot6 = var3;
    var9 = 4;
    var3 = var5[var9];
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
        'display': 'flex',
        'flexDirection': 'row',
        'flexWrap': 'wrap'
    };
    var3.tagsContainer = var8;
    var8 = {
        'marginTop': 8,
        'marginHorizontal': 16,
        'marginBottom': 16
    };
    var3.saveButton = var8;
    var8 = {};
    var8.marginTop = var9;
    var3.subtitle = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot9 = var3;
    var3 = 14;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/forums/native/ForumPostTagsActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun75669: for (var _fun75669_ip = 0;;) switch (_fun75669_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.thread;
                var _closure2_slot0 = var6;
                var2 = var0.parentChannel;
                var1 = var0.canManageThread;
                var3 = undefined;
                if (!(var1 === var3)) {
                    _fun75669_ip = 35;
                    continue _fun75669
                }
            case 33:
                var1 = true;
            case 35:
                var _closure2_slot1 = var1;
                var1 = var0.onSave;
                var _closure2_slot2 = var1;
                var9 = var0.title;
                if (!(var9 === var3)) {
                    _fun75669_ip = 116;
                    continue _fun75669
                }
            case 58:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 6;
                var4 = var8[var1];
                var4 = var7.bind(var3)(var4);
                var5 = var4.intl;
                var4 = var5.string;
                var1 = var8[var1];
                var1 = var7.bind(var3)(var1);
                var1 = var1.t;
                var1 = var1["436ZFw"];
                var9 = var4.bind(var5)(var1);
            case 116:
                var7 = var0.tags;
                var0 = var0.onClose;
                var _closure2_slot3 = var0;
                var _closure2_slot4 = var3;
                var _closure2_slot5 = var3;
                var _closure2_slot6 = var3;
                var _closure2_slot7 = var3;
                var0 = _closure1_slot9;
                var8 = var0.bind(var3)();
                var5 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 7;
                var1 = var1[var0];
                var5 = var5.bind(var3)(var1);
                var1 = var5.useAppliedTags;
                var1 = var1.bind(var5)(var6);
                var6 = _closure1_slot4;
                var5 = var6.useState;
                var11 = global;
                var11 = var11.Set;
                var12 = null;
                if (!(var12 != var7)) {
                    _fun75669_ip = 216;
                    continue _fun75669
                }
            case 213:
                var1 = var7;
            case 216:
                var7 = var11.prototype;
                var7 = Object.create(var7, {
                    constructor: {
                        value: var11
                    }
                });
                var19 = var7;
                var18 = var1;
                var1 = new var19[var11](var18, var17);
                var1 = var1 instanceof Object ? var1 : var7;
                var6 = var5.bind(var6)(var1);
                var5 = _closure1_slot3;
                var1 = 2;
                var6 = var5.bind(var3)(var6, var1);
                var1 = 0;
                var1 = var6[var1];
                _closure2_slot4 = var1;
                var5 = 1;
                var5 = var6[var5];
                _closure2_slot5 = var5;
                var5 = var1.size;
                var1 = _closure1_slot6;
                var1 = var5 >= var1;
                _closure2_slot6 = var1;
                var14 = _closure1_slot0;
                var15 = _closure1_slot2;
                var0 = var15[var0];
                var1 = var14.bind(var3)(var0);
                var0 = var1.useVisibleForumTags;
                var12 = var0.bind(var1)(var2);
                var0 = function arg0() {
                    _fun75670: for (var _fun75670_ip = 0;;) switch (_fun75670_ip) {
                        case 0:
                            var3 = arg0;
                            var0 = null;
                            if (!(var0 != var3)) {
                                _fun75670_ip = 101;
                                continue _fun75670
                            }
                        case 9:
                            var0 = global;
                            var4 = var0.Set;
                            var5 = _closure2_slot4;
                            var2 = var4.prototype;
                            var2 = Object.create(var2, {
                                constructor: {
                                    value: var4
                                }
                            });
                            var6 = var2;
                            var1 = new var6[var4](var5, var4);
                            var2 = var1 instanceof Object ? var1 : var2;
                            var1 = var2.has;
                            var1 = var1.bind(var2)(var3);
                            if (var1) {
                                _fun75670_ip = 80;
                                continue _fun75670
                            }
                        case 57:
                            var1 = _closure2_slot6;
                            if (var1) {
                                _fun75670_ip = 76;
                                continue _fun75670
                            }
                        case 64:
                            var1 = var2.add;
                            var1 = var1.bind(var2)(var3);
                            _fun75670_ip = 90;
                            continue _fun75670;
                        case 76:
                            var1 = undefined;
                            return var1;
                        case 80:
                            var1 = var2.delete;
                            var1 = var1.bind(var2)(var3);
                        case 90:
                            var1 = _closure2_slot5;
                            var0 = undefined;
                            var0 = var1.bind(var0)(var2);
                        case 101:
                            var0 = undefined;
                            return var0;
                    }
                };
                _closure2_slot7 = var0;
                var2 = _closure1_slot8;
                var0 = 8;
                var0 = var15[var0];
                var0 = var14.bind(var3)(var0);
                var1 = var0.ActionSheet;
                var0 = {};
                var5 = function() {
                    _fun75671: for (var _fun75671_ip = 0;;) switch (_fun75671_ip) {
                        case 0:
                            var2 = _closure2_slot3;
                            var0 = null;
                            var3 = var0 == var2;
                            var2 = undefined;
                            var0 = undefined;
                            if (var3) {
                                _fun75671_ip = 28;
                                continue _fun75671
                            }
                        case 20:
                            var1 = _closure2_slot3;
                            var0 = var1.bind(var2)();
                        case 28:
                            return var0;
                    }
                };
                var0.onDismiss = var5;
                var7 = _closure1_slot7;
                var5 = 9;
                var5 = var15[var5];
                var5 = var14.bind(var3)(var5);
                var6 = var5.BottomSheetTitleHeader;
                var5 = {};
                var5.title = var9;
                var11 = 6;
                var9 = var15[var11];
                var9 = var14.bind(var3)(var9);
                var16 = var9.intl;
                var13 = var16.string;
                var9 = var15[var11];
                var9 = var14.bind(var3)(var9);
                var9 = var9.t;
                var9 = var9["+HS9+m"];
                var9 = var13.bind(var16)(var9);
                var5.subtitle = var9;
                var9 = var8.subtitle;
                var5.subtitleStyle = var9;
                var5 = var7.bind(var3)(var6, var5);
                var0.header = var5;
                var6 = _closure1_slot5;
                var4 = {};
                var5 = var8.tagsContainer;
                var4.style = var5;
                var9 = var12.map;
                var5 = function(arg0) { // Environment: var10
                    _fun75672: for (var _fun75672_ip = 0;;) switch (_fun75672_ip) {
                        case 0:
                            var0 = arg0;
                            var2 = _closure2_slot4;
                            var1 = var2.has;
                            var5 = var1.bind(var2)(var0);
                            var4 = _closure1_slot7;
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 10;
                            var1 = var3[var1];
                            var3 = undefined;
                            var2 = var2.bind(var3)(var1);
                            var1 = {};
                            var1.tag = var0;
                            var7 = _closure2_slot1;
                            var7 = !var7;
                            if (var7) {
                                _fun75672_ip = 78;
                                continue _fun75672
                            }
                        case 65:
                            var8 = _closure2_slot6;
                            if (!var8) {
                                _fun75672_ip = 75;
                                continue _fun75672
                            }
                        case 72:
                            var8 = !var5;
                        case 75:
                            var7 = var8;
                        case 78:
                            var1.disabled = var7;
                            var6 = _closure2_slot7;
                            var1.onPress = var6;
                            var1.selected = var5;
                            var0 = var0.id;
                            var0 = var4.bind(var3)(var2, var1, var0);
                            return var0;
                    }
                };
                var5 = var9.bind(var12)(var5);
                var4.children = var5;
                var5 = var7.bind(var3)(var6, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var5 = {};
                var8 = var8.saveButton;
                var5.style = var8;
                var8 = 11;
                var8 = var15[var8];
                var8 = var14.bind(var3)(var8);
                var9 = var8.Button;
                var8 = {};
                var12 = var15[var11];
                var12 = var14.bind(var3)(var12);
                var13 = var12.intl;
                var12 = var13.string;
                var11 = var15[var11];
                var11 = var14.bind(var3)(var11);
                var11 = var11.t;
                var11 = var11["R3BPH+"];
                var11 = var12.bind(var13)(var11);
                var8.text = var11;
                var10 = function() {
                    _fun75673: for (var _fun75673_ip = 0;;) switch (_fun75673_ip) {
                        case 0:
                            var0 = global;
                            var3 = var0.Array;
                            var2 = var3.from;
                            var1 = _closure2_slot4;
                            var3 = var2.bind(var3)(var1);
                            var2 = var3.map;
                            var1 = function(arg0) { // Environment: var1
                                var0 = arg0;
                                var0 = var0.id;
                                return var0;
                            };
                            var4 = var2.bind(var3)(var1);
                            var1 = _closure2_slot2;
                            var2 = null;
                            if (!(var2 == var1)) {
                                _fun75673_ip = 110;
                                continue _fun75673
                            }
                        case 54:
                            var1 = _closure2_slot0;
                            if (!(var2 != var1)) {
                                _fun75673_ip = 138;
                                continue _fun75673
                            }
                        case 62:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 12;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.updateForumPostTags;
                            var1 = _closure2_slot0;
                            var1 = var1.id;
                            var1 = var2.bind(var3)(var1, var4);
                            _fun75673_ip = 138;
                            continue _fun75673;
                        case 110:
                            var2 = _closure2_slot2;
                            var6 = _closure2_slot4;
                            var1 = new Array(0);
                            var5 = 0;
                            var7 = var1;
                            var0 = arraySpread(var7, var6, var5);
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                        case 138:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 13;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.hideActionSheet;
                            var1 = var1.bind(var2)();
                            return var0;
                    }
                };
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
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 6440, 33, 1297, 1234, 8863, 5171, 5174, 9569, 4043, 8865, 3237, 2]);