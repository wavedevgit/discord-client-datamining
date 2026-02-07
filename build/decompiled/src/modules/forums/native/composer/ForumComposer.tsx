// modules/forums/native/composer/ForumComposer.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var5;
    var0 = function arg0, arg1() {
        _fun74392: for (var _fun74392_ip = 0;;) switch (_fun74392_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun74392_ip = 46;
                    continue _fun74392
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun74392_ip = 55;
                    continue _fun74392
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun74392_ip = 345;
                    continue _fun74392
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun74392_ip = 323;
                    continue _fun74392
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun74392_ip = 283;
                    continue _fun74392
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun74392_ip = 270;
                    continue _fun74392
                }
            case 110:
                var6 = {};
                var8 = var6.toString;
                var6 = var8.call;
                var10 = var6.bind(var8)(var2);
                var9 = var10.slice;
                var8 = 8;
                var6 = -1;
                var8 = var9.bind(var10)(var8, var6);
                var6 = 'Object';
                var6 = var6 === var8;
                if (!var6) {
                    _fun74392_ip = 163;
                    continue _fun74392
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun74392_ip = 179;
                    continue _fun74392
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun74392_ip = 249;
                    continue _fun74392
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun74392_ip = 249;
                    continue _fun74392
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun74392_ip = 234;
                    continue _fun74392
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun74392_ip = 247;
                    continue _fun74392
                }
            case 234:
                var8 = _closure1_slot33;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun74392_ip = 265;
                continue _fun74392;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun74392_ip = 283;
                continue _fun74392;
            case 270:
                var6 = _closure1_slot33;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun74392_ip = 323;
                    continue _fun74392
                }
            case 289:
                var6 = var4.TypeError;
                var4 = var6.prototype;
                var5 = Object.create(var4, {
                    constructor: {
                        value: var6
                    }
                });
                var12 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
                var13 = var5;
                var4 = new var13[var6](var12, var11);
                var4 = var4 instanceof Object ? var4 : var5;
                throw var4;
            case 323:
                if (!var3) {
                    _fun74392_ip = 330;
                    continue _fun74392
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun74393: for (var _fun74393_ip = 0;;) switch (_fun74393_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun74393_ip = 56;
                                continue _fun74393
                            }
                        case 20:
                            var0 = {};
                            var1 = false;
                            var0.done = var1;
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot1;
                            var1 = parseFloat(var1);
                            var3 = var1 + 1;
                            _closure2_slot1 = var3;
                            var1 = var2[var1];
                            var0.value = var1;
                            _fun74393_ip = 67;
                            continue _fun74393;
                        case 56:
                            var1 = {};
                            var2 = true;
                            var1.done = var2;
                            var0 = var1;
                        case 67:
                            return var0;
                    }
                };
                return var0;
            case 345:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot32 = var0;
    var0 = function arg0, arg1() {
        _fun74394: for (var _fun74394_ip = 0;;) switch (_fun74394_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun74394_ip = 23;
                    continue _fun74394
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun74394_ip = 33;
                    continue _fun74394
                }
            case 28:
                var1 = var3.length;
            case 33:
                var0 = global;
                var0 = var0.Array;
                var0 = var0.bind(var2)(var1);
                var2 = 0;
                var4 = var2 < var1;
                if (!var4) {
                    _fun74394_ip = 70;
                    continue _fun74394
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun74394_ip = 55;
                    continue _fun74394
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot33 = var0;
    var0 = function arg0() {
        _fun74395: for (var _fun74395_ip = 0;;) switch (_fun74395_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.tags;
                var0 = _closure1_slot30;
                var4 = undefined;
                var9 = var0.bind(var4)();
                var2 = var8.length;
                var1 = 0;
                var0 = null;
                if (!(var1 !== var2)) {
                    _fun74395_ip = 152;
                    continue _fun74395
                }
            case 35:
                var3 = _closure1_slot28;
                var2 = _closure1_slot8;
                var1 = {};
                var6 = var9.tags;
                var1.style = var6;
                var7 = _closure1_slot27;
                var6 = _closure1_slot0;
                var10 = _closure1_slot2;
                var5 = 67;
                var5 = var10[var5];
                var5 = var6.bind(var4)(var5);
                var6 = var5.TagIcon;
                var5 = {};
                var10 = 'sm';
                var5.size = var10;
                var9 = var9.tagIcon;
                var5.style = var9;
                var6 = var7.bind(var4)(var6, var5);
                var5 = new Array(2);
                var5[0] = var6;
                var7 = var8.map;
                var6 = function(arg0, arg1) { // Environment: var6
                    _fun74396: for (var _fun74396_ip = 0;;) switch (_fun74396_ip) {
                        case 0:
                            var0 = arg0;
                            var4 = _closure1_slot28;
                            var2 = _closure1_slot5;
                            var3 = var2.Fragment;
                            var2 = {};
                            var6 = 0;
                            var5 = arg1;
                            var6 = var6 !== var5;
                            if (!var6) {
                                _fun74396_ip = 65;
                                continue _fun74396
                            }
                        case 34:
                            var9 = _closure1_slot27;
                            var8 = _closure1_slot8;
                            var7 = {};
                            var5 = {};
                            var10 = 4;
                            var5.width = var10;
                            var7.style = var5;
                            var5 = undefined;
                            var6 = var9.bind(var5)(var8, var7);
                        case 65:
                            var5 = new Array(2);
                            var5[0] = var6;
                            var8 = _closure1_slot27;
                            var7 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var1 = 68;
                            var6 = var6[var1];
                            var1 = undefined;
                            var6 = var7.bind(var1)(var6);
                            var7 = var6.AppliedForumTagPill;
                            var6 = {};
                            var6.tag = var0;
                            var6 = var8.bind(var1)(var7, var6);
                            var5[1] = var6;
                            var2.children = var5;
                            var0 = var0.id;
                            var0 = var4.bind(var1)(var3, var2, var0);
                            return var0;
                    }
                };
                var6 = var7.bind(var8)(var6);
                var5[1] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 152:
                return var0;
        }
    };
    var _closure1_slot34 = var0;
    var0 = function arg0() {
        _fun74397: for (var _fun74397_ip = 0;;) switch (_fun74397_ip) {
            case 0:
                var0 = arg0;
                var11 = var0.channel;
                var _closure2_slot0 = var11;
                var1 = var0.tags;
                var _closure2_slot1 = var1;
                var1 = var0.setTags;
                var _closure2_slot2 = var1;
                var17 = var0.canPost;
                var _closure2_slot3 = var17;
                var16 = var0.submitting;
                var1 = var0.onSubmit;
                var _closure2_slot4 = var1;
                var20 = var0.onShowExpressionPicker;
                var1 = var0.focusLastInput;
                var _closure2_slot5 = var1;
                var10 = var0.lastInput;
                var18 = var0.isEdit;
                var _closure2_slot6 = var18;
                var4 = var0.onLayout;
                var3 = undefined;
                var _closure2_slot9 = var3;
                var0 = _closure1_slot30;
                var12 = var0.bind(var3)();
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 22;
                var1 = var6[var0];
                var8 = var5.bind(var3)(var1);
                var7 = var8.useStateFromStores;
                var1 = _closure1_slot17;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var15
                    var3 = _closure1_slot17;
                    var2 = var3.getUploads;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var0 = _closure1_slot11;
                    var0 = var0.ChannelMessage;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var13 = var7.bind(var8)(var2, var1);
                var0 = var6[var0];
                var7 = var5.bind(var3)(var0);
                var2 = var7.useStateFromStores;
                var0 = _closure1_slot13;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var15
                    _fun74399: for (var _fun74399_ip = 0;;) switch (_fun74399_ip) {
                        case 0:
                            var0 = _closure2_slot6;
                            var0 = !var0;
                            if (!var0) {
                                _fun74399_ip = 46;
                                continue _fun74399
                            }
                        case 13:
                            var4 = _closure1_slot13;
                            var3 = var4.can;
                            var2 = _closure1_slot21;
                            var2 = var2.ATTACH_FILES;
                            var1 = _closure2_slot0;
                            var0 = var3.bind(var4)(var2, var1);
                        case 46:
                            return var0;
                    }
                };
                var8 = var2.bind(var7)(var1, var0);
                var1 = _closure1_slot1;
                var0 = 29;
                var0 = var6[var0];
                var2 = var1.bind(var3)(var0);
                var0 = {};
                var14 = true;
                var0.includeKeyboardHeight = var14;
                var0 = var2.bind(var3)(var0);
                var7 = var0.insets;
                var0 = 24;
                var0 = var6[var0];
                var0 = var1.bind(var3)(var0);
                var2 = var0.bind(var3)();
                var _closure2_slot7 = var2;
                var0 = var11.isMediaChannel;
                var0 = var0.bind(var11)();
                var1 = 55;
                var1 = var6[var1];
                var1 = var5.bind(var3)(var1);
                var1 = var1.KeyboardTypes;
                var1 = var1.MEDIA;
                var22 = var2 === var1;
                var _closure2_slot8 = var22;
                var5 = var0;
                if (var5) {
                    _fun74397_ip = 328;
                    continue _fun74397
                }
            case 308:
                var0 = var8;
                if (!var8) {
                    _fun74397_ip = 325;
                    continue _fun74397
                }
            case 314:
                var2 = var13.length;
                var1 = 0;
                var0 = var2 > var1;
            case 325:
                var5 = var0;
            case 328:
                var0 = var11.availableTags;
                var1 = null;
                var9 = var1 != var0;
                if (!var9) {
                    _fun74397_ip = 369;
                    continue _fun74397
                }
            case 343:
                var0 = var11.availableTags;
                var2 = var1 == var0;
                var1 = undefined;
                if (var2) {
                    _fun74397_ip = 363;
                    continue _fun74397
                }
            case 358:
                var1 = var0.length;
            case 363:
                var0 = 0;
                var9 = var1 > var0;
            case 369:
                var0 = function() {
                    _fun74400: for (var _fun74400_ip = 0;;) switch (_fun74400_ip) {
                        case 0:
                            var4 = _closure2_slot7;
                            var5 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var6 = 55;
                            var2 = var0[var6];
                            var0 = undefined;
                            var2 = var5.bind(var0)(var2);
                            var2 = var2.KeyboardTypes;
                            var2 = var2.SYSTEM;
                            var2 = var4 !== var2;
                            if (!var2) {
                                _fun74400_ip = 88;
                                continue _fun74400
                            }
                        case 51:
                            var4 = _closure2_slot7;
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var3 = var3[var6];
                            var3 = var5.bind(var0)(var3);
                            var3 = var3.KeyboardTypes;
                            var3 = var3.EXPRESSION;
                            var2 = var4 !== var3;
                        case 88:
                            if (var2) {
                                _fun74400_ip = 99;
                                continue _fun74400
                            }
                        case 91:
                            var1 = _closure2_slot5;
                            var1 = var1.bind(var0)();
                        case 99:
                            return var0;
                    }
                };
                _closure2_slot9 = var0;
                var2 = _closure1_slot28;
                var1 = _closure1_slot8;
                var0 = {};
                var0.onLayout = var4;
                var6 = var12.actionsContainer;
                var4 = new Array(2);
                var4[0] = var6;
                var6 = {};
                var7 = var7.bottom;
                var6.marginBottom = var7;
                var4[1] = var6;
                var0.style = var4;
                if (!var5) {
                    _fun74397_ip = 482;
                    continue _fun74397
                }
            case 431:
                var7 = _closure1_slot27;
                var6 = _closure1_slot1;
                var21 = _closure1_slot2;
                var4 = 69;
                var4 = var21[var4];
                var6 = var6.bind(var3)(var4);
                var4 = {};
                var4.attachments = var13;
                var11 = var11.id;
                var4.channelId = var11;
                var4.highlightThumbnails = var14;
                var5 = var7.bind(var3)(var6, var4);
            case 482:
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot28;
                var6 = _closure1_slot8;
                var5 = {};
                var11 = var12.actions;
                var5.style = var11;
                var11 = var8;
                if (!var11) {
                    _fun74397_ip = 705;
                    continue _fun74397
                }
            case 519:
                var21 = _closure1_slot27;
                var26 = _closure1_slot0;
                var27 = _closure1_slot2;
                var8 = 70;
                var8 = var27[var8];
                var8 = var26.bind(var3)(var8);
                var13 = var8.HeaderActionButton;
                var8 = {};
                var23 = 40;
                var24 = var27[var23];
                var24 = var26.bind(var3)(var24);
                var25 = var24.intl;
                var24 = var25.string;
                var23 = var27[var23];
                var23 = var26.bind(var3)(var23);
                var23 = var23.t;
                var23 = var23.aDZSuz;
                var23 = var24.bind(var25)(var23);
                var8.accessibilityLabel = var23;
                var24 = var12.actionButton;
                var23 = new Array(2);
                var23[0] = var24;
                var24 = var12.mediaButton;
                var23[1] = var24;
                var8.style = var23;
                var24 = _closure1_slot0;
                var25 = _closure1_slot2;
                if (var22) {
                    _fun74397_ip = 661;
                    continue _fun74397
                }
            case 641:
                var22 = 72;
                var22 = var25[var22];
                var22 = var24.bind(var3)(var22);
                var22 = var22.ImageIcon;
                _fun74397_ip = 679;
                continue _fun74397;
            case 661:
                var23 = 71;
                var23 = var25[var23];
                var23 = var24.bind(var3)(var23);
                var22 = var23.KeyboardIcon;
            case 679:
                var8.IconComponent = var22;
                var22 = function() {
                    _fun74401: for (var _fun74401_ip = 0;;) switch (_fun74401_ip) {
                        case 0:
                            var1 = _closure2_slot8;
                            if (var1) {
                                _fun74401_ip = 66;
                                continue _fun74401
                            }
                        case 10:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 73;
                            var3 = var3[var2];
                            var2 = undefined;
                            var4 = var4.bind(var2)(var3);
                            var3 = var4.showSimpleMediaKeyboard;
                            var2 = _closure2_slot0;
                            var2 = var3.bind(var4)(var2);
                            var2 = _closure1_slot6;
                            var1 = var2.dismiss;
                            var1 = var1.bind(var2)();
                            _fun74401_ip = 76;
                            continue _fun74401;
                        case 66:
                            var1 = _closure2_slot5;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 76:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 74;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.trackForumChannelMediaUploaderClicked;
                            var1 = {};
                            var4 = true;
                            var1.isMobile = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var8.onPress = var22;
                var8.foregroundRipple = var14;
                var11 = var21.bind(var3)(var13, var8);
            case 705:
                var8 = new Array(4);
                var8[0] = var11;
                if (!var9) {
                    _fun74397_ip = 874;
                    continue _fun74397
                }
            case 719:
                var21 = _closure1_slot27;
                var23 = _closure1_slot0;
                var24 = _closure1_slot2;
                var11 = 70;
                var11 = var24[var11];
                var11 = var23.bind(var3)(var11);
                var13 = var11.HeaderActionButton;
                var11 = {};
                var22 = 40;
                var25 = var24[var22];
                var25 = var23.bind(var3)(var25);
                var26 = var25.intl;
                var25 = var26.string;
                var22 = var24[var22];
                var22 = var23.bind(var3)(var22);
                var22 = var22.t;
                var22 = var22["112vVE"];
                var22 = var25.bind(var26)(var22);
                var11.accessibilityLabel = var22;
                var25 = var12.actionButton;
                var22 = new Array(2);
                var22[0] = var25;
                var25 = var12.mediaButton;
                var22[1] = var25;
                var11.style = var22;
                var22 = 67;
                var22 = var24[var22];
                var22 = var23.bind(var3)(var22);
                var22 = var22.TagIcon;
                var11.IconComponent = var22;
                var22 = function() {
                    var3 = _closure1_slot6;
                    var0 = var3.dismiss;
                    var0 = var0.bind(var3)();
                    var4 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var0 = 75;
                    var3 = var11[var0];
                    var0 = undefined;
                    var5 = var4.bind(var0)(var3);
                    var4 = var5.openLazy;
                    var10 = _closure1_slot0;
                    var2 = 49;
                    var2 = var11[var2];
                    var6 = var10.bind(var0)(var2);
                    var2 = 76;
                    var3 = var11[var2];
                    var2 = var11.paths;
                    var3 = var6.bind(var0)(var3, var2);
                    var2 = {};
                    var7 = _closure2_slot0;
                    var2.parentChannel = var7;
                    var7 = function arg0() {
                        var3 = _closure2_slot2;
                        var0 = undefined;
                        var2 = arg0;
                        var2 = var3.bind(var0)(var2);
                        var1 = _closure2_slot9;
                        var1 = var1.bind(var0)();
                        return var0;
                    };
                    var2.onSave = var7;
                    var7 = 40;
                    var8 = var11[var7];
                    var8 = var10.bind(var0)(var8);
                    var9 = var8.intl;
                    var8 = var9.string;
                    var7 = var11[var7];
                    var7 = var10.bind(var0)(var7);
                    var7 = var7.t;
                    var7 = var7.HPu3kq;
                    var7 = var8.bind(var9)(var7);
                    var2.title = var7;
                    var6 = _closure2_slot1;
                    var2.tags = var6;
                    var1 = function() {
                        var1 = _closure2_slot9;
                        var0 = undefined;
                        var1 = var1.bind(var0)();
                        return var0;
                    };
                    var2.onClose = var1;
                    var1 = 'ForumPostTagsActionSheet';
                    var1 = var4.bind(var5)(var3, var1, var2);
                    return var0;
                };
                var11.onPress = var22;
                var11.foregroundRipple = var14;
                var9 = var21.bind(var3)(var13, var11);
            case 874:
                var8[1] = var9;
                var11 = _closure1_slot0;
                var13 = _closure1_slot2;
                var9 = 42;
                var9 = var13[var9];
                var9 = var11.bind(var3)(var9);
                var9 = var9.PostComposerInputs;
                var9 = var9.CONTENT;
                var9 = var10 === var9;
                if (!var9) {
                    _fun74397_ip = 1050;
                    continue _fun74397
                }
            case 920:
                var13 = _closure1_slot27;
                var22 = _closure1_slot0;
                var23 = _closure1_slot2;
                var10 = 70;
                var10 = var23[var10];
                var10 = var22.bind(var3)(var10);
                var11 = var10.HeaderActionButton;
                var10 = {};
                var21 = 40;
                var24 = var23[var21];
                var24 = var22.bind(var3)(var24);
                var25 = var24.intl;
                var24 = var25.string;
                var21 = var23[var21];
                var21 = var22.bind(var3)(var21);
                var21 = var21.t;
                var21 = var21.iZ7Mz9;
                var21 = var24.bind(var25)(var21);
                var10.accessibilityLabel = var21;
                var21 = var12.actionButton;
                var10.style = var21;
                var21 = 77;
                var21 = var23[var21];
                var21 = var22.bind(var3)(var21);
                var21 = var21.ReactionIcon;
                var10.IconComponent = var21;
                var10.onPress = var20;
                var10.foregroundRipple = var14;
                var9 = var13.bind(var3)(var11, var10);
            case 1050:
                var8[2] = var9;
                var11 = _closure1_slot27;
                var10 = _closure1_slot8;
                var9 = {};
                var12 = var12.postButtonWrapper;
                var9.style = var12;
                var14 = _closure1_slot27;
                var13 = _closure1_slot0;
                var20 = _closure1_slot2;
                var12 = 78;
                var12 = var20[var12];
                var12 = var13.bind(var3)(var12);
                var13 = var12.Button;
                var12 = {};
                var23 = _closure1_slot0;
                var24 = _closure1_slot2;
                var20 = 40;
                var21 = var24[var20];
                var21 = var23.bind(var3)(var21);
                var22 = var21.intl;
                var21 = var22.string;
                var20 = var24[var20];
                var20 = var23.bind(var3)(var20);
                var20 = var20.t;
                if (var18) {
                    _fun74397_ip = 1168;
                    continue _fun74397
                }
            case 1153:
                var18 = var20.pIuQI6;
                var18 = var21.bind(var22)(var18);
                _fun74397_ip = 1179;
                continue _fun74397;
            case 1168:
                var20 = var20["R3BPH+"];
                var18 = var21.bind(var22)(var20);
            case 1179:
                var12.text = var18;
                var12.loading = var16;
                if (var16) {
                    _fun74397_ip = 1194;
                    continue _fun74397
                }
            case 1191:
                var16 = !var17;
            case 1194:
                var12.disabled = var16;
                var18 = _closure1_slot27;
                var17 = _closure1_slot0;
                var21 = _closure1_slot2;
                var16 = 79;
                var16 = var21[var16];
                var16 = var17.bind(var3)(var16);
                var17 = var16.ChatIcon;
                var16 = {};
                var20 = 'sm';
                var16.size = var20;
                var20 = _closure1_slot1;
                var19 = 20;
                var19 = var21[var19];
                var19 = var20.bind(var3)(var19);
                var19 = var19.colors;
                var19 = var19.WHITE;
                var16.color = var19;
                var16 = var18.bind(var3)(var17, var16);
                var12.icon = var16;
                var15 = function() {
                    _fun74405: for (var _fun74405_ip = 0;;) switch (_fun74405_ip) {
                        case 0:
                            var1 = _closure2_slot3;
                            if (!var1) {
                                _fun74405_ip = 23;
                                continue _fun74405
                            }
                        case 10:
                            var2 = _closure2_slot4;
                            var1 = undefined;
                            var0 = {};
                            var0 = var2.bind(var1)(var0);
                        case 23:
                            var0 = undefined;
                            return var0;
                    }
                };
                var12.onPress = var15;
                var12 = var14.bind(var3)(var13, var12);
                var9.children = var12;
                var9 = var11.bind(var3)(var10, var9);
                var8[3] = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot35 = var0;
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
    var3 = 2;
    var6 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.Keyboard;
    var _closure1_slot6 = var6;
    var6 = var3.Pressable;
    var _closure1_slot7 = var6;
    var13 = var3.StyleSheet;
    var3 = var3.View;
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 5;
    var6 = var5[var3];
    var6 = var11.bind(var0)(var6);
    var _closure1_slot10 = var6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.DraftType;
    var _closure1_slot11 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot12 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot13 = var3;
    var9 = 8;
    var3 = var5[var9];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot14 = var3;
    var3 = 9;
    var6 = var5[var3];
    var6 = var11.bind(var0)(var6);
    var _closure1_slot15 = var6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.SlowmodeType;
    var _closure1_slot16 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot17 = var3;
    var3 = 11;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot18 = var3;
    var14 = 12;
    var3 = var5[var14];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AbortCodes;
    var _closure1_slot19 = var6;
    var6 = var3.MAX_CHANNEL_NAME_LENGTH;
    var _closure1_slot20 = var6;
    var3 = var3.Permissions;
    var _closure1_slot21 = var3;
    var3 = 13;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ChannelFlags;
    var _closure1_slot22 = var3;
    var3 = 14;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ContentDismissActionType;
    var _closure1_slot23 = var3;
    var3 = 15;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ExpressionPickerViewType;
    var _closure1_slot24 = var3;
    var15 = 16;
    var3 = var5[var15];
    var3 = var4.bind(var0)(var3);
    var3 = var3.OpenThreadAnalyticsLocations;
    var _closure1_slot25 = var3;
    var3 = 17;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var12 = var3.Fonts;
    var3 = var3.NOOP;
    var _closure1_slot26 = var3;
    var3 = 18;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot27 = var6;
    var6 = var3.jsxs;
    var _closure1_slot28 = var6;
    var3 = var3.Fragment;
    var _closure1_slot29 = var3;
    var3 = 19;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'flex': 1,
        'backgroundColor': null,
        'position': 'relative'
    };
    var10 = 20;
    var16 = var5[var10];
    var16 = var11.bind(var0)(var16);
    var16 = var16.colors;
    var16 = var16.BACKGROUND_BASE_LOW;
    var8.backgroundColor = var16;
    var3.container = var8;
    var8 = {};
    var8.paddingBottom = var15;
    var3.scrollViewContentContainer = var8;
    var8 = {};
    var15 = 40;
    var8.height = var15;
    var3.avatarContainer = var8;
    var8 = {};
    var8.marginRight = var14;
    var3.avatar = var8;
    var8 = {};
    var8.padding = var9;
    var3.titleInput = var8;
    var8 = {
        'minHeight': 40,
        'height': 'auto'
    };
    var14 = 'auto';
    var12 = var12.DISPLAY_SEMIBOLD;
    var8.fontFamily = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.MOBILE_TEXT_HEADING_PRIMARY;
    var8.color = var12;
    var3.titleInputText = var8;
    var8 = {
        'width': '100%',
        'height': '100%',
        'padding': 0,
        'lineHeight': 20,
        'color': null,
        'textAlignVertical': 'top'
    };
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.MOBILE_TEXT_HEADING_PRIMARY;
    var8.color = var12;
    var12 = 'top';
    var3.contentInput = var8;
    var8 = {};
    var8.marginEnd = var9;
    var3.postIcon = var8;
    var8 = {};
    var15 = var5[var10];
    var15 = var11.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.WHITE;
    var8.color = var15;
    var3.postIconColor = var8;
    var8 = {};
    var15 = var5[var10];
    var15 = var11.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.TEXT_SUBTLE;
    var8.color = var15;
    var3.postIconColorDisabled = var8;
    var8 = {
        'marginLeft': 'auto',
        'borderRadius': null,
        'paddingHorizontal': 12,
        'height': 40,
        'overflow': 'hidden'
    };
    var15 = var5[var10];
    var15 = var11.bind(var0)(var15);
    var15 = var15.radii;
    var15 = var15.round;
    var8.borderRadius = var15;
    var3.postButton = var8;
    var8 = {};
    var8.marginLeft = var14;
    var3.postButtonWrapper = var8;
    var8 = {};
    var14 = var5[var10];
    var14 = var11.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.WHITE;
    var8.color = var14;
    var3.postButtonText = var8;
    var8 = {};
    var14 = var5[var10];
    var14 = var11.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.TEXT_SUBTLE;
    var8.color = var14;
    var3.postButtonTextDisabled = var8;
    var8 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'padding': 8
    };
    var3.tags = var8;
    var8 = {};
    var8.marginRight = var9;
    var3.tagIcon = var8;
    var8 = {
        'flex': 1,
        'flexDirection': 'row',
        'paddingHorizontal': 12,
        'paddingTop': 8
    };
    var3.editor = var8;
    var8 = {
        'width': '100%',
        'flex': 1,
        'flexDirection': 'column',
        'minHeight': 200
    };
    var3.editorBody = var8;
    var8 = {
        'flex': 1,
        'flexDirection': 'row',
        'alignItems': 'flex-end'
    };
    var3.usernameToChannel = var8;
    var8 = {
        'lineHeight': 20,
        'flex': 1
    };
    var3.channelName = var8;
    var8 = {};
    var18 = var13.absoluteFillObject;
    var19 = var8;
    var14 = copyDataProperties(var19, var18);
    var14 = var13.hairlineWidth;
    var13 = 'borderTopWidth';
    var8[var13] = var14;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.colors;
    var14 = var13.BORDER_SUBTLE;
    var13 = 'borderTopColor';
    var8[var13] = var14;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.colors;
    var14 = var13.BACKGROUND_BASE_LOW;
    var13 = 'backgroundColor';
    var8[var13] = var14;
    var8[var12] = var0;
    var3.actionsContainer = var8;
    var8 = {
        'flex': 1,
        'flexDirection': 'row',
        'alignItems': 'center',
        'padding': 8,
        'width': '100%'
    };
    var3.actions = var8;
    var8 = {
        'height': 40,
        'minHeight': 40,
        'maxHeight': 40,
        'width': 40,
        'minWidth': 40,
        'maxWidth': 40,
        'borderRadius': 20,
        'color': null,
        'backgroundColor': null,
        'marginLeft': 0,
        'marginRight': 0,
        'overflow': 'hidden'
    };
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.TEXT_DEFAULT;
    var8.color = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_MOD_NORMAL;
    var8.backgroundColor = var12;
    var3.actionButton = var8;
    var8 = {};
    var8.marginRight = var9;
    var3.mediaButton = var8;
    var8 = {
        'position': 'absolute',
        'bottom': 0,
        'left': 0,
        'right': 0,
        'zIndex': 100
    };
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_SURFACE_HIGH;
    var8.backgroundColor = var10;
    var3.horizontalAutocomplete = var8;
    var8 = {
        'marginBottom': 16,
        'marginLeft': 16,
        'marginRight': 16
    };
    var3.nameError = var8;
    var8 = {};
    var8.marginTop = var9;
    var3.messageError = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot30 = var3;
    var3 = {};
    var6 = 'function ForumComposerTsx1({contentOffset:{y:y}}){const{scrollTopValue}=this.__closure;return scrollTopValue.set(y);}';
    var3.code = var6;
    var _closure1_slot31 = var3;
    var3 = 80;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/forums/native/composer/ForumComposer.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun74406: for (var _fun74406_ip = 0;;) switch (_fun74406_ip) {
            case 0:
                var0 = arg0;
                var32 = var0.parentChannel;
                var _closure2_slot0 = var32;
                var1 = var0.thread;
                var _closure2_slot1 = var1;
                var38 = var0.threadSettingsDraft;
                var _closure2_slot2 = var38;
                var15 = var0.onClose;
                var _closure2_slot3 = var15;
                var40 = var0.message;
                var _closure2_slot4 = var40;
                var23 = var0.isEdit;
                var _closure2_slot5 = var23;
                var4 = undefined;
                var _closure2_slot8 = var4;
                var _closure2_slot9 = var4;
                var _closure2_slot10 = var4;
                var _closure2_slot11 = var4;
                var _closure2_slot12 = var4;
                var _closure2_slot13 = var4;
                var _closure2_slot14 = var4;
                var _closure2_slot15 = var4;
                var _closure2_slot16 = var4;
                var _closure2_slot17 = var4;
                var _closure2_slot18 = var4;
                var _closure2_slot19 = var4;
                var _closure2_slot20 = var4;
                var _closure2_slot21 = var4;
                var _closure2_slot22 = var4;
                var _closure2_slot23 = var4;
                var _closure2_slot24 = var4;
                var _closure2_slot25 = var4;
                var _closure2_slot26 = var4;
                var _closure2_slot27 = var4;
                var _closure2_slot28 = var4;
                var _closure2_slot29 = var4;
                var _closure2_slot30 = var4;
                var _closure2_slot31 = var4;
                var _closure2_slot32 = var4;
                var _closure2_slot33 = var4;
                var _closure2_slot34 = var4;
                var _closure2_slot35 = var4;
                var _closure2_slot36 = var4;
                var _closure2_slot37 = var4;
                var _closure2_slot38 = var4;
                var0 = _closure1_slot30;
                var22 = var0.bind(var4)();
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var0 = 21;
                var0 = var3[var0];
                var0 = var2.bind(var4)(var0);
                var0 = var0.bind(var4)();
                var0 = var0.analyticsLocations;
                var _closure2_slot6 = var0;
                var5 = _closure1_slot5;
                var2 = var5.useRef;
                var0 = null;
                var39 = var2.bind(var5)(var0);
                var5 = _closure1_slot0;
                var2 = 22;
                var6 = var3[var2];
                var11 = var5.bind(var4)(var6);
                var9 = var11.useStateFromStores;
                var6 = _closure1_slot18;
                var8 = new Array(1);
                var8[0] = var6;
                var7 = function() { // Environment: var13
                    _fun74407: for (var _fun74407_ip = 0;;) switch (_fun74407_ip) {
                        case 0:
                            var1 = _closure1_slot18;
                            var0 = var1.getCurrentUser;
                            var1 = var0.bind(var1)();
                            var0 = null;
                            var2 = var0 != var1;
                            if (!var2) {
                                _fun74407_ip = 28;
                                continue _fun74407
                            }
                        case 25:
                            var0 = var1;
                        case 28:
                            return var0;
                    }
                };
                var6 = new Array(0);
                var41 = var9.bind(var11)(var8, var7, var6);
                var _closure2_slot7 = var41;
                var6 = var3[var2];
                var9 = var5.bind(var4)(var6);
                var8 = var9.useStateFromStores;
                var6 = _closure1_slot12;
                var7 = new Array(1);
                var7[0] = var6;
                var6 = function() { // Environment: var13
                    var2 = _closure1_slot12;
                    var1 = var2.getSelfMember;
                    var0 = _closure2_slot0;
                    var0 = var0.guild_id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var12 = var8.bind(var9)(var7, var6);
                var6 = var3[var2];
                var9 = var5.bind(var4)(var6);
                var8 = var9.useStateFromStores;
                var6 = _closure1_slot10;
                var7 = new Array(1);
                var7[0] = var6;
                var6 = function() { // Environment: var13
                    var3 = _closure1_slot10;
                    var2 = var3.getDraft;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var0 = _closure1_slot11;
                    var0 = var0.ChannelMessage;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var17 = var8.bind(var9)(var7, var6);
                var3 = var3[var2];
                var7 = var5.bind(var4)(var3);
                var6 = var7.useStateFromStores;
                var3 = _closure1_slot9;
                var5 = new Array(1);
                var5[0] = var3;
                var3 = function() { // Environment: var13
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 23;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.isThemeDark;
                    var0 = _closure1_slot9;
                    var0 = var0.theme;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var5 = var6.bind(var7)(var5, var3);
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var3 = 20;
                var3 = var7[var3];
                var3 = var6.bind(var4)(var3);
                var3 = var3.unsafe_rawColors;
                if (var5) {
                    _fun74406_ip = 459;
                    continue _fun74406
                }
            case 451:
                var47 = var3.PRIMARY_460;
                _fun74406_ip = 465;
                continue _fun74406;
            case 459:
                var47 = var3.PRIMARY_330;
            case 465:
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var6 = var5[var2];
                var9 = var3.bind(var4)(var6);
                var8 = var9.useStateFromStores;
                var6 = _closure1_slot15;
                var7 = new Array(1);
                var7[0] = var6;
                var6 = function() { // Environment: var13
                    var3 = _closure1_slot15;
                    var2 = var3.getSlowmodeCooldownGuess;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var0 = _closure1_slot16;
                    var0 = var0.CreateThread;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var26 = var8.bind(var9)(var7, var6);
                _closure2_slot8 = var26;
                var2 = var5[var2];
                var7 = var3.bind(var4)(var2);
                var6 = var7.useStateFromStores;
                var2 = _closure1_slot17;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = function() { // Environment: var13
                    var3 = _closure1_slot17;
                    var2 = var3.getUploads;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var0 = _closure1_slot11;
                    var0 = var0.ChannelMessage;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var21 = var6.bind(var7)(var3, var2);
                _closure2_slot9 = var21;
                var3 = _closure1_slot1;
                var2 = 24;
                var2 = var5[var2];
                var2 = var3.bind(var4)(var2);
                var44 = var2.bind(var4)();
                _closure2_slot10 = var44;
                var2 = 25;
                var2 = var5[var2];
                var2 = var3.bind(var4)(var2);
                var25 = var2.bind(var4)();
                _closure2_slot11 = var25;
                var3 = _closure1_slot5;
                var2 = var3.useState;
                var49 = false;
                var3 = var2.bind(var3)(var49);
                var2 = _closure1_slot4;
                var11 = 2;
                var2 = var2.bind(var4)(var3, var11);
                var7 = 0;
                var28 = var2[var7];
                var6 = 1;
                var2 = var2[var6];
                _closure2_slot12 = var2;
                var8 = _closure1_slot5;
                var5 = var8.useState;
                if (var23) {
                    _fun74406_ip = 677;
                    continue _fun74406
                }
            case 661:
                var2 = var0 == var38;
                var9 = undefined;
                if (var2) {
                    _fun74406_ip = 675;
                    continue _fun74406
                }
            case 670:
                var9 = var38.name;
            case 675:
                _fun74406_ip = 694;
                continue _fun74406;
            case 677:
                var3 = var0 == var1;
                var2 = undefined;
                if (var3) {
                    _fun74406_ip = 691;
                    continue _fun74406
                }
            case 686:
                var2 = var1.name;
            case 691:
                var9 = var2;
            case 694:
                var14 = var0 != var9;
                var3 = '';
                var2 = var3;
                if (!var14) {
                    _fun74406_ip = 711;
                    continue _fun74406
                }
            case 708:
                var2 = var9;
            case 711:
                var5 = var5.bind(var8)(var2);
                var2 = _closure1_slot4;
                var2 = var2.bind(var4)(var5, var11);
                var36 = var2[var7];
                _closure2_slot13 = var36;
                var2 = var2[var6];
                _closure2_slot14 = var2;
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var9 = 26;
                var2 = var2[var9];
                var5 = var5.bind(var4)(var2);
                var2 = var5.useChannelTemplate;
                var16 = var2.bind(var5)(var32);
                var8 = var3;
                if (!var23) {
                    _fun74406_ip = 841;
                    continue _fun74406
                }
            case 779:
                var2 = var0 != var40;
                var8 = var3;
                if (!var2) {
                    _fun74406_ip = 841;
                    continue _fun74406
                }
            case 789:
                var2 = var0 != var1;
                var8 = var3;
                if (!var2) {
                    _fun74406_ip = 841;
                    continue _fun74406
                }
            case 799:
                var5 = _closure1_slot1;
                var14 = _closure1_slot2;
                var2 = 27;
                var2 = var14[var2];
                var18 = var5.bind(var4)(var2);
                var14 = var18.unparse;
                var5 = var40.content;
                var2 = var1.id;
                var8 = var14.bind(var18)(var5, var2);
            case 841:
                var5 = _closure1_slot5;
                var2 = var5.useState;
                if (var23) {
                    _fun74406_ip = 883;
                    continue _fun74406
                }
            case 853:
                var14 = var16;
                if (!(var0 != var17)) {
                    _fun74406_ip = 880;
                    continue _fun74406
                }
            case 860:
                var18 = var17.trim;
                var18 = var18.bind(var17)();
                var14 = var16;
                if (!(var3 !== var18)) {
                    _fun74406_ip = 880;
                    continue _fun74406
                }
            case 877:
                var14 = var17;
            case 880:
                var8 = var14;
            case 883:
                var5 = var2.bind(var5)(var8);
                var2 = _closure1_slot4;
                var2 = var2.bind(var4)(var5, var11);
                var20 = var2[var7];
                _closure2_slot15 = var20;
                var2 = var2[var6];
                _closure2_slot16 = var2;
                var8 = _closure1_slot0;
                var5 = _closure1_slot2;
                var14 = var5[var9];
                var17 = var8.bind(var4)(var14);
                var14 = var17.useAvailableTags;
                var17 = var14.bind(var17)(var32);
                var5 = var5[var9];
                var8 = var8.bind(var4)(var5);
                var5 = var8.useAppliedTags;
                var8 = var5.bind(var8)(var1);
                _closure2_slot17 = var8;
                var14 = _closure1_slot5;
                var9 = var14.useState;
                if (!var23) {
                    _fun74406_ip = 985;
                    continue _fun74406
                }
            case 978:
                var5 = var8;
                if (!(var0 == var17)) {
                    _fun74406_ip = 989;
                    continue _fun74406
                }
            case 985:
                var5 = new Array(0);
            case 989:
                var5 = var9.bind(var14)(var5);
                var9 = _closure1_slot4;
                var5 = var9.bind(var4)(var5, var11);
                var31 = var5[var7];
                _closure2_slot18 = var31;
                var30 = var5[var6];
                var14 = _closure1_slot5;
                var5 = var14.useState;
                var5 = var5.bind(var14)(var0);
                var5 = var9.bind(var4)(var5, var11);
                var35 = var5[var7];
                var5 = var5[var6];
                _closure2_slot19 = var5;
                var14 = _closure1_slot5;
                var5 = var14.useState;
                var5 = var5.bind(var14)(var0);
                var9 = var9.bind(var4)(var5, var11);
                var5 = var9[var7];
                var9 = var9[var6];
                _closure2_slot20 = var9;
                var14 = var0 == var12;
                var9 = undefined;
                if (var14) {
                    _fun74406_ip = 1095;
                    continue _fun74406
                }
            case 1089:
                var9 = var12.colorString;
            case 1095:
                var14 = var0 != var9;
                var56 = null;
                if (!var14) {
                    _fun74406_ip = 1107;
                    continue _fun74406
                }
            case 1104:
                var56 = var9;
            case 1107:
                var14 = var0 == var12;
                var9 = undefined;
                if (var14) {
                    _fun74406_ip = 1122;
                    continue _fun74406
                }
            case 1116:
                var9 = var12.colorStrings;
            case 1122:
                var14 = var0 != var9;
                var53 = null;
                if (!var14) {
                    _fun74406_ip = 1134;
                    continue _fun74406
                }
            case 1131:
                var53 = var9;
            case 1134:
                var14 = var0 == var12;
                var9 = undefined;
                if (var14) {
                    _fun74406_ip = 1149;
                    continue _fun74406
                }
            case 1143:
                var9 = var12.nick;
            case 1149:
                if (!(var0 == var9)) {
                    _fun74406_ip = 1184;
                    continue _fun74406
                }
            case 1153:
                var14 = _closure1_slot1;
                var17 = _closure1_slot2;
                var12 = 28;
                var12 = var17[var12];
                var14 = var14.bind(var4)(var12);
                var12 = var14.getName;
                var9 = var12.bind(var14)(var41);
            case 1184:
                var12 = var0 != var9;
                var57 = var3;
                if (!var12) {
                    _fun74406_ip = 1197;
                    continue _fun74406
                }
            case 1194:
                var57 = var9;
            case 1197:
                var12 = _closure1_slot5;
                var9 = var12.useRef;
                var51 = var9.bind(var12)(var0);
                _closure2_slot21 = var51;
                var14 = _closure1_slot1;
                var12 = _closure1_slot2;
                var9 = 29;
                var9 = var12[var9];
                var14 = var14.bind(var4)(var9);
                var9 = {};
                var50 = true;
                var9.includeKeyboardHeight = var50;
                var9 = var14.bind(var4)(var9);
                var24 = var9.insets;
                var18 = _closure1_slot5;
                var17 = var18.useCallback;
                var14 = function() { // Environment: var13
                    _fun74413: for (var _fun74413_ip = 0;;) switch (_fun74413_ip) {
                        case 0:
                            var0 = _closure2_slot21;
                            var1 = var0.current;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun74413_ip = 28;
                                continue _fun74413
                            }
                        case 18:
                            var0 = var1.focus;
                            var0 = var0.bind(var1)();
                        case 28:
                            var0 = undefined;
                            return var0;
                    }
                };
                var9 = new Array(0);
                var33 = var17.bind(var18)(var14, var9);
                var14 = _closure1_slot0;
                var9 = 30;
                var17 = var12[var9];
                var18 = var14.bind(var4)(var17);
                var17 = var18.useSharedValue;
                var19 = var17.bind(var18)(var7);
                _closure2_slot22 = var19;
                var12 = var12[var9];
                var17 = var14.bind(var4)(var12);
                var14 = var17.useAnimatedScrollHandler;
                var12 = function arg0() {
                    var0 = arg0;
                    var0 = var0.contentOffset;
                    var2 = var0.y;
                    var1 = _closure2_slot22;
                    var0 = var1.set;
                    var0 = var0.bind(var1)(var2);
                    return var0;
                };
                var18 = {};
                var18.scrollTopValue = var19;
                var12.__closure = var18;
                var18 = 16880842576840.0;
                var12.__workletHash = var18;
                var18 = _closure1_slot31;
                var12.__initData = var18;
                var12 = var14.bind(var17)(var12);
                var19 = _closure1_slot5;
                var18 = var19.useCallback;
                var17 = new Array(2);
                var17[0] = var23;
                var14 = var32.id;
                var17[1] = var14;
                var14 = function(arg0) { // Environment: var13
                    _fun74415: for (var _fun74415_ip = 0;;) switch (_fun74415_ip) {
                        case 0:
                            var2 = arg0;
                            var1 = _closure2_slot5;
                            if (var1) {
                                _fun74415_ip = 65;
                                continue _fun74415
                            }
                        case 13:
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 31;
                            var3 = var3[var1];
                            var1 = undefined;
                            var5 = var4.bind(var1)(var3);
                            var4 = var5.changeThreadSettings;
                            var1 = _closure2_slot0;
                            var3 = var1.id;
                            var1 = {};
                            var1.name = var2;
                            var1 = var4.bind(var5)(var3, var1);
                        case 65:
                            var1 = _closure2_slot14;
                            var0 = undefined;
                            var1 = var1.bind(var0)(var2);
                            return var0;
                    }
                };
                var34 = var18.bind(var19)(var14, var17);
                var19 = _closure1_slot5;
                var18 = var19.useCallback;
                var17 = new Array(1);
                var17[0] = var15;
                var14 = function(arg0) { // Environment: var13
                    var1 = _closure2_slot3;
                    var0 = undefined;
                    var5 = true;
                    var1 = var1.bind(var0)(var5);
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 32;
                    var2 = var4[var2];
                    var4 = var3.bind(var0)(var2);
                    var3 = var4.transitionToThread;
                    var2 = {};
                    var2.navigationReplace = var5;
                    var1 = _closure1_slot25;
                    var1 = var1.FORUM;
                    var2.source = var1;
                    var1 = arg0;
                    var1 = var3.bind(var4)(var1, var2);
                    return var0;
                };
                var19 = var18.bind(var19)(var14, var17);
                _closure2_slot23 = var19;
                var27 = _closure1_slot5;
                var18 = var27.useMemo;
                var17 = new Array(1);
                var17[0] = var31;
                var14 = function() { // Environment: var13
                    var0 = global;
                    var2 = var0.Set;
                    var3 = _closure2_slot18;
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
                };
                var27 = var18.bind(var27)(var14, var17);
                _closure2_slot24 = var27;
                var18 = _closure1_slot5;
                var17 = var18.useMemo;
                var14 = new Array(1);
                var14[0] = var8;
                var8 = function() { // Environment: var13
                    var0 = global;
                    var2 = var0.Set;
                    var3 = _closure2_slot17;
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
                };
                var18 = var17.bind(var18)(var8, var14);
                _closure2_slot25 = var18;
                var29 = _closure1_slot5;
                var17 = var29.useCallback;
                var8 = function() { // Environment: var13
                    var3 = _closure1_slot3;
                    var2 = undefined;
                    var1 = function*(arg0) { // Environment: var0
                        var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                            _fun74423: for (var _fun74423_ip = 0;;) switch (_fun74423_ip) {
                                case 0:
                                    StartGenerator();
                                    var7 = arg0;
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun74423_ip = 381;
                                        continue _fun74423
                                    }
                                case 13:
                                    var1 = _closure2_slot1;
                                    var3 = null;
                                    if (!(var3 != var1)) {
                                        _fun74423_ip = 373;
                                        continue _fun74423
                                    }
                                case 29:
                                    var1 = _closure2_slot4;
                                    var1 = var3 != var1;
                                    if (!var1) {
                                        _fun74423_ip = 53;
                                        continue _fun74423
                                    }
                                case 40:
                                    var3 = _closure2_slot4;
                                    var3 = var3.content;
                                    var1 = var3 !== var7;
                                case 53:
                                    if (!var1) {
                                        _fun74423_ip = 118;
                                        continue _fun74423
                                    }
                                case 56:
                                    var4 = _closure1_slot1;
                                    var3 = _closure1_slot2;
                                    var1 = 33;
                                    var3 = var3[var1];
                                    var1 = undefined;
                                    var6 = var4.bind(var1)(var3);
                                    var5 = var6.editMessage;
                                    var1 = _closure2_slot1;
                                    var4 = var1.id;
                                    var1 = _closure2_slot4;
                                    var3 = var1.id;
                                    var1 = {};
                                    var1.content = var7;
                                    var1 = var5.bind(var6)(var4, var3, var1);
                                case 118:
                                    var5 = _closure1_slot1;
                                    var4 = _closure1_slot2;
                                    var1 = 34;
                                    var1 = var4[var1];
                                    var4 = undefined;
                                    var7 = var5.bind(var4)(var1);
                                    var6 = var7.isEqual;
                                    var5 = _closure2_slot25;
                                    var1 = _closure2_slot24;
                                    var1 = var6.bind(var7)(var5, var1);
                                    if (var1) {
                                        _fun74423_ip = 242;
                                        continue _fun74423
                                    }
                                case 166:
                                    var5 = _closure1_slot1;
                                    var6 = _closure1_slot2;
                                    var1 = 35;
                                    var1 = var6[var1];
                                    var7 = var5.bind(var4)(var1);
                                    var6 = var7.updateForumPostTags;
                                    var1 = _closure2_slot1;
                                    var5 = var1.id;
                                    var1 = global;
                                    var9 = var1.Array;
                                    var8 = var9.from;
                                    var1 = _closure2_slot24;
                                    var1 = var8.bind(var9)(var1);
                                    var1 = var6.bind(var7)(var5, var1);
                                    SaveGenerator(address = 233);
                                case 231:
                                    return var1;
                                case 233:
                                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 5);
                                    if (!var5) {
                                        _fun74423_ip = 242;
                                        continue _fun74423
                                    }
                                case 239:
                                    return var1;
                                case 242:
                                    var1 = _closure2_slot1;
                                    var5 = var1.name;
                                    var1 = _closure2_slot13;
                                    if (!(var5 !== var1)) {
                                        _fun74423_ip = 320;
                                        continue _fun74423
                                    }
                                case 259:
                                    var5 = _closure1_slot1;
                                    var6 = _closure1_slot2;
                                    var1 = 36;
                                    var1 = var6[var1];
                                    var7 = var5.bind(var4)(var1);
                                    var6 = var7.saveChannel;
                                    var1 = _closure2_slot1;
                                    var5 = var1.id;
                                    var1 = {};
                                    var8 = _closure2_slot13;
                                    var1.name = var8;
                                    var1 = var6.bind(var7)(var5, var1);
                                    SaveGenerator(address = 314);
                                case 312:
                                    return var1;
                                case 314:
                                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 5);
                                    if (var5) {
                                        _fun74423_ip = 378;
                                        continue _fun74423
                                    }
                                case 320:
                                    var5 = _closure1_slot14;
                                    var3 = var5.getChannelId;
                                    var5 = var3.bind(var5)();
                                    var3 = _closure2_slot1;
                                    var3 = var3.id;
                                    if (!(var5 === var3)) {
                                        _fun74423_ip = 360;
                                        continue _fun74423
                                    }
                                case 347:
                                    var5 = _closure2_slot3;
                                    var3 = true;
                                    var3 = var5.bind(var4)(var3);
                                    _fun74423_ip = 373;
                                    continue _fun74423;
                                case 360:
                                    var3 = _closure2_slot23;
                                    var2 = _closure2_slot1;
                                    var2 = var3.bind(var4)(var2);
                                case 373:
                                    var2 = undefined;
                                    return var2;
                                case 378:
                                    return var1;
                                case 381:
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
                var14 = var8.bind(var4)();
                var8 = new Array(7);
                var8[0] = var1;
                var8[1] = var40;
                var8[2] = var18;
                var8[3] = var27;
                var8[4] = var36;
                var8[5] = var19;
                var8[6] = var15;
                var37 = var17.bind(var29)(var14, var8);
                _closure2_slot26 = var37;
                var14 = var0 == var38;
                var8 = undefined;
                if (var14) {
                    _fun74406_ip = 1597;
                    continue _fun74406
                }
            case 1592:
                var8 = var38.name;
            case 1597:
                var14 = var0 != var8;
                if (!var14) {
                    _fun74406_ip = 1618;
                    continue _fun74406
                }
            case 1604:
                var8 = var38.name;
                var8 = var8.length;
                var14 = var8 > var7;
            case 1618:
                var8 = var20.trim;
                var17 = var8.bind(var20)();
                var8 = var21.length;
                var29 = var8 > var7;
                var8 = var3 === var16;
                if (var8) {
                    _fun74406_ip = 1648;
                    continue _fun74406
                }
            case 1644:
                var8 = var17 !== var16;
            case 1648:
                if (!var8) {
                    _fun74406_ip = 1669;
                    continue _fun74406
                }
            case 1651:
                var16 = var17.length;
                var16 = var16 > var7;
                if (var16) {
                    _fun74406_ip = 1666;
                    continue _fun74406
                }
            case 1663:
                var16 = var29;
            case 1666:
                var8 = var16;
            case 1669:
                var29 = !var23;
                if (!var29) {
                    _fun74406_ip = 1678;
                    continue _fun74406
                }
            case 1675:
                var29 = var14;
            case 1678:
                if (!var29) {
                    _fun74406_ip = 1684;
                    continue _fun74406
                }
            case 1681:
                var29 = var8;
            case 1684:
                if (var29) {
                    _fun74406_ip = 1776;
                    continue _fun74406
                }
            case 1687:
                var8 = var23;
                if (!var8) {
                    _fun74406_ip = 1773;
                    continue _fun74406
                }
            case 1693:
                var16 = var0 == var1;
                var14 = undefined;
                if (var16) {
                    _fun74406_ip = 1707;
                    continue _fun74406
                }
            case 1702:
                var14 = var1.name;
            case 1707:
                var14 = var36 !== var14;
                if (var14) {
                    _fun74406_ip = 1732;
                    continue _fun74406
                }
            case 1714:
                var42 = var0 == var40;
                var16 = undefined;
                if (var42) {
                    _fun74406_ip = 1728;
                    continue _fun74406
                }
            case 1723:
                var16 = var40.content;
            case 1728:
                var14 = var17 !== var16;
            case 1732:
                if (var14) {
                    _fun74406_ip = 1770;
                    continue _fun74406
                }
            case 1735:
                var17 = _closure1_slot1;
                var40 = _closure1_slot2;
                var16 = 34;
                var16 = var40[var16];
                var17 = var17.bind(var4)(var16);
                var16 = var17.isEqual;
                var16 = var16.bind(var17)(var18, var27);
                var14 = !var16;
            case 1770:
                var8 = var14;
            case 1773:
                var29 = var8;
            case 1776:
                var14 = _closure1_slot0;
                var17 = _closure1_slot2;
                var8 = 37;
                var8 = var17[var8];
                var18 = var14.bind(var4)(var8);
                var16 = var18.useCreateForumPost;
                var8 = {};
                var8.parentChannel = var32;
                var8.threadSettings = var38;
                var8.appliedTags = var27;
                var8.onThreadCreated = var19;
                var27 = var16.bind(var18)(var8);
                _closure2_slot27 = var27;
                var19 = _closure1_slot5;
                var18 = var19.useCallback;
                var8 = function() { // Environment: var13
                    var3 = _closure1_slot3;
                    var2 = undefined;
                    var1 = function*(arg0) { // Environment: var0
                        var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                            _fun74427: for (var _fun74427_ip = 0;;) switch (_fun74427_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun74427_ip = 608;
                                        continue _fun74427
                                    }
                                case 10:
                                    var1 = arg0;
                                    var9 = var1.stickerId;
                                    var2 = undefined;
                                    var8 = undefined;
                                    var10 = undefined;
                                    var7 = undefined;
                                    var6 = undefined;
                                    SaveGenerator(address = 33);
                                case 31:
                                    return var2;
                                case 33:
                                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                    if (var3) {
                                        _fun74427_ip = 605;
                                        continue _fun74427
                                    }
                                case 42:
                                    var13 = _closure2_slot0;
                                    var12 = var13.hasFlag;
                                    var11 = _closure1_slot22;
                                    var11 = var11.REQUIRE_TAG;
                                    var11 = var12.bind(var13)(var11);
                                    if (!var11) {
                                        _fun74427_ip = 94;
                                        continue _fun74427
                                    }
                                case 76:
                                    var11 = _closure2_slot18;
                                    var12 = var11.length;
                                    var11 = 0;
                                    if (!(var11 !== var12)) {
                                        _fun74427_ip = 563;
                                        continue _fun74427
                                    }
                                case 94:
                                    var11 = _closure2_slot5;
                                    if (!var11) {
                                        _fun74427_ip = 114;
                                        continue _fun74427
                                    }
                                case 101:
                                    var12 = _closure2_slot1;
                                    var11 = null;
                                    if (!(var11 != var12)) {
                                        _fun74427_ip = 602;
                                        continue _fun74427
                                    }
                                case 114:
                                    var12 = _closure2_slot12;
                                    var11 = true;
                                    var11 = var12.bind(var2)(var11);
                                    var12 = _closure1_slot1;
                                    var13 = _closure1_slot2;
                                    var11 = 27;
                                    var11 = var13[var11];
                                    var14 = var12.bind(var2)(var11);
                                    var13 = var14.parse;
                                    var11 = _closure2_slot5;
                                    if (var11) {
                                        _fun74427_ip = 164;
                                        continue _fun74427
                                    }
                                case 158:
                                    var12 = _closure2_slot0;
                                    _fun74427_ip = 168;
                                    continue _fun74427;
                                case 164:
                                    var12 = _closure2_slot1;
                                case 168:
                                    var11 = _closure2_slot15;
                                    var11 = var13.bind(var14)(var12, var11);
                                    var8 = var11.content;
                                case 183: // try_start_0 // try_start_2
                                    var11 = _closure2_slot19;
                                    var14 = null;
                                    var11 = var11.bind(var2)(var14);
                                    var11 = _closure2_slot20;
                                    var11 = var11.bind(var2)(var14);
                                    var11 = _closure2_slot5;
                                    if (var11) {
                                        _fun74427_ip = 278;
                                        continue _fun74427
                                    }
                                case 210:
                                    var13 = _closure2_slot27;
                                    var12 = var8;
                                    var11 = var9;
                                    var14 = var14 != var11;
                                    var11 = undefined;
                                    if (!var14) {
                                        _fun74427_ip = 243;
                                        continue _fun74427
                                    }
                                case 229:
                                    var14 = var9;
                                    var9 = new Array(1);
                                    var9[0] = var14;
                                    var11 = var9;
                                case 243:
                                    var9 = _closure2_slot9;
                                    var9 = var13.bind(var2)(var12, var11, var9);
                                    SaveGenerator(address = 258);
                                case 256:
                                    return var9;
                                case 258:
                                    ResumeGenerator(result_out_reg = 9, return_bool_out_reg = 11);
                                    if (!var11) {
                                        _fun74427_ip = 297;
                                        continue _fun74427
                                    }
                                case 264: // try_end0 // try_end2
                                    var12 = _closure2_slot12;
                                    var11 = false;
                                    var11 = var12.bind(var2)(var11);
                                    return var9;
                                case 278: // try_start_1 // try_start_3
                                    var9 = _closure2_slot26;
                                    var8 = var9.bind(var2)(var8);
                                    SaveGenerator(address = 291);
                                case 289:
                                    return var8;
                                case 291:
                                    ResumeGenerator(result_out_reg = 8, return_bool_out_reg = 9);
                                    if (var9) {
                                        _fun74427_ip = 302;
                                        continue _fun74427
                                    }
                                case 297: // try_end1
                                    _fun74427_ip = 535;
                                    continue _fun74427;
                                case 302: // try_end3
                                    var11 = _closure2_slot12;
                                    var9 = false;
                                    var9 = var11.bind(var2)(var9);
                                    return var8;
                                case 316: // try_start_4 // catch_target0 // catch_target1
                                    CatchBlockStart(arg_register = 8);
                                    var5 = var8;
                                    var9 = var8.body;
                                    var10 = var9;
                                    var8 = null;
                                    var11 = var8 == var9;
                                    var9 = undefined;
                                    if (var11) {
                                        _fun74427_ip = 345;
                                        continue _fun74427
                                    }
                                case 340:
                                    var9 = var10.code;
                                case 345:
                                    if (!(var8 != var9)) {
                                        _fun74427_ip = 535;
                                        continue _fun74427
                                    }
                                case 352:
                                    var9 = var5;
                                    var9 = var9.body;
                                    var7 = var9;
                                    var10 = var8 == var9;
                                    var9 = undefined;
                                    if (var10) {
                                        _fun74427_ip = 377;
                                        continue _fun74427
                                    }
                                case 372:
                                    var9 = var7.code;
                                case 377:
                                    var7 = _closure1_slot19;
                                    var7 = var7.AUTOMOD_TITLE_BLOCKED;
                                    if (!(var9 !== var7)) {
                                        _fun74427_ip = 485;
                                        continue _fun74427
                                    }
                                case 391:
                                    var7 = var5;
                                    var7 = var7.body;
                                    var6 = var7;
                                    var8 = var8 == var7;
                                    var7 = undefined;
                                    if (var8) {
                                        _fun74427_ip = 416;
                                        continue _fun74427
                                    }
                                case 411:
                                    var7 = var6.code;
                                case 416:
                                    var6 = _closure1_slot19;
                                    var6 = var6.AUTOMOD_MESSAGE_BLOCKED;
                                    if (!(var7 === var6)) {
                                        _fun74427_ip = 535;
                                        continue _fun74427
                                    }
                                case 430:
                                    var7 = _closure2_slot20;
                                    var8 = _closure1_slot0;
                                    var9 = _closure1_slot2;
                                    var6 = 38;
                                    var6 = var9[var6];
                                    var10 = var8.bind(var2)(var6);
                                    var9 = var10.makeAutomodViolationError;
                                    var6 = var5;
                                    var8 = var6.body;
                                    var6 = _closure2_slot0;
                                    var6 = var9.bind(var10)(var8, var6);
                                    var6 = var7.bind(var2)(var6);
                                    _fun74427_ip = 535;
                                    continue _fun74427;
                                case 485:
                                    var6 = _closure2_slot19;
                                    var8 = _closure1_slot0;
                                    var9 = _closure1_slot2;
                                    var7 = 38;
                                    var7 = var9[var7];
                                    var9 = var8.bind(var2)(var7);
                                    var8 = var9.makeAutomodViolationError;
                                    var7 = var5.body;
                                    var5 = _closure2_slot0;
                                    var5 = var8.bind(var9)(var7, var5);
                                    var5 = var6.bind(var2)(var5);
                                case 535: // try_end4
                                    var6 = _closure2_slot12;
                                    var5 = false;
                                    var5 = var6.bind(var2)(var5);
                                    _fun74427_ip = 602;
                                    continue _fun74427;
                                case 548: // catch_target2 // catch_target3 // catch_target4
                                    CatchBlockStart(arg_register = 5);
                                    var7 = _closure2_slot12;
                                    var6 = false;
                                    var6 = var7.bind(var2)(var6);
                                    throw var5;
                                case 563:
                                    var4 = _closure2_slot20;
                                    var5 = _closure1_slot0;
                                    var6 = _closure1_slot2;
                                    var3 = 38;
                                    var3 = var6[var3];
                                    var5 = var5.bind(var2)(var3);
                                    var3 = var5.makeEmptyTagsError;
                                    var3 = var3.bind(var5)();
                                    var3 = var4.bind(var2)(var3);
                                case 602:
                                    return var2;
                                case 605:
                                    return var1;
                                case 608:
                                    return var0;
                            }
                        };
                        var1 = var0.next;
                        var1 = var1.bind(var0)();
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
                var16 = var8.bind(var4)();
                var8 = new Array(8);
                var8[0] = var32;
                var38 = var31.length;
                var8[1] = var38;
                var8[2] = var23;
                var8[3] = var1;
                var8[4] = var20;
                var8[5] = var37;
                var8[6] = var27;
                var8[7] = var21;
                var8 = var18.bind(var19)(var16, var8);
                _closure2_slot28 = var8;
                var19 = _closure1_slot5;
                var18 = var19.useCallback;
                var16 = new Array(6);
                var16[0] = var32;
                var16[1] = var26;
                var16[2] = var25;
                var16[3] = var21;
                var16[4] = var8;
                var16[5] = var20;
                var8 = function(arg0) { // Environment: var13
                    _fun74429: for (var _fun74429_ip = 0;;) switch (_fun74429_ip) {
                        case 0:
                            var0 = arg0;
                            var3 = var0.stickerId;
                            var _closure3_slot0 = var3;
                            var0 = _closure2_slot15;
                            var0 = var0.length;
                            var1 = 0;
                            if (!(var1 === var0)) {
                                _fun74429_ip = 55;
                                continue _fun74429
                            }
                        case 33:
                            var0 = _closure2_slot9;
                            var0 = var0.length;
                            if (!(var1 === var0)) {
                                _fun74429_ip = 55;
                                continue _fun74429
                            }
                        case 46:
                            var0 = null;
                            if (!(var0 != var3)) {
                                _fun74429_ip = 608;
                                continue _fun74429
                            }
                        case 55:
                            var0 = _closure2_slot8;
                            if (!(!(var0 > var1))) {
                                _fun74429_ip = 608;
                                continue _fun74429
                            }
                        case 66:
                            var0 = _closure2_slot15;
                            var1 = var0.length;
                            var0 = _closure2_slot11;
                            if (!(!(var1 > var0))) {
                                _fun74429_ip = 441;
                                continue _fun74429
                            }
                        case 86:
                            var1 = _closure1_slot32;
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 41;
                            var0 = var2[var0];
                            var2 = undefined;
                            var0 = var4.bind(var2)(var0);
                            var0 = var0.RESTRICTIONS;
                            var10 = var1.bind(var2)(var0);
                            var1 = var10.bind(var2)();
                            var0 = var1.done;
                            var9 = null;
                            var4 = false;
                            if (var0) {
                                _fun74429_ip = 420;
                                continue _fun74429
                            }
                        case 145:
                            var0 = var1.value;
                            var12 = var0.check;
                            var11 = _closure2_slot15;
                            var8 = _closure2_slot0;
                            var0 = var8.getGuildId;
                            var0 = var0.bind(var8)();
                            var0 = var9 != var0;
                            var8 = var12.bind(var2)(var11, var8, var0);
                            if (!(var4 === var8)) {
                                _fun74429_ip = 209;
                                continue _fun74429
                            }
                        case 189:
                            var11 = var10.bind(var2)();
                            var0 = var11.done;
                            var1 = var11;
                            if (var0) {
                                _fun74429_ip = 420;
                                continue _fun74429
                            }
                        case 207:
                            _fun74429_ip = 145;
                            continue _fun74429;
                        case 209:
                            var1 = _closure1_slot1;
                            var10 = _closure1_slot2;
                            var0 = 39;
                            var0 = var10[var0];
                            var4 = var1.bind(var2)(var0);
                            var1 = var4.show;
                            var0 = {};
                            var9 = _closure1_slot0;
                            var5 = 40;
                            var11 = var10[var5];
                            var11 = var9.bind(var2)(var11);
                            var13 = var11.intl;
                            var12 = var13.string;
                            var11 = var10[var5];
                            var11 = var9.bind(var2)(var11);
                            var11 = var11.t;
                            var11 = var11.mY3Y38;
                            var11 = var12.bind(var13)(var11);
                            var0.title = var11;
                            var8 = var8.body;
                            var0.body = var8;
                            var8 = var10[var5];
                            var8 = var9.bind(var2)(var8);
                            var12 = var8.intl;
                            var11 = var12.string;
                            var8 = var10[var5];
                            var8 = var9.bind(var2)(var8);
                            var8 = var8.t;
                            var8 = var8.KJnHq3;
                            var8 = var11.bind(var12)(var8);
                            var0.confirmText = var8;
                            var6 = function() {
                                var2 = _closure2_slot28;
                                var1 = {};
                                var0 = _closure3_slot0;
                                var1.stickerId = var0;
                                var0 = undefined;
                                var1 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var0.onConfirm = var6;
                            var6 = var10[var5];
                            var6 = var9.bind(var2)(var6);
                            var8 = var6.intl;
                            var6 = var8.string;
                            var5 = var10[var5];
                            var5 = var9.bind(var2)(var5);
                            var5 = var5.t;
                            var5 = var5.fsBWmS;
                            var5 = var6.bind(var8)(var5);
                            var0.cancelText = var5;
                            var0 = var1.bind(var4)(var0);
                            var0 = undefined;
                            return var0;
                        case 420:
                            var1 = _closure2_slot28;
                            var0 = {};
                            var0.stickerId = var3;
                            var0 = var1.bind(var2)(var0);
                            _fun74429_ip = 608;
                            continue _fun74429;
                        case 441:
                            var1 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var0 = 39;
                            var0 = var9[var0];
                            var8 = undefined;
                            var2 = var1.bind(var8)(var0);
                            var1 = var2.show;
                            var0 = {};
                            var4 = _closure1_slot0;
                            var3 = 40;
                            var5 = var9[var3];
                            var5 = var4.bind(var8)(var5);
                            var10 = var5.intl;
                            var6 = var10.string;
                            var5 = var9[var3];
                            var5 = var4.bind(var8)(var5);
                            var5 = var5.t;
                            var5 = var5.l8rYLt;
                            var5 = var6.bind(var10)(var5);
                            var0.title = var5;
                            var5 = var9[var3];
                            var5 = var4.bind(var8)(var5);
                            var6 = var5.intl;
                            var5 = var6.formatToPlainString;
                            var3 = var9[var3];
                            var3 = var4.bind(var8)(var3);
                            var3 = var3.t;
                            var4 = var3.FfjF15;
                            var3 = {};
                            var8 = _closure2_slot15;
                            var8 = var8.length;
                            var3.currentLength = var8;
                            var7 = _closure2_slot11;
                            var3.maxLength = var7;
                            var3 = var5.bind(var6)(var4, var3);
                            var0.body = var3;
                            var0 = var1.bind(var2)(var0);
                        case 608:
                            var0 = undefined;
                            return var0;
                    }
                };
                var27 = var18.bind(var19)(var8, var16);
                var18 = _closure1_slot5;
                var16 = var18.useCallback;
                var8 = new Array(2);
                var8[0] = var2;
                var2 = var32.id;
                var8[1] = var2;
                var2 = function(arg0) { // Environment: var13
                    var2 = arg0;
                    var4 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 31;
                    var1 = var1[var0];
                    var0 = undefined;
                    var6 = var4.bind(var0)(var1);
                    var5 = var6.changeDraft;
                    var4 = _closure2_slot0;
                    var4 = var4.id;
                    var3 = _closure1_slot11;
                    var3 = var3.ChannelMessage;
                    var3 = var5.bind(var6)(var4, var2, var3);
                    var1 = _closure2_slot16;
                    var1 = var1.bind(var0)(var2);
                    return var0;
                };
                var46 = var16.bind(var18)(var2, var8);
                var2 = 42;
                var2 = var17[var2];
                var16 = var14.bind(var4)(var2);
                var8 = var16.useFocusHandlers;
                var2 = {};
                var2.titleInput = var39;
                var2.contentInput = var51;
                var2 = var8.bind(var16)(var2);
                var8 = var2.setFocusedInput;
                _closure2_slot29 = var8;
                var26 = var2.focusLastInput;
                _closure2_slot30 = var26;
                var8 = var2.blurLastInput;
                _closure2_slot31 = var8;
                var25 = var2.focusedInput;
                var16 = _closure1_slot5;
                var8 = var16.useState;
                var2 = {
                    'start': 0,
                    'end': null
                };
                var2 = var8.bind(var16)(var2);
                var8 = _closure1_slot4;
                var2 = var8.bind(var4)(var2, var11);
                var19 = var2[var7];
                var2 = var2[var6];
                _closure2_slot32 = var2;
                var21 = _closure1_slot5;
                var18 = var21.useCallback;
                var16 = function(arg0) { // Environment: var13
                    var0 = arg0;
                    var0 = var0.nativeEvent;
                    var3 = var0.selection;
                    var2 = _closure2_slot32;
                    var1 = {};
                    var4 = var1;
                    var0 = copyDataProperties(var4, var3);
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var2 = new Array(0);
                var43 = var18.bind(var21)(var16, var2);
                var21 = _closure1_slot5;
                var18 = var21.useCallback;
                var16 = function(arg0) { // Environment: var13
                    _fun74433: for (var _fun74433_ip = 0;;) switch (_fun74433_ip) {
                        case 0:
                            var0 = arg0;
                            var2 = var0.start;
                            var _closure3_slot0 = var2;
                            var0 = var0.end;
                            var _closure3_slot1 = var0;
                            var0 = undefined;
                            var _closure3_slot2 = var0;
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var2 = 43;
                            var2 = var4[var2];
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.isAndroid;
                            var2 = var2.bind(var3)();
                            if (!var2) {
                                _fun74433_ip = 107;
                                continue _fun74433
                            }
                        case 65:
                            var2 = _closure2_slot21;
                            var3 = var2.current;
                            _closure3_slot2 = var3;
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun74433_ip = 107;
                                continue _fun74433
                            }
                        case 87:
                            var2 = global;
                            var2 = var2.setTimeout;
                            var1 = function() { // Environment: var1
                                _fun74434: for (var _fun74434_ip = 0;;) switch (_fun74434_ip) {
                                    case 0:
                                        var3 = _closure3_slot2;
                                        var2 = var3.setSelection;
                                        var1 = _closure3_slot0;
                                        var5 = _closure3_slot1;
                                        var0 = null;
                                        if (!(var0 == var5)) {
                                            _fun74434_ip = 33;
                                            continue _fun74434
                                        }
                                    case 27:
                                        var0 = _closure3_slot0;
                                        _fun74434_ip = 37;
                                        continue _fun74434;
                                    case 33:
                                        var0 = _closure3_slot1;
                                    case 37:
                                        var0 = var2.bind(var3)(var1, var0);
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var1 = var2.bind(var0)(var1);
                        case 107:
                            return var0;
                    }
                };
                var2 = new Array(0);
                var37 = var18.bind(var21)(var16, var2);
                var16 = 44;
                var2 = var17[var16];
                var21 = var14.bind(var4)(var2);
                var18 = var21.usePressEmojiHandler;
                var2 = {};
                var2.selection = var19;
                var2.draftContent = var20;
                var2.handleTextChange = var46;
                var2.focusTextInput = var33;
                var2.setSelection = var37;
                var2 = var18.bind(var21)(var2);
                _closure2_slot33 = var2;
                var2 = var17[var16];
                var21 = var14.bind(var4)(var2);
                var18 = var21.usePressGIFHandler;
                var2 = {};
                var2.selection = var19;
                var2.draftContent = var20;
                var2.handleTextChange = var46;
                var2.focusTextInput = var33;
                var2.setSelection = var37;
                var2 = var18.bind(var21)(var2);
                _closure2_slot34 = var2;
                var2 = 45;
                var2 = var17[var2];
                var21 = var14.bind(var4)(var2);
                var18 = var21.usePressHorizontalAutocompleteItemHandler;
                var2 = {};
                var2.draftContent = var20;
                var2.handleTextChange = var46;
                var2.setSelection = var37;
                var2.channel = var32;
                var21 = var18.bind(var21)(var2);
                var2 = 46;
                var2 = var17[var2];
                var17 = var14.bind(var4)(var2);
                var14 = var17.useBackspaceHandler;
                var2 = {};
                var2.selection = var19;
                var2.draftContent = var20;
                var2.handleTextChange = var46;
                var2 = var14.bind(var17)(var2);
                _closure2_slot35 = var2;
                var14 = _closure1_slot5;
                var2 = var14.useState;
                var2 = var2.bind(var14)(var7);
                var2 = var8.bind(var4)(var2, var11);
                var11 = var2[var7];
                var2 = var2[var6];
                _closure2_slot36 = var2;
                var8 = _closure1_slot5;
                var7 = var8.useCallback;
                var6 = function(arg0) { // Environment: var13
                    var2 = _closure2_slot36;
                    var0 = arg0;
                    var0 = var0.nativeEvent;
                    var0 = var0.layout;
                    var1 = var0.height;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var2 = new Array(0);
                var17 = var7.bind(var8)(var6, var2);
                var18 = var32;
                if (!var23) {
                    _fun74406_ip = 2422;
                    continue _fun74406
                }
            case 2419:
                var18 = var1;
            case 2422:
                _closure2_slot37 = var18;
                var2 = var36.replace;
                var1 = /\n/g;
                var8 = var2.bind(var36)(var1, var3);
                if (!(var0 != var18)) {
                    _fun74406_ip = 4198;
                    continue _fun74406
                }
            case 2458:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 38;
                var6 = var3[var1];
                var14 = var2.bind(var4)(var6);
                var7 = var14.renderError;
                var6 = {};
                var6.content = var36;
                var35 = var7.bind(var14)(var35, var6);
                var1 = var3[var1];
                var3 = var2.bind(var4)(var1);
                var2 = var3.renderError;
                var1 = {};
                var1.content = var20;
                var1.tags = var31;
                var45 = var2.bind(var3)(var5, var1);
                var1 = var18.isMediaChannel;
                var1 = var1.bind(var18)();
                if (var1) {
                    _fun74406_ip = 2547;
                    continue _fun74406
                }
            case 2541:
                var14 = new Array(0);
                _fun74406_ip = 2590;
                continue _fun74406;
            case 2547:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 47;
                var1 = var3[var1];
                var1 = var2.bind(var4)(var1);
                var1 = var1.DismissibleContent;
                var2 = var1.MEDIA_CHANNEL_MULTIPLE_THUMBNAIL_NOTICE;
                var1 = new Array(1);
                var1[0] = var2;
                var14 = var1;
            case 2590:
                var1 = function() {
                    var2 = _closure1_slot0;
                    var0 = _closure1_slot2;
                    var1 = 49;
                    var1 = var0[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = 48;
                    var1 = var0[var1];
                    var0 = var0.paths;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                _closure2_slot38 = var1;
                var3 = _closure1_slot28;
                var2 = _closure1_slot8;
                var1 = {};
                var6 = var22.container;
                var5 = new Array(2);
                var5[0] = var6;
                var6 = {};
                var7 = var24.top;
                var6.paddingTop = var7;
                var7 = var24.bottom;
                var7 = var7 + var11;
                var6.paddingBottom = var7;
                var5[1] = var6;
                var1.style = var5;
                var7 = _closure1_slot27;
                var11 = _closure1_slot1;
                var38 = _closure1_slot2;
                var5 = 50;
                var5 = var38[var5];
                var6 = var11.bind(var4)(var5);
                var5 = {};
                var5.channel = var32;
                var5.height = var16;
                var5.onClose = var15;
                var15 = function() {
                    var1 = _closure2_slot31;
                    var0 = undefined;
                    var1 = var1.bind(var0)();
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 51;
                    var1 = var3[var1];
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.openForumGuidelinesActionSheet;
                    var1 = {};
                    var4 = _closure2_slot0;
                    var1.channel = var4;
                    var4 = function() {
                        var1 = _closure2_slot30;
                        var0 = undefined;
                        var1 = var1.bind(var0)();
                        return var0;
                    };
                    var1.onClose = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var5.onGuidelinesPress = var15;
                var5.submitting = var28;
                var5.title = var8;
                var6 = var7.bind(var4)(var6, var5);
                var5 = new Array(2);
                var5[0] = var6;
                var8 = _closure1_slot28;
                var7 = _closure1_slot29;
                var6 = {};
                var9 = var38[var9];
                var9 = var11.bind(var4)(var9);
                var11 = var9.ScrollView;
                var9 = {
                    'onScroll': null,
                    'scrollEventThrottle': 16,
                    'keyboardShouldPersistTaps': 'always',
                    'nestedScrollEnabled': false,
                    'contentContainerStyle': null,
                    'keyboardDismissMode': 'on-drag'
                };
                var9.onScroll = var12;
                var12 = var22.scrollViewContentContainer;
                var9.contentContainerStyle = var12;
                var16 = _closure1_slot27;
                var37 = _closure1_slot0;
                var12 = 52;
                var12 = var38[var12];
                var12 = var37.bind(var4)(var12);
                var15 = var12.FormInput;
                var12 = {};
                var12.ref = var39;
                var39 = var22.titleInput;
                var12.style = var39;
                var39 = var22.titleInputText;
                var12.inputTextStyle = var39;
                var12.showTopContainer = var49;
                var48 = 40;
                var39 = var38[var48];
                var39 = var37.bind(var4)(var39);
                var42 = var39.intl;
                var40 = var42.string;
                var39 = var38[var48];
                var39 = var37.bind(var4)(var39);
                var39 = var39.t;
                var39 = var39.lU4dDS;
                var39 = var40.bind(var42)(var39);
                var12.placeholder = var39;
                var12.placeholderTextColor = var47;
                var12.large = var50;
                var12.multiline = var50;
                var12.value = var36;
                var36 = 53;
                var36 = var38[var36];
                var36 = var37.bind(var4)(var36);
                var36 = var36.ClearButtonVisibility;
                var36 = var36.NEVER;
                var12.clearButtonVisibility = var36;
                var36 = _closure1_slot20;
                var12.maxLength = var36;
                var12.onChange = var34;
                var34 = function() {
                    _fun74439: for (var _fun74439_ip = 0;;) switch (_fun74439_ip) {
                        case 0:
                            var1 = _closure2_slot5;
                            if (var1) {
                                _fun74439_ip = 181;
                                continue _fun74439
                            }
                        case 13:
                            var1 = _closure2_slot2;
                            var5 = null;
                            var3 = var5 == var1;
                            var2 = undefined;
                            var1 = undefined;
                            if (var3) {
                                _fun74439_ip = 39;
                                continue _fun74439
                            }
                        case 30:
                            var3 = _closure2_slot2;
                            var1 = var3.name;
                        case 39:
                            if (!(var5 != var1)) {
                                _fun74439_ip = 181;
                                continue _fun74439
                            }
                        case 46:
                            var4 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var1 = 54;
                            var1 = var6[var1];
                            var6 = var4.bind(var2)(var1);
                            var1 = _closure2_slot2;
                            var1 = var5 == var1;
                            var4 = undefined;
                            if (var1) {
                                _fun74439_ip = 91;
                                continue _fun74439
                            }
                        case 82:
                            var1 = _closure2_slot2;
                            var4 = var1.name;
                        case 91:
                            var1 = true;
                            var1 = var6.bind(var2)(var4, var1);
                            var4 = _closure2_slot2;
                            var5 = var5 == var4;
                            var4 = undefined;
                            if (var5) {
                                _fun74439_ip = 121;
                                continue _fun74439
                            }
                        case 112:
                            var5 = _closure2_slot2;
                            var4 = var5.name;
                        case 121:
                            if (!(var1 !== var4)) {
                                _fun74439_ip = 181;
                                continue _fun74439
                            }
                        case 125:
                            var4 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var3 = 31;
                            var3 = var5[var3];
                            var6 = var4.bind(var2)(var3);
                            var5 = var6.changeThreadSettings;
                            var3 = _closure2_slot0;
                            var4 = var3.id;
                            var3 = {};
                            var3.name = var1;
                            var3 = var5.bind(var6)(var4, var3);
                            var0 = _closure2_slot14;
                            var0 = var0.bind(var2)(var1);
                        case 181:
                            var0 = undefined;
                            return var0;
                    }
                };
                var12.onBlur = var34;
                var34 = function() {
                    _fun74440: for (var _fun74440_ip = 0;;) switch (_fun74440_ip) {
                        case 0:
                            var4 = _closure2_slot10;
                            var5 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var8 = 55;
                            var3 = var0[var8];
                            var0 = undefined;
                            var3 = var5.bind(var0)(var3);
                            var3 = var3.KeyboardTypes;
                            var3 = var3.MEDIA;
                            var3 = var4 !== var3;
                            if (!var3) {
                                _fun74440_ip = 88;
                                continue _fun74440
                            }
                        case 51:
                            var5 = _closure2_slot10;
                            var6 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var4 = var4[var8];
                            var4 = var6.bind(var0)(var4);
                            var4 = var4.KeyboardTypes;
                            var4 = var4.EXPRESSION;
                            var3 = var5 !== var4;
                        case 88:
                            if (var3) {
                                _fun74440_ip = 162;
                                continue _fun74440
                            }
                        case 91:
                            var7 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var3 = 56;
                            var3 = var6[var3];
                            var5 = var7.bind(var0)(var3);
                            var4 = var5.setKeyboardType;
                            var3 = {};
                            var6 = var6[var8];
                            var6 = var7.bind(var0)(var6);
                            var6 = var6.KeyboardTypes;
                            var6 = var6.SYSTEM;
                            var3.type = var6;
                            var6 = {};
                            var7 = true;
                            var6.keyboardWillOpen = var7;
                            var3.context = var6;
                            var3 = var4.bind(var5)(var3);
                        case 162:
                            var2 = _closure2_slot29;
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var1 = 42;
                            var1 = var4[var1];
                            var1 = var3.bind(var0)(var1);
                            var1 = var1.PostComposerInputs;
                            var1 = var1.TITLE;
                            var1 = var2.bind(var0)(var1);
                            return var0;
                    }
                };
                var12.onFocus = var34;
                var12.autoFocus = var50;
                var12.autoCorrect = var50;
                var34 = 'none';
                var12.textContentType = var34;
                var34 = 'next';
                var12.returnKeyType = var34;
                var12.onNext = var33;
                var15 = var16.bind(var4)(var15, var12);
                var12 = new Array(3);
                var12[0] = var15;
                var16 = var0 != var35;
                var15 = null;
                if (!var16) {
                    _fun74406_ip = 3089;
                    continue _fun74406
                }
            case 3043:
                var34 = _closure1_slot27;
                var33 = _closure1_slot1;
                var36 = _closure1_slot2;
                var16 = 57;
                var16 = var36[var16];
                var33 = var33.bind(var4)(var16);
                var16 = {};
                var36 = var22.nameError;
                var16.style = var36;
                var16.children = var35;
                var15 = var34.bind(var4)(var33, var16);
            case 3089:
                var12[1] = var15;
                var34 = _closure1_slot28;
                var33 = _closure1_slot8;
                var16 = {};
                var15 = var22.editor;
                var16.style = var15;
                var15 = var0 != var41;
                if (!var15) {
                    _fun74406_ip = 3327;
                    continue _fun74406
                }
            case 3123:
                var37 = _closure1_slot27;
                var36 = _closure1_slot7;
                var35 = {};
                var38 = var22.avatarContainer;
                var35.style = var38;
                var38 = function() {
                    _fun74441: for (var _fun74441_ip = 0;;) switch (_fun74441_ip) {
                        case 0:
                            var1 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 58;
                            var0 = var2[var0];
                            var2 = undefined;
                            var1 = var1.bind(var2)(var0);
                            var0 = {};
                            var4 = _closure2_slot7;
                            var4 = var4.id;
                            var0.userId = var4;
                            var4 = _closure2_slot37;
                            var4 = var4.id;
                            var0.channelId = var4;
                            var5 = _closure2_slot4;
                            var4 = null;
                            var5 = var4 == var5;
                            var4 = undefined;
                            if (var5) {
                                _fun74441_ip = 80;
                                continue _fun74441
                            }
                        case 71:
                            var5 = _closure2_slot4;
                            var4 = var5.id;
                        case 80:
                            var0.messageId = var4;
                            var3 = _closure2_slot6;
                            var0.sourceAnalyticsLocations = var3;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var35.onPress = var38;
                var40 = _closure1_slot27;
                var39 = _closure1_slot1;
                var42 = _closure1_slot2;
                var38 = 59;
                var38 = var42[var38];
                var39 = var39.bind(var4)(var38);
                var38 = {};
                var38.animate = var50;
                var42 = var22.avatar;
                var38.style = var42;
                var38.user = var41;
                var42 = var0 == var32;
                var52 = undefined;
                if (var42) {
                    _fun74406_ip = 3218;
                    continue _fun74406
                }
            case 3208:
                var42 = var32.getGuildId;
                var52 = var42.bind(var32)();
            case 3218:
                var54 = var0 != var52;
                var42 = undefined;
                if (!var54) {
                    _fun74406_ip = 3230;
                    continue _fun74406
                }
            case 3227:
                var42 = var52;
            case 3230:
                var38.guildId = var42;
                var41 = var41.avatarDecoration;
                var38.avatarDecoration = var41;
                var42 = _closure1_slot0;
                var41 = _closure1_slot2;
                var52 = var41[var48];
                var52 = var42.bind(var4)(var52);
                var54 = var52.intl;
                var52 = var54.formatToPlainString;
                var41 = var41[var48];
                var41 = var42.bind(var4)(var41);
                var41 = var41.t;
                var42 = var41.LvU3nj;
                var41 = {};
                var41.nickname = var57;
                var41 = var52.bind(var54)(var42, var41);
                var38.accessibilityLabel = var41;
                var38 = var40.bind(var4)(var39, var38);
                var35.children = var38;
                var15 = var37.bind(var4)(var36, var35);
            case 3327:
                var35 = new Array(2);
                var35[0] = var15;
                var38 = _closure1_slot28;
                var37 = _closure1_slot8;
                var36 = {};
                var15 = var22.editorBody;
                var36.style = var15;
                var40 = _closure1_slot28;
                var39 = _closure1_slot8;
                var15 = {};
                var41 = var22.usernameToChannel;
                var15.style = var41;
                var55 = _closure1_slot0;
                var54 = _closure1_slot2;
                var41 = var54[var48];
                var41 = var55.bind(var4)(var41);
                var58 = var41.intl;
                var52 = var58.formatToPlainString;
                var41 = var54[var48];
                var41 = var55.bind(var4)(var41);
                var41 = var41.t;
                var42 = var41["QicUf+"];
                var41 = {};
                var41.nickname = var57;
                var59 = var32.name;
                var41.channelName = var59;
                var41 = var52.bind(var58)(var42, var41);
                var15.accessibilityLabel = var41;
                var52 = _closure1_slot27;
                var41 = 60;
                var41 = var54[var41];
                var41 = var55.bind(var4)(var41);
                var42 = var41.RoleLabel;
                var41 = {};
                var41.name = var57;
                var41.color = var56;
                var41.colors = var53;
                var42 = var52.bind(var4)(var42, var41);
                var41 = new Array(2);
                var41[0] = var42;
                var53 = _closure1_slot28;
                var42 = 61;
                var42 = var54[var42];
                var42 = var55.bind(var4)(var42);
                var52 = var42.Text;
                var42 = {
                    'color': 'text-default',
                    'variant': 'text-xs/medium',
                    'style': null,
                    'lineClamp': 1
                };
                var56 = var22.channelName;
                var42.style = var56;
                var56 = var54[var48];
                var56 = var55.bind(var4)(var56);
                var57 = var56.intl;
                var56 = var57.format;
                var54 = var54[var48];
                var54 = var55.bind(var4)(var54);
                var54 = var54.t;
                var55 = var54["6Y1Kev"];
                var54 = {};
                var58 = var32.name;
                var54.channelName = var58;
                var55 = var56.bind(var57)(var55, var54);
                var54 = [' '];
                var54[1] = var55;
                var42.children = var54;
                var42 = var53.bind(var4)(var52, var42);
                var41[1] = var42;
                var15.children = var41;
                var15 = var40.bind(var4)(var39, var15);
                var39 = new Array(3);
                var39[0] = var15;
                var40 = var0 != var45;
                var15 = null;
                if (!var40) {
                    _fun74406_ip = 3708;
                    continue _fun74406
                }
            case 3662:
                var42 = _closure1_slot27;
                var41 = _closure1_slot1;
                var52 = _closure1_slot2;
                var40 = 57;
                var40 = var52[var40];
                var41 = var41.bind(var4)(var40);
                var40 = {};
                var52 = var22.messageError;
                var40.style = var52;
                var40.children = var45;
                var15 = var42.bind(var4)(var41, var40);
            case 3708:
                var39[1] = var15;
                var42 = _closure1_slot27;
                var45 = _closure1_slot0;
                var15 = _closure1_slot2;
                var40 = 62;
                var40 = var15[var40];
                var40 = var45.bind(var4)(var40);
                var41 = var40.TextInput;
                var40 = {};
                var40.ref = var51;
                var51 = var22.contentInput;
                var40.style = var51;
                var40.multiline = var50;
                var40.scrollEnabled = var49;
                var49 = var15[var48];
                var49 = var45.bind(var4)(var49);
                var50 = var49.intl;
                var49 = var50.string;
                var48 = var15[var48];
                var48 = var45.bind(var4)(var48);
                var48 = var48.t;
                var48 = var48["8IPnv1"];
                var48 = var49.bind(var50)(var48);
                var40.placeholder = var48;
                var40.placeholderTextColor = var47;
                var40.value = var20;
                var40.onChangeText = var46;
                var40.onSelectionChange = var43;
                var43 = function() {
                    _fun74442: for (var _fun74442_ip = 0;;) switch (_fun74442_ip) {
                        case 0:
                            var4 = _closure2_slot10;
                            var5 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var8 = 55;
                            var3 = var0[var8];
                            var0 = undefined;
                            var3 = var5.bind(var0)(var3);
                            var3 = var3.KeyboardTypes;
                            var3 = var3.MEDIA;
                            if (!(var4 === var3)) {
                                _fun74442_ip = 119;
                                continue _fun74442
                            }
                        case 48:
                            var7 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var3 = 56;
                            var3 = var6[var3];
                            var5 = var7.bind(var0)(var3);
                            var4 = var5.setKeyboardType;
                            var3 = {};
                            var6 = var6[var8];
                            var6 = var7.bind(var0)(var6);
                            var6 = var6.KeyboardTypes;
                            var6 = var6.SYSTEM;
                            var3.type = var6;
                            var6 = {};
                            var7 = true;
                            var6.keyboardWillOpen = var7;
                            var3.context = var6;
                            var3 = var4.bind(var5)(var3);
                        case 119:
                            var2 = _closure2_slot29;
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var1 = 42;
                            var1 = var4[var1];
                            var1 = var3.bind(var0)(var1);
                            var1 = var1.PostComposerInputs;
                            var1 = var1.CONTENT;
                            var1 = var2.bind(var0)(var1);
                            return var0;
                    }
                };
                var40.onFocus = var43;
                var43 = 55;
                var43 = var15[var43];
                var43 = var45.bind(var4)(var43);
                var43 = var43.KeyboardTypes;
                var43 = var43.EXPRESSION;
                var43 = var44 !== var43;
                var40.showSoftInputOnFocus = var43;
                var40 = var42.bind(var4)(var41, var40);
                var39[2] = var40;
                var36.children = var39;
                var36 = var38.bind(var4)(var37, var36);
                var35[1] = var36;
                var16.children = var35;
                var16 = var34.bind(var4)(var33, var16);
                var12[2] = var16;
                var9.children = var12;
                var11 = var8.bind(var4)(var11, var9);
                var9 = new Array(5);
                var9[0] = var11;
                var16 = _closure1_slot27;
                var12 = _closure1_slot34;
                var11 = {};
                var11.tags = var31;
                var11 = var16.bind(var4)(var12, var11);
                var9[1] = var11;
                var16 = _closure1_slot27;
                var12 = _closure1_slot35;
                var11 = {};
                var11.channel = var32;
                var11.tags = var31;
                var11.setTags = var30;
                var11.canPost = var29;
                var11.submitting = var28;
                var11.onSubmit = var27;
                var27 = function() {
                    var1 = _closure1_slot6;
                    var0 = var1.dismiss;
                    var0 = var0.bind(var1)();
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 63;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.openExpressionPickerActionSheet;
                    var1 = {};
                    var6 = _closure2_slot0;
                    var6 = var6.id;
                    var1.channelId = var6;
                    var6 = _closure2_slot33;
                    var1.onPressEmoji = var6;
                    var6 = _closure1_slot26;
                    var1.onPressSticker = var6;
                    var6 = _closure2_slot34;
                    var1.onPressGIF = var6;
                    var5 = _closure2_slot35;
                    var1.onBackspace = var5;
                    var5 = _closure1_slot24;
                    var6 = var5.EMOJI;
                    var4 = new Array(2);
                    var4[0] = var6;
                    var5 = var5.GIF;
                    var4[1] = var5;
                    var1.visibleTabs = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var11.onShowExpressionPicker = var27;
                var11.focusLastInput = var26;
                var11.lastInput = var25;
                var11.isEdit = var23;
                var11.onLayout = var17;
                var11 = var16.bind(var4)(var12, var11);
                var9[2] = var11;
                var17 = _closure1_slot27;
                var11 = _closure1_slot1;
                var12 = 64;
                var12 = var15[var12];
                var16 = var11.bind(var4)(var12);
                var12 = {};
                var23 = var22.horizontalAutocomplete;
                var22 = new Array(2);
                var22[0] = var23;
                var23 = {};
                var24 = var24.bottom;
                var23.bottom = var24;
                var22[1] = var23;
                var12.style = var22;
                var12.onPressAutocompleteItem = var21;
                var12.text = var20;
                var12.selection = var19;
                var12.channel = var18;
                var12 = var17.bind(var4)(var16, var12);
                var9[3] = var12;
                var12 = _closure1_slot27;
                var10 = 65;
                var10 = var15[var10];
                var11 = var11.bind(var4)(var10);
                var10 = {};
                var10.contentTypes = var14;
                var13 = function arg0() {
                    _fun74444: for (var _fun74444_ip = 0;;) switch (_fun74444_ip) {
                        case 0:
                            var0 = arg0;
                            var3 = var0.visibleContent;
                            var0 = var0.markAsDismissed;
                            var _closure3_slot0 = var0;
                            var2 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var0 = 47;
                            var0 = var4[var0];
                            var4 = undefined;
                            var0 = var2.bind(var4)(var0);
                            var0 = var0.DismissibleContent;
                            var2 = var0.MEDIA_CHANNEL_MULTIPLE_THUMBNAIL_NOTICE;
                            var0 = null;
                            if (!(var3 === var2)) {
                                _fun74444_ip = 137;
                                continue _fun74444
                            }
                        case 64:
                            var3 = _closure1_slot27;
                            var2 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var1 = 66;
                            var1 = var6[var1];
                            var1 = var2.bind(var4)(var1);
                            var2 = var1.DismissibleActionSheet;
                            var1 = {};
                            var5 = function() {
                                var2 = _closure3_slot0;
                                var0 = _closure1_slot23;
                                var1 = var0.UNKNOWN;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var1.markAsDismissed = var5;
                            var5 = 'ThumbnailBottomSheet';
                            var1.actionSheetKey = var5;
                            var5 = _closure2_slot38;
                            var1.importer = var5;
                            var0 = var3.bind(var4)(var2, var1);
                        case 137:
                            return var0;
                    }
                };
                var10.children = var13;
                var10 = var12.bind(var4)(var11, var10);
                var9[4] = var10;
                var6.children = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[1] = var6;
                var1.children = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 4198:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 27, 3198, 4000, 1683, 3093, 1672, 6602, 3999, 1621, 660, 1379, 1369, 1565, 1233, 483, 33, 1297, 671, 5777, 566, 3207, 3915, 7735, 8987, 5639, 3237, 4895, 3721, 6548, 3944, 6593, 22, 8989, 6532, 9341, 9342, 3937, 1234, 9343, 9345, 478, 9346, 9347, 9350, 1358, 9351, 1307, 9353, 9354, 5430, 5459, 7676, 1567, 1467, 5937, 7421, 5504, 9357, 3942, 4878, 9358, 9476, 6008, 9481, 9482, 9484, 9486, 5374, 9692, 4853, 9490, 6536, 3279, 9694, 7747, 4084, 4840, 2]);