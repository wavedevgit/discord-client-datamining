// modules/guilds_bar/native/hooks/useGuildsBarCreatePendingFolderNode.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function arg0, arg1() {
        _fun101219: for (var _fun101219_ip = 0;;) switch (_fun101219_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun101219_ip = 46;
                    continue _fun101219
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun101219_ip = 55;
                    continue _fun101219
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun101219_ip = 345;
                    continue _fun101219
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun101219_ip = 323;
                    continue _fun101219
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun101219_ip = 283;
                    continue _fun101219
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun101219_ip = 270;
                    continue _fun101219
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
                    _fun101219_ip = 163;
                    continue _fun101219
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun101219_ip = 179;
                    continue _fun101219
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun101219_ip = 249;
                    continue _fun101219
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun101219_ip = 249;
                    continue _fun101219
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun101219_ip = 234;
                    continue _fun101219
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun101219_ip = 247;
                    continue _fun101219
                }
            case 234:
                var8 = _closure1_slot7;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun101219_ip = 265;
                continue _fun101219;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun101219_ip = 283;
                continue _fun101219;
            case 270:
                var6 = _closure1_slot7;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun101219_ip = 323;
                    continue _fun101219
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
                    _fun101219_ip = 330;
                    continue _fun101219
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun101220: for (var _fun101220_ip = 0;;) switch (_fun101220_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun101220_ip = 56;
                                continue _fun101220
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
                            _fun101220_ip = 67;
                            continue _fun101220;
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
    var _closure1_slot6 = var0;
    var0 = function arg0, arg1() {
        _fun101221: for (var _fun101221_ip = 0;;) switch (_fun101221_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun101221_ip = 23;
                    continue _fun101221
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun101221_ip = 33;
                    continue _fun101221
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
                    _fun101221_ip = 70;
                    continue _fun101221
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun101221_ip = 55;
                    continue _fun101221
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot7 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var7 = var5[var0];
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guilds_bar/native/hooks/useGuildsBarCreatePendingFolderNode.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun101222: for (var _fun101222_ip = 0;;) switch (_fun101222_ip) {
            case 0:
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 3;
                var3 = var4[var1];
                var6 = undefined;
                var9 = var2.bind(var6)(var3);
                var8 = var9.useStateFromStores;
                var3 = _closure1_slot4;
                var5 = new Array(1);
                var5[0] = var3;
                var3 = function() { // Environment: var0
                    var0 = _closure1_slot4;
                    var0 = var0.hasFetchedRequestToJoinGuilds;
                    return var0;
                };
                var8 = var8.bind(var9)(var5, var3);
                var _closure2_slot0 = var8;
                var5 = _closure1_slot1;
                var3 = 4;
                var3 = var4[var3];
                var3 = var5.bind(var6)(var3);
                var3 = var3.bind(var6)();
                var1 = var4[var1];
                var5 = var2.bind(var6)(var1);
                var4 = var5.useStateFromStores;
                var1 = _closure1_slot5;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var0
                    var2 = _closure1_slot5;
                    var1 = var2.isFolderExpanded;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var0 = 5;
                    var3 = var3[var0];
                    var0 = undefined;
                    var0 = var4.bind(var0)(var3);
                    var0 = var0.SpecialGuildsNodeIds;
                    var0 = var0.PENDING_JOIN_REQUESTS_FOLDER;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var2 = var4.bind(var5)(var2, var1);
                var5 = _closure1_slot3;
                var4 = var5.useEffect;
                var1 = new Array(1);
                var1[0] = var8;
                var0 = function() { // Environment: var0
                    _fun101225: for (var _fun101225_ip = 0;;) switch (_fun101225_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            if (var0) {
                                _fun101225_ip = 45;
                                continue _fun101225
                            }
                        case 10:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 6;
                            var1 = var1[var0];
                            var0 = undefined;
                            var1 = var2.bind(var0)(var1);
                            var0 = var1.fetchRequestToJoinGuilds;
                            var0 = var0.bind(var1)();
                        case 45:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var4.bind(var5)(var0, var1);
                var1 = var3.length;
                var0 = 0;
                if (!(!(var1 > var0))) {
                    _fun101222_ip = 177;
                    continue _fun101222
                }
            case 161:
                var0 = {
                    'expanded': false,
                    'pendingFolderNode': null
                };
                return var0;
            case 177:
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var5 = 7;
                var0 = var12[var5];
                var4 = var11.bind(var6)(var0);
                var1 = var4.createFolderNode;
                var0 = {};
                var8 = 5;
                var8 = var12[var8];
                var8 = var11.bind(var6)(var8);
                var8 = var8.SpecialGuildsNodeIds;
                var8 = var8.PENDING_JOIN_REQUESTS_FOLDER;
                var0.folderId = var8;
                var8 = 8;
                var9 = var12[var8];
                var9 = var11.bind(var6)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var8 = var12[var8];
                var8 = var11.bind(var6)(var8);
                var8 = var8.t;
                var8 = var8["scsU+l"];
                var8 = var9.bind(var10)(var8);
                var0.folderName = var8;
                var0.expanded = var2;
                var0.guildIds = var3;
                var1 = var1.bind(var4)(var0);
                var0 = _closure1_slot6;
                var4 = var0.bind(var6)(var3);
                var3 = var4.bind(var6)();
                var0 = var3.done;
                if (var0) {
                    _fun101222_ip = 391;
                    continue _fun101222
                }
            case 322:
                var12 = var3.value;
                var9 = var1.children;
                var8 = var9.push;
                var10 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var5];
                var11 = var10.bind(var6)(var0);
                var10 = var11.createGuildNode;
                var0 = var1.id;
                var0 = var10.bind(var11)(var12, var0);
                var0 = var8.bind(var9)(var0);
                var8 = var4.bind(var6)();
                var0 = var8.done;
                var3 = var8;
                if (!var0) {
                    _fun101222_ip = 322;
                    continue _fun101222
                }
            case 391:
                var0 = {};
                var0.expanded = var2;
                var0.pendingFolderNode = var1;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 3173, 4341, 566, 7378, 13153, 7381, 4342, 1234, 2]);