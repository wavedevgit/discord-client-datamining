// modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionEmojiEditorModal.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
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
    var3 = var11.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var9 = 2;
    var6 = var5[var9];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot6 = var6;
    var3 = var3.SectionList;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot9 = var6;
    var6 = var3.Fragment;
    var _closure1_slot10 = var6;
    var3 = var3.jsxs;
    var _closure1_slot11 = var3;
    var3 = 6;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'backgroundColor': null,
        'display': 'flex',
        'flexDirection': 'column',
        'justifyContent': 'flex-start',
        'height': '100%'
    };
    var10 = 7;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BASE_LOW;
    var8.backgroundColor = var12;
    var3.container = var8;
    var8 = {
        'flexGrow': 0,
        'marginVertical': 24,
        'marginHorizontal': 16
    };
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.sm;
    var8.borderRadius = var12;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_SURFACE_HIGH;
    var8.backgroundColor = var10;
    var3.emojiList = var8;
    var8 = {
        'alignItems': 'flex-start',
        'paddingTop': 16,
        'paddingBottom': 14
    };
    var3.row = var8;
    var8 = {
        'width': 24,
        'height': 24,
        'marginBottom': 2
    };
    var3.emojiImage = var8;
    var8 = {};
    var8.marginBottom = var9;
    var3.emojiAlias = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot12 = var3;
    var3 = 19;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionEmojiEditorModal.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var0 = arg0;
        var2 = var0.guildId;
        var _closure2_slot0 = var2;
        var7 = var0.subscriptionRoleId;
        var _closure2_slot1 = var7;
        var1 = var0.initialTierEmojiIds;
        var12 = var0.listingId;
        var13 = var0.onClose;
        var _closure2_slot2 = var13;
        var0 = var0.onSave;
        var _closure2_slot3 = var0;
        var0 = _closure1_slot12;
        var3 = undefined;
        var10 = var0.bind(var3)();
        var _closure2_slot4 = var10;
        var6 = _closure1_slot1;
        var15 = _closure1_slot2;
        var0 = 8;
        var0 = var15[var0];
        var0 = var6.bind(var3)(var0);
        var9 = var0.bind(var3)(var2);
        var _closure2_slot5 = var9;
        var14 = _closure1_slot0;
        var0 = 9;
        var0 = var15[var0];
        var11 = var14.bind(var3)(var0);
        var4 = var11.useStateFromStores;
        var0 = _closure1_slot8;
        var2 = new Array(1);
        var2[0] = var0;
        var0 = function() { // Environment: var8
            var2 = _closure1_slot8;
            var1 = var2.getSubscriptionRoles;
            var0 = _closure2_slot0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var11 = var4.bind(var11)(var2, var0);
        var _closure2_slot6 = var11;
        var4 = _closure1_slot5;
        var0 = var4.useState;
        var2 = var0.bind(var4)(var1);
        var1 = _closure1_slot4;
        var0 = 2;
        var2 = var1.bind(var3)(var2, var0);
        var0 = 0;
        var0 = var2[var0];
        var _closure2_slot7 = var0;
        var1 = 1;
        var1 = var2[var1];
        var _closure2_slot8 = var1;
        var2 = var4.useMemo;
        var1 = new Array(4);
        var1[0] = var11;
        var1[1] = var9;
        var1[2] = var7;
        var1[3] = var0;
        var0 = function() { // Environment: var8
            _fun117033: for (var _fun117033_ip = 0;;) switch (_fun117033_ip) {
                case 0:
                    var3 = _closure2_slot1;
                    var2 = null;
                    if (!(var2 != var3)) {
                        _fun117033_ip = 83;
                        continue _fun117033
                    }
                case 15:
                    var3 = _closure2_slot5;
                    var2 = var3.filter;
                    var1 = function(arg0) { // Environment: var0
                        var1 = arg0;
                        var _closure4_slot0 = var1;
                        var2 = var1.roles;
                        var1 = var2.filter;
                        var0 = function(arg0) { // Environment: var0
                            _fun117035: for (var _fun117035_ip = 0;;) switch (_fun117035_ip) {
                                case 0:
                                    var3 = arg0;
                                    var0 = _closure2_slot1;
                                    var2 = var3 === var0;
                                    if (!var2) {
                                        _fun117035_ip = 46;
                                        continue _fun117035
                                    }
                                case 17:
                                    var5 = _closure2_slot7;
                                    var4 = var5.has;
                                    var0 = _closure4_slot0;
                                    var0 = var0.id;
                                    var0 = var4.bind(var5)(var0);
                                    var2 = !var0;
                                case 46:
                                    var0 = !var2;
                                    if (var2) {
                                        _fun117035_ip = 66;
                                        continue _fun117035
                                    }
                                case 52:
                                    var2 = _closure2_slot6;
                                    var1 = var2.has;
                                    var0 = var1.bind(var2)(var3);
                                case 66:
                                    return var0;
                            }
                        };
                        var0 = var1.bind(var2)(var0);
                        var1 = var0.length;
                        var0 = 0;
                        var0 = var0 === var1;
                        return var0;
                    };
                    var3 = var2.bind(var3)(var1);
                    var1 = global;
                    var2 = var1.Set;
                    var1 = var3.map;
                    var0 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var0 = var0.id;
                        return var0;
                    };
                    var4 = var1.bind(var3)(var0);
                    var1 = var2.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var2
                        }
                    });
                    var5 = var1;
                    var0 = new var5[var2](var4, var3);
                    var0 = var0 instanceof Object ? var0 : var1;
                    return var0;
                case 83:
                    var0 = global;
                    var0 = var0.Set;
                    var1 = var0.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var0
                        }
                    });
                    var5 = var1;
                    var0 = new var5[var0](var4);
                    var0 = var0 instanceof Object ? var0 : var1;
                    return var0;
            }
        };
        var0 = var2.bind(var4)(var0, var1);
        var _closure2_slot9 = var0;
        var0 = function() { // Environment: var8
            var3 = _closure1_slot3;
            var2 = undefined;
            var1 = function*() { // Environment: var0
                var0 = function*() { // Original name: ?anon_0_, environment: var0
                    _fun117039: for (var _fun117039_ip = 0;;) switch (_fun117039_ip) {
                        case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                            if (var1) {
                                _fun117039_ip = 55;
                                continue _fun117039
                            }
                        case 7: // try_start_0
                            var4 = _closure2_slot3;
                            var1 = _closure2_slot7;
                            var3 = undefined;
                            var1 = var4.bind(var3)(var1);
                            SaveGenerator(address = 29);
                        case 27:
                            return var1;
                        case 29:
                            ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                            if (var4) {
                                _fun117039_ip = 45;
                                continue _fun117039
                            }
                        case 35:
                            var2 = _closure2_slot2;
                            var2 = var2.bind(var3)();
                        case 43: // try_end0
                            _fun117039_ip = 50;
                            continue _fun117039;
                        case 45:
                            return var1;
                        case 48: // catch_target0
                            CatchBlockStart(arg_register = 1);
                        case 50:
                            var1 = undefined;
                            return var1;
                        case 55:
                            return var0;
                    }
                };
                return var0;
            };
            var1 = var3.bind(var2)(var1);
            var _closure3_slot0 = var1;
            var0 = function() { // Environment: var0
                var0 = undefined;
                var3 = _closure3_slot0;
                var2 = var3.apply;
                var0 = arguments;
                var1 = var0;
                var0 = this;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            return var0;
        };
        var0 = var0.bind(var3)();
        var _closure2_slot10 = var0;
        var2 = _closure1_slot11;
        var1 = _closure1_slot6;
        var0 = {};
        var4 = var10.container;
        var0.style = var4;
        var7 = _closure1_slot9;
        var4 = 12;
        var4 = var15[var4];
        var6 = var6.bind(var3)(var4);
        var4 = {};
        var11 = 13;
        var16 = var15[var11];
        var16 = var14.bind(var3)(var16);
        var18 = var16.intl;
        var17 = var18.string;
        var16 = var15[var11];
        var16 = var14.bind(var3)(var16);
        var16 = var16.t;
        var16 = var16.W4XhnR;
        var16 = var17.bind(var18)(var16);
        var4.title = var16;
        var4.onClose = var13;
        var13 = function() {
            _fun117041: for (var _fun117041_ip = 0;;) switch (_fun117041_ip) {
                case 0:
                    var1 = _closure2_slot9;
                    var2 = var1.size;
                    var1 = 0;
                    if (!(var1 !== var2)) {
                        _fun117041_ip = 323;
                        continue _fun117041
                    }
                case 21:
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var1 = 14;
                    var1 = var7[var1];
                    var5 = undefined;
                    var3 = var6.bind(var5)(var1);
                    var2 = var3.show;
                    var1 = {};
                    var10 = _closure1_slot0;
                    var4 = 13;
                    var8 = var7[var4];
                    var8 = var10.bind(var5)(var8);
                    var11 = var8.intl;
                    var9 = var11.string;
                    var8 = var7[var4];
                    var8 = var10.bind(var5)(var8);
                    var8 = var8.t;
                    var8 = var8["30V0t5"];
                    var8 = var9.bind(var11)(var8);
                    var1.title = var8;
                    var8 = var7[var4];
                    var8 = var10.bind(var5)(var8);
                    var12 = var8.intl;
                    var11 = var12.formatToPlainString;
                    var8 = var7[var4];
                    var8 = var10.bind(var5)(var8);
                    var8 = var8.t;
                    var9 = var8["o6j/wN"];
                    var8 = {};
                    var13 = _closure2_slot9;
                    var13 = var13.size;
                    var8.numberOfEmojiSlatedForDeletion = var13;
                    var8 = var11.bind(var12)(var9, var8);
                    var1.body = var8;
                    var8 = var7[var4];
                    var8 = var10.bind(var5)(var8);
                    var11 = var8.intl;
                    var9 = var11.string;
                    var8 = var7[var4];
                    var8 = var10.bind(var5)(var8);
                    var8 = var8.t;
                    var8 = var8["ETE/oC"];
                    var8 = var9.bind(var11)(var8);
                    var1.cancelText = var8;
                    var8 = var7[var4];
                    var8 = var10.bind(var5)(var8);
                    var9 = var8.intl;
                    var8 = var9.string;
                    var4 = var7[var4];
                    var4 = var10.bind(var5)(var4);
                    var4 = var4.t;
                    var4 = var4["cY+Oob"];
                    var4 = var8.bind(var9)(var4);
                    var1.confirmText = var4;
                    var4 = _closure2_slot10;
                    var1.onConfirm = var4;
                    var4 = 15;
                    var4 = var7[var4];
                    var4 = var6.bind(var5)(var4);
                    var4 = var4.Colors;
                    var4 = var4.RED;
                    var1.confirmColor = var4;
                    var1 = var2.bind(var3)(var1);
                    _fun117041_ip = 333;
                    continue _fun117041;
                case 323:
                    var1 = _closure2_slot10;
                    var0 = undefined;
                    var0 = var1.bind(var0)();
                case 333:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.onSave = var13;
        var4.listingId = var12;
        var12 = true;
        var4.canSave = var12;
        var6 = var7.bind(var3)(var6, var4);
        var4 = new Array(2);
        var4[0] = var6;
        var6 = _closure1_slot7;
        var5 = {};
        var10 = var10.emojiList;
        var5.style = var10;
        var10 = function arg0() {
            var0 = arg0;
            var15 = var0.item;
            var _closure3_slot0 = var15;
            var2 = _closure2_slot7;
            var1 = var2.has;
            var0 = var15.id;
            var6 = var1.bind(var2)(var0);
            var2 = _closure2_slot9;
            var1 = var2.has;
            var0 = var15.id;
            var0 = var1.bind(var2)(var0);
            var _closure3_slot1 = var0;
            var3 = _closure1_slot9;
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 16;
            var0 = var7[var4];
            var2 = undefined;
            var0 = var5.bind(var2)(var0);
            var1 = var0.FormRow;
            var0 = {};
            var11 = _closure2_slot4;
            var10 = var11.row;
            var0.style = var10;
            var13 = _closure1_slot1;
            var9 = 10;
            var9 = var7[var9];
            var10 = var13.bind(var2)(var9);
            var9 = {};
            var11 = var11.emojiImage;
            var9.style = var11;
            var11 = {};
            var12 = 11;
            var12 = var7[var12];
            var14 = var13.bind(var2)(var12);
            var13 = var14.getEmojiURL;
            var12 = {};
            var16 = var15.id;
            var12.id = var16;
            var15 = var15.animated;
            var12.animated = var15;
            var15 = 48;
            var12.size = var15;
            var12 = var13.bind(var14)(var12);
            var11.uri = var12;
            var9.source = var11;
            var9 = var3.bind(var2)(var10, var9);
            var0.leading = var9;
            var9 = function() {
                _fun117043: for (var _fun117043_ip = 0;;) switch (_fun117043_ip) {
                    case 0:
                        var3 = _closure1_slot11;
                        var2 = _closure1_slot10;
                        var1 = {};
                        var7 = _closure1_slot9;
                        var5 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var0 = 17;
                        var4 = var4[var0];
                        var0 = undefined;
                        var6 = var5.bind(var0)(var4);
                        var4 = {};
                        var8 = _closure3_slot0;
                        var8 = var8.name;
                        var4.name = var8;
                        var8 = _closure2_slot4;
                        var8 = var8.emojiAlias;
                        var4.style = var8;
                        var6 = var7.bind(var0)(var6, var4);
                        var4 = new Array(2);
                        var4[0] = var6;
                        var5 = _closure3_slot1;
                        if (!var5) {
                            _fun117043_ip = 316;
                            continue _fun117043
                        }
                    case 98:
                        var8 = _closure1_slot11;
                        var7 = _closure1_slot10;
                        var6 = {};
                        var12 = _closure1_slot9;
                        var16 = _closure1_slot0;
                        var17 = _closure1_slot2;
                        var10 = 18;
                        var9 = var17[var10];
                        var9 = var16.bind(var0)(var9);
                        var11 = var9.Text;
                        var9 = {
                            'variant': 'text-sm/normal',
                            'color': 'interactive-text-active'
                        };
                        var13 = 13;
                        var14 = var17[var13];
                        var14 = var16.bind(var0)(var14);
                        var18 = var14.intl;
                        var15 = var18.string;
                        var14 = var17[var13];
                        var14 = var16.bind(var0)(var14);
                        var14 = var14.t;
                        var14 = var14["1GlN06"];
                        var14 = var15.bind(var18)(var14);
                        var9.children = var14;
                        var11 = var12.bind(var0)(var11, var9);
                        var9 = new Array(2);
                        var9[0] = var11;
                        var10 = var17[var10];
                        var10 = var16.bind(var0)(var10);
                        var11 = var10.Text;
                        var10 = {
                            'variant': 'text-sm/normal',
                            'color': 'text-feedback-critical'
                        };
                        var14 = var17[var13];
                        var14 = var16.bind(var0)(var14);
                        var15 = var14.intl;
                        var14 = var15.string;
                        var13 = var17[var13];
                        var13 = var16.bind(var0)(var13);
                        var13 = var13.t;
                        var13 = var13.J0XdJ4;
                        var13 = var14.bind(var15)(var13);
                        var10.children = var13;
                        var10 = var12.bind(var0)(var11, var10);
                        var9[1] = var10;
                        var6.children = var9;
                        var5 = var8.bind(var0)(var7, var6);
                    case 316:
                        var4[1] = var5;
                        var1.children = var4;
                        var0 = var3.bind(var0)(var2, var1);
                        return var0;
                }
            };
            var0.label = var9;
            var8 = function() {
                _fun117044: for (var _fun117044_ip = 0;;) switch (_fun117044_ip) {
                    case 0:
                        var0 = _closure3_slot0;
                        var3 = var0.id;
                        var0 = global;
                        var4 = var0.Set;
                        var5 = _closure2_slot7;
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
                            _fun117044_ip = 72;
                            continue _fun117044
                        }
                    case 60:
                        var1 = var2.add;
                        var1 = var1.bind(var2)(var3);
                        _fun117044_ip = 82;
                        continue _fun117044;
                    case 72:
                        var1 = var2.delete;
                        var1 = var1.bind(var2)(var3);
                    case 82:
                        var1 = _closure2_slot8;
                        var0 = undefined;
                        var0 = var1.bind(var0)(var2);
                        var0 = undefined;
                        return var0;
                }
            };
            var0.onPress = var8;
            var4 = var7[var4];
            var4 = var5.bind(var2)(var4);
            var4 = var4.FormRow;
            var5 = var4.Checkbox;
            var4 = {};
            var4.selected = var6;
            var4 = var3.bind(var2)(var5, var4);
            var0.trailing = var4;
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var5.renderItem = var10;
        var10 = {};
        var12 = var15[var11];
        var12 = var14.bind(var3)(var12);
        var13 = var12.intl;
        var12 = var13.string;
        var11 = var15[var11];
        var11 = var14.bind(var3)(var11);
        var11 = var11.t;
        var11 = var11["9Oq93m"];
        var11 = var12.bind(var13)(var11);
        var10.title = var11;
        var10.data = var9;
        var9 = new Array(1);
        var9[0] = var10;
        var5.sections = var9;
        var8 = function() {
            var3 = _closure1_slot9;
            var1 = _closure1_slot0;
            var2 = _closure1_slot2;
            var0 = 16;
            var0 = var2[var0];
            var2 = undefined;
            var0 = var1.bind(var2)(var0);
            var1 = var0.FormDivider;
            var0 = {};
            var4 = true;
            var0.iconPush = var4;
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var5.ItemSeparatorComponent = var8;
        var8 = 'always';
        var5.keyboardShouldPersistTaps = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 27, 4740, 33, 1297, 671, 14945, 566, 4704, 1417, 14951, 1234, 4002, 3937, 5382, 14941, 3941, 2]);