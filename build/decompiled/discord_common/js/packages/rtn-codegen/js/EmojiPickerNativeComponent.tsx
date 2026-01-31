// ../discord_common/js/packages/rtn-codegen/js/EmojiPickerNativeComponent.tsx
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
    var9 = 'EmojiPickerView';
    var3.uiViewClassName = var9;
    var0 = {};
    var1 = {};
    var4 = 'onStickyHeaderRender';
    var1.registrationName = var4;
    var0.topStickyHeaderRender = var1;
    var1 = {};
    var4 = 'onPressEmoji';
    var1.registrationName = var4;
    var0.topPressEmoji = var1;
    var1 = {};
    var4 = 'onLongPressEmoji';
    var1.registrationName = var4;
    var0.topLongPressEmoji = var1;
    var1 = {};
    var4 = 'onScroll';
    var1.registrationName = var4;
    var0.topScroll = var1;
    var1 = {};
    var4 = 'onScrollBeginDrag';
    var1.registrationName = var4;
    var0.topScrollBeginDrag = var1;
    var1 = {};
    var4 = 'onScrollEndDrag';
    var1.registrationName = var4;
    var0.topScrollEndDrag = var1;
    var1 = {};
    var4 = 'onShowNitroUpsell';
    var1.registrationName = var4;
    var0.topShowNitroUpsell = var1;
    var3.directEventTypes = var0;
    var1 = {
        'config': true,
        'paddingTop': true,
        'paddingBottom': true,
        'useTier0UpsellContent': true,
        'emojiData': true,
        'emojiMargin': true,
        'emojiSize': true
    };
    var0 = 0;
    var4 = var7[var0];
    var0 = undefined;
    var10 = var6.bind(var0)(var4);
    var8 = var10.ConditionallyIgnoredEventHandlers;
    var4 = {
        'onStickyHeaderRender': true,
        'onPressEmoji': true,
        'onLongPressEmoji': true,
        'onScroll': true,
        'onScrollBeginDrag': true,
        'onScrollEndDrag': true,
        'onShowNitroUpsell': true
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
        var2 = 'refreshEmojis';
        var1 = new Array(0);
        var1 = var4.bind(var5)(var3, var2, var1);
        return var0;
    };
    var1.refreshEmojis = var8;
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
        var1 = 'scrollingEnabled';
        var1 = var4.bind(var5)(var2, var1, var3);
        return var0;
    };
    var1.scrollingEnabled = var8;
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
        var1 = 'scrollToHeaderIndex';
        var1 = var4.bind(var5)(var2, var1, var3);
        return var0;
    };
    var1.scrollToHeaderIndex = var5;
    var5 = 3;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = '../discord_common/js/packages/rtn-codegen/js/EmojiPickerNativeComponent.tsx';
    var5 = var6.bind(var7)(var5);
    var2.default = var4;
    var2.__INTERNAL_VIEW_CONFIG = var3;
    var2.Commands = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [110, 42, 117, 2]);