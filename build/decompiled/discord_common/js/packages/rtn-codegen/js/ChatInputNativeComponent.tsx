// ../discord_common/js/packages/rtn-codegen/js/ChatInputNativeComponent.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var2, var0, var1);
    var3 = {};
    var9 = 'DCDChatInput';
    var3.uiViewClassName = var9;
    var0 = {};
    var1 = {};
    var4 = 'onChangeContentSize';
    var1.registrationName = var4;
    var0.topChangeContentSize = var1;
    var1 = {};
    var4 = 'onEndBlur';
    var1.registrationName = var4;
    var0.topEndBlur = var1;
    var1 = {};
    var4 = 'onBeginFocus';
    var1.registrationName = var4;
    var0.topBeginFocus = var1;
    var1 = {};
    var4 = 'onSelectionOrTextChange';
    var1.registrationName = var4;
    var0.topSelectionOrTextChange = var1;
    var1 = {};
    var4 = 'onTextFlushed';
    var1.registrationName = var4;
    var0.topTextFlushed = var1;
    var1 = {};
    var4 = 'onPasteImage';
    var1.registrationName = var4;
    var0.topPasteImage = var1;
    var1 = {};
    var4 = 'onPasteCommand';
    var1.registrationName = var4;
    var0.topPasteCommand = var1;
    var1 = {};
    var4 = 'onRequestSend';
    var1.registrationName = var4;
    var0.topRequestSend = var1;
    var1 = {};
    var4 = 'onTapAction';
    var1.registrationName = var4;
    var0.topTapAction = var1;
    var3.directEventTypes = var0;
    var1 = {
        'textColor': true,
        'editable': true,
        'shouldShowCursor': true,
        'placeholder': true,
        'placeholderColor': true,
        'markAsSpoilerTitle': true,
        'keyboardAppearance': true,
        'selectionColor': true,
        'setNoExtractUI': true,
        'keyboardType': true,
        'maxHeight': true
    };
    var0 = 0;
    var4 = var7[var0];
    var0 = undefined;
    var10 = var6.bind(var0)(var4);
    var8 = var10.ConditionallyIgnoredEventHandlers;
    var4 = {
        'onChangeContentSize': true,
        'onEndBlur': true,
        'onBeginFocus': true,
        'onSelectionOrTextChange': true,
        'onTextFlushed': true,
        'onPasteImage': true,
        'onPasteCommand': true,
        'onRequestSend': true,
        'onTapAction': true
    };
    var12 = var8.bind(var10)(var4);
    var13 = var1;
    var4 = copyDataProperties(var13, var12);
    var3.validAttributes = var1;
    var _closure1_slot2 = var3;
    var1 = 1;
    var1 = var7[var1];
    var8 = var6.bind(var0)(var1);
    var4 = var8.get;
    var1 = function() { // Environment: var5
        var0 = _closure1_slot2;
        return var0;
    };
    var4 = var4.bind(var8)(var9, var1);
    var1 = {};
    var8 = function arg0() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var5 = var2.bind(var0)(var1);
        var4 = var5.dispatchCommand;
        var3 = arg0;
        var2 = 'backspace';
        var1 = new Array(0);
        var1 = var4.bind(var5)(var3, var2, var1);
        return var0;
    };
    var1.backspace = var8;
    var8 = function arg0() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var5 = var2.bind(var0)(var1);
        var4 = var5.dispatchCommand;
        var3 = arg0;
        var2 = 'blur';
        var1 = new Array(0);
        var1 = var4.bind(var5)(var3, var2, var1);
        return var0;
    };
    var1.blur = var8;
    var8 = function arg0() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var5 = var2.bind(var0)(var1);
        var4 = var5.dispatchCommand;
        var3 = arg0;
        var2 = 'focus';
        var1 = new Array(0);
        var1 = var4.bind(var5)(var3, var2, var1);
        return var0;
    };
    var1.focus = var8;
    var8 = function arg0() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var5 = var2.bind(var0)(var1);
        var4 = var5.dispatchCommand;
        var3 = arg0;
        var2 = 'openCustomKeyboard';
        var1 = new Array(0);
        var1 = var4.bind(var5)(var3, var2, var1);
        return var0;
    };
    var1.openCustomKeyboard = var8;
    var8 = function arg0() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var5 = var2.bind(var0)(var1);
        var4 = var5.dispatchCommand;
        var3 = arg0;
        var2 = 'openSystemKeyboard';
        var1 = new Array(0);
        var1 = var4.bind(var5)(var3, var2, var1);
        return var0;
    };
    var1.openSystemKeyboard = var8;
    var8 = function arg0, arg1, arg2, arg3, arg4, arg5, arg6() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var5 = var2.bind(var0)(var1);
        var4 = var5.dispatchCommand;
        var3 = new Array(6);
        var1 = arg1;
        var3[0] = var1;
        var1 = arg2;
        var3[1] = var1;
        var1 = arg3;
        var3[2] = var1;
        var1 = arg4;
        var3[3] = var1;
        var1 = arg5;
        var3[4] = var1;
        var1 = arg6;
        var3[5] = var1;
        var2 = arg0;
        var1 = 'replaceRange';
        var1 = var4.bind(var5)(var2, var1, var3);
        return var0;
    };
    var1.replaceRange = var8;
    var8 = function arg0, arg1, arg2() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var5 = var2.bind(var0)(var1);
        var4 = var5.dispatchCommand;
        var3 = new Array(2);
        var1 = arg1;
        var3[0] = var1;
        var1 = arg2;
        var3[1] = var1;
        var2 = arg0;
        var1 = 'setSelectedRange';
        var1 = var4.bind(var5)(var2, var1, var3);
        return var0;
    };
    var1.setSelectedRange = var8;
    var8 = function arg0, arg1() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var5 = var2.bind(var0)(var1);
        var4 = var5.dispatchCommand;
        var3 = new Array(1);
        var1 = arg1;
        var3[0] = var1;
        var2 = arg0;
        var1 = 'setText';
        var1 = var4.bind(var5)(var2, var1, var3);
        return var0;
    };
    var1.setText = var8;
    var8 = function arg0, arg1() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var5 = var2.bind(var0)(var1);
        var4 = var5.dispatchCommand;
        var3 = new Array(1);
        var1 = arg1;
        var3[0] = var1;
        var2 = arg0;
        var1 = 'flushText';
        var1 = var4.bind(var5)(var2, var1, var3);
        return var0;
    };
    var1.flushText = var8;
    var5 = function arg0, arg1, arg2() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var5 = var2.bind(var0)(var1);
        var4 = var5.dispatchCommand;
        var3 = new Array(2);
        var1 = arg1;
        var3[0] = var1;
        var1 = arg2;
        var3[1] = var1;
        var2 = arg0;
        var1 = 'updateTextBlocks';
        var1 = var4.bind(var5)(var2, var1, var3);
        return var0;
    };
    var1.updateTextBlocks = var5;
    var5 = 3;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = '../discord_common/js/packages/rtn-codegen/js/ChatInputNativeComponent.tsx';
    var5 = var6.bind(var7)(var5);
    var2.default = var4;
    var2.__INTERNAL_VIEW_CONFIG = var3;
    var2.Commands = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [110, 42, 117, 2]);