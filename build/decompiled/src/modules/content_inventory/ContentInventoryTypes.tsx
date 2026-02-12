// modules/content_inventory/ContentInventoryTypes.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var13 = require;
    var2 = exports;
    var12 = dependencyMap;
    var _closure1_slot0 = var13;
    var _closure1_slot1 = var12;
    var11 = function arg0() {
        _fun61824: for (var _fun61824_ip = 0;;) switch (_fun61824_ip) {
            case 0:
                var0 = arg0;
                var1 = null;
                var2 = var1 == var0;
                var3 = undefined;
                var1 = undefined;
                if (var2) {
                    _fun61824_ip = 22;
                    continue _fun61824
                }
            case 16:
                var1 = var0.content_type;
            case 22:
                var2 = _closure1_slot0;
                var4 = _closure1_slot1;
                var0 = 0;
                var0 = var4[var0];
                var0 = var2.bind(var3)(var0);
                var0 = var0.ContentInventoryEntryType;
                var0 = var0.PLAYED_GAME;
                var0 = var1 === var0;
                return var0;
        }
    };
    var _closure1_slot2 = var11;
    var10 = function arg0() {
        _fun61825: for (var _fun61825_ip = 0;;) switch (_fun61825_ip) {
            case 0:
                var0 = arg0;
                var1 = null;
                var2 = var1 == var0;
                var3 = undefined;
                var1 = undefined;
                if (var2) {
                    _fun61825_ip = 22;
                    continue _fun61825
                }
            case 16:
                var1 = var0.content_type;
            case 22:
                var2 = _closure1_slot0;
                var4 = _closure1_slot1;
                var0 = 0;
                var0 = var4[var0];
                var0 = var2.bind(var3)(var0);
                var0 = var0.ContentInventoryEntryType;
                var0 = var0.TOP_GAME;
                var0 = var1 === var0;
                return var0;
        }
    };
    var _closure1_slot3 = var10;
    var9 = function arg0() {
        _fun61826: for (var _fun61826_ip = 0;;) switch (_fun61826_ip) {
            case 0:
                var3 = arg0;
                var0 = _closure1_slot2;
                var2 = undefined;
                var0 = var0.bind(var2)(var3);
                if (var0) {
                    _fun61826_ip = 29;
                    continue _fun61826
                }
            case 20:
                var1 = _closure1_slot3;
                var0 = var1.bind(var2)(var3);
            case 29:
                return var0;
        }
    };
    var _closure1_slot4 = var9;
    var8 = function arg0() {
        _fun61827: for (var _fun61827_ip = 0;;) switch (_fun61827_ip) {
            case 0:
                var1 = arg0;
                var3 = null;
                var4 = var3 == var1;
                var0 = undefined;
                if (var4) {
                    _fun61827_ip = 20;
                    continue _fun61827
                }
            case 14:
                var0 = var1.extra;
            case 20:
                var0 = var3 != var0;
                if (!var0) {
                    _fun61827_ip = 50;
                    continue _fun61827
                }
            case 27:
                var3 = var3 == var1;
                var2 = undefined;
                if (var3) {
                    _fun61827_ip = 42;
                    continue _fun61827
                }
            case 36:
                var2 = var1.extra;
            case 42:
                var1 = 'application_id';
                var0 = var1 in var2;
            case 50:
                return var0;
        }
    };
    var _closure1_slot5 = var8;
    var7 = function arg0() {
        _fun61828: for (var _fun61828_ip = 0;;) switch (_fun61828_ip) {
            case 0:
                var0 = arg0;
                var1 = null;
                var2 = var1 == var0;
                var3 = undefined;
                var1 = undefined;
                if (var2) {
                    _fun61828_ip = 22;
                    continue _fun61828
                }
            case 16:
                var1 = var0.content_type;
            case 22:
                var2 = _closure1_slot0;
                var4 = _closure1_slot1;
                var0 = 0;
                var0 = var4[var0];
                var0 = var2.bind(var3)(var0);
                var0 = var0.ContentInventoryEntryType;
                var0 = var0.LISTENED_SESSION;
                var0 = var1 === var0;
                return var0;
        }
    };
    var _closure1_slot6 = var7;
    var6 = function arg0() {
        _fun61829: for (var _fun61829_ip = 0;;) switch (_fun61829_ip) {
            case 0:
                var0 = arg0;
                var1 = null;
                var2 = var1 == var0;
                var3 = undefined;
                var1 = undefined;
                if (var2) {
                    _fun61829_ip = 22;
                    continue _fun61829
                }
            case 16:
                var1 = var0.content_type;
            case 22:
                var2 = _closure1_slot0;
                var4 = _closure1_slot1;
                var0 = 0;
                var0 = var4[var0];
                var0 = var2.bind(var3)(var0);
                var0 = var0.ContentInventoryEntryType;
                var0 = var0.TOP_ARTIST;
                var0 = var1 === var0;
                return var0;
        }
    };
    var _closure1_slot7 = var6;
    var5 = function arg0() {
        _fun61830: for (var _fun61830_ip = 0;;) switch (_fun61830_ip) {
            case 0:
                var0 = arg0;
                var1 = null;
                var2 = var1 == var0;
                var3 = undefined;
                var1 = undefined;
                if (var2) {
                    _fun61830_ip = 22;
                    continue _fun61830
                }
            case 16:
                var1 = var0.content_type;
            case 22:
                var2 = _closure1_slot0;
                var4 = _closure1_slot1;
                var0 = 0;
                var0 = var4[var0];
                var0 = var2.bind(var3)(var0);
                var0 = var0.ContentInventoryEntryType;
                var0 = var0.WATCHED_MEDIA;
                var0 = var1 === var0;
                return var0;
        }
    };
    var _closure1_slot8 = var5;
    var4 = function arg0() {
        _fun61831: for (var _fun61831_ip = 0;;) switch (_fun61831_ip) {
            case 0:
                var2 = arg0;
                var0 = _closure1_slot4;
                var4 = undefined;
                var3 = var0.bind(var4)(var2);
                var0 = !var3;
                var0 = !var0;
                if (!var3) {
                    _fun61831_ip = 74;
                    continue _fun61831
                }
            case 26:
                var2 = var2.extra;
                var2 = var2.platform;
                var3 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 1;
                var1 = var5[var1];
                var1 = var3.bind(var4)(var1);
                var1 = var1.PlatformType;
                var1 = var1.XBOX;
                var0 = var2 === var1;
            case 74:
                return var0;
        }
    };
    var _closure1_slot9 = var4;
    var3 = function arg0() {
        _fun61832: for (var _fun61832_ip = 0;;) switch (_fun61832_ip) {
            case 0:
                var2 = arg0;
                var0 = _closure1_slot4;
                var4 = undefined;
                var3 = var0.bind(var4)(var2);
                var0 = !var3;
                var0 = !var0;
                if (!var3) {
                    _fun61832_ip = 74;
                    continue _fun61832
                }
            case 26:
                var2 = var2.extra;
                var2 = var2.platform;
                var3 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 1;
                var1 = var5[var1];
                var1 = var3.bind(var4)(var1);
                var1 = var1.PlatformType;
                var1 = var1.PLAYSTATION;
                var0 = var2 === var1;
            case 74:
                return var0;
        }
    };
    var _closure1_slot10 = var3;
    var0 = global;
    var16 = var0.Object;
    var15 = var16.defineProperty;
    var14 = {};
    var0 = true;
    var14.value = var0;
    var0 = '__esModule';
    var0 = var15.bind(var16)(var2, var0, var14);
    var0 = 2;
    var12 = var12[var0];
    var0 = undefined;
    var14 = var13.bind(var0)(var12);
    var13 = var14.fileFinishedImporting;
    var12 = 'modules/content_inventory/ContentInventoryTypes.tsx';
    var12 = var13.bind(var14)(var12);
    var2.isPlayedGameEntry = var11;
    var2.isTopGameEntry = var10;
    var2.isGamingLikeEntry = var9;
    var2.isApplicationEntry = var8;
    var2.isListenedSessionEntry = var7;
    var2.isTopArtistEntry = var6;
    var6 = function arg0() {
        _fun61833: for (var _fun61833_ip = 0;;) switch (_fun61833_ip) {
            case 0:
                var3 = arg0;
                var0 = _closure1_slot6;
                var2 = undefined;
                var0 = var0.bind(var2)(var3);
                if (var0) {
                    _fun61833_ip = 29;
                    continue _fun61833
                }
            case 20:
                var1 = _closure1_slot7;
                var0 = var1.bind(var2)(var3);
            case 29:
                return var0;
        }
    };
    var2.isListeningLikeEntry = var6;
    var2.isWatchedMediaEntry = var5;
    var2.isXboxEntry = var4;
    var2.isPlaystationEntry = var3;
    var3 = function arg0() {
        _fun61834: for (var _fun61834_ip = 0;;) switch (_fun61834_ip) {
            case 0:
                var3 = arg0;
                var0 = _closure1_slot9;
                var2 = undefined;
                var0 = var0.bind(var2)(var3);
                if (var0) {
                    _fun61834_ip = 29;
                    continue _fun61834
                }
            case 20:
                var1 = _closure1_slot10;
                var0 = var1.bind(var2)(var3);
            case 29:
                return var0;
        }
    };
    var2.isConsoleEntry = var3;
    var3 = function arg0() {
        _fun61835: for (var _fun61835_ip = 0;;) switch (_fun61835_ip) {
            case 0:
                var0 = arg0;
                var1 = null;
                var2 = var1 == var0;
                var3 = undefined;
                var1 = undefined;
                if (var2) {
                    _fun61835_ip = 22;
                    continue _fun61835
                }
            case 16:
                var1 = var0.content_type;
            case 22:
                var2 = _closure1_slot0;
                var4 = _closure1_slot1;
                var0 = 0;
                var0 = var4[var0];
                var0 = var2.bind(var3)(var0);
                var0 = var0.ContentInventoryEntryType;
                var0 = var0.LAUNCHED_ACTIVITY;
                var0 = var1 === var0;
                return var0;
        }
    };
    var2.isLaunchedActivityEntry = var3;
    var1 = function arg0() {
        _fun61836: for (var _fun61836_ip = 0;;) switch (_fun61836_ip) {
            case 0:
                var3 = arg0;
                var0 = _closure1_slot4;
                var2 = undefined;
                var0 = var0.bind(var2)(var3);
                if (var0) {
                    _fun61836_ip = 29;
                    continue _fun61836
                }
            case 20:
                var4 = _closure1_slot6;
                var0 = var4.bind(var2)(var3);
            case 29:
                if (var0) {
                    _fun61836_ip = 41;
                    continue _fun61836
                }
            case 32:
                var4 = _closure1_slot8;
                var0 = var4.bind(var2)(var3);
            case 41:
                if (var0) {
                    _fun61836_ip = 53;
                    continue _fun61836
                }
            case 44:
                var1 = _closure1_slot5;
                var0 = var1.bind(var2)(var3);
            case 53:
                return var0;
        }
    };
    var2.isRecentActivityEntry = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6936, 7666, 2]);