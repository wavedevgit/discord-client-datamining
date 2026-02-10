// modules/content_inventory/ContentInventoryTypes.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var13 = require;
    var2 = exports;
    var12 = dependencyMap;
    var _closure1_slot0 = var13;
    var _closure1_slot1 = var12;
    var11 = function arg0() {
        _fun62748: for (var _fun62748_ip = 0;;) switch (_fun62748_ip) {
            case 0:
                var0 = arg0;
                var1 = null;
                var2 = var1 == var0;
                var3 = undefined;
                var1 = undefined;
                if (var2) {
                    _fun62748_ip = 22;
                    continue _fun62748
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
        _fun62749: for (var _fun62749_ip = 0;;) switch (_fun62749_ip) {
            case 0:
                var0 = arg0;
                var1 = null;
                var2 = var1 == var0;
                var3 = undefined;
                var1 = undefined;
                if (var2) {
                    _fun62749_ip = 22;
                    continue _fun62749
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
        _fun62750: for (var _fun62750_ip = 0;;) switch (_fun62750_ip) {
            case 0:
                var3 = arg0;
                var0 = _closure1_slot2;
                var2 = undefined;
                var0 = var0.bind(var2)(var3);
                if (var0) {
                    _fun62750_ip = 29;
                    continue _fun62750
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
        _fun62751: for (var _fun62751_ip = 0;;) switch (_fun62751_ip) {
            case 0:
                var1 = arg0;
                var3 = null;
                var4 = var3 == var1;
                var0 = undefined;
                if (var4) {
                    _fun62751_ip = 20;
                    continue _fun62751
                }
            case 14:
                var0 = var1.extra;
            case 20:
                var0 = var3 != var0;
                if (!var0) {
                    _fun62751_ip = 50;
                    continue _fun62751
                }
            case 27:
                var3 = var3 == var1;
                var2 = undefined;
                if (var3) {
                    _fun62751_ip = 42;
                    continue _fun62751
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
        _fun62752: for (var _fun62752_ip = 0;;) switch (_fun62752_ip) {
            case 0:
                var0 = arg0;
                var1 = null;
                var2 = var1 == var0;
                var3 = undefined;
                var1 = undefined;
                if (var2) {
                    _fun62752_ip = 22;
                    continue _fun62752
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
        _fun62753: for (var _fun62753_ip = 0;;) switch (_fun62753_ip) {
            case 0:
                var0 = arg0;
                var1 = null;
                var2 = var1 == var0;
                var3 = undefined;
                var1 = undefined;
                if (var2) {
                    _fun62753_ip = 22;
                    continue _fun62753
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
        _fun62754: for (var _fun62754_ip = 0;;) switch (_fun62754_ip) {
            case 0:
                var0 = arg0;
                var1 = null;
                var2 = var1 == var0;
                var3 = undefined;
                var1 = undefined;
                if (var2) {
                    _fun62754_ip = 22;
                    continue _fun62754
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
        _fun62755: for (var _fun62755_ip = 0;;) switch (_fun62755_ip) {
            case 0:
                var2 = arg0;
                var0 = _closure1_slot4;
                var4 = undefined;
                var3 = var0.bind(var4)(var2);
                var0 = !var3;
                var0 = !var0;
                if (!var3) {
                    _fun62755_ip = 74;
                    continue _fun62755
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
        _fun62756: for (var _fun62756_ip = 0;;) switch (_fun62756_ip) {
            case 0:
                var2 = arg0;
                var0 = _closure1_slot4;
                var4 = undefined;
                var3 = var0.bind(var4)(var2);
                var0 = !var3;
                var0 = !var0;
                if (!var3) {
                    _fun62756_ip = 74;
                    continue _fun62756
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
        _fun62757: for (var _fun62757_ip = 0;;) switch (_fun62757_ip) {
            case 0:
                var3 = arg0;
                var0 = _closure1_slot6;
                var2 = undefined;
                var0 = var0.bind(var2)(var3);
                if (var0) {
                    _fun62757_ip = 29;
                    continue _fun62757
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
        _fun62758: for (var _fun62758_ip = 0;;) switch (_fun62758_ip) {
            case 0:
                var3 = arg0;
                var0 = _closure1_slot9;
                var2 = undefined;
                var0 = var0.bind(var2)(var3);
                if (var0) {
                    _fun62758_ip = 29;
                    continue _fun62758
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
        _fun62759: for (var _fun62759_ip = 0;;) switch (_fun62759_ip) {
            case 0:
                var0 = arg0;
                var1 = null;
                var2 = var1 == var0;
                var3 = undefined;
                var1 = undefined;
                if (var2) {
                    _fun62759_ip = 22;
                    continue _fun62759
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
        _fun62760: for (var _fun62760_ip = 0;;) switch (_fun62760_ip) {
            case 0:
                var3 = arg0;
                var0 = _closure1_slot4;
                var2 = undefined;
                var0 = var0.bind(var2)(var3);
                if (var0) {
                    _fun62760_ip = 29;
                    continue _fun62760
                }
            case 20:
                var4 = _closure1_slot6;
                var0 = var4.bind(var2)(var3);
            case 29:
                if (var0) {
                    _fun62760_ip = 41;
                    continue _fun62760
                }
            case 32:
                var4 = _closure1_slot8;
                var0 = var4.bind(var2)(var3);
            case 41:
                if (var0) {
                    _fun62760_ip = 53;
                    continue _fun62760
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [6910, 7876, 2]);