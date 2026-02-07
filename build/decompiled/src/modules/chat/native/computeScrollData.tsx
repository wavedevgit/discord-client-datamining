// modules/chat/native/computeScrollData.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function arg0, arg1() {
        _fun74134: for (var _fun74134_ip = 0;;) switch (_fun74134_ip) {
            case 0:
                var2 = arg0;
                var1 = arg1;
                var _closure2_slot0 = var1;
                var1 = var2.findIndex;
                var0 = function(arg0) { // Environment: var0
                    _fun74135: for (var _fun74135_ip = 0;;) switch (_fun74135_ip) {
                        case 0:
                            var1 = arg0;
                            var2 = var1.message;
                            var0 = null;
                            var0 = var0 != var2;
                            if (!var0) {
                                _fun74135_ip = 38;
                                continue _fun74135
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
                    _fun74134_ip = 44;
                    continue _fun74134
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
        _fun74136: for (var _fun74136_ip = 0;;) switch (_fun74136_ip) {
            case 0:
                var1 = arg0;
                var12 = var1.rows;
                var15 = var1.scrollToMessageId;
                var13 = var1.jumpTargetId;
                var18 = var1.jumpType;
                var0 = var1.shouldInitialScroll;
                var2 = var1.animated;
                var8 = var1.scrollPosition;
                var10 = var1.focusTargetId;
                var1 = var1.getInitialScrollMessageId;
                if (!var0) {
                    _fun74136_ip = 126;
                    continue _fun74136
                }
            case 60:
                var0 = null;
                if (!(var0 == var13)) {
                    _fun74136_ip = 126;
                    continue _fun74136
                }
            case 66:
                var4 = var0 == var1;
                var3 = undefined;
                var5 = undefined;
                if (var4) {
                    _fun74136_ip = 81;
                    continue _fun74136
                }
            case 77:
                var5 = var1.bind(var3)();
            case 81:
                if (!(var0 != var5)) {
                    _fun74136_ip = 105;
                    continue _fun74136
                }
            case 85:
                var4 = _closure1_slot5;
                var5 = var4.bind(var3)(var12, var5);
                if (!(var0 == var5)) {
                    _fun74136_ip = 511;
                    continue _fun74136
                }
            case 105:
                var4 = function arg0() {
                    _fun74137: for (var _fun74137_ip = 0;;) switch (_fun74137_ip) {
                        case 0:
                            var2 = arg0;
                            var1 = var2.findIndex;
                            var0 = function(arg0) { // Environment: var0
                                _fun74138: for (var _fun74138_ip = 0;;) switch (_fun74138_ip) {
                                    case 0:
                                        var2 = arg0;
                                        var3 = var2.type;
                                        var0 = _closure1_slot3;
                                        var0 = var0.SEPARATOR;
                                        var0 = var3 === var0;
                                        if (!var0) {
                                            _fun74138_ip = 47;
                                            continue _fun74138
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
                                _fun74137_ip = 37;
                                continue _fun74137
                            }
                        case 33:
                            var1 = undefined;
                            return var1;
                        case 37:
                            return var0;
                    }
                };
                var6 = var4.bind(var3)(var12);
                if (!(var0 == var6)) {
                    _fun74136_ip = 400;
                    continue _fun74136
                }
            case 126:
                var7 = null;
                var4 = var7 != var15;
                var11 = undefined;
                var0 = undefined;
                if (!var4) {
                    _fun74136_ip = 315;
                    continue _fun74136
                }
            case 142:
                var4 = _closure1_slot5;
                var16 = var4.bind(var11)(var12, var15);
                var4 = var7 != var16;
                var0 = undefined;
                if (!var4) {
                    _fun74136_ip = 315;
                    continue _fun74136
                }
            case 167:
                var4 = {};
                var19 = _closure1_slot0;
                var17 = _closure1_slot1;
                var14 = 2;
                var17 = var17[var14];
                var17 = var19.bind(var11)(var17);
                var17 = var17.ChatScrollType;
                var17 = var17.SCROLL;
                var4.type = var17;
                var4.index = var16;
                var16 = _closure1_slot2;
                var16 = var16.useReducedMotion;
                var16 = !var16;
                if (!var16) {
                    _fun74136_ip = 261;
                    continue _fun74136
                }
            case 225:
                var19 = _closure1_slot0;
                var20 = _closure1_slot1;
                var17 = 3;
                var17 = var20[var17];
                var17 = var19.bind(var11)(var17);
                var17 = var17.JumpTypes;
                var17 = var17.INSTANT;
                var16 = var18 !== var17;
            case 261:
                var4.animate = var16;
                var13 = var15 === var13;
                var4.highlight = var13;
                if (!(var7 == var8)) {
                    _fun74136_ip = 308;
                    continue _fun74136
                }
            case 279:
                var13 = _closure1_slot0;
                var9 = _closure1_slot1;
                var9 = var9[var14];
                var9 = var13.bind(var11)(var9);
                var9 = var9.ChatScrollPosition;
                var8 = var9.TOP;
            case 308:
                var4.position = var8;
                var0 = var4;
            case 315:
                if (!(var7 == var0)) {
                    _fun74136_ip = 398;
                    continue _fun74136
                }
            case 319:
                var8 = var7 != var10;
                var4 = undefined;
                if (!var8) {
                    _fun74136_ip = 395;
                    continue _fun74136
                }
            case 328:
                var8 = _closure1_slot5;
                var8 = var8.bind(var11)(var12, var10);
                var7 = var7 != var8;
                var4 = undefined;
                if (!var7) {
                    _fun74136_ip = 395;
                    continue _fun74136
                }
            case 350:
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
                var4 = var7;
            case 395:
                var0 = var4;
            case 398:
                return var0;
            case 400:
                var0 = {};
                var9 = _closure1_slot0;
                var8 = _closure1_slot1;
                var7 = 2;
                var8 = var8[var7];
                var8 = var9.bind(var3)(var8);
                var8 = var8.ChatScrollType;
                var8 = var8.SCROLL;
                var0.type = var8;
                var0.index = var6;
                var6 = var2;
                if (!var2) {
                    _fun74136_ip = 464;
                    continue _fun74136
                }
            case 451:
                var8 = _closure1_slot2;
                var8 = var8.useReducedMotion;
                var6 = !var8;
            case 464:
                var0.animate = var6;
                var6 = false;
                var0.highlight = var6;
                var6 = _closure1_slot0;
                var4 = _closure1_slot1;
                var4 = var4[var7];
                var4 = var6.bind(var3)(var4);
                var4 = var4.ChatScrollPosition;
                var4 = var4.TOP;
                var0.position = var4;
                return var0;
            case 511:
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
                    _fun74136_ip = 569;
                    continue _fun74136
                }
            case 556:
                var5 = _closure1_slot2;
                var5 = var5.useReducedMotion;
                var2 = !var5;
            case 569:
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [1298, 6584, 9318, 4253, 2]);