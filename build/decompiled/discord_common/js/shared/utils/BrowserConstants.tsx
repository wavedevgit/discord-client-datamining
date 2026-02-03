// ../discord_common/js/shared/utils/BrowserConstants.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun93468: for (var _fun93468_ip = 0;;) switch (_fun93468_ip) {
        case 0:
            var13 = metroImportDefault;
            var2 = exports;
            var12 = dependencyMap;
            var3 = global;
            var5 = var3.Object;
            var4 = var5.defineProperty;
            var1 = {};
            var6 = true;
            var1.value = var6;
            var0 = '__esModule';
            var0 = var4.bind(var5)(var2, var0, var1);
            var7 = var3.parseInt;
            var11 = 0;
            var1 = var12[var11];
            var0 = undefined;
            var1 = var13.bind(var0)(var1);
            var1 = var1.version;
            var5 = null;
            var8 = var5 != var1;
            var4 = '0';
            if (!var8) {
                _fun93468_ip = 84;
                continue _fun93468
            }
        case 81:
            var4 = var1;
        case 84:
            var1 = 10;
            var10 = var7.bind(var0)(var4, var1);
            var1 = var12[var11];
            var1 = var13.bind(var0)(var1);
            var1 = var1.ua;
            var9 = var5 != var1;
            if (!var9) {
                _fun93468_ip = 157;
                continue _fun93468
            }
        case 115:
            var1 = var12[var11];
            var1 = var13.bind(var0)(var1);
            var7 = var1.ua;
            var4 = var7.indexOf;
            var1 = 'OculusBrowser';
            var4 = var4.bind(var7)(var1);
            var1 = -1;
            var9 = var4 > var1;
        case 157:
            var1 = var3.window;
            var4 = 'undefined';
            var1 = typeof var1;
            if (!(var4 !== var1)) {
                _fun93468_ip = 194;
                continue _fun93468
            }
        case 173:
            var1 = var3.window;
            var1 = var1.WebSocket;
            var1 = var5 == var1;
            var8 = false;
            if (var1) {
                _fun93468_ip = 235;
                continue _fun93468
            }
        case 194:
            var1 = var12[var11];
            var1 = var13.bind(var0)(var1);
            var5 = var1.name;
            var1 = 'IE';
            if (!(var1 !== var5)) {
                _fun93468_ip = 228;
                continue _fun93468
            }
        case 216:
            var1 = 'Microsoft Edge';
            var8 = true;
            if (!(var1 === var5)) {
                _fun93468_ip = 235;
                continue _fun93468
            }
        case 228:
            var1 = 15;
            var8 = var10 >= var1;
        case 235:
            var7 = var9;
            if (var7) {
                _fun93468_ip = 278;
                continue _fun93468
            }
        case 241:
            var1 = var12[var11];
            var1 = var13.bind(var0)(var1);
            var5 = var1.name;
            var1 = 'Firefox';
            var1 = var1 === var5;
            if (!var1) {
                _fun93468_ip = 275;
                continue _fun93468
            }
        case 268:
            var5 = 80;
            var1 = var10 >= var5;
        case 275:
            var7 = var1;
        case 278:
            if (var7) {
                _fun93468_ip = 318;
                continue _fun93468
            }
        case 281:
            var1 = var12[var11];
            var1 = var13.bind(var0)(var1);
            var5 = var1.name;
            var1 = 'Chrome';
            var1 = var1 === var5;
            if (!var1) {
                _fun93468_ip = 315;
                continue _fun93468
            }
        case 308:
            var5 = 37;
            var1 = var10 >= var5;
        case 315:
            var7 = var1;
        case 318:
            if (var7) {
                _fun93468_ip = 358;
                continue _fun93468
            }
        case 321:
            var1 = var12[var11];
            var1 = var13.bind(var0)(var1);
            var5 = var1.name;
            var1 = 'Opera';
            var1 = var1 === var5;
            if (!var1) {
                _fun93468_ip = 355;
                continue _fun93468
            }
        case 348:
            var5 = 66;
            var1 = var10 >= var5;
        case 355:
            var7 = var1;
        case 358:
            if (var7) {
                _fun93468_ip = 398;
                continue _fun93468
            }
        case 361:
            var1 = var12[var11];
            var1 = var13.bind(var0)(var1);
            var5 = var1.name;
            var1 = 'Node.js';
            var1 = var1 === var5;
            if (!var1) {
                _fun93468_ip = 395;
                continue _fun93468
            }
        case 388:
            var5 = 6;
            var1 = var10 >= var5;
        case 395:
            var7 = var1;
        case 398:
            if (var7) {
                _fun93468_ip = 438;
                continue _fun93468
            }
        case 401:
            var1 = var12[var11];
            var1 = var13.bind(var0)(var1);
            var5 = var1.name;
            var1 = 'Electron';
            var1 = var1 === var5;
            if (!var1) {
                _fun93468_ip = 435;
                continue _fun93468
            }
        case 428:
            var5 = 1;
            var1 = var10 >= var5;
        case 435:
            var7 = var1;
        case 438:
            if (var7) {
                _fun93468_ip = 478;
                continue _fun93468
            }
        case 441:
            var1 = var12[var11];
            var1 = var13.bind(var0)(var1);
            var5 = var1.name;
            var1 = 'Safari';
            var1 = var1 === var5;
            if (!var1) {
                _fun93468_ip = 475;
                continue _fun93468
            }
        case 468:
            var5 = 13;
            var1 = var10 >= var5;
        case 475:
            var7 = var1;
        case 478:
            if (var7) {
                _fun93468_ip = 518;
                continue _fun93468
            }
        case 481:
            var1 = var12[var11];
            var1 = var13.bind(var0)(var1);
            var5 = var1.name;
            var1 = 'Microsoft Edge';
            var1 = var1 === var5;
            if (!var1) {
                _fun93468_ip = 515;
                continue _fun93468
            }
        case 508:
            var5 = 37;
            var1 = var10 >= var5;
        case 515:
            var7 = var1;
        case 518:
            var1 = var12[var11];
            var1 = var13.bind(var0)(var1);
            var1 = var1.name;
            var14 = 'Chrome';
            var6 = var14 === var1;
            if (var6) {
                _fun93468_ip = 569;
                continue _fun93468
            }
        case 545:
            var1 = var12[var11];
            var1 = var13.bind(var0)(var1);
            var5 = var1.name;
            var1 = 'Safari';
            var6 = var1 === var5;
        case 569:
            if (var6) {
                _fun93468_ip = 609;
                continue _fun93468
            }
        case 572:
            var1 = var12[var11];
            var1 = var13.bind(var0)(var1);
            var5 = var1.name;
            var1 = 'Firefox';
            var1 = var1 === var5;
            if (!var1) {
                _fun93468_ip = 606;
                continue _fun93468
            }
        case 599:
            var5 = 80;
            var1 = var10 >= var5;
        case 606:
            var6 = var1;
        case 609:
            if (var6) {
                _fun93468_ip = 636;
                continue _fun93468
            }
        case 612:
            var1 = var12[var11];
            var1 = var13.bind(var0)(var1);
            var5 = var1.name;
            var1 = 'Opera';
            var6 = var1 === var5;
        case 636:
            if (var6) {
                _fun93468_ip = 663;
                continue _fun93468
            }
        case 639:
            var1 = var12[var11];
            var1 = var13.bind(var0)(var1);
            var5 = var1.name;
            var1 = 'Microsoft Edge';
            var6 = var1 === var5;
        case 663:
            var1 = var3.RTCPeerConnection;
            var1 = typeof var1;
            var5 = var4 !== var1;
            if (!var5) {
                _fun93468_ip = 709;
                continue _fun93468
            }
        case 679:
            var1 = var3.RTCPeerConnection;
            var1 = var1.prototype;
            var1 = var1.addTransceiver;
            var15 = 'function';
            var1 = typeof var1;
            var5 = var15 === var1;
        case 709:
            var1 = var3.RTCRtpSender;
            var1 = typeof var1;
            var4 = var4 !== var1;
            if (!var4) {
                _fun93468_ip = 771;
                continue _fun93468
            }
        case 725:
            var1 = var3.RTCRtpSender;
            var15 = var1.prototype;
            var1 = 'transform';
            var1 = var1 in var15;
            if (var1) {
                _fun93468_ip = 768;
                continue _fun93468
            }
        case 747:
            var3 = var3.RTCRtpSender;
            var15 = var3.prototype;
            var3 = 'createEncodedStreams';
            var1 = var3 in var15;
        case 768:
            var4 = var1;
        case 771:
            var1 = var12[var11];
            var1 = var13.bind(var0)(var1);
            var1 = var1.name;
            var3 = var14 === var1;
            if (!var3) {
                _fun93468_ip = 799;
                continue _fun93468
            }
        case 792:
            var1 = 58;
            var3 = var10 >= var1;
        case 799:
            if (var3) {
                _fun93468_ip = 839;
                continue _fun93468
            }
        case 802:
            var1 = var12[var11];
            var1 = var13.bind(var0)(var1);
            var15 = var1.name;
            var1 = 'Safari';
            var1 = var1 === var15;
            if (!var1) {
                _fun93468_ip = 836;
                continue _fun93468
            }
        case 829:
            var15 = 15;
            var1 = var10 >= var15;
        case 836:
            var3 = var1;
        case 839:
            if (var3) {
                _fun93468_ip = 879;
                continue _fun93468
            }
        case 842:
            var1 = var12[var11];
            var1 = var13.bind(var0)(var1);
            var15 = var1.name;
            var1 = 'Firefox';
            var1 = var1 === var15;
            if (!var1) {
                _fun93468_ip = 876;
                continue _fun93468
            }
        case 869:
            var15 = 108;
            var1 = var10 >= var15;
        case 876:
            var3 = var1;
        case 879:
            var1 = var12[var11];
            var1 = var13.bind(var0)(var1);
            var1 = var1.name;
            var1 = var14 === var1;
            if (!var1) {
                _fun93468_ip = 907;
                continue _fun93468
            }
        case 900:
            var14 = 72;
            var1 = var10 >= var14;
        case 907:
            if (var1) {
                _fun93468_ip = 947;
                continue _fun93468
            }
        case 910:
            var14 = var12[var11];
            var14 = var13.bind(var0)(var14);
            var15 = var14.name;
            var14 = 'Safari';
            var14 = var14 === var15;
            if (!var14) {
                _fun93468_ip = 944;
                continue _fun93468
            }
        case 937:
            var15 = 11;
            var14 = var10 >= var15;
        case 944:
            var1 = var14;
        case 947:
            if (var1) {
                _fun93468_ip = 987;
                continue _fun93468
            }
        case 950:
            var14 = var12[var11];
            var14 = var13.bind(var0)(var14);
            var15 = var14.name;
            var14 = 'Opera';
            var14 = var14 === var15;
            if (!var14) {
                _fun93468_ip = 984;
                continue _fun93468
            }
        case 977:
            var15 = 60;
            var14 = var10 >= var15;
        case 984:
            var1 = var14;
        case 987:
            if (var1) {
                _fun93468_ip = 1027;
                continue _fun93468
            }
        case 990:
            var11 = var12[var11];
            var11 = var13.bind(var0)(var11);
            var13 = var11.name;
            var11 = 'Microsoft Edge';
            var11 = var11 === var13;
            if (!var11) {
                _fun93468_ip = 1024;
                continue _fun93468
            }
        case 1017:
            var13 = 79;
            var11 = var10 >= var13;
        case 1024:
            var1 = var11;
        case 1027:
            var11 = 1;
            var12 = var12[var11];
            var11 = require;
            var13 = var11.bind(var0)(var12);
            var12 = var13.fileFinishedImporting;
            var11 = '../discord_common/js/shared/utils/BrowserConstants.tsx';
            var11 = var12.bind(var13)(var11);
            var2.BROWSER_VERSION = var10;
            var2.IS_OCULUS_BROWSER = var9;
            var2.IS_APP_COMPATIBLE_BROWSER = var8;
            var2.BROWSER_SUPPORTS_VOICE = var7;
            var2.BROWSER_SUPPORTS_VIDEO = var6;
            var2.BROWSER_SUPPORTS_UNIFIED_PLAN = var5;
            var2.BROWSER_SUPPORTS_ENCODED_TRANSFORMS = var4;
            var2.BROWSER_SUPPORTS_DIAGNOSTICS = var3;
            var2.BROWSER_SUPPORTS_CONNECTION_STATE = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [654, 2]);