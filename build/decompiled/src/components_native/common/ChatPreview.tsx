// components_native/common/ChatPreview.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var12 = metroImportDefault;
    var6 = metroImportAll;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var _closure1_slot3 = var5;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var1
        _fun109281: for (var _fun109281_ip = 0;;) switch (_fun109281_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 72: // try_end0
                _fun109281_ip = 76;
                continue _fun109281;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot25 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot25 = var0;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var3 = {};
    var7 = true;
    var3.value = var7;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var3);
    var14 = 0;
    var3 = var5[var14];
    var0 = undefined;
    var3 = var12.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var11 = 1;
    var3 = var5[var11];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var6 = 6;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var13 = var6.StyleSheet;
    var6 = var6.View;
    var _closure1_slot10 = var6;
    var6 = 7;
    var6 = var5[var6];
    var6 = var12.bind(var0)(var6);
    var _closure1_slot11 = var6;
    var6 = 8;
    var6 = var5[var6];
    var6 = var12.bind(var0)(var6);
    var _closure1_slot12 = var6;
    var6 = 9;
    var6 = var5[var6];
    var6 = var12.bind(var0)(var6);
    var _closure1_slot13 = var6;
    var6 = 10;
    var6 = var5[var6];
    var6 = var12.bind(var0)(var6);
    var _closure1_slot14 = var6;
    var6 = 11;
    var6 = var5[var6];
    var6 = var12.bind(var0)(var6);
    var _closure1_slot15 = var6;
    var6 = 12;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var8 = var6.AnalyticsObjects;
    var _closure1_slot16 = var8;
    var6 = var6.AnalyticsSections;
    var _closure1_slot17 = var6;
    var6 = 13;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var8 = var6.Changeset;
    var _closure1_slot18 = var8;
    var8 = var6.RowType;
    var _closure1_slot19 = var8;
    var6 = var6.SeparatorType;
    var _closure1_slot20 = var6;
    var6 = 14;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var8 = var6.jsx;
    var _closure1_slot21 = var8;
    var6 = var6.jsxs;
    var _closure1_slot22 = var6;
    var6 = 15;
    var6 = var5[var6];
    var9 = var4.bind(var0)(var6);
    var8 = var9.createLegacyClassComponentStyles;
    var6 = {};
    var10 = {
        'flex': 1,
        'overflow': 'hidden'
    };
    var6.chat = var10;
    var10 = {};
    var10.flex = var11;
    var11 = 16;
    var15 = var5[var11];
    var15 = var12.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_BASE_LOW;
    var10.backgroundColor = var15;
    var6.containerInner = var10;
    var10 = {};
    var10.flexShrink = var14;
    var14 = var5[var11];
    var14 = var12.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_SURFACE_HIGH;
    var10.backgroundColor = var14;
    var6.jumpToChatButtonContainer = var10;
    var10 = {};
    var14 = 44;
    var10.height = var14;
    var13 = var13.hairlineWidth;
    var10.borderTopWidth = var13;
    var11 = var5[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BORDER_SUBTLE;
    var10.borderTopColor = var11;
    var6.jumpToChatButton = var10;
    var10 = {
        'textAlign': 'center',
        'flex': 1,
        'lineHeight': 44
    };
    var6.jumpToChatText = var10;
    var6 = var8.bind(var9)(var6);
    var _closure1_slot23 = var6;
    var6 = var3.PureComponent;
    var3 = function(arg0) { // Environment: var1
        var3 = function(arg0) { // Original name: ChatPreview, environment: var5
            _fun109285: for (var _fun109285_ip = 0;;) switch (_fun109285_ip) {
                case 0:
                    var4 = this;
                    var13 = 0;
                    var0 = copyRestArgs(var13);
                    var7 = _closure1_slot4;
                    var3 = _closure2_slot0;
                    var5 = undefined;
                    var7 = var7.bind(var5)(var4, var3);
                    var10 = new Array(0);
                    var13 = var10;
                    var12 = var0;
                    var11 = 0;
                    var0 = arraySpread(var13, var12, var11);
                    var0 = _closure1_slot7;
                    var9 = var0.bind(var5)(var3);
                    var3 = _closure1_slot6;
                    var0 = _closure1_slot25;
                    var0 = var0.bind(var5)();
                    if (var0) {
                        _fun109285_ip = 86;
                        continue _fun109285
                    }
                case 73:
                    var0 = var9.apply;
                    var0 = var0.bind(var9)(var4, var10);
                    _fun109285_ip = 120;
                    continue _fun109285;
                case 86:
                    var6 = global;
                    var8 = var6.Reflect;
                    var7 = var8.construct;
                    var6 = _closure1_slot7;
                    var6 = var6.bind(var5)(var4);
                    var6 = var6.constructor;
                    var0 = var7.bind(var8)(var9, var10, var6);
                case 120:
                    var0 = var3.bind(var5)(var4, var0);
                    var _closure3_slot0 = var0;
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var3 = 17;
                    var3 = var6[var3];
                    var3 = var4.bind(var5)(var3);
                    var7 = var3.prototype;
                    var7 = Object.create(var7, {
                        constructor: {
                            value: var3
                        }
                    });
                    var14 = var7;
                    var3 = new var14[var3](var13);
                    var3 = var3 instanceof Object ? var3 : var7;
                    var0.chatManager = var3;
                    var3 = 18;
                    var3 = var6[var3];
                    var3 = var4.bind(var5)(var3);
                    var4 = var3.prototype;
                    var4 = Object.create(var4, {
                        constructor: {
                            value: var3
                        }
                    });
                    var14 = var4;
                    var3 = new var14[var3](var13);
                    var3 = var3 instanceof Object ? var3 : var4;
                    var0.rowGenerator = var3;
                    var3 = _closure1_slot9;
                    var2 = var3.createRef;
                    var2 = var2.bind(var3)();
                    var0.chatRef = var2;
                    var2 = function() { // Environment: var1
                        _fun109286: for (var _fun109286_ip = 0;;) switch (_fun109286_ip) {
                            case 0:
                                var4 = arguments[0];
                                var0 = undefined;
                                if (!(var4 === var0)) {
                                    _fun109286_ip = 13;
                                    continue _fun109286
                                }
                            case 11:
                                var4 = false;
                            case 13:
                                var _closure4_slot0 = var0;
                                var _closure4_slot1 = var0;
                                var _closure4_slot2 = var0;
                                var _closure4_slot3 = var0;
                                var _closure4_slot4 = var0;
                                var _closure4_slot5 = var0;
                                var1 = _closure3_slot0;
                                var1 = var1.props;
                                var5 = var1.channel;
                                _closure4_slot0 = var5;
                                var9 = var1.messages;
                                _closure4_slot1 = var9;
                                var5 = var1.roleStyle;
                                _closure4_slot2 = var5;
                                var6 = var1.jumpTargetId;
                                var11 = var1.inlineAttachmentMedia;
                                var12 = var1.inlineEmbedMedia;
                                var13 = var1.renderEmbeds;
                                var5 = null;
                                if (!(var5 != var9)) {
                                    _fun109286_ip = 444;
                                    continue _fun109286
                                }
                            case 111:
                                var1 = _closure3_slot0;
                                var10 = var1.rowGenerator;
                                var8 = var10.setOptions;
                                var7 = {};
                                var7.renderEmbeds = var13;
                                var7.inlineEmbedMedia = var12;
                                var7.inlineAttachmentMedia = var11;
                                var11 = var1.props;
                                var11 = var11.width;
                                var7.constrainedWidth = var11;
                                var7 = var8.bind(var10)(var7);
                                var7 = var1.chatManager;
                                var1 = var7.setup;
                                var1 = var1.bind(var7)(var9);
                                var7 = _closure1_slot18;
                                if (var4) {
                                    _fun109286_ip = 199;
                                    continue _fun109286
                                }
                            case 191:
                                var4 = var7.NOOP;
                                _fun109286_ip = 205;
                                continue _fun109286;
                            case 199:
                                var4 = var7.UPDATE;
                            case 205:
                                _closure4_slot3 = var4;
                                var8 = new Array(0);
                                _closure4_slot4 = var8;
                                var7 = var9.forEach;
                                var4 = function(arg0) { // Environment: var3
                                    _fun109287: for (var _fun109287_ip = 0;;) switch (_fun109287_ip) {
                                        case 0:
                                            var3 = arg0;
                                            var2 = _closure4_slot4;
                                            var1 = 0;
                                            var2 = var2[var1];
                                            var1 = null;
                                            if (!(var1 == var2)) {
                                                _fun109287_ip = 47;
                                                continue _fun109287
                                            }
                                        case 22:
                                            var5 = _closure4_slot4;
                                            var4 = var5.unshift;
                                            var1 = new Array(1);
                                            var1[0] = var3;
                                            var1 = var4.bind(var5)(var1);
                                            _fun109287_ip = 138;
                                            continue _fun109287;
                                        case 47:
                                            var4 = var2.length;
                                            var1 = 1;
                                            var1 = var4 - var1;
                                            var6 = var2[var1];
                                            var4 = _closure1_slot1;
                                            var5 = _closure1_slot3;
                                            var1 = 19;
                                            var1 = var5[var1];
                                            var5 = undefined;
                                            var4 = var4.bind(var5)(var1);
                                            var1 = _closure4_slot0;
                                            var1 = var4.bind(var5)(var1, var6, var3);
                                            if (var1) {
                                                _fun109287_ip = 115;
                                                continue _fun109287
                                            }
                                        case 102:
                                            var1 = var2.unshift;
                                            var1 = var1.bind(var2)(var3);
                                            _fun109287_ip = 138;
                                            continue _fun109287;
                                        case 115:
                                            var2 = _closure4_slot4;
                                            var1 = var2.unshift;
                                            var0 = new Array(1);
                                            var0[0] = var3;
                                            var0 = var1.bind(var2)(var0);
                                        case 138:
                                            var0 = undefined;
                                            return var0;
                                    }
                                };
                                var4 = var7.bind(var9)(var4);
                                var7 = new Array(0);
                                _closure4_slot5 = var7;
                                var4 = var8.forEach;
                                var3 = function(arg0, arg1) { // Environment: var3
                                    _fun109288: for (var _fun109288_ip = 0;;) switch (_fun109288_ip) {
                                        case 0:
                                            var10 = arg0;
                                            var _closure5_slot0 = var10;
                                            var0 = var10.length;
                                            var7 = 1;
                                            var0 = var0 - var7;
                                            var3 = var10[var0];
                                            var _closure5_slot1 = var3;
                                            var1 = _closure4_slot4;
                                            var0 = var1.length;
                                            var0 = var0 - var7;
                                            var0 = var1[var0];
                                            var1 = var0 === var10;
                                            var9 = false;
                                            var _closure5_slot2 = var9;
                                            var6 = null;
                                            var11 = null;
                                            if (var1) {
                                                _fun109288_ip = 93;
                                                continue _fun109288
                                            }
                                        case 66:
                                            var2 = _closure4_slot4;
                                            var0 = arg1;
                                            var0 = var0 + var7;
                                            var2 = var2[var0];
                                            var0 = 0;
                                            var0 = var2[var0];
                                            var11 = var0.timestamp;
                                        case 93:
                                            if (var1) {
                                                _fun109288_ip = 100;
                                                continue _fun109288
                                            }
                                        case 96:
                                            var1 = var6 == var11;
                                        case 100:
                                            if (var1) {
                                                _fun109288_ip = 146;
                                                continue _fun109288
                                            }
                                        case 103:
                                            var4 = _closure1_slot0;
                                            var2 = _closure1_slot3;
                                            var0 = 20;
                                            var2 = var2[var0];
                                            var0 = undefined;
                                            var4 = var4.bind(var0)(var2);
                                            var2 = var4.isSameDay;
                                            var0 = var3.timestamp;
                                            var1 = var2.bind(var4)(var0, var11);
                                        case 146:
                                            var0 = false;
                                            if (var1) {
                                                _fun109288_ip = 159;
                                                continue _fun109288
                                            }
                                        case 151:
                                            var1 = true;
                                            _closure5_slot2 = var1;
                                            var0 = true;
                                        case 159:
                                            var1 = function(arg0) { // Original name: processHiddenMessageRow, environment: var8
                                                var0 = arg0;
                                                var _closure6_slot0 = var0;
                                                var4 = _closure5_slot0;
                                                var3 = var4.forEach;
                                                var2 = function(arg0) { // Environment: var2
                                                    var4 = arg0;
                                                    var0 = _closure6_slot0;
                                                    var2 = var0.content;
                                                    var1 = var2.unshift;
                                                    var0 = {};
                                                    var5 = _closure1_slot19;
                                                    var5 = var5.MESSAGE;
                                                    var0.rowType = var5;
                                                    var3 = _closure1_slot18;
                                                    var3 = var3.NOOP;
                                                    var0.changeType = var3;
                                                    var3 = _closure4_slot2;
                                                    var0.roleStyle = var3;
                                                    var0.message = var4;
                                                    var3 = _closure5_slot1;
                                                    var3 = var4 === var3;
                                                    var0.isFirst = var3;
                                                    var0 = var1.bind(var2)(var0);
                                                    var0 = undefined;
                                                    return var0;
                                                };
                                                var2 = var3.bind(var4)(var2);
                                                var1 = _closure5_slot1;
                                                var3 = var1.id;
                                                var2 = _closure4_slot1;
                                                var2 = var2.revealedMessageId;
                                                var2 = var3 === var2;
                                                var0.revealed = var2;
                                                var1 = var1.id;
                                                var0.context = var1;
                                                return var0;
                                            };
                                            var4 = _closure4_slot5;
                                            var2 = var4.length;
                                            var2 = var2 - var7;
                                            var2 = var4[var2];
                                            var7 = {};
                                            var4 = _closure4_slot2;
                                            var7.roleStyle = var4;
                                            var11 = _closure1_slot19;
                                            var11 = var11.BLOCKED_GROUP;
                                            var7.rowType = var11;
                                            var11 = _closure4_slot3;
                                            var7.changeType = var11;
                                            var7.message = var3;
                                            var11 = true;
                                            var7.isFirst = var11;
                                            var11 = new Array(0);
                                            var7.content = var11;
                                            var11 = '';
                                            var7.text = var11;
                                            var7.revealed = var9;
                                            var9 = var3.blocked;
                                            if (var9) {
                                                _fun109288_ip = 468;
                                                continue _fun109288
                                            }
                                        case 265:
                                            var9 = var3.ignored;
                                            if (var9) {
                                                _fun109288_ip = 296;
                                                continue _fun109288
                                            }
                                        case 274:
                                            var9 = var10.forEach;
                                            var8 = function(arg0) { // Environment: var8
                                                _fun109291: for (var _fun109291_ip = 0;;) switch (_fun109291_ip) {
                                                    case 0:
                                                        var5 = arg0;
                                                        var2 = _closure4_slot5;
                                                        var1 = var2.push;
                                                        var0 = {};
                                                        var4 = _closure4_slot2;
                                                        var0.roleStyle = var4;
                                                        var4 = _closure1_slot19;
                                                        var4 = var4.MESSAGE;
                                                        var0.rowType = var4;
                                                        var3 = _closure4_slot3;
                                                        var0.changeType = var3;
                                                        var0.message = var5;
                                                        var3 = _closure5_slot1;
                                                        var6 = var5 === var3;
                                                        var0.isFirst = var6;
                                                        var6 = false;
                                                        var0.isEditing = var6;
                                                        var5 = var5 !== var3;
                                                        var3 = !var5;
                                                        if (var5) {
                                                            _fun109291_ip = 94;
                                                            continue _fun109291
                                                        }
                                                    case 90:
                                                        var3 = _closure5_slot2;
                                                    case 94:
                                                        var0.separatorBefore = var3;
                                                        var0 = var1.bind(var2)(var0);
                                                        var0 = undefined;
                                                        return var0;
                                                }
                                            };
                                            var8 = var9.bind(var10)(var8);
                                            _fun109288_ip = 632;
                                            continue _fun109288;
                                        case 296:
                                            var8 = var6 != var2;
                                            if (!var8) {
                                                _fun109288_ip = 323;
                                                continue _fun109288
                                            }
                                        case 303:
                                            var10 = var2.rowType;
                                            var9 = _closure1_slot19;
                                            var9 = var9.IGNORED_GROUP;
                                            var8 = var10 === var9;
                                        case 323:
                                            var9 = var2;
                                            if (var8) {
                                                _fun109288_ip = 377;
                                                continue _fun109288
                                            }
                                        case 329:
                                            var8 = {};
                                            var16 = var8;
                                            var15 = var7;
                                            var10 = copyDataProperties(var16, var15);
                                            var10 = _closure1_slot19;
                                            var11 = var10.IGNORED_GROUP;
                                            var10 = 'rowType';
                                            var8[var10] = var11;
                                            var11 = _closure4_slot5;
                                            var10 = var11.push;
                                            var10 = var10.bind(var11)(var8);
                                            var9 = var8;
                                        case 377:
                                            var13 = undefined;
                                            var8 = var1.bind(var13)(var9);
                                            var10 = _closure1_slot0;
                                            var14 = _closure1_slot3;
                                            var8 = 21;
                                            var11 = var14[var8];
                                            var11 = var10.bind(var13)(var11);
                                            var12 = var11.intl;
                                            var11 = var12.formatToPlainString;
                                            var8 = var14[var8];
                                            var8 = var10.bind(var13)(var8);
                                            var8 = var8.t;
                                            var10 = var8["VFWjc+"];
                                            var8 = {};
                                            var13 = var9.content;
                                            var13 = var13.length;
                                            var8.count = var13;
                                            var8 = var11.bind(var12)(var10, var8);
                                            var9.text = var8;
                                            _fun109288_ip = 632;
                                            continue _fun109288;
                                        case 468:
                                            var6 = var6 != var2;
                                            if (!var6) {
                                                _fun109288_ip = 495;
                                                continue _fun109288
                                            }
                                        case 475:
                                            var9 = var2.rowType;
                                            var8 = _closure1_slot19;
                                            var8 = var8.BLOCKED_GROUP;
                                            var6 = var9 === var8;
                                        case 495:
                                            if (var6) {
                                                _fun109288_ip = 546;
                                                continue _fun109288
                                            }
                                        case 498:
                                            var6 = {};
                                            var16 = var6;
                                            var15 = var7;
                                            var7 = copyDataProperties(var16, var15);
                                            var7 = _closure1_slot19;
                                            var8 = var7.BLOCKED_GROUP;
                                            var7 = 'rowType';
                                            var6[var7] = var8;
                                            var8 = _closure4_slot5;
                                            var7 = var8.push;
                                            var7 = var7.bind(var8)(var6);
                                            var2 = var6;
                                        case 546:
                                            var9 = undefined;
                                            var1 = var1.bind(var9)(var2);
                                            var6 = _closure1_slot0;
                                            var10 = _closure1_slot3;
                                            var1 = 21;
                                            var7 = var10[var1];
                                            var7 = var6.bind(var9)(var7);
                                            var8 = var7.intl;
                                            var7 = var8.formatToPlainString;
                                            var1 = var10[var1];
                                            var1 = var6.bind(var9)(var1);
                                            var1 = var1.t;
                                            var6 = var1["+FcYM/"];
                                            var1 = {};
                                            var9 = var2.content;
                                            var9 = var9.length;
                                            var1.count = var9;
                                            var1 = var7.bind(var8)(var6, var1);
                                            var2.text = var1;
                                        case 632:
                                            if (!var0) {
                                                _fun109288_ip = 732;
                                                continue _fun109288
                                            }
                                        case 635:
                                            var2 = _closure4_slot5;
                                            var1 = var2.push;
                                            var0 = {};
                                            var6 = _closure4_slot2;
                                            var0.roleStyle = var6;
                                            var6 = _closure1_slot20;
                                            var6 = var6.DAY;
                                            var0.rowType = var6;
                                            var5 = _closure4_slot3;
                                            var0.changeType = var5;
                                            var6 = _closure1_slot0;
                                            var5 = _closure1_slot3;
                                            var4 = 20;
                                            var5 = var5[var4];
                                            var4 = undefined;
                                            var6 = var6.bind(var4)(var5);
                                            var5 = var6.dateFormat;
                                            var4 = var3.timestamp;
                                            var3 = 'LL';
                                            var3 = var5.bind(var6)(var4, var3);
                                            var0.text = var3;
                                            var0 = var1.bind(var2)(var0);
                                        case 732:
                                            var0 = undefined;
                                            return var0;
                                    }
                                };
                                var3 = var4.bind(var8)(var3);
                                var3 = var7.length;
                                var4 = 0;
                                var3 = var4 < var3;
                                if (!var3) {
                                    _fun109286_ip = 327;
                                    continue _fun109286
                                }
                            case 273:
                                var11 = var7[var4];
                                var3 = _closure3_slot0;
                                var9 = var3.chatManager;
                                var8 = var9.createRow;
                                var10 = var3.rowGenerator;
                                var3 = var10.generate;
                                var3 = var3.bind(var10)(var11);
                                var3 = var8.bind(var9)(var3);
                                var4 = var4 + 1;
                                var3 = var7.length;
                                if (var4 < var3) {
                                    _fun109286_ip = 273;
                                    continue _fun109286
                                }
                            case 327:
                                var4 = _closure3_slot0;
                                var3 = var4.chatManager;
                                var2 = var3.createChangeset;
                                var3 = var2.bind(var3)();
                                var2 = _closure1_slot1;
                                var7 = _closure1_slot3;
                                var1 = 22;
                                var1 = var7[var1];
                                var2 = var2.bind(var0)(var1);
                                var1 = {};
                                var8 = var4.chatManager;
                                var7 = var8.getPreviousRows;
                                var7 = var7.bind(var8)();
                                var1.rows = var7;
                                var1.scrollToMessageId = var6;
                                var1.jumpTargetId = var6;
                                var1.jumpType = var0;
                                var6 = false;
                                var1.shouldInitialScroll = var6;
                                var1.animated = var6;
                                var1.scrollPosition = var0;
                                var1.focusTargetId = var5;
                                var2 = var2.bind(var0)(var1);
                                var1 = var4.updateContent;
                                var1 = var1.bind(var4)(var3, var2);
                            case 444:
                                return var0;
                        }
                    };
                    var0.setup = var2;
                    var2 = function(arg0, arg1) { // Environment: var1
                        _fun109292: for (var _fun109292_ip = 0;;) switch (_fun109292_ip) {
                            case 0:
                                var0 = _closure3_slot0;
                                var0 = var0.chatRef;
                                var3 = var0.current;
                                var0 = null;
                                if (!(var0 != var3)) {
                                    _fun109292_ip = 86;
                                    continue _fun109292
                                }
                            case 24:
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot3;
                                var0 = 23;
                                var1 = var1[var0];
                                var0 = undefined;
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.updateRows;
                                var0 = {};
                                var4 = arg0;
                                var0.rows = var4;
                                var4 = false;
                                var0.isLoadingAtTop = var4;
                                var4 = arg1;
                                var0.scrollData = var4;
                                var0 = var1.bind(var2)(var3, var0);
                            case 86:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.updateContent = var2;
                    var2 = function(arg0) { // Environment: var1
                        var1 = arg0;
                        var _closure4_slot0 = var1;
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot3;
                        var1 = 24;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.find;
                        var1 = _closure3_slot0;
                        var1 = var1.props;
                        var1 = var1.messages;
                        var0 = function(arg0) { // Environment: var0
                            _fun109294: for (var _fun109294_ip = 0;;) switch (_fun109294_ip) {
                                case 0:
                                    var0 = arg0;
                                    var3 = var0.id;
                                    var2 = var0.nonce;
                                    var0 = _closure4_slot0;
                                    var0 = var3 === var0;
                                    if (var0) {
                                        _fun109294_ip = 36;
                                        continue _fun109294
                                    }
                                case 28:
                                    var1 = _closure4_slot0;
                                    var0 = var2 === var1;
                                case 36:
                                    return var0;
                            }
                        };
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                    };
                    var0.getMessage = var2;
                    var2 = function() { // Environment: var1
                        _fun109295: for (var _fun109295_ip = 0;;) switch (_fun109295_ip) {
                            case 0:
                                var2 = _closure3_slot0;
                                var2 = var2.props;
                                var3 = var2.onBeforeJumpToMessage;
                                var2 = null;
                                if (!(var2 != var3)) {
                                    _fun109295_ip = 45;
                                    continue _fun109295
                                }
                            case 26:
                                var3 = _closure3_slot0;
                                var4 = var3.props;
                                var3 = var4.onBeforeJumpToMessage;
                                var3 = var3.bind(var4)();
                            case 45:
                                var1 = _closure3_slot0;
                                var1 = var1.props;
                                var3 = var1.channelId;
                                var _closure4_slot0 = var3;
                                var1 = var1.jumpTargetId;
                                var _closure4_slot1 = var1;
                                if (!(var2 != var1)) {
                                    _fun109295_ip = 112;
                                    continue _fun109295
                                }
                            case 77:
                                var1 = global;
                                var2 = var1.Promise;
                                var1 = var2.resolve;
                                var2 = var1.bind(var2)();
                                var1 = var2.then;
                                var0 = function() { // Environment: var0
                                    var2 = _closure1_slot0;
                                    var1 = _closure1_slot3;
                                    var0 = 25;
                                    var1 = var1[var0];
                                    var0 = undefined;
                                    var5 = var2.bind(var0)(var1);
                                    var4 = var5.transitionToMessage;
                                    var3 = _closure4_slot0;
                                    var2 = _closure4_slot1;
                                    var1 = {};
                                    var6 = true;
                                    var1.navigationReplace = var6;
                                    var1 = var4.bind(var5)(var3, var2, var1);
                                    return var0;
                                };
                                var0 = var1.bind(var2)(var0);
                            case 112:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.handleJumpToChat = var2;
                    var2 = function(arg0) { // Environment: var1
                        _fun109297: for (var _fun109297_ip = 0;;) switch (_fun109297_ip) {
                            case 0:
                                var0 = arg0;
                                var0 = var0.nativeEvent;
                                var3 = var0.data;
                                var1 = var3.url;
                                var0 = null;
                                var0 = var0 != var1;
                                if (!var0) {
                                    _fun109297_ip = 41;
                                    continue _fun109297
                                }
                            case 28:
                                var2 = var3.url;
                                var1 = '';
                                var0 = var1 !== var2;
                            case 41:
                                if (!var0) {
                                    _fun109297_ip = 92;
                                    continue _fun109297
                                }
                            case 44:
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot3;
                                var0 = 26;
                                var1 = var1[var0];
                                var0 = undefined;
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.handleClick;
                                var0 = {};
                                var3 = var3.url;
                                var0.href = var3;
                                var0 = var1.bind(var2)(var0);
                            case 92:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.handleTapLink = var2;
                    var2 = function(arg0) { // Environment: var1
                        _fun109298: for (var _fun109298_ip = 0;;) switch (_fun109298_ip) {
                            case 0:
                                var0 = arg0;
                                var0 = var0.nativeEvent;
                                var3 = var0.url;
                                var0 = _closure3_slot0;
                                var0 = var0.props;
                                var0 = var0.hasActionSheetOpen;
                                if (var0) {
                                    _fun109298_ip = 41;
                                    continue _fun109298
                                }
                            case 35:
                                var1 = null;
                                var0 = var1 == var3;
                            case 41:
                                if (var0) {
                                    _fun109298_ip = 52;
                                    continue _fun109298
                                }
                            case 44:
                                var1 = '';
                                var0 = var1 === var3;
                            case 52:
                                if (var0) {
                                    _fun109298_ip = 92;
                                    continue _fun109298
                                }
                            case 55:
                                var1 = _closure1_slot1;
                                var2 = _closure1_slot3;
                                var0 = 27;
                                var0 = var2[var0];
                                var2 = undefined;
                                var1 = var1.bind(var2)(var0);
                                var0 = {};
                                var0.urlString = var3;
                                var0 = var1.bind(var2)(var0);
                            case 92:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.handleLongPressLink = var2;
                    var2 = function(arg0) { // Environment: var1
                        _fun109299: for (var _fun109299_ip = 0;;) switch (_fun109299_ip) {
                            case 0:
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot3;
                                var0 = 28;
                                var1 = var1[var0];
                                var0 = undefined;
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.getNativeSyntheticEventData;
                                var1 = arg0;
                                var1 = var2.bind(var3)(var1);
                                var3 = var1.messageId;
                                var13 = var1.mediaIndex;
                                var12 = var1.mediaType;
                                var15 = var1.componentId;
                                var11 = var1.componentMediaIndex;
                                var1 = _closure3_slot0;
                                var1 = var1.props;
                                var8 = var1.channel;
                                var1 = var1.hasActionSheetOpen;
                                if (var1) {
                                    _fun109299_ip = 351;
                                    continue _fun109299
                                }
                            case 97:
                                var2 = _closure1_slot15;
                                var1 = var2.getMessage;
                                var7 = var1.bind(var2)(var3);
                                var5 = null;
                                if (!(var5 != var7)) {
                                    _fun109299_ip = 351;
                                    continue _fun109299
                                }
                            case 121:
                                var3 = _closure1_slot14;
                                var2 = var3.getUser;
                                var1 = var7.author;
                                var1 = var1.id;
                                var4 = var2.bind(var3)(var1);
                                if (!(var5 != var4)) {
                                    _fun109299_ip = 351;
                                    continue _fun109299
                                }
                            case 154:
                                var2 = _closure1_slot0;
                                var3 = _closure1_slot3;
                                var1 = 29;
                                var1 = var3[var1];
                                var9 = var2.bind(var0)(var1);
                                var6 = var9.getLongPressSelectedMedia;
                                var1 = 30;
                                var1 = var3[var1];
                                var14 = var2.bind(var0)(var1);
                                var1 = var14.asComponentId;
                                var17 = var1.bind(var14)(var15);
                                var21 = var9;
                                var20 = var7;
                                var19 = var13;
                                var18 = var12;
                                var16 = var11;
                                var6 = var21[var6](var20, var19, var18, var17, var16, var15);
                                var9 = _closure1_slot2;
                                var1 = 31;
                                var1 = var3[var1];
                                var9 = var9.bind(var0)(var1);
                                var1 = var9.dismissGlobalKeyboard;
                                var1 = var1.bind(var9)();
                                var1 = 32;
                                var1 = var3[var1];
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.showLongPressMessageActionSheet;
                                var1 = {
                                    'actionSheetSource': 'Preview',
                                    'analyticsLocation': null,
                                    'canAddNewReactions': false
                                };
                                var9 = {};
                                var11 = _closure1_slot17;
                                var11 = var11.CHANNEL_SEARCH;
                                var9.section = var11;
                                var10 = _closure1_slot16;
                                var10 = var10.CHANNEL_SEARCH;
                                var9.object = var10;
                                var1.analyticsLocation = var9;
                                var1.channel = var8;
                                var1.message = var7;
                                var7 = var5 != var6;
                                var5 = undefined;
                                if (!var7) {
                                    _fun109299_ip = 337;
                                    continue _fun109299
                                }
                            case 334:
                                var5 = var6;
                            case 337:
                                var1.selectedMedia = var5;
                                var1.user = var4;
                                var1 = var2.bind(var3)(var1);
                            case 351:
                                return var0;
                        }
                    };
                    var0.handleLongPressMessage = var2;
                    var2 = function(arg0) { // Environment: var1
                        _fun109300: for (var _fun109300_ip = 0;;) switch (_fun109300_ip) {
                            case 0:
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot3;
                                var0 = 28;
                                var2 = var2[var0];
                                var0 = undefined;
                                var4 = var3.bind(var0)(var2);
                                var3 = var4.getNativeSyntheticEventData;
                                var2 = arg0;
                                var2 = var3.bind(var4)(var2);
                                var6 = var2.reaction;
                                var5 = var2.messageId;
                                var4 = var2.channelId;
                                var2 = _closure3_slot0;
                                var2 = var2.props;
                                var2 = var2.hasActionSheetOpen;
                                if (var2) {
                                    _fun109300_ip = 126;
                                    continue _fun109300
                                }
                            case 76:
                                var2 = _closure1_slot0;
                                var3 = _closure1_slot3;
                                var1 = 33;
                                var1 = var3[var1];
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.handleViewPreviewReactions;
                                var1 = null;
                                var7 = var1 != var6;
                                var1 = undefined;
                                if (!var7) {
                                    _fun109300_ip = 119;
                                    continue _fun109300
                                }
                            case 113:
                                var1 = var6.emoji;
                            case 119:
                                var1 = var2.bind(var3)(var5, var4, var1);
                            case 126:
                                return var0;
                        }
                    };
                    var0.handleLongPressReaction = var2;
                    var1 = function(arg0) { // Environment: var1
                        _fun109301: for (var _fun109301_ip = 0;;) switch (_fun109301_ip) {
                            case 0:
                                var0 = arg0;
                                var3 = var0.nativeEvent;
                                var2 = _closure3_slot0;
                                var1 = var2.getMessage;
                                var0 = var3.id;
                                var6 = var1.bind(var2)(var0);
                                var1 = null;
                                if (!(var1 != var6)) {
                                    _fun109301_ip = 135;
                                    continue _fun109301
                                }
                            case 38:
                                var5 = _closure1_slot13;
                                var4 = var5.getChannel;
                                var2 = var6.getChannelId;
                                var2 = var2.bind(var6)();
                                var5 = var4.bind(var5)(var2);
                                if (!(var1 != var5)) {
                                    _fun109301_ip = 135;
                                    continue _fun109301
                                }
                            case 69:
                                var1 = _closure1_slot0;
                                var2 = _closure1_slot3;
                                var0 = 34;
                                var0 = var2[var0];
                                var4 = undefined;
                                var2 = var1.bind(var4)(var0);
                                var1 = var2.handleMessagesTapImage;
                                var0 = {};
                                var0.tapImageData = var3;
                                var3 = true;
                                var0.allowWithinModal = var3;
                                var0.message = var6;
                                var0.messageChannel = var5;
                                var0.selectedChannelId = var4;
                                var0.showContextName = var3;
                                var0 = var1.bind(var2)(var0);
                            case 135:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.handleTapImage = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot8;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot5;
        var4 = {};
        var0 = 'componentDidMount';
        var4.key = var0;
        var0 = function() { // Original name: value, environment: var5
            _fun109302: for (var _fun109302_ip = 0;;) switch (_fun109302_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.props;
                    var2 = var0.messages;
                    var0 = null;
                    var0 = var0 != var2;
                    if (!var0) {
                        _fun109302_ip = 40;
                        continue _fun109302
                    }
                case 23:
                    var2 = var1.props;
                    var3 = var2.canAccessChannel;
                    var2 = false;
                    var0 = var2 !== var3;
                case 40:
                    if (!var0) {
                        _fun109302_ip = 53;
                        continue _fun109302
                    }
                case 43:
                    var0 = var1.setup;
                    var0 = var0.bind(var1)();
                case 53:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(4);
        var0[0] = var4;
        var4 = {};
        var6 = 'componentWillUnmount';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            _fun109303: for (var _fun109303_ip = 0;;) switch (_fun109303_ip) {
                case 0:
                    var0 = this;
                    var1 = var0.chatRef;
                    var2 = var1.current;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun109303_ip = 71;
                        continue _fun109303
                    }
                case 20:
                    var1 = var0.chatManager;
                    var0 = var1.clear;
                    var0 = var0.bind(var1)();
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot3;
                    var0 = 35;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var0 = var1.clearMessages;
                    var0 = var0.bind(var1)();
                case 71:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'componentDidUpdate';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun109304: for (var _fun109304_ip = 0;;) switch (_fun109304_ip) {
                case 0:
                    var0 = arg0;
                    var2 = this;
                    var3 = var0.messages;
                    var1 = var2.props;
                    var1 = var1.messages;
                    var1 = var3 === var1;
                    if (!var1) {
                        _fun109304_ip = 49;
                        continue _fun109304
                    }
                case 30:
                    var4 = var0.width;
                    var3 = var2.props;
                    var3 = var3.width;
                    var1 = var4 === var3;
                case 49:
                    if (var1) {
                        _fun109304_ip = 82;
                        continue _fun109304
                    }
                case 52:
                    var3 = var2.setup;
                    var4 = var0.width;
                    var1 = var2.props;
                    var1 = var1.width;
                    var1 = var4 !== var1;
                    var1 = var3.bind(var2)(var1);
                case 82:
                    var1 = var0.canAccessChannel;
                    var0 = var2.props;
                    var0 = var0.canAccessChannel;
                    var0 = var1 !== var0;
                    if (!var0) {
                        _fun109304_ip = 123;
                        continue _fun109304
                    }
                case 106:
                    var1 = var2.props;
                    var3 = var1.messages;
                    var1 = null;
                    var0 = var1 != var3;
                case 123:
                    if (!var0) {
                        _fun109304_ip = 154;
                        continue _fun109304
                    }
                case 126:
                    var1 = var2.setup;
                    var0 = var2.props;
                    var0 = var0.canAccessChannel;
                    var0 = !var0;
                    var0 = !var0;
                    var0 = var1.bind(var2)(var0);
                case 154:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'render';
        var4.key = var6;
        var5 = function() { // Original name: value, environment: var5
            _fun109305: for (var _fun109305_ip = 0;;) switch (_fun109305_ip) {
                case 0:
                    var10 = this;
                    var2 = _closure1_slot23;
                    var1 = var10.context;
                    var3 = undefined;
                    var4 = var2.bind(var3)(var1);
                    var1 = var10.props;
                    var2 = var1.canAccessChannel;
                    var8 = var1.channel;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun109305_ip = 53;
                        continue _fun109305
                    }
                case 44:
                    var1 = false;
                    if (!(var1 !== var2)) {
                        _fun109305_ip = 378;
                        continue _fun109305
                    }
                case 53:
                    var6 = _closure1_slot21;
                    var2 = _closure1_slot1;
                    var16 = _closure1_slot3;
                    var1 = 37;
                    var1 = var16[var1];
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var5 = var10.chatRef;
                    var1.ref = var5;
                    var5 = var4.chat;
                    var1.style = var5;
                    var7 = true;
                    var1.inverted = var7;
                    var5 = var10.handleTapLink;
                    var1.onTapLink = var5;
                    var5 = var10.handleLongPressLink;
                    var1.onLongPressLink = var5;
                    var5 = var10.handleLongPressMessage;
                    var1.onLongPressMessage = var5;
                    var5 = var10.handleLongPressReaction;
                    var1.onLongPressReaction = var5;
                    var5 = var10.handleTapImage;
                    var1.onTapImage = var5;
                    var2 = var6.bind(var3)(var2, var1);
                    var15 = _closure1_slot0;
                    var1 = 38;
                    var1 = var16[var1];
                    var1 = var15.bind(var3)(var1);
                    var5 = var1.SafeAreaPaddingView;
                    var1 = {};
                    var1.bottom = var7;
                    var7 = var4.jumpToChatButtonContainer;
                    var1.style = var7;
                    var7 = 39;
                    var7 = var16[var7];
                    var7 = var15.bind(var3)(var7);
                    var9 = var7.PressableOpacity;
                    var7 = {};
                    var11 = 'button';
                    var7.accessibilityRole = var11;
                    var11 = var4.jumpToChatButton;
                    var7.style = var11;
                    var10 = var10.handleJumpToChat;
                    var7.onPress = var10;
                    var10 = 40;
                    var10 = var16[var10];
                    var10 = var15.bind(var3)(var10);
                    var11 = var10.Text;
                    var10 = {
                        'style': null,
                        'variant': 'text-md/medium',
                        'color': 'interactive-text-default'
                    };
                    var12 = var4.jumpToChatText;
                    var10.style = var12;
                    var12 = 21;
                    var13 = var16[var12];
                    var13 = var15.bind(var3)(var13);
                    var14 = var13.intl;
                    var13 = var14.string;
                    var12 = var16[var12];
                    var12 = var15.bind(var3)(var12);
                    var12 = var12.t;
                    var12 = var12["+TSRGD"];
                    var12 = var13.bind(var14)(var12);
                    var10.children = var12;
                    var10 = var6.bind(var3)(var11, var10);
                    var7.children = var10;
                    var7 = var6.bind(var3)(var9, var7);
                    var1.children = var7;
                    var5 = var6.bind(var3)(var5, var1);
                    var6 = var2;
                    _fun109305_ip = 435;
                    continue _fun109305;
                case 378:
                    var7 = _closure1_slot21;
                    var2 = _closure1_slot1;
                    var9 = _closure1_slot3;
                    var1 = 36;
                    var1 = var9[var1];
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var9 = var8.getGuildId;
                    var9 = var9.bind(var8)();
                    var1.guildId = var9;
                    var8 = var8.id;
                    var1.channelId = var8;
                    var6 = var7.bind(var3)(var2, var1);
                    var5 = undefined;
                case 435:
                    var2 = _closure1_slot22;
                    var1 = _closure1_slot10;
                    var0 = {};
                    var4 = var4.containerInner;
                    var0.style = var4;
                    var4 = new Array(2);
                    var4[0] = var6;
                    var4[1] = var5;
                    var0.children = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
            }
        };
        var4.value = var5;
        var0[3] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var6 = var3.bind(var0)(var6);
    var _closure1_slot24 = var6;
    var3 = 41;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ThemeContext;
    var6.contextType = var3;
    var3 = {};
    var3.withSafeArea = var7;
    var6.defaultProps = var3;
    var3 = 46;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'components_native/common/ChatPreview.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: ChatPreviewConnected, environment: var1
        var4 = arg0;
        var0 = var4.channelId;
        var _closure2_slot0 = var0;
        var5 = _closure1_slot0;
        var15 = _closure1_slot3;
        var2 = 42;
        var6 = var15[var2];
        var3 = undefined;
        var6 = var5.bind(var3)(var6);
        var7 = var6.InlineAttachmentMedia;
        var6 = var7.useSetting;
        var14 = var6.bind(var7)();
        var6 = var15[var2];
        var6 = var5.bind(var3)(var6);
        var7 = var6.InlineEmbedMedia;
        var6 = var7.useSetting;
        var13 = var6.bind(var7)();
        var2 = var15[var2];
        var2 = var5.bind(var3)(var2);
        var6 = var2.RenderEmbeds;
        var2 = var6.useSetting;
        var12 = var2.bind(var6)();
        var2 = 43;
        var6 = var15[var2];
        var9 = var5.bind(var3)(var6);
        var8 = var9.useStateFromStoresObject;
        var6 = _closure1_slot15;
        var7 = new Array(1);
        var7[0] = var6;
        var6 = function() { // Environment: var1
            var0 = {};
            var1 = _closure1_slot15;
            var2 = var1.messages;
            var0.messages = var2;
            var1 = var1.jumpTargetId;
            var0.jumpTargetId = var1;
            return var0;
        };
        var6 = var8.bind(var9)(var7, var6);
        var10 = var6.messages;
        var9 = var6.jumpTargetId;
        var6 = var15[var2];
        var11 = var5.bind(var3)(var6);
        var8 = var11.useStateFromStores;
        var6 = _closure1_slot11;
        var7 = new Array(1);
        var7[0] = var6;
        var6 = function() { // Environment: var1
            var0 = _closure1_slot11;
            var0 = var0.roleStyle;
            return var0;
        };
        var11 = var8.bind(var11)(var7, var6);
        var6 = var15[var2];
        var16 = var5.bind(var3)(var6);
        var8 = var16.useStateFromStores;
        var6 = _closure1_slot13;
        var7 = new Array(1);
        var7[0] = var6;
        var6 = function() { // Environment: var1
            var2 = _closure1_slot13;
            var1 = var2.getChannel;
            var0 = _closure2_slot0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var8 = var8.bind(var16)(var7, var6);
        var7 = _closure1_slot1;
        var6 = 44;
        var6 = var15[var6];
        var6 = var7.bind(var3)(var6);
        var6 = var6.bind(var3)();
        var7 = var6.width;
        var6 = 45;
        var6 = var15[var6];
        var16 = var5.bind(var3)(var6);
        var6 = var16.useIsChannelContentGated;
        var6 = var6.bind(var16)(var8);
        var6 = !var6;
        var2 = var15[var2];
        var15 = var5.bind(var3)(var2);
        var5 = var15.useStateFromStores;
        var16 = _closure1_slot12;
        var2 = new Array(1);
        var2[0] = var16;
        var1 = function() { // Environment: var1
            var1 = _closure1_slot12;
            var0 = var1.getContent;
            var1 = var0.bind(var1)();
            var0 = null;
            var0 = var0 != var1;
            return var0;
        };
        var5 = var5.bind(var15)(var2, var1);
        var2 = _closure1_slot21;
        var1 = _closure1_slot24;
        var0 = {};
        var18 = var0;
        var17 = var4;
        var4 = copyDataProperties(var18, var17);
        var4 = 'inlineAttachmentMedia';
        var0[var4] = var14;
        var4 = 'inlineEmbedMedia';
        var0[var4] = var13;
        var4 = 'renderEmbeds';
        var0[var4] = var12;
        var4 = 'roleStyle';
        var0[var4] = var11;
        var4 = 'messages';
        var0[var4] = var10;
        var4 = 'jumpTargetId';
        var0[var4] = var9;
        var4 = 'channel';
        var0[var4] = var8;
        var4 = 'width';
        var0[var4] = var7;
        var4 = 'canAccessChannel';
        var0[var4] = var6;
        var4 = 'hasActionSheetOpen';
        var0[var4] = var5;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 31, 27, 1298, 3099, 1372, 1613, 8833, 660, 6475, 33, 1297, 671, 9764, 6474, 9768, 3091, 1234, 9185, 9186, 22, 3897, 5848, 9194, 9169, 9170, 3931, 1582, 9825, 9172, 9776, 13726, 11853, 9612, 4690, 4858, 3895, 3118, 1348, 566, 1464, 4508, 2]);