// modules/chat/native/computeScrollData.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function arg0, arg1() {
        _fun73402: for (var _fun73402_ip = 0;;) switch (_fun73402_ip) {
            case 0:
                var2 = arg0;
                var1 = arg1;
                var _closure2_slot0 = var1;
                var1 = var2.findIndex;
                var0 = function(arg0) { // Environment: var0
                    _fun73403: for (var _fun73403_ip = 0;;) switch (_fun73403_ip) {
                        case 0:
                            var1 = arg0;
                            var2 = var1.message;
                            var0 = null;
                            var0 = var0 != var2;
                            if (!var0) {
                                _fun73403_ip = 38;
                                continue _fun73403
                            }
                        case 17:
                            var1 = var1.message;
                            var2 = var1.id;
                            var1 = _closure2_slot0;
                            var0 = var2 === var1;
                        case 38:
                            return var0;
                    }
                };
                var0 = var1.bind(var2)(var0);
                var1 = -1;
                if (!(var1 === var0)) {
                    _fun73402_ip = 44;
                    continue _fun73402
                }
            case 40:
                var1 = undefined;
                return var1;
            case 44:
                return var0;
        }
    };
    var _closure1_slot5 = var1;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var0 = 0;
    var7 = var6[var0];
    var4 = arg2;
    var0 = undefined;
    var4 = var4.bind(var0)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.RowType;
    var _closure1_slot3 = var7;
    var4 = var4.SeparatorType;
    var _closure1_slot4 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/chat/native/computeScrollData.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function arg0() {
        _fun73404: for (var _fun73404_ip = 0;;) switch (_fun73404_ip) {
            case 0:
                var0 = arg0;
                var12 = var0.rows;
                var15 = var0.scrollToMessageId;
                var13 = var0.jumpTargetId;
                var18 = var0.jumpType;
                var1 = var0.shouldInitialScroll;
                var2 = var0.animated;
                var8 = var0.scrollPosition;
                var10 = var0.focusTargetId;
                var0 = var0.onComputedScrollToUnread;
                if (!var1) {
                    _fun73404_ip = 89;
                    continue _fun73404
                }
            case 60:
                var1 = null;
                if (!(var1 == var13)) {
                    _fun73404_ip = 89;
                    continue _fun73404
                }
            case 66:
                var4 = function arg0() {
                    _fun73405: for (var _fun73405_ip = 0;;) switch (_fun73405_ip) {
                        case 0:
                            var2 = arg0;
                            var1 = var2.findIndex;
                            var0 = function(arg0) { // Environment: var0
                                _fun73406: for (var _fun73406_ip = 0;;) switch (_fun73406_ip) {
                                    case 0:
                                        var2 = arg0;
                                        var3 = var2.type;
                                        var0 = _closure1_slot3;
                                        var0 = var0.SEPARATOR;
                                        var0 = var3 === var0;
                                        if (!var0) {
                                            _fun73406_ip = 47;
                                            continue _fun73406
                                        }
                                    case 28:
                                        var2 = var2.id;
                                        var1 = _closure1_slot4;
                                        var1 = var1.UNREAD;
                                        var0 = var2 === var1;
                                    case 47:
                                        return var0;
                                }
                            };
                            var0 = var1.bind(var2)(var0);
                            var1 = -1;
                            if (!(var1 === var0)) {
                                _fun73405_ip = 37;
                                continue _fun73405
                            }
                        case 33:
                            var1 = undefined;
                            return var1;
                        case 37:
                            return var0;
                    }
                };
                var3 = undefined;
                var5 = var4.bind(var3)(var12);
                if (!(var1 == var5)) {
                    _fun73404_ip = 363;
                    continue _fun73404
                }
            case 89:
                var7 = null;
                var6 = var7 != var15;
                var11 = undefined;
                var4 = undefined;
                if (!var6) {
                    _fun73404_ip = 278;
                    continue _fun73404
                }
            case 105:
                var6 = _closure1_slot5;
                var16 = var6.bind(var11)(var12, var15);
                var6 = var7 != var16;
                var4 = undefined;
                if (!var6) {
                    _fun73404_ip = 278;
                    continue _fun73404
                }
            case 130:
                var6 = {};
                var19 = _closure1_slot0;
                var17 = _closure1_slot1;
                var14 = 2;
                var17 = var17[var14];
                var17 = var19.bind(var11)(var17);
                var17 = var17.ChatScrollType;
                var17 = var17.SCROLL;
                var6.type = var17;
                var6.index = var16;
                var16 = _closure1_slot2;
                var16 = var16.useReducedMotion;
                var16 = !var16;
                if (!var16) {
                    _fun73404_ip = 224;
                    continue _fun73404
                }
            case 188:
                var19 = _closure1_slot0;
                var20 = _closure1_slot1;
                var17 = 3;
                var17 = var20[var17];
                var17 = var19.bind(var11)(var17);
                var17 = var17.JumpTypes;
                var17 = var17.INSTANT;
                var16 = var18 !== var17;
            case 224:
                var6.animate = var16;
                var13 = var15 === var13;
                var6.highlight = var13;
                if (!(var7 == var8)) {
                    _fun73404_ip = 271;
                    continue _fun73404
                }
            case 242:
                var13 = _closure1_slot0;
                var9 = _closure1_slot1;
                var9 = var9[var14];
                var9 = var13.bind(var11)(var9);
                var9 = var9.ChatScrollPosition;
                var8 = var9.TOP;
            case 271:
                var6.position = var8;
                var4 = var6;
            case 278:
                if (!(var7 == var4)) {
                    _fun73404_ip = 361;
                    continue _fun73404
                }
            case 282:
                var8 = var7 != var10;
                var6 = undefined;
                if (!var8) {
                    _fun73404_ip = 358;
                    continue _fun73404
                }
            case 291:
                var8 = _closure1_slot5;
                var8 = var8.bind(var11)(var12, var10);
                var7 = var7 != var8;
                var6 = undefined;
                if (!var7) {
                    _fun73404_ip = 358;
                    continue _fun73404
                }
            case 313:
                var7 = {};
                var10 = _closure1_slot0;
                var12 = _closure1_slot1;
                var9 = 2;
                var9 = var12[var9];
                var9 = var10.bind(var11)(var9);
                var9 = var9.ChatScrollType;
                var9 = var9.FOCUS_ONLY;
                var7.type = var9;
                var7.index = var8;
                var6 = var7;
            case 358:
                var4 = var6;
            case 361:
                return var4;
            case 363:
                if (!(var1 != var0)) {
                    _fun73404_ip = 371;
                    continue _fun73404
                }
            case 367:
                var0 = var0.bind(var3)();
            case 371:
                var0 = {};
                var7 = _closure1_slot0;
                var6 = _closure1_slot1;
                var4 = 2;
                var6 = var6[var4];
                var6 = var7.bind(var3)(var6);
                var6 = var6.ChatScrollType;
                var6 = var6.SCROLL;
                var0.type = var6;
                var0.index = var5;
                if (!var2) {
                    _fun73404_ip = 432;
                    continue _fun73404
                }
            case 419:
                var5 = _closure1_slot2;
                var5 = var5.useReducedMotion;
                var2 = !var5;
            case 432:
                var0.animate = var2;
                var2 = false;
                var0.highlight = var2;
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var4];
                var1 = var2.bind(var3)(var1);
                var1 = var1.ChatScrollPosition;
                var1 = var1.TOP;
                var0.position = var1;
                return var0;
        }
    };
    var2.default = var3;
    var2.findMessageRowIndex = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1298, 6481, 9195, 4217, 2]);