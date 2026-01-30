// modules/chat/native/NativeChatUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var7;
    var0 = function(arg0) { // Original name: logMissingView, environment: var5
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 1;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.captureMessage;
        var1 = global;
        var1 = var1.HermesInternal;
        var6 = var1.concat;
        var5 = '';
        var4 = arg0;
        var1 = ' called with null view';
        var1 = var6.bind(var5)(var4, var1);
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var _closure1_slot6 = var0;
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var2, var0, var1);
    var9 = 0;
    var1 = var7[var9];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var3 = var1.NativeModules;
    var _closure1_slot3 = var3;
    var1 = var1.findNodeHandle;
    var _closure1_slot4 = var1;
    var3 = {};
    var3.TOP = var9;
    var1 = 'TOP';
    var3[var9] = var1;
    var8 = 1;
    var3.MIDDLE = var8;
    var1 = 'MIDDLE';
    var3[var8] = var1;
    var4 = 2;
    var3.BOTTOM = var4;
    var1 = 'BOTTOM';
    var3[var4] = var1;
    var4 = 3;
    var3.NONE = var4;
    var1 = 'NONE';
    var3[var4] = var1;
    var _closure1_slot5 = var3;
    var1 = {};
    var1.SCROLL = var9;
    var4 = 'SCROLL';
    var1[var9] = var4;
    var1.FOCUS_ONLY = var8;
    var4 = 'FOCUS_ONLY';
    var1[var8] = var4;
    var4 = {};
    var8 = function(arg0, arg1, arg2) { // Original name: scrollTo, environment: var5
        _fun73375: for (var _fun73375_ip = 0;;) switch (_fun73375_ip) {
            case 0:
                var8 = arg0;
                var6 = arg1;
                var0 = arg2;
                var1 = null;
                if (!(var1 == var8)) {
                    _fun73375_ip = 38;
                    continue _fun73375
                }
            case 15:
                var4 = _closure1_slot6;
                var3 = undefined;
                var2 = 'scrollTo';
                var2 = var4.bind(var3)(var2);
                _fun73375_ip = 243;
                continue _fun73375;
            case 38:
                if (!(var1 == var0)) {
                    _fun73375_ip = 44;
                    continue _fun73375
                }
            case 42:
                var0 = {};
            case 44:
                var2 = var0.animated;
                var7 = undefined;
                var5 = var7 !== var2;
                if (!var5) {
                    _fun73375_ip = 62;
                    continue _fun73375
                }
            case 59:
                var5 = var2;
            case 62:
                var2 = var0.highlight;
                var4 = var7 !== var2;
                if (!var4) {
                    _fun73375_ip = 78;
                    continue _fun73375
                }
            case 75:
                var4 = var2;
            case 78:
                var3 = var0.position;
                if (!(var7 === var3)) {
                    _fun73375_ip = 100;
                    continue _fun73375
                }
            case 87:
                var0 = _closure1_slot5;
                var3 = var0.TOP;
            case 100:
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var2 = 2;
                var2 = var10[var2];
                var9 = var9.bind(var7)(var2);
                var2 = var9.isIOS;
                var2 = var2.bind(var9)();
                if (var2) {
                    _fun73375_ip = 192;
                    continue _fun73375
                }
            case 136:
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var2 = 3;
                var2 = var10[var2];
                var2 = var9.bind(var7)(var2);
                var9 = var2.Commands;
                var2 = var9.scrollTo;
                var16 = var9;
                var15 = var8;
                var14 = var6;
                var13 = var5;
                var12 = var4;
                var11 = var3;
                var2 = var16[var2](var15, var14, var13, var12, var11, var10);
                _fun73375_ip = 243;
                continue _fun73375;
            case 192:
                var2 = _closure1_slot4;
                var2 = var2.bind(var7)(var8);
                if (!(var1 != var2)) {
                    _fun73375_ip = 243;
                    continue _fun73375
                }
            case 205:
                var0 = _closure1_slot3;
                var1 = var0.DCDChatManager;
                var0 = var1.scrollTo;
                var16 = var1;
                var15 = var2;
                var14 = var6;
                var13 = var5;
                var12 = var4;
                var11 = var3;
                var0 = var16[var0](var15, var14, var13, var12, var11, var10);
            case 243:
                var0 = undefined;
                return var0;
        }
    };
    var4.scrollTo = var8;
    var8 = function(arg0, arg1) { // Original name: scrollToBottom, environment: var5
        _fun73376: for (var _fun73376_ip = 0;;) switch (_fun73376_ip) {
            case 0:
                var5 = arg0;
                var3 = arg1;
                var1 = null;
                if (!(var1 == var5)) {
                    _fun73376_ip = 32;
                    continue _fun73376
                }
            case 12:
                var4 = _closure1_slot6;
                var2 = undefined;
                var0 = 'scrollToBottom';
                var0 = var4.bind(var2)(var0);
                _fun73376_ip = 145;
                continue _fun73376;
            case 32:
                var6 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 2;
                var2 = var4[var2];
                var4 = undefined;
                var6 = var6.bind(var4)(var2);
                var2 = var6.isIOS;
                var2 = var2.bind(var6)();
                if (var2) {
                    _fun73376_ip = 110;
                    continue _fun73376
                }
            case 70:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 3;
                var2 = var7[var2];
                var2 = var6.bind(var4)(var2);
                var6 = var2.Commands;
                var2 = var6.scrollToBottom;
                var2 = var2.bind(var6)(var5, var3);
                _fun73376_ip = 145;
                continue _fun73376;
            case 110:
                var2 = _closure1_slot4;
                var2 = var2.bind(var4)(var5);
                if (!(var1 != var2)) {
                    _fun73376_ip = 145;
                    continue _fun73376
                }
            case 123:
                var0 = _closure1_slot3;
                var1 = var0.DCDChatManager;
                var0 = var1.scrollToBottom;
                var0 = var0.bind(var1)(var2, var3);
            case 145:
                var0 = undefined;
                return var0;
        }
    };
    var4.scrollToBottom = var8;
    var8 = function(arg0, arg1) { // Original name: scrollToTop, environment: var5
        _fun73377: for (var _fun73377_ip = 0;;) switch (_fun73377_ip) {
            case 0:
                var4 = arg0;
                var1 = null;
                if (!(var1 == var4)) {
                    _fun73377_ip = 29;
                    continue _fun73377
                }
            case 9:
                var3 = _closure1_slot6;
                var2 = undefined;
                var0 = 'scrollToTop';
                var0 = var3.bind(var2)(var0);
                _fun73377_ip = 105;
                continue _fun73377;
            case 29:
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 2;
                var2 = var3[var2];
                var3 = undefined;
                var5 = var5.bind(var3)(var2);
                var2 = var5.isIOS;
                var2 = var2.bind(var5)();
                if (!var2) {
                    _fun73377_ip = 105;
                    continue _fun73377
                }
            case 67:
                var2 = _closure1_slot4;
                var3 = var2.bind(var3)(var4);
                if (!(var1 != var3)) {
                    _fun73377_ip = 105;
                    continue _fun73377
                }
            case 80:
                var0 = _closure1_slot3;
                var2 = var0.DCDChatManager;
                var1 = var2.scrollToTop;
                var0 = arg1;
                var0 = var1.bind(var2)(var3, var0);
            case 105:
                var0 = undefined;
                return var0;
        }
    };
    var4.scrollToTop = var8;
    var8 = function(arg0, arg1, arg2) { // Original name: scrollToRelativeOffset, environment: var5
        _fun73378: for (var _fun73378_ip = 0;;) switch (_fun73378_ip) {
            case 0:
                var4 = arg0;
                var1 = null;
                if (!(var1 == var4)) {
                    _fun73378_ip = 29;
                    continue _fun73378
                }
            case 9:
                var3 = _closure1_slot6;
                var2 = undefined;
                var0 = 'scrollToRelativeOffset';
                var0 = var3.bind(var2)(var0);
                _fun73378_ip = 109;
                continue _fun73378;
            case 29:
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 2;
                var2 = var3[var2];
                var3 = undefined;
                var5 = var5.bind(var3)(var2);
                var2 = var5.isIOS;
                var2 = var2.bind(var5)();
                if (!var2) {
                    _fun73378_ip = 109;
                    continue _fun73378
                }
            case 67:
                var2 = _closure1_slot4;
                var4 = var2.bind(var3)(var4);
                if (!(var1 != var4)) {
                    _fun73378_ip = 109;
                    continue _fun73378
                }
            case 80:
                var0 = _closure1_slot3;
                var3 = var0.DCDChatManager;
                var2 = var3.scrollToRelativeOffset;
                var1 = arg1;
                var0 = arg2;
                var0 = var2.bind(var3)(var4, var1, var0);
            case 109:
                var0 = undefined;
                return var0;
        }
    };
    var4.scrollToRelativeOffset = var8;
    var8 = function(arg0, arg1, arg2) { // Original name: scrollIntoView, environment: var5
        _fun73379: for (var _fun73379_ip = 0;;) switch (_fun73379_ip) {
            case 0:
                var7 = arg0;
                var5 = arg1;
                var0 = arg2;
                var1 = null;
                if (!(var1 == var7)) {
                    _fun73379_ip = 38;
                    continue _fun73379
                }
            case 15:
                var4 = _closure1_slot6;
                var3 = undefined;
                var2 = 'scrollIntoView';
                var2 = var4.bind(var3)(var2);
                _fun73379_ip = 215;
                continue _fun73379;
            case 38:
                if (!(var1 == var0)) {
                    _fun73379_ip = 44;
                    continue _fun73379
                }
            case 42:
                var0 = {};
            case 44:
                var2 = var0.animated;
                var6 = undefined;
                var4 = var6 !== var2;
                if (!var4) {
                    _fun73379_ip = 62;
                    continue _fun73379
                }
            case 59:
                var4 = var2;
            case 62:
                var0 = var0.highlight;
                var3 = var6 !== var0;
                if (!var3) {
                    _fun73379_ip = 78;
                    continue _fun73379
                }
            case 75:
                var3 = var0;
            case 78:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 2;
                var2 = var9[var2];
                var8 = var8.bind(var6)(var2);
                var2 = var8.isIOS;
                var2 = var2.bind(var8)();
                if (var2) {
                    _fun73379_ip = 167;
                    continue _fun73379
                }
            case 114:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 3;
                var2 = var9[var2];
                var2 = var8.bind(var6)(var2);
                var8 = var2.Commands;
                var2 = var8.scrollIntoView;
                var14 = var8;
                var13 = var7;
                var12 = var5;
                var11 = var4;
                var10 = var3;
                var2 = var14[var2](var13, var12, var11, var10, var9);
                _fun73379_ip = 215;
                continue _fun73379;
            case 167:
                var2 = _closure1_slot4;
                var2 = var2.bind(var6)(var7);
                if (!(var1 != var2)) {
                    _fun73379_ip = 215;
                    continue _fun73379
                }
            case 180:
                var0 = _closure1_slot3;
                var1 = var0.DCDChatManager;
                var0 = var1.scrollIntoView;
                var14 = var1;
                var13 = var2;
                var12 = var5;
                var11 = var4;
                var10 = var3;
                var0 = var14[var0](var13, var12, var11, var10, var9);
            case 215:
                var0 = undefined;
                return var0;
        }
    };
    var4.scrollIntoView = var8;
    var8 = function(arg0, arg1) { // Original name: updateRows, environment: var5
        _fun73380: for (var _fun73380_ip = 0;;) switch (_fun73380_ip) {
            case 0:
                var10 = arg0;
                var9 = arg1;
                var0 = null;
                if (!(var0 == var10)) {
                    _fun73380_ip = 35;
                    continue _fun73380
                }
            case 12:
                var3 = _closure1_slot6;
                var2 = undefined;
                var1 = 'updateRows';
                var1 = var3.bind(var2)(var1);
                _fun73380_ip = 287;
                continue _fun73380;
            case 35:
                var2 = _closure1_slot4;
                var11 = undefined;
                var8 = var2.bind(var11)(var10);
                if (!(var0 != var8)) {
                    _fun73380_ip = 287;
                    continue _fun73380
                }
            case 56:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 2;
                var2 = var4[var2];
                var3 = var3.bind(var11)(var2);
                var2 = var3.isIOS;
                var2 = var2.bind(var3)();
                if (var2) {
                    _fun73380_ip = 111;
                    continue _fun73380
                }
            case 89:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 4;
                var2 = var4[var2];
                var7 = var3.bind(var11)(var2);
                _fun73380_ip = 121;
                continue _fun73380;
            case 111:
                var2 = _closure1_slot3;
                var7 = var2.DCDChatManager;
            case 121:
                var6 = var7.updateRows;
                var2 = global;
                var5 = var2.JSON;
                var4 = var5.stringify;
                var3 = var9.rows;
                var5 = var4.bind(var5)(var3);
                var4 = var9.isLoadingAtTop;
                var3 = var9.scrollData;
                var12 = var0 != var3;
                var3 = null;
                if (!var12) {
                    _fun73380_ip = 196;
                    continue _fun73380
                }
            case 173:
                var13 = var2.JSON;
                var12 = var13.stringify;
                var2 = var9.scrollData;
                var3 = var12.bind(var13)(var2);
            case 196:
                var2 = _closure1_slot0;
                var12 = _closure1_slot2;
                var1 = 5;
                var1 = var12[var1];
                var2 = var2.bind(var11)(var1);
                var1 = var2.getAndIncrementChangesetIdForChat;
                var2 = var1.bind(var2)(var10);
                var10 = var9.HACK_iOSForceAnimations;
                var1 = var0 != var10;
                if (!var1) {
                    _fun73380_ip = 243;
                    continue _fun73380
                }
            case 240:
                var1 = var10;
            case 243:
                var9 = var9.forceReload;
                var0 = var0 != var9;
                if (!var0) {
                    _fun73380_ip = 259;
                    continue _fun73380
                }
            case 256:
                var0 = var9;
            case 259:
                var21 = var7;
                var20 = var8;
                var19 = var5;
                var18 = var4;
                var17 = var3;
                var16 = var2;
                var15 = var1;
                var14 = var0;
                var0 = var21[var6](var20, var19, var18, var17, var16, var15, var14, var13);
            case 287:
                var0 = undefined;
                return var0;
        }
    };
    var4.updateRows = var8;
    var8 = function(arg0) { // Original name: clearRows, environment: var5
        _fun73381: for (var _fun73381_ip = 0;;) switch (_fun73381_ip) {
            case 0:
                var5 = arg0;
                var1 = null;
                if (!(var1 == var5)) {
                    _fun73381_ip = 32;
                    continue _fun73381
                }
            case 9:
                var3 = _closure1_slot6;
                var2 = undefined;
                var0 = 'clearRows';
                var0 = var3.bind(var2)(var0);
                _fun73381_ip = 173;
                continue _fun73381;
            case 32:
                var2 = _closure1_slot4;
                var6 = undefined;
                var3 = var2.bind(var6)(var5);
                if (!(var1 == var3)) {
                    _fun73381_ip = 65;
                    continue _fun73381
                }
            case 50:
                var2 = _closure1_slot6;
                var1 = 'clearRows';
                var1 = var2.bind(var6)(var1);
                _fun73381_ip = 173;
                continue _fun73381;
            case 65:
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 2;
                var1 = var4[var1];
                var2 = var2.bind(var6)(var1);
                var1 = var2.isIOS;
                var1 = var1.bind(var2)();
                if (var1) {
                    _fun73381_ip = 120;
                    continue _fun73381
                }
            case 98:
                var2 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 4;
                var1 = var4[var1];
                var2 = var2.bind(var6)(var1);
                _fun73381_ip = 130;
                continue _fun73381;
            case 120:
                var1 = _closure1_slot3;
                var2 = var1.DCDChatManager;
            case 130:
                var1 = var2.clearRows;
                var4 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 5;
                var0 = var7[var0];
                var4 = var4.bind(var6)(var0);
                var0 = var4.getAndIncrementChangesetIdForChat;
                var0 = var0.bind(var4)(var5);
                var0 = var1.bind(var2)(var3, var0);
            case 173:
                var0 = undefined;
                return var0;
        }
    };
    var4.clearRows = var8;
    var8 = function(arg0) { // Original name: fadeIn, environment: var5
        _fun73382: for (var _fun73382_ip = 0;;) switch (_fun73382_ip) {
            case 0:
                var4 = arg0;
                var1 = null;
                if (!(var1 == var4)) {
                    _fun73382_ip = 29;
                    continue _fun73382
                }
            case 9:
                var3 = _closure1_slot6;
                var2 = undefined;
                var0 = 'fadeIn';
                var0 = var3.bind(var2)(var0);
                _fun73382_ip = 101;
                continue _fun73382;
            case 29:
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 2;
                var2 = var3[var2];
                var3 = undefined;
                var5 = var5.bind(var3)(var2);
                var2 = var5.isIOS;
                var2 = var2.bind(var5)();
                if (!var2) {
                    _fun73382_ip = 101;
                    continue _fun73382
                }
            case 67:
                var2 = _closure1_slot4;
                var2 = var2.bind(var3)(var4);
                if (!(var1 != var2)) {
                    _fun73382_ip = 101;
                    continue _fun73382
                }
            case 80:
                var0 = _closure1_slot3;
                var1 = var0.DCDChatManager;
                var0 = var1.fadeIn;
                var0 = var0.bind(var1)(var2);
            case 101:
                var0 = undefined;
                return var0;
        }
    };
    var4.fadeIn = var8;
    var5 = function(arg0, arg1) { // Original name: focus, environment: var5
        _fun73383: for (var _fun73383_ip = 0;;) switch (_fun73383_ip) {
            case 0:
                var4 = arg0;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 2;
                var2 = var2[var0];
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var2 = var3.isIOS;
                var2 = var2.bind(var3)();
                if (!var2) {
                    _fun73383_ip = 100;
                    continue _fun73383
                }
            case 41:
                var2 = null;
                if (!(var2 == var4)) {
                    _fun73383_ip = 62;
                    continue _fun73383
                }
            case 47:
                var5 = _closure1_slot6;
                var3 = 'focus';
                var3 = var5.bind(var0)(var3);
                _fun73383_ip = 100;
                continue _fun73383;
            case 62:
                var3 = _closure1_slot4;
                var4 = var3.bind(var0)(var4);
                if (!(var2 != var4)) {
                    _fun73383_ip = 100;
                    continue _fun73383
                }
            case 75:
                var1 = _closure1_slot3;
                var3 = var1.DCDChatManager;
                var2 = var3.focus;
                var1 = arg1;
                var1 = var2.bind(var3)(var4, var1);
            case 100:
                return var0;
        }
    };
    var4.focus = var5;
    var5 = 6;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/chat/native/NativeChatUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var2.default = var4;
    var2.ChatScrollPosition = var3;
    var2.ChatScrollType = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 1207, 478, 9192, 9193, 9194, 2]);