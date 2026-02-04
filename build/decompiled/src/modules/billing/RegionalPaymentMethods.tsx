// modules/billing/RegionalPaymentMethods.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var7 = global;
    var8 = var7.Object;
    var4 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var14 = var3.PaymentSourceTypes;
    var3 = 1;
    var3 = var6[var3];
    var9 = var5.bind(var0)(var3);
    var8 = var9.createExperiment;
    var3 = {
        'kind': 'user',
        'id': '2021-08_regional_payment_methods',
        'label': 'Regional Payment Methods'
    };
    var4 = {};
    var10 = new Array(0);
    var4.enabledPaymentTypes = var10;
    var10 = null;
    var4.forceCountryCode = var10;
    var10 = new Array(0);
    var4.validCountryCodes = var10;
    var3.defaultConfig = var4;
    var4 = {
        'id': 1,
        'label': 'Regional Payment Method for Germany'
    };
    var10 = {};
    var11 = new Array(0);
    var10.enabledPaymentTypes = var11;
    var15 = 'DE';
    var10.forceCountryCode = var15;
    var11 = ['DE'];
    var10.validCountryCodes = var11;
    var4.config = var10;
    var10 = new Array(16);
    var10[0] = var4;
    var4 = {
        'id': 2,
        'label': 'Regional Payment Method for US'
    };
    var11 = {};
    var13 = var14.VENMO;
    var12 = new Array(2);
    var12[0] = var13;
    var13 = var14.CASH_APP;
    var12[1] = var13;
    var11.enabledPaymentTypes = var12;
    var13 = 'US';
    var11.forceCountryCode = var13;
    var12 = ['US'];
    var11.validCountryCodes = var12;
    var4.config = var11;
    var10[1] = var4;
    var11 = {
        'id': 3,
        'label': 'Regional Payment Method for Brazil'
    };
    var4 = 3;
    var12 = {};
    var16 = new Array(0);
    var12.enabledPaymentTypes = var16;
    var16 = 'BR';
    var12.forceCountryCode = var16;
    var16 = ['BR'];
    var12.validCountryCodes = var16;
    var11.config = var12;
    var10[2] = var11;
    var11 = {
        'id': 4,
        'label': 'Regional Payment Method for Turkey'
    };
    var12 = {};
    var16 = new Array(0);
    var12.enabledPaymentTypes = var16;
    var16 = 'TR';
    var12.forceCountryCode = var16;
    var16 = ['TR'];
    var12.validCountryCodes = var16;
    var11.config = var12;
    var10[3] = var11;
    var11 = {
        'id': 5,
        'label': 'Regional Payment Method for Poland'
    };
    var12 = {};
    var17 = var14.PRZELEWY24;
    var16 = new Array(1);
    var16[0] = var17;
    var12.enabledPaymentTypes = var16;
    var16 = 'PL';
    var12.forceCountryCode = var16;
    var16 = ['PL'];
    var12.validCountryCodes = var16;
    var11.config = var12;
    var10[4] = var11;
    var11 = {
        'id': 6,
        'label': 'Enable paysafecard'
    };
    var12 = {};
    var17 = var14.PAYSAFE_CARD;
    var16 = new Array(1);
    var16[0] = var17;
    var12.enabledPaymentTypes = var16;
    var12.forceCountryCode = var15;
    var15 = ['BG', 'CZ', 'DK', 'HU', 'RO', 'SE', 'DE'];
    var12.validCountryCodes = var15;
    var11.config = var12;
    var10[5] = var11;
    var11 = {
        'id': 7,
        'label': 'Regional Payment Method for Philippines'
    };
    var12 = {};
    var16 = var14.GCASH;
    var15 = new Array(1);
    var15[0] = var16;
    var12.enabledPaymentTypes = var15;
    var15 = 'PH';
    var12.forceCountryCode = var15;
    var15 = ['PH'];
    var12.validCountryCodes = var15;
    var11.config = var12;
    var10[6] = var11;
    var11 = {
        'id': 8,
        'label': 'Regional Payment Method for Malaysia'
    };
    var12 = {};
    var16 = var14.GRABPAY_MY;
    var15 = new Array(1);
    var15[0] = var16;
    var12.enabledPaymentTypes = var15;
    var15 = 'MY';
    var12.forceCountryCode = var15;
    var15 = ['MY'];
    var12.validCountryCodes = var15;
    var11.config = var12;
    var10[7] = var11;
    var11 = {
        'id': 9,
        'label': 'Regional Payment Method for Vietnam'
    };
    var12 = {};
    var16 = var14.MOMO_WALLET;
    var15 = new Array(1);
    var15[0] = var16;
    var12.enabledPaymentTypes = var15;
    var15 = 'VN';
    var12.forceCountryCode = var15;
    var15 = ['VN'];
    var12.validCountryCodes = var15;
    var11.config = var12;
    var10[8] = var11;
    var11 = {
        'id': 10,
        'label': 'Regional Payment Method for Indonesia'
    };
    var12 = {};
    var16 = var14.GOPAY_WALLET;
    var15 = new Array(1);
    var15[0] = var16;
    var12.enabledPaymentTypes = var15;
    var15 = 'ID';
    var12.forceCountryCode = var15;
    var15 = ['ID'];
    var12.validCountryCodes = var15;
    var11.config = var12;
    var10[9] = var11;
    var11 = {
        'id': 11,
        'label': 'Regional Payment Method for South Korea'
    };
    var12 = {};
    var16 = var14.KAKAOPAY;
    var15 = new Array(1);
    var15[0] = var16;
    var12.enabledPaymentTypes = var15;
    var15 = 'KR';
    var12.forceCountryCode = var15;
    var15 = ['KR'];
    var12.validCountryCodes = var15;
    var11.config = var12;
    var10[10] = var11;
    var11 = {
        'id': 12,
        'label': 'Regional Payment Method for Belgium'
    };
    var12 = {};
    var16 = var14.PAYSAFE_CARD;
    var15 = new Array(2);
    var15[0] = var16;
    var16 = var14.BANCONTACT;
    var15[1] = var16;
    var12.enabledPaymentTypes = var15;
    var15 = 'BE';
    var12.forceCountryCode = var15;
    var15 = ['BE'];
    var12.validCountryCodes = var15;
    var11.config = var12;
    var10[11] = var11;
    var11 = {
        'id': 13,
        'label': 'Regional Payment Method for Austria'
    };
    var12 = {};
    var16 = var14.PAYSAFE_CARD;
    var15 = new Array(2);
    var15[0] = var16;
    var16 = var14.EPS;
    var15[1] = var16;
    var12.enabledPaymentTypes = var15;
    var15 = 'AT';
    var12.forceCountryCode = var15;
    var15 = ['AT'];
    var12.validCountryCodes = var15;
    var11.config = var12;
    var10[12] = var11;
    var11 = {
        'id': 14,
        'label': 'Regional Payment Method for Netherlands'
    };
    var12 = {};
    var16 = var14.PAYSAFE_CARD;
    var15 = new Array(2);
    var15[0] = var16;
    var16 = var14.IDEAL;
    var15[1] = var16;
    var12.enabledPaymentTypes = var15;
    var15 = 'NL';
    var12.forceCountryCode = var15;
    var15 = ['NL'];
    var12.validCountryCodes = var15;
    var11.config = var12;
    var10[13] = var11;
    var11 = {
        'id': 15,
        'label': 'Launch Paysafecard'
    };
    var12 = {};
    var16 = var14.PAYSAFE_CARD;
    var15 = new Array(1);
    var15[0] = var16;
    var12.enabledPaymentTypes = var15;
    var15 = 'ES';
    var12.forceCountryCode = var15;
    var15 = ['ES', 'IT'];
    var12.validCountryCodes = var15;
    var11.config = var12;
    var10[14] = var11;
    var11 = {
        'id': 16,
        'label': 'Launch Cash App'
    };
    var12 = {};
    var15 = var14.CASH_APP;
    var14 = new Array(1);
    var14[0] = var15;
    var12.enabledPaymentTypes = var14;
    var12.forceCountryCode = var13;
    var13 = ['US'];
    var12.validCountryCodes = var13;
    var11.config = var12;
    var10[15] = var11;
    var3.treatments = var10;
    var3 = var8.bind(var9)(var3);
    var10 = var7.Map;
    var8 = new Array(15);
    var9 = ['abn_amro', 'ABN AMRO'];
    var8[0] = var9;
    var9 = ['asn_bank', 'ASN Bank'];
    var8[1] = var9;
    var9 = ['bunq', 'Bunq'];
    var8[2] = var9;
    var9 = ['ing ', 'ING'];
    var8[3] = var9;
    var9 = ['knab', 'Knab'];
    var8[4] = var9;
    var9 = ['n26', 'N26'];
    var8[5] = var9;
    var9 = ['nn', 'Nationale-Nederlanden'];
    var8[6] = var9;
    var9 = ['rabobank', 'Rabobank'];
    var8[7] = var9;
    var9 = ['revolut', 'Revolut'];
    var8[8] = var9;
    var9 = ['regiobank', 'RegioBank'];
    var8[9] = var9;
    var9 = ['sns_bank', 'SNS Bank (De Volksbank)'];
    var8[10] = var9;
    var9 = ['triodos_bank', 'Triodos Bank'];
    var8[11] = var9;
    var9 = ['van_lanschot', 'Van Lanschot'];
    var8[12] = var9;
    var9 = ['yoursafe', 'Yoursafe'];
    var8[13] = var9;
    var9 = ['handelsbanken', 'Handelsbanken'];
    var8[14] = var9;
    var9 = var10.prototype;
    var9 = Object.create(var9, {
        constructor: {
            value: var10
        }
    });
    var21 = var9;
    var20 = var8;
    var8 = new var21[var10](var20, var19);
    var8 = var8 instanceof Object ? var8 : var9;
    var _closure1_slot2 = var8;
    var9 = var7.Map;
    var7 = new Array(27);
    var8 = ['arzte_und_apotheker_bank', 'Ärzte- und Apothekerbank'];
    var7[0] = var8;
    var8 = ['austrian_anadi_bank_ag', 'Austrian Anadi Bank AG'];
    var7[1] = var8;
    var8 = ['bank_austria', 'Bank Austria'];
    var7[2] = var8;
    var8 = ['bankhaus_carl_spangler', 'Bankhaus Carl Spängler & Co.AG'];
    var7[3] = var8;
    var8 = ['bankhaus_schelhammer_und_schattera_ag', 'Bankhaus Schelhammer & Schattera AG'];
    var7[4] = var8;
    var8 = ['bawag_psk_ag', 'BAWAG P.S.K. AG'];
    var7[5] = var8;
    var8 = ['bks_bank_ag', 'BKS Bank AG'];
    var7[6] = var8;
    var8 = ['brull_kallmus_bank_ag', 'Brüll Kallmus Bank AG'];
    var7[7] = var8;
    var8 = ['btv_vier_lander_bank', 'BTV VIER LÄNDER BANK'];
    var7[8] = var8;
    var8 = ['capital_bank_grawe_gruppe_ag', 'Capital Bank Grawe Gruppe AG'];
    var7[9] = var8;
    var8 = ['dolomitenbank', 'Dolomitenbank'];
    var7[10] = var8;
    var8 = ['easybank_ag', 'Easybank AG'];
    var7[11] = var8;
    var8 = ['erste_bank_und_sparkassen', 'Erste Bank und Sparkassen'];
    var7[12] = var8;
    var8 = ['hypo_alpeadriabank_international_ag', 'Hypo Alpe-Adria-Bank International AG'];
    var7[13] = var8;
    var8 = ['hypo_noe_lb_fur_niederosterreich_u_wien', 'HYPO NOE LB für Niederösterreich u. Wien'];
    var7[14] = var8;
    var8 = ['hypo_oberosterreich_salzburg_steiermark', 'HYPO Oberösterreich, Salzburg, Steiermark'];
    var7[15] = var8;
    var8 = ['hypo_tirol_bank_ag', 'Hypo Tirol Bank AG'];
    var7[16] = var8;
    var8 = ['hypo_vorarlberg_bank_ag', 'Hypo Vorarlberg Bank AG'];
    var7[17] = var8;
    var8 = ['hypo_bank_burgenland_aktiengesellschaft', 'HYPO-BANK BURGENLAND Aktiengesellschaft'];
    var7[18] = var8;
    var8 = ['marchfelder_bank', 'Marchfelder Bank'];
    var7[19] = var8;
    var8 = ['oberbank_ag', 'Oberbank AG'];
    var7[20] = var8;
    var8 = ['raiffeisen_bankengruppe_osterreich', 'Raiffeisen Bankengruppe Österreich'];
    var7[21] = var8;
    var8 = ['schoellerbank_ag', 'Schoellerbank AG'];
    var7[22] = var8;
    var8 = ['sparda_bank_wien', 'Sparda-Bank Wien'];
    var7[23] = var8;
    var8 = ['volksbank_gruppe', 'Volksbank Gruppe'];
    var7[24] = var8;
    var8 = ['volkskreditbank_ag', 'Volkskreditbank AG'];
    var7[25] = var8;
    var8 = ['vr_bank_braunau', 'VR-Bank Braunau'];
    var7[26] = var8;
    var8 = var9.prototype;
    var8 = Object.create(var8, {
        constructor: {
            value: var9
        }
    });
    var21 = var8;
    var20 = var7;
    var7 = new var21[var9](var20, var19);
    var7 = var7 instanceof Object ? var7 : var8;
    var _closure1_slot3 = var7;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/billing/RegionalPaymentMethods.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var3 = function arg0() {
        _fun29564: for (var _fun29564_ip = 0;;) switch (_fun29564_ip) {
            case 0:
                var3 = arg0;
                var6 = undefined;
                if (!(var6 !== var3)) {
                    _fun29564_ip = 29;
                    continue _fun29564
                }
            case 9:
                var2 = _closure1_slot2;
                var0 = var2.has;
                var0 = var0.bind(var2)(var3);
                if (var0) {
                    _fun29564_ip = 89;
                    continue _fun29564
                }
            case 29:
                var5 = _closure1_slot0;
                var7 = _closure1_slot1;
                var0 = 2;
                var2 = var7[var0];
                var2 = var5.bind(var6)(var2);
                var4 = var2.intl;
                var2 = var4.string;
                var0 = var7[var0];
                var0 = var5.bind(var6)(var0);
                var0 = var0.t;
                var0 = var0.jdPblk;
                var0 = var2.bind(var4)(var0);
                _fun29564_ip = 103;
                continue _fun29564;
            case 89:
                var2 = _closure1_slot2;
                var1 = var2.get;
                var0 = var1.bind(var2)(var3);
            case 103:
                return var0;
        }
    };
    var2.getIdealBankDisplayNameFromBankName = var3;
    var1 = function arg0() {
        _fun29565: for (var _fun29565_ip = 0;;) switch (_fun29565_ip) {
            case 0:
                var3 = arg0;
                var6 = undefined;
                if (!(var6 !== var3)) {
                    _fun29565_ip = 29;
                    continue _fun29565
                }
            case 9:
                var2 = _closure1_slot3;
                var0 = var2.has;
                var0 = var0.bind(var2)(var3);
                if (var0) {
                    _fun29565_ip = 89;
                    continue _fun29565
                }
            case 29:
                var5 = _closure1_slot0;
                var7 = _closure1_slot1;
                var0 = 2;
                var2 = var7[var0];
                var2 = var5.bind(var6)(var2);
                var4 = var2.intl;
                var2 = var4.string;
                var0 = var7[var0];
                var0 = var5.bind(var6)(var0);
                var0 = var0.t;
                var0 = var0.jdPblk;
                var0 = var2.bind(var4)(var0);
                _fun29565_ip = 103;
                continue _fun29565;
            case 89:
                var2 = _closure1_slot3;
                var1 = var2.get;
                var0 = var1.bind(var2)(var3);
            case 103:
                return var0;
        }
    };
    var2.getEPSBankDisplayNameFromBankName = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 3115, 1234, 2]);