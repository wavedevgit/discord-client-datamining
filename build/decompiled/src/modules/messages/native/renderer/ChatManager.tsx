// modules/messages/native/renderer/ChatManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var3 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var3;
    var _closure1_slot1 = var6;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var6[var0];
    var0 = undefined;
    var1 = var3.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = 1;
    var1 = var6[var1];
    var1 = var3.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 2;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var3 = var1.Changeset;
    var _closure1_slot4 = var3;
    var1 = var1.RowType;
    var _closure1_slot5 = var1;
    var1 = function() { // Environment: var4
        var3 = _closure1_slot3;
        var2 = function() {
            var2 = this;
            var3 = _closure1_slot2;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            var1 = null;
            var2._messages = var1;
            var3 = new Array(0);
            var2._rows = var3;
            var2.messages = var1;
            var1 = new Array(0);
            var2.rows = var1;
            var1 = 0;
            var2.rowIndex = var1;
            var1 = false;
            var2.maybeRemove = var1;
            var1 = {};
            var2.uploadProgressIds = var1;
            var1 = {};
            var2.embeddedActivities = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'getPreviousMessages';
        var0.key = var1;
        var1 = function() {
            var0 = this;
            var0 = var0._messages;
            return var0;
        };
        var0.value = var1;
        var1 = new Array(13);
        var1[0] = var0;
        var0 = {};
        var5 = 'getPreviousRows';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var0 = var0._rows;
            return var0;
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'getBlocked';
        var0.key = var5;
        var5 = function arg0() {
            _fun77777: for (var _fun77777_ip = 0;;) switch (_fun77777_ip) {
                case 0:
                    var2 = arg0;
                    var1 = this;
                    var3 = var1._messages;
                    var0 = null;
                    if (!(var0 != var3)) {
                        _fun77777_ip = 96;
                        continue _fun77777
                    }
                case 18:
                    var3 = global;
                    var5 = var3.Array;
                    var4 = var5.isArray;
                    var3 = var1._messages;
                    var3 = var4.bind(var5)(var3);
                    if (var3) {
                        _fun77777_ip = 96;
                        continue _fun77777
                    }
                case 45:
                    var1 = var1._messages;
                    var3 = var1._map;
                    var1 = var2.id;
                    var1 = var3[var1];
                    var0 = var0 != var1;
                    if (!var0) {
                        _fun77777_ip = 94;
                        continue _fun77777
                    }
                case 73:
                    var1 = var1.blocked;
                    if (var1) {
                        _fun77777_ip = 91;
                        continue _fun77777
                    }
                case 82:
                    var2 = var2.blocked;
                    var1 = !var2;
                case 91:
                    var0 = !var1;
                case 94:
                    return var0;
                case 96:
                    var0 = false;
                    return var0;
            }
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'getIgnored';
        var0.key = var5;
        var5 = function arg0() {
            _fun77778: for (var _fun77778_ip = 0;;) switch (_fun77778_ip) {
                case 0:
                    var2 = arg0;
                    var1 = this;
                    var3 = var1._messages;
                    var0 = null;
                    if (!(var0 != var3)) {
                        _fun77778_ip = 96;
                        continue _fun77778
                    }
                case 18:
                    var3 = global;
                    var5 = var3.Array;
                    var4 = var5.isArray;
                    var3 = var1._messages;
                    var3 = var4.bind(var5)(var3);
                    if (var3) {
                        _fun77778_ip = 96;
                        continue _fun77778
                    }
                case 45:
                    var1 = var1._messages;
                    var3 = var1._map;
                    var1 = var2.id;
                    var1 = var3[var1];
                    var0 = var0 != var1;
                    if (!var0) {
                        _fun77778_ip = 94;
                        continue _fun77778
                    }
                case 73:
                    var1 = var1.ignored;
                    if (var1) {
                        _fun77778_ip = 91;
                        continue _fun77778
                    }
                case 82:
                    var2 = var2.ignored;
                    var1 = !var2;
                case 91:
                    var0 = !var1;
                case 94:
                    return var0;
                case 96:
                    var0 = false;
                    return var0;
            }
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'clear';
        var0.key = var5;
        var5 = function() {
            var1 = this;
            var0 = null;
            var1._messages = var0;
            var0 = new Array(0);
            var1._rows = var0;
            var0 = {};
            var1.embeddedActivities = var0;
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'finishUpdate';
        var0.key = var5;
        var5 = function arg0, arg1() {
            var1 = this;
            var0 = arg0;
            var1._messages = var0;
            var0 = arg1;
            var1._rows = var0;
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[5] = var0;
        var0 = {};
        var5 = 'getLastRow';
        var0.key = var5;
        var5 = function() {
            _fun77781: for (var _fun77781_ip = 0;;) switch (_fun77781_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.rows;
                    var3 = null;
                    var2 = var3 != var0;
                    var0 = null;
                    if (!var2) {
                        _fun77781_ip = 70;
                        continue _fun77781
                    }
                case 20:
                    var2 = var1.rows;
                    var4 = var2.length;
                    var2 = 0;
                    var2 = var4 > var2;
                    var0 = null;
                    if (!var2) {
                        _fun77781_ip = 70;
                        continue _fun77781
                    }
                case 42:
                    var2 = var1.rows;
                    var1 = var1.rows;
                    var3 = var1.length;
                    var1 = 1;
                    var1 = var3 - var1;
                    var0 = var2[var1];
                case 70:
                    return var0;
            }
        };
        var0.value = var5;
        var1[6] = var0;
        var0 = {};
        var5 = 'setup';
        var0.key = var5;
        var5 = function arg0() {
            _fun77782: for (var _fun77782_ip = 0;;) switch (_fun77782_ip) {
                case 0:
                    var2 = this;
                    var0 = arg0;
                    var2.messages = var0;
                    var0 = new Array(0);
                    var2.rows = var0;
                    var0 = 0;
                    var2.rowIndex = var0;
                    var1 = var2._messages;
                    var0 = null;
                    var4 = var0 == var1;
                    var0 = undefined;
                    var3 = undefined;
                    if (var4) {
                        _fun77782_ip = 54;
                        continue _fun77782
                    }
                case 49:
                    var3 = var1.length;
                case 54:
                    var1 = var2.messages;
                    var1 = var1.length;
                    var1 = var3 === var1;
                    var2.maybeRemove = var1;
                    return var0;
            }
        };
        var0.value = var5;
        var1[7] = var0;
        var0 = {};
        var5 = 'determineChangeTypeForUploadProgress';
        var0.key = var5;
        var5 = function arg0() {
            _fun77783: for (var _fun77783_ip = 0;;) switch (_fun77783_ip) {
                case 0:
                    var4 = arg0;
                    var2 = this;
                    var1 = var2.uploadProgressIds;
                    var0 = var4.id;
                    var1 = var1[var0];
                    var7 = null;
                    if (!(var7 == var1)) {
                        _fun77783_ip = 60;
                        continue _fun77783
                    }
                case 27:
                    var3 = var2.uploadProgressIds;
                    var0 = var4.id;
                    var3[var0] = var4;
                    var0 = _closure1_slot4;
                    var0 = var0.INSERT;
                    _fun77783_ip = 196;
                    continue _fun77783;
                case 60:
                    var6 = var1.items;
                    var8 = var7 == var6;
                    var3 = undefined;
                    if (var8) {
                        _fun77783_ip = 79;
                        continue _fun77783
                    }
                case 74:
                    var3 = var6.length;
                case 79:
                    var6 = var4.items;
                    var7 = var7 == var6;
                    var5 = undefined;
                    if (var7) {
                        _fun77783_ip = 98;
                        continue _fun77783
                    }
                case 93:
                    var5 = var6.length;
                case 98:
                    if (!(var3 === var5)) {
                        _fun77783_ip = 165;
                        continue _fun77783
                    }
                case 102:
                    var5 = var1.compressionProgress;
                    var3 = var4.compressionProgress;
                    if (!(var5 === var3)) {
                        _fun77783_ip = 165;
                        continue _fun77783
                    }
                case 118:
                    var5 = var1.progress;
                    var3 = var4.progress;
                    if (!(var5 === var3)) {
                        _fun77783_ip = 165;
                        continue _fun77783
                    }
                case 134:
                    var3 = var1.currentSize;
                    var1 = var4.currentSize;
                    if (!(var3 === var1)) {
                        _fun77783_ip = 165;
                        continue _fun77783
                    }
                case 150:
                    var1 = _closure1_slot4;
                    var1 = var1.NOOP;
                    _fun77783_ip = 193;
                    continue _fun77783;
                case 165:
                    var3 = var2.uploadProgressIds;
                    var2 = var4.id;
                    var3[var2] = var4;
                    var2 = _closure1_slot4;
                    var1 = var2.UPDATE;
                case 193:
                    var0 = var1;
                case 196:
                    return var0;
            }
        };
        var0.value = var5;
        var1[8] = var0;
        var0 = {};
        var5 = 'determineChangeTypeForEmbeddedActivity';
        var0.key = var5;
        var5 = function arg0() {
            _fun77784: for (var _fun77784_ip = 0;;) switch (_fun77784_ip) {
                case 0:
                    var4 = arg0;
                    var0 = this;
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 3;
                    var2 = var3[var2];
                    var3 = undefined;
                    var2 = var5.bind(var3)(var2);
                    var3 = var2.bind(var3)(var4);
                    var2 = var0.embeddedActivities;
                    var2 = var2[var3];
                    var0 = var0.embeddedActivities;
                    var0[var3] = var4;
                    var0 = null;
                    if (!(var0 == var2)) {
                        _fun77784_ip = 74;
                        continue _fun77784
                    }
                case 62:
                    var0 = _closure1_slot4;
                    var0 = var0.INSERT;
                    _fun77784_ip = 84;
                    continue _fun77784;
                case 74:
                    var1 = _closure1_slot4;
                    var0 = var1.UPDATE;
                case 84:
                    return var0;
            }
        };
        var0.value = var5;
        var1[9] = var0;
        var0 = {};
        var5 = 'determineChangeType';
        var0.key = var5;
        var5 = function arg0() {
            _fun77785: for (var _fun77785_ip = 0;;) switch (_fun77785_ip) {
                case 0:
                    var0 = arg0;
                    var6 = arguments[1];
                    var7 = this;
                    var4 = var0.message;
                    var5 = var0.updateMessageIds;
                    var1 = var0.forceRender;
                    var3 = undefined;
                    if (!(var6 === var3)) {
                        _fun77785_ip = 34;
                        continue _fun77785
                    }
                case 32:
                    var6 = false;
                case 34:
                    var2 = var7._messages;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun77785_ip = 345;
                        continue _fun77785
                    }
                case 49:
                    var2 = global;
                    var9 = var2.Array;
                    var8 = var9.isArray;
                    var2 = var7._messages;
                    var2 = var8.bind(var9)(var2);
                    if (var2) {
                        _fun77785_ip = 330;
                        continue _fun77785
                    }
                case 79:
                    var2 = var7._messages;
                    var2 = var2._map;
                    if (!(var0 != var2)) {
                        _fun77785_ip = 315;
                        continue _fun77785
                    }
                case 98:
                    var2 = var7._messages;
                    var8 = var2._map;
                    var2 = var4.id;
                    var9 = var8[var2];
                    var2 = var9;
                    if (!(var0 == var9)) {
                        _fun77785_ip = 168;
                        continue _fun77785
                    }
                case 126:
                    var8 = var4.nonce;
                    var2 = var9;
                    if (!(var0 != var8)) {
                        _fun77785_ip = 168;
                        continue _fun77785
                    }
                case 139:
                    var7 = var7._messages;
                    var8 = var7._map;
                    var7 = var4.nonce;
                    var2 = var8[var7];
                    if (!(var0 == var2)) {
                        _fun77785_ip = 300;
                        continue _fun77785
                    }
                case 168:
                    if (!(var0 != var2)) {
                        _fun77785_ip = 285;
                        continue _fun77785
                    }
                case 172:
                    if (!var6) {
                        _fun77785_ip = 193;
                        continue _fun77785
                    }
                case 175:
                    var6 = var2.blocked;
                    if (!var6) {
                        _fun77785_ip = 193;
                        continue _fun77785
                    }
                case 184:
                    var6 = var4.blocked;
                    if (!var6) {
                        _fun77785_ip = 285;
                        continue _fun77785
                    }
                case 193:
                    if (var1) {
                        _fun77785_ip = 270;
                        continue _fun77785
                    }
                case 196:
                    if (!(var0 != var5)) {
                        _fun77785_ip = 218;
                        continue _fun77785
                    }
                case 200:
                    var1 = var5.has;
                    var0 = var4.id;
                    var0 = var1.bind(var5)(var0);
                    if (var0) {
                        _fun77785_ip = 270;
                        continue _fun77785
                    }
                case 218:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var0 = 4;
                    var0 = var6[var0];
                    var0 = var5.bind(var3)(var0);
                    var0 = var0.bind(var3)(var2, var4);
                    var1 = _closure1_slot4;
                    if (var0) {
                        _fun77785_ip = 262;
                        continue _fun77785
                    }
                case 254:
                    var0 = var1.UPDATE;
                    _fun77785_ip = 268;
                    continue _fun77785;
                case 262:
                    var0 = var1.NOOP;
                case 268:
                    _fun77785_ip = 283;
                    continue _fun77785;
                case 270:
                    var1 = _closure1_slot4;
                    var0 = var1.UPDATE;
                case 283:
                    _fun77785_ip = 298;
                    continue _fun77785;
                case 285:
                    var1 = _closure1_slot4;
                    var0 = var1.INSERT;
                case 298:
                    _fun77785_ip = 313;
                    continue _fun77785;
                case 300:
                    var1 = _closure1_slot4;
                    var0 = var1.UPDATE;
                case 313:
                    return var0;
                case 315:
                    var0 = _closure1_slot4;
                    var0 = var0.NOOP;
                    return var0;
                case 330:
                    var0 = _closure1_slot4;
                    var0 = var0.NOOP;
                    return var0;
                case 345:
                    var0 = _closure1_slot4;
                    var0 = var0.NOOP;
                    return var0;
            }
        };
        var0.value = var5;
        var1[10] = var0;
        var0 = {};
        var5 = 'createRow';
        var0.key = var5;
        var5 = function arg0() {
            _fun77786: for (var _fun77786_ip = 0;;) switch (_fun77786_ip) {
                case 0:
                    var0 = arg0;
                    var1 = this;
                    var3 = var0.type;
                    var2 = _closure1_slot5;
                    var2 = var2.MESSAGE;
                    if (!(var3 === var2)) {
                        _fun77786_ip = 43;
                        continue _fun77786
                    }
                case 28:
                    var3 = var0.message;
                    var2 = null;
                    if (!(var2 == var3)) {
                        _fun77786_ip = 43;
                        continue _fun77786
                    }
                case 39:
                    var2 = undefined;
                    return var2;
                case 43:
                    var2 = var1.rowIndex;
                    var2 = parseFloat(var2);
                    var3 = var2 + 1;
                    var1.rowIndex = var3;
                    var0.index = var2;
                    var2 = var1.rows;
                    var1 = var2.push;
                    var1 = var1.bind(var2)(var0);
                    return var0;
            }
        };
        var0.value = var5;
        var1[11] = var0;
        var0 = {};
        var5 = 'createChangeset';
        var0.key = var5;
        var4 = function() {
            _fun77787: for (var _fun77787_ip = 0;;) switch (_fun77787_ip) {
                case 0:
                    var2 = this;
                    var3 = new Array(0);
                    var0 = var2._messages;
                    var13 = null;
                    if (!(var13 != var0)) {
                        _fun77787_ip = 1248;
                        continue _fun77787
                    }
                case 22:
                    var0 = var2._rows;
                    var0 = var0.length;
                    var12 = 0;
                    var0 = var12 < var0;
                    var10 = undefined;
                    var9 = undefined;
                    var8 = 0;
                    var7 = 0;
                    var6 = 0;
                    var5 = undefined;
                    var4 = undefined;
                    var1 = undefined;
                    if (var0) {
                        _fun77787_ip = 95;
                        continue _fun77787
                    }
                case 58:
                    var0 = var2.rows;
                    var0 = var0.length;
                    var0 = var12 < var0;
                    var10 = undefined;
                    var9 = undefined;
                    var8 = 0;
                    var7 = 0;
                    var6 = 0;
                    var5 = undefined;
                    var4 = undefined;
                    var1 = undefined;
                    if (!var0) {
                        _fun77787_ip = 1227;
                        continue _fun77787
                    }
                case 95:
                    var0 = var2.rows;
                    var0 = var0.length;
                    if (!(var8 === var0)) {
                        _fun77787_ip = 177;
                        continue _fun77787
                    }
                case 110:
                    var14 = var3.push;
                    var0 = {};
                    var15 = _closure1_slot4;
                    var15 = var15.REMOVE;
                    var0.changeType = var15;
                    var15 = var8 + var7;
                    var0.index = var15;
                    var0 = var14.bind(var3)(var0);
                    var19 = var7 + 1;
                    var18 = var6 + 1;
                    var21 = var10;
                    var20 = var9;
                    var14 = var8;
                    var17 = var5;
                    var16 = var4;
                    var15 = var1;
                    _fun77787_ip = 1143;
                    continue _fun77787;
                case 177:
                    var0 = var2._rows;
                    var0 = var0.length;
                    if (!(var6 === var0)) {
                        _fun77787_ip = 270;
                        continue _fun77787
                    }
                case 192:
                    var0 = var2.rows;
                    var22 = var0[var8];
                    var0 = _closure1_slot4;
                    var0 = var0.INSERT;
                    var22.changeType = var0;
                    var0 = var8 + var7;
                    var22.index = var0;
                    var0 = var3.push;
                    var0 = var0.bind(var3)(var22);
                    var14 = var8 + 1;
                    var21 = var10;
                    var20 = var9;
                    var19 = var7;
                    var18 = var6;
                    var17 = var5;
                    var16 = var4;
                    var15 = var1;
                    _fun77787_ip = 1143;
                    continue _fun77787;
                case 270:
                    var0 = var2._rows;
                    var22 = var0[var6];
                    var0 = var2.rows;
                    var0 = var0[var8];
                    var25 = var0.changeType;
                    var23 = _closure1_slot4;
                    var23 = var23.NOOP;
                    if (!(var23 !== var25)) {
                        _fun77787_ip = 386;
                        continue _fun77787
                    }
                case 313:
                    var23 = _closure1_slot4;
                    var23 = var23.UPDATE;
                    if (!(var23 !== var25)) {
                        _fun77787_ip = 386;
                        continue _fun77787
                    }
                case 327:
                    var23 = _closure1_slot4;
                    var23 = var23.INSERT;
                    var23 = var8 + var7;
                    var0.index = var23;
                    var23 = var3.push;
                    var23 = var23.bind(var3)(var0);
                    var14 = var8 + 1;
                    var21 = var10;
                    var20 = var9;
                    var19 = var7;
                    var18 = var6;
                    var17 = var22;
                    var16 = var0;
                    var15 = var1;
                    _fun77787_ip = 1143;
                    continue _fun77787;
                case 386:
                    var25 = var0.type;
                    var23 = var22.type;
                    if (!(var25 === var23)) {
                        _fun77787_ip = 985;
                        continue _fun77787
                    }
                case 403:
                    var25 = var0.type;
                    var23 = _closure1_slot5;
                    var23 = var23.SEPARATOR;
                    if (!(var25 === var23)) {
                        _fun77787_ip = 439;
                        continue _fun77787
                    }
                case 422:
                    var25 = var0.id;
                    var23 = var22.id;
                    if (!(var25 === var23)) {
                        _fun77787_ip = 985;
                        continue _fun77787
                    }
                case 439:
                    var25 = var0.type;
                    var23 = _closure1_slot5;
                    var23 = var23.LOADING;
                    if (!(var25 === var23)) {
                        _fun77787_ip = 475;
                        continue _fun77787
                    }
                case 458:
                    var25 = var0.id;
                    var23 = var22.id;
                    if (!(var25 === var23)) {
                        _fun77787_ip = 985;
                        continue _fun77787
                    }
                case 475:
                    var25 = var0.type;
                    var23 = _closure1_slot5;
                    var23 = var23.MESSAGE;
                    if (!(var25 === var23)) {
                        _fun77787_ip = 564;
                        continue _fun77787
                    }
                case 494:
                    var23 = var0.message;
                    if (!(var13 != var23)) {
                        _fun77787_ip = 564;
                        continue _fun77787
                    }
                case 503:
                    var23 = var22.message;
                    if (!(var13 != var23)) {
                        _fun77787_ip = 564;
                        continue _fun77787
                    }
                case 512:
                    var23 = var0.message;
                    var25 = var23.id;
                    var23 = var22.message;
                    var23 = var23.id;
                    if (!(var25 !== var23)) {
                        _fun77787_ip = 564;
                        continue _fun77787
                    }
                case 536:
                    var23 = var0.message;
                    var25 = var23.nonce;
                    var23 = var22.message;
                    var23 = var23.id;
                    if (!(var25 === var23)) {
                        _fun77787_ip = 985;
                        continue _fun77787
                    }
                case 564:
                    var25 = var0.changeType;
                    var23 = _closure1_slot4;
                    var23 = var23.NOOP;
                    var29 = var10;
                    var28 = var9;
                    if (!(var25 === var23)) {
                        _fun77787_ip = 871;
                        continue _fun77787
                    }
                case 593:
                    var25 = var0.type;
                    var23 = _closure1_slot5;
                    var23 = var23.SEPARATOR;
                    if (!(var25 === var23)) {
                        _fun77787_ip = 635;
                        continue _fun77787
                    }
                case 612:
                    var25 = var0.text;
                    var23 = var22.text;
                    var27 = var10;
                    var26 = var9;
                    if (!(var25 === var23)) {
                        _fun77787_ip = 920;
                        continue _fun77787
                    }
                case 635:
                    var25 = var0.type;
                    var23 = _closure1_slot5;
                    var23 = var23.LOADING;
                    if (!(var25 === var23)) {
                        _fun77787_ip = 679;
                        continue _fun77787
                    }
                case 654:
                    var25 = var0.isLoading;
                    var23 = var22.isLoading;
                    var27 = var10;
                    var26 = var9;
                    if (!(var25 === var23)) {
                        _fun77787_ip = 920;
                        continue _fun77787
                    }
                case 679:
                    var25 = var0.type;
                    var23 = _closure1_slot5;
                    var23 = var23.BLOCKED_GROUP;
                    if (!(var25 !== var23)) {
                        _fun77787_ip = 717;
                        continue _fun77787
                    }
                case 698:
                    var25 = var0.type;
                    var23 = _closure1_slot5;
                    var23 = var23.IGNORED_GROUP;
                    if (!(var25 === var23)) {
                        _fun77787_ip = 765;
                        continue _fun77787
                    }
                case 717:
                    var25 = var0.text;
                    var23 = var22.text;
                    var27 = var10;
                    var26 = var9;
                    if (!(var25 === var23)) {
                        _fun77787_ip = 920;
                        continue _fun77787
                    }
                case 740:
                    var25 = var0.revealed;
                    var23 = var22.revealed;
                    var27 = var10;
                    var26 = var9;
                    if (!(var25 === var23)) {
                        _fun77787_ip = 920;
                        continue _fun77787
                    }
                case 765:
                    var25 = var0.type;
                    var23 = _closure1_slot5;
                    var23 = var23.MESSAGE;
                    if (!(var25 === var23)) {
                        _fun77787_ip = 815;
                        continue _fun77787
                    }
                case 784:
                    var25 = var0.separatorBefore;
                    var23 = var22.separatorBefore;
                    if (!(var25 !== var23)) {
                        _fun77787_ip = 815;
                        continue _fun77787
                    }
                case 800:
                    var23 = var2.maybeRemove;
                    var27 = var10;
                    var26 = var9;
                    if (!var23) {
                        _fun77787_ip = 920;
                        continue _fun77787
                    }
                case 815:
                    var31 = var0.message;
                    var23 = var13 == var31;
                    var25 = undefined;
                    if (var23) {
                        _fun77787_ip = 835;
                        continue _fun77787
                    }
                case 829:
                    var25 = var31.isFirst;
                case 835:
                    var30 = var22.message;
                    var32 = var13 == var30;
                    var23 = undefined;
                    if (var32) {
                        _fun77787_ip = 855;
                        continue _fun77787
                    }
                case 849:
                    var23 = var30.isFirst;
                case 855:
                    var29 = var31;
                    var28 = var30;
                    var27 = var29;
                    var26 = var28;
                    if (!(var25 === var23)) {
                        _fun77787_ip = 920;
                        continue _fun77787
                    }
                case 871:
                    var23 = var8 + var7;
                    var0.index = var23;
                    var23 = var3.push;
                    var23 = var23.bind(var3)(var0);
                    var18 = var6 + 1;
                    var14 = var8 + 1;
                    var21 = var29;
                    var20 = var28;
                    var19 = var7;
                    var17 = var22;
                    var16 = var0;
                    var15 = var1;
                    _fun77787_ip = 1143;
                    continue _fun77787;
                case 920:
                    var23 = _closure1_slot4;
                    var23 = var23.UPDATE;
                    var0.changeType = var23;
                    var23 = var8 + var7;
                    var0.index = var23;
                    var23 = var3.push;
                    var23 = var23.bind(var3)(var0);
                    var18 = var6 + 1;
                    var14 = var8 + 1;
                    var21 = var27;
                    var20 = var26;
                    var19 = var7;
                    var17 = var22;
                    var16 = var0;
                    var15 = var1;
                    _fun77787_ip = 1143;
                    continue _fun77787;
                case 985:
                    var25 = var3.push;
                    var23 = {};
                    var26 = _closure1_slot4;
                    var26 = var26.REMOVE;
                    var23.changeType = var26;
                    var26 = var8 + var7;
                    var23.index = var26;
                    var23 = var25.bind(var3)(var23);
                    var23 = var8 + var7;
                    if (!(var23 > var12)) {
                        _fun77787_ip = 1119;
                        continue _fun77787
                    }
                case 1028:
                    var25 = var8 + var7;
                    var23 = 1;
                    var23 = var25 - var23;
                    var23 = var3[var23];
                    var26 = var23.changeType;
                    var25 = _closure1_slot4;
                    var25 = var25.NOOP;
                    var25 = var26 !== var25;
                    if (var25) {
                        _fun77787_ip = 1085;
                        continue _fun77787
                    }
                case 1066:
                    var27 = var23.type;
                    var26 = _closure1_slot5;
                    var26 = var26.MESSAGE;
                    var25 = var27 !== var26;
                case 1085:
                    if (var25) {
                        _fun77787_ip = 1094;
                        continue _fun77787
                    }
                case 1088:
                    var25 = var2.maybeRemove;
                case 1094:
                    var1 = var23;
                    if (var25) {
                        _fun77787_ip = 1119;
                        continue _fun77787
                    }
                case 1100:
                    var24 = _closure1_slot4;
                    var24 = var24.UPDATE;
                    var23.changeType = var24;
                    var1 = var23;
                case 1119:
                    var18 = var6 + 1;
                    var19 = var7 + 1;
                    var15 = var1;
                    var21 = var10;
                    var20 = var9;
                    var14 = var8;
                    var17 = var22;
                    var16 = var0;
                case 1143:
                    var0 = var2._rows;
                    var0 = var0.length;
                    var10 = var21;
                    var9 = var20;
                    var8 = var14;
                    var7 = var19;
                    var6 = var18;
                    var5 = var17;
                    var4 = var16;
                    var1 = var15;
                    if (var18 < var0) {
                        _fun77787_ip = 95;
                        continue _fun77787
                    }
                case 1185:
                    var0 = var2.rows;
                    var0 = var0.length;
                    var10 = var21;
                    var9 = var20;
                    var7 = var19;
                    var6 = var18;
                    var5 = var17;
                    var4 = var16;
                    var1 = var15;
                    var8 = var14;
                    if (var8 < var0) {
                        _fun77787_ip = 95;
                        continue _fun77787
                    }
                case 1227:
                    var1 = var3.filter;
                    var0 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var1 = var0.changeType;
                        var0 = _closure1_slot4;
                        var0 = var0.NOOP;
                        var0 = var1 !== var0;
                        return var0;
                    };
                    var0 = var1.bind(var3)(var0);
                    _fun77787_ip = 1254;
                    continue _fun77787;
                case 1248:
                    var0 = var2.rows;
                case 1254:
                    var1 = var2.messages;
                    var2._messages = var1;
                    var1 = var2.rows;
                    var2._rows = var1;
                    return var0;
            }
        };
        var0.value = var4;
        var1[12] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var3 = var1.bind(var0)();
    var1 = {};
    var7 = function() {
        var0 = _closure1_slot4;
        var0 = var0.NOOP;
        return var0;
    };
    var1.determineChangeType = var7;
    var7 = function() {
        var0 = _closure1_slot4;
        var0 = var0.NOOP;
        return var0;
    };
    var1.determineChangeTypeForUploadProgress = var7;
    var7 = function() {
        var0 = _closure1_slot4;
        var0 = var0.NOOP;
        return var0;
    };
    var1.determineChangeTypeForEmbeddedActivity = var7;
    var7 = function() {
        var0 = false;
        return var0;
    };
    var1.getBlocked = var7;
    var4 = function() {
        var0 = false;
        return var0;
    };
    var1.getIgnored = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/ChatManager.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.MockChatManager = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 6541, 9898, 644, 2]);