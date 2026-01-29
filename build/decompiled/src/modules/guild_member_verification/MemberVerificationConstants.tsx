// modules/guild_member_verification/MemberVerificationConstants.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var2 = exports;
    var8 = dependencyMap;
    var1 = global;
    var5 = var1.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var4 = {};
    var3 = 0;
    var5 = var8[var3];
    var0 = undefined;
    var5 = var7.bind(var0)(var5);
    var5 = var5.VerificationFormFieldTypes;
    var5 = var5.VERIFICATION;
    var4.field_type = var5;
    var5 = new Array(1);
    var5[0] = var4;
    var9 = var1.Set;
    var4 = var8[var3];
    var4 = var7.bind(var0)(var4);
    var4 = var4.VerificationFormFieldTypes;
    var6 = var4.TERMS;
    var4 = new Array(1);
    var4[0] = var6;
    var6 = var9.prototype;
    var6 = Object.create(var6, {
        constructor: {
            value: var9
        }
    });
    var13 = var6;
    var12 = var4;
    var4 = new var13[var9](var12, var11);
    var4 = var4 instanceof Object ? var4 : var6;
    var6 = var1.Set;
    var1 = var8[var3];
    var1 = var7.bind(var0)(var1);
    var1 = var1.VerificationFormFieldTypes;
    var9 = var1.MULTIPLE_CHOICE;
    var1 = new Array(3);
    var1[0] = var9;
    var9 = var8[var3];
    var9 = var7.bind(var0)(var9);
    var9 = var9.VerificationFormFieldTypes;
    var9 = var9.TEXT_INPUT;
    var1[1] = var9;
    var3 = var8[var3];
    var3 = var7.bind(var0)(var3);
    var3 = var3.VerificationFormFieldTypes;
    var3 = var3.PARAGRAPH;
    var1[2] = var3;
    var3 = var6.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var6
        }
    });
    var13 = var3;
    var12 = var1;
    var1 = new var13[var6](var12, var11);
    var3 = var1 instanceof Object ? var1 : var3;
    var1 = {};
    var6 = 'VERIFICATION_INFO';
    var1.VERIFICATION_INFO = var6;
    var6 = 1;
    var6 = var8[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/guild_member_verification/MemberVerificationConstants.tsx';
    var6 = var7.bind(var8)(var6);
    var2.REQUIRED_FORM_FIELDS = var5;
    var2.AUTOMATIC_APPROVAL_FORM_FIELDS = var4;
    var2.MANUAL_APPROVAL_FORM_FIELDS = var3;
    var3 = 5;
    var2.MAX_FORM_ELEMENTS = var3;
    var3 = 16;
    var2.MAX_NUM_RULES = var3;
    var3 = 300;
    var2.MAX_RULE_LENGTH = var3;
    var2.MAX_QUESTION_LENGTH = var3;
    var4 = 150;
    var2.MAX_PLACEHOLDER_LENGTH = var4;
    var5 = 8;
    var2.MAX_NUM_CHOICES = var5;
    var2.MAX_CHOICE_LENGTH = var4;
    var2.MAX_TEXT_RESPONSE_LENGTH = var4;
    var4 = 1000;
    var2.MAX_PARAGRAPH_RESPONSE_LENGTH = var4;
    var2.MAX_DESCRIPTION_LENGTH = var3;
    var3 = 'Membership Gating';
    var2.MEMBER_VERIFICATION_TYPE = var3;
    var3 = 'in-app-member-verification';
    var2.IN_APP_MEMBER_VERIFICATION_MODAL_KEY = var3;
    var2.MemberVerificationModalStates = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3175, 2]);