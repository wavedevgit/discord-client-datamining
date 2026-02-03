// modules/emoji_picker/native/components/EmojiPickerActionSheet.tsx
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
    var3 = var10.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.EXPRESSION_FOOTER_HEIGHT;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.EmojiIntention;
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot9 = var6;
    var3 = var3.jsxs;
    var _closure1_slot10 = var3;
    var3 = 7;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 'column';
    var8.flexDirection = var9;
    var3.header = var8;
    var8 = {
        'display': 'flex',
        'flexDirection': 'row'
    };
    var9 = 8;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var11 = -var11;
    var8.marginBottom = var11;
    var3.searchContainer = var8;
    var8 = {};
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_8;
    var8.paddingHorizontal = var11;
    var3.content = var8;
    var8 = {
        'flexDirection': 'column',
        'alignItems': 'center'
    };
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var8.marginBottom = var11;
    var3.headerText = var8;
    var8 = {};
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_8;
    var8.marginTop = var9;
    var3.headerSpacer = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot11 = var3;
    var3 = 36;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/emoji_picker/native/components/EmojiPickerActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun57334: for (var _fun57334_ip = 0;;) switch (_fun57334_ip) {
            case 0:
                var0 = arg0;
                var11 = var0.onClose;
                var _closure2_slot0 = var11;
                var24 = var0.channel;
                var23 = var0.guildId;
                var _closure2_slot1 = var23;
                var30 = var0.onPressEmoji;
                var _closure2_slot2 = var30;
                var25 = var0.pickerIntention;
                var _closure2_slot3 = var25;
                var5 = var0.autoFocus;
                var3 = undefined;
                if (!(var5 === var3)) {
                    _fun57334_ip = 63;
                    continue _fun57334
                }
            case 61:
                var5 = true;
            case 63:
                var29 = var0.startExpanded;
                if (!(var29 === var3)) {
                    _fun57334_ip = 75;
                    continue _fun57334
                }
            case 73:
                var29 = true;
            case 75:
                var20 = var0.analyticsObject;
                var19 = var0.messageId;
                var _closure2_slot4 = var3;
                var _closure2_slot5 = var3;
                var _closure2_slot6 = var3;
                var _closure2_slot7 = var3;
                var _closure2_slot8 = var3;
                var _closure2_slot9 = var3;
                var _closure2_slot10 = var3;
                var _closure2_slot11 = var3;
                var _closure2_slot12 = var3;
                var0 = _closure1_slot11;
                var8 = var0.bind(var3)();
                _closure2_slot4 = var8;
                var4 = _closure1_slot4;
                var7 = var4.useState;
                var10 = _closure1_slot0;
                var0 = _closure1_slot2;
                var1 = 9;
                var6 = var0[var1];
                var6 = var10.bind(var3)(var6);
                var6 = var6.ReactionTypes;
                var6 = var6.NORMAL;
                var9 = var7.bind(var4)(var6);
                var7 = _closure1_slot3;
                var6 = 2;
                var9 = var7.bind(var3)(var9, var6);
                var13 = 0;
                var6 = var9[var13];
                var7 = 1;
                var7 = var9[var7];
                _closure2_slot5 = var7;
                var1 = var0[var1];
                var1 = var10.bind(var3)(var1);
                var1 = var1.ReactionTypes;
                var1 = var1.BURST;
                var9 = var6 === var1;
                _closure2_slot6 = var9;
                var1 = var4.useRef;
                var7 = null;
                var12 = var1.bind(var4)(var7);
                var1 = 10;
                var4 = var0[var1];
                var6 = var10.bind(var3)(var4);
                var4 = var6.useSharedValue;
                var13 = var4.bind(var6)(var13);
                var4 = 11;
                var4 = var0[var4];
                var6 = var10.bind(var3)(var4);
                var4 = var6.useEmojiCategories;
                var14 = var4.bind(var6)(var25, var24, var23);
                var15 = _closure1_slot1;
                var4 = 12;
                var4 = var0[var4];
                var4 = var15.bind(var3)(var4);
                var4 = var4.bind(var3)();
                var4 = var4.insets;
                var6 = var4.bottom;
                var4 = 13;
                var4 = var0[var4];
                var4 = var15.bind(var3)(var4);
                var4 = var4.bind(var3)();
                var4 = var4.bottom;
                _closure2_slot7 = var4;
                var32 = 14;
                var0 = var0[var32];
                var10 = var10.bind(var3)(var0);
                var0 = var10.isAndroid;
                var0 = var0.bind(var10)();
                if (!var0) {
                    _fun57334_ip = 386;
                    continue _fun57334
                }
            case 383:
                var6 = var4;
            case 386:
                var0 = _closure1_slot7;
                var10 = var6 + var0;
                var17 = _closure1_slot1;
                var18 = _closure1_slot2;
                var16 = 8;
                var0 = var18[var16];
                var0 = var17.bind(var3)(var0);
                var0 = var0.spacing;
                var0 = var0.PX_16;
                var21 = var10 + var0;
                var0 = 15;
                var6 = var18[var0];
                var15 = var17.bind(var3)(var6);
                var6 = 16;
                var6 = var18[var6];
                var6 = var17.bind(var3)(var6);
                var6 = var6.EMOJI_PICKER;
                var6 = var15.bind(var3)(var6);
                var6 = var6.analyticsLocations;
                var15 = 17;
                var15 = var18[var15];
                var15 = var17.bind(var3)(var15);
                var15 = var15.bind(var3)(var24, var13, var25);
                var31 = var15.handleTextChange;
                _closure2_slot8 = var31;
                var22 = var15.searchQueryRef;
                var26 = var15.searchResults;
                var18 = _closure1_slot4;
                var17 = var18.useCallback;
                var15 = new Array(1);
                var15[0] = var11;
                var11 = function() { // Environment: var2
                    _fun57335: for (var _fun57335_ip = 0;;) switch (_fun57335_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun57335_ip = 23;
                                continue _fun57335
                            }
                        case 13:
                            var1 = _closure2_slot0;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 23:
                            var0 = undefined;
                            return var0;
                    }
                };
                var18 = var17.bind(var18)(var11, var15);
                var15 = var7 == var24;
                var11 = undefined;
                if (var15) {
                    _fun57334_ip = 552;
                    continue _fun57334
                }
            case 547:
                var11 = var24.id;
            case 552:
                _closure2_slot9 = var11;
                var17 = _closure1_slot4;
                var28 = var17.useCallback;
                var15 = new Array(5);
                var15[0] = var30;
                var15[1] = var9;
                var15[2] = var23;
                var15[3] = var25;
                var15[4] = var11;
                var11 = function(arg0) { // Environment: var2
                    _fun57336: for (var _fun57336_ip = 0;;) switch (_fun57336_ip) {
                        case 0:
                            var4 = arg0;
                            var2 = _closure2_slot2;
                            var0 = null;
                            if (!(var0 != var2)) {
                                _fun57336_ip = 32;
                                continue _fun57336
                            }
                        case 16:
                            var3 = _closure2_slot2;
                            var2 = _closure2_slot6;
                            var0 = undefined;
                            var0 = var3.bind(var0)(var4, var2);
                        case 32:
                            var5 = _closure1_slot1;
                            var8 = _closure1_slot2;
                            var0 = 18;
                            var3 = var8[var0];
                            var0 = undefined;
                            var6 = var5.bind(var0)(var3);
                            var5 = var6.hideActionSheet;
                            var7 = _closure1_slot0;
                            var3 = 19;
                            var3 = var8[var3];
                            var3 = var7.bind(var0)(var3);
                            var3 = var3.EMOJI_PICKER_ACTION_SHEET_KEY;
                            var3 = var5.bind(var6)(var3);
                            var5 = _closure2_slot3;
                            var3 = _closure1_slot8;
                            var3 = var3.REACTION;
                            var3 = var5 === var3;
                            if (!var3) {
                                _fun57336_ip = 118;
                                continue _fun57336
                            }
                        case 111:
                            var5 = _closure2_slot6;
                            var3 = !var5;
                        case 118:
                            if (!var3) {
                                _fun57336_ip = 157;
                                continue _fun57336
                            }
                        case 121:
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var5 = 20;
                            var5 = var7[var5];
                            var7 = var6.bind(var0)(var5);
                            var6 = var7.canUpsellDoubleTapForEmoji;
                            var5 = _closure2_slot1;
                            var3 = var6.bind(var7)(var5, var4);
                        case 157:
                            if (!var3) {
                                _fun57336_ip = 196;
                                continue _fun57336
                            }
                        case 160:
                            var3 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var2 = 20;
                            var2 = var5[var2];
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.initializeDoubleTapEmojiAndUpsell;
                            var1 = _closure2_slot9;
                            var1 = var2.bind(var3)(var4, var1);
                        case 196:
                            return var0;
                    }
                };
                var28 = var28.bind(var17)(var11, var15);
                var15 = var17.useMemo;
                var11 = new Array(2);
                var11[0] = var9;
                var11[1] = var4;
                var4 = function() { // Environment: var2
                    _fun57337: for (var _fun57337_ip = 0;;) switch (_fun57337_ip) {
                        case 0:
                            var0 = {};
                            var4 = _closure2_slot6;
                            var2 = 0;
                            if (!var4) {
                                _fun57337_ip = 17;
                                continue _fun57337
                            }
                        case 14:
                            var2 = 2;
                        case 17:
                            var0.marginLeft = var2;
                            var4 = _closure2_slot6;
                            var2 = 0;
                            if (!var4) {
                                _fun57337_ip = 34;
                                continue _fun57337
                            }
                        case 31:
                            var2 = 2;
                        case 34:
                            var0.marginRight = var2;
                            var5 = _closure2_slot6;
                            var2 = 2;
                            var4 = var2;
                            if (!var5) {
                                _fun57337_ip = 54;
                                continue _fun57337
                            }
                        case 52:
                            var4 = 0;
                        case 54:
                            var0.paddingLeft = var4;
                            var4 = _closure2_slot6;
                            if (!var4) {
                                _fun57337_ip = 68;
                                continue _fun57337
                            }
                        case 66:
                            var2 = 0;
                        case 68:
                            var0.paddingRight = var2;
                            var1 = _closure2_slot7;
                            var0.paddingBottom = var1;
                            return var0;
                    }
                };
                var15 = var15.bind(var17)(var4, var11);
                var4 = var17.useRef;
                var4 = var4.bind(var17)(var7);
                _closure2_slot10 = var4;
                var4 = var17.useRef;
                var4 = var4.bind(var17)(var5);
                _closure2_slot11 = var4;
                var11 = var17.useCallback;
                var5 = function() { // Environment: var2
                    _fun57338: for (var _fun57338_ip = 0;;) switch (_fun57338_ip) {
                        case 0:
                            var1 = _closure2_slot11;
                            var1 = var1.current;
                            if (!var1) {
                                _fun57338_ip = 52;
                                continue _fun57338
                            }
                        case 15:
                            var1 = _closure2_slot10;
                            var2 = var1.current;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun57338_ip = 40;
                                continue _fun57338
                            }
                        case 30:
                            var1 = var2.focus;
                            var1 = var1.bind(var2)();
                        case 40:
                            var1 = _closure2_slot11;
                            var0 = false;
                            var1.current = var0;
                        case 52:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4 = new Array(0);
                var11 = var11.bind(var17)(var5, var4);
                var30 = var17.useMemo;
                var5 = new Array(2);
                var5[0] = var25;
                var5[1] = var8;
                var4 = function() { // Environment: var2
                    _fun57339: for (var _fun57339_ip = 0;;) switch (_fun57339_ip) {
                        case 0:
                            var3 = _closure2_slot3;
                            var0 = _closure1_slot8;
                            var2 = var0.DEFAULT_REACT_EMOJI;
                            var0 = null;
                            if (!(var3 === var2)) {
                                _fun57339_ip = 263;
                                continue _fun57339
                            }
                        case 29:
                            var4 = _closure1_slot10;
                            var3 = _closure1_slot5;
                            var2 = {};
                            var5 = _closure2_slot4;
                            var5 = var5.headerText;
                            var2.style = var5;
                            var8 = _closure1_slot9;
                            var12 = _closure1_slot0;
                            var13 = _closure1_slot2;
                            var6 = 21;
                            var5 = var13[var6];
                            var1 = undefined;
                            var5 = var12.bind(var1)(var5);
                            var7 = var5.Text;
                            var5 = {
                                'variant': 'heading-lg/bold',
                                'color': 'mobile-text-heading-primary'
                            };
                            var9 = 22;
                            var10 = var13[var9];
                            var10 = var12.bind(var1)(var10);
                            var14 = var10.intl;
                            var11 = var14.string;
                            var10 = var13[var9];
                            var10 = var12.bind(var1)(var10);
                            var10 = var10.t;
                            var10 = var10.wHTk2C;
                            var10 = var11.bind(var14)(var10);
                            var5.children = var10;
                            var7 = var8.bind(var1)(var7, var5);
                            var5 = new Array(2);
                            var5[0] = var7;
                            var6 = var13[var6];
                            var6 = var12.bind(var1)(var6);
                            var7 = var6.Text;
                            var6 = {
                                'variant': 'text-sm/medium',
                                'color': 'text-muted'
                            };
                            var10 = var13[var9];
                            var10 = var12.bind(var1)(var10);
                            var11 = var10.intl;
                            var10 = var11.string;
                            var9 = var13[var9];
                            var9 = var12.bind(var1)(var9);
                            var9 = var9.t;
                            var9 = var9.VrWSNn;
                            var9 = var10.bind(var11)(var9);
                            var6.children = var9;
                            var6 = var8.bind(var1)(var7, var6);
                            var5[1] = var6;
                            var2.children = var5;
                            var0 = var4.bind(var1)(var3, var2);
                        case 263:
                            return var0;
                    }
                };
                var30 = var30.bind(var17)(var4, var5);
                _closure2_slot12 = var30;
                var5 = var17.useMemo;
                var4 = new Array(5);
                var4[0] = var8;
                var4[1] = var31;
                var4[2] = var9;
                var4[3] = var25;
                var4[4] = var30;
                var2 = function() { // Environment: var2
                    _fun57340: for (var _fun57340_ip = 0;;) switch (_fun57340_ip) {
                        case 0:
                            var3 = _closure1_slot10;
                            var2 = _closure1_slot5;
                            var1 = {};
                            var0 = _closure2_slot4;
                            var0 = var0.header;
                            var1.style = var0;
                            var0 = _closure2_slot12;
                            var4 = new Array(2);
                            var4[0] = var0;
                            var5 = {};
                            var0 = _closure2_slot4;
                            var6 = var0.searchContainer;
                            var0 = new Array(2);
                            var0[0] = var6;
                            var7 = _closure2_slot12;
                            var6 = null;
                            if (!(var6 === var7)) {
                                _fun57340_ip = 81;
                                continue _fun57340
                            }
                        case 71:
                            var7 = _closure2_slot4;
                            var6 = var7.headerSpacer;
                        case 81:
                            var0[1] = var6;
                            var5.style = var0;
                            var10 = _closure1_slot9;
                            var12 = _closure1_slot0;
                            var13 = _closure1_slot2;
                            var0 = 23;
                            var6 = var13[var0];
                            var0 = undefined;
                            var6 = var12.bind(var0)(var6);
                            var7 = var6.SearchField;
                            var6 = {
                                'ref': null,
                                'size': 'md',
                                'isRound': true
                            };
                            var9 = _closure2_slot10;
                            var6.ref = var9;
                            var9 = _closure2_slot8;
                            var6.onChange = var9;
                            var9 = 11;
                            var9 = var13[var9];
                            var14 = var12.bind(var0)(var9);
                            var13 = var14.getSearchPlaceholder;
                            var9 = _closure2_slot3;
                            var12 = _closure2_slot6;
                            var12 = var13.bind(var14)(var9, var12);
                            var6.placeholder = var12;
                            var7 = var10.bind(var0)(var7, var6);
                            var6 = new Array(2);
                            var6[0] = var7;
                            var7 = _closure1_slot8;
                            var7 = var7.REACTION;
                            var7 = var9 === var7;
                            if (!var7) {
                                _fun57340_ip = 274;
                                continue _fun57340
                            }
                        case 222:
                            var10 = _closure1_slot9;
                            var9 = _closure1_slot1;
                            var12 = _closure1_slot2;
                            var8 = 24;
                            var8 = var12[var8];
                            var9 = var9.bind(var0)(var8);
                            var8 = {};
                            var12 = function() {
                                _fun57341: for (var _fun57341_ip = 0;;) switch (_fun57341_ip) {
                                    case 0:
                                        var2 = _closure1_slot0;
                                        var1 = _closure1_slot2;
                                        var0 = 25;
                                        var1 = var1[var0];
                                        var0 = undefined;
                                        var4 = var2.bind(var0)(var1);
                                        var2 = var4.isPremium;
                                        var5 = _closure1_slot6;
                                        var1 = var5.getCurrentUser;
                                        var1 = var1.bind(var5)();
                                        var1 = var2.bind(var4)(var1);
                                        if (var1) {
                                            _fun57341_ip = 126;
                                            continue _fun57341
                                        }
                                    case 52:
                                        var4 = _closure1_slot1;
                                        var1 = _closure1_slot2;
                                        var2 = 18;
                                        var2 = var1[var2];
                                        var5 = var4.bind(var0)(var2);
                                        var4 = var5.openLazy;
                                        var6 = _closure1_slot0;
                                        var2 = 27;
                                        var2 = var1[var2];
                                        var6 = var6.bind(var0)(var2);
                                        var2 = 26;
                                        var2 = var1[var2];
                                        var1 = var1.paths;
                                        var2 = var6.bind(var0)(var2, var1);
                                        var1 = 'SuperReactionUpsellActionSheet';
                                        var1 = var4.bind(var5)(var2, var1);
                                        return var1;
                                    case 126:
                                        var2 = _closure1_slot0;
                                        var6 = _closure1_slot2;
                                        var1 = 28;
                                        var1 = var6[var1];
                                        var4 = var2.bind(var0)(var1);
                                        var2 = var4.triggerHapticFeedback;
                                        var5 = _closure1_slot1;
                                        var1 = 29;
                                        var1 = var6[var1];
                                        var1 = var5.bind(var0)(var1);
                                        var1 = var1.IMPACT_LIGHT;
                                        var1 = var2.bind(var4)(var1);
                                        var2 = _closure2_slot5;
                                        var1 = _closure2_slot6;
                                        var4 = _closure1_slot0;
                                        var5 = _closure1_slot2;
                                        var3 = 9;
                                        var3 = var5[var3];
                                        var3 = var4.bind(var0)(var3);
                                        var3 = var3.ReactionTypes;
                                        if (var1) {
                                            _fun57341_ip = 227;
                                            continue _fun57341
                                        }
                                    case 219:
                                        var1 = var3.BURST;
                                        _fun57341_ip = 233;
                                        continue _fun57341;
                                    case 227:
                                        var1 = var3.NORMAL;
                                    case 233:
                                        var1 = var2.bind(var0)(var1);
                                        return var0;
                                }
                            };
                            var8.onPress = var12;
                            var11 = _closure2_slot6;
                            var8.isActive = var11;
                            var7 = var10.bind(var0)(var9, var8);
                        case 274:
                            var6[1] = var7;
                            var5.children = var6;
                            var5 = var3.bind(var0)(var2, var5);
                            var4[1] = var5;
                            var1.children = var4;
                            var0 = var3.bind(var0)(var2, var1);
                            return var0;
                    }
                };
                var33 = var5.bind(var17)(var2, var4);
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = var4[var16];
                var2 = var5.bind(var3)(var2);
                var2 = var2.unsafe_rawColors;
                if (var9) {
                    _fun57334_ip = 813;
                    continue _fun57334
                }
            case 773:
                var17 = var2.TRANSPARENT;
                var9 = new Array(2);
                var9[0] = var17;
                var17 = var4[var16];
                var17 = var5.bind(var3)(var17);
                var17 = var17.unsafe_rawColors;
                var17 = var17.TRANSPARENT;
                var9[1] = var17;
                _fun57334_ip = 854;
                continue _fun57334;
            case 813:
                var17 = var2.BRAND_500;
                var2 = new Array(2);
                var2[0] = var17;
                var4 = var4[var16];
                var4 = var5.bind(var3)(var4);
                var4 = var4.unsafe_rawColors;
                var4 = var4.TRANSPARENT;
                var2[1] = var4;
                var9 = var2;
            case 854:
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = var4[var1];
                var16 = var5.bind(var3)(var1);
                var2 = var16.useSharedValue;
                var1 = -1;
                var16 = var2.bind(var16)(var1);
                var2 = _closure1_slot4;
                var1 = var2.useRef;
                var17 = var1.bind(var2)(var7);
                var2 = _closure1_slot10;
                var0 = var4[var0];
                var0 = var5.bind(var3)(var0);
                var1 = var0.AnalyticsLocationProvider;
                var0 = {};
                var0.value = var6;
                var4 = var4[var32];
                var5 = var5.bind(var3)(var4);
                var4 = var5.isIOS;
                var5 = var4.bind(var5)();
                if (!var5) {
                    _fun57334_ip = 997;
                    continue _fun57334
                }
            case 949:
                var7 = _closure1_slot9;
                var6 = _closure1_slot1;
                var30 = _closure1_slot2;
                var4 = 30;
                var4 = var30[var4];
                var6 = var6.bind(var3)(var4);
                var4 = {};
                var30 = 'EmojiPickerActionSheet';
                var4.portalHostName = var30;
                var4.animatedSheetIndex = var16;
                var5 = var7.bind(var3)(var6, var4);
            case 997:
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot10;
                var31 = _closure1_slot0;
                var30 = _closure1_slot2;
                var5 = 31;
                var5 = var30[var5];
                var5 = var31.bind(var3)(var5);
                var6 = var5.BottomSheet;
                var5 = {};
                var5.ref = var17;
                var34 = true;
                var5.scrollable = var34;
                var5.header = var33;
                var30 = var30[var32];
                var31 = var31.bind(var3)(var30);
                var30 = var31.isAndroid;
                var31 = var30.bind(var31)();
                var30 = undefined;
                if (!var31) {
                    _fun57334_ip = 1124;
                    continue _fun57334
                }
            case 1076:
                var33 = _closure1_slot9;
                var32 = _closure1_slot0;
                var34 = _closure1_slot2;
                var31 = 32;
                var31 = var34[var31];
                var31 = var32.bind(var3)(var31);
                var32 = var31.PortalHost;
                var31 = {};
                var34 = 'EmojiPickerActionSheet';
                var31.name = var34;
                var30 = var33.bind(var3)(var32, var31);
            case 1124:
                var5.footer = var30;
                var5.startExpanded = var29;
                var5.onDismiss = var18;
                var5.animatedIndex = var16;
                var5.onExpand = var11;
                var5.borderGradient = var9;
                var9 = var8.content;
                var8 = new Array(2);
                var8[0] = var9;
                var9 = {};
                var9.marginBottom = var10;
                var8[1] = var9;
                var5.contentStyles = var8;
                var11 = _closure1_slot9;
                var10 = _closure1_slot1;
                var18 = _closure1_slot2;
                var8 = 33;
                var8 = var18[var8];
                var9 = var10.bind(var3)(var8);
                var8 = {};
                var8.bottomSheetIndex = var16;
                var8.onPressEmoji = var28;
                var28 = _closure1_slot0;
                var27 = 34;
                var27 = var18[var27];
                var27 = var28.bind(var3)(var27);
                var27 = var27.openEmojiActionSheet;
                var8.onLongPressEmoji = var27;
                var8.emojiPickerListRef = var12;
                var8.categories = var14;
                var8.categoryIndexActive = var13;
                var8.emojis = var26;
                var8.emojiPickerIntention = var25;
                var8.channel = var24;
                var8.guildId = var23;
                var8.searchQueryRef = var22;
                var8.insetBottom = var21;
                var8.analyticsObject = var20;
                var8.messageId = var19;
                var9 = var11.bind(var3)(var9, var8);
                var8 = new Array(2);
                var8[0] = var9;
                var9 = 35;
                var9 = var18[var9];
                var10 = var10.bind(var3)(var9);
                var9 = {};
                var9.bottomSheetRef = var17;
                var9.bottomSheetIndex = var16;
                var9.style = var15;
                var9.categories = var14;
                var9.categoryIndexActive = var13;
                var9.emojiPickerListRef = var12;
                var12 = 'EmojiPickerActionSheet';
                var9.portalHostName = var12;
                var9 = var11.bind(var3)(var10, var9);
                var8[1] = var9;
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1621, 660, 1624, 33, 1297, 671, 6554, 3720, 6992, 4893, 1568, 478, 5726, 5579, 6998, 3278, 6989, 6999, 3941, 1234, 7009, 7012, 3109, 7036, 1307, 3279, 3280, 8514, 4931, 3926, 9294, 9325, 9342, 2]);