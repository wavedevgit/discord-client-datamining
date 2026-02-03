// modules/voice_panel/native/utils/calculatePIPState.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
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
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.VoicePanelModes;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ParticipantTypes;
    var _closure1_slot5 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/voice_panel/native/utils/calculatePIPState.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1, arg2, arg3, arg4() {
        _fun110768: for (var _fun110768_ip = 0;;) switch (_fun110768_ip) {
            case 0:
                var5 = arg0;
                var13 = arg1;
                var0 = arg4;
                var1 = var0.focusedId;
                var9 = null;
                var7 = var9 != var1;
                if (!var7) {
                    _fun110768_ip = 77;
                    continue _fun110768
                }
            case 24:
                var4 = _closure1_slot2;
                var3 = var4.getParticipant;
                var2 = var0.focusedId;
                var3 = var3.bind(var4)(var5, var2);
                var4 = var9 == var3;
                var2 = undefined;
                if (var4) {
                    _fun110768_ip = 63;
                    continue _fun110768
                }
            case 58:
                var2 = var3.type;
            case 63:
                var1 = _closure1_slot5;
                var1 = var1.ACTIVITY;
                var7 = var2 === var1;
            case 77:
                var1 = global;
                var1 = var1.Set;
                var2 = var1.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var1
                    }
                });
                var19 = var2;
                var1 = new var19[var1](var18);
                var4 = var1 instanceof Object ? var1 : var2;
                var2 = _closure1_slot3;
                var1 = var2.getCurrentUserActiveStream;
                var6 = var1.bind(var2)();
                if (!(var9 != var6)) {
                    _fun110768_ip = 169;
                    continue _fun110768
                }
            case 126:
                var2 = var4.add;
                var10 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 4;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var10.bind(var1)(var3);
                var1 = var3.encodeStreamKey;
                var1 = var1.bind(var3)(var6);
                var1 = var2.bind(var4)(var1);
            case 169:
                var2 = var0.mode;
                var1 = _closure1_slot4;
                var1 = var1.PANEL;
                var6 = var2 === var1;
                var1 = var0.focusedId;
                var1 = var9 != var1;
                if (!var1) {
                    _fun110768_ip = 204;
                    continue _fun110768
                }
            case 201:
                var1 = var6;
            case 204:
                if (!var1) {
                    _fun110768_ip = 223;
                    continue _fun110768
                }
            case 207:
                var2 = var4.add;
                var1 = var0.focusedId;
                var1 = var2.bind(var4)(var1);
            case 223:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var11 = 5;
                var1 = var1[var11];
                var10 = undefined;
                var3 = var2.bind(var10)(var1);
                var2 = var3.computePIPParticipantToShow;
                var1 = {};
                var1.channelId = var5;
                var5 = arg2;
                var1.lastParticipantId = var5;
                var5 = arg3;
                var1.speakingUserId = var5;
                var5 = var0.focusedId;
                var1.focusedParticipantId = var5;
                var1.blockList = var4;
                var4 = var0.mode;
                var1.panelMode = var4;
                var4 = var0.showSecondaryPIP;
                var1.showSecondaryPIP = var4;
                var2 = var2.bind(var3)(var1);
                var1 = var9 == var2;
                var3 = undefined;
                if (var1) {
                    _fun110768_ip = 329;
                    continue _fun110768
                }
            case 324:
                var3 = var2.type;
            case 329:
                var1 = _closure1_slot5;
                var1 = var1.STREAM;
                var5 = var3 !== var1;
                if (!var5) {
                    _fun110768_ip = 374;
                    continue _fun110768
                }
            case 346:
                var1 = var9 == var2;
                var3 = undefined;
                if (var1) {
                    _fun110768_ip = 360;
                    continue _fun110768
                }
            case 355:
                var3 = var2.type;
            case 360:
                var1 = _closure1_slot5;
                var1 = var1.ACTIVITY;
                var5 = var3 !== var1;
            case 374:
                if (!var5) {
                    _fun110768_ip = 417;
                    continue _fun110768
                }
            case 377:
                var1 = var0.focusedId;
                var1 = var9 == var1;
                if (var1) {
                    _fun110768_ip = 414;
                    continue _fun110768
                }
            case 390:
                var3 = var9 == var2;
                var4 = undefined;
                if (var3) {
                    _fun110768_ip = 404;
                    continue _fun110768
                }
            case 399:
                var4 = var2.id;
            case 404:
                var3 = var0.focusedId;
                var1 = var4 !== var3;
            case 414:
                var5 = var1;
            case 417:
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var11];
                var4 = var3.bind(var10)(var1);
                var3 = var4.computePIPSize;
                var12 = var13.getTargetDimensions;
                var14 = var9 == var2;
                var1 = undefined;
                if (var14) {
                    _fun110768_ip = 460;
                    continue _fun110768
                }
            case 455:
                var1 = var2.id;
            case 460:
                var1 = var12.bind(var13)(var1);
                if (!(var9 == var1)) {
                    _fun110768_ip = 492;
                    continue _fun110768
                }
            case 469:
                var9 = _closure1_slot0;
                var8 = _closure1_slot1;
                var8 = var8[var11];
                var8 = var9.bind(var10)(var8);
                var1 = var8.SquarePIPReferenceDimensions;
            case 492:
                if (!var6) {
                    _fun110768_ip = 498;
                    continue _fun110768
                }
            case 495:
                var6 = var7;
            case 498:
                var15 = var0.showSecondaryPIP;
                var19 = var4;
                var18 = var1;
                var17 = var5;
                var16 = var6;
                var1 = var19[var3](var18, var17, var16, var15, var14);
                var0 = {};
                var0.participant = var2;
                var0.dimensions = var1;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3948, 3714, 11816, 3523, 3505, 14254, 2]);